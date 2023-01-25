export default function Card(props) {

    return (
    <div className="card">
        <div className="card-image-container">
            <img 
            className="card-img"
            src={`./public/images/${props.item.image}`} 
            alt="location image" 
            />
        </div>
        <div className="card-details-container">
            <div className="location-details-container">
                <img src="./public/images/location-pin.png" alt="image of a location pin" />
                <p className="location-p el-shadow">{`${props.item.location}`}</p>
                <a href={`${props.item.googleMapsUrl}`} target="_blank" className="map-url el-shadow">View on Google Maps</a>
            </div>
            <div className="title-wrapper">
                <h2 className="card-title remove-margin text-color el-shadow">{`${props.item.title}`}</h2>
            </div>
            <div className="date-info-wrapper">
                <p className="date-info text-color el-shadow">{`${props.item.startDate} - ${props.item.endDate}`}</p>
            </div>
            <div className="description-wrapper">
                <p className="description remove-margin text-color el-shadow">{`${props.item.description}`}</p>
            </div>
        </div>
    </div>
    )
}