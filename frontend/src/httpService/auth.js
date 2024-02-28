import axios from "axio";
import { base } from "./basehttp.js";

//eventos para registrarse
export const handleSignup = async () => {
  try {
    const response = await axios.post(`${base}/signup`, signupData);
    console.log(response.data);
  } catch (error) {
    console.error("Error al iniciar Sesion:", error);
  }
};

//eventos para iniciar session
export const handleSignin = async () => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/signin",
      signinData
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error signing in:", error);
  }
};
