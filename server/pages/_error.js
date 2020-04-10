import React, { Component } from 'react'

export default class _error extends Component {

    static getInitialProps({res,error}){
            const statusCode = res ? res.statusCode:error ? error.statusCode:null;
            return {statusCode}
    }
    render() {
        return (
            <div className="container">
                <div className="text-center">
                        {this.props.statusCode ?
                            'An Error' + this.props.statusCode + "  ocored on SERVER":
                            'An Error client'
                    }
                </div>
                
            </div>
        )
    }
}
