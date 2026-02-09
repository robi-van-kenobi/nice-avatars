# avatar ![](https://avatars.vocayo.ai/api/avatar/rauchg?size=20) ![](https://avatars.vocayo.ai/api/avatar/leerob?size=20) ![](https://avatars.vocayo.ai/api/avatar/vercel?size=20) ![](https://avatars.vocayo.ai/api/avatar/party?size=20) ![](https://avatars.vocayo.ai/api/avatar/edge?size=20)

Generate beautiful gradient avatars for your application.

Forked from [vercel/avatar](https://github.com/vercel/avatar) and converted to [next.js](https://nextjs.org) App Router

## Usage

Provide a username to generate an avatar. Each name will generate a unique `avatar`. Just replace `rauchg` with an `username` or `email`:

```
https://avatars.vocayo.ai/api/avatar/rauchg
```

You will receive a `png` image with a size of 600\*600px

![Avatar for rauchg](https://avatars.vocayo.ai/api/avatar/rauchg)

### Adjust Roundness

```
https://avatars.vocayo.ai/api/avatar/rauchg?rounded=60
```

![Avatar for rauchg](https://avatars.vocayo.ai/api/avatar/rauchg?rounded=60)

### Custom Size

```
https://avatars.vocayo.ai/api/avatar/rauchg?size=30
```

![Avatar for rauchg](https://avatars.vocayo.ai/api/avatar/rauchg?size=30)

### SVG

Add the extension `.svg`:

```
https://avatars.vocayo.ai/api/avatar/rauchg.svg
```

### Add Initials

Add the `text` parameter (requires SVG):

```
https://avatars.vocayo.ai/api/avatar/rauchg.svg?text=GR
```

![Avatar for rauchg](https://avatars.vocayo.ai/api/avatar/rauchg.svg?text=GR)
