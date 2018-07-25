import React, { Component } from 'react';
import * as Chartist from 'chartist';
import * as Tooltips from 'chartist-plugin-tooltip';
import * as dataStorage from '../../Constants/localStorage';
import callApi from '../../Utils/apiCaller';
import Chart from 'chart.js';
import moment from 'moment';

class LineGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            labels: [],
            dataGraph: [],
        }
        this.fromDate = moment().startOf("day").format("YYYY-MM-DD HH:mm:ss")
        this.toDate = moment().endOf("day").format("YYYY-MM-DD HH:mm:ss")
        this.fromDateWeek = moment().subtract(20, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss")
        this.toDateWeek = moment().subtract(20, "day").endOf("day").format("YYYY-MM-DD HH:mm:ss")
        this.fromDateMonth = moment().subtract(1, "months").startOf("month").format("YYYY-MM-DD HH:mm:ss")
        this.toDateMonth = moment().subtract(1, "months").endOf("month").format("YYYY-MM-DD HH:mm:ss")
    }

    componentDidMount() {
        // this.renderGraph();
        console.log(this.fromDateWeek, this.toDate)
        this.getDataLineGraph();
    }

    getDataLineGraph() {
        let body = {
            idShop: 2,
            fromDay: this.fromDateWeek,
            toDay: this.toDate
        }
        let date = [];
        let data = [];
        let count = [];
        console.log(data)
        callApi('home/countBillByWeek', 'POST', body, { 'token': dataStorage.TOKEN }).then(res => {
            let array = res.data.bill;
            for (let j = 0; j < array.length; j++) {
                console.log(array[j])
                date.push(array[j].Date);
                data.push(array[j].Data/1000);
                count.push(array[j].Count)
                // data.push(array[j].Count)
            }
            console.log(data, date, count)
            this.setState({
                labels: date,
                dataGraph: data
            })
            this.renderGraph();
        })
        
    }

    

    renderGraph() {
        var lineData = {
            // labels: labelLineGraph,
            labels: this.state.labels,
            datasets: [
                {
                    backgroundColor: "rgba(38, 198, 218,0.35)",
                    label: "Total Money",
                    // fillColor: "rgba(28,181,214,0.5)",
                    // strokeColor: "rgba(28,181,214,0.7)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(28,181,241,1)",
                    // pointStrokeColor: "#fff",
                    // pointHighlightFill: "#fff",
                    // pointHighlightStroke: "rgba(220,220,220,1)",
                    // data: [50, 75, 150, 110, 80, 120],
                    borderColor: 'rgba(28,181,214,0.7)',
                    data: this.state.dataGraph,
                    borderWidth: 1.5

                },
                // {
                //     backgroundColor: "rgba(113,179,148,0.5)",
                //     label: "Total resolve warning",
                //     // fillColor: "rgba(113,179,148,0.5)",
                //     // strokeColor: "rgba(26,179,148,0.7)",
                //     pointBorderColor: "#fff",
                //     pointBackgroundColor: "rgba(26,179,148,1)",
                //     // pointStrokeColor: "#fff",
                //     // pointHighlightFill: "#fff",
                //     // pointHighlightStroke: "rgba(26,179,148,1)",
                //     borderColor: 'rgba(26, 179, 148, 0.7)',
                //     data: [4,5,6],
                //     borderWidth: 1.5
                // }
            ]
        };

        var lineOptions = [
            {
                scaleShowGridLines: true,
            },
            {
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                }
            },
            {
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }]
                }
            },
            {
                gridLines: {
                    display: false
                }
            }
            // scaleGridLineColor: "rgba(0,0,0,.05)",
            // scaleGridLineWidth: 0.5,
            // bezierCurve: true,
            // bezierCurveTension: 0.4,
            // pointDot: true,
            // pointDotRadius: 4,
            // pointDotStrokeWidth: 1,
            // pointHitDetectionRadius: 20,
            // datasetStroke: true,
            // datasetStrokeWidth: 2,
            // datasetFill: true,
            // responsive: true,
            //showTooltips: false
            // scales: {
            //     yAxes: [{
            //         gridLines: {
            //             drawBorder: false,
            //         }
            //     }]
            // },
            // elements: {
            //     line: {
            //         tension: 5, // disables bezier curves
            //     }
            // },
            // // scaleShowVerticalLines: false
            // scales : {
            //     xAxes : [ {
            //         gridLines : {
            //             display : false
            //         }
            //     } ]
            // },


        ];

        var chartOptions = {
            responsive: true,
            //Custom legend
            legend: {
                display: true,
                // display: false, //k hien thi legend
                // display: false,
                position: 'top',
                labels: {
                    boxWidth: 0,
                    fontColor: 'white'
                }
            },

            //xoa gridLine
            scales: {
                xAxes: [{
                    // gridLines: {
                    //     display: false
                    // },
                    barPercentage: 1.0,
                    categoryPercentage: 0.1
                    // categorySpacing: 5
                }],
                yAxes: [{
                    // gridLines: {
                    //     display: false
                    // },
                    ticks: {
                        // max: 2000,
                        min: 0,
                        // stepSize: 250,
                        beginAtZero: true,
                        padding: 20,
                        // callback: function (value, index, values) {
                        //     return value / 1000 + "k";
                        // }
                    }
                }]
            },
        };

        var ctx = document.getElementById("lineChart1").getContext("2d");
        var myBarChart = new Chart(ctx, {
            type: "line",
            data: lineData,
            // options: {
            // 	// // bezierCurve: true,
            // 	// // bezierCurveTension: 0.4,
            // 	// pointDot: true,
            // 	// pointHoverRadius: 5,
            // 	// lineTension: 10,
            // 	// legend: {
            // 	//     display: true,
            // 	//     labels: {
            // 	//         fontColor: 'rgb(255, 99, 132)'
            // 	//     }
            // 	// }
            //     legend: {
            //         display: true,
            //         position: 'top',
            //         labels: {
            //             boxWidth: 80,
            //             fontColor: 'black'
            //         }
            //     }
            // }
            options: chartOptions
        });
    }
    

    render() {

        return (
            <React.Fragment>
            <canvas id="lineChart1" height="100%" />
            <div class="row text-center">
                <div class="col-lg-4 col-md-4 m-t-20"><h1 class="m-b-0 font-light">5098</h1><small>Total Sent</small></div>
                <div class="col-lg-4 col-md-4 m-t-20"><h1 class="m-b-0 font-light">4156</h1><small>Mail Open Rate</small></div>
                <div class="col-lg-4 col-md-4 m-t-20"><h1 class="m-b-0 font-light">1369</h1><small>Click Rate</small></div>
                </div>
            </React.Fragment>
        );
    }
}

export default LineGraph;