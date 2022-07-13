import React from 'react';
import Image from "next/image";
import SecondImg from "../../../public/images/7q.png";
import styles from "./SecondSec.module.scss";

function SecondSec() {
  return (
    <div className={styles.secondSec}>
      <div>
        <div className={styles.homeText2}>
          <h2>
            About harness multimedia based on collaboration
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, 
            distinctio temporibus repellat aliquid nulla, eius ea,
          </p>
        </div>
        <Image 
          src={SecondImg} 
          alt="img"
          height="500px"
          width = "400px"
          margin-left="20px"
        />
      </div>
    </div>
  )
}

export default SecondSec 
