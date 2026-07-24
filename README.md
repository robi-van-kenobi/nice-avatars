# avatar ![](https://avatars.vocayo.ai/rauchg?size=20) ![](https://avatars.vocayo.ai/leerob?size=20) ![](https://avatars.vocayo.ai/vercel?size=20) ![](https://avatars.vocayo.ai/party?size=20) ![](https://avatars.vocayo.ai/edge?size=20)

Generate beautiful gradient avatars for your application.

Forked from [vercel/avatar](https://github.com/vercel/avatar) and converted to [next.js](https://nextjs.org) App Router

## Usage

Provide a username to generate an avatar. Each name will generate a unique `avatar`. Just replace `rauchg` with an `username` or `email`:

```
https://avatars.vocayo.ai/rauchg
```

You will receive a `png` image with a size of 600\*600px

![Avatar for rauchg](https://avatars.vocayo.ai/rauchg)

### Adjust Roundness

```
https://avatars.vocayo.ai/rauchg?rounded=60
```

![Avatar for rauchg](https://avatars.vocayo.ai/rauchg?rounded=60)

### Custom Size

```
https://avatars.vocayo.ai/rauchg?size=30
```

![Avatar for rauchg](https://avatars.vocayo.ai/rauchg?size=30)

### SVG

Add the extension `.svg`:

```
https://avatars.vocayo.ai/rauchg.svg
```

### Add Initials

Add the `text` parameter (requires SVG):

```
https://avatars.vocayo.ai/rauchg.svg?text=GR
```

![Avatar for rauchg](https://avatars.vocayo.ai/rauchg.svg?text=GR)

### Deprecated: `/api/avatar/` path

> [!WARNING]
> The legacy `https://avatars.vocayo.ai/api/avatar/rauchg` path is **deprecated**.
> It still works (transparently rewritten to the root path above) so existing
> embeds keep functioning, but new integrations should use `https://avatars.vocayo.ai/rauchg`.
> The alias may be removed in a future release.
