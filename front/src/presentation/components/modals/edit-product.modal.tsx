"use client";
import * as z from "zod";
import { useEffect, useState } from "react";

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

  const form = useForm<z.infer<typeof ProductUpdateSchema>>({
    resolver: zodResolver(ProductUpdateSchema),
    defaultValues: {
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
    },
  });

  const onSubmit = async (values: z.infer<typeof ProductUpdateSchema>) => {};

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
                        disabled={loading}
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
                        disabled={loading}
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
                      <Input
                        disabled={loading}
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
                        disabled={loading}
                        placeholder="category..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled={loading} variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
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
