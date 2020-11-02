import React, { Component } from 'react'

const DetailPanelContext = React.createContext()

class DetailPanelProvider extends Component {
  // Context state
  state = { isPreloaded: false };

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
      <DetailPanelContext.Provider
        value={{
          isPreloaded,
          setAsPreloaded,
        }}
      >
        {children}
      </DetailPanelContext.Provider>
    )
  }
}

export default DetailPanelContext

export { DetailPanelProvider }
