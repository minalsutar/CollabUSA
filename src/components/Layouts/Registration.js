
// import {useFormik} from 'react';


const Registration = () =>{


   return(
        <>
        <div className="Container">
            
            <form className="regform" >
                <div className="heading">
                    <h5 className="text">Sign-up</h5>
                </div>
                <div className="inputs">
                 
                    <input type="text" name="username" autoComplete="off" id="username" placeholder="USERNAME" />
                 
                    <input type="password" name="password" autoComplete="off" id="password" placeholder="PASSWORD"/>
                
                    <input type ="password" name="confirmPassword" autoComplete="off" id="confirmPassword" placeholder="CONFIRM PASSWORD"/>
                
                </div>
                <div className="button">
                <button>SignUp</button>    
                </div> 
            </form>
       
        </div>
            






        </>
    )
}
export default Registration;

