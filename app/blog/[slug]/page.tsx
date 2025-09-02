import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {BlogContent} from "@/app/components/blog/BlogContent";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  try {
    const res = await fetch(
     `${process.env.NEXT_PUBLIC_API_BASE}/api/blogs/${slug}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      return {
        title: "Blog Not Found | Your Brand Name",
        description: "The blog you're looking for could not be found.",
      };
    }

    const blog = await res.json();

    return {
      title: `${blog.title} | Your Brand Name`,
      description: blog.sub_title || blog.content?.slice(0, 150),
      openGraph: {
        title: blog.title,
        description: blog.sub_title || "",
        images: [blog.img || "/assets/Blog/default.png"],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.sub_title || "",
        images: [blog.img || "/assets/Blog/default.png"],
      },
    };
  } catch (error) {
    return {
      title: "Error Loading Blog | Your Brand Name",
      description: "There was an error while fetching the blog post.",
    };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  let blog: any = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/blogs/${slug}`,
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
         <BlogContent content = {blog.content}  />
      </article>
    </div>
  );
}
