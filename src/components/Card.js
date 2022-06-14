import React from "react"

export default function Card(props) {
    return(
        <section>
            <img src={props.items.imageUrl} />
            <div className="card-info">
                <div className="card-location-info">
                    <img src="/images/Marker.png" />
                    <p className="card-location">
                        {props.items.location}
                    </p>
                    <a  className="gmaps-link"
                        href={props.items.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </div>
                <h1 className="card-title">
                    {props.items.title}
                </h1>
                <h2 className="card-dates">
                    {props.items.startDate} <span>{props.items.endDate && <span>- {props.items.endDate}</span>}</span>
                </h2>
                
                <p className="card-description">
                    {props.items.description}
                </p>
            </div>
        </section>
    )
}