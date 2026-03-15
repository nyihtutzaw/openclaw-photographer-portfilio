import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/navbar";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// Mock next/link
jest.mock("next/link", () => {
  const MockLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

// Mock ThemeToggle
jest.mock("@/components/theme-toggle", () => ({
  ThemeToggle: () => <button>Toggle Theme</button>,
}));

describe("Navbar", () => {
  it("renders the studio name as a home link", () => {
    render(<Navbar />);
    const homeLink = screen.getByRole("link", { name: /aria noor studio/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    expect(screen.queryByRole("link", { name: /^about$/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /gallery/i })).toHaveAttribute("href", "/gallery");
    expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute("href", "/contact");
  });

  it("renders the theme toggle", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: /toggle theme/i })).toBeInTheDocument();
  });
});
