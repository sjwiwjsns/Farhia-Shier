var cf=0,Mh=1,hf=2;var bh=1,il=2,Ei=3,Oi=0,bn=1,hn=2,sn=0,Bi=1,Nn=2,Sh=3,Eh=4,sl=5,Wn=100,uf=101,ff=102,df=103,pf=104,Gs=200,mf=201,gf=202,xf=203,La=204,Ua=205,Uo=206,vf=207,No=208,yf=209,_f=210,Mf=211,bf=212,Sf=213,Ef=214,rl=0,ol=1,al=2,Ls=3,ll=4,cl=5,hl=6,ul=7,wh=0,wf=1,Tf=2,Hi=0,fl=1,dl=2,pl=3,Nr=4,ml=5,gl=6,xl=7;var Th=300,Vs=301,Ws=302,vl=303,yl=304,Fo=306,ti=1e3,ns=1001,Na=1002,Mn=1003,Af=1004;var zo=1005;var hi=1006,_l=1007;var as=1008;var qn=1009,Ah=1010,Rh=1011,Fr=1012,Ml=1013,ls=1014,fi=1015,un=1016,bl=1017,Sl=1018,cs=1020,Ch=35902,Ph=35899,Ih=1021,Dh=1022,Fn=1023,Ar=1026,hs=1027,El=1028,wl=1029,Lh=1030,Tl=1031;var Al=1033,Oo=33776,Bo=33777,ko=33778,Ho=33779,Rl=35840,Cl=35841,Pl=35842,Il=35843,Dl=36196,Ll=37492,Ul=37496,Nl=37808,Fl=37809,zl=37810,Ol=37811,Bl=37812,kl=37813,Hl=37814,Gl=37815,Vl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,Zl=37821,$l=36492,Kl=36494,Jl=36495,jl=36283,Ql=36284,tc=36285,ec=36286;var co=2300,Fa=2301,Da=2302,dh=2400,ph=2401,mh=2402;var Rf=3200,nc=3201;var ic=0,Cf=1,Gi="",_n="srgb",Us="srgb-linear",ho="linear",De="srgb";var Ds=7680;var gh=519,Pf=512,If=513,Df=514,Uh=515,Lf=516,Uf=517,Nf=518,Ff=519,xh=35044,ni=35048;var Nh="300 es",ci=2e3,uo=2001;var ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=1234567,ao=Math.PI/180,Ns=180/Math.PI;function zr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function ye(s,t,e){return Math.max(t,Math.min(e,s))}function Fh(s,t){return(s%t+t)%t}function mp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function gp(s,t,e){return s!==t?(e-s)/(t-s):0}function lo(s,t,e){return(1-e)*s+e*t}function xp(s,t,e,n){return lo(s,t,1-Math.exp(-e*n))}function vp(s,t=1){return t-Math.abs(Fh(s,t*2)-t)}function yp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function _p(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Mp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function bp(s,t){return s+Math.random()*(t-s)}function Sp(s){return s*(.5-Math.random())}function Ep(s){s!==void 0&&(Fu=s);let t=Fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wp(s){return s*ao}function Tp(s){return s*Ns}function Ap(s){return(s&s-1)===0&&s!==0}function Rp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pp(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*l,c*f,c*d,a*h);break;case"YZY":s.set(c*d,a*l,c*f,a*h);break;case"ZXZ":s.set(c*f,c*d,a*l,a*h);break;case"XZX":s.set(a*l,c*g,c*u,a*h);break;case"YXY":s.set(c*u,a*l,c*g,a*h);break;case"ZYZ":s.set(c*g,c*u,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ee={DEG2RAD:ao,RAD2DEG:Ns,generateUUID:zr,clamp:ye,euclideanModulo:Fh,mapLinear:mp,inverseLerp:gp,lerp:lo,damp:xp,pingpong:vp,smoothstep:yp,smootherstep:_p,randInt:Mp,randFloat:bp,randFloatSpread:Sp,seededRandom:Ep,degToRad:wp,radToDeg:Tp,isPowerOfTwo:Ap,ceilPowerOfTwo:Rp,floorPowerOfTwo:Cp,setQuaternionFromProperEuler:Pp,normalize:Pn,denormalize:wr},$t=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},de=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],h=n[i+1],l=n[i+2],f=n[i+3],d=r[o+0],u=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==d||h!==u||l!==g){let m=1-a,p=c*d+h*u+l*g+f*v,_=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let w=Math.sqrt(b),A=Math.atan2(w,p*_);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}let y=a*_;if(c=c*m+d*y,h=h*m+u*y,l=l*m+g*y,f=f*m+v*y,m===1-a){let w=1/Math.sqrt(c*c+h*h+l*l+f*f);c*=w,h*=w,l*=w,f*=w}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],h=n[i+2],l=n[i+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+l*f+c*u-h*d,t[e+1]=c*g+l*d+h*f-a*u,t[e+2]=h*g+l*u+a*d-c*f,t[e+3]=l*g-a*f-c*d-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(i/2),f=a(r/2),d=c(n/2),u=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"YXZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"ZXY":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"ZYX":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"YZX":this._x=d*l*f+h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f-d*u*g;break;case"XZY":this._x=d*l*f-h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(l-c)*u,this._y=(r-h)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(l-c)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+h)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-h)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(c+l)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+h)/u,this._y=(c+l)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+i*h-r*c,this._y=i*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-i*a,this._w=o*l-n*a-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,a),f=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*i-a*n),l=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+c*h+o*f-a*l,this.y=n+c*l+a*h-r*f,this.z=i+c*f+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wc.copy(this).projectOnVector(t),this.sub(Wc)}reflect(t){return this.sub(Wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wc=new U,zu=new de,he=class s{constructor(t,e,n,i,r,o,a,c,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h)}set(t,e,n,i,r,o,a,c,h){let l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],f=n[7],d=n[2],u=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],b=i[4],y=i[7],w=i[2],A=i[5],P=i[8];return r[0]=o*v+a*_+c*w,r[3]=o*m+a*b+c*A,r[6]=o*p+a*y+c*P,r[1]=h*v+l*_+f*w,r[4]=h*m+l*b+f*A,r[7]=h*p+l*y+f*P,r[2]=d*v+u*_+g*w,r[5]=d*m+u*b+g*A,r[8]=d*p+u*y+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+i*r*h-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=l*o-a*h,d=a*c-l*r,u=h*r-o*c,g=e*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(i*h-l*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(l*e-i*c)*v,t[5]=(i*r-a*e)*v,t[6]=u*v,t[7]=(n*c-h*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-i*h,i*c,-i*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xc.makeScale(t,e)),this}rotate(t){return this.premultiply(Xc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xc=new he;function zh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zf(){let s=fo("canvas");return s.style.display="block",s}var Ou={};function Rr(s){s in Ou||(Ou[s]=!0,console.warn(s))}function Of(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Bu=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ip(){let s={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===De&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===De&&(i.r=Tr(i.r),i.g=Tr(i.g),i.b=Tr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?ho:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Us]:{primaries:t,whitePoint:n,transfer:ho,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:n,transfer:De,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),s}var Ae=Ip();function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Tr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var fr,za=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fr===void 0&&(fr=fo("canvas")),fr.width=t.width,fr.height=t.height;let i=fr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=fr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dp=0,Cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(qc(i[o].image)):r.push(qc(i[o]))}else r=qc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function qc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?za.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lp=0,Yc=new U,In=class s extends ki{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ns,i=ns,r=hi,o=as,a=Fn,c=qn,h=s.DEFAULT_ANISOTROPY,l=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=zr(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yc).x}get height(){return this.source.getSize(Yc).y}get depth(){return this.source.getSize(Yc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ti:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ti:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Th;In.DEFAULT_ANISOTROPY=1;var ke=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,h=c[0],l=c[4],f=c[8],d=c[1],u=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(h+1)/2,y=(u+1)/2,w=(p+1)/2,A=(l+d)/4,P=(f+v)/4,R=(g+m)/4;return b>y&&b>w?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=P/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=R/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=P/r,i=R/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-v)/_,this.z=(d-l)/_,this.w=Math.acos((h+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this.w=ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this.w=ye(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oa=class extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new In(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Cr(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ze=class extends Oa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},po=class extends In{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends In{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(to),fa.subVectors(this.max,to),dr.subVectors(t.a,to),pr.subVectors(t.b,to),mr.subVectors(t.c,to),$i.subVectors(pr,dr),Ki.subVectors(mr,pr),Rs.subVectors(dr,mr);let e=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-Rs.z,Rs.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,Rs.z,0,-Rs.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-Rs.y,Rs.x,0];return!Zc(e,dr,pr,mr,fa)||(e=[1,0,0,0,1,0,0,0,1],!Zc(e,dr,pr,mr,fa))?!1:(da.crossVectors($i,Ki),e=[da.x,da.y,da.z],Zc(e,dr,pr,mr,fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new U,new U,new U,new U,new U,new U,new U,new U],oi=new U,ua=new ei,dr=new U,pr=new U,mr=new U,$i=new U,Ki=new U,Rs=new U,to=new U,fa=new U,da=new U,Cs=new U;function Zc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Cs.fromArray(s,r);let a=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),c=t.dot(Cs),h=e.dot(Cs),l=n.dot(Cs);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}var Up=new ei,eo=new U,$c=new U,ui=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Up.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;eo.subVectors(t,this.center);let e=eo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(eo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(eo.copy(t.center).add($c)),this.expandByPoint(eo.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Li=new U,Kc=new U,pa=new U,Ji=new U,Jc=new U,ma=new U,jc=new U,mo=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Kc.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),Ji.copy(this.origin).sub(Kc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(pa),a=Ji.dot(this.direction),c=-Ji.dot(pa),h=Ji.lengthSq(),l=Math.abs(1-o*o),f,d,u,g;if(l>0)if(f=o*c-a,d=o*a-c,g=r*l,f>=0)if(d>=-g)if(d<=g){let v=1/l;f*=v,d*=v,u=f*(f+o*d+2*a)+d*(o*f+d+2*c)+h}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+h):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Kc).addScaledVector(pa,d),u}intersectSphere(t,e){Li.subVectors(t.center,this.origin);let n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,h=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),l>=0?(r=(t.min.y-d.y)*l,o=(t.max.y-d.y)*l):(r=(t.max.y-d.y)*l,o=(t.min.y-d.y)*l),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,i,r){Jc.subVectors(e,t),ma.subVectors(n,t),jc.crossVectors(Jc,ma);let o=this.direction.dot(jc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,t);let c=a*this.direction.dot(ma.crossVectors(Ji,ma));if(c<0)return null;let h=a*this.direction.dot(Jc.cross(Ji));if(h<0||c+h>o)return null;let l=-a*Ji.dot(jc);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class s{constructor(t,e,n,i,r,o,a,c,h,l,f,d,u,g,v,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,v,m)}set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=l,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/gr.setFromMatrixColumn(t,0).length(),r=1/gr.setFromMatrixColumn(t,1).length(),o=1/gr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*l,u=o*f,g=a*l,v=a*f;e[0]=c*l,e[4]=-c*f,e[8]=h,e[1]=u+g*h,e[5]=d-v*h,e[9]=-a*c,e[2]=v-d*h,e[6]=g+u*h,e[10]=o*c}else if(t.order==="YXZ"){let d=c*l,u=c*f,g=h*l,v=h*f;e[0]=d+v*a,e[4]=g*a-u,e[8]=o*h,e[1]=o*f,e[5]=o*l,e[9]=-a,e[2]=u*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*l,u=c*f,g=h*l,v=h*f;e[0]=d-v*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*l,e[9]=v-d*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*l,u=o*f,g=a*l,v=a*f;e[0]=c*l,e[4]=g*h-u,e[8]=d*h+v,e[1]=c*f,e[5]=v*h+d,e[9]=u*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,u=o*h,g=a*c,v=a*h;e[0]=c*l,e[4]=v-d*f,e[8]=g*f+u,e[1]=f,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=u*f+g,e[10]=d-v*f}else if(t.order==="XZY"){let d=o*c,u=o*h,g=a*c,v=a*h;e[0]=c*l,e[4]=-f,e[8]=h*l,e[1]=d*f+v,e[5]=o*l,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*l,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Np,t,Fp)}lookAt(t,e,n){let i=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ji.crossVectors(n,Gn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ji.crossVectors(n,Gn)),ji.normalize(),ga.crossVectors(Gn,ji),i[0]=ji.x,i[4]=ga.x,i[8]=Gn.x,i[1]=ji.y,i[5]=ga.y,i[9]=Gn.y,i[2]=ji.z,i[6]=ga.z,i[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],f=n[5],d=n[9],u=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],b=n[7],y=n[11],w=n[15],A=i[0],P=i[4],R=i[8],S=i[12],E=i[1],z=i[5],G=i[9],F=i[13],O=i[2],X=i[6],$=i[10],T=i[14],V=i[3],tt=i[7],ht=i[11],bt=i[15];return r[0]=o*A+a*E+c*O+h*V,r[4]=o*P+a*z+c*X+h*tt,r[8]=o*R+a*G+c*$+h*ht,r[12]=o*S+a*F+c*T+h*bt,r[1]=l*A+f*E+d*O+u*V,r[5]=l*P+f*z+d*X+u*tt,r[9]=l*R+f*G+d*$+u*ht,r[13]=l*S+f*F+d*T+u*bt,r[2]=g*A+v*E+m*O+p*V,r[6]=g*P+v*z+m*X+p*tt,r[10]=g*R+v*G+m*$+p*ht,r[14]=g*S+v*F+m*T+p*bt,r[3]=_*A+b*E+y*O+w*V,r[7]=_*P+b*z+y*X+w*tt,r[11]=_*R+b*G+y*$+w*ht,r[15]=_*S+b*F+y*T+w*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],f=t[6],d=t[10],u=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*f-i*h*f-r*a*d+n*h*d+i*a*u-n*c*u)+v*(+e*c*u-e*h*d+r*o*d-i*o*u+i*h*l-r*c*l)+m*(+e*h*f-e*a*u-r*o*f+n*o*u+r*a*l-n*h*l)+p*(-i*a*l-e*c*f+e*a*d+i*o*f-n*o*d+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=t[9],d=t[10],u=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=f*m*h-v*d*h+v*c*u-a*m*u-f*c*p+a*d*p,b=g*d*h-l*m*h-g*c*u+o*m*u+l*c*p-o*d*p,y=l*v*h-g*f*h+g*a*u-o*v*u-l*a*p+o*f*p,w=g*f*c-l*v*c-g*a*d+o*v*d+l*a*m-o*f*m,A=e*_+n*b+i*y+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=_*P,t[1]=(v*d*r-f*m*r-v*i*u+n*m*u+f*i*p-n*d*p)*P,t[2]=(a*m*r-v*c*r+v*i*h-n*m*h-a*i*p+n*c*p)*P,t[3]=(f*c*r-a*d*r-f*i*h+n*d*h+a*i*u-n*c*u)*P,t[4]=b*P,t[5]=(l*m*r-g*d*r+g*i*u-e*m*u-l*i*p+e*d*p)*P,t[6]=(g*c*r-o*m*r-g*i*h+e*m*h+o*i*p-e*c*p)*P,t[7]=(o*d*r-l*c*r+l*i*h-e*d*h-o*i*u+e*c*u)*P,t[8]=y*P,t[9]=(g*f*r-l*v*r-g*n*u+e*v*u+l*n*p-e*f*p)*P,t[10]=(o*v*r-g*a*r+g*n*h-e*v*h-o*n*p+e*a*p)*P,t[11]=(l*a*r-o*f*r-l*n*h+e*f*h+o*n*u-e*a*u)*P,t[12]=w*P,t[13]=(l*v*i-g*f*i+g*n*d-e*v*d-l*n*m+e*f*m)*P,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*m-e*a*m)*P,t[15]=(o*f*i-l*a*i+l*n*c-e*f*c-o*n*d+e*a*d)*P,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-i*c,h*c+i*a,0,h*a+i*c,l*a+n,l*c-i*o,0,h*c-i*a,l*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,f=a+a,d=r*h,u=r*l,g=r*f,v=o*l,m=o*f,p=a*f,_=c*h,b=c*l,y=c*f,w=n.x,A=n.y,P=n.z;return i[0]=(1-(v+p))*w,i[1]=(u+y)*w,i[2]=(g-b)*w,i[3]=0,i[4]=(u-y)*A,i[5]=(1-(d+p))*A,i[6]=(m+_)*A,i[7]=0,i[8]=(g+b)*P,i[9]=(m-_)*P,i[10]=(1-(d+v))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=gr.set(i[0],i[1],i[2]).length(),o=gr.set(i[4],i[5],i[6]).length(),a=gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ai.copy(this);let h=1/r,l=1/o,f=1/a;return ai.elements[0]*=h,ai.elements[1]*=h,ai.elements[2]*=h,ai.elements[4]*=l,ai.elements[5]*=l,ai.elements[6]*=l,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,e.setFromRotationMatrix(ai),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ci,c=!1){let h=this.elements,l=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===ci)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===uo)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=f,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ci,c=!1){let h=this.elements,l=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===ci)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===uo)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=f,h[9]=0,h[13]=u,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gr=new U,ai=new Ot,Np=new U(0,0,0),Fp=new U(1,1,1),ji=new U,ga=new U,Gn=new U,Hu=new Ot,Gu=new de,Qe=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],h=i[5],l=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qe.DEFAULT_ORDER="XYZ";var go=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zp=0,Vu=new U,xr=new de,Ui=new Ot,xa=new U,no=new U,Op=new U,Bp=new de,Wu=new U(1,0,0),Xu=new U(0,1,0),qu=new U(0,0,1),Yu={type:"added"},kp={type:"removed"},vr={type:"childadded",child:null},Qc={type:"childremoved",child:null},tn=class s extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new Qe,n=new de,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ot},normalMatrix:{value:new he}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(Wu,t)}rotateY(t){return this.rotateOnAxis(Xu,t)}rotateZ(t){return this.rotateOnAxis(qu,t)}translateOnAxis(t,e){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wu,t)}translateY(t){return this.translateOnAxis(Xu,t)}translateZ(t){return this.translateOnAxis(qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(no,xa,this.up):Ui.lookAt(xa,no,this.up),this.quaternion.setFromRotationMatrix(Ui),i&&(Ui.extractRotation(i.matrixWorld),xr.setFromRotationMatrix(Ui),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yu),vr.child=t,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kp),Qc.child=t,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yu),vr.child=t,this.dispatchEvent(vr),vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,Op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let f=c[h];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let h in a){let l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};tn.DEFAULT_UP=new U(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new U,Ni=new U,th=new U,Fi=new U,yr=new U,_r=new U,Zu=new U,eh=new U,nh=new U,ih=new U,sh=new ke,rh=new ke,oh=new ke,es=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),li.subVectors(t,e),i.cross(li);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){li.subVectors(i,e),Ni.subVectors(n,e),th.subVectors(t,e);let o=li.dot(li),a=li.dot(Ni),c=li.dot(th),h=Ni.dot(Ni),l=Ni.dot(th),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(h*c-a*l)*d,g=(o*l-a*c)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fi.x),c.addScaledVector(o,Fi.y),c.addScaledVector(a,Fi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return sh.setScalar(0),rh.setScalar(0),oh.setScalar(0),sh.fromBufferAttribute(t,e),rh.fromBufferAttribute(t,n),oh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(sh,r.x),o.addScaledVector(rh,r.y),o.addScaledVector(oh,r.z),o}static isFrontFacing(t,e,n,i){return li.subVectors(n,e),Ni.subVectors(t,e),li.cross(Ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;yr.subVectors(i,n),_r.subVectors(r,n),eh.subVectors(t,n);let c=yr.dot(eh),h=_r.dot(eh);if(c<=0&&h<=0)return e.copy(n);nh.subVectors(t,i);let l=yr.dot(nh),f=_r.dot(nh);if(l>=0&&f<=l)return e.copy(i);let d=c*f-l*h;if(d<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(yr,o);ih.subVectors(t,r);let u=yr.dot(ih),g=_r.dot(ih);if(g>=0&&u<=g)return e.copy(r);let v=u*h-c*g;if(v<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(_r,a);let m=l*g-u*f;if(m<=0&&f-l>=0&&u-g>=0)return Zu.subVectors(r,i),a=(f-l)/(f-l+(u-g)),e.copy(i).addScaledVector(Zu,a);let p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(yr,o).addScaledVector(_r,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},va={h:0,s:0,l:0};function ah(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Ae.workingColorSpace){if(t=Fh(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ah(o,r,t+1/3),this.g=ah(o,r,t),this.b=ah(o,r,t-1/3)}return Ae.colorSpaceToWorking(this,i),this}setStyle(t,e=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){let n=Bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return Ae.workingToColorSpace(En.copy(this),t),Math.round(ye(En.r*255,0,255))*65536+Math.round(ye(En.g*255,0,255))*256+Math.round(ye(En.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.workingToColorSpace(En.copy(this),e);let n=En.r,i=En.g,r=En.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,h,l=(a+o)/2;if(a===o)c=0,h=0;else{let f=o-a;switch(h=l<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=Ae.workingColorSpace){return Ae.workingToColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=_n){Ae.workingToColorSpace(En.copy(this),t);let e=En.r,n=En.g,i=En.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(va);let n=lo(Qi.h,va.h,e),i=lo(Qi.s,va.s,e),r=lo(Qi.l,va.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new Lt;Lt.NAMES=Bf;var Hp=0,Mi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=Bi,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ua,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},en=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var nn=new U,ya=new $t,Gp=0,Je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xh,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),i=Pn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Pn(e,this.array),n=Pn(n,this.array),i=Pn(i,this.array),r=Pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xh&&(t.usage=this.usage),t}};var xo=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vo=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vp=0,jn=new Ot,lh=new tn,Mr=new U,Vn=new ei,io=new ei,xn=new U,Le=class s extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zh(t)?vo:xo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];io.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Vn.min,io.min),Vn.expandByPoint(xn),xn.addVectors(Vn.max,io.max),Vn.expandByPoint(xn)):(Vn.expandByPoint(io.min),Vn.expandByPoint(io.max))}Vn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)xn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(xn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)xn.fromBufferAttribute(a,h),c&&(Mr.fromBufferAttribute(t,h),xn.add(Mr)),i=Math.max(i,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new U,c[R]=new U;let h=new U,l=new U,f=new U,d=new $t,u=new $t,g=new $t,v=new U,m=new U;function p(R,S,E){h.fromBufferAttribute(n,R),l.fromBufferAttribute(n,S),f.fromBufferAttribute(n,E),d.fromBufferAttribute(r,R),u.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),l.sub(h),f.sub(h),u.sub(d),g.sub(d);let z=1/(u.x*g.y-g.x*u.y);isFinite(z)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(z),m.copy(f).multiplyScalar(u.x).addScaledVector(l,-g.x).multiplyScalar(z),a[R].add(v),a[S].add(v),a[E].add(v),c[R].add(m),c[S].add(m),c[E].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,S=_.length;R<S;++R){let E=_[R],z=E.start,G=E.count;for(let F=z,O=z+G;F<O;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let b=new U,y=new U,w=new U,A=new U;function P(R){w.fromBufferAttribute(i,R),A.copy(w);let S=a[R];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),y.crossVectors(A,S);let z=y.dot(c[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,z)}for(let R=0,S=_.length;R<S;++R){let E=_[R],z=E.start,G=E.count;for(let F=z,O=z+G;F<O;F+=3)P(t.getX(F+0)),P(t.getX(F+1)),P(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new U,r=new U,o=new U,a=new U,c=new U,h=new U,l=new U,f=new U;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(a,c){let h=a.array,l=a.itemSize,f=a.normalized,d=new h.constructor(c.length*l),u=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?u=c[v]*a.data.stride+a.offset:u=c[v]*l;for(let p=0;p<l;p++)d[g++]=h[u++]}return new Je(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let l=0,f=h.length;l<f;l++){let d=h[l],u=t(d,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let f=0,d=h.length;f<d;f++){let u=h[f];l.push(u.toJSON(t.data))}l.length>0&&(i[c]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let l=i[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],f=r[h];for(let d=0,u=f.length;d<u;d++)l.push(f[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,l=o.length;h<l;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$u=new Ot,Ps=new mo,_a=new ui,Ku=new U,Ma=new U,ba=new U,Sa=new U,ch=new U,Ea=new U,Ju=new U,wa=new U,zt=class extends tn{constructor(t=new Le,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ea.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=a[c],f=r[c];l!==0&&(ch.fromBufferAttribute(f,t),o?Ea.addScaledVector(ch,l):Ea.addScaledVector(ch.sub(e),l))}e.add(Ea)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),Ps.copy(t.ray).recast(t.near),!(_a.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(_a,Ku)===null||Ps.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&($u.copy(r).invert(),Ps.copy(t.ray).applyMatrix4($u),!(n.boundingBox!==null&&Ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ps)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,u.start),b=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=_,w=b;y<w;y+=3){let A=a.getX(y),P=a.getX(y+1),R=a.getX(y+2);i=Ta(this,p,t,n,h,l,f,A,P,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){let _=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);i=Ta(this,o,t,n,h,l,f,_,b,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,u.start),b=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let y=_,w=b;y<w;y+=3){let A=y,P=y+1,R=y+2;i=Ta(this,p,t,n,h,l,f,A,P,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){let _=m,b=m+1,y=m+2;i=Ta(this,o,t,n,h,l,f,_,b,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Wp(s,t,e,n,i,r,o,a){let c;if(t.side===bn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Oi,a),c===null)return null;wa.copy(a),wa.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(wa);return h<e.near||h>e.far?null:{distance:h,point:wa.clone(),object:s}}function Ta(s,t,e,n,i,r,o,a,c,h){s.getVertexPosition(a,Ma),s.getVertexPosition(c,ba),s.getVertexPosition(h,Sa);let l=Wp(s,t,e,n,Ma,ba,Sa,Ju);if(l){let f=new U;es.getBarycoord(Ju,Ma,ba,Sa,f),i&&(l.uv=es.getInterpolatedAttribute(i,a,c,h,f,new $t)),r&&(l.uv1=es.getInterpolatedAttribute(r,a,c,h,f,new $t)),o&&(l.normal=es.getInterpolatedAttribute(o,a,c,h,f,new U),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let d={a,b:c,c:h,normal:new U,materialIndex:0};es.getNormal(Ma,ba,Sa,d.normal),l.face=d,l.barycoord=f}return l}var Jt=class s extends Le{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],l=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(f,2));function g(v,m,p,_,b,y,w,A,P,R,S){let E=y/P,z=w/R,G=y/2,F=w/2,O=A/2,X=P+1,$=R+1,T=0,V=0,tt=new U;for(let ht=0;ht<$;ht++){let bt=ht*z-F;for(let Tt=0;Tt<X;Tt++){let Nt=Tt*E-G;tt[v]=Nt*_,tt[m]=bt*b,tt[p]=O,h.push(tt.x,tt.y,tt.z),tt[v]=0,tt[m]=0,tt[p]=A>0?1:-1,l.push(tt.x,tt.y,tt.z),f.push(Tt/P),f.push(1-ht/R),T+=1}}for(let ht=0;ht<R;ht++)for(let bt=0;bt<P;bt++){let Tt=d+bt+X*ht,Nt=d+bt+X*(ht+1),Gt=d+(bt+1)+X*(ht+1),Kt=d+(bt+1)+X*ht;c.push(Tt,Nt,Kt),c.push(Nt,Gt,Kt),V+=6}a.addGroup(u,V,S),u+=V,d+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Tn(s){let t={};for(let e=0;e<s.length;e++){let n=Xs(s[e]);for(let i in n)t[i]=n[i]}return t}function Xp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Oh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}var fn={clone:Xs,merge:Tn},qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},yo=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ts=new U,ju=new $t,Qu=new $t,cn=class extends yo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,ju,Qu),e.subVectors(Qu,ju)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ao*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/h,i*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},br=-90,Sr=1,ka=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new cn(br,Sr,t,e);i.layers=this.layers,this.add(i);let r=new cn(br,Sr,t,e);r.layers=this.layers,this.add(r);let o=new cn(br,Sr,t,e);o.layers=this.layers,this.add(o);let a=new cn(br,Sr,t,e);a.layers=this.layers,this.add(a);let c=new cn(br,Sr,t,e);c.layers=this.layers,this.add(c);let h=new cn(br,Sr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,l]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_o=class extends In{constructor(t=[],e=Vs,n,i,r,o,a,c,h,l){super(t,e,n,i,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ha=class extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _o(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Jt(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:sn});r.uniforms.tEquirect.value=e;let o=new zt(i,r),a=e.minFilter;return e.minFilter===as&&(e.minFilter=hi),new ka(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Fe=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zp={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=l.position.distanceTo(f.position),u=.02,g=.005;h.inputState.pinching&&d>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Mo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fs=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var bi=class extends In{constructor(t=null,e=1,n=1,i,r,o,a,c,h=Mn,l=Mn,f,d){super(null,o,a,c,h,l,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var He=class extends Je{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Er=new Ot,tf=new Ot,Aa=[],ef=new ei,$p=new Ot,so=new zt,ro=new ui,pe=class extends zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new He(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$p)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Er),ef.copy(t.boundingBox).applyMatrix4(Er),this.boundingBox.union(ef)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Er),ro.copy(t.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(ro)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),t.ray.intersectsSphere(ro)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Er),tf.multiplyMatrices(n,Er),so.matrixWorld=tf,so.raycast(t,Aa);for(let o=0,a=Aa.length;o<a;o++){let c=Aa[o];c.instanceId=r,c.object=this,e.push(c)}Aa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new He(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bi(new Float32Array(i*this.count),i,this.count,El,fi));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hh=new U,Kp=new U,Jp=new he,Qn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=hh.subVectors(n,e).cross(Kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(hh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jp.getNormalMatrix(t),i=this.coplanarPoint(hh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Is=new ui,jp=new $t(.5,.5),Ra=new U,is=class{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],h=r[3],l=r[4],f=r[5],d=r[6],u=r[7],g=r[8],v=r[9],m=r[10],p=r[11],_=r[12],b=r[13],y=r[14],w=r[15];if(i[0].setComponents(h-o,u-l,p-g,w-_).normalize(),i[1].setComponents(h+o,u+l,p+g,w+_).normalize(),i[2].setComponents(h+a,u+f,p+v,w+b).normalize(),i[3].setComponents(h-a,u-f,p-v,w-b).normalize(),n)i[4].setComponents(c,d,m,y).normalize(),i[5].setComponents(h-c,u-d,p-m,w-y).normalize();else if(i[4].setComponents(h-c,u-d,p-m,w-y).normalize(),e===ci)i[5].setComponents(h+c,u+d,p+m,w+y).normalize();else if(e===uo)i[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(t){Is.center.set(0,0,0);let e=jp.distanceTo(t.center);return Is.radius=.7071067811865476+e,Is.applyMatrix4(t.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ra.x=i.normal.x>0?t.max.x:t.min.x,Ra.y=i.normal.y>0?t.max.y:t.min.y,Ra.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ir=class extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ga=new U,Va=new U,nf=new Ot,oo=new mo,Ca=new ui,uh=new U,sf=new U,Wa=class extends tn{constructor(t=new Le,e=new Ir){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ga.fromBufferAttribute(e,i-1),Va.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ga.distanceTo(Va);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(i),Ca.radius+=r,t.ray.intersectsSphere(Ca)===!1)return;nf.copy(i).invert(),oo.copy(t.ray).applyMatrix4(nf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let v=u,m=g-1;v<m;v+=h){let p=l.getX(v),_=l.getX(v+1),b=Pa(this,t,oo,c,p,_,v);b&&e.push(b)}if(this.isLineLoop){let v=l.getX(g-1),m=l.getX(u),p=Pa(this,t,oo,c,v,m,g-1);p&&e.push(p)}}else{let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=u,m=g-1;v<m;v+=h){let p=Pa(this,t,oo,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=Pa(this,t,oo,c,g-1,u,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pa(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(Ga.fromBufferAttribute(a,i),Va.fromBufferAttribute(a,r),e.distanceSqToSegment(Ga,Va,uh,sf)>n)return;uh.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(uh);if(!(h<t.near||h>t.far))return{distance:h,point:sf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var rf=new U,of=new U,bo=class extends Wa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)rf.fromBufferAttribute(e,i),of.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rf.distanceTo(of);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zs=class extends In{constructor(t,e,n,i,r,o,a,c,h){super(t,e,n,i,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Os=class extends In{constructor(t,e,n=ls,i,r,o,a=Mn,c=Mn,h,l=Ar,f=1){if(l!==Ar&&l!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,i,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},So=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Eo=class s extends Le{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],h=new U,l=new $t;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),o.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(o[d]/t+1)/2,l.y=(o[d+1]/t+1)/2,c.push(l.x,l.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},le=class s extends Le{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;i=Math.floor(i),r=Math.floor(r);let l=[],f=[],d=[],u=[],g=0,v=[],m=n/2,p=0;_(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(l),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(u,2));function _(){let y=new U,w=new U,A=0,P=(e-t)/n;for(let R=0;R<=r;R++){let S=[],E=R/r,z=E*(e-t)+t;for(let G=0;G<=i;G++){let F=G/i,O=F*c+a,X=Math.sin(O),$=Math.cos(O);w.x=z*X,w.y=-E*n+m,w.z=z*$,f.push(w.x,w.y,w.z),y.set(X,P,$).normalize(),d.push(y.x,y.y,y.z),u.push(F,1-E),S.push(g++)}v.push(S)}for(let R=0;R<i;R++)for(let S=0;S<r;S++){let E=v[S][R],z=v[S+1][R],G=v[S+1][R+1],F=v[S][R+1];(t>0||S!==0)&&(l.push(E,z,F),A+=3),(e>0||S!==r-1)&&(l.push(z,G,F),A+=3)}h.addGroup(p,A,0),p+=A}function b(y){let w=g,A=new $t,P=new U,R=0,S=y===!0?t:e,E=y===!0?1:-1;for(let G=1;G<=i;G++)f.push(0,m*E,0),d.push(0,E,0),u.push(.5,.5),g++;let z=g;for(let G=0;G<=i;G++){let O=G/i*c+a,X=Math.cos(O),$=Math.sin(O);P.x=S*$,P.y=m*E,P.z=S*X,f.push(P.x,P.y,P.z),d.push(0,E,0),A.x=X*.5+.5,A.y=$*.5*E+.5,u.push(A.x,A.y),g++}for(let G=0;G<i;G++){let F=w+G,O=z+G;y===!0?l.push(O,O+1,F):l.push(O+1,O,F),R+=3}h.addGroup(p,R,y===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Si=class s extends le{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var wo=class s extends Le{constructor(t=[new $t(0,-.5),new $t(.5,0),new $t(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ye(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],l=1/e,f=new U,d=new $t,u=new U,g=new U,v=new U,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,v.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),c.push(u.x,u.y,u.z),v.copy(g)}for(let _=0;_<=e;_++){let b=n+_*l*i,y=Math.sin(b),w=Math.cos(b);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*y,f.y=t[A].y,f.z=t[A].x*w,o.push(f.x,f.y,f.z),d.x=_/e,d.y=A/(t.length-1),a.push(d.x,d.y);let P=c[3*A+0]*y,R=c[3*A+1],S=c[3*A+0]*w;h.push(P,R,S)}}for(let _=0;_<e;_++)for(let b=0;b<t.length-1;b++){let y=b+_*t.length,w=y,A=y+t.length,P=y+t.length+1,R=y+1;r.push(w,A,R),r.push(P,R,A)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Ue=class s extends Le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),h=a+1,l=c+1,f=t/a,d=e/c,u=[],g=[],v=[],m=[];for(let p=0;p<l;p++){let _=p*d-o;for(let b=0;b<h;b++){let y=b*f-r;g.push(y,-_,0),v.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let b=_+h*p,y=_+h*(p+1),w=_+1+h*(p+1),A=_+1+h*p;u.push(b,y,A),u.push(y,w,A)}this.setIndex(u),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},To=class s extends Le{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],h=[],l=[],f=t,d=(e-t)/i,u=new U,g=new $t;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){let p=r+m/n*o;u.x=f*Math.cos(p),u.y=f*Math.sin(p),c.push(u.x,u.y,u.z),h.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,l.push(g.x,g.y)}f+=d}for(let v=0;v<i;v++){let m=v*(n+1);for(let p=0;p<n;p++){let _=p+m,b=_,y=_+n+1,w=_+n+2,A=_+1;a.push(b,y,A),a.push(y,w,A)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var wn=class s extends Le{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,l=[],f=new U,d=new U,u=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let _=[],b=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){let A=w/e;f.x=-t*Math.cos(i+A*r)*Math.sin(o+b*a),f.y=t*Math.cos(o+b*a),f.z=t*Math.sin(i+A*r)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(A+y,1-b),_.push(h++)}l.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let b=l[p][_+1],y=l[p][_],w=l[p+1][_],A=l[p+1][_+1];(p!==0||o>0)&&u.push(b,y,A),(p!==n-1||c<Math.PI)&&u.push(y,w,A)}this.setIndex(u),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ss=class s extends Le{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],h=[],l=new U,f=new U,d=new U;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){let v=g/i*r,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),l.x=t*Math.cos(v),l.y=t*Math.sin(v),d.subVectors(f,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){let v=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,_=(i+1)*u+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ao=class extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ht=class extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Dr=class extends Ht{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ro=class extends Mi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var Lr=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xa=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ia(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Qp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Bs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qa=class extends Bs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ph:r=t,a=2*e-n;break;case mh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ph:o=t,c=2*n-e;break;case mh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-u)*m+(1.5+u)*v+.5*g,y=u*m-u*v;for(let w=0;w!==a;++w)r[w]=p*o[l+w]+_*o[h+w]+b*o[c+w]+y*o[f+w];return r}},Ya=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=(n-e)/(i-e),f=1-l;for(let d=0;d!==a;++d)r[d]=o[h+d]*f+o[c+d]*l;return r}},Za=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Xn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ia(e,this.TimeBufferType),this.values=Ia(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ia(t.times,Array),values:Ia(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case co:e=this.InterpolantFactoryMethodDiscrete;break;case Fa:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Qp(i))for(let a=0,c=i.length;a!==c;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Da,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],l=t[a+1];if(h!==l&&(a!==1||h!==t[0]))if(i)c=!0;else{let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let v=e[f+g];if(v!==e[d+g]||v!==e[u+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Fa;var rs=class extends Xn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=co;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}};$a.prototype.ValueTypeName="color";var Ka=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}};Ka.prototype.ValueTypeName="number";var Ja=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),h=t*a;for(let l=h+a;h!==l;h+=4)de.slerpFlat(r,0,o,h-a,o,h,c);return r}},Co=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Xn{constructor(t,e,n){super(t,e,n)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=co;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}};ja.prototype.ValueTypeName="vector";var Qa=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,f){return h.push(l,f),this},this.removeHandler=function(l){let f=h.indexOf(l);return f!==-1&&h.splice(f,2),this},this.getHandler=function(l){for(let f=0,d=h.length;f<d;f+=2){let u=h[f],g=h[f+1];if(u.global&&(u.lastIndex=0),u.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},kf=new Qa,tl=class{constructor(t){this.manager=t!==void 0?t:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Po=class extends Ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},fh=new Ot,af=new U,lf=new U,el=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;af.setFromMatrixPosition(t.matrixWorld),e.position.copy(af),lf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lf),e.updateMatrixWorld(),fh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},vh=class extends el{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ns*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Io=class extends Ur{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ks=class extends yo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yh=class extends el{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new yh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Lo=class extends Le{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var nl=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Hs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Bh="\\[\\]\\.:\\/",t0=new RegExp("["+Bh+"]","g"),kh="[^"+Bh+"]",e0="[^"+Bh.replace("\\.","")+"]",n0=/((?:WC+[\/:])*)/.source.replace("WC",kh),i0=/(WCOD+)?/.source.replace("WCOD",e0),s0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),r0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),o0=new RegExp("^"+n0+i0+s0+r0+"$"),a0=["material","materials","bones","map"],_h=class{constructor(t,e,n){let i=n||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t0,"")}static parseTrackName(t){let e=o0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);a0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=_h;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z1=new Float32Array(1);function Hh(s,t,e,n){let i=l0(n);switch(e){case Ih:return s*t;case El:return s*t/i.components*i.byteLength;case wl:return s*t/i.components*i.byteLength;case Lh:return s*t*2/i.components*i.byteLength;case Tl:return s*t*2/i.components*i.byteLength;case Dh:return s*t*3/i.components*i.byteLength;case Fn:return s*t*4/i.components*i.byteLength;case Al:return s*t*4/i.components*i.byteLength;case Oo:case Bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ko:case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cl:case Il:return Math.max(s,16)*Math.max(t,8)/4;case Rl:case Pl:return Math.max(s,8)*Math.max(t,8)/2;case Dl:case Ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case zl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $l:case Kl:case Jl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case jl:case Ql:return Math.ceil(s/4)*Math.ceil(t/4)*8;case tc:case ec:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l0(s){switch(s){case qn:case Ah:return{byteLength:1,components:1};case Fr:case Rh:case un:return{byteLength:2,components:1};case bl:case Sl:return{byteLength:2,components:4};case ls:case Ml:case fi:return{byteLength:4,components:1};case Ch:case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function hd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function m0(s){let t=new WeakMap;function e(a,c){let h=a.array,l=a.usage,f=h.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,h,l),a.onUploadCallback();let u;if(h instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)u=s.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=s.SHORT;else if(h instanceof Uint32Array)u=s.UNSIGNED_INT;else if(h instanceof Int32Array)u=s.INT;else if(h instanceof Int8Array)u=s.BYTE;else if(h instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){let l=c.array,f=c.updateRanges;if(s.bindBuffer(h,a),f.length===0)s.bufferSubData(h,0,l);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],v=f[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let v=f[u];s.bufferSubData(h,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:i,remove:r,update:o}}var g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
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
#endif`,v0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
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
#endif`,S0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E0=`#ifdef USE_BATCHING
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
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,P0=`#ifdef USE_BUMPMAP
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,pm=`struct PhysicalMaterial {
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
}`,mm=`
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wm=`#if defined( USE_POINTS_UV )
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
#endif`,Tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tg=`float getShadowMask() {
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
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`#include <common>
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
}`,bg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sg=`#define DISTANCE
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
}`,Eg=`#define DISTANCE
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
}`,Dg=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Ug=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Fg=`#define NORMAL
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
}`,zg=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,kg=`#define STANDARD
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
}`,Hg=`#define TOON
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
}`,Gg=`#define TOON
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
}`,Vg=`uniform float size;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,qg=`uniform vec3 color;
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
}`,Yg=`uniform float rotation;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:g0,alphahash_pars_fragment:x0,alphamap_fragment:v0,alphamap_pars_fragment:y0,alphatest_fragment:_0,alphatest_pars_fragment:M0,aomap_fragment:b0,aomap_pars_fragment:S0,batching_pars_vertex:E0,batching_vertex:w0,begin_vertex:T0,beginnormal_vertex:A0,bsdfs:R0,iridescence_fragment:C0,bumpmap_pars_fragment:P0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:U0,color_fragment:N0,color_pars_fragment:F0,color_pars_vertex:z0,color_vertex:O0,common:B0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:H0,displacementmap_pars_vertex:G0,displacementmap_vertex:V0,emissivemap_fragment:W0,emissivemap_pars_fragment:X0,colorspace_fragment:q0,colorspace_pars_fragment:Y0,envmap_fragment:Z0,envmap_common_pars_fragment:$0,envmap_pars_fragment:K0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:lm,envmap_vertex:j0,fog_vertex:Q0,fog_pars_vertex:tm,fog_fragment:em,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:om,lights_pars_begin:am,lights_toon_fragment:cm,lights_toon_pars_fragment:hm,lights_phong_fragment:um,lights_phong_pars_fragment:fm,lights_physical_fragment:dm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:xm,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:Mm,map_fragment:bm,map_pars_fragment:Sm,map_particle_fragment:Em,map_particle_pars_fragment:wm,metalnessmap_fragment:Tm,metalnessmap_pars_fragment:Am,morphinstance_vertex:Rm,morphcolor_vertex:Cm,morphnormal_vertex:Pm,morphtarget_pars_vertex:Im,morphtarget_vertex:Dm,normal_fragment_begin:Lm,normal_fragment_maps:Um,normal_pars_fragment:Nm,normal_pars_vertex:Fm,normal_vertex:zm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Hm,iridescence_pars_fragment:Gm,opaque_fragment:Vm,packing:Wm,premultiplied_alpha_fragment:Xm,project_vertex:qm,dithering_fragment:Ym,dithering_pars_fragment:Zm,roughnessmap_fragment:$m,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:jm,shadowmap_vertex:Qm,shadowmask_pars_fragment:tg,skinbase_vertex:eg,skinning_pars_vertex:ng,skinning_vertex:ig,skinnormal_vertex:sg,specularmap_fragment:rg,specularmap_pars_fragment:og,tonemapping_fragment:ag,tonemapping_pars_fragment:lg,transmission_fragment:cg,transmission_pars_fragment:hg,uv_pars_fragment:ug,uv_pars_vertex:fg,uv_vertex:dg,worldpos_vertex:pg,background_vert:mg,background_frag:gg,backgroundCube_vert:xg,backgroundCube_frag:vg,cube_vert:yg,cube_frag:_g,depth_vert:Mg,depth_frag:bg,distanceRGBA_vert:Sg,distanceRGBA_frag:Eg,equirect_vert:wg,equirect_frag:Tg,linedashed_vert:Ag,linedashed_frag:Rg,meshbasic_vert:Cg,meshbasic_frag:Pg,meshlambert_vert:Ig,meshlambert_frag:Dg,meshmatcap_vert:Lg,meshmatcap_frag:Ug,meshnormal_vert:Ng,meshnormal_frag:Fg,meshphong_vert:zg,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:kg,meshtoon_vert:Hg,meshtoon_frag:Gg,points_vert:Vg,points_frag:Wg,shadow_vert:Xg,shadow_frag:qg,sprite_vert:Yg,sprite_frag:Zg},Vt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},wi={basic:{uniforms:Tn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Tn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Tn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Tn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Tn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Tn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Tn([Vt.points,Vt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Tn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Tn([Vt.common,Vt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Tn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Tn([Vt.sprite,Vt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Tn([Vt.common,Vt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Tn([Vt.lights,Vt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};wi.physical={uniforms:Tn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var sc={r:0,b:0,g:0},qs=new Qe,$g=new Ot;function Kg(s,t,e,n,i,r,o){let a=new Lt(0),c=r===!0?0:1,h,l,f=null,d=0,u=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function v(b){let y=!1,w=g(b);w===null?p(a,c):w&&w.isColor&&(p(w,1),y=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,y){let w=g(y);w&&(w.isCubeTexture||w.mapping===Fo)?(l===void 0&&(l=new zt(new Jt(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:Xs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),qs.copy(y.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),l.material.uniforms.envMap.value=w,l.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(qs)),l.material.toneMapped=Ae.getTransfer(w.colorSpace)!==De,(f!==w||d!==w.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,f=w,d=w.version,u=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new zt(new Ue(2,2),new Se({name:"BackgroundMaterial",uniforms:Xs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=Ae.getTransfer(w.colorSpace)!==De,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=w,d=w.version,u=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function p(b,y){b.getRGB(sc,Oh(s)),n.buffers.color.setClear(sc.r,sc.g,sc.b,y,o)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:v,addToRenderList:m,dispose:_}}function Jg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(E,z,G,F,O){let X=!1,$=f(F,G,z);r!==$&&(r=$,h(r.object)),X=u(E,F,G,O),X&&g(E,F,G,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(E,z,G,F),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function h(E){return s.bindVertexArray(E)}function l(E){return s.deleteVertexArray(E)}function f(E,z,G){let F=G.wireframe===!0,O=n[E.id];O===void 0&&(O={},n[E.id]=O);let X=O[z.id];X===void 0&&(X={},O[z.id]=X);let $=X[F];return $===void 0&&($=d(c()),X[F]=$),$}function d(E){let z=[],G=[],F=[];for(let O=0;O<e;O++)z[O]=0,G[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:F,object:E,attributes:{},index:null}}function u(E,z,G,F){let O=r.attributes,X=z.attributes,$=0,T=G.getAttributes();for(let V in T)if(T[V].location>=0){let ht=O[V],bt=X[V];if(bt===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(bt=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(bt=E.instanceColor)),ht===void 0||ht.attribute!==bt||bt&&ht.data!==bt.data)return!0;$++}return r.attributesNum!==$||r.index!==F}function g(E,z,G,F){let O={},X=z.attributes,$=0,T=G.getAttributes();for(let V in T)if(T[V].location>=0){let ht=X[V];ht===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(ht=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(ht=E.instanceColor));let bt={};bt.attribute=ht,ht&&ht.data&&(bt.data=ht.data),O[V]=bt,$++}r.attributes=O,r.attributesNum=$,r.index=F}function v(){let E=r.newAttributes;for(let z=0,G=E.length;z<G;z++)E[z]=0}function m(E){p(E,0)}function p(E,z){let G=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;G[E]=1,F[E]===0&&(s.enableVertexAttribArray(E),F[E]=1),O[E]!==z&&(s.vertexAttribDivisor(E,z),O[E]=z)}function _(){let E=r.newAttributes,z=r.enabledAttributes;for(let G=0,F=z.length;G<F;G++)z[G]!==E[G]&&(s.disableVertexAttribArray(G),z[G]=0)}function b(E,z,G,F,O,X,$){$===!0?s.vertexAttribIPointer(E,z,G,O,X):s.vertexAttribPointer(E,z,G,F,O,X)}function y(E,z,G,F){v();let O=F.attributes,X=G.getAttributes(),$=z.defaultAttributeValues;for(let T in X){let V=X[T];if(V.location>=0){let tt=O[T];if(tt===void 0&&(T==="instanceMatrix"&&E.instanceMatrix&&(tt=E.instanceMatrix),T==="instanceColor"&&E.instanceColor&&(tt=E.instanceColor)),tt!==void 0){let ht=tt.normalized,bt=tt.itemSize,Tt=t.get(tt);if(Tt===void 0)continue;let Nt=Tt.buffer,Gt=Tt.type,Kt=Tt.bytesPerElement,et=Gt===s.INT||Gt===s.UNSIGNED_INT||tt.gpuType===Ml;if(tt.isInterleavedBufferAttribute){let ct=tt.data,Pt=ct.stride,Wt=tt.offset;if(ct.isInstancedInterleavedBuffer){for(let Rt=0;Rt<V.locationSize;Rt++)p(V.location+Rt,ct.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Rt=0;Rt<V.locationSize;Rt++)m(V.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let Rt=0;Rt<V.locationSize;Rt++)b(V.location+Rt,bt/V.locationSize,Gt,ht,Pt*Kt,(Wt+bt/V.locationSize*Rt)*Kt,et)}else{if(tt.isInstancedBufferAttribute){for(let ct=0;ct<V.locationSize;ct++)p(V.location+ct,tt.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ct=0;ct<V.locationSize;ct++)m(V.location+ct);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let ct=0;ct<V.locationSize;ct++)b(V.location+ct,bt/V.locationSize,Gt,ht,bt*Kt,bt/V.locationSize*ct*Kt,et)}}else if($!==void 0){let ht=$[T];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(V.location,ht);break;case 3:s.vertexAttrib3fv(V.location,ht);break;case 4:s.vertexAttrib4fv(V.location,ht);break;default:s.vertexAttrib1fv(V.location,ht)}}}}_()}function w(){R();for(let E in n){let z=n[E];for(let G in z){let F=z[G];for(let O in F)l(F[O].object),delete F[O];delete z[G]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;let z=n[E.id];for(let G in z){let F=z[G];for(let O in F)l(F[O].object),delete F[O];delete z[G]}delete n[E.id]}function P(E){for(let z in n){let G=n[z];if(G[E.id]===void 0)continue;let F=G[E.id];for(let O in F)l(F[O].object),delete F[O];delete G[E.id]}}function R(){S(),o=!0,r!==i&&(r=i,h(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function jg(s,t,e){let n;function i(h){n=h}function r(h,l){s.drawArrays(n,h,l),e.update(l,n,1)}function o(h,l,f){f!==0&&(s.drawArraysInstanced(n,h,l,f),e.update(l,n,f))}function a(h,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,f);let u=0;for(let g=0;g<f;g++)u+=l[g];e.update(u,n,1)}function c(h,l,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<h.length;g++)o(h[g],l[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=l[v]*d[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==Fn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let R=P===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==qn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fi&&!R)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:w,maxSamples:A}}function tx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Qn,a=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=l(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?l(null):h();else{let _=r?0:n,b=_*4,y=p.clippingState||null;c.value=y,y=l(g,d,b,u);for(let w=0;w!==b;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,d,u,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=u+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=u;b!==v;++b,y+=4)o.copy(f[b]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function ex(s){let t=new WeakMap;function e(o,a){return a===vl?o.mapping=Vs:a===yl&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===vl||a===yl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new Ha(c.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Br=4,Hf=[.125,.215,.35,.446,.526,.582],$s=20,Gh=new ks,Gf=new Lt,Vh=null,Wh=0,Xh=0,qh=!1,Zs=(1+Math.sqrt(5))/2,Or=1/Zs,Vf=[new U(-Zs,Or,0),new U(Zs,Or,0),new U(-Or,0,Zs),new U(Or,0,Zs),new U(0,Zs,-Or),new U(0,Zs,Or),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],nx=new U,Hr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=nx}=r;Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vh,Wh,Xh),this._renderer.xr.enabled=qh,t.scissorTest=!1,rc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:un,format:Fn,colorSpace:Us,depthBuffer:!1},i=Wf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ix(r)),this._blurMaterial=sx(r,t,e)}return i}_compileMaterial(t){let e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,Gh)}_sceneToCubeUV(t,e,n,i,r){let c=new cn(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(Gf),f.toneMapping=Hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));let v=new en({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),m=new zt(new Jt,v),p=!1,_=t.background;_?_.isColor&&(v.color.copy(_),t.background=null,p=!0):(v.color.copy(Gf),p=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,h[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[b],r.y,r.z)):y===1?(c.up.set(0,0,h[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[b],r.z)):(c.up.set(0,h[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[b]));let w=this._cubeSize;rc(i,y*w,b>2?w:0,w,w),f.setRenderTarget(i),p&&f.render(m,c),f.render(t,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=d,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Vs||t.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;rc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Gh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vf[(i-r-1)%Vf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,f=new zt(this._lodPlanes[i],h),d=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*$s-1),v=r/g,m=isFinite(r)?1+Math.floor(l*v):$s;m>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$s}`);let p=[],_=0;for(let P=0;P<$s;++P){let R=P/v,S=Math.exp(-R*R/2);p.push(S),P===0?_+=S:P<m&&(_+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let y=this._sizeLods[i],w=3*y*(i>b-Br?i-b+Br:0),A=4*(this._cubeSize-y);rc(e,w,A,3*y,2*y),c.setRenderTarget(e),c.render(f,Gh)}};function ix(s){let t=[],e=[],n=[],i=s,r=s-Br+1+Hf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Br?c=Hf[o-s+Br-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),l=-h,f=1+h,d=[l,l,f,l,f,f,l,l,f,f,l,f],u=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*u),b=new Float32Array(m*g*u),y=new Float32Array(p*g*u);for(let A=0;A<u;A++){let P=A%3*2/3-1,R=A>2?0:-1,S=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];_.set(S,v*g*A),b.set(d,m*g*A);let E=[A,A,A,A,A,A];y.set(E,p*g*A)}let w=new Le;w.setAttribute("position",new Je(_,v)),w.setAttribute("uv",new Je(b,m)),w.setAttribute("faceIndex",new Je(y,p)),t.push(w),i>Br&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wf(s,t,e){let n=new Ze(s,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rc(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function sx(s,t,e){let n=new Float32Array($s),i=new U(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nu(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Xf(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function qf(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function nu(){return`

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
	`}function rx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===vl||c===yl,l=c===Vs||c===Ws;if(h||l){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Hr(s)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return h&&u&&u.height>0||l&&u&&i(u)?(e===null&&(e=new Hr(s)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function i(a){let c=0,h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ox(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ax(s,t,e,n){let i={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let u in d)t.update(d[u],s.ARRAY_BUFFER)}function h(f){let d=[],u=f.index,g=f.attributes.position,v=0;if(u!==null){let _=u.array;v=u.version;for(let b=0,y=_.length;b<y;b+=3){let w=_[b+0],A=_[b+1],P=_[b+2];d.push(w,A,A,P,P,w)}}else if(g!==void 0){let _=g.array;v=g.version;for(let b=0,y=_.length/3-1;b<y;b+=3){let w=b+0,A=b+1,P=b+2;d.push(w,A,A,P,P,w)}}else return;let m=new(zh(d)?vo:xo)(d,1);m.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function l(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:l}}function lx(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function h(d,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,d*o,g),e.update(u,n,g))}function l(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function f(d,u,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,u[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=u[_]*v[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function cx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hx(s,t,e){let n=new WeakMap,i=new ke;function r(o,a,c){let h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=l!==void 0?l.length:0,d=n.get(a);if(d===void 0||d.count!==f){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;u===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let y=a.attributes.position.count*b,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*w*4*f),P=new po(A,y,w,f);P.type=fi,P.needsUpdate=!0;let R=b*4;for(let E=0;E<f;E++){let z=m[E],G=p[E],F=_[E],O=y*w*4*E;for(let X=0;X<z.count;X++){let $=X*R;u===!0&&(i.fromBufferAttribute(z,X),A[O+$+0]=i.x,A[O+$+1]=i.y,A[O+$+2]=i.z,A[O+$+3]=0),g===!0&&(i.fromBufferAttribute(G,X),A[O+$+4]=i.x,A[O+$+5]=i.y,A[O+$+6]=i.z,A[O+$+7]=0),v===!0&&(i.fromBufferAttribute(F,X),A[O+$+8]=i.x,A[O+$+9]=i.y,A[O+$+10]=i.z,A[O+$+11]=F.itemSize===4?i.w:1)}}d={count:f,texture:P,size:new $t(y,w)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let v=0;v<h.length;v++)u+=h[v];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ux(s,t,e,n){let i=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,f=t.get(c,l);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return f}function o(){i=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var ud=new In,Yf=new Os(1,1),fd=new po,dd=new Ba,pd=new _o,Zf=[],$f=[],Kf=new Float32Array(16),Jf=new Float32Array(9),jf=new Float32Array(4);function Gr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Zf[i];if(r===void 0&&(r=new Float32Array(i),Zf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function dn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function lc(s,t){let e=$f[t];e===void 0&&(e=new Int32Array(t),$f[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function fx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function dx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;s.uniform2fv(this.addr,t),pn(e,t)}}function px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;s.uniform3fv(this.addr,t),pn(e,t)}}function mx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;s.uniform4fv(this.addr,t),pn(e,t)}}function gx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;jf.set(n),s.uniformMatrix2fv(this.addr,!1,jf),pn(e,n)}}function xx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;Jf.set(n),s.uniformMatrix3fv(this.addr,!1,Jf),pn(e,n)}}function vx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;Kf.set(n),s.uniformMatrix4fv(this.addr,!1,Kf),pn(e,n)}}function yx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;s.uniform2iv(this.addr,t),pn(e,t)}}function Mx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;s.uniform3iv(this.addr,t),pn(e,t)}}function bx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;s.uniform4iv(this.addr,t),pn(e,t)}}function Sx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;s.uniform2uiv(this.addr,t),pn(e,t)}}function wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;s.uniform3uiv(this.addr,t),pn(e,t)}}function Tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;s.uniform4uiv(this.addr,t),pn(e,t)}}function Ax(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Yf.compareFunction=Uh,r=Yf):r=ud,e.setTexture2D(t||r,i)}function Rx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dd,i)}function Cx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pd,i)}function Px(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fd,i)}function Ix(s){switch(s){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return vx;case 5124:case 35670:return yx;case 35667:case 35671:return _x;case 35668:case 35672:return Mx;case 35669:case 35673:return bx;case 5125:return Sx;case 36294:return Ex;case 36295:return wx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}function Dx(s,t){s.uniform1fv(this.addr,t)}function Lx(s,t){let e=Gr(t,this.size,2);s.uniform2fv(this.addr,e)}function Ux(s,t){let e=Gr(t,this.size,3);s.uniform3fv(this.addr,e)}function Nx(s,t){let e=Gr(t,this.size,4);s.uniform4fv(this.addr,e)}function Fx(s,t){let e=Gr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function zx(s,t){let e=Gr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ox(s,t){let e=Gr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Bx(s,t){s.uniform1iv(this.addr,t)}function kx(s,t){s.uniform2iv(this.addr,t)}function Hx(s,t){s.uniform3iv(this.addr,t)}function Gx(s,t){s.uniform4iv(this.addr,t)}function Vx(s,t){s.uniform1uiv(this.addr,t)}function Wx(s,t){s.uniform2uiv(this.addr,t)}function Xx(s,t){s.uniform3uiv(this.addr,t)}function qx(s,t){s.uniform4uiv(this.addr,t)}function Yx(s,t,e){let n=this.cache,i=t.length,r=lc(e,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ud,r[o])}function Zx(s,t,e){let n=this.cache,i=t.length,r=lc(e,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||dd,r[o])}function $x(s,t,e){let n=this.cache,i=t.length,r=lc(e,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||pd,r[o])}function Kx(s,t,e){let n=this.cache,i=t.length,r=lc(e,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||fd,r[o])}function Jx(s){switch(s){case 5126:return Dx;case 35664:return Lx;case 35665:return Ux;case 35666:return Nx;case 35674:return Fx;case 35675:return zx;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return kx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Kx}}var Zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ix(e.type)}},$h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jx(e.type)}},Kh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Yh=/(\w+)(\])?(\[|\.)?/g;function Qf(s,t){s.seq.push(t),s.map[t.id]=t}function jx(s,t,e){let n=s.name,i=n.length;for(Yh.lastIndex=0;;){let r=Yh.exec(n),o=Yh.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===i){Qf(e,h===void 0?new Zh(a,s,t):new $h(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Kh(a),Qf(e,f)),e=f}}}var kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);jx(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function td(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Qx=37297,tv=0;function ev(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ed=new he;function nv(s){Ae._getMatrix(ed,Ae.workingColorSpace,s);let t=`mat3( ${ed.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(s)){case ho:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function nd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ev(s.getShaderSource(t),a)}else return r}function iv(s,t){let e=nv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sv(s,t){let e;switch(t){case fl:e="Linear";break;case dl:e="Reinhard";break;case pl:e="Cineon";break;case Nr:e="ACESFilmic";break;case gl:e="AgX";break;case xl:e="Neutral";break;case ml:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oc=new U;function rv(){Ae.getLuminanceCoefficients(oc);let s=oc.x.toFixed(4),t=oc.y.toFixed(4),e=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function av(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Go(s){return s!==""}function id(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(s){return s.replace(cv,uv)}var hv=new Map;function uv(s,t){let e=oe[t];if(e===void 0){let n=hv.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jh(e)}var fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(s){return s.replace(fv,dv)}function dv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function od(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===il?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function mv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function xv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wh:t="ENVMAP_BLENDING_MULTIPLY";break;case wf:t="ENVMAP_BLENDING_MIX";break;case Tf:t="ENVMAP_BLENDING_ADD";break}return t}function vv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yv(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=pv(e),h=mv(e),l=gv(e),f=xv(e),d=vv(e),u=ov(e),g=av(r),v=i.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Go).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Go).join(`
`),p.length>0&&(p+=`
`)):(m=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),p=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?oe.tonemapping_pars_fragment:"",e.toneMapping!==Hi?sv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,iv("linearToOutputTexel",e.outputColorSpace),rv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Go).join(`
`)),o=Jh(o),o=id(o,e),o=sd(o,e),a=Jh(a),a=id(a,e),a=sd(a,e),o=rd(o),a=rd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=_+m+o,y=_+p+a,w=td(i,i.VERTEX_SHADER,b),A=td(i,i.FRAGMENT_SHADER,y);i.attachShader(v,w),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(z){if(s.debug.checkShaderErrors){let G=i.getProgramInfoLog(v)||"",F=i.getShaderInfoLog(w)||"",O=i.getShaderInfoLog(A)||"",X=G.trim(),$=F.trim(),T=O.trim(),V=!0,tt=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,w,A);else{let ht=nd(i,w,"vertex"),bt=nd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+X+`
`+ht+`
`+bt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):($===""||T==="")&&(tt=!1);tt&&(z.diagnostics={runnable:V,programLog:X,vertexShader:{log:$,prefix:m},fragmentShader:{log:T,prefix:p}})}i.deleteShader(w),i.deleteShader(A),R=new kr(i,v),S=lv(i,v)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(v,Qx)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}var _v=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qh(t),e.set(t,n)),n}},Qh=class{constructor(t){this.id=_v++,this.code=t,this.usedTimes=0}};function Mv(s,t,e,n,i,r,o){let a=new go,c=new jh,h=new Set,l=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return h.add(S),S===0?"uv":`uv${S}`}function m(S,E,z,G,F){let O=G.fog,X=F.geometry,$=S.isMeshStandardMaterial?G.environment:null,T=(S.isMeshStandardMaterial?e:t).get(S.envMap||$),V=T&&T.mapping===Fo?T.image.height:null,tt=g[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bt=ht!==void 0?ht.length:0,Tt=0;X.morphAttributes.position!==void 0&&(Tt=1),X.morphAttributes.normal!==void 0&&(Tt=2),X.morphAttributes.color!==void 0&&(Tt=3);let Nt,Gt,Kt,et;if(tt){let fe=wi[tt];Nt=fe.vertexShader,Gt=fe.fragmentShader}else Nt=S.vertexShader,Gt=S.fragmentShader,c.update(S),Kt=c.getVertexShaderID(S),et=c.getFragmentShaderID(S);let ct=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Wt=F.isInstancedMesh===!0,Rt=F.isBatchedMesh===!0,nt=!!S.map,Ft=!!S.matcap,L=!!T,Dt=!!S.aoMap,It=!!S.lightMap,St=!!S.bumpMap,Y=!!S.normalMap,q=!!S.displacementMap,W=!!S.emissiveMap,rt=!!S.metalnessMap,wt=!!S.roughnessMap,Ut=S.anisotropy>0,I=S.clearcoat>0,x=S.dispersion>0,D=S.iridescence>0,B=S.sheen>0,H=S.transmission>0,k=Ut&&!!S.anisotropyMap,J=I&&!!S.clearcoatMap,Q=I&&!!S.clearcoatNormalMap,st=I&&!!S.clearcoatRoughnessMap,xt=D&&!!S.iridescenceMap,K=D&&!!S.iridescenceThicknessMap,at=B&&!!S.sheenColorMap,Et=B&&!!S.sheenRoughnessMap,lt=!!S.specularMap,yt=!!S.specularColorMap,Xt=!!S.specularIntensityMap,Z=H&&!!S.transmissionMap,vt=H&&!!S.thicknessMap,_t=!!S.gradientMap,Mt=!!S.alphaMap,gt=S.alphaTest>0,ut=!!S.alphaHash,Zt=!!S.extensions,te=Hi;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(te=s.toneMapping);let ee={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:Nt,fragmentShader:Gt,defines:S.defines,customVertexShaderID:Kt,customFragmentShaderID:et,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&F._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&F.instanceColor!==null,instancingMorph:Wt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Us,alphaToCoverage:!!S.alphaToCoverage,map:nt,matcap:Ft,envMap:L,envMapMode:L&&T.mapping,envMapCubeUVHeight:V,aoMap:Dt,lightMap:It,bumpMap:St,normalMap:Y,displacementMap:d&&q,emissiveMap:W,normalMapObjectSpace:Y&&S.normalMapType===Cf,normalMapTangentSpace:Y&&S.normalMapType===ic,metalnessMap:rt,roughnessMap:wt,anisotropy:Ut,anisotropyMap:k,clearcoat:I,clearcoatMap:J,clearcoatNormalMap:Q,clearcoatRoughnessMap:st,dispersion:x,iridescence:D,iridescenceMap:xt,iridescenceThicknessMap:K,sheen:B,sheenColorMap:at,sheenRoughnessMap:Et,specularMap:lt,specularColorMap:yt,specularIntensityMap:Xt,transmission:H,transmissionMap:Z,thicknessMap:vt,gradientMap:_t,opaque:S.transparent===!1&&S.blending===Bi&&S.alphaToCoverage===!1,alphaMap:Mt,alphaTest:gt,alphaHash:ut,combine:S.combine,mapUv:nt&&v(S.map.channel),aoMapUv:Dt&&v(S.aoMap.channel),lightMapUv:It&&v(S.lightMap.channel),bumpMapUv:St&&v(S.bumpMap.channel),normalMapUv:Y&&v(S.normalMap.channel),displacementMapUv:q&&v(S.displacementMap.channel),emissiveMapUv:W&&v(S.emissiveMap.channel),metalnessMapUv:rt&&v(S.metalnessMap.channel),roughnessMapUv:wt&&v(S.roughnessMap.channel),anisotropyMapUv:k&&v(S.anisotropyMap.channel),clearcoatMapUv:J&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:at&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(S.sheenRoughnessMap.channel),specularMapUv:lt&&v(S.specularMap.channel),specularColorMapUv:yt&&v(S.specularColorMap.channel),specularIntensityMapUv:Xt&&v(S.specularIntensityMap.channel),transmissionMapUv:Z&&v(S.transmissionMap.channel),thicknessMapUv:vt&&v(S.thicknessMap.channel),alphaMapUv:Mt&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Y||Ut),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(nt||Mt),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Tt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:te,decodeVideoTexture:nt&&S.map.isVideoTexture===!0&&Ae.getTransfer(S.map.colorSpace)===De,decodeVideoTextureEmissive:W&&S.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(S.emissiveMap.colorSpace)===De,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hn,flipSided:S.side===bn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Zt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&S.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ee.vertexUv1s=h.has(1),ee.vertexUv2s=h.has(2),ee.vertexUv3s=h.has(3),h.clear(),ee}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let z in S.defines)E.push(z),E.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(_(E,S),b(E,S),E.push(s.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function _(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function b(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let E=g[S.type],z;if(E){let G=wi[E];z=fn.clone(G.uniforms)}else z=S.uniforms;return z}function w(S,E){let z;for(let G=0,F=l.length;G<F;G++){let O=l[G];if(O.cacheKey===E){z=O,++z.usedTimes;break}}return z===void 0&&(z=new yv(s,E,S,r),l.push(z)),z}function A(S){if(--S.usedTimes===0){let E=l.indexOf(S);l[E]=l[l.length-1],l.pop(),S.destroy()}}function P(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:P,programs:l,dispose:R}}function bv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Sv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ad(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ld(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,u,g,v,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),t++,p}function a(f,d,u,g,v,m){let p=o(f,d,u,g,v,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(f,d,u,g,v,m){let p=o(f,d,u,g,v,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function h(f,d){e.length>1&&e.sort(f||Sv),n.length>1&&n.sort(d||ad),i.length>1&&i.sort(d||ad)}function l(){for(let f=t,d=s.length;f<d;f++){let u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:l,sort:h}}function Ev(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ld,s.set(n,[o])):i>=r.length?(o=new ld,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function wv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Lt};break;case"SpotLight":e={position:new U,direction:new U,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Tv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Av=0;function Rv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Cv(s){let t=new wv,e=Tv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);let i=new U,r=new Ot,o=new Ot;function a(h){let l=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,_=0,b=0,y=0,w=0,A=0,P=0;h.sort(Rv);for(let S=0,E=h.length;S<E;S++){let z=h[S],G=z.color,F=z.intensity,O=z.distance,X=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)l+=G.r*F,f+=G.g*F,d+=G.b*F;else if(z.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(z.sh.coefficients[$],F);P++}else if(z.isDirectionalLight){let $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let T=z.shadow,V=e.get(z);V.shadowIntensity=T.intensity,V.shadowBias=T.bias,V.shadowNormalBias=T.normalBias,V.shadowRadius=T.radius,V.shadowMapSize=T.mapSize,n.directionalShadow[u]=V,n.directionalShadowMap[u]=X,n.directionalShadowMatrix[u]=z.shadow.matrix,_++}n.directional[u]=$,u++}else if(z.isSpotLight){let $=t.get(z);$.position.setFromMatrixPosition(z.matrixWorld),$.color.copy(G).multiplyScalar(F),$.distance=O,$.coneCos=Math.cos(z.angle),$.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),$.decay=z.decay,n.spot[v]=$;let T=z.shadow;if(z.map&&(n.spotLightMap[w]=z.map,w++,T.updateMatrices(z),z.castShadow&&A++),n.spotLightMatrix[v]=T.matrix,z.castShadow){let V=e.get(z);V.shadowIntensity=T.intensity,V.shadowBias=T.bias,V.shadowNormalBias=T.normalBias,V.shadowRadius=T.radius,V.shadowMapSize=T.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=X,y++}v++}else if(z.isRectAreaLight){let $=t.get(z);$.color.copy(G).multiplyScalar(F),$.halfWidth.set(z.width*.5,0,0),$.halfHeight.set(0,z.height*.5,0),n.rectArea[m]=$,m++}else if(z.isPointLight){let $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity),$.distance=z.distance,$.decay=z.decay,z.castShadow){let T=z.shadow,V=e.get(z);V.shadowIntensity=T.intensity,V.shadowBias=T.bias,V.shadowNormalBias=T.normalBias,V.shadowRadius=T.radius,V.shadowMapSize=T.mapSize,V.shadowCameraNear=T.camera.near,V.shadowCameraFar=T.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=z.shadow.matrix,b++}n.point[g]=$,g++}else if(z.isHemisphereLight){let $=t.get(z);$.skyColor.copy(z.color).multiplyScalar(F),$.groundColor.copy(z.groundColor).multiplyScalar(F),n.hemi[p]=$,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Vt.LTC_FLOAT_1,n.rectAreaLTC2=Vt.LTC_FLOAT_2):(n.rectAreaLTC1=Vt.LTC_HALF_1,n.rectAreaLTC2=Vt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==u||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==b||R.numSpotShadows!==y||R.numSpotMaps!==w||R.numLightProbes!==P)&&(n.directional.length=u,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,R.directionalLength=u,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=b,R.numSpotShadows=y,R.numSpotMaps=w,R.numLightProbes=P,n.version=Av++)}function c(h,l){let f=0,d=0,u=0,g=0,v=0,m=l.matrixWorldInverse;for(let p=0,_=h.length;p<_;p++){let b=h[p];if(b.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(b.isSpotLight){let y=n.spot[u];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function cd(s){let t=new Cv(s),e=[],n=[];function i(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Pv(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new cd(s),t.set(i,[a])):r>=o.length?(a=new cd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
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
}`;function Lv(s,t,e){let n=new is,i=new $t,r=new $t,o=new ke,a=new Lr({depthPacking:nc}),c=new Xa,h={},l=e.maxTextureSize,f={[Oi]:bn,[bn]:Oi,[hn]:hn},d=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Iv,fragmentShader:Dv}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Le;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new zt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let p=this.type;this.render=function(A,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=s.getRenderTarget(),E=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),G=s.state;G.setBlending(sn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let F=p!==Ei&&this.type===Ei,O=p===Ei&&this.type!==Ei;for(let X=0,$=A.length;X<$;X++){let T=A[X],V=T.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",T,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let tt=V.getFrameExtents();if(i.multiply(tt),r.copy(V.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/tt.x),i.x=r.x*tt.x,V.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/tt.y),i.y=r.y*tt.y,V.mapSize.y=r.y)),V.map===null||F===!0||O===!0){let bt=this.type!==Ei?{minFilter:Mn,magFilter:Mn}:{};V.map!==null&&V.map.dispose(),V.map=new Ze(i.x,i.y,bt),V.map.texture.name=T.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let ht=V.getViewportCount();for(let bt=0;bt<ht;bt++){let Tt=V.getViewport(bt);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),G.viewport(o),V.updateMatrices(T,bt),n=V.getFrustum(),y(P,R,V.camera,T,this.type)}V.isPointLightShadow!==!0&&this.type===Ei&&_(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,E,z)};function _(A,P){let R=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ze(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(P,null,R,d,v,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(P,null,R,u,v,null)}function b(A,P,R,S){let E=null,z=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)E=z;else if(E=R.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let G=E.uuid,F=P.uuid,O=h[G];O===void 0&&(O={},h[G]=O);let X=O[F];X===void 0&&(X=E.clone(),O[F]=X,P.addEventListener("dispose",w)),E=X}if(E.visible=P.visible,E.wireframe=P.wireframe,S===Ei?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=s.properties.get(E);G.light=R}return E}function y(A,P,R,S,E){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Ei)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let F=t.update(A),O=A.material;if(Array.isArray(O)){let X=F.groups;for(let $=0,T=X.length;$<T;$++){let V=X[$],tt=O[V.materialIndex];if(tt&&tt.visible){let ht=b(A,tt,S,E);A.onBeforeShadow(s,A,P,R,F,ht,V),s.renderBufferDirect(R,null,F,ht,A,V),A.onAfterShadow(s,A,P,R,F,ht,V)}}}else if(O.visible){let X=b(A,O,S,E);A.onBeforeShadow(s,A,P,R,F,X,null),s.renderBufferDirect(R,null,F,X,A,null),A.onAfterShadow(s,A,P,R,F,X,null)}}let G=A.children;for(let F=0,O=G.length;F<O;F++)y(G[F],P,R,S,E)}function w(A){A.target.removeEventListener("dispose",w);for(let R in h){let S=h[R],E=A.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var Uv={[rl]:ol,[al]:hl,[ll]:ul,[Ls]:cl,[ol]:rl,[hl]:al,[ul]:ll,[cl]:Ls};function Nv(s,t){function e(){let Z=!1,vt=new ke,_t=null,Mt=new ke(0,0,0,0);return{setMask:function(gt){_t!==gt&&!Z&&(s.colorMask(gt,gt,gt,gt),_t=gt)},setLocked:function(gt){Z=gt},setClear:function(gt,ut,Zt,te,ee){ee===!0&&(gt*=te,ut*=te,Zt*=te),vt.set(gt,ut,Zt,te),Mt.equals(vt)===!1&&(s.clearColor(gt,ut,Zt,te),Mt.copy(vt))},reset:function(){Z=!1,_t=null,Mt.set(-1,0,0,0)}}}function n(){let Z=!1,vt=!1,_t=null,Mt=null,gt=null;return{setReversed:function(ut){if(vt!==ut){let Zt=t.get("EXT_clip_control");ut?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),vt=ut;let te=gt;gt=null,this.setClear(te)}},getReversed:function(){return vt},setTest:function(ut){ut?ct(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(ut){_t!==ut&&!Z&&(s.depthMask(ut),_t=ut)},setFunc:function(ut){if(vt&&(ut=Uv[ut]),Mt!==ut){switch(ut){case rl:s.depthFunc(s.NEVER);break;case ol:s.depthFunc(s.ALWAYS);break;case al:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case ll:s.depthFunc(s.EQUAL);break;case cl:s.depthFunc(s.GEQUAL);break;case hl:s.depthFunc(s.GREATER);break;case ul:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Mt=ut}},setLocked:function(ut){Z=ut},setClear:function(ut){gt!==ut&&(vt&&(ut=1-ut),s.clearDepth(ut),gt=ut)},reset:function(){Z=!1,_t=null,Mt=null,gt=null,vt=!1}}}function i(){let Z=!1,vt=null,_t=null,Mt=null,gt=null,ut=null,Zt=null,te=null,ee=null;return{setTest:function(fe){Z||(fe?ct(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(fe){vt!==fe&&!Z&&(s.stencilMask(fe),vt=fe)},setFunc:function(fe,ln,gn){(_t!==fe||Mt!==ln||gt!==gn)&&(s.stencilFunc(fe,ln,gn),_t=fe,Mt=ln,gt=gn)},setOp:function(fe,ln,gn){(ut!==fe||Zt!==ln||te!==gn)&&(s.stencilOp(fe,ln,gn),ut=fe,Zt=ln,te=gn)},setLocked:function(fe){Z=fe},setClear:function(fe){ee!==fe&&(s.clearStencil(fe),ee=fe)},reset:function(){Z=!1,vt=null,_t=null,Mt=null,gt=null,ut=null,Zt=null,te=null,ee=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,h=new WeakMap,l={},f={},d=new WeakMap,u=[],g=null,v=!1,m=null,p=null,_=null,b=null,y=null,w=null,A=null,P=new Lt(0,0,0),R=0,S=!1,E=null,z=null,G=null,F=null,O=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,T=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=T>=1):V.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=T>=2);let tt=null,ht={},bt=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),Nt=new ke().fromArray(bt),Gt=new ke().fromArray(Tt);function Kt(Z,vt,_t,Mt){let gt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(Z,ut),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<_t;Zt++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(vt,0,s.RGBA,1,1,Mt,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(vt+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return ut}let et={};et[s.TEXTURE_2D]=Kt(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=Kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=Kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=Kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(s.DEPTH_TEST),o.setFunc(Ls),St(!1),Y(Mh),ct(s.CULL_FACE),Dt(sn);function ct(Z){l[Z]!==!0&&(s.enable(Z),l[Z]=!0)}function Pt(Z){l[Z]!==!1&&(s.disable(Z),l[Z]=!1)}function Wt(Z,vt){return f[Z]!==vt?(s.bindFramebuffer(Z,vt),f[Z]=vt,Z===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=vt),Z===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=vt),!0):!1}function Rt(Z,vt){let _t=u,Mt=!1;if(Z){_t=d.get(vt),_t===void 0&&(_t=[],d.set(vt,_t));let gt=Z.textures;if(_t.length!==gt.length||_t[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Zt=gt.length;ut<Zt;ut++)_t[ut]=s.COLOR_ATTACHMENT0+ut;_t.length=gt.length,Mt=!0}}else _t[0]!==s.BACK&&(_t[0]=s.BACK,Mt=!0);Mt&&s.drawBuffers(_t)}function nt(Z){return g!==Z?(s.useProgram(Z),g=Z,!0):!1}let Ft={[Wn]:s.FUNC_ADD,[uf]:s.FUNC_SUBTRACT,[ff]:s.FUNC_REVERSE_SUBTRACT};Ft[df]=s.MIN,Ft[pf]=s.MAX;let L={[Gs]:s.ZERO,[mf]:s.ONE,[gf]:s.SRC_COLOR,[La]:s.SRC_ALPHA,[_f]:s.SRC_ALPHA_SATURATE,[No]:s.DST_COLOR,[Uo]:s.DST_ALPHA,[xf]:s.ONE_MINUS_SRC_COLOR,[Ua]:s.ONE_MINUS_SRC_ALPHA,[yf]:s.ONE_MINUS_DST_COLOR,[vf]:s.ONE_MINUS_DST_ALPHA,[Mf]:s.CONSTANT_COLOR,[bf]:s.ONE_MINUS_CONSTANT_COLOR,[Sf]:s.CONSTANT_ALPHA,[Ef]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(Z,vt,_t,Mt,gt,ut,Zt,te,ee,fe){if(Z===sn){v===!0&&(Pt(s.BLEND),v=!1);return}if(v===!1&&(ct(s.BLEND),v=!0),Z!==sl){if(Z!==m||fe!==S){if((p!==Wn||y!==Wn)&&(s.blendEquation(s.FUNC_ADD),p=Wn,y=Wn),fe)switch(Z){case Bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFunc(s.ONE,s.ONE);break;case Sh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}_=null,b=null,w=null,A=null,P.set(0,0,0),R=0,m=Z,S=fe}return}gt=gt||vt,ut=ut||_t,Zt=Zt||Mt,(vt!==p||gt!==y)&&(s.blendEquationSeparate(Ft[vt],Ft[gt]),p=vt,y=gt),(_t!==_||Mt!==b||ut!==w||Zt!==A)&&(s.blendFuncSeparate(L[_t],L[Mt],L[ut],L[Zt]),_=_t,b=Mt,w=ut,A=Zt),(te.equals(P)===!1||ee!==R)&&(s.blendColor(te.r,te.g,te.b,ee),P.copy(te),R=ee),m=Z,S=!1}function It(Z,vt){Z.side===hn?Pt(s.CULL_FACE):ct(s.CULL_FACE);let _t=Z.side===bn;vt&&(_t=!_t),St(_t),Z.blending===Bi&&Z.transparent===!1?Dt(sn):Dt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let Mt=Z.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),W(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function St(Z){E!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),E=Z)}function Y(Z){Z!==cf?(ct(s.CULL_FACE),Z!==z&&(Z===Mh?s.cullFace(s.BACK):Z===hf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),z=Z}function q(Z){Z!==G&&($&&s.lineWidth(Z),G=Z)}function W(Z,vt,_t){Z?(ct(s.POLYGON_OFFSET_FILL),(F!==vt||O!==_t)&&(s.polygonOffset(vt,_t),F=vt,O=_t)):Pt(s.POLYGON_OFFSET_FILL)}function rt(Z){Z?ct(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function wt(Z){Z===void 0&&(Z=s.TEXTURE0+X-1),tt!==Z&&(s.activeTexture(Z),tt=Z)}function Ut(Z,vt,_t){_t===void 0&&(tt===null?_t=s.TEXTURE0+X-1:_t=tt);let Mt=ht[_t];Mt===void 0&&(Mt={type:void 0,texture:void 0},ht[_t]=Mt),(Mt.type!==Z||Mt.texture!==vt)&&(tt!==_t&&(s.activeTexture(_t),tt=_t),s.bindTexture(Z,vt||et[Z]),Mt.type=Z,Mt.texture=vt)}function I(){let Z=ht[tt];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function B(){try{s.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function H(){try{s.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function k(){try{s.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function J(){try{s.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Q(){try{s.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function st(){try{s.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function xt(){try{s.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function K(){try{s.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function at(Z){Nt.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),Nt.copy(Z))}function Et(Z){Gt.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),Gt.copy(Z))}function lt(Z,vt){let _t=h.get(vt);_t===void 0&&(_t=new WeakMap,h.set(vt,_t));let Mt=_t.get(Z);Mt===void 0&&(Mt=s.getUniformBlockIndex(vt,Z.name),_t.set(Z,Mt))}function yt(Z,vt){let Mt=h.get(vt).get(Z);c.get(vt)!==Mt&&(s.uniformBlockBinding(vt,Mt,Z.__bindingPointIndex),c.set(vt,Mt))}function Xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},tt=null,ht={},f={},d=new WeakMap,u=[],g=null,v=!1,m=null,p=null,_=null,b=null,y=null,w=null,A=null,P=new Lt(0,0,0),R=0,S=!1,E=null,z=null,G=null,F=null,O=null,Nt.set(0,0,s.canvas.width,s.canvas.height),Gt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Pt,bindFramebuffer:Wt,drawBuffers:Rt,useProgram:nt,setBlending:Dt,setMaterial:It,setFlipSided:St,setCullFace:Y,setLineWidth:q,setPolygonOffset:W,setScissorTest:rt,activeTexture:wt,bindTexture:Ut,unbindTexture:I,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:xt,texImage3D:K,updateUBOMapping:lt,uniformBlockBinding:yt,texStorage2D:Q,texStorage3D:st,texSubImage2D:B,texSubImage3D:H,compressedTexSubImage2D:k,compressedTexSubImage3D:J,scissor:at,viewport:Et,reset:Xt}}function Fv(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $t,l=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,x){return u?new OffscreenCanvas(I,x):fo("canvas")}function v(I,x,D){let B=1,H=Ut(I);if((H.width>D||H.height>D)&&(B=D/Math.max(H.width,H.height)),B<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let k=Math.floor(B*H.width),J=Math.floor(B*H.height);f===void 0&&(f=g(k,J));let Q=x?g(k,J):f;return Q.width=k,Q.height=J,Q.getContext("2d").drawImage(I,0,0,k,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+k+"x"+J+")."),Q}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(I,x,D,B,H=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let k=x;if(x===s.RED&&(D===s.FLOAT&&(k=s.R32F),D===s.HALF_FLOAT&&(k=s.R16F),D===s.UNSIGNED_BYTE&&(k=s.R8)),x===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(k=s.R8UI),D===s.UNSIGNED_SHORT&&(k=s.R16UI),D===s.UNSIGNED_INT&&(k=s.R32UI),D===s.BYTE&&(k=s.R8I),D===s.SHORT&&(k=s.R16I),D===s.INT&&(k=s.R32I)),x===s.RG&&(D===s.FLOAT&&(k=s.RG32F),D===s.HALF_FLOAT&&(k=s.RG16F),D===s.UNSIGNED_BYTE&&(k=s.RG8)),x===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(k=s.RG8UI),D===s.UNSIGNED_SHORT&&(k=s.RG16UI),D===s.UNSIGNED_INT&&(k=s.RG32UI),D===s.BYTE&&(k=s.RG8I),D===s.SHORT&&(k=s.RG16I),D===s.INT&&(k=s.RG32I)),x===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(k=s.RGB8UI),D===s.UNSIGNED_SHORT&&(k=s.RGB16UI),D===s.UNSIGNED_INT&&(k=s.RGB32UI),D===s.BYTE&&(k=s.RGB8I),D===s.SHORT&&(k=s.RGB16I),D===s.INT&&(k=s.RGB32I)),x===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(k=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(k=s.RGBA16UI),D===s.UNSIGNED_INT&&(k=s.RGBA32UI),D===s.BYTE&&(k=s.RGBA8I),D===s.SHORT&&(k=s.RGBA16I),D===s.INT&&(k=s.RGBA32I)),x===s.RGB&&(D===s.UNSIGNED_INT_5_9_9_9_REV&&(k=s.RGB9_E5),D===s.UNSIGNED_INT_10F_11F_11F_REV&&(k=s.R11F_G11F_B10F)),x===s.RGBA){let J=H?ho:Ae.getTransfer(B);D===s.FLOAT&&(k=s.RGBA32F),D===s.HALF_FLOAT&&(k=s.RGBA16F),D===s.UNSIGNED_BYTE&&(k=J===De?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(k=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(k=s.RGB5_A1)}return(k===s.R16F||k===s.R32F||k===s.RG16F||k===s.RG32F||k===s.RGBA16F||k===s.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function y(I,x){let D;return I?x===null||x===ls||x===cs?D=s.DEPTH24_STENCIL8:x===fi?D=s.DEPTH32F_STENCIL8:x===Fr&&(D=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ls||x===cs?D=s.DEPTH_COMPONENT24:x===fi?D=s.DEPTH_COMPONENT32F:x===Fr&&(D=s.DEPTH_COMPONENT16),D}function w(I,x){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Mn&&I.minFilter!==hi?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function A(I){let x=I.target;x.removeEventListener("dispose",A),R(x),x.isVideoTexture&&l.delete(x)}function P(I){let x=I.target;x.removeEventListener("dispose",P),E(x)}function R(I){let x=n.get(I);if(x.__webglInit===void 0)return;let D=I.source,B=d.get(D);if(B){let H=B[x.__cacheKey];H.usedTimes--,H.usedTimes===0&&S(I),Object.keys(B).length===0&&d.delete(D)}n.remove(I)}function S(I){let x=n.get(I);s.deleteTexture(x.__webglTexture);let D=I.source,B=d.get(D);delete B[x.__cacheKey],o.memory.textures--}function E(I){let x=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(x.__webglFramebuffer[B]))for(let H=0;H<x.__webglFramebuffer[B].length;H++)s.deleteFramebuffer(x.__webglFramebuffer[B][H]);else s.deleteFramebuffer(x.__webglFramebuffer[B]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[B])}else{if(Array.isArray(x.__webglFramebuffer))for(let B=0;B<x.__webglFramebuffer.length;B++)s.deleteFramebuffer(x.__webglFramebuffer[B]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let B=0;B<x.__webglColorRenderbuffer.length;B++)x.__webglColorRenderbuffer[B]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[B]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let D=I.textures;for(let B=0,H=D.length;B<H;B++){let k=n.get(D[B]);k.__webglTexture&&(s.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(D[B])}n.remove(I)}let z=0;function G(){z=0}function F(){let I=z;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),z+=1,I}function O(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function X(I,x){let D=n.get(I);if(I.isVideoTexture&&rt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&D.__version!==I.version){let B=I.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(D,I,x);return}}else I.isExternalTexture&&(D.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+x)}function $(I,x){let D=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&D.__version!==I.version){et(D,I,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+x)}function T(I,x){let D=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&D.__version!==I.version){et(D,I,x);return}e.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+x)}function V(I,x){let D=n.get(I);if(I.version>0&&D.__version!==I.version){ct(D,I,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+x)}let tt={[ti]:s.REPEAT,[ns]:s.CLAMP_TO_EDGE,[Na]:s.MIRRORED_REPEAT},ht={[Mn]:s.NEAREST,[Af]:s.NEAREST_MIPMAP_NEAREST,[zo]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[_l]:s.LINEAR_MIPMAP_NEAREST,[as]:s.LINEAR_MIPMAP_LINEAR},bt={[Pf]:s.NEVER,[Ff]:s.ALWAYS,[If]:s.LESS,[Uh]:s.LEQUAL,[Df]:s.EQUAL,[Nf]:s.GEQUAL,[Lf]:s.GREATER,[Uf]:s.NOTEQUAL};function Tt(I,x){if(x.type===fi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hi||x.magFilter===_l||x.magFilter===zo||x.magFilter===as||x.minFilter===hi||x.minFilter===_l||x.minFilter===zo||x.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,tt[x.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,tt[x.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,tt[x.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ht[x.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,bt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Mn||x.minFilter!==zo&&x.minFilter!==as||x.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Nt(I,x){let D=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",A));let B=x.source,H=d.get(B);H===void 0&&(H={},d.set(B,H));let k=O(x);if(k!==I.__cacheKey){H[k]===void 0&&(H[k]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,D=!0),H[k].usedTimes++;let J=H[I.__cacheKey];J!==void 0&&(H[I.__cacheKey].usedTimes--,J.usedTimes===0&&S(x)),I.__cacheKey=k,I.__webglTexture=H[k].texture}return D}function Gt(I,x,D){return Math.floor(Math.floor(I/D)/x)}function Kt(I,x,D,B){let k=I.updateRanges;if(k.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,D,B,x.data);else{k.sort((K,at)=>K.start-at.start);let J=0;for(let K=1;K<k.length;K++){let at=k[J],Et=k[K],lt=at.start+at.count,yt=Gt(Et.start,x.width,4),Xt=Gt(at.start,x.width,4);Et.start<=lt+1&&yt===Xt&&Gt(Et.start+Et.count-1,x.width,4)===yt?at.count=Math.max(at.count,Et.start+Et.count-at.start):(++J,k[J]=Et)}k.length=J+1;let Q=s.getParameter(s.UNPACK_ROW_LENGTH),st=s.getParameter(s.UNPACK_SKIP_PIXELS),xt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let K=0,at=k.length;K<at;K++){let Et=k[K],lt=Math.floor(Et.start/4),yt=Math.ceil(Et.count/4),Xt=lt%x.width,Z=Math.floor(lt/x.width),vt=yt,_t=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Z),e.texSubImage2D(s.TEXTURE_2D,0,Xt,Z,vt,_t,D,B,x.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Q),s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,xt)}}function et(I,x,D){let B=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(B=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(B=s.TEXTURE_3D);let H=Nt(I,x),k=x.source;e.bindTexture(B,I.__webglTexture,s.TEXTURE0+D);let J=n.get(k);if(k.version!==J.__version||H===!0){e.activeTexture(s.TEXTURE0+D);let Q=Ae.getPrimaries(Ae.workingColorSpace),st=x.colorSpace===Gi?null:Ae.getPrimaries(x.colorSpace),xt=x.colorSpace===Gi||Q===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let K=v(x.image,!1,i.maxTextureSize);K=wt(x,K);let at=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),lt=b(x.internalFormat,at,Et,x.colorSpace,x.isVideoTexture);Tt(B,x);let yt,Xt=x.mipmaps,Z=x.isVideoTexture!==!0,vt=J.__version===void 0||H===!0,_t=k.dataReady,Mt=w(x,K);if(x.isDepthTexture)lt=y(x.format===hs,x.type),vt&&(Z?e.texStorage2D(s.TEXTURE_2D,1,lt,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,lt,K.width,K.height,0,at,Et,null));else if(x.isDataTexture)if(Xt.length>0){Z&&vt&&e.texStorage2D(s.TEXTURE_2D,Mt,lt,Xt[0].width,Xt[0].height);for(let gt=0,ut=Xt.length;gt<ut;gt++)yt=Xt[gt],Z?_t&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,yt.width,yt.height,at,Et,yt.data):e.texImage2D(s.TEXTURE_2D,gt,lt,yt.width,yt.height,0,at,Et,yt.data);x.generateMipmaps=!1}else Z?(vt&&e.texStorage2D(s.TEXTURE_2D,Mt,lt,K.width,K.height),_t&&Kt(x,K,at,Et)):e.texImage2D(s.TEXTURE_2D,0,lt,K.width,K.height,0,at,Et,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Z&&vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,lt,Xt[0].width,Xt[0].height,K.depth);for(let gt=0,ut=Xt.length;gt<ut;gt++)if(yt=Xt[gt],x.format!==Fn)if(at!==null)if(Z){if(_t)if(x.layerUpdates.size>0){let Zt=Hh(yt.width,yt.height,x.format,x.type);for(let te of x.layerUpdates){let ee=yt.data.subarray(te*Zt/yt.data.BYTES_PER_ELEMENT,(te+1)*Zt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,te,yt.width,yt.height,1,at,ee)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,yt.width,yt.height,K.depth,at,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,gt,lt,yt.width,yt.height,K.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?_t&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,yt.width,yt.height,K.depth,at,Et,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,gt,lt,yt.width,yt.height,K.depth,0,at,Et,yt.data)}else{Z&&vt&&e.texStorage2D(s.TEXTURE_2D,Mt,lt,Xt[0].width,Xt[0].height);for(let gt=0,ut=Xt.length;gt<ut;gt++)yt=Xt[gt],x.format!==Fn?at!==null?Z?_t&&e.compressedTexSubImage2D(s.TEXTURE_2D,gt,0,0,yt.width,yt.height,at,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,gt,lt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?_t&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,yt.width,yt.height,at,Et,yt.data):e.texImage2D(s.TEXTURE_2D,gt,lt,yt.width,yt.height,0,at,Et,yt.data)}else if(x.isDataArrayTexture)if(Z){if(vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,lt,K.width,K.height,K.depth),_t)if(x.layerUpdates.size>0){let gt=Hh(K.width,K.height,x.format,x.type);for(let ut of x.layerUpdates){let Zt=K.data.subarray(ut*gt/K.data.BYTES_PER_ELEMENT,(ut+1)*gt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,K.width,K.height,1,at,Et,Zt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,at,Et,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,lt,K.width,K.height,K.depth,0,at,Et,K.data);else if(x.isData3DTexture)Z?(vt&&e.texStorage3D(s.TEXTURE_3D,Mt,lt,K.width,K.height,K.depth),_t&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,at,Et,K.data)):e.texImage3D(s.TEXTURE_3D,0,lt,K.width,K.height,K.depth,0,at,Et,K.data);else if(x.isFramebufferTexture){if(vt)if(Z)e.texStorage2D(s.TEXTURE_2D,Mt,lt,K.width,K.height);else{let gt=K.width,ut=K.height;for(let Zt=0;Zt<Mt;Zt++)e.texImage2D(s.TEXTURE_2D,Zt,lt,gt,ut,0,at,Et,null),gt>>=1,ut>>=1}}else if(Xt.length>0){if(Z&&vt){let gt=Ut(Xt[0]);e.texStorage2D(s.TEXTURE_2D,Mt,lt,gt.width,gt.height)}for(let gt=0,ut=Xt.length;gt<ut;gt++)yt=Xt[gt],Z?_t&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,at,Et,yt):e.texImage2D(s.TEXTURE_2D,gt,lt,at,Et,yt);x.generateMipmaps=!1}else if(Z){if(vt){let gt=Ut(K);e.texStorage2D(s.TEXTURE_2D,Mt,lt,gt.width,gt.height)}_t&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at,Et,K)}else e.texImage2D(s.TEXTURE_2D,0,lt,at,Et,K);m(x)&&p(B),J.__version=k.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function ct(I,x,D){if(x.image.length!==6)return;let B=Nt(I,x),H=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+D);let k=n.get(H);if(H.version!==k.__version||B===!0){e.activeTexture(s.TEXTURE0+D);let J=Ae.getPrimaries(Ae.workingColorSpace),Q=x.colorSpace===Gi?null:Ae.getPrimaries(x.colorSpace),st=x.colorSpace===Gi||J===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let xt=x.isCompressedTexture||x.image[0].isCompressedTexture,K=x.image[0]&&x.image[0].isDataTexture,at=[];for(let ut=0;ut<6;ut++)!xt&&!K?at[ut]=v(x.image[ut],!0,i.maxCubemapSize):at[ut]=K?x.image[ut].image:x.image[ut],at[ut]=wt(x,at[ut]);let Et=at[0],lt=r.convert(x.format,x.colorSpace),yt=r.convert(x.type),Xt=b(x.internalFormat,lt,yt,x.colorSpace),Z=x.isVideoTexture!==!0,vt=k.__version===void 0||B===!0,_t=H.dataReady,Mt=w(x,Et);Tt(s.TEXTURE_CUBE_MAP,x);let gt;if(xt){Z&&vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,Xt,Et.width,Et.height);for(let ut=0;ut<6;ut++){gt=at[ut].mipmaps;for(let Zt=0;Zt<gt.length;Zt++){let te=gt[Zt];x.format!==Fn?lt!==null?Z?_t&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,0,0,te.width,te.height,lt,te.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,Xt,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,0,0,te.width,te.height,lt,yt,te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,Xt,te.width,te.height,0,lt,yt,te.data)}}}else{if(gt=x.mipmaps,Z&&vt){gt.length>0&&Mt++;let ut=Ut(at[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,Xt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(K){Z?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,at[ut].width,at[ut].height,lt,yt,at[ut].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Xt,at[ut].width,at[ut].height,0,lt,yt,at[ut].data);for(let Zt=0;Zt<gt.length;Zt++){let ee=gt[Zt].image[ut].image;Z?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,0,0,ee.width,ee.height,lt,yt,ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,Xt,ee.width,ee.height,0,lt,yt,ee.data)}}else{Z?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,lt,yt,at[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Xt,lt,yt,at[ut]);for(let Zt=0;Zt<gt.length;Zt++){let te=gt[Zt];Z?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,0,0,lt,yt,te.image[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,Xt,lt,yt,te.image[ut])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),k.__version=H.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function Pt(I,x,D,B,H,k){let J=r.convert(D.format,D.colorSpace),Q=r.convert(D.type),st=b(D.internalFormat,J,Q,D.colorSpace),xt=n.get(x),K=n.get(D);if(K.__renderTarget=x,!xt.__hasExternalTextures){let at=Math.max(1,x.width>>k),Et=Math.max(1,x.height>>k);H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?e.texImage3D(H,k,st,at,Et,x.depth,0,J,Q,null):e.texImage2D(H,k,st,at,Et,0,J,Q,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),W(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,B,H,K.__webglTexture,0,q(x)):(H===s.TEXTURE_2D||H>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,B,H,K.__webglTexture,k),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(I,x,D){if(s.bindRenderbuffer(s.RENDERBUFFER,I),x.depthBuffer){let B=x.depthTexture,H=B&&B.isDepthTexture?B.type:null,k=y(x.stencilBuffer,H),J=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=q(x);W(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,k,x.width,x.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,k,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,k,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,I)}else{let B=x.textures;for(let H=0;H<B.length;H++){let k=B[H],J=r.convert(k.format,k.colorSpace),Q=r.convert(k.type),st=b(k.internalFormat,J,Q,k.colorSpace),xt=q(x);D&&W(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,st,x.width,x.height):W(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,st,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,st,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(I,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let B=n.get(x.depthTexture);B.__renderTarget=x,(!B.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);let H=B.__webglTexture,k=q(x);if(x.depthTexture.format===Ar)W(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,H,0,k):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,H,0);else if(x.depthTexture.format===hs)W(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,H,0,k):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function nt(I){let x=n.get(I),D=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){let B=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),B){let H=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,B.removeEventListener("dispose",H)};B.addEventListener("dispose",H),x.__depthDisposeCallback=H}x.__boundDepthTexture=B}if(I.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");let B=I.texture.mipmaps;B&&B.length>0?Rt(x.__webglFramebuffer[0],I):Rt(x.__webglFramebuffer,I)}else if(D){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]===void 0)x.__webglDepthbuffer[B]=s.createRenderbuffer(),Wt(x.__webglDepthbuffer[B],I,!1);else{let H=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer[B];s.bindRenderbuffer(s.RENDERBUFFER,k),s.framebufferRenderbuffer(s.FRAMEBUFFER,H,s.RENDERBUFFER,k)}}else{let B=I.texture.mipmaps;if(B&&B.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Wt(x.__webglDepthbuffer,I,!1);else{let H=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,k),s.framebufferRenderbuffer(s.FRAMEBUFFER,H,s.RENDERBUFFER,k)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(I,x,D){let B=n.get(I);x!==void 0&&Pt(B.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&nt(I)}function L(I){let x=I.texture,D=n.get(I),B=n.get(x);I.addEventListener("dispose",P);let H=I.textures,k=I.isWebGLCubeRenderTarget===!0,J=H.length>1;if(J||(B.__webglTexture===void 0&&(B.__webglTexture=s.createTexture()),B.__version=x.version,o.memory.textures++),k){D.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[Q]=[];for(let st=0;st<x.mipmaps.length;st++)D.__webglFramebuffer[Q][st]=s.createFramebuffer()}else D.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)D.__webglFramebuffer[Q]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(J)for(let Q=0,st=H.length;Q<st;Q++){let xt=n.get(H[Q]);xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&W(I)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let Q=0;Q<H.length;Q++){let st=H[Q];D.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[Q]);let xt=r.convert(st.format,st.colorSpace),K=r.convert(st.type),at=b(st.internalFormat,xt,K,st.colorSpace,I.isXRRenderTarget===!0),Et=q(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,at,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,D.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),Wt(D.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(k){e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)Pt(D.__webglFramebuffer[Q][st],I,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st);else Pt(D.__webglFramebuffer[Q],I,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(x)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){for(let Q=0,st=H.length;Q<st;Q++){let xt=H[Q],K=n.get(xt),at=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),Tt(at,xt),Pt(D.__webglFramebuffer,I,xt,s.COLOR_ATTACHMENT0+Q,at,0),m(xt)&&p(at)}e.unbindTexture()}else{let Q=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,B.__webglTexture),Tt(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)Pt(D.__webglFramebuffer[st],I,x,s.COLOR_ATTACHMENT0,Q,st);else Pt(D.__webglFramebuffer,I,x,s.COLOR_ATTACHMENT0,Q,0);m(x)&&p(Q),e.unbindTexture()}I.depthBuffer&&nt(I)}function Dt(I){let x=I.textures;for(let D=0,B=x.length;D<B;D++){let H=x[D];if(m(H)){let k=_(I),J=n.get(H).__webglTexture;e.bindTexture(k,J),p(k),e.unbindTexture()}}}let It=[],St=[];function Y(I){if(I.samples>0){if(W(I)===!1){let x=I.textures,D=I.width,B=I.height,H=s.COLOR_BUFFER_BIT,k=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=n.get(I),Q=x.length>1;if(Q)for(let xt=0;xt<x.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,J.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer);let st=I.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,J.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(H|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(H|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,J.__webglColorRenderbuffer[xt]);let K=n.get(x[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,D,B,0,0,D,B,H,s.NEAREST),c===!0&&(It.length=0,St.length=0,It.push(s.COLOR_ATTACHMENT0+xt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(It.push(k),St.push(k),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,St)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let xt=0;xt<x.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,J.__webglColorRenderbuffer[xt]);let K=n.get(x[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,J.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,K,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let x=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function q(I){return Math.min(i.maxSamples,I.samples)}function W(I){let x=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function rt(I){let x=o.render.frame;l.get(I)!==x&&(l.set(I,x),I.update())}function wt(I,x){let D=I.colorSpace,B=I.format,H=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||D!==Us&&D!==Gi&&(Ae.getTransfer(D)===De?(B!==Fn||H!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}function Ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=T,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=W}function zv(s,t){function e(n,i=Gi){let r,o=Ae.getTransfer(i);if(n===qn)return s.UNSIGNED_BYTE;if(n===bl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ah)return s.BYTE;if(n===Rh)return s.SHORT;if(n===Fr)return s.UNSIGNED_SHORT;if(n===Ml)return s.INT;if(n===ls)return s.UNSIGNED_INT;if(n===fi)return s.FLOAT;if(n===un)return s.HALF_FLOAT;if(n===Ih)return s.ALPHA;if(n===Dh)return s.RGB;if(n===Fn)return s.RGBA;if(n===Ar)return s.DEPTH_COMPONENT;if(n===hs)return s.DEPTH_STENCIL;if(n===El)return s.RED;if(n===wl)return s.RED_INTEGER;if(n===Lh)return s.RG;if(n===Tl)return s.RG_INTEGER;if(n===Al)return s.RGBA_INTEGER;if(n===Oo||n===Bo||n===ko||n===Ho)if(o===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Cl||n===Pl||n===Il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Ll||n===Ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Ll)return o===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ul)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===Fl||n===zl||n===Ol||n===Bl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$l||n===Kl||n===Jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$l)return o===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===Ql||n===tc||n===ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new So(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Se({vertexShader:Ov,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eu=class extends ki{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,f=null,d=null,u=null,g=null,v=typeof XRWebGLBinding<"u",m=new tu,p={},_=e.getContextAttributes(),b=null,y=null,w=[],A=[],P=new $t,R=null,S=new cn;S.viewport=new ke;let E=new cn;E.viewport=new ke;let z=[S,E],G=new nl,F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=w[et];return ct===void 0&&(ct=new Pr,w[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=w[et];return ct===void 0&&(ct=new Pr,w[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=w[et];return ct===void 0&&(ct=new Pr,w[et]=ct),ct.getHandSpace()};function X(et){let ct=A.indexOf(et.inputSource);if(ct===-1)return;let Pt=w[ct];Pt!==void 0&&(Pt.update(et.inputSource,et.frame,h||o),Pt.dispatchEvent({type:et.type,data:et.inputSource}))}function $(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",T);for(let et=0;et<w.length;et++){let ct=A[et];ct!==null&&(A[et]=null,w[et].disconnect(ct))}F=null,O=null,m.reset();for(let et in p)delete p[et];t.setRenderTarget(b),u=null,d=null,f=null,i=null,y=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(et){h=et},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(et){if(i=et,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",$),i.addEventListener("inputsourceschange",T),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Wt=null,Rt=null;_.depth&&(Rt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=_.stencil?hs:Ar,Wt=_.stencil?cs:ls);let nt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(nt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ze(d.textureWidth,d.textureHeight,{format:Fn,type:qn,depthTexture:new Os(d.textureWidth,d.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Pt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,Pt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Ze(u.framebufferWidth,u.framebufferHeight,{format:Fn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function T(et){for(let ct=0;ct<et.removed.length;ct++){let Pt=et.removed[ct],Wt=A.indexOf(Pt);Wt>=0&&(A[Wt]=null,w[Wt].disconnect(Pt))}for(let ct=0;ct<et.added.length;ct++){let Pt=et.added[ct],Wt=A.indexOf(Pt);if(Wt===-1){for(let nt=0;nt<w.length;nt++)if(nt>=A.length){A.push(Pt),Wt=nt;break}else if(A[nt]===null){A[nt]=Pt,Wt=nt;break}if(Wt===-1)break}let Rt=w[Wt];Rt&&Rt.connect(Pt)}}let V=new U,tt=new U;function ht(et,ct,Pt){V.setFromMatrixPosition(ct.matrixWorld),tt.setFromMatrixPosition(Pt.matrixWorld);let Wt=V.distanceTo(tt),Rt=ct.projectionMatrix.elements,nt=Pt.projectionMatrix.elements,Ft=Rt[14]/(Rt[10]-1),L=Rt[14]/(Rt[10]+1),Dt=(Rt[9]+1)/Rt[5],It=(Rt[9]-1)/Rt[5],St=(Rt[8]-1)/Rt[0],Y=(nt[8]+1)/nt[0],q=Ft*St,W=Ft*Y,rt=Wt/(-St+Y),wt=rt*-St;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(wt),et.translateZ(rt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Rt[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let Ut=Ft+rt,I=L+rt,x=q-wt,D=W+(Wt-wt),B=Dt*L/I*Ut,H=It*L/I*Ut;et.projectionMatrix.makePerspective(x,D,B,H,Ut,I),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function bt(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(i===null)return;let ct=et.near,Pt=et.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(Pt=m.depthFar)),G.near=E.near=S.near=ct,G.far=E.far=S.far=Pt,(F!==G.near||O!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),F=G.near,O=G.far),G.layers.mask=et.layers.mask|6,S.layers.mask=G.layers.mask&3,E.layers.mask=G.layers.mask&5;let Wt=et.parent,Rt=G.cameras;bt(G,Wt);for(let nt=0;nt<Rt.length;nt++)bt(Rt[nt],Wt);Rt.length===2?ht(G,S,E):G.projectionMatrix.copy(S.projectionMatrix),Tt(et,G,Wt)};function Tt(et,ct,Pt){Pt===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(Pt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ns*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(et){c=et,d!==null&&(d.fixedFoveation=et),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(et){return p[et]};let Nt=null;function Gt(et,ct){if(l=ct.getViewerPose(h||o),g=ct,l!==null){let Pt=l.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Wt=!1;Pt.length!==G.cameras.length&&(G.cameras.length=0,Wt=!0);for(let L=0;L<Pt.length;L++){let Dt=Pt[L],It=null;if(u!==null)It=u.getViewport(Dt);else{let Y=f.getViewSubImage(d,Dt);It=Y.viewport,L===0&&(t.setRenderTargetTextures(y,Y.colorTexture,Y.depthStencilTexture),t.setRenderTarget(y))}let St=z[L];St===void 0&&(St=new cn,St.layers.enable(L),St.viewport=new ke,z[L]=St),St.matrix.fromArray(Dt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Dt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(It.x,It.y,It.width,It.height),L===0&&(G.matrix.copy(St.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Wt===!0&&G.cameras.push(St)}let Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let L=f.getDepthInformation(Pt[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(Rt&&Rt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let L=0;L<Pt.length;L++){let Dt=Pt[L].camera;if(Dt){let It=p[Dt];It||(It=new So,p[Dt]=It);let St=f.getCameraImage(Dt);It.sourceTexture=St}}}}for(let Pt=0;Pt<w.length;Pt++){let Wt=A[Pt],Rt=w[Pt];Wt!==null&&Rt!==void 0&&Rt.update(Wt,ct,h||o)}Nt&&Nt(et,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}let Kt=new hd;Kt.setAnimationLoop(Gt),this.setAnimationLoop=function(et){Nt=et},this.dispose=function(){}}},Ys=new Qe,kv=new Ot;function Hv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,b):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),b=_.envMap,y=_.envMapRotation;b&&(m.envMap.value=b,Ys.copy(y),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),m.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(Ys)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gv(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){let y=b.program;n.uniformBlockBinding(_,y)}function h(_,b){let y=i[_.id];y===void 0&&(g(_),y=l(_),i[_.id]=y,_.addEventListener("dispose",m));let w=b.program;n.updateUBOMapping(_,w);let A=t.render.frame;r[_.id]!==A&&(d(_),r[_.id]=A)}function l(_){let b=f();_.__bindingPointIndex=b;let y=s.createBuffer(),w=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=i[_.id],y=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,P=y.length;A<P;A++){let R=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,E=R.length;S<E;S++){let z=R[S];if(u(z,A,S,w)===!0){let G=z.__offset,F=Array.isArray(z.value)?z.value:[z.value],O=0;for(let X=0;X<F.length;X++){let $=F[X],T=v($);typeof $=="number"||typeof $=="boolean"?(z.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,G+O,z.__data)):$.isMatrix3?(z.__data[0]=$.elements[0],z.__data[1]=$.elements[1],z.__data[2]=$.elements[2],z.__data[3]=0,z.__data[4]=$.elements[3],z.__data[5]=$.elements[4],z.__data[6]=$.elements[5],z.__data[7]=0,z.__data[8]=$.elements[6],z.__data[9]=$.elements[7],z.__data[10]=$.elements[8],z.__data[11]=0):($.toArray(z.__data,O),O+=T.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(_,b,y,w){let A=_.value,P=b+"_"+y;if(w[P]===void 0)return typeof A=="number"||typeof A=="boolean"?w[P]=A:w[P]=A.clone(),!0;{let R=w[P];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return w[P]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(_){let b=_.uniforms,y=0,w=16;for(let P=0,R=b.length;P<R;P++){let S=Array.isArray(b[P])?b[P]:[b[P]];for(let E=0,z=S.length;E<z;E++){let G=S[E],F=Array.isArray(G.value)?G.value:[G.value];for(let O=0,X=F.length;O<X;O++){let $=F[O],T=v($),V=y%w,tt=V%T.boundary,ht=V+tt;y+=tt,ht!==0&&w-ht<T.storage&&(y+=w-ht),G.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=T.storage}}}let A=y%w;return A>0&&(y+=w-A),_.__size=y,_.__cache={},this}function v(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){let b=_.target;b.removeEventListener("dispose",m);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:h,dispose:p}}var ac=class{constructor(t={}){let{canvas:e=zf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,_=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1;this._outputColorSpace=_n;let A=0,P=0,R=null,S=-1,E=null,z=new ke,G=new ke,F=null,O=new Lt(0),X=0,$=e.width,T=e.height,V=1,tt=null,ht=null,bt=new ke(0,0,$,T),Tt=new ke(0,0,$,T),Nt=!1,Gt=new is,Kt=!1,et=!1,ct=new Ot,Pt=new U,Wt=new ke,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function Ft(){return R===null?V:1}let L=n;function Dt(C,j){return e.getContext(C,j)}try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),L===null){let j="webgl2";if(L=Dt(j,C),L===null)throw Dt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let It,St,Y,q,W,rt,wt,Ut,I,x,D,B,H,k,J,Q,st,xt,K,at,Et,lt,yt,Xt;function Z(){It=new ox(L),It.init(),lt=new zv(L,It),St=new Qg(L,It,t,lt),Y=new Nv(L,It),St.reversedDepthBuffer&&d&&Y.buffers.depth.setReversed(!0),q=new cx(L),W=new bv,rt=new Fv(L,It,Y,W,St,lt,q),wt=new ex(y),Ut=new rx(y),I=new m0(L),yt=new Jg(L,I),x=new ax(L,I,q,yt),D=new ux(L,x,I,q),K=new hx(L,St,rt),Q=new tx(W),B=new Mv(y,wt,Ut,It,St,yt,Q),H=new Hv(y,W),k=new Ev,J=new Pv(It),xt=new Kg(y,wt,Ut,Y,D,u,c),st=new Lv(y,D,St),Xt=new Gv(L,q,St,Y),at=new jg(L,It,q),Et=new lx(L,It,q),q.programs=B.programs,y.capabilities=St,y.extensions=It,y.properties=W,y.renderLists=k,y.shadowMap=st,y.state=Y,y.info=q}Z();let vt=new eu(y,L);this.xr=vt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let C=It.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=It.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize($,T,!1))},this.getSize=function(C){return C.set($,T)},this.setSize=function(C,j,ot=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,T=j,e.width=Math.floor(C*V),e.height=Math.floor(j*V),ot===!0&&(e.style.width=C+"px",e.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set($*V,T*V).floor()},this.setDrawingBufferSize=function(C,j,ot){$=C,T=j,V=ot,e.width=Math.floor(C*ot),e.height=Math.floor(j*ot),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(bt)},this.setViewport=function(C,j,ot,M){C.isVector4?bt.set(C.x,C.y,C.z,C.w):bt.set(C,j,ot,M),Y.viewport(z.copy(bt).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(Tt)},this.setScissor=function(C,j,ot,M){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,j,ot,M),Y.scissor(G.copy(Tt).multiplyScalar(V).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(C){Y.setScissorTest(Nt=C)},this.setOpaqueSort=function(C){tt=C},this.setTransparentSort=function(C){ht=C},this.getClearColor=function(C){return C.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,ot=!0){let M=0;if(C){let N=!1;if(R!==null){let it=R.texture.format;N=it===Al||it===Tl||it===wl}if(N){let it=R.texture.type,pt=it===qn||it===ls||it===Fr||it===cs||it===bl||it===Sl,Ct=xt.getClearColor(),ft=xt.getClearAlpha(),Bt=Ct.r,qt=Ct.g,kt=Ct.b;pt?(g[0]=Bt,g[1]=qt,g[2]=kt,g[3]=ft,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Bt,v[1]=qt,v[2]=kt,v[3]=ft,L.clearBufferiv(L.COLOR,0,v))}else M|=L.COLOR_BUFFER_BIT}j&&(M|=L.DEPTH_BUFFER_BIT),ot&&(M|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(M)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),xt.dispose(),k.dispose(),J.dispose(),W.dispose(),wt.dispose(),Ut.dispose(),D.dispose(),yt.dispose(),Xt.dispose(),B.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",gn),vt.removeEventListener("sessionend",Ms),ri.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let C=q.autoReset,j=st.enabled,ot=st.autoUpdate,M=st.needsUpdate,N=st.type;Z(),q.autoReset=C,st.enabled=j,st.autoUpdate=ot,st.needsUpdate=M,st.type=N}function gt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ut(C){let j=C.target;j.removeEventListener("dispose",ut),Zt(j)}function Zt(C){te(C),W.remove(C)}function te(C){let j=W.get(C).programs;j!==void 0&&(j.forEach(function(ot){B.releaseProgram(ot)}),C.isShaderMaterial&&B.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ot,M,N,it){j===null&&(j=Rt);let pt=N.isMesh&&N.matrixWorld.determinant()<0,Ct=hr(C,j,ot,M,N);Y.setMaterial(M,pt);let ft=ot.index,Bt=1;if(M.wireframe===!0){if(ft=x.getWireframeAttribute(ot),ft===void 0)return;Bt=2}let qt=ot.drawRange,kt=ot.attributes.position,Yt=qt.start*Bt,se=(qt.start+qt.count)*Bt;it!==null&&(Yt=Math.max(Yt,it.start*Bt),se=Math.min(se,(it.start+it.count)*Bt)),ft!==null?(Yt=Math.max(Yt,0),se=Math.min(se,ft.count)):kt!=null&&(Yt=Math.max(Yt,0),se=Math.min(se,kt.count));let Te=se-Yt;if(Te<0||Te===1/0)return;yt.setup(N,M,Ct,ot,ft);let Ce,xe=at;if(ft!==null&&(Ce=I.get(ft),xe=Et,xe.setIndex(Ce)),N.isMesh)M.wireframe===!0?(Y.setLineWidth(M.wireframeLinewidth*Ft()),xe.setMode(L.LINES)):xe.setMode(L.TRIANGLES);else if(N.isLine){let jt=M.linewidth;jt===void 0&&(jt=1),Y.setLineWidth(jt*Ft()),N.isLineSegments?xe.setMode(L.LINES):N.isLineLoop?xe.setMode(L.LINE_LOOP):xe.setMode(L.LINE_STRIP)}else N.isPoints?xe.setMode(L.POINTS):N.isSprite&&xe.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))xe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let jt=N._multiDrawStarts,Ie=N._multiDrawCounts,be=N._multiDrawCount,kn=ft?I.get(ft).bytesPerElement:1,ur=W.get(M).currentProgram.getUniforms();for(let Hn=0;Hn<be;Hn++)ur.setValue(L,"_gl_DrawID",Hn),xe.render(jt[Hn]/kn,Ie[Hn])}else if(N.isInstancedMesh)xe.renderInstances(Yt,Te,N.count);else if(ot.isInstancedBufferGeometry){let jt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ie=Math.min(ot.instanceCount,jt);xe.renderInstances(Yt,Te,Ie)}else xe.render(Yt,Te)};function ee(C,j,ot){C.transparent===!0&&C.side===hn&&C.forceSinglePass===!1?(C.side=bn,C.needsUpdate=!0,Ii(C,j,ot),C.side=Oi,C.needsUpdate=!0,Ii(C,j,ot),C.side=hn):Ii(C,j,ot)}this.compile=function(C,j,ot=null){ot===null&&(ot=C),p=J.get(ot),p.init(j),b.push(p),ot.traverseVisible(function(N){N.isLight&&N.layers.test(j.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),C!==ot&&C.traverseVisible(function(N){N.isLight&&N.layers.test(j.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let M=new Set;return C.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let it=N.material;if(it)if(Array.isArray(it))for(let pt=0;pt<it.length;pt++){let Ct=it[pt];ee(Ct,ot,N),M.add(Ct)}else ee(it,ot,N),M.add(it)}),p=b.pop(),M},this.compileAsync=function(C,j,ot=null){let M=this.compile(C,j,ot);return new Promise(N=>{function it(){if(M.forEach(function(pt){W.get(pt).currentProgram.isReady()&&M.delete(pt)}),M.size===0){N(C);return}setTimeout(it,10)}It.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let fe=null;function ln(C){fe&&fe(C)}function gn(){ri.stop()}function Ms(){ri.start()}let ri=new hd;ri.setAnimationLoop(ln),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(C){fe=C,vt.setAnimationLoop(C),C===null?ri.stop():ri.start()},vt.addEventListener("sessionstart",gn),vt.addEventListener("sessionend",Ms),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(j),j=vt.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,j,R),p=J.get(C,b.length),p.init(j),b.push(p),ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Gt.setFromProjectionMatrix(ct,ci,j.reversedDepth),et=this.localClippingEnabled,Kt=Q.init(this.clippingPlanes,et),m=k.get(C,_.length),m.init(),_.push(m),vt.enabled===!0&&vt.isPresenting===!0){let it=y.xr.getDepthSensingMesh();it!==null&&bs(it,j,-1/0,y.sortObjects)}bs(C,j,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(tt,ht),nt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,nt&&xt.addToRenderList(m,C),this.info.render.frame++,Kt===!0&&Q.beginShadows();let ot=p.state.shadowsArray;st.render(ot,C,j),Kt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let M=m.opaque,N=m.transmissive;if(p.setupLights(),j.isArrayCamera){let it=j.cameras;if(N.length>0)for(let pt=0,Ct=it.length;pt<Ct;pt++){let ft=it[pt];Ss(M,N,C,ft)}nt&&xt.render(C);for(let pt=0,Ct=it.length;pt<Ct;pt++){let ft=it[pt];cr(m,C,ft,ft.viewport)}}else N.length>0&&Ss(M,N,C,j),nt&&xt.render(C),cr(m,C,j);R!==null&&P===0&&(rt.updateMultisampleRenderTarget(R),rt.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(y,C,j),yt.resetDefaultState(),S=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],Kt===!0&&Q.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function bs(C,j,ot,M){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Gt.intersectsSprite(C)){M&&Wt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);let pt=D.update(C),Ct=C.material;Ct.visible&&m.push(C,pt,Ct,ot,Wt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Gt.intersectsObject(C))){let pt=D.update(C),Ct=C.material;if(M&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Wt.copy(C.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Wt.copy(pt.boundingSphere.center)),Wt.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(Ct)){let ft=pt.groups;for(let Bt=0,qt=ft.length;Bt<qt;Bt++){let kt=ft[Bt],Yt=Ct[kt.materialIndex];Yt&&Yt.visible&&m.push(C,pt,Yt,ot,Wt.z,kt)}}else Ct.visible&&m.push(C,pt,Ct,ot,Wt.z,null)}}let it=C.children;for(let pt=0,Ct=it.length;pt<Ct;pt++)bs(it[pt],j,ot,M)}function cr(C,j,ot,M){let N=C.opaque,it=C.transmissive,pt=C.transparent;p.setupLightsView(ot),Kt===!0&&Q.setGlobalState(y.clippingPlanes,ot),M&&Y.viewport(z.copy(M)),N.length>0&&vi(N,j,ot),it.length>0&&vi(it,j,ot),pt.length>0&&vi(pt,j,ot),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Ss(C,j,ot,M){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[M.id]===void 0&&(p.state.transmissionRenderTarget[M.id]=new Ze(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?un:qn,minFilter:as,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));let it=p.state.transmissionRenderTarget[M.id],pt=M.viewport||z;it.setSize(pt.z*y.transmissionResolutionScale,pt.w*y.transmissionResolutionScale);let Ct=y.getRenderTarget(),ft=y.getActiveCubeFace(),Bt=y.getActiveMipmapLevel();y.setRenderTarget(it),y.getClearColor(O),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),nt&&xt.render(ot);let qt=y.toneMapping;y.toneMapping=Hi;let kt=M.viewport;if(M.viewport!==void 0&&(M.viewport=void 0),p.setupLightsView(M),Kt===!0&&Q.setGlobalState(y.clippingPlanes,M),vi(C,ot,M),rt.updateMultisampleRenderTarget(it),rt.updateRenderTargetMipmap(it),It.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let se=0,Te=j.length;se<Te;se++){let Ce=j[se],xe=Ce.object,jt=Ce.geometry,Ie=Ce.material,be=Ce.group;if(Ie.side===hn&&xe.layers.test(M.layers)){let kn=Ie.side;Ie.side=bn,Ie.needsUpdate=!0,Zi(xe,ot,M,jt,Ie,be),Ie.side=kn,Ie.needsUpdate=!0,Yt=!0}}Yt===!0&&(rt.updateMultisampleRenderTarget(it),rt.updateRenderTargetMipmap(it))}y.setRenderTarget(Ct,ft,Bt),y.setClearColor(O,X),kt!==void 0&&(M.viewport=kt),y.toneMapping=qt}function vi(C,j,ot){let M=j.isScene===!0?j.overrideMaterial:null;for(let N=0,it=C.length;N<it;N++){let pt=C[N],Ct=pt.object,ft=pt.geometry,Bt=pt.group,qt=pt.material;qt.allowOverride===!0&&M!==null&&(qt=M),Ct.layers.test(ot.layers)&&Zi(Ct,j,ot,ft,qt,Bt)}}function Zi(C,j,ot,M,N,it){C.onBeforeRender(y,j,ot,M,N,it),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),N.onBeforeRender(y,j,ot,M,C,it),N.transparent===!0&&N.side===hn&&N.forceSinglePass===!1?(N.side=bn,N.needsUpdate=!0,y.renderBufferDirect(ot,j,M,N,C,it),N.side=Oi,N.needsUpdate=!0,y.renderBufferDirect(ot,j,M,N,C,it),N.side=hn):y.renderBufferDirect(ot,j,M,N,C,it),C.onAfterRender(y,j,ot,M,N,it)}function Ii(C,j,ot){j.isScene!==!0&&(j=Rt);let M=W.get(C),N=p.state.lights,it=p.state.shadowsArray,pt=N.state.version,Ct=B.getParameters(C,N.state,it,j,ot),ft=B.getProgramCacheKey(Ct),Bt=M.programs;M.environment=C.isMeshStandardMaterial?j.environment:null,M.fog=j.fog,M.envMap=(C.isMeshStandardMaterial?Ut:wt).get(C.envMap||M.environment),M.envMapRotation=M.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Bt===void 0&&(C.addEventListener("dispose",ut),Bt=new Map,M.programs=Bt);let qt=Bt.get(ft);if(qt!==void 0){if(M.currentProgram===qt&&M.lightsStateVersion===pt)return ws(C,Ct),qt}else Ct.uniforms=B.getUniforms(C),C.onBeforeCompile(Ct,y),qt=B.acquireProgram(Ct,ft),Bt.set(ft,qt),M.uniforms=Ct.uniforms;let kt=M.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=Q.uniform),ws(C,Ct),M.needsLights=yi(C),M.lightsStateVersion=pt,M.needsLights&&(kt.ambientLightColor.value=N.state.ambient,kt.lightProbe.value=N.state.probe,kt.directionalLights.value=N.state.directional,kt.directionalLightShadows.value=N.state.directionalShadow,kt.spotLights.value=N.state.spot,kt.spotLightShadows.value=N.state.spotShadow,kt.rectAreaLights.value=N.state.rectArea,kt.ltc_1.value=N.state.rectAreaLTC1,kt.ltc_2.value=N.state.rectAreaLTC2,kt.pointLights.value=N.state.point,kt.pointLightShadows.value=N.state.pointShadow,kt.hemisphereLights.value=N.state.hemi,kt.directionalShadowMap.value=N.state.directionalShadowMap,kt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,kt.spotShadowMap.value=N.state.spotShadowMap,kt.spotLightMatrix.value=N.state.spotLightMatrix,kt.spotLightMap.value=N.state.spotLightMap,kt.pointShadowMap.value=N.state.pointShadowMap,kt.pointShadowMatrix.value=N.state.pointShadowMatrix),M.currentProgram=qt,M.uniformsList=null,qt}function Es(C){if(C.uniformsList===null){let j=C.currentProgram.getUniforms();C.uniformsList=kr.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function ws(C,j){let ot=W.get(C);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function hr(C,j,ot,M,N){j.isScene!==!0&&(j=Rt),rt.resetTextureUnits();let it=j.fog,pt=M.isMeshStandardMaterial?j.environment:null,Ct=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Us,ft=(M.isMeshStandardMaterial?Ut:wt).get(M.envMap||pt),Bt=M.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,qt=!!ot.attributes.tangent&&(!!M.normalMap||M.anisotropy>0),kt=!!ot.morphAttributes.position,Yt=!!ot.morphAttributes.normal,se=!!ot.morphAttributes.color,Te=Hi;M.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Te=y.toneMapping);let Ce=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,xe=Ce!==void 0?Ce.length:0,jt=W.get(M),Ie=p.state.lights;if(Kt===!0&&(et===!0||C!==E)){let Cn=C===E&&M.id===S;Q.setState(M,C,Cn)}let be=!1;M.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ie.state.version||jt.outputColorSpace!==Ct||N.isBatchedMesh&&jt.batching===!1||!N.isBatchedMesh&&jt.batching===!0||N.isBatchedMesh&&jt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&jt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&jt.instancing===!1||!N.isInstancedMesh&&jt.instancing===!0||N.isSkinnedMesh&&jt.skinning===!1||!N.isSkinnedMesh&&jt.skinning===!0||N.isInstancedMesh&&jt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&jt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&jt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&jt.instancingMorph===!1&&N.morphTexture!==null||jt.envMap!==ft||M.fog===!0&&jt.fog!==it||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Q.numPlanes||jt.numIntersection!==Q.numIntersection)||jt.vertexAlphas!==Bt||jt.vertexTangents!==qt||jt.morphTargets!==kt||jt.morphNormals!==Yt||jt.morphColors!==se||jt.toneMapping!==Te||jt.morphTargetsCount!==xe)&&(be=!0):(be=!0,jt.__version=M.version);let kn=jt.currentProgram;be===!0&&(kn=Ii(M,j,N));let ur=!1,Hn=!1,Qr=!1,Ye=kn.getUniforms(),Kn=jt.uniforms;if(Y.useProgram(kn.program)&&(ur=!0,Hn=!0,Qr=!0),M.id!==S&&(S=M.id,Hn=!0),ur||E!==C){Y.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ye.setValue(L,"projectionMatrix",C.projectionMatrix),Ye.setValue(L,"viewMatrix",C.matrixWorldInverse);let Un=Ye.map.cameraPosition;Un!==void 0&&Un.setValue(L,Pt.setFromMatrixPosition(C.matrixWorld)),St.logarithmicDepthBuffer&&Ye.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(M.isMeshPhongMaterial||M.isMeshToonMaterial||M.isMeshLambertMaterial||M.isMeshBasicMaterial||M.isMeshStandardMaterial||M.isShaderMaterial)&&Ye.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,Hn=!0,Qr=!0)}if(N.isSkinnedMesh){Ye.setOptional(L,N,"bindMatrix"),Ye.setOptional(L,N,"bindMatrixInverse");let Cn=N.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ye.setValue(L,"boneTexture",Cn.boneTexture,rt))}N.isBatchedMesh&&(Ye.setOptional(L,N,"batchingTexture"),Ye.setValue(L,"batchingTexture",N._matricesTexture,rt),Ye.setOptional(L,N,"batchingIdTexture"),Ye.setValue(L,"batchingIdTexture",N._indirectTexture,rt),Ye.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Ye.setValue(L,"batchingColorTexture",N._colorsTexture,rt));let Jn=ot.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&K.update(N,ot,kn),(Hn||jt.receiveShadow!==N.receiveShadow)&&(jt.receiveShadow=N.receiveShadow,Ye.setValue(L,"receiveShadow",N.receiveShadow)),M.isMeshGouraudMaterial&&M.envMap!==null&&(Kn.envMap.value=ft,Kn.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),M.isMeshStandardMaterial&&M.envMap===null&&j.environment!==null&&(Kn.envMapIntensity.value=j.environmentIntensity),Hn&&(Ye.setValue(L,"toneMappingExposure",y.toneMappingExposure),jt.needsLights&&Ts(Kn,Qr),it&&M.fog===!0&&H.refreshFogUniforms(Kn,it),H.refreshMaterialUniforms(Kn,M,V,T,p.state.transmissionRenderTarget[C.id]),kr.upload(L,Es(jt),Kn,rt)),M.isShaderMaterial&&M.uniformsNeedUpdate===!0&&(kr.upload(L,Es(jt),Kn,rt),M.uniformsNeedUpdate=!1),M.isSpriteMaterial&&Ye.setValue(L,"center",N.center),Ye.setValue(L,"modelViewMatrix",N.modelViewMatrix),Ye.setValue(L,"normalMatrix",N.normalMatrix),Ye.setValue(L,"modelMatrix",N.matrixWorld),M.isShaderMaterial||M.isRawShaderMaterial){let Cn=M.uniformsGroups;for(let Un=0,Vc=Cn.length;Un<Vc;Un++){let As=Cn[Un];Xt.update(As,kn),Xt.bind(As,kn)}}return kn}function Ts(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function yi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,j,ot){let M=W.get(C);M.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,M.__autoAllocateDepthBuffer===!1&&(M.__useRenderToTexture=!1),W.get(C.texture).__webglTexture=j,W.get(C.depthTexture).__webglTexture=M.__autoAllocateDepthBuffer?void 0:ot,M.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){let ot=W.get(C);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};let Pe=L.createFramebuffer();this.setRenderTarget=function(C,j=0,ot=0){R=C,A=j,P=ot;let M=!0,N=null,it=!1,pt=!1;if(C){let ft=W.get(C);if(ft.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(L.FRAMEBUFFER,null),M=!1;else if(ft.__webglFramebuffer===void 0)rt.setupRenderTarget(C);else if(ft.__hasExternalTextures)rt.rebindTextures(C,W.get(C.texture).__webglTexture,W.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let kt=C.depthTexture;if(ft.__boundDepthTexture!==kt){if(kt!==null&&W.has(kt)&&(C.width!==kt.image.width||C.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(C)}}let Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(pt=!0);let qt=W.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qt[j])?N=qt[j][ot]:N=qt[j],it=!0):C.samples>0&&rt.useMultisampledRTT(C)===!1?N=W.get(C).__webglMultisampledFramebuffer:Array.isArray(qt)?N=qt[ot]:N=qt,z.copy(C.viewport),G.copy(C.scissor),F=C.scissorTest}else z.copy(bt).multiplyScalar(V).floor(),G.copy(Tt).multiplyScalar(V).floor(),F=Nt;if(ot!==0&&(N=Pe),Y.bindFramebuffer(L.FRAMEBUFFER,N)&&M&&Y.drawBuffers(C,N),Y.viewport(z),Y.scissor(G),Y.setScissorTest(F),it){let ft=W.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft.__webglTexture,ot)}else if(pt){let ft=j;for(let Bt=0;Bt<C.textures.length;Bt++){let qt=W.get(C.textures[Bt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Bt,qt.__webglTexture,ot,ft)}}else if(C!==null&&ot!==0){let ft=W.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,ot)}S=-1},this.readRenderTargetPixels=function(C,j,ot,M,N,it,pt,Ct=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=W.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&pt!==void 0&&(ft=ft[pt]),ft){Y.bindFramebuffer(L.FRAMEBUFFER,ft);try{let Bt=C.textures[Ct],qt=Bt.format,kt=Bt.type;if(!St.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-M&&ot>=0&&ot<=C.height-N&&(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ct),L.readPixels(j,ot,M,N,lt.convert(qt),lt.convert(kt),it))}finally{let Bt=R!==null?W.get(R).__webglFramebuffer:null;Y.bindFramebuffer(L.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(C,j,ot,M,N,it,pt,Ct=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=W.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&pt!==void 0&&(ft=ft[pt]),ft)if(j>=0&&j<=C.width-M&&ot>=0&&ot<=C.height-N){Y.bindFramebuffer(L.FRAMEBUFFER,ft);let Bt=C.textures[Ct],qt=Bt.format,kt=Bt.type;if(!St.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Yt),L.bufferData(L.PIXEL_PACK_BUFFER,it.byteLength,L.STREAM_READ),C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ct),L.readPixels(j,ot,M,N,lt.convert(qt),lt.convert(kt),0);let se=R!==null?W.get(R).__webglFramebuffer:null;Y.bindFramebuffer(L.FRAMEBUFFER,se);let Te=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Of(L,Te,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Yt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,it),L.deleteBuffer(Yt),L.deleteSync(Te),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,ot=0){let M=Math.pow(2,-ot),N=Math.floor(C.image.width*M),it=Math.floor(C.image.height*M),pt=j!==null?j.x:0,Ct=j!==null?j.y:0;rt.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,ot,0,0,pt,Ct,N,it),Y.unbindTexture()};let $n=L.createFramebuffer(),_i=L.createFramebuffer();this.copyTextureToTexture=function(C,j,ot=null,M=null,N=0,it=null){it===null&&(N!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=N,N=0):it=0);let pt,Ct,ft,Bt,qt,kt,Yt,se,Te,Ce=C.isCompressedTexture?C.mipmaps[it]:C.image;if(ot!==null)pt=ot.max.x-ot.min.x,Ct=ot.max.y-ot.min.y,ft=ot.isBox3?ot.max.z-ot.min.z:1,Bt=ot.min.x,qt=ot.min.y,kt=ot.isBox3?ot.min.z:0;else{let Jn=Math.pow(2,-N);pt=Math.floor(Ce.width*Jn),Ct=Math.floor(Ce.height*Jn),C.isDataArrayTexture?ft=Ce.depth:C.isData3DTexture?ft=Math.floor(Ce.depth*Jn):ft=1,Bt=0,qt=0,kt=0}M!==null?(Yt=M.x,se=M.y,Te=M.z):(Yt=0,se=0,Te=0);let xe=lt.convert(j.format),jt=lt.convert(j.type),Ie;j.isData3DTexture?(rt.setTexture3D(j,0),Ie=L.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(rt.setTexture2DArray(j,0),Ie=L.TEXTURE_2D_ARRAY):(rt.setTexture2D(j,0),Ie=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment);let be=L.getParameter(L.UNPACK_ROW_LENGTH),kn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ur=L.getParameter(L.UNPACK_SKIP_PIXELS),Hn=L.getParameter(L.UNPACK_SKIP_ROWS),Qr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ce.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ce.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Bt),L.pixelStorei(L.UNPACK_SKIP_ROWS,qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,kt);let Ye=C.isDataArrayTexture||C.isData3DTexture,Kn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){let Jn=W.get(C),Cn=W.get(j),Un=W.get(Jn.__renderTarget),Vc=W.get(Cn.__renderTarget);Y.bindFramebuffer(L.READ_FRAMEBUFFER,Un.__webglFramebuffer),Y.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vc.__webglFramebuffer);for(let As=0;As<ft;As++)Ye&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(C).__webglTexture,N,kt+As),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(j).__webglTexture,it,Te+As)),L.blitFramebuffer(Bt,qt,pt,Ct,Yt,se,pt,Ct,L.DEPTH_BUFFER_BIT,L.NEAREST);Y.bindFramebuffer(L.READ_FRAMEBUFFER,null),Y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(N!==0||C.isRenderTargetTexture||W.has(C)){let Jn=W.get(C),Cn=W.get(j);Y.bindFramebuffer(L.READ_FRAMEBUFFER,$n),Y.bindFramebuffer(L.DRAW_FRAMEBUFFER,_i);for(let Un=0;Un<ft;Un++)Ye?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Jn.__webglTexture,N,kt+Un):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Jn.__webglTexture,N),Kn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Cn.__webglTexture,it,Te+Un):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Cn.__webglTexture,it),N!==0?L.blitFramebuffer(Bt,qt,pt,Ct,Yt,se,pt,Ct,L.COLOR_BUFFER_BIT,L.NEAREST):Kn?L.copyTexSubImage3D(Ie,it,Yt,se,Te+Un,Bt,qt,pt,Ct):L.copyTexSubImage2D(Ie,it,Yt,se,Bt,qt,pt,Ct);Y.bindFramebuffer(L.READ_FRAMEBUFFER,null),Y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Kn?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Ie,it,Yt,se,Te,pt,Ct,ft,xe,jt,Ce.data):j.isCompressedArrayTexture?L.compressedTexSubImage3D(Ie,it,Yt,se,Te,pt,Ct,ft,xe,Ce.data):L.texSubImage3D(Ie,it,Yt,se,Te,pt,Ct,ft,xe,jt,Ce):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,it,Yt,se,pt,Ct,xe,jt,Ce.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,it,Yt,se,Ce.width,Ce.height,xe,Ce.data):L.texSubImage2D(L.TEXTURE_2D,it,Yt,se,pt,Ct,xe,jt,Ce);L.pixelStorei(L.UNPACK_ROW_LENGTH,be),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ur),L.pixelStorei(L.UNPACK_SKIP_ROWS,Hn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qr),it===0&&j.generateMipmaps&&L.generateMipmap(Ie),Y.unbindTexture()},this.initRenderTarget=function(C){W.get(C).__webglFramebuffer===void 0&&rt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?rt.setTextureCube(C,0):C.isData3DTexture?rt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?rt.setTexture2DArray(C,0):rt.setTexture2D(C,0),Y.unbindTexture()},this.resetState=function(){A=0,P=0,R=null,Y.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}};var Ti={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Vv=new ks(-1,1,1,-1,0,1),iu=class extends Le{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},Wv=new iu,Ai=class{constructor(t){this._mesh=new zt(Wv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Vv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ks=class extends Dn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fn.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ai(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vo=class extends Dn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},cc=class extends Dn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var hc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new $t);this._width=n.width,this._height=n.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ks(Ti),this.copyPass.material.blending=sn,this.clock=new Hs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vo!==void 0&&(o instanceof Vo?n=!0:o instanceof cc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new $t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var uc=class extends Dn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var md={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Vr=class s extends Dn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new $t(t.x,t.y):new $t(256,256),this.clearColor=new Lt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let f=new Ze(r,o,{type:un});f.texture.name="UnrealBloomPass.h"+l,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ze(r,o,{type:un});d.texture.name="UnrealBloomPass.v"+l,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=md;this.highPassUniforms=fn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new $t(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fn.clone(Ti.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:Ti.vertexShader,fragmentShader:Ti.fragmentShader,blending:Nn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Lt,this._oldClearAlpha=1,this._basic=new en,this._fsQuad=new Ai(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new $t(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new $t(.5,.5)},direction:{value:new $t(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Vr.BlurDirectionX=new $t(1,0);Vr.BlurDirectionY=new $t(0,1);var Wo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var fc=class extends Dn{constructor(){super(),this.uniforms=fn.clone(Wo.uniforms),this.material=new Ao({name:Wo.name,uniforms:this.uniforms,vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader}),this._fsQuad=new Ai(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ae.getTransfer(this._outputColorSpace)===De&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Nr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ml&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $t},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ot},cameraProjectionMatrixInverse:{value:new Ot},cameraWorldMatrix:{value:new Ot},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},qo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},dc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function gd(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=Xv(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],c=2*Math.PI*a/n,h=new U(Math.cos(c),Math.sin(c),0).normalize();i[o*4]=(h.x*.5+.5)*255,i[o*4+1]=(h.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new bi(i,t,t);return r.wrapS=ti,r.wrapT=ti,r.needsUpdate=!0,r}function Xv(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}var Yo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:su(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $t},cameraProjectionMatrixInverse:{value:new Ot},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function su(s,t,e){let n=qv(s,t,e),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function qv(s,t,e){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new U(Math.cos(r),Math.sin(r),o))}return n}var pc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,c=Math.floor(t+a),h=Math.floor(e+a),l=(3-Math.sqrt(3))/6,f=(c+h)*l,d=c-f,u=h-f,g=t-d,v=e-u,m,p;g>v?(m=1,p=0):(m=0,p=1);let _=g-m+l,b=v-p+l,y=g-1+2*l,w=v-1+2*l,A=c&255,P=h&255,R=this.perm[A+this.perm[P]]%12,S=this.perm[A+m+this.perm[P+p]]%12,E=this.perm[A+1+this.perm[P+1]]%12,z=.5-g*g-v*v;z<0?n=0:(z*=z,n=z*z*this._dot(this.grad3[R],g,v));let G=.5-_*_-b*b;G<0?i=0:(G*=G,i=G*G*this._dot(this.grad3[S],_,b));let F=.5-y*y-w*w;return F<0?r=0:(F*=F,r=F*F*this._dot(this.grad3[E],y,w)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a,h=(t+e+n)*.3333333333333333,l=Math.floor(t+h),f=Math.floor(e+h),d=Math.floor(n+h),u=1/6,g=(l+f+d)*u,v=l-g,m=f-g,p=d-g,_=t-v,b=e-m,y=n-p,w,A,P,R,S,E;_>=b?b>=y?(w=1,A=0,P=0,R=1,S=1,E=0):_>=y?(w=1,A=0,P=0,R=1,S=0,E=1):(w=0,A=0,P=1,R=1,S=0,E=1):b<y?(w=0,A=0,P=1,R=0,S=1,E=1):_<y?(w=0,A=1,P=0,R=0,S=1,E=1):(w=0,A=1,P=0,R=1,S=1,E=0);let z=_-w+u,G=b-A+u,F=y-P+u,O=_-R+2*u,X=b-S+2*u,$=y-E+2*u,T=_-1+3*u,V=b-1+3*u,tt=y-1+3*u,ht=l&255,bt=f&255,Tt=d&255,Nt=this.perm[ht+this.perm[bt+this.perm[Tt]]]%12,Gt=this.perm[ht+w+this.perm[bt+A+this.perm[Tt+P]]]%12,Kt=this.perm[ht+R+this.perm[bt+S+this.perm[Tt+E]]]%12,et=this.perm[ht+1+this.perm[bt+1+this.perm[Tt+1]]]%12,ct=.6-_*_-b*b-y*y;ct<0?i=0:(ct*=ct,i=ct*ct*this._dot3(this.grad3[Nt],_,b,y));let Pt=.6-z*z-G*G-F*F;Pt<0?r=0:(Pt*=Pt,r=Pt*Pt*this._dot3(this.grad3[Gt],z,G,F));let Wt=.6-O*O-X*X-$*$;Wt<0?o=0:(Wt*=Wt,o=Wt*Wt*this._dot3(this.grad3[Kt],O,X,$));let Rt=.6-T*T-V*V-tt*tt;return Rt<0?a=0:(Rt*=Rt,a=Rt*Rt*this._dot3(this.grad3[et],T,V,tt)),32*(i+r+o+a)}noise4d(t,e,n,i){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20,l,f,d,u,g,v=(t+e+n+i)*c,m=Math.floor(t+v),p=Math.floor(e+v),_=Math.floor(n+v),b=Math.floor(i+v),y=(m+p+_+b)*h,w=m-y,A=p-y,P=_-y,R=b-y,S=t-w,E=e-A,z=n-P,G=i-R,F=S>E?32:0,O=S>z?16:0,X=E>z?8:0,$=S>G?4:0,T=E>G?2:0,V=z>G?1:0,tt=F+O+X+$+T+V,ht=o[tt][0]>=3?1:0,bt=o[tt][1]>=3?1:0,Tt=o[tt][2]>=3?1:0,Nt=o[tt][3]>=3?1:0,Gt=o[tt][0]>=2?1:0,Kt=o[tt][1]>=2?1:0,et=o[tt][2]>=2?1:0,ct=o[tt][3]>=2?1:0,Pt=o[tt][0]>=1?1:0,Wt=o[tt][1]>=1?1:0,Rt=o[tt][2]>=1?1:0,nt=o[tt][3]>=1?1:0,Ft=S-ht+h,L=E-bt+h,Dt=z-Tt+h,It=G-Nt+h,St=S-Gt+2*h,Y=E-Kt+2*h,q=z-et+2*h,W=G-ct+2*h,rt=S-Pt+3*h,wt=E-Wt+3*h,Ut=z-Rt+3*h,I=G-nt+3*h,x=S-1+4*h,D=E-1+4*h,B=z-1+4*h,H=G-1+4*h,k=m&255,J=p&255,Q=_&255,st=b&255,xt=a[k+a[J+a[Q+a[st]]]]%32,K=a[k+ht+a[J+bt+a[Q+Tt+a[st+Nt]]]]%32,at=a[k+Gt+a[J+Kt+a[Q+et+a[st+ct]]]]%32,Et=a[k+Pt+a[J+Wt+a[Q+Rt+a[st+nt]]]]%32,lt=a[k+1+a[J+1+a[Q+1+a[st+1]]]]%32,yt=.6-S*S-E*E-z*z-G*G;yt<0?l=0:(yt*=yt,l=yt*yt*this._dot4(r[xt],S,E,z,G));let Xt=.6-Ft*Ft-L*L-Dt*Dt-It*It;Xt<0?f=0:(Xt*=Xt,f=Xt*Xt*this._dot4(r[K],Ft,L,Dt,It));let Z=.6-St*St-Y*Y-q*q-W*W;Z<0?d=0:(Z*=Z,d=Z*Z*this._dot4(r[at],St,Y,q,W));let vt=.6-rt*rt-wt*wt-Ut*Ut-I*I;vt<0?u=0:(vt*=vt,u=vt*vt*this._dot4(r[Et],rt,wt,Ut,I));let _t=.6-x*x-D*D-B*B-H*H;return _t<0?g=0:(_t*=_t,g=_t*_t*this._dot4(r[lt],x,D,B,H)),27*(l+f+d+u+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}};var Wr=class s extends Dn{constructor(t,e,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=gd(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ze(this.width,this.height,{type:un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Se({defines:Object.assign({},Xo.defines),uniforms:fn.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,blending:sn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ro,this.normalMaterial.blending=sn,this.pdMaterial=new Se({defines:Object.assign({},Yo.defines),uniforms:fn.clone(Yo.uniforms),vertexShader:Yo.vertexShader,fragmentShader:Yo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Se({defines:Object.assign({},qo.defines),uniforms:fn.clone(qo.uniforms),vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader,blending:sn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Se({uniforms:fn.clone(Ti.uniforms),vertexShader:Ti.vertexShader,fragmentShader:Ti.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:No,blendDst:Gs,blendEquation:Wn,blendSrcAlpha:Uo,blendDstAlpha:Gs,blendEquationAlpha:Wn}),this.blendMaterial=new Se({uniforms:fn.clone(dc.uniforms),vertexShader:dc.vertexShader,fragmentShader:dc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:sl,blendSrc:No,blendDst:Gs,blendEquation:Wn,blendSrcAlpha:Uo,blendDstAlpha:Gs,blendEquationAlpha:Wn}),this._fsQuad=new Ai(null),this._originalClearColor=new Lt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Os,this.depthTexture.format=hs,this.depthTexture.type=cs,this.normalRenderTarget=new Ze(this.width,this.height,{minFilter:Mn,magFilter:Mn,type:un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=su(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=sn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=sn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new pc,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let c=o,h=a;i[(o*t+a)*4]=(e.noise(c,h)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(c+t,h)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(c,h+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(c+t,h+t)*.5+.5)*255}let r=new bi(i,t,t,Fn,qn);return r.wrapS=ti,r.wrapT=ti,r.needsUpdate=!0,r}};Wr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var xd={ultra:{label:"Ultra",pixelRatio:2,msaa:4,shadow:4096,shadowRange:150,ao:!0,reflections:.75,bloom:!0,grade:!0,shafts:!0},high:{label:"High",pixelRatio:1.5,msaa:4,shadow:2048,shadowRange:120,ao:!1,reflections:.5,bloom:!0,grade:!0,shafts:!0},medium:{label:"Balanced",pixelRatio:1.2,msaa:2,shadow:2048,shadowRange:90,ao:!1,reflections:0,bloom:!0,grade:!0,shafts:!0},low:{label:"Performance",pixelRatio:1,msaa:0,shadow:1024,shadowRange:70,ao:!1,reflections:0,bloom:!1,grade:!1,shafts:!1}},ru=class extends Wr{_overrideVisibility(){super._overrideVisibility(),this.scene.traverseVisible(t=>{t.userData.noAO&&(t.visible=!1,this._visibilityCache.push(t))})}},Yv={uniforms:{tDiffuse:{value:null},time:{value:0},resolution:{value:new $t(1,1)},speedBlur:{value:0},camBlur:{value:new $t},aberration:{value:.0015},vignette:{value:.32},grain:{value:.035},sunPos:{value:new $t(.5,.5)},sunVisible:{value:0},sunColor:{value:new Lt(1,.7,.4)},flash:{value:0},night:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float time, speedBlur, aberration, vignette, grain, sunVisible, flash, night;
    uniform vec2 resolution, sunPos, camBlur;
    uniform vec3 sunColor;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    vec3 sampleCA(vec2 uv, float amount) {
      vec2 d = (uv - 0.5) * amount;
      return vec3(texture2D(tDiffuse, uv - d).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv + d).b);
    }
    float ghost(vec2 uv, vec2 c, float r) {
      vec2 d = (uv - c) * vec2(resolution.x / resolution.y, 1.0);
      return smoothstep(r, r * 0.55, length(d));
    }
    void main() {
      vec2 uv = vUv;
      vec2 fromCenter = uv - 0.5;
      float edge = dot(fromCenter, fromCenter);
      vec3 col = sampleCA(uv, aberration * (1.0 + edge * 6.0) + speedBlur * 0.004);
      // Motion blur: radial streaks toward the edges at speed, plus a directional smear when
      // the camera swings round. The car itself moves with the camera, so it stays sharp.
      float radial = speedBlur * 0.055 * smoothstep(0.02, 0.25, edge);
      float carMask = smoothstep(0.035, 0.13, length((uv - vec2(0.5, 0.33)) * vec2(1.0, 1.5)));
      vec2 swing = camBlur * carMask;
      if (radial > 0.0004 || dot(swing, swing) > 1e-7) {
        vec3 acc = col;
        float w = 1.0;
        for (int i = 1; i <= 6; i++) {
          float k = float(i) / 6.0;
          vec2 suv = uv - fromCenter * k * radial - swing * (k - 0.5);
          float wk = 1.0 - k * 0.5;
          acc += texture2D(tDiffuse, suv).rgb * wk;
          w += wk;
        }
        col = acc / w;
      }
      // Lens flare: ghosts mirrored through the center, a halo and an anamorphic streak.
      if (sunVisible > 0.001) {
        vec2 axis = vec2(0.5) - sunPos;
        vec3 flare = vec3(0.0);
        flare += vec3(1.0, 0.55, 0.3) * ghost(uv, sunPos + axis * 0.55, 0.035) * 0.25;
        flare += vec3(0.4, 0.8, 1.0) * ghost(uv, sunPos + axis * 1.25, 0.06) * 0.18;
        flare += vec3(1.0, 0.85, 0.45) * ghost(uv, sunPos + axis * 1.6, 0.025) * 0.35;
        flare += vec3(0.6, 1.0, 0.7) * ghost(uv, sunPos + axis * 2.1, 0.09) * 0.08;
        vec2 sd = (uv - sunPos) * vec2(resolution.x / resolution.y, 1.0);
        float halo = smoothstep(0.03, 0.0, abs(length(sd) - 0.32)) * 0.12;
        float streak = exp(-abs(sd.y) * 260.0) * exp(-abs(sd.x) * 2.2) * 0.45;
        float glow = exp(-length(sd) * 7.0) * 0.18;
        col += (flare + vec3(halo) + vec3(streak) * vec3(1.0, 0.8, 0.55) + glow) * sunColor * sunVisible;
      }
      // Grade: gentle S-curve, cool shadows, warm highlights.
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(luma), col, 1.08 + night * 0.06);
      vec3 shadowTint = mix(vec3(0.94, 1.0, 1.06), vec3(0.9, 0.97, 1.12), night);
      vec3 highTint = vec3(1.04, 1.0, 0.95);
      col *= mix(shadowTint, highTint, smoothstep(0.1, 0.75, luma));
      col = mix(col, col * col * (3.0 - 2.0 * col), 0.22);
      col += flash * vec3(1.0, 0.95, 0.85) * 0.35;
      // Vignette, grain and dithering.
      col *= 1.0 - vignette * smoothstep(0.08, 0.62, edge * 1.6);
      float n = hash(uv * resolution + fract(time * 7.13) * 100.0) - 0.5;
      col += n * grain * (1.0 - luma * 0.6);
      col += (hash(uv * resolution * 1.37) - 0.5) / 255.0;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`},Zv={uniforms:{tDiffuse:{value:null},sunPos:{value:new $t(.5,.5)},strength:{value:0},color:{value:new Lt(1,.7,.4)},aspect:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 sunPos;
    uniform float strength, aspect;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      vec3 base = texture2D(tDiffuse, vUv).rgb;
      if (strength < 0.002) { gl_FragColor = vec4(base, 1.0); return; }
      vec2 delta = sunPos - vUv;
      float dist = length(delta * vec2(aspect, 1.0));
      vec2 stepv = delta * (0.9 / 30.0);
      vec2 uv = vUv;
      float illum = 0.0, decay = 1.0;
      for (int i = 0; i < 30; i++) {
        uv += stepv;
        vec3 c = texture2D(tDiffuse, clamp(uv, 0.001, 0.999)).rgb;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        illum += smoothstep(1.0, 3.0, l) * decay;
        decay *= 0.965;
      }
      illum /= 30.0;
      // Rays show against what blocks the sun; open sky is already bright and gains little.
      float baseLum = dot(base, vec3(0.2126, 0.7152, 0.0722));
      float contrast = 1.0 - 0.8 * smoothstep(0.5, 2.2, baseLum);
      gl_FragColor = vec4(base + color * illum * strength * contrast * exp(-dist * 2.0), 1.0);
    }`},mc=class{constructor(t){this.renderer=new ac({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1});let e=this.renderer;e.toneMapping=Nr,e.toneMappingExposure=.85,e.shadowMap.enabled=!0,e.shadowMap.type=il,this.quality=null,this.scale=1,this.frameTimes=[],this.adaptTimer=0}init(t,e){this.scene=t,this.camera=e}buildComposer(){let t=this.quality,e=this.renderer;if(this.composer){this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose();for(let r of this.composer.passes)r.dispose?.()}let n=e.getSize(new $t),i=new Ze(n.x,n.y,{type:un,samples:t.msaa});this.composer=new hc(e,i),this.composer.addPass(new uc(this.scene,this.camera)),this.ao=null,t.ao&&(this.ao=new ru(this.scene,this.camera,n.x,n.y),this.ao.output=Wr.OUTPUT.Default,this.ao.blendIntensity=.85,this.ao.updateGtaoMaterial({radius:1.6,distanceExponent:1.6,thickness:2.5,scale:1.4,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.composer.addPass(this.ao)),this.shafts=new Ks(Zv),this.shafts.enabled=t.shafts,this.composer.addPass(this.shafts),this.bloom=new Vr(new $t(n.x,n.y),.42,.62,.92),this.bloom.enabled=t.bloom,this.composer.addPass(this.bloom),this.composer.addPass(new fc),this.grade=new Ks(Yv),this.grade.enabled=!0,t.grade||(this.grade.uniforms.grain.value=0,this.grade.uniforms.aberration.value=0),this.composer.addPass(this.grade),this.applySize()}setQuality(t){this.quality=xd[t]||xd.high,this.qualityName=t,this.scale=1,this.renderer.shadowMap.enabled=!0,this.buildComposer()}applySize(){let t=innerWidth,e=innerHeight,n=Math.min(devicePixelRatio||1,this.quality.pixelRatio)*this.scale;this.renderer.setPixelRatio(n),this.renderer.setSize(t,e),this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.grade.uniforms.resolution.value.set(t*n,e*n),this.shafts.uniforms.aspect.value=t/e,this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.onResize?.()}adapt(t){if(this.frameTimes.push(t),this.frameTimes.length>90&&this.frameTimes.shift(),this.adaptTimer+=t,this.adaptTimer<2||this.frameTimes.length<60)return;this.adaptTimer=0;let e=[...this.frameTimes].sort((r,o)=>r-o),n=e[Math.floor(e.length/2)],i=this.scale;n>1/45?i=Math.max(.6,this.scale-.1):n<1/58&&this.scale<1&&(i=Math.min(1,this.scale+.05)),Math.abs(i-this.scale)>.001&&(this.scale=i,this.applySize())}render(){this.composer.render()}};var Xr=`
float pa_hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * .1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 pa_hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float pa_hash13(vec3 p3) {
  p3 = fract(p3 * .1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
float pa_noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(pa_hash12(i), pa_hash12(i + vec2(1, 0)), u.x),
             mix(pa_hash12(i + vec2(0, 1)), pa_hash12(i + vec2(1, 1)), u.x), u.y);
}
float pa_fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * pa_noise(p); p = p * 2.03 + 17.1; a *= 0.5; }
  return v;
}
float pa_fbm3(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) { v += a * pa_noise(p); p = p * 2.07 + 11.3; a *= 0.5; }
  return v;
}
// Anti-aliased box/stripe helpers. w is the filter width from fwidth().
float pa_aastep(float edge, float x, float w) {
  w = max(w, 1e-5); // smoothstep is undefined when its edges are equal
  return smoothstep(edge - w, edge + w, x);
}
float pa_band(float x, float lo, float hi, float w) {
  return pa_aastep(lo, x, w) - pa_aastep(hi, x, w);
}
`,gc=`
uniform vec3 skySunDir;
uniform float skyTurbidity;
uniform float skyRayleigh;
uniform float skyMie;
uniform float skyMieG;
uniform float skyIntensity;
uniform float skyCloudCover;
uniform float skyTime;
uniform float skyNight;
uniform vec3 skyMoonDir;
uniform vec3 skyCloudLit;
uniform vec3 skyCloudShade;

const float PA_PI = 3.141592653589793;
const vec3 PA_TOTAL_RAYLEIGH = vec3(5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5);
const vec3 PA_MIE_CONST = vec3(1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14);

float pa_sunIntensity(float zenithAngleCos) {
  zenithAngleCos = clamp(zenithAngleCos, -1.0, 1.0);
  return 1000.0 * max(0.0, 1.0 - pow(2.718281828, -((1.6110731556870734 - acos(zenithAngleCos)) / 1.5)));
}

vec3 pa_atmosphere(vec3 dir, bool withDisc) {
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 sunDir = skySunDir;
  float sunE = pa_sunIntensity(dot(sunDir, up));
  float sunfade = 1.0 - clamp(1.0 - exp(sunDir.y * 450000.0 / 450000.0 * 2.2), 0.0, 1.0);
  float rayleighCoefficient = skyRayleigh - (1.0 - sunfade);
  vec3 betaR = PA_TOTAL_RAYLEIGH * rayleighCoefficient;
  vec3 betaM = 0.434 * (0.2 * skyTurbidity * 10E-18) * PA_MIE_CONST * skyMie;

  // Treat directions slightly below the horizon as horizon, so the haze wraps under it.
  vec3 d = normalize(vec3(dir.x, max(dir.y, 0.0) + 0.0001, dir.z));
  float zenithAngle = acos(max(0.0, dot(up, d)));
  float inverse = 1.0 / (cos(zenithAngle) + 0.15 * pow(93.885 - (zenithAngle * 180.0) / PA_PI, -1.253));
  float sR = 8.4E3 * inverse;
  float sM = 1.25E3 * inverse;
  vec3 Fex = exp(-(betaR * sR + betaM * sM));
  float cosTheta = dot(d, sunDir);
  float rPhase = 0.05968310365946075 * (1.0 + pow(cosTheta * 0.5 + 0.5, 2.0));
  float g2 = skyMieG * skyMieG;
  float mPhase = 0.07957747154594767 * ((1.0 - g2) / pow(1.0 - 2.0 * skyMieG * cosTheta + g2, 1.5));
  vec3 betaRTheta = betaR * rPhase;
  vec3 betaMTheta = betaM * mPhase;
  vec3 Lin = pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * (1.0 - Fex), vec3(1.5));
  Lin *= mix(vec3(1.0), pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * Fex, vec3(0.5)),
             clamp(pow(1.0 - dot(up, sunDir), 5.0), 0.0, 1.0));
  vec3 L0 = vec3(0.1) * Fex;
  if (withDisc) {
    float cosSun = dot(normalize(dir), sunDir);
    float disc = smoothstep(0.99990, 0.99996, cosSun);
    L0 += sunE * 19000.0 * Fex * disc * step(-0.01, dir.y);
  }
  vec3 col = (Lin + L0) * 0.04 + vec3(0.0, 0.0003, 0.00075);
  col = pow(col, vec3(1.0 / (1.2 + 1.2 * sunfade)));
  return col;
}

float pa_cloudNoise(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 6; i++) { v += a * pa_noise(p); p = r * p * 2.02 + 3.7; a *= 0.5; }
  return v;
}

// Returns the sky radiance (pre-exposure, linear-ish) for a world direction.
vec3 pa_sky(vec3 dir, bool withDisc, bool withClouds) {
  dir = normalize(dir);
  vec3 col = pa_atmosphere(dir, withDisc);
  float day = smoothstep(-0.12, 0.08, skySunDir.y);

  // Night sky: deep blue gradient, moon glow and stars.
  vec3 night = mix(vec3(0.010, 0.016, 0.034), vec3(0.002, 0.004, 0.012), clamp(dir.y * 1.6, 0.0, 1.0));
  night += vec3(0.05, 0.035, 0.03) * exp(-max(dir.y, 0.0) * 9.0) * 0.6; // city light pollution
  float moonCos = dot(dir, skyMoonDir);
  night += vec3(0.55, 0.62, 0.75) * smoothstep(0.9993, 0.9996, moonCos) * 2.0;
  night += vec3(0.05, 0.07, 0.11) * pow(max(moonCos, 0.0), 40.0);
  if (dir.y > 0.0) {
    vec3 sd = dir * 380.0;
    float s = pa_hash13(floor(sd));
    vec3 cellPos = fract(sd) - 0.5;
    float star = smoothstep(0.996, 1.0, s) * smoothstep(0.42, 0.0, length(cellPos));
    star *= 0.6 + 0.4 * sin(skyTime * 3.0 + s * 80.0);
    night += vec3(0.9, 0.92, 1.0) * star * smoothstep(0.0, 0.25, dir.y) * 1.4;
  }
  col = col * day + night * skyNight;

  if (withClouds && dir.y > 0.0) {
    // Project onto a flat cloud deck. Two layers: puffy low cumulus and high wispy cirrus.
    vec2 uv = dir.xz / (dir.y + 0.08);
    vec2 wind = vec2(skyTime * 0.004, skyTime * 0.0015);
    float n = pa_cloudNoise(uv * 1.4 + wind);
    float cover = skyCloudCover;
    float dens = smoothstep(1.0 - cover, 1.0 - cover + 0.32, n);
    float cirrus = pa_fbm(vec2(uv.x * 0.6, uv.y * 3.5) + wind * 2.0);
    cirrus = smoothstep(0.55, 0.95, cirrus) * 0.45;
    // Fake self shadowing: sample toward the sun.
    vec2 toSun = normalize(skySunDir.xz + 1e-4) * 0.06;
    float nShadow = pa_cloudNoise(uv * 1.4 + wind + toSun);
    float lit = clamp(0.5 + (n - nShadow) * 6.0, 0.0, 1.0);
    float sunCos = max(dot(dir, skySunDir), 0.0);
    float silver = pow(sunCos, 12.0) * 2.5 + pow(sunCos, 3.0) * 0.6;
    vec3 cloudCol = mix(skyCloudShade, skyCloudLit, lit) * (1.0 + silver);
    float horizonFade = smoothstep(0.0, 0.12, dir.y);
    float alpha = clamp(dens * 0.92 + cirrus, 0.0, 1.0) * horizonFade;
    // Clouds dissolve into the haze near the horizon.
    cloudCol = mix(cloudCol, col, 1.0 - smoothstep(0.0, 0.35, dir.y) * 0.85);
    col = mix(col, cloudCol, alpha);
  }
  return col * skyIntensity;
}
`;var vc={golden:19.22,dusk:19.95,night:23.2,dawn:6.9,noon:13.2},vd=6.4,$v=19.7,rn={skySunDir:{value:new U(-.9,.12,-.3).normalize()},skyMoonDir:{value:new U(.6,.5,.4).normalize()},skyTurbidity:{value:6},skyRayleigh:{value:2.2},skyMie:{value:.006},skyMieG:{value:.82},skyIntensity:{value:.75},skyCloudCover:{value:.42},skyTime:{value:0},skyNight:{value:0},skyCloudLit:{value:new Lt},skyCloudShade:{value:new Lt},fogSunColor:{value:new Lt},fogSunDir:{value:new U},fogHeightFalloff:{value:.012},nightFactor:{value:0},worldTime:{value:0}};oe.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorld;
#endif`;oe.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorld = transpose(mat3(viewMatrix)) * (mvPosition.xyz - viewMatrix[3].xyz);
#endif`;oe.fog_pars_fragment=`
#ifdef USE_FOG
  uniform vec3 fogColor;
  uniform float fogDensity;
  uniform vec3 fogSunColor;
  uniform vec3 fogSunDir;
  uniform float fogHeightFalloff;
  varying float vFogDepth;
  varying vec3 vFogWorld;
  vec3 pa_applyFog(vec3 color, vec3 worldPos) {
    vec3 ray = worldPos - cameraPosition;
    float dist = length(ray);
    vec3 dir = ray / max(dist, 1e-4);
    float k = fogHeightFalloff;
    float kdy = clamp(k * ray.y, -20.0, 20.0);
    float heightTerm = exp(-k * max(cameraPosition.y, 0.0)) * (abs(kdy) > 0.001 ? (1.0 - exp(-kdy)) / kdy : 1.0);
    float amount = 1.0 - exp(-fogDensity * dist * heightTerm);
    float sunAmt = pow(max(dot(dir, fogSunDir), 0.0), 7.0);
    vec3 fogCol = mix(fogColor, fogSunColor, sunAmt);
    return mix(color, fogCol, clamp(amount, 0.0, 1.0));
  }
#endif`;oe.fog_fragment=`
#ifdef USE_FOG
  gl_FragColor.rgb = pa_applyFog(gl_FragColor.rgb, vFogWorld);
#endif`;function Kv(s){if(s.userData.atmo)return s;s.userData.atmo=!0;let t=s.onBeforeCompile,e=s.customProgramCacheKey();return s.onBeforeCompile=function(n,i){t.call(this,n,i),n.uniforms.fogSunColor=rn.fogSunColor,n.uniforms.fogSunDir=rn.fogSunDir,n.uniforms.fogHeightFalloff=rn.fogHeightFalloff},s.customProgramCacheKey=()=>e+"|atmo",s}function _d(s){s.traverse(t=>{if(t.material)for(let e of Array.isArray(t.material)?t.material:[t.material])e.isShaderMaterial||e.isRawShaderMaterial||Kv(e)})}var Jv=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,jv=`
${Xr}
${gc}
varying vec3 vDir;
uniform float skyClouds;
uniform float skyDisc;
void main() {
  vec3 dir = normalize(vDir);
  vec3 col = pa_sky(dir, skyDisc > 0.5, skyClouds > 0.5);
  // The lighting probe clamps the bright Mie glow around the sun for the same reason.
  if (skyDisc < 0.5) col = min(col, vec3(1.4));
  // Below the horizon fade to the haze color so the far ocean edge blends in.
  gl_FragColor = vec4(col, 1.0);
}`;function yd(s=!0,t=!0){return new Se({uniforms:{...rn,skyClouds:{value:s?1:0},skyDisc:{value:t?1:0}},vertexShader:Jv,fragmentShader:jv,side:bn,depthWrite:!1,depthTest:!0,fog:!1})}var Qv=new U(0,1,0),ty=new U,ey=new U,ou=new U,ve=(s,t,e)=>new Lt(s,t,e),Js=(s,t,e)=>{if(e<=t[0][0])return s.copy(t[0][1]);for(let n=1;n<t.length;n++)if(e<=t[n][0]){let[i,r]=t[n-1],[o,a]=t[n];return s.copy(r).lerp(a,(e-i)/(o-i))}return s.copy(t[t.length-1][1])},Vi=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e];return i+(o-i)*(t-n)/(r-n)}return s[s.length-1][1]},ny=[[-6,ve(.9,.35,.2)],[0,ve(1,.34,.1)],[4,ve(1,.47,.19)],[10,ve(1,.66,.38)],[25,ve(1,.88,.74)],[60,ve(1,.97,.92)]],iy=[[-4,0],[0,1.6],[4,4.6],[12,5],[40,5.2]],sy=[[-15,ve(.06,.09,.18)],[-4,ve(.22,.24,.42)],[2,ve(.62,.55,.62)],[12,ve(.6,.7,.85)],[40,ve(.62,.76,.95)]],ry=[[-15,ve(.05,.05,.06)],[0,ve(.35,.24,.2)],[15,ve(.42,.36,.3)],[40,ve(.45,.42,.38)]],oy=[[-15,.4],[-4,.42],[3,.32],[12,.45],[30,.6]],ay=[[-15,ve(.03,.04,.075)],[-5,ve(.15,.15,.26)],[0,ve(.42,.33,.38)],[6,ve(.58,.45,.42)],[18,ve(.55,.62,.72)],[50,ve(.55,.66,.8)]],ly=[[-15,ve(.05,.06,.1)],[-5,ve(.4,.24,.22)],[0,ve(1.15,.5,.22)],[6,ve(1.2,.68,.38)],[20,ve(.9,.84,.76)],[50,ve(.75,.8,.86)]],cy=[[-12,ve(.04,.05,.08)],[-5,ve(.45,.25,.32)],[0,ve(1.8,.72,.42)],[5,ve(1.9,1.1,.7)],[15,ve(1.5,1.4,1.35)],[50,ve(1.5,1.5,1.5)]],hy=[[-12,ve(.02,.025,.04)],[-5,ve(.18,.13,.22)],[0,ve(.42,.26,.34)],[5,ve(.6,.45,.48)],[15,ve(.62,.66,.74)],[50,ve(.7,.74,.8)]],uy=[[-15,7e-4],[-3,8e-4],[3,85e-5],[15,6e-4],[50,45e-5]],fy=[[-15,1.35],[-5,1.2],[0,1.05],[6,.92],[20,.76],[50,.68]],dy=[[-15,.5],[-4,.45],[2,.36],[12,.45],[30,.6]],xc=class{constructor(t,e){this.renderer=t,this.scene=e,this.hours=vc.golden,this.cycle=!1,this.cycleSpeed=24/2880,this.sky=new zt(new Jt(1,1,1),yd(!0)),this.sky.scale.setScalar(2e3),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.userData.noAO=!0,e.add(this.sky),this.probeScene=new Fs,this.probeSky=new zt(new Jt(1,1,1),yd(!0,!1)),this.probeSky.scale.setScalar(100),this.probeScene.add(this.probeSky);let n=new zt(new Eo(60,24),new en({color:1776156}));n.rotation.x=-Math.PI/2,n.position.y=-2,this.probeGround=n,this.probeScene.add(n),this.pmrem=new Hr(t),this.envTarget=null,this.envDirty=!0,this.envTimer=0,this.lastEnvHours=-100,this.sun=new Do(16777215,3),this.sun.castShadow=!0,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.06,this.shadowRange=110,e.add(this.sun,this.sun.target),this.hemi=new Po(16777215,4473924,1),e.add(this.hemi),e.fog=new Mo(12687759,.0016),this.sunDir=new U,this.moonDir=new U,this.lightDir=new U,this.nightFactor=0,this.elevation=0,this.exposure=.8,this.apply()}setHours(t){this.hours=(t%24+24)%24,this.envDirty=!0,this.apply()}setShadowQuality(t,e){this.sun.shadow.mapSize.set(t,t),this.shadowRange=e,this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=n.bottom=-e,n.right=n.top=e,n.near=1,n.far=900,n.updateProjectionMatrix()}computeSun(t,e){let n=(t-vd)/($v-vd),i=Math.PI*n,r=Math.asin(Math.sin(i)*Math.sin(Ee.degToRad(64))),o=Math.cos(i),a=Math.sin(i)*.6-.32,c=Math.hypot(o,a)||1;return e.set(o/c*Math.cos(r),Math.sin(r),a/c*Math.cos(r)).normalize(),Ee.radToDeg(r)}apply(){let t=rn,e=this.computeSun(this.hours,this.sunDir);this.elevation=e,this.computeSun(this.hours+12.4,this.moonDir),this.moonDir.y=Math.max(this.moonDir.y,.25),this.moonDir.normalize(),t.skySunDir.value.copy(this.sunDir),t.skyMoonDir.value.copy(this.moonDir);let n=Ee.smoothstep(-e,-2,9),i=Ee.smoothstep(-e,-7,1.5);this.nightFactor=n,this.lampFactor=i,t.nightFactor.value=i,t.skyNight.value=n,t.skyTurbidity.value=Vi([[-5,3.5],[2,5.5],[10,4.5],[40,2.6]],e),t.skyRayleigh.value=Vi([[-5,1.6],[2,2.8],[10,2],[40,1.2]],e),t.skyMie.value=Vi([[0,.006],[10,.005],[40,.004]],e),t.skyIntensity.value=Vi([[-8,.6],[0,.72],[20,.62],[50,.55]],e),Js(t.skyCloudLit.value,cy,e),Js(t.skyCloudShade.value,hy,e);let r=e>-1.5;this.lightDir.copy(r?this.sunDir:this.moonDir),r?(Js(this.sun.color,ny,e),this.sun.intensity=Vi(iy,e)):(this.sun.color.setRGB(.55,.65,.95),this.sun.intensity=.32*n),this.lightDir.y<.08&&(this.lightDir.y=.08,this.lightDir.normalize()),Js(this.hemi.color,sy,e),Js(this.hemi.groundColor,ry,e),this.hemi.intensity=Vi(oy,e),Js(this.scene.fog.color,ay,e),Js(t.fogSunColor.value,ly,e),t.fogSunDir.value.copy(this.sunDir),this.scene.fog.density=Vi(uy,e),this.exposure=Vi(fy,e),this.scene.environmentIntensity=Vi(dy,e),this.probeGround.material.color.copy(this.hemi.groundColor).multiplyScalar(.25)}regenerateEnvironment(){let t=this.envTarget;this.envTarget=this.pmrem.fromScene(this.probeScene,0,.1,400),this.scene.environment=this.envTarget.texture,t&&t.dispose(),this.envDirty=!1,this.lastEnvHours=this.hours}update(t,e,n,i){rn.skyTime.value=e,rn.worldTime.value=e,this.cycle&&(this.hours=(this.hours+t*this.cycleSpeed)%24,this.apply(),Math.abs(this.hours-this.lastEnvHours)>.12&&(this.envDirty=!0)),this.envDirty&&this.regenerateEnvironment(),this.sky.position.copy(i.position);let o=this.shadowRange*2/this.sun.shadow.mapSize.x,a=ty.crossVectors(Qv,this.lightDir).normalize(),c=ey.crossVectors(this.lightDir,a),h=Math.round(n.dot(a)/o)*o,l=Math.round(n.dot(c)/o)*o,f=n.dot(this.lightDir);ou.copy(a).multiplyScalar(h).addScaledVector(c,l).addScaledVector(this.lightDir,f),this.sun.target.position.copy(ou),this.sun.position.copy(ou).addScaledVector(this.lightDir,450),this.sun.target.updateMatrixWorld()}get clockLabel(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};function zn(s,t,e){let n=t.isMaterial?t:new Ht(t);return n.onBeforeCompile=i=>{Object.assign(i.uniforms,e.uniforms||{}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPaWorld;
varying vec3 vPaNormalW;
${e.vertexPars||""}`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        {
          vec4 paW = vec4(transformed, 1.0);
          vec3 paN = objectNormal;
          #ifdef USE_INSTANCING
            paW = instanceMatrix * paW;
            paN = mat3(instanceMatrix) * paN;
          #endif
          paW = modelMatrix * paW;
          vPaWorld = paW.xyz;
          vPaNormalW = normalize(mat3(modelMatrix) * paN);
        }
        ${e.vertex||""}`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPaWorld;
varying vec3 vPaNormalW;
${Xr}
${e.fragmentPars||""}`).replace("#include <color_fragment>",`#include <color_fragment>
${e.color||""}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${e.roughness||""}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${e.metalness||""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${e.normal||""}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${e.emissive||""}`)},n.customProgramCacheKey=()=>"pa-"+s,n}function We(s,t,e,n,{srgb:i=!0,repeat:r=!1}={}){let o=document.createElement("canvas");o.width=t,o.height=e,n(o.getContext("2d"),t,e);let a=new zs(o);return i&&(a.colorSpace=_n),a.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),r&&(a.wrapS=a.wrapT=ti),a}var Md=(s,t)=>{let e=[];for(let n=s;n<=t;n+=160)e.push(n);return e},me=Md(-320,1600),ge=Md(-1600,1600),ze=me[0],we=me[me.length-1],_e=ge[0],Re=ge[ge.length-1],ne=13,di=6,Zo=[3.4,9.2],Qt=.16,An=-418,au=-.62,je={from:-333,to:-342},on=-357,ce={minX:-412,maxX:we+32,minZ:_e-76,maxZ:Re+76},qr=me.slice(0,-1).map(s=>s+160/2),us=ge.slice(0,-1).map(s=>s+160/2),ii=160-ne*2,Ri={rampStart:-342,x0:-374,x1:-556,z:-160,halfWidth:9,deckY:2.6},Rn=[Ri,{rampStart:-342,x0:-374,x1:-640,z:1120,halfWidth:7,deckY:2.6,plain:!0}];function js(s,t){for(let e of Rn)if(Math.abs(t-e.z)<=e.halfWidth&&s<=e.rampStart&&s>=e.x1)return e;return null}function fs(s,t){let e=js(s,t);return e?s>e.x0?Qt+(e.deckY-Qt)*(e.rampStart-s)/(e.rampStart-e.x0):e.deckY:null}var vn={sunset:{name:"SUNSET RUN",blurb:"The classic loop round the old town.",route:[[-320,40],[-320,-300],[-170,-320],[-6,-320],[150,-320],[160,-10],[10,160],[-300,160]]},downtown:{name:"DOWNTOWN DASH",blurb:"A loop through the towers and back to the pier.",route:[[-320,-300],[10,-320],[330,-320],[630,-320],[640,-470],[640,-790],[950,-800],[960,-490],[960,-170],[650,-160],[330,-160],[10,-160],[-300,-160]],start:{x:-320+3.4,z:30,heading:0}},grand:{name:"GRAND TOUR",blurb:"The whole city, coast to foothills.",route:[[-320,40],[-320,-620],[-320,-1270],[-310,-1600],[470,-1600],[1270,-1600],[1600,-1590],[1600,-810],[1600,-10],[1600,790],[1600,1590],[810,1600],[10,1600],[-320,1590],[-320,970],[-320,420]]}},BS=vn.sunset.route,yc=15,Xi=[{axis:"ns",road:-160,s:-240,side:1},{axis:"ns",road:0,s:-80,side:-1},{axis:"ns",road:160,s:80,side:1},{axis:"ns",road:0,s:400,side:1},{axis:"ns",road:-320,s:-400,side:1},{axis:"ns",road:320,s:-240,side:-1},{axis:"ew",road:-320,s:-80,side:1},{axis:"ew",road:0,s:80,side:-1},{axis:"ew",road:160,s:-240,side:1},{axis:"ew",road:320,s:240,side:-1},{axis:"ew",road:-160,s:240,side:1},{axis:"ew",road:480,s:-80,side:-1}];for(let s of[-320,0,640,960,1280,1600])for(let t=0,e=_e+80+(s===0?160:0);e<Re;e+=480,t++)Math.abs(e)<520&&s<=320||Xi.push({axis:"ns",road:s,s:e,side:t%2?1:-1});for(let s of[-1280,-800,-480,800,1280])for(let t=0,e=ze+240;e<we;e+=480,t++)Math.abs(s)<520&&e<=320||Xi.push({axis:"ew",road:s,s:e,side:t%2?-1:1});function Qs(s,t=15.4){return s.axis==="ns"?[s.road+s.side*t,s.s]:[s.s,s.road+s.side*t]}var an={x:-320+Zo[0],z:246,heading:0},bd=(s,t,e)=>Math.min(Math.max(Math.round((s-t)/160)*160+t,t),e),qi=s=>bd(s,ze,we),ds=s=>bd(s,_e,Re);var tr=s=>Math.min(Math.max(Math.floor((s-ze)/160),0),qr.length-1)*160+ze+160/2,$o=s=>Math.min(Math.max(Math.floor((s-_e)/160),0),us.length-1)*160+_e+160/2;function Ko(s,t){return s<on?"sand":s<je.to?"grass":s<je.from||s>we+ne||t<_e-ne||t>Re+ne?"curb":Math.abs(s-qi(s))<ne||Math.abs(t-ds(t))<ne?"road":"curb"}function Sd(s){return s>=on?0:Math.max(-.02-(on-s)*.0105,au-.3)}var Wi={ocean:["OCEAN DRIVE","Vista Pac\xEDfica Beach",.3,.2],seaview:["SEAVIEW","Coastal Quarter",.5,.2],downtown:["DOWNTOWN","Financial District",1,.2],palm:["PALM DISTRICT","San Aurelio",.65,.6],southbank:["SOUTHBANK","Harbor Heights",.4,.6],northshore:["NORTHSHORE","Lighthouse Point",.35,.5],midtown:["MIDTOWN","Alta Vista",.8,.3],laurel:["LAUREL PARK","The Gardens",.3,.9],arts:["ARTS DISTRICT","Cannery Row",.6,.3],port:["PORT DISTRICT","Bayfront Docks",.55,.1],marina:["MARINA","South Beach",.4,.3],eastside:["EASTSIDE","Jacaranda Heights",.35,.8],foothills:["FOOTHILLS","Ridgeline",.25,.8]};function pi(s,t){return s<=320&&Math.abs(t)<=480?s<-170?"seaview":s>0&&t<-20?"downtown":t>250?"southbank":"palm":s<-170?t<-480?"northshore":"marina":s>1440?"foothills":t<-1120?"northshore":t>1120?"port":s>1120?"eastside":s>560&&s<1040&&t>160&&t<480?"laurel":t<0&&t>-960&&s>0?"downtown":t<=-960?"midtown":t>640?"arts":t>160?s<480?"southbank":"midtown":s<640?"palm":"midtown"}function _c(s,t){return s<-330?Wi.ocean:Wi[pi(tr(s),$o(t))]}var lu={"-320":"Ocean Drive","-160":"Seaview Ave",0:"Aurelio Blvd",160:"Grand Ave",320:"Hillcrest Ave",480:"Mission Ave",640:"Centro Blvd",800:"Laurel Ave",960:"Vista Ave",1120:"Jacaranda Ave",1280:"Canyon Ave",1440:"Foothill Blvd",1600:"Ridgeline Dr"},cu={"-1600":"Northshore Rd","-1440":"Lighthouse St","-1280":"Coral St","-1120":"Mariposa St","-960":"Alta St","-800":"Dolores St","-640":"Cabrillo St","-480":"Marina St","-320":"Sunset Blvd","-160":"Pier Ave",0:"Palm St",160:"Harbor St",320:"Rosa St",480:"Southbank Rd",640:"Cannery St",800:"Dock St",960:"Foundry St",1120:"Depot St",1280:"Terminal St",1440:"Breakwater St",1600:"Bayfront Rd"};function Ed(s,t){let e=qi(s),n=ds(t);return Math.abs(s-e)<ne+3?lu[String(e)]:Math.abs(t-n)<ne+3?cu[String(n)]:s<-330?"Beachfront":"Off road"}var hu=8294;function dt(){return hu=hu*1664525+1013904223>>>0,hu/4294967296}var mt=(s,t)=>s+dt()*(t-s),re=s=>s[Math.floor(dt()*s.length)],Me=s=>dt()<s;function er(s,t){let e=Math.imul(Math.floor(s)|0,374761393)+Math.imul(Math.floor(t)|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}var wd={"-240,-400":"parking","-240,-240":{stucco:3,motel:2,shops:2},"-240,-80":{hotel:3,shops:2,stucco:1},"-240,80":{stucco:3,shops:2,motel:1},"-240,240":{motel:2,stucco:3,shops:1},"-240,400":{stucco:3,shops:2},"-80,-400":{brick:3,shops:2,garage:1},"-80,-240":{office:2,garage:1,deco:1,shops:1},"-80,-80":{shops:2,condo:2,deco:1,brick:1},"-80,80":"park","-80,240":{brick:3,garage:1,shops:1},"-80,400":{warehouse:4,garage:1},"80,-400":{tower:3,office:2,deco:1},"80,-240":{tower:2,deco:2,office:1},"80,-80":"plaza","80,80":{hotel:2,shops:1,condo:2},"80,240":"parking","80,400":{warehouse:3,shops:1,brick:1},"240,-400":{office:2,tower:2,garage:1},"240,-240":"plaza-tall","240,-80":{deco:2,tower:2,hotel:1},"240,80":{condo:2,brick:2,shops:1},"240,240":{condo:3,shops:2},"240,400":"park"},py={seaview:[{stucco:3,motel:2,shops:2,hotel:1},[.05,.06,0]],northshore:[{condo:3,hotel:2,stucco:2,shops:2,brick:1},[.12,.03,0]],marina:[{stucco:2,shops:2,warehouse:2,motel:1,condo:1},[.06,.1,0]],midtown:[{office:2,condo:2,brick:2,shops:2,deco:1,garage:1,hotel:1},[.06,.04,.05]],palm:[{shops:2,condo:2,brick:2,stucco:1,deco:1},[.1,.04,0]],southbank:[{brick:3,shops:2,garage:1,warehouse:1,condo:1},[.07,.06,0]],arts:[{brick:3,warehouse:2,shops:2,garage:1},[.05,.06,0]],port:[{warehouse:5,garage:1,shops:1},[.02,.14,0]],eastside:[{stucco:4,shops:2,brick:1,condo:1},[.16,.03,0]],foothills:[{stucco:5,shops:1,motel:1},[.18,.03,0]],laurel:[{stucco:1},[1,0,0]]},my=[[.75,{tower:4,office:2,deco:1}],[.45,{tower:2,deco:2,office:2,hotel:1,garage:1}],[0,{office:2,condo:2,deco:1,shops:1,garage:1,brick:1}]];function gy(s,t){let e=Math.max(0,1-Math.hypot(s-150,t+200)/380),n=1.3*Math.max(0,1-Math.hypot(s-640,t+480)/640);return Math.max(e,n)}var uu=new Map;function xy(s,t){let e=`${s},${t}`;if(uu.has(e))return uu.get(e);let n=pi(s,t),i=wd[e],r=i?Math.max(0,1-Math.hypot(s-150,t+200)/380):gy(s,t),o="mix",a=null;if(i)typeof i=="string"?o=i:a=i;else if(n==="downtown"){let h=er(s*.37+11,t*.53+5);h<.1?o=r>.7?"plaza-tall":"plaza":h<.13?o="park":h<.16?o="parking":a=my.find(([l])=>r>=l)[1]}else{let[h,[l,f,d]]=py[n],u=er(s*.37+11,t*.53+5);u<l?o="park":u<l+f?o="parking":u<l+f+d?o="plaza":a=h}let c={kind:o,weights:a,district:n,dw:r,coastal:s<-170,lot:o==="park"?1:o==="parking"?2:o.startsWith("plaza")?4:0};return uu.set(e,c),c}function Ci(){let s=qr.flatMap(e=>us.map(n=>[e,n,xy(e,n)])),t=([e,n])=>`${e},${n}`in wd;return[...s.filter(t),...s.filter(e=>!t(e))]}var Td=()=>Ci().filter(([,,s])=>s.kind==="park");var Ad=`${ze.toFixed(1)}, ${(me.length-1).toFixed(1)}`,Rd=`${_e.toFixed(1)}, ${(ge.length-1).toFixed(1)}`,vy=`
float paRoadNearest(float v, float start, float maxIndex) {
  return clamp(floor((v - start) / 160.0 + 0.5), 0.0, maxIndex) * 160.0 + start;
}
// Returns paint mask (rgb = color, a = coverage) and fills asphalt wear.
vec4 paRoadMarkings(vec2 p, out float wear, out float onRoad) {
  float dx = p.x - paRoadNearest(p.x, ${Ad});
  float dz = p.y - paRoadNearest(p.y, ${Rd});
  float adx = abs(dx), adz = abs(dz);
  bool inX = adx < ${ne.toFixed(1)};
  bool inZ = adz < ${ne.toFixed(1)};
  onRoad = (inX || inZ) ? 1.0 : 0.0;
  vec4 paint = vec4(0.0);
  wear = 0.0;
  // Derivatives first: inside the loop below control flow is non-uniform.
  float fwx = max(fwidth(p.x), 0.002), fwz = max(fwidth(p.y), 0.002);
  // Avenues (constant x) unless we are inside the intersection box.
  for (int axis = 0; axis < 2; axis++) {
    float a = axis == 0 ? dx : dz;   // across the road
    float b = axis == 0 ? dz : dx;   // distance to the crossing road
    float along = axis == 0 ? p.y : p.x;
    float aa = abs(a), ab = abs(b);
    if (aa > ${ne.toFixed(1)} || ab < ${ne.toFixed(1)}) continue;
    float fw = axis == 0 ? fwx : fwz;
    float fwb = axis == 0 ? fwz : fwx;
    // Tire wear: two darker, smoother tracks per lane.
    float lane = min(abs(aa - 3.4), abs(aa - 9.2));
    wear = max(wear, smoothstep(1.4, 0.5, abs(lane - 0.85)) * 0.8);
    float yellow = pa_band(aa, 0.08, 0.22, fw);
    float dash = pa_band(aa, 6.22, 6.38, fw) * step(fract(along / 9.0), 0.36);
    float edge = pa_band(aa, 12.1, 12.3, fw);
    float zebra = 0.0, stopLine = 0.0;
    if (ab < 19.0 && ab > 14.2 && aa < 12.4) zebra = pa_band(fract(a / 1.2), 0.0, 0.55, fw / 1.2);
    float side = axis == 0 ? a * b : -a * b;
    if (side > 0.0 && aa > 0.3 && aa < 12.3) stopLine = pa_band(ab, 19.6, 20.15, fwb);
    vec3 white = vec3(0.82, 0.81, 0.76);
    paint = max(paint, vec4(vec3(0.85, 0.6, 0.16), yellow));
    paint = mix(paint, vec4(white, 1.0), max(dash, max(edge, max(zebra, stopLine))));
  }
  return paint;
}
`,On={wetness:{value:0},mirrorTex:{value:null},mirrorMatrix:{value:new Ot},useMirror:{value:0},worldTime:{value:0}},yy=`
float paRoadDetail(vec2 p, float fw, out float manhole) {
  manhole = 0.0;
  float skid = 0.0;
  float dx = p.x - paRoadNearest(p.x, ${Ad});
  float dz = p.y - paRoadNearest(p.y, ${Rd});
  for (int axis = 0; axis < 2; axis++) {
    float a = axis == 0 ? dx : dz;
    float b = axis == 0 ? dz : dx;
    float along = axis == 0 ? p.y : p.x;
    float road = axis == 0 ? p.x - dx : p.y - dz;
    if (abs(a) > ${ne.toFixed(1)} || abs(b) < ${ne.toFixed(1)}) continue;
    float cell = floor(along / 23.0);
    float h = pa_hash12(vec2(cell, road * 0.37 + float(axis) * 11.0));
    if (h > 0.62) {
      vec2 c = vec2((h > 0.81 ? 5.9 : -5.9), (cell + 0.3 + h * 0.4) * 23.0);
      float d = length(vec2(a, along) - c);
      manhole = max(manhole, 1.0 - smoothstep(0.42 - fw, 0.42 + fw, d));
    }
    // Skid marks: twin streaks along a lane, fading out at both ends.
    float hs = pa_hash12(vec2(cell * 1.7 + 4.0, road * 0.11 + float(axis) * 5.0));
    if (hs > 0.78) {
      float lane = (hs > 0.89 ? 1.0 : -1.0) * (hs > 0.84 ? 9.2 : 3.4);
      float t = fract(along / 23.0);
      float curve = sin(t * 3.14159) * (hs - 0.85) * 6.0;
      float off = abs(abs(a - lane - curve) - 0.78);
      float streak = (1.0 - smoothstep(0.08, 0.14 + fw, off)) * smoothstep(0.05, 0.3, t) * (1.0 - smoothstep(0.65, 0.95, t));
      skid = max(skid, streak * (0.55 + 0.45 * pa_noise(vec2(along * 0.8, a * 3.0))));
    }
  }
  return skid;
}
`,_y=`
uniform float wetness;
uniform sampler2D mirrorTex;
uniform mat4 mirrorMatrix;
uniform float useMirror;
uniform float worldTime;
float paPuddle;
// Reflection of the city in wet ground, from the ocean's mirror render. A few
// taps stretched vertically turn point lights into the long streaks of a wet street.
vec3 paWetReflection(vec3 worldPos, float puddle) {
  vec4 mc = mirrorMatrix * vec4(worldPos, 1.0);
  vec2 uv = mc.xy / mc.w;
  vec2 ripple = vec2(pa_noise(worldPos.xz * 2.2 + worldTime * 0.6), pa_noise(worldPos.xz * 2.2 + 17.0 - worldTime * 0.4)) - 0.5;
  uv += ripple * mix(0.0045, 0.002, puddle);
  vec3 sharp = texture2D(mirrorTex, uv).rgb;
  vec3 streak = (sharp + texture2D(mirrorTex, uv + vec2(0.0, 0.012)).rgb + texture2D(mirrorTex, uv + vec2(0.0, 0.03)).rgb
    + texture2D(mirrorTex, uv - vec2(0.0, 0.014)).rgb) * 0.25;
  return mix(streak * 0.85, sharp, puddle);
}
`;function My(){return zn("road",{color:16777215,roughness:.85,metalness:0},{uniforms:On,fragmentPars:vy+yy+_y+`
      float paPaint; float paWear; float paOnRoad; float paManhole;`,color:`
      {
        vec2 p = vPaWorld.xz;
        float fwp = max(max(fwidth(p.x), fwidth(p.y)), 0.002);
        vec4 paint = paRoadMarkings(p, paWear, paOnRoad);
        float skid = paRoadDetail(p, fwp, paManhole);
        float big = pa_fbm3(p * 0.035);
        float grain = pa_noise(p * 7.0) * 0.5 + pa_noise(p * 23.0) * 0.5;
        // Repaired patches: random rectangles of fresher or older asphalt.
        vec2 cell = floor(p / vec2(7.0, 11.0));
        float patchSel = pa_hash12(cell);
        vec2 cf = fract(p / vec2(7.0, 11.0));
        float patchMask = step(0.86, patchSel) * step(0.12, cf.x) * step(cf.x, 0.88) * step(0.15, cf.y) * step(cf.y, 0.8);
        vec3 asphalt = vec3(0.118, 0.115, 0.112) * (0.78 + big * 0.45) * (0.85 + grain * 0.3);
        asphalt = mix(asphalt, asphalt * mix(1.25, 0.72, step(0.93, patchSel)), patchMask);
        // Cracks from a ridged noise field.
        float crack = 1.0 - abs(pa_noise(p * 0.9) * 2.0 - 1.0);
        asphalt *= 1.0 - smoothstep(0.93, 0.99, crack) * 0.35 * smoothstep(0.4, 0.7, big);
        asphalt *= 1.0 - paWear * 0.18;
        asphalt *= 1.0 - skid * 0.45;
        // Manhole covers: dark iron.
        asphalt = mix(asphalt, vec3(0.07, 0.065, 0.06) * (0.8 + 0.4 * pa_noise(p * 30.0)), paManhole);
        // Off-road ground beyond the city edges.
        vec3 dirt = mix(vec3(0.17, 0.2, 0.11), vec3(0.24, 0.22, 0.15), big);
        asphalt = mix(dirt, asphalt, paOnRoad);
        float worn = smoothstep(0.25, 0.65, pa_noise(p * 1.7) * 0.6 + big * 0.6);
        paPaint = paint.a * (0.55 + 0.45 * worn) * paOnRoad * (1.0 - paManhole);
        vec3 col = mix(asphalt, paint.rgb, paPaint);
        // Wet: darker overall, puddles in dips and along the tire tracks.
        float dips = pa_fbm3(p * 0.055 + 13.0) + paWear * 0.12;
        paPuddle = smoothstep(0.6, 0.67, dips) * paOnRoad * wetness;
        col *= mix(1.0, 0.58, wetness * paOnRoad);
        col = mix(col, col * 0.55, paPuddle);
        diffuseColor.rgb = col;
      }`,roughness:`
      roughnessFactor = mix(mix(0.9, 0.62, paWear), 0.55, paPaint);
      roughnessFactor = mix(roughnessFactor, 0.5, paManhole);
      roughnessFactor = mix(roughnessFactor, 0.3, wetness * paOnRoad);
      // With a mirror image available, puddles take their reflection from it instead.
      roughnessFactor = mix(roughnessFactor, useMirror > 0.5 ? 0.85 : 0.03, paPuddle);`,normal:`
      {
        vec2 p = vPaWorld.xz * 9.0;
        float e = 0.35;
        float n0 = pa_noise(p), nx = pa_noise(p + vec2(e, 0.0)), nz = pa_noise(p + vec2(0.0, e));
        vec3 bump = normalize(vec3((n0 - nx) * 0.22, 1.0, (n0 - nz) * 0.22));
        float fade = 1.0 - smoothstep(12.0, 35.0, length(vPaWorld - cameraPosition));
        bump = normalize(mix(vec3(0.0, 1.0, 0.0), bump, fade * (1.0 - paPaint) * (1.0 - paPuddle)));
        normal = normalize((viewMatrix * vec4(bump, 0.0)).xyz);
      }`,emissive:`
      if (useMirror > 0.5 && wetness > 0.01 && paOnRoad > 0.5) {
        vec3 V = normalize(cameraPosition - vPaWorld);
        float fres = min(0.04 + 0.96 * pow(1.0 - clamp(V.y, 0.0, 1.0), 4.0), 0.7);
        totalEmissiveRadiance += paWetReflection(vPaWorld, paPuddle / max(wetness, 0.01)) * fres * wetness * mix(0.65, 1.1, paPuddle);
      }`})}function by(){return zn("slab",{color:16777215,roughness:.85,metalness:0},{uniforms:{wetness:On.wetness},vertexPars:"attribute float aLot; flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf;",vertex:`
      vLot = aLot;
      vSlabCenter = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
      vSlabHalf = vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[2].xyz)) * 0.5;`,fragmentPars:"flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf; float paSlabRough; uniform float wetness;",color:`
      {
        vec2 p = vPaWorld.xz;
        vec2 l = p - vSlabCenter.xz;
        float edge = min(vSlabHalf.x - abs(l.x), vSlabHalf.y - abs(l.y));
        float big = pa_fbm3(p * 0.08);
        float fwp = max(max(fwidth(p.x), fwidth(p.y)), 1e-4); // before any branch
        vec3 col;
        paSlabRough = 0.88;
        bool top = vPaNormalW.y > 0.5;
        float ring = ${di.toFixed(1)};
        if (!top || edge < 0.38) {
          col = vec3(0.56, 0.55, 0.52) * (0.85 + 0.2 * pa_noise(p * 3.0));
        } else if (edge < ring || vLot < 0.5) {
          // Sidewalk paving: 1.5 m slabs with joints and grime.
          vec2 t = p / 1.5;
          vec2 f = abs(fract(t) - 0.5);
          float fw = fwp / 1.5;
          float joint = 1.0 - smoothstep(0.47 - fw, 0.49, max(f.x, f.y)) * (1.0 - smoothstep(0.3, 0.8, fw * 4.0));
          float tileVar = pa_hash12(floor(t));
          col = vec3(0.47, 0.46, 0.43) * (0.86 + tileVar * 0.14) * (0.8 + big * 0.35);
          col *= mix(0.72, 1.0, joint);
          col *= 1.0 - smoothstep(0.62, 0.9, pa_noise(p * 0.6)) * 0.18;
        } else if (vLot < 1.5) {
          // Grass with clumps and dry patches.
          float clump = pa_fbm(p * 0.5);
          col = mix(vec3(0.07, 0.13, 0.04), vec3(0.17, 0.2, 0.07), clump);
          col = mix(col, vec3(0.3, 0.27, 0.15), smoothstep(0.62, 0.85, pa_noise(p * 0.15)) * 0.6);
          col *= 0.8 + pa_noise(p * 12.0) * 0.4;
          paSlabRough = 0.95;
        } else if (vLot < 2.5) {
          // Parking lot with painted stalls.
          col = vec3(0.12, 0.12, 0.125) * (0.8 + big * 0.4) * (0.85 + pa_noise(p * 9.0) * 0.3);
          float sx = fract((p.x + 0.0) / 3.0);
          float rowZ = abs(fract((p.y) / 14.0) - 0.5) * 14.0;
          float fw = max(fwp / 3.0, 0.002);
          float stall = pa_band(sx, 0.0, 0.04, fw) * step(1.5, rowZ) * step(rowZ, 6.2);
          col = mix(col, vec3(0.78, 0.77, 0.7), stall * 0.85);
          paSlabRough = 0.8;
        } else if (vLot < 3.5) {
          // Boardwalk planks running along the beach.
          float plank = p.x / 0.32;
          float fw = max(fwp / 0.32, 0.002);
          float gap = pa_band(fract(plank), 0.0, 0.08, fw);
          float id = pa_hash12(vec2(floor(plank), floor(p.y / 4.0 + floor(plank) * 0.37)));
          col = mix(vec3(0.33, 0.24, 0.16), vec3(0.45, 0.35, 0.24), id) * (0.8 + pa_noise(vec2(plank * 0.3, p.y * 4.0)) * 0.3);
          col *= 1.0 - gap * 0.6;
          paSlabRough = 0.75;
        } else {
          // Plaza stone.
          vec2 t = p / 3.0;
          float fw = max(fwp / 3.0, 0.002);
          vec2 f = abs(fract(t) - 0.5);
          float joint = 1.0 - smoothstep(0.48 - fw, 0.495, max(f.x, f.y));
          col = vec3(0.6, 0.56, 0.5) * (0.85 + pa_hash12(floor(t)) * 0.15) * mix(0.8, 1.0, joint);
          paSlabRough = 0.7;
        }
        diffuseColor.rgb = col;
      }`,roughness:"roughnessFactor = mix(paSlabRough, 0.42, wetness * (abs(vLot - 1.0) < 0.5 ? 0.0 : 1.0));"})}function Sy(){return zn("sand",{color:16777215,roughness:.95},{fragmentPars:"float paWet;",color:`
      {
        vec2 p = vPaWorld.xz;
        float ripple = sin(p.x * 2.4 + pa_noise(p * 0.4) * 6.0) * 0.5 + 0.5;
        float big = pa_fbm3(p * 0.05);
        vec3 dry = mix(vec3(0.62, 0.52, 0.38), vec3(0.72, 0.62, 0.47), big) * (0.92 + ripple * 0.08);
        dry *= 0.85 + pa_noise(p * 14.0) * 0.25;
        // Wet sand near the waterline, with a wavering edge.
        float wetLine = ${(-405).toFixed(1)} + sin(p.y * 0.05) * 2.0 + pa_noise(p * 0.2) * 4.0;
        paWet = smoothstep(wetLine, wetLine - 7.0, p.x);
        vec3 wet = dry * vec3(0.48, 0.47, 0.48);
        diffuseColor.rgb = mix(dry, wet, paWet);
      }`,roughness:"roughnessFactor = mix(0.95, 0.22, paWet);"})}function Ey(){return zn("terrain",{color:16777215,roughness:.95},{color:`
      {
        vec2 p = vPaWorld.xz;
        float slope = 1.0 - clamp(vPaNormalW.y, 0.0, 1.0);
        float n = pa_fbm(p * 0.02);
        float d = pa_noise(p * 0.3);
        vec3 grass = mix(vec3(0.13, 0.13, 0.06), vec3(0.25, 0.22, 0.12), n); // dry Californian grass
        vec3 brush = vec3(0.06, 0.09, 0.04) * (0.7 + d * 0.5);                 // chaparral
        vec3 rock = mix(vec3(0.27, 0.24, 0.2), vec3(0.38, 0.34, 0.29), d);
        vec3 col = mix(grass, brush, smoothstep(0.38, 0.55, pa_fbm3(p * 0.06 + 4.0)));
        col = mix(col, rock, smoothstep(0.32, 0.55, slope + (d - 0.5) * 0.25));
        diffuseColor.rgb = col;
      }`})}function mi(s,t){let e=Math.max(0,s-(we+52)),n=Math.max(0,_e-80-t),i=Math.max(0,t-(Re+80)),r=Math.hypot(e,Math.max(n,i)*.9);if(s<-360)return-40;if(r<=0)return-.6;let o=Math.sin(s*.011+Math.sin(t*.006)*2)*.5+Math.sin(t*.013+s*.004)*.5,a=Math.sin(s*.031+t*.017)*5+Math.sin(t*.043-s*.012)*3.5;return-.6+(70*(1-Math.exp(-r/170))+r*.1)*(.8+o*.3)+a*Math.min(r/120,1)+Math.min(r/30,1)*1.5}function Cd(s,t){let e=My(),n=new zt(new Ue(1,1),e);n.rotation.x=-Math.PI/2;let i=on-1,r=we+80,o=_e-140,a=Re+140;n.scale.set(r-i,a-o,1),n.position.set((i+r)/2,0,(o+a)/2),n.receiveShadow=!0,s.add(n);let c=[];for(let[V,tt,ht]of Ci())c.push([V,tt,ii,ii,ht.lot]);let h=a-o,l=(o+a)/2;c.push([(je.from+je.to)/2,l,je.from-je.to,h,3]),c.push([(je.to+on)/2,l,je.to-on,h,1]);let f=me[me.length-1]+ne;c.push([f+di/2,l,di,h,0]),c.push([(f+di+r)/2,l,r-f-di,h,1]);let d=ge[0]-ne,u=ge[ge.length-1]+ne;for(let[V,tt]of[[d,-1],[u,1]]){let ht=f-je.from,bt=(f+je.from)/2;c.push([bt,V+tt*di/2,ht,di,0]),c.push([bt,V+tt*(di+35),ht,70,1])}let g=new Jt(1,1,1),v=new pe(g,by(),c.length),m=new Float32Array(c.length),p=new Ot;c.forEach(([V,tt,ht,bt,Tt],Nt)=>{p.compose(new U(V,Qt/2-.05,tt),new de,new U(ht,Qt+.1,bt)),v.setMatrixAt(Nt,p),m[Nt]=Tt}),g.setAttribute("aLot",new He(m,1)),v.receiveShadow=!0,v.layers.set(1),s.add(v);let _=new Ue(1,1,24,1),b=new zt(_,Sy());b.rotation.x=-Math.PI/2;let y=-470,w=on;b.scale.set(w-y,h+320,1),b.position.set((y+w)/2,0,l),b.updateMatrixWorld();let A=_.attributes.position;for(let V=0;V<A.count;V++){let tt=y+(A.getX(V)+.5)*(w-y);A.setZ(V,tt>=on?0:-.02-(on-tt)*.0105)}_.computeVertexNormals(),b.receiveShadow=!0,s.add(b);let P=-420,R=we+1500,S=_e-1400,E=Re+1400,z=new Ue(R-P,E-S,Math.round((R-P)/22),Math.round((E-S)/22));z.rotateX(-Math.PI/2);let G=z.attributes.position;for(let V=0;V<G.count;V++){let tt=G.getX(V)+(P+R)/2,ht=G.getZ(V)+(S+E)/2;G.setX(V,tt),G.setZ(V,ht),G.setY(V,mi(tt,ht))}z.computeVertexNormals();let F=new zt(z,Ey());F.receiveShadow=!0,s.add(F);let O=new Jt(1,1,1),X=new Ht({color:10131084,roughness:.9}),$=[[ce.maxX+1.5,0,1,1,ce.maxZ-ce.minZ+4],[(ce.maxX+je.from)/2,ce.minZ-1.5,ce.maxX-je.from,1,1],[(ce.maxX+je.from)/2,ce.maxZ+1.5,ce.maxX-je.from,1,1]],T=new pe(O,X,$.length);return $.forEach(([V,tt,ht,bt,Tt],Nt)=>{p.compose(new U(V,bt/2,tt),new de,new U(ht,bt,Tt)),T.setMatrixAt(Nt,p)}),T.castShadow=T.receiveShadow=!0,s.add(T),{ground:n,slabMesh:v,terrain:F}}function Oe(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Le,h=0;for(let l=0;l<s.length;++l){let f=s[l],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,u,l),h+=u}}if(e){let l=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+l);l+=s[d].attributes.position.count}c.setIndex(f)}for(let l in r){let f=Pd(r[l]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,f)}for(let l in o){let f=o[l][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<f;++d){let u=[];for(let v=0;v<o[l].length;++v)u.push(o[l][v][d]);let g=Pd(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Pd(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){let l=s[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}let o=new t(r),a=new Je(o,e,n),c=0;for(let h=0;h<s.length;++h){let l=s[h];if(l.isInterleavedBufferAttribute){let f=c/e;for(let d=0,u=l.count;d<u;d++)for(let g=0;g<e;g++){let v=l.getComponent(d,g);a.setComponent(d+f,g,v)}}else o.set(l.array,c);c+=l.count*e}return i!==void 0&&(a.gpuType=i),a}var wy=new Ot;function ps(s,{exclude:t=[]}={}){s.updateMatrixWorld(!0);let e=new Ot().copy(s.matrixWorld).invert(),n=new Set;for(let o of t)o.traverse(a=>n.add(a));let i=new Map;s.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||n.has(o)||Array.isArray(o.material)||o.geometry.isInstancedBufferGeometry||Object.keys(o.geometry.morphAttributes).length)return;let a=[o.material.uuid,o.castShadow,o.receiveShadow,o.layers.mask,o.renderOrder,!!o.userData.noAO,o.frustumCulled].join("|");i.has(a)||i.set(a,[]),i.get(a).push(o)});let r=0;for(let o of i.values()){if(o.length<2)continue;let a=o.map(d=>{let u=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();return u.applyMatrix4(wy.multiplyMatrices(e,d.matrixWorld)),u}),c=Object.keys(a[0].attributes).filter(d=>a.every(u=>u.attributes[d]&&u.attributes[d].itemSize===a[0].attributes[d].itemSize));for(let d of a)for(let u of Object.keys(d.attributes))c.includes(u)||d.deleteAttribute(u);let h=Oe(a);if(!h)continue;let l=o[0],f=new zt(h,l.material);f.castShadow=l.castShadow,f.receiveShadow=l.receiveShadow,f.layers.mask=l.layers.mask,f.renderOrder=l.renderOrder,f.frustumCulled=l.frustumCulled,f.userData={...l.userData,batched:o.length},s.add(f);for(let d of o)d.removeFromParent();r+=o.length-1}return r}var nr=(s,t)=>(s+4096)*8192+(t+4096),ir=class{constructor(t=80,e=n=>[n.w,n.d]){this.cell=t,this.half=e,this.map=new Map,this.stamp=0,this.all=[]}add(t){let[e,n]=this.half(t),i=this.cell,r=Math.floor((t.x-e)/i),o=Math.floor((t.x+e)/i),a=Math.floor((t.z-n)/i),c=Math.floor((t.z+n)/i);for(let h=r;h<=o;h++)for(let l=a;l<=c;l++){let f=nr(h,l),d=this.map.get(f);d||this.map.set(f,d=[]),d.push(t)}return t._gs=0,this.all.push(t),t}addAll(t){for(let e of t)this.add(e);return this}near(t,e,n,i){let r=this.cell,o=++this.stamp,a=Math.floor((t-n)/r),c=Math.floor((t+n)/r),h=Math.floor((e-n)/r),l=Math.floor((e+n)/r);for(let f=a;f<=c;f++)for(let d=h;d<=l;d++){let u=this.map.get(nr(f,d));if(u)for(let g=0;g<u.length;g++){let v=u[g];if(v._gs!==o&&(v._gs=o,i(v)===!0))return!0}}return!1}segment(t,e,n,i,r){let o=this.cell,a=++this.stamp,c=Math.hypot(n-t,i-e),h=Math.max(1,Math.ceil(c/(o*.5))),l=NaN,f=NaN;for(let d=0;d<=h;d++){let u=d/h,g=Math.floor((t+(n-t)*u)/o),v=Math.floor((e+(i-e)*u)/o);if(!(g===l&&v===f)){l=g,f=v;for(let m=g-1;m<=g+1;m++)for(let p=v-1;p<=v+1;p++){let _=this.map.get(nr(m,p));if(_)for(let b=0;b<_.length;b++){let y=_[b];if(y._gs!==a&&(y._gs=a,r(y)===!0))return!0}}}}return!1}},Yn=class{constructor(t=24){this.cell=t,this.map=new Map,this.count=0}add(t){let e=nr(Math.floor(t.x/this.cell),Math.floor(t.z/this.cell)),n=this.map.get(e);return n||this.map.set(e,n=[]),n.push(t),this.count++,t}addAll(t){for(let e of t)this.add(e);return this}near(t,e,n,i){let r=this.cell,o=Math.floor((t-n)/r),a=Math.floor((t+n)/r),c=Math.floor((e-n)/r),h=Math.floor((e+n)/r);for(let l=o;l<=a;l++)for(let f=c;f<=h;f++){let d=this.map.get(nr(l,f));if(d){for(let u=0;u<d.length;u++)if(i(d[u])===!0)return!0}}return!1}any(t,e,n){return this.near(t,e,n,i=>Math.abs(i.x-t)<n&&Math.abs(i.z-e)<n)}},du=320,Id=(s,t)=>nr(Math.floor(s/du),Math.floor(t/du)),Jo=[],Yr=new ei,fu=new ui;function Zr(s,t,e=null){return s.updateMatrixWorld(!0),Yr.setFromObject(s),Yr.getBoundingSphere(fu),Jo.push({object:s,far:t,x:fu.center.x,z:fu.center.z,r:Math.hypot(Yr.max.x-Yr.min.x,Yr.max.z-Yr.min.z)/2,onLod:e}),s}function pu(s,t){for(let e=0;e<Jo.length;e++){let n=Jo[e],i=Math.hypot(n.x-s,n.z-t)-n.r;n.far>0&&(n.object.visible=i<n.far),n.onLod&&n.onLod(i,n.object)}}var Dd=()=>({entries:Jo.length,visible:Jo.filter(s=>s.object.visible).length});function $e(s,t,e,n,{at:i,set:r,far:o=0,setup:a=null,cloneGeometry:c=!1,chunk:h=du}){let l=new Map;t.forEach((u,g)=>{let[v,m]=i(u),p=nr(Math.floor(v/h),Math.floor(m/h)),_=l.get(p);_||l.set(p,_=[]),_.push(g)});let f=new Array(t.length),d=[];for(let u of l.values()){let g=new pe(c?e.clone():e,n,u.length);u.forEach((v,m)=>{r(g,m,t[v],v),f[v]={mesh:g,index:m}}),g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0),a?.(g,u.map(v=>t[v])),g.computeBoundingSphere(),s.add(g),o>0&&Zr(g,o),d.push(g)}return{meshes:d,refs:f}}var ae={CURTAIN:0,PUNCHED:1,RIBBON:2,BRICK:3,STUCCO:4,BALCONY:5,BLANK:6,DECO:7,GARAGE:8,METAL:9,MOTEL:10,CONDO:11},Ty=`
varying vec3 vFacLocal;
flat varying vec3 vFacSize;
flat varying vec3 vFacN;
flat varying vec4 vFacStyle;
flat varying vec3 vFacGlass;
flat varying vec2 vFacExtra;
flat varying float vFacTop;
uniform float nightFactor;
uniform float worldTime;
float fGlass; float fRough; float fMetal; vec3 fEmit; vec3 fTilt;

void paFacade(inout vec3 albedo) {
  fGlass = 0.0; fRough = 0.86; fMetal = 0.0; fEmit = vec3(0.0); fTilt = vec3(0.0);
  vec3 an = abs(vFacN);
  float style = vFacStyle.x, floorH = vFacStyle.y, cellW = vFacStyle.z, seed = vFacStyle.w;
  vec3 wall = albedo;
  float y = vPaWorld.y;
  float u = an.x > 0.5 ? vFacLocal.z : vFacLocal.x;
  float faceW = an.x > 0.5 ? vFacSize.z : vFacSize.x;
  float faceId = an.x > 0.5 ? (vFacN.x > 0.0 ? 1.0 : 2.0) : (vFacN.z > 0.0 ? 3.0 : 4.0);
  bool shops = vFacExtra.x > 0.5;
  float groundH = shops ? 4.8 : 0.9;
  // Screen-space derivatives are all taken here, before any branch or return:
  // GLSL leaves them undefined in non-uniform control flow, where they can come
  // back as zero and turn the anti-aliasing below into speckled garbage.
  float du = max(fwidth(u), 1e-4);
  float dy = max(fwidth(y), 1e-4);
  float nShops = max(floor(faceW / 6.0), 1.0);
  float shopW = faceW / nShops;
  float nCols = max(floor((faceW - 1.0) / cellW), 1.0);
  float wu = max(du / cellW, 0.0015), wv = max(dy / floorH, 0.0015);
  #ifdef FACADE_LOW
    float grime = 0.5; // distant chunks skip the noise
  #else
    float grime = pa_fbm3(vPaWorld.xz * 0.15 + vec2(0.0, y * 0.4));
  #endif

  if (an.y > 0.5) {
    // Roof: membrane with a coping stone border.
    float edge = min(vFacSize.x * 0.5 - abs(vFacLocal.x), vFacSize.z * 0.5 - abs(vFacLocal.z));
    vec3 roof = vec3(0.36, 0.36, 0.35) * (0.8 + grime * 0.4) * (0.9 + pa_noise(vPaWorld.xz * 4.0) * 0.2);
    albedo = edge < 0.55 ? wall * 0.9 : roof;
    fRough = 0.9;
    return;
  }

  // Base dirt and vertical rain streaks.
  #ifndef FACADE_LOW
    float streak = pa_noise(vec2(u * 1.3 + faceId * 31.0, y * 0.05)) * pa_noise(vec2(u * 0.4, y * 0.3 + seed));
    wall *= 1.0 - smoothstep(0.35, 0.8, streak) * 0.18;
  #endif
  wall *= 0.88 + grime * 0.24;
  wall *= mix(0.72, 1.0, smoothstep(0.0, 2.5, y));

  if (abs(style - 6.0) < 0.5) { albedo = wall; return; }

  if (style > 2.5 && style < 3.5) {
    // Brick: running bond, faded out with distance.
    vec2 b = vec2(u / 0.24, y / 0.085);
    b.x += step(1.0, mod(floor(b.y), 2.0)) * 0.5;
    float fw = max(du / 0.24, dy / 0.085);
    vec2 f = fract(b);
    float mortar = (1.0 - pa_band(f.x, 0.06, 1.0, fw)) + (1.0 - pa_band(f.y, 0.12, 1.0, fw));
    mortar = clamp(mortar, 0.0, 1.0) * (1.0 - smoothstep(0.25, 0.6, fw));
    wall *= 0.88 + pa_hash12(floor(b)) * 0.22 * (1.0 - smoothstep(0.3, 0.8, fw));
    wall = mix(wall, vec3(0.52, 0.5, 0.46), mortar * 0.55);
  }

  // Shop fronts on the ground floor.
  if (shops && y < groundH) {
    float su = (u + faceW * 0.5) / shopW;
    float sid = floor(su), sf = fract(su);
    float fw = du / shopW;
    float h = pa_hash12(vec2(sid + faceId * 17.0, seed * 3.1));
    float glass = pa_band(sf, 0.06, 0.94, fw) * pa_band(y, 0.45, 3.5, dy);
    float fascia = pa_band(y, 3.7, 4.5, dy);
    // Palette picks use step/mix rather than nested ternaries, which some
    // shader compilers evaluate inconsistently across a pixel quad.
    vec3 fasciaCol = mix(vec3(0.08, 0.09, 0.1), vec3(0.5, 0.12, 0.08), step(0.33, h));
    fasciaCol = mix(fasciaCol, vec3(0.12, 0.25, 0.3), step(0.55, h));
    fasciaCol = mix(fasciaCol, vec3(0.75, 0.68, 0.55), step(0.75, h));
    albedo = mix(wall * 0.85, fasciaCol, fascia);
    albedo = mix(albedo, vec3(0.03, 0.035, 0.04), glass);
    fGlass = glass;
    fRough = mix(0.75, 0.04, glass);
    fMetal = glass * 0.2;
    float lit = step(0.15, pa_hash12(vec2(sid * 3.7, faceId + seed)));
    vec3 warm = mix(vec3(1.0, 0.75, 0.45), vec3(0.95, 0.95, 0.85), step(0.6, h));
    float shopGlow = 0.25 + 0.75 * pa_hash12(vec2(sid * 1.3 + 7.0, faceId * 3.0 + seed));
    fEmit = warm * glass * lit * shopGlow * (0.45 + 0.55 * smoothstep(0.45, 3.5, y)) * mix(0.05, 0.62, nightFactor);
    fEmit += fasciaCol * fascia * step(0.5, h) * nightFactor * 0.9;
    fTilt = vec3(h - 0.5, 0.0, 0.0) * 0.02 * glass;
    return;
  }

  if (abs(style - 8.0) < 0.5) {
    // Parking garage: a concrete spandrel per deck, the open deck above it
    // dark inside, with parked cars and strip lights under each slab.
    float cv8 = (y - 0.3) / floorH;
    float fv8 = fract(cv8), row8 = floor(cv8);
    float wv8 = max(dy / floorH, 0.0015);
    float pu = (u + faceW * 0.5) / 2.7;
    float wb = max(du / 2.7, 0.0015);
    float top8 = 1.0 - pa_aastep(vFacTop - 1.1, y, dy);
    float spand = 1.0 - pa_aastep(0.34, fv8, wv8);
    float column = pa_band(fract(pu / 3.0), 0.0, 0.06, wb / 3.0);
    float open = (1.0 - spand) * (1.0 - column) * top8 * step(0.0, cv8);
    float carId = floor(pu / 2.0);
    float ch = pa_hash12(vec2(carId + faceId * 41.0, row8 + seed));
    float cf = fract(pu / 2.0);
    float body = pa_band(cf, 0.08, 0.92, wb * 0.5) * pa_band(fv8, 0.34, 0.6, wv8);
    float cabin = pa_band(cf, 0.25, 0.72, wb * 0.5) * pa_band(fv8, 0.6, 0.76, wv8);
    float car = clamp(body + cabin, 0.0, 1.0) * step(0.35, ch) * open;
    vec3 carCol = mix(mix(vec3(0.62), vec3(0.04), step(0.5, ch)), vec3(0.45, 0.08, 0.06), step(0.82, ch));
    albedo = mix(wall, vec3(0.025, 0.027, 0.03), open);
    albedo = mix(albedo, carCol, car);
    float strip = pa_band(fv8, 0.9, 0.95, wv8) * pa_band(cf, 0.3, 0.7, wb * 0.5) * open;
    fEmit = vec3(0.85, 0.95, 1.0) * strip * mix(0.35, 2.2, nightFactor) + vec3(0.6, 0.7, 0.8) * open * (1.0 - car) * nightFactor * 0.05;
    fRough = mix(0.9, 0.45, car);
    fMetal = car * 0.45;
    return;
  }

  if (abs(style - 9.0) < 0.5) {
    // Warehouse: corrugated metal, clerestory windows and roll-up doors.
    float corrFade = 1.0 - smoothstep(0.08, 0.25, du / 0.2);
    float corr = 0.5 + 0.5 * sin(u * 6.2832 / 0.2);
    albedo = wall * (0.86 + 0.14 * mix(0.5, corr, corrFade));
    float pu9 = (u + faceW * 0.5) / 3.0;
    float clere = pa_band(y, vFacTop - 3.2, vFacTop - 1.7, dy) * pa_band(fract(pu9), 0.08, 0.92, du / 3.0);
    float dp = (u + faceW * 0.5) / 6.0;
    float doorId = floor(dp);
    float hasDoor = step(0.45, pa_hash12(vec2(doorId + faceId * 13.0, seed)));
    float door = pa_band(fract(dp), 0.15, 0.85, du / 6.0) * pa_band(y, 0.0, 4.6, dy) * hasDoor;
    float slatFade = 1.0 - smoothstep(0.05, 0.15, dy / 0.25);
    float slats = mix(0.92, 0.84 + 0.16 * step(0.5, fract(y / 0.25)), slatFade);
    vec3 doorCol = mix(vec3(0.55, 0.56, 0.55), vec3(0.62, 0.36, 0.18), step(0.75, pa_hash12(vec2(doorId, seed * 2.0))));
    albedo = mix(albedo, doorCol * slats, door);
    albedo = mix(albedo, vFacGlass * 0.3, clere);
    fGlass = clere;
    fMetal = mix(mix(0.55, 0.3, door), 0.2, clere);
    fRough = mix(mix(0.5, 0.6, door), 0.08, clere);
    fEmit = vec3(1.0, 0.85, 0.6) * clere * nightFactor * 0.55 * step(0.5, pa_hash12(vec2(floor(pu9), seed)));
    return;
  }

  // Window grid.
  float cu = u / cellW + nCols * 0.5;
  float cv = (y - groundH) / floorH;
  float colId = floor(cu), rowId = floor(cv);
  float fu = fract(cu), fv = fract(cv);
  float inGrid = pa_band(cu, 0.0, nCols, wu) * pa_aastep(groundH, y, dy) * (1.0 - pa_aastep(vFacTop - 1.3, y, dy));

  float u0 = 0.2, u1 = 0.8, v0 = 0.28, v1 = 0.86;
  if (style < 0.5) { u0 = 0.035; u1 = 0.965; v0 = 0.16; v1 = 0.985; }
  else if (style < 1.5) { u0 = 0.2; u1 = 0.8; v0 = 0.26; v1 = 0.86; }
  else if (style < 2.5) { u0 = 0.0; u1 = 1.0; v0 = 0.34; v1 = 0.9; }
  else if (style < 3.5) { u0 = 0.24; u1 = 0.76; v0 = 0.24; v1 = 0.84; }
  else if (style < 4.5) { u0 = 0.32; u1 = 0.68; v0 = 0.24; v1 = 0.8; }
  else if (style < 5.5) { u0 = 0.1; u1 = 0.9; v0 = 0.1; v1 = 0.86; }
  else if (style < 7.5) { u0 = 0.3; u1 = 0.7; v0 = 0.1; v1 = 0.92; }
  else if (style < 10.5) { u0 = 0.52; u1 = 0.88; v0 = 0.3; v1 = 0.75; }
  else { u0 = 0.05; u1 = 0.95; v0 = 0.06; v1 = 0.96; }
  float isDeco = 1.0 - step(0.5, abs(style - 7.0));
  float isMotel = 1.0 - step(0.5, abs(style - 10.0));
  float isCondo = 1.0 - step(0.5, abs(style - 11.0));

  float win = pa_band(fu, u0, u1, wu) * pa_band(fv, v0, v1, wv) * inGrid;
  float mull = style < 2.5 && style > 1.5 ? pa_band(fu, 0.0, 0.025, wu) + pa_band(fu, 0.975, 1.0, wu) : 0.0;
  mull += isCondo * pa_band(fu, 0.49, 0.51, wu);
  win *= 1.0 - clamp(mull, 0.0, 1.0);
  float frame = clamp(pa_band(fu, u0 - 0.035, u1 + 0.035, wu) * pa_band(fv, v0 - 0.04, v1 + 0.03, wv) * inGrid - win, 0.0, 1.0);
  // Recessed windows cast a little shadow along their top edge.
  float reveal = pa_band(fv, v1 - 0.06, v1, wv) * pa_band(fu, u0, u1, wu) * inGrid;

  float h1 = pa_hash12(vec2(colId + faceId * 97.0 + seed * 13.0, rowId + seed * 7.0));
  float h2 = pa_hash12(vec2(rowId * 1.7 + seed, colId * 3.1 + faceId));
  float h3 = pa_hash12(vec2(colId * 5.3 + seed, rowId * 2.3));
  // Office floors tend to be lit in whole runs, homes window by window.
  float floorLit = pa_hash12(vec2(rowId + seed * 5.0, faceId));
  float office = max(1.0 - step(2.5, style), isDeco);
  float litP = mix(mix(0.04, 0.48, nightFactor), mix(0.05, 0.62, nightFactor) * (0.6 + floorLit * 0.8), office);
  float lit = step(h1, litP);

  vec3 glassCol = vFacGlass * (0.32 + h2 * 0.3);
  // A few windows show curtains, blinds or a lighter interior during the day.
  glassCol = mix(glassCol, vec3(0.32, 0.29, 0.25), step(0.82, h3) * 0.6 * step(0.5, style));
  float spandrel = 0.0;
  float isCurtain = 1.0 - step(0.5, style);
  float isStucco = step(3.5, style) * (1.0 - step(4.5, style));
  vec3 frameCol = mix(mix(vec3(0.07, 0.075, 0.08), vec3(0.95, 0.93, 0.86), max(isStucco, isMotel)), vFacGlass * 0.2 + vec3(0.03), isCurtain);
  frameCol = mix(frameCol, vec3(0.32, 0.24, 0.15), isDeco);
  frameCol = mix(frameCol, vec3(0.78, 0.79, 0.8), isCondo);
  if (style < 0.5) {
    // Curtain wall: the slab band is opaque tinted glass.
    spandrel = pa_band(cu, 0.0, nCols, wu) * (1.0 - pa_band(fv, v0, 1.0, wv)) * inGrid;
    frameCol = mix(frameCol, wall, 0.25);
  }
  albedo = wall;
  albedo = mix(albedo, frameCol, frame);
  albedo *= 1.0 - reveal * 0.35;
  albedo = mix(albedo, vFacGlass * 0.16, spandrel);
  albedo = mix(albedo, glassCol, win);

  if (isDeco > 0.5) {
    // Art deco: raised piers between windows, dark spandrel panels, a cornice every six floors.
    float pier = (pa_band(fu, 0.0, 0.13, wu) + pa_band(fu, 0.87, 1.0, wu)) * inGrid;
    float panel = pa_band(fu, u0, u1, wu) * (1.0 - pa_band(fv, v0, v1, wv)) * inGrid;
    float cornice = pa_band(fract(cv / 6.0), 0.0, 0.025, wv / 6.0) * inGrid;
    albedo = mix(albedo, wall * 1.16, pier * (1.0 - win));
    albedo = mix(albedo, wall * 0.5 + vec3(0.02), panel);
    albedo = mix(albedo, wall * 1.25, cornice);
  }
  if (isMotel > 0.5) {
    // Motel rooms: a painted door beside each window.
    float door = pa_band(fu, 0.1, 0.36, wu) * pa_band(fv, 0.0, 0.8, wv) * inGrid;
    vec3 doorCol = mix(vec3(0.1, 0.42, 0.45), vec3(0.72, 0.28, 0.2), step(0.5, pa_hash12(vec2(seed, 3.0))));
    albedo = mix(albedo, doorCol * (0.9 + 0.1 * h2), door);
    albedo = mix(albedo, vec3(0.85, 0.78, 0.5), door * pa_band(fu, 0.31, 0.33, wu) * pa_band(fv, 0.38, 0.42, wv));
  }
  if (style > 3.5 && style < 4.5) {
    // Painted shutters beside stucco windows.
    float shutter = (pa_band(fu, u0 - 0.15, u0 - 0.035, wu) + pa_band(fu, u1 + 0.035, u1 + 0.15, wu)) * pa_band(fv, v0, v1, wv) * inGrid;
    vec3 shutterCol = mix(mix(vec3(0.12, 0.3, 0.26), vec3(0.15, 0.25, 0.42), step(0.33, h2)), vec3(0.45, 0.2, 0.12), step(0.66, h2));
    albedo = mix(albedo, shutterCol, shutter);
  }
  if (abs(style - 5.0) < 0.5) {
    // Balcony slab and railing.
    float slab = pa_band(fv, 0.0, 0.07, wv) * inGrid;
    float rail = pa_band(fv, 0.07, 0.36, wv) * pa_band(fu, 0.05, 0.95, wu) * inGrid;
    float bars = pa_band(fract(fu * 18.0), 0.0, 0.25, wu * 18.0);
    albedo = mix(albedo, vec3(0.75, 0.74, 0.7), slab);
    albedo = mix(albedo, vec3(0.05), rail * mix(0.35, 0.9, bars));
  }

  float glassAll = clamp(win + spandrel, 0.0, 1.0);
  fGlass = glassAll;
  float glassMetal = mix(mix(0.2, 0.45, max(1.0 - step(2.5, style), isCondo)), 0.75, isCurtain);
  fMetal = mix(style < 0.5 ? 0.35 : 0.0, glassMetal, glassAll);
  fRough = mix(style > 2.5 && style < 4.5 ? 0.92 : 0.78, 0.035 + h3 * 0.06, glassAll);
  fRough = mix(fRough, 0.35, frame * (style < 0.5 ? 1.0 : 0.0));

  // Interior light: ceiling glow near the top of the window, blinds on some.
  float wy = clamp((fv - v0) / (v1 - v0), 0.0, 1.0);
  float interior = 0.55 + 0.45 * smoothstep(0.2, 1.0, wy);
  interior *= mix(1.0, 0.65 + 0.35 * step(0.5, fract(wy * 11.0)), step(0.7, h2));
  vec3 lightCol = mix(mix(vec3(1.0, 0.7, 0.4), vec3(1.0, 0.88, 0.7), step(0.45, h2)), vec3(0.72, 0.85, 1.0), step(0.8, h2));
  // TVs flicker in a few homes late at night.
  float tv = step(0.94, h3) * step(2.5, style) * (0.6 + 0.4 * sin(worldTime * 7.0 + h1 * 50.0));
  lightCol = mix(lightCol, vec3(0.55, 0.65, 1.0) * (0.6 + tv), step(0.94, h3) * step(2.5, style));
  fEmit = lightCol * win * lit * interior * (0.5 + h2 * 0.9) * nightFactor * 0.8;
  fTilt = vec3(h1 - 0.5, 0.0, h2 - 0.5) * 0.045 * glassAll;
}
`;function Ld(s=!1){let t=zn(s?"facade-low":"facade",{color:16777215,roughness:.85,metalness:0},{uniforms:{nightFactor:rn.nightFactor,worldTime:rn.worldTime},vertexPars:`
      attribute vec4 aStyle; attribute vec3 aGlass; attribute vec2 aExtra;
      varying vec3 vFacLocal; flat varying vec3 vFacSize; flat varying vec3 vFacN; flat varying vec4 vFacStyle;
      flat varying vec3 vFacGlass; flat varying vec2 vFacExtra; flat varying float vFacTop;`,vertex:`
      vec3 facScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
      vFacSize = facScale;
      vFacLocal = position * facScale;
      vFacN = normal;
      vFacStyle = aStyle;
      vFacGlass = aGlass;
      vFacExtra = aExtra;
      vFacTop = (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y;`,fragmentPars:Ty,color:`
      {
        vec3 albedo = diffuseColor.rgb;
        paFacade(albedo);
        diffuseColor.rgb = albedo;
      }`,roughness:"roughnessFactor = fRough;",metalness:"metalnessFactor = fMetal;",normal:"normal = normalize(normal + (viewMatrix * vec4(fTilt, 0.0)).xyz);",emissive:"totalEmissiveRadiance += fEmit;"});return s&&(t.defines={...t.defines,FACADE_LOW:""}),t}function Ay(){return zn("tiles",{color:16777215,roughness:.7},{color:`
      {
        float along = dot(vPaWorld.xz, normalize(vec2(1.0 - abs(vPaNormalW.x), 1.0 - abs(vPaNormalW.z)) + 1e-4));
        vec2 t = vec2(along / 0.32, vPaWorld.y / 0.26);
        t.x += step(1.0, mod(floor(t.y), 2.0)) * 0.5;
        float fw = max(fwidth(t.x), fwidth(t.y));
        vec2 f = fract(t);
        float ridge = mix(1.0, 0.55 + 0.45 * sin(f.x * 3.14159), 1.0 - smoothstep(0.2, 0.6, fw));
        float lap = mix(1.0, smoothstep(0.0, 0.35, f.y) * 0.4 + 0.6, 1.0 - smoothstep(0.2, 0.6, fw));
        float var = pa_hash12(floor(t));
        vec3 col = mix(vec3(0.55, 0.2, 0.1), vec3(0.68, 0.32, 0.16), var);
        col = mix(col, vec3(0.3, 0.26, 0.2), smoothstep(0.6, 0.9, pa_noise(vPaWorld.xz * 0.5)) * 0.4);
        diffuseColor.rgb = col * ridge * lap;
      }`})}function Ry(){let e=[-.54,0,-.54,.54,0,-.54,.54,0,.54,-.54,0,.54,-.22,1,0,.22,1,0],n=[0,4,5,0,5,1,1,5,2,2,5,4,2,4,3,3,4,0],i=new Le;i.setAttribute("position",new ie(e,3)),i.setIndex(n);let r=i.toNonIndexed();return r.computeVertexNormals(),r}var Bn={stucco:["#e8dcc4","#f0d6c0","#e6c9a8","#d9e2d6","#f2e8d8","#e7b9a3","#d6c7e0","#f4e4b8","#cfe0e3"],concrete:["#a9a59c","#b8b2a6","#8f8e88","#c9c3b5","#9a9690","#b0aba0"],brick:["#8a4f3c","#9c5a43","#7a4535","#a8735a","#6d4a3c","#a35b45"],tower:["#9fa6a8","#7c8589","#b5b8b4","#5f686d","#c8c3b8"],stone:["#d8cbb0","#c9b79a","#b8a88c","#d2c6ae","#bfae94"],condo:["#e9e8e4","#d9dcdc","#c4c9cb","#ece4d6","#d6d2ca"],metal:["#8a9196","#6d7a6f","#9a8f7a","#7d4a3a","#5f6b78","#a7a9a3"],glass:[[.18,.32,.38],[.16,.27,.36],[.28,.3,.28],[.25,.22,.18],[.2,.34,.33],[.14,.2,.3]]},Cy={tower:36,deco:32,office:28,hotel:28,garage:28,condo:24,warehouse:24,motel:24,brick:18,stucco:14,shops:14};var Fd=["COFFEE","PIZZA","NAILS","DELI","BOOKS","PHARMACY","TACOS","SURF","RAMEN","BAR","DONUTS","LAUNDRY","VINYL","BANK","FLOWERS","GYM"],Ud=["#ff5a7a","#5fe8ff","#ffd25a","#ff8a3d","#a6ff6a","#ffffff","#ff6af0","#7ab8ff"],Py=["HOTEL MIRAMAR","THE PALMS","CASA DEL MAR","HOTEL AURELIO","THE SEABRIGHT"],Nd=["SURF DINER","GAS \xB7 24H","CAR WASH","DRIVE-IN","TIRE SHOP","TACO STAND","MINI MART","BURGERS"];function jo(s,t,e,n,i=0){let r=s.x1-s.x0,o=s.z1-s.z0;if(r<=e&&o<=e||i>5)return n.push(s),n;let a=r>=o,c=a?r:o;if(c<t*2)return n.push(s),n;let h=Ee.clamp(mt(.36,.64)*c,t,c-t);return a?(jo({...s,x1:s.x0+h},t,e,n,i+1),jo({...s,x0:s.x0+h},t,e,n,i+1)):(jo({...s,z1:s.z0+h},t,e,n,i+1),jo({...s,z0:s.z0+h},t,e,n,i+1)),n}function Iy(s){let t=Object.entries(s),e=t.reduce((i,[,r])=>i+r,0),n=dt()*e;for(let[i,r]of t)if((n-=r)<=0)return i;return t[0][0]}var yn={px:{nx:1,nz:0,rot:Math.PI/2},nx:{nx:-1,nz:0,rot:-Math.PI/2},pz:{nx:0,nz:1,rot:0},nz:{nx:0,nz:-1,rot:Math.PI}};function ms(s,t){return t.nx?s.d:s.w}function gs(s,t,e,n=0){return t.nx?[s.x+t.nx*(s.w/2+n),s.z+e]:[s.x+e,s.z+t.nz*(s.d/2+n)]}function $r(s){return Oe(s.map(([t,e,n,i,r,o,a=0,c=0,h=0,l="box"])=>{let f=l==="cyl"?new le(t,t,e,12):l==="cone"?new Si(t,e,12):new Jt(t,e,n);return(a||c||h)&&f.applyMatrix4(new Ot().makeRotationFromEuler(new Qe(a,c,h))),f.translate(i,r,o),f.index?f.toNonIndexed():f}))}function Dy(){let s=$r([[1.6,1,1.2,0,.5,0],[.42,.08,0,0,1.04,0,0,0,0,"cyl"],[1.62,.06,1.22,0,.22,0]]),t=$r([[1.6,3,0,0,4.1,0,0,0,0,"cyl"],[1.75,1,0,0,6.1,0,0,0,0,"cone"],[.16,2.6,.16,1.1,1.3,1.1],[.16,2.6,.16,-1.1,1.3,1.1],[.16,2.6,.16,1.1,1.3,-1.1],[.16,2.6,.16,-1.1,1.3,-1.1],[2.6,.14,2.6,0,2.6,0]]),e=[[3.2,.06,1.1,0,0,.6],[3.2,.04,.04,0,.95,1.13],[.04,.04,1.1,-1.6,.95,.6],[.04,.04,1.1,1.6,.95,.6],[.04,.95,.04,-1.58,.47,1.13],[.04,.95,.04,0,.47,1.13],[.04,.95,.04,1.58,.47,1.13],[3.2,.03,.03,0,.5,1.13]],n=h=>$r([...e,[Math.hypot(2.4,h),.05,.55,0,-h/2,.55,0,0,Math.atan2(h,2.4)],[Math.hypot(2.4,h),.03,.03,0,-h/2+.85,.83,0,0,Math.atan2(h,2.4)]]),i=$r([[1,.16,1.35,0,0,.67]]),r=$r([[1,1,.04,0,.58,1.33],[.012,1,1.35,-.5,.58,.67],[.012,1,1.35,.5,.58,.67]]),o=(()=>{let h=[],l=[],f=(u,g,v,m,p,_)=>{h.push(...u,...g,...v,...u,...v,...m),l.push(p[0],p[1],_[0],p[1],_[0],_[1],p[0],p[1],_[0],_[1],p[0],_[1])};f([-.5,0,0],[.5,0,0],[.5,-.7,1.6],[-.5,-.7,1.6],[0,0],[1,1]),f([-.5,-.7,1.6],[.5,-.7,1.6],[.5,-1,1.6],[-.5,-1,1.6],[0,0],[1,.3]);let d=new Le;return d.setAttribute("position",new ie(h,3)),d.setAttribute("uv",new ie(l,2)),d.computeVertexNormals(),d})(),a=new Ue(1,1),c=$r([[.08,1,0,0,.5,0,0,0,0,"cyl"]]);return{acUnit:s,tank:t,fireEscape:n,balconySlab:i,balconyRail:r,awning:o,sign:a,antenna:c}}function Ly(s){return We(s,1024,1024,t=>{Fd.forEach((e,n)=>{let i=n%2*512,r=Math.floor(n/2)*128,o=Ud[n%Ud.length],a=n%3===0;t.fillStyle=a?"#121417":["#f4efe4","#1d3b4a","#5a1f1a"][n%3],t.fillRect(i+4,r+4,504,120),t.strokeStyle=o,t.lineWidth=6,t.strokeRect(i+10,r+10,492,108),t.font='800 78px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor=o,t.shadowBlur=16,t.fillStyle=n%3===0?o:n%3===1?"#ffffff":"#ffe9c2",t.fillText(e,i+256,r+68),t.shadowBlur=0})})}function Uy(s){return We(s,256,32,(t,e,n)=>{for(let i=0;i<8;i++)t.fillStyle=i%2?"#f4f1ea":"#ffffff",t.fillRect(i*e/8,0,e/8,n),i%2===0&&(t.fillStyle="rgba(0,0,0,0.42)",t.fillRect(i*e/8,0,e/8,n))},{repeat:!1})}function zd(s,t){let e=new Map,n=[],i=[],r=[],o=[],a=[],c=[],h=[],l=[],f=(x,D,B,H)=>{let k=`${x}|${Id(D,B)}`;e.has(k)||e.set(k,[]),e.get(k).push(H)};function d(x,D,B,H,k,J,Q,st){return f("facade",x,D,{x,z:D,w:B,d:H,y0:k,h:J,style:Q,...st}),i.push({x,z:D,w:B,d:H,h:k+J}),k<1&&n.push({x,z:D,w:B/2,d:H/2}),{x,z:D,w:B,d:H,y0:k,h:J,top:k+J}}let u=(x,D,B={})=>({wall:D,glass:re(Bn.glass),seed:dt()*100,shops:!1,floorH:x===ae.CURTAIN?mt(3.7,4.2):x===ae.STUCCO?3.4:x===ae.GARAGE?3:mt(3.2,3.6),cellW:x===ae.CURTAIN?mt(1.6,2.2):x===ae.RIBBON?mt(2.4,3):x===ae.STUCCO?mt(3.8,4.6):x===ae.DECO?mt(2.2,2.6):x===ae.MOTEL?4.2:x===ae.CONDO?mt(3.2,3.8):mt(2.8,3.6),...B}),g=(x,D)=>x*D.floorH+(D.shops?4.8:.9)+1.3-Qt,v=(x,D,B)=>{let H=ms(x,B),k=Math.max(Math.floor((H-1)/D.cellW),1),J=D.shops?4.8:.9,Q=Math.max(0,Math.floor((x.top-1.3-J)/D.floorH));return{faceW:H,nCols:k,groundH:J,rows:Q,colU:st=>(st+.5-k/2)*D.cellW,rowY:st=>J+st*D.floorH}};function m(x,D,B=!1){for(let H=0;H<D;H++){let k=x.x+mt(-x.w/2+2.5,x.w/2-2.5),J=x.z+mt(-x.d/2+2.5,x.d/2-2.5);f("ac",k,J,{pos:[k,x.top,J],rot:re([0,Math.PI/2]),scale:[mt(.8,1.6),mt(.8,1.3),mt(.8,1.5)],color:re(["#b5b8b6","#9a9d9c","#c8c9c4"])})}if(B){let H=x.x+mt(-x.w/4,x.w/4),k=x.z+mt(-x.d/4,x.d/4);f("tank",H,k,{pos:[H,x.top,k],rot:0,scale:[1,mt(.9,1.15),1],color:re(["#6b4f36","#5e4a3a","#7a5a3e"])})}}function p(x,D,B,H){f("antenna",x,B,{pos:[x,D,B],rot:0,scale:[1,H,1],color:"#9aa0a3"}),c.push([x,D+H+.3,B])}function _(x,D){d(x.x,x.z,x.w+.9,x.d+.9,x.top-.15,.75,ae.BLANK,u(ae.BLANK,D))}function b(x,D,B,H){for(let k of B){let J=ms(x,k),Q=Math.max(Math.floor(J/6),1),st=J/Q,xt=re(["#b8322a","#2b6e8f","#2f7a4f","#d08a2a","#6b3f8f","#20304a"]);for(let K=0;K<Q;K++){let at=-J/2+(K+.5)*st;if(Me(.78)){let[Et,lt]=gs(x,k,at,.07);f("sign",Et,lt,{pos:[Et,4.1,lt],rot:k.rot,scale:[st*.72,.7,1],sign:Math.floor(dt()*Fd.length),color:"#ffffff"})}if(H&&Me(.7)){let[Et,lt]=gs(x,k,at,.02);f("awning",Et,lt,{pos:[Et,3.62,lt],rot:k.rot,scale:[st*.9,1,1],color:Me(.75)?xt:re(["#b8322a","#2b6e8f","#2f7a4f"])})}}}}function y(x,D,B,H=2,k="glass"){for(let J of B){let Q=v(x,D,J);for(let st=1;st<Q.rows;st++)for(let xt=0;xt+H<=Q.nCols;xt+=H){let K=(Q.colU(xt)+Q.colU(xt+H-1))/2,at=H*D.cellW-.5,[Et,lt]=gs(x,J,K,0),yt=Q.rowY(st)+.02;f("balconySlab",Et,lt,{pos:[Et,yt,lt],rot:J.rot,scale:[at,1,1],color:"#d9d8d2"}),f(k==="glass"?"balconyGlass":"balconyRail",Et,lt,{pos:[Et,yt,lt],rot:J.rot,scale:[at,1,1],color:k==="glass"?"#9fb6bf":"#2a2c2d"})}}}function w(x,D,B){let H=v(x,D,B);if(H.nCols<4||H.rows<3)return;let k=Math.floor(dt()*(H.nCols-2))+1,J=(H.colU(k)+H.colU(k+1))/2,[Q,st]=gs(x,B,J,0);for(let xt=1;xt<H.rows;xt++)f("fireEscape",Q,st,{pos:[Q,H.rowY(xt),st],rot:B.rot,scale:[1,1,1],color:"#2b2e30",floorH:D.floorH})}let A={tower(x,D,B){let H=x.w,k=x.d,J=d(x.x,x.z,H,k,Qt,mt(10,16),re([ae.RIBBON,ae.PUNCHED]),u(ae.RIBBON,re(Bn.concrete),{shops:!0}));b(J,null,D,!1),m({...J,x:x.x+H*.3,w:H*.3,d:k*.4},3);let Q=u(ae.CURTAIN,re(Bn.tower)),st=70+B*mt(70,150),xt=Math.min(H-10,mt(30,46)),K=Math.min(k-10,mt(30,46)),at=J.top,Et=st>120?3:st>75?2:1,lt;for(let yt=0;yt<Et;yt++){let Xt=yt===Et-1?Math.max(st-(at-Qt),12):st*mt(.42,.58)/(yt+1);lt=d(x.x,x.z,xt,K,at,Xt,ae.CURTAIN,Q),at+=Xt,xt*=mt(.72,.86),K*=mt(.72,.86)}if(a.push({x:lt.x,z:lt.z,w:lt.w,d:lt.d,y:lt.top-.6,color:re(["#bfe3ff","#ffe2b0","#ffffff","#ffb9d8"])}),Me(.5)){let yt=d(lt.x,lt.z,lt.w*.45,lt.d*.45,lt.top,6,ae.BLANK,u(ae.BLANK,"#7d8487"));p(lt.x,yt.top,lt.z,st>140?28:12)}else m(lt,4),c.push([lt.x+lt.w/2-1,lt.top+.8,lt.z+lt.d/2-1])},office(x,D,B){let H=x.w,k=x.d,J=Math.floor(mt(9,18)+B*mt(4,12)),Q=Me(.6)?ae.RIBBON:ae.PUNCHED,st=u(Q,re(Bn.concrete),{shops:!0}),xt=d(x.x,x.z,H,k,Qt,g(J,st),Q,st);b(xt,st,D,!1);let K=xt;Me(.45)&&(K=d(xt.x+mt(-2,2),xt.z+mt(-2,2),H*mt(.6,.75),k*mt(.6,.75),xt.top,mt(8,20),Q,{...st,shops:!1}));let at=d(K.x,K.z,K.w*.35,K.d*.35,K.top,4.5,ae.BLANK,u(ae.BLANK,"#8d8f8c"));m(K,5),c.push([at.x,at.top+.3,at.z])},deco(x,D,B){let H=re(Bn.stone),k=u(ae.DECO,H,{shops:!0}),J=50+B*mt(30,90),Q=x.w,st=x.d,xt=Qt,K,at=3+(J>100?1:0);for(let lt=0;lt<at;lt++){let yt=lt===0?J*.45:J*.55/(at-1);K=d(x.x,x.z,Q,st,xt,yt,ae.DECO,lt===0?k:{...k,shops:!1}),lt===0&&b(K,k,D,Me(.4)),_(K,"#e6dcc6"),xt+=yt,Q*=mt(.7,.8),st*=mt(.7,.8)}let Et=d(K.x,K.z,Math.max(3,Q*.4),Math.max(3,st*.4),K.top,8,ae.BLANK,u(ae.BLANK,H));p(Et.x,Et.top,Et.z,18),a.push({x:Et.x,z:Et.z,w:Et.w,d:Et.d,y:Et.top-1.2,color:re(["#ffe2b0","#bfe3ff"])})},brick(x,D){let B=u(ae.BRICK,re(Bn.brick),{shops:Me(.75),floorH:mt(3.1,3.4)}),H=Math.floor(mt(4,8)),k=d(x.x,x.z,x.w,x.d,Qt,g(H,B),ae.BRICK,B);B.shops&&b(k,B,D,Me(.5)),_(k,"#b8ab98");for(let J of D.slice(0,2))Me(.8)&&w(k,B,J);m(k,2,Me(.8))},condo(x,D,B){let H=u(ae.CONDO,re(Bn.condo),{shops:Me(.6),floorH:3.2}),k=Math.floor(mt(6,12)+B*8),J=d(x.x,x.z,x.w,x.d,Qt,g(k,H),ae.CONDO,H);H.shops&&b(J,H,D,!1),y(J,H,D,2,"glass"),m(J,3)},hotel(x,D,B){let H=u(ae.CONDO,re(["#efe6d4","#e2d3bd","#d8dfe2","#f2ddd0"]),{shops:!0,floorH:3.3}),k=Math.min(x.w,mt(26,38)),J=Math.min(x.d,mt(18,26)),Q=Math.floor(mt(10,16)+B*6),st=d(x.x,x.z,k,J,Qt,g(Q,H),ae.CONDO,H);y(st,H,D.length?D:[yn.pz],1,"metal");let xt=D[0]||yn.pz,K=re(Py);o.push({kind:"hotel",b:st,f:xt,name:K}),m(st,3)},shops(x,D){let B=Me(.5),H=u(ae.PUNCHED,Me(.6)?re(Bn.stucco):re(Bn.concrete),{shops:!0}),k=d(x.x,x.z,x.w,x.d,Qt,B?g(1,H):6,ae.PUNCHED,H);b(k,H,D.length?D:[yn.pz],!0),_(k,"#cfc6b4"),m(k,Math.floor(mt(2,5)))},garage(x,D){let B=u(ae.GARAGE,re(["#b3ada2","#a7a49c","#c0b8aa"]),{floorH:3}),H=Math.floor(mt(4,7)),k=d(x.x,x.z,x.w,x.d,Qt,H*3+1.4,ae.GARAGE,B);o.push({kind:"garage",b:k,f:D[0]||yn.pz}),m(k,1)},stucco(x,D){let B=D.length>0&&Me(.8),H=u(ae.STUCCO,re(Bn.stucco),{shops:B}),k=Math.floor(mt(2,5)),J=d(x.x,x.z,x.w,x.d,Qt,g(k,H),Me(.8)?ae.STUCCO:ae.PUNCHED,H);B&&b(J,H,D,Me(.6)),Me(.8)?f("tileRoof",J.x,J.z,{pos:[J.x,J.top,J.z],rot:0,scale:[J.w,Math.min(J.w,J.d)*.22,J.d]}):m(J,2),D.find(st=>st.nx===-1)&&Me(.6)&&h.push({x:J.x-J.w/2-.12,z:J.z,y:(B?4.8:1.2)+1.8,face:"west",text:re(["MOTEL","TACOS","SURF SHOP","LIQUOR","PIZZA","COCKTAILS","ICE CREAM","BAIT & TACKLE"]),color:re(["#ff4f7b","#5ff2ff","#ffd25a","#ff7a3d","#9dff6a"])})},motel(x,D){let B=D[0]||yn.pz,H=u(ae.MOTEL,re(Bn.stucco),{floorH:3}),k=ms(x,B),J=B.nx?x.w:x.d,Q=Math.min(J*.5,12),st=J/2-Q/2,xt=x.x-B.nx*st,K=x.z-B.nz*st,at=B.nx?Q:k*.92,Et=B.nx?k*.92:Q,lt=d(xt,K,at,Et,Qt,g(2,H),ae.MOTEL,H),[yt,Xt]=gs(lt,B,0,0);f("balconySlab",yt,Xt,{pos:[yt,.9+3+.02,Xt],rot:B.rot,scale:[ms(lt,B)-.4,1,1.15],color:"#e6e1d6"}),f("balconyRail",yt,Xt,{pos:[yt,.9+3+.02,Xt],rot:B.rot,scale:[ms(lt,B)-.4,1,1.15],color:"#e8e4da"}),f("tileRoof",lt.x,lt.z,{pos:[lt.x,lt.top,lt.z],rot:0,scale:[lt.w,Math.min(lt.w,lt.d)*.28,lt.d]});let[Z,vt]=gs(x,B,-ms(x,B)/2+4,-2);o.push({kind:"motelSign",x:Z,z:vt,f:B,name:re(["SEA BREEZE","SUNSET","PALM VIEW","BLUE WAVE"])}),r.push({x:x.x+B.nx*Q/2,z:x.z+B.nz*Q/2,w:B.nx?J-Q:k,d:B.nx?k:J-Q,parking:!0})},warehouse(x,D){let B=u(ae.METAL,re(Bn.metal),{floorH:9}),H=mt(8,11.5),k=d(x.x,x.z,x.w,x.d,Qt,H,ae.METAL,B);m(k,Math.floor(mt(1,4)))}},P=ii/2-di;for(let[x,D,B]of Ci()){let H=`${x},${D}`,k=B.kind==="mix"?B.weights:B.kind,J=B.dw;if(k==="park"){r.push({x,z:D,w:P*2,d:P*2,park:!0});continue}if(k==="parking"){let K=d(x-P+14,D-P+11,24,18,Qt,5.5,ae.STUCCO,u(ae.STUCCO,re(Bn.stucco),{shops:!0}));b(K,null,[yn.nz],!0);let at=H==="80,240"?"GAS \xB7 24H":H==="-240,-400"?"SURF DINER":Nd[Math.floor(er(x+3,D+9)*Nd.length)];h.push({x:K.x,z:K.z-K.d/2-.1,y:7.6,face:"north",text:at,color:"#ff6a5a"}),r.push({x:x+10,z:D+10,w:P*1.6,d:P*1.6,parking:!0});continue}if(k==="plaza"||k==="plaza-tall"){let K=mt(46,54);A.tower({x:x+mt(-6,6),z:D+mt(-6,6),w:K,d:K},[yn.px,yn.nx,yn.pz,yn.nz],k==="plaza-tall"?Math.max(1.25,J*1.1):Math.max(.95,J)),r.push({x,z:D,w:P*2,d:P*2,plaza:!0});continue}let st=B.coastal||B.district==="eastside"||B.district==="foothills",xt=jo({x0:x-P,x1:x+P,z0:D-P,z1:D+P},st?18:22,st?44:64,[]);for(let K of xt){let at=K.x1-K.x0,Et=K.z1-K.z0,lt=[];if(K.x0<=x-P+.5&&lt.push(yn.nx),K.x1>=x+P-.5&&lt.push(yn.px),K.z0<=D-P+.5&&lt.push(yn.nz),K.z1>=D+P-.5&&lt.push(yn.pz),Me(.07)||!lt.length){r.push({x:(K.x0+K.x1)/2,z:(K.z0+K.z1)/2,w:at,d:Et});continue}let yt=Object.fromEntries(Object.entries(k).filter(([te])=>Math.min(at,Et)>=Cy[te])),Xt=Object.keys(yt).length?Iy(yt):"shops",Z=Xt==="tower"?mt(2,6):Xt==="shops"||Xt==="brick"?mt(.2,1):mt(.5,3),vt=mt(1.5,4),_t=lt.includes(yn.nx)?Z:vt,Mt=lt.includes(yn.px)?Z:vt,gt=lt.includes(yn.nz)?Z:vt,ut=lt.includes(yn.pz)?Z:vt,Zt={x:(K.x0+_t+K.x1-Mt)/2,z:(K.z0+gt+K.z1-ut)/2,w:at-_t-Mt,d:Et-gt-ut};A[Xt](Zt,lt,J)}}for(let x=0;x<620;x++){let D=dt(),B=D<.6?mt(we+100,we+760):mt(-300,we+400),H=D<.6?mt(_e-500,Re+500):Me(.5)?mt(Re+140,Re+620):mt(_e-620,_e-140);l.push([B,H])}let R=Dy(),S=Ly(t),E=Uy(t),z=new Jt(1,1,1),G=Ld(),F=new Ht({map:S,emissive:16777215,emissiveMap:S,emissiveIntensity:.4,roughness:.5});F.onBeforeCompile=x=>{x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSign;`).replace("#include <uv_vertex>",`#include <uv_vertex>
        vec2 atlasUv = uv * vec2(0.5, 0.125) + aSign;
        #ifdef USE_MAP
          vMapUv = atlasUv;
        #endif
        #ifdef USE_EMISSIVEMAP
          vEmissiveMapUv = atlasUv;
        #endif`)},F.customProgramCacheKey=()=>"shop-sign-atlas";let O=new Map,X={facade:{geometry:z,material:G,shadow:!0,lod:0},tileRoof:{geometry:Ry(),material:Ay(),shadow:!0,lod:1100},ac:{geometry:R.acUnit,material:new Ht({color:16777215,roughness:.55,metalness:.5}),shadow:!0,lod:320},tank:{geometry:R.tank,material:new Ht({color:16777215,roughness:.9}),shadow:!0,lod:420},antenna:{geometry:R.antenna,material:new Ht({color:16777215,roughness:.4,metalness:.8}),shadow:!0,lod:1400},fireEscape:{geometry:null,material:new Ht({color:16777215,roughness:.6,metalness:.6}),shadow:!0,lod:260},balconySlab:{geometry:R.balconySlab,material:new Ht({color:16777215,roughness:.8}),shadow:!0,lod:340},balconyGlass:{geometry:R.balconyRail,material:new Ht({color:16777215,roughness:.08,metalness:.7,transparent:!0,opacity:.55,depthWrite:!1}),shadow:!1,lod:300},balconyRail:{geometry:R.balconyRail,material:new Ht({color:16777215,roughness:.5,metalness:.5}),shadow:!0,lod:300},awning:{geometry:R.awning,material:new Ht({map:E,side:hn,roughness:.9}),shadow:!0,lod:300},sign:{geometry:R.sign,material:F,shadow:!1,lod:520}},$=new Set(["tileRoof","ac","tank","antenna","fireEscape","balconyGlass","balconyRail","balconySlab"]),T=Ld(!0),V=new Ot,tt=new de,ht=new U,bt=new U,Tt=new Lt,Nt=new U(0,1,0);for(let[x,D]of e){let[B]=x.split("|"),H=X[B];if(B==="fireEscape"){let k=new Map;for(let J of D){let Q=J.floorH.toFixed(1);k.has(Q)||k.set(Q,[]),k.get(Q).push(J)}for(let[J,Q]of k)O.has(J)||O.set(J,R.fireEscape(Number(J))),Gt(B,Q,O.get(J),H);continue}Gt(B,D,H.geometry,H)}function Gt(x,D,B,H){let k=B;(x==="facade"||x==="sign")&&(k=B.clone());let J=new pe(k,H.material,D.length);if(x==="facade"){let Q=new Float32Array(D.length*4),st=new Float32Array(D.length*3),xt=new Float32Array(D.length*2);D.forEach((K,at)=>{V.compose(ht.set(K.x,K.y0+K.h/2,K.z),tt.identity(),bt.set(K.w,K.h,K.d)),J.setMatrixAt(at,V),J.setColorAt(at,Tt.set(K.wall)),Q.set([K.style,K.floorH,K.cellW,K.seed],at*4),st.set(K.glass,at*3),xt.set([K.shops?1:0,0],at*2)}),k.setAttribute("aStyle",new He(Q,4)),k.setAttribute("aGlass",new He(st,3)),k.setAttribute("aExtra",new He(xt,2))}else{let Q=x==="sign"?new Float32Array(D.length*2):null;D.forEach((st,xt)=>{tt.setFromAxisAngle(Nt,st.rot||0),V.compose(ht.set(...st.pos),tt,bt.set(...st.scale)),J.setMatrixAt(xt,V),st.color&&J.setColorAt(xt,Tt.set(st.color)),Q&&Q.set([st.sign%2*.5,.875-Math.floor(st.sign/2)*.125],xt*2)}),Q&&k.setAttribute("aSign",new He(Q,2))}J.name=x,J.castShadow=H.shadow,J.receiveShadow=!0,J.userData.lod=H.lod,x==="balconyGlass"&&(J.userData.noAO=!0),$.has(x)&&J.layers.set(1),J.instanceMatrix.needsUpdate=!0,J.computeBoundingSphere(),J.computeBoundingBox(),s.add(J),x==="facade"?Zr(J,0,(Q,st)=>{st.material=Q>360?T:G}):Zr(J,H.lod)}let Kt=[],et=new Map,ct=(x,D,B,H=null)=>{if(H&&et.has(H))return et.get(H);let k=We(t,x,D,B);return H&&et.set(H,k),k},Pt=new Map,Wt=(x,D)=>(Pt.has(x)||Pt.set(x,D()),Pt.get(x)),Rt=(x,D={})=>new Ht({color:1118481,map:x,emissive:16777215,emissiveMap:x,emissiveIntensity:.4,roughness:.5,...D}),nt=new Ht({color:1843235,roughness:.45,metalness:.6}),Ft=new Ht({color:3353120,emissive:16767392,emissiveIntensity:.3}),L=(x,D,B,H=!0)=>{x.traverse(k=>{k.isMesh&&(k.castShadow=!0,k.receiveShadow=!0)}),x.isGroup&&ps(x),x.userData.glow=H,s.add(x),Zr(x,700),Kt.push({mesh:x})};for(let x of o)if(x.kind==="hotel"){let{b:D,f:B,name:H}=x,k=ms(D,B),J=new Fe,Q=re(["#ffd27a","#ff7aa8","#7ad7ff"]),st=new zt(new Jt(7,.35,3.4),nt);st.position.set(0,4.25,1.7);let xt=new zt(new Jt(6.6,.05,3),Ft);xt.position.set(0,4.05,1.7),J.add(st,xt);for(let Mt of[-3.2,3.2]){let gt=new zt(new le(.07,.07,4.1,8),nt);gt.position.set(Mt,2.05,3.3),J.add(gt)}let K=H.replace("HOTEL ","").replace("THE ",""),at=ct(128,1024,(Mt,gt,ut)=>{Mt.fillStyle="#121519",Mt.fillRect(0,0,gt,ut),Mt.strokeStyle=Q,Mt.lineWidth=6,Mt.strokeRect(8,8,gt-16,ut-16),Mt.fillStyle=Q,Mt.textAlign="center",Mt.textBaseline="middle",Mt.shadowColor=Q,Mt.shadowBlur=14;let Zt=K.split(""),te=(ut-80)/Zt.length;Mt.font=`800 ${Math.min(100,te*.95)}px "Barlow Condensed", Impact, sans-serif`,Zt.forEach((ee,fe)=>Mt.fillText(ee,gt/2,50+te*(fe+.5)))},"blade"+K+Q),Et=Wt("blade"+K+Q,()=>Rt(at)),lt=Math.min(14,D.top-9);if(lt>5){let Mt=new zt(new Jt(.35,lt,2.2),[Et,Et,nt,nt,nt,nt]);Mt.position.set(k/2-2.2,7+lt/2,1.2),J.add(Mt)}let yt=ct(1024,128,(Mt,gt,ut)=>{Mt.clearRect(0,0,gt,ut),Mt.font='800 104px "Barlow Condensed", Impact, sans-serif',Mt.textAlign="center",Mt.textBaseline="middle",Mt.shadowColor=Q,Mt.shadowBlur=18,Mt.fillStyle=Q,Mt.fillText(H,gt/2,ut/2+4),Mt.shadowBlur=0,Mt.fillStyle="#fff6e0",Mt.fillText(H,gt/2,ut/2+4)},"roof"+H+Q),Xt=Wt("roof"+H+Q,()=>{let Mt=Rt(yt,{transparent:!0,alphaTest:.05,color:0});return Mt.userData.boost=1.4,Mt}),Z=new zt(new Ue(Math.min(k*.85,26),Math.min(k*.85,26)/8),Xt);Z.position.set(0,D.top-D.y0+1.9,-.6),J.add(Z);let[vt,_t]=gs(D,B,0,0);J.position.set(vt,Qt,_t),J.rotation.y=B.rot,L(J,vt,_t)}else if(x.kind==="garage"){let{b:D,f:B}=x,H=ct(128,128,(K,at,Et)=>{K.fillStyle="#1d5fbf",K.fillRect(0,0,at,Et),K.strokeStyle="#ffffff",K.lineWidth=8,K.strokeRect(8,8,at-16,Et-16),K.fillStyle="#ffffff",K.font="800 100px Arial, sans-serif",K.textAlign="center",K.textBaseline="middle",K.fillText("P",at/2,Et/2+6)},"garageP"),k=Wt("garageP",()=>Rt(H,{color:16777215})),J=new zt(new Jt(1.8,1.8,.3),[nt,nt,nt,nt,k,k]),Q=ms(D,B),[st,xt]=gs(D,B,Q/2-1.5,.3);J.position.set(st,D.top-2,xt),J.rotation.y=B.rot,L(J,st,xt)}else if(x.kind==="motelSign"){let{x:D,z:B,f:H,name:k}=x,J=ct(512,256,(at,Et,lt)=>{at.fillStyle="#16303a",at.fillRect(0,0,Et,lt),at.strokeStyle="#ff5a6e",at.lineWidth=10,at.strokeRect(10,10,Et-20,lt-20),at.textAlign="center",at.textBaseline="middle",at.shadowColor="#ff5a6e",at.shadowBlur=20,at.fillStyle="#ff7a8a",at.font='800 110px "Barlow Condensed", Impact, sans-serif',at.fillText("MOTEL",Et/2,92),at.shadowColor="#5fe8ff",at.fillStyle="#9ff3ff",at.font='700 54px "Barlow Condensed", Impact, sans-serif',at.fillText(k,Et/2,186),at.shadowBlur=0,at.fillStyle="#ffd25a",at.font="700 30px Arial",at.fillText("VACANCY",Et/2,232)},"motel"+k),Q=Wt("motel"+k,()=>Rt(J)),st=new Fe,xt=new zt(new le(.22,.28,7.5,10),nt);xt.position.y=3.75;let K=new zt(new Jt(5.4,2.7,.35),[nt,nt,nt,nt,Q,Q]);K.position.y=8.6,st.add(xt,K),st.position.set(D,Qt,B),st.rotation.y=H.rot+Math.PI/2,L(st,D,B)}let Dt=new Ht({color:2236962,emissive:16777215,emissiveIntensity:0,roughness:.4}),It=new pe(z,Dt,a.length);a.forEach((x,D)=>{V.compose(ht.set(x.x,x.y,x.z),tt.identity(),bt.set(x.w+.5,.7,x.d+.5)),It.setMatrixAt(D,V),It.setColorAt(D,Tt.set(x.color))}),s.add(It),Dt.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},Dt.customProgramCacheKey=()=>"crown";let St=new en({color:new Lt(6,.3,.2)}),Y=new pe(new wn(.45,8,6),St,c.length);c.forEach(([x,D,B],H)=>{V.makeTranslation(x,D,B),Y.setMatrixAt(H,V)}),s.add(Y);let q=Ny(s,l),W=[];for(let x of h)W.push(Fy(s,t,x));let rt=new Set(Kt.flatMap(({mesh:x})=>{let D=[];return x.traverse(B=>{if(B.isMesh)for(let H of[].concat(B.material))(H.emissiveMap||H===Ft)&&D.push(H)}),D})),wt=new Set(W.map(x=>x.material)),Ut=new ir(160,x=>[x.w/2,x.d/2]).addAll(i);return{colliders:n,buildingTops:i,emptyLots:r,topsGrid:Ut,stats:{buildings:n.length,facadeBoxes:[...e.keys()].filter(x=>x.startsWith("facade")).reduce((x,D)=>x+e.get(D).length,0)},update(x,D){Dt.emissiveIntensity=x*1.6,St.color.setRGB(8*(.15+.85*x)*(Math.sin(D*3.2)>.2?1:.04),.25,.15),F.emissiveIntensity=.3+x*2;for(let H of rt)H.emissiveIntensity=(.3+x*2.2)*(H.userData.boost||1);let B=Math.sin(D*37)>.93?.3:1;for(let H of wt)H.emissiveIntensity=(.3+x*2.2)*(H.userData.flicker?B:1);q&&(q.material.userData.night.value=x)}}}function Ny(s,t){let e={value:0},n=zn("hillhouse",{color:16777215,roughness:.85},{uniforms:{night:e},fragmentPars:"uniform float night; float paHouseGlow;",color:`
      {
        float h = pa_hash12(floor(vPaWorld.xz * 0.2));
        float win = step(0.5, fract(vPaWorld.y * 0.45)) * step(0.4, fract((vPaWorld.x + vPaWorld.z) * 0.35)) * step(0.3, abs(vPaNormalW.y - 1.0));
        paHouseGlow = win * step(h, 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05), win * 0.7);
      }`,emissive:"totalEmissiveRadiance += vec3(1.0, 0.7, 0.4) * paHouseGlow * night * 2.5;"}),i=t.filter(([h,l])=>mi(h,l)>4),r=new pe(new Jt(1,1,1),n,i.length),o=new Ot,a=new de,c=new Lt;return i.forEach(([h,l],f)=>{let d=mt(8,16),u=mt(8,14),g=mt(4,8);a.setFromAxisAngle(new U(0,1,0),dt()*Math.PI),o.compose(new U(h,mi(h,l)+g/2-1,l),a,new U(d,g,u)),r.setMatrixAt(f,o),r.setColorAt(f,c.set(re(Bn.stucco)))}),n.userData.night=e,r.castShadow=!1,r.receiveShadow=!0,s.add(r),r}var mu=new Map;function Fy(s,t,{x:e,y:n,z:i,face:r,text:o,color:a}){let c=o+a;if(!mu.has(c)){let f=We(t,512,128,(u,g,v)=>{u.fillStyle="#0b0d10",u.fillRect(0,0,g,v),u.font='700 70px "Barlow Condensed", Impact, sans-serif',u.textAlign="center",u.textBaseline="middle",u.shadowColor=a,u.shadowBlur=18,u.fillStyle=a,u.fillText(o,g/2,v/2+3),u.shadowBlur=0,u.fillStyle="#ffffffcc",u.fillText(o,g/2,v/2+3),u.strokeStyle=a,u.lineWidth=5,u.strokeRect(8,8,g-16,v-16)}),d=new Ht({color:1118481,map:f,emissive:16777215,emissiveMap:f,emissiveIntensity:1,roughness:.5});d.userData.flicker=Me(.25),mu.set(c,d)}let h=Math.min(12,3+o.length*.9),l=new zt(new Ue(h,h/4),mu.get(c));return l.position.set(e,n,i),l.rotation.y=r==="west"?-Math.PI/2:r==="east"?Math.PI/2:r==="north"?Math.PI:0,s.add(l),Zr(l,520),l}var Qo=class s extends zt{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new cn;let n=this,i=e.color!==void 0?new Lt(e.color):new Lt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||s.ReflectorShader,h=e.multisample!==void 0?e.multisample:4,l=new Qn,f=new U,d=new U,u=new U,g=new Ot,v=new U(0,0,-1),m=new ke,p=new U,_=new U,b=new ke,y=new Ot,w=this.camera,A=new Ze(r,o,{samples:h,type:un}),P=new Se({name:c.name!==void 0?c.name:"unspecified",uniforms:fn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});P.uniforms.tDiffuse.value=A.texture,P.uniforms.color.value=i,P.uniforms.textureMatrix.value=y,this.material=P,this.onBeforeRender=function(R,S,E){if(d.setFromMatrixPosition(n.matrixWorld),u.setFromMatrixPosition(E.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(d,u),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(d),g.extractRotation(E.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(u),_.subVectors(d,v),_.reflect(f).negate(),_.add(d),w.position.copy(p),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(f),w.lookAt(_),w.far=E.far,w.updateMatrixWorld(),w.projectionMatrix.copy(E.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(w.projectionMatrix),y.multiply(w.matrixWorldInverse),y.multiply(n.matrixWorld),l.setFromNormalAndCoplanarPoint(f,d),l.applyMatrix4(w.matrixWorldInverse),m.set(l.normal.x,l.normal.y,l.normal.z,l.constant);let G=w.projectionMatrix;b.x=(Math.sign(m.x)+G.elements[8])/G.elements[0],b.y=(Math.sign(m.y)+G.elements[9])/G.elements[5],b.z=-1,b.w=(1+G.elements[10])/G.elements[14],m.multiplyScalar(2/m.dot(b)),G.elements[2]=m.x,G.elements[6]=m.y,G.elements[10]=m.z+1-a,G.elements[14]=m.w,n.visible=!1;let F=R.getRenderTarget(),O=R.xr.enabled,X=R.shadowMap.autoUpdate;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(A),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(S,w),R.xr.enabled=O,R.shadowMap.autoUpdate=X,R.setRenderTarget(F);let $=E.viewport;$!==void 0&&R.state.viewport($),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()}}};Qo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var zy=`
uniform mat4 textureMatrix;
uniform float time;
varying vec4 vMirror;
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  float offshore = smoothstep(${An.toFixed(1)}, ${(An-70).toFixed(1)}, wp.x);
  wp.y += (sin(wp.x * 0.045 + time * 0.9) * 0.22 + sin(wp.z * 0.031 - wp.x * 0.017 + time * 0.65) * 0.18) * offshore;
  vWorld = wp.xyz;
  vMirror = textureMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Oy=`
uniform sampler2D tDiffuse;
uniform float useMirror;
uniform float time;
uniform vec3 sunLight;
uniform vec3 ambient;
varying vec4 vMirror;
varying vec3 vWorld;
${Xr}
${gc}
#include <fog_pars_fragment>

vec2 waveGrad(vec2 p, float t) {
  vec2 g = vec2(0.0);
  // Directional swell, chop and ripples.
  const int N = 7;
  vec3 waves[N] = vec3[N](
    vec3(-0.95, 0.31, 0.08), vec3(-0.7, -0.71, 0.13), vec3(-0.99, -0.12, 0.21),
    vec3(-0.4, 0.92, 0.37), vec3(-0.83, 0.55, 0.61), vec3(0.2, -0.98, 0.93), vec3(-0.6, -0.8, 1.7));
  for (int i = 0; i < N; i++) {
    vec2 d = normalize(waves[i].xy);
    float k = waves[i].z;
    float amp = 0.11 / (1.0 + k * 5.0);
    float ph = dot(d, p) * k + t * sqrt(9.8 * k);
    g += d * k * amp * cos(ph);
  }
  return g;
}

void main() {
  vec3 V = cameraPosition - vWorld;
  float dist = length(V);
  V /= dist;
  vec2 g = waveGrad(vWorld.xz, time);
  // High frequency ripples fade out with distance to avoid sparkle aliasing.
  float detail = 1.0 - smoothstep(40.0, 260.0, dist);
  vec2 rp = vWorld.xz * 0.9 + vec2(time * 0.35, time * 0.2);
  float r0 = pa_noise(rp), rx = pa_noise(rp + vec2(0.15, 0.0)), rz = pa_noise(rp + vec2(0.0, 0.15));
  g += vec2(r0 - rx, r0 - rz) * 0.5 * detail;
  vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
  // Flatten toward the horizon so distant water acts like a mirror.
  n = normalize(mix(n, vec3(0.0, 1.0, 0.0), smoothstep(250.0, 1400.0, dist) * 0.7));

  float cosV = max(dot(n, V), 0.0);
  float fres = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
  vec3 R = reflect(-V, n);
  R.y = abs(R.y);
  vec3 refl;
  if (useMirror > 0.5) {
    vec4 mc = vMirror;
    mc.xy += n.xz * 3.5 * mc.w / max(dist * 0.08 + 1.0, 1.0);
    refl = texture2DProj(tDiffuse, mc).rgb;
  } else {
    refl = pa_sky(R, false, true);
  }

  float shoreDist = ${An.toFixed(1)} - vWorld.x; // meters offshore
  vec3 deep = vec3(0.004, 0.025, 0.04);
  vec3 shallow = vec3(0.02, 0.12, 0.12);
  vec3 body = mix(shallow, deep, smoothstep(0.0, 40.0, shoreDist));
  body *= ambient * 1.2 + sunLight * 0.08;

  vec3 sunDir = skySunDir;
  float sunDot = max(dot(R, sunDir), 0.0);
  float spec = pow(sunDot, 900.0) * 60.0 + pow(sunDot, 120.0) * 2.5 + pow(sunDot, 18.0) * 0.12;
  vec3 col = mix(body, refl, fres) + sunLight * spec * step(0.0, sunDir.y);

  // Breaking waves and swash foam close to shore.
  float nfoam = pa_noise(vWorld.xz * vec2(0.12, 0.06) + time * 0.1);
  float front = sin(shoreDist * 0.42 - time * 1.3 + nfoam * 4.0);
  float foam = smoothstep(0.82, 0.98, front) * smoothstep(28.0, 6.0, shoreDist);
  float swash = smoothstep(4.5 + sin(time * 0.8 + vWorld.z * 0.05) * 2.5, 0.0, shoreDist);
  foam = max(foam, swash * (0.55 + 0.45 * pa_noise(vWorld.xz * 0.8 + time)));
  foam *= smoothstep(0.25, 0.6, pa_noise(vWorld.xz * 0.35 + vec2(time * 0.2, 0.0)) + 0.3);
  vec3 foamCol = vec3(0.85, 0.88, 0.9) * (ambient * 1.3 + sunLight * 0.35);
  col = mix(col, foamCol, clamp(foam, 0.0, 1.0));

  float alpha = smoothstep(-1.0, 3.0, shoreDist);
  gl_FragColor = vec4(col, alpha);
  #include <fog_fragment>
}`;function Od(s,t){let n=ce.maxZ-ce.minZ+3e3,i=new Ue(3200,n,128,256),r=new Qo(i,{textureWidth:512,textureHeight:512,clipBias:.003,multisample:0}),o=r.material.uniforms,a={...fn.clone(Vt.fog),...rn,fogSunColor:rn.fogSunColor,fogSunDir:rn.fogSunDir,fogHeightFalloff:rn.fogHeightFalloff,tDiffuse:o.tDiffuse,textureMatrix:o.textureMatrix,useMirror:{value:1},time:{value:0},sunLight:{value:new Lt},ambient:{value:new Lt}};r.material.dispose(),r.material=new Se({uniforms:a,vertexShader:zy,fragmentShader:Oy,fog:!0,transparent:!0}),r.rotation.x=-Math.PI/2,r.position.set(An+8-3200/2,au,0),r.userData.noAO=!0,r.camera.layers.set(0),r.renderOrder=1,r.frustumCulled=!1,s.add(r);let c=new Ot,h=new bi(new Uint8Array([0,0,0,255]),1,1);h.needsUpdate=!0;let l=r.onBeforeRender,f=[];r.updateMatrixWorld(),r.geometry.computeBoundingBox();let d=r.geometry.boundingBox.clone().applyMatrix4(r.matrixWorld);d.expandByVector(new U(0,2,0));let u=new is,g=new Ot,v=function(...b){let y=b[2];if(!(y&&On.wetness.value<.02&&(g.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),u.setFromProjectionMatrix(g),!u.intersectsBox(d)))){On.mirrorTex.value=h,On.useMirror.value=0;for(let w of f)w.visible=!1;l.apply(this,b);for(let w of f)w.visible=!0;c.copy(r.matrixWorld).invert(),On.mirrorMatrix.value.copy(o.textureMatrix.value).multiply(c),On.mirrorTex.value=r.getRenderTarget().texture,On.useMirror.value=1}};r.onBeforeRender=v;let m=!0,p=By(s,t);for(let b of Rn)b.plain&&p.lamps.push(...ky(s,t,b));let _=Hy(s);return{ocean:r,pier:p,mirrorHide:f,setReflections(b,y=.5){m=b,a.useMirror.value=b?1:0,r.onBeforeRender=b?v:()=>{},this.resize(y)},resize(b=.5){if(!m)return;let y=t.getDrawingBufferSize(new $t);r.getRenderTarget().setSize(Math.max(256,Math.round(y.x*b)),Math.max(256,Math.round(y.y*b)))},update(b,y){a.time.value=b,m||(On.mirrorTex.value=h,On.useMirror.value=0),On.worldTime.value=b,a.sunLight.value.copy(y.sun.color).multiplyScalar(y.elevation>-1?y.sun.intensity:0),a.ambient.value.copy(y.hemi.color).multiplyScalar(y.hemi.intensity*.6),p.update(b,y.lampFactor),_.update(y.lampFactor)}}}function Bd(){return zn("wood",{color:16777215,roughness:.8},{color:`
      {
        vec2 p = vPaWorld.xz;
        float plank = (abs(vPaNormalW.y) > 0.5 ? p.y : p.x) / 0.3;
        float fw = max(fwidth(plank), 0.002);
        float gap = pa_band(fract(plank), 0.0, 0.07, fw);
        float id = pa_hash12(vec2(floor(plank), 3.0));
        vec3 col = mix(vec3(0.3, 0.22, 0.15), vec3(0.42, 0.33, 0.23), id) * (0.82 + pa_noise(vec2(p.x * 3.0, plank)) * 0.25);
        diffuseColor.rgb = col * (1.0 - gap * 0.55);
      }`})}function By(s,t){let e=new Fe,{x0:n,x1:i,z:r,halfWidth:o,deckY:a}=Ri,c=Bd(),h=n-i,l=new zt(new Jt(h,.6,o*2),c);l.position.set((n+i)/2,a-.3,r),l.castShadow=l.receiveShadow=!0,e.add(l);let f=Ri.rampStart-n,d=Math.atan2(a-.16,f),u=new Jt(Math.hypot(f,a),.6,o*2),g=new zt(u,c);g.position.set((Ri.rampStart+n)/2,(a+.16)/2-.3,r),g.rotation.z=-d,g.castShadow=g.receiveShadow=!0,e.add(g);let v=[];for(let q=Ri.rampStart-8;q>=i;q-=9)for(let W of[-o+1,0,o-1])v.push([q,r+W]);let m=new le(.32,.38,1,8),p=new pe(m,new Ht({color:4930349,roughness:.9}),v.length),_=new Ot;v.forEach(([q,W],rt)=>{let Ut=(fs(q,r)??a)-.5;_.compose(new U(q,(-6+Ut)/2,W),new de,new U(1,Ut- -6,1)),p.setMatrixAt(rt,_)}),p.castShadow=!0,e.add(p),Ri.piles=v.filter(([q])=>q>An-4).map(([q,W])=>({x:q,z:W,r:.45}));let b=new Ht({color:15262938,roughness:.5,metalness:.3});for(let q of[-1,1])for(let W of[.55,1.05]){let rt=new zt(new Jt(h,.08,.08),b);rt.position.set((n+i)/2,a+W,r+q*(o-.1)),e.add(rt)}let y=Math.floor(h/3),w=new pe(new Jt(.1,1.1,.1),b,y*2);for(let q=0;q<y;q++)for(let[W,rt]of[-1,1].entries())_.makeTranslation(n-q*3,a+.55,r+rt*(o-.1)),w.setMatrixAt(q*2+W,_);e.add(w);let A=new Ht({color:15327695,roughness:.75}),P=new Ht({color:3108730,roughness:.5,metalness:.2});for(let[q,W,rt,wt,Ut]of[[i+14,r+4.5,18,7,6],[i+36,r-5,12,6,5]]){let I=new zt(new Jt(rt,Ut,wt),A);I.position.set(q,a+Ut/2,W),I.castShadow=I.receiveShadow=!0,e.add(I);let x=new zt(new Jt(rt+1,.4,wt+1),P);x.position.set(q,a+Ut+.2,W),e.add(x)}let R=new Ht({color:1780275,roughness:.4,metalness:.6});for(let q of[-1,1]){let W=new zt(new Jt(.6,8,.6),R);W.position.set(Ri.rampStart-2,4.1,r+q*(o+.4)),W.castShadow=!0,e.add(W)}let S=We(t,1024,160,(q,W,rt)=>{q.fillStyle="#0d1418",q.fillRect(0,0,W,rt),q.textAlign="center",q.textBaseline="middle",q.font='800 96px "Barlow Condensed", Impact, sans-serif',q.shadowColor="#ff8a3d",q.shadowBlur=24,q.fillStyle="#ffb36b",q.fillText("VISTA PAC\xCDFICA PIER",W/2,rt/2+4),q.shadowBlur=0,q.fillStyle="#fff3e0",q.fillText("VISTA PAC\xCDFICA PIER",W/2,rt/2+4)}),E=new Ht({color:1118481,map:S,emissive:16777215,emissiveMap:S,emissiveIntensity:1}),z=new zt(new Jt(.4,2.6,o*2+1.4),R);z.position.set(Ri.rampStart-2,8.6,r),e.add(z);for(let q of[-1,1]){let W=new zt(new Ue(o*2+1.2,2.4),E);W.position.set(Ri.rampStart-2+q*.21,8.6,r),W.rotation.y=q*Math.PI/2,e.add(W)}let G=new Fe,F=19,O=a+F+3.5,X=i+55,$=r+.5;G.position.set(X,O,$);let T=new Ht({color:14278112,roughness:.35,metalness:.8}),V=new ss(F,.22,8,96);for(let q of[-1.3,1.3]){let W=new zt(V,T);W.position.z=q,G.add(W);let rt=new zt(new ss(F*.55,.14,6,64),T);rt.position.z=q,G.add(rt)}let tt=24,ht=new le(.07,.07,F,4);ht.translate(0,F/2,0);for(let q=0;q<tt;q++)for(let W of[-1.3,1.3]){let rt=new zt(ht,T);rt.rotation.z=q/tt*Math.PI*2,rt.position.z=W,G.add(rt)}let bt=new zt(new le(1.1,1.1,3.6,16),T);bt.rotation.x=Math.PI/2,G.add(bt),e.add(G);for(let q of[-3.5,3.5])for(let W of[-1,1]){let rt=Math.hypot(9,O-a),wt=new zt(new le(.28,.4,rt,8),T);wt.position.set(X+W*4.5,(O+a)/2,$+q),wt.rotation.z=W*Math.atan2(9,O-a),wt.castShadow=!0,e.add(wt)}let Tt=16,Nt=new Ht({color:16777215,roughness:.4,metalness:.3}),Gt=new pe(new Jt(1.8,2,1.8),Nt,Tt),Kt=["#e2523a","#f2c14e","#3aa0c8","#f7f2e6"],et=new Lt;for(let q=0;q<Tt;q++)Gt.setColorAt(q,et.set(Kt[q%4]));Gt.castShadow=!0,e.add(Gt);let ct=9,Pt=tt*ct+96,Wt=new en({color:16777215}),Rt=new pe(new wn(.16,6,4),Wt,Pt),nt=[];for(let q=0;q<tt;q++){let W=q/tt*Math.PI*2;for(let rt=1;rt<=ct;rt++){let wt=rt/ct*F;nt.push([-Math.sin(W)*wt,Math.cos(W)*wt,1.45,rt/ct,q])}}for(let q=0;q<96;q++){let W=q/96*Math.PI*2;nt.push([Math.cos(W)*F,Math.sin(W)*F,1.5,1,q])}nt.forEach(([q,W,rt],wt)=>{_.makeTranslation(q,W,rt),Rt.setMatrixAt(wt,_)}),G.add(Rt),Rt.layers.set(1);let Ft=[];for(let q=n-6;q>i+4;q-=16)for(let W of[-1,1])Ft.push([q,r+W*(o-.4)]);let L=new pe(new le(.06,.09,4.5,6),R,Ft.length),Dt=new Ht({color:16773846,emissive:16765066,emissiveIntensity:0}),It=new pe(new wn(.28,10,8),Dt,Ft.length);Ft.forEach(([q,W],rt)=>{_.makeTranslation(q,a+2.25,W),L.setMatrixAt(rt,_),_.makeTranslation(q,a+4.6,W),It.setMatrixAt(rt,_)}),e.add(L,It),ps(e,{exclude:[G]}),s.add(e);let St=new Lt,Y=new tn;return{lamps:Ft.map(([q,W])=>[q,a+4.6,W]),update(q,W){let rt=q*.06;G.rotation.z=rt;for(let Ut=0;Ut<Tt;Ut++){let I=rt+Ut/Tt*Math.PI*2;Y.position.set(X+Math.cos(I)*F,O+Math.sin(I)*F-1.4,$),Y.updateMatrix(),Gt.setMatrixAt(Ut,Y.matrix)}Gt.instanceMatrix.needsUpdate=!0;let wt=.25+W*5.5;for(let Ut=0;Ut<nt.length;Ut++){let[,,,I,x]=nt[Ut],D=(q*.08+I*.35+x*.013)%1,B=.55+.45*Math.sin(q*4-I*8+x*.5);St.setHSL(D,.85,.55),St.multiplyScalar(wt*B),Rt.setColorAt(Ut,St)}Rt.instanceColor.needsUpdate=!0,Dt.emissiveIntensity=W*3,kd.emissiveIntensity=W*3,E.emissiveIntensity=.3+W*1.8}}}var kd=new Ht({color:16773846,emissive:16765066,emissiveIntensity:0});function ky(s,t,e){let n=new Fe,{x0:i,x1:r,z:o,halfWidth:a,deckY:c}=e,h=Bd(),l=i-r,f=new Ot,d=new zt(new Jt(l,.6,a*2),h);d.position.set((i+r)/2,c-.3,o);let u=e.rampStart-i,g=new zt(new Jt(Math.hypot(u,c),.6,a*2),h);g.position.set((e.rampStart+i)/2,(c+.16)/2-.3,o),g.rotation.z=-Math.atan2(c-.16,u);let v=new zt(new Jt(13,.6,9),h);v.position.set(r+9,c-.31,o+a+4.5);for(let O of[d,g,v])O.castShadow=O.receiveShadow=!0,n.add(O);let m=[];for(let O=e.rampStart-8;O>=r;O-=9)for(let X of[-a+1,0,a-1])m.push([O,o+X]);let p=new pe(new le(.32,.38,1,8),new Ht({color:4930349,roughness:.9}),m.length);m.forEach(([O,X],$)=>{let V=(fs(O,o)??c)-.5;f.compose(new U(O,(-6+V)/2,X),new de,new U(1,V- -6,1)),p.setMatrixAt($,f)}),p.castShadow=!0,n.add(p),e.piles=m.filter(([O])=>O>An-4).map(([O,X])=>({x:O,z:X,r:.45}));let _=new Ht({color:7301728,roughness:.6,metalness:.3});for(let O of[-1,1])for(let X of[.55,1.05]){let $=new zt(new Jt(l,.08,.08),_);$.position.set((i+r)/2,c+X,o+O*(a-.1)),n.add($)}let b=Math.floor(l/3),y=new pe(new Jt(.1,1.1,.1),_,b*2);for(let O=0;O<b;O++)for(let[X,$]of[-1,1].entries())f.makeTranslation(i-O*3,c+.55,o+$*(a-.1)),y.setMatrixAt(O*2+X,f);n.add(y);let w=new Ht({color:8368296,roughness:.75}),A=new Ht({color:9059116,roughness:.6}),P=new zt(new Jt(9,4.2,6),w);P.position.set(r+9,c+2.1,o+a+5),P.castShadow=P.receiveShadow=!0;let R=new zt(new Jt(10.2,.35,7.2),A);R.position.set(r+9,c+4.35,o+a+5),n.add(P,R);let S=We(t,512,128,(O,X,$)=>{O.fillStyle="#10222a",O.fillRect(0,0,X,$),O.textAlign="center",O.textBaseline="middle",O.font='800 76px "Barlow Condensed", Impact, sans-serif',O.fillStyle="#ffe9b8",O.fillText("BAIT & TACKLE",X/2,$/2+4)}),E=new zt(new Ue(7,1.75),new Ht({map:S,emissive:16777215,emissiveMap:S,emissiveIntensity:.5,roughness:.6}));E.position.set(r+9,c+3.4,o+a+1.98),E.rotation.y=Math.PI,n.add(E);let z=[];for(let O=i-6;O>r+4;O-=18)for(let X of[-1,1])z.push([O,o+X*(a-.4)]);let G=new pe(new le(.06,.09,4.5,6),_,z.length),F=new pe(new wn(.28,10,8),kd,z.length);return z.forEach(([O,X],$)=>{f.makeTranslation(O,c+2.25,X),G.setMatrixAt($,f),f.makeTranslation(O,c+4.6,X),F.setMatrixAt($,f)}),n.add(G,F),ps(n),s.add(n),z.map(([O,X])=>[O,c+4.6,X])}function Hy(s){let t=new Fe,e=new Ot,n=new Ht({color:6269385,roughness:.6}),i=new Ht({color:15854296,roughness:.6}),r=new Ht({color:14175290,roughness:.6});for(let u=ce.minZ+36;u<=ce.maxZ-30;u+=130){if(Rn.some(w=>Math.abs(u-w.z)<40))continue;let g=new Fe,v=new zt(new Jt(3.2,2.4,3.2),n);v.position.y=3.2;let m=new zt(new Si(2.7,1.1,4),r);m.position.y=4.95,m.rotation.y=Math.PI/4;let p=new zt(new Jt(4.4,.18,4.4),i);p.position.y=1.95;let _=new zt(new Jt(.1,.9,2.4),new Ht({color:1911347,roughness:.1,metalness:.6}));_.position.set(-1.62,3.5,0),g.add(v,m,p,_);for(let w of[-1.8,1.8])for(let A of[-1.8,1.8]){let P=new zt(new Jt(.18,2.4,.18),i);P.position.set(w,.8,A),g.add(P)}let b=new zt(new Jt(4.5,.12,1.4),i);b.position.set(3.6,1,0),b.rotation.z=-.42,g.add(b);let y=-388;g.position.set(y,-.02-(on-y)*.0105,u),g.traverse(w=>{w.isMesh&&(w.castShadow=!0,w.receiveShadow=!0)}),t.add(g)}let o=["#e8553a","#f0c24b","#3b8fc2","#f3efe4","#45a37f"],a=130,c=new pe(new Si(1.4,.55,12,1,!0),new Ht({color:16777215,roughness:.8,side:hn}),a),h=new pe(new le(.03,.03,2.3,4),i,a),l=new pe(new Jt(.9,.02,1.9),new Ht({color:16777215,roughness:.9}),a),f=new Lt,d=new de;for(let u=0;u<a;u++){let g=mt(ce.minZ+30,ce.maxZ-30);Rn.some(p=>Math.abs(g-p.z)<14)&&(g+=30);let v=mt(-398,-366),m=-.02-(on-v)*.0105;d.setFromEuler(new Qe(mt(-.12,.12),0,mt(-.12,.12))),e.compose(new U(v,m+2.3,g),d,new U(1,1,1)),c.setMatrixAt(u,e),e.compose(new U(v,m+1.15,g),d,new U(1,1,1)),h.setMatrixAt(u,e),c.setColorAt(u,f.set(re(o))),d.setFromAxisAngle(new U(0,1,0),mt(0,Math.PI)),e.compose(new U(v+mt(-1.5,1.5),m+.02,g+mt(-1.5,1.5)),d,new U(1,1,1)),l.setMatrixAt(u,e),l.setColorAt(u,f.set(re(o)))}c.castShadow=h.castShadow=!0,l.receiveShadow=!0,t.add(c,h,l);for(let u of[c,h,l])u.layers.set(1);return ps(t),s.add(t),{update(){}}}var xu={value:new Lt};function Gy(s){return We(s,256,1024,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<150;i++){let r=i/150,o=n*(.04+r*.94),a=e*.47*Math.sin(Math.PI*Math.pow(r,.75))*(.85+dt()*.3),c=70+dt()*50,h=40+dt()*30,l=25+dt()*20;t.strokeStyle=`rgb(${h},${c},${l})`,t.lineWidth=3.2+dt()*2.2;for(let f of[-1,1])t.beginPath(),t.moveTo(e/2,o),t.quadraticCurveTo(e/2+f*a*.5,o-a*.25,e/2+f*a,o-a*.55+dt()*8),t.stroke()}t.strokeStyle="#5b5a34",t.lineWidth=6,t.beginPath(),t.moveTo(e/2,n*.02),t.lineTo(e/2,n),t.stroke()})}function Vy(s){return We(s,512,512,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<46;i++){let r=dt()*Math.PI*2,o=Math.sqrt(dt())*e*.36,a=e/2+Math.cos(r)*o,c=n/2+Math.sin(r)*o,h=r+(dt()-.5)*1.2,l=40+dt()*50,f=.55+.45*(o/(e*.36));t.strokeStyle=`rgba(60,48,30,${.8})`,t.lineWidth=2,t.beginPath(),t.moveTo(a,c),t.lineTo(a+Math.cos(h)*l,c+Math.sin(h)*l),t.stroke();for(let d=0;d<16;d++){let u=dt(),g=a+Math.cos(h)*l*u+(dt()-.5)*18,v=c+Math.sin(h)*l*u+(dt()-.5)*18,m=(70+dt()*70)*f,p=(28+dt()*32)*f,_=(18+dt()*26)*f;t.fillStyle=`rgb(${p|0},${m|0},${_|0})`,t.save(),t.translate(g,v),t.rotate(h+(dt()-.5)*2.2),t.beginPath(),t.ellipse(0,0,9+dt()*7,3.5+dt()*2.5,0,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(190,210,140,${.25*f})`,t.lineWidth=1,t.beginPath(),t.moveTo(-8,0),t.lineTo(8,0),t.stroke(),t.restore()}}})}function Wy(s,t,e,n,i){let o=[],a=[],c=[],h=new U(Math.cos(s),0,Math.sin(s)),l=new U(-h.z,0,h.x),f=new U;for(let u=0;u<=7;u++){let g=u/7,v=t-i*g*g;u>0&&(f=f.clone().addScaledVector(h,Math.cos(v)*e/7).add(new U(0,Math.sin(v)*e/7,0)));let m=n*Math.sin(Math.PI*Math.min(1,.15+g*.95))*.5+.05,p=.18*m;for(let[_,b]of[[-1,0],[0,.5],[1,1]]){let y=f.clone().addScaledVector(l,_*m);y.y+=_===0?p:-p*.2,o.push(y.x,y.y,y.z),a.push(b,1-g)}if(u>0){let _=(u-1)*3,b=u*3;c.push(_,b,_+1,_+1,b,b+1,_+1,b+1,_+2,_+2,b+1,b+2)}}let d=new Le;return d.setAttribute("position",new ie(o,3)),d.setAttribute("uv",new ie(a,2)),d.setIndex(c),d.computeVertexNormals(),d}function Xy(s,t,e){let n=[];for(let i=0;i<s;i++){let r=i%3,o=i/s*Math.PI*2+dt()*.3,a=[.95,.45,.05][r]+dt()*.2,c=[1.3,1.6,1.4][r];n.push(Wy(o,a,t*(r===0?.8:1)*mt(.88,1.1),e,c))}return Oe(n)}function qy(s){let t=new le(.62,1,1,9,12,!0);t.translate(0,.5,0);let e=t.attributes.position;for(let n=0;n<e.count;n++){let i=e.getY(n);e.setX(n,e.getX(n)+s*i*i)}return t.computeVertexNormals(),t}function Hd(s,t,e={}){let n=zn(t,{map:s,alphaTest:.42,side:hn,roughness:.72,metalness:0,...e},{uniforms:{worldTime:rn.worldTime,leafSun:xu,skySunDir:rn.skySunDir},vertexPars:"uniform float worldTime;",vertex:"",fragmentPars:"uniform vec3 leafSun; uniform vec3 skySunDir;",color:"diffuseColor.rgb *= 0.8 + 0.4 * pa_noise(vPaWorld.xz * 0.7 + vPaWorld.y);",emissive:`
      {
        // Sunlight shining through the leaves when they are backlit.
        vec3 vdir = normalize(vPaWorld - cameraPosition);
        float back = pow(max(dot(vdir, skySunDir), 0.0), 3.0);
        totalEmissiveRadiance += diffuseColor.rgb * leafSun * (back * 0.55 + 0.04);
      }`}),i=n.onBeforeCompile;return n.onBeforeCompile=(r,o)=>{i(r,o),r.vertexShader=r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        float ph = 0.0;
        #ifdef USE_INSTANCING
          ph = instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.17;
        #endif
        float reach = length(position.xz);
        float sway = sin(worldTime * 1.4 + ph + reach * 0.4) * 0.5 + sin(worldTime * 2.3 + ph * 1.7) * 0.25;
        transformed.y += sway * 0.05 * reach;
        transformed.xz += normalize(position.xz + 1e-4) * sway * 0.035 * reach;
      }`)},n}function Yy(){return zn("palmtrunk",{color:16777215,roughness:.9},{color:`
      {
        float rings = pa_band(fract(vPaWorld.y * 3.2 + pa_noise(vPaWorld.xz * 3.0) * 0.4), 0.0, 0.18, fwidth(vPaWorld.y * 3.2));
        vec3 bark = mix(vec3(0.33, 0.29, 0.24), vec3(0.45, 0.4, 0.33), pa_noise(vec2(atan(vPaNormalW.z, vPaNormalW.x) * 4.0, vPaWorld.y * 0.8)));
        diffuseColor.rgb = bark * (1.0 - rings * 0.3);
      }`})}function gu({lobes:s,cards:t,spread:e,crownY:n,lobeR:i,trunkH:r,columnar:o=!1}){let a=[],c=[],h=new le(.2,.34,r+.4,7);h.translate(0,(r+.4)/2,0),c.push(h);let l=[];for(let g=0;g<s;g++){if(o){let p=g/Math.max(1,s-1);l.push([new U((dt()-.5)*.3,n+p*6.4,(dt()-.5)*.3),i*(1.05-p*.55)]);continue}if(g===s-1){l.push([new U(0,n+i*.75,0),i*1.05]);continue}let v=g/(s-1)*Math.PI*2+dt()*.6,m=e*mt(.75,1.1);l.push([new U(Math.cos(v)*m,n+mt(-.6,.5),Math.sin(v)*m),i*mt(.85,1.1)])}let f=new U(0,r*.92,0),d=new U,u=new U;for(let[g,v]of l){if(!o){let m=g.clone().sub(f),p=m.length()*.85,_=new le(.07,.14,p,5);_.translate(0,p/2,0),_.applyQuaternion(new de().setFromUnitVectors(new U(0,1,0),m.normalize())),_.translate(f.x,f.y,f.z),c.push(_)}for(let m=0;m<t;m++){let p=new Ue(2.1,2.1);d.set(dt()-.5,dt()-.35,dt()-.5).normalize();let _=Math.cbrt(dt()),b=g.clone().addScaledVector(d,_*v*.85),y=d.clone().add(new U(dt()-.5,dt()-.5,dt()-.5).multiplyScalar(.9)).normalize();p.lookAt(y),p.rotateZ(dt()*6.28),p.translate(b.x,b.y,b.z);let w=p.attributes.normal,A=p.attributes.position,P=new Float32Array(A.count*3);for(let R=0;R<A.count;R++){u.set(A.getX(R),A.getY(R),A.getZ(R));let S=u.clone().sub(g).normalize(),E=u.clone().sub(new U(0,n,0)).normalize();S.multiplyScalar(.7).addScaledVector(E,.3).normalize(),w.setXYZ(R,S.x,S.y,S.z);let z=Ee.clamp(.5+_*.4+S.y*.15,.35,1);P[R*3]=P[R*3+1]=P[R*3+2]=z}p.setAttribute("color",new Je(P,3)),a.push(p)}}return{canopy:Oe(a),wood:Oe(c.map(g=>g.index?g.toNonIndexed():g))}}function Gd(s,t){let e=[],n=Gy(t),i=Vy(t),r=Hd(n,"frond"),o=Hd(i,"canopy",{vertexColors:!0}),a=Yy(),c=new Ht({color:6048309,roughness:1}),h=(F,O=6)=>ge.some(X=>Math.abs(F-X)<ne+O),l=(F,O=6)=>me.some(X=>Math.abs(F-X)<ne+O),f=new Yn(32);for(let F of Xi){let[O,X]=Qs(F);f.add({x:O,z:X})}let d=(F,O)=>f.near(F,O,8,X=>Math.abs(X.x-F)<4&&Math.abs(X.z-O)<6),u=[],g=[],v=[];for(let F=ce.minZ+11;F<=ce.maxZ-11;F+=18)Rn.some(O=>Math.abs(F-O.z)<14)||(u.push([(je.to+on)/2+mt(-1.5,1.5),F+mt(-2,2)]),Me(.3)&&g.push([on-mt(6,14),F+mt(-4,4)]));for(let[F,O]of[[-320,we+10],[0,we+10],[-1280,640],[1280,640]])for(let X=ze+20;X<O;X+=28)if(!l(X))for(let $ of[-1,1])u.push([X+mt(-1,1),F+$*(ne+1.6)]);for(let F=_e+10;F<Re;F+=32)h(F)||u.push([ze+ne+1.6,F+mt(-1,1)]);let m=[-160,0,640];for(let F of m)for(let O=_e-26;O<Re+40;O+=34)if(!h(O,7))for(let X of[-1,1]){let $=F+X*(ne+2.7),T=O+(X>0?17:0);d($,T)||h(T,7)||u.push([$+mt(-.3,.3),T+mt(-1,1)])}for(let[F,O,X]of Td()){let $=ii/2-10,T=X.district==="laurel"?44:26;for(let V=0;V<T;V++){let tt=F+mt(-$,$),ht=O+mt(-$,$);Math.abs(tt-F)<9&&Math.abs(ht-O)<9||(Me(X.district==="laurel"?.15:.4)?g.push([tt,ht]):v.push([tt,ht,mt(.8,1.3),0]))}}for(let F of me)if(!(F===ze||m.includes(F)&&F!==0)){for(let O of us)for(let X of[-1,1])if(!(F===we&&X>0)&&!(Wi[pi(tr(F+X*40),O)][3]<.5))for(let $=O-50;$<=O+50;$+=25){let T=F+X*(ne+1.8);d(T,$)||v.push([T,$,mt(.6,.85),0])}}for(let F=0;F<2600;F++){let O=dt(),X=O<.5?mt(we+60,we+900):mt(-300,we+500),$=O<.5?mt(_e-700,Re+700):O<.75?mt(_e-640,_e-95):mt(Re+95,Re+640),T=mi(X,$);T<2||v.push([X,$,mt(.7,1.6),T])}let p=new Ot,_=new de,b=new U,y=new U,w=new U(0,1,0),A=F=>[F[0],F[1]],P=F=>{F.castShadow=!0,F.receiveShadow=!0};function R(F,{heightRange:O,thickness:X,bend:$,crown:T,skirt:V}){let tt=qy($),ht=Xy(T.count,T.length,T.width),bt=F.map(([Nt,Gt])=>{let Kt=mt(...O),et=new Ot().compose(b.set(Nt,-.1,Gt),_.setFromAxisAngle(w,dt()*Math.PI*2),y.set(X,Kt,X)),ct=new U($,1,0).applyMatrix4(et),Pt=mt(.85,1.15),Wt=new de().setFromAxisAngle(w,dt()*Math.PI*2);return e.push({x:Nt,z:Gt,r:.45}),{x:Nt,z:Gt,base:et,top:ct,cs:Pt,crownQ:Wt}}),Tt=Nt=>[Nt.x,Nt.z];$e(s,bt,tt,a,{at:Tt,far:800,setup:P,set:(Nt,Gt,Kt)=>Nt.setMatrixAt(Gt,Kt.base)}),$e(s,bt,ht,r,{at:Tt,far:1100,setup:P,set:(Nt,Gt,Kt)=>Nt.setMatrixAt(Gt,p.compose(Kt.top,Kt.crownQ,y.set(Kt.cs,Kt.cs,Kt.cs)))}),V&&$e(s,bt,new le(.9,.55,1,8),c,{at:Tt,far:600,setup:Nt=>{Nt.castShadow=!0},set:(Nt,Gt,Kt)=>Nt.setMatrixAt(Gt,p.compose(b.copy(Kt.top).add(y.set(0,-1.6,0)),Kt.crownQ,y.set(1,2.6,1)))})}R(u,{heightRange:[17,26],thickness:.36,bend:4,crown:{count:15,length:4.2,width:1.5},skirt:!0}),R(g,{heightRange:[6,10],thickness:.75,bend:.8,crown:{count:24,length:6.2,width:2.2},skirt:!1});let S={broad:gu({lobes:6,cards:22,spread:2.1,crownY:5.6,lobeR:1.85,trunkH:4.2}),cypress:gu({lobes:5,cards:14,spread:.25,crownY:2.4,lobeR:1.05,trunkH:1.6,columnar:!0}),far:gu({lobes:3,cards:14,spread:1.7,crownY:5.4,lobeR:2.1,trunkH:4.2})},E={broad:[],cypress:[],far:[]};for(let F of v)F[3]>0?E[Me(.35)?"cypress":"far"].push(F):E.broad.push(F);let z=new Ht({color:4865328,roughness:.95}),G=new Lt;for(let[F,O]of Object.entries(E)){let{canopy:X,wood:$}=S[F],T=F!=="broad",V=O.map(([Tt,Nt,Gt,Kt])=>{let et=F==="cypress"?mt(1.1,1.6):mt(.85,1.2),ct=new Ot().compose(b.set(Tt,Kt-.1,Nt),_.setFromAxisAngle(w,dt()*Math.PI*2),y.set(Gt,Gt*et,Gt));return F==="broad"&&Me(.22)?G.setHSL(mt(.72,.78),mt(.35,.5),mt(.62,.72)):F==="cypress"?G.setHSL(mt(.26,.32),mt(.3,.45),mt(.32,.42)):G.setHSL(mt(.2,.3),mt(.35,.6),mt(.45,.62)),Kt===0&&e.push({x:Tt,z:Nt,r:.5}),{x:Tt,z:Nt,matrix:ct,tint:G.clone()}}),bt={at:Tt=>[Tt.x,Tt.z],far:T?2400:750,chunk:T?640:320,setup:Tt=>{Tt.castShadow=F!=="far",Tt.receiveShadow=!0,T&&Tt.layers.set(1)}};$e(s,V,X,o,{...bt,set:(Tt,Nt,Gt)=>{Tt.setMatrixAt(Nt,Gt.matrix),Tt.setColorAt(Nt,Gt.tint)}}),$e(s,V,$,z,{...bt,far:T?900:600,set:(Tt,Nt,Gt)=>Tt.setMatrixAt(Nt,Gt.matrix)})}return{trunkColliders:e,counts:{tall:u.length,stout:g.length,trees:v.length}}}var Mc=28;function xs(s,t){let e=(t%Mc+Mc)%Mc,n=s===0?e:(e+14)%Mc;return n<10?2:n<13?1:0}function Zy(s){return We(s,128,128,(t,e,n)=>{let i=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(.7,"rgba(255,255,255,0.15)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,e,n)})}var $y=`
varying float vH;
varying vec3 vN;
varying vec3 vW;
void main() {
  vH = uv.y;
  vec4 local = vec4(position, 1.0);
  vec3 n = normal;
  #ifdef USE_INSTANCING
    local = instanceMatrix * local;
    n = mat3(instanceMatrix) * n;
  #endif
  vec4 w = modelMatrix * local;
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Ky=`
uniform vec3 color;
uniform float intensity;
varying float vH;
varying vec3 vN;
varying vec3 vW;
void main() {
  vec3 v = normalize(cameraPosition - vW);
  float edge = pow(abs(dot(v, normalize(vN))), 1.5);
  float fade = smoothstep(0.0, 0.9, vH) * (1.0 - smoothstep(0.92, 1.0, vH));
  float dist = length(cameraPosition - vW);
  float a = edge * fade * intensity * smoothstep(4.0, 14.0, dist);
  gl_FragColor = vec4(color * a, 1.0);
}`;function ta(s,t=0){return new Se({uniforms:{color:{value:new Lt(s)},intensity:{value:t}},vertexShader:$y,fragmentShader:Ky,transparent:!0,depthWrite:!1,blending:Nn,side:hn})}function Vd(s,t,e=[],n=null){let i=new Ot,r=new de,o=new U,a=new U(1,1,1),c=new U(1,1,1),h=new U(0,1,0),l=new Ht({color:4146760,roughness:.45,metalness:.7}),f=[],d=ne+7;for(let Y of me)for(let q=_e-40;q<=Re+40;q+=38)if(!ge.some(W=>Math.abs(q-W)<d))for(let W of[-1,1])Y===ze&&W<0||f.push([Y+W*(ne+.9),q+(W>0?19:0),-W,0]);for(let Y of ge)for(let q=ze+20;q<=we;q+=38)if(!me.some(W=>Math.abs(q-W)<d))for(let W of[-1,1])f.push([q+(W>0?19:0),Y+W*(ne+.9),0,-W]);let u=[];for(let Y=ce.minZ+16;Y<=ce.maxZ-16;Y+=24)Rn.every(q=>Math.abs(Y-q.z)>12)&&u.push([(je.from+je.to)/2,Y]);let g=new le(.09,.14,9,8);g.translate(0,4.5,0);let v=new Jt(.1,.1,2.6);v.translate(0,0,1.3);let m=new Jt(.42,.16,.9),p=new Ht({color:7829367,emissive:16766624,emissiveIntensity:0,roughness:.3}),_=Y=>[Y[0],Y[1]],b=([,,Y,q])=>r.setFromAxisAngle(h,Math.atan2(Y,q)),y=Y=>{Y.castShadow=!0},w=$e(s,f,g,l,{at:_,far:650,setup:y,set:(Y,q,W)=>Y.setMatrixAt(q,i.compose(o.set(W[0],Qt,W[1]),b(W),c))}),A=$e(s,f,v,l,{at:_,far:650,setup:y,set:(Y,q,W)=>Y.setMatrixAt(q,i.compose(o.set(W[0],Qt+8.85,W[1]),b(W),c))}),P=$e(s,f,m,p,{at:_,far:1700,set:(Y,q,W)=>Y.setMatrixAt(q,i.compose(o.set(W[0]+W[2]*2.5,Qt+8.78,W[1]+W[3]*2.5),b(W),c))}),R=new Ht({color:16774888,emissive:16764810,emissiveIntensity:0,roughness:.2}),S=$e(s,u,new le(.07,.1,4.2,8),l,{at:_,far:500,set:(Y,q,[W,rt])=>Y.setMatrixAt(q,i.makeTranslation(W,Qt+2.1,rt))}),E=$e(s,u,new wn(.3,12,8),R,{at:_,far:1400,set:(Y,q,[W,rt])=>Y.setMatrixAt(q,i.makeTranslation(W,Qt+4.4,rt))}),z=[...f.map(([Y,q,W,rt])=>[Y+W*2.6,q+rt*2.6,13,1,0]),...u.map(([Y,q])=>[Y,q,8,.8,0]),...e.map(([Y,q,W])=>[Y,W,7,.7,q-4.6])],G=new en({map:Zy(t),color:16757866,transparent:!0,depthWrite:!1,blending:Nn,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2,fog:!0}),F=new Ue(1,1);F.rotateX(-Math.PI/2);let O=Y=>q=>{q.renderOrder=Y,q.userData.noAO=!0,q.layers.set(1)},X=$e(s,z,F,G,{at:_,far:800,setup:O(2),set:(Y,q,[W,rt,wt,Ut,I])=>Y.setMatrixAt(q,i.compose(o.set(W,I+.04+(Ut<1?Qt:0),rt),r.identity(),a.set(wt,1,wt)))}),$=new le(.25,3.6,8.6,18,1,!0);$.translate(0,-4.3,0);let T=ta(16757866),V=$e(s,f,$,T,{at:_,far:380,setup:O(3),set:(Y,q,[W,rt,wt,Ut])=>Y.setMatrixAt(q,i.makeTranslation(W+wt*2.5,Qt+8.7,rt+Ut*2.5))}),tt=[],ht=[];for(let Y of me)for(let q of ge){let W=[[Y+6,q-16,0,1,0],[Y-6,q+16,0,-1,0],[Y+16,q+6,-1,0,1],[Y-16,q-6,1,0,1]];for(let[rt,wt,Ut,I,x]of W){if(x===0&&(I>0&&q===Re||I<0&&q===_e)||x===1&&(Ut<0&&Y===ze||Ut>0&&Y===we))continue;tt.push([rt,wt,Ut,I,x]);let D=x===0?Y+14.2*Math.sign(rt-Y):rt,B=x===0?wt:q+14.2*Math.sign(wt-q);ht.push([D,B,rt,wt])}}let bt=new le(.16,.2,7,8);bt.translate(0,3.5,0),$e(s,ht,bt,l,{at:_,far:650,setup:y,set:(Y,q,[W,rt])=>Y.setMatrixAt(q,i.makeTranslation(W,Qt,rt))}),$e(s,ht,new Jt(1,.16,.16),l,{at:_,far:650,setup:y,set:(Y,q,[W,rt,wt,Ut])=>{r.setFromAxisAngle(h,Math.atan2(-(Ut-rt),wt-W)),Y.setMatrixAt(q,i.compose(o.set((W+wt)/2,6.8,(rt+Ut)/2),r,a.set(Math.hypot(wt-W,Ut-rt)+1,1,1)))}});let Tt=new Ht({color:1909284,roughness:.5,metalness:.4});$e(s,tt,new Jt(.5,1.4,.36),Tt,{at:_,far:650,set:(Y,q,[W,rt,wt,Ut])=>Y.setMatrixAt(q,i.compose(o.set(W,6.1,rt),r.setFromAxisAngle(h,Math.atan2(wt,Ut)),c))});let Nt=new le(.14,.14,.06,12);Nt.rotateX(Math.PI/2);let Gt=new Se({uniforms:{uState:{value:new $t}},vertexShader:`
      attribute vec2 aSig;
      uniform vec2 uState;
      varying vec3 vCol;
      void main() {
        float st = aSig.x < 0.5 ? uState.x : uState.y;
        vec3 c = aSig.y < 0.5 ? vec3(7.0, 0.35, 0.2) : aSig.y < 1.5 ? vec3(7.0, 3.6, 0.3) : vec3(0.3, 6.0, 2.2);
        vCol = abs(st - aSig.y) < 0.5 ? c : vec3(0.05);
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:`varying vec3 vCol;
void main() { gl_FragColor = vec4(vCol, 1.0); }`}),Kt=tt.flatMap(([Y,q,W,rt,wt])=>[0,1,2].map(Ut=>[Y,q,W,rt,wt,Ut]));$e(s,Kt,Nt,Gt,{at:_,far:900,cloneGeometry:!0,set:(Y,q,[W,rt,wt,Ut,,I])=>Y.setMatrixAt(q,i.compose(o.set(W+wt*.2,6.55-I*.43,rt+Ut*.2),r.setFromAxisAngle(h,Math.atan2(wt,Ut)),c)),setup:(Y,q)=>Y.geometry.setAttribute("aSig",new He(new Float32Array(q.flatMap(W=>[W[4],W[5]])),2))}),n&&(f.forEach(([Y,q],W)=>n.add([w.refs[W],A.refs[W],P.refs[W]],[X.refs[W],V.refs[W]],{type:"lamp",x:Y,z:q,y:Qt,r:.18,mass:.22,solid:6,kind:"topple",sparks:!0})),u.forEach(([Y,q],W)=>n.add([S.refs[W],E.refs[W]],[X.refs[f.length+W]],{type:"lamp",x:Y,z:q,y:Qt,r:.14,mass:.12,solid:4,kind:"topple",sparks:!0})));let et=ht.map(([Y,q])=>({x:Y,z:q,r:.3})),ct=[["SURF FIZZ","TASTE THE SWELL","#ff6b4a","#14303d"],["HORIZON AIR","FLY THE COAST","#ffd36b","#1a2a52"],["VISTA BANK","YOUR MONEY. YOUR VIEW.","#9fe3d3","#10302c"],["NEON NIGHTS","THE PIER \xB7 FRIDAYS","#ff63c3","#1d0f2e"],["CALDERA GT","BUILT FOR THE COAST ROAD","#ff7a3d","#141a20"],["SOLSTICE","SUNSCREEN \xB7 SPF 50","#ffe2a8","#c2542e"],["RADIO KZRO","88.1 \xB7 COAST FUNK ALL NIGHT","#8cf5c0","#12202b"],["LAUREL PARK","JAZZ UNDER THE JACARANDAS","#d6b8ff","#22183a"]],Pt=[[-215,-432,-Math.PI/2],[100,212,Math.PI],[-136,30,-Math.PI/2],[270,362,Math.PI]];for(let[Y,q,W]of Ci())W.kind!=="parking"||Y<=320&&Math.abs(q)<=480||Pt.push([Y+46,q+52,er(Y,q)<.5?0:Math.PI/2]);for(let Y=_e+200,q=0;Y<Re;Y+=450,q++)Pt.push([we+25,Y+q%2*50,-Math.PI/2]);for(let Y=ze+380;Y<we;Y+=520)Pt.push([Y,_e-30,0],[Y+130,Re+30,Math.PI]);let Wt=[],Rt=new Fe,nt=ct.map(([Y,q,W,rt])=>{let wt=We(t,1024,384,(I,x,D)=>{let B=I.createLinearGradient(0,0,x,D);B.addColorStop(0,rt),B.addColorStop(1,"#000000"),I.fillStyle=B,I.fillRect(0,0,x,D),I.fillStyle=W,I.beginPath(),I.arc(x*.82,D*.5,D*.36,0,Math.PI*2),I.fill(),I.fillStyle="#fff6e6",I.font='800 120px "Barlow Condensed", Impact, sans-serif',I.fillText(Y,48,170),I.fillStyle=W,I.font='600 46px "Barlow", Arial, sans-serif',I.fillText(q,52,250),I.fillStyle="#ffffff40",I.fillRect(52,290,300,6)}),Ut=new Ht({map:wt,emissive:16777215,emissiveMap:wt,emissiveIntensity:0,roughness:.55});return Wt.push(Ut),Ut});Pt.forEach(([Y,q,W],rt)=>{let wt=new Fe,Ut=new zt(new Ue(14,5.25),nt[rt%nt.length]);Ut.position.y=14;let I=new zt(new Jt(14.4,5.6,.3),l);I.position.set(0,14,-.2);let x=new zt(new le(.35,.45,11.5,10),l);x.position.y=5.75,wt.add(Ut,I,x),wt.position.set(Y,Qt,q),wt.rotation.y=W,et.push({x:Y,z:q,r:.5}),wt.traverse(D=>{D.isMesh&&(D.castShadow=!0)}),Rt.add(wt)}),ps(Rt),s.add(Rt);let Ft="VISTA PAC\xCDFICA",L=new Ht({color:16052714,roughness:.7,side:hn,alphaTest:.5}),Dt=new Map,It=new Fe,St=-520;for(let Y of Ft){if(Y===" "){St+=38;continue}Dt.has(Y)||Dt.set(Y,We(t,128,160,(wt,Ut,I)=>{wt.clearRect(0,0,Ut,I),wt.fillStyle="#fff",wt.font='800 168px "Barlow Condensed", Impact, sans-serif',wt.textAlign="center",wt.textBaseline="alphabetic",wt.fillText(Y,Ut/2,I-8)}));let q=L.clone();q.map=Dt.get(Y);let W=new zt(new Ue(26,33),q),rt=we+330;W.position.set(rt,Math.min(mi(rt,St-10),mi(rt,St+10))+15,St),W.rotation.y=-Math.PI/2,W.castShadow=!0,It.add(W),St+=30}return s.add(It),{lamps:f,circles:et,update(Y,q){p.emissiveIntensity=q*4,R.emissiveIntensity=q*2.6,G.opacity=q*.7,T.uniforms.intensity.value=q*.09;for(let W of Wt)W.emissiveIntensity=.05+q*1.1;Gt.uniforms.uState.value.set(xs(0,Y),xs(1,Y))}}}var Ne=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e],a=(t-n)/(r-n);return a=a*a*(3-2*a),i+(o-i)*a}return s[s.length-1][1]},Jy={coupe:{length:4.62,wheelR:.355,wheelW:.27,track:.83,wheels:[.185,.79],body:{top:[[0,.6],[.05,.7],[.18,.8],[.33,.9],[.78,.96],[.92,.95],[1,.82]],bottom:[[0,.33],[.06,.25],[.94,.26],[1,.38]],width:[[0,.76],[.07,.93],[.3,.97],[.74,1],[.93,.96],[1,.84]],exp:3.4,taper:.1},cabin:{from:.31,to:.9,top:[[0,.88],[.3,1.27],[.52,1.29],[.72,1.14],[1,.93]],width:[[0,.8],[.35,.79],[.75,.76],[1,.66]],taper:.3,exp:2.6,roof:[.33,.64]},spoiler:!0,exhaust:[-.42,.42]},muscle:{length:4.92,wheelR:.37,wheelW:.3,track:.86,wheels:[.17,.8],body:{top:[[0,.72],[.04,.84],[.12,.89],[.4,.93],[.86,.96],[.96,.95],[1,.84]],bottom:[[0,.32],[.05,.26],[.95,.27],[1,.36]],width:[[0,.88],[.05,.96],[.5,.98],[.95,.97],[1,.9]],exp:5.2,taper:.05},cabin:{from:.43,to:.87,top:[[0,.91],[.3,1.31],[.55,1.32],[.86,1.08],[1,.96]],width:[[0,.8],[.5,.8],[1,.73]],taper:.22,exp:3.2,roof:[.3,.6]},scoop:!0,ducktail:!0,exhaust:[-.56,-.44,.44,.56]},super:{length:4.56,wheelR:.36,wheelW:.32,track:.88,wheels:[.2,.8],body:{top:[[0,.42],[.06,.55],[.2,.66],[.35,.73],[.7,.86],[.9,.88],[1,.8]],bottom:[[0,.16],[.05,.13],[.95,.15],[1,.26]],width:[[0,.8],[.08,.95],[.3,.97],[.7,1.03],[.9,1],[1,.9]],exp:3.6,taper:.14},cabin:{from:.27,to:.72,top:[[0,.62],[.35,1.13],[.55,1.14],[.8,1],[1,.86]],width:[[0,.78],[.4,.74],[1,.62]],taper:.32,exp:2.4,roof:[.38,.62]},wing:!0,intakes:!0,exhaust:[-.13,.13]},sedan:{length:4.85,wheelR:.34,wheelW:.24,track:.81,wheels:[.2,.77],body:{top:[[0,.66],[.06,.76],[.25,.86],[.32,.92],[.8,.98],[.94,.96],[1,.86]],bottom:[[0,.36],[.07,.3],[.93,.3],[1,.4]],width:[[0,.78],[.07,.92],[.5,.95],[.93,.93],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.82,top:[[0,.92],[.27,1.43],[.68,1.43],[.88,1.2],[1,.97]],width:[[0,.8],[.4,.82],[1,.76]],taper:.24,exp:2.8,roof:[.28,.72]}},suv:{length:4.75,wheelR:.39,wheelW:.27,track:.85,wheels:[.18,.79],body:{top:[[0,.82],[.06,.97],[.26,1.06],[.33,1.08],[.95,1.1],[1,1.02]],bottom:[[0,.44],[.07,.36],[.93,.37],[1,.46]],width:[[0,.82],[.07,.95],[.5,.98],[.95,.96],[1,.9]],exp:4.5,taper:.06},cabin:{from:.28,to:.98,top:[[0,1.05],[.2,1.72],[.85,1.74],[.97,1.62],[1,1.1]],width:[[0,.86],[.5,.88],[1,.84]],taper:.15,exp:4,roof:[.2,.96]},rails:!0},hatch:{length:4.05,wheelR:.32,wheelW:.22,track:.78,wheels:[.19,.8],body:{top:[[0,.66],[.07,.78],[.28,.88],[.34,.92],[.95,.98],[1,.9]],bottom:[[0,.36],[.08,.3],[.94,.31],[1,.42]],width:[[0,.76],[.08,.89],[.5,.92],[.94,.9],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.97,top:[[0,.92],[.3,1.46],[.82,1.45],[.96,1.32],[1,.98]],width:[[0,.79],[.5,.8],[1,.76]],taper:.2,exp:3.2,roof:[.3,.92]}},pickup:{length:5.4,wheelR:.41,wheelW:.28,track:.88,wheels:[.17,.75],body:{top:[[0,.92],[.05,1.06],[.24,1.14],[.3,1.16],[1,1.16]],bottom:[[0,.5],[.06,.42],[.95,.44],[1,.52]],width:[[0,.86],[.06,.98],[.95,1],[1,.98]],exp:5,taper:.04},cabin:{from:.29,to:.58,top:[[0,1.12],[.3,1.86],[.92,1.88],[1,1.16]],width:[[0,.9],[1,.9]],taper:.12,exp:4.5,roof:[.28,.94]},bed:!0}};function vu(s,t,e,n,i,r,o,a,c=null){let h=(t+e)/2,l=(e-t)/2,f=2/n;for(let d=0;d<r;d++){let u=c?c[0]+(c[1]-c[0])*(d/(r-1)):d/r*Math.PI*2,g=Math.cos(u),v=Math.sin(u),m=s*Math.sign(g)*Math.pow(Math.abs(g),f),p=h+l*Math.sign(v)*Math.pow(Math.abs(v),f);m*=1-i*Math.max(0,v),o.push(m,p,a)}}function yu(s,t,{closed:e=!0,caps:n=!0}={}){let i=[],r=[];for(let l of s)i.push(...l);let o=s.length,a=t,c=e?a:a-1;for(let l=0;l<o-1;l++)for(let f=0;f<c;f++){let d=(f+1)%a,u=l*a+f,g=l*a+d,v=(l+1)*a+f,m=(l+1)*a+d;r.push(u,g,v,g,m,v)}if(n&&e)for(let[l,f]of[[0,!0],[o-1,!1]]){let d=i.length/3,u=0,g=0,v=0;for(let p=0;p<a;p++){let _=(l*a+p)*3;u+=i[_],g+=i[_+1],v+=i[_+2]}for(let p=0;p<a;p++){let _=(l*a+p)*3;i.push(i[_],i[_+1],i[_+2])}i.push(u/a,g/a,v/a);let m=d+a;for(let p=0;p<a;p++){let _=(p+1)%a;f?r.push(m,d+_,d+p):r.push(m,d+p,d+_)}}let h=new Le;return h.setAttribute("position",new ie(i,3)),h.setIndex(r),h.computeVertexNormals(),h.setAttribute("uv",new ie(new Float32Array(i.length/3*2),2)),h}function Ge(s,t,e,n,i,r,o=0,a=0,c=0){let h=new Jt(s,t,e);return(o||a||c)&&h.applyMatrix4(new Ot().makeRotationFromEuler(new Qe(o,a,c))),h.translate(n,i,r),h}function jy(s,t,e,n,i,r,o,a="y"){let c=new le(s,t,e,n);return a==="x"&&c.rotateZ(Math.PI/2),a==="z"&&c.rotateX(Math.PI/2),c.translate(i,r,o),c}function Wd(s,t,e){let n=new U().subVectors(t,s),i=n.length(),r=new le(e,e,i,6);return r.translate(0,i/2,0),r.applyQuaternion(new de().setFromUnitVectors(new U(0,1,0),n.normalize())),r.translate(s.x,s.y,s.z),r}var _u=new Map,Qy=["coupe","muscle","super"];function bc(s){if(_u.has(s))return _u.get(s);let t=Jy[s],e=t.length,n=-e/2,i=T=>n+T*e,r=t.wheels.map(i),o=t.wheelR+.07,a=Qy.includes(s),c=a?40:26,h=a?64:40,l=[];for(let T=0;T<=h;T++){let V=T/h,tt=i(V),ht=Ne(t.body.bottom,V);for(let Nt of r){let Gt=tt-Nt;Math.abs(Gt)<o&&(ht=Math.max(ht,t.wheelR+Math.sqrt(o*o-Gt*Gt)*.98))}let bt=Ne(t.body.top,V),Tt=[];vu(Ne(t.body.width,V),Math.min(ht,bt-.08),bt,t.body.exp,t.body.taper,c,Tt,tt),l.push(Tt)}let f=[yu(l,c)],d=t.cabin,u=[],g=[],v=T=>Ne(d.top,T),m=a?36:20;for(let T=0;T<=m;T++){let V=T/m,tt=d.from+V*(d.to-d.from),ht=i(tt),bt=Ne(t.body.top,tt)-.06,Tt=Math.max(v(V),bt+.02),Nt=Ne(d.width,V),Gt=[];if(vu(Nt,bt,Tt,d.exp,d.taper,c,Gt,ht),u.push(Gt),V>=d.roof[0]&&V<=d.roof[1]){let Kt=[];vu(Nt*1.01,bt,Tt+.012,d.exp,d.taper,14,Kt,ht,[.2*Math.PI,.8*Math.PI]),g.push(Kt)}}let p=[yu(u,c)];g.length>1&&f.push(yu(g,14,{closed:!1,caps:!1}));let _=[],b=[],y=[],w=[],A=[],P=(T,V,tt)=>{let ht=d.from+T*(d.to-d.from),bt=Ne(t.body.top,ht)-.02,Tt=v(T),Nt=Ne(d.width,T)*(1-d.taper*(tt?.92:0))*.97;return new U(V*Nt,tt?Tt-.02:bt,i(ht))};for(let T of[-1,1]){f.push(Wd(P(.02,T,!1),P(d.roof[0]+.01,T,!0),.045));let V=(d.roof[0]+d.roof[1])/2;_.push(Wd(P(V,T,!1),P(V,T,!0),.05));let tt=P(.1,T,!1);f.push(Ge(.16,.1,.12,tt.x+T*.14,tt.y+.06,tt.z)),_.push(Ge(.1,.025,.04,tt.x+T*.05,tt.y+.03,tt.z))}let R=T=>Ne(t.body.width,T),S=(Ne(t.body.bottom,.02)+Ne(t.body.top,.02))/2,E=Ne(t.body.top,.02);for(let T of[-1,1]){let V=T*R(.02)*.62,tt=S+(E-S)*.45;A.push(Ge(.44,.1,.06,V,tt,n+.045,0,T*.32,0)),y.push(Ge(.38,.055,.05,V,tt+.005,n+.03,0,T*.32,0)),y.push(Ge(.34,.016,.03,V,tt+.06,n+.04,0,T*.32,0))}A.push(Ge(R(.03)*1.05,.18,.12,0,Ne(t.body.bottom,.02)+.17,n+.06)),_.push(Ge(R(.03)*1.7,.04,.22,0,Ne(t.body.bottom,.02)+.02,n+.1));let z=Ne(t.body.top,.97);w.push(Ge(R(.98)*1.72,.05,.06,0,z-.08,-n-.02));for(let T of[-1,1])w.push(Ge(.36,.11,.06,T*R(.98)*.68,z-.12,-n-.03));A.push(Ge(R(.98)*1.5,.16,.1,0,Ne(t.body.bottom,.98)+.06,-n-.05));let G=Ne(t.body.bottom,.98)+.03,F=(t.exhaust||[-.42,.42]).map(T=>new U(T,G,-n+.06));for(let T of F)b.push(jy(.05,.05,.14,12,T.x,T.y,-n+.02,"z"));for(let T of[-1,1]){let V=r[1]-r[0]-o*2;_.push(Ge(.06,.08,V,T*R(.5)*.99,Ne(t.body.bottom,.5)+.03,(r[0]+r[1])/2))}if(t.spoiler&&f.push(Ge(R(.96)*1.5,.022,.12,0,Ne(t.body.top,.96)+.012,i(.965),-.2)),t.ducktail&&f.push(Ge(R(.95)*1.78,.05,.2,0,Ne(t.body.top,.95)+.03,i(.955),.28)),t.scoop){let T=Ne(t.body.top,.22);f.push(Ge(.56,.09,.7,0,T+.035,i(.23),.04)),A.push(Ge(.46,.05,.03,0,T+.05,i(.23)-.35))}if(t.wing){let T=Ne(t.body.top,.93),V=i(.95);for(let tt of[-1,1])_.push(Ge(.04,.3,.16,tt*.42,T+.14,V,.25));_.push(Ge(R(.95)*1.86,.035,.34,0,T+.3,V+.02,-.12));for(let tt of[-1,1])_.push(Ge(.03,.14,.38,tt*R(.95)*.93,T+.29,V+.02))}if(t.intakes){for(let T of[-1,1]){let tt=(Ne(t.body.bottom,.66)+Ne(t.body.top,.66))/2;A.push(Ge(.05,.2,.52,T*R(.66)*.985,tt,i(.66),0,T*.14,0))}A.push(Ge(R(.03)*1.8,.03,.3,0,Ne(t.body.bottom,.02)+.01,n+.12))}if(t.rails)for(let T of[-1,1])_.push(Ge(.05,.05,e*.5,T*.62,Ne(d.top,.6)+.04,i(.62)));if(t.bed){let T=i(d.to+.01),V=-n-.05,tt=Ne(t.body.top,.8);A.push(Ge(R(.8)*1.86,.04,V-T,0,tt-.02,(T+V)/2));for(let ht of[-1,1])f.push(Ge(.08,.4,V-T,ht*R(.8)*.96,tt+.2,(T+V)/2));f.push(Ge(R(.8)*1.9,.4,.08,0,tt+.2,V))}let O=[Ge(.52,.12,.01,0,Ne(t.body.bottom,.99)+.24,-n+.005),Ge(.52,.12,.01,0,Ne(t.body.bottom,.01)+.28,n-.005)],X=T=>Oe(T.map(V=>V.index?V.toNonIndexed():V).map(V=>(V.attributes.uv||V.setAttribute("uv",new ie(new Float32Array(V.attributes.position.count*2),2)),V))),$={type:t,parts:{paint:X(f),glass:X(p),trim:X(_),dark:X(A),chrome:X(b),head:X(y),tail:X(w),plate:X(O)},wheels:[],wheel:t1(t.wheelR,t.wheelW,!a),exhausts:F};for(let T of r)for(let V of[-1,1])$.wheels.push({x:V*t.track,y:t.wheelR,z:T,side:V,front:T<0});return _u.set(s,$),$}function t1(s,t,e=!1){let n=s*.69,i=e?[[n,-t/2+.01],[s*.95,-t/2+.01],[s,-t/2+.06],[s,t/2-.06],[s*.95,t/2-.01],[n,t/2-.01]]:[[n,-t/2+.01],[s*.86,-t/2-.004],[s*.97,-t/2+.025],[s,-t/2+.06],[s,t/2-.06],[s*.97,t/2-.025],[s*.86,t/2+.004],[n,t/2-.01]],r=new wo(i.map(([g,v])=>new $t(g,v)),e?14:30);r.rotateZ(Math.PI/2);let o=[],a=new le(n,n,t-.03,e?10:24,1,!0);if(a.rotateZ(Math.PI/2),o.push(a),!e){let g=new ss(n-.008,.014,6,32);g.rotateY(Math.PI/2),g.translate(t/2-.03,0,0),o.push(g)}let c=t/2-.05,h=e?5:10;for(let g=0;g<h;g++){let v=g/h*Math.PI*2+(e?0:g%2*.12),m=new Jt(.035,n-.05,.045);m.translate(0,(n-.05)/2+.05,0),m.rotateX(v),m.translate(c,0,0),o.push(m)}let l=new le(.07,.08,.05,e?6:12);l.rotateZ(Math.PI/2),l.translate(c+.01,0,0),o.push(l);let f=Oe(o.map(g=>g.index?g.toNonIndexed():g)),d=new le(n*.82,n*.82,.03,e?10:24);d.rotateZ(Math.PI/2),d.translate(c-.06,0,0);let u=new Jt(.07,.16,.12);return u.translate(c-.03,n*.55,.07),{tire:r,rim:f,disc:d,caliper:u}}function e1(s,t="PCFC 7X"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.fillStyle="#e9e6da",n.fillRect(0,0,256,64),n.fillStyle="#1e3b78",n.font="700 14px Arial",n.textAlign="center",n.fillText("VISTA PAC\xCDFICA",128,16),n.fillStyle="#7a1f1f",n.font='700 34px "Barlow Condensed", Impact, monospace',n.fillText(t,128,52);let i=new zs(e);return i.colorSpace=_n,i}function ea(s,t={}){return new Dr({color:s,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.1,...t})}function Sc(s){let t=e1(s);return{glass:new Dr({color:791061,metalness:.1,roughness:.04,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4}),trim:new Ht({color:1316890,roughness:.45,metalness:.4}),dark:new Ht({color:461066,roughness:.6,metalness:.2}),chrome:new Ht({color:14212319,roughness:.12,metalness:1}),plate:new Ht({map:t,roughness:.5}),tire:new Ht({color:1316118,roughness:.92,metalness:0}),rim:new Ht({color:12172994,roughness:.22,metalness:1}),disc:new Ht({color:6053472,roughness:.4,metalness:.9}),caliper:new Ht({color:12728866,roughness:.4,metalness:.3})}}var Xd=Ee.damp,Ke=Ee.clamp,sr={coupe:{name:"CALDERA GT",model:"coupe",blurb:"Grand tourer \xB7 450 hp V8, rear drive, balanced",stats:{speed:.8,accel:.72,grip:.76},spec:"450 HP \xB7 1,580 KG \xB7 305 KM/H",mass:1580,front:.52,cgH:.47,drive:"rwd",torque:[[900,360],[2500,480],[4500,520],[6200,500],[6900,468],[7400,405]],idle:900,redline:7400,gears:[3.31,2.13,1.55,1.19,.97,.79],final:3.7,eff:.88,shift:.2,cdA:.7,clA:.3,aeroFront:.45,mu:1.1,rollFront:.57,brakeBias:.63,brakeG:1.3,steerLock:.6,roll:.0065,rollMax:.09,pitch:.0028,nitro:.45,engine:"v8"},muscle:{name:"VANTA SS",model:"muscle",blurb:"Muscle car \xB7 465 hp big-block, huge torque, loose tail",stats:{speed:.74,accel:.74,grip:.5},spec:"465 HP \xB7 1,760 KG \xB7 290 KM/H",mass:1760,front:.54,cgH:.53,drive:"rwd",torque:[[750,500],[2e3,610],[3800,650],[5e3,622],[5800,570],[6400,495]],idle:750,redline:6400,gears:[2.66,1.78,1.3,1,.74],final:3.73,eff:.85,shift:.28,cdA:.92,clA:.05,aeroFront:.5,mu:1.04,rollFront:.52,brakeBias:.66,brakeG:1.15,steerLock:.58,roll:.0095,rollMax:.12,pitch:.0042,nitro:.5,engine:"bigblock"},super:{name:"VENTUS R",model:"super",blurb:"Mid-engine supercar \xB7 640 hp V10, track grip",stats:{speed:.97,accel:.95,grip:.96},spec:"640 HP \xB7 1,420 KG \xB7 345 KM/H",mass:1420,front:.42,cgH:.41,drive:"rwd",torque:[[1100,370],[3e3,500],[5e3,580],[6800,600],[8200,555],[8800,495]],idle:1100,redline:8800,gears:[3.13,2.19,1.63,1.29,1.03,.84,.69],final:3.9,eff:.9,shift:.09,cdA:.78,clA:1.15,aeroFront:.4,mu:1.22,rollFront:.6,brakeBias:.58,brakeG:1.5,steerLock:.56,roll:.0035,rollMax:.05,pitch:.0018,nitro:.4,engine:"v10"}},ia=["coupe","muscle","super"],na={easy:{label:"EASY HANDLING",abs:!0,tc:1,esc:!0,grip:1.16,steerMargin:.06,counter:.85,align:!0,wet:.35},sport:{label:"SPORT HANDLING",abs:!0,tc:.55,esc:!1,grip:1,steerMargin:.1,counter:.55,align:!1,wet:1},sim:{label:"SIMULATION HANDLING",abs:!1,tc:0,esc:!1,grip:1,steerMargin:.15,counter:.25,align:!1,wet:1}},vs=9.81,n1=1.2,Mu={road:[1,.013],curb:[.9,.02],grass:[.55,.09],sand:[.45,.24]};function i1(s,t){let e=s.torque;if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++)if(t<=e[n][0])return e[n-1][1]+(e[n][1]-e[n-1][1])*(t-e[n-1][0])/(e[n][0]-e[n-1][0]);return e[e.length-1][1]}function qd(s){let i=9.5*s;return Math.sin(1.45*Math.atan(i-.25*(i-Math.atan(i))))}function s1(s,t,e){let n=Math.sin(s*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function r1(s){let t=s.attributes.position.array,e=s.attributes.normal.array,n=[[[],[]],[[],[]]];for(let i=0;i<t.length;i+=9){let r=t[i]+t[i+3]+t[i+6]<0?0:1;for(let o=0;o<9;o++)n[r][0].push(t[i+o]),n[r][1].push(e[i+o])}return n.map(([i,r])=>{let o=new Le;return o.setAttribute("position",new ie(i,3)),o.setAttribute("normal",new ie(r,3)),o})}var Ec=class{constructor(t,e,n="coupe"){this.mode="easy",this.aids=na.easy,this.mats=Sc(e),this.paint=ea("#df6339"),this.group=new Fe,this.body=new Fe,this.group.add(this.body),this.lightMats={head:[],tail:[]};for(let r=0;r<2;r++)this.lightMats.head.push(new Ht({color:16777215,emissive:16774364,emissiveIntensity:2,roughness:.2})),this.lightMats.tail.push(new Ht({color:4196358,emissive:16720914,emissiveIntensity:1.5,roughness:.3}));this.spots=[];for(let r of[-1,1]){let o=new Io(16773592,0,70,.42,.55,1.4);this.group.add(o,o.target),this.spots.push(o)}let i=new le(.12,3.2,16,16,1,!0);i.translate(0,-8,0),i.rotateX(-Math.PI/2+.06),this.beamMat=ta(16773328),this.beams=[];for(let r=0;r<2;r++){let o=new pe(i,this.beamMat,1);o.userData.noAO=!0,o.layers.set(1),o.frustumCulled=!1,this.group.add(o),this.beams.push(o)}t.add(this.group),this.setModel(n),this.reset(0,0,0)}setModel(t){sr[t]||(t="coupe"),this.key=t,this.def=sr[t];for(let c of[...this.body.children])this.body.remove(c),c.geometry.dispose();for(let c of this.wheels||[])this.group.remove(c.pivot);let e=bc(this.def.model);this.dims=e.type;{let c=this.def,h=(e.type.wheels[1]-e.type.wheels[0])*e.type.length;this.chassis={L:h,a:h*(1-c.front),b:h*c.front,track:e.type.track*2,R:e.type.wheelR,Iz:c.mass*h*(1-c.front)*h*c.front*1.05,Fz0:c.mass*vs/4,peakTorque:Math.max(...c.torque.map(l=>l[1]))}}this.exhausts=e.exhausts.map(c=>c.clone());let n=this.mats,i={paint:this.paint,glass:n.glass,trim:n.trim,dark:n.dark,chrome:n.chrome,plate:n.plate};this.deformables=[];let r=c=>{let h={geo:c,basePos:Float32Array.from(c.attributes.position.array),baseNormal:Float32Array.from(c.attributes.normal.array),weight:new Float32Array(c.attributes.position.count)};return this.deformables.push(h),h};for(let[c,h]of Object.entries(e.parts)){if(c==="head"||c==="tail"){r1(h).forEach((d,u)=>{let g=new zt(d,this.lightMats[c][u]);g.userData.own=!0,this.body.add(g),r(d)});continue}let l=new zt(h.clone(),i[c]);l.userData.own=!0,l.castShadow=!0,l.receiveShadow=!0,this.body.add(l);let f=r(l.geometry);c==="paint"&&(this.shell=f.geo,this.basePos=f.basePos)}this.wheels=e.wheels.map(c=>{let h=new Fe;h.position.set(c.x,c.y,c.z);let l=new Fe;c.side<0&&(l.rotation.y=Math.PI),h.add(l);let f=new Fe;l.add(f);for(let[d,u]of[["tire",n.tire],["rim",n.rim],["disc",n.disc]]){let g=new zt(e.wheel[d],u);g.castShadow=!0,f.add(g)}return l.add(new zt(e.wheel.caliper,n.caliper)),this.group.add(h),{...c,pivot:h,spin:f,mount:l,compress:0}});let o=-this.dims.length/2,a=this.key==="super"?.55:.72;this.spots.forEach((c,h)=>{let l=h?1:-1;c.position.set(l*.62,a,o+.15),c.target.position.set(l*1.6,-.6,o-20)}),this.beams.forEach((c,h)=>{c.setMatrixAt(0,new Ot().makeTranslation((h?1:-1)*.62,a,o)),c.instanceMatrix.needsUpdate=!0}),this.repair()}get assist(){return this.mode==="easy"}set assist(t){this.setHandling(t?"easy":"sport")}setHandling(t){this.mode=na[t]?t:"easy",this.aids=na[this.mode]}setColor(t){this.paint.color.set(t)}reset(t,e,n){this.repair(),this.x=t,this.z=e,this.y=this.groundAt(t,e,0),this.heading=n,this.vx=0,this.vz=0,this.yawRate=0,this.steer=0,this.wheelAngle=0,this.ax=0,this.ay=0,this.lock=0,this.escActive=!1,this.handbrakeTimer=0,this.shiftHold=0,this.pedal=0,this.gear=1,this.rpm=this.def.idle,this.shiftTimer=0,this.nitro=100,this.boosting=!1,this.throttle=0,this.brake=0,this.handbrake=!1,this.slip=0,this.wheelspin=0,this.impact=0,this.contact=null,this.scrape=null,this.pendingHit=null,this.dentCooldown=0,this.pitch=0,this.roll=0,this.pitchVel=0,this.rollVel=0,this.heave=0,this.heaveVel=0,this.wheelAngle=0,this.surface="road",this.prevLong=0,this.distance=0,this.sync()}get speed(){return this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading)}get kmh(){return Math.abs(this.speed)*3.6}groundAt(t,e,n){let i=fs(t,e),r=Sd(t);if(i!==null&&(n>i-1.2||t>js(t,e).x0))return i;let o=Ko(t,e);return o==="curb"||o==="grass"?r+Qt:r}update(t,e,n){let i=this.def,r=this.chassis,o=this.aids,a=this.x,c=this.z;this.surface=Ko(this.x,this.z);let h=fs(this.x,this.z)!==null&&this.y>1,l=h?Mu.curb:Mu[this.surface]||Mu.road,f=this.surface==="sand"&&!h?1:this.surface==="grass"?.5:0,d=this.surface==="road"?(n.wetness||0)*.22*o.wet:0,u=i.mu*l[0]*o.grip*(1-d);this.throttle=e.throttle,this.brake=e.brake,this.handbrake=e.handbrake;let g=-Math.sin(this.heading),v=-Math.cos(this.heading),m=this.vx*g+this.vz*v,p=Math.abs(m);this.gear===-1?m>-.6&&e.throttle>0&&e.brake===0&&(this.gear=1):m<.6&&e.brake>0&&e.throttle===0?this.gear=-1:m<-1.5&&(this.gear=-1);let _=this.gear===-1,b=_?e.brake:e.throttle;this.pedal+=Ke(b-this.pedal,-7*t,(this.pedal<.35?5:2.4)*t),this.pedal<.001&&(this.pedal=0);let y=this.pedal,w=_?e.throttle:e.brake;this.boosting=e.nitro&&e.throttle>0&&this.nitro>1&&m>3&&!_,this.nitro=Ke(this.nitro+(this.boosting?-22:9)*t,0,100);let A=i.gears,P=(_?A[0]*1.05:A[this.gear-1])*i.final,R=p/r.R*(30/Math.PI),S=R*P;if(this.shiftHold-=t,this.shiftTimer>0)this.shiftTimer-=t;else if(!_&&this.shiftHold<=0){let Dt=i.redline*(.5+.47*y),It=i.redline*(.2+.14*y),St=this.gear>1?R*A[this.gear-2]*i.final:1/0;S>Dt&&this.gear<A.length?(this.gear++,this.shiftTimer=i.shift,this.shiftHold=i.shift+.5,this.onShift?.(1)):this.gear>1&&(S<It||y>.9&&St<i.redline*.78)&&(this.gear--,this.shiftTimer=i.shift*.7,this.shiftHold=i.shift+.7,this.onShift?.(-1))}let E=i.idle+(i.redline*.44-i.idle)*y,z=S<E,G=Ke(Math.max(S,E),i.idle,i.redline);this.rpm=Xd(this.rpm,this.shiftTimer>0?G*.84:G,z?7:16,t);let F=0;this.shiftTimer<=0&&(y>0&&this.rpm<i.redline-40?F=i1(i,this.rpm)*y*(this.boosting?1+i.nitro:1)*P*i.eff/r.R:y===0&&p>2&&(F=-r.peakTorque*.1*(this.rpm/i.redline)*P/r.R)),_&&(F=-F);let O=w*i.brakeG*i.mass*vs,X=-Math.cos(this.heading),$=Math.sin(this.heading),T=m,V=this.vx*X+this.vz*$,tt=Math.hypot(T,V),ht=Math.atan(r.L*u*vs/Math.max(tt*tt,1)),bt=Math.min(i.steerLock,ht+o.steerMargin+.085+.12*o.counter),Tt=T>4?Ke(Math.atan2(V-r.b*this.yawRate,T),-.55,.55)*o.counter:0,Nt=Ke(e.steer*bt+Tt,-i.steerLock,i.steerLock),Kt=(Math.abs(Nt)>Math.abs(this.wheelAngle)?1.5:2.6)*(.55+.45*Math.min(1,Math.abs(Nt-this.wheelAngle)/.12))+(T>4?Math.abs(Tt)*3:0);this.wheelAngle+=Ke(Nt-this.wheelAngle,-Kt*t,Kt*t),this.steer=this.wheelAngle/i.steerLock,this.handbrake?this.handbrakeTimer=.7:this.handbrakeTimer-=t;let et=t/2,ct=0,Pt=0,Wt=0;this.escActive=!1;for(let Dt=0;Dt<2;Dt++){let It=Math.sin(this.heading),St=Math.cos(this.heading),Y=-this.vx*It-this.vz*St,q=-this.vx*St+this.vz*It,W=this.yawRate,rt=this.wheelAngle,wt=Math.cos(rt),Ut=Math.sin(rt),I=.5*n1*Y*Y,x=I*i.clA,D=i.mass*this.ax*i.cgH/r.L,B=Math.max(i.mass*vs*r.b/r.L+x*i.aeroFront-D,0),H=Math.max(i.mass*vs*r.a/r.L+x*(1-i.aeroFront)+D,0),k=i.mass*this.ay*i.cgH/r.track,J=(Pe,$n)=>{let _i=Ke(k*$n,-Pe/2,Pe/2),C=Pe/2-_i,j=Pe/2+_i;return u*(C*(1-.13*(C/r.Fz0-1))+j*(1-.13*(j/r.Fz0-1)))},Q=Math.max(J(B,i.rollFront),1),st=Math.max(J(H,1-i.rollFront),1),xt=q+r.a*W,K=q-r.b*W,at=Y*wt+xt*Ut,Et=-Y*Ut+xt*wt,lt=-Math.atan2(Et,Math.max(Math.abs(at),1.5)),yt=-Math.atan2(K,Math.max(Math.abs(Y),1.5)),Xt=qd(lt)*Q,Z=qd(yt)*st,vt=Y>.05?1:Y<-.05?-1:0,_t=O*i.brakeBias,Mt=O*(1-i.brakeBias),gt=0,ut=0,Zt=!1,te=this.handbrake,ee=(Pe,$n)=>Pe*Math.sqrt(Math.max(.04,1-Math.min(1,($n/Pe)**2*.85)));o.abs?(_t=Math.min(_t,ee(Q,Xt)*.97),Mt=Math.min(Mt,ee(st,Z)*.97)):(Zt=_t>Q*1.02,te=te||Mt>st*1.02);let fe=F,ln=Math.max(0,Math.abs(fe)/st-1);if(o.tc){let Pe=st*.95+(ee(st,Z)-st*.95)*o.tc;fe=Ke(fe,-Pe,Pe)}if(gt=-vt*_t,ut=Ke(fe-vt*Mt,-st*.95,st*.95),Zt){let Pe=Math.hypot(at,Et);Pe>.3?(gt=-Q*.82*at/Pe,Xt=-Q*.82*Et/Pe):(gt=0,Xt*=.3)}else Xt=Math.sign(Xt)*Math.min(Math.abs(Xt),Q*Math.sqrt(Math.max(0,1-(gt/Q)**2)));if(te){let Pe=Math.hypot(Y,K);Pe>.3?(ut=-st*.8*Y/Pe,Z=-st*.8*K/Pe):(ut=0,Z*=.3)}else Z=Math.sign(Z)*Math.min(Math.abs(Z),st*Math.sqrt(Math.max(0,1-(ut/st)**2)));let gn=0;if(o.esc&&this.handbrakeTimer<=0&&Y>7){let Pe=Math.atan2(q,Y),$n=Ke(Y*Math.tan(rt)/(r.L*(1+.0022*Y*Y)),-u*vs/Y,u*vs/Y),_i=W-$n;(Math.abs(_i)>.07||Math.abs(Pe)>.09)&&(gn=r.Iz*Ke(-_i*6.5+Pe*5,-3.2,3.2),Y-=Math.min(Math.abs(_i)+Math.abs(Pe),.6)*2.2*et,this.escActive=!0)}let Ms=I*i.cdA*Math.sign(Y),ri=i.mass*Math.abs(Y)/et,bs=Math.sign(Y)*Math.min(l[1]*i.mass*vs,ri),cr=gt*wt-Xt*Ut+ut-Ms-bs,Ss=gt*Ut+Xt*wt+Z;gn+=r.a*(gt*Ut+Xt*wt)-r.b*Z;let vi=cr/i.mass,Zi=Ss/i.mass,Ii=Y;Y+=(vi+q*W)*et,q+=(Zi-Ii*W)*et,W+=gn/r.Iz*et,(w>0||this.handbrake)&&y===0&&Ii*Y<0&&(Y=0),y===0&&w===0&&Math.abs(Y)<.06&&Math.abs(q)<.06&&(Y=0,q=0);let Es=1-Ee.smoothstep(Math.hypot(Y,q),1.2,5);if(Es>0){let Pe=Y*Math.tan(rt)/r.L,$n=Es*(1-Math.exp(-et*28));W+=(Pe-W)*$n,q+=(r.b*Pe-q)*$n}_&&(Y=Math.max(Y,-16));let ws=1-Math.exp(-et*11);this.ax+=(vi-this.ax)*ws,this.ay+=(Zi-this.ay)*ws,this.yawRate=W,this.heading+=W*et;let hr=Math.sin(this.heading),Ts=Math.cos(this.heading);this.vx=-hr*Y-Ts*q,this.vz=-Ts*Y+hr*q,this.x+=this.vx*et,this.z+=this.vz*et,ct+=ln,Pt+=(Zt||te)&&Math.abs(Y)>2?1:0;let yi=Pe=>Ee.smoothstep(Math.abs(Pe),.1,.22);Wt+=Math.max(Math.abs(K)*yi(yt),Math.abs(Et)*.7*yi(lt))}if(this.wheelspin=Ke(ct*.5*(1.2-.6*o.tc),0,1)*(p<45?1:0),this.lock=Pt/2,this.slip=Wt/2,o.align&&Math.abs(e.steer)<.05&&Math.abs(this.wheelAngle)<.05&&p>5&&!this.handbrake&&this.surface==="road"){let Dt=Math.PI/2,It=this.heading-Math.round(this.heading/Dt)*Dt;if(Math.abs(It)<.3){let St=It*Math.min(1,1.6*t);this.heading-=St;let Y=Math.cos(-St),q=Math.sin(-St),W=this.vx*Y+this.vz*q,rt=-this.vx*q+this.vz*Y;this.vx=W,this.vz=rt}}this.impact=0,this.collide(n,a,c),this.distance+=Math.hypot(this.x-a,this.z-c),this.dentCooldown-=t;let Rt=this.groundAt(this.x,this.z,this.y);Rt-this.y>.08&&Rt-this.y<.3&&(this.heaveVel-=(Rt-this.y)*9),this.y-Rt>.08&&this.y-Rt<.3&&(this.heaveVel+=(this.y-Rt)*5),this.y=Xd(this.y,Rt,Rt>this.y?22:9,t);let nt=this.slopeAt(),Ft=f*Math.min(p/12,1)*.012;this.spring("pitch",Ke(this.ax*i.pitch,-i.rollMax*.75,i.rollMax*.55)+nt+(Math.random()-.5)*Ft,70,9,t),this.spring("roll",Ke(this.ay*i.roll,-i.rollMax,i.rollMax)+(Math.random()-.5)*Ft,60,7,t),this.spring("heave",0,90,10,t),this.sync();let L=this.speed;for(let Dt of this.wheels){let It=Dt.front?this.lock&&!this.handbrake?.15:1:this.handbrake||this.lock?.05:1+this.wheelspin*2.5,St=Dt.front||this.wheelspin<.05?L:Math.max(Math.abs(L),6*this.wheelspin)*(_?-1:1);Dt.spin.rotation.x-=St*It*t/r.R*(Dt.side<0?-1:1),Dt.front&&(Dt.pivot.rotation.y=this.wheelAngle)}}slopeAt(){let t=js(this.x,this.z);return t&&this.x>t.x0&&this.y>.2?Math.atan2(t.deckY-Qt,t.rampStart-t.x0)*Math.sin(this.heading):0}spring(t,e,n,i,r){let o=t+"Vel",a=(e-this[t])*n-this[o]*i;this[o]+=a*r,this[t]+=this[o]*r}sync(){this.group.position.set(this.x,this.y+this.heave*.4,this.z),this.group.rotation.set(0,this.heading,0),this.body.rotation.set(this.pitch,0,-this.roll),this.body.position.y=this.heave*.3;for(let t of this.wheels){let e=-this.roll*t.side*this.dims.track*.35+this.pitch*t.z*.35;t.pivot.position.y=t.y+Ke(e,-.06,.06)*.5}}collide(t,e,n){let r=-Math.sin(this.heading),o=-Math.cos(this.heading);for(let f=0;f<2;f++)for(let d=0;d<2;d++){let u=d?1.35:-1.35,g=this.x+r*u,v=this.z+o*u;t.boxGrid.near(g,v,1.05,p=>{if(Math.abs(g-p.x)>p.w+1.05||Math.abs(v-p.z)>p.d+1.05)return;let _=Ke(g,p.x-p.w,p.x+p.w),b=Ke(v,p.z-p.d,p.z+p.d),y=g-_,w=v-b,A=Math.hypot(y,w);if(A<1e-4){let P=p.w-Math.abs(g-p.x),R=p.d-Math.abs(v-p.z);P<R?(y=Math.sign(g-p.x),w=0,A=-P):(y=0,w=Math.sign(v-p.z),A=-R)}else y/=A,w/=A;A<1.05&&this.resolve(y,w,1.05-A,.25,g-y*1.05,v-w*1.05)});let m=p=>{let _=g-p.x,b=v-p.z;if(Math.abs(_)>3||Math.abs(b)>3)return;let y=Math.hypot(_,b),w=1.05+p.r;y<w&&y>1e-4&&this.resolve(_/y,b/y,w-y,.2,p.x+_/y*p.r,p.z+b/y*p.r)};t.circleGrid.near(g,v,3,m),this.y<(fs(g,v)??-9)-1&&t.pileGrid.near(g,v,3,m)}let a=js(e,n)||js(this.x,this.z);if(a&&this.y>1.2){let f=a.halfWidth-1.1;Math.abs(this.z-a.z)>f&&this.resolve(0,-Math.sign(this.z-a.z),Math.abs(this.z-a.z)-f,.15),this.x<a.x1+3&&this.resolve(1,0,a.x1+3-this.x,.15)}let c=fs(this.x,this.z),h=js(this.x,this.z);if(h&&this.x>h.x0&&this.y<c-.9&&this.x<-345){let f=Math.sign(this.z-h.z)||1;this.resolve(0,f,h.halfWidth+.2-Math.abs(this.z-h.z),.2)}let l=a&&this.y>1.2?a.x1+3:ce.minX;this.x<l&&this.resolve(1,0,l-this.x,.2),this.x>ce.maxX&&this.resolve(-1,0,this.x-ce.maxX,.3),this.z<ce.minZ&&this.resolve(0,1,ce.minZ-this.z,.3),this.z>ce.maxZ&&this.resolve(0,-1,this.z-ce.maxZ,.3)}resolve(t,e,n,i,r=this.x-t*2,o=this.z-e*2){this.x+=t*n,this.z+=e*n;let a=this.vx*t+this.vz*e;if(a<0){let c=this.vx-a*t,h=this.vz-a*e,l=Math.hypot(c,h);l>6&&(!this.scrape||l>this.scrape.speed)&&(this.scrape={x:r,z:o,speed:l,nx:t,nz:e});let f=this.assist&&l>-a*1.2,d=f?0:i;this.vx-=(1+d)*a*t,this.vz-=(1+d)*a*e;let u=f?.985:.9;if(this.vx*=u,this.vz*=u,f&&l>4){let v=Math.atan2(-c,-h)-this.heading;v=Math.atan2(Math.sin(v),Math.cos(v)),Math.abs(v)<1.2&&(this.heading+=v*.08)}if(this.impact=Math.max(this.impact,-a),(!this.contact||-a>this.contact.speed)&&(this.contact={x:r,z:o,speed:-a,nx:t,nz:e}),this.registerHit(r,o,-a),this.yawRate*=.6,!f){let g=-(1+d)*a,v=((o-this.z)*t-(r-this.x)*e)*g/2.6;this.yawRate+=Ke(v*(this.assist?.15:.45),-2.2,2.2)}}}registerHit(t,e,n){(!this.pendingHit||n>this.pendingHit.speed)&&(this.pendingHit={x:t,z:e,speed:n})}applyDamage(){let t=this.pendingHit;if(this.pendingHit=null,!t||t.speed<3.5||this.dentCooldown>0)return;this.dentCooldown=.18;let e=t.x-this.x,n=t.z-this.z,i=Math.cos(this.heading),r=Math.sin(this.heading),o=e*i-n*r,a=e*r+n*i,c=this.dims.length/2,h=this.dims.track+.1;o=Ke(o,-h,h),a=Ke(a,-c,c);let l=Ke((t.speed-3)/16,.05,1);this.dent(o,.62,a,l)}dent(t,e,n,i){let r=.5+i*.55,o=.035+i*.13,a=this.dims.length/2,c=Math.abs(n)/a>Math.abs(t)/this.dims.track,h=c?-t*.15:-Math.sign(t),l=c?-Math.sign(n):-n*.1,f=Math.hypot(h,l)||1;h/=f,l/=f;let d=new U,u=new U,g=new U;for(let v of this.deformables){let m=v.geo.attributes.position.array,p=v.geo.attributes.normal.array,_=v.basePos,b=v.weight,y=!1;for(let w=0,A=0;w<m.length;w+=3,A++){let P=_[w]-t,R=(_[w+1]-e)*1.3,S=_[w+2]-n,E=(P*P+R*R+S*S)/(r*r);if(E>3)continue;let z=Math.exp(-E*1.8)*(.65+.7*s1(_[w],_[w+1],_[w+2]));m[w]+=h*o*z,m[w+1]-=o*.3*z,m[w+2]+=l*o*z;let G=m[w]-_[w],F=m[w+1]-_[w+1],O=m[w+2]-_[w+2],X=Math.hypot(G,F,O);if(X>.26){let $=.26/X;m[w]=_[w]+G*$,m[w+1]=_[w+1]+F*$,m[w+2]=_[w+2]+O*$}b[A]=Math.min(1,b[A]+z),y=!0}if(y){for(let w=0;w<m.length;w+=9){let A=w/3;if(!(Math.max(b[A],b[A+1],b[A+2])<.02)){d.set(m[w+3]-m[w],m[w+4]-m[w+1],m[w+5]-m[w+2]),u.set(m[w+6]-m[w],m[w+7]-m[w+1],m[w+8]-m[w+2]),g.crossVectors(d,u).normalize();for(let P=0;P<3;P++){let R=w+P*3,S=Math.min(1,b[A+P]*1.6),E=v.baseNormal,z=E[R]*(1-S)+g.x*S,G=E[R+1]*(1-S)+g.y*S,F=E[R+2]*(1-S)+g.z*S,O=Math.hypot(z,G,F)||1;p[R]=z/O,p[R+1]=G/O,p[R+2]=F/O}}}v.geo.attributes.position.needsUpdate=!0,v.geo.attributes.normal.needsUpdate=!0}}if(this.damage=Math.min(1,this.damage+i*.18),i>.3){let v=t<0?0:1;n<-a+.9&&(this.broken.head[v]=!0),n>a-.9&&(this.broken.tail[v]=!0)}}repair(){for(let t of this.deformables||[])t.weight.some(e=>e>0)&&(t.geo.attributes.position.array.set(t.basePos),t.geo.attributes.normal.array.set(t.baseNormal),t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.normal.needsUpdate=!0,t.weight.fill(0));this.damage=0,this.broken={head:[!1,!1],tail:[!1,!1]}}setLights(t,e){let n=Math.max(t,.15);this.lightMats.head.forEach((i,r)=>{let o=!this.broken.head[r];i.emissiveIntensity=o?1.5+n*9:0,i.color.setScalar(o?1:.12),this.spots[r].intensity=o?t*220:0,this.beams[r].visible=o&&t>.05}),this.lightMats.tail.forEach((i,r)=>{i.emissiveIntensity=this.broken.tail[r]?.05:e?6:1.1+t*1.2}),this.beamMat.uniforms.intensity.value=t*.06}safeRespawn(){let t=qi(this.x),e=ds(this.z);if(Math.abs(this.x-t)<Math.abs(this.z-e)){let n=Math.cos(this.heading)>0;this.reset(t+(n?3.4:-3.4),Ke(this.z,_e+10,Re-10),n?0:Math.PI)}else{let n=Math.sin(this.heading)<0;this.reset(Ke(this.x,ze+10,we-10),e+(n?3.4:-3.4),n?-Math.PI/2:Math.PI/2)}}};var wc=16,bu=new Ot,Tc=new Ot,Yd=new de,Su=new U,sa=new U,Ac=new de,o1=new U(1,1,1),a1=new Ot().makeScale(0,0,0),Rc=class{constructor(){this.items=[],this.grid=new Map,this.loose=new Set,this.dirty=new Set}add(t,e,n){let i={...n,parts:t.map(o=>{let a=new Ot;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),hide:(e||[]).map(o=>{let a=new Ot;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),pivot0:new U(n.x,n.y,n.z),pos:new U(n.x,n.y,n.z),vel:new U,quat:new de,spin:new U,state:0,timer:0};i.id=this.items.length,this.items.push(i);let r=this.key(n.x,n.z);return this.grid.has(r)||this.grid.set(r,[]),this.grid.get(r).push(i),i}key(t,e){return`${Math.floor(t/wc)},${Math.floor(e/wc)}`}collide(t,e,n){let i=-Math.sin(t.heading),r=-Math.cos(t.heading),o=t.x-i*1.35,a=t.z-r*1.35,c=t.x+i*1.35,h=t.z+r*1.35,l=Math.hypot(t.vx,t.vz),f=Math.floor(t.x/wc),d=Math.floor(t.z/wc);for(let u=-1;u<=1;u++)for(let g=-1;g<=1;g++){let v=this.grid.get(`${f+u},${d+g}`);if(v)for(let m of v){if(m.state!==0)continue;let p=c-o,_=h-a,b=Ee.clamp(((m.x-o)*p+(m.z-a)*_)/(p*p+_*_),0,1),y=o+p*b,w=a+_*b,A=m.x-y,P=m.z-w,R=Math.hypot(A,P),S=1.05+m.r;if(R>=S||t.y>m.y+3)continue;R>1e-4?(A/=R,P/=R):(A=i,P=r);let E=t.vx*A+t.vz*P;if(E<m.solid){E>0&&(t.vx-=E*A*1.2,t.vz-=E*P*1.2),t.x-=A*(S-R),t.z-=P*(S-R);continue}this.knock(m,t,A,P,E,l),n?.({item:m,x:m.x,z:m.z,speed:E,nx:A,nz:P})}}}knock(t,e,n,i,r,o){t.state=1,t.timer=0,this.loose.add(t);let a=1-t.mass*Math.min(1,6/Math.max(o,6));if(e.vx*=a,e.vz*=a,e.registerHit?.(t.x,t.z,r*t.mass*3),t.kind==="topple")sa.set(i,0,-n).normalize(),t.axis=sa.clone(),t.angle=0,t.angVel=.6+r*.08;else{let c=2.5+dt()*2.5+r*.12,h=.5+dt()*.25;t.vel.set(e.vx*h+n*r*.25,c,e.vz*h+i*r*.25),t.spin.set((dt()-.5)*2,(dt()-.5)*2,(dt()-.5)*2).normalize().multiplyScalar(5+r*.35),t.pos.copy(t.pivot0)}for(let c of t.hide)c.mesh.setMatrixAt(c.index,a1),c.mesh.instanceMatrix.needsUpdate=!0}groundY(t,e){return Ko(t,e)==="road"?0:Qt}update(t,e){for(let n of this.loose){if(n.timer+=t,n.state===1){if(n.kind==="topple")n.angVel+=Math.sin(Math.max(n.angle,.05))*6*t+.4*t,n.angle+=n.angVel*t,n.angle>=Math.PI/2-.04&&(n.angle=Math.PI/2-.04,n.angVel*=-.18,Math.abs(n.angVel)<.08&&(n.state=2)),n.quat.setFromAxisAngle(n.axis,n.angle);else{n.vel.y-=9.8*t,n.pos.addScaledVector(n.vel,t);let i=n.spin.length();i>.001&&(Ac.setFromAxisAngle(sa.copy(n.spin).divideScalar(i),i*t),n.quat.premultiply(Ac));let r=this.groundY(n.pos.x,n.pos.z)+n.lieH;n.pos.y<r&&(n.pos.y=r,n.vel.y<-1.2?(n.vel.y*=-.32,n.vel.x*=.5,n.vel.z*=.5,n.spin.multiplyScalar(.55)):(n.vel.y=0,n.vel.x*=Math.exp(-8*t),n.vel.z*=Math.exp(-8*t),n.spin.multiplyScalar(Math.exp(-6*t)),Math.hypot(n.vel.x,n.vel.z)<.3&&this.settle(n)))}this.dirty.add(n)}n.timer>25&&Math.hypot(e.x-n.x,e.z-n.z)>200&&this.restore(n)}for(let n of this.dirty)this.write(n);this.dirty.clear()}settle(t){t.state=2,Su.set(0,1,0).applyQuaternion(t.quat);let e=Math.atan2(Su.x,Su.z);Yd.setFromAxisAngle(sa.set(0,1,0),e),Ac.setFromAxisAngle(sa.set(1,0,0),Math.PI/2),t.quat.copy(Yd).multiply(Ac),t.pos.y=this.groundY(t.pos.x,t.pos.z)+t.lieH,this.dirty.add(t)}restore(t){t.state=0,t.pos.copy(t.pivot0),t.quat.identity(),t.vel.set(0,0,0),t.spin.set(0,0,0),this.loose.delete(t);for(let e of[...t.parts,...t.hide])e.mesh.setMatrixAt(e.index,e.base),e.mesh.instanceMatrix.needsUpdate=!0}write(t){bu.compose(t.pos,t.quat,o1),Tc.makeTranslation(-t.pivot0.x,-t.pivot0.y,-t.pivot0.z),bu.multiply(Tc);for(let e of t.parts)Tc.multiplyMatrices(bu,e.base),e.mesh.setMatrixAt(e.index,Tc),e.mesh.instanceMatrix.needsUpdate=!0}restoreAll(){for(let t of[...this.loose])this.restore(t)}};function Pc(s,t){let e=s.index?s.toNonIndexed():s,n=new Lt(t),i=e.attributes.position.count,r=new Float32Array(i*3);for(let o=0;o<i;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new Je(r,3)),e}function Be(s,t,e,n,i,r,o,a=0,c=0,h=0){let l=new Jt(s,t,e);return(a||c||h)&&l.applyMatrix4(new Ot().makeRotationFromEuler(new Qe(a,c,h))),l.translate(n,i,r),Pc(l,o)}function qe(s,t,e,n,i,r,o,a,c="y"){let h=new le(s,t,e,n);return c==="x"&&h.rotateZ(Math.PI/2),c==="z"&&h.rotateX(Math.PI/2),h.translate(i,r,o),Pc(h,a)}function jd(s,t,e,n,i,r,o=1){let a=new wn(s,t,Math.max(3,t/3),0,Math.PI*2,0,Math.PI/2);return a.scale(1,o,1),a.translate(e,n,i),Pc(a,r)}var Kr="#b0362a",Eu="#d9d3c2",rr="#202427",Zd="#7d5b3b",$d="#264a8a",Cc="#626a70";function l1(){return Oe([qe(.2,.21,.07,10,0,.035,0,Kr),qe(.14,.15,.52,10,0,.33,0,Kr),qe(.17,.17,.05,10,0,.6,0,Kr),jd(.15,10,0,.62,0,Kr,.9),qe(.035,.05,.07,6,0,.78,0,Eu),...[-1,1].flatMap(s=>[qe(.055,.06,.14,8,s*.17,.46,0,Kr,"x"),qe(.065,.065,.03,8,s*.245,.46,0,Eu,"x")]),qe(.075,.08,.13,8,0,.42,.17,Kr,"z"),qe(.085,.085,.035,8,0,.42,.245,Eu,"z")])}function c1(){let s=[qe(.3,.27,.9,14,0,.45,0,"#2c4a3b"),jd(.31,14,0,.9,0,"#1f2b27",.4),Be(.22,.12,.02,0,.78,.3,"#0d1110")];for(let t of[.18,.5,.82])s.push(qe(.305,.3,.03,14,0,t,0,"#22392e"));return Oe(s)}function h1(){let s=[];for(let t of[-.14,0,.14])s.push(Be(2,.04,.11,0,.45,t,Zd));for(let t=0;t<2;t++)s.push(Be(2,.1,.035,0,.64+t*.15,-.25-t*.03,Zd,-.2));for(let t of[-.85,.85])s.push(Be(.06,.45,.06,t,.225,.16,rr),Be(.06,.85,.06,t,.42,-.24,rr,-.15)),s.push(Be(.06,.04,.5,t,.63,-.02,rr),Be(.06,.04,.42,t,.42,-.04,rr));return Oe(s)}function u1(){let s=[];for(let t of[-.22,.22])for(let e of[-.18,.18])s.push(Be(.05,.22,.05,t,.11,e,rr));return s.push(Be(.52,.62,.46,0,.53,0,$d),qe(.23,.23,.52,14,0,.84,0,$d,"x")),s.push(Be(.32,.07,.04,0,.93,.225,"#16294d"),Be(.2,.14,.012,0,.6,.235,"#d8dde6")),Oe(s)}function f1(){return Oe([Be(.36,.03,.3,0,.015,0,rr),Be(.08,.36,.08,0,.18,0,rr),Be(.46,.55,.4,0,.63,0,"#ffffff"),Be(.48,.04,.42,0,.92,0,"#ffffff"),Be(.34,.24,.012,0,.71,.205,"#1c2226"),Be(.12,.03,.03,0,.53,.215,"#9aa0a4")])}function d1(){return Oe([qe(.035,.04,1.05,8,0,.525,0,Cc),Be(.17,.28,.13,0,1.19,0,"#8a9095"),qe(.085,.085,.13,10,0,1.33,0,"#3a4044","z"),Be(.1,.07,.012,0,1.24,.067,"#c9e0a8")])}function p1(){return Oe([qe(.045,.05,3.3,8,0,1.65,0,Cc),qe(.06,.06,.06,8,0,3.32,0,Cc)])}function m1(s){let t=[qe(.13,.17,10.6,8,0,5.3,0,"#5a4330"),Be(2.5,.13,.13,0,9.7,0,"#4b3828"),Be(1.4,.1,.1,0,8.9,0,"#4b3828")];for(let e of[-1.1,0,1.1])t.push(qe(.05,.06,.2,6,e,9.86,0,"#cfd4d2"));for(let e of[-.6,.6])t.push(qe(.04,.05,.16,6,e,9.04,0,"#cfd4d2"));return s&&t.push(qe(.27,.27,.85,10,0,7.9,.32,"#7d8487"),qe(.29,.29,.05,10,0,8.35,.32,"#5f6669")),Oe(t)}var Qd=s=>s.toUpperCase().replace(" DRIVE"," DR").replace(" AVE"," AV").replace(" BLVD"," BL"),Kd=Object.fromEntries(Object.entries(lu).map(([s,t])=>[s,Qd(t)])),Jd=Object.fromEntries(Object.entries(cu).map(([s,t])=>[s,Qd(t)]));function g1(s,t){let e=t.length,n=We(s,512,64*e,(r,o,a)=>{let c=a/e;t.forEach((h,l)=>{let f=l*c;r.fillStyle="#16603d",r.fillRect(0,f,o,c),r.strokeStyle="#e9f1ea",r.lineWidth=3,r.strokeRect(6,f+6,o-12,c-12),r.fillStyle="#f4f7f2",r.font='700 40px "Barlow Condensed", Arial Narrow, Arial, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(h,o/2,f+c/2+2)})}),i=new Ht({map:n,roughness:.45,metalness:.2});return i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aRow;`).replace("#include <uv_vertex>",`#include <uv_vertex>
  vMapUv.y = (vMapUv.y + aRow) / ${e.toFixed(1)};`)},i.customProgramCacheKey=()=>"pa-street-blade",i}function x1(s){return We(s,256,384,(t,e,n)=>{let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#ff8a4c"),i.addColorStop(1,"#5a1c3c"),t.fillStyle=i,t.fillRect(0,0,e,n),t.fillStyle="#fff4dc",t.beginPath(),t.arc(e/2,n*.36,62,0,Math.PI*2),t.fill(),t.fillStyle="#1b1020",t.font='800 54px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.fillText("SURF",e/2,n*.7),t.fillText("FIZZ",e/2,n*.84),t.fillStyle="#fff4dc",t.font="600 18px Arial, sans-serif",t.fillText("TASTE THE SWELL",e/2,n*.94)})}function tp(s,t,e,n,i=[]){let r=new Ot,o=new de,a=new U,c=new U(1,1,1),h=new U(0,1,0),l=new Ht({vertexColors:!0,roughness:.55,metalness:.15}),f=[],d=[],u=ne+5,g=new Yn(16);for(let[nt,Ft]of n)g.add({x:nt,z:Ft});for(let nt of i)g.add({x:nt.x,z:nt.z});let v=(nt,Ft,L=2.4)=>g.any(nt,Ft,L),m=new Yn(32);for(let nt of Xi){let[Ft,L]=Qs(nt);m.add({x:Ft,z:L})}let p=(nt,Ft)=>m.any(nt,Ft,7),_=new Set(["downtown","midtown"]),b={hydrant:[],bin:[],bench:[],mailbox:[],newsbox:[],meter:[]},y=(nt,Ft,L,Dt)=>It=>nt==="ns"?[Ft+L*(ne+It),Dt]:[Dt,Ft+L*(ne+It)];for(let nt of["ns","ew"]){let Ft=nt==="ns"?me:ge,L=nt==="ns"?ge:me,[Dt,It]=nt==="ns"?[_e-45,Re+45]:[ze+15,we+25];for(let St of Ft)for(let Y of[-1,1])if(!(nt==="ns"&&St===ze&&Y<0))for(let q=Dt;q<=It;q+=6.5){if(L.some(D=>Math.abs(q-D)<u))continue;let W=y(nt,St,Y,q),[rt,wt]=W(1);if(v(rt,wt)||p(rt,wt))continue;let Ut=nt==="ns"?Y>0?-Math.PI/2:Math.PI/2:Y>0?Math.PI:0,I=_.has(pi(tr(rt+(nt==="ns"?Y*40:0)),$o(wt+(nt==="ew"?Y*40:0)))),x=dt();if(x<.055)b.hydrant.push([...W(.6),Ut]);else if(x<.12)b.bin.push([...W(.9),Ut]);else if(x<.165)b.bench.push([...W(3.4),Ut]);else if(x<.19)b.mailbox.push([...W(1.1),Ut]);else if(x<.23){let D=2+Math.floor(dt()*2);for(let B=0;B<D;B++){let H=(B-(D-1)/2)*.55,[k,J]=W(1.1);b.newsbox.push([nt==="ns"?k:k+H,nt==="ns"?J+H:J,Ut])}}else I&&x<.42&&b.meter.push([...W(.45),Ut])}}let w={hydrant:{geo:l1(),y:.4,r:.22,mass:.08,solid:1.5,lieH:.17,kind:"fly",sparks:!0},bin:{geo:c1(),y:.5,r:.32,mass:.04,solid:1.2,lieH:.29,kind:"fly"},bench:{geo:h1(),y:.4,r:.75,mass:.07,solid:1.5,lieH:.3,kind:"fly"},mailbox:{geo:u1(),y:.5,r:.34,mass:.06,solid:1.5,lieH:.25,kind:"fly",sparks:!0},newsbox:{geo:f1(),y:.5,r:.28,mass:.04,solid:1.2,lieH:.22,kind:"fly"},meter:{geo:d1(),y:0,r:.12,mass:.04,solid:2,kind:"topple",sparks:!0}},A=["#c8342b","#2f5fa8","#e2b33a","#2e7d4f","#e8e4da","#d9662f"].map(nt=>new Lt(nt)),P={},R=nt=>[nt[0],nt[1]],S=nt=>{nt.castShadow=!0,nt.receiveShadow=!0,nt.layers.set(1)};for(let[nt,Ft]of Object.entries(b)){let L=w[nt],Dt=$e(s,Ft,L.geo,l,{at:R,far:nt==="bench"?420:340,setup:It=>{S(It),It.name=nt},set:(It,St,[Y,q,W])=>{o.setFromAxisAngle(h,W+(nt==="bin"||nt==="hydrant"?dt()*6.28:0)),It.setMatrixAt(St,r.compose(a.set(Y,Qt,q),o,c)),nt==="newsbox"&&It.setColorAt(St,re(A))}});P[nt]=Dt.meshes,Ft.forEach(([It,St],Y)=>{e.add([Dt.refs[Y]],null,{type:nt,x:It,z:St,y:Qt+L.y,r:L.r,mass:L.mass,solid:L.solid,lieH:L.lieH??.2,kind:L.kind,sparks:!!L.sparks})})}let E=[...Object.values(Kd),...Object.values(Jd)],z=[];for(let nt of me)for(let Ft of ge)z.push([nt+ne+1.3,Ft-ne-1.3,nt,Ft]);let G=$e(s,z,p1(),l,{at:R,far:420,setup:S,set:(nt,Ft,[L,Dt])=>nt.setMatrixAt(Ft,r.makeTranslation(L,Qt,Dt))}),F=z.flatMap(([nt,Ft,L,Dt])=>[[nt,Ft,0,E.indexOf(Kd[String(L)])],[nt,Ft,1,E.indexOf(Jd[String(Dt)])]]),O=$e(s,F,new Jt(1.7,.27,.03),g1(t,E),{at:R,far:420,cloneGeometry:!0,set:(nt,Ft,[L,Dt,It])=>{It===0?o.setFromAxisAngle(h,Math.PI/2):o.identity(),nt.setMatrixAt(Ft,r.compose(a.set(L,Qt+3+It*.3,Dt),o,c))},setup:(nt,Ft)=>{S(nt),nt.geometry.setAttribute("aRow",new He(new Float32Array(Ft.map(L=>E.length-1-L[3])),1))}});z.forEach(([nt,Ft],L)=>{e.add([G.refs[L],O.refs[L*2],O.refs[L*2+1]],null,{type:"sign",x:nt,z:Ft,y:Qt,r:.12,mass:.05,solid:2.5,kind:"topple",sparks:!0})});let X=[],$=[],T=[];for(let nt of Xi){let[Ft,L]=Qs(nt),Dt=nt.axis==="ns"?nt.side>0?-Math.PI/2:Math.PI/2:nt.side>0?Math.PI:0,It=new Ot().compose(a.set(Ft,Qt,L),o.setFromAxisAngle(h,Dt),c),St=(rt,wt)=>rt.push(wt.applyMatrix4(It));St(X,Be(4.3,.08,1.8,0,2.55,0,"#3b4448",.04)),St(X,Be(4.3,.18,.06,0,2.48,.88,"#2b3236"));for(let rt of[-2.05,2.05])for(let wt of[-.78,.7])St(X,qe(.05,.05,2.5,8,rt,1.25,wt,"#2b3236"));St(X,Be(2.4,.05,.42,-.2,.47,-.45,"#9aa3a8"));for(let rt of[-1.2,.8])St(X,Be(.05,.45,.35,rt,.225,-.45,"#2b3236"));St(X,qe(.04,.04,2.8,8,2.7,1.4,.9,Cc)),St(X,qe(.27,.27,.03,18,2.7,2.65,.9,"#1d4f9a","z")),St(X,qe(.2,.2,.035,18,2.7,2.65,.9,"#f2f4f6","z")),St($,Be(4,1.85,.02,0,1.3,-.8,"#ffffff")),St($,Be(.02,1.85,1.35,-2.05,1.3,-.1,"#ffffff"));let Y=new Jt(.14,1.8,1.3);Y.translate(2.05,1.3,-.08),T.push(Pc(Y,"#ffffff").applyMatrix4(It));let q=2.25,W=.95;f.push(nt.axis==="ns"?{x:Ft,z:L,w:W,d:q}:{x:Ft,z:L,w:q,d:W})}let V=new zt(Oe(X),l);V.castShadow=V.receiveShadow=!0;let tt=new Ht({color:10470612,roughness:.05,metalness:.1,transparent:!0,opacity:.22,depthWrite:!1}),ht=new zt(Oe($),tt);ht.renderOrder=2;let bt=x1(t),Tt=new Ht({map:bt,emissive:16777215,emissiveMap:bt,emissiveIntensity:.1,roughness:.3}),Nt=new zt(Oe(T),Tt);Nt.castShadow=!0,s.add(V,ht,Nt);let Gt=[];for(let nt=_e-30;nt<=Re+45;nt+=38)ge.some(Ft=>Math.abs(nt-Ft)<u)||Gt.push([we+ne+1.7,nt,"ns"]);for(let[nt,Ft]of[[Re,1],[_e,-1]])for(let L=ze+30;L<=we+10;L+=38)me.some(Dt=>Math.abs(L-Dt)<u)||Gt.push([L,nt+Ft*(ne+1.7),"ew"]);let Kt=Gt.filter((nt,Ft)=>Ft%4!==2),et=Gt.filter((nt,Ft)=>Ft%4===2);for(let[nt,Ft]of[[Kt,!1],[et,!0]]){$e(s,nt,m1(Ft),l,{at:R,far:900,setup:L=>{L.castShadow=!0},set:(L,Dt,[It,St,Y])=>L.setMatrixAt(Dt,r.compose(a.set(It,Qt,St),o.setFromAxisAngle(h,Y==="ns"?0:Math.PI/2),c))});for(let[L,Dt]of nt)d.push({x:L,z:Dt,r:.22})}let ct=[],Pt=[Gt.filter(nt=>nt[2]==="ns"),Gt.filter(nt=>nt[2]==="ew"&&nt[1]>0),Gt.filter(nt=>nt[2]==="ew"&&nt[1]<0)];for(let nt of Pt)for(let Ft=0;Ft<nt.length-1;Ft++){let[L,Dt,It]=nt[Ft],[St,Y]=nt[Ft+1];if(!(Math.hypot(St-L,Y-Dt)>80))for(let[q,W]of[[-1.1,9.92],[0,9.92],[1.1,9.92],[-.6,9.08],[.6,9.08]]){let rt=It==="ns"?q:0,wt=It==="ns"?0:q,Ut=.55+Math.abs(q)*.1,I=L+rt,x=Qt+W,D=Dt+wt;for(let B=1;B<=12;B++){let H=B/12,k=L+(St-L)*H+rt,J=Dt+(Y-Dt)*H+wt,Q=Qt+W-Ut*4*H*(1-H);ct.push(I,x,D,k,Q,J),I=k,x=Q,D=J}}}let Wt=new Le;Wt.setAttribute("position",new ie(ct,3));let Rt=new bo(Wt,new Ir({color:723981,transparent:!0,opacity:.85}));return s.add(Rt),{solids:f,circles:d,meshes:P,update(nt){Tt.emissiveIntensity=.12+nt*1.4}}}function ep(s,t,e,n,i){let r=n-t,o=i-e;return s.segment(t,e,n,i,a=>{if(Math.max(t,n)<a.x-a.w||Math.min(t,n)>a.x+a.w||Math.max(e,i)<a.z-a.d||Math.min(e,i)>a.z+a.d)return!1;let c=0,h=1;for(let l=0;l<2;l++){let f=l?e:t,d=l?o:r,u=l?a.z-a.d:a.x-a.w,g=l?a.z+a.d:a.x+a.w;if(Math.abs(d)<1e-6){if(f<u||f>g)return!1;continue}let v=(u-f)/d,m=(g-f)/d;if(v>m){let p=v;v=m,m=p}if(c=Math.max(c,v),h=Math.min(h,m),c>h)return!1}return!0})}var Ic=class{constructor(t,e){this.traffic=t,this.colliders=e,this.reset()}reset(){this.level=0,this.evade=0,this.speeding=0,this.bustTimer=0,this.lastCrime=-99,this.seen=!1,this.events=this.events||[];for(let t of this.traffic.police)this.traffic.endChase(t)}get evading(){return this.level>0&&!this.seen}get evadeTime(){return 7+this.level*3}sightRange(){return 70+this.level*25}witness(t,e,n){let i=null,r=n;for(let o of this.traffic.police){let a=Math.hypot(o.x-t,o.z-e);a>r||ep(this.colliders,o.x,o.z,t,e)||(i=o,r=a)}return i}crime(t,e,n,i,r,o=!0){if(r-this.lastCrime<2.5&&t!=="police")return!1;let a=o?this.witness(e,n,75+this.level*15):null;if(o&&!a&&this.level===0||o&&!a&&!this.seen)return!1;this.lastCrime=r;let c=this.level;return this.level=Math.min(5,Math.max(this.level+i,t==="police"?2:1)),this.evade=0,this.level>c&&this.events.push({type:"up",level:this.level,kind:t}),a&&this.traffic.startChase(a),!0}update(t,e,n,i,r){if(this.events.length=0,!r){this.level&&this.reset();return}if(e.kmh>125&&this.witness(e.x,e.z,55)?(this.speeding+=t,this.speeding>1.2&&(this.crime("speeding",e.x,e.z,1,n),this.speeding=0)):this.speeding=Math.max(0,this.speeding-t),!this.level){this.seen=!1;return}let a=Math.min(this.traffic.police.length,[0,1,2,3,4,5][this.level]),c=this.traffic.police.filter(f=>f.mode==="chase");if(c.length<a){let f=this.traffic.police.filter(d=>d.mode!=="chase").sort((d,u)=>Math.hypot(d.x-e.x,d.z-e.z)-Math.hypot(u.x-e.x,u.z-e.z))[0];f&&(Math.hypot(f.x-e.x,f.z-e.z)>260?this.traffic.dispatch(f,e,i):this.traffic.startChase(f))}let h=this.sightRange();if(this.seen=c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<h&&!ep(this.colliders,f.x,f.z,e.x,e.z)),this.seen)this.evade=0;else if(this.evade+=t,this.evade>this.evadeTime){this.events.push({type:"evaded"}),this.reset();return}c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<8)&&e.kmh<6?(this.bustTimer+=t,this.bustTimer>2.5&&(this.events.push({type:"busted"}),this.reset())):this.bustTimer=Math.max(0,this.bustTimer-t*2)}sirenLevel(t){let e=1/0;for(let n of this.traffic.police)n.mode==="chase"&&(e=Math.min(e,Math.hypot(n.x-t.x,n.z-t.z)));return Math.max(0,1-e/260)}};var v1=[["sedan",16],["suv",11],["hatch",11],["pickup",7],["taxi",9],["police",5]],wu={sedan:26,suv:20,hatch:22,pickup:12,taxi:0,police:0},y1=["sedan","sedan","suv","hatch","hatch","pickup"],np=["#e9e9e6","#e9e9e6","#151719","#151719","#9ea3a6","#5d6265","#1f3a5f","#8e1c1c","#c9b99a","#2e4a3a","#6b7d8c","#3a2f2a","#7a8f9e","#b85c2a"],ip=11.85,_1=430,sp=210,gi=new Ot,ys=new de,Zn=new U,Jr=new U(1,1,1),aa=new U(0,1,0),M1=new U(1,0,0),Dc=new Ot,Tu=new de,b1=new de().setFromAxisAngle(aa,Math.PI),ra=new Ot().makeScale(0,0,0),xi=new Lt;function op(s,t){return s==="ns"?-t:t}function Au(s,t){return s==="ns"?t<0?0:Math.PI:t>0?-Math.PI/2:Math.PI/2}function Ru(s,t){return s==="ns"?[0,t]:[t,0]}function oa(s,t,e,n,i){let r=op(s,e)*Zo[n];return s==="ns"?[t+r,i]:[i,t+r]}function rp(s){return Math.atan2(Math.sin(s),Math.cos(s))}function Cu(s,t){return s.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},s.customProgramCacheKey=()=>t,s}var Pu=new Map;function S1(s){if(Pu.has(s))return Pu.get(s);let e=Object.entries({trim:"#14181a",dark:"#07090a",chrome:"#b9bec2",plate:"#d6d2c4"}).map(([i,r])=>{let o=s.parts[i].clone(),a=new Lt(r),c=o.attributes.position.count,h=new Float32Array(c*3);for(let l=0;l<c;l++)h[l*3]=a.r,h[l*3+1]=a.g,h[l*3+2]=a.b;return o.setAttribute("color",new Je(h,3)),o}),n={paint:s.parts.paint,glass:s.parts.glass,body:Oe(e),head:s.parts.head,tail:s.parts.tail};return Pu.set(s,n),n}function E1(){let s=ea(16777215,{metalness:.35,roughness:.32});return s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying float vBodyY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBodyY = position.y;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vBodyY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(vec3(0.015), vec3(0.92), smoothstep(0.7, 0.74, vBodyY));`)},s.customProgramCacheKey=()=>"police-paint",s}var Lc=class{constructor(t,e){this.cars=[],this.meshes=[],this.types={},this.parked=[],this.police=[],this.world=null,this.peds=[],this.policePace=.6;let n=Sc(e);this.headMat=Cu(new Ht({color:16777215,emissive:16773846,emissiveIntensity:1,roughness:.2}),"head-inst"),this.tailMat=Cu(new Ht({color:3802885,emissive:16719888,emissiveIntensity:1,roughness:.3}),"tail-inst");let i=We(e,128,32,(l,f)=>{l.fillStyle="#f7d046",l.fillRect(0,0,f,32),l.fillStyle="#1a1a1a",l.font='800 24px "Barlow Condensed", Impact, sans-serif',l.textAlign="center",l.fillText("TAXI",f/2,25)});this.taxiSignMat=new Ht({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.3}),this.barMat=Cu(new Ht({color:1118481,emissive:16777215,emissiveIntensity:1,roughness:.3}),"lightbar-inst"),this.bodyMat=new Ht({vertexColors:!0,roughness:.5,metalness:.4}),this.parked=this.layoutParking();for(let[l,f]of v1){let u=bc(l==="taxi"||l==="police"?"sedan":l),g=f+(wu[l]||0),m={paint:l==="police"?E1():ea(16777215,{metalness:.45,roughness:.38}),glass:n.glass,body:this.bodyMat,head:this.headMat,tail:this.tailMat},p={};for(let[R,S]of Object.entries(S1(u))){let E=new pe(S,m[R],g);E.castShadow=R==="paint",(R==="glass"||R==="body")&&E.layers.set(1),E.receiveShadow=!0,E.frustumCulled=!1,E.instanceMatrix.setUsage(ni);for(let z=0;z<g;z++)E.setMatrixAt(z,ra);t.add(E),p[R]=E,this.meshes.push(E)}for(let R=0;R<g;R++)p.paint.setColorAt(R,xi.set(l==="taxi"?"#f2c230":re(np))),p.tail.setColorAt(R,xi.setScalar(1)),p.head.setColorAt(R,xi.setScalar(1));let _=new pe(u.wheel.tire,n.tire,g*4),b=new pe(u.wheel.rim,n.rim,g*4);for(let R of[_,b]){R.frustumCulled=!1,R.castShadow=!1,R.layers.set(1),R.instanceMatrix.setUsage(ni);for(let S=0;S<g*4;S++)R.setMatrixAt(S,ra);t.add(R),this.meshes.push(R)}let y=null,w=null;if(l==="taxi"&&(y=new pe(new Jt(.62,.2,.26),this.taxiSignMat,f),y.frustumCulled=!1,t.add(y),this.meshes.push(y)),l==="police"){w=new pe(new Jt(.62,.16,.3),this.barMat,f*2),w.frustumCulled=!1;for(let R=0;R<f*2;R++)w.setColorAt(R,xi.setScalar(0));t.add(w),this.meshes.push(w)}let A=Math.max(...u.type.cabin.top.map(R=>R[1])),P={name:l,geo:u,parts:p,tire:_,rim:b,sign:y,bar:w,roofY:A,moving:f,cap:g};this.types[l]=P;for(let R=0;R<f;R++){let S={type:P,slot:R,geo:u,police:l==="police",mode:"lane"};this.spawnLane(S,an.x,an.z,0,420),this.cars.push(S),S.police&&this.police.push(S)}}let r=We(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d/2,4,f/2,d/2,d/2);u.addColorStop(0,"rgba(0,0,0,0.75)"),u.addColorStop(.55,"rgba(0,0,0,0.45)"),u.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),o=new Ue(2.6,5.6);o.rotateX(-Math.PI/2);let a=Object.values(wu).reduce((l,f)=>l+f,0);this.blobs=new pe(o,new en({map:r,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),this.cars.length+a+1),this.blobs.frustumCulled=!1,this.blobs.renderOrder=1,this.blobs.userData.noAO=!0,t.add(this.blobs);let c=We(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d*.75,2,f/2,d*.6,d*.6);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(.5,"rgba(255,255,255,0.3)"),u.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),h=new Ue(6,14);h.rotateX(-Math.PI/2),h.translate(0,0,-9.5),this.poolMat=new en({map:c,color:16773328,transparent:!0,depthWrite:!1,blending:Nn,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2}),this.pools=new pe(h,this.poolMat,this.cars.length),this.pools.frustumCulled=!1,this.pools.layers.set(1),this.pools.userData.noAO=!0,t.add(this.pools),this.parkTimer=0,this.nearParked=[],this.refreshParked(an.x,an.z)}layoutParking(){let t=[],e=new Yn(48);for(let i of Xi){let[r,o]=Qs(i);e.add({x:r,z:o})}let n=i=>i.slice(0,-1).map((r,o)=>[r+27,i[o+1]-27]);for(let[i,r,o]of[["ns",me,ge],["ew",ge,me]])for(let a of r)for(let c of[-1,1])if(!(i==="ns"&&a===ze&&c<0))for(let[h,l]of n(o))for(let f=h+3.6;f<l-3;f+=7.2){if(!Me(.42))continue;let d=f+mt(-.6,.6),u=i==="ns"?a+c*ip:d,g=i==="ns"?d:a+c*ip;if(e.near(u,g,14,m=>Math.hypot(m.x-u,m.z-g)<14)||u<-300&&Rn.some(m=>Math.abs(g-m.z)<20))continue;let v=i==="ns"?-c:c;t.push({parked:!0,type:re(y1),x:u,z:g,heading:Au(i,v)+mt(-.04,.04),color:re(np),hit:null,slot:-1})}return this.parkGrid=new Yn(80).addAll(t),t}refreshParked(t,e){for(let r of Object.values(this.types))for(let o=r.moving;o<r.cap;o++){for(let a of Object.values(r.parts))a.setMatrixAt(o,ra);for(let a=0;a<4;a++)r.tire.setMatrixAt(o*4+a,ra),r.rim.setMatrixAt(o*4+a,ra)}for(let r of this.nearParked)r.slot=-1;let n=[];this.parkGrid.near(t,e,sp,r=>{r.d=Math.hypot(r.x-t,r.z-e),r.slot=-1,r.d<sp&&n.push(r)}),n.sort((r,o)=>r.d-o.d);let i={};this.nearParked=[];for(let r of n){let o=this.types[r.type],a=i[r.type]||0;a>=wu[r.type]||(i[r.type]=a+1,r.slot=o.moving+a,o.parts.paint.setColorAt(r.slot,xi.set(r.color)),o.parts.head.setColorAt(r.slot,xi.setScalar(0)),o.parts.tail.setColorAt(r.slot,xi.setScalar(.12)),this.writeCar(o,r.slot,r.x,r.z,r.heading,0),this.nearParked.push(r))}}writeCar(t,e,n,i,r,o){ys.setFromAxisAngle(aa,r),gi.compose(Zn.set(n,.02,i),ys,Jr);for(let a of Object.values(t.parts))a.setMatrixAt(e,gi);return t.geo.wheels.forEach((a,c)=>{Tu.setFromAxisAngle(M1,o*(a.side<0?-1:1)),a.side<0&&Tu.premultiply(b1),Dc.compose(Zn.set(a.x,a.y,a.z),Tu,Jr),Dc.premultiply(gi),t.tire.setMatrixAt(e*4+c,Dc),t.rim.setMatrixAt(e*4+c,Dc)}),gi}spawnLane(t,e,n,i,r,o=null){for(let a=0;a<40;a++){let c=dt()<.5?"ns":"ew",h=(c==="ns"?me:ge).filter(p=>Math.abs(p-(c==="ns"?e:n))<r);if(!h.length)continue;let l=re(h),f=dt()<.5?1:-1,d=dt()<.5?0:1,u=c==="ns"?Ee.clamp(n+mt(-r,r),_e+10,Re-10):Ee.clamp(e+mt(-r,r),ze+10,we-10),[g,v]=oa(c,l,f,d,u),m=Math.hypot(g-e,v-n);if(!(m<i||m>r)&&!(c==="ns"?ge:me).some(p=>Math.abs(p-u)<24)&&!this.cars.some(p=>p!==t&&p.mode==="lane"&&p.axis===c&&p.road===l&&p.dir===f&&p.lane===d&&Math.abs(p.s-u)<20)){if(o){let p=g-o.position.x,_=v-o.position.z,b=Math.hypot(p,_)||1;if((p*o.fx+_*o.fz)/b>.2&&b<300)continue}return Object.assign(t,{axis:c,road:l,dir:f,lane:d,s:u}),Object.assign(t,{mode:"lane",cruise:t.police?mt(10.5,12.5):mt(11,16.5),speed:9,turn:null,plan:null,decided:null,hit:null,offset:null,braking:!1,blockedTime:0,wheelSpin:0,vx:0,vz:0}),this.place(t),!0}}return t.axis===void 0&&Object.assign(t,{axis:"ns",road:me[1],dir:1,lane:0,s:0}),Object.assign(t,{mode:"lane",cruise:12,speed:0,turn:null,plan:null,hit:null,offset:null,wheelSpin:0,vx:0,vz:0,blockedTime:0}),this.place(t),!1}place(t){if(t.turn){let e=t.turn,n=e.t*Math.PI/2,i=Math.cos(n),r=Math.sin(n);t.x=e.O[0]+e.u[0]*i+e.v[0]*r,t.z=e.O[1]+e.u[1]*i+e.v[1]*r;let o=-e.u[0]*r+e.v[0]*i,a=-e.u[1]*r+e.v[1]*i;t.heading=Math.atan2(-o,-a)}else[t.x,t.z]=oa(t.axis,t.road,t.dir,t.lane,t.s),t.heading=Au(t.axis,t.dir)}nextCross(t){let e=t.axis==="ns"?ge:me,n=null;for(let i of e){let r=(i-t.s)*t.dir;r>-1&&(n===null||r<(n-t.s)*t.dir)&&(n=i)}return n}exitValid(t,e,n){let i=t==="ns"?ge:me;return e>0?n<i[i.length-1]:n>i[0]}planTurn(t,e){let n=t.axis==="ns"?t.dir<0?"N":"S":t.dir>0?"E":"W",i={N:"E",E:"S",S:"W",W:"N"}[n],r={N:"W",W:"S",S:"E",E:"N"}[n],o=R=>R==="N"?["ns",-1]:R==="S"?["ns",1]:R==="E"?["ew",1]:["ew",-1],a=R=>{let[S,E]=o(R);return S===t.axis?this.exitValid(S,E,e):this.exitValid(S,E,t.road)},c=[];a(n)&&c.push(["straight",t.lane===1?.6:.72]),a(i)&&c.push(["right",t.lane===1?.4:.08]),a(r)&&c.push(["left",t.lane===0?.28:.06]);let h=dt()*c.reduce((R,S)=>R+S[1],0),l=c[0][0];for(let[R,S]of c)if((h-=S)<=0){l=R;break}if(l==="straight")return null;let[f,d]=o(l==="right"?i:r),u=t.lane,g=e,v=oa(t.axis,t.road,t.dir,t.lane,0),m=oa(f,g,d,u,0),p=t.axis==="ns"?[v[0],m[1]]:[m[0],v[1]],_=Ru(t.axis,t.dir),b=Ru(f,d),y=l==="right"?6.5:10.5,w=[p[0]-_[0]*y,p[1]-_[1]*y],A=[p[0]+b[0]*y,p[1]+b[1]*y],P=[w[0]+b[0]*y,w[1]+b[1]*y];return{startS:t.axis==="ns"?w[1]:w[0],O:P,u:[w[0]-P[0],w[1]-P[1]],v:[A[0]-P[0],A[1]-P[1]],t:0,len:y*Math.PI/2,next:{axis:f,road:g,dir:d,lane:u,s:f==="ns"?A[1]:A[0]}}}rejoinLane(t){let e=-Math.sin(t.heading),n=-Math.cos(t.heading),i=Math.abs(n)>Math.abs(e)?"ns":"ew",r=i==="ns"?Math.sign(n)||1:Math.sign(e)||1,o=i==="ns"?t.x:t.z,a=i==="ns"?qi(o):ds(o),c=(o-a)*op(i,r),h=Math.abs(c-Zo[0])<Math.abs(c-Zo[1])?0:1,l=i==="ns"?t.z:t.x,[f,d]=oa(i,a,r,h,l);Object.assign(t,{mode:"lane",axis:i,road:a,dir:r,lane:h,s:l,turn:null,plan:null,decided:null,hit:null}),t.offset={dx:t.x-f,dz:t.z-d,dh:rp(t.heading-Au(i,r)),t:1},Math.abs(o-a)>ne+6&&this.spawnLane(t,t.x,t.z,0,200)}update(t,e,n,i,r=null){if(this.frozen)return;let o=n.x,a=n.z,c=r?{position:r.position,fx:0,fz:0}:null;if(c){r.getWorldDirection(Zn),c.fx=Zn.x,c.fz=Zn.z;let l=Math.hypot(c.fx,c.fz)||1;c.fx/=l,c.fz/=l}for(let l of this.cars){if(l.mode==="lane"&&Math.hypot(l.x-o,l.z-a)>_1){this.spawnLane(l,o,a,140,380,c);continue}if(l.mode==="chase"){this.chase(l,t,n);continue}if(l.hit){let m=l.hit;l.x+=m.vx*t,l.z+=m.vz*t;let p=Math.exp(-1.8*t);m.vx*=p,m.vz*=p,l.heading+=m.spin*t,m.spin*=Math.exp(-2.5*t),m.t-=t,l.speed=0,this.collideWorld(l),m.t<=0&&this.rejoinLane(l);continue}let f=l.cruise,[d,u]=l.turn?[-Math.sin(l.heading),-Math.cos(l.heading)]:Ru(l.axis,l.dir);if(l.turn)f=Math.min(f,8);else{let m=this.nextCross(l);if(m!==null){let p=(m-l.s)*l.dir;p<34&&l.decided!==m&&(l.decided=m,l.plan=this.planTurn(l,m));let _=p-20.5,b=xs(l.axis==="ns"?0:1,e);_>-1&&(b===0||b===1&&_>9)&&(f=Math.min(f,Math.sqrt(Math.max(0,_-.5))*2.4)),l.plan&&(f=Math.min(f,l.plan.next.lane===0?9:7.5)),!l.plan&&!this.exitValid(l.axis,l.dir,m)&&(f=Math.min(f,Math.sqrt(Math.max(0,_))*2))}for(let p of this.cars){if(p===l||p.mode!=="lane"||p.turn||p.axis!==l.axis||p.road!==l.road||p.dir!==l.dir||p.lane!==l.lane)continue;let _=(p.s-l.s)*l.dir;_>0&&_<45&&(f=Math.min(f,Math.max(0,_-7.5)*.9))}}let g=(m,p,_,b)=>{let y=m-l.x,w=p-l.z,A=y*d+w*u,P=Math.abs(y*u-w*d);return A>0&&A<32&&P<b?(f=Math.min(f,Math.max(0,A-_)*.85),!0):!1};g(o,a,6.5,2.6)?l.speed<1&&n.kmh<5&&(l.blockedTime+=t,l.blockedTime>2.5&&(l.blockedTime=-4,i?.(l))):l.blockedTime=Math.max(0,l.blockedTime-t);for(let m of this.peds)g(m.x,m.z,5,2.4);for(let m of this.cars)(m.mode!=="lane"||m.hit)&&m!==l&&g(m.x,m.z,7,2.6);let v=f>l.speed?3.2:9;if(l.speed+=Math.sign(f-l.speed)*Math.min(Math.abs(f-l.speed),v*t),l.braking=f<l.speed-.3||l.speed<.5&&f<.5,l.turn?(l.turn.t+=l.speed*t/l.turn.len,l.turn.t>=1&&(Object.assign(l,l.turn.next),l.turn=null,l.decided=null)):(l.s+=l.speed*l.dir*t,l.plan&&(l.s-l.plan.startS)*l.dir>=0&&(l.turn=l.plan,l.plan=null)),this.place(l),l.offset){let m=l.offset;if(m.t-=t/1.6,m.t<=0)l.offset=null;else{let p=m.t*m.t;l.x+=m.dx*p,l.z+=m.dz*p,l.heading+=m.dh*p}}l.vx=d*l.speed,l.vz=u*l.speed,l.wheelSpin-=l.speed*t/l.geo.type.wheelR}this.updateParked(t),this.collidePlayer(n),this.parkTimer-=t;let h=Math.hypot(o-(this.lastParkX??o),a-(this.lastParkZ??a))>60;(this.parkTimer<=0||h)&&(this.parkTimer=.5,this.lastParkX=o,this.lastParkZ=a,this.refreshParked(o,a))}chase(t,e,n){let i=this.policePace,r=n.x-t.x,o=n.z-t.z,a=Math.hypot(r,o),c=Math.min(a/35,1.1)*i,h=n.x+n.vx*c,l=n.z+n.vz*c,f=Math.atan2(-(h-t.x),-(l-t.z)),d=10+t.speed*.6,u=this.world?.boxGrid,g=A=>{let P=t.x-Math.sin(A)*d,R=t.z-Math.cos(A)*d;return!!u&&u.near(P,R,2,S=>Math.abs(P-S.x)<S.w+1.8&&Math.abs(R-S.z)<S.d+1.8)};if(g(f)){for(let A of[.5,-.5,1,-1,1.6,-1.6])if(!g(f+A)){f+=A;break}}let v=rp(f-t.heading),m=1.9/(1+t.speed*.012);t.heading+=Ee.clamp(v,-m*e,m*e);let p=Math.hypot(n.vx,n.vz),_=50*i,b=a>60?_:Math.min(_+2,p+10*i);Math.abs(v)>.9&&(b=Math.min(b,14*Math.min(1,i+.2))),a<9&&p<3&&(b=Math.min(b,2)),t.speed+=Ee.clamp(b-t.speed,-14*e,9*i*e);let y=-Math.sin(t.heading),w=-Math.cos(t.heading);t.vx+=(y*t.speed-t.vx)*Math.min(1,e*5),t.vz+=(w*t.speed-t.vz)*Math.min(1,e*5),t.x+=t.vx*e,t.z+=t.vz*e,this.collideWorld(t),t.wheelSpin-=t.speed*e/t.geo.type.wheelR,t.braking=b<t.speed-1}collideWorld(t){let e=this.world?.boxGrid;e&&e.near(t.x,t.z,2,n=>{let i=n.w+1.1-Math.abs(t.x-n.x),r=n.d+1.1-Math.abs(t.z-n.z);i<=0||r<=0||(i<r?(t.x+=Math.sign(t.x-n.x)*i,t.vx*=-.2):(t.z+=Math.sign(t.z-n.z)*r,t.vz*=-.2),t.speed*=.6)}),t.x=Ee.clamp(t.x,ce.minX+60,ce.maxX),t.z=Ee.clamp(t.z,ce.minZ,ce.maxZ)}startChase(t){if(t.mode==="chase")return;t.mode="chase",t.turn=null,t.plan=null,t.hit=null,t.offset=null;let e=-Math.sin(t.heading),n=-Math.cos(t.heading);t.vx=e*t.speed,t.vz=n*t.speed}endChase(t){t.mode==="chase"&&(this.rejoinLane(t),t.speed=Math.min(t.speed,10))}dispatch(t,e,n){let i={position:n.position,fx:0,fz:0};n.getWorldDirection(Zn);let r=Math.hypot(Zn.x,Zn.z)||1;i.fx=Zn.x/r,i.fz=Zn.z/r,this.spawnLane(t,e.x,e.z,110,240,i),this.startChase(t)}updateParked(t){for(let e of this.nearParked){if(!e.hit)continue;let n=e.hit;e.x+=n.vx*t,e.z+=n.vz*t,e.heading+=n.spin*t;let i=Math.exp(-2.4*t);n.vx*=i,n.vz*=i,n.spin*=i,Math.hypot(n.vx,n.vz)<.05&&Math.abs(n.spin)<.02&&(e.hit=null),this.writeCar(this.types[e.type],e.slot,e.x,e.z,e.heading,0)}}collidePlayer(t){let e=[-Math.sin(t.heading),-Math.cos(t.heading)],n=[...this.cars,...this.nearParked];this.lastHit=null;for(let i of n){let r=t.x-i.x,o=t.z-i.z;if(r*r+o*o>64)continue;let a=!!i.parked,c=[-Math.sin(i.heading),-Math.cos(i.heading)],l=(a?4.7:i.geo.type.length)/2-1.05;for(let f of[-1.3,1.3])for(let d of[-l,l]){let u=t.x+e[0]*f,g=t.z+e[1]*f,v=i.x+c[0]*d,m=i.z+c[1]*d,p=u-v,_=g-m,b=Math.hypot(p,_);if(b>2.15||b<1e-4)continue;p/=b,_/=b;let y=2.15-b;t.x+=p*y*.6,t.z+=_*y*.6;let w=a?i.hit?i.hit.vx:0:i.mode==="chase"?i.vx:i.hit?i.hit.vx:c[0]*i.speed,A=a?i.hit?i.hit.vz:0:i.mode==="chase"?i.vz:i.hit?i.hit.vz:c[1]*i.speed,P=(t.vx-w)*p+(t.vz-A)*_;if(P<0){let R=a?.55:.5,S=-1.3*P*R;t.vx+=S*p*(a?.8:1),t.vz+=S*_*(a?.8:1),t.impact=Math.max(t.impact,-P),this.lastHit={car:i,parked:a,police:!!i.police,speed:-P,x:(u+v)/2,z:(g+m)/2},t.registerHit?.(this.lastHit.x,this.lastHit.z,-P),(!t.contact||-P>t.contact.speed)&&(t.contact={x:this.lastHit.x,z:this.lastHit.z,speed:-P,nx:p,nz:_}),i.mode==="chase"?(i.vx-=S*p,i.vz-=S*_):(i.hit||(i.hit={vx:w,vz:A,spin:0,t:0}),i.hit.vx-=S*p,i.hit.vz-=S*_,i.hit.spin+=(dt()-.5)*Math.min(-P,20)*.25,i.hit.t=2.8,i.turn=null,i.plan=null)}else!i.hit&&!a&&i.mode!=="chase"&&(i.hit={vx:-p*1.5,vz:-_*1.5,spin:0,t:.6});i.x-=p*y*.4,i.z-=_*y*.4}}}sync(t,e,n=0){let i=0;this.cars.forEach((r,o)=>{let a=r.type,c=this.writeCar(a,r.slot,r.x,r.z,r.heading,r.wheelSpin);if(a.sign){let h=c.clone().multiply(new Ot().makeTranslation(0,a.roofY+.1,.1));a.sign.setMatrixAt(r.slot,h)}if(a.bar)for(let h=0;h<2;h++){let l=c.clone().multiply(new Ot().makeTranslation(h?.32:-.32,a.roofY+.09,.1));a.bar.setMatrixAt(r.slot*2+h,l);let f=r.mode==="chase"&&Math.sin(n*18+h*Math.PI)>0?1:0;a.bar.setColorAt(r.slot*2+h,f?h?xi.setRGB(.3,.5,6):xi.setRGB(6,.2,.15):xi.setRGB(.04,.04,.05))}a.parts.tail.setColorAt(r.slot,xi.setScalar(r.braking?4:1)),ys.setFromAxisAngle(aa,r.heading),gi.compose(Zn.set(r.x,.035,r.z),ys,Jr),this.blobs.setMatrixAt(i++,gi),this.pools.setMatrixAt(o,gi)});for(let r of this.nearParked)ys.setFromAxisAngle(aa,r.heading),gi.compose(Zn.set(r.x,.035,r.z),ys,Jr),this.blobs.setMatrixAt(i++,gi);ys.setFromAxisAngle(aa,e.heading),gi.compose(Zn.set(e.x,e.y+.035,e.z),ys,Jr.set(1.05,1,1)),Jr.set(1,1,1),this.blobs.setMatrixAt(i++,gi),this.blobs.count=i,this.blobs.instanceMatrix.needsUpdate=!0,this.pools.instanceMatrix.needsUpdate=!0;for(let r of this.meshes)r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0);this.headMat.emissiveIntensity=1+t*8,this.tailMat.emissiveIntensity=.8+t*2.2,this.taxiSignMat.emissiveIntensity=.3+t*2.5,this.poolMat.opacity=t*.55}nearest(t,e){let n=1/0;for(let i of this.cars)n=Math.min(n,Math.hypot(i.x-t,i.z-e));return n}};var Ln=62.5,jr=Ln*2,ar=jr*4,or=140,w1=["#f1c7a5","#e0ac85","#c68b62","#a26a45","#7a4b2f","#5a3824"],T1=["#e9e6dd","#20242a","#c23b2e","#2d5d8a","#f2c14e","#3f7a52","#7a4a8c","#e07a4a","#9fb3c4","#d4d0c4","#1f3b5c","#a83c62"],A1=["#26303d","#1b1d20","#5c6b7a","#c9b79a","#3b4652","#6f5b45","#2f3b2c","#e5e1d6"];function R1(){let s=[],t=(e,n,i,r,o,a)=>{e.translate(n,i,r);let c=e.index?e.toNonIndexed():e,h=c.attributes.position.count;c.setAttribute("aPart",new ie(new Float32Array(h).fill(o),1)),c.setAttribute("aRegion",new ie(new Float32Array(h).fill(a),1)),c.attributes.uv&&c.deleteAttribute("uv"),s.push(c)};for(let[e,n]of[[-1,1],[1,2]])t(new Jt(.15,.82,.17),e*.1,.49,0,n,2),t(new Jt(.16,.09,.28),e*.1,.045,-.05,n,3);t(new Jt(.36,.2,.21),0,.96,0,0,2),t(new Jt(.42,.56,.23),0,1.33,0,0,1),t(new le(.05,.055,.1,8),0,1.65,0,0,0),t(new wn(.115,12,10),0,1.79,-.01,0,0),t(new wn(.122,12,8,0,Math.PI*2,0,Math.PI*.55),0,1.81,.012,0,4);for(let[e,n]of[[-1,3],[1,4]])t(new Jt(.1,.34,.12),e*.27,1.43,0,n,1),t(new Jt(.085,.3,.1),e*.275,1.11,0,n,0);return Oe(s)}var ap=`
attribute float aPart;
attribute float aRegion;
attribute vec4 aWalk;  // phase, swing amount, forward lean, fall angle
mat3 pedRotX(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
mat3 pedLimb; vec3 pedPivot; mat3 pedBody;
void pedPose() {
  float swing = sin(aWalk.x) * aWalk.y;
  float ang = 0.0;
  pedPivot = vec3(0.0, 0.9, 0.0);
  if (aPart > 0.5 && aPart < 2.5) ang = aPart < 1.5 ? swing * 0.65 : -swing * 0.65;
  else if (aPart > 2.5) { ang = aPart < 3.5 ? -swing * 0.55 : swing * 0.55; pedPivot = vec3(0.0, 1.58, 0.0); }
  pedLimb = pedRotX(ang);
  pedBody = pedRotX(-aWalk.w) * pedRotX(-aWalk.z);
}
vec3 pedTransform(vec3 p) {
  p = pedLimb * (p - pedPivot) + pedPivot;
  p.y += abs(sin(aWalk.x)) * 0.035 * aWalk.y;
  return pedBody * p;
}`;function C1(){let s=new Ht({color:16777215,roughness:.82});s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${ap}
attribute vec3 aShirt; attribute vec3 aPants; attribute vec4 aSkin; varying vec3 vPedCol;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
pedPose();
objectNormal = pedBody * (pedLimb * objectNormal);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed = pedTransform(transformed);
        vec3 hair = mix(vec3(0.05, 0.035, 0.02), vec3(0.55, 0.42, 0.22), aSkin.w);
        vPedCol = aRegion < 0.5 ? aSkin.rgb : aRegion < 1.5 ? aShirt : aRegion < 2.5 ? aPants : aRegion < 3.5 ? vec3(0.06) : hair;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPedCol;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = vPedCol;`)},s.customProgramCacheKey=()=>"pedestrian";let t=new Lr({depthPacking:nc});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${ap}`).replace("#include <begin_vertex>",`#include <begin_vertex>
pedPose();
transformed = pedTransform(transformed);`)},t.customProgramCacheKey=()=>"pedestrian-depth",{mat:s,depth:t}}function Iu(s,t,e,n){let i=(e%ar+ar)%ar,r=Math.floor(i/jr),o=i-r*jr;return r===0?(n.x=s-Ln+o,n.z=t-Ln,n.dx=1,n.dz=0):r===1?(n.x=s+Ln,n.z=t-Ln+o,n.dx=0,n.dz=1):r===2?(n.x=s+Ln-o,n.z=t+Ln,n.dx=-1,n.dz=0):(n.x=s-Ln,n.z=t+Ln-o,n.dx=0,n.dz=-1),n}var Uc=s=>s*jr,cp=[[-1,-1],[1,-1],[1,1],[-1,1]];function lp(s,t){return cp.findIndex(([e,n])=>e===s&&n===t)}var Nc=class{constructor(t){let{mat:e,depth:n}=C1(),i=R1();this.aWalk=new He(new Float32Array(or*4),4).setUsage(ni);let r=new Float32Array(or*3),o=new Float32Array(or*3),a=new Float32Array(or*4),c=new Lt;for(let h=0;h<or;h++)r.set(c.set(re(T1)).toArray(),h*3),o.set(c.set(re(A1)).toArray(),h*3),a.set([...c.set(re(w1)).toArray(),dt()<.2?1:dt()*.4],h*4);i.setAttribute("aWalk",this.aWalk),i.setAttribute("aShirt",new He(r,3)),i.setAttribute("aPants",new He(o,3)),i.setAttribute("aSkin",new He(a,4)),this.mesh=new pe(i,e,or),this.mesh.customDepthMaterial=n,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(ni),this.mesh.name="pedestrians",t.add(this.mesh),this.peds=[],this.events=[],this.onRoad=[],this.tmp={x:0,z:0,dx:0,dz:0},this.m=new Ot,this.q=new de,this.e=new Qe(0,0,0,"YXZ");for(let h=0;h<or;h++){let l={i:h,scale:mt(.9,1.08)};this.place(l,an.x,an.z,!0),this.peds.push(l)}}place(t,e,n,i=!1){let r=[],o=tr(e),a=$o(n),c=i?330:300;for(let f=o-320;f<=o+320;f+=160)for(let d=a-320;d<=a+320;d+=160){if(!qr.includes(f)||!us.includes(d)||Math.hypot(f-e,d-n)>=c)continue;let u=1+Math.round(Wi[pi(f,d)][2]*3);for(let g=0;g<u;g++)r.push([f,d])}let[h,l]=r.length?re(r):[o,a];Object.assign(t,{cx:h,cz:l,t:dt()*ar,dir:Me(.5)?1:-1,speed:mt(1.05,1.55),lateral:mt(-.9,.9),state:Me(.12)?"idle":"walk",timer:mt(3,9),phase:dt()*6,amp:0,fall:0,lean:0,vx:0,vz:0,cross:null,x:0,z:0,heading:0}),this.pathPoint(t),t.x=t.px,t.z=t.pz}pathPoint(t){let e=Iu(t.cx,t.cz,t.t,this.tmp),n=e.dz,i=-e.dx;t.px=e.x+n*t.lateral,t.pz=e.z+i*t.lateral,t.pdx=e.dx*t.dir,t.pdz=e.dz*t.dir}tryCross(t,e,n){let[i,r]=cp[e],o=[],a=t.cx+i*160,c=t.cz+r*160;if(qr.includes(a)&&o.push({axis:0,tx:a,tz:t.cz,corner:lp(-i,r)}),us.includes(c)&&o.push({axis:1,tx:t.cx,tz:c,corner:lp(i,-r)}),!o.length||!Me(.45))return!1;let h=re(o),l=Iu(t.cx,t.cz,Uc(e),{}),f=Iu(h.tx,h.tz,Uc(h.corner),{});return t.cross={...h,ax:l.x,az:l.z,bx:f.x,bz:f.z,f:0,len:Math.hypot(f.x-l.x,f.z-l.z)},t.state="wait",t.timer=25,!0}update(t,e,n){let i=-Math.sin(n.heading),r=-Math.cos(n.heading),o=Math.cos(n.heading),a=-Math.sin(n.heading),c=Math.abs(n.speed);this.onRoad.length=0,this.events.length=0;let h=this.aWalk.array;for(let l of this.peds){Math.hypot(l.x-n.x,l.z-n.z)>330&&(l.state==="walk"||l.state==="idle")&&this.place(l,n.x,n.z);let f=0,d=l.x-n.x,u=l.z-n.z,g=d*i+u*r,v=d*o+u*a;if(c>4&&g>-1&&g<c*1.25+5&&Math.abs(v)<2.6&&Math.abs(n.y-Qt)<2.5&&l.state!=="down"&&l.state!=="getup"&&l.state!=="dodge"){let y=Math.abs(v)>.2?Math.sign(v):Me(.5)?1:-1;l.vx=o*y*5.2+i*.6,l.vz=a*y*5.2+r*.6,l.state="dodge",l.timer=.55,l.resume=l.cross?"cross":"return"}let p=Math.hypot(l.x-(n.x+i*1.3*Math.sign(g||1)),l.z-(n.z+r*1.3*Math.sign(g||1)));if(l.state!=="down"&&l.state!=="getup"&&Math.hypot(d,u)<3&&p<1.4)if(c>5)l.state="down",l.timer=2.6,l.vx=n.vx*.35+o*Math.sign(v||1)*1.5,l.vz=n.vz*.35+a*Math.sign(v||1)*1.5,l.heading=Math.atan2(-l.vx,-l.vz)+Math.PI,this.events.push({type:"hit",x:l.x,z:l.z,speed:c});else{let y=Math.max(p,.01);l.x+=(l.x-n.x)/Math.hypot(d,u)*(1.4-y)*.5,l.z+=(l.z-n.z)/Math.hypot(d,u)*(1.4-y)*.5}switch(l.state){case"idle":{l.timer-=t,l.timer<=0&&(l.state="walk",l.timer=mt(6,20));break}case"walk":{f=l.speed;let y=l.t;l.t+=l.dir*l.speed*t;let w=Math.floor(y/jr),A=Math.floor(l.t/jr);if(w!==A){let P=((l.dir>0?A:w)%4+4)%4;this.tryCross(l,P,e)&&(l.t=Uc(P))}l.t=(l.t%ar+ar)%ar,l.timer-=t,l.timer<=0&&!l.cross&&(Me(.25)?(l.state="idle",l.timer=mt(2,6)):(l.timer=mt(5,20),Me(.2)&&(l.dir*=-1))),this.pathPoint(l),l.x+=(l.px-l.x)*Math.min(1,t*6),l.z+=(l.pz-l.z)*Math.min(1,t*6),l.heading=Math.atan2(-l.pdx,-l.pdz);break}case"wait":{l.timer-=t;let y=l.cross;l.x+=(y.ax-l.x)*Math.min(1,t*3),l.z+=(y.az-l.z)*Math.min(1,t*3),l.heading=Math.atan2(-(y.bx-y.ax),-(y.bz-y.az));let w=xs(y.axis,e),A=(e%28+28)%28,P=y.axis===0?A:(A+14)%28;w===0&&P>=13&&P<17?l.state="cross":l.timer<=0&&(l.cross=null,l.state="walk");break}case"cross":{let y=l.cross;f=1.85,y.f=Math.min(1,y.f+f*t/y.len);let w=y.ax+(y.bx-y.ax)*y.f,A=y.az+(y.bz-y.az)*y.f;l.x+=(w-l.x)*Math.min(1,t*8),l.z+=(A-l.z)*Math.min(1,t*8),l.heading=Math.atan2(-(y.bx-y.ax),-(y.bz-y.az)),this.onRoad.push(l),y.f>=1&&(l.cx=y.tx,l.cz=y.tz,l.t=Uc(y.corner),l.cross=null,l.state="walk",l.dir=Me(.5)?1:-1);break}case"dodge":{f=5,l.x+=l.vx*t,l.z+=l.vz*t,l.vx*=Math.exp(-2.5*t),l.vz*=Math.exp(-2.5*t),l.heading=Math.atan2(-l.vx,-l.vz),l.timer-=t,l.timer<=0&&(l.state=l.resume==="cross"&&l.cross?"cross":"return");break}case"down":{l.x+=l.vx*t,l.z+=l.vz*t;let y=Math.exp(-3.5*t);l.vx*=y,l.vz*=y,l.fall=Math.min(1.5,l.fall+t*6),l.timer-=t,l.timer<=0&&(l.state="getup",l.timer=.9);break}case"getup":{l.fall=Math.max(0,l.fall-t*1.9),l.timer-=t,l.timer<=0&&(l.fall=0,l.state=l.cross?"cross":"return");break}case"return":{this.pathPoint(l);let y=l.px-l.x,w=l.pz-l.z,A=Math.hypot(y,w);if(f=2.2,A<.25){l.state="walk";break}l.x+=y/A*Math.min(A,f*t),l.z+=w/A*Math.min(A,f*t),l.heading=Math.atan2(-y,-w),Math.abs(l.x-l.cx)<Ln+1&&Math.abs(l.z-l.cz)<Ln+1;break}}(l.state==="dodge"||l.state==="return")&&(Math.abs(l.x-l.cx)>Ln+3||Math.abs(l.z-l.cz)>Ln+3)&&this.onRoad.push(l);let _=l.state==="down"||l.state==="getup"?0:f;l.amp+=((_>.1?Math.min(.45+_*.12,1.05):0)-l.amp)*Math.min(1,t*6),l.phase+=t*(_>.1?3.2+_*1.6:0),l.lean+=((_>3?.18:.02)-l.lean)*Math.min(1,t*5),h[l.i*4]=l.phase,h[l.i*4+1]=l.amp,h[l.i*4+2]=l.lean,h[l.i*4+3]=l.fall;let b=l.state==="cross"||l.state==="down"||l.state==="dodge"||l.state==="getup"?Math.abs(l.x-l.cx)<Ln+4.5&&Math.abs(l.z-l.cz)<Ln+4.5?Qt:.02:Qt;this.q.setFromEuler(this.e.set(0,l.heading,0)),this.m.compose(new U(l.x,b,l.z),this.q,new U(l.scale,l.scale,l.scale)),this.mesh.setMatrixAt(l.i,this.m)}this.mesh.instanceMatrix.needsUpdate=!0,this.aWalk.needsUpdate=!0}};var P1=`
attribute vec3 aPos;
attribute vec4 aData; // size, alpha, rotation, age (0..1)
attribute vec3 aColor;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vUv = uv;
  vAlpha = aData.y;
  vAge = aData.w;
  vColor = aColor;
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  float c = cos(aData.z), s = sin(aData.z);
  vec2 p = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * aData.x;
  vec3 world = aPos + right * p.x + up * p.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}`,I1=`
uniform sampler2D map;
uniform vec3 light;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  float a = t.a * vAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor * light * (0.75 + t.r * 0.35), a);
}`,D1=`
uniform sampler2D map;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor * t.a * vAlpha, 1.0);
}`,lr=class{constructor(t,e,{texture:n,additive:i=!1,drag:r=1.5,gravity:o=0,grow:a=1.5}){this.max=e,this.drag=r,this.gravity=o,this.grow=a,this.count=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.rot=new Float32Array(e),this.spin=new Float32Array(e),this.col=new Float32Array(e*3);let c=new Lo,h=new Ue(1,1);c.index=h.index,c.setAttribute("position",h.attributes.position),c.setAttribute("uv",h.attributes.uv),this.aPos=new He(new Float32Array(e*3),3).setUsage(ni),this.aData=new He(new Float32Array(e*4),4).setUsage(ni),this.aColor=new He(new Float32Array(e*3),3).setUsage(ni),c.setAttribute("aPos",this.aPos),c.setAttribute("aData",this.aData),c.setAttribute("aColor",this.aColor),c.instanceCount=0,this.uniforms={map:{value:n},light:{value:new Lt(1,1,1)}};let l=new Se({uniforms:this.uniforms,vertexShader:P1,fragmentShader:i?D1:I1,transparent:!0,depthWrite:!1,blending:i?Nn:Bi});this.mesh=new zt(c,l),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i?6:5,this.mesh.userData.noAO=!0,this.mesh.layers.set(1),this.geo=c,t.add(this.mesh)}emit(t,e,n,i,r,o,a,c,h,l=1,f=1,d=1){let u=this.count;if(u>=this.max){let g=0;for(let v=1;v<this.max;v++)this.life[v]<this.life[g]&&(g=v);u=g}else this.count++;this.p.set([t,e,n],u*3),this.v.set([i,r,o],u*3),this.col.set([l,f,d],u*3),this.life[u]=this.maxLife[u]=c,this.size[u]=a,this.alpha[u]=h,this.rot[u]=dt()*Math.PI*2,this.spin[u]=(dt()-.5)*1.2}update(t){let e=Math.exp(-this.drag*t),n=0;for(let i=0;i<this.count;i++){if(this.life[i]-=t,this.life[i]<=0)continue;if(n!==i){for(let[c,h]of[[this.p,3],[this.v,3],[this.col,3]])c.copyWithin(n*h,i*h,i*h+h);this.life[n]=this.life[i],this.maxLife[n]=this.maxLife[i],this.size[n]=this.size[i],this.alpha[n]=this.alpha[i],this.rot[n]=this.rot[i],this.spin[n]=this.spin[i]}let r=n*3;this.v[r]*=e,this.v[r+1]=this.v[r+1]*e+this.gravity*t,this.v[r+2]*=e,this.p[r]+=this.v[r]*t,this.p[r+1]+=this.v[r+1]*t,this.p[r+2]+=this.v[r+2]*t,this.rot[n]+=this.spin[n]*t;let o=1-this.life[n]/this.maxLife[n],a=Math.min(o*6,1)*(1-o)*(1-o);this.aPos.array.set([this.p[r],this.p[r+1],this.p[r+2]],r),this.aData.array.set([this.size[n]*(1+o*this.grow),this.alpha[n]*a,this.rot[n],o],n*4),this.aColor.array.set([this.col[r],this.col[r+1],this.col[r+2]],r),n++}this.count=n,this.geo.instanceCount=n,this.aPos.needsUpdate=this.aData.needsUpdate=this.aColor.needsUpdate=!0}};function hp(s,t){let e=We(t,128,128,(i,r,o)=>{let a=i.createImageData(r,o);for(let c=0;c<o;c++)for(let h=0;h<r;h++){let l=(h-r/2)/(r/2),f=(c-o/2)/(o/2),d=Math.sqrt(l*l+f*f),u=.65+.35*Math.sin(h*.31+Math.sin(c*.23)*3)*Math.sin(c*.27+Math.cos(h*.19)*2),g=Math.max(0,1-d)**1.6*u,v=(c*r+h)*4;a.data[v]=a.data[v+1]=a.data[v+2]=200+u*55,a.data[v+3]=Math.min(255,g*255)}i.putImageData(a,0,0)},{srgb:!1}),n=We(t,64,64,(i,r,o)=>{let a=i.createRadialGradient(r/2,o/2,0,r/2,o/2,r/2);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,255,255,0.6)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,r,o)},{srgb:!1});return{smoke:new lr(s,420,{texture:e,drag:1.1,gravity:.35,grow:2.6}),dust:new lr(s,200,{texture:e,drag:1.6,gravity:-.2,grow:2}),sparks:new lr(s,160,{texture:n,additive:!0,drag:.6,gravity:-9.8,grow:-.6}),flames:new lr(s,160,{texture:n,additive:!0,drag:3,gravity:.5,grow:-.4}),water:new lr(s,360,{texture:e,drag:.35,gravity:-9.8,grow:1.6})}}var Fc=class{constructor(t,e=900){this.max=e,this.index=0;let n=new Ue(1,1);n.rotateX(-Math.PI/2),this.mat=new Ht({color:328965,transparent:!0,opacity:.55,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),this.mesh=new pe(n,this.mat,e),this.mesh.instanceMatrix.setUsage(ni),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.renderOrder=1,this.mesh.userData.noAO=!0;let i=new Ot().makeScale(0,0,0);for(let r=0;r<e;r++)this.mesh.setMatrixAt(r,i);this.last=new Map,t.add(this.mesh),this.m=new Ot,this.q=new de,this.v=new U,this.s=new U,this.up=new U(0,1,0)}add(t,e,n,i,r,o=.26){let a=this.last.get(t);if(!r){this.last.delete(t);return}if(a){let c=e-a[0],h=i-a[2],l=Math.hypot(c,h);if(l<.35)return;l<4&&(this.q.setFromAxisAngle(this.up,Math.atan2(c,h)),this.m.compose(this.v.set((e+a[0])/2,n+.03,(i+a[2])/2),this.q,this.s.set(o,1,l+.05)),this.mesh.setMatrixAt(this.index,this.m),this.index=(this.index+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0)}this.last.set(t,[e,n,i])}};var la=Ee.damp,Du=["CHASE CAMERA","FAR CHASE CAMERA","HOOD CAMERA","CINEMATIC CAMERA"],zc=class{constructor(t){this.camera=t,this.mode=0,this.pos=new U,this.look=new U,this.desired=new U,this.target=new U,this.yaw=0,this.shake=0,this.cine=null,this.cineTimer=0,this.baseFov=55,this.rumble=0,this.clock=0}snap(t){this.yaw=t.heading,this.cine=null,this.compute(t,0),this.pos.copy(this.desired),this.look.copy(this.target),this.apply(0)}compute(t,e){let n=Math.min(Math.abs(t.speed)/55,1),i=Math.hypot(t.vx,t.vz)>4?Math.atan2(-t.vx,-t.vz):t.heading,r=t.heading+up(i-t.heading)*.35;t.speed<-1&&(r=t.heading),this.yaw=e?this.yaw+up(r-this.yaw)*(1-Math.exp(-4.5*e)):r;let o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=t.group.position;if(this.mode===2){let h=Math.sin(t.heading),l=Math.cos(t.heading);this.desired.set(c.x-h*.15,c.y+1.18,c.z-l*.15),this.target.set(c.x-h*30,c.y+.9,c.z-l*30)}else if(this.mode===3)this.cinematic(t,e);else{let h=this.mode===1,l=(h?11.5:7.4)+n*1.6,f=(h?4.6:2.45)+n*.25;this.desired.set(c.x+o*l,c.y+f,c.z+a*l),this.target.set(c.x-o*6,c.y+1.15,c.z-a*6)}}cinematic(t,e){let n=t.group.position;this.cineTimer-=e;let i=-Math.sin(t.heading),r=-Math.cos(t.heading);if(!this.cine||this.cine.distanceTo(n)>70||this.cineTimer<=0){let a=Math.random()<.5?-1:1,c=28+Math.abs(t.speed)*1.6;this.cine=new U(n.x+i*c+r*a*7,n.y+.7+Math.random()*2.5,n.z+r*c-i*a*7),this.cineTimer=7,this.pos.copy(this.cine)}this.desired.copy(this.cine),this.target.set(n.x,n.y+.8,n.z)}apply(t){let e=this.camera;if(e.position.copy(this.pos),this.shake>.001){let n=this.shake;e.position.x+=(Math.random()-.5)*n,e.position.y+=(Math.random()-.5)*n,e.position.z+=(Math.random()-.5)*n,this.shake=la(this.shake,0,6,t||.016)}if(this.rumble>5e-4){let n=this.clock,i=this.rumble;e.position.y+=(Math.sin(n*37)*.6+Math.sin(n*61.3)*.4)*i,e.position.x+=(Math.sin(n*29.1+1.3)*.5+Math.sin(n*53.7)*.3)*i*.6}e.lookAt(this.look)}update(t,e){this.compute(t,e),this.mode===2?(this.pos.copy(this.desired),this.look.copy(this.target)):this.mode===3?(this.pos.lerp(this.desired,1-Math.exp(-3*e)),this.look.lerp(this.target,1-Math.exp(-10*e))):(this.pos.x=la(this.pos.x,this.desired.x,9,e),this.pos.z=la(this.pos.z,this.desired.z,9,e),this.pos.y=la(this.pos.y,this.desired.y,6,e),this.look.lerp(this.target,1-Math.exp(-12*e)));let n=Math.min(Math.abs(t.speed)/60,1)*12,i=(this.mode===2?68:this.mode===3?40:this.baseFov)+(this.mode===3?0:n+(t.boosting?7:0));this.camera.fov=la(this.camera.fov,i,3,e),this.camera.updateProjectionMatrix(),this.clock+=e;let r=Ee.clamp((Math.abs(t.speed)-26)/40,0,1),o=t.surface==="road"?1:2.2;this.rumble=this.mode===3?0:(r*.02+(t.boosting?.014:0))*o*(this.mode===2?.6:1),t.boosting&&(this.shake=Math.max(this.shake,.02)),this.apply(e)}orbit(t,e){let n=t.group.position,i=2.25+Math.sin(e*.05)*.5;this.camera.position.set(n.x+Math.sin(i)*9.5,n.y+1.6+Math.sin(e*.11)*.25,n.z+Math.cos(i)*9.5),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.camera.lookAt(n.x-1.5,n.y+1.1,n.z-2)}};function up(s){return Math.atan2(Math.sin(s),Math.cos(s))}var si=[];for(let s=0;s<me.length;s++)for(let t=0;t<ge.length;t++)si.push({x:me[s],z:ge[t],i:s,j:t});var ca=(s,t)=>s>=0&&t>=0&&s<me.length&&t<ge.length?s*ge.length+t:-1;function fp(s,t){let e=null;return me.forEach((n,i)=>{let r=Math.min(Math.max(t,ge[0]),ge[ge.length-1]),o=Math.hypot(s-n,t-r);if(!e||o<e.d){let a=ge.findIndex(h=>h>=r);a<0&&(a=ge.length-1);let c=ge[a]===r?a:Math.max(0,a-1);e={d:o,x:n,z:r,ends:[ca(i,c),ca(i,a)]}}}),ge.forEach((n,i)=>{let r=Math.min(Math.max(s,me[0]),me[me.length-1]),o=Math.hypot(s-r,t-n);if(o<e.d){let a=me.findIndex(h=>h>=r);a<0&&(a=me.length-1);let c=me[a]===r?a:Math.max(0,a-1);e={d:o,x:r,z:n,ends:[ca(c,i),ca(a,i)]}}}),e}function Lu(s,t,e,n){let i=fp(s,t),r=fp(e,n),o=si.length,a=o,c=o+1,h=m=>m===a?i:m===c?r:si[m],l=m=>{if(m===a)return i.ends.map(_=>[_,Math.hypot(si[_].x-i.x,si[_].z-i.z)]);let p=[];if(m<o){let{i:_,j:b}=si[m];for(let[y,w]of[[1,0],[-1,0],[0,1],[0,-1]]){let A=ca(_+y,b+w);A>=0&&p.push([A,Math.hypot(si[A].x-si[m].x,si[A].z-si[m].z)])}r.ends.includes(m)&&p.push([c,Math.hypot(r.x-si[m].x,r.z-si[m].z)])}return p};if(i.ends[0]===r.ends[0]&&i.ends[1]===r.ends[1])return[[s,t],[i.x,i.z],[r.x,r.z],[e,n]];let d=new Float64Array(o+2).fill(1/0),u=new Int32Array(o+2).fill(-1),g=new Uint8Array(o+2);for(d[a]=0;;){let m=-1,p=1/0;for(let _=0;_<o+2;_++)!g[_]&&d[_]<p&&(m=_,p=d[_]);if(m<0||m===c)break;g[m]=1;for(let[_,b]of l(m)){let y=p+b;y<d[_]&&(d[_]=y,u[_]=m)}}let v=[];for(let m=c;m>=0;m=u[m]){let p=h(m);if(v.unshift([p.x,p.z]),m===a)break}return v.unshift([s,t]),v.push([e,n]),v}function dp(s){let t=0;for(let e=1;e<s.length;e++)t+=Math.hypot(s[e][0]-s[e-1][0],s[e][1]-s[e-1][1]);return t}var Uu=s=>document.getElementById(s),ue={x0:-760,x1:we+140,z0:ce.minZ-90,z1:ce.maxZ+90},Oc=.6;function L1(s){let t=document.createElement("canvas");t.width=Math.round((ue.x1-ue.x0)*Oc),t.height=Math.round((ue.z1-ue.z0)*Oc);let e=t.getContext("2d");e.scale(Oc,Oc),e.translate(-ue.x0,-ue.z0);let n=ue.x1-ue.x0,i=ue.z1-ue.z0;e.fillStyle="#16343f",e.fillRect(ue.x0,ue.z0,n,i),e.fillStyle="#243229",e.fillRect(An,ue.z0,ue.x1-An,i),e.fillStyle="#1e2a2e",e.fillRect(An,ce.minZ,ce.maxX-An,ce.maxZ-ce.minZ),e.fillStyle="#6d6047",e.fillRect(An,ue.z0,on-An,i),e.fillStyle="#2d4433",e.fillRect(on,ue.z0,je.to-on,i);for(let[r,o,a]of Ci())e.fillStyle="#29353a",e.fillRect(r-ii/2,o-ii/2,ii,ii),a.kind==="park"&&(e.fillStyle="#2f4a35",e.fillRect(r-55,o-55,110,110)),a.kind==="parking"&&(e.fillStyle="#323b40",e.fillRect(r-45,o-45,104,104));e.fillStyle="#3e4f56";for(let r of s)e.fillRect(r.x-r.w,r.z-r.d,r.w*2,r.d*2);e.fillStyle="#5b6b6e";for(let r of me)e.fillRect(r-ne,_e-ne,ne*2,Re-_e+ne*2);for(let r of ge)e.fillRect(ze-ne,r-ne,we-ze+ne*2,ne*2);e.fillStyle="#7d6a52";for(let r of Rn)e.fillRect(r.x1,r.z-r.halfWidth,r.rampStart-r.x1,r.halfWidth*2);return t}function U1(){let s={};for(let[e,n]of Ci()){let i=pi(e,n),r=s[i]||(s[i]=[0,0,0]);r[0]+=e,r[1]+=n,r[2]++}let t=Object.entries(s).map(([e,[n,i,r]])=>[Wi[e][0],n/r,i/r]);return t.push([Wi.ocean[0],-385,0]),t}var Bc=class{constructor(t){this.canvas=Uu("minimap"),this.ctx=this.canvas.getContext("2d"),this.mapImage=L1(t),this.expanded=!1,this.labels=U1(),this.view={zoom:1,x:(ue.x0+ue.x1)/2,z:(ue.z0+ue.z1)/2},this.raceKey="",this.route=null,this.routeKey="",this.routeAt=[0,0],this.raceRoute=null,this.els={};for(let e of["speed","gear","tach-fill","boost-fill","district","road-name","heading","race-time","checkpoint-distance","clock","rpm-readout"])this.els[e]=Uu(e);this.last={}}set(t,e){this.last[t]!==e&&(this.last[t]=e,this.els[t]&&(this.els[t].textContent=e))}updateRoute(t,e){let n=null;if(e.mode==="race"&&e.checkpoint<e.route.length?n=e.route[e.checkpoint]:e.waypoint&&(n=e.waypoint),!n){this.route=null,this.routeKey="";return}let i=n.join(",")+(e.mode==="race"?":"+e.checkpoint:""),r=Math.hypot(t.x-this.routeAt[0],t.z-this.routeAt[1]);if(i!==this.routeKey||r>12){this.route=Lu(t.x,t.z,n[0],n[1]),this.routeKey=i,this.routeAt=[t.x,t.z];let o=e.mode==="race"?`${e.raceId}:${e.checkpoint}`:"";if(o!==this.raceKey&&(this.raceKey=o,this.raceRoute=null,o)){this.raceRoute=[];for(let a=e.checkpoint;a<e.route.length-1;a++)this.raceRoute.push(Lu(...e.route[a],...e.route[a+1]))}}}get routeDistance(){return this.route?dp(this.route):0}setWanted(t,e){let n=t+(e?"e":"");if(this.last.wanted===n)return;this.last.wanted=n;let i=Uu("wanted");i.classList.toggle("hidden",t===0),i.classList.toggle("evading",e),i.querySelectorAll("i").forEach((r,o)=>r.classList.toggle("on",o<t))}update(t,e,n,i,r){let o=Math.round(t.kmh);this.set("speed",String(o).padStart(3,"0")),this.set("gear",t.gear<0?"R":o<1&&!t.throttle?"N":String(t.gear));let a=t.def?.redline??7400;this.els["tach-fill"].style.width=Math.min(100,t.rpm/a*100).toFixed(1)+"%",this.els["tach-fill"].classList.toggle("redline",t.rpm>a-800),this.els["boost-fill"].style.width=t.nitro.toFixed(1)+"%",this.els["boost-fill"].classList.toggle("active",t.boosting),this.set("rpm-readout",(t.rpm/1e3).toFixed(1));let[c]=_c(t.x,t.z);this.set("district",c),this.set("road-name",Ed(t.x,t.z));let h=["N","NW","W","SW","S","SE","E","NE"];this.set("heading",h[(Math.round(t.heading/(Math.PI/4))%8+8)%8]),this.set("clock",i.clockLabel),this.updateRoute(t,e),e.mode==="race"&&(this.set("race-time",ha(e.raceTime)),e.route[e.checkpoint]&&this.set("checkpoint-distance",Math.round(this.routeDistance)+" M")),r&&this.setWanted(r.level,r.evading),this.drawMap(t,e,n,r)}mapScale(){return Math.min(this.canvas.width/(ue.x1-ue.x0),this.canvas.height/(ue.z1-ue.z0))*this.view.zoom}mapPoint(t,e){let n=this.canvas.getBoundingClientRect(),i=(t-n.left)/n.width*this.canvas.width,r=(e-n.top)/n.height*this.canvas.height,o=this.mapScale();return[(i-this.canvas.width/2)/o+this.view.x,(r-this.canvas.height/2)/o+this.view.z]}clampView(){let t=this.view;t.zoom=Math.min(Math.max(t.zoom,1),8);let e=(ue.x1-ue.x0)/2*(1-1/t.zoom),n=(ue.z1-ue.z0)/2*(1-1/t.zoom);t.x=Math.min(Math.max(t.x,(ue.x0+ue.x1)/2-e),(ue.x0+ue.x1)/2+e),t.z=Math.min(Math.max(t.z,(ue.z0+ue.z1)/2-n),(ue.z0+ue.z1)/2+n)}zoomAt(t,e,n){if(!this.expanded)return;let i=this.canvas.getBoundingClientRect(),[r,o]=this.mapPoint(e??i.left+i.width/2,n??i.top+i.height/2),a=this.view.zoom;this.view.zoom=Math.min(Math.max(a*t,1),8);let c=a/this.view.zoom;this.view.x=r+(this.view.x-r)*c,this.view.z=o+(this.view.z-o)*c,this.clampView()}panBy(t,e){if(!this.expanded)return;let n=this.canvas.getBoundingClientRect(),i=this.mapScale()*(n.width/this.canvas.width);this.view.x-=t/i,this.view.z-=e/i,this.clampView()}pick(t,e,n){if(!this.expanded)return;let[i,r]=this.mapPoint(t,e);n.waypoint&&Math.hypot(n.waypoint[0]-i,n.waypoint[1]-r)<40/this.view.zoom+12?n.waypoint=null:n.waypoint=[Math.min(Math.max(i,ze),we),Math.min(Math.max(r,_e),Re)],this.routeKey=""}polyline(t,e){t.beginPath(),e.forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke()}drawMap(t,e,n,i){let{canvas:r,ctx:o}=this;if(this.expanded){let d=r.getBoundingClientRect(),u=Math.min(devicePixelRatio||1,2),g=Math.round(d.width*u),v=Math.round(d.height*u);g>0&&v>0&&(r.width!==g||r.height!==v)&&(r.width=g,r.height=v)}let a=r.width,c=r.height;if(o.setTransform(1,0,0,1,0,0),o.fillStyle="#16343f",o.fillRect(0,0,a,c),o.save(),this.expanded){let d=this.mapScale();o.translate(a/2,c/2),o.scale(d,d),o.translate(-this.view.x,-this.view.z)}else o.translate(a/2,c*.62),o.scale(.85,.85),o.rotate(t.heading),o.translate(-t.x,-t.z);o.imageSmoothingQuality="high",o.drawImage(this.mapImage,ue.x0,ue.z0,ue.x1-ue.x0,ue.z1-ue.z0);let h=this.expanded?3.4/Math.sqrt(this.view.zoom):1;if(this.expanded){o.fillStyle="#fff4dc66",o.font=`700 ${Math.round(46/Math.sqrt(this.view.zoom))}px "Barlow Condensed", Barlow, Arial`,o.textAlign="center",o.textBaseline="middle";for(let[d,u,g]of this.labels)d==="OCEAN DRIVE"?(o.save(),o.translate(u,g),o.rotate(-Math.PI/2),o.fillText(d,0,0),o.restore()):o.fillText(d,u,g)}if(o.lineJoin=o.lineCap="round",this.raceRoute){o.strokeStyle="#ffc68650",o.lineWidth=5*h;for(let d of this.raceRoute)this.polyline(o,d)}if(this.route){let d=e.mode==="race"?"#ffb46b":"#c690ff";o.strokeStyle="#0b141acc",o.lineWidth=11*h,this.polyline(o,this.route),o.strokeStyle=d,o.lineWidth=7*h,this.polyline(o,this.route)}o.fillStyle="#c9d3d6";for(let d of n.cars)d.police||o.fillRect(d.x-2.5*h,d.z-2.5*h,5*h,5*h);let l=Math.floor(performance.now()/180)%2;for(let d of n.police){let u=d.mode==="chase";u&&i&&(o.fillStyle=i.evading?"#3a6cff14":"#ff3a4a12",o.beginPath(),o.arc(d.x,d.z,i.sightRange(),0,Math.PI*2),o.fill()),o.fillStyle=u?l?"#ff4458":"#4a7dff":"#5f8dff",o.beginPath(),o.arc(d.x,d.z,(u?6:4)*h,0,Math.PI*2),o.fill()}if(e.mode==="race"&&e.checkpoint<e.route.length&&e.route.forEach(([d,u],g)=>{g<e.checkpoint||(o.beginPath(),o.arc(d,u,(g===e.checkpoint?11:6)*h,0,Math.PI*2),o.fillStyle=g===e.checkpoint?"#ffc686":"#ffc68677",o.fill(),this.expanded&&(o.fillStyle="#17212a",o.font=`700 ${Math.round(9*h)}px Barlow, Arial`,o.textAlign="center",o.textBaseline="middle",o.fillText(String(g+1),d,u+1)))}),e.waypoint&&e.mode!=="race"){let[d,u]=e.waypoint;o.fillStyle="#c690ff",o.beginPath(),o.arc(d,u-14*h,9*h,Math.PI,0),o.lineTo(d,u),o.closePath(),o.fill(),o.fillStyle="#ffffff",o.beginPath(),o.arc(d,u-14*h,3.5*h,0,Math.PI*2),o.fill()}o.translate(t.x,t.z),o.rotate(-t.heading);let f=this.expanded?1.5*h:1;if(o.shadowColor="#000",o.shadowBlur=8,o.fillStyle="#ff8a52",o.beginPath(),o.moveTo(0,-13*f),o.lineTo(8*f,9*f),o.lineTo(0,4*f),o.lineTo(-8*f,9*f),o.closePath(),o.fill(),o.restore(),this.expanded&&(o.fillStyle="#fff4dccc",o.font="600 20px Barlow, Arial",o.textAlign="left",o.textBaseline="top",o.fillText(e.mode==="race"?`${e.raceName} \xB7 FOLLOW THE ORANGE LINE`:"CLICK TO SET A WAYPOINT \xB7 SCROLL OR PINCH TO ZOOM \xB7 DRAG TO MOVE",24,22),o.fillStyle="#5f8dff",o.fillRect(24,c-44,14,14),o.fillStyle="#c9d3d6",o.fillRect(170,c-44,14,14),o.fillStyle="#fff4dccc",o.fillText("POLICE",46,c-46),o.fillText("TRAFFIC",192,c-46)),!this.expanded){let d=t.heading,u=a/2+Math.sin(-d)*-(c*.42),g=c*.62-Math.cos(d)*(c*.42);o.fillStyle="#fff4dc",o.font="600 22px Barlow, Arial",o.textAlign="center",o.textBaseline="middle",o.fillText("N",Math.min(a-16,Math.max(16,u)),Math.min(c-16,Math.max(16,g)))}}setExpanded(t,e=null){this.expanded=t,this.view.zoom=1,e&&(this.view.x=e.x,this.view.z=e.z),this.clampView(),this.canvas.width=t?1100:480,this.canvas.height=t?1100:360}};function ha(s){let t=Math.floor(s/60),e=Math.floor(s%60),n=Math.floor(s*100%100);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`}var Nu={v8:{pulses:4,lump:.32,tone:1,intake:.5,sub:.6,rasp:.35,redline:7400},bigblock:{pulses:4,lump:.55,tone:.72,intake:.35,sub:.9,rasp:.5,redline:6400},v10:{pulses:5,lump:.14,tone:1.45,intake:.85,sub:.35,rasp:.25,redline:8800}},Pi=[{id:"wave",name:"PACIFIC WAVE 101.4",genre:"Synthwave",bpm:100,swing:0,chords:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]},{id:"tide",name:"LOW TIDE 94.7",genre:"Lo-fi beats",bpm:82,swing:.16,chords:[[50,53,57,60,64],[55,59,62,65,69],[48,52,55,59,62],[57,61,64,67,70]]},{id:"funk",name:"KZRO 88.1 COAST FUNK",genre:"Funk",bpm:112,swing:.08,chords:[[52,55,59,62],[52,55,59,62],[57,61,64,67],[55,59,62,65]]}],Yi=s=>440*Math.pow(2,(s-69)/12),kc=class{constructor(){this.ctx=null,this.enabled=!1,this.engineDef=Nu.v8,this.station=-1,this.wasBoosting=!1,this.scrapeLevel=0,this.nextAmbient={horn:6,bird:2,gull:4,cricket:1,siren:30},this.sirenLevel=0}unlock(){this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.start()}start(){if(this.ctx){this.ctx.resume();return}let t;try{t=new(window.AudioContext||window.webkitAudioContext)}catch{return}this.ctx=t;let e=this.master=t.createGain();e.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,e.connect(n).connect(t.destination);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=t.createBuffer(1,i,t.sampleRate),a=r.getChannelData(0),c=o.getChannelData(0),h=0;for(let u=0;u<i;u++)a[u]=Math.random()*2-1,h=(h+.02*a[u])/1.02,c[u]=h*3.5;this.noiseBuffer=r;let l=(u=r)=>{let g=t.createBufferSource();return g.buffer=u,g.loop=!0,g.start(0,Math.random()*1.5),g};this.reverb=t.createConvolver();let f=Math.floor(t.sampleRate*1.8),d=t.createBuffer(2,f,t.sampleRate);for(let u=0;u<2;u++){let g=d.getChannelData(u);for(let v=0;v<f;v++)g[v]=(Math.random()*2-1)*Math.pow(1-v/f,3.2)}this.reverb.buffer=d,this.reverbOut=t.createGain(),this.reverbOut.gain.value=.32,this.reverb.connect(this.reverbOut).connect(e),this.buildEngine(l),this.buildTires(l),this.buildWorld(l,o),this.buildRadio()}buildEngine(t){let e=this.ctx;this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.Q.value=2.2,this.engineDrive=e.createWaveShaper();let n=new Float32Array(1024);for(let c=0;c<1024;c++)n[c]=Math.tanh((c/1023*2-1)*2.6);this.engineDrive.curve=n;let i=new Float32Array(24),r=new Float32Array(24);for(let c=1;c<24;c++)r[c]=1/c*(c%2?1:.6)*Math.exp(-c*.08);let o=e.createPeriodicWave(i,r);this.oscs=[],this.subGain=e.createGain();for(let[c,h,l]of[[1,.55,"wave"],[1.006,.3,"sawtooth"],[.5,1,"sine"]]){let f=e.createOscillator();l==="wave"?f.setPeriodicWave(o):f.type=l;let d=e.createGain();d.gain.value=h,f.connect(d).connect(c===.5?this.subGain:this.engineDrive),f.start(),this.oscs.push([f,c])}this.subGain.connect(this.engineDrive);let a=e.createGain();this.lumpOsc=e.createOscillator(),this.lumpOsc.type="triangle",this.lumpDepth=e.createGain(),this.lumpOsc.connect(this.lumpDepth).connect(a.gain),this.lumpOsc.start(),this.engineDrive.connect(a).connect(this.engineFilter).connect(this.engineGain).connect(this.master),this.raspFilter=e.createBiquadFilter(),this.raspFilter.type="bandpass",this.raspFilter.Q.value=1.4,this.raspGain=e.createGain(),this.raspGain.gain.value=0,t().connect(this.raspFilter).connect(this.raspGain).connect(a),this.intake=e.createOscillator(),this.intake.type="square",this.intakeFilter=e.createBiquadFilter(),this.intakeFilter.type="bandpass",this.intakeFilter.Q.value=3,this.intakeGain=e.createGain(),this.intakeGain.gain.value=0,this.intake.connect(this.intakeFilter).connect(this.intakeGain).connect(this.engineGain),this.intake.start(),this.whine=e.createOscillator(),this.whine.type="sine",this.whineGain=e.createGain(),this.whineGain.gain.value=0,this.whine.connect(this.whineGain).connect(this.master),this.whine.start(),this.turbo=e.createOscillator(),this.turbo.type="sine",this.turboGain=e.createGain(),this.turboGain.gain.value=0,this.turbo.connect(this.turboGain).connect(this.master),this.turbo.start(),this.applyEngine()}setEngine(t){this.engineDef=Nu[t]||Nu.v8,this.applyEngine()}applyEngine(){if(!this.ctx)return;let t=this.engineDef,e=this.ctx.currentTime;this.lumpDepth.gain.setTargetAtTime(t.lump,e,.05),this.subGain.gain.setTargetAtTime(t.sub,e,.05)}buildTires(t){let e=this.ctx;this.screechFilter=e.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.value=1350,this.screechFilter.Q.value=5,this.screechGain=e.createGain(),this.screechGain.gain.value=0,t().connect(this.screechFilter).connect(this.screechGain).connect(this.master),this.squeal=e.createOscillator(),this.squeal.type="sawtooth";let n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=1100,n.Q.value=8,this.squealGain=e.createGain(),this.squealGain.gain.value=0;let i=e.createOscillator();i.frequency.value=9;let r=e.createGain();r.gain.value=22,i.connect(r).connect(this.squeal.frequency),i.start(),this.squeal.connect(n).connect(this.squealGain).connect(this.master),this.squeal.start(),this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windGain=e.createGain(),this.windGain.gain.value=0,t().connect(this.windFilter).connect(this.windGain).connect(this.master);let o=e.createBiquadFilter();o.type="highpass",o.frequency.value=2200,this.nitroGain=e.createGain(),this.nitroGain.gain.value=0,t().connect(o).connect(this.nitroGain).connect(this.master);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=220,this.roarGain=e.createGain(),this.roarGain.gain.value=0,t().connect(a).connect(this.roarGain).connect(this.master),this.scrapeFilter=e.createBiquadFilter(),this.scrapeFilter.type="bandpass",this.scrapeFilter.frequency.value=2400,this.scrapeFilter.Q.value=2.5,this.scrapeGain=e.createGain(),this.scrapeGain.gain.value=0,t().connect(this.scrapeFilter).connect(this.scrapeGain).connect(this.master)}buildWorld(t,e){let n=this.ctx,i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=520,this.surfGain=n.createGain(),this.surfGain.gain.value=0,t().connect(i).connect(this.surfGain).connect(this.master);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=380,this.humGain=n.createGain(),this.humGain.gain.value=0,t(e).connect(r).connect(this.humGain).connect(this.master),this.siren=n.createOscillator(),this.siren.type="sawtooth",this.siren.frequency.value=900;let o=n.createOscillator();o.frequency.value=.32;let a=n.createGain();a.gain.value=380,o.connect(a).connect(this.siren.frequency),o.start();let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=1100,c.Q.value=1.2,this.sirenGain=n.createGain(),this.sirenGain.gain.value=0,this.siren.connect(c).connect(this.sirenGain).connect(this.master),this.siren.start(),this.ambientBus=n.createGain(),this.ambientBus.gain.value=0,this.ambientBus.connect(this.master),this.ambientBus.connect(this.reverb)}setEnabled(t){this.enabled=t,t&&this.start(),this.ctx&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.1)}update(t){if(!this.ctx)return;let e=this.ctx.currentTime,{rpm:n,throttle:i,speed:r,slip:o,boosting:a,active:c,shoreDistance:h,time:l,gear:f=1,ratio:d=3,city:u=.5,night:g=0,nearTrees:v=0}=t,m=c?1:0,p=this.engineDef,_=n/60*p.pulses;for(let[S,E]of this.oscs)S.frequency.setTargetAtTime(_*E*.5,e,.025);this.lumpOsc.frequency.setTargetAtTime(n/120,e,.05);let b=n/p.redline,y=i*(.75+Math.min(Math.max(f,1),6)*.05);this.engineFilter.frequency.setTargetAtTime((220+n*.14+y*n*.3)*p.tone,e,.04),this.engineGain.gain.setTargetAtTime(m*(.065+y*.085+b*.05),e,.04),this.raspFilter.frequency.setTargetAtTime(_*3,e,.05),this.raspGain.gain.setTargetAtTime(m*p.rasp*(.15+i*.6)*.5,e,.05),this.intake.frequency.setTargetAtTime(_*2,e,.03),this.intakeFilter.frequency.setTargetAtTime(900+n*.35,e,.05),this.intakeGain.gain.setTargetAtTime(m*p.intake*i*b*b*.035,e,.05);let w=Math.abs(r);this.whine.frequency.setTargetAtTime(Math.max(40,w*d*14),e,.05),this.whineGain.gain.setTargetAtTime(m*(f>0&&f<=2?1:.25)*Math.min(w/20,1)*.006,e,.1),this.turbo.frequency.setTargetAtTime(1400+n*.55,e,.1),this.turboGain.gain.setTargetAtTime(m*i*b*b*.01,e,.1);let A=m*Math.min(Math.max(o-3,0)/10,1);this.screechGain.gain.setTargetAtTime(A*.075,e,.06),this.screechFilter.frequency.setTargetAtTime(1100+Math.min(o,20)*25,e,.1),this.squeal.frequency.setTargetAtTime(820+Math.min(o,20)*18,e,.08),this.squealGain.gain.setTargetAtTime(A*A*.05,e,.05),this.windGain.gain.setTargetAtTime(m*Math.min((w/60)**2,1)*.1,e,.2),this.windFilter.frequency.setTargetAtTime(400+w*18,e,.2),a&&!this.wasBoosting&&m&&this.whoosh(),this.wasBoosting=a,this.nitroGain.gain.setTargetAtTime(m*(a?.045:0),e,.06),this.roarGain.gain.setTargetAtTime(m*(a?.12:0),e,.1),this.scrapeGain.gain.setTargetAtTime(m*this.scrapeLevel*.09,e,.04),this.scrapeLevel*=.6;let P=Math.max(0,1-h/140),R=.55+.45*Math.sin(l*.7)*Math.sin(l*.23+1);this.surfGain.gain.setTargetAtTime(P*R*.11,e,.3),this.humGain.gain.setTargetAtTime(m*(.025+u*.05)*(1-g*.55),e,.6),this.ambientBus.gain.setTargetAtTime(m,e,.4),this.sirenGain.gain.setTargetAtTime(m*this.sirenLevel*.05,e,.15),m&&this.ambient(l,{city:u,night:g,surfNear:P,nearTrees:v}),this.radioActive=c,this.radioTick(c)}ambient(t,{city:e,night:n,surfNear:i,nearTrees:r}){let o=this.nextAmbient;t>o.horn&&(o.horn=t+7+Math.random()*16/(.4+e),this.horn(60+Math.random()*140,!0)),n<.5&&t>o.bird&&(o.bird=t+2+Math.random()*6,(r>.2||Math.random()<.3)&&this.chirp()),n<.5&&i>.3&&t>o.gull&&(o.gull=t+5+Math.random()*9,this.gull()),n>.5&&t>o.cricket&&(o.cricket=t+.7+Math.random()*1.6,this.cricket(e)),t>o.siren&&(o.siren=t+40+Math.random()*60,e>.4&&this.distantSiren())}burst(t,e,n,i,r=1,o=this.master,a=0){if(!this.ctx||!this.enabled)return;let c=this.ctx,h=c.currentTime+a,l=c.createBufferSource();l.buffer=this.noiseBuffer;let f=c.createBiquadFilter();f.type=e,f.frequency.value=n,f.Q.value=r;let d=c.createGain();d.gain.setValueAtTime(i,h),d.gain.exponentialRampToValueAtTime(1e-4,h+t),l.connect(f).connect(d).connect(o),l.start(h,Math.random()),l.stop(h+t+.05)}tone(t,e,n,i,{dest:r=this.master,when:o=0,attack:a=.005,slideTo:c=0,q:h=0,filter:l=0}={}){if(!this.ctx||!this.enabled)return;let f=this.ctx,d=f.currentTime+o,u=f.createOscillator();u.type=t,u.frequency.setValueAtTime(e,d),c&&u.frequency.exponentialRampToValueAtTime(c,d+n);let g=f.createGain();g.gain.setValueAtTime(1e-4,d),g.gain.linearRampToValueAtTime(i,d+a),g.gain.exponentialRampToValueAtTime(1e-4,d+n);let v=u;if(l){let m=f.createBiquadFilter();m.type="bandpass",m.frequency.value=l,m.Q.value=h||2,v=u.connect(m)}v.connect(g).connect(r),u.start(d),u.stop(d+n+.05)}impact(t){if(!this.ctx||!this.enabled)return;let e=this.ctx.currentTime;if(e-(this.lastImpact||0)<.07)return;this.lastImpact=e;let n=Math.min(t/20,1);this.burst(.35+n*.3,"lowpass",300+n*900,.25+n*.6),this.tone("sine",70+n*30,.25,.25*n+.08,{slideTo:40});for(let i of[1,2.76,5.4])this.tone("triangle",420*i*(.9+Math.random()*.2),.18+n*.4,.04*n/i+.01,{filter:420*i,q:12});if(n>.4)for(let i=0;i<6;i++)this.tone("sine",3e3+Math.random()*4e3,.08+Math.random()*.1,.02*n,{when:.02+Math.random()*.2})}scrape(t){this.scrapeLevel=Math.max(this.scrapeLevel,Math.min(t/25,1)),this.ctx&&this.scrapeFilter.frequency.setTargetAtTime(1800+Math.random()*1600,this.ctx.currentTime,.02)}whoosh(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuffer;let i=t.createBiquadFilter();i.type="bandpass",i.Q.value=1.6,i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(3800,e+.45);let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.32,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+.9),n.connect(i).connect(r).connect(this.master),n.start(e,Math.random()),n.stop(e+1)}backfire(){!this.ctx||!this.enabled||(this.burst(.09,"lowpass",900,.35),this.tone("square",60,.08,.08))}shift(t){t&&this.burst(.18,"highpass",1800,.07)}horn(t,e=!1){if(!this.ctx||!this.enabled)return;let n=this.ctx,i=n.currentTime,r=Math.min(.12,6/Math.max(t,6)*.12)*(e?.6:1),o=e?.3+Math.random()*.5:.45,a=n.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(r,i+.02),a.gain.setValueAtTime(r,i+o),a.gain.linearRampToValueAtTime(0,i+o+.1);let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=e?900:1800;let h=e?300+Math.random()*120:349;for(let l of[h,h*1.26]){let f=n.createOscillator();f.type="square",f.frequency.value=l,f.connect(c),f.start(i),f.stop(i+o+.15)}c.connect(a).connect(e?this.ambientBus:this.master)}chirp(){let t=2600+Math.random()*2200,e=2+Math.floor(Math.random()*4);for(let n=0;n<e;n++)this.tone("sine",t*(1+Math.random()*.1),.07,.012,{dest:this.ambientBus,when:n*.11,slideTo:t*1.35})}gull(){for(let t=0;t<2+Math.floor(Math.random()*2);t++)this.tone("sawtooth",1500,.32,.01,{dest:this.ambientBus,when:t*.38,slideTo:900,filter:1400,q:3})}cricket(t){let e=4300+Math.random()*500,n=.006*(1.2-t*.8);for(let i=0;i<3;i++)this.tone("sine",e,.035,n,{dest:this.ambientBus,when:i*.06})}distantSiren(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle";let i=t.createOscillator();i.frequency.value=.35;let r=t.createGain();r.gain.value=220,n.frequency.value=780,i.connect(r).connect(n.frequency);let o=t.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.012,e+2),o.gain.linearRampToValueAtTime(0,e+8),n.connect(o).connect(this.ambientBus),n.start(e),i.start(e),n.stop(e+8.2),i.stop(e+8.2)}setSiren(t){this.sirenLevel=t}chime(t=!1){if(!this.ctx||!this.enabled)return;let e=this.ctx,n=e.currentTime;(t?[523.25,659.25,783.99,1046.5]:[659.25,987.77]).forEach((r,o)=>{let a=e.createOscillator();a.type="triangle",a.frequency.value=r;let c=e.createGain(),h=n+o*.09;c.gain.setValueAtTime(0,h),c.gain.linearRampToValueAtTime(.12,h+.01),c.gain.exponentialRampToValueAtTime(1e-4,h+.6),a.connect(c).connect(this.master),a.start(h),a.stop(h+.65)})}countBeep(t=!1){this.tone("square",t?880:440,t?.5:.18,.06,{filter:t?1800:900,q:1})}buildRadio(){let t=this.ctx;this.radioGain=t.createGain(),this.radioGain.gain.value=0;let e=t.createBiquadFilter();e.type="highpass",e.frequency.value=55;let n=t.createBiquadFilter();n.type="highshelf",n.frequency.value=7e3,n.gain.value=-5,this.radioIn=t.createGain(),this.radioIn.connect(e).connect(n).connect(this.radioGain).connect(this.master),this.radioSend=t.createGain(),this.radioSend.gain.value=.5,this.radioSend.connect(this.reverb),this.radioStep=0,this.radioNext=0,this.radioActive=!1,setInterval(()=>this.radioTick(this.radioActive),40)}get stationName(){return this.station<0?"RADIO OFF":Pi[this.station].name}setStation(t){this.station=t,this.ctx&&(this.radioStep=0,this.radioNext=this.ctx.currentTime+.25,this.burst(.28,"bandpass",2200,.08,.7))}nextStation(){return this.setStation(this.station+1>=Pi.length?-1:this.station+1),this.stationName}radioTick(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=t&&this.station>=0&&this.enabled;if(this.radioGain.gain.setTargetAtTime(n?.75:0,e,.15),!n){this.radioNext=0;return}let i=Pi[this.station],r=60/i.bpm/4;for(this.radioNext<e&&(this.radioNext=e+.05);this.radioNext<e+.3;){let o=this.radioStep,a=o%2?i.swing*r:0;this.playStep(i,o,this.radioNext+a,r),this.radioNext+=r,this.radioStep++}}playStep(t,e,n,i){let r=Math.max(0,n-this.ctx.currentTime),o=Math.floor(e/16),a=e%16,c=t.chords[o%t.chords.length],h=c[0],l=u=>{let g=Math.sin((e+u*31.7)*12.9898+this.station*7.1)*43758.5453;return g-Math.floor(g)},f=this.radioIn,d=this.radioSend;if(t.id==="wave"){a%4===0&&this.kick(r,.5),(a===4||a===12)&&this.snare(r,.28,!0),a%2===0&&this.hat(r,.05,!1),a%2===0&&this.synth("sawtooth",Yi(h-24),i*1.8,.11,r,{cutoff:700,env:900});let u=[0,1,2,1,0,2,1,2];if(this.synth("square",Yi(c[u[a%8]]+12),i*.9,.03,r,{cutoff:2400,env:1200,send:.6}),a===0)for(let g of c)this.synth("sawtooth",Yi(g),i*15,.022,r,{cutoff:1300,attack:.4,detune:9,send:1});if(o%4>=2&&[0,3,6,10,12].includes(a)){let g=[0,3,5,7,10,12];this.synth("sawtooth",Yi(h+12+g[Math.floor(l(1)*g.length)]),i*2.6,.035,r,{cutoff:3e3,env:0,send:.8,detune:6})}}else if(t.id==="tide"){if((a===0||a===7||a===10)&&this.kick(r,.42),(a===4||a===12)&&this.snare(r,.16,!1),a%2===0&&this.hat(r,.025+l(2)*.015,!1),a===0||a===6)for(let u of c)this.synth("sine",Yi(u),i*7,.03,r+l(3)*.02,{cutoff:1800,attack:.01,trem:!0,send:.7});(a===0||a===10)&&this.synth("sine",Yi(h-12),i*5,.16,r,{cutoff:400}),l(4)<.35&&this.burst(.01,"highpass",3e3,.02+l(5)*.03,1,f,r),a===0&&this.burst(i*16,"bandpass",1200,.004,.4,f,r)}else{(a===0||a===6||a===8||a===11)&&this.kick(r,.45),(a===4||a===12)&&this.snare(r,.24,!1),this.hat(r,a%4===2?.06:.03,a%4===2);let g=[0,null,12,0,null,0,10,null,0,null,12,7,null,0,10,12][a];if(g!==null&&this.synth("square",Yi(h-24+g),i*.8,.09,r,{cutoff:500,env:1400}),[2,7,10,14].includes(a))for(let v of c.slice(1))this.synth("square",Yi(v+12),i*.5,.018,r,{cutoff:2600,env:2e3,q:6});if(o%8===7&&(a===0||a===3))for(let v of c)this.synth("sawtooth",Yi(v+12),i*2,.025,r,{cutoff:2200,send:.6,detune:12})}}synth(t,e,n,i,r,{cutoff:o=2e3,env:a=0,attack:c=.005,detune:h=0,send:l=0,trem:f=!1,q:d=1}={}){let u=this.ctx,g=u.currentTime+r,v=u.createBiquadFilter();v.type="lowpass",v.Q.value=d,v.frequency.setValueAtTime(o+a,g),a&&v.frequency.exponentialRampToValueAtTime(Math.max(o,60),g+Math.min(n,.3));let m=u.createGain();m.gain.setValueAtTime(1e-4,g),m.gain.linearRampToValueAtTime(i,g+c),m.gain.setValueAtTime(i,g+Math.max(c,n*.6)),m.gain.exponentialRampToValueAtTime(1e-4,g+n+.08);for(let _ of h?[-h,h]:[0]){let b=u.createOscillator();b.type=t,b.frequency.value=e,b.detune.value=_,b.connect(v),b.start(g),b.stop(g+n+.12)}let p=v.connect(m);if(f){let _=u.createGain(),b=u.createOscillator();b.frequency.value=4.5;let y=u.createGain();y.gain.value=.25,b.connect(y).connect(_.gain),b.start(g),b.stop(g+n+.12),p=p.connect(_)}if(p.connect(this.radioIn),l){let _=u.createGain();_.gain.value=l,p.connect(_).connect(this.radioSend)}}kick(t,e){let n=this.ctx,i=n.currentTime+t,r=n.createOscillator();r.frequency.setValueAtTime(140,i),r.frequency.exponentialRampToValueAtTime(42,i+.12);let o=n.createGain();o.gain.setValueAtTime(e,i),o.gain.exponentialRampToValueAtTime(1e-4,i+.38),r.connect(o).connect(this.radioIn),r.start(i),r.stop(i+.4)}snare(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=1400;let c=i.createGain(),h=n?.32:.16;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c),c.connect(this.radioIn),n&&c.connect(this.radioSend),o.start(r,Math.random()),o.stop(r+h+.05);let l=i.createOscillator();l.type="triangle",l.frequency.setValueAtTime(220,r),l.frequency.exponentialRampToValueAtTime(150,r+.08);let f=i.createGain();f.gain.setValueAtTime(e*.6,r),f.gain.exponentialRampToValueAtTime(1e-4,r+.1),l.connect(f).connect(this.radioIn),l.start(r),l.stop(r+.12)}hat(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=7500;let c=i.createGain(),h=n?.22:.045;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c).connect(this.radioIn),o.start(r,Math.random()),o.stop(r+h+.05)}};var Hc=class{constructor(){this.keys=new Set,this.state={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},this.padButtons=new Set,this.onPadPress=null}clear(){this.keys.clear()}poll(){let t=this.keys,e=t.has("KeyW")||t.has("ArrowUp")?1:0,n=t.has("KeyS")||t.has("ArrowDown")?1:0,i=(t.has("KeyA")||t.has("ArrowLeft")?1:0)-(t.has("KeyD")||t.has("ArrowRight")?1:0),r=t.has("Space"),o=t.has("ShiftLeft")||t.has("ShiftRight"),a=navigator.getGamepads?navigator.getGamepads():[];for(let c of a){if(!c||!c.connected)continue;let h=c.axes[0]||0;Math.abs(h)>.12&&(i=-Math.sign(h)*((Math.abs(h)-.12)/.88)**1.4);let l=c.buttons[7]?.value||0,f=c.buttons[6]?.value||0;e=Math.max(e,l),n=Math.max(n,f),r=r||!!c.buttons[0]?.pressed,o=o||!!c.buttons[1]?.pressed||!!c.buttons[2]?.pressed;for(let[d,u]of[[3,"camera"],[9,"pause"],[8,"map"],[5,"reset"]]){let g=!!c.buttons[d]?.pressed,v=c.index+":"+d;g&&!this.padButtons.has(v)&&this.onPadPress?.(u),g?this.padButtons.add(v):this.padButtons.delete(v)}}return Object.assign(this.state,{throttle:e,brake:n,steer:i,handbrake:r,nitro:o}),this.state}};var At=s=>document.getElementById(s),Gc=matchMedia("(pointer:coarse)").matches,N1=Gc&&Math.min(screen.width,screen.height)<600,Xe={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{localStorage.setItem(s,t)}catch{}}};function pp(s){At("loading").classList.add("hidden"),At("error").classList.remove("hidden"),console.error(s)}async function F1(){let s;try{if(s=new mc(At("world")),!s.renderer.capabilities.isWebGL2)throw new Error("WebGL 2 unavailable")}catch(M){pp(M);return}let t=s.renderer,e=new Fs,n=new cn(55,innerWidth/innerHeight,.2,5600);n.layers.enable(1),s.init(e,n);let i=M=>(At("loading-step").textContent=M,new Promise(N=>setTimeout(N,0)));await i("Painting the sky\u2026");let r=new xc(t,e);await i("Paving the boulevards\u2026"),Cd(e,t),await i("Raising the skyline\u2026");let o=zd(e,t);await i("Rolling in the surf\u2026");let a=Od(e,t);await i("Planting palms\u2026");let c=Gd(e,t),h=new Rc,l=Vd(e,t,a.pier.lamps,h),f=tp(e,t,h,l.lamps,c.trunkColliders);await i("Fueling up\u2026");let d=Xe.get("pacific-car");sr[d]||(d="coupe");let u=new Ec(e,t,d),g=new Lc(e,t),v=new Nc(e),m=hp(e,t),p=new Fc(e),_=new Fe,b=ta(16761466,.9),y=new le(1.1,1.1,40,20,1,!0);y.translate(0,20,0);let w=[-1,1].map(M=>{let N=new zt(y,b);return N.userData.noAO=!0,N.layers.set(1),_.add(N),{mesh:N,side:M}}),A=new en({color:new Lt(3,1.8,.8),transparent:!0,opacity:.8,depthWrite:!1,blending:Nn}),P=new zt(new To(yc-.6,yc,72),A);P.rotation.x=-Math.PI/2,P.position.y=.06,P.userData.noAO=!0,_.add(P);let R=new zt(new Si(1.6,2.6,3),new en({color:new Lt(4,2.4,1.1)}));R.rotation.z=Math.PI,R.userData.noAO=!0,_.add(R),_.visible=!1,e.add(_);let S=[...o.colliders,...f.solids],E=[...c.trunkColliders,...l.circles,...f.circles],z={colliders:o.colliders,boxes:S,circles:E,boxGrid:new ir(80).addAll(S),buildingGrid:new ir(80).addAll(o.colliders.map(M=>({...M}))),circleGrid:new Yn(24).addAll(E),pileGrid:new Yn(24).addAll(Rn.flatMap(M=>M.piles||[])),piles:Rn.flatMap(M=>M.piles||[])};g.world=z,_d(e);let G=new Ic(g,z.buildingGrid),F=new zc(n),O=new Bc(o.colliders),X=new kc,$=new Hc,T={state:"intro",paused:!1,mode:"free",raceTime:0,checkpoint:0,countdown:0,raceId:"sunset",route:vn.sunset.route,raceName:vn.sunset.name,splits:[],topSpeed:0,crashes:0,waypoint:null,lastX:an.x,lastZ:an.z,time:0,frame:0,flash:0},V=Xe.get("pacific-quality")||(N1?"low":Gc?"medium":"high");["ultra","high","medium","low"].includes(V)||(V="high");let tt=Xe.get("pacific-time")||"cycle",ht=Xe.get("pacific-road")||"auto";!(tt in vc)&&tt!=="cycle"&&(tt="golden");function bt(M){V=M,Xe.set("pacific-quality",M),s.setQuality(M);let N=s.quality;r.setShadowQuality(N.shadow,N.shadowRange),a.setReflections(N.reflections>0,N.reflections),At("quality").value=M}s.onResize=()=>a.resize(s.quality.reflections);let Tt=!1;function Nt(M){tt=M,Xe.set("pacific-time",M),r.cycle=M==="cycle",M!=="cycle"?r.setHours(vc[M]):Tt||r.setHours(18.95),Tt=Tt||M==="cycle",r.envDirty=!0,At("time-select").value=M}u.reset(an.x,an.z,an.heading);let Gt=Xe.get("pacific-color");Gt&&ct(Gt),bt(V),Nt(tt);let Kt;function et(M){let N=At("toast");N.textContent=M,N.classList.add("show"),clearTimeout(Kt),Kt=setTimeout(()=>N.classList.remove("show"),2400)}function ct(M){u.setColor(M),Xe.set("pacific-color",M),document.querySelectorAll(".swatch").forEach(N=>{let it=N.dataset.color===M;N.classList.toggle("active",it),N.setAttribute("aria-pressed",String(it))})}function Pt(M,N=!1){if(!sr[M])return;d=M,Xe.set("pacific-car",M);let it=sr[M];if(u.key!==M){let{x:pt,z:Ct,heading:ft}=u;u.setModel(M),u.reset(pt,Ct,ft),F.snap?.(u)}At("car-name").textContent=it.name,At("car-blurb").textContent=it.blurb,At("car-spec").textContent=it.spec,At("hud-car").textContent=it.name,At("car-menu").value=M;for(let pt of["speed","accel","grip"])At(`stat-${pt}`).style.width=`${Math.round(it.stats[pt]*100)}%`;X.setEngine?.(it.engine),N&&et(it.name)}let Wt=M=>Pt(ia[(ia.indexOf(d)+M+ia.length)%ia.length]),Rt=[],nt=0;function Ft({item:M,x:N,z:it,speed:pt,nx:Ct,nz:ft}){T.time-nt>.08&&(X.impact(Math.min(2+pt*.35,M.type==="lamp"?9:6)),nt=T.time),F.shake=Math.max(F.shake,M.type==="lamp"?.22:.08);let Bt=M.sparks?14:4;for(let qt=0;qt<Bt;qt++)M.sparks?m.sparks.emit(N,Qt+.4+dt()*.5,it,Ct*3+(dt()-.5)*6,1+dt()*4,ft*3+(dt()-.5)*6,.1+dt()*.08,.3+dt()*.4,1,6,3.2,1):m.dust.emit(N,Qt+.3,it,(dt()-.5)*3,dt()*2,(dt()-.5)*3,.5,.9,.35,.55,.5,.42);M.type==="hydrant"&&Rt.push({x:N,z:it,t:16}),(M.type==="lamp"||M.type==="hydrant")&&yi("vandalism",N,it,1)}function L(){if(T.checkpoint>=T.route.length)return;let[M,N]=T.route[T.checkpoint];_.position.set(M,0,N);let it=Math.abs(M-qi(M))<1;for(let pt of w)pt.mesh.position.set(it?pt.side*(ne+1):0,0,it?0:pt.side*(ne+1));At("checkpoint-count").textContent=`${T.checkpoint+1} / ${T.route.length}`}function Dt(M){T.mode=M,T.state="play",T.paused=!1,$.clear();for(let it of["intro","intro-location","intro-footer"])At(it).classList.add("hidden");At("hud").classList.remove("hidden"),document.body.classList.add("playing"),document.body.classList.toggle("racing",M==="race"),At("race").classList.toggle("hidden",M!=="race"),At("start-trial").classList.toggle("hidden",M==="race"),At("mode-label").textContent=M==="race"?"TIME TRIAL":"FREE ROAM",At("mission-title").textContent=M==="race"?"Follow the afterglow.":"Take the long way home.",At("mission-subtitle").textContent=M==="race"?`Pass through all ${T.route.length} golden checkpoints.`:"Explore Vista Pac\xEDfica at your own pace.",T.raceTime=0,T.checkpoint=0,T.splits=[],T.topSpeed=0,T.crashes=0;let N=M==="race"?vn[T.raceId].start||an:an;u.reset(N.x,N.z,N.heading),T.lastX=u.x,T.lastZ=u.z,_.visible=M==="race",h.restoreAll(),G.reset(),L(),F.snap(u),X.setEnabled(H),T.countdown=M==="race"?3.6:0,St(M==="race"?"3":""),M!=="race"&&et("WELCOME TO VISTA PAC\xCDFICA")}let It="";function St(M){if(M===It)return;It=M;let N=At("countdown");N.textContent=M,N.classList.toggle("hidden",!M),N.classList.toggle("go",M==="GO"),N.classList.remove("pop"),N.offsetWidth,N.classList.add("pop"),M&&X.countBeep?.(M==="GO")}function Y(M){return T.countdown<=0?!1:(T.countdown-=M,T.countdown>.6?St(String(Math.ceil(T.countdown-.6))):T.countdown>0?St("GO"):(St(""),T.countdown=0),T.countdown>.6)}function q(){T.paused=!0,$.clear(),X.chime(!0),At("final-time").textContent=ha(T.raceTime);let M=Number(Xe.get(Et(T.raceId)))||null;!M||T.raceTime<M?(Xe.set(Et(T.raceId),String(T.raceTime)),At("best-time").textContent="A new personal best. Make the coast remember it."):At("best-time").textContent="PERSONAL BEST  "+ha(M);let N=u.distance/Math.max(T.raceTime,.1)*3.6;At("result-stats").innerHTML=`<span><b>${Math.round(T.topSpeed*3.6)}</b> KM/H TOP</span><span><b>${Math.round(N)}</b> KM/H AVG</span><span><b>${T.crashes}</b> ${T.crashes===1?"CRASH":"CRASHES"}</span><span><b>${sr[d].name}</b></span>`,At("result").showModal(),_.visible=!1,yt(T.raceId)}function W(M=!1){At("result").open||(T.paused=!0,$.clear(),At("menu-title").textContent=M?"Make it your drive.":"Take a breather.",At("menu-description").textContent=M?"Tune the look of the coast to your machine.":"The coast will be right here.",At("resume").textContent=T.state==="intro"?"BACK TO THE COAST":"BACK TO THE DRIVE",At("back-title").classList.toggle("hidden",T.state==="intro"),At("restart-race").textContent=(T.mode==="race"&&T.state==="play"?"RESTART ":"START ")+T.raceName,At("menu").open||At("menu").showModal())}function rt(){At("menu").close(),T.paused=!1,$.clear()}function wt(M){F.mode=M??(F.mode+1)%Du.length,At("camera-select").value=F.mode,T.state==="play"&&(et(Du[F.mode]),F.snap(u))}function Ut(){let M=["golden","dusk","night","dawn","noon","cycle"],N=M[(M.indexOf(tt)+1)%M.length];Nt(N),et({golden:"GOLDEN HOUR",dusk:"BLUE HOUR",night:"MIDNIGHT",dawn:"FIRST LIGHT",noon:"HIGH NOON",cycle:"LIVE DAY CYCLE"}[N])}function I(){T.state==="play"&&(O.setExpanded(!O.expanded,u),document.querySelector(".map-panel").classList.toggle("expanded",O.expanded),At("map-button").setAttribute("aria-label",O.expanded?"Close expanded map":"Expand map"))}function x(){if(T.mode==="race"){T.raceTime=0,T.checkpoint=0;let M=vn[T.raceId].start||an;u.reset(M.x,M.z,M.heading),L(),et("RUN RESTARTED")}else u.safeRespawn(),et("BACK ON THE ROAD");T.lastX=u.x,T.lastZ=u.z,F.snap(u)}function D(){rt(),T.state="intro",_.visible=!1,document.body.classList.remove("playing","racing"),At("hud").classList.add("hidden"),O.expanded&&B(!1);for(let M of["intro","intro-location","intro-footer"])At(M).classList.remove("hidden");u.reset(an.x,an.z,an.heading)}function B(M){O.setExpanded(M),document.querySelector(".map-panel").classList.toggle("expanded",M)}let H=Xe.get("pacific-sound")!=="off";function k(){At("sound").setAttribute("aria-label",H?"Mute sound":"Enable sound"),At("sound").querySelector("span").style.display=H?"none":"block"}k(),At("drive").onclick=()=>{te(),Dt("free")},At("trial").onclick=()=>{te(),Dt("race")},At("start-trial").onclick=()=>Dt("race"),At("pause").onclick=()=>W(),At("settings").onclick=()=>W(!0),At("close-menu").onclick=rt,At("resume").onclick=rt,At("restart-race").onclick=()=>{rt(),Dt("race")},At("back-title").onclick=D,At("menu").addEventListener("cancel",M=>{M.preventDefault(),rt()}),At("result").addEventListener("cancel",M=>M.preventDefault()),At("race-again").onclick=()=>{At("result").close(),Dt("race")},At("free-roam").onclick=()=>{At("result").close(),Dt("free")},At("quality").onchange=M=>bt(M.target.value),At("time-select").onchange=M=>Nt(M.target.value),At("road-select").value=ht,At("road-select").onchange=M=>{ht=M.target.value,Xe.set("pacific-road",ht)},At("camera-select").onchange=M=>wt(Number(M.target.value)),At("sound").onclick=()=>{H=!H,Xe.set("pacific-sound",H?"on":"off"),X.setEnabled(H&&T.state==="play"),H&&X.start(),k(),et(H?"SOUND ON":"SOUND OFF")},At("map-button").onclick=I;{let M=At("minimap"),N=new Map,it=0,pt=0;M.addEventListener("wheel",ft=>{O.expanded&&(ft.preventDefault(),O.zoomAt(ft.deltaY<0?1.25:.8,ft.clientX,ft.clientY))},{passive:!1}),M.addEventListener("pointerdown",ft=>{O.expanded&&(M.setPointerCapture(ft.pointerId),N.set(ft.pointerId,[ft.clientX,ft.clientY]),N.size===1&&(it=0),pt=0)}),M.addEventListener("pointermove",ft=>{let Bt=N.get(ft.pointerId);if(!(!Bt||!O.expanded)&&(N.size===1&&(it+=Math.abs(ft.clientX-Bt[0])+Math.abs(ft.clientY-Bt[1]),it>6&&O.panBy(ft.clientX-Bt[0],ft.clientY-Bt[1])),N.set(ft.pointerId,[ft.clientX,ft.clientY]),N.size===2)){let[qt,kt]=[...N.values()],Yt=Math.hypot(qt[0]-kt[0],qt[1]-kt[1]);pt>0&&Yt>0&&O.zoomAt(Yt/pt,(qt[0]+kt[0])/2,(qt[1]+kt[1])/2),pt=Yt,it=99}});let Ct=ft=>{N.delete(ft.pointerId)&&O.expanded&&N.size===0&&it<=6&&ft.type==="pointerup"&&O.pick(ft.clientX,ft.clientY,T),pt=0};M.addEventListener("pointerup",Ct),M.addEventListener("pointercancel",Ct),At("map-zoom-in").onclick=()=>O.zoomAt(1.5),At("map-zoom-out").onclick=()=>O.zoomAt(1/1.5)}for(let M of document.querySelectorAll(".swatch"))M.onclick=()=>ct(M.dataset.color);function J(M,N=!0){X.setStation(M),Xe.set("pacific-radio",String(M)),At("radio-select").value=String(M),At("radio-name").textContent=M<0?"OFF":Pi[M].name,At("radio-genre").textContent=M<0?"Q TO TUNE":Pi[M].genre.toUpperCase(),document.querySelector(".radio").classList.toggle("off",M<0),N&&T.state==="play"&&et(M<0?"RADIO OFF":`\u266A ${Pi[M].name}`)}At("radio-select").onchange=M=>J(Number(M.target.value),!1);function Q(M){u.setHandling(M),Xe.set("pacific-handling",u.mode),At("handling-select").value=u.mode}At("handling-select").onchange=M=>{Q(M.target.value),T.state==="play"&&et(na[u.mode].label)},Q(Xe.get("pacific-handling")||"easy");let st={slow:.6,standard:1,off:0},xt="slow";function K(M){xt=M in st?M:"slow",g.policePace=st[xt]||.6,Xe.set("pacific-police",xt),At("police-select").value=xt,xt==="off"&&G.reset()}At("police-select").onchange=M=>{K(M.target.value),T.state==="play"&&et({slow:"RELAXED POLICE",standard:"STANDARD POLICE",off:"POLICE OFF"}[xt])},K(Xe.get("pacific-police")||"slow");let at=Object.keys(vn),Et=M=>M==="sunset"?"pacific-best":"pacific-best-"+M,lt=M=>M.toLowerCase().replace(/\b\w/g,N=>N.toUpperCase());function yt(M){vn[M]||(M="sunset"),T.raceId=M,T.route=vn[M].route,T.raceName=vn[M].name,Xe.set("pacific-race",M),At("race-select").value=M,At("race-name").textContent=vn[M].name;let N=Number(Xe.get(Et(M)));At("race-info").textContent=`${vn[M].route.length} CHECKPOINTS \xB7 ${N?"BEST "+ha(N):vn[M].blurb.toUpperCase()}`,At("trial").firstChild.textContent=vn[M].name+" ",At("start-trial").firstChild.textContent=`Start ${lt(vn[M].name)} `,At("start-trial").querySelector("span").textContent=`${vn[M].route.length} CHECKPOINTS`,document.querySelector("#race > span").textContent=vn[M].name,document.querySelector("#result .eyebrow").textContent=vn[M].name+" COMPLETE"}let Xt=M=>yt(at[(at.indexOf(T.raceId)+M+at.length)%at.length]);At("race-prev").onclick=()=>Xt(-1),At("race-next").onclick=()=>Xt(1),At("race-select").onchange=M=>yt(M.target.value),yt(Xe.get("pacific-race")||"sunset");let Z=Xe.get("pacific-fps")==="on",vt=At("fps"),_t={frames:0,time:0,worst:0};function Mt(M){Z=M,Xe.set("pacific-fps",M?"on":"off"),At("fps-select").value=M?"on":"off",vt.classList.toggle("hidden",!M)}At("fps-select").onchange=M=>Mt(M.target.value==="on"),Mt(Z);let gt=Number(Xe.get("pacific-radio")??0);J(Number.isInteger(gt)&&gt<Pi.length?gt:0,!1);let ut=()=>X.unlock();for(let M of["pointerdown","keydown","touchend","click"])addEventListener(M,ut,{once:!0});At("car-prev").onclick=()=>Wt(-1),At("car-next").onclick=()=>Wt(1),At("car-menu").onchange=M=>Pt(M.target.value,T.state==="play"),Pt(d);let Zt=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);addEventListener("keydown",M=>{if(M.target.tagName!=="SELECT"&&(Zt.has(M.code)&&M.preventDefault(),!M.repeat)){if(M.code==="Escape"){M.preventDefault(),At("menu").open?rt():T.state==="play"&&W();return}if(M.code==="Enter"&&T.state==="intro"&&!T.paused){Dt("free");return}if(T.state==="intro"&&!T.paused&&(M.code==="ArrowLeft"||M.code==="ArrowRight")){Wt(M.code==="ArrowLeft"?-1:1);return}if(M.code==="KeyT"&&!T.paused){Ut();return}if(!(T.state!=="play"||T.paused)){if(M.code==="KeyP")return W();if(M.code==="KeyR")return x();if(M.code==="KeyC")return wt();if(M.code==="KeyM")return I();if(O.expanded&&(M.code==="Equal"||M.code==="NumpadAdd"))return O.zoomAt(1.5);if(O.expanded&&(M.code==="Minus"||M.code==="NumpadSubtract"))return O.zoomAt(1/1.5);if(M.code==="KeyH"){X.horn(3);return}if(M.code==="KeyQ"){J(X.station+1>=Pi.length?-1:X.station+1);return}$.keys.add(M.code)}}}),addEventListener("keyup",M=>$.keys.delete(M.code)),addEventListener("blur",()=>{$.clear(),T.state==="play"&&!T.paused&&W()}),document.addEventListener("visibilitychange",()=>{document.hidden&&($.clear(),T.state==="play"&&!T.paused&&W())}),$.onPadPress=M=>{if(M==="pause")return T.paused?rt():T.state==="play"?W():Dt("free");T.state!=="play"||T.paused||(M==="camera"&&wt(),M==="map"&&I(),M==="reset"&&x())};for(let M of document.querySelectorAll("[data-key]")){let N=()=>{$.keys.delete(M.dataset.key),M.classList.remove("pressed")};M.addEventListener("pointerdown",it=>{it.preventDefault(),!T.paused&&(M.setPointerCapture(it.pointerId),$.keys.add(M.dataset.key),M.classList.add("pressed"))}),M.addEventListener("pointerup",N),M.addEventListener("pointercancel",N),M.addEventListener("lostpointercapture",N)}addEventListener("resize",()=>s.applySize()),At("touch-cam").onclick=()=>wt(),At("touch-radio").onclick=()=>J(X.station+1>=Pi.length?-1:X.station+1),At("touch-reset").onclick=()=>{T.state==="play"&&!T.paused&&x()},addEventListener("contextmenu",M=>{Gc&&M.preventDefault()}),document.addEventListener("gesturestart",M=>M.preventDefault()),addEventListener("touchmove",M=>{T.state==="play"&&!M.target.closest("dialog, .map-panel.expanded")&&M.preventDefault()},{passive:!1});function te(){if(!Gc)return;let M=document.documentElement,N=M.requestFullscreen||M.webkitRequestFullscreen;N&&!document.fullscreenElement&&Promise.resolve(N.call(M,{navigationUI:"hide"})).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{}),innerHeight>innerWidth&&setTimeout(()=>et("TURN YOUR PHONE SIDEWAYS"),2600)}let ee=new U,fe=new U,ln=new U,gn=0,Ms="",ri=At("world-clock"),bs=document.querySelector(".sun-icon"),cr=new U,Ss=new Ot,vi=new Ot,Zi=!1;function Ii(M,N,it,pt,Ct,ft,Bt){let qt=0,kt=2e3;for(let Yt=0;Yt<3;Yt++){let se=Yt===0?M:Yt===1?N:it,Te=Yt===0?pt:Yt===1?Ct:ft,Ce=Yt===0?Bt.x-Bt.w/2:Yt===1?0:Bt.z-Bt.d/2,xe=Yt===0?Bt.x+Bt.w/2:Yt===1?Bt.h:Bt.z+Bt.d/2;if(Math.abs(Te)<1e-6){if(se<Ce||se>xe)return!1;continue}let jt=(Ce-se)/Te,Ie=(xe-se)/Te;if(jt>Ie){let be=jt;jt=Ie,Ie=be}if(qt=Math.max(qt,jt),kt=Math.min(kt,Ie),qt>kt)return!1}return!0}function Es(){let M=r.sunDir,N=n.position;if(ln.copy(N).addScaledVector(M,1e3).project(n),r.elevation<-.5||ln.z>1||M.y<.75&&o.topsGrid.segment(N.x,N.z,N.x+M.x*900,N.z+M.z*900,pt=>Ii(N.x,N.y,N.z,M.x,M.y,M.z,pt)))return 0;for(let pt=60;pt<3200;pt*=1.35)if(N.y+M.y*pt<mi(N.x+M.x*pt,N.z+M.z*pt))return 0;let it=Math.max(Math.abs(ln.x),Math.abs(ln.y));return Ee.clamp(1.25-it,0,1)*Ee.smoothstep(r.elevation,-.5,4)}function ws(M){let N=Math.abs(u.speed)>3,it=u.slip>3.2&&N||u.wheelspin>.3,pt=u.surface==="sand"&&u.y<.5;u.group.updateMatrixWorld();let Ct=new Lt().copy(r.hemi.color).multiplyScalar(r.hemi.intensity*.55).add(new Lt().copy(r.sun.color).multiplyScalar(r.elevation>0?r.sun.intensity*.22:0));m.smoke.uniforms.light.value.copy(Ct),m.dust.uniforms.light.value.copy(Ct),m.water.uniforms.light.value.copy(Ct).multiplyScalar(1.3);for(let kt=Rt.length-1;kt>=0;kt--){let Yt=Rt[kt];if(Yt.t-=M,Yt.t<=0){Rt.splice(kt,1);continue}let se=Math.min(1,Yt.t/3)*70*M;for(let Te=0;Te<se+(dt()<se%1?1:0);Te++)m.water.emit(Yt.x+(dt()-.5)*.2,Qt+.3,Yt.z+(dt()-.5)*.2,(dt()-.5)*1.6,8.5+dt()*3.5,(dt()-.5)*1.6,.35+dt()*.25,1.5+dt()*.6,.5,.8,.88,.95)}u.wheels.forEach((kt,Yt)=>{if(kt.front)return;ee.set(kt.x,.05,kt.z).applyMatrix4(u.group.matrixWorld),p.add(Yt,ee.x,u.y,ee.z,!pt&&(it||u.brake>0&&u.speed>14&&u.handbrake),.24);let se=Math.min(1,(u.slip-3)/9)+u.wheelspin;!pt&&it&&dt()<se*60*M&&m.smoke.emit(ee.x,ee.y+.3,ee.z,u.vx*.15+(dt()-.5)*1.5,.6+dt(),u.vz*.15+(dt()-.5)*1.5,1.2+dt()*.8,2.2+dt()*1.2,.5*Math.min(1,se+.3),.85,.85,.86),pt&&N&&dt()<Math.min(1,Math.abs(u.speed)/25)*40*M&&m.dust.emit(ee.x,ee.y+.2,ee.z,(dt()-.5)*2,.8+dt(),(dt()-.5)*2,.9+dt()*.6,1.4+dt(),.55,.78,.68,.52)});let ft=cr.set(Math.sin(u.heading),0,Math.cos(u.heading));for(let kt of u.exhausts)if(ee.copy(kt).applyMatrix4(u.group.matrixWorld),u.boosting)for(let Yt=0;Yt<2;Yt++){let se=dt(),Te=dt()<.35,Ce=7+dt()*5;m.flames.emit(ee.x,ee.y,ee.z,u.vx+ft.x*Ce,dt()*.4,u.vz+ft.z*Ce,.3+dt()*.25,.1+dt()*.08,1,Te?.6:1.4+se,Te?1.1:.8+se*1.4,Te?4.5:2.8)}else u.throttle===0&&u.rpm>u.def.redline*.6&&dt()<3*M&&(m.flames.emit(ee.x,ee.y,ee.z,u.vx+ft.x*3,0,u.vz+ft.z*3,.35,.07,1,2.2,1.1,.4),X.backfire?.());let Bt=u.contact;if(Bt&&u.impact>3){let kt=Math.min(46,Math.floor(u.impact*2.2));for(let Yt=0;Yt<kt;Yt++)m.sparks.emit(Bt.x,u.y+.35+dt()*.4,Bt.z,Bt.nx*4+(dt()-.5)*9,1+dt()*5,Bt.nz*4+(dt()-.5)*9,.12+dt()*.1,.4+dt()*.5,1,6,3.2,1);if(u.impact>4)for(let Yt=0;Yt<4;Yt++)m.dust.emit(Bt.x,u.y+.5,Bt.z,(dt()-.5)*2,dt(),(dt()-.5)*2,.6,1.1,.35,.6,.58,.55);X.impact(u.impact),F.shake=Math.max(F.shake,Math.min(.55,u.impact*.035))}let qt=u.scrape;if(qt){let kt=Math.min(6,1+Math.floor(qt.speed/8));for(let Yt=0;Yt<kt;Yt++)m.sparks.emit(qt.x,u.y+.3+dt()*.3,qt.z,-u.vx*.25+qt.nx*2+(dt()-.5)*3,.5+dt()*2.5,-u.vz*.25+qt.nz*2+(dt()-.5)*3,.1+dt()*.08,.25+dt()*.3,1,6,3,.9);X.scrape?.(qt.speed)}}function hr(M){if(T.mode!=="race"||T.checkpoint>=T.route.length||T.countdown>.6)return;T.raceTime+=M,T.topSpeed=Math.max(T.topSpeed,Math.abs(u.speed));let[N,it]=T.route[T.checkpoint],pt=T.lastX,Ct=T.lastZ,ft=u.x-pt,Bt=u.z-Ct,qt=ft*ft+Bt*Bt,kt=qt?Ee.clamp(((N-pt)*ft+(it-Ct)*Bt)/qt,0,1):0;Math.hypot(N-pt-ft*kt,it-Ct-Bt*kt)<yc&&(T.checkpoint++,T.splits.push(T.raceTime),T.checkpoint===T.route.length?q():(L(),X.chime(),et(`CHECKPOINT ${T.checkpoint} / ${T.route.length}`),T.flash=1))}function Ts(M,N){u.contact=null,u.scrape=null,u.impact=0,v.update(M,T.time,u),g.peds=v.onRoad,g.update(M,T.time,u,ft=>X.horn(Math.hypot(ft.x-u.x,ft.z-u.z)),n);for(let ft of v.events)ft.type==="hit"&&(X.impact(Math.min(ft.speed,8)),F.shake=Math.max(F.shake,.08),T.state==="play"&&yi("pedestrian",u.x,u.z,1));if(T.state!=="play")return;Y(M)&&(N={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},u.vx=u.vz=0);let it=g.lastHit;it&&it.speed>4&&(T.crashes+=it.speed>7?1:0,it.police&&(it.car.mode!=="chase"||G.level<2)?yi("police",it.x,it.z,1,!1):(!it.parked||it.speed>8)&&yi("crash",it.x,it.z,1));let pt=u.impact,Ct=Math.ceil(M/(1/120));for(let ft=0;ft<Ct&&(T.lastX=u.x,T.lastZ=u.z,u.update(M/Ct,N,z),pt=Math.max(pt,u.impact),hr(M/Ct),!T.paused);ft++);h.collide(u,M,ft=>Ft(ft)),h.update(M,u),u.impact=Math.max(pt,u.impact),u.applyDamage(),$n(),G.update(M,u,T.time,n,T.mode==="free"&&xt!=="off");for(let ft of G.events)ft.type==="up"&&et(`WANTED  ${"\u2605".repeat(ft.level)}`),ft.type==="evaded"&&(et("YOU LOST THEM"),X.chime()),ft.type==="busted"&&_i()}function yi(M,N,it,pt,Ct=!0){T.mode!=="free"||xt==="off"||G.crime(M,N,it,pt,T.time,Ct)}let Pe=!1;function $n(){let M=qi(u.x),N=ds(u.z),it=Math.abs(u.x-M)<ne-1&&Math.abs(u.z-N)<ne-1;if(it&&!Pe&&Math.abs(u.speed)>9){let pt=Math.abs(u.vx)>Math.abs(u.vz)?1:0;xs(pt,T.time)===0&&yi("red light",u.x,u.z,1)}Pe=it}function _i(){et("BUSTED"),T.flash=1.5,X.impact(4),u.safeRespawn(),T.lastX=u.x,T.lastZ=u.z,F.snap(u)}let C=new Hs,j=0;t.info.autoReset=!1;function ot(){requestAnimationFrame(ot),t.info.reset();let M=C.getDelta(),N=Math.min(M,.05);T.time+=N,T.frame++;let it=$.poll();T.paused||(Ts(N,it),T.state==="play"?(ws(N),F.update(u,N)):F.orbit(u,T.time)),u.setLights(r.lampFactor,u.brake>0&&u.speed>.5,u.gear<0);let pt=ee.set(u.x-Math.sin(u.heading)*s.quality.shadowRange*.35,0,u.z-Math.cos(u.heading)*s.quality.shadowRange*.35);r.update(N,T.time,pt,n),xu.value.copy(r.sun.color).multiplyScalar(r.elevation>-1?r.sun.intensity:.1),o.update(r.lampFactor,T.time),j-=M,j<=0&&(j=.2,pu(n.position.x,n.position.z)),l.update(T.time,r.lampFactor),f.update(r.lampFactor),a.mirrorHide.length=0,F.mode===2&&a.mirrorHide.push(u.group),a.update(T.time,r),g.sync(r.lampFactor,u,T.time);for(let xe of Object.values(m))xe.update(T.paused?0:N);_.visible&&(R.position.y=12+Math.sin(T.time*2)*.6,R.rotation.y=T.time*.8,b.uniforms.intensity.value=.55+Math.sin(T.time*3)*.12,A.opacity=.65+Math.sin(T.time*3)*.15),t.toneMappingExposure=r.exposure;let Ct=s.grade.uniforms;Ct.time.value=T.time,gn=Ee.damp(gn,Es(),10,N),Ct.sunVisible.value=s.quality.grade?gn*.8:0,Ct.sunPos.value.set(ln.x*.5+.5,ln.y*.5+.5),Ct.sunColor.value.copy(rn.fogSunColor.value),n.getWorldDirection(fe);let ft=fe.dot(r.sunDir),Bt=Ee.smoothstep(r.elevation,-1,2)*(1-Ee.smoothstep(r.elevation,14,30)),qt=s.shafts.uniforms;qt.strength.value=ln.z<1?Ee.smoothstep(ft,.25,.85)*Bt*.9:0,qt.sunPos.value.copy(Ct.sunPos.value),qt.color.value.copy(r.sun.color).multiplyScalar(.9);let kt=ht==="wet"?.9:ht==="dry"?0:Ee.smoothstep(r.lampFactor,.15,.85)*.85;if(On.wetness.value=kt,z.wetness=kt,n.updateMatrixWorld(),vi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Ct.camBlur.value.set(0,0),Zi&&T.state==="play"&&!T.paused&&s.quality.grade){ee.copy(n.position).addScaledVector(fe,80).applyMatrix4(Ss);let xe=ee.x*.5,jt=ee.y*.5,Ie=Math.hypot(xe,jt);if(Ie<.12){let be=Ie>.035?.035/Ie:1;Ct.camBlur.value.set(xe*be,jt*be)}}Ss.copy(vi),Zi=!0;let Yt=Ee.clamp((Math.abs(u.speed)-30)/35,0,1);Ct.speedBlur.value=T.state==="play"&&s.quality.grade?Yt*.6+(u.boosting?.45:0):0,T.flash=Math.max(0,T.flash-N*3),Ct.flash.value=T.flash,Ct.night.value=r.nightFactor,s.bloom&&(s.bloom.strength=.36+r.lampFactor*.22),s.render(),T.state==="play"&&T.frame%2===0&&O.update(u,T,g,r,G),X.setSiren(T.state==="play"?G.sirenLevel(u):0);let se=r.clockLabel;se!==Ms&&(Ms=se,ri.textContent=se,bs.textContent=r.elevation>-1.5?"\u2600":"\u263E");let Te=_c(u.x,u.z),Ce=u.gear>0?u.def.gears[u.gear-1]*u.def.final:u.def.gears[0]*u.def.final;if(X.update({rpm:u.rpm,throttle:u.throttle,speed:u.speed,slip:u.slip+u.wheelspin*12,boosting:u.boosting,active:T.state==="play"&&!T.paused,shoreDistance:Math.abs(n.position.x-An),time:T.time,gear:u.gear,ratio:Ce,night:r.nightFactor,city:Te[2],nearTrees:Te[3]>.5?.6:.2}),T.state==="play"&&!T.paused&&s.adapt(M),Z&&(_t.frames++,_t.time+=M,_t.worst=Math.max(_t.worst,M),_t.time>=.5)){let xe=_t.frames/_t.time,jt=_t.time/_t.frames*1e3;vt.textContent=`${Math.round(xe)} FPS \xB7 ${jt.toFixed(1)} MS \xB7 WORST ${(_t.worst*1e3).toFixed(0)} \xB7 ${t.info.render.calls} DRAWS \xB7 ${(t.info.render.triangles/1e6).toFixed(1)}M TRIS \xB7 ${Math.round(s.scale*100)}% RES`,vt.classList.toggle("slow",xe<50&&xe>=30),vt.classList.toggle("bad",xe<30),_t.frames=0,_t.time=0,_t.worst=0}}u.onShift=M=>X.shift(M>0),await i("Warming up the engine\u2026"),F.orbit(u,0),r.update(0,0,ee.set(u.x,0,u.z),n),pu(u.x,u.z);try{await t.compileAsync(e,n)}catch{}ot(),requestAnimationFrame(()=>At("loading").classList.add("hidden")),window.__pacific={getState:()=>({state:T.state,mode:T.mode,paused:T.paused,speed:u.speed,heading:u.heading,nitro:u.nitro,position:{x:u.x,z:u.z,y:u.y},checkpoint:T.checkpoint,raceTime:T.raceTime,quality:V,time:r.hours,gear:u.gear,rpm:u.rpm,distanceTravelled:u.distance,renderScale:s.scale,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,wanted:G.level,countdown:T.countdown,car:d}),setTime:M=>{r.cycle=!1,r.setHours(M)},setQuality:bt,teleport:(M,N,it=0)=>{u.reset(M,N,it),F.snap(u)},step:(M,N={})=>{let it={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1,...N};for(let pt=0;pt<M&&!T.paused;pt+=1/60)T.time+=1/60,Ts(1/60,it);return F.snap(u),window.__pacific.getState()},parked:()=>({total:g.parked.length,near:g.nearParked.length,sample:g.nearParked.slice(0,3).map(M=>[M.type,+M.x.toFixed(1),+M.z.toFixed(1),M.slot])}),traffic:()=>g.cars.map(M=>({x:+M.x.toFixed(1),z:+M.z.toFixed(1),speed:+M.speed.toFixed(1),axis:M.axis,turn:!!M.turn,hit:!!M.hit})),reset:x,camera:wt,debug:{scene:e,atmosphere:r,pipeline:s,renderer:t,camera:n,rig:F,traffic:g,pedestrians:v,player:u,knock:h,world:z,audio:X,wanted:G,hud:O,game:T,input:$,city:o,vegetation:c,lodStats:Dd},selectCar:Pt}}F1().catch(pp);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
