import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
	  <div>
        <style dangerouslySetInnerHTML={{__html: "\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n}\n\nli {\n    float: left;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover:not(.active) {\n    background-color: #111;\n}\n\n.active {\n    background-color: #4CAF50;\n}\n" }} />
        <ul>
		  <li><Link to="/home" className="active">Home</Link> </li>
          <li><Link to="/about" className="active">About</Link></li>
          <li><Link to="/repos" className="active">Repos</Link> </li>
          <li><Link to="/contact" className="active">Contact</Link> </li>
          
        </ul>
		{this.props.children}
		<Content/>
		<Footer/>
      </div>
	  
    )
  }
})


class Footer extends React.Component{
  render() {
    return (
	  <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\nfooter {\n    position: fixed;\n    bottom: 0;\n    width: 100vw;\n    padding: 1em;\n    color: white;\n    background-color: black;\n    clear: left;\n    text-align: center;\n}\n" }} />
        <footer>Copyright ©</footer>
      </div>
    )
  }
}

class Content extends React.Component{
  render() {
    return (
	  <div>
		<h1>Select any option from menu to navigate through pages.</h1>
      </div>
    )
  }
}