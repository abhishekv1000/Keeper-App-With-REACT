import React from "react"

var today = new Date()

var year = today.getFullYear()

function Footer(){
    return <footer>
        <h1>@copyright {year} </h1>
    </footer>
}

export default Footer 