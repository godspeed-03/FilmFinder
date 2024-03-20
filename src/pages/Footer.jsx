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
          <span className="icon">
            <a href="https://satyamio.netlify.app" target="_blank">
              <FaUserAstronaut />
            </a>
          </span>
          <span className="icon">
            <a href="https://drive.google.com/file/d/1Gtr9wA_NxJPtjfS--LQOaRZTALpd1zUb/view?usp=sharing" target="_blank">
              <FaRegFilePdf />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.linkedin.com/in/satyam-anand-951b5621b" target="_blank">
              <FaLinkedin />
            </a>
          </span>
          <span className="icon">
            <a href="https://github.com/godspeed-03" target="_blank">
            <FaGithub />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
