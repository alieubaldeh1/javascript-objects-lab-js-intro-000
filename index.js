var recipes = {}


function updateObjectWithKeyandValue(object, key, value) {
  Object.assign({}, object, { [key]: value })
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)

  delete newObj[key]

  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object
}
