import React from "react";
import {
  FaUserAstronaut,
  FaRegFilePdf,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../utils/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems md:mb-[30px] md:gap-[30px]">
          <li className="menuItem md:text-[16px]">Terms Of Use</li>
          <li className="menuItem md:text-[16px]">Privacy-Policy</li>
          <li className="menuItem md:text-[16px]">About</li>
          <li className="menuItem md:text-[16px]">Blog</li>
          <li className="menuItem md:text-[16px]">FAQ</li>
        </ul>
        <div className="infoText md:text-lg md:mb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
            <a href="https://nxtdev.in" target="_blank">
          <span className="icon">
              <FaUserAstronaut />
          </span>
            </a>
            <a href="https://bit.ly/satyam_resume_cv" target="_blank">
          <span className="icon">
              <FaRegFilePdf />
          </span>
            </a>
            <a href="https://www.linkedin.com/in/satyam-anand-951b5621b" target="_blank">
          <span className="icon">
              <FaLinkedin />
          </span>
            </a>
            <a href="https://github.com/godspeed-03" target="_blank">
          <span className="icon">
            <FaGithub />
          </span>
            </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;