import React, { ErrorInfo } from "react";

class ErrorBoundary extends React.Component<
  { children?: React.ReactNode },
  { hasError: boolean; error?: Error; errorInfo?: ErrorInfo }
> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ ...this.state, error, errorInfo });
    if (error) {
      console.log(`errorBoundary: ${JSON.stringify(error)}`);
    }
    if (errorInfo) {
      console.log(`errorBoundaryInfo: ${JSON.stringify(errorInfo)}`);
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <article>
          <div>
            <p>Failed</p>
            <button aria-label="delete"></button>
          </div>
          <div>
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          </div>
        </article>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
