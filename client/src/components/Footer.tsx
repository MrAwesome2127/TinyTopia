import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
    return (
        <div>
            <footer className="py-3 my-4">
                <p className="text-center text-body-secondary">&copy; 2025 TinyTopia. All Rights Reserved.</p>
            </footer>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <div style={{ flex: 1 }}>

                </div>
                <footer style={{ padding: '1rem 0', textAlign: 'center', backgroundColor: '#f8f9fa', color: '#6c757d' }}>
                    <p className="text-center text-body-secondary">&copy; 2025 TinyTopia. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;