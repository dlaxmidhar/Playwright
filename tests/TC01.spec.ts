import { test, expect } from '@playwright/test';

test.describe('Logini Functionality', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Test Case', async () => {
    await page.goto('https://localhost:7000/');
    await page.locator('#email').click();
    await page.locator('#email').fill('dlaxmidhar');
    await page.getByRole('button', { name: 'Send OTP' }).click();
    await page.locator('#userotp').click();
    await page.locator('#userotp').fill('942370');
    await page.getByRole('button', { name: 'Login' }).click();
  });
});