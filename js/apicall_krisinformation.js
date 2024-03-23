async function getfromKrisinformation() {
	const request = new Request("https://api.krisinformation.se/v3/news");
	const response = await fetch(request);
	const news = await response.json();
	/* console.log(news[0].PushMessage); */

	return news;
}

export { getfromKrisinformation };