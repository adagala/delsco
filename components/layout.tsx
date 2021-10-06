import Header from './header'
import Footer from './footer'

const Layout = ({ children }: { children: any }) => {
    return (
        <>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    )
}

export default Layout