import * as React from "react";

import Title from "./atoms/Title/Title"


class App extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Title title="test" />
    );
  }
}

export default App;