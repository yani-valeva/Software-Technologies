<!DOCTYPE html>
<html>
<head>
    <title>Even numbers from 1 to N</title>
</head>
<body>
<form>
    N:<input type="text" name="num"/>
    <input type="submit" value="Submit"/>
</form>
<?php
if(isset($_GET['num'])) {
    $n = intval($_GET['num']);
    for ($i = 1; $i <= $n; $i++){
       if ($i % 2 == 0){
           echo $i . ' ';
       }
    }
}
?>
</body>
</html>