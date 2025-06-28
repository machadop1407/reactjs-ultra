import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../supabaseClient";

type AuthFormData = {
  email: string;
  password: string;
};

const Auth: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();
  const [authType, setAuthType] = useState<"login" | "signup">("login");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: AuthFormData) => {
    setErrorMessage(null);
    if (authType === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) setErrorMessage(error.message);
    } else {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
      if (error) setErrorMessage(error.message);
      else
        alert("Sign up successful! Please check your email for confirmation.");
    }
  };

  return (
    <div className="auth-container">
      <h2>{authType === "login" ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
        <label>Password:</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="error-text">{errors.password.message}</p>
        )}
        {errorMessage && <p className="error-text">{errorMessage}</p>}
        <button type="submit">
          {authType === "login" ? "Login" : "Sign Up"}
        </button>
      </form>
      <div>
        {authType === "login" ? (
          <p>
            Don't have an account?{" "}
            <button onClick={() => setAuthType("signup")}>Sign Up</button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <button onClick={() => setAuthType("login")}>Login</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
