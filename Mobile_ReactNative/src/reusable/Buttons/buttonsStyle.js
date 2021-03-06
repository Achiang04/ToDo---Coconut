import {StyleSheet} from 'react-native';
import {wp, hp} from '../responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#6D26FB',
    borderColor: '#6D26FB',
    height: hp(50),
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
  },
});

export default styles;
