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

export const indicateMode = {
    leftMode: 0, // 剩余多少输入
    alreadyInputMode: 1, //已经输入多少了
};

export class TextInputWithIndicator extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {textLength: this.props.indicateMode === indicateMode.alreadyInputMode ? 0 : this.props.maxLength};
        this._onInput = this._onInput.bind(this);
    }

    static propTypes = {
        areaWidth: PropTypes.number.isRequired,
        areaHeight: PropTypes.number.isRequired,
        placeholder: PropTypes.string,
        maxLength: PropTypes.number.isRequired,
        onChangeText: PropTypes.func,
        indicateMode: PropTypes.number.isRequired,
        autoFocus: PropTypes.bool,
    };

    _onInput = (text) => {
        let maxLen = this.props.maxLength;

        this.props.onChangeText(text);
        if (this.props.indicateMode === indicateMode.alreadyInputMode) {
            // 针对ios 原生的中文九宫格输入作的长度边界处理
            if (text.length < maxLen) {
                this.setState({textLength: text.length});
            } else {
                if (this.state.textLength !== maxLen) {
                    this.setState({textLength: maxLen});
                }
            }
        } else {
            if (maxLen - text.length <= 0) {
                if (this.state.textLength !== 0) {
                    this.setState({textLength: 0});
                }
            } else {
                this.setState({textLength: maxLen - text.length});
            }
        }
    };

    render() {
        let maxLen = this.props.maxLength;
        let txtLen = this.state.textLength;
        let templateText = this.props.indicateMode === indicateMode.alreadyInputMode ? `${txtLen}/${maxLen}` : `${txtLen}`;

        return (
            <View style={[styles.container, {width: this.props.areaWidth, height: this.props.areaHeight}]}>
                <TextInput style={[styles.inputArea, {height: this.props.areaHeight}]}
                           multiline={true} autoFocus={this.props.autoFocus}
                           placeholder={this.props.placeholder} maxLength={maxLen}
                           onChangeText={this._onInput}
                />
                <View style={[styles.indicatorArea, {width: this.props.areaWidth}]}>
                    <Text style={styles.indicatorText}>
                        {templateText}
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