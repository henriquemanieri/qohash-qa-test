import { Page, Locator, expect } from '@playwright/test'

export class RegisterPage {
  readonly page: Page
  readonly firstNameField: Locator
  readonly lastNameField: Locator
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly confirmPasswordField: Locator
  readonly signUpButton: Locator
  readonly signInLink: Locator
  readonly registerPageSignUpText: Locator

  constructor(page: Page) {
    this.page = page
    this.firstNameField = page.locator('#firstName')
    this.lastNameField = page.locator('#lastName')
    this.usernameField = page.locator('#username')
    this.passwordField = page.locator('#password')
    this.confirmPasswordField = page.locator('#confirmPassword')
    this.signUpButton = page.locator('[data-test="signup-submit"]')
    this.signInLink = page.locator('[href="/signin"]')
    this.registerPageSignUpText = page.locator('body')
  }

  async register(firstName: string, lastName:string, username: string, password: string) {
    await this.validaLoginPageSignUpText('Sign Up')
    await this.firstNameField.fill(firstName)
    await this.lastNameField.fill(lastName)
    await this.usernameField.fill(username)
    await this.passwordField.fill(password)
    await this.confirmPasswordField.fill(password)
    await this.signUpButton.click()
  }

  async validaLoginPageSignUpText(text: string) {
    await expect(this.registerPageSignUpText).toContainText(text)
  }
}
