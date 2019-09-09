import * as React from "react"

import  "./style.scss"

export interface ITitle {
  title: string
}


const Title = (props: ITitle) => <h1 className="title">{props.title}</h1>

export default Title