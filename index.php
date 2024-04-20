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
                <?php
                if (array_key_exists('login-form-submit', $_POST)) {
                    submit();
                }

                function submit()
                {
                    session_start();
                    if (isset($_SESSION['username'])) {
                        echo file_get_contents("home.php");
                        exit;
                    }

                    $sname = "127.0.0.1";
                    $dname = "u884001650_smiloadmin";
                    $password = "adminadmin";
                    $db_name = "u884001650_SmiloSphereDB";

                    $conn = mysqli_connect($sname, $dname, $password, $db_name);

                    if (!$conn) {

                        echo "Connection failed!";

                    } else {

                        if ($_SERVER["REQUEST_METHOD"] == "POST") {
                            $username = $_POST["username"];
                            $password = $_POST["password"];

                            $stmt = $conn->prepare("CALL userLogin(?, ?, @responseMessage)");
                            $stmt->bind_param("ss", $username, $password);

                            $stmt->execute();
                            $stmt->close();

                            $result = $conn->query("SELECT @responseMessage AS responseMessage");
                            $row = $result->fetch_assoc();
                            $responseMessage = $row["responseMessage"];

                            if ($responseMessage === 'User successfully logged in') {
                                $_SESSION['username'] = $username;
                                session_start();
                            } else {
                                echo 'Error al iniciar sesión';
                            }

                        }
                        $conn->close();
                    }
                }
                ?>
                <form class="login-form" id="login-form" method="post">
                    <span class="form-title p-b-43">
                        <h1>Ingreso al Sistema</h1>
                    </span>

                    </br>

                    <div class="data-input-cont">
                        <input class="data-input" type="text" id="username" name="username"
                            placeholder="Correo Electrónico" required>
                    </div>
                    <div class="data-input-cont">
                        <input class="data-input" type="password" id="password" name="password" placeholder="Contraseña"
                            required>
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
                        <button class="form-btn" name="login-form-submit" type="submit">
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