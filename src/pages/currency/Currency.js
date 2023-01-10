import styles from "./currency.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../components/spinner/spinner";

const App = () => {
  const { id } = useParams();

  const [currency, setCurrency] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log("id", id);

  const fetchCurrency = async () => {
    const result = await fetch("https://api.coingecko.com/api/v3/coins/" + id);
    const currency = await result.json();

    setCurrency(currency);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCurrency();
  }, []);

  return (
    <div className={styles.main}>
      {!isLoading && (
        <>
          <div className={styles.title}>currency</div>
          <img src={currency?.image?.large} alt="xxxx" />
          <p className={styles.description}>{currency?.description?.en}</p>
        </>
      )}

      {isLoading && (
        <div className={styles["spinner-wrapper"]}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default App;
