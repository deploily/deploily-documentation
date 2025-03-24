import React from "react";
import OpenApiContainer from "../components/Api/openApiContainer";


export default function page() {
    return (
        <div title="Photon API documentation">
            <OpenApiContainer apiDescriptionUrl="./openapi-files/photon-openapi.json" />
        </div>
    );
}