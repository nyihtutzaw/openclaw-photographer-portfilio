import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ThemeToggle } from "@/components/theme-toggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.className = "";
    delete document.documentElement.dataset.theme;
  });

  it("renders light mode by default and toggles to dark mode", async () => {
    const user = userEvent.setup();

    render(<ThemeToggle />);

    const button = await screen.findByRole("button", {
      name: /toggle color theme/i,
    });

    expect(button).toHaveTextContent(/dark mode/i);
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(document.documentElement).not.toHaveClass("dark");

    await user.click(button);

    expect(button).toHaveTextContent(/light mode/i);
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(document.documentElement).toHaveClass("dark");
    expect(window.localStorage.getItem("portfolio-theme")).toBe("dark");
  });

  it("hydrates from saved localStorage theme", async () => {
    window.localStorage.setItem("portfolio-theme", "dark");

    render(<ThemeToggle />);

    const button = await screen.findByRole("button", {
      name: /toggle color theme/i,
    });

    expect(button).toHaveTextContent(/light mode/i);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(document.documentElement).toHaveClass("dark");
    expect(button).toHaveAttribute("aria-pressed", "true");
  });
});
