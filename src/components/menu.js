import React, { Component } from 'react';

import '../style/style.scss';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
    };
  }

  showMenu = (event) => {
    event.preventDefault();
    this.setState({displayMenu:true}, () => {
      document.addEventListener('click', this.hideMenu);
    });
  }

  hideMenu = () => {
    this.setState({displayMenu: false}, () => {
      document.removeEventListener('click', this.hideMenu);
    });
  }


  render() {
    return (

      <div  className="dropdown" style = {{background:"red",width:"200px"}} >
        <div className="button" onClick={this.showMenu}> Sort By </div>

          { this.state.displayMenu ? (
          <ul>
            <li><a className="active" href="#Create Page">{this.props.keyList}</a></li>
            <li>Location</li>
            <li>Year</li>
            <li>Male/Female/Both</li>
          </ul>
        ):
        (
          null
        )
        }

    </div>
      
    );
  }
}