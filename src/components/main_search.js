import React from "react";

class MainSearchInput extends React.Component {
  // constructor() {
  //   super()
  //   this.state = { hidden: false }
  // }

  render() {
    return (
      <div id="main_search_input" className={"main-search " + (this.props.shown ? '' : 'is-invisible') } >
        <input className="main-search__input" type="search" placeholder="Cerca Qui per parola o Argomento"/>
        <button className="modal-close is-large main-search__close" aria-label="close" onClick={this.props.buttonOnClick}></button>
      </div>
    )
  }
}

export default MainSearchInput
