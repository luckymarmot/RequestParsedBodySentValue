var RequestParsedBodySentValue = function() {
	this.evaluate = function(context) {

		var exchange;
		if(this.req) {
			exchange = this.req.getLastExchange();
		} else {
			exchange = context.getCurrentRequest().getLastExchange();
		}

		
		var body = exchange.requestBody;

		var parsedBody = JSON.parse(body);
		var paths = this.key.split(".");

		paths.forEach(function(path) {
			parsedBody = parsedBody[path];
		});

		return parsedBody;
	}

	this.text = function(context) {
		if(this.req) {
			return this.req.name + " ➤ " + this.key;
		} else {
			return this.key;
		}
	}
}

RequestParsedBodySentValue.identifier = "com.luckymarmot.RequestParsedBodySentValue";

RequestParsedBodySentValue.title = "Request Parsed Body Sent Value";

RequestParsedBodySentValue.inputs = [
	InputField("req", "Source Request", "Request"),
	InputField("key", "JSON keypath", "String")
]

registerDynamicValueClass(RequestParsedBodySentValue);