const rollup = require('rollup')
const path = require('path')
const vue = require('rollup-plugin-vue')
const typescript = require('rollup-plugin-typescript2')
const { terser } = require('rollup-plugin-terser')
const root = path.resolve(__dirname, '..')

const main = async () => {
  const bundle = await rollup.rollup({
    input: path.join(root, './src/index.ts'),
    external: ['vue'],
    plugins: [
      vue(),
      terser(),
      typescript({
        clean: true,
        check: false,
        tsconfig: path.resolve(root, 'tsconfig.json'),
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            rootDir: root,
          },
          include: [
            root,
          ],
        },
      }),
    ],
  })

  await bundle.write({
    output: {
      file: path.join(root, './dist/index.js'),
      format: 'esm',
      minifyInternalExports: true,
    },
  })
}

main()
