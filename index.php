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
  <link rel="stylesheet" href="/css/style.css">
  <title>php-ajax-dischi</title>
</head>
<body>
<div id="root" class="container-fluid">
    <header>
      <div class="row ">
        <div class="logo">
          <?php
            echo "<img src='$image'>"
          ?>
        </div>
        <div class=" col-3 d-flex align-items-center justify-content-end ">
          <select
            class="choose" >
            <option value="" selected>Tutti gli album</option>
            <option>
              <
            </option>
          </select>
        </div>
        <div class=" col-3 d-flex align-items-center justify-content-end ">
          <select
            class="choose" >
            <option value="" selected>Tutti gli album</option>
            <option>artist</option>
          </select>
        </div>
      </div>
    </header>

    <main>
      <div class="row">
        <div class="col-2 preview m-3 p-3">
          <img src="" alt="">
          <h6>previewShow.title</h6>
          <p>previewShow.author </p>
          <p>previewShow.year </p>
        </div>
      </div>
    </main>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script src="/js/script.js"></script>
</body>
</html>