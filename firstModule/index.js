 const modulo = require('./printName');
 const os = require('os');

modulo.printName('Jane');
modulo.lastName('Doe');

modulo.printName(os.type());
