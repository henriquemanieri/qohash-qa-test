import { Page, Locator, expect } from '@playwright/test'
import { Chance } from 'chance'

const chance = new Chance()

export class FirstLoginPage {
  readonly page: Page
  readonly startModal: Locator
  readonly nextButton: Locator
  readonly bankNameField: Locator
  readonly routingNumberField: Locator
  readonly accountNumberField: Locator
  readonly saveButton: Locator
  readonly finishedSetUpModal: Locator
  readonly doneButton: Locator

  constructor(page: Page) {
    this.page = page
    this.startModal = page.locator('[data-test="user-onboarding-dialog-title"]')
    this.nextButton = page.locator('[data-test="user-onboarding-next"]')
    this.bankNameField = page.locator('#bankaccount-bankName-input')
    this.routingNumberField = page.locator('#bankaccount-routingNumber-input')
    this.accountNumberField = page.locator('#bankaccount-accountNumber-input')
    this.saveButton = page.locator('[data-test="bankaccount-submit"]')
    this.finishedSetUpModal = page.locator('[data-test="user-onboarding-dialog-title"]')
    this.doneButton = page.locator('[data-test="user-onboarding-next"]')
  }

  async startModalFill() {
    await this.validateStartModal('Get Started with Real World App')
    await this.nextButton.click()
    await this.bankNameField.fill('Bank Test')
    await this.routingNumberField.fill(chance.integer({ min: 100000000, max: 999999999 }).toString( ) )
    await this.accountNumberField.fill(chance.integer({ min: 100000000, max: 999999999 }).toString( ) )
    await this.saveButton.click()
    await this.validateFinishModal('Finished')
    await this.doneButton.click()
  }

  async validateStartModal(text: string) {
    await expect(this.startModal).toContainText(text)
  }

  async validateFinishModal(text: string) {
    await expect(this.finishedSetUpModal).toContainText(text)
  }
}
