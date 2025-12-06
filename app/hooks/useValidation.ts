"use client";

import { useState } from "react";

export default function useValidation() {
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateEmail(email: string = "") {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  }
  function validatePassword(password: string = "") {
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    validateEmail,
    validatePassword,
    error,
    setError,
    handleEmailChange,
    handlePasswordChange,
  };
}
