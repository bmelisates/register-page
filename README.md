# Registration Form

A React registration form with client-side input validation, API submission, and Cypress end-to-end tests. The interface and validation messages are in Turkish.

## Features

- First name and surname validation: at least 3 characters after trimming whitespace.
- Email format validation.
- Password validation: at least 8 characters, including uppercase and lowercase letters, a number, and a special character from `@$!%*?&`. Only letters, numbers, and these special characters are accepted.
- Inline validation messages and a submit button that stays disabled until all fields are valid.
- Form reset and display of the returned ID after a successful submission.

## Technologies

- React and JavaScript
- Bootstrap and Reactstrap
- Axios
- Vite (development/build tool)
- Cypress (end-to-end testing)
- ESLint

## Getting Started

Install Node.js and npm, then run:

```bash
git clone https://github.com/bmelisates/register-page.git
cd register-page
npm install
npm run dev
```

Open the local URL printed by Vite.

## Running Tests

Keep the development server running at `http://localhost:5173`, which the tests use. In another terminal, run the registration tests:

```bash
npx cypress run --spec "cypress/e2e/register.cy.js"
```

For the interactive Cypress runner:

```bash
npx cypress open
```

The registration suite covers invalid inputs, submit-button state, and the three-character boundary for first names and surnames. Cypress example specs are also included in the repository; the command above runs only the project-specific registration suite.

## Other Commands

```bash
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Demo API

The form sends a POST request to `https://jsonplaceholder.typicode.com/posts`. This is a demonstration of form submission, not a real account registration or authentication system. Use dummy values when trying the form, since the entered fields are sent to this external demo service.
