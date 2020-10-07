import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
// // import cookie from 'react-cookies';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
// import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRestaurant, updateRestaurant } from '../../actions/restaurantProfileActions'
// import {restaurantsSignup} from '../../actions/signupActions'
import { Container, Col, Row, Form, Button, ButtonGroup, Card } from 'react-bootstrap';
import backendServer from '../../config'

class DetailsUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    //Bind the handlers to this class
    this.changeHandler = this.changeHandler.bind(this);

    this.update = this.update.bind(this);
    
  } 
 //username change handler to update state variable with the text entered by the user
   changeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
// categoryChangeHandler = (e) =>{
//     this.setState({
//         category : e.target.value
//     })
// }

// ingredientsChangeHandler = (e) =>{
//     this.setState({
//         ingredients : e.target.value
//     })
// }
// //password change handler to update state variable with the text entered by the user
// descriptionChangeHandler = (e) => {
//     this.setState({
//         description : e.target.value
//     })
// }
// priceChangeHandler = (e) =>{
//     this.setState({
//         price : e.target.value
//     })
// }
//submit Login handler to send a request to the node backend
update = (e) => {
    // var headers = new Headers();
    //prevent page from refresh
    e.preventDefault();
    let data = Object.assign({}, this.state);
    const id = localStorage.getItem('customer_id')
    axios.post(`${backendServer}/customers/${id}/profile`, data)
        .then(response => {
            console.log(response.data)
            console.log("Status Code : ",response.status);
            if(response.status === 200){
                alert("Details updated successfully")
                this.setState({
                    authFlag : true,
                    err: response.data                       
                })
            }else{
                alert("Some error occured. Try again..")
                this.setState({
                    authFlag : false
                })
            }
            
        });
}

  render() {

    return (
        <div>
            <h2> Update About Info: </h2>
            <Form onSubmit={this.update} >
               <Form.Row>
                    <Form.Group as={Col} controlId="dob">
                        <Form.Label>Date of birth (mm/dd/yyyy)</Form.Label>
                        <Form.Control name="dob"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
              
                <Form.Row>
                    <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control name="city"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
                
                <Form.Row>
                    <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control name="state"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control name="country"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="nickname">
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control name="nickname"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="headline">
                        <Form.Label>Headline</Form.Label>
                        <Form.Control name="headline"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="thingsilove">
                        <Form.Label>Things I Love</Form.Label>
                        <Form.Control name="thingsilove"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="findmein">
                        <Form.Label>Find me in</Form.Label>
                        <Form.Control name="findmein"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="phonenumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control name="phonenumber"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="website">
                        <Form.Label>Website</Form.Label>
                        <Form.Control name="website"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="yelpsince">
                        <Form.Label>Yelping Since</Form.Label>
                        <Form.Control name="yelpsince"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
{/*                 
                <Form.Row>
                    <Form.Group as={Col} controlId="time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control name="time"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
              
                <Form.Row>
                    <Form.Group as={Col} controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control name="location"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row>
            
                <Form.Row>
                    <Form.Group as={Col} controlId="hashtags">
                        <Form.Label>Trending Hashtags</Form.Label>
                        <Form.Control name="hashtags"
                            type="text"
                            onChange={this.changeHandler}
                             />
                    </Form.Group>
                </Form.Row> */}
                <ButtonGroup aria-label="Third group">
                    <Button type="submit" variant="success">Update</Button>
                </ButtonGroup>
            </Form> 
            
        </div> 
        
    )
  }
}


export default DetailsUpdate;