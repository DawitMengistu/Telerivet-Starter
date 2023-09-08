const API_KEY = "";
const PROJECT_ID = "";
var telerivet = require('telerivet');

function sendSingleMessage(phone, message) {

// CHl9p_avxkvoYGO9rtfmho4VLt4MXfBLZIra
var tr = new telerivet.API(API_KEY);
var project = tr.initProjectById(PROJECT_ID);

project.sendMessage({
    content: message, 
    to_number: phone
}, function(err, message) {
    console.log(message);
});
}


function sendGroupMessage() {
var tr = new telerivet.API(API_KEY);
var project = tr.initProjectById(PROJECT_ID);

project.sendBroadcast({
    content: "hello [[contact.name]]!", 
    to_numbers: ["+251903035284", "+251903035284", "+251903035284"], 
    replace_variables: true
},function(err, broadcast) {    
    console.log(err, broadcast)
});
}

async function checkGatewayStatus() {
    const client = new telerivet.API(API_KEY);

    client.getGateways({sort_field: 'name'}, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        const gateways = result.data;
        
        console.log('Available SMS Gateways:');
        gateways.forEach(gateway => {
          console.log(`- ${gateway.name} (${gateway.type})`);
        });
      }
    });

  }
sendSingleMessage("+123456789", "Hello World");
