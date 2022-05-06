export const loadScript = ({ url, integrity = '' }) => new Promise(resolve => {
  const head = document.getElementsByTagName('head')[0]
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.crossorigin = 'anonymous'
  script.integrity = integrity
  if (script.readyState) {
    // IE
    script.onreadystatechange = () => {
      if (this.readyState === 'complete' || script.readyState === 'loaded') {
        script.onreadystatechange = null
        resolve()
      }
    }
  } else {
    // 其他浏览器
    script.onload = () => resolve()
  }
  script.src = url
  head.appendChild(script)
})