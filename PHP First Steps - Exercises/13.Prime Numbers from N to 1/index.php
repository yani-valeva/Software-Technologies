<!DOCTYPE html>
<html>
<head>
    <title>Prime Numbers from N to 1</title>
</head>
<body>
<form>
    N:<input type="text" name="num"/>
    <input type="submit" value="Submit"/>
</form>
<?php
if (isset($_GET['num'])) {
    $n = intval($_GET['num']);

    for ($i = $n; $i > 2; $i--) {
        $isPrime = true;
        for ($j = 2; $j <= sqrt($i); $j++){
            if ($i % $j == 0){
               $isPrime = false;
               break;
            }
        }

        if ($isPrime){
            echo $i . ' ';
        }
    }
}
?>
</body>
</html>