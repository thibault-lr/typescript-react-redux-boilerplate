import * as React from 'react';

import './style.scss';

interface IHeaderCardProps {
  content: string
}

const HeaderCard = (props: IHeaderCardProps) => {
  const { content } = props;

  return (
    <div className="HeaderCard">
      {content}
    </div>
  );
};

export {
  HeaderCard,
  // eslint-disable-next-line no-undef
  IHeaderCardProps,
};
