import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Browser Not Supported Service Worker');
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service Worker Registered!');
  } catch (error) {
    console.log('Failed to Register Service Worker', error);
  }
};

export default swRegister;
