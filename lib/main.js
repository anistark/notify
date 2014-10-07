var self = require("self");
var notification = require("notification-box").NotificationBox({
  'value': 'important-message',
  'label': 'You have been warned...',
  'priority': 'WARNING_HIGH',
  'image': self.data.url("icon-16.jpg"),
  'buttons': [{'label': "Gotcha",
              'onClick': function () { console.log("You clicked the important button!"); }}]
});
