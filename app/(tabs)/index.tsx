import { StyleSheet, Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.outerMost}>
      <Text style={styles.descriptionText}>
        {`- It applies to <Text /> element\n`}
        {`- Unless position is explicitly set to be 'relative,' top, bottomm, left, right style props are not working\n`}
        {`\t- This is because the position is set to be 'static' by default, in RN-web\n`}
        {`\t- But 'static' is NOT allowed in React Native Specification.\n`}
        {`- You can open this page on aos/ios and web to compare.\n`}
      </Text>
      <View style={styles.innerContainer}>
        <View style={styles.main1}>
          <Text style={styles.text1}>{`left:20, top:20, (no position)`}</Text>
        </View>
        <View style={styles.main1}>
          <Text style={styles.text2}>{`position:relative, left:20, top:20`}</Text>
        </View>
      </View>
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
