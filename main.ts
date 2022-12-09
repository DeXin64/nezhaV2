//%color=#921AFF icon="\uf118" block="PS2" blockId="PS2"
namespace PS2 {

    export enum value_level {
        /**
         * Attention greater than 35
         */
        //% block="⬆"
        UP = 5,
        /**
         * Attention greater than 50
         */
        //% block="⬇"
        DOWN = 7,
        /**
         * Attention greater than 65
         */
        //% block="⬅"
        LEFT = 8,
         /**
         * Attention greater than 35
         */
        //% block="➡"
        RIGHT = 6,
        /**
         * Attention greater than 50
         */
        //% block="△"
        Tri = 13,
        /**
         * Attention greater than 65
         */
        //% block="▢"
        Squ = 16,
         /**
         * Attention greater than 35
         */
        //% block="◯"
        Cir = 14,
        /**
         * Attention greater than 50
         */
        //% block="✕"
        X = 15,
        /**
         * Attention greater than 65
         */
        //% block="L1"
        Left1 = 11,
         /**
         * Attention greater than 35
         */
        //% block="R1"
        Right1 = 12,
        /**
         * Attention greater than 50
         */
        //% block="L2"
        Left2 = 9,
        /**
         * Attention greater than 65
         */
        //% block="R2"
        Right2 = 10,
         /**
         * Attention greater than 35
         */
        //% block="SELECT"
        Sele = 1,
        /**
         * Attention greater than 50
         */
        //% block="START"
        Star = 4,
        /**
         * Attention greater than 50
         */
        //% block="L3"
        L3 = 2,
        /**
         * Attention greater than 50
         */
        //% block="R3"
        R3 = 3,
    }

    export enum ButtonEventSrouse {
        /**
         * Attention greater than 35
         */
        //% block="⬆"
        Button_UP = 5,
        /**
         * Attention greater than 50
         */
        //% block="⬇"
        Button_DOWN = 7,
        /**
         * Attention greater than 65
         */
        //% block="⬅"
        Button_LEFT = 8,
         /**
         * Attention greater than 35
         */
        //% block="➡"
        Button_RIGHT = 6,
        /**
         * Attention greater than 50
         */
        //% block="△"
        Button_Tri = 13,
        /**
         * Attention greater than 65
         */
        //% block="▢"
        Button_Squ = 16,
         /**
         * Attention greater than 35
         */
        //% block="◯"
        Button_Cir = 14,
        /**
         * Attention greater than 50
         */
        //% block="✕"
        Button_X = 15,
        /**
         * Attention greater than 65
         */
        //% block="L1"
        Button_Left1 = 11,
         /**
         * Attention greater than 35
         */
        //% block="R1"
        Button_Right1 = 12,
        /**
         * Attention greater than 50
         */
        //% block="L2"
        Button_Left2 = 9,
        /**
         * Attention greater than 65
         */
        //% block="R2"
        Button_Right2 = 10,
         /**
         * Attention greater than 35
         */
        //% block="SELECT"
        Button_Sele = 1,
        /**
         * Attention greater than 50
         */
        //% block="START"
        Button_Star = 4,
        /**
         * Attention greater than 50
         */
        //% block="L3"
        Button_L3 = 2,
        /**
         * Attention greater than 50
         */
        //% block="R3"
        Button_R3 = 3,
    }

    export enum ButtonEventState { 
        /**
         * Attention greater than 50
         */
        //% block="off"
        Button_off = 1,
        /**
         * Attention greater than 50
         */
        //% block="on"
        Button_on = 0,
    }


    export enum value_A {
        /**
         * Attention greater than 35
         */
        //% block="RX"
        RX = 25,
        /**
         * Attention greater than 50
         */
        //% block="RY"
        RY = 26,
        /**
         * Attention greater than 65
         */
        //% block="LX"
        LX = 27,
        /**
        * Attention greater than 35
        */
        //% block="LY"
        LY = 28,
    }
    
    /**
    * Low:Attention greater than 35,Middle:Attention greater than 50,High:Attention greater than 65.
    */
    //% block="oneButton %level" blockId="BUTTON"
    export function get_Attention_Value(level: value_level): boolean {
        let value = 0
        let digital = 0

        while ( pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
        
        switch (level) {
            case value_level.UP:
                digital = value_level.UP
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.DOWN:
                digital = value_level.DOWN
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.LEFT:
                digital = value_level.LEFT
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.RIGHT:
                digital = value_level.RIGHT
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.Tri:
                digital = value_level.Tri
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.Squ:
                digital = value_level.Squ
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.Cir:
                digital = value_level.Cir
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.X:
                digital = value_level.X
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.Left1:
                digital = value_level.Left1
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.Left2:
                digital = value_level.Left2
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.Right1:
                digital = value_level.Right1
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.Right2:
                digital = value_level.Right2
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.Sele:
                digital = value_level.Sele
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.Star:
                digital = value_level.Star
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.L3:
                digital = value_level.L3
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            case value_level.R3:
                digital = value_level.R3
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1)
                    return true
                else
                    return false
            default:
                return false
        }
    }

