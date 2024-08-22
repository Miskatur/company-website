import React from "react";
import Link from "next/link";
import logo from "../../../../public/img/logo/logo.svg";
import Image from "next/image";


const FooterMediumDevice = ({ socialMediaLinks, services, solutions, businessSettings, imagePath }) => {

  const contactPhone = businessSettings.company_primary_phone || "+880123456789";
  const contactPhonesecondary = businessSettings.company_secondary_phone || "+880123456789";
  const contactEmail = businessSettings.company_email || "companyemail.com";
  const contactAddress = businessSettings.company_address || "4517 Washington Ave, Manchester, Kentucky 39495";


  return (
    <>
      <footer
        className=" text-light"
        style={{
          backgroundColor: "#E7E7E7",
        }}
      >
        <div className="footer-block d-block d-xxl-none">
          <div className="f-items default-padding-bottom pt-70 pt-xs-50">
            <div className="row">
              <div className="default-padding-bottom col-md-6 footer-item mt-50">
                <div className="f-item newsletter">
                  <Image src={imagePath} height={66} width={199} />
                  <p className="get-in-touch" style={{ color: "#3D424C" }}>
                    Get in Touch
                  </p>
                  <p className="all-subtitle mt-30 mb-1">{contactPhone}</p>
                  <p className="all-subtitle m-0 mb-4">{contactPhonesecondary}</p>
                  <p className="all-subtitle m">Email - {contactEmail}</p>
                  <p className="all-subtitle m-0">
                    {contactAddress}
                  </p>
                </div>
              </div>

              <div className="default-padding-bottom col-md-6 mt-50 footer-item  ">
                <div className="f-item link">
                  <h4 className="widget-title">Company</h4>
                  <ul className="p-0 mt-0 pt-0">
                    <li>
                      <Link
                        href="/about-us"
                        className="text-decoration-none p-0"
                        style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="text-decoration-none"
                        style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="text-decoration-none"
                        style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="text-decoration-none"
                        style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        Carrer
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="text-decoration-none"
                        style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="text-decoration-none"
                        style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 mt-50 footer-item  ">
                <div className="f-item link">
                  <h4 className="widget-title">Services</h4>
                  <ul className="p-0 mt-0 pt-0">
                    {services.slice(0, 10).length > 0 ? (
                      services.map((service) => (
                        <li key={service.id}>
                          <Link href={`/service/${service.uid}`} className="text-decoration-none p-0" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                            {service.title}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none p-0"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Web Application Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Android & IOS App Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Ecommerce Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            DevOps And Cloud Consulting
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            System Analysis And UX/UI Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Software Testing & QA Service
                          </Link>
                        </li>
                      </>

                    )}
                  </ul>
                </div>
              </div>

              <div className="col-md-6 mt-50 footer-item  ">
                <div className="f-item link">
                  <h4 className="widget-title">Solutions</h4>
                  <ul className="p-0 mt-0 pt-0">
                    {solutions.slice(0, 10).length > 0 ? (
                      solutions.map((solution) => (
                        <li key={solution.id}>
                          <Link href={`/solutions/${solution.uid}`} className="text-decoration-none p-0" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                            {solution.title}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none p-0"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Dedicated Development Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Custom Software Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Managed Resources
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            MVP/POC Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Legacy System Migration
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Digital Design & Prototyping
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Support and Technical Consultancy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Support and Technical Consultancy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Full Project Development
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-padding  d-block d-xxl-none">
          <p className="get-in-touch mt-20" style={{ color: "#3D424C" }}>
            Social Link
          </p>

          <div
            className=" d-flex flex-row justify-content-between"
            style={{ width: "264px", paddingBottom: "20px" }}
          >
            {socialMediaLinks.telegram ? (
              <Link href={socialMediaLinks.telegram}>
                <Image
                  width={48}
                  height={48}
                  src="./img/axil-custom/share.svg"
                  alt="Telegram"
                />
              </Link>
            )
              :
              (
                <Link href='#'>
                  <Image
                    width={48}
                    height={48}
                    src="./img/axil-custom/share.svg"
                    alt="Telegram"
                  />
                </Link>
              )

            }

            {socialMediaLinks.facebook ? (
              <Link href={socialMediaLinks.telegram}>
                <Image
                  width={48}
                  height={48}
                  src="./img/axil-custom/facebook.svg"
                  alt="Facebook"
                />
              </Link>
            )

              :
              (
                <Link href='#'>
                  <Image
                    width={48}
                    height={48}
                    src="./img/axil-custom/facebook.svg"
                    alt="Facebook"
                  />
                </Link>
              )
            }

            {socialMediaLinks.linkedin ? (
              <Link href={socialMediaLinks.telegram}>
                <Image
                  width={48}
                  height={48}
                  src="./img/axil-custom/linkedin.svg"
                  alt="LinkedIn"
                />
              </Link>
            )
              :
              (
                <Link href='#'>
                  <Image
                    width={48}
                    height={48}
                    src="./img/axil-custom/linkedin.svg"
                    alt="LinkedIn"
                  />
                </Link>
              )
            }

            {socialMediaLinks.whatsapp ? (
              <Link href={socialMediaLinks.telegram}>
                <Image
                  width={48}
                  height={48}
                  src="./img/axil-custom/whatsapp.svg"
                  alt="WhatsApp"
                />
              </Link>
            )
              :
              (
                <Link href='#'>
                  <Image
                    width={48}
                    height={48}
                    src="./img/axil-custom/whatsapp.svg"
                    alt="WhatsApp"
                  />
                </Link>
              )
            }




          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterMediumDevice;
