header = %q(
#include "action_util.h"
#include "action_layer.h"
#define KC_SW0 KC_FN0
#define DEBUG_ACTION

static const uint8_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
)

footer = %q(
};

/* id for user defined functions */
enum function_id {
    TEENSY_KEY,
};

/*
 * Fn action definition
 */
static const uint16_t PROGMEM fn_actions[] = {
    [0] = ACTION_FUNCTION(TEENSY_KEY),              // FN0  - Teensy key
    [1] = ACTION_LAYER_TOGGLE(1),                   // FN1 - Toggle 1
    [2] = ACTION_LAYER_TOGGLE(2),                   // FN2 - Toggle 2
    [3] = ACTION_LAYER_TOGGLE(3),                   // FN3 - Toggle 3
    [4] = ACTION_LAYER_TAP_TOGGLE(1),               // FN4 - Momentary Layer 1
    [5] = ACTION_LAYER_MOMENTARY(2),                // FN5 - Momentary L2

    // SYMBOLS
    ACTION_MODS_KEY(MOD_LSFT, KC_QUOT),             // FN6 - "
    ACTION_MODS_KEY(MOD_LSFT, KC_1),                // FN7 - !
    ACTION_MODS_KEY(MOD_LSFT, KC_2),                // FN8 - @
    ACTION_MODS_KEY(MOD_LSFT, KC_3),                // FN9 - #
    ACTION_MODS_KEY(MOD_LSFT, KC_4),                // FN10 - $
    ACTION_MODS_KEY(MOD_LSFT, KC_5),                // FN11 - %
    ACTION_MODS_KEY(MOD_LSFT, KC_6),                // FN12 - ^
    ACTION_MODS_KEY(MOD_LSFT, KC_7),                // FN13 - &
    ACTION_MODS_KEY(MOD_LSFT, KC_8),                // FN14 - *
    ACTION_MODS_KEY(MOD_LSFT, KC_9),                // FN15 - (
    ACTION_MODS_KEY(MOD_LSFT, KC_0),                // FN16 - )
    ACTION_MODS_KEY(MOD_LSFT, KC_GRV),              // FN17 - ~
    ACTION_MODS_KEY(MOD_LSFT, KC_BSLS),             // FN18 - |
    ACTION_MODS_KEY(MOD_LSFT, KC_MINS),             // FN19 - _
    ACTION_MODS_KEY(MOD_LSFT, KC_COMM),             // FN20 - <
    ACTION_MODS_KEY(MOD_LSFT, KC_DOT),              // FN21 - >
    ACTION_MODS_KEY(MOD_LSFT, KC_SCLN),             // FN22 - :
    ACTION_MODS_KEY(MOD_LSFT, KC_LBRC),             // FN23 - {
    ACTION_MODS_KEY(MOD_LSFT, KC_RBRC),             // FN24 - }
    ACTION_MODS_KEY(MOD_LSFT, KC_SLSH),             // FN25 - ?
    ACTION_MODS_KEY(MOD_LSFT, KC_EQL),              // FN26 - +

    ACTION_MODS_TAP_KEY(MOD_LCTL, KC_ESC),          // FN27 - Control/esc on tap
    ACTION_MODS_TAP_KEY(MOD_LSFT, KC_Z),            // FN28 - Control/esc on tap
    ACTION_MODS_TAP_KEY(MOD_LCTL, KC_A),            // FN29 - Control/esc on tap

    // Fancy tapping/toggling
    ACTION_LAYER_TAP_KEY(1, KC_GRV),                // FN30 - Layer 1 when holding T key


};

void action_function(keyrecord_t *event, uint8_t id, uint8_t opt)
{
    print("action_function called\n");
    print("id  = "); phex(id); print("\n");
    print("opt = "); phex(opt); print("\n");
    if (id == TEENSY_KEY) {
        clear_keyboard();
        print("\n\nJump to bootloader... ");
        _delay_ms(250);
        bootloader_jump(); // should not return
        print("not supported.\n");
    }
}
)

require 'json'

layout = JSON.load(File.open(ARGV[0]))
puts header
layout['keyboard_layout']['layers'].each do |layer|

  puts "// #{layer['description']}"
  puts "KEYMAP("

  puts "       #{layer['keymap'][0..6].join(', ')},"
  puts "       #{layer['keymap'][7..13].join(', ')},"
  puts "       #{layer['keymap'][14..19].join(', ')},"
  puts "       #{layer['keymap'][20..26].join(', ')},"
  puts "       #{layer['keymap'][27..31].join(', ')},"
  puts "       #{layer['keymap'][32..33].join(', ')},"
  puts "       #{layer['keymap'][34..34].join(', ')},"
  puts "       #{layer['keymap'][35..37].join(', ')},"
  puts "// RIGHT"
  puts "       #{layer['keymap'][38..44].join(', ')},"
  puts "       #{layer['keymap'][45..51].join(', ')},"
  puts "       #{layer['keymap'][52..57].join(', ')},"
  puts "       #{layer['keymap'][58..64].join(', ')},"
  puts "       #{layer['keymap'][65..69].join(', ')},"
  puts "       #{layer['keymap'][70..71].join(', ')},"
  puts "       #{layer['keymap'][72..72].join(', ')},"
  puts "       #{layer['keymap'][73..75].join(', ')},"
  puts "),"

end
puts footer
