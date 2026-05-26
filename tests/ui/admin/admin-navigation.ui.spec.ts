import { test, expect } from '@playwright/test';

test.describe('Admin Navigation', () => {
  test('admin can navigate between admin sections', async ({ page }) => {
    await page.goto('/admin');

    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/admin\/rooms/);
    await expect(page.getByText('Room #')).toBeVisible();
    await expect(page.getByText('Room details')).toBeVisible();

    await page.getByRole('link', { name: 'Report' }).click();

    await expect(page).toHaveURL(/admin\/report/);
    await expect(page.getByText('Report')).toBeVisible();

    await page.getByRole('link', { name: 'Branding' }).click();

    await expect(page).toHaveURL(/admin\/branding/);
    await expect(page.getByText('Branding')).toBeVisible();

    await page.getByRole('link', { name: /Messages/ }).click();

    await expect(page).toHaveURL(/admin\/message/);
    await expect(page.getByText(/Messages/)).toBeVisible();
  });
});