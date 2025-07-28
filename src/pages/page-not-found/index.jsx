import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const styles = {
    container: {
      fontFamily:
        'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
      height: "100vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    errorContainer: {
      display: "flex",
      alignItems: "center",
    },
    errorH1: {
      display: "inline-block",
      margin: "0 20px 0 0",
      padding: "0 23px 0 0",
      fontSize: "24px",
      fontWeight: "500",
      verticalAlign: "top",
      lineHeight: "49px",
      borderRight: "1px solid rgba(0,0,0,.3)",
    },
    errorH2: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "49px",
      margin: "0",
    },
  };

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <div style={styles.container}>
        <div style={styles.errorContainer}>
          <h1 style={styles.errorH1}>404</h1>
          <div>
            <h2 style={styles.errorH2}>This page could not be found.</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
