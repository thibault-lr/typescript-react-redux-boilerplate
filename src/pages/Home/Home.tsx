import * as React from 'react';
import { connect } from 'react-redux';

import Main from 'layouts/Main';

// import { Title } from 'components/atoms/Title';
import { Header } from 'components/molecules/Header';

import { fetchRequest } from 'store/people/action';

import { ApplicationState } from 'store/appState';
import { IPeople } from 'store/people/types';


interface PropsFromState {
  loading: boolean,
  results: IPeople[],
  errors?: string,
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

type AllProps = PropsFromState & PropsFromDispatch

class Home extends React.Component<AllProps> {
  // constructor(props: any) {
  //   super(props);
  // }

  componentDidMount() {
    const { fetchRequest: fr } = this.props;
    fr();
  }


  public render(): JSX.Element {
    const menuItems = [
      { content: 'Home', path: '/', active: true },
      { content: 'Blog', path: '/blog', active: false },
    ];

    const { loading, results } = this.props;

    return (
      <Main>
        <Header items={menuItems} />
        Home page
        {loading && results.length === 0 && <div className="loading"> Loading user ...</div>}
        {
          !loading && results.length > 0
          && results.map((r, i:number) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="user" key={`user-${i}`}>
              {r.email}
            </div>
          ))
        }
      </Main>
    );
  }
}
const mapStateToProps = ({ people }: ApplicationState) => ({
  loading: people.loading,
  error: people.errors,
  results: people.results,
});

const mapDispatchToProps = {
  fetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
