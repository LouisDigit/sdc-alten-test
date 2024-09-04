import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

async function main() {
  // Chemin vers le fichier JSON
  const filePath = path.join(__dirname, "products.json");

  // Lecture du fichier JSON
  const productsData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // Insertion des produits dans la base de données
  for (const product of productsData) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log("Products seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
