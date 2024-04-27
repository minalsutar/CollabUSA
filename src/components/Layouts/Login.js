import {Link} from "react-router-dom";

 const Login = () => {

    return(
      <>
         <div className="Container">
            
            <form className="regform" >
                <div className="heading">
                    <h5 className="text">LOGIN</h5>
                </div>
                <div className="inputs">
                 
                    <input type="text" placeholder="USERNAME" required/>
                 
                    <input type="password" placeholder="PASSWORD" required/>
                
                </div>
                <div className="button">
                <button>LOGIN</button> <br/> 
                <div className="getRegistered">
                  <p>not registered ?  </p> <Link to="/Registration" style={{"font-weight":"bold"}}> Register</Link> 
                </div>  
                </div> 
            </form>
        </div>
            

  
      </>
   );
    
};
export default Login;