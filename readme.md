### PoC

How to use?

clone this repo and cd inside it
```bash
npm install
npm start
```

Open your browser at localhost:8080 you'll see some alerts, go inside alert.scss and make a change, it should hot reload,
which means it won't actually refresh the browser.

In case you change html under build, it'll refresh because HMR can't hot update html

Any new theme file created MUST be registered in theme.scss file, and responsive in responsive.scss file

Once you want to see how it'll built, simply run `npm run build`

it should create a bunch of css and JS files under build/public, we'll probably remove js files, those are webpack artifacts
we can do something with them, but not sure what, but we don't need them.

Now there should be 4 different file,
- style.css contains core style stuff (should probably rename to core)
- theme.css contains color information (we could in theory very easily create dark/light or any other theme)
- responsive.css since style.css and theme.css will only contain css for mobile devices (so they're fast), tablets and desktop will request this file
- all.css contains everything combined (if someone just wants to start right away)
