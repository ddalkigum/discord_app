import React from 'react';
import BaseSvg from './BaseSVG';

interface HashTagProps {
  width?: number;
  height?: number;
  color?: string;
}

const Discord: React.FC<HashTagProps> = ({ width = 30, height = 30, color = '#343434' }) => {
  return (
    <BaseSvg color={color} height={height} width={width} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/BaseSvg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 281.465 281.465" xmlSpace="preserve">
      <path d="M273.661,114.318V67.035h-45.558L236.886,0h-47.69l-8.783,67.035h-60.084L129.113,0H81.425L72.64,67.035H7.804v47.283
	    h58.649l-6.904,52.791H7.804v47.289h45.559l-8.784,67.066h47.687l8.787-67.066h60.083l-8.786,67.066h47.691l8.783-67.066h64.836
	    v-47.289h-58.647l6.901-52.791H273.661z M167.326,167.109h-60.084l6.9-52.791h60.082L167.326,167.109z"/>
    </BaseSvg>
  )
}

export default Discord;