import Link from "next/link";

const Project = ({ params }: { params: { id: string } }) => {
  return (
    <main className="min-h-screen p-40">
      <h1>My Slug: {params.id}</h1>
    </main>
  );
};

export default Project;
