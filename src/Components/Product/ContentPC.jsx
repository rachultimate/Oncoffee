import React, { useState } from "react";

import "../../css/Product.css";

import Back from "./ContentPC/Back";
import BotArea from "./ContentPC/BotArea";
import TopComment from "./ContentPC/BotArea/Comments/TopComment";
import Comments from "./ContentPC/BotArea/Comments";
import MidArea from "./ContentPC/MidArea";
import MidGrid from "./ContentPC/MidArea/MidGrid";
import ProductDesc from "./ContentPC/MidArea/MidGrid/ProductDesc";
import MoreDetails from "./ContentPC/MidArea/MoreDetails";
import MoreBox from "./ContentPC/MidArea/MoreDetails/MoreBox";
import MoreImgs from "./ContentPC/MidArea/MoreImgs";
import MoreProducts from "./ContentPC/MidArea/MoreProducts";
import MoreCard from "./ContentPC/MidArea/MoreProducts/MoreCard";
import TopArea from "./ContentPC/TopArea";

import CardBox from "./ContentPC/TopArea/CardBox";
import CardBoxImg from "./ContentPC/TopArea/CardBox/CardBoxImg";
import CardBoxInfo from "./ContentPC/TopArea/CardBox/CardBoxInfo";
import CardBoxText from "./ContentPC/TopArea/CardBox/CardBoxText";
import StarsArea from "./ContentPC/BotArea/Comments/StarsArea";
import CommentOverflow from "./ContentPC/BotArea/Comments/CommentOverflow";
import CommentBox from "./ContentPC/BotArea/Comments/CommentOverflow/CommentBox";
import CommentProfile from "./ContentPC/BotArea/Comments/CommentOverflow/CommentProfile";
import CommentText from "./ContentPC/BotArea/Comments/CommentOverflow/CommentText";
import BackNext from "./ContentPC/BotArea/Comments/CommentOverflow/BackNext";

