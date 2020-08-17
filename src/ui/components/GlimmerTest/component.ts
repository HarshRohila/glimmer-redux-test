import Component, { tracked } from '@glimmer/component';
import { connect } from 'glimmer-redux';

const stateToComputed = state => {
	console.log( state.test.isOpen );

	return {
		isOpen: state.test.isOpen
	};
};
  
const dispatchToActions = dispatch => ({
	toggle: () => dispatch({type: 'toggle'})
});
export default connect(stateToComputed, dispatchToActions)();

// export default class GlimmerTest extends Component {
// 	@tracked isOpen = false;

// 	toggle() {
// 		this.isOpen = !this.isOpen;
// 	}
// }
