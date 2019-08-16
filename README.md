# fastify-preact-htm-boilerplate

Quickly bootstrap your next web app with [Fastify](https://www.fastify.io), [Preact](https://preactjs.com/) and [htm](https://github.com/developit/htm) (great stack for quick web prototypes).

## Rationale 🤯

Sometimes you just want to create a quick prototype of a web app to get feedback from friends and co-workers.

In such cases, I personally don't like to invest a lot of time configuring build toolchains and tools such as Babel or Jest, but I want to get straight to the core.

Since my favorite technologies to develop web apps are Fastify (API) and React (UI), I found this stack to work quite well as a compromise between familiarity, ease of development and possibility to improve over in case I want to convert the project to an actual production-ready app.

More details available in my blog article [Fastify and Preact for quick web app prototyping
](https://loige.co/fastify-and-preact-for-quick-web-app-prototyping)

[![Fastify and Preact for quick web app prototyping](https://loige.co/static/fastify-and-preact-for-quick-web-app-prototyping-fb-0e2a91fd4aeafdbd38532769ca069c85.png)](https://loige.co/fastify-and-preact-for-quick-web-app-prototyping)

## Getting started 👩‍💻

As easy as running this:

```bash
git clone https://github.com/lmammino/fastify-preact-htm-boilerplate.git my-new-project
cd my-new-project
rm -rf .git
npm install
```

Now enjoy editing the sample code in `src`:

- `src/ui`: is for your frontend (Preact + htm)
- `src/server`: is for your backend (Fastify)

To start the app, just run:

```bash
npm start
```

The app will be available at [localhost:3000](http://localhost:3000).

## Ready to be distributed (with Docker) 🐳

The project contains already a `Dockerfile` that allows you to package and run the project without having to have Node.js and NPM installed.

Run the following commands to run the app in a container:

```bash
docker build -t my-new-project:my-tag .
docker run --init -it -p 3000:3000 my-new-project:my-tag
```

Now enjoy your app at [localhost:3000](http://localhost:3000).

## What's missing? 🤔

This boilerplate does not suggest any way to **compile your assets** in a more production ready way. Also it doesn't make any **frontend routing** assumption (no library provided), nor it provides **server side rendering** (which you might want if you care about SEO).

Moreover, there's no default way to **persist data** in your backed. Picking the right database for your needs is left up to you.

These are only some of the aspects you have to generally keep in mind while building an application for production and this boilerplate leaves these concerns to you.

## Contributing 🤙

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue](https://github.com/lmammino/fastify-preact-htm-boilerplate/issues) or by [sending a pull request](https://github.com/lmammino/fastify-preact-htm-boilerplate/pulls).

## License 👮‍♀️

Licensed under [MIT License](LICENSE). © Luciano Mammino.
