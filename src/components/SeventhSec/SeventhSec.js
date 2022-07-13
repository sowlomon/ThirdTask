import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./SeventhSec.module.scss"


function SeventhSec() {
  return (
    <div className={styles.seventhSec}>
      <div className={styles.mainSet}>
        <div className={styles.firstSet}>
          <div>
            <h1>Location</h1>
            <p>28 jackson blvd ste chicago IL 60604-2340</p>
          </div>
          <div>
            <h2>Follow us</h2>
            <div className={styles.thirdSet}>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ fontSize: 20, color: "white", marginRight: 10 }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                style={{ fontSize: 20, color: "white",marginRight: 10 }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                style={{ fontSize: 20, color: "white", marginRight: 10 }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                style={{ fontSize: 20, color: "white",}}
              />
            </div>
            <p className={styles.copyTxt}>&copy;2018 privacy policy</p>
          </div>
        </div> 
        <div className={styles.secondSet}>
          <div>
            <h1>Contact Form</h1>
          </div>
          <div className={styles.finalInput}>
            <input placeholder="Enter your full-name" />
            <input placeholder="Enter a valid email address" />
            <input placeholder="Enter your message" />
          </div>
          <div>
            <button>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className={styles.back}>

      </div>
    </div>
  )
}

export default SeventhSec