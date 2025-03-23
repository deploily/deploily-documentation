import React, { Suspense } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Fallback } from "../Fallback";

const LazyStoplight = React.lazy(() => import("./stoplightComponent"));

export default function OpenApiContainer({apiDescriptionUrl}) {
  return (
    <div>
      <BrowserOnly>
        {() => (
          <Suspense fallback={Fallback}>
            <LazyStoplight apiDescriptionUrl={apiDescriptionUrl} />
          </Suspense>
        )}
      </BrowserOnly>
    </div>
  );
}
