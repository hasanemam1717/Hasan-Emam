import BlogCard, { TBlog } from "@/components/BlogCard";

export const dynamic = "force-dynamic";

const BlogPage = async () => {
  let blogs: TBlog[] = [];
  try {
    const res = await fetch(
      "https://my-portfolio-server-brown.vercel.app/blogs",
      { method: "GET", cache: "no-store" },
    );
    if (res.ok) {
      const data = await res.json();
      blogs = data?.data ?? [];
    }
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#040f4a]">
      {/* ── Header ── */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
            Web Dev Blog
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Articles
            </span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
            Insights, tutorials, and thoughts on web development, modern
            frameworks, and building better software.
          </p>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog, index) => (
              <BlogCard blog={blog} index={index} key={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-white/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <p className="text-white/40 text-lg font-medium">No articles yet</p>
            <p className="text-white/30 text-sm mt-1">
              Check back soon for new posts.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
