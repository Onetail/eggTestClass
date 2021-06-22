export const statusError = {
  message: { type: 'string', example: 'required' },
  field: { type: 'string', example: 'passwrod' },
  code: { type: 'string', example: 'missing_field' },
};

export const badRequest = {
  message: {
    type: 'string',
    example: 'Validation Failed',
    description: 'Validation Failed',
  },
  code: {
    type: 'string',
    example: 'invalid_param',
  },
  errors: { type: 'array', itemType: `statusError` },
};
