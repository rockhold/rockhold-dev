/// <reference types="cypress" />
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "@cypress/react";
import ProfileCard from "../../../../src/components/home/ProfileCard";

// Wrapper component for testing with router
const ProfileCardWithRouter = (
  props: React.ComponentProps<typeof ProfileCard>
) => (
  <BrowserRouter>
    <ProfileCard {...props} />
  </BrowserRouter>
);

describe("ProfileCard Component", () => {
  const defaultProps = {
    name: "Brandon Rockhold",
    title: "Engineering Leader | Manager and Mentor",
    description:
      "I help teams grow, deliver value, and thrive by building great software and stronger human connections. Currently seeking new opportunities.",
    imageUrl: "/assets/profile.jpg",
    showBadge: true,
    badgeText: "Actively Seeking",
    showResume: true,
  };

  it("should render profile information correctly", () => {
    mount(<ProfileCardWithRouter {...defaultProps} />);

    cy.get("h1").should("contain.text", "Brandon Rockhold");
    cy.get("h2").should(
      "contain.text",
      "Engineering Leader | Manager and Mentor"
    );
    cy.contains("I help teams grow, deliver value, and thrive").should(
      "be.visible"
    );
  });

  it("should display profile image", () => {
    mount(<ProfileCardWithRouter {...defaultProps} />);

    cy.get('img[alt="Brandon Rockhold profile"]')
      .should("be.visible")
      .and("have.attr", "src", "/assets/profile.jpg");
  });

  it("should display the badge when showBadge is true", () => {
    mount(<ProfileCardWithRouter {...defaultProps} />);

    cy.contains("Actively Seeking")
      .should("be.visible")
      .and("have.class", "bg-yellow-400");
  });

  it("should not display the badge when showBadge is false", () => {
    mount(<ProfileCardWithRouter {...defaultProps} showBadge={false} />);

    cy.contains("Actively Seeking").should("not.exist");
  });

  it("should display custom badge text", () => {
    mount(
      <ProfileCardWithRouter {...defaultProps} badgeText="Available Now" />
    );

    cy.contains("Available Now").should("be.visible");
  });

  it("should display the resume button when showResume is true", () => {
    mount(<ProfileCardWithRouter {...defaultProps} />);

    cy.contains("View My Resume")
      .should("be.visible")
      .and("have.attr", "href", "/resume");
  });

  it("should not display the resume button when showResume is false", () => {
    mount(<ProfileCardWithRouter {...defaultProps} showResume={false} />);

    cy.contains("View My Resume").should("not.exist");
  });

  it("should open and close the badge popup", () => {
    mount(<ProfileCardWithRouter {...defaultProps} />);

    // Click the badge to open popup
    cy.contains("Actively Seeking").click();

    // Check popup content
    cy.contains("My Next Chapter").should("be.visible");
    cy.contains("seeking a remote engineering leadership role").should(
      "be.visible"
    );
    cy.contains(
      "Engineering Manager, Sr Engineering Manager, and Engineering Director"
    ).should("be.visible");
    cy.contains("If you're aware of or are hiring for a role").should(
      "be.visible"
    );

    // Close popup
    cy.get('button[aria-label="Close"]').click();
    cy.contains("My Next Chapter").should("not.exist");
  });

  it("should close popup when clicking outside", () => {
    mount(<ProfileCardWithRouter {...defaultProps} />);

    // Open popup
    cy.contains("Actively Seeking").click();
    cy.contains("My Next Chapter").should("be.visible");

    // Click outside to close
    cy.get("body").click(0, 0);
    cy.contains("My Next Chapter").should("not.exist");
  });

  it("should have proper styling classes", () => {
    mount(<ProfileCardWithRouter {...defaultProps} />);

    // Check main container styling
    cy.get("div").should("have.class", "bg-gray-800");
    cy.get("div").should("have.class", "rounded-xl");
    cy.get("div").should("have.class", "shadow-lg");

    // Check image styling
    cy.get("img").should("have.class", "rounded-full");
    cy.get("img").should("have.class", "border-4");

    // Check badge styling
    cy.contains("Actively Seeking").should("have.class", "bg-yellow-400");
    cy.contains("Actively Seeking").should("have.class", "text-black");

    // Check resume button styling
    cy.contains("View My Resume").should("have.class", "bg-sky-500");
    cy.contains("View My Resume").should("have.class", "hover:bg-sky-600");
  });

  it("should have proper accessibility attributes", () => {
    mount(<ProfileCardWithRouter {...defaultProps} />);

    // Check image alt text
    cy.get('img[alt="Brandon Rockhold profile"]').should("exist");

    // Check close button accessibility
    cy.contains("Actively Seeking").click();
    cy.get('button[aria-label="Close"]').should("exist");
  });

  it("should handle popup state correctly", () => {
    mount(<ProfileCardWithRouter {...defaultProps} />);

    // Open popup
    cy.contains("Actively Seeking").click();
    cy.contains("My Next Chapter").should("be.visible");

    // Close popup using close button
    cy.get('button[aria-label="Close"]').click();
    cy.contains("My Next Chapter").should("not.exist");
  });

  it("should display popup content correctly", () => {
    mount(<ProfileCardWithRouter {...defaultProps} />);

    // Open popup
    cy.contains("Actively Seeking").click();

    // Check all popup content
    cy.contains("My Next Chapter").should("be.visible");
    cy.contains("seeking a remote engineering leadership role").should(
      "be.visible"
    );
    cy.contains("Roles that may be a good fit for me include").should(
      "be.visible"
    );
    cy.contains(
      "Engineering Manager, Sr Engineering Manager, and Engineering Director"
    ).should("be.visible");
    cy.contains("If you're aware of or are hiring for a role").should(
      "be.visible"
    );
  });

  it("should have proper responsive classes", () => {
    mount(<ProfileCardWithRouter {...defaultProps} />);

    // Check responsive flex classes
    cy.get("div").should("have.class", "flex-col");
    cy.get("div").should("have.class", "sm:flex-row");

    // Check responsive text classes
    cy.get("h1").should("have.class", "text-2xl");
    cy.get("h1").should("have.class", "sm:text-3xl");

    // Check responsive image classes
    cy.get("img").should("have.class", "w-32");
    cy.get("img").should("have.class", "sm:w-40");
  });
});
