'use client'

import { motion as m } from 'motion/react'

export default function UnderlineButton({ text }) {
    const color = '#6526d1'

    const CURVED_PATH = `
    M0,18.01
    C106.24,-2.44 215.57,-3.81 323.1,5.6
    c35.88,3.33 71.69,7.74 107.07,14.49
    C359.02,9.29 287.04,3.93 215.1,3.06
    C143.26,2.14 70.98,6.59 0,18.01
    Z
  `

    const STRAIGHT_PATH = `
    M0,18.01
    C106.24,16.5 215.57,16.5 323.1,16.5
    c35.88,1.2 71.69,1.2 107.07,1.2
    C359.02,19.5 287.04,19.2 215.1,18.9
    C143.26,18.6 70.98,18.3 0,18.01
    Z
  `

    return (
        <m.button
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative inline-flex items-center"
        >
            {/* Text */}
            <span className="relative z-10">{text}</span>

            {/* Underline */}
            <m.svg
                viewBox="0 0 430.17 20.09"
                className="
          absolute
          left-1/2
          -translate-x-1/2
          w-full
          pointer-events-none
          z-0
          bottom-[.75em]
        "
                style={{
                    transformOrigin: '50% 100%',
                }}
                variants={{
                    rest: { scaleX: 0.8, scaleY: -1 },
                    hover: { scaleX: 1, scaleY: -1 },
                }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
                <m.path
                    fill={color}
                    variants={{
                        rest: { d: CURVED_PATH },
                        hover: { d: STRAIGHT_PATH },
                    }}
                    transition={{
                        d: { duration: 0.35, ease: 'easeInOut' },
                    }}
                />
            </m.svg>
        </m.button>
    )
}
