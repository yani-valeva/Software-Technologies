<!DOCTYPE html>
<html>
<head>
    <title>Numbers from N to 1</title>
</head>
<body>
<form>
    N:<input type="text" name="num"/>
    <input type="submit" value="Submit"/>
</form>
<?php
if(isset($_GET['num'])) {
    $n = intval($_GET['num']);
    for ($i = $n; $i >= 1; $i--){
        echo $i . ' ';
    }
}
?>
</body>
</html>