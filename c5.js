var compose = function(f,g) {
	return function(x){
		return f(g(x));
	}
}

/////////////
var toUpperCase = function(x) {
	return x.toUpperCase();
}

var exclaim = function(x) {
	return x + '!';
}

var shout = compose(exclain,toUpperCase);

shout("send in the clowns");

////////////////////////

var head = function(x) {
	return x[0];
}

var reverse = reduce(function(acc,x){
	return [x].concat(acc);
},[]);

var last = compose(head,reverse);
lase(['jumpkick','roundhouse','uppercut']);


///////////////////////
var associative = compose(f,compose(g,h)) == compose(compose(f,g),h);


compose(toUpperCase,compose(head,reverse));
compose(compose(toUpperCase,head),reverse);


///////////////////////
var lastUpper = compose(toUpperCase,head,reverse);
laseUpper(['jumpkick','roundhouse','uppercut']);
var loudLastUpper = compose(exclaim,toUpperCase,head,reverse);
loudLastUpper(['jumpkick','roundhouse','uppercut']);
