import { Routes, Route } from "react-router-dom";
import QrCodeGenerator from "./components/Generate/QrCodeGenerator";
import QrCodeScanner from "./components/Scan/QrCodeScanner";
import Navigation from "./components/Navigation/Navigation";
import GenerateHistory from "./components/GenerateHistory/GenerateHistory";
import ScanHistory from "./components/ScanHistory/ScanHistory";

export default function Layout() {
  return (
    <>
    <Navigation/>


    <Routes>
        <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
        <Route path="/qr-code/scan" element={<QrCodeScanner />} />
        <Route path="/qr-code/generateHistory" element={<GenerateHistory />} />
        <Route path="/qr-code/scanHistory" element={<ScanHistory />} />
        
      </Routes>
    {/* <QrCodeGenerator />
    <QrCodeScanner /> */}
    </>
  );
}
