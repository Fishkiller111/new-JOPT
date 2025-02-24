/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LinkComponent = React.forwardRef((props, ref) => {
  const { children, to, skipLocaleHandling, ...rest } = props;
  const router = useRouter();
  const locale = rest.locale || router.query.locale || '';

  let href = to || router.asPath;
  if (href.indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale);
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
});

export default LinkComponent;
