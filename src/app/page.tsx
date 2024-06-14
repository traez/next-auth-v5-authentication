import { auth } from "@/auth";


export default async function Home() {
  const session = await auth();

  return (
    <main>
      <h1 className="text-3xl font-bold">Home Page Trae</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>

    </main>
  );
}

/*
import AuthButton from "@/components/AuthButton.server";
      <AuthButton />
*/
