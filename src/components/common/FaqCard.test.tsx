import { render, screen } from "@testing-library/react";
import FaqCard from "./FaqCard";

describe("FaqCard", () => {
  test("renders with question and answer", () => {
    render(<FaqCard q="What is this?" a="A test FAQ." />);
    expect(screen.getByText("What is this?")).toBeInTheDocument();
    expect(screen.getByText("A test FAQ.")).toBeInTheDocument();
  });
});
