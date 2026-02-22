import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type ContactSchemaType, ContactSchema } from "../schema";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  topic: "",
  description: "",
};

interface ContactFormProps {
  title: string;
  description: string;
}

export const ContactForm = ({ title, description }: ContactFormProps) => {
  const { handleSubmit, ...form } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
    defaultValues,
  });

  // Todo: connect with email
  const onSubmit = (values: ContactSchemaType) => {
    console.log(values);
  };

  return (
    <div className="w-full max-w-xl lg:max-w-3xl mx-auto py-6 sm:py-12 lg:py-20">
      <div className="grid gap-6 sm:gap-10 lg:gap-14">
        <div className="grid justify-center gap-1 sm:gap-2.5 lg:gap-4">
          <h3 className="text-2xl sm:text-4xl lg:text-5xl text-center scroll-m-20 tracking-tight text-balance leading-10 sm:leading-14 lg:leading-16">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground text-center">
            {description}
          </p>
        </div>

        <Form handleSubmit={handleSubmit} {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2.5 sm:space-y-3.5 lg:space-y-5 grid grid-cols-2 sm:gap-x-4 lg:gap-x-6"
          >
            <div className="col-span-2 sm:col-span-1">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imię</FormLabel>
                    <FormControl>
                      <Input placeholder="Wpisz swoje imię" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nazwisko</FormLabel>
                    <FormControl>
                      <Input placeholder="Wpisz swoje nazwisko" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adres e-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Na ten adres wyślemy odpowiedź"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Czego dotyczy zapytanie?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Np. konsultacja, zabieg, pytanie"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Treść wiadomości</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none h-40 sm:h-48 lg:h-60"
                        placeholder="Opisz, w czym możemy pomóc…"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center col-span-2">
              <Button
                className="h-9 sm:h-10 lg:h-12 px-5 sm:px-7 lg:px-9 sm:text-base lg:text-lg"
                type="submit"
              >
                Wyślij wiadomość
              </Button>
            </div>
          </form>
        </Form>

        <p className="text-sm sm:text-base text-muted-foreground text-center">
          Odpowiadamy na zapytania tak szybko, jak to możliwe w godzinach pracy
          gabinetu.
        </p>
      </div>
    </div>
  );
};
