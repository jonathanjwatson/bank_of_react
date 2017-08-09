import React, { Component } from 'react';
import Debit from './Debit'
import {Link} from 'react-router-dom';

class Debits extends Component {
    render() {
        const debits=this.props.debits;
        const debitComponents = debits.map((debit, index) => {
            return <Debit 
                        debitDescription={debit.description}
                        debitAmount={debit.amount}
                        debitDate={debit.date}
                        id={index}
                        key={index} />;

        });
        return (
            <div>
                <h1>Debits</h1>
                {debitComponents}
                <Link to='/'>Home</Link>
            </div>
        );
    }
}

export default Debits;