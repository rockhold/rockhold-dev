import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

describe("ScrollToTop", () => {
  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <ScrollToTop />
      </MemoryRouter>
    );
    // TODO Properly test this...
  });
});
