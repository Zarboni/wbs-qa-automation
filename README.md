# WBS QA Automation Challenge

This project contains a Playwright automation framework covering both UI and API testing against the Restful Booker platforms.

## Testing Scope

I decided to cover both the UI and API portions of the challenge rather than focusing on only one side. The goal was not full automation coverage, but rather identifying the more important and higher-risk flows and testing those in a maintainable way.

The framework focuses on:
- guest-facing functionality
- admin authentication and navigation
- API booking lifecycle coverage
- positive and negative test scenarios
- maintainable and readable test structure

## Tech Stack

- Playwright
- TypeScript
- Node.js

## Project Structure

```text
tests/
├── api/
├── ui/
│   ├── admin/
│   └── guest/
UI Coverage
Guest
Homepage smoke/content validation
Contact form successful submission
Contact form validation handling
Admin
Admin login
Admin navigation between sections
API Coverage
API health check
Authentication token generation
Booking CRUD flow
Create booking
Retrieve booking
Update booking
Delete booking
Running The Project

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

Run all tests:

npx playwright test

Run only UI tests:

npx playwright test --project=ui

Run only API tests:

npx playwright test --project=api

Open the Playwright HTML report:

npx playwright show-report
Notes

During exploratory tsting I found the UI booking flow to be inconsistent and unreliable for automation. CLicking a date doesnt indicate its slected and found have to drag accross wanted days to become selectable, Because of this, I intentionally avoided over-automating unstable flows and focused instead on more reliable and maintainable coverage areas.

A GitHub Actions workflow was also added under:

.github/workflows/playwright.yml

for automated CI execution on push/pull request events.