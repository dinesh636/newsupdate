import React from 'react';

const TopBar = () => {
    const currentD = new Date();
    const dateString = currentD.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const timeString = currentD.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    
    return (
        <div className="d-flex justify-content-between align-items-center py-2 px-4 border-bottom text-muted bg-white" style={{ fontSize: '11px', fontFamily: 'Arial, sans-serif' }}>
            <div className="d-flex align-items-center">
                <span>London, United Kingdom</span>
                <span className="ms-3 me-3"><i className="bi bi-cloud-sun"></i> +7</span>
                <span className="border-start ps-3 me-3 d-none d-md-inline">{dateString} / {timeString}</span>
            </div>
        </div>
    );
};

export default TopBar;
