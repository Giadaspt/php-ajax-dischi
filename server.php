<?php
require_once __DIR__. "/db.php";

$filterDiscs = [];

if (isset($_GET['genre'])){
  foreach($disc as $discs){
    if ($disc['genre'] == $_GET['genre']){
      $filterDiscs[] = $item;
    }
  }
} else if (isset($_GET['author'])){

  foreach($disc as $discs){
    if ($disc['author'] == $_GET['author']){
      $filterDiscs[] = $disc;
    }
  }
}


?>