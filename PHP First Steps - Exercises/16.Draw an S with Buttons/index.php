<!DOCTYPE html>
<html>
<head>
    <title>Draw an “S” with Buttons</title>
</head>
<body>
<?php
$buttons = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
];

for ($i = 0; $i < 9; $i++){
    for ($j = 0; $j < 5; $j++){
        $currentButton = $buttons[$i][$j];

        if ($currentButton == 1){
            echo "<button style=\"background-color: blue\">$currentButton</button>";
        } else {
            echo "<button>$currentButton</button>";
        }
    }
    echo "<br/>";
}
?>
</body>
</html>















