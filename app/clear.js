const fs = require("fs");
var files = fs.readdirSync(__dirname);
files.forEach(function(e, i){
  if (e.endsWith(".dll") || e.endsWith(".rst") || e.endsWith(".exe") || e == "COPYING" || e == "COPYING.LIB" || e == "VERSION") {
    fs.unlinkSync(e);
  } else {
    if (fs.statSync(e).isDirectory()) {
      fs.rmdirSync(e, {recursive: true});
    }
  }
})
