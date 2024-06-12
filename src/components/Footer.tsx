

export default function Footer() {
  return (
    <>
      <footer className="p-2 flex flex-row justify-center items-center gap-8 text-sm border-t-2 border-traeGreen4 border-solid">
        <a
          href="https://github.com/traez/next-auth-v5-authentication"
          target="_blank"
          className=" hover:underline hover:text-green-600 font-bold text-blue-800"
        >
          NextAuth-V5 Authentication
        </a>
        <b>©2024 Trae Zeeofor</b>
      </footer>
    </>
  );
}
