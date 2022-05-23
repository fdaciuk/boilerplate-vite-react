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

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

## ✨ Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/fdaciuk"><img src="https://avatars.githubusercontent.com/u/487669?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fernando Daciuk</b></sub></a><br /><a href="https://github.com/fdaciuk/boilerplate-vite-react/commits?author=fdaciuk" title="Code">💻</a> <a href="https://github.com/fdaciuk/boilerplate-vite-react/commits?author=fdaciuk" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/gabepinheiro"><img src="https://avatars.githubusercontent.com/u/45916330?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabriel Pinheiro</b></sub></a><br /><a href="https://github.com/fdaciuk/boilerplate-vite-react/commits?author=gabepinheiro" title="Code">💻</a></td>
    <td align="center"><a href="http://newcapital.in@gmail.com"><img src="https://avatars.githubusercontent.com/u/81476236?v=4?s=100" width="100px;" alt=""/><br /><sub><b>NewCapital.in</b></sub></a><br /><a href="https://github.com/fdaciuk/boilerplate-vite-react/commits?author=SallesCosta" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
