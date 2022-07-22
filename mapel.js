const express = require("express")
const app = express()

// set to read a request from JSON format

app.use(express.json())
// JSON is String

app.post("/mapel", (request, response) => {
     let nilai= request.body.nilai
    let lulus = [], tidaklulus = []
    let nilai_math = 0, nilai_english = 0

    for (let i = 0; i < nilai.length; i++) {
        nilai_math += nilai[i].Math
    }
    nilai_math /= nilai.length

    for (let i = 0; i < nilai.length; i++) {
        nilai_english += nilai[i].English
    }
    nilai_english /= nilai.length

    let avgTotal = (nilai_math + nilai_english)/2

    for (let i = 0; i < nilai.length; i++) {
        // untuk menghitung lulus tidaknya seorang murid
        let avgSiswa = (nilai[i].Math + nilai[i].English)/2
        if (avgSiswa >= avgTotal) {
            lulus.push(
                nilai[i].nama
            )
            
        } else if (avgSiswa < avgTotal){
            tidaklulus.push(
                nilai[i].nama
            )
        }
    }

    return response.json({
        lulus : lulus,
        tidak_lulus : tidaklulus,
        rata_rata : avgTotal
    })

})

app.listen(8000, () => {
    console.log('Server run at port 8000');
})