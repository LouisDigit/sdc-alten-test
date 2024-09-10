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
import { ProductInsertSchema } from "@/domain/models/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { ProductController } from "@/presentation/controllers/ProductController";
import { ProductRepository } from "@/infrastructure/repositories/product-repository";
import { useToast } from "@/presentation/hooks/use-toast";

interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
}

export const CreateProductModal: React.FC<CreateProductModalProps> = ({
  isOpen,
  onClose,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const productController = new ProductController();
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof ProductInsertSchema>>({
    resolver: zodResolver(ProductInsertSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      category: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ProductInsertSchema>) => {
    startTransition(() => {
      try {
        productController.createProduct(values);
        toast({
          title: "Ajouté",
          description: "Produit ajouté au catalogue",
        });
        onClose();
      } catch (e) {
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite lors de l'ajout du produit",
        });
      }
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Modal
      title="Create Product"
      description="You will create a new product. Are you sure you want to continue?"
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
                      <Input
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
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={isPending}
                  variant="outline"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button disabled={isPending} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
