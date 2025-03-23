import React from "react";

const services = [
    {
        title: "Directions",
        description:
            "Openrouteservice’s directions can be used all around the globe. Consume rich route instructions in your applications for cars, trucks, different bike profiles, walking, hiking, or wheelchair.",
        icon: "🚗",
    },
    {
        title: "Isochrones",
        description:
            "Reachability is a crucial component for many organizations. Use openrouteservice to obtain isochrones to determine which areas objects can reach in given times or distances.",
        icon: "📅",
    },
    {
        title: "Time-Distance Matrix",
        description:
            "Matrices allow you to compute many-to-many distances and times of routes efficiently. Frequently used by logistics organizations for optimal delivery routes.",
        icon: "📊",
    },
    {
        title: "Pelias Geocoding",
        description:
            "Geocoding transforms a location description into a normalized point geometry. Built on top of the sophisticated Pelias Stack, aggregating multiple data sources.",
        icon: "📍",
    },
    {
        title: "POIs",
        description:
            "Openpoiservice allows you to find places of interest around or within given geographic coordinates and search for categories of points of interest.",
        icon: "📌",
    },
    {
        title: "Elevation",
        description:
            "Use our Openelevationservice to enrich 2D geometries with height information based on SRTM data, returning a 3D version within milliseconds.",
        icon: "🏔️",
    },
    {
        title: "Optimization",
        description:
            "Solve Traveling Salesmen and Vehicle Routing Problems using our optimization endpoint, based on the Vroom project.",
        icon: "🛤️",
    },
];
const ServicesListContainer = () => {
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

export default ServicesListContainer;
