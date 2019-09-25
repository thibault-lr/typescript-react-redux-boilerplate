import InfoService from 'services/v1/infos';
import axios from 'axios';

jest.mock('axios');

const infos = {
  data: {
    status: 'ok',
  },
};

describe('Info service test', () => {
  it('make api call to get data', async () => {
    // call this first
    (axios.get as any).mockResolvedValue(infos);

    const res = await InfoService.getInfos();
    expect(res).toEqual(infos.data);
  });
});
