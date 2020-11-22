import React from 'react'
import {useGlobalContext} from "../../state/StateContext"
import "../../Style/ResultSearch.css"

export const ResultSearch = () :JSX.Element => {
  const state= useGlobalContext()
  const listResult = ()=>{
    return state.searchCityList.list.data.results.map((datas, index)=>{
      return <div className="item" key={index} lat-coord={datas.geometry.lat} lng-coord={datas.geometry.lng}>
        {datas.formatted}
      </div>
    })
  }
    
    
    return <div className="ui list divided ResultSearch">{listResult()}</div>
}
