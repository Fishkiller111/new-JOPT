import React, {
  useState,
  useEffect,
  useRef,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'next-i18next';
import LocaleLink from '../../Link';
import useStyles from '../header-style';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function MultiLevelHover(props) {
  const { classes, cx } = useStyles();
  const { dataMenu } = props;
  const { i18n, t } = useTranslation('common');

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  // Parent state
  const [open, setOpen] = useState(false);
  const [menuName, setName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  // Child state
  const [menuChild, setMenuChild] = useState({});
  const [anchorChild, setAnchorChild] = useState({});

  // Parent function
  const handleToggle = (event, name) => {
    setOpen((newOpen) => !newOpen);
    setName(name);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setName('');
    setOpen(false);
    setMenuChild({});
    setAnchorChild({});
  };

  // Child function
  const handleToggleChild = (event, parent, id) => {
    let menuClose = {};
    let anchorClose = {};
    for (let i = 0; i < parent.child.length; i += 1) {
      if (parent.child[i].id !== id) {
        menuClose = {
          ...menuClose,
          [parent.child[i].id]: false
        };
        anchorClose = {
          ...anchorClose,
          [parent.child[i].id]: null
        };
      }
    }
    setMenuChild({
      ...menuChild,
      ...menuClose,
      [id]: true
    });
    setAnchorChild({
      ...anchorChild,
      ...anchorClose,
      [id]: event.currentTarget
    });
  };

  const handleCloseChild = (event, parent) => {
    let menuClose = {};
    let anchorClose = {};
    for (let i = 0; i < parent.child.length; i += 1) {
      menuClose = {
        ...menuClose,
        [parent.child[i].id]: false
      };
      anchorClose = {
        ...anchorClose,
        [parent.child[i].id]: null
      };
    }
    setMenuChild({
      ...menuChild,
      ...menuClose,
    });
    setAnchorChild({
      ...anchorChild,
      ...anchorClose,
    });
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.language);
  }, [open]);

  const childMenu = (menu, item, anchor) => (
    <Popper anchorEl={anchor[item.id] || null} open={menu[item.id] || false} placement="right-start" transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center bottom' : 'center top' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id="menu-list-grow">
                {item.child.map((subitem, index) => {
                  if (subitem.child) {
                    return (
                      <MenuItem
                        key={index.toString()}
                        onClick={handleClose}
                        onMouseEnter={(e) => handleToggleChild(e, item, subitem.id)}
                      >
                        <ListItemText primary={t('header_' + subitem.name)} />
                        { childMenu(menuChild, subitem, anchorChild) }
                        <ChevronRightIcon fontSize="small" />
                      </MenuItem>
                    );
                  }
                  return (
                    <MenuItem
                      key={index.toString()}
                      onMouseEnter={(e) => handleCloseChild(e, item)}
                      onClick={handleClose}
                      className={cx(classes.menuList, curURL === curOrigin + langPath + subitem.link + '/' ? classes.current : '')}
                    >
                      <ListItem disableGutters disableRipple className={classes.link} button component={LocaleLink} to={subitem.link}>
                        <ListItemText primary={t('header_' + subitem.name)} />
                      </ListItem>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );

  return (
    <ul className={classes.multiMenu}>
      {dataMenu.map((item, index) => (
        <Fragment key={index.toString()}>
          {item.child ? (
            <li
              onMouseEnter={(e) => handleToggle(e, item.name)}
              onMouseLeave={(e) => handleClose(e)}
              ref={anchorRef}
            >
              <div>
                <Button endIcon={<Icon>expand_more</Icon>}>{item.name}</Button>
                <Popper
                  open={menuName === item.name}
                  anchorEl={anchorEl || null}
                  placement="bottom-start"
                  className={classes.multiMenuRoot}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList autoFocusItem={open} id="menu-list-grow">
                            {item.child.map((subitem, indexChild) => {
                              if (subitem.child) {
                                return (
                                  <MenuItem
                                    key={indexChild.toString()}
                                    onClick={handleClose}
                                    onMouseEnter={(e) => handleToggleChild(e, item, subitem.id)}
                                    className={classes.menuList}
                                  >
                                    <ListItemText primary={subitem.name} />
                                    {childMenu(menuChild, subitem, anchorChild)}
                                    <ChevronRightIcon fontSize="small" />
                                  </MenuItem>
                                );
                              }
                              return (
                                <MenuItem
                                  key={indexChild.toString()}
                                  onMouseEnter={(e) => handleCloseChild(e, item)}
                                  onClick={handleClose}
                                  className={cx(classes.menuList, curURL === curOrigin + langPath + subitem.link + '/' ? classes.current : '')}
                                >
                                  <ListItem disableGutters disableRipple className={classes.link} button component="a" href={subitem.link}>
                                    <ListItemText primary={subitem.name} />
                                  </ListItem>
                                </MenuItem>
                              );
                            })}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </li>
          ) : (
            <li key={index.toString()}>
              <div>
                <Button href={item.link}>{item.name}</Button>
              </div>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
}

MultiLevelHover.propTypes = {
  dataMenu: PropTypes.array.isRequired
};

export default MultiLevelHover;
