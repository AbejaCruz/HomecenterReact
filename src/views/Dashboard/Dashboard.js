import React from "react";
// @material-ui/core

import user from "assets/img/baseline_perm_identity_white_48dp.png";
import medal from "assets/img/noun_Medal_2302198.png";
import cup from "assets/img/noun_Cup_2816205.png";
import happy from "assets/img/noun_emoticon_3107577.png";
import serius from "assets/img/noun_emoticon_3107476.png";
import sad from "assets/img/noun_Sad_753166.png";
import "assets/css/dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <div className="container">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-sm">
            <div className="row cuadro">
              <div className="col-sm fila1 text-center">
                <img src={user} alt="..." width="120px" />
              </div>
              <div className="col-sm fila2 text-center">
                <h1>70</h1>
                <h4>Auxiliares Activos</h4>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="col-sm">
              <div className="row cuadro">
                <div className="col-sm fila1 text-center">
                  <img src={user} alt="..." width="120px" />
                </div>
                <div className="col-sm fila2 text-center">
                  <h1>80%</h1>
                  <h4>Cumplimiento horas de entrenamiento</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-sm">
            <div className="row cuadro">
              <div className="col-sm fila1 text-center">
                <img src={user} alt="..." width="120px" />
              </div>
              <div className="col-sm fila2 text-center">
                <table>
                  <tr>
                    <th>
                      {" "}
                      <img src={medal} alt="..." width="50px" />
                    </th>
                    <th>
                      {" "}
                      <img src={cup} alt="..." width="50px" />
                    </th>
                    <th>
                      {" "}
                      <img src={happy} alt="..." width="50px" />
                    </th>
                    <th>
                      {" "}
                      <img src={serius} alt="..." width="50px" />
                    </th>
                    <th>
                      {" "}
                      <img src={sad} alt="..." width="50px" />
                    </th>
                  </tr>
                  <tr>
                    <td className="verde">23</td>
                    <td className="verde">25</td>
                    <td className="amarillo">9</td>
                    <td className="rojo">8</td>
                    <td className="rojo">5</td>
                  </tr>
                </table>
                <h4>Desempeño Total</h4>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="col-sm">
              <div className="row cuadro">
                <div className="col-sm fila1 text-center">
                  <img src={user} alt="..." width="120px" />
                </div>
                <div className="col-sm fila2 text-center">
                  <h1>21:34</h1>
                  <h4>Horas Promedio operario por mes</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
