import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';

class Header extends Component {
	onLogoutClick() {
		this.props.mutate({
				refetchQuerries:[{ query }]
		});
	}

	renderButtons() {
		const { loading, user } = this.props.data;

		if (this.props.data.loading) { return <div />; }
		
		if (user) {
			return	(
			<li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
			);
		} else {
			return (
				<div>
					<li>
						<Link to="/signup">Signup</Link>
					</li>
					<li>
						<Link to="/login">Signup</Link>
					</li>
				</div>
			);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper"> 
					<Link to="/" className="brand-logo"> Home </Link>
					<ul className="right">
						{this.renderButtons()}
					</ul>
				</div>
			</nav>
		);
	}
}

export default graphql(mutation)(
	graphql(query)(Header)
);
