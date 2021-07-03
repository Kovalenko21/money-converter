import styles from "./CurrencySign.module.css";
import Flag from "../Flag/Flag";
import { currenciesByCode } from "../../constants/currencies";

const CurrencySign = ({ code }) => {
  const currency = currenciesByCode[code];
  return (
    <div className={styles.wrapper}>
      <div className={styles.sign}>{currency.sign}</div>
      <Flag country={currency.country} className={styles.flag} />
    </div>
  );
};

export default CurrencySign;
