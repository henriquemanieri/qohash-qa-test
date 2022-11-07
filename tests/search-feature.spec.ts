import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { HomePage } from "../pages/home-page"
import { getHrUser} from '../data/user'
import { getValidEmployee } from '../data/user'
import { getInvalidEmployee } from '../data/user'
import { getEnv } from '../data/environments'

const hrUser = getHrUser()
const validEmployee = getValidEmployee()
const invalidEmployee = getInvalidEmployee()

test.beforeEach(async ({ page }) => {
    const Login = new LoginPage(page)
    const Home = new HomePage(page)

    await page.goto(getEnv("local"))
    await Login.login(hrUser.username, hrUser.password)
    await Home.validateUsernameNav(hrUser.username)
  })

test.describe('Employee Page', () => {
    
  test('Search Valid Employee ', async ({ page }) => {
    const Home = new HomePage(page)

    await Home.accessEmployeePage()
    await Home.searchEmployee(validEmployee.firstName!)
    await Home.validateEmployeeName(validEmployee.firstName!)

  })

  test('Search Invalid Employee ', async ({ page }) => {
    const Home = new HomePage(page)

    await Home.accessEmployeePage()
    await Home.searchEmployee(invalidEmployee.firstName!)
    await Home.validateNoResult('There is no result should be shown')

  })
})
