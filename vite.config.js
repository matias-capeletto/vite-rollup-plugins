import vue from '@vitejs/plugin-vue'
// import autoInstall from '@rollup/plugin-auto-install'
// import babel from '@rollup/plugin-babel'
import beep from '@rollup/plugin-beep'
import dsv from '@rollup/plugin-dsv'
// import eslint from '@rollup/plugin-eslint'
import graphql from '@rollup/plugin-graphql'
import image from '@rollup/plugin-image'
import inject from '@rollup/plugin-inject'
// import legacy from '@rollup/plugin-legacy'
import replace from '@rollup/plugin-replace'
import strip from '@rollup/plugin-strip'
import yaml from '@rollup/plugin-yaml'
import virtual from '@rollup/plugin-virtual'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    /* todo
    {
      ...autoInstall(),
      enforce: 'pre',
    },
    babel({ babelHelpers: 'bundled' }),
    legacy({
      './src/assets/legacy.js': 'legacyLibrary',
    }),
    */
    // compatible, but not included because of <script setup>
    // eslint({ include: '**/*.+(vue|js|jsx|ts|tsx)' }),
    {
      ...image(),
      enforce: 'pre',
    },
    vue(),
    beep(),
    dsv(),
    graphql(),
    inject({
      nanoid: ['nanoid', 'nanoid']
    }),
    replace({
      __replaced__: "correctly replaced"
    }),
    yaml(),
    virtual({
      batman: `export default 'na na na na na'`,
      'src/robin.js': `export default 'batmannnnn'`
    }),
    {
      ...strip(),
      apply: 'build'
    },
  ]
}
