num = 0;

function minus() {
	num--;
    document.getElementById('numberOfGuests').innerHTML=num;
}

function plus() {
	num++;
    document.getElementById('numberOfGuests').innerHTML=num;
}

function next() {
    window.location.href = "indextest.html";
}