import React from 'react';
import cs from 'classnames';
import styled from 'styled-components';

// SVG 引入
// require 一个目录
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


const SvgColor = styled.svg`
  fill: #999;
`;
// 声明类型 类型大写
type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {

  const {name, children, className, ...rest} = props;
  return (
    <SvgColor className={cs('icon', className)} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </SvgColor>
  );
};
export default Icon;