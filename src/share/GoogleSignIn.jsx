import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from "../authorization/Authorization";



const GoogleSignIn = () => {
  const { gitHubSignIn,googleSignIn}=useContext(AuthContext)

const handleGoogleSignIn=()=>{
  googleSignIn()
  .then(res=>{
   console.log(res.user)
  })
  .then(err=>{
   console.log(err)
  })
}

const handleHitHubSignIn=()=>{
  gitHubSignIn()
  .then(res=>{
    console.log(res.user)
    setUser(res.user)
   })
   .then(err=>{
    console.log(err)
   })

}
  return (
    <div>
      <div>
        <div className="divider">OR</div>
      </div>
      <div className="flex  gap-8 flex-col md:flex-row justify-center items-center">
        <div onClick={handleGoogleSignIn} className=" btn btn-ghost flex gap-2 justify-center items-center">
        <span className="text-xl"><FcGoogle /></span>
        <button className="text-xl font-medium dark:text-white ">Google Login</button>
        </div>
        <div onClick={handleHitHubSignIn} className="btn btn-ghost flex gap-2 justify-center items-center">
        <span className="text-xl"><FaGithub /></span>
        <button className="text-xl font-medium dark:text-white ">Google Login</button>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;
