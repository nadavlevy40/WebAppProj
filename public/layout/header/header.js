$(document).ready(function () {
    if(loggedUser) {
        $("#loggedHeader").removeClass("hidden");
        $("#loggedUsername").html(loggedUser);
    }
    else
        $("#notLoggedHeader").removeClass("hidden");
});