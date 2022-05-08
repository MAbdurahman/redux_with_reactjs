import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard, fetchUsers } from './../redux/actions/cardActions';

class Card extends Component {
	// state = {user: ''}

	// componentDidMount() {
	//    let user = this.props.match.params.user;
	//    this.setState({user: user});
	// }

	handleButtonClick = () => {
		let id = this.props.card.id;
		this.props.deleteCard(id);
		this.props.history.push('/contact');
	};

	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		// const {user} = this.state;
		// console.log(this.props.users)
		// const { title, body } = this.props.card;

		// return (
		// 	<div
		// 		className='ui raised very padded text container segment'
		// 		style={{ marginTop: '80px' }}
		// 	>
		// 		<h3 className='ui header'>{title}</h3>
		// 		<p>{body}</p>
		// 		<button
		// 			className='ui primary right floated button'
		// 			onClick={this.handleButtonClick}
		// 		>
		// 			Delete
		// 		</button>
		// 	</div>
		// );
		const { users } = this.props;
		return users.map(user => {
			return (
				<div
					className='ui raised very padded text container segment'
					style={{ marginTop: '80px' }}
					key={user.id}
				>
					<h3 className='ui header'>{user.name}</h3>
					<p>{user.email}</p>
				</div>
			);
		});
	}
}

const mapStateToProps = (state, ownProps) => {
	let title = ownProps.match.params.user;
	return {
		card: state.cards.find(card => card.title === title),
		users: state.users
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteCard: id => {
			dispatch(deleteCard(id));
		},
		fetchUsers: () => {
			dispatch(fetchUsers());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
