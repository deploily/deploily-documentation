import React from "react";

const services = [
    {
        title: "Forward Geocoding",
        description:
            "Convert addresses or place names into precise geographic coordinates. Ideal for mapping applications and location-based services.",
        icon: "📍",
    },
    {
        title: "Reverse Geocoding",
        description:
            "Obtain human-readable addresses from geographic coordinates. Useful for navigation, tracking, and location intelligence.",
        icon: "🔄",
    },
    {
        title: "Search",
        description:
            "Perform powerful location-based searches to find places, landmarks, and administrative regions with high accuracy.",
        icon: "🔍",
    },
    {
        title: "Autocomplete",
        description:
            "Enhance user experience with instant address and place suggestions while typing. Perfect for search boxes and input fields.",
        icon: "⚡",
    },
    {
        title: "Address Lookup",
        description:
            "Retrieve detailed address information, including street, city, and country, for a given location or place ID.",
        icon: "🏠",
    },
    {
        title: "Bounding Box Search",
        description:
            "Find locations within a specified geographical bounding box, ideal for region-specific applications and filtering.",
        icon: "🗺️",
    },
    {
        title: "Nearby Places",
        description:
            "Discover points of interest around a given location, including amenities, businesses, and landmarks.",
        icon: "📌",
    },
];

const NominatimServicesListContainer = () => {
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

export default NominatimServicesListContainer;
