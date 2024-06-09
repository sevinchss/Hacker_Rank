import cn from "./style.module.css";

export default function Button({ variant, color, text, ...rest }) {
  return (
    <button
      className={`${variant == "white" ? cn.transparent : " "} ${
        color == "white" ? cn.white : " "
      } ${cn.btn}`}
      {...rest}
    >
      {text}
    </button>
  );
}
