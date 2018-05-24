$(document).ready(function () {
    $("button#hello").click(function () {
        $("ul#user").prepend("<li>hello</li>");
        $("ul#webpage").prepend("<li>why hello there</li>");
        $("ul#user").children("li").first().click(function () {
            alert('hi');
            $(this).remove();
        });
        $("ul#webpage").children("li").first().click(function () {
            alert('hi');
            $(this).remove();
        });
    });
    $("button#goodbye").click(function () {
        $("ul#user").prepend("<li>goodbye</li>");
        $("ul#webpage").prepend("<li>goodbye, dear user</li>");
    });
    $("button#stop").click(function () {
        $("ul#user").prepend("<li>stopcopying me</li>");
        $("ul#webpage").prepend("<li>pardon me i meant no offense.</li>");
    });
});