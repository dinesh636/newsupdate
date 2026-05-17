import React, { useState, useEffect } from 'react';

const BreakingNews = ({ articles }) => {
    const [breakIndex, setBreakIndex] = useState(0);

    const safeArticles = articles && articles.length > 0 ? articles : null;
    const breakingArticle = safeArticles ? safeArticles[breakIndex % safeArticles.length] : null;

    useEffect(() => {
        if (!safeArticles) return;
        const timer = setInterval(() => {
            setBreakIndex(p => (p + 1) % safeArticles.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [safeArticles]);

    const handleLeft = () => {
        setBreakIndex(p => (p - 1 + (safeArticles ? safeArticles.length : 1)) % (safeArticles ? safeArticles.length : 1));
    };

    const handleRight = () => {
        setBreakIndex(p => (p + 1) % (safeArticles ? safeArticles.length : 1));
    };

    return (
        <div className="d-flex align-items-center text-white p-0" style={{ backgroundColor: '#f04e3c', height: '40px', fontFamily: 'Arial, sans-serif' }}>
            <div className="bg-white text-danger fw-bold h-100 d-flex align-items-center px-4 position-relative z-1" style={{ minWidth: '150px', fontSize: '11px', letterSpacing: '0.5px' }}>
                BREAKING NEWS
                <div className="position-absolute" style={{ right: '-15px', borderLeft: '15px solid white', borderTop: '20px solid transparent', borderBottom: '20px solid transparent' }}></div>
            </div>
            <div className="ps-5 text-truncate w-100 pe-3 d-flex align-items-center justify-content-between" style={{ fontSize: '12px' }}>
                <a href={breakingArticle ? breakingArticle.url : '#'} target="_blank" rel="noreferrer" className="text-truncate text-white text-decoration-none" style={{ maxWidth: '80%' }}>
                    <span className="text-white-50 me-2">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
                    {breakingArticle ? breakingArticle.title : 'Loading breaking news from API...'}
                </a>

                <div className="d-flex gap-2 pe-3 align-items-center">
                    <i className="bi bi-pause-circle cursor-pointer" style={{ fontSize: '14px' }}></i>
                    <i className="bi bi-chevron-left border rounded-circle custom-chevron cursor-pointer" onClick={handleLeft}></i>
                    <i className="bi bi-chevron-right border rounded-circle custom-chevron cursor-pointer" onClick={handleRight}></i>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
