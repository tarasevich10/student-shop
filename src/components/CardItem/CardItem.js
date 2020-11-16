import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ title='No title.', text, imageSrc, price }) => (
  <Card
    hoverable
    style={{ width: 350, borderRadius: "20px" }}
    cover={
      <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} />
    }
  >
    <Meta title={title} description={text} />
    <Footer>
      <p>${price}</p>
      <Button>Show More</Button>
    </Footer>
  </Card>
);

export default CardItem;
