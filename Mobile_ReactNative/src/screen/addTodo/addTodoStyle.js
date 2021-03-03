import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#160E24',
  },
  back: {
    marginLeft: wp(20),
    marginTop: hp(20),
    flexDirection: 'row',
  },
  icon: {
    marginTop: hp(5),
  },
  title: {
    marginLeft: wp(20),
    fontSize: RFPercentage(5),
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: hp(20),
  },
  button: {
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#6D26FB',
    borderColor: '#6D26FB',
    height: 50,
    borderRadius: 8,
  },
  textButton: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
  },
  kolomRespon1: {
    borderWidth: 1,
    marginTop: hp(20),
    width: '90%',
    borderRadius: 10,
    height: hp(50),
    borderColor: '#fff',
    padding: wp(10),
    color: '#fff',
    marginLeft: wp(20),
  },
  kolomRespon2: {
    borderWidth: 1,
    marginTop: hp(20),
    width: '90%',
    borderRadius: 10,
    height: hp(100),
    borderColor: '#fff',
    padding: wp(10),
    color: '#fff',
    marginLeft: wp(20),
  },
  kolomRespon3: {
    borderWidth: 1,
    marginTop: hp(15),
    width: '90%',
    borderRadius: 10,
    height: hp(50),
    borderColor: '#fff',
    padding: wp(10),
    color: '#fff',
    marginLeft: wp(20),
  },
  pilihJenjang: {
    width: wp(130),
    marginLeft: wp(20),
    marginTop: hp(30),
  },
  dropStyle: {
    backgroundColor: '#6D26FB',
    borderColor: '#6D26FB',
  },
  labelStyle: {
    fontSize: RFPercentage(2.2),
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginLeft: wp(20),
  },
  useDate: {
    marginTop: hp(4),
    color: '#fff',
    fontSize: RFPercentage(2.2),
  },
  button: {
    position: 'absolute',
    width: '100%',
    bottom: hp(0),
    height: hp(70),
    backgroundColor: '#160E24',
    justifyContent: 'center',
  },
  tanggalContainer: {
    marginLeft: wp(50),
    marginTop: hp(10),
  },
  datePickerStyle: {
    color: '#fff',
  },
  validText: {
    color: 'red',
    marginLeft: wp(20),
    marginTop: hp(5),
    fontSize: RFPercentage(2.1),
  },
});

export default styles;
