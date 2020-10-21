import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^Opening FCI3$/, () => {
  cy.visit('http://localhost:3000')
});

When(/^I open FCI3 app$/, () => {
  cy.get('#root')
});

Then(/^I see app logo$/, () => {
  cy.get(`[alt="Logo App"]`);
});