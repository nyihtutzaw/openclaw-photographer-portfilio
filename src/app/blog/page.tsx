import { Suspense } from 'react';
import { blogs } from '@/lib/blog-data';
import BlogCard from '@/components/BlogCard';
import Pagination from '@/components/Pagination';

const ITEMS_PER_PAGE = 5;

interface BlogListPageProps {
  searchParams: Promise<{ page?: string }>;
}

export const metadata = {
  title: 'Blog | Photography Studio',
  description: 'Read our latest photography tips, techniques, and stories.',
};

export default async function BlogListPage({ searchParams }: BlogListPageProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || '1', 10));
  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  // Validate page number
  if (currentPage > totalPages && totalPages > 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-gray-900">Page Not Found</h1>
          <p className="mt-2 text-gray-600">
            The page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
          <p className="mt-2 text-lg text-gray-600">
            Photography tips, techniques, and stories from our studio.
          </p>
        </div>

        <Suspense fallback={<div className="text-center text-gray-600">Loading...</div>}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {paginatedBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl="/blog"
              />
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}
