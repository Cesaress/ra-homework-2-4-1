/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

export default function Details(props) {
  const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";
  const { dataId } = props;
  const [details, setDetails] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${dataId}.json`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setDetails(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataId]);

  return (
    <React.Fragment>
      {isLoading && <p className="loading">Loading...</p>}
      {details && (
        <div id={details.id} className="details">
          <img src={details.avatar} />
          <p className="name">{details.name}</p>
          <p>City: {details.details.city}</p>
          <p>Company: {details.details.company}</p>
          <p>Position: {details.details.position}</p>
        </div>
      )}
    </React.Fragment>
  );
}