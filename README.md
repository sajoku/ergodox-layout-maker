![ergodox](ergodox.png)

# ErgoDox Layout Maker
Web based open source ErgoDox Layout Maker.

## Dependencies

- d3 for SVG stuff
- jQuery for everything else.
- nodejs / npm

## Howto 

- npm install -g gulp
- npm intall
- gulp (this should create a dist folder)
- open index.html

## What is working?

- Layout in SVG
- Select a key via mouse
- Sets a key via keypress on selected key
- Simple export to JS array

## References

- [How to create a keymap](https://github.com/benblazak/ergodox-firmware#create-a-new-keymap)
- [ErgoDox Keyboard Firmware](https://github.com/benblazak/ergodox-firmware)

### Compiling (on OSX)

Prerequisites (see https://github.com/osx-cross/homebrew-avr/):

    brew tap osx-cross/avr
    brew install avr-libc

After this it is a simple `make` inside the `src` folder of the [firmware](https://github.com/benblazak/ergodox-firmware).

To compile a different layout: `make LAYOUT=layout`, so say `make LAYOUT=dvorak-kinesis-mod`

## TODO

- Setting of detailed key using context menu and keyboard press
- Loading of saved layouts (in a simple format, json?)
- Saving of created layouts (to a simple format, json?)
- Export to C source-code (.c and .h files)

Though this would be possible in the frontend, it's probably easier to do this 'server-side' with NodeJS (considering I'm planning to use Electron).

- Export to .hex (and .eep?) file for immediate upload

This requires a make so this needs to be done 'server-side'.

## Future

- Make standalone using http://electron.atom.io/
- Integrate directly with Teensy loader (http://www.pjrc.com/teensy/loader_cli.html)
