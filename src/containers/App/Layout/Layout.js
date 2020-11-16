import React from "react";
import { StyledHeader, IconsWrapper } from "./Layout.styles";
import {
  TwitterOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  InstagramOutlined,
  FacebookOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";

const Layout = () => (
  <StyledHeader title="Glay Shop">
    <div>
      <IconsWrapper>
        <AliwangwangOutlined />
      </IconsWrapper>
      <p>Glay Shop</p>
    </div>
    <div>
      <IconsWrapper>
        <TwitterOutlined />

        <FacebookOutlined />

        <InstagramOutlined />
      </IconsWrapper>
    </div>
    <div>
      <IconsWrapper>
        <SearchOutlined />

        <ShoppingCartOutlined />
      </IconsWrapper>
    </div>
  </StyledHeader>
);

export default Layout;