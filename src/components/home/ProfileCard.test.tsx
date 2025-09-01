import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProfileCard from "./ProfileCard";

describe("ProfileCard", () => {
  test("renders with name", () => {
    render(
      <MemoryRouter>
        <ProfileCard
          name="Jane Doe"
          title="Engineer"
          description="Certified Badass"
          imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Converge-JaneDoe.jpg/250px-Converge-JaneDoe.jpg"
          showBadge={true}
          badgeText="Available for Hire"
          showResume={true}
        />
      </MemoryRouter>
    );
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Engineer")).toBeInTheDocument();
    expect(screen.getByText("Certified Badass")).toBeInTheDocument();
    // TODO - Continue testing...
  });
});
