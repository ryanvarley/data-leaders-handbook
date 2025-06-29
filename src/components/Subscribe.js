import React from 'react';

export default function Subscribe({ withLogo }) {
    const height = withLogo ? 320 : 150;

    return (
        <div>
            <iframe
                src="https://newsletter.ryanvarley.com/embed"
                width="480"
                height={height}
                style={{ border: '1px solid #EEE', background: 'white' }}
                frameBorder="0"
                scrolling="no"
            />
        </div>
    );
}