"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUpPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignUp = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>SignUp</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button onClick={onSignUp} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
        SignUp Here
      </button>
      <Link href="/login">visit login page</Link>
    </div>
  );
}
