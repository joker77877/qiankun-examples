import { loadMicroApp } from '../../es';

let app;

function mount() {

}

function unmount() {
  app.unmount();
}

document.querySelector('#mount').addEventListener('click', mount);
document.querySelector('#unmount').addEventListener('click', unmount);

loadMicroApp({ name: 'vue', entry: '//localhost:7101', container: '#vue' });
loadMicroApp(
  { name: 'react15@123', entry: '//localhost:7102', container: '#react15' },
  { sandbox: { experimentalStyleIsolation: true } },
)
loadMicroApp(
  { name: 'react15@234', entry: '//localhost:7102', container: '#react15' },
  { sandbox: { experimentalStyleIsolation: true } },
)
