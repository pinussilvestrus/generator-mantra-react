# generator-mantra-react
A Yeoman Generator for React Modules based on our Mantra philosophy (https://kadirahq.github.io/mantra/)

## Getting Started

```bash
npm install -g yo
npm install -g generator-mantra-react
yo mantra-react
```

INFO: The names of the module and the subsection should be different!

After the module was generated, you have to register it in your client's index.js

```js
/** src/modules/index.js**/

import Core from './core';

import Static from './static';
import Login from './login';

import Backend from './backend';
import Dashboard from './dashboard';
/** other modules ....*/
import <YourModule> from './<yourModule>';

export default {
	Core,
	Backend,
	Dashboard,
	Settings,
	Login,
	Content,
	Lessons,
  <YourModule>,
    Static
};

```

Have fun!

## License

GPL-3.0
