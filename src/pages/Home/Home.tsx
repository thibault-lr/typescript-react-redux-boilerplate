import * as React from 'react';

import Main from 'layouts/Main';

import { Header } from 'components/molecules/Header';
import InfoService from 'services/v1/infos';


class Home extends React.PureComponent<{}, {user: any, loading: boolean}> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: false,
      loading: true,
    };
  }

  componentDidMount() {
    InfoService.getInfos()
      .then((infos: any) => {
        this.setState({
          user: infos.data.results[0],
          loading: false,
        });
      });
  }


  public render(): JSX.Element {
    const menuItems = [
      { content: 'Home', path: '/', active: true },
      { content: 'Blog', path: '/blog', active: false },
    ];

    const { loading } = this.state;
    const { user } = this.state;

    return (
      <Main>
        <Header items={menuItems} />
        Home page
        {loading && <div> Loading user ...</div>}
        {
          !loading
          && (
            <div>
              Hello :
              { user.email}
            </div>
          )
        }
      </Main>
    );
  }
}

export default Home;
