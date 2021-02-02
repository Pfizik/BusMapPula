<!DOCTYPE php>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
    <title>Document</title>
</head>

<?php
  $from = htmlspecialchars($_POST['from']);
  $to  = htmlspecialchars($_POST['to']);

  echo '<script type="text/JavaScript" src="pathfinder.js"></script>';
?>

<body>
    <div id="header-bar">
        <img id="back-button" src="back.png" alt="back button">
        <p id="name">Raspored autobusa</p>
    </div>
    <div id="master">
        <form id="dock-left" method="POST">
            <img class="in-dock" id="pula-promet-logo" src="pplogomali.png"></img>
            <div class="in-dock" id="from-select">
                <input list="datalist" name="option" id="from-select-field" type="text" placeholder="Početno stajalište" autocomplete="off" name="from" required>
                <datalist id="datalist" class="addresses-datalist">
                    <option>Bolnica</option>
                    <option>Busoler</option>
                    <option>Dobrilina</option>
                    <option>Fina</option>
                    <option>Fižela</option>
                    <option>Giardini</option>
                    <option>Gradska knjižnica</option>
                    <option>Hrvatske ceste</option>
                    <option>Između Trga Republike i Monte Magna</option>
                    <option>Između Šijane i Santorinove</option>
                    <option>J. Žakna</option>
                    <option>Jadreški</option>
                    <option>Kamenjak</option>
                    <option>Koparska</option>
                    <option>Labinska</option>
                    <option>Mletačka istok</option>
                    <option>Mletačka zapad</option>
                    <option>Monte Magno</option>
                    <option>Mornarička crkva</option>
                    <option>Mornarički park</option>
                    <option>Mornaričko groblje</option>
                    <option>Paduljska</option>
                    <option>Pantinaggio</option>
                    <option>Plinara</option>
                    <option>Puntižela</option>
                    <option>Rakovčeva</option>
                    <option>Ribarska koliba</option>
                    <option>Santirova</option>
                    <option>Sisačka</option>
                    <option>Sisplac</option>
                    <option>Stankovićeva</option>
                    <option>Starih statua</option>
                    <option>Stoja</option>
                    <option>Terminacija</option>
                    <option>Tivoli</option>
                    <option>Tomasinijeva</option>
                    <option>Trg Republike</option>
                    <option>Tržnica</option>
                    <option>Ul. Rim. Centuracije</option>
                    <option>Uljanik</option>
                    <option>Unnamed 1-5</option>
                    <option>Valdebek</option>
                    <option>Valica</option>
                    <option>Valkane</option>
                    <option>Valmade 1</option>
                    <option>Valmade 2</option>
                    <option>Veli vrh</option>
                    <option>Veli vrh 5</option>
                    <option>Veruda</option>
                    <option>Verudela</option>
                    <option>Vidikovac</option>
                    <option>Vila idola</option>
                    <option>Voltičeva</option>
                    <option>Zagrebačka</option>
                    <option>Zaobilaznica</option>
                    <option>Zelenika</option>
                    <option>Zlatne stijene</option>
                    <option>Šijana</option>
                    <option>Štinjan</option>
                </datalist>
            </div>
            <div class="in-dock" id="to-select">
                <input list="datalist" id="to-select-field" type="text" placeholder="Završno stajalište" autocomplete="off" name="to" required>
            </div>
            <button class="in-dock" id="search-button" type="submit">
                <p id="search-word">PRETRAŽI</p>
            </button>
        </form>
        <button id="switch-button">
            <img id="map-icon" src="map-icon-white.png" alt="map-icon-white">
        </button>
        <iframe id="dock-right" frameBorder="0" src="map.html"></iframe>
    </div>
</body>
</html>