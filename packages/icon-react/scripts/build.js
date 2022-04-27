const rollup = require('rollup')
const path = require('path')
const typescript = require('rollup-plugin-typescript2')
const css = require('rollup-plugin-import-css')
const { terser } = require('rollup-plugin-terser')
const root = path.resolve(__dirname, '..')

const main = async () => {
  const bundle = await rollup.rollup({
    input: path.join(root, './src/index.ts'),
    external: ['react'],
    plugins: [
      terser(),
      css(),
      typescript({
        clean: true,
        check: false,
        tsconfig: path.resolve(root, 'tsconfig.json'),
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
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
