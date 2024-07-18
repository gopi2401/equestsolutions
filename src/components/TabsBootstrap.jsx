import { Tab, Tabs } from "react-bootstrap";
export default function (props) {
  return (
    <>
      <Tabs id="uncontrolled-tab-example" className="mb-3">
        {props.data.map((val, index) => {
          return (
            <Tab eventKey={"offer-tab-" + index} key={index} title={val.title}>
              <div className="tab_content">
                <p>{val.description}</p>
                <ul>
                  {val.detailList.map((val, index) => {
                    return <li key={index}>{val.listItem}</li>;
                  })}
                </ul>
              </div>
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
}
