import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Deprecated legacy path. Avatars now live at the root (`/:name`); this
      // transparently serves the old `/api/avatar/:name` URLs from the same
      // handler so existing embeds keep working. Remove once no consumers use it.
      {
        source: '/api/avatar/:name',
        destination: '/:name',
      },
    ]
  },
}

export default nextConfig
