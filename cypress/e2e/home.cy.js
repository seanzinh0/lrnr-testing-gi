describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173'); // Visit the homepage
    });

    it('should display the logo', () => {
        cy.get('img[alt="logo"]').should('be.visible'); // Check if the logo is visible
    });

    it('should display the correct tagline', () => {
        cy.contains('Your guided path to programming enlightenment').should('be.visible'); // Check if the tagline is correct
    });

    it('should have a "BEGIN JOURNEY" button that navigates to the quiz generator page', () => {
        cy.contains('BEGIN JOURNEY').should('be.visible'); // Check if the button is visible
        cy.contains('BEGIN JOURNEY').click(); // Click the button
        cy.url().should('include', '/quizgenerator'); // Check if the URL changes to the quiz generator page
    });

    it('should render the "Personalized Quizzes" section', () => {
        // Check for the heading
        cy.contains('Personalized Quizzes').should('be.visible');

        // Check for the paragraph
        cy.contains('Greetings, young padawan').should('be.visible');
    });

    it('should render the "Rewarding" section', () => {
        // Check for the heading
        cy.contains('Rewarding').should('be.visible');

        // Check for the paragraph
        cy.contains('Our app is designed to be both challenging and rewarding').should('be.visible');
    });

    it('should render the "Personal SME" section', () => {
        // Check for the heading
        cy.contains('Personal SME').should('be.visible');

        // Check for the paragraph
        cy.contains('Welcome to the path of knowledge').should('be.visible');
    });

    it('should render all three sections', () => {
        // Check for all three headings
        cy.get('h2').should('have.length', 3);
    });
});