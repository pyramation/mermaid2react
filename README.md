# mermaid2react

Uses `load-script` to dynamically load mermaid from a CDN

```js
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