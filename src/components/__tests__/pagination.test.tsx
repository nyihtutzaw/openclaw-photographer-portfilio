import { render, screen } from '@testing-library/react';
import Pagination from '@/components/Pagination';

describe('Pagination Component', () => {
  it('renders page numbers correctly', () => {
    render(
      <Pagination currentPage={1} totalPages={5} baseUrl="/blog" />
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('highlights current page', () => {
    render(
      <Pagination currentPage={2} totalPages={5} baseUrl="/blog" />
    );

    const currentPage = screen.getByText('2');
    expect(currentPage).toHaveClass('bg-blue-600', 'text-white');
  });

  it('shows previous button on non-first page', () => {
    render(
      <Pagination currentPage={2} totalPages={5} baseUrl="/blog" />
    );

    const prevButton = screen.getByText('← Previous');
    expect(prevButton).toHaveAttribute('href', '/blog?page=1');
  });

  it('hides previous button on first page', () => {
    render(
      <Pagination currentPage={1} totalPages={5} baseUrl="/blog" />
    );

    expect(screen.queryByText('← Previous')).not.toBeInTheDocument();
  });

  it('shows next button on non-last page', () => {
    render(
      <Pagination currentPage={1} totalPages={5} baseUrl="/blog" />
    );

    const nextButton = screen.getByText('Next →');
    expect(nextButton).toHaveAttribute('href', '/blog?page=2');
  });

  it('hides next button on last page', () => {
    render(
      <Pagination currentPage={5} totalPages={5} baseUrl="/blog" />
    );

    expect(screen.queryByText('Next →')).not.toBeInTheDocument();
  });

  it('shows ellipsis for skipped pages', () => {
    render(
      <Pagination currentPage={1} totalPages={10} baseUrl="/blog" />
    );

    const ellipses = screen.getAllByText('...');
    expect(ellipses.length).toBeGreaterThan(0);
  });

  it('handles single page correctly', () => {
    render(
      <Pagination currentPage={1} totalPages={1} baseUrl="/blog" />
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.queryByText('← Previous')).not.toBeInTheDocument();
    expect(screen.queryByText('Next →')).not.toBeInTheDocument();
  });

  it('generates correct pagination links', () => {
    render(
      <Pagination currentPage={3} totalPages={5} baseUrl="/blog" />
    );

    const page2Link = screen.getByText('2');
    const page4Link = screen.getByText('4');

    expect(page2Link).toHaveAttribute('href', '/blog?page=2');
    expect(page4Link).toHaveAttribute('href', '/blog?page=4');
  });
});
