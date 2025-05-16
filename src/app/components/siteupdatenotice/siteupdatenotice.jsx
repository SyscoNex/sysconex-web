import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const SiteUpdateNotice = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #0f0f0f, #1a1a1a)",
        color: "white",
        textAlign: "center",
        padding: "32px",
      }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaTools size={60} color="#63B3ED" style={{ marginBottom: "20px" }} />
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", color: "whitesmoke" }}>
          We're Improving Our Website!
        </h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "600px" }}>
          We're working hard behind the scenes to bring you an even better experience.
          Meanwhile, if you need help or have any questions, don't hesitate to contact us.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          backgroundColor: "#2D3748",
          padding: "20px 30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          marginBottom: "16px",
        }}
      >
        <p style={{ fontSize: "1.125rem", margin: "10px 0" }}>
          <FaEnvelope style={{ marginRight: "8px", verticalAlign: "middle" }} />
          Email:{" "}
          <a href="mailto:sysconex.solutions@gmail.com" style={{ color: "#63B3ED", textDecoration: "underline" }}>
            sysconex.solutions@gmail.com
          </a>
        </p>
        <p style={{ fontSize: "1.125rem", margin: "10px 0" }}>
          <FaPhoneAlt style={{ marginRight: "8px", verticalAlign: "middle" }} />
          Phone:{" "}
          <a href="tel:+94761176061" style={{ color: "#63B3ED", textDecoration: "underline" }}>
            +94 761 176 061
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SiteUpdateNotice;
