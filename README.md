# npm-nuget

Run nuget.exe from [Node.js](https://nodejs.org/).

**The following README is used a design guide. Implementation is taking place on the `dev` branch.**

## todo

- Search repository for todo
- .eslintrs.js
- .travis.yml
- README badges

## Why

npm-nuget makes calling nuget.exe from node.js, especially from npm's package.json, as simple as possible.
 
## Installation

The recommended installation method is a local [npm](https://www.npmjs.com/) install for your project:

```cmd
> npm install npm-nuget --save-dev
```

...and add a "script" entry within your project's `package.json` file:

```
# Inside package.json...
  "scripts": {    
    "package": "npm-nuget pack <visual studio project>"
  },
```

With the above script entry, you can then create a nuget package in your project`s root via:

```cmd
> npm run package
```

Other options for running locally installed NPM binaries is discussed in this Stack Overflow question: [How to use package installed locally in node_modules](http://stackoverflow.com/q/9679932)

## Custom Configuration

**todo**

## Submitting Issues

See [ISSUE-TEMPLATE.md](./ISSUE-TEMPLATE.MD).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.MD).

## License

Code released under the [MIT license](./LICENSE).
