// __tests__/ProductController.test.ts
import request from "supertest";
import app from "../src/app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Product API", () => {
  beforeAll(async () => {
    await prisma.product.deleteMany(); // Nettoyage avant les tests
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should create a new product", async () => {
    const newProduct = {
      code: "P12345",
      name: "Test Product",
      description: "This is a test product",
      image: "https://example.com/product.jpg",
      category: "Electronics",
      price: 199.99,
      quantity: 50,
      internalReference: "REF12345",
      shellId: 1,
      inventoryStatus: "INSTOCK",
      rating: 4,
    };

    const response = await request(app).post("/products").send(newProduct);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe(newProduct.name);
  });

  it("should retrieve a product by id", async () => {
    const product = await prisma.product.create({
      data: {
        code: "P12345",
        name: "Test Product",
        description: "This is a test product",
        image: "https://example.com/product.jpg",
        category: "Electronics",
        price: 199.99,
        quantity: 50,
        internalReference: "REF12345",
        shellId: 1,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
    });

    const response = await request(app).get(`/products/${product.id}`).send();

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", product.id);
  });

  it("should retrieve all products", async () => {
    const response = await request(app).get("/products").send();

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should update a product", async () => {
    const product = await prisma.product.create({
      data: {
        code: "P12345",
        name: "Test Product",
        description: "This is a test product",
        image: "https://example.com/product.jpg",
        category: "Electronics",
        price: 199.99,
        quantity: 50,
        internalReference: "REF12345",
        shellId: 1,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
    });

    const updatedProductData = {
      name: "Updated Product",
    };

    const response = await request(app)
      .put(`/products/${product.id}`)
      .send(updatedProductData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", updatedProductData.name);
  });

  it("should delete a product", async () => {
    const product = await prisma.product.create({
      data: {
        code: "P12345",
        name: "Test Product",
        description: "This is a test product",
        image: "https://example.com/product.jpg",
        category: "Electronics",
        price: 199.99,
        quantity: 50,
        internalReference: "REF12345",
        shellId: 1,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
    });

    const response = await request(app)
      .delete(`/products/${product.id}`)
      .send();

    expect(response.status).toBe(204);
  });
});
