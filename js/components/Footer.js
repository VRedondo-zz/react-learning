import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => {
	return <p>
				<FilterLink filter='all'>All</FilterLink>,&nbsp;
				<FilterLink filter='active'>Active</FilterLink>,&nbsp; 
				<FilterLink filter='completed'>complete</FilterLink>
			</p>
};//Footer

export default Footer;