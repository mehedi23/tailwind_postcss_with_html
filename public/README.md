step by step
1. run on command,
    `npm init -y`
    `npm i -D tailwindcss postcss postcss-cli autoprefixer`
    `npx tailwind init`
2. set a scripts at package.json
    `"start": "postcss src/any_name_u_like.css -o public/any_name_u_like.css -w"`

make two directory at root folder, one is public and another is src. In public folder we need to create a css file and we can also create html files as much as we needed.
Another side, on src file we need to create a css file where we will right out css code.

Our src/any_name.css compile css code and send to public/any_name_u_like.css. 


### tailwind.config.js
```js 
module.exports = {
  mode: "jit", // it will init useable css only
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ], // any html file on public folder
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

### postcss.config.js
```js 
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    }
}
```