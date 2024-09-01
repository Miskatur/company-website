import Link from "next/link";
import React from "react";
import Image from "next/image";
const MainMenu = ({
  isOpen,
  closeMenu,
  toggleSubMenu,
  toggleMegaMenu,
  services,
  solutions,
  imagePath,
}) => {
  return (
    <>
      <div
        className={`collapse navbar-collapse collapse-mobile  ${
          isOpen ? "show" : ""
        }`}
        id="navbar-menu"
      >
        <Image
          src={imagePath}
          className="logo"
          alt="Logo"
          height={55}
          width={149}
        />
        <button type="button" className="navbar-toggle" onClick={closeMenu}>
          <i className="fa-solid fa-times"></i>
        </button>
        <ul className="nav navbar-nav navbar-center ">
          <li className="dropdown">
            <Link
              href={""}
              className="dropdown-toggle active "
              onClick={toggleSubMenu}
            >
              Services
            </Link>
            <ul className="dropdown-menu">
              {services.length > 0 ? (
                services.map((service, index) => (
                  <li key={index}>
                    <Link href={`/service/${service?.uid}`}>
                      {service?.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li>No options available</li>
              )}
            </ul>
          </li>

          <li className="dropdown">
            <Link
              href={""}
              className="dropdown-toggle "
              onClick={toggleSubMenu}
            >
              Solutions
            </Link>
            <ul className="dropdown-menu">
              {solutions.length > 0 ? (
                solutions.map((solution, index) => (
                  <li key={index}>
                    <Link href={`/solution/${solution?.uid}`}>
                      {solution?.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li>No options available</li>
              )}
            </ul>
          </li>
          <li className="dropdown">
            <Link
              href={""}
              className="dropdown-toggle "
              onClick={toggleSubMenu}
            >
              Company
            </Link>
            <ul className="dropdown-menu company-menu">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/blog-with-sidebar#">Career</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </li>
          <li className="contact-us ms-lg-5">
            <Link href="/contact-us">Contact Now</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainMenu;
