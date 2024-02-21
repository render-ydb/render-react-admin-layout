const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("rollup-plugin-typescript2");
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("rollup-plugin-babel");
const { terser } = require("rollup-plugin-terser");
const postcss = require("rollup-plugin-postcss");
module.exports = {
  input: "src/index.tsx",
  output: {
    name: "render-react-admin-layout",
    file: "dist/index.js",
    format: "esm",
  },
  plugins: [
    postcss({
      modules: true,
      extract: true,
    }),
    babel(),
    // terser(),
    commonjs(),
    typescript(),
    resolve(),
  ],
  external: [
    /^react($|\/)/,
    /^react-dom($|\/)/,
    /^@ant-design($|\/)/,
    /^antd($|\/)/,
  ],
};
