import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
				fname:'',
				mobile:''
		};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
	
    this.setState({
		  [name]: value
	});
  }
  
	handleSubmit(event) {
	event.preventDefault();
    alert('Data submitted successfully. See data in console.');    
	const data = this.state;
	console.log(data);
  }
  
  render(){
  return (
    <div className="App">
     
	 <div className="col-md-4 mx-auto border p-4 m-5">
        
        <form onSubmit={this.handleSubmit}>
		<h3 className="bg-success text-white p-2">Login Form</h3>
  <div className="form-group">
    <label>Name:</label>
    <input type="text" className="form-control" name="fname" value={this.state.fname} onChange={this.handleInputChange}/>
  </div>
  <div className="form-group">
    <label>Mobile:</label>
    <input type="text" className="form-control" name="mobile" value={this.state.mobile} onChange={this.handleInputChange}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>        
      
    </div>
  );
}
}
export default App;
