var hi = function(name){
	return "Hi "+ name;
};

var greeting = function(name){
	return hi(name);
}

hi;
hi("jonas");

var greeting = hi;
greeting("times");

var getServerStuff = function(callback){
	return ajaxCall(function(json){
		return callback(json);
	})
}

var getServerStuff = ajaxCall;

return ajaxCall(function(json){
	return callback(json);
})

return ajaxCall(callback);

var getServerStuff = function(callback){
	return ajaxCall(callback);
}

var getServerStuff = ajaxCall;


///////////////////////////////////

var BlogController = (function(){
	var index = function(posts){
		return Views.index(posts);
	}
	var show = function(post){
		return Views.show(post);
	}
	var create = function(attrs){
		return Db.create(attrs);
	}
	var update = function(post,attr){
		return Db.update(post,attrs);
	}
	var destroy = function(post){
		return Db.destroy(post);
	}
	return {index:index,show:show,create:create,update:update,destroy:destroy};
})();


var BlogController = {index:Views.index,show:Views.show,create:Db.create,update:Db.update,destroy:Db.destroy};

///////////////////////////
httpGet('/post/2',function(json){
	return renderPost(json);
})

httpGet('/post/2',function(json,err){
	return renderPost(json,err);
})

httpGet('/post/2',renderPost);

////////////////////////////
var validArticles = function(articles){
	return articles.filter(function(article){
		return article !== null && article !== undefined;
	})
}

var compact = function(xs){
	return xs.filter(function(x){
		return x!==null && x!==undefined;
	})
}

///////////////////////////
var fs = require('fs');
fs.readFile('freaky_friday.txt',Db.save);
fs.readFile('freaky_friday.txt',Db.save.bind(Db));

