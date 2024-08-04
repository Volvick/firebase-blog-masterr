
import React from "react";
const About = () => {
  const handleClick = () =>{
    window.location.href="https://www.instagram.com/_volvick?igsh=bnVpbzdxNGo2Z2Fi";
  }
  const handleClickyt = () =>{
    window.location.href="https://youtube.com/@volvick?si=Zl9QwRjdMyGoUxq0";
  }
  return (
    <div className="container padding">
      
    <section id="profilesk">
      <div class="section__pic-containersk">
        <img src="https://raw.githubusercontent.com/Volvick/image/main/nse-6071604234005749160-1000240330.jpg" alt=" profile picture" />
      </div>
      <div class="section__textsk">
        <p class="section__textsk__p1">Hello, I'm</p>
        <h1 class="titlesk">Sumant</h1>
        <p class="section__textsk__p2">Youtuber</p>
        <div class="btnsk-containersk">
          <button
            class="btnsk btnsk-color-2"
          >
            <a href="https://www.instagram.com/_volvick?igsh=bnVpbzdxNGo2Z2Fi" target="_blank">

            Instagram
            </a>
          </button>
          <button class="btnsk btnsk-color-1" >
          <a href="https://youtube.com/@volvick?si=Zl9QwRjdMyGoUxq0" target="_blank">
            YouTube
            </a>
          </button>
       
        </div>
      </div>
    </section>
      <p class="section__text__p1sk">Get in Touch</p>
      <h1 class="titlesk">Contact Me</h1>
      <div class="contactsk-info-upper-container">
        <div class="contactsk-info-container">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/009/614/large_2x/email-and-mail-icon-black-free-png.png"
            alt="Email icon"
            class="iconsk contact-icon email-icon"
          />
           
          <p><a href="mailto:54volvick@gmail.com">54volvick@gmail.com</a></p>
        </div>
      </div>
      <p className="abouttet">
          Hii,I am sumant and i am just chasing my dream i want to create a website which can help students to get clients and clients a good video editors this website i made my the help of a Youtube video Channel:
          <a href="https://www.youtube.com/@codewithvishal2968" >CodeWithVishal</a> 
        </p>
    <footer>
    
      <p>Copyright &#169; 2024 Volvick. All Rights Reserved.</p>
    </footer>
    </div>
  );
};

export default About;
