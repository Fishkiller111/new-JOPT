import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { useSpacing } from 'theme/common';
import Header from 'components/Header/BlogHeader';
import Footer from 'components/Footer';

function BlogLayout(props) {
  const { classes, cx } = useSpacing();
  const { children, onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={cx(classes.containerFront, classes.containerWrap, classes.higherTop)}>
          <div className={classes.innerPage}>
            {children}
          </div>
          <div id="footer" className={classes.spaceTopShort}>
            <Footer toggleDir={onToggleDir} />
          </div>
        </main>
      </div>
    </Fragment>
  );
}

BlogLayout.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default BlogLayout;
