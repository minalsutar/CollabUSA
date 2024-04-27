

import coursedata from "../servicedata";

const Services = () =>{


    return(
      <>
      
      <div className="mainservicepage">
           {

              coursedata.map(service =>{
                return(
               <div className="servicemain" key={service.id}>
               <img  src={service.img} alt="web development"/>
               <h5 className="serviceh">{service.service_name}</h5>
               </div>
          
           )
          })

       }
          
        
 
      </div>
      
      
      
      
      
      </>
    )
}
export default Services; 