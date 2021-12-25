import React from 'react';
import {
	TitlePage,
	InfoStuff,
	MapImg,
	InfoStuff2,
} from '../styled components/HomeElements';
import Footer from './Footer';

const Home = () => {
	return (
		<div>
			<div>
				<TitlePage className="animate__animated  animate__bounceInDown">
					African Marketplace
				</TitlePage>
				<MapImg
					src="https://www.gregdutoit.com/wp-content/uploads/2020/07/amboseli_elephant_parade-copy-1.jpg"
					alt="Elephants"
				/>
			</div>
			<InfoStuff>
				<InfoStuff2>
					<h2> Who we are? </h2>
					<p>
						{' '}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</InfoStuff2>
				<InfoStuff2>
					<h2> Where we are? </h2>
					<p>
						{' '}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</InfoStuff2>
				<InfoStuff2>
					<h2> How to contact us? </h2>
					<p>
						{' '}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</InfoStuff2>
			</InfoStuff>
		</div>
	);
};

export default Home;
