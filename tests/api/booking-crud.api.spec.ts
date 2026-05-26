import { test, expect } from '@playwright/test';

test.describe('API Booking CRUD', () => {
  test('creates, retrieves, updates and deletes a booking', async ({ request }) => {
    const bookingPayload = {
      firstname: 'Faiz',
      lastname: 'Carstens',
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: '2026-07-01',
        checkout: '2026-07-02'
      },
      additionalneeds: 'Breakfast'
    };

    const createResponse = await request.post('/booking', {
      data: bookingPayload
    });

    expect(createResponse.status()).toBe(200);

    const createBody = await createResponse.json();
    const bookingId = createBody.bookingid;

    expect(bookingId).toBeTruthy();

    const getResponse = await request.get(`/booking/${bookingId}`);

    expect(getResponse.status()).toBe(200);

    const getBody = await getResponse.json();

    expect(getBody.firstname).toBe(bookingPayload.firstname);
    expect(getBody.lastname).toBe(bookingPayload.lastname);

    const authResponse = await request.post('/auth', {
      data: {
        username: 'admin',
        password: 'password123'
      }
    });

    expect(authResponse.status()).toBe(200);

    const authBody = await authResponse.json();
    const token = authBody.token;

    expect(token).toBeTruthy();

    const updateResponse = await request.patch(`/booking/${bookingId}`, {
      headers: {
        Cookie: `token=${token}`
      },
      data: {
        firstname: 'FaizUpdated',
        additionalneeds: 'Late checkout'
      }
    });

    expect(updateResponse.status()).toBe(200);

    const updateBody = await updateResponse.json();

    expect(updateBody.firstname).toBe('FaizUpdated');
    expect(updateBody.lastname).toBe(bookingPayload.lastname);
    expect(updateBody.additionalneeds).toBe('Late checkout');

    const deleteResponse = await request.delete(`/booking/${bookingId}`, {
      headers: {
        Cookie: `token=${token}`
      }
    });

    expect(deleteResponse.status()).toBe(201);

    const getDeletedResponse = await request.get(`/booking/${bookingId}`);

    expect(getDeletedResponse.status()).toBe(404);
  });
});