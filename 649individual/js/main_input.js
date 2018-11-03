//salmon: #FF6866
//teal: #76c4c7
//seafoam: #5eb99d
//lemon: #eae262
//mid-grey: #c0cbd3

var startDatasetTwo=["#FF6866","#76c4c7"];
var startDatasetTwoP=[["#FF6866","#76c4c7"],["#76c4c7","#FF6866"]];
var deTwo_01_CP=[["#FF6866"],["#76c4c7"]];


var startDatasetThree=["#FF6866","#76c4c7","#5eb99d"];
var startDatasetThreeP=[["#FF6866","#76c4c7","#5eb99d"],["#FF6866","#5eb99d","#76c4c7"],["#76c4c7","#FF6866","#5eb99d"],["#76c4c7","#5eb99d","#FF6866"],["#5eb99d","#FF6866","#76c4c7"],["#5eb99d","#76c4c7","#FF6866"]]
var deThree_01_CP=[["#FF6866"],["#76c4c7"],["#5eb99d"]];
var deThree_02_C=[["#FF6866","#76c4c7"],["#FF6866","#5eb99d"],["#76c4c7","#5eb99d"]];
var deThree_02_P=[["#FF6866","#76c4c7"],["#76c4c7","#FF6866"],["#FF6866","#5eb99d"],["#5eb99d","#FF6866"],["#76c4c7","#5eb99d"],["#5eb99d","#76c4c7"]];


var startDatasetFour=["#FF6866","#76c4c7","#5eb99d","#eae262"];
var startDatasetFourP=[["#FF6866","#76c4c7","#5eb99d","#eae262"],["#FF6866","#76c4c7","#eae262","#5eb99d"],["#FF6866","#5eb99d","#76c4c7","#eae262"],["#FF6866","#5eb99d","#eae262","#76c4c7"],["#FF6866","#eae262","#76c4c7","#5eb99d"],["#FF6866","#eae262","#5eb99d","#76c4c7"],["#76c4c7","#FF6866","#5eb99d","#eae262"],["#76c4c7","#FF6866","#eae262","#5eb99d"],["#76c4c7","#5eb99d","#FF6866","#eae262"],["#76c4c7","#5eb99d","#eae262","#FF6866"],["#76c4c7","#eae262","#5eb99d","#FF6866"],["#76c4c7","#eae262","#FF6866","#5eb99d"],["#5eb99d","#FF6866","#76c4c7","#eae262"],["#5eb99d","#FF6866","#eae262","#76c4c7"],["#5eb99d","#76c4c7","#FF6866","#eae262"],["#5eb99d","#76c4c7","#eae262","#FF6866"],["#5eb99d","#eae262","#76c4c7","#FF6866"],["#5eb99d","#eae262","#FF6866","#76c4c7"],["#eae262","#FF6866","#76c4c7","#5eb99d"],["#eae262","#FF6866","#5eb99d","#76c4c7"],["#eae262","#76c4c7","#FF6866","#5eb99d"],["#eae262","#76c4c7","#5eb99d","#FF6866"],["#eae262","#5eb99d","#76c4c7","#FF6866"],["#eae262","#5eb99d","#FF6866","#76c4c7"]]
var deFour_01_CP=[["#FF6866"],["#76c4c7"],["#5eb99d"],["#eae262"]];
var deFour_02_C=[["#FF6866","#76c4c7"],["#FF6866","#5eb99d"],["#FF6866","#eae262"],["#76c4c7","#5eb99d"],["#76c4c7","#eae262"],["#5eb99d","#eae262"]]
var deFour_02_P=[["#FF6866","#76c4c7"],["#76c4c7","#FF6866"],["#FF6866","#5eb99d"],["#5eb99d","#FF6866"],["#FF6866","#eae262"],["#eae262","#FF6866"],["#76c4c7","#5eb99d"],["#5eb99d","#76c4c7"],["#76c4c7","#eae262"],["#eae262","#76c4c7"],["#5eb99d","#eae262"],["#eae262","#5eb99d"]]
var deFour_03_C=[["#FF6866","#76c4c7","#5eb99d"],["#FF6866","#76c4c7","#eae262"],["#FF6866","#5eb99d","#eae262"],["#76c4c7","#5eb99d","#eae262"]];
var deFour_03_P=[["#FF6866","#76c4c7","#5eb99d"],["#FF6866","#5eb99d","#76c4c7"],["#76c4c7","#FF6866","#5eb99d"],["#76c4c7","#5eb99d","#FF6866"],["#5eb99d","#FF6866","#76c4c7"],["#5eb99d","#76c4c7","#FF6866"],["#FF6866","#76c4c7","#eae262"],["#FF6866","#eae262","#76c4c7"],["#76c4c7","#FF6866","#eae262"],["#76c4c7","#eae262","#FF6866"],["#eae262","#FF6866","#76c4c7"],["#eae262","#76c4c7","#FF6866"],["#FF6866","#5eb99d","#eae262"],["#FF6866","#eae262","#5eb99d"],["#5eb99d","#FF6866","#eae262"],["#5eb99d","#eae262","#FF6866"],["#eae262","#FF6866","#5eb99d"],["#eae262","#5eb99d","#FF6866"],
				["#76c4c7","#5eb99d","#eae262"],["#76c4c7","#eae262","#5eb99d"],["#eae262","#5eb99d","#76c4c7"],["#eae262","#76c4c7","#5eb99d"],["#5eb99d","#eae262","#76c4c7"],["#5eb99d","#76c4c7","#eae262"]]


