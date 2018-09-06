import React from "react";
import { Link } from 'gatsby'
import MainSearchInput from "../components/main_search";

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      searchBarShown: false,
      menuItems : [
        {
          title: 'Eventi',
          url: '/eventi'
        },
        {
          title: 'Prime',
          url: '/prime'
        },
        {
          title: 'Podcast',
          url: '/podcast'
        },
        {
          title: 'Video',
          url: '/video'
        },
        {
          title: 'Spazi',
          url: '/spazi'
        },
        {
          title: 'Supportaci',
          url: '/supportaci'
        },
        {
          title: 'Newsletter',
          url: '/newsletter'
        },
        {
          title: 'Area Utente',
          url: '/area-utente'
        }
      ]
    }
  }

  showSearch = () => {
    this.setState({ searchBarShown: true });
  }

  hideSearch = () => {
    this.setState({ searchBarShown: false });
  }
  render() {
    return (
      <div className="navbar-end">
        {this.state.menuItems.map((item) =>
          <Link
            key={item.title}
            to={item.url}
            className="navbar-item"
            title={item.title}
          >
          {item.title}

          </Link>
        )}
        <button className="navbar-item" onClick={this.showSearch}>Cerca</button>
      
        <MainSearchInput shown={this.state.searchBarShown} buttonOnClick={this.hideSearch}/>
      </div>
    )
  }
}

export default Navbar
