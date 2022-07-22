const { request, response } = require("express");
const express = require("express");

app.use(express.json())
app.post("/siswa", (request,response)=>{

    let data=[
        {nis: 1, nama: "Ram", alamat: "Tokyo"},
        {nis: 2, nama: "Rem", alamat: "Tokyo"},
        {nis: 3, nama: "Reina", alamat: "Bandung"},
        {nis: 4, nama: "Kaguya", alamat: "Bogor"},
        {nis: 5, nama: "Nino", alamat: "Surabaya"},
        {nis: 6, nama: "Miku", alamat: "Solo"},
        {nis: 7, nama: "Itsuki", alamat: "Jakarta"},
        {nis: 8, nama: "Tyara", alamat: "Malang"},
        {nis: 9, nama: "Ayaka", alamat: "Isekai"},
        {nis: 10, nama: "Ichigo", alamat: "Surabaya"}
    
 ]

 let hasil= []
 let jumlah= 0,
})
