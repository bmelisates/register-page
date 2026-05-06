import { errorMessages } from "../../src/components/Register";

describe("Register Page", () => {
  beforeEach(() => {
    //Arrange
    cy.visit("http://localhost:5173/"); //cypress.config.js baseUrl'e asıl linki ekleyebilirmişiz.
  });
  describe("Error Messages", () => {
    it("name input throws error for 2 chars", () => {
      //Act
      cy.get('[data-cy="ad-input"]').type("em");
      //Assert
      cy.contains(errorMessages.ad);
    });

    it("Surname input throws error for 2 chars", () => {
      //Act
      cy.get('[data-cy="soyad-input"]').type("em");
      //Assert
      cy.contains(errorMessages.soyad);
    });

    it("Email input throws error for 2 chars", () => {
      //Arrange

      //Act
      cy.get('[data-cy="email-input"]').type("em");
      //Assert
      cy.contains(errorMessages.email);
    });

    it("Password input throws error for 2 chars", () => {
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
      //Assert
      cy.contains(errorMessages.password);
    });

    it("Button is disabled for unvalidated inputs.", () => {
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
      //Assert
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    });
  });

  describe("Form input validated", () => {
    it("Button enabled for validated inputs", () => {
      //Act
      cy.get('[data-cy="ad-input"]').type("melis");
      cy.get('[data-cy="soyad-input"]').type("ates");
      cy.get('[data-cy="email-input"]').type("melisates@melis.com");
      cy.get('[data-cy="password-input"]').type("Abcde123!!!");
      //Assert
      cy.get('[data-cy="submit-button"]').should("not.be.disabled");
    });
  });
});

// it.skip dersek o testi atlar
// it.only dersek sadece o test(ler) çalışır
