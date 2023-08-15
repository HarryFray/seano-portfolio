import Link from "next/link";

const RootLayout = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-white hover:line-through
            md:text-4xl md:w-auto md:inline w-full"
    >
      SEAN
      <br className="xl:hidden" />
      O’NEILL
    </Link>
  );
};

export default RootLayout;
