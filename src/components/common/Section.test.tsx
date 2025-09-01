import { render, screen } from "@testing-library/react";
import Section from "./Section";

describe("Section", () => {
  test("renders children", () => {
    render(
      <Section>
        <div>Section Content</div>
      </Section>
    );
    expect(screen.getByText("Section Content")).toBeInTheDocument();
  });
});
