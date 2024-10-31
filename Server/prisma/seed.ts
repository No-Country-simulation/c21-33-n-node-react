import prisma from '../prisma/connection/prisma.connection.js'
import process from 'process';

const userStatus = [
  {
    code: 'C01',
    description: 'ACTIVE'
  },
  {
    code: 'C02',
    description: 'INACTIVE'
  }
]


const user = {
  email: 'admin@gmail.com',
  password: '123456',
  nombre: 'Jose',
  apellido: 'Perez',
  direccion: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678',
  piso: 1,
  departamento: 1,
  dni: 44877777,
  fechaNacimiento: new Date('1990-09-26T07:58:30.996+0200'),
  pasaporte: 12345688,
  pais: 'Argentina',
  localidad: 'La Plata',
  celular: '3511245652',
  celularOpcional: '3516562322',
  codigoPostal: 5223,
  numeroLegajo: 5462,
  fechaInicio: new Date('2024-01-07T07:58:30.996+0200'),
  statusId: 1
}


const createVarious = async (createObjects) => {
  const createdObjects = await prisma.user.createMany({
    data: createObjects,
    skipDuplicates: true
  })
  return Promise.resolve(createdObjects)
}

const create = async (createObject) => {
  const createdItem = await prisma.user.create({
    data: createObject
  })
  return Promise.resolve(createdItem)
}

async function main () {
  await createVarious(userStatus)
  await create(user)
}

main()
  .then(async () => {
    console.log('Prisma seaders completed')
    // await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e, 'An error occurred while performing prisma seeders.')
    // await prisma.$disconnect()
    process.exit(1)
  })