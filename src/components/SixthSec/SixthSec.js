import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./SixthSec.module.scss"

function SixthSec() {
  return (
    <div className={styles.sixthSec}>
      <div>
        <h2>Follow Us!</h2>
        <div className={styles.icons}>
          <FontAwesomeIcon
            icon={faAnchor}
            style={{ fontSize: 20, color: "white", marginRight: 30 }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: 20, color: "white",marginRight: 30 }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: 20, color: "white", marginRight: 30, }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: 20, color: "white",}}
          />
        </div>
      </div>
  </div>
  )
}

export default SixthSec