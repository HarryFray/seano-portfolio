import Link from "next/link";

const Project = ({ params }: { params: { project_id: string } }) => {
  return (
    <main className="min-h-screen p-40">
      <h1>My Slug: {params.project_id}</h1>
    </main>
  );
};

export default Project;
