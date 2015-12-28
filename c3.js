var xs = [1,2,3,4,5];
xs.slice(0,3);
xs.slice(0,3);
xs.slice(0,3);

xs.splice(0,3);
xs.splice(0,3);
xs.splice(0,3);

//////////////
var minimum = 21;
var checkAge = function(age){
	return age >= minimum;
}

var checkAge = function(age){
	var minimum = 21;
	return age >= minimum;
}

var immutableState = Object.freeze({
	minimum:21
})

//////////////

var toLowerCase = {"A":"a","B":"b"};
toLowerCase["A"];

var isPrime = {1:true,2:true,3:true,4:false,5:true};
isPrime[3];

/////////////
var squareNumber = memoize(function(x){return x*x});
squareNumber(4);
squareNumber(4);
squareNumber(5);
squareNumber(5);

var memoize = function(){
	var cache = {};
	return function(){
		var arg_str = JSON.stringify(arguments);
		cache[arg_str] = cache[arg_str] || f.apply(f,arguments);
		return cache[arg_str];
	}
}


//////////////////

var pureHttpCall = memoize(function(url,params){
	return function(){return $.getJSON(url,params);}
})

/////////////////
var signUp = function(attrs) {
	var user = saveUser(attrs);
	welcomUser(user);
}

var signUp = function(Db,Email,attrs){
	return function(){
		var user = saveUser(Db,attrs);
		welcomUser(Email,user);
	}
}

////////////////////
var decrementHP = function(player){
	return player.set("hp",player.hp - 1);
}

var isSameTeam = function(player1,player2){
	return player1.team === player2.team;
}

var punch = function(player,target){
	if(isSameTeam(player,target)){
		return target;
	}else{
		return decrementHP(target);
	}
}

var jobe = Immutable.Map({name:"Jobe",hp:20,team:"red"});
var michael = Immutable.Map({name:"Michael",hp:20,team:"green"});

punch(jobe,michael);


