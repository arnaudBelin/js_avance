# Modules

Pour découvrir les modules nous allons configurer au préalable une petite application à l'aide de Webpack. Il permet essentiellement d'organiser une application en modules.

[webpack](https://webpack.js.org/)

Vous pouvez suivre les étapes basiques de la documentation pour mettre en place l'application :

Récupérez dans le dossier webpack-demo les sources et placez vous à la racine du projet, puis tapez la ligne de commande suivante :

```bash
npm install
```

Le fichier webpack.config.js contient la configuration des transpilers et server de reload ainsi que la configuration des fichiers de build.

Vous avez également un server webpack que vous pouvez lancer en tapant la ligne de commande suivante :

```bash
webpack-dev-server --hot
```

Notez qu'également dans ce projet vous avez une configuration pour utilisez sass.

Les modules permettent de gérer les exports de fichiers.

La fonctionnalité d'export est présente par exemple dans Node.js.

## Installation & configuration

Utilisez npm pour créer le fichier package.json :


Puis créez les dossiers et fichiers suivants en lignes de commande :

- Dans le dossier webpack-badel-demo créez le fichier de configuration de webpack :

```bash
touch webpack.config.js 
```

- Puis à la racine du projet créez les dossiers **public** et **src** ainsi que les fichiers et dossiers suivants :

```bash
mkdir public src
cd src
touch app.js
mkdir sass
cd sass
touch app.scss

cd public && touch index.html bundle.js style.css
```

Nous allons maintenant installer webpack :

```bash
npm install --save-dev webpack@latest webpack-dev-server@latest
```

Créez maintenant le fichier webpack.config.js à la racine du projet :

```bash
touch  webpack.config.js
```

Configuration du fichier webpack.config.js :

```js
const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode :"development",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    }
}
```

Ajoutez simplement le code suivant pour lier votre fichier bundle à votre page HTML :

```html
<script src="bundle.js"></script>
```

Dans le fichier package.json ajoutez la ligne suivante, elle permettra de watcher les modifications dans vos fichiers métiers :

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch"
  },
```

Faites un simple Hello Wolrd ! dans le fichier app.js

```js
console.log("hello world !");
```

Pour lancer cette commande tapez dans la console à la racine du projet :

```bash
npm run watch
```

Vous devriez voir votre fichier bundle.js mis à jour. Ouvrez simplement votre fichier index.html, vous devriez voir votre console.log dans la console de votre navigateur.

Pour écrire de l'ES6 et le convertir en ES5 pour éventuellement couvrir les compatibilités de certains navigateurs, on utilisera Babel qui va transpiler le code depuis une version ES6 vers ES5 par exemple.

Insallez les dépendances Babel dans le projet, notez -D est un racourci pour --save-dev :

```bash
npm install -D babel-loader babel-core
```

Nous allons également indiquer les presets à utiliser pour que Babel transpile vers la bonne cible :

```bash
npm install -D babel-preset-env
```

Modifiez le fichier webpack.config.js :

```js
const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode :"development",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader"
        }]
      }
}
```

Créez maintenant un fichier à la racine du projet .babelrc, plus lisible pour connaitre la cible. preset-env transformera tout le code ES2015-ES2020 pour qu'il soit compatible ES5.

Notez que cette option peut-être intégrer au fichier webpack.config.js

```json
{
  "presets": ["@babel/preset-env"]
}
```

Vous pouvez également utilisez des loaders pour vos sass :

```js
npm i -D sass-loader css-loader node-sass
```

Installez également le plugin webpack suivant :

```bash
npm i -D mini-css-extract-plugin
```

Voyez maintenant la configuration du fichier webpack :

```js
const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    plugins: [
        require("autoprefixer"),
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.css',
        }),
    ],
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.s?[ac]ss$/,
                include: path.resolve(__dirname, './src/sass/app.scss'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}
```

- Installation d'un serveur de développement

```bash
npm i -D webpack-dev-server 
```

Installez également la dépendance suivante pour que le serveur re-load la page afin de voir les changements CSS :

```js
npm i -D css-hot-loader
```

Modifiez le fichier webpack.config.js comme suit :

```js
const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    plugins: [
        require("autoprefixer"),
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.css',
        }),
    ],
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.s?[ac]ss$/,
                include: path.resolve(__dirname, './src/sass/app.scss'),
                use: [
                    'css-hot-loader', // pour que la page re-load avec les CSS modifié
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true
      }
}
```

Nous utiliserons maintenant cette configuration pour découvrir les imports/exports de ES6

## export

Vous pouvez dans un module exporter des constantes, fonctions, classes à la voler :

```js
export const API = 3;

export const info = () => "Info" ;
```

Vous également exporter à posteriori à l'aide de la syntaxe suivante :

```js
const API = 3;

const info = () => "Info" ;

export { API, info };
```

On peut également définir un export par défaut, dans ce cas un seul par module :

```js
export default const API = 3;
```

Vous pouvez également renommer vos exports :

```js
export { api as API };
```

Ou ré-exporter (délégation) à partir d'un autre module (fichier) :

```js
export * from './lib/modules';
```

Mais vous pouvez également cibler les export (délégation) :

```js
export {
    make as wrap,
    Component
} from 'toolkit';
```

## import 

D'un autre côté pour récupérer les modules dans les fichiers. 

- Vous pouvez importer tous les namesapces :

```js
import * as types from 'toolkit';
```

- Importer nommé et export par défaut se font également facilement :

```js
import React, {Component} from 'react';

// Import par défaut seul
import React from 'react';

// Import nommé seul

import { Component }  from 'react';
```

Bien sûr vous pouvez également renommer vos imports à la voler :

```js
import { Model as m }  from 'toolkit';

```