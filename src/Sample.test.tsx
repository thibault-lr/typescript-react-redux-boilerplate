import * as React from "react" 

import { Sample } from "./Sample"

describe("App Test", () => {
  it("Should return the sample component value", () => {
    expect(Sample()).toEqual(<h1>Test</h1>)
  })
  
})
