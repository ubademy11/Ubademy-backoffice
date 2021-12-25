import React from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import UserTable from '../components/users/UserTable.jsx';
import * as Constants from '../constants.js';
import { Paper } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

class Metrics extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            metricsInterval: 'week',
            metrics: {},
            loading: true
        };

        this.getMetrics = this.getMetrics.bind(this);
        this.setInterval = this.setInterval.bind(this);
    }

    async getMetrics() {
        this.setState({ loading: true });
        const interval = this.state.metricsInterval.charAt(0).toUpperCase() + this.state.metricsInterval.slice(1);

        let response = await axios.get(Constants.METRICS_INTERVAL_URL + interval);

        const metrics = {};

        for (const i of response.data) {
            console.log(i.name);
            switch(i.name) {
                case interval + " logged users GOOGLE":
                    metrics["loginsGoogle"] = i.value;
                    break;
                case interval + " logged users PASSWORD":
                    metrics["loginsPassword"] = i.value;
                    break;
                case interval + " registered users PASSWORD":
                    metrics.newUsersPassword = i.value;
                    break;
                case interval + " registered users GOOGLE":
                    metrics.newUsersGoogle = i.value;
                    break;
                case interval + " logged users":
                    break;
                default:
                    break;
            }
        }

        console.log(metrics);

        this.setState({ 
            metrics,
            loading: false 
        });
    }
    
    setInterval(prevInterval, newInterval) {
        if(newInterval == null) {
            return;
        }

        this.setState({ metricsInterval: newInterval });
        this.getMetrics();
    }

    componentDidMount() {
        ChartJS.register(
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend
          );
    }

    loadOptions() {
        return {
            responsive: true,
            plugins: {
                legend: {
                position: 'top',
                },
                title: {
                display: true,
                text: '',
                },
            },
        };
    }

    loadData() {

        const labels = ['New users with password', 'New Google users'];
        console.log(this.state.metrics.loginsPassword);

        return {
        labels,
        datasets: [
            {
                label: 'New users with password',
                data: [this.state.metrics.newUsersPassword, "0"],
                backgroundColor: 'rgba(120,40,140,0.6)',
            },
            {
                label: 'New Google users',
                data: ["0", this.state.metrics.newUsersGoogle],
                backgroundColor: 'rgba(120,40,140,0.9)',
            },
        ],
        };
    }

    loadDataLogin() {

        const labels = ["Logins with password", 'Google logins'];
        console.log(this.state.metrics.loginsPassword);

        return {
        labels,
        datasets: [
            {
                label: 'Logins with password',
                data: [this.state.metrics.loginsPassword, "0"],
                backgroundColor: 'rgba(120,40,140,0.2)',
            },
            {
                label: 'Google logins',
                data: ["0", this.state.metrics.loginsGoogle],
                backgroundColor: 'rgba(120,40,140,0.4)',
            },
        ],
        };
    }

    render() { 
        return (
            <div className='metrics-page'>
            <div className="metrics-page-container">
                <h2>Metrics</h2>
                <div className = "metrics-controls">
                    <Button className="btn refresh-btn" variant="contained" startIcon={<RefreshIcon />} onClick={this.getMetrics}>
                        Refresh
                    </Button>

                    <ToggleButtonGroup
                        className="interval-controls"
                        color="primary"
                        value={this.state.metricsInterval}
                        exclusive
                        onChange={this.setInterval}
                        >
                        <ToggleButton value="week">Week</ToggleButton>
                        <ToggleButton value="month">Month</ToggleButton>
                        <ToggleButton value="year">Year</ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <Paper className='metrics-container'>
                    <table className ='metrics-table'>
                    <tr className='metrics-table-header'>
                        <th>Metric</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td className='metric-name'>Logins with password in the last {this.state.metricsInterval}</td>
                        <td>{this.state.metrics.loginsPassword}</td>
                    </tr>
                    <tr>
                        <td className='metric-name'>Google logins in the last {this.state.metricsInterval}</td>
                        <td>{this.state.metrics.loginsGoogle}</td>
                    </tr>
                    <tr>
                        <td className='metric-name'>New users with password in the last {this.state.metricsInterval}</td>
                        <td>{this.state.metrics.newUsersPassword}</td>
                    </tr>
                    <tr >
                        <td className='metric-name'>New google users in the last {this.state.metricsInterval}</td>
                        <td>{this.state.metrics.newUsersGoogle}</td>
                    </tr>
                    </table> 
                </Paper>
            </div>
            <div class="grafico">
                <Bar options={this.loadOptions()} data={this.loadDataLogin()} />
            </div>
            <div class="grafico">
                <Bar options={this.loadOptions()} data={this.loadData()} />
            </div>
            </div>
        )
    }
}

export default Metrics;