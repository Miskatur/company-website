import Image from "next/image";
import Link from "next/link";
import React from "react";
const HeaderLogo = ({ logoColor = false, openMenu, imagePath}) => {
  return (
    <>
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navbar-menu"
          onClick={openMenu}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <Link className="navbar-brand" href="/#">
          {logoColor ? (
            <>
              <Image
                src={imagePath}
                className="logo"
                alt="Logo"
                height={55}
                width={149}
              />
            </>
          ) : (
            <>
              <Image
                src={imagePath}
                className="logo"
                alt="Logo"
                height={55}
                width={149}
              />
            </>
          )}
        </Link>
      </div>
    </>
  );
};

export default HeaderLogo;
