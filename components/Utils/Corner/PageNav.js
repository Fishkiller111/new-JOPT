import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import Fab from '@mui/material/Fab';
import ArrowIcon from '@mui/icons-material/ArrowUpward';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'next-i18next';
import useStyles from './pagenav-style';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function PageNav(props) {
  const { menuList, prefix } = props;
  const [navArr, setNavArr] = useState([]);

  const { t } = useTranslation('common');
  const [show, setShow] = useState(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = (scroll > 500);
    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    menuList.map(item => setNavArr(navArray => [...navArray, item.id]));
  }, []);

  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.pageNav, show && classes.show)}>
      <Tooltip
        title="To Top"
        placement="left"
        classes={{
          tooltip: classes.tooltip
        }}
      >
        <Fab
          color="primary"
          aria-label="To top"
          component={LinkBtn}
          href="#home"
          className={classes.fab}
        >
          <ArrowIcon />
        </Fab>
      </Tooltip>
      <nav className={classes.sectionNav}>
        <Scrollspy
          items={navArr}
          currentClassName="active"
        >
          { menuList.map((item, index) => (
            <li
              key={item.id}
              style={{ top: 30 * (menuList.length - index) }}
              data-id={item.id}
            >
              <Tooltip
                title={t(`${prefix}.header_` + item.id)}
                placement="left"
                classes={{
                  tooltip: classes.tooltip
                }}
              >
                <LinkBtn href={`#${item.id}`} />
              </Tooltip>
            </li>
          )) }
        </Scrollspy>
      </nav>
    </div>
  );
}

PageNav.propTypes = {
  menuList: PropTypes.array.isRequired,
  prefix: PropTypes.string.isRequired,
};

export default PageNav;
