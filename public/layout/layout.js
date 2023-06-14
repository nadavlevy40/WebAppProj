let loggedUser = undefined;
$.holdReady(true);
$.ajax({
    type: "GET",
    url:"http://localhost:80/getLoggedUser",
    success: function(data){
        console.log("received logged data: ", data);
        loggedUser = data;
        $.holdReady(false);
    }
});

fetch("/layout/header/header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        $("#header").html(data);
    });
fetch("/layout/footer/footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        $("#footer").html(data);
    });