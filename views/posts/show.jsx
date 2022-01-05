const React = require('react')
const Def = require('../layouts/default')

function show (data) {
    console.log(data)
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
               {data.post.title}
              </div>
              <div className="col-sm-6">
                <h1>content</h1>
                
                <br />
                <h2>
                  author
                </h2>
                
              </div>
            </div>
            <hr />
            
          </main>
        </Def>
    )
}

module.exports = show