export const signInCountResponse = {
  mins: { type: 'number', required: true, example: 1 },
  tenMins: { type: 'number', required: true, example: 10 },
};

export const signInResponse = {
  token: {
    type: 'string',
    required: true,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMTIzIiwicGFzc3dvcmQiOiIxIiwibmlja25hbWUiOiIxIiwiaWF0IjoxNjI0MjU2OTU5fQ.aiqHhLcF-xXq8cpKSF8K5ErUb5FMpv1yXXgmGNDTsv8',
  },
};
