"use client";
import * as z from "zod";
import { useEffect, useState, useTransition } from "react";

import { Modal } from "@/presentation/components/ui/modal";
import { Button } from "@/presentation/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { ProductUpdateSchema } from "@/domain/models/product";
import { Product } from "@/domain/models/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ProductController } from "@/presentation/controllers/ProductController";
import { useToast } from "@/presentation/hooks/use-toast";

interface UpdateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  product: Product;
}

export const UpdateProductModal: React.FC<UpdateProductModalProps> = ({
  isOpen,
  onClose,
  loading,
  product,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const productController = new ProductController();

  const form = useForm<z.infer<typeof ProductUpdateSchema>>({
    resolver: zodResolver(ProductUpdateSchema),
    defaultValues: {
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      inventoryStatus: product.inventoryStatus,
    },
  });

  const onSubmit = async (values: z.infer<typeof ProductUpdateSchema>) => {
    startTransition(() => {
      try {
        productController.updateProduct(product.id, values);
        toast({
          title: "Modifié",
          description: "Produit modifié du catalogue",
        });
        onClose();
      } catch (e) {
        toast({
          title: "Erreur",
          description:
            "Une erreur s'est produite lors de la modification du produit",
        });
      }
    });

    onClose();
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Modal
      title="Update Product"
      description="You will update a product. Are you sure you want to continue?"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        placeholder="name..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={isPending}
                        placeholder="price..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isPending}
                        placeholder="description..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        placeholder="category..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="inventoryStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Statut inventaire</FormLabel>
                    <FormControl>
                      <Select
                        disabled={isPending}
                        {...field}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Statut inventaire" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="INSTOCK">INSTOCK</SelectItem>
                          <SelectItem value="LOWSTOCK">LOWSTOCK</SelectItem>
                          <SelectItem value="OUTOFSTOCK">OUTOFSTOCK</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={isPending}
                  variant="outline"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button disabled={isPending} type="submit">
                  Update
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
