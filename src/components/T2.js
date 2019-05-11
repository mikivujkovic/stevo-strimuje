import React from "react";
import axios from "axios";
import "../styles.css";

const desetinke = x => {
  const sekunda = parseInt(x.split(":")[2], 10);
  const minuta = parseInt(x.split(":")[1], 10);
  const sat = parseInt(x.split(":")[0], 10);
  return sekunda*10 + minuta*600 + sat*36000
}

export default class T2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rezultatiZ: [],
      rezultatiM: []
    };
  }
  
  componentDidMount() {

    const jeMusko = x => {
      return x[5] === "Male"
    }

    const jeZensko = x => {
      return x[5] === "Female"
    }

    

    const sortiranje = (a, b) => {
      return desetinke(a[12]) - desetinke(b[12])
    }

    axios.get(`https://api.raceresult.com/123664/YT3QE5CKGWU6Y6C4VD33BLSCEK2C2ZEX`).then(res => {
      const rezultatiZ = res.data.data.filter(jeZensko).sort(sortiranje).slice(0, 5);
      const rezultatiM = res.data.data.filter(jeMusko).sort(sortiranje).slice(0, 5);
      this.setState({ rezultatiZ, rezultatiM });
    });
  }

  jeMusko = x => {
    return x[5] === "M";
  };

  jeZensko = x => {
    return x[5] === "Ž";
  };

  render() {
    return (
      <div className="App">
        <div className="App">
        <div className="naslov">Female T2</div>
          <table className="table">
            <thead>
              <tr className="tableHeader">
                <th className="header-100">Bib</th>
                <th className="header-800">Name</th>
                <th className="header-100">Country</th>
                <th className="header-100">Gun Time</th>
              </tr>
            </thead>
            <tbody>
              {this.state.rezultatiZ.map((result, i) => (
                <tr key={i}>
                  <td>{result[0]}</td>
                  <td>{result[2]}</td>
                  <td>{result[3]}</td>
                  <td>{result[12]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        
        <div className="naslov">Male T2</div>
          <table className="table">
            <thead>
              <tr className="tableHeader">
                <th className="header-100">Bib</th>
                <th className="header-800">Name</th>
                <th className="header-100">Country</th>
                <th className="header-100">Gun Time</th>
              </tr>
            </thead>
            <tbody>
              {this.state.rezultatiM.map((result, i) => (
                <tr key={i}>
                  <td>{result[0]}</td>
                  <td>{result[2]}</td>
                  <td>{result[3]}</td>
                  <td>{result[12]}</td>
                </tr>
              ))}
            </tbody>
          </table>
     
    </div>
    );
  }
}
