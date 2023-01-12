import { useState, useEffect } from "react";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import MainBody from "../../components/mainBody/mainBody";
import { useNavigate } from "react-router-dom";
import styles from "./app.module.css";

const App = () => {
  const [title, setTitle] = useState("Our todays articles");
  const [currencies, setCurrencies] = useState([]);

  const navigate = useNavigate();

  const isRedirect = false;

  const fetchCurrencies = async () => {
    const result = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?" +
        new URLSearchParams({
          vs_currency: "eur",
          per_page: 20,
        })
    );
    const currencies = await result.json();
    setCurrencies(currencies);
    console.log("currencies", currencies);
  };

  useEffect(() => {
    if (isRedirect === true) {
      navigate(`/portfolio`);
    }
  }, []);

  useEffect(() => {
    fetchCurrencies();
  }, [title]);

  return (
    <div className={styles.main} onClick={() => setTitle("xxxx")}>
      <Navbar />
      <MainBody
        articleTitle={title}
        todayDate={"2023-01-05"}
        articles={currencies}
        setTitle={setTitle}
      />
      <Footer />
    </div>
  );
};

export default App;