const ContentPC = () => {
  const randomId = () => {
    return Math.floor(Math.random() * 999999999 + 10000000);
  };

  const [productRate, setProductRate] = useState(0);
  //Product State
  const [product, setProduct] = useState({
    productId: randomId(),
    productTitle: "Café 3 corações",
    productBrand: "3Corações",
    productImage: "cafegourmet.png",
    productDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sequi mollitia quo ipsa, cum corporis expedita eveniet cupiditate voluptates, recusandae ab itaque assumenda minima. Iure ratione cumque non aspernatur.",
    productRemainingAmount: 21,
    productPrice: {
      realPrice: 120,
      discount: 50,
      installments: 12,
      interestRate: 5,
      freight: 120,
    },
    productDetails: [
      {
        id: randomId(),
        title: "Grãos",
        description: "Bla bla bla",
      },
      {
        id: randomId(),
        title: "Sementes",
        description: "Bla bla bla",
      },
      {
        id: randomId(),
        title: "Torradeiras",
        description: "Bla bla bla",
      },
      {
        id: randomId(),
        title: "Alguma coisa",
        description: "Bla bla bla",
      },
      {
        id: randomId(),
        title: "Coisa alguma",
        description: "Bla bla bla",
      },
    ],
    productImages: [
      {
        src: "cafegourmet.png",
        alt: "cafe-gourmet",
      },
      {
        src: "Combo_CafesGourmet.png",
        alt: "combo-cafesgourmet",
      },
      {
        src: "capsula-de-cafe-espresso-pimpinela-gourmet-tres-01.png",
        alt: "capsula-cafe",
      },
    ],
    productRate: {
      oneStars: 100,
      twoStars: 350,
      threeStars: 175,
      fourStars: 394,
      fiveStars: 498,
    },
    productComments: [
      {
        id: randomId(),
        name: "Jorgin do Pneu",
        pfp: "1629903043818.jpg",
        level: 4,
        title: "Produto da China",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae pariatur quisquam, modi debitis deleniti harum! Sequi doloribus possimus natus consequuntur optio labore dolore? Rem, tempore molestias minus odit voluptates nobis?",
        rateGiven: 4,
      },
      {
        id: randomId(),
        name: "Jorgin do Pneu",
        pfp: "1629903043818.jpg",
        level: 4,
        title: "Produto da China",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae pariatur quisquam, modi debitis deleniti harum! Sequi doloribus possimus natus consequuntur optio labore dolore? Rem, tempore molestias minus odit voluptates nobis?",
        rateGiven: 4,
      },
      {
        id: randomId(),
        name: "Jorgin do Pneu",
        pfp: "1629903043818.jpg",
        level: 4,
        title: "Produto da China",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae pariatur quisquam, modi debitis deleniti harum! Sequi doloribus possimus natus consequuntur optio labore dolore? Rem, tempore molestias minus odit voluptates nobis?",
        rateGiven: 4,
      },
      {
        id: randomId(),
        name: "Jorgin do Pneu",
        pfp: "1629903043818.jpg",
        level: 4,
        title: "Produto da China",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae pariatur quisquam, modi debitis deleniti harum! Sequi doloribus possimus natus consequuntur optio labore dolore? Rem, tempore molestias minus odit voluptates nobis?",
        rateGiven: 4,
      },
      {
        id: randomId(),
        name: "Jorgin do Pneu",
        pfp: "1629903043818.jpg",
        level: 4,
        title: "Produto da China",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae pariatur quisquam, modi debitis deleniti harum! Sequi doloribus possimus natus consequuntur optio labore dolore? Rem, tempore molestias minus odit voluptates nobis?",
        rateGiven: 4,
      },
    ],
  });

  //State that controls the amount of products that will be bought by the user
  const [amount, setAmount] = useState(1);

  const renderMoreDetailsBoxes = () => {
    const { productDetails } = product;
    return productDetails.map((detail) => {
      return (
        <MoreBox
          key={detail.id}
          title={detail.title}
          description={detail.description}
        />
      );
    });
  };

  const renderMoreImages = () => {
    const { productImages } = product;
    return productImages.map((productImage) => {
      return (
        <img
          key={productImage.src}
          src={require(`../../imgs/${productImage.src}`)}
          alt={productImage.alt}
        />
      );
    });
  };

  const renderComments = () => {
    const { productComments } = product;

    return productComments.map((user) => {
      return (
        <CommentBox key={user.id}>
          <CommentProfile pfp={user.pfp} level={user.level} />
          <CommentText name={user.name} rate={user.rateGiven} />
        </CommentBox>
      );
    });
  };

  return (
    <section className="conteudo_pc">
      <Back />

      {/* Top-Area */}
      <TopArea>
        <CardBox>
          <CardBoxText productBrand={product.productBrand} />
          <CardBoxImg productImg={product.productImage} />
        </CardBox>
        <CardBoxInfo
          productTitle={product.productTitle}
          productDescription={product.productDescription}
          productRate={product.productRate}
          setProductRate={setProductRate}
          productPrice={product.productPrice}
          amount={amount}
          setAmount={setAmount}
          freightCost={product.productPrice.freight}
        />
      </TopArea>

      {/* Mid-Area */}
      <MidArea>
        <MoreProducts>
          <MoreCard />
          <MoreCard />
          <MoreCard />
        </MoreProducts>
        <MidGrid>
          <ProductDesc
            title="Descrição do Produto"
            description={product.productDescription}
          />
          <MoreDetails>{renderMoreDetailsBoxes()}</MoreDetails>
          <MoreImgs>{renderMoreImages()}</MoreImgs>
        </MidGrid>
      </MidArea>

      <BotArea>
        <Comments>
          <TopComment rate={productRate} />
          <StarsArea />
          <CommentOverflow>
            {renderComments()}
            <BackNext currentPage={1} />
          </CommentOverflow>
        </Comments>
      </BotArea>
    </section>
  );
};

export default ContentPC;
