import { test, expect } from '@playwright/test';

test.describe('API Authentication', () => {
  test('creates an auth token with valid admin credentials', async ({ request }) => {
    const response = await request.post('/auth', {
      data: {
        username: 'admin',
        password: 'password123'
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.token).toBeTruthy();
    expect(typeof body.token).toBe('string');
  });
});