/// <reference types="cypress" />
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "@cypress/react";
import NavCard from "../../../../src/components/home/NavCard";

// Wrapper component for testing with router
const NavCardWithRouter = (props: React.ComponentProps<typeof NavCard>) => (
  <BrowserRouter>
    <NavCard {...props} />
  </BrowserRouter>
);

describe("NavCard Component", () => {
  const defaultProps = {
    title: "About Me",
    href: "/about",
    description:
      "Learn more about my values, leadership style, and what drives me.",
  };

  it("should render with title, description, and href", () => {
    mount(<NavCardWithRouter {...defaultProps} />);

    cy.contains("About Me").should("be.visible");
    cy.contains("Learn more about my values").should("be.visible");
    cy.get('a[href="/about"]').should("exist");
  });

  it("should render with different props", () => {
    const props = {
      title: "Resume",
      href: "/resume",
      description: "Explore my experience, skills, and recent work.",
    };

    mount(<NavCardWithRouter {...props} />);

    cy.contains("Resume").should("be.visible");
    cy.contains("Explore my experience").should("be.visible");
    cy.get('a[href="/resume"]').should("exist");
  });

  it("should have proper styling classes", () => {
    mount(<NavCardWithRouter {...defaultProps} />);

    cy.get('a[href="/about"]')
      .should("have.class", "group")
      .and("have.class", "bg-gray-800")
      .and("have.class", "hover:bg-gray-700")
      .and("have.class", "transition")
      .and("have.class", "rounded-lg")
      .and("have.class", "p-6")
      .and("have.class", "border")
      .and("have.class", "border-gray-700");
  });

  it("should have proper title styling", () => {
    mount(<NavCardWithRouter {...defaultProps} />);

    cy.get('a[href="/about"]').within(() => {
      cy.get("h3")
        .should("have.class", "text-xl")
        .and("have.class", "font-medium")
        .and("have.class", "mb-2")
        .and("have.class", "group-hover:text-yellow-400")
        .and("have.class", "transition");
    });
  });

  it("should have proper description styling", () => {
    mount(<NavCardWithRouter {...defaultProps} />);

    cy.get("p")
      .should("have.class", "text-gray-400")
      .and("have.class", "group-hover:text-gray-200")
      .and("have.class", "transition");
  });

  it("should accept custom className", () => {
    mount(<NavCardWithRouter {...defaultProps} className="custom-class" />);

    cy.get('a[href="/about"]').should("have.class", "custom-class");
  });

  it("should handle hover effects", () => {
    mount(<NavCardWithRouter {...defaultProps} />);

    // Test hover state classes are present
    cy.get('a[href="/about"]')
      .should("have.class", "group")
      .and("have.class", "hover:bg-gray-700");

    cy.get('a[href="/about"]').within(() => {
      cy.get("h3").should("have.class", "group-hover:text-yellow-400");
      cy.get("p").should("have.class", "group-hover:text-gray-200");
    });
  });

  it("should be accessible", () => {
    mount(<NavCardWithRouter {...defaultProps} />);

    // Check that the link has proper href
    cy.get('a[href="/about"]').should("have.attr", "href", "/about");

    // Check that the link contains meaningful text
    cy.get('a[href="/about"]').should("contain.text", "About Me");
    cy.get('a[href="/about"]').should(
      "contain.text",
      "Learn more about my values"
    );
  });

  it("should render with minimal props", () => {
    const minimalProps = {
      title: "Test",
      href: "/test",
      description: "Test description",
    };

    mount(<NavCardWithRouter {...minimalProps} />);

    cy.contains("Test").should("be.visible");
    cy.contains("Test description").should("be.visible");
    cy.get('a[href="/test"]').should("exist");
  });

  it("should handle long descriptions", () => {
    const longDescriptionProps = {
      title: "Long Description Test",
      href: "/long-test",
      description:
        "This is a very long description that should still be displayed properly and not break the layout or styling of the NavCard component. It should wrap nicely and maintain the proper spacing and visual hierarchy.",
    };

    mount(<NavCardWithRouter {...longDescriptionProps} />);

    cy.contains("Long Description Test").should("be.visible");
    cy.contains("This is a very long description").should("be.visible");
    cy.get('a[href="/long-test"]').should("exist");
  });

  it("should handle special characters in title and description", () => {
    const specialCharsProps = {
      title: "Test & Special Characters!",
      href: "/special",
      description: "Description with special chars: @#$%^&*()",
    };

    mount(<NavCardWithRouter {...specialCharsProps} />);

    cy.contains("Test & Special Characters!").should("be.visible");
    cy.contains("Description with special chars").should("be.visible");
    cy.get('a[href="/special"]').should("exist");
  });

  it("should maintain proper structure", () => {
    mount(<NavCardWithRouter {...defaultProps} />);

    // Check that the structure is correct
    cy.get('a[href="/about"]').within(() => {
      cy.get("h3").should("contain.text", "About Me");
      cy.get("p").should("contain.text", "Learn more about my values");
    });
  });
});
