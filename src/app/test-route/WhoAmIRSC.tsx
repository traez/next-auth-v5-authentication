import { headers } from "next/headers";

export default async function WhoAmIRSC() {
  const apiUrl = process.env.VERCEL_URL;

  const { user } = await fetch(`${apiUrl}/api/whoami`, {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  return <div className="mt-5">Who Am I (RSC): {user}</div>;
}
