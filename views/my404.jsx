const React = require('react')
const Default = require('./layouts/Default')

function my404() {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
    return (
        <Default>
            <h3>404</h3>
            <li><a href="/">Go home</a></li>
        </Default>
    )
}

module.exports = my404