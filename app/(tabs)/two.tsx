import { StyleSheet, Text, View } from 'react-native';

export default function ReversedFlexDirection() {
  return (
    <View style={styles.outerMost}>
      <Text style={styles.descriptionText}>
        {`- parent have flexDirection='row-reverse' (or 'column-reverse')\n`}
        {`- children's 'left'( or 'top') style prop is given a certain value, say 10.\n`}
        {`- Here is the propblem:\n`}
        {`\t- in native (ios and aos), the children move to left (or up)\n`}
        {`\t- in web, the children move to right (or down)\n`}
        {`\t- same thing applies to 'right', 'bottom', 'start', 'end' properties.\n`}
        {`\t- this holds true for children's position 'absolute' and 'relative'`}
        {`- You can open this page on aos/ios and web to compare.\n`}
        {`- It kinda seems like on aos/ios, they just swap left<->right, top<->bottom, start<->end for children of 'something-reverse'\n`}
      </Text>
      <View style={styles.middleContainer}>
        <View style={styles.innerContainer}>
          <View style={[styles.main, { flexDirection: 'row-reverse' }]}>
            <Text style={{ position: 'absolute', right: 0 }}>{`'row-reverse'`}</Text>
            <View style={{ left: 10, backgroundColor: 'transparent', borderColor: 'blue', borderWidth: 2 }}>
              <Text>{`left:10`}</Text>
            </View>
          </View>
          <View style={[styles.main, { flexDirection: 'row-reverse' }]}>
            <Text style={{ position: 'absolute', left: 0 }}>{`'row-reverse'`}</Text>
            <View style={{ right: 10, backgroundColor: 'transparent', borderColor: 'orange', borderWidth: 2, start: 10 }}>
              <Text>{`right:10`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.innerContainer}>
            <View style={[styles.main, { flexDirection: 'column-reverse' }]}>
              <Text style={{ position: 'absolute', top: 0 }}>{`flexDirection='column-reverse'`}</Text>
              <View style={{ top: 10, backgroundColor: 'transparent', borderColor: 'violet', borderWidth: 2 }}>
                <Text>{`top:10`}</Text>
              </View>
            </View>
            <View style={[styles.main, { flexDirection: 'column-reverse' }]}>
              <Text style={{ position: 'absolute', top: 0 }}>{`flexDirection='column-reverse'`}</Text>
              <View style={{ bottom: 10, backgroundColor: 'transparent', borderColor: 'pink', borderWidth: 2 }}>
                <Text>{`bottom:10`}</Text>
              </View>
            </View>
          </View>
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
  middleContainer: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    width: 320,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
    width: 320,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  main: {
    borderWidth: 1,
    width: 160,
    height: 120,
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
