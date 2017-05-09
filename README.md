# 🌗 Depex

[![Greenkeeper badge](https://badges.greenkeeper.io/rohmanhm/depex.svg)](https://greenkeeper.io/)
 [![Build Status](https://travis-ci.org/rohmanhm/depex.svg?branch=master)](https://travis-ci.org/djavaweb/unobuilder)

The simple way to expose your dependencies name and version from your `package.json` file and grouped by their type of dep.

## Install
Using **NPM**
```bash
npm install --global depex
```
or using **Yarn**
```bash
yarn global add depex
```

## Usage
```bash
depex -D # just expose devDependencies
depex -d # just expose dependencies
depex # expose all
```

## License
MIT © [Roman Masyhar](https://github.com/rohmanhm)