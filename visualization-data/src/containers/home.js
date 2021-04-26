import React, { Component } from 'react'
import ChartComponent from '../components/ChartComponent'
import {arraySort,arrayUnique} from '../utils'
import DropDownMenu from '../components/DropDownMenu'

class componentName extends Component {
    state = {
        chartData:[],
        dropDownMenu:[],
        isFetching:true,
    }

    componentDidMount(){
        
        var result = []
        var orbiting_body = []
        let dropDownMenu = []
        this.setState({isFetching:true})
       
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
       .then(response => response.json())
       .then(data => {
            
            let tabs = data['near_earth_objects']
             for(let i in tabs){
                var estimedDiameter = new Object();
                 estimedDiameter.id = tabs[i].id
                 estimedDiameter.near_earth_objects = [tabs[i].name,tabs[i].estimated_diameter.kilometers.estimated_diameter_min,tabs[i].estimated_diameter.kilometers.estimated_diameter_max];
                 for(let j in tabs[i].close_approach_data){
                    orbiting_body.push(tabs[i].close_approach_data[j].orbiting_body)
                 }
                 let filteredArray = orbiting_body.filter(arrayUnique);
                 estimedDiameter.close_approach_data = filteredArray
                 result.push(estimedDiameter)
                 
                 dropDownMenu.push(...filteredArray)
            }
            dropDownMenu = dropDownMenu.filter( (ele,pos)=>dropDownMenu.indexOf(ele) == pos);
            this.setState({chartData:result})
            this.setState({isFetching:false})
            this.setState({dropDownMenu:dropDownMenu})
        });
    }

    fetchMenuSelected (params) {
        let data = this.state.chartData;
        this.setState({isFetching:true})

        var result = [];
        for(let i in data){
            if(data[i].close_approach_data.find(item => item === params))
            result.push(data[i])
        }
        console.log('data = ',params+ ' ' + result.length)
        this.setState({chartData:result}) 
        this.setState({isFetching:false})

   };


    myFunction(params){
        console.log('do something: ',params);
        this.setState({dropDownMenuSelected:params})
        this.fetchMenuSelected(params)
    }

    render () {
        let data = this.state.chartData
        let isFetching = this.state.isFetching
        let dataEstimat = [];
        for(var i in data){
            dataEstimat.push(data[i].near_earth_objects)
        }
        dataEstimat = arraySort(dataEstimat)

        return (
            <div>
                <DropDownMenu menu={this.state.dropDownMenu} value={(params) => this.myFunction(params)} />
                <h1>{this.state.isFetching ? 'Fetching data...' : ''}</h1>
                <ChartComponent data={dataEstimat} isFetching={isFetching} />
            </div>
        )
    }
}

export default componentName