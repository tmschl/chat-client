var Message = Backbone.Model.extend ({
  url: function() { return "https://api.parse.com/1/classes/messages" + this.get("objectId"); },
  deleteMessage: function() {
    this.destroy({
      beforeSend: headerSetter,
      contentType: "application/json"
    });
  }
});

var Messages = Backbone.Collection.extend({
  // return messages from parse API server
  model: Message,
  url: "https://api.parse.com/1/classes/messages",
  getstuff: function(){
    return this.fetch({
      beforeSend: headerSetter,
      contentType: "application/json"
    });
  },
  parse: function(response) {
    return response.results;
  }
});

