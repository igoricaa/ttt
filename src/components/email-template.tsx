export const EmailTemplate = (name: string, email: string, phone: string, message: string) => (
  <div>
    <h1>Mejl sa kontakt forme sajta</h1>
    <p>Ime: {name}</p>
    <p>Email: {email}</p>
    <p>Telefon: {phone}</p>
    <p>Poruka: {message}</p>
  </div>
);
