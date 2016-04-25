var RequestParsedBodySentValue = function() {
	this.evaluate = function() {
		var exchange = this.req.getLastExchange();
		var body = exchange.requestBody;

		var parsedBody = JSON.parse(body);
		var paths = this.key.split(".");

		paths.forEach(function(path) {
			parsedBody = parsedBody[path];
		});

		return parsedBody;
	}

	this.text = function(context) {
		return this.req.name + " ➤ " + this.key;
	}
}

RequestParsedBodySentValue.identifier = "com.luckymarmot.RequestParsedBodySentValue";

RequestParsedBodySentValue.title = "Request Parsed Body Sent Value";

RequestParsedBodySentValue.inputs = [
	InputField("req", "Source Request", "Request"),
	InputField("key", "JSON keypath", "String")
]

registerDynamicValueClass(RequestParsedBodySentValue);