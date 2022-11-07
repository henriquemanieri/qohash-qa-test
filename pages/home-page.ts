import { Page, Locator, expect } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly usernameNav: Locator
  readonly employeeLink: Locator
  readonly searchField: Locator
  readonly employeeDiv: Locator
  readonly noResultText: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameNav = page.locator('[data-test="sidenav-username"]')
    this.employeeLink = page.locator('[data-test="sidenav-employee-link"]')
    this.searchField = page.locator('[data-test="search-field"]')
    this.employeeDiv = page.locator('.div-employee-name')
    this.noResultText = page.locator('[data-test="no-result-text"]')
  }

  async accessEmployeePage() {
    await this.employeeLink.click()
  }

  async validateUsernameNav(text: string) {
    await expect(this.usernameNav).toContainText(text)
  }

  async searchEmployee(employeeName: string) {
    this.searchField.fill(employeeName)
  }

  async validateNoResult(text: string) {
    await expect(this.employeeDiv).toContainText(text)
  }

  async validateEmployeeName(text: string) {
    await expect(this.employeeDiv).toContainText(text)
  }


}
