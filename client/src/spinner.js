import loading from "./loading.gif";

export default function Spinner() {
  console.log("on spinner");
  return (
    <img
      src={loading}
      alt="loading gif"
      style={{
        display: "block",
        margin: "auto",
        width: "200px",
        height: "200px",
      }}
    />
  );
}
