import { currencies } from "../../constants/currencies";
import CurrencySign from "../CurrencySign/CurrencySign";
import CurrencyButton from "./CurrencyButton/CurrencyButton";
import styles from "./CurrencySwitcher.module.css";

const CurrencySwitcher = ({ value, onChange }) => (
  <div className={styles.wrapper}>
    <CurrencySign code={value} />
    <div className={styles.buttons}>
      {currencies.map((currency) => (
        <CurrencyButton
          key={currency.code}
          code={currency.code}
          selected={currency.code === value}
          className={styles.button}
          onClick={onChange}
        />
      ))}
    </div>
  </div>
);

export default CurrencySwitcher;
