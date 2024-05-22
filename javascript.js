var pages = document.getElementsByClassName("page");
var changePage = function(index){
    for (let i = 0;i < pages.length;i++){
        pages[i].style.display = "none";
    }
    pages[index].style.display = "block";
    window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};
changePage(0);
