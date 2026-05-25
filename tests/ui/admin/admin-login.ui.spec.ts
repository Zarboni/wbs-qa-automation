import { test, expect } from '@playwright/test';

test.describe('Admin Login', () => {
  test('admin can log in and view room management', async ({ page }) => {
    await page.goto('/admin');

    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/.*admin\/rooms/);
    await expect(page.getByRole('link', { name: 'Rooms' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Report' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Branding' })).toBeVisible();
    await expect(page.getByRole('link', { name: /Messages/ })).toBeVisible();

    await expect(page.getByText('101')).toBeVisible();
    await expect(page.getByText('102')).toBeVisible();
    await expect(page.getByText('103')).toBeVisible();
  });
});