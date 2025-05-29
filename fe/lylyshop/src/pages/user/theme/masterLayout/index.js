import { memo } from 'react';
import Header from '../header';
import Footer from '../footer';

function MasterLayout({children, ...props}) {
    return (
        <div {...props}>
            <Header />
            {/* khi gọi masterLayout, truyền vào children thì tất cả bên ngoài sẽ thay vào children  */}
            {children} 
            <Footer />
        </div>
    )
}

export default memo(MasterLayout);