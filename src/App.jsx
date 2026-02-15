import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import MainNavbar from "./components/navbars/MainNavbar";
import GutsNavbar from "./components/navbars/GutsNavbar";
import GriffithNavbar from "./components/navbars/GriffithNavbar";

import Home from "./pages/Home";
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
      {/* NAVBAR */}
      {isGuts ? (
        <GutsNavbar />
      ) : isGriffith ? (
        <GriffithNavbar />
      ) : (
        <MainNavbar />
      )}

      {/* PÁGINAS */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guts" element={<GutsPanels />} />
        <Route path="/griffith" element={<GriffithPanels />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* FOOTER */}
      {isGuts ? (
        <GutsFooter />
      ) : isGriffith ? (
        <GriffithFooter />
      ) : (
        <MainFooter />
      )}
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