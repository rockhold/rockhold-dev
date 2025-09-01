import { render, screen } from "@testing-library/react";
import InfoCard from "./InfoCard";

describe("InfoCard", () => {
  test("renders with title and children", () => {
    render(<InfoCard title="Info Title">Some info here.</InfoCard>);
    expect(screen.getByText("Info Title")).toBeInTheDocument();
    expect(screen.getByText("Some info here.")).toBeInTheDocument();
  });
});
