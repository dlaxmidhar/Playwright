import { test, expect } from '@playwright/test';



test('test', async ({ page }) => {
  await page.goto('https://localhost:7000/');
  await page.locator('#email').click();
  await page.locator('#email').fill('daslaxmidhar');
  await page.getByRole('button', { name: 'Send OTP' }).click();
  
});