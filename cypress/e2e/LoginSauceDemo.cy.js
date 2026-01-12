import { LoginSDPage } from '../pages/LoginSDPage';
import { InventorySDPage } from '../pages/InventorySDPage';
import { testDataUsersErr } from '../utils/testData';

describe('Validar Login de SauceDemo', () => {

  const loginSDPage = new LoginSDPage();
  const inventorySDPage = new InventorySDPage();  
  const usersErr = testDataUsersErr;


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
    usersErr.forEach(user => {
      cy.visit('https://www.saucedemo.com/')
      loginSDPage.login(user.username, user.password);
      // Validar mensaje de error
      loginSDPage.verifyErrorMessage(user.message);
    });
  });


})