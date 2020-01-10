const { createWorker } = require('tesseract.js');

const worker = createWorker();
(async () => {
  const startT = Date.now()
  await worker.load();
  await worker.loadLanguage('eng+chi_sim');
  await worker.initialize('eng');
  const res = await worker.recognize('./test.jpg');
  console.log('data:' + res.data.text + '   usetime:' + (Date.now() - startT)/1000 + 's');
  await worker.terminate();
})();