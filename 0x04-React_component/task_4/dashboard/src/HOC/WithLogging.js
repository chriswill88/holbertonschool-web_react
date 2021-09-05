import React from "react";


export default function WithLogging(wrappedComp) {
  return class extends React.Component {
    static displayName = `WithLogging(${wrappedComp.displayName || wrappedComp.name || 'Component'})`
    componentDidMount() {
      console.log(`Compoent ${wrappedComp.type.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${wrappedComp.type.name} is going to unmount`)
    }

    render() {
      return <wrappedComp />
    }
  }
}