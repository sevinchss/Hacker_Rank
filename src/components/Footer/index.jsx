
import React from "react";
import cn from "./footer.module.css";
import data from "./data";
import { Link } from "react-router-dom";
import instagram from "../Footer/image/img5.svg";
import linkedin from "../Footer/image/img2.svg";
import twitter from "../Footer/image/img3.svg";
import facebook from "../Footer/image/img4.svg";

const Footer = () => {
  return (
    <footer className={`${cn.footer}`}>
      <div className={`${cn.wrapper}`}>
        {data.map(({ title, list }, index) => (
          <div key={index} className={`${cn.list_wrapper}`}>
            <h5>{title}</h5>
            <ul>
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={`${cn.footer_endpoint}`}>
        <div className={`${cn.endpoint_wrapper}`}>
          <div className={`${cn.social_media}`}>
            <Link to={"https://www.facebook.com/hackerrank/"} target="_blank">
              <img className={`${cn.social_media_link}`} src={facebook} alt="facebook" />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/hackerrank"}
              target="_blank">
              <img className={`${cn.social_media_link}`} src={linkedin} alt="linkedin" />
            </Link>
            <Link to={"https://twitter.com/hackerrank"} target="_blank">
              <img className={`${cn.social_media_link}`} src={twitter} alt="twitter" />
            </Link>
            <Link to={"https://www.instagram.com/hackerrank/"} target="_blank">
              <img className={`${cn.social_media_link}`} src={instagram} alt="instagram" />
            </Link>
           
          </div>
          <p>
            Copyright © 2024 HackerRank{" "}
            <span> DBA INTERVIEW STREET TECHNOLOGIES PRIVATE LIMITED</span>
          </p>
          <Link to={"/"} className={`${cn.policy}`}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;