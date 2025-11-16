import React from 'react'
import { Container } from './common/Container'

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral-100 dark:bg-neutral-800 py-8 text-center text-neutral-600 dark:text-neutral-300">
        <Container>
          <p>
            &copy; {new Date().getFullYear()} Hanna B. — Designed & Built with ❤️ using
            Next.js, Tailwind & shadcn/ui
          </p>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
