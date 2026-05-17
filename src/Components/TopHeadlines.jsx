import React, { useState, useEffect } from 'react';
import defaultImg from '../assets/images.jpg';

const TopHeadlines = ({ articles, loading }) => {
    const [startIndex, setStartIndex] = useState(0);
    const maxVisible = 4;

    useEffect(() => {
        if (!articles || articles.length === 0) return;
        const timer = setInterval(() => {
            setStartIndex(prev => (prev >= articles.length - maxVisible ? 0 : prev + 1));
        }, 2000);
        return () => clearInterval(timer);
    }, [articles]);

    if ((!articles || articles.length === 0) && loading) {
        return (
            <div className="py-4 text-center text-muted" style={{ fontSize: '13px' }}>
                Loading top headlines...
            </div>
        );
    }

    if (!articles || articles.length === 0) {
        return (
            <div className="py-4 text-center text-muted" style={{ fontSize: '13px' }}>
                No top headlines available.
            </div>
        );
    }

    const navLeft = () => {
        setStartIndex(prev => Math.max(0, prev - 1));
    };

    const navRight = () => {
        setStartIndex(prev => Math.min(articles.length - maxVisible, prev + 1));
    };

    const displayArticles = articles.slice(startIndex, startIndex + maxVisible);

    return (
        <div className="d-flex align-items-center justify-content-center pb-4 pt-2 px-4 position-relative bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
            <button onClick={navLeft} disabled={startIndex === 0} className="btn btn-dark rounded-0 px-2 py-1 position-absolute start-0 ms-3 d-none d-lg-block z-1" style={{ fontSize: '10px' }}>
                <i className="bi bi-chevron-left"></i>
            </button>

            <div className="d-flex gap-3 overflow-hidden justify-content-center" style={{ width: '100%', maxWidth: '1150px' }}>
                {displayArticles.map((art, idx) => (
                    <div key={idx} className="d-flex bg-white border flex-fill" style={{ minWidth: '240px', maxWidth: '280px', height: '100px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                        <img
                            src={art.urlToImage || defaultImg}
                            alt="thumb"
                            loading="lazy"
                            onError={(e) => {
                                e.target.onerror = null
                                e.target.src = defaultImg
                            }}
                            style={{ width: '90px', height: '100%', objectFit: 'cover' }}
                        />
                        <div className="p-2 d-flex flex-column justify-content-center w-100 overflow-hidden">
                            <span className="text-info fw-bold mb-1" style={{ fontSize: '10px' }}>NEWS</span>
                            <h6 className="mb-1 text-truncate pe-2 w-100" style={{ fontSize: '11px', fontWeight: 'bold', lineHeight: '1.4' }}>{art.title || "No Title"}</h6>
                            <span className="text-muted" style={{ fontSize: '9px' }}><i className="bi bi-clock"></i> {new Date().toLocaleDateString()}</span>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={navRight} disabled={startIndex >= articles.length - maxVisible} className="btn btn-dark rounded-0 px-2 py-1 position-absolute end-0 me-3 d-none d-lg-block z-1" style={{ fontSize: '10px' }}>
                <i className="bi bi-chevron-right"></i>
            </button>
        </div>
    );
};

export default TopHeadlines;
