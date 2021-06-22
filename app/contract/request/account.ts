const accountSignIn = {
  account: { type: 'string', required: true, example: 'xxx@gmail.com' },
  password: { type: 'string', required: true, example: '******' },
  nickname: {
    type: 'string',
    required: false,
    example: 'xxx',
    description: '暱稱',
  },
};

export { accountSignIn };
