import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import backendServer from '../../config';
import { Card, Row, Col } from 'react-bootstrap';
import ReactFlexyTable from "react-flexy-table"
// import "react-flexy-table/dist/index.css";
import CustomerLoginCheck from './customerLoginCheck';
import AggregateReview from './aggregateReview';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class CustomerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        disabled: true,
    };
    // this._onSelect();
    
    this.search = this.search.bind(this);
  } 

  search = () => {
        var params = {
          "type": this.state.type,
           "value": this.state.value
        }
        console.log(params)
    axios.post(`${backendServer}/customers/restaurantsearch`, params)
    .then(response => {
        console.log("Response: ", response)
        this.setState({
            restaurants: response.data
        });
    });
  }
  _onValueSelect = (e) => {
        this.setState({
            value: e.value
        })
    }
  _onSelect = (e) => {
    this.setState({
        disabled: false,
        type: e.value
    });
     console.log("Priting e: ", e)
    //  this.state.data = <Dropdown options={'check'} placeholder="Select" />
     if (e && e.value === 'deliverymode'){
        this.setState({  
            secondoptions: [
                {value: 'dinein', label: 'Dine In'},
                {value: 'curbside', label: 'Curbside'},
                {value: 'delivery', label: 'Yelp Delivery'},
              ],

        });
        
     } else if (e && e.value === 'cuisine') {
        this.setState({

            secondoptions: [
                {value: 'Random', label: 'French'},
                {value: 'mexican', label: 'Mexican'},
                {value: 'mediterranean', label: 'Mediterranean'}
            ],
            
            
        });
    } else if (e && e.value === 'location') {
        this.setState({
            data: <input type="text" value={this.state.value}/>,
            
        });
        this.setState({
            disabled: true,
        });
    }
  }

  render(name) {
    const options = [
        {value: 'cuisine', label: 'Cuisine'},
        {value: 'deliverymode', label: 'Mode of Delivery'},
        {value: 'location', label: 'Location'},
      ];
      const defaultOption = options[2];
      
    return (
      <div>
        <Dropdown options={options} onChange={this._onSelect}  placeholder="Search by" />
        <div class disabled={this.state.disabled}>
            <Dropdown options={this.state.secondoptions} onChange={this._onValueSelect} placeholder="Select" />
        </div>
        
        <div>
            {this.state.data}
        </div>
        <button class="icon" onClick={this.search}><i class="glyphicon glyphicon-search"></i></button>
      </div>
      
       
     )
  }
}


export default CustomerSearch;