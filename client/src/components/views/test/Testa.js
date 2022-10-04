import React, { useEffect, useState } from "react";
import { Card, Avatar, Col, Typography, Row } from "antd";
import Icon from "@ant-design/icons";
import axios from "axios";
import moment from "moment";
const { Title } = Typography;
const { Meta } = Card;

const Testa = () => {
  const [Image, setImage] = useState([]);
  useEffect(() => {
    axios.get("/api/image/getImages").then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setImage(response.data.images);
      } else {
        alert("이미지 가져오기 실패");
      }
    });
  }, []);

  const renderCards = Image.map((image, index) => {
    var minutes = Math.floor(image.duration / 60);
    var seconds = Math.floor(image.duration - minutes * 60);
    return (
      <Col lg={6} md={8} xs={24}>
        <a href={`/image/post/${image._id}`}>
          <div style={{ posithon: "relative" }}>
            <img
              style={{ width: "100%" }}
              src={`http://localhost:5000/${image.filePath}`}
            />
            <div className="duration"></div>
            <span>
              {minutes} : {seconds}{" "}
            </span>
          </div>
        </a>
        <br />
        <Meta
          avatar={<Avatar src={image.writer.image} />}
          title={image.title}
          description=""
        />
        <span>{image.writer.name} </span>
        <br />
        <span style={{ marginLeft: "3rem" }}>{image.views} views </span> -{" "}
        <span>{moment(image.createdAt).format("yyyy/MMM/Do hh:mm:ss")}</span>
      </Col>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}> TEST </Title>
      <hr />
      <Row gutter={[32, 16]}>{renderCards}</Row>
    </div>
  );
};

export default Testa;