    /**
     * Gets the RGB value of a known color
    */
    
    //% blockId="Button_" block="EndButton_Analog %color"
    export function colors(color: value_A): number {
        let Analog = 0
        let re_value = 128
        let Speed = 0
        while ( pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);

        switch (color) {
            case value_A.RX:
                Analog = value_A.RX
                pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                break
            case value_A.RY:
                Analog = value_A.RY
                pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                break
            case value_A.LX:
                Analog = value_A.LX
                pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                break
            case value_A.LY:
                Analog = value_A.LY
                pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                break
            default:
                break
        }

        if (re_value == 128 || re_value == 127) {
            Speed = 0
        }    
        else if (re_value > 127) {
            Speed = -((re_value - 127) * 100 / 128)
        }
        else {
            Speed =  (128 - re_value) * 100 / 128 
        }
        if (Speed > 100)
            Speed = 100;
        return Speed
    }

    // //% block="Whenswitch %ButtonEventSrouse %ButtonEventState"
    // //% state.fieldEditor="gridpicker" state.fieldOptions.columns=2
    // export function iotSwitchEvent(srouse: ButtonEventSrouse, state: ButtonEventState, handler: () => void) {
    //     control.onEvent(ButtonEventSrouse.Button_UP, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_DOWN, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_LEFT, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_RIGHT, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_Tri, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_Cir, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_Squ, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_X, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_Left1, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_Left2, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_Right1, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_Right2, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_L3, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_R3, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_Sele, state, handler)
    //     control.onEvent(ButtonEventSrouse.Button_Star, state, handler)
    //     control.inBackground(() => {
    //         let value = 0
    //         let digital = 0

    //         while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
        
    //         switch (state) {
    //             case ButtonEventState.Button_UP:
    //                 digital = ButtonEventState.Button_UP
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_UP)
    //                 }
    //                 break
    //             case ButtonEventState.Button_DOWN:
    //                 digital = ButtonEventState.Button_DOWN
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_DOWN)
    //                 }
    //                 break
    //             case ButtonEventState.Button_LEFT:
    //                 digital = ButtonEventState.Button_LEFT
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_LEFT)
    //                 }
    //                 break
    //             case ButtonEventState.Button_RIGHT:
    //                 digital = ButtonEventState.Button_RIGHT
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_RIGHT)
    //                 }
    //                 break
    //             case ButtonEventState.Button_Tri:
    //                 digital = ButtonEventState.Button_Tri
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_Tri)
    //                 }
    //                 break
    //             case ButtonEventState.Button_Squ:
    //                 digital = ButtonEventState.Button_Squ
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_Squ)
    //                 }
    //                 break
    //             case ButtonEventState.Button_Cir:
    //                 digital = ButtonEventState.Button_Cir
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_Cir)
    //                 }
    //                 break
    //             case ButtonEventState.Button_X:
    //                 digital = ButtonEventState.Button_X
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_X)
    //                 }
    //                 break
    //             case ButtonEventState.Button_Left1:
    //                 digital = ButtonEventState.Button_Left1
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_Left1)
    //                 }
    //                 break
    //             case ButtonEventState.Button_Left2:
    //                 digital = ButtonEventState.Button_Left2
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_Left2)
    //                 }
    //                 break
    //             case ButtonEventState.Button_Right1:
    //                 digital = ButtonEventState.Button_Right1
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_Right1)
    //                 }
    //                 break
    //             case ButtonEventState.Button_Right2:
    //                 digital = ButtonEventState.Button_Right2
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_Right2)
    //                 }
    //                 break
    //             case ButtonEventState.Button_Sele:
    //                 digital = ButtonEventState.Button_Sele
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_Sele)
    //                 }
    //                 break
    //             case ButtonEventState.Button_Star:
    //                 digital = ButtonEventState.Button_Star
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_Star)
    //                 }
    //                 break
    //             case ButtonEventState.Button_L3:
    //                 digital = ButtonEventState.Button_L3
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_L3)
    //                 }
    //                 break
    //             case ButtonEventState.Button_R3:
    //                 digital = ButtonEventState.Button_R3
    //                 pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
    //                 value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
    //                 if (value == 1) {
    //                     control.raiseEvent(ButtonSource, ButtonEventState.Button_R3)
    //                 }
    //                 break
    //             default:
    //                 control.raiseEvent(ButtonSource, ButtonEventState.None)
    //                 break
    //         }
    //     })  
    // }

}