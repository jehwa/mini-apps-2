import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    if(e.target.id === 'start') {
      this.setState({
        startDate: e.target.value
      })
    }
    if(e.target.id === 'end') {
      this.setState({
        endDate: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(new Date(this.state.startDate) < new Date(this.state.endDate)){
      this.props.submit(e, this.state.startDate, this.state.endDate)
    } else {
      alert('invalid range!!!');
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)} >
          <label htmlFor="start">Start</label>
          <input 
            type="date" id="start" name="startDate"
            min="2018-01-01" max="2018-12-31" 
            required
            onChange={(e) => this.handleChange(e)}
            />
          <label htmlFor="end">End</label>
          <input 
            type="date" id="end" name="endDate"
            min="2018-01-01" max="2018-12-31" 
            required
            onChange={(e) => this.handleChange(e)}
            />
          <input type="submit" value="Search" />
          </form>
      </div> 
    )
  }

}