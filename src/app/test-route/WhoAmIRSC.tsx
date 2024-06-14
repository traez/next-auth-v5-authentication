import { headers } from "next/headers";

export default async function WhoAmIRSC() {
  const apiUrl = process.env.VERCEL_URL;
  console.log(apiUrl)

  const { user } = await fetch(`https://next-auth-v5-authentication.vercel.app/api/whoami`, {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  return <div className="mt-5">Who Am I (RSC): {user}</div>;
}

/*
const { user } = await fetch(`${apiUrl}/api/whoami`, {
*/