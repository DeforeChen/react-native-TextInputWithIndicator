/**
 * created by defore on 2018/2/24.
 */

import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Platform,
} from 'react-native';

import PropTypes from 'prop-types';

const indicatorHeight = 30;
export default class TextInputWithIndicator extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {inputTxtLen: 0,};
    }

    static propTypes = {
        areaWidth: PropTypes.number.isRequired,
        areaHeight: PropTypes.number.isRequired,
        placeholder: PropTypes.string,
        maxLength: PropTypes.number.isRequired,
        onChangeText: PropTypes.func,
    };

    render() {
        let maxLen = this.props.maxLength;
        let txtLen = this.state.inputTxtLen;

        return (
            <View style={[styles.container, {width: this.props.areaWidth, height: this.props.areaHeight}]}>
                <TextInput style={[styles.inputArea, {height: this.props.areaHeight}]}
                           autoFocus={true} multiline={true}
                           placeholder={this.props.placeholder} maxLength={maxLen}
                           onChangeText={(text) => {
                               this.props.onEditText(text);
                               // 针对ios 原生的中文九宫格输入作的长度边界处理
                               if (text.length < maxLen) {
                                   this.setState({inputTxtLen: text.length});
                               } else {
                                   if (this.state.inputTxtLen !== maxLen) {
                                       this.setState({inputTxtLen: maxLen});
                                   }
                               }
                           }}
                />
                <View style={[styles.indicatorArea, {width: this.props.areaWidth}]}>
                    <Text style={styles.indicatorText}>
                        {`${txtLen}/${maxLen}`}
                    </Text>
                </View>
            </View>
        );
    }
}

// -------------------- styles -----------------------------
const inputAreaBottomHeight = Platform.select({ios: indicatorHeight, android: 0});
const inputAreaPaddingHeight = Platform.select({ios: 0, android: indicatorHeight});
const LRMargin = 5;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0)',
    },
    inputArea: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginRight: LRMargin, marginLeft: LRMargin,
        borderBottomWidth: inputAreaBottomHeight, borderBottomColor: 'rgba(0,0,0,0)',
        paddingBottom: inputAreaPaddingHeight,
    },
    indicatorArea: {
        position: 'absolute', height: indicatorHeight, right: 0, bottom: 0,
        flexDirection: 'row-reverse', alignItems: 'center',
    },
    indicatorText: {
        fontSize: 16, color: 'black', marginRight: LRMargin,
    }
});