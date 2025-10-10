describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Page Loading and Navigation", () => {
    it("should load the Home page successfully", () => {
      cy.url().should("eq", Cypress.config().baseUrl + "/");
      cy.title().should("eq", "Home – rockhold.dev");
    });

    it("should have proper page structure", () => {
      cy.get("main").should("exist");
      cy.get("h1").should("exist");
    });
  });

  describe("ProfileCard Integration", () => {
    it("should display profile information correctly", () => {
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
      cy.get('img[alt="Brandon Rockhold profile"]')
        .should("be.visible")
        .and("have.attr", "src", "/assets/profile.jpg");
    });

    it("should display the 'Actively Seeking' badge", () => {
      cy.contains("Actively Seeking")
        .should("be.visible")
        .and("have.class", "bg-yellow-400");
    });

    it("should display the resume button", () => {
      cy.contains("View My Resume")
        .should("be.visible")
        .and("have.attr", "href", "/resume");
    });

    it("should open and close the badge popup", () => {
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
      // Open popup
      cy.contains("Actively Seeking").click();
      cy.contains("My Next Chapter").should("be.visible");

      // Click outside to close
      cy.get("body").click(0, 0);
      cy.contains("My Next Chapter").should("not.exist");
    });
  });

  describe("CtaCard Integration", () => {
    it("should display the CTA card content", () => {
      cy.contains("Empowering Exceptional Teams").should("be.visible");
      cy.contains("engineering leader with extensive experience").should(
        "be.visible"
      );
      cy.contains("care deeply about the humans behind the code").should(
        "be.visible"
      );
    });

    it("should have proper styling", () => {
      cy.contains("Empowering Exceptional Teams")
        .should("have.class", "text-xl")
        .and("have.class", "font-bold");
    });
  });

  describe("Navigation Cards Integration", () => {
    it("should display all navigation cards", () => {
      const navCards = [
        {
          title: "About Me",
          href: "/about",
          description: "Learn more about my values",
        },
        {
          title: "Resume",
          href: "/resume",
          description: "Explore my experience",
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Insights on engineering leadership",
        },
        {
          title: "Reading",
          href: "/reading",
          description: "A collection of books I recommend",
        },
        {
          title: "Mentoring",
          href: "/mentoring",
          description: "Limited free mentoring sessions",
        },
        {
          title: "Contact",
          href: "/contact",
          description: "Reach out via email",
        },
      ];

      navCards.forEach((card) => {
        cy.contains(card.title).should("be.visible");
        cy.contains(card.description).should("be.visible");
        cy.get(`a[href="${card.href}"]`).should("exist");
      });
    });

    it("should have proper section heading", () => {
      cy.contains("Explore the Site")
        .should("be.visible")
        .and("have.class", "text-2xl")
        .and("have.class", "font-semibold");
    });

    it("should navigate to correct pages when clicked", () => {
      // Test a few key navigation links
      cy.contains("About Me").click();
      cy.url().should("include", "/about");

      cy.visit("/");
      cy.contains("Resume").click();
      cy.url().should("include", "/resume");

      cy.visit("/");
      cy.contains("Contact").click();
      cy.url().should("include", "/contact");
    });

    it("should have hover effects on navigation cards", () => {
      cy.get('a[href="/about"]')
        .should("have.class", "group")
        .and("have.class", "hover:bg-gray-700");
    });
  });

  describe("Visual Elements and Styling", () => {
    it("should have proper color scheme", () => {
      cy.get("h1").should("have.class", "text-white");
      cy.get("h2").should("have.class", "text-sky-400");
      cy.contains("Actively Seeking").should("have.class", "bg-yellow-400");
    });

    it("should have proper spacing and layout", () => {
      cy.get("div").should("have.class", "py-8");
      cy.get("div").should("have.class", "space-y-8");
    });

    it("should have proper grid layout for navigation cards", () => {
      cy.get("div").should("have.class", "grid");
      cy.get("div").should("have.class", "gap-6");
      cy.get("div").should("have.class", "sm:grid-cols-2");
      cy.get("div").should("have.class", "lg:grid-cols-3");
    });

    it("should have proper typography hierarchy", () => {
      cy.get("h1").should("have.class", "text-2xl");
      cy.get("h1").should("have.class", "font-bold");
      cy.get("h2").should("have.class", "text-lg");
    });
  });

  describe("Accessibility", () => {
    it("should have proper heading hierarchy", () => {
      cy.get("h1").should("exist");
      cy.get("h2").should("have.length.at.least", 2);
      cy.get("h3").should("have.length.at.least", 6); // Navigation card titles
    });

    it("should have accessible images", () => {
      cy.get('img[alt="Brandon Rockhold profile"]').should("exist");
    });

    it("should have accessible buttons", () => {
      // The close button only exists when popup is open
      cy.contains("Actively Seeking").click();
      cy.get('button[aria-label="Close"]').should("exist");
    });

    it("should have proper contrast and visibility", () => {
      cy.get("h1").should("be.visible");
      cy.get("h2").should("be.visible");
      cy.get("p").should("be.visible");
    });

    it("should have accessible links", () => {
      cy.get('a[href="/resume"]').should("have.attr", "href");
      cy.get('a[href="/about"]').should("have.attr", "href");
      cy.get('a[href="/contact"]').should("have.attr", "href");
    });
  });

  describe("Responsive Design", () => {
    it("should be responsive on mobile viewport", () => {
      cy.viewport(375, 667); // iPhone SE
      cy.get("h1").should("be.visible");
      cy.get("h2").should("be.visible");
      cy.contains("Actively Seeking").should("be.visible");
    });

    it("should be responsive on tablet viewport", () => {
      cy.viewport(768, 1024); // iPad
      cy.get("h1").should("be.visible");
      cy.get("h2").should("be.visible");
      cy.get("div").should("have.class", "sm:grid-cols-2");
    });

    it("should be responsive on desktop viewport", () => {
      cy.viewport(1920, 1080); // Desktop
      cy.get("h1").should("be.visible");
      cy.get("h2").should("be.visible");
      cy.get("div").should("have.class", "lg:grid-cols-3");
    });
  });

  describe("Performance and Loading", () => {
    it("should load within acceptable time", () => {
      cy.visit("/", { timeout: 10000 });
      cy.get("h1").should("be.visible");
    });

    it("should not have any console errors", () => {
      cy.window().then((win) => {
        cy.spy(win.console, "error").as("consoleError");
      });

      cy.visit("/");
      cy.get("@consoleError").should("not.have.been.called");
    });
  });

  describe("Interactive Functionality", () => {
    it("should handle badge popup interactions correctly", () => {
      // Test opening popup
      cy.contains("Actively Seeking").click();
      cy.contains("My Next Chapter").should("be.visible");

      // Test popup content links
      cy.contains("If you're aware of or are hiring for a role").should(
        "be.visible"
      );

      // Test closing with close button
      cy.get('button[aria-label="Close"]').click();
      cy.contains("My Next Chapter").should("not.exist");
    });

    it("should maintain popup state correctly", () => {
      // Open popup
      cy.contains("Actively Seeking").click();
      cy.contains("My Next Chapter").should("be.visible");

      // Close popup using close button
      cy.get('button[aria-label="Close"]').click();
      cy.contains("My Next Chapter").should("not.exist");
    });
  });

  describe("Content Completeness", () => {
    it("should contain all expected role mentions", () => {
      // These roles are in the popup, so we need to open it first
      cy.contains("Actively Seeking").click();

      const roles = [
        "Engineering Manager",
        "Sr Engineering Manager",
        "Engineering Director",
      ];

      roles.forEach((role) => {
        cy.contains(role).should("be.visible");
      });
    });

    it("should contain all expected technology and skill mentions", () => {
      const skills = [
        "engineering",
        "leadership",
        "teams",
        "software",
        "mentoring",
      ];

      skills.forEach((skill) => {
        cy.contains(skill, { matchCase: false }).should("be.visible");
      });
    });

    it("should contain all expected section content", () => {
      // Profile section
      cy.contains("Brandon Rockhold").should("be.visible");
      cy.contains("Engineering Leader").should("be.visible");

      // CTA section
      cy.contains("Empowering Exceptional Teams").should("be.visible");

      // Navigation section
      cy.contains("Explore the Site").should("be.visible");
    });
  });

  describe("Link Functionality", () => {
    it("should have working internal links", () => {
      // Test resume link
      cy.contains("View My Resume").click();
      cy.url().should("include", "/resume");

      // Test navigation card links
      cy.visit("/");
      cy.contains("About Me").click();
      cy.url().should("include", "/about");

      cy.visit("/");
      cy.contains("Contact").click();
      cy.url().should("include", "/contact");
    });

    it("should have proper link styling", () => {
      cy.get('a[href="/resume"]')
        .should("have.class", "bg-sky-500")
        .and("have.class", "hover:bg-sky-600");
    });
  });
});
