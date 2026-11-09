var ff=0,wh=1,df=2;var Eh=1,sl=2,Ei=3,Oi=0,Sn=1,rn=2,ln=0,Bi=1,Nn=2,Th=3,Ah=4,rl=5,Xn=100,pf=101,mf=102,gf=103,xf=104,Gs=200,vf=201,yf=202,_f=203,Na=204,za=205,zo=206,Mf=207,Oo=208,bf=209,Sf=210,wf=211,Ef=212,Tf=213,Af=214,ol=0,al=1,ll=2,Ds=3,cl=4,hl=5,ul=6,fl=7,Rh=0,Rf=1,Cf=2,Gi=0,dl=1,pl=2,ml=3,zr=4,gl=5,xl=6,vl=7;var Ch=300,Vs=301,Ws=302,yl=303,_l=304,Bo=306,ei=1e3,rs=1001,Oa=1002,bn=1003,Pf=1004;var ko=1005;var ui=1006,Ml=1007;var cs=1008;var Yn=1009,Ph=1010,Ih=1011,Or=1012,bl=1013,hs=1014,di=1015,on=1016,Sl=1017,wl=1018,us=1020,Dh=35902,Lh=35899,Uh=1021,Fh=1022,zn=1023,Rr=1026,fs=1027,El=1028,Tl=1029,Nh=1030,Al=1031;var Rl=1033,Ho=33776,Go=33777,Vo=33778,Wo=33779,Cl=35840,Pl=35841,Il=35842,Dl=35843,Ll=36196,Ul=37492,Fl=37496,Nl=37808,zl=37809,Ol=37810,Bl=37811,kl=37812,Hl=37813,Gl=37814,Vl=37815,Wl=37816,Xl=37817,ql=37818,Yl=37819,Zl=37820,$l=37821,Kl=36492,Jl=36494,jl=36495,Ql=36283,tc=36284,ec=36285,nc=36286;var fo=2300,Ba=2301,Fa=2302,gh=2400,xh=2401,vh=2402;var If=3200,ic=3201;var sc=0,Df=1,Vi="",Mn="srgb",Ls="srgb-linear",po="linear",Fe="srgb";var Is=7680;var yh=519,Lf=512,Uf=513,Ff=514,zh=515,Nf=516,zf=517,Of=518,Bf=519,_h=35044,ii=35048;var Oh="300 es",hi=2e3,mo=2001;var ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=1234567,ho=Math.PI/180,Us=180/Math.PI;function Br(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[e&63|128]+wn[e>>8&255]+"-"+wn[e>>16&255]+wn[e>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function we(s,t,e){return Math.max(t,Math.min(e,s))}function Bh(s,t){return(s%t+t)%t}function vp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function yp(s,t,e){return s!==t?(e-s)/(t-s):0}function uo(s,t,e){return(1-e)*s+e*t}function _p(s,t,e,n){return uo(s,t,1-Math.exp(-e*n))}function Mp(s,t=1){return t-Math.abs(Bh(s,t*2)-t)}function bp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Sp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function wp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ep(s,t){return s+Math.random()*(t-s)}function Tp(s){return s*(.5-Math.random())}function Ap(s){s!==void 0&&(Bu=s);let t=Bu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rp(s){return s*ho}function Cp(s){return s*Us}function Pp(s){return(s&s-1)===0&&s!==0}function Ip(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Dp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lp(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),f=r((t-n)/2),p=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*l,c*f,c*p,a*h);break;case"YZY":s.set(c*p,a*l,c*f,a*h);break;case"ZXZ":s.set(c*f,c*p,a*l,a*h);break;case"XZX":s.set(a*l,c*g,c*u,a*h);break;case"YXY":s.set(c*u,a*l,c*g,a*h);break;case"ZYZ":s.set(c*g,c*u,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Re={DEG2RAD:ho,RAD2DEG:Us,generateUUID:Br,clamp:we,euclideanModulo:Bh,mapLinear:vp,inverseLerp:yp,lerp:uo,damp:_p,pingpong:Mp,smoothstep:bp,smootherstep:Sp,randInt:wp,randFloat:Ep,randFloatSpread:Tp,seededRandom:Ap,degToRad:Rp,radToDeg:Cp,isPowerOfTwo:Pp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Dp,setQuaternionFromProperEuler:Lp,normalize:In,denormalize:Tr},Zt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ge=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],h=n[i+1],l=n[i+2],f=n[i+3],p=r[o+0],u=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=u,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==p||h!==u||l!==g){let m=1-a,d=c*p+h*u+l*g+f*x,_=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let w=Math.sqrt(M),A=Math.atan2(w,d*_);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}let y=a*_;if(c=c*m+p*y,h=h*m+u*y,l=l*m+g*y,f=f*m+x*y,m===1-a){let w=1/Math.sqrt(c*c+h*h+l*l+f*f);c*=w,h*=w,l*=w,f*=w}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],h=n[i+2],l=n[i+3],f=r[o],p=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+l*f+c*u-h*p,t[e+1]=c*g+l*p+h*f-a*u,t[e+2]=h*g+l*u+a*p-c*f,t[e+3]=l*g-a*f-c*p-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(i/2),f=a(r/2),p=c(n/2),u=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=p*l*f+h*u*g,this._y=h*u*f-p*l*g,this._z=h*l*g+p*u*f,this._w=h*l*f-p*u*g;break;case"YXZ":this._x=p*l*f+h*u*g,this._y=h*u*f-p*l*g,this._z=h*l*g-p*u*f,this._w=h*l*f+p*u*g;break;case"ZXY":this._x=p*l*f-h*u*g,this._y=h*u*f+p*l*g,this._z=h*l*g+p*u*f,this._w=h*l*f-p*u*g;break;case"ZYX":this._x=p*l*f-h*u*g,this._y=h*u*f+p*l*g,this._z=h*l*g-p*u*f,this._w=h*l*f+p*u*g;break;case"YZX":this._x=p*l*f+h*u*g,this._y=h*u*f+p*l*g,this._z=h*l*g-p*u*f,this._w=h*l*f-p*u*g;break;case"XZY":this._x=p*l*f-h*u*g,this._y=h*u*f-p*l*g,this._z=h*l*g+p*u*f,this._w=h*l*f+p*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],f=e[10],p=n+a+f;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(l-c)*u,this._y=(r-h)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(l-c)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+h)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-h)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(c+l)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+h)/u,this._y=(c+l)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+i*h-r*c,this._y=i*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-i*a,this._w=o*l-n*a-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,a),f=Math.sin((1-e)*l)/h,p=Math.sin(e*l)/h;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=i*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ku.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*i-a*n),l=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+c*h+o*f-a*l,this.y=n+c*l+a*h-r*f,this.z=i+c*f+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yc.copy(this).projectOnVector(t),this.sub(Yc)}reflect(t){return this.sub(Yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new U,ku=new ge,pe=class s{constructor(t,e,n,i,r,o,a,c,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h)}set(t,e,n,i,r,o,a,c,h){let l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],f=n[7],p=n[2],u=n[5],g=n[8],x=i[0],m=i[3],d=i[6],_=i[1],M=i[4],y=i[7],w=i[2],A=i[5],I=i[8];return r[0]=o*x+a*_+c*w,r[3]=o*m+a*M+c*A,r[6]=o*d+a*y+c*I,r[1]=h*x+l*_+f*w,r[4]=h*m+l*M+f*A,r[7]=h*d+l*y+f*I,r[2]=p*x+u*_+g*w,r[5]=p*m+u*M+g*A,r[8]=p*d+u*y+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+i*r*h-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=l*o-a*h,p=a*c-l*r,u=h*r-o*c,g=e*f+n*p+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(i*h-l*n)*x,t[2]=(a*n-i*o)*x,t[3]=p*x,t[4]=(l*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=u*x,t[7]=(n*c-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-i*h,i*c,-i*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new pe;function kh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function go(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kf(){let s=go("canvas");return s.style.display="block",s}var Hu={};function Cr(s){s in Hu||(Hu[s]=!0,console.warn(s))}function Hf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Gu=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Up(){let s={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fe&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fe&&(i.r=Ar(i.r),i.g=Ar(i.g),i.b=Ar(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vi?po:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ls]:{primaries:t,whitePoint:n,transfer:po,toXYZ:Gu,fromXYZ:Vu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:n,transfer:Fe,toXYZ:Gu,fromXYZ:Vu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),s}var De=Up();function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ar(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var dr,ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{dr===void 0&&(dr=go("canvas")),dr.width=t.width,dr.height=t.height;let i=dr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=dr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fp=0,Pr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Br(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push($c(i[o].image)):r.push($c(i[o]))}else r=$c(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function $c(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Np=0,Kc=new U,Dn=class s extends ki{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=rs,i=rs,r=ui,o=cs,a=zn,c=Yn,h=s.DEFAULT_ANISOTROPY,l=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Br(),this.name="",this.source=new Pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ei:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ei:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Ch;Dn.DEFAULT_ANISOTROPY=1;var Ne=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,h=c[0],l=c[4],f=c[8],p=c[1],u=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(l-p)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+p)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(h+1)/2,y=(u+1)/2,w=(d+1)/2,A=(l+p)/4,I=(f+x)/4,D=(g+m)/4;return M>y&&M>w?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=I/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=D/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=I/r,i=D/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(p-l)*(p-l));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(p-l)/_,this.w=Math.acos((h+u+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=we(this.x,t.x,e.x),this.y=we(this.y,t.y,e.y),this.z=we(this.z,t.z,e.z),this.w=we(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=we(this.x,t,e),this.y=we(this.y,t,e),this.z=we(this.z,t,e),this.w=we(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(we(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ha=class extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new Dn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Pr(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends Ha{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xo=class extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ni=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),ma.subVectors(this.max,io),pr.subVectors(t.a,io),mr.subVectors(t.b,io),gr.subVectors(t.c,io),ji.subVectors(mr,pr),Qi.subVectors(gr,mr),As.subVectors(pr,gr);let e=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-As.z,As.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,As.z,0,-As.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-As.y,As.x,0];return!Jc(e,pr,mr,gr,ma)||(e=[1,0,0,0,1,0,0,0,1],!Jc(e,pr,mr,gr,ma))?!1:(ga.crossVectors(ji,Qi),e=[ga.x,ga.y,ga.z],Jc(e,pr,mr,gr,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new U,new U,new U,new U,new U,new U,new U,new U],ai=new U,pa=new ni,pr=new U,mr=new U,gr=new U,ji=new U,Qi=new U,As=new U,io=new U,ma=new U,ga=new U,Rs=new U;function Jc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Rs.fromArray(s,r);let a=i.x*Math.abs(Rs.x)+i.y*Math.abs(Rs.y)+i.z*Math.abs(Rs.z),c=t.dot(Rs),h=e.dot(Rs),l=n.dot(Rs);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}var zp=new ni,so=new U,jc=new U,fi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);let e=so.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(so,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(jc)),this.expandByPoint(so.copy(t.center).sub(jc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Li=new U,Qc=new U,xa=new U,ts=new U,th=new U,va=new U,eh=new U,vo=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qc.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),ts.copy(this.origin).sub(Qc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xa),a=ts.dot(this.direction),c=-ts.dot(xa),h=ts.lengthSq(),l=Math.abs(1-o*o),f,p,u,g;if(l>0)if(f=o*c-a,p=o*a-c,g=r*l,f>=0)if(p>=-g)if(p<=g){let x=1/l;f*=x,p*=x,u=f*(f+o*p+2*a)+p*(o*f+p+2*c)+h}else p=r,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*c)+h;else p=-r,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*c)+h;else p<=-g?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+p*(p+2*c)+h):p<=g?(f=0,p=Math.min(Math.max(-r,-c),r),u=p*(p+2*c)+h):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+p*(p+2*c)+h);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Qc).addScaledVector(xa,p),u}intersectSphere(t,e){Li.subVectors(t.center,this.origin);let n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,h=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,i=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,i=(t.min.x-p.x)*h),l>=0?(r=(t.min.y-p.y)*l,o=(t.max.y-p.y)*l):(r=(t.max.y-p.y)*l,o=(t.min.y-p.y)*l),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,i,r){th.subVectors(e,t),va.subVectors(n,t),eh.crossVectors(th,va);let o=this.direction.dot(eh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,t);let c=a*this.direction.dot(va.crossVectors(ts,va));if(c<0)return null;let h=a*this.direction.dot(th.cross(ts));if(h<0||c+h>o)return null;let l=-a*ts.dot(eh);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class s{constructor(t,e,n,i,r,o,a,c,h,l,f,p,u,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h,l,f,p,u,g,x,m)}set(t,e,n,i,r,o,a,c,h,l,f,p,u,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=h,d[6]=l,d[10]=f,d[14]=p,d[3]=u,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/xr.setFromMatrixColumn(t,0).length(),r=1/xr.setFromMatrixColumn(t,1).length(),o=1/xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let p=o*l,u=o*f,g=a*l,x=a*f;e[0]=c*l,e[4]=-c*f,e[8]=h,e[1]=u+g*h,e[5]=p-x*h,e[9]=-a*c,e[2]=x-p*h,e[6]=g+u*h,e[10]=o*c}else if(t.order==="YXZ"){let p=c*l,u=c*f,g=h*l,x=h*f;e[0]=p+x*a,e[4]=g*a-u,e[8]=o*h,e[1]=o*f,e[5]=o*l,e[9]=-a,e[2]=u*a-g,e[6]=x+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*l,u=c*f,g=h*l,x=h*f;e[0]=p-x*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*l,e[9]=x-p*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*l,u=o*f,g=a*l,x=a*f;e[0]=c*l,e[4]=g*h-u,e[8]=p*h+x,e[1]=c*f,e[5]=x*h+p,e[9]=u*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,u=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=x-p*f,e[8]=g*f+u,e[1]=f,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=u*f+g,e[10]=p-x*f}else if(t.order==="XZY"){let p=o*c,u=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=-f,e[8]=h*l,e[1]=p*f+x,e[5]=o*l,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*l,e[10]=x*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,Bp)}lookAt(t,e,n){let i=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),es.crossVectors(n,Vn),es.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),es.crossVectors(n,Vn)),es.normalize(),ya.crossVectors(Vn,es),i[0]=es.x,i[4]=ya.x,i[8]=Vn.x,i[1]=es.y,i[5]=ya.y,i[9]=Vn.y,i[2]=es.z,i[6]=ya.z,i[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],f=n[5],p=n[9],u=n[13],g=n[2],x=n[6],m=n[10],d=n[14],_=n[3],M=n[7],y=n[11],w=n[15],A=i[0],I=i[4],D=i[8],b=i[12],S=i[1],N=i[5],H=i[9],B=i[13],O=i[2],Y=i[6],X=i[10],it=i[14],R=i[3],ut=i[7],xt=i[11],Et=i[15];return r[0]=o*A+a*S+c*O+h*R,r[4]=o*I+a*N+c*Y+h*ut,r[8]=o*D+a*H+c*X+h*xt,r[12]=o*b+a*B+c*it+h*Et,r[1]=l*A+f*S+p*O+u*R,r[5]=l*I+f*N+p*Y+u*ut,r[9]=l*D+f*H+p*X+u*xt,r[13]=l*b+f*B+p*it+u*Et,r[2]=g*A+x*S+m*O+d*R,r[6]=g*I+x*N+m*Y+d*ut,r[10]=g*D+x*H+m*X+d*xt,r[14]=g*b+x*B+m*it+d*Et,r[3]=_*A+M*S+y*O+w*R,r[7]=_*I+M*N+y*Y+w*ut,r[11]=_*D+M*H+y*X+w*xt,r[15]=_*b+M*B+y*it+w*Et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],f=t[6],p=t[10],u=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*c*f-i*h*f-r*a*p+n*h*p+i*a*u-n*c*u)+x*(+e*c*u-e*h*p+r*o*p-i*o*u+i*h*l-r*c*l)+m*(+e*h*f-e*a*u-r*o*f+n*o*u+r*a*l-n*h*l)+d*(-i*a*l-e*c*f+e*a*p+i*o*f-n*o*p+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=t[9],p=t[10],u=t[11],g=t[12],x=t[13],m=t[14],d=t[15],_=f*m*h-x*p*h+x*c*u-a*m*u-f*c*d+a*p*d,M=g*p*h-l*m*h-g*c*u+o*m*u+l*c*d-o*p*d,y=l*x*h-g*f*h+g*a*u-o*x*u-l*a*d+o*f*d,w=g*f*c-l*x*c-g*a*p+o*x*p+l*a*m-o*f*m,A=e*_+n*M+i*y+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return t[0]=_*I,t[1]=(x*p*r-f*m*r-x*i*u+n*m*u+f*i*d-n*p*d)*I,t[2]=(a*m*r-x*c*r+x*i*h-n*m*h-a*i*d+n*c*d)*I,t[3]=(f*c*r-a*p*r-f*i*h+n*p*h+a*i*u-n*c*u)*I,t[4]=M*I,t[5]=(l*m*r-g*p*r+g*i*u-e*m*u-l*i*d+e*p*d)*I,t[6]=(g*c*r-o*m*r-g*i*h+e*m*h+o*i*d-e*c*d)*I,t[7]=(o*p*r-l*c*r+l*i*h-e*p*h-o*i*u+e*c*u)*I,t[8]=y*I,t[9]=(g*f*r-l*x*r-g*n*u+e*x*u+l*n*d-e*f*d)*I,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*d+e*a*d)*I,t[11]=(l*a*r-o*f*r-l*n*h+e*f*h+o*n*u-e*a*u)*I,t[12]=w*I,t[13]=(l*x*i-g*f*i+g*n*p-e*x*p-l*n*m+e*f*m)*I,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*m-e*a*m)*I,t[15]=(o*f*i-l*a*i+l*n*c-e*f*c-o*n*p+e*a*p)*I,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-i*c,h*c+i*a,0,h*a+i*c,l*a+n,l*c-i*o,0,h*c-i*a,l*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,f=a+a,p=r*h,u=r*l,g=r*f,x=o*l,m=o*f,d=a*f,_=c*h,M=c*l,y=c*f,w=n.x,A=n.y,I=n.z;return i[0]=(1-(x+d))*w,i[1]=(u+y)*w,i[2]=(g-M)*w,i[3]=0,i[4]=(u-y)*A,i[5]=(1-(p+d))*A,i[6]=(m+_)*A,i[7]=0,i[8]=(g+M)*I,i[9]=(m-_)*I,i[10]=(1-(p+x))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=xr.set(i[0],i[1],i[2]).length(),o=xr.set(i[4],i[5],i[6]).length(),a=xr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],li.copy(this);let h=1/r,l=1/o,f=1/a;return li.elements[0]*=h,li.elements[1]*=h,li.elements[2]*=h,li.elements[4]*=l,li.elements[5]*=l,li.elements[6]*=l,li.elements[8]*=f,li.elements[9]*=f,li.elements[10]*=f,e.setFromRotationMatrix(li),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=hi,c=!1){let h=this.elements,l=2*r/(e-t),f=2*r/(n-i),p=(e+t)/(e-t),u=(n+i)/(n-i),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===hi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===mo)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=f,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=hi,c=!1){let h=this.elements,l=2/(e-t),f=2/(n-i),p=-(e+t)/(e-t),u=-(n+i)/(n-i),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===hi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===mo)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=f,h[9]=0,h[13]=u,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xr=new U,li=new Ht,Op=new U(0,0,0),Bp=new U(1,1,1),es=new U,ya=new U,Vn=new U,Wu=new Ht,Xu=new ge,en=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],h=i[5],l=i[9],f=i[2],p=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-we(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var yo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kp=0,qu=new U,vr=new ge,Ui=new Ht,_a=new U,ro=new U,Hp=new U,Gp=new ge,Yu=new U(1,0,0),Zu=new U(0,1,0),$u=new U(0,0,1),Ku={type:"added"},Vp={type:"removed"},yr={type:"childadded",child:null},nh={type:"childremoved",child:null},nn=class s extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new en,n=new ge,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new pe}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(Yu,t)}rotateY(t){return this.rotateOnAxis(Zu,t)}rotateZ(t){return this.rotateOnAxis($u,t)}translateOnAxis(t,e){return qu.copy(t).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yu,t)}translateY(t){return this.translateOnAxis(Zu,t)}translateZ(t){return this.translateOnAxis($u,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_a.copy(t):_a.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ro,_a,this.up):Ui.lookAt(_a,ro,this.up),this.quaternion.setFromRotationMatrix(Ui),i&&(Ui.extractRotation(i.matrixWorld),vr.setFromRotationMatrix(Ui),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ku),yr.child=t,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vp),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ku),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,t,Hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,Gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let f=c[h];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),f=o(t.shapes),p=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let h in a){let l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};nn.DEFAULT_UP=new U(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=new U,Fi=new U,ih=new U,Ni=new U,_r=new U,Mr=new U,Ju=new U,sh=new U,rh=new U,oh=new U,ah=new Ne,lh=new Ne,ch=new Ne,ss=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ci.subVectors(t,e),i.cross(ci);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ci.subVectors(i,e),Fi.subVectors(n,e),ih.subVectors(t,e);let o=ci.dot(ci),a=ci.dot(Fi),c=ci.dot(ih),h=Fi.dot(Fi),l=Fi.dot(ih),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,u=(h*c-a*l)*p,g=(o*l-a*c)*p;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return ah.setScalar(0),lh.setScalar(0),ch.setScalar(0),ah.fromBufferAttribute(t,e),lh.fromBufferAttribute(t,n),ch.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ah,r.x),o.addScaledVector(lh,r.y),o.addScaledVector(ch,r.z),o}static isFrontFacing(t,e,n,i){return ci.subVectors(n,e),Fi.subVectors(t,e),ci.cross(Fi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ci.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;_r.subVectors(i,n),Mr.subVectors(r,n),sh.subVectors(t,n);let c=_r.dot(sh),h=Mr.dot(sh);if(c<=0&&h<=0)return e.copy(n);rh.subVectors(t,i);let l=_r.dot(rh),f=Mr.dot(rh);if(l>=0&&f<=l)return e.copy(i);let p=c*f-l*h;if(p<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(_r,o);oh.subVectors(t,r);let u=_r.dot(oh),g=Mr.dot(oh);if(g>=0&&u<=g)return e.copy(r);let x=u*h-c*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(Mr,a);let m=l*g-u*f;if(m<=0&&f-l>=0&&u-g>=0)return Ju.subVectors(r,i),a=(f-l)/(f-l+(u-g)),e.copy(i).addScaledVector(Ju,a);let d=1/(m+x+p);return o=x*d,a=p*d,e.copy(n).addScaledVector(_r,o).addScaledVector(Mr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function hh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=De.workingColorSpace){return this.r=t,this.g=e,this.b=n,De.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=De.workingColorSpace){if(t=Bh(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=hh(o,r,t+1/3),this.g=hh(o,r,t),this.b=hh(o,r,t-1/3)}return De.colorSpaceToWorking(this,i),this}setStyle(t,e=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){let n=Gf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return De.workingToColorSpace(En.copy(this),t),Math.round(we(En.r*255,0,255))*65536+Math.round(we(En.g*255,0,255))*256+Math.round(we(En.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=De.workingColorSpace){De.workingToColorSpace(En.copy(this),e);let n=En.r,i=En.g,r=En.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,h,l=(a+o)/2;if(a===o)c=0,h=0;else{let f=o-a;switch(h=l<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=De.workingColorSpace){return De.workingToColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=Mn){De.workingToColorSpace(En.copy(this),t);let e=En.r,n=En.g,i=En.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(Ma);let n=uo(ns.h,Ma.h,e),i=uo(ns.s,Ma.s,e),r=uo(ns.l,Ma.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new Ut;Ut.NAMES=Gf;var Wp=0,bi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=Bi,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=za,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},sn=class extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var an=new U,ba=new Zt,Xp=0,qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ba.fromBufferAttribute(this,e),ba.applyMatrix3(t),this.setXY(e,ba.x,ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=In(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=In(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array),i=In(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=In(e,this.array),n=In(n,this.array),i=In(i,this.array),r=In(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_h&&(t.usage=this.usage),t}};var _o=class extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Mo=class extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},qp=0,Qn=new Ht,uh=new nn,br=new U,Wn=new ni,oo=new ni,vn=new U,Ue=class s extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kh(t)?Mo:_o)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return uh.lookAt(t),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(Wn.min,oo.min),Wn.expandByPoint(vn),vn.addVectors(Wn.max,oo.max),Wn.expandByPoint(vn)):(Wn.expandByPoint(oo.min),Wn.expandByPoint(oo.max))}Wn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)vn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(vn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)vn.fromBufferAttribute(a,h),c&&(br.fromBufferAttribute(t,h),vn.add(br)),i=Math.max(i,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new U,c[D]=new U;let h=new U,l=new U,f=new U,p=new Zt,u=new Zt,g=new Zt,x=new U,m=new U;function d(D,b,S){h.fromBufferAttribute(n,D),l.fromBufferAttribute(n,b),f.fromBufferAttribute(n,S),p.fromBufferAttribute(r,D),u.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),l.sub(h),f.sub(h),u.sub(p),g.sub(p);let N=1/(u.x*g.y-g.x*u.y);isFinite(N)&&(x.copy(l).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(N),m.copy(f).multiplyScalar(u.x).addScaledVector(l,-g.x).multiplyScalar(N),a[D].add(x),a[b].add(x),a[S].add(x),c[D].add(m),c[b].add(m),c[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let D=0,b=_.length;D<b;++D){let S=_[D],N=S.start,H=S.count;for(let B=N,O=N+H;B<O;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new U,y=new U,w=new U,A=new U;function I(D){w.fromBufferAttribute(i,D),A.copy(w);let b=a[D];M.copy(b),M.sub(w.multiplyScalar(w.dot(b))).normalize(),y.crossVectors(A,b);let N=y.dot(c[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,N)}for(let D=0,b=_.length;D<b;++D){let S=_[D],N=S.start,H=S.count;for(let B=N,O=N+H;B<O;B+=3)I(t.getX(B+0)),I(t.getX(B+1)),I(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);let i=new U,r=new U,o=new U,a=new U,c=new U,h=new U,l=new U,f=new U;if(t)for(let p=0,u=t.count;p<u;p+=3){let g=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let p=0,u=e.count;p<u;p+=3)i.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),n.setXYZ(p+0,l.x,l.y,l.z),n.setXYZ(p+1,l.x,l.y,l.z),n.setXYZ(p+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(a,c){let h=a.array,l=a.itemSize,f=a.normalized,p=new h.constructor(c.length*l),u=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*l;for(let d=0;d<l;d++)p[g++]=h[u++]}return new qe(p,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let l=0,f=h.length;l<f;l++){let p=h[l],u=t(p,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let f=0,p=h.length;f<p;f++){let u=h[f];l.push(u.toJSON(t.data))}l.length>0&&(i[c]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let l=i[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],f=r[h];for(let p=0,u=f.length;p<u;p++)l.push(f[p].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,l=o.length;h<l;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ju=new Ht,Cs=new vo,Sa=new fi,Qu=new U,wa=new U,Ea=new U,Ta=new U,fh=new U,Aa=new U,tf=new U,Ra=new U,Bt=class extends nn{constructor(t=new Ue,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Aa.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=a[c],f=r[c];l!==0&&(fh.fromBufferAttribute(f,t),o?Aa.addScaledVector(fh,l):Aa.addScaledVector(fh.sub(e),l))}e.add(Aa)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),Cs.copy(t.ray).recast(t.near),!(Sa.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Sa,Qu)===null||Cs.origin.distanceToSquared(Qu)>(t.far-t.near)**2))&&(ju.copy(r).invert(),Cs.copy(t.ray).applyMatrix4(ju),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cs)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,f=r.attributes.normal,p=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],d=o[m.materialIndex],_=Math.max(m.start,u.start),M=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=_,w=M;y<w;y+=3){let A=a.getX(y),I=a.getX(y+1),D=a.getX(y+2);i=Ca(this,d,t,n,h,l,f,A,I,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=g,d=x;m<d;m+=3){let _=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);i=Ca(this,o,t,n,h,l,f,_,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],d=o[m.materialIndex],_=Math.max(m.start,u.start),M=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let y=_,w=M;y<w;y+=3){let A=y,I=y+1,D=y+2;i=Ca(this,d,t,n,h,l,f,A,I,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=g,d=x;m<d;m+=3){let _=m,M=m+1,y=m+2;i=Ca(this,o,t,n,h,l,f,_,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Yp(s,t,e,n,i,r,o,a){let c;if(t.side===Sn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Oi,a),c===null)return null;Ra.copy(a),Ra.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Ra);return h<e.near||h>e.far?null:{distance:h,point:Ra.clone(),object:s}}function Ca(s,t,e,n,i,r,o,a,c,h){s.getVertexPosition(a,wa),s.getVertexPosition(c,Ea),s.getVertexPosition(h,Ta);let l=Yp(s,t,e,n,wa,Ea,Ta,tf);if(l){let f=new U;ss.getBarycoord(tf,wa,Ea,Ta,f),i&&(l.uv=ss.getInterpolatedAttribute(i,a,c,h,f,new Zt)),r&&(l.uv1=ss.getInterpolatedAttribute(r,a,c,h,f,new Zt)),o&&(l.normal=ss.getInterpolatedAttribute(o,a,c,h,f,new U),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let p={a,b:c,c:h,normal:new U,materialIndex:0};ss.getNormal(wa,Ea,Ta,p.normal),l.face=p,l.barycoord=f}return l}var Kt=class s extends Ue{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],l=[],f=[],p=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ne(h,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(f,2));function g(x,m,d,_,M,y,w,A,I,D,b){let S=y/I,N=w/D,H=y/2,B=w/2,O=A/2,Y=I+1,X=D+1,it=0,R=0,ut=new U;for(let xt=0;xt<X;xt++){let Et=xt*N-B;for(let Lt=0;Lt<Y;Lt++){let Vt=Lt*S-H;ut[x]=Vt*_,ut[m]=Et*M,ut[d]=O,h.push(ut.x,ut.y,ut.z),ut[x]=0,ut[m]=0,ut[d]=A>0?1:-1,l.push(ut.x,ut.y,ut.z),f.push(Lt/I),f.push(1-xt/D),it+=1}}for(let xt=0;xt<D;xt++)for(let Et=0;Et<I;Et++){let Lt=p+Et+Y*xt,Vt=p+Et+Y*(xt+1),qt=p+(Et+1)+Y*(xt+1),$t=p+(Et+1)+Y*xt;c.push(Lt,Vt,$t),c.push(Vt,qt,$t),R+=6}a.addGroup(u,R,b),u+=R,p+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Tn(s){let t={};for(let e=0;e<s.length;e++){let n=Xs(s[e]);for(let i in n)t[i]=n[i]}return t}function Zp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Hh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}var mn={clone:Xs,merge:Tn},$p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$p,this.fragmentShader=Kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},bo=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},is=new U,ef=new Zt,nf=new Zt,dn=class extends bo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,ef,nf),e.subVectors(nf,ef)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ho*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/h,i*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Sr=-90,wr=1,Ir=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new dn(Sr,wr,t,e);i.layers=this.layers,this.add(i);let r=new dn(Sr,wr,t,e);r.layers=this.layers,this.add(r);let o=new dn(Sr,wr,t,e);o.layers=this.layers,this.add(o);let a=new dn(Sr,wr,t,e);a.layers=this.layers,this.add(a);let c=new dn(Sr,wr,t,e);c.layers=this.layers,this.add(c);let h=new dn(Sr,wr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,l]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(f,p,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},So=class extends Dn{constructor(t=[],e=Vs,n,i,r,o,a,c,h,l){super(t,e,n,i,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dr=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new So(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kt(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:ln});r.uniforms.tEquirect.value=e;let o=new Bt(i,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=ui),new Ir(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Be=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jp={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(h,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let l=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=l.position.distanceTo(f.position),u=.02,g=.005;h.inputState.pinching&&p>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fs=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Si=class extends Dn{constructor(t=null,e=1,n=1,i,r,o,a,c,h=bn,l=bn,f,p){super(null,o,a,c,h,l,i,r,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ge=class extends qe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Er=new Ht,sf=new Ht,Pa=[],rf=new ni,jp=new Ht,ao=new Bt,lo=new fi,xe=class extends Bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ge(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Er),rf.copy(t.boundingBox).applyMatrix4(Er),this.boundingBox.union(rf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Er),lo.copy(t.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(lo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(n),t.ray.intersectsSphere(lo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Er),sf.multiplyMatrices(n,Er),ao.matrixWorld=sf,ao.raycast(t,Pa);for(let o=0,a=Pa.length;o<a;o++){let c=Pa[o];c.instanceId=r,c.object=this,e.push(c)}Pa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ge(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Si(new Float32Array(i*this.count),i,this.count,El,di));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},dh=new U,Qp=new U,t0=new pe,ti=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=dh.subVectors(n,e).cross(Qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(dh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||t0.getNormalMatrix(t),i=this.coplanarPoint(dh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new fi,e0=new Zt(.5,.5),Ia=new U,os=class{constructor(t=new ti,e=new ti,n=new ti,i=new ti,r=new ti,o=new ti){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],h=r[3],l=r[4],f=r[5],p=r[6],u=r[7],g=r[8],x=r[9],m=r[10],d=r[11],_=r[12],M=r[13],y=r[14],w=r[15];if(i[0].setComponents(h-o,u-l,d-g,w-_).normalize(),i[1].setComponents(h+o,u+l,d+g,w+_).normalize(),i[2].setComponents(h+a,u+f,d+x,w+M).normalize(),i[3].setComponents(h-a,u-f,d-x,w-M).normalize(),n)i[4].setComponents(c,p,m,y).normalize(),i[5].setComponents(h-c,u-p,d-m,w-y).normalize();else if(i[4].setComponents(h-c,u-p,d-m,w-y).normalize(),e===hi)i[5].setComponents(h+c,u+p,d+m,w+y).normalize();else if(e===mo)i[5].setComponents(c,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);let e=e0.distanceTo(t.center);return Ps.radius=.7071067811865476+e,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ia.x=i.normal.x>0?t.max.x:t.min.x,Ia.y=i.normal.y>0?t.max.y:t.min.y,Ia.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ur=class extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Va=new U,Wa=new U,of=new Ht,co=new vo,Da=new fi,ph=new U,af=new U,Xa=class extends nn{constructor(t=new Ue,e=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Va.fromBufferAttribute(e,i-1),Wa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Va.distanceTo(Wa);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,t.ray.intersectsSphere(Da)===!1)return;of.copy(i).invert(),co.copy(t.ray).applyMatrix4(of);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,l=n.index,p=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let x=u,m=g-1;x<m;x+=h){let d=l.getX(x),_=l.getX(x+1),M=La(this,t,co,c,d,_,x);M&&e.push(M)}if(this.isLineLoop){let x=l.getX(g-1),m=l.getX(u),d=La(this,t,co,c,x,m,g-1);d&&e.push(d)}}else{let u=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=u,m=g-1;x<m;x+=h){let d=La(this,t,co,c,x,x+1,x);d&&e.push(d)}if(this.isLineLoop){let x=La(this,t,co,c,g-1,u,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function La(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(Va.fromBufferAttribute(a,i),Wa.fromBufferAttribute(a,r),e.distanceSqToSegment(Va,Wa,ph,af)>n)return;ph.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(ph);if(!(h<t.near||h>t.far))return{distance:h,point:af.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var lf=new U,cf=new U,Eo=class extends Xa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)lf.fromBufferAttribute(e,i),cf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lf.distanceTo(cf);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ns=class extends Dn{constructor(t,e,n,i,r,o,a,c,h){super(t,e,n,i,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},zs=class extends Dn{constructor(t,e,n=hs,i,r,o,a=bn,c=bn,h,l=Rr,f=1){if(l!==Rr&&l!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:f};super(p,i,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},To=class extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ao=class s extends Ue{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],h=new U,l=new Zt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=e;f++,p+=3){let u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),o.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(o[p]/t+1)/2,l.y=(o[p+1]/t+1)/2,c.push(l.x,l.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ae=class s extends Ue{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;i=Math.floor(i),r=Math.floor(r);let l=[],f=[],p=[],u=[],g=0,x=[],m=n/2,d=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(l),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(p,3)),this.setAttribute("uv",new ne(u,2));function _(){let y=new U,w=new U,A=0,I=(e-t)/n;for(let D=0;D<=r;D++){let b=[],S=D/r,N=S*(e-t)+t;for(let H=0;H<=i;H++){let B=H/i,O=B*c+a,Y=Math.sin(O),X=Math.cos(O);w.x=N*Y,w.y=-S*n+m,w.z=N*X,f.push(w.x,w.y,w.z),y.set(Y,I,X).normalize(),p.push(y.x,y.y,y.z),u.push(B,1-S),b.push(g++)}x.push(b)}for(let D=0;D<i;D++)for(let b=0;b<r;b++){let S=x[b][D],N=x[b+1][D],H=x[b+1][D+1],B=x[b][D+1];(t>0||b!==0)&&(l.push(S,N,B),A+=3),(e>0||b!==r-1)&&(l.push(N,H,B),A+=3)}h.addGroup(d,A,0),d+=A}function M(y){let w=g,A=new Zt,I=new U,D=0,b=y===!0?t:e,S=y===!0?1:-1;for(let H=1;H<=i;H++)f.push(0,m*S,0),p.push(0,S,0),u.push(.5,.5),g++;let N=g;for(let H=0;H<=i;H++){let O=H/i*c+a,Y=Math.cos(O),X=Math.sin(O);I.x=b*X,I.y=m*S,I.z=b*Y,f.push(I.x,I.y,I.z),p.push(0,S,0),A.x=Y*.5+.5,A.y=X*.5*S+.5,u.push(A.x,A.y),g++}for(let H=0;H<i;H++){let B=w+H,O=N+H;y===!0?l.push(O,O+1,B):l.push(O+1,O,B),D+=3}h.addGroup(d,D,y===!0?1:2),d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wi=class s extends ae{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ro=class s extends Ue{constructor(t=[new Zt(0,-.5),new Zt(.5,0),new Zt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=we(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],l=1/e,f=new U,p=new Zt,u=new U,g=new U,x=new U,m=0,d=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,u.x=d*1,u.y=-m,u.z=d*0,x.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,u.x=d*1,u.y=-m,u.z=d*0,g.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),c.push(u.x,u.y,u.z),x.copy(g)}for(let _=0;_<=e;_++){let M=n+_*l*i,y=Math.sin(M),w=Math.cos(M);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*y,f.y=t[A].y,f.z=t[A].x*w,o.push(f.x,f.y,f.z),p.x=_/e,p.y=A/(t.length-1),a.push(p.x,p.y);let I=c[3*A+0]*y,D=c[3*A+1],b=c[3*A+0]*w;h.push(I,D,b)}}for(let _=0;_<e;_++)for(let M=0;M<t.length-1;M++){let y=M+_*t.length,w=y,A=y+t.length,I=y+t.length+1,D=y+1;r.push(w,A,D),r.push(I,D,A)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Oe=class s extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),h=a+1,l=c+1,f=t/a,p=e/c,u=[],g=[],x=[],m=[];for(let d=0;d<l;d++){let _=d*p-o;for(let M=0;M<h;M++){let y=M*f-r;g.push(y,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<a;_++){let M=_+h*d,y=_+h*(d+1),w=_+1+h*(d+1),A=_+1+h*d;u.push(M,y,A),u.push(y,w,A)}this.setIndex(u),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Co=class s extends Ue{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],h=[],l=[],f=t,p=(e-t)/i,u=new U,g=new Zt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let d=r+m/n*o;u.x=f*Math.cos(d),u.y=f*Math.sin(d),c.push(u.x,u.y,u.z),h.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,l.push(g.x,g.y)}f+=p}for(let x=0;x<i;x++){let m=x*(n+1);for(let d=0;d<n;d++){let _=d+m,M=_,y=_+n+1,w=_+n+2,A=_+1;a.push(M,y,A),a.push(y,w,A)}}this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var pn=class s extends Ue{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,l=[],f=new U,p=new U,u=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let _=[],M=d/n,y=0;d===0&&o===0?y=.5/e:d===n&&c===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){let A=w/e;f.x=-t*Math.cos(i+A*r)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(i+A*r)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),m.push(A+y,1-M),_.push(h++)}l.push(_)}for(let d=0;d<n;d++)for(let _=0;_<e;_++){let M=l[d][_+1],y=l[d][_],w=l[d+1][_],A=l[d+1][_+1];(d!==0||o>0)&&u.push(M,y,A),(d!==n-1||c<Math.PI)&&u.push(y,w,A)}this.setIndex(u),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Hi=class s extends Ue{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],h=[],l=new U,f=new U,p=new U;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){let x=g/i*r,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),p.subVectors(f,l).normalize(),c.push(p.x,p.y,p.z),h.push(g/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){let x=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,d=(i+1)*(u-1)+g,_=(i+1)*u+g;o.push(x,m,_),o.push(m,d,_)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Po=class extends Ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kt=class extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Os=class extends kt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Io=class extends bi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var Fr=class extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ua(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function n0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Bs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ya=class extends Bs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case xh:r=t,a=2*e-n;break;case vh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case xh:o=t,c=2*n-e;break;case vh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,d=-p*m+2*p*x-p*g,_=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,M=(-1-u)*m+(1.5+u)*x+.5*g,y=u*m-u*x;for(let w=0;w!==a;++w)r[w]=d*o[l+w]+_*o[h+w]+M*o[c+w]+y*o[f+w];return r}},Za=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=(n-e)/(i-e),f=1-l;for(let p=0;p!==a;++p)r[p]=o[h+p]*f+o[c+p]*l;return r}},$a=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},qn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ua(e,this.TimeBufferType),this.values=Ua(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ua(t.times,Array),values:Ua(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fo:e=this.InterpolantFactoryMethodDiscrete;break;case Ba:e=this.InterpolantFactoryMethodLinear;break;case Fa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return Fa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&n0(i))for(let a=0,c=i.length;a!==c;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],l=t[a+1];if(h!==l&&(a!==1||h!==t[0]))if(i)c=!0;else{let f=a*n,p=f-n,u=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[p+g]||x!==e[u+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,p=o*n;for(let u=0;u!==n;++u)e[p+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Ba;var as=class extends qn{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=fo;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends qn{constructor(t,e,n,i){super(t,e,n,i)}};Ka.prototype.ValueTypeName="color";var Ja=class extends qn{constructor(t,e,n,i){super(t,e,n,i)}};Ja.prototype.ValueTypeName="number";var ja=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),h=t*a;for(let l=h+a;h!==l;h+=4)ge.slerpFlat(r,0,o,h-a,o,h,c);return r}},Do=class extends qn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends qn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=fo;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends qn{constructor(t,e,n,i){super(t,e,n,i)}};Qa.prototype.ValueTypeName="vector";var tl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,f){return h.push(l,f),this},this.removeHandler=function(l){let f=h.indexOf(l);return f!==-1&&h.splice(f,2),this},this.getHandler=function(l){for(let f=0,p=h.length;f<p;f+=2){let u=h[f],g=h[f+1];if(u.global&&(u.lastIndex=0),u.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Vf=new tl,el=class{constructor(t){this.manager=t!==void 0?t:Vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};el.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Lo=class extends Nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},mh=new Ht,hf=new U,uf=new U,nl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;hf.setFromMatrixPosition(t.matrixWorld),e.position.copy(hf),uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uf),e.updateMatrixWorld(),mh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mh=class extends nl{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Us*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Uo=class extends Nr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ks=class extends bo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bh=class extends nl{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fo=class extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new bh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var No=class extends Ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var il=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Hs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Gh="\\[\\]\\.:\\/",i0=new RegExp("["+Gh+"]","g"),Vh="[^"+Gh+"]",s0="[^"+Gh.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",Vh),o0=/(WCOD+)?/.source.replace("WCOD",s0),a0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),c0=new RegExp("^"+r0+o0+a0+l0+"$"),h0=["material","materials","bones","map"],Sh=class{constructor(t,e,n){let i=n||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(t){let e=c0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);h0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=Sh;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hy=new Float32Array(1);function Wh(s,t,e,n){let i=u0(n);switch(e){case Uh:return s*t;case El:return s*t/i.components*i.byteLength;case Tl:return s*t/i.components*i.byteLength;case Nh:return s*t*2/i.components*i.byteLength;case Al:return s*t*2/i.components*i.byteLength;case Fh:return s*t*3/i.components*i.byteLength;case zn:return s*t*4/i.components*i.byteLength;case Rl:return s*t*4/i.components*i.byteLength;case Ho:case Go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vo:case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Dl:return Math.max(s,16)*Math.max(t,8)/4;case Cl:case Il:return Math.max(s,8)*Math.max(t,8)/2;case Ll:case Ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case kl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ql:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Kl:case Jl:case jl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ql:case tc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ec:case nc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function u0(s){switch(s){case Yn:case Ph:return{byteLength:1,components:1};case Or:case Ih:case on:return{byteLength:2,components:1};case Sl:case wl:return{byteLength:2,components:4};case hs:case bl:case di:return{byteLength:4,components:1};case Dh:case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function dd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function v0(s){let t=new WeakMap;function e(a,c){let h=a.array,l=a.usage,f=h.byteLength,p=s.createBuffer();s.bindBuffer(c,p),s.bufferData(c,h,l),a.onUploadCallback();let u;if(h instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)u=s.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=s.SHORT;else if(h instanceof Uint32Array)u=s.UNSIGNED_INT;else if(h instanceof Int32Array)u=s.INT;else if(h instanceof Int8Array)u=s.BYTE;else if(h instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){let l=c.array,f=c.updateRanges;if(s.bindBuffer(h,a),f.length===0)s.bufferSubData(h,0,l);else{f.sort((u,g)=>u.start-g.start);let p=0;for(let u=1;u<f.length;u++){let g=f[p],x=f[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,f[p]=x)}f.length=p+1;for(let u=0,g=f.length;u<g;u++){let x=f[u];s.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:i,remove:r,update:o}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
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
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D0=`#ifdef USE_IRIDESCENCE
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
#endif`,L0=`#ifdef USE_BUMPMAP
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,G0=`#define PI 3.141592653589793
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
} // validated`,V0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W0=`vec3 transformedNormal = objectNormal;
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
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hm=`uniform bool receiveShadow;
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
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gm=`PhysicalMaterial material;
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
#endif`,xm=`struct PhysicalMaterial {
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
}`,vm=`
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rm=`#if defined( USE_POINTS_UV )
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
#endif`,Cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Eg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ug=`#define LAMBERT
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
}`,Fg=`#define LAMBERT
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
}`,Ng=`#define MATCAP
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
}`,zg=`#define MATCAP
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
}`,Og=`#define NORMAL
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,Hg=`#define PHONG
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
}`,Gg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,$g=`uniform vec3 color;
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
}`,Kg=`uniform float rotation;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:y0,alphahash_pars_fragment:_0,alphamap_fragment:M0,alphamap_pars_fragment:b0,alphatest_fragment:S0,alphatest_pars_fragment:w0,aomap_fragment:E0,aomap_pars_fragment:T0,batching_pars_vertex:A0,batching_vertex:R0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:I0,iridescence_fragment:D0,bumpmap_pars_fragment:L0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:z0,color_fragment:O0,color_pars_fragment:B0,color_pars_vertex:k0,color_vertex:H0,common:G0,cube_uv_reflection_fragment:V0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:Y0,emissivemap_pars_fragment:Z0,colorspace_fragment:$0,colorspace_pars_fragment:K0,envmap_fragment:J0,envmap_common_pars_fragment:j0,envmap_pars_fragment:Q0,envmap_pars_vertex:tm,envmap_physical_pars_fragment:um,envmap_vertex:em,fog_vertex:nm,fog_pars_vertex:im,fog_fragment:sm,fog_pars_fragment:rm,gradientmap_pars_fragment:om,lightmap_pars_fragment:am,lights_lambert_fragment:lm,lights_lambert_pars_fragment:cm,lights_pars_begin:hm,lights_toon_fragment:fm,lights_toon_pars_fragment:dm,lights_phong_fragment:pm,lights_phong_pars_fragment:mm,lights_physical_fragment:gm,lights_physical_pars_fragment:xm,lights_fragment_begin:vm,lights_fragment_maps:ym,lights_fragment_end:_m,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:bm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:wm,map_fragment:Em,map_pars_fragment:Tm,map_particle_fragment:Am,map_particle_pars_fragment:Rm,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Pm,morphinstance_vertex:Im,morphcolor_vertex:Dm,morphnormal_vertex:Lm,morphtarget_pars_vertex:Um,morphtarget_vertex:Fm,normal_fragment_begin:Nm,normal_fragment_maps:zm,normal_pars_fragment:Om,normal_pars_vertex:Bm,normal_vertex:km,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:Xm,opaque_fragment:qm,packing:Ym,premultiplied_alpha_fragment:Zm,project_vertex:$m,dithering_fragment:Km,dithering_pars_fragment:Jm,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:og,skinnormal_vertex:ag,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:ug,transmission_fragment:fg,transmission_pars_fragment:dg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:xg,background_vert:vg,background_frag:yg,backgroundCube_vert:_g,backgroundCube_frag:Mg,cube_vert:bg,cube_frag:Sg,depth_vert:wg,depth_frag:Eg,distanceRGBA_vert:Tg,distanceRGBA_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Pg,linedashed_frag:Ig,meshbasic_vert:Dg,meshbasic_frag:Lg,meshlambert_vert:Ug,meshlambert_frag:Fg,meshmatcap_vert:Ng,meshmatcap_frag:zg,meshnormal_vert:Og,meshnormal_frag:Bg,meshphong_vert:kg,meshphong_frag:Hg,meshphysical_vert:Gg,meshphysical_frag:Vg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:qg,points_frag:Yg,shadow_vert:Zg,shadow_frag:$g,sprite_vert:Kg,sprite_frag:Jg},Xt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ti={basic:{uniforms:Tn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Tn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Tn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Tn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Tn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Tn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Tn([Xt.points,Xt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Tn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Tn([Xt.common,Xt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Tn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Tn([Xt.sprite,Xt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Tn([Xt.common,Xt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Tn([Xt.lights,Xt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ti.physical={uniforms:Tn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var rc={r:0,b:0,g:0},qs=new en,jg=new Ht;function Qg(s,t,e,n,i,r,o){let a=new Ut(0),c=r===!0?0:1,h,l,f=null,p=0,u=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function x(M){let y=!1,w=g(M);w===null?d(a,c):w&&w.isColor&&(d(w,1),y=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,y){let w=g(y);w&&(w.isCubeTexture||w.mapping===Bo)?(l===void 0&&(l=new Bt(new Kt(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Xs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),qs.copy(y.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),l.material.uniforms.envMap.value=w,l.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(qs)),l.material.toneMapped=De.getTransfer(w.colorSpace)!==Fe,(f!==w||p!==w.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,f=w,p=w.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Bt(new Oe(2,2),new Ae({name:"BackgroundMaterial",uniforms:Xs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=De.getTransfer(w.colorSpace)!==Fe,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||p!==w.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=w,p=w.version,u=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function d(M,y){M.getRGB(rc,Hh(s)),n.buffers.color.setClear(rc.r,rc.g,rc.b,y,o)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(a,c)},render:x,addToRenderList:m,dispose:_}}function tx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null),r=i,o=!1;function a(S,N,H,B,O){let Y=!1,X=f(B,H,N);r!==X&&(r=X,h(r.object)),Y=u(S,B,H,O),Y&&g(S,B,H,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(S,N,H,B),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function h(S){return s.bindVertexArray(S)}function l(S){return s.deleteVertexArray(S)}function f(S,N,H){let B=H.wireframe===!0,O=n[S.id];O===void 0&&(O={},n[S.id]=O);let Y=O[N.id];Y===void 0&&(Y={},O[N.id]=Y);let X=Y[B];return X===void 0&&(X=p(c()),Y[B]=X),X}function p(S){let N=[],H=[],B=[];for(let O=0;O<e;O++)N[O]=0,H[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:B,object:S,attributes:{},index:null}}function u(S,N,H,B){let O=r.attributes,Y=N.attributes,X=0,it=H.getAttributes();for(let R in it)if(it[R].location>=0){let xt=O[R],Et=Y[R];if(Et===void 0&&(R==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),R==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),xt===void 0||xt.attribute!==Et||Et&&xt.data!==Et.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(S,N,H,B){let O={},Y=N.attributes,X=0,it=H.getAttributes();for(let R in it)if(it[R].location>=0){let xt=Y[R];xt===void 0&&(R==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),R==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor));let Et={};Et.attribute=xt,xt&&xt.data&&(Et.data=xt.data),O[R]=Et,X++}r.attributes=O,r.attributesNum=X,r.index=B}function x(){let S=r.newAttributes;for(let N=0,H=S.length;N<H;N++)S[N]=0}function m(S){d(S,0)}function d(S,N){let H=r.newAttributes,B=r.enabledAttributes,O=r.attributeDivisors;H[S]=1,B[S]===0&&(s.enableVertexAttribArray(S),B[S]=1),O[S]!==N&&(s.vertexAttribDivisor(S,N),O[S]=N)}function _(){let S=r.newAttributes,N=r.enabledAttributes;for(let H=0,B=N.length;H<B;H++)N[H]!==S[H]&&(s.disableVertexAttribArray(H),N[H]=0)}function M(S,N,H,B,O,Y,X){X===!0?s.vertexAttribIPointer(S,N,H,O,Y):s.vertexAttribPointer(S,N,H,B,O,Y)}function y(S,N,H,B){x();let O=B.attributes,Y=H.getAttributes(),X=N.defaultAttributeValues;for(let it in Y){let R=Y[it];if(R.location>=0){let ut=O[it];if(ut===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),ut!==void 0){let xt=ut.normalized,Et=ut.itemSize,Lt=t.get(ut);if(Lt===void 0)continue;let Vt=Lt.buffer,qt=Lt.type,$t=Lt.bytesPerElement,ot=qt===s.INT||qt===s.UNSIGNED_INT||ut.gpuType===bl;if(ut.isInterleavedBufferAttribute){let at=ut.data,wt=at.stride,Wt=ut.offset;if(at.isInstancedInterleavedBuffer){for(let It=0;It<R.locationSize;It++)d(R.location+It,at.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let It=0;It<R.locationSize;It++)m(R.location+It);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let It=0;It<R.locationSize;It++)M(R.location+It,Et/R.locationSize,qt,xt,wt*$t,(Wt+Et/R.locationSize*It)*$t,ot)}else{if(ut.isInstancedBufferAttribute){for(let at=0;at<R.locationSize;at++)d(R.location+at,ut.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let at=0;at<R.locationSize;at++)m(R.location+at);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let at=0;at<R.locationSize;at++)M(R.location+at,Et/R.locationSize,qt,xt,Et*$t,Et/R.locationSize*at*$t,ot)}}else if(X!==void 0){let xt=X[it];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(R.location,xt);break;case 3:s.vertexAttrib3fv(R.location,xt);break;case 4:s.vertexAttrib4fv(R.location,xt);break;default:s.vertexAttrib1fv(R.location,xt)}}}}_()}function w(){D();for(let S in n){let N=n[S];for(let H in N){let B=N[H];for(let O in B)l(B[O].object),delete B[O];delete N[H]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let N=n[S.id];for(let H in N){let B=N[H];for(let O in B)l(B[O].object),delete B[O];delete N[H]}delete n[S.id]}function I(S){for(let N in n){let H=n[N];if(H[S.id]===void 0)continue;let B=H[S.id];for(let O in B)l(B[O].object),delete B[O];delete H[S.id]}}function D(){b(),o=!0,r!==i&&(r=i,h(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function ex(s,t,e){let n;function i(h){n=h}function r(h,l){s.drawArrays(n,h,l),e.update(l,n,1)}function o(h,l,f){f!==0&&(s.drawArraysInstanced(n,h,l,f),e.update(l,n,f))}function a(h,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,f);let u=0;for(let g=0;g<f;g++)u+=l[g];e.update(u,n,1)}function c(h,l,f,p){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<h.length;g++)o(h[g],l[g],p[g]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,l,0,p,0,f);let g=0;for(let x=0;x<f;x++)g+=l[x]*p[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function nx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==zn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let D=I===on&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Yn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==di&&!D)}function c(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let f=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:w,maxSamples:A}}function ix(s){let t=this,e=null,n=0,i=!1,r=!1,o=new ti,a=new pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let u=f.length!==0||p||n!==0||i;return i=p,n=f.length,u},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=l(f,p,0)},this.setState=function(f,p,u){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?l(null):h();else{let _=r?0:n,M=_*4,y=d.clippingState||null;c.value=y,y=l(g,p,M,u);for(let w=0;w!==M;++w)y[w]=e[w];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,p,u,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=u+x*4,_=p.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,y=u;M!==x;++M,y+=4)o.copy(f[M]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function sx(s){let t=new WeakMap;function e(o,a){return a===yl?o.mapping=Vs:a===_l&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===yl||a===_l)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new Dr(c.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Hr=4,Wf=[.125,.215,.35,.446,.526,.582],$s=20,Xh=new ks,Xf=new Ut,qh=null,Yh=0,Zh=0,$h=!1,Zs=(1+Math.sqrt(5))/2,kr=1/Zs,qf=[new U(-Zs,kr,0),new U(Zs,kr,0),new U(-kr,0,Zs),new U(kr,0,Zs),new U(0,Zs,-kr),new U(0,Zs,kr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],rx=new U,Vr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=rx}=r;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qh,Yh,Zh),this._renderer.xr.enabled=$h,t.scissorTest=!1,oc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:on,format:zn,colorSpace:Ls,depthBuffer:!1},i=Yf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ox(r)),this._blurMaterial=ax(r,t,e)}return i}_compileMaterial(t){let e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,Xh)}_sceneToCubeUV(t,e,n,i,r){let c=new dn(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,u=f.toneMapping;f.getClearColor(Xf),f.toneMapping=Gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));let x=new sn({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),m=new Bt(new Kt,x),d=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,d=!0):(x.color.copy(Xf),d=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(c.up.set(0,h[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[M],r.y,r.z)):y===1?(c.up.set(0,0,h[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[M],r.z)):(c.up.set(0,h[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[M]));let w=this._cubeSize;oc(i,y*w,M>2?w:0,w,w),f.setRenderTarget(i),d&&f.render(m,c),f.render(t,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=p,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Vs||t.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;oc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Xh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qf[(i-r-1)%qf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,f=new Bt(this._lodPlanes[i],h),p=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*$s-1),x=r/g,m=isFinite(r)?1+Math.floor(l*x):$s;m>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$s}`);let d=[],_=0;for(let I=0;I<$s;++I){let D=I/x,b=Math.exp(-D*D/2);d.push(b),I===0?_+=b:I<m&&(_+=2*b)}for(let I=0;I<d.length;I++)d[I]=d[I]/_;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;let y=this._sizeLods[i],w=3*y*(i>M-Hr?i-M+Hr:0),A=4*(this._cubeSize-y);oc(e,w,A,3*y,2*y),c.setRenderTarget(e),c.render(f,Xh)}};function ox(s){let t=[],e=[],n=[],i=s,r=s-Hr+1+Wf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Hr?c=Wf[o-s+Hr-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),l=-h,f=1+h,p=[l,l,f,l,f,f,l,l,f,f,l,f],u=6,g=6,x=3,m=2,d=1,_=new Float32Array(x*g*u),M=new Float32Array(m*g*u),y=new Float32Array(d*g*u);for(let A=0;A<u;A++){let I=A%3*2/3-1,D=A>2?0:-1,b=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];_.set(b,x*g*A),M.set(p,m*g*A);let S=[A,A,A,A,A,A];y.set(S,d*g*A)}let w=new Ue;w.setAttribute("position",new qe(_,x)),w.setAttribute("uv",new qe(M,m)),w.setAttribute("faceIndex",new qe(y,d)),t.push(w),i>Hr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yf(s,t,e){let n=new $e(s,t,e);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oc(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ax(s,t,e){let n=new Float32Array($s),i=new U(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ru(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Zf(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function $f(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function ru(){return`

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
	`}function lx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===yl||c===_l,l=c===Vs||c===Ws;if(h||l){let f=t.get(a),p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Vr(s)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return h&&u&&u.height>0||l&&u&&i(u)?(e===null&&(e=new Vr(s)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function i(a){let c=0,h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function cx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hx(s,t,e,n){let i={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete i[p.id];let u=r.get(p);u&&(t.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,e.memory.geometries++),p}function c(f){let p=f.attributes;for(let u in p)t.update(p[u],s.ARRAY_BUFFER)}function h(f){let p=[],u=f.index,g=f.attributes.position,x=0;if(u!==null){let _=u.array;x=u.version;for(let M=0,y=_.length;M<y;M+=3){let w=_[M+0],A=_[M+1],I=_[M+2];p.push(w,A,A,I,I,w)}}else if(g!==void 0){let _=g.array;x=g.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let w=M+0,A=M+1,I=M+2;p.push(w,A,A,I,I,w)}}else return;let m=new(kh(p)?Mo:_o)(p,1);m.version=x;let d=r.get(f);d&&t.remove(d),r.set(f,m)}function l(f){let p=r.get(f);if(p){let u=f.index;u!==null&&p.version<u.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:l}}function ux(s,t,e){let n;function i(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,u){s.drawElements(n,u,r,p*o),e.update(u,n,1)}function h(p,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,p*o,g),e.update(u,n,g))}function l(p,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,g);let m=0;for(let d=0;d<g;d++)m+=u[d];e.update(m,n,1)}function f(p,u,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)h(p[d]/o,u[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,p,0,x,0,g);let d=0;for(let _=0;_<g;_++)d+=u[_]*x[_];e.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function fx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dx(s,t,e){let n=new WeakMap,i=new Ne;function r(o,a,c){let h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=l!==void 0?l.length:0,p=n.get(a);if(p===void 0||p.count!==f){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;u===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*w*4*f),I=new xo(A,y,w,f);I.type=di,I.needsUpdate=!0;let D=M*4;for(let S=0;S<f;S++){let N=m[S],H=d[S],B=_[S],O=y*w*4*S;for(let Y=0;Y<N.count;Y++){let X=Y*D;u===!0&&(i.fromBufferAttribute(N,Y),A[O+X+0]=i.x,A[O+X+1]=i.y,A[O+X+2]=i.z,A[O+X+3]=0),g===!0&&(i.fromBufferAttribute(H,Y),A[O+X+4]=i.x,A[O+X+5]=i.y,A[O+X+6]=i.z,A[O+X+7]=0),x===!0&&(i.fromBufferAttribute(B,Y),A[O+X+8]=i.x,A[O+X+9]=i.y,A[O+X+10]=i.z,A[O+X+11]=B.itemSize===4?i.w:1)}}p={count:f,texture:I,size:new Zt(y,w)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<h.length;x++)u+=h[x];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:r}}function px(s,t,e,n){let i=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,f=t.get(c,l);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;i.get(p)!==h&&(p.update(),i.set(p,h))}return f}function o(){i=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var pd=new Dn,Kf=new zs(1,1),md=new xo,gd=new Ga,xd=new So,Jf=[],jf=[],Qf=new Float32Array(16),td=new Float32Array(9),ed=new Float32Array(4);function Wr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Jf[i];if(r===void 0&&(r=new Float32Array(i),Jf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function gn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function xn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function cc(s,t){let e=jf[t];e===void 0&&(e=new Int32Array(t),jf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function mx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function gx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;s.uniform2fv(this.addr,t),xn(e,t)}}function xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(gn(e,t))return;s.uniform3fv(this.addr,t),xn(e,t)}}function vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;s.uniform4fv(this.addr,t),xn(e,t)}}function yx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,n))return;ed.set(n),s.uniformMatrix2fv(this.addr,!1,ed),xn(e,n)}}function _x(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,n))return;td.set(n),s.uniformMatrix3fv(this.addr,!1,td),xn(e,n)}}function Mx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,n))return;Qf.set(n),s.uniformMatrix4fv(this.addr,!1,Qf),xn(e,n)}}function bx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;s.uniform2iv(this.addr,t),xn(e,t)}}function wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;s.uniform3iv(this.addr,t),xn(e,t)}}function Ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;s.uniform4iv(this.addr,t),xn(e,t)}}function Tx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;s.uniform2uiv(this.addr,t),xn(e,t)}}function Rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;s.uniform3uiv(this.addr,t),xn(e,t)}}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;s.uniform4uiv(this.addr,t),xn(e,t)}}function Px(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Kf.compareFunction=zh,r=Kf):r=pd,e.setTexture2D(t||r,i)}function Ix(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gd,i)}function Dx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||xd,i)}function Lx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||md,i)}function Ux(s){switch(s){case 5126:return mx;case 35664:return gx;case 35665:return xx;case 35666:return vx;case 35674:return yx;case 35675:return _x;case 35676:return Mx;case 5124:case 35670:return bx;case 35667:case 35671:return Sx;case 35668:case 35672:return wx;case 35669:case 35673:return Ex;case 5125:return Tx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Lx}}function Fx(s,t){s.uniform1fv(this.addr,t)}function Nx(s,t){let e=Wr(t,this.size,2);s.uniform2fv(this.addr,e)}function zx(s,t){let e=Wr(t,this.size,3);s.uniform3fv(this.addr,e)}function Ox(s,t){let e=Wr(t,this.size,4);s.uniform4fv(this.addr,e)}function Bx(s,t){let e=Wr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function kx(s,t){let e=Wr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Hx(s,t){let e=Wr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gx(s,t){s.uniform1iv(this.addr,t)}function Vx(s,t){s.uniform2iv(this.addr,t)}function Wx(s,t){s.uniform3iv(this.addr,t)}function Xx(s,t){s.uniform4iv(this.addr,t)}function qx(s,t){s.uniform1uiv(this.addr,t)}function Yx(s,t){s.uniform2uiv(this.addr,t)}function Zx(s,t){s.uniform3uiv(this.addr,t)}function $x(s,t){s.uniform4uiv(this.addr,t)}function Kx(s,t,e){let n=this.cache,i=t.length,r=cc(e,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||pd,r[o])}function Jx(s,t,e){let n=this.cache,i=t.length,r=cc(e,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||gd,r[o])}function jx(s,t,e){let n=this.cache,i=t.length,r=cc(e,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||xd,r[o])}function Qx(s,t,e){let n=this.cache,i=t.length,r=cc(e,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||md,r[o])}function tv(s){switch(s){case 5126:return Fx;case 35664:return Nx;case 35665:return zx;case 35666:return Ox;case 35674:return Bx;case 35675:return kx;case 35676:return Hx;case 5124:case 35670:return Gx;case 35667:case 35671:return Vx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Zx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Qx}}var Jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ux(e.type)}},jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tv(e.type)}},Qh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Kh=/(\w+)(\])?(\[|\.)?/g;function nd(s,t){s.seq.push(t),s.map[t.id]=t}function ev(s,t,e){let n=s.name,i=n.length;for(Kh.lastIndex=0;;){let r=Kh.exec(n),o=Kh.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===i){nd(e,h===void 0?new Jh(a,s,t):new jh(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Qh(a),nd(e,f)),e=f}}}var Gr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);ev(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function id(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var nv=37297,iv=0;function sv(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var sd=new pe;function rv(s){De._getMatrix(sd,De.workingColorSpace,s);let t=`mat3( ${sd.elements.map(e=>e.toFixed(4))} )`;switch(De.getTransfer(s)){case po:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function rd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+sv(s.getShaderSource(t),a)}else return r}function ov(s,t){let e=rv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function av(s,t){let e;switch(t){case dl:e="Linear";break;case pl:e="Reinhard";break;case ml:e="Cineon";break;case zr:e="ACESFilmic";break;case xl:e="AgX";break;case vl:e="Neutral";break;case gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ac=new U;function lv(){De.getLuminanceCoefficients(ac);let s=ac.x.toFixed(4),t=ac.y.toFixed(4),e=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function hv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Xo(s){return s!==""}function od(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(s){return s.replace(fv,pv)}var dv=new Map;function pv(s,t){let e=he[t];if(e===void 0){let n=dv.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tu(e)}var mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(s){return s.replace(mv,gv)}function gv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function xv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function vv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function _v(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case Rf:t="ENVMAP_BLENDING_MIX";break;case Cf:t="ENVMAP_BLENDING_ADD";break}return t}function Mv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bv(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=xv(e),h=vv(e),l=yv(e),f=_v(e),p=Mv(e),u=cv(e),g=hv(r),x=i.createProgram(),m,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xo).join(`
`),d.length>0&&(d+=`
`)):(m=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),d=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?he.tonemapping_pars_fragment:"",e.toneMapping!==Gi?av("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,ov("linearToOutputTexel",e.outputColorSpace),lv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xo).join(`
`)),o=tu(o),o=od(o,e),o=ad(o,e),a=tu(a),a=od(a,e),a=ad(a,e),o=ld(o),a=ld(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=_+m+o,y=_+d+a,w=id(i,i.VERTEX_SHADER,M),A=id(i,i.FRAGMENT_SHADER,y);i.attachShader(x,w),i.attachShader(x,A),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function I(N){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(w)||"",O=i.getShaderInfoLog(A)||"",Y=H.trim(),X=B.trim(),it=O.trim(),R=!0,ut=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(R=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,A);else{let xt=rd(i,w,"vertex"),Et=rd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Y+`
`+xt+`
`+Et)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||it==="")&&(ut=!1);ut&&(N.diagnostics={runnable:R,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:it,prefix:d}})}i.deleteShader(w),i.deleteShader(A),D=new Gr(i,x),b=uv(i,x)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,nv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}var Sv=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nu(t),e.set(t,n)),n}},nu=class{constructor(t){this.id=Sv++,this.code=t,this.usedTimes=0}};function wv(s,t,e,n,i,r,o){let a=new yo,c=new eu,h=new Set,l=[],f=i.logarithmicDepthBuffer,p=i.vertexTextures,u=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return h.add(b),b===0?"uv":`uv${b}`}function m(b,S,N,H,B){let O=H.fog,Y=B.geometry,X=b.isMeshStandardMaterial?H.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),R=it&&it.mapping===Bo?it.image.height:null,ut=g[b.type];b.precision!==null&&(u=i.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=xt!==void 0?xt.length:0,Lt=0;Y.morphAttributes.position!==void 0&&(Lt=1),Y.morphAttributes.normal!==void 0&&(Lt=2),Y.morphAttributes.color!==void 0&&(Lt=3);let Vt,qt,$t,ot;if(ut){let jt=Ti[ut];Vt=jt.vertexShader,qt=jt.fragmentShader}else Vt=b.vertexShader,qt=b.fragmentShader,c.update(b),$t=c.getVertexShaderID(b),ot=c.getFragmentShaderID(b);let at=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Wt=B.isInstancedMesh===!0,It=B.isBatchedMesh===!0,nt=!!b.map,Ft=!!b.matcap,L=!!it,Nt=!!b.aoMap,Rt=!!b.lightMap,Ct=!!b.bumpMap,q=!!b.normalMap,W=!!b.displacementMap,G=!!b.emissiveMap,rt=!!b.metalnessMap,Z=!!b.roughnessMap,Q=b.anisotropy>0,T=b.clearcoat>0,v=b.dispersion>0,C=b.iridescence>0,F=b.sheen>0,k=b.transmission>0,z=Q&&!!b.anisotropyMap,K=T&&!!b.clearcoatMap,J=T&&!!b.clearcoatNormalMap,st=T&&!!b.clearcoatRoughnessMap,Mt=C&&!!b.iridescenceMap,$=C&&!!b.iridescenceThicknessMap,lt=F&&!!b.sheenColorMap,Tt=F&&!!b.sheenRoughnessMap,ft=!!b.specularMap,St=!!b.specularColorMap,zt=!!b.specularIntensityMap,V=k&&!!b.transmissionMap,_t=k&&!!b.thicknessMap,Pt=!!b.gradientMap,pt=!!b.alphaMap,vt=b.alphaTest>0,dt=!!b.alphaHash,Yt=!!b.extensions,se=Gi;b.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(se=s.toneMapping);let Pe={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:Vt,fragmentShader:qt,defines:b.defines,customVertexShaderID:$t,customFragmentShaderID:ot,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:It,batchingColor:It&&B._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&B.instanceColor!==null,instancingMorph:Wt&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ls,alphaToCoverage:!!b.alphaToCoverage,map:nt,matcap:Ft,envMap:L,envMapMode:L&&it.mapping,envMapCubeUVHeight:R,aoMap:Nt,lightMap:Rt,bumpMap:Ct,normalMap:q,displacementMap:p&&W,emissiveMap:G,normalMapObjectSpace:q&&b.normalMapType===Df,normalMapTangentSpace:q&&b.normalMapType===sc,metalnessMap:rt,roughnessMap:Z,anisotropy:Q,anisotropyMap:z,clearcoat:T,clearcoatMap:K,clearcoatNormalMap:J,clearcoatRoughnessMap:st,dispersion:v,iridescence:C,iridescenceMap:Mt,iridescenceThicknessMap:$,sheen:F,sheenColorMap:lt,sheenRoughnessMap:Tt,specularMap:ft,specularColorMap:St,specularIntensityMap:zt,transmission:k,transmissionMap:V,thicknessMap:_t,gradientMap:Pt,opaque:b.transparent===!1&&b.blending===Bi&&b.alphaToCoverage===!1,alphaMap:pt,alphaTest:vt,alphaHash:dt,combine:b.combine,mapUv:nt&&x(b.map.channel),aoMapUv:Nt&&x(b.aoMap.channel),lightMapUv:Rt&&x(b.lightMap.channel),bumpMapUv:Ct&&x(b.bumpMap.channel),normalMapUv:q&&x(b.normalMap.channel),displacementMapUv:W&&x(b.displacementMap.channel),emissiveMapUv:G&&x(b.emissiveMap.channel),metalnessMapUv:rt&&x(b.metalnessMap.channel),roughnessMapUv:Z&&x(b.roughnessMap.channel),anisotropyMapUv:z&&x(b.anisotropyMap.channel),clearcoatMapUv:K&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:J&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:$&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&x(b.sheenRoughnessMap.channel),specularMapUv:ft&&x(b.specularMap.channel),specularColorMapUv:St&&x(b.specularColorMap.channel),specularIntensityMapUv:zt&&x(b.specularIntensityMap.channel),transmissionMapUv:V&&x(b.transmissionMap.channel),thicknessMapUv:_t&&x(b.thicknessMap.channel),alphaMapUv:pt&&x(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(q||Q),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(nt||pt),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:wt,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,decodeVideoTexture:nt&&b.map.isVideoTexture===!0&&De.getTransfer(b.map.colorSpace)===Fe,decodeVideoTextureEmissive:G&&b.emissiveMap.isVideoTexture===!0&&De.getTransfer(b.emissiveMap.colorSpace)===Fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===rn,flipSided:b.side===Sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Yt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&b.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pe.vertexUv1s=h.has(1),Pe.vertexUv2s=h.has(2),Pe.vertexUv3s=h.has(3),h.clear(),Pe}function d(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)S.push(N),S.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(_(S,b),M(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let S=g[b.type],N;if(S){let H=Ti[S];N=mn.clone(H.uniforms)}else N=b.uniforms;return N}function w(b,S){let N;for(let H=0,B=l.length;H<B;H++){let O=l[H];if(O.cacheKey===S){N=O,++N.usedTimes;break}}return N===void 0&&(N=new bv(s,S,b,r),l.push(N)),N}function A(b){if(--b.usedTimes===0){let S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),b.destroy()}}function I(b){c.remove(b)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:I,programs:l,dispose:D}}function Ev(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Tv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function hd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ud(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,p,u,g,x,m){let d=s[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:u,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},s[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=u,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),t++,d}function a(f,p,u,g,x,m){let d=o(f,p,u,g,x,m);u.transmission>0?n.push(d):u.transparent===!0?i.push(d):e.push(d)}function c(f,p,u,g,x,m){let d=o(f,p,u,g,x,m);u.transmission>0?n.unshift(d):u.transparent===!0?i.unshift(d):e.unshift(d)}function h(f,p){e.length>1&&e.sort(f||Tv),n.length>1&&n.sort(p||hd),i.length>1&&i.sort(p||hd)}function l(){for(let f=t,p=s.length;f<p;f++){let u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:l,sort:h}}function Av(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ud,s.set(n,[o])):i>=r.length?(o=new ud,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Rv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ut};break;case"SpotLight":e={position:new U,direction:new U,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Cv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Pv=0;function Iv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Dv(s){let t=new Rv,e=Cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);let i=new U,r=new Ht,o=new Ht;function a(h){let l=0,f=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let u=0,g=0,x=0,m=0,d=0,_=0,M=0,y=0,w=0,A=0,I=0;h.sort(Iv);for(let b=0,S=h.length;b<S;b++){let N=h[b],H=N.color,B=N.intensity,O=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=H.r*B,f+=H.g*B,p+=H.b*B;else if(N.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(N.sh.coefficients[X],B);I++}else if(N.isDirectionalLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let it=N.shadow,R=e.get(N);R.shadowIntensity=it.intensity,R.shadowBias=it.bias,R.shadowNormalBias=it.normalBias,R.shadowRadius=it.radius,R.shadowMapSize=it.mapSize,n.directionalShadow[u]=R,n.directionalShadowMap[u]=Y,n.directionalShadowMatrix[u]=N.shadow.matrix,_++}n.directional[u]=X,u++}else if(N.isSpotLight){let X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(H).multiplyScalar(B),X.distance=O,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,n.spot[x]=X;let it=N.shadow;if(N.map&&(n.spotLightMap[w]=N.map,w++,it.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[x]=it.matrix,N.castShadow){let R=e.get(N);R.shadowIntensity=it.intensity,R.shadowBias=it.bias,R.shadowNormalBias=it.normalBias,R.shadowRadius=it.radius,R.shadowMapSize=it.mapSize,n.spotShadow[x]=R,n.spotShadowMap[x]=Y,y++}x++}else if(N.isRectAreaLight){let X=t.get(N);X.color.copy(H).multiplyScalar(B),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=X,m++}else if(N.isPointLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){let it=N.shadow,R=e.get(N);R.shadowIntensity=it.intensity,R.shadowBias=it.bias,R.shadowNormalBias=it.normalBias,R.shadowRadius=it.radius,R.shadowMapSize=it.mapSize,R.shadowCameraNear=it.camera.near,R.shadowCameraFar=it.camera.far,n.pointShadow[g]=R,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=N.shadow.matrix,M++}n.point[g]=X,g++}else if(N.isHemisphereLight){let X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(B),X.groundColor.copy(N.groundColor).multiplyScalar(B),n.hemi[d]=X,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xt.LTC_FLOAT_1,n.rectAreaLTC2=Xt.LTC_FLOAT_2):(n.rectAreaLTC1=Xt.LTC_HALF_1,n.rectAreaLTC2=Xt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=p;let D=n.hash;(D.directionalLength!==u||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==_||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==w||D.numLightProbes!==I)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,D.directionalLength=u,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=_,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=w,D.numLightProbes=I,n.version=Pv++)}function c(h,l){let f=0,p=0,u=0,g=0,x=0,m=l.matrixWorldInverse;for(let d=0,_=h.length;d<_;d++){let M=h[d];if(M.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(M.isSpotLight){let y=n.spot[u];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(M.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function fd(s){let t=new Dv(s),e=[],n=[];function i(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Lv(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new fd(s),t.set(i,[a])):r>=o.length?(a=new fd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
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
}`;function Nv(s,t,e){let n=new os,i=new Zt,r=new Zt,o=new Ne,a=new Fr({depthPacking:ic}),c=new qa,h={},l=e.maxTextureSize,f={[Oi]:Sn,[Sn]:Oi,[rn]:rn},p=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Uv,fragmentShader:Fv}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Bt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let d=this.type;this.render=function(A,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=s.getRenderTarget(),S=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),H=s.state;H.setBlending(ln),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=d!==Ei&&this.type===Ei,O=d===Ei&&this.type!==Ei;for(let Y=0,X=A.length;Y<X;Y++){let it=A[Y],R=it.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);let ut=R.getFrameExtents();if(i.multiply(ut),r.copy(R.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/ut.x),i.x=r.x*ut.x,R.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/ut.y),i.y=r.y*ut.y,R.mapSize.y=r.y)),R.map===null||B===!0||O===!0){let Et=this.type!==Ei?{minFilter:bn,magFilter:bn}:{};R.map!==null&&R.map.dispose(),R.map=new $e(i.x,i.y,Et),R.map.texture.name=it.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();let xt=R.getViewportCount();for(let Et=0;Et<xt;Et++){let Lt=R.getViewport(Et);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),H.viewport(o),R.updateMatrices(it,Et),n=R.getFrustum(),y(I,D,R.camera,it,this.type)}R.isPointLightShadow!==!0&&this.type===Ei&&_(R,D),R.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(b,S,N)};function _(A,I){let D=t.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $e(i.x,i.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(I,null,D,p,x,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(I,null,D,u,x,null)}function M(A,I,D,b){let S=null,N=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)S=N;else if(S=D.isPointLight===!0?c:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let H=S.uuid,B=I.uuid,O=h[H];O===void 0&&(O={},h[H]=O);let Y=O[B];Y===void 0&&(Y=S.clone(),O[B]=Y,I.addEventListener("dispose",w)),S=Y}if(S.visible=I.visible,S.wireframe=I.wireframe,b===Ei?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:f[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let H=s.properties.get(S);H.light=D}return S}function y(A,I,D,b,S){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Ei)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let B=t.update(A),O=A.material;if(Array.isArray(O)){let Y=B.groups;for(let X=0,it=Y.length;X<it;X++){let R=Y[X],ut=O[R.materialIndex];if(ut&&ut.visible){let xt=M(A,ut,b,S);A.onBeforeShadow(s,A,I,D,B,xt,R),s.renderBufferDirect(D,null,B,xt,A,R),A.onAfterShadow(s,A,I,D,B,xt,R)}}}else if(O.visible){let Y=M(A,O,b,S);A.onBeforeShadow(s,A,I,D,B,Y,null),s.renderBufferDirect(D,null,B,Y,A,null),A.onAfterShadow(s,A,I,D,B,Y,null)}}let H=A.children;for(let B=0,O=H.length;B<O;B++)y(H[B],I,D,b,S)}function w(A){A.target.removeEventListener("dispose",w);for(let D in h){let b=h[D],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var zv={[ol]:al,[ll]:ul,[cl]:fl,[Ds]:hl,[al]:ol,[ul]:ll,[fl]:cl,[hl]:Ds};function Ov(s,t){function e(){let V=!1,_t=new Ne,Pt=null,pt=new Ne(0,0,0,0);return{setMask:function(vt){Pt!==vt&&!V&&(s.colorMask(vt,vt,vt,vt),Pt=vt)},setLocked:function(vt){V=vt},setClear:function(vt,dt,Yt,se,Pe){Pe===!0&&(vt*=se,dt*=se,Yt*=se),_t.set(vt,dt,Yt,se),pt.equals(_t)===!1&&(s.clearColor(vt,dt,Yt,se),pt.copy(_t))},reset:function(){V=!1,Pt=null,pt.set(-1,0,0,0)}}}function n(){let V=!1,_t=!1,Pt=null,pt=null,vt=null;return{setReversed:function(dt){if(_t!==dt){let Yt=t.get("EXT_clip_control");dt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),_t=dt;let se=vt;vt=null,this.setClear(se)}},getReversed:function(){return _t},setTest:function(dt){dt?at(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(dt){Pt!==dt&&!V&&(s.depthMask(dt),Pt=dt)},setFunc:function(dt){if(_t&&(dt=zv[dt]),pt!==dt){switch(dt){case ol:s.depthFunc(s.NEVER);break;case al:s.depthFunc(s.ALWAYS);break;case ll:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case cl:s.depthFunc(s.EQUAL);break;case hl:s.depthFunc(s.GEQUAL);break;case ul:s.depthFunc(s.GREATER);break;case fl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=dt}},setLocked:function(dt){V=dt},setClear:function(dt){vt!==dt&&(_t&&(dt=1-dt),s.clearDepth(dt),vt=dt)},reset:function(){V=!1,Pt=null,pt=null,vt=null,_t=!1}}}function i(){let V=!1,_t=null,Pt=null,pt=null,vt=null,dt=null,Yt=null,se=null,Pe=null;return{setTest:function(jt){V||(jt?at(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(jt){_t!==jt&&!V&&(s.stencilMask(jt),_t=jt)},setFunc:function(jt,Cn,Je){(Pt!==jt||pt!==Cn||vt!==Je)&&(s.stencilFunc(jt,Cn,Je),Pt=jt,pt=Cn,vt=Je)},setOp:function(jt,Cn,Je){(dt!==jt||Yt!==Cn||se!==Je)&&(s.stencilOp(jt,Cn,Je),dt=jt,Yt=Cn,se=Je)},setLocked:function(jt){V=jt},setClear:function(jt){Pe!==jt&&(s.clearStencil(jt),Pe=jt)},reset:function(){V=!1,_t=null,Pt=null,pt=null,vt=null,dt=null,Yt=null,se=null,Pe=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,h=new WeakMap,l={},f={},p=new WeakMap,u=[],g=null,x=!1,m=null,d=null,_=null,M=null,y=null,w=null,A=null,I=new Ut(0,0,0),D=0,b=!1,S=null,N=null,H=null,B=null,O=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,it=0,R=s.getParameter(s.VERSION);R.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(R)[1]),X=it>=1):R.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),X=it>=2);let ut=null,xt={},Et=s.getParameter(s.SCISSOR_BOX),Lt=s.getParameter(s.VIEWPORT),Vt=new Ne().fromArray(Et),qt=new Ne().fromArray(Lt);function $t(V,_t,Pt,pt){let vt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(V,dt),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<Pt;Yt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(_t+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return dt}let ot={};ot[s.TEXTURE_2D]=$t(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=$t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=$t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=$t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(s.DEPTH_TEST),o.setFunc(Ds),Ct(!1),q(wh),at(s.CULL_FACE),Nt(ln);function at(V){l[V]!==!0&&(s.enable(V),l[V]=!0)}function wt(V){l[V]!==!1&&(s.disable(V),l[V]=!1)}function Wt(V,_t){return f[V]!==_t?(s.bindFramebuffer(V,_t),f[V]=_t,V===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=_t),V===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function It(V,_t){let Pt=u,pt=!1;if(V){Pt=p.get(_t),Pt===void 0&&(Pt=[],p.set(_t,Pt));let vt=V.textures;if(Pt.length!==vt.length||Pt[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Yt=vt.length;dt<Yt;dt++)Pt[dt]=s.COLOR_ATTACHMENT0+dt;Pt.length=vt.length,pt=!0}}else Pt[0]!==s.BACK&&(Pt[0]=s.BACK,pt=!0);pt&&s.drawBuffers(Pt)}function nt(V){return g!==V?(s.useProgram(V),g=V,!0):!1}let Ft={[Xn]:s.FUNC_ADD,[pf]:s.FUNC_SUBTRACT,[mf]:s.FUNC_REVERSE_SUBTRACT};Ft[gf]=s.MIN,Ft[xf]=s.MAX;let L={[Gs]:s.ZERO,[vf]:s.ONE,[yf]:s.SRC_COLOR,[Na]:s.SRC_ALPHA,[Sf]:s.SRC_ALPHA_SATURATE,[Oo]:s.DST_COLOR,[zo]:s.DST_ALPHA,[_f]:s.ONE_MINUS_SRC_COLOR,[za]:s.ONE_MINUS_SRC_ALPHA,[bf]:s.ONE_MINUS_DST_COLOR,[Mf]:s.ONE_MINUS_DST_ALPHA,[wf]:s.CONSTANT_COLOR,[Ef]:s.ONE_MINUS_CONSTANT_COLOR,[Tf]:s.CONSTANT_ALPHA,[Af]:s.ONE_MINUS_CONSTANT_ALPHA};function Nt(V,_t,Pt,pt,vt,dt,Yt,se,Pe,jt){if(V===ln){x===!0&&(wt(s.BLEND),x=!1);return}if(x===!1&&(at(s.BLEND),x=!0),V!==rl){if(V!==m||jt!==b){if((d!==Xn||y!==Xn)&&(s.blendEquation(s.FUNC_ADD),d=Xn,y=Xn),jt)switch(V){case Bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFunc(s.ONE,s.ONE);break;case Th:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ah:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Th:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ah:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,M=null,w=null,A=null,I.set(0,0,0),D=0,m=V,b=jt}return}vt=vt||_t,dt=dt||Pt,Yt=Yt||pt,(_t!==d||vt!==y)&&(s.blendEquationSeparate(Ft[_t],Ft[vt]),d=_t,y=vt),(Pt!==_||pt!==M||dt!==w||Yt!==A)&&(s.blendFuncSeparate(L[Pt],L[pt],L[dt],L[Yt]),_=Pt,M=pt,w=dt,A=Yt),(se.equals(I)===!1||Pe!==D)&&(s.blendColor(se.r,se.g,se.b,Pe),I.copy(se),D=Pe),m=V,b=!1}function Rt(V,_t){V.side===rn?wt(s.CULL_FACE):at(s.CULL_FACE);let Pt=V.side===Sn;_t&&(Pt=!Pt),Ct(Pt),V.blending===Bi&&V.transparent===!1?Nt(ln):Nt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let pt=V.stencilWrite;a.setTest(pt),pt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),G(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(V){S!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),S=V)}function q(V){V!==ff?(at(s.CULL_FACE),V!==N&&(V===wh?s.cullFace(s.BACK):V===df?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),N=V}function W(V){V!==H&&(X&&s.lineWidth(V),H=V)}function G(V,_t,Pt){V?(at(s.POLYGON_OFFSET_FILL),(B!==_t||O!==Pt)&&(s.polygonOffset(_t,Pt),B=_t,O=Pt)):wt(s.POLYGON_OFFSET_FILL)}function rt(V){V?at(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Z(V){V===void 0&&(V=s.TEXTURE0+Y-1),ut!==V&&(s.activeTexture(V),ut=V)}function Q(V,_t,Pt){Pt===void 0&&(ut===null?Pt=s.TEXTURE0+Y-1:Pt=ut);let pt=xt[Pt];pt===void 0&&(pt={type:void 0,texture:void 0},xt[Pt]=pt),(pt.type!==V||pt.texture!==_t)&&(ut!==Pt&&(s.activeTexture(Pt),ut=Pt),s.bindTexture(V,_t||ot[V]),pt.type=V,pt.texture=_t)}function T(){let V=xt[ut];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function F(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function k(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function z(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(V){Vt.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Vt.copy(V))}function Tt(V){qt.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),qt.copy(V))}function ft(V,_t){let Pt=h.get(_t);Pt===void 0&&(Pt=new WeakMap,h.set(_t,Pt));let pt=Pt.get(V);pt===void 0&&(pt=s.getUniformBlockIndex(_t,V.name),Pt.set(V,pt))}function St(V,_t){let pt=h.get(_t).get(V);c.get(_t)!==pt&&(s.uniformBlockBinding(_t,pt,V.__bindingPointIndex),c.set(_t,pt))}function zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},ut=null,xt={},f={},p=new WeakMap,u=[],g=null,x=!1,m=null,d=null,_=null,M=null,y=null,w=null,A=null,I=new Ut(0,0,0),D=0,b=!1,S=null,N=null,H=null,B=null,O=null,Vt.set(0,0,s.canvas.width,s.canvas.height),qt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:wt,bindFramebuffer:Wt,drawBuffers:It,useProgram:nt,setBlending:Nt,setMaterial:Rt,setFlipSided:Ct,setCullFace:q,setLineWidth:W,setPolygonOffset:G,setScissorTest:rt,activeTexture:Z,bindTexture:Q,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:C,texImage2D:Mt,texImage3D:$,updateUBOMapping:ft,uniformBlockBinding:St,texStorage2D:J,texStorage3D:st,texSubImage2D:F,texSubImage3D:k,compressedTexSubImage2D:z,compressedTexSubImage3D:K,scissor:lt,viewport:Tt,reset:zt}}function Bv(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Zt,l=new WeakMap,f,p=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return u?new OffscreenCanvas(T,v):go("canvas")}function x(T,v,C){let F=1,k=Q(T);if((k.width>C||k.height>C)&&(F=C/Math.max(k.width,k.height)),F<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let z=Math.floor(F*k.width),K=Math.floor(F*k.height);f===void 0&&(f=g(z,K));let J=v?g(z,K):f;return J.width=z,J.height=K,J.getContext("2d").drawImage(T,0,0,z,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+z+"x"+K+")."),J}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){s.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(T,v,C,F,k=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let z=v;if(v===s.RED&&(C===s.FLOAT&&(z=s.R32F),C===s.HALF_FLOAT&&(z=s.R16F),C===s.UNSIGNED_BYTE&&(z=s.R8)),v===s.RED_INTEGER&&(C===s.UNSIGNED_BYTE&&(z=s.R8UI),C===s.UNSIGNED_SHORT&&(z=s.R16UI),C===s.UNSIGNED_INT&&(z=s.R32UI),C===s.BYTE&&(z=s.R8I),C===s.SHORT&&(z=s.R16I),C===s.INT&&(z=s.R32I)),v===s.RG&&(C===s.FLOAT&&(z=s.RG32F),C===s.HALF_FLOAT&&(z=s.RG16F),C===s.UNSIGNED_BYTE&&(z=s.RG8)),v===s.RG_INTEGER&&(C===s.UNSIGNED_BYTE&&(z=s.RG8UI),C===s.UNSIGNED_SHORT&&(z=s.RG16UI),C===s.UNSIGNED_INT&&(z=s.RG32UI),C===s.BYTE&&(z=s.RG8I),C===s.SHORT&&(z=s.RG16I),C===s.INT&&(z=s.RG32I)),v===s.RGB_INTEGER&&(C===s.UNSIGNED_BYTE&&(z=s.RGB8UI),C===s.UNSIGNED_SHORT&&(z=s.RGB16UI),C===s.UNSIGNED_INT&&(z=s.RGB32UI),C===s.BYTE&&(z=s.RGB8I),C===s.SHORT&&(z=s.RGB16I),C===s.INT&&(z=s.RGB32I)),v===s.RGBA_INTEGER&&(C===s.UNSIGNED_BYTE&&(z=s.RGBA8UI),C===s.UNSIGNED_SHORT&&(z=s.RGBA16UI),C===s.UNSIGNED_INT&&(z=s.RGBA32UI),C===s.BYTE&&(z=s.RGBA8I),C===s.SHORT&&(z=s.RGBA16I),C===s.INT&&(z=s.RGBA32I)),v===s.RGB&&(C===s.UNSIGNED_INT_5_9_9_9_REV&&(z=s.RGB9_E5),C===s.UNSIGNED_INT_10F_11F_11F_REV&&(z=s.R11F_G11F_B10F)),v===s.RGBA){let K=k?po:De.getTransfer(F);C===s.FLOAT&&(z=s.RGBA32F),C===s.HALF_FLOAT&&(z=s.RGBA16F),C===s.UNSIGNED_BYTE&&(z=K===Fe?s.SRGB8_ALPHA8:s.RGBA8),C===s.UNSIGNED_SHORT_4_4_4_4&&(z=s.RGBA4),C===s.UNSIGNED_SHORT_5_5_5_1&&(z=s.RGB5_A1)}return(z===s.R16F||z===s.R32F||z===s.RG16F||z===s.RG32F||z===s.RGBA16F||z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function y(T,v){let C;return T?v===null||v===hs||v===us?C=s.DEPTH24_STENCIL8:v===di?C=s.DEPTH32F_STENCIL8:v===Or&&(C=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hs||v===us?C=s.DEPTH_COMPONENT24:v===di?C=s.DEPTH_COMPONENT32F:v===Or&&(C=s.DEPTH_COMPONENT16),C}function w(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==bn&&T.minFilter!==ui?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){let v=T.target;v.removeEventListener("dispose",A),D(v),v.isVideoTexture&&l.delete(v)}function I(T){let v=T.target;v.removeEventListener("dispose",I),S(v)}function D(T){let v=n.get(T);if(v.__webglInit===void 0)return;let C=T.source,F=p.get(C);if(F){let k=F[v.__cacheKey];k.usedTimes--,k.usedTimes===0&&b(T),Object.keys(F).length===0&&p.delete(C)}n.remove(T)}function b(T){let v=n.get(T);s.deleteTexture(v.__webglTexture);let C=T.source,F=p.get(C);delete F[v.__cacheKey],o.memory.textures--}function S(T){let v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(v.__webglFramebuffer[F]))for(let k=0;k<v.__webglFramebuffer[F].length;k++)s.deleteFramebuffer(v.__webglFramebuffer[F][k]);else s.deleteFramebuffer(v.__webglFramebuffer[F]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[F])}else{if(Array.isArray(v.__webglFramebuffer))for(let F=0;F<v.__webglFramebuffer.length;F++)s.deleteFramebuffer(v.__webglFramebuffer[F]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let F=0;F<v.__webglColorRenderbuffer.length;F++)v.__webglColorRenderbuffer[F]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[F]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let C=T.textures;for(let F=0,k=C.length;F<k;F++){let z=n.get(C[F]);z.__webglTexture&&(s.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(C[F])}n.remove(T)}let N=0;function H(){N=0}function B(){let T=N;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),N+=1,T}function O(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Y(T,v){let C=n.get(T);if(T.isVideoTexture&&rt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&C.__version!==T.version){let F=T.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(C,T,v);return}}else T.isExternalTexture&&(C.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,C.__webglTexture,s.TEXTURE0+v)}function X(T,v){let C=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&C.__version!==T.version){ot(C,T,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,C.__webglTexture,s.TEXTURE0+v)}function it(T,v){let C=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&C.__version!==T.version){ot(C,T,v);return}e.bindTexture(s.TEXTURE_3D,C.__webglTexture,s.TEXTURE0+v)}function R(T,v){let C=n.get(T);if(T.version>0&&C.__version!==T.version){at(C,T,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+v)}let ut={[ei]:s.REPEAT,[rs]:s.CLAMP_TO_EDGE,[Oa]:s.MIRRORED_REPEAT},xt={[bn]:s.NEAREST,[Pf]:s.NEAREST_MIPMAP_NEAREST,[ko]:s.NEAREST_MIPMAP_LINEAR,[ui]:s.LINEAR,[Ml]:s.LINEAR_MIPMAP_NEAREST,[cs]:s.LINEAR_MIPMAP_LINEAR},Et={[Lf]:s.NEVER,[Bf]:s.ALWAYS,[Uf]:s.LESS,[zh]:s.LEQUAL,[Ff]:s.EQUAL,[Of]:s.GEQUAL,[Nf]:s.GREATER,[zf]:s.NOTEQUAL};function Lt(T,v){if(v.type===di&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ui||v.magFilter===Ml||v.magFilter===ko||v.magFilter===cs||v.minFilter===ui||v.minFilter===Ml||v.minFilter===ko||v.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ut[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ut[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ut[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,xt[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bn||v.minFilter!==ko&&v.minFilter!==cs||v.type===di&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let C=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Vt(T,v){let C=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));let F=v.source,k=p.get(F);k===void 0&&(k={},p.set(F,k));let z=O(v);if(z!==T.__cacheKey){k[z]===void 0&&(k[z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,C=!0),k[z].usedTimes++;let K=k[T.__cacheKey];K!==void 0&&(k[T.__cacheKey].usedTimes--,K.usedTimes===0&&b(v)),T.__cacheKey=z,T.__webglTexture=k[z].texture}return C}function qt(T,v,C){return Math.floor(Math.floor(T/C)/v)}function $t(T,v,C,F){let z=T.updateRanges;if(z.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,C,F,v.data);else{z.sort(($,lt)=>$.start-lt.start);let K=0;for(let $=1;$<z.length;$++){let lt=z[K],Tt=z[$],ft=lt.start+lt.count,St=qt(Tt.start,v.width,4),zt=qt(lt.start,v.width,4);Tt.start<=ft+1&&St===zt&&qt(Tt.start+Tt.count-1,v.width,4)===St?lt.count=Math.max(lt.count,Tt.start+Tt.count-lt.start):(++K,z[K]=Tt)}z.length=K+1;let J=s.getParameter(s.UNPACK_ROW_LENGTH),st=s.getParameter(s.UNPACK_SKIP_PIXELS),Mt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let $=0,lt=z.length;$<lt;$++){let Tt=z[$],ft=Math.floor(Tt.start/4),St=Math.ceil(Tt.count/4),zt=ft%v.width,V=Math.floor(ft/v.width),_t=St,Pt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,zt),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),e.texSubImage2D(s.TEXTURE_2D,0,zt,V,_t,Pt,C,F,v.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,J),s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,Mt)}}function ot(T,v,C){let F=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(F=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(F=s.TEXTURE_3D);let k=Vt(T,v),z=v.source;e.bindTexture(F,T.__webglTexture,s.TEXTURE0+C);let K=n.get(z);if(z.version!==K.__version||k===!0){e.activeTexture(s.TEXTURE0+C);let J=De.getPrimaries(De.workingColorSpace),st=v.colorSpace===Vi?null:De.getPrimaries(v.colorSpace),Mt=v.colorSpace===Vi||J===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let $=x(v.image,!1,i.maxTextureSize);$=Z(v,$);let lt=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type),ft=M(v.internalFormat,lt,Tt,v.colorSpace,v.isVideoTexture);Lt(F,v);let St,zt=v.mipmaps,V=v.isVideoTexture!==!0,_t=K.__version===void 0||k===!0,Pt=z.dataReady,pt=w(v,$);if(v.isDepthTexture)ft=y(v.format===fs,v.type),_t&&(V?e.texStorage2D(s.TEXTURE_2D,1,ft,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,ft,$.width,$.height,0,lt,Tt,null));else if(v.isDataTexture)if(zt.length>0){V&&_t&&e.texStorage2D(s.TEXTURE_2D,pt,ft,zt[0].width,zt[0].height);for(let vt=0,dt=zt.length;vt<dt;vt++)St=zt[vt],V?Pt&&e.texSubImage2D(s.TEXTURE_2D,vt,0,0,St.width,St.height,lt,Tt,St.data):e.texImage2D(s.TEXTURE_2D,vt,ft,St.width,St.height,0,lt,Tt,St.data);v.generateMipmaps=!1}else V?(_t&&e.texStorage2D(s.TEXTURE_2D,pt,ft,$.width,$.height),Pt&&$t(v,$,lt,Tt)):e.texImage2D(s.TEXTURE_2D,0,ft,$.width,$.height,0,lt,Tt,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,ft,zt[0].width,zt[0].height,$.depth);for(let vt=0,dt=zt.length;vt<dt;vt++)if(St=zt[vt],v.format!==zn)if(lt!==null)if(V){if(Pt)if(v.layerUpdates.size>0){let Yt=Wh(St.width,St.height,v.format,v.type);for(let se of v.layerUpdates){let Pe=St.data.subarray(se*Yt/St.data.BYTES_PER_ELEMENT,(se+1)*Yt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,se,St.width,St.height,1,lt,Pe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,St.width,St.height,$.depth,lt,St.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,vt,ft,St.width,St.height,$.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,St.width,St.height,$.depth,lt,Tt,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,vt,ft,St.width,St.height,$.depth,0,lt,Tt,St.data)}else{V&&_t&&e.texStorage2D(s.TEXTURE_2D,pt,ft,zt[0].width,zt[0].height);for(let vt=0,dt=zt.length;vt<dt;vt++)St=zt[vt],v.format!==zn?lt!==null?V?Pt&&e.compressedTexSubImage2D(s.TEXTURE_2D,vt,0,0,St.width,St.height,lt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,vt,ft,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Pt&&e.texSubImage2D(s.TEXTURE_2D,vt,0,0,St.width,St.height,lt,Tt,St.data):e.texImage2D(s.TEXTURE_2D,vt,ft,St.width,St.height,0,lt,Tt,St.data)}else if(v.isDataArrayTexture)if(V){if(_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,ft,$.width,$.height,$.depth),Pt)if(v.layerUpdates.size>0){let vt=Wh($.width,$.height,v.format,v.type);for(let dt of v.layerUpdates){let Yt=$.data.subarray(dt*vt/$.data.BYTES_PER_ELEMENT,(dt+1)*vt/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,dt,$.width,$.height,1,lt,Tt,Yt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,lt,Tt,$.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ft,$.width,$.height,$.depth,0,lt,Tt,$.data);else if(v.isData3DTexture)V?(_t&&e.texStorage3D(s.TEXTURE_3D,pt,ft,$.width,$.height,$.depth),Pt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,lt,Tt,$.data)):e.texImage3D(s.TEXTURE_3D,0,ft,$.width,$.height,$.depth,0,lt,Tt,$.data);else if(v.isFramebufferTexture){if(_t)if(V)e.texStorage2D(s.TEXTURE_2D,pt,ft,$.width,$.height);else{let vt=$.width,dt=$.height;for(let Yt=0;Yt<pt;Yt++)e.texImage2D(s.TEXTURE_2D,Yt,ft,vt,dt,0,lt,Tt,null),vt>>=1,dt>>=1}}else if(zt.length>0){if(V&&_t){let vt=Q(zt[0]);e.texStorage2D(s.TEXTURE_2D,pt,ft,vt.width,vt.height)}for(let vt=0,dt=zt.length;vt<dt;vt++)St=zt[vt],V?Pt&&e.texSubImage2D(s.TEXTURE_2D,vt,0,0,lt,Tt,St):e.texImage2D(s.TEXTURE_2D,vt,ft,lt,Tt,St);v.generateMipmaps=!1}else if(V){if(_t){let vt=Q($);e.texStorage2D(s.TEXTURE_2D,pt,ft,vt.width,vt.height)}Pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,Tt,$)}else e.texImage2D(s.TEXTURE_2D,0,ft,lt,Tt,$);m(v)&&d(F),K.__version=z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function at(T,v,C){if(v.image.length!==6)return;let F=Vt(T,v),k=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+C);let z=n.get(k);if(k.version!==z.__version||F===!0){e.activeTexture(s.TEXTURE0+C);let K=De.getPrimaries(De.workingColorSpace),J=v.colorSpace===Vi?null:De.getPrimaries(v.colorSpace),st=v.colorSpace===Vi||K===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Mt=v.isCompressedTexture||v.image[0].isCompressedTexture,$=v.image[0]&&v.image[0].isDataTexture,lt=[];for(let dt=0;dt<6;dt++)!Mt&&!$?lt[dt]=x(v.image[dt],!0,i.maxCubemapSize):lt[dt]=$?v.image[dt].image:v.image[dt],lt[dt]=Z(v,lt[dt]);let Tt=lt[0],ft=r.convert(v.format,v.colorSpace),St=r.convert(v.type),zt=M(v.internalFormat,ft,St,v.colorSpace),V=v.isVideoTexture!==!0,_t=z.__version===void 0||F===!0,Pt=k.dataReady,pt=w(v,Tt);Lt(s.TEXTURE_CUBE_MAP,v);let vt;if(Mt){V&&_t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,zt,Tt.width,Tt.height);for(let dt=0;dt<6;dt++){vt=lt[dt].mipmaps;for(let Yt=0;Yt<vt.length;Yt++){let se=vt[Yt];v.format!==zn?ft!==null?V?Pt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,0,0,se.width,se.height,ft,se.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,zt,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,0,0,se.width,se.height,ft,St,se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,zt,se.width,se.height,0,ft,St,se.data)}}}else{if(vt=v.mipmaps,V&&_t){vt.length>0&&pt++;let dt=Q(lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,zt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if($){V?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,lt[dt].width,lt[dt].height,ft,St,lt[dt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,zt,lt[dt].width,lt[dt].height,0,ft,St,lt[dt].data);for(let Yt=0;Yt<vt.length;Yt++){let Pe=vt[Yt].image[dt].image;V?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,0,0,Pe.width,Pe.height,ft,St,Pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,zt,Pe.width,Pe.height,0,ft,St,Pe.data)}}else{V?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,ft,St,lt[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,zt,ft,St,lt[dt]);for(let Yt=0;Yt<vt.length;Yt++){let se=vt[Yt];V?Pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,0,0,ft,St,se.image[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,zt,ft,St,se.image[dt])}}}m(v)&&d(s.TEXTURE_CUBE_MAP),z.__version=k.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function wt(T,v,C,F,k,z){let K=r.convert(C.format,C.colorSpace),J=r.convert(C.type),st=M(C.internalFormat,K,J,C.colorSpace),Mt=n.get(v),$=n.get(C);if($.__renderTarget=v,!Mt.__hasExternalTextures){let lt=Math.max(1,v.width>>z),Tt=Math.max(1,v.height>>z);k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?e.texImage3D(k,z,st,lt,Tt,v.depth,0,K,J,null):e.texImage2D(k,z,st,lt,Tt,0,K,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),G(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,F,k,$.__webglTexture,0,W(v)):(k===s.TEXTURE_2D||k>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,F,k,$.__webglTexture,z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(T,v,C){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){let F=v.depthTexture,k=F&&F.isDepthTexture?F.type:null,z=y(v.stencilBuffer,k),K=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=W(v);G(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,z,v.width,v.height):C?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,z,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,z,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,T)}else{let F=v.textures;for(let k=0;k<F.length;k++){let z=F[k],K=r.convert(z.format,z.colorSpace),J=r.convert(z.type),st=M(z.internalFormat,K,J,z.colorSpace),Mt=W(v);C&&G(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,st,v.width,v.height):G(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt,st,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,st,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=n.get(v.depthTexture);F.__renderTarget=v,(!F.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let k=F.__webglTexture,z=W(v);if(v.depthTexture.format===Rr)G(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,k,0,z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,k,0);else if(v.depthTexture.format===fs)G(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,k,0,z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function nt(T){let v=n.get(T),C=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let F=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),F){let k=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,F.removeEventListener("dispose",k)};F.addEventListener("dispose",k),v.__depthDisposeCallback=k}v.__boundDepthTexture=F}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");let F=T.texture.mipmaps;F&&F.length>0?It(v.__webglFramebuffer[0],T):It(v.__webglFramebuffer,T)}else if(C){v.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[F]),v.__webglDepthbuffer[F]===void 0)v.__webglDepthbuffer[F]=s.createRenderbuffer(),Wt(v.__webglDepthbuffer[F],T,!1);else{let k=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[F];s.bindRenderbuffer(s.RENDERBUFFER,z),s.framebufferRenderbuffer(s.FRAMEBUFFER,k,s.RENDERBUFFER,z)}}else{let F=T.texture.mipmaps;if(F&&F.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Wt(v.__webglDepthbuffer,T,!1);else{let k=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,z),s.framebufferRenderbuffer(s.FRAMEBUFFER,k,s.RENDERBUFFER,z)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(T,v,C){let F=n.get(T);v!==void 0&&wt(F.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),C!==void 0&&nt(T)}function L(T){let v=T.texture,C=n.get(T),F=n.get(v);T.addEventListener("dispose",I);let k=T.textures,z=T.isWebGLCubeRenderTarget===!0,K=k.length>1;if(K||(F.__webglTexture===void 0&&(F.__webglTexture=s.createTexture()),F.__version=v.version,o.memory.textures++),z){C.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[J]=[];for(let st=0;st<v.mipmaps.length;st++)C.__webglFramebuffer[J][st]=s.createFramebuffer()}else C.__webglFramebuffer[J]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)C.__webglFramebuffer[J]=s.createFramebuffer()}else C.__webglFramebuffer=s.createFramebuffer();if(K)for(let J=0,st=k.length;J<st;J++){let Mt=n.get(k[J]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&G(T)===!1){C.__webglMultisampledFramebuffer=s.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let J=0;J<k.length;J++){let st=k[J];C.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,C.__webglColorRenderbuffer[J]);let Mt=r.convert(st.format,st.colorSpace),$=r.convert(st.type),lt=M(st.internalFormat,Mt,$,st.colorSpace,T.isXRRenderTarget===!0),Tt=W(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,lt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,C.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(C.__webglDepthRenderbuffer=s.createRenderbuffer(),Wt(C.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(z){e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture),Lt(s.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)wt(C.__webglFramebuffer[J][st],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,st);else wt(C.__webglFramebuffer[J],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(v)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){for(let J=0,st=k.length;J<st;J++){let Mt=k[J],$=n.get(Mt),lt=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),Lt(lt,Mt),wt(C.__webglFramebuffer,T,Mt,s.COLOR_ATTACHMENT0+J,lt,0),m(Mt)&&d(lt)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,F.__webglTexture),Lt(J,v),v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)wt(C.__webglFramebuffer[st],T,v,s.COLOR_ATTACHMENT0,J,st);else wt(C.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,J,0);m(v)&&d(J),e.unbindTexture()}T.depthBuffer&&nt(T)}function Nt(T){let v=T.textures;for(let C=0,F=v.length;C<F;C++){let k=v[C];if(m(k)){let z=_(T),K=n.get(k).__webglTexture;e.bindTexture(z,K),d(z),e.unbindTexture()}}}let Rt=[],Ct=[];function q(T){if(T.samples>0){if(G(T)===!1){let v=T.textures,C=T.width,F=T.height,k=s.COLOR_BUFFER_BIT,z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=n.get(T),J=v.length>1;if(J)for(let Mt=0;Mt<v.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,K.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer);let st=T.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let Mt=0;Mt<v.length;Mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(k|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(k|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,K.__webglColorRenderbuffer[Mt]);let $=n.get(v[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,C,F,0,0,C,F,k,s.NEAREST),c===!0&&(Rt.length=0,Ct.length=0,Rt.push(s.COLOR_ATTACHMENT0+Mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Rt.push(z),Ct.push(z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let Mt=0;Mt<v.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,K.__webglColorRenderbuffer[Mt]);let $=n.get(v[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,K.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,$,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function W(T){return Math.min(i.maxSamples,T.samples)}function G(T){let v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(T){let v=o.render.frame;l.get(T)!==v&&(l.set(T,v),T.update())}function Z(T,v){let C=T.colorSpace,F=T.format,k=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||C!==Ls&&C!==Vi&&(De.getTransfer(C)===Fe?(F!==zn||k!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function Q(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=it,this.setTextureCube=R,this.rebindTextures=Ft,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=G}function kv(s,t){function e(n,i=Vi){let r,o=De.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===Sl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ph)return s.BYTE;if(n===Ih)return s.SHORT;if(n===Or)return s.UNSIGNED_SHORT;if(n===bl)return s.INT;if(n===hs)return s.UNSIGNED_INT;if(n===di)return s.FLOAT;if(n===on)return s.HALF_FLOAT;if(n===Uh)return s.ALPHA;if(n===Fh)return s.RGB;if(n===zn)return s.RGBA;if(n===Rr)return s.DEPTH_COMPONENT;if(n===fs)return s.DEPTH_STENCIL;if(n===El)return s.RED;if(n===Tl)return s.RED_INTEGER;if(n===Nh)return s.RG;if(n===Al)return s.RG_INTEGER;if(n===Rl)return s.RGBA_INTEGER;if(n===Ho||n===Go||n===Vo||n===Wo)if(o===Fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Pl||n===Il||n===Dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ll||n===Ul||n===Fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ll||n===Ul)return o===Fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===zl||n===Ol||n===Bl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ol)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ql)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===Jl||n===jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Kl)return o===Fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===tc||n===ec||n===nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ql)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gv=`
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

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new To(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ae({vertexShader:Hv,fragmentShader:Gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new Oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends ki{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,f=null,p=null,u=null,g=null,x=typeof XRWebGLBinding<"u",m=new iu,d={},_=e.getContextAttributes(),M=null,y=null,w=[],A=[],I=new Zt,D=null,b=new dn;b.viewport=new Ne;let S=new dn;S.viewport=new Ne;let N=[b,S],H=new il,B=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let at=w[ot];return at===void 0&&(at=new Lr,w[ot]=at),at.getTargetRaySpace()},this.getControllerGrip=function(ot){let at=w[ot];return at===void 0&&(at=new Lr,w[ot]=at),at.getGripSpace()},this.getHand=function(ot){let at=w[ot];return at===void 0&&(at=new Lr,w[ot]=at),at.getHandSpace()};function Y(ot){let at=A.indexOf(ot.inputSource);if(at===-1)return;let wt=w[at];wt!==void 0&&(wt.update(ot.inputSource,ot.frame,h||o),wt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function X(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",it);for(let ot=0;ot<w.length;ot++){let at=A[ot];at!==null&&(A[ot]=null,w[ot].disconnect(at))}B=null,O=null,m.reset();for(let ot in d)delete d[ot];t.setRenderTarget(M),u=null,p=null,f=null,i=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(ot){h=ot},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ot){if(i=ot,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",X),i.addEventListener("inputsourceschange",it),_.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Wt=null,It=null;_.depth&&(It=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=_.stencil?fs:Rr,Wt=_.stencil?us:hs);let nt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(nt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new $e(p.textureWidth,p.textureHeight,{format:zn,type:Yn,depthTexture:new zs(p.textureWidth,p.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let wt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,wt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new $e(u.framebufferWidth,u.framebufferHeight,{format:zn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(ot){for(let at=0;at<ot.removed.length;at++){let wt=ot.removed[at],Wt=A.indexOf(wt);Wt>=0&&(A[Wt]=null,w[Wt].disconnect(wt))}for(let at=0;at<ot.added.length;at++){let wt=ot.added[at],Wt=A.indexOf(wt);if(Wt===-1){for(let nt=0;nt<w.length;nt++)if(nt>=A.length){A.push(wt),Wt=nt;break}else if(A[nt]===null){A[nt]=wt,Wt=nt;break}if(Wt===-1)break}let It=w[Wt];It&&It.connect(wt)}}let R=new U,ut=new U;function xt(ot,at,wt){R.setFromMatrixPosition(at.matrixWorld),ut.setFromMatrixPosition(wt.matrixWorld);let Wt=R.distanceTo(ut),It=at.projectionMatrix.elements,nt=wt.projectionMatrix.elements,Ft=It[14]/(It[10]-1),L=It[14]/(It[10]+1),Nt=(It[9]+1)/It[5],Rt=(It[9]-1)/It[5],Ct=(It[8]-1)/It[0],q=(nt[8]+1)/nt[0],W=Ft*Ct,G=Ft*q,rt=Wt/(-Ct+q),Z=rt*-Ct;if(at.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(Z),ot.translateZ(rt),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),It[10]===-1)ot.projectionMatrix.copy(at.projectionMatrix),ot.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let Q=Ft+rt,T=L+rt,v=W-Z,C=G+(Wt-Z),F=Nt*L/T*Q,k=Rt*L/T*Q;ot.projectionMatrix.makePerspective(v,C,F,k,Q,T),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function Et(ot,at){at===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(at.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(i===null)return;let at=ot.near,wt=ot.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),H.near=S.near=b.near=at,H.far=S.far=b.far=wt,(B!==H.near||O!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),B=H.near,O=H.far),H.layers.mask=ot.layers.mask|6,b.layers.mask=H.layers.mask&3,S.layers.mask=H.layers.mask&5;let Wt=ot.parent,It=H.cameras;Et(H,Wt);for(let nt=0;nt<It.length;nt++)Et(It[nt],Wt);It.length===2?xt(H,b,S):H.projectionMatrix.copy(b.projectionMatrix),Lt(ot,H,Wt)};function Lt(ot,at,wt){wt===null?ot.matrix.copy(at.matrixWorld):(ot.matrix.copy(wt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(at.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(at.projectionMatrix),ot.projectionMatrixInverse.copy(at.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Us*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(p===null&&u===null))return c},this.setFoveation=function(ot){c=ot,p!==null&&(p.fixedFoveation=ot),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ot)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(ot){return d[ot]};let Vt=null;function qt(ot,at){if(l=at.getViewerPose(h||o),g=at,l!==null){let wt=l.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Wt=!1;wt.length!==H.cameras.length&&(H.cameras.length=0,Wt=!0);for(let L=0;L<wt.length;L++){let Nt=wt[L],Rt=null;if(u!==null)Rt=u.getViewport(Nt);else{let q=f.getViewSubImage(p,Nt);Rt=q.viewport,L===0&&(t.setRenderTargetTextures(y,q.colorTexture,q.depthStencilTexture),t.setRenderTarget(y))}let Ct=N[L];Ct===void 0&&(Ct=new dn,Ct.layers.enable(L),Ct.viewport=new Ne,N[L]=Ct),Ct.matrix.fromArray(Nt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Nt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),L===0&&(H.matrix.copy(Ct.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Wt===!0&&H.cameras.push(Ct)}let It=i.enabledFeatures;if(It&&It.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let L=f.getDepthInformation(wt[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(It&&It.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let L=0;L<wt.length;L++){let Nt=wt[L].camera;if(Nt){let Rt=d[Nt];Rt||(Rt=new To,d[Nt]=Rt);let Ct=f.getCameraImage(Nt);Rt.sourceTexture=Ct}}}}for(let wt=0;wt<w.length;wt++){let Wt=A[wt],It=w[wt];Wt!==null&&It!==void 0&&It.update(Wt,at,h||o)}Vt&&Vt(ot,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}let $t=new dd;$t.setAnimationLoop(qt),this.setAnimationLoop=function(ot){Vt=ot},this.dispose=function(){}}},Ys=new en,Vv=new Ht;function Wv(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Hh(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,M,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),l(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&u(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,_,M):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=t.get(d),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,Ys.copy(y),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),m.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(Ys)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function u(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let _=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xv(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){let y=M.program;n.uniformBlockBinding(_,y)}function h(_,M){let y=i[_.id];y===void 0&&(g(_),y=l(_),i[_.id]=y,_.addEventListener("dispose",m));let w=M.program;n.updateUBOMapping(_,w);let A=t.render.frame;r[_.id]!==A&&(p(_),r[_.id]=A)}function l(_){let M=f();_.__bindingPointIndex=M;let y=s.createBuffer(),w=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let M=i[_.id],y=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,I=y.length;A<I;A++){let D=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,S=D.length;b<S;b++){let N=D[b];if(u(N,A,b,w)===!0){let H=N.__offset,B=Array.isArray(N.value)?N.value:[N.value],O=0;for(let Y=0;Y<B.length;Y++){let X=B[Y],it=x(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,H+O,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,O),O+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(_,M,y,w){let A=_.value,I=M+"_"+y;if(w[I]===void 0)return typeof A=="number"||typeof A=="boolean"?w[I]=A:w[I]=A.clone(),!0;{let D=w[I];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return w[I]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(_){let M=_.uniforms,y=0,w=16;for(let I=0,D=M.length;I<D;I++){let b=Array.isArray(M[I])?M[I]:[M[I]];for(let S=0,N=b.length;S<N;S++){let H=b[S],B=Array.isArray(H.value)?H.value:[H.value];for(let O=0,Y=B.length;O<Y;O++){let X=B[O],it=x(X),R=y%w,ut=R%it.boundary,xt=R+ut;y+=ut,xt!==0&&w-xt<it.storage&&(y+=w-xt),H.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=it.storage}}}let A=y%w;return A>0&&(y+=w-A),_.__size=y,_.__cache={},this}function x(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){let M=_.target;M.removeEventListener("dispose",m);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:h,dispose:d}}var lc=class{constructor(t={}){let{canvas:e=kf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,_=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1;this._outputColorSpace=Mn;let A=0,I=0,D=null,b=-1,S=null,N=new Ne,H=new Ne,B=null,O=new Ut(0),Y=0,X=e.width,it=e.height,R=1,ut=null,xt=null,Et=new Ne(0,0,X,it),Lt=new Ne(0,0,X,it),Vt=!1,qt=new os,$t=!1,ot=!1,at=new Ht,wt=new U,Wt=new Ne,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function Ft(){return D===null?R:1}let L=n;function Nt(P,tt){return e.getContext(P,tt)}try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),L===null){let tt="webgl2";if(L=Nt(tt,P),L===null)throw Nt(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Rt,Ct,q,W,G,rt,Z,Q,T,v,C,F,k,z,K,J,st,Mt,$,lt,Tt,ft,St,zt;function V(){Rt=new cx(L),Rt.init(),ft=new kv(L,Rt),Ct=new nx(L,Rt,t,ft),q=new Ov(L,Rt),Ct.reversedDepthBuffer&&p&&q.buffers.depth.setReversed(!0),W=new fx(L),G=new Ev,rt=new Bv(L,Rt,q,G,Ct,ft,W),Z=new sx(y),Q=new lx(y),T=new v0(L),St=new tx(L,T),v=new hx(L,T,W,St),C=new px(L,v,T,W),$=new dx(L,Ct,rt),J=new ix(G),F=new wv(y,Z,Q,Rt,Ct,St,J),k=new Wv(y,G),z=new Av,K=new Lv(Rt),Mt=new Qg(y,Z,Q,q,C,u,c),st=new Nv(y,C,Ct),zt=new Xv(L,W,Ct,q),lt=new ex(L,Rt,W),Tt=new ux(L,Rt,W),W.programs=F.programs,y.capabilities=Ct,y.extensions=Rt,y.properties=G,y.renderLists=z,y.shadowMap=st,y.state=q,y.info=W}V();let _t=new su(y,L);this.xr=_t,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let P=Rt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Rt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(P){P!==void 0&&(R=P,this.setSize(X,it,!1))},this.getSize=function(P){return P.set(X,it)},this.setSize=function(P,tt,ct=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=P,it=tt,e.width=Math.floor(P*R),e.height=Math.floor(tt*R),ct===!0&&(e.style.width=P+"px",e.style.height=tt+"px"),this.setViewport(0,0,P,tt)},this.getDrawingBufferSize=function(P){return P.set(X*R,it*R).floor()},this.setDrawingBufferSize=function(P,tt,ct){X=P,it=tt,R=ct,e.width=Math.floor(P*ct),e.height=Math.floor(tt*ct),this.setViewport(0,0,P,tt)},this.getCurrentViewport=function(P){return P.copy(N)},this.getViewport=function(P){return P.copy(Et)},this.setViewport=function(P,tt,ct,ht){P.isVector4?Et.set(P.x,P.y,P.z,P.w):Et.set(P,tt,ct,ht),q.viewport(N.copy(Et).multiplyScalar(R).round())},this.getScissor=function(P){return P.copy(Lt)},this.setScissor=function(P,tt,ct,ht){P.isVector4?Lt.set(P.x,P.y,P.z,P.w):Lt.set(P,tt,ct,ht),q.scissor(H.copy(Lt).multiplyScalar(R).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(P){q.setScissorTest(Vt=P)},this.setOpaqueSort=function(P){ut=P},this.setTransparentSort=function(P){xt=P},this.getClearColor=function(P){return P.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(P=!0,tt=!0,ct=!0){let ht=0;if(P){let et=!1;if(D!==null){let E=D.texture.format;et=E===Rl||E===Al||E===Tl}if(et){let E=D.texture.type,j=E===Yn||E===hs||E===Or||E===us||E===Sl||E===wl,mt=Mt.getClearColor(),bt=Mt.getClearAlpha(),Gt=mt.r,At=mt.g,Ot=mt.b;j?(g[0]=Gt,g[1]=At,g[2]=Ot,g[3]=bt,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Gt,x[1]=At,x[2]=Ot,x[3]=bt,L.clearBufferiv(L.COLOR,0,x))}else ht|=L.COLOR_BUFFER_BIT}tt&&(ht|=L.DEPTH_BUFFER_BIT),ct&&(ht|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Mt.dispose(),z.dispose(),K.dispose(),G.dispose(),Z.dispose(),Q.dispose(),C.dispose(),St.dispose(),zt.dispose(),F.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Je),_t.removeEventListener("sessionend",Ki),Kn.stop()};function Pt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let P=W.autoReset,tt=st.enabled,ct=st.autoUpdate,ht=st.needsUpdate,et=st.type;V(),W.autoReset=P,st.enabled=tt,st.autoUpdate=ct,st.needsUpdate=ht,st.type=et}function vt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function dt(P){let tt=P.target;tt.removeEventListener("dispose",dt),Yt(tt)}function Yt(P){se(P),G.remove(P)}function se(P){let tt=G.get(P).programs;tt!==void 0&&(tt.forEach(function(ct){F.releaseProgram(ct)}),P.isShaderMaterial&&F.releaseShaderCache(P))}this.renderBufferDirect=function(P,tt,ct,ht,et,E){tt===null&&(tt=It);let j=et.isMesh&&et.matrixWorld.determinant()<0,mt=ur(P,tt,ct,ht,et);q.setMaterial(ht,j);let bt=ct.index,Gt=1;if(ht.wireframe===!0){if(bt=v.getWireframeAttribute(ct),bt===void 0)return;Gt=2}let At=ct.drawRange,Ot=ct.attributes.position,Jt=At.start*Gt,ee=(At.start+At.count)*Gt;E!==null&&(Jt=Math.max(Jt,E.start*Gt),ee=Math.min(ee,(E.start+E.count)*Gt)),bt!==null?(Jt=Math.max(Jt,0),ee=Math.min(ee,bt.count)):Ot!=null&&(Jt=Math.max(Jt,0),ee=Math.min(ee,Ot.count));let Qt=ee-Jt;if(Qt<0||Qt===1/0)return;St.setup(et,ht,mt,ct,bt);let de,me=lt;if(bt!==null&&(de=T.get(bt),me=Tt,me.setIndex(de)),et.isMesh)ht.wireframe===!0?(q.setLineWidth(ht.wireframeLinewidth*Ft()),me.setMode(L.LINES)):me.setMode(L.TRIANGLES);else if(et.isLine){let te=ht.linewidth;te===void 0&&(te=1),q.setLineWidth(te*Ft()),et.isLineSegments?me.setMode(L.LINES):et.isLineLoop?me.setMode(L.LINE_LOOP):me.setMode(L.LINE_STRIP)}else et.isPoints?me.setMode(L.POINTS):et.isSprite&&me.setMode(L.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))me.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let te=et._multiDrawStarts,Se=et._multiDrawCounts,ce=et._multiDrawCount,je=bt?T.get(bt).bytesPerElement:1,oi=G.get(ht).currentProgram.getUniforms();for(let Gn=0;Gn<ce;Gn++)oi.setValue(L,"_gl_DrawID",Gn),me.render(te[Gn]/je,Se[Gn])}else if(et.isInstancedMesh)me.renderInstances(Jt,Qt,et.count);else if(ct.isInstancedBufferGeometry){let te=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Se=Math.min(ct.instanceCount,te);me.renderInstances(Jt,Qt,Se)}else me.render(Jt,Qt)};function Pe(P,tt,ct){P.transparent===!0&&P.side===rn&&P.forceSinglePass===!1?(P.side=Sn,P.needsUpdate=!0,_i(P,tt,ct),P.side=Oi,P.needsUpdate=!0,_i(P,tt,ct),P.side=rn):_i(P,tt,ct)}this.compile=function(P,tt,ct=null){ct===null&&(ct=P),d=K.get(ct),d.init(tt),M.push(d),ct.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(d.pushLight(et),et.castShadow&&d.pushShadow(et))}),P!==ct&&P.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(d.pushLight(et),et.castShadow&&d.pushShadow(et))}),d.setupLights();let ht=new Set;return P.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let E=et.material;if(E)if(Array.isArray(E))for(let j=0;j<E.length;j++){let mt=E[j];Pe(mt,ct,et),ht.add(mt)}else Pe(E,ct,et),ht.add(E)}),d=M.pop(),ht},this.compileAsync=function(P,tt,ct=null){let ht=this.compile(P,tt,ct);return new Promise(et=>{function E(){if(ht.forEach(function(j){G.get(j).currentProgram.isReady()&&ht.delete(j)}),ht.size===0){et(P);return}setTimeout(E,10)}Rt.get("KHR_parallel_shader_compile")!==null?E():setTimeout(E,10)})};let jt=null;function Cn(P){jt&&jt(P)}function Je(){Kn.stop()}function Ki(){Kn.start()}let Kn=new dd;Kn.setAnimationLoop(Cn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(P){jt=P,_t.setAnimationLoop(P),P===null?Kn.stop():Kn.start()},_t.addEventListener("sessionstart",Je),_t.addEventListener("sessionend",Ki),this.render=function(P,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(tt),tt=_t.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,tt,D),d=K.get(P,M.length),d.init(tt),M.push(d),at.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),qt.setFromProjectionMatrix(at,hi,tt.reversedDepth),ot=this.localClippingEnabled,$t=J.init(this.clippingPlanes,ot),m=z.get(P,_.length),m.init(),_.push(m),_t.enabled===!0&&_t.isPresenting===!0){let E=y.xr.getDepthSensingMesh();E!==null&&bs(E,tt,-1/0,y.sortObjects)}bs(P,tt,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ut,xt),nt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,nt&&Mt.addToRenderList(m,P),this.info.render.frame++,$t===!0&&J.beginShadows();let ct=d.state.shadowsArray;st.render(ct,P,tt),$t===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let ht=m.opaque,et=m.transmissive;if(d.setupLights(),tt.isArrayCamera){let E=tt.cameras;if(et.length>0)for(let j=0,mt=E.length;j<mt;j++){let bt=E[j];hr(ht,et,P,bt)}nt&&Mt.render(P);for(let j=0,mt=E.length;j<mt;j++){let bt=E[j];cr(m,P,bt,bt.viewport)}}else et.length>0&&hr(ht,et,P,tt),nt&&Mt.render(P),cr(m,P,tt);D!==null&&I===0&&(rt.updateMultisampleRenderTarget(D),rt.updateRenderTargetMipmap(D)),P.isScene===!0&&P.onAfterRender(y,P,tt),St.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(d=M[M.length-1],$t===!0&&J.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function bs(P,tt,ct,ht){if(P.visible===!1)return;if(P.layers.test(tt.layers)){if(P.isGroup)ct=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(tt);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||qt.intersectsSprite(P)){ht&&Wt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(at);let j=C.update(P),mt=P.material;mt.visible&&m.push(P,j,mt,ct,Wt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||qt.intersectsObject(P))){let j=C.update(P),mt=P.material;if(ht&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Wt.copy(P.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),Wt.copy(j.boundingSphere.center)),Wt.applyMatrix4(P.matrixWorld).applyMatrix4(at)),Array.isArray(mt)){let bt=j.groups;for(let Gt=0,At=bt.length;Gt<At;Gt++){let Ot=bt[Gt],Jt=mt[Ot.materialIndex];Jt&&Jt.visible&&m.push(P,j,Jt,ct,Wt.z,Ot)}}else mt.visible&&m.push(P,j,mt,ct,Wt.z,null)}}let E=P.children;for(let j=0,mt=E.length;j<mt;j++)bs(E[j],tt,ct,ht)}function cr(P,tt,ct,ht){let et=P.opaque,E=P.transmissive,j=P.transparent;d.setupLightsView(ct),$t===!0&&J.setGlobalState(y.clippingPlanes,ct),ht&&q.viewport(N.copy(ht)),et.length>0&&yi(et,tt,ct),E.length>0&&yi(E,tt,ct),j.length>0&&yi(j,tt,ct),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function hr(P,tt,ct,ht){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ht.id]===void 0&&(d.state.transmissionRenderTarget[ht.id]=new $e(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?on:Yn,minFilter:cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));let E=d.state.transmissionRenderTarget[ht.id],j=ht.viewport||N;E.setSize(j.z*y.transmissionResolutionScale,j.w*y.transmissionResolutionScale);let mt=y.getRenderTarget(),bt=y.getActiveCubeFace(),Gt=y.getActiveMipmapLevel();y.setRenderTarget(E),y.getClearColor(O),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),nt&&Mt.render(ct);let At=y.toneMapping;y.toneMapping=Gi;let Ot=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),d.setupLightsView(ht),$t===!0&&J.setGlobalState(y.clippingPlanes,ht),yi(P,ct,ht),rt.updateMultisampleRenderTarget(E),rt.updateRenderTargetMipmap(E),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ee=0,Qt=tt.length;ee<Qt;ee++){let de=tt[ee],me=de.object,te=de.geometry,Se=de.material,ce=de.group;if(Se.side===rn&&me.layers.test(ht.layers)){let je=Se.side;Se.side=Sn,Se.needsUpdate=!0,Ji(me,ct,ht,te,Se,ce),Se.side=je,Se.needsUpdate=!0,Jt=!0}}Jt===!0&&(rt.updateMultisampleRenderTarget(E),rt.updateRenderTargetMipmap(E))}y.setRenderTarget(mt,bt,Gt),y.setClearColor(O,Y),Ot!==void 0&&(ht.viewport=Ot),y.toneMapping=At}function yi(P,tt,ct){let ht=tt.isScene===!0?tt.overrideMaterial:null;for(let et=0,E=P.length;et<E;et++){let j=P[et],mt=j.object,bt=j.geometry,Gt=j.group,At=j.material;At.allowOverride===!0&&ht!==null&&(At=ht),mt.layers.test(ct.layers)&&Ji(mt,tt,ct,bt,At,Gt)}}function Ji(P,tt,ct,ht,et,E){P.onBeforeRender(y,tt,ct,ht,et,E),P.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),et.onBeforeRender(y,tt,ct,ht,P,E),et.transparent===!0&&et.side===rn&&et.forceSinglePass===!1?(et.side=Sn,et.needsUpdate=!0,y.renderBufferDirect(ct,tt,ht,et,P,E),et.side=Oi,et.needsUpdate=!0,y.renderBufferDirect(ct,tt,ht,et,P,E),et.side=rn):y.renderBufferDirect(ct,tt,ht,et,P,E),P.onAfterRender(y,tt,ct,ht,et,E)}function _i(P,tt,ct){tt.isScene!==!0&&(tt=It);let ht=G.get(P),et=d.state.lights,E=d.state.shadowsArray,j=et.state.version,mt=F.getParameters(P,et.state,E,tt,ct),bt=F.getProgramCacheKey(mt),Gt=ht.programs;ht.environment=P.isMeshStandardMaterial?tt.environment:null,ht.fog=tt.fog,ht.envMap=(P.isMeshStandardMaterial?Q:Z).get(P.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&P.envMap===null?tt.environmentRotation:P.envMapRotation,Gt===void 0&&(P.addEventListener("dispose",dt),Gt=new Map,ht.programs=Gt);let At=Gt.get(bt);if(At!==void 0){if(ht.currentProgram===At&&ht.lightsStateVersion===j)return ws(P,mt),At}else mt.uniforms=F.getUniforms(P),P.onBeforeCompile(mt,y),At=F.acquireProgram(mt,bt),Gt.set(bt,At),ht.uniforms=mt.uniforms;let Ot=ht.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ot.clippingPlanes=J.uniform),ws(P,mt),ht.needsLights=Es(P),ht.lightsStateVersion=j,ht.needsLights&&(Ot.ambientLightColor.value=et.state.ambient,Ot.lightProbe.value=et.state.probe,Ot.directionalLights.value=et.state.directional,Ot.directionalLightShadows.value=et.state.directionalShadow,Ot.spotLights.value=et.state.spot,Ot.spotLightShadows.value=et.state.spotShadow,Ot.rectAreaLights.value=et.state.rectArea,Ot.ltc_1.value=et.state.rectAreaLTC1,Ot.ltc_2.value=et.state.rectAreaLTC2,Ot.pointLights.value=et.state.point,Ot.pointLightShadows.value=et.state.pointShadow,Ot.hemisphereLights.value=et.state.hemi,Ot.directionalShadowMap.value=et.state.directionalShadowMap,Ot.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Ot.spotShadowMap.value=et.state.spotShadowMap,Ot.spotLightMatrix.value=et.state.spotLightMatrix,Ot.spotLightMap.value=et.state.spotLightMap,Ot.pointShadowMap.value=et.state.pointShadowMap,Ot.pointShadowMatrix.value=et.state.pointShadowMatrix),ht.currentProgram=At,ht.uniformsList=null,At}function Ss(P){if(P.uniformsList===null){let tt=P.currentProgram.getUniforms();P.uniformsList=Gr.seqWithValue(tt.seq,P.uniforms)}return P.uniformsList}function ws(P,tt){let ct=G.get(P);ct.outputColorSpace=tt.outputColorSpace,ct.batching=tt.batching,ct.batchingColor=tt.batchingColor,ct.instancing=tt.instancing,ct.instancingColor=tt.instancingColor,ct.instancingMorph=tt.instancingMorph,ct.skinning=tt.skinning,ct.morphTargets=tt.morphTargets,ct.morphNormals=tt.morphNormals,ct.morphColors=tt.morphColors,ct.morphTargetsCount=tt.morphTargetsCount,ct.numClippingPlanes=tt.numClippingPlanes,ct.numIntersection=tt.numClipIntersection,ct.vertexAlphas=tt.vertexAlphas,ct.vertexTangents=tt.vertexTangents,ct.toneMapping=tt.toneMapping}function ur(P,tt,ct,ht,et){tt.isScene!==!0&&(tt=It),rt.resetTextureUnits();let E=tt.fog,j=ht.isMeshStandardMaterial?tt.environment:null,mt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ls,bt=(ht.isMeshStandardMaterial?Q:Z).get(ht.envMap||j),Gt=ht.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,At=!!ct.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Ot=!!ct.morphAttributes.position,Jt=!!ct.morphAttributes.normal,ee=!!ct.morphAttributes.color,Qt=Gi;ht.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Qt=y.toneMapping);let de=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,me=de!==void 0?de.length:0,te=G.get(ht),Se=d.state.lights;if($t===!0&&(ot===!0||P!==S)){let Pn=P===S&&ht.id===b;J.setState(ht,P,Pn)}let ce=!1;ht.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Se.state.version||te.outputColorSpace!==mt||et.isBatchedMesh&&te.batching===!1||!et.isBatchedMesh&&te.batching===!0||et.isBatchedMesh&&te.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&te.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&te.instancing===!1||!et.isInstancedMesh&&te.instancing===!0||et.isSkinnedMesh&&te.skinning===!1||!et.isSkinnedMesh&&te.skinning===!0||et.isInstancedMesh&&te.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&te.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&te.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&te.instancingMorph===!1&&et.morphTexture!==null||te.envMap!==bt||ht.fog===!0&&te.fog!==E||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==J.numPlanes||te.numIntersection!==J.numIntersection)||te.vertexAlphas!==Gt||te.vertexTangents!==At||te.morphTargets!==Ot||te.morphNormals!==Jt||te.morphColors!==ee||te.toneMapping!==Qt||te.morphTargetsCount!==me)&&(ce=!0):(ce=!0,te.__version=ht.version);let je=te.currentProgram;ce===!0&&(je=_i(ht,tt,et));let oi=!1,Gn=!1,no=!1,Ze=je.getUniforms(),Jn=te.uniforms;if(q.useProgram(je.program)&&(oi=!0,Gn=!0,no=!0),ht.id!==b&&(b=ht.id,Gn=!0),oi||S!==P){q.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ze.setValue(L,"projectionMatrix",P.projectionMatrix),Ze.setValue(L,"viewMatrix",P.matrixWorldInverse);let Fn=Ze.map.cameraPosition;Fn!==void 0&&Fn.setValue(L,wt.setFromMatrixPosition(P.matrixWorld)),Ct.logarithmicDepthBuffer&&Ze.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Ze.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,Gn=!0,no=!0)}if(et.isSkinnedMesh){Ze.setOptional(L,et,"bindMatrix"),Ze.setOptional(L,et,"bindMatrixInverse");let Pn=et.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Ze.setValue(L,"boneTexture",Pn.boneTexture,rt))}et.isBatchedMesh&&(Ze.setOptional(L,et,"batchingTexture"),Ze.setValue(L,"batchingTexture",et._matricesTexture,rt),Ze.setOptional(L,et,"batchingIdTexture"),Ze.setValue(L,"batchingIdTexture",et._indirectTexture,rt),Ze.setOptional(L,et,"batchingColorTexture"),et._colorsTexture!==null&&Ze.setValue(L,"batchingColorTexture",et._colorsTexture,rt));let jn=ct.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&$.update(et,ct,je),(Gn||te.receiveShadow!==et.receiveShadow)&&(te.receiveShadow=et.receiveShadow,Ze.setValue(L,"receiveShadow",et.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Jn.envMap.value=bt,Jn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&tt.environment!==null&&(Jn.envMapIntensity.value=tt.environmentIntensity),Gn&&(Ze.setValue(L,"toneMappingExposure",y.toneMappingExposure),te.needsLights&&fr(Jn,no),E&&ht.fog===!0&&k.refreshFogUniforms(Jn,E),k.refreshMaterialUniforms(Jn,ht,R,it,d.state.transmissionRenderTarget[P.id]),Gr.upload(L,Ss(te),Jn,rt)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Gr.upload(L,Ss(te),Jn,rt),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Ze.setValue(L,"center",et.center),Ze.setValue(L,"modelViewMatrix",et.modelViewMatrix),Ze.setValue(L,"normalMatrix",et.normalMatrix),Ze.setValue(L,"modelMatrix",et.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){let Pn=ht.uniformsGroups;for(let Fn=0,qc=Pn.length;Fn<qc;Fn++){let Ts=Pn[Fn];zt.update(Ts,je),zt.bind(Ts,je)}}return je}function fr(P,tt){P.ambientLightColor.needsUpdate=tt,P.lightProbe.needsUpdate=tt,P.directionalLights.needsUpdate=tt,P.directionalLightShadows.needsUpdate=tt,P.pointLights.needsUpdate=tt,P.pointLightShadows.needsUpdate=tt,P.spotLights.needsUpdate=tt,P.spotLightShadows.needsUpdate=tt,P.rectAreaLights.needsUpdate=tt,P.hemisphereLights.needsUpdate=tt}function Es(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(P,tt,ct){let ht=G.get(P);ht.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),G.get(P.texture).__webglTexture=tt,G.get(P.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:ct,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,tt){let ct=G.get(P);ct.__webglFramebuffer=tt,ct.__useDefaultFramebuffer=tt===void 0};let Ie=L.createFramebuffer();this.setRenderTarget=function(P,tt=0,ct=0){D=P,A=tt,I=ct;let ht=!0,et=null,E=!1,j=!1;if(P){let bt=G.get(P);if(bt.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(L.FRAMEBUFFER,null),ht=!1;else if(bt.__webglFramebuffer===void 0)rt.setupRenderTarget(P);else if(bt.__hasExternalTextures)rt.rebindTextures(P,G.get(P.texture).__webglTexture,G.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ot=P.depthTexture;if(bt.__boundDepthTexture!==Ot){if(Ot!==null&&G.has(Ot)&&(P.width!==Ot.image.width||P.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(P)}}let Gt=P.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(j=!0);let At=G.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(At[tt])?et=At[tt][ct]:et=At[tt],E=!0):P.samples>0&&rt.useMultisampledRTT(P)===!1?et=G.get(P).__webglMultisampledFramebuffer:Array.isArray(At)?et=At[ct]:et=At,N.copy(P.viewport),H.copy(P.scissor),B=P.scissorTest}else N.copy(Et).multiplyScalar(R).floor(),H.copy(Lt).multiplyScalar(R).floor(),B=Vt;if(ct!==0&&(et=Ie),q.bindFramebuffer(L.FRAMEBUFFER,et)&&ht&&q.drawBuffers(P,et),q.viewport(N),q.scissor(H),q.setScissorTest(B),E){let bt=G.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+tt,bt.__webglTexture,ct)}else if(j){let bt=tt;for(let Gt=0;Gt<P.textures.length;Gt++){let At=G.get(P.textures[Gt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Gt,At.__webglTexture,ct,bt)}}else if(P!==null&&ct!==0){let bt=G.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,ct)}b=-1},this.readRenderTargetPixels=function(P,tt,ct,ht,et,E,j,mt=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=G.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&j!==void 0&&(bt=bt[j]),bt){q.bindFramebuffer(L.FRAMEBUFFER,bt);try{let Gt=P.textures[mt],At=Gt.format,Ot=Gt.type;if(!Ct.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=P.width-ht&&ct>=0&&ct<=P.height-et&&(P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),L.readPixels(tt,ct,ht,et,ft.convert(At),ft.convert(Ot),E))}finally{let Gt=D!==null?G.get(D).__webglFramebuffer:null;q.bindFramebuffer(L.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(P,tt,ct,ht,et,E,j,mt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=G.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&j!==void 0&&(bt=bt[j]),bt)if(tt>=0&&tt<=P.width-ht&&ct>=0&&ct<=P.height-et){q.bindFramebuffer(L.FRAMEBUFFER,bt);let Gt=P.textures[mt],At=Gt.format,Ot=Gt.type;if(!Ct.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.bufferData(L.PIXEL_PACK_BUFFER,E.byteLength,L.STREAM_READ),P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),L.readPixels(tt,ct,ht,et,ft.convert(At),ft.convert(Ot),0);let ee=D!==null?G.get(D).__webglFramebuffer:null;q.bindFramebuffer(L.FRAMEBUFFER,ee);let Qt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Hf(L,Qt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,E),L.deleteBuffer(Jt),L.deleteSync(Qt),E}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,tt=null,ct=0){let ht=Math.pow(2,-ct),et=Math.floor(P.image.width*ht),E=Math.floor(P.image.height*ht),j=tt!==null?tt.x:0,mt=tt!==null?tt.y:0;rt.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,ct,0,0,j,mt,et,E),q.unbindTexture()};let Hn=L.createFramebuffer(),Mi=L.createFramebuffer();this.copyTextureToTexture=function(P,tt,ct=null,ht=null,et=0,E=null){E===null&&(et!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),E=et,et=0):E=0);let j,mt,bt,Gt,At,Ot,Jt,ee,Qt,de=P.isCompressedTexture?P.mipmaps[E]:P.image;if(ct!==null)j=ct.max.x-ct.min.x,mt=ct.max.y-ct.min.y,bt=ct.isBox3?ct.max.z-ct.min.z:1,Gt=ct.min.x,At=ct.min.y,Ot=ct.isBox3?ct.min.z:0;else{let jn=Math.pow(2,-et);j=Math.floor(de.width*jn),mt=Math.floor(de.height*jn),P.isDataArrayTexture?bt=de.depth:P.isData3DTexture?bt=Math.floor(de.depth*jn):bt=1,Gt=0,At=0,Ot=0}ht!==null?(Jt=ht.x,ee=ht.y,Qt=ht.z):(Jt=0,ee=0,Qt=0);let me=ft.convert(tt.format),te=ft.convert(tt.type),Se;tt.isData3DTexture?(rt.setTexture3D(tt,0),Se=L.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(rt.setTexture2DArray(tt,0),Se=L.TEXTURE_2D_ARRAY):(rt.setTexture2D(tt,0),Se=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,tt.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,tt.unpackAlignment);let ce=L.getParameter(L.UNPACK_ROW_LENGTH),je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),oi=L.getParameter(L.UNPACK_SKIP_PIXELS),Gn=L.getParameter(L.UNPACK_SKIP_ROWS),no=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,At),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ot);let Ze=P.isDataArrayTexture||P.isData3DTexture,Jn=tt.isDataArrayTexture||tt.isData3DTexture;if(P.isDepthTexture){let jn=G.get(P),Pn=G.get(tt),Fn=G.get(jn.__renderTarget),qc=G.get(Pn.__renderTarget);q.bindFramebuffer(L.READ_FRAMEBUFFER,Fn.__webglFramebuffer),q.bindFramebuffer(L.DRAW_FRAMEBUFFER,qc.__webglFramebuffer);for(let Ts=0;Ts<bt;Ts++)Ze&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(P).__webglTexture,et,Ot+Ts),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(tt).__webglTexture,E,Qt+Ts)),L.blitFramebuffer(Gt,At,j,mt,Jt,ee,j,mt,L.DEPTH_BUFFER_BIT,L.NEAREST);q.bindFramebuffer(L.READ_FRAMEBUFFER,null),q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(et!==0||P.isRenderTargetTexture||G.has(P)){let jn=G.get(P),Pn=G.get(tt);q.bindFramebuffer(L.READ_FRAMEBUFFER,Hn),q.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mi);for(let Fn=0;Fn<bt;Fn++)Ze?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,jn.__webglTexture,et,Ot+Fn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,jn.__webglTexture,et),Jn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pn.__webglTexture,E,Qt+Fn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pn.__webglTexture,E),et!==0?L.blitFramebuffer(Gt,At,j,mt,Jt,ee,j,mt,L.COLOR_BUFFER_BIT,L.NEAREST):Jn?L.copyTexSubImage3D(Se,E,Jt,ee,Qt+Fn,Gt,At,j,mt):L.copyTexSubImage2D(Se,E,Jt,ee,Gt,At,j,mt);q.bindFramebuffer(L.READ_FRAMEBUFFER,null),q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Jn?P.isDataTexture||P.isData3DTexture?L.texSubImage3D(Se,E,Jt,ee,Qt,j,mt,bt,me,te,de.data):tt.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,E,Jt,ee,Qt,j,mt,bt,me,de.data):L.texSubImage3D(Se,E,Jt,ee,Qt,j,mt,bt,me,te,de):P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,E,Jt,ee,j,mt,me,te,de.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,E,Jt,ee,de.width,de.height,me,de.data):L.texSubImage2D(L.TEXTURE_2D,E,Jt,ee,j,mt,me,te,de);L.pixelStorei(L.UNPACK_ROW_LENGTH,ce),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,oi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,no),E===0&&tt.generateMipmaps&&L.generateMipmap(Se),q.unbindTexture()},this.initRenderTarget=function(P){G.get(P).__webglFramebuffer===void 0&&rt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?rt.setTextureCube(P,0):P.isData3DTexture?rt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?rt.setTexture2DArray(P,0):rt.setTexture2D(P,0),q.unbindTexture()},this.resetState=function(){A=0,I=0,D=null,q.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),e.unpackColorSpace=De._getUnpackColorSpace()}};var Ai={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},qv=new ks(-1,1,1,-1,0,1),ou=class extends Ue{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}},Yv=new ou,Ri=class{constructor(t){this._mesh=new Bt(Yv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ks=class extends Ln{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=mn.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ri(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qo=class extends Ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},hc=class extends Ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var uc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Zt);this._width=n.width,this._height=n.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ks(Ai),this.copyPass.material.blending=ln,this.clock=new Hs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qo!==void 0&&(o instanceof qo?n=!0:o instanceof hc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Zt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fc=class extends Ln{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ut}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var vd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Xr=class s extends Ln{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Zt(t.x,t.y):new Zt(256,256),this.clearColor=new Ut(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(r,o,{type:on}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let f=new $e(r,o,{type:on});f.texture.name="UnrealBloomPass.h"+l,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new $e(r,o,{type:on});p.texture.name="UnrealBloomPass.v"+l,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=vd;this.highPassUniforms=mn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new Zt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mn.clone(Ai.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:Ai.vertexShader,fragmentShader:Ai.fragmentShader,blending:Nn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ut,this._oldClearAlpha=1,this._basic=new sn,this._fsQuad=new Ri(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Zt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Zt(.5,.5)},direction:{value:new Zt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Xr.BlurDirectionX=new Zt(1,0);Xr.BlurDirectionY=new Zt(0,1);var Yo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var dc=class extends Ln{constructor(){super(),this.uniforms=mn.clone(Yo.uniforms),this.material=new Po({name:Yo.name,uniforms:this.uniforms,vertexShader:Yo.vertexShader,fragmentShader:Yo.fragmentShader}),this._fsQuad=new Ri(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},De.getTransfer(this._outputColorSpace)===Fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===gl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Zo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Zt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ht},cameraProjectionMatrixInverse:{value:new Ht},cameraWorldMatrix:{value:new Ht},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},$o={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},pc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function yd(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=Zv(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],c=2*Math.PI*a/n,h=new U(Math.cos(c),Math.sin(c),0).normalize();i[o*4]=(h.x*.5+.5)*255,i[o*4+1]=(h.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new Si(i,t,t);return r.wrapS=ei,r.wrapT=ei,r.needsUpdate=!0,r}function Zv(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}var Ko={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:au(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Zt},cameraProjectionMatrixInverse:{value:new Ht},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function au(s,t,e){let n=$v(s,t,e),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function $v(s,t,e){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new U(Math.cos(r),Math.sin(r),o))}return n}var mc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,c=Math.floor(t+a),h=Math.floor(e+a),l=(3-Math.sqrt(3))/6,f=(c+h)*l,p=c-f,u=h-f,g=t-p,x=e-u,m,d;g>x?(m=1,d=0):(m=0,d=1);let _=g-m+l,M=x-d+l,y=g-1+2*l,w=x-1+2*l,A=c&255,I=h&255,D=this.perm[A+this.perm[I]]%12,b=this.perm[A+m+this.perm[I+d]]%12,S=this.perm[A+1+this.perm[I+1]]%12,N=.5-g*g-x*x;N<0?n=0:(N*=N,n=N*N*this._dot(this.grad3[D],g,x));let H=.5-_*_-M*M;H<0?i=0:(H*=H,i=H*H*this._dot(this.grad3[b],_,M));let B=.5-y*y-w*w;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[S],y,w)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a,h=(t+e+n)*.3333333333333333,l=Math.floor(t+h),f=Math.floor(e+h),p=Math.floor(n+h),u=1/6,g=(l+f+p)*u,x=l-g,m=f-g,d=p-g,_=t-x,M=e-m,y=n-d,w,A,I,D,b,S;_>=M?M>=y?(w=1,A=0,I=0,D=1,b=1,S=0):_>=y?(w=1,A=0,I=0,D=1,b=0,S=1):(w=0,A=0,I=1,D=1,b=0,S=1):M<y?(w=0,A=0,I=1,D=0,b=1,S=1):_<y?(w=0,A=1,I=0,D=0,b=1,S=1):(w=0,A=1,I=0,D=1,b=1,S=0);let N=_-w+u,H=M-A+u,B=y-I+u,O=_-D+2*u,Y=M-b+2*u,X=y-S+2*u,it=_-1+3*u,R=M-1+3*u,ut=y-1+3*u,xt=l&255,Et=f&255,Lt=p&255,Vt=this.perm[xt+this.perm[Et+this.perm[Lt]]]%12,qt=this.perm[xt+w+this.perm[Et+A+this.perm[Lt+I]]]%12,$t=this.perm[xt+D+this.perm[Et+b+this.perm[Lt+S]]]%12,ot=this.perm[xt+1+this.perm[Et+1+this.perm[Lt+1]]]%12,at=.6-_*_-M*M-y*y;at<0?i=0:(at*=at,i=at*at*this._dot3(this.grad3[Vt],_,M,y));let wt=.6-N*N-H*H-B*B;wt<0?r=0:(wt*=wt,r=wt*wt*this._dot3(this.grad3[qt],N,H,B));let Wt=.6-O*O-Y*Y-X*X;Wt<0?o=0:(Wt*=Wt,o=Wt*Wt*this._dot3(this.grad3[$t],O,Y,X));let It=.6-it*it-R*R-ut*ut;return It<0?a=0:(It*=It,a=It*It*this._dot3(this.grad3[ot],it,R,ut)),32*(i+r+o+a)}noise4d(t,e,n,i){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20,l,f,p,u,g,x=(t+e+n+i)*c,m=Math.floor(t+x),d=Math.floor(e+x),_=Math.floor(n+x),M=Math.floor(i+x),y=(m+d+_+M)*h,w=m-y,A=d-y,I=_-y,D=M-y,b=t-w,S=e-A,N=n-I,H=i-D,B=b>S?32:0,O=b>N?16:0,Y=S>N?8:0,X=b>H?4:0,it=S>H?2:0,R=N>H?1:0,ut=B+O+Y+X+it+R,xt=o[ut][0]>=3?1:0,Et=o[ut][1]>=3?1:0,Lt=o[ut][2]>=3?1:0,Vt=o[ut][3]>=3?1:0,qt=o[ut][0]>=2?1:0,$t=o[ut][1]>=2?1:0,ot=o[ut][2]>=2?1:0,at=o[ut][3]>=2?1:0,wt=o[ut][0]>=1?1:0,Wt=o[ut][1]>=1?1:0,It=o[ut][2]>=1?1:0,nt=o[ut][3]>=1?1:0,Ft=b-xt+h,L=S-Et+h,Nt=N-Lt+h,Rt=H-Vt+h,Ct=b-qt+2*h,q=S-$t+2*h,W=N-ot+2*h,G=H-at+2*h,rt=b-wt+3*h,Z=S-Wt+3*h,Q=N-It+3*h,T=H-nt+3*h,v=b-1+4*h,C=S-1+4*h,F=N-1+4*h,k=H-1+4*h,z=m&255,K=d&255,J=_&255,st=M&255,Mt=a[z+a[K+a[J+a[st]]]]%32,$=a[z+xt+a[K+Et+a[J+Lt+a[st+Vt]]]]%32,lt=a[z+qt+a[K+$t+a[J+ot+a[st+at]]]]%32,Tt=a[z+wt+a[K+Wt+a[J+It+a[st+nt]]]]%32,ft=a[z+1+a[K+1+a[J+1+a[st+1]]]]%32,St=.6-b*b-S*S-N*N-H*H;St<0?l=0:(St*=St,l=St*St*this._dot4(r[Mt],b,S,N,H));let zt=.6-Ft*Ft-L*L-Nt*Nt-Rt*Rt;zt<0?f=0:(zt*=zt,f=zt*zt*this._dot4(r[$],Ft,L,Nt,Rt));let V=.6-Ct*Ct-q*q-W*W-G*G;V<0?p=0:(V*=V,p=V*V*this._dot4(r[lt],Ct,q,W,G));let _t=.6-rt*rt-Z*Z-Q*Q-T*T;_t<0?u=0:(_t*=_t,u=_t*_t*this._dot4(r[Tt],rt,Z,Q,T));let Pt=.6-v*v-C*C-F*F-k*k;return Pt<0?g=0:(Pt*=Pt,g=Pt*Pt*this._dot4(r[ft],v,C,F,k)),27*(l+f+p+u+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}};var qr=class s extends Ln{constructor(t,e,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=yd(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new $e(this.width,this.height,{type:on}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ae({defines:Object.assign({},Zo.defines),uniforms:mn.clone(Zo.uniforms),vertexShader:Zo.vertexShader,fragmentShader:Zo.fragmentShader,blending:ln,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Io,this.normalMaterial.blending=ln,this.pdMaterial=new Ae({defines:Object.assign({},Ko.defines),uniforms:mn.clone(Ko.uniforms),vertexShader:Ko.vertexShader,fragmentShader:Ko.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ae({defines:Object.assign({},$o.defines),uniforms:mn.clone($o.uniforms),vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader,blending:ln}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ae({uniforms:mn.clone(Ai.uniforms),vertexShader:Ai.vertexShader,fragmentShader:Ai.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Oo,blendDst:Gs,blendEquation:Xn,blendSrcAlpha:zo,blendDstAlpha:Gs,blendEquationAlpha:Xn}),this.blendMaterial=new Ae({uniforms:mn.clone(pc.uniforms),vertexShader:pc.vertexShader,fragmentShader:pc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:rl,blendSrc:Oo,blendDst:Gs,blendEquation:Xn,blendSrcAlpha:zo,blendDstAlpha:Gs,blendEquationAlpha:Xn}),this._fsQuad=new Ri(null),this._originalClearColor=new Ut,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new zs,this.depthTexture.format=fs,this.depthTexture.type=us,this.normalRenderTarget=new $e(this.width,this.height,{minFilter:bn,magFilter:bn,type:on,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=au(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ln,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=ln,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=ln,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ln,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ln,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new mc,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let c=o,h=a;i[(o*t+a)*4]=(e.noise(c,h)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(c+t,h)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(c,h+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(c+t,h+t)*.5+.5)*255}let r=new Si(i,t,t,zn,Yn);return r.wrapS=ei,r.wrapT=ei,r.needsUpdate=!0,r}};qr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var _d={ultra:{label:"Ultra",pixelRatio:2,msaa:4,shadow:4096,shadowRange:150,ao:!0,reflections:.75,bloom:!0,grade:!0,shafts:!0,carProbe:256,sharpen:.3},high:{label:"High",pixelRatio:1.5,msaa:4,shadow:2048,shadowRange:120,ao:!1,reflections:.5,bloom:!0,grade:!0,shafts:!0,carProbe:128,sharpen:.3},medium:{label:"Balanced",pixelRatio:1.2,msaa:2,shadow:2048,shadowRange:90,ao:!1,reflections:0,bloom:!0,grade:!0,shafts:!0,carProbe:0,sharpen:.22},low:{label:"Performance",pixelRatio:1,msaa:0,shadow:1024,shadowRange:70,ao:!1,reflections:0,bloom:!1,grade:!1,shafts:!1,carProbe:0,sharpen:0}},lu=class extends qr{_overrideVisibility(){super._overrideVisibility(),this.scene.traverseVisible(t=>{t.userData.noAO&&(t.visible=!1,this._visibilityCache.push(t))})}},Kv={uniforms:{tDiffuse:{value:null},time:{value:0},resolution:{value:new Zt(1,1)},speedBlur:{value:0},camBlur:{value:new Zt},aberration:{value:.0015},vignette:{value:.32},grain:{value:.035},sharpen:{value:0},sunPos:{value:new Zt(.5,.5)},sunVisible:{value:0},sunColor:{value:new Ut(1,.7,.4)},flash:{value:0},night:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float time, speedBlur, aberration, vignette, grain, sunVisible, flash, night, sharpen;
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
      // Contrast-adaptive sharpening: restores the fine detail that scaling and anti-aliasing
      // soften, and backs off on edges that are already strong so nothing rings.
      if (sharpen > 0.0) {
        vec2 px = 1.0 / resolution;
        vec3 n = texture2D(tDiffuse, uv + vec2(0.0, px.y)).rgb, s = texture2D(tDiffuse, uv - vec2(0.0, px.y)).rgb;
        vec3 e = texture2D(tDiffuse, uv + vec2(px.x, 0.0)).rgb, w = texture2D(tDiffuse, uv - vec2(px.x, 0.0)).rgb;
        vec3 lo = min(col, min(min(n, s), min(e, w))), hi = max(col, max(max(n, s), max(e, w)));
        vec3 amount = sqrt(clamp(min(lo, 1.0 - hi) / max(hi, 1e-3), 0.0, 1.0)) * sharpen;
        col = clamp((col + (col * 4.0 - n - s - e - w) * amount * 0.5), lo, hi);
      }
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
    }`},Jv={uniforms:{tDiffuse:{value:null},sunPos:{value:new Zt(.5,.5)},strength:{value:0},color:{value:new Ut(1,.7,.4)},aspect:{value:1}},vertexShader:`
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
    }`},gc=class{constructor(t){this.renderer=new lc({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1});let e=this.renderer;e.toneMapping=zr,e.toneMappingExposure=.85,e.shadowMap.enabled=!0,e.shadowMap.type=sl,this.quality=null,this.scale=1,this.frameTimes=[],this.adaptTimer=0}init(t,e){this.scene=t,this.camera=e}buildComposer(){let t=this.quality,e=this.renderer;if(this.composer){this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose();for(let r of this.composer.passes)r.dispose?.()}let n=e.getSize(new Zt),i=new $e(n.x,n.y,{type:on,samples:t.msaa});this.composer=new uc(e,i),this.composer.addPass(new fc(this.scene,this.camera)),this.ao=null,t.ao&&(this.ao=new lu(this.scene,this.camera,n.x,n.y),this.ao.output=qr.OUTPUT.Default,this.ao.blendIntensity=.85,this.ao.updateGtaoMaterial({radius:1.6,distanceExponent:1.6,thickness:2.5,scale:1.4,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.composer.addPass(this.ao)),this.shafts=new Ks(Jv),this.shafts.enabled=t.shafts,this.composer.addPass(this.shafts),this.bloom=new Xr(new Zt(n.x,n.y),.42,.62,.92),this.bloom.enabled=t.bloom,this.composer.addPass(this.bloom),this.composer.addPass(new dc),this.grade=new Ks(Kv),this.grade.enabled=!0,t.grade||(this.grade.uniforms.grain.value=0,this.grade.uniforms.aberration.value=0),this.grade.uniforms.sharpen.value=t.sharpen,this.composer.addPass(this.grade),this.applySize()}setQuality(t){this.quality=_d[t]||_d.high,this.qualityName=t,this.scale=1,this.renderer.shadowMap.enabled=!0,this.buildComposer()}applySize(){let t=innerWidth,e=innerHeight,n=Math.min(devicePixelRatio||1,this.quality.pixelRatio)*this.scale;this.renderer.setPixelRatio(n),this.renderer.setSize(t,e),this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.grade.uniforms.resolution.value.set(t*n,e*n),this.shafts.uniforms.aspect.value=t/e,this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.onResize?.()}adapt(t){if(this.frameTimes.push(t),this.frameTimes.length>90&&this.frameTimes.shift(),this.adaptTimer+=t,this.adaptTimer<2||this.frameTimes.length<60)return;this.adaptTimer=0;let e=[...this.frameTimes].sort((r,o)=>r-o),n=e[Math.floor(e.length/2)],i=this.scale;n>1/45?i=Math.max(.6,this.scale-.1):n<1/58&&this.scale<1&&(i=Math.min(1,this.scale+.05)),Math.abs(i-this.scale)>.001&&(this.scale=i,this.applySize())}beginFrame(){this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0}render(){this.composer.render()}};var Yr=`
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
`,xc=`
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
`;var yc={golden:19.22,dusk:19.95,night:23.2,dawn:6.9,noon:13.2},Md=6.4,jv=19.7,hn={skySunDir:{value:new U(-.9,.12,-.3).normalize()},skyMoonDir:{value:new U(.6,.5,.4).normalize()},skyTurbidity:{value:6},skyRayleigh:{value:2.2},skyMie:{value:.006},skyMieG:{value:.82},skyIntensity:{value:.75},skyCloudCover:{value:.42},skyTime:{value:0},skyNight:{value:0},skyCloudLit:{value:new Ut},skyCloudShade:{value:new Ut},fogSunColor:{value:new Ut},fogSunDir:{value:new U},fogHeightFalloff:{value:.012},nightFactor:{value:0},worldTime:{value:0}};he.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorld;
#endif`;he.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorld = transpose(mat3(viewMatrix)) * (mvPosition.xyz - viewMatrix[3].xyz);
#endif`;he.fog_pars_fragment=`
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
#endif`;he.fog_fragment=`
#ifdef USE_FOG
  gl_FragColor.rgb = pa_applyFog(gl_FragColor.rgb, vFogWorld);
#endif`;function Qv(s){if(s.userData.atmo)return s;s.userData.atmo=!0;let t=s.onBeforeCompile,e=s.customProgramCacheKey();return s.onBeforeCompile=function(n,i){t.call(this,n,i),n.uniforms.fogSunColor=hn.fogSunColor,n.uniforms.fogSunDir=hn.fogSunDir,n.uniforms.fogHeightFalloff=hn.fogHeightFalloff},s.customProgramCacheKey=()=>e+"|atmo",s}function Sd(s){s.traverse(t=>{if(t.material)for(let e of Array.isArray(t.material)?t.material:[t.material])e.isShaderMaterial||e.isRawShaderMaterial||Qv(e)})}var t1=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,e1=`
${Yr}
${xc}
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
}`;function bd(s=!0,t=!0){return new Ae({uniforms:{...hn,skyClouds:{value:s?1:0},skyDisc:{value:t?1:0}},vertexShader:t1,fragmentShader:e1,side:Sn,depthWrite:!1,depthTest:!0,fog:!1})}var n1=new U(0,1,0),i1=new U,s1=new U,cu=new U,be=(s,t,e)=>new Ut(s,t,e),Js=(s,t,e)=>{if(e<=t[0][0])return s.copy(t[0][1]);for(let n=1;n<t.length;n++)if(e<=t[n][0]){let[i,r]=t[n-1],[o,a]=t[n];return s.copy(r).lerp(a,(e-i)/(o-i))}return s.copy(t[t.length-1][1])},Wi=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e];return i+(o-i)*(t-n)/(r-n)}return s[s.length-1][1]},r1=[[-6,be(.9,.35,.2)],[0,be(1,.34,.1)],[4,be(1,.47,.19)],[10,be(1,.66,.38)],[25,be(1,.88,.74)],[60,be(1,.97,.92)]],o1=[[-4,0],[0,1.6],[4,4.6],[12,5],[40,5.2]],a1=[[-15,be(.06,.09,.18)],[-4,be(.22,.24,.42)],[2,be(.62,.55,.62)],[12,be(.6,.7,.85)],[40,be(.62,.76,.95)]],l1=[[-15,be(.05,.05,.06)],[0,be(.35,.24,.2)],[15,be(.42,.36,.3)],[40,be(.45,.42,.38)]],c1=[[-15,.4],[-4,.42],[3,.32],[12,.45],[30,.6]],h1=[[-15,be(.03,.04,.075)],[-5,be(.15,.15,.26)],[0,be(.42,.33,.38)],[6,be(.58,.45,.42)],[18,be(.55,.62,.72)],[50,be(.55,.66,.8)]],u1=[[-15,be(.05,.06,.1)],[-5,be(.4,.24,.22)],[0,be(1.15,.5,.22)],[6,be(1.2,.68,.38)],[20,be(.9,.84,.76)],[50,be(.75,.8,.86)]],f1=[[-12,be(.04,.05,.08)],[-5,be(.45,.25,.32)],[0,be(1.8,.72,.42)],[5,be(1.9,1.1,.7)],[15,be(1.5,1.4,1.35)],[50,be(1.5,1.5,1.5)]],d1=[[-12,be(.02,.025,.04)],[-5,be(.18,.13,.22)],[0,be(.42,.26,.34)],[5,be(.6,.45,.48)],[15,be(.62,.66,.74)],[50,be(.7,.74,.8)]],p1=[[-15,7e-4],[-3,8e-4],[3,85e-5],[15,6e-4],[50,45e-5]],m1=[[-15,1.35],[-5,1.2],[0,1.05],[6,.92],[20,.76],[50,.68]],g1=[[-15,.5],[-4,.45],[2,.36],[12,.45],[30,.6]],vc=class{constructor(t,e){this.renderer=t,this.scene=e,this.hours=yc.golden,this.cycle=!1,this.cycleSpeed=24/2880,this.sky=new Bt(new Kt(1,1,1),bd(!0)),this.sky.scale.setScalar(2e3),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.userData.noAO=!0,e.add(this.sky),this.probeScene=new Fs,this.probeSky=new Bt(new Kt(1,1,1),bd(!0,!1)),this.probeSky.scale.setScalar(100),this.probeScene.add(this.probeSky);let n=new Bt(new Ao(60,24),new sn({color:1776156}));n.rotation.x=-Math.PI/2,n.position.y=-2,this.probeGround=n,this.probeScene.add(n),this.pmrem=new Vr(t),this.envTarget=null,this.envDirty=!0,this.envTimer=0,this.lastEnvHours=-100,this.sun=new Fo(16777215,3),this.sun.castShadow=!0,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.06,this.shadowRange=110,e.add(this.sun,this.sun.target),this.hemi=new Lo(16777215,4473924,1),e.add(this.hemi),e.fog=new wo(12687759,.0016),this.sunDir=new U,this.moonDir=new U,this.lightDir=new U,this.nightFactor=0,this.elevation=0,this.exposure=.8,this.apply()}setHours(t){this.hours=(t%24+24)%24,this.envDirty=!0,this.apply()}setShadowQuality(t,e){this.sun.shadow.mapSize.set(t,t),this.shadowRange=e,this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=n.bottom=-e,n.right=n.top=e,n.near=1,n.far=900,n.updateProjectionMatrix()}computeSun(t,e){let n=(t-Md)/(jv-Md),i=Math.PI*n,r=Math.asin(Math.sin(i)*Math.sin(Re.degToRad(64))),o=Math.cos(i),a=Math.sin(i)*.6-.32,c=Math.hypot(o,a)||1;return e.set(o/c*Math.cos(r),Math.sin(r),a/c*Math.cos(r)).normalize(),Re.radToDeg(r)}apply(){let t=hn,e=this.computeSun(this.hours,this.sunDir);this.elevation=e,this.computeSun(this.hours+12.4,this.moonDir),this.moonDir.y=Math.max(this.moonDir.y,.25),this.moonDir.normalize(),t.skySunDir.value.copy(this.sunDir),t.skyMoonDir.value.copy(this.moonDir);let n=Re.smoothstep(-e,-2,9),i=Re.smoothstep(-e,-7,1.5);this.nightFactor=n,this.lampFactor=i,t.nightFactor.value=i,t.skyNight.value=n,t.skyTurbidity.value=Wi([[-5,3.5],[2,5.5],[10,4.5],[40,2.6]],e),t.skyRayleigh.value=Wi([[-5,1.6],[2,2.8],[10,2],[40,1.2]],e),t.skyMie.value=Wi([[0,.006],[10,.005],[40,.004]],e),t.skyIntensity.value=Wi([[-8,.6],[0,.72],[20,.62],[50,.55]],e),Js(t.skyCloudLit.value,f1,e),Js(t.skyCloudShade.value,d1,e);let r=e>-1.5;this.lightDir.copy(r?this.sunDir:this.moonDir),r?(Js(this.sun.color,r1,e),this.sun.intensity=Wi(o1,e)):(this.sun.color.setRGB(.55,.65,.95),this.sun.intensity=.32*n),this.lightDir.y<.08&&(this.lightDir.y=.08,this.lightDir.normalize()),Js(this.hemi.color,a1,e),Js(this.hemi.groundColor,l1,e),this.hemi.intensity=Wi(c1,e),Js(this.scene.fog.color,h1,e),Js(t.fogSunColor.value,u1,e),t.fogSunDir.value.copy(this.sunDir),this.scene.fog.density=Wi(p1,e),this.exposure=Wi(m1,e),this.scene.environmentIntensity=Wi(g1,e),this.probeGround.material.color.copy(this.hemi.groundColor).multiplyScalar(.25)}regenerateEnvironment(){let t=this.envTarget;this.envTarget=this.pmrem.fromScene(this.probeScene,0,.1,400),this.scene.environment=this.envTarget.texture,t&&t.dispose(),this.envDirty=!1,this.lastEnvHours=this.hours}update(t,e,n,i){hn.skyTime.value=e,hn.worldTime.value=e,this.cycle&&(this.hours=(this.hours+t*this.cycleSpeed)%24,this.apply(),Math.abs(this.hours-this.lastEnvHours)>.12&&(this.envDirty=!0)),this.envDirty&&this.regenerateEnvironment(),this.sky.position.copy(i.position);let o=this.shadowRange*2/this.sun.shadow.mapSize.x,a=i1.crossVectors(n1,this.lightDir).normalize(),c=s1.crossVectors(this.lightDir,a),h=Math.round(n.dot(a)/o)*o,l=Math.round(n.dot(c)/o)*o,f=n.dot(this.lightDir);cu.copy(a).multiplyScalar(h).addScaledVector(c,l).addScaledVector(this.lightDir,f),this.sun.target.position.copy(cu),this.sun.position.copy(cu).addScaledVector(this.lightDir,450),this.sun.target.updateMatrixWorld()}get clockLabel(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};function On(s,t,e){let n=t.isMaterial?t:new kt(t);return n.onBeforeCompile=i=>{Object.assign(i.uniforms,e.uniforms||{}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
${Yr}
${e.fragmentPars||""}`).replace("#include <color_fragment>",`#include <color_fragment>
${e.color||""}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${e.roughness||""}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${e.metalness||""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${e.normal||""}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${e.emissive||""}`)},n.customProgramCacheKey=()=>"pa-"+s,n}function We(s,t,e,n,{srgb:i=!0,repeat:r=!1}={}){let o=document.createElement("canvas");o.width=t,o.height=e,n(o.getContext("2d"),t,e);let a=new Ns(o);return i&&(a.colorSpace=Mn),a.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),r&&(a.wrapS=a.wrapT=ei),a}var wd=(s,t)=>{let e=[];for(let n=s;n<=t;n+=160)e.push(n);return e},ve=wd(-320,1600),ye=wd(-1600,1600),ke=ve[0],Ce=ve[ve.length-1],Ee=ye[0],Le=ye[ye.length-1],re=13,pi=6,Jo=[3.4,9.2],ie=.16,An=-418,hu=-.62,Qe={from:-333,to:-342},un=-357,fe={minX:-412,maxX:Ce+32,minZ:Ee-76,maxZ:Le+76},Zr=ve.slice(0,-1).map(s=>s+160/2),ds=ye.slice(0,-1).map(s=>s+160/2),si=160-re*2,Ci={rampStart:-342,x0:-374,x1:-556,z:-160,halfWidth:9,deckY:2.6},Rn=[Ci,{rampStart:-342,x0:-374,x1:-640,z:1120,halfWidth:7,deckY:2.6,plain:!0}];function js(s,t){for(let e of Rn)if(Math.abs(t-e.z)<=e.halfWidth&&s<=e.rampStart&&s>=e.x1)return e;return null}function ps(s,t){let e=js(s,t);return e?s>e.x0?ie+(e.deckY-ie)*(e.rampStart-s)/(e.rampStart-e.x0):e.deckY:null}var yn={sunset:{name:"SUNSET RUN",blurb:"The classic loop round the old town.",route:[[-320,40],[-320,-300],[-170,-320],[-6,-320],[150,-320],[160,-10],[10,160],[-300,160]]},downtown:{name:"DOWNTOWN DASH",blurb:"A loop through the towers and back to the pier.",route:[[-320,-300],[10,-320],[330,-320],[630,-320],[640,-470],[640,-790],[950,-800],[960,-490],[960,-170],[650,-160],[330,-160],[10,-160],[-300,-160]],start:{x:-320+3.4,z:30,heading:0}},grand:{name:"GRAND TOUR",blurb:"The whole city, coast to foothills.",route:[[-320,40],[-320,-620],[-320,-1270],[-310,-1600],[470,-1600],[1270,-1600],[1600,-1590],[1600,-810],[1600,-10],[1600,790],[1600,1590],[810,1600],[10,1600],[-320,1590],[-320,970],[-320,420]]}},VS=yn.sunset.route,_c=15,qi=[{axis:"ns",road:-160,s:-240,side:1},{axis:"ns",road:0,s:-80,side:-1},{axis:"ns",road:160,s:80,side:1},{axis:"ns",road:0,s:400,side:1},{axis:"ns",road:-320,s:-400,side:1},{axis:"ns",road:320,s:-240,side:-1},{axis:"ew",road:-320,s:-80,side:1},{axis:"ew",road:0,s:80,side:-1},{axis:"ew",road:160,s:-240,side:1},{axis:"ew",road:320,s:240,side:-1},{axis:"ew",road:-160,s:240,side:1},{axis:"ew",road:480,s:-80,side:-1}];for(let s of[-320,0,640,960,1280,1600])for(let t=0,e=Ee+80+(s===0?160:0);e<Le;e+=480,t++)Math.abs(e)<520&&s<=320||qi.push({axis:"ns",road:s,s:e,side:t%2?1:-1});for(let s of[-1280,-800,-480,800,1280])for(let t=0,e=ke+240;e<Ce;e+=480,t++)Math.abs(s)<520&&e<=320||qi.push({axis:"ew",road:s,s:e,side:t%2?-1:1});function Qs(s,t=15.4){return s.axis==="ns"?[s.road+s.side*t,s.s]:[s.s,s.road+s.side*t]}var fn={x:-320+Jo[0],z:246,heading:0},Ed=(s,t,e)=>Math.min(Math.max(Math.round((s-t)/160)*160+t,t),e),Yi=s=>Ed(s,ke,Ce),ms=s=>Ed(s,Ee,Le);var tr=s=>Math.min(Math.max(Math.floor((s-ke)/160),0),Zr.length-1)*160+ke+160/2,jo=s=>Math.min(Math.max(Math.floor((s-Ee)/160),0),ds.length-1)*160+Ee+160/2;function Qo(s,t){return s<un?"sand":s<Qe.to?"grass":s<Qe.from||s>Ce+re||t<Ee-re||t>Le+re?"curb":Math.abs(s-Yi(s))<re||Math.abs(t-ms(t))<re?"road":"curb"}function Td(s){return s>=un?0:Math.max(-.02-(un-s)*.0105,hu-.3)}var Xi={ocean:["OCEAN DRIVE","Vista Pac\xEDfica Beach",.3,.2],seaview:["SEAVIEW","Coastal Quarter",.5,.2],downtown:["DOWNTOWN","Financial District",1,.2],palm:["PALM DISTRICT","San Aurelio",.65,.6],southbank:["SOUTHBANK","Harbor Heights",.4,.6],northshore:["NORTHSHORE","Lighthouse Point",.35,.5],midtown:["MIDTOWN","Alta Vista",.8,.3],laurel:["LAUREL PARK","The Gardens",.35,.9],arts:["ARTS DISTRICT","Cannery Row",.6,.3],port:["PORT DISTRICT","Bayfront Docks",.55,.1],marina:["MARINA","South Beach",.4,.3],eastside:["EASTSIDE","Jacaranda Heights",.35,.8],foothills:["FOOTHILLS","Ridgeline",.25,.8]};function mi(s,t){return s<=320&&Math.abs(t)<=480?s<-170?"seaview":s>0&&t<-20?"downtown":t>250?"southbank":"palm":s<-170?t<-480?"northshore":"marina":s>1440?"foothills":t<-1120?"northshore":t>1120?"port":s>1120?"eastside":t<=-800?"midtown":t<0&&s>0?"downtown":t>640?"arts":s>480?"laurel":t>160?"southbank":"palm"}function Mc(s,t){return s<-330?Xi.ocean:Xi[mi(tr(s),jo(t))]}var uu={"-320":"Ocean Drive","-160":"Seaview Ave",0:"Aurelio Blvd",160:"Grand Ave",320:"Hillcrest Ave",480:"Mission Ave",640:"Centro Blvd",800:"Laurel Ave",960:"Vista Ave",1120:"Jacaranda Ave",1280:"Canyon Ave",1440:"Foothill Blvd",1600:"Ridgeline Dr"},fu={"-1600":"Northshore Rd","-1440":"Lighthouse St","-1280":"Coral St","-1120":"Mariposa St","-960":"Alta St","-800":"Dolores St","-640":"Cabrillo St","-480":"Marina St","-320":"Sunset Blvd","-160":"Pier Ave",0:"Palm St",160:"Harbor St",320:"Rosa St",480:"Southbank Rd",640:"Cannery St",800:"Dock St",960:"Foundry St",1120:"Depot St",1280:"Terminal St",1440:"Breakwater St",1600:"Bayfront Rd"};function Ad(s,t){let e=Yi(s),n=ms(t);return Math.abs(s-e)<re+3?uu[String(e)]:Math.abs(t-n)<re+3?fu[String(n)]:s<-330?"Beachfront":"Off road"}var du=8294;function gt(){return du=du*1664525+1013904223>>>0,du/4294967296}var yt=(s,t)=>s+gt()*(t-s),le=s=>s[Math.floor(gt()*s.length)],Te=s=>gt()<s;function er(s,t){let e=Math.imul(Math.floor(s)|0,374761393)+Math.imul(Math.floor(t)|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}var Rd={"-240,-400":"parking","-240,-240":{stucco:3,motel:2,shops:2},"-240,-80":{hotel:3,shops:2,stucco:1},"-240,80":{stucco:3,shops:2,motel:1},"-240,240":{motel:2,stucco:3,shops:1},"-240,400":{stucco:3,shops:2},"-80,-400":{brick:3,shops:2,garage:1},"-80,-240":{office:2,garage:1,deco:1,shops:1},"-80,-80":{shops:2,condo:2,deco:1,brick:1},"-80,80":"park","-80,240":{brick:3,garage:1,shops:1},"-80,400":{warehouse:4,garage:1},"80,-400":{tower:3,office:2,deco:1},"80,-240":{tower:2,deco:2,office:1},"80,-80":"plaza","80,80":{hotel:2,shops:1,condo:2},"80,240":"parking","80,400":{warehouse:3,shops:1,brick:1},"240,-400":{office:2,tower:2,garage:1},"240,-240":"plaza-tall","240,-80":{deco:2,tower:2,hotel:1},"240,80":{condo:2,brick:2,shops:1},"240,240":{condo:3,shops:2},"240,400":"park"},x1={seaview:[{stucco:3,motel:2,shops:2,hotel:1},[.05,.06,0]],northshore:[{condo:3,hotel:2,stucco:2,shops:2,brick:1},[.12,.03,0]],marina:[{stucco:2,shops:2,warehouse:2,motel:1,condo:1},[.06,.1,0]],midtown:[{office:2,condo:2,brick:2,shops:2,deco:1,garage:1,hotel:1},[.06,.04,.05]],palm:[{shops:2,condo:2,brick:2,stucco:1,deco:1},[.1,.04,0]],southbank:[{brick:3,shops:2,garage:1,warehouse:1,condo:1},[.07,.06,0]],arts:[{brick:3,warehouse:2,shops:2,garage:1},[.05,.06,0]],port:[{warehouse:5,garage:1,shops:1},[.02,.14,0]],eastside:[{stucco:4,shops:2,brick:1,condo:1},[.16,.03,0]],foothills:[{stucco:5,shops:1,motel:1},[.18,.03,0]],laurel:[{condo:2,stucco:2,shops:2,brick:1,hotel:1},[.1,.03,.04]]},v1=[[.75,{tower:4,office:2,deco:1}],[.45,{tower:2,deco:2,office:2,hotel:1,garage:1}],[0,{office:2,condo:2,deco:1,shops:1,garage:1,brick:1}]];function y1(s,t){let e=Math.max(0,1-Math.hypot(s-150,t+200)/380),n=1.3*Math.max(0,1-Math.hypot(s-640,t+480)/640);return Math.max(e,n)}var pu=new Map;function _1(s,t){let e=`${s},${t}`;if(pu.has(e))return pu.get(e);let n=mi(s,t),i=Rd[e],r=i?Math.max(0,1-Math.hypot(s-150,t+200)/380):y1(s,t),o="mix",a=null;if(i)typeof i=="string"?o=i:a=i;else if(n==="laurel"&&s>560&&s<1040&&t>160&&t<480)o="park";else if(n==="downtown"){let h=er(s*.37+11,t*.53+5);h<.1?o=r>.7?"plaza-tall":"plaza":h<.13?o="park":h<.16?o="parking":a=v1.find(([l])=>r>=l)[1]}else{let[h,[l,f,p]]=x1[n],u=er(s*.37+11,t*.53+5);u<l?o="park":u<l+f?o="parking":u<l+f+p?o="plaza":a=h}let c={kind:o,weights:a,district:n,dw:r,coastal:s<-170,lot:o==="park"?1:o==="parking"?2:o.startsWith("plaza")?4:0};return pu.set(e,c),c}function Pi(){let s=Zr.flatMap(e=>ds.map(n=>[e,n,_1(e,n)])),t=([e,n])=>`${e},${n}`in Rd;return[...s.filter(t),...s.filter(e=>!t(e))]}var Cd=()=>Pi().filter(([,,s])=>s.kind==="park");var Pd=`${ke.toFixed(1)}, ${(ve.length-1).toFixed(1)}`,Id=`${Ee.toFixed(1)}, ${(ye.length-1).toFixed(1)}`,M1=`
float paRoadNearest(float v, float start, float maxIndex) {
  return clamp(floor((v - start) / 160.0 + 0.5), 0.0, maxIndex) * 160.0 + start;
}
// Returns paint mask (rgb = color, a = coverage) and fills asphalt wear.
vec4 paRoadMarkings(vec2 p, out float wear, out float onRoad) {
  float dx = p.x - paRoadNearest(p.x, ${Pd});
  float dz = p.y - paRoadNearest(p.y, ${Id});
  float adx = abs(dx), adz = abs(dz);
  bool inX = adx < ${re.toFixed(1)};
  bool inZ = adz < ${re.toFixed(1)};
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
    if (aa > ${re.toFixed(1)} || ab < ${re.toFixed(1)}) continue;
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
`,Bn={wetness:{value:0},mirrorTex:{value:null},mirrorMatrix:{value:new Ht},useMirror:{value:0},worldTime:{value:0}},b1=`
float paRoadDetail(vec2 p, float fw, out float manhole) {
  manhole = 0.0;
  float skid = 0.0;
  float dx = p.x - paRoadNearest(p.x, ${Pd});
  float dz = p.y - paRoadNearest(p.y, ${Id});
  for (int axis = 0; axis < 2; axis++) {
    float a = axis == 0 ? dx : dz;
    float b = axis == 0 ? dz : dx;
    float along = axis == 0 ? p.y : p.x;
    float road = axis == 0 ? p.x - dx : p.y - dz;
    if (abs(a) > ${re.toFixed(1)} || abs(b) < ${re.toFixed(1)}) continue;
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
`,S1=`
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
`;function w1(){return On("road",{color:16777215,roughness:.85,metalness:0},{uniforms:Bn,fragmentPars:M1+b1+S1+`
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
      }`})}function E1(){return On("slab",{color:16777215,roughness:.85,metalness:0},{uniforms:{wetness:Bn.wetness},vertexPars:"attribute float aLot; flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf;",vertex:`
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
        float ring = ${pi.toFixed(1)};
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
      }`,roughness:"roughnessFactor = mix(paSlabRough, 0.42, wetness * (abs(vLot - 1.0) < 0.5 ? 0.0 : 1.0));"})}function T1(){return On("sand",{color:16777215,roughness:.95},{fragmentPars:"float paWet;",color:`
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
      }`,roughness:"roughnessFactor = mix(0.95, 0.22, paWet);"})}function A1(){return On("terrain",{color:16777215,roughness:.95},{color:`
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
      }`})}function gi(s,t){let e=Math.max(0,s-(Ce+52)),n=Math.max(0,Ee-80-t),i=Math.max(0,t-(Le+80)),r=Math.hypot(e,Math.max(n,i)*.9);if(s<-360)return-40;if(r<=0)return-.6;let o=Math.sin(s*.011+Math.sin(t*.006)*2)*.5+Math.sin(t*.013+s*.004)*.5,a=Math.sin(s*.031+t*.017)*5+Math.sin(t*.043-s*.012)*3.5;return-.6+(70*(1-Math.exp(-r/170))+r*.1)*(.8+o*.3)+a*Math.min(r/120,1)+Math.min(r/30,1)*1.5}function Dd(s,t){let e=w1(),n=new Bt(new Oe(1,1),e);n.rotation.x=-Math.PI/2;let i=un-1,r=Ce+80,o=Ee-140,a=Le+140;n.scale.set(r-i,a-o,1),n.position.set((i+r)/2,0,(o+a)/2),n.receiveShadow=!0,s.add(n);let c=[];for(let[R,ut,xt]of Pi())c.push([R,ut,si,si,xt.lot]);let h=a-o,l=(o+a)/2;c.push([(Qe.from+Qe.to)/2,l,Qe.from-Qe.to,h,3]),c.push([(Qe.to+un)/2,l,Qe.to-un,h,1]);let f=ve[ve.length-1]+re;c.push([f+pi/2,l,pi,h,0]),c.push([(f+pi+r)/2,l,r-f-pi,h,1]);let p=ye[0]-re,u=ye[ye.length-1]+re;for(let[R,ut]of[[p,-1],[u,1]]){let xt=f-Qe.from,Et=(f+Qe.from)/2;c.push([Et,R+ut*pi/2,xt,pi,0]),c.push([Et,R+ut*(pi+35),xt,70,1])}let g=new Kt(1,1,1),x=new xe(g,E1(),c.length),m=new Float32Array(c.length),d=new Ht;c.forEach(([R,ut,xt,Et,Lt],Vt)=>{d.compose(new U(R,ie/2-.05,ut),new ge,new U(xt,ie+.1,Et)),x.setMatrixAt(Vt,d),m[Vt]=Lt}),g.setAttribute("aLot",new Ge(m,1)),x.receiveShadow=!0,x.layers.set(1),s.add(x);let _=new Oe(1,1,24,1),M=new Bt(_,T1());M.rotation.x=-Math.PI/2;let y=-470,w=un;M.scale.set(w-y,h+320,1),M.position.set((y+w)/2,0,l),M.updateMatrixWorld();let A=_.attributes.position;for(let R=0;R<A.count;R++){let ut=y+(A.getX(R)+.5)*(w-y);A.setZ(R,ut>=un?0:-.02-(un-ut)*.0105)}_.computeVertexNormals(),M.receiveShadow=!0,s.add(M);let I=-420,D=Ce+1500,b=Ee-1400,S=Le+1400,N=new Oe(D-I,S-b,Math.round((D-I)/22),Math.round((S-b)/22));N.rotateX(-Math.PI/2);let H=N.attributes.position;for(let R=0;R<H.count;R++){let ut=H.getX(R)+(I+D)/2,xt=H.getZ(R)+(b+S)/2;H.setX(R,ut),H.setZ(R,xt),H.setY(R,gi(ut,xt))}N.computeVertexNormals();let B=new Bt(N,A1());B.receiveShadow=!0,s.add(B);let O=new Kt(1,1,1),Y=new kt({color:10131084,roughness:.9}),X=[[fe.maxX+1.5,0,1,1,fe.maxZ-fe.minZ+4],[(fe.maxX+Qe.from)/2,fe.minZ-1.5,fe.maxX-Qe.from,1,1],[(fe.maxX+Qe.from)/2,fe.maxZ+1.5,fe.maxX-Qe.from,1,1]],it=new xe(O,Y,X.length);return X.forEach(([R,ut,xt,Et,Lt],Vt)=>{d.compose(new U(R,Et/2,ut),new ge,new U(xt,Et,Lt)),it.setMatrixAt(Vt,d)}),it.castShadow=it.receiveShadow=!0,s.add(it),{ground:n,slabMesh:x,terrain:B}}function ze(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Ue,h=0;for(let l=0;l<s.length;++l){let f=s[l],p=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,u,l),h+=u}}if(e){let l=0,f=[];for(let p=0;p<s.length;++p){let u=s[p].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+l);l+=s[p].attributes.position.count}c.setIndex(f)}for(let l in r){let f=Ld(r[l]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,f)}for(let l in o){let f=o[l][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let p=0;p<f;++p){let u=[];for(let x=0;x<o[l].length;++x)u.push(o[l][x][p]);let g=Ld(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Ld(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){let l=s[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}let o=new t(r),a=new qe(o,e,n),c=0;for(let h=0;h<s.length;++h){let l=s[h];if(l.isInterleavedBufferAttribute){let f=c/e;for(let p=0,u=l.count;p<u;p++)for(let g=0;g<e;g++){let x=l.getComponent(p,g);a.setComponent(p+f,g,x)}}else o.set(l.array,c);c+=l.count*e}return i!==void 0&&(a.gpuType=i),a}var R1=new Ht;function Zi(s,{exclude:t=[]}={}){s.updateMatrixWorld(!0);let e=new Ht().copy(s.matrixWorld).invert(),n=new Set;for(let o of t)o.traverse(a=>n.add(a));let i=new Map;s.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||n.has(o)||Array.isArray(o.material)||o.geometry.isInstancedBufferGeometry||Object.keys(o.geometry.morphAttributes).length)return;let a=[o.material.uuid,o.castShadow,o.receiveShadow,o.layers.mask,o.renderOrder,!!o.userData.noAO,o.frustumCulled].join("|");i.has(a)||i.set(a,[]),i.get(a).push(o)});let r=0;for(let o of i.values()){if(o.length<2)continue;let a=o.map(p=>{let u=p.geometry.index?p.geometry.toNonIndexed():p.geometry.clone();return u.applyMatrix4(R1.multiplyMatrices(e,p.matrixWorld)),u}),c=Object.keys(a[0].attributes).filter(p=>a.every(u=>u.attributes[p]&&u.attributes[p].itemSize===a[0].attributes[p].itemSize));for(let p of a)for(let u of Object.keys(p.attributes))c.includes(u)||p.deleteAttribute(u);let h=ze(a);if(!h)continue;let l=o[0],f=new Bt(h,l.material);f.castShadow=l.castShadow,f.receiveShadow=l.receiveShadow,f.layers.mask=l.layers.mask,f.renderOrder=l.renderOrder,f.frustumCulled=l.frustumCulled,f.userData={...l.userData,batched:o.length},s.add(f);for(let p of o)p.removeFromParent();r+=o.length-1}return r}var nr=(s,t)=>(s+4096)*8192+(t+4096),ir=class{constructor(t=80,e=n=>[n.w,n.d]){this.cell=t,this.half=e,this.map=new Map,this.stamp=0,this.all=[]}add(t){let[e,n]=this.half(t),i=this.cell,r=Math.floor((t.x-e)/i),o=Math.floor((t.x+e)/i),a=Math.floor((t.z-n)/i),c=Math.floor((t.z+n)/i);for(let h=r;h<=o;h++)for(let l=a;l<=c;l++){let f=nr(h,l),p=this.map.get(f);p||this.map.set(f,p=[]),p.push(t)}return t._gs=0,this.all.push(t),t}addAll(t){for(let e of t)this.add(e);return this}near(t,e,n,i){let r=this.cell,o=++this.stamp,a=Math.floor((t-n)/r),c=Math.floor((t+n)/r),h=Math.floor((e-n)/r),l=Math.floor((e+n)/r);for(let f=a;f<=c;f++)for(let p=h;p<=l;p++){let u=this.map.get(nr(f,p));if(u)for(let g=0;g<u.length;g++){let x=u[g];if(x._gs!==o&&(x._gs=o,i(x)===!0))return!0}}return!1}segment(t,e,n,i,r){let o=this.cell,a=++this.stamp,c=Math.hypot(n-t,i-e),h=Math.max(1,Math.ceil(c/(o*.5))),l=NaN,f=NaN;for(let p=0;p<=h;p++){let u=p/h,g=Math.floor((t+(n-t)*u)/o),x=Math.floor((e+(i-e)*u)/o);if(!(g===l&&x===f)){l=g,f=x;for(let m=g-1;m<=g+1;m++)for(let d=x-1;d<=x+1;d++){let _=this.map.get(nr(m,d));if(_)for(let M=0;M<_.length;M++){let y=_[M];if(y._gs!==a&&(y._gs=a,r(y)===!0))return!0}}}}return!1}},Zn=class{constructor(t=24){this.cell=t,this.map=new Map,this.count=0}add(t){let e=nr(Math.floor(t.x/this.cell),Math.floor(t.z/this.cell)),n=this.map.get(e);return n||this.map.set(e,n=[]),n.push(t),this.count++,t}addAll(t){for(let e of t)this.add(e);return this}near(t,e,n,i){let r=this.cell,o=Math.floor((t-n)/r),a=Math.floor((t+n)/r),c=Math.floor((e-n)/r),h=Math.floor((e+n)/r);for(let l=o;l<=a;l++)for(let f=c;f<=h;f++){let p=this.map.get(nr(l,f));if(p){for(let u=0;u<p.length;u++)if(i(p[u])===!0)return!0}}return!1}any(t,e,n){return this.near(t,e,n,i=>Math.abs(i.x-t)<n&&Math.abs(i.z-e)<n)}},gu=320,Ud=(s,t)=>nr(Math.floor(s/gu),Math.floor(t/gu)),ta=[],$r=new ni,mu=new fi;function Kr(s,t,e=null){return s.updateMatrixWorld(!0),$r.setFromObject(s),$r.getBoundingSphere(mu),ta.push({object:s,far:t,x:mu.center.x,z:mu.center.z,r:Math.hypot($r.max.x-$r.min.x,$r.max.z-$r.min.z)/2,onLod:e}),s}function xu(s,t){for(let e=0;e<ta.length;e++){let n=ta[e],i=Math.hypot(n.x-s,n.z-t)-n.r;n.far>0&&(n.object.visible=i<n.far),n.onLod&&n.onLod(i,n.object)}}var Fd=()=>({entries:ta.length,visible:ta.filter(s=>s.object.visible).length});function tn(s,t,e,n,{at:i,set:r,far:o=0,setup:a=null,cloneGeometry:c=!1,chunk:h=gu}){let l=new Map;t.forEach((u,g)=>{let[x,m]=i(u),d=nr(Math.floor(x/h),Math.floor(m/h)),_=l.get(d);_||l.set(d,_=[]),_.push(g)});let f=new Array(t.length),p=[];for(let u of l.values()){let g=new xe(c?e.clone():e,n,u.length);u.forEach((x,m)=>{r(g,m,t[x],x),f[x]={mesh:g,index:m}}),g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0),a?.(g,u.map(x=>t[x])),g.computeBoundingSphere(),s.add(g),o>0&&Kr(g,o),p.push(g)}return{meshes:p,refs:f}}var ue={CURTAIN:0,PUNCHED:1,RIBBON:2,BRICK:3,STUCCO:4,BALCONY:5,BLANK:6,DECO:7,GARAGE:8,METAL:9,MOTEL:10,CONDO:11},C1=`
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

#ifndef FACADE_LOW
// Interior mapping: every window looks into its own room. The view ray is followed from
// the glass to whichever of the room's surfaces it meets first (back wall, side walls,
// floor or ceiling), so the rooms shift in parallax as you drive past, with no geometry.
//   cell: position inside the window's bay in metres; size: bay width and storey height
//   seed: per-room random; office: 0 homes, 1 open-plan floors
vec3 paRoom(vec2 cell, vec2 size, vec3 V, vec3 T, vec3 N, float seed, float office, out float ceiling) {
  vec3 r = vec3(dot(V, T), V.y, max(-dot(V, N), 0.03));
  float depth = mix(4.2, 9.0, office);
  float tx = abs(r.x) > 1e-4 ? (r.x > 0.0 ? size.x - cell.x : -cell.x) / r.x : 1e5;
  float ty = abs(r.y) > 1e-4 ? (r.y > 0.0 ? size.y - cell.y : -cell.y) / r.y : 1e5;
  float tz = depth / r.z;
  float t = min(tx, min(ty, tz));
  vec3 hit = vec3(cell, 0.0) + r * t;
  vec3 paintCol = mix(mix(vec3(0.78, 0.72, 0.6), vec3(0.6, 0.66, 0.7), step(0.4, seed)), vec3(0.72, 0.58, 0.5), step(0.75, seed));
  paintCol = mix(paintCol, vec3(0.74, 0.75, 0.76), office);
  vec3 col;
  ceiling = 0.0;
  if (t == tz) {
    // Back wall, with a doorway, a shelf or a picture on it.
    vec2 w = hit.xy / size;
    col = paintCol * (0.8 + 0.2 * w.y);
    float thing = step(0.3, seed) * step(abs(w.x - 0.3 - seed * 0.4), 0.14) * step(w.y, 0.72);
    col = mix(col, paintCol * mix(0.35, 0.6, fract(seed * 7.0)), thing * (1.0 - office));
    col = mix(col, vec3(0.2, 0.22, 0.25), office * step(abs(fract(w.x * 2.0 + seed) - 0.5), 0.08));
  } else if (t == ty) {
    if (r.y > 0.0) {
      // Ceiling with its light fitting (a strip in offices, a lamp at home).
      vec2 c = vec2(hit.x / size.x, hit.z / depth);
      float fitting = mix(1.0 - smoothstep(0.1, 0.22, length((c - vec2(0.5, 0.45)) * vec2(1.0, 1.6))), step(abs(fract(c.y * 3.0) - 0.5), 0.12), office);
      col = vec3(0.86, 0.85, 0.82);
      ceiling = fitting;
    } else col = mix(vec3(0.3, 0.2, 0.13), vec3(0.22, 0.24, 0.27), office) * (0.8 + 0.2 * step(0.5, fract(hit.x * 1.5)));
  } else col = paintCol * 0.82;
  // Light falls off toward the back of the room.
  return col * (1.0 - 0.45 * hit.z / depth);
}
#endif

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
  float blinds = mix(1.0, 0.65 + 0.35 * step(0.5, fract(wy * 11.0)), step(0.7, h2));
  interior *= blinds;
  vec3 roomCol = vec3(interior);
  #ifndef FACADE_LOW
    // Close up, the flat glow gives way to a real room behind the glass.
    vec3 toPix = vPaWorld - cameraPosition;
    float roomFade = (1.0 - smoothstep(70.0, 150.0, length(toPix))) * (1.0 - step(0.5, spandrel));
    if (roomFade > 0.01) {
      float ceilGlow;
      vec3 room = paRoom(vec2(fu * cellW, fv * floorH), vec2(cellW, floorH), normalize(toPix),
        an.x > 0.5 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0), vFacN, h1, office, ceilGlow);
      // Lit rooms glow from the ceiling fitting; dark ones only show by day.
      vec3 litRoom = room * (0.55 + ceilGlow * 2.2) * 1.5 * blinds;
      roomCol = mix(roomCol, litRoom, roomFade);
      albedo = mix(albedo, mix(glassCol, room * 0.34 * blinds, 0.6), win * roomFade * (1.0 - nightFactor * 0.8));
    }
  #endif
  vec3 lightCol = mix(mix(vec3(1.0, 0.7, 0.4), vec3(1.0, 0.88, 0.7), step(0.45, h2)), vec3(0.72, 0.85, 1.0), step(0.8, h2));
  // TVs flicker in a few homes late at night.
  float tv = step(0.94, h3) * step(2.5, style) * (0.6 + 0.4 * sin(worldTime * 7.0 + h1 * 50.0));
  lightCol = mix(lightCol, vec3(0.55, 0.65, 1.0) * (0.6 + tv), step(0.94, h3) * step(2.5, style));
  fEmit = lightCol * roomCol * win * lit * (0.5 + h2 * 0.9) * nightFactor * 0.8;
  fTilt = vec3(h1 - 0.5, 0.0, h2 - 0.5) * 0.045 * glassAll;
}
`;function Nd(s=!1){let t=On(s?"facade-low":"facade",{color:16777215,roughness:.85,metalness:0},{uniforms:{nightFactor:hn.nightFactor,worldTime:hn.worldTime},vertexPars:`
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
      vFacTop = (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y;`,fragmentPars:C1,color:`
      {
        vec3 albedo = diffuseColor.rgb;
        paFacade(albedo);
        diffuseColor.rgb = albedo;
      }`,roughness:"roughnessFactor = fRough;",metalness:"metalnessFactor = fMetal;",normal:"normal = normalize(normal + (viewMatrix * vec4(fTilt, 0.0)).xyz);",emissive:"totalEmissiveRadiance += fEmit;"});return s&&(t.defines={...t.defines,FACADE_LOW:""}),t}function P1(){return On("tiles",{color:16777215,roughness:.7},{color:`
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
      }`})}function I1(){let e=[-.54,0,-.54,.54,0,-.54,.54,0,.54,-.54,0,.54,-.22,1,0,.22,1,0],n=[0,4,5,0,5,1,1,5,2,2,5,4,2,4,3,3,4,0],i=new Ue;i.setAttribute("position",new ne(e,3)),i.setIndex(n);let r=i.toNonIndexed();return r.computeVertexNormals(),r}var kn={stucco:["#e8dcc4","#f0d6c0","#e6c9a8","#d9e2d6","#f2e8d8","#e7b9a3","#d6c7e0","#f4e4b8","#cfe0e3"],concrete:["#a9a59c","#b8b2a6","#8f8e88","#c9c3b5","#9a9690","#b0aba0"],brick:["#8a4f3c","#9c5a43","#7a4535","#a8735a","#6d4a3c","#a35b45"],tower:["#9fa6a8","#7c8589","#b5b8b4","#5f686d","#c8c3b8"],stone:["#d8cbb0","#c9b79a","#b8a88c","#d2c6ae","#bfae94"],condo:["#e9e8e4","#d9dcdc","#c4c9cb","#ece4d6","#d6d2ca"],metal:["#8a9196","#6d7a6f","#9a8f7a","#7d4a3a","#5f6b78","#a7a9a3"],glass:[[.18,.32,.38],[.16,.27,.36],[.28,.3,.28],[.25,.22,.18],[.2,.34,.33],[.14,.2,.3]]},D1={tower:36,deco:32,office:28,hotel:28,garage:28,condo:24,warehouse:24,motel:24,brick:18,stucco:14,shops:14};var Bd=["COFFEE","PIZZA","NAILS","DELI","BOOKS","PHARMACY","TACOS","SURF","RAMEN","BAR","DONUTS","LAUNDRY","VINYL","BANK","FLOWERS","GYM"],zd=["#ff5a7a","#5fe8ff","#ffd25a","#ff8a3d","#a6ff6a","#ffffff","#ff6af0","#7ab8ff"],L1=["HOTEL MIRAMAR","THE PALMS","CASA DEL MAR","HOTEL AURELIO","THE SEABRIGHT"],Od=["SURF DINER","GAS \xB7 24H","CAR WASH","DRIVE-IN","TIRE SHOP","TACO STAND","MINI MART","BURGERS"];function ea(s,t,e,n,i=0){let r=s.x1-s.x0,o=s.z1-s.z0;if(r<=e&&o<=e||i>5)return n.push(s),n;let a=r>=o,c=a?r:o;if(c<t*2)return n.push(s),n;let h=Re.clamp(yt(.36,.64)*c,t,c-t);return a?(ea({...s,x1:s.x0+h},t,e,n,i+1),ea({...s,x0:s.x0+h},t,e,n,i+1)):(ea({...s,z1:s.z0+h},t,e,n,i+1),ea({...s,z0:s.z0+h},t,e,n,i+1)),n}function U1(s){let t=Object.entries(s),e=t.reduce((i,[,r])=>i+r,0),n=gt()*e;for(let[i,r]of t)if((n-=r)<=0)return i;return t[0][0]}var _n={px:{nx:1,nz:0,rot:Math.PI/2},nx:{nx:-1,nz:0,rot:-Math.PI/2},pz:{nx:0,nz:1,rot:0},nz:{nx:0,nz:-1,rot:Math.PI}};function gs(s,t){return t.nx?s.d:s.w}function xs(s,t,e,n=0){return t.nx?[s.x+t.nx*(s.w/2+n),s.z+e]:[s.x+e,s.z+t.nz*(s.d/2+n)]}function Jr(s){return ze(s.map(([t,e,n,i,r,o,a=0,c=0,h=0,l="box"])=>{let f=l==="cyl"?new ae(t,t,e,12):l==="cone"?new wi(t,e,12):new Kt(t,e,n);return(a||c||h)&&f.applyMatrix4(new Ht().makeRotationFromEuler(new en(a,c,h))),f.translate(i,r,o),f.index?f.toNonIndexed():f}))}function F1(){let s=Jr([[1.6,1,1.2,0,.5,0],[.42,.08,0,0,1.04,0,0,0,0,"cyl"],[1.62,.06,1.22,0,.22,0]]),t=Jr([[1.6,3,0,0,4.1,0,0,0,0,"cyl"],[1.75,1,0,0,6.1,0,0,0,0,"cone"],[.16,2.6,.16,1.1,1.3,1.1],[.16,2.6,.16,-1.1,1.3,1.1],[.16,2.6,.16,1.1,1.3,-1.1],[.16,2.6,.16,-1.1,1.3,-1.1],[2.6,.14,2.6,0,2.6,0]]),e=[[3.2,.06,1.1,0,0,.6],[3.2,.04,.04,0,.95,1.13],[.04,.04,1.1,-1.6,.95,.6],[.04,.04,1.1,1.6,.95,.6],[.04,.95,.04,-1.58,.47,1.13],[.04,.95,.04,0,.47,1.13],[.04,.95,.04,1.58,.47,1.13],[3.2,.03,.03,0,.5,1.13]],n=h=>Jr([...e,[Math.hypot(2.4,h),.05,.55,0,-h/2,.55,0,0,Math.atan2(h,2.4)],[Math.hypot(2.4,h),.03,.03,0,-h/2+.85,.83,0,0,Math.atan2(h,2.4)]]),i=Jr([[1,.16,1.35,0,0,.67]]),r=Jr([[1,1,.04,0,.58,1.33],[.012,1,1.35,-.5,.58,.67],[.012,1,1.35,.5,.58,.67]]),o=(()=>{let h=[],l=[],f=(u,g,x,m,d,_)=>{h.push(...u,...g,...x,...u,...x,...m),l.push(d[0],d[1],_[0],d[1],_[0],_[1],d[0],d[1],_[0],_[1],d[0],_[1])};f([-.5,0,0],[.5,0,0],[.5,-.7,1.6],[-.5,-.7,1.6],[0,0],[1,1]),f([-.5,-.7,1.6],[.5,-.7,1.6],[.5,-1,1.6],[-.5,-1,1.6],[0,0],[1,.3]);let p=new Ue;return p.setAttribute("position",new ne(h,3)),p.setAttribute("uv",new ne(l,2)),p.computeVertexNormals(),p})(),a=new Oe(1,1),c=Jr([[.08,1,0,0,.5,0,0,0,0,"cyl"]]);return{acUnit:s,tank:t,fireEscape:n,balconySlab:i,balconyRail:r,awning:o,sign:a,antenna:c}}function N1(s){return We(s,1024,1024,t=>{Bd.forEach((e,n)=>{let i=n%2*512,r=Math.floor(n/2)*128,o=zd[n%zd.length],a=n%3===0;t.fillStyle=a?"#121417":["#f4efe4","#1d3b4a","#5a1f1a"][n%3],t.fillRect(i+4,r+4,504,120),t.strokeStyle=o,t.lineWidth=6,t.strokeRect(i+10,r+10,492,108),t.font='800 78px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor=o,t.shadowBlur=16,t.fillStyle=n%3===0?o:n%3===1?"#ffffff":"#ffe9c2",t.fillText(e,i+256,r+68),t.shadowBlur=0})})}function z1(s){return We(s,256,32,(t,e,n)=>{for(let i=0;i<8;i++)t.fillStyle=i%2?"#f4f1ea":"#ffffff",t.fillRect(i*e/8,0,e/8,n),i%2===0&&(t.fillStyle="rgba(0,0,0,0.42)",t.fillRect(i*e/8,0,e/8,n))},{repeat:!1})}function kd(s,t){let e=new Map,n=[],i=[],r=[],o=[],a=[],c=[],h=[],l=[],f=(v,C,F,k)=>{let z=`${v}|${Ud(C,F)}`;e.has(z)||e.set(z,[]),e.get(z).push(k)};function p(v,C,F,k,z,K,J,st){return f("facade",v,C,{x:v,z:C,w:F,d:k,y0:z,h:K,style:J,...st}),i.push({x:v,z:C,w:F,d:k,h:z+K}),z<1&&n.push({x:v,z:C,w:F/2,d:k/2}),{x:v,z:C,w:F,d:k,y0:z,h:K,top:z+K}}let u=(v,C,F={})=>({wall:C,glass:le(kn.glass),seed:gt()*100,shops:!1,floorH:v===ue.CURTAIN?yt(3.7,4.2):v===ue.STUCCO?3.4:v===ue.GARAGE?3:yt(3.2,3.6),cellW:v===ue.CURTAIN?yt(1.6,2.2):v===ue.RIBBON?yt(2.4,3):v===ue.STUCCO?yt(3.8,4.6):v===ue.DECO?yt(2.2,2.6):v===ue.MOTEL?4.2:v===ue.CONDO?yt(3.2,3.8):yt(2.8,3.6),...F}),g=(v,C)=>v*C.floorH+(C.shops?4.8:.9)+1.3-ie,x=(v,C,F)=>{let k=gs(v,F),z=Math.max(Math.floor((k-1)/C.cellW),1),K=C.shops?4.8:.9,J=Math.max(0,Math.floor((v.top-1.3-K)/C.floorH));return{faceW:k,nCols:z,groundH:K,rows:J,colU:st=>(st+.5-z/2)*C.cellW,rowY:st=>K+st*C.floorH}};function m(v,C,F=!1){for(let k=0;k<C;k++){let z=v.x+yt(-v.w/2+2.5,v.w/2-2.5),K=v.z+yt(-v.d/2+2.5,v.d/2-2.5);f("ac",z,K,{pos:[z,v.top,K],rot:le([0,Math.PI/2]),scale:[yt(.8,1.6),yt(.8,1.3),yt(.8,1.5)],color:le(["#b5b8b6","#9a9d9c","#c8c9c4"])})}if(F){let k=v.x+yt(-v.w/4,v.w/4),z=v.z+yt(-v.d/4,v.d/4);f("tank",k,z,{pos:[k,v.top,z],rot:0,scale:[1,yt(.9,1.15),1],color:le(["#6b4f36","#5e4a3a","#7a5a3e"])})}}function d(v,C,F,k){f("antenna",v,F,{pos:[v,C,F],rot:0,scale:[1,k,1],color:"#9aa0a3"}),c.push([v,C+k+.3,F])}function _(v,C){p(v.x,v.z,v.w+.9,v.d+.9,v.top-.15,.75,ue.BLANK,u(ue.BLANK,C))}function M(v,C,F,k){for(let z of F){let K=gs(v,z),J=Math.max(Math.floor(K/6),1),st=K/J,Mt=le(["#b8322a","#2b6e8f","#2f7a4f","#d08a2a","#6b3f8f","#20304a"]);for(let $=0;$<J;$++){let lt=-K/2+($+.5)*st;if(Te(.78)){let[Tt,ft]=xs(v,z,lt,.07);f("sign",Tt,ft,{pos:[Tt,4.1,ft],rot:z.rot,scale:[st*.72,.7,1],sign:Math.floor(gt()*Bd.length),color:"#ffffff"})}if(k&&Te(.7)){let[Tt,ft]=xs(v,z,lt,.02);f("awning",Tt,ft,{pos:[Tt,3.62,ft],rot:z.rot,scale:[st*.9,1,1],color:Te(.75)?Mt:le(["#b8322a","#2b6e8f","#2f7a4f"])})}}}}function y(v,C,F,k=2,z="glass"){for(let K of F){let J=x(v,C,K);for(let st=1;st<J.rows;st++)for(let Mt=0;Mt+k<=J.nCols;Mt+=k){let $=(J.colU(Mt)+J.colU(Mt+k-1))/2,lt=k*C.cellW-.5,[Tt,ft]=xs(v,K,$,0),St=J.rowY(st)+.02;f("balconySlab",Tt,ft,{pos:[Tt,St,ft],rot:K.rot,scale:[lt,1,1],color:"#d9d8d2"}),f(z==="glass"?"balconyGlass":"balconyRail",Tt,ft,{pos:[Tt,St,ft],rot:K.rot,scale:[lt,1,1],color:z==="glass"?"#9fb6bf":"#2a2c2d"})}}}function w(v,C,F){let k=x(v,C,F);if(k.nCols<4||k.rows<3)return;let z=Math.floor(gt()*(k.nCols-2))+1,K=(k.colU(z)+k.colU(z+1))/2,[J,st]=xs(v,F,K,0);for(let Mt=1;Mt<k.rows;Mt++)f("fireEscape",J,st,{pos:[J,k.rowY(Mt),st],rot:F.rot,scale:[1,1,1],color:"#2b2e30",floorH:C.floorH})}let A={tower(v,C,F){let k=v.w,z=v.d,K=p(v.x,v.z,k,z,ie,yt(10,16),le([ue.RIBBON,ue.PUNCHED]),u(ue.RIBBON,le(kn.concrete),{shops:!0}));M(K,null,C,!1),m({...K,x:v.x+k*.3,w:k*.3,d:z*.4},3);let J=u(ue.CURTAIN,le(kn.tower)),st=70+F*yt(70,150),Mt=Math.min(k-10,yt(30,46)),$=Math.min(z-10,yt(30,46)),lt=K.top,Tt=st>120?3:st>75?2:1,ft;for(let St=0;St<Tt;St++){let zt=St===Tt-1?Math.max(st-(lt-ie),12):st*yt(.42,.58)/(St+1);ft=p(v.x,v.z,Mt,$,lt,zt,ue.CURTAIN,J),lt+=zt,Mt*=yt(.72,.86),$*=yt(.72,.86)}if(a.push({x:ft.x,z:ft.z,w:ft.w,d:ft.d,y:ft.top-.6,color:le(["#bfe3ff","#ffe2b0","#ffffff","#ffb9d8"])}),Te(.5)){let St=p(ft.x,ft.z,ft.w*.45,ft.d*.45,ft.top,6,ue.BLANK,u(ue.BLANK,"#7d8487"));d(ft.x,St.top,ft.z,st>140?28:12)}else m(ft,4),c.push([ft.x+ft.w/2-1,ft.top+.8,ft.z+ft.d/2-1])},office(v,C,F){let k=v.w,z=v.d,K=Math.floor(yt(9,18)+F*yt(4,12)),J=Te(.6)?ue.RIBBON:ue.PUNCHED,st=u(J,le(kn.concrete),{shops:!0}),Mt=p(v.x,v.z,k,z,ie,g(K,st),J,st);M(Mt,st,C,!1);let $=Mt;Te(.45)&&($=p(Mt.x+yt(-2,2),Mt.z+yt(-2,2),k*yt(.6,.75),z*yt(.6,.75),Mt.top,yt(8,20),J,{...st,shops:!1}));let lt=p($.x,$.z,$.w*.35,$.d*.35,$.top,4.5,ue.BLANK,u(ue.BLANK,"#8d8f8c"));m($,5),c.push([lt.x,lt.top+.3,lt.z])},deco(v,C,F){let k=le(kn.stone),z=u(ue.DECO,k,{shops:!0}),K=50+F*yt(30,90),J=v.w,st=v.d,Mt=ie,$,lt=3+(K>100?1:0);for(let ft=0;ft<lt;ft++){let St=ft===0?K*.45:K*.55/(lt-1);$=p(v.x,v.z,J,st,Mt,St,ue.DECO,ft===0?z:{...z,shops:!1}),ft===0&&M($,z,C,Te(.4)),_($,"#e6dcc6"),Mt+=St,J*=yt(.7,.8),st*=yt(.7,.8)}let Tt=p($.x,$.z,Math.max(3,J*.4),Math.max(3,st*.4),$.top,8,ue.BLANK,u(ue.BLANK,k));d(Tt.x,Tt.top,Tt.z,18),a.push({x:Tt.x,z:Tt.z,w:Tt.w,d:Tt.d,y:Tt.top-1.2,color:le(["#ffe2b0","#bfe3ff"])})},brick(v,C){let F=u(ue.BRICK,le(kn.brick),{shops:Te(.75),floorH:yt(3.1,3.4)}),k=Math.floor(yt(4,8)),z=p(v.x,v.z,v.w,v.d,ie,g(k,F),ue.BRICK,F);F.shops&&M(z,F,C,Te(.5)),_(z,"#b8ab98");for(let K of C.slice(0,2))Te(.8)&&w(z,F,K);m(z,2,Te(.8))},condo(v,C,F){let k=u(ue.CONDO,le(kn.condo),{shops:Te(.6),floorH:3.2}),z=Math.floor(yt(6,12)+F*8),K=p(v.x,v.z,v.w,v.d,ie,g(z,k),ue.CONDO,k);k.shops&&M(K,k,C,!1),y(K,k,C,2,"glass"),m(K,3)},hotel(v,C,F){let k=u(ue.CONDO,le(["#efe6d4","#e2d3bd","#d8dfe2","#f2ddd0"]),{shops:!0,floorH:3.3}),z=Math.min(v.w,yt(26,38)),K=Math.min(v.d,yt(18,26)),J=Math.floor(yt(10,16)+F*6),st=p(v.x,v.z,z,K,ie,g(J,k),ue.CONDO,k);y(st,k,C.length?C:[_n.pz],1,"metal");let Mt=C[0]||_n.pz,$=le(L1);o.push({kind:"hotel",b:st,f:Mt,name:$}),m(st,3)},shops(v,C){let F=Te(.5),k=u(ue.PUNCHED,Te(.6)?le(kn.stucco):le(kn.concrete),{shops:!0}),z=p(v.x,v.z,v.w,v.d,ie,F?g(1,k):6,ue.PUNCHED,k);M(z,k,C.length?C:[_n.pz],!0),_(z,"#cfc6b4"),m(z,Math.floor(yt(2,5)))},garage(v,C){let F=u(ue.GARAGE,le(["#b3ada2","#a7a49c","#c0b8aa"]),{floorH:3}),k=Math.floor(yt(4,7)),z=p(v.x,v.z,v.w,v.d,ie,k*3+1.4,ue.GARAGE,F);o.push({kind:"garage",b:z,f:C[0]||_n.pz}),m(z,1)},stucco(v,C){let F=C.length>0&&Te(.8),k=u(ue.STUCCO,le(kn.stucco),{shops:F}),z=Math.floor(yt(2,5)),K=p(v.x,v.z,v.w,v.d,ie,g(z,k),Te(.8)?ue.STUCCO:ue.PUNCHED,k);F&&M(K,k,C,Te(.6)),Te(.8)?f("tileRoof",K.x,K.z,{pos:[K.x,K.top,K.z],rot:0,scale:[K.w,Math.min(K.w,K.d)*.22,K.d]}):m(K,2),C.find(st=>st.nx===-1)&&Te(.6)&&h.push({x:K.x-K.w/2-.12,z:K.z,y:(F?4.8:1.2)+1.8,face:"west",text:le(["MOTEL","TACOS","SURF SHOP","LIQUOR","PIZZA","COCKTAILS","ICE CREAM","BAIT & TACKLE"]),color:le(["#ff4f7b","#5ff2ff","#ffd25a","#ff7a3d","#9dff6a"])})},motel(v,C){let F=C[0]||_n.pz,k=u(ue.MOTEL,le(kn.stucco),{floorH:3}),z=gs(v,F),K=F.nx?v.w:v.d,J=Math.min(K*.5,12),st=K/2-J/2,Mt=v.x-F.nx*st,$=v.z-F.nz*st,lt=F.nx?J:z*.92,Tt=F.nx?z*.92:J,ft=p(Mt,$,lt,Tt,ie,g(2,k),ue.MOTEL,k),[St,zt]=xs(ft,F,0,0);f("balconySlab",St,zt,{pos:[St,.9+3+.02,zt],rot:F.rot,scale:[gs(ft,F)-.4,1,1.15],color:"#e6e1d6"}),f("balconyRail",St,zt,{pos:[St,.9+3+.02,zt],rot:F.rot,scale:[gs(ft,F)-.4,1,1.15],color:"#e8e4da"}),f("tileRoof",ft.x,ft.z,{pos:[ft.x,ft.top,ft.z],rot:0,scale:[ft.w,Math.min(ft.w,ft.d)*.28,ft.d]});let[V,_t]=xs(v,F,-gs(v,F)/2+4,-2);o.push({kind:"motelSign",x:V,z:_t,f:F,name:le(["SEA BREEZE","SUNSET","PALM VIEW","BLUE WAVE"])}),r.push({x:v.x+F.nx*J/2,z:v.z+F.nz*J/2,w:F.nx?K-J:z,d:F.nx?z:K-J,parking:!0})},warehouse(v,C){let F=u(ue.METAL,le(kn.metal),{floorH:9}),k=yt(8,11.5),z=p(v.x,v.z,v.w,v.d,ie,k,ue.METAL,F);m(z,Math.floor(yt(1,4)))}},I=si/2-pi;for(let[v,C,F]of Pi()){let k=`${v},${C}`,z=F.kind==="mix"?F.weights:F.kind,K=F.dw;if(z==="park"){r.push({x:v,z:C,w:I*2,d:I*2,park:!0});continue}if(z==="parking"){let $=p(v-I+14,C-I+11,24,18,ie,5.5,ue.STUCCO,u(ue.STUCCO,le(kn.stucco),{shops:!0}));M($,null,[_n.nz],!0);let lt=k==="80,240"?"GAS \xB7 24H":k==="-240,-400"?"SURF DINER":Od[Math.floor(er(v+3,C+9)*Od.length)];h.push({x:$.x,z:$.z-$.d/2-.1,y:7.6,face:"north",text:lt,color:"#ff6a5a"}),r.push({x:v+10,z:C+10,w:I*1.6,d:I*1.6,parking:!0});continue}if(z==="plaza"||z==="plaza-tall"){let $=yt(46,54);A.tower({x:v+yt(-6,6),z:C+yt(-6,6),w:$,d:$},[_n.px,_n.nx,_n.pz,_n.nz],z==="plaza-tall"?Math.max(1.25,K*1.1):Math.max(.95,K)),r.push({x:v,z:C,w:I*2,d:I*2,plaza:!0});continue}let st=F.coastal||F.district==="eastside"||F.district==="foothills",Mt=ea({x0:v-I,x1:v+I,z0:C-I,z1:C+I},st?18:22,st?44:64,[]);for(let $ of Mt){let lt=$.x1-$.x0,Tt=$.z1-$.z0,ft=[];if($.x0<=v-I+.5&&ft.push(_n.nx),$.x1>=v+I-.5&&ft.push(_n.px),$.z0<=C-I+.5&&ft.push(_n.nz),$.z1>=C+I-.5&&ft.push(_n.pz),Te(.07)||!ft.length){r.push({x:($.x0+$.x1)/2,z:($.z0+$.z1)/2,w:lt,d:Tt});continue}let St=Object.fromEntries(Object.entries(z).filter(([se])=>Math.min(lt,Tt)>=D1[se])),zt=Object.keys(St).length?U1(St):"shops",V=zt==="tower"?yt(2,6):zt==="shops"||zt==="brick"?yt(.2,1):yt(.5,3),_t=yt(1.5,4),Pt=ft.includes(_n.nx)?V:_t,pt=ft.includes(_n.px)?V:_t,vt=ft.includes(_n.nz)?V:_t,dt=ft.includes(_n.pz)?V:_t,Yt={x:($.x0+Pt+$.x1-pt)/2,z:($.z0+vt+$.z1-dt)/2,w:lt-Pt-pt,d:Tt-vt-dt};A[zt](Yt,ft,K)}}for(let v=0;v<620;v++){let C=gt(),F=C<.6?yt(Ce+100,Ce+760):yt(-300,Ce+400),k=C<.6?yt(Ee-500,Le+500):Te(.5)?yt(Le+140,Le+620):yt(Ee-620,Ee-140);l.push([F,k])}let D=F1(),b=N1(t),S=z1(t),N=new Kt(1,1,1),H=Nd(),B=new kt({map:b,emissive:16777215,emissiveMap:b,emissiveIntensity:.4,roughness:.5});B.onBeforeCompile=v=>{v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSign;`).replace("#include <uv_vertex>",`#include <uv_vertex>
        vec2 atlasUv = uv * vec2(0.5, 0.125) + aSign;
        #ifdef USE_MAP
          vMapUv = atlasUv;
        #endif
        #ifdef USE_EMISSIVEMAP
          vEmissiveMapUv = atlasUv;
        #endif`)},B.customProgramCacheKey=()=>"shop-sign-atlas";let O=new Map,Y={facade:{geometry:N,material:H,shadow:!0,lod:0},tileRoof:{geometry:I1(),material:P1(),shadow:!0,lod:1100},ac:{geometry:D.acUnit,material:new kt({color:16777215,roughness:.55,metalness:.5}),shadow:!0,lod:320},tank:{geometry:D.tank,material:new kt({color:16777215,roughness:.9}),shadow:!0,lod:420},antenna:{geometry:D.antenna,material:new kt({color:16777215,roughness:.4,metalness:.8}),shadow:!0,lod:1400},fireEscape:{geometry:null,material:new kt({color:16777215,roughness:.6,metalness:.6}),shadow:!0,lod:260},balconySlab:{geometry:D.balconySlab,material:new kt({color:16777215,roughness:.8}),shadow:!0,lod:340},balconyGlass:{geometry:D.balconyRail,material:new kt({color:16777215,roughness:.08,metalness:.7,transparent:!0,opacity:.55,depthWrite:!1}),shadow:!1,lod:300},balconyRail:{geometry:D.balconyRail,material:new kt({color:16777215,roughness:.5,metalness:.5}),shadow:!0,lod:300},awning:{geometry:D.awning,material:new kt({map:S,side:rn,roughness:.9}),shadow:!0,lod:300},sign:{geometry:D.sign,material:B,shadow:!1,lod:520}},X=new Set(["tileRoof","ac","tank","antenna","fireEscape","balconyGlass","balconyRail","balconySlab"]),it=Nd(!0),R=new Ht,ut=new ge,xt=new U,Et=new U,Lt=new Ut,Vt=new U(0,1,0);for(let[v,C]of e){let[F]=v.split("|"),k=Y[F];if(F==="fireEscape"){let z=new Map;for(let K of C){let J=K.floorH.toFixed(1);z.has(J)||z.set(J,[]),z.get(J).push(K)}for(let[K,J]of z)O.has(K)||O.set(K,D.fireEscape(Number(K))),qt(F,J,O.get(K),k);continue}qt(F,C,k.geometry,k)}function qt(v,C,F,k){let z=F;(v==="facade"||v==="sign")&&(z=F.clone());let K=new xe(z,k.material,C.length);if(v==="facade"){let J=new Float32Array(C.length*4),st=new Float32Array(C.length*3),Mt=new Float32Array(C.length*2);C.forEach(($,lt)=>{R.compose(xt.set($.x,$.y0+$.h/2,$.z),ut.identity(),Et.set($.w,$.h,$.d)),K.setMatrixAt(lt,R),K.setColorAt(lt,Lt.set($.wall)),J.set([$.style,$.floorH,$.cellW,$.seed],lt*4),st.set($.glass,lt*3),Mt.set([$.shops?1:0,0],lt*2)}),z.setAttribute("aStyle",new Ge(J,4)),z.setAttribute("aGlass",new Ge(st,3)),z.setAttribute("aExtra",new Ge(Mt,2))}else{let J=v==="sign"?new Float32Array(C.length*2):null;C.forEach((st,Mt)=>{ut.setFromAxisAngle(Vt,st.rot||0),R.compose(xt.set(...st.pos),ut,Et.set(...st.scale)),K.setMatrixAt(Mt,R),st.color&&K.setColorAt(Mt,Lt.set(st.color)),J&&J.set([st.sign%2*.5,.875-Math.floor(st.sign/2)*.125],Mt*2)}),J&&z.setAttribute("aSign",new Ge(J,2))}K.name=v,K.castShadow=k.shadow,K.receiveShadow=!0,K.userData.lod=k.lod,v==="balconyGlass"&&(K.userData.noAO=!0),X.has(v)&&K.layers.set(1),K.instanceMatrix.needsUpdate=!0,K.computeBoundingSphere(),K.computeBoundingBox(),s.add(K),v==="facade"?Kr(K,0,(J,st)=>{st.material=J>360?it:H}):Kr(K,k.lod)}let $t=[],ot=new Map,at=(v,C,F,k=null)=>{if(k&&ot.has(k))return ot.get(k);let z=We(t,v,C,F);return k&&ot.set(k,z),z},wt=new Map,Wt=(v,C)=>(wt.has(v)||wt.set(v,C()),wt.get(v)),It=(v,C={})=>new kt({color:1118481,map:v,emissive:16777215,emissiveMap:v,emissiveIntensity:.4,roughness:.5,...C}),nt=new kt({color:1843235,roughness:.45,metalness:.6}),Ft=new kt({color:3353120,emissive:16767392,emissiveIntensity:.3}),L=(v,C,F,k=!0)=>{v.traverse(z=>{z.isMesh&&(z.castShadow=!0,z.receiveShadow=!0)}),v.isGroup&&Zi(v),v.userData.glow=k,s.add(v),Kr(v,700),$t.push({mesh:v})};for(let v of o)if(v.kind==="hotel"){let{b:C,f:F,name:k}=v,z=gs(C,F),K=new Be,J=le(["#ffd27a","#ff7aa8","#7ad7ff"]),st=new Bt(new Kt(7,.35,3.4),nt);st.position.set(0,4.25,1.7);let Mt=new Bt(new Kt(6.6,.05,3),Ft);Mt.position.set(0,4.05,1.7),K.add(st,Mt);for(let pt of[-3.2,3.2]){let vt=new Bt(new ae(.07,.07,4.1,8),nt);vt.position.set(pt,2.05,3.3),K.add(vt)}let $=k.replace("HOTEL ","").replace("THE ",""),lt=at(128,1024,(pt,vt,dt)=>{pt.fillStyle="#121519",pt.fillRect(0,0,vt,dt),pt.strokeStyle=J,pt.lineWidth=6,pt.strokeRect(8,8,vt-16,dt-16),pt.fillStyle=J,pt.textAlign="center",pt.textBaseline="middle",pt.shadowColor=J,pt.shadowBlur=14;let Yt=$.split(""),se=(dt-80)/Yt.length;pt.font=`800 ${Math.min(100,se*.95)}px "Barlow Condensed", Impact, sans-serif`,Yt.forEach((Pe,jt)=>pt.fillText(Pe,vt/2,50+se*(jt+.5)))},"blade"+$+J),Tt=Wt("blade"+$+J,()=>It(lt)),ft=Math.min(14,C.top-9);if(ft>5){let pt=new Bt(new Kt(.35,ft,2.2),[Tt,Tt,nt,nt,nt,nt]);pt.position.set(z/2-2.2,7+ft/2,1.2),K.add(pt)}let St=at(1024,128,(pt,vt,dt)=>{pt.clearRect(0,0,vt,dt),pt.font='800 104px "Barlow Condensed", Impact, sans-serif',pt.textAlign="center",pt.textBaseline="middle",pt.shadowColor=J,pt.shadowBlur=18,pt.fillStyle=J,pt.fillText(k,vt/2,dt/2+4),pt.shadowBlur=0,pt.fillStyle="#fff6e0",pt.fillText(k,vt/2,dt/2+4)},"roof"+k+J),zt=Wt("roof"+k+J,()=>{let pt=It(St,{transparent:!0,alphaTest:.05,color:0});return pt.userData.boost=1.4,pt}),V=new Bt(new Oe(Math.min(z*.85,26),Math.min(z*.85,26)/8),zt);V.position.set(0,C.top-C.y0+1.9,-.6),K.add(V);let[_t,Pt]=xs(C,F,0,0);K.position.set(_t,ie,Pt),K.rotation.y=F.rot,L(K,_t,Pt)}else if(v.kind==="garage"){let{b:C,f:F}=v,k=at(128,128,($,lt,Tt)=>{$.fillStyle="#1d5fbf",$.fillRect(0,0,lt,Tt),$.strokeStyle="#ffffff",$.lineWidth=8,$.strokeRect(8,8,lt-16,Tt-16),$.fillStyle="#ffffff",$.font="800 100px Arial, sans-serif",$.textAlign="center",$.textBaseline="middle",$.fillText("P",lt/2,Tt/2+6)},"garageP"),z=Wt("garageP",()=>It(k,{color:16777215})),K=new Bt(new Kt(1.8,1.8,.3),[nt,nt,nt,nt,z,z]),J=gs(C,F),[st,Mt]=xs(C,F,J/2-1.5,.3);K.position.set(st,C.top-2,Mt),K.rotation.y=F.rot,L(K,st,Mt)}else if(v.kind==="motelSign"){let{x:C,z:F,f:k,name:z}=v,K=at(512,256,(lt,Tt,ft)=>{lt.fillStyle="#16303a",lt.fillRect(0,0,Tt,ft),lt.strokeStyle="#ff5a6e",lt.lineWidth=10,lt.strokeRect(10,10,Tt-20,ft-20),lt.textAlign="center",lt.textBaseline="middle",lt.shadowColor="#ff5a6e",lt.shadowBlur=20,lt.fillStyle="#ff7a8a",lt.font='800 110px "Barlow Condensed", Impact, sans-serif',lt.fillText("MOTEL",Tt/2,92),lt.shadowColor="#5fe8ff",lt.fillStyle="#9ff3ff",lt.font='700 54px "Barlow Condensed", Impact, sans-serif',lt.fillText(z,Tt/2,186),lt.shadowBlur=0,lt.fillStyle="#ffd25a",lt.font="700 30px Arial",lt.fillText("VACANCY",Tt/2,232)},"motel"+z),J=Wt("motel"+z,()=>It(K)),st=new Be,Mt=new Bt(new ae(.22,.28,7.5,10),nt);Mt.position.y=3.75;let $=new Bt(new Kt(5.4,2.7,.35),[nt,nt,nt,nt,J,J]);$.position.y=8.6,st.add(Mt,$),st.position.set(C,ie,F),st.rotation.y=k.rot+Math.PI/2,L(st,C,F)}let Nt=new kt({color:2236962,emissive:16777215,emissiveIntensity:0,roughness:.4}),Rt=new xe(N,Nt,a.length);a.forEach((v,C)=>{R.compose(xt.set(v.x,v.y,v.z),ut.identity(),Et.set(v.w+.5,.7,v.d+.5)),Rt.setMatrixAt(C,R),Rt.setColorAt(C,Lt.set(v.color))}),s.add(Rt),Nt.onBeforeCompile=v=>{v.fragmentShader=v.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},Nt.customProgramCacheKey=()=>"crown";let Ct=new sn({color:new Ut(6,.3,.2)}),q=new xe(new pn(.45,8,6),Ct,c.length);c.forEach(([v,C,F],k)=>{R.makeTranslation(v,C,F),q.setMatrixAt(k,R)}),s.add(q);let W=O1(s,l),G=[];for(let v of h)G.push(B1(s,t,v));let rt=new Set($t.flatMap(({mesh:v})=>{let C=[];return v.traverse(F=>{if(F.isMesh)for(let k of[].concat(F.material))(k.emissiveMap||k===Ft)&&C.push(k)}),C})),Z=new Set(G.map(v=>v.material)),Q=new ir(160,v=>[v.w/2,v.d/2]).addAll(i);return{colliders:n,buildingTops:i,emptyLots:r,topsGrid:Q,stats:{buildings:n.length,facadeBoxes:[...e.keys()].filter(v=>v.startsWith("facade")).reduce((v,C)=>v+e.get(C).length,0)},update(v,C){Nt.emissiveIntensity=v*1.6,Ct.color.setRGB(8*(.15+.85*v)*(Math.sin(C*3.2)>.2?1:.04),.25,.15),B.emissiveIntensity=.3+v*2;for(let k of rt)k.emissiveIntensity=(.3+v*2.2)*(k.userData.boost||1);let F=Math.sin(C*37)>.93?.3:1;for(let k of Z)k.emissiveIntensity=(.3+v*2.2)*(k.userData.flicker?F:1);W&&(W.material.userData.night.value=v)}}}function O1(s,t){let e={value:0},n=On("hillhouse",{color:16777215,roughness:.85},{uniforms:{night:e},fragmentPars:"uniform float night; float paHouseGlow;",color:`
      {
        float h = pa_hash12(floor(vPaWorld.xz * 0.2));
        float win = step(0.5, fract(vPaWorld.y * 0.45)) * step(0.4, fract((vPaWorld.x + vPaWorld.z) * 0.35)) * step(0.3, abs(vPaNormalW.y - 1.0));
        paHouseGlow = win * step(h, 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05), win * 0.7);
      }`,emissive:"totalEmissiveRadiance += vec3(1.0, 0.7, 0.4) * paHouseGlow * night * 2.5;"}),i=t.filter(([h,l])=>gi(h,l)>4),r=new xe(new Kt(1,1,1),n,i.length),o=new Ht,a=new ge,c=new Ut;return i.forEach(([h,l],f)=>{let p=yt(8,16),u=yt(8,14),g=yt(4,8);a.setFromAxisAngle(new U(0,1,0),gt()*Math.PI),o.compose(new U(h,gi(h,l)+g/2-1,l),a,new U(p,g,u)),r.setMatrixAt(f,o),r.setColorAt(f,c.set(le(kn.stucco)))}),n.userData.night=e,r.castShadow=!1,r.receiveShadow=!0,s.add(r),r}var vu=new Map;function B1(s,t,{x:e,y:n,z:i,face:r,text:o,color:a}){let c=o+a;if(!vu.has(c)){let f=We(t,512,128,(u,g,x)=>{u.fillStyle="#0b0d10",u.fillRect(0,0,g,x),u.font='700 70px "Barlow Condensed", Impact, sans-serif',u.textAlign="center",u.textBaseline="middle",u.shadowColor=a,u.shadowBlur=18,u.fillStyle=a,u.fillText(o,g/2,x/2+3),u.shadowBlur=0,u.fillStyle="#ffffffcc",u.fillText(o,g/2,x/2+3),u.strokeStyle=a,u.lineWidth=5,u.strokeRect(8,8,g-16,x-16)}),p=new kt({color:1118481,map:f,emissive:16777215,emissiveMap:f,emissiveIntensity:1,roughness:.5});p.userData.flicker=Te(.25),vu.set(c,p)}let h=Math.min(12,3+o.length*.9),l=new Bt(new Oe(h,h/4),vu.get(c));return l.position.set(e,n,i),l.rotation.y=r==="west"?-Math.PI/2:r==="east"?Math.PI/2:r==="north"?Math.PI:0,s.add(l),Kr(l,520),l}var na=class s extends Bt{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new dn;let n=this,i=e.color!==void 0?new Ut(e.color):new Ut(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||s.ReflectorShader,h=e.multisample!==void 0?e.multisample:4,l=new ti,f=new U,p=new U,u=new U,g=new Ht,x=new U(0,0,-1),m=new Ne,d=new U,_=new U,M=new Ne,y=new Ht,w=this.camera,A=new $e(r,o,{samples:h,type:on}),I=new Ae({name:c.name!==void 0?c.name:"unspecified",uniforms:mn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});I.uniforms.tDiffuse.value=A.texture,I.uniforms.color.value=i,I.uniforms.textureMatrix.value=y,this.material=I,this.onBeforeRender=function(D,b,S){if(p.setFromMatrixPosition(n.matrixWorld),u.setFromMatrixPosition(S.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),d.subVectors(p,u),d.dot(f)>0===!0&&this.forceUpdate===!1)return;d.reflect(f).negate(),d.add(p),g.extractRotation(S.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(u),_.subVectors(p,x),_.reflect(f).negate(),_.add(p),w.position.copy(d),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(f),w.lookAt(_),w.far=S.far,w.updateMatrixWorld(),w.projectionMatrix.copy(S.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(w.projectionMatrix),y.multiply(w.matrixWorldInverse),y.multiply(n.matrixWorld),l.setFromNormalAndCoplanarPoint(f,p),l.applyMatrix4(w.matrixWorldInverse),m.set(l.normal.x,l.normal.y,l.normal.z,l.constant);let H=w.projectionMatrix;M.x=(Math.sign(m.x)+H.elements[8])/H.elements[0],M.y=(Math.sign(m.y)+H.elements[9])/H.elements[5],M.z=-1,M.w=(1+H.elements[10])/H.elements[14],m.multiplyScalar(2/m.dot(M)),H.elements[2]=m.x,H.elements[6]=m.y,H.elements[10]=m.z+1-a,H.elements[14]=m.w,n.visible=!1;let B=D.getRenderTarget(),O=D.xr.enabled,Y=D.shadowMap.autoUpdate;D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(A),D.state.buffers.depth.setMask(!0),D.autoClear===!1&&D.clear(),D.render(b,w),D.xr.enabled=O,D.shadowMap.autoUpdate=Y,D.setRenderTarget(B);let X=S.viewport;X!==void 0&&D.state.viewport(X),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()}}};na.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var k1=`
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
}`,H1=`
uniform sampler2D tDiffuse;
uniform float useMirror;
uniform float time;
uniform vec3 sunLight;
uniform vec3 ambient;
varying vec4 vMirror;
varying vec3 vWorld;
${Yr}
${xc}
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
}`;function Hd(s,t){let n=fe.maxZ-fe.minZ+3e3,i=new Oe(3200,n,128,256),r=new na(i,{textureWidth:512,textureHeight:512,clipBias:.003,multisample:0}),o=r.material.uniforms,a={...mn.clone(Xt.fog),...hn,fogSunColor:hn.fogSunColor,fogSunDir:hn.fogSunDir,fogHeightFalloff:hn.fogHeightFalloff,tDiffuse:o.tDiffuse,textureMatrix:o.textureMatrix,useMirror:{value:1},time:{value:0},sunLight:{value:new Ut},ambient:{value:new Ut}};r.material.dispose(),r.material=new Ae({uniforms:a,vertexShader:k1,fragmentShader:H1,fog:!0,transparent:!0}),r.rotation.x=-Math.PI/2,r.position.set(An+8-3200/2,hu,0),r.userData.noAO=!0,r.camera.layers.set(0),r.renderOrder=1,r.frustumCulled=!1,s.add(r);let c=new Ht,h=new Si(new Uint8Array([0,0,0,255]),1,1);h.needsUpdate=!0;let l=r.onBeforeRender,f=[];r.updateMatrixWorld(),r.geometry.computeBoundingBox();let p=r.geometry.boundingBox.clone().applyMatrix4(r.matrixWorld);p.expandByVector(new U(0,2,0));let u=new os,g=new Ht,x={paused:!1},m=function(...y){let w=y[2];if(!x.paused&&!(w&&Bn.wetness.value<.02&&(g.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),u.setFromProjectionMatrix(g),!u.intersectsBox(p)))){Bn.mirrorTex.value=h,Bn.useMirror.value=0;for(let A of f)A.visible=!1;l.apply(this,y);for(let A of f)A.visible=!0;c.copy(r.matrixWorld).invert(),Bn.mirrorMatrix.value.copy(o.textureMatrix.value).multiply(c),Bn.mirrorTex.value=r.getRenderTarget().texture,Bn.useMirror.value=1}};r.onBeforeRender=m;let d=!0,_=G1(s,t);for(let y of Rn)y.plain&&_.lamps.push(...V1(s,t,y));let M=W1(s);return{ocean:r,pier:_,mirror:x,mirrorHide:f,setReflections(y,w=.5){d=y,a.useMirror.value=y?1:0,r.onBeforeRender=y?m:()=>{},this.resize(w)},resize(y=.5){if(!d)return;let w=t.getDrawingBufferSize(new Zt);r.getRenderTarget().setSize(Math.max(256,Math.round(w.x*y)),Math.max(256,Math.round(w.y*y)))},update(y,w){a.time.value=y,d||(Bn.mirrorTex.value=h,Bn.useMirror.value=0),Bn.worldTime.value=y,a.sunLight.value.copy(w.sun.color).multiplyScalar(w.elevation>-1?w.sun.intensity:0),a.ambient.value.copy(w.hemi.color).multiplyScalar(w.hemi.intensity*.6),_.update(y,w.lampFactor),M.update(w.lampFactor)}}}function Gd(){return On("wood",{color:16777215,roughness:.8},{color:`
      {
        vec2 p = vPaWorld.xz;
        float plank = (abs(vPaNormalW.y) > 0.5 ? p.y : p.x) / 0.3;
        float fw = max(fwidth(plank), 0.002);
        float gap = pa_band(fract(plank), 0.0, 0.07, fw);
        float id = pa_hash12(vec2(floor(plank), 3.0));
        vec3 col = mix(vec3(0.3, 0.22, 0.15), vec3(0.42, 0.33, 0.23), id) * (0.82 + pa_noise(vec2(p.x * 3.0, plank)) * 0.25);
        diffuseColor.rgb = col * (1.0 - gap * 0.55);
      }`})}function G1(s,t){let e=new Be,{x0:n,x1:i,z:r,halfWidth:o,deckY:a}=Ci,c=Gd(),h=n-i,l=new Bt(new Kt(h,.6,o*2),c);l.position.set((n+i)/2,a-.3,r),l.castShadow=l.receiveShadow=!0,e.add(l);let f=Ci.rampStart-n,p=Math.atan2(a-.16,f),u=new Kt(Math.hypot(f,a),.6,o*2),g=new Bt(u,c);g.position.set((Ci.rampStart+n)/2,(a+.16)/2-.3,r),g.rotation.z=-p,g.castShadow=g.receiveShadow=!0,e.add(g);let x=[];for(let W=Ci.rampStart-8;W>=i;W-=9)for(let G of[-o+1,0,o-1])x.push([W,r+G]);let m=new ae(.32,.38,1,8),d=new xe(m,new kt({color:4930349,roughness:.9}),x.length),_=new Ht;x.forEach(([W,G],rt)=>{let Q=(ps(W,r)??a)-.5;_.compose(new U(W,(-6+Q)/2,G),new ge,new U(1,Q- -6,1)),d.setMatrixAt(rt,_)}),d.castShadow=!0,e.add(d),Ci.piles=x.filter(([W])=>W>An-4).map(([W,G])=>({x:W,z:G,r:.45}));let M=new kt({color:15262938,roughness:.5,metalness:.3});for(let W of[-1,1])for(let G of[.55,1.05]){let rt=new Bt(new Kt(h,.08,.08),M);rt.position.set((n+i)/2,a+G,r+W*(o-.1)),e.add(rt)}let y=Math.floor(h/3),w=new xe(new Kt(.1,1.1,.1),M,y*2);for(let W=0;W<y;W++)for(let[G,rt]of[-1,1].entries())_.makeTranslation(n-W*3,a+.55,r+rt*(o-.1)),w.setMatrixAt(W*2+G,_);e.add(w);let A=new kt({color:15327695,roughness:.75}),I=new kt({color:3108730,roughness:.5,metalness:.2});for(let[W,G,rt,Z,Q]of[[i+14,r+4.5,18,7,6],[i+36,r-5,12,6,5]]){let T=new Bt(new Kt(rt,Q,Z),A);T.position.set(W,a+Q/2,G),T.castShadow=T.receiveShadow=!0,e.add(T);let v=new Bt(new Kt(rt+1,.4,Z+1),I);v.position.set(W,a+Q+.2,G),e.add(v)}let D=new kt({color:1780275,roughness:.4,metalness:.6});for(let W of[-1,1]){let G=new Bt(new Kt(.6,8,.6),D);G.position.set(Ci.rampStart-2,4.1,r+W*(o+.4)),G.castShadow=!0,e.add(G)}let b=We(t,1024,160,(W,G,rt)=>{W.fillStyle="#0d1418",W.fillRect(0,0,G,rt),W.textAlign="center",W.textBaseline="middle",W.font='800 96px "Barlow Condensed", Impact, sans-serif',W.shadowColor="#ff8a3d",W.shadowBlur=24,W.fillStyle="#ffb36b",W.fillText("VISTA PAC\xCDFICA PIER",G/2,rt/2+4),W.shadowBlur=0,W.fillStyle="#fff3e0",W.fillText("VISTA PAC\xCDFICA PIER",G/2,rt/2+4)}),S=new kt({color:1118481,map:b,emissive:16777215,emissiveMap:b,emissiveIntensity:1}),N=new Bt(new Kt(.4,2.6,o*2+1.4),D);N.position.set(Ci.rampStart-2,8.6,r),e.add(N);for(let W of[-1,1]){let G=new Bt(new Oe(o*2+1.2,2.4),S);G.position.set(Ci.rampStart-2+W*.21,8.6,r),G.rotation.y=W*Math.PI/2,e.add(G)}let H=new Be,B=19,O=a+B+3.5,Y=i+55,X=r+.5;H.position.set(Y,O,X);let it=new kt({color:14278112,roughness:.35,metalness:.8}),R=new Hi(B,.22,8,96);for(let W of[-1.3,1.3]){let G=new Bt(R,it);G.position.z=W,H.add(G);let rt=new Bt(new Hi(B*.55,.14,6,64),it);rt.position.z=W,H.add(rt)}let ut=24,xt=new ae(.07,.07,B,4);xt.translate(0,B/2,0);for(let W=0;W<ut;W++)for(let G of[-1.3,1.3]){let rt=new Bt(xt,it);rt.rotation.z=W/ut*Math.PI*2,rt.position.z=G,H.add(rt)}let Et=new Bt(new ae(1.1,1.1,3.6,16),it);Et.rotation.x=Math.PI/2,H.add(Et),e.add(H);for(let W of[-3.5,3.5])for(let G of[-1,1]){let rt=Math.hypot(9,O-a),Z=new Bt(new ae(.28,.4,rt,8),it);Z.position.set(Y+G*4.5,(O+a)/2,X+W),Z.rotation.z=G*Math.atan2(9,O-a),Z.castShadow=!0,e.add(Z)}let Lt=16,Vt=new kt({color:16777215,roughness:.4,metalness:.3}),qt=new xe(new Kt(1.8,2,1.8),Vt,Lt),$t=["#e2523a","#f2c14e","#3aa0c8","#f7f2e6"],ot=new Ut;for(let W=0;W<Lt;W++)qt.setColorAt(W,ot.set($t[W%4]));qt.castShadow=!0,e.add(qt);let at=9,wt=ut*at+96,Wt=new sn({color:16777215}),It=new xe(new pn(.16,6,4),Wt,wt),nt=[];for(let W=0;W<ut;W++){let G=W/ut*Math.PI*2;for(let rt=1;rt<=at;rt++){let Z=rt/at*B;nt.push([-Math.sin(G)*Z,Math.cos(G)*Z,1.45,rt/at,W])}}for(let W=0;W<96;W++){let G=W/96*Math.PI*2;nt.push([Math.cos(G)*B,Math.sin(G)*B,1.5,1,W])}nt.forEach(([W,G,rt],Z)=>{_.makeTranslation(W,G,rt),It.setMatrixAt(Z,_)}),H.add(It),It.layers.set(1);let Ft=[];for(let W=n-6;W>i+4;W-=16)for(let G of[-1,1])Ft.push([W,r+G*(o-.4)]);let L=new xe(new ae(.06,.09,4.5,6),D,Ft.length),Nt=new kt({color:16773846,emissive:16765066,emissiveIntensity:0}),Rt=new xe(new pn(.28,10,8),Nt,Ft.length);Ft.forEach(([W,G],rt)=>{_.makeTranslation(W,a+2.25,G),L.setMatrixAt(rt,_),_.makeTranslation(W,a+4.6,G),Rt.setMatrixAt(rt,_)}),e.add(L,Rt),Zi(H),Zi(e,{exclude:[H]}),s.add(e);let Ct=new Ut,q=new nn;return{lamps:Ft.map(([W,G])=>[W,a+4.6,G]),update(W,G){let rt=W*.06;H.rotation.z=rt;for(let Q=0;Q<Lt;Q++){let T=rt+Q/Lt*Math.PI*2;q.position.set(Y+Math.cos(T)*B,O+Math.sin(T)*B-1.4,X),q.updateMatrix(),qt.setMatrixAt(Q,q.matrix)}qt.instanceMatrix.needsUpdate=!0;let Z=.25+G*5.5;for(let Q=0;Q<nt.length;Q++){let[,,,T,v]=nt[Q],C=(W*.08+T*.35+v*.013)%1,F=.55+.45*Math.sin(W*4-T*8+v*.5);Ct.setHSL(C,.85,.55),Ct.multiplyScalar(Z*F),It.setColorAt(Q,Ct)}It.instanceColor.needsUpdate=!0,Nt.emissiveIntensity=G*3,Vd.emissiveIntensity=G*3,S.emissiveIntensity=.3+G*1.8}}}var Vd=new kt({color:16773846,emissive:16765066,emissiveIntensity:0});function V1(s,t,e){let n=new Be,{x0:i,x1:r,z:o,halfWidth:a,deckY:c}=e,h=Gd(),l=i-r,f=new Ht,p=new Bt(new Kt(l,.6,a*2),h);p.position.set((i+r)/2,c-.3,o);let u=e.rampStart-i,g=new Bt(new Kt(Math.hypot(u,c),.6,a*2),h);g.position.set((e.rampStart+i)/2,(c+.16)/2-.3,o),g.rotation.z=-Math.atan2(c-.16,u);let x=new Bt(new Kt(13,.6,9),h);x.position.set(r+9,c-.31,o+a+4.5);for(let O of[p,g,x])O.castShadow=O.receiveShadow=!0,n.add(O);let m=[];for(let O=e.rampStart-8;O>=r;O-=9)for(let Y of[-a+1,0,a-1])m.push([O,o+Y]);let d=new xe(new ae(.32,.38,1,8),new kt({color:4930349,roughness:.9}),m.length);m.forEach(([O,Y],X)=>{let R=(ps(O,o)??c)-.5;f.compose(new U(O,(-6+R)/2,Y),new ge,new U(1,R- -6,1)),d.setMatrixAt(X,f)}),d.castShadow=!0,n.add(d),e.piles=m.filter(([O])=>O>An-4).map(([O,Y])=>({x:O,z:Y,r:.45}));let _=new kt({color:7301728,roughness:.6,metalness:.3});for(let O of[-1,1])for(let Y of[.55,1.05]){let X=new Bt(new Kt(l,.08,.08),_);X.position.set((i+r)/2,c+Y,o+O*(a-.1)),n.add(X)}let M=Math.floor(l/3),y=new xe(new Kt(.1,1.1,.1),_,M*2);for(let O=0;O<M;O++)for(let[Y,X]of[-1,1].entries())f.makeTranslation(i-O*3,c+.55,o+X*(a-.1)),y.setMatrixAt(O*2+Y,f);n.add(y);let w=new kt({color:8368296,roughness:.75}),A=new kt({color:9059116,roughness:.6}),I=new Bt(new Kt(9,4.2,6),w);I.position.set(r+9,c+2.1,o+a+5),I.castShadow=I.receiveShadow=!0;let D=new Bt(new Kt(10.2,.35,7.2),A);D.position.set(r+9,c+4.35,o+a+5),n.add(I,D);let b=We(t,512,128,(O,Y,X)=>{O.fillStyle="#10222a",O.fillRect(0,0,Y,X),O.textAlign="center",O.textBaseline="middle",O.font='800 76px "Barlow Condensed", Impact, sans-serif',O.fillStyle="#ffe9b8",O.fillText("BAIT & TACKLE",Y/2,X/2+4)}),S=new Bt(new Oe(7,1.75),new kt({map:b,emissive:16777215,emissiveMap:b,emissiveIntensity:.5,roughness:.6}));S.position.set(r+9,c+3.4,o+a+1.98),S.rotation.y=Math.PI,n.add(S);let N=[];for(let O=i-6;O>r+4;O-=18)for(let Y of[-1,1])N.push([O,o+Y*(a-.4)]);let H=new xe(new ae(.06,.09,4.5,6),_,N.length),B=new xe(new pn(.28,10,8),Vd,N.length);return N.forEach(([O,Y],X)=>{f.makeTranslation(O,c+2.25,Y),H.setMatrixAt(X,f),f.makeTranslation(O,c+4.6,Y),B.setMatrixAt(X,f)}),n.add(H,B),Zi(n),s.add(n),N.map(([O,Y])=>[O,c+4.6,Y])}function W1(s){let t=new Be,e=new Ht,n=new kt({color:6269385,roughness:.6}),i=new kt({color:15854296,roughness:.6}),r=new kt({color:14175290,roughness:.6});for(let u=fe.minZ+36;u<=fe.maxZ-30;u+=130){if(Rn.some(w=>Math.abs(u-w.z)<40))continue;let g=new Be,x=new Bt(new Kt(3.2,2.4,3.2),n);x.position.y=3.2;let m=new Bt(new wi(2.7,1.1,4),r);m.position.y=4.95,m.rotation.y=Math.PI/4;let d=new Bt(new Kt(4.4,.18,4.4),i);d.position.y=1.95;let _=new Bt(new Kt(.1,.9,2.4),new kt({color:1911347,roughness:.1,metalness:.6}));_.position.set(-1.62,3.5,0),g.add(x,m,d,_);for(let w of[-1.8,1.8])for(let A of[-1.8,1.8]){let I=new Bt(new Kt(.18,2.4,.18),i);I.position.set(w,.8,A),g.add(I)}let M=new Bt(new Kt(4.5,.12,1.4),i);M.position.set(3.6,1,0),M.rotation.z=-.42,g.add(M);let y=-388;g.position.set(y,-.02-(un-y)*.0105,u),g.traverse(w=>{w.isMesh&&(w.castShadow=!0,w.receiveShadow=!0)}),t.add(g)}let o=["#e8553a","#f0c24b","#3b8fc2","#f3efe4","#45a37f"],a=130,c=new xe(new wi(1.4,.55,12,1,!0),new kt({color:16777215,roughness:.8,side:rn}),a),h=new xe(new ae(.03,.03,2.3,4),i,a),l=new xe(new Kt(.9,.02,1.9),new kt({color:16777215,roughness:.9}),a),f=new Ut,p=new ge;for(let u=0;u<a;u++){let g=yt(fe.minZ+30,fe.maxZ-30);Rn.some(d=>Math.abs(g-d.z)<14)&&(g+=30);let x=yt(-398,-366),m=-.02-(un-x)*.0105;p.setFromEuler(new en(yt(-.12,.12),0,yt(-.12,.12))),e.compose(new U(x,m+2.3,g),p,new U(1,1,1)),c.setMatrixAt(u,e),e.compose(new U(x,m+1.15,g),p,new U(1,1,1)),h.setMatrixAt(u,e),c.setColorAt(u,f.set(le(o))),p.setFromAxisAngle(new U(0,1,0),yt(0,Math.PI)),e.compose(new U(x+yt(-1.5,1.5),m+.02,g+yt(-1.5,1.5)),p,new U(1,1,1)),l.setMatrixAt(u,e),l.setColorAt(u,f.set(le(o)))}c.castShadow=h.castShadow=!0,l.receiveShadow=!0,t.add(c,h,l);for(let u of[c,h,l])u.layers.set(1);return Zi(t),s.add(t),{update(){}}}var _u={value:new Ut};function X1(s){return We(s,256,1024,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<150;i++){let r=i/150,o=n*(.04+r*.94),a=e*.47*Math.sin(Math.PI*Math.pow(r,.75))*(.85+gt()*.3),c=70+gt()*50,h=40+gt()*30,l=25+gt()*20;t.strokeStyle=`rgb(${h},${c},${l})`,t.lineWidth=3.2+gt()*2.2;for(let f of[-1,1])t.beginPath(),t.moveTo(e/2,o),t.quadraticCurveTo(e/2+f*a*.5,o-a*.25,e/2+f*a,o-a*.55+gt()*8),t.stroke()}t.strokeStyle="#5b5a34",t.lineWidth=6,t.beginPath(),t.moveTo(e/2,n*.02),t.lineTo(e/2,n),t.stroke()})}function q1(s){return We(s,512,512,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<46;i++){let r=gt()*Math.PI*2,o=Math.sqrt(gt())*e*.36,a=e/2+Math.cos(r)*o,c=n/2+Math.sin(r)*o,h=r+(gt()-.5)*1.2,l=40+gt()*50,f=.55+.45*(o/(e*.36));t.strokeStyle=`rgba(60,48,30,${.8})`,t.lineWidth=2,t.beginPath(),t.moveTo(a,c),t.lineTo(a+Math.cos(h)*l,c+Math.sin(h)*l),t.stroke();for(let p=0;p<16;p++){let u=gt(),g=a+Math.cos(h)*l*u+(gt()-.5)*18,x=c+Math.sin(h)*l*u+(gt()-.5)*18,m=(70+gt()*70)*f,d=(28+gt()*32)*f,_=(18+gt()*26)*f;t.fillStyle=`rgb(${d|0},${m|0},${_|0})`,t.save(),t.translate(g,x),t.rotate(h+(gt()-.5)*2.2),t.beginPath(),t.ellipse(0,0,9+gt()*7,3.5+gt()*2.5,0,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(190,210,140,${.25*f})`,t.lineWidth=1,t.beginPath(),t.moveTo(-8,0),t.lineTo(8,0),t.stroke(),t.restore()}}})}function Y1(s,t,e,n,i){let o=[],a=[],c=[],h=new U(Math.cos(s),0,Math.sin(s)),l=new U(-h.z,0,h.x),f=new U;for(let u=0;u<=7;u++){let g=u/7,x=t-i*g*g;u>0&&(f=f.clone().addScaledVector(h,Math.cos(x)*e/7).add(new U(0,Math.sin(x)*e/7,0)));let m=n*Math.sin(Math.PI*Math.min(1,.15+g*.95))*.5+.05,d=.18*m;for(let[_,M]of[[-1,0],[0,.5],[1,1]]){let y=f.clone().addScaledVector(l,_*m);y.y+=_===0?d:-d*.2,o.push(y.x,y.y,y.z),a.push(M,1-g)}if(u>0){let _=(u-1)*3,M=u*3;c.push(_,M,_+1,_+1,M,M+1,_+1,M+1,_+2,_+2,M+1,M+2)}}let p=new Ue;return p.setAttribute("position",new ne(o,3)),p.setAttribute("uv",new ne(a,2)),p.setIndex(c),p.computeVertexNormals(),p}function Z1(s,t,e){let n=[];for(let i=0;i<s;i++){let r=i%3,o=i/s*Math.PI*2+gt()*.3,a=[.95,.45,.05][r]+gt()*.2,c=[1.3,1.6,1.4][r];n.push(Y1(o,a,t*(r===0?.8:1)*yt(.88,1.1),e,c))}return ze(n)}function $1(s){let t=new ae(.62,1,1,9,12,!0);t.translate(0,.5,0);let e=t.attributes.position;for(let n=0;n<e.count;n++){let i=e.getY(n);e.setX(n,e.getX(n)+s*i*i)}return t.computeVertexNormals(),t}function Wd(s,t,e={}){let n=On(t,{map:s,alphaTest:.42,side:rn,roughness:.72,metalness:0,...e},{uniforms:{worldTime:hn.worldTime,leafSun:_u,skySunDir:hn.skySunDir},vertexPars:"uniform float worldTime;",vertex:"",fragmentPars:"uniform vec3 leafSun; uniform vec3 skySunDir;",color:"diffuseColor.rgb *= 0.8 + 0.4 * pa_noise(vPaWorld.xz * 0.7 + vPaWorld.y);",emissive:`
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
      }`)},n}function K1(){return On("palmtrunk",{color:16777215,roughness:.9},{color:`
      {
        float rings = pa_band(fract(vPaWorld.y * 3.2 + pa_noise(vPaWorld.xz * 3.0) * 0.4), 0.0, 0.18, fwidth(vPaWorld.y * 3.2));
        vec3 bark = mix(vec3(0.33, 0.29, 0.24), vec3(0.45, 0.4, 0.33), pa_noise(vec2(atan(vPaNormalW.z, vPaNormalW.x) * 4.0, vPaWorld.y * 0.8)));
        diffuseColor.rgb = bark * (1.0 - rings * 0.3);
      }`})}function yu({lobes:s,cards:t,spread:e,crownY:n,lobeR:i,trunkH:r,columnar:o=!1}){let a=[],c=[],h=new ae(.2,.34,r+.4,7);h.translate(0,(r+.4)/2,0),c.push(h);let l=[];for(let g=0;g<s;g++){if(o){let d=g/Math.max(1,s-1);l.push([new U((gt()-.5)*.3,n+d*6.4,(gt()-.5)*.3),i*(1.05-d*.55)]);continue}if(g===s-1){l.push([new U(0,n+i*.75,0),i*1.05]);continue}let x=g/(s-1)*Math.PI*2+gt()*.6,m=e*yt(.75,1.1);l.push([new U(Math.cos(x)*m,n+yt(-.6,.5),Math.sin(x)*m),i*yt(.85,1.1)])}let f=new U(0,r*.92,0),p=new U,u=new U;for(let[g,x]of l){if(!o){let m=g.clone().sub(f),d=m.length()*.85,_=new ae(.07,.14,d,5);_.translate(0,d/2,0),_.applyQuaternion(new ge().setFromUnitVectors(new U(0,1,0),m.normalize())),_.translate(f.x,f.y,f.z),c.push(_)}for(let m=0;m<t;m++){let d=new Oe(2.1,2.1);p.set(gt()-.5,gt()-.35,gt()-.5).normalize();let _=Math.cbrt(gt()),M=g.clone().addScaledVector(p,_*x*.85),y=p.clone().add(new U(gt()-.5,gt()-.5,gt()-.5).multiplyScalar(.9)).normalize();d.lookAt(y),d.rotateZ(gt()*6.28),d.translate(M.x,M.y,M.z);let w=d.attributes.normal,A=d.attributes.position,I=new Float32Array(A.count*3);for(let D=0;D<A.count;D++){u.set(A.getX(D),A.getY(D),A.getZ(D));let b=u.clone().sub(g).normalize(),S=u.clone().sub(new U(0,n,0)).normalize();b.multiplyScalar(.7).addScaledVector(S,.3).normalize(),w.setXYZ(D,b.x,b.y,b.z);let N=Re.clamp(.5+_*.4+b.y*.15,.35,1);I[D*3]=I[D*3+1]=I[D*3+2]=N}d.setAttribute("color",new qe(I,3)),a.push(d)}}return{canopy:ze(a),wood:ze(c.map(g=>g.index?g.toNonIndexed():g))}}function Xd(s,t){let e=[],n=X1(t),i=q1(t),r=Wd(n,"frond"),o=Wd(i,"canopy",{vertexColors:!0}),a=K1(),c=new kt({color:6048309,roughness:1}),h=(B,O=6)=>ye.some(Y=>Math.abs(B-Y)<re+O),l=(B,O=6)=>ve.some(Y=>Math.abs(B-Y)<re+O),f=new Zn(32);for(let B of qi){let[O,Y]=Qs(B);f.add({x:O,z:Y})}let p=(B,O)=>f.near(B,O,8,Y=>Math.abs(Y.x-B)<4&&Math.abs(Y.z-O)<6),u=[],g=[],x=[];for(let B=fe.minZ+11;B<=fe.maxZ-11;B+=18)Rn.some(O=>Math.abs(B-O.z)<14)||(u.push([(Qe.to+un)/2+yt(-1.5,1.5),B+yt(-2,2)]),Te(.3)&&g.push([un-yt(6,14),B+yt(-4,4)]));for(let[B,O]of[[-320,Ce+10],[0,Ce+10],[-1280,640],[1280,640]])for(let Y=ke+20;Y<O;Y+=28)if(!l(Y))for(let X of[-1,1])u.push([Y+yt(-1,1),B+X*(re+1.6)]);for(let B=Ee+10;B<Le;B+=32)h(B)||u.push([ke+re+1.6,B+yt(-1,1)]);let m=[-160,0,640];for(let B of m)for(let O=Ee-26;O<Le+40;O+=34)if(!h(O,7))for(let Y of[-1,1]){let X=B+Y*(re+2.7),it=O+(Y>0?17:0);p(X,it)||h(it,7)||u.push([X+yt(-.3,.3),it+yt(-1,1)])}for(let[B,O,Y]of Cd()){let X=si/2-10,it=Y.district==="laurel"&&B>560&&B<1040&&O>160&&O<480,R=it?44:26;for(let ut=0;ut<R;ut++){let xt=B+yt(-X,X),Et=O+yt(-X,X);Math.abs(xt-B)<9&&Math.abs(Et-O)<9||(Te(it?.15:.4)?g.push([xt,Et]):x.push([xt,Et,yt(.8,1.3),0]))}}for(let B of ve)if(!(B===ke||m.includes(B)&&B!==0)){for(let O of ds)for(let Y of[-1,1])if(!(B===Ce&&Y>0)&&!(Xi[mi(tr(B+Y*40),O)][3]<.5))for(let X=O-50;X<=O+50;X+=25){let it=B+Y*(re+1.8);p(it,X)||x.push([it,X,yt(.6,.85),0])}}for(let B=0;B<2600;B++){let O=gt(),Y=O<.5?yt(Ce+60,Ce+900):yt(-300,Ce+500),X=O<.5?yt(Ee-700,Le+700):O<.75?yt(Ee-640,Ee-95):yt(Le+95,Le+640),it=gi(Y,X);it<2||x.push([Y,X,yt(.7,1.6),it])}let d=new Ht,_=new ge,M=new U,y=new U,w=new U(0,1,0),A=B=>[B[0],B[1]],I=B=>{B.castShadow=!0,B.receiveShadow=!0};function D(B,{heightRange:O,thickness:Y,bend:X,crown:it,skirt:R}){let ut=$1(X),xt=Z1(it.count,it.length,it.width),Et=B.map(([Vt,qt])=>{let $t=yt(...O),ot=new Ht().compose(M.set(Vt,-.1,qt),_.setFromAxisAngle(w,gt()*Math.PI*2),y.set(Y,$t,Y)),at=new U(X,1,0).applyMatrix4(ot),wt=yt(.85,1.15),Wt=new ge().setFromAxisAngle(w,gt()*Math.PI*2);return e.push({x:Vt,z:qt,r:.45}),{x:Vt,z:qt,base:ot,top:at,cs:wt,crownQ:Wt}}),Lt=Vt=>[Vt.x,Vt.z];tn(s,Et,ut,a,{at:Lt,far:800,setup:I,set:(Vt,qt,$t)=>Vt.setMatrixAt(qt,$t.base)}),tn(s,Et,xt,r,{at:Lt,far:1100,setup:I,set:(Vt,qt,$t)=>Vt.setMatrixAt(qt,d.compose($t.top,$t.crownQ,y.set($t.cs,$t.cs,$t.cs)))}),R&&tn(s,Et,new ae(.9,.55,1,8),c,{at:Lt,far:600,setup:Vt=>{Vt.castShadow=!0},set:(Vt,qt,$t)=>Vt.setMatrixAt(qt,d.compose(M.copy($t.top).add(y.set(0,-1.6,0)),$t.crownQ,y.set(1,2.6,1)))})}D(u,{heightRange:[17,26],thickness:.36,bend:4,crown:{count:15,length:4.2,width:1.5},skirt:!0}),D(g,{heightRange:[6,10],thickness:.75,bend:.8,crown:{count:24,length:6.2,width:2.2},skirt:!1});let b={broad:yu({lobes:6,cards:22,spread:2.1,crownY:5.6,lobeR:1.85,trunkH:4.2}),cypress:yu({lobes:5,cards:14,spread:.25,crownY:2.4,lobeR:1.05,trunkH:1.6,columnar:!0}),far:yu({lobes:3,cards:14,spread:1.7,crownY:5.4,lobeR:2.1,trunkH:4.2})},S={broad:[],cypress:[],far:[]};for(let B of x)B[3]>0?S[Te(.35)?"cypress":"far"].push(B):S.broad.push(B);let N=new kt({color:4865328,roughness:.95}),H=new Ut;for(let[B,O]of Object.entries(S)){let{canopy:Y,wood:X}=b[B],it=B!=="broad",R=O.map(([Lt,Vt,qt,$t])=>{let ot=B==="cypress"?yt(1.1,1.6):yt(.85,1.2),at=new Ht().compose(M.set(Lt,$t-.1,Vt),_.setFromAxisAngle(w,gt()*Math.PI*2),y.set(qt,qt*ot,qt));return B==="broad"&&Te(.22)?H.setHSL(yt(.72,.78),yt(.35,.5),yt(.62,.72)):B==="cypress"?H.setHSL(yt(.26,.32),yt(.3,.45),yt(.32,.42)):H.setHSL(yt(.2,.3),yt(.35,.6),yt(.45,.62)),$t===0&&e.push({x:Lt,z:Vt,r:.5}),{x:Lt,z:Vt,matrix:at,tint:H.clone()}}),Et={at:Lt=>[Lt.x,Lt.z],far:it?2400:750,chunk:it?640:320,setup:Lt=>{Lt.castShadow=B!=="far",Lt.receiveShadow=!0,it&&Lt.layers.set(1)}};tn(s,R,Y,o,{...Et,set:(Lt,Vt,qt)=>{Lt.setMatrixAt(Vt,qt.matrix),Lt.setColorAt(Vt,qt.tint)}}),tn(s,R,X,N,{...Et,far:it?900:600,set:(Lt,Vt,qt)=>Lt.setMatrixAt(Vt,qt.matrix)})}return{trunkColliders:e,counts:{tall:u.length,stout:g.length,trees:x.length}}}var bc=28;function vs(s,t){let e=(t%bc+bc)%bc,n=s===0?e:(e+14)%bc;return n<10?2:n<13?1:0}function J1(s){return We(s,128,128,(t,e,n)=>{let i=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(.7,"rgba(255,255,255,0.15)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,e,n)})}var j1=`
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
}`,Q1=`
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
}`;function ia(s,t=0){return new Ae({uniforms:{color:{value:new Ut(s)},intensity:{value:t}},vertexShader:j1,fragmentShader:Q1,transparent:!0,depthWrite:!1,blending:Nn,side:rn})}function qd(s,t,e=[],n=null){let i=new Ht,r=new ge,o=new U,a=new U(1,1,1),c=new U(1,1,1),h=new U(0,1,0),l=new kt({color:4146760,roughness:.45,metalness:.7}),f=[],p=re+7;for(let q of ve)for(let W=Ee-40;W<=Le+40;W+=38)if(!ye.some(G=>Math.abs(W-G)<p))for(let G of[-1,1])q===ke&&G<0||f.push([q+G*(re+.9),W+(G>0?19:0),-G,0]);for(let q of ye)for(let W=ke+20;W<=Ce;W+=38)if(!ve.some(G=>Math.abs(W-G)<p))for(let G of[-1,1])f.push([W+(G>0?19:0),q+G*(re+.9),0,-G]);let u=[];for(let q=fe.minZ+16;q<=fe.maxZ-16;q+=24)Rn.every(W=>Math.abs(q-W.z)>12)&&u.push([(Qe.from+Qe.to)/2,q]);let g=new ae(.09,.14,9,8);g.translate(0,4.5,0);let x=new Kt(.1,.1,2.6);x.translate(0,8.85,1.3);let m=ze([g,x]),d=new Kt(.42,.16,.9),_=new kt({color:7829367,emissive:16766624,emissiveIntensity:0,roughness:.3}),M=q=>[q[0],q[1]],y=([,,q,W])=>r.setFromAxisAngle(h,Math.atan2(q,W)),w=q=>{q.castShadow=!0},A=tn(s,f,m,l,{at:M,far:650,setup:w,set:(q,W,G)=>q.setMatrixAt(W,i.compose(o.set(G[0],ie,G[1]),y(G),c))}),I=tn(s,f,d,_,{at:M,far:1700,set:(q,W,G)=>q.setMatrixAt(W,i.compose(o.set(G[0]+G[2]*2.5,ie+8.78,G[1]+G[3]*2.5),y(G),c))}),D=new kt({color:16774888,emissive:16764810,emissiveIntensity:0,roughness:.2}),b=tn(s,u,new ae(.07,.1,4.2,8),l,{at:M,far:500,set:(q,W,[G,rt])=>q.setMatrixAt(W,i.makeTranslation(G,ie+2.1,rt))}),S=tn(s,u,new pn(.3,12,8),D,{at:M,far:1400,set:(q,W,[G,rt])=>q.setMatrixAt(W,i.makeTranslation(G,ie+4.4,rt))}),N=[...f.map(([q,W,G,rt])=>[q+G*2.6,W+rt*2.6,13,1,0]),...u.map(([q,W])=>[q,W,8,.8,0]),...e.map(([q,W,G])=>[q,G,7,.7,W-4.6])],H=new sn({map:J1(t),color:16757866,transparent:!0,depthWrite:!1,blending:Nn,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2,fog:!0}),B=new Oe(1,1);B.rotateX(-Math.PI/2);let O=q=>W=>{W.renderOrder=q,W.userData.noAO=!0,W.layers.set(1)},Y=tn(s,N,B,H,{at:M,far:800,setup:O(2),set:(q,W,[G,rt,Z,Q,T])=>q.setMatrixAt(W,i.compose(o.set(G,T+.04+(Q<1?ie:0),rt),r.identity(),a.set(Z,1,Z)))}),X=new ae(.25,3.6,8.6,18,1,!0);X.translate(0,-4.3,0);let it=ia(16757866),R=tn(s,f,X,it,{at:M,far:380,setup:O(3),set:(q,W,[G,rt,Z,Q])=>q.setMatrixAt(W,i.makeTranslation(G+Z*2.5,ie+8.7,rt+Q*2.5))}),ut=[],xt=[];for(let q of ve)for(let W of ye){let G=[[q+6,W-16,0,1,0],[q-6,W+16,0,-1,0],[q+16,W+6,-1,0,1],[q-16,W-6,1,0,1]];for(let[rt,Z,Q,T,v]of G){if(v===0&&(T>0&&W===Le||T<0&&W===Ee)||v===1&&(Q<0&&q===ke||Q>0&&q===Ce))continue;ut.push([rt,Z,Q,T,v]);let C=v===0?q+14.2*Math.sign(rt-q):rt,F=v===0?Z:W+14.2*Math.sign(Z-W);xt.push([C,F,rt,Z])}}let Et=new ae(.16,.2,7,8);Et.translate(0,3.5,0),tn(s,xt,Et,l,{at:M,far:650,setup:w,set:(q,W,[G,rt])=>q.setMatrixAt(W,i.makeTranslation(G,ie,rt))}),tn(s,xt,new Kt(1,.16,.16),l,{at:M,far:650,setup:w,set:(q,W,[G,rt,Z,Q])=>{r.setFromAxisAngle(h,Math.atan2(-(Q-rt),Z-G)),q.setMatrixAt(W,i.compose(o.set((G+Z)/2,6.8,(rt+Q)/2),r,a.set(Math.hypot(Z-G,Q-rt)+1,1,1)))}});let Lt=new kt({color:1909284,roughness:.5,metalness:.4});tn(s,ut,new Kt(.5,1.4,.36),Lt,{at:M,far:650,set:(q,W,[G,rt,Z,Q])=>q.setMatrixAt(W,i.compose(o.set(G,6.1,rt),r.setFromAxisAngle(h,Math.atan2(Z,Q)),c))});let Vt=new ae(.14,.14,.06,12);Vt.rotateX(Math.PI/2);let qt=new Ae({uniforms:{uState:{value:new Zt}},vertexShader:`
      attribute vec2 aSig;
      uniform vec2 uState;
      varying vec3 vCol;
      void main() {
        float st = aSig.x < 0.5 ? uState.x : uState.y;
        vec3 c = aSig.y < 0.5 ? vec3(7.0, 0.35, 0.2) : aSig.y < 1.5 ? vec3(7.0, 3.6, 0.3) : vec3(0.3, 6.0, 2.2);
        vCol = abs(st - aSig.y) < 0.5 ? c : vec3(0.05);
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:`varying vec3 vCol;
void main() { gl_FragColor = vec4(vCol, 1.0); }`}),$t=ut.flatMap(([q,W,G,rt,Z])=>[0,1,2].map(Q=>[q,W,G,rt,Z,Q]));tn(s,$t,Vt,qt,{at:M,far:900,cloneGeometry:!0,set:(q,W,[G,rt,Z,Q,,T])=>q.setMatrixAt(W,i.compose(o.set(G+Z*.2,6.55-T*.43,rt+Q*.2),r.setFromAxisAngle(h,Math.atan2(Z,Q)),c)),setup:(q,W)=>q.geometry.setAttribute("aSig",new Ge(new Float32Array(W.flatMap(G=>[G[4],G[5]])),2))}),n&&(f.forEach(([q,W],G)=>n.add([A.refs[G],I.refs[G]],[Y.refs[G],R.refs[G]],{type:"lamp",x:q,z:W,y:ie,r:.18,mass:.22,solid:6,kind:"topple",sparks:!0})),u.forEach(([q,W],G)=>n.add([b.refs[G],S.refs[G]],[Y.refs[f.length+G]],{type:"lamp",x:q,z:W,y:ie,r:.14,mass:.12,solid:4,kind:"topple",sparks:!0})));let ot=xt.map(([q,W])=>({x:q,z:W,r:.3})),at=[["SURF FIZZ","TASTE THE SWELL","#ff6b4a","#14303d"],["HORIZON AIR","FLY THE COAST","#ffd36b","#1a2a52"],["VISTA BANK","YOUR MONEY. YOUR VIEW.","#9fe3d3","#10302c"],["NEON NIGHTS","THE PIER \xB7 FRIDAYS","#ff63c3","#1d0f2e"],["CALDERA GT","BUILT FOR THE COAST ROAD","#ff7a3d","#141a20"],["SOLSTICE","SUNSCREEN \xB7 SPF 50","#ffe2a8","#c2542e"],["RADIO KZRO","88.1 \xB7 COAST FUNK ALL NIGHT","#8cf5c0","#12202b"],["LAUREL PARK","JAZZ UNDER THE JACARANDAS","#d6b8ff","#22183a"]],wt=[[-215,-432,-Math.PI/2],[100,212,Math.PI],[-136,30,-Math.PI/2],[270,362,Math.PI]];for(let[q,W,G]of Pi())G.kind!=="parking"||q<=320&&Math.abs(W)<=480||wt.push([q+46,W+52,er(q,W)<.5?0:Math.PI/2]);for(let q=Ee+200,W=0;q<Le;q+=450,W++)wt.push([Ce+25,q+W%2*50,-Math.PI/2]);for(let q=ke+380;q<Ce;q+=520)wt.push([q,Ee-30,0],[q+130,Le+30,Math.PI]);let Wt=[],It=new Be,nt=at.map(([q,W,G,rt])=>{let Z=We(t,1024,384,(T,v,C)=>{let F=T.createLinearGradient(0,0,v,C);F.addColorStop(0,rt),F.addColorStop(1,"#000000"),T.fillStyle=F,T.fillRect(0,0,v,C),T.fillStyle=G,T.beginPath(),T.arc(v*.82,C*.5,C*.36,0,Math.PI*2),T.fill(),T.fillStyle="#fff6e6",T.font='800 120px "Barlow Condensed", Impact, sans-serif',T.fillText(q,48,170),T.fillStyle=G,T.font='600 46px "Barlow", Arial, sans-serif',T.fillText(W,52,250),T.fillStyle="#ffffff40",T.fillRect(52,290,300,6)}),Q=new kt({map:Z,emissive:16777215,emissiveMap:Z,emissiveIntensity:0,roughness:.55});return Wt.push(Q),Q});wt.forEach(([q,W,G],rt)=>{let Z=new Be,Q=new Bt(new Oe(14,5.25),nt[rt%nt.length]);Q.position.y=14;let T=new Bt(new Kt(14.4,5.6,.3),l);T.position.set(0,14,-.2);let v=new Bt(new ae(.35,.45,11.5,10),l);v.position.y=5.75,Z.add(Q,T,v),Z.position.set(q,ie,W),Z.rotation.y=G,ot.push({x:q,z:W,r:.5}),Z.traverse(C=>{C.isMesh&&(C.castShadow=!0)}),It.add(Z)}),Zi(It),s.add(It);let Ft="VISTA PAC\xCDFICA",L=new kt({color:16052714,roughness:.7,side:rn,alphaTest:.5}),Nt=new Map,Rt=new Be,Ct=-520;for(let q of Ft){if(q===" "){Ct+=38;continue}Nt.has(q)||Nt.set(q,We(t,128,160,(Z,Q,T)=>{Z.clearRect(0,0,Q,T),Z.fillStyle="#fff",Z.font='800 168px "Barlow Condensed", Impact, sans-serif',Z.textAlign="center",Z.textBaseline="alphabetic",Z.fillText(q,Q/2,T-8)}));let W=L.clone();W.map=Nt.get(q);let G=new Bt(new Oe(26,33),W),rt=Ce+330;G.position.set(rt,Math.min(gi(rt,Ct-10),gi(rt,Ct+10))+15,Ct),G.rotation.y=-Math.PI/2,G.castShadow=!0,Rt.add(G),Ct+=30}return s.add(Rt),{lamps:f,circles:ot,update(q,W){_.emissiveIntensity=W*4,D.emissiveIntensity=W*2.6,H.opacity=W*.7,it.uniforms.intensity.value=W*.09;for(let G of Wt)G.emissiveIntensity=.05+W*1.1;qt.uniforms.uState.value.set(vs(0,q),vs(1,q))}}}var Sc=class{constructor(t,e){this.renderer=t,this.scene=e,this.size=0,this.target=null,this.camera=null,this.face=0,this.ready=!1,this.materials=[]}attach(t){this.materials=t,this.apply()}setSize(t){if(t!==this.size){if(this.size=t,this.target?.dispose(),this.target=null,this.camera=null,this.ready=!1,this.face=0,t>0){this.target=new Dr(t,{type:on,generateMipmaps:!1}),this.camera=new Ir(.6,1400,this.target),this.camera.coordinateSystem=this.renderer.coordinateSystem,this.camera.updateCoordinateSystem();for(let e of this.camera.children)e.layers.set(0)}this.apply()}}apply(){let t=this.ready&&this.target?this.target.texture:null;for(let e of this.materials)e.envMap!==t&&(e.envMap=t,e.needsUpdate=!0)}update(t,e,n,i){if(!this.target)return;let r=this.renderer;this.face===0&&this.camera.position.copy(t),this.camera.updateMatrixWorld();let o=this.camera.children[this.face],a=r.getRenderTarget(),c=r.getActiveCubeFace(),h=r.getActiveMipmapLevel(),l=r.xr.enabled;r.xr.enabled=!1;for(let f of e)f.visible=!1;i(()=>{r.setRenderTarget(this.target,this.face),r.render(this.scene,o)});for(let f of e)f.visible=!0;r.setRenderTarget(a,c,h),r.xr.enabled=l,this.face=(this.face+1)%6,this.face===0&&(this.target.texture.needsPMREMUpdate=!0,this.ready||(this.ready=!0,this.apply()));for(let f of this.materials)f.envMapIntensity=n*(f.userData.envBoost||1)}};var Me=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e],a=(t-n)/(r-n);return a=a*a*(3-2*a),i+(o-i)*a}return s[s.length-1][1]},ty={coupe:{length:4.62,wheelR:.355,wheelW:.27,track:.83,wheels:[.185,.79],body:{top:[[0,.6],[.05,.7],[.18,.8],[.33,.9],[.78,.96],[.92,.95],[1,.82]],bottom:[[0,.33],[.06,.25],[.94,.26],[1,.38]],width:[[0,.76],[.07,.93],[.3,.97],[.74,1],[.93,.96],[1,.84]],exp:3.4,taper:.1},cabin:{from:.31,to:.9,top:[[0,.88],[.3,1.27],[.52,1.29],[.72,1.14],[1,.93]],width:[[0,.8],[.35,.79],[.75,.76],[1,.66]],taper:.3,exp:2.6,roof:[.33,.64]},spoiler:!0,exhaust:[-.42,.42],leather:"#5a3a26",shirt:"#2b3038"},muscle:{length:4.92,wheelR:.37,wheelW:.3,track:.86,wheels:[.17,.8],body:{top:[[0,.72],[.04,.84],[.12,.89],[.4,.93],[.86,.96],[.96,.95],[1,.84]],bottom:[[0,.32],[.05,.26],[.95,.27],[1,.36]],width:[[0,.88],[.05,.96],[.5,.98],[.95,.97],[1,.9]],exp:5.2,taper:.05},cabin:{from:.43,to:.87,top:[[0,.91],[.3,1.31],[.55,1.32],[.86,1.08],[1,.96]],width:[[0,.8],[.5,.8],[1,.73]],taper:.22,exp:3.2,roof:[.3,.6]},scoop:!0,roundLamps:!0,grille:3,plainTail:!0,leather:"#17181b",shirt:"#5b2a22",ducktail:!0,exhaust:[-.56,-.44,.44,.56]},super:{length:4.56,wheelR:.36,wheelW:.32,track:.88,wheels:[.2,.8],body:{top:[[0,.42],[.06,.55],[.2,.66],[.35,.73],[.7,.86],[.9,.88],[1,.8]],bottom:[[0,.16],[.05,.13],[.95,.15],[1,.26]],width:[[0,.8],[.08,.95],[.3,.97],[.7,1.03],[.9,1],[1,.9]],exp:3.6,taper:.14},cabin:{from:.27,to:.72,top:[[0,.62],[.35,1.13],[.55,1.14],[.8,1],[1,.86]],width:[[0,.78],[.4,.74],[1,.62]],taper:.32,exp:2.4,roof:[.38,.62]},wing:!0,leather:"#7a1c16",shirt:"#1d1f24",intakes:!0,exhaust:[-.13,.13]},sedan:{length:4.85,wheelR:.34,wheelW:.24,track:.81,wheels:[.2,.77],body:{top:[[0,.66],[.06,.76],[.25,.86],[.32,.92],[.8,.98],[.94,.96],[1,.86]],bottom:[[0,.36],[.07,.3],[.93,.3],[1,.4]],width:[[0,.78],[.07,.92],[.5,.95],[.93,.93],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.82,top:[[0,.92],[.27,1.43],[.68,1.43],[.88,1.2],[1,.97]],width:[[0,.8],[.4,.82],[1,.76]],taper:.24,exp:2.8,roof:[.28,.72]},grille:3,plainTail:!0},suv:{length:4.75,wheelR:.39,wheelW:.27,track:.85,wheels:[.18,.79],body:{top:[[0,.82],[.06,.97],[.26,1.06],[.33,1.08],[.95,1.1],[1,1.02]],bottom:[[0,.44],[.07,.36],[.93,.37],[1,.46]],width:[[0,.82],[.07,.95],[.5,.98],[.95,.96],[1,.9]],exp:4.5,taper:.06},cabin:{from:.28,to:.98,top:[[0,1.05],[.2,1.72],[.85,1.74],[.97,1.62],[1,1.1]],width:[[0,.86],[.5,.88],[1,.84]],taper:.15,exp:4,roof:[.2,.96]},rails:!0,grille:4,plainTail:!0,cPillar:.8},hatch:{length:4.05,wheelR:.32,wheelW:.22,track:.78,wheels:[.19,.8],body:{top:[[0,.66],[.07,.78],[.28,.88],[.34,.92],[.95,.98],[1,.9]],bottom:[[0,.36],[.08,.3],[.94,.31],[1,.42]],width:[[0,.76],[.08,.89],[.5,.92],[.94,.9],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.97,top:[[0,.92],[.3,1.46],[.82,1.45],[.96,1.32],[1,.98]],width:[[0,.79],[.5,.8],[1,.76]],taper:.2,exp:3.2,roof:[.3,.92]},plainTail:!0,cPillar:.82},pickup:{length:5.4,wheelR:.41,wheelW:.28,track:.88,wheels:[.17,.75],body:{top:[[0,.92],[.05,1.06],[.24,1.14],[.3,1.16],[1,1.16]],bottom:[[0,.5],[.06,.42],[.95,.44],[1,.52]],width:[[0,.86],[.06,.98],[.95,1],[1,.98]],exp:5,taper:.04},cabin:{from:.29,to:.58,top:[[0,1.12],[.3,1.86],[.92,1.88],[1,1.16]],width:[[0,.9],[1,.9]],taper:.12,exp:4.5,roof:[.28,.94]},bed:!0,grille:4,plainTail:!0}};function wc(s,t,e,n,i,r,o,a,c=null){let h=(t+e)/2,l=(e-t)/2,f=2/n;for(let p=0;p<r;p++){let u=c?c[0]+(c[1]-c[0])*(p/(r-1)):p/r*Math.PI*2,g=Math.cos(u),x=Math.sin(u),m=s*Math.sign(g)*Math.pow(Math.abs(g),f),d=h+l*Math.sign(x)*Math.pow(Math.abs(x),f);m*=1-i*Math.max(0,x),o.push(m,d,a)}}function Mu(s,t,{closed:e=!0,caps:n=!0}={}){let i=[],r=[];for(let l of s)i.push(...l);let o=s.length,a=t,c=e?a:a-1;for(let l=0;l<o-1;l++)for(let f=0;f<c;f++){let p=(f+1)%a,u=l*a+f,g=l*a+p,x=(l+1)*a+f,m=(l+1)*a+p;r.push(u,g,x,g,m,x)}if(n&&e)for(let[l,f]of[[0,!0],[o-1,!1]]){let p=i.length/3,u=0,g=0,x=0;for(let d=0;d<a;d++){let _=(l*a+d)*3;u+=i[_],g+=i[_+1],x+=i[_+2]}for(let d=0;d<a;d++){let _=(l*a+d)*3;i.push(i[_],i[_+1],i[_+2])}i.push(u/a,g/a,x/a);let m=p+a;for(let d=0;d<a;d++){let _=(d+1)%a;f?r.push(m,p+_,p+d):r.push(m,p+d,p+_)}}let h=new Ue;return h.setAttribute("position",new ne(i,3)),h.setIndex(r),h.computeVertexNormals(),h.setAttribute("uv",new ne(new Float32Array(i.length/3*2),2)),h}function ey(s,t,e){let n=[];for(let c of s)n.push(...c);let i=[],r=[];for(let c=0;c<s.length-1;c++)for(let h=0;h<t;h++){let l=(h+1)%t,f=c*t+h,p=c*t+l,u=(c+1)*t+h,g=(c+1)*t+l,x=[f,p,u,p,g,u];i.push(...x);let m=e(c,(h<t/2,h));(r[m]||(r[m]=[])).push(...x)}let o=new Ue;o.setAttribute("position",new ne(n,3)),o.setIndex(i),o.computeVertexNormals();let a=[];for(let c=0;c<3;c++){let h=new Ue;h.setAttribute("position",o.attributes.position),h.setAttribute("normal",o.attributes.normal),h.setIndex(r[c]||[]);let l=h.toNonIndexed();l.setAttribute("uv",new ne(new Float32Array(l.attributes.position.count*2),2)),a.push(l)}return a}function _e(s,t,e,n,i,r,o=0,a=0,c=0){let h=new Kt(s,t,e);return(o||a||c)&&h.applyMatrix4(new Ht().makeRotationFromEuler(new en(o,a,c))),h.translate(n,i,r),h}function bu(s,t,e,n,i,r,o,a="y"){let c=new ae(s,t,e,n);return a==="x"&&c.rotateZ(Math.PI/2),a==="z"&&c.rotateX(Math.PI/2),c.translate(i,r,o),c}function ny(s,t,e){let n=new U().subVectors(t,s),i=n.length(),r=new ae(e,e,i,6);return r.translate(0,i/2,0),r.applyQuaternion(new ge().setFromUnitVectors(new U(0,1,0),n.normalize())),r.translate(s.x,s.y,s.z),r}var Su=new Map,iy=["coupe","muscle","super"];function Tc(s){if(Su.has(s))return Su.get(s);let t=ty[s],e=t.length,n=-e/2,i=Z=>n+Z*e,r=t.wheels.map(i),o=t.wheelR+.07,a=iy.includes(s),c=a?40:26,h=a?64:40,l=Z=>{let Q=Me(t.body.width,Z);for(let T of r)Q*=1+.03*Math.exp(-(((i(Z)-T)/.5)**2));return Q},f=(Z,Q)=>{let T=Me(t.body.bottom,Z),v=Me(t.body.top,Z),C=(T+v)/2,F=(v-T)/2,k=2/t.body.exp,z=Math.sign(Q-C)*Math.min(1,Math.abs(Q-C)/F)**(1/k);return l(Z)*Math.sqrt(Math.max(0,1-z*z))**k*(1-t.body.taper*Math.max(0,z))},p=Z=>(Z-n)/e,u=[];for(let Z=0;Z<=h;Z++){let Q=Z/h,T=i(Q),v=Me(t.body.bottom,Q);for(let k of r){let z=T-k;Math.abs(z)<o&&(v=Math.max(v,t.wheelR+Math.sqrt(o*o-z*z)*.98))}let C=Me(t.body.top,Q),F=[];wc(l(Q),Math.min(v,C-.08),C,t.body.exp,t.body.taper,c,F,T),u.push(F)}let g=[Mu(u,c)],x=t.cabin,m=[],d=Z=>Me(x.top,Z),_=a?36:20;for(let Z=0;Z<=_;Z++){let Q=Z/_,T=x.from+Q*(x.to-x.from),v=i(T),C=Me(t.body.top,T)-.06,F=Math.max(d(Q),C+.02),k=Me(x.width,Q),z=[];wc(k,C,F,x.exp,x.taper,c,z,v),m.push(z)}let M=s==="sedan"||s==="suv"||s==="hatch",y=(x.roof[0]+x.roof[1])/2,w=Math.round(c*.1),A=c/2-w,I=(Z,Q)=>Z>=w-Q&&Z<w||Z>=A&&Z<A+Q,D=ey(m,c,(Z,Q)=>{let T=(Z+.5)/_,v=T>=x.roof[0]&&T<=x.roof[1];return Q>=w&&Q<A?v?1:0:T<x.roof[0]?I(Q,1)?1:0:T>x.roof[1]?I(Q,a?2:1)?1:0:I(Q,1)?1:Math.abs(T-y)<.62/_?2:t.cPillar&&Math.abs(T-t.cPillar)<.62/_?1:0}),b=[D[0]];g.push(D[1]);let S=(Z,Q)=>{let T=Z.index?Z.toNonIndexed():Z,v=new Ut(Q),C=T.attributes.position.count,F=new Float32Array(C*3);for(let k=0;k<C;k++)F[k*3]=v.r,F[k*3+1]=v.g,F[k*3+2]=v.b;return T.setAttribute("color",new qe(F,3)),T.attributes.uv||T.setAttribute("uv",new ne(new Float32Array(C*2),2)),T},N=[];if(a){let Z=[],Q=[];for(let zt=0;zt<=_;zt++){let V=zt/_,_t=x.from+V*(x.to-x.from),Pt=i(_t),pt=Me(t.body.top,_t),vt=Me(x.width,V),dt=[];if(wc(vt*.97,pt-.03,Math.min(pt+.035,Math.max(d(V)-.01,pt-.01)),4,0,16,dt,Pt),Z.push(dt),V>=x.roof[0]-.03&&V<=x.roof[1]+.03){let Yt=[];wc(vt*.985,pt-.06,Math.max(d(V),pt)-.004,x.exp,x.taper,12,Yt,Pt,[.24*Math.PI,.76*Math.PI]),Q.push(Yt)}}N.push(S(Mu(Z,16),"#0c0d0f")),Q.length>1&&N.push(S(Mu(Q,12,{closed:!1,caps:!1}),"#17181b"));let T=t.leather||"#1b1c20",v=x.roof[0]+.1,C=x.from+v*(x.to-x.from),F=i(C),k=Me(t.body.top,C),z=d(v),K=Math.min(z-.19,k+.26),J=Me(x.width,v)*.47;for(let zt of[-1,1])N.push(S(_e(.46,K-k+.12,.13,zt*J,(K+k)/2-.06,F+.2,-.12),T)),N.push(S(_e(.24,.17,.09,zt*J,K+.06,F+.2),T));let st=x.from+.2*(x.to-x.from),Mt=i(st),$=Me(t.body.top,st);N.push(S(_e(Me(x.width,.2)*1.7,.07,.24,0,$+.005,Mt+.04),"#101114")),N.push(S(_e(.3,.05,.12,-J,$+.05,Mt+.1,.25),"#0b0b0d"));let lt=new Hi(.17,.016,8,24);lt.rotateX(-.42),lt.translate(-J,$+.07,Mt+.32),N.push(S(lt,"#050506")),N.push(S(_e(.3,.025,.03,-J,$+.07,Mt+.32,-.42),"#0a0a0b")),N.push(S(_e(.42,.3,.2,-J,K-.3,F+.08,-.1),t.shirt||"#23272e"));let Tt=new ae(.05,.055,.1,8);Tt.translate(-J,K-.12,F+.07),N.push(S(Tt,"#b98562"));let ft=new pn(.108,14,10);ft.scale(.92,1.08,1),ft.translate(-J,K,F+.06),N.push(S(ft,"#c08a66"));let St=new pn(.114,14,8,0,Math.PI*2,0,Math.PI*.52);St.scale(.94,1.08,1.02),St.translate(-J,K+.012,F+.075),N.push(S(St,"#1a1410"));for(let zt of[-1,1]){let V=new U(-J+zt*.2,K-.22,F+.04),_t=new U(-J+zt*.15,$+.1,Mt+.33);N.push(S(ny(V,_t,.045),t.shirt||"#23272e"))}}let H=[],B=[],O=[],Y=[],X=[],it=(Z,Q,T)=>{let v=x.from+Z*(x.to-x.from),C=Me(t.body.top,v)-.02,F=d(Z),k=Me(x.width,Z)*(1-x.taper*(T?.92:0))*.97;return new U(Q*k,T?F-.02:C,i(v))};H.push(D[2]);for(let Z of[-1,1]){let Q=it(.1,Z,!1);g.push(_e(.16,.1,.12,Q.x+Z*.14,Q.y+.06,Q.z)),H.push(_e(.1,.025,.04,Q.x+Z*.05,Q.y+.03,Q.z)),B.push(_e(.13,.075,.008,Q.x+Z*.14,Q.y+.06,Q.z+.062))}{let Z=x.from+.035*(x.to-x.from),Q=Me(t.body.top,Z)+.012,T=i(Z);for(let[v,C,F]of[[-.2,.52,.1],[.3,.46,.1]])X.push(_e(C,.012,.022,v,Q,T,0,F,0))}let R=(x.roof[0]+x.roof[1])/2,ut=i(x.from+R*(x.to-x.from)),xt=r[0]+o+.14,Et=M?[xt,ut,r[1]-o-.04]:[xt,Math.min(ut+.42,r[1]-o-.05),99],Lt=Me(t.body.bottom,.5)+.1,Vt=Z=>{let Q=p(Z-.16),T=Me(t.body.top,Q)-.12;for(let v of[-1,1])B.push(_e(.022,.028,.15,v*(f(Q,T)+.006),T,Z-.16))};Vt(Et[1]),M&&Vt(Et[2]);let qt=i(x.from)-.07,$t=l(.15)*.78,ot=!M&&!t.bed&&!t.wing||s==="sedan"?i(x.to)+.07:99,at={a:new Ne(Et[0],Et[1],Et[2],Lt),b:new Ne(qt,ot,$t,t.intakes?1:0)},wt=Z=>Me(t.body.width,Z),Wt=(Me(t.body.bottom,.02)+Me(t.body.top,.02))/2,It=Me(t.body.top,.02),nt=[],Ft=[],L=(Z,Q,T,v,C,F=a?18:10)=>bu(Z,Z,Q,F,T,v,C,"z");for(let Z of[-1,1]){let Q=Z*wt(.02)*.62,T=Wt+(It-Wt)*.45,v=Z*.32;if(X.push(_e(.46,.115,.06,Q,T,n+.045,0,v,0)),t.roundLamps)for(let C of[-.105,.105])B.push(L(.062,.03,Q+C,T,n+.022+Math.abs(C-Z*.1)*.12)),O.push(L(.05,.034,Q+C,T,n+.018+Math.abs(C-Z*.1)*.12));else{O.push(_e(.38,.05,.05,Q,T-.004,n+.03,0,v,0));for(let C of[-.1,.07])O.push(L(.036,.03,Q+C,T-.004,n+.012+(Z*C>0?.035:0)));O.push(_e(.34,.014,.03,Q,T+.058,n+.04,0,v,0))}Ft.push(_e(.07,.035,.05,Z*wt(.03)*.93,T-.01,n+.12,0,Z*.9,0))}let Nt=Me(t.body.bottom,.02)+.17;if(X.push(_e(wt(.03)*1.05,.18,.12,0,Nt,n+.06)),t.grille)for(let Z=0;Z<t.grille;Z++)B.push(_e(wt(.03)*.98,.012,.02,0,Nt-.06+Z*.12/Math.max(t.grille-1,1),n-.002));H.push(_e(wt(.03)*1.7,.04,.22,0,Me(t.body.bottom,.02)+.02,n+.1));let Rt=Me(t.body.top,.97);t.plainTail||Y.push(_e(wt(.98)*1.72,.05,.06,0,Rt-.08,-n-.02));for(let Z of[-1,1]){let Q=Z*wt(.98)*.68;Y.push(_e(.36,t.plainTail?.15:.11,.06,Q,Rt-.12,-n-.03)),nt.push(_e(.09,.05,.06,Q-Z*.24,Rt-(t.plainTail?.16:.13),-n-.026)),Ft.push(_e(.08,.05,.06,Q+Z*.2,Rt-(t.plainTail?.16:.13),-n-.034))}{let Z=it(Math.min(x.roof[1]+.02,.97),0,!0);Y.push(_e(.3,.018,.03,0,Z.y-.02,Z.z+.03))}X.push(_e(wt(.98)*1.5,.16,.1,0,Me(t.body.bottom,.98)+.06,-n-.05));let Ct=Me(t.body.bottom,.98)+.03,q=(t.exhaust||[-.42,.42]).map(Z=>new U(Z,Ct,-n+.06));for(let Z of q)B.push(bu(.05,.05,.14,12,Z.x,Z.y,-n+.02,"z")),X.push(bu(.04,.04,.02,10,Z.x,Z.y,-n+.085,"z"));(M||s==="coupe")&&X.push(_e(.035,.05,.16,0,d(x.roof[1]-.06)+.03,i(x.from+(x.roof[1]-.06)*(x.to-x.from)),-.25));for(let Z of[-1,1]){let Q=r[1]-r[0]-o*2;H.push(_e(.06,.08,Q,Z*wt(.5)*.99,Me(t.body.bottom,.5)+.03,(r[0]+r[1])/2))}if(t.spoiler&&g.push(_e(wt(.96)*1.5,.022,.12,0,Me(t.body.top,.96)+.012,i(.965),-.2)),t.ducktail&&g.push(_e(wt(.95)*1.78,.05,.2,0,Me(t.body.top,.95)+.03,i(.955),.28)),t.scoop){let Z=Me(t.body.top,.22);g.push(_e(.56,.09,.7,0,Z+.035,i(.23),.04)),X.push(_e(.46,.05,.03,0,Z+.05,i(.23)-.35))}if(t.wing){let Z=Me(t.body.top,.93),Q=i(.95);for(let T of[-1,1])H.push(_e(.04,.3,.16,T*.42,Z+.14,Q,.25));H.push(_e(wt(.95)*1.86,.035,.34,0,Z+.3,Q+.02,-.12));for(let T of[-1,1])H.push(_e(.03,.14,.38,T*wt(.95)*.93,Z+.29,Q+.02))}if(t.intakes){for(let Z of[-1,1]){let T=(Me(t.body.bottom,.66)+Me(t.body.top,.66))/2;X.push(_e(.05,.2,.52,Z*wt(.66)*.985,T,i(.66),0,Z*.14,0))}X.push(_e(wt(.03)*1.8,.03,.3,0,Me(t.body.bottom,.02)+.01,n+.12))}if(t.rails)for(let Z of[-1,1])H.push(_e(.05,.05,e*.5,Z*.62,Me(x.top,.6)+.04,i(.62)));if(t.bed){let Z=i(x.to+.01),Q=-n-.05,T=Me(t.body.top,.8);X.push(_e(wt(.8)*1.86,.04,Q-Z,0,T-.02,(Z+Q)/2));for(let v of[-1,1])g.push(_e(.08,.4,Q-Z,v*wt(.8)*.96,T+.2,(Z+Q)/2));g.push(_e(wt(.8)*1.9,.4,.08,0,T+.2,Q))}let W=[_e(.52,.12,.01,0,Me(t.body.bottom,.99)+.24,-n+.005),_e(.52,.12,.01,0,Me(t.body.bottom,.01)+.28,n-.005)],G=Z=>ze(Z.map(Q=>Q.index?Q.toNonIndexed():Q).map(Q=>(Q.attributes.uv||Q.setAttribute("uv",new ne(new Float32Array(Q.attributes.position.count*2),2)),Q))),rt={type:t,parts:{paint:G(g),glass:G(b),trim:G(H),dark:G(X),chrome:G(B),head:G(O),tail:G(Y),plate:G(W),rev:G(nt),amber:G(Ft),...a?{interior:ze(N)}:{}},seams:at,wheels:[],wheel:sy(t.wheelR,t.wheelW,!a),exhausts:q};for(let Z of r)for(let Q of[-1,1])rt.wheels.push({x:Q*t.track,y:t.wheelR,z:Z,side:Q,front:Z<0});return Su.set(s,rt),rt}function sy(s,t,e=!1){let n=s*.69,i=e?[[n,-t/2+.01],[s*.95,-t/2+.01],[s,-t/2+.06],[s,t/2-.06],[s*.95,t/2-.01],[n,t/2-.01]]:[[n,-t/2+.01],[s*.86,-t/2-.004],[s*.97,-t/2+.025],[s,-t/2+.06],[s,t/2-.06],[s*.97,t/2-.025],[s*.86,t/2+.004],[n,t/2-.01]],r=new Ro(i.map(([g,x])=>new Zt(g,x)),e?14:30);r.rotateZ(Math.PI/2);let o=[],a=new ae(n,n,t-.03,e?10:24,1,!0);if(a.rotateZ(Math.PI/2),o.push(a),!e){let g=new Hi(n-.008,.014,6,32);g.rotateY(Math.PI/2),g.translate(t/2-.03,0,0),o.push(g)}let c=t/2-.05,h=e?5:10;for(let g=0;g<h;g++){let x=g/h*Math.PI*2+(e?0:g%2*.12),m=new Kt(.035,n-.05,.045);m.translate(0,(n-.05)/2+.05,0),m.rotateX(x),m.translate(c,0,0),o.push(m)}let l=new ae(.07,.08,.05,e?6:12);if(l.rotateZ(Math.PI/2),l.translate(c+.01,0,0),o.push(l),!e){for(let x=0;x<5;x++){let m=x/5*Math.PI*2,d=new ae(.011,.011,.02,6);d.rotateZ(Math.PI/2),d.translate(c+.04,Math.cos(m)*.048,Math.sin(m)*.048),o.push(d)}let g=new ae(.028,.032,.02,12);g.rotateZ(Math.PI/2),g.translate(c+.042,0,0),o.push(g)}let f=ze(o.map(g=>g.index?g.toNonIndexed():g)),p=new ae(n*.82,n*.82,.03,e?10:24);p.rotateZ(Math.PI/2),p.translate(c-.06,0,0);let u=new Kt(.07,.16,.12);return u.translate(c-.03,n*.55,.07),{tire:r,rim:f,disc:p,caliper:u}}function ry(s,t="PCFC 7X"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.fillStyle="#e9e6da",n.fillRect(0,0,256,64),n.fillStyle="#1e3b78",n.font="700 14px Arial",n.textAlign="center",n.fillText("VISTA PAC\xCDFICA",128,16),n.fillStyle="#7a1f1f",n.font='700 34px "Barlow Condensed", Impact, monospace',n.fillText(t,128,52);let i=new Ns(e);return i.colorSpace=Mn,i}function sa(s,t={}){let{seams:e=null,twoTone:n=null,...i}=t,r=new Os({color:s,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.1,...i}),o={uSeamA:{value:e?e.a:new Ne(99,99,99,0)},uSeamB:{value:e?e.b:new Ne(99,99,0,0)}};return r.userData.seamUniforms=o,r.onBeforeCompile=a=>{Object.assign(a.uniforms,o),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCarPos;
varying vec3 vCarN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCarPos = position;
vCarN = normal;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vCarPos; varying vec3 vCarN;
        uniform vec4 uSeamA; uniform vec4 uSeamB;
        float paSeam; float paFlakeFade;
        float carHash(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
        float carLine(float d, float aa) { return 1.0 - smoothstep(0.0035, 0.0035 + aa, abs(d)); }`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          ${n?`diffuseColor.rgb = mix(vec3(${n[0]}), vec3(${n[1]}), smoothstep(${n[2]}, ${n[2]} + 0.04, vCarPos.y));`:""}
          // Derivatives first, before any branching.
          float aaZ = max(fwidth(vCarPos.z), 1e-4), aaX = max(fwidth(vCarPos.x), 1e-4);
          paFlakeFade = 1.0 - smoothstep(0.0015, 0.006, aaZ + aaX + fwidth(vCarPos.y));
          vec3 nO = normalize(vCarN);
          float side = smoothstep(0.45, 0.7, abs(nO.x)) * step(uSeamA.w, vCarPos.y);
          float seam = side * max(carLine(vCarPos.z - uSeamA.x, aaZ), max(carLine(vCarPos.z - uSeamA.y, aaZ), carLine(vCarPos.z - uSeamA.z, aaZ)));
          float top = smoothstep(0.45, 0.7, nO.y);
          float inHood = step(abs(vCarPos.x), uSeamB.z + 0.004);
          seam = max(seam, top * inHood * max(carLine(vCarPos.z - uSeamB.x, aaZ), carLine(vCarPos.z - uSeamB.y, aaZ)));
          seam = max(seam, top * step(vCarPos.z, uSeamB.x) * carLine(abs(vCarPos.x) - uSeamB.z, aaX));
          seam = max(seam, top * step(uSeamB.y, vCarPos.z) * step(vCarPos.z, 90.0) * carLine(abs(vCarPos.x) - uSeamB.z, aaX));
          // Lines thinner than a pixel fade out instead of shimmering.
          paSeam = seam * (1.0 - smoothstep(0.012, 0.04, max(aaZ, aaX)));
          diffuseColor.rgb *= 1.0 - paSeam * 0.8;
          // Road film: duller and dustier low on the body.
          float grime = (1.0 - smoothstep(0.18, 0.55, vCarPos.y)) * (0.55 + 0.45 * carHash(floor(vCarPos * 40.0)));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.72 + vec3(0.035, 0.032, 0.028), grime * 0.4);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.85, paSeam);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          // Metallic flake: each flake tilts the base coat's normal a little; the clearcoat above stays smooth.
          vec3 fp = floor(vCarPos * 1400.0);
          vec3 fl = vec3(carHash(fp), carHash(fp + 7.3), carHash(fp + 13.7)) - 0.5;
          normal = normalize(normal + fl * 0.16 * paFlakeFade * metalnessFactor);
        }`).replace("#include <opaque_fragment>",`outgoingLight *= 1.0 - paSeam * 0.85;
        #include <opaque_fragment>`)},r.customProgramCacheKey=()=>"car-paint"+(n?"-two":""),r}function Yd(s){let t=new kt({color:1316118,roughness:.92,metalness:0}),[e,n]=s?[.4,.6]:[3/7,4/7];return t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vTyreUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTyreUv = uv;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vTyreUv;
float paTread;`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float t = (vTyreUv.y - ${e.toFixed(4)}) / ${(n-e).toFixed(4)};
          float aa = max(fwidth(t), 1e-4), aaU = max(fwidth(vTyreUv.x * 44.0), 1e-4);
          float onTread = step(0.0, t) * step(t, 1.0);
          float groove = 0.0;
          for (int i = 1; i <= 3; i++) groove = max(groove, 1.0 - smoothstep(0.045, 0.045 + aa, abs(t - float(i) * 0.25)));
          float sipe = (1.0 - smoothstep(0.1, 0.1 + aaU, abs(fract(vTyreUv.x * 44.0 + t * 0.6) - 0.5))) * step(0.1, abs(t - 0.5));
          paTread = onTread * max(groove, sipe * 0.7) * (1.0 - smoothstep(0.15, 0.5, aa));
          diffuseColor.rgb *= 1.0 - paTread * 0.75;
          // The sidewall is a little greyer than the tread, with a raised ring.
          float wall = 1.0 - onTread;
          float ring = wall * (1.0 - smoothstep(0.012, 0.02, abs(abs(t - 0.5) - 1.6)));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.105, 0.105, 0.11), wall * 0.6) * (1.0 + ring * 0.6);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 1.0, paTread);`)},t.customProgramCacheKey=()=>"car-tyre"+(s?"-lite":""),t}var Ec=null;function jr(s){if(Ec)return Ec;let t=ry(s);return Ec={glass:new Os({color:791061,metalness:.1,roughness:.04,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4}),glassClear:new Os({color:725782,metalness:0,roughness:.03,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.8,transparent:!0,opacity:.8}),interior:new kt({vertexColors:!0,roughness:.82,metalness:0,side:rn}),trim:new kt({color:1316890,roughness:.45,metalness:.4}),dark:new kt({color:461066,roughness:.6,metalness:.2}),chrome:new kt({color:14212319,roughness:.12,metalness:1}),plate:new kt({map:t,roughness:.5}),tire:Yd(!1),tireLite:Yd(!0),rim:new kt({color:12172994,roughness:.22,metalness:1}),disc:new kt({color:6053472,roughness:.4,metalness:.9}),caliper:new kt({color:12728866,roughness:.4,metalness:.3})},Ec}var Zd=Re.damp,Ke=Re.clamp,sr={coupe:{name:"CALDERA GT",model:"coupe",blurb:"Grand tourer \xB7 450 hp V8, rear drive, balanced",stats:{speed:.8,accel:.72,grip:.76},spec:"450 HP \xB7 1,580 KG \xB7 305 KM/H",mass:1580,front:.52,cgH:.47,drive:"rwd",torque:[[900,360],[2500,480],[4500,520],[6200,500],[6900,468],[7400,405]],idle:900,redline:7400,gears:[3.31,2.13,1.55,1.19,.97,.79],final:3.7,eff:.88,shift:.2,cdA:.7,clA:.3,aeroFront:.45,mu:1.1,rollFront:.57,brakeBias:.63,brakeG:1.3,steerLock:.6,roll:.0065,rollMax:.09,pitch:.0028,nitro:.45,engine:"v8"},muscle:{name:"VANTA SS",model:"muscle",blurb:"Muscle car \xB7 465 hp big-block, huge torque, loose tail",stats:{speed:.74,accel:.74,grip:.5},spec:"465 HP \xB7 1,760 KG \xB7 290 KM/H",mass:1760,front:.54,cgH:.53,drive:"rwd",torque:[[750,500],[2e3,610],[3800,650],[5e3,622],[5800,570],[6400,495]],idle:750,redline:6400,gears:[2.66,1.78,1.3,1,.74],final:3.73,eff:.85,shift:.28,cdA:.92,clA:.05,aeroFront:.5,mu:1.04,rollFront:.52,brakeBias:.66,brakeG:1.15,steerLock:.58,roll:.0095,rollMax:.12,pitch:.0042,nitro:.5,engine:"bigblock"},super:{name:"VENTUS R",model:"super",blurb:"Mid-engine supercar \xB7 640 hp V10, track grip",stats:{speed:.97,accel:.95,grip:.96},spec:"640 HP \xB7 1,420 KG \xB7 345 KM/H",mass:1420,front:.42,cgH:.41,drive:"rwd",torque:[[1100,370],[3e3,500],[5e3,580],[6800,600],[8200,555],[8800,495]],idle:1100,redline:8800,gears:[3.13,2.19,1.63,1.29,1.03,.84,.69],final:3.9,eff:.9,shift:.09,cdA:.78,clA:1.15,aeroFront:.4,mu:1.22,rollFront:.6,brakeBias:.58,brakeG:1.5,steerLock:.56,roll:.0035,rollMax:.05,pitch:.0018,nitro:.4,engine:"v10"}},oa=["coupe","muscle","super"],ra={easy:{label:"EASY HANDLING",abs:!0,tc:1,esc:!0,grip:1.16,steerMargin:.06,counter:.85,align:!0,wet:.35},sport:{label:"SPORT HANDLING",abs:!0,tc:.55,esc:!1,grip:1,steerMargin:.1,counter:.55,align:!1,wet:1},sim:{label:"SIMULATION HANDLING",abs:!1,tc:0,esc:!1,grip:1,steerMargin:.15,counter:.25,align:!1,wet:1}},ys=9.81,oy=1.2,wu={road:[1,.013],curb:[.9,.02],grass:[.55,.09],sand:[.45,.24]};function ay(s,t){let e=s.torque;if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++)if(t<=e[n][0])return e[n-1][1]+(e[n][1]-e[n-1][1])*(t-e[n-1][0])/(e[n][0]-e[n-1][0]);return e[e.length-1][1]}function $d(s){let i=9.5*s;return Math.sin(1.45*Math.atan(i-.25*(i-Math.atan(i))))}function ly(s,t,e){let n=Math.sin(s*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function cy(s){let t=s.attributes.position.array,e=s.attributes.normal.array,n=[[[],[]],[[],[]]];for(let i=0;i<t.length;i+=9){let r=t[i]+t[i+3]+t[i+6]<0?0:1;for(let o=0;o<9;o++)n[r][0].push(t[i+o]),n[r][1].push(e[i+o])}return n.map(([i,r])=>{let o=new Ue;return o.setAttribute("position",new ne(i,3)),o.setAttribute("normal",new ne(r,3)),o})}var Ac=class{constructor(t,e,n="coupe"){this.mode="easy",this.aids=ra.easy,this.mats=jr(e),this.paint=sa("#df6339"),this.group=new Be,this.body=new Be,this.group.add(this.body),this.lightMats={head:[],tail:[],amber:[]};for(let r=0;r<2;r++)this.lightMats.head.push(new kt({color:16777215,emissive:16774364,emissiveIntensity:2,roughness:.2})),this.lightMats.tail.push(new kt({color:4196358,emissive:16720914,emissiveIntensity:1.5,roughness:.3})),this.lightMats.amber.push(new kt({color:7027208,emissive:16747028,emissiveIntensity:0,roughness:.3}));this.revMat=new kt({color:12105906,emissive:16777215,emissiveIntensity:0,roughness:.25}),this.signal={side:0,hold:0,hazard:0,clock:0},this.spots=[];for(let r of[-1,1]){let o=new Uo(16773592,0,70,.42,.55,1.4);this.group.add(o,o.target),this.spots.push(o)}let i=new ae(.12,3.2,16,16,1,!0);i.translate(0,-8,0),i.rotateX(-Math.PI/2+.06),this.beamMat=ia(16773328),this.beams=[];for(let r=0;r<2;r++){let o=new xe(i,this.beamMat,1);o.userData.noAO=!0,o.layers.set(1),o.frustumCulled=!1,this.group.add(o),this.beams.push(o)}t.add(this.group),this.setModel(n),this.reset(0,0,0)}setModel(t){sr[t]||(t="coupe"),this.key=t,this.def=sr[t];for(let c of[...this.body.children])this.body.remove(c),c.geometry.dispose();for(let c of this.wheels||[])this.group.remove(c.pivot);let e=Tc(this.def.model);this.dims=e.type;{let c=this.def,h=(e.type.wheels[1]-e.type.wheels[0])*e.type.length;this.chassis={L:h,a:h*(1-c.front),b:h*c.front,track:e.type.track*2,R:e.type.wheelR,Iz:c.mass*h*(1-c.front)*h*c.front*1.05,Fz0:c.mass*ys/4,peakTorque:Math.max(...c.torque.map(l=>l[1]))}}this.exhausts=e.exhausts.map(c=>c.clone());let n=this.mats,i={paint:this.paint,glass:n.glassClear,trim:n.trim,dark:n.dark,chrome:n.chrome,plate:n.plate,rev:this.revMat,interior:n.interior};this.paint.userData.seamUniforms.uSeamA.value=e.seams.a,this.paint.userData.seamUniforms.uSeamB.value=e.seams.b,this.deformables=[];let r=c=>{let h={geo:c,basePos:Float32Array.from(c.attributes.position.array),baseNormal:Float32Array.from(c.attributes.normal.array),weight:new Float32Array(c.attributes.position.count)};return this.deformables.push(h),h};for(let[c,h]of Object.entries(e.parts)){if(c==="head"||c==="tail"||c==="amber"){cy(h).forEach((p,u)=>{let g=new Bt(p,this.lightMats[c][u]);g.userData.own=!0,this.body.add(g),r(p)});continue}let l=new Bt(h.clone(),i[c]);l.userData.own=!0,l.castShadow=c!=="interior",l.receiveShadow=!0,c==="glass"&&(l.renderOrder=4),c==="interior"&&l.layers.set(1),this.body.add(l);let f=r(l.geometry);c==="paint"&&(this.shell=f.geo,this.basePos=f.basePos)}this.wheels=e.wheels.map(c=>{let h=new Be;h.position.set(c.x,c.y,c.z);let l=new Be;c.side<0&&(l.rotation.y=Math.PI),h.add(l);let f=new Be;l.add(f);for(let[p,u]of[["tire",n.tire],["rim",n.rim],["disc",n.disc]]){let g=new Bt(e.wheel[p],u);g.castShadow=!0,f.add(g)}return l.add(new Bt(e.wheel.caliper,n.caliper)),this.group.add(h),{...c,pivot:h,spin:f,mount:l,compress:0}});let o=-this.dims.length/2,a=this.key==="super"?.55:.72;this.spots.forEach((c,h)=>{let l=h?1:-1;c.position.set(l*.62,a,o+.15),c.target.position.set(l*1.6,-.6,o-20)}),this.beams.forEach((c,h)=>{c.setMatrixAt(0,new Ht().makeTranslation((h?1:-1)*.62,a,o)),c.instanceMatrix.needsUpdate=!0}),this.repair()}get assist(){return this.mode==="easy"}set assist(t){this.setHandling(t?"easy":"sport")}setHandling(t){this.mode=ra[t]?t:"easy",this.aids=ra[this.mode]}setColor(t){this.paint.color.set(t)}reset(t,e,n){this.repair(),this.x=t,this.z=e,this.y=this.groundAt(t,e,0),this.heading=n,this.vx=0,this.vz=0,this.yawRate=0,this.steer=0,this.wheelAngle=0,this.ax=0,this.ay=0,this.lock=0,this.escActive=!1,this.handbrakeTimer=0,this.shiftHold=0,this.pedal=0,this.gear=1,this.rpm=this.def.idle,this.shiftTimer=0,this.nitro=100,this.boosting=!1,this.throttle=0,this.brake=0,this.handbrake=!1,this.slip=0,this.wheelspin=0,this.impact=0,this.contact=null,this.scrape=null,this.pendingHit=null,this.dentCooldown=0,this.pitch=0,this.roll=0,this.pitchVel=0,this.rollVel=0,this.heave=0,this.heaveVel=0,this.wheelAngle=0,this.surface="road",this.prevLong=0,this.distance=0,this.sync()}get speed(){return this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading)}get kmh(){return Math.abs(this.speed)*3.6}groundAt(t,e,n){let i=ps(t,e),r=Td(t);if(i!==null&&(n>i-1.2||t>js(t,e).x0))return i;let o=Qo(t,e);return o==="curb"||o==="grass"?r+ie:r}update(t,e,n){let i=this.def,r=this.chassis,o=this.aids,a=this.x,c=this.z;this.surface=Qo(this.x,this.z);let h=ps(this.x,this.z)!==null&&this.y>1,l=h?wu.curb:wu[this.surface]||wu.road,f=this.surface==="sand"&&!h?1:this.surface==="grass"?.5:0,p=this.surface==="road"?(n.wetness||0)*.22*o.wet:0,u=i.mu*l[0]*o.grip*(1-p);this.throttle=e.throttle,this.brake=e.brake,this.handbrake=e.handbrake;let g=-Math.sin(this.heading),x=-Math.cos(this.heading),m=this.vx*g+this.vz*x,d=Math.abs(m);this.gear===-1?m>-.6&&e.throttle>0&&e.brake===0&&(this.gear=1):m<.6&&e.brake>0&&e.throttle===0?this.gear=-1:m<-1.5&&(this.gear=-1);let _=this.gear===-1,M=_?e.brake:e.throttle;this.pedal+=Ke(M-this.pedal,-7*t,(this.pedal<.35?5:2.4)*t),this.pedal<.001&&(this.pedal=0);let y=this.pedal,w=_?e.throttle:e.brake;this.boosting=e.nitro&&e.throttle>0&&this.nitro>1&&m>3&&!_,this.nitro=Ke(this.nitro+(this.boosting?-22:9)*t,0,100);let A=i.gears,I=(_?A[0]*1.05:A[this.gear-1])*i.final,D=d/r.R*(30/Math.PI),b=D*I;if(this.shiftHold-=t,this.shiftTimer>0)this.shiftTimer-=t;else if(!_&&this.shiftHold<=0){let Nt=i.redline*(.5+.47*y),Rt=i.redline*(.2+.14*y),Ct=this.gear>1?D*A[this.gear-2]*i.final:1/0;b>Nt&&this.gear<A.length?(this.gear++,this.shiftTimer=i.shift,this.shiftHold=i.shift+.5,this.onShift?.(1)):this.gear>1&&(b<Rt||y>.9&&Ct<i.redline*.78)&&(this.gear--,this.shiftTimer=i.shift*.7,this.shiftHold=i.shift+.7,this.onShift?.(-1))}let S=i.idle+(i.redline*.44-i.idle)*y,N=b<S,H=Ke(Math.max(b,S),i.idle,i.redline);this.rpm=Zd(this.rpm,this.shiftTimer>0?H*.84:H,N?7:16,t);let B=0;this.shiftTimer<=0&&(y>0&&this.rpm<i.redline-40?B=ay(i,this.rpm)*y*(this.boosting?1+i.nitro:1)*I*i.eff/r.R:y===0&&d>2&&(B=-r.peakTorque*.1*(this.rpm/i.redline)*I/r.R)),_&&(B=-B);let O=w*i.brakeG*i.mass*ys,Y=-Math.cos(this.heading),X=Math.sin(this.heading),it=m,R=this.vx*Y+this.vz*X,ut=Math.hypot(it,R),xt=Math.atan(r.L*u*ys/Math.max(ut*ut,1)),Et=Math.min(i.steerLock,xt+o.steerMargin+.085+.12*o.counter),Lt=it>4?Ke(Math.atan2(R-r.b*this.yawRate,it),-.55,.55)*o.counter:0,Vt=Ke(e.steer*Et+Lt,-i.steerLock,i.steerLock),$t=(Math.abs(Vt)>Math.abs(this.wheelAngle)?1.5:2.6)*(.55+.45*Math.min(1,Math.abs(Vt-this.wheelAngle)/.12))+(it>4?Math.abs(Lt)*3:0);this.wheelAngle+=Ke(Vt-this.wheelAngle,-$t*t,$t*t),this.steer=this.wheelAngle/i.steerLock,this.handbrake?this.handbrakeTimer=.7:this.handbrakeTimer-=t;let ot=t/2,at=0,wt=0,Wt=0;this.escActive=!1;for(let Nt=0;Nt<2;Nt++){let Rt=Math.sin(this.heading),Ct=Math.cos(this.heading),q=-this.vx*Rt-this.vz*Ct,W=-this.vx*Ct+this.vz*Rt,G=this.yawRate,rt=this.wheelAngle,Z=Math.cos(rt),Q=Math.sin(rt),T=.5*oy*q*q,v=T*i.clA,C=i.mass*this.ax*i.cgH/r.L,F=Math.max(i.mass*ys*r.b/r.L+v*i.aeroFront-C,0),k=Math.max(i.mass*ys*r.a/r.L+v*(1-i.aeroFront)+C,0),z=i.mass*this.ay*i.cgH/r.track,K=(Ie,Hn)=>{let Mi=Ke(z*Hn,-Ie/2,Ie/2),P=Ie/2-Mi,tt=Ie/2+Mi;return u*(P*(1-.13*(P/r.Fz0-1))+tt*(1-.13*(tt/r.Fz0-1)))},J=Math.max(K(F,i.rollFront),1),st=Math.max(K(k,1-i.rollFront),1),Mt=W+r.a*G,$=W-r.b*G,lt=q*Z+Mt*Q,Tt=-q*Q+Mt*Z,ft=-Math.atan2(Tt,Math.max(Math.abs(lt),1.5)),St=-Math.atan2($,Math.max(Math.abs(q),1.5)),zt=$d(ft)*J,V=$d(St)*st,_t=q>.05?1:q<-.05?-1:0,Pt=O*i.brakeBias,pt=O*(1-i.brakeBias),vt=0,dt=0,Yt=!1,se=this.handbrake,Pe=(Ie,Hn)=>Ie*Math.sqrt(Math.max(.04,1-Math.min(1,(Hn/Ie)**2*.85)));o.abs?(Pt=Math.min(Pt,Pe(J,zt)*.97),pt=Math.min(pt,Pe(st,V)*.97)):(Yt=Pt>J*1.02,se=se||pt>st*1.02);let jt=B,Cn=Math.max(0,Math.abs(jt)/st-1);if(o.tc){let Ie=st*.95+(Pe(st,V)-st*.95)*o.tc;jt=Ke(jt,-Ie,Ie)}if(vt=-_t*Pt,dt=Ke(jt-_t*pt,-st*.95,st*.95),Yt){let Ie=Math.hypot(lt,Tt);Ie>.3?(vt=-J*.82*lt/Ie,zt=-J*.82*Tt/Ie):(vt=0,zt*=.3)}else zt=Math.sign(zt)*Math.min(Math.abs(zt),J*Math.sqrt(Math.max(0,1-(vt/J)**2)));if(se){let Ie=Math.hypot(q,$);Ie>.3?(dt=-st*.8*q/Ie,V=-st*.8*$/Ie):(dt=0,V*=.3)}else V=Math.sign(V)*Math.min(Math.abs(V),st*Math.sqrt(Math.max(0,1-(dt/st)**2)));let Je=0;if(o.esc&&this.handbrakeTimer<=0&&q>7){let Ie=Math.atan2(W,q),Hn=Ke(q*Math.tan(rt)/(r.L*(1+.0022*q*q)),-u*ys/q,u*ys/q),Mi=G-Hn;(Math.abs(Mi)>.07||Math.abs(Ie)>.09)&&(Je=r.Iz*Ke(-Mi*6.5+Ie*5,-3.2,3.2),q-=Math.min(Math.abs(Mi)+Math.abs(Ie),.6)*2.2*ot,this.escActive=!0)}let Ki=T*i.cdA*Math.sign(q),Kn=i.mass*Math.abs(q)/ot,bs=Math.sign(q)*Math.min(l[1]*i.mass*ys,Kn),cr=vt*Z-zt*Q+dt-Ki-bs,hr=vt*Q+zt*Z+V;Je+=r.a*(vt*Q+zt*Z)-r.b*V;let yi=cr/i.mass,Ji=hr/i.mass,_i=q;q+=(yi+W*G)*ot,W+=(Ji-_i*G)*ot,G+=Je/r.Iz*ot,(w>0||this.handbrake)&&y===0&&_i*q<0&&(q=0),y===0&&w===0&&Math.abs(q)<.06&&Math.abs(W)<.06&&(q=0,W=0);let Ss=1-Re.smoothstep(Math.hypot(q,W),1.2,5);if(Ss>0){let Ie=q*Math.tan(rt)/r.L,Hn=Ss*(1-Math.exp(-ot*28));G+=(Ie-G)*Hn,W+=(r.b*Ie-W)*Hn}_&&(q=Math.max(q,-16));let ws=1-Math.exp(-ot*11);this.ax+=(yi-this.ax)*ws,this.ay+=(Ji-this.ay)*ws,this.yawRate=G,this.heading+=G*ot;let ur=Math.sin(this.heading),fr=Math.cos(this.heading);this.vx=-ur*q-fr*W,this.vz=-fr*q+ur*W,this.x+=this.vx*ot,this.z+=this.vz*ot,at+=Cn,wt+=(Yt||se)&&Math.abs(q)>2?1:0;let Es=Ie=>Re.smoothstep(Math.abs(Ie),.1,.22);Wt+=Math.max(Math.abs($)*Es(St),Math.abs(Tt)*.7*Es(ft))}if(this.wheelspin=Ke(at*.5*(1.2-.6*o.tc),0,1)*(d<45?1:0),this.lock=wt/2,this.slip=Wt/2,o.align&&Math.abs(e.steer)<.05&&Math.abs(this.wheelAngle)<.05&&d>5&&!this.handbrake&&this.surface==="road"){let Nt=Math.PI/2,Rt=this.heading-Math.round(this.heading/Nt)*Nt;if(Math.abs(Rt)<.3){let Ct=Rt*Math.min(1,1.6*t);this.heading-=Ct;let q=Math.cos(-Ct),W=Math.sin(-Ct),G=this.vx*q+this.vz*W,rt=-this.vx*W+this.vz*q;this.vx=G,this.vz=rt}}this.impact=0,this.collide(n,a,c),this.distance+=Math.hypot(this.x-a,this.z-c),this.dentCooldown-=t;let It=this.groundAt(this.x,this.z,this.y);It-this.y>.08&&It-this.y<.3&&(this.heaveVel-=(It-this.y)*9),this.y-It>.08&&this.y-It<.3&&(this.heaveVel+=(this.y-It)*5),this.y=Zd(this.y,It,It>this.y?22:9,t);let nt=this.slopeAt(),Ft=f*Math.min(d/12,1)*.012;this.spring("pitch",Ke(this.ax*i.pitch,-i.rollMax*.75,i.rollMax*.55)+nt+(Math.random()-.5)*Ft,70,9,t),this.spring("roll",Ke(this.ay*i.roll,-i.rollMax,i.rollMax)+(Math.random()-.5)*Ft,60,7,t),this.spring("heave",0,90,10,t),this.sync();let L=this.speed;for(let Nt of this.wheels){let Rt=Nt.front?this.lock&&!this.handbrake?.15:1:this.handbrake||this.lock?.05:1+this.wheelspin*2.5,Ct=Nt.front||this.wheelspin<.05?L:Math.max(Math.abs(L),6*this.wheelspin)*(_?-1:1);Nt.spin.rotation.x-=Ct*Rt*t/r.R*(Nt.side<0?-1:1),Nt.front&&(Nt.pivot.rotation.y=this.wheelAngle)}}slopeAt(){let t=js(this.x,this.z);return t&&this.x>t.x0&&this.y>.2?Math.atan2(t.deckY-ie,t.rampStart-t.x0)*Math.sin(this.heading):0}spring(t,e,n,i,r){let o=t+"Vel",a=(e-this[t])*n-this[o]*i;this[o]+=a*r,this[t]+=this[o]*r}sync(){this.group.position.set(this.x,this.y+this.heave*.4,this.z),this.group.rotation.set(0,this.heading,0),this.body.rotation.set(this.pitch,0,-this.roll),this.body.position.y=this.heave*.3;for(let t of this.wheels){let e=-this.roll*t.side*this.dims.track*.35+this.pitch*t.z*.35;t.pivot.position.y=t.y+Ke(e,-.06,.06)*.5}}collide(t,e,n){let r=-Math.sin(this.heading),o=-Math.cos(this.heading);for(let f=0;f<2;f++)for(let p=0;p<2;p++){let u=p?1.35:-1.35,g=this.x+r*u,x=this.z+o*u;t.boxGrid.near(g,x,1.05,d=>{if(Math.abs(g-d.x)>d.w+1.05||Math.abs(x-d.z)>d.d+1.05)return;let _=Ke(g,d.x-d.w,d.x+d.w),M=Ke(x,d.z-d.d,d.z+d.d),y=g-_,w=x-M,A=Math.hypot(y,w);if(A<1e-4){let I=d.w-Math.abs(g-d.x),D=d.d-Math.abs(x-d.z);I<D?(y=Math.sign(g-d.x),w=0,A=-I):(y=0,w=Math.sign(x-d.z),A=-D)}else y/=A,w/=A;A<1.05&&this.resolve(y,w,1.05-A,.25,g-y*1.05,x-w*1.05)});let m=d=>{let _=g-d.x,M=x-d.z;if(Math.abs(_)>3||Math.abs(M)>3)return;let y=Math.hypot(_,M),w=1.05+d.r;y<w&&y>1e-4&&this.resolve(_/y,M/y,w-y,.2,d.x+_/y*d.r,d.z+M/y*d.r)};t.circleGrid.near(g,x,3,m),this.y<(ps(g,x)??-9)-1&&t.pileGrid.near(g,x,3,m)}let a=js(e,n)||js(this.x,this.z);if(a&&this.y>1.2){let f=a.halfWidth-1.1;Math.abs(this.z-a.z)>f&&this.resolve(0,-Math.sign(this.z-a.z),Math.abs(this.z-a.z)-f,.15),this.x<a.x1+3&&this.resolve(1,0,a.x1+3-this.x,.15)}let c=ps(this.x,this.z),h=js(this.x,this.z);if(h&&this.x>h.x0&&this.y<c-.9&&this.x<-345){let f=Math.sign(this.z-h.z)||1;this.resolve(0,f,h.halfWidth+.2-Math.abs(this.z-h.z),.2)}let l=a&&this.y>1.2?a.x1+3:fe.minX;this.x<l&&this.resolve(1,0,l-this.x,.2),this.x>fe.maxX&&this.resolve(-1,0,this.x-fe.maxX,.3),this.z<fe.minZ&&this.resolve(0,1,fe.minZ-this.z,.3),this.z>fe.maxZ&&this.resolve(0,-1,this.z-fe.maxZ,.3)}resolve(t,e,n,i,r=this.x-t*2,o=this.z-e*2){this.x+=t*n,this.z+=e*n;let a=this.vx*t+this.vz*e;if(a<0){let c=this.vx-a*t,h=this.vz-a*e,l=Math.hypot(c,h);l>6&&(!this.scrape||l>this.scrape.speed)&&(this.scrape={x:r,z:o,speed:l,nx:t,nz:e});let f=this.assist&&l>-a*1.2,p=f?0:i;this.vx-=(1+p)*a*t,this.vz-=(1+p)*a*e;let u=f?.985:.9;if(this.vx*=u,this.vz*=u,f&&l>4){let x=Math.atan2(-c,-h)-this.heading;x=Math.atan2(Math.sin(x),Math.cos(x)),Math.abs(x)<1.2&&(this.heading+=x*.08)}if(this.impact=Math.max(this.impact,-a),(!this.contact||-a>this.contact.speed)&&(this.contact={x:r,z:o,speed:-a,nx:t,nz:e}),this.registerHit(r,o,-a),this.yawRate*=.6,!f){let g=-(1+p)*a,x=((o-this.z)*t-(r-this.x)*e)*g/2.6;this.yawRate+=Ke(x*(this.assist?.15:.45),-2.2,2.2)}}}registerHit(t,e,n){(!this.pendingHit||n>this.pendingHit.speed)&&(this.pendingHit={x:t,z:e,speed:n})}applyDamage(){let t=this.pendingHit;if(this.pendingHit=null,!t||t.speed<3.5||this.dentCooldown>0)return;this.dentCooldown=.18;let e=t.x-this.x,n=t.z-this.z,i=Math.cos(this.heading),r=Math.sin(this.heading),o=e*i-n*r,a=e*r+n*i,c=this.dims.length/2,h=this.dims.track+.1;o=Ke(o,-h,h),a=Ke(a,-c,c);let l=Ke((t.speed-3)/16,.05,1);this.dent(o,.62,a,l)}dent(t,e,n,i){let r=.5+i*.55,o=.035+i*.13,a=this.dims.length/2,c=Math.abs(n)/a>Math.abs(t)/this.dims.track,h=c?-t*.15:-Math.sign(t),l=c?-Math.sign(n):-n*.1,f=Math.hypot(h,l)||1;h/=f,l/=f;let p=new U,u=new U,g=new U;for(let x of this.deformables){let m=x.geo.attributes.position.array,d=x.geo.attributes.normal.array,_=x.basePos,M=x.weight,y=!1;for(let w=0,A=0;w<m.length;w+=3,A++){let I=_[w]-t,D=(_[w+1]-e)*1.3,b=_[w+2]-n,S=(I*I+D*D+b*b)/(r*r);if(S>3)continue;let N=Math.exp(-S*1.8)*(.65+.7*ly(_[w],_[w+1],_[w+2]));m[w]+=h*o*N,m[w+1]-=o*.3*N,m[w+2]+=l*o*N;let H=m[w]-_[w],B=m[w+1]-_[w+1],O=m[w+2]-_[w+2],Y=Math.hypot(H,B,O);if(Y>.26){let X=.26/Y;m[w]=_[w]+H*X,m[w+1]=_[w+1]+B*X,m[w+2]=_[w+2]+O*X}M[A]=Math.min(1,M[A]+N),y=!0}if(y){for(let w=0;w<m.length;w+=9){let A=w/3;if(!(Math.max(M[A],M[A+1],M[A+2])<.02)){p.set(m[w+3]-m[w],m[w+4]-m[w+1],m[w+5]-m[w+2]),u.set(m[w+6]-m[w],m[w+7]-m[w+1],m[w+8]-m[w+2]),g.crossVectors(p,u).normalize();for(let I=0;I<3;I++){let D=w+I*3,b=Math.min(1,M[A+I]*1.6),S=x.baseNormal,N=S[D]*(1-b)+g.x*b,H=S[D+1]*(1-b)+g.y*b,B=S[D+2]*(1-b)+g.z*b,O=Math.hypot(N,H,B)||1;d[D]=N/O,d[D+1]=H/O,d[D+2]=B/O}}}x.geo.attributes.position.needsUpdate=!0,x.geo.attributes.normal.needsUpdate=!0}}if(this.damage=Math.min(1,this.damage+i*.18),i>.3){let x=t<0?0:1;n<-a+.9&&(this.broken.head[x]=!0),n>a-.9&&(this.broken.tail[x]=!0)}}repair(){for(let t of this.deformables||[])t.weight.some(e=>e>0)&&(t.geo.attributes.position.array.set(t.basePos),t.geo.attributes.normal.array.set(t.baseNormal),t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.normal.needsUpdate=!0,t.weight.fill(0));this.damage=0,this.broken={head:[!1,!1],tail:[!1,!1]}}setLights(t,e,n=!1,i=.016){let r=Math.max(t,.15);this.lightMats.head.forEach((h,l)=>{let f=!this.broken.head[l];h.emissiveIntensity=f?1.5+r*9:0,h.color.setScalar(f?1:.12),this.spots[l].intensity=f?t*220:0,this.beams[l].visible=f&&t>.05}),this.lightMats.tail.forEach((h,l)=>{h.emissiveIntensity=this.broken.tail[l]?.05:e?6:1.1+t*1.2}),this.revMat.emissiveIntensity=n?5:0;let o=this.signal;o.clock+=i;let a=Math.abs(this.steer)>.3&&this.kmh>4&&this.kmh<75?Math.sign(this.steer):0;o.hold=a?o.hold+i:Math.max(0,o.hold-i*2),o.hold>.35&&a?o.side=a:o.hold<=0&&(o.side=0),this.impact>9&&(o.hazard=5),o.hazard=Math.max(0,o.hazard-i);let c=o.clock*1.6%1<.5?7:0;this.lightMats.amber[0].emissiveIntensity=o.hazard>0||o.side>0?c:0,this.lightMats.amber[1].emissiveIntensity=o.hazard>0||o.side<0?c:0,this.beamMat.uniforms.intensity.value=t*.06}safeRespawn(){let t=Yi(this.x),e=ms(this.z);if(Math.abs(this.x-t)<Math.abs(this.z-e)){let n=Math.cos(this.heading)>0;this.reset(t+(n?3.4:-3.4),Ke(this.z,Ee+10,Le-10),n?0:Math.PI)}else{let n=Math.sin(this.heading)<0;this.reset(Ke(this.x,ke+10,Ce-10),e+(n?3.4:-3.4),n?-Math.PI/2:Math.PI/2)}}};var Rc=16,Eu=new Ht,Cc=new Ht,Kd=new ge,Tu=new U,aa=new U,Pc=new ge,hy=new U(1,1,1),uy=new Ht().makeScale(0,0,0),Ic=class{constructor(){this.items=[],this.grid=new Map,this.loose=new Set,this.dirty=new Set}add(t,e,n){let i={...n,parts:t.map(o=>{let a=new Ht;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),hide:(e||[]).map(o=>{let a=new Ht;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),pivot0:new U(n.x,n.y,n.z),pos:new U(n.x,n.y,n.z),vel:new U,quat:new ge,spin:new U,state:0,timer:0};i.id=this.items.length,this.items.push(i);let r=this.key(n.x,n.z);return this.grid.has(r)||this.grid.set(r,[]),this.grid.get(r).push(i),i}key(t,e){return`${Math.floor(t/Rc)},${Math.floor(e/Rc)}`}collide(t,e,n){let i=-Math.sin(t.heading),r=-Math.cos(t.heading),o=t.x-i*1.35,a=t.z-r*1.35,c=t.x+i*1.35,h=t.z+r*1.35,l=Math.hypot(t.vx,t.vz),f=Math.floor(t.x/Rc),p=Math.floor(t.z/Rc);for(let u=-1;u<=1;u++)for(let g=-1;g<=1;g++){let x=this.grid.get(`${f+u},${p+g}`);if(x)for(let m of x){if(m.state!==0)continue;let d=c-o,_=h-a,M=Re.clamp(((m.x-o)*d+(m.z-a)*_)/(d*d+_*_),0,1),y=o+d*M,w=a+_*M,A=m.x-y,I=m.z-w,D=Math.hypot(A,I),b=1.05+m.r;if(D>=b||t.y>m.y+3)continue;D>1e-4?(A/=D,I/=D):(A=i,I=r);let S=t.vx*A+t.vz*I;if(S<m.solid){S>0&&(t.vx-=S*A*1.2,t.vz-=S*I*1.2),t.x-=A*(b-D),t.z-=I*(b-D);continue}this.knock(m,t,A,I,S,l),n?.({item:m,x:m.x,z:m.z,speed:S,nx:A,nz:I})}}}knock(t,e,n,i,r,o){t.state=1,t.timer=0,this.loose.add(t);let a=1-t.mass*Math.min(1,6/Math.max(o,6));if(e.vx*=a,e.vz*=a,e.registerHit?.(t.x,t.z,r*t.mass*3),t.kind==="topple")aa.set(i,0,-n).normalize(),t.axis=aa.clone(),t.angle=0,t.angVel=.6+r*.08;else{let c=2.5+gt()*2.5+r*.12,h=.5+gt()*.25;t.vel.set(e.vx*h+n*r*.25,c,e.vz*h+i*r*.25),t.spin.set((gt()-.5)*2,(gt()-.5)*2,(gt()-.5)*2).normalize().multiplyScalar(5+r*.35),t.pos.copy(t.pivot0)}for(let c of t.hide)c.mesh.setMatrixAt(c.index,uy),c.mesh.instanceMatrix.needsUpdate=!0}groundY(t,e){return Qo(t,e)==="road"?0:ie}update(t,e){for(let n of this.loose){if(n.timer+=t,n.state===1){if(n.kind==="topple")n.angVel+=Math.sin(Math.max(n.angle,.05))*6*t+.4*t,n.angle+=n.angVel*t,n.angle>=Math.PI/2-.04&&(n.angle=Math.PI/2-.04,n.angVel*=-.18,Math.abs(n.angVel)<.08&&(n.state=2)),n.quat.setFromAxisAngle(n.axis,n.angle);else{n.vel.y-=9.8*t,n.pos.addScaledVector(n.vel,t);let i=n.spin.length();i>.001&&(Pc.setFromAxisAngle(aa.copy(n.spin).divideScalar(i),i*t),n.quat.premultiply(Pc));let r=this.groundY(n.pos.x,n.pos.z)+n.lieH;n.pos.y<r&&(n.pos.y=r,n.vel.y<-1.2?(n.vel.y*=-.32,n.vel.x*=.5,n.vel.z*=.5,n.spin.multiplyScalar(.55)):(n.vel.y=0,n.vel.x*=Math.exp(-8*t),n.vel.z*=Math.exp(-8*t),n.spin.multiplyScalar(Math.exp(-6*t)),Math.hypot(n.vel.x,n.vel.z)<.3&&this.settle(n)))}this.dirty.add(n)}n.timer>25&&Math.hypot(e.x-n.x,e.z-n.z)>200&&this.restore(n)}for(let n of this.dirty)this.write(n);this.dirty.clear()}settle(t){t.state=2,Tu.set(0,1,0).applyQuaternion(t.quat);let e=Math.atan2(Tu.x,Tu.z);Kd.setFromAxisAngle(aa.set(0,1,0),e),Pc.setFromAxisAngle(aa.set(1,0,0),Math.PI/2),t.quat.copy(Kd).multiply(Pc),t.pos.y=this.groundY(t.pos.x,t.pos.z)+t.lieH,this.dirty.add(t)}restore(t){t.state=0,t.pos.copy(t.pivot0),t.quat.identity(),t.vel.set(0,0,0),t.spin.set(0,0,0),this.loose.delete(t);for(let e of[...t.parts,...t.hide])e.mesh.setMatrixAt(e.index,e.base),e.mesh.instanceMatrix.needsUpdate=!0}write(t){Eu.compose(t.pos,t.quat,hy),Cc.makeTranslation(-t.pivot0.x,-t.pivot0.y,-t.pivot0.z),Eu.multiply(Cc);for(let e of t.parts)Cc.multiplyMatrices(Eu,e.base),e.mesh.setMatrixAt(e.index,Cc),e.mesh.instanceMatrix.needsUpdate=!0}restoreAll(){for(let t of[...this.loose])this.restore(t)}};function Lc(s,t){let e=s.index?s.toNonIndexed():s,n=new Ut(t),i=e.attributes.position.count,r=new Float32Array(i*3);for(let o=0;o<i;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new qe(r,3)),e}function He(s,t,e,n,i,r,o,a=0,c=0,h=0){let l=new Kt(s,t,e);return(a||c||h)&&l.applyMatrix4(new Ht().makeRotationFromEuler(new en(a,c,h))),l.translate(n,i,r),Lc(l,o)}function Ye(s,t,e,n,i,r,o,a,c="y"){let h=new ae(s,t,e,n);return c==="x"&&h.rotateZ(Math.PI/2),c==="z"&&h.rotateX(Math.PI/2),h.translate(i,r,o),Lc(h,a)}function ep(s,t,e,n,i,r,o=1){let a=new pn(s,t,Math.max(3,t/3),0,Math.PI*2,0,Math.PI/2);return a.scale(1,o,1),a.translate(e,n,i),Lc(a,r)}var Qr="#b0362a",Au="#d9d3c2",rr="#202427",Jd="#7d5b3b",jd="#264a8a",Dc="#626a70";function fy(){return ze([Ye(.2,.21,.07,10,0,.035,0,Qr),Ye(.14,.15,.52,10,0,.33,0,Qr),Ye(.17,.17,.05,10,0,.6,0,Qr),ep(.15,10,0,.62,0,Qr,.9),Ye(.035,.05,.07,6,0,.78,0,Au),...[-1,1].flatMap(s=>[Ye(.055,.06,.14,8,s*.17,.46,0,Qr,"x"),Ye(.065,.065,.03,8,s*.245,.46,0,Au,"x")]),Ye(.075,.08,.13,8,0,.42,.17,Qr,"z"),Ye(.085,.085,.035,8,0,.42,.245,Au,"z")])}function dy(){let s=[Ye(.3,.27,.9,14,0,.45,0,"#2c4a3b"),ep(.31,14,0,.9,0,"#1f2b27",.4),He(.22,.12,.02,0,.78,.3,"#0d1110")];for(let t of[.18,.5,.82])s.push(Ye(.305,.3,.03,14,0,t,0,"#22392e"));return ze(s)}function py(){let s=[];for(let t of[-.14,0,.14])s.push(He(2,.04,.11,0,.45,t,Jd));for(let t=0;t<2;t++)s.push(He(2,.1,.035,0,.64+t*.15,-.25-t*.03,Jd,-.2));for(let t of[-.85,.85])s.push(He(.06,.45,.06,t,.225,.16,rr),He(.06,.85,.06,t,.42,-.24,rr,-.15)),s.push(He(.06,.04,.5,t,.63,-.02,rr),He(.06,.04,.42,t,.42,-.04,rr));return ze(s)}function my(){let s=[];for(let t of[-.22,.22])for(let e of[-.18,.18])s.push(He(.05,.22,.05,t,.11,e,rr));return s.push(He(.52,.62,.46,0,.53,0,jd),Ye(.23,.23,.52,14,0,.84,0,jd,"x")),s.push(He(.32,.07,.04,0,.93,.225,"#16294d"),He(.2,.14,.012,0,.6,.235,"#d8dde6")),ze(s)}function gy(){return ze([He(.36,.03,.3,0,.015,0,rr),He(.08,.36,.08,0,.18,0,rr),He(.46,.55,.4,0,.63,0,"#ffffff"),He(.48,.04,.42,0,.92,0,"#ffffff"),He(.34,.24,.012,0,.71,.205,"#1c2226"),He(.12,.03,.03,0,.53,.215,"#9aa0a4")])}function xy(){return ze([Ye(.035,.04,1.05,8,0,.525,0,Dc),He(.17,.28,.13,0,1.19,0,"#8a9095"),Ye(.085,.085,.13,10,0,1.33,0,"#3a4044","z"),He(.1,.07,.012,0,1.24,.067,"#c9e0a8")])}function vy(){return ze([Ye(.045,.05,3.3,8,0,1.65,0,Dc),Ye(.06,.06,.06,8,0,3.32,0,Dc)])}function yy(s){let t=[Ye(.13,.17,10.6,8,0,5.3,0,"#5a4330"),He(2.5,.13,.13,0,9.7,0,"#4b3828"),He(1.4,.1,.1,0,8.9,0,"#4b3828")];for(let e of[-1.1,0,1.1])t.push(Ye(.05,.06,.2,6,e,9.86,0,"#cfd4d2"));for(let e of[-.6,.6])t.push(Ye(.04,.05,.16,6,e,9.04,0,"#cfd4d2"));return s&&t.push(Ye(.27,.27,.85,10,0,7.9,.32,"#7d8487"),Ye(.29,.29,.05,10,0,8.35,.32,"#5f6669")),ze(t)}var np=s=>s.toUpperCase().replace(" DRIVE"," DR").replace(" AVE"," AV").replace(" BLVD"," BL"),Qd=Object.fromEntries(Object.entries(uu).map(([s,t])=>[s,np(t)])),tp=Object.fromEntries(Object.entries(fu).map(([s,t])=>[s,np(t)]));function _y(s,t){let e=t.length,n=We(s,512,64*e,(r,o,a)=>{let c=a/e;t.forEach((h,l)=>{let f=l*c;r.fillStyle="#16603d",r.fillRect(0,f,o,c),r.strokeStyle="#e9f1ea",r.lineWidth=3,r.strokeRect(6,f+6,o-12,c-12),r.fillStyle="#f4f7f2",r.font='700 40px "Barlow Condensed", Arial Narrow, Arial, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(h,o/2,f+c/2+2)})}),i=new kt({map:n,roughness:.45,metalness:.2});return i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aRow;`).replace("#include <uv_vertex>",`#include <uv_vertex>
  vMapUv.y = (vMapUv.y + aRow) / ${e.toFixed(1)};`)},i.customProgramCacheKey=()=>"pa-street-blade",i}function My(s){return We(s,256,384,(t,e,n)=>{let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#ff8a4c"),i.addColorStop(1,"#5a1c3c"),t.fillStyle=i,t.fillRect(0,0,e,n),t.fillStyle="#fff4dc",t.beginPath(),t.arc(e/2,n*.36,62,0,Math.PI*2),t.fill(),t.fillStyle="#1b1020",t.font='800 54px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.fillText("SURF",e/2,n*.7),t.fillText("FIZZ",e/2,n*.84),t.fillStyle="#fff4dc",t.font="600 18px Arial, sans-serif",t.fillText("TASTE THE SWELL",e/2,n*.94)})}function ip(s,t,e,n,i=[]){let r=new Ht,o=new ge,a=new U,c=new U(1,1,1),h=new U(0,1,0),l=new kt({vertexColors:!0,roughness:.55,metalness:.15}),f=[],p=[],u=re+5,g=new Zn(16);for(let[nt,Ft]of n)g.add({x:nt,z:Ft});for(let nt of i)g.add({x:nt.x,z:nt.z});let x=(nt,Ft,L=2.4)=>g.any(nt,Ft,L),m=new Zn(32);for(let nt of qi){let[Ft,L]=Qs(nt);m.add({x:Ft,z:L})}let d=(nt,Ft)=>m.any(nt,Ft,7),_=new Set(["downtown","midtown"]),M={hydrant:[],bin:[],bench:[],mailbox:[],newsbox:[],meter:[]},y=(nt,Ft,L,Nt)=>Rt=>nt==="ns"?[Ft+L*(re+Rt),Nt]:[Nt,Ft+L*(re+Rt)];for(let nt of["ns","ew"]){let Ft=nt==="ns"?ve:ye,L=nt==="ns"?ye:ve,[Nt,Rt]=nt==="ns"?[Ee-45,Le+45]:[ke+15,Ce+25];for(let Ct of Ft)for(let q of[-1,1])if(!(nt==="ns"&&Ct===ke&&q<0))for(let W=Nt;W<=Rt;W+=6.5){if(L.some(C=>Math.abs(W-C)<u))continue;let G=y(nt,Ct,q,W),[rt,Z]=G(1);if(x(rt,Z)||d(rt,Z))continue;let Q=nt==="ns"?q>0?-Math.PI/2:Math.PI/2:q>0?Math.PI:0,T=_.has(mi(tr(rt+(nt==="ns"?q*40:0)),jo(Z+(nt==="ew"?q*40:0)))),v=gt();if(v<.055)M.hydrant.push([...G(.6),Q]);else if(v<.12)M.bin.push([...G(.9),Q]);else if(v<.165)M.bench.push([...G(3.4),Q]);else if(v<.19)M.mailbox.push([...G(1.1),Q]);else if(v<.23){let C=2+Math.floor(gt()*2);for(let F=0;F<C;F++){let k=(F-(C-1)/2)*.55,[z,K]=G(1.1);M.newsbox.push([nt==="ns"?z:z+k,nt==="ns"?K+k:K,Q])}}else T&&v<.42&&M.meter.push([...G(.45),Q])}}let w={hydrant:{geo:fy(),y:.4,r:.22,mass:.08,solid:1.5,lieH:.17,kind:"fly",sparks:!0},bin:{geo:dy(),y:.5,r:.32,mass:.04,solid:1.2,lieH:.29,kind:"fly"},bench:{geo:py(),y:.4,r:.75,mass:.07,solid:1.5,lieH:.3,kind:"fly"},mailbox:{geo:my(),y:.5,r:.34,mass:.06,solid:1.5,lieH:.25,kind:"fly",sparks:!0},newsbox:{geo:gy(),y:.5,r:.28,mass:.04,solid:1.2,lieH:.22,kind:"fly"},meter:{geo:xy(),y:0,r:.12,mass:.04,solid:2,kind:"topple",sparks:!0}},A=["#c8342b","#2f5fa8","#e2b33a","#2e7d4f","#e8e4da","#d9662f"].map(nt=>new Ut(nt)),I={},D=nt=>[nt[0],nt[1]],b=nt=>{nt.castShadow=!0,nt.receiveShadow=!0,nt.layers.set(1)};for(let[nt,Ft]of Object.entries(M)){let L=w[nt],Nt=tn(s,Ft,L.geo,l,{at:D,far:nt==="bench"?420:340,setup:Rt=>{b(Rt),Rt.name=nt},set:(Rt,Ct,[q,W,G])=>{o.setFromAxisAngle(h,G+(nt==="bin"||nt==="hydrant"?gt()*6.28:0)),Rt.setMatrixAt(Ct,r.compose(a.set(q,ie,W),o,c)),nt==="newsbox"&&Rt.setColorAt(Ct,le(A))}});I[nt]=Nt.meshes,Ft.forEach(([Rt,Ct],q)=>{e.add([Nt.refs[q]],null,{type:nt,x:Rt,z:Ct,y:ie+L.y,r:L.r,mass:L.mass,solid:L.solid,lieH:L.lieH??.2,kind:L.kind,sparks:!!L.sparks})})}let S=[...Object.values(Qd),...Object.values(tp)],N=[];for(let nt of ve)for(let Ft of ye)N.push([nt+re+1.3,Ft-re-1.3,nt,Ft]);let H=tn(s,N,vy(),l,{at:D,far:420,setup:b,set:(nt,Ft,[L,Nt])=>nt.setMatrixAt(Ft,r.makeTranslation(L,ie,Nt))}),B=N.flatMap(([nt,Ft,L,Nt])=>[[nt,Ft,0,S.indexOf(Qd[String(L)])],[nt,Ft,1,S.indexOf(tp[String(Nt)])]]),O=tn(s,B,new Kt(1.7,.27,.03),_y(t,S),{at:D,far:420,cloneGeometry:!0,set:(nt,Ft,[L,Nt,Rt])=>{Rt===0?o.setFromAxisAngle(h,Math.PI/2):o.identity(),nt.setMatrixAt(Ft,r.compose(a.set(L,ie+3+Rt*.3,Nt),o,c))},setup:(nt,Ft)=>{b(nt),nt.geometry.setAttribute("aRow",new Ge(new Float32Array(Ft.map(L=>S.length-1-L[3])),1))}});N.forEach(([nt,Ft],L)=>{e.add([H.refs[L],O.refs[L*2],O.refs[L*2+1]],null,{type:"sign",x:nt,z:Ft,y:ie,r:.12,mass:.05,solid:2.5,kind:"topple",sparks:!0})});let Y=[],X=[],it=[];for(let nt of qi){let[Ft,L]=Qs(nt),Nt=nt.axis==="ns"?nt.side>0?-Math.PI/2:Math.PI/2:nt.side>0?Math.PI:0,Rt=new Ht().compose(a.set(Ft,ie,L),o.setFromAxisAngle(h,Nt),c),Ct=(rt,Z)=>rt.push(Z.applyMatrix4(Rt));Ct(Y,He(4.3,.08,1.8,0,2.55,0,"#3b4448",.04)),Ct(Y,He(4.3,.18,.06,0,2.48,.88,"#2b3236"));for(let rt of[-2.05,2.05])for(let Z of[-.78,.7])Ct(Y,Ye(.05,.05,2.5,8,rt,1.25,Z,"#2b3236"));Ct(Y,He(2.4,.05,.42,-.2,.47,-.45,"#9aa3a8"));for(let rt of[-1.2,.8])Ct(Y,He(.05,.45,.35,rt,.225,-.45,"#2b3236"));Ct(Y,Ye(.04,.04,2.8,8,2.7,1.4,.9,Dc)),Ct(Y,Ye(.27,.27,.03,18,2.7,2.65,.9,"#1d4f9a","z")),Ct(Y,Ye(.2,.2,.035,18,2.7,2.65,.9,"#f2f4f6","z")),Ct(X,He(4,1.85,.02,0,1.3,-.8,"#ffffff")),Ct(X,He(.02,1.85,1.35,-2.05,1.3,-.1,"#ffffff"));let q=new Kt(.14,1.8,1.3);q.translate(2.05,1.3,-.08),it.push(Lc(q,"#ffffff").applyMatrix4(Rt));let W=2.25,G=.95;f.push(nt.axis==="ns"?{x:Ft,z:L,w:G,d:W}:{x:Ft,z:L,w:W,d:G})}let R=new Bt(ze(Y),l);R.castShadow=R.receiveShadow=!0;let ut=new kt({color:10470612,roughness:.05,metalness:.1,transparent:!0,opacity:.22,depthWrite:!1}),xt=new Bt(ze(X),ut);xt.renderOrder=2;let Et=My(t),Lt=new kt({map:Et,emissive:16777215,emissiveMap:Et,emissiveIntensity:.1,roughness:.3}),Vt=new Bt(ze(it),Lt);Vt.castShadow=!0,s.add(R,xt,Vt);let qt=[];for(let nt=Ee-30;nt<=Le+45;nt+=38)ye.some(Ft=>Math.abs(nt-Ft)<u)||qt.push([Ce+re+1.7,nt,"ns"]);for(let[nt,Ft]of[[Le,1],[Ee,-1]])for(let L=ke+30;L<=Ce+10;L+=38)ve.some(Nt=>Math.abs(L-Nt)<u)||qt.push([L,nt+Ft*(re+1.7),"ew"]);let $t=qt.filter((nt,Ft)=>Ft%4!==2),ot=qt.filter((nt,Ft)=>Ft%4===2);for(let[nt,Ft]of[[$t,!1],[ot,!0]]){tn(s,nt,yy(Ft),l,{at:D,far:900,setup:L=>{L.castShadow=!0},set:(L,Nt,[Rt,Ct,q])=>L.setMatrixAt(Nt,r.compose(a.set(Rt,ie,Ct),o.setFromAxisAngle(h,q==="ns"?0:Math.PI/2),c))});for(let[L,Nt]of nt)p.push({x:L,z:Nt,r:.22})}let at=[],wt=[qt.filter(nt=>nt[2]==="ns"),qt.filter(nt=>nt[2]==="ew"&&nt[1]>0),qt.filter(nt=>nt[2]==="ew"&&nt[1]<0)];for(let nt of wt)for(let Ft=0;Ft<nt.length-1;Ft++){let[L,Nt,Rt]=nt[Ft],[Ct,q]=nt[Ft+1];if(!(Math.hypot(Ct-L,q-Nt)>80))for(let[W,G]of[[-1.1,9.92],[0,9.92],[1.1,9.92],[-.6,9.08],[.6,9.08]]){let rt=Rt==="ns"?W:0,Z=Rt==="ns"?0:W,Q=.55+Math.abs(W)*.1,T=L+rt,v=ie+G,C=Nt+Z;for(let F=1;F<=12;F++){let k=F/12,z=L+(Ct-L)*k+rt,K=Nt+(q-Nt)*k+Z,J=ie+G-Q*4*k*(1-k);at.push(T,v,C,z,J,K),T=z,v=J,C=K}}}let Wt=new Ue;Wt.setAttribute("position",new ne(at,3));let It=new Eo(Wt,new Ur({color:723981,transparent:!0,opacity:.85}));return s.add(It),{solids:f,circles:p,meshes:I,update(nt){Lt.emissiveIntensity=.12+nt*1.4}}}function sp(s,t,e,n,i){let r=n-t,o=i-e;return s.segment(t,e,n,i,a=>{if(Math.max(t,n)<a.x-a.w||Math.min(t,n)>a.x+a.w||Math.max(e,i)<a.z-a.d||Math.min(e,i)>a.z+a.d)return!1;let c=0,h=1;for(let l=0;l<2;l++){let f=l?e:t,p=l?o:r,u=l?a.z-a.d:a.x-a.w,g=l?a.z+a.d:a.x+a.w;if(Math.abs(p)<1e-6){if(f<u||f>g)return!1;continue}let x=(u-f)/p,m=(g-f)/p;if(x>m){let d=x;x=m,m=d}if(c=Math.max(c,x),h=Math.min(h,m),c>h)return!1}return!0})}var Uc=class{constructor(t,e){this.traffic=t,this.colliders=e,this.reset()}reset(){this.level=0,this.evade=0,this.speeding=0,this.bustTimer=0,this.lastCrime=-99,this.seen=!1,this.events=this.events||[];for(let t of this.traffic.police)this.traffic.endChase(t)}get evading(){return this.level>0&&!this.seen}get evadeTime(){return 7+this.level*3}sightRange(){return 70+this.level*25}witness(t,e,n){let i=null,r=n;for(let o of this.traffic.police){let a=Math.hypot(o.x-t,o.z-e);a>r||sp(this.colliders,o.x,o.z,t,e)||(i=o,r=a)}return i}crime(t,e,n,i,r,o=!0){if(r-this.lastCrime<2.5&&t!=="police")return!1;let a=o?this.witness(e,n,75+this.level*15):null;if(o&&!a&&this.level===0||o&&!a&&!this.seen)return!1;this.lastCrime=r;let c=this.level;return this.level=Math.min(5,Math.max(this.level+i,t==="police"?2:1)),this.evade=0,this.level>c&&this.events.push({type:"up",level:this.level,kind:t}),a&&this.traffic.startChase(a),!0}update(t,e,n,i,r){if(this.events.length=0,!r){this.level&&this.reset();return}if(e.kmh>125&&this.witness(e.x,e.z,55)?(this.speeding+=t,this.speeding>1.2&&(this.crime("speeding",e.x,e.z,1,n),this.speeding=0)):this.speeding=Math.max(0,this.speeding-t),!this.level){this.seen=!1;return}let a=Math.min(this.traffic.police.length,[0,1,2,3,4,5][this.level]),c=this.traffic.police.filter(f=>f.mode==="chase");if(c.length<a){let f=this.traffic.police.filter(p=>p.mode!=="chase").sort((p,u)=>Math.hypot(p.x-e.x,p.z-e.z)-Math.hypot(u.x-e.x,u.z-e.z))[0];f&&(Math.hypot(f.x-e.x,f.z-e.z)>260?this.traffic.dispatch(f,e,i):this.traffic.startChase(f))}let h=this.sightRange();if(this.seen=c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<h&&!sp(this.colliders,f.x,f.z,e.x,e.z)),this.seen)this.evade=0;else if(this.evade+=t,this.evade>this.evadeTime){this.events.push({type:"evaded"}),this.reset();return}c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<8)&&e.kmh<6?(this.bustTimer+=t,this.bustTimer>2.5&&(this.events.push({type:"busted"}),this.reset())):this.bustTimer=Math.max(0,this.bustTimer-t*2)}sirenLevel(t){let e=1/0;for(let n of this.traffic.police)n.mode==="chase"&&(e=Math.min(e,Math.hypot(n.x-t.x,n.z-t.z)));return Math.max(0,1-e/260)}};var by=[["sedan",16],["suv",11],["hatch",11],["pickup",7],["taxi",9],["police",5]],Ru={sedan:26,suv:20,hatch:22,pickup:12,taxi:0,police:0},Sy=["sedan","sedan","suv","hatch","hatch","pickup"],rp=["#e9e9e6","#e9e9e6","#151719","#151719","#9ea3a6","#5d6265","#1f3a5f","#8e1c1c","#c9b99a","#2e4a3a","#6b7d8c","#3a2f2a","#7a8f9e","#b85c2a"],op=11.85,wy=430,ap=210,xi=new Ht,_s=new ge,$n=new U,to=new U(1,1,1),ha=new U(0,1,0),Ey=new U(1,0,0),Fc=new Ht,Cu=new ge,Ty=new ge().setFromAxisAngle(ha,Math.PI),la=new Ht().makeScale(0,0,0),vi=new Ut;function cp(s,t){return s==="ns"?-t:t}function Pu(s,t){return s==="ns"?t<0?0:Math.PI:t>0?-Math.PI/2:Math.PI/2}function Iu(s,t){return s==="ns"?[0,t]:[t,0]}function ca(s,t,e,n,i){let r=cp(s,e)*Jo[n];return s==="ns"?[t+r,i]:[i,t+r]}function lp(s){return Math.atan2(Math.sin(s),Math.cos(s))}function Du(s,t){return s.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},s.customProgramCacheKey=()=>t,s}var Lu=new Map;function Ay(s){if(Lu.has(s))return Lu.get(s);let e=Object.entries({trim:"#14181a",dark:"#07090a",chrome:"#b9bec2",plate:"#d6d2c4",rev:"#c9c9c2",amber:"#c9741a"}).map(([i,r])=>{let o=s.parts[i].clone(),a=new Ut(r),c=o.attributes.position.count,h=new Float32Array(c*3);for(let l=0;l<c;l++)h[l*3]=a.r,h[l*3+1]=a.g,h[l*3+2]=a.b;return o.setAttribute("color",new qe(h,3)),o}),n={paint:s.parts.paint,glass:s.parts.glass,body:ze(e),head:s.parts.head,tail:s.parts.tail};return Lu.set(s,n),n}var Ry=s=>sa(16777215,{metalness:.35,roughness:.32,seams:s,twoTone:["0.015","0.92","0.7"]}),Nc=class{constructor(t,e){this.cars=[],this.meshes=[],this.types={},this.parked=[],this.police=[],this.world=null,this.peds=[],this.policePace=.6;let n=jr(e);this.headMat=Du(new kt({color:16777215,emissive:16773846,emissiveIntensity:1,roughness:.2}),"head-inst"),this.tailMat=Du(new kt({color:3802885,emissive:16719888,emissiveIntensity:1,roughness:.3}),"tail-inst");let i=We(e,128,32,(l,f)=>{l.fillStyle="#f7d046",l.fillRect(0,0,f,32),l.fillStyle="#1a1a1a",l.font='800 24px "Barlow Condensed", Impact, sans-serif',l.textAlign="center",l.fillText("TAXI",f/2,25)});this.taxiSignMat=new kt({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.3}),this.barMat=Du(new kt({color:1118481,emissive:16777215,emissiveIntensity:1,roughness:.3}),"lightbar-inst"),this.bodyMat=new kt({vertexColors:!0,roughness:.5,metalness:.4}),this.parked=this.layoutParking();for(let[l,f]of by){let u=Tc(l==="taxi"||l==="police"?"sedan":l),g=f+(Ru[l]||0),m={paint:l==="police"?Ry(u.seams):sa(16777215,{metalness:.45,roughness:.38,seams:u.seams}),glass:n.glass,body:this.bodyMat,head:this.headMat,tail:this.tailMat},d={};for(let[D,b]of Object.entries(Ay(u))){let S=new xe(b,m[D],g);S.castShadow=D==="paint",(D==="glass"||D==="body")&&S.layers.set(1),S.receiveShadow=!0,S.frustumCulled=!1,S.instanceMatrix.setUsage(ii);for(let N=0;N<g;N++)S.setMatrixAt(N,la);t.add(S),d[D]=S,this.meshes.push(S)}for(let D=0;D<g;D++)d.paint.setColorAt(D,vi.set(l==="taxi"?"#f2c230":le(rp))),d.tail.setColorAt(D,vi.setScalar(1)),d.head.setColorAt(D,vi.setScalar(1));let _=new xe(u.wheel.tire,n.tireLite,g*4),M=new xe(u.wheel.rim,n.rim,g*4);for(let D of[_,M]){D.frustumCulled=!1,D.castShadow=!1,D.layers.set(1),D.instanceMatrix.setUsage(ii);for(let b=0;b<g*4;b++)D.setMatrixAt(b,la);t.add(D),this.meshes.push(D)}let y=null,w=null;if(l==="taxi"&&(y=new xe(new Kt(.62,.2,.26),this.taxiSignMat,f),y.frustumCulled=!1,t.add(y),this.meshes.push(y)),l==="police"){w=new xe(new Kt(.62,.16,.3),this.barMat,f*2),w.frustumCulled=!1;for(let D=0;D<f*2;D++)w.setColorAt(D,vi.setScalar(0));t.add(w),this.meshes.push(w)}let A=Math.max(...u.type.cabin.top.map(D=>D[1])),I={name:l,geo:u,parts:d,tire:_,rim:M,sign:y,bar:w,roofY:A,moving:f,cap:g};this.types[l]=I;for(let D=0;D<f;D++){let b={type:I,slot:D,geo:u,police:l==="police",mode:"lane"};this.spawnLane(b,fn.x,fn.z,0,420),this.cars.push(b),b.police&&this.police.push(b)}}let r=We(e,64,128,(l,f,p)=>{let u=l.createRadialGradient(f/2,p/2,4,f/2,p/2,p/2);u.addColorStop(0,"rgba(0,0,0,0.75)"),u.addColorStop(.55,"rgba(0,0,0,0.45)"),u.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=u,l.fillRect(0,0,f,p)}),o=new Oe(2.6,5.6);o.rotateX(-Math.PI/2);let a=Object.values(Ru).reduce((l,f)=>l+f,0);this.blobs=new xe(o,new sn({map:r,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),this.cars.length+a+1),this.blobs.frustumCulled=!1,this.blobs.renderOrder=1,this.blobs.userData.noAO=!0,t.add(this.blobs);let c=We(e,64,128,(l,f,p)=>{let u=l.createRadialGradient(f/2,p*.75,2,f/2,p*.6,p*.6);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(.5,"rgba(255,255,255,0.3)"),u.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=u,l.fillRect(0,0,f,p)}),h=new Oe(6,14);h.rotateX(-Math.PI/2),h.translate(0,0,-9.5),this.poolMat=new sn({map:c,color:16773328,transparent:!0,depthWrite:!1,blending:Nn,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2}),this.pools=new xe(h,this.poolMat,this.cars.length),this.pools.frustumCulled=!1,this.pools.layers.set(1),this.pools.userData.noAO=!0,t.add(this.pools),this.parkTimer=0,this.nearParked=[],this.refreshParked(fn.x,fn.z)}layoutParking(){let t=[],e=new Zn(48);for(let i of qi){let[r,o]=Qs(i);e.add({x:r,z:o})}let n=i=>i.slice(0,-1).map((r,o)=>[r+27,i[o+1]-27]);for(let[i,r,o]of[["ns",ve,ye],["ew",ye,ve]])for(let a of r)for(let c of[-1,1])if(!(i==="ns"&&a===ke&&c<0))for(let[h,l]of n(o))for(let f=h+3.6;f<l-3;f+=7.2){if(!Te(.42))continue;let p=f+yt(-.6,.6),u=i==="ns"?a+c*op:p,g=i==="ns"?p:a+c*op;if(e.near(u,g,14,m=>Math.hypot(m.x-u,m.z-g)<14)||u<-300&&Rn.some(m=>Math.abs(g-m.z)<20))continue;let x=i==="ns"?-c:c;t.push({parked:!0,type:le(Sy),x:u,z:g,heading:Pu(i,x)+yt(-.04,.04),color:le(rp),hit:null,slot:-1})}return this.parkGrid=new Zn(80).addAll(t),t}refreshParked(t,e){for(let r of Object.values(this.types))for(let o=r.moving;o<r.cap;o++){for(let a of Object.values(r.parts))a.setMatrixAt(o,la);for(let a=0;a<4;a++)r.tire.setMatrixAt(o*4+a,la),r.rim.setMatrixAt(o*4+a,la)}for(let r of this.nearParked)r.slot=-1;let n=[];this.parkGrid.near(t,e,ap,r=>{r.d=Math.hypot(r.x-t,r.z-e),r.slot=-1,r.d<ap&&n.push(r)}),n.sort((r,o)=>r.d-o.d);let i={};this.nearParked=[];for(let r of n){let o=this.types[r.type],a=i[r.type]||0;a>=Ru[r.type]||(i[r.type]=a+1,r.slot=o.moving+a,o.parts.paint.setColorAt(r.slot,vi.set(r.color)),o.parts.head.setColorAt(r.slot,vi.setScalar(0)),o.parts.tail.setColorAt(r.slot,vi.setScalar(.12)),this.writeCar(o,r.slot,r.x,r.z,r.heading,0),this.nearParked.push(r))}}writeCar(t,e,n,i,r,o){_s.setFromAxisAngle(ha,r),xi.compose($n.set(n,.02,i),_s,to);for(let a of Object.values(t.parts))a.setMatrixAt(e,xi);return t.geo.wheels.forEach((a,c)=>{Cu.setFromAxisAngle(Ey,o*(a.side<0?-1:1)),a.side<0&&Cu.premultiply(Ty),Fc.compose($n.set(a.x,a.y,a.z),Cu,to),Fc.premultiply(xi),t.tire.setMatrixAt(e*4+c,Fc),t.rim.setMatrixAt(e*4+c,Fc)}),xi}spawnLane(t,e,n,i,r,o=null){for(let a=0;a<40;a++){let c=gt()<.5?"ns":"ew",h=(c==="ns"?ve:ye).filter(d=>Math.abs(d-(c==="ns"?e:n))<r);if(!h.length)continue;let l=le(h),f=gt()<.5?1:-1,p=gt()<.5?0:1,u=c==="ns"?Re.clamp(n+yt(-r,r),Ee+10,Le-10):Re.clamp(e+yt(-r,r),ke+10,Ce-10),[g,x]=ca(c,l,f,p,u),m=Math.hypot(g-e,x-n);if(!(m<i||m>r)&&!(c==="ns"?ye:ve).some(d=>Math.abs(d-u)<24)&&!this.cars.some(d=>d!==t&&d.mode==="lane"&&d.axis===c&&d.road===l&&d.dir===f&&d.lane===p&&Math.abs(d.s-u)<20)){if(o){let d=g-o.position.x,_=x-o.position.z,M=Math.hypot(d,_)||1;if((d*o.fx+_*o.fz)/M>.2&&M<300)continue}return Object.assign(t,{axis:c,road:l,dir:f,lane:p,s:u}),Object.assign(t,{mode:"lane",cruise:t.police?yt(10.5,12.5):yt(11,16.5),speed:9,turn:null,plan:null,decided:null,hit:null,offset:null,braking:!1,blockedTime:0,wheelSpin:0,vx:0,vz:0}),this.place(t),!0}}return t.axis===void 0&&Object.assign(t,{axis:"ns",road:ve[1],dir:1,lane:0,s:0}),Object.assign(t,{mode:"lane",cruise:12,speed:0,turn:null,plan:null,hit:null,offset:null,wheelSpin:0,vx:0,vz:0,blockedTime:0}),this.place(t),!1}place(t){if(t.turn){let e=t.turn,n=e.t*Math.PI/2,i=Math.cos(n),r=Math.sin(n);t.x=e.O[0]+e.u[0]*i+e.v[0]*r,t.z=e.O[1]+e.u[1]*i+e.v[1]*r;let o=-e.u[0]*r+e.v[0]*i,a=-e.u[1]*r+e.v[1]*i;t.heading=Math.atan2(-o,-a)}else[t.x,t.z]=ca(t.axis,t.road,t.dir,t.lane,t.s),t.heading=Pu(t.axis,t.dir)}nextCross(t){let e=t.axis==="ns"?ye:ve,n=null;for(let i of e){let r=(i-t.s)*t.dir;r>-1&&(n===null||r<(n-t.s)*t.dir)&&(n=i)}return n}exitValid(t,e,n){let i=t==="ns"?ye:ve;return e>0?n<i[i.length-1]:n>i[0]}planTurn(t,e){let n=t.axis==="ns"?t.dir<0?"N":"S":t.dir>0?"E":"W",i={N:"E",E:"S",S:"W",W:"N"}[n],r={N:"W",W:"S",S:"E",E:"N"}[n],o=D=>D==="N"?["ns",-1]:D==="S"?["ns",1]:D==="E"?["ew",1]:["ew",-1],a=D=>{let[b,S]=o(D);return b===t.axis?this.exitValid(b,S,e):this.exitValid(b,S,t.road)},c=[];a(n)&&c.push(["straight",t.lane===1?.6:.72]),a(i)&&c.push(["right",t.lane===1?.4:.08]),a(r)&&c.push(["left",t.lane===0?.28:.06]);let h=gt()*c.reduce((D,b)=>D+b[1],0),l=c[0][0];for(let[D,b]of c)if((h-=b)<=0){l=D;break}if(l==="straight")return null;let[f,p]=o(l==="right"?i:r),u=t.lane,g=e,x=ca(t.axis,t.road,t.dir,t.lane,0),m=ca(f,g,p,u,0),d=t.axis==="ns"?[x[0],m[1]]:[m[0],x[1]],_=Iu(t.axis,t.dir),M=Iu(f,p),y=l==="right"?6.5:10.5,w=[d[0]-_[0]*y,d[1]-_[1]*y],A=[d[0]+M[0]*y,d[1]+M[1]*y],I=[w[0]+M[0]*y,w[1]+M[1]*y];return{startS:t.axis==="ns"?w[1]:w[0],O:I,u:[w[0]-I[0],w[1]-I[1]],v:[A[0]-I[0],A[1]-I[1]],t:0,len:y*Math.PI/2,next:{axis:f,road:g,dir:p,lane:u,s:f==="ns"?A[1]:A[0]}}}rejoinLane(t){let e=-Math.sin(t.heading),n=-Math.cos(t.heading),i=Math.abs(n)>Math.abs(e)?"ns":"ew",r=i==="ns"?Math.sign(n)||1:Math.sign(e)||1,o=i==="ns"?t.x:t.z,a=i==="ns"?Yi(o):ms(o),c=(o-a)*cp(i,r),h=Math.abs(c-Jo[0])<Math.abs(c-Jo[1])?0:1,l=i==="ns"?t.z:t.x,[f,p]=ca(i,a,r,h,l);Object.assign(t,{mode:"lane",axis:i,road:a,dir:r,lane:h,s:l,turn:null,plan:null,decided:null,hit:null}),t.offset={dx:t.x-f,dz:t.z-p,dh:lp(t.heading-Pu(i,r)),t:1},Math.abs(o-a)>re+6&&this.spawnLane(t,t.x,t.z,0,200)}update(t,e,n,i,r=null){if(this.frozen)return;let o=n.x,a=n.z,c=r?{position:r.position,fx:0,fz:0}:null;if(c){r.getWorldDirection($n),c.fx=$n.x,c.fz=$n.z;let l=Math.hypot(c.fx,c.fz)||1;c.fx/=l,c.fz/=l}for(let l of this.cars){if(l.mode==="lane"&&Math.hypot(l.x-o,l.z-a)>wy){this.spawnLane(l,o,a,140,380,c);continue}if(l.mode==="chase"){this.chase(l,t,n);continue}if(l.hit){let m=l.hit;l.x+=m.vx*t,l.z+=m.vz*t;let d=Math.exp(-1.8*t);m.vx*=d,m.vz*=d,l.heading+=m.spin*t,m.spin*=Math.exp(-2.5*t),m.t-=t,l.speed=0,this.collideWorld(l),m.t<=0&&this.rejoinLane(l);continue}let f=l.cruise,[p,u]=l.turn?[-Math.sin(l.heading),-Math.cos(l.heading)]:Iu(l.axis,l.dir);if(l.turn)f=Math.min(f,8);else{let m=this.nextCross(l);if(m!==null){let d=(m-l.s)*l.dir;d<34&&l.decided!==m&&(l.decided=m,l.plan=this.planTurn(l,m));let _=d-20.5,M=vs(l.axis==="ns"?0:1,e);_>-1&&(M===0||M===1&&_>9)&&(f=Math.min(f,Math.sqrt(Math.max(0,_-.5))*2.4)),l.plan&&(f=Math.min(f,l.plan.next.lane===0?9:7.5)),!l.plan&&!this.exitValid(l.axis,l.dir,m)&&(f=Math.min(f,Math.sqrt(Math.max(0,_))*2))}for(let d of this.cars){if(d===l||d.mode!=="lane"||d.turn||d.axis!==l.axis||d.road!==l.road||d.dir!==l.dir||d.lane!==l.lane)continue;let _=(d.s-l.s)*l.dir;_>0&&_<45&&(f=Math.min(f,Math.max(0,_-7.5)*.9))}}let g=(m,d,_,M)=>{let y=m-l.x,w=d-l.z,A=y*p+w*u,I=Math.abs(y*u-w*p);return A>0&&A<32&&I<M?(f=Math.min(f,Math.max(0,A-_)*.85),!0):!1};g(o,a,6.5,2.6)?l.speed<1&&n.kmh<5&&(l.blockedTime+=t,l.blockedTime>2.5&&(l.blockedTime=-4,i?.(l))):l.blockedTime=Math.max(0,l.blockedTime-t);for(let m of this.peds)g(m.x,m.z,5,2.4);for(let m of this.cars)(m.mode!=="lane"||m.hit)&&m!==l&&g(m.x,m.z,7,2.6);let x=f>l.speed?3.2:9;if(l.speed+=Math.sign(f-l.speed)*Math.min(Math.abs(f-l.speed),x*t),l.braking=f<l.speed-.3||l.speed<.5&&f<.5,l.turn?(l.turn.t+=l.speed*t/l.turn.len,l.turn.t>=1&&(Object.assign(l,l.turn.next),l.turn=null,l.decided=null)):(l.s+=l.speed*l.dir*t,l.plan&&(l.s-l.plan.startS)*l.dir>=0&&(l.turn=l.plan,l.plan=null)),this.place(l),l.offset){let m=l.offset;if(m.t-=t/1.6,m.t<=0)l.offset=null;else{let d=m.t*m.t;l.x+=m.dx*d,l.z+=m.dz*d,l.heading+=m.dh*d}}l.vx=p*l.speed,l.vz=u*l.speed,l.wheelSpin-=l.speed*t/l.geo.type.wheelR}this.updateParked(t),this.collidePlayer(n),this.parkTimer-=t;let h=Math.hypot(o-(this.lastParkX??o),a-(this.lastParkZ??a))>60;(this.parkTimer<=0||h)&&(this.parkTimer=.5,this.lastParkX=o,this.lastParkZ=a,this.refreshParked(o,a))}chase(t,e,n){let i=this.policePace,r=n.x-t.x,o=n.z-t.z,a=Math.hypot(r,o),c=Math.min(a/35,1.1)*i,h=n.x+n.vx*c,l=n.z+n.vz*c,f=Math.atan2(-(h-t.x),-(l-t.z)),p=10+t.speed*.6,u=this.world?.boxGrid,g=A=>{let I=t.x-Math.sin(A)*p,D=t.z-Math.cos(A)*p;return!!u&&u.near(I,D,2,b=>Math.abs(I-b.x)<b.w+1.8&&Math.abs(D-b.z)<b.d+1.8)};if(g(f)){for(let A of[.5,-.5,1,-1,1.6,-1.6])if(!g(f+A)){f+=A;break}}let x=lp(f-t.heading),m=1.9/(1+t.speed*.012);t.heading+=Re.clamp(x,-m*e,m*e);let d=Math.hypot(n.vx,n.vz),_=50*i,M=a>60?_:Math.min(_+2,d+10*i);Math.abs(x)>.9&&(M=Math.min(M,14*Math.min(1,i+.2))),a<9&&d<3&&(M=Math.min(M,2)),t.speed+=Re.clamp(M-t.speed,-14*e,9*i*e);let y=-Math.sin(t.heading),w=-Math.cos(t.heading);t.vx+=(y*t.speed-t.vx)*Math.min(1,e*5),t.vz+=(w*t.speed-t.vz)*Math.min(1,e*5),t.x+=t.vx*e,t.z+=t.vz*e,this.collideWorld(t),t.wheelSpin-=t.speed*e/t.geo.type.wheelR,t.braking=M<t.speed-1}collideWorld(t){let e=this.world?.boxGrid;e&&e.near(t.x,t.z,2,n=>{let i=n.w+1.1-Math.abs(t.x-n.x),r=n.d+1.1-Math.abs(t.z-n.z);i<=0||r<=0||(i<r?(t.x+=Math.sign(t.x-n.x)*i,t.vx*=-.2):(t.z+=Math.sign(t.z-n.z)*r,t.vz*=-.2),t.speed*=.6)}),t.x=Re.clamp(t.x,fe.minX+60,fe.maxX),t.z=Re.clamp(t.z,fe.minZ,fe.maxZ)}startChase(t){if(t.mode==="chase")return;t.mode="chase",t.turn=null,t.plan=null,t.hit=null,t.offset=null;let e=-Math.sin(t.heading),n=-Math.cos(t.heading);t.vx=e*t.speed,t.vz=n*t.speed}endChase(t){t.mode==="chase"&&(this.rejoinLane(t),t.speed=Math.min(t.speed,10))}dispatch(t,e,n){let i={position:n.position,fx:0,fz:0};n.getWorldDirection($n);let r=Math.hypot($n.x,$n.z)||1;i.fx=$n.x/r,i.fz=$n.z/r,this.spawnLane(t,e.x,e.z,110,240,i),this.startChase(t)}updateParked(t){for(let e of this.nearParked){if(!e.hit)continue;let n=e.hit;e.x+=n.vx*t,e.z+=n.vz*t,e.heading+=n.spin*t;let i=Math.exp(-2.4*t);n.vx*=i,n.vz*=i,n.spin*=i,Math.hypot(n.vx,n.vz)<.05&&Math.abs(n.spin)<.02&&(e.hit=null),this.writeCar(this.types[e.type],e.slot,e.x,e.z,e.heading,0)}}collidePlayer(t){let e=[-Math.sin(t.heading),-Math.cos(t.heading)],n=[...this.cars,...this.nearParked];this.lastHit=null;for(let i of n){let r=t.x-i.x,o=t.z-i.z;if(r*r+o*o>64)continue;let a=!!i.parked,c=[-Math.sin(i.heading),-Math.cos(i.heading)],l=(a?4.7:i.geo.type.length)/2-1.05;for(let f of[-1.3,1.3])for(let p of[-l,l]){let u=t.x+e[0]*f,g=t.z+e[1]*f,x=i.x+c[0]*p,m=i.z+c[1]*p,d=u-x,_=g-m,M=Math.hypot(d,_);if(M>2.15||M<1e-4)continue;d/=M,_/=M;let y=2.15-M;t.x+=d*y*.6,t.z+=_*y*.6;let w=a?i.hit?i.hit.vx:0:i.mode==="chase"?i.vx:i.hit?i.hit.vx:c[0]*i.speed,A=a?i.hit?i.hit.vz:0:i.mode==="chase"?i.vz:i.hit?i.hit.vz:c[1]*i.speed,I=(t.vx-w)*d+(t.vz-A)*_;if(I<0){let D=a?.55:.5,b=-1.3*I*D;t.vx+=b*d*(a?.8:1),t.vz+=b*_*(a?.8:1),t.impact=Math.max(t.impact,-I),this.lastHit={car:i,parked:a,police:!!i.police,speed:-I,x:(u+x)/2,z:(g+m)/2},t.registerHit?.(this.lastHit.x,this.lastHit.z,-I),(!t.contact||-I>t.contact.speed)&&(t.contact={x:this.lastHit.x,z:this.lastHit.z,speed:-I,nx:d,nz:_}),i.mode==="chase"?(i.vx-=b*d,i.vz-=b*_):(i.hit||(i.hit={vx:w,vz:A,spin:0,t:0}),i.hit.vx-=b*d,i.hit.vz-=b*_,i.hit.spin+=(gt()-.5)*Math.min(-I,20)*.25,i.hit.t=2.8,i.turn=null,i.plan=null)}else!i.hit&&!a&&i.mode!=="chase"&&(i.hit={vx:-d*1.5,vz:-_*1.5,spin:0,t:.6});i.x-=d*y*.4,i.z-=_*y*.4}}}sync(t,e,n=0){let i=0;this.cars.forEach((r,o)=>{let a=r.type,c=this.writeCar(a,r.slot,r.x,r.z,r.heading,r.wheelSpin);if(a.sign){let h=c.clone().multiply(new Ht().makeTranslation(0,a.roofY+.1,.1));a.sign.setMatrixAt(r.slot,h)}if(a.bar)for(let h=0;h<2;h++){let l=c.clone().multiply(new Ht().makeTranslation(h?.32:-.32,a.roofY+.09,.1));a.bar.setMatrixAt(r.slot*2+h,l);let f=r.mode==="chase"&&Math.sin(n*18+h*Math.PI)>0?1:0;a.bar.setColorAt(r.slot*2+h,f?h?vi.setRGB(.3,.5,6):vi.setRGB(6,.2,.15):vi.setRGB(.04,.04,.05))}a.parts.tail.setColorAt(r.slot,vi.setScalar(r.braking?4:1)),_s.setFromAxisAngle(ha,r.heading),xi.compose($n.set(r.x,.035,r.z),_s,to),this.blobs.setMatrixAt(i++,xi),this.pools.setMatrixAt(o,xi)});for(let r of this.nearParked)_s.setFromAxisAngle(ha,r.heading),xi.compose($n.set(r.x,.035,r.z),_s,to),this.blobs.setMatrixAt(i++,xi);_s.setFromAxisAngle(ha,e.heading),xi.compose($n.set(e.x,e.y+.035,e.z),_s,to.set(1.05,1,1)),to.set(1,1,1),this.blobs.setMatrixAt(i++,xi),this.blobs.count=i,this.blobs.instanceMatrix.needsUpdate=!0,this.pools.instanceMatrix.needsUpdate=!0;for(let r of this.meshes)r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0);this.headMat.emissiveIntensity=1+t*8,this.tailMat.emissiveIntensity=.8+t*2.2,this.taxiSignMat.emissiveIntensity=.3+t*2.5,this.poolMat.opacity=t*.55}nearest(t,e){let n=1/0;for(let i of this.cars)n=Math.min(n,Math.hypot(i.x-t,i.z-e));return n}};var Un=62.5,eo=Un*2,ar=eo*4,or=140,Cy=["#f1c7a5","#e0ac85","#c68b62","#a26a45","#7a4b2f","#5a3824"],Py=["#e9e6dd","#20242a","#c23b2e","#2d5d8a","#f2c14e","#3f7a52","#7a4a8c","#e07a4a","#9fb3c4","#d4d0c4","#1f3b5c","#a83c62"],Iy=["#26303d","#1b1d20","#5c6b7a","#c9b79a","#3b4652","#6f5b45","#2f3b2c","#e5e1d6"];function Dy(){let s=[],t=(e,n,i,r,o,a)=>{e.translate(n,i,r);let c=e.index?e.toNonIndexed():e,h=c.attributes.position.count;c.setAttribute("aPart",new ne(new Float32Array(h).fill(o),1)),c.setAttribute("aRegion",new ne(new Float32Array(h).fill(a),1)),c.attributes.uv&&c.deleteAttribute("uv"),s.push(c)};for(let[e,n]of[[-1,1],[1,2]])t(new Kt(.15,.82,.17),e*.1,.49,0,n,2),t(new Kt(.16,.09,.28),e*.1,.045,-.05,n,3);t(new Kt(.36,.2,.21),0,.96,0,0,2),t(new Kt(.42,.56,.23),0,1.33,0,0,1),t(new ae(.05,.055,.1,8),0,1.65,0,0,0),t(new pn(.115,12,10),0,1.79,-.01,0,0),t(new pn(.122,12,8,0,Math.PI*2,0,Math.PI*.55),0,1.81,.012,0,4);for(let[e,n]of[[-1,3],[1,4]])t(new Kt(.1,.34,.12),e*.27,1.43,0,n,1),t(new Kt(.085,.3,.1),e*.275,1.11,0,n,0);return ze(s)}var hp=`
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
}`;function Ly(){let s=new kt({color:16777215,roughness:.82});s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${hp}
attribute vec3 aShirt; attribute vec3 aPants; attribute vec4 aSkin; varying vec3 vPedCol;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
pedPose();
objectNormal = pedBody * (pedLimb * objectNormal);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed = pedTransform(transformed);
        vec3 hair = mix(vec3(0.05, 0.035, 0.02), vec3(0.55, 0.42, 0.22), aSkin.w);
        vPedCol = aRegion < 0.5 ? aSkin.rgb : aRegion < 1.5 ? aShirt : aRegion < 2.5 ? aPants : aRegion < 3.5 ? vec3(0.06) : hair;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPedCol;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = vPedCol;`)},s.customProgramCacheKey=()=>"pedestrian";let t=new Fr({depthPacking:ic});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${hp}`).replace("#include <begin_vertex>",`#include <begin_vertex>
pedPose();
transformed = pedTransform(transformed);`)},t.customProgramCacheKey=()=>"pedestrian-depth",{mat:s,depth:t}}function Uu(s,t,e,n){let i=(e%ar+ar)%ar,r=Math.floor(i/eo),o=i-r*eo;return r===0?(n.x=s-Un+o,n.z=t-Un,n.dx=1,n.dz=0):r===1?(n.x=s+Un,n.z=t-Un+o,n.dx=0,n.dz=1):r===2?(n.x=s+Un-o,n.z=t+Un,n.dx=-1,n.dz=0):(n.x=s-Un,n.z=t+Un-o,n.dx=0,n.dz=-1),n}var zc=s=>s*eo,fp=[[-1,-1],[1,-1],[1,1],[-1,1]];function up(s,t){return fp.findIndex(([e,n])=>e===s&&n===t)}var Oc=class{constructor(t){let{mat:e,depth:n}=Ly(),i=Dy();this.aWalk=new Ge(new Float32Array(or*4),4).setUsage(ii);let r=new Float32Array(or*3),o=new Float32Array(or*3),a=new Float32Array(or*4),c=new Ut;for(let h=0;h<or;h++)r.set(c.set(le(Py)).toArray(),h*3),o.set(c.set(le(Iy)).toArray(),h*3),a.set([...c.set(le(Cy)).toArray(),gt()<.2?1:gt()*.4],h*4);i.setAttribute("aWalk",this.aWalk),i.setAttribute("aShirt",new Ge(r,3)),i.setAttribute("aPants",new Ge(o,3)),i.setAttribute("aSkin",new Ge(a,4)),this.mesh=new xe(i,e,or),this.mesh.customDepthMaterial=n,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(ii),this.mesh.name="pedestrians",t.add(this.mesh),this.peds=[],this.events=[],this.onRoad=[],this.tmp={x:0,z:0,dx:0,dz:0},this.m=new Ht,this.q=new ge,this.e=new en(0,0,0,"YXZ");for(let h=0;h<or;h++){let l={i:h,scale:yt(.9,1.08)};this.place(l,fn.x,fn.z,!0),this.peds.push(l)}}place(t,e,n,i=!1){let r=[],o=tr(e),a=jo(n),c=i?330:300;for(let f=o-320;f<=o+320;f+=160)for(let p=a-320;p<=a+320;p+=160){if(!Zr.includes(f)||!ds.includes(p)||Math.hypot(f-e,p-n)>=c)continue;let u=1+Math.round(Xi[mi(f,p)][2]*3);for(let g=0;g<u;g++)r.push([f,p])}let[h,l]=r.length?le(r):[o,a];Object.assign(t,{cx:h,cz:l,t:gt()*ar,dir:Te(.5)?1:-1,speed:yt(1.05,1.55),lateral:yt(-.9,.9),state:Te(.12)?"idle":"walk",timer:yt(3,9),phase:gt()*6,amp:0,fall:0,lean:0,vx:0,vz:0,cross:null,x:0,z:0,heading:0}),this.pathPoint(t),t.x=t.px,t.z=t.pz}pathPoint(t){let e=Uu(t.cx,t.cz,t.t,this.tmp),n=e.dz,i=-e.dx;t.px=e.x+n*t.lateral,t.pz=e.z+i*t.lateral,t.pdx=e.dx*t.dir,t.pdz=e.dz*t.dir}tryCross(t,e,n){let[i,r]=fp[e],o=[],a=t.cx+i*160,c=t.cz+r*160;if(Zr.includes(a)&&o.push({axis:0,tx:a,tz:t.cz,corner:up(-i,r)}),ds.includes(c)&&o.push({axis:1,tx:t.cx,tz:c,corner:up(i,-r)}),!o.length||!Te(.45))return!1;let h=le(o),l=Uu(t.cx,t.cz,zc(e),{}),f=Uu(h.tx,h.tz,zc(h.corner),{});return t.cross={...h,ax:l.x,az:l.z,bx:f.x,bz:f.z,f:0,len:Math.hypot(f.x-l.x,f.z-l.z)},t.state="wait",t.timer=25,!0}update(t,e,n){let i=-Math.sin(n.heading),r=-Math.cos(n.heading),o=Math.cos(n.heading),a=-Math.sin(n.heading),c=Math.abs(n.speed);this.onRoad.length=0,this.events.length=0;let h=this.aWalk.array;for(let l of this.peds){Math.hypot(l.x-n.x,l.z-n.z)>330&&(l.state==="walk"||l.state==="idle")&&this.place(l,n.x,n.z);let f=0,p=l.x-n.x,u=l.z-n.z,g=p*i+u*r,x=p*o+u*a;if(c>4&&g>-1&&g<c*1.25+5&&Math.abs(x)<2.6&&Math.abs(n.y-ie)<2.5&&l.state!=="down"&&l.state!=="getup"&&l.state!=="dodge"){let y=Math.abs(x)>.2?Math.sign(x):Te(.5)?1:-1;l.vx=o*y*5.2+i*.6,l.vz=a*y*5.2+r*.6,l.state="dodge",l.timer=.55,l.resume=l.cross?"cross":"return"}let d=Math.hypot(l.x-(n.x+i*1.3*Math.sign(g||1)),l.z-(n.z+r*1.3*Math.sign(g||1)));if(l.state!=="down"&&l.state!=="getup"&&Math.hypot(p,u)<3&&d<1.4)if(c>5)l.state="down",l.timer=2.6,l.vx=n.vx*.35+o*Math.sign(x||1)*1.5,l.vz=n.vz*.35+a*Math.sign(x||1)*1.5,l.heading=Math.atan2(-l.vx,-l.vz)+Math.PI,this.events.push({type:"hit",x:l.x,z:l.z,speed:c});else{let y=Math.max(d,.01);l.x+=(l.x-n.x)/Math.hypot(p,u)*(1.4-y)*.5,l.z+=(l.z-n.z)/Math.hypot(p,u)*(1.4-y)*.5}switch(l.state){case"idle":{l.timer-=t,l.timer<=0&&(l.state="walk",l.timer=yt(6,20));break}case"walk":{f=l.speed;let y=l.t;l.t+=l.dir*l.speed*t;let w=Math.floor(y/eo),A=Math.floor(l.t/eo);if(w!==A){let I=((l.dir>0?A:w)%4+4)%4;this.tryCross(l,I,e)&&(l.t=zc(I))}l.t=(l.t%ar+ar)%ar,l.timer-=t,l.timer<=0&&!l.cross&&(Te(.25)?(l.state="idle",l.timer=yt(2,6)):(l.timer=yt(5,20),Te(.2)&&(l.dir*=-1))),this.pathPoint(l),l.x+=(l.px-l.x)*Math.min(1,t*6),l.z+=(l.pz-l.z)*Math.min(1,t*6),l.heading=Math.atan2(-l.pdx,-l.pdz);break}case"wait":{l.timer-=t;let y=l.cross;l.x+=(y.ax-l.x)*Math.min(1,t*3),l.z+=(y.az-l.z)*Math.min(1,t*3),l.heading=Math.atan2(-(y.bx-y.ax),-(y.bz-y.az));let w=vs(y.axis,e),A=(e%28+28)%28,I=y.axis===0?A:(A+14)%28;w===0&&I>=13&&I<17?l.state="cross":l.timer<=0&&(l.cross=null,l.state="walk");break}case"cross":{let y=l.cross;f=1.85,y.f=Math.min(1,y.f+f*t/y.len);let w=y.ax+(y.bx-y.ax)*y.f,A=y.az+(y.bz-y.az)*y.f;l.x+=(w-l.x)*Math.min(1,t*8),l.z+=(A-l.z)*Math.min(1,t*8),l.heading=Math.atan2(-(y.bx-y.ax),-(y.bz-y.az)),this.onRoad.push(l),y.f>=1&&(l.cx=y.tx,l.cz=y.tz,l.t=zc(y.corner),l.cross=null,l.state="walk",l.dir=Te(.5)?1:-1);break}case"dodge":{f=5,l.x+=l.vx*t,l.z+=l.vz*t,l.vx*=Math.exp(-2.5*t),l.vz*=Math.exp(-2.5*t),l.heading=Math.atan2(-l.vx,-l.vz),l.timer-=t,l.timer<=0&&(l.state=l.resume==="cross"&&l.cross?"cross":"return");break}case"down":{l.x+=l.vx*t,l.z+=l.vz*t;let y=Math.exp(-3.5*t);l.vx*=y,l.vz*=y,l.fall=Math.min(1.5,l.fall+t*6),l.timer-=t,l.timer<=0&&(l.state="getup",l.timer=.9);break}case"getup":{l.fall=Math.max(0,l.fall-t*1.9),l.timer-=t,l.timer<=0&&(l.fall=0,l.state=l.cross?"cross":"return");break}case"return":{this.pathPoint(l);let y=l.px-l.x,w=l.pz-l.z,A=Math.hypot(y,w);if(f=2.2,A<.25){l.state="walk";break}l.x+=y/A*Math.min(A,f*t),l.z+=w/A*Math.min(A,f*t),l.heading=Math.atan2(-y,-w),Math.abs(l.x-l.cx)<Un+1&&Math.abs(l.z-l.cz)<Un+1;break}}(l.state==="dodge"||l.state==="return")&&(Math.abs(l.x-l.cx)>Un+3||Math.abs(l.z-l.cz)>Un+3)&&this.onRoad.push(l);let _=l.state==="down"||l.state==="getup"?0:f;l.amp+=((_>.1?Math.min(.45+_*.12,1.05):0)-l.amp)*Math.min(1,t*6),l.phase+=t*(_>.1?3.2+_*1.6:0),l.lean+=((_>3?.18:.02)-l.lean)*Math.min(1,t*5),h[l.i*4]=l.phase,h[l.i*4+1]=l.amp,h[l.i*4+2]=l.lean,h[l.i*4+3]=l.fall;let M=l.state==="cross"||l.state==="down"||l.state==="dodge"||l.state==="getup"?Math.abs(l.x-l.cx)<Un+4.5&&Math.abs(l.z-l.cz)<Un+4.5?ie:.02:ie;this.q.setFromEuler(this.e.set(0,l.heading,0)),this.m.compose(new U(l.x,M,l.z),this.q,new U(l.scale,l.scale,l.scale)),this.mesh.setMatrixAt(l.i,this.m)}this.mesh.instanceMatrix.needsUpdate=!0,this.aWalk.needsUpdate=!0}};var Uy=`
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
}`,Fy=`
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
}`,Ny=`
uniform sampler2D map;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor * t.a * vAlpha, 1.0);
}`,lr=class{constructor(t,e,{texture:n,additive:i=!1,drag:r=1.5,gravity:o=0,grow:a=1.5}){this.max=e,this.drag=r,this.gravity=o,this.grow=a,this.count=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.rot=new Float32Array(e),this.spin=new Float32Array(e),this.col=new Float32Array(e*3);let c=new No,h=new Oe(1,1);c.index=h.index,c.setAttribute("position",h.attributes.position),c.setAttribute("uv",h.attributes.uv),this.aPos=new Ge(new Float32Array(e*3),3).setUsage(ii),this.aData=new Ge(new Float32Array(e*4),4).setUsage(ii),this.aColor=new Ge(new Float32Array(e*3),3).setUsage(ii),c.setAttribute("aPos",this.aPos),c.setAttribute("aData",this.aData),c.setAttribute("aColor",this.aColor),c.instanceCount=0,this.uniforms={map:{value:n},light:{value:new Ut(1,1,1)}};let l=new Ae({uniforms:this.uniforms,vertexShader:Uy,fragmentShader:i?Ny:Fy,transparent:!0,depthWrite:!1,blending:i?Nn:Bi});this.mesh=new Bt(c,l),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i?6:5,this.mesh.userData.noAO=!0,this.mesh.layers.set(1),this.geo=c,t.add(this.mesh)}emit(t,e,n,i,r,o,a,c,h,l=1,f=1,p=1){let u=this.count;if(u>=this.max){let g=0;for(let x=1;x<this.max;x++)this.life[x]<this.life[g]&&(g=x);u=g}else this.count++;this.p.set([t,e,n],u*3),this.v.set([i,r,o],u*3),this.col.set([l,f,p],u*3),this.life[u]=this.maxLife[u]=c,this.size[u]=a,this.alpha[u]=h,this.rot[u]=gt()*Math.PI*2,this.spin[u]=(gt()-.5)*1.2}update(t){let e=Math.exp(-this.drag*t),n=0;for(let i=0;i<this.count;i++){if(this.life[i]-=t,this.life[i]<=0)continue;if(n!==i){for(let[c,h]of[[this.p,3],[this.v,3],[this.col,3]])c.copyWithin(n*h,i*h,i*h+h);this.life[n]=this.life[i],this.maxLife[n]=this.maxLife[i],this.size[n]=this.size[i],this.alpha[n]=this.alpha[i],this.rot[n]=this.rot[i],this.spin[n]=this.spin[i]}let r=n*3;this.v[r]*=e,this.v[r+1]=this.v[r+1]*e+this.gravity*t,this.v[r+2]*=e,this.p[r]+=this.v[r]*t,this.p[r+1]+=this.v[r+1]*t,this.p[r+2]+=this.v[r+2]*t,this.rot[n]+=this.spin[n]*t;let o=1-this.life[n]/this.maxLife[n],a=Math.min(o*6,1)*(1-o)*(1-o);this.aPos.array.set([this.p[r],this.p[r+1],this.p[r+2]],r),this.aData.array.set([this.size[n]*(1+o*this.grow),this.alpha[n]*a,this.rot[n],o],n*4),this.aColor.array.set([this.col[r],this.col[r+1],this.col[r+2]],r),n++}this.count=n,this.geo.instanceCount=n,this.aPos.needsUpdate=this.aData.needsUpdate=this.aColor.needsUpdate=!0}};function dp(s,t){let e=We(t,128,128,(i,r,o)=>{let a=i.createImageData(r,o);for(let c=0;c<o;c++)for(let h=0;h<r;h++){let l=(h-r/2)/(r/2),f=(c-o/2)/(o/2),p=Math.sqrt(l*l+f*f),u=.65+.35*Math.sin(h*.31+Math.sin(c*.23)*3)*Math.sin(c*.27+Math.cos(h*.19)*2),g=Math.max(0,1-p)**1.6*u,x=(c*r+h)*4;a.data[x]=a.data[x+1]=a.data[x+2]=200+u*55,a.data[x+3]=Math.min(255,g*255)}i.putImageData(a,0,0)},{srgb:!1}),n=We(t,64,64,(i,r,o)=>{let a=i.createRadialGradient(r/2,o/2,0,r/2,o/2,r/2);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,255,255,0.6)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,r,o)},{srgb:!1});return{smoke:new lr(s,420,{texture:e,drag:1.1,gravity:.35,grow:2.6}),dust:new lr(s,200,{texture:e,drag:1.6,gravity:-.2,grow:2}),sparks:new lr(s,160,{texture:n,additive:!0,drag:.6,gravity:-9.8,grow:-.6}),flames:new lr(s,160,{texture:n,additive:!0,drag:3,gravity:.5,grow:-.4}),water:new lr(s,360,{texture:e,drag:.35,gravity:-9.8,grow:1.6})}}var Bc=class{constructor(t,e=900){this.max=e,this.index=0;let n=new Oe(1,1);n.rotateX(-Math.PI/2),this.mat=new kt({color:328965,transparent:!0,opacity:.55,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),this.mesh=new xe(n,this.mat,e),this.mesh.instanceMatrix.setUsage(ii),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.renderOrder=1,this.mesh.userData.noAO=!0;let i=new Ht().makeScale(0,0,0);for(let r=0;r<e;r++)this.mesh.setMatrixAt(r,i);this.last=new Map,t.add(this.mesh),this.m=new Ht,this.q=new ge,this.v=new U,this.s=new U,this.up=new U(0,1,0)}add(t,e,n,i,r,o=.26){let a=this.last.get(t);if(!r){this.last.delete(t);return}if(a){let c=e-a[0],h=i-a[2],l=Math.hypot(c,h);if(l<.35)return;l<4&&(this.q.setFromAxisAngle(this.up,Math.atan2(c,h)),this.m.compose(this.v.set((e+a[0])/2,n+.03,(i+a[2])/2),this.q,this.s.set(o,1,l+.05)),this.mesh.setMatrixAt(this.index,this.m),this.index=(this.index+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0)}this.last.set(t,[e,n,i])}};var ua=Re.damp,Fu=["CHASE CAMERA","FAR CHASE CAMERA","HOOD CAMERA","CINEMATIC CAMERA"],kc=class{constructor(t){this.camera=t,this.mode=0,this.pos=new U,this.look=new U,this.desired=new U,this.target=new U,this.yaw=0,this.shake=0,this.cine=null,this.cineTimer=0,this.baseFov=55,this.rumble=0,this.clock=0}snap(t){this.yaw=t.heading,this.cine=null,this.compute(t,0),this.pos.copy(this.desired),this.look.copy(this.target),this.apply(0)}compute(t,e){let n=Math.min(Math.abs(t.speed)/55,1),i=Math.hypot(t.vx,t.vz)>4?Math.atan2(-t.vx,-t.vz):t.heading,r=t.heading+pp(i-t.heading)*.35;t.speed<-1&&(r=t.heading),this.yaw=e?this.yaw+pp(r-this.yaw)*(1-Math.exp(-4.5*e)):r;let o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=t.group.position;if(this.mode===2){let h=Math.sin(t.heading),l=Math.cos(t.heading);this.desired.set(c.x-h*.15,c.y+1.18,c.z-l*.15),this.target.set(c.x-h*30,c.y+.9,c.z-l*30)}else if(this.mode===3)this.cinematic(t,e);else{let h=this.mode===1,l=(h?11.5:7.4)+n*1.6,f=(h?4.6:2.45)+n*.25;this.desired.set(c.x+o*l,c.y+f,c.z+a*l),this.target.set(c.x-o*6,c.y+1.15,c.z-a*6)}}cinematic(t,e){let n=t.group.position;this.cineTimer-=e;let i=-Math.sin(t.heading),r=-Math.cos(t.heading);if(!this.cine||this.cine.distanceTo(n)>70||this.cineTimer<=0){let a=Math.random()<.5?-1:1,c=28+Math.abs(t.speed)*1.6;this.cine=new U(n.x+i*c+r*a*7,n.y+.7+Math.random()*2.5,n.z+r*c-i*a*7),this.cineTimer=7,this.pos.copy(this.cine)}this.desired.copy(this.cine),this.target.set(n.x,n.y+.8,n.z)}apply(t){let e=this.camera;if(e.position.copy(this.pos),this.shake>.001){let n=this.shake;e.position.x+=(Math.random()-.5)*n,e.position.y+=(Math.random()-.5)*n,e.position.z+=(Math.random()-.5)*n,this.shake=ua(this.shake,0,6,t||.016)}if(this.rumble>5e-4){let n=this.clock,i=this.rumble;e.position.y+=(Math.sin(n*37)*.6+Math.sin(n*61.3)*.4)*i,e.position.x+=(Math.sin(n*29.1+1.3)*.5+Math.sin(n*53.7)*.3)*i*.6}e.lookAt(this.look)}update(t,e){this.compute(t,e),this.mode===2?(this.pos.copy(this.desired),this.look.copy(this.target)):this.mode===3?(this.pos.lerp(this.desired,1-Math.exp(-3*e)),this.look.lerp(this.target,1-Math.exp(-10*e))):(this.pos.x=ua(this.pos.x,this.desired.x,9,e),this.pos.z=ua(this.pos.z,this.desired.z,9,e),this.pos.y=ua(this.pos.y,this.desired.y,6,e),this.look.lerp(this.target,1-Math.exp(-12*e)));let n=Math.min(Math.abs(t.speed)/60,1)*12,i=(this.mode===2?68:this.mode===3?40:this.baseFov)+(this.mode===3?0:n+(t.boosting?7:0));this.camera.fov=ua(this.camera.fov,i,3,e),this.camera.updateProjectionMatrix(),this.clock+=e;let r=Re.clamp((Math.abs(t.speed)-26)/40,0,1),o=t.surface==="road"?1:2.2;this.rumble=this.mode===3?0:(r*.02+(t.boosting?.014:0))*o*(this.mode===2?.6:1),t.boosting&&(this.shake=Math.max(this.shake,.02)),this.apply(e)}orbit(t,e){let n=t.group.position,i=2.25+Math.sin(e*.05)*.5;this.camera.position.set(n.x+Math.sin(i)*9.5,n.y+1.6+Math.sin(e*.11)*.25,n.z+Math.cos(i)*9.5),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.camera.lookAt(n.x-1.5,n.y+1.1,n.z-2)}};function pp(s){return Math.atan2(Math.sin(s),Math.cos(s))}var ri=[];for(let s=0;s<ve.length;s++)for(let t=0;t<ye.length;t++)ri.push({x:ve[s],z:ye[t],i:s,j:t});var fa=(s,t)=>s>=0&&t>=0&&s<ve.length&&t<ye.length?s*ye.length+t:-1;function mp(s,t){let e=null;return ve.forEach((n,i)=>{let r=Math.min(Math.max(t,ye[0]),ye[ye.length-1]),o=Math.hypot(s-n,t-r);if(!e||o<e.d){let a=ye.findIndex(h=>h>=r);a<0&&(a=ye.length-1);let c=ye[a]===r?a:Math.max(0,a-1);e={d:o,x:n,z:r,ends:[fa(i,c),fa(i,a)]}}}),ye.forEach((n,i)=>{let r=Math.min(Math.max(s,ve[0]),ve[ve.length-1]),o=Math.hypot(s-r,t-n);if(o<e.d){let a=ve.findIndex(h=>h>=r);a<0&&(a=ve.length-1);let c=ve[a]===r?a:Math.max(0,a-1);e={d:o,x:r,z:n,ends:[fa(c,i),fa(a,i)]}}}),e}function Nu(s,t,e,n){let i=mp(s,t),r=mp(e,n),o=ri.length,a=o,c=o+1,h=m=>m===a?i:m===c?r:ri[m],l=m=>{if(m===a)return i.ends.map(_=>[_,Math.hypot(ri[_].x-i.x,ri[_].z-i.z)]);let d=[];if(m<o){let{i:_,j:M}=ri[m];for(let[y,w]of[[1,0],[-1,0],[0,1],[0,-1]]){let A=fa(_+y,M+w);A>=0&&d.push([A,Math.hypot(ri[A].x-ri[m].x,ri[A].z-ri[m].z)])}r.ends.includes(m)&&d.push([c,Math.hypot(r.x-ri[m].x,r.z-ri[m].z)])}return d};if(i.ends[0]===r.ends[0]&&i.ends[1]===r.ends[1])return[[s,t],[i.x,i.z],[r.x,r.z],[e,n]];let p=new Float64Array(o+2).fill(1/0),u=new Int32Array(o+2).fill(-1),g=new Uint8Array(o+2);for(p[a]=0;;){let m=-1,d=1/0;for(let _=0;_<o+2;_++)!g[_]&&p[_]<d&&(m=_,d=p[_]);if(m<0||m===c)break;g[m]=1;for(let[_,M]of l(m)){let y=d+M;y<p[_]&&(p[_]=y,u[_]=m)}}let x=[];for(let m=c;m>=0;m=u[m]){let d=h(m);if(x.unshift([d.x,d.z]),m===a)break}return x.unshift([s,t]),x.push([e,n]),x}function gp(s){let t=0;for(let e=1;e<s.length;e++)t+=Math.hypot(s[e][0]-s[e-1][0],s[e][1]-s[e-1][1]);return t}var zu=s=>document.getElementById(s),oe={x0:-760,x1:Ce+140,z0:fe.minZ-90,z1:fe.maxZ+90},Hc=.6;function zy(s){let t=document.createElement("canvas");t.width=Math.round((oe.x1-oe.x0)*Hc),t.height=Math.round((oe.z1-oe.z0)*Hc);let e=t.getContext("2d");e.scale(Hc,Hc),e.translate(-oe.x0,-oe.z0);let n=oe.x1-oe.x0,i=oe.z1-oe.z0;e.fillStyle="#16343f",e.fillRect(oe.x0,oe.z0,n,i),e.fillStyle="#243229",e.fillRect(An,oe.z0,oe.x1-An,i),e.fillStyle="#1e2a2e",e.fillRect(An,fe.minZ,fe.maxX-An,fe.maxZ-fe.minZ),e.fillStyle="#6d6047",e.fillRect(An,oe.z0,un-An,i),e.fillStyle="#2d4433",e.fillRect(un,oe.z0,Qe.to-un,i);for(let[r,o,a]of Pi())e.fillStyle="#29353a",e.fillRect(r-si/2,o-si/2,si,si),a.kind==="park"&&(e.fillStyle="#2f4a35",e.fillRect(r-55,o-55,110,110)),a.kind==="parking"&&(e.fillStyle="#323b40",e.fillRect(r-45,o-45,104,104));e.fillStyle="#3e4f56";for(let r of s)e.fillRect(r.x-r.w,r.z-r.d,r.w*2,r.d*2);e.fillStyle="#5b6b6e";for(let r of ve)e.fillRect(r-re,Ee-re,re*2,Le-Ee+re*2);for(let r of ye)e.fillRect(ke-re,r-re,Ce-ke+re*2,re*2);e.fillStyle="#7d6a52";for(let r of Rn)e.fillRect(r.x1,r.z-r.halfWidth,r.rampStart-r.x1,r.halfWidth*2);return t}function Oy(){let s={};for(let[n,i]of Pi()){let r=mi(n,i),o=s[r]||(s[r]=[0,0,0]);o[0]+=n,o[1]+=i,o[2]++}let t={eastside:[-40,-420],foothills:[-60,380],seaview:[0,60],palm:[40,-40],marina:[60,0]},e=Object.entries(s).map(([n,[i,r,o]])=>[Xi[n][0],i/o+(t[n]?.[0]||0),r/o+(t[n]?.[1]||0)]);return e.push([Xi.ocean[0],-385,0]),e}var Gc=class{constructor(t){this.canvas=zu("minimap"),this.ctx=this.canvas.getContext("2d"),this.mapImage=zy(t),this.expanded=!1,this.labels=Oy(),this.view={zoom:1,x:(oe.x0+oe.x1)/2,z:(oe.z0+oe.z1)/2},this.raceKey="",this.route=null,this.routeKey="",this.routeAt=[0,0],this.raceRoute=null,this.els={};for(let e of["speed","gear","tach-fill","boost-fill","district","road-name","heading","race-time","checkpoint-distance","clock","rpm-readout"])this.els[e]=zu(e);this.last={}}set(t,e){this.last[t]!==e&&(this.last[t]=e,this.els[t]&&(this.els[t].textContent=e))}updateRoute(t,e){let n=null;if(e.mode==="race"&&e.checkpoint<e.route.length?n=e.route[e.checkpoint]:e.waypoint&&(n=e.waypoint),!n){this.route=null,this.routeKey="";return}let i=n.join(",")+(e.mode==="race"?":"+e.checkpoint:""),r=Math.hypot(t.x-this.routeAt[0],t.z-this.routeAt[1]);if(i!==this.routeKey||r>12){this.route=Nu(t.x,t.z,n[0],n[1]),this.routeKey=i,this.routeAt=[t.x,t.z];let o=e.mode==="race"?`${e.raceId}:${e.checkpoint}`:"";if(o!==this.raceKey&&(this.raceKey=o,this.raceRoute=null,o)){this.raceRoute=[];for(let a=e.checkpoint;a<e.route.length-1;a++)this.raceRoute.push(Nu(...e.route[a],...e.route[a+1]))}}}get routeDistance(){return this.route?gp(this.route):0}setWanted(t,e){let n=t+(e?"e":"");if(this.last.wanted===n)return;this.last.wanted=n;let i=zu("wanted");i.classList.toggle("hidden",t===0),i.classList.toggle("evading",e),i.querySelectorAll("i").forEach((r,o)=>r.classList.toggle("on",o<t))}update(t,e,n,i,r){let o=Math.round(t.kmh);this.set("speed",String(o).padStart(3,"0")),this.set("gear",t.gear<0?"R":o<1&&!t.throttle?"N":String(t.gear));let a=t.def?.redline??7400;this.els["tach-fill"].style.width=Math.min(100,t.rpm/a*100).toFixed(1)+"%",this.els["tach-fill"].classList.toggle("redline",t.rpm>a-800),this.els["boost-fill"].style.width=t.nitro.toFixed(1)+"%",this.els["boost-fill"].classList.toggle("active",t.boosting),this.set("rpm-readout",(t.rpm/1e3).toFixed(1));let[c]=Mc(t.x,t.z);this.set("district",c),this.set("road-name",Ad(t.x,t.z));let h=["N","NW","W","SW","S","SE","E","NE"];this.set("heading",h[(Math.round(t.heading/(Math.PI/4))%8+8)%8]),this.set("clock",i.clockLabel),this.updateRoute(t,e),e.mode==="race"&&(this.set("race-time",da(e.raceTime)),e.route[e.checkpoint]&&this.set("checkpoint-distance",Math.round(this.routeDistance)+" M")),r&&this.setWanted(r.level,r.evading),this.drawMap(t,e,n,r)}mapScale(){return Math.min(this.canvas.width/(oe.x1-oe.x0),this.canvas.height/(oe.z1-oe.z0))*this.view.zoom}mapPoint(t,e){let n=this.canvas.getBoundingClientRect(),i=(t-n.left)/n.width*this.canvas.width,r=(e-n.top)/n.height*this.canvas.height,o=this.mapScale();return[(i-this.canvas.width/2)/o+this.view.x,(r-this.canvas.height/2)/o+this.view.z]}clampView(){let t=this.view;t.zoom=Math.min(Math.max(t.zoom,1),8);let e=(oe.x1-oe.x0)/2*(1-1/t.zoom),n=(oe.z1-oe.z0)/2*(1-1/t.zoom);t.x=Math.min(Math.max(t.x,(oe.x0+oe.x1)/2-e),(oe.x0+oe.x1)/2+e),t.z=Math.min(Math.max(t.z,(oe.z0+oe.z1)/2-n),(oe.z0+oe.z1)/2+n)}zoomAt(t,e,n){if(!this.expanded)return;let i=this.canvas.getBoundingClientRect(),[r,o]=this.mapPoint(e??i.left+i.width/2,n??i.top+i.height/2),a=this.view.zoom;this.view.zoom=Math.min(Math.max(a*t,1),8);let c=a/this.view.zoom;this.view.x=r+(this.view.x-r)*c,this.view.z=o+(this.view.z-o)*c,this.clampView()}panBy(t,e){if(!this.expanded)return;let n=this.canvas.getBoundingClientRect(),i=this.mapScale()*(n.width/this.canvas.width);this.view.x-=t/i,this.view.z-=e/i,this.clampView()}pick(t,e,n){if(!this.expanded)return;let[i,r]=this.mapPoint(t,e);n.waypoint&&Math.hypot(n.waypoint[0]-i,n.waypoint[1]-r)<40/this.view.zoom+12?n.waypoint=null:n.waypoint=[Math.min(Math.max(i,ke),Ce),Math.min(Math.max(r,Ee),Le)],this.routeKey=""}polyline(t,e){t.beginPath(),e.forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke()}drawMap(t,e,n,i){let{canvas:r,ctx:o}=this;if(this.expanded){let u=r.getBoundingClientRect(),g=Math.min(devicePixelRatio||1,2),x=Math.round(u.width*g),m=Math.round(u.height*g);if(x>0&&m>0&&(r.width!==x||r.height!==m)&&(r.width=x,r.height=m),this.fitPending&&x>0){this.fitPending=!1;let d=Math.min(x/(oe.x1-oe.x0),m/(oe.z1-oe.z0));this.view.zoom=Math.min(Math.max(x/(fe.maxX-oe.x0-260)/d,1),8),this.clampView()}}let a=r.width,c=r.height;if(o.setTransform(1,0,0,1,0,0),o.fillStyle="#16343f",o.fillRect(0,0,a,c),o.save(),this.expanded){let u=this.mapScale();o.translate(a/2,c/2),o.scale(u,u),o.translate(-this.view.x,-this.view.z)}else o.translate(a/2,c*.62),o.scale(.85,.85),o.rotate(t.heading),o.translate(-t.x,-t.z);o.imageSmoothingQuality="high",o.drawImage(this.mapImage,oe.x0,oe.z0,oe.x1-oe.x0,oe.z1-oe.z0);let h=this.expanded?r.width/Math.max(r.getBoundingClientRect().width,1):1,l=this.expanded?.95*h/this.mapScale():1;if(this.expanded){o.fillStyle="#fff4dc88",o.font=`700 ${13*h/this.mapScale()}px "Barlow Condensed", Barlow, Arial`,o.textAlign="center",o.textBaseline="middle";for(let[u,g,x]of this.labels)u==="OCEAN DRIVE"?(o.save(),o.translate(g,x),o.rotate(-Math.PI/2),o.fillText(u,0,0),o.restore()):o.fillText(u,g,x)}if(o.lineJoin=o.lineCap="round",this.raceRoute){o.strokeStyle="#ffc68650",o.lineWidth=5*l;for(let u of this.raceRoute)this.polyline(o,u)}if(this.route){let u=e.mode==="race"?"#ffb46b":"#c690ff";o.strokeStyle="#0b141acc",o.lineWidth=11*l,this.polyline(o,this.route),o.strokeStyle=u,o.lineWidth=7*l,this.polyline(o,this.route)}o.fillStyle="#c9d3d6";for(let u of n.cars)u.police||o.fillRect(u.x-2.5*l,u.z-2.5*l,5*l,5*l);let f=Math.floor(performance.now()/180)%2;for(let u of n.police){let g=u.mode==="chase";g&&i&&(o.fillStyle=i.evading?"#3a6cff14":"#ff3a4a12",o.beginPath(),o.arc(u.x,u.z,i.sightRange(),0,Math.PI*2),o.fill()),o.fillStyle=g?f?"#ff4458":"#4a7dff":"#5f8dff",o.beginPath(),o.arc(u.x,u.z,(g?6:4)*l,0,Math.PI*2),o.fill()}if(e.mode==="race"&&e.checkpoint<e.route.length&&e.route.forEach(([u,g],x)=>{x<e.checkpoint||(o.beginPath(),o.arc(u,g,(x===e.checkpoint?11:6)*l,0,Math.PI*2),o.fillStyle=x===e.checkpoint?"#ffc686":"#ffc68677",o.fill(),this.expanded&&(o.fillStyle="#17212a",o.font=`700 ${9*l}px Barlow, Arial`,o.textAlign="center",o.textBaseline="middle",o.fillText(String(x+1),u,g+1)))}),e.waypoint&&e.mode!=="race"){let[u,g]=e.waypoint;o.fillStyle="#c690ff",o.beginPath(),o.arc(u,g-14*l,9*l,Math.PI,0),o.lineTo(u,g),o.closePath(),o.fill(),o.fillStyle="#ffffff",o.beginPath(),o.arc(u,g-14*l,3.5*l,0,Math.PI*2),o.fill()}o.translate(t.x,t.z),o.rotate(-t.heading);let p=this.expanded?1.7*l:1;if(o.shadowColor="#000",o.shadowBlur=8,o.fillStyle="#ff8a52",o.beginPath(),o.moveTo(0,-13*p),o.lineTo(8*p,9*p),o.lineTo(0,4*p),o.lineTo(-8*p,9*p),o.closePath(),o.fill(),o.restore(),this.expanded){let u=r.width/Math.max(r.getBoundingClientRect().width,1);o.fillStyle="#0b161ccc",o.fillRect(0,0,a,40*u),o.fillRect(0,c-36*u,250*u,36*u),o.fillStyle="#fff4dccc",o.font=`600 ${13*u}px Barlow, Arial`,o.textAlign="left",o.textBaseline="top",o.fillText(e.mode==="race"?`${e.raceName} \xB7 FOLLOW THE ORANGE LINE`:"CLICK TO SET A WAYPOINT \xB7 SCROLL OR PINCH TO ZOOM \xB7 DRAG TO MOVE",16*u,13*u),o.fillStyle="#5f8dff",o.fillRect(16*u,c-24*u,10*u,10*u),o.fillStyle="#c9d3d6",o.fillRect(110*u,c-24*u,10*u,10*u),o.fillStyle="#fff4dccc",o.fillText("POLICE",32*u,c-26*u),o.fillText("TRAFFIC",126*u,c-26*u)}if(!this.expanded){let u=t.heading,g=a/2+Math.sin(-u)*-(c*.42),x=c*.62-Math.cos(u)*(c*.42);o.fillStyle="#fff4dc",o.font="600 22px Barlow, Arial",o.textAlign="center",o.textBaseline="middle",o.fillText("N",Math.min(a-16,Math.max(16,g)),Math.min(c-16,Math.max(16,x)))}}setExpanded(t,e=null){this.expanded=t,this.view.zoom=1,this.fitPending=t,e&&(this.view.x=e.x,this.view.z=e.z),this.clampView(),this.canvas.width=t?1100:480,this.canvas.height=t?1100:360}};function da(s){let t=Math.floor(s/60),e=Math.floor(s%60),n=Math.floor(s*100%100);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`}var Ou={v8:{pulses:4,lump:.32,tone:1,intake:.5,sub:.6,rasp:.35,redline:7400},bigblock:{pulses:4,lump:.55,tone:.72,intake:.35,sub:.9,rasp:.5,redline:6400},v10:{pulses:5,lump:.14,tone:1.45,intake:.85,sub:.35,rasp:.25,redline:8800}},Ii=[{id:"wave",name:"PACIFIC WAVE 101.4",genre:"Synthwave",bpm:100,swing:0,chords:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]},{id:"tide",name:"LOW TIDE 94.7",genre:"Lo-fi beats",bpm:82,swing:.16,chords:[[50,53,57,60,64],[55,59,62,65,69],[48,52,55,59,62],[57,61,64,67,70]]},{id:"funk",name:"KZRO 88.1 COAST FUNK",genre:"Funk",bpm:112,swing:.08,chords:[[52,55,59,62],[52,55,59,62],[57,61,64,67],[55,59,62,65]]}],$i=s=>440*Math.pow(2,(s-69)/12),Vc=class{constructor(){this.ctx=null,this.enabled=!1,this.engineDef=Ou.v8,this.station=-1,this.wasBoosting=!1,this.scrapeLevel=0,this.nextAmbient={horn:6,bird:2,gull:4,cricket:1,siren:30},this.sirenLevel=0}unlock(){this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.start()}start(){if(this.ctx){this.ctx.resume();return}let t;try{t=new(window.AudioContext||window.webkitAudioContext)}catch{return}this.ctx=t;let e=this.master=t.createGain();e.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,e.connect(n).connect(t.destination);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=t.createBuffer(1,i,t.sampleRate),a=r.getChannelData(0),c=o.getChannelData(0),h=0;for(let u=0;u<i;u++)a[u]=Math.random()*2-1,h=(h+.02*a[u])/1.02,c[u]=h*3.5;this.noiseBuffer=r;let l=(u=r)=>{let g=t.createBufferSource();return g.buffer=u,g.loop=!0,g.start(0,Math.random()*1.5),g};this.reverb=t.createConvolver();let f=Math.floor(t.sampleRate*1.8),p=t.createBuffer(2,f,t.sampleRate);for(let u=0;u<2;u++){let g=p.getChannelData(u);for(let x=0;x<f;x++)g[x]=(Math.random()*2-1)*Math.pow(1-x/f,3.2)}this.reverb.buffer=p,this.reverbOut=t.createGain(),this.reverbOut.gain.value=.32,this.reverb.connect(this.reverbOut).connect(e),this.buildEngine(l),this.buildTires(l),this.buildWorld(l,o),this.buildRadio()}buildEngine(t){let e=this.ctx;this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.Q.value=2.2,this.engineDrive=e.createWaveShaper();let n=new Float32Array(1024);for(let c=0;c<1024;c++)n[c]=Math.tanh((c/1023*2-1)*2.6);this.engineDrive.curve=n;let i=new Float32Array(24),r=new Float32Array(24);for(let c=1;c<24;c++)r[c]=1/c*(c%2?1:.6)*Math.exp(-c*.08);let o=e.createPeriodicWave(i,r);this.oscs=[],this.subGain=e.createGain();for(let[c,h,l]of[[1,.55,"wave"],[1.006,.3,"sawtooth"],[.5,1,"sine"]]){let f=e.createOscillator();l==="wave"?f.setPeriodicWave(o):f.type=l;let p=e.createGain();p.gain.value=h,f.connect(p).connect(c===.5?this.subGain:this.engineDrive),f.start(),this.oscs.push([f,c])}this.subGain.connect(this.engineDrive);let a=e.createGain();this.lumpOsc=e.createOscillator(),this.lumpOsc.type="triangle",this.lumpDepth=e.createGain(),this.lumpOsc.connect(this.lumpDepth).connect(a.gain),this.lumpOsc.start(),this.engineDrive.connect(a).connect(this.engineFilter).connect(this.engineGain).connect(this.master),this.raspFilter=e.createBiquadFilter(),this.raspFilter.type="bandpass",this.raspFilter.Q.value=1.4,this.raspGain=e.createGain(),this.raspGain.gain.value=0,t().connect(this.raspFilter).connect(this.raspGain).connect(a),this.intake=e.createOscillator(),this.intake.type="square",this.intakeFilter=e.createBiquadFilter(),this.intakeFilter.type="bandpass",this.intakeFilter.Q.value=3,this.intakeGain=e.createGain(),this.intakeGain.gain.value=0,this.intake.connect(this.intakeFilter).connect(this.intakeGain).connect(this.engineGain),this.intake.start(),this.whine=e.createOscillator(),this.whine.type="sine",this.whineGain=e.createGain(),this.whineGain.gain.value=0,this.whine.connect(this.whineGain).connect(this.master),this.whine.start(),this.turbo=e.createOscillator(),this.turbo.type="sine",this.turboGain=e.createGain(),this.turboGain.gain.value=0,this.turbo.connect(this.turboGain).connect(this.master),this.turbo.start(),this.applyEngine()}setEngine(t){this.engineDef=Ou[t]||Ou.v8,this.applyEngine()}applyEngine(){if(!this.ctx)return;let t=this.engineDef,e=this.ctx.currentTime;this.lumpDepth.gain.setTargetAtTime(t.lump,e,.05),this.subGain.gain.setTargetAtTime(t.sub,e,.05)}buildTires(t){let e=this.ctx;this.screechFilter=e.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.value=1350,this.screechFilter.Q.value=5,this.screechGain=e.createGain(),this.screechGain.gain.value=0,t().connect(this.screechFilter).connect(this.screechGain).connect(this.master),this.squeal=e.createOscillator(),this.squeal.type="sawtooth";let n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=1100,n.Q.value=8,this.squealGain=e.createGain(),this.squealGain.gain.value=0;let i=e.createOscillator();i.frequency.value=9;let r=e.createGain();r.gain.value=22,i.connect(r).connect(this.squeal.frequency),i.start(),this.squeal.connect(n).connect(this.squealGain).connect(this.master),this.squeal.start(),this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windGain=e.createGain(),this.windGain.gain.value=0,t().connect(this.windFilter).connect(this.windGain).connect(this.master);let o=e.createBiquadFilter();o.type="highpass",o.frequency.value=2200,this.nitroGain=e.createGain(),this.nitroGain.gain.value=0,t().connect(o).connect(this.nitroGain).connect(this.master);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=220,this.roarGain=e.createGain(),this.roarGain.gain.value=0,t().connect(a).connect(this.roarGain).connect(this.master),this.scrapeFilter=e.createBiquadFilter(),this.scrapeFilter.type="bandpass",this.scrapeFilter.frequency.value=2400,this.scrapeFilter.Q.value=2.5,this.scrapeGain=e.createGain(),this.scrapeGain.gain.value=0,t().connect(this.scrapeFilter).connect(this.scrapeGain).connect(this.master)}buildWorld(t,e){let n=this.ctx,i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=520,this.surfGain=n.createGain(),this.surfGain.gain.value=0,t().connect(i).connect(this.surfGain).connect(this.master);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=380,this.humGain=n.createGain(),this.humGain.gain.value=0,t(e).connect(r).connect(this.humGain).connect(this.master),this.siren=n.createOscillator(),this.siren.type="sawtooth",this.siren.frequency.value=900;let o=n.createOscillator();o.frequency.value=.32;let a=n.createGain();a.gain.value=380,o.connect(a).connect(this.siren.frequency),o.start();let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=1100,c.Q.value=1.2,this.sirenGain=n.createGain(),this.sirenGain.gain.value=0,this.siren.connect(c).connect(this.sirenGain).connect(this.master),this.siren.start(),this.ambientBus=n.createGain(),this.ambientBus.gain.value=0,this.ambientBus.connect(this.master),this.ambientBus.connect(this.reverb)}setEnabled(t){this.enabled=t,t&&this.start(),this.ctx&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.1)}update(t){if(!this.ctx)return;let e=this.ctx.currentTime,{rpm:n,throttle:i,speed:r,slip:o,boosting:a,active:c,shoreDistance:h,time:l,gear:f=1,ratio:p=3,city:u=.5,night:g=0,nearTrees:x=0}=t,m=c?1:0,d=this.engineDef,_=n/60*d.pulses;for(let[b,S]of this.oscs)b.frequency.setTargetAtTime(_*S*.5,e,.025);this.lumpOsc.frequency.setTargetAtTime(n/120,e,.05);let M=n/d.redline,y=i*(.75+Math.min(Math.max(f,1),6)*.05);this.engineFilter.frequency.setTargetAtTime((220+n*.14+y*n*.3)*d.tone,e,.04),this.engineGain.gain.setTargetAtTime(m*(.065+y*.085+M*.05),e,.04),this.raspFilter.frequency.setTargetAtTime(_*3,e,.05),this.raspGain.gain.setTargetAtTime(m*d.rasp*(.15+i*.6)*.5,e,.05),this.intake.frequency.setTargetAtTime(_*2,e,.03),this.intakeFilter.frequency.setTargetAtTime(900+n*.35,e,.05),this.intakeGain.gain.setTargetAtTime(m*d.intake*i*M*M*.035,e,.05);let w=Math.abs(r);this.whine.frequency.setTargetAtTime(Math.max(40,w*p*14),e,.05),this.whineGain.gain.setTargetAtTime(m*(f>0&&f<=2?1:.25)*Math.min(w/20,1)*.006,e,.1),this.turbo.frequency.setTargetAtTime(1400+n*.55,e,.1),this.turboGain.gain.setTargetAtTime(m*i*M*M*.01,e,.1);let A=m*Math.min(Math.max(o-3,0)/10,1);this.screechGain.gain.setTargetAtTime(A*.075,e,.06),this.screechFilter.frequency.setTargetAtTime(1100+Math.min(o,20)*25,e,.1),this.squeal.frequency.setTargetAtTime(820+Math.min(o,20)*18,e,.08),this.squealGain.gain.setTargetAtTime(A*A*.05,e,.05),this.windGain.gain.setTargetAtTime(m*Math.min((w/60)**2,1)*.1,e,.2),this.windFilter.frequency.setTargetAtTime(400+w*18,e,.2),a&&!this.wasBoosting&&m&&this.whoosh(),this.wasBoosting=a,this.nitroGain.gain.setTargetAtTime(m*(a?.045:0),e,.06),this.roarGain.gain.setTargetAtTime(m*(a?.12:0),e,.1),this.scrapeGain.gain.setTargetAtTime(m*this.scrapeLevel*.09,e,.04),this.scrapeLevel*=.6;let I=Math.max(0,1-h/140),D=.55+.45*Math.sin(l*.7)*Math.sin(l*.23+1);this.surfGain.gain.setTargetAtTime(I*D*.11,e,.3),this.humGain.gain.setTargetAtTime(m*(.025+u*.05)*(1-g*.55),e,.6),this.ambientBus.gain.setTargetAtTime(m,e,.4),this.sirenGain.gain.setTargetAtTime(m*this.sirenLevel*.05,e,.15),m&&this.ambient(l,{city:u,night:g,surfNear:I,nearTrees:x}),this.radioActive=c,this.radioTick(c)}ambient(t,{city:e,night:n,surfNear:i,nearTrees:r}){let o=this.nextAmbient;t>o.horn&&(o.horn=t+7+Math.random()*16/(.4+e),this.horn(60+Math.random()*140,!0)),n<.5&&t>o.bird&&(o.bird=t+2+Math.random()*6,(r>.2||Math.random()<.3)&&this.chirp()),n<.5&&i>.3&&t>o.gull&&(o.gull=t+5+Math.random()*9,this.gull()),n>.5&&t>o.cricket&&(o.cricket=t+.7+Math.random()*1.6,this.cricket(e)),t>o.siren&&(o.siren=t+40+Math.random()*60,e>.4&&this.distantSiren())}burst(t,e,n,i,r=1,o=this.master,a=0){if(!this.ctx||!this.enabled)return;let c=this.ctx,h=c.currentTime+a,l=c.createBufferSource();l.buffer=this.noiseBuffer;let f=c.createBiquadFilter();f.type=e,f.frequency.value=n,f.Q.value=r;let p=c.createGain();p.gain.setValueAtTime(i,h),p.gain.exponentialRampToValueAtTime(1e-4,h+t),l.connect(f).connect(p).connect(o),l.start(h,Math.random()),l.stop(h+t+.05)}tone(t,e,n,i,{dest:r=this.master,when:o=0,attack:a=.005,slideTo:c=0,q:h=0,filter:l=0}={}){if(!this.ctx||!this.enabled)return;let f=this.ctx,p=f.currentTime+o,u=f.createOscillator();u.type=t,u.frequency.setValueAtTime(e,p),c&&u.frequency.exponentialRampToValueAtTime(c,p+n);let g=f.createGain();g.gain.setValueAtTime(1e-4,p),g.gain.linearRampToValueAtTime(i,p+a),g.gain.exponentialRampToValueAtTime(1e-4,p+n);let x=u;if(l){let m=f.createBiquadFilter();m.type="bandpass",m.frequency.value=l,m.Q.value=h||2,x=u.connect(m)}x.connect(g).connect(r),u.start(p),u.stop(p+n+.05)}impact(t){if(!this.ctx||!this.enabled)return;let e=this.ctx.currentTime;if(e-(this.lastImpact||0)<.07)return;this.lastImpact=e;let n=Math.min(t/20,1);this.burst(.35+n*.3,"lowpass",300+n*900,.25+n*.6),this.tone("sine",70+n*30,.25,.25*n+.08,{slideTo:40});for(let i of[1,2.76,5.4])this.tone("triangle",420*i*(.9+Math.random()*.2),.18+n*.4,.04*n/i+.01,{filter:420*i,q:12});if(n>.4)for(let i=0;i<6;i++)this.tone("sine",3e3+Math.random()*4e3,.08+Math.random()*.1,.02*n,{when:.02+Math.random()*.2})}scrape(t){this.scrapeLevel=Math.max(this.scrapeLevel,Math.min(t/25,1)),this.ctx&&this.scrapeFilter.frequency.setTargetAtTime(1800+Math.random()*1600,this.ctx.currentTime,.02)}whoosh(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuffer;let i=t.createBiquadFilter();i.type="bandpass",i.Q.value=1.6,i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(3800,e+.45);let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.32,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+.9),n.connect(i).connect(r).connect(this.master),n.start(e,Math.random()),n.stop(e+1)}backfire(){!this.ctx||!this.enabled||(this.burst(.09,"lowpass",900,.35),this.tone("square",60,.08,.08))}shift(t){t&&this.burst(.18,"highpass",1800,.07)}horn(t,e=!1){if(!this.ctx||!this.enabled)return;let n=this.ctx,i=n.currentTime,r=Math.min(.12,6/Math.max(t,6)*.12)*(e?.6:1),o=e?.3+Math.random()*.5:.45,a=n.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(r,i+.02),a.gain.setValueAtTime(r,i+o),a.gain.linearRampToValueAtTime(0,i+o+.1);let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=e?900:1800;let h=e?300+Math.random()*120:349;for(let l of[h,h*1.26]){let f=n.createOscillator();f.type="square",f.frequency.value=l,f.connect(c),f.start(i),f.stop(i+o+.15)}c.connect(a).connect(e?this.ambientBus:this.master)}chirp(){let t=2600+Math.random()*2200,e=2+Math.floor(Math.random()*4);for(let n=0;n<e;n++)this.tone("sine",t*(1+Math.random()*.1),.07,.012,{dest:this.ambientBus,when:n*.11,slideTo:t*1.35})}gull(){for(let t=0;t<2+Math.floor(Math.random()*2);t++)this.tone("sawtooth",1500,.32,.01,{dest:this.ambientBus,when:t*.38,slideTo:900,filter:1400,q:3})}cricket(t){let e=4300+Math.random()*500,n=.006*(1.2-t*.8);for(let i=0;i<3;i++)this.tone("sine",e,.035,n,{dest:this.ambientBus,when:i*.06})}distantSiren(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle";let i=t.createOscillator();i.frequency.value=.35;let r=t.createGain();r.gain.value=220,n.frequency.value=780,i.connect(r).connect(n.frequency);let o=t.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.012,e+2),o.gain.linearRampToValueAtTime(0,e+8),n.connect(o).connect(this.ambientBus),n.start(e),i.start(e),n.stop(e+8.2),i.stop(e+8.2)}setSiren(t){this.sirenLevel=t}chime(t=!1){if(!this.ctx||!this.enabled)return;let e=this.ctx,n=e.currentTime;(t?[523.25,659.25,783.99,1046.5]:[659.25,987.77]).forEach((r,o)=>{let a=e.createOscillator();a.type="triangle",a.frequency.value=r;let c=e.createGain(),h=n+o*.09;c.gain.setValueAtTime(0,h),c.gain.linearRampToValueAtTime(.12,h+.01),c.gain.exponentialRampToValueAtTime(1e-4,h+.6),a.connect(c).connect(this.master),a.start(h),a.stop(h+.65)})}countBeep(t=!1){this.tone("square",t?880:440,t?.5:.18,.06,{filter:t?1800:900,q:1})}buildRadio(){let t=this.ctx;this.radioGain=t.createGain(),this.radioGain.gain.value=0;let e=t.createBiquadFilter();e.type="highpass",e.frequency.value=55;let n=t.createBiquadFilter();n.type="highshelf",n.frequency.value=7e3,n.gain.value=-5,this.radioIn=t.createGain(),this.radioIn.connect(e).connect(n).connect(this.radioGain).connect(this.master),this.radioSend=t.createGain(),this.radioSend.gain.value=.5,this.radioSend.connect(this.reverb),this.radioStep=0,this.radioNext=0,this.radioActive=!1,setInterval(()=>this.radioTick(this.radioActive),40)}get stationName(){return this.station<0?"RADIO OFF":Ii[this.station].name}setStation(t){this.station=t,this.ctx&&(this.radioStep=0,this.radioNext=this.ctx.currentTime+.25,this.burst(.28,"bandpass",2200,.08,.7))}nextStation(){return this.setStation(this.station+1>=Ii.length?-1:this.station+1),this.stationName}radioTick(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=t&&this.station>=0&&this.enabled;if(this.radioGain.gain.setTargetAtTime(n?.75:0,e,.15),!n){this.radioNext=0;return}let i=Ii[this.station],r=60/i.bpm/4;for(this.radioNext<e&&(this.radioNext=e+.05);this.radioNext<e+.3;){let o=this.radioStep,a=o%2?i.swing*r:0;this.playStep(i,o,this.radioNext+a,r),this.radioNext+=r,this.radioStep++}}playStep(t,e,n,i){let r=Math.max(0,n-this.ctx.currentTime),o=Math.floor(e/16),a=e%16,c=t.chords[o%t.chords.length],h=c[0],l=u=>{let g=Math.sin((e+u*31.7)*12.9898+this.station*7.1)*43758.5453;return g-Math.floor(g)},f=this.radioIn,p=this.radioSend;if(t.id==="wave"){a%4===0&&this.kick(r,.5),(a===4||a===12)&&this.snare(r,.28,!0),a%2===0&&this.hat(r,.05,!1),a%2===0&&this.synth("sawtooth",$i(h-24),i*1.8,.11,r,{cutoff:700,env:900});let u=[0,1,2,1,0,2,1,2];if(this.synth("square",$i(c[u[a%8]]+12),i*.9,.03,r,{cutoff:2400,env:1200,send:.6}),a===0)for(let g of c)this.synth("sawtooth",$i(g),i*15,.022,r,{cutoff:1300,attack:.4,detune:9,send:1});if(o%4>=2&&[0,3,6,10,12].includes(a)){let g=[0,3,5,7,10,12];this.synth("sawtooth",$i(h+12+g[Math.floor(l(1)*g.length)]),i*2.6,.035,r,{cutoff:3e3,env:0,send:.8,detune:6})}}else if(t.id==="tide"){if((a===0||a===7||a===10)&&this.kick(r,.42),(a===4||a===12)&&this.snare(r,.16,!1),a%2===0&&this.hat(r,.025+l(2)*.015,!1),a===0||a===6)for(let u of c)this.synth("sine",$i(u),i*7,.03,r+l(3)*.02,{cutoff:1800,attack:.01,trem:!0,send:.7});(a===0||a===10)&&this.synth("sine",$i(h-12),i*5,.16,r,{cutoff:400}),l(4)<.35&&this.burst(.01,"highpass",3e3,.02+l(5)*.03,1,f,r),a===0&&this.burst(i*16,"bandpass",1200,.004,.4,f,r)}else{(a===0||a===6||a===8||a===11)&&this.kick(r,.45),(a===4||a===12)&&this.snare(r,.24,!1),this.hat(r,a%4===2?.06:.03,a%4===2);let g=[0,null,12,0,null,0,10,null,0,null,12,7,null,0,10,12][a];if(g!==null&&this.synth("square",$i(h-24+g),i*.8,.09,r,{cutoff:500,env:1400}),[2,7,10,14].includes(a))for(let x of c.slice(1))this.synth("square",$i(x+12),i*.5,.018,r,{cutoff:2600,env:2e3,q:6});if(o%8===7&&(a===0||a===3))for(let x of c)this.synth("sawtooth",$i(x+12),i*2,.025,r,{cutoff:2200,send:.6,detune:12})}}synth(t,e,n,i,r,{cutoff:o=2e3,env:a=0,attack:c=.005,detune:h=0,send:l=0,trem:f=!1,q:p=1}={}){let u=this.ctx,g=u.currentTime+r,x=u.createBiquadFilter();x.type="lowpass",x.Q.value=p,x.frequency.setValueAtTime(o+a,g),a&&x.frequency.exponentialRampToValueAtTime(Math.max(o,60),g+Math.min(n,.3));let m=u.createGain();m.gain.setValueAtTime(1e-4,g),m.gain.linearRampToValueAtTime(i,g+c),m.gain.setValueAtTime(i,g+Math.max(c,n*.6)),m.gain.exponentialRampToValueAtTime(1e-4,g+n+.08);for(let _ of h?[-h,h]:[0]){let M=u.createOscillator();M.type=t,M.frequency.value=e,M.detune.value=_,M.connect(x),M.start(g),M.stop(g+n+.12)}let d=x.connect(m);if(f){let _=u.createGain(),M=u.createOscillator();M.frequency.value=4.5;let y=u.createGain();y.gain.value=.25,M.connect(y).connect(_.gain),M.start(g),M.stop(g+n+.12),d=d.connect(_)}if(d.connect(this.radioIn),l){let _=u.createGain();_.gain.value=l,d.connect(_).connect(this.radioSend)}}kick(t,e){let n=this.ctx,i=n.currentTime+t,r=n.createOscillator();r.frequency.setValueAtTime(140,i),r.frequency.exponentialRampToValueAtTime(42,i+.12);let o=n.createGain();o.gain.setValueAtTime(e,i),o.gain.exponentialRampToValueAtTime(1e-4,i+.38),r.connect(o).connect(this.radioIn),r.start(i),r.stop(i+.4)}snare(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=1400;let c=i.createGain(),h=n?.32:.16;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c),c.connect(this.radioIn),n&&c.connect(this.radioSend),o.start(r,Math.random()),o.stop(r+h+.05);let l=i.createOscillator();l.type="triangle",l.frequency.setValueAtTime(220,r),l.frequency.exponentialRampToValueAtTime(150,r+.08);let f=i.createGain();f.gain.setValueAtTime(e*.6,r),f.gain.exponentialRampToValueAtTime(1e-4,r+.1),l.connect(f).connect(this.radioIn),l.start(r),l.stop(r+.12)}hat(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=7500;let c=i.createGain(),h=n?.22:.045;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c).connect(this.radioIn),o.start(r,Math.random()),o.stop(r+h+.05)}};var Wc=class{constructor(){this.keys=new Set,this.state={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},this.padButtons=new Set,this.onPadPress=null}clear(){this.keys.clear()}poll(){let t=this.keys,e=t.has("KeyW")||t.has("ArrowUp")?1:0,n=t.has("KeyS")||t.has("ArrowDown")?1:0,i=(t.has("KeyA")||t.has("ArrowLeft")?1:0)-(t.has("KeyD")||t.has("ArrowRight")?1:0),r=t.has("Space"),o=t.has("ShiftLeft")||t.has("ShiftRight"),a=navigator.getGamepads?navigator.getGamepads():[];for(let c of a){if(!c||!c.connected)continue;let h=c.axes[0]||0;Math.abs(h)>.12&&(i=-Math.sign(h)*((Math.abs(h)-.12)/.88)**1.4);let l=c.buttons[7]?.value||0,f=c.buttons[6]?.value||0;e=Math.max(e,l),n=Math.max(n,f),r=r||!!c.buttons[0]?.pressed,o=o||!!c.buttons[1]?.pressed||!!c.buttons[2]?.pressed;for(let[p,u]of[[3,"camera"],[9,"pause"],[8,"map"],[5,"reset"]]){let g=!!c.buttons[p]?.pressed,x=c.index+":"+p;g&&!this.padButtons.has(x)&&this.onPadPress?.(u),g?this.padButtons.add(x):this.padButtons.delete(x)}}return Object.assign(this.state,{throttle:e,brake:n,steer:i,handbrake:r,nitro:o}),this.state}};var Dt=s=>document.getElementById(s),Xc=matchMedia("(pointer:coarse)").matches,By=Xc&&Math.min(screen.width,screen.height)<600,Xe={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{localStorage.setItem(s,t)}catch{}}};function xp(s){Dt("loading").classList.add("hidden"),Dt("error").classList.remove("hidden"),console.error(s)}async function ky(){let s;try{if(s=new gc(Dt("world")),!s.renderer.capabilities.isWebGL2)throw new Error("WebGL 2 unavailable")}catch(E){xp(E);return}let t=s.renderer,e=new Fs,n=new dn(55,innerWidth/innerHeight,.2,5600);n.layers.enable(1),s.init(e,n);let i=E=>(Dt("loading-step").textContent=E,new Promise(j=>setTimeout(j,0)));await i("Painting the sky\u2026");let r=new vc(t,e);await i("Paving the boulevards\u2026"),Dd(e,t),await i("Raising the skyline\u2026");let o=kd(e,t);await i("Rolling in the surf\u2026");let a=Hd(e,t);await i("Planting palms\u2026");let c=Xd(e,t),h=new Ic,l=qd(e,t,a.pier.lamps,h),f=ip(e,t,h,l.lamps,c.trunkColliders);await i("Fueling up\u2026");let p=Xe.get("pacific-car");sr[p]||(p="coupe");let u=new Ac(e,t,p),g=new Sc(t,e);{let E=jr(t);E.glassClear.userData.envBoost=1.25,E.chrome.userData.envBoost=1.2,g.attach([u.paint,E.glassClear,E.chrome,E.rim])}let x=new Nc(e,t),m=new Oc(e),d=dp(e,t),_=new Bc(e),M=new Be,y=ia(16761466,.9),w=new ae(1.1,1.1,40,20,1,!0);w.translate(0,20,0);let A=[-1,1].map(E=>{let j=new Bt(w,y);return j.userData.noAO=!0,j.layers.set(1),M.add(j),{mesh:j,side:E}}),I=new sn({color:new Ut(3,1.8,.8),transparent:!0,opacity:.8,depthWrite:!1,blending:Nn}),D=new Bt(new Co(_c-.6,_c,72),I);D.rotation.x=-Math.PI/2,D.position.y=.06,D.userData.noAO=!0,M.add(D);let b=new Bt(new wi(1.6,2.6,3),new sn({color:new Ut(4,2.4,1.1)}));b.rotation.z=Math.PI,b.userData.noAO=!0,M.add(b),M.visible=!1,e.add(M);let S=[...o.colliders,...f.solids],N=[...c.trunkColliders,...l.circles,...f.circles],H={colliders:o.colliders,boxes:S,circles:N,boxGrid:new ir(80).addAll(S),buildingGrid:new ir(80).addAll(o.colliders.map(E=>({...E}))),circleGrid:new Zn(24).addAll(N),pileGrid:new Zn(24).addAll(Rn.flatMap(E=>E.piles||[])),piles:Rn.flatMap(E=>E.piles||[])};x.world=H,Sd(e);let B=new Uc(x,H.buildingGrid),O=new kc(n),Y=new Gc(o.colliders),X=new Vc,it=new Wc,R={state:"intro",paused:!1,mode:"free",raceTime:0,checkpoint:0,countdown:0,raceId:"sunset",route:yn.sunset.route,raceName:yn.sunset.name,splits:[],topSpeed:0,crashes:0,waypoint:null,lastX:fn.x,lastZ:fn.z,time:0,frame:0,flash:0},ut=Xe.get("pacific-quality")||(By?"low":Xc?"medium":"high");["ultra","high","medium","low"].includes(ut)||(ut="high");let xt=Xe.get("pacific-time")||"cycle",Et=Xe.get("pacific-road")||"auto";!(xt in yc)&&xt!=="cycle"&&(xt="golden");function Lt(E){ut=E,Xe.set("pacific-quality",E),s.setQuality(E);let j=s.quality;r.setShadowQuality(j.shadow,j.shadowRange),a.setReflections(j.reflections>0,j.reflections),g.setSize(j.carProbe),Dt("quality").value=E}s.onResize=()=>a.resize(s.quality.reflections);let Vt=!1;function qt(E){xt=E,Xe.set("pacific-time",E),r.cycle=E==="cycle",E!=="cycle"?r.setHours(yc[E]):Vt||r.setHours(18.95),Vt=Vt||E==="cycle",r.envDirty=!0,Dt("time-select").value=E}u.reset(fn.x,fn.z,fn.heading);let $t=Xe.get("pacific-color");$t&&wt($t),Lt(ut),qt(xt);let ot;function at(E){let j=Dt("toast");j.textContent=E,j.classList.add("show"),clearTimeout(ot),ot=setTimeout(()=>j.classList.remove("show"),2400)}function wt(E){u.setColor(E),Xe.set("pacific-color",E),document.querySelectorAll(".swatch").forEach(j=>{let mt=j.dataset.color===E;j.classList.toggle("active",mt),j.setAttribute("aria-pressed",String(mt))})}function Wt(E,j=!1){if(!sr[E])return;p=E,Xe.set("pacific-car",E);let mt=sr[E];if(u.key!==E){let{x:bt,z:Gt,heading:At}=u;u.setModel(E),u.reset(bt,Gt,At),O.snap?.(u)}Dt("car-name").textContent=mt.name,Dt("car-blurb").textContent=mt.blurb,Dt("car-spec").textContent=mt.spec,Dt("hud-car").textContent=mt.name,Dt("car-menu").value=E;for(let bt of["speed","accel","grip"])Dt(`stat-${bt}`).style.width=`${Math.round(mt.stats[bt]*100)}%`;X.setEngine?.(mt.engine),j&&at(mt.name)}let It=E=>Wt(oa[(oa.indexOf(p)+E+oa.length)%oa.length]),nt=[],Ft=0;function L({item:E,x:j,z:mt,speed:bt,nx:Gt,nz:At}){R.time-Ft>.08&&(X.impact(Math.min(2+bt*.35,E.type==="lamp"?9:6)),Ft=R.time),O.shake=Math.max(O.shake,E.type==="lamp"?.22:.08);let Ot=E.sparks?14:4;for(let Jt=0;Jt<Ot;Jt++)E.sparks?d.sparks.emit(j,ie+.4+gt()*.5,mt,Gt*3+(gt()-.5)*6,1+gt()*4,At*3+(gt()-.5)*6,.1+gt()*.08,.3+gt()*.4,1,6,3.2,1):d.dust.emit(j,ie+.3,mt,(gt()-.5)*3,gt()*2,(gt()-.5)*3,.5,.9,.35,.55,.5,.42);E.type==="hydrant"&&nt.push({x:j,z:mt,t:16}),(E.type==="lamp"||E.type==="hydrant")&&Ie("vandalism",j,mt,1)}function Nt(){if(R.checkpoint>=R.route.length)return;let[E,j]=R.route[R.checkpoint];M.position.set(E,0,j);let mt=Math.abs(E-Yi(E))<1;for(let bt of A)bt.mesh.position.set(mt?bt.side*(re+1):0,0,mt?0:bt.side*(re+1));Dt("checkpoint-count").textContent=`${R.checkpoint+1} / ${R.route.length}`}function Rt(E){R.mode=E,R.state="play",R.paused=!1,it.clear();for(let mt of["intro","intro-location","intro-footer"])Dt(mt).classList.add("hidden");Dt("hud").classList.remove("hidden"),document.body.classList.add("playing"),document.body.classList.toggle("racing",E==="race"),Dt("race").classList.toggle("hidden",E!=="race"),Dt("start-trial").classList.toggle("hidden",E==="race"),Dt("mode-label").textContent=E==="race"?"TIME TRIAL":"FREE ROAM",Dt("mission-title").textContent=E==="race"?"Follow the afterglow.":"Take the long way home.",Dt("mission-subtitle").textContent=E==="race"?`Pass through all ${R.route.length} golden checkpoints.`:"Explore Vista Pac\xEDfica at your own pace.",R.raceTime=0,R.checkpoint=0,R.splits=[],R.topSpeed=0,R.crashes=0;let j=E==="race"?yn[R.raceId].start||fn:fn;u.reset(j.x,j.z,j.heading),R.lastX=u.x,R.lastZ=u.z,M.visible=E==="race",h.restoreAll(),B.reset(),Nt(),O.snap(u),X.setEnabled(z),R.countdown=E==="race"?3.6:0,q(E==="race"?"3":""),E!=="race"&&at("WELCOME TO VISTA PAC\xCDFICA")}let Ct="";function q(E){if(E===Ct)return;Ct=E;let j=Dt("countdown");j.textContent=E,j.classList.toggle("hidden",!E),j.classList.toggle("go",E==="GO"),j.classList.remove("pop"),j.offsetWidth,j.classList.add("pop"),E&&X.countBeep?.(E==="GO")}function W(E){return R.countdown<=0?!1:(R.countdown-=E,R.countdown>.6?q(String(Math.ceil(R.countdown-.6))):R.countdown>0?q("GO"):(q(""),R.countdown=0),R.countdown>.6)}function G(){R.paused=!0,it.clear(),X.chime(!0),Dt("final-time").textContent=da(R.raceTime);let E=Number(Xe.get(ft(R.raceId)))||null;!E||R.raceTime<E?(Xe.set(ft(R.raceId),String(R.raceTime)),Dt("best-time").textContent="A new personal best. Make the coast remember it."):Dt("best-time").textContent="PERSONAL BEST  "+da(E);let j=u.distance/Math.max(R.raceTime,.1)*3.6;Dt("result-stats").innerHTML=`<span><b>${Math.round(R.topSpeed*3.6)}</b> KM/H TOP</span><span><b>${Math.round(j)}</b> KM/H AVG</span><span><b>${R.crashes}</b> ${R.crashes===1?"CRASH":"CRASHES"}</span><span><b>${sr[p].name}</b></span>`,Dt("result").showModal(),M.visible=!1,zt(R.raceId)}function rt(E=!1){Dt("result").open||(R.paused=!0,it.clear(),Dt("menu-title").textContent=E?"Make it your drive.":"Take a breather.",Dt("menu-description").textContent=E?"Tune the look of the coast to your machine.":"The coast will be right here.",Dt("resume").textContent=R.state==="intro"?"BACK TO THE COAST":"BACK TO THE DRIVE",Dt("back-title").classList.toggle("hidden",R.state==="intro"),Dt("restart-race").textContent=(R.mode==="race"&&R.state==="play"?"RESTART ":"START ")+R.raceName,Dt("menu").open||Dt("menu").showModal())}function Z(){Dt("menu").close(),R.paused=!1,it.clear()}function Q(E){O.mode=E??(O.mode+1)%Fu.length,Dt("camera-select").value=O.mode,R.state==="play"&&(at(Fu[O.mode]),O.snap(u))}function T(){let E=["golden","dusk","night","dawn","noon","cycle"],j=E[(E.indexOf(xt)+1)%E.length];qt(j),at({golden:"GOLDEN HOUR",dusk:"BLUE HOUR",night:"MIDNIGHT",dawn:"FIRST LIGHT",noon:"HIGH NOON",cycle:"LIVE DAY CYCLE"}[j])}function v(){R.state==="play"&&(Y.setExpanded(!Y.expanded,u),document.querySelector(".map-panel").classList.toggle("expanded",Y.expanded),Dt("map-button").setAttribute("aria-label",Y.expanded?"Close expanded map":"Expand map"))}function C(){if(R.mode==="race"){R.raceTime=0,R.checkpoint=0;let E=yn[R.raceId].start||fn;u.reset(E.x,E.z,E.heading),Nt(),at("RUN RESTARTED")}else u.safeRespawn(),at("BACK ON THE ROAD");R.lastX=u.x,R.lastZ=u.z,O.snap(u)}function F(){Z(),R.state="intro",M.visible=!1,document.body.classList.remove("playing","racing"),Dt("hud").classList.add("hidden"),Y.expanded&&k(!1);for(let E of["intro","intro-location","intro-footer"])Dt(E).classList.remove("hidden");u.reset(fn.x,fn.z,fn.heading)}function k(E){Y.setExpanded(E),document.querySelector(".map-panel").classList.toggle("expanded",E)}let z=Xe.get("pacific-sound")!=="off";function K(){Dt("sound").setAttribute("aria-label",z?"Mute sound":"Enable sound"),Dt("sound").querySelector("span").style.display=z?"none":"block"}K(),Dt("drive").onclick=()=>{Pe(),Rt("free")},Dt("trial").onclick=()=>{Pe(),Rt("race")},Dt("start-trial").onclick=()=>Rt("race"),Dt("pause").onclick=()=>rt(),Dt("settings").onclick=()=>rt(!0),Dt("close-menu").onclick=Z,Dt("resume").onclick=Z,Dt("restart-race").onclick=()=>{Z(),Rt("race")},Dt("back-title").onclick=F,Dt("menu").addEventListener("cancel",E=>{E.preventDefault(),Z()}),Dt("result").addEventListener("cancel",E=>E.preventDefault()),Dt("race-again").onclick=()=>{Dt("result").close(),Rt("race")},Dt("free-roam").onclick=()=>{Dt("result").close(),Rt("free")},Dt("quality").onchange=E=>Lt(E.target.value),Dt("time-select").onchange=E=>qt(E.target.value),Dt("road-select").value=Et,Dt("road-select").onchange=E=>{Et=E.target.value,Xe.set("pacific-road",Et)},Dt("camera-select").onchange=E=>Q(Number(E.target.value)),Dt("sound").onclick=()=>{z=!z,Xe.set("pacific-sound",z?"on":"off"),X.setEnabled(z&&R.state==="play"),z&&X.start(),K(),at(z?"SOUND ON":"SOUND OFF")},Dt("map-button").onclick=v;{let E=Dt("minimap"),j=new Map,mt=0,bt=0;E.addEventListener("wheel",At=>{Y.expanded&&(At.preventDefault(),Y.zoomAt(At.deltaY<0?1.25:.8,At.clientX,At.clientY))},{passive:!1}),E.addEventListener("pointerdown",At=>{Y.expanded&&(E.setPointerCapture(At.pointerId),j.set(At.pointerId,[At.clientX,At.clientY]),j.size===1&&(mt=0),bt=0)}),E.addEventListener("pointermove",At=>{let Ot=j.get(At.pointerId);if(!(!Ot||!Y.expanded)&&(j.size===1&&(mt+=Math.abs(At.clientX-Ot[0])+Math.abs(At.clientY-Ot[1]),mt>6&&Y.panBy(At.clientX-Ot[0],At.clientY-Ot[1])),j.set(At.pointerId,[At.clientX,At.clientY]),j.size===2)){let[Jt,ee]=[...j.values()],Qt=Math.hypot(Jt[0]-ee[0],Jt[1]-ee[1]);bt>0&&Qt>0&&Y.zoomAt(Qt/bt,(Jt[0]+ee[0])/2,(Jt[1]+ee[1])/2),bt=Qt,mt=99}});let Gt=At=>{j.delete(At.pointerId)&&Y.expanded&&j.size===0&&mt<=6&&At.type==="pointerup"&&Y.pick(At.clientX,At.clientY,R),bt=0};E.addEventListener("pointerup",Gt),E.addEventListener("pointercancel",Gt),Dt("map-zoom-in").onclick=()=>Y.zoomAt(1.5),Dt("map-zoom-out").onclick=()=>Y.zoomAt(1/1.5)}for(let E of document.querySelectorAll(".swatch"))E.onclick=()=>wt(E.dataset.color);function J(E,j=!0){X.setStation(E),Xe.set("pacific-radio",String(E)),Dt("radio-select").value=String(E),Dt("radio-name").textContent=E<0?"OFF":Ii[E].name,Dt("radio-genre").textContent=E<0?"Q TO TUNE":Ii[E].genre.toUpperCase(),document.querySelector(".radio").classList.toggle("off",E<0),j&&R.state==="play"&&at(E<0?"RADIO OFF":`\u266A ${Ii[E].name}`)}Dt("radio-select").onchange=E=>J(Number(E.target.value),!1);function st(E){u.setHandling(E),Xe.set("pacific-handling",u.mode),Dt("handling-select").value=u.mode}Dt("handling-select").onchange=E=>{st(E.target.value),R.state==="play"&&at(ra[u.mode].label)},st(Xe.get("pacific-handling")||"easy");let Mt={slow:.6,standard:1,off:0},$="slow";function lt(E){$=E in Mt?E:"slow",x.policePace=Mt[$]||.6,Xe.set("pacific-police",$),Dt("police-select").value=$,$==="off"&&B.reset()}Dt("police-select").onchange=E=>{lt(E.target.value),R.state==="play"&&at({slow:"RELAXED POLICE",standard:"STANDARD POLICE",off:"POLICE OFF"}[$])},lt(Xe.get("pacific-police")||"slow");let Tt=Object.keys(yn),ft=E=>E==="sunset"?"pacific-best":"pacific-best-"+E,St=E=>E.toLowerCase().replace(/\b\w/g,j=>j.toUpperCase());function zt(E){yn[E]||(E="sunset"),R.raceId=E,R.route=yn[E].route,R.raceName=yn[E].name,Xe.set("pacific-race",E),Dt("race-select").value=E,Dt("race-name").textContent=yn[E].name;let j=Number(Xe.get(ft(E)));Dt("race-info").textContent=`${yn[E].route.length} CHECKPOINTS \xB7 ${j?"BEST "+da(j):yn[E].blurb.toUpperCase()}`,Dt("trial").firstChild.textContent=yn[E].name+" ",Dt("start-trial").firstChild.textContent=`Start ${St(yn[E].name)} `,Dt("start-trial").querySelector("span").textContent=`${yn[E].route.length} CHECKPOINTS`,document.querySelector("#race > span").textContent=yn[E].name,document.querySelector("#result .eyebrow").textContent=yn[E].name+" COMPLETE"}let V=E=>zt(Tt[(Tt.indexOf(R.raceId)+E+Tt.length)%Tt.length]);Dt("race-prev").onclick=()=>V(-1),Dt("race-next").onclick=()=>V(1),Dt("race-select").onchange=E=>zt(E.target.value),zt(Xe.get("pacific-race")||"sunset");let _t=Xe.get("pacific-fps")!=="off",Pt=Dt("fps"),pt={frames:0,time:0,worst:0};function vt(E){_t=E,Xe.set("pacific-fps",E?"on":"off"),Dt("fps-select").value=E?"on":"off",Pt.classList.toggle("hidden",!E)}Dt("fps-select").onchange=E=>vt(E.target.value==="on"),vt(_t);let dt=Number(Xe.get("pacific-radio")??0);J(Number.isInteger(dt)&&dt<Ii.length?dt:0,!1);let Yt=()=>X.unlock();for(let E of["pointerdown","keydown","touchend","click"])addEventListener(E,Yt,{once:!0});Dt("car-prev").onclick=()=>It(-1),Dt("car-next").onclick=()=>It(1),Dt("car-menu").onchange=E=>Wt(E.target.value,R.state==="play"),Wt(p);let se=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);addEventListener("keydown",E=>{if(E.target.tagName!=="SELECT"&&(se.has(E.code)&&E.preventDefault(),!E.repeat)){if(E.code==="Escape"){E.preventDefault(),Dt("menu").open?Z():R.state==="play"&&rt();return}if(E.code==="Enter"&&R.state==="intro"&&!R.paused){Rt("free");return}if(R.state==="intro"&&!R.paused&&(E.code==="ArrowLeft"||E.code==="ArrowRight")){It(E.code==="ArrowLeft"?-1:1);return}if(E.code==="KeyT"&&!R.paused){T();return}if(!(R.state!=="play"||R.paused)){if(E.code==="KeyP")return rt();if(E.code==="KeyR")return C();if(E.code==="KeyC")return Q();if(E.code==="KeyM")return v();if(Y.expanded&&(E.code==="Equal"||E.code==="NumpadAdd"))return Y.zoomAt(1.5);if(Y.expanded&&(E.code==="Minus"||E.code==="NumpadSubtract"))return Y.zoomAt(1/1.5);if(E.code==="KeyH"){X.horn(3);return}if(E.code==="KeyF"){vt(!_t),at(_t?"FPS COUNTER ON":"FPS COUNTER OFF");return}if(E.code==="KeyQ"){J(X.station+1>=Ii.length?-1:X.station+1);return}it.keys.add(E.code)}}}),addEventListener("keyup",E=>it.keys.delete(E.code)),addEventListener("blur",()=>{it.clear(),R.state==="play"&&!R.paused&&rt()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(it.clear(),R.state==="play"&&!R.paused&&rt())}),it.onPadPress=E=>{if(E==="pause")return R.paused?Z():R.state==="play"?rt():Rt("free");R.state!=="play"||R.paused||(E==="camera"&&Q(),E==="map"&&v(),E==="reset"&&C())};for(let E of document.querySelectorAll("[data-key]")){let j=()=>{it.keys.delete(E.dataset.key),E.classList.remove("pressed")};E.addEventListener("pointerdown",mt=>{mt.preventDefault(),!R.paused&&(E.setPointerCapture(mt.pointerId),it.keys.add(E.dataset.key),E.classList.add("pressed"))}),E.addEventListener("pointerup",j),E.addEventListener("pointercancel",j),E.addEventListener("lostpointercapture",j)}addEventListener("resize",()=>s.applySize()),Dt("touch-cam").onclick=()=>Q(),Dt("touch-radio").onclick=()=>J(X.station+1>=Ii.length?-1:X.station+1),Dt("touch-reset").onclick=()=>{R.state==="play"&&!R.paused&&C()},addEventListener("contextmenu",E=>{Xc&&E.preventDefault()}),document.addEventListener("gesturestart",E=>E.preventDefault()),addEventListener("touchmove",E=>{R.state==="play"&&!E.target.closest("dialog, .map-panel.expanded")&&E.preventDefault()},{passive:!1});function Pe(){if(!Xc)return;let E=document.documentElement,j=E.requestFullscreen||E.webkitRequestFullscreen;j&&!document.fullscreenElement&&Promise.resolve(j.call(E,{navigationUI:"hide"})).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{}),innerHeight>innerWidth&&setTimeout(()=>at("TURN YOUR PHONE SIDEWAYS"),2600)}let jt=new U,Cn=new U,Je=new U,Ki=0,Kn="",bs=Dt("world-clock"),cr=document.querySelector(".sun-icon"),hr=new U,yi=new Ht,Ji=new Ht,_i=!1;function Ss(E,j,mt,bt,Gt,At,Ot){let Jt=0,ee=2e3;for(let Qt=0;Qt<3;Qt++){let de=Qt===0?E:Qt===1?j:mt,me=Qt===0?bt:Qt===1?Gt:At,te=Qt===0?Ot.x-Ot.w/2:Qt===1?0:Ot.z-Ot.d/2,Se=Qt===0?Ot.x+Ot.w/2:Qt===1?Ot.h:Ot.z+Ot.d/2;if(Math.abs(me)<1e-6){if(de<te||de>Se)return!1;continue}let ce=(te-de)/me,je=(Se-de)/me;if(ce>je){let oi=ce;ce=je,je=oi}if(Jt=Math.max(Jt,ce),ee=Math.min(ee,je),Jt>ee)return!1}return!0}function ws(){let E=r.sunDir,j=n.position;if(Je.copy(j).addScaledVector(E,1e3).project(n),r.elevation<-.5||Je.z>1||E.y<.75&&o.topsGrid.segment(j.x,j.z,j.x+E.x*900,j.z+E.z*900,bt=>Ss(j.x,j.y,j.z,E.x,E.y,E.z,bt)))return 0;for(let bt=60;bt<3200;bt*=1.35)if(j.y+E.y*bt<gi(j.x+E.x*bt,j.z+E.z*bt))return 0;let mt=Math.max(Math.abs(Je.x),Math.abs(Je.y));return Re.clamp(1.25-mt,0,1)*Re.smoothstep(r.elevation,-.5,4)}function ur(E){let j=Math.abs(u.speed)>3,mt=u.slip>3.2&&j||u.wheelspin>.3,bt=u.surface==="sand"&&u.y<.5;u.group.updateMatrixWorld();let Gt=new Ut().copy(r.hemi.color).multiplyScalar(r.hemi.intensity*.55).add(new Ut().copy(r.sun.color).multiplyScalar(r.elevation>0?r.sun.intensity*.22:0));d.smoke.uniforms.light.value.copy(Gt),d.dust.uniforms.light.value.copy(Gt),d.water.uniforms.light.value.copy(Gt).multiplyScalar(1.3);for(let ee=nt.length-1;ee>=0;ee--){let Qt=nt[ee];if(Qt.t-=E,Qt.t<=0){nt.splice(ee,1);continue}let de=Math.min(1,Qt.t/3)*70*E;for(let me=0;me<de+(gt()<de%1?1:0);me++)d.water.emit(Qt.x+(gt()-.5)*.2,ie+.3,Qt.z+(gt()-.5)*.2,(gt()-.5)*1.6,8.5+gt()*3.5,(gt()-.5)*1.6,.35+gt()*.25,1.5+gt()*.6,.5,.8,.88,.95)}u.wheels.forEach((ee,Qt)=>{if(ee.front)return;jt.set(ee.x,.05,ee.z).applyMatrix4(u.group.matrixWorld),_.add(Qt,jt.x,u.y,jt.z,!bt&&(mt||u.brake>0&&u.speed>14&&u.handbrake),.24);let de=Math.min(1,(u.slip-3)/9)+u.wheelspin;!bt&&mt&&gt()<de*60*E&&d.smoke.emit(jt.x,jt.y+.3,jt.z,u.vx*.15+(gt()-.5)*1.5,.6+gt(),u.vz*.15+(gt()-.5)*1.5,1.2+gt()*.8,2.2+gt()*1.2,.5*Math.min(1,de+.3),.85,.85,.86),bt&&j&&gt()<Math.min(1,Math.abs(u.speed)/25)*40*E&&d.dust.emit(jt.x,jt.y+.2,jt.z,(gt()-.5)*2,.8+gt(),(gt()-.5)*2,.9+gt()*.6,1.4+gt(),.55,.78,.68,.52)});let At=hr.set(Math.sin(u.heading),0,Math.cos(u.heading));for(let ee of u.exhausts)if(jt.copy(ee).applyMatrix4(u.group.matrixWorld),u.boosting)for(let Qt=0;Qt<2;Qt++){let de=gt(),me=gt()<.35,te=7+gt()*5;d.flames.emit(jt.x,jt.y,jt.z,u.vx+At.x*te,gt()*.4,u.vz+At.z*te,.3+gt()*.25,.1+gt()*.08,1,me?.6:1.4+de,me?1.1:.8+de*1.4,me?4.5:2.8)}else u.throttle===0&&u.rpm>u.def.redline*.6&&gt()<3*E&&(d.flames.emit(jt.x,jt.y,jt.z,u.vx+At.x*3,0,u.vz+At.z*3,.35,.07,1,2.2,1.1,.4),X.backfire?.());let Ot=u.contact;if(Ot&&u.impact>3){let ee=Math.min(46,Math.floor(u.impact*2.2));for(let Qt=0;Qt<ee;Qt++)d.sparks.emit(Ot.x,u.y+.35+gt()*.4,Ot.z,Ot.nx*4+(gt()-.5)*9,1+gt()*5,Ot.nz*4+(gt()-.5)*9,.12+gt()*.1,.4+gt()*.5,1,6,3.2,1);if(u.impact>4)for(let Qt=0;Qt<4;Qt++)d.dust.emit(Ot.x,u.y+.5,Ot.z,(gt()-.5)*2,gt(),(gt()-.5)*2,.6,1.1,.35,.6,.58,.55);X.impact(u.impact),O.shake=Math.max(O.shake,Math.min(.55,u.impact*.035))}let Jt=u.scrape;if(Jt){let ee=Math.min(6,1+Math.floor(Jt.speed/8));for(let Qt=0;Qt<ee;Qt++)d.sparks.emit(Jt.x,u.y+.3+gt()*.3,Jt.z,-u.vx*.25+Jt.nx*2+(gt()-.5)*3,.5+gt()*2.5,-u.vz*.25+Jt.nz*2+(gt()-.5)*3,.1+gt()*.08,.25+gt()*.3,1,6,3,.9);X.scrape?.(Jt.speed)}}function fr(E){if(R.mode!=="race"||R.checkpoint>=R.route.length||R.countdown>.6)return;R.raceTime+=E,R.topSpeed=Math.max(R.topSpeed,Math.abs(u.speed));let[j,mt]=R.route[R.checkpoint],bt=R.lastX,Gt=R.lastZ,At=u.x-bt,Ot=u.z-Gt,Jt=At*At+Ot*Ot,ee=Jt?Re.clamp(((j-bt)*At+(mt-Gt)*Ot)/Jt,0,1):0;Math.hypot(j-bt-At*ee,mt-Gt-Ot*ee)<_c&&(R.checkpoint++,R.splits.push(R.raceTime),R.checkpoint===R.route.length?G():(Nt(),X.chime(),at(`CHECKPOINT ${R.checkpoint} / ${R.route.length}`),R.flash=1))}function Es(E,j){u.contact=null,u.scrape=null,u.impact=0,m.update(E,R.time,u),x.peds=m.onRoad,x.update(E,R.time,u,At=>X.horn(Math.hypot(At.x-u.x,At.z-u.z)),n);for(let At of m.events)At.type==="hit"&&(X.impact(Math.min(At.speed,8)),O.shake=Math.max(O.shake,.08),R.state==="play"&&Ie("pedestrian",u.x,u.z,1));if(R.state!=="play")return;W(E)&&(j={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},u.vx=u.vz=0);let mt=x.lastHit;mt&&mt.speed>4&&(R.crashes+=mt.speed>7?1:0,mt.police&&(mt.car.mode!=="chase"||B.level<2)?Ie("police",mt.x,mt.z,1,!1):(!mt.parked||mt.speed>8)&&Ie("crash",mt.x,mt.z,1));let bt=u.impact,Gt=Math.ceil(E/(1/120));for(let At=0;At<Gt&&(R.lastX=u.x,R.lastZ=u.z,u.update(E/Gt,j,H),bt=Math.max(bt,u.impact),fr(E/Gt),!R.paused);At++);h.collide(u,E,At=>L(At)),h.update(E,u),u.impact=Math.max(bt,u.impact),u.applyDamage(),Mi(),B.update(E,u,R.time,n,R.mode==="free"&&$!=="off");for(let At of B.events)At.type==="up"&&at(`WANTED  ${"\u2605".repeat(At.level)}`),At.type==="evaded"&&(at("YOU LOST THEM"),X.chime()),At.type==="busted"&&P()}function Ie(E,j,mt,bt,Gt=!0){R.mode!=="free"||$==="off"||B.crime(E,j,mt,bt,R.time,Gt)}let Hn=!1;function Mi(){let E=Yi(u.x),j=ms(u.z),mt=Math.abs(u.x-E)<re-1&&Math.abs(u.z-j)<re-1;if(mt&&!Hn&&Math.abs(u.speed)>9){let bt=Math.abs(u.vx)>Math.abs(u.vz)?1:0;vs(bt,R.time)===0&&Ie("red light",u.x,u.z,1)}Hn=mt}function P(){at("BUSTED"),R.flash=1.5,X.impact(4),u.safeRespawn(),R.lastX=u.x,R.lastZ=u.z,O.snap(u)}let tt=new Hs,ct=[u.group],ht=0;t.info.autoReset=!1;function et(){requestAnimationFrame(et),t.info.reset();let E=tt.getDelta(),j=Math.min(E,.05);R.time+=j,R.frame++;let mt=it.poll();R.paused||(Es(j,mt),R.state==="play"?(ur(j),O.update(u,j)):O.orbit(u,R.time)),u.setLights(r.lampFactor,u.gear<0?u.throttle>0:u.brake>0&&u.speed>.5,u.gear<0&&R.state==="play",j);let bt=jt.set(u.x-Math.sin(u.heading)*s.quality.shadowRange*.35,0,u.z-Math.cos(u.heading)*s.quality.shadowRange*.35);r.update(j,R.time,bt,n),_u.value.copy(r.sun.color).multiplyScalar(r.elevation>-1?r.sun.intensity:.1),o.update(r.lampFactor,R.time),ht-=E,ht<=0&&(ht=.2,xu(n.position.x,n.position.z)),l.update(R.time,r.lampFactor),f.update(r.lampFactor),a.mirrorHide.length=0,O.mode===2&&a.mirrorHide.push(u.group),a.update(R.time,r),x.sync(r.lampFactor,u,R.time);for(let Se of Object.values(d))Se.update(R.paused?0:j);M.visible&&(b.position.y=12+Math.sin(R.time*2)*.6,b.rotation.y=R.time*.8,y.uniforms.intensity.value=.55+Math.sin(R.time*3)*.12,I.opacity=.65+Math.sin(R.time*3)*.15),t.toneMappingExposure=r.exposure;let Gt=s.grade.uniforms;Gt.time.value=R.time,Ki=Re.damp(Ki,ws(),10,j),Gt.sunVisible.value=s.quality.grade?Ki*.8:0,Gt.sunPos.value.set(Je.x*.5+.5,Je.y*.5+.5),Gt.sunColor.value.copy(hn.fogSunColor.value),n.getWorldDirection(Cn);let At=Cn.dot(r.sunDir),Ot=Re.smoothstep(r.elevation,-1,2)*(1-Re.smoothstep(r.elevation,14,30)),Jt=s.shafts.uniforms;Jt.strength.value=Je.z<1?Re.smoothstep(At,.25,.85)*Ot*.9:0,Jt.sunPos.value.copy(Gt.sunPos.value),Jt.color.value.copy(r.sun.color).multiplyScalar(.9);let ee=Et==="wet"?.9:Et==="dry"?0:Re.smoothstep(r.lampFactor,.15,.85)*.85;if(Bn.wetness.value=ee,H.wetness=ee,n.updateMatrixWorld(),Ji.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Gt.camBlur.value.set(0,0),_i&&R.state==="play"&&!R.paused&&s.quality.grade){jt.copy(n.position).addScaledVector(Cn,80).applyMatrix4(yi);let Se=jt.x*.5,ce=jt.y*.5,je=Math.hypot(Se,ce);if(je<.12){let oi=je>.035?.035/je:1;Gt.camBlur.value.set(Se*oi,ce*oi)}}yi.copy(Ji),_i=!0;let Qt=Re.clamp((Math.abs(u.speed)-30)/35,0,1);Gt.speedBlur.value=R.state==="play"&&s.quality.grade?Qt*.6+(u.boosting?.45:0):0,R.flash=Math.max(0,R.flash-j*3),Gt.flash.value=R.flash,Gt.night.value=r.nightFactor,s.bloom&&(s.bloom.strength=.36+r.lampFactor*.22),s.beginFrame(),g.size&&!R.paused&&g.update(u.group.position,ct,Math.min(1,e.environmentIntensity*1.9),Se=>{let ce=r.sky.material.uniforms.skyDisc;a.mirror.paused=!0,ce.value=0,Se(),ce.value=1,a.mirror.paused=!1}),s.render(),R.state==="play"&&R.frame%2===0&&Y.update(u,R,x,r,B),X.setSiren(R.state==="play"?B.sirenLevel(u):0);let de=r.clockLabel;de!==Kn&&(Kn=de,bs.textContent=de,cr.textContent=r.elevation>-1.5?"\u2600":"\u263E");let me=Mc(u.x,u.z),te=u.gear>0?u.def.gears[u.gear-1]*u.def.final:u.def.gears[0]*u.def.final;if(X.update({rpm:u.rpm,throttle:u.throttle,speed:u.speed,slip:u.slip+u.wheelspin*12,boosting:u.boosting,active:R.state==="play"&&!R.paused,shoreDistance:Math.abs(n.position.x-An),time:R.time,gear:u.gear,ratio:te,night:r.nightFactor,city:me[2],nearTrees:me[3]>.5?.6:.2}),R.state==="play"&&!R.paused&&s.adapt(E),_t&&(pt.frames++,pt.time+=E,pt.worst=Math.max(pt.worst,E),pt.time>=.5)){let Se=pt.frames/pt.time,ce=pt.time/pt.frames*1e3;Pt.textContent=`${Math.round(Se)} FPS \xB7 ${ce.toFixed(1)} MS \xB7 WORST ${(pt.worst*1e3).toFixed(0)} \xB7 ${t.info.render.calls} DRAWS \xB7 ${(t.info.render.triangles/1e6).toFixed(1)}M TRIS \xB7 ${Math.round(s.scale*100)}% RES`,Pt.classList.toggle("slow",Se<50&&Se>=30),Pt.classList.toggle("bad",Se<30),pt.frames=0,pt.time=0,pt.worst=0}}u.onShift=E=>X.shift(E>0),await i("Warming up the engine\u2026"),O.orbit(u,0),r.update(0,0,jt.set(u.x,0,u.z),n),xu(u.x,u.z);try{await t.compileAsync(e,n)}catch{}et(),requestAnimationFrame(()=>Dt("loading").classList.add("hidden")),window.__pacific={getState:()=>({state:R.state,mode:R.mode,paused:R.paused,speed:u.speed,heading:u.heading,nitro:u.nitro,position:{x:u.x,z:u.z,y:u.y},checkpoint:R.checkpoint,raceTime:R.raceTime,quality:ut,time:r.hours,gear:u.gear,rpm:u.rpm,distanceTravelled:u.distance,renderScale:s.scale,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,wanted:B.level,countdown:R.countdown,car:p}),setTime:E=>{r.cycle=!1,r.setHours(E)},setQuality:Lt,teleport:(E,j,mt=0)=>{u.reset(E,j,mt),O.snap(u)},step:(E,j={})=>{let mt={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1,...j};for(let bt=0;bt<E&&!R.paused;bt+=1/60)R.time+=1/60,Es(1/60,mt);return O.snap(u),window.__pacific.getState()},parked:()=>({total:x.parked.length,near:x.nearParked.length,sample:x.nearParked.slice(0,3).map(E=>[E.type,+E.x.toFixed(1),+E.z.toFixed(1),E.slot])}),traffic:()=>x.cars.map(E=>({x:+E.x.toFixed(1),z:+E.z.toFixed(1),speed:+E.speed.toFixed(1),axis:E.axis,turn:!!E.turn,hit:!!E.hit})),reset:C,camera:Q,debug:{scene:e,atmosphere:r,pipeline:s,renderer:t,camera:n,rig:O,traffic:x,pedestrians:m,player:u,knock:h,world:H,audio:X,wanted:B,hud:Y,game:R,input:it,city:o,vegetation:c,lodStats:Fd},selectCar:Wt}}ky().catch(xp);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
