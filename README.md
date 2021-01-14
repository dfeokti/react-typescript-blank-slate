# react-typescript-blank-slate

---

# TL;DR

## `npm start`

Run the project locally, will open the browser.

## `npm run build`

Build the project, will output to **dist** directory.

## `npm run prod`

Build the project, then run the prod version locally.

---

# Hi!

This is something I did as a side project so that I can experiment wtih the latest versions of react, webpack, babel etc.. and don't always have to rely on create-react-app. Technically it should have been called react-typescript-webpack-babel-eslint-prettier-2021, but that just seemed long-winded.\
\
Making this was very helpful to me and now it's a great starting point for all my React tinkering and since you're here maybe it'll be useful to you too.\
\
The project is set up to use VSCode with the [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)\
\
The examples contained are:

- a css file loaded throught webpack's usual css-loader.
- an inline image, using [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin) and webpack-dev-server 4's new "static" option.
- a font asset, using webpack 5's new [asset management](https://webpack.js.org/guides/asset-management/) feature.

...so I don't have to look them up every time :smiley:.\
\
If you see anything weird with my setup, do let me know, as I am still learning.

### Thanks!

# Notes

Just a few things I learned while doing this and wanted to mention...\
\
Strictly speaking, you don't need Babel, as typescript has its own webpack loader, [ts-loader](https://www.npmjs.com/package/ts-loader). However, using Babel is also a popular approach because Babel compiles typescript files by... stripping out the typescript entirely. That's useful because it's **much** faster, and you're not always looking to fix all the typing errors before compiling when you're just starting out.  
\
File/url loaders are [deprecated](https://webpack.js.org/guides/asset-modules/) in webpack 5, so you won't be needing those, even if some tutorials still mention them.\
\
It's better to split webpack config into two separate files, to know exactly which parts belong to which mode. For example, you don't need an "output" key in dev mode, unless you want to write the files to disk specifically. Saw this mistake in tutorials a few times as well...\
\
[ts-fork-checker](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin) is a cool webpack plugin that's mentioned often, but it's not actually needed with this setup. ESLint already checks files as you code and you don't need to re-run it as you compile, even on a separate thread :smiley: Same idea for the watch mode.
