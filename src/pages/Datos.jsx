import React, { useState, useEffect } from "react";
import "./Datos.css";
import "./Panel.css";

const getDaysMonth = (year, month) => {
  return new Array(new Date(year, month + 1, 0).getDate())
    .fill(null)
    .map((_, i) => i + 1);
};

const Datos = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentDay, setCurrentDay] = useState(today.getDate());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [daysMonth, setDaysMonth] = useState(
    getDaysMonth(currentYear, currentMonth)
  );

  useEffect(() => {
    setDaysMonth(getDaysMonth(currentYear, currentMonth));

    if (currentDay > getDaysMonth(currentYear, currentMonth).length) {
      setCurrentDay(getDaysMonth(currentYear, currentMonth).length);
    }
  }, [currentMonth, currentYear]);

  const handleDayChange = (event) => {
    setCurrentDay(parseInt(event.target.value));
  };

  const handleMonthChange = (event) => {
    setCurrentMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event) => {
    setCurrentYear(parseInt(event.target.value));
  };

  useEffect(() => {
    setSelectedDate(new Date(currentYear, currentMonth, currentDay));
  }, [currentDay, currentMonth, currentYear]);

  return (
    <div className="datos">
      <table className="separador">
        <tbody>
          <tr>
            <td className="separador-text">Datos Personales</td>
          </tr>
        </tbody>
      </table>
      <table className="contenido" id="datos-personales" valign="middle">
        <tbody>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Primer apellido</td>
            <td>
              <input
                type="text"
                id="pApellido"
                name="pApellido"
                defaultValue=""
              />
            </td>
            <td styles={{ fontWeight: "bold" }}>Segundo apellido</td>
            <td>
              <input
                type="text"
                id="sApellido"
                name="sApellido"
                defaultValue=""
              />
            </td>
          </tr>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Primer nombre</td>
            <td>
              <input type="text" id="pNombre" name="pNombre" defaultValue="" />
            </td>
            <td styles={{ fontWeight: "bold" }}>Segundo nombre</td>
            <td>
              <input type="text" id="sNombre" name="sNombre" defaultValue="" />
            </td>
          </tr>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Tipo de identificación</td>
            <td>
              <select id="tIdent" name="tIdent" defaultValue="-Seleccione-">
                <option>- Seleccione -</option>
                <option value="cedula">Cédula de Identidad</option>
                <option value="extranjero">Extranjero</option>
                <option value="dimex">DIMEX</option>
                <option value="menor">Menor de Edad</option>
              </select>
            </td>
            <td styles={{ fontWeight: "bold" }}>Identificación</td>
            <td>
              <input
                type="text"
                id="identificacion"
                name="identificacion"
                defaultValue=""
              />
            </td>
          </tr>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Género</td>
            <td>
              <select id="genero" name="genero" defaultValue="-Seleccione-">
                <option>- Seleccione -</option>
                <option value="femenino">Cédula de Identidad</option>
                <option value="masculino">Extranjero</option>
                <option value="noespecifíca">No especifica</option>
              </select>
            </td>
            <td styles={{ fontWeight: "bold" }}>Fecha de nacimiento</td>
            <td>
              <select value={currentDay} onChange={handleDayChange}>
                {daysMonth.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select value={currentMonth} onChange={handleMonthChange}>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>
                    {new Date(0, i).toLocaleString("default", {
                      month: "long",
                    })}
                  </option>
                ))}
              </select>
              <select value={currentYear} onChange={handleYearChange}>
                {Array.from({ length: 101 }, (_, i) => (
                  <option key={i} value={currentYear - 50 + i}>
                    {currentYear - 50 + i}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Grupo sanguíneo</td>
            <td>
              <select id="gSang" name="gSang" defaultValue="-Seleccione-">
                <option>- Seleccione -</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="o">O</option>
              </select>
            </td>
            <td styles={{ fontWeight: "bold" }}>RH</td>
            <td>
              <select id="rh" name="rh" defaultValue="-Seleccione-">
                <option>- Seleccione -</option>
                <option value="pos">Positivo +</option>
                <option value="neg">Negativo -</option>
              </select>
            </td>
          </tr>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Estado civil</td>
            <td>
              <select id="estCivil" name="estCivil" defaultValue="-Seleccione-">
                <option>- Seleccione -</option>
                <option value="casado">Casado (a)</option>
                <option value="divorciado">Divorciado (a)</option>
                <option value="soltero">Soltero (a)</option>
                <option value="unionLibre">Unión Libre</option>
                <option value="viudo">Viudo (a)</option>
              </select>
            </td>
            <td styles={{ fontWeight: "bold" }}>Profesión</td>
            <td>
              <input
                type="text"
                id="profesion"
                name="profesion"
                defaultValue=""
              />
            </td>
          </tr>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Religión</td>
            <td>
              <input
                type="text"
                id="religion"
                name="religion"
                defaultValue=""
              />
            </td>
            <td styles={{ fontWeight: "bold" }}>País de nacimiento</td>
            <td>
              <input
                type="text"
                id="pNacimiento"
                name="pNacimiento"
                defaultValue=""
              />
            </td>
          </tr>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Nivel educativo</td>
            <td>
              <select id="nivEduct" name="nivEduct" defaultValue="-Seleccione-">
                <option>- Seleccione -</option>
                <option value="primaria">Primaria</option>
                <option value="secundaria">Secundaria</option>
                <option value="tecnico">Técnico</option>
                <option value="diplomado">Diplomado</option>
                <option value="bachillerato">Bachillerato</option>
                <option value="licenciatura">Licenciatura</option>
                <option value="maestria">Maestría</option>
                <option value="doctorado">Doctorado</option>
              </select>
            </td>
            <td styles={{ fontWeight: "bold" }}>País de residencia</td>
            <td>
              <input
                type="text"
                id="pResidencia"
                name="pResidencia"
                defaultValue=""
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="separador">
        <tbody>
          <tr>
            <td>Datos Nacimiento</td>
          </tr>
        </tbody>
      </table>
      <table className="contenido" id="datos-nacimiento" valign="middle">
        <tbody>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Nombre del padre</td>
            <td>
              <input type="text" id="padre" name="padre" defaultValue="" />
            </td>
            <td styles={{ fontWeight: "bold" }}>Nombre de la madre</td>
            <td>
              <input type="text" id="madre" name="madre" defaultValue="" />
            </td>
          </tr>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Lugar de nacimiento</td>
            <td>
              <input
                type="text"
                id="lugarNac"
                name="lugarNac"
                defaultValue=""
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="separador">
        <tbody>
          <tr>
            <td className="separador-text">Contacto</td>
          </tr>
        </tbody>
      </table>
      <table className="contenido" id="contacto" valign="middle">
        <tbody>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Teléfono celular</td>
            <td>
              <input
                type="text"
                id="celular1"
                name="celular1"
                defaultValue=""
              />
            </td>
            <td styles={{ fontWeight: "bold" }}>Teléfono celular #2</td>
            <td>
              <input
                type="text"
                id="celular2"
                name="celular2"
                defaultValue=""
              />
            </td>
          </tr>
          <tr>
            <td styles={{ fontWeight: "bold" }}>Correo electrónico</td>
            <td>
              <input type="text" id="correo1" name="correo1" defaultValue="" />
            </td>
            <td styles={{ fontWeight: "bold" }}>Correo electrónico #2</td>
            <td>
              <input type="text" id="correo2" name="correo2" defaultValue="" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="checkbox" id="sms" name="sms" defaultValue="" />
              <label>Enviar mensajes SMS</label>
            </td>
            <td></td>
            <td>
              <input
                type="checkbox"
                id="correo"
                name="correo"
                defaultValue=""
              />
              <label>Enviar correos electrónico</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                className="formCheckbox"
                type="checkbox"
                id="whatsapp"
                name="whatsapp"
                defaultValue=""
              />
              <label>Enviar mensajes WhatsApp</label>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="separador">
        <tbody>
          <tr>
            <td className="separador-text">Emergencias</td>
          </tr>
        </tbody>
      </table>
      <table className="contenido" id="emergencias" valign="middle">
        <tbody>
          <tr>
            <h2>Emergencias</h2>
          </tr>
        </tbody>
      </table>
      <table className="separador">
        <tbody>
          <tr>
            <td className="separador-text">Residencia</td>
          </tr>
        </tbody>
      </table>
      <table id="residencia" valign="middle">
        <tbody>
          <tr>
            <h2>Residencia</h2>
          </tr>
        </tbody>
      </table>
      <table className="separador">
        <tbody>
          <tr>
            <td className="separador-text">Finanzas</td>
          </tr>
        </tbody>
      </table>
      <table className="contenido" id="finanzas" valign="middle">
        <tbody>
          <tr>
            <h2>Finanzas</h2>
          </tr>
        </tbody>
      </table>
      <table className="separador">
        <tbody>
          <tr>
            <td className="separador-text">Detalles para la Atención</td>
          </tr>
        </tbody>
      </table>
      <table className="contenido" id="detalles" valign="middle">
        <tbody>
          <tr>
            <h2>Detalles para la Atención</h2>
          </tr>
        </tbody>
      </table>
      <table className="separador">
        <tbody>
          <tr>
            <td className="separador-text">Otros</td>
          </tr>
        </tbody>
      </table>
      <table className="contenido" id="Otros" valign="middle">
        <tbody>
          <tr>
            <h2>Otros</h2>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Datos;
