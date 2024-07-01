import React from "react";

import "../../styles/home.css";
import { CardCharacter } from "../component/CardCharacters";
import { Planets } from "../component/Planets";
import { Vehicles } from "../component/Vehicles";

export const Home = () => (
	<div className="container" style={{background: "black"}}>
		<CardCharacter/>
		<Planets/>
		<Vehicles/>
	</div>
);
