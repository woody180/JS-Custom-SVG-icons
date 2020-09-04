# JS Custom SVG icons

This is the simple SVG icons base written in Javascript, where which you can easily extend with your custom SVG icon code.

Open toicon.js file and add new your custom SVG icon code to the icons object.

Inside HTML page use following notation - `<i class="icon" icon-name="nav" width="20" color="666"></i>`
Of course you can use them without additional attributes (with, color).

To draw the icon use `toIcon();` function.

```
    <i class="icon" icon-name="nav" width="20" color="666"></i>

    <script>
        // Draw icons
        toIcon();
    </script>
```

