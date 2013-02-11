var MessageListView = Backbone.View.extend({

  render: function(){
    var message = data.results[i].text;
    var username = data.results[i].username;
    var textdiv = $('<div/>').text(message).html();
    $('#main').append("<div data-id='"+data.results[i].objectId+"' >" + username + ': ' + textdiv + '</div>');
  }

});