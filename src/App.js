import React from "react";
import { Router, Link } from "@reach/router";
import Swim from "./components/Swim";
import T1 from "./components/T1";
import T2 from "./components/T2";
import Finish from "./components/Finish";
import Bike from "./components/Bike";
import Km5 from "./components/Km5";
import Km10 from "./components/Km10";
import Km15 from "./components/Km15";
import Km27 from "./components/Km27";
import Km45 from "./components/Km45";
import Km63 from "./components/Km63";


export default class PersonList extends React.Component {
  
  render() {
    return (
     <div>
      <nav className="nav">
        <Link to="swim">Swim </Link>{"   "}
        <Link to="t1">T1 </Link>{"   "}
        <Link to="km27">27km </Link>{"   "}
        <Link to="km45">45km </Link>{"   "}
        <Link to="km63">63km </Link>{"   "}
        <Link to="bike">Bike </Link>{"   "}
        <Link to="t2">T2 </Link>{"   "}
        <Link to="km5">5km </Link>{"   "}
        <Link to="km10">10km </Link>{"   "}
        <Link to="km15">15km </Link>{"   "}
        <Link to="finish">Finish </Link>{"   "}
      </nav>
      <br />
      <Router>
        <Swim path="swim" />
        <T1 path="t1" />
        <Km27 path="km27"/>
        <Km45 path="km45"/>
        <Km63 path="km63"/>
        <Bike path="bike"/>
        <T2 path="t2"/>
        <Km5 path="km5"/>
        <Km10 path="km10"/>
        <Km15 path="km15"/>
        <Finish path="finish"/>
    </Router>
    </div>
    );
  }
}
