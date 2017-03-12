<!DOCTYPE html>
<html>
<head>
    <title>N Factorial</title>
</head>
<body>
<form>
    N:<input type="text" name="num"/>
    <input type="submit" value="Submit"/>
</form>
<?php
if(isset($_GET['num'])) {
    $n = intval($_GET['num']);
    $factorial = 1;
   for ($i = $n; $i >= 2; $i--){
       $factorial *= $i;
   }
   echo $factorial;
}
?>
</body>
</html>