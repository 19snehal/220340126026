var fs = require('fs')
var mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker:1883/')

var payloadFile

fs.readFile("./payload.json", function(err, data) {
    if(err) {
        console.log("File does not exits!")
    }
    else {
        payloadFile = data
    }
})


client.on("connect", function(res, err) {
    if(err) {
        console.log(err)
    } else {
        console.log("Successfully connected to broker")
        function pub() {
            client.publish("test", payloadFile)
            console.log("Published")
        }
        setInterval(pub, 5000)
    }
})
