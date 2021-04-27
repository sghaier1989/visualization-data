import React, { Component } from 'react'
import { Chart } from "react-google-charts";
import {arraySort} from '../utils'


class ChartComponent extends Component {
    render () {
        let {data,isFetching} = this.props
        
        for(let i in data)
        {
            data[i] = [data[i].name,data[i].estimated_diameter_min,data[i].estimated_diameter_max]
        }
        var dataEstimat = arraySort(data)
        

        return (
            <div>
                <Chart
                    width={'1000px'}
                    height={'1000px'}
                    chartType="BarChart"
                    loader={<div>{isFetching}</div>}
                    data={[
                        ['City', 'Min Estimated Diameter (km)', 'Max Estimated Diameter'],
                        ...dataEstimat
                    ]}
   
                    options={{
                        title: '',
                        legend: { position: 'top', maxLines: 2 },
                        chartArea: { width: '50%' },
                        bar: { groupWidth: '75%' },
                        backgroundColor:'white',
                        colors: ['#0000FF', '#FF0000'],
                        hAxis: {
                        title: 'Min Estimated Diameter (km)',
                        minValue: 0,
                        },
                        isStacked: false,
                        vAxis: {
                        title: 'NOE Name',
                        },
                    }}
                    // For tests
                />
            </div>
        )
    }
}

export default ChartComponent