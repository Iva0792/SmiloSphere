<html>

<head>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/util.css">
    <link rel="stylesheet" href="css/grid.css">
    <title>SmiloSphere | Inicio</title>
</head>

<body>
    <div class="container">
        <?php echo file_get_contents("html/navbar.html"); ?>
        <div class="content">
            <div class="cards">
                <div class="card">
                    <a href="expedientes.php">
                        <div class="cardAct">
                            <div class="cardText">
                                Expedientes
                            </div>
                            <div class="card1"></div>
                        </div>
                    </a>
                </div>
                <div class="card">
                    <a href="agenda.php">
                        <div class="cardAct">
                            <div class="cardText">
                                Agenda
                            </div>
                            <div class="card2"></div>
                        </div>
                    </a>
                </div>
                <div class="card"><a href="mensajeria.php">
                        <div class="cardAct">
                            <div class="cardText">
                                Mensajería
                            </div>
                            <div class="card3"></div>
                        </div>
                    </a></div>
                <div class="card"><a href="facturacion.php">
                        <div class="cardAct">
                            <div class="cardText">
                                Facturación
                            </div>
                            <div class="card4"></div>
                        </div>
                    </a></div>
                <div class="card"><a href="pendientes.php">
                        <div class="cardAct">
                            <div class="cardText">
                                Pendientes
                            </div>
                            <div class="card5"></div>
                        </div>
                    </a></div>
                <div class="card"><a href="busqueda.php">
                        <div class="cardAct">
                            <div class="cardText">
                                Búsqueda
                            </div>
                            <div class="card6"></div>
                        </div>
                    </a></div>
            </div>
        </div>
    </div>

</body>
<footer>
    Powered by SmiloSphere © 2024
</footer>
</html>