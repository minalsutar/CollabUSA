
import Footer from "../components/Layouts/Footer.js";
const AboutUs = () =>{


    return(
        <>
        <div className="aboutus">
        <div className="main">      
    <div className="col1">
       <div className="welcome-title">
           <h4>WelCome to Collab Vision Solutions-USA</h4><br></br>
           <p>Welcome to Collabvision USA, your trusted partner in creating cutting-edge mobile apps and web applications. With a passion for innovation and a commitment to excellence, we strive to empower businesses to thrive in the digital world.</p>
       </div>
      <div className="div1">
      <div  className="purpose">
          <h4>Our Vision:</h4>
            <p>
            For excellent leadership and life long success a centre of higher learning to establish and develop and institute with expanding horizon of knowledge in the field of engineering and technology.
            </p>
        </div>

        <div className="Feature">
          <h4>Our Mission:</h4>
            <p>
            To provide professional program creative academics through high-quality education in the engineering and disciplines.Establish mutual beneficial partnerships with Industry, Alumni, Local, State and Central Governments by Public Service Assistance and Collaborative Research.
                
            </p> 
         </div>  

         <div className="TargetUser">
         <h4>Our Expertise:</h4>
          <p> At Collabvision , we specialize in crafting bespoke solutions tailored to meet the unique needs of our clients. Whether you're a startup looking to launch a disruptive mobile app or an established enterprise seeking to revamp your online presence, our team of skilled professionals is here to turn your vision into reality.</p>
          </div>
      </div>
       
             
    </div>
    <div  className="col2">
       <img   src="https://cdn.pixabay.com/photo/2021/02/11/11/21/meeting-6004997_960_720.png" alt="painting"/>
    
     {/* <div className="aboutus-skill">
      <h3>Skill</h3>
      </div>
      <div className="aboutusskill-title">
      <h4 >Professional Certificate Courses (Online)</h4>
    
      
        <ul>
             <li>
              <span style-prop-object="fond-weight=400" margin="10px">Online certificates can be obtained in a range of specialized areas.</span>
             </li>
             <li>
              <span style-prop-object="fond-weight=400" margin="10px">Online associate degrees usually take approximately two years then</span>  
             </li>
             <li>
              <span style-prop-object="fond-weight=400" margin="10px">Online preparatory year programs are an opportunity for students..</span>
             </li>
             <li>
                  <span style-prop-object="fond-weight=400" margin="10px">Online Summer courses are a great way to gain qualifications.</span>   
             </li>        
        </ul>
      </div> */}
  </div>   
  </div>
  {/* <br></br>
  <br></br>
  <hr></hr> */}

    <div  className="aboutus-certification">
    
    Why Choose Us?
    </div>
<div className="main-div2">
        <div className="col3">
            <p><b>Specialized Focus:</b> With a dedicated focus on mobile apps and web applications, we bring deep expertise and industry-leading knowledge to every project we undertake.</p>   
         </div>
          <div className="col3">
           <p><b>Creative Excellence:</b>   We blend creativity with technical prowess to deliver visually stunning and functionally robust solutions that captivate users and drive engagement.</p>
          </div>    
           <div className="col3">
             <p><b >Collaborative Partnership:</b>     We believe in the power of collaboration. By working closely with our clients, we ensure that our solutions not only meet but exceed their expectations.</p> 
           </div>
            <div className="col3">
              <p><b>Agile Development:</b>   Our agile development methodology allows us to adapt and iterate quickly, ensuring that we deliver high-quality solutions on time and within budget.</p> 
           </div>
</div>

<div  className="aboutus-certification">

    Services We Offer
    </div>
<div className="main-div3">
  
    <div className="list1">
      <h6>Mobile app development</h6>
      <p>From iOS and Android to cross-platform solutions, we specialize in developing mobile apps that deliver exceptional user experiences.</p>
    </div>
    <div  className="list2">
      <h6>Web Application Development:</h6>
      <p>Whether it's a dynamic website, a progressive web app, or a custom web portal, we create web applications that are intuitive, scalable, and secure.</p>
    </div>
    <div  className="list3">
      <h6>UI/UX Design</h6>
      <p> Our team of talented designers crafts intuitive interfaces and seamless user experiences that delight users and drive conversions.</p>    
      </div>
    <div  className="list4">
      <h6>Consulting and Strategy:</h6>
      <p>We provide strategic guidance and consulting services to help our clients leverage the latest technologies and stay ahead of the competition.</p>
    </div>
  
        
</div>


<Footer/>
</div>

</>
    )
}
export default AboutUs;