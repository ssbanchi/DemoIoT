var mqtt     = require('mqtt');
var clientid = 'd:quickstart:nodejsexample:aa00bb11cc99';  //d:<org>:<tipodevice>:<iddevice>
var topicpub = 'iot-2/evt/status/fmt/json';
var topicsub = 'iot-2/cmd/status/fmt/json';
var server   = 'mqtt://quickstart.messaging.internetofthings.ibmcloud.com';
var client   = mqtt.connect(server, {clientId: clientid});


function start() {
  setTimeout(start, 1000);
  var temperature = Math.random() * 2 + 20;
  var jsonData    = {'d':{'Garduino': 'elevator sensor', 'usage temperature': temperature}};
  var payload     = JSON.stringify(jsonData);
  console.log(payload);
  client.publish(topicpub, payload); 
}

start();
