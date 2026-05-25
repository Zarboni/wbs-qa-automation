import { test, expect } from '@playwright/test';

test.describe('Guest Contact Form Validation', () => {
  test('guest sees validation message when phone number is too short', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 60000 });

    await page.getByRole('textbox', { name: 'Name' }).fill('Faiz Carstens');
    await page.getByRole('textbox', { name: 'Email' }).fill('carstensfaiz@gmail.com');
    await page.getByRole('textbox', { name: 'Phone' }).fill('0712345678');
    await page.getByRole('textbox', { name: 'Subject' }).fill('Booking enquiry');
    await page.locator('#description').fill('I would like more information about room availability.');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(
      page.getByText('Phone must be between 11 and 21 characters.')
    ).toBeVisible();
  });
});