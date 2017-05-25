import React from 'react';
import { TextInput, View, Text } from 'react-native';

const InputField = ({ label, value, placeholder, onChangeText, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                value={value}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>

    );
};


/*lineHeight - how much space is between
 * each line of text. for this case its just to
 * make the input text stand out more*/
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2

    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }

};


export { InputField };
