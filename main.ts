/**
* Cool LED functionalities
*/
namespace ledTricks {
    /**
    * Blinks the LED once.
    */
    //% block
    export function blink() {
        pins.LED.digitalWrite(true)
        pause(500)
        pins.LED.digitalWrite(false)
        pause(500)
    }
}