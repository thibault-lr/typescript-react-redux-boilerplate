import * as React from "react"

import "./style.scss"

interface IHeaderCardProps {
  content: string
}

const HeaderCard = (props: IHeaderCardProps) => (
  <div className="HeaderCard">
    {props.content}
  </div>
)

export {
   HeaderCard,
   IHeaderCardProps
}