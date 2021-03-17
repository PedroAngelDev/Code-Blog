const slugify = function (text) {
  // remove accents, swap ñ for n, etc
  let from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  let to = 'aaaaeeeeiiiioooouuuunc------'
  let lengthFrom = from.length
  for (let i = 0; i < lengthFrom; i++) {
    text = text.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

module.exports = { slugify }
