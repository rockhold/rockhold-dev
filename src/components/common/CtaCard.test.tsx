import { render, screen } from "@testing-library/react";
import CtaCard from "./CtaCard";

describe("CtaCard", () => {
  test("renders with title and description", () => {
    render(<CtaCard title="Test Title" description="Test Description" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  test("accepts props", () => {
    const { rerender } = render(
      <CtaCard title="Initial Title" description="Initial Description" />
    );
    expect(screen.getByText("Initial Title")).toBeInTheDocument();

    rerender(
      <CtaCard title="Updated Title" description="Updated Description" />
    );
    expect(screen.getByText("Updated Title")).toBeInTheDocument();
    expect(screen.getByText("Updated Description")).toBeInTheDocument();
  });
});
