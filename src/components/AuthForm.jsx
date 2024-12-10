import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase"; // Your Firebase setup file
import { setUser } from "../redux/features/authSlice"; // Your Redux action
import { loginFormData } from "../data/staticData"; // Static data for form fields
import { useNavigate } from "react-router-dom"; // React Router for navigation

import Container from "./Container"; // Custom Container Component
import Button from "./Button"; // Custom Button Component
import toast from "react-hot-toast"; // For toast notifications

// Initial state for the form values
const initialState = {
  email: "",
  password: "",
  error: "",
};

function AuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Manage login/signup toggle and form values
  const [isLogin, setIsLogin] = useState(true);
  const [values, setValues] = useState(initialState);
  const { email, password, error } = values;

  // Handle input changes
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Create account
  const createAccount = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { uid, email: userEmail } = user;
      const serializedUser = { uid, email: userEmail };
      dispatch(setUser(serializedUser)); // Storing user info in Redux
      setValues(initialState); // Reset form after successful signup
      toast.success("Account successfully created. Welcome 😊"); // Success toast
      navigate("/"); // Redirect to home page
    } catch (error) {
      handleAuthError(error);
    }
  };

  // Login user
  const logIn = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const { uid, email: userEmail } = user;
      const serializedUser = { uid, email: userEmail };
      dispatch(setUser(serializedUser)); // Store user in Redux
      setValues(initialState); // Reset form after successful login
      toast.success("Logged in successfully. Welcome back 😊"); // Success toast
      navigate("/"); // Redirect to home page
    } catch (error) {
      handleAuthError(error);
    }
  };

  // Handle authentication errors
  const handleAuthError = (error) => {
    let errorMessage = "";
    switch (error.code) {
      case "auth/invalid-email":
        errorMessage = "Please enter a valid email address.";
        break;
      case "auth/user-not-found":
        errorMessage = "No user found with this email. Please sign up.";
        break;
      case "auth/wrong-password":
        errorMessage = "Incorrect password. Please try again.";
        break;
      case "auth/email-already-in-use":
        errorMessage = "This email is already in use. Please log in.";
        break;
      default:
        errorMessage = "Incorrect password or Email Id";
    }
    setValues({ ...values, error: errorMessage }); // Display error message
    toast.error(errorMessage); // Error toast notification
  };

  // Handle form submission (login/signup)
  const handleAuthClick = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setValues({ ...values, error: "Please input both email and password." });
      toast.error("Please input both email and password."); // Show toast error
      return;
    }
    if (isLogin) {
      logIn();
    } else {
      createAccount();
    }
  };

  return (
    <Container>
      <div className="flex h-[calc(100vh-60px)] items-center justify-center">
        <form className="flex w-full flex-col items-center justify-center gap-[10px] rounded-xl bg-white p-[20px] md:w-[400px]">
          <h3 className="mb-[10px] text-xl font-bold">
            {isLogin ? "Log in" : "Create an account"}
          </h3>
          {loginFormData.map((el) => (
            <div
              key={el.id}
              className="mb-[10px] flex w-full flex-col items-start gap-[5px]"
            >
              <label className="font-bold" htmlFor={el.name}>
                {el.title}:
              </label>
              <input
                className="input"
                id={el.name}
                type={el?.type}
                placeholder={el?.title}
                name={el?.name}
                value={values[el?.name]}
                onChange={handleChange}
              />
            </div>
          ))}

          <Button onClick={handleAuthClick}>
            {isLogin ? "Log in" : "Create an account"}
          </Button>
          {error && <p className="text-sm font-bold text-red-400">{error}</p>}
          <p
            className="mt-[10px] cursor-pointer text-sm font-bold text-yellow"
            onClick={() => setIsLogin((p) => !p)}
          >
            {isLogin ? "Create new account!" : "Already have an account?"}
          </p>
        </form>
      </div>
    </Container>
  );
}

export default AuthForm;
