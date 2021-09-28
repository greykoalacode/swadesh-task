import Logo from './Logo'
import Circles from './Circles'


const Layout = ({ children }) => {
    return (
        <>
        <div className="p-4 px-8 md:py-8 md:px-16 main-container">
            <Logo />
            <div className="container-bg-1">
                <Circles className="circles-svg" />
            </div>
            <div className="container-bg-2" />
            <div>
                <main>
                    {children}
                </main>
            </div>
        </div>
        
        </>
    )
}

export default Layout