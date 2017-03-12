<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fifty Shades of Gray</title>
    <style>
        div {
            display: inline-block;
            margin: 5px;
            width: 20px;
            height: 20px;
        }
    </style>
</head>
<body>
<?php
$currentColor = 0;
for ($rows = 0; $rows < 5; $rows++) {
    for ($cols = 0; $cols < 10; $cols++) {
        echo "<div style=\"background-color: rgb($currentColor, $currentColor, $currentColor);\"></div>";
        $currentColor += 5;
    }
    echo "<br>";
    $currentColor++;
}
?>
</body>
</html>