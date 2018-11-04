"use strict"
const axios = require('axios');

module.exports = async (context, callback) => {
    const result = await axios.get('http://api.open-notify.org/astros.json');
    const data = result.data;
    const astro = data[Math.floor(Math.random() * data.length) + 1]

    callback(undefined, {
        status: "done",
        message: `${astro.name} is in space`
    });
}