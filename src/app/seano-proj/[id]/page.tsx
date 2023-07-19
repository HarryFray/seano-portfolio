import Link from "next/link";

const Project = ({ params }: { params: { id: string } }) => {
  return (
    <main className="min-h-screen">
      <h1>My Proj: {params.id}</h1>
      <Link
        className="w-fit text-base font-semibold hover:underline cursor-pointer"
        href="/"
      >
        GO HOME FELISHA
      </Link>
    </main>
  );
};

export default Project;
