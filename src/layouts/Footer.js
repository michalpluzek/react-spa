import React from "react";
import "../styles/Footer.css";
import { Routes, Route, useParams, useLocation } from "react-router-dom";

function FooterPath({ name }) {
  let params = useParams();
  let location = useLocation();

  return (
    <>
      <p>
        Jesteś na <span>{params[name]}</span>
      </p>
      <p>
        Jesteś na <span>{location.pathname}</span>
      </p>
    </>
  );
}

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <p>
              Jesteś na <span>stronie głównej</span>
            </p>
          }
        />

        <Route path="/:page" element={<FooterPath name={"page"} />} />
        <Route path="/:page/:id" element={<FooterPath name={"id"} />} />
      </Routes>
    </div>
  );
};

export default Footer;
