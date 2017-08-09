import React, { Component } from 'react';
import Debit from './Debit'

class Debits extends Component {
    render() {
        const debits=this.props.debits;
        const debitComponents = debits.map((debit, index) => {
            return <Debit 
                        debitDescription={debit.description}
                        debitAmount={debit.amount}
                        id={index}
                        key={index} />;

        });
        return (
            <div>
                {debitComponents}
            </div>
        );
    }
}

export default Debits;