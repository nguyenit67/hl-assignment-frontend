## Prerequisites

- Node.js (12.20, 14.14.0, 16.0.0 or later) and NPM (8.0.0+)

## Testing on local

```sh
# install dependencies
npm install

# run dev mode with hot reload
npm run dev
```

## Deployment

#### Deploy to Netlify

1. Install the Netlify CLI.
2. Create a new site using `netlify init`.
3. Deploy using `netlify deploy --build`.

```sh
# Install the Netlify CLI
$ npm install -g netlify-cli

# Create a new site in Netlify
$ netlify init

# Build & deploy to a unique preview URL (draft URL)
$ netlify deploy --build
```
