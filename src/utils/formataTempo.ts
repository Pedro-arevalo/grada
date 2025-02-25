export function formataTempo(data: Date) {
  const dia = data.getDate()
  const mes = data.getMonth() + 1
  const ano = data.getFullYear()
  const hora = data.getHours()
  const minutos = data.getMinutes()

  return {
    data: `${dia}/${mes}/${ano}`,
    hora: `${hora}:${minutos}`,
  }
}
