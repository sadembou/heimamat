'use client'

import React, { createContext, SetStateAction, useContext, useState } from "react";

type IFiltercontextType ={
    categoryFilters:string[],
    setCategoryFilters: React.Dispatch<SetStateAction<string[]>>,
    sort:string,
    setSort:React.Dispatch<SetStateAction<string>>
}

export const INITIAL_FILTER_DATA = {
    categoryFilters:[],
    setCategoryFilters: ()=>[],
    sort:'',
    setSort: ()=>''
}

const FilterContext = createContext<IFiltercontextType>(INITIAL_FILTER_DATA);

export const FilterProvider = ({children} : {children: React.ReactNode})=>{
    const [categoryFilters, setCategoryFilters] = useState([]);
    const [sort, setSort] = useState('-createdAt');
    return (
        <FilterContext.Provider value={
            {
                categoryFilters,
                setCategoryFilters,
                sort,
                setSort,
            }
        }>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter =()=>useContext(FilterContext);