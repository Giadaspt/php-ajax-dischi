<?php

  include __DIR__. "/db.php";

  $image = "logo-spostify.png";

?>






<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  
  <link rel="stylesheet" href="style.css">

  <title>php-ajax-dischi</title>
</head>
<body>
<div id="root" >
    <header class="container-fluid ">
        <div class="logo">
          <?php
            echo "<img src='$image'>";
          ?>
        </div>
        <section class="selection col-6 d-flex justify-content-end">
          <div class="col-3">
            <select
              class="choose" >
              <option value="" selected>Tutti gli album</option>
              <option>
                ok
              </option>
            </select>
          </div>
          <div class="col-3">
            <select
              class="choose" >
              <option value="" selected>Tutti gli album</option>
              <option>artist</option>
            </select>
          </div>
        </section>
    </header>

    <main class="d-flex">
      <div class="row d-flex">
        <div class="col-2 preview m-3 p-3">
          <?php 
            foreach($discs as $disc){
              echo "
              <img src='$disc[poster]' alt=''>
              <h6>$disc[title]</h6>
              <p> $disc[author] </p>
              <p> $disc[year] </p>";
            }
          ?>
        </div>
      </div>
    </main>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script src="script.js"></script>
</body>
</html>