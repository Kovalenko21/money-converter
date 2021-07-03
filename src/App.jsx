import styles from "./App.module.css";
import Converter from "./components/Converter/Converter";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>MoneyConvert® 2.0</h1>
      <Converter />
    </div>
  );
};

export default App;
