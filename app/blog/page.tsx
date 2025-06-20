import Image from "next/image";
import Hero from "../components/Common/Hero";
import Background from "../components/Hero/Background";

export const metadata = {
  title: "Blog | Your Brand Name",
  description:
    "Explore insightful articles on web design, development, UI/UX tips, and more. Stay updated with the latest trends in the digital space.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { limit?: string; offset?: string };
}) {

  const limit = parseInt(searchParams.limit || "20");
  const offset = parseInt(searchParams.offset || "0");

  let blogs = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/blogs?limit=${limit}&offset=${offset}`,
      {
        next: { revalidate: 60 }
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);
    }

    blogs = await res.json();
  } catch (error) {
    console.error("Blog fetch error:", error);
    blogs = [];
  }

  return (
    <div>
      <Hero content={<Background title="Blog" img="/assets/Blog/cover.jpg" />} />

      <div className="pb-[15%] px-[10%] pt-[5%] relative">
        {/* Gradient Backgrounds */}
        <div className="absolute right-0 top-[15%] h-[70%] w-[4%] bg-gradient-to-b from-[#7300FF]/100 via-[#FF0084]/40 to-transparent filter blur-3xl" />
        <div className="absolute left-0 bottom-[0%] h-[70%] w-[2%] bg-gradient-to-b via-[#FF0084]/100 to-transparent filter blur-3xl" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.length === 0 ? (
            <p className="text-center text-lg text-white-500">No blog posts found or failed to load.</p>
          ) : (blogs.map((blog: any) => (
            <div key={blog.id}>
              <Image
                src={blog.img || "/assets/Blog/default.png"}
                alt={blog.title}
                className="rounded-2xl max-h-[225.887] max-w-[367.500]"
                width={367.500}
                height={225.887}
              />
              <div className="pt-3">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {blog.sub_title || ''}
                </p>

                <a
                  href={`/blog/${blog.id}`}
                  className="text-[#8A3EFF] font-medium inline-flex items-center hover:underline"
                >
                  Learn More <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          )))}
        </div>

        <div className="mt-10 flex font-bold justify-center gap-10">
          <a
            href={`?limit=${limit}&offset=${Math.max(offset - limit, 0)}`}
            className="px-4 py-2 bg-[#FF0084] rounded-full hover:bg-[#070322]"
          >
            Prev
          </a>
          <a
            href={`?limit=${limit}&offset=${offset + limit}`}
            className="px-4 py-2 bg-[#FF0084] rounded-full hover:bg-[#070322]"
          >
            Next
          </a>
        </div>

      </div>
    </div>
  );
}
