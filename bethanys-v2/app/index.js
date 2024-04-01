import { View, Text, Image, StyleSheet, Platform } from "react-native";
import PieDisplay from "../components/PieDisplay";

const Home = () => {

    const hero = require('../assets/shutterstock_682604449.jpg');
    const logoMark = require('../assets/bethanys-pie-shop-logo_logomark.png');

    const pieA = require('../assets/shutterstock_583548499.jpg');
    const pieB = require('../assets/shutterstock_710266606.jpg');

    return (
      <View style={styles.container}>
        <Image source={hero} style={styles.heroStyle} />
        <Image source={logoMark} style={styles.logoMarkStyle} />
        <Text style={styles.pageTitle}>Pies of the Week</Text>
        <Text style={styles.pageText}>
          Enjoy a weekly selection of our favorite pies!
        </Text>
        <View style={styles.pieRow}>
          <PieDisplay pieImage={pieA} product="classic apple pie" />
          <PieDisplay pieImage={pieB} product="pumpkin pie" />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 200,
  },
  heroStyle: {
    width: '100%',
    ...Platform.select({
      android: {
        height: 200,
      },
      ios: {
        height: 200,
      },
      default: {
        height: 400,
      },
    }),
  },
  logoMarkStyle: {
    height: 120,
    width: 100,
    alignSelf: 'center',
    ...Platform.select({
      android: {
        top: '-10%',
      },
      ios: {
        top: '-10%',
      },
      default: {
        top: '-3%',
      },
    }),
  },
  pageTitle: {
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '900',
    fontSize: 20,
    ...Platform.select({
      android: {
        top: '-8%',
      },
      ios: {
        top: '-8%',
      },
      default: {
        top: '-1%',
      },
    }),
  },
  pageText: {
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '600',
    fontSize: 16,
    ...Platform.select({
      android: {
        top: '-8%',
      },
      ios: {
        top: '-8%',
      },
      default: {
        top: '-1%',
      },
    }),
  },
  pieRow: {
    flexDirection: 'row',
    ...Platform.select({
      android: {
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
        top: "-15%",
      },
      ios: {
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
        top: '-10%',
      },
      default: {
        justifyContent: 'space-evenly',
      }
    })
  }
});


export default Home;