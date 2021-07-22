import React from 'react';

export default class DataRow extends React.Component {
    render () {
        const { data : {pct, tests, pos, neg, indeterminate} }  = this.props;

        return (
            <tr key={pct}>
                <td>{tests}</td>
                <td>{pos}</td>
                <td>{neg}</td>
                <td>{indeterminate}</td>
            </tr>
        );
    }
}