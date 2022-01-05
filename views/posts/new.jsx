const React = require('react')
const Def = require('../layouts/default')

function new_form (data) {
    console.log(data)
    return (
        <Def>
          <main>
            <h1>Add a New Post</h1>
            <form method="POST" action="/posts">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="title">Post Title</label>
                  <input className="form-control" id="title" name="title" required />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="content">Content</label>
                  <input className="form-control" id="content" name="content"  required />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="author">Author</label>
                  <input className="form-control" id="author" name="author" />
                </div>
              <input className="btn btn-primary" type="submit" value="Add Place" />
              </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form