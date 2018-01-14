import React from 'react'

export default React.createClass({
  render() {
    return (
	<div>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\n.card {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    width: auto;\n}\n\n.card:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.container {\n    padding: 2px 16px;\n}\n" }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n}\n\n/* Create two equal columns that floats next to each other */\n.column {\n    float: left;\n    width: 50%;\n    padding: 10px;\n    height: 100vh; /* Should be removed. Only for demonstration */\n}\n\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.left{\n    width: 30% !important;\n}\n.right{\n    width: 70% !important;\n}\n" }} />
        <h2>Home Page</h2>
		<div>
		<img src="http://www.menucool.com/slider/prod/image-slider-2.jpg" alt="Avatar" style={{width: '100%'}} />
		</div>
        <div className="row">
          <div className="column left" style={{backgroundColor: '#fafafa'}}>
			<div className="card">
			  <img src="https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAkWAAAAJDViOGY5Yjg1LTkzNDItNDQ3Ni1iZWIzLTg5NThhNTFkZDI4Yg.png" alt="Avatar" style={{width: '100%'}} />
			  <div className="container">
				<h4><b>Pratap</b></h4> 
				<p>Computer &amp; Scientist</p> 
			  </div>
			</div>
          </div>
          <div className="column right" style={{backgroundColor: '#fafafa'}}>
            <h2>Our Home Page</h2>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
			Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
			Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
			Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
			Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
			<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
			Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
			Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
			Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
			Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
        </div>
      </div>
	)
  }
})
