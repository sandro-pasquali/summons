# summons

Drop /summons folder into a directory.

Run > node server

Will serve files whose root is understood as the parent directory of /summons

localhost:8080 will fetch UI

Given:

<pre>
/server
    /files
        /scripts
            foo.js
            bar.js
        /html
            index.html
            index.js
            index.css
</pre>

To load 'foo.js' into Summons enter -- scripts/foo.js

To load 'summons.js' -- summons.js
[you can also simply hit 'return' from the input to get this file]

