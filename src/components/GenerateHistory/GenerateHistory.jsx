import { GENERATE_DATA } from "../../constans";
import { QRCodeSVG } from "qrcode.react";
import s from "./GenerateHistory.module.css"

export default function GenerateHistory() {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
  return (
    <div className={s.container}>
      {data.map((text) => (
        <p className={s.qr} key={text}>
          {text}
          <QRCodeSVG value={text} size={100} />
        </p>
      ))}
    </div>
  );
}
