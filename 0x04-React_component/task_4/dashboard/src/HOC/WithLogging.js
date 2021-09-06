import React from "react";


export default function WithLogging(WrappedComp) {
  class WithLogging extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log(`Component ${WrappedComp.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComp.name} is going to unmount`)
    }

    render() {
      return <WrappedComp />
    }
  }

  WithLogging.displayName = `WithLogging(${ WrappedComp.name })`;
  return WithLogging;
}
