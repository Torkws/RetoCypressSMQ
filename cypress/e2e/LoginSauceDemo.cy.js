import { LoginSDPage } from '../pages/LoginSDPage';
import { InventorySDPage } from '../pages/InventorySDPage';

describe('Validar Login de SauceDemo', () => {

  const loginSDPage = new LoginSDPage();
  const inventorySDPage = new InventorySDPage();  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  });

  it('Validar login exitoso con inputs válidos', () => {
    loginSDPage.login('standard_user', 'secret_sauce');
    // Validar que el login fue exitoso
    cy.url().should('include', '/inventory');
    inventorySDPage.verifyInventoryPage();
  });

  it('Validar autenticación fallida con inputs inválidos', () => {
    loginSDPage.login('invalid_user', 'secret_sauce');
    // Validar mensaje de error
    loginSDPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });


})