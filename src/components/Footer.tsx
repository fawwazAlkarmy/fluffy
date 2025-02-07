import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black py-6 flex justify-center items-center">
      <Image src="/logo.svg" alt="Fluffy Burger Logo" width={70} height={70} />
    </footer>
  );
}
