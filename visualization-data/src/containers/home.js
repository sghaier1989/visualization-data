import React, { Component } from 'react'
import ChartComponent from '../components/ChartComponent'
import arraySort from '../utils'

class componentName extends Component {
    state = {
        chartData:[],
        isFetching:true,
    }

    componentDidMount(){
        
        var result = []
        var orbiting_body = []
        this.setState({isFetching:true})
       
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
       .then(response => response.json())
       .then(data => {
            
            let tabs = data['near_earth_objects']
             for(let i in tabs){
                var estimedDiameter = new Object();
                 estimedDiameter.id = tabs[i].id
                 estimedDiameter.near_earth_objects = [tabs[i].name,tabs[i].estimated_diameter.kilometers.estimated_diameter_max,tabs[i].estimated_diameter.kilometers.estimated_diameter_min];
                 for(let j in tabs[i].close_approach_data){
                    orbiting_body.push(tabs[i].close_approach_data[j].orbiting_body)
                 }
                 let filteredArray = orbiting_body.filter( (ele,pos)=>orbiting_body.indexOf(ele) == pos);
                 estimedDiameter.close_approach_data = filteredArray
                 result.push(estimedDiameter)
                 

            }
            this.setState({chartData:result})
            this.setState({isFetching:false})
    });
    }

    render () {
        //console.log('chartData', this.state.chartData)
        let data = this.state.chartData
        let dataEstimat = [];
        for(var i in data){
            dataEstimat.push(data[i].near_earth_objects)
           // console.log(i,data[i])
        }
        dataEstimat = arraySort(dataEstimat)
        //console.log("state= ",this.state.dropDownMenuSelected)

        return (
            <div>
                <h1>{this.state.isFetching ? 'Fetching users...' : ''}</h1>
                <ChartComponent data={dataEstimat} />
            </div>
        )
    }
}

export default componentName