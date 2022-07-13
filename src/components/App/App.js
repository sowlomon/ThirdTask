import React from 'react';
import FifthSec from '../FifthSec/FifthSec';
import FirstSec from '../FirstSec/FirstSec';
import Footer from '../Footer/Footer';
import FourthSec from '../FourthSec/FourthSec';
import SecondSec from '../SecondSec/SecondSec';
import SeventhSec from '../SeventhSec/SeventhSec';
import SixthSec from '../SixthSec/SixthSec';
import ThirdSec from '../ThirdSec/ThirdSec';
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.main}>
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <SixthSec />
      <SeventhSec />
      <Footer />
    </div>
  )
}

export default App