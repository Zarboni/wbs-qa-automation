# Decisions

## Why I Covered Both UI And API

I selected the bonus optionto cover both UI and API areas at a smaller scope rather than attempting deep coverage on only one side.

My goal was to demonstrate:
- exploratory thinking
- prioritisation
- maintainable framework structure
- both frontend and backend validation

rather than trying to automate every possible scenario.

---

## Why I Avoided Over-Automating The Booking UI

During testing, the booking UI flow behaved inconsistently depending on the room and date combinations selected.

Because of this, I intentionally avoided building heavy end-to-end booking automation that would likely become unstable and high maintenance.

Instead, I focused UI coverage on:
- stable guest flows
- form validation
- admin authentication
- admin navigation

while covering booking lifecycle behaviour more reliably through the API layer.

---

## Framework Structure

The framework was separated into:
- UI tests
- API tests
- guest/admin areas

to keep the project easier to scale and maintain.

Example:

```text
tests/ui/guest
tests/ui/admin
tests/api