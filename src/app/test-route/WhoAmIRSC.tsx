import { headers } from "next/headers";

export default async function WhoAmIRSC() {
  const apiUrl = process.env.VERCEL_URL;
  //const apiUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

  const { user } = await fetch(`https://${apiUrl}/api/whoami`, {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  return <div className="mt-5">Who Am I (RSC): {user}</div>;
}
