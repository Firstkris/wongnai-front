export const validate = (schema) => (input) => {
  const { error } = schema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
    return result;
  }
};
