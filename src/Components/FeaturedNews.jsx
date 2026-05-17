import React, { useState, useEffect } from 'react';
import defaultImg from '../assets/images.jpg';

const FeaturedNews = ({ articles }) => {
    const [centerIndexOffset, setCenterIndexOffset] = useState(0);

    const displayArticles = articles && articles.length >= 5 ? articles.slice(3, 8) : [];

    const centerArticles = articles && articles.length > 0 ? articles : [];
    const centerDisplayIndex = (2 + centerIndexOffset) % Math.max(1, centerArticles.length);
    const finalCenterIndex = centerDisplayIndex < 0 ? centerDisplayIndex + centerArticles.length : centerDisplayIndex;

    useEffect(() => {
        if (!articles || articles.length === 0) return;
        const timer = setInterval(() => {
            setCenterIndexOffset(p => p + 1);
        }, 2000);
        return () => clearInterval(timer);
    }, [articles]);

    const handleLeft = (e) => {
        e.preventDefault();
        setCenterIndexOffset(p => p - 1);
    };

    const handleRight = (e) => {
        e.preventDefault();
        setCenterIndexOffset(p => p + 1);
    };

    if (displayArticles.length < 5) return <div className="p-4 bg-dark text-white text-center">Loading Featured News from API...</div>;

    const centerStory = centerArticles[finalCenterIndex];

    return (
        <div className="p-4" style={{ backgroundColor: '#111', fontFamily: 'Arial, sans-serif' }}>
            <div className="row g-1">
                {/* Left Column */}
                <div className="col-md-3 d-flex flex-column" style={{ gap: '4px' }}>
                    <a href={displayArticles[0].url || "#"} target="_blank" rel="noreferrer" className="position-relative d-block text-decoration-none" style={{ height: '220px' }}>
                        <img src={displayArticles[0].urlToImage || defaultImg} className="w-100 h-100 object-fit-cover" alt="news" />
                        <div className="position-absolute bottom-0 w-100 p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                            <span className="badge bg-primary rounded-0 mb-1" style={{ fontSize: '9px' }}>NEWS</span>
                            <h6 className="text-white fw-bold mb-1" style={{ fontSize: '13px' }}>{displayArticles[0].title ? displayArticles[0].title.slice(0, 50) + "..." : "No Title"}</h6>
                            <span className="text-white-50" style={{ fontSize: '10px' }}><i className="bi bi-clock"></i> {new Date().toLocaleDateString()}</span>
                        </div>
                    </a>
                    <a href={displayArticles[1].url || "#"} target="_blank" rel="noreferrer" className="position-relative d-block text-decoration-none" style={{ height: '220px' }}>
                        <img src={displayArticles[1].urlToImage || defaultImg} className="w-100 h-100 object-fit-cover" alt="news" />
                        <div className="position-absolute bottom-0 w-100 p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                            <h6 className="text-white fw-bold mb-1" style={{ fontSize: '13px' }}>{displayArticles[1].title ? displayArticles[1].title.slice(0, 50) + "..." : "No Title"}</h6>
                            <span className="text-white-50" style={{ fontSize: '10px' }}><i className="bi bi-clock"></i> {new Date().toLocaleDateString()}</span>
                        </div>
                    </a>
                </div>

                {/* Center Column */}
                <div className="col-md-6" style={{ paddingLeft: '2px', paddingRight: '2px' }}>
                    <a href={centerStory.url || "#"} target="_blank" rel="noreferrer" className="position-relative d-block h-100 text-decoration-none">
                        <img src={centerStory.urlToImage || defaultImg} className="w-100 h-100 object-fit-cover" alt="Main feature" />
                        <span className="badge bg-danger rounded-0 position-absolute top-0 start-0 m-3 z-1" style={{ fontSize: '11px', letterSpacing: '1px' }}>TOP STORIES</span>
                        <div className="position-absolute bottom-0 w-100 p-4 z-1" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}>
                            <span className="badge bg-info rounded-0 mb-2" style={{ fontSize: '10px' }}>LATEST</span>
                            <h2 className="text-white fw-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>{centerStory.title || "No Title"}</h2>
                            <span className="text-white-50" style={{ fontSize: '11px' }}><i className="bi bi-clock"></i> {new Date().toLocaleDateString()} &nbsp; <i className="bi bi-person-fill"></i> {centerStory.author || "Unknown"}</span>
                        </div>
                        {/* Nav arrows on center image overlay */}
                        <div className="position-absolute top-50 start-0 translate-middle-y ms-3 z-3" onClick={handleLeft}>
                            <div className="rounded-circle bg-dark bg-opacity-75 d-flex align-items-center justify-content-center text-white" style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
                                <i className="bi bi-chevron-left" style={{ fontSize: '20px' }}></i>
                            </div>
                        </div>
                        <div className="position-absolute top-50 end-0 translate-middle-y me-3 z-3" onClick={handleRight}>
                            <div className="rounded-circle bg-dark bg-opacity-75 d-flex align-items-center justify-content-center text-white" style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
                                <i className="bi bi-chevron-right" style={{ fontSize: '20px' }}></i>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Right Column */}
                <div className="col-md-3 d-flex flex-column" style={{ gap: '4px' }}>
                    <a href={displayArticles[3].url || "#"} target="_blank" rel="noreferrer" className="position-relative d-block text-decoration-none" style={{ height: '220px' }}>
                        <img src={displayArticles[3].urlToImage || defaultImg} className="w-100 h-100 object-fit-cover" alt="news" />
                        <div className="position-absolute bottom-0 w-100 p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                            <span className="badge bg-info rounded-0 mb-1" style={{ fontSize: '9px' }}>UPDATE</span>
                            <h6 className="text-white fw-bold mb-1" style={{ fontSize: '13px' }}>{displayArticles[3].title ? displayArticles[3].title.slice(0, 50) + "..." : "No Title"}</h6>
                            <span className="text-white-50" style={{ fontSize: '10px' }}><i className="bi bi-clock"></i> {new Date().toLocaleDateString()}</span>
                        </div>
                    </a>
                    <a href={displayArticles[4].url || "#"} target="_blank" rel="noreferrer" className="position-relative d-block text-decoration-none" style={{ height: '220px' }}>
                        <img src={displayArticles[4].urlToImage || defaultImg} className="w-100 h-100 object-fit-cover" alt="news" />
                        <div className="position-absolute bottom-0 w-100 p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                            <h6 className="text-white fw-bold mb-1" style={{ fontSize: '13px' }}>{displayArticles[4].title ? displayArticles[4].title.slice(0, 50) + "..." : "No Title"}</h6>
                            <span className="text-white-50" style={{ fontSize: '10px' }}><i className="bi bi-clock"></i> {new Date().toLocaleDateString()}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeaturedNews;
