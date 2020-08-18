const nodeGzip = require('node-gzip');

(async function() {
    var gzippedValue = "";
    var abc = (await nodeGzip.ungzip(Buffer.from(String(gzippedValue), 'base64'))).toString()
    console.log(abc);
})();



