export const requiredField = value =>{
  if (value) return undefined
  return 'Field is required'
}

export const maxLenghtCreator = (maxLenght) => value =>{
  // if (value) return undefined
  if (value.length>maxLenght) return 'To many words'
  return undefined
}
