import React from "react";
import ModelPicture from "../../Icons/model.png";
import ImageModel1 from "../../Icons/image-model1.png";
import ImageModel2 from "../../Icons/image_model.png";
import ImageModel3 from "../../Icons/image-model3.png";
import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";

const data = [
  {
    title: "Women's black vest Gucci",
    text: "A shiny dress, a shiny dress, a shiny dress",
    image: ImageModel1,
    price: 715,
  },
  {
    title: "Red dress Valentino",
    text:
      "A shiny dress in the style of Lady Gaga, for bright events and cool parties",
    image: ImageModel2,
    price: 540,
  },
  {
    title: "Shiny dress Givency",
    text:
      "A shiny dress, a shiny dress, a shiny dress, here is a good weather and so on",
    image: ImageModel3,
    price: 1610,
  },
];

const Home = () => {
  return (
    <div>
      <SectionWrapper>
        <StyledText>
          <h1>Admire stylish Dresses & Looks</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            scelerisque tristique neque, eget facilisis purus consequat sit
            amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
            eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
            Quisque sed tincidunt felis. Sed bibendum
          </p>
          <StyledButton size="large">Show More</StyledButton>
        </StyledText>
        <img src={ModelPicture} />
      </SectionWrapper>
      <CardWrapper>
        {data.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>
    </div>
  );
};

export default Home;