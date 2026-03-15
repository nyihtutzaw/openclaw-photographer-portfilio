import Image from 'next/image';
import Link from 'next/link';
import { Blog } from '@/types/blog';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <article className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg">
        <div className="flex flex-col sm:flex-row">
          {/* Thumbnail - 25% width on desktop, full width on mobile */}
          <div className="relative h-48 w-full sm:h-auto sm:w-1/4 overflow-hidden bg-gray-200 flex-shrink-0">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          
          {/* Content - 75% width on desktop, full width on mobile */}
          <div className="flex w-full flex-col justify-center p-4 sm:w-3/4">
            <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
              {blog.title}
            </h3>
            <p className="mb-3 line-clamp-2 text-sm text-gray-600">
              {blog.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{blog.author}</span>
              <time dateTime={blog.publishedAt}>
                {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
