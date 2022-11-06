import React from "react";
import { Helmet } from "react-helmet-async";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <Helmet>
            <title>Error Boundary</title>
            <meta name="description" content="This shows the error boundary of the counter app" />
            <link rel="canonical" href="/testErrorBoundary" />
          </Helmet>
         <div className="error-boundary">
           <h2>Oops...Something went wrong</h2>
           <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
           </details>
         </div>
        </>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;