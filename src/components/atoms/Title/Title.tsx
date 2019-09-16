import * as React from 'react';

import './style.scss';

export interface ITitle {
  title: string
}


const Title = (props: ITitle) => {
  const { title } = props;
  return (
    <h1 className="title">{title}</h1>
  );
};

export default Title;
