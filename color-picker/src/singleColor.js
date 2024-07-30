import React, {useState, useEffect} from "react";

import rgbToHex from "./utils";

const SingleColor = ({rgb, weight, hex, index, hexColor}) => {
  const [alert, setAlert] = useState(false);

  const abc = rgb.join(',');
  let hexValue = `#${hexColor}`;

  useEffect(() => {
    const valueOfTimeOut = setTimeout(() => {
      setAlert(false);
    }, 1000)
    return () => clearTimeout(valueOfTimeOut);
  }, [alert]);

    return <article className={`color`} style={{backgroundColor: `rgb(${abc})`}} onClick={() => {
      setAlert(true);
      navigator.clipboard.writeText(hexValue);
    }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert &&  <p className="alert">color copied</p>}
    </article>
}

export default SingleColor;
