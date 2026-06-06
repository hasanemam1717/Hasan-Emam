"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiHeart, HiCalendar, HiArrowRight } from "react-icons/hi";

export interface TBlog {
  _id?: string;
  title: string;
  content: string;
  category: string;
  image?: string;
  like: number;
  createdAt: string;
}

const fallbackImage =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80";

const BlogCard = ({ blog, index }: { blog: TBlog; index: number }) => {
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const excerpt =
    blog.content.length > 120
      ? blog.content.slice(0, 120) + "..."
      : blog.content;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
    >
      {/* ── Image ── */}
      <Link
        href={`/blog/${blog._id ?? index}`}
        className="block relative h-48 overflow-hidden"
      >
        <Image
          src={blog.image || fallbackImage}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold text-blue-300 bg-blue-500/20 border border-blue-500/30 rounded-lg">
          {blog.category}
        </span>
      </Link>

      {/* ── Content ── */}
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-white/40 mb-2">
          <span className="flex items-center gap-1">
            <HiCalendar size={13} />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <HiHeart size={13} className="text-red-400/60" />
            {blog.like}
          </span>
        </div>

        <Link href={`/blog/${blog._id ?? index}`}>
          <h2 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 mb-2">
            {blog.title}
          </h2>
        </Link>

        <p className="text-sm text-white/50 leading-relaxed line-clamp-3 mb-4">
          {excerpt}
        </p>

        <Link
          href={`/blog/${blog._id ?? index}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          Read More
          <HiArrowRight
            size={13}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
