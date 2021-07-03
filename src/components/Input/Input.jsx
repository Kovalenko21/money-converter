import styles from "./Input.module.css";

const Input = ({ value, onChange, className, readOnly }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={className}>
      <input
        type="number"
        className={styles.input}
        value={value}
        onChange={handleChange}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;
