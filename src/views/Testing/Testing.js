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
    axios.get('https://covid-19-testing.github.io/locations/new-york/complete.json')
    .then(response=> {
      this.setState({testingLoc:response.data})
     // console.log(this.state.testingLoc)
      this.fillAddress()
      
    }).catch(error=> 
      console.log(error))

      // console.log(this.state.pureCords)
  
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
    //console.log(this.state.pureCords)
  }

  

  render(){
   
  return (
    <div className="container">
      <Grid
        container
        spacing={6}
      >
        <div className="m-5">
         
       <MapContainer  cords={this.state.pureCords}/>
        
       
        </div>

      </Grid>

     
    
    </div>
  );
}};

export default Testing;
