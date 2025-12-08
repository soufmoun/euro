// components/ErrorBoundary.tsx - IMPROVED VERSION
'use client';
import React from 'react';
import Link from 'next/link';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="card border-danger">
          <div className="card-body text-center py-5">
            <div className="fs-1 mb-3">⚠️</div>
            <h5 className="card-title text-danger">Oops! Something went wrong</h5>
            <p className="card-text text-muted mb-4">
              {process.env.NODE_ENV === 'development' && this.state.error?.message}
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <button 
                onClick={this.handleRetry}
                className="btn btn-primary"
              >
                Try Again
              </button>
              <Link href="/" className="btn btn-outline-primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}