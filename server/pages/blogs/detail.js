import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'

export default class detail extends Component {

    static async getInitialProps({query}){
        const res = await  axios.get('http://localhost:3001/blogs/'+query.id)
        return {blogs:res.data}
    }
    renderDetail = blogs =>{
        const date = new Date(blogs.update_date)
        return(
            
                <div className="row">
                    <div className="col-6">
                        <img src ={blogs.thumbnail} className="img-fluid img-left"></img>
                    </div>
                    <div className="col-6">
                     <h3>{blogs.subject}</h3>
                     <h5>{blogs.detail}</h5>
                     <hr/>
                        <h5 className=" mt-6 text-info">Write By {blogs.created_by.user.firstname} {blogs.created_by.user.lastname}</h5> 
                      <h5 className="text-success">{date.toLocaleDateString()}</h5>
                    </div>

                </div>
               
        
        )
    }
    render() {
        
        return (
            <Layout title="detail" >
                <div className="container-fluid">
                    {this.renderDetail(this.props.blogs)}
                </div>
                <hr />
                <style jsx>
                    {`
                    .title{
                        color:blue;
                        text-align :center;
                    },
                    .detail{
                        color:green;
                        word-spacing:5
                    }
                    `}
                </style>
            </Layout>
            
        )
    }
}
