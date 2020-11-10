import React, { Component } from 'react'

const DetailPanelContext = React.createContext()

class DetailPanelProvider extends Component {
  // Context state
  state = {
    isPanelPreloaded: false,
    isTooltipPreloaded: false
  };

  // Method to update state
  setPanelAsPreloaded = (detailPanel) => {
    if (!this.state.isPanelPreloaded) {
      this.setState((prevState) => ({ isPanelPreloaded: true }));
    }
  }

  // Method to update state
  setTooltipAsPreloaded = (tooltip) => {
    if (!this.state.isTooltipPreloaded) {
      this.setState((prevState) => ({ isTooltipPreloaded: true }));
    }
  }

  render() {
    const { children } = this.props
    const { isPanelPreloaded, isTooltipPreloaded } = this.state
    // const { isPreloaded } = this.state
    // const { setAsPreloaded } = this
    const { setPanelAsPreloaded, setTooltipAsPreloaded } = this

    return (
      <DetailPanelContext.Provider
        value={{
          isPanelPreloaded,
          isTooltipPreloaded,
          setPanelAsPreloaded,
          setTooltipAsPreloaded,
        }}
      >
        {children}
      </DetailPanelContext.Provider>
    )
  }
}

export default DetailPanelContext

export { DetailPanelProvider }
