import React, { Component } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import Link from 'next/link'
export default class index extends Component {

    static async getInitialProps(){
        const res = await axios.get('http://localhost:3001/blogs')
        return {blog:res.data}
    }
    renderNews = blogs =>{
        return(
            blogs.map(blog=>{
                
                return (
                    <div key={blog.id} className="col-6">
                        <img className="img-fluid" src={blog.thumbnail}></img>
                        <h4 className="mt-3">
                            <Link as={'blogs/detail/'+blog.id} href={"/blogs/detail?id="+ blog.id}>
                            {blog.subject}
                            </Link>
                            
                        </h4>
                        <hr/>
                        <h5>{blog.intro}</h5>

                    


                    </div>
                )
            })
        )
    }
    render() {

        return (
            <div>
               <Layout >
                <div className="container">  
                    <div className="row">
                  
                            {this.renderNews(this.props.blog)}
                      

                    </div>
              

                </div>

               </Layout>
                
            </div>
        )
    }
}
