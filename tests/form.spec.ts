import { test, expect } from '@playwright/test';

test('Форма: заполняет и отправляет', async ({ page, browserName }) => {

  test.skip(browserName === 'webkit', 'WebKit не поддерживает корректно getByRole с русскими label');

  await page.goto('http://localhost:3000/form');
  await page.getByLabel('Имя').fill('Артём');
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByRole('button', { name: 'Отправить' }).click();
  await expect(page.getByText('Форма успешно отправлена')).toBeVisible({ timeout: 5000 });
});
