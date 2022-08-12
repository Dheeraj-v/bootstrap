import React, { useState, useEffect } from "react";
import { POST, GET, DELETE } from "../restAPI";

function GlovoMain() {
  const [AddGlovoName, setGlovoName] = useState("");
  const [listGlovoNames, setListGlovoNames] = useState([]);
    //https://crud-challenge.herokuapp.com/
  useEffect(() => {
    getGloverList();
  }, []);

  const getGloverList = async () => {
    const glovoUserList = await GET("/glovers");
    const { data = {} } = glovoUserList;
    let list = [];
    if (Object.keys(data).length > 0) {
      list = Object.values(data);
    }
    setListGlovoNames(list);
  };
  const handleAdd = async () => {
    if (AddGlovoName !== "") {
      const postResult = await POST("/glovers", { name: AddGlovoName });
      const { status = 500 } = postResult;
      if (status === 200) {
        getGloverList();
      }
    }
  };
  const handleOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setGlovoName(value);
  };
  const handleRemove = async (event) => {
    console.log(event.target);
    const value = event.target.getAttribute("attr-list");
    const deleteResult = await DELETE(`/glovers/${value}`);
    if (deleteResult.status === 200) {
      const result = listGlovoNames.filter((list) => list.id != value);
      setListGlovoNames(result);
    }
  };
  return (
    <div>
      <input
        type="text"
        name="gloversname"
        value={AddGlovoName}
        onChange={handleOnChange}
      />
      <button onClick={handleAdd}>ADD</button>
      <div>
        {listGlovoNames.length > 0 &&
          listGlovoNames.map((list) => {
            return (
              <li key={list.id}>
                {list.name}{" "}
                <button onClick={handleRemove} attr-list={list.id}>
                  Remove
                </button>
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default GlovoMain;
