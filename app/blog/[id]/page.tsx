import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export const metadata = {
  title: "Blog Detail | Your Brand Name",
  description: "Detailed view of a blog post.",
};

export default async function BlogDetailPage({ params }: Props) {
  const { id } = params;

  let blog: any = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/blogs/${id}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      // If blog not found, show 404 page
      notFound();
    }

    blog = await res.json();
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    notFound(); // or handle error gracefully
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

      <Image
        src={blog.img || "/assets/Blog/default.png"}
        alt={blog.title}
        width={768}
        height={432}
        className="rounded-lg mb-6"
      />

      <p className="text-gray-700 whitespace-pre-line">{blog.content}</p>
    </div>
  );
}
