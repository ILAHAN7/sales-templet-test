'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error occurred:', error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background: 'linear-gradient(to bottom right, #F5E6D3, white)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ 
          maxWidth: '600px', 
          padding: '2rem',
          textAlign: 'center',
        }}>
          {/* Error Icon */}
          <div style={{ 
            fontSize: '120px', 
            lineHeight: 1,
            marginBottom: '2rem',
          }}>
            🚨
          </div>

          {/* Error Title */}
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold',
            color: '#3E2723',
            marginBottom: '1rem',
          }}>
            Critical Error
          </h1>

          {/* Error Message */}
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#2C2C2C',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}>
            We encountered a critical error. Please try refreshing the page or contact support if the problem persists.
          </p>

          {error.digest && (
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#666',
              fontFamily: 'monospace',
              background: '#f3f4f6',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              display: 'inline-block',
              marginBottom: '2rem',
            }}>
              Error ID: {error.digest}
            </p>
          )}

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}>
            <button
              onClick={() => reset()}
              style={{
                padding: '1rem 2rem',
                background: '#3E2723',
                color: 'white',
                fontSize: '1.125rem',
                fontWeight: '600',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'all 0.3s',
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#8D4004'}
              onMouseOut={(e) => e.currentTarget.style.background = '#3E2723'}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{
                padding: '1rem 2rem',
                background: 'white',
                color: '#3E2723',
                fontSize: '1.125rem',
                fontWeight: '600',
                borderRadius: '0.5rem',
                border: '2px solid #3E2723',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s',
              }}
            >
              Back to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
