import React from "react";
import OpenApiContainer from "../components/Api/openApiContainer";


export default function page() {
    return (
        <div title="Open route service API documentation">
            <OpenApiContainer apiDescriptionUrl="/openapi-files/ors-openapi.json" />
        </div>
    );
}