const express = require("express")
const app = express()

// set to read a request from JSON format

app.use(express.json())
// JSON is String

app.post("/sort", (request, response) => {
    let data = request.body.data

    data.sort((a, b) => {
        return a.umur - b.umur;
    });
    
    return response.json({
        data : data
    })

})

app.listen(8000, ()=>{
    console.log('Server run at port 8000');
})
