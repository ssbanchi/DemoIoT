/*
API Key 	x-xxxxxx-xxxxxxxxxx
Authentication Token 	xxxxxxx-xxxxxxxx
app id a-xxxxxx-xxxxxxxxxx 

publishes --> iot-2/type/<type-id>/id/<device-id>/cmd/<cmd-id>/fmt/<format-id>
subscribes --> iot-2/type/<type-id>/id/<device-id>/evt/<cmd-id>/fmt/<format-id>

*/

var mqtt          = require('mqtt');
var clientid      = 'a:xxxxxx:appid';     //a:<orgid>:<appid>
var username      = 'a-xxxxxx-or8txxeeby';  //bluemix app key
var password      = 'xxxxxxxxxxxxxxxxx';       //bluemix app token
var topic         = 'iot-2/type/+/id/+/evt/+/fmt/json';
var server        = 'mqtt://xxxxxx.messaging.internetofthings.ibmcloud.com'; //mqtt://<org-id>.messaging.internetofthings.ibmcloud.com
var client        = mqtt.connect(server, { clientId: clientid, username: username, password: password});
  
client.subscribe(topic);
console.log('subscribed: ' + topic);
console.log('listen...');

client.on("message", function(topic, payload) {
  console.log(payload.toString());
});

