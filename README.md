# Movie Blog App

> [!IMPORTANT]
>
> Project Work a scopo didattico fatto in team durante il corso **Web & Mobile Development** del **ITS Steve Jobs Academy - Palermo - Corso 23**

## Contributtori

- **Alberto Cangialosi**
- Calogero Raia
- Alessandro Russo

## Descrizione

Questa è un'applicazione per un blog dedicato al cinema, sviluppata interamente in React. È pensata per gli appassionati di film che desiderano condividere recensioni su film di diversi generi.

## Funzionalità

- **Accesso**: Gli utenti possono accedere al blog per lasciare recensioni.
- **Visualizzazione dei Film**: Gli utenti possono cercare e visualizzare dettagli sui film.
- **Recensioni**: Chiunque può leggere recensioni, mentre utenti loggati posso scrivere, modificare o cancellare una (sola) recensione per film.

## Tecnologie Utilizzate

- **Frontend**: interfaccia utente sviluppata con React.js, dinamica e reattiva
- **Backend**: Node.js per collegare API endpoints al database e gestire le requests
- **Database**: MySQL per una gestione efficace dei dati

## Installazione

> [!TIP]
>
> Assicurarsi di avere installato [`git`][git] e [`node`][node] per usarli da command-line interface

1. Clona il repository:

   ```
   git clone https://github.com/tuonome/movie-blog-app.git
   ```

2. Naviga nella directory del progetto:

   ```
   cd movie-blog-app
   ```

3. Installa le dipendenze:

   ```
   npm install
   ```

4. Per avviare il database in locale importiamo il file di backup mysql `movie-blog-app.sql` su [XAMPP][xampp] (usa la sua porta 3306 di defeault)

5. Per comunicare col DataBase facciamo partire l'API node con un package script:

   ```
   npm run start-api
   ```

6. Avvia l'applicazione:

   ```
   npm run start
   ```

7. Crea un file `.env.local` per configurare le necessarie variabili d'ambiente in locale.

> [!IMPORTANT]
>
> Per evitare problemi con le policy CORS usiamo l'estensione [Moesif Origin & CORS][cors-policy-extension] per Chrome. A volte, in caso di fetch fail, non si riesce ad entrare nella rotta `movie/{idfilm}`, per evitare il rendirrizzamento errato, riavvia l'estension Moesif.

[git]: https://git-scm.com/book/it/v2/Per-Iniziare-Installing-Git
[node]: https://nodejs.org/en/download
[xampp]: https://www.apachefriends.org/it/download.html
[cors-policy-extension]: https://chromewebstore.google.com/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc

---

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
