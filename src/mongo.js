var axios = require('axios');
var data = JSON.stringify({
    "collection": "images",
    "database": "myFirstDatabase",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-nssgm/endpoint/data/beta/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': '<API_KEY>'
    },
    data : data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

https://data.mongodb-api.com/app/data-nssgm/endpoint/data/beta

curl --location --request POST 'https://data.mongodb-api.com/app/data-nssgm/endpoint/data/beta/action/findOne' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers: *' \
--header 'api-key: <API_KEY>' \
--data-raw '{
    "collection":"images",
    "database":"myFirstDatabase",
    "dataSource":"Cluster0",
    "projection": {"_id": 1}
}'
