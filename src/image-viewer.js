import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image-viewer.less';

//const img = document.createElement('img');
//img.src = 'http://lorempixel.com/400/400';
//document.body.appendChild(img);

const imgBig = document.createElement('img');
imgBig.src = big;
document.body.appendChild(imgBig);

const imgSmall = document.createElement('img');
imgSmall.src = small;
document.body.appendChild(imgSmall);
