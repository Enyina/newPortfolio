import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/enyina-matthew" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Enyina" target="_blank">
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
