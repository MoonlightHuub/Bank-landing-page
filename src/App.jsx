import React from "react";
import styles from "./style";
import {
  NavBar,
  Hero,
  Billing,
  Bussines,
  CTA,
  Client,
  CardDeal,
  Footer,
  Stats,
  Testimonials,
} from "./components/index";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> 
          <Bussines /> 
          <Billing />
          <CardDeal /> 
          <Testimonials />
          <Client />
          <CTA />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
