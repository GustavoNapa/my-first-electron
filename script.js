$(document).ready(function () {

    if(localStorage.getItem('sidebar') == "true"){
        $('#sidebar').toggleClass('active');
    }

    $('#sidebarCollapse').on('click', function () {
        if(localStorage.getItem('sidebar') === "true"){
            localStorage.setItem("sidebar", false)
        }else{
            localStorage.setItem("sidebar", true)
        }
        
        $('#sidebar').toggleClass('active');
    });

});

const pesquisarCarros = () => {
alert("O");
}