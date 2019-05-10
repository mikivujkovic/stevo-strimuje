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
import Km20 from "./components/Km20";
import Km27 from "./components/Km27";
import Km45 from "./components/Km45";
import Km63 from "./components/Km63";
import Checkpoint from "./components/Checkpoint";


export default class PersonList extends React.Component {
  
  render() {
    return (
     <div>
      <nav className="nav">
        <Link className="link" to="swim">Swim </Link>{"   "}
        <Link className="link" to="t1">T1 </Link>{"   "}
        <Link className="link" to="km27">27km </Link>{"   "}
        <Link className="link" to="km45">45km </Link>{"   "}
        <Link className="link" to="km63">63km </Link>{"   "}
        <Link className="link" to="bike">90km </Link>{"   "}
        <Link className="link" to="t2">T2 </Link>{"   "}
        <Link className="link" to="km5">5km </Link>{"   "}
        <Link className="link" to="km10">10km </Link>{"   "}
        <Link className="link" to="km15">15km </Link>{"   "}
        <Link className="link" to="km20">20km </Link>{"   "}
        <Link className="link" to="finish">Finish </Link>{"   "}
        <Link className="link" to="checkpoint">Checkpoint</Link>
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
        <Km20 path="km20"/>
        <Finish path="finish"/>
        <Checkpoint path="checkpoint"/>
    </Router>
    </div>
    );
  }
}
