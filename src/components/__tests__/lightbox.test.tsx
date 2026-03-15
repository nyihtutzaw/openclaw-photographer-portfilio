import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Lightbox } from "@/components/lightbox";
import type { ProjectImage } from "@/types/project";

// Mock next/image — strip Next.js-only props that are invalid on <img>
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, priority: _p, width: _w, height: _h, ...rest }: { src: string; alt: string; priority?: boolean; width?: number; height?: number; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...rest} />
  ),
}));

const mockImages: ProjectImage[] = [
  { id: 1, src: "https://example.com/img1.jpg", alt: "Image one", caption: "Caption one" },
  { id: 2, src: "https://example.com/img2.jpg", alt: "Image two", caption: "Caption two" },
  { id: 3, src: "https://example.com/img3.jpg", alt: "Image three" },
];

describe("Lightbox", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    // Immediately invoke rAF callback to avoid act() warnings from mount animation
    jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      cb(0);
      return 0;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.runAllTimers();
    jest.useRealTimers();
  });

  it("renders the dialog with correct aria attributes", () => {
    const onClose = jest.fn();
    render(<Lightbox images={mockImages} initialIndex={0} onClose={onClose} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("displays the current image", () => {
    const onClose = jest.fn();
    render(<Lightbox images={mockImages} initialIndex={0} onClose={onClose} />);
    expect(screen.getByAltText("Image one")).toBeInTheDocument();
  });

  it("shows the image counter", () => {
    const onClose = jest.fn();
    render(<Lightbox images={mockImages} initialIndex={0} onClose={onClose} />);
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  it("shows caption when available", () => {
    const onClose = jest.fn();
    render(<Lightbox images={mockImages} initialIndex={0} onClose={onClose} />);
    expect(screen.getByText("Caption one")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(<Lightbox images={mockImages} initialIndex={0} onClose={onClose} />);
    fireEvent.click(screen.getByRole("button", { name: /close image viewer/i }));
    act(() => { jest.runAllTimers(); });
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onClose when Escape key is pressed", () => {
    const onClose = jest.fn();
    render(<Lightbox images={mockImages} initialIndex={0} onClose={onClose} />);
    fireEvent.keyDown(window, { key: "Escape" });
    act(() => { jest.runAllTimers(); });
    expect(onClose).toHaveBeenCalled();
  });

  it("navigates to next image on ArrowRight", () => {
    const onClose = jest.fn();
    render(<Lightbox images={mockImages} initialIndex={0} onClose={onClose} />);
    fireEvent.keyDown(window, { key: "ArrowRight" });
    act(() => { jest.runAllTimers(); });
    expect(screen.getByText("2 / 3")).toBeInTheDocument();
  });

  it("navigates to previous image on ArrowLeft", () => {
    const onClose = jest.fn();
    render(<Lightbox images={mockImages} initialIndex={1} onClose={onClose} />);
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    act(() => { jest.runAllTimers(); });
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  it("renders prev and next buttons", () => {
    const onClose = jest.fn();
    render(<Lightbox images={mockImages} initialIndex={0} onClose={onClose} />);
    expect(screen.getByRole("button", { name: /previous image/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next image/i })).toBeInTheDocument();
  });

  it("renders dot indicators for each image", () => {
    const onClose = jest.fn();
    render(<Lightbox images={mockImages} initialIndex={0} onClose={onClose} />);
    mockImages.forEach((_, i) => {
      expect(screen.getByRole("button", { name: `Go to image ${i + 1}` })).toBeInTheDocument();
    });
  });

  it("closes when backdrop is clicked", () => {
    const onClose = jest.fn();
    render(<Lightbox images={mockImages} initialIndex={0} onClose={onClose} />);
    const backdrop = document.querySelector('[aria-hidden="true"]');
    if (backdrop) fireEvent.click(backdrop);
    act(() => { jest.runAllTimers(); });
    expect(onClose).toHaveBeenCalled();
  });
});
