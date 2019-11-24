export type Location = {
  number: number,
  title: string
}

export const locations:Location[] = [
  {number: 101, title: 'Cuanacht Farmhold'},
  {number: 106, title: 'Fore-Dweller Mounds'},
  {number: 107, title: 'Whitening'},
  {number: 111, title: 'Underwall'},
  {number: 115, title: 'Titan\'s Steps'},
  {number: 118, title: 'Stampede'},
  {number: 121, title: 'Broken Cuanacht'},
  {number: 125, title: 'Titan\'s Steps'},
  {number: 132, title: 'Serene Visage'},
  {number: 134, title: 'Falfuar'},
  {number: 135, title: 'Bundorca'},
  {number: 140, title: 'Dark Morass'},
  {number: 141, title: 'Wyrdedge'},
  {number: 147, title: 'Abandoned Falfuar'},
  {number: 148, title: 'Faldorca'},
  {number: 152, title: 'Halfway'},
  {number: 155, title: 'Forest of Whispers'},
  {number: 158, title: 'Halfway Meeting'}
]

export const getLocationTitle = (number:number):string|undefined => {
  const found = locations.find(loc => loc.number === number)
  return found ? found.title : undefined
}
