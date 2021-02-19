import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {flex: 1, backgroundColor: '#FFF'},
  container: {height: 300, width: '100%'},
  email: {
    fontFamily: 'RobotoCondensed-Regular',
    color: '#FFF',
    fontSize: 24,
    margin: '5%',
    marginBottom: 0,
    marginTop: 0,
  },
  phone: {
    fontFamily: 'RobotoCondensed-Regular',
    color: '#FFF',
    fontSize: 24,
    marginLeft: '5%',
  },
  visitedPlaces: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 24,
  },
  rowContainer: {flexDirection: 'row', margin: '2%', marginBottom: '20%'},
  card: {
    width: '25%',
    height: 80,
    backgroundColor: 'gray',
    margin: '2%',
  },
  button: {
    left: '10%',
    width: '80%',
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    marginBottom: '5%',
  },
  continue: {marginLeft: 0, textAlign: 'center', fontSize: 28},
});
