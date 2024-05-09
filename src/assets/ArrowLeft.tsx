import React from 'react'

export const ArrowLeft = ({ width = '24', height = '24', ...restProps }: React.SVGProps<SVGSVGElement>) => {
    return <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        height={height}
        width={width}
        {...restProps}>
        <path
            d='M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
            stroke='currentColor'
        />
    </svg>
}
