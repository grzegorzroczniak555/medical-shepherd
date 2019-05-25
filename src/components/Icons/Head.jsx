import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/
export const Head = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill={colorSecondary}
        className="prefix__st0"
        d="M326.5 145.6v49.8h-33.1v33.1h-49.8v-33.1h-33.1v-49.8h33.1v-33.1h49.8v33.1z"
      />
      <path
        fill={colorPrimary}
        className="prefix__st1"
        d="M326.5 145.6v49.8h-33.1v33.1h-49.8v-33.1h-33.1v-49.8h33.1v-33.1h49.8v33.1z"
      />
      <path
        fill={colorSecondary}
        d="M393 244.1c12.8-21.6 20.1-46.7 20.1-73.6 0-79.9-64.8-144.6-144.6-144.6-79.9 0-144.6 64.8-144.6 144.6V199l-23.6 33.8c-3.4 4.8-.5 11.5 5.2 12.4l18.3 3 10.1 88.4c1 8.8 7.3 16 15.9 18.3 15.4 4.1 43 9.5 81 9.5 0 0 5.4 96.1-20.2 121.7H258v-59.8c0-3.9 3.1-7 7-7s7 3.1 7 7v59.8h119.2s-11.7-32.8-21.5-66.6c-10.2-35.2-11.4-72.4-3.5-108.3 5.1-23.7 14.4-46.2 26.8-67.1zM271.9 402.5c-.1.4-.2.9-.4 1.3l-.6 1.2c-.3.4-.5.7-.9 1.1-1.3 1.3-3.1 2-5 2-.5 0-.9 0-1.4-.1-.4-.1-.9-.2-1.3-.4l-1.2-.6c-.4-.3-.7-.6-1.1-.9-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.8-.6-1.2-.2-.4-.3-.9-.4-1.3-.1-.4-.1-.9-.1-1.4 0-.5 0-.9.1-1.4.1-.4.2-.9.4-1.3l.6-1.2c.3-.4.5-.7.9-1.1.3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.7.4-.2.9-.3 1.3-.4 2.3-.4 4.7.3 6.3 1.9 1.3 1.3 2 3.1 2 4.9.1.7 0 1.2 0 1.6zM333.5 247c-17.5 14.9-40.2 23.9-65 23.9-55.1 0-99.9-44.4-100.4-99.4v-1C168 115 213 70 268.5 70S369 115 369 170.5c0 30.6-13.8 58.1-35.5 76.5z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Head.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};