import React from "react";
import {useMySocialList} from "./component/user-my-social-list";
import "./Footer.css";
import styles from "./component/SocialList.module.css";

export const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  const { socialList } = useMySocialList()

  return(
    <>
      <div className="footer">
        <div>
          <span>Copyright ART GALLERY AG @{copyrightYear}</span>
        </div>
        <div className="social-links">
          <ul className={styles.ul}>
            {socialList.map(({ id, icon, link, name }) => (
              <li key={id}>
                <a
                  className={styles.link}
                  target="_blank"
                  href={link}
                  rel="noreferrer"
                  aria-label={name}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
};
