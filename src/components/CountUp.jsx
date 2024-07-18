import { useState } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
export default function (props){
const [focus, setFocus] = useState(false);

    return(
        <> <CountUp
                      start={focus ? 0 : null}
                      end={props.data.countNum}
                      duration={3}
                      suffix={props.data.suffix}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setFocus(true);
                            }
                          }}
                        >
                          <span class="statistics__count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp></>
    )
};