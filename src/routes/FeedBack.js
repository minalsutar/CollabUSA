import {useState} from "react";
import {FaStar} from "react-icons/fa"; 

const FeedBack = () =>{
       const[rating, setRating]=useState(null);
       const[hover, setHover]=useState(null);


    return(
        <>
        <div className="contact-us-container">
           <h1 >FeedBack Form</h1>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message"> Your FeedBack:</label>
          <textarea id="message" name="message" rows="4"  placeHolder="/// " required></textarea>
           
           <div>
           <label>Rating:</label> 
            {[...Array(5)].map((star,index) =>{
               
                const currentRating = index + 1;

                return (
                    <label>
                       <input 
                         type="radio"
                         name="rating" 
                         value={currentRating}
                         onClick={()=> setRating(currentRating)}
                         />
                       <FaStar 
                         className="star" 
                         size={50}
                         //is a conditional rendering of the color property in JSX
                         color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                         onMouseEnter={() =>setHover(currentRating)}
                         onMouseLeave={() => setHover(null)}
                         />
                    </label> 
            
                );
                
                
           })}
           </div>
          

                   
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
    )
}
export default FeedBack;
