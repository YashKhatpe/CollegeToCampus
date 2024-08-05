import React from 'react';

const StreamLit = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src="http://localhost:8501"  // URL of your Streamlit app
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Streamlit App"
      />
    </div>
  );
}

export default StreamLit;
