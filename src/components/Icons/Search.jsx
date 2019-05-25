import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/
export const Search = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill={colorPrimary}
        d="M411.5 64.6l-44.9-35.9L328 80.5c15.6 8.7 29.9 19.4 42.7 31.9l40.8-47.8zM48.8 449.3l46.4 34 35.8-52.5c-15.5-8.8-29.7-19.6-42.4-32.2l-39.8 50.7z"
        className="prefix__st1"
      />
      <path
        fill={colorSecondary}
        d="M457.9 427.1l-75.4-62.8C404.2 333.7 417 296.4 417 256c0-52-21.2-99.1-55.5-132.9-12.4-12.3-26.6-22.9-42-31.3-26.6-14.5-57-22.7-89.4-22.7-103.2 0-186.9 83.7-186.9 186.9 0 51.3 20.6 97.7 54.1 131.5 12.3 12.4 26.3 23.1 41.6 31.7 27 15.1 58.1 23.7 91.2 23.7 47.5 0 90.8-17.7 123.8-46.8l61.4 73.6c11.4 13.7 32.1 14.6 44.7 2 12.5-12.5 11.6-33.2-2.1-44.6zm-105.4-81.5c-6.3 8.5-13.4 16.3-21.2 23.4-26.8 24-62.3 38.7-101.2 38.7-25.7 0-50-6.4-71.2-17.8l40.7-59.6c1.9 2.5 4.1 4.7 6.7 6.6 14.4 10.6 34.6 7.4 45.2-7 10.5-14.4 7.4-34.6-7-45.2-10.5-7.7-24-8.1-34.7-2.3l-4.6-3.3c2.4-11.9-2.2-24.7-12.6-32.4-14.4-10.6-34.6-7.4-45.2 7-10.5 14.4-7.4 34.6 7 45.2 2.7 2 5.7 3.5 8.7 4.5l-43.9 56C93.9 332.4 78.5 296 78.5 256c0-83.8 67.9-151.7 151.7-151.7 24.5 0 47.6 5.8 68.1 16.1L256 177.2c-1.8-2.5-3.9-4.8-6.4-6.9-14-11.1-34.3-8.8-45.4 5.1-11.1 14-8.8 34.3 5.1 45.4 10.1 8.1 23.6 9.1 34.5 3.7l4.4 3.5a32.22 32.22 0 0 0 11.3 32.9c13.9 11.1 34.3 8.9 45.4-5.1 11.1-14 8.8-34.3-5.1-45.4-2.6-2.1-5.5-3.7-8.5-4.9l47.4-55.6c22.9 23.4 38.2 54.2 42.2 88.4h-26.6c-3.9 0-7 3.1-7 7s3.1 7 7 7h27.5v3.6c0 33.6-10.9 64.6-29.3 89.7z"
        className="prefix__st0"
      />
      <path
        fill={colorSecondary}
        d="M340.7 242.7l-.6-1.2c-.3-.4-.6-.7-.9-1.1-.3-.3-.7-.6-1.1-.9-.4-.3-.8-.5-1.2-.7-.4-.2-.9-.3-1.3-.4-.9-.2-1.8-.2-2.7 0-.5.1-.9.2-1.3.4s-.8.4-1.2.7c-.4.3-.7.5-1.1.9-.3.3-.6.7-.9 1.1s-.5.8-.6 1.2c-.2.4-.3.9-.4 1.3-.1.4-.1.9-.1 1.4s0 .9.1 1.4c.1.4.2.9.4 1.3l.6 1.2c.3.4.6.7.9 1.1.3.3.7.6 1.1.9.4.3.8.5 1.2.6.4.2.9.3 1.3.4s.9.1 1.4.1.9 0 1.4-.1c.4-.1.9-.2 1.3-.4l1.2-.6c.4-.3.8-.6 1.1-.9 1.3-1.3 2.1-3.1 2.1-5 0-.5-.1-.9-.1-1.4-.3-.4-.4-.9-.6-1.3z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Search.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};