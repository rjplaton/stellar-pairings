let ccKey = ''
let btcPrice = 147346;
let ethPrice = 2740;
let ltcPrice = 1173;
let usdPrice = 13;

let xmlRequest = new XMLHttpRequest();
//xmlRequest.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=XLM&' + 'api_key' + ccKey, true);
xmlRequest.open('GET', 'XLMprice.json', true);


//consider an array/dict for btc, ltc, etc
xmlRequest.onload = function() {
	let data = JSON.parse(this.response)
 	if (xmlRequest.status != 200) { // analyze HTTP status of the response
    	console.log(`Error ${xmlRequest.status}: ${xmlRequest.statusText}`); // e.g. 404: Not Found
  		console.log(data.XLM)
  		let btcPrice = data.XLM;
  	} else { // show the result
    	console.log(`Done, got ${xmlRequest.response.length} bytes`); // responseText is the server
  	}
};

xmlRequest.send();


console.log(btcPrice);


//render function
//array of currencies
currencies = [
	{
	name:'Bitcoin',
	abrev: 'btc',
	price: 150000,
	},
	{
	name: 'US Dollar',
	abrev: 'usd',
	price: 13,
	},
]
//pseudocode for future checkboxes to add/remove barChart-rows
function test() {

	// Fetch the div from the page
    let barChartDiv = document.querySelector('.BarChart');
    barChartDiv.innerHTML = '';

	for (let currency of currencies) {
		//get the values from array of currencies
		let currencyName = currency.name;
		let xlmValue = currency.price;
		let currencyAbrev = currency.abrev;
		
		//create a bar div for the currency
		let newRowDiv = document.createElement('div');
		newRowDiv.classList.add('BarChart-row');
		
		let newBarDescDiv = document.createElement('div');
		newBarDescDiv.classList.add('BarChart-rowdesc');
		newBarDescDiv.textContent = '1 ' + currencyName + ' (' + currencyAbrev.toUpperCase() + ')';

		let newBarDiv = document.createElement('div');
		newBarDiv.classList.add('BarChart-bar');
		newBarDiv.id = currencyAbrev + 'bar';
		newBarDiv.style.width = 500 + 'px';

		//add the divs to the page
		barChartDiv.appendChild(newRowDiv);
		newRowDiv.appendChild(newBarDescDiv);
		newRowDiv.appendChild(newBarDiv);

		console.log(currencyName + 'bar created.');
	};
};



function barClick(clickedID) {
	console.log(clickedID)
	if (clickedID === 'btcBar') {
		alert('1 BTC is equal to '+btcPrice+' XLM'+'\n or '+'1 XLM is equal to '+1/btcPrice+' BTC');
	} else if (clickedID === 'ethBar') {
		alert('1 ETH is equal to '+ethPrice+' XLM'+'\n or '+'1 XLM is equal to '+1/ethPrice+' ETH');
	} else if (clickedID === 'ltcBar') {
		alert('1 LTC is equal to '+ltcPrice+' XLM'+'\n or '+'1 XLM is equal to '+1/ltcPrice+' LTC');
	} else if (clickedID === 'usdBar') {
		alert('1 USD is equal to '+usdPrice+' XLM'+'\n or '+'1 XLM is equal to '+1/usdPrice+' USD');
	} 
};


