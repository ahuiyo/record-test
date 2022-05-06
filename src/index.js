import './style';
import App from './components/app';
import { loadScript } from './utils/util'

(async () => {

  if (window.location.host !== 'i.ai.mi.com') {
    await loadScript({ url: 'https://unpkg.com/vconsole@latest/dist/vconsole.min.js' })
    window.vConsole = new window.VConsole()
  }
})()

export default App;
