import ContactForm from "@/presentation/components/contact-form";

function ContactPage() {
  return (
    <>
      <div className="flex  flex-col flex-1 items-center border py-3">
        <h2 className="text-black font-black text-xl">Contactez-nous</h2>
        <p className="text-lg font-medium">
          Veuillez remplir le formulaire ci-dessous
        </p>
      </div>
      <div className="mx-auto border my-6 p-3">
        <ContactForm />
      </div>
    </>
  );
}

export default ContactPage;
