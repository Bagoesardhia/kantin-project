import React from "react";

import { Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function collateralForm() {

    const [coll, setColl] = useState([{'name':'','id':''}])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5522/api/v1//coll/item')
            const newData = await response.json()
            setColl('')
            setColl(newData)
            console.log(newData)
        }
        fetchData()
    },[])

  return (
    <div className="collateralForm">
        <div className="w-80 mx-auto">
          <Select label="Collateral">
          {coll.map(Coll => (
              <Option value={Coll.coll_name} >{Coll.coll_name}</Option>
    
              ))
              }
          </Select>
      </div>
    </div>
  );
}
