import React from "react";
import OpenApiContainer from "../components/Api/openApiContainer";


export default function page() {
    return (
        <div title="Nominatim API documentation">
            <OpenApiContainer apiDescriptionUrl="/openapi-files/nominatim-openapi.json" />
        </div>
    );
}