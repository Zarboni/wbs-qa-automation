import { test, expect } from '@playwright/test';

test.describe('Guest Contact Form', () => {

  test('guest can submit the contact form successfully', async ({ page }) => {

    await page.goto('/');

    await page.getByRole('textbox', { name: 'Name' })
      .fill('Faiz Carstens');

    await page.getByRole('textbox', { name: 'Email' })
      .fill('carstensfaiz@gmail.com');

    await page.getByRole('textbox', { name: 'Phone' })
      .fill('07123456789');

    await page.getByRole('textbox', { name: 'Subject' })
      .fill('Booking enquiry');

    await page.locator('#description')
      .fill('I would like more information about room availability.');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(
      page.getByText('Thanks for getting in touch')
    ).toBeVisible();

  });

});