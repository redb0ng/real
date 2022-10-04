const express = require("express");
const router = express.Router();
const { Image } = require("../models/Image");
const { auth } = require("../middleware/auth");
const multer = require("multer");
const path = require("path");
var ffmpeg = require("fluent-ffmpeg");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" || ext !== ".mp4") {
      return cb(res.status(400).end("only jpg, png is allowed"), false);
    }
    cb(null, true);
  },
});

const upload = multer({ storage: storage }).single("file");

// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     if (ext !== ".jpg" || ext !== ".png") {
//       return cb(res.status(400).end("only jpg, png is allowed"), false);
//     }
//     cb(null, true);
//   },
// });

router.post("/uploadfiles", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      url: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/uploadImage", (req, res) => {
  const image = new Image(req.body);

  image.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

router.get("/getImages", (req, res) => {
  //이미지 DB에서 가져와서 클라이언트에 보내기
  Image.find()
    .populate("writer")
    .exec((err, images) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, images });
    });
});

router.post("/thumbnail", (req, res) => {
  let filePath = "";
  let fileDuration = "";

  ffmpeg.ffprobe(req.body.url, function (err, metadata) {
    console.dir(metadata);
    console.log(metadata.format.duration);

    fileDuration = metadata.format.duration;
  });

  ffmpeg(req.body.url)
    .on("filenames", function (filenames) {
      console.log("Will generate " + filenames.join(", "));
      console.log(filenames);
      filePath = "uploads/thumbnails/" + filenames[0];
    })
    .on("end", function () {
      console.log("Screenshots taken");
      return res.json({
        success: true,
        url: filePath,
        fileDuration: fileDuration,
      });
    })
    .on("error", function (err) {
      console.error(err);
      return res.json({ success: false, err });
    })
    .screenshots({
      // Will take screens at 20%, 40%, 60% and 80% of the video
      count: 3,
      folder: "uploads/thumbnails",
      size: "320x240",
      // %b input basename ( filename w/o extension )
      filename: "thumbnail-%b.png",
    });
});

// router.post("/getvideo", (req, res) => {
//   Image.find()
//     .poulate("writer")
//     .exec((err, videos) => {
//       if (err) return res.status(400).send(err);
//       res.status(200).json({ success: true, videos });
//     });
// });

module.exports = router;
