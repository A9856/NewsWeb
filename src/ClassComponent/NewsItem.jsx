import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewsItem extends Component {
    render() {
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
                <div className="card">
                    <img src={this.props.pic?this.props.pic:"/images/noimage.png"}height={200} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <div className='source'>
                            <p>{this.props.source}</p>
                            <p>{new Date(this.props.date).toLocaleDateString()}</p>
                        </div>
                        <p className="card-text">{this.props.description}</p>
                        <Link to={this.props.url}target="_blank" rel="noreferrer"class="btn btn-primary">Read Full Articles</Link>
                    </div>
                </div>
            </div>
        )
    }
}
