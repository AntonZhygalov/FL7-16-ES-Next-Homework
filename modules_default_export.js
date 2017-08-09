 var arg1 = process.argv[2];
 var arg2 = process.argv[3];

 import modulesDefault from './modules_default_export_math';
 console.log(modulesDefault.PI);
 console.log(modulesDefault.sqrt(+arg1));
 console.log(modulesDefault.square(+arg2));