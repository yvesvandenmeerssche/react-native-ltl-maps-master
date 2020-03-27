import {
  StyleSheet
} from 'react-native'
import {
  totalSize,
  height,
  width
} from 'react-native-dimension'
import {
  Colors,
  Family,
  FontSize
} from '.'

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
    height: null,
    width: null
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.appBgColor1
  },
  h1: {
    fontSize: totalSize(5),
    color: Colors.appTextColor1,
    fontFamily: Family.appTextBold
  },
  h2: {
    fontSize: totalSize(4),
    color: Colors.appTextColor1,
    fontFamily: Family.appTextMedium
  },
  h3: {
    fontSize: totalSize(3),
    color: Colors.appTextColor1,
    fontFamily: Family.appTextMedium
  },
  h4: {
    fontSize: totalSize(2),
    color: Colors.appTextColor1,
    fontFamily: Family.appTextMedium
  },
  h5: {
    fontSize: totalSize(1.5),
    color: Colors.appTextColor1,
    fontFamily: Family.appTextRegular
  },
  h6: {
    fontSize: totalSize(1.25),
    color: Colors.appTextColor1,
    fontFamily: Family.appTextRegular
  },
  HeadingLarge: {
    fontSize: FontSize.h1,
    color: Colors.appTextColor1,
    fontFamily: Family.appTextBold
  },
  HeadingMedium: {
    fontSize: FontSize.h2,
    color: Colors.appTextColor1,
    fontFamily: Family.appTextBold
  },
  HeadingSmall: {
    fontSize: FontSize.h3,
    color: Colors.appTextColor1,
    fontFamily: Family.appTextBold
  },
  HeadingTiny: {
    fontSize: FontSize.h4,
    color: Colors.appTextColor1,
    fontFamily: Family.appTextBold
  },
  bodyLargeText: {
    fontSize: FontSize.large,
    color: Colors.appTextColor1,
    fontFamily: Family.appTextRegular
  },
  bodyMediumText: {
    fontSize: FontSize.medium,
    color: Colors.appTextColor1,
    fontFamily: Family.appTextRegular
  },
  bodySmallText: {
    fontSize: FontSize.small,
    color: Colors.appTextColor1,
    fontFamily: Family.appTextRegular
  },
  inputContainerUnderLined: {
    marginHorizontal: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFFF'
  },
  inputContainerBorderd: {
    marginHorizontal: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 0.5,
    borderColor: Colors.appColor1
  },
  inputContainerColored: {
    marginHorizontal: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFF',
    borderRadius: 2.5
  },
  inputField: {
    height: height(7),
    width: width(80),
    color: Colors.appTextColor1,
    fontFamily: Family.appTextLight,
    fontSize: totalSize(1.75)
  },
  inputFieldBorderd: {
    marginHorizontal: width(5),
    height: height(7),
    borderWidth: 0.5,
    borderColor: Colors.appColor1,
    fontSize: totalSize(1.75),
    fontFamily: Family.appTextRegular,
    borderRadius: 2.5
  },
  inputFieldUnderlined: {
    marginHorizontal: width(5),
    height: height(7),
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.appColor1,
    fontSize: totalSize(1.75),
    fontFamily: Family.appTextRegular,
    borderRadius: 0
  },
  inputFieldColored: {
    marginHorizontal: width(5),
    height: height(7),
    fontSize: totalSize(1.75),
    elevation: 5,
    backgroundColor: '#FFFF',
    borderRadius: 2.5
  },

  buttonBorderd: {
    marginHorizontal: width(5),
    height: height(8),
    borderRadius: 2.5,
    borderWidth: 1,
    borderColor: Colors.appColor1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonColord: {
    marginHorizontal: width(5),
    height: height(8),
    borderRadius: 2.5,
    backgroundColor: Colors.appColor1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  SocialButtonColord: {
    height: height(8),
    marginHorizontal: width(5),
    borderRadius: 2.5,
    backgroundColor: Colors.facebook,
    //  alignItems: 'center',
    //  justifyContent: 'center'
  },
  buttonText: {
    fontSize: totalSize(1.75),
    color: '#000000',
    fontFamily: Family.appTextMedium
  },
  compContainer: {
    marginHorizontal: width(5),
    marginVertical: height(2.5)
  },
  rowCompContainer: {
    marginHorizontal: width(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height(2.5)
  },
  headerStyle: {
    backgroundColor: Colors.headerBgColor1,
    elevation: 0,
  },
  headerTitleStyle: {
    fontSize: totalSize(2.25),
    color: Colors.appTextColor1,
    fontFamily: Family.appTextMedium,
  },
  cardView: {
    marginHorizontal: width(5),
    borderRadius: 5,
    backgroundColor: '#FFFF',
    elevation: 5,
  },
  bottomCardView: {
    marginHorizontal: 0,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#FFFF',
    // elevation: 5
  }
})