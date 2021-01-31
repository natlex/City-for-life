export const required = (value) => {
   if (value) return undefined
   return 'Поле не может быть пустым'
}

export const maxLengthText = (maxLength) => (value) => {
   if (value.length > maxLength) return `Максимальное число символов ${maxLength}`
   return undefined
}



export const validateEmail = (value) => {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (!re.test(String(value).toLowerCase())) return 'Некорректный e-mail'
   return undefined
}

