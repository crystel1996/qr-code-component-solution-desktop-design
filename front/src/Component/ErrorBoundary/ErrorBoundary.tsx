import React, { ErrorInfo, FC, useEffect, useState } from "react";
import { ErrorBoundaryInterface } from "./interface";

export const ErrorBoundary: FC<ErrorBoundaryInterface> = ({ children }) => {
    const [hasError, setHasError] = useState<boolean>(false);
  
    useEffect(() => {
      const handleErrors = (error: Error, errorInfo: ErrorInfo) => {
        console.error(error, errorInfo);
        setHasError(true);
      };
  
      // Register the error handler
      window.addEventListener('error', handleErrors as any);
  
      // Clean up the error handler
      return () => {
        window.removeEventListener('error', handleErrors as any);
      };
    }, []);
  
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
  
    return <>
        {children}
    </>;
};