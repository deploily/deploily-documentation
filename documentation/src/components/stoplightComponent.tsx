import React, { useEffect, useState } from "react";
import '@stoplight/elements/styles.min.css';
import { API  } from "@stoplight/elements";

interface StoplightProps {
  apiDescriptionUrl: string;
}


export function Stoplight({ apiDescriptionUrl }: StoplightProps) {

  if (!API) return <p>Loading...</p>;
  return (
    <div >
      <API apiDescriptionUrl={apiDescriptionUrl} router="hash" />
    </div>
  );
}

export default Stoplight;
