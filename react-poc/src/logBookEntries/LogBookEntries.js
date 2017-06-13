import React, {Component} from 'react';
import './LogBookEntries.css';

class LogBookEntries extends Component {

    constructor(props) {
        super(props);
        this.state = {entries: []};
    }

    fetchLogBookEntries() {
        return fetch('/logbook')
            .then(response => response.json())
            .catch(error => console.log('Could not fetch logbook entries...', error));
    }

    render() {
        this.fetchLogBookEntries().then(result => this.setState({entries: result}));

        return (
            <div className="logBookEntries">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Dive Date</th>
                        <th>Bottom Time</th>
                        <th>Dive Site</th>
                        <th>Depth</th>
                        <th>Visibility</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.entries.map((dive, i) => {
                            let diveDate = new Date(Date.parse(dive.diveDate));

                            return (
                                <tr key={i}>
                                    <td key="diveDate">{diveDate.toLocaleDateString()} {diveDate.toLocaleTimeString()}</td>
                                    <td key="bottomTime">{dive.bottomTime}</td>
                                    <td key="diveSite">{dive.diveSite}</td>
                                    <td key="depth">{dive.depth}</td>
                                    <td key="visibility">{dive.visibility}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LogBookEntries;