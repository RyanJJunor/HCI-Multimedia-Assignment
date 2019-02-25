function displayMenu(currentPage) {

    var page1;
    var page2;
    var page3;
    var page4;
    var page5;

    if (currentPage === "home")
        page1 = 'currentPage';
    else if (currentPage === "sorting")
        page2 = 'currentPage';
    else if (currentPage === "bigo")
        page3 = 'currentPage';
    else if (currentPage === "example")
        page4 = 'currentPage';
    else if (currentPage === "contact")
        page5 = 'currentPage';

    document.getElementById("menu").innerHTML =
        '<ul> <li><a id=' + page1 + ' href=" index.html" onmousemove="menuHover(this, event)" onmouseleave="menuLeave(this)">Home</a></li>' +
        '<li class="dropDown"><a id=' + page2 + ' href=" SortingAlgorithms.html" onmousemove="menuHover(this, event)" onmouseleave="menuLeave(this)">Sorting Algorithms</a>' +
        '<div class="dropContent">' +
        '<a href=" BubbleSort.html" onmousemove="menuHover(this, event)" onmouseleave="menuLeave(this)">Bubble Sort</a>' +
        '<a href=" QuickSort.html" onmousemove="menuHover(this, event)" onmouseleave="menuLeave(this)">Quick Sort</a>' +
        '<a href=" MergeSort.html" onmousemove="menuHover(this, event)" onmouseleave="menuLeave(this)">Merge Sort</a>' +
        '<a href=" InsertionSort.html" onmousemove="menuHover(this, event)" onmouseleave="menuLeave(this)">Insertion Sort</a>' +
        '</div>' +
        '</li>' +
        '<li><a id=' + page3 + ' href=" BigONotation.html" onmousemove="menuHover(this, event)" onmouseleave="menuLeave(this)">Big O Notation</a></li> ' +
        '<li><a id=' + page4 + ' href=" Examples.html" onmousemove="menuHover(this, event)" onmouseleave="menuLeave(this)"">Examples</a></li> ' +
        '<li><a id=' + page5 + ' href=" Contact.html" onmousemove="menuHover(this, event)" onmouseleave="menuLeave(this)">Contact</a></li> </ul>'
}


function menuHover(element, event) {


    var originX = element.getBoundingClientRect().left;
    var originY = element.getBoundingClientRect().top;

    var x = event.clientX;
    var y = event.clientY;

    element.style.backgroundImage = "radial-gradient(500px 300px at " + (x - originX) + "px " + (y - originY) + "px, #555555, black)"

}

function menuLeave(element) {

    element.style.backgroundImage = "";

}

var a = 2;
var b = 0;
var c = -1;
var d = 0;
var e = -1;
var f = 0;

var counter = 0;
var direction;

function draw() {

    if (counter === 0){

        a = 2;
        c = -1;
        e = -1;

        direction = 1;
    }

    if (counter === 121){
        a = -2;
        c = 1;
        e = 1;

        direction = -1;
    }

    counter += direction;


    var context1 = document.getElementById('canvas1').getContext('2d');
    var context2 = document.getElementById('canvas2').getContext('2d');
    var context3 = document.getElementById('canvas3').getContext('2d');
    var context4 = document.getElementById('canvas4').getContext('2d');
    var context5 = document.getElementById('canvas5').getContext('2d');
    var context6 = document.getElementById('canvas6').getContext('2d');


    context1.clearRect(0, 0, 600, 450);
    context2.clearRect(0, 0, 500, 450);
    context3.clearRect(0, 0, 500, 450);
    context4.clearRect(0, 0, 500, 450);
    context5.clearRect(0, 0, 500, 450);
    context6.clearRect(0, 0, 500, 450);

    context1.fillRect(75, 160, 50, 290);
    context1.translate(a,0);

    context2.fillRect(135, 350, 50, 100);
    //context2.translate(b,0);

    context3.fillRect(195, 380, 50, 170);
    context3.translate(c,0);

    context4.fillRect(255, 200, 50, 250);
    //context4.translate(d,0);

    context5.fillRect(315, 285, 50, 165);
    context5.translate(e,0);

    context6.fillRect(375, 100, 50, 350);
    //context6.translate(0,0);


    context1.stroke();
    context2.stroke();
    context3.stroke();
    context4.stroke();
    context5.stroke();
    context6.stroke();

    window.requestAnimationFrame(draw);

}

function animate(){

   window.requestAnimationFrame(draw);
}



