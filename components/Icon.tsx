import * as React from "react"
import { SVGProps } from "react"
const InstagramIcon = ({className}:{className?:string},rest: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 128 100" 
  className={`w-8 h-auto  ${className}`}
  {...rest}>
    <defs>
      <radialGradient
        id="a"
        cx={6.601}
        cy={99.766}
        r={129.502}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09} stopColor="#fa8f21" />
        <stop offset={0.78} stopColor="#d82d7e" />
      </radialGradient>
      <radialGradient
        id="b"
        cx={70.652}
        cy={96.49}
        r={113.963}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.64} stopColor="#8c3aaa" stopOpacity={0} />
        <stop offset={1} stopColor="#8c3aaa" />
      </radialGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M25.865 101.639A34.341 34.341 0 0 1 14.312 99.5a19.329 19.329 0 0 1-7.154-4.653A19.181 19.181 0 0 1 2.5 87.694 34.341 34.341 0 0 1 .364 76.142C.061 69.584 0 67.617 0 51s.067-18.577.361-25.14A34.534 34.534 0 0 1 2.5 14.312a19.4 19.4 0 0 1 4.654-7.158A19.206 19.206 0 0 1 14.309 2.5 34.341 34.341 0 0 1 25.862.361C32.422.061 34.392 0 51 0s18.577.067 25.14.361A34.534 34.534 0 0 1 87.691 2.5a19.254 19.254 0 0 1 7.154 4.653 19.267 19.267 0 0 1 4.655 7.156 34.341 34.341 0 0 1 2.14 11.553c.3 6.563.361 8.528.361 25.14s-.061 18.577-.361 25.14a34.5 34.5 0 0 1-2.14 11.552A20.6 20.6 0 0 1 87.691 99.5a34.342 34.342 0 0 1-11.553 2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
      data-name="Path 16"
    />
    <path
      fill="url(#b)"
      d="M25.865 101.639A34.341 34.341 0 0 1 14.312 99.5a19.329 19.329 0 0 1-7.154-4.653A19.181 19.181 0 0 1 2.5 87.694 34.341 34.341 0 0 1 .364 76.142C.061 69.584 0 67.617 0 51s.067-18.577.361-25.14A34.534 34.534 0 0 1 2.5 14.312a19.4 19.4 0 0 1 4.654-7.158A19.206 19.206 0 0 1 14.309 2.5 34.341 34.341 0 0 1 25.862.361C32.422.061 34.392 0 51 0s18.577.067 25.14.361A34.534 34.534 0 0 1 87.691 2.5a19.254 19.254 0 0 1 7.154 4.653 19.267 19.267 0 0 1 4.655 7.156 34.341 34.341 0 0 1 2.14 11.553c.3 6.563.361 8.528.361 25.14s-.061 18.577-.361 25.14a34.5 34.5 0 0 1-2.14 11.552A20.6 20.6 0 0 1 87.691 99.5a34.342 34.342 0 0 1-11.553 2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
      data-name="Path 17"
    />
    <path
      fill="#fff"
      d="M38.477 51.217a12.631 12.631 0 1 1 12.629 12.632 12.631 12.631 0 0 1-12.629-12.632m-6.829 0a19.458 19.458 0 1 0 19.458-19.458 19.457 19.457 0 0 0-19.458 19.458m35.139-20.229a4.547 4.547 0 1 0 4.549-4.545 4.549 4.549 0 0 0-4.547 4.545m-30.99 51.074a20.943 20.943 0 0 1-7.037-1.3 12.547 12.547 0 0 1-7.193-7.19 20.923 20.923 0 0 1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082 21.082 0 0 1 1.3-7.037 12.54 12.54 0 0 1 7.193-7.193 20.924 20.924 0 0 1 7.037-1.3c3.994-.184 5.194-.22 15.309-.22s11.316.039 15.314.221a21.082 21.082 0 0 1 7.037 1.3 12.541 12.541 0 0 1 7.193 7.193 20.926 20.926 0 0 1 1.3 7.037c.184 4 .22 5.194.22 15.314s-.037 11.316-.22 15.314a21.023 21.023 0 0 1-1.3 7.037 12.547 12.547 0 0 1-7.193 7.19 20.925 20.925 0 0 1-7.037 1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786 27.786 0 0 0-9.2 1.76 19.373 19.373 0 0 0-11.083 11.083 27.794 27.794 0 0 0-1.76 9.2c-.187 4.04-.229 5.332-.229 15.623s.043 11.582.229 15.623a27.793 27.793 0 0 0 1.76 9.2 19.374 19.374 0 0 0 11.083 11.083 27.813 27.813 0 0 0 9.2 1.76c4.042.184 5.332.229 15.623.229s11.582-.043 15.623-.229a27.8 27.8 0 0 0 9.2-1.76 19.374 19.374 0 0 0 11.083-11.083 27.716 27.716 0 0 0 1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786 27.786 0 0 0-1.76-9.2 19.379 19.379 0 0 0-11.08-11.083 27.748 27.748 0 0 0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
      data-name="Path 18"
    />
  </svg>
)
export default InstagramIcon


export const GithubIcon = ({className}:{className?:string},rest: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...rest}
      className={`w-8 h-auto ${className}`}
    >
      <path fill="none" d="M0 0h512v512H0z" />
      <path
        fill="currentColor"
        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
      />
    </svg>
  );