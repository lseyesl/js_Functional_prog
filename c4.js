var add = function(x){
	reutrn function(y){
		return x+y;
	}
}

var increment =add(1);
var addTen = add(10);
increment(2);
addTen(2);

//////////////
var curry = require('lodash').curry;
var match = curry(function(what,str){
	return str.match(what);
})

var replace = curry(function(what,replacement,str){
	return str.replace(what,replacement);
});

var filter = curry(function(f,ary){
	return ary.filter(f);
})

var map = curry(function(f,ary){
	return ary.map(f);
})

match(/\s+/g,"hello world");
match(/\s+/g)("hello world");

var hasSpaces = mathc(/\s/g);
hasSpaces("hello world");
hasSpaces("spaceless");
filter(hasSpaces,["tori_spelling","tori amos"]);
var findSpaces = filter(hasSpaces);
findSpaces(["tori_spelling","tori amos"]);

var noVowels = replace(/[aeiou]/ig);
var censored = noVowels('*');
censored('Chocelate Rain');
///////////////////////////

var getChildren = function(x){
	return x.childNodes;
}
var allTheChildren = map(getChildren);

//////////////////////////////////////////////////

