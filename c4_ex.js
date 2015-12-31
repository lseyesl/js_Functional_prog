var _ = require('ramda');
var should = require('should');
var words = function(str){
	return _.split(' ',str);
}
var _words = _.curry(function(char,str){
	return _.split(char,str);
})

var w1= words('hello world');
var _w1 = _words(' ','hello world');
describe('words',function(){
	it("w1 == _w1",function(){
		console.log(_w1,w1);
		_w1 == w1;
	})
	
	it("new fn split // of string ",function(){
		_words('/')('usr/www') == ['usr','www'];
	})
})

var sentences = _.curry(function(fn,arr){
	return _.map(fn,arr);
})
describe('new words',function(){
	it('new words is correct',function(){
		sentences(_words(' '))(['a b','c d']) == [['a','b'],['c','d']];
	})
})

var filterQs = funtion(xs){
	return _.filter(function(x){return match(/q/i,x)},xs);
}

