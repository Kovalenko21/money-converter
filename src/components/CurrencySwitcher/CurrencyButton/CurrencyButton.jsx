import { currenciesByCode } from "../../../constants/currencies";
import styles from "./CurrencyButton.module.css";
import cn from "classnames";

const CurrencyButton = ({ code, onClick, selected, className }) => {
  const currency = currenciesByCode[code];

  const handleClick = () => {
    onClick(code);
  };

  return (
    <button
      className={cn(styles.button, className, { [styles.selected]: selected })}
      type="button"
      onClick={handleClick}
    >
      {currency.sign}
    </button>
  );
};

export default CurrencyButton;
