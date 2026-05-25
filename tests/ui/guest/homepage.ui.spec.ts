import { test, expect } from '@playwright/test';

test.describe('Guest Homepage', () => {
  test('guest can view key homepage sections and room information', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', { name: 'Welcome to Shady Meadows B&B' })
    ).toBeVisible();

    const navigation = page.locator('nav');

    await expect(navigation.getByRole('link', { name: 'Rooms' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Booking' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Contact' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Admin' })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Check Availability & Book Your Stay' })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Our Rooms' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Single' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Double' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Suite' })).toBeVisible();

    await expect(page.getByText('£100 per night')).toBeVisible();
    await expect(page.getByText('£150 per night')).toBeVisible();
    await expect(page.getByText('£225 per night')).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Our Location' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Send Us a Message' })).toBeVisible();
  });
});