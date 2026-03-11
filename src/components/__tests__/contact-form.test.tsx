import { render, screen } from "@testing-library/react";

import { ContactForm } from "@/components/contact-form";

describe("ContactForm", () => {
  it("renders the contact form fields and call to action", () => {
    render(<ContactForm />);

    expect(
      screen.getByRole("heading", {
        name: /let’s create something memorable/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/inquiry type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project details/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send inquiry/i }),
    ).toBeInTheDocument();
  });
});
