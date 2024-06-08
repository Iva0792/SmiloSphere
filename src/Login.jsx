import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

function Login() {
  const naviget = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("El campo 'usuario' está vacío");
        }
        break;
      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("El campo 'contraseña' está vacío");
        }
        break;
      default:
    }
  };

  function loginSubmit() {
    if (user != "" && pass != "") {
      var url = "https://smilosphere.cloud/databaseconnect.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      var Data = {
        user: user,
        pass: pass,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
            if (response[0].result == "User successfully logged in") {
                setMsg("Ingreso satisfactorio. Redirigiendo...");
                setTimeout(function () {
                    naviget("/Dashboard");
                }, 2500);
            } else {
                setError("Nombre de usuario o contraseña incorrecta");
            }
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    } else {
      setError("Todos los campos son requeridos");
    }
  }
  return (
    <div className="login">
      <div className="form">
        <h1>Ingreso al Sistema</h1>
        <input
          className="user"
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => handleInputChange(e, "user")}
          required
        ></input>
        <input
          className="pass"
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => handleInputChange(e, "pass")}
          required
        ></input>
        <div className="flex">
          <div className="formCheckbox">
            <input type="checkbox" id="ckb1"></input>
            <label className="labelCkb" htmlFor="ckb1">
              Recuérdame
            </label>
          </div>
          <div className="formRemember">
            <a href="" className="txt1">
              Reestablecer Contraseña
            </a>
          </div>
        </div>
        <label></label>
        <button
          type="submit"
          defaultValue="Login"
          className="button"
          onClick={loginSubmit}
        >
          Ingresar
        </button>
        <label></label>
        <div className="mensaje">
        <p>
          {error !== "" ? (
            <span className="error">{error}</span>
          ) : (
            <span className="success">{msg}</span>
          )}
        </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
