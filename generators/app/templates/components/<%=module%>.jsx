import Layout<%= _type %> from '../../<%= type %>/containers/layout';
import SectionTitle from '../../backend/components/title';  /* only for backend */

import Section<%= _section %> from './<%= section %>';

require('../styles/<%= module %>.scss');

class <%= _module %> extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout<%= _type %> className="route-<%= module %>">
				<SectionTitle title="<%= _module %>" />
				<Section<%= _section %> />
			</Layout<%= _type %>>
		);
	}

}

export default <%= _module %>;
