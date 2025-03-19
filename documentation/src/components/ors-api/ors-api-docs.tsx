import React from "react";
import OpenApiContainer from "../Api/openApiContainer";
export default function OrsApiDocs() {
    return (
        <div title="Open route service API documentation">
            <OpenApiContainer apiDescriptionUrl="./../openapi-files/ors-openapi.json" />
        </div>
    );
}
