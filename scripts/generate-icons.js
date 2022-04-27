const { optimize } = require('svgo')
const fg = require('fast-glob')
const path = require('path')
const fs = require('fs-extra')
const chalk = require('chalk')
const { pascalCase } = require('change-case')

const root = path.resolve(__dirname, '..')
const iconJsonPath = path.join(root, 'icons.json')
const sourceRoot = path.join(root, 'source')

const zip = entry => {
  const svgString = fs.readFileSync(entry, { encoding: 'utf-8' })
  const { data } = optimize(svgString, {
    multipass: true,
    plugins: [
      // 移除尺寸信息
      'removeDimensions',
      {
        name: 'removeAttrs',
        params: {
          attrs: '(fill|stroke)',
        },
      },
      {
        name: 'addClassesToSVGElement',
        params: {
          classNames: ['pop-icon-svg'],
        },
      },
      // 添加属性到svg元素
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            {
              fill: 'currentColor',
            },
          ],
        },
      },
    ],
  })
  return data
}

const clean = () => {
  fs.removeSync(iconJsonPath)
}

const main = async () => {
  clean()
  const icons = {}
  const entries = await fg(path.join(sourceRoot, '*.svg'))
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]
    const originName = entry.replace(sourceRoot, '').replace('.svg', '')
    const svgStr = zip(entry)
    const name = pascalCase(originName, { pascalCase: true })
    icons[name] = svgStr
    console.log(chalk.yellowBright(`svgo success: ${entry}`))
  }
  fs.writeFile(iconJsonPath, JSON.stringify(icons))
  console.log(chalk.greenBright(`\nSvg is merged to '${iconJsonPath}'.`))
}

main()
