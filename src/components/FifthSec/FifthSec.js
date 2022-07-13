import React from 'react'
import Image from "next/image"
import firstImage from "../../../public/images/8q.jpeg"
import styles from "./FifthSec.module.scss"

function FifthSec() {
  return (
    <div className={styles.fifthSec}>
      <div>
        <div className={styles.div1}>
        </div>
        <Image 
          src={firstImage} 
          alt="img" 
          height= "600px"
          align-items= "center"
          width= "400px"
          margin-bottom = "50px"
        />
      </div>
      <div>
        <h1> - Mike Norton</h1>
        <p>
        &quot; Success is not final; Failure is not fatal: it is the <br/> <br/> courage to continue that counts &quot;
        </p>
      </div>
    </div>
  )
}

export default FifthSec