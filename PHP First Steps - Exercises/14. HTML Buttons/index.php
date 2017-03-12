<!DOCTYPE html>
<html>
<head>
    <title>HTML Buttons</title>
</head>
<body>
<form>
    N:<input type="text" name="num"/>
    <input type="submit" value="Submit"/>
</form>
<?php
if (isset($_GET['num'])) {
    $n = intval($_GET['num']);

    for ($i = 1; $i <= $n; $i++) {
       echo "<button>$i</button>";
     }
}
?>
</body>
</html>