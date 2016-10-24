import React from 'react';

class AppleItem extends React.Component {
	constructor(props) {
		super(props);

	};
	render() {
		const {
			state,actions
		} = this.props;
		return (
			<div><p>苹果{state.weight}克</p><button onClick={()=>actions.eatApple(state.id)}>吃掉它</button></div>
		)
	}
}

export default AppleItem;