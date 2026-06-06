import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiHeart, HiCalendar, HiArrowLeft } from "react-icons/hi";
import type { TBlog } from "@/components/BlogCard";

export const dynamic = "force-dynamic";

const fallbackImage =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80";

async function getBlogs(): Promise<TBlog[]> {
  try {
    const res = await fetch(
      "https://my-portfolio-server-brown.vercel.app/blogs",
      { cache: "no-store" },
    );
    if (res.ok) {
      const data = await res.json();
      return data?.data ?? [];
    }
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }
  return [];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ blogid: string }>;
}) {
  const { blogid } = await params;
  const blogs = await getBlogs();

  // Find blog by _id or index
  const blog = blogs.find((b) => b._id === blogid) ?? blogs[Number(blogid)];

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#040f4a]">
      {/* ── Back Link ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-blue-400 transition-colors"
        >
          <HiArrowLeft size={16} />
          Back to Articles
        </Link>
      </div>

      {/* ── Article ── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        {/* Hero Image */}
        <div className="relative h-56 sm:h-72 md:h-96 rounded-2xl overflow-hidden mb-8 border border-white/10">
          <Image
            src={blog.image || fallbackImage}
            alt={blog.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040f4a] via-transparent to-transparent" />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-500/20 border border-blue-500/30 rounded-lg">
            {blog.category}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-white/40">
            <HiCalendar size={15} />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-white/40">
            <HiHeart size={15} className="text-red-400/60" />
            {blog.like} likes
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Content */}
        <div className="prose prose-invert max-w-none text-white/70 text-base md:text-lg leading-relaxed space-y-5">
          {blog.content.split("\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
