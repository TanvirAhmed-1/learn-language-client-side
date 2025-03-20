import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../authorization/Authorization";
import { useNavigate } from "react-router-dom";

const rememberAxios = axios.create({
  baseURL: "https://learn-language-server-tau.vercel.app",
  withCredentials: true,
});
const AxiosHook = () => {
  const { setUser, userSignOut } = useContext(AuthContext);
 const navigate=useNavigate()


  useEffect(() => {
    rememberAxios.interceptors.request.use(
      (response) => {
        return response;
      },
      (error) => {
        // console.log("interceptors", error.state);
        if (state === 404) {
          // console.log("user logout");
          userSignOut()
            .then((data) => {
              setUser(data.user);
              navigate("/login")
            })
            .then((err) => {
              // console.log(err);
            });
        }
        else{
            return Promise.reject(error);
        }
      }
    );
  }, []);

  return rememberAxios;
};

export default AxiosHook;
