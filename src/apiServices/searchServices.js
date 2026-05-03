import * as request from '~/utils/request';

export const search = async (q, per_page = 11) => {
  try {
    const res = await request.get('search/users', {
      params: {
        q,
        per_page,
      },
    });
    return res.items;
  } catch (error) {
    console.log(error);
  }
};
