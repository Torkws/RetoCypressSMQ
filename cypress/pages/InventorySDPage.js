export class InventorySDPage {
    // Selectores de los elementos de la página de inventario
    inventoryContainer = '.inventory_container';
    title = '[data-test="title"]';

    // Métodos
    verifyInventoryPage() {
        cy.get(this.inventoryContainer).should('be.visible');
        cy.get(this.title).should('contain', 'Products');
    }
}