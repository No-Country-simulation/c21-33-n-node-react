import prisma from '../../../prisma/connection/prisma.connection.js';
import { Prisma } from '@prisma/client';

export const userDAO = {
  async findAll() {
    return await prisma.user.findMany();
  },

  async findById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
    });
  },

  async createUser(data: Prisma.userCreateInput) {
    return await prisma.user.create({
      data,
    });
  },

  async updateUser(id: number, data: Prisma.userUpdateInput) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  },

  async deleteUser(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  },
};

