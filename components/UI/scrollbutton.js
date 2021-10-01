import React, {useState, useEffect, Fragment} from "react"
import styles from './scrollbutton.module.css'
import ArrowUp from '../../public/arrow-up.svg';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 350) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
   
    const scroll =()=> {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        
        const timer = setTimeout(() => {
          setIsVisible(false);
      }, 500);
      return () => {
          clearTimeout(timer);
      };
      }, []);

    return(
        <div className={styles["scroll-to-top"]}>
            {isVisible && <ArrowUp onClick={scroll} className={styles.icon} />}
        </div>
            
      
    )
}

export default ScrollToTop;