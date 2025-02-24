import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import useStyles from './sidenav-style';

let counter = 0;
function createData(name, url, icon, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    icon,
    offset
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function SideNavigation(props) {
  const { navMenu } = props;
  const { classes } = useStyles();
  const [navArr, setNavArr] = useState([]);

  const { t } = useTranslation('common');

  const [menuList] = useState([
    createData(navMenu[0].name, '#' + navMenu[0].id, 'ion-ios-contact-outline', 160),
    createData(navMenu[1].name, '#' + navMenu[1].id, 'ion-ios-analytics-outline'),
    createData(navMenu[2].name, '#' + navMenu[2].id, 'ion-ios-keypad-outline'),
    createData(navMenu[3].name, '#' + navMenu[3].id, 'ion-ios-chatboxes-outline', -40),
    createData(navMenu[4].name, '#' + navMenu[4].id, 'ion-ios-list-box-outline'),
    createData(navMenu[5].name, '#' + navMenu[5].id, 'ion-ios-mail-outline'),
  ]);

  useEffect(() => {
    navMenu.map(item => setNavArr(navArray => [...navArray, item.id]));
  }, []);

  return (
    <div className={classes.navigation}>
      <div className={classes.navMenu}>
        <AnchorLink href="#home" className={classes.logo}>
          <img src={brand.img} alt="logo" />
        </AnchorLink>
        <List component="nav" className={classes.menu}>
          <Scrollspy
            items={navArr}
            currentClassName="active"
            componentTag="div"
          >
            {menuList.map(item => (
              <ListItem
                key={item.id.toString()}
                button
                component={LinkBtn}
                offset={item.offset || 0}
                href={item.url}
                classes={{ root: classes.link }}
              >
                <span className={classes.deco} />
                <ListItemIcon className={classes.icon}>
                  <span className={item.icon} />
                </ListItemIcon>
                <ListItemText
                  classes={{ root: classes.text }}
                  primary={t('profile.header_' + item.name)}
                />
              </ListItem>
            ))}
          </Scrollspy>
        </List>
      </div>
    </div>
  );
}

SideNavigation.propTypes = {
  navMenu: PropTypes.array.isRequired,
};

export default SideNavigation;
