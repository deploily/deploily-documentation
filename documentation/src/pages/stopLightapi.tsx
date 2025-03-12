import React, { Suspense } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Fallback } from "../components/Fallback";

const LazyStoplight = React.lazy(() => import("../components/stoplightComponent"));

export default function Api() {
  return (
    <div title="API example">
      <BrowserOnly>
        {() => (
          <Suspense fallback={Fallback}>
            <LazyStoplight apiDescriptionUrl="/openapi.json" />
          </Suspense>
        )}
      </BrowserOnly>
    </div>
  );
}
