import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { useSpacing } from 'theme/common';
import FooterDeco from 'components/Footer/Decoration/General';
import Header from 'components/Header/Basic';
import Footer from 'components/Footer';

function AuthLayout(props) {
  // Theme breakpoints

   // Translation Function
  const { t } = useTranslation('common');

  const { classes } = useSpacing();

  const {
    onToggleDark,
    onToggleDir,
    children,
    btnText,
    link,
  } = props;
  return (
    <div className={classes.mainWrap}>
      <Header
        text={t(btnText)}
        href={link}
        onToggleDark={onToggleDark}
        onToggleDir={onToggleDir}
      />
      {children}
      <FooterDeco>
        <Footer toggleDir={onToggleDir} />
      </FooterDeco>
    </div>
  );
}

AuthLayout.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  btnText: PropTypes.string,
};

AuthLayout.defaultProps = {
  btnText: 'register'
};

export default AuthLayout;
