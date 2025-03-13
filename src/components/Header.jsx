// import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="main-container">
      <nav className="flex items-center justify-between py-[30px] bg-white text-white font-p-bold text-md h-[80px] ">
        <Link to="/">
          <img src={logo} alt="Logo Hélène Canovas" className="w-[80px]" />
        </Link>

        {/* BURGER MENU */}
        <div className="relative w-[25px] h-[21px]">
        <Menu width={"430px"} right isOpen={false}>
        <Link
            to="/"
            className="mb-[60px] hover:text-orange duration-200 ease-in-out"
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className="mb-[60px] hover:text-orange duration-200 ease-in-out"
          >
            A propos
          </Link>
          <Link
            to="/projects"
            className="mb-[60px] hover:text-orange duration-200 ease-in-out"
          >
            Mes projets
          </Link>
          <Link to="/contact" className="hover:text-orange duration-200 ease-in-out">
            Contact
          </Link>
        </Menu>
        </div>
      </nav>

    </header>
  );
};

export default Header;