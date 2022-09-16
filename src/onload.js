const onLoad = () => {
	const content = document.querySelector('#content');
	content.innerHTML = `
  <div id="menu">
  <div id="home-btn"><h2 class="menu-item">Home</h2></div>
  <div id="contact-btn"><h2 class="menu-item">Contact Us</h2></div>
  <div id="menu-btn"><h2 class="menu-item">Menu</h2></div>
</div>
<div id="container"></div>
<div id="footer">
<p>Background Photo by <a href="https://unsplash.com/@foodiesfeed?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jakub Kapusnak</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
</div>
  `;
};

export { onLoad };
