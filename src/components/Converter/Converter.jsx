import { useState } from "react";
import { CurrencyCodes, ratesByCode } from "../../constants/currencies";
import round from "../../helpers/round";
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import Input from "../Input/Input";
import styles from "./Converter.module.css";

const Converter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(CurrencyCodes.UAH);
  const [to, setTo] = useState(CurrencyCodes.USD);

  const result = round((value * ratesByCode[from]) / ratesByCode[to]);
  return (
    <div>
      <div className={styles.row}>
        <Input value={value} onChange={setValue} className={styles.input} />
        <CurrencySwitcher value={from} onChange={setFrom} />
      </div>
      <div className={styles.row}>
        <Input value={result || ""} readOnly className={styles.input} />
        <CurrencySwitcher value={to} onChange={setTo} />
      </div>
    </div>
  );
};

export default Converter;
