// Esta funcion es para capitalizar la primera letra de un string

export function capitalizeName(string){
  return string[0].toUpperCase() + string.slice(1);
}