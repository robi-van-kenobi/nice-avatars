import { createRequire } from 'module'
import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

// Resolve the installed React version so we never hardcode a stale value.
const require = createRequire(import.meta.url)
const reactVersion = require('react/package.json').version

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
  {
    // eslint-config-next defaults `react.version` to "detect". Under ESLint 10
    // eslint-plugin-react's detection path calls the removed
    // `context.getFilename()` and crashes. Pinning the version explicitly skips
    // detection entirely (this override must come after the next configs above).
    settings: { react: { version: reactVersion } },
  },
]

export default eslintConfig
