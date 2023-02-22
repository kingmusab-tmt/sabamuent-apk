import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import logo from "./logo192.png";
import Redirect from "./Redirect";

const Welcome = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (redirect) {
    return <Redirect />;
  }

  return (
    <div className="text-center d-flex flex-column align-items-center justify-content-center h-100 border">
      <h1 className="mb-4">Welcome to Sabamuent</h1>
      <img
        src={logo}
        alt="Sabamuent Logo"
        style={{
          animation: "spin 2s linear infinite",
          width: "100px",
          height: "100px",
        }}
        className="mb-4"
      />
      <Spinner animation="border" role="status" variant="primary" />
    </div>
  );
};

export default Welcome;
