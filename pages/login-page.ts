import { Page, Locator, expect } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly loginButton: Locator
  readonly rememberMeCheckBox: Locator
  readonly signUpLink: Locator
  readonly loginPageSignInText: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameField = page.locator('#username')
    this.passwordField = page.locator('#password')
    this.loginButton = page.locator('[data-test="signin-submit"]')
    this.rememberMeCheckBox = page.locator('[data-test="signin-remember-me"]')
    this.signUpLink = page.locator('[data-test="signup"]')
    this.loginPageSignInText = page.locator('body')
  }

  async login(username: string, password: string) {
    await this.validateLoginPageSignInText('Sign in')
    await this.usernameField.fill(username)
    await this.passwordField.fill(password)
    await this.loginButton.click()
  }

  async registerUserPage() {
    await this.signUpLink.click()
    await this.signUpLink.click()
  }

  async validateLoginPageSignInText(text: string) {
    await expect(this.loginPageSignInText).toContainText(text)
  }
}
