import { render, screen } from "@testing-library/react";

import { PhotoGallery } from "@/components/photo-gallery";

describe("PhotoGallery", () => {
  it("renders all gallery cards", () => {
    render(<PhotoGallery />);

    expect(
      screen.getByRole("heading", {
        name: /selected frames from recent stories/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/golden hour portraits/i)).toBeInTheDocument();
    expect(screen.getByText(/cliffside elopement/i)).toBeInTheDocument();
    expect(screen.getByText(/quiet studio session/i)).toBeInTheDocument();
  });
});
