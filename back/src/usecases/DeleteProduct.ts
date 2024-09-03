import prisma from "../prismaClient";

export class DeleteProduct {
  async execute(id: number) {
    await prisma.product.delete({
      where: { id },
    });
    return true;
  }
}
