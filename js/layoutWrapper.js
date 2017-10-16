$(document).ready(function () {
    $("#reusableTopNavBar").load("./nav.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "An error occurred. Status code: ";
            $("#error").html(msg + xhr.status + ". Status text: " + xhr.statusText);
        }
    });
    $("#reusableFooter").load("./footer.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "An error occurred. Status code: ";
            $("#error").html(msg + xhr.status + ". Status text: " + xhr.statusText);
        }
    });
});