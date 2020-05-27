import { getGreeting, getTimeInput } from '../support/app.po';

describe('Hello Nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to stocks!');
  });

  it('fills period field', () => {
    getTimeInput()
      .click()
      .get('mat-option')
      .contains('One year')
      .click();

    getTimeInput()
      .click()
      .wait(100)
      .get('div.mat-select-value')
      .contains('One year');
  });
});
