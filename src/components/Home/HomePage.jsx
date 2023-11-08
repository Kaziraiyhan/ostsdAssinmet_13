/* eslint-disable react/no-unescaped-entities */
import Footer from "../Footer";
import Header from "../Header";
import Img from "../../assets/main.jpg";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />

      <section className="container Banner">
        <div className="content">
          <h1 className="title">Hi, I'm Demo</h1>
          <p className="description">
            I'm a full-stack developer with 1 years of experience using React .
            Reach out if you'd like to learn more!
          </p>
          <a href="mailto:myemail@email.com" className="contactBtn">
            Contact Me
          </a>
        </div>
        <img src={Img} alt="Hero image of me" className="bannerimg" />
        <div className="topBlur" />
        <div className="bottomBlur" />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
