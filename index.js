// load library express
const { response, request } = require("express")
const e = require("express")
let express = require("express")
const { status } = require("express/lib/response")

// inisiasi object baru dari express
let app =  express()

// endpoint pertama kita
app.get("/test", (request, response)=>{
    let kata = 'konnichiwa >//<'
    return response.json({
        message:kata
    })
})

// endpoint kedua hitung bmi
// request data, tinggi, berat
// response data nilai bmi dan  status bmi

// setting agar dapat membaca data request dg
// format json
app.use(express.json())

app.post("/bmi", (request, response) =>{
    // tampung data tinggi dan berat
    let tinggi = request.body.tinggi
    let berat =  request.body.berat

    let bmi = berat / (tinggi * tinggi)

    let status = null

    if (bmi < 18.5){
        status = `gizi buruk`
    }else if(bmi >= 18.5 && bmi < 25){
            status = `ideal`
    }else if(bmi >= 25 && bmi <30){
        status = `kelebihan berat badan`
    }else if(bmi >=30){
        status = `obesitas`
    } 

    return response.json({
        nilai:bmi,
        status:status
    })
})

app.listen(8000, () =>{
    console.log('Server run on port 8000');
})

// endpoint ketiga (request wuth GET Method)
    app.get("/profile/:nama/:usia", (request, response) => {
    // tampung data yang akan dikirimkan
    let nama = request.params.nama
    let usia = request.params.usia

    let status = null
    if (usia < 10) {
        status = `Bocil`
    } else if (usia >= 10 && usia <= 20) {
        status = `Remaja`
    } else if (usia > 20 && usia < 50) {
        status = `Dewasa`
    } else if (usia >= 50){
        status = `Tua`
    }

    return response.json({
        message: `Saya ${nama} adalah ${status}`
    })
})