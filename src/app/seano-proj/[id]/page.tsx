import Link from "next/link";

const Project = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>My Proj: {params.id}</h1>
      <Link
        className="w-fit text-base font-semibold hover:underline cursor-pointer"
        href="/"
      >
        {"HOME"}
      </Link>
    </div>
  );
};

export default Project;
