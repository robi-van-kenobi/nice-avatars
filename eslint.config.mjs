import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'test-results/**',
      'playwright-report/**',
      'blob-report/**',
      'next-env.d.ts',
      // Playwright e2e specs — not part of the Next app; the React-oriented
      // rules in eslint-config-next flag Playwright's `use()` fixture as a
      // misused React hook. `next lint` never scanned this dir either.
      'tests/**',
    ],
  },
  ...coreWebVitals,
  ...typescript,
]

export default eslintConfig
