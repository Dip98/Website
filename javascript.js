function openNav() {
    document.getElementById("sdnv").style.width = "20%";
}
function closeNav() {
    document.getElementById("sdnv").style.width = "0%";
}
var pages = document.getElementsByClassName("page");
function changePage(index){
    for (let i = 0;i < pages.length;i++){
        pages[i].style.display = "none";
    }
    pages[index].style.display = "block";
    window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}
changePage(0);

function searchPrograms() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("program-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function searchShaders() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("shade-search-bar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("shader-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function searchArticles() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("art-search-bar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("article-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

