## Qohash QA Egineer Test

In your current company, the RH department has a dashboard application for managing employees’ profile information. Right now the application main page list all the employees ordered by name, but we want to add some search capabilities (you need to login in order to access the application)

---

## Here is the user story:

**Description:**

As an HR employee,

When I perform an employee search,

I want to see all the employees with a name that satisfy the search
 

**Acceptance criteria**

* Search hits first and the last name
* If the search returns no result, a message saying there is no result should be shown
* Search returns results if at least 3 characters have been prompted, otherwise no search will be performed

## Here is the test:

* Are you satisfied with these acceptance criteria?
* Define a test plan for the user story
* Write pseudo code for 1 or 2 test

---

## Test answers:

For this test, I had very little information to create a real task description and acceptance criteria, so I had to assume some information to create the AC that I considered good for the development step.

I assumed that there are 3 different users that can access the Employee list, as admin, HR User and Manager.
There are other info that I would have to talk to the PO / PM to make sure how it works, but I make myself the PO, this time.

#### **Considering that, here are the new acceptance criteria I created:**

* The search result should return the names that are more related to the search and in alphabetic order.
* The First name should be the priority. If there are two users one with a first name equal to the search and another one with the last name equal to the search, the one with the first name should appear first

>   Example: The search is "Scott" and we have two users  "Michael Scott" and
>
>  "Scott Fernandes", "Scott Fernandes" should be the first response and
>
>  "Michael Scott" is the second one.

* The Middle name should not be considered in the search
* The Middle name should be considered in the alphabetic order
* The search can only be used by users with the following permission groups:

* [x] Admin
* [x] HR User
* [x] Manager

* If the search was cleaned up or has less than 3 characters all users will be returned again
* The results should not take more than 2 seconds to appear (This time is just an example for the test)
* While the results are loading display a loading animation
* Each page should return 30 names at max
* If the results are more than 30 names the page should  appear on the next page

#### **Test Plan:**

**Unit Tests:**

>     Unit tests should be developed by the dev before moving the task to QA tests

**Manual test**

>     Do manual tests considering the test cases for this feature

**Test Cases:**

* Enter a valid name in the search field and confirm the results.

>       The results Should be in alphabetic order
>
>       Results for the first name should be first then the results for the last name

*     Enter the invalid name in the search field and expect no results.
*     Confirm result order considering the middle name rule
*     Check the time taken by the system to display the result
*     Confirm if there are no more than 30 names per page
*     Confirm if the names displayed after the search are the same as the DB search
*     Verify the loading symbol when the page takes more time to display the result.
*     Try to use the search with Admin, HR Employee and Manager permission group
*     Try to use the search with other user permission groups
 

**Automation Tests**

>     For this feature 3 scenarios are created

* Register a new user
* Search for a specific user that exists
* Search for a specific user that does not exist 

### The automation Project:

I created the automation using Playwright, but I didn't create just 2 scenarios, I also created a scenario for user registration.

I didn't have a system so everything that I created was based on a system that Cypress makes available called [Real World App](https://github.com/cypress-io/cypress-realworld-app).

The automation is running everything in local environment as default.

How to Run the automation:

```plaintext
npx playwright test --headed --project=chromium
```

This way the automation will run just using chromium and showing the Browser 

```plaintext
npx playwright test
```

This way the automation will run headless and will run using Chromium, Safari and Firefox.

> **NOTE:** 
>
> The Registration will only work if you have the Real World App running on prot 3000 on local environment.
>
> **NOTE 2:**
>
> The Search feature does not work since we don't have a system to test.