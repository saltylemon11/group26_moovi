# Readme

![logo](https://raw.githubusercontent.com/saltylemon11/group26_moovi/main/moovi/public/logo.webp)

Logo made by [Picas](https://github.com/djyde/Picas)

Track and explore TV shows & movies in a simple and elegant way. 

## Stacks used 

- React
- Redux
- [React Router](https://reactrouter.com/)
- [Material UI](https://mui.com/)
- [Sass](https://sass-lang.com)

## Development

```
cd moovi
npm run start
```
## Progress

- [x] Most of views :tada:
- [ ] Adjust layouts
- [ ] Refactor components
- [ ] Authn & Authz 
- [ ] ... :scream:

## File tree

```
.
├── API
│   ├── promiseNoData.js
│   ├── resolvePromise.js
│   └── utils.js // Utility functions for making API calls
├── App.css
├── App.js // Root component
├── actions // Redux actions
├── app // Redux store
│   └── store.js
├── components
│   ├── Auth
│   │   ├── signIn.js
│   │   └── signUp.js
│   ├── Friends // TODO: Following & Followers
│   ├── Home
│   │   ├── home.js
│   │   ├── main.js
│   │   ├── sidebar.js
│   │   └── top100.js // IMDB Top 100 Movies (use API calls)
│   ├── LandingPage
│   │   └── LandingPage.js
│   ├── LandingPagePresenter.js
│   ├── Profile
│   │   ├── collection.js // TODO: refactor
│   │   ├── inprogress.js
│   │   ├── main.js
│   │   ├── settings.js // TODO: Account settings
│   │   ├── sidebar.js
│   │   ├── towatch.js
│   │   ├── tracker.js
│   │   └── watched.js
│   ├── Search
│   │   └── Search.js
│   ├── StarBackground.css
│   ├── UI // Reusable UI components
│   │   ├── errorpage.js
│   │   ├── footer.js
│   │   ├── header.js
│   │   ├── list.js
│   │   └── movielists.js // TODO: refactor
│   ├── logo.webp
│   └── logo32.webp
├── firebase
│   └── utils.js
├── index.css
├── index.js
├── reducers // Redux reducers
├── routes // Router
│   └── route.js
└── setupTests.js
```

