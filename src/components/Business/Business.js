import React from 'react';
import './Business.css';






class Business extends React.Component {
    render() {
        const {business} = this.props;
        const maps = "https://www.google.com/maps/search/?api=1&query=" +  business.name + ",+" + business.address;
              
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={business.imageSrc} alt=''/>
                </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
               <a href={maps} target="_blank"><p>{business.address}</p>
                <p>{business.city}</p></a>
                <p>{business.state} {business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                <h3>{business.category}</h3>
                <h3 className="rating">{business.rating}stars</h3>
                <p>{business.reviewCount} reviews</p>
                </div>
            </div>
            </div>
        );
        
    }
}


export default Business;