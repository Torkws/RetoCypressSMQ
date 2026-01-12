export class LoginSDPage {
    // Selectores de los elementos de la página de login
    usernameInput = '#user-name';
    passwordInput = '#password';
    loginButton = '#login-button';
    errorMessage = '[data-test="error"]';

    // Métodos
    fillInput(selector, text) {
        if (text === '') {
            cy.get(selector).clear();
        } else {
            cy.get(selector).type(text);
        }
    }

    click(selector) {
        cy.get(selector).click();
    }

    login(username, password) {
        this.fillInput(this.usernameInput, username);
        this.fillInput(this.passwordInput, password);
        this.click(this.loginButton);
    }

    verifyErrorMessage(message) {
        cy.get(this.errorMessage).should('contain', message);
    }

}