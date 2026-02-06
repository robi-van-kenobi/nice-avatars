import { test as base, expect } from '@playwright/test'

export type Environment = 'DEV' | 'CI' | 'PROD'

export type TestOptions = {
  environment: Environment
  blockedDomains: Array<string>
}

export const test = base.extend<TestOptions>({
  environment: ['DEV', { option: true }],
  blockedDomains: [[], { option: true }],
  // You can add shared fixtures here
  page: async ({ page }, use) => {
    // You can perform actions before each test here
    page.setExtraHTTPHeaders({
      'x-vercel-protection-bypass': process.env.VERCEL_AUTOMATION_BYPASS_SECRET || '',
    })

    await use(page)
    // You can perform actions after each test here
  },
})

export { expect }

export const ENV: Environment = (process.env.ENV as Environment) || 'DEV'

export const isDev = ENV === 'DEV'
export const isCI = ENV === 'CI'
export const isProd = ENV === 'PROD'
