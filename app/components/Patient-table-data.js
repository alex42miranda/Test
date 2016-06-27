var React = require('react');

var PatientTableData = React.createClass ({
	render: function () {
		return (

			<table class="table table-striped">
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Name</th>
                  <th>Present Illness</th>
                  <th>Disease</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Alexandre Miranda</td>
                  <td>Esta muito doente</td>
                  <td>Pneumonia</td>
                 
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>Felipe Jose</td>
                  <td>Esta  muito ruim</td>
                  <td>Cancer</td>
                  
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>Jose carlos</td>
                  <td>Pessimo estado geral</td>
                  <td>Gastroenterite</td>
                  
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>Amanda Carla</td>
                  <td>Pessimo Estado</td>
                  <td>Hepatite</td>
                  
                </tr>
                <tr>
                  <td>1,004</td>
                  <td>Bruno</td>
                  <td>Muito ruim</td>
                  <td>Epilepsia</td>
                  
                </tr>
                
              </tbody>
            </table>


			);
	}
});

module.exports = PatientTableData;