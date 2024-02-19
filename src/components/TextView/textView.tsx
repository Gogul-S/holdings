import React from 'react';
import {Text, TextProps} from 'react-native';
import {COLOR_PALLETE, Colors} from '../../theme/colorPallete';
import {TYPOGRAPHY, TextType} from '../../theme/typography';

interface Props extends TextProps {
  textType: TextType;
  color?: Colors;
}

const TextView: React.FC<Props> = props => {
  const {color = Colors.PrimaryText, textType = TextType.Subtitle} = props;
  return (
    <Text
      {...props}
      style={[
        TYPOGRAPHY[textType.valueOf()],
        {color: COLOR_PALLETE[color.valueOf()]},
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

export default TextView;
