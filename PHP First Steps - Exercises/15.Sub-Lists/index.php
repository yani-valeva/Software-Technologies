<!DOCTYPE html>
<html>
<head>
    <title>Sub-Lists</title>
</head>
<body>
<form>
    N:<input type="text" name="num1"/>
    M:<input type="text" name="num2"/>
    <input type="submit"/>
</form>
<?php
if(isset($_GET['num1']) && isset($_GET['num2'])) {
    $n = intval($_GET['num1']);
    $m = intval($_GET['num2']);

    echo "<ul>";
    for ($i = 1; $i <= $n; $i++){
        echo "<li>List $i";
        echo "<ul>";
        for ($j = 1; $j <= $m; $j++){
            echo "<li>";
            echo "Element $i.$j";
            echo "</li>";
        }
        echo "</ul>";
        echo "</li>";
    }
    echo "</ul>";
}
?>
</body>
</html>