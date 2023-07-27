import { el, text, waitElement } from '@zero-dependency/dom'

import { FONT_FAMILY, FONT_URL } from './constants.js'

async function bootstrap(): Promise<void> {
  const fontBufferArray = await loadFont()
  const fontFace = new FontFace(FONT_FAMILY, fontBufferArray)
  document.fonts.add(fontFace)

  const logoElement = await waitElement<HTMLElement>({
    selector: '[href="/home"]'
  })

  patchLogo(logoElement)
}

function loadFont(): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url: FONT_URL,
      responseType: 'arraybuffer',
      onload: (response) => {
        resolve(response.response)
      },
      onerror: reject
    })
  })
}

function patchLogo(logoElement: HTMLElement): void {
  const logoDiv = logoElement.querySelector<HTMLElement>('a > div')!
  logoDiv.remove()

  const logoText = el(
    'div',
    {
      style: {
        color: '#fff',
        fontFamily: `"${FONT_FAMILY}"`,
        fontSize: '4rem'
      }
    },
    el(
      'b',
      {
        style: {
          fontSize: '5rem',
          marginRight: '10px'
        }
      },
      'X'
    ),
    text('YETA')
  )

  logoElement.style.backgroundColor = 'transparent'
  logoElement.style.marginTop = '1rem'
  logoElement.style.marginLeft = '1rem'
  logoElement.style.alignItems = 'center'
  logoElement.style.flexFlow = 'row'
  logoElement.append(logoText)
}

bootstrap()
