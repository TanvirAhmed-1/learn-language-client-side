import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../authorization/Authorization";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GoogleSignIn = () => {
  const { gitHubSignIn, googleSignIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation()

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((data) => {
        console.log(data.user);
        // setUser(data.user);

        return fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.user?.displayName,
            email: data.user?.email,
            creationTime: data.user?.metadata.creationTime,
          }),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("User registered successfully!");
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        console.error("Google Sign-In Error:", err);
        toast.error("Google Sign-In failed!");
      });
  };

  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then((data) => {
        console.log(data.user);
        setUser(data.user);

        return fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.user.displayName || "Unknown User",
            email: data.user.email,
            creationTime: data.user.metadata.creationTime,
          }),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/");
        toast.success("User registered successfully!");
      })
      .catch((err) => {
        console.error("GitHub Sign-In Error:", err);
        toast.error("GitHub Sign-In failed!");
      });
  };

  return (
    <div>
      <div>
        <div className="divider">OR</div>
      </div>
      <div className="flex gap-8 flex-col md:flex-row justify-center items-center">
        <div
          onClick={handleGoogleSignIn}
          className="btn btn-ghost flex gap-2 justify-center items-center"
        >
          <span className="text-xl">
            <FcGoogle />
          </span>
          <button className="text-xl font-medium dark:text-white ">
            Google Login
          </button>
        </div>
        <div
          onClick={handleGitHubSignIn}
          className="btn btn-ghost flex gap-2 justify-center items-center"
        >
          <span className="text-xl">
            <FaGithub />
          </span>
          <button className="text-xl font-medium dark:text-white ">
            GitHub Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;
