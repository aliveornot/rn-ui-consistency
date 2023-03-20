import { StyleSheet, Text, View } from 'react-native';

export default function TextInherit() {
  return (
    <View style={styles.outerMost}>
      <Text style={styles.descriptionText}>
        {`- Text style props should not be inherited outside the outermost<Text/> Element\n`}
        {`- In aos/ios, this text is not centered.\n`}
        {`- In web, however, this text is centered.\n`}
        {`- This is because textAlign:center is inhereted from the outer <View /> component.\n`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  outerMost: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
    width: 320,
    textAlign: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  descriptionText: { color: 'white' },
  innerContainer: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'gray',
    flexDirection: 'row',
    width: 320,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  main1: {
    borderWidth: 1,
    width: 160,
    height: 200,
    backgroundColor: 'transparent',
    border: '3px solid green',
  },
  text1: {
    borderWidth: 2,
    left: 20,
    top: 20,
  },
  text2: {
    position: 'relative',
    borderWidth: 2,
    left: 20,
    top: 20,
  },
});
