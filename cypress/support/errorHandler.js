export function handleCypressError(promise, customMessage = '') {
    return promise.catch((error) => {
      cy.log(`${customMessage} Error: ${error.message}`);
      cy.screenshot({ capture: 'fullPage' });
      throw error;
    });
  }