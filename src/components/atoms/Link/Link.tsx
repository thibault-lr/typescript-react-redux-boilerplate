import * as React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

interface CustomLinkProps {
  content: string,
  path: string,
  active: boolean
}

const CustomLink = ({ content, path, active }: CustomLinkProps) => (
  <div className={`customlink ${active ? 'customlink__active' : ''}`}>
    <Link to={path} className="customlink__link">
      {content}
    </Link>
  </div>
);

export {
  CustomLink,
  // eslint-disable-next-line no-undef
  CustomLinkProps,
};
