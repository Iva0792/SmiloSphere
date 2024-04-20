<?php
                /*if (array_key_exists('login-form-submit', $_POST)) {
                    submit();
                }

                function submit()
                {*/
                    session_start();
                    if (isset($_SESSION['username'])) {
                        header('Location: home.php');
                        exit;
                    }

                    $sname = "localhost";
                    $dname = "u884001650_smiloadmin";
                    $password = "4&Mk/>OcxOsX";
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
                                session_start();
                                $_SESSION['username'] = $username;
                                // Redirect to home page
                                header('Location: home.php');
                                exit;
                            } else {
                                echo 'Error al iniciar sesión';
                            }

                        }
                        $conn->close();
                    }
                ?>