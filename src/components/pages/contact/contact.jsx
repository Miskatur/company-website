import SubHeader from "@/components/shared/sub-header/subHeader";
import React from "react";
import ContactForm from "./contactForm";
import ContactInfo from "./ContactInfo";
import Image from "next/image";



const Contact = () => {
  return (
    <div>
      <SubHeader
        breadCrumb="Contact-us"
        title1="Get in touch with us"
        bottomSpace="pb-0"
      />
      <>
        <div
          className="contact-area overflow-hidden  global-padding pt-60 pb-60"
          style={{ backgroundImage: "url(/img/shape/map.png)" }}
        >
          <div className="shape-right-bottom">
            <Image
              src="/img/shape/18.png"
              alt="Shape"
              layout="responsive"
              width={180}
              height={110}
            />
          </div>

          <div className="container">
            <div className="row align-center">
              <div className="col-tact-stye-one col-lg-6">
                <ContactForm />
              </div>
              <div className="contact-info col-tact-stye-one col-lg-5 offset-lg-1 mt--80 mt-md-50 mt-xs-50">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Contact;
