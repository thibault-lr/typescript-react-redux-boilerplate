import * as React from 'react';

import Main from 'layouts/Main';

import { Title } from 'components/atoms/Title';
import { Header } from 'components/molecules/Header';
import InfoService from 'services/v1/infos';


class Home extends React.PureComponent<{}, {user: any, loading: boolean, error: boolean}> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: false,
      loading: true,
      error: false,
    };
  }

  async componentDidMount() {
    try {
      const infos = await InfoService.getInfos();
      this.setState({
        user: infos.results[0],
        loading: false,
        error: false,
      });
    } catch (err) {
      this.setState({
        error: true,
        loading: false,
      });
    }
  }


  public render(): JSX.Element {
    const menuItems = [
      { content: 'Home', path: '/', active: true },
      { content: 'Blog', path: '/blog', active: false },
    ];

    const { loading, user, error } = this.state;

    return (
      <Main>
        <Header items={menuItems} />
        Home page
        {loading && <div className="loading"> Loading user ...</div>}
        {
          !loading && !error
          && (
            <div className="user">
              <Title title={`Hello ${user.email}`} />
            </div>
          )
        }

        {
          !loading && error
          && (
            <div className="error">
              Error loading
            </div>
          )
        }
      </Main>
    );
  }
}

export default Home;
