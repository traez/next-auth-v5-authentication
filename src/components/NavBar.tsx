import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="h-5 flex items-center justify-between text-base bg-gray-600 text-white">
      <Link href="/">Home</Link>
      <Link href="/api/auth/signin">Sign In</Link>
      <Link href="/api/auth/signout">Sign Out</Link>
      <Link href="/test-route">Test Route</Link>
    </nav>
  );
};

export default NavBar;
