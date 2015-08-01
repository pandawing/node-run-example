// Outline
// cd target-dir && npm install ../ && node target-dir/target-file.js && cd ..

//run-example
////=> ./example/example.js
//run-example target-dir
////=> ./target-dir/example.js
//run-example target-dir/target-file.js
////=> ./target-dir/target-file.js

// if there is no package.json, then create package.json and remove package.json
// if there is no target-file.js, create target-file.js. This include var packageName = require('packageName');
