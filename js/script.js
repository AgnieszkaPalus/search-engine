$(document).ready(function(){
	var url = 'https://restcountries.eu/rest/v1/name/';
	var urlCapital = 'https://restcountries.eu/rest/v2/capital/';

var countriesList = $('#countries');
var capitalList = $('#capital');

$('#search').click(searchCountries);
$('#search').click(searchCapital);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
function searchCapital() {
 	var capitalName = $('#capital-name').val();
if(!capitalName.length) capitalName = 'Warsaw';
$.ajax({
  		url: urlCapital + capitalName,
  		method: 'GET',
  		success: showCapitalList
  	});
}
//////////////////////////////////////////////////////////////////
function showCountriesList(resp) {
  	countriesList.empty();
resp.forEach(function(item) {
   		$('<li>').text(item.name).appendTo(countriesList);
});
}


function showCapitalList(resp) {
  	capitalList.empty();
resp.forEach(function(item) {
   		$('<li>').text(item.capital).appendTo(capitalList);
});
}
})