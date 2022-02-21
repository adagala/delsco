import React, { useEffect, useState } from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'

const ScrollToTop = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false)

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        // Button is displayed after scrolling for 400 pixels
        const toggleVisibility = () => (window.pageYOffset > 400) ? setIsVisible(true) : setIsVisible(false)


        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <div className='fixed bg-red bottom-3 right-3 cursor-pointer'>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className='fixed p-2 border border-solid border-white rounded-lg bg-red-900 bottom-3 right-3 lg:bottom-5 lg:right-5 cursor-pointer'
                >
                    <ChevronDoubleUpIcon className="flex-shrink-0 h-6 w-6 text-white" />
                </div>
            )}
        </div>
    )
}

export default ScrollToTop
