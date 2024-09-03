export class Product {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public description: string,
    public image: string,
    public category: string,
    public price: number,
    public quantity: number,
    public internalReference: string,
    public shellId: number,
    public inventoryStatus: "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK",
    public rating: number,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
