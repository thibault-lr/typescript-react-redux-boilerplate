import * as React from 'react';

import { IHeaderCardProps, HeaderCard } from 'components/atoms/HeaderCard';

import './style.scss';


interface IHeaderProps {
  items: IHeaderCardProps[]
}

const Header = (props: IHeaderProps) => {
  const { items } = props;
  return (
    <div className="header">
      {
        // eslint-disable-next-line react/no-array-index-key
        items.map((item, i) => <HeaderCard content={item.content} key={`item-${i}`} />)
      }
    </div>
  );
};

export {
  // eslint-disable-next-line import/prefer-default-export
  Header,
};
