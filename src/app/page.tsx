import { auth } from "@/auth";


export default async function Home() {
  const session = await auth();

  return (
    <main>
      <h1 className="text-3xl font-bold">Home Page Trae</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
  
      <div>
        <p>Code runs fine in Development, but Unresolved errors in Production</p>
        <p>Failed Get signIn, signOut calls on Home page load</p>
        <p>Navigating to path test-route throws error: `TypeError: Failed to parse URL cause: TypeError: Invalid URL code: ERR_ INVALID_ URL`</p>
      </div>
    </main>
  );
}

/*
import AuthButton from "@/components/AuthButton.server";

    <AuthButton />  
*/
