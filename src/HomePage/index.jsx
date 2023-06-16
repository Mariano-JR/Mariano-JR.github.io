import React from "react";
import './HomePage.css'
import Header from "components/Header";
import Footer from "components/Footer";
import Section from "components/Section";
import Projects from "components/Projects";

export default function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <main>
        <Section />
        <Projects />
      </main>
      <Footer/>
    </div>
  );
}
