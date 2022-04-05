
let login = prompt('enter name', '');
let message=(login == 'Employee')? 'Hello': (login == 'Director')?  'Greetings':(login == '')?'No login':'';
alert(message)