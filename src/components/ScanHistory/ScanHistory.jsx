import { SCAN_DATA } from "../../constans";
import { QRCodeSVG } from "qrcode.react";
import s from "./ScanHistory.module.css"

export default function ScanHistory() {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
  return (
    <div className={s.container}>
      {data.map((text) => (
        <p className={s.scan} key={text}>
          {text}
          <QRCodeSVG value={text} size={100} />
        </p>
      ))}
    </div>
  );
}
