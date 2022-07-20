const React = require('react')

function error404(){
    return(
        <body>
        <h2>You went a stray away from the bread crumbs</h2>
        <img src="https://cdn.pixabay.com/photo/2016/10/18/18/45/bread-1750987_960_720.jpg"></img>
        <li><a href="/breads">Go home</a></li>
        </body>
    )   
}

module.exports = error404