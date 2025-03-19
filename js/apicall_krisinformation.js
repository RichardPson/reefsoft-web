async function getfromKrisinformation() {
	const request = new Request("https://api.krisinformation.se/v3/testvmas");
	const response = await fetch(request);
	const news = await response.json();
	console.log(news);

	return news;
}

export { getfromKrisinformation };
