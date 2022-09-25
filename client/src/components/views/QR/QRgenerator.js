// import React, { useState, useRef } from "react";
// import { Fab, TextField, TextareaAutosize, Grid } from "@material-ui/core";
// import { ArrowBack, GetApp } from "@material-ui/icons";
// import { Link } from "react-router-dom";
// import QRcode from "qrcode.react";

// // 주소, 나이 추가하기

// function QRgenerator() {
//   const [qr, setQr] = useState("이름");
//   const handleChange = (event) => {
//     setQr(event.target.value);
//   };
//   const [qr2, setQr2] = useState("00000000");
//   const handleChange2 = (event) => {
//     setQr2(event.target.value);
//   };
//   const downloadQR = () => {
//     const canvas = document.getElementById("myqr");
//     const pngUrl = canvas
//       .toDataURL("image/png")
//       .replace("image/png", "image/octet-stream");
//     let downloadLink = document.createElement("a");
//     downloadLink.href = pngUrl;
//     downloadLink.download = "myqr.png";
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   // const [imageUrl, setImageUrl] = useState(null);
//   // const imgRef = useRef();

//   // const onChangeImage = () => {
//   //   const reader = new FileReader();
//   //   const file = imgRef.current.files[0];
//   //   console.log(file);

//   //   reader.readAsDataURL(file);
//   //   reader.onloadend = () => {
//   //     setImageUrl(reader.result);
//   //     console.log("이미지주소", reader.result);
//   //   };
//   // };
//   // const onClickFileBtn = (e) => {
//   //   imgRef.current.click();
//   // };

//   return (
//     <div>
//       <Link to="/">
//         <Fab style={{ marginRight: 10 }} color="primary">
//           <ArrowBack />
//         </Fab>
//       </Link>
//       <span>QR Generator</span>
//       <div style={{ marginTop: 30 }}>
//         <TextField
//           onChange={handleChange}
//           style={{ width: 320 }}
//           value={qr}
//           label="이름"
//           size="large"
//           variant="outlined"
//           color="primary"
//         />
//       </div>
//       <div style={{ marginTop: 30 }}>
//         <TextField
//           onChange={handleChange2}
//           style={{ width: 320 }}
//           value={qr2}
//           label="주민번호"
//           size="large"
//           variant="outlined"
//           color="primary"
//           type="password"
//         />
//       </div>
//       {/* <img src={imageUrl ? imageUrl : "/img/profile.png"}></img>
//       <input
//         type="file"
//         ref={imgRef}
//         onChange={onChangeImage}
//         style={{ display: "none" }}
//       ></input> */}
//       {/* <button
//         onClick={() => {
//           onClickFileBtn();
//         }}
//       >
//         이미지 업로드
//       </button> */}

//       <div>
//         {qr ? (
//           <QRcode id="myqr" value={qr + qr2} size={300} includeMargin={true} />
//         ) : (
//           <p>No QR code preview</p>
//         )}
//       </div>
//       <div>
//         {[qr, qr2] ? (
//           <Grid container>
//             <Grid item xs={10}>
//               <TextareaAutosize
//                 style={{ fontSize: 18, width: 250, height: 100 }}
//                 rowsMax={4}
//                 defaultValue={qr + qr2}
//                 value={qr + qr2}
//               />
//             </Grid>
//             <Grid item xs={2}>
//               <Fab
//                 onClick={downloadQR}
//                 style={{ marginLeft: 10 }}
//                 color="primary"
//               >
//                 <GetApp />
//               </Fab>
//             </Grid>
//           </Grid>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// }

// export default QRgenerator;

import QRCode from "qrcode";
import { useState } from "react";
import "../QR/qr.css";

function QRgenerator() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Generator</h1>
      <input
        type="text"
        placeholder="vc value"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qr && (
        <>
          <img src={qr} />
          <a href={qr} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default QRgenerator;
