# mermaid2react

```sh
npm install mermaid2react
```

For SSR and backend rendering, it's not necessary to load mermaid js. Additionally, webpack and friends can create issues when importing the library into your package.

Hence, this repo was born, which uses `load-script` to dynamically load mermaid from a CDN.

## Usage 

```js
import { Mermaid } from 'mermaid2react';

export const YourComponent = () => {
    return (
        <Mermaid chart={`
graph TD
    A[AuthOneTimeToken] -->|password| B(Verify)
    B --> C{matches?}
    C -->|yes| D[return token]
    C -->|no| E[return false]
        `} />
    );
}
```