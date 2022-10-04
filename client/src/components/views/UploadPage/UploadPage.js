import React, { useState } from "react";
import { Typography, Button, form, message, Input } from "antd";
import Icon from "@ant-design/icons";
import Dropzone from "react-dropzone";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const UploadPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [ImageTitle, setImageTitle] = useState("");
  const [FilePath, setFilePath] = useState("");
  const [Duration, setDuration] = useState("");
  const [ThumbnailPath, setThumbnailPath] = useState("");

  const onTitleChange = (event) => {
    setImageTitle(event.currentTarget.value);
  };

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    axios.post("/api/image/uploadfiles", formData, config).then((response) => {
      if (response.data.success) {
        console.log(response.data);

        let variable = {
          url: response.data.url,
          fileName: response.data.fileName,
        };

        setFilePath(response.data.url);

        axios.post("/api/image/thumbnail", variable).then((response) => {
          if (response.data.success) {
            console.log(response.data);

            setDuration(response.data.fileDuration);
            setThumbnailPath(response.data.url);
          } else {
            alert("썸네일 생성 실패");
          }
        });
      } else {
        alert("실패");
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const variable = {
      writer: user.userData._id,
      title: ImageTitle,
      filePath: FilePath,
      duration: Duration,
      thumbnail: ThumbnailPath,
    };

    axios.post("/api/image/uploadImage", variable).then((response) => {
      if (response.data.success) {
        message.success("성공적으로 업로드");

        setTimeout(() => {
          navigate("/qr_generator");
        }, 3000);
      } else {
        alert("비디오 업로드 실패");
      }
    });
  };

  return (
    <div style={{ maxwidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>upload</Title>
      </div>

      <form onSubmit={onSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Drop zone*/}

          <Dropzone onDrop={onDrop} multiple={false} maxSize={100000000000}>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <Icon type="plus" style={{ fontSize: "3rem" }} />
              </div>
            )}
          </Dropzone>
          {ThumbnailPath && (
            <div>
              <img
                src={`http://localhost:5000/${ThumbnailPath}`}
                alt="thumbnail"
              />
            </div>
          )}
        </div>

        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={ImageTitle} />

        <br />
        <br />

        <Button type="primary" size="large" onClick={onSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UploadPage;
