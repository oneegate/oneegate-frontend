/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
export default function InputContact({
  label,
  type,
  select,
  options,
  textArea,
  col,
  value,
  onChange
}) {
  return (
    <div>
      {select ? (
        <React.Fragment>
          <p sx={styles.p}>{label}</p>
          <select sx={styles.select} value={value} onChange={onChange}>
            {options.map((option, index) => (
              <option value={option.value} key={index}>
                {option.label}
              </option>
            ))}
          </select>
        </React.Fragment>
      ) : textArea ? (
        <React.Fragment>
          <p sx={styles.p}>{label}</p>
          <textarea cols={col} sx={styles.textArea} value={value} onChange={onChange}></textarea>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p sx={styles.p}>{label}</p>
          <input type={type} sx={styles.input} value={value} onChange={onChange}></input>
        </React.Fragment>
      )}
    </div>
  );
}

const styles = {
  p: {
    color: "#000",
    margin: 0,
    fontWeight: 700,
    fontSize: "1.2rem",
    textTransform: "uppercase",
  },
  input: {
    padding: "8px",
    width: "100%",
    border: "none",
    borderBottom: "2px solid #000",
    color: "#706f6e",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  select: {
    width: "100%",
    fontSize: "1em",
    border: "none",
    borderBottom: "2px solid #000",
    backgroundColor: "#fff",
    padding: "8px",
    color: "#706f6e",
    marginBottom: "20px",
    "&:focus": {
      outline: "none",
    },
  },
  textArea: {
    resize: "none",
    width: "100%",
    border: "none",
    borderBottom: "2px solid #000",
    fontSize: "1rem",
    color: "#706f6e",
    "&:focus": {
      outline: "none",
    },
  },
};
