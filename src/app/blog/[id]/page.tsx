import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/lib/blog-data';
import { notFound } from 'next/navigation';

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: `${blog.title} | Photography Studio`,
    description: blog.excerpt,
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  const previousBlog = blogs.find(
    (b) => b.id === String(parseInt(id) - 1)
  );
  const nextBlog = blogs.find(
    (b) => b.id === String(parseInt(id) + 1)
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header with cover image */}
      <div className="relative h-96 w-full overflow-hidden bg-gray-200">
        <Image
          src={blog.cover}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Meta information */}
        <div className="mb-8 border-b pb-6">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {blog.title}
          </h1>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>
              <span className="font-medium text-gray-900">{blog.author}</span>
              <span className="mx-2">•</span>
              <time dateTime={blog.publishedAt}>
                {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
        </div>

        {/* Article content */}
        <div className="prose prose-lg max-w-none text-gray-700">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 border-t pt-8">
          <div className="flex items-center justify-between">
            {previousBlog ? (
              <Link
                href={`/blog/${previousBlog.id}`}
                className="flex max-w-xs flex-col gap-2 rounded-lg p-3 hover:bg-gray-50"
              >
                <span className="text-sm text-gray-600">← Previous</span>
                <span className="font-semibold text-gray-900 line-clamp-1">
                  {previousBlog.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/blog"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Back to Blog
            </Link>

            {nextBlog ? (
              <Link
                href={`/blog/${nextBlog.id}`}
                className="flex max-w-xs flex-col gap-2 rounded-lg p-3 text-right hover:bg-gray-50"
              >
                <span className="text-sm text-gray-600">Next →</span>
                <span className="font-semibold text-gray-900 line-clamp-1">
                  {nextBlog.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
