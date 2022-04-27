const fs = require('fs-extra')
const path = require('path')
const icons = Object.entries(require('../../../icons.json'))
const root = path.resolve(__dirname, '../')

const main = async () => {
  const iconsDir = path.resolve(root, 'src/icons')
  if (fs.existsSync(iconsDir)) {
    fs.removeSync(iconsDir)
  }
  fs.mkdirSync(iconsDir)
  let entriesStr = ''
  for (let i = 0; i < icons.length; i++) {
    const [name, svgStr] = icons[i]
    entriesStr += `export const ${name}: string = '${svgStr}'\n`
  }
  fs.writeFile(path.resolve(root, 'src/index.ts'), entriesStr, 'utf-8')
}

main()
