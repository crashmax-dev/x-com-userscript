import { defineConfig } from 'vite'
import Userscript from 'vite-userscript-plugin'

import { author, homepage, license, name, version } from './package.json'

export default defineConfig((config) => {
  return {
    plugins: [
      Userscript({
        fileName: 'x-com-userscript',
        entry: 'src/index.ts',
        header: {
          name,
          version,
          author,
          license,
          homepage,
          icon: 'https://abs.twimg.com/favicons/twitter.3.ico',
          match: ['*://twitter.com/*', '*://x.com/*']
        },
        server: {
          port: 3000
        }
      })
    ]
  }
})
