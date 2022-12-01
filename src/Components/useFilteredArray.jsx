import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useFilteredArray = (brewerys, filterProps) => {
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        if (brewerys) {
            const filteredData = brewerys.filter((item) => {
                return filterProps.every((prop) => item[prop]);
            })
            setFilteredData(filteredData);
        }
    },[brewerys, filterProps])

    
  return filteredData;
  
}

export default useFilteredArray