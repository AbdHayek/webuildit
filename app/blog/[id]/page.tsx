import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { sanitize } from '@/lib/sanitizeHtml';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

    if (!res.ok) notFound();

    blog = await res.json();
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 text-white">

      <div className="mb-6">
        <Link href="/blog" className="text-md text-[#8A3EFF] flex gap-2">
          <ArrowLeft /> Back to Home
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold leading-tight mb-2">
        {blog.title}
      </h1>

      {/* Subtitle */}
      {blog.sub_title && (
        <p className="text-lg text-gray-300 mb-6 italic">{blog.sub_title}</p>
      )}

      {/* Author & Dates */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-gray-400 mb-6">
        <span>By <span className="font-medium text-white">{blog.user?.name || "Unknown"}</span></span>
        <span>· Created: {format(new Date(blog.createdAt), "PPP")}</span>
        <span>· Updated: {format(new Date(blog.updatedAt), "PPP")}</span>
      </div>

      {/* Image */}
      <div className="mb-8">
        <Image
          src={blog.img || "/assets/Blog/default.png"}
          alt={blog.title}
          width={768}
          height={432}
          className="rounded-xl w-full h-auto object-cover shadow-lg"
        />
      </div>

      {/* Content */}
      <article className="prose prose-invert prose-lg max-w-none mb-[20%]">
        <div dangerouslySetInnerHTML={{ __html: sanitize(blog.content || '') }} />
      </article>
    </div>
  );
}
