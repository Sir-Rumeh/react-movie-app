import React from 'react';
// styling
import { GlobalStyle } from './GlobalStyle';
// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// pages
import Home from './pages/Home.js';
import Movie from './pages/Movie.js';
import Login from './pages/Login.js';
import NotFound from './pages/NotFound.js';
// Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Context
import UserProvider from './context';

export default function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:movieId" element={<Movie />} />
					<Route path="/login" element={<Login />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
				<Footer />
				<GlobalStyle />
			</UserProvider>
			{console.log('testing')}
		</BrowserRouter>
	);
}
