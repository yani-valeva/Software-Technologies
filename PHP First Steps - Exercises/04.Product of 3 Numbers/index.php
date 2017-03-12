<!DOCTYPE html>
<html>
<head>
    <title>Product of 3 Numbers</title>
</head>
<body>
<form>
    N:<input type="text" name="num1"/>
    M:<input type="text" name="num2"/>
    L:<input type="text" name="num3"/>
    <input type="submit"/>
</form>
<?php
if(isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num3'])) {
    $n = intval($_GET['num1']);
    $m = intval($_GET['num2']);
    $l = intval($_GET['num3']);
  $count = 0;
  if ($n == 0 || $m == 0 || $l == 0){
      echo "Positive";
      return;
  }
  if($n < 0) {
      $count++;
  } if($m < 0){
      $count++;
  } if ($l < 0){
      $count++;
    }
if ($count % 2 == 0){
      echo "Positive";
} else {
    echo "Negative";
}
}
?>
</body>
</html>