# Overview
 This is the default theme for Playbooks projects.
 It is designed to be used in conjunction with the [@playbooks/ui](https://www.github.com/playbooks-xyz/playbooks-ui) library.

## Prerequisites
- Node
- @playbooks/ui
- tailwind v4

## Installation
```
npm install @playbooks/theme
```

## Usage
Import this project in your `_app.tsx` file and then pass to the `InterfaceProvider` context as shown.

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
This project is designed for development using the [yalc](https://npmjs.com/package/yalc) library.
- npm run dev
- switch to project
- npx yalc add @playbooks/theme
- You may need to restart your application server
- After that, this library will hot reload into the consuming application

## Scripts
- We've included a couple of helpful scripts for faster development.
- deploy: `npm run deploy -- 'commit message'`
- publish: `npm run publish -- 'commit message' [major|minor|patch]`

## Husky
- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings

## Author
- [Eric Hubbell](http://www.erichubbell.com)
- eric@erichubbell.com

## Notes
To see this library in action, checkout the following projects:
- [playbooks](https://www.playbooks.xyz)
- [@playbooks/ui](https://github.com/playbooks-xyz/playbooks-ui)
- [@playbooks/theme](https://github.com/playbooks-xyz/playbooks-theme)