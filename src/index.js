const { GET , POST } = require('./methods');

function smartAxios(path, args) {
	const execute = selectVerb(args);
	execute(path, args);
}

function selectVerb({type="default"}){
	
	verbs = {
		'GET':  (path, args) => GET(path, args),
		'POST': (path, args) => POST(path, args),
		'default': (_, __) => console.error('You need to set a value for type property.'),
	}

	return verbs[type] || verbs.default;
}

module.exports = smartAxios;
