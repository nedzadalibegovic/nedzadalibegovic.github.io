var on = addEventListener,
    $body = document.body;

on("load", function() {
    setTimeout(function() {
        $body.className = $body.className.replace(
            /\bis-loading\b/,
            "is-playing"
        );
        setTimeout(function() {
            $body.className = $body.className.replace(
                /\bis-playing\b/,
                "is-ready"
            );
        }, 3000);
    }, 100);
});
