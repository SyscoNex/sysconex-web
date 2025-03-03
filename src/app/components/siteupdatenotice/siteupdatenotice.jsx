import React from "react";

const SiteUpdateNotice = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: "16px",
      }}
    >
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "16px", color: "whitesmoke" }}>
          We're Improving Our Website!
        </h1>
        <p style={{ fontSize: "1.125rem", marginBottom: "24px" }}>
          Our site is currently undergoing updates to serve you better. If you need assistance or have inquiries, feel
          free to reach out to us.
        </p>
      </div>
      <div style={{ backgroundColor: "#2D3748", padding: "16px", borderRadius: "8px", marginBottom: "16px" }}>
        <p style={{ fontSize: "1.125rem" }}>
          Email:{" "}
          <a href="mailto:sysconex.solutions@gmail.com" style={{ color: "#63B3ED" }}>
            sysconex.solutions@gmail.com
          </a>
        </p>
        <p style={{ fontSize: "1.125rem" }}>
          Phone:{" "}
          <a href="tel:+94761176061" style={{ color: "#63B3ED" }}>
            +94 761 176 061
          </a>
        </p>
      </div>
    </div>
  );
};

export default SiteUpdateNotice;
