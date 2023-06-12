let loggedUser = undefined;
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url:"http://localhost:80/getLoggedUser",
        success: function(data){
            console.log("received logged data: ", data);
            loggedUser = data;
            if(data) {
                $("#loggedHeader").removeClass("hidden");
                $("#loggedUsername").html(data);
            }
            else
                $("#notLoggedHeader").removeClass("hidden");
        }
    });
});