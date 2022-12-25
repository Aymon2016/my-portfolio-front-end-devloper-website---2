import React from 'react'
import css from './footer.module.css'
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
  <div className="container-fluid" id='#footer' data-aos="fade-right"
  data-aos-duration="3000">
    
     <ScrollToTop smooth top={800} />
    <footer id={css.footer}>
        <div className="container">
        <h3>MOHAMMAD AYMON</h3>
        <p>Full Stack Developer</p>
        <div className={css.socialLinks}>
            <a href="https://twitter.com/mohammad_aymon" class="twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100073785387517" class="facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/mohammad-aymon-57a0541b8/"class="linkedin"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/mdaymon2016/"class="instagram"><i class="fab fa-instagram"></i></a>
            
        </div>
        
        <div class={css.copyright}>
            &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
        </div>
        <div class={css.credits}>
           
            Designed by <a href="#">AYMON</a>
        </div>
        </div>
      
          
    </footer>
      
    </div>
  )
}

export default Footer