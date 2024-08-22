"use client";
import React, { useEffect, useState } from "react";
import HeaderLogo from "./headerLogo";
import MainMenu from "./mainMenu";
import { useBusinesssettingsDataQuery } from "@/features/businesssettings";

import logo from "../../../../public/img/logo/logo-light.png";

const Header = ({ headerClass, logoColor = false }) => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Search Bar
  const [openSearch, setOpenSearch] = useState(false);

  const searchOpen = (event) => {
    event.preventDefault();
    setOpenSearch(!openSearch);
  };

  const searchClose = () => {
    setOpenSearch(false);
  };

  // Sidebar Menu
  // eslint-disable-next-line no-unused-vars
  const [navbarClass, setNavbarClass] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addClasses = () => {
    setNavbarClass(true);
    setIsSidebarOpen(true);
    document.body.classList.add("on-side");
  };

  const removeClasses = () => {
    setNavbarClass(false);
    setIsSidebarOpen(false);
    document.body.classList.remove("on-side");
  };

  // Mobile Menu
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    document.body.classList.add("no-fade");
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("no-fade");
  };

  // Mobile DropDown
  const toggleSubMenu = (e) => {
    e.preventDefault();
    const listItem = e.target.parentElement;
    const subMenu = listItem.querySelector("ul.dropdown-menu");
    if (subMenu) {
      listItem.classList.toggle("on");
      subMenu.style.maxHeight =
        subMenu.style.maxHeight === "20000px" ? "0" : "20000px";
    }
  };

  const toggleMegaMenu = (e) => {
    e.preventDefault();
    const listItem = e.target.parentElement;
    const megaMenu = listItem.querySelector(".content");
    if (megaMenu) {
      megaMenu.classList.toggle("d-block");
      listItem.classList.toggle("on");
    }
  };


  /////////// Api connection code

  const imageurl = process.env.NEXT_PUBLIC_BASE_URL;



  const { data, isLoading, isFetching, error } = useBusinesssettingsDataQuery();


  const businessSettings = data?.data?.business_settings || {};
  const contactPhone = businessSettings.company_primary_phone || "+880123456789";
  const contactPhonesecondary = businessSettings.company_secondary_phone || "+880123456789";
  const contactEmail = businessSettings.company_email || "companyemail.com";
  const contactAddress = businessSettings.company_address || "4517 Washington Ave, Manchester, Kentucky 39495";
  const socialMediaLinks = {
    telegram: businessSettings.social_media_telegram,
    facebook: businessSettings.social_media_facebook,
    linkedin: businessSettings.social_media_linkedin,
    whatsapp: businessSettings.social_media_whatsapp,
  };
  const copyright = businessSettings.copy_right_text || "All rights reserved";



  const imagePath = !businessSettings || Object.keys(businessSettings).length === 0 || !businessSettings.company_logo_path
    ? logo
    : `${imageurl}${businessSettings.company_logo_path}`;


  const services = data?.data?.service_list || [];
  const solutions = data?.data?.solution_list || [];


  return (
    <>
      <header className="">
        <nav
          className={`${isSticky ? "sticked" : "no-background"}   ${isOpen ? "navbar-responsive" : ""
            } navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed on menu-center no-full  ${headerClass} ${openSearch ? "smooth-search" : ""
            } `}
        >
          <div className=" d-flex justify-content-between align-items-center global-padding">
            <HeaderLogo logoColor={logoColor} openMenu={openMenu} imagePath={imagePath} />
            <MainMenu
              isOpen={isOpen}
              closeMenu={closeMenu}
              toggleSubMenu={toggleSubMenu}
              toggleMegaMenu={toggleMegaMenu}
              services={services}
              solutions={solutions}
              imagePath={imagePath}
            />
          </div>
          <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
        </nav>
      </header>
    </>
  );
};

export default Header;
