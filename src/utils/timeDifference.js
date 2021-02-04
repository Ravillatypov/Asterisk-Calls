function pad (num) {
  return ('0' + num).slice(-2)
}
function hhmmss (secs) {
  let minutes = Math.floor(secs / 60)
  secs = secs % 60
  const hours = Math.floor(minutes / 60)
  minutes = minutes % 60
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`
}
export default function (first, second) {
  if (first == null || second == null) return ''
  const delay = (new Date(first).valueOf() - new Date(second).valueOf()) / 1000 // in seconds
  return (delay > 0) ? hhmmss(Math.floor(delay)) : ''
}
