import React, { Component } from 'react'

const TooltipContext = React.createContext()

class TooltipProvider extends Component {
  // Context state
  state = { isPreloaded: false };

  // Method to update state
  setTooltipAsPreloaded = (detailPanel) => {
    if (!this.state.isPreloaded) {
      this.setState((prevState) => ({ isPreloaded: true }));
    }
  }

  // Method to update state
  setAsPreloaded = (detailPanel) => {
    if (!this.state.isPreloaded) {
      this.setState((prevState) => ({ isPreloaded: true }));
    }
  }

  render() {
    const { children } = this.props
    const { isPreloaded } = this.state
    const { setAsPreloaded } = this

    return (
      <TooltipContext.Provider
        value={{
          isPreloaded,
          setAsPreloaded,
        }}
      >
        {children}
      </TooltipContext.Provider>
    )
  }
}

export default TooltipContext

export { TooltipProvider }
