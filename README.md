[![Build Status](https://travis-ci.org/telemark/tfk-saksbehandling-elev-skoleskyss.svg?branch=master)](https://travis-ci.org/telemark/tfk-saksbehandling-elev-skoleskyss)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-saksbehandling-elev-skoleskyss.svg)](https://greenkeeper.io/)

# tfk-saksbehandling-elev-skoleskyss

Saksbehandlermodul for skoleskyss

## Innhold

- [Arbeidsflyt](docs/flow.md)
- [Regler](docs/rules.md)

## Docker

Build

```sh
$ docker build -t tfk-saksbehandling-elev-skoleskyss .
```

### Usage

```sh
$ docker run --env-file=docker.env --volume=/test/data/jobs:/src/test/data/jobs --rm tfk-saksbehandling-elev-skoleskyss
```

or from prebuilt image

```sh
$ docker run --env-file=docker.env --volume=/test/data/jobs:/src/test/data/jobs --rm telemark/tfk-saksbehandling-elev-skoleskyss
```

This will start a container. Do the job. Stop the container and remove it.

## License

[MIT](LICENSE)

![Robohash image of tfk-saksbehandling-elev-skoleskyss](https://robots.kebabstudios.party/tfk-saksbehandling-elev-skoleskyss.png "Robohash image of tfk-saksbehandling-elev-skoleskyss")