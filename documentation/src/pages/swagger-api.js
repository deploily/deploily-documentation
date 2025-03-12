import React, { useEffect, useState } from 'react';
import "swagger-ui-react/swagger-ui.css";

export default function SwaggerDocs() {
    const [SwaggerUI, setSwaggerUI] = useState(null);

    useEffect(() => {
        import('swagger-ui-react').then((mod) => {
            setSwaggerUI(() => mod.default);
        });
    }, []);

    if (!SwaggerUI) return <div>Loading Swagger UI...</div>;

    return <SwaggerUI url="/openapi.json" />;
}
