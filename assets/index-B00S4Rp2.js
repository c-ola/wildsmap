(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ua="173",Di={ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Au=0,Ba=1,vu=2,Ic=1,Tu=2,xn=3,Tn=0,wt=1,nn=2,kn=0,Pi=1,ka=2,Ha=3,za=4,Su=5,ni=100,bu=101,Nu=102,Lu=103,Ru=104,wu=200,Cu=201,Du=202,Pu=203,xr=204,yr=205,Uu=206,Ou=207,Vu=208,Fu=209,Gu=210,Bu=211,ku=212,Hu=213,zu=214,Er=0,Ir=1,Ar=2,Gi=3,vr=4,Tr=5,Sr=6,br=7,Ac=0,Wu=1,Xu=2,Hn=0,Yu=1,qu=2,ju=3,Ku=4,Qu=5,Zu=6,$u=7,Wa="attached",Ju="detached",vc=300,Bi=301,ki=302,Nr=303,Lr=304,Ao=306,Hi=1e3,Fn=1001,go=1002,St=1003,Tc=1004,ms=1005,Ut=1006,co=1007,En=1008,Sn=1009,Sc=1010,bc=1011,ys=1012,ha=1013,oi=1014,Zt=1015,Ss=1016,pa=1017,da=1018,zi=1020,Nc=35902,Lc=1021,Rc=1022,zt=1023,wc=1024,Cc=1025,Ui=1026,Wi=1027,fa=1028,ma=1029,Dc=1030,_a=1031,ga=1033,uo=33776,ho=33777,po=33778,fo=33779,Rr=35840,wr=35841,Cr=35842,Dr=35843,Pr=36196,Ur=37492,Or=37496,Vr=37808,Fr=37809,Gr=37810,Br=37811,kr=37812,Hr=37813,zr=37814,Wr=37815,Xr=37816,Yr=37817,qr=37818,jr=37819,Kr=37820,Qr=37821,mo=36492,Zr=36494,$r=36495,Pc=36283,Jr=36284,ea=36285,ta=36286,Es=2300,Is=2301,Do=2302,Xa=2400,Ya=2401,qa=2402,eh=2500,th=0,Uc=1,na=2,nh=3200,ih=3201,Oc=0,sh=1,On="",Mt="srgb",Nt="srgb-linear",Mo="linear",Je="srgb",hi=7680,ja=519,oh=512,rh=513,ah=514,Vc=515,lh=516,ch=517,uh=518,hh=519,ia=35044,Ka="300 es",In=2e3,xo=2001;class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qa=1234567;const gs=Math.PI/180,Xi=180/Math.PI;function $t(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[s&255]+yt[s>>8&255]+yt[s>>16&255]+yt[s>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Ue(s,e,t){return Math.max(e,Math.min(t,s))}function Ma(s,e){return(s%e+e)%e}function ph(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function dh(s,e,t){return s!==e?(t-s)/(e-s):0}function Ms(s,e,t){return(1-t)*s+t*e}function fh(s,e,t,n){return Ms(s,e,1-Math.exp(-t*n))}function mh(s,e=1){return e-Math.abs(Ma(s,e*2)-e)}function _h(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function gh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Mh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xh(s,e){return s+Math.random()*(e-s)}function yh(s){return s*(.5-Math.random())}function Eh(s){s!==void 0&&(Qa=s);let e=Qa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ih(s){return s*gs}function Ah(s){return s*Xi}function vh(s){return(s&s-1)===0&&s!==0}function Th(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Sh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bh(s,e,t,n,i){const o=Math.cos,r=Math.sin,a=o(t/2),l=r(t/2),c=o((e+n)/2),u=r((e+n)/2),h=o((e-n)/2),p=r((e-n)/2),f=o((n-e)/2),_=r((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*p,a*c);break;case"YZY":s.set(l*p,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*p,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Fc={DEG2RAD:gs,RAD2DEG:Xi,generateUUID:$t,clamp:Ue,euclideanModulo:Ma,mapLinear:ph,inverseLerp:dh,lerp:Ms,damp:fh,pingpong:mh,smoothstep:_h,smootherstep:gh,randInt:Mh,randFloat:xh,randFloatSpread:yh,seededRandom:Eh,degToRad:Ih,radToDeg:Ah,isPowerOfTwo:vh,ceilPowerOfTwo:Th,floorPowerOfTwo:Sh,setQuaternionFromProperEuler:bh,normalize:Ze,denormalize:Qt};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ue(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*i+e.x,this.y=o*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(e,t,n,i,o,r,a,l,c){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,r,a,l,c)}set(e,t,n,i,o,r,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],f=n[5],_=n[8],g=i[0],m=i[3],d=i[6],T=i[1],v=i[4],E=i[7],C=i[2],N=i[5],S=i[8];return o[0]=r*g+a*T+l*C,o[3]=r*m+a*v+l*N,o[6]=r*d+a*E+l*S,o[1]=c*g+u*T+h*C,o[4]=c*m+u*v+h*N,o[7]=c*d+u*E+h*S,o[2]=p*g+f*T+_*C,o[5]=p*m+f*v+_*N,o[8]=p*d+f*E+_*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*a*c-n*o*u+n*a*l+i*o*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*r-a*c,p=a*l-u*o,f=c*o-r*l,_=t*h+n*p+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*r)*g,e[3]=p*g,e[4]=(u*t-i*l)*g,e[5]=(i*o-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(r*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Po.makeScale(e,t)),this}rotate(e){return this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new Ce;function Gc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function As(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nh(){const s=As("canvas");return s.style.display="block",s}const Za={};function Ri(s){s in Za||(Za[s]=!0,console.warn(s))}function Lh(s,e,t){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Rh(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wh(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $a=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ja=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ch(){const s={enabled:!0,workingColorSpace:Nt,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===Je&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Je&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===On?Mo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Nt]:{primaries:e,whitePoint:n,transfer:Mo,toXYZ:$a,fromXYZ:Ja,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:$a,fromXYZ:Ja,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),s}const He=Ch();function An(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Oi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let pi;class Dh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=As("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=As("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=An(o[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ph=0;class Bc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=$t(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Uo(i[r].image)):o.push(Uo(i[r]))}else o=Uo(i);n.url=o}return t||(e.images[this.uuid]=n),n}}function Uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uh=0;class _t extends ai{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=Fn,i=Fn,o=Ut,r=En,a=zt,l=Sn,c=_t.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=$t(),this.name="",this.source=new Bc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=vc;_t.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,t=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,o;const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],f=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(f+1)/2,C=(d+1)/2,N=(u+p)/4,S=(h+g)/4,U=(_+m)/4;return v>E&&v>C?v<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(v),i=N/n,o=S/n):E>C?E<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(E),n=N/i,o=U/i):C<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(C),n=S/o,i=U/o),this.set(n,i,o,t),this}let T=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(p-u)*(p-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-g)/T,this.z=(p-u)/T,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this.w=Ue(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this.w=Ue(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oh extends ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new _t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Bc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends Oh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kc extends _t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vh extends _t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,o,r,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const p=o[r+0],f=o[r+1],_=o[r+2],g=o[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==p||c!==f||u!==_){let m=1-a;const d=l*p+c*f+u*_+h*g,T=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),N=Math.atan2(C,d*T);m=Math.sin(m*N)/C,a=Math.sin(a*N)/C}const E=a*T;if(l=l*m+p*E,c=c*m+f*E,u=u*m+_*E,h=h*m+g*E,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=o[r],p=o[r+1],f=o[r+2],_=o[r+3];return e[t]=a*_+u*h+l*f-c*p,e[t+1]=l*_+u*p+c*h-a*f,e[t+2]=c*_+u*f+a*p-l*h,e[t+3]=u*_-a*h-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,o=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(o/2),p=l(n/2),f=l(i/2),_=l(o/2);switch(r){case"XYZ":this._x=p*u*h+c*f*_,this._y=c*f*h-p*u*_,this._z=c*u*_+p*f*h,this._w=c*u*h-p*f*_;break;case"YXZ":this._x=p*u*h+c*f*_,this._y=c*f*h-p*u*_,this._z=c*u*_-p*f*h,this._w=c*u*h+p*f*_;break;case"ZXY":this._x=p*u*h-c*f*_,this._y=c*f*h+p*u*_,this._z=c*u*_+p*f*h,this._w=c*u*h-p*f*_;break;case"ZYX":this._x=p*u*h-c*f*_,this._y=c*f*h+p*u*_,this._z=c*u*_-p*f*h,this._w=c*u*h+p*f*_;break;case"YZX":this._x=p*u*h+c*f*_,this._y=c*f*h+p*u*_,this._z=c*u*_-p*f*h,this._w=c*u*h-p*f*_;break;case"XZY":this._x=p*u*h-c*f*_,this._y=c*f*h-p*u*_,this._z=c*u*_+p*f*h,this._w=c*u*h+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],o=t[8],r=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(o-c)*f,this._z=(r-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(o-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-i)/f,this._x=(o+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ue(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,o=e._z,r=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*a+i*c-o*l,this._y=i*u+r*l+o*a-n*c,this._z=o*u+r*c+n*l-i*a,this._w=r*u-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=r*h+this._w*p,this._x=n*h+this._x*p,this._y=i*h+this._y*p,this._z=o*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(el.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(el.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*i,this.y=o[1]*t+o[4]*n+o[7]*i,this.z=o[2]*t+o[5]*n+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,o=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*i-a*n),u=2*(a*t-o*i),h=2*(o*n-r*t);return this.x=t+l*c+r*h-a*u,this.y=n+l*u+a*c-o*h,this.z=i+l*h+o*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i,this.y=o[1]*t+o[5]*n+o[9]*i,this.z=o[2]*t+o[6]*n+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,o=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ue(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new L,el=new sn;class bn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Yt):Yt.fromBufferAttribute(o,r),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const i=e.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Cs.subVectors(this.max,is),di.subVectors(e.a,is),fi.subVectors(e.b,is),mi.subVectors(e.c,is),Nn.subVectors(fi,di),Ln.subVectors(mi,fi),jn.subVectors(di,mi);let t=[0,-Nn.z,Nn.y,0,-Ln.z,Ln.y,0,-jn.z,jn.y,Nn.z,0,-Nn.x,Ln.z,0,-Ln.x,jn.z,0,-jn.x,-Nn.y,Nn.x,0,-Ln.y,Ln.x,0,-jn.y,jn.x,0];return!Vo(t,di,fi,mi,Cs)||(t=[1,0,0,0,1,0,0,0,1],!Vo(t,di,fi,mi,Cs))?!1:(Ds.crossVectors(Nn,Ln),t=[Ds.x,Ds.y,Ds.z],Vo(t,di,fi,mi,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new L,new L,new L,new L,new L,new L,new L,new L],Yt=new L,ws=new bn,di=new L,fi=new L,mi=new L,Nn=new L,Ln=new L,jn=new L,is=new L,Cs=new L,Ds=new L,Kn=new L;function Vo(s,e,t,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Kn.fromArray(s,o);const a=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),l=e.dot(Kn),c=t.dot(Kn),u=n.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Fh=new bn,ss=new L,Fo=new L;class ln{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fh.setFromPoints(e).getCenter(n);let i=0;for(let o=0,r=e.length;o<r;o++)i=Math.max(i,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ss,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(Fo)),this.expandByPoint(ss.copy(e.center).sub(Fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new L,Go=new L,Ps=new L,Rn=new L,Bo=new L,Us=new L,ko=new L;class Qi{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Go.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(Go);const o=e.distanceTo(t)*.5,r=-this.direction.dot(Ps),a=Rn.dot(this.direction),l=-Rn.dot(Ps),c=Rn.lengthSq(),u=Math.abs(1-r*r);let h,p,f,_;if(u>0)if(h=r*l-a,p=r*a-l,_=o*u,h>=0)if(p>=-_)if(p<=_){const g=1/u;h*=g,p*=g,f=h*(h+r*p+2*a)+p*(r*h+p+2*l)+c}else p=o,h=Math.max(0,-(r*p+a)),f=-h*h+p*(p+2*l)+c;else p=-o,h=Math.max(0,-(r*p+a)),f=-h*h+p*(p+2*l)+c;else p<=-_?(h=Math.max(0,-(-r*o+a)),p=h>0?-o:Math.min(Math.max(-o,-l),o),f=-h*h+p*(p+2*l)+c):p<=_?(h=0,p=Math.min(Math.max(-o,-l),o),f=p*(p+2*l)+c):(h=Math.max(0,-(r*o+a)),p=h>0?o:Math.min(Math.max(-o,-l),o),f=-h*h+p*(p+2*l)+c);else p=r>0?-o:o,h=Math.max(0,-(r*p+a)),f=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Go).addScaledVector(Ps,p),f}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,o=e.radius*e.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,o,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,i=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,i=(e.min.x-p.x)*c),u>=0?(o=(e.min.y-p.y)*u,r=(e.max.y-p.y)*u):(o=(e.max.y-p.y)*u,r=(e.min.y-p.y)*u),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,i,o){Bo.subVectors(t,e),Us.subVectors(n,e),ko.crossVectors(Bo,Us);let r=this.direction.dot(ko),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Rn.subVectors(this.origin,e);const l=a*this.direction.dot(Us.crossVectors(Rn,Us));if(l<0)return null;const c=a*this.direction.dot(Bo.cross(Rn));if(c<0||l+c>r)return null;const u=-a*Rn.dot(ko);return u<0?null:this.at(u/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(e,t,n,i,o,r,a,l,c,u,h,p,f,_,g,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,r,a,l,c,u,h,p,f,_,g,m)}set(e,t,n,i,o,r,a,l,c,u,h,p,f,_,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=o,d[5]=r,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=f,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_i.setFromMatrixColumn(e,0).length(),o=1/_i.setFromMatrixColumn(e,1).length(),r=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const p=r*u,f=r*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=p-g*c,t[9]=-a*l,t[2]=g-p*c,t[6]=_+f*c,t[10]=r*l}else if(e.order==="YXZ"){const p=l*u,f=l*h,_=c*u,g=c*h;t[0]=p+g*a,t[4]=_*a-f,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-a,t[2]=f*a-_,t[6]=g+p*a,t[10]=r*l}else if(e.order==="ZXY"){const p=l*u,f=l*h,_=c*u,g=c*h;t[0]=p-g*a,t[4]=-r*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=r*u,t[9]=g-p*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const p=r*u,f=r*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=p*c+g,t[1]=l*h,t[5]=g*c+p,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const p=r*l,f=r*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-p*h,t[8]=_*h+f,t[1]=h,t[5]=r*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=p-g*h}else if(e.order==="XZY"){const p=r*l,f=r*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+g,t[5]=r*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=g*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gh,e,Bh)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),wn.crossVectors(n,Dt),wn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),wn.crossVectors(n,Dt)),wn.normalize(),Os.crossVectors(Dt,wn),i[0]=wn.x,i[4]=Os.x,i[8]=Dt.x,i[1]=wn.y,i[5]=Os.y,i[9]=Dt.y,i[2]=wn.z,i[6]=Os.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],f=n[13],_=n[2],g=n[6],m=n[10],d=n[14],T=n[3],v=n[7],E=n[11],C=n[15],N=i[0],S=i[4],U=i[8],I=i[12],y=i[1],R=i[5],z=i[9],G=i[13],j=i[2],K=i[6],X=i[10],Z=i[14],k=i[3],se=i[7],ue=i[11],Me=i[15];return o[0]=r*N+a*y+l*j+c*k,o[4]=r*S+a*R+l*K+c*se,o[8]=r*U+a*z+l*X+c*ue,o[12]=r*I+a*G+l*Z+c*Me,o[1]=u*N+h*y+p*j+f*k,o[5]=u*S+h*R+p*K+f*se,o[9]=u*U+h*z+p*X+f*ue,o[13]=u*I+h*G+p*Z+f*Me,o[2]=_*N+g*y+m*j+d*k,o[6]=_*S+g*R+m*K+d*se,o[10]=_*U+g*z+m*X+d*ue,o[14]=_*I+g*G+m*Z+d*Me,o[3]=T*N+v*y+E*j+C*k,o[7]=T*S+v*R+E*K+C*se,o[11]=T*U+v*z+E*X+C*ue,o[15]=T*I+v*G+E*Z+C*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],o=e[12],r=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],f=e[14],_=e[3],g=e[7],m=e[11],d=e[15];return _*(+o*l*h-i*c*h-o*a*p+n*c*p+i*a*f-n*l*f)+g*(+t*l*f-t*c*p+o*r*p-i*r*f+i*c*u-o*l*u)+m*(+t*c*h-t*a*f-o*r*h+n*r*f+o*a*u-n*c*u)+d*(-i*a*u-t*l*h+t*a*p+i*r*h-n*r*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],f=e[11],_=e[12],g=e[13],m=e[14],d=e[15],T=h*m*c-g*p*c+g*l*f-a*m*f-h*l*d+a*p*d,v=_*p*c-u*m*c-_*l*f+r*m*f+u*l*d-r*p*d,E=u*g*c-_*h*c+_*a*f-r*g*f-u*a*d+r*h*d,C=_*h*l-u*g*l-_*a*p+r*g*p+u*a*m-r*h*m,N=t*T+n*v+i*E+o*C;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/N;return e[0]=T*S,e[1]=(g*p*o-h*m*o-g*i*f+n*m*f+h*i*d-n*p*d)*S,e[2]=(a*m*o-g*l*o+g*i*c-n*m*c-a*i*d+n*l*d)*S,e[3]=(h*l*o-a*p*o-h*i*c+n*p*c+a*i*f-n*l*f)*S,e[4]=v*S,e[5]=(u*m*o-_*p*o+_*i*f-t*m*f-u*i*d+t*p*d)*S,e[6]=(_*l*o-r*m*o-_*i*c+t*m*c+r*i*d-t*l*d)*S,e[7]=(r*p*o-u*l*o+u*i*c-t*p*c-r*i*f+t*l*f)*S,e[8]=E*S,e[9]=(_*h*o-u*g*o-_*n*f+t*g*f+u*n*d-t*h*d)*S,e[10]=(r*g*o-_*a*o+_*n*c-t*g*c-r*n*d+t*a*d)*S,e[11]=(u*a*o-r*h*o-u*n*c+t*h*c+r*n*f-t*a*f)*S,e[12]=C*S,e[13]=(u*g*i-_*h*i+_*n*p-t*g*p-u*n*m+t*h*m)*S,e[14]=(_*a*i-r*g*i-_*n*l+t*g*l+r*n*m-t*a*m)*S,e[15]=(r*h*i-u*a*i+u*n*l-t*h*l-r*n*p+t*a*p)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,o=e.z;return t[0]*=n,t[4]*=i,t[8]*=o,t[1]*=n,t[5]*=i,t[9]*=o,t[2]*=n,t[6]*=i,t[10]*=o,t[3]*=n,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),o=1-n,r=e.x,a=e.y,l=e.z,c=o*r,u=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*r,0,c*l-i*a,u*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,o,r){return this.set(1,n,o,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,o=t._x,r=t._y,a=t._z,l=t._w,c=o+o,u=r+r,h=a+a,p=o*c,f=o*u,_=o*h,g=r*u,m=r*h,d=a*h,T=l*c,v=l*u,E=l*h,C=n.x,N=n.y,S=n.z;return i[0]=(1-(g+d))*C,i[1]=(f+E)*C,i[2]=(_-v)*C,i[3]=0,i[4]=(f-E)*N,i[5]=(1-(p+d))*N,i[6]=(m+T)*N,i[7]=0,i[8]=(_+v)*S,i[9]=(m-T)*S,i[10]=(1-(p+g))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let o=_i.set(i[0],i[1],i[2]).length();const r=_i.set(i[4],i[5],i[6]).length(),a=_i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);const c=1/o,u=1/r,h=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=o,n.y=r,n.z=a,this}makePerspective(e,t,n,i,o,r,a=In){const l=this.elements,c=2*o/(t-e),u=2*o/(n-i),h=(t+e)/(t-e),p=(n+i)/(n-i);let f,_;if(a===In)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===xo)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,o,r,a=In){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(r-o),p=(t+e)*c,f=(n+i)*u;let _,g;if(a===In)_=(r+o)*h,g=-2*h;else if(a===xo)_=o*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new L,qt=new Re,Gh=new L(0,0,0),Bh=new L(1,1,1),wn=new L,Os=new L,Dt=new L,tl=new Re,nl=new sn;class on{constructor(e=0,t=0,n=0,i=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],p=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nl.setFromEuler(this),this.setFromQuaternion(nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class xa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kh=0;const il=new L,gi=new sn,mn=new Re,Vs=new L,os=new L,Hh=new L,zh=new sn,sl=new L(1,0,0),ol=new L(0,1,0),rl=new L(0,0,1),al={type:"added"},Wh={type:"removed"},Mi={type:"childadded",child:null},Ho={type:"childremoved",child:null};class ot extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=$t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new L,t=new on,n=new sn,i=new L(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ce}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(sl,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(rl,e)}translateOnAxis(e,t){return il.copy(e).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sl,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(os,Vs,this.up):mn.lookAt(Vs,os,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(mn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(al),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wh),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(al),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Hh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),p=r(e.skeletons),f=r(e.animations),_=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new L(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new L,_n=new L,zo=new L,gn=new L,xi=new L,yi=new L,ll=new L,Wo=new L,Xo=new L,Yo=new L,qo=new qe,jo=new qe,Ko=new qe;class Ht{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,n,i,o){jt.subVectors(i,t),_n.subVectors(n,t),zo.subVectors(e,t);const r=jt.dot(jt),a=jt.dot(_n),l=jt.dot(zo),c=_n.dot(_n),u=_n.dot(zo),h=r*c-a*a;if(h===0)return o.set(0,0,0),null;const p=1/h,f=(c*l-a*u)*p,_=(r*u-a*l)*p;return o.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,i,o,r,a,l){return this.getBarycoord(e,t,n,i,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,gn.x),l.addScaledVector(r,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(e,t,n,i,o,r){return qo.setScalar(0),jo.setScalar(0),Ko.setScalar(0),qo.fromBufferAttribute(e,t),jo.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(qo,o.x),r.addScaledVector(jo,o.y),r.addScaledVector(Ko,o.z),r}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),_n.subVectors(e,t),jt.cross(_n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),jt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,o){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,i,o)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,o=this.c;let r,a;xi.subVectors(i,n),yi.subVectors(o,n),Wo.subVectors(e,n);const l=xi.dot(Wo),c=yi.dot(Wo);if(l<=0&&c<=0)return t.copy(n);Xo.subVectors(e,i);const u=xi.dot(Xo),h=yi.dot(Xo);if(u>=0&&h<=u)return t.copy(i);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(xi,r);Yo.subVectors(e,o);const f=xi.dot(Yo),_=yi.dot(Yo);if(_>=0&&f<=_)return t.copy(o);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(yi,a);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return ll.subVectors(o,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(ll,a);const d=1/(m+g+p);return r=g*d,a=p*d,t.copy(n).addScaledVector(xi,r).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Qo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=He.workingColorSpace){if(e=Ma(e,1),t=Ue(t,0,1),n=Ue(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=Qo(r,o,e+1/3),this.g=Qo(r,o,e),this.b=Qo(r,o,e-1/3)}return He.toWorkingColorSpace(this,i),this}setStyle(e,t=Mt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Hc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return He.fromWorkingColorSpace(Et.copy(this),e),Math.round(Ue(Et.r*255,0,255))*65536+Math.round(Ue(Et.g*255,0,255))*256+Math.round(Ue(Et.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,i=Et.g,o=Et.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const h=r-a;switch(c=u<=.5?h/(r+a):h/(2-r-a),r){case n:l=(i-o)/h+(i<o?6:0);break;case i:l=(o-n)/h+2;break;case o:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=He.workingColorSpace){return He.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Mt){He.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,i=Et.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Fs);const n=Ms(Cn.h,Fs.h,t),i=Ms(Cn.s,Fs.s,t),o=Ms(Cn.l,Fs.l,t);return this.setHSL(n,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*i,this.g=o[1]*t+o[4]*n+o[7]*i,this.b=o[2]*t+o[5]*n+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Le;Le.NAMES=Hc;let Xh=0;class Jt extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=$t(),this.name="",this.type="Material",this.blending=Pi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xr,this.blendDst=yr,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xr&&(n.blendSrc=this.blendSrc),this.blendDst!==yr&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(t){const o=i(e.textures),r=i(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gn extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new L,Gs=new ye;let Yh=0;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ia,this.updateRanges=[],this.gpuType=Zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),o=Ze(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ia&&(e.usage=this.usage),e}}class zc extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wc extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vn extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qh=0;const Bt=new Re,Zo=new ot,Ei=new L,Pt=new bn,rs=new bn,mt=new L;class en extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=$t(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gc(e)?Wc:zc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Ce().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,o=e.length;i<o;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new vn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const o=t[n];Pt.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Pt.min,rs.min),Pt.expandByPoint(mt),mt.addVectors(Pt.max,rs.max),Pt.expandByPoint(mt)):(Pt.expandByPoint(rs.min),Pt.expandByPoint(rs.max))}Pt.getCenter(n);let i=0;for(let o=0,r=e.count;o<r;o++)mt.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(mt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(e,c),mt.add(Ei)),i=Math.max(i,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new L,l[U]=new L;const c=new L,u=new L,h=new L,p=new ye,f=new ye,_=new ye,g=new L,m=new L;function d(U,I,y){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,y),p.fromBufferAttribute(o,U),f.fromBufferAttribute(o,I),_.fromBufferAttribute(o,y),u.sub(c),h.sub(c),f.sub(p),_.sub(p);const R=1/(f.x*_.y-_.x*f.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(R),a[U].add(g),a[I].add(g),a[y].add(g),l[U].add(m),l[I].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,I=T.length;U<I;++U){const y=T[U],R=y.start,z=y.count;for(let G=R,j=R+z;G<j;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const v=new L,E=new L,C=new L,N=new L;function S(U){C.fromBufferAttribute(i,U),N.copy(C);const I=a[U];v.copy(I),v.sub(C.multiplyScalar(C.dot(I))).normalize(),E.crossVectors(N,I);const R=E.dot(l[U])<0?-1:1;r.setXYZW(U,v.x,v.y,v.z,R)}for(let U=0,I=T.length;U<I;++U){const y=T[U],R=y.start,z=y.count;for(let G=R,j=R+z;G<j;G+=3)S(e.getX(G+0)),S(e.getX(G+1)),S(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const i=new L,o=new L,r=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let p=0,f=e.count;p<f;p+=3){const _=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);i.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),u.subVectors(r,o),h.subVectors(i,o),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)i.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),r.fromBufferAttribute(t,p+2),u.subVectors(r,o),h.subVectors(i,o),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let d=0;d<u;d++)p[_++]=c[f++]}return new bt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,h=c.length;u<h;u++){const p=c[u],f=e(p,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],h=o[c];for(let p=0,f=h.length;p<f;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new Re,Qn=new Qi,Bs=new ln,ul=new L,ks=new L,Hs=new L,zs=new L,$o=new L,Ws=new L,hl=new L,Xs=new L;class Ot extends ot{constructor(e=new en,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){Ws.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],h=o[l];u!==0&&($o.fromBufferAttribute(h,e),r?Ws.addScaledVector($o,u):Ws.addScaledVector($o.sub(t),u))}t.add(Ws)}return t}raycast(e,t){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(o),Qn.copy(e.ray).recast(e.near),!(Bs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Bs,ul)===null||Qn.origin.distanceToSquared(ul)>(e.far-e.near)**2))&&(cl.copy(o).invert(),Qn.copy(e.ray).applyMatrix4(cl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,p=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,g=p.length;_<g;_++){const m=p[_],d=r[m.materialIndex],T=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=T,C=v;E<C;E+=3){const N=a.getX(E),S=a.getX(E+1),U=a.getX(E+2);i=Ys(this,d,e,n,c,u,h,N,S,U),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,d=g;m<d;m+=3){const T=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);i=Ys(this,r,e,n,c,u,h,T,v,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,g=p.length;_<g;_++){const m=p[_],d=r[m.materialIndex],T=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=T,C=v;E<C;E+=3){const N=E,S=E+1,U=E+2;i=Ys(this,d,e,n,c,u,h,N,S,U),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,d=g;m<d;m+=3){const T=m,v=m+1,E=m+2;i=Ys(this,r,e,n,c,u,h,T,v,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function jh(s,e,t,n,i,o,r,a){let l;if(e.side===wt?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,e.side===Tn,a),l===null)return null;Xs.copy(a),Xs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Xs);return c<t.near||c>t.far?null:{distance:c,point:Xs.clone(),object:s}}function Ys(s,e,t,n,i,o,r,a,l,c){s.getVertexPosition(a,ks),s.getVertexPosition(l,Hs),s.getVertexPosition(c,zs);const u=jh(s,e,t,n,ks,Hs,zs,hl);if(u){const h=new L;Ht.getBarycoord(hl,ks,Hs,zs,h),i&&(u.uv=Ht.getInterpolatedAttribute(i,a,l,c,h,new ye)),o&&(u.uv1=Ht.getInterpolatedAttribute(o,a,l,c,h,new ye)),r&&(u.normal=Ht.getInterpolatedAttribute(r,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new L,materialIndex:0};Ht.getNormal(ks,Hs,zs,p.normal),u.face=p,u.barycoord=h}return u}class bs extends en{constructor(e=1,t=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],u=[],h=[];let p=0,f=0;_("z","y","x",-1,-1,n,t,e,r,o,0),_("z","y","x",1,-1,n,t,-e,r,o,1),_("x","z","y",1,1,e,n,t,i,r,2),_("x","z","y",1,-1,e,n,-t,i,r,3),_("x","y","z",1,-1,e,t,n,i,o,4),_("x","y","z",-1,-1,e,t,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(h,2));function _(g,m,d,T,v,E,C,N,S,U,I){const y=E/S,R=C/U,z=E/2,G=C/2,j=N/2,K=S+1,X=U+1;let Z=0,k=0;const se=new L;for(let ue=0;ue<X;ue++){const Me=ue*R-G;for(let Oe=0;Oe<K;Oe++){const tt=Oe*y-z;se[g]=tt*T,se[m]=Me*v,se[d]=j,c.push(se.x,se.y,se.z),se[g]=0,se[m]=0,se[d]=N>0?1:-1,u.push(se.x,se.y,se.z),h.push(Oe/S),h.push(1-ue/U),Z+=1}}for(let ue=0;ue<U;ue++)for(let Me=0;Me<S;Me++){const Oe=p+Me+K*ue,tt=p+Me+K*(ue+1),W=p+(Me+1)+K*(ue+1),ee=p+(Me+1)+K*ue;l.push(Oe,tt,ee),l.push(tt,W,ee),k+=6}a.addGroup(f,k,I),f+=k,p+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function vt(s){const e={};for(let t=0;t<s.length;t++){const n=Yi(s[t]);for(const i in n)e[i]=n[i]}return e}function Kh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const Qh={clone:Yi,merge:vt};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Kh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yc extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=In}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new L,pl=new ye,dl=new ye;class Tt extends Yc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,pl,dl),t.subVectors(dl,pl)}setViewOffset(e,t,n,i,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Ai=1;class Jh extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tt(Ii,Ai,e,t);i.layers=this.layers,this.add(i);const o=new Tt(Ii,Ai,e,t);o.layers=this.layers,this.add(o);const r=new Tt(Ii,Ai,e,t);r.layers=this.layers,this.add(r);const a=new Tt(Ii,Ai,e,t);a.layers=this.layers,this.add(a);const l=new Tt(Ii,Ai,e,t);l.layers=this.layers,this.add(l);const c=new Tt(Ii,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,o,r,a,l]=t;for(const c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,o),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,p,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class qc extends _t{constructor(e,t,n,i,o,r,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,i,o,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ep extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bs(5,5,5),o=new zn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:kn});o.uniforms.tEquirect.value=t;const r=new Ot(i,o),a=t.minFilter;return t.minFilter===En&&(t.minFilter=Ut),new Jh(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(o)}}class si extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tp={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&p>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class np extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ia,this.updateRanges=[],this.version=0,this.uuid=$t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,o=this.stride;i<o;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new L;class vs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),o=Ze(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vo extends Jt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vi;const as=new L,Ti=new L,Si=new L,bi=new ye,ls=new ye,Kc=new Re,qs=new L,cs=new L,js=new L,fl=new ye,er=new ye,ml=new ye;class ya extends ot{constructor(e=new vo){if(super(),this.isSprite=!0,this.type="Sprite",vi===void 0){vi=new en;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jc(t,5);vi.setIndex([0,1,2,0,2,3]),vi.setAttribute("position",new vs(n,3,0,!1)),vi.setAttribute("uv",new vs(n,2,3,!1))}this.geometry=vi,this.material=e,this.center=new ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ti.setFromMatrixScale(this.matrixWorld),Kc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ti.multiplyScalar(-Si.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const r=this.center;Ks(qs.set(-.5,-.5,0),Si,r,Ti,i,o),Ks(cs.set(.5,-.5,0),Si,r,Ti,i,o),Ks(js.set(.5,.5,0),Si,r,Ti,i,o),fl.set(0,0),er.set(1,0),ml.set(1,1);let a=e.ray.intersectTriangle(qs,cs,js,!1,as);if(a===null&&(Ks(cs.set(-.5,.5,0),Si,r,Ti,i,o),er.set(0,1),a=e.ray.intersectTriangle(qs,js,cs,!1,as),a===null))return;const l=e.ray.origin.distanceTo(as);l<e.near||l>e.far||t.push({distance:l,point:as.clone(),uv:Ht.getInterpolation(as,qs,cs,js,fl,er,ml,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ks(s,e,t,n,i,o){bi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ls.x=o*bi.x-i*bi.y,ls.y=i*bi.x+o*bi.y):ls.copy(bi),s.copy(e),s.x+=ls.x,s.y+=ls.y,s.applyMatrix4(Kc)}const _l=new L,gl=new qe,Ml=new qe,ip=new L,xl=new Re,Qs=new L,tr=new ln,yl=new Re,nr=new Qi;class sp extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wa,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qs),this.boundingBox.expandByPoint(Qs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qs),this.boundingSphere.expandByPoint(Qs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(i),e.ray.intersectsSphere(tr)!==!1&&(yl.copy(i).invert(),nr.copy(e.ray).applyMatrix4(yl),!(this.boundingBox!==null&&nr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wa?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ju?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;gl.fromBufferAttribute(i.attributes.skinIndex,e),Ml.fromBufferAttribute(i.attributes.skinWeight,e),_l.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const r=Ml.getComponent(o);if(r!==0){const a=gl.getComponent(o);xl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ip.copy(_l).applyMatrix4(xl),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Qc extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zc extends _t{constructor(e=null,t=1,n=1,i,o,r,a,l,c=St,u=St,h,p){super(null,r,a,l,c,u,i,o,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const El=new Re,op=new Re;class Ea{constructor(e=[],t=[]){this.uuid=$t(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let o=0,r=e.length;o<r;o++){const a=e[o]?e[o].matrixWorld:op;El.multiplyMatrices(a,t[o]),El.toArray(n,o*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ea(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Zc(t,e,e,zt,Zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const o=e.bones[n];let r=t[o];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),r=new Qc),this.bones.push(r),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,o=t.length;i<o;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class sa extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ni=new Re,Il=new Re,Zs=[],Al=new bn,rp=new Re,us=new Ot,hs=new ln;class ap extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),Al.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Al)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),hs.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=e*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),e.ray.intersectsSphere(hs)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,Ni),Il.multiplyMatrices(n,Ni),us.matrixWorld=Il,us.raycast(e,Zs);for(let r=0,a=Zs.length;r<a;r++){const l=Zs[r];l.instanceId=o,l.object=this,t.push(l)}Zs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zc(new Float32Array(i*this.count),i,this.count,fa,Zt));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*e;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const ir=new L,lp=new L,cp=new Ce;class Un{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ir.subVectors(n,t).cross(lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ir),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cp.getNormalMatrix(e),i=this.coplanarPoint(ir).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new ln,$s=new L;class Ia{constructor(e=new Un,t=new Un,n=new Un,i=new Un,o=new Un,r=new Un){this.planes=[e,t,n,i,o,r]}set(e,t,n,i,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In){const n=this.planes,i=e.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],p=i[7],f=i[8],_=i[9],g=i[10],m=i[11],d=i[12],T=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-o,p-c,m-f,E-d).normalize(),n[1].setComponents(l+o,p+c,m+f,E+d).normalize(),n[2].setComponents(l+r,p+u,m+_,E+T).normalize(),n[3].setComponents(l-r,p-u,m-_,E-T).normalize(),n[4].setComponents(l-a,p-h,m-g,E-v).normalize(),t===In)n[5].setComponents(l+a,p+h,m+g,E+v).normalize();else if(t===xo)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($s.x=i.normal.x>0?e.max.x:e.min.x,$s.y=i.normal.y>0?e.max.y:e.min.y,$s.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $c extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yo=new L,Eo=new L,vl=new Re,ps=new Qi,Js=new ln,sr=new L,Tl=new L;class Aa extends ot{constructor(e=new en,t=new $c){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,o=t.count;i<o;i++)yo.fromBufferAttribute(t,i-1),Eo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yo.distanceTo(Eo);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=o,e.ray.intersectsSphere(Js)===!1)return;vl.copy(i).invert(),ps.copy(e.ray).applyMatrix4(vl);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let g=f,m=_-1;g<m;g+=c){const d=u.getX(g),T=u.getX(g+1),v=eo(this,e,ps,l,d,T,g);v&&t.push(v)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(f),d=eo(this,e,ps,l,g,m,_-1);d&&t.push(d)}}else{const f=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let g=f,m=_-1;g<m;g+=c){const d=eo(this,e,ps,l,g,g+1,g);d&&t.push(d)}if(this.isLineLoop){const g=eo(this,e,ps,l,_-1,f,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function eo(s,e,t,n,i,o,r){const a=s.geometry.attributes.position;if(yo.fromBufferAttribute(a,i),Eo.fromBufferAttribute(a,o),t.distanceSqToSegment(yo,Eo,sr,Tl)>n)return;sr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(sr);if(!(c<e.near||c>e.far))return{distance:c,point:Tl.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const Sl=new L,bl=new L;class up extends Aa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,o=t.count;i<o;i+=2)Sl.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Sl.distanceTo(bl);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hp extends Aa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jc extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nl=new Re,oa=new Qi,to=new ln,no=new L;class pp extends ot{constructor(e=new en,t=new Jc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),to.radius+=o,e.ray.intersectsSphere(to)===!1)return;Nl.copy(i).invert(),oa.copy(e.ray).applyMatrix4(Nl);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const p=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let _=p,g=f;_<g;_++){const m=c.getX(_);no.fromBufferAttribute(h,m),Ll(no,m,l,i,e,t,this)}}else{const p=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let _=p,g=f;_<g;_++)no.fromBufferAttribute(h,_),Ll(no,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ll(s,e,t,n,i,o,r){const a=oa.distanceSqToPoint(s);if(a<t){const l=new L;oa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class eu extends _t{constructor(e,t,n,i,o,r,a,l,c,u=Ui){if(u!==Ui&&u!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ui&&(n=oi),n===void 0&&u===Wi&&(n=zi),super(null,i,o,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class To extends en{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const o=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,p=t/l,f=[],_=[],g=[],m=[];for(let d=0;d<u;d++){const T=d*p-r;for(let v=0;v<c;v++){const E=v*h-o;_.push(E,-T,0),g.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const v=T+c*d,E=T+c*(d+1),C=T+1+c*(d+1),N=T+1+c*d;f.push(v,E,N),f.push(E,C,N)}this.setIndex(f),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(g,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zi extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cn extends Zi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dp extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fp extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function io(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function mp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _p(s){function e(i,o){return s[i]-s[o]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Rl(s,e,t){const n=s.length,i=new s.constructor(n);for(let o=0,r=0;r!==n;++o){const a=t[o]*e;for(let l=0;l!==e;++l)i[r++]=s[a+l]}return i}function tu(s,e,t,n){let i=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[i++];if(o===void 0)return;let r=o[n];if(r!==void 0)if(Array.isArray(r))do r=o[n],r!==void 0&&(e.push(o.time),t.push.apply(t,r)),o=s[i++];while(o!==void 0);else if(r.toArray!==void 0)do r=o[n],r!==void 0&&(e.push(o.time),r.toArray(t,t.length)),o=s[i++];while(o!==void 0);else do r=o[n],r!==void 0&&(e.push(o.time),t.push(r)),o=s[i++];while(o!==void 0)}class Ns{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],o=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=o)){const a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=o,o=t[--n-1],e>=o)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i;for(let r=0;r!==i;++r)t[r]=n[o+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gp extends Ns{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xa,endingEnd:Xa}}intervalChanged_(e,t,n){const i=this.parameterPositions;let o=e-2,r=e+1,a=i[o],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Ya:o=e,a=2*t-n;break;case qa:o=i.length-2,a=t+i[o]-i[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ya:r=e,l=2*n-t;break;case qa:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,d=-p*m+2*p*g-p*_,T=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*_+1,v=(-1-f)*m+(1.5+f)*g+.5*_,E=f*m-f*g;for(let C=0;C!==a;++C)o[C]=d*r[u+C]+T*r[c+C]+v*r[l+C]+E*r[h+C];return o}}class Mp extends Ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let p=0;p!==a;++p)o[p]=r[c+p]*h+r[l+p]*u;return o}}class xp extends Ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class un{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return Do}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let o=0,r=i-1;for(;o!==i&&n[o]<e;)++o;for(;r!==-1&&n[r]>t;)--r;if(++r,o!==0||r!==i){o>=r&&(r=Math.max(r,1),o=r-1);const a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==o;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&mp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Do,o=e.length-1;let r=1;for(let a=1;a<o;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,p=h-n,f=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[p+_]||g!==t[f+_]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const h=a*n,p=r*n;for(let f=0;f!==n;++f)t[p+f]=t[h+f]}++r}}if(o>0){e[r]=e[o];for(let a=o*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Is;class $i extends un{constructor(e,t,n){super(e,t,n)}}$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Es;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;class nu extends un{}nu.prototype.ValueTypeName="color";class qi extends un{}qi.prototype.ValueTypeName="number";class yp extends Ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)sn.slerpFlat(o,0,r,c-a,r,c,l);return o}}class ji extends un{InterpolantFactoryMethodLinear(e){return new yp(this.times,this.values,this.getValueSize(),e)}}ji.prototype.ValueTypeName="quaternion";ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Ji extends un{constructor(e,t,n){super(e,t,n)}}Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Es;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends un{}Ki.prototype.ValueTypeName="vector";class Ep{constructor(e="",t=-1,n=[],i=eh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$t(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Ap(n[r]).scale(i));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,r=n.length;o!==r;++o)t.push(un.toJSON(n[o]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const o=t.length,r=[];for(let a=0;a<o;a++){let l=[],c=[];l.push((a+o-1)%o,a,(a+1)%o),c.push(0,1,0);const u=_p(l);l=Rl(l,1,u),c=Rl(c,1,u),!i&&l[0]===0&&(l.push(o),c.push(c[0])),r.push(new qi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},o=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(o);if(u&&u.length>1){const h=u[1];let p=i[h];p||(i[h]=p=[]),p.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,p,f,_,g){if(f.length!==0){const m=[],d=[];tu(f,m,d,_),m.length!==0&&g.push(new h(p,m,d))}},i=[],o=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const p=c[h].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const f={};let _;for(_=0;_<p.length;_++)if(p[_].morphTargets)for(let g=0;g<p[_].morphTargets.length;g++)f[p[_].morphTargets[g]]=-1;for(const g in f){const m=[],d=[];for(let T=0;T!==p[_].morphTargets.length;++T){const v=p[_];m.push(v.time),d.push(v.morphTarget===g?1:0)}i.push(new qi(".morphTargetInfluence["+g+"]",m,d))}l=f.length*r}else{const f=".bones["+t[h].name+"]";n(Ki,f+".position",p,"pos",i),n(ji,f+".quaternion",p,"rot",i),n(Ki,f+".scale",p,"scl",i)}}return i.length===0?null:new this(o,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ip(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qi;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return nu;case"quaternion":return ji;case"bool":case"boolean":return $i;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ap(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ip(s.type);if(s.times===void 0){const t=[],n=[];tu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Bn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class vp{constructor(e,t,n){const i=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&i.onStart!==void 0&&i.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const Tp=new vp;class es{constructor(e){this.manager=e!==void 0?e:Tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,o){n.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}es.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mn={};class Sp extends Error{constructor(e,t){super(e),this.response=t}}class iu extends es{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Bn.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:n,onError:i});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mn[e],h=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=p?parseInt(p):0,_=f!==0;let g=0;const m=new ReadableStream({start(d){T();function T(){h.read().then(({done:v,value:E})=>{if(v)d.close();else{g+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let N=0,S=u.length;N<S;N++){const U=u[N];U.onProgress&&U.onProgress(C)}d.enqueue(E),T()}},v=>{d.error(v)})}}});return new Response(m)}else throw new Sp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),p=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(p);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Bn.add(e,c);const u=Mn[e];delete Mn[e];for(let h=0,p=u.length;h<p;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Mn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mn[e];for(let h=0,p=u.length;h<p;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bp extends es{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,r=Bn.get(e);if(r!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(r),o.manager.itemEnd(e)},0),r;const a=As("img");function l(){u(),Bn.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(h){u(),i&&i(h),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class su extends es{constructor(e){super(e)}load(e,t,n,i){const o=new _t,r=new bp(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,i),o}}class va extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const or=new Re,wl=new L,Cl=new L;class Ta{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(wl),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),or.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(or),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(or)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Np extends Ta{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Xi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||i!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=i,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lp extends va{constructor(e,t,n=0,i=Math.PI/3,o=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new Np}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dl=new Re,ds=new L,rr=new L;class Rp extends Ta{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ds.setFromMatrixPosition(e.matrixWorld),n.position.copy(ds),rr.copy(n.position),rr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rr),n.updateMatrixWorld(),i.makeTranslation(-ds.x,-ds.y,-ds.z),Dl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl)}}class wp extends va{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sa extends Yc{constructor(e=-1,t=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cp extends Ta{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class So extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Cp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Dp extends es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,r=Bn.get(e);if(r!==void 0){if(o.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),o.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(r),o.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bn.add(e,c),t&&t(c),o.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Bn.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});Bn.add(e,l),o.manager.itemStart(e)}}class Pp extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const ba="\\[\\]\\.:\\/",Up=new RegExp("["+ba+"]","g"),Na="[^"+ba+"]",Op="[^"+ba.replace("\\.","")+"]",Vp=/((?:WC+[\/:])*)/.source.replace("WC",Na),Fp=/(WCOD+)?/.source.replace("WCOD",Op),Gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Na),Bp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Na),kp=new RegExp("^"+Vp+Fp+Gp+Bp+"$"),Hp=["material","materials","bones","map"];class zp{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Up,"")}static parseTrackName(e){const t=kp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const o=n.nodeName.substring(i+1);Hp.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let r=0;r<o.length;r++){const a=o[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let o=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=zp;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Pl=new Re;class Wp{constructor(e,t,n=0,i=1/0){this.ray=new Qi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pl),this}intersectObject(e,t=!0,n=[]){return ra(e,this,n,t),n.sort(Ul),n}intersectObjects(e,t=!0,n=[]){for(let i=0,o=e.length;i<o;i++)ra(e[i],this,n,t);return n.sort(Ul),n}}function Ul(s,e){return s.distance-e.distance}function ra(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let r=0,a=o.length;r<a;r++)ra(o[r],e,t,!0)}}class Ol{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ue(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ue(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xp extends ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Vl(s,e,t,n){const i=Yp(n);switch(t){case Lc:return s*e;case wc:return s*e;case Cc:return s*e*2;case fa:return s*e/i.components*i.byteLength;case ma:return s*e/i.components*i.byteLength;case Dc:return s*e*2/i.components*i.byteLength;case _a:return s*e*2/i.components*i.byteLength;case Rc:return s*e*3/i.components*i.byteLength;case zt:return s*e*4/i.components*i.byteLength;case ga:return s*e*4/i.components*i.byteLength;case uo:case ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case po:case fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wr:case Dr:return Math.max(s,16)*Math.max(e,8)/4;case Rr:case Cr:return Math.max(s,8)*Math.max(e,8)/2;case Pr:case Ur:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Or:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Br:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case kr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hr:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Kr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qr:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case mo:case Zr:case $r:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pc:case Jr:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ea:case ta:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yp(s){switch(s){case Sn:case Sc:return{byteLength:1,components:1};case ys:case bc:case Ss:return{byteLength:2,components:1};case pa:case da:return{byteLength:2,components:4};case oi:case ha:case Zt:return{byteLength:4,components:1};case Nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ou(){let s=null,e=!1,t=null,n=null;function i(o,r){t(o,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function qp(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,p=s.createBuffer();s.bindBuffer(l,p),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<h.length;f++){const _=h[p],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,h[p]=g)}h.length=p+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,a0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,g0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,B0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Od=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ef=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ef=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:jp,alphahash_pars_fragment:Kp,alphamap_fragment:Qp,alphamap_pars_fragment:Zp,alphatest_fragment:$p,alphatest_pars_fragment:Jp,aomap_fragment:e0,aomap_pars_fragment:t0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:o0,bsdfs:r0,iridescence_fragment:a0,bumpmap_pars_fragment:l0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:u0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:p0,color_fragment:d0,color_pars_fragment:f0,color_pars_vertex:m0,color_vertex:_0,common:g0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:x0,displacementmap_pars_vertex:y0,displacementmap_vertex:E0,emissivemap_fragment:I0,emissivemap_pars_fragment:A0,colorspace_fragment:v0,colorspace_pars_fragment:T0,envmap_fragment:S0,envmap_common_pars_fragment:b0,envmap_pars_fragment:N0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:B0,envmap_vertex:R0,fog_vertex:w0,fog_pars_vertex:C0,fog_fragment:D0,fog_pars_fragment:P0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:O0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:F0,lights_pars_begin:G0,lights_toon_fragment:k0,lights_toon_pars_fragment:H0,lights_phong_fragment:z0,lights_phong_pars_fragment:W0,lights_physical_fragment:X0,lights_physical_pars_fragment:Y0,lights_fragment_begin:q0,lights_fragment_maps:j0,lights_fragment_end:K0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:J0,map_fragment:ed,map_pars_fragment:td,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:od,morphinstance_vertex:rd,morphcolor_vertex:ad,morphnormal_vertex:ld,morphtarget_pars_vertex:cd,morphtarget_vertex:ud,normal_fragment_begin:hd,normal_fragment_maps:pd,normal_pars_fragment:dd,normal_pars_vertex:fd,normal_vertex:md,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:gd,clearcoat_normal_fragment_maps:Md,clearcoat_pars_fragment:xd,iridescence_pars_fragment:yd,opaque_fragment:Ed,packing:Id,premultiplied_alpha_fragment:Ad,project_vertex:vd,dithering_fragment:Td,dithering_pars_fragment:Sd,roughnessmap_fragment:bd,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Rd,shadowmap_vertex:wd,shadowmask_pars_fragment:Cd,skinbase_vertex:Dd,skinning_pars_vertex:Pd,skinning_vertex:Ud,skinnormal_vertex:Od,specularmap_fragment:Vd,specularmap_pars_fragment:Fd,tonemapping_fragment:Gd,tonemapping_pars_fragment:Bd,transmission_fragment:kd,transmission_pars_fragment:Hd,uv_pars_fragment:zd,uv_pars_vertex:Wd,uv_vertex:Xd,worldpos_vertex:Yd,background_vert:qd,background_frag:jd,backgroundCube_vert:Kd,backgroundCube_frag:Qd,cube_vert:Zd,cube_frag:$d,depth_vert:Jd,depth_frag:ef,distanceRGBA_vert:tf,distanceRGBA_frag:nf,equirect_vert:sf,equirect_frag:of,linedashed_vert:rf,linedashed_frag:af,meshbasic_vert:lf,meshbasic_frag:cf,meshlambert_vert:uf,meshlambert_frag:hf,meshmatcap_vert:pf,meshmatcap_frag:df,meshnormal_vert:ff,meshnormal_frag:mf,meshphong_vert:_f,meshphong_frag:gf,meshphysical_vert:Mf,meshphysical_frag:xf,meshtoon_vert:yf,meshtoon_frag:Ef,points_vert:If,points_frag:Af,shadow_vert:vf,shadow_frag:Tf,sprite_vert:Sf,sprite_frag:bf},te={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},tn={basic:{uniforms:vt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:vt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Le(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:vt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:vt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:vt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Le(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:vt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:vt([te.points,te.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:vt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:vt([te.common,te.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:vt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:vt([te.sprite,te.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:vt([te.common,te.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:vt([te.lights,te.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};tn.physical={uniforms:vt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const so={r:0,b:0,g:0},$n=new on,Nf=new Re;function Lf(s,e,t,n,i,o,r){const a=new Le(0);let l=o===!0?0:1,c,u,h=null,p=0,f=null;function _(v){let E=v.isScene===!0?v.background:null;return E&&E.isTexture&&(E=(v.backgroundBlurriness>0?t:e).get(E)),E}function g(v){let E=!1;const C=_(v);C===null?d(a,l):C&&C.isColor&&(d(C,1),E=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,r):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,E){const C=_(E);C&&(C.isCubeTexture||C.mapping===Ao)?(u===void 0&&(u=new Ot(new bs(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Yi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,S,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),$n.copy(E.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nf.makeRotationFromEuler($n)),u.material.toneMapped=He.getTransfer(C.colorSpace)!==Je,(h!==C||p!==C.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=C,p=C.version,f=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ot(new To(2,2),new zn({name:"BackgroundMaterial",uniforms:Yi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=He.getTransfer(C.colorSpace)!==Je,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||p!==C.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=C,p=C.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,E){v.getRGB(so,Xc(s)),n.buffers.color.setClear(so.r,so.g,so.b,E,r)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:g,addToRenderList:m,dispose:T}}function Rf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let o=i,r=!1;function a(y,R,z,G,j){let K=!1;const X=h(G,z,R);o!==X&&(o=X,c(o.object)),K=f(y,G,z,j),K&&_(y,G,z,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,E(y,R,z,G),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,R,z){const G=z.wireframe===!0;let j=n[y.id];j===void 0&&(j={},n[y.id]=j);let K=j[R.id];K===void 0&&(K={},j[R.id]=K);let X=K[G];return X===void 0&&(X=p(l()),K[G]=X),X}function p(y){const R=[],z=[],G=[];for(let j=0;j<t;j++)R[j]=0,z[j]=0,G[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:G,object:y,attributes:{},index:null}}function f(y,R,z,G){const j=o.attributes,K=R.attributes;let X=0;const Z=z.getAttributes();for(const k in Z)if(Z[k].location>=0){const ue=j[k];let Me=K[k];if(Me===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor)),ue===void 0||ue.attribute!==Me||Me&&ue.data!==Me.data)return!0;X++}return o.attributesNum!==X||o.index!==G}function _(y,R,z,G){const j={},K=R.attributes;let X=0;const Z=z.getAttributes();for(const k in Z)if(Z[k].location>=0){let ue=K[k];ue===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor));const Me={};Me.attribute=ue,ue&&ue.data&&(Me.data=ue.data),j[k]=Me,X++}o.attributes=j,o.attributesNum=X,o.index=G}function g(){const y=o.newAttributes;for(let R=0,z=y.length;R<z;R++)y[R]=0}function m(y){d(y,0)}function d(y,R){const z=o.newAttributes,G=o.enabledAttributes,j=o.attributeDivisors;z[y]=1,G[y]===0&&(s.enableVertexAttribArray(y),G[y]=1),j[y]!==R&&(s.vertexAttribDivisor(y,R),j[y]=R)}function T(){const y=o.newAttributes,R=o.enabledAttributes;for(let z=0,G=R.length;z<G;z++)R[z]!==y[z]&&(s.disableVertexAttribArray(z),R[z]=0)}function v(y,R,z,G,j,K,X){X===!0?s.vertexAttribIPointer(y,R,z,j,K):s.vertexAttribPointer(y,R,z,G,j,K)}function E(y,R,z,G){g();const j=G.attributes,K=z.getAttributes(),X=R.defaultAttributeValues;for(const Z in K){const k=K[Z];if(k.location>=0){let se=j[Z];if(se===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const ue=se.normalized,Me=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;const tt=Oe.buffer,W=Oe.type,ee=Oe.bytesPerElement,me=W===s.INT||W===s.UNSIGNED_INT||se.gpuType===ha;if(se.isInterleavedBufferAttribute){const oe=se.data,ve=oe.stride,Ye=se.offset;if(oe.isInstancedInterleavedBuffer){for(let Te=0;Te<k.locationSize;Te++)d(k.location+Te,oe.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Te=0;Te<k.locationSize;Te++)m(k.location+Te);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Te=0;Te<k.locationSize;Te++)v(k.location+Te,Me/k.locationSize,W,ue,ve*ee,(Ye+Me/k.locationSize*Te)*ee,me)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)d(k.location+oe,se.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<k.locationSize;oe++)m(k.location+oe);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let oe=0;oe<k.locationSize;oe++)v(k.location+oe,Me/k.locationSize,W,ue,Me*ee,Me/k.locationSize*oe*ee,me)}}else if(X!==void 0){const ue=X[Z];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(k.location,ue);break;case 3:s.vertexAttrib3fv(k.location,ue);break;case 4:s.vertexAttrib4fv(k.location,ue);break;default:s.vertexAttrib1fv(k.location,ue)}}}}T()}function C(){U();for(const y in n){const R=n[y];for(const z in R){const G=R[z];for(const j in G)u(G[j].object),delete G[j];delete R[z]}delete n[y]}}function N(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const z in R){const G=R[z];for(const j in G)u(G[j].object),delete G[j];delete R[z]}delete n[y.id]}function S(y){for(const R in n){const z=n[R];if(z[y.id]===void 0)continue;const G=z[y.id];for(const j in G)u(G[j].object),delete G[j];delete z[y.id]}}function U(){I(),r=!0,o!==i&&(o=i,c(o.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:N,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function wf(s,e,t){let n;function i(c){n=c}function o(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function r(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,p){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)r(c[_],u[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*p[g];t.update(_,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cf(s,e,t,n){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){return!(S!==zt&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const U=S===Ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Sn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Zt&&!U)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:C,maxSamples:N}}function Df(s){const e=this;let t=null,n=0,i=!1,o=!1;const r=new Un,a=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||i;return i=p,n=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,d=s.get(h);if(!i||_===null||_.length===0||o&&!m)o?u(null):c();else{const T=o?0:n,v=T*4;let E=d.clippingState||null;l.value=E,E=u(_,p,v,f);for(let C=0;C!==v;++C)E[C]=t[C];d.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const d=f+g*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,E=f;v!==g;++v,E+=4)r.copy(h[v]).applyMatrix4(T,a),r.normal.toArray(m,E),m[E+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Pf(s){let e=new WeakMap;function t(r,a){return a===Nr?r.mapping=Bi:a===Lr&&(r.mapping=ki),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Nr||a===Lr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new ep(l.height);return c.fromEquirectangularTexture(s,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Ci=4,Fl=[.125,.215,.35,.446,.526,.582],ii=20,ar=new Sa,Gl=new Le;let lr=null,cr=0,ur=0,hr=!1;const ti=(1+Math.sqrt(5))/2,Li=1/ti,Bl=[new L(-ti,Li,0),new L(ti,Li,0),new L(-Li,0,ti),new L(Li,0,ti),new L(0,ti,-Li),new L(0,ti,Li),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lr,cr,ur),this._renderer.xr.enabled=hr,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Ss,format:zt,colorSpace:Nt,depthBuffer:!1},i=Hl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uf(o)),this._blurMaterial=Of(o,e,t)}return i}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,ar)}_sceneToCubeUV(e,t,n,i){const a=new Tt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Gl),u.toneMapping=Hn,u.autoClear=!1;const f=new Gn({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),_=new Ot(new bs,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Gl),g=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;oo(i,T*v,d>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bi||e.mapping===ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zl());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new Ot(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,ar)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Bl[(i-o-1)%Bl.length];this._blur(e,o-1,o,r,a)}t.autoClear=n}_blur(e,t,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",o),this._halfBlur(r,e,n,n,i,"longitudinal",o)}_halfBlur(e,t,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ot(this._lodPlanes[i],c),p=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ii-1),g=o/_,m=isFinite(o)?1+Math.floor(u*g):ii;m>ii&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const d=[];let T=0;for(let S=0;S<ii;++S){const U=S/g,I=Math.exp(-U*U/2);d.push(I),S===0?T+=I:S<m&&(T+=2*I)}for(let S=0;S<d.length;S++)d[S]=d[S]/T;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=r==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-n;const E=this._sizeLods[i],C=3*E*(i>v-Ci?i-v+Ci:0),N=4*(this._cubeSize-E);oo(t,C,N,3*E,2*E),l.setRenderTarget(t),l.render(h,ar)}}function Uf(s){const e=[],t=[],n=[];let i=s;const o=s-Ci+1+Fl.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>s-Ci?l=Fl[r-s+Ci-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,d=1,T=new Float32Array(g*_*f),v=new Float32Array(m*_*f),E=new Float32Array(d*_*f);for(let N=0;N<f;N++){const S=N%3*2/3-1,U=N>2?0:-1,I=[S,U,0,S+2/3,U,0,S+2/3,U+1,0,S,U,0,S+2/3,U+1,0,S,U+1,0];T.set(I,g*_*N),v.set(p,m*_*N);const y=[N,N,N,N,N,N];E.set(y,d*_*N)}const C=new en;C.setAttribute("position",new bt(T,g)),C.setAttribute("uv",new bt(v,m)),C.setAttribute("faceIndex",new bt(E,d)),e.push(C),i>Ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hl(s,e,t){const n=new ri(s,e,t);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Of(s,e,t){const n=new Float32Array(ii),i=new L(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function zl(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Wl(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function La(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vf(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nr||l===Lr,u=l===Bi||l===ki;if(c||u){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new kl(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new kl(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Ff(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ri("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gf(s,e,t,n){const i={},o=new WeakMap;function r(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);p.removeEventListener("dispose",r),delete i[p.id];const f=o.get(p);f&&(e.remove(f),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return i[p.id]===!0||(p.addEventListener("dispose",r),i[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const f in p)e.update(p[f],s.ARRAY_BUFFER)}function c(h){const p=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const T=f.array;g=f.version;for(let v=0,E=T.length;v<E;v+=3){const C=T[v+0],N=T[v+1],S=T[v+2];p.push(C,N,N,S,S,C)}}else if(_!==void 0){const T=_.array;g=_.version;for(let v=0,E=T.length/3-1;v<E;v+=3){const C=v+0,N=v+1,S=v+2;p.push(C,N,N,S,S,C)}}else return;const m=new(Gc(p)?Wc:zc)(p,1);m.version=g;const d=o.get(h);d&&e.remove(d),o.set(h,m)}function u(h){const p=o.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Bf(s,e,t){let n;function i(p){n=p}let o,r;function a(p){o=p.type,r=p.bytesPerElement}function l(p,f){s.drawElements(n,f,o,p*r),t.update(f,n,1)}function c(p,f,_){_!==0&&(s.drawElementsInstanced(n,f,o,p*r,_),t.update(f,n,_))}function u(p,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,p,0,_);let m=0;for(let d=0;d<_;d++)m+=f[d];t.update(m,n,1)}function h(p,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/r,f[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,p,0,g,0,_);let d=0;for(let T=0;T<_;T++)d+=f[T]*g[T];t.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function kf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=a*(o/3);break;case s.LINES:t.lines+=a*(o/2);break;case s.LINE_STRIP:t.lines+=a*(o-1);break;case s.LINE_LOOP:t.lines+=a*o;break;case s.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hf(s,e,t){const n=new WeakMap,i=new qe;function o(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==h){let y=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let C=a.attributes.position.count*E,N=1;C>e.maxTextureSize&&(N=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const S=new Float32Array(C*N*4*h),U=new kc(S,C,N,h);U.type=Zt,U.needsUpdate=!0;const I=E*4;for(let R=0;R<h;R++){const z=d[R],G=T[R],j=v[R],K=C*N*4*R;for(let X=0;X<z.count;X++){const Z=X*I;_===!0&&(i.fromBufferAttribute(z,X),S[K+Z+0]=i.x,S[K+Z+1]=i.y,S[K+Z+2]=i.z,S[K+Z+3]=0),g===!0&&(i.fromBufferAttribute(G,X),S[K+Z+4]=i.x,S[K+Z+5]=i.y,S[K+Z+6]=i.z,S[K+Z+7]=0),m===!0&&(i.fromBufferAttribute(j,X),S[K+Z+8]=i.x,S[K+Z+9]=i.y,S[K+Z+10]=i.z,S[K+Z+11]=j.itemSize===4?i.w:1)}}p={count:h,texture:U,size:new ye(C,N)},n.set(a,p),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:o}}function zf(s,e,t,n){let i=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return h}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:r}}const ru=new _t,Xl=new eu(1,1),au=new kc,lu=new Vh,cu=new qc,Yl=[],ql=[],jl=new Float32Array(16),Kl=new Float32Array(9),Ql=new Float32Array(4);function ts(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let o=Yl[i];if(o===void 0&&(o=new Float32Array(i),Yl[i]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,s[r].toArray(o,a)}return o}function dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function bo(s,e){let t=ql[e];t===void 0&&(t=new Int32Array(e),ql[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function Yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function jf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ql.set(n),s.uniformMatrix2fv(this.addr,!1,Ql),ft(t,n)}}function Kf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Kl.set(n),s.uniformMatrix3fv(this.addr,!1,Kl),ft(t,n)}}function Qf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;jl.set(n),s.uniformMatrix4fv(this.addr,!1,jl),ft(t,n)}}function Zf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function Jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function tm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function im(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function om(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Xl.compareFunction=Vc,o=Xl):o=ru,t.setTexture2D(e||o,i)}function rm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lu,i)}function am(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cu,i)}function lm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||au,i)}function cm(s){switch(s){case 5126:return Wf;case 35664:return Xf;case 35665:return Yf;case 35666:return qf;case 35674:return jf;case 35675:return Kf;case 35676:return Qf;case 5124:case 35670:return Zf;case 35667:case 35671:return $f;case 35668:case 35672:return Jf;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return lm}}function um(s,e){s.uniform1fv(this.addr,e)}function hm(s,e){const t=ts(e,this.size,2);s.uniform2fv(this.addr,t)}function pm(s,e){const t=ts(e,this.size,3);s.uniform3fv(this.addr,t)}function dm(s,e){const t=ts(e,this.size,4);s.uniform4fv(this.addr,t)}function fm(s,e){const t=ts(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mm(s,e){const t=ts(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _m(s,e){const t=ts(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gm(s,e){s.uniform1iv(this.addr,e)}function Mm(s,e){s.uniform2iv(this.addr,e)}function xm(s,e){s.uniform3iv(this.addr,e)}function ym(s,e){s.uniform4iv(this.addr,e)}function Em(s,e){s.uniform1uiv(this.addr,e)}function Im(s,e){s.uniform2uiv(this.addr,e)}function Am(s,e){s.uniform3uiv(this.addr,e)}function vm(s,e){s.uniform4uiv(this.addr,e)}function Tm(s,e,t){const n=this.cache,i=e.length,o=bo(t,i);dt(n,o)||(s.uniform1iv(this.addr,o),ft(n,o));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||ru,o[r])}function Sm(s,e,t){const n=this.cache,i=e.length,o=bo(t,i);dt(n,o)||(s.uniform1iv(this.addr,o),ft(n,o));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||lu,o[r])}function bm(s,e,t){const n=this.cache,i=e.length,o=bo(t,i);dt(n,o)||(s.uniform1iv(this.addr,o),ft(n,o));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||cu,o[r])}function Nm(s,e,t){const n=this.cache,i=e.length,o=bo(t,i);dt(n,o)||(s.uniform1iv(this.addr,o),ft(n,o));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||au,o[r])}function Lm(s){switch(s){case 5126:return um;case 35664:return hm;case 35665:return pm;case 35666:return dm;case 35674:return fm;case 35675:return mm;case 35676:return _m;case 5124:case 35670:return gm;case 35667:case 35671:return Mm;case 35668:case 35672:return xm;case 35669:case 35673:return ym;case 5125:return Em;case 36294:return Im;case 36295:return Am;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Nm}}class Rm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cm(t.type)}}class wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lm(t.type)}}class Cm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(e,t[a.id],n)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function Zl(s,e){s.seq.push(e),s.map[e.id]=e}function Dm(s,e,t){const n=s.name,i=n.length;for(pr.lastIndex=0;;){const o=pr.exec(n),r=pr.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Zl(t,c===void 0?new Rm(a,s,e):new wm(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Cm(a),Zl(t,h)),t=h}}}class _o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=e.getActiveUniform(t,i),r=e.getUniformLocation(t,o.name);Dm(o,r,this)}}setValue(e,t,n,i){const o=this.map[t];o!==void 0&&o.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let o=0,r=t.length;o!==r;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,o=e.length;i!==o;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function $l(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Pm=37297;let Um=0;function Om(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const Jl=new Ce;function Vm(s){He._getMatrix(Jl,He.workingColorSpace,s);const e=`mat3( ${Jl.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(s)){case Mo:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ec(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+Om(s.getShaderSource(e),r)}else return i}function Fm(s,e){const t=Vm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gm(s,e){let t;switch(e){case Yu:t="Linear";break;case qu:t="Reinhard";break;case ju:t="Cineon";break;case Ku:t="ACESFilmic";break;case Zu:t="AgX";break;case $u:t="Neutral";break;case Qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ro=new L;function Bm(){He.getLuminanceCoefficients(ro);const s=ro.x.toFixed(4),e=ro.y.toFixed(4),t=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function km(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function Hm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(e,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:s.getAttribLocation(e,r),locationSize:a}}return t}function _s(s){return s!==""}function tc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(s){return s.replace(Wm,Ym)}const Xm=new Map;function Ym(s,e){let t=Pe[e];if(t===void 0){const n=Xm.get(e);if(n!==void 0)t=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return aa(t)}const qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(s){return s.replace(qm,jm)}function jm(s,e,t,n){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function sc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Km(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bi:case ki:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function $m(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Wu:e="ENVMAP_BLENDING_MIX";break;case Xu:e="ENVMAP_BLENDING_ADD";break}return e}function Jm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function e_(s,e,t,n){const i=s.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=Km(t),c=Qm(t),u=Zm(t),h=$m(t),p=Jm(t),f=km(t),_=Hm(o),g=i.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_s).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_s).join(`
`),d.length>0&&(d+=`
`)):(m=[sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),d=[sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Fm("linearToOutputTexel",t.outputColorSpace),Bm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),r=aa(r),r=tc(r,t),r=nc(r,t),a=aa(a),a=tc(a,t),a=nc(a,t),r=ic(r),a=ic(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=T+m+r,E=T+d+a,C=$l(i,i.VERTEX_SHADER,v),N=$l(i,i.FRAGMENT_SHADER,E);i.attachShader(g,C),i.attachShader(g,N),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function S(R){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(g).trim(),G=i.getShaderInfoLog(C).trim(),j=i.getShaderInfoLog(N).trim();let K=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,C,N);else{const Z=ec(i,C,"vertex"),k=ec(i,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+Z+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||j==="")&&(X=!1);X&&(R.diagnostics={runnable:K,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:j,prefix:d}})}i.deleteShader(C),i.deleteShader(N),U=new _o(i,g),I=zm(i,g)}let U;this.getUniforms=function(){return U===void 0&&S(this),U};let I;this.getAttributes=function(){return I===void 0&&S(this),I};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Pm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Um++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=N,this}let t_=0;class n_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i_(e),t.set(e,n)),n}}class i_{constructor(e){this.id=t_++,this.code=e,this.usedTimes=0}}function s_(s,e,t,n,i,o,r){const a=new xa,l=new n_,c=new Set,u=[],h=i.logarithmicDepthBuffer,p=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(I){return c.add(I),I===0?"uv":`uv${I}`}function m(I,y,R,z,G){const j=z.fog,K=G.geometry,X=I.isMeshStandardMaterial?z.environment:null,Z=(I.isMeshStandardMaterial?t:e).get(I.envMap||X),k=Z&&Z.mapping===Ao?Z.image.height:null,se=_[I.type];I.precision!==null&&(f=i.getMaxPrecision(I.precision),f!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",f,"instead."));const ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Me=ue!==void 0?ue.length:0;let Oe=0;K.morphAttributes.position!==void 0&&(Oe=1),K.morphAttributes.normal!==void 0&&(Oe=2),K.morphAttributes.color!==void 0&&(Oe=3);let tt,W,ee,me;if(se){const Qe=tn[se];tt=Qe.vertexShader,W=Qe.fragmentShader}else tt=I.vertexShader,W=I.fragmentShader,l.update(I),ee=l.getVertexShaderID(I),me=l.getFragmentShaderID(I);const oe=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Ye=G.isInstancedMesh===!0,Te=G.isBatchedMesh===!0,ct=!!I.map,rt=!!I.matcap,Fe=!!Z,b=!!I.aoMap,Vt=!!I.lightMap,Ge=!!I.bumpMap,Be=!!I.normalMap,xe=!!I.displacementMap,it=!!I.emissiveMap,ge=!!I.metalnessMap,A=!!I.roughnessMap,M=I.anisotropy>0,O=I.clearcoat>0,Y=I.dispersion>0,Q=I.iridescence>0,H=I.sheen>0,_e=I.transmission>0,re=M&&!!I.anisotropyMap,he=O&&!!I.clearcoatMap,ze=O&&!!I.clearcoatNormalMap,J=O&&!!I.clearcoatRoughnessMap,pe=Q&&!!I.iridescenceMap,Ae=Q&&!!I.iridescenceThicknessMap,Se=H&&!!I.sheenColorMap,de=H&&!!I.sheenRoughnessMap,ke=!!I.specularMap,De=!!I.specularColorMap,nt=!!I.specularIntensityMap,w=_e&&!!I.transmissionMap,ne=_e&&!!I.thicknessMap,B=!!I.gradientMap,q=!!I.alphaMap,le=I.alphaTest>0,ae=!!I.alphaHash,we=!!I.extensions;let at=Hn;I.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(at=s.toneMapping);const xt={shaderID:se,shaderType:I.type,shaderName:I.name,vertexShader:tt,fragmentShader:W,defines:I.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:f,batching:Te,batchingColor:Te&&G._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&G.instanceColor!==null,instancingMorph:Ye&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Nt,alphaToCoverage:!!I.alphaToCoverage,map:ct,matcap:rt,envMap:Fe,envMapMode:Fe&&Z.mapping,envMapCubeUVHeight:k,aoMap:b,lightMap:Vt,bumpMap:Ge,normalMap:Be,displacementMap:p&&xe,emissiveMap:it,normalMapObjectSpace:Be&&I.normalMapType===sh,normalMapTangentSpace:Be&&I.normalMapType===Oc,metalnessMap:ge,roughnessMap:A,anisotropy:M,anisotropyMap:re,clearcoat:O,clearcoatMap:he,clearcoatNormalMap:ze,clearcoatRoughnessMap:J,dispersion:Y,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Ae,sheen:H,sheenColorMap:Se,sheenRoughnessMap:de,specularMap:ke,specularColorMap:De,specularIntensityMap:nt,transmission:_e,transmissionMap:w,thicknessMap:ne,gradientMap:B,opaque:I.transparent===!1&&I.blending===Pi&&I.alphaToCoverage===!1,alphaMap:q,alphaTest:le,alphaHash:ae,combine:I.combine,mapUv:ct&&g(I.map.channel),aoMapUv:b&&g(I.aoMap.channel),lightMapUv:Vt&&g(I.lightMap.channel),bumpMapUv:Ge&&g(I.bumpMap.channel),normalMapUv:Be&&g(I.normalMap.channel),displacementMapUv:xe&&g(I.displacementMap.channel),emissiveMapUv:it&&g(I.emissiveMap.channel),metalnessMapUv:ge&&g(I.metalnessMap.channel),roughnessMapUv:A&&g(I.roughnessMap.channel),anisotropyMapUv:re&&g(I.anisotropyMap.channel),clearcoatMapUv:he&&g(I.clearcoatMap.channel),clearcoatNormalMapUv:ze&&g(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(I.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(I.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(I.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(I.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(I.sheenRoughnessMap.channel),specularMapUv:ke&&g(I.specularMap.channel),specularColorMapUv:De&&g(I.specularColorMap.channel),specularIntensityMapUv:nt&&g(I.specularIntensityMap.channel),transmissionMapUv:w&&g(I.transmissionMap.channel),thicknessMapUv:ne&&g(I.thicknessMap.channel),alphaMapUv:q&&g(I.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Be||M),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(ct||q),fog:!!j,useFog:I.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ve,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:I.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:ct&&I.map.isVideoTexture===!0&&He.getTransfer(I.map.colorSpace)===Je,decodeVideoTextureEmissive:it&&I.emissiveMap.isVideoTexture===!0&&He.getTransfer(I.emissiveMap.colorSpace)===Je,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===nn,flipSided:I.side===wt,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:we&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&I.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function d(I){const y=[];if(I.shaderID?y.push(I.shaderID):(y.push(I.customVertexShaderID),y.push(I.customFragmentShaderID)),I.defines!==void 0)for(const R in I.defines)y.push(R),y.push(I.defines[R]);return I.isRawShaderMaterial===!1&&(T(y,I),v(y,I),y.push(s.outputColorSpace)),y.push(I.customProgramCacheKey),y.join()}function T(I,y){I.push(y.precision),I.push(y.outputColorSpace),I.push(y.envMapMode),I.push(y.envMapCubeUVHeight),I.push(y.mapUv),I.push(y.alphaMapUv),I.push(y.lightMapUv),I.push(y.aoMapUv),I.push(y.bumpMapUv),I.push(y.normalMapUv),I.push(y.displacementMapUv),I.push(y.emissiveMapUv),I.push(y.metalnessMapUv),I.push(y.roughnessMapUv),I.push(y.anisotropyMapUv),I.push(y.clearcoatMapUv),I.push(y.clearcoatNormalMapUv),I.push(y.clearcoatRoughnessMapUv),I.push(y.iridescenceMapUv),I.push(y.iridescenceThicknessMapUv),I.push(y.sheenColorMapUv),I.push(y.sheenRoughnessMapUv),I.push(y.specularMapUv),I.push(y.specularColorMapUv),I.push(y.specularIntensityMapUv),I.push(y.transmissionMapUv),I.push(y.thicknessMapUv),I.push(y.combine),I.push(y.fogExp2),I.push(y.sizeAttenuation),I.push(y.morphTargetsCount),I.push(y.morphAttributeCount),I.push(y.numDirLights),I.push(y.numPointLights),I.push(y.numSpotLights),I.push(y.numSpotLightMaps),I.push(y.numHemiLights),I.push(y.numRectAreaLights),I.push(y.numDirLightShadows),I.push(y.numPointLightShadows),I.push(y.numSpotLightShadows),I.push(y.numSpotLightShadowsWithMaps),I.push(y.numLightProbes),I.push(y.shadowMapType),I.push(y.toneMapping),I.push(y.numClippingPlanes),I.push(y.numClipIntersection),I.push(y.depthPacking)}function v(I,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),I.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),I.push(a.mask)}function E(I){const y=_[I.type];let R;if(y){const z=tn[y];R=Qh.clone(z.uniforms)}else R=I.uniforms;return R}function C(I,y){let R;for(let z=0,G=u.length;z<G;z++){const j=u[z];if(j.cacheKey===y){R=j,++R.usedTimes;break}}return R===void 0&&(R=new e_(s,y,I,o),u.push(R)),R}function N(I){if(--I.usedTimes===0){const y=u.indexOf(I);u[y]=u[u.length-1],u.pop(),I.destroy()}}function S(I){l.remove(I)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:C,releaseProgram:N,releaseShaderCache:S,programs:u,dispose:U}}function o_(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:o}}function r_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function oc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function rc(){const s=[];let e=0;const t=[],n=[],i=[];function o(){e=0,t.length=0,n.length=0,i.length=0}function r(h,p,f,_,g,m){let d=s[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=f,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=m),e++,d}function a(h,p,f,_,g,m){const d=r(h,p,f,_,g,m);f.transmission>0?n.push(d):f.transparent===!0?i.push(d):t.push(d)}function l(h,p,f,_,g,m){const d=r(h,p,f,_,g,m);f.transmission>0?n.unshift(d):f.transparent===!0?i.unshift(d):t.unshift(d)}function c(h,p){t.length>1&&t.sort(h||r_),n.length>1&&n.sort(p||oc),i.length>1&&i.sort(p||oc)}function u(){for(let h=e,p=s.length;h<p;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:u,sort:c}}function a_(){let s=new WeakMap;function e(n,i){const o=s.get(n);let r;return o===void 0?(r=new rc,s.set(n,[r])):i>=o.length?(r=new rc,o.push(r)):r=o[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function l_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Le};break;case"SpotLight":t={position:new L,direction:new L,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function c_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let u_=0;function h_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function p_(s){const e=new l_,t=c_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,o=new Re,r=new Re;function a(c){let u=0,h=0,p=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,_=0,g=0,m=0,d=0,T=0,v=0,E=0,C=0,N=0,S=0;c.sort(h_);for(let I=0,y=c.length;I<y;I++){const R=c[I],z=R.color,G=R.intensity,j=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=z.r*G,h+=z.g*G,p+=z.b*G;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],G);S++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,k=t.get(R);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=R.shadow.matrix,T++}n.directional[f]=X,f++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(z).multiplyScalar(G),X.distance=j,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[g]=X;const Z=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,Z.updateMatrices(R),R.castShadow&&N++),n.spotLightMatrix[g]=Z.matrix,R.castShadow){const k=t.get(R);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=K,E++}g++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(z).multiplyScalar(G),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=X,m++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const Z=R.shadow,k=t.get(R);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=R.shadow.matrix,v++}n.point[_]=X,_++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(G),X.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[d]=X,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const U=n.hash;(U.directionalLength!==f||U.pointLength!==_||U.spotLength!==g||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==T||U.numPointShadows!==v||U.numSpotShadows!==E||U.numSpotMaps!==C||U.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=E+C-N,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=S,U.directionalLength=f,U.pointLength=_,U.spotLength=g,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=T,U.numPointShadows=v,U.numSpotShadows=E,U.numSpotMaps=C,U.numLightProbes=S,n.version=u_++)}function l(c,u){let h=0,p=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const v=c[d];if(v.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),h++}else if(v.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),r.identity(),o.copy(v.matrixWorld),o.premultiply(m),r.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),_++}else if(v.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function ac(s){const e=new p_(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function r(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function d_(s){let e=new WeakMap;function t(i,o=0){const r=e.get(i);let a;return r===void 0?(a=new ac(s),e.set(i,[a])):o>=r.length?(a=new ac(s),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function __(s,e,t){let n=new Ia;const i=new ye,o=new ye,r=new qe,a=new dp({depthPacking:ih}),l=new fp,c={},u=t.maxTextureSize,h={[Tn]:wt,[wt]:Tn,[nn]:nn},p=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:f_,fragmentShader:m_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ot(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let d=this.type;this.render=function(N,S,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const I=s.getRenderTarget(),y=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),z=s.state;z.setBlending(kn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=d!==xn&&this.type===xn,j=d===xn&&this.type!==xn;for(let K=0,X=N.length;K<X;K++){const Z=N[K],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const se=k.getFrameExtents();if(i.multiply(se),o.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/se.x),i.x=o.x*se.x,k.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/se.y),i.y=o.y*se.y,k.mapSize.y=o.y)),k.map===null||G===!0||j===!0){const Me=this.type!==xn?{minFilter:St,magFilter:St}:{};k.map!==null&&k.map.dispose(),k.map=new ri(i.x,i.y,Me),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const ue=k.getViewportCount();for(let Me=0;Me<ue;Me++){const Oe=k.getViewport(Me);r.set(o.x*Oe.x,o.y*Oe.y,o.x*Oe.z,o.y*Oe.w),z.viewport(r),k.updateMatrices(Z,Me),n=k.getFrustum(),E(S,U,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===xn&&T(k,U),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(I,y,R)};function T(N,S){const U=e.update(g);p.defines.VSM_SAMPLES!==N.blurSamples&&(p.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ri(i.x,i.y)),p.uniforms.shadow_pass.value=N.map.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(S,null,U,p,g,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(S,null,U,f,g,null)}function v(N,S,U,I){let y=null;const R=U.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(R!==void 0)y=R;else if(y=U.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const z=y.uuid,G=S.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let K=j[G];K===void 0&&(K=y.clone(),j[G]=K,S.addEventListener("dispose",C)),y=K}if(y.visible=S.visible,y.wireframe=S.wireframe,I===xn?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:h[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=s.properties.get(y);z.light=U}return y}function E(N,S,U,I,y){if(N.visible===!1)return;if(N.layers.test(S.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&y===xn)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,N.matrixWorld);const G=e.update(N),j=N.material;if(Array.isArray(j)){const K=G.groups;for(let X=0,Z=K.length;X<Z;X++){const k=K[X],se=j[k.materialIndex];if(se&&se.visible){const ue=v(N,se,I,y);N.onBeforeShadow(s,N,S,U,G,ue,k),s.renderBufferDirect(U,null,G,ue,N,k),N.onAfterShadow(s,N,S,U,G,ue,k)}}}else if(j.visible){const K=v(N,j,I,y);N.onBeforeShadow(s,N,S,U,G,K,null),s.renderBufferDirect(U,null,G,K,N,null),N.onAfterShadow(s,N,S,U,G,K,null)}}const z=N.children;for(let G=0,j=z.length;G<j;G++)E(z[G],S,U,I,y)}function C(N){N.target.removeEventListener("dispose",C);for(const U in c){const I=c[U],y=N.target.uuid;y in I&&(I[y].dispose(),delete I[y])}}}const g_={[Er]:Ir,[Ar]:Sr,[vr]:br,[Gi]:Tr,[Ir]:Er,[Sr]:Ar,[br]:vr,[Tr]:Gi};function M_(s,e){function t(){let w=!1;const ne=new qe;let B=null;const q=new qe(0,0,0,0);return{setMask:function(le){B!==le&&!w&&(s.colorMask(le,le,le,le),B=le)},setLocked:function(le){w=le},setClear:function(le,ae,we,at,xt){xt===!0&&(le*=at,ae*=at,we*=at),ne.set(le,ae,we,at),q.equals(ne)===!1&&(s.clearColor(le,ae,we,at),q.copy(ne))},reset:function(){w=!1,B=null,q.set(-1,0,0,0)}}}function n(){let w=!1,ne=!1,B=null,q=null,le=null;return{setReversed:function(ae){if(ne!==ae){const we=e.get("EXT_clip_control");ne?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT);const at=le;le=null,this.setClear(at)}ne=ae},getReversed:function(){return ne},setTest:function(ae){ae?oe(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(ae){B!==ae&&!w&&(s.depthMask(ae),B=ae)},setFunc:function(ae){if(ne&&(ae=g_[ae]),q!==ae){switch(ae){case Er:s.depthFunc(s.NEVER);break;case Ir:s.depthFunc(s.ALWAYS);break;case Ar:s.depthFunc(s.LESS);break;case Gi:s.depthFunc(s.LEQUAL);break;case vr:s.depthFunc(s.EQUAL);break;case Tr:s.depthFunc(s.GEQUAL);break;case Sr:s.depthFunc(s.GREATER);break;case br:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}q=ae}},setLocked:function(ae){w=ae},setClear:function(ae){le!==ae&&(ne&&(ae=1-ae),s.clearDepth(ae),le=ae)},reset:function(){w=!1,B=null,q=null,le=null,ne=!1}}}function i(){let w=!1,ne=null,B=null,q=null,le=null,ae=null,we=null,at=null,xt=null;return{setTest:function(Qe){w||(Qe?oe(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(Qe){ne!==Qe&&!w&&(s.stencilMask(Qe),ne=Qe)},setFunc:function(Qe,Wt,pn){(B!==Qe||q!==Wt||le!==pn)&&(s.stencilFunc(Qe,Wt,pn),B=Qe,q=Wt,le=pn)},setOp:function(Qe,Wt,pn){(ae!==Qe||we!==Wt||at!==pn)&&(s.stencilOp(Qe,Wt,pn),ae=Qe,we=Wt,at=pn)},setLocked:function(Qe){w=Qe},setClear:function(Qe){xt!==Qe&&(s.clearStencil(Qe),xt=Qe)},reset:function(){w=!1,ne=null,B=null,q=null,le=null,ae=null,we=null,at=null,xt=null}}}const o=new t,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,f=[],_=null,g=!1,m=null,d=null,T=null,v=null,E=null,C=null,N=null,S=new Le(0,0,0),U=0,I=!1,y=null,R=null,z=null,G=null,j=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=Z>=2);let se=null,ue={};const Me=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),tt=new qe().fromArray(Me),W=new qe().fromArray(Oe);function ee(w,ne,B,q){const le=new Uint8Array(4),ae=s.createTexture();s.bindTexture(w,ae),s.texParameteri(w,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(w,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let we=0;we<B;we++)w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,q,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(ne+we,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return ae}const me={};me[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),oe(s.DEPTH_TEST),r.setFunc(Gi),Ge(!1),Be(Ba),oe(s.CULL_FACE),b(kn);function oe(w){u[w]!==!0&&(s.enable(w),u[w]=!0)}function ve(w){u[w]!==!1&&(s.disable(w),u[w]=!1)}function Ye(w,ne){return h[w]!==ne?(s.bindFramebuffer(w,ne),h[w]=ne,w===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ne),w===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(w,ne){let B=f,q=!1;if(w){B=p.get(ne),B===void 0&&(B=[],p.set(ne,B));const le=w.textures;if(B.length!==le.length||B[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,we=le.length;ae<we;ae++)B[ae]=s.COLOR_ATTACHMENT0+ae;B.length=le.length,q=!0}}else B[0]!==s.BACK&&(B[0]=s.BACK,q=!0);q&&s.drawBuffers(B)}function ct(w){return _!==w?(s.useProgram(w),_=w,!0):!1}const rt={[ni]:s.FUNC_ADD,[bu]:s.FUNC_SUBTRACT,[Nu]:s.FUNC_REVERSE_SUBTRACT};rt[Lu]=s.MIN,rt[Ru]=s.MAX;const Fe={[wu]:s.ZERO,[Cu]:s.ONE,[Du]:s.SRC_COLOR,[xr]:s.SRC_ALPHA,[Gu]:s.SRC_ALPHA_SATURATE,[Vu]:s.DST_COLOR,[Uu]:s.DST_ALPHA,[Pu]:s.ONE_MINUS_SRC_COLOR,[yr]:s.ONE_MINUS_SRC_ALPHA,[Fu]:s.ONE_MINUS_DST_COLOR,[Ou]:s.ONE_MINUS_DST_ALPHA,[Bu]:s.CONSTANT_COLOR,[ku]:s.ONE_MINUS_CONSTANT_COLOR,[Hu]:s.CONSTANT_ALPHA,[zu]:s.ONE_MINUS_CONSTANT_ALPHA};function b(w,ne,B,q,le,ae,we,at,xt,Qe){if(w===kn){g===!0&&(ve(s.BLEND),g=!1);return}if(g===!1&&(oe(s.BLEND),g=!0),w!==Su){if(w!==m||Qe!==I){if((d!==ni||E!==ni)&&(s.blendEquation(s.FUNC_ADD),d=ni,E=ni),Qe)switch(w){case Pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ka:s.blendFunc(s.ONE,s.ONE);break;case Ha:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case za:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ka:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ha:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case za:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}T=null,v=null,C=null,N=null,S.set(0,0,0),U=0,m=w,I=Qe}return}le=le||ne,ae=ae||B,we=we||q,(ne!==d||le!==E)&&(s.blendEquationSeparate(rt[ne],rt[le]),d=ne,E=le),(B!==T||q!==v||ae!==C||we!==N)&&(s.blendFuncSeparate(Fe[B],Fe[q],Fe[ae],Fe[we]),T=B,v=q,C=ae,N=we),(at.equals(S)===!1||xt!==U)&&(s.blendColor(at.r,at.g,at.b,xt),S.copy(at),U=xt),m=w,I=!1}function Vt(w,ne){w.side===nn?ve(s.CULL_FACE):oe(s.CULL_FACE);let B=w.side===wt;ne&&(B=!B),Ge(B),w.blending===Pi&&w.transparent===!1?b(kn):b(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),r.setFunc(w.depthFunc),r.setTest(w.depthTest),r.setMask(w.depthWrite),o.setMask(w.colorWrite);const q=w.stencilWrite;a.setTest(q),q&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),it(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(w){y!==w&&(w?s.frontFace(s.CW):s.frontFace(s.CCW),y=w)}function Be(w){w!==Au?(oe(s.CULL_FACE),w!==R&&(w===Ba?s.cullFace(s.BACK):w===vu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),R=w}function xe(w){w!==z&&(X&&s.lineWidth(w),z=w)}function it(w,ne,B){w?(oe(s.POLYGON_OFFSET_FILL),(G!==ne||j!==B)&&(s.polygonOffset(ne,B),G=ne,j=B)):ve(s.POLYGON_OFFSET_FILL)}function ge(w){w?oe(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function A(w){w===void 0&&(w=s.TEXTURE0+K-1),se!==w&&(s.activeTexture(w),se=w)}function M(w,ne,B){B===void 0&&(se===null?B=s.TEXTURE0+K-1:B=se);let q=ue[B];q===void 0&&(q={type:void 0,texture:void 0},ue[B]=q),(q.type!==w||q.texture!==ne)&&(se!==B&&(s.activeTexture(B),se=B),s.bindTexture(w,ne||me[w]),q.type=w,q.texture=ne)}function O(){const w=ue[se];w!==void 0&&w.type!==void 0&&(s.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function H(){try{s.texSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function _e(){try{s.texSubImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function he(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ze(){try{s.texStorage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function J(){try{s.texStorage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function pe(){try{s.texImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Se(w){tt.equals(w)===!1&&(s.scissor(w.x,w.y,w.z,w.w),tt.copy(w))}function de(w){W.equals(w)===!1&&(s.viewport(w.x,w.y,w.z,w.w),W.copy(w))}function ke(w,ne){let B=c.get(ne);B===void 0&&(B=new WeakMap,c.set(ne,B));let q=B.get(w);q===void 0&&(q=s.getUniformBlockIndex(ne,w.name),B.set(w,q))}function De(w,ne){const q=c.get(ne).get(w);l.get(ne)!==q&&(s.uniformBlockBinding(ne,q,w.__bindingPointIndex),l.set(ne,q))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},se=null,ue={},h={},p=new WeakMap,f=[],_=null,g=!1,m=null,d=null,T=null,v=null,E=null,C=null,N=null,S=new Le(0,0,0),U=0,I=!1,y=null,R=null,z=null,G=null,j=null,tt.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:oe,disable:ve,bindFramebuffer:Ye,drawBuffers:Te,useProgram:ct,setBlending:b,setMaterial:Vt,setFlipSided:Ge,setCullFace:Be,setLineWidth:xe,setPolygonOffset:it,setScissorTest:ge,activeTexture:A,bindTexture:M,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Ae,updateUBOMapping:ke,uniformBlockBinding:De,texStorage2D:ze,texStorage3D:J,texSubImage2D:H,texSubImage3D:_e,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Se,viewport:de,reset:nt}}function x_(s,e,t,n,i,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return f?new OffscreenCanvas(A,M):As("canvas")}function g(A,M,O){let Y=1;const Q=ge(A);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const H=Math.floor(Y*Q.width),_e=Math.floor(Y*Q.height);h===void 0&&(h=_(H,_e));const re=M?_(H,_e):h;return re.width=H,re.height=_e,re.getContext("2d").drawImage(A,0,0,H,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+H+"x"+_e+")."),re}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,M,O,Y,Q=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let H=M;if(M===s.RED&&(O===s.FLOAT&&(H=s.R32F),O===s.HALF_FLOAT&&(H=s.R16F),O===s.UNSIGNED_BYTE&&(H=s.R8)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.R8UI),O===s.UNSIGNED_SHORT&&(H=s.R16UI),O===s.UNSIGNED_INT&&(H=s.R32UI),O===s.BYTE&&(H=s.R8I),O===s.SHORT&&(H=s.R16I),O===s.INT&&(H=s.R32I)),M===s.RG&&(O===s.FLOAT&&(H=s.RG32F),O===s.HALF_FLOAT&&(H=s.RG16F),O===s.UNSIGNED_BYTE&&(H=s.RG8)),M===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RG8UI),O===s.UNSIGNED_SHORT&&(H=s.RG16UI),O===s.UNSIGNED_INT&&(H=s.RG32UI),O===s.BYTE&&(H=s.RG8I),O===s.SHORT&&(H=s.RG16I),O===s.INT&&(H=s.RG32I)),M===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RGB8UI),O===s.UNSIGNED_SHORT&&(H=s.RGB16UI),O===s.UNSIGNED_INT&&(H=s.RGB32UI),O===s.BYTE&&(H=s.RGB8I),O===s.SHORT&&(H=s.RGB16I),O===s.INT&&(H=s.RGB32I)),M===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),O===s.UNSIGNED_INT&&(H=s.RGBA32UI),O===s.BYTE&&(H=s.RGBA8I),O===s.SHORT&&(H=s.RGBA16I),O===s.INT&&(H=s.RGBA32I)),M===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),M===s.RGBA){const _e=Q?Mo:He.getTransfer(Y);O===s.FLOAT&&(H=s.RGBA32F),O===s.HALF_FLOAT&&(H=s.RGBA16F),O===s.UNSIGNED_BYTE&&(H=_e===Je?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function E(A,M){let O;return A?M===null||M===oi||M===zi?O=s.DEPTH24_STENCIL8:M===Zt?O=s.DEPTH32F_STENCIL8:M===ys&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===oi||M===zi?O=s.DEPTH_COMPONENT24:M===Zt?O=s.DEPTH_COMPONENT32F:M===ys&&(O=s.DEPTH_COMPONENT16),O}function C(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==St&&A.minFilter!==Ut?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function N(A){const M=A.target;M.removeEventListener("dispose",N),U(M),M.isVideoTexture&&u.delete(M)}function S(A){const M=A.target;M.removeEventListener("dispose",S),y(M)}function U(A){const M=n.get(A);if(M.__webglInit===void 0)return;const O=A.source,Y=p.get(O);if(Y){const Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(A),Object.keys(Y).length===0&&p.delete(O)}n.remove(A)}function I(A){const M=n.get(A);s.deleteTexture(M.__webglTexture);const O=A.source,Y=p.get(O);delete Y[M.__cacheKey],r.memory.textures--}function y(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Q=0;Q<M.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(M.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)s.deleteFramebuffer(M.__webglFramebuffer[Y]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=A.textures;for(let Y=0,Q=O.length;Y<Q;Y++){const H=n.get(O[Y]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),r.memory.textures--),n.remove(O[Y])}n.remove(A)}let R=0;function z(){R=0}function G(){const A=R;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),R+=1,A}function j(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function K(A,M){const O=n.get(A);if(A.isVideoTexture&&xe(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,A,M);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function X(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){W(O,A,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function Z(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){W(O,A,M);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function k(A,M){const O=n.get(A);if(A.version>0&&O.__version!==A.version){ee(O,A,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}const se={[Hi]:s.REPEAT,[Fn]:s.CLAMP_TO_EDGE,[go]:s.MIRRORED_REPEAT},ue={[St]:s.NEAREST,[Tc]:s.NEAREST_MIPMAP_NEAREST,[ms]:s.NEAREST_MIPMAP_LINEAR,[Ut]:s.LINEAR,[co]:s.LINEAR_MIPMAP_NEAREST,[En]:s.LINEAR_MIPMAP_LINEAR},Me={[oh]:s.NEVER,[hh]:s.ALWAYS,[rh]:s.LESS,[Vc]:s.LEQUAL,[ah]:s.EQUAL,[uh]:s.GEQUAL,[lh]:s.GREATER,[ch]:s.NOTEQUAL};function Oe(A,M){if(M.type===Zt&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ut||M.magFilter===co||M.magFilter===ms||M.magFilter===En||M.minFilter===Ut||M.minFilter===co||M.minFilter===ms||M.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,se[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,se[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,se[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ue[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===St||M.minFilter!==ms&&M.minFilter!==En||M.type===Zt&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function tt(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N));const Y=M.source;let Q=p.get(Y);Q===void 0&&(Q={},p.set(Y,Q));const H=j(M);if(H!==A.__cacheKey){Q[H]===void 0&&(Q[H]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,O=!0),Q[H].usedTimes++;const _e=Q[A.__cacheKey];_e!==void 0&&(Q[A.__cacheKey].usedTimes--,_e.usedTimes===0&&I(M)),A.__cacheKey=H,A.__webglTexture=Q[H].texture}return O}function W(A,M,O){let Y=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=s.TEXTURE_3D);const Q=tt(A,M),H=M.source;t.bindTexture(Y,A.__webglTexture,s.TEXTURE0+O);const _e=n.get(H);if(H.version!==_e.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);const re=He.getPrimaries(He.workingColorSpace),he=M.colorSpace===On?null:He.getPrimaries(M.colorSpace),ze=M.colorSpace===On||re===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let J=g(M.image,!1,i.maxTextureSize);J=it(M,J);const pe=o.convert(M.format,M.colorSpace),Ae=o.convert(M.type);let Se=v(M.internalFormat,pe,Ae,M.colorSpace,M.isVideoTexture);Oe(Y,M);let de;const ke=M.mipmaps,De=M.isVideoTexture!==!0,nt=_e.__version===void 0||Q===!0,w=H.dataReady,ne=C(M,J);if(M.isDepthTexture)Se=E(M.format===Wi,M.type),nt&&(De?t.texStorage2D(s.TEXTURE_2D,1,Se,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Se,J.width,J.height,0,pe,Ae,null));else if(M.isDataTexture)if(ke.length>0){De&&nt&&t.texStorage2D(s.TEXTURE_2D,ne,Se,ke[0].width,ke[0].height);for(let B=0,q=ke.length;B<q;B++)de=ke[B],De?w&&t.texSubImage2D(s.TEXTURE_2D,B,0,0,de.width,de.height,pe,Ae,de.data):t.texImage2D(s.TEXTURE_2D,B,Se,de.width,de.height,0,pe,Ae,de.data);M.generateMipmaps=!1}else De?(nt&&t.texStorage2D(s.TEXTURE_2D,ne,Se,J.width,J.height),w&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,pe,Ae,J.data)):t.texImage2D(s.TEXTURE_2D,0,Se,J.width,J.height,0,pe,Ae,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){De&&nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Se,ke[0].width,ke[0].height,J.depth);for(let B=0,q=ke.length;B<q;B++)if(de=ke[B],M.format!==zt)if(pe!==null)if(De){if(w)if(M.layerUpdates.size>0){const le=Vl(de.width,de.height,M.format,M.type);for(const ae of M.layerUpdates){const we=de.data.subarray(ae*le/de.data.BYTES_PER_ELEMENT,(ae+1)*le/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,ae,de.width,de.height,1,pe,we)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,de.width,de.height,J.depth,pe,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,B,Se,de.width,de.height,J.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?w&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,de.width,de.height,J.depth,pe,Ae,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,B,Se,de.width,de.height,J.depth,0,pe,Ae,de.data)}else{De&&nt&&t.texStorage2D(s.TEXTURE_2D,ne,Se,ke[0].width,ke[0].height);for(let B=0,q=ke.length;B<q;B++)de=ke[B],M.format!==zt?pe!==null?De?w&&t.compressedTexSubImage2D(s.TEXTURE_2D,B,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(s.TEXTURE_2D,B,Se,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?w&&t.texSubImage2D(s.TEXTURE_2D,B,0,0,de.width,de.height,pe,Ae,de.data):t.texImage2D(s.TEXTURE_2D,B,Se,de.width,de.height,0,pe,Ae,de.data)}else if(M.isDataArrayTexture)if(De){if(nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Se,J.width,J.height,J.depth),w)if(M.layerUpdates.size>0){const B=Vl(J.width,J.height,M.format,M.type);for(const q of M.layerUpdates){const le=J.data.subarray(q*B/J.data.BYTES_PER_ELEMENT,(q+1)*B/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,pe,Ae,le)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,pe,Ae,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,J.width,J.height,J.depth,0,pe,Ae,J.data);else if(M.isData3DTexture)De?(nt&&t.texStorage3D(s.TEXTURE_3D,ne,Se,J.width,J.height,J.depth),w&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,pe,Ae,J.data)):t.texImage3D(s.TEXTURE_3D,0,Se,J.width,J.height,J.depth,0,pe,Ae,J.data);else if(M.isFramebufferTexture){if(nt)if(De)t.texStorage2D(s.TEXTURE_2D,ne,Se,J.width,J.height);else{let B=J.width,q=J.height;for(let le=0;le<ne;le++)t.texImage2D(s.TEXTURE_2D,le,Se,B,q,0,pe,Ae,null),B>>=1,q>>=1}}else if(ke.length>0){if(De&&nt){const B=ge(ke[0]);t.texStorage2D(s.TEXTURE_2D,ne,Se,B.width,B.height)}for(let B=0,q=ke.length;B<q;B++)de=ke[B],De?w&&t.texSubImage2D(s.TEXTURE_2D,B,0,0,pe,Ae,de):t.texImage2D(s.TEXTURE_2D,B,Se,pe,Ae,de);M.generateMipmaps=!1}else if(De){if(nt){const B=ge(J);t.texStorage2D(s.TEXTURE_2D,ne,Se,B.width,B.height)}w&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,Ae,J)}else t.texImage2D(s.TEXTURE_2D,0,Se,pe,Ae,J);m(M)&&d(Y),_e.__version=H.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ee(A,M,O){if(M.image.length!==6)return;const Y=tt(A,M),Q=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const H=n.get(Q);if(Q.version!==H.__version||Y===!0){t.activeTexture(s.TEXTURE0+O);const _e=He.getPrimaries(He.workingColorSpace),re=M.colorSpace===On?null:He.getPrimaries(M.colorSpace),he=M.colorSpace===On||_e===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ze=M.isCompressedTexture||M.image[0].isCompressedTexture,J=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let q=0;q<6;q++)!ze&&!J?pe[q]=g(M.image[q],!0,i.maxCubemapSize):pe[q]=J?M.image[q].image:M.image[q],pe[q]=it(M,pe[q]);const Ae=pe[0],Se=o.convert(M.format,M.colorSpace),de=o.convert(M.type),ke=v(M.internalFormat,Se,de,M.colorSpace),De=M.isVideoTexture!==!0,nt=H.__version===void 0||Y===!0,w=Q.dataReady;let ne=C(M,Ae);Oe(s.TEXTURE_CUBE_MAP,M);let B;if(ze){De&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,ke,Ae.width,Ae.height);for(let q=0;q<6;q++){B=pe[q].mipmaps;for(let le=0;le<B.length;le++){const ae=B[le];M.format!==zt?Se!==null?De?w&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ae.width,ae.height,Se,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,ke,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?w&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ae.width,ae.height,Se,de,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,ke,ae.width,ae.height,0,Se,de,ae.data)}}}else{if(B=M.mipmaps,De&&nt){B.length>0&&ne++;const q=ge(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,ke,q.width,q.height)}for(let q=0;q<6;q++)if(J){De?w&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,pe[q].width,pe[q].height,Se,de,pe[q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ke,pe[q].width,pe[q].height,0,Se,de,pe[q].data);for(let le=0;le<B.length;le++){const we=B[le].image[q].image;De?w&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,we.width,we.height,Se,de,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,ke,we.width,we.height,0,Se,de,we.data)}}else{De?w&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Se,de,pe[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ke,Se,de,pe[q]);for(let le=0;le<B.length;le++){const ae=B[le];De?w&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Se,de,ae.image[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,ke,Se,de,ae.image[q])}}}m(M)&&d(s.TEXTURE_CUBE_MAP),H.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function me(A,M,O,Y,Q,H){const _e=o.convert(O.format,O.colorSpace),re=o.convert(O.type),he=v(O.internalFormat,_e,re,O.colorSpace),ze=n.get(M),J=n.get(O);if(J.__renderTarget=M,!ze.__hasExternalTextures){const pe=Math.max(1,M.width>>H),Ae=Math.max(1,M.height>>H);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,H,he,pe,Ae,M.depth,0,_e,re,null):t.texImage2D(Q,H,he,pe,Ae,0,_e,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Be(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,J.__webglTexture,0,Ge(M)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,J.__webglTexture,H),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(A,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const Y=M.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,H=E(M.stencilBuffer,Q),_e=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=Ge(M);Be(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,H,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,H,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,H,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,A)}else{const Y=M.textures;for(let Q=0;Q<Y.length;Q++){const H=Y[Q],_e=o.convert(H.format,H.colorSpace),re=o.convert(H.type),he=v(H.internalFormat,_e,re,H.colorSpace),ze=Ge(M);O&&Be(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,he,M.width,M.height):Be(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ze,he,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,he,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const Q=Y.__webglTexture,H=Ge(M);if(M.depthTexture.format===Ui)Be(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Wi)Be(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ye(A){const M=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Y}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ve(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=s.createRenderbuffer(),oe(M.__webglDepthbuffer[Y],A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=M.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,H)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),oe(M.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(A,M,O){const Y=n.get(A);M!==void 0&&me(Y.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ye(A)}function ct(A){const M=A.texture,O=n.get(A),Y=n.get(M);A.addEventListener("dispose",S);const Q=A.textures,H=A.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=M.version,r.memory.textures++),H){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let he=0;he<M.mipmaps.length;he++)O.__webglFramebuffer[re][he]=s.createFramebuffer()}else O.__webglFramebuffer[re]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)O.__webglFramebuffer[re]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(_e)for(let re=0,he=Q.length;re<he;re++){const ze=n.get(Q[re]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&Be(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<Q.length;re++){const he=Q[re];O.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const ze=o.convert(he.format,he.colorSpace),J=o.convert(he.type),pe=v(he.internalFormat,ze,J,he.colorSpace,A.isXRRenderTarget===!0),Ae=Ge(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,pe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,O.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)me(O.__webglFramebuffer[re][he],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else me(O.__webglFramebuffer[re],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(M)&&d(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,he=Q.length;re<he;re++){const ze=Q[re],J=n.get(ze);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),Oe(s.TEXTURE_2D,ze),me(O.__webglFramebuffer,A,ze,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,0),m(ze)&&d(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),Oe(re,M),M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)me(O.__webglFramebuffer[he],A,M,s.COLOR_ATTACHMENT0,re,he);else me(O.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,re,0);m(M)&&d(re),t.unbindTexture()}A.depthBuffer&&Ye(A)}function rt(A){const M=A.textures;for(let O=0,Y=M.length;O<Y;O++){const Q=M[O];if(m(Q)){const H=T(A),_e=n.get(Q).__webglTexture;t.bindTexture(H,_e),d(H),t.unbindTexture()}}}const Fe=[],b=[];function Vt(A){if(A.samples>0){if(Be(A)===!1){const M=A.textures,O=A.width,Y=A.height;let Q=s.COLOR_BUFFER_BIT;const H=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(A),re=M.length>1;if(re)for(let he=0;he<M.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let he=0;he<M.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[he]);const ze=n.get(M[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ze,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,s.NEAREST),l===!0&&(Fe.length=0,b.length=0,Fe.push(s.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Fe.push(H),b.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,b)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let he=0;he<M.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,_e.__webglColorRenderbuffer[he]);const ze=n.get(M[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ge(A){return Math.min(i.maxSamples,A.samples)}function Be(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xe(A){const M=r.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function it(A,M){const O=A.colorSpace,Y=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Nt&&O!==On&&(He.getTransfer(O)===Je?(Y!==zt||Q!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function ge(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=Te,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Be}function y_(s,e){function t(n,i=On){let o;const r=He.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===pa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===da)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sc)return s.BYTE;if(n===bc)return s.SHORT;if(n===ys)return s.UNSIGNED_SHORT;if(n===ha)return s.INT;if(n===oi)return s.UNSIGNED_INT;if(n===Zt)return s.FLOAT;if(n===Ss)return s.HALF_FLOAT;if(n===Lc)return s.ALPHA;if(n===Rc)return s.RGB;if(n===zt)return s.RGBA;if(n===wc)return s.LUMINANCE;if(n===Cc)return s.LUMINANCE_ALPHA;if(n===Ui)return s.DEPTH_COMPONENT;if(n===Wi)return s.DEPTH_STENCIL;if(n===fa)return s.RED;if(n===ma)return s.RED_INTEGER;if(n===Dc)return s.RG;if(n===_a)return s.RG_INTEGER;if(n===ga)return s.RGBA_INTEGER;if(n===uo||n===ho||n===po||n===fo)if(r===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rr||n===wr||n===Cr||n===Dr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Rr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pr||n===Ur||n===Or)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Pr||n===Ur)return r===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Or)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vr||n===Fr||n===Gr||n===Br||n===kr||n===Hr||n===zr||n===Wr||n===Xr||n===Yr||n===qr||n===jr||n===Kr||n===Qr)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Vr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Br)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qr)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===Zr||n===$r)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===mo)return r===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$r)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pc||n===Jr||n===ea||n===ta)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===mo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Jr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ta)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new _t,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zn({vertexShader:E_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new To(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v_ extends ai{constructor(e,t){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,f=null,_=null;const g=new A_,m=t.getContextAttributes();let d=null,T=null;const v=[],E=[],C=new ye;let N=null;const S=new Tt;S.viewport=new qe;const U=new Tt;U.viewport=new qe;const I=[S,U],y=new Pp;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=v[W];return ee===void 0&&(ee=new Jo,v[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=v[W];return ee===void 0&&(ee=new Jo,v[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=v[W];return ee===void 0&&(ee=new Jo,v[W]=ee),ee.getHandSpace()};function G(W){const ee=E.indexOf(W.inputSource);if(ee===-1)return;const me=v[ee];me!==void 0&&(me.update(W.inputSource,W.frame,c||r),me.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",K);for(let W=0;W<v.length;W++){const ee=E[W];ee!==null&&(E[W]=null,v[W].disconnect(ee))}R=null,z=null,g.reset(),e.setRenderTarget(d),f=null,p=null,h=null,i=null,T=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",j),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,oe=null,ve=null;m.depth&&(ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=m.stencil?Wi:Ui,oe=m.stencil?zi:oi);const Ye={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:o};h=new XRWebGLBinding(i,t),p=h.createProjectionLayer(Ye),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new ri(p.textureWidth,p.textureHeight,{format:zt,type:Sn,depthTexture:new eu(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}else{const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new ri(f.framebufferWidth,f.framebufferHeight,{format:zt,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(W){for(let ee=0;ee<W.removed.length;ee++){const me=W.removed[ee],oe=E.indexOf(me);oe>=0&&(E[oe]=null,v[oe].disconnect(me))}for(let ee=0;ee<W.added.length;ee++){const me=W.added[ee];let oe=E.indexOf(me);if(oe===-1){for(let Ye=0;Ye<v.length;Ye++)if(Ye>=E.length){E.push(me),oe=Ye;break}else if(E[Ye]===null){E[Ye]=me,oe=Ye;break}if(oe===-1)break}const ve=v[oe];ve&&ve.connect(me)}}const X=new L,Z=new L;function k(W,ee,me){X.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const oe=X.distanceTo(Z),ve=ee.projectionMatrix.elements,Ye=me.projectionMatrix.elements,Te=ve[14]/(ve[10]-1),ct=ve[14]/(ve[10]+1),rt=(ve[9]+1)/ve[5],Fe=(ve[9]-1)/ve[5],b=(ve[8]-1)/ve[0],Vt=(Ye[8]+1)/Ye[0],Ge=Te*b,Be=Te*Vt,xe=oe/(-b+Vt),it=xe*-b;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(it),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ve[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ge=Te+xe,A=ct+xe,M=Ge-it,O=Be+(oe-it),Y=rt*ct/A*ge,Q=Fe*ct/A*ge;W.projectionMatrix.makePerspective(M,O,Y,Q,ge,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function se(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let ee=W.near,me=W.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(me=g.depthFar)),y.near=U.near=S.near=ee,y.far=U.far=S.far=me,(R!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,z=y.far),S.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,y.layers.mask=S.layers.mask|U.layers.mask;const oe=W.parent,ve=y.cameras;se(y,oe);for(let Ye=0;Ye<ve.length;Ye++)se(ve[Ye],oe);ve.length===2?k(y,S,U):y.projectionMatrix.copy(S.projectionMatrix),ue(W,y,oe)};function ue(W,ee,me){me===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Xi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let Me=null;function Oe(W,ee){if(u=ee.getViewerPose(c||r),_=ee,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let oe=!1;me.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Te=0;Te<me.length;Te++){const ct=me[Te];let rt=null;if(f!==null)rt=f.getViewport(ct);else{const b=h.getViewSubImage(p,ct);rt=b.viewport,Te===0&&(e.setRenderTargetTextures(T,b.colorTexture,p.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(T))}let Fe=I[Te];Fe===void 0&&(Fe=new Tt,Fe.layers.enable(Te),Fe.viewport=new qe,I[Te]=Fe),Fe.matrix.fromArray(ct.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ct.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(rt.x,rt.y,rt.width,rt.height),Te===0&&(y.matrix.copy(Fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(Fe)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Te=h.getDepthInformation(me[0]);Te&&Te.isValid&&Te.texture&&g.init(e,Te,i.renderState)}}for(let me=0;me<v.length;me++){const oe=E[me],ve=v[me];oe!==null&&ve!==void 0&&ve.update(oe,ee,c||r)}Me&&Me(W,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}const tt=new ou;tt.setAnimationLoop(Oe),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}}const Jn=new on,T_=new Re;function S_(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Xc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,T,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),h(m,d)):d.isMeshPhongMaterial?(o(m,d),u(m,d)):d.isMeshStandardMaterial?(o(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,E)):d.isMeshMatcapMaterial?(o(m,d),_(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),g(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===wt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===wt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),v=T.envMap,E=T.envMapRotation;v&&(m.envMap.value=v,Jn.copy(E),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),m.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Jn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===wt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b_(s,e,t,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,v){const E=v.program;n.uniformBlockBinding(T,E)}function c(T,v){let E=i[T.id];E===void 0&&(_(T),E=u(T),i[T.id]=E,T.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(T,C);const N=e.render.frame;o[T.id]!==N&&(p(T),o[T.id]=N)}function u(T){const v=h();T.__bindingPointIndex=v;const E=s.createBuffer(),C=T.__size,N=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,E),E}function h(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const v=i[T.id],E=T.uniforms,C=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let N=0,S=E.length;N<S;N++){const U=Array.isArray(E[N])?E[N]:[E[N]];for(let I=0,y=U.length;I<y;I++){const R=U[I];if(f(R,N,I,C)===!0){const z=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let K=0;K<G.length;K++){const X=G[K],Z=g(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,z+j,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(T,v,E,C){const N=T.value,S=v+"_"+E;if(C[S]===void 0)return typeof N=="number"||typeof N=="boolean"?C[S]=N:C[S]=N.clone(),!0;{const U=C[S];if(typeof N=="number"||typeof N=="boolean"){if(U!==N)return C[S]=N,!0}else if(U.equals(N)===!1)return U.copy(N),!0}return!1}function _(T){const v=T.uniforms;let E=0;const C=16;for(let S=0,U=v.length;S<U;S++){const I=Array.isArray(v[S])?v[S]:[v[S]];for(let y=0,R=I.length;y<R;y++){const z=I[y],G=Array.isArray(z.value)?z.value:[z.value];for(let j=0,K=G.length;j<K;j++){const X=G[j],Z=g(X),k=E%C,se=k%Z.boundary,ue=k+se;E+=se,ue!==0&&C-ue<Z.storage&&(E+=C-ue),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=Z.storage}}}const N=E%C;return N>0&&(E+=C-N),T.__size=E,T.__cache={},this}function g(T){const v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function m(T){const v=T.target;v.removeEventListener("dispose",m);const E=r.indexOf(v.__bindingPointIndex);r.splice(E,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete o[v.id]}function d(){for(const T in i)s.deleteBuffer(i[T]);r=[],i={},o={}}return{bind:l,update:c,dispose:d}}class N_{constructor(e={}){const{canvas:t=Nh(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const T=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this.toneMapping=Hn,this.toneMappingExposure=1;const E=this;let C=!1,N=0,S=0,U=null,I=-1,y=null;const R=new qe,z=new qe;let G=null;const j=new Le(0);let K=0,X=t.width,Z=t.height,k=1,se=null,ue=null;const Me=new qe(0,0,X,Z),Oe=new qe(0,0,X,Z);let tt=!1;const W=new Ia;let ee=!1,me=!1;this.transmissionResolutionScale=1;const oe=new Re,ve=new Re,Ye=new L,Te=new qe,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Fe(){return U===null?k:1}let b=n;function Vt(x,D){return t.getContext(x,D)}try{const x={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ua}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ae,!1),b===null){const D="webgl2";if(b=Vt(D,x),b===null)throw Vt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ge,Be,xe,it,ge,A,M,O,Y,Q,H,_e,re,he,ze,J,pe,Ae,Se,de,ke,De,nt,w;function ne(){Ge=new Ff(b),Ge.init(),De=new y_(b,Ge),Be=new Cf(b,Ge,e,De),xe=new M_(b,Ge),Be.reverseDepthBuffer&&p&&xe.buffers.depth.setReversed(!0),it=new kf(b),ge=new o_,A=new x_(b,Ge,xe,ge,Be,De,it),M=new Pf(E),O=new Vf(E),Y=new qp(b),nt=new Rf(b,Y),Q=new Gf(b,Y,it,nt),H=new zf(b,Q,Y,it),Se=new Hf(b,Be,A),J=new Df(ge),_e=new s_(E,M,O,Ge,Be,nt,J),re=new S_(E,ge),he=new a_,ze=new d_(Ge),Ae=new Lf(E,M,O,xe,H,f,l),pe=new __(E,H,Be),w=new b_(b,it,Be,xe),de=new wf(b,Ge,it),ke=new Bf(b,Ge,it),it.programs=_e.programs,E.capabilities=Be,E.extensions=Ge,E.properties=ge,E.renderLists=he,E.shadowMap=pe,E.state=xe,E.info=it}ne();const B=new v_(E,b);this.xr=B,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const x=Ge.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ge.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(X,Z,!1))},this.getSize=function(x){return x.set(X,Z)},this.setSize=function(x,D,V=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,Z=D,t.width=Math.floor(x*k),t.height=Math.floor(D*k),V===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(X*k,Z*k).floor()},this.setDrawingBufferSize=function(x,D,V){X=x,Z=D,k=V,t.width=Math.floor(x*V),t.height=Math.floor(D*V),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(Me)},this.setViewport=function(x,D,V,F){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,D,V,F),xe.viewport(R.copy(Me).multiplyScalar(k).round())},this.getScissor=function(x){return x.copy(Oe)},this.setScissor=function(x,D,V,F){x.isVector4?Oe.set(x.x,x.y,x.z,x.w):Oe.set(x,D,V,F),xe.scissor(z.copy(Oe).multiplyScalar(k).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(x){xe.setScissorTest(tt=x)},this.setOpaqueSort=function(x){se=x},this.setTransparentSort=function(x){ue=x},this.getClearColor=function(x){return x.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(x=!0,D=!0,V=!0){let F=0;if(x){let P=!1;if(U!==null){const $=U.texture.format;P=$===ga||$===_a||$===ma}if(P){const $=U.texture.type,ie=$===Sn||$===oi||$===ys||$===zi||$===pa||$===da,ce=Ae.getClearColor(),fe=Ae.getClearAlpha(),be=ce.r,Ne=ce.g,Ee=ce.b;ie?(_[0]=be,_[1]=Ne,_[2]=Ee,_[3]=fe,b.clearBufferuiv(b.COLOR,0,_)):(g[0]=be,g[1]=Ne,g[2]=Ee,g[3]=fe,b.clearBufferiv(b.COLOR,0,g))}else F|=b.COLOR_BUFFER_BIT}D&&(F|=b.DEPTH_BUFFER_BIT),V&&(F|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ae.dispose(),he.dispose(),ze.dispose(),ge.dispose(),M.dispose(),O.dispose(),H.dispose(),nt.dispose(),w.dispose(),_e.dispose(),B.dispose(),B.removeEventListener("sessionstart",Da),B.removeEventListener("sessionend",Pa),Yn.stop()};function q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const x=it.autoReset,D=pe.enabled,V=pe.autoUpdate,F=pe.needsUpdate,P=pe.type;ne(),it.autoReset=x,pe.enabled=D,pe.autoUpdate=V,pe.needsUpdate=F,pe.type=P}function ae(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function we(x){const D=x.target;D.removeEventListener("dispose",we),at(D)}function at(x){xt(x),ge.remove(x)}function xt(x){const D=ge.get(x).programs;D!==void 0&&(D.forEach(function(V){_e.releaseProgram(V)}),x.isShaderMaterial&&_e.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,V,F,P,$){D===null&&(D=ct);const ie=P.isMesh&&P.matrixWorld.determinant()<0,ce=gu(x,D,V,F,P);xe.setMaterial(F,ie);let fe=V.index,be=1;if(F.wireframe===!0){if(fe=Q.getWireframeAttribute(V),fe===void 0)return;be=2}const Ne=V.drawRange,Ee=V.attributes.position;let We=Ne.start*be,je=(Ne.start+Ne.count)*be;$!==null&&(We=Math.max(We,$.start*be),je=Math.min(je,($.start+$.count)*be)),fe!==null?(We=Math.max(We,0),je=Math.min(je,fe.count)):Ee!=null&&(We=Math.max(We,0),je=Math.min(je,Ee.count));const ut=je-We;if(ut<0||ut===1/0)return;nt.setup(P,F,ce,V,fe);let lt,Xe=de;if(fe!==null&&(lt=Y.get(fe),Xe=ke,Xe.setIndex(lt)),P.isMesh)F.wireframe===!0?(xe.setLineWidth(F.wireframeLinewidth*Fe()),Xe.setMode(b.LINES)):Xe.setMode(b.TRIANGLES);else if(P.isLine){let Ie=F.linewidth;Ie===void 0&&(Ie=1),xe.setLineWidth(Ie*Fe()),P.isLineSegments?Xe.setMode(b.LINES):P.isLineLoop?Xe.setMode(b.LINE_LOOP):Xe.setMode(b.LINE_STRIP)}else P.isPoints?Xe.setMode(b.POINTS):P.isSprite&&Xe.setMode(b.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Xe.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Xe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Ie=P._multiDrawStarts,gt=P._multiDrawCounts,Ke=P._multiDrawCount,Xt=fe?Y.get(fe).bytesPerElement:1,ui=ge.get(F).currentProgram.getUniforms();for(let Ct=0;Ct<Ke;Ct++)ui.setValue(b,"_gl_DrawID",Ct),Xe.render(Ie[Ct]/Xt,gt[Ct])}else if(P.isInstancedMesh)Xe.renderInstances(We,ut,P.count);else if(V.isInstancedBufferGeometry){const Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,gt=Math.min(V.instanceCount,Ie);Xe.renderInstances(We,ut,gt)}else Xe.render(We,ut)};function Qe(x,D,V){x.transparent===!0&&x.side===nn&&x.forceSinglePass===!1?(x.side=wt,x.needsUpdate=!0,Rs(x,D,V),x.side=Tn,x.needsUpdate=!0,Rs(x,D,V),x.side=nn):Rs(x,D,V)}this.compile=function(x,D,V=null){V===null&&(V=x),d=ze.get(V),d.init(D),v.push(d),V.traverseVisible(function(P){P.isLight&&P.layers.test(D.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),x!==V&&x.traverseVisible(function(P){P.isLight&&P.layers.test(D.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),d.setupLights();const F=new Set;return x.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const $=P.material;if($)if(Array.isArray($))for(let ie=0;ie<$.length;ie++){const ce=$[ie];Qe(ce,V,P),F.add(ce)}else Qe($,V,P),F.add($)}),v.pop(),d=null,F},this.compileAsync=function(x,D,V=null){const F=this.compile(x,D,V);return new Promise(P=>{function $(){if(F.forEach(function(ie){ge.get(ie).currentProgram.isReady()&&F.delete(ie)}),F.size===0){P(x);return}setTimeout($,10)}Ge.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Wt=null;function pn(x){Wt&&Wt(x)}function Da(){Yn.stop()}function Pa(){Yn.start()}const Yn=new ou;Yn.setAnimationLoop(pn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(x){Wt=x,B.setAnimationLoop(x),x===null?Yn.stop():Yn.start()},B.addEventListener("sessionstart",Da),B.addEventListener("sessionend",Pa),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(D),D=B.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,D,U),d=ze.get(x,v.length),d.init(D),v.push(d),ve.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(ve),me=this.localClippingEnabled,ee=J.init(this.clippingPlanes,me),m=he.get(x,T.length),m.init(),T.push(m),B.enabled===!0&&B.isPresenting===!0){const $=E.xr.getDepthSensingMesh();$!==null&&wo($,D,-1/0,E.sortObjects)}wo(x,D,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(se,ue),rt=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,rt&&Ae.addToRenderList(m,x),this.info.render.frame++,ee===!0&&J.beginShadows();const V=d.state.shadowsArray;pe.render(V,x,D),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=m.opaque,P=m.transmissive;if(d.setupLights(),D.isArrayCamera){const $=D.cameras;if(P.length>0)for(let ie=0,ce=$.length;ie<ce;ie++){const fe=$[ie];Oa(F,P,x,fe)}rt&&Ae.render(x);for(let ie=0,ce=$.length;ie<ce;ie++){const fe=$[ie];Ua(m,x,fe,fe.viewport)}}else P.length>0&&Oa(F,P,x,D),rt&&Ae.render(x),Ua(m,x,D);U!==null&&S===0&&(A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(E,x,D),nt.resetDefaultState(),I=-1,y=null,v.pop(),v.length>0?(d=v[v.length-1],ee===!0&&J.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function wo(x,D,V,F){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||W.intersectsSprite(x)){F&&Te.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ve);const ie=H.update(x),ce=x.material;ce.visible&&m.push(x,ie,ce,V,Te.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||W.intersectsObject(x))){const ie=H.update(x),ce=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Te.copy(x.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Te.copy(ie.boundingSphere.center)),Te.applyMatrix4(x.matrixWorld).applyMatrix4(ve)),Array.isArray(ce)){const fe=ie.groups;for(let be=0,Ne=fe.length;be<Ne;be++){const Ee=fe[be],We=ce[Ee.materialIndex];We&&We.visible&&m.push(x,ie,We,V,Te.z,Ee)}}else ce.visible&&m.push(x,ie,ce,V,Te.z,null)}}const $=x.children;for(let ie=0,ce=$.length;ie<ce;ie++)wo($[ie],D,V,F)}function Ua(x,D,V,F){const P=x.opaque,$=x.transmissive,ie=x.transparent;d.setupLightsView(V),ee===!0&&J.setGlobalState(E.clippingPlanes,V),F&&xe.viewport(R.copy(F)),P.length>0&&Ls(P,D,V),$.length>0&&Ls($,D,V),ie.length>0&&Ls(ie,D,V),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Oa(x,D,V,F){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[F.id]===void 0&&(d.state.transmissionRenderTarget[F.id]=new ri(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Ss:Sn,minFilter:En,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));const $=d.state.transmissionRenderTarget[F.id],ie=F.viewport||R;$.setSize(ie.z*E.transmissionResolutionScale,ie.w*E.transmissionResolutionScale);const ce=E.getRenderTarget();E.setRenderTarget($),E.getClearColor(j),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),rt&&Ae.render(V);const fe=E.toneMapping;E.toneMapping=Hn;const be=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),d.setupLightsView(F),ee===!0&&J.setGlobalState(E.clippingPlanes,F),Ls(x,V,F),A.updateMultisampleRenderTarget($),A.updateRenderTargetMipmap($),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Ee=0,We=D.length;Ee<We;Ee++){const je=D[Ee],ut=je.object,lt=je.geometry,Xe=je.material,Ie=je.group;if(Xe.side===nn&&ut.layers.test(F.layers)){const gt=Xe.side;Xe.side=wt,Xe.needsUpdate=!0,Va(ut,V,F,lt,Xe,Ie),Xe.side=gt,Xe.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget($),A.updateRenderTargetMipmap($))}E.setRenderTarget(ce),E.setClearColor(j,K),be!==void 0&&(F.viewport=be),E.toneMapping=fe}function Ls(x,D,V){const F=D.isScene===!0?D.overrideMaterial:null;for(let P=0,$=x.length;P<$;P++){const ie=x[P],ce=ie.object,fe=ie.geometry,be=F===null?ie.material:F,Ne=ie.group;ce.layers.test(V.layers)&&Va(ce,D,V,fe,be,Ne)}}function Va(x,D,V,F,P,$){x.onBeforeRender(E,D,V,F,P,$),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),P.onBeforeRender(E,D,V,F,x,$),P.transparent===!0&&P.side===nn&&P.forceSinglePass===!1?(P.side=wt,P.needsUpdate=!0,E.renderBufferDirect(V,D,F,P,x,$),P.side=Tn,P.needsUpdate=!0,E.renderBufferDirect(V,D,F,P,x,$),P.side=nn):E.renderBufferDirect(V,D,F,P,x,$),x.onAfterRender(E,D,V,F,P,$)}function Rs(x,D,V){D.isScene!==!0&&(D=ct);const F=ge.get(x),P=d.state.lights,$=d.state.shadowsArray,ie=P.state.version,ce=_e.getParameters(x,P.state,$,D,V),fe=_e.getProgramCacheKey(ce);let be=F.programs;F.environment=x.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(x.isMeshStandardMaterial?O:M).get(x.envMap||F.environment),F.envMapRotation=F.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,be===void 0&&(x.addEventListener("dispose",we),be=new Map,F.programs=be);let Ne=be.get(fe);if(Ne!==void 0){if(F.currentProgram===Ne&&F.lightsStateVersion===ie)return Ga(x,ce),Ne}else ce.uniforms=_e.getUniforms(x),x.onBeforeCompile(ce,E),Ne=_e.acquireProgram(ce,fe),be.set(fe,Ne),F.uniforms=ce.uniforms;const Ee=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ee.clippingPlanes=J.uniform),Ga(x,ce),F.needsLights=xu(x),F.lightsStateVersion=ie,F.needsLights&&(Ee.ambientLightColor.value=P.state.ambient,Ee.lightProbe.value=P.state.probe,Ee.directionalLights.value=P.state.directional,Ee.directionalLightShadows.value=P.state.directionalShadow,Ee.spotLights.value=P.state.spot,Ee.spotLightShadows.value=P.state.spotShadow,Ee.rectAreaLights.value=P.state.rectArea,Ee.ltc_1.value=P.state.rectAreaLTC1,Ee.ltc_2.value=P.state.rectAreaLTC2,Ee.pointLights.value=P.state.point,Ee.pointLightShadows.value=P.state.pointShadow,Ee.hemisphereLights.value=P.state.hemi,Ee.directionalShadowMap.value=P.state.directionalShadowMap,Ee.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Ee.spotShadowMap.value=P.state.spotShadowMap,Ee.spotLightMatrix.value=P.state.spotLightMatrix,Ee.spotLightMap.value=P.state.spotLightMap,Ee.pointShadowMap.value=P.state.pointShadowMap,Ee.pointShadowMatrix.value=P.state.pointShadowMatrix),F.currentProgram=Ne,F.uniformsList=null,Ne}function Fa(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=_o.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Ga(x,D){const V=ge.get(x);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function gu(x,D,V,F,P){D.isScene!==!0&&(D=ct),A.resetTextureUnits();const $=D.fog,ie=F.isMeshStandardMaterial?D.environment:null,ce=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Nt,fe=(F.isMeshStandardMaterial?O:M).get(F.envMap||ie),be=F.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ee=!!V.morphAttributes.position,We=!!V.morphAttributes.normal,je=!!V.morphAttributes.color;let ut=Hn;F.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ut=E.toneMapping);const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Xe=lt!==void 0?lt.length:0,Ie=ge.get(F),gt=d.state.lights;if(ee===!0&&(me===!0||x!==y)){const It=x===y&&F.id===I;J.setState(F,x,It)}let Ke=!1;F.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==gt.state.version||Ie.outputColorSpace!==ce||P.isBatchedMesh&&Ie.batching===!1||!P.isBatchedMesh&&Ie.batching===!0||P.isBatchedMesh&&Ie.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ie.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ie.instancing===!1||!P.isInstancedMesh&&Ie.instancing===!0||P.isSkinnedMesh&&Ie.skinning===!1||!P.isSkinnedMesh&&Ie.skinning===!0||P.isInstancedMesh&&Ie.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ie.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ie.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ie.instancingMorph===!1&&P.morphTexture!==null||Ie.envMap!==fe||F.fog===!0&&Ie.fog!==$||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==J.numPlanes||Ie.numIntersection!==J.numIntersection)||Ie.vertexAlphas!==be||Ie.vertexTangents!==Ne||Ie.morphTargets!==Ee||Ie.morphNormals!==We||Ie.morphColors!==je||Ie.toneMapping!==ut||Ie.morphTargetsCount!==Xe)&&(Ke=!0):(Ke=!0,Ie.__version=F.version);let Xt=Ie.currentProgram;Ke===!0&&(Xt=Rs(F,D,P));let ui=!1,Ct=!1,ns=!1;const st=Xt.getUniforms(),Ft=Ie.uniforms;if(xe.useProgram(Xt.program)&&(ui=!0,Ct=!0,ns=!0),F.id!==I&&(I=F.id,Ct=!0),ui||y!==x){xe.buffers.depth.getReversed()?(oe.copy(x.projectionMatrix),Rh(oe),wh(oe),st.setValue(b,"projectionMatrix",oe)):st.setValue(b,"projectionMatrix",x.projectionMatrix),st.setValue(b,"viewMatrix",x.matrixWorldInverse);const Lt=st.map.cameraPosition;Lt!==void 0&&Lt.setValue(b,Ye.setFromMatrixPosition(x.matrixWorld)),Be.logarithmicDepthBuffer&&st.setValue(b,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&st.setValue(b,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Ct=!0,ns=!0)}if(P.isSkinnedMesh){st.setOptional(b,P,"bindMatrix"),st.setOptional(b,P,"bindMatrixInverse");const It=P.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),st.setValue(b,"boneTexture",It.boneTexture,A))}P.isBatchedMesh&&(st.setOptional(b,P,"batchingTexture"),st.setValue(b,"batchingTexture",P._matricesTexture,A),st.setOptional(b,P,"batchingIdTexture"),st.setValue(b,"batchingIdTexture",P._indirectTexture,A),st.setOptional(b,P,"batchingColorTexture"),P._colorsTexture!==null&&st.setValue(b,"batchingColorTexture",P._colorsTexture,A));const Gt=V.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&Se.update(P,V,Xt),(Ct||Ie.receiveShadow!==P.receiveShadow)&&(Ie.receiveShadow=P.receiveShadow,st.setValue(b,"receiveShadow",P.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Ft.envMap.value=fe,Ft.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&D.environment!==null&&(Ft.envMapIntensity.value=D.environmentIntensity),Ct&&(st.setValue(b,"toneMappingExposure",E.toneMappingExposure),Ie.needsLights&&Mu(Ft,ns),$&&F.fog===!0&&re.refreshFogUniforms(Ft,$),re.refreshMaterialUniforms(Ft,F,k,Z,d.state.transmissionRenderTarget[x.id]),_o.upload(b,Fa(Ie),Ft,A)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(_o.upload(b,Fa(Ie),Ft,A),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&st.setValue(b,"center",P.center),st.setValue(b,"modelViewMatrix",P.modelViewMatrix),st.setValue(b,"normalMatrix",P.normalMatrix),st.setValue(b,"modelMatrix",P.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const It=F.uniformsGroups;for(let Lt=0,Co=It.length;Lt<Co;Lt++){const qn=It[Lt];w.update(qn,Xt),w.bind(qn,Xt)}}return Xt}function Mu(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function xu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,D,V){ge.get(x.texture).__webglTexture=D,ge.get(x.depthTexture).__webglTexture=V;const F=ge.get(x);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=V===void 0,F.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){const V=ge.get(x);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0};const yu=b.createFramebuffer();this.setRenderTarget=function(x,D=0,V=0){U=x,N=D,S=V;let F=!0,P=null,$=!1,ie=!1;if(x){const fe=ge.get(x);if(fe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(b.FRAMEBUFFER,null),F=!1;else if(fe.__webglFramebuffer===void 0)A.setupRenderTarget(x);else if(fe.__hasExternalTextures)A.rebindTextures(x,ge.get(x.texture).__webglTexture,ge.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ee=x.depthTexture;if(fe.__boundDepthTexture!==Ee){if(Ee!==null&&ge.has(Ee)&&(x.width!==Ee.image.width||x.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(x)}}const be=x.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ie=!0);const Ne=ge.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?P=Ne[D][V]:P=Ne[D],$=!0):x.samples>0&&A.useMultisampledRTT(x)===!1?P=ge.get(x).__webglMultisampledFramebuffer:Array.isArray(Ne)?P=Ne[V]:P=Ne,R.copy(x.viewport),z.copy(x.scissor),G=x.scissorTest}else R.copy(Me).multiplyScalar(k).floor(),z.copy(Oe).multiplyScalar(k).floor(),G=tt;if(V!==0&&(P=yu),xe.bindFramebuffer(b.FRAMEBUFFER,P)&&F&&xe.drawBuffers(x,P),xe.viewport(R),xe.scissor(z),xe.setScissorTest(G),$){const fe=ge.get(x.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,V)}else if(ie){const fe=ge.get(x.texture),be=D;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,fe.__webglTexture,V,be)}else if(x!==null&&V!==0){const fe=ge.get(x.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,fe.__webglTexture,V)}I=-1},this.readRenderTargetPixels=function(x,D,V,F,P,$,ie){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=ge.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ie!==void 0&&(ce=ce[ie]),ce){xe.bindFramebuffer(b.FRAMEBUFFER,ce);try{const fe=x.texture,be=fe.format,Ne=fe.type;if(!Be.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-F&&V>=0&&V<=x.height-P&&b.readPixels(D,V,F,P,De.convert(be),De.convert(Ne),$)}finally{const fe=U!==null?ge.get(U).__webglFramebuffer:null;xe.bindFramebuffer(b.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(x,D,V,F,P,$,ie){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=ge.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ie!==void 0&&(ce=ce[ie]),ce){const fe=x.texture,be=fe.format,Ne=fe.type;if(!Be.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-F&&V>=0&&V<=x.height-P){xe.bindFramebuffer(b.FRAMEBUFFER,ce);const Ee=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ee),b.bufferData(b.PIXEL_PACK_BUFFER,$.byteLength,b.STREAM_READ),b.readPixels(D,V,F,P,De.convert(be),De.convert(Ne),0);const We=U!==null?ge.get(U).__webglFramebuffer:null;xe.bindFramebuffer(b.FRAMEBUFFER,We);const je=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Lh(b,je,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ee),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,$),b.deleteBuffer(Ee),b.deleteSync(je),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,V=0){x.isTexture!==!0&&(Ri("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);const F=Math.pow(2,-V),P=Math.floor(x.image.width*F),$=Math.floor(x.image.height*F),ie=D!==null?D.x:0,ce=D!==null?D.y:0;A.setTexture2D(x,0),b.copyTexSubImage2D(b.TEXTURE_2D,V,0,0,ie,ce,P,$),xe.unbindTexture()};const Eu=b.createFramebuffer(),Iu=b.createFramebuffer();this.copyTextureToTexture=function(x,D,V=null,F=null,P=0,$=null){x.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,x=arguments[1],D=arguments[2],$=arguments[3]||0,V=null),$===null&&(P!==0?(Ri("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=P,P=0):$=0);let ie,ce,fe,be,Ne,Ee,We,je,ut;const lt=x.isCompressedTexture?x.mipmaps[$]:x.image;if(V!==null)ie=V.max.x-V.min.x,ce=V.max.y-V.min.y,fe=V.isBox3?V.max.z-V.min.z:1,be=V.min.x,Ne=V.min.y,Ee=V.isBox3?V.min.z:0;else{const Gt=Math.pow(2,-P);ie=Math.floor(lt.width*Gt),ce=Math.floor(lt.height*Gt),x.isDataArrayTexture?fe=lt.depth:x.isData3DTexture?fe=Math.floor(lt.depth*Gt):fe=1,be=0,Ne=0,Ee=0}F!==null?(We=F.x,je=F.y,ut=F.z):(We=0,je=0,ut=0);const Xe=De.convert(D.format),Ie=De.convert(D.type);let gt;D.isData3DTexture?(A.setTexture3D(D,0),gt=b.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),gt=b.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),gt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,D.unpackAlignment);const Ke=b.getParameter(b.UNPACK_ROW_LENGTH),Xt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),ui=b.getParameter(b.UNPACK_SKIP_PIXELS),Ct=b.getParameter(b.UNPACK_SKIP_ROWS),ns=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,lt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,lt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,be),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ne),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ee);const st=x.isDataArrayTexture||x.isData3DTexture,Ft=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const Gt=ge.get(x),It=ge.get(D),Lt=ge.get(Gt.__renderTarget),Co=ge.get(It.__renderTarget);xe.bindFramebuffer(b.READ_FRAMEBUFFER,Lt.__webglFramebuffer),xe.bindFramebuffer(b.DRAW_FRAMEBUFFER,Co.__webglFramebuffer);for(let qn=0;qn<fe;qn++)st&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ge.get(x).__webglTexture,P,Ee+qn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ge.get(D).__webglTexture,$,ut+qn)),b.blitFramebuffer(be,Ne,ie,ce,We,je,ie,ce,b.DEPTH_BUFFER_BIT,b.NEAREST);xe.bindFramebuffer(b.READ_FRAMEBUFFER,null),xe.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(P!==0||x.isRenderTargetTexture||ge.has(x)){const Gt=ge.get(x),It=ge.get(D);xe.bindFramebuffer(b.READ_FRAMEBUFFER,Eu),xe.bindFramebuffer(b.DRAW_FRAMEBUFFER,Iu);for(let Lt=0;Lt<fe;Lt++)st?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Gt.__webglTexture,P,Ee+Lt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Gt.__webglTexture,P),Ft?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,It.__webglTexture,$,ut+Lt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,It.__webglTexture,$),P!==0?b.blitFramebuffer(be,Ne,ie,ce,We,je,ie,ce,b.COLOR_BUFFER_BIT,b.NEAREST):Ft?b.copyTexSubImage3D(gt,$,We,je,ut+Lt,be,Ne,ie,ce):b.copyTexSubImage2D(gt,$,We,je,be,Ne,ie,ce);xe.bindFramebuffer(b.READ_FRAMEBUFFER,null),xe.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Ft?x.isDataTexture||x.isData3DTexture?b.texSubImage3D(gt,$,We,je,ut,ie,ce,fe,Xe,Ie,lt.data):D.isCompressedArrayTexture?b.compressedTexSubImage3D(gt,$,We,je,ut,ie,ce,fe,Xe,lt.data):b.texSubImage3D(gt,$,We,je,ut,ie,ce,fe,Xe,Ie,lt):x.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,$,We,je,ie,ce,Xe,Ie,lt.data):x.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,$,We,je,lt.width,lt.height,Xe,lt.data):b.texSubImage2D(b.TEXTURE_2D,$,We,je,ie,ce,Xe,Ie,lt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Ke),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Xt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ui),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ct),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ns),$===0&&D.generateMipmaps&&b.generateMipmap(gt),xe.unbindTexture()},this.copyTextureToTexture3D=function(x,D,V=null,F=null,P=0){return x.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,F=arguments[1]||null,x=arguments[2],D=arguments[3],P=arguments[4]||0),Ri('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,V,F,P)},this.initRenderTarget=function(x){ge.get(x).__webglFramebuffer===void 0&&A.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?A.setTextureCube(x,0):x.isData3DTexture?A.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?A.setTexture2DArray(x,0):A.setTexture2D(x,0),xe.unbindTexture()},this.resetState=function(){N=0,S=0,U=null,xe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}const lc={type:"change"},Ra={type:"start"},uu={type:"end"},ao=new Qi,cc=new Un,L_=Math.cos(70*Fc.DEG2RAD),pt=new L,Rt=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dr=1e-6;class R_ extends Xp{constructor(e,t=null){super(e,t),this.state=et.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new sn,this._lastTargetPosition=new L,this._quat=new sn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ol,this._sphericalDelta=new Ol,this._scale=1,this._panOffset=new L,this._rotateStart=new ye,this._rotateEnd=new ye,this._rotateDelta=new ye,this._panStart=new ye,this._panEnd=new ye,this._panDelta=new ye,this._dollyStart=new ye,this._dollyEnd=new ye,this._dollyDelta=new ye,this._dollyDirection=new L,this._mouse=new ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=C_.bind(this),this._onPointerDown=w_.bind(this),this._onPointerUp=D_.bind(this),this._onContextMenu=B_.bind(this),this._onMouseWheel=O_.bind(this),this._onKeyDown=V_.bind(this),this._onTouchStart=F_.bind(this),this._onTouchMove=G_.bind(this),this._onMouseDown=P_.bind(this),this._onMouseMove=U_.bind(this),this._interceptControlDown=k_.bind(this),this._interceptControlUp=H_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lc),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;pt.copy(t).sub(this.target),pt.applyQuaternion(this._quat),this._spherical.setFromVector3(pt),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Rt:n>Math.PI&&(n-=Rt),i<-Math.PI?i+=Rt:i>Math.PI&&(i-=Rt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(pt.setFromSpherical(this._spherical),pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=pt.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ao.origin.copy(this.object.position),ao.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ao.direction))<L_?this.object.lookAt(this.target):(cc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ao.intersectPlane(cc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>dr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dr||this._lastTargetPosition.distanceToSquared(this.target)>dr?(this.dispatchEvent(lc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rt/60*this.autoRotateSpeed*e:Rt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pt.setFromMatrixColumn(t,0),pt.multiplyScalar(-e),this._panOffset.add(pt)}_panUp(e,t){this.screenSpacePanning===!0?pt.setFromMatrixColumn(t,1):(pt.setFromMatrixColumn(t,0),pt.crossVectors(this.object.up,pt)),pt.multiplyScalar(e),this._panOffset.add(pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;pt.copy(i).sub(this.target);let o=pt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,o=t-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,o=Math.sqrt(n*n+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,o=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function w_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function C_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function D_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uu),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function P_(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=et.DOLLY;break;case Di.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=et.ROTATE}break;case Di.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Ra)}function U_(s){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function O_(s){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(s.preventDefault(),this.dispatchEvent(Ra),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(uu))}function V_(s){this.enabled!==!1&&this._handleKeyDown(s)}function F_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=et.TOUCH_ROTATE;break;case wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=et.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Ra)}function G_(s){switch(this._trackPointer(s),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=et.NONE}}function B_(s){this.enabled!==!1&&s.preventDefault()}function k_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function H_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uc(s,e){if(e===th)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===na||e===Uc){let t=s.getIndex();if(t===null){const r=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===na)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=s.clone();return o.setIndex(i),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class z_ extends es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new j_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new l1(t)})}load(e,t,n,i){const o=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=xs.extractUrlBase(e);r=xs.resolveURL(c,this.path)}else r=xs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),o.manager.itemError(e),o.manager.itemEnd(e)},l=new iu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{o.parse(c,r,function(u){t(u),o.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let o;const r={},a={},l=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hu){try{r[Ve.KHR_BINARY_GLTF]=new c1(e)}catch(h){i&&i(h);return}o=JSON.parse(r[Ve.KHR_BINARY_GLTF].content)}else o=JSON.parse(l.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new I1(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,r[h.name]=!0}if(o.extensionsUsed)for(let u=0;u<o.extensionsUsed.length;++u){const h=o.extensionsUsed[u],p=o.extensionsRequired||[];switch(h){case Ve.KHR_MATERIALS_UNLIT:r[h]=new Y_;break;case Ve.KHR_DRACO_MESH_COMPRESSION:r[h]=new u1(o,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:r[h]=new h1;break;case Ve.KHR_MESH_QUANTIZATION:r[h]=new p1;break;default:p.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,o){n.parse(e,t,i,o)})}}function W_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class X_{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const o=t.json,l=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Nt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new So(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new wp(u),c.distance=h;break;case"spot":c=new Lp(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],a=(o.extensions&&o.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Y_{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Gn}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const r=o.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Nt),e.opacity=r[3]}o.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",o.baseColorTexture,Mt))}return Promise.all(i)}}class q_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class j_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(a,a)}return Promise.all(o)}}class K_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class Q_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(o)}}class Z_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Mt)),r.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(o)}}class $_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(o)}}class J_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],Nt),Promise.all(o)}}class e1{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class t1{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],Nt),r.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Mt)),Promise.all(o)}}class n1{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(o)}}class i1{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(o)}}class s1{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const o=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,r)}}class o1{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const r=o.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class r1{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const r=o.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class a1{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],o=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,p=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,p,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(f),u,h,p,i.mode,i.filter),f})})}else return null}}class l1{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==kt.TRIANGLES&&c.mode!==kt.TRIANGLE_STRIP&&c.mode!==kt.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],p=c[0].count,f=[];for(const _ of h){const g=new Re,m=new L,d=new sn,T=new L(1,1,1),v=new ap(_.geometry,_.material,p);for(let E=0;E<p;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,E),l.SCALE&&T.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,g.compose(m,d,T));for(const E in l)if(E==="_COLOR_0"){const C=l[E];v.instanceColor=new sa(C.array,C.itemSize,C.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,l[E]);ot.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const hu="glTF",fs=12,hc={JSON:1313821514,BIN:5130562};class c1{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-fs,o=new DataView(e,fs);let r=0;for(;r<i;){const a=o.getUint32(r,!0);r+=4;const l=o.getUint32(r,!0);if(r+=4,l===hc.JSON){const c=new Uint8Array(e,fs+r,a);this.content=n.decode(c)}else if(l===hc.BIN){const c=fs+r;this.body=e.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class u1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,o=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const u in r){const h=la[u]||u.toLowerCase();a[h]=r[u]}for(const u in e.attributes){const h=la[u]||u.toLowerCase();if(r[u]!==void 0){const p=n.accessors[e.attributes[u]],f=Vi[p.componentType];c[h]=f.name,l[h]=p.normalized===!0}}return t.getDependency("bufferView",o).then(function(u){return new Promise(function(h,p){i.decodeDracoFile(u,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}h(f)},a,c,Nt,p)})})}}class h1{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class p1{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class pu extends Ns{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[o+r];return t}interpolate_(e,t,n,i){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,p=h*h,f=p*h,_=e*c,g=_-c,m=-2*f+3*p,d=f-p,T=1-m,v=d-p+h;for(let E=0;E!==a;E++){const C=r[g+E+a],N=r[g+E+l]*u,S=r[_+E+a],U=r[_+E]*u;o[E]=T*C+v*N+m*S+d*U}return o}}const d1=new sn;class f1 extends pu{interpolate_(e,t,n,i){const o=super.interpolate_(e,t,n,i);return d1.fromArray(o).normalize().toArray(o),o}}const kt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pc={9728:St,9729:Ut,9984:Tc,9985:co,9986:ms,9987:En},dc={33071:Fn,33648:go,10497:Hi},fr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},la={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},m1={CUBICSPLINE:void 0,LINEAR:Is,STEP:Es},mr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Zi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tn})),s.DefaultMaterial}function ei(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function g1(s,e,t){let n=!1,i=!1,o=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(o=!0),n&&i&&o)break}if(!n&&!i&&!o)return Promise.resolve(s);const r=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const p=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;r.push(p)}if(i){const p=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(p)}if(o){const p=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(p)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],p=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),o&&(s.morphAttributes.color=p),s.morphTargetsRelative=!0,s})}function M1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function x1(s){let e;const t=s.extensions&&s.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_r(t.attributes):e=s.indices+":"+_r(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+_r(s.targets[n]);return e}function _r(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ca(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function y1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const E1=new Re;class I1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new W_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,o=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,o=a.indexOf("Firefox")>-1,r=o?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||o&&r<98?this.textureLoader=new su(this.options.manager):this.textureLoader=new Dp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new iu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return ei(o,a,i),yn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,o=t.length;i<o;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,o=e.length;i<o;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),o=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,u]of r.children.entries())o(u,a.children[c])};return o(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const o=e(t[i]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":i=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(o,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(o,r){n.load(xs.resolveURL(t.uri,i.path),o,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=fr[i.type],a=Vi[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new bt(c,r,l))}const o=[];return i.bufferView!==void 0?o.push(this.getDependency("bufferView",i.bufferView)):o.push(null),i.sparse!==void 0&&(o.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(o).then(function(r){const a=r[0],l=fr[i.type],c=Vi[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,p=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(f&&f!==h){const d=Math.floor(p/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count;let v=t.cache.get(T);v||(g=new c(a,d*f,i.count*f/u),v=new jc(g,f/u),t.cache.add(T,v)),m=new vs(v,l,p%f/u,_)}else a===null?g=new c(i.count*l):g=new c(a,p,i.count*l),m=new bt(g,l,_);if(i.sparse!==void 0){const d=fr.SCALAR,T=Vi[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,C=new T(r[1],v,i.sparse.count*d),N=new c(r[2],E,i.sparse.count*l);a!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,U=C.length;S<U;S++){const I=C[S];if(m.setX(I,N[S*l]),l>=2&&m.setY(I,N[S*l+1]),l>=3&&m.setZ(I,N[S*l+2]),l>=4&&m.setW(I,N[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,r=t.images[o];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,o,a)}loadTextureImage(e,t,n){const i=this,o=this.json,r=o.textures[e],a=o.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const p=(o.samplers||{})[r.sampler]||{};return u.magFilter=pc[p.magFilter]||Ut,u.minFilter=pc[p.minFilter]||En,u.wrapS=dc[p.wrapS]||Hi,u.wrapT=dc[p.wrapT]||Hi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==St&&u.minFilter!==Ut,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const p=new Blob([h],{type:r.mimeType});return l=a.createObjectURL(p),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(p,f){let _=p;t.isImageBitmapLoader===!0&&(_=function(g){const m=new _t(g);m.needsUpdate=!0,p(m)}),t.load(xs.resolveURL(h,o.path),_,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),yn(h,r),h.userData.mimeType=r.mimeType||y1(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const o=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),o.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=o.associations.get(r);r=o.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),o.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Jc,Jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new $c,Jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||o||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),o&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),o&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Zi}loadMaterial(e){const t=this,n=this.json,i=this.extensions,o=n.materials[e];let r;const a={},l=o.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const h=i[Ve.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(a,o,t))}else{const h=o.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const p=h.baseColorFactor;a.color.setRGB(p[0],p[1],p[2],Nt),a.opacity=p[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,a)})))}o.doubleSided===!0&&(a.side=nn);const u=o.alphaMode||mr.OPAQUE;if(u===mr.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===mr.MASK&&(a.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&r!==Gn&&(c.push(t.assignTexture(a,"normalMap",o.normalTexture)),a.normalScale=new ye(1,1),o.normalTexture.scale!==void 0)){const h=o.normalTexture.scale;a.normalScale.set(h,h)}if(o.occlusionTexture!==void 0&&r!==Gn&&(c.push(t.assignTexture(a,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&r!==Gn){const h=o.emissiveFactor;a.emissive=new Le().setRGB(h[0],h[1],h[2],Nt)}return o.emissiveTexture!==void 0&&r!==Gn&&c.push(t.assignTexture(a,"emissiveMap",o.emissiveTexture,Mt)),Promise.all(c).then(function(){const h=new r(a);return o.name&&(h.name=o.name),yn(h,o),t.associations.set(h,{materials:e}),o.extensions&&ei(i,h,o),h})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function o(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fc(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=x1(c),h=i[u];if(h)r.push(h.promise);else{let p;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?p=o(c):p=fc(new en,c,t),i[u]={primitive:c,promise:p},r.push(p)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,o=n.meshes[e],r=o.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?_1(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],m=r[f];let d;const T=c[f];if(m.mode===kt.TRIANGLES||m.mode===kt.TRIANGLE_STRIP||m.mode===kt.TRIANGLE_FAN||m.mode===void 0)d=o.isSkinnedMesh===!0?new sp(g,T):new Ot(g,T),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===kt.TRIANGLE_STRIP?d.geometry=uc(d.geometry,Uc):m.mode===kt.TRIANGLE_FAN&&(d.geometry=uc(d.geometry,na));else if(m.mode===kt.LINES)d=new up(g,T);else if(m.mode===kt.LINE_STRIP)d=new Aa(g,T);else if(m.mode===kt.LINE_LOOP)d=new hp(g,T);else if(m.mode===kt.POINTS)d=new pp(g,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&M1(d,o),d.name=t.createUniqueName(o.name||"mesh_"+e),yn(d,o),m.extensions&&ei(i,d,m),t.assignFinalMaterial(d),h.push(d)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return o.extensions&&ei(i,h[0],o),h[0];const p=new si;o.extensions&&ei(i,p,o),t.associations.set(p,{meshes:e});for(let f=0,_=h.length;f<_;f++)p.add(h[f]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tt(Fc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Sa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,o=t.joints.length;i<o;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const o=i.pop(),r=i,a=[],l=[];for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h){a.push(h);const p=new Re;o!==null&&p.fromArray(o.array,c*16),l.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ea(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],o=i.name?i.name:"animation_"+e,r=[],a=[],l=[],c=[],u=[];for(let h=0,p=i.channels.length;h<p;h++){const f=i.channels[h],_=i.samplers[f.sampler],g=f.target,m=g.node,d=i.parameters!==void 0?i.parameters[_.input]:_.input,T=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",T)),c.push(_),u.push(g))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const p=h[0],f=h[1],_=h[2],g=h[3],m=h[4],d=[];for(let T=0,v=p.length;T<v;T++){const E=p[T],C=f[T],N=_[T],S=g[T],U=m[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const I=n._createAnimationTracks(E,C,N,S,U);if(I)for(let y=0;y<I.length;y++)d.push(I[y])}return new Ep(o,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(o){const r=n._getNodeRef(n.meshCache,i.mesh,o);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],o=n._loadNodeShallow(e),r=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([o,Promise.all(r),l]).then(function(c){const u=c[0],h=c[1],p=c[2];p!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(p,E1)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],r=o.name?i.createUniqueName(o.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),o.camera!==void 0&&a.push(i.getDependency("camera",o.camera).then(function(c){return i._getNodeRef(i.cameraCache,o.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(o.isBone===!0?u=new Qc:c.length>1?u=new si:c.length===1?u=c[0]:u=new ot,u!==c[0])for(let h=0,p=c.length;h<p;h++)u.add(c[h]);if(o.name&&(u.userData.name=o.name,u.name=r),yn(u,o),o.extensions&&ei(n,u,o),o.matrix!==void 0){const h=new Re;h.fromArray(o.matrix),u.applyMatrix4(h)}else o.translation!==void 0&&u.position.fromArray(o.translation),o.rotation!==void 0&&u.quaternion.fromArray(o.rotation),o.scale!==void 0&&u.scale.fromArray(o.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,o=new si;n.name&&(o.name=i.createUniqueName(n.name)),yn(o,n),n.extensions&&ei(t,o,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)o.add(l[u]);const c=u=>{const h=new Map;for(const[p,f]of i.associations)(p instanceof Jt||p instanceof _t)&&h.set(p,f);return u.traverse(p=>{const f=i.associations.get(p);f!=null&&h.set(p,f)}),h};return i.associations=c(o),o})}_createAnimationTracks(e,t,n,i,o){const r=[],a=e.name?e.name:e.uuid,l=[];Pn[o.path]===Pn.weights?e.traverse(function(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}):l.push(a);let c;switch(Pn[o.path]){case Pn.weights:c=qi;break;case Pn.rotation:c=ji;break;case Pn.position:case Pn.scale:c=Ki;break;default:switch(n.itemSize){case 1:c=qi;break;case 2:case 3:default:c=Ki;break}break}const u=i.interpolation!==void 0?m1[i.interpolation]:Is,h=this._getArrayFromAccessor(n);for(let p=0,f=l.length;p<f;p++){const _=new c(l[p]+"."+Pn[o.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),r.push(_)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ca(t.constructor),i=new Float32Array(t.length);for(let o=0,r=t.length;o<r;o++)i[o]=t[o]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ji?f1:pu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function A1(s,e,t){const n=e.attributes,i=new bn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=ca(Vi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const a=new L,l=new L;for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h.POSITION!==void 0){const p=t.json.accessors[h.POSITION],f=p.min,_=p.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),p.normalized){const g=ca(Vi[p.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const r=new ln;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=r}function fc(s,e,t){const n=e.attributes,i=[];function o(r,a){return t.getDependency("accessor",r).then(function(l){s.setAttribute(a,l)})}for(const r in n){const a=la[r]||r.toLowerCase();a in s.attributes||i.push(o(n[r],a))}if(e.indices!==void 0&&!s.index){const r=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(r)}return He.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${He.workingColorSpace}" not supported.`),yn(s,e),A1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?g1(s,e.targets,t):s})}const v1={name:null,explain:null,icon:"Pouch",color:"Pink",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},T1={name:"Nulberry",explain:"A mysterious berry that cures various blights.",icon:"Seed",color:"Blue",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-572.8299560546875,.1575857251882553,899.4517822265625],[-1064.72509765625,81.64372253417969,776.3579711914062],[-716.3523559570312,14.094743728637695,1034.3123779296875],[-484.04534912109375,1.2234368324279785,1570.0518798828125],[-671.61181640625,22.292112350463867,784.8583984375]]},S1={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},b1={name:null,explain:null,icon:"Slinger",color:"Purple",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},N1={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},L1={name:null,explain:null,icon:"Pouch",color:"Pink",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},R1={name:"Sticky Rock",explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},w1={name:"Brush",explain:"An area covered in tall grass that can conceal a crouching hunter from sight.",icon:"INVALID",color:"",map_icon:"MAP_0022",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-700.4389038085938,10.730202674865723,889.3530883789062],[-556.8165283203125,.19826729595661163,929.8594970703125],[-556.151611328125,.20354439318180084,931.9843139648438],[-558.8203125,.2574923038482666,929.6923217773438],[-525.4824829101562,2.5045480728149414,864.81298828125],[-527.8699951171875,2.482728958129883,863.9644165039062],[-528.857421875,2.3280210494995117,861.7952270507812],[-535.1326904296875,1.606492042541504,867.7946166992188],[-532.1116943359375,1.852301001548767,868.540283203125],[-535.7307739257812,1.5823910236358643,871.5106811523438],[-495.5060119628906,-.058358341455459595,941.6160278320312],[-494.4042053222656,.23388910293579102,937.3051147460938],[-498.5867919921875,.08255943655967712,939.38232421875],[-472.79180908203125,5.190577983856201,764.5714721679688],[-471.6781005859375,5.3488898277282715,760.2341918945312],[-475.8843994140625,4.799536228179932,762.3128051757812],[-627.769775390625,12.83109188079834,790.8508911132812],[-632.7976684570312,15.085325241088867,794.4677124023438],[-625.650634765625,12.126937866210938,786.9508666992188],[-566.8295288085938,1.0692449808120728,934.9296875],[-564.0347290039062,.6993569731712341,931.1041870117188],[-566.8970947265625,.9388790130615234,932.0123291015625],[-560.3616943359375,.9097061157226562,937.8314819335938],[-559.0294799804688,.48410460352897644,936.5222778320312],[-551.1627807617188,.5398815870285034,943.8162841796875],[-552.7747802734375,.4694960117340088,947.7664184570312],[-551.6693115234375,.3488011956214905,941.650390625],[-637.3011474609375,2.861215829849243,910.7416381835938],[-637.7467041015625,3.0417685508728027,907.8396606445312],[-614.0606079101562,.43694400787353516,917.3357543945312],[-611.3485717773438,.3238416016101837,917.394775390625],[-609.3859252929688,.2529172897338867,915.776123046875],[-595.6641845703125,.6748626232147217,910.5239868164062],[-593.3721923828125,.6346467137336731,909.4368286132812],[-584.6781005859375,.9042528867721558,915.57177734375],[-582.9429931640625,.9524862766265869,915.9215698242188],[-582.04150390625,.9360138773918152,917.9893188476562]]},C1={name:"Tinged Meat",explain:"A trap that attracts carnivores. They'll be paralyzed if they eat the bait.",icon:"Meat",color:"Lemon",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},D1={name:"Shock Trap",explain:"A trap that immobilizes a target. Use it to capture monsters.",icon:"Trap",color:"Lemon",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},P1={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},U1={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0027",map_filtering_type:"INVISIBLE",points:[]},O1={name:"Nitroshroom",explain:"A hard-to-find mushroom with the power to generate blazing heat. Required to craft Gunpowder.",icon:"Mushroom",color:"Red",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-966.4478759765625,-1.896432876586914,1206.9349365234375],[-1043.754150390625,-20.071184158325195,1204.8255615234375],[-1031.5042724609375,5.077107906341553,1174.0194091796875],[-999.938232421875,8.93783187866211,1156.3841552734375],[-749.8233032226562,-15.977325439453125,1292.53759765625],[-702.3436889648438,-26.75752067565918,1253.7349853515625],[-719.6359252929688,-26.951831817626953,1256.9244384765625],[-1010.0548706054688,-53.731414794921875,1216.6214599609375]]},V1={name:"Quicksand",explain:"A trap laid by a Balahara to snare prey. The shifting sand hinders the movement of those caught inside.",icon:"INVALID",color:"",map_icon:"MAP_0023",map_filtering_type:"INVISIBLE",points:[]},F1={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},G1={name:null,explain:null,icon:"Pouch",color:"Sky",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},B1={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},k1={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},H1={name:null,explain:null,icon:"Pouch",color:"Lemon",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},z1={name:null,explain:null,icon:"Pouch",color:"Rose",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},W1={name:null,explain:null,icon:"unk2",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},X1={name:"Large Barrel Bomb",explain:"A bomb that can be rolled after placing it on the ground. Strike it to trigger a powerful blast.",icon:"Bomb",color:"Vermilion",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},Y1={name:"Bonepile",explain:"A place for gathering bone materials.",icon:"INVALID",color:"",map_icon:"MAP_0007",map_filtering_type:"COLLECT",points:[]},q1={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0000",map_filtering_type:"NON_FILTERING_TARGET",points:[]},j1={name:"Unstable Fulgurite Outcrop",explain:"A brittle outcropping of fulgurite. A strong impact will bring it down, revealing sharp crystalline thorns in its place.",icon:"Trap",color:"Brown",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-1059.6290283203125,98.37602233886719,861.3026123046875]]},K1={name:"Ancient Wyvern Coin",explain:null,icon:"Coin",color:"Orange",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Q1={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0000",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Z1={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},$1={name:"Fulgurite Vein",explain:"A place for gathering rare special items.",icon:"Pouch",color:"Ultramarine",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-1025.30908203125,26.27853012084961,890.0659790039062],[-1024.839111328125,43.428157806396484,932.593994140625],[-1004.6593627929688,68.02176666259766,719.2385864257812]]},J1={name:"Area 4 West",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. A dangerous area easily found by monsters.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-1094.7307,87.058784,785.6916]]},eg={name:"Grounding Rock",explain:"A large rock pillar that intercepts lightning strikes, affording protection to the surrounding area.",icon:"INVALID",color:"",map_icon:"MAP_0024",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-571.2557983398438,4.622416973114014,778.686279296875],[-640.85107421875,.5275682806968689,1007.52099609375],[-1002.7459716796875,24.88783073425293,1398.5679931640625],[-424.5050048828125,8.359966278076172,790.2025146484375]]},tg={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},ng={name:null,explain:null,icon:"Question Mark",color:"none",map_icon:null,map_filtering_type:null,points:[]},ig={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},sg={name:"Mineral Fragments",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},og={name:"<REF Item_IT_197>",explain:"<REF Item_IT_EXP_197>",icon:"Bomb",color:"Vermilion",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},rg={name:"Blue Mushroom",explain:"A mushroom infused with power-enhancing effects. Used in restorative items.",icon:"Mushroom",color:"Blue",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-1015.1904907226562,30.0030460357666,979.627685546875],[-1011.8351440429688,34.14652633666992,972.2304077148438],[-783.9458618164062,44.066078186035156,814.3068237304688]]},ag={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0000",map_filtering_type:"NON_FILTERING_TARGET",points:[]},lg={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},cg={name:null,explain:null,icon:"Pouch",color:"Yellow",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},ug={name:null,explain:null,icon:"Slinger",color:"Lemon",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},hg={name:null,explain:null,icon:"Slinger",color:"Yellow",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},pg={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},dg={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},fg={name:"Herb",explain:"A primary ingredient in potions.",icon:"Herb",color:"Green",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-758.7765502929688,50.6192741394043,797.9362182617188],[-798.827880859375,36.95350646972656,840.860107421875],[-1000.7142944335938,25.23038673400879,898.1785278320312],[-802.4279174804688,10.000028610229492,784.8377075195312],[-752.061279296875,14.057373046875,913.972900390625],[-736.1966552734375,-20.263174057006836,1271.4227294921875],[-1026.70068359375,20.542606353759766,1072.0089111328125],[-917.88134765625,-61.671356201171875,1278.033203125],[-982.6244506835938,46.090240478515625,854.6493530273438],[-1070.337890625,40.34526062011719,1003.9174194335938],[-773.8230590820312,-2.5784976482391357,1440.0057373046875],[-604.357177734375,-11.884293556213379,1548.6898193359375],[-952.1586303710938,-7.48455286026001,1045.3558349609375],[-665.5281982421875,6.537465572357178,870.2699584960938],[-692.3408813476562,8.147189140319824,922.615234375],[-491.42974853515625,1.6904072761535645,855.372314453125],[-640.240234375,2.673210859298706,912.5327758789062],[-506.1603698730469,.5185500979423523,930.3884887695312],[-693.74609375,9.073090553283691,893.460693359375],[-623.5761108398438,3.8959434032440186,857.72265625],[-657.7245483398438,4.327881813049316,905.8806762695312],[-649.4911499023438,6.547239780426025,847.3792114257812],[-531.5925903320312,-.16626931726932526,942.5731201171875],[-577.531494140625,.10696381330490112,951.0275268554688],[-762.540771484375,56.81644821166992,760.2047119140625]]},mg={name:"Spit-Up Mucus",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},_g={name:"Heavy Severing Pod",explain:null,icon:"Slinger",color:"White",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},gg={name:"Flashfly Cage",explain:"Has your Palico set out a cage of flashflies. Hitting it will cause it to emit a flash that blinds monsters.",icon:"Trap",color:"Yellow",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},Mg={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0000",map_filtering_type:"NON_FILTERING_TARGET",points:[]},xg={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},yg={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Eg={name:null,explain:null,icon:"Pouch",color:"Sky",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},Ig={name:null,explain:null,icon:"Mushroom",color:"Rose",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},Ag={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},vg={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0000",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Tg={name:"Raw Meat",explain:"A trap that attracts carnivores. Snared monsters can be used for crafting or cooking.",icon:"Meat",color:"Red",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Sg={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},bg={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Ng={name:null,explain:null,icon:"Slinger",color:"Rose",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Lg={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Rg={name:"Burst Pod",explain:null,icon:"Slinger",color:"Emerald",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},wg={name:"Sleep Herb",explain:"A plant containing sleeping agents. Needed to craft sleep ammo and tranq bombs.",icon:"Herb",color:"Sky",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-421.80438232421875,13.686381340026855,692.7826538085938]]},Cg={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Dg={name:"Ephemeral Blossom",explain:"A place for gathering rare special items.",icon:"Pouch",color:"Bpurple",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},Pg={name:"{0} Tent",explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Ug={name:"Blue Thunder Crystal Fragment",explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Og={name:"Sharp Crystal Pillar",explain:"A jagged pillar of keen fulgurite crystal. Crumbles on impact, collapsing atop anything caught beneath.",icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-1024.31005859375,99.65743255615234,826.2197875976562],[-1071.7569580078125,98.33719635009766,843.5969848632812],[-1036.823974609375,99.69999694824219,877.9255981445312]]},Vg={name:null,explain:null,icon:"Bomb",color:"White",map_icon:"MAP_0004",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},Fg={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Gg={name:"Grounding Rock",explain:"A large rock pillar that intercepts lightning strikes, affording protection to the surrounding area.",icon:"INVALID",color:"",map_icon:"MAP_0024",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-522.2457275390625,2.984981060028076,861.2299194335938],[-830.1223754882812,2.666806936264038,1379.0269775390625],[-691.6591186523438,-3.7997000217437744,1521.34765625]]},Bg={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},kg={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Hg={name:"Falling Grounding Rock",explain:"A grounding rock protrusion; easily felled when struck. The fallen fragments repel electricity, and can be used as Slinger ammunition.",icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-403.256103515625,18.996360778808594,1639.8330078125]]},zg={name:"Thorngrass Pod",explain:"Slinger ammo that lodges into a target. Attacking where it's lodged deals extra damage.",icon:"Slinger",color:"Orange",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[[-646.8853149414062,2.847856044769287,982.5858154296875],[-685.3071899414062,5.271339416503906,986.8311767578125],[-663.8606567382812,4.4121856689453125,932.7621459960938],[-615.7186889648438,.46900129318237305,950.0404052734375],[-465.09503173828125,.08023929595947266,896.6046752929688],[-773.0750732421875,-4.7748799324035645,1455.15283203125]]},Wg={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Xg={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Yg={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},qg={name:null,explain:null,icon:"Pouch",color:"Purple",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},jg={name:"Area 13 West",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. May be found by monsters, so remain cautious.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-1070.7848,15.319534,1298.9568]]},Kg={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Qg={name:"Beautiful Aquatica",explain:"A place for gathering special items.",icon:"Pouch",color:"Emerald",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-907.0245361328125,-67.1280517578125,1241.9649658203125]]},Zg={name:null,explain:null,icon:"Herb",color:"Ivory",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},$g={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0043",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},Jg={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},e2={name:"Carrion Mushroom",explain:"A place for gathering rare special items.",icon:"Corpse",color:"Brown",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},t2={name:"Flowfern",explain:"This plant's leaves store a great amount of water. A component for making water ammo.",icon:"Herb",color:"Ultramarine",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-537.3727416992188,2.080885171890259,764.8727416992188],[-447.9639587402344,-1.0136330127716064,825.7296142578125],[-919.0355224609375,4.292603015899658,1353.0555419921875],[-964.8564453125,4.366180419921875,1331.817138671875],[-931.6283569335938,4.374699592590332,1361.2158203125]]},n2={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},i2={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},s2={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},o2={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},r2={name:null,explain:null,icon:"Trap",color:"Gray",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},a2={name:null,explain:null,icon:"Slinger",color:"Sky",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},l2={name:"Shed Fur",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},c2={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0028",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},u2={name:"Unstable Fulgurite Ground",explain:"A brittle cliffside made of fulgurite. A strong impact will bring it down, revealing sharp crystalline thorns in its place.",icon:"Trap",color:"Brown",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-1015.010986328125,91.0536880493164,864.5839233398438]]},h2={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0000",map_filtering_type:"NON_FILTERING_TARGET",points:[]},p2={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},d2={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},f2={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},m2={name:"Poisoned Meat",explain:"A trap that attracts carnivores. They'll be poisoned if they eat the bait.",icon:"Meat",color:"Purple",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},_2={name:"Blackened Fossil",explain:"A place for gathering special items.",icon:"Pouch",color:"Gray",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-646.4461059570312,.9047701954841614,1438.557373046875],[-753.4925537109375,1.031788945198059,1493.8253173828125]]},g2={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},M2={name:"Base Camp",explain:"The expedition team's base of operations, offering a host of useful support facilities.",icon:"INVALID",color:"",map_icon:"MAP_0000",map_filtering_type:"NON_FILTERING_TARGET",points:[[-772.0786,57.84536,731.1908]]},x2={name:"Mucus",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},y2={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},E2={name:null,explain:null,icon:"Slinger",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},I2={name:"Chainblade Fragment",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},A2={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0037",map_filtering_type:"NON_FILTERING_TARGET",points:[]},v2={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},T2={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},S2={name:"Scraps of Cloth",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},b2={name:null,explain:null,icon:"Bomb",color:"Red",map_icon:"MAP_0004",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},N2={name:"Drugged Meat",explain:"A trap that attracts carnivores. They'll be put to sleep if they eat the bait.",icon:"Meat",color:"Sky",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},L2={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},R2={name:"Blastnut",explain:"A nut that explodes its hard contents on impact. Used to make sticky ammo.",icon:"Husk",color:"Vermilion",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-1028.8751220703125,6.779417514801025,1212.6998291015625],[-1114.300537109375,27.088123321533203,951.6253662109375],[-1117.189208984375,24.73404312133789,942.1217651367188],[-887.8992919921875,-61.549110412597656,1307.076904296875]]},w2={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0038",map_filtering_type:"NON_FILTERING_TARGET",points:[]},C2={name:"Slashberry",explain:"A nut that shatters into razor-like pieces. Used to make slicing ammo.",icon:"Husk",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-613.8306884765625,13.503283500671387,671.6697387695312],[-597.709716796875,12.594127655029297,672.1507568359375]]},D2={name:"Sparkflint",explain:"Slinger ammo that can be used to scare away creatures that don't like fire and draw in those that do.",icon:"Slinger",color:"Red",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[[-703.0866088867188,12.172187805175781,829.8468017578125],[-801.3504638671875,-2.0760135650634766,1375.24609375]]},P2={name:null,explain:null,icon:"Spiderweb",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},U2={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0035",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-1019.21533203125,26.915376663208008,884.107421875],[-451.3096008300781,2.464986801147461,944.0245361328125],[-759.8129272460938,21.15921401977539,1125.83154296875],[-687.4744873046875,-5.632816314697266,1518.73388671875],[-461.7573547363281,-.34720277786254883,933.7569580078125]]},O2={name:"Sandpepper",explain:"A place for gathering special items.",icon:"Pouch",color:"Green",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-580.3350219726562,2.520552635192871,808.5200805664062],[-602.4641723632812,2.5177783966064453,852.9259643554688],[-630.40966796875,7.192540168762207,835.6546630859375],[-545.6346435546875,7.459354400634766,740.1819458007812]]},V2={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},F2={name:"Adamant Seed",explain:"Temporarily raises your defense when ingested by hardening tissue.",icon:"Seed",color:"Orange",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-998.5107421875,11.543513298034668,964.5308837890625],[-493.1620178222656,34.540016174316406,1573.716064453125],[-491.4817199707031,64.79236602783203,1554.12890625],[-484.9670715332031,97.41446685791016,1551.9666748046875],[-947.4636840820312,39.57857894897461,926.8762817382812],[-985.05029296875,-74.36853790283203,1266.2049560546875]]},G2={name:null,explain:null,icon:"Mushroom",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},B2={name:null,explain:null,icon:"Slinger",color:"White",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},k2={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},H2={name:"Toadstool",explain:"A mushroom with poison properties. Needed to craft poison ammo and smoke bombs.",icon:"Mushroom",color:"Purple",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-1007.3939819335938,16.013832092285156,960.4461669921875]]},z2={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},W2={name:"Crushing Chainblade Fragment",explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},X2={name:"Wylky Crystal Outcrop",explain:"A place for gathering rare special items.",icon:"Pouch",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-876.0523071289062,-58.85868453979492,1238.33251953125],[-855.5850219726562,-59.701576232910156,1270.307373046875]]},Y2={name:"Grounding Pod",explain:null,icon:"Slinger",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},q2={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},j2={name:"Tent",explain:"The Avis Unit's tent. Enter to manage items, change equipment, and more.",icon:"INVALID",color:"",map_icon:"MAP_0041",map_filtering_type:"NON_FILTERING_TARGET",points:[[-744.4500122070312,57.54999923706055,753.5]]},K2={name:null,explain:null,icon:"Slinger",color:"White",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},Q2={name:"Mining Outcrop",explain:"A place for mining ore.",icon:"INVALID",color:"",map_icon:"MAP_0006",map_filtering_type:"COLLECT",points:[[-953.9979858398438,20.696041107177734,1086.8873291015625],[-974.6369018554688,67.84642791748047,731.0146484375],[-1010.0230102539062,44.4473991394043,929.8271484375],[-957.0223388671875,41.93156814575195,943.1287841796875],[-950.5643920898438,39.67677307128906,921.1859741210938],[-418.5657043457031,1.0144630670547485,849.7640991210938],[-597.6471557617188,22.973480224609375,732.030517578125],[-1107.1416015625,27.74831771850586,957.089111328125],[-1120.943115234375,24.966428756713867,943.5217895507812],[-885.7456665039062,-10.342576026916504,1074.5540771484375],[-865.7285766601562,-59.66184997558594,1254.7349853515625],[-879.425537109375,-61.86297607421875,1293.650390625],[-1008.25,66.86883544921875,721.3162231445312],[-996.3800659179688,45.71980285644531,947.51611328125],[-949.0057373046875,-5.0461297035217285,1025.2479248046875],[-682.652587890625,22.82948875427246,781.10107421875],[-470.37786865234375,-2.892517566680908,1591.98583984375],[-501.88873291015625,34.47950744628906,1563.8309326171875],[-482.1405334472656,65.32212829589844,1560.0845947265625],[-483.1880187988281,96.06633758544922,1521.9617919921875],[-476.1952819824219,97.94386291503906,1531.0601806640625],[-650.536376953125,20.421951293945312,788.5628051757812],[-588.5726318359375,11.483996391296387,685.1685180664062],[-489.1044616699219,96.08761596679688,1525.148681640625],[-480.4881591796875,96.03986358642578,1536.20458984375],[-468.2545471191406,97.84501647949219,1536.1212158203125],[-486.4932861328125,95.90666198730469,1545.7635498046875]]},Z2={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},$2={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},J2={name:"Saliva Traces",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},e3={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},t3={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0009",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},n3={name:"Bonepile",explain:"A place for gathering bone materials.",icon:"INVALID",color:"",map_icon:"MAP_0007",map_filtering_type:"COLLECT",points:[]},i3={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},s3={name:"Sharp Feathers",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},o3={name:null,explain:null,icon:"Pouch",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},r3={name:"Stone",explain:null,icon:"Slinger",color:"Gray",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},a3={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},l3={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},c3={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0049",map_filtering_type:"INVISIBLE",points:[]},u3={name:null,explain:null,icon:"Slinger",color:"Ultramarine",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},h3={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},p3={name:"Area 4 Mineral Cave",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. A safe area that is not easily found by monsters.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-991.67236,65.97437,725.0487]]},d3={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},f3={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},m3={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0049",map_filtering_type:"INVISIBLE",points:[]},_3={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},g3={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},M3={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0027",map_filtering_type:"INVISIBLE",points:[]},x3={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},y3={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},E3={name:"Half-Eaten Carcass",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},I3={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0000",map_filtering_type:"NON_FILTERING_TARGET",points:[]},A3={name:"Grounding Stone",explain:"Slinger ammo that can dissipate electricity from the area it lands.",icon:"Slinger",color:"Yellow",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[[-398.9066467285156,-20.24335479736328,1638.044921875]]},v3={name:"Giant Windward Succulent",explain:"A place for gathering rare special items.",icon:"Pouch",color:"Mos",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-433.21417236328125,1.4732170104980469,930.2410888671875],[-762.5855712890625,23.502796173095703,1141.33544921875],[-922.998779296875,4.470283031463623,1341.5465087890625]]},T3={name:"Windward Succulent",explain:"A place for gathering special items.",icon:"Pouch",color:"Sgreen",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-693.41748046875,7.9139404296875,960.1820068359375],[-455.7947692871094,.8828564882278442,917.506591796875],[-435.61248779296875,1.062157154083252,923.3505859375],[-779.4093017578125,-5.70433235168457,1352.533935546875],[-443.80712890625,2.1966145038604736,939.3536376953125],[-439.5524597167969,1.0325907468795776,923.60595703125],[-355.1173400878906,10.042143821716309,813.7498168945312],[-969.240234375,5.65574836730957,1323.445068359375],[-944.3955078125,4.4821014404296875,1320.2681884765625],[-954.8806762695312,4.499902725219727,1315.1024169921875],[-438.7095947265625,2.2553932666778564,937.6971435546875],[-921.0115356445312,5.212779521942139,1327.9447021484375],[-943.5957641601562,4.4299798011779785,1315.119873046875],[-967.5398559570312,5.1298346519470215,1340.74560546875]]},S3={name:null,explain:null,icon:"Slinger",color:"Purple",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},b3={name:null,explain:null,icon:"Trap",color:"White",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},N3={name:null,explain:null,icon:"Slinger",color:"Ultramarine",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},L3={name:"Attract Vigorwasps",explain:"Has your Palico create a scent that attracts Vigorwasps. After a certain amount of time, the scent will fade.",icon:"Trap",color:"Green",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},R3={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0008",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},w3={name:null,explain:null,icon:"Seed",color:"Red",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},C3={name:"Thorngrass Pod",explain:null,icon:"Slinger",color:"Orange",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},D3={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},P3={name:"Sit",explain:null,icon:"INVALID",color:"",map_icon:"MAP_0027",map_filtering_type:"INVISIBLE_ADDBEACON",points:[]},U3={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},O3={name:"Exquisite Fossil",explain:"A place for gathering special items.",icon:"Pouch",color:"Orange",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-796.8714599609375,-52.09714126586914,1199.4908447265625],[-1076.600830078125,43.37771987915039,1011.3133544921875],[-1057.825439453125,42.865089416503906,1030.8004150390625],[-1054.39697265625,42.775169372558594,1035.51611328125],[-1046.20263671875,42.70200729370117,1041.029541015625],[-1098.2552490234375,25.897729873657227,938.22265625],[-1097.61669921875,28.301610946655273,944.9871215820312],[-703.0208740234375,-34.65727233886719,1222.3385009765625],[-813.9768676757812,-56.536346435546875,1230.248779296875],[-820.0128173828125,-59.07411575317383,1227.7032470703125],[-825.5243530273438,-58.71091079711914,1223.8271484375],[-984.291748046875,-64.55894470214844,1221.316162109375],[-916.0018920898438,-36.19459915161133,1329.7119140625],[-899.4322509765625,-39.531742095947266,1310.4442138671875]]},V3={name:null,explain:null,icon:"Bomb",color:"White",map_icon:"MAP_0004",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},F3={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},G3={name:null,explain:null,icon:"Question Mark",color:"Gray",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},B3={name:null,explain:null,icon:"Question Mark",color:"Green",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},k3={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},H3={name:"Half-Eaten Carcass",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},z3={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},W3={name:"Heavy Blunt Pod",explain:null,icon:"Slinger",color:"Ivory",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},X3={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Y3={name:null,explain:null,icon:"Question Mark",color:"Gray",map_icon:"MAP_0004",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},q3={name:"Bonepile",explain:"A place for gathering bone materials.",icon:"INVALID",color:"",map_icon:"MAP_0007",map_filtering_type:"COLLECT",points:[]},j3={name:"Rockburst",explain:"Slinger ammo that detonates on impact. Use it to stagger a monster when you're in a pinch.",icon:"Slinger",color:"Emerald",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[[-906.8577880859375,9.419724464416504,837.0560913085938],[-1020.6240844726562,21.537975311279297,922.4004516601562],[-1072.276611328125,86.83836364746094,786.5906982421875],[-966.5906982421875,4.145262718200684,1169.94091796875],[-810.1004028320312,-.7525286674499512,1242.8936767578125],[-461.3645935058594,-.6488654017448425,937.637451171875],[-740.638671875,16.6224308013916,785.9660034179688],[-730.6990966796875,-44.29602813720703,1217.373291015625],[-953.0632934570312,-3.0879318714141846,830.05224609375],[-445.27392578125,12.191285133361816,700.3682250976562],[-935.039306640625,-8.786548614501953,1061.6444091796875]]},K3={name:null,explain:null,icon:"Question Mark",color:"Gray",map_icon:"INVALID",map_filtering_type:"ALL",points:[]},Q3={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Z3={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0008",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},$3={name:"Antidote Herb",explain:"A primary ingredient in antidotes.",icon:"Herb",color:"Blue",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-718.3597412109375,14.551639556884766,1036.826904296875],[-476.5086669921875,4.6415815353393555,732.5975341796875]]},J3={name:null,explain:null,icon:"Slinger",color:"Pink",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},e5={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},t5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},n5={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},i5={name:null,explain:null,icon:"Slinger",color:"White",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},s5={name:"Fire Herb",explain:"A wondrous, flammable plant. Useful for crafting explosives and Flaming Ammo.",icon:"Herb",color:"Red",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-869.8937377929688,-2.3847970962524414,1217.2032470703125],[-901.71484375,.5542996525764465,1179.106201171875],[-742.1691284179688,14.996613502502441,892.9616088867188],[-728.6968994140625,14.306653022766113,899.9522705078125],[-721.5257568359375,14.135298728942871,893.9116821289062],[-834.8640747070312,6.517627716064453,1145.829833984375],[-759.5100708007812,36.31483840942383,845.3674926757812]]},o5={name:"Makeshift Camp",explain:"A temporary camp with all the necessities for a hunt. Change your equipment and organize your items here. Accessible by fast travel with <ICON UI_DECIDE>.",icon:"INVALID",color:"",map_icon:"MAP_0030",map_filtering_type:"NON_FILTERING_TARGET",points:[[-958.9329,4.895598,1351.608],[0,0,-858306884765625e-20]]},r5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},a5={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},l5={name:"Stone",explain:"Slinger ammo that can be used to hit faraway plant life and bombs.",icon:"Slinger",color:"Gray",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[[-605.116943359375,1.0463953018188477,916.9365234375],[-549.9237060546875,-.12517622113227844,950.5775756835938],[-521.8232421875,2.459649085998535,864.9108276367188],[-502.5694885253906,1.6454639434814453,929.1144409179688],[-620.5595092773438,11.181571006774902,784.011474609375]]},c5={name:"Giant Sand Pit",explain:"A trap laid by a Balahara to snare prey. Large monsters that draw too close are caught in its flow and dragged underground.",icon:"INVALID",color:"",map_icon:"MAP_0023",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-741.9536743164062,27.246810913085938,1184.001953125]]},u5={name:"Giant Falling Boulder",explain:"Large boulders that could fall at any moment. Hit them with your Slinger to make them drop and hit whatever lurks underneath.",icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-881,2,801]]},h5={name:"Falling Boulder",explain:"Boulders that could fall at any moment. Use your Slinger to drop them onto unsuspecting targets.",icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-935.4688720703125,5.572800159454346,836],[-930.0401000976562,7.583700180053711,808.060791015625],[-713,28.141300201416016,817],[-962.3275146484375,12.430899620056152,969.7935791015625],[-922.2833862304688,6.78879976272583,819.45947265625],[-743.5255737304688,26.259199142456055,803.3751220703125]]},p5={name:"Livestock Fence",explain:null,icon:"INVALID",color:"",map_icon:"MAP_0028",map_filtering_type:"INVISIBLE",points:[[-858.9600219726562,10.149999618530273,1014]]},d5={name:"Lightning Rod",explain:"A place with frequent lightning strikes due to the influence of the Sandtide.",icon:"INVALID",color:"",map_icon:"MAP_0048",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-389.5415954589844,33.917301177978516,773.2520141601562],[-459.5415954589844,26.45701026916504,798.2518920898438],[-433.0971984863281,30,718.2518920898438],[-473.0971984863281,30,658.2518920898438],[-459.5415954589844,26.45701026916504,878.2518920898438],[-459.5415954589844,26.45701026916504,959.7481079101562],[-539.5416259765625,26.45701026916504,959.7481079101562],[-539.5416259765625,26.45701026916504,878.2518920898438],[-539.5416259765625,26.45701026916504,798.2518920898438],[-539.5416259765625,26.45701026916504,718.2518920898438],[-619.5416259765625,26.45701026916504,959.7481079101562],[-619.5416259765625,40,878.2518920898438],[-619.5416259765625,39.999969482421875,798.2518920898438],[-619.5416259765625,59.999969482421875,738.2518920898438],[-619.5416259765625,26.45701026916504,1039.748046875],[-699.5416259765625,69.99996948242188,1039.748046875],[-699.5416259765625,26.45701026916504,959.7481079101562],[-699.5416259765625,26.45701026916504,878.2518920898438],[-699.5416259765625,59.999969482421875,810.7518920898438],[-486.31939697265625,26.45701026916504,718.2518920898438],[-940.4583740234375,110,878.2518920898438],[-1020.4580078125,120,878.2518920898438],[-940.4583740234375,110,798.2518920898438],[-940.4583740234375,120,718.2518920898438],[-1020.4580078125,110,718.2518920898438],[-1020.4580078125,180,798.2518920898438],[-1020.4580078125,110,959.7481079101562],[-1020.4580078125,110,1039.748046875],[-1100.4580078125,140,798.2518920898438],[-1100.4580078125,140,878.2518920898438],[-699.5416259765625,59.999969482421875,1119.748046875],[-699.5416259765625,59.999969482421875,1199.748046875],[-699.5416259765625,59.999969482421875,1279.748046875],[-699.5416259765625,59.999969482421875,1359.748046875],[-699.5416259765625,59.999969482421875,1439.748046875],[-699.5416259765625,59.999969482421875,1519.748046875],[-699.5416259765625,59.999969482421875,1599.748046875],[-780.4583740234375,86.8243637084961,1119.748046875],[-780.4583740234375,59.999969482421875,1199.748046875],[-860.4583740234375,59.999969482421875,1199.748046875],[-940.4583740234375,59.999969482421875,1199.748046875],[-1020.4580078125,59.999969482421875,1199.748046875],[-780.4583740234375,59.999969482421875,1279.748046875],[-860.4583740234375,59.999969482421875,1279.748046875],[-940.4583740234375,59.999969482421875,1279.748046875],[-1020.4580078125,59.999969482421875,1279.748046875],[-1100.4580078125,59.999969482421875,1279.748046875],[-780.4583740234375,59.999969482421875,1359.748046875],[-860.4583740234375,59.999969482421875,1359.748046875],[-940.4583740234375,59.999969482421875,1359.748046875],[-1020.4580078125,59.999969482421875,1359.748046875],[-1100.4580078125,69.99996948242188,1359.748046875],[-1180.4580078125,59.999969482421875,1359.748046875],[-780.4583740234375,59.999969482421875,1439.748046875],[-860.4583740234375,59.999969482421875,1439.748046875],[-940.4583740234375,59.999969482421875,1439.748046875],[-1020.4580078125,59.999969482421875,1439.748046875],[-1100.4580078125,69.99996948242188,1439.748046875],[-619.5416259765625,59.999969482421875,1519.748046875],[-780.4583740234375,59.999969482421875,1519.748046875],[-619.5416259765625,59.999969482421875,1599.748046875],[-539.5416259765625,59.999969482421875,1599.748046875],[-459.5415954589844,59.999969482421875,1599.748046875],[-379.5415954589844,59.999969482421875,1599.748046875],[-299.5415954589844,59.999969482421875,1599.748046875],[-860.4583740234375,59.999969482421875,1149.748046875],[-940.4583740234375,59.999969482421875,1139.748046875],[-1020.4580078125,59.999969482421875,1119.748046875],[-1100.4580078125,59.999969482421875,1199.748046875],[-1020.4580078125,59.999969482421875,1519.748046875],[-940.4583740234375,59.999969482421875,1519.748046875],[-459.5415954589844,140,1519.748046875]]},f5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},m5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},_5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},g5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},M5={name:null,explain:null,icon:"Herb",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},x5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},y5={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},E5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},I5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},A5={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},v5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},T5={name:null,explain:null,icon:"Slinger",color:"Gray",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},S5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},b5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},N5={name:null,explain:null,icon:"Herb",color:"Green",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},L5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},R5={name:null,explain:null,icon:"Webbing",color:"Orange",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},w5={name:null,explain:null,icon:"Slinger",color:"Pink",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},C5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},D5={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},P5={name:null,explain:null,icon:"Seed",color:"Orange",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},U5={name:null,explain:null,icon:"Husk",color:"Rose",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},O5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},V5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},F5={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},G5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},B5={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0007",map_filtering_type:"COLLECT",points:[]},k5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},H5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},z5={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0006",map_filtering_type:"COLLECT",points:[]},W5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},X5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Y5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},q5={name:null,explain:null,icon:"Slinger",color:"Yellow",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},j5={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0030",map_filtering_type:"NON_FILTERING_TARGET",points:[]},K5={name:null,explain:null,icon:"Herb",color:"Mos",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},Q5={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0029",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},Z5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},$5={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},J5={name:null,explain:null,icon:"Webbing",color:"Orange",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},eM={name:null,explain:null,icon:"Herb",color:"Blue",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},tM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},nM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},iM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},sM={name:null,explain:null,icon:"Mushroom",color:"Orange",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},oM={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0010",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},rM={name:null,explain:null,icon:"Herb",color:"Red",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},aM={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},lM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},cM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},uM={name:null,explain:null,icon:"Mushroom",color:"Lemon",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},hM={name:null,explain:null,icon:"Herb",color:"Ivory",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},pM={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},dM={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},fM={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},mM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},_M={name:null,explain:null,icon:"Husk",color:"Brown",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},gM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},MM={name:null,explain:null,icon:"Mushroom",color:"Purple",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},xM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},yM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},EM={name:null,explain:null,icon:"Slinger",color:"Rose",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},IM={name:null,explain:null,icon:"Seed",color:"Red",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},AM={name:null,explain:null,icon:"Question Mark",color:"none",map_icon:null,map_filtering_type:null,points:[]},vM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},TM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},SM={name:null,explain:null,icon:"Question Mark",color:"none",map_icon:null,map_filtering_type:null,points:[]},bM={name:null,explain:null,icon:"Slinger",color:"Emerald",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},NM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},LM={name:null,explain:null,icon:"Seed",color:"Blue",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},RM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},wM={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},CM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},DM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},PM={name:null,explain:null,icon:"Seed",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},UM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},OM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},VM={name:null,explain:null,icon:"Herb",color:"Ultramarine",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},FM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},GM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},BM={name:null,explain:null,icon:"Mushroom",color:"Mos",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},kM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},HM={name:null,explain:null,icon:"Spiderweb",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},zM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},WM={name:null,explain:null,icon:"Seed",color:"Rose",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},XM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},YM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},qM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},jM={name:"To Riverside Trail",explain:"A path that runs alongside a river. Allows passage to adjacent regions.",icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},KM={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},QM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},ZM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},$M={name:null,explain:null,icon:"Mushroom",color:"Red",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},JM={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},e8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},t8={name:"Vine Trap",explain:"An enormous mass of overgrown vines. They'll fall when struck, and monsters caught underneath will temporarily be unable to move.",icon:"INVALID",color:"",map_icon:"MAP_0010",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-505.793701171875,15.591110229492188,894.02978515625],[-649.2061767578125,14.818670272827148,900.8154296875],[-619.4550170898438,10.590700149536133,867.9716796875]]},n8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},i8={name:null,explain:null,icon:"Herb",color:"Sky",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},s8={name:null,explain:null,icon:"Mushroom",color:"Blue",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},o8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},r8={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},a8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},l8={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},c8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},u8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},h8={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},p8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},d8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},f8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},m8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},_8={name:null,explain:null,icon:"Slinger",color:"White",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},g8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},M8={name:null,explain:null,icon:"Husk",color:"Vermilion",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},x8={name:null,explain:null,icon:"Mushroom",color:"Rose",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},y8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},E8={name:null,explain:null,icon:"Slinger",color:"Ultramarine",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},I8={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0030",map_filtering_type:"NON_FILTERING_TARGET",points:[]},A8={name:null,explain:null,icon:"Husk",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},v8={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},T8={name:"Honey",explain:"Highly nutritious honey. Combine with potions to make the more potent mega potion.",icon:"Webbing",color:"Orange",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-932.7947998046875,9.483081817626953,1095.6156005859375],[-449.53240966796875,-2.01193904876709,963.9937744140625],[-1049.93798828125,42.439720153808594,1023.1270141601562],[-958.7234497070312,4.294836044311523,1337.6837158203125],[-920.59814453125,4.754890441894531,1337.23095703125],[-943.6793212890625,4.663693428039551,1355.491943359375],[-516.2139282226562,-.12708339095115662,984.1575927734375],[-501.6488952636719,-.19046896696090698,973.2847900390625],[-484.2120056152344,-.2337999939918518,975.5036010742188],[-798.1145629882812,16.139183044433594,883.2532348632812],[-954.3211059570312,5.85917854309082,1367.09716796875],[-822.7444458007812,9.090126037597656,900.2965087890625]]},S8={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},b8={name:null,explain:null,icon:"Pouch",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},N8={name:null,explain:null,icon:"Question Mark",color:"Gray",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},L8={name:null,explain:null,icon:"Egg",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},R8={name:"Dragonfell Berry",explain:"A mysterious berry, rumored for eons to be loathed by dragons. Required to craft Dragon Ammo.",icon:"Seed",color:"Rose",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-727.87353515625,5.4841203689575195,1513.4427490234375],[-740.4676513671875,2.01352596282959,1495.879638671875],[-738.9652709960938,1.7363519668579102,1491.777099609375],[-997.5126953125,45.662471771240234,932.3653564453125],[-977.9551391601562,44.91749954223633,929.7026977539062],[-965.3820190429688,27.5192928314209,771.8565673828125]]},w8={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},C8={name:"Thorngrass Pod",explain:"Slinger ammo that lodges into a target. Attacking where it's lodged deals extra damage.",icon:"Slinger",color:"Orange",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[[-940.9384765625,23.633399963378906,1066.5439453125]]},D8={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},P8={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},U8={name:null,explain:null,icon:"Bomb",color:"Gray",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},O8={name:"Chewed Up Remains",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},V8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},F8={name:"Wylky Gemstone",explain:"A place for gathering special items.",icon:"Pouch",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-842.5449829101562,-59.37726974487305,1247.953369140625],[-859.2725219726562,-62.17856216430664,1282.7542724609375],[-856.3601684570312,-62.831119537353516,1300.61572265625],[-859.1174926757812,-62.78197479248047,1296.3524169921875],[-853.6119995117188,-62.1519660949707,1287.243896484375],[-873.5745849609375,-58.94062423706055,1244.357666015625],[-873.16015625,-58.81449890136719,1237.4759521484375],[-841.6586303710938,-59.244606018066406,1251.9266357421875]]},G8={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},B8={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},k8={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},H8={name:"Vitalily",explain:"A plant that releases a healing nectar into the air when struck.",icon:"INVALID",color:"",map_icon:"MAP_0009",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-567.1362915039062,.001330111175775528,880.9829711914062],[-563.5050048828125,-.011355489492416382,862.6373901367188],[-471.6409912109375,11.503179550170898,688.4533081054688],[-471.64019775390625,6.680619239807129,722.822021484375],[-879.861328125,-2.065596103668213,1198.8455810546875],[-875.2823486328125,1.6110000610351562,1162.5260009765625],[-561.420166015625,.01508188247680664,869.5947265625],[-486.4071960449219,4.980648994445801,697.3300170898438],[-904.212890625,-2.3286235332489014,1206.292236328125]]},z8={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},W8={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0035",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-1019.21533203125,26.915376663208008,884.107421875],[-451.3096008300781,2.464986801147461,944.0245361328125],[-759.8129272460938,21.15921401977539,1125.83154296875],[-687.4744873046875,-5.632816314697266,1518.73388671875]]},X8={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Y8={name:"Pitfall Trap",explain:"A trap for catching large monsters. It is tripped by heavy weight.",icon:"Trap",color:"Mos",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},q8={name:null,explain:null,icon:"Question Mark",color:"none",map_icon:null,map_filtering_type:null,points:[]},j8={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},K8={name:null,explain:null,icon:"Pouch",color:"Ivory",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},Q8={name:null,explain:null,icon:"Question Mark",color:"none",map_icon:null,map_filtering_type:null,points:[]},Z8={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},$8={name:null,explain:null,icon:"Egg",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},J8={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},ex={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},tx={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},nx={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},ix={name:"Dung",explain:"Its eye-watering stench makes useful Slinger ammo.",icon:"Dung",color:"Brown",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-1018.5193481445312,68.50170135498047,763.111328125],[-351.5657958984375,9.98947811126709,809.669921875],[-685.2730102539062,-.8063541650772095,1066.85498046875]]},sx={name:"Fulgurite Pillar",explain:null,icon:"INVALID",color:"",map_icon:"MAP_0028",map_filtering_type:"INVISIBLE",points:[[-759.256591796875,-54,1200.7850341796875],[-761.1058959960938,-57.28813171386719,1155.2850341796875],[-1396.9840087890625,25.32884979248047,1166.52294921875],[-1464.3636474609375,28.175466537475586,1163.8466796875]]},ox={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0044",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},rx={name:null,explain:null,icon:"Question Mark",color:"none",map_icon:null,map_filtering_type:null,points:[]},ax={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},lx={name:null,explain:null,icon:"Question Mark",color:"none",map_icon:null,map_filtering_type:null,points:[]},cx={name:"Traces of Digging",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},ux={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},hx={name:"Rolled-up Dung",explain:"A ball of condensed monster dung. Used to make dung pods for your Slinger.",icon:"Dung",color:"Brown",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},px={name:"Training Area Entrance",explain:"A path leading from Base Camp to the Training Area.",icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[[-769.4884643554688,58.576194763183594,698.166259765625]]},dx={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},fx={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},mx={name:null,explain:null,icon:"Slinger",color:"Rose",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},_x={name:null,explain:null,icon:"Seed",color:"Vermilion",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},gx={name:"Scratch Marks",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Mx={name:"Training Area Exit",explain:"A path leading from the Training Area to Base Camp.",icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[[0,0,-762939453125e-17]]},xx={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},yx={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Ex={name:null,explain:null,icon:"Mushroom",color:"Mos",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},Ix={name:"Snow Herb",explain:"A plant that radiates ice-cold air. Use in combinations to create freeze ammo.",icon:"Herb",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-809.740478515625,-56.69568634033203,1224.324462890625],[-881.530517578125,-59.63053512573242,1237.5238037109375],[-876.6078491210938,-62.5530891418457,1297.4600830078125]]},Ax={name:null,explain:null,icon:"Pouch",color:"Brown",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},vx={name:"Area 9 Lookout Hill",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. May be found by monsters, so remain cautious.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-618.92285,24.944147,736.2871]]},Tx={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Sx={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0049",map_filtering_type:"ALL",points:[]},bx={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0042",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Nx={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Lx={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Rx={name:null,explain:null,icon:"Slinger",color:"Blue",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},wx={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},Cx={name:null,explain:null,icon:"Slinger",color:"Blue",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Dx={name:"Area 13 Oasis",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. A dangerous area easily found by monsters.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-958.5062,5.088243,1350.4937]]},Px={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Ux={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Ox={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0040",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Vx={name:"Chunk of Hard Rock",explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Fx={name:null,explain:null,icon:"Bomb",color:"Red",map_icon:"MAP_0004",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},Gx={name:null,explain:null,icon:"Slinger",color:"White",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Bx={name:"Area 16 Bone Desert",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. May be found by monsters, so remain cautious.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-731.5719,3.6447144,1524.5121]]},kx={name:null,explain:null,icon:"Slinger",color:"Vermilion",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},Hx={name:"Area 14 Underground Water Vein",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. A safe area that is not easily found by monsters.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-906.80035,-60.88362,1283.9293]]},zx={name:null,explain:null,icon:"Meat",color:"Brown",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Wx={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Xx={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Yx={name:"Makeshift Camp",explain:"A temporary camp with all the necessities for a hunt. Change your equipment and organize your items here. Accessible by fast travel with <ICON UI_DECIDE>.",icon:"INVALID",color:"",map_icon:"MAP_0000",map_filtering_type:"NON_FILTERING_TARGET",points:[]},qx={name:null,explain:null,icon:"Pouch",color:"Yellow",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},jx={name:"Mandragora",explain:"A dangerous fungus said to draw the life out of people. Required to craft Immunizers and Max Potions.",icon:"Mushroom",color:"Orange",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-1110.42138671875,25.758867263793945,942.0526733398438],[-1008.39990234375,33.59907150268555,980.0512084960938]]},Kx={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Qx={name:"Area 8 Southwest",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. A dangerous area easily found by monsters.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-731.0369,14.428724,989.62195]]},Zx={name:"Kunafa, Windsong Village",explain:"Home to the Sandfolk, a tribe of livestock farmers in the Windward Plains. When the Sandtide comes, they shelter inside their homes.",icon:"INVALID",color:"",map_icon:"MAP_0003",map_filtering_type:"NON_FILTERING_TARGET",points:[[-833.4105,10.74218,1010.594]]},$x={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Jx={name:"Area 3 South",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. May be found by monsters, so remain cautious.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-1026.0447,32.090633,964.3236]]},e4={name:"Half-Eaten Carcass",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},t4={name:null,explain:null,icon:"Pouch",color:"Red",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},n4={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0039",map_filtering_type:"INVISIBLE",points:[]},i4={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},s4={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0000",map_filtering_type:"NON_FILTERING_TARGET",points:[]},o4={name:null,explain:null,icon:"Slinger",color:"Pink",map_icon:"INVALID",map_filtering_type:"SLINGER",points:[]},r4={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},a4={name:"Glass Algae",explain:"A place for gathering special items.",icon:"Pouch",color:"Sgreen",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},l4={name:"Bonepile",explain:"A place for gathering bone materials.",icon:"INVALID",color:"",map_icon:"MAP_0007",map_filtering_type:"COLLECT",points:[[-617.787109375,12.275891304016113,682.8003540039062],[-613.9161376953125,11.60204029083252,696.158447265625],[-354.446044921875,11.473785400390625,795.5707397460938],[-369.36376953125,10.903066635131836,817.9923706054688],[-910.7704467773438,-26.977703094482422,771.7344360351562],[-1037.2191162109375,98.66483306884766,818.0851440429688],[-1089.521240234375,71.40343475341797,714.958984375],[-1047.0855712890625,70.55070495605469,734.6712646484375],[-877.9421997070312,-26.581531524658203,758.11572265625],[-716.4700927734375,.355212539434433,1378.77880859375],[-735.0532836914062,3.377971887588501,1501.4559326171875],[-1037.745361328125,100.32469940185547,806.314453125]]},c4={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},u4={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},h4={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},p4={name:"Fulgurite Crystal",explain:"A place for gathering special items.",icon:"Pouch",color:"Blue",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-992.8927001953125,14.72270679473877,957.9863891601562],[-993.317138671875,47.12198257446289,951.0462646484375],[-728.8360595703125,35.88456344604492,856.677978515625],[-972.5789184570312,16.526254653930664,921.7453002929688],[-871.751708984375,6.358007907867432,768.5301513671875],[-957.87353515625,23.12259864807129,1069.2838134765625],[-904.990234375,-24.748716354370117,756.7321166992188],[-883.9065551757812,1.7974404096603394,794.0593872070312],[-960.5477294921875,.10082069039344788,788.6829223632812],[-978.353759765625,14.148788452148438,831.35693359375],[-1005.9810180664062,31.11928367614746,873.5549926757812],[-1025.025390625,23.669965744018555,909.3331298828125],[-1031.600830078125,98.67823791503906,872.3330688476562],[-911.6939697265625,-1.1056098937988281,859.2101440429688],[-966.472900390625,.4724547863006592,1000.3707885742188],[-951.18603515625,-1.425502896308899,853.4175415039062],[-986.708251953125,18.13428497314453,917.6683349609375],[-999.690185546875,22.472383499145508,919.4202880859375],[-1000.6356201171875,23.79977798461914,907.283203125],[-988.1756591796875,19.487937927246094,960.8275756835938],[-1065.7205810546875,99.00888061523438,846.5806274414062]]},d4={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},f4={name:"Barrel Bomb",explain:"A small time bomb.",icon:"Bomb",color:"Yellow",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},m4={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},_4={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},g4={name:null,explain:null,icon:"Question Mark",color:"Gray",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},M4={name:"Area 8 Southeast",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. A dangerous area easily found by monsters.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-467.48724,-.8226309,999.3108]]},x4={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},y4={name:null,explain:null,icon:"Slinger",color:"Vermilion",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},E4={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},I4={name:null,explain:null,icon:"Question Mark",color:"Green",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},A4={name:null,explain:null,icon:"Question Mark",color:"Gray",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},v4={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},T4={name:"Ivy",explain:"A lightweight and extremely strong plant. Used to make nets for pitfall traps.",icon:"Herb",color:"Mos",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-851.5643310546875,31.647512435913086,860.2282104492188],[-801.0299682617188,10.345844268798828,888.2247314453125],[-614.5537719726562,12.516976356506348,755.1284790039062]]},S4={name:"Area 10 Southeast",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. A dangerous area easily found by monsters.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-418.34872,8.551121,806.5804]]},b4={name:"Makeshift Camp",explain:"A temporary camp with all the necessities for a hunt. Change your equipment and organize your items here. Accessible by fast travel with <ICON UI_DECIDE>.",icon:"Tent",color:"Brown",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[[-958.9329223632812,4.8955979347229,1351.6080322265625]]},N4={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},L4={name:"Razor-Sharp Claw Shard",explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},R4={name:"Grounding Rock",explain:"A large rock pillar that intercepts lightning strikes, affording protection to the surrounding area.",icon:"INVALID",color:"",map_icon:"MAP_0024",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},w4={name:"Brush",explain:"An area covered in tall grass that can conceal a crouching hunter from sight.",icon:"INVALID",color:"",map_icon:"MAP_0022",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},C4={name:"Bleeding Pod",explain:null,icon:"Slinger",color:"Mos",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},D4={name:null,explain:null,icon:"Slinger",color:"Orange",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},P4={name:"Torch Pod",explain:null,icon:"Slinger",color:"Red",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},U4={name:"Fulgurite Pillar",explain:null,icon:"Question Mark",color:"none",map_icon:null,map_filtering_type:null,points:[[-955.0250244140625,2.9250049591064453,1145.9310302734375],[-970.7061767578125,-.14353039860725403,1208.43896484375]]},O4={name:null,explain:null,icon:"Question Mark",color:"Gray",map_icon:"MAP_0021",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},V4={name:"Area 6 Valley Hideaway",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. A safe area that is not easily found by monsters.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-1097.2708,38.560577,990.01855]]},F4={name:"Parashroom",explain:"A mushroom that induces paralysis. Needed to craft paralysis ammo and tranq bombs.",icon:"Mushroom",color:"Lemon",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-927.1036376953125,4.737425804138184,1364.13623046875],[-949.5912475585938,5.956121444702148,896.7913208007812]]},G4={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},B4={name:"Brush",explain:"An area covered in tall grass that can conceal a crouching hunter from sight.",icon:"INVALID",color:"",map_icon:"MAP_0022",map_filtering_type:"ENVIRONMENT_TRAP",points:[[-557.3544311523438,1.3131601810455322,930.3736572265625],[-528.260498046875,3.5185914039611816,864.0211791992188],[-534.1044921875,2.719522714614868,869.4690551757812],[-496.1593322753906,1.2000000476837158,939.3015747070312],[-473.2488708496094,6.250490188598633,762.3079833984375],[-626.2267456054688,13.44219970703125,789.1324462890625],[-565.5095825195312,1.8706648349761963,932.6480102539062],[-559.6478271484375,1.8165812492370605,937.37158203125],[-552.5143432617188,1.2000000476837158,944.3478393554688],[-637.3419799804688,3.9967856407165527,909.2584838867188],[-611.51025390625,1.7791668176651,917.0245361328125],[-594.6653442382812,1.661616325378418,909.7017211914062],[-583.3367919921875,1.9850504398345947,916.501953125]]},k4={name:"Mucus",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},H4={name:null,explain:null,icon:"Seed",color:"White",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},z4={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},W4={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},X4={name:"Honey",explain:"Highly nutritious honey. Combine with potions to make the more potent mega potion.",icon:"Webbing",color:"Orange",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-793.7113647460938,11.802923202514648,886.7398071289062],[-803.0438842773438,9.811681747436523,899.7281494140625]]},Y4={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},q4={name:null,explain:null,icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[]},j4={name:"Magnificent Fossil",explain:"A place for gathering rare special items.",icon:"Pouch",color:"Vermilion",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-1033.5023193359375,41.28337097167969,1040.967529296875],[-908.4095458984375,-39.439231872558594,1318.9482421875]]},K4={name:null,explain:null,icon:"unk2",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Q4={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0042",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Z4={name:"Demeowlisher Bomb",explain:"A large bomb set by your Palico. Just like a regular Large Barrel Bomb, it can be rolled after placing, and detonates on impact.",icon:"Bomb",color:"Yellow",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},$4={name:"Bonepile",explain:"A place for gathering bone materials.",icon:"INVALID",color:"",map_icon:"MAP_0007",map_filtering_type:"COLLECT",points:[]},J4={name:"Acorn Shocker",explain:"A trap set by your Palico. Can be used to stop a monster's movements. Similar to shock traps, this trap can be used to capture monsters.",icon:"Trap",color:"Lemon",map_icon:"INVALID",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},ey={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0043",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},ty={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0028",map_filtering_type:"INVISIBLE",points:[]},ny={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},iy={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},sy={name:"Dragonstrike Nut",explain:"A nut that explodes on impact. Used to make Wyvern Ammo.",icon:"Husk",color:"Brown",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-985.211181640625,44.006961822509766,976.447998046875],[-969.5784301757812,40.88663101196289,960.2569580078125]]},oy={name:"Area 16 Northwest",explain:"A pop-up facility where you can change your equipment and items. Fast travel here with <ICON UI_DECIDE>. May be found by monsters, so remain cautious.",icon:"Tent",color:"Yellow",map_icon:"INVALID",map_filtering_type:"NON_FILTERING_TARGET",points:[[-698.8055,.42693043,1354.5664]]},ry={name:"Dung",explain:null,icon:"Dung",color:"Brown",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},ay={name:"Fulgurite Shard",explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},ly={name:null,explain:null,icon:"Rare Question Mark",color:"None",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},cy={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},uy={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},hy={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},py={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},dy={name:"Bomberry",explain:"A nut that ruptures on impact. Used to make cluster bombs.",icon:"Husk",color:"Rose",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[[-1000.5491943359375,-56.583194732666016,1212.9559326171875]]},fy={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},my={name:null,explain:null,icon:"unk2",color:"Yellow",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},_y={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},gy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},My={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},xy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0043",map_filtering_type:"INVISIBLE",points:[]},yy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Ey={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Iy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Ay={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},vy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0007",map_filtering_type:"COLLECT",points:[]},Ty={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Sy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[]},by={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},Ny={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[[-456.25,-12.770000457763672,1637.6400146484375],[-456.25,-12.770000457763672,1618.6400146484375],[-456.25,-12.770000457763672,1599.6400146484375],[-436.75,-17.770000457763672,1643.6400146484375],[-436.75,-17.770000457763672,1626.6400146484375],[-436.75,-17.770000457763672,1609.6400146484375],[-436.75,-17.770000457763672,1592.6400146484375],[-417.75,-17.770000457763672,1652.6400146484375],[-417.75,-17.770000457763672,1635.6400146484375],[-417.75,-17.770000457763672,1618.6400146484375],[-417.75,-17.770000457763672,1601.6400146484375],[-417.75,-17.770000457763672,1584.6400146484375],[-398.75,-17.770000457763672,1643.6400146484375],[-398.75,-17.770000457763672,1626.6400146484375],[-398.75,-17.770000457763672,1609.6400146484375],[-398.75,-17.770000457763672,1592.6400146484375],[-398.75,-17.770000457763672,1575.6400146484375],[-380.75,-17.770000457763672,1652.6400146484375],[-380.75,-17.770000457763672,1635.6400146484375],[-380.75,-17.770000457763672,1618.6400146484375],[-380.75,-17.770000457763672,1601.6400146484375],[-380.75,-17.770000457763672,1584.6400146484375],[-360.75,-17.770000457763672,1643.6400146484375],[-360.75,-17.770000457763672,1626.6400146484375],[-360.75,-17.770000457763672,1609.6400146484375],[-360.75,-17.770000457763672,1592.6400146484375],[-360.75,-17.770000457763672,1575.6400146484375]]},Ly={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Ry={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},wy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0023",map_filtering_type:"INVISIBLE",points:[]},Cy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[]},Dy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[]},Py={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Uy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Oy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Vy={name:null,explain:null,icon:"Herb",color:"Mos",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Fy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0043",map_filtering_type:"INVISIBLE",points:[]},Gy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},By={name:null,explain:null,icon:"Question Mark",color:"Gray",map_icon:"MAP_0021",map_filtering_type:"INVISIBLE",points:[]},ky={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Hy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[[-839.2000122070312,9.800000190734863,991]]},zy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Wy={name:null,explain:null,icon:"Pouch",color:"Vermilion",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},Xy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Yy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0007",map_filtering_type:"COLLECT",points:[]},qy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},jy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Ky={name:null,explain:null,icon:"Pouch",color:"Orange",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},Qy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},Zy={name:null,explain:null,icon:"Pouch",color:"Gray",map_icon:"INVALID",map_filtering_type:"COLLECT",points:[]},$y={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},Jy={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[]},e6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[]},t6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},n6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},i6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},s6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},o6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},r6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},a6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},l6={name:null,explain:null,icon:"Tent",color:"Brown",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},c6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0023",map_filtering_type:"INVISIBLE",points:[]},u6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[]},h6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[]},p6={name:null,explain:null,icon:"Question Mark",color:"Gray",map_icon:"MAP_0004",map_filtering_type:"ENVIRONMENT_TRAP",points:[]},d6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},f6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[[-508.2117004394531,2.549696922302246,904.1713256835938],[-616.1947021484375,3.8662710189819336,863.5427856445312],[-648.1624145507812,4.012423038482666,909.8411865234375]]},m6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},_6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0043",map_filtering_type:"INVISIBLE",points:[]},g6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE",points:[]},M6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[[-957.6785278320312,-46.41373825073242,1236.453125],[-893.3909912109375,-28.329450607299805,1310.594970703125]]},x6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[]},y6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0032",map_filtering_type:"NON_FILTERING_TARGET",points:[]},E6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[]},I6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"INVALID",map_filtering_type:"INVISIBLE_ADDBEACON",points:[]},A6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0004",map_filtering_type:"INVISIBLE",points:[]},v6={name:null,explain:null,icon:"INVALID",color:"",map_icon:"MAP_0043",map_filtering_type:"INVISIBLE",points:[]},T6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-936,-5.299953937530518,861],[-982,-.30000001192092896,993]]},S6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-619.2404174804688,-.0679168701171875,1014.916015625],[-621.3713989257812,-.10153769701719284,1014.6079711914062],[-621.2758178710938,-.08138663321733475,1012.4290161132812],[-641.40869140625,1.552945852279663,989.0374145507812],[-645.5715942382812,2.0302658081054688,987.2384643554688],[-644.6959838867188,1.6675245761871338,992.4351806640625],[-642.6931762695312,2.0709567070007324,984.5673828125],[-646.5873413085938,2.3835747241973877,983.5800170898438],[-654.829833984375,2.878310203552246,988.806396484375],[-652.6779174804688,2.9044620990753174,982.864990234375],[-649.3840942382812,2.115938901901245,991.5980224609375],[-654.4857177734375,2.7533700466156006,986.1566772460938],[-652.9304809570312,2.4041876792907715,991.2052612304688],[-650.2926635742188,2.3412280082702637,985.9276733398438],[-688.1442260742188,5.282308578491211,990.1924438476562],[-686.1678466796875,5.349113464355469,987.40771484375],[-688.84619140625,5.561031341552734,985.3885498046875],[-690.0301513671875,5.40284538269043,987.947265625],[-661.6380004882812,3.8346991539001465,935.6273193359375],[-663.1803588867188,4.130537033081055,938.848388671875],[-662.6444091796875,4.360971450805664,932.8779296875],[-658.631103515625,4.005046367645264,935.2687377929688],[-616.7321166992188,.3200759291648865,948.1441040039062],[-623.9793701171875,1.4057068824768066,949.7301025390625],[-624.9203491210938,1.5260047912597656,951.822021484375],[-616.991943359375,.672743558883667,951.759033203125],[-619.6567993164062,.838913083076477,948.6519775390625],[-620.8450927734375,1.1723054647445679,952.2227783203125],[-621.8179321289062,1.2918916940689087,946.4463500976562],[-618.2290649414062,.5252118706703186,954.2596435546875],[-620.561767578125,.8394184112548828,956.3551025390625],[-622.65283203125,.9118783473968506,954.0059204101562],[-455.1299133300781,.2883000075817108,909.7216186523438],[-459.6094970703125,.24845050275325775,908.6995849609375],[-457.5657653808594,-.2959691882133484,902.3583984375],[-459.7315673828125,-.9469015598297119,896.689453125],[-464.50616455078125,-.30366483330726624,895.7684936523438],[-458.0438232421875,-.5361728668212891,893.2064819335938],[-455.6540222167969,-.9907929301261902,887.7686157226562],[-778.20703125,-5.5333356857299805,1453.54931640625],[-774.0006103515625,-5.36016845703125,1460.5377197265625],[-773.80810546875,-5.277642250061035,1456.5894775390625]]},b6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},N6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},L6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},R6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-930.9209594726562,-8.215134620666504,777.544677734375],[-914.4885864257812,-5.437873840332031,776.7555541992188],[-908.532958984375,1.32914137840271,902.4698486328125],[-955.5616455078125,1.9655277729034424,947.7339477539062],[-942.8865356445312,-2.6433205604553223,977.9274291992188],[-964.7352294921875,.6563258171081543,950.1673583984375],[-927.2969970703125,-.7661486864089966,942.7860717773438]]},w6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-922.851806640625,-5.348574161529541,784.4361572265625],[-937.53466796875,-5.660336017608643,799.7928466796875],[-927.6135864257812,-3.9486279487609863,831.10107421875],[-946.3814086914062,-4.9891228675842285,841.2335205078125],[-926.0950317382812,-6.336420059204102,829.544921875],[-926.97998046875,-4.751327991485596,828.7151489257812],[-935.156982421875,-5.944606781005859,797.8532104492188],[-938.4891967773438,-4.98911714553833,797.6063232421875],[-934.689697265625,-6.336418151855469,789.0963745117188],[-935.6527099609375,-4.306065082550049,790.041015625],[-921.4918823242188,-5.693621635437012,784.951416015625],[-924.1536254882812,-3.6837377548217773,784.0482788085938],[-848.9723510742188,3.5160374641418457,766.8158569335938]]},C6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-911.5999755859375,-14.449999809265137,1086.3499755859375],[-892.4500122070312,-11.640000343322754,1090.9000244140625]]},D6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},P6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},U6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},O6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-1008.4710083007812,29.289230346679688,878.5634155273438]]},V6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},F6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},G6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-838.5,12.969889640808105,1035.6500244140625]]},B6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},k6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},H6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-845.271484375,8.932698249816895,1004.25],[-835.7670288085938,9.612798690795898,997.1602783203125],[-829.5784912109375,9.713125228881836,995.8690795898438],[-828.023193359375,9.395862579345703,988.9486083984375],[-824.0316772460938,9.08225154876709,986.6279296875],[-832.7993774414062,8.837814331054688,985.671875],[-831.388671875,7.94179105758667,980.970703125],[-819.464111328125,6.994757175445557,978.6220703125],[-830.1193237304688,7.138280868530273,961.4558715820312],[-824.3220825195312,7.122719764709473,955.4450073242188],[-820.715576171875,6.957670211791992,960.7930297851562],[-819.3021240234375,6.920012950897217,961.7042236328125],[-827.69580078125,7.346385955810547,951.5294189453125],[-838.4058227539062,7.20704984664917,945.5864868164062],[-854.5048828125,10.063119888305664,1016.2030029296875]]},z6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-818.9713134765625,7.103339195251465,978.9854125976562],[-822.869873046875,7.019545078277588,982.481689453125],[-823.3472290039062,7.0518269538879395,982.2653198242188],[-843.732177734375,8.973644256591797,1004.8400268554688],[-843.3217163085938,9.045705795288086,1004.3909912109375],[-841.2271728515625,9.626399993896484,998.4777221679688],[-841.1008911132812,9.606412887573242,998.0764770507812],[-828.5317993164062,12.699250221252441,1028.81103515625],[-828.1054077148438,12.685489654541016,1028.699951171875],[-831.2299194335938,12.34177017211914,1028.2840576171875],[-851.1978149414062,10.444720268249512,1022.1510009765625],[-847.4929809570312,13.055830001831055,1036.717041015625],[-840.5518798828125,13.333009719848633,1045.7469482421875],[-847.1594848632812,13.102959632873535,1037.0770263671875],[-833.2322998046875,15.05126953125,1053.467041015625],[-833.3704833984375,14.94612979888916,1052.8699951171875],[-824.3908081054688,11.84650993347168,1017.2650146484375],[-854.9890747070312,9.425215721130371,1000.4760131835938]]},W6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-817.8250122070312,7.195920944213867,978.39697265625],[-840.2222900390625,13.385990142822266,1046.2509765625],[-844.2698974609375,8.989663124084473,1004.7319946289062],[-840.7086181640625,9.630654335021973,998.5980834960938],[-829.3026123046875,12.469759941101074,1028.6099853515625],[-830.7531127929688,12.384440422058105,1028.5489501953125],[-832.0421142578125,12.317339897155762,1027.85595703125],[-846.7813110351562,13.027039527893066,1037.18701171875],[-850.7432861328125,10.335650444030762,1021.1820068359375],[-854.9357299804688,9.424399375915527,1000.8900146484375],[-823.9818725585938,11.858209609985352,1017.25],[-854.510009765625,9.38532829284668,1000.4099731445312]]},X6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},Y6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-870.202392578125,9.369999885559082,994.739990234375]]},q6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},j6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-868.5051879882812,9.31999683380127,1015.5919799804688]]},K6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},Q6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},Z6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},$6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},J6={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},e9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-852.4000244140625,12.86907958984375,1024.199951171875]]},t9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},n9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-851.1409912109375,10.362600326538086,1021.4010009765625],[-840.253173828125,13.599960327148438,1047.3160400390625],[-828.4556884765625,6.949882984161377,965.9279174804688],[-828.573486328125,6.980426788330078,965.355712890625],[-841.1552734375,12.887260437011719,1034.4539794921875],[-838.6785888671875,13.776609420776367,1048.97216796875],[-839.68017578125,13.478447914123535,1046.837646484375],[-836.59521484375,13.168410301208496,1042.9539794921875],[-836.2291259765625,13.224720001220703,1042.385009765625],[-833.086669921875,15.181550025939941,1054.511962890625],[-833.0009765625,15.167770385742188,1053.9329833984375],[-843.96337890625,9.001341819763184,1004.3809814453125],[-843.6716918945312,9.028702735900879,1003.7360229492188]]},i9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-847.0308227539062,13.119919776916504,1037.7939453125],[-848.8944091796875,12.886719703674316,1035.9420166015625],[-844.6566772460938,9.186521530151367,1003.5269775390625],[-842.8712158203125,9.559710502624512,1001.0479736328125],[-842,9.623743057250977,998.36669921875],[-839.0551147460938,13.965800285339355,1049.77294921875],[-840.8157958984375,13.49155044555664,1046.698974609375]]},s9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-844.6494750976562,10.159910202026367,1003.5280151367188],[-842.8442993164062,10.56123161315918,1001.1099853515625],[-841.9929809570312,10.595490455627441,998.372314453125],[-847.0230712890625,14.077580451965332,1037.7979736328125],[-848.8892822265625,13.85750961303711,1035.93994140625],[-839.0087280273438,14.935700416564941,1049.7840576171875],[-840.832275390625,14.441729545593262,1046.7120361328125]]},o9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},r9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},a9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-833.9813232421875,14.859450340270996,1054.3399658203125]]},l9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-827.0084838867188,6.899221897125244,970.492919921875],[-827.6301879882812,7.285571098327637,971.401123046875],[-828.0338745117188,6.91105318069458,967.5220947265625],[-845.8626708984375,11.010760307312012,1022.7540283203125]]},c9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-855.6801147460938,9.493428230285645,1001.2760009765625],[-855.760986328125,9.929635047912598,1000.8309936523438],[-867.3275756835938,9.327688217163086,1000.5819702148438],[-827.406982421875,6.918424129486084,968.2822265625],[-826.7476196289062,6.966549873352051,972.352783203125],[-846.48388671875,10.703590393066406,1021.6519775390625],[-845.640380859375,11.088629722595215,1021.3099975585938]]},u9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-827.3148803710938,6.866133213043213,969.2614135742188],[-828.0186767578125,6.887742042541504,968.8676147460938],[-850.6243286132812,11.507659912109375,1027.68994140625],[-850.2620239257812,11.288060188293457,1026.8509521484375],[-850.51123046875,8.952089309692383,1005.6220092773438],[-849.8870239257812,8.918411254882812,1005.1699829101562]]},h9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-863.8536987304688,9.911432266235352,1005.3939819335938],[-864.267822265625,9.923200607299805,1005.6099853515625],[-864.5302734375,10.094840049743652,1005.4509887695312],[-865.4498901367188,9.902819633483887,1005.7169799804688],[-864.72900390625,9.958780288696289,1004.9030151367188],[-865.2910766601562,10.134699821472168,1003.9169921875],[-865.469482421875,10.118020057678223,1004.7020263671875],[-865.7420043945312,9.967340469360352,1004.68701171875]]},p9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},d9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},f9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},m9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-862.77001953125,9.289999961853027,1034.5]]},_9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},g9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-794.4182739257812,57,758.7884521484375]]},M9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[[-794.0438232421875,57,761.0419921875]]},x9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},y9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},E9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},I9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},A9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},v9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},T9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},S9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},b9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},N9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},L9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},R9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},w9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},C9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},D9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},P9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},U9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},O9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},V9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},F9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},G9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},B9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},k9={name:null,explain:null,icon:"Question Mark",color:"None",map_icon:null,map_filtering_type:null,points:[]},H9={GM000_152_00:v1,GM000_112_00:T1,GM504_000_00:S1,GM036_010_00:b1,GM030_079_00:N1,GM000_175_00:L1,GM034_002_00:R1,GM001_013_00:w1,GM205_002_00:C1,GM202_000_00:D1,GM800_004_51:P1,GM103_002_00:U1,GM000_117_00:O1,GM002_002_00:V1,GM030_014_00:F1,GM000_176_00:G1,GM030_030_00:B1,GM034_009_00:k1,GM000_170_00:H1,GM000_160_00:z1,GM031_005_00:W1,GM200_000_00:X1,GM032_002_00:Y1,GM800_002_00:q1,GM016_000_00:j1,GM015_000_00:K1,GM800_010_00:Q1,GM030_084_00:Z1,GM000_151_00:$1,GM800_000_54:J1,GM009_002_00:eg,GM030_100_00:tg,GM250_001_00:ng,GM800_003_50:ig,GM030_024_00:sg,GM200_001_00:og,GM000_113_00:rg,GM800_003_00:ag,GM030_007_00:lg,GM000_174_00:cg,GM036_011_00:ug,GM000_009_00:hg,GM810_001_00:pg,GM030_069_00:dg,GM000_100_00:fg,GM030_008_00:mg,GM036_019_00:_g,GM207_000_00:gg,GM800_004_00:Mg,GM030_026_00:xg,GM030_059_00:yg,GM000_167_00:Eg,GM000_118_00:Ig,GM034_022_00:Ag,GM800_007_00:vg,GM205_000_00:Tg,GM800_002_56:Sg,GM030_052_00:bg,GM036_009_00:Ng,GM030_022_00:Lg,GM036_001_00:Rg,GM000_104_00:wg,GM034_021_00:Cg,GM000_153_00:Dg,GM100_000_00:Pg,GM034_004_00:Ug,GM017_000_00:Og,GM552_001_00:Vg,GM034_011_00:Fg,GM009_001_00:Gg,GM030_006_00:Bg,GM030_080_00:kg,GM019_001_00:Hg,GM000_007_00:zg,GM800_002_54:Wg,GM810_000_00:Xg,GM800_004_55:Yg,GM000_173_00:qg,GM800_000_58:jg,GM030_013_00:Kg,GM000_171_00:Qg,GM000_107_00:Zg,GM452_000_00:$g,GM800_001_50:Jg,GM035_000_00:e2,GM000_106_00:t2,GM410_000_00:n2,GM030_043_00:i2,GM800_002_57:s2,GM030_119_00:o2,GM701_000_00:r2,GM036_012_00:a2,GM030_001_00:l2,GM606_000_00:c2,GM016_001_00:u2,GM800_008_00:h2,GM810_002_00:p2,GM601_000_00:d2,GM030_035_00:f2,GM205_001_00:m2,GM000_164_00:_2,GM800_001_57:g2,GM800_000_00:M2,GM030_023_00:x2,GM034_023_00:y2,GM036_008_00:E2,GM030_095_00:I2,GM800_001_01:A2,GM800_003_52:v2,GM030_044_00:T2,GM030_005_00:S2,GM552_000_00:b2,GM205_003_00:N2,GM030_089_00:L2,GM000_129_00:R2,GM800_002_01:w2,GM000_130_00:C2,GM000_004_00:D2,GM000_143_00:P2,GM750_000_00:U2,GM000_157_00:O2,GM800_001_56:V2,GM000_110_00:F2,GM000_120_00:G2,GM036_007_00:B2,GM607_000_00:k2,GM000_114_00:H2,GM034_024_00:z2,GM034_025_00:W2,GM000_179_00:X2,GM036_003_00:Y2,GM800_003_53:q2,GM100_002_00:j2,GM000_008_00:K2,GM000_121_00:Q2,GM555_000_00:Z2,GM810_008_00:$2,GM030_004_00:J2,GM655_000_00:e3,GM001_015_01:t3,GM032_000_00:n3,GM030_058_00:i3,GM030_094_00:s3,GM000_165_00:o3,GM036_000_00:r3,GM030_055_00:a3,GM800_004_53:l3,GM411_001_00:c3,GM000_006_00:u3,GM800_002_53:h3,GM800_000_50:p3,GM800_001_62:d3,GM800_002_55:f3,GM411_000_00:m3,GM034_014_00:_3,GM800_003_56:g3,GM104_002_00:M3,GM030_036_00:x3,GM030_021_00:y3,GM030_050_00:E3,GM800_001_00:I3,GM000_003_00:A3,GM000_148_00:v3,GM000_146_00:T3,GM000_011_00:S3,GM611_000_00:b3,GM036_006_00:N3,GM206_000_00:L3,GM001_016_01:R3,GM000_109_00:w3,GM036_002_00:C3,GM030_012_00:D3,GM050_000_00:P3,GM030_045_00:U3,GM000_154_00:O3,GM551_001_00:V3,GM800_003_55:F3,GM503_000_01:G3,GM506_001_00:B3,GM810_003_00:k3,GM030_048_00:H3,GM030_105_00:z3,GM036_018_00:W3,GM030_049_00:X3,GM500_000_00:Y3,GM032_003_00:q3,GM000_002_00:j3,GM408_000_00:K3,GM030_040_00:Q3,GM001_016_00:Z3,GM000_101_00:$3,GM036_005_00:J3,GM030_020_00:e5,GM034_006_00:t5,GM030_046_00:n5,GM000_181_00:i5,GM000_103_00:s5,GM800_000_02:o5,GM034_007_00:r5,INVALID:a5,GM000_000_00:l5,GM002_000_00:c5,GM001_001_00:u5,GM001_000_00:h5,GM001_002_00:p5,GM003_000_00:d5,GM034_076_00:f5,GM034_064_00:m5,GM034_060_00:_5,GM034_046_00:g5,GM000_105_01:M5,GM034_085_00:x5,GM854_008_00:y5,GM034_026_00:E5,GM034_068_00:I5,GM854_007_00:A5,GM034_053_00:v5,GM000_000_01:T5,GM034_057_00:S5,GM034_063_00:b5,GM000_100_01:N5,GM034_078_00:L5,GM000_142_01:R5,GM000_005_01:w5,GM034_086_00:C5,GM854_002_00:D5,GM000_110_01:P5,GM000_144_01:U5,GM034_071_00:O5,GM034_054_00:V5,GM854_006_00:F5,GM034_042_00:G5,GM032_000_01:B5,GM034_072_00:k5,GM034_051_00:H5,GM000_121_01:z5,GM034_043_00:W5,GM034_081_00:X5,GM034_028_00:Y5,GM000_009_01:q5,GM800_001_02:j5,GM000_102_01:K5,GM612_000_00:Q5,GM034_061_00:Z5,GM034_029_00:$5,GM000_123_01:J5,GM000_101_01:eM,GM034_070_00:tM,GM034_049_00:nM,GM034_041_00:iM,GM000_119_01:sM,GM021_001_00:oM,GM000_103_01:rM,GM030_070_00:aM,GM034_079_00:lM,GM034_032_00:cM,GM000_115_01:uM,GM000_107_01:hM,GM854_004_00:pM,GM854_009_00:dM,GM854_001_00:fM,GM034_037_00:mM,GM000_145_01:_M,GM034_077_00:gM,GM000_114_01:MM,GM034_034_00:xM,GM034_056_00:yM,GM000_010_01:EM,GM000_109_01:IM,GM810_100_00:AM,GM034_045_00:vM,GM034_031_00:TM,GM810_010_00:SM,GM000_002_01:bM,GM034_035_00:NM,GM000_112_01:LM,GM034_065_00:RM,GM854_010_00:wM,GM034_080_00:CM,GM034_059_00:DM,GM000_111_01:PM,GM034_039_00:UM,GM034_066_00:OM,GM000_106_01:VM,GM034_027_00:FM,GM034_058_00:GM,GM000_116_01:BM,GM034_038_00:kM,GM000_143_01:HM,GM034_055_00:zM,GM000_131_01:WM,GM034_084_00:XM,GM034_074_00:YM,GM034_075_00:qM,GM854_000_00:jM,GM854_011_00:KM,GM034_047_00:QM,GM034_048_00:ZM,GM000_117_01:$M,GM034_083_00:JM,GM034_073_00:e8,GM021_000_00:t8,GM034_067_00:n8,GM000_104_01:i8,GM000_113_01:s8,GM034_044_00:o8,GM854_005_00:r8,GM034_052_00:a8,GM810_009_00:l8,GM034_030_00:c8,GM034_036_00:u8,GM854_003_00:h8,GM034_069_00:p8,GM034_033_00:d8,GM034_062_00:f8,GM034_082_00:m8,GM000_008_01:_8,GM034_050_00:g8,GM000_129_01:M8,GM000_118_01:x8,GM034_040_00:y8,GM000_006_01:E8,GM800_002_02:I8,GM000_130_01:A8,GM556_000_00:v8,GM000_123_00:T8,GM030_099_00:S8,GM000_177_00:b8,GM553_000_00:N8,GM513_000_00:L8,GM000_131_00:R8,GM030_041_00:w8,GM000_001_00:C8,GM800_004_56:D8,GM810_007_00:P8,GM700_000_00:U8,GM030_002_00:O8,GM034_003_00:V8,GM000_178_00:F8,GM030_025_00:G8,GM030_109_00:B8,GM030_017_00:k8,GM001_015_00:H8,GM800_003_51:z8,GM750_001_00:W8,GM800_002_52:X8,GM201_000_00:Y8,GM550_000_00:q8,GM034_016_00:j8,GM000_163_00:K8,GM250_002_00:Q8,GM650_000_00:Z8,GM512_000_00:$8,GM030_031_00:J8,GM030_051_00:ex,GM030_054_00:tx,GM800_004_54:nx,GM000_132_00:ix,GM001_009_00:sx,GM451_000_00:ox,GM250_000_00:rx,GM800_001_60:ax,GM251_000_00:lx,GM030_009_00:cx,GM034_015_00:ux,GM000_126_00:hx,GM810_004_00:px,GM800_004_50:dx,GM800_001_59:fx,GM000_010_00:mx,GM000_108_00:_x,GM030_010_00:gx,GM810_005_00:Mx,GM800_001_52:xx,GM030_110_00:yx,GM000_116_00:Ex,GM000_105_00:Ix,GM000_161_00:Ax,GM800_000_55:vx,GM034_013_00:Tx,GM407_000_00:Sx,GM037_000_00:bx,GM030_053_00:Nx,GM800_001_61:Lx,GM036_017_00:Rx,GM657_000_00:wx,GM036_015_00:Cx,GM800_000_59:Dx,GM030_015_00:Px,GM800_001_51:Ux,GM800_004_01:Ox,GM034_005_00:Vx,GM551_000_00:Fx,GM036_013_00:Gx,GM800_000_61:Bx,GM000_180_00:kx,GM800_000_52:Hx,GM152_000_00:zx,GM034_010_00:Wx,GM030_057_00:Xx,GM800_005_00:Yx,GM000_168_00:qx,GM000_119_00:jx,GM800_001_53:Kx,GM800_000_62:Qx,GM800_000_01:Zx,GM800_002_51:$x,GM800_000_53:Jx,GM030_056_00:e4,GM000_158_00:t4,GM800_006_00:n4,GM034_017_00:i4,GM800_009_00:s4,GM000_005_00:o4,GM810_006_00:r4,GM000_172_00:a4,GM000_122_00:l4,GM030_047_00:c4,GM800_002_50:u4,GM800_004_52:h4,GM000_149_00:p4,GM800_001_54:d4,GM200_002_00:f4,GM555_001_00:m4,GM030_064_00:_4,GM507_000_00:g4,GM800_000_57:M4,GM030_114_00:x4,GM036_016_00:y4,GM034_008_00:E4,GM506_000_00:I4,GM503_000_00:A4,GM030_029_00:v4,GM000_102_00:T4,GM800_000_56:S4,GM100_003_00:b4,GM502_000_00:N4,GM034_001_00:L4,GM009_000_00:R4,GM001_013_01:w4,GM036_014_00:C4,GM036_020_00:D4,GM036_004_00:P4,GM001_008_00:U4,GM509_000_00:O4,GM800_000_51:V4,GM000_115_00:F4,GM800_001_55:G4,GM001_020_00:B4,GM030_115_00:k4,GM000_111_00:H4,GM030_065_00:z4,GM030_019_00:W4,GM000_142_00:X4,GM034_019_00:Y4,GM800_003_54:q4,GM000_156_00:j4,GM031_006_00:K4,GM037_001_00:Q4,GM200_003_00:Z4,GM032_001_00:$4,GM203_000_00:J4,GM604_000_00:ey,GM605_000_00:ty,GM034_020_00:ny,GM034_012_00:iy,GM000_145_00:sy,GM800_000_60:oy,GM030_003_00:ry,GM030_011_00:ay,GM034_018_00:ly,GM030_074_00:cy,GM030_027_00:uy,GM030_016_00:hy,GM030_028_00:py,GM000_144_00:dy,GM030_018_00:fy,GM030_104_00:my,GM033_000_00:_y,GM001_018_00:gy,GM001_017_00:My,GM511_001_00:xy,GM610_000_00:yy,GM811_000_00:Ey,GM811_002_00:Iy,GM608_000_00:Ay,GM000_124_00:vy,GM811_003_00:Ty,GM654_000_00:Sy,GM658_000_00:by,GM020_000_00:Ny,GM811_008_00:Ly,GM811_001_00:Ry,GM002_003_00:wy,GM018_000_00:Cy,GM654_001_00:Dy,GM608_001_00:Py,GM850_000_00:Uy,GM811_005_00:Oy,GM501_000_00:Vy,GM511_002_00:Fy,GM656_000_00:Gy,GM503_001_00:By,GM810_900_00:ky,GM001_003_00:Hy,GM001_004_00:zy,GM000_156_01:Wy,GM852_000_00:Xy,GM000_122_01:Yy,GM853_000_00:qy,GM659_000_01:jy,GM000_154_01:Ky,GM811_100_00:Qy,GM000_164_01:Zy,GM853_001_00:$y,GM553_001_00:Jy,GM018_001_00:e6,GM659_000_00:t6,GM811_006_00:n6,GM609_000_00:i6,GM607_001_00:s6,GM811_007_00:o6,GM656_001_00:r6,GM851_000_00:a6,GM100_004_00:l6,GM002_004_00:c6,GM554_001_00:u6,GM651_000_00:h6,GM500_001_00:p6,GM603_000_00:d6,GM001_019_00:f6,GM811_004_00:m6,GM511_000_00:_6,GM851_001_00:g6,GM019_000_00:M6,GM554_000_00:x6,GM811_900_00:y6,GM553_002_00:E6,GM204_000_00:I6,GM412_000_00:A6,GM511_003_00:v6,GM001_007_00:T6,GM001_011_00:S6,GM008_000_00:b6,GM008_001_00:N6,GM010_000_00:L6,GM012_000_00:R6,GM012_001_00:w6,GM013_000_00:C6,GM013_004_00:D6,GM013_005_00:P6,GM013_006_00:U6,GM400_022_00:O6,GM400_000_00:V6,GM400_001_00:F6,GM400_003_00:G6,GM400_006_00:B6,GM400_007_00:k6,GM302_000_00:H6,GM400_008_00:z6,GM400_009_00:W6,GM401_000_00:X6,GM400_010_00:Y6,GM400_011_00:q6,GM400_012_00:j6,GM400_015_00:K6,GM400_013_00:Q6,GM400_014_00:Z6,GM400_017_00:$6,GM400_016_00:J6,GM004_000_00:e9,GM303_000_00:t9,GM300_009_00:n9,GM301_004_00:i9,GM300_013_00:s9,GM300_010_00:o9,GM301_003_00:r9,GM301_002_00:a9,GM300_012_00:l9,GM300_008_00:c9,GM300_011_00:u9,GM300_007_00:h9,GM400_020_00:p9,GM400_018_00:d9,GM400_019_00:f9,GM400_021_00:m9,GM400_023_00:_9,GM102_001_00:g9,GM101_001_00:M9,GM400_025_00:x9,GM406_000_00:y9,GM400_032_00:E9,GM051_000_00:I9,GM400_056_00:A9,GM010_001_00:v9,GM010_002_00:T9,GM006_003_00:S9,GM006_107_00:b9,GM006_002_00:N9,GM006_005_00:L9,GM006_006_00:R9,GM006_007_00:w9,GM006_008_00:C9,GM006_009_00:D9,GM006_100_00:P9,GM006_101_00:U9,GM006_102_00:O9,GM006_103_00:V9,GM006_104_00:F9,GM006_105_00:G9,GM006_106_00:B9,GM006_108_00:k9},z9={name:"Dung Beetle",explain:"Insects that habitually roll up monster dung. The dung pods are well compacted and can be used as Slinger ammo.",memo:"Insects that habitually roll up monster dung. They bring it back to their underground nests not just for food, but to lay eggs on and feed their larvae. They're the faces of feces across the land: nature's diligent decomposers. The compacted dung pods formed by their efforts can be used as Slinger ammo. It's foul enough to send even large monsters running for fresh air—a useful trick when you're outnumbered.",color:"I_BROWN",item_icon:"INVALID",map_icon:"MAP_0014",animal_icon:"A0007",reward_data:[{story:{item_id:"ITEM_0124",num:1,probability:100},ex:{item_ids:["ITEM_0124","NONE","NONE","NONE","NONE","NONE"],nums:[1,1,1,1,1,1],probabilities:[100,100,100,100,100,100]}}],st101:{target:{category:"GIMMICK",gimmicks:["GM030_003_00","GM000_132_00"]},points:[[-535.498291015625,-3.0041730403900146,969.0194091796875],[-949.7296752929688,1.157992959022522,1360.001953125]]}},W9={name:"Windrustler",explain:null,memo:"Plains dwellers that move in packs. They use their arrow-like crests to coordinate movements and alert each other to threats. Since they stand their crests up when people and monsters draw near, that gesture is believed to indicate danger. Windrustlers have been sighted in Kunafa, a sign that they have learned two things: people aren't always a threat...and where there's people, there's food.",color:"I_WHITE",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0022",reward_data:[{story:{item_id:"INVALID",num:0,probability:0},ex:{item_ids:[],nums:[],probabilities:[]}}],st101:{target:{category:"PLAYER"},points:[[-632.9430541992188,5.286502838134766,852.046875],[-617.8418579101562,.6249961853027344,933.1301879882812],[-490.8700866699219,.6224117279052734,911.4463500976562],[-592.2019653320312,.8355903625488281,884.6488647460938],[-658.418212890625,3.0520401000976562,993.5169067382812],[-634.0302734375,3.840970993041992,884.4476318359375],[-452.8558044433594,7.049402236938477,762.9793701171875],[-565.6397705078125,-.0390472412109375,958.39111328125],[-652.7775268554688,3.813385009765625,937.6884765625],[-694.2501831054688,11.5843505859375,826.6038208007812],[-526.5826416015625,1.0833511352539062,890.884521484375],[-838.4495849609375,13.927221298217773,1050.0052490234375],[-856.3858032226562,10.221710205078125,1000.8661499023438]]}},X9={name:"Black Windrustler",explain:null,memo:"A rare variant occasionally spotted in a Windrustler pack, with charcoal skin and a larger frame. While it could be a type of melanistic mutation, there are enough unique examples to suggest this might even be a subspecies. Their role in the pack and relationship with others of their kind are important topics that warrant further study.",color:"I_WHITE",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0023",reward_data:[],st101:{target:{category:"PLAYER"},points:[[-636.8079833984375,5.955738067626953,857.4435424804688],[-494.51251220703125,1.2405548095703125,916.8186645507812],[-590.6915283203125,.7461643218994141,883.7235107421875],[-452.3226623535156,7.283473968505859,765.6085205078125],[-568.9535522460938,.17151927947998047,955.2349853515625],[-649.8143920898438,3.3829569816589355,936.2897338867188]]}},Y9={name:"Landlight Shrimp",explain:null,memo:"Shrimp-like creatures that use their secretions to comb through fulgurite and feed on organic matter like dead thunderbugs. The consumption of some of these microbes seems to have given the Landlight Shrimp a kind of luminescence. They use hook-like appendages to cling to rock faces in large numbers, happily eating away at the fulgurite and occasionally triggering falling boulders.",color:"I_WHITE",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0025",reward_data:[],st101:{target:{category:"PLAYER"},points:[[-778.7762451171875,64.2773666381836,789.7876586914062],[-760.0940551757812,47.82816696166992,816.1265869140625],[-935.4276123046875,13.427145957946777,834.4255981445312],[-714.7581787109375,34.79109191894531,817.4711303710938],[-719.955078125,16.082683563232422,859.5465698242188],[-920.1564331054688,20.017709732055664,835.9605102539062],[-908.364501953125,30.444265365600586,897.64990234375],[-915.333984375,39.7840576171875,839.3533935546875],[-886.5079956054688,29.90835952758789,801.3455810546875],[-901.9103393554688,18.347694396972656,804.41943359375],[-876.56201171875,31.151559829711914,784.472900390625],[-888.9349975585938,28.792970657348633,770.1337890625],[-911.6531982421875,30.862932205200195,749.871826171875],[-899.4011840820312,14.787381172180176,868.1824340820312],[-930.3369750976562,12.718619346618652,808.5679931640625],[-938.0296020507812,-4.836794376373291,800.6460571289062],[-931.5821533203125,.3719601631164551,913.5271606445312],[-960.8101806640625,9.965299606323242,1002.7188720703125],[-702.8916015625,28.11410140991211,795.7706909179688]]}},q9={name:"Amstrigian",explain:null,memo:"Migrant birds that live in the forest, but travel to the plains during the Plenty to raise their young. Amstrigians choose lifelong mates and share the work when it comes to gathering food, building nests, and minding their young. Their meal of choice is insects, particularly Emperor Hoppers. They use their syrinxes to sing in chorus at the turning of the season, a social ritual that doubles as a form of communication.",color:"I_WHITE",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0027",reward_data:[],st101:{target:{category:"PLAYER"},points:[[-443.4329528808594,14.66505241394043,658.9966430664062],[-443.4329528808594,14.66505241394043,658.9966430664062],[-443.4329528808594,14.66505241394043,658.9966430664062],[-443.4329528808594,14.66505241394043,658.9966430664062],[-443.4329528808594,14.66505241394043,658.9966430664062],[-443.4329528808594,14.66505241394043,658.9966430664062],[-443.4329528808594,14.66505241394043,658.9966430664062],[-443.4329528808594,14.66505241394043,658.9966430664062],[-619.0222778320312,5.3727545738220215,862.4032592773438],[-647.8920288085938,3.3188705444335938,918.568115234375],[-442.7454833984375,9.181710243225098,771.064453125],[-511.8131408691406,1.651834487915039,903.1009521484375]]}},j9={name:"Hymstrigian",explain:null,memo:"A rare bird that has a beautiful voice. Though similar to the Amstrigian, its stunning song and colorful feathers distinguish it. Not much is known about it due to its rarity.",color:"I_WHITE",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0028",reward_data:[],st101:{target:{category:"PLAYER"},points:[[-614.3358154296875,2.997694969177246,867.4359741210938]]}},K9={name:"Rufflizard",explain:null,memo:"Lizards with adipose tissue near their jaws and tail. When food is plentiful, these sac-like reservoirs fatten up and turn a healthy red. A Rufflizard with plenty of food in the tank is a happy Rufflizard, and you may see them basking in the sun and bobbing to each other in greeting. A poorly fed Rufflizard however, will move as little as possible.",color:"I_WHITE",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0029",reward_data:[],st101:{target:{category:"PLAYER"},points:[[-948.424072265625,6.8410139083862305,908.5130004882812],[-944.6573486328125,-6.38673210144043,825.8283081054688],[-936.5400390625,-.10377788543701172,945.5548706054688],[-996.1270141601562,26.953603744506836,892.6055908203125],[-970.9047241210938,21.771568298339844,861.1287231445312],[-1027.6331787109375,23.912813186645508,909.3134155273438]]}},Q9={name:"Pallbug",explain:null,memo:"Insects that feed on dead flesh and serve as decomposers in the ecosystem. They use the bristles on their forelegs and joints to sweep organic matter from the carrion. When they're not feeding on dead monsters, they can usually be found lurking in between rocks or other places the sun doesn't reach.",color:"I_WHITE",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0032",reward_data:[],st101:{target:{category:"PLAYER"},points:[[-890.7614135742188,-27.084697723388672,762.2442016601562],[-951.451171875,-5.522212028503418,832.562255859375],[-693.33447265625,8.968793869018555,934.3704833984375],[-875.9508666992188,-61.823726654052734,1293.217529296875],[-1035.275390625,69.24197387695312,754.0090942382812]]}},Z9={name:"Tracktail Lizard",explain:null,memo:"Endemic creatures that are native to the Windward Plains—particularly its deserts. Thanks to their unusual tails, they can sit upright and assess their surroundings, or they can shield themselves from the hot sun. When they sit, their tails leave a mark in the sand that resembles a large monster's footprint. They typically travel in pairs to watch each other's back while doing things like drinking.",color:"I_WHITE",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0033",reward_data:[],st101:{target:{category:"PLAYER"},points:[[-762.26416015625,-13.447593688964844,1301.446044921875],[-952.2472534179688,1.5320472717285156,1150.6396484375],[-910.3933715820312,5.630958557128906,1347.8409423828125],[-908.1541137695312,-2.965484619140625,1245.1627197265625],[-831.6328125,10.001276016235352,1201.6585693359375]]}},$9={name:"Emperor Hopper",explain:null,memo:"Huge grasshoppers that have fully earned their name. Their powerful hind legs allow them to jump long distances and escape in a pinch. If you rustle through the grass—their usual hiding spot—you're bound to see at least one Emperor Hopper spring away. Grass fires throw them into a panic, a situation that certain other hungry creatures might be eager to take advantage of.",color:"I_WHITE",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0034",reward_data:[],st101:{target:{category:"PLAYER"},points:[[-614.4965209960938,3.1769559383392334,863.4074096679688],[-652.1777954101562,3.1769559383392334,909.5101928710938],[-670.92431640625,6.643828868865967,863.0100708007812],[-604.209228515625,.6166915893554688,912.6699829101562],[-646.9221801757812,3.739288091659546,961.0017700195312],[-576.3671875,-.8444365859031677,950.0543823242188],[-494.2861022949219,-.8444365859031677,864.219970703125],[-514.3994140625,-.8444365859031677,905.7064208984375],[-507.39801025390625,-.8444365859031677,951.5897827148438],[-454.01959228515625,7.175537109375,767.730712890625],[-424.20709228515625,11.901749610900879,703.029296875]]}},J9={name:"Quatreflies",explain:"Delicate insects that choose habitats that monsters won't approach, making them good indicators of where to set up a Pop-up Camp.",memo:"Flying insects that resemble four-leaf clovers. Resilient to any weather, they can be found day or night in nearly any climate in places where monsters aren't likely to prowl. A good indicator of safe ground to set up a Pop-up Camp is if you see these auspicious bugs milling about.",color:"I_EMERALD",item_icon:"INVALID",map_icon:"MAP_0036",animal_icon:"A0039",reward_data:[],st101:{target:{category:"PLAYER"},points:[[-1096.06884765625,38.56486129760742,990.6592407226562],[-1000.443359375,66.97383880615234,726.2601928710938],[-903.4552001953125,-61.406742095947266,1279.21484375],[-1016.7998046875,33.41555404663086,965.344970703125],[-1095.1917724609375,86.2919921875,780.04052734375],[-617.83642578125,25.07274055480957,738.1260986328125],[-425.83038330078125,8.657916069030762,810.9818115234375],[-473.39300537109375,-.3041367530822754,999.6838989257812],[-1066.7177734375,17.187904357910156,1293.3526611328125],[-963.2896118164062,4.820441722869873,1344.2806396484375],[-703.5462646484375,.3321189880371094,1357.0455322265625],[-729.249755859375,3.3959875106811523,1520.74609375],[-728.6119995117188,13.65069580078125,985.1529541015625]]}},eE={name:"Smokeshroud Gekko",explain:null,memo:null,color:"I_MOS",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0052",reward_data:[],st101:{target:{category:"PLAYER"},points:[[-874.6474609375,-57.70109558105469,1230.673095703125],[-877.8370361328125,-57.86552810668945,1232.8724365234375],[-878.5888671875,-57.81804656982422,1233.3582763671875]]}},tE={name:"Sandstar",explain:null,memo:null,color:"I_MOS",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0057",reward_data:[],st101:{target:{category:"PLAYER"},points:[[-874.0322265625,2.633697509765625,1294.75048828125]]}},nE={name:"Paratoad",explain:"Toads containing a paralytic gas. Hitting them will release the gas, which is powerful enough to stop large monsters in their tracks.",memo:"Toads containing a paralytic gas that are usually found by the water. They are sensitive to force and will release the gas as a defensive measure; it's powerful enough to stop hunters and large monsters in their tracks, which buys the paratoad time to escape. Hunters can use this behavior to direct the gas at a desired target and gain the upper hand.",color:"I_LEMON",item_icon:"INVALID",map_icon:"MAP_0011",animal_icon:"A0000",reward_data:[{story:{item_id:"INVALID",num:0,probability:0},ex:{item_ids:[],nums:[],probabilities:[]}}],st101:{points:[[-500.3074035644531,1.038915991783142,801.2647094726562],[-495.8778991699219,3.324068069458008,778.3876953125],[-472.4643859863281,4.519114971160889,794.0625],[-915.3506469726562,6.531298637390137,1328.097412109375]]}},iE={name:"Vigorwasp",explain:"Insects that carry restorative nectar. A light impact causes the nectar to scatter, producing a continual healing effect.",memo:"Insects that gather restorative nectar from vitalilies and store it in their abdomens. While the flowers and nectar have similar properties, the latter can be scattered in large quantities to produce a lingering, continual healing effect. During the Plenty, when vitalilies flourish, there's a similar rise in the Purewasp population.",color:"I_SGREEN",item_icon:"INVALID",map_icon:"MAP_0012",animal_icon:"A0003",reward_data:[],st101:{points:[[-933.7880249023438,5.582799911499023,1325.47705078125],[-950.4912109375,6.64335823059082,1347.968017578125],[-467.7972106933594,12.461819648742676,698.3864135742188],[-466.3243103027344,9.849132537841797,732.2653198242188],[-558.8399047851562,1.5300936698913574,866.2797241210938],[-570.7525634765625,1.738499641418457,883.2305908203125]]}},sE={name:"Giant Vigorwasp",explain:"Large wasps that carry more nectar at a higher concentration. A light impact scatters the nectar, producing a continual healing effect.",memo:"Large wasps that carry more nectar at a higher concentration. This boosts the range and potency of the nectar's restorative effects. They are most prevalent during the Plenty, when the Purewasps have learned the nectar will be more plentiful. They are sometimes sighted in groups.",color:"I_GREEN",item_icon:"INVALID",map_icon:"MAP_0012",animal_icon:"A0004",reward_data:[],st101:{points:[[-465.7510070800781,7.344604015350342,763.7203979492188],[-949.9343872070312,5.8233418464660645,1316.488037109375]]}},oE={name:"Flashflies",explain:"Insects that flash when struck. The larger their colony, the brighter they shine. They can be used to blind large monsters.",memo:"Insects that flash when struck. Usually, they live solitary existences with too faint a flicker to even notice. In caves or the dark of night, they form colonies where their light is more intense; striking them causes them to shine even brighter. On hunts, they can be used like flash bombs to blind and disorient monsters.",color:"I_YELLOW",item_icon:"INVALID",map_icon:"MAP_0013",animal_icon:"A0006",reward_data:[{story:{item_id:"INVALID",num:0,probability:0},ex:{item_ids:[],nums:[],probabilities:[]}}],st101:{points:[[-912.764892578125,.9016371965408325,900.9876098632812],[-928.8186645507812,-6.904845237731934,1064.9251708984375],[-740.2692260742188,-50.902549743652344,1179.968994140625],[-894.4808349609375,-10.421173095703125,1073.6944580078125],[-509.060302734375,4.266511917114258,873.3466796875],[-929.0501098632812,-4.3262529373168945,808.5109252929688],[-891.6297607421875,21.509902954101562,1321.4698486328125],[-968.6712036132812,14.588927268981934,1287.1549072265625],[-801.751220703125,-1.9491429328918457,1357.0703125],[-891.157958984375,-25.405227661132812,764.765625],[-885.3383178710938,-.8154424428939819,776.3369750976562]]}},rE={name:"Vigormantle Bug",explain:"Insects that wear healing herbs like cloaks, producing a restorative nectar that can be collected from them using the Hook Slinger.",memo:"Insects that wear healing herbs like cloaks, initiating a fermentation process that creates a nectar with similar restorative properties. Collecting the cloak by hand or with the Hook Slinger will restore Health. The cloak stores nutrients but can be shed in a pinch as a distraction to defend against predators.",color:"I_GREEN",item_icon:"INVALID",map_icon:"MAP_0015",animal_icon:"A0010",reward_data:[],st101:{points:[[-618.389892578125,8.65088939666748,821.8571166992188],[-794.276123046875,22.00920867919922,872.7825927734375],[-846.7965087890625,8.56312084197998,761.9591064453125],[-897.615966796875,5.04855489730835,902.8506469726562],[-939.82861328125,-4.6176300048828125,1066.0009765625],[-1048.095947265625,78.67528533935547,756.2041625976562],[-903.094970703125,-5.240002155303955,1107.062255859375],[-930.2646484375,-5.106963157653809,1054.6885986328125],[-966.1815185546875,4.937070846557617,1004.9039916992188],[-897.1893310546875,2.7607083320617676,863.2778930664062],[-923.9481201171875,.09440267086029053,831.9229125976562],[-920.5326538085938,-3.4071993827819824,860.692138671875],[-910.156982421875,2.149733066558838,858.4972534179688],[-860.1065673828125,2.6605303287506104,750.448486328125],[-778.1834106445312,22.405580520629883,838.4764404296875],[-696.2144775390625,10.62356948852539,931.1956176757812],[-699.6033325195312,12.3970947265625,922.857177734375],[-699.8077392578125,12.344019889831543,921.8162231445312],[-702.8588256835938,12.026251792907715,938.3260498046875],[-941.3038940429688,-1.6384437084197998,785.5029907226562],[-961.052978515625,5.966419696807861,1164.8226318359375],[-1025.9835205078125,14.814271926879883,1117.397216796875],[-718.8185424804688,-.9051349759101868,1379.3529052734375],[-716.8037719726562,-.24612732231616974,1384.897216796875],[-774.4769287109375,-47.17546844482422,1208.499755859375],[-591.63134765625,-7.167049884796143,1545.0601806640625],[-578.3102416992188,-7.899894714355469,1551.0164794921875]]}},aE={name:"Wiggly Litchi",explain:"Insects that thrive in rotting wood and soil. Highly nutritious, they can be consumed to increase stamina and halve its depletion rate.",memo:"Insects that thrive in rotting wood and soil due to their diet of plants and rotting leaves. Consuming them will increase stamina and halve its depletion rate. Their high nutritional value makes them a common snack for some monsters.",color:"I_IVORY",item_icon:"INVALID",map_icon:"MAP_0016",animal_icon:"A0013",reward_data:[],st101:{points:[[-487.08660888671875,.7671999931335449,873.9896240234375],[-713.903076171875,11.92164134979248,922.6104736328125],[-1018.7550659179688,13.94812297821045,1029.9061279296875],[-911.3516845703125,-1.0242723226547241,1196.7698974609375],[-728.0245971679688,15.925450325012207,825.48291015625],[-949.2144165039062,-5.446057319641113,840.75830078125],[-965.23583984375,11.928829193115234,917.8568725585938],[-588.2150268554688,8.051196098327637,742.9292602539062],[-708.4483032226562,-11.435060501098633,1422.7568359375],[-548.3942260742188,-15.867818832397461,1579.2757568359375]]}},lE={name:"Dark Hornet",explain:"Nocturnal hornets that use a luminous organ to warn foes before attacking with their stingers— even large monsters aren't safe.",memo:"Nocturnal hornets with strong defensive instincts. When they sense danger, they use a luminous organ to illuminate the area to check for threats, if one is spotted, they attack relentlessly with their poisonous stingers. Unlike other endemic life, Dark Hornets will readily attack large monsters that disturb their nests. Their diet also doesn't stimulate honey production, so hunters are better off steering clear.",color:"I_IVORY",item_icon:"INVALID",map_icon:"MAP_0018",animal_icon:"A0014",reward_data:[],st101:{points:[[-1023.1004028320312,17.68474578857422,1035.8953857421875],[-1022.5985107421875,16.982606887817383,1033.339599609375],[-1023.9011840820312,16.85181999206543,1034.5552978515625],[-1023.3097534179688,17.246179580688477,1034.252685546875],[-1030.14404296875,72.1163330078125,746.1397705078125],[-1031.9639892578125,72.1330795288086,746.0386962890625],[-1029.5450439453125,71.54570007324219,744.9473266601562],[-1032.031005859375,71.80747985839844,744.50732421875],[-661.4400634765625,22.078039169311523,786.5939331054688],[-659.3298950195312,22.06119728088379,787.0835571289062],[-661.5362548828125,21.957305908203125,788.9022827148438],[-663.3342895507812,21.826393127441406,786.848876953125]]}},cE={name:"Great Thunderbug",explain:"A colony of thunderbugs that have been galvanized by sandstorm lightning. A population this dense can stop even large monsters in their tracks.",memo:"A large colony of thunderbugs that reproduced rapidly as a result of the sandstorm lightning. A population this dense can produce enough current to stop even large monsters in their tracks. Since thunderbugs are the fuel behind shock traps, there's merit to trying to lead monster targets into the colony as a way to gain the upper hand.",color:"I_YELLOW",item_icon:"INVALID",map_icon:"MAP_0017",animal_icon:"A0015",reward_data:[{story:{item_id:"ITEM_0018",num:1,probability:100},ex:{item_ids:["ITEM_0018","NONE","NONE","NONE","NONE","NONE"],nums:[1,1,1,1,1,1],probabilities:[100,100,100,100,100,100]}}],st101:{points:[[-928.0142822265625,-3.522709369659424,868.1001586914062],[-910.5366821289062,.5911051034927368,813.5050659179688],[-1009.8662719726562,23.72621726989746,909.407958984375],[-491.4779968261719,1.748987078666687,943.9595947265625],[-945.9742431640625,-.22636091709136963,1164.6563720703125],[-807.1583251953125,-2.244800567626953,1329.12451171875],[-893.4707641601562,-2.2233760356903076,774.4541625976562]]}},uE={name:"Wedge Beetle",explain:"Insects that cling firmly to walls and other surfaces. Latching on to them with the Slinger can help you traverse terrain and evade attacks.",memo:"Insects with robust shells that can withstand most lesser impacts. They cling firmly to walls and other surfaces, making them excellent latching points for the Slinger, whether it's to get around or simply to hang out indefinitely. However, a wedge beetle in flight can only bear its load for a limited time, so it's best to latch on briefly to gain some height.",color:"I_BLUE",item_icon:"INVALID",map_icon:"MAP_0019",animal_icon:"A0016",reward_data:[],st101:{points:[[-450.0804443359375,16.92586898803711,763.35498046875],[-464.9742126464844,20.562904357910156,752.7631225585938],[-471.61309814453125,17.462417602539062,776.5452270507812],[-928.6389770507812,15.984419822692871,1158.5849609375],[-965.4886474609375,12.885037422180176,1177.966552734375],[-744.94482421875,17.10360336303711,1475.2415771484375],[-669.7449340820312,13.119172096252441,1411.8514404296875],[-1039.945556640625,43.72166061401367,976.15673828125],[-482.2315368652344,25.514373779296875,1569.625],[-487.1650390625,37.80522537231445,1572.7745361328125],[-491.42950439453125,56.84138488769531,1566.922119140625],[-494.36224365234375,72.77865600585938,1564.18408203125],[-488.2269592285156,88.92865753173828,1558.4345703125],[-483.98638916015625,101.39865112304688,1559.401123046875],[-604.1748046875,27.576457977294922,684.1504516601562]]}},hE={name:"Thunderbug",explain:"Insects that store electricity. Found near electrical sources, they can be used to make tools like shock traps and thunder ammo.",memo:"Insects capable of discharging small amounts of electricity. They are drawn to electrical sources, particularly the fulgurite formed by lightning strikes. Thunderbug materials can be used to craft many useful tools such as shock traps and thunder ammo.",color:"I_LEMON",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0017",reward_data:[{story:{item_id:"ITEM_0031",num:1,probability:100},ex:{item_ids:["ITEM_0031"],nums:[1],probabilities:[100]}},{story:{item_id:"ITEM_0031",num:1,probability:100},ex:{item_ids:["ITEM_0031"],nums:[1],probabilities:[100]}}],st101:{points:[[-942.310302734375,.3501473665237427,804.0551147460938],[-944.6162719726562,7.737740993499756,911.2069702148438],[-952.086669921875,.938018262386322,990.5770263671875],[-905.4891967773438,2.227038860321045,901.3375244140625],[-957.2564086914062,21.575899124145508,860.1672973632812],[-834.1995239257812,32.216590881347656,883.044921875],[-868.869140625,.8702871799468994,758.9588623046875],[-997.1934814453125,4.678938388824463,974.5885620117188],[-933.0123901367188,1.0847280025482178,913.2841186523438],[-1001.454345703125,68.12142181396484,732.3618774414062],[-920.384765625,14.43347454071045,848.4567260742188],[-832.1499633789062,41.19939041137695,769.8180541992188],[-786.6614990234375,55.22373962402344,790.4962158203125],[-722.1790161132812,35.7662353515625,850.383056640625],[-900.850830078125,18.67177963256836,808.5817260742188],[-667.7975463867188,34.894996643066406,822.4470825195312],[-740.0181884765625,46.47983932495117,822.0753173828125],[-923.4810791015625,20.72690773010254,824.3018188476562],[-939.5507202148438,16.704280853271484,937.3375854492188],[-962.5143432617188,15.011765480041504,836.3444213867188],[-890.137939453125,2.46132230758667,1114.39111328125],[-861.4929809570312,12.8183012008667,890.0267944335938],[-696.5608520507812,22.980195999145508,793.7330932617188],[-561.2640991210938,3.333712100982666,780.781494140625],[-1003.0659790039062,12.472729682922363,1216.10595703125],[-856.9393920898438,-60.06922149658203,1308.503662109375],[-857.9346313476562,-58.305870056152344,1309.80126953125]]}},pE={name:"Flashbug",explain:"Insects with apparatuses capable of producing strong bursts of light. Their materials are used in Slinger flash pods.",memo:"Insects that emit strong bursts of light in response to external factors. It was long believed that blunt trauma or death were the triggers, but this theory has been rejected. It is now thought that some constituent element of their body fluid vaporizes and produces the flash. In any case, their materials are highly prized for their utility in items like Slinger flash pods.",color:"I_YELLOW",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0018",reward_data:[{story:{item_id:"ITEM_0029",num:1,probability:100},ex:{item_ids:["ITEM_0029"],nums:[1],probabilities:[100]}},{story:{item_id:"ITEM_0029",num:1,probability:100},ex:{item_ids:["ITEM_0029"],nums:[1],probabilities:[100]}}],st101:{points:[[-777.3328857421875,39.04364776611328,842.2575073242188],[-443.36279296875,11.416488647460938,773.1488037109375],[-1009.114013671875,25.53799057006836,1046.3260498046875],[-641.990234375,2.891512870788574,1011.0745849609375],[-571.264892578125,5.111032009124756,782.1411743164062],[-741.0953369140625,19.592735290527344,932.4515380859375],[-843.8379516601562,9.853148460388184,1146.89404296875],[-944.4343872070312,-57.12830352783203,1243.5318603515625],[-780.3239135742188,-43.34138870239258,1144.383056640625],[-712.9247436523438,-35.3054084777832,1210.122802734375],[-556.6921997070312,-13.491446495056152,1604.4725341796875]]}},dE={name:"Godbug",explain:"Insects said to live for a thousand years. Their extracts can be combined with other items to create powders with the same effects.",memo:"Insects that are claimed by some tomes and oral histories to live for a thousand years. No such specimens have been discovered, but studies of the Godbug's tissue prove that they do enjoy significant longevity. Their body fluids have diffusive properties that can be combined with other items to create powders with the same properties.",color:"I_WHITE",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0019",reward_data:[{story:{item_id:"ITEM_0030",num:1,probability:100},ex:{item_ids:["ITEM_0030"],nums:[1],probabilities:[100]}},{story:{item_id:"ITEM_0030",num:1,probability:100},ex:{item_ids:["ITEM_0030"],nums:[1],probabilities:[100]}}],st101:{points:[[-1078.130859375,75.2757339477539,707.8848876953125],[-717.8651123046875,21.06072998046875,864.5725708007812],[-618.9945068359375,16.339242935180664,675.633056640625],[-676.6207885742188,4.064515590667725,1400.415283203125],[-954.4057006835938,64.64645385742188,796.9072875976562],[-1034.441162109375,73.03001403808594,772.7255249023438],[-1022.5671997070312,103.8253402709961,838.9403686523438],[-967.2644653320312,22.297067642211914,1077.3074951171875],[-892.2852172851562,-42.89104080200195,1340.8380126953125],[-649.2097778320312,2.3545470237731934,1428.3214111328125],[-653.5654907226562,-9.188486099243164,1543.6009521484375],[-592.2017822265625,-14.279521942138672,1580.1158447265625],[-486.1966552734375,-4.666983127593994,1645.4217529296875]]}},fE={name:"Bitterbug",explain:"Insects whose bitter extracts promote natural healing and can be combined into a variety of useful medicines and items.",memo:"Insects whose bitter extracts are used for a wide variety of medicinal purposes. In addition to promoting natural healing, disinfecting, and mitigating poisons, they also boost the efficacy of other medicines, making them highly useful. That said, by themselves they have little effect and taste extremely bitter, so it's best to consider them an ingredient, not a solution in their own right.",color:"I_BLUE",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0020",reward_data:[{story:{item_id:"ITEM_0028",num:1,probability:100},ex:{item_ids:["ITEM_0028"],nums:[1],probabilities:[100]}},{story:{item_id:"ITEM_0028",num:1,probability:100},ex:{item_ids:["ITEM_0028"],nums:[1],probabilities:[100]}}],st101:{points:[[-996.2930908203125,69.36199188232422,737.96728515625],[-1072.177001953125,24.609790802001953,983.1060180664062],[-1008.2059936523438,22.947254180908203,961.92822265625],[-817.3359985351562,18.910144805908203,854.7474365234375],[-1060.886962890625,44.85148620605469,1022.6181030273438],[-740.1649169921875,15.099249839782715,1106.1080322265625],[-984.4540405273438,47.110992431640625,934.1760864257812],[-675.9058837890625,15.692377090454102,809.7035522460938],[-573.5496826171875,-1.683434009552002,974.9216918945312],[-939.7272338867188,-65.3337173461914,1282.8765869140625],[-946.6143188476562,7.105751991271973,1362.376953125],[-931.5903930664062,-23.015399932861328,1351.5880126953125],[-923.5455932617188,-23.750198364257812,1358.1275634765625],[-921.5728149414062,-32.94776916503906,1335.927978515625],[-898.957763671875,-40.11160659790039,1314.8565673828125],[-902.4929809570312,-42.64413070678711,1331.14697265625],[-896.4041137695312,15.878355026245117,851.4603271484375]]}},mE={name:"Curioshell Crab",explain:null,memo:null,color:"I_MOS",item_icon:"ITEM_0038",map_icon:"INVALID",animal_icon:"A0051",reward_data:[],st101:{points:[[-862.3181762695312,-62.66808319091797,1291.6414794921875],[-1067.8468017578125,43.7081184387207,1018.64306640625],[-481.8044738769531,97.25794982910156,1548.487548828125]]}},_E={EM5004_00_0:z9,EM5200_00_0:W9,EM5200_09_0:X9,EM5202_00_0:Y9,EM5203_00_0:q9,EM5203_09_0:j9,EM5204_00_0:K9,EM5205_00_0:Q9,EM5206_00_0:Z9,EM5207_00_0:$9,EM5209_00_0:J9,EM5217_00_0:eE,EM5219_00_0:tE,EM5001_00_0:nE,EM5002_00_0:iE,EM5002_01_0:sE,EM5003_00_0:oE,EM5005_00_0:rE,EM5006_00_0:aE,EM5007_00_0:lE,EM5008_00_0:cE,EM5009_00_0:uE,EM5100_00_0:hE,EM5101_00_0:pE,EM5101_10_0:dE,EM5101_20_0:fE,EM5216_09_0:mE},gE={st101_01:[-919.7466,-4.565231,800.71185],st101_02:[-910.85376,-12.597151,1078.5874],st101_03:[-1007.8833,26.637022,884.136],st101_04:[-997.3703,66.84009,778.1621],st101_05:[-1038.2782,99.177315,856.0023],st101_06:[-1056.6543,19.23118,997.2134],st101_07:[-684.0986,12.053447,828.59827],st101_08:[-620.06616,3.6506279,883.92993],st101_09:[-599.68225,11.810763,685.755],st101_10:[-439.5195,8.324525,744.4954],st101_11:[-935.6118,-2.3411994,1180.9783],st101_12:[-729.9123,7.232611,1152.3801],st101_13:[-1023.91064,20.92313,1337.6833],st101_14:[-960.1674,-60.0712,1251.8989],st101_15:[-759.71173,-58.826077,1163.7345],st101_16:[-713.80133,-13.473921,1437.9392],st101_17:[-383.27893,-19.954575,1610.7]},ME={st102_01:[-162,40,426],st102_02:[-105,35,270],st102_03:[60,35,320],st102_04:[146,35,324],st102_05:[-160,40,148],st102_06:[65,50,85],st102_07:[378,29,65],st102_08:[408,15,-55],st102_09:[-140,49,52],st102_10:[-24,57,-60],st102_11:[231,147,74],st102_12:[238,75,-74],st102_13:[133,80,-250],st102_14:[183.2244,123.85136,-301.6655],st102_15:[-24.193121,83.395706,-459.46222],st102_16:[-188.12689,145.26898,-490.46313],st102_17:[48,202,-590],st102_18:[127.838135,111.74295,25.128252]},xE={st103_00:[0,0,0],st103_01:[725,-20,-101],st103_02:[880,-60,10],st103_03:[933,-56,-80],st103_04:[1090,-85,10],st103_05:[980,-50,100],st103_06:[1190,-3,76],st103_07:[1009,-85,-245],st103_08:[902,-110,-166],st103_09:[957,-105,-31],st103_10:[778,-127,-181],st103_11:[862,-114,118],st103_12:[822,-156,-50],st103_13:[972,-167,-77],st103_14:[896,-186,72],st103_15:[1064,-193,0],st103_16:[704,-194,93],st103_17:[1230,-204,26],st103_18:[978,-204,145]},yE={},EE={st105_01:[-57.392406,-33.377365,-57.22487],st105_02:[-120.30822,-67.45747,28.872145],st105_03:[-36.64701,-57.374046,29.754517],st105_04:[-140.25102,-67.56525,32.546295],st105_05:[-45.884747,-74.907936,116.71426],st105_06:[-20.001392,-93.419655,35.251564],st105_07:[-19.45993,-147.87343,-103.07474],st105_08:[-78.25657,-164.81169,-33.841972],st105_09:[-6.2212315,-184.43538,91.60071],st105_10:[47.259804,-205.9813,85.91704],st105_11:[126.19661,-216.2659,103.59981],st105_12:[-160.73444,-256.64386,-70.3474],st105_13:[-79.22473,-251.68236,-20.276674],st105_14:[-31.596294,-287.8923,59.355495],st105_15:[33.2423,-280.65152,27.337843]},IE={},AE={},vE={},TE={},SE={},bE={},NE={},LE={},RE={},wE={},CE={},DE={ST101:gE,ST102:ME,ST103:xE,ST104:yE,ST105:EE,ST201:IE,ST202:AE,STXXX:vE,ST203:TE,ST204:SE,ST404:bE,ST401:NE,ST403:LE,ST502:RE,ST503:wE,ST402:CE};document.getElementById("version").innerHTML="<strong>Version:</strong> 0.0.1";let li=new Map;li.set("st101","Windward Plains");li.set("st102","Scarlet Forest");li.set("st103","Oilwell Basin");li.set("st104","Iceshard Cliffs");li.set("st503","Training Area");const Wn=new np,rn=new Tt(75,window.innerWidth/window.innerHeight,.1,3e3),PE=document.getElementById("webgl-canvas"),an=new N_({canvas:PE});an.setPixelRatio(window.devicePixelRatio);an.setSize(window.innerWidth,window.innerHeight);an.setAnimationLoop(KE);an.setClearColor(16777215,0);an.shadowMap.enabled=!0;const wa=new So(16777215,1.2);wa.position.set(-449,160,1500);wa.target.position.set(-449,160,1500);Wn.add(wa);const Ca=new So(16777215,1.2);Ca.position.set(-400,815,-400);Ca.target.position.set(-400,815,-400);Wn.add(Ca);const UE=new So(16777215,1.2);Wn.add(UE);const Xn=new su,du=Xn.load("./assets/mapnormal.png"),OE=Xn.load("./assets/maindiffuse.png"),No=new Zi({map:OE,normalMap:du});No.normalScale.set(-2,-2);No.needsUpdate=!0;const VE=Xn.load("./assets/mainotherdiffuse.png"),fu=new Zi({map:VE,normalMap:du});fu.normalScale.set(-.5,-.5);const FE=Xn.load("./assets/walldiffuse.png"),GE=new Zi({map:FE});No.normalScale.set(.2,.2);const BE=Xn.load("./assets/outlinediffuse.png"),kE=new Gn({map:BE}),HE=new z_;HE.load("./assets/st101.glb",function(s){s.scene.traverse(e=>{e.castShadow=!0,e.isMesh?(e.name.includes("mainOther")?e.material=fu:e.name.includes("outline")?e.material=kE:e.name.includes("wall")&&(e.material=GE),e.name.includes("main")&&!e.name.includes("Other")&&(e.material=No)):e=null}),Wn.add(s.scene)},void 0,function(s){console.error(s)});an.shadowMap.needsUpdate=!0;const Ts=new Map;function zE(){Object.entries(H9).forEach(([s,e])=>{var t="";if(e.map_icon!="INVALID"?t="./assets/gimmick_icons/MHWilds-"+s+" Map Icon.png":t="./assets/gimmick_icons/MHWilds-"+e.icon+" Icon "+e.color+".png",e.name!==null){const n=Xn.load(t);Ts.set(s,{data:e,texture:n})}})}zE();const Lo=new Map;function WE(){Object.entries(_E).forEach(([s,e])=>{var t="";e.map_icon!="INVALID"?t="./assets/enemy_icons/MHWilds-"+s+" Map Icon.png":t="./assets/enemy_icons/MHWilds-"+s+" Icon.png";const n=Xn.load(t);Lo.set(s,{data:e,texture:n})})}WE();const Ro=new Map;function XE(){Object.entries(DE).forEach(([s,e])=>{s==="ST101"&&Object.entries(e).forEach(([t,n])=>{const i="./assets/map_nums/"+t+".png",o=Xn.load(i),r=t.split("_"),a=r[0],l=r[1],c=`${li.get(a)} ${l}`;Ro.set(t,{data:{point:n,areaNum:t,name:c},texture:o})})})}XE();const ci=[];Ts.forEach((s,e)=>{s.data.points.forEach(t=>{if(t!=null){const n=new vo({map:s.texture}),i=new ya(n);Wn.add(i),i.scale.set(25,25,25),i.position.set(t[0],t[1]+5,t[2]),i.gimmickId=e,i.baseScaling=1,s.data.map_filtering_type==="NON_FILTERING_TARGET"&&(i.baseScaling=1.5,i.position.set(t[0],t[1]+10,t[2])),i.type="GIMMICK",ci.push(i)}})});Lo.forEach((s,e)=>{s.data.st101.points.forEach(t=>{if(t!=null){const n=new vo({map:s.texture}),i=new ya(n);Wn.add(i),i.scale.set(25,25,25),i.position.set(t[0],t[1]+5,t[2]),i.emId=e,i.type="ENDEMIC",i.baseScaling=1,ci.push(i)}})});Ro.forEach((s,e)=>{const t=new vo({map:s.texture}),n=new ya(t);Wn.add(n);const i=s.data.point;n.scale.set(20,20,20),n.position.set(i[0],i[1]+20,i[2]),n.areaId=e,n.type="AREA_NUMBER",n.baseScaling=1,ci.push(n)});const Io=new Wp,Fi=new ye;let Kt=null,gr=null;const Vn=document.createElement("div");Vn.classList.add("tooltip");document.body.appendChild(Vn);function mu(s,e,t){if(Kt.type==="GIMMICK"){const n=Ts.get(Kt.gimmickId);s.innerHTML=`
            <div style="font-weight: bold; color: lightgray;">${n.data.name}</div>
            `,n.data.explain!==null&&(s.innerHTML+=`<div>${n.data.explain}</div>`)}else if(Kt.type==="ENDEMIC"){const n=Lo.get(Kt.emId);s.innerHTML=`
            <div style="font-weight: bold; color: lightgray;">${n.data.name}</div>
            `,t=="EXTENDED"?n.data.memo!==null&&(s.innerHTML+=`<div>${n.data.memo}</div>`):n.data.explain!==null&&(s.innerHTML+=`<div>${n.data.explain}</div>`)}else if(Kt.type==="AREA_NUMBER"){const n=Ro.get(Kt.areaId).data.areaNum.split("_"),i=n[0],o=n[1];s.innerHTML=`<div style="font-weight: bold; color: lightgray;">Area ${o}</div>`,s.innerHTML+=`<div>An area in the ${li.get(i)}</div>`}Vn.style.display="block"}window.addEventListener("mousemove",s=>{Fi.x=s.clientX/window.innerWidth*2-1,Fi.y=-(s.clientY/window.innerHeight)*2+1,Io.setFromCamera(Fi,rn);const e=Io.intersectObjects(ci);if(e.length>0){if(Kt!==e[0].object&&(Kt=e[0].object),!Kt.visible)return;Vn.style.left=`${s.clientX+10}px`,Vn.style.top=`${s.clientY+10}px`,mu(Vn,Kt,"TOOLTIP"),Vn.style.display="block"}else Kt=null,Vn.style.display="none"});const mc=document.getElementById("selected-item");window.addEventListener("click",s=>{Fi.x=s.clientX/window.innerWidth*2-1,Fi.y=-(s.clientY/window.innerHeight)*2+1,Io.setFromCamera(Fi,rn);const e=Io.intersectObjects(ci);if(e.length>0){if(gr=e[0].object,!gr.visible)return;mc.style.display="flex",mu(mc,gr,"EXTENDED")}});function YE(){const s=Math.min(rn.position.distanceTo(hn.target),800),e=Math.max(32*s/700,10);ci.forEach(t=>{const n=e*t.baseScaling;t.scale.set(n,n,n)})}const qE=document.getElementById("filters"),lo=document.getElementById("all-gimmicks"),_c=document.getElementById("collectable"),Mr=document.getElementById("hidden"),gc=document.getElementById("trap"),Mc=document.getElementById("non-filtering"),xc=document.getElementById("slinger"),yc=document.getElementById("endemic"),jE=document.getElementById("areanumbers"),Ec=document.getElementById("search-filter");_u();function _u(s){s!==void 0&&(s.target.classList.contains("all-filters")||lo.checked&&!s.target.checked&&(lo.checked=!1)),lo.checked&&(_c.checked=!0,Mr.checked=!0,gc.checked=!0,Mc.checked=!0,xc.checked=!0,yc.checked=!0),ci.forEach(e=>{var t=null;switch(e.type){case"GIMMICK":t=Ts.get(e.gimmickId).data;break;case"AREA_NUMBER":t=Ro.get(e.areaId).data;break;case"ENDEMIC":t=Lo.get(e.emId).data;break}if(e.type==="GIMMICK")switch(Ts.get(e.gimmickId).data.map_filtering_type){case"ALL":e.visible=lo.checked;break;case"COLLECT":e.visible=_c.checked;break;case"ENVIRONMENT_TRAP":e.visible=gc.checked;break;case"INVISIBLE":e.visible=Mr.checked;break;case"INVISIBLE_ADDBEACON":e.visible=Mr.checked;break;case"NON_FILTERING_TARGET":e.visible=Mc.checked;break;case"SLINGER":e.visible=xc.checked;break}else e.type==="ENDEMIC"?e.visible=yc.checked:e.type==="AREA_NUMBER"&&(e.visible=jE.checked);console.log(Ec.value),e.visible=t.name.includes(Ec.value)})}qE.addEventListener("change",_u);const hn=new R_(rn,an.domElement);hn.enable=!0;hn.minDistance=100;hn.maxDistance=2e3;hn.staticMoving=!0;hn.zoomSpeed=1.5;rn.position.set(-600,600,1300);hn.target.set(-700,0,1400);rn.lookAt(hn.target);hn.update();window.addEventListener("resize",QE);function KE(){hn.update(),an.clear(),YE();const s=rn.position;document.getElementById("camera-position").innerText=`Camera: (${s.x.toFixed(2)}, ${s.y.toFixed(2)}, ${s.z.toFixed(2)})`,an.render(Wn,rn)}function QE(){const s=window.innerWidth,e=window.innerHeight;rn.aspect=s/e,rn.updateProjectionMatrix(),an.setSize(window.innerWidth,window.innerHeight)}document.querySelectorAll(".toggleButton").forEach(s=>{s.addEventListener("click",function(){let e=this.nextElementSibling,t=this.querySelector(".arrow");e.style.maxHeight?(e.style.maxHeight=null,t.textContent="▶"):(e.style.maxHeight=e.scrollHeight+"px",t.textContent="▼")})});
