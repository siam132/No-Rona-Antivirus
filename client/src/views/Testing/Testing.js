import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography as MuiTypography } from '@material-ui/core';
import MapContainer from './MapComponent'
import axios from 'axios'; 




class Testing extends React.Component {
 
  constructor(props){
    super(props)
    this.state={
      testingLoc : [],
      addresses: [],
      cords: [],
      pureCords: []
    }
  }

  componentDidMount(){

  let states = ['arizona','california','delaware','florida','new-york','new-jersey','florida','nevada','texas','utah','washington']
 
  states.map(state=>{
  axios.get(`https://covid-19-testing.github.io/locations/${state}/complete.json`)
  .then(response=> {
    this.setState({testingLoc:response.data})
   // console.log(this.state.testingLoc)
    this.fillAddress()
    
  }).catch(error=> 
    console.log(error))

    // console.log(this.state.pureCords)


})
   
  
  }

  fillAddress (){
    let address = this.state.testingLoc.map(e=>{ 
      const regex = / /gi;
      let temp = e.physical_address[0].address_1.replace(regex,'+')
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${temp}&key=AIzaSyAgt1C9Qf7Lts4n67FVboQ4KZpKVlJCpTY`)
      .then(response=>{
         
         this.cordBuilder(response.data)
         this.setState({cords: this.state.cords.concat(response.data)})
      }).catch(error=> console.log(error))
    return temp})

  }

  cordBuilder(param){
   
    this.setState({pureCords: this.state.pureCords.concat({lat: param.results[0].geometry.location.lat, long:param.results[0].geometry.location.lng})})
  }

  

  render(){
   
  return (
    <div className="container">
      <Grid
        container
        spacing={6}
      >
       
        <div className="m-5">
       
        <div class="col-md-auto">
        <h1 className="row justify-content-md-center">Testing sites</h1>
    </div>
       <MapContainer  cords={this.state.pureCords}/>
    </div>
    
      </Grid>

     
    
    </div>
  );
}};

export default Testing;
