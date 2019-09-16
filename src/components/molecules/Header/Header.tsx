import * as React from 'react';

import { CustomLinkProps, CustomLink } from 'components/atoms/Link';

import './style.scss';


interface IHeaderProps {
  items: CustomLinkProps[]
}

const Header = ({ items } : IHeaderProps) => (
  <div className="header">
    {
      // eslint-disable-next-line react/no-array-index-key
      items.map((item, i) => <CustomLink content={item.content} path={item.path} active={item.active} key={`item-${i}`} />)
    }
  </div>
);

export {
  // eslint-disable-next-line import/prefer-default-export
  Header,
};
