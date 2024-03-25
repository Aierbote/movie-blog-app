# Convention

Rispettiamo le [conventional commit][conventional-commit] in inglese

**Examples**

```sh
# commit --message "type(scope)
git commit - "feat(style): add navbar style"

```

## Types

Adoperiamo i seguenti **types** di commit (**OBBLIGATORI**):

- `feat` per le nuove features
- `docs` per le modifiche o gli aggiornamenti alla documentazione
- `fix` per le i bug fix
- `refactor` per le modifiche al codice che non aggiungono nuove funzionalità o correggono bug
- `chore` per le operazioni di gestione e configurazioni varie che non modificano il codice

## Scopes

Il **scope** specifica la parte del progetto interessata dal commit (_opzionale ma consigliato_). Può essere, ad esempio, il **nome di un modulo** o di una funzionalità specifica:

- `ui` per le modifiche relative all'interfaccia utente o al frontend
- `js` per le modifiche o gli aggiornamenti al codice del backend
- `db` per le modifiche al database
- `api` per le modifiche o gli aggiornamenti alle API

Questi scopes dovrebbero coprire le principali aree del progetto, ma potremmo considerare l'aggiunta di ulteriori scopes specifici.

[conventional-commit]: https://www.conventionalcommits.org/en/v1.0.0/
