"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled,setButtonDisabled] = useState(false)
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [user])
  
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("login failed", error);
      toast.error(error.response.data.error || "");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster position="top-center" reverseOrder={false} />
      <h1>{loading ? "Processing" : "Login"}</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none text-black focus:border-gray-600"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button onClick={onLogin}  disabled={buttonDisabled} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
      {buttonDisabled ? "No Login" : "Login Here"}
      </button>
      <Link href="/signup">visit signup page</Link>
    </div>
  );
}
