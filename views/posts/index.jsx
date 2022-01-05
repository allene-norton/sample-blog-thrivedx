const React = require('react')
const Def = require('../layouts/default.jsx')

function index (data) {
    let postsFormatted = data.posts.map((post) => {
      return (
        <div className="col-sm-6">
          <h2>
            <a href={`/posts/${post.id}`} >
              {post.title}
            </a>
          </h2>
          {/* <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} />
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p> */}
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Sample Blog</h1>
              <div className="row">
                {postsFormatted}
              </div>
          </main>
      </Def>
    )
  }

module.exports = index