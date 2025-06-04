# Overview
 This is the default theme for Playbooks projects.
 It is designed to be used in conjunction with the `@playbooks/ui` library within a web app built with Tailwind v4.

## Prerequisites
- Git
- Node
- @playbooks/ui
- tailwind v4

## Quick Start
- npm install @playbooks/theme

## Installation
Wrap your application with the <InterfaceProvider /> and make sure to pass in the `@playbooks/theme` or a separate theme of your choosing.

```tsx
# _app.tsx

import { AppProps } from 'next/app';
import * as theme from '@playbooks/theme';
import '@playbooks/ui/styles.css';
import { InterfaceProvider } from '@playbooks/ui/context';

const App = ({ Component, pageProps }: AppProps) => {

	// Render
	return (
		<InterfaceProvider meta={meta} theme={theme}>
      <Component ssr={pageProps} {...contexts} />
		</InterfaceProvider>
	);
};

export default App;
```

## Development
This project is designed for development using the yalc library.
- npm run dev
- switch to project
- npx yalc add @playbooks/theme
- You may need to restart your application server
- After that you should be good to go with hot reloading


## Scripts
- We've included a couple of helpful scripts for faster development.
- deploy: `npm run deploy -- 'commit message'`
- publish: `npm run publish -- 'commit message' [major|minor|patch]`


## Husky
- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings


## Author
- Eric Hubbell
- eric@erichubbell.com
