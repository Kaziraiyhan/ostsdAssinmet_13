const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: "center" }}>
      <div>
        <p
          style={{
            background: "#333",
            color: "white",
            padding: "20px 0",
            margin: "0 auto",
            width: "100vw",
          }}
        >
          &copy; {currentYear} This is footer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
