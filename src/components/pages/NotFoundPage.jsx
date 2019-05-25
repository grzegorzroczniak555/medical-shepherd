import { Block, Page } from 'framework7-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import RegisterBackButtonAction from '../../services/RegisterBackButtonAction';
import { Topbar } from '../Topbar';

export const NotFoundPage = (props) => {
  useEffect(() => {
    RegisterBackButtonAction(props.f7router);
  }, []);

  return (
    <Page>
      <Topbar title="Not found" />
      <Block strong>
        <p>Sorry</p>
        <p>Requested content not found.</p>
      </Block>
    </Page>
  );
};

NotFoundPage.propTypes = {
  f7router: PropTypes.object,
};