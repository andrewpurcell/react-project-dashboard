let sequence = 0;

const PROJECTS = [
  {
    id: sequence++,
    name: 'Paint the barn',
    type: 'painting',
    supervisor: 'Scott',
    worker: 'Jimbo',
    tasks: [
      { id: sequence++, name: 'Paint', assignee: 'Jimbo'},
      { id: sequence++, name: 'Drink beer', assignee: 'Scott'}
    ]
  },
  {
    id: sequence++,
    name: 'Shoe the horse',
    type: 'animals',
    supervisor: 'Scott',
    worker: 'Jimbo',
    tasks: [
      { id: sequence++, name: 'Shoe it', assignee: 'Jimbo'},
      { id: sequence++, name: 'Drink beer', assignee: 'Scott'}
    ]
  },
  {
    id: sequence++,
    name: 'Paint the garage',
    type: 'painting',
    supervisor: 'Scott',
    worker: 'Jimbo',
    tasks: [
      { id: sequence++, name: 'Paint', assignee: 'Jimbo'},
      { id: sequence++, name: 'Drink beer', assignee: 'Scott'}
    ]
  },
  {
    id: sequence++,
    name: 'Fix the car',
    type: 'repairs',
    supervisor: 'Scott',
    worker: 'Jimbo',
    tasks: [
      { id: sequence++, name: 'Fix', assignee: 'Jimbo'},
      { id: sequence++, name: 'Drink beer', assignee: 'Scott'}
    ]
  },
  {
    id: sequence++,
    name: 'Mow the lawn',
    type: 'yardwork',
    supervisor: 'Scott',
    worker: 'Jimbo',
    tasks: [
      { id: sequence++, name: 'Mow', assignee: 'Jimbo'},
      { id: sequence++, name: 'Drink beer', assignee: 'Scott'}
    ]
  },
  {
    id: sequence++,
    name: 'Vacuum the carpet',
    type: 'vacuuming',
    supervisor: 'Scott',
    worker: 'Jimbo',
    tasks: [
      { id: sequence++, name: 'Vacuum', assignee: 'Jimbo'},
      { id: sequence++, name: 'Drink beer', assignee: 'Scott'}
    ]
  },

];

export default PROJECTS;
