/// <reference types="cypress" />
import React from "react";
import { mount } from "@cypress/react";
import CtaCard from "../../../../src/components/common/CtaCard";

describe("CtaCard Component", () => {
  const defaultProps = {
    title: "Empowering Exceptional Teams",
    description:
      "I'm an engineering leader with extensive experience building high-performing teams and shipping impactful software. I care deeply about the humans behind the code, and I foster healthy, inclusive, and high-trust engineering cultures. I bring clarity, alignment, and momentum to cross-functional product work, and I believe in growing people, not just delivering features.",
  };

  it("should render with title and description", () => {
    mount(<CtaCard {...defaultProps} />);

    cy.contains("Empowering Exceptional Teams").should("be.visible");
    cy.contains("engineering leader with extensive experience").should(
      "be.visible"
    );
    cy.contains("care deeply about the humans behind the code").should(
      "be.visible"
    );
  });

  it("should render with only title", () => {
    mount(<CtaCard title="Test Title" />);

    cy.contains("Test Title").should("be.visible");
    cy.get("p").should("not.exist");
  });

  it("should render with only description", () => {
    mount(<CtaCard description="Test description" />);

    cy.contains("Test description").should("be.visible");
    cy.get("h2").should("not.exist");
  });

  it("should render with button when provided", () => {
    const buttonProps = {
      href: "https://example.com",
      label: "Learn More",
    };

    mount(<CtaCard {...defaultProps} button={buttonProps} />);

    cy.get('a[href="https://example.com"]')
      .should("be.visible")
      .and("contain.text", "Learn More");
  });

  it("should render with children when provided", () => {
    mount(
      <CtaCard>
        <div data-testid="custom-content">Custom content</div>
      </CtaCard>
    );

    cy.get('[data-testid="custom-content"]')
      .should("be.visible")
      .and("contain.text", "Custom content");
  });

  it("should have proper styling classes", () => {
    mount(<CtaCard {...defaultProps} />);

    // Check main container styling
    cy.get("div").should("have.class", "bg-gray-800");
    cy.get("div").should("have.class", "text-white");
    cy.get("div").should("have.class", "p-6");
    cy.get("div").should("have.class", "rounded-xl");
    cy.get("div").should("have.class", "shadow-lg");
  });

  it("should have proper title styling", () => {
    mount(<CtaCard {...defaultProps} />);

    cy.contains("Empowering Exceptional Teams")
      .should("have.class", "text-xl")
      .and("have.class", "sm:text-2xl")
      .and("have.class", "font-bold")
      .and("have.class", "mb-2")
      .and("have.class", "text-center");
  });

  it("should have proper description styling", () => {
    mount(<CtaCard {...defaultProps} />);

    cy.get("p")
      .should("have.class", "text-gray-300")
      .and("have.class", "text-center")
      .and("have.class", "max-w-3xl")
      .and("have.class", "mx-auto");
  });

  it("should have proper button styling when provided", () => {
    const buttonProps = {
      href: "https://example.com",
      label: "Learn More",
    };

    mount(<CtaCard {...defaultProps} button={buttonProps} />);

    cy.get('a[href="https://example.com"]')
      .should("have.class", "inline-flex")
      .and("have.class", "items-center")
      .and("have.class", "rounded-lg")
      .and("have.class", "bg-blue-600")
      .and("have.class", "px-4")
      .and("have.class", "py-2")
      .and("have.class", "text-sm")
      .and("have.class", "font-medium")
      .and("have.class", "text-white")
      .and("have.class", "shadow")
      .and("have.class", "hover:bg-blue-500");
  });

  it("should have proper button accessibility attributes", () => {
    const buttonProps = {
      href: "https://example.com",
      label: "Learn More",
    };

    mount(<CtaCard {...defaultProps} button={buttonProps} />);

    cy.get('a[href="https://example.com"]')
      .should("have.attr", "target", "_blank")
      .and("have.attr", "rel", "noreferrer noopener");
  });

  it("should handle empty props gracefully", () => {
    mount(<CtaCard />);

    // Should render without errors
    cy.get("div").should("exist");
  });

  it("should render with all props combined", () => {
    const buttonProps = {
      href: "https://example.com",
      label: "Learn More",
    };

    mount(
      <CtaCard
        title="Test Title"
        description="Test description"
        button={buttonProps}
      >
        <div data-testid="child">Child content</div>
      </CtaCard>
    );

    cy.contains("Test Title").should("be.visible");
    cy.contains("Test description").should("be.visible");
    cy.contains("Learn More").should("be.visible");
    cy.get('[data-testid="child"]').should("be.visible");
  });
});
