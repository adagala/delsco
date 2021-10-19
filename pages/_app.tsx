import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

// The handler to smoothly scroll to the element into view
const handExitComplete = (): void => {
  if (typeof window !== 'undefined') {
    const hashId = window.location.hash

    if (hashId) {
      const element = document.querySelector(hashId)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}
export default MyApp
