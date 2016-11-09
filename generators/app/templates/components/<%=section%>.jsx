require('../styles/<%= section %>.scss');

class Section<%= _section %> extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	/* Mock data */
	getData() {
		return [{

		}];
	}

	render() {
		return (
			<section className="section-<%= section %>">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12 no-padding">

						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default Section<%= _section %>;
