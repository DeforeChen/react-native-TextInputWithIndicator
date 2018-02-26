# react-native-TextInputWithIndicator
A customized TextInput component with input length indicator.
**Work in both iOS and Android platform.**

## Description
This component aims at providing a way to show the limit text length and the text length that has already been inputted at the right corner of an TextInput area.

You can almost regard the component as a extension of `reac-native` TextInput component.

## Effects

![Img1](https://upload-images.jianshu.io/upload_images/1180547-cdce1216d2694d6f.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/316)

![Img](https://upload-images.jianshu.io/upload_images/1180547-8b0ec4de7a48d4a6.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/316)

## Props
| Props | Type | Description |
| --- | :-- | :-- |
| areaWidth | number | width of component |
| areaHeight | number | height of component |
| maxLength | number | tell component the limit length of your input |
| indicateMode | number |`indicateMode.leftMode`: indicator will display the left length to input.(see the effects image2) |
|||`indicateMode.alreadyInputMode`: example: indicator will display `1/60`  |

## Demo

``` js
// Omit part of the code
// ...
import {TextInputWithIndicator,indicateMode} from './TextInputWithIndicator';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    Welcome to use
                </Text>
                <View style={{width:width,height:1,backgroundColor:'black'}}/>
                    <TextInputWithIndicator areaHeight={100} maxLength={60} areaWidth={Dimensions.get('window').width}  placeholder={'please input'}
                                            indicateMode={indicateMode.alreadyInputMode} multiline={true}
                                            onChangeText={(t)=>{console.log(t)}} autoFocus={true}
                    />
                <View style={{width:width,height:1,backgroundColor:'black'}}/>
            </View>
        );
    }
}
```