$(document).ready(function(){
	generate_singlec("");

	$("#submit").on("click",function(){
		var n = parseFloat(document.getElementById("totalnum").value);
		var k = parseFloat(document.getElementById("selectnum").value);
		if (n>0 && Number.isInteger(n) && k>0 && Number.isInteger(k) && (k<=n)){
			var combination_output=combination(n,k);
			var permutation_output=permutation(n,k);
			document.getElementById("combination_result").innerHTML = combination_output.toString();
			document.getElementById("permutation_result").innerHTML = permutation_output.toString();
		}
		else{
			alert("please input valid number which should be integer larger than 0");
		}
	});

	$("#reset").on("click",function(){
		document.getElementById("totalnum").value="";
		document.getElementById("selectnum").value="";
		document.getElementById("combination_result").innerHTML="";
		document.getElementById("permutation_result").innerHTML="";
	})
	$("#top-reset").on("click",function(){
		d3.selectAll("svg > *").remove();
	})


});


//calculation of permutation and combination
function factorial(x){
  var product = 1;
	for(var i=x;i>0;i--){
	  product = product*i;
	}
	return product;
}

function combination(n,k){
	return (factorial(n)/(factorial(k)*factorial(n-k)));
}

function permutation(n,k){
	return (factorial(n)/(factorial(n-k)));
}

function generate_singlec(user_input){
	switch (user_input) {
		case "two":
			var x = document.getElementById("sc1-2");
			x.setAttribute("checked", "checked");
			visualizeTotal(startDatasetTwo);
			generate_options("two");
			break;
        case "three":
			var x = document.getElementById("sc1-3");
			x.setAttribute("checked", "checked");
			visualizeTotal(startDatasetThree);
			generate_options("three");
            break;
        case "four":
			var x = document.getElementById("sc1-4");
			x.setAttribute("checked", "checked");
			visualizeTotal(startDatasetFour);
			generate_options("four");
            break;
    }
}

function visualizeTotal(ds){
	d3.select("#total-vis").selectAll("svg").remove();
	var margin={top:20, right:0, bottom:40, left:40},
		width=50,
		height=50;
	var div=d3.select("#total-vis");
	ds.forEach(function(element){
		var svg=div.append("svg")
					.attr("width",width)
					.attr("height",height)
					.attr("margin",margin);
		svg.append("rect")
					.attr("class","square")
					.attr("width",width)
					.attr("height",height)
					.style("fill",element);
	});
}

