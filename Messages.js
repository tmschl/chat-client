var Messages = Backbone.Collection.extend({
  // return messages from parse API server
  model: Message,
  url: "https://api.parse.com/1/classes/messages",
  parse: function(response) {
    return response.results;
  }
});


var Message = Backbone.Model.extend ({
  url: function() { return "https://api.parse.com/1/classes/messages" + this.get("objectId"); },
  deleteMessage: function() {
    this.destroy({
      beforeSend: headerSetter,
      contentType: "application/json"
    });
  }
});
