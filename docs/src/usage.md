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
