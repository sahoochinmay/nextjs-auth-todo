"use client";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data);
    setData(response.data.data.username);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster position="top-center" reverseOrder={false} />
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2>{data === "" ? "Nothing" : <Link href={`/profile/data`}>{data}</Link>}</h2>
      <hr />
      <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
      <button onClick={getUserDetails} className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get data
      </button>
    </div>
  );
};

export default Profile;
