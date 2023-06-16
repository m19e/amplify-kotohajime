/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react"
import { getOverrideProps } from "@aws-amplify/ui-react/internal"
import { Icon, Image, Text, View } from "@aws-amplify/ui-react"
export default function BoardComponent(props) {
  const { board, overrides, ...rest } = props
  return (
    <View
      width="500px"
      height="150px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "BoardComponent")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="387px"
        height="20px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="114px"
        left="19px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.createdAt}
        {...getOverrideProps(overrides, "createdAt")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="387px"
        height="21px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="84px"
        left="19px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.name}
        {...getOverrideProps(overrides, "name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="459px"
        height="27px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="19px"
        left="19px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.message}
        {...getOverrideProps(overrides, "message")}
      ></Text>
      <Icon
        width="406px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 406, height: 1 }}
        paths={[
          {
            d: "M0 0L406 0L406 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="75px"
        left="0px"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <Image
        width="72px"
        height="72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="33px"
        left="406px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={board?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  )
}
