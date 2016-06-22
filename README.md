# gn

[GN] packaged for npm.

## Maintainers

To set up for maintanence:

* install [`depot_tools`].
* in a new directory, run `gclient config https://github.com/chrisdickinson/gn.git`.
* run `gclient sync`.

To update the version of `gn`:

* Open `DEPS` and change the mapping of `buildtools_revision`.

## LICENSE

BSD 3 Clause.

[GN]: https://chromium.googlesource.com/chromium/src/+/master/tools/gn/docs/language.md
