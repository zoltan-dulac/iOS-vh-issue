# iOS-vh-issue

Proof of concept code to show how to work around the iOS Safari Action Bar making 100vh be off the screen.

This code adds two CSS variables:

* `--iOS-vh-fix--vh`: the height of the viewport, minus the height of the Safari action bar and the footer.
* `--iOS-vh-fix--chrome-height`: the height of the Safari action and footer.


The example shows how you can use the variables inside a stylesheet (see the CSS comments).

More detailed blog post to come.
