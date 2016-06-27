var React = require('react');
var PatientTableData = require('./Patient-table-data');


var PatientData = React.createClass ({
			render: function() {
				return(
				<div class="table-responsive">
				< PatientTableData />
          		</div>
          

			);
		}
	});

module.exports = PatientData;