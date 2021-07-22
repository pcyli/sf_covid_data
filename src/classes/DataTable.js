import React from 'react';
import DataRow from "./DataRow";

export default class DataTable extends React.Component {
    render () {
        const { dataset } = this.props;

        const rows = dataset.map((data, index) => <DataRow data={data} key={index} /> );

        return (
            <table key={'datatable'}>
                <thead>
                    <tr>
                        <td>tests</td>
                        <td>pos</td>
                        <td>neg</td>
                        <td>indeterminate</td>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        );
    }
}
