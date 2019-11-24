export type Location = {
  number: number,
  title: string
}

export const locations:Location[] = [
  {number: 101, title: 'Cuanacht Farmhold'},
  {number: 102, title: 'Hunter\'s Grove'},
  {number: 103, title: 'Warrior Fair'},
  {number: 104, title: 'Charred Conclave'},
  {number: 105, title: 'Forlorn Swords'},
]

export const getLocationTitle = (number:number):string|undefined => {
  const found = locations.find(loc => loc.number === number)
  return found ? found.title : undefined
}
