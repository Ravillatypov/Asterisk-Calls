export default function (callType) {
  switch (callType) {
    case 'INCOMING':
      return 'Входящий'
    case 'INTERNAL':
      return 'Внутренний'
    case 'OUTBOUND':
      return 'Исходящий'
  }
  return ''
}
