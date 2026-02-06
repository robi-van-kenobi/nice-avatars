import { Environment } from './base'

export function getEnvironment(): Environment {
  if (process.env.CHECKLY_RUN_SOURCE?.startsWith('TEST') || process.env.CI === 'true') return 'CI'

  if (
    process.env.CHECKLY_RUN_SOURCE?.startsWith('TRIGGER') ||
    process.env.CHECKLY_RUN_SOURCE?.startsWith('SCHEDULE') ||
    process.env.CHECKLY_RUN_SOURCE?.startsWith('GROUP') ||
    process.env.CHECKLY_RUN_SOURCE === 'CLI_DEPLOY' ||
    process.env.CHECKLY_RUN_SOURCE === 'DEPLOYMENT'
  )
    return 'PROD'
  return 'DEV'
}

export function getBaseUrl(environment: Environment): string {
  console.log(`Current environment: ${environment}`);
  switch (environment) {
    case 'DEV':
      return 'http://localhost:3000'
    case 'CI': {
      const baseUrl = process.env.BASE_URL?.trim()
      return baseUrl ? baseUrl : 'https://avatars.vocayo.ai' // Replace with actual CI URL
    }
    case 'PROD':
      return 'https://avatars.vocayo.ai' // Replace with actual Production URL
    default:
      return 'http://localhost:3000'
  }
}

export function getVercelBypassSecret(): string | undefined {
  // console.log(`bypass token: ${process.env.VERCEL_AUTOMATION_BYPASS_SECRET}`)
  return process.env.VERCEL_AUTOMATION_BYPASS_SECRET
}

export function getBlockedDomains(environment: Environment): Array<string> {
  switch (environment) {
    case 'DEV':
      // empty, no specific domains at the moment
    case 'CI':
      // empty, no specific domains at the moment
    case 'PROD':
       // empty, no specific domains at the moment
   default:
      return ['um.copriso.com', 'um.vocayo.ai', 'www.google-analytics.com']
  }
}