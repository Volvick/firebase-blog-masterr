import React from 'react'
import "./main.css";
const Course = () => {
  const handleClickJava = () =>{
    window.location.href=("https://youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&si=Qt1ATp8qoxFwSIt7");
  }
  const handleClickJavaScript = () =>{
    window.location.href=("https://youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&si=Qt1ATp8qoxFwSIt7");
  }
  const handleClickWebdev = () =>{
    window.location.href=("https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=jAxQWJjy80Yx4M39");
  }
  const handleClickCapcut = () =>{
    window.location.href=("https://youtube.com/playlist?list=PLNs-AlbiDvCQir8tvV549PTu2CfSM1pON&si=tx0mm58IBf4MFmgQ");
  }
  const handleClickFilm = () =>{
    window.location.href=("https://www.youtube.com/embed/videoseries?si=ZwLEt1UoSVeTK-L_&amp;list=PLFd2_AyUGrZv0fGVe0SJ9-YsjI3eTu6Cf");
  }
  const handleClickPremier = () =>{
    window.location.href=("https://youtube.com/playlist?list=PLhMX7pLZGchl2H-0GQZbfdrmmOL42CYF1&si=rXRlKhhXOD-oGppy");
  }
  const handleClickAfter = () =>{
    window.location.href=("https://youtube.com/playlist?list=PLhMX7pLZGchlxD0e_Foo9tz1nC4vCE9D2&si=A7QisBCF50FOTUDv");
  }

  return (
    <div>
     <main>
       <section class="video_content grid">
         <div class="video_items" onClick={handleClickJava}>
           <a target="_blank" href="https://youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&si=Qt1ATp8qoxFwSIt7">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=3eAb4JPGWGEH9-Hj&amp;list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" alt=""/>
             </div>
             <div class="headingsk">
               <p>Complete JAVA Course</p>
               <span>CodeWithHarry <i class="fa fa-circle-check"></i> </span>
               <span>50.2 M views</span>
             </div>
           </div>
         </div>
         <div class="video_items" onClick={handleClickJavaScript}>
           <a target="_blank" href="https://youtube.com/playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&si=WKtE99DKj2oda3Sn">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=_6JyzC9Z8EhKB6mw&amp;list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" />
             </div>
             <div class="headingsk">
               <p>JavaScript Full Course</p>
               <span>Shradha Khapra <i class="fa fa-circle-check"></i> </span>
               <span>4.9 M views</span>
             </div>
           </div>
         </div>
         <div class="video_items" onClick={handleClickWebdev}>
           <a target="_blank" href="https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=jAxQWJjy80Yx4M39">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=8E4ytxaUXI74yNdj&amp;list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" />
             </div>
             <div class="headingsk">
               <p>Web Development Full Course</p>
               <span>Apna College <i class="fa fa-circle-check"></i> </span>
               <span>19.5 M views</span>
             </div>
           </div>
         </div>
         <div class="video_items" onClick={handleClickCapcut}>
           <a target="_blank" href="https://youtube.com/playlist?list=PLNs-AlbiDvCQir8tvV549PTu2CfSM1pON&si=tx0mm58IBf4MFmgQ">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=0Lli3yHogASrh49E&amp;list=PLNs-AlbiDvCQir8tvV549PTu2CfSM1pON" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-boy-children-avatar-victoruler-linear-colour-victoruler-2.png" />
             </div>
             <div class="headingsk">
               <p>Complete CAPCUT Course</p>
               <span>Shadab Alam <i class="fa fa-circle-check"></i> </span>
               <span>170k views</span>
             </div>
           </div>
         </div>
         <div class="video_items" onClick={handleClickFilm}>
           <a target="_blank" href="https://www.youtube.com/embed/videoseries?si=ZwLEt1UoSVeTK-L_&amp;list=PLFd2_AyUGrZv0fGVe0SJ9-YsjI3eTu6Cf">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=ZwLEt1UoSVeTK-L_&amp;list=PLFd2_AyUGrZv0fGVe0SJ9-YsjI3eTu6Cf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" />
             </div>
             <div class="headingsk">
               <p>Complete FILM-MAKING Course</p>
               <span>X. Amru Sabiq<i class="fa fa-circle-check"></i> </span>
               <span>56.7M views</span>
             </div>
           </div>
         </div>
         <div class="video_items" onClick={handleClickPremier}>
           <a target="_blank" href="https://youtube.com/playlist?list=PLhMX7pLZGchl2H-0GQZbfdrmmOL42CYF1&si=rXRlKhhXOD-oGppy">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=ZugE3L3aHOnI7zfW&amp;list=PLhMX7pLZGchl2H-0GQZbfdrmmOL42CYF1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" alt=""/>
             </div>
             <div class="headingsk">
               <p>Adobe Premier Pro Course</p>
               <span>The Bhavya Shah
               <i class="fa fa-circle-check"></i> </span>
               <span>20.1 M views</span>
             </div>
           </div>
         </div>
         <div class="video_items" onClick={handleClickAfter}>
           <a target="_blank" href="https://youtube.com/playlist?list=PLhMX7pLZGchlxD0e_Foo9tz1nC4vCE9D2&si=A7QisBCF50FOTUDv">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=s4qU1MKg8MRaBFbs&amp;list=PLhMX7pLZGchlxD0e_Foo9tz1nC4vCE9D2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" />
             </div>
             <div class="headingsk">
               <p>Adobe After Effects Course</p>
               <span>The Bhavya Shah <i class="fa fa-circle-check"></i> </span>
               <span>8.7 M  views</span>
             </div>
           </div>
         </div>
         {/* <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back3.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" />
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back4.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-boy-children-avatar-victoruler-linear-colour-victoruler-2.png" />
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back6.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" />
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back5.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" alt=""/>
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back1.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" />
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back3.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" />
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back4.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-boy-children-avatar-victoruler-linear-colour-victoruler-2.png" />
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back6.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" />
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back5.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" alt=""/>
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back1.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" />
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back3.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" />
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back4.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-boy-children-avatar-victoruler-linear-colour-victoruler-2.png" />
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a target="_blank" href="single-page.html">
             <img src="images/video_images/back6.jpg" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" />
             </div>
             <div class="headingsk">
               <p>How to make Hotel Booking Website With HTML CSS ......</p>
               <span>GorkCoder <i class="fa fa-circle-check"></i> </span>
               <span>56.7M .1 Week ago</span>
             </div>
           </div>
         </div> */}
       </section>
     </main>

    </div>
  )
}

export default Course