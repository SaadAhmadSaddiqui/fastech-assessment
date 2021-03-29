// Joi Validator for the client
export const validator = (data, schema) => {
  const { error } = schema.validate(data, {
    abortEarly: false,
    errors: { wrap: { label: false } }
  })
  const valid = !error
  if (!valid) {
    const message = error.details.reduce(
      (errs, error) => ({
        ...errs,
        [error.context.label]: error.message
      }),
      {}
    )
    return message
  }
}
