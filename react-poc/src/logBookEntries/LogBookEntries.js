import React, {Component} from 'react';
import './LogBookEntries.css';

class LogBookEntries extends Component {

    constructor(props) {
        super(props);
        this.state = {entries: [], newEntry: {}};
    }

    componentWillMount() {
        this.resetNewEntry();
        this.fetchLogBookEntries();
    }

    render() {
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
                        <th>Action</th>
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
                                    <td key="action">
                                        <button type="button" className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    <tr key="new">
                        <td key="diveDate">
                            <input id="diveDate" className="form-control" type="datetime-local"
                                   value={this.state.newEntry.diveDate} onChange={event => this.fieldChanged(event)}/>
                        </td>
                        <td key="bottomTime">
                            <input id="bottomTime" className="form-control" type="text"
                                   value={this.state.newEntry.bottomTime} onChange={event => this.fieldChanged(event)}/>
                        </td>
                        <td key="diveSite">
                            <input id="diveSite" className="form-control" type="text"
                                   value={this.state.newEntry.diveSite} onChange={event => this.fieldChanged(event)}/>
                        </td>
                        <td key="depth">
                            <input id="depth" className="form-control" type="number"
                                   value={this.state.newEntry.depth} onChange={event => this.fieldChanged(event)}/>
                        </td>
                        <td key="visibility">
                            <input id="visibility" className="form-control" type="number"
                                   value={this.state.newEntry.visibility} onChange={event => this.fieldChanged(event)}/>
                        </td>
                        <td key="action">
                            <button type="button" className="btn btn-default"
                                    onClick={event => this.createLogBookEntry(event)}>Add
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    fetchLogBookEntries() {
        return fetch('/logbook')
            .then(response => response.json())
            .then(result => this.setState({entries: result}))
            .catch(error => console.log('Could not fetch logbook entries...', error));
    }

    createLogBookEntry() {
        return fetch(
            '/logbook', {
                method: 'POST',
                headers: new Headers({"Content-Type": "application/json"}),
                body: JSON.stringify(this.state.newEntry)
            })
            .then(() => this.fetchLogBookEntries())
            .then(() => this.resetNewEntry());
    }

    fieldChanged(event) {
        let newEntry = this.state.newEntry;
        newEntry[event.target.id] = event.target.value;

        this.setState({newEntry: newEntry});
    }

    resetNewEntry() {
        this.setState({newEntry: {diveDate: "", bottomTime: "", diveSite: "", depth: "", visibility: ""}});
    }
}

export default LogBookEntries;