import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "./QrCodeScanner.module.css";
import { SCAN_DATA } from "../../constans";

export default function QrCodeScanner() {
  const [scanned, setScanned] = useState(null);
  const scanHendler = (result) => {
    setScanned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };
  return (
    <div className={s.container}>
      <Scanner
        onScan={scanHendler}
        components={{
          audio: false,
          // finder: false,
        }}
        styles={{ container: { width: 300 } }}
      />
      <p className={s.result}>{scanned}</p>
    </div>
  );
}