//generate another option list after cliclking total amount
function generate_options(user_input){
	switch (user_input) {
		case "two":
			$( "#start-choice-2 li" ).remove();
			var liA = document.createElement("li");
			liA.innerHTML = "1";
			var divA = document.createElement("input");
			liA.appendChild(divA);
			var liB = document.createElement("li");
			liB.innerHTML = "2";
			var divB = document.createElement("input");
			liB.appendChild(divB);
			divA.type="radio";
			divA.name="startnumber"
			divA.value = "one";
			divA.setAttribute("class","koption");
			divA.setAttribute("onclick","generate_combination('twoOne')");
			divB.type="radio";
			divB.name="startnumber";
			divB.value = "two"
			divB.setAttribute("class","koption");
			divB.setAttribute("onclick","generate_combination('twoTwo')");
			document.getElementById("start-choice-2").appendChild(liA);
			document.getElementById("start-choice-2").appendChild(liB);
			break;

        case "three":
			$( "#start-choice-2 li" ).remove();
			var liA = document.createElement("li");
			liA.innerHTML = "1";
			var divA = document.createElement("input");
			liA.appendChild(divA);
			var liB = document.createElement("li");
			liB.innerHTML = "2";
			var divB = document.createElement("input");
			liB.appendChild(divB);
			var liC = document.createElement("li");
			liC.innerHTML = "3";
			var divC = document.createElement("input");
			liC.appendChild(divC);

			divA.type="radio";
			divA.name="startnumber"
			divA.value = "one";
			divA.setAttribute("class","koption");
			divA.setAttribute("onclick","generate_combination('threeOne')");
			divB.type="radio";
			divB.name="startnumber";
			divB.value = "two";
			divB.setAttribute("class","koption");
			divB.setAttribute("onclick","generate_combination('threeTwo')");
			divC.type="radio";
			divC.name="startnumber";
			divC.value = "three";
			divC.setAttribute("class","koption");
			divC.setAttribute("onclick","generate_combination('threeThree')");
			document.getElementById("start-choice-2").appendChild(liA);
			document.getElementById("start-choice-2").appendChild(liB);
			document.getElementById("start-choice-2").appendChild(liC);
			break;

        case "four":
			$( "#start-choice-2 li" ).remove();

			var liA = document.createElement("li");
			liA.innerHTML = "1";
			var divA = document.createElement("input");
			liA.appendChild(divA);

			var liB = document.createElement("li");
			liB.innerHTML = "2";
			var divB = document.createElement("input");
			liB.appendChild(divB);

			var liC = document.createElement("li");
			liC.innerHTML = "3";
			var divC = document.createElement("input");
			liC.appendChild(divC);

			var liD = document.createElement("li");
			liD.innerHTML = "4";
			var divD = document.createElement("input");
			liD.appendChild(divD);

			divA.type="radio";
			divA.name="startnumber";
			divA.value = "one";
			divA.setAttribute("class","koption");
			divA.setAttribute("onclick","generate_combination('fourOne')");
			divB.type="radio";
			divB.name="startnumber";
			divB.value = "two";
			divB.setAttribute("class","koption");
			divB.setAttribute("onclick","generate_combination('fourTwo')");
			divC.type="radio";
			divC.name="startnumber";
			divC.value = "three";
			divC.setAttribute("class","koption");
			divC.setAttribute("onclick","generate_combination('fourThree')");
			divD.type="radio";
			divD.name="startnumber";
			divD.value = "four";
			divD.setAttribute("class","koption");
			divD.setAttribute("onclick","generate_combination('fourFour')");
			document.getElementById("start-choice-2").appendChild(liA);
			document.getElementById("start-choice-2").appendChild(liB);
			document.getElementById("start-choice-2").appendChild(liC);
			document.getElementById("start-choice-2").appendChild(liD);
			break;
    }
}


function create_li(user_input){

}

function generate_combination(user_input){
	switch (user_input) {
		case "twoTwo":
			visualizePermutation(startDatasetTwoP);
			visualizeCombination(startDatasetTwo);
			break;
		case "twoOne":
			visualizePermutation(deTwo_01_CP);
			visualizeCombinationk(deTwo_01_CP);
			break;
        case "threeThree":
            visualizePermutation(startDatasetThreeP);
			visualizeCombination(startDatasetThree);
            break;
		case "threeTwo":
			visualizePermutation(deThree_02_P);
			visualizeCombinationk(deThree_02_C);
			break;
		case "threeOne":
			visualizePermutation(deThree_01_CP);
			visualizeCombinationk(deThree_01_CP);
			break;
        case "fourFour":
            visualizePermutation(startDatasetFourP);
			visualizeCombination(startDatasetFour);
            break;
		case "fourThree":
			visualizePermutation(deFour_03_P);
			visualizeCombinationk(deFour_03_C);
			break;
		case "fourTwo":
			visualizePermutation(deFour_02_P);
			visualizeCombinationk(deFour_02_C);
			break;
		case "fourOne":
			visualizePermutation(deFour_01_CP);
			visualizeCombinationk(deFour_01_CP);
			break;
    }
}

function visualizeCombination(ds){
	d3.select("#combo-vis").selectAll("svg").remove();
	var margin={top:20, right:0, bottom:40, left:40},
		width=50,
		height=50;
	var div=d3.select("#combo-vis");
	ds.forEach(function(element){
		var svg=div.append("svg")
					.attr("width",width)
					.attr("height",height)
					.attr("margin",margin);
		svg.append("rect")
					.attr("class","square")
					.attr("width",width)
					.attr("height",height)
					.style("fill",element);
	});
}

function visualizeCombinationk(ds){
	d3.select("#combo-vis").selectAll("svg").remove();
	var margin={top:20, right:0, bottom:40, left:40},
		width=50,
		height=50;
	var div=d3.select("#combo-vis");
	ds.forEach(function(element){
		var div2=div.append("div")
					.attr("class","each-row");
		element.forEach(function(item){
			var svg=div2.append("svg")
						.attr("width",width)
						.attr("height",height)
						.attr("margin",margin);
			svg.append("rect")
						.attr("class","square")
						.attr("width",width)
						.attr("height",height)
						.style("fill",item);
		});
	});
}

function visualizePermutation(ds){
	d3.select("#permu-vis").selectAll("svg").remove();
	var margin={top:20, right:0, bottom:40, left:40},
		width=50,
		height=50;
	var div=d3.select("#permu-vis");
	ds.forEach(function(element){
		var div2=div.append("div")
					.attr("class","each-row");
		element.forEach(function(item){
			var svg=div2.append("svg")
						.attr("width",width)
						.attr("height",height)
						.attr("margin",margin);
			svg.append("rect")
						.attr("class","square")
						.attr("width",width)
						.attr("height",height)
						.style("fill",item);
		});
	});

}
