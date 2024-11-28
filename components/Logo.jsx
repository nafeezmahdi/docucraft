import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div class="lg:flex">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="h-6 w-auto"
          width={100}
          height={24}
        />
      </Link>
    </div>
  );
}
