import React from 'react'
import Iconly, { Search } from '.'

describe('ExampleComponent', () => {
  it('is truthy', () => {
    const element = <Iconly name='Search' />

    expect(Search).toBeTruthy()
    expect(element).toBeTruthy()
  })
})
