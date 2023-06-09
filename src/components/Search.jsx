import React, { useState } from 'react';

export default function Search(props) {
	const { handleSearchRequest = Function.prototype } = props;

	const [searchRequest, setSearchRequest] = useState('');
	const [movieType, setMovieType] = useState('');

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			handleSearchRequest([searchRequest, movieType]);
		}
	};

	const handleMovieType = (e) => {
		setMovieType(e.target.value);
	};

	return (
		<div className='relative text-lg bg-transparent text-gray-800 dark:text-neutral-100'>
			<div className='flex items-center border-b-2 border-cyan-400 dark:bg-cyan-600 py-2 my-4'>
				<input
					className='flex-grow bg-transparent border-none mr-8 px-4 leading-tight focus:outline-none'
					type='search'
					placeholder='Search'
					value={searchRequest}
					onChange={(e) => setSearchRequest(e.target.value)}
					onKeyDown={handleKey}
				/>
				<button
					type='submit'
					className='absolute right-0 top-0 mt-3 mr-4'
					onClick={() => handleSearchRequest([searchRequest, movieType])}
				>
					<svg
						className='h-4 w-4 fill-current'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						version='1.1'
						id='Capa_1'
						x='0px'
						y='0px'
						viewBox='0 0 56.966 56.966'
						xmlSpace='preserve'
						width='512px'
						height='512px'
					>
						<path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
					</svg>
				</button>
			</div>

			<div className='grid grid-cols-3 justify-items-center'>
				<label>
					<input
						type='radio'
						name='movieType'
						value='all'
						onChange={handleMovieType}
						defaultChecked
					/>{' '}
					All
				</label>
				<label>
					<input
						type='radio'
						name='movieType'
						value='movie'
						onChange={handleMovieType}
					/>{' '}
					Movies
				</label>
				<label>
					<input
						type='radio'
						name='movieType'
						value='series'
						onChange={handleMovieType}
					/>{' '}
					Series
				</label>
			</div>
		</div>
	);
}
