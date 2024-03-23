import { getfromKrisinformation } from "./apicall_krisinformation.js";

async function createApp() {
	const placement = document.getElementById("app");
	const tableResults = document.createElement("table");

	const thID = document.createElement("th");
	const thHeadline = document.createElement("th");
	const thPublished = document.createElement("th");
	const thUpdated = document.createElement("th");
	const thPushMessage = document.createElement("th");

	thID.textContent = "ID";
	thHeadline.textContent = "Headline";
	thPublished.textContent = "Published";
	thUpdated.textContent = "Updated";
	thPushMessage.textContent = "Message";

	tableResults.appendChild(thID);
	tableResults.appendChild(thHeadline);
	tableResults.appendChild(thPublished);
	tableResults.appendChild(thUpdated);
	tableResults.appendChild(thPushMessage);

	const newsB = await getfromKrisinformation();
	for (let i = 0; i < newsB.length; i++) {
		const tr = document.createElement("tr");
		const tdID = document.createElement("td");
		const tdHeadline = document.createElement("td");
		const tdPublished = document.createElement("td");
		const tdUpdated = document.createElement("td");
		const tdPushMessage = document.createElement("td");

		tableResults.appendChild(tr);
		tableResults.appendChild(tdID);
		tableResults.appendChild(tdHeadline);
		tableResults.appendChild(tdPublished);
		tableResults.appendChild(tdUpdated);
		tableResults.appendChild(tdPushMessage);

		tdID.textContent = newsB[i].Identifier;
		tdHeadline.textContent = newsB[i].Headline;
		tdPublished.textContent = newsB[i].Published;
		tdUpdated.textContent = newsB[i].Updated;
		tdPushMessage.textContent = newsB[i].PushMessage;
	}
	placement.appendChild(tableResults);

	console.log(newsB.length);
}
export { createApp };
