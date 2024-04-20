<html>

<head>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/util.css">
    <title>SmiloSphere</title>
</head>

<body>
    <div class="container">
        <div class="login">
            <div class="cont-login">
                <div class="image">
                    <div class="logo">
                        <img src="/images/SmiloSphere.png">
                    </div>
                </div>
                <form class="login-form" id="login-form" action="login.php">
                    <span class="form-title p-b-43">
                        <h1>Ingreso al Sistema</h1>
                    </span>

                    </br>

                    <div class="data-input-cont">
                        <input class="data-input" type="text" id="username" name="username" placeholder="Correo Electrónico" required>
                    </div>
                    <div class="data-input-cont">
                        <input class="data-input" type="password" id="password" name="password" placeholder="Contraseña" required>
                    </div>
                    <div class="flex-sb-m">
                        <div class="form-checkbox">
                            <input class="input-checkbox" id="ckb1" type="checkbox" name="remember-me">
                            <label class="label-checkbox" for="ckb1">Recuérdame</label>
                        </div>
                        <div>
                            <a href="restore.php" class="txt1">
                                Reestablecer Contraseña
                            </a>
                        </div>
                    </div>
                    </br>
                    <div class="container-btn">
                        <button class="form-btn" id="login-form-submit" type="submit" method="post">
                            Ingresar
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    <footer>
        Powered by SmiloSphere © 2024
    </footer>
</body>

</html>