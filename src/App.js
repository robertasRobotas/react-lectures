import { useState } from "react";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import MainBody from "./components/mainBody/mainBody";

import styles from "./app.module.css";

const articles = [
  {
    id: "1",
    title: "Dakar rally starts today",
    imageSrc:
      "https://vid.alarabiya.net/images/2021/01/17/2716d882-10d1-48cd-9309-59f75155fb83/2716d882-10d1-48cd-9309-59f75155fb83_16x9_1200x676.jpg",
  },

  {
    id: "2",
    title: "Cat fight",
    imageSrc: "https://picsum.photos/536/354",
  },

  {
    id: "3",
    title: "Chat GPT explodes!",
    imageSrc:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  },

  {
    id: "4",
    title: "Dakar rally starts today",
    imageSrc:
      "https://media.newyorker.com/photos/5dfab39dde5fcf00086aec77/1:1/w_1706,h_1706,c_limit/Lane-Cats.jpg",
  },

  {
    id: "5",
    title: "Simonas answering!!!",
    imageSrc:
      "https://vid.alarabiya.net/images/2021/01/17/2716d882-10d1-48cd-9309-59f75155fb83/2716d882-10d1-48cd-9309-59f75155fb83_16x9_1200x676.jpg",
  },
];

const App = () => {
  const [title, setTitle] = useState("Our todays articles");

  return (
    <div className={styles.main}>
      <Navbar />
      <MainBody
        articleTitle={title}
        todayDate={"2023-01-05"}
        articles={articles}
        setTitle={setTitle}
      />
      <Footer />
    </div>
  );
};

export default App;
