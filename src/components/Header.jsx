import {  NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header
      style={{
        background: "#333",
        color: "white",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Logo</h1>
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              padding: 0,
            }}
          >
            <li className="naveitem">
              <NavLink to="/"> Home</NavLink>
            </li>
            <li className="naveitem">
              <NavLink to="about"> About</NavLink>
            </li>
            <li className="naveitem">
              <NavLink to="contact"> Contact</NavLink>
            </li>
            <li className="naveitem">
              <NavLink to="service"> Services</NavLink>
            </li>
            <li className="naveitem">
              <NavLink to="project"> Project</NavLink>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
