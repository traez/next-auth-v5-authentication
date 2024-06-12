import { headers } from "next/headers";

export default async function WhoAmIRSC() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + "/api/whoami";

  const { user } = await fetch(apiUrl, {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  return <div className="mt-5">Who Am I (RSC): {user}</div>;
}
