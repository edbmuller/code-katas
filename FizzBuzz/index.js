let start = document.querySelector('.start');
let refresh = document.querySelector('.refresh');
let output = document.querySelector('.output');

start.addEventListener( 'click', () => {
	fizzBuzz5();
});

refresh.addEventListener( 'click', () => {
	location.reload();
});

// Adiciona elemento html com o retorno da função
const print = ( templateStr ) =>  {
	let resultado = document.createElement('li');
	resultado.innerHTML = templateStr;
	output.appendChild(resultado);
}


// FizzBuzz Kata 05.05

const fizzBuzz5 = () => {
	for (let i = 0; i < 100; i++) {
		if ( i % 15 === 0 ) {
			print('FizzBuzz');
		} else if ( i % 5 === 0 ) {
			print('Buzz');
		} else if ( i % 3 === 0 ) {
			print('Fizz');
		} else {
			print(i);
		}		
	}
}















// FizzBuzz Kata 04.05 2min
const fizzBuzz4 = () => {

	for (let i = 0; i < 100; i++) {
		if ( i % 15 === 0 ) {
			print('FizzBuzz');
		} else if ( i % 5 === 0 ) {
			print('Buzz');
		} else if  ( i % 3 === 0 ) {
			print('Fizz');
		} else {
			print(i);
		}
	}
}


















// FizzBuzz Kata 01.05 2min

const fizzBuzz3 = () => {
	
	for (let i = 0; i < 100; i++) {
		if ( i % 15 === 0 ) {
			print( 'FizzBuzz' );
		} else if ( i % 5 === 0 ) {
			print( 'Buzz' );
		} else if ( i % 3 === 0 ) {
			print( 'Fizz' );
		} else {
			print( i );
		}
	}
}









// FizzBuzz Kata 30.05 4min
const fizzBuzz2 = () => {

	for (let i = 0; i < 100; i++) {
		if ( i % 15 == 0 )	{
			print('FizzBuzz');
		} else if ( i % 5 == 0 ) {
			print('Buzz');
		} else if ( i % 3 == 0 ) {
			print('Fizz');
		} else {
			print(i);
		}
	}
}

// FizzBuzz Kata 27.05 10min
const fizzBuzz1 = () => {
	for (let i = 0; i < 100; i++) {

		if( i % 15 == 0 ) {
			print(`FizzBuzz`);
		} else if ( i % 3 == 0 ) {
				print(`Fizz`);
		}  else if ( i % 15 == 0 ) {
				print(`Buzz`);
		} else {
			print(i);
		}

	}
}
