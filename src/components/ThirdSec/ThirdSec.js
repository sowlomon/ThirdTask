import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ThirdSec.module.scss"

function ThirdSec() {
  return (
    
    <section className={styles.thirdSec}>
    <div className={styles.secondSecText}>
      <div>
        <h1>01</h1>
        <h2>
          Lorem ipsum dolor
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Amet consequatur minus maiores ullam?
        </p>
        <FontAwesomeIcon
          icon={faGreaterThan}
          style={{ fontSize: 2, padding: 2, color: "red", marginRight: 30, width: 40, height: 40, backgroundColor: "white", borderRadius: 50  }}
        />
      </div>
      <div>
        <h1>02</h1>
        <h2>
          Lorem ipsum dolor
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Amet consequatur minus maiores ullam?
        </p>
        <FontAwesomeIcon
          icon={faGreaterThan}
          style={{ fontSize: 2, padding: 2, color: "yellow", marginRight: 30,width: 40, height: 40, backgroundColor: "white", borderRadius: 50  }}
        />
      </div>
      <div>
        <h1>03</h1>
        <h2>
          Lorem ipsum dolor
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Amet consequatur minus maiores ullam?
        </p> 
        <FontAwesomeIcon
          icon={faGreaterThan}
          style={{ fontSize: 2, padding: 2, color: "black", marginRight: 30,width: 40, height: 40, backgroundColor: "white", borderRadius: 50  }}
        />
      </div>
      <div>
        <h1>04</h1>
        <h2>
          Lorem ipsum dolor
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Amet consequatur minus maiores ullam?
        </p>
        <FontAwesomeIcon
          icon={faGreaterThan}
          style={{ fontSize: 2, padding: 2, color: "black", marginRight: 30, width: 40, height: 40, backgroundColor: "white", borderRadius: 50 }}
        />
      </div>
      <div>

      </div>
    </div>
  </section>
  )
}

export default ThirdSec