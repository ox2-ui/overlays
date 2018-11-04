### Package is no longer maintaned.

# @ox2/overlays
![NPM version](https://img.shields.io/badge/npm-private-orange.svg?style=flat)
<!-- ![NPM version](https://img.shields.io/npm/v/@ox2/overlays.svg?style=flat) -->

Overlay panels and dialogs.

## Features

* **Panels** Panel overlays for menus and other content.
* **Dialogs** Scrollable and fixed dialogs.
* **Modals** Both panels and dialogs can be modal (Clicking on backdrop does not close it).

## Installation
Install using [npm](http://npmjs.com):
```sh
npm install @ox2/overlays --save
```
Install using [yarn](http://yarnpkg.com):
```sh
yarn add @ox2/overlays
```

## Usage
In your app root import transition styles:
```js
import '@ox2/overlays/transitions.css';
```

```js
import Dialog from '@ox2/overlays/Dialog';

<Dialog
  zDepth={10}
  isOpen={true}
  type={'fixed'}
  transition={'fadeIn'}
>
  <div>your content</div>
</Dialog>
```

```js
import Panel from '@ox2/overlays/Panel';

<Panel
  zDepth={10}
  isOpen={true}
  maxWidth={'320px'}
  transition={'slideFromLeft'}
  right={'auto'}
>
  <div>your content</div>
</Panel>

```

## Change Log
Changes are tracked in the [CHANGELOG.md](https://github.com/ox2/overlays/blob/master/CHANGELOG.md)

## License
[MIT](https://github.com/ox2/overlays/blob/master/LICENSE)
