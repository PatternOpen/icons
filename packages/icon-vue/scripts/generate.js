const fs = require('fs-extra')
const path = require('path')
const icons = Object.entries(require('../../../icons.json'))
const root = path.resolve(__dirname, '../')
const template = fs.readFileSync(path.resolve(root, 'src/components/IconBase.vue'), 'utf-8')

const main = async () => {
  const iconsDir = path.resolve(root, 'src/icons')
  if (fs.existsSync(iconsDir)) {
    fs.removeSync(iconsDir)
  }
  fs.mkdirSync(iconsDir)
  let entriesStr = ''
  for (let i = 0; i < icons.length; i++) {
    const [name, svgStr] = icons[i]
    fs.writeFile(path.join(iconsDir, `${name}.vue`), template.replace('<!--slot-->', svgStr), 'utf-8')
    entriesStr += `export { default as ${name} } from './icons/${name}.vue'\n`
  }
  entriesStr += 'import \'./components/icon.css\'\n'
  fs.writeFile(path.resolve(root, 'src/index.ts'), entriesStr, 'utf-8')
}

main()
