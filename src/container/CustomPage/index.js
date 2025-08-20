import React from 'react';
import Scrollbar from 'perfect-scrollbar-react';
import 'perfect-scrollbar-react/dist/style.min.css';

const PageContainer = ({children, classes, fullWidth}) => {

    const isMobile = window.innerWidth < 992;

    return (
        <div className={`content-body section ${classes}`}>
            <div style={{display: 'flex', width: '100%', maxHeight: isMobile ? 'auto' : 'calc(100vh - 200px)'}}>
                <Scrollbar options={{suppressScrollX: true}} enable={!isMobile}>
                    <div className={`section-wrap section ${!fullWidth ? 'section-padding' : null}`}>
                        {children}
                    </div>
                </Scrollbar>
            </div>
        </div>
    );
};

export default PageContainer;