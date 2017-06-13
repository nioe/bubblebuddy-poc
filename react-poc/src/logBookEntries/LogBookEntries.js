import React, {Component} from 'react';
import './LogBookEntries.css';

class LogBookEntries extends Component {
    entries = [
        {
            "id": "593e9f085baab32db31a4bfd",
            "diveDate": "2017-06-12T16:02:48.605",
            "bottomTime": "PT51M",
            "diveSite": "Gaia Corner",
            "depth": 21.3,
            "visibility": 10
        },
        {
            "id": "593e9f975baab32db31a4bfe",
            "diveDate": "2017-06-12T16:05:33",
            "bottomTime": "PT48M",
            "diveSite": "Ron's Reef",
            "depth": 24,
            "visibility": 8
        },
        {
            "id": "593eadbb5baab33842815437",
            "diveDate": "2017-06-12T16:53:32",
            "bottomTime": "PT48M20S",
            "diveSite": "Sapi Sloce",
            "depth": 15.3,
            "visibility": 12
        }
    ];


    render() {
        return (
            <div className="LogBookEntries">
                <table>
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
                        this.entries.map((dive, i) => {
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