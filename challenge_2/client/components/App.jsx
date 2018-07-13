import style from '../main.css';
import React from 'react';
import axios from 'axios';
import Chart from './Chart.jsx';
import Search from './Search.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null
    }
    this.bringData = this.bringData.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.bringData()
  }

  bringData() {
    axios({
      method: 'get',
      url: this.state.startDate && this.state.endDate 
        ? `https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.startDate}&end=${this.state.endDate}` 
        : 'https://api.coindesk.com/v1/bpi/historical/close.json'
    }).then((data) => {
      let bpiData = {
        labels:[],
        datasets: [ {
          label: '$USD/BTC',
          data: [],
          backgroundColor: '#bad7df'
        
        }]
      }
      let labels = Object.keys(data.data.bpi);
      let usdData = [];
      for(let i = 0; i < labels.length; i ++) {
        usdData.push(data.data.bpi[labels[i]]);
      }
      bpiData.labels = labels;
      bpiData.datasets[0].data = usdData;
      this.setState({
        data: bpiData
      })
    })
    
  }

  submit(e, start, end) {
    e.preventDefault()
    this.setState({
      startDate: start,
      endDate: end
    }, () => this.bringData())
  }

  render() {
    return (
      <div>
        <Search submit={this.submit}/>
        <Chart data={this.state.data}/>
      </div>     
    )
  }
}
