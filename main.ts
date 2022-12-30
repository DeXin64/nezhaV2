//%color=#00B1ED icon="\uf118" block="PS2" blockId="PS2"
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

    export enum LR_value{

        /**
         * Attention greater than L
         */
        //% block="L"
        LEFT = 0,
        /**
         * Attention greater than R
         */
        //% block="R"
        RIGHT = 2,


    }

    export enum value_Analog {
        /**
         * Attention greater than 35
         */
        //% block="⬆"
        UP = 5,
        /**
         * Attention greater than 50
         */
        //% block="⬇"
        DOWN = 6,
        /**
         * Attention greater than 65
         */
        //% block="⬅"
        LEFT = 7,
        /**
        * Attention greater than 35
        */
        //% block="➡"
        RIGHT = 8,
        /**
        * Attention greater than 35
        */
        //% block="↖"
        LUP = 9,
        /**
        * Attention greater than 35
        */
        //% block="↗"
        RUP = 10,/**
        * Attention greater than 35
        */
        //% block="↙"
        LDOWN = 11,
        /**
        * Attention greater than 50
        */
        //% block="↘"
        RDOWN = 12,
        // /**
        //  * Attention greater than 35
        //  */
        // //% block="R⬆"
        // R_UP = 7,
        // /**
        //  * Attention greater than 50
        //  */
        // //% block="R⬇"
        // R_DOWN = 7,
        // /**
        //  * Attention greater than 65
        //  */
        // //% block="R⬅"
        // R_LEFT = 7,
        // /**
        // * Attention greater than 35
        // */
        // //% block="R➡"
        // R_RIGHT = 7,
        // /**
        // * Attention greater than 35
        // */
        // //% block="R↖"
        // R_LUP = 8,
        // /**
        // * Attention greater than 35
        // */
        // //% block="R↗"
        // R_RUP = 8,/**
        // * Attention greater than 35
        // */
        // //% block="R↙"
        // R_LDOWN = 8,
        // /**
        // * Attention greater than 50
        // */
        // //% block="R↘"
        // R_RDOWN = 8,
    }

   

    export enum ButtonEventSrouse {
        /**
         * 35
         */
        //% block="⬆"
        Button_UP = 35,
        /**
         * 37
         */
        //% block="⬇"
        Button_DOWN = 37,
        /**
         * 38
         */
        //% block="⬅"
        Button_LEFT = 38,
        /**
        * 36
        */
        //% block="➡"
        Button_RIGHT = 36,
        /**
         * 43
         */
        //% block="△"
        Button_Tri = 43,
        /**
         * 46
         */
        //% block="□"
        Button_Squ = 46,
        /**
        * 44
        */
        //% block="O"
        Button_Cir = 44,
        /**
         * 45
         */
        //% block="✕"
        Button_X = 45,
        /**
         * 41
         */
        //% block=" left1"
        Button_Left1 = 41,
        /**
        * 42
        */
        //% block="right1"
        Button_Right1 = 42,
        /**
         * 39
         */
        //% block="left2"
        Button_Left2 = 39,
        /**
         * 40
         */
        //% block="right2"
        Button_Right2 = 40,
        /**
        * 31
        */
        //% block="sel▭"
        Button_Sele = 31,
        /**
         * 34
         */
        //% block="star▻"
        Button_Star = 34,
        /**
         * 32
         */
        //% block="L3"
        Button_L3 = 32,
        /**
         * 33
         */
        //% block="R3"
        Button_R3 = 33,
    }

    export enum ButtonEventState {
        /**
         * Attention greater than 50
         */
        //% block="off"
        Button_off = 0,
        /**
         * Attention greater than 50
         */
        //% block="on"
        Button_on = 1,
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

    export enum Vibration {
        /**
         * Attention greater than 50
         */
        //% block="off"
        Vibration_off = 30,
        /**
         * Attention greater than 50
         */
        //% block="on"
        Vibration_on = 29,
    }
    
    /**
    * Whether a Button is pressed
    */
    //% block="Button %level is pressed" blockId="DigitalButton"
    export function get_Attention_Value(level: value_level): boolean {
        let value = 0
        let digital = 0
        
        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
        
        switch (level) {
            case value_level.UP:
                digital = value_level.UP
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.DOWN:
                digital = value_level.DOWN
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.LEFT:
                digital = value_level.LEFT
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.RIGHT:
                digital = value_level.RIGHT
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Tri:
                digital = value_level.Tri
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Squ:
                digital = value_level.Squ
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Cir:
                digital = value_level.Cir
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.X:
                digital = value_level.X
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Left1:
                digital = value_level.Left1
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Left2:
                digital = value_level.Left2
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Right1:
                digital = value_level.Right1
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Right2:
                digital = value_level.Right2
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Sele:
                digital = value_level.Sele
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Star:
                digital = value_level.Star
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.L3:
                digital = value_level.L3
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.R3:
                digital = value_level.R3
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            default:
                return false
        }
        
    }

    /**
     * Get Analog value
    */
    
    //% blockId="AnlogValue" block="Rocker value of %Button"
    export function GetAnalogValue(Button: value_A): number {
        let Analog = 0
        let re_value = 128
//        let Speed = 0
        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);

        switch (Button) {
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
                re_value = 66
                break
        }

        // if (re_value == 128 || re_value == 127) {
        //     Speed = 0
        // }
        // else if (re_value > 127) {
        //     Speed = -((re_value - 127) * 100 / 128)
        // }
        // else {
        //     Speed = (128 - re_value) * 100 / 128
        // }
        // if (Speed > 100)
        //     Speed = 100;
        return re_value
    }

    /*
     *    5->左 上下左右
     *    6->左 左上、左下、、右上、右下
     *    7->右 上下左右
     *    8->右 左上、左下、、右上、右下、
     */
    //% block="Rocker %LR_value is pushed %level" blockId="ButtonAnalog"
    export function get_Attention_Anaolog(LR: LR_value, level: value_Analog): boolean {
        let Analog = 0
        let re_value = 0
        let Double_Revalue = 0

        switch (LR) {
            case LR_value.LEFT:
                while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
                switch (level) {
                    case value_Analog.UP:
                        Analog = value_A.LY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value < 127)
                            return true
                        else
                            return false
                    case value_Analog.DOWN:
                        Analog = value_A.LY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value > 128)
                            return true
                        else
                            return false
                    case value_Analog.LEFT:
                        Analog = value_A.LX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value < 127)
                            return true
                        else
                            return false
                    case value_Analog.RIGHT:
                        Analog = value_A.LX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value > 128)
                            return true
                        else
                            return false
                    case value_Analog.LUP:
                        Analog = value_A.LX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                            
                        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
                        Analog = value_A.LY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        Double_Revalue = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value < 127 && Double_Revalue < 127)
                            return true
                        else
                            return false
                    case value_Analog.RUP:
                        Analog = value_A.LX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                            
                        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
                        Analog = value_A.LY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        Double_Revalue = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value > 128 && Double_Revalue < 127)
                            return true
                        else
                            return false
                    case value_Analog.LDOWN:
                        Analog = value_A.LX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                            
                        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
                        Analog = value_A.LY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        Double_Revalue = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value < 127 && Double_Revalue > 128)
                            return true
                        else
                            return false
                    case value_Analog.RDOWN:
                        Analog = value_A.LX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                            
                        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
                        Analog = value_A.LY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        Double_Revalue = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value > 128 && Double_Revalue > 128)
                            return true
                        else
                            return false
                    default:
                        return false
                }
            case LR_value.RIGHT:
                while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10); 
                switch (level) {
                    case value_Analog.UP:
                        Analog = value_A.RY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value < 127)
                            return true
                        else
                            return false
                    case value_Analog.DOWN:
                        Analog = value_A.RY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value > 128)
                            return true
                        else
                            return false
                    case value_Analog.LEFT:
                        Analog = value_A.RX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value < 127)
                            return true
                        else
                            return false
                    case value_Analog.RIGHT:
                        Analog = value_A.RX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value > 128)
                            return true
                        else
                            return false
                    case value_Analog.LUP:
                        Analog = value_A.RX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                            
                        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
                        Analog = value_A.RY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        Double_Revalue = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value < 127 && Double_Revalue < 127)
                            return true
                        else
                            return false
                    case value_Analog.RUP:
                        Analog = value_A.RX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                            
                        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
                        Analog = value_A.RY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        Double_Revalue = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value > 128 && Double_Revalue < 127)
                            return true
                        else
                            return false
                    case value_Analog.LDOWN:
                        Analog = value_A.RX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                            
                        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
                        Analog = value_A.RY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        Double_Revalue = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value < 127 && Double_Revalue > 128)
                            return true
                        else
                            return false
                    case value_Analog.RDOWN:
                        Analog = value_A.RX
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                            
                        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
                        Analog = value_A.RY
                        pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                        Double_Revalue = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                        if (re_value > 128 && Double_Revalue > 128)
                            return true
                        else
                            return false
                    default:
                        return false
                }
        }
        
    }

    //% blockId=ChooseVibration block="ChooseVibration %Choose"
    export function Choose_Vibration(Choose: Vibration): void {
        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);

        switch (Choose) {
            case Vibration.Vibration_on:
                pins.i2cWriteNumber(0x08, 29, NumberFormat.UInt8LE, false);
                pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                break
            case Vibration.Vibration_off:
                pins.i2cWriteNumber(0x08, 30, NumberFormat.UInt8LE, false);
                pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                break
            default:
                break
        }
    }


    /*
     * Do something w
     * 
     * hen one of the MicroGamer Buttons is pressed
     * @param button press to be checked
     * @param event happening on the button, eg: click
     */
    //% blockId="mg_button_press_on_event" block="The Button %button is press %event"
    export function onButtonPress(button: ButtonEventSrouse, event: ButtonEventState, handler: () => void) {
        //init();
        
        forever(function () {
            basic.pause(50)
            let value = 0
            let digital = 0
            while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);
            
            switch (button) {
                case ButtonEventSrouse.Button_DOWN:
                    digital = ButtonEventSrouse.Button_DOWN - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_DOWN, ButtonEventState.Button_on)
                    } else {
                        control.raiseEvent(ButtonEventSrouse.Button_DOWN, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_LEFT:
                    digital = ButtonEventSrouse.Button_LEFT - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_LEFT, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_LEFT, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_RIGHT:
                    digital = ButtonEventSrouse.Button_RIGHT - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_RIGHT, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_RIGHT, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_Tri:
                    digital = ButtonEventSrouse.Button_Tri - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_Tri, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_Tri, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_Squ:
                    digital = 16;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_Squ, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_Squ, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_Cir:
                    digital = ButtonEventSrouse.Button_Cir - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_Cir, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_Cir, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_X:
                    digital = ButtonEventSrouse.Button_X - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_X, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_X, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_Left1:
                    digital = ButtonEventSrouse.Button_Left1 - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_Left1, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_Left1, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_Left2:
                    digital = ButtonEventSrouse.Button_Left2 - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_Left2, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_Left2, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_Right1:
                    digital = ButtonEventSrouse.Button_Right1 - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_Right1, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_Right1, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_Right2:
                    digital = ButtonEventSrouse.Button_Right2 - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_Right2, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_Right2, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_Sele:
                    digital = ButtonEventSrouse.Button_Sele - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_Sele, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_Sele, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_Star:
                    digital = ButtonEventSrouse.Button_Star - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_Star, ButtonEventState.Button_on)
                    } else {
                        control.raiseEvent(ButtonEventSrouse.Button_Star, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_L3:
                    digital = ButtonEventSrouse.Button_L3 - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_L3, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_L3, ButtonEventState.Button_off)
                    }
                    break
                case ButtonEventSrouse.Button_R3:
                    digital = ButtonEventSrouse.Button_R3 - 30;
                    pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                    value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                    if (value == 1) {
                        control.raiseEvent(ButtonEventSrouse.Button_R3, ButtonEventState.Button_on)
                    }
                    else {
                        control.raiseEvent(ButtonEventSrouse.Button_R3, ButtonEventState.Button_off)
                    }
                    break
                default:
                    break
            }
        })
        control.onEvent(<number>button, <number>event, handler)
        control.waitForEvent(<number>button, <number>event)
        // control.onEvent( button, <number>event, handler)
        // control.onEvent( button, <number>event, handler)
        //handler()
    }

}
