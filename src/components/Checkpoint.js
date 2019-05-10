import React from "react";
import axios from "axios";
import "../styles.css";

const desetinke = x => {
  const sekunda = parseInt(x.split(":")[2], 10);
  const minuta = parseInt(x.split(":")[1], 10);
  const sat = parseInt(x.split(":")[0], 10);
  return sekunda*10 + minuta*600 + sat*36000
}

export default class Checkpoint extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rezultat1: [],
      rezultat2: [],
      rezultat3: []
    };
  }

  updateState() {
    const sortiranje = (a, b) => {
      return desetinke(b[5]) - desetinke(a[5])
    }

    axios.get(`https://api.raceresult.com/123664/M0FUHMUHYK4L5DGHL264KGPUI6CXIBAP`).then(res => {
      const rezultati = res.data.data.sort(sortiranje).slice(0, 3);
      let rezultat1 = [];
      let rezultat2 = [];
      let rezultat3 = [];
      console.log(rezultati);
      if (rezultati[0]) {
        rezultat1 = rezultati[0]
      }
      if (rezultati[1]) {
        rezultat2 = rezultati[1]
      }
      if (rezultati[2]) {
        rezultat3 = rezultati[2]
      }
      this.setState({ rezultat1, rezultat2, rezultat3 });
    });

    console.log("updated");
  }
  
  componentDidMount() {
    this.updateState();
    this.interval = setInterval(() => this.updateState(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App1">
        <div className="App1">
        <div className="naslov">Checkpoint</div>
          <table className="table">
            <thead>
              <tr className="tableHeader">
                <th className="header-100">Bib</th>
                <th className="header-800">Name</th>
                <th className="header-100">Country</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{this.state.rezultat3[0]}</td>
                  <td>{this.state.rezultat3[2]}</td>
                  <td>{this.state.rezultat3[3]}</td>
                </tr>
                <tr>
                  <td>{this.state.rezultat2[0]}</td>
                  <td>{this.state.rezultat2[2]}</td>
                  <td>{this.state.rezultat2[3]}</td>
                </tr>
                <tr>
                  <td className="lastRow">{this.state.rezultat1[0]}</td>
                  <td className="lastRow">{this.state.rezultat1[2]}</td>
                  <td className="lastRow">{this.state.rezultat1[3]}</td>
                </tr>
            </tbody>
          </table>
        </div>
    </div>
    );
  }
}
