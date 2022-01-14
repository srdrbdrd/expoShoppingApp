import { Dimensions, PixelRatio } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

//Window size values of Pixel 2 emulator which is the emulator that I'm working on
const baseWidth = 412;
const baseHeight = 684;


const convertWidth = (value) => {
    return PixelRatio.roundToNearestPixel(value * (screenWidth / baseWidth));
}

const convertHeight = (value) => {
    return PixelRatio.roundToNearestPixel(value * (screenHeight / baseHeight));
}

export {
    convertHeight,
    convertWidth
}