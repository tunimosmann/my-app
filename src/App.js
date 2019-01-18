import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movie: "",
			serie: "",
			drama: "",
			play: "",
			game: "",
			book: "" 
		}
	}

	// FUNCTIONS

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		if (this.state[event.target[0].id]) {
			console.log("not empty");
		} else {
			alert(`Please add a ${event.target[0].id} title.`);
		}
		// console.log(event.target[0].id);
		
	}

	//RENDER
	render() {
		return (
			<div className="App">
				<header className="header">
					<h1 className="header__h1 heading__h1">✨ My App! ✨</h1>
				</header>

				<main className="main">
					<section className="movies">
						<h2 className="movies__h2 heading__h2">Movies</h2>

						<form onSubmit={this.handleSubmit} action="" className="movies__form form">
							<label htmlFor="movies" className="movies__label visuallyhidden">Movie title.</label>
							<input 
							type="text" 
							className="form__field"
							onChange={this.handleChange}
							id="movie"
							value={this.state.movie}
							placeholder="Movie title"
							/>

							<input type="submit" className="form__submit button" value="Add"/>
						</form>
					</section>

					<section className="series">
						<h2 className="series__h2 heading__h2">Series</h2>
					</section>

					<section className="dramas">
						<h2 className="dramas__h2 heading__h2">Dramas</h2>
					</section>

					<section className="theatre">
						<h2 className="theatre__h2 heading__h2">Theatre</h2>
					</section>

					<section className="games">
						<h2 className="games__h2 heading__h2">Games</h2>
					</section>

					<section className="books">
						<h2 className="books__h2 heading__h2">Books</h2>
					</section>
				</main>
			</div>
		);
	}
}

export default App;
