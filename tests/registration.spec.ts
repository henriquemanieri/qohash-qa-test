import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { RegisterPage } from '../pages/register-page'
import { FirstLoginPage } from "../pages/first-login-page"
import { HomePage } from "../pages/home-page"
import { getRandomUser} from '../data/user'
import { getEnv } from '../data/environments'

const randomUser = getRandomUser()

test.describe('Random User registration', () => {
  test('Register random User ', async ({ page }) => {
    const Login = new LoginPage(page)
    const Register = new RegisterPage(page)
    const FirstLogin = new FirstLoginPage(page)
    const Home = new HomePage(page)

    const firstName = randomUser.firstName
    const lastName = randomUser.lastName
    const username = firstName + lastName

    await page.goto(getEnv("local"))
    await Login.registerUserPage()
    await Register.register(firstName, lastName, username, randomUser.password)
    await Login.login(username, randomUser.password)
    await FirstLogin.startModalFill()
    await Home.validateUsernameNav(username)

    await expect(page).toHaveTitle(/Cypress Real World App/)
  })
})
