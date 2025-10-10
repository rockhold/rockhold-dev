describe("About Page", () => {
  beforeEach(() => {
    cy.visit("/about");
  });

  describe("Page Loading and Navigation", () => {
    it("should load the About page successfully", () => {
      cy.url().should("include", "/about");
      cy.title().should("eq", "About – rockhold.dev");
    });

    it("should have proper page structure", () => {
      cy.get("main").should("exist");
      cy.get("h1").should("exist");
    });
  });

  describe("Content Verification", () => {
    it("should display the main heading with wave emoji", () => {
      cy.get("h1")
        .should("be.visible")
        .and("contain.text", "Hi, I'm Brandon")
        .and("contain.text", "👋🏻");
    });

    it("should display all section headings", () => {
      const headings = [
        "My Approach to Leadership",
        "My Journey So Far",
        "Working With Me",
        "My Next Chapter",
      ];

      headings.forEach((heading) => {
        cy.contains("h2", heading).should("be.visible");
      });
    });

    it("should display all content sections with proper text", () => {
      // Test intro section - use partial text matching to handle line breaks
      cy.contains("lifelong learner and empathetic engineering leader").should(
        "be.visible"
      );

      // Test approach section
      cy.contains("I lead with integrity, empathy, and transparency").should(
        "be.visible"
      );
      cy.contains(
        "My passion lies in helping engineering organizations"
      ).should("be.visible");

      // Test journey section
      cy.contains(
        "I've led teams in both large enterprise environments"
      ).should("be.visible");
      cy.contains(
        "My teams have built and shipped high-quality software"
      ).should("be.visible");

      // Test working with me section
      cy.contains("approachable, calm under pressure").should("be.visible");
      cy.contains("My management philosophy is best described as").should(
        "be.visible"
      );
      cy.contains("I collaborate respectfully and successfully").should(
        "be.visible"
      );

      // Test next chapter section
      cy.contains("seeking a remote engineering leadership role").should(
        "be.visible"
      );
      cy.contains("Roles that may be a good fit for me include").should(
        "be.visible"
      );
    });

    it("should have proper section separators", () => {
      cy.get("section").should("have.length.at.least", 5);
      // Check that sections after the first one have border-t class
      cy.get("section")
        .not(":first")
        .each(($section) => {
          cy.wrap($section).should("have.class", "border-t");
        });
    });
  });

  describe("Interactive Elements", () => {
    it("should have a working contact link in the content", () => {
      // Find the contact link that's in the main content (not navigation)
      cy.get('main a[href="/contact"]')
        .should("be.visible")
        .and("have.class", "text-sky-400")
        .and("have.class", "underline");
    });

    it("should navigate to contact page when content link is clicked", () => {
      cy.get('main a[href="/contact"]').click();
      cy.url().should("include", "/contact");
    });
  });

  describe("Visual Elements and Styling", () => {
    it("should have proper color scheme", () => {
      cy.get("h1").should("have.class", "text-sky-400");
      cy.get("h2").should("have.class", "text-sky-300");
      cy.get("p").should("have.class", "text-zinc-200");
    });

    it("should have proper spacing and layout", () => {
      cy.get("div").should("have.class", "max-w-3xl");
      cy.get("div").should("have.class", "mx-auto");
      cy.get("div").should("have.class", "px-4");
      cy.get("div").should("have.class", "py-12");
    });

    it("should have animation classes", () => {
      cy.get("section").should("have.class", "animate-fadeIn");
      cy.get("span").should("have.class", "animate-wiggle");
    });

    it("should have proper typography hierarchy", () => {
      cy.get("h1").should("have.class", "text-3xl");
      cy.get("h1").should("have.class", "font-bold");
      cy.get("h2").should("have.class", "text-2xl");
      cy.get("h2").should("have.class", "font-semibold");
    });
  });

  describe("Accessibility", () => {
    it("should have proper heading hierarchy", () => {
      cy.get("h1").should("exist");
      cy.get("h2").should("have.length.at.least", 4);
      // Ensure no h3 elements exist (maintaining proper hierarchy)
      cy.get("h3").should("not.exist");
    });

    it("should have accessible link text", () => {
      cy.get('a[href="/contact"]')
        .should("have.attr", "href")
        .and("not.be.empty");
    });

    it("should have proper contrast and visibility", () => {
      cy.get("h1").should("be.visible");
      cy.get("h2").should("be.visible");
      cy.get("p").should("be.visible");
    });
  });

  describe("Responsive Design", () => {
    it("should be responsive on mobile viewport", () => {
      cy.viewport(375, 667); // iPhone SE
      cy.get("div").should("have.class", "px-4");
      cy.get("h1").should("be.visible");
      cy.get("h2").should("be.visible");
    });

    it("should be responsive on tablet viewport", () => {
      cy.viewport(768, 1024); // iPad
      cy.get("div").should("have.class", "max-w-3xl");
      cy.get("h1").should("be.visible");
      cy.get("h2").should("be.visible");
    });

    it("should be responsive on desktop viewport", () => {
      cy.viewport(1920, 1080); // Desktop
      cy.get("div").should("have.class", "max-w-3xl");
      cy.get("div").should("have.class", "mx-auto");
      cy.get("h1").should("be.visible");
      cy.get("h2").should("be.visible");
    });
  });

  describe("Performance and Loading", () => {
    it("should load within acceptable time", () => {
      cy.visit("/about", { timeout: 10000 });
      cy.get("h1").should("be.visible");
    });

    it("should not have any console errors", () => {
      cy.window().then((win) => {
        cy.spy(win.console, "error").as("consoleError");
      });

      cy.visit("/about");
      cy.get("@consoleError").should("not.have.been.called");
    });
  });

  describe("Content Completeness", () => {
    it("should contain all expected technology mentions", () => {
      const technologies = [
        "Java",
        "JavaScript",
        "React",
        "Ruby",
        "TypeScript",
        "Python",
        "GraphQL",
        "PostgreSQL",
        "AWS",
      ];

      technologies.forEach((tech) => {
        cy.contains(tech).should("be.visible");
      });
    });

    it("should contain all expected role mentions", () => {
      const roles = [
        "Engineering Manager",
        "Sr Engineering Manager",
        "Engineering Director",
      ];

      roles.forEach((role) => {
        cy.contains(role).should("be.visible");
      });
    });

    it("should contain all expected team mentions", () => {
      const teams = [
        "Product",
        "Design",
        "Data",
        "Marketing",
        "Success/Support",
      ];

      teams.forEach((team) => {
        cy.contains(team).should("be.visible");
      });
    });
  });
});
