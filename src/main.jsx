import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);

reactRoot.render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>
);
