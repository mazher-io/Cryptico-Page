import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementsByClassName("Navbar")[0];
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      style={{
        position: "sticky",
        zIndex: 1000,
        top: 15, // or whatever value you want
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.7 }}
      transition={{
        duration: 0.8,
        delay: 0.6,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="Navbar">
        <div className="nav-left">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="nav-right">
          <button
            className="login"
            onClick={() =>
              (window.location.href = "https://crypticoo.netlify.app")
            }
          >
            Login
          </button>
          <button
            className="sign-up"
            onClick={() =>
              (window.location.href = "https://crypticoo.netlify.app")
            }
          >
            Sign up
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
