var mqtt      = require('mqtt');
var clientid  = 'a:quickstart:testserver';
var topicsub  = 'iot-2/type/nodejsexample/id/aa00bb11cc99/evt/status/fmt/json';
var topicpub  = 'iot-2/type/nodejsexample/id/aa00bb11cc99/cmd/status/fmt/json';
var server    = 'mqtt://quickstart.messaging.internetofthings.ibmcloud.com';
var client    = mqtt.connect(server, {clientId: clientid});
  
client.subscribe(topicsub);

client.on("message", function(topic, payload) {
  console.log(payload.toString());
});
