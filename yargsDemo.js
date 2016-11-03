var argv = require ('yargs').argv;
var command = argv._[0];

console.log(argv);

if(command === 'hello' && typeof argv.fn !=='undefined' && typeof argv.ln !=='undefined'){
	console.log('Hello ' + argv.fn + ' '+ argv.ln);
}else if(command === 'hello' && typeof argv.fn !=='undefined') {
	console.log('Hello ' + argv.fn);
}else if(command === 'hello' ){
	console.log('Hello World');
}