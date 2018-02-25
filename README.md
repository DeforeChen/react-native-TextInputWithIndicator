# react-native-TextInputWithIndicator
A customized TextInput component with input length indicator.

## Description
This component aims at providing a way to show the limit text length and the text length that has already been inputted at the right corner of an TextInput area.

You can almost regard the component as a extension of reac-native TextInput component.

## Usage
| Props | Type | Description |
| --- | :-: | :-: |
| areaWidth | number | width of component |
| areaHeight | number | height of component |
| placeholder | string | placeholder text |
| maxLength | number | tell component the limit length of your input |
| onChangeText | func | received the text change event |

## Demo

``` js
// Omit part of the code
// ...

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    Welcome to use
                </Text>
                <TextInputWithIndicator areaHeight={100} maxLength={90} areaWidth={width} placeholder={'please input'}
                                        onChangeText={(t)=>{console.log(t)}}

                />
            </View>
        );
    }
}
```


