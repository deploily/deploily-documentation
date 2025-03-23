import React from "react";

const services = [
    {
        title: "Forward Geocoding",
        description:
            "Convert place names, addresses, or keywords into geographic coordinates. Ideal for mapping and navigation applications.",
        icon: "📍",
    },
    {
        title: "Reverse Geocoding",
        description:
            "Retrieve detailed location information from latitude and longitude. Useful for tracking, reporting, and user location services.",
        icon: "🔄",
    },
    {
        title: "Autocomplete Search",
        description:
            "Get instant location suggestions as users type. Enhances search experiences in apps and websites.",
        icon: "⚡",
    },
    {
        title: "High-Speed Search",
        description:
            "Optimized for quick and accurate location searches, making it ideal for large-scale applications.",
        icon: "🚀",
    },
    {
        title: "OpenStreetMap Data",
        description:
            "Powered by OpenStreetMap, ensuring up-to-date and community-driven location data.",
        icon: "🌍",
    },
    {
        title: "Multilingual Support",
        description:
            "Supports multiple languages, making it accessible for global applications.",
        icon: "🗣️",
    },
];


const PhotonServicesListContainer = () => {
    return (
        <div className="container">
            <div className="row">
                {services.map((service, index) => (
                    <div key={index} className="col col--4">
                        <div >
                            <div className="card__header">
                                <h3>{service.icon} {service.title}</h3>
                            </div>
                            <div className="card__body">
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default PhotonServicesListContainer;


