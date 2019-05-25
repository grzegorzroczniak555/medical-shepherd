import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mergeStyleSets } from '@uifabric/merge-styles';
import { Link, Navbar, NavTitle } from 'framework7-react';
import PropTypes from 'prop-types';
import React from 'react';
import { colorSecondary } from '../styles';

const styles = mergeStyleSets({
  navbar: {
    '--f7-navbar-bg-color': 'white',
    '--f7-bars-text-color': colorSecondary,
  },
  title: {
    '--f7-navbar-title-font-weight': '800',
    '--f7-navbar-title-text-align': 'center',
    '--f7-navbar-title-font-size': '22px',
    '--f7-navbar-title-margin-left': 'auto',
    width: '-webkit-fill-available',
    color: colorSecondary,
    right: '24px',
  },
});

export const Topbar = ({ iconName = faChevronLeft, backLink = '/', title ='', panelOpen, panelClose }) => (
  <Navbar noShadow noHairline className={styles.navbar}>
    <Link href={backLink} panelOpen={panelOpen} panelClose={panelClose}>
        <FontAwesomeIcon icon={iconName} />
    </Link>
    <NavTitle className={styles.title}>{title}</NavTitle>
  </Navbar>
);

Topbar.propTypes = {
  iconName: PropTypes.string,
  backLink: PropTypes.string,
  title: PropTypes.string,
  panelOpen: PropTypes.string,
  panelClose: PropTypes.string,
};