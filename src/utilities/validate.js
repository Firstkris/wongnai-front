export const validate = (schema) => (input) => {

    const { error } = schema.validate(input, { abortEarly: false })

    if (error) {
        console.dir(error)
        const result = error.details.reduce((acc, el) => {
            acc[el.context.key] = el.message
            return acc

        }, {})
        return result
    }

}
