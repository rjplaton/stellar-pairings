let btcPrice = 147346;
let ethPrice = 2740;
let ltcPrice = 1173;
let usdPrice = 13;


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


