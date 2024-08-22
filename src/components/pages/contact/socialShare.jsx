import Link from "next/link";
import React from "react";

const SocialShare = ({ socialMediaLinks }) => {
  return (

    <>
      {socialMediaLinks.facebook ? (
        <li>
          <Link href={socialMediaLinks?.facebook} target="_blank">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
      )
        :
        (
          <li>
            <Link href='#'>
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>

        )
      }

      {socialMediaLinks.whatsapp ? (
        <li>
          <Link href={socialMediaLinks?.whatsapp} target="_blank">
            <i className="fab fa-whatsapp fa-lg"></i>
          </Link>
        </li>
      )
        :
        (
          <li>
            <Link href='#'>
              <i className="fab fa-whatsapp fa-lg"></i>
            </Link>
          </li>

        )
      }



      {socialMediaLinks.linkedin ? (
        <li>
          <Link href={socialMediaLinks?.linkedin} target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </li>
      )
        :
        (
          <li>
            <Link href='#'>
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </li>

        )
      }


      {socialMediaLinks.telegram ? (
        <li>
          <Link href={socialMediaLinks?.telegram} target="_blank">
            <i className="fab fa-telegram-plane"></i>
          </Link>
        </li>
      )
        :
        (
          <li>
            <Link href='#'>
              <i className="fab fa-telegram-plane"></i>
            </Link>
          </li>

        )
      }




    </>
  );
};

export default SocialShare;
