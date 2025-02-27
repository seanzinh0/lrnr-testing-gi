describe('Homepage', () => {
    // before each test navigate to home page
    beforeEach(() => {
        cy.visit('http://localhost:5173');
    });

    // check to see if logo is displayed
    it('should display the logo', () => {
        cy.get('img[alt="logo"]').should('be.visible');
    });

    // check if message is displayed correctly on the home page
    it('should display the correct message', () => {
        cy.contains('Your guided path to programming enlightenment').should('be.visible');
    });

    // check if the button exists and navigates to quiz generator page
    it('should have a "BEGIN JOURNEY" button that navigates to the quiz generator page', () => {
        cy.contains('BEGIN JOURNEY').should('be.visible');
        cy.contains('BEGIN JOURNEY').click();
        cy.url().should('include', '/quizgenerator');
    });

    // test to see if personalized quizzes section is visible
    it('should render the "Personalized Quizzes" section', () => {
        cy.contains('Personalized Quizzes').should('be.visible');

        cy.contains('Greetings, young padawan').should('be.visible');
    });

    // test to see if rewarding section is visible
    it('should render the "Rewarding" section', () => {
        cy.contains('Rewarding').should('be.visible');

        cy.contains('Our app is designed to be both challenging and rewarding').should('be.visible');
    });

    // checks if personal sme section is visible
    it('should render the "Personal SME" section', () => {
        cy.contains('Personal SME').should('be.visible');

        cy.contains('Welcome to the path of knowledge').should('be.visible');
    });

    // checks if all three sections are rendered and visible
    it('should render all three sections', () => {
        cy.get('h2').should('have.length', 3);
    });
});