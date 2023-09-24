import React from "react";
import PropTypes from "prop-types";

const newsitem =(props)=>{
  
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div>
      <div className="card" style={{height:"28rem",padding:'0',border:'1px solid rgba(0,0,0,0.3)',boxShadow:'5px 5px 10px rgba(0,0,0,.5)'}}>

        <div className="d-flex position-absolute" style={{right:'0'}} >
        <span className="badge rounded-pill bg-danger " > {source}</span>
        </div>

        <img src={imageurl} className="card-img-top" alt="..." style={{height:'10rem'}}/>

        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{description}....</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsurl} className="btn btn-dark btn-sm " target="/blank" style={{position:'absolute',bottom:'20px'}}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );

}

export default newsitem;
