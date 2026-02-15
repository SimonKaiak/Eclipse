import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import MainNavbar from "./components/navbars/MainNavbar";

import Home from "./pages/Home";
import GutsNavbar from "./components/navbars/GutsNavbar";
import GutsPanels from "./pages/GutsPanels";
import GriffithPanels from "./pages/GriffithPanels";

import MainFooter from "./components/footers/MainFooter";
import GutsFooter from "./components/footers/GutsFooter";
import GriffithFooter from "./components/footers/GriffithFooter";

function Layout() {
  const { pathname } = useLocation();

  const isGuts = pathname.startsWith("/guts");
  const isGriffith = pathname.startsWith("/griffith");

  return (
    <>
      <MainNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guts" element={<><GutsNavbar /> <GutsPanels /></>} />
        <Route path="/griffith" element={<GriffithPanels />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Un solo footer según ruta */}
      {isGuts ? <GutsFooter /> : isGriffith ? <GriffithFooter /> : <MainFooter />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}