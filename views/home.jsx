const React = require('react')
const Def = require('./layouts/default')

function home () {
    return (
        <Def>
            <main>
                <h1>Sample Blog</h1>
                <div>
                    <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
                </div>
                <a href="/posts">
                    <button className="btn-primary">All Posts</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home