import { LinkButton, SeoMetadata } from "@/shared";

export const NotFound = () => {
  return (
    <>
      <SeoMetadata
        title="404 – Strona nie znaleziona | Gabinet Chirurgii Ogólnej i Onkologicznej – Robert Gajewski Nowy Sącz"
        description="Przepraszamy, strona której szukasz nie istnieje. Zapraszamy do głównej strony gabinetu lek. Roberta Gajewskiego – chirurgia ogólna, onkologiczna i estetyczna w Nowym Sączu."
        canonical="https://chirurgnowysacz.com.pl"
        noindex={true}
      />
      <div className="container flex">
        <div className="w-full grid p-8 md:p-12 lg:p-16 bg-accent rounded-4xl">
          <div className="flex flex-col justify-center items-center gap-5 lg:gap-10">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-7xl lg:text-8xl scroll-m-20 tracking-tight text-balance leading-10 md:leading-14 lg:leading-16 text-center mb-4">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl scroll-m-20 tracking-tight text-balance leading-10 md:leading-14 lg:leading-16 text-center mb-4">
                Strona nie została odnaleziona
              </h2>
              <p className="text-sm md:text-base lg:text-lg mx-auto text-center font-semibold text-muted-foreground mb-2">
                Przepraszamy, ale szukana podstrona jest niedostępna.
              </p>
              <p className="text-sm md:text-base lg:text-lg mx-auto text-center font-semibold text-muted-foreground">
                Zapraszamy do skorzystania z aktualnych informacji o naszych
                usługach medycznych, specjalistach i możliwościach kontaktu.
              </p>
            </div>
            <LinkButton
              className="h-9 md:h-10 lg:h-11 xl:h-12 px-5 md:px-7 lg:px-9 text-sm md:text-base lg:text-lg text-primary-foreground!"
              href="/"
            >
              Przejdź na stronę główną
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
};
