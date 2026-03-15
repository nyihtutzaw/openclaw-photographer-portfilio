require('@testing-library/jest-dom');

// React 19 compatibility workaround for React.act
const React = require('react');
if (!React.act) {
  React.act = (callback) => {
    const result = callback();
    if (result instanceof Promise) {
      return result;
    }
    return Promise.resolve();
  };
}
