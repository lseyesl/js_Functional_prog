var Flock = function(n){
	this.seagulls = n;
}

Flock.prototype.conjoin = function(other){
	this.seagulls += other.seagulls;
	return this;
}

Flock.prototype.breed = function(other){
	this.seagulls = this.seagulls * other.seagulls;
	return this;
}

var flock_a = new Flock(4);
var flock_b = new Flock(2);
var flock_c = new Flock(0);

var result = flock_a.conjoin(flock_c).breed(flock_b).conjoin(flock_a.breed(fllock_b)).seagulls;

///////////////////////////////////////

var add = function(x,y){return x+y};
var multiply = function(x,y){return x*y};

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

var result = add(multiply(flock_b,add(flock_a,flock_c)),multiply(flock_a,flock_b));

add(add(x,y),z) == add(x,add(y,z));
add(x,y) == add(y,x);
add(x,0) == x;
multiply(x,add(y,z)) == add(multiply(x,y),multiply(x,z));

add(multiply(flock_b,add(flock_a,flock_c)),multiply(flock_a,flock_b));
add(multiply(flock_b,flock_a),multiply(flock_a,flock_b));
multiply(flock_b,add(flock_a,flock_a));
////////////////////////////////////////


