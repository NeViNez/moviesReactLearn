import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import Search from '../components/Search';

const API_KEY = import.meta.env.VITE_API_KEY;

export default class MainContent extends Component {
	state = {
		movies: [],
		hasLoaded: false,
	};

	componentDidMount() {
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Oklahoma`)
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search, hasLoaded: true }));
	}

	handleSearchRequest = ([searchRequest, movieType]) => {
		if (searchRequest === '') {
			return;
		}
		this.setState({ hasLoaded: false });
		fetch(
			`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchRequest}&type=${movieType}`
		)
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search, hasLoaded: true }));
	};

	render() {
		const { movies, hasLoaded } = this.state;
		return (
			<main className='flex-grow dark:bg-neutral-700'>
				<Search handleSearchRequest={this.handleSearchRequest} />
				{hasLoaded ? (
					<MoviesList movies={this.state.movies} />
				) : (
					<div className='flex flex-col justify-center items-center'>
						<div
							className='inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current 
												border-r-transparent align-[-0.125em] 
												motion-reduce:animate-[spin_1.5s_linear_infinite]'
							role='status'
						>
							<span
								className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap 
													!border-0 !p-0 ![clip:rect(0,0,0,0)]'
							>
								Loading...
							</span>
						</div>
					</div>
				)}
			</main>
		);
	}
}
