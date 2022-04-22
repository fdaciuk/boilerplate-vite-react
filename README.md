<h1 align="center">Boilerplate React.js + TypeScript + Vite 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/fdaciuk" target="_blank">
    <img alt="Twitter: fdaciuk" src="https://img.shields.io/twitter/follow/fdaciuk.svg?style=social" />
  </a>
</p>

> Boilerplate to create React.js apps with Vite

## Which techs this boilerplate have in it?

This boilerplate is ready to be used by devs who want to start a new project using React.js, TypeScript and Jest with Vite.

## Main configurations

- React.js 18+ with TypeScript;
  - You can import "svgs" with `import { ReactComponent as MyIcon } from './icon-path.svg'`;
  - You can import any other media (images, videos, etc) that is located inside `src` directory;
  - You can use absolute imports, using `@` as `src` directory;
- Eslint:
  - [Standard](https://standardjs.com/) with some modifications;
  - React Hooks and other React configurations with [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app) (same used in Create React App);
- Automatic lint and type-checking with Husky before every commit.

## Usage

Install the dependencies:

```sh
yarn install
```

Run dev server:

```sh
yarn dev
```

You can run type-checking in watch mode in another terminal, if you may:

```sh
yarn type-check --watch
```

## Run tests

```sh
yarn test
```

## Production version

To generate the production version, you can run:

```sh
yarn build
```

All files you have to deploy will be located at the `dist` directory.

### Run production version locally

To check if everything will be ok in production before the deployment, you can run this command after `yarn build`:

```sh
yarn preview
```

## Author

👤 **Fernando Daciuk**

* Website: https://daciuk.dev
* Twitter: [@fdaciuk](https://twitter.com/fdaciuk)
* Github: [@fdaciuk](https://github.com/fdaciuk)
* LinkedIn: [@fdaciuk](https://linkedin.com/in/fdaciuk)
* Instagram : [@fdaciuk](https://instagram.com/fdaciuk)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/fdaciuk/boilerplate-vite-react/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
