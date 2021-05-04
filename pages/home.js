import react, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/TCPhome.module.css'

export default function TCPHome() {

  const [menuActive, setMenuActive] = useState<boolean>(false); //set state to false
  const toggleMenu = () => {
    setMenuActive(!menuActive); //toggle the menu on click
  };

  return (
  <div className={styles.body}>
{/* 
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className={`${styles.loaderSection} ${styles.sectionLeft}`}></div>
      <div className={`${styles.loaderSection} ${styles.sectionRight}`}></div>
    </div> */}


  <div id="loaded">
      <div className={styles.backgroundImg}>
        <div className={styles.menu}>
          <div className={`${styles.btn} ${styles.btn.trigger}`}>
            <div className={styles.imgDiv}>
              <Image
              src="/images/logo.png"
              className={styles.mainImg}
              height={1000}
              width={1000}
              alt="logo image"
              />
            </div>
          </div>
            <div className={styles.icons}>
              <div className={styles.rotater}>
                <div className={`${styles.btn} ${styles.btnIcon}`}>
                  <a href="who-we-are.html">
                    <p className="icon-text single-line">Who We Are</p>
                  </a>
                </div>
              </div>
              <div className={styles.rotater}>
                <div className={`${styles.btn} ${styles.btnIcon}`}>
                  <a href="our-initiatives.html">
                    <p className="icon-text single-line">Our Initiatives</p>
                  </a>
                </div>
              </div>
              <div className={styles.rotater}>
                <div className={`${styles.btn} ${styles.btnIcon}`}>
                  <div className="drop-down icon-text">
                    <a href="#">Find Housing</a>
                      <ul>
                        <li><a href="https://www.pathwaysnetwork.net">Universal Housing Application</a></li>
                        <li><a href="./assets/img/San_Bernardino_County-_Subsidized_housing__Affordable_rental_properties.pdf">Affordable Housing</a></li>
                        <li><a href="https://landlordlink.net/">Landlord Partnership</a></li>
                      </ul>
                    </div>
                </div>
              </div>
              <div className={styles.rotater}>
                <div className={`${styles.btn} ${styles.btnIcon}`}>
                  <a href="https://www.mightycause.com/organization/Chance-Project?utm_campaign=RazooAllEmail&utm_content=account_mailer_admin_approval&utm_medium=email&utm_source=RazooSystemEmail&utm_term=razoo">
                    <p className="icon-text single-line">Ways To Give</p>
                  </a>
                </div>
              </div>
              <div className={styles.rotater}>
                <div className={`${styles.btn} ${styles.btnIcon}`}>
                  <a href="contact.html">
                    <p className="icon-text single-line">Contact</p>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    {/* <script src="./assets/js/loader.js"></script> */}
    </div>
    )
}
