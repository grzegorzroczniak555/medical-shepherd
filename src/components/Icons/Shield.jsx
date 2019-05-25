import React from 'react';
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/
export const Shield = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill={colorPrimary}
        className="prefix__st1"
        d="M288.6 176.6h-65.2v43.3h-43.3v65.3h43.3v43.3h65.2v-43.3H332v-65.3h-43.4z"
      />
      <path
        fill={colorSecondary}
        d="M441.2 114.2c-6.3 1.4-12.8 2.1-19.5 2.1-48.4 0-87.7-38.6-87.7-86.3H177.9c0 47.6-39.3 86.3-87.7 86.3-6.7 0-13.2-.7-19.5-2.1C13.9 354 256 482 256 482s242.1-128 185.2-367.8zM339.5 361.8c-30.5 35.4-63.4 59.9-83.4 73.2-20.5-13.6-54.4-38.9-85.1-75-41.7-49.1-64.5-102-68.1-157.9h30.5c3.9 0 7-3.1 7-7s-3.1-7-7-7h-31c-.1-10.7.5-21.4 1.8-32.3 50.2-5.4 91.8-39.6 107.3-85.6h89.1c15.6 45.9 57.2 80.2 107.3 85.6 8.7 73.9-14.2 143.1-68.4 206z"
        className="prefix__st0"
      />
      <path
        fill={colorSecondary}
        d="M159.9 192.3l-.6-1.2c-.3-.4-.6-.7-.9-1.1-.3-.3-.7-.6-1.1-.9-.4-.3-.8-.5-1.2-.6-.4-.2-.9-.3-1.3-.4-.9-.2-1.8-.2-2.7 0-.4.1-.9.2-1.3.4l-1.2.6c-.4.3-.7.6-1.1.9-.3.3-.6.7-.9 1.1-.3.4-.5.8-.7 1.2-.2.4-.3.9-.4 1.3-.1.5-.1.9-.1 1.4 0 1.8.7 3.6 2.1 4.9.3.3.7.6 1.1.9s.8.5 1.2.7c.4.2.9.3 1.3.4.4.1.9.1 1.4.1.5 0 .9 0 1.4-.1.4-.1.9-.2 1.3-.4s.8-.4 1.2-.7c.4-.3.7-.5 1.1-.9 1.3-1.3 2-3.1 2-4.9 0-.4 0-.9-.1-1.4-.2-.4-.4-.8-.5-1.3z"
        className="prefix__st0"
      />
    </g>
  </svg>
);

Shield.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};