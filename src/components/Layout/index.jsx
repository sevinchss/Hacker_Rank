import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./../Footer";
import Header from "./header.jsx";

export default function Layout({ children }) {
  const url = useLocation().pathname;
  const paths = ["/login", "/registration"];
  return (
    <div className="main_box">
      {paths.includes(url) ? null : <Header />}
      {children}
      {paths.includes(url) ? null : <Footer />}
    </div>
  );
}
