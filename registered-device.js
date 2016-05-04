
/*

Organization ID xxxxxx
Device Type deviceType
Device ID device1
Authentication Method token
Authentication Token xxxxxxxxxxxxxxx

publishes --> iot-2/type/<type-id>/id/<device-id>/cmd/<cmd-id>/fmt/<format-id>
subscribes --> iot-2/type/<type-id>/id/<device-id>/evt/<cmd-id>/fmt/<format-id>

*/


var mqtt     = require('mqtt');
var clientid = 'd:xxxxx:deviceType:device1';  //d:<org>:<tipodevice>:<iddevice>
var username = 'use-token-auth';         
var password = 'xxxxxxxxxxxxxxx';     //<auth-token>
var topic    = 'iot-2/evt/status/fmt/json'; //iot-2/evt/<tipoevento>/fmt/json
var server   = 'mqtt://xxxxx.messaging.internetofthings.ibmcloud.com';
var client   = mqtt.connect(server, { clientId: clientid, username: username, password: password});
  
function start() {
  setTimeout(start, 1000);
  var temperature = Math.random() * 2 + 20;
  //limite 4008Kb <---
  var jsonData    = {'d':{'myName': 'NodeJS Client', 'temperature': temperature}};
  var payload     = JSON.stringify(jsonData);
  console.log(payload);
  console.log('sent: ' + Buffer.byteLength(JSON.stringify(payload), 'utf8') + ' bytes');
  client.publish(topic, payload); 
}

start();