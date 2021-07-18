const mqtt = require('mqtt');
const faker = require('faker');

require('dotenv').config();
const client = mqtt.connect(process.env.MQTT_BROKER);

client.on('connect', () => {
    console.log('Connected....');

    while (true) {
        const location = {
            lat: faker.address.latitude(),
            long: faker.address.longitude()
        }
        console.log(location);
        client.publish('transport/location', JSON.stringify(location))
    }
});
