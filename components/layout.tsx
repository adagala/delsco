import Header from './header'
import Footer from './footer'
import { motion } from 'framer-motion'

const Layout = ({ children }: { children: any }) => {
    return (
        <div className='flex flex-col h-screen bg-white'>
            <Header />
            <motion.main
                exit={{ opacity: 0.8 }}
                initial='initial'
                animate='animate'
                className='flex-grow'
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    )
}

export default Layout