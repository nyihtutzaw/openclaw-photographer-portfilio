import React from "react";
import { render, screen } from "@testing-library/react";
import { ProjectGallery } from "@/components/project-gallery";
import { projects } from "@/lib/portfolio-data";

// Mock next/image — strip Next.js-only props that are invalid on <img>
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, fill: _fill, sizes: _sizes, ...rest }: { src: string; alt: string; fill?: boolean; sizes?: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...rest} />
  ),
}));

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("ProjectGallery", () => {
  it("renders the section heading", () => {
    render(<ProjectGallery />);
    expect(screen.getByRole("heading", { name: /stories told in frames/i })).toBeInTheDocument();
  });

  it("renders a card for each project", () => {
    render(<ProjectGallery />);
    projects.forEach((project) => {
      expect(screen.getByRole("link", { name: new RegExp(project.title, "i") })).toBeInTheDocument();
    });
  });

  it("renders project titles and locations", () => {
    render(<ProjectGallery />);
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.location)).toBeInTheDocument();
    });
  });

  it("renders image count badges", () => {
    render(<ProjectGallery />);
    // All 3 projects have 5 images — use getAllByText since badges are identical
    const badges = screen.getAllByText(`${projects[0].images.length} photos`);
    expect(badges).toHaveLength(projects.length);
  });

  it("links to correct project detail URLs", () => {
    render(<ProjectGallery />);
    projects.forEach((project) => {
      const link = screen.getByRole("link", { name: new RegExp(project.title, "i") });
      expect(link).toHaveAttribute("href", `/gallery/${project.id}`);
    });
  });

  it("renders cover images with alt text", () => {
    render(<ProjectGallery />);
    projects.forEach((project) => {
      expect(screen.getByAltText(project.title)).toBeInTheDocument();
    });
  });
});
