import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import sass from "sass";

import pkg from "./package.json" assert { type: "json" };

export default {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        postcss({
            extract: true,
            modules: true,
            implementation: sass, // use Dart Sass and suppress deprecation warnings
        }),
        image(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json",
            clean: true,
        }),
    ],
};
