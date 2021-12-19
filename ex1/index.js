// var QRCode = require("qrcode")

// QRCode.toString('I am a pony!',{type:'terminal'},function (err,url){
//  console.log(url);
// })

// commander

var { Command } = require('commander');
var program = new Command()

program.version('0.0.1');

// FIRST
// program
//     .option('-d,--debug','output extra debugging')
//     .option('-s, --small','small pizza size')
//     .option('-p, --pizza-type <type>','flavour of pizza');

//     program.parse(process.argv);

// second

//     const options = program.opts();
//     if (options.debug) console.log(options);
//     console.log('pizza details:');
//     if(options.small)console.log('-small pizza size');
//     if(options.pizzaType) console.log(`-${options.pizzaType}`);

// third


// program.argument("<username>","user login details")
//        .argument("[password]","password for usser, if needed","default")
//        .action(function(username,password){
//         console.log("username",username);
//         console.log("password",password);
//        })

// fourth

// program.argument("<name>","name to print")
// .argument("[number]","number of times to print",1)
// .action(function(name,number){
//  for(var i= 0;i<number;i++){
//   console.log(name);
//  }
// })
//        program.parse(process.argv)

program
  .argument('<name>', 'name to QR')
  .action(function (name,output) {
    var QRCode = require('qrcode')

    QRCode.toString(name, function (err, url) {
      console.log(url)
    })
    
  })
program.parse(process.argv)