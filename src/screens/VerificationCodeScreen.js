import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    Alert,
    Platform
} from 'react-native';

import { Container, Content, Item, Input, Icon, Button } from 'native-base';


export default class VerificationCodeScreen extends Component {
    static navigatorStyle = {
        drawUnderNavBar: true,
        drawUnderTabBar: true,
        navBarTranslucent: true
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.header} >
                    <Item rounded style={{margin:5}}>
                        <Input placeholder='Verification Code'/>
                    </Item>



                  </View>

                </Content>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    header: {
      marginTop:400,
      marginRight:20,
      marginLeft:20

    }

});
