import { motion } from "framer-motion";
import Link from "next/link";

const Banner = ({ data, imageurl }) => {
  const {
    first_section_title = "IT Services & Resource Augmentation Partner",
    first_section_description = "Comprehensive offshore Agile software development services and your dedicated partner in crafting high-quality bespoke software solutions",
    first_section_button_text = "Let’s Start Something Amazing!",
    first_section_image_path
  } = data || {};


  const imagePath = !data || Object.keys(data).length === 0 || !first_section_image_path
    ? "img/banner/hero-image.svg"  
    : `${imageurl}${first_section_image_path}`; 

  return (
    <div className="banner-style-one global-padding ">
      <div className="px-3 px-md-3 px-xl-0">
        <div className="content">
          <div className="row align-center">
            <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
              <div className="information">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="fadeInUp"
                >
                  {first_section_title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="fadeInUp mt-20 banner-subtitle text-start"
                >
                  {first_section_description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="mt-40 fadeInUp"
                >
                  <Link href="/contact-us" className="hbutton">
                    <span className="button-text">{first_section_button_text}</span>
                    <div className="group-10">
                      <div className="rectangle-9">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-move-right"
                        >
                          <path d="M18 8L22 12L18 16" />
                          <path d="M2 12H22" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="fadeInDown"
                src={imagePath}
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
