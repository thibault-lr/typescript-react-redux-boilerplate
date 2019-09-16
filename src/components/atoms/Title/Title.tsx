import * as React from 'react';

import './style.scss';

interface ITitle {
  title: string
}


// eslint-disable-next-line import/prefer-default-export
const Title = (props: ITitle) => {
  const { title } = props;
  return (
    <h1 className="title">{title}</h1>
  );
};

export {
  // eslint-disable-next-line no-undef
  ITitle,
  Title,
};
