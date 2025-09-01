import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Layout", () => {
  test("renders children", () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Layout Content</div>
        </Layout>
      </MemoryRouter>
    );
    expect(screen.getByText("Layout Content")).toBeInTheDocument();
  });
});
