const homePage = () => {
	const container = document.querySelector('#container');
	container.innerHTML = `
  <div id="home-container">
        <div><h1>WELCOME TO YOUR FAVORITE RESTAURANT</h1></div>
        <div><h2>Please take a look at our menu to see our offerings.</h2></div>
      </div>
  `;
};

export { homePage };
