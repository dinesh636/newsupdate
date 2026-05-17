import React from 'react';

const MainMenu = ({ setcategory, category }) => {
    const navItems = ["HOME", "BUSINESS", "ENTERTAINMENT", "HEALTH", "SCIENCE", "SPORTS", "TECHNOLOGY"];
    return (
        <div className="d-flex justify-content-between align-items-center bg-dark text-white px-0" style={{ height: '50px', backgroundColor: '#1a1a1a !important', fontFamily: 'Arial, sans-serif' }}>
            <div className="d-flex h-100 overflow-auto">
                {navItems.map((item, idx) => {
                    const isActive = (item === 'HOME' && category === 'general') || (category === item.toLowerCase());
                    return (
                        <div
                            key={idx}
                            className={`d-flex align-items-center px-4 cursor-pointer nav-item-custom ${isActive ? 'bg-white text-dark' : 'text-white'}`}
                            style={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                borderTop: isActive ? '3px solid #3ca2f4' : '3px solid transparent',
                                whiteSpace: 'nowrap'
                            }}
                            onClick={() => {
                                if (setcategory) {
                                    setcategory(item === 'HOME' ? 'general' : item.toLowerCase())
                                }
                            }}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
            <div className="pe-4 d-none d-md-block">
                <div className="input-group input-group-sm" style={{ width: '200px' }}>
                    <input type="text" className="form-control rounded-0 border-0 fw-bold text-muted" placeholder="SEARCH HERE" style={{ fontSize: '11px', paddingLeft: '15px' }} />
                    <button className="btn btn-light rounded-0 border-0 bg-white"><i className="bi bi-search" style={{ fontSize: '14px' }}></i></button>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
