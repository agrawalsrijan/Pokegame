import React, {Component} from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";


class Pokedex extends Component{
	render(){
		return(
			<div className="Pokedex">
				<h1 className={this.props.isWinner? "Pokedex-winner":"Pokedex-loser"}>
					{this.props.isWinner? "Winning Hand":"Losing Hand"}
				</h1>
				<h3>Total experience:{this.props.exp}</h3>
				<div className="Pokedex-cards">
					{this.props.pokemon.map((p) =>(
						<Pokecard 
							id={p.id} 
							name={p.name} 
							type={p.type} 
							exp={p.base_experience}
						/>
					))}	
				</div>	
			</div>
		)
	}
}


export default Pokedex