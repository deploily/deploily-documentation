import React from "react";

const services = [
    {
        title: "Commune Lookup",
        description:
            "Retrieve detailed information about a commune using geographic coordinates. Ideal for mapping applications and administrative data retrieval.",
        icon: "🏙️",
    },
    {
        title: "Wilaya Lookup",
        description:
            "Fetch wilaya (province) details based on latitude and longitude. Useful for regional classification and location-based services.",
        icon: "📍",
    }
];

const WilayaCommuneServicesListContainer = () => {
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


export default WilayaCommuneServicesListContainer;


