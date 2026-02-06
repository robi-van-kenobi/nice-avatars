import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'
import { generateGradient } from '../../../../utils/gradient'

export const runtime = 'edge'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params
  const searchParams = request.nextUrl.searchParams
  const text = searchParams.get('text')
  const size = Number(searchParams.get('size') || '600')
  const rounded = Number(searchParams.get('rounded') || '0')

  const [username, type] = name?.split('.') || []
  const fileType = type?.includes('svg') ? 'svg' : 'png'

  const gradient = await generateGradient(username || `${Math.random()}`)

  const avatar = (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={gradient.fromColor} />
            <stop offset="100%" stopColor={gradient.toColor} />
          </linearGradient>
        </defs>
        <rect
          fill="url(#gradient)"
          x="0"
          y="0"
          width={size}
          height={size}
          rx={rounded}
          ry={rounded}
        />
        {fileType === 'svg' && !!text ? (
          <text
            x="50%"
            y="50%"
            alignmentBaseline="central"
            dominantBaseline="central"
            textAnchor="middle"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize={(size * 0.9) / text.length}
          >
            {text}
          </text>
        ) : null}
      </g>
    </svg>
  )

  if (fileType === 'svg') {
    const textElement = fileType === 'svg' && !!text
      ? `<text x="50%" y="50%" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" fill="#fff" font-family="sans-serif" font-size="${(size * 0.9) / text.length}">${text}</text>`
      : ''
    
    const svgString = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g>
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${gradient.fromColor}" />
        <stop offset="100%" stop-color="${gradient.toColor}" />
      </linearGradient>
    </defs>
    <rect fill="url(#gradient)" x="0" y="0" width="${size}" height="${size}" rx="${rounded}" ry="${rounded}" />
    ${textElement}
  </g>
</svg>`
    
    return new Response(svgString, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=604800, immutable',
      },
    })
  }

  return new ImageResponse(avatar, {
    width: size,
    height: size,
  })
}
