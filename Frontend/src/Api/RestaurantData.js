const http = require("https");

const options = {
    "method": "GET",
    "hostname": "resy.p.rapidapi.com",
    "port": null,
    "path": "/4/find?lat=37.788719679657554&long=-122.40057774847898&day=2021-02-14&party_size=2&offset=0",
    "headers": {
        "x-rapidapi-key": "",
        "x-rapidapi-host": "resy.p.rapidapi.com",
        "useQueryString": true
    }
};

const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();
