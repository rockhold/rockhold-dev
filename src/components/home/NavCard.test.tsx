import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavCard from "./NavCard";

describe("NavCard", () => {
  test("renders with label", () => {
    render(
      <MemoryRouter>
        <NavCard
          title="Test Title"
          description="Test Description"
          href="rockhold.dev"
          className="test-class"
        />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    // TODO - Continue testing...
  });
});
