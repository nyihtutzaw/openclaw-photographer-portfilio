import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HeroSlider } from "@/components/hero-slider";

// Mock next/image
jest.mock("next/image", () => {
  const MockImage = ({ alt, src }: { alt: string; src: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={src} />
  );
  MockImage.displayName = "MockImage";
  return MockImage;
});

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

describe("HeroSlider", () => {
  it("renders the first slide by default", () => {
    render(<HeroSlider />);
    expect(screen.getByText("Portraits")).toBeInTheDocument();
    expect(screen.getByText("1 / 5")).toBeInTheDocument();
  });

  it("navigates to the next slide on next button click", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<HeroSlider />);

    await user.click(screen.getByRole("button", { name: /next slide/i }));
    expect(screen.getByText("Weddings")).toBeInTheDocument();
    expect(screen.getByText("2 / 5")).toBeInTheDocument();
  });

  it("navigates to the previous slide on prev button click", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<HeroSlider />);

    // prev from slide 1 wraps to slide 5
    await user.click(screen.getByRole("button", { name: /previous slide/i }));
    expect(screen.getByText("5 / 5")).toBeInTheDocument();
  });

  it("navigates via dot indicators", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<HeroSlider />);

    await user.click(screen.getByRole("button", { name: /go to slide 3/i }));
    expect(screen.getByText("Travel")).toBeInTheDocument();
    expect(screen.getByText("3 / 5")).toBeInTheDocument();
  });

  it("renders 5 dot indicator buttons", () => {
    render(<HeroSlider />);
    const dots = screen.getAllByRole("button", { name: /go to slide/i });
    expect(dots).toHaveLength(5);
  });

  it("renders prev and next navigation buttons", () => {
    render(<HeroSlider />);
    expect(screen.getByRole("button", { name: /previous slide/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next slide/i })).toBeInTheDocument();
  });
});
