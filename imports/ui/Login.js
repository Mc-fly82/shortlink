import React      from 'react'
import { Link }   from 'react-router'
import { Meteor } from 'meteor/meteor'

export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: '',
		}
	}

	onSubmit(e) {
		e.preventDefault()

		let email = this.refs.email.value.trim()
		let password = this.refs.password.value.trim()

		Meteor.loginWithPassword({email}, password, (err) => {
			if (err) {
				this.setState({error: 'Unable to login. Check email and password.'})
			} else {
				this.setState({error: ''})
			}
		})
	}

	render() {
		return (<div className="boxed-view">
			<div className="boxed-view__box">
				<h1>Project keeper</h1>
				<h5 style={{
					color: 'gray',
					fontWeight: 400,
					margin: 5,
				}}>Marc Flavius
				</h5>

				{this.state.error
					? <p>{this.state.error}</p>
					: undefined}

				<form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
					<input type="email" ref="email" name="email" placeholder="Email" />
					<input type="password" ref="password" name="password" placeholder="Password" />
					<button className="button">Connexion</button>
				</form>

				<Link to="/signup">Avez vous un compte?</Link>
			</div>
		</div>)
	}
}
