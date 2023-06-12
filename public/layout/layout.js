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