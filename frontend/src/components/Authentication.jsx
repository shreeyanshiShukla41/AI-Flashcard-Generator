import { useState } from "react";
import Layout from "./Layout";

export default function Authentication() {
  let [isSignUpView, setIsSignUpView] = useState(true);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleFormSubmit = async (e) => {
    // 1.
    e.preventDefault();

    // 2.

    if (!email.trim() || !password.trim()) {
      alert("Validation Error: Fields cannot be blank");
      return;
    }

    if (password.length < 6) {
      alert("Security Safeguard: Password must be at least 6 characters!");
      return;
    }

    // 3.
    if (isSignUpView) {
      try {
        const response = await fetch("http://localhost:8000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Account created successfully");
          localStorage.setItem("userSessionToken", data.token);
        } else {
          alert("Signup Failed: " + data.message);
        }
      } catch (error) {
        alert("Network Error: Could not connect to the backend server.");
      }
    } else {
      try {
        const response = await fetch("http://localhost:8000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Welcome Back");
          localStorage.setItem("userSessionToken", data.token);
        } else{
          alert("Login Denied: " + data.message);
        }
      } catch (error) {
        alert("Network Error: Could not connect to the backend server.");
      }
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={handleFormSubmit}>

        </form>
      </div>
    </Layout>
  );
}
