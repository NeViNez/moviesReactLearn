import React from 'react';

export default function Footer() {
	return (
		<footer className='bg-cyan-200 w-full px-2 py-2 dark:bg-cyan-700 lg:py-4'>
			<div className='text-center dark:text-neutral-100'>
				@ {new Date().getFullYear()} Copyright text
			</div>
		</footer>
	);
}
