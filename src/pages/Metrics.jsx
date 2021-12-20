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

        //TODO: Integrar con API
        /*let response = await axios.get(Constants.METRICS_URL);

        const metrics = response.data;*/

        const metrics = {
            loginsPassword: Math.floor(Math.random() * 100),
            loginsGoogle: Math.floor(Math.random() * 100),
            newUsersPassword: Math.floor(Math.random() * 100),
            newUsersGoogle: Math.floor(Math.random() * 100)
        };

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

    }

    render() { 
        return (
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
        )
    }
}

export default Metrics;