# Readme

![logo](https://raw.githubusercontent.com/saltylemon11/group26_moovi/main/moovi/public/logo.webp)

Logo made by [Picas](https://github.com/djyde/Picas)

Track and explore TV shows & movies in a simple and elegant way. 

## Stacks used 

- React
- Redux
- [React Router](https://reactrouter.com/)
- [Material UI](https://mui.com/)
- [moment.js](https://momentjs.com/)

## Development

```
cd moovi
npm run start
```

To build

```
git clone & npm run build
```

## Progress

- [x] Most of views :tada:
- [x] Adjust layouts
- [x] Refactor components
- [x] Authn & Authz 
- [x] ... 😥:

## File tree

```
.
├── App.css
├── App.js
├── App.test.js
├── app
│   └── store.js // Redux store
├── authContext.js // Use React hook to keep authz
├── components
│   ├── Auth
│   │   ├── loginPresenter.js
│   │   ├── loginView.js
│   │   ├── signUpPresenter.js
│   │   └── signUpView.js
│   ├── Home
│   │   ├── TVshows.js
│   │   ├── homePresenter.js
│   │   ├── homeView.js
│   │   ├── mainView.js
│   │   ├── movieView.js
│   │   ├── sidebarView.js
│   │   └── top100.js // IMDB TOP 100 movies
│   ├── LandingPage
│   │   ├── LandingPage.js
│   │   └── LandingPagePresenter.js
│   ├── Profile
│   │   ├── collection.js
│   │   ├── libraryUI.js
│   │   ├── movieListUI.js
│   │   ├── profilePresenter.js
│   │   ├── profileView.js
│   │   ├── settings.js
│   │   ├── sidebarView.js
│   │   └── tracker.js
│   ├── Search
│   │   ├── searchPresenter.js
│   │   └── searchView.js
│   └── Shows
│       ├── mockdata.json
│       ├── showsPresenter.js
│       └── showsView.js
├── index.css
├── index.js
├── reportWebVitals.js
├── route.js // Routes
├── services // API (using Redux here)
│   ├── firebase.js
│   ├── library.js
│   ├── promiseNoData.js
│   ├── record.js
│   ├── resolvePromise.js
│   ├── user.js
│   └── utils.js
├── setupTests.js
├── shared // Shared UI components
│   ├── MasonryImageListUI.js
│   ├── StarBackground.css
│   ├── errorpage.js
│   ├── footer.js
│   ├── header.js
│   ├── list.js
│   ├── logo.webp
│   ├── logo32.webp
│   ├── movielists.js
│   ├── recordItemUI.js
│   ├── recordTypes.js
│   └── searchItemUI.js
└── slices // Redux actions & reducers
    ├── librarySlice.js
    ├── recordSlice.js
    └── userSlice.js
```
