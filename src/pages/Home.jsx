import React from "react";
import Header from "../components/Header";
import TopRecips from "../components/TopRecips";
import TopVideo from "../components/TopVideo";
import EditorPick from "../components/EditorPick";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <TopRecips />
      <TopVideo />
      <EditorPick />
    </div>
  );
};

export default Home;
