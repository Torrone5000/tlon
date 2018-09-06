import React from "react";

class PostsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render = () => {
    return (
      <div className="posts-filters">
        <form>
          <div className="columns">
            <div className="column is-desktop">
              <div className="field is-horizontal">
                <div className="field-label">
                  <label></label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <select>
                      <option>#sogno</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-desktop">
              <div className="field is-horizontal">
                <div className="field-label">
                  <label></label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <select>
                      <option>#sogno</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-desktop">
              <div className="field is-horizontal">
                <div className="field-label">
                  <label></label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <select>
                      <option>#sogno</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default PostsFilter
