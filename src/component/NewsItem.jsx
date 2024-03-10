import React from 'react'

const NewsItem = ({tile, decription,src,url}) => {
    return (
        <div className='p-5' style={{display:"inline-block" ,marginLeft:"5%"}}>
        
            <div className="card" style={{ width: "18rem" }}>
                <img src={src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {tile}</h5>
                    <p className="card-text">
                        {decription}
                    </p>
                    <a href={url} className="btn btn-primary">
                       Read More
                    </a>
                </div>
            </div>
          

        </div>
    )
}

export default NewsItem
