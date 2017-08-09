import React, {Component} from 'react'

class Debit extends Component {

    render() {
        const key = this.props.key
        return(
            <div key={this.props.key}>

                <p>Debit Description: {this.props.debitDescription}</p>
                <p>Debit Amount: {this.props.debitAmount}</p>
            </div>
        ) 
    }
}
export default Debit;