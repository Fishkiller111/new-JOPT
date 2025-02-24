import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'next-i18next';
import LocaleLink from '../../Link';
import useStyles from '../header-style';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function MixedNav(props) {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const { menu, singleNav, prefix } = props;
  const [navArr, setNavArr] = useState([]);

  useEffect(() => {
    menu.map(item => setNavArr(navArray => [...navArray, item.id]));
  }, []);

  return (
    <Scrollspy
      className={classes.scrollactiveNav}
      items={navArr}
      currentClassName="active"
    >
      {menu.map(item => (
        <li key={item.id}>
          {singleNav ? (
            <Button component={LinkBtn} offset={() => 100} href={`#${item.id}`}>
              {t(`${prefix}.header_` + item.id)}
            </Button>
          ) : (
            <Button component={LocaleLink} to={`/#${item.id}`}>
              {t(`${prefix}.header_` + item.id)}
            </Button>
          )}
        </li>
      ))}
    </Scrollspy>
  );
}

MixedNav.propTypes = {
  menu: PropTypes.array.isRequired,
  prefix: PropTypes.string.isRequired,
  singleNav: PropTypes.bool,
};

MixedNav.defaultProps = {
  singleNav: false
};

export default MixedNav;
