import React from "react";
import OpenApiContainer from "../components/Api/openApiContainer";


export default function page() {
    return (
        <div title="WilayaCommune API documentation">
            <OpenApiContainer apiDescriptionUrl="/openapi-files/wilaya-commune-openapi.json" />
        </div>
    );
}