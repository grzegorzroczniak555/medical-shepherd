import React from 'react'
import PropTypes from 'prop-types';
/* 
    Author:	Rudez Studio
    Licence: Creative Commons (Attribution 3.0 Unported) https://creativecommons.org/licenses/by/3.0/ 
*/
export const Files = ({ colorPrimary = '#16ade1', colorSecondary = '#1b3954', ...props }) => (
  <svg width={512} height={512} viewBox="0 0 512 512" {...props}>
    <title>{'background'}</title>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <title>{'Layer 1'}</title>
      <path
        fill={colorPrimary}
        d="M418 336.1h-19.1c1.5-.9 2.9-1.9 4.2-3 11.4-9.1 18.7-23.1 18.7-38.9 0-12.2-4.4-23.4-11.7-32.1-9.1-10.8-22.7-17.7-38-17.7-27.5 0-49.7 22.3-49.7 49.7 0 17.6 9.1 33 22.9 41.9h-19.1c-22.7 0-41 18.4-41 41v82.3h33.1V408c0-3.9 3.1-7 7-7s7 3.1 7 7v51.4H412V408c0-3.9 3.1-7 7-7s7 3.1 7 7v51.4h33v-82.3c0-22.7-18.3-41-41-41z"
        className="prefix__st1"
      />
      <path
        fill={colorSecondary}
        d="M315.1 322.9c-4.5-8.8-6.9-18.7-6.9-29 0-35.1 28.6-63.7 63.7-63.7 14.6 0 28.6 5 39.7 13.9l8.8-89.4c.7-6.9-4.8-12.9-11.7-12.9H348c-5.6 0-10.4 3.9-11.5 9.4l-7.1 35.1c-1.1 5.5-5.9 9.4-11.5 9.4H64.7c-7.1 0-12.5 6.2-11.7 13.2l24.3 198.6c.7 5.9 5.7 10.3 11.6 10.3h181.9v-41c.1-26.6 19.1-48.8 44.3-53.9zm-66.7 8.2h-32v32H166v-32h-32v-50.3h32v-32h50.4v32h32v50.3z"
        className="prefix__st0"
      />
      <path
        fill={colorPrimary}
        d="M322.7 148.5c2.4-12 13-20.7 25.2-20.7h34.3V52.6H91.7v76.6h69c3.9 0 7 3.1 7 7s-3.1 7-7 7h-69v38.6H316l6.7-33.3zm-119.6-10.9c-.1.4-.2.9-.4 1.3l-.6 1.2c-.3.4-.5.7-.9 1.1-.3.3-.7.6-1.1.9-.4.3-.8.5-1.2.6-.4.2-.9.3-1.3.4-.4.1-.9.1-1.4.1-1.8 0-3.6-.8-4.9-2.1-1.3-1.3-2.1-3.1-2.1-4.9 0-1.8.8-3.6 2.1-5 .3-.3.7-.6 1.1-.9.4-.3.8-.5 1.2-.6.4-.2.9-.3 1.3-.4.9-.2 1.8-.2 2.7 0 .4.1.9.2 1.3.4l1.2.6c.4.3.8.5 1.1.9 1.3 1.3 2 3.1 2 5 0 .4 0 .9-.1 1.4z"
        className="prefix__st1"
      />
    </g>
  </svg>
);

Files.propTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};