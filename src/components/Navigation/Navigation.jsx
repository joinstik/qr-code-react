import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav
      className={s.container}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Link to="/qr-code/generate">Генерировать QR код</Link>
      <Link to="/qr-code/scan">Сканировать QR код</Link>
      <Link to="/qr-code/generateHistory">История генерирования</Link>
      <Link to="/qr-code/scanHistory">История сканирования</Link>
    </nav>
  );
}
