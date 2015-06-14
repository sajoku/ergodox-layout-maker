![ergodox](ergodox.png)

# ErgoDox Layout Configurator
Attempt to make an open source ErgoDox Layout Configurator, hopefully this won't be needed at all and Massdrop will just open source theirs. Mind you this is being developed 'blind' (i.e. by not looking at Massdrop's code).

## Dependencies

- d3 for SVG stuff
- jQuery for everything else.

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
