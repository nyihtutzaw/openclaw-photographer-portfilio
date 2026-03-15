'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  const pages = [];

  // Previous button
  if (currentPage > 1) {
    pages.push(
      <Link
        key="prev"
        href={`${baseUrl}?page=${currentPage - 1}`}
        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        ← Previous
      </Link>
    );
  }

  // Page numbers
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  if (startPage > 1) {
    pages.push(
      <Link
        key="1"
        href={`${baseUrl}?page=1`}
        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        1
      </Link>
    );

    if (startPage > 2) {
      pages.push(
        <span
          key="dots-start"
          className="inline-flex items-center px-2 py-2 text-sm"
        >
          ...
        </span>
      );
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    if (i === currentPage) {
      pages.push(
        <span
          key={i}
          className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white"
        >
          {i}
        </span>
      );
    } else {
      pages.push(
        <Link
          key={i}
          href={`${baseUrl}?page=${i}`}
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          {i}
        </Link>
      );
    }
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push(
        <span key="dots-end" className="inline-flex items-center px-2 py-2 text-sm">
          ...
        </span>
      );
    }

    pages.push(
      <Link
        key={totalPages}
        href={`${baseUrl}?page=${totalPages}`}
        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        {totalPages}
      </Link>
    );
  }

  // Next button
  if (currentPage < totalPages) {
    pages.push(
      <Link
        key="next"
        href={`${baseUrl}?page=${currentPage + 1}`}
        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Next →
      </Link>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {pages}
    </div>
  );
}
