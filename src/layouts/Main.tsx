import * as React from "react" 

import { Header } from "components/molecules/Header"
import { IHeaderCardProps } from "components/atoms/HeaderCard"

import "./style.scss"

class MainLayout extends React.Component<{children: any}, {}> {
  public render(): JSX.Element {

    const items: IHeaderCardProps[] = [
      {content : "Header"},
      {content : "Header2"},
      {content : "Header3"}
    ]

    return (
      <div className="main">
        <Header items={items} />
        {this.props.children}
      </div>
    )
  }
}

export default MainLayout