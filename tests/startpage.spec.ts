import { test, expect } from './base'

test.describe('Startpage', () => {
  test('startpage checks', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Log in to Vercel')).not.toBeVisible()

    // check heading
    await expect(page.getByRole('heading', { name: 'Avatar' })).toBeVisible()

    // check the generated avatars
    await expect(page.getByRole('img', { name: 'Vercel' })).toBeVisible()
    await expect(page.getByRole('img', { name: 'ID' })).toBeVisible()
    await expect(page.getByRole('img', { name: 'Satori' })).toBeVisible()
    await expect(page.getByRole('img', { name: 'Next.js' })).toBeVisible()
  })

  test('should generate avatar with text and rounded corners', async ({ page }) => {
    await page.goto('/api/avatar/playwright.svg?text=PW&size=200&rounded=20')
    const avatar = page.locator('svg')
    await expect(avatar).toBeVisible()
    await expect(avatar).toContainText('PW')
  })
})
