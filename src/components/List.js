/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

export default function List(props) {
  //const { url } = props;
  const url =
    "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}users.json`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setList(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleClick = (id) => {
    setList((prevList) =>
      prevList.map((item) => {
        let activeItem = false;
        if (item.id === id) {
          activeItem = true;
        }
        return {
          id: item.id,
          name: item.name,
          active: activeItem,
        };
      })
    );
    props.onClickItem(id);
  };

  return (
    <React.Fragment>
      {isLoading && <p className="loading">Loading...</p>}
      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={item.active ? "active" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}