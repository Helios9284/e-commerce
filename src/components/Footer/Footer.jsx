import React from "react";
import {useMySocialList} from "./component/user-my-social-list";
import "./Footer.css";
import styles from "./component/SocialList.module.css";

export const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  const { socialList } = useMySocialList()
  console.log("sociallist:",socialList)

  return(
    <>
      <div className="footer">
        <div>
          <span>Copyright OSAMU ART GALLERY AG @{copyrightYear}</span>
        </div>
        
        <div className = "social-links">
            {socialList.map(({id, icon, link, name}) => {
              <li key={id} style={{backgroundColor:'white', height:"2em"}}>
              <a
                className= {styles.link}
                target='_blank'
                href={link}
                rel='noreferrer'
                aria-label={name}
              >
                {icon}
              </a>
            </li>
            })}
        </div>
      </div>
    </>
  )
};
