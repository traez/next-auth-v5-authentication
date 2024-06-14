"use client";
import { useEffect, useState } from "react";

export default function WhoAmIAPI() {
  const [user, setUser] = useState(null);
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  console.log(vercelUrl)

  useEffect(() => {
    fetch(`https://next-auth-v5-authentication.vercel.app/api/whoami`)
      .then((res) => res.json())
      .then(({ user }) => setUser(user));
  }, []);
  return <div className="mt-5">Who Am I (client): {user}</div>;
}

/*
  fetch(`${vercelUrl}/api/whoami`)

"use client";
import { useEffect, useState } from "react";

export default function WhoAmIAPI() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/api/whoami")
      .then((res) => res.json())
      .then(({ user }) => setUser(user));
  }, []);
  return <div className="mt-5">Who Am I (client): {user}</div>;
}

*/