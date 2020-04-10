import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import head from 'next/head'

export default class Layout extends Component {
    render() {
        const {children,title ="Home"} = this.props
        return (
            <div>
                <head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/static/css/style.css" />
                </head>
                <Header />
                {children}
                <Footer />
            </div>
        )
    }
}
