import * as React from "react" 

import { IHeaderCardProps, HeaderCard } from "components/atoms/HeaderCard"

import "./style.scss"


interface IHeaderProps {
  items: IHeaderCardProps[]
}

export const Header = (props: IHeaderProps ) => {
  return (
  <div className="header">
    {
      props.items.map( (item, i) => 
        <HeaderCard content={item.content} key={`item-${i}`} /> 
        )
    }
  </div>
)

  }