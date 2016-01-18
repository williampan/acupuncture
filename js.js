var X = 0;
var Y = 0;
var id = 0;
var points = {};
var currGroup = [];

document.onmousemove = function (e) {
	var tempX = e.pageX;
	var tempY = e.pageY;
	if (tempX < 0) {
		tempX = 0;
	}
	if (tempY < 0) {
		tempY = 0;
	}
	X = tempX;
	Y = tempY
};

document.onclick = function (e) {
	displayMenu(e);

	// point.onclick = function (e) {
	// 	delete points[point.id];
	// 	document.body.removeChild(this);
	// 	e.stopPropagation();
	// };

	// points[point.id] = [X, Y];
	// id += 1;

	// document.body.appendChild(point);
	// console.log(points);
};

function displayMenu(e) {
	var menu = document.getElementById('menu');
	menu.style.display = 'block';
	menu.style.top = e.clientY + 'px';
	menu.style.left = e.clientX + 'px';
}

function hideMenu(e) {
	var menu = document.getElementById('menu');
	menu.style.display = '';
	e.stopPropagation();
}

var menuMark = document.getElementById('menu-mark');
var menuCancel = document.getElementById('menu-cancel');

menuMark.onclick = function (e)  {
	hideMenu(e);
	displayOptions(e);
}

menuCancel.onclick = function (e) {
	hideMenu(e);
}

function displayOptions(e) {
	displayPoint(X, Y);
	displayPoint(X + 5, Y);
	displayPoint(X - 5, Y);
	displayPoint(X, Y + 5);
	displayPoint(X, Y - 5);
}

function displayPoint(x, y) {
	point = document.createElement('div');
	point.setAttribute('class', 'point');
	point.style.left = (x - 3) + 'px';
	point.style.top = (y - 3) + 'px';
	document.body.appendChild(point);
	currGroup.push(point);
	console.log(currGroup);

	point.onclick = function (e) {
		for (var i = 0; i < currGroup.length; i += 1) {
			if (currGroup[i] !== this) {
				document.body.removeChild(currGroup[i]);
				delete currGroup[i];
			} else {

			}
		}
		currGroup = [];
		e.stopPropagation();
	}
}




