import React from 'react';
import Image from "next/image";
import styles from "./FirstSec.module.scss";
import logo from "../../../public/images/logo-w.png";

function FirstSec() {
  return (
    <div className={styles.firstSec}>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div>
        <p className={styles.homeText}>
          Just the right amount of everything
        </p>
        <div>
          <input placeholder="Enter a valid email address" className={styles.firstInput}/>
          <button className={styles.firstButton}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default FirstSec