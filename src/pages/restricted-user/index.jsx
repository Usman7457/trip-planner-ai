import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const RestrictedUser = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = {
    container: {
      minHeight: "105vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    errorContainer: {
      textAlign: "center",
    },
    errorH1: {
      fontSize: "54px",
      fontWeight: "600",
      color: "#333",
      marginBottom: "10px",
    },
    errorMessage: {
      fontSize: "16px",
      fontWeight: "400",
      color: "#555",
      maxWidth: "500px",
      lineHeight: "1.6",
      margin: "0 auto",
    },
  };

  return (
    <>
      <Helmet>
        <title>Access Denied: Unauthorized Access</title>
      </Helmet>
      <div style={styles.container}>
        <div style={styles.errorContainer}>
          <h1 style={styles.errorH1}>404 - Access Denied</h1>
          <p style={styles.errorMessage}>
            We're sorry, but you are not authorized to access this section of
            the site. This page is reserved for administrative users only.
            Please ensure you have the correct permissions or contact support if
            you believe this is an error.
          </p>
          <Link
            className="mx-auto flex items-center gap-2 w-fit rounded-full bg-black px-8 py-3 mt-6 text-lg text-white transition-colors hover:bg-[#016C23]"
            to="/"
          >
            Back To Website
          </Link>
        </div>
      </div>
    </>
  );
};

export default RestrictedUser;
