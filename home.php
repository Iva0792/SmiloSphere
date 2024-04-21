<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit=no" <link rel="stylesheet"
        href="css/main.css">
    <link rel="stylesheet" href="css/util.css">
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/navbar.css">
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
                            <div class="card-1"></div>
                        </div>
                    </a>
                </div>
                <div class="card">
                    <a href="agenda.php">
                        <div class="cardAct">
                            <div class="cardText">
                                Agenda
                            </div>
                            <div class="card-2"></div>
                        </div>
                    </a>
                </div>
                <div class="card"><a href="mensajeria.php">
                        <div class="cardAct">
                            <div class="cardText">
                                Mensajería
                            </div>
                            <div class="card-3"></div>
                        </div>
                    </a></div>
                <div class="card"><a href="facturacion.php">
                        <div class="cardAct">
                            <div class="cardText">
                                Facturación
                            </div>
                            <div class="card-4"></div>
                        </div>
                    </a></div>
                <div class="card"><a href="pendientes.php">
                        <div class="cardAct">
                            <div class="cardText">
                                Pendientes
                            </div>
                            <div class="card-5"></div>
                        </div>
                    </a></div>
                <div class="card"><a href="busqueda.php">
                        <div class="cardAct">
                            <div class="cardText">
                                Búsqueda
                            </div>
                            <div class="card-6"></div>
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