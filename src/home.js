const homePage = () => {
	const container = document.querySelector('#container');
	container.innerHTML = `
  <div id="home-container">
        <div><h1>WELCOME TO YOUR FAVORITE RESTAURANT</h1></div>
        <div><h2>Please take a look at our menu to see our offerings.</h2></div>
      </div>
  `;
	// let buttons = document.querySelectorAll('.menu-item');

	// let setClass = () => {
	// 	buttons.forEach((button) => {
	// 		button.classList.remove('selected');
	// 	});
	// };
	// setClass();
	const homeBtn = document.getElementById('home-btn');
	homeBtn.classList.add('selected');
};

export { homePage };
