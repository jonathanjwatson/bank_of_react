import React, {Component} from 'react'

class Debit extends Component {

    render() {
        return(
            <div key={this.props.id}>

                
                <p><strong> Amount: {this.props.debitAmount}</strong></p>
                <p>Description: {this.props.debitDescription}</p>
                <p>Date: {this.props.debitDate}</p>
            </div>
        ) 
    }
}
export default Debit;