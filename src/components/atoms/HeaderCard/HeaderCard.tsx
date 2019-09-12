import * as React from "react"

import "./style.scss"

export interface IHeaderCardProps {
  content: string
}

export const HeaderCard = (props: IHeaderCardProps) => (
  <div className="HeaderCard">
    {props.content}
  </div>
)