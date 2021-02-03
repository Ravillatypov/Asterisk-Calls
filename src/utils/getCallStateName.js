export default function (state) {
  switch (state) {
    case 'MISSED':
      return 'Пропущен'
    case 'END':
      return 'Успешный'
    case 'NOT_CONNECTED':
      return 'Недозвон'
    case 'CONNECTED':
      return 'Начат'
    case 'NEW':
      return 'Новый'
  }
  return ''
}
