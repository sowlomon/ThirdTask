import React from 'react';
import Image from "next/image";
import firstImg from "../../../public/images/6q.jpg";
import secondImg from "../../../public/images/5q.jpg";
import thirdImg from "../../../public/images/2q.jpg";
import fourthImg from "../../../public/images/3q.jpg";
import fifthImg from "../../../public/images/4q.jpg";
import sixthImg from "../../../public/images/10q.jpg";
import seventhImg from "../../../public/images/1q.png";
import styles from "./FourthSec.module.scss";

function FourthSec() {
  return (
    <section className={styles.fourthSec}>
      <div>
        <div className={styles.imageWrap}>
          <Image
            src={firstImg} 
            alt="img"
            height = "300px"
            width = "300px"
            margin = "5px"
          />
        </div>
         <div className={styles.imageWrap}>
          <Image
            src={secondImg} 
            alt="img"
            height = "300px"
            width = "300px"
            margin = "5px"
          />
        </div>
      </div>
      <div>
        <div className={styles.imageWrap}>
          <Image
            src={thirdImg} 
            alt="img"
            height = "300px"
            width = "300px"
            margin = "5px"
          />
        </div>
        
        <div className={styles.imageWrap}>
          <Image
            src={fourthImg} 
            alt="img"
            height = "300px"
            width = "300px"
            margin = "5px"
          />
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={fifthImg} 
            alt="img"
            height = "300px"
            width = "300px"
            margin = "5px"
          />
        </div>
      </div>
      <div>
        <div className={styles.fourthSecText}>
          <h2>Digital Marketing</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Harum enim consectetur quaerat, vel omnis, tempora obcaecati nobis assumenda officiis
            optio et modi nemo laboriosam esse! Exercitationem, 
            repellat distinctio! Suscipit, quibusdam!
            
          </p>
        </div>
        <div className={styles.imageWrap1}>
          <Image
            src={sixthImg} 
            alt="img"
            height = "400px"
            width = "300px"
          />
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={seventhImg} 
            alt="img"
            height = "300px"
            width = "300px"
            margin = "5px"
          />
        </div>
      </div>
    </section>
  )
}

export default FourthSec