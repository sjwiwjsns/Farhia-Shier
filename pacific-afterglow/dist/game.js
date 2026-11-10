var Ju=0,lh=1,Qu=2;var ch=1,Ya=2,Ei=3,zi=0,Sn=1,sn=2,Vi=0,Ni=1,On=2,hh=3,uh=4,ju=5,ls=100,tf=101,ef=102,nf=103,sf=104,rf=200,of=201,af=202,lf=203,Sa=204,Ta=205,cf=206,hf=207,uf=208,ff=209,df=210,pf=211,mf=212,gf=213,xf=214,Za=0,$a=1,Ka=2,Ds=3,Ja=4,Qa=5,ja=6,tl=7,fh=0,vf=1,yf=2,di=0,_f=1,Mf=2,bf=3,wf=4,Ef=5,Sf=6,Tf=7;var dh=300,Bs=301,ks=302,el=303,nl=304,Do=306,cs=1e3,as=1001,Aa=1002,Cn=1003,Af=1004;var Lo=1005;var Fn=1006,il=1007;var ds=1008;var pi=1009,ph=1010,mh=1011,Fr=1012,sl=1013,ps=1014,mi=1015,gn=1016,rl=1017,ol=1018,Ur=1020,gh=35902,xh=35899,vh=1021,yh=1022,ei=1023,Er=1026,zr=1027,al=1028,ll=1029,_h=1030,cl=1031;var hl=1033,Fo=33776,Uo=33777,zo=33778,No=33779,ul=35840,fl=35841,dl=35842,pl=35843,ml=36196,gl=37492,xl=37496,vl=37808,yl=37809,_l=37810,Ml=37811,bl=37812,wl=37813,El=37814,Sl=37815,Tl=37816,Al=37817,Rl=37818,Cl=37819,Pl=37820,Il=37821,Dl=36492,Ll=36494,Fl=36495,Ul=36283,zl=36284,Nl=36285,Ol=36286;var lo=2300,Ra=2301,Ea=2302,th=2400,eh=2401,nh=2402;var Rf=3200,Bl=3201;var Mh=0,Cf=1,Wi="",En="srgb",Ls="srgb-linear",co="linear",ke="srgb";var Is=7680;var ih=519,Pf=512,If=513,Df=514,Oo=515,Lf=516,Ff=517,Uf=518,zf=519,sh=35044,ni=35048;var bh="300 es",ui=2e3,ho=2001;var Oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=1234567,oo=Math.PI/180,Fs=180/Math.PI;function Nr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[e&63|128]+An[e>>8&255]+"-"+An[e>>16&255]+An[e>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function wh(s,t){return(s%t+t)%t}function yp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function _p(s,t,e){return s!==t?(e-s)/(t-s):0}function ao(s,t,e){return(1-e)*s+e*t}function Mp(s,t,e,n){return ao(s,t,1-Math.exp(-e*n))}function bp(s,t=1){return t-Math.abs(wh(s,t*2)-t)}function wp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ep(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Sp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Tp(s,t){return s+Math.random()*(t-s)}function Ap(s){return s*(.5-Math.random())}function Rp(s){s!==void 0&&(Su=s);let t=Su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cp(s){return s*oo}function Pp(s){return s*Fs}function Ip(s){return(s&s-1)===0&&s!==0}function Dp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fp(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*l,c*f,c*d,a*h);break;case"YZY":s.set(c*d,a*l,c*f,a*h);break;case"ZXZ":s.set(c*f,c*d,a*l,a*h);break;case"XZX":s.set(a*l,c*g,c*u,a*h);break;case"YXY":s.set(c*u,a*l,c*g,a*h);break;case"ZYZ":s.set(c*g,c*u,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function br(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var _e={DEG2RAD:oo,RAD2DEG:Fs,generateUUID:Nr,clamp:Ae,euclideanModulo:wh,mapLinear:yp,inverseLerp:_p,lerp:ao,damp:Mp,pingpong:bp,smoothstep:wp,smootherstep:Ep,randInt:Sp,randFloat:Tp,randFloatSpread:Ap,seededRandom:Rp,degToRad:Cp,radToDeg:Pp,isPowerOfTwo:Ip,ceilPowerOfTwo:Dp,floorPowerOfTwo:Lp,setQuaternionFromProperEuler:Fp,normalize:Ln,denormalize:br},Yt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ve=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],h=n[i+1],l=n[i+2],f=n[i+3],d=r[o+0],u=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==d||h!==u||l!==g){let m=1-a,p=c*d+h*u+l*g+f*v,_=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let b=Math.sqrt(M),A=Math.atan2(b,p*_);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}let y=a*_;if(c=c*m+d*y,h=h*m+u*y,l=l*m+g*y,f=f*m+v*y,m===1-a){let b=1/Math.sqrt(c*c+h*h+l*l+f*f);c*=b,h*=b,l*=b,f*=b}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],h=n[i+2],l=n[i+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+l*f+c*u-h*d,t[e+1]=c*g+l*d+h*f-a*u,t[e+2]=h*g+l*u+a*d-c*f,t[e+3]=l*g-a*f-c*d-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(i/2),f=a(r/2),d=c(n/2),u=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"YXZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"ZXY":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"ZYX":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"YZX":this._x=d*l*f+h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f-d*u*g;break;case"XZY":this._x=d*l*f-h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(l-c)*u,this._y=(r-h)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(l-c)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+h)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-h)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(c+l)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+h)/u,this._y=(c+l)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+i*h-r*c,this._y=i*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-i*a,this._w=o*l-n*a-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,a),f=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*i-a*n),l=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+c*h+o*f-a*l,this.y=n+c*l+a*h-r*f,this.z=i+c*f+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ic.copy(this).projectOnVector(t),this.sub(Ic)}reflect(t){return this.sub(Ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ic=new D,Tu=new ve,me=class s{constructor(t,e,n,i,r,o,a,c,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h)}set(t,e,n,i,r,o,a,c,h){let l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],f=n[7],d=n[2],u=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],M=i[4],y=i[7],b=i[2],A=i[5],P=i[8];return r[0]=o*v+a*_+c*b,r[3]=o*m+a*M+c*A,r[6]=o*p+a*y+c*P,r[1]=h*v+l*_+f*b,r[4]=h*m+l*M+f*A,r[7]=h*p+l*y+f*P,r[2]=d*v+u*_+g*b,r[5]=d*m+u*M+g*A,r[8]=d*p+u*y+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+i*r*h-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=l*o-a*h,d=a*c-l*r,u=h*r-o*c,g=e*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(i*h-l*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(l*e-i*c)*v,t[5]=(i*r-a*e)*v,t[6]=u*v,t[7]=(n*c-h*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-i*h,i*c,-i*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Dc.makeScale(t,e)),this}rotate(t){return this.premultiply(Dc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new me;function Eh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function uo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nf(){let s=uo("canvas");return s.style.display="block",s}var Au={};function Sr(s){s in Au||(Au[s]=!0,console.warn(s))}function Of(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ru=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Up(){let s={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ke&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ke&&(i.r=wr(i.r),i.g=wr(i.g),i.b=wr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wi?co:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Sr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Sr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ls]:{primaries:t,whitePoint:n,transfer:co,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:n,transfer:ke,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),s}var Le=Up();function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var cr,Ca=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cr===void 0&&(cr=uo("canvas")),cr.width=t.width,cr.height=t.height;let i=cr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=cr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zp=0,Tr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Lc(i[o].image)):r.push(Lc(i[o]))}else r=Lc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ca.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Np=0,Fc=new D,Un=class s extends Oi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=as,i=as,r=Fn,o=ds,a=ei,c=pi,h=s.DEFAULT_ANISOTROPY,l=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Nr(),this.name="",this.source=new Tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=dh;Un.DEFAULT_ANISOTROPY=1;var Ce=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,h=c[0],l=c[4],f=c[8],d=c[1],u=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(h+1)/2,y=(u+1)/2,b=(p+1)/2,A=(l+d)/4,P=(f+v)/4,I=(g+m)/4;return M>y&&M>b?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=P/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=I/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=P/r,i=I/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-v)/_,this.z=(d-l)/_,this.w=Math.acos((h+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this.w=Ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this.w=Ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pa=class extends Oi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new Un(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Tr(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends Pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fo=class extends Un{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ia=class extends Un{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),sa.subVectors(this.max,jr),hr.subVectors(t.a,jr),ur.subVectors(t.b,jr),fr.subVectors(t.c,jr),ts.subVectors(ur,hr),es.subVectors(fr,ur),As.subVectors(hr,fr);let e=[0,-ts.z,ts.y,0,-es.z,es.y,0,-As.z,As.y,ts.z,0,-ts.x,es.z,0,-es.x,As.z,0,-As.x,-ts.y,ts.x,0,-es.y,es.x,0,-As.y,As.x,0];return!Uc(e,hr,ur,fr,sa)||(e=[1,0,0,0,1,0,0,0,1],!Uc(e,hr,ur,fr,sa))?!1:(ra.crossVectors(ts,es),e=[ra.x,ra.y,ra.z],Uc(e,hr,ur,fr,sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pi=[new D,new D,new D,new D,new D,new D,new D,new D],li=new D,ia=new ti,hr=new D,ur=new D,fr=new D,ts=new D,es=new D,As=new D,jr=new D,sa=new D,ra=new D,Rs=new D;function Uc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Rs.fromArray(s,r);let a=i.x*Math.abs(Rs.x)+i.y*Math.abs(Rs.y)+i.z*Math.abs(Rs.z),c=t.dot(Rs),h=e.dot(Rs),l=n.dot(Rs);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}var Op=new ti,to=new D,zc=new D,fi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Op.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;to.subVectors(t,this.center);let e=to.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(to,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(to.copy(t.center).add(zc)),this.expandByPoint(to.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ii=new D,Nc=new D,oa=new D,ns=new D,Oc=new D,aa=new D,Bc=new D,po=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Nc.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),ns.copy(this.origin).sub(Nc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(oa),a=ns.dot(this.direction),c=-ns.dot(oa),h=ns.lengthSq(),l=Math.abs(1-o*o),f,d,u,g;if(l>0)if(f=o*c-a,d=o*a-c,g=r*l,f>=0)if(d>=-g)if(d<=g){let v=1/l;f*=v,d*=v,u=f*(f+o*d+2*a)+d*(o*f+d+2*c)+h}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+h):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Nc).addScaledVector(oa,d),u}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);let n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,h=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),l>=0?(r=(t.min.y-d.y)*l,o=(t.max.y-d.y)*l):(r=(t.max.y-d.y)*l,o=(t.min.y-d.y)*l),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,i,r){Oc.subVectors(e,t),aa.subVectors(n,t),Bc.crossVectors(Oc,aa);let o=this.direction.dot(Bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,t);let c=a*this.direction.dot(aa.crossVectors(ns,aa));if(c<0)return null;let h=a*this.direction.dot(Oc.cross(ns));if(h<0||c+h>o)return null;let l=-a*ns.dot(Bc);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class s{constructor(t,e,n,i,r,o,a,c,h,l,f,d,u,g,v,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,v,m)}set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=l,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/dr.setFromMatrixColumn(t,0).length(),r=1/dr.setFromMatrixColumn(t,1).length(),o=1/dr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*l,u=o*f,g=a*l,v=a*f;e[0]=c*l,e[4]=-c*f,e[8]=h,e[1]=u+g*h,e[5]=d-v*h,e[9]=-a*c,e[2]=v-d*h,e[6]=g+u*h,e[10]=o*c}else if(t.order==="YXZ"){let d=c*l,u=c*f,g=h*l,v=h*f;e[0]=d+v*a,e[4]=g*a-u,e[8]=o*h,e[1]=o*f,e[5]=o*l,e[9]=-a,e[2]=u*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*l,u=c*f,g=h*l,v=h*f;e[0]=d-v*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*l,e[9]=v-d*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*l,u=o*f,g=a*l,v=a*f;e[0]=c*l,e[4]=g*h-u,e[8]=d*h+v,e[1]=c*f,e[5]=v*h+d,e[9]=u*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,u=o*h,g=a*c,v=a*h;e[0]=c*l,e[4]=v-d*f,e[8]=g*f+u,e[1]=f,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=u*f+g,e[10]=d-v*f}else if(t.order==="XZY"){let d=o*c,u=o*h,g=a*c,v=a*h;e[0]=c*l,e[4]=-f,e[8]=h*l,e[1]=d*f+v,e[5]=o*l,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*l,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bp,t,kp)}lookAt(t,e,n){let i=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),is.crossVectors(n,Vn),is.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),is.crossVectors(n,Vn)),is.normalize(),la.crossVectors(Vn,is),i[0]=is.x,i[4]=la.x,i[8]=Vn.x,i[1]=is.y,i[5]=la.y,i[9]=Vn.y,i[2]=is.z,i[6]=la.z,i[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],f=n[5],d=n[9],u=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],M=n[7],y=n[11],b=n[15],A=i[0],P=i[4],I=i[8],E=i[12],w=i[1],N=i[5],X=i[9],B=i[13],k=i[2],W=i[6],q=i[10],it=i[14],Z=i[3],F=i[7],Mt=i[11],St=i[15];return r[0]=o*A+a*w+c*k+h*Z,r[4]=o*P+a*N+c*W+h*F,r[8]=o*I+a*X+c*q+h*Mt,r[12]=o*E+a*B+c*it+h*St,r[1]=l*A+f*w+d*k+u*Z,r[5]=l*P+f*N+d*W+u*F,r[9]=l*I+f*X+d*q+u*Mt,r[13]=l*E+f*B+d*it+u*St,r[2]=g*A+v*w+m*k+p*Z,r[6]=g*P+v*N+m*W+p*F,r[10]=g*I+v*X+m*q+p*Mt,r[14]=g*E+v*B+m*it+p*St,r[3]=_*A+M*w+y*k+b*Z,r[7]=_*P+M*N+y*W+b*F,r[11]=_*I+M*X+y*q+b*Mt,r[15]=_*E+M*B+y*it+b*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],f=t[6],d=t[10],u=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*f-i*h*f-r*a*d+n*h*d+i*a*u-n*c*u)+v*(+e*c*u-e*h*d+r*o*d-i*o*u+i*h*l-r*c*l)+m*(+e*h*f-e*a*u-r*o*f+n*o*u+r*a*l-n*h*l)+p*(-i*a*l-e*c*f+e*a*d+i*o*f-n*o*d+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=t[9],d=t[10],u=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=f*m*h-v*d*h+v*c*u-a*m*u-f*c*p+a*d*p,M=g*d*h-l*m*h-g*c*u+o*m*u+l*c*p-o*d*p,y=l*v*h-g*f*h+g*a*u-o*v*u-l*a*p+o*f*p,b=g*f*c-l*v*c-g*a*d+o*v*d+l*a*m-o*f*m,A=e*_+n*M+i*y+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=_*P,t[1]=(v*d*r-f*m*r-v*i*u+n*m*u+f*i*p-n*d*p)*P,t[2]=(a*m*r-v*c*r+v*i*h-n*m*h-a*i*p+n*c*p)*P,t[3]=(f*c*r-a*d*r-f*i*h+n*d*h+a*i*u-n*c*u)*P,t[4]=M*P,t[5]=(l*m*r-g*d*r+g*i*u-e*m*u-l*i*p+e*d*p)*P,t[6]=(g*c*r-o*m*r-g*i*h+e*m*h+o*i*p-e*c*p)*P,t[7]=(o*d*r-l*c*r+l*i*h-e*d*h-o*i*u+e*c*u)*P,t[8]=y*P,t[9]=(g*f*r-l*v*r-g*n*u+e*v*u+l*n*p-e*f*p)*P,t[10]=(o*v*r-g*a*r+g*n*h-e*v*h-o*n*p+e*a*p)*P,t[11]=(l*a*r-o*f*r-l*n*h+e*f*h+o*n*u-e*a*u)*P,t[12]=b*P,t[13]=(l*v*i-g*f*i+g*n*d-e*v*d-l*n*m+e*f*m)*P,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*m-e*a*m)*P,t[15]=(o*f*i-l*a*i+l*n*c-e*f*c-o*n*d+e*a*d)*P,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-i*c,h*c+i*a,0,h*a+i*c,l*a+n,l*c-i*o,0,h*c-i*a,l*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,f=a+a,d=r*h,u=r*l,g=r*f,v=o*l,m=o*f,p=a*f,_=c*h,M=c*l,y=c*f,b=n.x,A=n.y,P=n.z;return i[0]=(1-(v+p))*b,i[1]=(u+y)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(u-y)*A,i[5]=(1-(d+p))*A,i[6]=(m+_)*A,i[7]=0,i[8]=(g+M)*P,i[9]=(m-_)*P,i[10]=(1-(d+v))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=dr.set(i[0],i[1],i[2]).length(),o=dr.set(i[4],i[5],i[6]).length(),a=dr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ci.copy(this);let h=1/r,l=1/o,f=1/a;return ci.elements[0]*=h,ci.elements[1]*=h,ci.elements[2]*=h,ci.elements[4]*=l,ci.elements[5]*=l,ci.elements[6]*=l,ci.elements[8]*=f,ci.elements[9]*=f,ci.elements[10]*=f,e.setFromRotationMatrix(ci),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ui,c=!1){let h=this.elements,l=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===ui)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ho)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=f,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ui,c=!1){let h=this.elements,l=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===ui)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===ho)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=f,h[9]=0,h[13]=u,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},dr=new D,ci=new Ht,Bp=new D(0,0,0),kp=new D(1,1,1),is=new D,la=new D,Vn=new D,Pu=new Ht,Iu=new ve,cn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],h=i[5],l=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hp=0,Du=new D,pr=new ve,Di=new Ht,ca=new D,eo=new D,Gp=new D,Vp=new ve,Lu=new D(1,0,0),Fu=new D(0,1,0),Uu=new D(0,0,1),zu={type:"added"},Wp={type:"removed"},mr={type:"childadded",child:null},kc={type:"childremoved",child:null},hn=class s extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,e=new cn,n=new ve,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new me}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(Lu,t)}rotateY(t){return this.rotateOnAxis(Fu,t)}rotateZ(t){return this.rotateOnAxis(Uu,t)}translateOnAxis(t,e){return Du.copy(t).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lu,t)}translateY(t){return this.translateOnAxis(Fu,t)}translateZ(t){return this.translateOnAxis(Uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ca.copy(t):ca.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(eo,ca,this.up):Di.lookAt(ca,eo,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),pr.setFromRotationMatrix(Di),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zu),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wp),kc.child=t,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zu),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,Vp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let f=c[h];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let h in a){let l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};hn.DEFAULT_UP=new D(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=new D,Li=new D,Hc=new D,Fi=new D,gr=new D,xr=new D,Nu=new D,Gc=new D,Vc=new D,Wc=new D,Xc=new Ce,qc=new Ce,Yc=new Ce,os=class s{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hi.subVectors(t,e),i.cross(hi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){hi.subVectors(i,e),Li.subVectors(n,e),Hc.subVectors(t,e);let o=hi.dot(hi),a=hi.dot(Li),c=hi.dot(Hc),h=Li.dot(Li),l=Li.dot(Hc),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(h*c-a*l)*d,g=(o*l-a*c)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fi.x),c.addScaledVector(o,Fi.y),c.addScaledVector(a,Fi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Xc.setScalar(0),qc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(t,e),qc.fromBufferAttribute(t,n),Yc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(qc,r.y),o.addScaledVector(Yc,r.z),o}static isFrontFacing(t,e,n,i){return hi.subVectors(n,e),Li.subVectors(t,e),hi.cross(Li).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),hi.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;gr.subVectors(i,n),xr.subVectors(r,n),Gc.subVectors(t,n);let c=gr.dot(Gc),h=xr.dot(Gc);if(c<=0&&h<=0)return e.copy(n);Vc.subVectors(t,i);let l=gr.dot(Vc),f=xr.dot(Vc);if(l>=0&&f<=l)return e.copy(i);let d=c*f-l*h;if(d<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(gr,o);Wc.subVectors(t,r);let u=gr.dot(Wc),g=xr.dot(Wc);if(g>=0&&u<=g)return e.copy(r);let v=u*h-c*g;if(v<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(xr,a);let m=l*g-u*f;if(m<=0&&f-l>=0&&u-g>=0)return Nu.subVectors(r,i),a=(f-l)/(f-l+(u-g)),e.copy(i).addScaledVector(Nu,a);let p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(gr,o).addScaledVector(xr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Zc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Le.workingColorSpace){if(t=wh(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zc(o,r,t+1/3),this.g=Zc(o,r,t),this.b=Zc(o,r,t-1/3)}return Le.colorSpaceToWorking(this,i),this}setStyle(t,e=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){let n=Bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return Le.workingToColorSpace(Rn.copy(this),t),Math.round(Ae(Rn.r*255,0,255))*65536+Math.round(Ae(Rn.g*255,0,255))*256+Math.round(Ae(Rn.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.workingToColorSpace(Rn.copy(this),e);let n=Rn.r,i=Rn.g,r=Rn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,h,l=(a+o)/2;if(a===o)c=0,h=0;else{let f=o-a;switch(h=l<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=Le.workingColorSpace){return Le.workingToColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=En){Le.workingToColorSpace(Rn.copy(this),t);let e=Rn.r,n=Rn.g,i=Rn.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+e,ss.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ss),t.getHSL(ha);let n=ao(ss.h,ha.h,e),i=ao(ss.s,ha.s,e),r=ao(ss.l,ha.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Lt;Lt.NAMES=Bf;var Xp=0,Bi=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=Ni,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=Ta,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},nn=class extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var un=new D,ua=new Yt,qp=0,je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ua.fromBufferAttribute(this,e),ua.applyMatrix3(t),this.setXY(e,ua.x,ua.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=br(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=br(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=br(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=br(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=br(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array),i=Ln(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array),i=Ln(i,this.array),r=Ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sh&&(t.usage=this.usage),t}};var go=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xo=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yp=0,Qn=new Ht,$c=new hn,vr=new D,Wn=new ti,no=new ti,_n=new D,Fe=class s extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?xo:go)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return $c.lookAt(t),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];no.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(Wn.min,no.min),Wn.expandByPoint(_n),_n.addVectors(Wn.max,no.max),Wn.expandByPoint(_n)):(Wn.expandByPoint(no.min),Wn.expandByPoint(no.max))}Wn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)_n.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_n));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)_n.fromBufferAttribute(a,h),c&&(vr.fromBufferAttribute(t,h),_n.add(vr)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new D,c[I]=new D;let h=new D,l=new D,f=new D,d=new Yt,u=new Yt,g=new Yt,v=new D,m=new D;function p(I,E,w){h.fromBufferAttribute(n,I),l.fromBufferAttribute(n,E),f.fromBufferAttribute(n,w),d.fromBufferAttribute(r,I),u.fromBufferAttribute(r,E),g.fromBufferAttribute(r,w),l.sub(h),f.sub(h),u.sub(d),g.sub(d);let N=1/(u.x*g.y-g.x*u.y);isFinite(N)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(N),m.copy(f).multiplyScalar(u.x).addScaledVector(l,-g.x).multiplyScalar(N),a[I].add(v),a[E].add(v),a[w].add(v),c[I].add(m),c[E].add(m),c[w].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let I=0,E=_.length;I<E;++I){let w=_[I],N=w.start,X=w.count;for(let B=N,k=N+X;B<k;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new D,y=new D,b=new D,A=new D;function P(I){b.fromBufferAttribute(i,I),A.copy(b);let E=a[I];M.copy(E),M.sub(b.multiplyScalar(b.dot(E))).normalize(),y.crossVectors(A,E);let N=y.dot(c[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,N)}for(let I=0,E=_.length;I<E;++I){let w=_[I],N=w.start,X=w.count;for(let B=N,k=N+X;B<k;B+=3)P(t.getX(B+0)),P(t.getX(B+1)),P(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new D,r=new D,o=new D,a=new D,c=new D,h=new D,l=new D,f=new D;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(a,c){let h=a.array,l=a.itemSize,f=a.normalized,d=new h.constructor(c.length*l),u=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?u=c[v]*a.data.stride+a.offset:u=c[v]*l;for(let p=0;p<l;p++)d[g++]=h[u++]}return new je(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let l=0,f=h.length;l<f;l++){let d=h[l],u=t(d,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let f=0,d=h.length;f<d;f++){let u=h[f];l.push(u.toJSON(t.data))}l.length>0&&(i[c]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let l=i[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],f=r[h];for(let d=0,u=f.length;d<u;d++)l.push(f[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,l=o.length;h<l;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ou=new Ht,Cs=new po,fa=new fi,Bu=new D,da=new D,pa=new D,ma=new D,Kc=new D,ga=new D,ku=new D,xa=new D,Ot=class extends hn{constructor(t=new Fe,e=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=a[c],f=r[c];l!==0&&(Kc.fromBufferAttribute(f,t),o?ga.addScaledVector(Kc,l):ga.addScaledVector(Kc.sub(e),l))}e.add(ga)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),Cs.copy(t.ray).recast(t.near),!(fa.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(fa,Bu)===null||Cs.origin.distanceToSquared(Bu)>(t.far-t.near)**2))&&(Ou.copy(r).invert(),Cs.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cs)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,u.start),M=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=_,b=M;y<b;y+=3){let A=a.getX(y),P=a.getX(y+1),I=a.getX(y+2);i=va(this,p,t,n,h,l,f,A,P,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){let _=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);i=va(this,o,t,n,h,l,f,_,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,u.start),M=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let y=_,b=M;y<b;y+=3){let A=y,P=y+1,I=y+2;i=va(this,p,t,n,h,l,f,A,P,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){let _=m,M=m+1,y=m+2;i=va(this,o,t,n,h,l,f,_,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Zp(s,t,e,n,i,r,o,a){let c;if(t.side===Sn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===zi,a),c===null)return null;xa.copy(a),xa.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(xa);return h<e.near||h>e.far?null:{distance:h,point:xa.clone(),object:s}}function va(s,t,e,n,i,r,o,a,c,h){s.getVertexPosition(a,da),s.getVertexPosition(c,pa),s.getVertexPosition(h,ma);let l=Zp(s,t,e,n,da,pa,ma,ku);if(l){let f=new D;os.getBarycoord(ku,da,pa,ma,f),i&&(l.uv=os.getInterpolatedAttribute(i,a,c,h,f,new Yt)),r&&(l.uv1=os.getInterpolatedAttribute(r,a,c,h,f,new Yt)),o&&(l.normal=os.getInterpolatedAttribute(o,a,c,h,f,new D),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let d={a,b:c,c:h,normal:new D,materialIndex:0};os.getNormal(da,pa,ma,d.normal),l.face=d,l.barycoord=f}return l}var Kt=class s extends Fe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],l=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(f,2));function g(v,m,p,_,M,y,b,A,P,I,E){let w=y/P,N=b/I,X=y/2,B=b/2,k=A/2,W=P+1,q=I+1,it=0,Z=0,F=new D;for(let Mt=0;Mt<q;Mt++){let St=Mt*N-B;for(let Nt=0;Nt<W;Nt++){let Wt=Nt*w-X;F[v]=Wt*_,F[m]=St*M,F[p]=k,h.push(F.x,F.y,F.z),F[v]=0,F[m]=0,F[p]=A>0?1:-1,l.push(F.x,F.y,F.z),f.push(Nt/P),f.push(1-Mt/I),it+=1}}for(let Mt=0;Mt<I;Mt++)for(let St=0;St<P;St++){let Nt=d+St+W*Mt,Wt=d+St+W*(Mt+1),Zt=d+(St+1)+W*(Mt+1),Qt=d+(St+1)+W*Mt;c.push(Nt,Wt,Qt),c.push(Wt,Zt,Qt),Z+=6}a.addGroup(u,Z,E),u+=Z,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pn(s){let t={};for(let e=0;e<s.length;e++){let n=Hs(s[e]);for(let i in n)t[i]=n[i]}return t}function $p(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Sh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}var gi={clone:Hs,merge:Pn},Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=$p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},vo=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rs=new D,Hu=new Yt,Gu=new Yt,pn=class extends vo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,Hu,Gu),e.subVectors(Gu,Hu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(oo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/h,i*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yr=-90,_r=1,Ar=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new pn(yr,_r,t,e);i.layers=this.layers,this.add(i);let r=new pn(yr,_r,t,e);r.layers=this.layers,this.add(r);let o=new pn(yr,_r,t,e);o.layers=this.layers,this.add(o);let a=new pn(yr,_r,t,e);a.layers=this.layers,this.add(a);let c=new pn(yr,_r,t,e);c.layers=this.layers,this.add(c);let h=new pn(yr,_r,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,l]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},yo=class extends Un{constructor(t=[],e=Bs,n,i,r,o,a,c,h,l){super(t,e,n,i,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rr=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kt(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Vi});r.uniforms.tEquirect.value=e;let o=new Ot(i,r),a=e.minFilter;return e.minFilter===ds&&(e.minFilter=Fn),new Ar(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ve=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qp={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=l.position.distanceTo(f.position),u=.02,g=.005;h.inputState.pinching&&d>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_o=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Us=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Pr=class extends Un{constructor(t=null,e=1,n=1,i,r,o,a,c,h=Cn,l=Cn,f,d){super(null,o,a,c,h,l,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ye=class extends je{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Mr=new Ht,Vu=new Ht,ya=[],Wu=new ti,jp=new Ht,io=new Ot,so=new fi,ye=class extends Ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ye(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mr),Wu.copy(t.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Wu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mr),so.copy(t.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(so)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),t.ray.intersectsSphere(so)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mr),Vu.multiplyMatrices(n,Mr),io.matrixWorld=Vu,io.raycast(t,ya);for(let o=0,a=ya.length;o<a;o++){let c=ya[o];c.instanceId=r,c.object=this,e.push(c)}ya.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ye(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pr(new Float32Array(i*this.count),i,this.count,al,mi));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Jc=new D,t0=new D,e0=new me,jn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Jc.subVectors(n,e).cross(t0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Jc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||e0.getNormalMatrix(t),i=this.coplanarPoint(Jc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new fi,n0=new Yt(.5,.5),_a=new D,hs=class{constructor(t=new jn,e=new jn,n=new jn,i=new jn,r=new jn,o=new jn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],h=r[3],l=r[4],f=r[5],d=r[6],u=r[7],g=r[8],v=r[9],m=r[10],p=r[11],_=r[12],M=r[13],y=r[14],b=r[15];if(i[0].setComponents(h-o,u-l,p-g,b-_).normalize(),i[1].setComponents(h+o,u+l,p+g,b+_).normalize(),i[2].setComponents(h+a,u+f,p+v,b+M).normalize(),i[3].setComponents(h-a,u-f,p-v,b-M).normalize(),n)i[4].setComponents(c,d,m,y).normalize(),i[5].setComponents(h-c,u-d,p-m,b-y).normalize();else if(i[4].setComponents(h-c,u-d,p-m,b-y).normalize(),e===ui)i[5].setComponents(h+c,u+d,p+m,b+y).normalize();else if(e===ho)i[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);let e=n0.distanceTo(t.center);return Ps.radius=.7071067811865476+e,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(_a.x=i.normal.x>0?t.max.x:t.min.x,_a.y=i.normal.y>0?t.max.y:t.min.y,_a.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_a)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ir=class extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Da=new D,La=new D,Xu=new Ht,ro=new po,Ma=new fi,Qc=new D,qu=new D,Fa=class extends hn{constructor(t=new Fe,e=new Ir){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Da.fromBufferAttribute(e,i-1),La.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Da.distanceTo(La);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=r,t.ray.intersectsSphere(Ma)===!1)return;Xu.copy(i).invert(),ro.copy(t.ray).applyMatrix4(Xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let v=u,m=g-1;v<m;v+=h){let p=l.getX(v),_=l.getX(v+1),M=ba(this,t,ro,c,p,_,v);M&&e.push(M)}if(this.isLineLoop){let v=l.getX(g-1),m=l.getX(u),p=ba(this,t,ro,c,v,m,g-1);p&&e.push(p)}}else{let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=u,m=g-1;v<m;v+=h){let p=ba(this,t,ro,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=ba(this,t,ro,c,g-1,u,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ba(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(Da.fromBufferAttribute(a,i),La.fromBufferAttribute(a,r),e.distanceSqToSegment(Da,La,Qc,qu)>n)return;Qc.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(Qc);if(!(h<t.near||h>t.far))return{distance:h,point:qu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Yu=new D,Zu=new D,Mo=class extends Fa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Yu.fromBufferAttribute(e,i),Zu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yu.distanceTo(Zu);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zs=class extends Un{constructor(t,e,n,i,r,o,a,c,h){super(t,e,n,i,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},ki=class extends Un{constructor(t,e,n=ps,i,r,o,a=Cn,c=Cn,h,l=Er,f=1){if(l!==Er&&l!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,i,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bo=class extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var wo=class s extends Fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],h=new D,l=new Yt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),o.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(o[d]/t+1)/2,l.y=(o[d+1]/t+1)/2,c.push(l.x,l.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ce=class s extends Fe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;i=Math.floor(i),r=Math.floor(r);let l=[],f=[],d=[],u=[],g=0,v=[],m=n/2,p=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(l),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(u,2));function _(){let y=new D,b=new D,A=0,P=(e-t)/n;for(let I=0;I<=r;I++){let E=[],w=I/r,N=w*(e-t)+t;for(let X=0;X<=i;X++){let B=X/i,k=B*c+a,W=Math.sin(k),q=Math.cos(k);b.x=N*W,b.y=-w*n+m,b.z=N*q,f.push(b.x,b.y,b.z),y.set(W,P,q).normalize(),d.push(y.x,y.y,y.z),u.push(B,1-w),E.push(g++)}v.push(E)}for(let I=0;I<i;I++)for(let E=0;E<r;E++){let w=v[E][I],N=v[E+1][I],X=v[E+1][I+1],B=v[E][I+1];(t>0||E!==0)&&(l.push(w,N,B),A+=3),(e>0||E!==r-1)&&(l.push(N,X,B),A+=3)}h.addGroup(p,A,0),p+=A}function M(y){let b=g,A=new Yt,P=new D,I=0,E=y===!0?t:e,w=y===!0?1:-1;for(let X=1;X<=i;X++)f.push(0,m*w,0),d.push(0,w,0),u.push(.5,.5),g++;let N=g;for(let X=0;X<=i;X++){let k=X/i*c+a,W=Math.cos(k),q=Math.sin(k);P.x=E*q,P.y=m*w,P.z=E*W,f.push(P.x,P.y,P.z),d.push(0,w,0),A.x=W*.5+.5,A.y=q*.5*w+.5,u.push(A.x,A.y),g++}for(let X=0;X<i;X++){let B=b+X,k=N+X;y===!0?l.push(k,k+1,B):l.push(k+1,k,B),I+=3}h.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wi=class s extends ce{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Eo=class s extends Fe{constructor(t=[new Yt(0,-.5),new Yt(.5,0),new Yt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ae(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],l=1/e,f=new D,d=new Yt,u=new D,g=new D,v=new D,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,v.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),c.push(u.x,u.y,u.z),v.copy(g)}for(let _=0;_<=e;_++){let M=n+_*l*i,y=Math.sin(M),b=Math.cos(M);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*y,f.y=t[A].y,f.z=t[A].x*b,o.push(f.x,f.y,f.z),d.x=_/e,d.y=A/(t.length-1),a.push(d.x,d.y);let P=c[3*A+0]*y,I=c[3*A+1],E=c[3*A+0]*b;h.push(P,I,E)}}for(let _=0;_<e;_++)for(let M=0;M<t.length-1;M++){let y=M+_*t.length,b=y,A=y+t.length,P=y+t.length+1,I=y+1;r.push(b,A,I),r.push(P,I,A)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var He=class s extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),h=a+1,l=c+1,f=t/a,d=e/c,u=[],g=[],v=[],m=[];for(let p=0;p<l;p++){let _=p*d-o;for(let M=0;M<h;M++){let y=M*f-r;g.push(y,-_,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let M=_+h*p,y=_+h*(p+1),b=_+1+h*(p+1),A=_+1+h*p;u.push(M,y,A),u.push(y,b,A)}this.setIndex(u),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},So=class s extends Fe{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],h=[],l=[],f=t,d=(e-t)/i,u=new D,g=new Yt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){let p=r+m/n*o;u.x=f*Math.cos(p),u.y=f*Math.sin(p),c.push(u.x,u.y,u.z),h.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,l.push(g.x,g.y)}f+=d}for(let v=0;v<i;v++){let m=v*(n+1);for(let p=0;p<n;p++){let _=p+m,M=_,y=_+n+1,b=_+n+2,A=_+1;a.push(M,y,A),a.push(y,b,A)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var mn=class s extends Fe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,l=[],f=new D,d=new D,u=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let _=[],M=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let b=0;b<=e;b++){let A=b/e;f.x=-t*Math.cos(i+A*r)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(i+A*r)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(A+y,1-M),_.push(h++)}l.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let M=l[p][_+1],y=l[p][_],b=l[p+1][_],A=l[p+1][_+1];(p!==0||o>0)&&u.push(M,y,A),(p!==n-1||c<Math.PI)&&u.push(y,b,A)}this.setIndex(u),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Hi=class s extends Fe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],h=[],l=new D,f=new D,d=new D;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){let v=g/i*r,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),l.x=t*Math.cos(v),l.y=t*Math.sin(v),d.subVectors(f,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){let v=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,_=(i+1)*u+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Bt=class extends Bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ns=class extends Bt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Dr=class extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ua=class extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wa(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function i0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Os=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},za=class extends Os{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case eh:r=t,a=2*e-n;break;case nh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case eh:o=t,c=2*n-e;break;case nh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,M=(-1-u)*m+(1.5+u)*v+.5*g,y=u*m-u*v;for(let b=0;b!==a;++b)r[b]=p*o[l+b]+_*o[h+b]+M*o[c+b]+y*o[f+b];return r}},Na=class extends Os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=(n-e)/(i-e),f=1-l;for(let d=0;d!==a;++d)r[d]=o[h+d]*f+o[c+d]*l;return r}},Oa=class extends Os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Xn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wa(e,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wa(t.times,Array),values:wa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new za(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lo:e=this.InterpolantFactoryMethodDiscrete;break;case Ra:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&i0(i))for(let a=0,c=i.length;a!==c;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ea,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],l=t[a+1];if(h!==l&&(a!==1||h!==t[0]))if(i)c=!0;else{let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let v=e[f+g];if(v!==e[d+g]||v!==e[u+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Ra;var us=class extends Xn{constructor(t,e,n){super(t,e,n)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=lo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}};Ba.prototype.ValueTypeName="color";var ka=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}};ka.prototype.ValueTypeName="number";var Ha=class extends Os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),h=t*a;for(let l=h+a;h!==l;h+=4)ve.slerpFlat(r,0,o,h-a,o,h,c);return r}},To=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Xn{constructor(t,e,n){super(t,e,n)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=lo;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}};Ga.prototype.ValueTypeName="vector";var Va=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,f){return h.push(l,f),this},this.removeHandler=function(l){let f=h.indexOf(l);return f!==-1&&h.splice(f,2),this},this.getHandler=function(l){for(let f=0,d=h.length;f<d;f+=2){let u=h[f],g=h[f+1];if(u.global&&(u.lastIndex=0),u.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},kf=new Va,Wa=class{constructor(t){this.manager=t!==void 0?t:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=class extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ao=class extends Lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},jc=new Ht,$u=new D,Ku=new D,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;$u.setFromMatrixPosition(t.matrixWorld),e.position.copy($u),Ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ku),e.updateMatrixWorld(),jc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},rh=class extends Xa{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Fs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ro=class extends Lr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Gi=class extends vo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},oh=class extends Xa{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Co=class extends Lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new oh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Po=class extends Fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var qa=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Io=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Th="\\[\\]\\.:\\/",s0=new RegExp("["+Th+"]","g"),Ah="[^"+Th+"]",r0="[^"+Th.replace("\\.","")+"]",o0=/((?:WC+[\/:])*)/.source.replace("WC",Ah),a0=/(WCOD+)?/.source.replace("WCOD",r0),l0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),c0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),h0=new RegExp("^"+o0+a0+l0+c0+"$"),u0=["material","materials","bones","map"],ah=class{constructor(t,e,n){let i=n||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},$e=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(s0,"")}static parseTrackName(t){let e=h0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);u0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=ah;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W1=new Float32Array(1);function Rh(s,t,e,n){let i=f0(n);switch(e){case vh:return s*t;case al:return s*t/i.components*i.byteLength;case ll:return s*t/i.components*i.byteLength;case _h:return s*t*2/i.components*i.byteLength;case cl:return s*t*2/i.components*i.byteLength;case yh:return s*t*3/i.components*i.byteLength;case ei:return s*t*4/i.components*i.byteLength;case hl:return s*t*4/i.components*i.byteLength;case Fo:case Uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zo:case No:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fl:case pl:return Math.max(s,16)*Math.max(t,8)/4;case ul:case dl:return Math.max(s,8)*Math.max(t,8)/2;case ml:case gl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _l:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case wl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Dl:case Ll:case Fl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ul:case zl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Nl:case Ol:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f0(s){switch(s){case pi:case ph:return{byteLength:1,components:1};case Fr:case mh:case gn:return{byteLength:2,components:1};case rl:case ol:return{byteLength:2,components:4};case ps:case sl:case mi:return{byteLength:4,components:1};case gh:case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function hd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function y0(s){let t=new WeakMap;function e(a,c){let h=a.array,l=a.usage,f=h.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,h,l),a.onUploadCallback();let u;if(h instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)u=s.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=s.SHORT;else if(h instanceof Uint32Array)u=s.UNSIGNED_INT;else if(h instanceof Int32Array)u=s.INT;else if(h instanceof Int8Array)u=s.BYTE;else if(h instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){let l=c.array,f=c.updateRanges;if(s.bindBuffer(h,a),f.length===0)s.bufferSubData(h,0,l);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],v=f[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let v=f[u];s.bufferSubData(h,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:i,remove:r,update:o}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M0=`#ifdef USE_ALPHAHASH
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
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
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
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
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
#endif`,C0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,F0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X0=`vec3 transformedNormal = objectNormal;
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
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K0="gl_FragColor = linearToOutputTexel( gl_FragColor );",J0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
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
	
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,am=`#ifdef USE_GRADIENTMAP
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
}`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
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
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
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
#endif`,vm=`struct PhysicalMaterial {
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
}`,ym=`
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cm=`#if defined( USE_POINTS_UV )
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
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
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
#endif`,zm=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
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
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
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
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sg=`float getShadowMask() {
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
}`,rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Fg=`uniform vec3 diffuse;
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
}`,zg=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define NORMAL
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
}`,Hg=`#define PHONG
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
}`,Gg=`#define PHONG
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
}`,Vg=`#define STANDARD
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define TOON
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
}`,qg=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:_0,alphahash_pars_fragment:M0,alphamap_fragment:b0,alphamap_pars_fragment:w0,alphatest_fragment:E0,alphatest_pars_fragment:S0,aomap_fragment:T0,aomap_pars_fragment:A0,batching_pars_vertex:R0,batching_vertex:C0,begin_vertex:P0,beginnormal_vertex:I0,bsdfs:D0,iridescence_fragment:L0,bumpmap_pars_fragment:F0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:O0,color_fragment:B0,color_pars_fragment:k0,color_pars_vertex:H0,color_vertex:G0,common:V0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:q0,displacementmap_vertex:Y0,emissivemap_fragment:Z0,emissivemap_pars_fragment:$0,colorspace_fragment:K0,colorspace_pars_fragment:J0,envmap_fragment:Q0,envmap_common_pars_fragment:j0,envmap_pars_fragment:tm,envmap_pars_vertex:em,envmap_physical_pars_fragment:fm,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:sm,fog_fragment:rm,fog_pars_fragment:om,gradientmap_pars_fragment:am,lightmap_pars_fragment:lm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:hm,lights_pars_begin:um,lights_toon_fragment:dm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:xm,lights_physical_pars_fragment:vm,lights_fragment_begin:ym,lights_fragment_maps:_m,lights_fragment_end:Mm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:Sm,map_fragment:Tm,map_pars_fragment:Am,map_particle_fragment:Rm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Dm,morphcolor_vertex:Lm,morphnormal_vertex:Fm,morphtarget_pars_vertex:Um,morphtarget_vertex:zm,normal_fragment_begin:Nm,normal_fragment_maps:Om,normal_pars_fragment:Bm,normal_pars_vertex:km,normal_vertex:Hm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:qm,opaque_fragment:Ym,packing:Zm,premultiplied_alpha_fragment:$m,project_vertex:Km,dithering_fragment:Jm,dithering_pars_fragment:Qm,roughnessmap_fragment:jm,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:eg,shadowmap_pars_vertex:ng,shadowmap_vertex:ig,shadowmask_pars_fragment:sg,skinbase_vertex:rg,skinning_pars_vertex:og,skinning_vertex:ag,skinnormal_vertex:lg,specularmap_fragment:cg,specularmap_pars_fragment:hg,tonemapping_fragment:ug,tonemapping_pars_fragment:fg,transmission_fragment:dg,transmission_pars_fragment:pg,uv_pars_fragment:mg,uv_pars_vertex:gg,uv_vertex:xg,worldpos_vertex:vg,background_vert:yg,background_frag:_g,backgroundCube_vert:Mg,backgroundCube_frag:bg,cube_vert:wg,cube_frag:Eg,depth_vert:Sg,depth_frag:Tg,distanceRGBA_vert:Ag,distanceRGBA_frag:Rg,equirect_vert:Cg,equirect_frag:Pg,linedashed_vert:Ig,linedashed_frag:Dg,meshbasic_vert:Lg,meshbasic_frag:Fg,meshlambert_vert:Ug,meshlambert_frag:zg,meshmatcap_vert:Ng,meshmatcap_frag:Og,meshnormal_vert:Bg,meshnormal_frag:kg,meshphong_vert:Hg,meshphong_frag:Gg,meshphysical_vert:Vg,meshphysical_frag:Wg,meshtoon_vert:Xg,meshtoon_frag:qg,points_vert:Yg,points_frag:Zg,shadow_vert:$g,shadow_frag:Kg,sprite_vert:Jg,sprite_frag:Qg},Vt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Si={basic:{uniforms:Pn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Pn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Pn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Pn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Pn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Pn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Pn([Vt.points,Vt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Pn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Pn([Vt.common,Vt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Pn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Pn([Vt.sprite,Vt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:Pn([Vt.common,Vt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:Pn([Vt.lights,Vt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Si.physical={uniforms:Pn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var kl={r:0,b:0,g:0},Gs=new cn,jg=new Ht;function tx(s,t,e,n,i,r,o){let a=new Lt(0),c=r===!0?0:1,h,l,f=null,d=0,u=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function v(M){let y=!1,b=g(M);b===null?p(a,c):b&&b.isColor&&(p(b,1),y=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,y){let b=g(y);b&&(b.isCubeTexture||b.mapping===Do)?(l===void 0&&(l=new Ot(new Kt(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:Hs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Gs.copy(y.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(Gs)),l.material.toneMapped=Le.getTransfer(b.colorSpace)!==ke,(f!==b||d!==b.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,f=b,d=b.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new Ot(new He(2,2),new Oe({name:"BackgroundMaterial",uniforms:Hs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=Le.getTransfer(b.colorSpace)!==ke,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=b,d=b.version,u=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,y){M.getRGB(kl,Sh(s)),n.buffers.color.setClear(kl.r,kl.g,kl.b,y,o)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:v,addToRenderList:m,dispose:_}}function ex(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(w,N,X,B,k){let W=!1,q=f(B,X,N);r!==q&&(r=q,h(r.object)),W=u(w,B,X,k),W&&g(w,B,X,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(w,N,X,B),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return s.createVertexArray()}function h(w){return s.bindVertexArray(w)}function l(w){return s.deleteVertexArray(w)}function f(w,N,X){let B=X.wireframe===!0,k=n[w.id];k===void 0&&(k={},n[w.id]=k);let W=k[N.id];W===void 0&&(W={},k[N.id]=W);let q=W[B];return q===void 0&&(q=d(c()),W[B]=q),q}function d(w){let N=[],X=[],B=[];for(let k=0;k<e;k++)N[k]=0,X[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:B,object:w,attributes:{},index:null}}function u(w,N,X,B){let k=r.attributes,W=N.attributes,q=0,it=X.getAttributes();for(let Z in it)if(it[Z].location>=0){let Mt=k[Z],St=W[Z];if(St===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),Mt===void 0||Mt.attribute!==St||St&&Mt.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==B}function g(w,N,X,B){let k={},W=N.attributes,q=0,it=X.getAttributes();for(let Z in it)if(it[Z].location>=0){let Mt=W[Z];Mt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor));let St={};St.attribute=Mt,Mt&&Mt.data&&(St.data=Mt.data),k[Z]=St,q++}r.attributes=k,r.attributesNum=q,r.index=B}function v(){let w=r.newAttributes;for(let N=0,X=w.length;N<X;N++)w[N]=0}function m(w){p(w,0)}function p(w,N){let X=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;X[w]=1,B[w]===0&&(s.enableVertexAttribArray(w),B[w]=1),k[w]!==N&&(s.vertexAttribDivisor(w,N),k[w]=N)}function _(){let w=r.newAttributes,N=r.enabledAttributes;for(let X=0,B=N.length;X<B;X++)N[X]!==w[X]&&(s.disableVertexAttribArray(X),N[X]=0)}function M(w,N,X,B,k,W,q){q===!0?s.vertexAttribIPointer(w,N,X,k,W):s.vertexAttribPointer(w,N,X,B,k,W)}function y(w,N,X,B){v();let k=B.attributes,W=X.getAttributes(),q=N.defaultAttributeValues;for(let it in W){let Z=W[it];if(Z.location>=0){let F=k[it];if(F===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(F=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(F=w.instanceColor)),F!==void 0){let Mt=F.normalized,St=F.itemSize,Nt=t.get(F);if(Nt===void 0)continue;let Wt=Nt.buffer,Zt=Nt.type,Qt=Nt.bytesPerElement,at=Zt===s.INT||Zt===s.UNSIGNED_INT||F.gpuType===sl;if(F.isInterleavedBufferAttribute){let pt=F.data,xt=pt.stride,$t=F.offset;if(pt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<Z.locationSize;Ut++)p(Z.location+Ut,pt.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ut=0;Ut<Z.locationSize;Ut++)m(Z.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let Ut=0;Ut<Z.locationSize;Ut++)M(Z.location+Ut,St/Z.locationSize,Zt,Mt,xt*Qt,($t+St/Z.locationSize*Ut)*Qt,at)}else{if(F.isInstancedBufferAttribute){for(let pt=0;pt<Z.locationSize;pt++)p(Z.location+pt,F.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let pt=0;pt<Z.locationSize;pt++)m(Z.location+pt);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let pt=0;pt<Z.locationSize;pt++)M(Z.location+pt,St/Z.locationSize,Zt,Mt,St*Qt,St/Z.locationSize*pt*Qt,at)}}else if(q!==void 0){let Mt=q[it];if(Mt!==void 0)switch(Mt.length){case 2:s.vertexAttrib2fv(Z.location,Mt);break;case 3:s.vertexAttrib3fv(Z.location,Mt);break;case 4:s.vertexAttrib4fv(Z.location,Mt);break;default:s.vertexAttrib1fv(Z.location,Mt)}}}}_()}function b(){I();for(let w in n){let N=n[w];for(let X in N){let B=N[X];for(let k in B)l(B[k].object),delete B[k];delete N[X]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;let N=n[w.id];for(let X in N){let B=N[X];for(let k in B)l(B[k].object),delete B[k];delete N[X]}delete n[w.id]}function P(w){for(let N in n){let X=n[N];if(X[w.id]===void 0)continue;let B=X[w.id];for(let k in B)l(B[k].object),delete B[k];delete X[w.id]}}function I(){E(),o=!0,r!==i&&(r=i,h(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function nx(s,t,e){let n;function i(h){n=h}function r(h,l){s.drawArrays(n,h,l),e.update(l,n,1)}function o(h,l,f){f!==0&&(s.drawArraysInstanced(n,h,l,f),e.update(l,n,f))}function a(h,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,f);let u=0;for(let g=0;g<f;g++)u+=l[g];e.update(u,n,1)}function c(h,l,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<h.length;g++)o(h[g],l[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=l[v]*d[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ix(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==ei&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let I=P===gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==pi&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==mi&&!I)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:b,maxSamples:A}}function sx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new jn,a=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=l(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?l(null):h();else{let _=r?0:n,M=_*4,y=p.clippingState||null;c.value=y,y=l(g,d,M,u);for(let b=0;b!==M;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,d,u,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=u+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=u;M!==v;++M,y+=4)o.copy(f[M]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function rx(s){let t=new WeakMap;function e(o,a){return a===el?o.mapping=Bs:a===nl&&(o.mapping=ks),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===el||a===nl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new Rr(c.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Br=4,Hf=[.125,.215,.35,.446,.526,.582],Xs=20,Ch=new Gi,Gf=new Lt,Ph=null,Ih=0,Dh=0,Lh=!1,Ws=(1+Math.sqrt(5))/2,Or=1/Ws,Vf=[new D(-Ws,Or,0),new D(Ws,Or,0),new D(-Or,0,Ws),new D(Or,0,Ws),new D(0,Ws,-Or),new D(0,Ws,Or),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],ox=new D,Hr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=ox}=r;Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,Ih,Dh),this._renderer.xr.enabled=Lh,t.scissorTest=!1,Hl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bs||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:gn,format:ei,colorSpace:Ls,depthBuffer:!1},i=Wf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ax(r)),this._blurMaterial=lx(r,t,e)}return i}_compileMaterial(t){let e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,Ch)}_sceneToCubeUV(t,e,n,i,r){let c=new pn(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(Gf),f.toneMapping=di,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));let v=new nn({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),m=new Ot(new Kt,v),p=!1,_=t.background;_?_.isColor&&(v.color.copy(_),t.background=null,p=!0):(v.color.copy(Gf),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(c.up.set(0,h[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[M],r.y,r.z)):y===1?(c.up.set(0,0,h[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[M],r.z)):(c.up.set(0,h[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[M]));let b=this._cubeSize;Hl(i,y*b,M>2?b:0,b,b),f.setRenderTarget(i),p&&f.render(m,c),f.render(t,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=d,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Bs||t.mapping===ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Hl(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ch)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vf[(i-r-1)%Vf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,f=new Ot(this._lodPlanes[i],h),d=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Xs-1),v=r/g,m=isFinite(r)?1+Math.floor(l*v):Xs;m>Xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xs}`);let p=[],_=0;for(let P=0;P<Xs;++P){let I=P/v,E=Math.exp(-I*I/2);p.push(E),P===0?_+=E:P<m&&(_+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let y=this._sizeLods[i],b=3*y*(i>M-Br?i-M+Br:0),A=4*(this._cubeSize-y);Hl(e,b,A,3*y,2*y),c.setRenderTarget(e),c.render(f,Ch)}};function ax(s){let t=[],e=[],n=[],i=s,r=s-Br+1+Hf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Br?c=Hf[o-s+Br-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),l=-h,f=1+h,d=[l,l,f,l,f,f,l,l,f,f,l,f],u=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*u),M=new Float32Array(m*g*u),y=new Float32Array(p*g*u);for(let A=0;A<u;A++){let P=A%3*2/3-1,I=A>2?0:-1,E=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];_.set(E,v*g*A),M.set(d,m*g*A);let w=[A,A,A,A,A,A];y.set(w,p*g*A)}let b=new Fe;b.setAttribute("position",new je(_,v)),b.setAttribute("uv",new je(M,m)),b.setAttribute("faceIndex",new je(y,p)),t.push(b),i>Br&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wf(s,t,e){let n=new Ke(s,t,e);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hl(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function lx(s,t,e){let n=new Float32Array(Xs),i=new D(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Xf(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function qf(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Vh(){return`

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
	`}function cx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===el||c===nl,l=c===Bs||c===ks;if(h||l){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Hr(s)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return h&&u&&u.height>0||l&&u&&i(u)?(e===null&&(e=new Hr(s)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function i(a){let c=0,h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Sr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ux(s,t,e,n){let i={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let u in d)t.update(d[u],s.ARRAY_BUFFER)}function h(f){let d=[],u=f.index,g=f.attributes.position,v=0;if(u!==null){let _=u.array;v=u.version;for(let M=0,y=_.length;M<y;M+=3){let b=_[M+0],A=_[M+1],P=_[M+2];d.push(b,A,A,P,P,b)}}else if(g!==void 0){let _=g.array;v=g.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let b=M+0,A=M+1,P=M+2;d.push(b,A,A,P,P,b)}}else return;let m=new(Eh(d)?xo:go)(d,1);m.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function l(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:l}}function fx(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function h(d,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,d*o,g),e.update(u,n,g))}function l(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function f(d,u,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,u[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=u[_]*v[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function dx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function px(s,t,e){let n=new WeakMap,i=new Ce;function r(o,a,c){let h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=l!==void 0?l.length:0,d=n.get(a);if(d===void 0||d.count!==f){let E=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;u===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let y=a.attributes.position.count*M,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*b*4*f),P=new fo(A,y,b,f);P.type=mi,P.needsUpdate=!0;let I=M*4;for(let w=0;w<f;w++){let N=m[w],X=p[w],B=_[w],k=y*b*4*w;for(let W=0;W<N.count;W++){let q=W*I;u===!0&&(i.fromBufferAttribute(N,W),A[k+q+0]=i.x,A[k+q+1]=i.y,A[k+q+2]=i.z,A[k+q+3]=0),g===!0&&(i.fromBufferAttribute(X,W),A[k+q+4]=i.x,A[k+q+5]=i.y,A[k+q+6]=i.z,A[k+q+7]=0),v===!0&&(i.fromBufferAttribute(B,W),A[k+q+8]=i.x,A[k+q+9]=i.y,A[k+q+10]=i.z,A[k+q+11]=B.itemSize===4?i.w:1)}}d={count:f,texture:P,size:new Yt(y,b)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let v=0;v<h.length;v++)u+=h[v];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function mx(s,t,e,n){let i=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,f=t.get(c,l);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return f}function o(){i=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var ud=new Un,Yf=new ki(1,1),fd=new fo,dd=new Ia,pd=new yo,Zf=[],$f=[],Kf=new Float32Array(16),Jf=new Float32Array(9),Qf=new Float32Array(4);function Gr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Zf[i];if(r===void 0&&(r=new Float32Array(i),Zf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function xn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function vn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Wl(s,t){let e=$f[t];e===void 0&&(e=new Int32Array(t),$f[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function gx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;s.uniform2fv(this.addr,t),vn(e,t)}}function vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xn(e,t))return;s.uniform3fv(this.addr,t),vn(e,t)}}function yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;s.uniform4fv(this.addr,t),vn(e,t)}}function _x(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(xn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),vn(e,t)}else{if(xn(e,n))return;Qf.set(n),s.uniformMatrix2fv(this.addr,!1,Qf),vn(e,n)}}function Mx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(xn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),vn(e,t)}else{if(xn(e,n))return;Jf.set(n),s.uniformMatrix3fv(this.addr,!1,Jf),vn(e,n)}}function bx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(xn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),vn(e,t)}else{if(xn(e,n))return;Kf.set(n),s.uniformMatrix4fv(this.addr,!1,Kf),vn(e,n)}}function wx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;s.uniform2iv(this.addr,t),vn(e,t)}}function Sx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;s.uniform3iv(this.addr,t),vn(e,t)}}function Tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;s.uniform4iv(this.addr,t),vn(e,t)}}function Ax(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;s.uniform2uiv(this.addr,t),vn(e,t)}}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;s.uniform3uiv(this.addr,t),vn(e,t)}}function Px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;s.uniform4uiv(this.addr,t),vn(e,t)}}function Ix(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Yf.compareFunction=Oo,r=Yf):r=ud,e.setTexture2D(t||r,i)}function Dx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dd,i)}function Lx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pd,i)}function Fx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fd,i)}function Ux(s){switch(s){case 5126:return gx;case 35664:return xx;case 35665:return vx;case 35666:return yx;case 35674:return _x;case 35675:return Mx;case 35676:return bx;case 5124:case 35670:return wx;case 35667:case 35671:return Ex;case 35668:case 35672:return Sx;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Fx}}function zx(s,t){s.uniform1fv(this.addr,t)}function Nx(s,t){let e=Gr(t,this.size,2);s.uniform2fv(this.addr,e)}function Ox(s,t){let e=Gr(t,this.size,3);s.uniform3fv(this.addr,e)}function Bx(s,t){let e=Gr(t,this.size,4);s.uniform4fv(this.addr,e)}function kx(s,t){let e=Gr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Hx(s,t){let e=Gr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gx(s,t){let e=Gr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Vx(s,t){s.uniform1iv(this.addr,t)}function Wx(s,t){s.uniform2iv(this.addr,t)}function Xx(s,t){s.uniform3iv(this.addr,t)}function qx(s,t){s.uniform4iv(this.addr,t)}function Yx(s,t){s.uniform1uiv(this.addr,t)}function Zx(s,t){s.uniform2uiv(this.addr,t)}function $x(s,t){s.uniform3uiv(this.addr,t)}function Kx(s,t){s.uniform4uiv(this.addr,t)}function Jx(s,t,e){let n=this.cache,i=t.length,r=Wl(e,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ud,r[o])}function Qx(s,t,e){let n=this.cache,i=t.length,r=Wl(e,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||dd,r[o])}function jx(s,t,e){let n=this.cache,i=t.length,r=Wl(e,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||pd,r[o])}function tv(s,t,e){let n=this.cache,i=t.length,r=Wl(e,i);xn(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||fd,r[o])}function ev(s){switch(s){case 5126:return zx;case 35664:return Nx;case 35665:return Ox;case 35666:return Bx;case 35674:return kx;case 35675:return Hx;case 35676:return Gx;case 5124:case 35670:return Vx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return Zx;case 36295:return $x;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return tv}}var Uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ux(e.type)}},zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ev(e.type)}},Nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function jf(s,t){s.seq.push(t),s.map[t.id]=t}function nv(s,t,e){let n=s.name,i=n.length;for(Fh.lastIndex=0;;){let r=Fh.exec(n),o=Fh.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===i){jf(e,h===void 0?new Uh(a,s,t):new zh(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Nh(a),jf(e,f)),e=f}}}var kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);nv(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function td(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var iv=37297,sv=0;function rv(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ed=new me;function ov(s){Le._getMatrix(ed,Le.workingColorSpace,s);let t=`mat3( ${ed.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(s)){case co:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function nd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+rv(s.getShaderSource(t),a)}else return r}function av(s,t){let e=ov(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lv(s,t){let e;switch(t){case _f:e="Linear";break;case Mf:e="Reinhard";break;case bf:e="Cineon";break;case wf:e="ACESFilmic";break;case Sf:e="AgX";break;case Tf:e="Neutral";break;case Ef:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gl=new D;function cv(){Le.getLuminanceCoefficients(Gl);let s=Gl.x.toFixed(4),t=Gl.y.toFixed(4),e=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function uv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Bo(s){return s!==""}function id(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(s){return s.replace(dv,mv)}var pv=new Map;function mv(s,t){let e=ae[t];if(e===void 0){let n=pv.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oh(e)}var gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(s){return s.replace(gv,xv)}function xv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function od(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function vv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ch?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ya?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function yv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case ks:t="ENVMAP_TYPE_CUBE";break;case Do:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _v(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ks:t="ENVMAP_MODE_REFRACTION";break}return t}function Mv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fh:t="ENVMAP_BLENDING_MULTIPLY";break;case vf:t="ENVMAP_BLENDING_MIX";break;case yf:t="ENVMAP_BLENDING_ADD";break}return t}function bv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wv(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=vv(e),h=yv(e),l=_v(e),f=Mv(e),d=bv(e),u=hv(e),g=uv(r),v=i.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bo).join(`
`),p.length>0&&(p+=`
`)):(m=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),p=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?ae.tonemapping_pars_fragment:"",e.toneMapping!==di?lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,av("linearToOutputTexel",e.outputColorSpace),cv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bo).join(`
`)),o=Oh(o),o=id(o,e),o=sd(o,e),a=Oh(a),a=id(a,e),a=sd(a,e),o=rd(o),a=rd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+m+o,y=_+p+a,b=td(i,i.VERTEX_SHADER,M),A=td(i,i.FRAGMENT_SHADER,y);i.attachShader(v,b),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(N){if(s.debug.checkShaderErrors){let X=i.getProgramInfoLog(v)||"",B=i.getShaderInfoLog(b)||"",k=i.getShaderInfoLog(A)||"",W=X.trim(),q=B.trim(),it=k.trim(),Z=!0,F=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,b,A);else{let Mt=nd(i,b,"vertex"),St=nd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+Mt+`
`+St)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||it==="")&&(F=!1);F&&(N.diagnostics={runnable:Z,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:it,prefix:p}})}i.deleteShader(b),i.deleteShader(A),I=new kr(i,v),E=fv(i,v)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(v,iv)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}var Ev=0,Bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new kh(t),e.set(t,n)),n}},kh=class{constructor(t){this.id=Ev++,this.code=t,this.usedTimes=0}};function Sv(s,t,e,n,i,r,o){let a=new mo,c=new Bh,h=new Set,l=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return h.add(E),E===0?"uv":`uv${E}`}function m(E,w,N,X,B){let k=X.fog,W=B.geometry,q=E.isMeshStandardMaterial?X.environment:null,it=(E.isMeshStandardMaterial?e:t).get(E.envMap||q),Z=it&&it.mapping===Do?it.image.height:null,F=g[E.type];E.precision!==null&&(u=i.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));let Mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,St=Mt!==void 0?Mt.length:0,Nt=0;W.morphAttributes.position!==void 0&&(Nt=1),W.morphAttributes.normal!==void 0&&(Nt=2),W.morphAttributes.color!==void 0&&(Nt=3);let Wt,Zt,Qt,at;if(F){let be=Si[F];Wt=be.vertexShader,Zt=be.fragmentShader}else Wt=E.vertexShader,Zt=E.fragmentShader,c.update(E),Qt=c.getVertexShaderID(E),at=c.getFragmentShaderID(E);let pt=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),$t=B.isInstancedMesh===!0,Ut=B.isBatchedMesh===!0,st=!!E.map,zt=!!E.matcap,L=!!it,kt=!!E.aoMap,Ct=!!E.lightMap,Et=!!E.bumpMap,ft=!!E.normalMap,G=!!E.displacementMap,H=!!E.emissiveMap,j=!!E.metalnessMap,Y=!!E.roughnessMap,J=E.anisotropy>0,S=E.clearcoat>0,x=E.dispersion>0,R=E.iridescence>0,U=E.sheen>0,z=E.transmission>0,O=J&&!!E.anisotropyMap,$=S&&!!E.clearcoatMap,et=S&&!!E.clearcoatNormalMap,rt=S&&!!E.clearcoatRoughnessMap,yt=R&&!!E.iridescenceMap,K=R&&!!E.iridescenceThicknessMap,ot=U&&!!E.sheenColorMap,Tt=U&&!!E.sheenRoughnessMap,ht=!!E.specularMap,wt=!!E.specularColorMap,Gt=!!E.specularIntensityMap,V=z&&!!E.transmissionMap,bt=z&&!!E.thicknessMap,At=!!E.gradientMap,vt=!!E.alphaMap,dt=E.alphaTest>0,ut=!!E.alphaHash,Xt=!!E.extensions,se=di;E.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(se=s.toneMapping);let Ie={shaderID:F,shaderType:E.type,shaderName:E.name,vertexShader:Wt,fragmentShader:Zt,defines:E.defines,customVertexShaderID:Qt,customFragmentShaderID:at,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:Ut,batchingColor:Ut&&B._colorsTexture!==null,instancing:$t,instancingColor:$t&&B.instanceColor!==null,instancingMorph:$t&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ls,alphaToCoverage:!!E.alphaToCoverage,map:st,matcap:zt,envMap:L,envMapMode:L&&it.mapping,envMapCubeUVHeight:Z,aoMap:kt,lightMap:Ct,bumpMap:Et,normalMap:ft,displacementMap:d&&G,emissiveMap:H,normalMapObjectSpace:ft&&E.normalMapType===Cf,normalMapTangentSpace:ft&&E.normalMapType===Mh,metalnessMap:j,roughnessMap:Y,anisotropy:J,anisotropyMap:O,clearcoat:S,clearcoatMap:$,clearcoatNormalMap:et,clearcoatRoughnessMap:rt,dispersion:x,iridescence:R,iridescenceMap:yt,iridescenceThicknessMap:K,sheen:U,sheenColorMap:ot,sheenRoughnessMap:Tt,specularMap:ht,specularColorMap:wt,specularIntensityMap:Gt,transmission:z,transmissionMap:V,thicknessMap:bt,gradientMap:At,opaque:E.transparent===!1&&E.blending===Ni&&E.alphaToCoverage===!1,alphaMap:vt,alphaTest:dt,alphaHash:ut,combine:E.combine,mapUv:st&&v(E.map.channel),aoMapUv:kt&&v(E.aoMap.channel),lightMapUv:Ct&&v(E.lightMap.channel),bumpMapUv:Et&&v(E.bumpMap.channel),normalMapUv:ft&&v(E.normalMap.channel),displacementMapUv:G&&v(E.displacementMap.channel),emissiveMapUv:H&&v(E.emissiveMap.channel),metalnessMapUv:j&&v(E.metalnessMap.channel),roughnessMapUv:Y&&v(E.roughnessMap.channel),anisotropyMapUv:O&&v(E.anisotropyMap.channel),clearcoatMapUv:$&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:et&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(E.sheenRoughnessMap.channel),specularMapUv:ht&&v(E.specularMap.channel),specularColorMapUv:wt&&v(E.specularColorMap.channel),specularIntensityMapUv:Gt&&v(E.specularIntensityMap.channel),transmissionMapUv:V&&v(E.transmissionMap.channel),thicknessMapUv:bt&&v(E.thicknessMap.channel),alphaMapUv:vt&&v(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ft||J),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(st||vt),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xt,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,decodeVideoTexture:st&&E.map.isVideoTexture===!0&&Le.getTransfer(E.map.colorSpace)===ke,decodeVideoTextureEmissive:H&&E.emissiveMap.isVideoTexture===!0&&Le.getTransfer(E.emissiveMap.colorSpace)===ke,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===sn,flipSided:E.side===Sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&E.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ie.vertexUv1s=h.has(1),Ie.vertexUv2s=h.has(2),Ie.vertexUv3s=h.has(3),h.clear(),Ie}function p(E){let w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)w.push(N),w.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(_(w,E),M(w,E),w.push(s.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function _(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function M(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){let w=g[E.type],N;if(w){let X=Si[w];N=gi.clone(X.uniforms)}else N=E.uniforms;return N}function b(E,w){let N;for(let X=0,B=l.length;X<B;X++){let k=l[X];if(k.cacheKey===w){N=k,++N.usedTimes;break}}return N===void 0&&(N=new wv(s,w,E,r),l.push(N)),N}function A(E){if(--E.usedTimes===0){let w=l.indexOf(E);l[w]=l[l.length-1],l.pop(),E.destroy()}}function P(E){c.remove(E)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:A,releaseShaderCache:P,programs:l,dispose:I}}function Tv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Av(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ad(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ld(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,u,g,v,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),t++,p}function a(f,d,u,g,v,m){let p=o(f,d,u,g,v,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(f,d,u,g,v,m){let p=o(f,d,u,g,v,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function h(f,d){e.length>1&&e.sort(f||Av),n.length>1&&n.sort(d||ad),i.length>1&&i.sort(d||ad)}function l(){for(let f=t,d=s.length;f<d;f++){let u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:l,sort:h}}function Rv(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ld,s.set(n,[o])):i>=r.length?(o=new ld,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Cv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Lt};break;case"SpotLight":e={position:new D,direction:new D,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Pv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Iv=0;function Dv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Lv(s){let t=new Cv,e=Pv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);let i=new D,r=new Ht,o=new Ht;function a(h){let l=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,_=0,M=0,y=0,b=0,A=0,P=0;h.sort(Dv);for(let E=0,w=h.length;E<w;E++){let N=h[E],X=N.color,B=N.intensity,k=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=X.r*B,f+=X.g*B,d+=X.b*B;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],B);P++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let it=N.shadow,Z=e.get(N);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,n.directionalShadow[u]=Z,n.directionalShadowMap[u]=W,n.directionalShadowMatrix[u]=N.shadow.matrix,_++}n.directional[u]=q,u++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(X).multiplyScalar(B),q.distance=k,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[v]=q;let it=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,it.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[v]=it.matrix,N.castShadow){let Z=e.get(N);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=W,y++}v++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(X).multiplyScalar(B),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=q,m++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let it=N.shadow,Z=e.get(N);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,Z.shadowCameraNear=it.camera.near,Z.shadowCameraFar=it.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=N.shadow.matrix,M++}n.point[g]=q,g++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(B),q.groundColor.copy(N.groundColor).multiplyScalar(B),n.hemi[p]=q,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Vt.LTC_FLOAT_1,n.rectAreaLTC2=Vt.LTC_FLOAT_2):(n.rectAreaLTC1=Vt.LTC_HALF_1,n.rectAreaLTC2=Vt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==u||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==_||I.numPointShadows!==M||I.numSpotShadows!==y||I.numSpotMaps!==b||I.numLightProbes!==P)&&(n.directional.length=u,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,I.directionalLength=u,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=_,I.numPointShadows=M,I.numSpotShadows=y,I.numSpotMaps=b,I.numLightProbes=P,n.version=Iv++)}function c(h,l){let f=0,d=0,u=0,g=0,v=0,m=l.matrixWorldInverse;for(let p=0,_=h.length;p<_;p++){let M=h[p];if(M.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(M.isSpotLight){let y=n.spot[u];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(M.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function cd(s){let t=new Lv(s),e=[],n=[];function i(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Fv(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new cd(s),t.set(i,[a])):r>=o.length?(a=new cd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zv=`uniform sampler2D shadow_pass;
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
}`;function Nv(s,t,e){let n=new hs,i=new Yt,r=new Yt,o=new Ce,a=new Dr({depthPacking:Bl}),c=new Ua,h={},l=e.maxTextureSize,f={[zi]:Sn,[Sn]:zi,[sn]:sn},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Uv,fragmentShader:zv}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Fe;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ch;let p=this.type;this.render=function(A,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=s.getRenderTarget(),w=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),X=s.state;X.setBlending(Vi),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let B=p!==Ei&&this.type===Ei,k=p===Ei&&this.type!==Ei;for(let W=0,q=A.length;W<q;W++){let it=A[W],Z=it.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let F=Z.getFrameExtents();if(i.multiply(F),r.copy(Z.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/F.x),i.x=r.x*F.x,Z.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/F.y),i.y=r.y*F.y,Z.mapSize.y=r.y)),Z.map===null||B===!0||k===!0){let St=this.type!==Ei?{minFilter:Cn,magFilter:Cn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ke(i.x,i.y,St),Z.map.texture.name=it.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();let Mt=Z.getViewportCount();for(let St=0;St<Mt;St++){let Nt=Z.getViewport(St);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),X.viewport(o),Z.updateMatrices(it,St),n=Z.getFrustum(),y(P,I,Z.camera,it,this.type)}Z.isPointLightShadow!==!0&&this.type===Ei&&_(Z,I),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,w,N)};function _(A,P){let I=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ke(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(P,null,I,d,v,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(P,null,I,u,v,null)}function M(A,P,I,E){let w=null,N=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)w=N;else if(w=I.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let X=w.uuid,B=P.uuid,k=h[X];k===void 0&&(k={},h[X]=k);let W=k[B];W===void 0&&(W=w.clone(),k[B]=W,P.addEventListener("dispose",b)),w=W}if(w.visible=P.visible,w.wireframe=P.wireframe,E===Ei?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:f[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let X=s.properties.get(w);X.light=I}return w}function y(A,P,I,E,w){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Ei)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let B=t.update(A),k=A.material;if(Array.isArray(k)){let W=B.groups;for(let q=0,it=W.length;q<it;q++){let Z=W[q],F=k[Z.materialIndex];if(F&&F.visible){let Mt=M(A,F,E,w);A.onBeforeShadow(s,A,P,I,B,Mt,Z),s.renderBufferDirect(I,null,B,Mt,A,Z),A.onAfterShadow(s,A,P,I,B,Mt,Z)}}}else if(k.visible){let W=M(A,k,E,w);A.onBeforeShadow(s,A,P,I,B,W,null),s.renderBufferDirect(I,null,B,W,A,null),A.onAfterShadow(s,A,P,I,B,W,null)}}let X=A.children;for(let B=0,k=X.length;B<k;B++)y(X[B],P,I,E,w)}function b(A){A.target.removeEventListener("dispose",b);for(let I in h){let E=h[I],w=A.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}var Ov={[Za]:$a,[Ka]:ja,[Ja]:tl,[Ds]:Qa,[$a]:Za,[ja]:Ka,[tl]:Ja,[Qa]:Ds};function Bv(s,t){function e(){let V=!1,bt=new Ce,At=null,vt=new Ce(0,0,0,0);return{setMask:function(dt){At!==dt&&!V&&(s.colorMask(dt,dt,dt,dt),At=dt)},setLocked:function(dt){V=dt},setClear:function(dt,ut,Xt,se,Ie){Ie===!0&&(dt*=se,ut*=se,Xt*=se),bt.set(dt,ut,Xt,se),vt.equals(bt)===!1&&(s.clearColor(dt,ut,Xt,se),vt.copy(bt))},reset:function(){V=!1,At=null,vt.set(-1,0,0,0)}}}function n(){let V=!1,bt=!1,At=null,vt=null,dt=null;return{setReversed:function(ut){if(bt!==ut){let Xt=t.get("EXT_clip_control");ut?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),bt=ut;let se=dt;dt=null,this.setClear(se)}},getReversed:function(){return bt},setTest:function(ut){ut?pt(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(ut){At!==ut&&!V&&(s.depthMask(ut),At=ut)},setFunc:function(ut){if(bt&&(ut=Ov[ut]),vt!==ut){switch(ut){case Za:s.depthFunc(s.NEVER);break;case $a:s.depthFunc(s.ALWAYS);break;case Ka:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case Ja:s.depthFunc(s.EQUAL);break;case Qa:s.depthFunc(s.GEQUAL);break;case ja:s.depthFunc(s.GREATER);break;case tl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=ut}},setLocked:function(ut){V=ut},setClear:function(ut){dt!==ut&&(bt&&(ut=1-ut),s.clearDepth(ut),dt=ut)},reset:function(){V=!1,At=null,vt=null,dt=null,bt=!1}}}function i(){let V=!1,bt=null,At=null,vt=null,dt=null,ut=null,Xt=null,se=null,Ie=null;return{setTest:function(be){V||(be?pt(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(be){bt!==be&&!V&&(s.stencilMask(be),bt=be)},setFunc:function(be,De,ln){(At!==be||vt!==De||dt!==ln)&&(s.stencilFunc(be,De,ln),At=be,vt=De,dt=ln)},setOp:function(be,De,ln){(ut!==be||Xt!==De||se!==ln)&&(s.stencilOp(be,De,ln),ut=be,Xt=De,se=ln)},setLocked:function(be){V=be},setClear:function(be){Ie!==be&&(s.clearStencil(be),Ie=be)},reset:function(){V=!1,bt=null,At=null,vt=null,dt=null,ut=null,Xt=null,se=null,Ie=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,h=new WeakMap,l={},f={},d=new WeakMap,u=[],g=null,v=!1,m=null,p=null,_=null,M=null,y=null,b=null,A=null,P=new Lt(0,0,0),I=0,E=!1,w=null,N=null,X=null,B=null,k=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,it=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=it>=1):Z.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=it>=2);let F=null,Mt={},St=s.getParameter(s.SCISSOR_BOX),Nt=s.getParameter(s.VIEWPORT),Wt=new Ce().fromArray(St),Zt=new Ce().fromArray(Nt);function Qt(V,bt,At,vt){let dt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(V,ut),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<At;Xt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(bt+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return ut}let at={};at[s.TEXTURE_2D]=Qt(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=Qt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=Qt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=Qt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(s.DEPTH_TEST),o.setFunc(Ds),Et(!1),ft(lh),pt(s.CULL_FACE),kt(Vi);function pt(V){l[V]!==!0&&(s.enable(V),l[V]=!0)}function xt(V){l[V]!==!1&&(s.disable(V),l[V]=!1)}function $t(V,bt){return f[V]!==bt?(s.bindFramebuffer(V,bt),f[V]=bt,V===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=bt),V===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ut(V,bt){let At=u,vt=!1;if(V){At=d.get(bt),At===void 0&&(At=[],d.set(bt,At));let dt=V.textures;if(At.length!==dt.length||At[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Xt=dt.length;ut<Xt;ut++)At[ut]=s.COLOR_ATTACHMENT0+ut;At.length=dt.length,vt=!0}}else At[0]!==s.BACK&&(At[0]=s.BACK,vt=!0);vt&&s.drawBuffers(At)}function st(V){return g!==V?(s.useProgram(V),g=V,!0):!1}let zt={[ls]:s.FUNC_ADD,[tf]:s.FUNC_SUBTRACT,[ef]:s.FUNC_REVERSE_SUBTRACT};zt[nf]=s.MIN,zt[sf]=s.MAX;let L={[rf]:s.ZERO,[of]:s.ONE,[af]:s.SRC_COLOR,[Sa]:s.SRC_ALPHA,[df]:s.SRC_ALPHA_SATURATE,[uf]:s.DST_COLOR,[cf]:s.DST_ALPHA,[lf]:s.ONE_MINUS_SRC_COLOR,[Ta]:s.ONE_MINUS_SRC_ALPHA,[ff]:s.ONE_MINUS_DST_COLOR,[hf]:s.ONE_MINUS_DST_ALPHA,[pf]:s.CONSTANT_COLOR,[mf]:s.ONE_MINUS_CONSTANT_COLOR,[gf]:s.CONSTANT_ALPHA,[xf]:s.ONE_MINUS_CONSTANT_ALPHA};function kt(V,bt,At,vt,dt,ut,Xt,se,Ie,be){if(V===Vi){v===!0&&(xt(s.BLEND),v=!1);return}if(v===!1&&(pt(s.BLEND),v=!0),V!==ju){if(V!==m||be!==E){if((p!==ls||y!==ls)&&(s.blendEquation(s.FUNC_ADD),p=ls,y=ls),be)switch(V){case Ni:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case On:s.blendFunc(s.ONE,s.ONE);break;case hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case On:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case hh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,M=null,b=null,A=null,P.set(0,0,0),I=0,m=V,E=be}return}dt=dt||bt,ut=ut||At,Xt=Xt||vt,(bt!==p||dt!==y)&&(s.blendEquationSeparate(zt[bt],zt[dt]),p=bt,y=dt),(At!==_||vt!==M||ut!==b||Xt!==A)&&(s.blendFuncSeparate(L[At],L[vt],L[ut],L[Xt]),_=At,M=vt,b=ut,A=Xt),(se.equals(P)===!1||Ie!==I)&&(s.blendColor(se.r,se.g,se.b,Ie),P.copy(se),I=Ie),m=V,E=!1}function Ct(V,bt){V.side===sn?xt(s.CULL_FACE):pt(s.CULL_FACE);let At=V.side===Sn;bt&&(At=!At),Et(At),V.blending===Ni&&V.transparent===!1?kt(Vi):kt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let vt=V.stencilWrite;a.setTest(vt),vt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),H(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(V){w!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),w=V)}function ft(V){V!==Ju?(pt(s.CULL_FACE),V!==N&&(V===lh?s.cullFace(s.BACK):V===Qu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),N=V}function G(V){V!==X&&(q&&s.lineWidth(V),X=V)}function H(V,bt,At){V?(pt(s.POLYGON_OFFSET_FILL),(B!==bt||k!==At)&&(s.polygonOffset(bt,At),B=bt,k=At)):xt(s.POLYGON_OFFSET_FILL)}function j(V){V?pt(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function Y(V){V===void 0&&(V=s.TEXTURE0+W-1),F!==V&&(s.activeTexture(V),F=V)}function J(V,bt,At){At===void 0&&(F===null?At=s.TEXTURE0+W-1:At=F);let vt=Mt[At];vt===void 0&&(vt={type:void 0,texture:void 0},Mt[At]=vt),(vt.type!==V||vt.texture!==bt)&&(F!==At&&(s.activeTexture(At),F=At),s.bindTexture(V,bt||at[V]),vt.type=V,vt.texture=bt)}function S(){let V=Mt[F];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function U(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function z(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function O(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(V){Wt.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Wt.copy(V))}function Tt(V){Zt.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Zt.copy(V))}function ht(V,bt){let At=h.get(bt);At===void 0&&(At=new WeakMap,h.set(bt,At));let vt=At.get(V);vt===void 0&&(vt=s.getUniformBlockIndex(bt,V.name),At.set(V,vt))}function wt(V,bt){let vt=h.get(bt).get(V);c.get(bt)!==vt&&(s.uniformBlockBinding(bt,vt,V.__bindingPointIndex),c.set(bt,vt))}function Gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},F=null,Mt={},f={},d=new WeakMap,u=[],g=null,v=!1,m=null,p=null,_=null,M=null,y=null,b=null,A=null,P=new Lt(0,0,0),I=0,E=!1,w=null,N=null,X=null,B=null,k=null,Wt.set(0,0,s.canvas.width,s.canvas.height),Zt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:xt,bindFramebuffer:$t,drawBuffers:Ut,useProgram:st,setBlending:kt,setMaterial:Ct,setFlipSided:Et,setCullFace:ft,setLineWidth:G,setPolygonOffset:H,setScissorTest:j,activeTexture:Y,bindTexture:J,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:R,texImage2D:yt,texImage3D:K,updateUBOMapping:ht,uniformBlockBinding:wt,texStorage2D:et,texStorage3D:rt,texSubImage2D:U,texSubImage3D:z,compressedTexSubImage2D:O,compressedTexSubImage3D:$,scissor:ot,viewport:Tt,reset:Gt}}function kv(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Yt,l=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return u?new OffscreenCanvas(S,x):uo("canvas")}function v(S,x,R){let U=1,z=J(S);if((z.width>R||z.height>R)&&(U=R/Math.max(z.width,z.height)),U<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let O=Math.floor(U*z.width),$=Math.floor(U*z.height);f===void 0&&(f=g(O,$));let et=x?g(O,$):f;return et.width=O,et.height=$,et.getContext("2d").drawImage(S,0,0,O,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+O+"x"+$+")."),et}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){s.generateMipmap(S)}function _(S){return S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?s.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(S,x,R,U,z=!1){if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let O=x;if(x===s.RED&&(R===s.FLOAT&&(O=s.R32F),R===s.HALF_FLOAT&&(O=s.R16F),R===s.UNSIGNED_BYTE&&(O=s.R8)),x===s.RED_INTEGER&&(R===s.UNSIGNED_BYTE&&(O=s.R8UI),R===s.UNSIGNED_SHORT&&(O=s.R16UI),R===s.UNSIGNED_INT&&(O=s.R32UI),R===s.BYTE&&(O=s.R8I),R===s.SHORT&&(O=s.R16I),R===s.INT&&(O=s.R32I)),x===s.RG&&(R===s.FLOAT&&(O=s.RG32F),R===s.HALF_FLOAT&&(O=s.RG16F),R===s.UNSIGNED_BYTE&&(O=s.RG8)),x===s.RG_INTEGER&&(R===s.UNSIGNED_BYTE&&(O=s.RG8UI),R===s.UNSIGNED_SHORT&&(O=s.RG16UI),R===s.UNSIGNED_INT&&(O=s.RG32UI),R===s.BYTE&&(O=s.RG8I),R===s.SHORT&&(O=s.RG16I),R===s.INT&&(O=s.RG32I)),x===s.RGB_INTEGER&&(R===s.UNSIGNED_BYTE&&(O=s.RGB8UI),R===s.UNSIGNED_SHORT&&(O=s.RGB16UI),R===s.UNSIGNED_INT&&(O=s.RGB32UI),R===s.BYTE&&(O=s.RGB8I),R===s.SHORT&&(O=s.RGB16I),R===s.INT&&(O=s.RGB32I)),x===s.RGBA_INTEGER&&(R===s.UNSIGNED_BYTE&&(O=s.RGBA8UI),R===s.UNSIGNED_SHORT&&(O=s.RGBA16UI),R===s.UNSIGNED_INT&&(O=s.RGBA32UI),R===s.BYTE&&(O=s.RGBA8I),R===s.SHORT&&(O=s.RGBA16I),R===s.INT&&(O=s.RGBA32I)),x===s.RGB&&(R===s.UNSIGNED_INT_5_9_9_9_REV&&(O=s.RGB9_E5),R===s.UNSIGNED_INT_10F_11F_11F_REV&&(O=s.R11F_G11F_B10F)),x===s.RGBA){let $=z?co:Le.getTransfer(U);R===s.FLOAT&&(O=s.RGBA32F),R===s.HALF_FLOAT&&(O=s.RGBA16F),R===s.UNSIGNED_BYTE&&(O=$===ke?s.SRGB8_ALPHA8:s.RGBA8),R===s.UNSIGNED_SHORT_4_4_4_4&&(O=s.RGBA4),R===s.UNSIGNED_SHORT_5_5_5_1&&(O=s.RGB5_A1)}return(O===s.R16F||O===s.R32F||O===s.RG16F||O===s.RG32F||O===s.RGBA16F||O===s.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function y(S,x){let R;return S?x===null||x===ps||x===Ur?R=s.DEPTH24_STENCIL8:x===mi?R=s.DEPTH32F_STENCIL8:x===Fr&&(R=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ps||x===Ur?R=s.DEPTH_COMPONENT24:x===mi?R=s.DEPTH_COMPONENT32F:x===Fr&&(R=s.DEPTH_COMPONENT16),R}function b(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Cn&&S.minFilter!==Fn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function A(S){let x=S.target;x.removeEventListener("dispose",A),I(x),x.isVideoTexture&&l.delete(x)}function P(S){let x=S.target;x.removeEventListener("dispose",P),w(x)}function I(S){let x=n.get(S);if(x.__webglInit===void 0)return;let R=S.source,U=d.get(R);if(U){let z=U[x.__cacheKey];z.usedTimes--,z.usedTimes===0&&E(S),Object.keys(U).length===0&&d.delete(R)}n.remove(S)}function E(S){let x=n.get(S);s.deleteTexture(x.__webglTexture);let R=S.source,U=d.get(R);delete U[x.__cacheKey],o.memory.textures--}function w(S){let x=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(x.__webglFramebuffer[U]))for(let z=0;z<x.__webglFramebuffer[U].length;z++)s.deleteFramebuffer(x.__webglFramebuffer[U][z]);else s.deleteFramebuffer(x.__webglFramebuffer[U]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[U])}else{if(Array.isArray(x.__webglFramebuffer))for(let U=0;U<x.__webglFramebuffer.length;U++)s.deleteFramebuffer(x.__webglFramebuffer[U]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let U=0;U<x.__webglColorRenderbuffer.length;U++)x.__webglColorRenderbuffer[U]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[U]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let R=S.textures;for(let U=0,z=R.length;U<z;U++){let O=n.get(R[U]);O.__webglTexture&&(s.deleteTexture(O.__webglTexture),o.memory.textures--),n.remove(R[U])}n.remove(S)}let N=0;function X(){N=0}function B(){let S=N;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),N+=1,S}function k(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function W(S,x){let R=n.get(S);if(S.isVideoTexture&&j(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&R.__version!==S.version){let U=S.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(R,S,x);return}}else S.isExternalTexture&&(R.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,R.__webglTexture,s.TEXTURE0+x)}function q(S,x){let R=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&R.__version!==S.version){at(R,S,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,R.__webglTexture,s.TEXTURE0+x)}function it(S,x){let R=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&R.__version!==S.version){at(R,S,x);return}e.bindTexture(s.TEXTURE_3D,R.__webglTexture,s.TEXTURE0+x)}function Z(S,x){let R=n.get(S);if(S.version>0&&R.__version!==S.version){pt(R,S,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+x)}let F={[cs]:s.REPEAT,[as]:s.CLAMP_TO_EDGE,[Aa]:s.MIRRORED_REPEAT},Mt={[Cn]:s.NEAREST,[Af]:s.NEAREST_MIPMAP_NEAREST,[Lo]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[il]:s.LINEAR_MIPMAP_NEAREST,[ds]:s.LINEAR_MIPMAP_LINEAR},St={[Pf]:s.NEVER,[zf]:s.ALWAYS,[If]:s.LESS,[Oo]:s.LEQUAL,[Df]:s.EQUAL,[Uf]:s.GEQUAL,[Lf]:s.GREATER,[Ff]:s.NOTEQUAL};function Nt(S,x){if(x.type===mi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Fn||x.magFilter===il||x.magFilter===Lo||x.magFilter===ds||x.minFilter===Fn||x.minFilter===il||x.minFilter===Lo||x.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(S,s.TEXTURE_WRAP_S,F[x.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,F[x.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,F[x.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,Mt[x.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Cn||x.minFilter!==Lo&&x.minFilter!==ds||x.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let R=t.get("EXT_texture_filter_anisotropic");s.texParameterf(S,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Wt(S,x){let R=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",A));let U=x.source,z=d.get(U);z===void 0&&(z={},d.set(U,z));let O=k(x);if(O!==S.__cacheKey){z[O]===void 0&&(z[O]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,R=!0),z[O].usedTimes++;let $=z[S.__cacheKey];$!==void 0&&(z[S.__cacheKey].usedTimes--,$.usedTimes===0&&E(x)),S.__cacheKey=O,S.__webglTexture=z[O].texture}return R}function Zt(S,x,R){return Math.floor(Math.floor(S/R)/x)}function Qt(S,x,R,U){let O=S.updateRanges;if(O.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,R,U,x.data);else{O.sort((K,ot)=>K.start-ot.start);let $=0;for(let K=1;K<O.length;K++){let ot=O[$],Tt=O[K],ht=ot.start+ot.count,wt=Zt(Tt.start,x.width,4),Gt=Zt(ot.start,x.width,4);Tt.start<=ht+1&&wt===Gt&&Zt(Tt.start+Tt.count-1,x.width,4)===wt?ot.count=Math.max(ot.count,Tt.start+Tt.count-ot.start):(++$,O[$]=Tt)}O.length=$+1;let et=s.getParameter(s.UNPACK_ROW_LENGTH),rt=s.getParameter(s.UNPACK_SKIP_PIXELS),yt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let K=0,ot=O.length;K<ot;K++){let Tt=O[K],ht=Math.floor(Tt.start/4),wt=Math.ceil(Tt.count/4),Gt=ht%x.width,V=Math.floor(ht/x.width),bt=wt,At=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),e.texSubImage2D(s.TEXTURE_2D,0,Gt,V,bt,At,R,U,x.data)}S.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,et),s.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),s.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function at(S,x,R){let U=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(U=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(U=s.TEXTURE_3D);let z=Wt(S,x),O=x.source;e.bindTexture(U,S.__webglTexture,s.TEXTURE0+R);let $=n.get(O);if(O.version!==$.__version||z===!0){e.activeTexture(s.TEXTURE0+R);let et=Le.getPrimaries(Le.workingColorSpace),rt=x.colorSpace===Wi?null:Le.getPrimaries(x.colorSpace),yt=x.colorSpace===Wi||et===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let K=v(x.image,!1,i.maxTextureSize);K=Y(x,K);let ot=r.convert(x.format,x.colorSpace),Tt=r.convert(x.type),ht=M(x.internalFormat,ot,Tt,x.colorSpace,x.isVideoTexture);Nt(U,x);let wt,Gt=x.mipmaps,V=x.isVideoTexture!==!0,bt=$.__version===void 0||z===!0,At=O.dataReady,vt=b(x,K);if(x.isDepthTexture)ht=y(x.format===zr,x.type),bt&&(V?e.texStorage2D(s.TEXTURE_2D,1,ht,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,ht,K.width,K.height,0,ot,Tt,null));else if(x.isDataTexture)if(Gt.length>0){V&&bt&&e.texStorage2D(s.TEXTURE_2D,vt,ht,Gt[0].width,Gt[0].height);for(let dt=0,ut=Gt.length;dt<ut;dt++)wt=Gt[dt],V?At&&e.texSubImage2D(s.TEXTURE_2D,dt,0,0,wt.width,wt.height,ot,Tt,wt.data):e.texImage2D(s.TEXTURE_2D,dt,ht,wt.width,wt.height,0,ot,Tt,wt.data);x.generateMipmaps=!1}else V?(bt&&e.texStorage2D(s.TEXTURE_2D,vt,ht,K.width,K.height),At&&Qt(x,K,ot,Tt)):e.texImage2D(s.TEXTURE_2D,0,ht,K.width,K.height,0,ot,Tt,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){V&&bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,ht,Gt[0].width,Gt[0].height,K.depth);for(let dt=0,ut=Gt.length;dt<ut;dt++)if(wt=Gt[dt],x.format!==ei)if(ot!==null)if(V){if(At)if(x.layerUpdates.size>0){let Xt=Rh(wt.width,wt.height,x.format,x.type);for(let se of x.layerUpdates){let Ie=wt.data.subarray(se*Xt/wt.data.BYTES_PER_ELEMENT,(se+1)*Xt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,se,wt.width,wt.height,1,ot,Ie)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,wt.width,wt.height,K.depth,ot,wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,dt,ht,wt.width,wt.height,K.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?At&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,wt.width,wt.height,K.depth,ot,Tt,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,dt,ht,wt.width,wt.height,K.depth,0,ot,Tt,wt.data)}else{V&&bt&&e.texStorage2D(s.TEXTURE_2D,vt,ht,Gt[0].width,Gt[0].height);for(let dt=0,ut=Gt.length;dt<ut;dt++)wt=Gt[dt],x.format!==ei?ot!==null?V?At&&e.compressedTexSubImage2D(s.TEXTURE_2D,dt,0,0,wt.width,wt.height,ot,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,dt,ht,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?At&&e.texSubImage2D(s.TEXTURE_2D,dt,0,0,wt.width,wt.height,ot,Tt,wt.data):e.texImage2D(s.TEXTURE_2D,dt,ht,wt.width,wt.height,0,ot,Tt,wt.data)}else if(x.isDataArrayTexture)if(V){if(bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,ht,K.width,K.height,K.depth),At)if(x.layerUpdates.size>0){let dt=Rh(K.width,K.height,x.format,x.type);for(let ut of x.layerUpdates){let Xt=K.data.subarray(ut*dt/K.data.BYTES_PER_ELEMENT,(ut+1)*dt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,K.width,K.height,1,ot,Tt,Xt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ot,Tt,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ht,K.width,K.height,K.depth,0,ot,Tt,K.data);else if(x.isData3DTexture)V?(bt&&e.texStorage3D(s.TEXTURE_3D,vt,ht,K.width,K.height,K.depth),At&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ot,Tt,K.data)):e.texImage3D(s.TEXTURE_3D,0,ht,K.width,K.height,K.depth,0,ot,Tt,K.data);else if(x.isFramebufferTexture){if(bt)if(V)e.texStorage2D(s.TEXTURE_2D,vt,ht,K.width,K.height);else{let dt=K.width,ut=K.height;for(let Xt=0;Xt<vt;Xt++)e.texImage2D(s.TEXTURE_2D,Xt,ht,dt,ut,0,ot,Tt,null),dt>>=1,ut>>=1}}else if(Gt.length>0){if(V&&bt){let dt=J(Gt[0]);e.texStorage2D(s.TEXTURE_2D,vt,ht,dt.width,dt.height)}for(let dt=0,ut=Gt.length;dt<ut;dt++)wt=Gt[dt],V?At&&e.texSubImage2D(s.TEXTURE_2D,dt,0,0,ot,Tt,wt):e.texImage2D(s.TEXTURE_2D,dt,ht,ot,Tt,wt);x.generateMipmaps=!1}else if(V){if(bt){let dt=J(K);e.texStorage2D(s.TEXTURE_2D,vt,ht,dt.width,dt.height)}At&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot,Tt,K)}else e.texImage2D(s.TEXTURE_2D,0,ht,ot,Tt,K);m(x)&&p(U),$.__version=O.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function pt(S,x,R){if(x.image.length!==6)return;let U=Wt(S,x),z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+R);let O=n.get(z);if(z.version!==O.__version||U===!0){e.activeTexture(s.TEXTURE0+R);let $=Le.getPrimaries(Le.workingColorSpace),et=x.colorSpace===Wi?null:Le.getPrimaries(x.colorSpace),rt=x.colorSpace===Wi||$===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let yt=x.isCompressedTexture||x.image[0].isCompressedTexture,K=x.image[0]&&x.image[0].isDataTexture,ot=[];for(let ut=0;ut<6;ut++)!yt&&!K?ot[ut]=v(x.image[ut],!0,i.maxCubemapSize):ot[ut]=K?x.image[ut].image:x.image[ut],ot[ut]=Y(x,ot[ut]);let Tt=ot[0],ht=r.convert(x.format,x.colorSpace),wt=r.convert(x.type),Gt=M(x.internalFormat,ht,wt,x.colorSpace),V=x.isVideoTexture!==!0,bt=O.__version===void 0||U===!0,At=z.dataReady,vt=b(x,Tt);Nt(s.TEXTURE_CUBE_MAP,x);let dt;if(yt){V&&bt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Gt,Tt.width,Tt.height);for(let ut=0;ut<6;ut++){dt=ot[ut].mipmaps;for(let Xt=0;Xt<dt.length;Xt++){let se=dt[Xt];x.format!==ei?ht!==null?V?At&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt,0,0,se.width,se.height,ht,se.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt,Gt,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?At&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt,0,0,se.width,se.height,ht,wt,se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt,Gt,se.width,se.height,0,ht,wt,se.data)}}}else{if(dt=x.mipmaps,V&&bt){dt.length>0&&vt++;let ut=J(ot[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Gt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(K){V?At&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ot[ut].width,ot[ut].height,ht,wt,ot[ut].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Gt,ot[ut].width,ot[ut].height,0,ht,wt,ot[ut].data);for(let Xt=0;Xt<dt.length;Xt++){let Ie=dt[Xt].image[ut].image;V?At&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt+1,0,0,Ie.width,Ie.height,ht,wt,Ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt+1,Gt,Ie.width,Ie.height,0,ht,wt,Ie.data)}}else{V?At&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ht,wt,ot[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Gt,ht,wt,ot[ut]);for(let Xt=0;Xt<dt.length;Xt++){let se=dt[Xt];V?At&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt+1,0,0,ht,wt,se.image[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt+1,Gt,ht,wt,se.image[ut])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),O.__version=z.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function xt(S,x,R,U,z,O){let $=r.convert(R.format,R.colorSpace),et=r.convert(R.type),rt=M(R.internalFormat,$,et,R.colorSpace),yt=n.get(x),K=n.get(R);if(K.__renderTarget=x,!yt.__hasExternalTextures){let ot=Math.max(1,x.width>>O),Tt=Math.max(1,x.height>>O);z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?e.texImage3D(z,O,rt,ot,Tt,x.depth,0,$,et,null):e.texImage2D(z,O,rt,ot,Tt,0,$,et,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),H(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,U,z,K.__webglTexture,0,G(x)):(z===s.TEXTURE_2D||z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,U,z,K.__webglTexture,O),e.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(S,x,R){if(s.bindRenderbuffer(s.RENDERBUFFER,S),x.depthBuffer){let U=x.depthTexture,z=U&&U.isDepthTexture?U.type:null,O=y(x.stencilBuffer,z),$=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=G(x);H(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,O,x.width,x.height):R?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,O,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,O,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,S)}else{let U=x.textures;for(let z=0;z<U.length;z++){let O=U[z],$=r.convert(O.format,O.colorSpace),et=r.convert(O.type),rt=M(O.internalFormat,$,et,O.colorSpace),yt=G(x);R&&H(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,rt,x.width,x.height):H(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,rt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,rt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let U=n.get(x.depthTexture);U.__renderTarget=x,(!U.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);let z=U.__webglTexture,O=G(x);if(x.depthTexture.format===Er)H(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,z,0,O):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,z,0);else if(x.depthTexture.format===zr)H(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,z,0,O):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function st(S){let x=n.get(S),R=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){let U=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),U){let z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,U.removeEventListener("dispose",z)};U.addEventListener("dispose",z),x.__depthDisposeCallback=z}x.__boundDepthTexture=U}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");let U=S.texture.mipmaps;U&&U.length>0?Ut(x.__webglFramebuffer[0],S):Ut(x.__webglFramebuffer,S)}else if(R){x.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[U]),x.__webglDepthbuffer[U]===void 0)x.__webglDepthbuffer[U]=s.createRenderbuffer(),$t(x.__webglDepthbuffer[U],S,!1);else{let z=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,O=x.__webglDepthbuffer[U];s.bindRenderbuffer(s.RENDERBUFFER,O),s.framebufferRenderbuffer(s.FRAMEBUFFER,z,s.RENDERBUFFER,O)}}else{let U=S.texture.mipmaps;if(U&&U.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),$t(x.__webglDepthbuffer,S,!1);else{let z=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,O=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,O),s.framebufferRenderbuffer(s.FRAMEBUFFER,z,s.RENDERBUFFER,O)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(S,x,R){let U=n.get(S);x!==void 0&&xt(U.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),R!==void 0&&st(S)}function L(S){let x=S.texture,R=n.get(S),U=n.get(x);S.addEventListener("dispose",P);let z=S.textures,O=S.isWebGLCubeRenderTarget===!0,$=z.length>1;if($||(U.__webglTexture===void 0&&(U.__webglTexture=s.createTexture()),U.__version=x.version,o.memory.textures++),O){R.__webglFramebuffer=[];for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[et]=[];for(let rt=0;rt<x.mipmaps.length;rt++)R.__webglFramebuffer[et][rt]=s.createFramebuffer()}else R.__webglFramebuffer[et]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let et=0;et<x.mipmaps.length;et++)R.__webglFramebuffer[et]=s.createFramebuffer()}else R.__webglFramebuffer=s.createFramebuffer();if($)for(let et=0,rt=z.length;et<rt;et++){let yt=n.get(z[et]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(S.samples>0&&H(S)===!1){R.__webglMultisampledFramebuffer=s.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let et=0;et<z.length;et++){let rt=z[et];R.__webglColorRenderbuffer[et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,R.__webglColorRenderbuffer[et]);let yt=r.convert(rt.format,rt.colorSpace),K=r.convert(rt.type),ot=M(rt.internalFormat,yt,K,rt.colorSpace,S.isXRRenderTarget===!0),Tt=G(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,ot,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,R.__webglColorRenderbuffer[et])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(R.__webglDepthRenderbuffer=s.createRenderbuffer(),$t(R.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(O){e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture),Nt(s.TEXTURE_CUBE_MAP,x);for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)xt(R.__webglFramebuffer[et][rt],S,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,rt);else xt(R.__webglFramebuffer[et],S,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(x)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($){for(let et=0,rt=z.length;et<rt;et++){let yt=z[et],K=n.get(yt),ot=s.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ot=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),Nt(ot,yt),xt(R.__webglFramebuffer,S,yt,s.COLOR_ATTACHMENT0+et,ot,0),m(yt)&&p(ot)}e.unbindTexture()}else{let et=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(et=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,U.__webglTexture),Nt(et,x),x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)xt(R.__webglFramebuffer[rt],S,x,s.COLOR_ATTACHMENT0,et,rt);else xt(R.__webglFramebuffer,S,x,s.COLOR_ATTACHMENT0,et,0);m(x)&&p(et),e.unbindTexture()}S.depthBuffer&&st(S)}function kt(S){let x=S.textures;for(let R=0,U=x.length;R<U;R++){let z=x[R];if(m(z)){let O=_(S),$=n.get(z).__webglTexture;e.bindTexture(O,$),p(O),e.unbindTexture()}}}let Ct=[],Et=[];function ft(S){if(S.samples>0){if(H(S)===!1){let x=S.textures,R=S.width,U=S.height,z=s.COLOR_BUFFER_BIT,O=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=n.get(S),et=x.length>1;if(et)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,$.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);let rt=S.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(z|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(z|=s.STENCIL_BUFFER_BIT)),et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$.__webglColorRenderbuffer[yt]);let K=n.get(x[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,R,U,0,0,R,U,z,s.NEAREST),c===!0&&(Ct.length=0,Et.length=0,Ct.push(s.COLOR_ATTACHMENT0+yt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ct.push(O),Et.push(O),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),et)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,$.__webglColorRenderbuffer[yt]);let K=n.get(x[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,$.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,K,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let x=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function G(S){return Math.min(i.maxSamples,S.samples)}function H(S){let x=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function j(S){let x=o.render.frame;l.get(S)!==x&&(l.set(S,x),S.update())}function Y(S,x){let R=S.colorSpace,U=S.format,z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||R!==Ls&&R!==Wi&&(Le.getTransfer(R)===ke?(U!==ei||z!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),x}function J(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(h.width=S.naturalWidth||S.width,h.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(h.width=S.displayWidth,h.height=S.displayHeight):(h.width=S.width,h.height=S.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=it,this.setTextureCube=Z,this.rebindTextures=zt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=H}function Hv(s,t){function e(n,i=Wi){let r,o=Le.getTransfer(i);if(n===pi)return s.UNSIGNED_BYTE;if(n===rl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return s.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ph)return s.BYTE;if(n===mh)return s.SHORT;if(n===Fr)return s.UNSIGNED_SHORT;if(n===sl)return s.INT;if(n===ps)return s.UNSIGNED_INT;if(n===mi)return s.FLOAT;if(n===gn)return s.HALF_FLOAT;if(n===vh)return s.ALPHA;if(n===yh)return s.RGB;if(n===ei)return s.RGBA;if(n===Er)return s.DEPTH_COMPONENT;if(n===zr)return s.DEPTH_STENCIL;if(n===al)return s.RED;if(n===ll)return s.RED_INTEGER;if(n===_h)return s.RG;if(n===cl)return s.RG_INTEGER;if(n===hl)return s.RGBA_INTEGER;if(n===Fo||n===Uo||n===zo||n===No)if(o===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===fl||n===dl||n===pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ml||n===gl||n===xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ml||n===gl)return o===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vl||n===yl||n===_l||n===Ml||n===bl||n===wl||n===El||n===Sl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ml)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Al)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pl)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dl||n===Ll||n===Fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dl)return o===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===zl||n===Nl||n===Ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vv=`
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

}`,Hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new bo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Oe({vertexShader:Gv,fragmentShader:Vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new He(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gh=class extends Oi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,f=null,d=null,u=null,g=null,v=typeof XRWebGLBinding<"u",m=new Hh,p={},_=e.getContextAttributes(),M=null,y=null,b=[],A=[],P=new Yt,I=null,E=new pn;E.viewport=new Ce;let w=new pn;w.viewport=new Ce;let N=[E,w],X=new qa,B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let pt=b[at];return pt===void 0&&(pt=new Cr,b[at]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(at){let pt=b[at];return pt===void 0&&(pt=new Cr,b[at]=pt),pt.getGripSpace()},this.getHand=function(at){let pt=b[at];return pt===void 0&&(pt=new Cr,b[at]=pt),pt.getHandSpace()};function W(at){let pt=A.indexOf(at.inputSource);if(pt===-1)return;let xt=b[pt];xt!==void 0&&(xt.update(at.inputSource,at.frame,h||o),xt.dispatchEvent({type:at.type,data:at.inputSource}))}function q(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",it);for(let at=0;at<b.length;at++){let pt=A[at];pt!==null&&(A[at]=null,b[at].disconnect(pt))}B=null,k=null,m.reset();for(let at in p)delete p[at];t.setRenderTarget(M),u=null,d=null,f=null,i=null,y=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(at){h=at},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(at){if(i=at,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",q),i.addEventListener("inputsourceschange",it),_.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,$t=null,Ut=null;_.depth&&(Ut=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=_.stencil?zr:Er,$t=_.stencil?Ur:ps);let st={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(st),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ke(d.textureWidth,d.textureHeight,{format:ei,type:pi,depthTexture:new ki(d.textureWidth,d.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let xt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Ke(u.framebufferWidth,u.framebufferHeight,{format:ei,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await i.requestReferenceSpace(a),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(at){for(let pt=0;pt<at.removed.length;pt++){let xt=at.removed[pt],$t=A.indexOf(xt);$t>=0&&(A[$t]=null,b[$t].disconnect(xt))}for(let pt=0;pt<at.added.length;pt++){let xt=at.added[pt],$t=A.indexOf(xt);if($t===-1){for(let st=0;st<b.length;st++)if(st>=A.length){A.push(xt),$t=st;break}else if(A[st]===null){A[st]=xt,$t=st;break}if($t===-1)break}let Ut=b[$t];Ut&&Ut.connect(xt)}}let Z=new D,F=new D;function Mt(at,pt,xt){Z.setFromMatrixPosition(pt.matrixWorld),F.setFromMatrixPosition(xt.matrixWorld);let $t=Z.distanceTo(F),Ut=pt.projectionMatrix.elements,st=xt.projectionMatrix.elements,zt=Ut[14]/(Ut[10]-1),L=Ut[14]/(Ut[10]+1),kt=(Ut[9]+1)/Ut[5],Ct=(Ut[9]-1)/Ut[5],Et=(Ut[8]-1)/Ut[0],ft=(st[8]+1)/st[0],G=zt*Et,H=zt*ft,j=$t/(-Et+ft),Y=j*-Et;if(pt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Y),at.translateZ(j),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Ut[10]===-1)at.projectionMatrix.copy(pt.projectionMatrix),at.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let J=zt+j,S=L+j,x=G-Y,R=H+($t-Y),U=kt*L/S*J,z=Ct*L/S*J;at.projectionMatrix.makePerspective(x,R,U,z,J,S),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function St(at,pt){pt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(pt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(i===null)return;let pt=at.near,xt=at.far;m.texture!==null&&(m.depthNear>0&&(pt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),X.near=w.near=E.near=pt,X.far=w.far=E.far=xt,(B!==X.near||k!==X.far)&&(i.updateRenderState({depthNear:X.near,depthFar:X.far}),B=X.near,k=X.far),X.layers.mask=at.layers.mask|6,E.layers.mask=X.layers.mask&3,w.layers.mask=X.layers.mask&5;let $t=at.parent,Ut=X.cameras;St(X,$t);for(let st=0;st<Ut.length;st++)St(Ut[st],$t);Ut.length===2?Mt(X,E,w):X.projectionMatrix.copy(E.projectionMatrix),Nt(at,X,$t)};function Nt(at,pt,xt){xt===null?at.matrix.copy(pt.matrixWorld):(at.matrix.copy(xt.matrixWorld),at.matrix.invert(),at.matrix.multiply(pt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(pt.projectionMatrix),at.projectionMatrixInverse.copy(pt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Fs*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(at){c=at,d!==null&&(d.fixedFoveation=at),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=at)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(at){return p[at]};let Wt=null;function Zt(at,pt){if(l=pt.getViewerPose(h||o),g=pt,l!==null){let xt=l.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let $t=!1;xt.length!==X.cameras.length&&(X.cameras.length=0,$t=!0);for(let L=0;L<xt.length;L++){let kt=xt[L],Ct=null;if(u!==null)Ct=u.getViewport(kt);else{let ft=f.getViewSubImage(d,kt);Ct=ft.viewport,L===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let Et=N[L];Et===void 0&&(Et=new pn,Et.layers.enable(L),Et.viewport=new Ce,N[L]=Et),Et.matrix.fromArray(kt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(kt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),L===0&&(X.matrix.copy(Et.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),$t===!0&&X.cameras.push(Et)}let Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let L=f.getDepthInformation(xt[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(Ut&&Ut.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let L=0;L<xt.length;L++){let kt=xt[L].camera;if(kt){let Ct=p[kt];Ct||(Ct=new bo,p[kt]=Ct);let Et=f.getCameraImage(kt);Ct.sourceTexture=Et}}}}for(let xt=0;xt<b.length;xt++){let $t=A[xt],Ut=b[xt];$t!==null&&Ut!==void 0&&Ut.update($t,pt,h||o)}Wt&&Wt(at,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),g=null}let Qt=new hd;Qt.setAnimationLoop(Zt),this.setAnimationLoop=function(at){Wt=at},this.dispose=function(){}}},Vs=new cn,Wv=new Ht;function Xv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,Vs.copy(y),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),m.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(Vs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qv(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){let y=M.program;n.uniformBlockBinding(_,y)}function h(_,M){let y=i[_.id];y===void 0&&(g(_),y=l(_),i[_.id]=y,_.addEventListener("dispose",m));let b=M.program;n.updateUBOMapping(_,b);let A=t.render.frame;r[_.id]!==A&&(d(_),r[_.id]=A)}function l(_){let M=f();_.__bindingPointIndex=M;let y=s.createBuffer(),b=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let M=i[_.id],y=_.uniforms,b=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,P=y.length;A<P;A++){let I=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,w=I.length;E<w;E++){let N=I[E];if(u(N,A,E,b)===!0){let X=N.__offset,B=Array.isArray(N.value)?N.value:[N.value],k=0;for(let W=0;W<B.length;W++){let q=B[W],it=v(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,X+k,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,k),k+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(_,M,y,b){let A=_.value,P=M+"_"+y;if(b[P]===void 0)return typeof A=="number"||typeof A=="boolean"?b[P]=A:b[P]=A.clone(),!0;{let I=b[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return b[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(_){let M=_.uniforms,y=0,b=16;for(let P=0,I=M.length;P<I;P++){let E=Array.isArray(M[P])?M[P]:[M[P]];for(let w=0,N=E.length;w<N;w++){let X=E[w],B=Array.isArray(X.value)?X.value:[X.value];for(let k=0,W=B.length;k<W;k++){let q=B[k],it=v(q),Z=y%b,F=Z%it.boundary,Mt=Z+F;y+=F,Mt!==0&&b-Mt<it.storage&&(y+=b-Mt),X.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=it.storage}}}let A=y%b;return A>0&&(y+=b-A),_.__size=y,_.__cache={},this}function v(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){let M=_.target;M.removeEventListener("dispose",m);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:h,dispose:p}}var Vl=class{constructor(t={}){let{canvas:e=Nf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,_=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=En;let A=0,P=0,I=null,E=-1,w=null,N=new Ce,X=new Ce,B=null,k=new Lt(0),W=0,q=e.width,it=e.height,Z=1,F=null,Mt=null,St=new Ce(0,0,q,it),Nt=new Ce(0,0,q,it),Wt=!1,Zt=new hs,Qt=!1,at=!1,pt=new Ht,xt=new D,$t=new Ce,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function zt(){return I===null?Z:1}let L=n;function kt(C,tt){return e.getContext(C,tt)}try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),L===null){let tt="webgl2";if(L=kt(tt,C),L===null)throw kt(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ct,Et,ft,G,H,j,Y,J,S,x,R,U,z,O,$,et,rt,yt,K,ot,Tt,ht,wt,Gt;function V(){Ct=new hx(L),Ct.init(),ht=new Hv(L,Ct),Et=new ix(L,Ct,t,ht),ft=new Bv(L,Ct),Et.reversedDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),G=new dx(L),H=new Tv,j=new kv(L,Ct,ft,H,Et,ht,G),Y=new rx(y),J=new cx(y),S=new y0(L),wt=new ex(L,S),x=new ux(L,S,G,wt),R=new mx(L,x,S,G),K=new px(L,Et,j),et=new sx(H),U=new Sv(y,Y,J,Ct,Et,wt,et),z=new Xv(y,H),O=new Rv,$=new Fv(Ct),yt=new tx(y,Y,J,ft,R,u,c),rt=new Nv(y,R,Et),Gt=new qv(L,G,Et,ft),ot=new nx(L,Ct,G),Tt=new fx(L,Ct,G),G.programs=U.programs,y.capabilities=Et,y.extensions=Ct,y.properties=H,y.renderLists=O,y.shadowMap=rt,y.state=ft,y.info=G}V();let bt=new Gh(y,L);this.xr=bt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let C=Ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(q,it,!1))},this.getSize=function(C){return C.set(q,it)},this.setSize=function(C,tt,lt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,it=tt,e.width=Math.floor(C*Z),e.height=Math.floor(tt*Z),lt===!0&&(e.style.width=C+"px",e.style.height=tt+"px"),this.setViewport(0,0,C,tt)},this.getDrawingBufferSize=function(C){return C.set(q*Z,it*Z).floor()},this.setDrawingBufferSize=function(C,tt,lt){q=C,it=tt,Z=lt,e.width=Math.floor(C*lt),e.height=Math.floor(tt*lt),this.setViewport(0,0,C,tt)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(St)},this.setViewport=function(C,tt,lt,ct){C.isVector4?St.set(C.x,C.y,C.z,C.w):St.set(C,tt,lt,ct),ft.viewport(N.copy(St).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(Nt)},this.setScissor=function(C,tt,lt,ct){C.isVector4?Nt.set(C.x,C.y,C.z,C.w):Nt.set(C,tt,lt,ct),ft.scissor(X.copy(Nt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(C){ft.setScissorTest(Wt=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){Mt=C},this.getClearColor=function(C){return C.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(C=!0,tt=!0,lt=!0){let ct=0;if(C){let nt=!1;if(I!==null){let It=I.texture.format;nt=It===hl||It===cl||It===ll}if(nt){let It=I.texture.type,qt=It===pi||It===ps||It===Fr||It===Ur||It===rl||It===ol,T=yt.getClearColor(),Q=yt.getClearAlpha(),_t=T.r,Pt=T.g,Ft=T.b;qt?(g[0]=_t,g[1]=Pt,g[2]=Ft,g[3]=Q,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=_t,v[1]=Pt,v[2]=Ft,v[3]=Q,L.clearBufferiv(L.COLOR,0,v))}else ct|=L.COLOR_BUFFER_BIT}tt&&(ct|=L.DEPTH_BUFFER_BIT),lt&&(ct|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),yt.dispose(),O.dispose(),$.dispose(),H.dispose(),Y.dispose(),J.dispose(),R.dispose(),wt.dispose(),Gt.dispose(),U.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ln),bt.removeEventListener("sessionend",$n),Gn.stop()};function At(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let C=G.autoReset,tt=rt.enabled,lt=rt.autoUpdate,ct=rt.needsUpdate,nt=rt.type;V(),G.autoReset=C,rt.enabled=tt,rt.autoUpdate=lt,rt.needsUpdate=ct,rt.type=nt}function dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ut(C){let tt=C.target;tt.removeEventListener("dispose",ut),Xt(tt)}function Xt(C){se(C),H.remove(C)}function se(C){let tt=H.get(C).programs;tt!==void 0&&(tt.forEach(function(lt){U.releaseProgram(lt)}),C.isShaderMaterial&&U.releaseShaderCache(C))}this.renderBufferDirect=function(C,tt,lt,ct,nt,It){tt===null&&(tt=Ut);let qt=nt.isMesh&&nt.matrixWorld.determinant()<0,T=or(C,tt,lt,ct,nt);ft.setMaterial(ct,qt);let Q=lt.index,_t=1;if(ct.wireframe===!0){if(Q=x.getWireframeAttribute(lt),Q===void 0)return;_t=2}let Pt=lt.drawRange,Ft=lt.attributes.position,Dt=Pt.start*_t,te=(Pt.start+Pt.count)*_t;It!==null&&(Dt=Math.max(Dt,It.start*_t),te=Math.min(te,(It.start+It.count)*_t)),Q!==null?(Dt=Math.max(Dt,0),te=Math.min(te,Q.count)):Ft!=null&&(Dt=Math.max(Dt,0),te=Math.min(te,Ft.count));let oe=te-Dt;if(oe<0||oe===1/0)return;wt.setup(nt,ct,T,lt,Q);let re,jt=ot;if(Q!==null&&(re=S.get(Q),jt=Tt,jt.setIndex(re)),nt.isMesh)ct.wireframe===!0?(ft.setLineWidth(ct.wireframeLinewidth*zt()),jt.setMode(L.LINES)):jt.setMode(L.TRIANGLES);else if(nt.isLine){let Jt=ct.linewidth;Jt===void 0&&(Jt=1),ft.setLineWidth(Jt*zt()),nt.isLineSegments?jt.setMode(L.LINES):nt.isLineLoop?jt.setMode(L.LINE_LOOP):jt.setMode(L.LINE_STRIP)}else nt.isPoints?jt.setMode(L.POINTS):nt.isSprite&&jt.setMode(L.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Sr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),jt.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Ct.get("WEBGL_multi_draw"))jt.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let Jt=nt._multiDrawStarts,Te=nt._multiDrawCounts,xe=nt._multiDrawCount,yn=Q?S.get(Q).bytesPerElement:1,Ze=H.get(ct).currentProgram.getUniforms();for(let Ge=0;Ge<xe;Ge++)Ze.setValue(L,"_gl_DrawID",Ge),jt.render(Jt[Ge]/yn,Te[Ge])}else if(nt.isInstancedMesh)jt.renderInstances(Dt,oe,nt.count);else if(lt.isInstancedBufferGeometry){let Jt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Te=Math.min(lt.instanceCount,Jt);jt.renderInstances(Dt,oe,Te)}else jt.render(Dt,oe)};function Ie(C,tt,lt){C.transparent===!0&&C.side===sn&&C.forceSinglePass===!1?(C.side=Sn,C.needsUpdate=!0,bi(C,tt,lt),C.side=zi,C.needsUpdate=!0,bi(C,tt,lt),C.side=sn):bi(C,tt,lt)}this.compile=function(C,tt,lt=null){lt===null&&(lt=C),p=$.get(lt),p.init(tt),M.push(p),lt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),C!==lt&&C.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),p.setupLights();let ct=new Set;return C.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let It=nt.material;if(It)if(Array.isArray(It))for(let qt=0;qt<It.length;qt++){let T=It[qt];Ie(T,lt,nt),ct.add(T)}else Ie(It,lt,nt),ct.add(It)}),p=M.pop(),ct},this.compileAsync=function(C,tt,lt=null){let ct=this.compile(C,tt,lt);return new Promise(nt=>{function It(){if(ct.forEach(function(qt){H.get(qt).currentProgram.isReady()&&ct.delete(qt)}),ct.size===0){nt(C);return}setTimeout(It,10)}Ct.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let be=null;function De(C){be&&be(C)}function ln(){Gn.stop()}function $n(){Gn.start()}let Gn=new hd;Gn.setAnimationLoop(De),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(C){be=C,bt.setAnimationLoop(C),C===null?Gn.stop():Gn.start()},bt.addEventListener("sessionstart",ln),bt.addEventListener("sessionend",$n),this.render=function(C,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(tt),tt=bt.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,tt,I),p=$.get(C,M.length),p.init(tt),M.push(p),pt.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),Zt.setFromProjectionMatrix(pt,ui,tt.reversedDepth),at=this.localClippingEnabled,Qt=et.init(this.clippingPlanes,at),m=O.get(C,_.length),m.init(),_.push(m),bt.enabled===!0&&bt.isPresenting===!0){let It=y.xr.getDepthSensingMesh();It!==null&&Ji(It,tt,-1/0,y.sortObjects)}Ji(C,tt,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(F,Mt),st=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,st&&yt.addToRenderList(m,C),this.info.render.frame++,Qt===!0&&et.beginShadows();let lt=p.state.shadowsArray;rt.render(lt,C,tt),Qt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let ct=m.opaque,nt=m.transmissive;if(p.setupLights(),tt.isArrayCamera){let It=tt.cameras;if(nt.length>0)for(let qt=0,T=It.length;qt<T;qt++){let Q=It[qt];rr(ct,nt,C,Q)}st&&yt.render(C);for(let qt=0,T=It.length;qt<T;qt++){let Q=It[qt];sr(m,C,Q,Q.viewport)}}else nt.length>0&&rr(ct,nt,C,tt),st&&yt.render(C),sr(m,C,tt);I!==null&&P===0&&(j.updateMultisampleRenderTarget(I),j.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(y,C,tt),wt.resetDefaultState(),E=-1,w=null,M.pop(),M.length>0?(p=M[M.length-1],Qt===!0&&et.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ji(C,tt,lt,ct){if(C.visible===!1)return;if(C.layers.test(tt.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(tt);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Zt.intersectsSprite(C)){ct&&$t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pt);let qt=R.update(C),T=C.material;T.visible&&m.push(C,qt,T,lt,$t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Zt.intersectsObject(C))){let qt=R.update(C),T=C.material;if(ct&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$t.copy(C.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),$t.copy(qt.boundingSphere.center)),$t.applyMatrix4(C.matrixWorld).applyMatrix4(pt)),Array.isArray(T)){let Q=qt.groups;for(let _t=0,Pt=Q.length;_t<Pt;_t++){let Ft=Q[_t],Dt=T[Ft.materialIndex];Dt&&Dt.visible&&m.push(C,qt,Dt,lt,$t.z,Ft)}}else T.visible&&m.push(C,qt,T,lt,$t.z,null)}}let It=C.children;for(let qt=0,T=It.length;qt<T;qt++)Ji(It[qt],tt,lt,ct)}function sr(C,tt,lt,ct){let nt=C.opaque,It=C.transmissive,qt=C.transparent;p.setupLightsView(lt),Qt===!0&&et.setGlobalState(y.clippingPlanes,lt),ct&&ft.viewport(N.copy(ct)),nt.length>0&&Ci(nt,tt,lt),It.length>0&&Ci(It,tt,lt),qt.length>0&&Ci(qt,tt,lt),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function rr(C,tt,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ct.id]===void 0&&(p.state.transmissionRenderTarget[ct.id]=new Ke(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?gn:pi,minFilter:ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));let It=p.state.transmissionRenderTarget[ct.id],qt=ct.viewport||N;It.setSize(qt.z*y.transmissionResolutionScale,qt.w*y.transmissionResolutionScale);let T=y.getRenderTarget(),Q=y.getActiveCubeFace(),_t=y.getActiveMipmapLevel();y.setRenderTarget(It),y.getClearColor(k),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),st&&yt.render(lt);let Pt=y.toneMapping;y.toneMapping=di;let Ft=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),p.setupLightsView(ct),Qt===!0&&et.setGlobalState(y.clippingPlanes,ct),Ci(C,lt,ct),j.updateMultisampleRenderTarget(It),j.updateRenderTargetMipmap(It),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let te=0,oe=tt.length;te<oe;te++){let re=tt[te],jt=re.object,Jt=re.geometry,Te=re.material,xe=re.group;if(Te.side===sn&&jt.layers.test(ct.layers)){let yn=Te.side;Te.side=Sn,Te.needsUpdate=!0,Qi(jt,lt,ct,Jt,Te,xe),Te.side=yn,Te.needsUpdate=!0,Dt=!0}}Dt===!0&&(j.updateMultisampleRenderTarget(It),j.updateRenderTargetMipmap(It))}y.setRenderTarget(T,Q,_t),y.setClearColor(k,W),Ft!==void 0&&(ct.viewport=Ft),y.toneMapping=Pt}function Ci(C,tt,lt){let ct=tt.isScene===!0?tt.overrideMaterial:null;for(let nt=0,It=C.length;nt<It;nt++){let qt=C[nt],T=qt.object,Q=qt.geometry,_t=qt.group,Pt=qt.material;Pt.allowOverride===!0&&ct!==null&&(Pt=ct),T.layers.test(lt.layers)&&Qi(T,tt,lt,Q,Pt,_t)}}function Qi(C,tt,lt,ct,nt,It){C.onBeforeRender(y,tt,lt,ct,nt,It),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),nt.onBeforeRender(y,tt,lt,ct,C,It),nt.transparent===!0&&nt.side===sn&&nt.forceSinglePass===!1?(nt.side=Sn,nt.needsUpdate=!0,y.renderBufferDirect(lt,tt,ct,nt,C,It),nt.side=zi,nt.needsUpdate=!0,y.renderBufferDirect(lt,tt,ct,nt,C,It),nt.side=sn):y.renderBufferDirect(lt,tt,ct,nt,C,It),C.onAfterRender(y,tt,lt,ct,nt,It)}function bi(C,tt,lt){tt.isScene!==!0&&(tt=Ut);let ct=H.get(C),nt=p.state.lights,It=p.state.shadowsArray,qt=nt.state.version,T=U.getParameters(C,nt.state,It,tt,lt),Q=U.getProgramCacheKey(T),_t=ct.programs;ct.environment=C.isMeshStandardMaterial?tt.environment:null,ct.fog=tt.fog,ct.envMap=(C.isMeshStandardMaterial?J:Y).get(C.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&C.envMap===null?tt.environmentRotation:C.envMapRotation,_t===void 0&&(C.addEventListener("dispose",ut),_t=new Map,ct.programs=_t);let Pt=_t.get(Q);if(Pt!==void 0){if(ct.currentProgram===Pt&&ct.lightsStateVersion===qt)return Ss(C,T),Pt}else T.uniforms=U.getUniforms(C),C.onBeforeCompile(T,y),Pt=U.acquireProgram(T,Q),_t.set(Q,Pt),ct.uniforms=T.uniforms;let Ft=ct.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ft.clippingPlanes=et.uniform),Ss(C,T),ct.needsLights=lr(C),ct.lightsStateVersion=qt,ct.needsLights&&(Ft.ambientLightColor.value=nt.state.ambient,Ft.lightProbe.value=nt.state.probe,Ft.directionalLights.value=nt.state.directional,Ft.directionalLightShadows.value=nt.state.directionalShadow,Ft.spotLights.value=nt.state.spot,Ft.spotLightShadows.value=nt.state.spotShadow,Ft.rectAreaLights.value=nt.state.rectArea,Ft.ltc_1.value=nt.state.rectAreaLTC1,Ft.ltc_2.value=nt.state.rectAreaLTC2,Ft.pointLights.value=nt.state.point,Ft.pointLightShadows.value=nt.state.pointShadow,Ft.hemisphereLights.value=nt.state.hemi,Ft.directionalShadowMap.value=nt.state.directionalShadowMap,Ft.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ft.spotShadowMap.value=nt.state.spotShadowMap,Ft.spotLightMatrix.value=nt.state.spotLightMatrix,Ft.spotLightMap.value=nt.state.spotLightMap,Ft.pointShadowMap.value=nt.state.pointShadowMap,Ft.pointShadowMatrix.value=nt.state.pointShadowMatrix),ct.currentProgram=Pt,ct.uniformsList=null,Pt}function ji(C){if(C.uniformsList===null){let tt=C.currentProgram.getUniforms();C.uniformsList=kr.seqWithValue(tt.seq,C.uniforms)}return C.uniformsList}function Ss(C,tt){let lt=H.get(C);lt.outputColorSpace=tt.outputColorSpace,lt.batching=tt.batching,lt.batchingColor=tt.batchingColor,lt.instancing=tt.instancing,lt.instancingColor=tt.instancingColor,lt.instancingMorph=tt.instancingMorph,lt.skinning=tt.skinning,lt.morphTargets=tt.morphTargets,lt.morphNormals=tt.morphNormals,lt.morphColors=tt.morphColors,lt.morphTargetsCount=tt.morphTargetsCount,lt.numClippingPlanes=tt.numClippingPlanes,lt.numIntersection=tt.numClipIntersection,lt.vertexAlphas=tt.vertexAlphas,lt.vertexTangents=tt.vertexTangents,lt.toneMapping=tt.toneMapping}function or(C,tt,lt,ct,nt){tt.isScene!==!0&&(tt=Ut),j.resetTextureUnits();let It=tt.fog,qt=ct.isMeshStandardMaterial?tt.environment:null,T=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ls,Q=(ct.isMeshStandardMaterial?J:Y).get(ct.envMap||qt),_t=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Pt=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Ft=!!lt.morphAttributes.position,Dt=!!lt.morphAttributes.normal,te=!!lt.morphAttributes.color,oe=di;ct.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(oe=y.toneMapping);let re=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,jt=re!==void 0?re.length:0,Jt=H.get(ct),Te=p.state.lights;if(Qt===!0&&(at===!0||C!==w)){let Dn=C===w&&ct.id===E;et.setState(ct,C,Dn)}let xe=!1;ct.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Te.state.version||Jt.outputColorSpace!==T||nt.isBatchedMesh&&Jt.batching===!1||!nt.isBatchedMesh&&Jt.batching===!0||nt.isBatchedMesh&&Jt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Jt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Jt.instancing===!1||!nt.isInstancedMesh&&Jt.instancing===!0||nt.isSkinnedMesh&&Jt.skinning===!1||!nt.isSkinnedMesh&&Jt.skinning===!0||nt.isInstancedMesh&&Jt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Jt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Jt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Jt.instancingMorph===!1&&nt.morphTexture!==null||Jt.envMap!==Q||ct.fog===!0&&Jt.fog!==It||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==et.numPlanes||Jt.numIntersection!==et.numIntersection)||Jt.vertexAlphas!==_t||Jt.vertexTangents!==Pt||Jt.morphTargets!==Ft||Jt.morphNormals!==Dt||Jt.morphColors!==te||Jt.toneMapping!==oe||Jt.morphTargetsCount!==jt)&&(xe=!0):(xe=!0,Jt.__version=ct.version);let yn=Jt.currentProgram;xe===!0&&(yn=bi(ct,tt,nt));let Ze=!1,Ge=!1,ai=!1,qe=yn.getUniforms(),Kn=Jt.uniforms;if(ft.useProgram(yn.program)&&(Ze=!0,Ge=!0,ai=!0),ct.id!==E&&(E=ct.id,Ge=!0),Ze||w!==C){ft.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),qe.setValue(L,"projectionMatrix",C.projectionMatrix),qe.setValue(L,"viewMatrix",C.matrixWorldInverse);let Nn=qe.map.cameraPosition;Nn!==void 0&&Nn.setValue(L,xt.setFromMatrixPosition(C.matrixWorld)),Et.logarithmicDepthBuffer&&qe.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&qe.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Ge=!0,ai=!0)}if(nt.isSkinnedMesh){qe.setOptional(L,nt,"bindMatrix"),qe.setOptional(L,nt,"bindMatrixInverse");let Dn=nt.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),qe.setValue(L,"boneTexture",Dn.boneTexture,j))}nt.isBatchedMesh&&(qe.setOptional(L,nt,"batchingTexture"),qe.setValue(L,"batchingTexture",nt._matricesTexture,j),qe.setOptional(L,nt,"batchingIdTexture"),qe.setValue(L,"batchingIdTexture",nt._indirectTexture,j),qe.setOptional(L,nt,"batchingColorTexture"),nt._colorsTexture!==null&&qe.setValue(L,"batchingColorTexture",nt._colorsTexture,j));let Jn=lt.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&K.update(nt,lt,yn),(Ge||Jt.receiveShadow!==nt.receiveShadow)&&(Jt.receiveShadow=nt.receiveShadow,qe.setValue(L,"receiveShadow",nt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Kn.envMap.value=Q,Kn.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&tt.environment!==null&&(Kn.envMapIntensity.value=tt.environmentIntensity),Ge&&(qe.setValue(L,"toneMappingExposure",y.toneMappingExposure),Jt.needsLights&&ar(Kn,ai),It&&ct.fog===!0&&z.refreshFogUniforms(Kn,It),z.refreshMaterialUniforms(Kn,ct,Z,it,p.state.transmissionRenderTarget[C.id]),kr.upload(L,ji(Jt),Kn,j)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(kr.upload(L,ji(Jt),Kn,j),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&qe.setValue(L,"center",nt.center),qe.setValue(L,"modelViewMatrix",nt.modelViewMatrix),qe.setValue(L,"normalMatrix",nt.normalMatrix),qe.setValue(L,"modelMatrix",nt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){let Dn=ct.uniformsGroups;for(let Nn=0,Pc=Dn.length;Nn<Pc;Nn++){let Ts=Dn[Nn];Gt.update(Ts,yn),Gt.bind(Ts,yn)}}return yn}function ar(C,tt){C.ambientLightColor.needsUpdate=tt,C.lightProbe.needsUpdate=tt,C.directionalLights.needsUpdate=tt,C.directionalLightShadows.needsUpdate=tt,C.pointLights.needsUpdate=tt,C.pointLightShadows.needsUpdate=tt,C.spotLights.needsUpdate=tt,C.spotLightShadows.needsUpdate=tt,C.rectAreaLights.needsUpdate=tt,C.hemisphereLights.needsUpdate=tt}function lr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,tt,lt){let ct=H.get(C);ct.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),H.get(C.texture).__webglTexture=tt,H.get(C.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:lt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,tt){let lt=H.get(C);lt.__webglFramebuffer=tt,lt.__useDefaultFramebuffer=tt===void 0};let ze=L.createFramebuffer();this.setRenderTarget=function(C,tt=0,lt=0){I=C,A=tt,P=lt;let ct=!0,nt=null,It=!1,qt=!1;if(C){let Q=H.get(C);if(Q.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(L.FRAMEBUFFER,null),ct=!1;else if(Q.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(Q.__hasExternalTextures)j.rebindTextures(C,H.get(C.texture).__webglTexture,H.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ft=C.depthTexture;if(Q.__boundDepthTexture!==Ft){if(Ft!==null&&H.has(Ft)&&(C.width!==Ft.image.width||C.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}let _t=C.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(qt=!0);let Pt=H.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pt[tt])?nt=Pt[tt][lt]:nt=Pt[tt],It=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?nt=H.get(C).__webglMultisampledFramebuffer:Array.isArray(Pt)?nt=Pt[lt]:nt=Pt,N.copy(C.viewport),X.copy(C.scissor),B=C.scissorTest}else N.copy(St).multiplyScalar(Z).floor(),X.copy(Nt).multiplyScalar(Z).floor(),B=Wt;if(lt!==0&&(nt=ze),ft.bindFramebuffer(L.FRAMEBUFFER,nt)&&ct&&ft.drawBuffers(C,nt),ft.viewport(N),ft.scissor(X),ft.setScissorTest(B),It){let Q=H.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Q.__webglTexture,lt)}else if(qt){let Q=tt;for(let _t=0;_t<C.textures.length;_t++){let Pt=H.get(C.textures[_t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_t,Pt.__webglTexture,lt,Q)}}else if(C!==null&&lt!==0){let Q=H.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Q.__webglTexture,lt)}E=-1},this.readRenderTargetPixels=function(C,tt,lt,ct,nt,It,qt,T=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Q=H.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qt!==void 0&&(Q=Q[qt]),Q){ft.bindFramebuffer(L.FRAMEBUFFER,Q);try{let _t=C.textures[T],Pt=_t.format,Ft=_t.type;if(!Et.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=C.width-ct&&lt>=0&&lt<=C.height-nt&&(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+T),L.readPixels(tt,lt,ct,nt,ht.convert(Pt),ht.convert(Ft),It))}finally{let _t=I!==null?H.get(I).__webglFramebuffer:null;ft.bindFramebuffer(L.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(C,tt,lt,ct,nt,It,qt,T=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Q=H.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qt!==void 0&&(Q=Q[qt]),Q)if(tt>=0&&tt<=C.width-ct&&lt>=0&&lt<=C.height-nt){ft.bindFramebuffer(L.FRAMEBUFFER,Q);let _t=C.textures[T],Pt=_t.format,Ft=_t.type;if(!Et.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Dt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.bufferData(L.PIXEL_PACK_BUFFER,It.byteLength,L.STREAM_READ),C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+T),L.readPixels(tt,lt,ct,nt,ht.convert(Pt),ht.convert(Ft),0);let te=I!==null?H.get(I).__webglFramebuffer:null;ft.bindFramebuffer(L.FRAMEBUFFER,te);let oe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Of(L,oe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,It),L.deleteBuffer(Dt),L.deleteSync(oe),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,tt=null,lt=0){let ct=Math.pow(2,-lt),nt=Math.floor(C.image.width*ct),It=Math.floor(C.image.height*ct),qt=tt!==null?tt.x:0,T=tt!==null?tt.y:0;j.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,lt,0,0,qt,T,nt,It),ft.unbindTexture()};let Tn=L.createFramebuffer(),oi=L.createFramebuffer();this.copyTextureToTexture=function(C,tt,lt=null,ct=null,nt=0,It=null){It===null&&(nt!==0?(Sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=nt,nt=0):It=0);let qt,T,Q,_t,Pt,Ft,Dt,te,oe,re=C.isCompressedTexture?C.mipmaps[It]:C.image;if(lt!==null)qt=lt.max.x-lt.min.x,T=lt.max.y-lt.min.y,Q=lt.isBox3?lt.max.z-lt.min.z:1,_t=lt.min.x,Pt=lt.min.y,Ft=lt.isBox3?lt.min.z:0;else{let Jn=Math.pow(2,-nt);qt=Math.floor(re.width*Jn),T=Math.floor(re.height*Jn),C.isDataArrayTexture?Q=re.depth:C.isData3DTexture?Q=Math.floor(re.depth*Jn):Q=1,_t=0,Pt=0,Ft=0}ct!==null?(Dt=ct.x,te=ct.y,oe=ct.z):(Dt=0,te=0,oe=0);let jt=ht.convert(tt.format),Jt=ht.convert(tt.type),Te;tt.isData3DTexture?(j.setTexture3D(tt,0),Te=L.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(j.setTexture2DArray(tt,0),Te=L.TEXTURE_2D_ARRAY):(j.setTexture2D(tt,0),Te=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,tt.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,tt.unpackAlignment);let xe=L.getParameter(L.UNPACK_ROW_LENGTH),yn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ze=L.getParameter(L.UNPACK_SKIP_PIXELS),Ge=L.getParameter(L.UNPACK_SKIP_ROWS),ai=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,re.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_t),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft);let qe=C.isDataArrayTexture||C.isData3DTexture,Kn=tt.isDataArrayTexture||tt.isData3DTexture;if(C.isDepthTexture){let Jn=H.get(C),Dn=H.get(tt),Nn=H.get(Jn.__renderTarget),Pc=H.get(Dn.__renderTarget);ft.bindFramebuffer(L.READ_FRAMEBUFFER,Nn.__webglFramebuffer),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,Pc.__webglFramebuffer);for(let Ts=0;Ts<Q;Ts++)qe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(C).__webglTexture,nt,Ft+Ts),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(tt).__webglTexture,It,oe+Ts)),L.blitFramebuffer(_t,Pt,qt,T,Dt,te,qt,T,L.DEPTH_BUFFER_BIT,L.NEAREST);ft.bindFramebuffer(L.READ_FRAMEBUFFER,null),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(nt!==0||C.isRenderTargetTexture||H.has(C)){let Jn=H.get(C),Dn=H.get(tt);ft.bindFramebuffer(L.READ_FRAMEBUFFER,Tn),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,oi);for(let Nn=0;Nn<Q;Nn++)qe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Jn.__webglTexture,nt,Ft+Nn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Jn.__webglTexture,nt),Kn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dn.__webglTexture,It,oe+Nn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Dn.__webglTexture,It),nt!==0?L.blitFramebuffer(_t,Pt,qt,T,Dt,te,qt,T,L.COLOR_BUFFER_BIT,L.NEAREST):Kn?L.copyTexSubImage3D(Te,It,Dt,te,oe+Nn,_t,Pt,qt,T):L.copyTexSubImage2D(Te,It,Dt,te,_t,Pt,qt,T);ft.bindFramebuffer(L.READ_FRAMEBUFFER,null),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Kn?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Te,It,Dt,te,oe,qt,T,Q,jt,Jt,re.data):tt.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,It,Dt,te,oe,qt,T,Q,jt,re.data):L.texSubImage3D(Te,It,Dt,te,oe,qt,T,Q,jt,Jt,re):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,It,Dt,te,qt,T,jt,Jt,re.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,It,Dt,te,re.width,re.height,jt,re.data):L.texSubImage2D(L.TEXTURE_2D,It,Dt,te,qt,T,jt,Jt,re);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ai),It===0&&tt.generateMipmaps&&L.generateMipmap(Te),ft.unbindTexture()},this.initRenderTarget=function(C){H.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),ft.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,ft.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}};var Xl=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Yv=new Gi(-1,1,1,-1,0,1),Wh=class extends Fe{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},Zv=new Wh,ms=class{constructor(t){this._mesh=new Ot(Zv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Yv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ql={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var md={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Vr=class s extends Xl{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Yt(t.x,t.y):new Yt(256,256),this.clearColor=new Lt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ke(r,o,{type:gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let f=new Ke(r,o,{type:gn});f.texture.name="UnrealBloomPass.h"+l,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ke(r,o,{type:gn});d.texture.name="UnrealBloomPass.v"+l,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=md;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new Yt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gi.clone(ql.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:ql.vertexShader,fragmentShader:ql.fragmentShader,blending:On,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Lt,this._oldClearAlpha=1,this._basic=new nn,this._fsQuad=new ms(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Yt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Oe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Yt(.5,.5)},direction:{value:new Yt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new Oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Vr.BlurDirectionX=new Yt(1,0);Vr.BlurDirectionY=new Yt(0,1);var gd={ultra:{label:"Ultra",pixelRatio:2,msaa:4,shadow:4096,shadowRange:150,farShadow:2048,ao:16,reflections:.75,bloom:!0,grade:!0,shafts:!0,carProbe:256,sharpen:.3,lamps:!0,dof:!0,sky:[1024,36]},high:{label:"High",pixelRatio:1.5,msaa:4,shadow:2048,shadowRange:120,farShadow:2048,ao:10,reflections:.5,bloom:!0,grade:!0,shafts:!0,carProbe:128,sharpen:.3,lamps:!0,dof:!0,sky:[1024,28]},medium:{label:"Balanced",pixelRatio:1.2,msaa:2,shadow:2048,shadowRange:90,farShadow:1024,ao:6,reflections:0,bloom:!0,grade:!0,shafts:!0,carProbe:0,sharpen:.22,lamps:!0,dof:!1,sky:[768,20]},low:{label:"Performance",pixelRatio:1,msaa:0,shadow:1024,shadowRange:70,farShadow:0,ao:0,reflections:0,bloom:!1,grade:!1,shafts:!1,carProbe:0,sharpen:0,lamps:!1,dof:!1,sky:[512,14]}},$l=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Xh=`
  uniform sampler2D tDepth;
  uniform vec2 uNearFar;
  uniform vec2 uInvProj; // 1 / projection[0][0], 1 / projection[1][1]
  float paViewZ(float d) { return (uNearFar.x * uNearFar.y) / ((uNearFar.y - uNearFar.x) * d - uNearFar.y); }
  vec3 paViewPos(vec2 uv) {
    float z = paViewZ(texture2D(tDepth, uv).x);
    return vec3((uv * 2.0 - 1.0) * uInvProj * -z, z);
  }`,$v={uniforms:{tDepth:{value:null},uNearFar:{value:new Yt},uInvProj:{value:new Yt},uTexel:{value:new Yt},uRadius:{value:1.15},uStrength:{value:1}},vertexShader:$l,fragmentShader:`
    ${Xh}
    uniform vec2 uTexel;
    uniform float uRadius, uStrength;
    varying vec2 vUv;
    float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
    void main() {
      // This pass runs at half resolution, so its pixel centres fall on the corners of depth
      // texels. Every lookup is snapped to a texel centre: a position is only right when it
      // is rebuilt from the same spot its depth was read at.
      vec2 uv0 = (floor(vUv / uTexel) + 0.5) * uTexel;
      float d0 = texture2D(tDepth, uv0).x;
      if (d0 >= 0.99999) { gl_FragColor = vec4(1.0); return; }
      vec3 p = paViewPos(uv0);
      float dist = -p.z;
      float fade = 1.0 - smoothstep(110.0, 240.0, dist);
      if (fade <= 0.0) { gl_FragColor = vec4(1.0); return; }
      // Surface normal from depth: on each axis take the neighbour on the same surface.
      vec3 px1 = paViewPos(uv0 + vec2(uTexel.x, 0.0)), px0 = paViewPos(uv0 - vec2(uTexel.x, 0.0));
      vec3 py1 = paViewPos(uv0 + vec2(0.0, uTexel.y)), py0 = paViewPos(uv0 - vec2(0.0, uTexel.y));
      vec3 dx = abs(px1.z - p.z) < abs(p.z - px0.z) ? px1 - p : p - px0;
      vec3 dy = abs(py1.z - p.z) < abs(p.z - py0.z) ? py1 - p : p - py0;
      vec3 n = normalize(cross(dx, dy));
      // The sampling disc is a fixed size in the world, so it shrinks with distance on screen.
      float radius = uRadius * (1.0 + dist * 0.014);
      vec2 rUv = clamp(radius / (2.0 * dist * uInvProj), uTexel * 3.0, vec2(0.09));
      float spin = ign(gl_FragCoord.xy) * 6.2831853;
      float occ = 0.0, r2 = radius * radius;
      for (int i = 0; i < AO_SAMPLES; i++) {
        // More samples close in, where contact shadows live.
        float f = (float(i) + 0.5) / float(AO_SAMPLES);
        float a = spin + float(i) * 2.3999632;
        vec2 suv = uv0 + vec2(cos(a), sin(a)) * pow(f, 0.8) * rUv;
        if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) continue;
        suv = (floor(suv / uTexel) + 0.5) * uTexel;
        vec3 v = paViewPos(suv) - p;
        float l2 = dot(v, v);
        // Only what lies inside the sphere occludes, and nearer things occlude more.
        occ += max(dot(n, v) * inversesqrt(l2 + 1e-4) - 0.12, 0.0) * max(1.0 - l2 / r2, 0.0);
      }
      float ao = 1.0 - clamp(occ / float(AO_SAMPLES) * 4.2 * uStrength, 0.0, 0.9) * fade;
      gl_FragColor = vec4(ao, ao, ao, 1.0);
    }`},Kv={uniforms:{tAO:{value:null},tDepth:{value:null},uNearFar:{value:new Yt},uInvProj:{value:new Yt},uTexel:{value:new Yt},uDepthTexel:{value:new Yt}},vertexShader:$l,fragmentShader:`
    ${Xh}
    uniform sampler2D tAO;
    uniform vec2 uTexel, uDepthTexel;
    varying vec2 vUv;
    void main() {
      float z0 = paViewZ(texture2D(tDepth, (floor(vUv / uDepthTexel) + 0.5) * uDepthTexel).x);
      float sum = 0.0, wsum = 0.0;
      for (int x = 0; x < 4; x++) for (int y = 0; y < 4; y++) {
        vec2 uv = vUv + (vec2(float(x), float(y)) - 1.5) * uTexel;
        float z = paViewZ(texture2D(tDepth, (floor(uv / uDepthTexel) + 0.5) * uDepthTexel).x);
        float w = 1.0 / (0.02 + abs(z - z0) / max(-z0, 0.5) * 18.0);
        sum += texture2D(tAO, uv).r * w;
        wsum += w;
      }
      gl_FragColor = vec4(vec3(sum / wsum), 1.0);
    }`},Jv={uniforms:{tScene:{value:null},tAO:{value:null},tDepth:{value:null},aoOn:{value:0},sunPos:{value:new Yt(.5,.5)},strength:{value:0},color:{value:new Lt(1,.7,.4)},aspect:{value:1}},vertexShader:$l,fragmentShader:`
    uniform sampler2D tScene, tAO, tDepth;
    uniform float aoOn, strength, aspect;
    uniform vec2 sunPos;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      vec3 col = texture2D(tScene, vUv).rgb;
      float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
      if (aoOn > 0.5) {
        // Occlusion belongs to ambient light: lamps, windows and anything glowing keep their brightness.
        float ao = mix(texture2D(tAO, vUv).r, 1.0, smoothstep(1.0, 3.2, lum));
        col *= mix(vec3(ao), vec3(1.0), vec3(0.0, 0.02, 0.06)); // a breath of sky blue left in the creases
      }
      if (strength > 0.002) {
        vec2 delta = sunPos - vUv;
        float dist = length(delta * vec2(aspect, 1.0));
        vec2 stepv = delta * (0.92 / 28.0);
        vec2 uv = vUv;
        float illum = 0.0, decay = 1.0;
        for (int i = 0; i < 28; i++) {
          uv += stepv;
          // Open sky counts, and counts for more the nearer it is to the sun.
          float open = step(0.99999, texture2D(tDepth, clamp(uv, 0.001, 0.999)).x);
          illum += open * decay * exp(-length((sunPos - uv) * vec2(aspect, 1.0)) * 2.6);
          decay *= 0.962;
        }
        illum /= 28.0;
        // Rays show against what blocks the sun; open sky is already bright and gains little.
        float contrast = 1.0 - 0.8 * smoothstep(0.5, 2.2, lum);
        col += color * illum * strength * contrast * exp(-dist * 1.6) * 0.85;
      }
      gl_FragColor = vec4(col, 1.0);
    }`},Qv={uniforms:{tHdr:{value:null},tDepth:{value:null},uNearFar:{value:new Yt},uInvProj:{value:new Yt},exposure:{value:1},time:{value:0},resolution:{value:new Yt(1,1)},speedBlur:{value:0},camBlur:{value:new Yt},aberration:{value:.0015},vignette:{value:.32},grain:{value:.035},sharpen:{value:0},sunPos:{value:new Yt(.5,.5)},sunVisible:{value:0},sunColor:{value:new Lt(1,.7,.4)},flash:{value:0},night:{value:0},warmth:{value:0},dof:{value:0},focus:{value:10},grade:{value:1},debugView:{value:0},tDebug:{value:null}},vertexShader:$l,fragmentShader:`
    ${Xh}
    uniform sampler2D tHdr, tDebug;
    uniform float debugView;
    uniform float exposure, time, speedBlur, aberration, vignette, grain, sunVisible, flash, night, warmth, sharpen, dof, focus, grade;
    uniform vec2 resolution, sunPos, camBlur;
    uniform vec3 sunColor;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    // ACES filmic tone curve (the fit three.js uses), then the display transfer function.
    vec3 rrtOdt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
    vec3 display(vec3 c) {
      c *= exposure / 0.6;
      c = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777) * c;
      c = rrtOdt(c);
      c = clamp(mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602) * c, 0.0, 1.0);
      return mix(pow(c, vec3(0.41666)) * 1.055 - 0.055, c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
    }
    float ghost(vec2 uv, vec2 c, float r) {
      vec2 d = (uv - c) * vec2(resolution.x / resolution.y, 1.0);
      return smoothstep(r, r * 0.55, length(d));
    }
    // Circle of confusion in pixels for a point at view depth z.
    // (A band about a metre either side of the focal plane stays fully sharp: the whole car.)
    float coc(float z) { return clamp((abs(1.0 / focus - 1.0 / z) - 0.014) * 9.0, 0.0, 1.0) * dof * resolution.y * 0.011; }
    void main() {
      vec2 uv = vUv;
      vec2 fromCenter = uv - 0.5;
      float edge = dot(fromCenter, fromCenter);
      vec2 ca = fromCenter * (aberration * (1.0 + edge * 6.0) + speedBlur * 0.004);
      vec3 col = vec3(texture2D(tHdr, uv - ca).r, texture2D(tHdr, uv).g, texture2D(tHdr, uv + ca).b);
      // Depth of field (title screen and cinematic camera): what is off the focal plane
      // spreads into a disc, gathered from neighbours that are themselves out of focus.
      if (dof > 0.001) {
        float c0 = coc(-paViewZ(texture2D(tDepth, uv).x));
        if (c0 > 0.6) {
          vec3 acc = col;
          float w = 1.0;
          float spin = hash(gl_FragCoord.xy) * 6.2831853;
          for (int i = 0; i < 16; i++) {
            float f = (float(i) + 0.5) / 16.0;
            float a = spin + float(i) * 2.3999632;
            float r = sqrt(f) * c0;
            vec2 suv = uv + vec2(cos(a), sin(a)) * r / resolution;
            float ci = coc(-paViewZ(texture2D(tDepth, suv).x));
            float wi = smoothstep(r - 1.5, r, ci) + 0.03;
            acc += texture2D(tHdr, suv).rgb * wi;
            w += wi;
          }
          col = acc / w;
        }
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
          acc += texture2D(tHdr, suv).rgb * wk;
          w += wk;
        }
        col = acc / w;
      }
      col = display(col);
      // Contrast-adaptive sharpening: restores the fine detail that scaling and anti-aliasing
      // soften, and backs off on edges that are already strong so nothing rings.
      if (sharpen > 0.0) {
        vec2 px = 1.0 / resolution;
        vec3 n = display(texture2D(tHdr, uv + vec2(0.0, px.y)).rgb), s = display(texture2D(tHdr, uv - vec2(0.0, px.y)).rgb);
        vec3 e = display(texture2D(tHdr, uv + vec2(px.x, 0.0)).rgb), w = display(texture2D(tHdr, uv - vec2(px.x, 0.0)).rgb);
        vec3 lo = min(col, min(min(n, s), min(e, w))), hi = max(col, max(max(n, s), max(e, w)));
        vec3 amount = sqrt(clamp(min(lo, 1.0 - hi) / max(hi, 1e-3), 0.0, 1.0)) * sharpen * (1.0 - smoothstep(0.0, 1.0, dof));
        col = clamp(col + (col * 4.0 - n - s - e - w) * amount * 0.5, lo, hi);
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
        float halo = smoothstep(0.05, 0.0, abs(length(sd) - 0.32)) * 0.035;
        float streak = exp(-abs(sd.y) * 260.0) * exp(-abs(sd.x) * 2.2) * 0.45;
        float glow = exp(-length(sd) * 7.0) * 0.13;
        col += (flare + vec3(halo) + vec3(streak) * vec3(1.0, 0.8, 0.55) + glow) * sunColor * sunVisible;
      }
      // Grade. Shadows lean teal and highlights amber (more so at golden hour), midtones gain
      // a little saturation where they are dull, and a soft S-curve sets the contrast.
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      if (grade > 0.5) {
        float sat = max(col.r, max(col.g, col.b)) - min(col.r, min(col.g, col.b));
        col = mix(vec3(luma), col, 1.06 + 0.22 * (1.0 - sat) + night * 0.06);
        vec3 shadowTint = mix(mix(vec3(0.95, 1.0, 1.05), vec3(0.9, 1.0, 1.07), warmth), vec3(0.88, 0.96, 1.14), night);
        vec3 highTint = mix(vec3(1.03, 1.0, 0.96), vec3(1.07, 1.0, 0.92), warmth);
        col *= mix(shadowTint, highTint, smoothstep(0.08, 0.72, luma));
        col = mix(col, col * col * (3.0 - 2.0 * col), 0.3);
        // Lifted blacks, like film: pure black never quite arrives.
        col = col * 0.985 + 0.012 * vec3(0.9, 1.0, 1.1);
      } else {
        col = mix(vec3(luma), col, 1.08);
        col = mix(col, col * col * (3.0 - 2.0 * col), 0.22);
      }
      col += flash * vec3(1.0, 0.95, 0.85) * 0.35;
      // Vignette, grain and dithering.
      col *= 1.0 - vignette * smoothstep(0.08, 0.62, edge * 1.6);
      float n = hash(uv * resolution + fract(time * 7.13) * 100.0) - 0.5;
      col += n * grain * (1.0 - luma * 0.6);
      col += (hash(uv * resolution * 1.37) - 0.5) / 255.0;
      if (debugView > 1.5) col = vec3(fract(-paViewZ(texture2D(tDepth, uv).x) * 0.1), texture2D(tDepth, uv).x, 0.0);
      else if (debugView > 0.5) col = texture2D(tDebug, uv).rrr;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`};function Yl(s,t={}){return new Oe({uniforms:gi.clone(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,defines:t,depthTest:!1,depthWrite:!1,toneMapped:!1})}var Zl=class{constructor(t){this.renderer=new Vl({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1});let e=this.renderer;e.toneMapping=di,e.toneMappingExposure=.85,e.shadowMap.enabled=!0,e.shadowMap.type=Ya,this.quality=null,this.scale=1,this.frameTimes=[],this.adaptTimer=0,this.quad=new ms(null),this.targets=null,this.size=new Yt}init(t,e){this.scene=t,this.camera=e}buildPasses(){let t=this.quality;for(let n of[this.aoMat,this.aoBlurMat,this.lightMat,this.lensMat])n?.dispose();this.bloomPass?.dispose(),this.aoMat=t.ao?Yl($v,{AO_SAMPLES:t.ao}):null,this.aoBlurMat=t.ao?Yl(Kv):null,this.lightMat=Yl(Jv),this.lensMat=Yl(Qv),this.bloomPass=t.bloom?new Vr(new Yt(4,4),.42,.62,.92):null,this.grade={uniforms:this.lensMat.uniforms},this.shafts={uniforms:this.lightMat.uniforms},this.bloom=this.bloomPass;let e=this.lensMat.uniforms;e.sharpen.value=t.sharpen,e.grade.value=t.grade?1:0,t.grade||(e.grain.value=0,e.aberration.value=0),this.disposeTargets(),this.applySize()}disposeTargets(){if(this.targets){for(let t of Object.values(this.targets))t.depthTexture?.dispose(),t.dispose();this.targets=null}}buildTargets(t,e){this.disposeTargets();let n=this.quality,i=new ki(t,e);i.minFilter=i.magFilter=Cn;let r=new Ke(t,e,{type:gn,samples:n.msaa,depthTexture:i}),o=new Ke(t,e,{type:gn,depthBuffer:!1});if(this.targets={scene:r,hdr:o},n.ao){let a=Math.max(2,Math.round(t/2)),c=Math.max(2,Math.round(e/2));this.targets.ao=new Ke(a,c,{depthBuffer:!1}),this.targets.aoBlur=new Ke(a,c,{depthBuffer:!1})}this.bloomPass?.setSize(t,e)}setQuality(t){this.quality=gd[t]||gd.high,this.qualityName=t,this.scale=1,this.renderer.shadowMap.enabled=!0,this.buildPasses()}applySize(){let t=innerWidth,e=innerHeight,n=Math.min(devicePixelRatio||1,this.quality.pixelRatio)*this.scale;this.renderer.setPixelRatio(n),this.renderer.setSize(t,e);let i=Math.max(2,Math.round(t*n)),r=Math.max(2,Math.round(e*n));(!this.targets||this.size.x!==i||this.size.y!==r)&&(this.size.set(i,r),this.buildTargets(i,r)),this.lensMat.uniforms.resolution.value.set(i,r),this.lightMat.uniforms.aspect.value=t/e,this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.onResize?.()}adapt(t){if(this.frameTimes.push(t),this.frameTimes.length>90&&this.frameTimes.shift(),this.adaptTimer+=t,this.adaptTimer<2||this.frameTimes.length<60)return;this.adaptTimer=0;let e=[...this.frameTimes].sort((r,o)=>r-o),n=e[Math.floor(e.length/2)],i=this.scale;n>1/45?i=Math.max(.6,this.scale-.1):n<1/58&&this.scale<1&&(i=Math.min(1,this.scale+.05)),Math.abs(i-this.scale)>.001&&(this.scale=i,this.applySize())}beginFrame(){this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0}blit(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.quad.render(this.renderer)}render(){let t=this.renderer,e=this.quality,n=this.targets,i=this.camera,r=1/i.projectionMatrix.elements[0],o=1/i.projectionMatrix.elements[5],a=f=>{f.tDepth.value=n.scene.depthTexture,f.uNearFar.value.set(i.near,i.far),f.uInvProj.value.set(r,o)};t.setRenderTarget(n.scene),t.render(this.scene,i);let c=n.scene,h=this.lightMat.uniforms;if(e.shafts||(h.strength.value=0),e.ao||h.strength.value>.002||this.bloomPass){if(e.ao){let f=this.aoMat.uniforms;a(f),f.uTexel.value.set(1/n.scene.width,1/n.scene.height),this.blit(this.aoMat,n.ao);let d=this.aoBlurMat.uniforms;a(d),d.tAO.value=n.ao.texture,d.uTexel.value.set(1/n.ao.width,1/n.ao.height),d.uDepthTexel.value.set(1/n.scene.width,1/n.scene.height),this.blit(this.aoBlurMat,n.aoBlur),h.tAO.value=n.aoBlur.texture}h.aoOn.value=e.ao?1:0,h.tScene.value=n.scene.texture,h.tDepth.value=n.scene.depthTexture,this.blit(this.lightMat,n.hdr),c=n.hdr,this.bloomPass&&this.bloomPass.render(t,null,n.hdr,0,!1)}let l=this.lensMat.uniforms;a(l),l.tHdr.value=c.texture,l.exposure.value=t.toneMappingExposure,e.dof||(l.dof.value=0),l.debugView.value=this.debugView==="ao"&&n.aoBlur?1:this.debugView==="depth"?2:0,l.tDebug.value=n.aoBlur?n.aoBlur.texture:null,this.blit(this.lensMat,null)}};var gs=`
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
`,xd=`
uniform vec3 skySunDir;
uniform float skyTurbidity;
uniform float skyRayleigh;
uniform float skyMie;
uniform float skyMieG;
uniform float skyCloudCover;
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

vec3 pa_atmosphere(vec3 dir) {
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 sunDir = skySunDir;
  float sunE = pa_sunIntensity(dot(sunDir, up));
  float sunfade = 1.0 - clamp(1.0 - exp(sunDir.y * 2.2), 0.0, 1.0);
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
  vec3 col = (Lin + vec3(0.1) * Fex) * 0.04 + vec3(0.0, 0.0003, 0.00075);
  return pow(col, vec3(1.0 / (1.2 + 1.2 * sunfade)));
}
`,Kl=`
uniform vec3 skySunDir;
uniform vec3 skyMoonDir;
uniform float skyIntensity;
uniform float skyTime;
uniform float skyNight;
uniform sampler2D skyPanoA;
uniform sampler2D skyPanoB;
uniform float skyPanoBlend;
uniform vec3 skySunColor;

vec2 pa_panoUv(vec3 dir) {
  float e = clamp((asin(clamp(dir.y, -1.0, 1.0)) + 0.035) / 1.6057963, 0.0, 1.0);
  return vec2(atan(dir.z, dir.x) / 6.2831853 + 0.5, sqrt(e));
}
// rgb: sky and clouds. a: how clear the view is to what lies beyond the clouds.
vec4 pa_skyPano(vec3 dir) {
  vec2 uv = pa_panoUv(dir);
  return mix(texture2D(skyPanoA, uv), texture2D(skyPanoB, uv), skyPanoBlend);
}

// Returns the sky radiance (pre-exposure, linear) for a world direction.
vec3 pa_sky(vec3 dir, bool withDisc, bool withClouds) {
  dir = normalize(dir);
  vec4 s = pa_skyPano(dir);
  vec3 col = s.rgb;
  if (skyNight > 0.01 && dir.y > 0.0) {
    vec3 beyond = vec3(0.55, 0.62, 0.75) * smoothstep(0.9993, 0.9996, dot(dir, skyMoonDir)) * 2.0;
    vec3 sd = dir * 380.0;
    float h = pa_hash13(floor(sd));
    float star = smoothstep(0.996, 1.0, h) * smoothstep(0.42, 0.0, length(fract(sd) - 0.5));
    star *= 0.6 + 0.4 * sin(skyTime * 3.0 + h * 80.0);
    beyond += vec3(0.9, 0.92, 1.0) * star * smoothstep(0.0, 0.25, dir.y) * 1.4;
    col += beyond * skyNight * s.a;
  }
  if (withDisc) col += skySunColor * smoothstep(0.99990, 0.99996, dot(dir, skySunDir)) * step(-0.01, dir.y) * s.a * s.a;
  return col * skyIntensity;
}
`;var vd=(s,t)=>{let e=[];for(let n=s;n<=t;n+=160)e.push(n);return e},de=vd(-320,1600),pe=vd(-1600,1600),Ue=de[0],Ee=de[de.length-1],ge=pe[0],Pe=pe[pe.length-1],ee=13,xi=6,ko=[3.4,9.2],ne=.16,In=-418,qh=-.62,We={from:-333,to:-342},fn=-357,he={minX:-412,maxX:Ee+32,minZ:ge-76,maxZ:Pe+76},Wr=de.slice(0,-1).map(s=>s+160/2),xs=pe.slice(0,-1).map(s=>s+160/2),ii=160-ee*2,Ti={rampStart:-342,x0:-374,x1:-556,z:-160,halfWidth:9,deckY:2.6},Mn=[Ti,{rampStart:-342,x0:-374,x1:-640,z:1120,halfWidth:7,deckY:2.6,plain:!0}];function qs(s,t){for(let e of Mn)if(Math.abs(t-e.z)<=e.halfWidth&&s<=e.rampStart&&s>=e.x1)return e;return null}function vs(s,t){let e=qs(s,t);return e?s>e.x0?ne+(e.deckY-ne)*(e.rampStart-s)/(e.rampStart-e.x0):e.deckY:null}var bn={sunset:{name:"SUNSET RUN",blurb:"The classic loop round the old town.",route:[[-320,40],[-320,-300],[-170,-320],[-6,-320],[150,-320],[160,-10],[10,160],[-300,160]]},downtown:{name:"DOWNTOWN DASH",blurb:"A loop through the towers and back to the pier.",route:[[-320,-300],[10,-320],[330,-320],[630,-320],[640,-470],[640,-790],[950,-800],[960,-490],[960,-170],[650,-160],[330,-160],[10,-160],[-300,-160]],start:{x:-320+3.4,z:30,heading:0}},grand:{name:"GRAND TOUR",blurb:"The whole city, coast to foothills.",route:[[-320,40],[-320,-620],[-320,-1270],[-310,-1600],[470,-1600],[1270,-1600],[1600,-1590],[1600,-810],[1600,-10],[1600,790],[1600,1590],[810,1600],[10,1600],[-320,1590],[-320,970],[-320,420]]}},hw=bn.sunset.route,Jl=15,qi=[{axis:"ns",road:-160,s:-240,side:1},{axis:"ns",road:0,s:-80,side:-1},{axis:"ns",road:160,s:80,side:1},{axis:"ns",road:0,s:400,side:1},{axis:"ns",road:-320,s:-400,side:1},{axis:"ns",road:320,s:-240,side:-1},{axis:"ew",road:-320,s:-80,side:1},{axis:"ew",road:0,s:80,side:-1},{axis:"ew",road:160,s:-240,side:1},{axis:"ew",road:320,s:240,side:-1},{axis:"ew",road:-160,s:240,side:1},{axis:"ew",road:480,s:-80,side:-1}];for(let s of[-320,0,640,960,1280,1600])for(let t=0,e=ge+80+(s===0?160:0);e<Pe;e+=480,t++)Math.abs(e)<520&&s<=320||qi.push({axis:"ns",road:s,s:e,side:t%2?1:-1});for(let s of[-1280,-800,-480,800,1280])for(let t=0,e=Ue+240;e<Ee;e+=480,t++)Math.abs(s)<520&&e<=320||qi.push({axis:"ew",road:s,s:e,side:t%2?-1:1});function Ys(s,t=15.4){return s.axis==="ns"?[s.road+s.side*t,s.s]:[s.s,s.road+s.side*t]}var dn={x:-320+ko[0],z:246,heading:0},yd=(s,t,e)=>Math.min(Math.max(Math.round((s-t)/160)*160+t,t),e),Yi=s=>yd(s,Ue,Ee),ys=s=>yd(s,ge,Pe);var Zs=s=>Math.min(Math.max(Math.floor((s-Ue)/160),0),Wr.length-1)*160+Ue+160/2,Ho=s=>Math.min(Math.max(Math.floor((s-ge)/160),0),xs.length-1)*160+ge+160/2;function Go(s,t){return s<fn?"sand":s<We.to?"grass":s<We.from||s>Ee+ee||t<ge-ee||t>Pe+ee?"curb":Math.abs(s-Yi(s))<ee||Math.abs(t-ys(t))<ee?"road":"curb"}function _d(s){return s>=fn?0:Math.max(-.02-(fn-s)*.0105,qh-.3)}var Xi={ocean:["OCEAN DRIVE","Vista Pac\xEDfica Beach",.3,.2],seaview:["SEAVIEW","Coastal Quarter",.5,.2],downtown:["DOWNTOWN","Financial District",1,.2],palm:["PALM DISTRICT","San Aurelio",.65,.6],southbank:["SOUTHBANK","Harbor Heights",.4,.6],northshore:["NORTHSHORE","Lighthouse Point",.35,.5],midtown:["MIDTOWN","Alta Vista",.8,.3],laurel:["LAUREL PARK","The Gardens",.35,.9],arts:["ARTS DISTRICT","Cannery Row",.6,.3],port:["PORT DISTRICT","Bayfront Docks",.55,.1],marina:["MARINA","South Beach",.4,.3],eastside:["EASTSIDE","Jacaranda Heights",.35,.8],foothills:["FOOTHILLS","Ridgeline",.25,.8]};function vi(s,t){return s<=320&&Math.abs(t)<=480?s<-170?"seaview":s>0&&t<-20?"downtown":t>250?"southbank":"palm":s<-170?t<-480?"northshore":"marina":s>1440?"foothills":t<-1120?"northshore":t>1120?"port":s>1120?"eastside":t<=-800?"midtown":t<0&&s>0?"downtown":t>640?"arts":s>480?"laurel":t>160?"southbank":"palm"}function Ql(s,t){return s<-330?Xi.ocean:Xi[vi(Zs(s),Ho(t))]}var Yh={"-320":"Ocean Drive","-160":"Seaview Ave",0:"Aurelio Blvd",160:"Grand Ave",320:"Hillcrest Ave",480:"Mission Ave",640:"Centro Blvd",800:"Laurel Ave",960:"Vista Ave",1120:"Jacaranda Ave",1280:"Canyon Ave",1440:"Foothill Blvd",1600:"Ridgeline Dr"},Zh={"-1600":"Northshore Rd","-1440":"Lighthouse St","-1280":"Coral St","-1120":"Mariposa St","-960":"Alta St","-800":"Dolores St","-640":"Cabrillo St","-480":"Marina St","-320":"Sunset Blvd","-160":"Pier Ave",0:"Palm St",160:"Harbor St",320:"Rosa St",480:"Southbank Rd",640:"Cannery St",800:"Dock St",960:"Foundry St",1120:"Depot St",1280:"Terminal St",1440:"Breakwater St",1600:"Bayfront Rd"};function Md(s,t){let e=Yi(s),n=ys(t);return Math.abs(s-e)<ee+3?Yh[String(e)]:Math.abs(t-n)<ee+3?Zh[String(n)]:s<-330?"Beachfront":"Off road"}var si={paFarShadowMap:{value:null},paFarShadowMatrix:{value:new Ht},paFarShadow:{value:new Ce(0,1/2048,.7,0)},paLamp:{value:new Ce(0,1,.71,.42)},paCloud:{value:new Ce(0,.42,0,0)},paSunDirW:{value:new D(0,1,0)}},Kh=`
float paHashC(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * .1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float paNoiseC(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(paHashC(i), paHashC(i + vec2(1, 0)), u.x), mix(paHashC(i + vec2(0, 1)), paHashC(i + vec2(1, 1)), u.x), u.y);
}
// xz in metres (wind already added). Returns 0..1.
float paCloudField(vec2 xz, int octaves) {
  vec2 p = xz * 0.00034;
  float v = 0.0, a = 0.5, n = 0.0;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    if (i >= octaves) break;
    v += a * paNoiseC(p); n += a;
    p = r * p * 2.03 + 17.1; a *= 0.5;
  }
  return v / n;
}
`,bd=(ne+8.7).toFixed(2),tn=s=>s.toFixed(1),wd=he.minZ+16,jv=Mn.map(s=>`abs(pz - ${tn(s.z)}) > 12.0`).join(" && "),Ed=`
#ifdef USE_FOG
  uniform highp sampler2DShadow paFarShadowMap;
  uniform mat4 paFarShadowMatrix;
  uniform vec4 paFarShadow;
  uniform vec4 paLamp;
  uniform vec4 paCloud;
  uniform vec3 paSunDirW;
  ${Kh}

  float paCloudShade(vec3 wp) {
    if (paCloud.x < 0.01) return 1.0;
    // Follow the sun's ray up from here to the cloud base.
    vec2 xz = wp.xz + paSunDirW.xz * ((1400.0 - wp.y) / max(paSunDirW.y, 0.1)) + paCloud.zw;
    float c = smoothstep(1.0 - paCloud.y, 1.0 - paCloud.y + 0.3, paCloudField(xz, 3));
    return 1.0 - c * paCloud.x;
  }

  float paFarShadowAt(vec3 wp, vec3 wn) {
    if (paFarShadow.x < 0.5) return 1.0;
    vec4 sc = paFarShadowMatrix * vec4(wp + wn * paFarShadow.z, 1.0);
    vec2 e = abs(sc.xy - 0.5) * 2.0;
    float edge = max(e.x, e.y);
    if (edge >= 1.0 || sc.z >= 1.0) return 1.0;
    float t = paFarShadow.y * 0.7, z = sc.z - 0.00018;
    float s = texture(paFarShadowMap, vec3(sc.xy + vec2(-t, -t), z)) + texture(paFarShadowMap, vec3(sc.xy + vec2(t, -t), z))
      + texture(paFarShadowMap, vec3(sc.xy + vec2(-t, t), z)) + texture(paFarShadowMap, vec3(sc.xy + vec2(t, t), z));
    return mix(s * 0.25, 1.0, smoothstep(0.88, 1.0, edge));
  }

  float paRoadX(float x) { return clamp(floor((x - ${tn(Ue)}) / ${tn(160)} + 0.5), 0.0, ${tn(de.length-1)}) * ${tn(160)} + ${tn(Ue)}; }
  float paRoadZ(float z) { return clamp(floor((z - ${tn(ge)}) / ${tn(160)} + 0.5), 0.0, ${tn(pe.length-1)}) * ${tn(160)} + ${tn(ge)}; }

  // The street lamp nearest to wp on one side of its road (see the layout in props.js).
  // Returns its position, or y < 0 where no lamp stands.
  vec3 paLampNear(vec3 wp, float side, bool avenue) {
    float off = side > 0.0 ? 19.0 : 0.0;
    if (avenue) {
      float rx = paRoadX(wp.x);
      float z0 = ${tn(ge-40)};
      float zb = z0 + floor((wp.z - z0 - off) / 38.0 + 0.5) * 38.0;
      bool ok = zb > z0 - 0.5 && zb < ${tn(Pe+40.5)} && abs(zb - paRoadZ(zb)) >= ${tn(ee+7)} && !(rx < ${tn(Ue+1)} && side < 0.0);
      return vec3(rx + side * ${tn(ee-1.6)}, ok ? ${bd} : -1.0, zb + off);
    }
    float rz = paRoadZ(wp.z);
    float x0 = ${tn(Ue+20)};
    float xb = x0 + floor((wp.x - x0 - off) / 38.0 + 0.5) * 38.0;
    bool ok = xb > x0 - 0.5 && xb < ${tn(Ee+.5)} && abs(xb - paRoadX(xb)) >= ${tn(ee+7)};
    return vec3(xb + off, ok ? ${bd} : -1.0, rz + side * ${tn(ee-1.6)});
  }

  // Light arriving at wp from a lamp: its colour and strength, and the direction to it.
  // Street heads throw their light downward; the promenade's globes shine all round.
  vec3 paLampLight(vec3 wp, vec3 lamp, float downward, out vec3 dir) {
    vec3 d = lamp - wp;
    float l2 = dot(d, d), l = sqrt(l2);
    dir = d / l;
    float cone = mix(1.0, smoothstep(0.08, 0.7, dir.y), downward);
    return paLamp.yzw * (paLamp.x * cone * (1.0 - smoothstep(24.0, 40.0, l)) / (l2 + 8.0));
  }
#endif
`;function Sd(){let s=ae.lights_fragment_begin,t=`directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif`;if(!s.includes(t)||!s.includes("IncidentLight directLight;"))throw new Error("lighting: three.js chunk layout changed");s=s.replace("IncidentLight directLight;",`IncidentLight directLight;
#if defined( USE_FOG ) && defined( RE_Direct )
  vec3 paNormalW = inverseTransformDirection( geometryNormal, viewMatrix );
  float paSunMask = paCloudShade( vFogWorld );
  if ( receiveShadow ) paSunMask *= paFarShadowAt( vFogWorld, paNormalW );
#else
  float paSunMask = 1.0;
#endif`),s=s.replace(t,`${t}
		directLight.color *= paSunMask;`),s+=`
#if defined( USE_FOG ) && defined( RE_Direct )
  if ( paLamp.x > 0.01 && vFogWorld.y < 34.0 && vFogDepth < 440.0 ) {
    float paLampFade = 1.0 - smoothstep( 320.0, 440.0, vFogDepth );
    vec3 paDir;
    // Avenues, then streets. Each lamp lights its own patch, about 19 m either way along the
    // road and fading out behind the building line, so no patch ends at a hard edge and
    // most pixels work out two lamps or none.
    for ( int paAxis = 0; paAxis < 2; paAxis ++ ) {
      bool paAvenue = paAxis == 0;
      float paAcross = paAvenue ? abs( vFogWorld.x - paRoadX( vFogWorld.x ) ) : abs( vFogWorld.z - paRoadZ( vFogWorld.z ) );
      if ( paAcross < 36.0 ) {
        for ( int paSide = 0; paSide < 2; paSide ++ ) {
          vec3 paPos = paLampNear( vFogWorld, paSide == 0 ? -1.0 : 1.0, paAvenue );
          float paAlong = paAvenue ? abs( paPos.z - vFogWorld.z ) : abs( paPos.x - vFogWorld.x );
          float paPatch = ( 1.0 - smoothstep( 12.0, 19.0, paAlong ) ) * ( 1.0 - smoothstep( 26.0, 36.0, paAcross ) ) * paLampFade;
          if ( paPos.y > 0.0 && paPatch > 0.001 ) {
            directLight.color = paLampLight( vFogWorld, paPos, 1.0, paDir ) * paPatch;
            directLight.direction = normalize( mat3( viewMatrix ) * paDir );
            directLight.visible = true;
            RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          }
        }
      }
    }
    // The beach promenade has its own row of globe lamps.
    float paProm = abs( vFogWorld.x - ${tn((We.from+We.to)/2)} );
    if ( paProm < 20.0 ) {
      float pz = ${tn(wd)} + floor( ( vFogWorld.z - ${tn(wd)} ) / 24.0 + 0.5 ) * 24.0;
      float paPatch = ( 1.0 - smoothstep( 7.0, 12.0, abs( pz - vFogWorld.z ) ) ) * ( 1.0 - smoothstep( 12.0, 20.0, paProm ) ) * paLampFade;
      if ( ${jv} && paPatch > 0.001 ) {
        directLight.color = paLampLight( vFogWorld, vec3( ${tn((We.from+We.to)/2)}, ${(ne+4.4).toFixed(2)}, pz ), 0.0, paDir ) * paPatch * 0.5;
        directLight.direction = normalize( mat3( viewMatrix ) * paDir );
        directLight.visible = true;
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
      }
    }
  }
#endif
`,ae.lights_fragment_begin=s}var jl=new D,tc=new D,$h=new D,ty=new Ht().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),ec=class{constructor(t,e){this.renderer=t,this.scene=e,this.size=0,this.range=560,this.target=null,this.camera=new Gi(-this.range,this.range,this.range,-this.range,1,2700),this.camera.layers.set(0),this.depthMaterial=new nn({colorWrite:!1,side:sn}),this.center=new D(1e9,0,0),this.dir=new D,this.timer=0,this.dirty=!0,this.blank=this.makeTarget(2);let n=t.getRenderTarget();t.setRenderTarget(this.blank),t.clear(),t.setRenderTarget(n),si.paFarShadowMap.value=this.blank.depthTexture}makeTarget(t){let e=new ki(t,t);return e.compareFunction=Oo,e.minFilter=e.magFilter=Fn,new Ke(t,t,{depthTexture:e})}setSize(t){t!==this.size&&(this.size=t,this.target?.depthTexture.dispose(),this.target?.dispose(),this.target=null,t>0&&(this.target=this.makeTarget(t),si.paFarShadow.value.y=1/t),si.paFarShadowMap.value=this.blank.depthTexture,si.paFarShadow.value.x=0,this.dirty=!0)}update(t,e,n,i){if(!this.target)return;this.timer-=t;let r=Math.hypot(e.x-this.center.x,e.z-this.center.z),o=this.dir.dot(n)<.99998;if(!this.dirty&&!o&&(r<30||this.timer>0)&&r<140)return;this.dirty=!1,this.timer=.4,this.dir.copy(n),this.center.copy(e);let a=this.range*2/this.size;jl.crossVectors(tc.set(0,1,0),n).normalize(),tc.crossVectors(n,jl),$h.copy(jl).multiplyScalar(Math.round(e.dot(jl)/a)*a).addScaledVector(tc,Math.round(e.dot(tc)/a)*a).addScaledVector(n,e.dot(n));let c=this.camera;c.position.copy($h).addScaledVector(n,1500),c.up.set(0,1,0),c.lookAt($h),c.updateMatrixWorld();let h=this.renderer,l=h.getRenderTarget(),f=this.scene.overrideMaterial;this.scene.overrideMaterial=this.depthMaterial,i(()=>{h.setRenderTarget(this.target),h.clear(),h.render(this.scene,c)}),this.scene.overrideMaterial=f,h.setRenderTarget(l),si.paFarShadowMatrix.value.copy(ty).multiply(c.projectionMatrix).multiply(c.matrixWorldInverse),si.paFarShadowMap.value=this.target.depthTexture,si.paFarShadow.value.x=1}};var ey=`
precision highp float;
varying vec2 vUv;
uniform vec4 uRect; // u0, v0, u1, v1 of the strip being painted
uniform vec2 uWind;
uniform vec3 uLightDir;
${gs}
${Kh}
${xd}

const float H0 = 1150.0, H1 = 2750.0; // cloud base and ceiling, metres

// Cloud density at p (the viewer stands at the origin). fine adds the wispy detail.
float cloudDensity(vec3 p, bool fine) {
  float h = (p.y - H0) / (H1 - H0);
  if (h <= 0.0 || h >= 1.0) return 0.0;
  vec2 xz = p.xz + uWind;
  float edge = 1.0 - skyCloudCover;
  if (paCloudField(xz, 2) < edge - 0.2) return 0.0; // nowhere near a cloud: skip the rest
  float base = smoothstep(edge, edge + 0.3, paCloudField(xz, fine ? 5 : 3));
  if (base <= 0.0) return 0.0;
  // Flat bases, and tops that tower where the weather is thickest.
  float top = mix(0.32, 1.0, base);
  float d = base * smoothstep(0.0, 0.07, h) * (1.0 - smoothstep(top * 0.5, top, h));
  if (fine) {
    vec2 q = p.xz * 0.0014 + vec2(p.y * 0.0012, -p.y * 0.0008) + uWind * 0.0012;
    d = clamp(d - (1.0 - pa_fbm3(q)) * 0.4 * (1.0 - d * 0.55), 0.0, 1.0);
  }
  return d;
}

// Marches the cloud deck along dir. Returns light scattered toward the eye (rgb) and how
// much of the sky behind still shows (a).
vec4 marchClouds(vec3 dir, vec3 sky) {
  if (dir.y < 0.012) return vec4(0.0, 0.0, 0.0, 1.0);
  float t0 = H0 / dir.y, t1 = min(H1 / dir.y, 75000.0);
  if (t0 >= t1) return vec4(0.0, 0.0, 0.0, 1.0);
  float dt = (t1 - t0) / float(CLOUD_STEPS);
  float t = t0 + dt * pa_hash12(gl_FragCoord.xy + 0.5);
  // Clouds scatter mostly forward: edges toward the light glow (the silver lining).
  float cosL = dot(dir, uLightDir), g = 0.6;
  float hg = (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * cosL, 1.5);
  float phase = 0.62 + 0.36 * min(hg, 5.5);
  float T = 1.0;
  vec3 L = vec3(0.0);
  for (int i = 0; i < CLOUD_STEPS; i++) {
    vec3 p = dir * t;
    float d = cloudDensity(p, true);
    if (d > 0.004) {
      // How much cloud lies between here and the light.
      float tau = 0.0, sl = 75.0;
      vec3 q = p;
      for (int j = 0; j < 4; j++) { q += uLightDir * sl; tau += cloudDensity(q, false) * sl; sl *= 1.9; }
      float h = (p.y - H0) / (H1 - H0);
      // Light bounces around inside a cloud many times, so its depths are far brighter
      // than a single pass through would leave them: three ever-gentler fall-offs stand in.
      float k = tau * 0.0105;
      float lit = exp(-k) * 0.58 + exp(-k * 0.28) * 0.29 + exp(-k * 0.07) * 0.13;
      // Sunlight that got through, sky light from above, and at night the city's glow from below.
      vec3 lum = skyCloudLit * (lit * phase) + skyCloudShade * (0.74 + 0.62 * h) + vec3(0.11, 0.07, 0.04) * skyNight * (1.0 - h);
      // Far clouds take on the colour of the air in front of them.
      lum = mix(lum, sky, 1.0 - exp(-t / 42000.0));
      float a = 1.0 - exp(-d * dt * 0.013);
      L += T * a * lum;
      T *= 1.0 - a;
      if (T < 0.012) break;
    }
    t += dt;
  }
  return vec4(L, T);
}

void main() {
  vec2 uv = mix(uRect.xy, uRect.zw, vUv);
  float el = mix(-0.035, 1.5707963, uv.y * uv.y);
  float az = (uv.x - 0.5) * 6.2831853;
  vec3 dir = vec3(cos(el) * cos(az), sin(el), cos(el) * sin(az));

  float day = smoothstep(-0.12, 0.08, skySunDir.y);
  vec3 col = pa_atmosphere(dir) * day;
  // A deeper, more saturated blue overhead than the model gives on its own.
  col *= mix(1.0, 0.74, smoothstep(0.0, 0.75, dir.y));
  col = mix(vec3(dot(col, vec3(0.2126, 0.7152, 0.0722))), col, 1.28);
  // Afterglow: for a while either side of sunset an ember band lies along the horizon
  // where the sun went down, with violet above it.
  float tw = smoothstep(-0.2, -0.02, skySunDir.y) * (1.0 - smoothstep(-0.02, 0.11, skySunDir.y));
  float toward = max(dot(normalize(dir.xz + 1e-5), normalize(skySunDir.xz + 1e-5)), 0.0);
  float low = max(dir.y, 0.0);
  col += vec3(1.3, 0.45, 0.13) * exp(-low * 6.5) * pow(toward, 2.5) * tw * 0.95;
  col += vec3(0.4, 0.2, 0.44) * exp(-low * 2.4) * (0.3 + 0.7 * toward) * tw * 0.32;
  // Night: deep blue, the glow of the city along the horizon, a halo round the moon.
  vec3 night = mix(vec3(0.010, 0.016, 0.034), vec3(0.002, 0.004, 0.012), clamp(dir.y * 1.6, 0.0, 1.0));
  night += vec3(0.055, 0.036, 0.028) * exp(-max(dir.y, 0.0) * 9.0) * 0.7;
  night += vec3(0.05, 0.07, 0.11) * pow(max(dot(dir, skyMoonDir), 0.0), 40.0);
  col += night * skyNight;

  float T = 1.0;
  // Cirrus: thin streaks far above everything, still lit after the cumulus has gone grey.
  if (dir.y > 0.02) {
    vec2 cuv = dir.xz / (dir.y + 0.06) * 3.0 + uWind * 0.00005;
    float c = pa_fbm(vec2(cuv.x * 0.5 + cuv.y * 0.16, cuv.y * 2.3));
    c = smoothstep(0.56, 0.94, c) * 0.36 * smoothstep(0.02, 0.2, dir.y);
    vec3 cc = skyCloudLit * (0.5 + 1.1 * pow(max(dot(dir, skySunDir), 0.0), 6.0)) + skyCloudShade * 0.45;
    col = mix(col, cc, c);
    T *= 1.0 - c * 0.6;
  }
  vec4 cl = marchClouds(dir, col);
  gl_FragColor = vec4(col * cl.a + cl.rgb, T * cl.a);
}`,Xr=64,nc=class{constructor(t,e){this.renderer=t,this.shared=e,this.width=0,this.steps=0,this.targets=[],this.a=0,this.b=0,this.work=1,this.progress=0,this.pending=!0,this.material=null,this.quad=new ms(null),this.onComplete=null}setQuality(t,e){if(!(t===this.width&&e===this.steps)){this.width=t,this.steps=e;for(let n of this.targets)n.dispose();this.targets=[0,1,2].map(()=>{let n=new Ke(t,t/2,{type:gn,depthBuffer:!1});return n.texture.wrapS=cs,n.texture.minFilter=n.texture.magFilter=Fn,n.texture.generateMipmaps=!1,n}),this.material?.dispose(),this.frozen={skySunDir:{value:new D},skyMoonDir:{value:new D},skyTurbidity:{value:0},skyRayleigh:{value:0},skyMie:{value:0},skyMieG:{value:0},skyCloudCover:{value:0},skyNight:{value:0},skyCloudLit:{value:new Lt},skyCloudShade:{value:new Lt},uWind:{value:new Yt},uLightDir:{value:new D},uRect:{value:new Ce}},this.material=new Oe({uniforms:this.frozen,defines:{CLOUD_STEPS:e},depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:`varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:ey}),this.quad.material=this.material,this.a=this.b=0,this.work=1,this.progress=0,this.pending=!0}}freeze(t,e){let n=this.frozen,i=this.shared;for(let r of["skySunDir","skyMoonDir","skyCloudLit","skyCloudShade"])n[r].value.copy(i[r].value);for(let r of["skyTurbidity","skyRayleigh","skyMie","skyMieG","skyCloudCover","skyNight"])n[r].value=i[r].value;n.uWind.value.copy(t),n.uLightDir.value.copy(e)}paint(t,e){let n=this.renderer,i=this.targets[this.work],r=n.getRenderTarget(),o=Math.round(t/Xr*this.width),a=Math.round(e/Xr*this.width);i.viewport.set(o,0,a-o,i.height),i.scissor.set(o,0,a-o,i.height),i.scissorTest=!0,this.frozen.uRect.value.set(o/this.width,0,a/this.width,1),n.setRenderTarget(i),this.quad.render(n),n.setRenderTarget(r)}publish(){let t=this.shared;t.skyPanoA.value=this.targets[this.a].texture,t.skyPanoB.value=this.targets[this.b].texture,t.skyPanoBlend.value=this.a===this.b?0:this.progress/Xr}update(t,e,n=1){if(!this.material)return;if(this.pending){this.pending=!1,this.freeze(t,e),this.paint(0,Xr),this.a=this.b=this.work,this.work=(this.work+1)%3,this.progress=0,this.publish(),this.onComplete?.(!0);return}this.progress===0&&this.freeze(t,e);let i=Math.min(Xr,this.progress+n);if(this.paint(this.progress,i),this.progress=i,this.progress>=Xr){let r=this.work;this.work=[0,1,2].find(o=>o!==this.b&&o!==r),this.a=this.b,this.b=r,this.progress=0,this.onComplete?.(!1)}this.publish()}};var sc={golden:19.22,dusk:19.95,night:23.2,dawn:6.9,noon:13.2},Td=6.4,ny=19.7,Ne={skySunDir:{value:new D(-.9,.12,-.3).normalize()},skyMoonDir:{value:new D(.6,.5,.4).normalize()},skyTurbidity:{value:6},skyRayleigh:{value:2.2},skyMie:{value:.006},skyMieG:{value:.82},skyIntensity:{value:.75},skyCloudCover:{value:.47},skyTime:{value:0},skyNight:{value:0},skyCloudLit:{value:new Lt},skyCloudShade:{value:new Lt},fogSunColor:{value:new Lt},fogSunDir:{value:new D},fogHeightFalloff:{value:.012},nightFactor:{value:0},worldTime:{value:0},skyPanoA:{value:null},skyPanoB:{value:null},skyPanoBlend:{value:0},skySunColor:{value:new Lt},fogPano:{value:1},mirrorPass:{value:0}};ae.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorld;
#endif`;ae.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorld = transpose(mat3(viewMatrix)) * (mvPosition.xyz - viewMatrix[3].xyz);
#endif`;ae.fog_pars_fragment=`
#ifdef USE_FOG
  uniform vec3 fogColor;
  uniform float fogDensity;
  uniform vec3 fogSunColor;
  uniform vec3 fogSunDir;
  uniform float fogHeightFalloff;
  uniform sampler2D paFogPanoA;
  uniform sampler2D paFogPanoB;
  uniform vec3 paFogPano; // cross-fade, sky intensity, on
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
    if (paFogPano.z > 0.5 && amount > 0.003) {
      // Things fade into the sky that is actually behind them: orange toward a sunset,
      // blue away from it. Sampled just above the horizon in the direction of view.
      vec2 puv = vec2(atan(dir.z, dir.x) / 6.2831853 + 0.5, 0.21);
      vec3 horizon = mix(texture2D(paFogPanoA, puv).rgb, texture2D(paFogPanoB, puv).rgb, paFogPano.x) * paFogPano.y;
      // Haze is never as bright as the glare round the sun itself.
      horizon /= max(1.0, dot(horizon, vec3(0.2126, 0.7152, 0.0722)) / 1.15);
      fogCol = mix(fogCol, horizon, 0.55);
    }
    return mix(color, fogCol, clamp(amount, 0.0, 1.0));
  }
#endif
${Ed}`;Sd();ae.fog_fragment=`
#ifdef USE_FOG
  gl_FragColor.rgb = pa_applyFog(gl_FragColor.rgb, vFogWorld);
#endif`;var rc={paFogPanoA:Ne.skyPanoA,paFogPanoB:Ne.skyPanoB,paFogPano:{value:new D(0,1,1)}};function Qh(s){if(s.userData.atmo)return s;s.userData.atmo=!0;let t=s.onBeforeCompile,e=s.customProgramCacheKey();return s.onBeforeCompile=function(n,i){t.call(this,n,i),n.uniforms.fogSunColor=Ne.fogSunColor,n.uniforms.fogSunDir=Ne.fogSunDir,n.uniforms.fogHeightFalloff=Ne.fogHeightFalloff,Object.assign(n.uniforms,si,rc)},s.customProgramCacheKey=()=>e+"|atmo",s}function Rd(s){s.traverse(t=>{if(t.material)for(let e of Array.isArray(t.material)?t.material:[t.material])e.isShaderMaterial||e.isRawShaderMaterial||Qh(e)})}var iy=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,sy=`
${gs}
${Kl}
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
}`;function Ad(s=!0,t=!0){return new Oe({uniforms:{...Ne,skyClouds:{value:s?1:0},skyDisc:{value:t?1:0}},vertexShader:iy,fragmentShader:sy,side:Sn,depthWrite:!1,depthTest:!0,fog:!1})}var ry=new D(0,1,0),oy=new D,ay=new D,Jh=new D,Se=(s,t,e)=>new Lt(s,t,e),$s=(s,t,e)=>{if(e<=t[0][0])return s.copy(t[0][1]);for(let n=1;n<t.length;n++)if(e<=t[n][0]){let[i,r]=t[n-1],[o,a]=t[n];return s.copy(r).lerp(a,(e-i)/(o-i))}return s.copy(t[t.length-1][1])},Zi=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e];return i+(o-i)*(t-n)/(r-n)}return s[s.length-1][1]},ly=[[-6,Se(.9,.35,.2)],[0,Se(1,.34,.1)],[4,Se(1,.47,.19)],[10,Se(1,.66,.38)],[25,Se(1,.88,.74)],[60,Se(1,.97,.92)]],cy=[[-4,0],[0,1.6],[4,4.6],[12,5],[40,5.2]],hy=[[-15,Se(.06,.09,.18)],[-4,Se(.22,.24,.42)],[2,Se(.62,.55,.62)],[12,Se(.6,.7,.85)],[40,Se(.62,.76,.95)]],uy=[[-15,Se(.05,.05,.06)],[0,Se(.35,.24,.2)],[15,Se(.42,.36,.3)],[40,Se(.45,.42,.38)]],fy=[[-15,.4],[-4,.42],[3,.32],[12,.45],[30,.6]],dy=[[-15,Se(.03,.04,.075)],[-5,Se(.15,.15,.26)],[0,Se(.42,.33,.38)],[6,Se(.58,.45,.42)],[18,Se(.55,.62,.72)],[50,Se(.55,.66,.8)]],py=[[-15,Se(.05,.06,.1)],[-5,Se(.4,.24,.22)],[0,Se(1.15,.5,.22)],[6,Se(1.2,.68,.38)],[20,Se(.9,.84,.76)],[50,Se(.75,.8,.86)]],my=[[-12,Se(.04,.05,.08)],[-5,Se(.45,.25,.32)],[0,Se(1.8,.72,.42)],[5,Se(1.9,1.1,.7)],[15,Se(1.5,1.4,1.35)],[50,Se(1.5,1.5,1.5)]],gy=[[-12,Se(.02,.025,.04)],[-5,Se(.18,.13,.22)],[0,Se(.42,.26,.34)],[5,Se(.6,.45,.48)],[15,Se(.74,.78,.86)],[50,Se(.86,.9,.97)]],xy=[[-15,7e-4],[-3,8e-4],[3,85e-5],[15,6e-4],[50,45e-5]],vy=[[-15,1.35],[-5,1.2],[0,1.05],[6,.92],[20,.76],[50,.68]],yy=[[-15,.5],[-4,.45],[2,.36],[12,.45],[30,.6]],ic=class{constructor(t,e){this.renderer=t,this.scene=e,this.hours=sc.golden,this.cycle=!1,this.cycleSpeed=24/2880,this.sky=new Ot(new Kt(1,1,1),Ad(!0)),this.sky.scale.setScalar(2e3),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.userData.noAO=!0,e.add(this.sky),this.probeScene=new Us,this.probeSky=new Ot(new Kt(1,1,1),Ad(!0,!1)),this.probeSky.scale.setScalar(100),this.probeScene.add(this.probeSky);let n=new Ot(new wo(60,24),new nn({color:1776156}));n.rotation.x=-Math.PI/2,n.position.y=-2,this.probeGround=n,this.probeScene.add(n),this.pmrem=new Hr(t),this.baker=new nc(t,Ne),this.baker.setQuality(1024,28),this.baker.onComplete=i=>{i&&(this.envDirty=!0)},this.envTarget=null,this.envDirty=!0,this.envTimer=0,this.lastEnvHours=-100,this.sun=new Co(16777215,3),this.sun.castShadow=!0,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.06,this.shadowRange=110,e.add(this.sun,this.sun.target),this.hemi=new Ao(16777215,4473924,1),e.add(this.hemi),e.fog=new _o(12687759,.0016),this.sunDir=new D,this.moonDir=new D,this.lightDir=new D,this.wind=new Yt,this.realLamps=!0,this.cloudShadows=.5,this.nightFactor=0,this.elevation=0,this.exposure=.8,this.apply()}setHours(t){this.hours=(t%24+24)%24,this.envDirty=!0,this.baker.pending=!0,this.apply()}setSkyQuality(t,e,n){this.baker.setQuality(t,e),Ne.fogPano.value=n?1:0,this.envDirty=!0}setShadowQuality(t,e){this.sun.shadow.mapSize.set(t,t),this.shadowRange=e,this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=n.bottom=-e,n.right=n.top=e,n.near=1,n.far=900,n.updateProjectionMatrix()}computeSun(t,e){let n=(t-Td)/(ny-Td),i=Math.PI*n,r=Math.asin(Math.sin(i)*Math.sin(_e.degToRad(64))),o=Math.cos(i),a=Math.sin(i)*.6-.32,c=Math.hypot(o,a)||1;return e.set(o/c*Math.cos(r),Math.sin(r),a/c*Math.cos(r)).normalize(),_e.radToDeg(r)}apply(){let t=Ne,e=this.computeSun(this.hours,this.sunDir);this.elevation=e,this.computeSun(this.hours+12.4,this.moonDir),this.moonDir.y=Math.max(this.moonDir.y,.25),this.moonDir.normalize(),t.skySunDir.value.copy(this.sunDir),t.skyMoonDir.value.copy(this.moonDir);let n=_e.smoothstep(-e,-2,9),i=_e.smoothstep(-e,-7,1.5);this.nightFactor=n,this.lampFactor=i,t.nightFactor.value=i,t.skyNight.value=n,t.skyTurbidity.value=Zi([[-5,3.5],[2,5.5],[10,4.5],[40,2.6]],e),t.skyRayleigh.value=Zi([[-5,1.6],[2,2.8],[10,2],[40,1.2]],e),t.skyMie.value=Zi([[0,.006],[10,.005],[40,.004]],e),t.skyIntensity.value=Zi([[-8,.6],[0,.72],[20,.62],[50,.55]],e),$s(t.skyCloudLit.value,my,e),$s(t.skyCloudShade.value,gy,e);let r=e>-1.5;this.lightDir.copy(r?this.sunDir:this.moonDir),r?($s(this.sun.color,ly,e),this.sun.intensity=Zi(cy,e)):(this.sun.color.setRGB(.55,.65,.95),this.sun.intensity=.32*n),this.lightDir.y<.08&&(this.lightDir.y=.08,this.lightDir.normalize()),$s(this.hemi.color,hy,e),$s(this.hemi.groundColor,uy,e),this.hemi.intensity=Zi(fy,e),$s(this.scene.fog.color,dy,e),$s(t.fogSunColor.value,py,e),t.fogSunDir.value.copy(this.sunDir),this.scene.fog.density=Zi(xy,e),this.exposure=Zi(vy,e),this.scene.environmentIntensity=Zi(yy,e),this.probeGround.material.color.copy(this.hemi.groundColor).multiplyScalar(.25)}regenerateEnvironment(){let t=this.envTarget;this.envTarget=this.pmrem.fromScene(this.probeScene,0,.1,400),this.scene.environment=this.envTarget.texture,t&&t.dispose(),this.envDirty=!1,this.lastEnvHours=this.hours}update(t,e,n,i){Ne.skyTime.value=e,Ne.worldTime.value=e,this.cycle&&(this.hours=(this.hours+t*this.cycleSpeed)%24,this.apply(),Math.abs(this.hours-this.lastEnvHours)>.12&&(this.envDirty=!0)),this.sky.position.copy(i.position),this.wind.set(e*9,e*3.5),si.paSunDirW.value.copy(this.lightDir),si.paLamp.value.x=this.realLamps?this.lampFactor*60:0,si.paCloud.value.set(this.cloudShadows*_e.smoothstep(this.elevation,1,9),Ne.skyCloudCover.value,this.wind.x,this.wind.y),this.baker.update(this.wind,this.lightDir,1),rc.paFogPano.value.set(Ne.skyPanoBlend.value,Ne.skyIntensity.value,Ne.fogPano.value),Ne.skySunColor.value.copy(this.sun.color).multiplyScalar(this.elevation>-1.5?26:0),this.envDirty&&this.regenerateEnvironment();let o=this.shadowRange*2/this.sun.shadow.mapSize.x,a=oy.crossVectors(ry,this.lightDir).normalize(),c=ay.crossVectors(this.lightDir,a),h=Math.round(n.dot(a)/o)*o,l=Math.round(n.dot(c)/o)*o,f=n.dot(this.lightDir);Jh.copy(a).multiplyScalar(h).addScaledVector(c,l).addScaledVector(this.lightDir,f),this.sun.target.position.copy(Jh),this.sun.position.copy(Jh).addScaledVector(this.lightDir,450),this.sun.target.updateMatrixWorld()}get clockLabel(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};function Bn(s,t,e){let n=t.isMaterial?t:new Bt(t);return n.onBeforeCompile=i=>{Object.assign(i.uniforms,e.uniforms||{}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
${gs}
${e.fragmentPars||""}`).replace("#include <color_fragment>",`#include <color_fragment>
${e.color||""}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${e.roughness||""}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${e.metalness||""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${e.normal||""}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${e.emissive||""}`)},n.customProgramCacheKey=()=>"pa-"+s,n}function Je(s,t,e,n,{srgb:i=!0,repeat:r=!1}={}){let o=document.createElement("canvas");o.width=t,o.height=e,n(o.getContext("2d"),t,e);let a=new zs(o);return i&&(a.colorSpace=En),a.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),r&&(a.wrapS=a.wrapT=cs),a}var jh=8294;function mt(){return jh=jh*1664525+1013904223>>>0,jh/4294967296}var gt=(s,t)=>s+mt()*(t-s),ue=s=>s[Math.floor(mt()*s.length)],Re=s=>mt()<s;function Ks(s,t){let e=Math.imul(Math.floor(s)|0,374761393)+Math.imul(Math.floor(t)|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}var Cd={"-240,-400":"parking","-240,-240":{stucco:3,motel:2,shops:2},"-240,-80":{hotel:3,shops:2,stucco:1},"-240,80":{stucco:3,shops:2,motel:1},"-240,240":{motel:2,stucco:3,shops:1},"-240,400":{stucco:3,shops:2},"-80,-400":{brick:3,shops:2,garage:1},"-80,-240":{office:2,garage:1,deco:1,shops:1},"-80,-80":{shops:2,condo:2,deco:1,brick:1},"-80,80":"park","-80,240":{brick:3,garage:1,shops:1},"-80,400":{warehouse:4,garage:1},"80,-400":{tower:3,office:2,deco:1},"80,-240":{tower:2,deco:2,office:1},"80,-80":"plaza","80,80":{hotel:2,shops:1,condo:2},"80,240":"parking","80,400":{warehouse:3,shops:1,brick:1},"240,-400":{office:2,tower:2,garage:1},"240,-240":"plaza-tall","240,-80":{deco:2,tower:2,hotel:1},"240,80":{condo:2,brick:2,shops:1},"240,240":{condo:3,shops:2},"240,400":"park"},_y={seaview:[{stucco:3,motel:2,shops:2,hotel:1},[.05,.06,0]],northshore:[{condo:3,hotel:2,stucco:2,shops:2,brick:1},[.12,.03,0]],marina:[{stucco:2,shops:2,warehouse:2,motel:1,condo:1},[.06,.1,0]],midtown:[{office:2,condo:2,brick:2,shops:2,deco:1,garage:1,hotel:1},[.06,.04,.05]],palm:[{shops:2,condo:2,brick:2,stucco:1,deco:1},[.1,.04,0]],southbank:[{brick:3,shops:2,garage:1,warehouse:1,condo:1},[.07,.06,0]],arts:[{brick:3,warehouse:2,shops:2,garage:1},[.05,.06,0]],port:[{warehouse:5,garage:1,shops:1},[.02,.14,0]],eastside:[{stucco:4,shops:2,brick:1,condo:1},[.16,.03,0]],foothills:[{stucco:5,shops:1,motel:1},[.18,.03,0]],laurel:[{condo:2,stucco:2,shops:2,brick:1,hotel:1},[.1,.03,.04]]},My=[[.75,{tower:4,office:2,deco:1}],[.45,{tower:2,deco:2,office:2,hotel:1,garage:1}],[0,{office:2,condo:2,deco:1,shops:1,garage:1,brick:1}]];function by(s,t){let e=Math.max(0,1-Math.hypot(s-150,t+200)/380),n=1.3*Math.max(0,1-Math.hypot(s-640,t+480)/640);return Math.max(e,n)}var tu=new Map;function wy(s,t){let e=`${s},${t}`;if(tu.has(e))return tu.get(e);let n=vi(s,t),i=Cd[e],r=i?Math.max(0,1-Math.hypot(s-150,t+200)/380):by(s,t),o="mix",a=null;if(i)typeof i=="string"?o=i:a=i;else if(n==="laurel"&&s>560&&s<1040&&t>160&&t<480)o="park";else if(n==="downtown"){let h=Ks(s*.37+11,t*.53+5);h<.1?o=r>.7?"plaza-tall":"plaza":h<.13?o="park":h<.16?o="parking":a=My.find(([l])=>r>=l)[1]}else{let[h,[l,f,d]]=_y[n],u=Ks(s*.37+11,t*.53+5);u<l?o="park":u<l+f?o="parking":u<l+f+d?o="plaza":a=h}let c={kind:o,weights:a,district:n,dw:r,coastal:s<-170,lot:o==="park"?1:o==="parking"?2:o.startsWith("plaza")?4:0};return tu.set(e,c),c}function Ai(){let s=Wr.flatMap(e=>xs.map(n=>[e,n,wy(e,n)])),t=([e,n])=>`${e},${n}`in Cd;return[...s.filter(t),...s.filter(e=>!t(e))]}var Pd=()=>Ai().filter(([,,s])=>s.kind==="park");var Id=`${Ue.toFixed(1)}, ${(de.length-1).toFixed(1)}`,Dd=`${ge.toFixed(1)}, ${(pe.length-1).toFixed(1)}`,Ey=`
float paRoadNearest(float v, float start, float maxIndex) {
  return clamp(floor((v - start) / 160.0 + 0.5), 0.0, maxIndex) * 160.0 + start;
}
// Returns paint mask (rgb = color, a = coverage) and fills asphalt wear.
vec4 paRoadMarkings(vec2 p, out float wear, out float onRoad) {
  float dx = p.x - paRoadNearest(p.x, ${Id});
  float dz = p.y - paRoadNearest(p.y, ${Dd});
  float adx = abs(dx), adz = abs(dz);
  bool inX = adx < ${ee.toFixed(1)};
  bool inZ = adz < ${ee.toFixed(1)};
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
    if (aa > ${ee.toFixed(1)} || ab < ${ee.toFixed(1)}) continue;
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
`,kn={wetness:{value:0},mirrorTex:{value:null},mirrorMatrix:{value:new Ht},useMirror:{value:0},worldTime:{value:0}},Sy=`
float paRoadDetail(vec2 p, float fw, out float manhole) {
  manhole = 0.0;
  float skid = 0.0;
  float dx = p.x - paRoadNearest(p.x, ${Id});
  float dz = p.y - paRoadNearest(p.y, ${Dd});
  for (int axis = 0; axis < 2; axis++) {
    float a = axis == 0 ? dx : dz;
    float b = axis == 0 ? dz : dx;
    float along = axis == 0 ? p.y : p.x;
    float road = axis == 0 ? p.x - dx : p.y - dz;
    if (abs(a) > ${ee.toFixed(1)} || abs(b) < ${ee.toFixed(1)}) continue;
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
`,Ty=`
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
  // Damp asphalt is rough: it smears what it reflects toward the eye and breaks it up
  // with its own grain. Only standing water gives a clean mirror.
  float grain = pa_noise(worldPos.xz * 6.0);
  uv += ripple * mix(0.011, 0.002, puddle) + vec2(grain - 0.5, 0.0) * 0.006 * (1.0 - puddle);
  vec3 sharp = texture2D(mirrorTex, uv).rgb;
  vec3 streak = (sharp + texture2D(mirrorTex, uv + vec2(0.0, 0.012)).rgb + texture2D(mirrorTex, uv + vec2(0.0, 0.03)).rgb
    + texture2D(mirrorTex, uv + vec2(0.0, 0.06)).rgb + texture2D(mirrorTex, uv - vec2(0.0, 0.014)).rgb + texture2D(mirrorTex, uv - vec2(0.0, 0.034)).rgb) / 6.0;
  return mix(streak * (0.45 + 0.5 * grain), sharp, puddle);
}
`;function Ay(){return Bn("road",{color:16777215,roughness:.85,metalness:0},{uniforms:kn,fragmentPars:Ey+Sy+Ty+`
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
      }`})}function Ry(){return Bn("slab",{color:16777215,roughness:.85,metalness:0},{uniforms:{wetness:kn.wetness},vertexPars:"attribute float aLot; flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf;",vertex:`
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
        float ring = ${xi.toFixed(1)};
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
      }`,roughness:"roughnessFactor = mix(paSlabRough, 0.42, wetness * (abs(vLot - 1.0) < 0.5 ? 0.0 : 1.0));"})}function Cy(){return Bn("sand",{color:16777215,roughness:.95},{fragmentPars:"float paWet;",color:`
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
      }`,roughness:"roughnessFactor = mix(0.95, 0.22, paWet);"})}function Py(){return Bn("terrain",{color:16777215,roughness:.95},{color:`
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
      }`})}function yi(s,t){let e=Math.max(0,s-(Ee+52)),n=Math.max(0,ge-80-t),i=Math.max(0,t-(Pe+80)),r=Math.hypot(e,Math.max(n,i)*.9);if(s<-360)return-40;if(r<=0)return-.6;let o=Math.sin(s*.011+Math.sin(t*.006)*2)*.5+Math.sin(t*.013+s*.004)*.5,a=Math.sin(s*.031+t*.017)*5+Math.sin(t*.043-s*.012)*3.5;return-.6+(70*(1-Math.exp(-r/170))+r*.1)*(.8+o*.3)+a*Math.min(r/120,1)+Math.min(r/30,1)*1.5}function Ld(s,t){let e=Ay(),n=new Ot(new He(1,1),e);n.rotation.x=-Math.PI/2;let i=fn-1,r=Ee+80,o=ge-140,a=Pe+140;n.scale.set(r-i,a-o,1),n.position.set((i+r)/2,0,(o+a)/2),n.receiveShadow=!0,s.add(n);let c=[];for(let[Z,F,Mt]of Ai())c.push([Z,F,ii,ii,Mt.lot]);let h=a-o,l=(o+a)/2;c.push([(We.from+We.to)/2,l,We.from-We.to,h,3]),c.push([(We.to+fn)/2,l,We.to-fn,h,1]);let f=de[de.length-1]+ee;c.push([f+xi/2,l,xi,h,0]),c.push([(f+xi+r)/2,l,r-f-xi,h,1]);let d=pe[0]-ee,u=pe[pe.length-1]+ee;for(let[Z,F]of[[d,-1],[u,1]]){let Mt=f-We.from,St=(f+We.from)/2;c.push([St,Z+F*xi/2,Mt,xi,0]),c.push([St,Z+F*(xi+35),Mt,70,1])}let g=new Kt(1,1,1),v=new ye(g,Ry(),c.length),m=new Float32Array(c.length),p=new Ht;c.forEach(([Z,F,Mt,St,Nt],Wt)=>{p.compose(new D(Z,ne/2-.05,F),new ve,new D(Mt,ne+.1,St)),v.setMatrixAt(Wt,p),m[Wt]=Nt}),g.setAttribute("aLot",new Ye(m,1)),v.receiveShadow=!0,v.layers.set(1),s.add(v);let _=new He(1,1,24,1),M=new Ot(_,Cy());M.rotation.x=-Math.PI/2;let y=-470,b=fn;M.scale.set(b-y,h+320,1),M.position.set((y+b)/2,0,l),M.updateMatrixWorld();let A=_.attributes.position;for(let Z=0;Z<A.count;Z++){let F=y+(A.getX(Z)+.5)*(b-y);A.setZ(Z,F>=fn?0:-.02-(fn-F)*.0105)}_.computeVertexNormals(),M.receiveShadow=!0,s.add(M);let P=-420,I=Ee+1500,E=ge-1400,w=Pe+1400,N=new He(I-P,w-E,Math.round((I-P)/22),Math.round((w-E)/22));N.rotateX(-Math.PI/2);let X=N.attributes.position;for(let Z=0;Z<X.count;Z++){let F=X.getX(Z)+(P+I)/2,Mt=X.getZ(Z)+(E+w)/2;X.setX(Z,F),X.setZ(Z,Mt),X.setY(Z,yi(F,Mt))}N.computeVertexNormals();let B=new Ot(N,Py());B.receiveShadow=!0,s.add(B);let k=new Kt(1,1,1),W=new Bt({color:10131084,roughness:.9}),q=[[he.maxX+1.5,0,1,1,he.maxZ-he.minZ+4],[(he.maxX+We.from)/2,he.minZ-1.5,he.maxX-We.from,1,1],[(he.maxX+We.from)/2,he.maxZ+1.5,he.maxX-We.from,1,1]],it=new ye(k,W,q.length);return q.forEach(([Z,F,Mt,St,Nt],Wt)=>{p.compose(new D(Z,St/2,F),new ve,new D(Mt,St,Nt)),it.setMatrixAt(Wt,p)}),it.castShadow=it.receiveShadow=!0,s.add(it),{ground:n,slabMesh:v,terrain:B}}function Be(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Fe,h=0;for(let l=0;l<s.length;++l){let f=s[l],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,u,l),h+=u}}if(e){let l=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+l);l+=s[d].attributes.position.count}c.setIndex(f)}for(let l in r){let f=Fd(r[l]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,f)}for(let l in o){let f=o[l][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<f;++d){let u=[];for(let v=0;v<o[l].length;++v)u.push(o[l][v][d]);let g=Fd(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Fd(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){let l=s[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}let o=new t(r),a=new je(o,e,n),c=0;for(let h=0;h<s.length;++h){let l=s[h];if(l.isInterleavedBufferAttribute){let f=c/e;for(let d=0,u=l.count;d<u;d++)for(let g=0;g<e;g++){let v=l.getComponent(d,g);a.setComponent(d+f,g,v)}}else o.set(l.array,c);c+=l.count*e}return i!==void 0&&(a.gpuType=i),a}var Iy=new Ht;function $i(s,{exclude:t=[]}={}){s.updateMatrixWorld(!0);let e=new Ht().copy(s.matrixWorld).invert(),n=new Set;for(let o of t)o.traverse(a=>n.add(a));let i=new Map;s.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||n.has(o)||Array.isArray(o.material)||o.geometry.isInstancedBufferGeometry||Object.keys(o.geometry.morphAttributes).length)return;let a=[o.material.uuid,o.castShadow,o.receiveShadow,o.layers.mask,o.renderOrder,!!o.userData.noAO,o.frustumCulled].join("|");i.has(a)||i.set(a,[]),i.get(a).push(o)});let r=0;for(let o of i.values()){if(o.length<2)continue;let a=o.map(d=>{let u=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();return u.applyMatrix4(Iy.multiplyMatrices(e,d.matrixWorld)),u}),c=Object.keys(a[0].attributes).filter(d=>a.every(u=>u.attributes[d]&&u.attributes[d].itemSize===a[0].attributes[d].itemSize));for(let d of a)for(let u of Object.keys(d.attributes))c.includes(u)||d.deleteAttribute(u);let h=Be(a);if(!h)continue;let l=o[0],f=new Ot(h,l.material);f.castShadow=l.castShadow,f.receiveShadow=l.receiveShadow,f.layers.mask=l.layers.mask,f.renderOrder=l.renderOrder,f.frustumCulled=l.frustumCulled,f.userData={...l.userData,batched:o.length},s.add(f);for(let d of o)d.removeFromParent();r+=o.length-1}return r}var Js=(s,t)=>(s+4096)*8192+(t+4096),Qs=class{constructor(t=80,e=n=>[n.w,n.d]){this.cell=t,this.half=e,this.map=new Map,this.stamp=0,this.all=[]}add(t){let[e,n]=this.half(t),i=this.cell,r=Math.floor((t.x-e)/i),o=Math.floor((t.x+e)/i),a=Math.floor((t.z-n)/i),c=Math.floor((t.z+n)/i);for(let h=r;h<=o;h++)for(let l=a;l<=c;l++){let f=Js(h,l),d=this.map.get(f);d||this.map.set(f,d=[]),d.push(t)}return t._gs=0,this.all.push(t),t}addAll(t){for(let e of t)this.add(e);return this}near(t,e,n,i){let r=this.cell,o=++this.stamp,a=Math.floor((t-n)/r),c=Math.floor((t+n)/r),h=Math.floor((e-n)/r),l=Math.floor((e+n)/r);for(let f=a;f<=c;f++)for(let d=h;d<=l;d++){let u=this.map.get(Js(f,d));if(u)for(let g=0;g<u.length;g++){let v=u[g];if(v._gs!==o&&(v._gs=o,i(v)===!0))return!0}}return!1}segment(t,e,n,i,r){let o=this.cell,a=++this.stamp,c=Math.hypot(n-t,i-e),h=Math.max(1,Math.ceil(c/(o*.5))),l=NaN,f=NaN;for(let d=0;d<=h;d++){let u=d/h,g=Math.floor((t+(n-t)*u)/o),v=Math.floor((e+(i-e)*u)/o);if(!(g===l&&v===f)){l=g,f=v;for(let m=g-1;m<=g+1;m++)for(let p=v-1;p<=v+1;p++){let _=this.map.get(Js(m,p));if(_)for(let M=0;M<_.length;M++){let y=_[M];if(y._gs!==a&&(y._gs=a,r(y)===!0))return!0}}}}return!1}},Yn=class{constructor(t=24){this.cell=t,this.map=new Map,this.count=0}add(t){let e=Js(Math.floor(t.x/this.cell),Math.floor(t.z/this.cell)),n=this.map.get(e);return n||this.map.set(e,n=[]),n.push(t),this.count++,t}addAll(t){for(let e of t)this.add(e);return this}near(t,e,n,i){let r=this.cell,o=Math.floor((t-n)/r),a=Math.floor((t+n)/r),c=Math.floor((e-n)/r),h=Math.floor((e+n)/r);for(let l=o;l<=a;l++)for(let f=c;f<=h;f++){let d=this.map.get(Js(l,f));if(d){for(let u=0;u<d.length;u++)if(i(d[u])===!0)return!0}}return!1}any(t,e,n){return this.near(t,e,n,i=>Math.abs(i.x-t)<n&&Math.abs(i.z-e)<n)}},nu=320,Ud=(s,t)=>Js(Math.floor(s/nu),Math.floor(t/nu)),Vo=[],qr=new ti,eu=new fi;function Yr(s,t,e=null){return s.updateMatrixWorld(!0),qr.setFromObject(s),qr.getBoundingSphere(eu),Vo.push({object:s,far:t,x:eu.center.x,z:eu.center.z,r:Math.hypot(qr.max.x-qr.min.x,qr.max.z-qr.min.z)/2,onLod:e}),s}function iu(s,t){for(let e=0;e<Vo.length;e++){let n=Vo[e],i=Math.hypot(n.x-s,n.z-t)-n.r;n.far>0&&(n.object.visible=i<n.far),n.onLod&&n.onLod(i,n.object)}}var zd=()=>({entries:Vo.length,visible:Vo.filter(s=>s.object.visible).length});function an(s,t,e,n,{at:i,set:r,far:o=0,setup:a=null,cloneGeometry:c=!1,chunk:h=nu}){let l=new Map;t.forEach((u,g)=>{let[v,m]=i(u),p=Js(Math.floor(v/h),Math.floor(m/h)),_=l.get(p);_||l.set(p,_=[]),_.push(g)});let f=new Array(t.length),d=[];for(let u of l.values()){let g=new ye(c?e.clone():e,n,u.length);u.forEach((v,m)=>{r(g,m,t[v],v),f[v]={mesh:g,index:m}}),g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0),a?.(g,u.map(v=>t[v])),g.computeBoundingSphere(),s.add(g),o>0&&Yr(g,o),d.push(g)}return{meshes:d,refs:f}}var fe={CURTAIN:0,PUNCHED:1,RIBBON:2,BRICK:3,STUCCO:4,BALCONY:5,BLANK:6,DECO:7,GARAGE:8,METAL:9,MOTEL:10,CONDO:11},Dy=`
varying vec3 vFacLocal;
flat varying vec3 vFacSize;
flat varying vec3 vFacN;
flat varying vec4 vFacStyle;
flat varying vec3 vFacGlass;
flat varying vec2 vFacExtra;
flat varying float vFacTop;
uniform float nightFactor;
uniform float worldTime;
uniform float mirrorPass;
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

// The same trick for shop fronts: a sales floor behind the glass, with shelves of goods
// on the walls, a tiled floor and strip lights overhead. glow is how brightly the surface
// hit is lit when the shop is open.
vec3 paShop(vec2 cell, vec2 size, vec3 V, vec3 T, vec3 N, float seed, out float glow) {
  vec3 r = vec3(dot(V, T), V.y, max(-dot(V, N), 0.03));
  float depth = 6.5;
  float tx = abs(r.x) > 1e-4 ? (r.x > 0.0 ? size.x - cell.x : -cell.x) / r.x : 1e5;
  float ty = abs(r.y) > 1e-4 ? (r.y > 0.0 ? size.y - cell.y : -cell.y) / r.y : 1e5;
  float tz = depth / r.z;
  float t = min(tx, min(ty, tz));
  vec3 hit = vec3(cell, 0.0) + r * t;
  vec3 col;
  glow = 0.4;
  if (t == ty) {
    if (r.y > 0.0) {
      float strip = step(abs(fract(hit.z / 2.2) - 0.5), 0.1);
      col = mix(vec3(0.62), vec3(1.0), strip);
      glow = mix(0.5, 2.2, strip);
    } else {
      vec2 tile = floor(hit.xz / 0.6);
      col = vec3(0.44, 0.42, 0.38) * (0.84 + 0.16 * mod(tile.x + tile.y, 2.0));
    }
  } else {
    // Shelving: boards with rows of goods in assorted packaging, plain wall above.
    vec2 w = t == tz ? hit.xy : hit.zy;
    vec2 item = floor(w / vec2(0.24, 0.42)), f = fract(w / vec2(0.24, 0.42));
    vec3 goods = 0.3 + 0.5 * vec3(pa_hash12(item + seed), pa_hash12(item + seed + 7.7), pa_hash12(item + seed + 13.3));
    goods = mix(vec3(dot(goods, vec3(0.3333))), goods, 0.6); // packaging is mostly muted, with the odd bright one
    float onShelf = step(0.17, f.y) * step(0.1, f.x) * step(f.x, 0.9) * step(0.22, pa_hash12(item * 1.7 + seed));
    col = mix(mix(vec3(0.13, 0.11, 0.09), goods, onShelf), vec3(0.72, 0.68, 0.62), step(2.5, w.y));
    if (t == tx) col *= 0.78;
  }
  return col * (1.0 - 0.35 * hit.z / depth);
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
    #ifndef FACADE_LOW
      // Up close the glass shows the shop behind it.
      vec3 toShop = vPaWorld - cameraPosition;
      // (Not in the mirror: seen from under the street a shop is all ceiling lights.)
      float nearShop = (1.0 - smoothstep(55.0, 110.0, length(toShop))) * glass * (1.0 - mirrorPass);
      if (nearShop > 0.01) {
        float shopLight;
        vec3 shopRoom = paShop(vec2(sf * shopW, y), vec2(shopW, 3.7), normalize(toShop),
          an.x > 0.5 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0), vFacN, sid * 3.7 + seed, shopLight);
        albedo = mix(albedo, shopRoom * 0.3, nearShop * 0.75 * (1.0 - nightFactor * 0.7));
        fEmit = mix(fEmit, warm * shopRoom * shopLight * lit * (0.5 + 0.5 * shopGlow) * mix(0.04, 0.85, nightFactor), nearShop);
      }
    #endif
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
    float roomFade = (1.0 - smoothstep(70.0, 150.0, length(toPix))) * (1.0 - step(0.5, spandrel)) * (1.0 - mirrorPass);
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
`;function Nd(s=!1){let t=Bn(s?"facade-low":"facade",{color:16777215,roughness:.85,metalness:0},{uniforms:{nightFactor:Ne.nightFactor,worldTime:Ne.worldTime,mirrorPass:Ne.mirrorPass},vertexPars:`
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
      vFacTop = (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y;`,fragmentPars:Dy,color:`
      {
        vec3 albedo = diffuseColor.rgb;
        paFacade(albedo);
        diffuseColor.rgb = albedo;
      }`,roughness:"roughnessFactor = fRough;",metalness:"metalnessFactor = fMetal;",normal:"normal = normalize(normal + (viewMatrix * vec4(fTilt, 0.0)).xyz);",emissive:"totalEmissiveRadiance += fEmit;"});return s&&(t.defines={...t.defines,FACADE_LOW:""}),t}function Ly(){return Bn("tiles",{color:16777215,roughness:.7},{color:`
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
      }`})}function Fy(){let e=[-.54,0,-.54,.54,0,-.54,.54,0,.54,-.54,0,.54,-.22,1,0,.22,1,0],n=[0,4,5,0,5,1,1,5,2,2,5,4,2,4,3,3,4,0],i=new Fe;i.setAttribute("position",new ie(e,3)),i.setIndex(n);let r=i.toNonIndexed();return r.computeVertexNormals(),r}var Hn={stucco:["#e8dcc4","#f0d6c0","#e6c9a8","#d9e2d6","#f2e8d8","#e7b9a3","#d6c7e0","#f4e4b8","#cfe0e3"],concrete:["#a9a59c","#b8b2a6","#8f8e88","#c9c3b5","#9a9690","#b0aba0"],brick:["#8a4f3c","#9c5a43","#7a4535","#a8735a","#6d4a3c","#a35b45"],tower:["#9fa6a8","#7c8589","#b5b8b4","#5f686d","#c8c3b8"],stone:["#d8cbb0","#c9b79a","#b8a88c","#d2c6ae","#bfae94"],condo:["#e9e8e4","#d9dcdc","#c4c9cb","#ece4d6","#d6d2ca"],metal:["#8a9196","#6d7a6f","#9a8f7a","#7d4a3a","#5f6b78","#a7a9a3"],glass:[[.18,.32,.38],[.16,.27,.36],[.28,.3,.28],[.25,.22,.18],[.2,.34,.33],[.14,.2,.3]]},Uy={tower:36,deco:32,office:28,hotel:28,garage:28,condo:24,warehouse:24,motel:24,brick:18,stucco:14,shops:14};var kd=["COFFEE","PIZZA","NAILS","DELI","BOOKS","PHARMACY","TACOS","SURF","RAMEN","BAR","DONUTS","LAUNDRY","VINYL","BANK","FLOWERS","GYM"],Od=["#ff5a7a","#5fe8ff","#ffd25a","#ff8a3d","#a6ff6a","#ffffff","#ff6af0","#7ab8ff"],zy=["HOTEL MIRAMAR","THE PALMS","CASA DEL MAR","HOTEL AURELIO","THE SEABRIGHT"],Bd=["SURF DINER","GAS \xB7 24H","CAR WASH","DRIVE-IN","TIRE SHOP","TACO STAND","MINI MART","BURGERS"];function Wo(s,t,e,n,i=0){let r=s.x1-s.x0,o=s.z1-s.z0;if(r<=e&&o<=e||i>5)return n.push(s),n;let a=r>=o,c=a?r:o;if(c<t*2)return n.push(s),n;let h=_e.clamp(gt(.36,.64)*c,t,c-t);return a?(Wo({...s,x1:s.x0+h},t,e,n,i+1),Wo({...s,x0:s.x0+h},t,e,n,i+1)):(Wo({...s,z1:s.z0+h},t,e,n,i+1),Wo({...s,z0:s.z0+h},t,e,n,i+1)),n}function Ny(s){let t=Object.entries(s),e=t.reduce((i,[,r])=>i+r,0),n=mt()*e;for(let[i,r]of t)if((n-=r)<=0)return i;return t[0][0]}var wn={px:{nx:1,nz:0,rot:Math.PI/2},nx:{nx:-1,nz:0,rot:-Math.PI/2},pz:{nx:0,nz:1,rot:0},nz:{nx:0,nz:-1,rot:Math.PI}};function _s(s,t){return t.nx?s.d:s.w}function Ms(s,t,e,n=0){return t.nx?[s.x+t.nx*(s.w/2+n),s.z+e]:[s.x+e,s.z+t.nz*(s.d/2+n)]}function Zr(s){return Be(s.map(([t,e,n,i,r,o,a=0,c=0,h=0,l="box"])=>{let f=l==="cyl"?new ce(t,t,e,12):l==="cone"?new wi(t,e,12):new Kt(t,e,n);return(a||c||h)&&f.applyMatrix4(new Ht().makeRotationFromEuler(new cn(a,c,h))),f.translate(i,r,o),f.index?f.toNonIndexed():f}))}function Oy(){let s=Zr([[1.6,1,1.2,0,.5,0],[.42,.08,0,0,1.04,0,0,0,0,"cyl"],[1.62,.06,1.22,0,.22,0]]),t=Zr([[1.6,3,0,0,4.1,0,0,0,0,"cyl"],[1.75,1,0,0,6.1,0,0,0,0,"cone"],[.16,2.6,.16,1.1,1.3,1.1],[.16,2.6,.16,-1.1,1.3,1.1],[.16,2.6,.16,1.1,1.3,-1.1],[.16,2.6,.16,-1.1,1.3,-1.1],[2.6,.14,2.6,0,2.6,0]]),e=[[3.2,.06,1.1,0,0,.6],[3.2,.04,.04,0,.95,1.13],[.04,.04,1.1,-1.6,.95,.6],[.04,.04,1.1,1.6,.95,.6],[.04,.95,.04,-1.58,.47,1.13],[.04,.95,.04,0,.47,1.13],[.04,.95,.04,1.58,.47,1.13],[3.2,.03,.03,0,.5,1.13]],n=h=>Zr([...e,[Math.hypot(2.4,h),.05,.55,0,-h/2,.55,0,0,Math.atan2(h,2.4)],[Math.hypot(2.4,h),.03,.03,0,-h/2+.85,.83,0,0,Math.atan2(h,2.4)]]),i=Zr([[1,.16,1.35,0,0,.67]]),r=Zr([[1,1,.04,0,.58,1.33],[.012,1,1.35,-.5,.58,.67],[.012,1,1.35,.5,.58,.67]]),o=(()=>{let h=[],l=[],f=(u,g,v,m,p,_)=>{h.push(...u,...g,...v,...u,...v,...m),l.push(p[0],p[1],_[0],p[1],_[0],_[1],p[0],p[1],_[0],_[1],p[0],_[1])};f([-.5,0,0],[.5,0,0],[.5,-.7,1.6],[-.5,-.7,1.6],[0,0],[1,1]),f([-.5,-.7,1.6],[.5,-.7,1.6],[.5,-1,1.6],[-.5,-1,1.6],[0,0],[1,.3]);let d=new Fe;return d.setAttribute("position",new ie(h,3)),d.setAttribute("uv",new ie(l,2)),d.computeVertexNormals(),d})(),a=new He(1,1),c=Zr([[.08,1,0,0,.5,0,0,0,0,"cyl"]]);return{acUnit:s,tank:t,fireEscape:n,balconySlab:i,balconyRail:r,awning:o,sign:a,antenna:c}}function By(s){return Je(s,1024,1024,t=>{kd.forEach((e,n)=>{let i=n%2*512,r=Math.floor(n/2)*128,o=Od[n%Od.length],a=n%3===0;t.fillStyle=a?"#121417":["#f4efe4","#1d3b4a","#5a1f1a"][n%3],t.fillRect(i+4,r+4,504,120),t.strokeStyle=o,t.lineWidth=6,t.strokeRect(i+10,r+10,492,108),t.font='800 78px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor=o,t.shadowBlur=16,t.fillStyle=n%3===0?o:n%3===1?"#ffffff":"#ffe9c2",t.fillText(e,i+256,r+68),t.shadowBlur=0})})}function ky(s){return Je(s,256,32,(t,e,n)=>{for(let i=0;i<8;i++)t.fillStyle=i%2?"#f4f1ea":"#ffffff",t.fillRect(i*e/8,0,e/8,n),i%2===0&&(t.fillStyle="rgba(0,0,0,0.42)",t.fillRect(i*e/8,0,e/8,n))},{repeat:!1})}function Hd(s,t){let e=new Map,n=[],i=[],r=[],o=[],a=[],c=[],h=[],l=[],f=(x,R,U,z)=>{let O=`${x}|${Ud(R,U)}`;e.has(O)||e.set(O,[]),e.get(O).push(z)};function d(x,R,U,z,O,$,et,rt){return f("facade",x,R,{x,z:R,w:U,d:z,y0:O,h:$,style:et,...rt}),i.push({x,z:R,w:U,d:z,h:O+$}),O<1&&n.push({x,z:R,w:U/2,d:z/2}),{x,z:R,w:U,d:z,y0:O,h:$,top:O+$}}let u=(x,R,U={})=>({wall:R,glass:ue(Hn.glass),seed:mt()*100,shops:!1,floorH:x===fe.CURTAIN?gt(3.7,4.2):x===fe.STUCCO?3.4:x===fe.GARAGE?3:gt(3.2,3.6),cellW:x===fe.CURTAIN?gt(1.6,2.2):x===fe.RIBBON?gt(2.4,3):x===fe.STUCCO?gt(3.8,4.6):x===fe.DECO?gt(2.2,2.6):x===fe.MOTEL?4.2:x===fe.CONDO?gt(3.2,3.8):gt(2.8,3.6),...U}),g=(x,R)=>x*R.floorH+(R.shops?4.8:.9)+1.3-ne,v=(x,R,U)=>{let z=_s(x,U),O=Math.max(Math.floor((z-1)/R.cellW),1),$=R.shops?4.8:.9,et=Math.max(0,Math.floor((x.top-1.3-$)/R.floorH));return{faceW:z,nCols:O,groundH:$,rows:et,colU:rt=>(rt+.5-O/2)*R.cellW,rowY:rt=>$+rt*R.floorH}};function m(x,R,U=!1){for(let z=0;z<R;z++){let O=x.x+gt(-x.w/2+2.5,x.w/2-2.5),$=x.z+gt(-x.d/2+2.5,x.d/2-2.5);f("ac",O,$,{pos:[O,x.top,$],rot:ue([0,Math.PI/2]),scale:[gt(.8,1.6),gt(.8,1.3),gt(.8,1.5)],color:ue(["#b5b8b6","#9a9d9c","#c8c9c4"])})}if(U){let z=x.x+gt(-x.w/4,x.w/4),O=x.z+gt(-x.d/4,x.d/4);f("tank",z,O,{pos:[z,x.top,O],rot:0,scale:[1,gt(.9,1.15),1],color:ue(["#6b4f36","#5e4a3a","#7a5a3e"])})}}function p(x,R,U,z){f("antenna",x,U,{pos:[x,R,U],rot:0,scale:[1,z,1],color:"#9aa0a3"}),c.push([x,R+z+.3,U])}function _(x,R){d(x.x,x.z,x.w+.9,x.d+.9,x.top-.15,.75,fe.BLANK,u(fe.BLANK,R))}function M(x,R,U,z){for(let O of U){let $=_s(x,O),et=Math.max(Math.floor($/6),1),rt=$/et,yt=ue(["#b8322a","#2b6e8f","#2f7a4f","#d08a2a","#6b3f8f","#20304a"]);for(let K=0;K<et;K++){let ot=-$/2+(K+.5)*rt;if(Re(.78)){let[Tt,ht]=Ms(x,O,ot,.07);f("sign",Tt,ht,{pos:[Tt,4.1,ht],rot:O.rot,scale:[rt*.72,.7,1],sign:Math.floor(mt()*kd.length),color:"#ffffff"})}if(z&&Re(.7)){let[Tt,ht]=Ms(x,O,ot,.02);f("awning",Tt,ht,{pos:[Tt,3.62,ht],rot:O.rot,scale:[rt*.9,1,1],color:Re(.75)?yt:ue(["#b8322a","#2b6e8f","#2f7a4f"])})}}}}function y(x,R,U,z=2,O="glass"){for(let $ of U){let et=v(x,R,$);for(let rt=1;rt<et.rows;rt++)for(let yt=0;yt+z<=et.nCols;yt+=z){let K=(et.colU(yt)+et.colU(yt+z-1))/2,ot=z*R.cellW-.5,[Tt,ht]=Ms(x,$,K,0),wt=et.rowY(rt)+.02;f("balconySlab",Tt,ht,{pos:[Tt,wt,ht],rot:$.rot,scale:[ot,1,1],color:"#d9d8d2"}),f(O==="glass"?"balconyGlass":"balconyRail",Tt,ht,{pos:[Tt,wt,ht],rot:$.rot,scale:[ot,1,1],color:O==="glass"?"#9fb6bf":"#2a2c2d"})}}}function b(x,R,U){let z=v(x,R,U);if(z.nCols<4||z.rows<3)return;let O=Math.floor(mt()*(z.nCols-2))+1,$=(z.colU(O)+z.colU(O+1))/2,[et,rt]=Ms(x,U,$,0);for(let yt=1;yt<z.rows;yt++)f("fireEscape",et,rt,{pos:[et,z.rowY(yt),rt],rot:U.rot,scale:[1,1,1],color:"#2b2e30",floorH:R.floorH})}let A={tower(x,R,U){let z=x.w,O=x.d,$=d(x.x,x.z,z,O,ne,gt(10,16),ue([fe.RIBBON,fe.PUNCHED]),u(fe.RIBBON,ue(Hn.concrete),{shops:!0}));M($,null,R,!1),m({...$,x:x.x+z*.3,w:z*.3,d:O*.4},3);let et=u(fe.CURTAIN,ue(Hn.tower)),rt=70+U*gt(70,150),yt=Math.min(z-10,gt(30,46)),K=Math.min(O-10,gt(30,46)),ot=$.top,Tt=rt>120?3:rt>75?2:1,ht;for(let wt=0;wt<Tt;wt++){let Gt=wt===Tt-1?Math.max(rt-(ot-ne),12):rt*gt(.42,.58)/(wt+1);ht=d(x.x,x.z,yt,K,ot,Gt,fe.CURTAIN,et),ot+=Gt,yt*=gt(.72,.86),K*=gt(.72,.86)}if(a.push({x:ht.x,z:ht.z,w:ht.w,d:ht.d,y:ht.top-.6,color:ue(["#bfe3ff","#ffe2b0","#ffffff","#ffb9d8"])}),Re(.5)){let wt=d(ht.x,ht.z,ht.w*.45,ht.d*.45,ht.top,6,fe.BLANK,u(fe.BLANK,"#7d8487"));p(ht.x,wt.top,ht.z,rt>140?28:12)}else m(ht,4),c.push([ht.x+ht.w/2-1,ht.top+.8,ht.z+ht.d/2-1])},office(x,R,U){let z=x.w,O=x.d,$=Math.floor(gt(9,18)+U*gt(4,12)),et=Re(.6)?fe.RIBBON:fe.PUNCHED,rt=u(et,ue(Hn.concrete),{shops:!0}),yt=d(x.x,x.z,z,O,ne,g($,rt),et,rt);M(yt,rt,R,!1);let K=yt;Re(.45)&&(K=d(yt.x+gt(-2,2),yt.z+gt(-2,2),z*gt(.6,.75),O*gt(.6,.75),yt.top,gt(8,20),et,{...rt,shops:!1}));let ot=d(K.x,K.z,K.w*.35,K.d*.35,K.top,4.5,fe.BLANK,u(fe.BLANK,"#8d8f8c"));m(K,5),c.push([ot.x,ot.top+.3,ot.z])},deco(x,R,U){let z=ue(Hn.stone),O=u(fe.DECO,z,{shops:!0}),$=50+U*gt(30,90),et=x.w,rt=x.d,yt=ne,K,ot=3+($>100?1:0);for(let ht=0;ht<ot;ht++){let wt=ht===0?$*.45:$*.55/(ot-1);K=d(x.x,x.z,et,rt,yt,wt,fe.DECO,ht===0?O:{...O,shops:!1}),ht===0&&M(K,O,R,Re(.4)),_(K,"#e6dcc6"),yt+=wt,et*=gt(.7,.8),rt*=gt(.7,.8)}let Tt=d(K.x,K.z,Math.max(3,et*.4),Math.max(3,rt*.4),K.top,8,fe.BLANK,u(fe.BLANK,z));p(Tt.x,Tt.top,Tt.z,18),a.push({x:Tt.x,z:Tt.z,w:Tt.w,d:Tt.d,y:Tt.top-1.2,color:ue(["#ffe2b0","#bfe3ff"])})},brick(x,R){let U=u(fe.BRICK,ue(Hn.brick),{shops:Re(.75),floorH:gt(3.1,3.4)}),z=Math.floor(gt(4,8)),O=d(x.x,x.z,x.w,x.d,ne,g(z,U),fe.BRICK,U);U.shops&&M(O,U,R,Re(.5)),_(O,"#b8ab98");for(let $ of R.slice(0,2))Re(.8)&&b(O,U,$);m(O,2,Re(.8))},condo(x,R,U){let z=u(fe.CONDO,ue(Hn.condo),{shops:Re(.6),floorH:3.2}),O=Math.floor(gt(6,12)+U*8),$=d(x.x,x.z,x.w,x.d,ne,g(O,z),fe.CONDO,z);z.shops&&M($,z,R,!1),y($,z,R,2,"glass"),m($,3)},hotel(x,R,U){let z=u(fe.CONDO,ue(["#efe6d4","#e2d3bd","#d8dfe2","#f2ddd0"]),{shops:!0,floorH:3.3}),O=Math.min(x.w,gt(26,38)),$=Math.min(x.d,gt(18,26)),et=Math.floor(gt(10,16)+U*6),rt=d(x.x,x.z,O,$,ne,g(et,z),fe.CONDO,z);y(rt,z,R.length?R:[wn.pz],1,"metal");let yt=R[0]||wn.pz,K=ue(zy);o.push({kind:"hotel",b:rt,f:yt,name:K}),m(rt,3)},shops(x,R){let U=Re(.5),z=u(fe.PUNCHED,Re(.6)?ue(Hn.stucco):ue(Hn.concrete),{shops:!0}),O=d(x.x,x.z,x.w,x.d,ne,U?g(1,z):6,fe.PUNCHED,z);M(O,z,R.length?R:[wn.pz],!0),_(O,"#cfc6b4"),m(O,Math.floor(gt(2,5)))},garage(x,R){let U=u(fe.GARAGE,ue(["#b3ada2","#a7a49c","#c0b8aa"]),{floorH:3}),z=Math.floor(gt(4,7)),O=d(x.x,x.z,x.w,x.d,ne,z*3+1.4,fe.GARAGE,U);o.push({kind:"garage",b:O,f:R[0]||wn.pz}),m(O,1)},stucco(x,R){let U=R.length>0&&Re(.8),z=u(fe.STUCCO,ue(Hn.stucco),{shops:U}),O=Math.floor(gt(2,5)),$=d(x.x,x.z,x.w,x.d,ne,g(O,z),Re(.8)?fe.STUCCO:fe.PUNCHED,z);U&&M($,z,R,Re(.6)),Re(.8)?f("tileRoof",$.x,$.z,{pos:[$.x,$.top,$.z],rot:0,scale:[$.w,Math.min($.w,$.d)*.22,$.d]}):m($,2),R.find(rt=>rt.nx===-1)&&Re(.6)&&h.push({x:$.x-$.w/2-.12,z:$.z,y:(U?4.8:1.2)+1.8,face:"west",text:ue(["MOTEL","TACOS","SURF SHOP","LIQUOR","PIZZA","COCKTAILS","ICE CREAM","BAIT & TACKLE"]),color:ue(["#ff4f7b","#5ff2ff","#ffd25a","#ff7a3d","#9dff6a"])})},motel(x,R){let U=R[0]||wn.pz,z=u(fe.MOTEL,ue(Hn.stucco),{floorH:3}),O=_s(x,U),$=U.nx?x.w:x.d,et=Math.min($*.5,12),rt=$/2-et/2,yt=x.x-U.nx*rt,K=x.z-U.nz*rt,ot=U.nx?et:O*.92,Tt=U.nx?O*.92:et,ht=d(yt,K,ot,Tt,ne,g(2,z),fe.MOTEL,z),[wt,Gt]=Ms(ht,U,0,0);f("balconySlab",wt,Gt,{pos:[wt,.9+3+.02,Gt],rot:U.rot,scale:[_s(ht,U)-.4,1,1.15],color:"#e6e1d6"}),f("balconyRail",wt,Gt,{pos:[wt,.9+3+.02,Gt],rot:U.rot,scale:[_s(ht,U)-.4,1,1.15],color:"#e8e4da"}),f("tileRoof",ht.x,ht.z,{pos:[ht.x,ht.top,ht.z],rot:0,scale:[ht.w,Math.min(ht.w,ht.d)*.28,ht.d]});let[V,bt]=Ms(x,U,-_s(x,U)/2+4,-2);o.push({kind:"motelSign",x:V,z:bt,f:U,name:ue(["SEA BREEZE","SUNSET","PALM VIEW","BLUE WAVE"])}),r.push({x:x.x+U.nx*et/2,z:x.z+U.nz*et/2,w:U.nx?$-et:O,d:U.nx?O:$-et,parking:!0})},warehouse(x,R){let U=u(fe.METAL,ue(Hn.metal),{floorH:9}),z=gt(8,11.5),O=d(x.x,x.z,x.w,x.d,ne,z,fe.METAL,U);m(O,Math.floor(gt(1,4)))}},P=ii/2-xi;for(let[x,R,U]of Ai()){let z=`${x},${R}`,O=U.kind==="mix"?U.weights:U.kind,$=U.dw;if(O==="park"){r.push({x,z:R,w:P*2,d:P*2,park:!0});continue}if(O==="parking"){let K=d(x-P+14,R-P+11,24,18,ne,5.5,fe.STUCCO,u(fe.STUCCO,ue(Hn.stucco),{shops:!0}));M(K,null,[wn.nz],!0);let ot=z==="80,240"?"GAS \xB7 24H":z==="-240,-400"?"SURF DINER":Bd[Math.floor(Ks(x+3,R+9)*Bd.length)];h.push({x:K.x,z:K.z-K.d/2-.1,y:7.6,face:"north",text:ot,color:"#ff6a5a"}),r.push({x:x+10,z:R+10,w:P*1.6,d:P*1.6,parking:!0});continue}if(O==="plaza"||O==="plaza-tall"){let K=gt(46,54);A.tower({x:x+gt(-6,6),z:R+gt(-6,6),w:K,d:K},[wn.px,wn.nx,wn.pz,wn.nz],O==="plaza-tall"?Math.max(1.25,$*1.1):Math.max(.95,$)),r.push({x,z:R,w:P*2,d:P*2,plaza:!0});continue}let rt=U.coastal||U.district==="eastside"||U.district==="foothills",yt=Wo({x0:x-P,x1:x+P,z0:R-P,z1:R+P},rt?18:22,rt?44:64,[]);for(let K of yt){let ot=K.x1-K.x0,Tt=K.z1-K.z0,ht=[];if(K.x0<=x-P+.5&&ht.push(wn.nx),K.x1>=x+P-.5&&ht.push(wn.px),K.z0<=R-P+.5&&ht.push(wn.nz),K.z1>=R+P-.5&&ht.push(wn.pz),Re(.07)||!ht.length){r.push({x:(K.x0+K.x1)/2,z:(K.z0+K.z1)/2,w:ot,d:Tt});continue}let wt=Object.fromEntries(Object.entries(O).filter(([se])=>Math.min(ot,Tt)>=Uy[se])),Gt=Object.keys(wt).length?Ny(wt):"shops",V=Gt==="tower"?gt(2,6):Gt==="shops"||Gt==="brick"?gt(.2,1):gt(.5,3),bt=gt(1.5,4),At=ht.includes(wn.nx)?V:bt,vt=ht.includes(wn.px)?V:bt,dt=ht.includes(wn.nz)?V:bt,ut=ht.includes(wn.pz)?V:bt,Xt={x:(K.x0+At+K.x1-vt)/2,z:(K.z0+dt+K.z1-ut)/2,w:ot-At-vt,d:Tt-dt-ut};A[Gt](Xt,ht,$)}}for(let x=0;x<620;x++){let R=mt(),U=R<.6?gt(Ee+100,Ee+760):gt(-300,Ee+400),z=R<.6?gt(ge-500,Pe+500):Re(.5)?gt(Pe+140,Pe+620):gt(ge-620,ge-140);l.push([U,z])}let I=Oy(),E=By(t),w=ky(t),N=new Kt(1,1,1),X=Nd(),B=new Bt({map:E,emissive:16777215,emissiveMap:E,emissiveIntensity:.4,roughness:.5});B.onBeforeCompile=x=>{x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSign;`).replace("#include <uv_vertex>",`#include <uv_vertex>
        vec2 atlasUv = uv * vec2(0.5, 0.125) + aSign;
        #ifdef USE_MAP
          vMapUv = atlasUv;
        #endif
        #ifdef USE_EMISSIVEMAP
          vEmissiveMapUv = atlasUv;
        #endif`)},B.customProgramCacheKey=()=>"shop-sign-atlas";let k=new Map,W={facade:{geometry:N,material:X,shadow:!0,lod:0},tileRoof:{geometry:Fy(),material:Ly(),shadow:!0,lod:1100},ac:{geometry:I.acUnit,material:new Bt({color:16777215,roughness:.55,metalness:.5}),shadow:!0,lod:320},tank:{geometry:I.tank,material:new Bt({color:16777215,roughness:.9}),shadow:!0,lod:420},antenna:{geometry:I.antenna,material:new Bt({color:16777215,roughness:.4,metalness:.8}),shadow:!0,lod:1400},fireEscape:{geometry:null,material:new Bt({color:16777215,roughness:.6,metalness:.6}),shadow:!0,lod:260},balconySlab:{geometry:I.balconySlab,material:new Bt({color:16777215,roughness:.8}),shadow:!0,lod:340},balconyGlass:{geometry:I.balconyRail,material:new Bt({color:16777215,roughness:.08,metalness:.7,transparent:!0,opacity:.55,depthWrite:!1}),shadow:!1,lod:300},balconyRail:{geometry:I.balconyRail,material:new Bt({color:16777215,roughness:.5,metalness:.5}),shadow:!0,lod:300},awning:{geometry:I.awning,material:new Bt({map:w,side:sn,roughness:.9}),shadow:!0,lod:300},sign:{geometry:I.sign,material:B,shadow:!1,lod:520}},q=new Set(["tileRoof","ac","tank","antenna","fireEscape","balconyGlass","balconyRail","balconySlab"]),it=Qh(Nd(!0)),Z=new Ht,F=new ve,Mt=new D,St=new D,Nt=new Lt,Wt=new D(0,1,0);for(let[x,R]of e){let[U]=x.split("|"),z=W[U];if(U==="fireEscape"){let O=new Map;for(let $ of R){let et=$.floorH.toFixed(1);O.has(et)||O.set(et,[]),O.get(et).push($)}for(let[$,et]of O)k.has($)||k.set($,I.fireEscape(Number($))),Zt(U,et,k.get($),z);continue}Zt(U,R,z.geometry,z)}function Zt(x,R,U,z){let O=U;(x==="facade"||x==="sign")&&(O=U.clone());let $=new ye(O,z.material,R.length);if(x==="facade"){let et=new Float32Array(R.length*4),rt=new Float32Array(R.length*3),yt=new Float32Array(R.length*2);R.forEach((K,ot)=>{Z.compose(Mt.set(K.x,K.y0+K.h/2,K.z),F.identity(),St.set(K.w,K.h,K.d)),$.setMatrixAt(ot,Z),$.setColorAt(ot,Nt.set(K.wall)),et.set([K.style,K.floorH,K.cellW,K.seed],ot*4),rt.set(K.glass,ot*3),yt.set([K.shops?1:0,0],ot*2)}),O.setAttribute("aStyle",new Ye(et,4)),O.setAttribute("aGlass",new Ye(rt,3)),O.setAttribute("aExtra",new Ye(yt,2))}else{let et=x==="sign"?new Float32Array(R.length*2):null;R.forEach((rt,yt)=>{F.setFromAxisAngle(Wt,rt.rot||0),Z.compose(Mt.set(...rt.pos),F,St.set(...rt.scale)),$.setMatrixAt(yt,Z),rt.color&&$.setColorAt(yt,Nt.set(rt.color)),et&&et.set([rt.sign%2*.5,.875-Math.floor(rt.sign/2)*.125],yt*2)}),et&&O.setAttribute("aSign",new Ye(et,2))}$.name=x,$.castShadow=z.shadow,$.receiveShadow=!0,$.userData.lod=z.lod,x==="balconyGlass"&&($.userData.noAO=!0),q.has(x)&&$.layers.set(1),$.instanceMatrix.needsUpdate=!0,$.computeBoundingSphere(),$.computeBoundingBox(),s.add($),x==="facade"?Yr($,0,(et,rt)=>{rt.material=et>360?it:X}):Yr($,z.lod)}let Qt=[],at=new Map,pt=(x,R,U,z=null)=>{if(z&&at.has(z))return at.get(z);let O=Je(t,x,R,U);return z&&at.set(z,O),O},xt=new Map,$t=(x,R)=>(xt.has(x)||xt.set(x,R()),xt.get(x)),Ut=(x,R={})=>new Bt({color:1118481,map:x,emissive:16777215,emissiveMap:x,emissiveIntensity:.4,roughness:.5,...R}),st=new Bt({color:1843235,roughness:.45,metalness:.6}),zt=new Bt({color:3353120,emissive:16767392,emissiveIntensity:.3}),L=(x,R,U,z=!0)=>{x.traverse(O=>{O.isMesh&&(O.castShadow=!0,O.receiveShadow=!0)}),x.isGroup&&$i(x),x.userData.glow=z,s.add(x),Yr(x,700),Qt.push({mesh:x})};for(let x of o)if(x.kind==="hotel"){let{b:R,f:U,name:z}=x,O=_s(R,U),$=new Ve,et=ue(["#ffd27a","#ff7aa8","#7ad7ff"]),rt=new Ot(new Kt(7,.35,3.4),st);rt.position.set(0,4.25,1.7);let yt=new Ot(new Kt(6.6,.05,3),zt);yt.position.set(0,4.05,1.7),$.add(rt,yt);for(let vt of[-3.2,3.2]){let dt=new Ot(new ce(.07,.07,4.1,8),st);dt.position.set(vt,2.05,3.3),$.add(dt)}let K=z.replace("HOTEL ","").replace("THE ",""),ot=pt(128,1024,(vt,dt,ut)=>{vt.fillStyle="#121519",vt.fillRect(0,0,dt,ut),vt.strokeStyle=et,vt.lineWidth=6,vt.strokeRect(8,8,dt-16,ut-16),vt.fillStyle=et,vt.textAlign="center",vt.textBaseline="middle",vt.shadowColor=et,vt.shadowBlur=14;let Xt=K.split(""),se=(ut-80)/Xt.length;vt.font=`800 ${Math.min(100,se*.95)}px "Barlow Condensed", Impact, sans-serif`,Xt.forEach((Ie,be)=>vt.fillText(Ie,dt/2,50+se*(be+.5)))},"blade"+K+et),Tt=$t("blade"+K+et,()=>Ut(ot)),ht=Math.min(14,R.top-9);if(ht>5){let vt=new Ot(new Kt(.35,ht,2.2),[Tt,Tt,st,st,st,st]);vt.position.set(O/2-2.2,7+ht/2,1.2),$.add(vt)}let wt=pt(1024,128,(vt,dt,ut)=>{vt.clearRect(0,0,dt,ut),vt.font='800 104px "Barlow Condensed", Impact, sans-serif',vt.textAlign="center",vt.textBaseline="middle",vt.shadowColor=et,vt.shadowBlur=18,vt.fillStyle=et,vt.fillText(z,dt/2,ut/2+4),vt.shadowBlur=0,vt.fillStyle="#fff6e0",vt.fillText(z,dt/2,ut/2+4)},"roof"+z+et),Gt=$t("roof"+z+et,()=>{let vt=Ut(wt,{transparent:!0,alphaTest:.05,color:0});return vt.userData.boost=1.4,vt}),V=new Ot(new He(Math.min(O*.85,26),Math.min(O*.85,26)/8),Gt);V.position.set(0,R.top-R.y0+1.9,-.6),$.add(V);let[bt,At]=Ms(R,U,0,0);$.position.set(bt,ne,At),$.rotation.y=U.rot,L($,bt,At)}else if(x.kind==="garage"){let{b:R,f:U}=x,z=pt(128,128,(K,ot,Tt)=>{K.fillStyle="#1d5fbf",K.fillRect(0,0,ot,Tt),K.strokeStyle="#ffffff",K.lineWidth=8,K.strokeRect(8,8,ot-16,Tt-16),K.fillStyle="#ffffff",K.font="800 100px Arial, sans-serif",K.textAlign="center",K.textBaseline="middle",K.fillText("P",ot/2,Tt/2+6)},"garageP"),O=$t("garageP",()=>Ut(z,{color:16777215})),$=new Ot(new Kt(1.8,1.8,.3),[st,st,st,st,O,O]),et=_s(R,U),[rt,yt]=Ms(R,U,et/2-1.5,.3);$.position.set(rt,R.top-2,yt),$.rotation.y=U.rot,L($,rt,yt)}else if(x.kind==="motelSign"){let{x:R,z:U,f:z,name:O}=x,$=pt(512,256,(ot,Tt,ht)=>{ot.fillStyle="#16303a",ot.fillRect(0,0,Tt,ht),ot.strokeStyle="#ff5a6e",ot.lineWidth=10,ot.strokeRect(10,10,Tt-20,ht-20),ot.textAlign="center",ot.textBaseline="middle",ot.shadowColor="#ff5a6e",ot.shadowBlur=20,ot.fillStyle="#ff7a8a",ot.font='800 110px "Barlow Condensed", Impact, sans-serif',ot.fillText("MOTEL",Tt/2,92),ot.shadowColor="#5fe8ff",ot.fillStyle="#9ff3ff",ot.font='700 54px "Barlow Condensed", Impact, sans-serif',ot.fillText(O,Tt/2,186),ot.shadowBlur=0,ot.fillStyle="#ffd25a",ot.font="700 30px Arial",ot.fillText("VACANCY",Tt/2,232)},"motel"+O),et=$t("motel"+O,()=>Ut($)),rt=new Ve,yt=new Ot(new ce(.22,.28,7.5,10),st);yt.position.y=3.75;let K=new Ot(new Kt(5.4,2.7,.35),[st,st,st,st,et,et]);K.position.y=8.6,rt.add(yt,K),rt.position.set(R,ne,U),rt.rotation.y=z.rot+Math.PI/2,L(rt,R,U)}let kt=new Bt({color:2236962,emissive:16777215,emissiveIntensity:0,roughness:.4}),Ct=new ye(N,kt,a.length);a.forEach((x,R)=>{Z.compose(Mt.set(x.x,x.y,x.z),F.identity(),St.set(x.w+.5,.7,x.d+.5)),Ct.setMatrixAt(R,Z),Ct.setColorAt(R,Nt.set(x.color))}),s.add(Ct),kt.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},kt.customProgramCacheKey=()=>"crown";let Et=new nn({color:new Lt(6,.3,.2)}),ft=new ye(new mn(.45,8,6),Et,c.length);c.forEach(([x,R,U],z)=>{Z.makeTranslation(x,R,U),ft.setMatrixAt(z,Z)}),s.add(ft);let G=Hy(s,l),H=[];for(let x of h)H.push(Gy(s,t,x));let j=new Set(Qt.flatMap(({mesh:x})=>{let R=[];return x.traverse(U=>{if(U.isMesh)for(let z of[].concat(U.material))(z.emissiveMap||z===zt)&&R.push(z)}),R})),Y=new Set(H.map(x=>x.material)),J=new Qs(160,x=>[x.w/2,x.d/2]).addAll(i);return{colliders:n,buildingTops:i,emptyLots:r,topsGrid:J,stats:{buildings:n.length,facadeBoxes:[...e.keys()].filter(x=>x.startsWith("facade")).reduce((x,R)=>x+e.get(R).length,0)},update(x,R){kt.emissiveIntensity=x*1.6,Et.color.setRGB(8*(.15+.85*x)*(Math.sin(R*3.2)>.2?1:.04),.25,.15),B.emissiveIntensity=.3+x*2;for(let z of j)z.emissiveIntensity=(.3+x*2.2)*(z.userData.boost||1);let U=Math.sin(R*37)>.93?.3:1;for(let z of Y)z.emissiveIntensity=(.3+x*2.2)*(z.userData.flicker?U:1);G&&(G.material.userData.night.value=x)}}}function Hy(s,t){let e={value:0},n=Bn("hillhouse",{color:16777215,roughness:.85},{uniforms:{night:e},fragmentPars:"uniform float night; float paHouseGlow;",color:`
      {
        float h = pa_hash12(floor(vPaWorld.xz * 0.2));
        float win = step(0.5, fract(vPaWorld.y * 0.45)) * step(0.4, fract((vPaWorld.x + vPaWorld.z) * 0.35)) * step(0.3, abs(vPaNormalW.y - 1.0));
        paHouseGlow = win * step(h, 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05), win * 0.7);
      }`,emissive:"totalEmissiveRadiance += vec3(1.0, 0.7, 0.4) * paHouseGlow * night * 2.5;"}),i=t.filter(([h,l])=>yi(h,l)>4),r=new ye(new Kt(1,1,1),n,i.length),o=new Ht,a=new ve,c=new Lt;return i.forEach(([h,l],f)=>{let d=gt(8,16),u=gt(8,14),g=gt(4,8);a.setFromAxisAngle(new D(0,1,0),mt()*Math.PI),o.compose(new D(h,yi(h,l)+g/2-1,l),a,new D(d,g,u)),r.setMatrixAt(f,o),r.setColorAt(f,c.set(ue(Hn.stucco)))}),n.userData.night=e,r.castShadow=!1,r.receiveShadow=!0,s.add(r),r}var su=new Map;function Gy(s,t,{x:e,y:n,z:i,face:r,text:o,color:a}){let c=o+a;if(!su.has(c)){let f=Je(t,512,128,(u,g,v)=>{u.fillStyle="#0b0d10",u.fillRect(0,0,g,v),u.font='700 70px "Barlow Condensed", Impact, sans-serif',u.textAlign="center",u.textBaseline="middle",u.shadowColor=a,u.shadowBlur=18,u.fillStyle=a,u.fillText(o,g/2,v/2+3),u.shadowBlur=0,u.fillStyle="#ffffffcc",u.fillText(o,g/2,v/2+3),u.strokeStyle=a,u.lineWidth=5,u.strokeRect(8,8,g-16,v-16)}),d=new Bt({color:1118481,map:f,emissive:16777215,emissiveMap:f,emissiveIntensity:1,roughness:.5});d.userData.flicker=Re(.25),su.set(c,d)}let h=Math.min(12,3+o.length*.9),l=new Ot(new He(h,h/4),su.get(c));return l.position.set(e,n,i),l.rotation.y=r==="west"?-Math.PI/2:r==="east"?Math.PI/2:r==="north"?Math.PI:0,s.add(l),Yr(l,520),l}var Xo=class s extends Ot{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new pn;let n=this,i=e.color!==void 0?new Lt(e.color):new Lt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||s.ReflectorShader,h=e.multisample!==void 0?e.multisample:4,l=new jn,f=new D,d=new D,u=new D,g=new Ht,v=new D(0,0,-1),m=new Ce,p=new D,_=new D,M=new Ce,y=new Ht,b=this.camera,A=new Ke(r,o,{samples:h,type:gn}),P=new Oe({name:c.name!==void 0?c.name:"unspecified",uniforms:gi.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});P.uniforms.tDiffuse.value=A.texture,P.uniforms.color.value=i,P.uniforms.textureMatrix.value=y,this.material=P,this.onBeforeRender=function(I,E,w){if(d.setFromMatrixPosition(n.matrixWorld),u.setFromMatrixPosition(w.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(d,u),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(d),g.extractRotation(w.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(u),_.subVectors(d,v),_.reflect(f).negate(),_.add(d),b.position.copy(p),b.up.set(0,1,0),b.up.applyMatrix4(g),b.up.reflect(f),b.lookAt(_),b.far=w.far,b.updateMatrixWorld(),b.projectionMatrix.copy(w.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(b.projectionMatrix),y.multiply(b.matrixWorldInverse),y.multiply(n.matrixWorld),l.setFromNormalAndCoplanarPoint(f,d),l.applyMatrix4(b.matrixWorldInverse),m.set(l.normal.x,l.normal.y,l.normal.z,l.constant);let X=b.projectionMatrix;M.x=(Math.sign(m.x)+X.elements[8])/X.elements[0],M.y=(Math.sign(m.y)+X.elements[9])/X.elements[5],M.z=-1,M.w=(1+X.elements[10])/X.elements[14],m.multiplyScalar(2/m.dot(M)),X.elements[2]=m.x,X.elements[6]=m.y,X.elements[10]=m.z+1-a,X.elements[14]=m.w,n.visible=!1;let B=I.getRenderTarget(),k=I.xr.enabled,W=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(A),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(E,b),I.xr.enabled=k,I.shadowMap.autoUpdate=W,I.setRenderTarget(B);let q=w.viewport;q!==void 0&&I.state.viewport(q),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()}}};Xo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Vy=`
uniform mat4 textureMatrix;
uniform float time;
varying vec4 vMirror;
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  float offshore = smoothstep(${In.toFixed(1)}, ${(In-70).toFixed(1)}, wp.x);
  wp.y += (sin(wp.x * 0.045 + time * 0.9) * 0.22 + sin(wp.z * 0.031 - wp.x * 0.017 + time * 0.65) * 0.18) * offshore;
  vWorld = wp.xyz;
  vMirror = textureMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Wy=`
uniform sampler2D tDiffuse;
uniform float useMirror;
uniform float time;
uniform vec3 sunLight;
uniform vec3 ambient;
varying vec4 vMirror;
varying vec3 vWorld;
${gs}
${Kl}
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
  // A real sea is never a perfect mirror even at the horizon: its facets tilt toward the
  // eye, so some of the water's own colour always shows through.
  float fres = min(0.02 + 0.98 * pow(1.0 - cosV, 5.0), 0.64);
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

  float shoreDist = ${In.toFixed(1)} - vWorld.x; // meters offshore
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
}`;function Gd(s,t){let n=he.maxZ-he.minZ+3e3,i=new He(3200,n,128,256),r=new Xo(i,{textureWidth:512,textureHeight:512,clipBias:.003,multisample:0}),o=r.material.uniforms,a={...gi.clone(Vt.fog),...Ne,...rc,fogSunColor:Ne.fogSunColor,fogSunDir:Ne.fogSunDir,fogHeightFalloff:Ne.fogHeightFalloff,tDiffuse:o.tDiffuse,textureMatrix:o.textureMatrix,useMirror:{value:1},time:{value:0},sunLight:{value:new Lt},ambient:{value:new Lt}};r.material.dispose(),r.material=new Oe({uniforms:a,vertexShader:Vy,fragmentShader:Wy,fog:!0,transparent:!0}),r.rotation.x=-Math.PI/2,r.position.set(In+8-3200/2,qh,0),r.userData.noAO=!0,r.camera.layers.set(0),r.renderOrder=1,r.frustumCulled=!1,s.add(r);let c=new Ht,h=new Pr(new Uint8Array([0,0,0,255]),1,1);h.needsUpdate=!0;let l=r.onBeforeRender,f=[];r.updateMatrixWorld(),r.geometry.computeBoundingBox();let d=r.geometry.boundingBox.clone().applyMatrix4(r.matrixWorld);d.expandByVector(new D(0,2,0));let u=new hs,g=new Ht,v={paused:!1},m=function(...y){let b=y[2];if(!v.paused&&!(b&&kn.wetness.value<.02&&(g.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),u.setFromProjectionMatrix(g),!u.intersectsBox(d)))){kn.mirrorTex.value=h,kn.useMirror.value=0;for(let A of f)A.visible=!1;Ne.mirrorPass.value=1,l.apply(this,y),Ne.mirrorPass.value=0;for(let A of f)A.visible=!0;c.copy(r.matrixWorld).invert(),kn.mirrorMatrix.value.copy(o.textureMatrix.value).multiply(c),kn.mirrorTex.value=r.getRenderTarget().texture,kn.useMirror.value=1}};r.onBeforeRender=m;let p=!0,_=Xy(s,t);for(let y of Mn)y.plain&&_.lamps.push(...qy(s,t,y));let M=Yy(s);return{ocean:r,pier:_,mirror:v,mirrorHide:f,setReflections(y,b=.5){p=y,a.useMirror.value=y?1:0,r.onBeforeRender=y?m:()=>{},this.resize(b)},resize(y=.5){if(!p)return;let b=t.getDrawingBufferSize(new Yt);r.getRenderTarget().setSize(Math.max(256,Math.round(b.x*y)),Math.max(256,Math.round(b.y*y)))},update(y,b){a.time.value=y,p||(kn.mirrorTex.value=h,kn.useMirror.value=0),kn.worldTime.value=y,a.sunLight.value.copy(b.sun.color).multiplyScalar(b.elevation>-1?b.sun.intensity:0),a.ambient.value.copy(b.hemi.color).multiplyScalar(b.hemi.intensity*.6),_.update(y,b.lampFactor),M.update(b.lampFactor)}}}function Vd(){return Bn("wood",{color:16777215,roughness:.8},{color:`
      {
        vec2 p = vPaWorld.xz;
        float plank = (abs(vPaNormalW.y) > 0.5 ? p.y : p.x) / 0.3;
        float fw = max(fwidth(plank), 0.002);
        float gap = pa_band(fract(plank), 0.0, 0.07, fw);
        float id = pa_hash12(vec2(floor(plank), 3.0));
        vec3 col = mix(vec3(0.3, 0.22, 0.15), vec3(0.42, 0.33, 0.23), id) * (0.82 + pa_noise(vec2(p.x * 3.0, plank)) * 0.25);
        diffuseColor.rgb = col * (1.0 - gap * 0.55);
      }`})}function Xy(s,t){let e=new Ve,{x0:n,x1:i,z:r,halfWidth:o,deckY:a}=Ti,c=Vd(),h=n-i,l=new Ot(new Kt(h,.6,o*2),c);l.position.set((n+i)/2,a-.3,r),l.castShadow=l.receiveShadow=!0,e.add(l);let f=Ti.rampStart-n,d=Math.atan2(a-.16,f),u=new Kt(Math.hypot(f,a),.6,o*2),g=new Ot(u,c);g.position.set((Ti.rampStart+n)/2,(a+.16)/2-.3,r),g.rotation.z=-d,g.castShadow=g.receiveShadow=!0,e.add(g);let v=[];for(let G=Ti.rampStart-8;G>=i;G-=9)for(let H of[-o+1,0,o-1])v.push([G,r+H]);let m=new ce(.32,.38,1,8),p=new ye(m,new Bt({color:4930349,roughness:.9}),v.length),_=new Ht;v.forEach(([G,H],j)=>{let J=(vs(G,r)??a)-.5;_.compose(new D(G,(-6+J)/2,H),new ve,new D(1,J- -6,1)),p.setMatrixAt(j,_)}),p.castShadow=!0,e.add(p),Ti.piles=v.filter(([G])=>G>In-4).map(([G,H])=>({x:G,z:H,r:.45}));let M=new Bt({color:15262938,roughness:.5,metalness:.3});for(let G of[-1,1])for(let H of[.55,1.05]){let j=new Ot(new Kt(h,.08,.08),M);j.position.set((n+i)/2,a+H,r+G*(o-.1)),e.add(j)}let y=Math.floor(h/3),b=new ye(new Kt(.1,1.1,.1),M,y*2);for(let G=0;G<y;G++)for(let[H,j]of[-1,1].entries())_.makeTranslation(n-G*3,a+.55,r+j*(o-.1)),b.setMatrixAt(G*2+H,_);e.add(b);let A=new Bt({color:15327695,roughness:.75}),P=new Bt({color:3108730,roughness:.5,metalness:.2});for(let[G,H,j,Y,J]of[[i+14,r+4.5,18,7,6],[i+36,r-5,12,6,5]]){let S=new Ot(new Kt(j,J,Y),A);S.position.set(G,a+J/2,H),S.castShadow=S.receiveShadow=!0,e.add(S);let x=new Ot(new Kt(j+1,.4,Y+1),P);x.position.set(G,a+J+.2,H),e.add(x)}let I=new Bt({color:1780275,roughness:.4,metalness:.6});for(let G of[-1,1]){let H=new Ot(new Kt(.6,8,.6),I);H.position.set(Ti.rampStart-2,4.1,r+G*(o+.4)),H.castShadow=!0,e.add(H)}let E=Je(t,1024,160,(G,H,j)=>{G.fillStyle="#0d1418",G.fillRect(0,0,H,j),G.textAlign="center",G.textBaseline="middle",G.font='800 96px "Barlow Condensed", Impact, sans-serif',G.shadowColor="#ff8a3d",G.shadowBlur=24,G.fillStyle="#ffb36b",G.fillText("VISTA PAC\xCDFICA PIER",H/2,j/2+4),G.shadowBlur=0,G.fillStyle="#fff3e0",G.fillText("VISTA PAC\xCDFICA PIER",H/2,j/2+4)}),w=new Bt({color:1118481,map:E,emissive:16777215,emissiveMap:E,emissiveIntensity:1}),N=new Ot(new Kt(.4,2.6,o*2+1.4),I);N.position.set(Ti.rampStart-2,8.6,r),e.add(N);for(let G of[-1,1]){let H=new Ot(new He(o*2+1.2,2.4),w);H.position.set(Ti.rampStart-2+G*.21,8.6,r),H.rotation.y=G*Math.PI/2,e.add(H)}let X=new Ve,B=19,k=a+B+3.5,W=i+55,q=r+.5;X.position.set(W,k,q);let it=new Bt({color:14278112,roughness:.35,metalness:.8}),Z=new Hi(B,.22,8,96);for(let G of[-1.3,1.3]){let H=new Ot(Z,it);H.position.z=G,X.add(H);let j=new Ot(new Hi(B*.55,.14,6,64),it);j.position.z=G,X.add(j)}let F=24,Mt=new ce(.07,.07,B,4);Mt.translate(0,B/2,0);for(let G=0;G<F;G++)for(let H of[-1.3,1.3]){let j=new Ot(Mt,it);j.rotation.z=G/F*Math.PI*2,j.position.z=H,X.add(j)}let St=new Ot(new ce(1.1,1.1,3.6,16),it);St.rotation.x=Math.PI/2,X.add(St),e.add(X);for(let G of[-3.5,3.5])for(let H of[-1,1]){let j=Math.hypot(9,k-a),Y=new Ot(new ce(.28,.4,j,8),it);Y.position.set(W+H*4.5,(k+a)/2,q+G),Y.rotation.z=H*Math.atan2(9,k-a),Y.castShadow=!0,e.add(Y)}let Nt=16,Wt=new Bt({color:16777215,roughness:.4,metalness:.3}),Zt=new ye(new Kt(1.8,2,1.8),Wt,Nt),Qt=["#e2523a","#f2c14e","#3aa0c8","#f7f2e6"],at=new Lt;for(let G=0;G<Nt;G++)Zt.setColorAt(G,at.set(Qt[G%4]));Zt.castShadow=!0,e.add(Zt);let pt=9,xt=F*pt+96,$t=new nn({color:16777215}),Ut=new ye(new mn(.16,6,4),$t,xt),st=[];for(let G=0;G<F;G++){let H=G/F*Math.PI*2;for(let j=1;j<=pt;j++){let Y=j/pt*B;st.push([-Math.sin(H)*Y,Math.cos(H)*Y,1.45,j/pt,G])}}for(let G=0;G<96;G++){let H=G/96*Math.PI*2;st.push([Math.cos(H)*B,Math.sin(H)*B,1.5,1,G])}st.forEach(([G,H,j],Y)=>{_.makeTranslation(G,H,j),Ut.setMatrixAt(Y,_)}),X.add(Ut),Ut.layers.set(1);let zt=[];for(let G=n-6;G>i+4;G-=16)for(let H of[-1,1])zt.push([G,r+H*(o-.4)]);let L=new ye(new ce(.06,.09,4.5,6),I,zt.length),kt=new Bt({color:16773846,emissive:16765066,emissiveIntensity:0}),Ct=new ye(new mn(.28,10,8),kt,zt.length);zt.forEach(([G,H],j)=>{_.makeTranslation(G,a+2.25,H),L.setMatrixAt(j,_),_.makeTranslation(G,a+4.6,H),Ct.setMatrixAt(j,_)}),e.add(L,Ct),$i(X),$i(e,{exclude:[X]}),s.add(e);let Et=new Lt,ft=new hn;return{lamps:zt.map(([G,H])=>[G,a+4.6,H]),update(G,H){let j=G*.06;X.rotation.z=j;for(let J=0;J<Nt;J++){let S=j+J/Nt*Math.PI*2;ft.position.set(W+Math.cos(S)*B,k+Math.sin(S)*B-1.4,q),ft.updateMatrix(),Zt.setMatrixAt(J,ft.matrix)}Zt.instanceMatrix.needsUpdate=!0;let Y=.25+H*5.5;for(let J=0;J<st.length;J++){let[,,,S,x]=st[J],R=(G*.08+S*.35+x*.013)%1,U=.55+.45*Math.sin(G*4-S*8+x*.5);Et.setHSL(R,.85,.55),Et.multiplyScalar(Y*U),Ut.setColorAt(J,Et)}Ut.instanceColor.needsUpdate=!0,kt.emissiveIntensity=H*3,Wd.emissiveIntensity=H*3,w.emissiveIntensity=.3+H*1.8}}}var Wd=new Bt({color:16773846,emissive:16765066,emissiveIntensity:0});function qy(s,t,e){let n=new Ve,{x0:i,x1:r,z:o,halfWidth:a,deckY:c}=e,h=Vd(),l=i-r,f=new Ht,d=new Ot(new Kt(l,.6,a*2),h);d.position.set((i+r)/2,c-.3,o);let u=e.rampStart-i,g=new Ot(new Kt(Math.hypot(u,c),.6,a*2),h);g.position.set((e.rampStart+i)/2,(c+.16)/2-.3,o),g.rotation.z=-Math.atan2(c-.16,u);let v=new Ot(new Kt(13,.6,9),h);v.position.set(r+9,c-.31,o+a+4.5);for(let k of[d,g,v])k.castShadow=k.receiveShadow=!0,n.add(k);let m=[];for(let k=e.rampStart-8;k>=r;k-=9)for(let W of[-a+1,0,a-1])m.push([k,o+W]);let p=new ye(new ce(.32,.38,1,8),new Bt({color:4930349,roughness:.9}),m.length);m.forEach(([k,W],q)=>{let Z=(vs(k,o)??c)-.5;f.compose(new D(k,(-6+Z)/2,W),new ve,new D(1,Z- -6,1)),p.setMatrixAt(q,f)}),p.castShadow=!0,n.add(p),e.piles=m.filter(([k])=>k>In-4).map(([k,W])=>({x:k,z:W,r:.45}));let _=new Bt({color:7301728,roughness:.6,metalness:.3});for(let k of[-1,1])for(let W of[.55,1.05]){let q=new Ot(new Kt(l,.08,.08),_);q.position.set((i+r)/2,c+W,o+k*(a-.1)),n.add(q)}let M=Math.floor(l/3),y=new ye(new Kt(.1,1.1,.1),_,M*2);for(let k=0;k<M;k++)for(let[W,q]of[-1,1].entries())f.makeTranslation(i-k*3,c+.55,o+q*(a-.1)),y.setMatrixAt(k*2+W,f);n.add(y);let b=new Bt({color:8368296,roughness:.75}),A=new Bt({color:9059116,roughness:.6}),P=new Ot(new Kt(9,4.2,6),b);P.position.set(r+9,c+2.1,o+a+5),P.castShadow=P.receiveShadow=!0;let I=new Ot(new Kt(10.2,.35,7.2),A);I.position.set(r+9,c+4.35,o+a+5),n.add(P,I);let E=Je(t,512,128,(k,W,q)=>{k.fillStyle="#10222a",k.fillRect(0,0,W,q),k.textAlign="center",k.textBaseline="middle",k.font='800 76px "Barlow Condensed", Impact, sans-serif',k.fillStyle="#ffe9b8",k.fillText("BAIT & TACKLE",W/2,q/2+4)}),w=new Ot(new He(7,1.75),new Bt({map:E,emissive:16777215,emissiveMap:E,emissiveIntensity:.5,roughness:.6}));w.position.set(r+9,c+3.4,o+a+1.98),w.rotation.y=Math.PI,n.add(w);let N=[];for(let k=i-6;k>r+4;k-=18)for(let W of[-1,1])N.push([k,o+W*(a-.4)]);let X=new ye(new ce(.06,.09,4.5,6),_,N.length),B=new ye(new mn(.28,10,8),Wd,N.length);return N.forEach(([k,W],q)=>{f.makeTranslation(k,c+2.25,W),X.setMatrixAt(q,f),f.makeTranslation(k,c+4.6,W),B.setMatrixAt(q,f)}),n.add(X,B),$i(n),s.add(n),N.map(([k,W])=>[k,c+4.6,W])}function Yy(s){let t=new Ve,e=new Ht,n=new Bt({color:6269385,roughness:.6}),i=new Bt({color:15854296,roughness:.6}),r=new Bt({color:14175290,roughness:.6});for(let u=he.minZ+36;u<=he.maxZ-30;u+=130){if(Mn.some(b=>Math.abs(u-b.z)<40))continue;let g=new Ve,v=new Ot(new Kt(3.2,2.4,3.2),n);v.position.y=3.2;let m=new Ot(new wi(2.7,1.1,4),r);m.position.y=4.95,m.rotation.y=Math.PI/4;let p=new Ot(new Kt(4.4,.18,4.4),i);p.position.y=1.95;let _=new Ot(new Kt(.1,.9,2.4),new Bt({color:1911347,roughness:.1,metalness:.6}));_.position.set(-1.62,3.5,0),g.add(v,m,p,_);for(let b of[-1.8,1.8])for(let A of[-1.8,1.8]){let P=new Ot(new Kt(.18,2.4,.18),i);P.position.set(b,.8,A),g.add(P)}let M=new Ot(new Kt(4.5,.12,1.4),i);M.position.set(3.6,1,0),M.rotation.z=-.42,g.add(M);let y=-388;g.position.set(y,-.02-(fn-y)*.0105,u),g.traverse(b=>{b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0)}),t.add(g)}let o=["#e8553a","#f0c24b","#3b8fc2","#f3efe4","#45a37f"],a=130,c=new ye(new wi(1.4,.55,12,1,!0),new Bt({color:16777215,roughness:.8,side:sn}),a),h=new ye(new ce(.03,.03,2.3,4),i,a),l=new ye(new Kt(.9,.02,1.9),new Bt({color:16777215,roughness:.9}),a),f=new Lt,d=new ve;for(let u=0;u<a;u++){let g=gt(he.minZ+30,he.maxZ-30);Mn.some(p=>Math.abs(g-p.z)<14)&&(g+=30);let v=gt(-398,-366),m=-.02-(fn-v)*.0105;d.setFromEuler(new cn(gt(-.12,.12),0,gt(-.12,.12))),e.compose(new D(v,m+2.3,g),d,new D(1,1,1)),c.setMatrixAt(u,e),e.compose(new D(v,m+1.15,g),d,new D(1,1,1)),h.setMatrixAt(u,e),c.setColorAt(u,f.set(ue(o))),d.setFromAxisAngle(new D(0,1,0),gt(0,Math.PI)),e.compose(new D(v+gt(-1.5,1.5),m+.02,g+gt(-1.5,1.5)),d,new D(1,1,1)),l.setMatrixAt(u,e),l.setColorAt(u,f.set(ue(o)))}c.castShadow=h.castShadow=!0,l.receiveShadow=!0,t.add(c,h,l);for(let u of[c,h,l])u.layers.set(1);return $i(t),s.add(t),{update(){}}}var ou={value:new Lt};function Zy(s){return Je(s,256,1024,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<150;i++){let r=i/150,o=n*(.04+r*.94),a=e*.47*Math.sin(Math.PI*Math.pow(r,.75))*(.85+mt()*.3),c=70+mt()*50,h=40+mt()*30,l=25+mt()*20;t.strokeStyle=`rgb(${h},${c},${l})`,t.lineWidth=3.2+mt()*2.2;for(let f of[-1,1])t.beginPath(),t.moveTo(e/2,o),t.quadraticCurveTo(e/2+f*a*.5,o-a*.25,e/2+f*a,o-a*.55+mt()*8),t.stroke()}t.strokeStyle="#5b5a34",t.lineWidth=6,t.beginPath(),t.moveTo(e/2,n*.02),t.lineTo(e/2,n),t.stroke()})}function $y(s){return Je(s,512,512,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<46;i++){let r=mt()*Math.PI*2,o=Math.sqrt(mt())*e*.36,a=e/2+Math.cos(r)*o,c=n/2+Math.sin(r)*o,h=r+(mt()-.5)*1.2,l=40+mt()*50,f=.55+.45*(o/(e*.36));t.strokeStyle=`rgba(60,48,30,${.8})`,t.lineWidth=2,t.beginPath(),t.moveTo(a,c),t.lineTo(a+Math.cos(h)*l,c+Math.sin(h)*l),t.stroke();for(let d=0;d<16;d++){let u=mt(),g=a+Math.cos(h)*l*u+(mt()-.5)*18,v=c+Math.sin(h)*l*u+(mt()-.5)*18,m=(70+mt()*70)*f,p=(28+mt()*32)*f,_=(18+mt()*26)*f;t.fillStyle=`rgb(${p|0},${m|0},${_|0})`,t.save(),t.translate(g,v),t.rotate(h+(mt()-.5)*2.2),t.beginPath(),t.ellipse(0,0,9+mt()*7,3.5+mt()*2.5,0,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(190,210,140,${.25*f})`,t.lineWidth=1,t.beginPath(),t.moveTo(-8,0),t.lineTo(8,0),t.stroke(),t.restore()}}})}function Ky(s,t,e,n,i){let o=[],a=[],c=[],h=new D(Math.cos(s),0,Math.sin(s)),l=new D(-h.z,0,h.x),f=new D;for(let u=0;u<=7;u++){let g=u/7,v=t-i*g*g;u>0&&(f=f.clone().addScaledVector(h,Math.cos(v)*e/7).add(new D(0,Math.sin(v)*e/7,0)));let m=n*Math.sin(Math.PI*Math.min(1,.15+g*.95))*.5+.05,p=.18*m;for(let[_,M]of[[-1,0],[0,.5],[1,1]]){let y=f.clone().addScaledVector(l,_*m);y.y+=_===0?p:-p*.2,o.push(y.x,y.y,y.z),a.push(M,1-g)}if(u>0){let _=(u-1)*3,M=u*3;c.push(_,M,_+1,_+1,M,M+1,_+1,M+1,_+2,_+2,M+1,M+2)}}let d=new Fe;return d.setAttribute("position",new ie(o,3)),d.setAttribute("uv",new ie(a,2)),d.setIndex(c),d.computeVertexNormals(),d}function Jy(s,t,e){let n=[];for(let i=0;i<s;i++){let r=i%3,o=i/s*Math.PI*2+mt()*.3,a=[.95,.45,.05][r]+mt()*.2,c=[1.3,1.6,1.4][r];n.push(Ky(o,a,t*(r===0?.8:1)*gt(.88,1.1),e,c))}return Be(n)}function Qy(s){let t=new ce(.62,1,1,9,12,!0);t.translate(0,.5,0);let e=t.attributes.position;for(let n=0;n<e.count;n++){let i=e.getY(n);e.setX(n,e.getX(n)+s*i*i)}return t.computeVertexNormals(),t}function Xd(s,t,e={}){let n=Bn(t,{map:s,alphaTest:.42,side:sn,roughness:.72,metalness:0,...e},{uniforms:{worldTime:Ne.worldTime,leafSun:ou,skySunDir:Ne.skySunDir},vertexPars:"uniform float worldTime;",vertex:"",fragmentPars:"uniform vec3 leafSun; uniform vec3 skySunDir;",color:"diffuseColor.rgb *= 0.8 + 0.4 * pa_noise(vPaWorld.xz * 0.7 + vPaWorld.y);",emissive:`
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
      }`)},n}function jy(){return Bn("palmtrunk",{color:16777215,roughness:.9},{color:`
      {
        float rings = pa_band(fract(vPaWorld.y * 3.2 + pa_noise(vPaWorld.xz * 3.0) * 0.4), 0.0, 0.18, fwidth(vPaWorld.y * 3.2));
        vec3 bark = mix(vec3(0.33, 0.29, 0.24), vec3(0.45, 0.4, 0.33), pa_noise(vec2(atan(vPaNormalW.z, vPaNormalW.x) * 4.0, vPaWorld.y * 0.8)));
        diffuseColor.rgb = bark * (1.0 - rings * 0.3);
      }`})}function ru({lobes:s,cards:t,spread:e,crownY:n,lobeR:i,trunkH:r,columnar:o=!1}){let a=[],c=[],h=new ce(.2,.34,r+.4,7);h.translate(0,(r+.4)/2,0),c.push(h);let l=[];for(let g=0;g<s;g++){if(o){let p=g/Math.max(1,s-1);l.push([new D((mt()-.5)*.3,n+p*6.4,(mt()-.5)*.3),i*(1.05-p*.55)]);continue}if(g===s-1){l.push([new D(0,n+i*.75,0),i*1.05]);continue}let v=g/(s-1)*Math.PI*2+mt()*.6,m=e*gt(.75,1.1);l.push([new D(Math.cos(v)*m,n+gt(-.6,.5),Math.sin(v)*m),i*gt(.85,1.1)])}let f=new D(0,r*.92,0),d=new D,u=new D;for(let[g,v]of l){if(!o){let m=g.clone().sub(f),p=m.length()*.85,_=new ce(.07,.14,p,5);_.translate(0,p/2,0),_.applyQuaternion(new ve().setFromUnitVectors(new D(0,1,0),m.normalize())),_.translate(f.x,f.y,f.z),c.push(_)}for(let m=0;m<t;m++){let p=new He(2.1,2.1);d.set(mt()-.5,mt()-.35,mt()-.5).normalize();let _=Math.cbrt(mt()),M=g.clone().addScaledVector(d,_*v*.85),y=d.clone().add(new D(mt()-.5,mt()-.5,mt()-.5).multiplyScalar(.9)).normalize();p.lookAt(y),p.rotateZ(mt()*6.28),p.translate(M.x,M.y,M.z);let b=p.attributes.normal,A=p.attributes.position,P=new Float32Array(A.count*3);for(let I=0;I<A.count;I++){u.set(A.getX(I),A.getY(I),A.getZ(I));let E=u.clone().sub(g).normalize(),w=u.clone().sub(new D(0,n,0)).normalize();E.multiplyScalar(.7).addScaledVector(w,.3).normalize(),b.setXYZ(I,E.x,E.y,E.z);let N=_e.clamp(.5+_*.4+E.y*.15,.35,1);P[I*3]=P[I*3+1]=P[I*3+2]=N}p.setAttribute("color",new je(P,3)),a.push(p)}}return{canopy:Be(a),wood:Be(c.map(g=>g.index?g.toNonIndexed():g))}}function qd(s,t){let e=[],n=Zy(t),i=$y(t),r=Xd(n,"frond"),o=Xd(i,"canopy",{vertexColors:!0}),a=jy(),c=new Bt({color:6048309,roughness:1}),h=(B,k=6)=>pe.some(W=>Math.abs(B-W)<ee+k),l=(B,k=6)=>de.some(W=>Math.abs(B-W)<ee+k),f=new Yn(32);for(let B of qi){let[k,W]=Ys(B);f.add({x:k,z:W})}let d=(B,k)=>f.near(B,k,8,W=>Math.abs(W.x-B)<4&&Math.abs(W.z-k)<6),u=[],g=[],v=[];for(let B=he.minZ+11;B<=he.maxZ-11;B+=18)Mn.some(k=>Math.abs(B-k.z)<14)||(u.push([(We.to+fn)/2+gt(-1.5,1.5),B+gt(-2,2)]),Re(.3)&&g.push([fn-gt(6,14),B+gt(-4,4)]));for(let[B,k]of[[-320,Ee+10],[0,Ee+10],[-1280,640],[1280,640]])for(let W=Ue+20;W<k;W+=28)if(!l(W))for(let q of[-1,1])u.push([W+gt(-1,1),B+q*(ee+1.6)]);for(let B=ge+10;B<Pe;B+=32)h(B)||u.push([Ue+ee+1.6,B+gt(-1,1)]);let m=[-160,0,640];for(let B of m)for(let k=ge-26;k<Pe+40;k+=34)if(!h(k,7))for(let W of[-1,1]){let q=B+W*(ee+2.7),it=k+(W>0?17:0);d(q,it)||h(it,7)||u.push([q+gt(-.3,.3),it+gt(-1,1)])}for(let[B,k,W]of Pd()){let q=ii/2-10,it=W.district==="laurel"&&B>560&&B<1040&&k>160&&k<480,Z=it?44:26;for(let F=0;F<Z;F++){let Mt=B+gt(-q,q),St=k+gt(-q,q);Math.abs(Mt-B)<9&&Math.abs(St-k)<9||(Re(it?.15:.4)?g.push([Mt,St]):v.push([Mt,St,gt(.8,1.3),0]))}}for(let B of de)if(!(B===Ue||m.includes(B)&&B!==0)){for(let k of xs)for(let W of[-1,1])if(!(B===Ee&&W>0)&&!(Xi[vi(Zs(B+W*40),k)][3]<.5))for(let q=k-50;q<=k+50;q+=25){let it=B+W*(ee+1.8);d(it,q)||v.push([it,q,gt(.6,.85),0])}}for(let B=0;B<2600;B++){let k=mt(),W=k<.5?gt(Ee+60,Ee+900):gt(-300,Ee+500),q=k<.5?gt(ge-700,Pe+700):k<.75?gt(ge-640,ge-95):gt(Pe+95,Pe+640),it=yi(W,q);it<2||v.push([W,q,gt(.7,1.6),it])}let p=new Ht,_=new ve,M=new D,y=new D,b=new D(0,1,0),A=B=>[B[0],B[1]],P=B=>{B.castShadow=!0,B.receiveShadow=!0};function I(B,{heightRange:k,thickness:W,bend:q,crown:it,skirt:Z}){let F=Qy(q),Mt=Jy(it.count,it.length,it.width),St=B.map(([Wt,Zt])=>{let Qt=gt(...k),at=new Ht().compose(M.set(Wt,-.1,Zt),_.setFromAxisAngle(b,mt()*Math.PI*2),y.set(W,Qt,W)),pt=new D(q,1,0).applyMatrix4(at),xt=gt(.85,1.15),$t=new ve().setFromAxisAngle(b,mt()*Math.PI*2);return e.push({x:Wt,z:Zt,r:.45}),{x:Wt,z:Zt,base:at,top:pt,cs:xt,crownQ:$t}}),Nt=Wt=>[Wt.x,Wt.z];an(s,St,F,a,{at:Nt,far:800,setup:P,set:(Wt,Zt,Qt)=>Wt.setMatrixAt(Zt,Qt.base)}),an(s,St,Mt,r,{at:Nt,far:1100,setup:P,set:(Wt,Zt,Qt)=>Wt.setMatrixAt(Zt,p.compose(Qt.top,Qt.crownQ,y.set(Qt.cs,Qt.cs,Qt.cs)))}),Z&&an(s,St,new ce(.9,.55,1,8),c,{at:Nt,far:600,setup:Wt=>{Wt.castShadow=!0},set:(Wt,Zt,Qt)=>Wt.setMatrixAt(Zt,p.compose(M.copy(Qt.top).add(y.set(0,-1.6,0)),Qt.crownQ,y.set(1,2.6,1)))})}I(u,{heightRange:[17,26],thickness:.36,bend:4,crown:{count:15,length:4.2,width:1.5},skirt:!0}),I(g,{heightRange:[6,10],thickness:.75,bend:.8,crown:{count:24,length:6.2,width:2.2},skirt:!1});let E={broad:ru({lobes:6,cards:22,spread:2.1,crownY:5.6,lobeR:1.85,trunkH:4.2}),cypress:ru({lobes:5,cards:14,spread:.25,crownY:2.4,lobeR:1.05,trunkH:1.6,columnar:!0}),far:ru({lobes:3,cards:14,spread:1.7,crownY:5.4,lobeR:2.1,trunkH:4.2})},w={broad:[],cypress:[],far:[]};for(let B of v)B[3]>0?w[Re(.35)?"cypress":"far"].push(B):w.broad.push(B);let N=new Bt({color:4865328,roughness:.95}),X=new Lt;for(let[B,k]of Object.entries(w)){let{canopy:W,wood:q}=E[B],it=B!=="broad",Z=k.map(([Nt,Wt,Zt,Qt])=>{let at=B==="cypress"?gt(1.1,1.6):gt(.85,1.2),pt=new Ht().compose(M.set(Nt,Qt-.1,Wt),_.setFromAxisAngle(b,mt()*Math.PI*2),y.set(Zt,Zt*at,Zt));return B==="broad"&&Re(.22)?X.setHSL(gt(.72,.78),gt(.35,.5),gt(.62,.72)):B==="cypress"?X.setHSL(gt(.26,.32),gt(.3,.45),gt(.32,.42)):X.setHSL(gt(.2,.3),gt(.35,.6),gt(.45,.62)),Qt===0&&e.push({x:Nt,z:Wt,r:.5}),{x:Nt,z:Wt,matrix:pt,tint:X.clone()}}),St={at:Nt=>[Nt.x,Nt.z],far:it?2400:750,chunk:it?640:320,setup:Nt=>{Nt.castShadow=B!=="far",Nt.receiveShadow=!0,it&&Nt.layers.set(1)}};an(s,Z,W,o,{...St,set:(Nt,Wt,Zt)=>{Nt.setMatrixAt(Wt,Zt.matrix),Nt.setColorAt(Wt,Zt.tint)}}),an(s,Z,q,N,{...St,far:it?900:600,set:(Nt,Wt,Zt)=>Nt.setMatrixAt(Wt,Zt.matrix)})}return{trunkColliders:e,counts:{tall:u.length,stout:g.length,trees:v.length}}}var oc=28;function bs(s,t){let e=(t%oc+oc)%oc,n=s===0?e:(e+14)%oc;return n<10?2:n<13?1:0}function t1(s){return Je(s,128,128,(t,e,n)=>{let i=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(.7,"rgba(255,255,255,0.15)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,e,n)})}var e1=`
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
}`,n1=`
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
}`;function qo(s,t=0){return new Oe({uniforms:{color:{value:new Lt(s)},intensity:{value:t}},vertexShader:e1,fragmentShader:n1,transparent:!0,depthWrite:!1,blending:On,side:sn})}function Yd(s,t,e=[],n=null){let i=new Ht,r=new ve,o=new D,a=new D(1,1,1),c=new D(1,1,1),h=new D(0,1,0),l=new Bt({color:4146760,roughness:.45,metalness:.7}),f=[],d=ee+7;for(let G of de)for(let H=ge-40;H<=Pe+40;H+=38)if(!pe.some(j=>Math.abs(H-j)<d))for(let j of[-1,1])G===Ue&&j<0||f.push([G+j*(ee+.9),H+(j>0?19:0),-j,0]);for(let G of pe)for(let H=Ue+20;H<=Ee;H+=38)if(!de.some(j=>Math.abs(H-j)<d))for(let j of[-1,1])f.push([H+(j>0?19:0),G+j*(ee+.9),0,-j]);let u=[];for(let G=he.minZ+16;G<=he.maxZ-16;G+=24)Mn.every(H=>Math.abs(G-H.z)>12)&&u.push([(We.from+We.to)/2,G]);let g=new ce(.09,.14,9,8);g.translate(0,4.5,0);let v=new Kt(.1,.1,2.6);v.translate(0,8.85,1.3);let m=Be([g,v]),p=new Kt(.42,.16,.9),_=new Bt({color:7829367,emissive:16766624,emissiveIntensity:0,roughness:.3}),M=G=>[G[0],G[1]],y=([,,G,H])=>r.setFromAxisAngle(h,Math.atan2(G,H)),b=G=>{G.castShadow=!0},A=an(s,f,m,l,{at:M,far:650,setup:b,set:(G,H,j)=>G.setMatrixAt(H,i.compose(o.set(j[0],ne,j[1]),y(j),c))}),P=an(s,f,p,_,{at:M,far:1700,set:(G,H,j)=>G.setMatrixAt(H,i.compose(o.set(j[0]+j[2]*2.5,ne+8.78,j[1]+j[3]*2.5),y(j),c))}),I=new Bt({color:16774888,emissive:16764810,emissiveIntensity:0,roughness:.2}),E=an(s,u,new ce(.07,.1,4.2,8),l,{at:M,far:500,set:(G,H,[j,Y])=>G.setMatrixAt(H,i.makeTranslation(j,ne+2.1,Y))}),w=an(s,u,new mn(.3,12,8),I,{at:M,far:1400,set:(G,H,[j,Y])=>G.setMatrixAt(H,i.makeTranslation(j,ne+4.4,Y))}),N=[...f.map(([G,H,j,Y])=>[G+j*2.6,H+Y*2.6,13,1,0]),...u.map(([G,H])=>[G,H,8,.8,0]),...e.map(([G,H,j])=>[G,j,7,.7,H-4.6])],X=new nn({map:t1(t),color:16757866,transparent:!0,depthWrite:!1,blending:On,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2,fog:!0}),B=new He(1,1);B.rotateX(-Math.PI/2);let k=G=>H=>{H.renderOrder=G,H.userData.noAO=!0,H.layers.set(1)},W=an(s,N,B,X,{at:M,far:800,setup:k(2),set:(G,H,[j,Y,J,S,x])=>G.setMatrixAt(H,i.compose(o.set(j,x+.04+(S<1?ne:0),Y),r.identity(),a.set(J,1,J)))}),q=new ce(.25,3.6,8.6,18,1,!0);q.translate(0,-4.3,0);let it=qo(16757866),Z=an(s,f,q,it,{at:M,far:380,setup:k(3),set:(G,H,[j,Y,J,S])=>G.setMatrixAt(H,i.makeTranslation(j+J*2.5,ne+8.7,Y+S*2.5))}),F=[],Mt=[];for(let G of de)for(let H of pe){let j=[[G+6,H-16,0,1,0],[G-6,H+16,0,-1,0],[G+16,H+6,-1,0,1],[G-16,H-6,1,0,1]];for(let[Y,J,S,x,R]of j){if(R===0&&(x>0&&H===Pe||x<0&&H===ge)||R===1&&(S<0&&G===Ue||S>0&&G===Ee))continue;F.push([Y,J,S,x,R]);let U=R===0?G+14.2*Math.sign(Y-G):Y,z=R===0?J:H+14.2*Math.sign(J-H);Mt.push([U,z,Y,J])}}let St=new ce(.16,.2,7,8);St.translate(0,3.5,0),an(s,Mt,St,l,{at:M,far:650,setup:b,set:(G,H,[j,Y])=>G.setMatrixAt(H,i.makeTranslation(j,ne,Y))}),an(s,Mt,new Kt(1,.16,.16),l,{at:M,far:650,setup:b,set:(G,H,[j,Y,J,S])=>{r.setFromAxisAngle(h,Math.atan2(-(S-Y),J-j)),G.setMatrixAt(H,i.compose(o.set((j+J)/2,6.8,(Y+S)/2),r,a.set(Math.hypot(J-j,S-Y)+1,1,1)))}});let Nt=new Bt({color:1909284,roughness:.5,metalness:.4});an(s,F,new Kt(.5,1.4,.36),Nt,{at:M,far:650,set:(G,H,[j,Y,J,S])=>G.setMatrixAt(H,i.compose(o.set(j,6.1,Y),r.setFromAxisAngle(h,Math.atan2(J,S)),c))});let Wt=new ce(.14,.14,.06,12);Wt.rotateX(Math.PI/2);let Zt=new Oe({uniforms:{uState:{value:new Yt}},vertexShader:`
      attribute vec2 aSig;
      uniform vec2 uState;
      varying vec3 vCol;
      void main() {
        float st = aSig.x < 0.5 ? uState.x : uState.y;
        vec3 c = aSig.y < 0.5 ? vec3(7.0, 0.35, 0.2) : aSig.y < 1.5 ? vec3(7.0, 3.6, 0.3) : vec3(0.3, 6.0, 2.2);
        vCol = abs(st - aSig.y) < 0.5 ? c : vec3(0.05);
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:`varying vec3 vCol;
void main() { gl_FragColor = vec4(vCol, 1.0); }`}),Qt=F.flatMap(([G,H,j,Y,J])=>[0,1,2].map(S=>[G,H,j,Y,J,S]));an(s,Qt,Wt,Zt,{at:M,far:900,cloneGeometry:!0,set:(G,H,[j,Y,J,S,,x])=>G.setMatrixAt(H,i.compose(o.set(j+J*.2,6.55-x*.43,Y+S*.2),r.setFromAxisAngle(h,Math.atan2(J,S)),c)),setup:(G,H)=>G.geometry.setAttribute("aSig",new Ye(new Float32Array(H.flatMap(j=>[j[4],j[5]])),2))}),n&&(f.forEach(([G,H],j)=>n.add([A.refs[j],P.refs[j]],[W.refs[j],Z.refs[j]],{type:"lamp",x:G,z:H,y:ne,r:.18,mass:.22,solid:6,kind:"topple",sparks:!0})),u.forEach(([G,H],j)=>n.add([E.refs[j],w.refs[j]],[W.refs[f.length+j]],{type:"lamp",x:G,z:H,y:ne,r:.14,mass:.12,solid:4,kind:"topple",sparks:!0})));let at=Mt.map(([G,H])=>({x:G,z:H,r:.3})),pt=[["SURF FIZZ","TASTE THE SWELL","#ff6b4a","#14303d"],["HORIZON AIR","FLY THE COAST","#ffd36b","#1a2a52"],["VISTA BANK","YOUR MONEY. YOUR VIEW.","#9fe3d3","#10302c"],["NEON NIGHTS","THE PIER \xB7 FRIDAYS","#ff63c3","#1d0f2e"],["CALDERA GT","BUILT FOR THE COAST ROAD","#ff7a3d","#141a20"],["SOLSTICE","SUNSCREEN \xB7 SPF 50","#ffe2a8","#c2542e"],["RADIO KZRO","88.1 \xB7 COAST FUNK ALL NIGHT","#8cf5c0","#12202b"],["LAUREL PARK","JAZZ UNDER THE JACARANDAS","#d6b8ff","#22183a"]],xt=[[-215,-432,-Math.PI/2],[100,212,Math.PI],[-136,30,-Math.PI/2],[270,362,Math.PI]];for(let[G,H,j]of Ai())j.kind!=="parking"||G<=320&&Math.abs(H)<=480||xt.push([G+46,H+52,Ks(G,H)<.5?0:Math.PI/2]);for(let G=ge+200,H=0;G<Pe;G+=450,H++)xt.push([Ee+25,G+H%2*50,-Math.PI/2]);for(let G=Ue+380;G<Ee;G+=520)xt.push([G,ge-30,0],[G+130,Pe+30,Math.PI]);let $t=[],Ut=new Ve,st=pt.map(([G,H,j,Y])=>{let J=Je(t,1024,384,(x,R,U)=>{let z=x.createLinearGradient(0,0,R,U);z.addColorStop(0,Y),z.addColorStop(1,"#000000"),x.fillStyle=z,x.fillRect(0,0,R,U),x.fillStyle=j,x.beginPath(),x.arc(R*.82,U*.5,U*.36,0,Math.PI*2),x.fill(),x.fillStyle="#fff6e6",x.font='800 120px "Barlow Condensed", Impact, sans-serif',x.fillText(G,48,170),x.fillStyle=j,x.font='600 46px "Barlow", Arial, sans-serif',x.fillText(H,52,250),x.fillStyle="#ffffff40",x.fillRect(52,290,300,6)}),S=new Bt({map:J,emissive:16777215,emissiveMap:J,emissiveIntensity:0,roughness:.55});return $t.push(S),S});xt.forEach(([G,H,j],Y)=>{let J=new Ve,S=new Ot(new He(14,5.25),st[Y%st.length]);S.position.y=14;let x=new Ot(new Kt(14.4,5.6,.3),l);x.position.set(0,14,-.2);let R=new Ot(new ce(.35,.45,11.5,10),l);R.position.y=5.75,J.add(S,x,R),J.position.set(G,ne,H),J.rotation.y=j,at.push({x:G,z:H,r:.5}),J.traverse(U=>{U.isMesh&&(U.castShadow=!0)}),Ut.add(J)}),$i(Ut),s.add(Ut);let zt="VISTA PAC\xCDFICA",L=new Bt({color:16052714,roughness:.7,side:sn,alphaTest:.5}),kt=new Map,Ct=new Ve,Et=-520;for(let G of zt){if(G===" "){Et+=38;continue}kt.has(G)||kt.set(G,Je(t,128,160,(J,S,x)=>{J.clearRect(0,0,S,x),J.fillStyle="#fff",J.font='800 168px "Barlow Condensed", Impact, sans-serif',J.textAlign="center",J.textBaseline="alphabetic",J.fillText(G,S/2,x-8)}));let H=L.clone();H.map=kt.get(G);let j=new Ot(new He(26,33),H),Y=Ee+330;j.position.set(Y,Math.min(yi(Y,Et-10),yi(Y,Et+10))+15,Et),j.rotation.y=-Math.PI/2,j.castShadow=!0,Ct.add(j),Et+=30}s.add(Ct);let ft=.7;return{lamps:f,circles:at,setRealLamps(G){ft=G?.3:.7},update(G,H){_.emissiveIntensity=H*4,I.emissiveIntensity=H*2.6,X.opacity=H*ft,it.uniforms.intensity.value=H*.09;for(let j of $t)j.emissiveIntensity=.05+H*1.1;Zt.uniforms.uState.value.set(bs(0,G),bs(1,G))}}}var ac=class{constructor(t,e){this.renderer=t,this.scene=e,this.size=0,this.target=null,this.camera=null,this.face=0,this.ready=!1,this.materials=[]}attach(t){this.materials=t,this.apply()}setSize(t){if(t!==this.size){if(this.size=t,this.target?.dispose(),this.target=null,this.camera=null,this.ready=!1,this.face=0,t>0){this.target=new Rr(t,{type:gn,generateMipmaps:!1}),this.camera=new Ar(.6,1400,this.target),this.camera.coordinateSystem=this.renderer.coordinateSystem,this.camera.updateCoordinateSystem();for(let e of this.camera.children)e.layers.set(0)}this.apply()}}apply(){let t=this.ready&&this.target?this.target.texture:null;for(let e of this.materials)e.envMap!==t&&(e.envMap=t,e.needsUpdate=!0)}update(t,e,n,i){if(!this.target)return;let r=this.renderer;this.face===0&&this.camera.position.copy(t),this.camera.updateMatrixWorld();let o=this.camera.children[this.face],a=r.getRenderTarget(),c=r.getActiveCubeFace(),h=r.getActiveMipmapLevel(),l=r.xr.enabled;r.xr.enabled=!1;for(let f of e)f.visible=!1;i(()=>{r.setRenderTarget(this.target,this.face),r.render(this.scene,o)});for(let f of e)f.visible=!0;r.setRenderTarget(a,c,h),r.xr.enabled=l,this.face=(this.face+1)%6,this.face===0&&(this.target.texture.needsPMREMUpdate=!0,this.ready||(this.ready=!0,this.apply()));for(let f of this.materials)f.envMapIntensity=n*(f.userData.envBoost||1)}};var we=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e],a=(t-n)/(r-n);return a=a*a*(3-2*a),i+(o-i)*a}return s[s.length-1][1]},i1={coupe:{length:4.62,wheelR:.355,wheelW:.27,track:.83,wheels:[.185,.79],body:{top:[[0,.6],[.05,.7],[.18,.8],[.33,.9],[.78,.96],[.92,.95],[1,.82]],bottom:[[0,.33],[.06,.25],[.94,.26],[1,.38]],width:[[0,.76],[.07,.93],[.3,.97],[.74,1],[.93,.96],[1,.84]],exp:3.4,taper:.1},cabin:{from:.31,to:.9,top:[[0,.88],[.3,1.27],[.52,1.29],[.72,1.14],[1,.93]],width:[[0,.8],[.35,.79],[.75,.76],[1,.66]],taper:.3,exp:2.6,roof:[.33,.64]},spoiler:!0,exhaust:[-.42,.42],leather:"#5a3a26",shirt:"#2b3038"},muscle:{length:4.92,wheelR:.37,wheelW:.3,track:.86,wheels:[.17,.8],body:{top:[[0,.72],[.04,.84],[.12,.89],[.4,.93],[.86,.96],[.96,.95],[1,.84]],bottom:[[0,.32],[.05,.26],[.95,.27],[1,.36]],width:[[0,.88],[.05,.96],[.5,.98],[.95,.97],[1,.9]],exp:5.2,taper:.05},cabin:{from:.43,to:.87,top:[[0,.91],[.3,1.31],[.55,1.32],[.86,1.08],[1,.96]],width:[[0,.8],[.5,.8],[1,.73]],taper:.22,exp:3.2,roof:[.3,.6]},scoop:!0,roundLamps:!0,grille:3,plainTail:!0,leather:"#17181b",shirt:"#5b2a22",ducktail:!0,exhaust:[-.56,-.44,.44,.56]},super:{length:4.56,wheelR:.36,wheelW:.32,track:.88,wheels:[.2,.8],body:{top:[[0,.42],[.06,.55],[.2,.66],[.35,.73],[.7,.86],[.9,.88],[1,.8]],bottom:[[0,.16],[.05,.13],[.95,.15],[1,.26]],width:[[0,.8],[.08,.95],[.3,.97],[.7,1.03],[.9,1],[1,.9]],exp:3.6,taper:.14},cabin:{from:.27,to:.72,top:[[0,.62],[.35,1.13],[.55,1.14],[.8,1],[1,.86]],width:[[0,.78],[.4,.74],[1,.62]],taper:.32,exp:2.4,roof:[.38,.62]},wing:!0,leather:"#7a1c16",shirt:"#1d1f24",intakes:!0,exhaust:[-.13,.13]},sedan:{length:4.85,wheelR:.34,wheelW:.24,track:.81,wheels:[.2,.77],body:{top:[[0,.66],[.06,.76],[.25,.86],[.32,.92],[.8,.98],[.94,.96],[1,.86]],bottom:[[0,.36],[.07,.3],[.93,.3],[1,.4]],width:[[0,.78],[.07,.92],[.5,.95],[.93,.93],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.82,top:[[0,.92],[.27,1.43],[.68,1.43],[.88,1.2],[1,.97]],width:[[0,.8],[.4,.82],[1,.76]],taper:.24,exp:2.8,roof:[.28,.72]},grille:3,plainTail:!0},suv:{length:4.75,wheelR:.39,wheelW:.27,track:.85,wheels:[.18,.79],body:{top:[[0,.82],[.06,.97],[.26,1.06],[.33,1.08],[.95,1.1],[1,1.02]],bottom:[[0,.44],[.07,.36],[.93,.37],[1,.46]],width:[[0,.82],[.07,.95],[.5,.98],[.95,.96],[1,.9]],exp:4.5,taper:.06},cabin:{from:.28,to:.98,top:[[0,1.05],[.2,1.72],[.85,1.74],[.97,1.62],[1,1.1]],width:[[0,.86],[.5,.88],[1,.84]],taper:.15,exp:4,roof:[.2,.96]},rails:!0,grille:4,plainTail:!0,cPillar:.8},hatch:{length:4.05,wheelR:.32,wheelW:.22,track:.78,wheels:[.19,.8],body:{top:[[0,.66],[.07,.78],[.28,.88],[.34,.92],[.95,.98],[1,.9]],bottom:[[0,.36],[.08,.3],[.94,.31],[1,.42]],width:[[0,.76],[.08,.89],[.5,.92],[.94,.9],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.97,top:[[0,.92],[.3,1.46],[.82,1.45],[.96,1.32],[1,.98]],width:[[0,.79],[.5,.8],[1,.76]],taper:.2,exp:3.2,roof:[.3,.92]},plainTail:!0,cPillar:.82},pickup:{length:5.4,wheelR:.41,wheelW:.28,track:.88,wheels:[.17,.75],body:{top:[[0,.92],[.05,1.06],[.24,1.14],[.3,1.16],[1,1.16]],bottom:[[0,.5],[.06,.42],[.95,.44],[1,.52]],width:[[0,.86],[.06,.98],[.95,1],[1,.98]],exp:5,taper:.04},cabin:{from:.29,to:.58,top:[[0,1.12],[.3,1.86],[.92,1.88],[1,1.16]],width:[[0,.9],[1,.9]],taper:.12,exp:4.5,roof:[.28,.94]},bed:!0,grille:4,plainTail:!0}};function lc(s,t,e,n,i,r,o,a,c=null){let h=(t+e)/2,l=(e-t)/2,f=2/n;for(let d=0;d<r;d++){let u=c?c[0]+(c[1]-c[0])*(d/(r-1)):d/r*Math.PI*2,g=Math.cos(u),v=Math.sin(u),m=s*Math.sign(g)*Math.pow(Math.abs(g),f),p=h+l*Math.sign(v)*Math.pow(Math.abs(v),f);m*=1-i*Math.max(0,v),o.push(m,p,a)}}function au(s,t,{closed:e=!0,caps:n=!0}={}){let i=[],r=[];for(let l of s)i.push(...l);let o=s.length,a=t,c=e?a:a-1;for(let l=0;l<o-1;l++)for(let f=0;f<c;f++){let d=(f+1)%a,u=l*a+f,g=l*a+d,v=(l+1)*a+f,m=(l+1)*a+d;r.push(u,g,v,g,m,v)}if(n&&e)for(let[l,f]of[[0,!0],[o-1,!1]]){let d=i.length/3,u=0,g=0,v=0;for(let p=0;p<a;p++){let _=(l*a+p)*3;u+=i[_],g+=i[_+1],v+=i[_+2]}for(let p=0;p<a;p++){let _=(l*a+p)*3;i.push(i[_],i[_+1],i[_+2])}i.push(u/a,g/a,v/a);let m=d+a;for(let p=0;p<a;p++){let _=(p+1)%a;f?r.push(m,d+_,d+p):r.push(m,d+p,d+_)}}let h=new Fe;return h.setAttribute("position",new ie(i,3)),h.setIndex(r),h.computeVertexNormals(),h.setAttribute("uv",new ie(new Float32Array(i.length/3*2),2)),h}function s1(s,t,e){let n=[];for(let c of s)n.push(...c);let i=[],r=[];for(let c=0;c<s.length-1;c++)for(let h=0;h<t;h++){let l=(h+1)%t,f=c*t+h,d=c*t+l,u=(c+1)*t+h,g=(c+1)*t+l,v=[f,d,u,d,g,u];i.push(...v);let m=e(c,(h<t/2,h));(r[m]||(r[m]=[])).push(...v)}let o=new Fe;o.setAttribute("position",new ie(n,3)),o.setIndex(i),o.computeVertexNormals();let a=[];for(let c=0;c<3;c++){let h=new Fe;h.setAttribute("position",o.attributes.position),h.setAttribute("normal",o.attributes.normal),h.setIndex(r[c]||[]);let l=h.toNonIndexed();l.setAttribute("uv",new ie(new Float32Array(l.attributes.position.count*2),2)),a.push(l)}return a}function Me(s,t,e,n,i,r,o=0,a=0,c=0){let h=new Kt(s,t,e);return(o||a||c)&&h.applyMatrix4(new Ht().makeRotationFromEuler(new cn(o,a,c))),h.translate(n,i,r),h}function lu(s,t,e,n,i,r,o,a="y"){let c=new ce(s,t,e,n);return a==="x"&&c.rotateZ(Math.PI/2),a==="z"&&c.rotateX(Math.PI/2),c.translate(i,r,o),c}function r1(s,t,e){let n=new D().subVectors(t,s),i=n.length(),r=new ce(e,e,i,6);return r.translate(0,i/2,0),r.applyQuaternion(new ve().setFromUnitVectors(new D(0,1,0),n.normalize())),r.translate(s.x,s.y,s.z),r}var cu=new Map,o1=["coupe","muscle","super"];function hc(s){if(cu.has(s))return cu.get(s);let t=i1[s],e=t.length,n=-e/2,i=Y=>n+Y*e,r=t.wheels.map(i),o=t.wheelR+.07,a=o1.includes(s),c=a?40:26,h=a?64:40,l=Y=>{let J=we(t.body.width,Y);for(let S of r)J*=1+.03*Math.exp(-(((i(Y)-S)/.5)**2));return J},f=(Y,J)=>{let S=we(t.body.bottom,Y),x=we(t.body.top,Y),R=(S+x)/2,U=(x-S)/2,z=2/t.body.exp,O=Math.sign(J-R)*Math.min(1,Math.abs(J-R)/U)**(1/z);return l(Y)*Math.sqrt(Math.max(0,1-O*O))**z*(1-t.body.taper*Math.max(0,O))},d=Y=>(Y-n)/e,u=[];for(let Y=0;Y<=h;Y++){let J=Y/h,S=i(J),x=we(t.body.bottom,J);for(let z of r){let O=S-z;Math.abs(O)<o&&(x=Math.max(x,t.wheelR+Math.sqrt(o*o-O*O)*.98))}let R=we(t.body.top,J),U=[];lc(l(J),Math.min(x,R-.08),R,t.body.exp,t.body.taper,c,U,S),u.push(U)}let g=[au(u,c)],v=t.cabin,m=[],p=Y=>we(v.top,Y),_=a?36:20;for(let Y=0;Y<=_;Y++){let J=Y/_,S=v.from+J*(v.to-v.from),x=i(S),R=we(t.body.top,S)-.06,U=Math.max(p(J),R+.02),z=we(v.width,J),O=[];lc(z,R,U,v.exp,v.taper,c,O,x),m.push(O)}let M=s==="sedan"||s==="suv"||s==="hatch",y=(v.roof[0]+v.roof[1])/2,b=Math.round(c*.1),A=c/2-b,P=(Y,J)=>Y>=b-J&&Y<b||Y>=A&&Y<A+J,I=s1(m,c,(Y,J)=>{let S=(Y+.5)/_,x=S>=v.roof[0]&&S<=v.roof[1];return J>=b&&J<A?x?1:0:S<v.roof[0]?P(J,1)?1:0:S>v.roof[1]?P(J,a?2:1)?1:0:P(J,1)?1:Math.abs(S-y)<.62/_?2:t.cPillar&&Math.abs(S-t.cPillar)<.62/_?1:0}),E=[I[0]];g.push(I[1]);let w=(Y,J)=>{let S=Y.index?Y.toNonIndexed():Y,x=new Lt(J),R=S.attributes.position.count,U=new Float32Array(R*3);for(let z=0;z<R;z++)U[z*3]=x.r,U[z*3+1]=x.g,U[z*3+2]=x.b;return S.setAttribute("color",new je(U,3)),S.attributes.uv||S.setAttribute("uv",new ie(new Float32Array(R*2),2)),S},N=[];if(a){let Y=[],J=[];for(let Gt=0;Gt<=_;Gt++){let V=Gt/_,bt=v.from+V*(v.to-v.from),At=i(bt),vt=we(t.body.top,bt),dt=we(v.width,V),ut=[];if(lc(dt*.97,vt-.03,Math.min(vt+.035,Math.max(p(V)-.01,vt-.01)),4,0,16,ut,At),Y.push(ut),V>=v.roof[0]-.03&&V<=v.roof[1]+.03){let Xt=[];lc(dt*.985,vt-.06,Math.max(p(V),vt)-.004,v.exp,v.taper,12,Xt,At,[.24*Math.PI,.76*Math.PI]),J.push(Xt)}}N.push(w(au(Y,16),"#0c0d0f")),J.length>1&&N.push(w(au(J,12,{closed:!1,caps:!1}),"#17181b"));let S=t.leather||"#1b1c20",x=v.roof[0]+.1,R=v.from+x*(v.to-v.from),U=i(R),z=we(t.body.top,R),O=p(x),$=Math.min(O-.19,z+.26),et=we(v.width,x)*.47;for(let Gt of[-1,1])N.push(w(Me(.46,$-z+.12,.13,Gt*et,($+z)/2-.06,U+.2,-.12),S)),N.push(w(Me(.24,.17,.09,Gt*et,$+.06,U+.2),S));let rt=v.from+.2*(v.to-v.from),yt=i(rt),K=we(t.body.top,rt);N.push(w(Me(we(v.width,.2)*1.7,.07,.24,0,K+.005,yt+.04),"#101114")),N.push(w(Me(.3,.05,.12,-et,K+.05,yt+.1,.25),"#0b0b0d"));let ot=new Hi(.17,.016,8,24);ot.rotateX(-.42),ot.translate(-et,K+.07,yt+.32),N.push(w(ot,"#050506")),N.push(w(Me(.3,.025,.03,-et,K+.07,yt+.32,-.42),"#0a0a0b")),N.push(w(Me(.42,.3,.2,-et,$-.3,U+.08,-.1),t.shirt||"#23272e"));let Tt=new ce(.05,.055,.1,8);Tt.translate(-et,$-.12,U+.07),N.push(w(Tt,"#b98562"));let ht=new mn(.108,14,10);ht.scale(.92,1.08,1),ht.translate(-et,$,U+.06),N.push(w(ht,"#c08a66"));let wt=new mn(.114,14,8,0,Math.PI*2,0,Math.PI*.52);wt.scale(.94,1.08,1.02),wt.translate(-et,$+.012,U+.075),N.push(w(wt,"#1a1410"));for(let Gt of[-1,1]){let V=new D(-et+Gt*.2,$-.22,U+.04),bt=new D(-et+Gt*.15,K+.1,yt+.33);N.push(w(r1(V,bt,.045),t.shirt||"#23272e"))}}let X=[],B=[],k=[],W=[],q=[],it=(Y,J,S)=>{let x=v.from+Y*(v.to-v.from),R=we(t.body.top,x)-.02,U=p(Y),z=we(v.width,Y)*(1-v.taper*(S?.92:0))*.97;return new D(J*z,S?U-.02:R,i(x))};X.push(I[2]);for(let Y of[-1,1]){let J=it(.1,Y,!1);g.push(Me(.16,.1,.12,J.x+Y*.14,J.y+.06,J.z)),X.push(Me(.1,.025,.04,J.x+Y*.05,J.y+.03,J.z)),B.push(Me(.13,.075,.008,J.x+Y*.14,J.y+.06,J.z+.062))}{let Y=v.from+.035*(v.to-v.from),J=we(t.body.top,Y)+.012,S=i(Y);for(let[x,R,U]of[[-.2,.52,.1],[.3,.46,.1]])q.push(Me(R,.012,.022,x,J,S,0,U,0))}let Z=(v.roof[0]+v.roof[1])/2,F=i(v.from+Z*(v.to-v.from)),Mt=r[0]+o+.14,St=M?[Mt,F,r[1]-o-.04]:[Mt,Math.min(F+.42,r[1]-o-.05),99],Nt=we(t.body.bottom,.5)+.1,Wt=Y=>{let J=d(Y-.16),S=we(t.body.top,J)-.12;for(let x of[-1,1])B.push(Me(.022,.028,.15,x*(f(J,S)+.006),S,Y-.16))};Wt(St[1]),M&&Wt(St[2]);let Zt=i(v.from)-.07,Qt=l(.15)*.78,at=!M&&!t.bed&&!t.wing||s==="sedan"?i(v.to)+.07:99,pt={a:new Ce(St[0],St[1],St[2],Nt),b:new Ce(Zt,at,Qt,t.intakes?1:0)},xt=Y=>we(t.body.width,Y),$t=(we(t.body.bottom,.02)+we(t.body.top,.02))/2,Ut=we(t.body.top,.02),st=[],zt=[],L=(Y,J,S,x,R,U=a?18:10)=>lu(Y,Y,J,U,S,x,R,"z");for(let Y of[-1,1]){let J=Y*xt(.02)*.62,S=$t+(Ut-$t)*.45,x=Y*.32;if(q.push(Me(.46,.115,.06,J,S,n+.045,0,x,0)),t.roundLamps)for(let R of[-.105,.105])B.push(L(.062,.03,J+R,S,n+.022+Math.abs(R-Y*.1)*.12)),k.push(L(.05,.034,J+R,S,n+.018+Math.abs(R-Y*.1)*.12));else{k.push(Me(.38,.05,.05,J,S-.004,n+.03,0,x,0));for(let R of[-.1,.07])k.push(L(.036,.03,J+R,S-.004,n+.012+(Y*R>0?.035:0)));k.push(Me(.34,.014,.03,J,S+.058,n+.04,0,x,0))}zt.push(Me(.07,.035,.05,Y*xt(.03)*.93,S-.01,n+.12,0,Y*.9,0))}let kt=we(t.body.bottom,.02)+.17;if(q.push(Me(xt(.03)*1.05,.18,.12,0,kt,n+.06)),t.grille)for(let Y=0;Y<t.grille;Y++)B.push(Me(xt(.03)*.98,.012,.02,0,kt-.06+Y*.12/Math.max(t.grille-1,1),n-.002));X.push(Me(xt(.03)*1.7,.04,.22,0,we(t.body.bottom,.02)+.02,n+.1));let Ct=we(t.body.top,.97);t.plainTail||W.push(Me(xt(.98)*1.72,.05,.06,0,Ct-.08,-n-.02));for(let Y of[-1,1]){let J=Y*xt(.98)*.68;W.push(Me(.36,t.plainTail?.15:.11,.06,J,Ct-.12,-n-.03)),st.push(Me(.09,.05,.06,J-Y*.24,Ct-(t.plainTail?.16:.13),-n-.026)),zt.push(Me(.08,.05,.06,J+Y*.2,Ct-(t.plainTail?.16:.13),-n-.034))}{let Y=it(Math.min(v.roof[1]+.02,.97),0,!0);W.push(Me(.3,.018,.03,0,Y.y-.02,Y.z+.03))}q.push(Me(xt(.98)*1.5,.16,.1,0,we(t.body.bottom,.98)+.06,-n-.05));let Et=we(t.body.bottom,.98)+.03,ft=(t.exhaust||[-.42,.42]).map(Y=>new D(Y,Et,-n+.06));for(let Y of ft)B.push(lu(.05,.05,.14,12,Y.x,Y.y,-n+.02,"z")),q.push(lu(.04,.04,.02,10,Y.x,Y.y,-n+.085,"z"));(M||s==="coupe")&&q.push(Me(.035,.05,.16,0,p(v.roof[1]-.06)+.03,i(v.from+(v.roof[1]-.06)*(v.to-v.from)),-.25));for(let Y of[-1,1]){let J=r[1]-r[0]-o*2;X.push(Me(.06,.08,J,Y*xt(.5)*.99,we(t.body.bottom,.5)+.03,(r[0]+r[1])/2))}if(t.spoiler&&g.push(Me(xt(.96)*1.5,.022,.12,0,we(t.body.top,.96)+.012,i(.965),-.2)),t.ducktail&&g.push(Me(xt(.95)*1.78,.05,.2,0,we(t.body.top,.95)+.03,i(.955),.28)),t.scoop){let Y=we(t.body.top,.22);g.push(Me(.56,.09,.7,0,Y+.035,i(.23),.04)),q.push(Me(.46,.05,.03,0,Y+.05,i(.23)-.35))}if(t.wing){let Y=we(t.body.top,.93),J=i(.95);for(let S of[-1,1])X.push(Me(.04,.3,.16,S*.42,Y+.14,J,.25));X.push(Me(xt(.95)*1.86,.035,.34,0,Y+.3,J+.02,-.12));for(let S of[-1,1])X.push(Me(.03,.14,.38,S*xt(.95)*.93,Y+.29,J+.02))}if(t.intakes){for(let Y of[-1,1]){let S=(we(t.body.bottom,.66)+we(t.body.top,.66))/2;q.push(Me(.05,.2,.52,Y*xt(.66)*.985,S,i(.66),0,Y*.14,0))}q.push(Me(xt(.03)*1.8,.03,.3,0,we(t.body.bottom,.02)+.01,n+.12))}if(t.rails)for(let Y of[-1,1])X.push(Me(.05,.05,e*.5,Y*.62,we(v.top,.6)+.04,i(.62)));if(t.bed){let Y=i(v.to+.01),J=-n-.05,S=we(t.body.top,.8);q.push(Me(xt(.8)*1.86,.04,J-Y,0,S-.02,(Y+J)/2));for(let x of[-1,1])g.push(Me(.08,.4,J-Y,x*xt(.8)*.96,S+.2,(Y+J)/2));g.push(Me(xt(.8)*1.9,.4,.08,0,S+.2,J))}let G=[Me(.52,.12,.01,0,we(t.body.bottom,.99)+.24,-n+.005),Me(.52,.12,.01,0,we(t.body.bottom,.01)+.28,n-.005)],H=Y=>Be(Y.map(J=>J.index?J.toNonIndexed():J).map(J=>(J.attributes.uv||J.setAttribute("uv",new ie(new Float32Array(J.attributes.position.count*2),2)),J))),j={type:t,parts:{paint:H(g),glass:H(E),trim:H(X),dark:H(q),chrome:H(B),head:H(k),tail:H(W),plate:H(G),rev:H(st),amber:H(zt),...a?{interior:Be(N)}:{}},seams:pt,wheels:[],wheel:a1(t.wheelR,t.wheelW,!a),exhausts:ft};for(let Y of r)for(let J of[-1,1])j.wheels.push({x:J*t.track,y:t.wheelR,z:Y,side:J,front:Y<0});return cu.set(s,j),j}function a1(s,t,e=!1){let n=s*.69,i=e?[[n,-t/2+.01],[s*.95,-t/2+.01],[s,-t/2+.06],[s,t/2-.06],[s*.95,t/2-.01],[n,t/2-.01]]:[[n,-t/2+.01],[s*.86,-t/2-.004],[s*.97,-t/2+.025],[s,-t/2+.06],[s,t/2-.06],[s*.97,t/2-.025],[s*.86,t/2+.004],[n,t/2-.01]],r=new Eo(i.map(([g,v])=>new Yt(g,v)),e?14:30);r.rotateZ(Math.PI/2);let o=[],a=new ce(n,n,t-.03,e?10:24,1,!0);if(a.rotateZ(Math.PI/2),o.push(a),!e){let g=new Hi(n-.008,.014,6,32);g.rotateY(Math.PI/2),g.translate(t/2-.03,0,0),o.push(g)}let c=t/2-.05,h=e?5:10;for(let g=0;g<h;g++){let v=g/h*Math.PI*2+(e?0:g%2*.12),m=new Kt(.035,n-.05,.045);m.translate(0,(n-.05)/2+.05,0),m.rotateX(v),m.translate(c,0,0),o.push(m)}let l=new ce(.07,.08,.05,e?6:12);if(l.rotateZ(Math.PI/2),l.translate(c+.01,0,0),o.push(l),!e){for(let v=0;v<5;v++){let m=v/5*Math.PI*2,p=new ce(.011,.011,.02,6);p.rotateZ(Math.PI/2),p.translate(c+.04,Math.cos(m)*.048,Math.sin(m)*.048),o.push(p)}let g=new ce(.028,.032,.02,12);g.rotateZ(Math.PI/2),g.translate(c+.042,0,0),o.push(g)}let f=Be(o.map(g=>g.index?g.toNonIndexed():g)),d=new ce(n*.82,n*.82,.03,e?10:24);d.rotateZ(Math.PI/2),d.translate(c-.06,0,0);let u=new Kt(.07,.16,.12);return u.translate(c-.03,n*.55,.07),{tire:r,rim:f,disc:d,caliper:u}}function l1(s,t="PCFC 7X"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.fillStyle="#e9e6da",n.fillRect(0,0,256,64),n.fillStyle="#1e3b78",n.font="700 14px Arial",n.textAlign="center",n.fillText("VISTA PAC\xCDFICA",128,16),n.fillStyle="#7a1f1f",n.font='700 34px "Barlow Condensed", Impact, monospace',n.fillText(t,128,52);let i=new zs(e);return i.colorSpace=En,i}function Yo(s,t={}){let{seams:e=null,twoTone:n=null,...i}=t,r=new Ns({color:s,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.1,...i}),o={uSeamA:{value:e?e.a:new Ce(99,99,99,0)},uSeamB:{value:e?e.b:new Ce(99,99,0,0)}};return r.userData.seamUniforms=o,r.onBeforeCompile=a=>{Object.assign(a.uniforms,o),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)},r.customProgramCacheKey=()=>"car-paint"+(n?"-two":""),r}function Zd(s){let t=new Bt({color:1316118,roughness:.92,metalness:0}),[e,n]=s?[.4,.6]:[3/7,4/7];return t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
roughnessFactor = mix(roughnessFactor, 1.0, paTread);`)},t.customProgramCacheKey=()=>"car-tyre"+(s?"-lite":""),t}var cc=null;function $r(s){if(cc)return cc;let t=l1(s);return cc={glass:new Ns({color:791061,metalness:.1,roughness:.04,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4}),glassClear:new Ns({color:725782,metalness:0,roughness:.03,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.8,transparent:!0,opacity:.8}),interior:new Bt({vertexColors:!0,roughness:.82,metalness:0,side:sn}),trim:new Bt({color:1316890,roughness:.45,metalness:.4}),dark:new Bt({color:461066,roughness:.6,metalness:.2}),chrome:new Bt({color:14212319,roughness:.12,metalness:1}),plate:new Bt({map:t,roughness:.5}),tire:Zd(!1),tireLite:Zd(!0),rim:new Bt({color:12172994,roughness:.22,metalness:1}),disc:new Bt({color:6053472,roughness:.4,metalness:.9}),caliper:new Bt({color:12728866,roughness:.4,metalness:.3})},cc}var $d=_e.damp,rn=_e.clamp,js={coupe:{name:"CALDERA GT",model:"coupe",blurb:"Grand tourer \xB7 450 hp V8, rear drive, balanced",stats:{speed:.8,accel:.72,grip:.76},spec:"450 HP \xB7 1,580 KG \xB7 305 KM/H",mass:1580,front:.52,cgH:.47,drive:"rwd",torque:[[900,360],[2500,480],[4500,520],[6200,500],[6900,468],[7400,405]],idle:900,redline:7400,gears:[3.31,2.13,1.55,1.19,.97,.79],final:3.7,eff:.88,shift:.2,cdA:.7,clA:.3,aeroFront:.45,mu:1.1,rollFront:.57,brakeBias:.63,brakeG:1.3,steerLock:.6,roll:.0065,rollMax:.09,pitch:.0028,nitro:.45,engine:"v8"},muscle:{name:"VANTA SS",model:"muscle",blurb:"Muscle car \xB7 465 hp big-block, huge torque, loose tail",stats:{speed:.74,accel:.74,grip:.5},spec:"465 HP \xB7 1,760 KG \xB7 290 KM/H",mass:1760,front:.54,cgH:.53,drive:"rwd",torque:[[750,500],[2e3,610],[3800,650],[5e3,622],[5800,570],[6400,495]],idle:750,redline:6400,gears:[2.66,1.78,1.3,1,.74],final:3.73,eff:.85,shift:.28,cdA:.92,clA:.05,aeroFront:.5,mu:1.04,rollFront:.52,brakeBias:.66,brakeG:1.15,steerLock:.58,roll:.0095,rollMax:.12,pitch:.0042,nitro:.5,engine:"bigblock"},super:{name:"VENTUS R",model:"super",blurb:"Mid-engine supercar \xB7 640 hp V10, track grip",stats:{speed:.97,accel:.95,grip:.96},spec:"640 HP \xB7 1,420 KG \xB7 345 KM/H",mass:1420,front:.42,cgH:.41,drive:"rwd",torque:[[1100,370],[3e3,500],[5e3,580],[6800,600],[8200,555],[8800,495]],idle:1100,redline:8800,gears:[3.13,2.19,1.63,1.29,1.03,.84,.69],final:3.9,eff:.9,shift:.09,cdA:.78,clA:1.15,aeroFront:.4,mu:1.22,rollFront:.6,brakeBias:.58,brakeG:1.5,steerLock:.56,roll:.0035,rollMax:.05,pitch:.0018,nitro:.4,engine:"v10"}},$o=["coupe","muscle","super"],Zo={easy:{label:"EASY HANDLING",abs:!0,tc:1,esc:!0,grip:1.16,steerMargin:.06,counter:.85,align:!0,wet:.35},sport:{label:"SPORT HANDLING",abs:!0,tc:.55,esc:!1,grip:1,steerMargin:.1,counter:.55,align:!1,wet:1},sim:{label:"SIMULATION HANDLING",abs:!1,tc:0,esc:!1,grip:1,steerMargin:.15,counter:.25,align:!1,wet:1}},ws=9.81,c1=1.2,hu={road:[1,.013],curb:[.9,.02],grass:[.55,.09],sand:[.45,.24]};function h1(s,t){let e=s.torque;if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++)if(t<=e[n][0])return e[n-1][1]+(e[n][1]-e[n-1][1])*(t-e[n-1][0])/(e[n][0]-e[n-1][0]);return e[e.length-1][1]}function Kd(s){let i=9.5*s;return Math.sin(1.45*Math.atan(i-.25*(i-Math.atan(i))))}function u1(s,t,e){let n=Math.sin(s*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function f1(s){let t=s.attributes.position.array,e=s.attributes.normal.array,n=[[[],[]],[[],[]]];for(let i=0;i<t.length;i+=9){let r=t[i]+t[i+3]+t[i+6]<0?0:1;for(let o=0;o<9;o++)n[r][0].push(t[i+o]),n[r][1].push(e[i+o])}return n.map(([i,r])=>{let o=new Fe;return o.setAttribute("position",new ie(i,3)),o.setAttribute("normal",new ie(r,3)),o})}var uc=class{constructor(t,e,n="coupe"){this.mode="easy",this.aids=Zo.easy,this.mats=$r(e),this.paint=Yo("#df6339"),this.group=new Ve,this.body=new Ve,this.group.add(this.body),this.lightMats={head:[],tail:[],amber:[]};for(let r=0;r<2;r++)this.lightMats.head.push(new Bt({color:16777215,emissive:16774364,emissiveIntensity:2,roughness:.2})),this.lightMats.tail.push(new Bt({color:4196358,emissive:16720914,emissiveIntensity:1.5,roughness:.3})),this.lightMats.amber.push(new Bt({color:7027208,emissive:16747028,emissiveIntensity:0,roughness:.3}));this.revMat=new Bt({color:12105906,emissive:16777215,emissiveIntensity:0,roughness:.25}),this.signal={side:0,hold:0,hazard:0,clock:0},this.spots=[];for(let r of[-1,1]){let o=new Ro(16773592,0,70,.42,.55,1.4);this.group.add(o,o.target),this.spots.push(o)}let i=new ce(.12,3.2,16,16,1,!0);i.translate(0,-8,0),i.rotateX(-Math.PI/2+.06),this.beamMat=qo(16773328),this.beams=[];for(let r=0;r<2;r++){let o=new ye(i,this.beamMat,1);o.userData.noAO=!0,o.layers.set(1),o.frustumCulled=!1,this.group.add(o),this.beams.push(o)}t.add(this.group),this.setModel(n),this.reset(0,0,0)}setModel(t){js[t]||(t="coupe"),this.key=t,this.def=js[t];for(let c of[...this.body.children])this.body.remove(c),c.geometry.dispose();for(let c of this.wheels||[])this.group.remove(c.pivot);let e=hc(this.def.model);this.dims=e.type;{let c=this.def,h=(e.type.wheels[1]-e.type.wheels[0])*e.type.length;this.chassis={L:h,a:h*(1-c.front),b:h*c.front,track:e.type.track*2,R:e.type.wheelR,Iz:c.mass*h*(1-c.front)*h*c.front*1.05,Fz0:c.mass*ws/4,peakTorque:Math.max(...c.torque.map(l=>l[1]))}}this.exhausts=e.exhausts.map(c=>c.clone());let n=this.mats,i={paint:this.paint,glass:n.glassClear,trim:n.trim,dark:n.dark,chrome:n.chrome,plate:n.plate,rev:this.revMat,interior:n.interior};this.paint.userData.seamUniforms.uSeamA.value=e.seams.a,this.paint.userData.seamUniforms.uSeamB.value=e.seams.b,this.deformables=[];let r=c=>{let h={geo:c,basePos:Float32Array.from(c.attributes.position.array),baseNormal:Float32Array.from(c.attributes.normal.array),weight:new Float32Array(c.attributes.position.count)};return this.deformables.push(h),h};for(let[c,h]of Object.entries(e.parts)){if(c==="head"||c==="tail"||c==="amber"){f1(h).forEach((d,u)=>{let g=new Ot(d,this.lightMats[c][u]);g.userData.own=!0,this.body.add(g),r(d)});continue}let l=new Ot(h.clone(),i[c]);l.userData.own=!0,l.castShadow=c!=="interior",l.receiveShadow=!0,c==="glass"&&(l.renderOrder=4),c==="interior"&&l.layers.set(1),this.body.add(l);let f=r(l.geometry);c==="paint"&&(this.shell=f.geo,this.basePos=f.basePos)}this.wheels=e.wheels.map(c=>{let h=new Ve;h.position.set(c.x,c.y,c.z);let l=new Ve;c.side<0&&(l.rotation.y=Math.PI),h.add(l);let f=new Ve;l.add(f);for(let[d,u]of[["tire",n.tire],["rim",n.rim],["disc",n.disc]]){let g=new Ot(e.wheel[d],u);g.castShadow=!0,f.add(g)}return l.add(new Ot(e.wheel.caliper,n.caliper)),this.group.add(h),{...c,pivot:h,spin:f,mount:l,compress:0}});let o=-this.dims.length/2,a=this.key==="super"?.55:.72;this.spots.forEach((c,h)=>{let l=h?1:-1;c.position.set(l*.62,a,o+.15),c.target.position.set(l*1.6,-.6,o-20)}),this.beams.forEach((c,h)=>{c.setMatrixAt(0,new Ht().makeTranslation((h?1:-1)*.62,a,o)),c.instanceMatrix.needsUpdate=!0}),this.repair()}get assist(){return this.mode==="easy"}set assist(t){this.setHandling(t?"easy":"sport")}setHandling(t){this.mode=Zo[t]?t:"easy",this.aids=Zo[this.mode]}setColor(t){this.paint.color.set(t)}reset(t,e,n){this.repair(),this.x=t,this.z=e,this.y=this.groundAt(t,e,0),this.heading=n,this.vx=0,this.vz=0,this.yawRate=0,this.steer=0,this.wheelAngle=0,this.ax=0,this.ay=0,this.lock=0,this.escActive=!1,this.handbrakeTimer=0,this.shiftHold=0,this.pedal=0,this.gear=1,this.rpm=this.def.idle,this.shiftTimer=0,this.nitro=100,this.boosting=!1,this.throttle=0,this.brake=0,this.handbrake=!1,this.slip=0,this.wheelspin=0,this.impact=0,this.contact=null,this.scrape=null,this.pendingHit=null,this.dentCooldown=0,this.pitch=0,this.roll=0,this.pitchVel=0,this.rollVel=0,this.heave=0,this.heaveVel=0,this.wheelAngle=0,this.surface="road",this.prevLong=0,this.distance=0,this.sync()}get speed(){return this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading)}get kmh(){return Math.abs(this.speed)*3.6}groundAt(t,e,n){let i=vs(t,e),r=_d(t);if(i!==null&&(n>i-1.2||t>qs(t,e).x0))return i;let o=Go(t,e);return o==="curb"||o==="grass"?r+ne:r}update(t,e,n){let i=this.def,r=this.chassis,o=this.aids,a=this.x,c=this.z;this.surface=Go(this.x,this.z);let h=vs(this.x,this.z)!==null&&this.y>1,l=h?hu.curb:hu[this.surface]||hu.road,f=this.surface==="sand"&&!h?1:this.surface==="grass"?.5:0,d=this.surface==="road"?(n.wetness||0)*.22*o.wet:0,u=i.mu*l[0]*o.grip*(1-d);this.throttle=e.throttle,this.brake=e.brake,this.handbrake=e.handbrake;let g=-Math.sin(this.heading),v=-Math.cos(this.heading),m=this.vx*g+this.vz*v,p=Math.abs(m);this.gear===-1?m>-.6&&e.throttle>0&&e.brake===0&&(this.gear=1):m<.6&&e.brake>0&&e.throttle===0?this.gear=-1:m<-1.5&&(this.gear=-1);let _=this.gear===-1,M=_?e.brake:e.throttle;this.pedal+=rn(M-this.pedal,-7*t,(this.pedal<.35?5:2.4)*t),this.pedal<.001&&(this.pedal=0);let y=this.pedal,b=_?e.throttle:e.brake;this.boosting=e.nitro&&e.throttle>0&&this.nitro>1&&m>3&&!_,this.nitro=rn(this.nitro+(this.boosting?-22:9)*t,0,100);let A=i.gears,P=(_?A[0]*1.05:A[this.gear-1])*i.final,I=p/r.R*(30/Math.PI),E=I*P;if(this.shiftHold-=t,this.shiftTimer>0)this.shiftTimer-=t;else if(!_&&this.shiftHold<=0){let kt=i.redline*(.5+.47*y),Ct=i.redline*(.2+.14*y),Et=this.gear>1?I*A[this.gear-2]*i.final:1/0;E>kt&&this.gear<A.length?(this.gear++,this.shiftTimer=i.shift,this.shiftHold=i.shift+.5,this.onShift?.(1)):this.gear>1&&(E<Ct||y>.9&&Et<i.redline*.78)&&(this.gear--,this.shiftTimer=i.shift*.7,this.shiftHold=i.shift+.7,this.onShift?.(-1))}let w=i.idle+(i.redline*.44-i.idle)*y,N=E<w,X=rn(Math.max(E,w),i.idle,i.redline);this.rpm=$d(this.rpm,this.shiftTimer>0?X*.84:X,N?7:16,t);let B=0;this.shiftTimer<=0&&(y>0&&this.rpm<i.redline-40?B=h1(i,this.rpm)*y*(this.boosting?1+i.nitro:1)*P*i.eff/r.R:y===0&&p>2&&(B=-r.peakTorque*.1*(this.rpm/i.redline)*P/r.R)),_&&(B=-B);let k=b*i.brakeG*i.mass*ws,W=-Math.cos(this.heading),q=Math.sin(this.heading),it=m,Z=this.vx*W+this.vz*q,F=Math.hypot(it,Z),Mt=Math.atan(r.L*u*ws/Math.max(F*F,1)),St=Math.min(i.steerLock,Mt+o.steerMargin+.085+.12*o.counter),Nt=it>4?rn(Math.atan2(Z-r.b*this.yawRate,it),-.55,.55)*o.counter:0,Wt=rn(e.steer*St+Nt,-i.steerLock,i.steerLock),Qt=(Math.abs(Wt)>Math.abs(this.wheelAngle)?1.5:2.6)*(.55+.45*Math.min(1,Math.abs(Wt-this.wheelAngle)/.12))+(it>4?Math.abs(Nt)*3:0);this.wheelAngle+=rn(Wt-this.wheelAngle,-Qt*t,Qt*t),this.steer=this.wheelAngle/i.steerLock,this.handbrake?this.handbrakeTimer=.7:this.handbrakeTimer-=t;let at=t/2,pt=0,xt=0,$t=0;this.escActive=!1;for(let kt=0;kt<2;kt++){let Ct=Math.sin(this.heading),Et=Math.cos(this.heading),ft=-this.vx*Ct-this.vz*Et,G=-this.vx*Et+this.vz*Ct,H=this.yawRate,j=this.wheelAngle,Y=Math.cos(j),J=Math.sin(j),S=.5*c1*ft*ft,x=S*i.clA,R=i.mass*this.ax*i.cgH/r.L,U=Math.max(i.mass*ws*r.b/r.L+x*i.aeroFront-R,0),z=Math.max(i.mass*ws*r.a/r.L+x*(1-i.aeroFront)+R,0),O=i.mass*this.ay*i.cgH/r.track,$=(ze,Tn)=>{let oi=rn(O*Tn,-ze/2,ze/2),C=ze/2-oi,tt=ze/2+oi;return u*(C*(1-.13*(C/r.Fz0-1))+tt*(1-.13*(tt/r.Fz0-1)))},et=Math.max($(U,i.rollFront),1),rt=Math.max($(z,1-i.rollFront),1),yt=G+r.a*H,K=G-r.b*H,ot=ft*Y+yt*J,Tt=-ft*J+yt*Y,ht=-Math.atan2(Tt,Math.max(Math.abs(ot),1.5)),wt=-Math.atan2(K,Math.max(Math.abs(ft),1.5)),Gt=Kd(ht)*et,V=Kd(wt)*rt,bt=ft>.05?1:ft<-.05?-1:0,At=k*i.brakeBias,vt=k*(1-i.brakeBias),dt=0,ut=0,Xt=!1,se=this.handbrake,Ie=(ze,Tn)=>ze*Math.sqrt(Math.max(.04,1-Math.min(1,(Tn/ze)**2*.85)));o.abs?(At=Math.min(At,Ie(et,Gt)*.97),vt=Math.min(vt,Ie(rt,V)*.97)):(Xt=At>et*1.02,se=se||vt>rt*1.02);let be=B,De=Math.max(0,Math.abs(be)/rt-1);if(o.tc){let ze=rt*.95+(Ie(rt,V)-rt*.95)*o.tc;be=rn(be,-ze,ze)}if(dt=-bt*At,ut=rn(be-bt*vt,-rt*.95,rt*.95),Xt){let ze=Math.hypot(ot,Tt);ze>.3?(dt=-et*.82*ot/ze,Gt=-et*.82*Tt/ze):(dt=0,Gt*=.3)}else Gt=Math.sign(Gt)*Math.min(Math.abs(Gt),et*Math.sqrt(Math.max(0,1-(dt/et)**2)));if(se){let ze=Math.hypot(ft,K);ze>.3?(ut=-rt*.8*ft/ze,V=-rt*.8*K/ze):(ut=0,V*=.3)}else V=Math.sign(V)*Math.min(Math.abs(V),rt*Math.sqrt(Math.max(0,1-(ut/rt)**2)));let ln=0;if(o.esc&&this.handbrakeTimer<=0&&ft>7){let ze=Math.atan2(G,ft),Tn=rn(ft*Math.tan(j)/(r.L*(1+.0022*ft*ft)),-u*ws/ft,u*ws/ft),oi=H-Tn;(Math.abs(oi)>.07||Math.abs(ze)>.09)&&(ln=r.Iz*rn(-oi*6.5+ze*5,-3.2,3.2),ft-=Math.min(Math.abs(oi)+Math.abs(ze),.6)*2.2*at,this.escActive=!0)}let $n=S*i.cdA*Math.sign(ft),Gn=i.mass*Math.abs(ft)/at,Ji=Math.sign(ft)*Math.min(l[1]*i.mass*ws,Gn),sr=dt*Y-Gt*J+ut-$n-Ji,rr=dt*J+Gt*Y+V;ln+=r.a*(dt*J+Gt*Y)-r.b*V;let Ci=sr/i.mass,Qi=rr/i.mass,bi=ft;ft+=(Ci+G*H)*at,G+=(Qi-bi*H)*at,H+=ln/r.Iz*at,(b>0||this.handbrake)&&y===0&&bi*ft<0&&(ft=0),y===0&&b===0&&Math.abs(ft)<.06&&Math.abs(G)<.06&&(ft=0,G=0);let ji=1-_e.smoothstep(Math.hypot(ft,G),1.2,5);if(ji>0){let ze=ft*Math.tan(j)/r.L,Tn=ji*(1-Math.exp(-at*28));H+=(ze-H)*Tn,G+=(r.b*ze-G)*Tn}_&&(ft=Math.max(ft,-16));let Ss=1-Math.exp(-at*11);this.ax+=(Ci-this.ax)*Ss,this.ay+=(Qi-this.ay)*Ss,this.yawRate=H,this.heading+=H*at;let or=Math.sin(this.heading),ar=Math.cos(this.heading);this.vx=-or*ft-ar*G,this.vz=-ar*ft+or*G,this.x+=this.vx*at,this.z+=this.vz*at,pt+=De,xt+=(Xt||se)&&Math.abs(ft)>2?1:0;let lr=ze=>_e.smoothstep(Math.abs(ze),.1,.22);$t+=Math.max(Math.abs(K)*lr(wt),Math.abs(Tt)*.7*lr(ht))}if(this.wheelspin=rn(pt*.5*(1.2-.6*o.tc),0,1)*(p<45?1:0),this.lock=xt/2,this.slip=$t/2,o.align&&Math.abs(e.steer)<.05&&Math.abs(this.wheelAngle)<.05&&p>5&&!this.handbrake&&this.surface==="road"){let kt=Math.PI/2,Ct=this.heading-Math.round(this.heading/kt)*kt;if(Math.abs(Ct)<.3){let Et=Ct*Math.min(1,1.6*t);this.heading-=Et;let ft=Math.cos(-Et),G=Math.sin(-Et),H=this.vx*ft+this.vz*G,j=-this.vx*G+this.vz*ft;this.vx=H,this.vz=j}}this.impact=0,this.collide(n,a,c),this.distance+=Math.hypot(this.x-a,this.z-c),this.dentCooldown-=t;let Ut=this.groundAt(this.x,this.z,this.y);Ut-this.y>.08&&Ut-this.y<.3&&(this.heaveVel-=(Ut-this.y)*9),this.y-Ut>.08&&this.y-Ut<.3&&(this.heaveVel+=(this.y-Ut)*5),this.y=$d(this.y,Ut,Ut>this.y?22:9,t);let st=this.slopeAt(),zt=f*Math.min(p/12,1)*.012;this.spring("pitch",rn(this.ax*i.pitch,-i.rollMax*.75,i.rollMax*.55)+st+(Math.random()-.5)*zt,70,9,t),this.spring("roll",rn(this.ay*i.roll,-i.rollMax,i.rollMax)+(Math.random()-.5)*zt,60,7,t),this.spring("heave",0,90,10,t),this.sync();let L=this.speed;for(let kt of this.wheels){let Ct=kt.front?this.lock&&!this.handbrake?.15:1:this.handbrake||this.lock?.05:1+this.wheelspin*2.5,Et=kt.front||this.wheelspin<.05?L:Math.max(Math.abs(L),6*this.wheelspin)*(_?-1:1);kt.spin.rotation.x-=Et*Ct*t/r.R*(kt.side<0?-1:1),kt.front&&(kt.pivot.rotation.y=this.wheelAngle)}}slopeAt(){let t=qs(this.x,this.z);return t&&this.x>t.x0&&this.y>.2?Math.atan2(t.deckY-ne,t.rampStart-t.x0)*Math.sin(this.heading):0}spring(t,e,n,i,r){let o=t+"Vel",a=(e-this[t])*n-this[o]*i;this[o]+=a*r,this[t]+=this[o]*r}sync(){this.group.position.set(this.x,this.y+this.heave*.4,this.z),this.group.rotation.set(0,this.heading,0),this.body.rotation.set(this.pitch,0,-this.roll),this.body.position.y=this.heave*.3;for(let t of this.wheels){let e=-this.roll*t.side*this.dims.track*.35+this.pitch*t.z*.35;t.pivot.position.y=t.y+rn(e,-.06,.06)*.5}}collide(t,e,n){let r=-Math.sin(this.heading),o=-Math.cos(this.heading);for(let f=0;f<2;f++)for(let d=0;d<2;d++){let u=d?1.35:-1.35,g=this.x+r*u,v=this.z+o*u;t.boxGrid.near(g,v,1.05,p=>{if(Math.abs(g-p.x)>p.w+1.05||Math.abs(v-p.z)>p.d+1.05)return;let _=rn(g,p.x-p.w,p.x+p.w),M=rn(v,p.z-p.d,p.z+p.d),y=g-_,b=v-M,A=Math.hypot(y,b);if(A<1e-4){let P=p.w-Math.abs(g-p.x),I=p.d-Math.abs(v-p.z);P<I?(y=Math.sign(g-p.x),b=0,A=-P):(y=0,b=Math.sign(v-p.z),A=-I)}else y/=A,b/=A;A<1.05&&this.resolve(y,b,1.05-A,.25,g-y*1.05,v-b*1.05)});let m=p=>{let _=g-p.x,M=v-p.z;if(Math.abs(_)>3||Math.abs(M)>3)return;let y=Math.hypot(_,M),b=1.05+p.r;y<b&&y>1e-4&&this.resolve(_/y,M/y,b-y,.2,p.x+_/y*p.r,p.z+M/y*p.r)};t.circleGrid.near(g,v,3,m),this.y<(vs(g,v)??-9)-1&&t.pileGrid.near(g,v,3,m)}let a=qs(e,n)||qs(this.x,this.z);if(a&&this.y>1.2){let f=a.halfWidth-1.1;Math.abs(this.z-a.z)>f&&this.resolve(0,-Math.sign(this.z-a.z),Math.abs(this.z-a.z)-f,.15),this.x<a.x1+3&&this.resolve(1,0,a.x1+3-this.x,.15)}let c=vs(this.x,this.z),h=qs(this.x,this.z);if(h&&this.x>h.x0&&this.y<c-.9&&this.x<-345){let f=Math.sign(this.z-h.z)||1;this.resolve(0,f,h.halfWidth+.2-Math.abs(this.z-h.z),.2)}let l=a&&this.y>1.2?a.x1+3:he.minX;this.x<l&&this.resolve(1,0,l-this.x,.2),this.x>he.maxX&&this.resolve(-1,0,this.x-he.maxX,.3),this.z<he.minZ&&this.resolve(0,1,he.minZ-this.z,.3),this.z>he.maxZ&&this.resolve(0,-1,this.z-he.maxZ,.3)}resolve(t,e,n,i,r=this.x-t*2,o=this.z-e*2){this.x+=t*n,this.z+=e*n;let a=this.vx*t+this.vz*e;if(a<0){let c=this.vx-a*t,h=this.vz-a*e,l=Math.hypot(c,h);l>6&&(!this.scrape||l>this.scrape.speed)&&(this.scrape={x:r,z:o,speed:l,nx:t,nz:e});let f=this.assist&&l>-a*1.2,d=f?0:i;this.vx-=(1+d)*a*t,this.vz-=(1+d)*a*e;let u=f?.985:.9;if(this.vx*=u,this.vz*=u,f&&l>4){let v=Math.atan2(-c,-h)-this.heading;v=Math.atan2(Math.sin(v),Math.cos(v)),Math.abs(v)<1.2&&(this.heading+=v*.08)}if(this.impact=Math.max(this.impact,-a),(!this.contact||-a>this.contact.speed)&&(this.contact={x:r,z:o,speed:-a,nx:t,nz:e}),this.registerHit(r,o,-a),this.yawRate*=.6,!f){let g=-(1+d)*a,v=((o-this.z)*t-(r-this.x)*e)*g/2.6;this.yawRate+=rn(v*(this.assist?.15:.45),-2.2,2.2)}}}registerHit(t,e,n){(!this.pendingHit||n>this.pendingHit.speed)&&(this.pendingHit={x:t,z:e,speed:n})}applyDamage(){let t=this.pendingHit;if(this.pendingHit=null,!t||t.speed<3.5||this.dentCooldown>0)return;this.dentCooldown=.18;let e=t.x-this.x,n=t.z-this.z,i=Math.cos(this.heading),r=Math.sin(this.heading),o=e*i-n*r,a=e*r+n*i,c=this.dims.length/2,h=this.dims.track+.1;o=rn(o,-h,h),a=rn(a,-c,c);let l=rn((t.speed-3)/16,.05,1);this.dent(o,.62,a,l)}dent(t,e,n,i){let r=.5+i*.55,o=.035+i*.13,a=this.dims.length/2,c=Math.abs(n)/a>Math.abs(t)/this.dims.track,h=c?-t*.15:-Math.sign(t),l=c?-Math.sign(n):-n*.1,f=Math.hypot(h,l)||1;h/=f,l/=f;let d=new D,u=new D,g=new D;for(let v of this.deformables){let m=v.geo.attributes.position.array,p=v.geo.attributes.normal.array,_=v.basePos,M=v.weight,y=!1;for(let b=0,A=0;b<m.length;b+=3,A++){let P=_[b]-t,I=(_[b+1]-e)*1.3,E=_[b+2]-n,w=(P*P+I*I+E*E)/(r*r);if(w>3)continue;let N=Math.exp(-w*1.8)*(.65+.7*u1(_[b],_[b+1],_[b+2]));m[b]+=h*o*N,m[b+1]-=o*.3*N,m[b+2]+=l*o*N;let X=m[b]-_[b],B=m[b+1]-_[b+1],k=m[b+2]-_[b+2],W=Math.hypot(X,B,k);if(W>.26){let q=.26/W;m[b]=_[b]+X*q,m[b+1]=_[b+1]+B*q,m[b+2]=_[b+2]+k*q}M[A]=Math.min(1,M[A]+N),y=!0}if(y){for(let b=0;b<m.length;b+=9){let A=b/3;if(!(Math.max(M[A],M[A+1],M[A+2])<.02)){d.set(m[b+3]-m[b],m[b+4]-m[b+1],m[b+5]-m[b+2]),u.set(m[b+6]-m[b],m[b+7]-m[b+1],m[b+8]-m[b+2]),g.crossVectors(d,u).normalize();for(let P=0;P<3;P++){let I=b+P*3,E=Math.min(1,M[A+P]*1.6),w=v.baseNormal,N=w[I]*(1-E)+g.x*E,X=w[I+1]*(1-E)+g.y*E,B=w[I+2]*(1-E)+g.z*E,k=Math.hypot(N,X,B)||1;p[I]=N/k,p[I+1]=X/k,p[I+2]=B/k}}}v.geo.attributes.position.needsUpdate=!0,v.geo.attributes.normal.needsUpdate=!0}}if(this.damage=Math.min(1,this.damage+i*.18),i>.3){let v=t<0?0:1;n<-a+.9&&(this.broken.head[v]=!0),n>a-.9&&(this.broken.tail[v]=!0)}}repair(){for(let t of this.deformables||[])t.weight.some(e=>e>0)&&(t.geo.attributes.position.array.set(t.basePos),t.geo.attributes.normal.array.set(t.baseNormal),t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.normal.needsUpdate=!0,t.weight.fill(0));this.damage=0,this.broken={head:[!1,!1],tail:[!1,!1]}}setLights(t,e,n=!1,i=.016){let r=Math.max(t,.15);this.lightMats.head.forEach((h,l)=>{let f=!this.broken.head[l];h.emissiveIntensity=f?1.5+r*9:0,h.color.setScalar(f?1:.12),this.spots[l].intensity=f?t*220:0,this.beams[l].visible=f&&t>.05}),this.lightMats.tail.forEach((h,l)=>{h.emissiveIntensity=this.broken.tail[l]?.05:e?6:1.1+t*1.2}),this.revMat.emissiveIntensity=n?5:0;let o=this.signal;o.clock+=i;let a=Math.abs(this.steer)>.3&&this.kmh>4&&this.kmh<75?Math.sign(this.steer):0;o.hold=a?o.hold+i:Math.max(0,o.hold-i*2),o.hold>.35&&a?o.side=a:o.hold<=0&&(o.side=0),this.impact>9&&(o.hazard=5),o.hazard=Math.max(0,o.hazard-i);let c=o.clock*1.6%1<.5?7:0;this.lightMats.amber[0].emissiveIntensity=o.hazard>0||o.side>0?c:0,this.lightMats.amber[1].emissiveIntensity=o.hazard>0||o.side<0?c:0,this.beamMat.uniforms.intensity.value=t*.06}safeRespawn(){let t=Yi(this.x),e=ys(this.z);if(Math.abs(this.x-t)<Math.abs(this.z-e)){let n=Math.cos(this.heading)>0;this.reset(t+(n?3.4:-3.4),rn(this.z,ge+10,Pe-10),n?0:Math.PI)}else{let n=Math.sin(this.heading)<0;this.reset(rn(this.x,Ue+10,Ee-10),e+(n?3.4:-3.4),n?-Math.PI/2:Math.PI/2)}}};var fc=16,uu=new Ht,dc=new Ht,Jd=new ve,fu=new D,Ko=new D,pc=new ve,d1=new D(1,1,1),p1=new Ht().makeScale(0,0,0),mc=class{constructor(){this.items=[],this.grid=new Map,this.loose=new Set,this.dirty=new Set}add(t,e,n){let i={...n,parts:t.map(o=>{let a=new Ht;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),hide:(e||[]).map(o=>{let a=new Ht;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),pivot0:new D(n.x,n.y,n.z),pos:new D(n.x,n.y,n.z),vel:new D,quat:new ve,spin:new D,state:0,timer:0};i.id=this.items.length,this.items.push(i);let r=this.key(n.x,n.z);return this.grid.has(r)||this.grid.set(r,[]),this.grid.get(r).push(i),i}key(t,e){return`${Math.floor(t/fc)},${Math.floor(e/fc)}`}collide(t,e,n){let i=-Math.sin(t.heading),r=-Math.cos(t.heading),o=t.x-i*1.35,a=t.z-r*1.35,c=t.x+i*1.35,h=t.z+r*1.35,l=Math.hypot(t.vx,t.vz),f=Math.floor(t.x/fc),d=Math.floor(t.z/fc);for(let u=-1;u<=1;u++)for(let g=-1;g<=1;g++){let v=this.grid.get(`${f+u},${d+g}`);if(v)for(let m of v){if(m.state!==0)continue;let p=c-o,_=h-a,M=_e.clamp(((m.x-o)*p+(m.z-a)*_)/(p*p+_*_),0,1),y=o+p*M,b=a+_*M,A=m.x-y,P=m.z-b,I=Math.hypot(A,P),E=1.05+m.r;if(I>=E||t.y>m.y+3)continue;I>1e-4?(A/=I,P/=I):(A=i,P=r);let w=t.vx*A+t.vz*P;if(w<m.solid){w>0&&(t.vx-=w*A*1.2,t.vz-=w*P*1.2),t.x-=A*(E-I),t.z-=P*(E-I);continue}this.knock(m,t,A,P,w,l),n?.({item:m,x:m.x,z:m.z,speed:w,nx:A,nz:P})}}}knock(t,e,n,i,r,o){t.state=1,t.timer=0,this.loose.add(t);let a=1-t.mass*Math.min(1,6/Math.max(o,6));if(e.vx*=a,e.vz*=a,e.registerHit?.(t.x,t.z,r*t.mass*3),t.kind==="topple")Ko.set(i,0,-n).normalize(),t.axis=Ko.clone(),t.angle=0,t.angVel=.6+r*.08;else{let c=2.5+mt()*2.5+r*.12,h=.5+mt()*.25;t.vel.set(e.vx*h+n*r*.25,c,e.vz*h+i*r*.25),t.spin.set((mt()-.5)*2,(mt()-.5)*2,(mt()-.5)*2).normalize().multiplyScalar(5+r*.35),t.pos.copy(t.pivot0)}for(let c of t.hide)c.mesh.setMatrixAt(c.index,p1),c.mesh.instanceMatrix.needsUpdate=!0}groundY(t,e){return Go(t,e)==="road"?0:ne}update(t,e){for(let n of this.loose){if(n.timer+=t,n.state===1){if(n.kind==="topple")n.angVel+=Math.sin(Math.max(n.angle,.05))*6*t+.4*t,n.angle+=n.angVel*t,n.angle>=Math.PI/2-.04&&(n.angle=Math.PI/2-.04,n.angVel*=-.18,Math.abs(n.angVel)<.08&&(n.state=2)),n.quat.setFromAxisAngle(n.axis,n.angle);else{n.vel.y-=9.8*t,n.pos.addScaledVector(n.vel,t);let i=n.spin.length();i>.001&&(pc.setFromAxisAngle(Ko.copy(n.spin).divideScalar(i),i*t),n.quat.premultiply(pc));let r=this.groundY(n.pos.x,n.pos.z)+n.lieH;n.pos.y<r&&(n.pos.y=r,n.vel.y<-1.2?(n.vel.y*=-.32,n.vel.x*=.5,n.vel.z*=.5,n.spin.multiplyScalar(.55)):(n.vel.y=0,n.vel.x*=Math.exp(-8*t),n.vel.z*=Math.exp(-8*t),n.spin.multiplyScalar(Math.exp(-6*t)),Math.hypot(n.vel.x,n.vel.z)<.3&&this.settle(n)))}this.dirty.add(n)}n.timer>25&&Math.hypot(e.x-n.x,e.z-n.z)>200&&this.restore(n)}for(let n of this.dirty)this.write(n);this.dirty.clear()}settle(t){t.state=2,fu.set(0,1,0).applyQuaternion(t.quat);let e=Math.atan2(fu.x,fu.z);Jd.setFromAxisAngle(Ko.set(0,1,0),e),pc.setFromAxisAngle(Ko.set(1,0,0),Math.PI/2),t.quat.copy(Jd).multiply(pc),t.pos.y=this.groundY(t.pos.x,t.pos.z)+t.lieH,this.dirty.add(t)}restore(t){t.state=0,t.pos.copy(t.pivot0),t.quat.identity(),t.vel.set(0,0,0),t.spin.set(0,0,0),this.loose.delete(t);for(let e of[...t.parts,...t.hide])e.mesh.setMatrixAt(e.index,e.base),e.mesh.instanceMatrix.needsUpdate=!0}write(t){uu.compose(t.pos,t.quat,d1),dc.makeTranslation(-t.pivot0.x,-t.pivot0.y,-t.pivot0.z),uu.multiply(dc);for(let e of t.parts)dc.multiplyMatrices(uu,e.base),e.mesh.setMatrixAt(e.index,dc),e.mesh.instanceMatrix.needsUpdate=!0}restoreAll(){for(let t of[...this.loose])this.restore(t)}};function xc(s,t){let e=s.index?s.toNonIndexed():s,n=new Lt(t),i=e.attributes.position.count,r=new Float32Array(i*3);for(let o=0;o<i;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new je(r,3)),e}function Xe(s,t,e,n,i,r,o,a=0,c=0,h=0){let l=new Kt(s,t,e);return(a||c||h)&&l.applyMatrix4(new Ht().makeRotationFromEuler(new cn(a,c,h))),l.translate(n,i,r),xc(l,o)}function en(s,t,e,n,i,r,o,a,c="y"){let h=new ce(s,t,e,n);return c==="x"&&h.rotateZ(Math.PI/2),c==="z"&&h.rotateX(Math.PI/2),h.translate(i,r,o),xc(h,a)}function np(s,t,e,n,i,r,o=1){let a=new mn(s,t,Math.max(3,t/3),0,Math.PI*2,0,Math.PI/2);return a.scale(1,o,1),a.translate(e,n,i),xc(a,r)}var Kr="#b0362a",du="#d9d3c2",tr="#202427",Qd="#7d5b3b",jd="#264a8a",gc="#626a70";function m1(){return Be([en(.2,.21,.07,10,0,.035,0,Kr),en(.14,.15,.52,10,0,.33,0,Kr),en(.17,.17,.05,10,0,.6,0,Kr),np(.15,10,0,.62,0,Kr,.9),en(.035,.05,.07,6,0,.78,0,du),...[-1,1].flatMap(s=>[en(.055,.06,.14,8,s*.17,.46,0,Kr,"x"),en(.065,.065,.03,8,s*.245,.46,0,du,"x")]),en(.075,.08,.13,8,0,.42,.17,Kr,"z"),en(.085,.085,.035,8,0,.42,.245,du,"z")])}function g1(){let s=[en(.3,.27,.9,14,0,.45,0,"#2c4a3b"),np(.31,14,0,.9,0,"#1f2b27",.4),Xe(.22,.12,.02,0,.78,.3,"#0d1110")];for(let t of[.18,.5,.82])s.push(en(.305,.3,.03,14,0,t,0,"#22392e"));return Be(s)}function x1(){let s=[];for(let t of[-.14,0,.14])s.push(Xe(2,.04,.11,0,.45,t,Qd));for(let t=0;t<2;t++)s.push(Xe(2,.1,.035,0,.64+t*.15,-.25-t*.03,Qd,-.2));for(let t of[-.85,.85])s.push(Xe(.06,.45,.06,t,.225,.16,tr),Xe(.06,.85,.06,t,.42,-.24,tr,-.15)),s.push(Xe(.06,.04,.5,t,.63,-.02,tr),Xe(.06,.04,.42,t,.42,-.04,tr));return Be(s)}function v1(){let s=[];for(let t of[-.22,.22])for(let e of[-.18,.18])s.push(Xe(.05,.22,.05,t,.11,e,tr));return s.push(Xe(.52,.62,.46,0,.53,0,jd),en(.23,.23,.52,14,0,.84,0,jd,"x")),s.push(Xe(.32,.07,.04,0,.93,.225,"#16294d"),Xe(.2,.14,.012,0,.6,.235,"#d8dde6")),Be(s)}function y1(){return Be([Xe(.36,.03,.3,0,.015,0,tr),Xe(.08,.36,.08,0,.18,0,tr),Xe(.46,.55,.4,0,.63,0,"#ffffff"),Xe(.48,.04,.42,0,.92,0,"#ffffff"),Xe(.34,.24,.012,0,.71,.205,"#1c2226"),Xe(.12,.03,.03,0,.53,.215,"#9aa0a4")])}function _1(){return Be([en(.035,.04,1.05,8,0,.525,0,gc),Xe(.17,.28,.13,0,1.19,0,"#8a9095"),en(.085,.085,.13,10,0,1.33,0,"#3a4044","z"),Xe(.1,.07,.012,0,1.24,.067,"#c9e0a8")])}function M1(){return Be([en(.045,.05,3.3,8,0,1.65,0,gc),en(.06,.06,.06,8,0,3.32,0,gc)])}function b1(s){let t=[en(.13,.17,10.6,8,0,5.3,0,"#5a4330"),Xe(2.5,.13,.13,0,9.7,0,"#4b3828"),Xe(1.4,.1,.1,0,8.9,0,"#4b3828")];for(let e of[-1.1,0,1.1])t.push(en(.05,.06,.2,6,e,9.86,0,"#cfd4d2"));for(let e of[-.6,.6])t.push(en(.04,.05,.16,6,e,9.04,0,"#cfd4d2"));return s&&t.push(en(.27,.27,.85,10,0,7.9,.32,"#7d8487"),en(.29,.29,.05,10,0,8.35,.32,"#5f6669")),Be(t)}var ip=s=>s.toUpperCase().replace(" DRIVE"," DR").replace(" AVE"," AV").replace(" BLVD"," BL"),tp=Object.fromEntries(Object.entries(Yh).map(([s,t])=>[s,ip(t)])),ep=Object.fromEntries(Object.entries(Zh).map(([s,t])=>[s,ip(t)]));function w1(s,t){let e=t.length,n=Je(s,512,64*e,(r,o,a)=>{let c=a/e;t.forEach((h,l)=>{let f=l*c;r.fillStyle="#16603d",r.fillRect(0,f,o,c),r.strokeStyle="#e9f1ea",r.lineWidth=3,r.strokeRect(6,f+6,o-12,c-12),r.fillStyle="#f4f7f2",r.font='700 40px "Barlow Condensed", Arial Narrow, Arial, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(h,o/2,f+c/2+2)})}),i=new Bt({map:n,roughness:.45,metalness:.2});return i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aRow;`).replace("#include <uv_vertex>",`#include <uv_vertex>
  vMapUv.y = (vMapUv.y + aRow) / ${e.toFixed(1)};`)},i.customProgramCacheKey=()=>"pa-street-blade",i}function E1(s){return Je(s,256,384,(t,e,n)=>{let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#ff8a4c"),i.addColorStop(1,"#5a1c3c"),t.fillStyle=i,t.fillRect(0,0,e,n),t.fillStyle="#fff4dc",t.beginPath(),t.arc(e/2,n*.36,62,0,Math.PI*2),t.fill(),t.fillStyle="#1b1020",t.font='800 54px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.fillText("SURF",e/2,n*.7),t.fillText("FIZZ",e/2,n*.84),t.fillStyle="#fff4dc",t.font="600 18px Arial, sans-serif",t.fillText("TASTE THE SWELL",e/2,n*.94)})}function sp(s,t,e,n,i=[]){let r=new Ht,o=new ve,a=new D,c=new D(1,1,1),h=new D(0,1,0),l=new Bt({vertexColors:!0,roughness:.55,metalness:.15}),f=[],d=[],u=ee+5,g=new Yn(16);for(let[st,zt]of n)g.add({x:st,z:zt});for(let st of i)g.add({x:st.x,z:st.z});let v=(st,zt,L=2.4)=>g.any(st,zt,L),m=new Yn(32);for(let st of qi){let[zt,L]=Ys(st);m.add({x:zt,z:L})}let p=(st,zt)=>m.any(st,zt,7),_=new Set(["downtown","midtown"]),M={hydrant:[],bin:[],bench:[],mailbox:[],newsbox:[],meter:[]},y=(st,zt,L,kt)=>Ct=>st==="ns"?[zt+L*(ee+Ct),kt]:[kt,zt+L*(ee+Ct)];for(let st of["ns","ew"]){let zt=st==="ns"?de:pe,L=st==="ns"?pe:de,[kt,Ct]=st==="ns"?[ge-45,Pe+45]:[Ue+15,Ee+25];for(let Et of zt)for(let ft of[-1,1])if(!(st==="ns"&&Et===Ue&&ft<0))for(let G=kt;G<=Ct;G+=6.5){if(L.some(R=>Math.abs(G-R)<u))continue;let H=y(st,Et,ft,G),[j,Y]=H(1);if(v(j,Y)||p(j,Y))continue;let J=st==="ns"?ft>0?-Math.PI/2:Math.PI/2:ft>0?Math.PI:0,S=_.has(vi(Zs(j+(st==="ns"?ft*40:0)),Ho(Y+(st==="ew"?ft*40:0)))),x=mt();if(x<.055)M.hydrant.push([...H(.6),J]);else if(x<.12)M.bin.push([...H(.9),J]);else if(x<.165)M.bench.push([...H(3.4),J]);else if(x<.19)M.mailbox.push([...H(1.1),J]);else if(x<.23){let R=2+Math.floor(mt()*2);for(let U=0;U<R;U++){let z=(U-(R-1)/2)*.55,[O,$]=H(1.1);M.newsbox.push([st==="ns"?O:O+z,st==="ns"?$+z:$,J])}}else S&&x<.42&&M.meter.push([...H(.45),J])}}let b={hydrant:{geo:m1(),y:.4,r:.22,mass:.08,solid:1.5,lieH:.17,kind:"fly",sparks:!0},bin:{geo:g1(),y:.5,r:.32,mass:.04,solid:1.2,lieH:.29,kind:"fly"},bench:{geo:x1(),y:.4,r:.75,mass:.07,solid:1.5,lieH:.3,kind:"fly"},mailbox:{geo:v1(),y:.5,r:.34,mass:.06,solid:1.5,lieH:.25,kind:"fly",sparks:!0},newsbox:{geo:y1(),y:.5,r:.28,mass:.04,solid:1.2,lieH:.22,kind:"fly"},meter:{geo:_1(),y:0,r:.12,mass:.04,solid:2,kind:"topple",sparks:!0}},A=["#c8342b","#2f5fa8","#e2b33a","#2e7d4f","#e8e4da","#d9662f"].map(st=>new Lt(st)),P={},I=st=>[st[0],st[1]],E=st=>{st.castShadow=!0,st.receiveShadow=!0,st.layers.set(1)};for(let[st,zt]of Object.entries(M)){let L=b[st],kt=an(s,zt,L.geo,l,{at:I,far:st==="bench"?420:340,setup:Ct=>{E(Ct),Ct.name=st},set:(Ct,Et,[ft,G,H])=>{o.setFromAxisAngle(h,H+(st==="bin"||st==="hydrant"?mt()*6.28:0)),Ct.setMatrixAt(Et,r.compose(a.set(ft,ne,G),o,c)),st==="newsbox"&&Ct.setColorAt(Et,ue(A))}});P[st]=kt.meshes,zt.forEach(([Ct,Et],ft)=>{e.add([kt.refs[ft]],null,{type:st,x:Ct,z:Et,y:ne+L.y,r:L.r,mass:L.mass,solid:L.solid,lieH:L.lieH??.2,kind:L.kind,sparks:!!L.sparks})})}let w=[...Object.values(tp),...Object.values(ep)],N=[];for(let st of de)for(let zt of pe)N.push([st+ee+1.3,zt-ee-1.3,st,zt]);let X=an(s,N,M1(),l,{at:I,far:420,setup:E,set:(st,zt,[L,kt])=>st.setMatrixAt(zt,r.makeTranslation(L,ne,kt))}),B=N.flatMap(([st,zt,L,kt])=>[[st,zt,0,w.indexOf(tp[String(L)])],[st,zt,1,w.indexOf(ep[String(kt)])]]),k=an(s,B,new Kt(1.7,.27,.03),w1(t,w),{at:I,far:420,cloneGeometry:!0,set:(st,zt,[L,kt,Ct])=>{Ct===0?o.setFromAxisAngle(h,Math.PI/2):o.identity(),st.setMatrixAt(zt,r.compose(a.set(L,ne+3+Ct*.3,kt),o,c))},setup:(st,zt)=>{E(st),st.geometry.setAttribute("aRow",new Ye(new Float32Array(zt.map(L=>w.length-1-L[3])),1))}});N.forEach(([st,zt],L)=>{e.add([X.refs[L],k.refs[L*2],k.refs[L*2+1]],null,{type:"sign",x:st,z:zt,y:ne,r:.12,mass:.05,solid:2.5,kind:"topple",sparks:!0})});let W=[],q=[],it=[];for(let st of qi){let[zt,L]=Ys(st),kt=st.axis==="ns"?st.side>0?-Math.PI/2:Math.PI/2:st.side>0?Math.PI:0,Ct=new Ht().compose(a.set(zt,ne,L),o.setFromAxisAngle(h,kt),c),Et=(j,Y)=>j.push(Y.applyMatrix4(Ct));Et(W,Xe(4.3,.08,1.8,0,2.55,0,"#3b4448",.04)),Et(W,Xe(4.3,.18,.06,0,2.48,.88,"#2b3236"));for(let j of[-2.05,2.05])for(let Y of[-.78,.7])Et(W,en(.05,.05,2.5,8,j,1.25,Y,"#2b3236"));Et(W,Xe(2.4,.05,.42,-.2,.47,-.45,"#9aa3a8"));for(let j of[-1.2,.8])Et(W,Xe(.05,.45,.35,j,.225,-.45,"#2b3236"));Et(W,en(.04,.04,2.8,8,2.7,1.4,.9,gc)),Et(W,en(.27,.27,.03,18,2.7,2.65,.9,"#1d4f9a","z")),Et(W,en(.2,.2,.035,18,2.7,2.65,.9,"#f2f4f6","z")),Et(q,Xe(4,1.85,.02,0,1.3,-.8,"#ffffff")),Et(q,Xe(.02,1.85,1.35,-2.05,1.3,-.1,"#ffffff"));let ft=new Kt(.14,1.8,1.3);ft.translate(2.05,1.3,-.08),it.push(xc(ft,"#ffffff").applyMatrix4(Ct));let G=2.25,H=.95;f.push(st.axis==="ns"?{x:zt,z:L,w:H,d:G}:{x:zt,z:L,w:G,d:H})}let Z=new Ot(Be(W),l);Z.castShadow=Z.receiveShadow=!0;let F=new Bt({color:10470612,roughness:.05,metalness:.1,transparent:!0,opacity:.22,depthWrite:!1}),Mt=new Ot(Be(q),F);Mt.renderOrder=2;let St=E1(t),Nt=new Bt({map:St,emissive:16777215,emissiveMap:St,emissiveIntensity:.1,roughness:.3}),Wt=new Ot(Be(it),Nt);Wt.castShadow=!0,s.add(Z,Mt,Wt);let Zt=[];for(let st=ge-30;st<=Pe+45;st+=38)pe.some(zt=>Math.abs(st-zt)<u)||Zt.push([Ee+ee+1.7,st,"ns"]);for(let[st,zt]of[[Pe,1],[ge,-1]])for(let L=Ue+30;L<=Ee+10;L+=38)de.some(kt=>Math.abs(L-kt)<u)||Zt.push([L,st+zt*(ee+1.7),"ew"]);let Qt=Zt.filter((st,zt)=>zt%4!==2),at=Zt.filter((st,zt)=>zt%4===2);for(let[st,zt]of[[Qt,!1],[at,!0]]){an(s,st,b1(zt),l,{at:I,far:900,setup:L=>{L.castShadow=!0},set:(L,kt,[Ct,Et,ft])=>L.setMatrixAt(kt,r.compose(a.set(Ct,ne,Et),o.setFromAxisAngle(h,ft==="ns"?0:Math.PI/2),c))});for(let[L,kt]of st)d.push({x:L,z:kt,r:.22})}let pt=[],xt=[Zt.filter(st=>st[2]==="ns"),Zt.filter(st=>st[2]==="ew"&&st[1]>0),Zt.filter(st=>st[2]==="ew"&&st[1]<0)];for(let st of xt)for(let zt=0;zt<st.length-1;zt++){let[L,kt,Ct]=st[zt],[Et,ft]=st[zt+1];if(!(Math.hypot(Et-L,ft-kt)>80))for(let[G,H]of[[-1.1,9.92],[0,9.92],[1.1,9.92],[-.6,9.08],[.6,9.08]]){let j=Ct==="ns"?G:0,Y=Ct==="ns"?0:G,J=.55+Math.abs(G)*.1,S=L+j,x=ne+H,R=kt+Y;for(let U=1;U<=12;U++){let z=U/12,O=L+(Et-L)*z+j,$=kt+(ft-kt)*z+Y,et=ne+H-J*4*z*(1-z);pt.push(S,x,R,O,et,$),S=O,x=et,R=$}}}let $t=new Fe;$t.setAttribute("position",new ie(pt,3));let Ut=new Mo($t,new Ir({color:723981,transparent:!0,opacity:.85}));return s.add(Ut),{solids:f,circles:d,meshes:P,update(st){Nt.emissiveIntensity=.12+st*1.4}}}function rp(s,t,e,n,i){let r=n-t,o=i-e;return s.segment(t,e,n,i,a=>{if(Math.max(t,n)<a.x-a.w||Math.min(t,n)>a.x+a.w||Math.max(e,i)<a.z-a.d||Math.min(e,i)>a.z+a.d)return!1;let c=0,h=1;for(let l=0;l<2;l++){let f=l?e:t,d=l?o:r,u=l?a.z-a.d:a.x-a.w,g=l?a.z+a.d:a.x+a.w;if(Math.abs(d)<1e-6){if(f<u||f>g)return!1;continue}let v=(u-f)/d,m=(g-f)/d;if(v>m){let p=v;v=m,m=p}if(c=Math.max(c,v),h=Math.min(h,m),c>h)return!1}return!0})}var vc=class{constructor(t,e){this.traffic=t,this.colliders=e,this.reset()}reset(){this.level=0,this.evade=0,this.speeding=0,this.bustTimer=0,this.lastCrime=-99,this.seen=!1,this.events=this.events||[];for(let t of this.traffic.police)this.traffic.endChase(t)}get evading(){return this.level>0&&!this.seen}get evadeTime(){return 7+this.level*3}sightRange(){return 70+this.level*25}witness(t,e,n){let i=null,r=n;for(let o of this.traffic.police){let a=Math.hypot(o.x-t,o.z-e);a>r||rp(this.colliders,o.x,o.z,t,e)||(i=o,r=a)}return i}crime(t,e,n,i,r,o=!0){if(r-this.lastCrime<2.5&&t!=="police")return!1;let a=o?this.witness(e,n,75+this.level*15):null;if(o&&!a&&this.level===0||o&&!a&&!this.seen)return!1;this.lastCrime=r;let c=this.level;return this.level=Math.min(5,Math.max(this.level+i,t==="police"?2:1)),this.evade=0,this.level>c&&this.events.push({type:"up",level:this.level,kind:t}),a&&this.traffic.startChase(a),!0}update(t,e,n,i,r){if(this.events.length=0,!r){this.level&&this.reset();return}if(e.kmh>125&&this.witness(e.x,e.z,55)?(this.speeding+=t,this.speeding>1.2&&(this.crime("speeding",e.x,e.z,1,n),this.speeding=0)):this.speeding=Math.max(0,this.speeding-t),!this.level){this.seen=!1;return}let a=Math.min(this.traffic.police.length,[0,1,2,3,4,5][this.level]),c=this.traffic.police.filter(f=>f.mode==="chase");if(c.length<a){let f=this.traffic.police.filter(d=>d.mode!=="chase").sort((d,u)=>Math.hypot(d.x-e.x,d.z-e.z)-Math.hypot(u.x-e.x,u.z-e.z))[0];f&&(Math.hypot(f.x-e.x,f.z-e.z)>260?this.traffic.dispatch(f,e,i):this.traffic.startChase(f))}let h=this.sightRange();if(this.seen=c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<h&&!rp(this.colliders,f.x,f.z,e.x,e.z)),this.seen)this.evade=0;else if(this.evade+=t,this.evade>this.evadeTime){this.events.push({type:"evaded"}),this.reset();return}c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<8)&&e.kmh<6?(this.bustTimer+=t,this.bustTimer>2.5&&(this.events.push({type:"busted"}),this.reset())):this.bustTimer=Math.max(0,this.bustTimer-t*2)}sirenLevel(t){let e=1/0;for(let n of this.traffic.police)n.mode==="chase"&&(e=Math.min(e,Math.hypot(n.x-t.x,n.z-t.z)));return Math.max(0,1-e/260)}};var S1=[["sedan",16],["suv",11],["hatch",11],["pickup",7],["taxi",9],["police",5]],pu={sedan:26,suv:20,hatch:22,pickup:12,taxi:0,police:0},T1=["sedan","sedan","suv","hatch","hatch","pickup"],op=["#e9e9e6","#e9e9e6","#151719","#151719","#9ea3a6","#5d6265","#1f3a5f","#8e1c1c","#c9b99a","#2e4a3a","#6b7d8c","#3a2f2a","#7a8f9e","#b85c2a"],ap=11.85,A1=430,lp=210,_i=new Ht,Es=new ve,Zn=new D,Jr=new D(1,1,1),jo=new D(0,1,0),R1=new D(1,0,0),yc=new Ht,mu=new ve,C1=new ve().setFromAxisAngle(jo,Math.PI),Jo=new Ht().makeScale(0,0,0),Mi=new Lt;function hp(s,t){return s==="ns"?-t:t}function gu(s,t){return s==="ns"?t<0?0:Math.PI:t>0?-Math.PI/2:Math.PI/2}function xu(s,t){return s==="ns"?[0,t]:[t,0]}function Qo(s,t,e,n,i){let r=hp(s,e)*ko[n];return s==="ns"?[t+r,i]:[i,t+r]}function cp(s){return Math.atan2(Math.sin(s),Math.cos(s))}function vu(s,t){return s.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},s.customProgramCacheKey=()=>t,s}var yu=new Map;function P1(s){if(yu.has(s))return yu.get(s);let e=Object.entries({trim:"#14181a",dark:"#07090a",chrome:"#b9bec2",plate:"#d6d2c4",rev:"#c9c9c2",amber:"#c9741a"}).map(([i,r])=>{let o=s.parts[i].clone(),a=new Lt(r),c=o.attributes.position.count,h=new Float32Array(c*3);for(let l=0;l<c;l++)h[l*3]=a.r,h[l*3+1]=a.g,h[l*3+2]=a.b;return o.setAttribute("color",new je(h,3)),o}),n={paint:s.parts.paint,glass:s.parts.glass,body:Be(e),head:s.parts.head,tail:s.parts.tail};return yu.set(s,n),n}var I1=s=>Yo(16777215,{metalness:.35,roughness:.32,seams:s,twoTone:["0.015","0.92","0.7"]}),_c=class{constructor(t,e){this.cars=[],this.meshes=[],this.types={},this.parked=[],this.police=[],this.world=null,this.peds=[],this.policePace=.6;let n=$r(e);this.headMat=vu(new Bt({color:16777215,emissive:16773846,emissiveIntensity:1,roughness:.2}),"head-inst"),this.tailMat=vu(new Bt({color:3802885,emissive:16719888,emissiveIntensity:1,roughness:.3}),"tail-inst");let i=Je(e,128,32,(l,f)=>{l.fillStyle="#f7d046",l.fillRect(0,0,f,32),l.fillStyle="#1a1a1a",l.font='800 24px "Barlow Condensed", Impact, sans-serif',l.textAlign="center",l.fillText("TAXI",f/2,25)});this.taxiSignMat=new Bt({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.3}),this.barMat=vu(new Bt({color:1118481,emissive:16777215,emissiveIntensity:1,roughness:.3}),"lightbar-inst"),this.bodyMat=new Bt({vertexColors:!0,roughness:.5,metalness:.4}),this.parked=this.layoutParking();for(let[l,f]of S1){let u=hc(l==="taxi"||l==="police"?"sedan":l),g=f+(pu[l]||0),m={paint:l==="police"?I1(u.seams):Yo(16777215,{metalness:.45,roughness:.38,seams:u.seams}),glass:n.glass,body:this.bodyMat,head:this.headMat,tail:this.tailMat},p={};for(let[I,E]of Object.entries(P1(u))){let w=new ye(E,m[I],g);w.castShadow=I==="paint",(I==="glass"||I==="body")&&w.layers.set(1),w.receiveShadow=!0,w.frustumCulled=!1,w.instanceMatrix.setUsage(ni);for(let N=0;N<g;N++)w.setMatrixAt(N,Jo);t.add(w),p[I]=w,this.meshes.push(w)}for(let I=0;I<g;I++)p.paint.setColorAt(I,Mi.set(l==="taxi"?"#f2c230":ue(op))),p.tail.setColorAt(I,Mi.setScalar(1)),p.head.setColorAt(I,Mi.setScalar(1));let _=new ye(u.wheel.tire,n.tireLite,g*4),M=new ye(u.wheel.rim,n.rim,g*4);for(let I of[_,M]){I.frustumCulled=!1,I.castShadow=!1,I.layers.set(1),I.instanceMatrix.setUsage(ni);for(let E=0;E<g*4;E++)I.setMatrixAt(E,Jo);t.add(I),this.meshes.push(I)}let y=null,b=null;if(l==="taxi"&&(y=new ye(new Kt(.62,.2,.26),this.taxiSignMat,f),y.frustumCulled=!1,t.add(y),this.meshes.push(y)),l==="police"){b=new ye(new Kt(.62,.16,.3),this.barMat,f*2),b.frustumCulled=!1;for(let I=0;I<f*2;I++)b.setColorAt(I,Mi.setScalar(0));t.add(b),this.meshes.push(b)}let A=Math.max(...u.type.cabin.top.map(I=>I[1])),P={name:l,geo:u,parts:p,tire:_,rim:M,sign:y,bar:b,roofY:A,moving:f,cap:g};this.types[l]=P;for(let I=0;I<f;I++){let E={type:P,slot:I,geo:u,police:l==="police",mode:"lane"};this.spawnLane(E,dn.x,dn.z,0,420),this.cars.push(E),E.police&&this.police.push(E)}}let r=Je(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d/2,4,f/2,d/2,d/2);u.addColorStop(0,"rgba(0,0,0,0.75)"),u.addColorStop(.55,"rgba(0,0,0,0.45)"),u.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),o=new He(2.6,5.6);o.rotateX(-Math.PI/2);let a=Object.values(pu).reduce((l,f)=>l+f,0);this.blobs=new ye(o,new nn({map:r,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),this.cars.length+a+1),this.blobs.frustumCulled=!1,this.blobs.renderOrder=1,this.blobs.userData.noAO=!0,t.add(this.blobs);let c=Je(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d*.75,2,f/2,d*.6,d*.6);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(.5,"rgba(255,255,255,0.3)"),u.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),h=new He(6,14);h.rotateX(-Math.PI/2),h.translate(0,0,-9.5),this.poolMat=new nn({map:c,color:16773328,transparent:!0,depthWrite:!1,blending:On,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2}),this.pools=new ye(h,this.poolMat,this.cars.length),this.pools.frustumCulled=!1,this.pools.layers.set(1),this.pools.userData.noAO=!0,t.add(this.pools),this.parkTimer=0,this.nearParked=[],this.refreshParked(dn.x,dn.z)}layoutParking(){let t=[],e=new Yn(48);for(let i of qi){let[r,o]=Ys(i);e.add({x:r,z:o})}let n=i=>i.slice(0,-1).map((r,o)=>[r+27,i[o+1]-27]);for(let[i,r,o]of[["ns",de,pe],["ew",pe,de]])for(let a of r)for(let c of[-1,1])if(!(i==="ns"&&a===Ue&&c<0))for(let[h,l]of n(o))for(let f=h+3.6;f<l-3;f+=7.2){if(!Re(.42))continue;let d=f+gt(-.6,.6),u=i==="ns"?a+c*ap:d,g=i==="ns"?d:a+c*ap;if(e.near(u,g,14,m=>Math.hypot(m.x-u,m.z-g)<14)||u<-300&&Mn.some(m=>Math.abs(g-m.z)<20))continue;let v=i==="ns"?-c:c;t.push({parked:!0,type:ue(T1),x:u,z:g,heading:gu(i,v)+gt(-.04,.04),color:ue(op),hit:null,slot:-1})}return this.parkGrid=new Yn(80).addAll(t),t}refreshParked(t,e){for(let r of Object.values(this.types))for(let o=r.moving;o<r.cap;o++){for(let a of Object.values(r.parts))a.setMatrixAt(o,Jo);for(let a=0;a<4;a++)r.tire.setMatrixAt(o*4+a,Jo),r.rim.setMatrixAt(o*4+a,Jo)}for(let r of this.nearParked)r.slot=-1;let n=[];this.parkGrid.near(t,e,lp,r=>{r.d=Math.hypot(r.x-t,r.z-e),r.slot=-1,r.d<lp&&n.push(r)}),n.sort((r,o)=>r.d-o.d);let i={};this.nearParked=[];for(let r of n){let o=this.types[r.type],a=i[r.type]||0;a>=pu[r.type]||(i[r.type]=a+1,r.slot=o.moving+a,o.parts.paint.setColorAt(r.slot,Mi.set(r.color)),o.parts.head.setColorAt(r.slot,Mi.setScalar(0)),o.parts.tail.setColorAt(r.slot,Mi.setScalar(.12)),this.writeCar(o,r.slot,r.x,r.z,r.heading,0),this.nearParked.push(r))}}writeCar(t,e,n,i,r,o){Es.setFromAxisAngle(jo,r),_i.compose(Zn.set(n,.02,i),Es,Jr);for(let a of Object.values(t.parts))a.setMatrixAt(e,_i);return t.geo.wheels.forEach((a,c)=>{mu.setFromAxisAngle(R1,o*(a.side<0?-1:1)),a.side<0&&mu.premultiply(C1),yc.compose(Zn.set(a.x,a.y,a.z),mu,Jr),yc.premultiply(_i),t.tire.setMatrixAt(e*4+c,yc),t.rim.setMatrixAt(e*4+c,yc)}),_i}spawnLane(t,e,n,i,r,o=null){for(let a=0;a<40;a++){let c=mt()<.5?"ns":"ew",h=(c==="ns"?de:pe).filter(p=>Math.abs(p-(c==="ns"?e:n))<r);if(!h.length)continue;let l=ue(h),f=mt()<.5?1:-1,d=mt()<.5?0:1,u=c==="ns"?_e.clamp(n+gt(-r,r),ge+10,Pe-10):_e.clamp(e+gt(-r,r),Ue+10,Ee-10),[g,v]=Qo(c,l,f,d,u),m=Math.hypot(g-e,v-n);if(!(m<i||m>r)&&!(c==="ns"?pe:de).some(p=>Math.abs(p-u)<24)&&!this.cars.some(p=>p!==t&&p.mode==="lane"&&p.axis===c&&p.road===l&&p.dir===f&&p.lane===d&&Math.abs(p.s-u)<20)){if(o){let p=g-o.position.x,_=v-o.position.z,M=Math.hypot(p,_)||1;if((p*o.fx+_*o.fz)/M>.2&&M<300)continue}return Object.assign(t,{axis:c,road:l,dir:f,lane:d,s:u}),Object.assign(t,{mode:"lane",cruise:t.police?gt(10.5,12.5):gt(11,16.5),speed:9,turn:null,plan:null,decided:null,hit:null,offset:null,braking:!1,blockedTime:0,wheelSpin:0,vx:0,vz:0}),this.place(t),!0}}return t.axis===void 0&&Object.assign(t,{axis:"ns",road:de[1],dir:1,lane:0,s:0}),Object.assign(t,{mode:"lane",cruise:12,speed:0,turn:null,plan:null,hit:null,offset:null,wheelSpin:0,vx:0,vz:0,blockedTime:0}),this.place(t),!1}place(t){if(t.turn){let e=t.turn,n=e.t*Math.PI/2,i=Math.cos(n),r=Math.sin(n);t.x=e.O[0]+e.u[0]*i+e.v[0]*r,t.z=e.O[1]+e.u[1]*i+e.v[1]*r;let o=-e.u[0]*r+e.v[0]*i,a=-e.u[1]*r+e.v[1]*i;t.heading=Math.atan2(-o,-a)}else[t.x,t.z]=Qo(t.axis,t.road,t.dir,t.lane,t.s),t.heading=gu(t.axis,t.dir)}nextCross(t){let e=t.axis==="ns"?pe:de,n=null;for(let i of e){let r=(i-t.s)*t.dir;r>-1&&(n===null||r<(n-t.s)*t.dir)&&(n=i)}return n}exitValid(t,e,n){let i=t==="ns"?pe:de;return e>0?n<i[i.length-1]:n>i[0]}planTurn(t,e){let n=t.axis==="ns"?t.dir<0?"N":"S":t.dir>0?"E":"W",i={N:"E",E:"S",S:"W",W:"N"}[n],r={N:"W",W:"S",S:"E",E:"N"}[n],o=I=>I==="N"?["ns",-1]:I==="S"?["ns",1]:I==="E"?["ew",1]:["ew",-1],a=I=>{let[E,w]=o(I);return E===t.axis?this.exitValid(E,w,e):this.exitValid(E,w,t.road)},c=[];a(n)&&c.push(["straight",t.lane===1?.6:.72]),a(i)&&c.push(["right",t.lane===1?.4:.08]),a(r)&&c.push(["left",t.lane===0?.28:.06]);let h=mt()*c.reduce((I,E)=>I+E[1],0),l=c[0][0];for(let[I,E]of c)if((h-=E)<=0){l=I;break}if(l==="straight")return null;let[f,d]=o(l==="right"?i:r),u=t.lane,g=e,v=Qo(t.axis,t.road,t.dir,t.lane,0),m=Qo(f,g,d,u,0),p=t.axis==="ns"?[v[0],m[1]]:[m[0],v[1]],_=xu(t.axis,t.dir),M=xu(f,d),y=l==="right"?6.5:10.5,b=[p[0]-_[0]*y,p[1]-_[1]*y],A=[p[0]+M[0]*y,p[1]+M[1]*y],P=[b[0]+M[0]*y,b[1]+M[1]*y];return{startS:t.axis==="ns"?b[1]:b[0],O:P,u:[b[0]-P[0],b[1]-P[1]],v:[A[0]-P[0],A[1]-P[1]],t:0,len:y*Math.PI/2,next:{axis:f,road:g,dir:d,lane:u,s:f==="ns"?A[1]:A[0]}}}rejoinLane(t){let e=-Math.sin(t.heading),n=-Math.cos(t.heading),i=Math.abs(n)>Math.abs(e)?"ns":"ew",r=i==="ns"?Math.sign(n)||1:Math.sign(e)||1,o=i==="ns"?t.x:t.z,a=i==="ns"?Yi(o):ys(o),c=(o-a)*hp(i,r),h=Math.abs(c-ko[0])<Math.abs(c-ko[1])?0:1,l=i==="ns"?t.z:t.x,[f,d]=Qo(i,a,r,h,l);Object.assign(t,{mode:"lane",axis:i,road:a,dir:r,lane:h,s:l,turn:null,plan:null,decided:null,hit:null}),t.offset={dx:t.x-f,dz:t.z-d,dh:cp(t.heading-gu(i,r)),t:1},Math.abs(o-a)>ee+6&&this.spawnLane(t,t.x,t.z,0,200)}update(t,e,n,i,r=null){if(this.frozen)return;let o=n.x,a=n.z,c=r?{position:r.position,fx:0,fz:0}:null;if(c){r.getWorldDirection(Zn),c.fx=Zn.x,c.fz=Zn.z;let l=Math.hypot(c.fx,c.fz)||1;c.fx/=l,c.fz/=l}for(let l of this.cars){if(l.mode==="lane"&&Math.hypot(l.x-o,l.z-a)>A1){this.spawnLane(l,o,a,140,380,c);continue}if(l.mode==="chase"){this.chase(l,t,n);continue}if(l.hit){let m=l.hit;l.x+=m.vx*t,l.z+=m.vz*t;let p=Math.exp(-1.8*t);m.vx*=p,m.vz*=p,l.heading+=m.spin*t,m.spin*=Math.exp(-2.5*t),m.t-=t,l.speed=0,this.collideWorld(l),m.t<=0&&this.rejoinLane(l);continue}let f=l.cruise,[d,u]=l.turn?[-Math.sin(l.heading),-Math.cos(l.heading)]:xu(l.axis,l.dir);if(l.turn)f=Math.min(f,8);else{let m=this.nextCross(l);if(m!==null){let p=(m-l.s)*l.dir;p<34&&l.decided!==m&&(l.decided=m,l.plan=this.planTurn(l,m));let _=p-20.5,M=bs(l.axis==="ns"?0:1,e);_>-1&&(M===0||M===1&&_>9)&&(f=Math.min(f,Math.sqrt(Math.max(0,_-.5))*2.4)),l.plan&&(f=Math.min(f,l.plan.next.lane===0?9:7.5)),!l.plan&&!this.exitValid(l.axis,l.dir,m)&&(f=Math.min(f,Math.sqrt(Math.max(0,_))*2))}for(let p of this.cars){if(p===l||p.mode!=="lane"||p.turn||p.axis!==l.axis||p.road!==l.road||p.dir!==l.dir||p.lane!==l.lane)continue;let _=(p.s-l.s)*l.dir;_>0&&_<45&&(f=Math.min(f,Math.max(0,_-7.5)*.9))}}let g=(m,p,_,M)=>{let y=m-l.x,b=p-l.z,A=y*d+b*u,P=Math.abs(y*u-b*d);return A>0&&A<32&&P<M?(f=Math.min(f,Math.max(0,A-_)*.85),!0):!1};g(o,a,6.5,2.6)?l.speed<1&&n.kmh<5&&(l.blockedTime+=t,l.blockedTime>2.5&&(l.blockedTime=-4,i?.(l))):l.blockedTime=Math.max(0,l.blockedTime-t);for(let m of this.peds)g(m.x,m.z,5,2.4);for(let m of this.cars)(m.mode!=="lane"||m.hit)&&m!==l&&g(m.x,m.z,7,2.6);let v=f>l.speed?3.2:9;if(l.speed+=Math.sign(f-l.speed)*Math.min(Math.abs(f-l.speed),v*t),l.braking=f<l.speed-.3||l.speed<.5&&f<.5,l.turn?(l.turn.t+=l.speed*t/l.turn.len,l.turn.t>=1&&(Object.assign(l,l.turn.next),l.turn=null,l.decided=null)):(l.s+=l.speed*l.dir*t,l.plan&&(l.s-l.plan.startS)*l.dir>=0&&(l.turn=l.plan,l.plan=null)),this.place(l),l.offset){let m=l.offset;if(m.t-=t/1.6,m.t<=0)l.offset=null;else{let p=m.t*m.t;l.x+=m.dx*p,l.z+=m.dz*p,l.heading+=m.dh*p}}l.vx=d*l.speed,l.vz=u*l.speed,l.wheelSpin-=l.speed*t/l.geo.type.wheelR}this.updateParked(t),this.collidePlayer(n),this.parkTimer-=t;let h=Math.hypot(o-(this.lastParkX??o),a-(this.lastParkZ??a))>60;(this.parkTimer<=0||h)&&(this.parkTimer=.5,this.lastParkX=o,this.lastParkZ=a,this.refreshParked(o,a))}chase(t,e,n){let i=this.policePace,r=n.x-t.x,o=n.z-t.z,a=Math.hypot(r,o),c=Math.min(a/35,1.1)*i,h=n.x+n.vx*c,l=n.z+n.vz*c,f=Math.atan2(-(h-t.x),-(l-t.z)),d=10+t.speed*.6,u=this.world?.boxGrid,g=A=>{let P=t.x-Math.sin(A)*d,I=t.z-Math.cos(A)*d;return!!u&&u.near(P,I,2,E=>Math.abs(P-E.x)<E.w+1.8&&Math.abs(I-E.z)<E.d+1.8)};if(g(f)){for(let A of[.5,-.5,1,-1,1.6,-1.6])if(!g(f+A)){f+=A;break}}let v=cp(f-t.heading),m=1.9/(1+t.speed*.012);t.heading+=_e.clamp(v,-m*e,m*e);let p=Math.hypot(n.vx,n.vz),_=50*i,M=a>60?_:Math.min(_+2,p+10*i);Math.abs(v)>.9&&(M=Math.min(M,14*Math.min(1,i+.2))),a<9&&p<3&&(M=Math.min(M,2)),t.speed+=_e.clamp(M-t.speed,-14*e,9*i*e);let y=-Math.sin(t.heading),b=-Math.cos(t.heading);t.vx+=(y*t.speed-t.vx)*Math.min(1,e*5),t.vz+=(b*t.speed-t.vz)*Math.min(1,e*5),t.x+=t.vx*e,t.z+=t.vz*e,this.collideWorld(t),t.wheelSpin-=t.speed*e/t.geo.type.wheelR,t.braking=M<t.speed-1}collideWorld(t){let e=this.world?.boxGrid;e&&e.near(t.x,t.z,2,n=>{let i=n.w+1.1-Math.abs(t.x-n.x),r=n.d+1.1-Math.abs(t.z-n.z);i<=0||r<=0||(i<r?(t.x+=Math.sign(t.x-n.x)*i,t.vx*=-.2):(t.z+=Math.sign(t.z-n.z)*r,t.vz*=-.2),t.speed*=.6)}),t.x=_e.clamp(t.x,he.minX+60,he.maxX),t.z=_e.clamp(t.z,he.minZ,he.maxZ)}startChase(t){if(t.mode==="chase")return;t.mode="chase",t.turn=null,t.plan=null,t.hit=null,t.offset=null;let e=-Math.sin(t.heading),n=-Math.cos(t.heading);t.vx=e*t.speed,t.vz=n*t.speed}endChase(t){t.mode==="chase"&&(this.rejoinLane(t),t.speed=Math.min(t.speed,10))}dispatch(t,e,n){let i={position:n.position,fx:0,fz:0};n.getWorldDirection(Zn);let r=Math.hypot(Zn.x,Zn.z)||1;i.fx=Zn.x/r,i.fz=Zn.z/r,this.spawnLane(t,e.x,e.z,110,240,i),this.startChase(t)}updateParked(t){for(let e of this.nearParked){if(!e.hit)continue;let n=e.hit;e.x+=n.vx*t,e.z+=n.vz*t,e.heading+=n.spin*t;let i=Math.exp(-2.4*t);n.vx*=i,n.vz*=i,n.spin*=i,Math.hypot(n.vx,n.vz)<.05&&Math.abs(n.spin)<.02&&(e.hit=null),this.writeCar(this.types[e.type],e.slot,e.x,e.z,e.heading,0)}}collidePlayer(t){let e=[-Math.sin(t.heading),-Math.cos(t.heading)],n=[...this.cars,...this.nearParked];this.lastHit=null;for(let i of n){let r=t.x-i.x,o=t.z-i.z;if(r*r+o*o>64)continue;let a=!!i.parked,c=[-Math.sin(i.heading),-Math.cos(i.heading)],l=(a?4.7:i.geo.type.length)/2-1.05;for(let f of[-1.3,1.3])for(let d of[-l,l]){let u=t.x+e[0]*f,g=t.z+e[1]*f,v=i.x+c[0]*d,m=i.z+c[1]*d,p=u-v,_=g-m,M=Math.hypot(p,_);if(M>2.15||M<1e-4)continue;p/=M,_/=M;let y=2.15-M;t.x+=p*y*.6,t.z+=_*y*.6;let b=a?i.hit?i.hit.vx:0:i.mode==="chase"?i.vx:i.hit?i.hit.vx:c[0]*i.speed,A=a?i.hit?i.hit.vz:0:i.mode==="chase"?i.vz:i.hit?i.hit.vz:c[1]*i.speed,P=(t.vx-b)*p+(t.vz-A)*_;if(P<0){let I=a?.55:.5,E=-1.3*P*I;t.vx+=E*p*(a?.8:1),t.vz+=E*_*(a?.8:1),t.impact=Math.max(t.impact,-P),this.lastHit={car:i,parked:a,police:!!i.police,speed:-P,x:(u+v)/2,z:(g+m)/2},t.registerHit?.(this.lastHit.x,this.lastHit.z,-P),(!t.contact||-P>t.contact.speed)&&(t.contact={x:this.lastHit.x,z:this.lastHit.z,speed:-P,nx:p,nz:_}),i.mode==="chase"?(i.vx-=E*p,i.vz-=E*_):(i.hit||(i.hit={vx:b,vz:A,spin:0,t:0}),i.hit.vx-=E*p,i.hit.vz-=E*_,i.hit.spin+=(mt()-.5)*Math.min(-P,20)*.25,i.hit.t=2.8,i.turn=null,i.plan=null)}else!i.hit&&!a&&i.mode!=="chase"&&(i.hit={vx:-p*1.5,vz:-_*1.5,spin:0,t:.6});i.x-=p*y*.4,i.z-=_*y*.4}}}sync(t,e,n=0){let i=0;this.cars.forEach((r,o)=>{let a=r.type,c=this.writeCar(a,r.slot,r.x,r.z,r.heading,r.wheelSpin);if(a.sign){let h=c.clone().multiply(new Ht().makeTranslation(0,a.roofY+.1,.1));a.sign.setMatrixAt(r.slot,h)}if(a.bar)for(let h=0;h<2;h++){let l=c.clone().multiply(new Ht().makeTranslation(h?.32:-.32,a.roofY+.09,.1));a.bar.setMatrixAt(r.slot*2+h,l);let f=r.mode==="chase"&&Math.sin(n*18+h*Math.PI)>0?1:0;a.bar.setColorAt(r.slot*2+h,f?h?Mi.setRGB(.3,.5,6):Mi.setRGB(6,.2,.15):Mi.setRGB(.04,.04,.05))}a.parts.tail.setColorAt(r.slot,Mi.setScalar(r.braking?4:1)),Es.setFromAxisAngle(jo,r.heading),_i.compose(Zn.set(r.x,.035,r.z),Es,Jr),this.blobs.setMatrixAt(i++,_i),this.pools.setMatrixAt(o,_i)});for(let r of this.nearParked)Es.setFromAxisAngle(jo,r.heading),_i.compose(Zn.set(r.x,.035,r.z),Es,Jr),this.blobs.setMatrixAt(i++,_i);Es.setFromAxisAngle(jo,e.heading),_i.compose(Zn.set(e.x,e.y+.035,e.z),Es,Jr.set(1.05,1,1)),Jr.set(1,1,1),this.blobs.setMatrixAt(i++,_i),this.blobs.count=i,this.blobs.instanceMatrix.needsUpdate=!0,this.pools.instanceMatrix.needsUpdate=!0;for(let r of this.meshes)r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0);this.headMat.emissiveIntensity=1+t*8,this.tailMat.emissiveIntensity=.8+t*2.2,this.taxiSignMat.emissiveIntensity=.3+t*2.5,this.poolMat.opacity=t*.55}nearest(t,e){let n=1/0;for(let i of this.cars)n=Math.min(n,Math.hypot(i.x-t,i.z-e));return n}};var zn=62.5,Qr=zn*2,nr=Qr*4,er=140,D1=["#f1c7a5","#e0ac85","#c68b62","#a26a45","#7a4b2f","#5a3824"],L1=["#e9e6dd","#20242a","#c23b2e","#2d5d8a","#f2c14e","#3f7a52","#7a4a8c","#e07a4a","#9fb3c4","#d4d0c4","#1f3b5c","#a83c62"],F1=["#26303d","#1b1d20","#5c6b7a","#c9b79a","#3b4652","#6f5b45","#2f3b2c","#e5e1d6"];function U1(){let s=[],t=(e,n,i,r,o,a)=>{e.translate(n,i,r);let c=e.index?e.toNonIndexed():e,h=c.attributes.position.count;c.setAttribute("aPart",new ie(new Float32Array(h).fill(o),1)),c.setAttribute("aRegion",new ie(new Float32Array(h).fill(a),1)),c.attributes.uv&&c.deleteAttribute("uv"),s.push(c)};for(let[e,n]of[[-1,1],[1,2]])t(new Kt(.15,.82,.17),e*.1,.49,0,n,2),t(new Kt(.16,.09,.28),e*.1,.045,-.05,n,3);t(new Kt(.36,.2,.21),0,.96,0,0,2),t(new Kt(.42,.56,.23),0,1.33,0,0,1),t(new ce(.05,.055,.1,8),0,1.65,0,0,0),t(new mn(.115,12,10),0,1.79,-.01,0,0),t(new mn(.122,12,8,0,Math.PI*2,0,Math.PI*.55),0,1.81,.012,0,4);for(let[e,n]of[[-1,3],[1,4]])t(new Kt(.1,.34,.12),e*.27,1.43,0,n,1),t(new Kt(.085,.3,.1),e*.275,1.11,0,n,0);return Be(s)}var up=`
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
}`;function z1(){let s=new Bt({color:16777215,roughness:.82});s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${up}
attribute vec3 aShirt; attribute vec3 aPants; attribute vec4 aSkin; varying vec3 vPedCol;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
pedPose();
objectNormal = pedBody * (pedLimb * objectNormal);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed = pedTransform(transformed);
        vec3 hair = mix(vec3(0.05, 0.035, 0.02), vec3(0.55, 0.42, 0.22), aSkin.w);
        vPedCol = aRegion < 0.5 ? aSkin.rgb : aRegion < 1.5 ? aShirt : aRegion < 2.5 ? aPants : aRegion < 3.5 ? vec3(0.06) : hair;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPedCol;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = vPedCol;`)},s.customProgramCacheKey=()=>"pedestrian";let t=new Dr({depthPacking:Bl});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${up}`).replace("#include <begin_vertex>",`#include <begin_vertex>
pedPose();
transformed = pedTransform(transformed);`)},t.customProgramCacheKey=()=>"pedestrian-depth",{mat:s,depth:t}}function _u(s,t,e,n){let i=(e%nr+nr)%nr,r=Math.floor(i/Qr),o=i-r*Qr;return r===0?(n.x=s-zn+o,n.z=t-zn,n.dx=1,n.dz=0):r===1?(n.x=s+zn,n.z=t-zn+o,n.dx=0,n.dz=1):r===2?(n.x=s+zn-o,n.z=t+zn,n.dx=-1,n.dz=0):(n.x=s-zn,n.z=t+zn-o,n.dx=0,n.dz=-1),n}var Mc=s=>s*Qr,dp=[[-1,-1],[1,-1],[1,1],[-1,1]];function fp(s,t){return dp.findIndex(([e,n])=>e===s&&n===t)}var bc=class{constructor(t){let{mat:e,depth:n}=z1(),i=U1();this.aWalk=new Ye(new Float32Array(er*4),4).setUsage(ni);let r=new Float32Array(er*3),o=new Float32Array(er*3),a=new Float32Array(er*4),c=new Lt;for(let h=0;h<er;h++)r.set(c.set(ue(L1)).toArray(),h*3),o.set(c.set(ue(F1)).toArray(),h*3),a.set([...c.set(ue(D1)).toArray(),mt()<.2?1:mt()*.4],h*4);i.setAttribute("aWalk",this.aWalk),i.setAttribute("aShirt",new Ye(r,3)),i.setAttribute("aPants",new Ye(o,3)),i.setAttribute("aSkin",new Ye(a,4)),this.mesh=new ye(i,e,er),this.mesh.customDepthMaterial=n,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(ni),this.mesh.name="pedestrians",t.add(this.mesh),this.peds=[],this.events=[],this.onRoad=[],this.tmp={x:0,z:0,dx:0,dz:0},this.m=new Ht,this.q=new ve,this.e=new cn(0,0,0,"YXZ");for(let h=0;h<er;h++){let l={i:h,scale:gt(.9,1.08)};this.place(l,dn.x,dn.z,!0),this.peds.push(l)}}place(t,e,n,i=!1){let r=[],o=Zs(e),a=Ho(n),c=i?330:300;for(let f=o-320;f<=o+320;f+=160)for(let d=a-320;d<=a+320;d+=160){if(!Wr.includes(f)||!xs.includes(d)||Math.hypot(f-e,d-n)>=c)continue;let u=1+Math.round(Xi[vi(f,d)][2]*3);for(let g=0;g<u;g++)r.push([f,d])}let[h,l]=r.length?ue(r):[o,a];Object.assign(t,{cx:h,cz:l,t:mt()*nr,dir:Re(.5)?1:-1,speed:gt(1.05,1.55),lateral:gt(-.9,.9),state:Re(.12)?"idle":"walk",timer:gt(3,9),phase:mt()*6,amp:0,fall:0,lean:0,vx:0,vz:0,cross:null,x:0,z:0,heading:0}),this.pathPoint(t),t.x=t.px,t.z=t.pz}pathPoint(t){let e=_u(t.cx,t.cz,t.t,this.tmp),n=e.dz,i=-e.dx;t.px=e.x+n*t.lateral,t.pz=e.z+i*t.lateral,t.pdx=e.dx*t.dir,t.pdz=e.dz*t.dir}tryCross(t,e,n){let[i,r]=dp[e],o=[],a=t.cx+i*160,c=t.cz+r*160;if(Wr.includes(a)&&o.push({axis:0,tx:a,tz:t.cz,corner:fp(-i,r)}),xs.includes(c)&&o.push({axis:1,tx:t.cx,tz:c,corner:fp(i,-r)}),!o.length||!Re(.45))return!1;let h=ue(o),l=_u(t.cx,t.cz,Mc(e),{}),f=_u(h.tx,h.tz,Mc(h.corner),{});return t.cross={...h,ax:l.x,az:l.z,bx:f.x,bz:f.z,f:0,len:Math.hypot(f.x-l.x,f.z-l.z)},t.state="wait",t.timer=25,!0}update(t,e,n){let i=-Math.sin(n.heading),r=-Math.cos(n.heading),o=Math.cos(n.heading),a=-Math.sin(n.heading),c=Math.abs(n.speed);this.onRoad.length=0,this.events.length=0;let h=this.aWalk.array;for(let l of this.peds){Math.hypot(l.x-n.x,l.z-n.z)>330&&(l.state==="walk"||l.state==="idle")&&this.place(l,n.x,n.z);let f=0,d=l.x-n.x,u=l.z-n.z,g=d*i+u*r,v=d*o+u*a;if(c>4&&g>-1&&g<c*1.25+5&&Math.abs(v)<2.6&&Math.abs(n.y-ne)<2.5&&l.state!=="down"&&l.state!=="getup"&&l.state!=="dodge"){let y=Math.abs(v)>.2?Math.sign(v):Re(.5)?1:-1;l.vx=o*y*5.2+i*.6,l.vz=a*y*5.2+r*.6,l.state="dodge",l.timer=.55,l.resume=l.cross?"cross":"return"}let p=Math.hypot(l.x-(n.x+i*1.3*Math.sign(g||1)),l.z-(n.z+r*1.3*Math.sign(g||1)));if(l.state!=="down"&&l.state!=="getup"&&Math.hypot(d,u)<3&&p<1.4)if(c>5)l.state="down",l.timer=2.6,l.vx=n.vx*.35+o*Math.sign(v||1)*1.5,l.vz=n.vz*.35+a*Math.sign(v||1)*1.5,l.heading=Math.atan2(-l.vx,-l.vz)+Math.PI,this.events.push({type:"hit",x:l.x,z:l.z,speed:c});else{let y=Math.max(p,.01);l.x+=(l.x-n.x)/Math.hypot(d,u)*(1.4-y)*.5,l.z+=(l.z-n.z)/Math.hypot(d,u)*(1.4-y)*.5}switch(l.state){case"idle":{l.timer-=t,l.timer<=0&&(l.state="walk",l.timer=gt(6,20));break}case"walk":{f=l.speed;let y=l.t;l.t+=l.dir*l.speed*t;let b=Math.floor(y/Qr),A=Math.floor(l.t/Qr);if(b!==A){let P=((l.dir>0?A:b)%4+4)%4;this.tryCross(l,P,e)&&(l.t=Mc(P))}l.t=(l.t%nr+nr)%nr,l.timer-=t,l.timer<=0&&!l.cross&&(Re(.25)?(l.state="idle",l.timer=gt(2,6)):(l.timer=gt(5,20),Re(.2)&&(l.dir*=-1))),this.pathPoint(l),l.x+=(l.px-l.x)*Math.min(1,t*6),l.z+=(l.pz-l.z)*Math.min(1,t*6),l.heading=Math.atan2(-l.pdx,-l.pdz);break}case"wait":{l.timer-=t;let y=l.cross;l.x+=(y.ax-l.x)*Math.min(1,t*3),l.z+=(y.az-l.z)*Math.min(1,t*3),l.heading=Math.atan2(-(y.bx-y.ax),-(y.bz-y.az));let b=bs(y.axis,e),A=(e%28+28)%28,P=y.axis===0?A:(A+14)%28;b===0&&P>=13&&P<17?l.state="cross":l.timer<=0&&(l.cross=null,l.state="walk");break}case"cross":{let y=l.cross;f=1.85,y.f=Math.min(1,y.f+f*t/y.len);let b=y.ax+(y.bx-y.ax)*y.f,A=y.az+(y.bz-y.az)*y.f;l.x+=(b-l.x)*Math.min(1,t*8),l.z+=(A-l.z)*Math.min(1,t*8),l.heading=Math.atan2(-(y.bx-y.ax),-(y.bz-y.az)),this.onRoad.push(l),y.f>=1&&(l.cx=y.tx,l.cz=y.tz,l.t=Mc(y.corner),l.cross=null,l.state="walk",l.dir=Re(.5)?1:-1);break}case"dodge":{f=5,l.x+=l.vx*t,l.z+=l.vz*t,l.vx*=Math.exp(-2.5*t),l.vz*=Math.exp(-2.5*t),l.heading=Math.atan2(-l.vx,-l.vz),l.timer-=t,l.timer<=0&&(l.state=l.resume==="cross"&&l.cross?"cross":"return");break}case"down":{l.x+=l.vx*t,l.z+=l.vz*t;let y=Math.exp(-3.5*t);l.vx*=y,l.vz*=y,l.fall=Math.min(1.5,l.fall+t*6),l.timer-=t,l.timer<=0&&(l.state="getup",l.timer=.9);break}case"getup":{l.fall=Math.max(0,l.fall-t*1.9),l.timer-=t,l.timer<=0&&(l.fall=0,l.state=l.cross?"cross":"return");break}case"return":{this.pathPoint(l);let y=l.px-l.x,b=l.pz-l.z,A=Math.hypot(y,b);if(f=2.2,A<.25){l.state="walk";break}l.x+=y/A*Math.min(A,f*t),l.z+=b/A*Math.min(A,f*t),l.heading=Math.atan2(-y,-b),Math.abs(l.x-l.cx)<zn+1&&Math.abs(l.z-l.cz)<zn+1;break}}(l.state==="dodge"||l.state==="return")&&(Math.abs(l.x-l.cx)>zn+3||Math.abs(l.z-l.cz)>zn+3)&&this.onRoad.push(l);let _=l.state==="down"||l.state==="getup"?0:f;l.amp+=((_>.1?Math.min(.45+_*.12,1.05):0)-l.amp)*Math.min(1,t*6),l.phase+=t*(_>.1?3.2+_*1.6:0),l.lean+=((_>3?.18:.02)-l.lean)*Math.min(1,t*5),h[l.i*4]=l.phase,h[l.i*4+1]=l.amp,h[l.i*4+2]=l.lean,h[l.i*4+3]=l.fall;let M=l.state==="cross"||l.state==="down"||l.state==="dodge"||l.state==="getup"?Math.abs(l.x-l.cx)<zn+4.5&&Math.abs(l.z-l.cz)<zn+4.5?ne:.02:ne;this.q.setFromEuler(this.e.set(0,l.heading,0)),this.m.compose(new D(l.x,M,l.z),this.q,new D(l.scale,l.scale,l.scale)),this.mesh.setMatrixAt(l.i,this.m)}this.mesh.instanceMatrix.needsUpdate=!0,this.aWalk.needsUpdate=!0}};var N1=`
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
}`,O1=`
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
}`,B1=`
uniform sampler2D map;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor * t.a * vAlpha, 1.0);
}`,ir=class{constructor(t,e,{texture:n,additive:i=!1,drag:r=1.5,gravity:o=0,grow:a=1.5}){this.max=e,this.drag=r,this.gravity=o,this.grow=a,this.count=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.rot=new Float32Array(e),this.spin=new Float32Array(e),this.col=new Float32Array(e*3);let c=new Po,h=new He(1,1);c.index=h.index,c.setAttribute("position",h.attributes.position),c.setAttribute("uv",h.attributes.uv),this.aPos=new Ye(new Float32Array(e*3),3).setUsage(ni),this.aData=new Ye(new Float32Array(e*4),4).setUsage(ni),this.aColor=new Ye(new Float32Array(e*3),3).setUsage(ni),c.setAttribute("aPos",this.aPos),c.setAttribute("aData",this.aData),c.setAttribute("aColor",this.aColor),c.instanceCount=0,this.uniforms={map:{value:n},light:{value:new Lt(1,1,1)}};let l=new Oe({uniforms:this.uniforms,vertexShader:N1,fragmentShader:i?B1:O1,transparent:!0,depthWrite:!1,blending:i?On:Ni});this.mesh=new Ot(c,l),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i?6:5,this.mesh.userData.noAO=!0,this.mesh.layers.set(1),this.geo=c,t.add(this.mesh)}emit(t,e,n,i,r,o,a,c,h,l=1,f=1,d=1){let u=this.count;if(u>=this.max){let g=0;for(let v=1;v<this.max;v++)this.life[v]<this.life[g]&&(g=v);u=g}else this.count++;this.p.set([t,e,n],u*3),this.v.set([i,r,o],u*3),this.col.set([l,f,d],u*3),this.life[u]=this.maxLife[u]=c,this.size[u]=a,this.alpha[u]=h,this.rot[u]=mt()*Math.PI*2,this.spin[u]=(mt()-.5)*1.2}update(t){let e=Math.exp(-this.drag*t),n=0;for(let i=0;i<this.count;i++){if(this.life[i]-=t,this.life[i]<=0)continue;if(n!==i){for(let[c,h]of[[this.p,3],[this.v,3],[this.col,3]])c.copyWithin(n*h,i*h,i*h+h);this.life[n]=this.life[i],this.maxLife[n]=this.maxLife[i],this.size[n]=this.size[i],this.alpha[n]=this.alpha[i],this.rot[n]=this.rot[i],this.spin[n]=this.spin[i]}let r=n*3;this.v[r]*=e,this.v[r+1]=this.v[r+1]*e+this.gravity*t,this.v[r+2]*=e,this.p[r]+=this.v[r]*t,this.p[r+1]+=this.v[r+1]*t,this.p[r+2]+=this.v[r+2]*t,this.rot[n]+=this.spin[n]*t;let o=1-this.life[n]/this.maxLife[n],a=Math.min(o*6,1)*(1-o)*(1-o);this.aPos.array.set([this.p[r],this.p[r+1],this.p[r+2]],r),this.aData.array.set([this.size[n]*(1+o*this.grow),this.alpha[n]*a,this.rot[n],o],n*4),this.aColor.array.set([this.col[r],this.col[r+1],this.col[r+2]],r),n++}this.count=n,this.geo.instanceCount=n,this.aPos.needsUpdate=this.aData.needsUpdate=this.aColor.needsUpdate=!0}};function pp(s,t){let e=Je(t,128,128,(i,r,o)=>{let a=i.createImageData(r,o);for(let c=0;c<o;c++)for(let h=0;h<r;h++){let l=(h-r/2)/(r/2),f=(c-o/2)/(o/2),d=Math.sqrt(l*l+f*f),u=.65+.35*Math.sin(h*.31+Math.sin(c*.23)*3)*Math.sin(c*.27+Math.cos(h*.19)*2),g=Math.max(0,1-d)**1.6*u,v=(c*r+h)*4;a.data[v]=a.data[v+1]=a.data[v+2]=200+u*55,a.data[v+3]=Math.min(255,g*255)}i.putImageData(a,0,0)},{srgb:!1}),n=Je(t,64,64,(i,r,o)=>{let a=i.createRadialGradient(r/2,o/2,0,r/2,o/2,r/2);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,255,255,0.6)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,r,o)},{srgb:!1});return{smoke:new ir(s,420,{texture:e,drag:1.1,gravity:.35,grow:2.6}),dust:new ir(s,200,{texture:e,drag:1.6,gravity:-.2,grow:2}),sparks:new ir(s,160,{texture:n,additive:!0,drag:.6,gravity:-9.8,grow:-.6}),flames:new ir(s,160,{texture:n,additive:!0,drag:3,gravity:.5,grow:-.4}),water:new ir(s,360,{texture:e,drag:.35,gravity:-9.8,grow:1.6})}}var wc=class{constructor(t,e=900){this.max=e,this.index=0;let n=new He(1,1);n.rotateX(-Math.PI/2),this.mat=new Bt({color:328965,transparent:!0,opacity:.55,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),this.mesh=new ye(n,this.mat,e),this.mesh.instanceMatrix.setUsage(ni),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.renderOrder=1,this.mesh.userData.noAO=!0;let i=new Ht().makeScale(0,0,0);for(let r=0;r<e;r++)this.mesh.setMatrixAt(r,i);this.last=new Map,t.add(this.mesh),this.m=new Ht,this.q=new ve,this.v=new D,this.s=new D,this.up=new D(0,1,0)}add(t,e,n,i,r,o=.26){let a=this.last.get(t);if(!r){this.last.delete(t);return}if(a){let c=e-a[0],h=i-a[2],l=Math.hypot(c,h);if(l<.35)return;l<4&&(this.q.setFromAxisAngle(this.up,Math.atan2(c,h)),this.m.compose(this.v.set((e+a[0])/2,n+.03,(i+a[2])/2),this.q,this.s.set(o,1,l+.05)),this.mesh.setMatrixAt(this.index,this.m),this.index=(this.index+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0)}this.last.set(t,[e,n,i])}};var ta=_e.damp,Mu=["CHASE CAMERA","FAR CHASE CAMERA","HOOD CAMERA","CINEMATIC CAMERA"],Ec=class{constructor(t){this.camera=t,this.mode=0,this.pos=new D,this.look=new D,this.desired=new D,this.target=new D,this.yaw=0,this.shake=0,this.cine=null,this.cineTimer=0,this.baseFov=55,this.rumble=0,this.clock=0}snap(t){this.yaw=t.heading,this.cine=null,this.compute(t,0),this.pos.copy(this.desired),this.look.copy(this.target),this.apply(0)}compute(t,e){let n=Math.min(Math.abs(t.speed)/55,1),i=Math.hypot(t.vx,t.vz)>4?Math.atan2(-t.vx,-t.vz):t.heading,r=t.heading+mp(i-t.heading)*.35;t.speed<-1&&(r=t.heading),this.yaw=e?this.yaw+mp(r-this.yaw)*(1-Math.exp(-4.5*e)):r;let o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=t.group.position;if(this.mode===2){let h=Math.sin(t.heading),l=Math.cos(t.heading);this.desired.set(c.x-h*.15,c.y+1.18,c.z-l*.15),this.target.set(c.x-h*30,c.y+.9,c.z-l*30)}else if(this.mode===3)this.cinematic(t,e);else{let h=this.mode===1,l=(h?11.5:7.4)+n*1.6,f=(h?4.6:2.45)+n*.25;this.desired.set(c.x+o*l,c.y+f,c.z+a*l),this.target.set(c.x-o*6,c.y+1.15,c.z-a*6)}}cinematic(t,e){let n=t.group.position;this.cineTimer-=e;let i=-Math.sin(t.heading),r=-Math.cos(t.heading);if(!this.cine||this.cine.distanceTo(n)>70||this.cineTimer<=0){let a=Math.random()<.5?-1:1,c=28+Math.abs(t.speed)*1.6;this.cine=new D(n.x+i*c+r*a*7,n.y+.7+Math.random()*2.5,n.z+r*c-i*a*7),this.cineTimer=7,this.pos.copy(this.cine)}this.desired.copy(this.cine),this.target.set(n.x,n.y+.8,n.z)}apply(t){let e=this.camera;if(e.position.copy(this.pos),this.shake>.001){let n=this.shake;e.position.x+=(Math.random()-.5)*n,e.position.y+=(Math.random()-.5)*n,e.position.z+=(Math.random()-.5)*n,this.shake=ta(this.shake,0,6,t||.016)}if(this.rumble>5e-4){let n=this.clock,i=this.rumble;e.position.y+=(Math.sin(n*37)*.6+Math.sin(n*61.3)*.4)*i,e.position.x+=(Math.sin(n*29.1+1.3)*.5+Math.sin(n*53.7)*.3)*i*.6}e.lookAt(this.look)}update(t,e){this.compute(t,e),this.mode===2?(this.pos.copy(this.desired),this.look.copy(this.target)):this.mode===3?(this.pos.lerp(this.desired,1-Math.exp(-3*e)),this.look.lerp(this.target,1-Math.exp(-10*e))):(this.pos.x=ta(this.pos.x,this.desired.x,9,e),this.pos.z=ta(this.pos.z,this.desired.z,9,e),this.pos.y=ta(this.pos.y,this.desired.y,6,e),this.look.lerp(this.target,1-Math.exp(-12*e)));let n=Math.min(Math.abs(t.speed)/60,1)*12,i=(this.mode===2?68:this.mode===3?40:this.baseFov)+(this.mode===3?0:n+(t.boosting?7:0));this.camera.fov=ta(this.camera.fov,i,3,e),this.camera.updateProjectionMatrix(),this.clock+=e;let r=_e.clamp((Math.abs(t.speed)-26)/40,0,1),o=t.surface==="road"?1:2.2;this.rumble=this.mode===3?0:(r*.02+(t.boosting?.014:0))*o*(this.mode===2?.6:1),t.boosting&&(this.shake=Math.max(this.shake,.02)),this.apply(e)}orbit(t,e){let n=t.group.position,i=2.25+Math.sin(e*.05)*.5;this.camera.position.set(n.x+Math.sin(i)*9.5,n.y+1.6+Math.sin(e*.11)*.25,n.z+Math.cos(i)*9.5),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.camera.lookAt(n.x-1.5,n.y+1.1,n.z-2)}};function mp(s){return Math.atan2(Math.sin(s),Math.cos(s))}var ri=[];for(let s=0;s<de.length;s++)for(let t=0;t<pe.length;t++)ri.push({x:de[s],z:pe[t],i:s,j:t});var ea=(s,t)=>s>=0&&t>=0&&s<de.length&&t<pe.length?s*pe.length+t:-1;function gp(s,t){let e=null;return de.forEach((n,i)=>{let r=Math.min(Math.max(t,pe[0]),pe[pe.length-1]),o=Math.hypot(s-n,t-r);if(!e||o<e.d){let a=pe.findIndex(h=>h>=r);a<0&&(a=pe.length-1);let c=pe[a]===r?a:Math.max(0,a-1);e={d:o,x:n,z:r,ends:[ea(i,c),ea(i,a)]}}}),pe.forEach((n,i)=>{let r=Math.min(Math.max(s,de[0]),de[de.length-1]),o=Math.hypot(s-r,t-n);if(o<e.d){let a=de.findIndex(h=>h>=r);a<0&&(a=de.length-1);let c=de[a]===r?a:Math.max(0,a-1);e={d:o,x:r,z:n,ends:[ea(c,i),ea(a,i)]}}}),e}function bu(s,t,e,n){let i=gp(s,t),r=gp(e,n),o=ri.length,a=o,c=o+1,h=m=>m===a?i:m===c?r:ri[m],l=m=>{if(m===a)return i.ends.map(_=>[_,Math.hypot(ri[_].x-i.x,ri[_].z-i.z)]);let p=[];if(m<o){let{i:_,j:M}=ri[m];for(let[y,b]of[[1,0],[-1,0],[0,1],[0,-1]]){let A=ea(_+y,M+b);A>=0&&p.push([A,Math.hypot(ri[A].x-ri[m].x,ri[A].z-ri[m].z)])}r.ends.includes(m)&&p.push([c,Math.hypot(r.x-ri[m].x,r.z-ri[m].z)])}return p};if(i.ends[0]===r.ends[0]&&i.ends[1]===r.ends[1])return[[s,t],[i.x,i.z],[r.x,r.z],[e,n]];let d=new Float64Array(o+2).fill(1/0),u=new Int32Array(o+2).fill(-1),g=new Uint8Array(o+2);for(d[a]=0;;){let m=-1,p=1/0;for(let _=0;_<o+2;_++)!g[_]&&d[_]<p&&(m=_,p=d[_]);if(m<0||m===c)break;g[m]=1;for(let[_,M]of l(m)){let y=p+M;y<d[_]&&(d[_]=y,u[_]=m)}}let v=[];for(let m=c;m>=0;m=u[m]){let p=h(m);if(v.unshift([p.x,p.z]),m===a)break}return v.unshift([s,t]),v.push([e,n]),v}function xp(s){let t=0;for(let e=1;e<s.length;e++)t+=Math.hypot(s[e][0]-s[e-1][0],s[e][1]-s[e-1][1]);return t}var wu=s=>document.getElementById(s),le={x0:-760,x1:Ee+140,z0:he.minZ-90,z1:he.maxZ+90},Sc=.6;function k1(s){let t=document.createElement("canvas");t.width=Math.round((le.x1-le.x0)*Sc),t.height=Math.round((le.z1-le.z0)*Sc);let e=t.getContext("2d");e.scale(Sc,Sc),e.translate(-le.x0,-le.z0);let n=le.x1-le.x0,i=le.z1-le.z0;e.fillStyle="#16343f",e.fillRect(le.x0,le.z0,n,i),e.fillStyle="#243229",e.fillRect(In,le.z0,le.x1-In,i),e.fillStyle="#1e2a2e",e.fillRect(In,he.minZ,he.maxX-In,he.maxZ-he.minZ),e.fillStyle="#6d6047",e.fillRect(In,le.z0,fn-In,i),e.fillStyle="#2d4433",e.fillRect(fn,le.z0,We.to-fn,i);for(let[r,o,a]of Ai())e.fillStyle="#29353a",e.fillRect(r-ii/2,o-ii/2,ii,ii),a.kind==="park"&&(e.fillStyle="#2f4a35",e.fillRect(r-55,o-55,110,110)),a.kind==="parking"&&(e.fillStyle="#323b40",e.fillRect(r-45,o-45,104,104));e.fillStyle="#3e4f56";for(let r of s)e.fillRect(r.x-r.w,r.z-r.d,r.w*2,r.d*2);e.fillStyle="#5b6b6e";for(let r of de)e.fillRect(r-ee,ge-ee,ee*2,Pe-ge+ee*2);for(let r of pe)e.fillRect(Ue-ee,r-ee,Ee-Ue+ee*2,ee*2);e.fillStyle="#7d6a52";for(let r of Mn)e.fillRect(r.x1,r.z-r.halfWidth,r.rampStart-r.x1,r.halfWidth*2);return t}function H1(){let s={};for(let[n,i]of Ai()){let r=vi(n,i),o=s[r]||(s[r]=[0,0,0]);o[0]+=n,o[1]+=i,o[2]++}let t={eastside:[-40,-420],foothills:[-60,380],seaview:[0,60],palm:[40,-40],marina:[60,0]},e=Object.entries(s).map(([n,[i,r,o]])=>[Xi[n][0],i/o+(t[n]?.[0]||0),r/o+(t[n]?.[1]||0)]);return e.push([Xi.ocean[0],-385,0]),e}var Tc=class{constructor(t){this.canvas=wu("minimap"),this.ctx=this.canvas.getContext("2d"),this.mapImage=k1(t),this.expanded=!1,this.labels=H1(),this.view={zoom:1,x:(le.x0+le.x1)/2,z:(le.z0+le.z1)/2},this.raceKey="",this.route=null,this.routeKey="",this.routeAt=[0,0],this.raceRoute=null,this.els={};for(let e of["speed","gear","tach-fill","boost-fill","district","road-name","heading","race-time","checkpoint-distance","clock","rpm-readout"])this.els[e]=wu(e);this.last={}}set(t,e){this.last[t]!==e&&(this.last[t]=e,this.els[t]&&(this.els[t].textContent=e))}updateRoute(t,e){let n=null;if(e.mode==="race"&&e.checkpoint<e.route.length?n=e.route[e.checkpoint]:e.waypoint&&(n=e.waypoint),!n){this.route=null,this.routeKey="";return}let i=n.join(",")+(e.mode==="race"?":"+e.checkpoint:""),r=Math.hypot(t.x-this.routeAt[0],t.z-this.routeAt[1]);if(i!==this.routeKey||r>12){this.route=bu(t.x,t.z,n[0],n[1]),this.routeKey=i,this.routeAt=[t.x,t.z];let o=e.mode==="race"?`${e.raceId}:${e.checkpoint}`:"";if(o!==this.raceKey&&(this.raceKey=o,this.raceRoute=null,o)){this.raceRoute=[];for(let a=e.checkpoint;a<e.route.length-1;a++)this.raceRoute.push(bu(...e.route[a],...e.route[a+1]))}}}get routeDistance(){return this.route?xp(this.route):0}setWanted(t,e){let n=t+(e?"e":"");if(this.last.wanted===n)return;this.last.wanted=n;let i=wu("wanted");i.classList.toggle("hidden",t===0),i.classList.toggle("evading",e),i.querySelectorAll("i").forEach((r,o)=>r.classList.toggle("on",o<t))}update(t,e,n,i,r){let o=Math.round(t.kmh);this.set("speed",String(o).padStart(3,"0")),this.set("gear",t.gear<0?"R":o<1&&!t.throttle?"N":String(t.gear));let a=t.def?.redline??7400;this.els["tach-fill"].style.width=Math.min(100,t.rpm/a*100).toFixed(1)+"%",this.els["tach-fill"].classList.toggle("redline",t.rpm>a-800),this.els["boost-fill"].style.width=t.nitro.toFixed(1)+"%",this.els["boost-fill"].classList.toggle("active",t.boosting),this.set("rpm-readout",(t.rpm/1e3).toFixed(1));let[c]=Ql(t.x,t.z);this.set("district",c),this.set("road-name",Md(t.x,t.z));let h=["N","NW","W","SW","S","SE","E","NE"];this.set("heading",h[(Math.round(t.heading/(Math.PI/4))%8+8)%8]),this.set("clock",i.clockLabel),this.updateRoute(t,e),e.mode==="race"&&(this.set("race-time",na(e.raceTime)),e.route[e.checkpoint]&&this.set("checkpoint-distance",Math.round(this.routeDistance)+" M")),r&&this.setWanted(r.level,r.evading),this.drawMap(t,e,n,r)}mapScale(){return Math.min(this.canvas.width/(le.x1-le.x0),this.canvas.height/(le.z1-le.z0))*this.view.zoom}mapPoint(t,e){let n=this.canvas.getBoundingClientRect(),i=(t-n.left)/n.width*this.canvas.width,r=(e-n.top)/n.height*this.canvas.height,o=this.mapScale();return[(i-this.canvas.width/2)/o+this.view.x,(r-this.canvas.height/2)/o+this.view.z]}clampView(){let t=this.view;t.zoom=Math.min(Math.max(t.zoom,1),8);let e=(le.x1-le.x0)/2*(1-1/t.zoom),n=(le.z1-le.z0)/2*(1-1/t.zoom);t.x=Math.min(Math.max(t.x,(le.x0+le.x1)/2-e),(le.x0+le.x1)/2+e),t.z=Math.min(Math.max(t.z,(le.z0+le.z1)/2-n),(le.z0+le.z1)/2+n)}zoomAt(t,e,n){if(!this.expanded)return;let i=this.canvas.getBoundingClientRect(),[r,o]=this.mapPoint(e??i.left+i.width/2,n??i.top+i.height/2),a=this.view.zoom;this.view.zoom=Math.min(Math.max(a*t,1),8);let c=a/this.view.zoom;this.view.x=r+(this.view.x-r)*c,this.view.z=o+(this.view.z-o)*c,this.clampView()}panBy(t,e){if(!this.expanded)return;let n=this.canvas.getBoundingClientRect(),i=this.mapScale()*(n.width/this.canvas.width);this.view.x-=t/i,this.view.z-=e/i,this.clampView()}pick(t,e,n){if(!this.expanded)return;let[i,r]=this.mapPoint(t,e);n.waypoint&&Math.hypot(n.waypoint[0]-i,n.waypoint[1]-r)<40/this.view.zoom+12?n.waypoint=null:n.waypoint=[Math.min(Math.max(i,Ue),Ee),Math.min(Math.max(r,ge),Pe)],this.routeKey=""}polyline(t,e){t.beginPath(),e.forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke()}drawMap(t,e,n,i){let{canvas:r,ctx:o}=this;if(this.expanded){let u=r.getBoundingClientRect(),g=Math.min(devicePixelRatio||1,2),v=Math.round(u.width*g),m=Math.round(u.height*g);if(v>0&&m>0&&(r.width!==v||r.height!==m)&&(r.width=v,r.height=m),this.fitPending&&v>0){this.fitPending=!1;let p=Math.min(v/(le.x1-le.x0),m/(le.z1-le.z0));this.view.zoom=Math.min(Math.max(v/(he.maxX-le.x0-260)/p,1),8),this.clampView()}}let a=r.width,c=r.height;if(o.setTransform(1,0,0,1,0,0),o.fillStyle="#16343f",o.fillRect(0,0,a,c),o.save(),this.expanded){let u=this.mapScale();o.translate(a/2,c/2),o.scale(u,u),o.translate(-this.view.x,-this.view.z)}else o.translate(a/2,c*.62),o.scale(.85,.85),o.rotate(t.heading),o.translate(-t.x,-t.z);o.imageSmoothingQuality="high",o.drawImage(this.mapImage,le.x0,le.z0,le.x1-le.x0,le.z1-le.z0);let h=this.expanded?r.width/Math.max(r.getBoundingClientRect().width,1):1,l=this.expanded?.95*h/this.mapScale():1;if(this.expanded){o.fillStyle="#fff4dc88",o.font=`700 ${13*h/this.mapScale()}px "Barlow Condensed", Barlow, Arial`,o.textAlign="center",o.textBaseline="middle";for(let[u,g,v]of this.labels)u==="OCEAN DRIVE"?(o.save(),o.translate(g,v),o.rotate(-Math.PI/2),o.fillText(u,0,0),o.restore()):o.fillText(u,g,v)}if(o.lineJoin=o.lineCap="round",this.raceRoute){o.strokeStyle="#ffc68650",o.lineWidth=5*l;for(let u of this.raceRoute)this.polyline(o,u)}if(this.route){let u=e.mode==="race"?"#ffb46b":"#c690ff";o.strokeStyle="#0b141acc",o.lineWidth=11*l,this.polyline(o,this.route),o.strokeStyle=u,o.lineWidth=7*l,this.polyline(o,this.route)}o.fillStyle="#c9d3d6";for(let u of n.cars)u.police||o.fillRect(u.x-2.5*l,u.z-2.5*l,5*l,5*l);let f=Math.floor(performance.now()/180)%2;for(let u of n.police){let g=u.mode==="chase";g&&i&&(o.fillStyle=i.evading?"#3a6cff14":"#ff3a4a12",o.beginPath(),o.arc(u.x,u.z,i.sightRange(),0,Math.PI*2),o.fill()),o.fillStyle=g?f?"#ff4458":"#4a7dff":"#5f8dff",o.beginPath(),o.arc(u.x,u.z,(g?6:4)*l,0,Math.PI*2),o.fill()}if(e.mode==="race"&&e.checkpoint<e.route.length&&e.route.forEach(([u,g],v)=>{v<e.checkpoint||(o.beginPath(),o.arc(u,g,(v===e.checkpoint?11:6)*l,0,Math.PI*2),o.fillStyle=v===e.checkpoint?"#ffc686":"#ffc68677",o.fill(),this.expanded&&(o.fillStyle="#17212a",o.font=`700 ${9*l}px Barlow, Arial`,o.textAlign="center",o.textBaseline="middle",o.fillText(String(v+1),u,g+1)))}),e.waypoint&&e.mode!=="race"){let[u,g]=e.waypoint;o.fillStyle="#c690ff",o.beginPath(),o.arc(u,g-14*l,9*l,Math.PI,0),o.lineTo(u,g),o.closePath(),o.fill(),o.fillStyle="#ffffff",o.beginPath(),o.arc(u,g-14*l,3.5*l,0,Math.PI*2),o.fill()}o.translate(t.x,t.z),o.rotate(-t.heading);let d=this.expanded?1.7*l:1;if(o.shadowColor="#000",o.shadowBlur=8,o.fillStyle="#ff8a52",o.beginPath(),o.moveTo(0,-13*d),o.lineTo(8*d,9*d),o.lineTo(0,4*d),o.lineTo(-8*d,9*d),o.closePath(),o.fill(),o.restore(),this.expanded){let u=r.width/Math.max(r.getBoundingClientRect().width,1);o.fillStyle="#0b161ccc",o.fillRect(0,0,a,40*u),o.fillRect(0,c-36*u,250*u,36*u),o.fillStyle="#fff4dccc",o.font=`600 ${13*u}px Barlow, Arial`,o.textAlign="left",o.textBaseline="top",o.fillText(e.mode==="race"?`${e.raceName} \xB7 FOLLOW THE ORANGE LINE`:"CLICK TO SET A WAYPOINT \xB7 SCROLL OR PINCH TO ZOOM \xB7 DRAG TO MOVE",16*u,13*u),o.fillStyle="#5f8dff",o.fillRect(16*u,c-24*u,10*u,10*u),o.fillStyle="#c9d3d6",o.fillRect(110*u,c-24*u,10*u,10*u),o.fillStyle="#fff4dccc",o.fillText("POLICE",32*u,c-26*u),o.fillText("TRAFFIC",126*u,c-26*u)}if(!this.expanded){let u=t.heading,g=a/2+Math.sin(-u)*-(c*.42),v=c*.62-Math.cos(u)*(c*.42);o.fillStyle="#fff4dc",o.font="600 22px Barlow, Arial",o.textAlign="center",o.textBaseline="middle",o.fillText("N",Math.min(a-16,Math.max(16,g)),Math.min(c-16,Math.max(16,v)))}}setExpanded(t,e=null){this.expanded=t,this.view.zoom=1,this.fitPending=t,e&&(this.view.x=e.x,this.view.z=e.z),this.clampView(),this.canvas.width=t?1100:480,this.canvas.height=t?1100:360}};function na(s){let t=Math.floor(s/60),e=Math.floor(s%60),n=Math.floor(s*100%100);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`}var Eu={v8:{pulses:4,lump:.32,tone:1,intake:.5,sub:.6,rasp:.35,redline:7400},bigblock:{pulses:4,lump:.55,tone:.72,intake:.35,sub:.9,rasp:.5,redline:6400},v10:{pulses:5,lump:.14,tone:1.45,intake:.85,sub:.35,rasp:.25,redline:8800}},Ri=[{id:"wave",name:"PACIFIC WAVE 101.4",genre:"Synthwave",bpm:100,swing:0,chords:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]},{id:"tide",name:"LOW TIDE 94.7",genre:"Lo-fi beats",bpm:82,swing:.16,chords:[[50,53,57,60,64],[55,59,62,65,69],[48,52,55,59,62],[57,61,64,67,70]]},{id:"funk",name:"KZRO 88.1 COAST FUNK",genre:"Funk",bpm:112,swing:.08,chords:[[52,55,59,62],[52,55,59,62],[57,61,64,67],[55,59,62,65]]}],Ki=s=>440*Math.pow(2,(s-69)/12),Ac=class{constructor(){this.ctx=null,this.enabled=!1,this.engineDef=Eu.v8,this.station=-1,this.wasBoosting=!1,this.scrapeLevel=0,this.nextAmbient={horn:6,bird:2,gull:4,cricket:1,siren:30},this.sirenLevel=0}unlock(){this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.start()}start(){if(this.ctx){this.ctx.resume();return}let t;try{t=new(window.AudioContext||window.webkitAudioContext)}catch{return}this.ctx=t;let e=this.master=t.createGain();e.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,e.connect(n).connect(t.destination);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=t.createBuffer(1,i,t.sampleRate),a=r.getChannelData(0),c=o.getChannelData(0),h=0;for(let u=0;u<i;u++)a[u]=Math.random()*2-1,h=(h+.02*a[u])/1.02,c[u]=h*3.5;this.noiseBuffer=r;let l=(u=r)=>{let g=t.createBufferSource();return g.buffer=u,g.loop=!0,g.start(0,Math.random()*1.5),g};this.reverb=t.createConvolver();let f=Math.floor(t.sampleRate*1.8),d=t.createBuffer(2,f,t.sampleRate);for(let u=0;u<2;u++){let g=d.getChannelData(u);for(let v=0;v<f;v++)g[v]=(Math.random()*2-1)*Math.pow(1-v/f,3.2)}this.reverb.buffer=d,this.reverbOut=t.createGain(),this.reverbOut.gain.value=.32,this.reverb.connect(this.reverbOut).connect(e),this.buildEngine(l),this.buildTires(l),this.buildWorld(l,o),this.buildRadio()}buildEngine(t){let e=this.ctx;this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.Q.value=2.2,this.engineDrive=e.createWaveShaper();let n=new Float32Array(1024);for(let c=0;c<1024;c++)n[c]=Math.tanh((c/1023*2-1)*2.6);this.engineDrive.curve=n;let i=new Float32Array(24),r=new Float32Array(24);for(let c=1;c<24;c++)r[c]=1/c*(c%2?1:.6)*Math.exp(-c*.08);let o=e.createPeriodicWave(i,r);this.oscs=[],this.subGain=e.createGain();for(let[c,h,l]of[[1,.55,"wave"],[1.006,.3,"sawtooth"],[.5,1,"sine"]]){let f=e.createOscillator();l==="wave"?f.setPeriodicWave(o):f.type=l;let d=e.createGain();d.gain.value=h,f.connect(d).connect(c===.5?this.subGain:this.engineDrive),f.start(),this.oscs.push([f,c])}this.subGain.connect(this.engineDrive);let a=e.createGain();this.lumpOsc=e.createOscillator(),this.lumpOsc.type="triangle",this.lumpDepth=e.createGain(),this.lumpOsc.connect(this.lumpDepth).connect(a.gain),this.lumpOsc.start(),this.engineDrive.connect(a).connect(this.engineFilter).connect(this.engineGain).connect(this.master),this.raspFilter=e.createBiquadFilter(),this.raspFilter.type="bandpass",this.raspFilter.Q.value=1.4,this.raspGain=e.createGain(),this.raspGain.gain.value=0,t().connect(this.raspFilter).connect(this.raspGain).connect(a),this.intake=e.createOscillator(),this.intake.type="square",this.intakeFilter=e.createBiquadFilter(),this.intakeFilter.type="bandpass",this.intakeFilter.Q.value=3,this.intakeGain=e.createGain(),this.intakeGain.gain.value=0,this.intake.connect(this.intakeFilter).connect(this.intakeGain).connect(this.engineGain),this.intake.start(),this.whine=e.createOscillator(),this.whine.type="sine",this.whineGain=e.createGain(),this.whineGain.gain.value=0,this.whine.connect(this.whineGain).connect(this.master),this.whine.start(),this.turbo=e.createOscillator(),this.turbo.type="sine",this.turboGain=e.createGain(),this.turboGain.gain.value=0,this.turbo.connect(this.turboGain).connect(this.master),this.turbo.start(),this.applyEngine()}setEngine(t){this.engineDef=Eu[t]||Eu.v8,this.applyEngine()}applyEngine(){if(!this.ctx)return;let t=this.engineDef,e=this.ctx.currentTime;this.lumpDepth.gain.setTargetAtTime(t.lump,e,.05),this.subGain.gain.setTargetAtTime(t.sub,e,.05)}buildTires(t){let e=this.ctx;this.screechFilter=e.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.value=1350,this.screechFilter.Q.value=5,this.screechGain=e.createGain(),this.screechGain.gain.value=0,t().connect(this.screechFilter).connect(this.screechGain).connect(this.master),this.squeal=e.createOscillator(),this.squeal.type="sawtooth";let n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=1100,n.Q.value=8,this.squealGain=e.createGain(),this.squealGain.gain.value=0;let i=e.createOscillator();i.frequency.value=9;let r=e.createGain();r.gain.value=22,i.connect(r).connect(this.squeal.frequency),i.start(),this.squeal.connect(n).connect(this.squealGain).connect(this.master),this.squeal.start(),this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windGain=e.createGain(),this.windGain.gain.value=0,t().connect(this.windFilter).connect(this.windGain).connect(this.master);let o=e.createBiquadFilter();o.type="highpass",o.frequency.value=2200,this.nitroGain=e.createGain(),this.nitroGain.gain.value=0,t().connect(o).connect(this.nitroGain).connect(this.master);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=220,this.roarGain=e.createGain(),this.roarGain.gain.value=0,t().connect(a).connect(this.roarGain).connect(this.master),this.scrapeFilter=e.createBiquadFilter(),this.scrapeFilter.type="bandpass",this.scrapeFilter.frequency.value=2400,this.scrapeFilter.Q.value=2.5,this.scrapeGain=e.createGain(),this.scrapeGain.gain.value=0,t().connect(this.scrapeFilter).connect(this.scrapeGain).connect(this.master)}buildWorld(t,e){let n=this.ctx,i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=520,this.surfGain=n.createGain(),this.surfGain.gain.value=0,t().connect(i).connect(this.surfGain).connect(this.master);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=380,this.humGain=n.createGain(),this.humGain.gain.value=0,t(e).connect(r).connect(this.humGain).connect(this.master),this.siren=n.createOscillator(),this.siren.type="sawtooth",this.siren.frequency.value=900;let o=n.createOscillator();o.frequency.value=.32;let a=n.createGain();a.gain.value=380,o.connect(a).connect(this.siren.frequency),o.start();let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=1100,c.Q.value=1.2,this.sirenGain=n.createGain(),this.sirenGain.gain.value=0,this.siren.connect(c).connect(this.sirenGain).connect(this.master),this.siren.start(),this.ambientBus=n.createGain(),this.ambientBus.gain.value=0,this.ambientBus.connect(this.master),this.ambientBus.connect(this.reverb)}setEnabled(t){this.enabled=t,t&&this.start(),this.ctx&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.1)}update(t){if(!this.ctx)return;let e=this.ctx.currentTime,{rpm:n,throttle:i,speed:r,slip:o,boosting:a,active:c,shoreDistance:h,time:l,gear:f=1,ratio:d=3,city:u=.5,night:g=0,nearTrees:v=0}=t,m=c?1:0,p=this.engineDef,_=n/60*p.pulses;for(let[E,w]of this.oscs)E.frequency.setTargetAtTime(_*w*.5,e,.025);this.lumpOsc.frequency.setTargetAtTime(n/120,e,.05);let M=n/p.redline,y=i*(.75+Math.min(Math.max(f,1),6)*.05);this.engineFilter.frequency.setTargetAtTime((220+n*.14+y*n*.3)*p.tone,e,.04),this.engineGain.gain.setTargetAtTime(m*(.065+y*.085+M*.05),e,.04),this.raspFilter.frequency.setTargetAtTime(_*3,e,.05),this.raspGain.gain.setTargetAtTime(m*p.rasp*(.15+i*.6)*.5,e,.05),this.intake.frequency.setTargetAtTime(_*2,e,.03),this.intakeFilter.frequency.setTargetAtTime(900+n*.35,e,.05),this.intakeGain.gain.setTargetAtTime(m*p.intake*i*M*M*.035,e,.05);let b=Math.abs(r);this.whine.frequency.setTargetAtTime(Math.max(40,b*d*14),e,.05),this.whineGain.gain.setTargetAtTime(m*(f>0&&f<=2?1:.25)*Math.min(b/20,1)*.006,e,.1),this.turbo.frequency.setTargetAtTime(1400+n*.55,e,.1),this.turboGain.gain.setTargetAtTime(m*i*M*M*.01,e,.1);let A=m*Math.min(Math.max(o-3,0)/10,1);this.screechGain.gain.setTargetAtTime(A*.075,e,.06),this.screechFilter.frequency.setTargetAtTime(1100+Math.min(o,20)*25,e,.1),this.squeal.frequency.setTargetAtTime(820+Math.min(o,20)*18,e,.08),this.squealGain.gain.setTargetAtTime(A*A*.05,e,.05),this.windGain.gain.setTargetAtTime(m*Math.min((b/60)**2,1)*.1,e,.2),this.windFilter.frequency.setTargetAtTime(400+b*18,e,.2),a&&!this.wasBoosting&&m&&this.whoosh(),this.wasBoosting=a,this.nitroGain.gain.setTargetAtTime(m*(a?.045:0),e,.06),this.roarGain.gain.setTargetAtTime(m*(a?.12:0),e,.1),this.scrapeGain.gain.setTargetAtTime(m*this.scrapeLevel*.09,e,.04),this.scrapeLevel*=.6;let P=Math.max(0,1-h/140),I=.55+.45*Math.sin(l*.7)*Math.sin(l*.23+1);this.surfGain.gain.setTargetAtTime(P*I*.11,e,.3),this.humGain.gain.setTargetAtTime(m*(.025+u*.05)*(1-g*.55),e,.6),this.ambientBus.gain.setTargetAtTime(m,e,.4),this.sirenGain.gain.setTargetAtTime(m*this.sirenLevel*.05,e,.15),m&&this.ambient(l,{city:u,night:g,surfNear:P,nearTrees:v}),this.radioActive=c,this.radioTick(c)}ambient(t,{city:e,night:n,surfNear:i,nearTrees:r}){let o=this.nextAmbient;t>o.horn&&(o.horn=t+7+Math.random()*16/(.4+e),this.horn(60+Math.random()*140,!0)),n<.5&&t>o.bird&&(o.bird=t+2+Math.random()*6,(r>.2||Math.random()<.3)&&this.chirp()),n<.5&&i>.3&&t>o.gull&&(o.gull=t+5+Math.random()*9,this.gull()),n>.5&&t>o.cricket&&(o.cricket=t+.7+Math.random()*1.6,this.cricket(e)),t>o.siren&&(o.siren=t+40+Math.random()*60,e>.4&&this.distantSiren())}burst(t,e,n,i,r=1,o=this.master,a=0){if(!this.ctx||!this.enabled)return;let c=this.ctx,h=c.currentTime+a,l=c.createBufferSource();l.buffer=this.noiseBuffer;let f=c.createBiquadFilter();f.type=e,f.frequency.value=n,f.Q.value=r;let d=c.createGain();d.gain.setValueAtTime(i,h),d.gain.exponentialRampToValueAtTime(1e-4,h+t),l.connect(f).connect(d).connect(o),l.start(h,Math.random()),l.stop(h+t+.05)}tone(t,e,n,i,{dest:r=this.master,when:o=0,attack:a=.005,slideTo:c=0,q:h=0,filter:l=0}={}){if(!this.ctx||!this.enabled)return;let f=this.ctx,d=f.currentTime+o,u=f.createOscillator();u.type=t,u.frequency.setValueAtTime(e,d),c&&u.frequency.exponentialRampToValueAtTime(c,d+n);let g=f.createGain();g.gain.setValueAtTime(1e-4,d),g.gain.linearRampToValueAtTime(i,d+a),g.gain.exponentialRampToValueAtTime(1e-4,d+n);let v=u;if(l){let m=f.createBiquadFilter();m.type="bandpass",m.frequency.value=l,m.Q.value=h||2,v=u.connect(m)}v.connect(g).connect(r),u.start(d),u.stop(d+n+.05)}impact(t){if(!this.ctx||!this.enabled)return;let e=this.ctx.currentTime;if(e-(this.lastImpact||0)<.07)return;this.lastImpact=e;let n=Math.min(t/20,1);this.burst(.35+n*.3,"lowpass",300+n*900,.25+n*.6),this.tone("sine",70+n*30,.25,.25*n+.08,{slideTo:40});for(let i of[1,2.76,5.4])this.tone("triangle",420*i*(.9+Math.random()*.2),.18+n*.4,.04*n/i+.01,{filter:420*i,q:12});if(n>.4)for(let i=0;i<6;i++)this.tone("sine",3e3+Math.random()*4e3,.08+Math.random()*.1,.02*n,{when:.02+Math.random()*.2})}scrape(t){this.scrapeLevel=Math.max(this.scrapeLevel,Math.min(t/25,1)),this.ctx&&this.scrapeFilter.frequency.setTargetAtTime(1800+Math.random()*1600,this.ctx.currentTime,.02)}whoosh(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuffer;let i=t.createBiquadFilter();i.type="bandpass",i.Q.value=1.6,i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(3800,e+.45);let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.32,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+.9),n.connect(i).connect(r).connect(this.master),n.start(e,Math.random()),n.stop(e+1)}backfire(){!this.ctx||!this.enabled||(this.burst(.09,"lowpass",900,.35),this.tone("square",60,.08,.08))}shift(t){t&&this.burst(.18,"highpass",1800,.07)}horn(t,e=!1){if(!this.ctx||!this.enabled)return;let n=this.ctx,i=n.currentTime,r=Math.min(.12,6/Math.max(t,6)*.12)*(e?.6:1),o=e?.3+Math.random()*.5:.45,a=n.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(r,i+.02),a.gain.setValueAtTime(r,i+o),a.gain.linearRampToValueAtTime(0,i+o+.1);let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=e?900:1800;let h=e?300+Math.random()*120:349;for(let l of[h,h*1.26]){let f=n.createOscillator();f.type="square",f.frequency.value=l,f.connect(c),f.start(i),f.stop(i+o+.15)}c.connect(a).connect(e?this.ambientBus:this.master)}chirp(){let t=2600+Math.random()*2200,e=2+Math.floor(Math.random()*4);for(let n=0;n<e;n++)this.tone("sine",t*(1+Math.random()*.1),.07,.012,{dest:this.ambientBus,when:n*.11,slideTo:t*1.35})}gull(){for(let t=0;t<2+Math.floor(Math.random()*2);t++)this.tone("sawtooth",1500,.32,.01,{dest:this.ambientBus,when:t*.38,slideTo:900,filter:1400,q:3})}cricket(t){let e=4300+Math.random()*500,n=.006*(1.2-t*.8);for(let i=0;i<3;i++)this.tone("sine",e,.035,n,{dest:this.ambientBus,when:i*.06})}distantSiren(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle";let i=t.createOscillator();i.frequency.value=.35;let r=t.createGain();r.gain.value=220,n.frequency.value=780,i.connect(r).connect(n.frequency);let o=t.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.012,e+2),o.gain.linearRampToValueAtTime(0,e+8),n.connect(o).connect(this.ambientBus),n.start(e),i.start(e),n.stop(e+8.2),i.stop(e+8.2)}setSiren(t){this.sirenLevel=t}chime(t=!1){if(!this.ctx||!this.enabled)return;let e=this.ctx,n=e.currentTime;(t?[523.25,659.25,783.99,1046.5]:[659.25,987.77]).forEach((r,o)=>{let a=e.createOscillator();a.type="triangle",a.frequency.value=r;let c=e.createGain(),h=n+o*.09;c.gain.setValueAtTime(0,h),c.gain.linearRampToValueAtTime(.12,h+.01),c.gain.exponentialRampToValueAtTime(1e-4,h+.6),a.connect(c).connect(this.master),a.start(h),a.stop(h+.65)})}countBeep(t=!1){this.tone("square",t?880:440,t?.5:.18,.06,{filter:t?1800:900,q:1})}buildRadio(){let t=this.ctx;this.radioGain=t.createGain(),this.radioGain.gain.value=0;let e=t.createBiquadFilter();e.type="highpass",e.frequency.value=55;let n=t.createBiquadFilter();n.type="highshelf",n.frequency.value=7e3,n.gain.value=-5,this.radioIn=t.createGain(),this.radioIn.connect(e).connect(n).connect(this.radioGain).connect(this.master),this.radioSend=t.createGain(),this.radioSend.gain.value=.5,this.radioSend.connect(this.reverb),this.radioStep=0,this.radioNext=0,this.radioActive=!1,setInterval(()=>this.radioTick(this.radioActive),40)}get stationName(){return this.station<0?"RADIO OFF":Ri[this.station].name}setStation(t){this.station=t,this.ctx&&(this.radioStep=0,this.radioNext=this.ctx.currentTime+.25,this.burst(.28,"bandpass",2200,.08,.7))}nextStation(){return this.setStation(this.station+1>=Ri.length?-1:this.station+1),this.stationName}radioTick(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=t&&this.station>=0&&this.enabled;if(this.radioGain.gain.setTargetAtTime(n?.75:0,e,.15),!n){this.radioNext=0;return}let i=Ri[this.station],r=60/i.bpm/4;for(this.radioNext<e&&(this.radioNext=e+.05);this.radioNext<e+.3;){let o=this.radioStep,a=o%2?i.swing*r:0;this.playStep(i,o,this.radioNext+a,r),this.radioNext+=r,this.radioStep++}}playStep(t,e,n,i){let r=Math.max(0,n-this.ctx.currentTime),o=Math.floor(e/16),a=e%16,c=t.chords[o%t.chords.length],h=c[0],l=u=>{let g=Math.sin((e+u*31.7)*12.9898+this.station*7.1)*43758.5453;return g-Math.floor(g)},f=this.radioIn,d=this.radioSend;if(t.id==="wave"){a%4===0&&this.kick(r,.5),(a===4||a===12)&&this.snare(r,.28,!0),a%2===0&&this.hat(r,.05,!1),a%2===0&&this.synth("sawtooth",Ki(h-24),i*1.8,.11,r,{cutoff:700,env:900});let u=[0,1,2,1,0,2,1,2];if(this.synth("square",Ki(c[u[a%8]]+12),i*.9,.03,r,{cutoff:2400,env:1200,send:.6}),a===0)for(let g of c)this.synth("sawtooth",Ki(g),i*15,.022,r,{cutoff:1300,attack:.4,detune:9,send:1});if(o%4>=2&&[0,3,6,10,12].includes(a)){let g=[0,3,5,7,10,12];this.synth("sawtooth",Ki(h+12+g[Math.floor(l(1)*g.length)]),i*2.6,.035,r,{cutoff:3e3,env:0,send:.8,detune:6})}}else if(t.id==="tide"){if((a===0||a===7||a===10)&&this.kick(r,.42),(a===4||a===12)&&this.snare(r,.16,!1),a%2===0&&this.hat(r,.025+l(2)*.015,!1),a===0||a===6)for(let u of c)this.synth("sine",Ki(u),i*7,.03,r+l(3)*.02,{cutoff:1800,attack:.01,trem:!0,send:.7});(a===0||a===10)&&this.synth("sine",Ki(h-12),i*5,.16,r,{cutoff:400}),l(4)<.35&&this.burst(.01,"highpass",3e3,.02+l(5)*.03,1,f,r),a===0&&this.burst(i*16,"bandpass",1200,.004,.4,f,r)}else{(a===0||a===6||a===8||a===11)&&this.kick(r,.45),(a===4||a===12)&&this.snare(r,.24,!1),this.hat(r,a%4===2?.06:.03,a%4===2);let g=[0,null,12,0,null,0,10,null,0,null,12,7,null,0,10,12][a];if(g!==null&&this.synth("square",Ki(h-24+g),i*.8,.09,r,{cutoff:500,env:1400}),[2,7,10,14].includes(a))for(let v of c.slice(1))this.synth("square",Ki(v+12),i*.5,.018,r,{cutoff:2600,env:2e3,q:6});if(o%8===7&&(a===0||a===3))for(let v of c)this.synth("sawtooth",Ki(v+12),i*2,.025,r,{cutoff:2200,send:.6,detune:12})}}synth(t,e,n,i,r,{cutoff:o=2e3,env:a=0,attack:c=.005,detune:h=0,send:l=0,trem:f=!1,q:d=1}={}){let u=this.ctx,g=u.currentTime+r,v=u.createBiquadFilter();v.type="lowpass",v.Q.value=d,v.frequency.setValueAtTime(o+a,g),a&&v.frequency.exponentialRampToValueAtTime(Math.max(o,60),g+Math.min(n,.3));let m=u.createGain();m.gain.setValueAtTime(1e-4,g),m.gain.linearRampToValueAtTime(i,g+c),m.gain.setValueAtTime(i,g+Math.max(c,n*.6)),m.gain.exponentialRampToValueAtTime(1e-4,g+n+.08);for(let _ of h?[-h,h]:[0]){let M=u.createOscillator();M.type=t,M.frequency.value=e,M.detune.value=_,M.connect(v),M.start(g),M.stop(g+n+.12)}let p=v.connect(m);if(f){let _=u.createGain(),M=u.createOscillator();M.frequency.value=4.5;let y=u.createGain();y.gain.value=.25,M.connect(y).connect(_.gain),M.start(g),M.stop(g+n+.12),p=p.connect(_)}if(p.connect(this.radioIn),l){let _=u.createGain();_.gain.value=l,p.connect(_).connect(this.radioSend)}}kick(t,e){let n=this.ctx,i=n.currentTime+t,r=n.createOscillator();r.frequency.setValueAtTime(140,i),r.frequency.exponentialRampToValueAtTime(42,i+.12);let o=n.createGain();o.gain.setValueAtTime(e,i),o.gain.exponentialRampToValueAtTime(1e-4,i+.38),r.connect(o).connect(this.radioIn),r.start(i),r.stop(i+.4)}snare(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=1400;let c=i.createGain(),h=n?.32:.16;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c),c.connect(this.radioIn),n&&c.connect(this.radioSend),o.start(r,Math.random()),o.stop(r+h+.05);let l=i.createOscillator();l.type="triangle",l.frequency.setValueAtTime(220,r),l.frequency.exponentialRampToValueAtTime(150,r+.08);let f=i.createGain();f.gain.setValueAtTime(e*.6,r),f.gain.exponentialRampToValueAtTime(1e-4,r+.1),l.connect(f).connect(this.radioIn),l.start(r),l.stop(r+.12)}hat(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=7500;let c=i.createGain(),h=n?.22:.045;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c).connect(this.radioIn),o.start(r,Math.random()),o.stop(r+h+.05)}};var Rc=class{constructor(){this.keys=new Set,this.state={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},this.padButtons=new Set,this.onPadPress=null}clear(){this.keys.clear()}poll(){let t=this.keys,e=t.has("KeyW")||t.has("ArrowUp")?1:0,n=t.has("KeyS")||t.has("ArrowDown")?1:0,i=(t.has("KeyA")||t.has("ArrowLeft")?1:0)-(t.has("KeyD")||t.has("ArrowRight")?1:0),r=t.has("Space"),o=t.has("ShiftLeft")||t.has("ShiftRight"),a=navigator.getGamepads?navigator.getGamepads():[];for(let c of a){if(!c||!c.connected)continue;let h=c.axes[0]||0;Math.abs(h)>.12&&(i=-Math.sign(h)*((Math.abs(h)-.12)/.88)**1.4);let l=c.buttons[7]?.value||0,f=c.buttons[6]?.value||0;e=Math.max(e,l),n=Math.max(n,f),r=r||!!c.buttons[0]?.pressed,o=o||!!c.buttons[1]?.pressed||!!c.buttons[2]?.pressed;for(let[d,u]of[[3,"camera"],[9,"pause"],[8,"map"],[5,"reset"]]){let g=!!c.buttons[d]?.pressed,v=c.index+":"+d;g&&!this.padButtons.has(v)&&this.onPadPress?.(u),g?this.padButtons.add(v):this.padButtons.delete(v)}}return Object.assign(this.state,{throttle:e,brake:n,steer:i,handbrake:r,nitro:o}),this.state}};var Rt=s=>document.getElementById(s),Cc=matchMedia("(pointer:coarse)").matches,G1=Cc&&Math.min(screen.width,screen.height)<600,Qe={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{localStorage.setItem(s,t)}catch{}}};function vp(s){Rt("loading").classList.add("hidden"),Rt("error").classList.remove("hidden"),console.error(s)}async function V1(){let s;try{if(s=new Zl(Rt("world")),!s.renderer.capabilities.isWebGL2)throw new Error("WebGL 2 unavailable")}catch(T){vp(T);return}let t=s.renderer,e=new Us,n=new pn(55,innerWidth/innerHeight,.2,5600);n.layers.enable(1),s.init(e,n);let i=T=>(Rt("loading-step").textContent=T,new Promise(Q=>setTimeout(Q,0)));await i("Painting the sky\u2026");let r=new ic(t,e);await i("Paving the boulevards\u2026"),Ld(e,t),await i("Raising the skyline\u2026");let o=Hd(e,t);await i("Rolling in the surf\u2026");let a=Gd(e,t);await i("Planting palms\u2026");let c=qd(e,t),h=new mc,l=Yd(e,t,a.pier.lamps,h),f=sp(e,t,h,l.lamps,c.trunkColliders);await i("Fueling up\u2026");let d=Qe.get("pacific-car");js[d]||(d="coupe");let u=new uc(e,t,d),g=new ec(t,e),v=new ac(t,e);{let T=$r(t);T.glassClear.userData.envBoost=1.25,T.chrome.userData.envBoost=1.2,v.attach([u.paint,T.glassClear,T.chrome,T.rim])}let m=new _c(e,t),p=new bc(e),_=pp(e,t),M=new wc(e),y=new Ve,b=qo(16761466,.9),A=new ce(1.1,1.1,40,20,1,!0);A.translate(0,20,0);let P=[-1,1].map(T=>{let Q=new Ot(A,b);return Q.userData.noAO=!0,Q.layers.set(1),y.add(Q),{mesh:Q,side:T}}),I=new nn({color:new Lt(3,1.8,.8),transparent:!0,opacity:.8,depthWrite:!1,blending:On}),E=new Ot(new So(Jl-.6,Jl,72),I);E.rotation.x=-Math.PI/2,E.position.y=.06,E.userData.noAO=!0,y.add(E);let w=new Ot(new wi(1.6,2.6,3),new nn({color:new Lt(4,2.4,1.1)}));w.rotation.z=Math.PI,w.userData.noAO=!0,y.add(w),y.visible=!1,e.add(y);let N=[...o.colliders,...f.solids],X=[...c.trunkColliders,...l.circles,...f.circles],B={colliders:o.colliders,boxes:N,circles:X,boxGrid:new Qs(80).addAll(N),buildingGrid:new Qs(80).addAll(o.colliders.map(T=>({...T}))),circleGrid:new Yn(24).addAll(X),pileGrid:new Yn(24).addAll(Mn.flatMap(T=>T.piles||[])),piles:Mn.flatMap(T=>T.piles||[])};m.world=B,Rd(e);let k=new vc(m,B.buildingGrid),W=new Ec(n),q=new Tc(o.colliders),it=new Ac,Z=new Rc,F={state:"intro",paused:!1,mode:"free",raceTime:0,checkpoint:0,countdown:0,raceId:"sunset",route:bn.sunset.route,raceName:bn.sunset.name,splits:[],topSpeed:0,crashes:0,waypoint:null,lastX:dn.x,lastZ:dn.z,time:0,frame:0,flash:0},Mt=Qe.get("pacific-quality")||(G1?"low":Cc?"medium":"high");["ultra","high","medium","low"].includes(Mt)||(Mt="high");let St=Qe.get("pacific-time")||"cycle",Nt=Qe.get("pacific-road")||"auto";!(St in sc)&&St!=="cycle"&&(St="golden");function Wt(T){Mt=T,Qe.set("pacific-quality",T),s.setQuality(T);let Q=s.quality;r.setShadowQuality(Q.shadow,Q.shadowRange),a.setReflections(Q.reflections>0,Q.reflections),v.setSize(Q.carProbe),g.setSize(Q.farShadow),r.setSkyQuality(Q.sky[0],Q.sky[1],T!=="low"),r.realLamps=Q.lamps,l.setRealLamps(Q.lamps),Rt("quality").value=T}s.onResize=()=>a.resize(s.quality.reflections);let Zt=!1;function Qt(T){St=T,Qe.set("pacific-time",T),r.cycle=T==="cycle",T!=="cycle"?r.setHours(sc[T]):Zt||r.setHours(18.95),Zt=Zt||T==="cycle",r.envDirty=!0,Rt("time-select").value=T}u.reset(dn.x,dn.z,dn.heading);let at=Qe.get("pacific-color");at&&$t(at),Wt(Mt),Qt(St);let pt;function xt(T){let Q=Rt("toast");Q.textContent=T,Q.classList.add("show"),clearTimeout(pt),pt=setTimeout(()=>Q.classList.remove("show"),2400)}function $t(T){u.setColor(T),Qe.set("pacific-color",T),document.querySelectorAll(".swatch").forEach(Q=>{let _t=Q.dataset.color===T;Q.classList.toggle("active",_t),Q.setAttribute("aria-pressed",String(_t))})}function Ut(T,Q=!1){if(!js[T])return;d=T,Qe.set("pacific-car",T);let _t=js[T];if(u.key!==T){let{x:Pt,z:Ft,heading:Dt}=u;u.setModel(T),u.reset(Pt,Ft,Dt),W.snap?.(u)}Rt("car-name").textContent=_t.name,Rt("car-blurb").textContent=_t.blurb,Rt("car-spec").textContent=_t.spec,Rt("hud-car").textContent=_t.name,Rt("car-menu").value=T;for(let Pt of["speed","accel","grip"])Rt(`stat-${Pt}`).style.width=`${Math.round(_t.stats[Pt]*100)}%`;it.setEngine?.(_t.engine),Q&&xt(_t.name)}let st=T=>Ut($o[($o.indexOf(d)+T+$o.length)%$o.length]),zt=[],L=0;function kt({item:T,x:Q,z:_t,speed:Pt,nx:Ft,nz:Dt}){F.time-L>.08&&(it.impact(Math.min(2+Pt*.35,T.type==="lamp"?9:6)),L=F.time),W.shake=Math.max(W.shake,T.type==="lamp"?.22:.08);let te=T.sparks?14:4;for(let oe=0;oe<te;oe++)T.sparks?_.sparks.emit(Q,ne+.4+mt()*.5,_t,Ft*3+(mt()-.5)*6,1+mt()*4,Dt*3+(mt()-.5)*6,.1+mt()*.08,.3+mt()*.4,1,6,3.2,1):_.dust.emit(Q,ne+.3,_t,(mt()-.5)*3,mt()*2,(mt()-.5)*3,.5,.9,.35,.55,.5,.42);T.type==="hydrant"&&zt.push({x:Q,z:_t,t:16}),(T.type==="lamp"||T.type==="hydrant")&&Tn("vandalism",Q,_t,1)}function Ct(){if(F.checkpoint>=F.route.length)return;let[T,Q]=F.route[F.checkpoint];y.position.set(T,0,Q);let _t=Math.abs(T-Yi(T))<1;for(let Pt of P)Pt.mesh.position.set(_t?Pt.side*(ee+1):0,0,_t?0:Pt.side*(ee+1));Rt("checkpoint-count").textContent=`${F.checkpoint+1} / ${F.route.length}`}function Et(T){F.mode=T,F.state="play",F.paused=!1,Z.clear();for(let _t of["intro","intro-location","intro-footer"])Rt(_t).classList.add("hidden");Rt("hud").classList.remove("hidden"),document.body.classList.add("playing"),document.body.classList.toggle("racing",T==="race"),Rt("race").classList.toggle("hidden",T!=="race"),Rt("start-trial").classList.toggle("hidden",T==="race"),Rt("mode-label").textContent=T==="race"?"TIME TRIAL":"FREE ROAM",Rt("mission-title").textContent=T==="race"?"Follow the afterglow.":"Take the long way home.",Rt("mission-subtitle").textContent=T==="race"?`Pass through all ${F.route.length} golden checkpoints.`:"Explore Vista Pac\xEDfica at your own pace.",F.raceTime=0,F.checkpoint=0,F.splits=[],F.topSpeed=0,F.crashes=0;let Q=T==="race"?bn[F.raceId].start||dn:dn;u.reset(Q.x,Q.z,Q.heading),F.lastX=u.x,F.lastZ=u.z,y.visible=T==="race",h.restoreAll(),k.reset(),Ct(),W.snap(u),it.setEnabled($),F.countdown=T==="race"?3.6:0,G(T==="race"?"3":""),T!=="race"&&xt("WELCOME TO VISTA PAC\xCDFICA")}let ft="";function G(T){if(T===ft)return;ft=T;let Q=Rt("countdown");Q.textContent=T,Q.classList.toggle("hidden",!T),Q.classList.toggle("go",T==="GO"),Q.classList.remove("pop"),Q.offsetWidth,Q.classList.add("pop"),T&&it.countBeep?.(T==="GO")}function H(T){return F.countdown<=0?!1:(F.countdown-=T,F.countdown>.6?G(String(Math.ceil(F.countdown-.6))):F.countdown>0?G("GO"):(G(""),F.countdown=0),F.countdown>.6)}function j(){F.paused=!0,Z.clear(),it.chime(!0),Rt("final-time").textContent=na(F.raceTime);let T=Number(Qe.get(wt(F.raceId)))||null;!T||F.raceTime<T?(Qe.set(wt(F.raceId),String(F.raceTime)),Rt("best-time").textContent="A new personal best. Make the coast remember it."):Rt("best-time").textContent="PERSONAL BEST  "+na(T);let Q=u.distance/Math.max(F.raceTime,.1)*3.6;Rt("result-stats").innerHTML=`<span><b>${Math.round(F.topSpeed*3.6)}</b> KM/H TOP</span><span><b>${Math.round(Q)}</b> KM/H AVG</span><span><b>${F.crashes}</b> ${F.crashes===1?"CRASH":"CRASHES"}</span><span><b>${js[d].name}</b></span>`,Rt("result").showModal(),y.visible=!1,V(F.raceId)}function Y(T=!1){Rt("result").open||(F.paused=!0,Z.clear(),Rt("menu-title").textContent=T?"Make it your drive.":"Take a breather.",Rt("menu-description").textContent=T?"Tune the look of the coast to your machine.":"The coast will be right here.",Rt("resume").textContent=F.state==="intro"?"BACK TO THE COAST":"BACK TO THE DRIVE",Rt("back-title").classList.toggle("hidden",F.state==="intro"),Rt("restart-race").textContent=(F.mode==="race"&&F.state==="play"?"RESTART ":"START ")+F.raceName,Rt("menu").open||Rt("menu").showModal())}function J(){Rt("menu").close(),F.paused=!1,Z.clear()}function S(T){W.mode=T??(W.mode+1)%Mu.length,Rt("camera-select").value=W.mode,F.state==="play"&&(xt(Mu[W.mode]),W.snap(u))}function x(){let T=["golden","dusk","night","dawn","noon","cycle"],Q=T[(T.indexOf(St)+1)%T.length];Qt(Q),xt({golden:"GOLDEN HOUR",dusk:"BLUE HOUR",night:"MIDNIGHT",dawn:"FIRST LIGHT",noon:"HIGH NOON",cycle:"LIVE DAY CYCLE"}[Q])}function R(){F.state==="play"&&(q.setExpanded(!q.expanded,u),document.querySelector(".map-panel").classList.toggle("expanded",q.expanded),Rt("map-button").setAttribute("aria-label",q.expanded?"Close expanded map":"Expand map"))}function U(){if(F.mode==="race"){F.raceTime=0,F.checkpoint=0;let T=bn[F.raceId].start||dn;u.reset(T.x,T.z,T.heading),Ct(),xt("RUN RESTARTED")}else u.safeRespawn(),xt("BACK ON THE ROAD");F.lastX=u.x,F.lastZ=u.z,W.snap(u)}function z(){J(),F.state="intro",y.visible=!1,document.body.classList.remove("playing","racing"),Rt("hud").classList.add("hidden"),q.expanded&&O(!1);for(let T of["intro","intro-location","intro-footer"])Rt(T).classList.remove("hidden");u.reset(dn.x,dn.z,dn.heading)}function O(T){q.setExpanded(T),document.querySelector(".map-panel").classList.toggle("expanded",T)}let $=Qe.get("pacific-sound")!=="off";function et(){Rt("sound").setAttribute("aria-label",$?"Mute sound":"Enable sound"),Rt("sound").querySelector("span").style.display=$?"none":"block"}et(),Rt("drive").onclick=()=>{be(),Et("free")},Rt("trial").onclick=()=>{be(),Et("race")},Rt("start-trial").onclick=()=>Et("race"),Rt("pause").onclick=()=>Y(),Rt("settings").onclick=()=>Y(!0),Rt("close-menu").onclick=J,Rt("resume").onclick=J,Rt("restart-race").onclick=()=>{J(),Et("race")},Rt("back-title").onclick=z,Rt("menu").addEventListener("cancel",T=>{T.preventDefault(),J()}),Rt("result").addEventListener("cancel",T=>T.preventDefault()),Rt("race-again").onclick=()=>{Rt("result").close(),Et("race")},Rt("free-roam").onclick=()=>{Rt("result").close(),Et("free")},Rt("quality").onchange=T=>Wt(T.target.value),Rt("time-select").onchange=T=>Qt(T.target.value),Rt("road-select").value=Nt,Rt("road-select").onchange=T=>{Nt=T.target.value,Qe.set("pacific-road",Nt)},Rt("camera-select").onchange=T=>S(Number(T.target.value)),Rt("sound").onclick=()=>{$=!$,Qe.set("pacific-sound",$?"on":"off"),it.setEnabled($&&F.state==="play"),$&&it.start(),et(),xt($?"SOUND ON":"SOUND OFF")},Rt("map-button").onclick=R;{let T=Rt("minimap"),Q=new Map,_t=0,Pt=0;T.addEventListener("wheel",Dt=>{q.expanded&&(Dt.preventDefault(),q.zoomAt(Dt.deltaY<0?1.25:.8,Dt.clientX,Dt.clientY))},{passive:!1}),T.addEventListener("pointerdown",Dt=>{q.expanded&&(T.setPointerCapture(Dt.pointerId),Q.set(Dt.pointerId,[Dt.clientX,Dt.clientY]),Q.size===1&&(_t=0),Pt=0)}),T.addEventListener("pointermove",Dt=>{let te=Q.get(Dt.pointerId);if(!(!te||!q.expanded)&&(Q.size===1&&(_t+=Math.abs(Dt.clientX-te[0])+Math.abs(Dt.clientY-te[1]),_t>6&&q.panBy(Dt.clientX-te[0],Dt.clientY-te[1])),Q.set(Dt.pointerId,[Dt.clientX,Dt.clientY]),Q.size===2)){let[oe,re]=[...Q.values()],jt=Math.hypot(oe[0]-re[0],oe[1]-re[1]);Pt>0&&jt>0&&q.zoomAt(jt/Pt,(oe[0]+re[0])/2,(oe[1]+re[1])/2),Pt=jt,_t=99}});let Ft=Dt=>{Q.delete(Dt.pointerId)&&q.expanded&&Q.size===0&&_t<=6&&Dt.type==="pointerup"&&q.pick(Dt.clientX,Dt.clientY,F),Pt=0};T.addEventListener("pointerup",Ft),T.addEventListener("pointercancel",Ft),Rt("map-zoom-in").onclick=()=>q.zoomAt(1.5),Rt("map-zoom-out").onclick=()=>q.zoomAt(1/1.5)}for(let T of document.querySelectorAll(".swatch"))T.onclick=()=>$t(T.dataset.color);function rt(T,Q=!0){it.setStation(T),Qe.set("pacific-radio",String(T)),Rt("radio-select").value=String(T),Rt("radio-name").textContent=T<0?"OFF":Ri[T].name,Rt("radio-genre").textContent=T<0?"Q TO TUNE":Ri[T].genre.toUpperCase(),document.querySelector(".radio").classList.toggle("off",T<0),Q&&F.state==="play"&&xt(T<0?"RADIO OFF":`\u266A ${Ri[T].name}`)}Rt("radio-select").onchange=T=>rt(Number(T.target.value),!1);function yt(T){u.setHandling(T),Qe.set("pacific-handling",u.mode),Rt("handling-select").value=u.mode}Rt("handling-select").onchange=T=>{yt(T.target.value),F.state==="play"&&xt(Zo[u.mode].label)},yt(Qe.get("pacific-handling")||"easy");let K={slow:.6,standard:1,off:0},ot="slow";function Tt(T){ot=T in K?T:"slow",m.policePace=K[ot]||.6,Qe.set("pacific-police",ot),Rt("police-select").value=ot,ot==="off"&&k.reset()}Rt("police-select").onchange=T=>{Tt(T.target.value),F.state==="play"&&xt({slow:"RELAXED POLICE",standard:"STANDARD POLICE",off:"POLICE OFF"}[ot])},Tt(Qe.get("pacific-police")||"slow");let ht=Object.keys(bn),wt=T=>T==="sunset"?"pacific-best":"pacific-best-"+T,Gt=T=>T.toLowerCase().replace(/\b\w/g,Q=>Q.toUpperCase());function V(T){bn[T]||(T="sunset"),F.raceId=T,F.route=bn[T].route,F.raceName=bn[T].name,Qe.set("pacific-race",T),Rt("race-select").value=T,Rt("race-name").textContent=bn[T].name;let Q=Number(Qe.get(wt(T)));Rt("race-info").textContent=`${bn[T].route.length} CHECKPOINTS \xB7 ${Q?"BEST "+na(Q):bn[T].blurb.toUpperCase()}`,Rt("trial").firstChild.textContent=bn[T].name+" ",Rt("start-trial").firstChild.textContent=`Start ${Gt(bn[T].name)} `,Rt("start-trial").querySelector("span").textContent=`${bn[T].route.length} CHECKPOINTS`,document.querySelector("#race > span").textContent=bn[T].name,document.querySelector("#result .eyebrow").textContent=bn[T].name+" COMPLETE"}let bt=T=>V(ht[(ht.indexOf(F.raceId)+T+ht.length)%ht.length]);Rt("race-prev").onclick=()=>bt(-1),Rt("race-next").onclick=()=>bt(1),Rt("race-select").onchange=T=>V(T.target.value),V(Qe.get("pacific-race")||"sunset");let At=Qe.get("pacific-fps")!=="off",vt=Rt("fps"),dt={frames:0,time:0,worst:0};function ut(T){At=T,Qe.set("pacific-fps",T?"on":"off"),Rt("fps-select").value=T?"on":"off",vt.classList.toggle("hidden",!T)}Rt("fps-select").onchange=T=>ut(T.target.value==="on"),ut(At);let Xt=Number(Qe.get("pacific-radio")??0);rt(Number.isInteger(Xt)&&Xt<Ri.length?Xt:0,!1);let se=()=>it.unlock();for(let T of["pointerdown","keydown","touchend","click"])addEventListener(T,se,{once:!0});Rt("car-prev").onclick=()=>st(-1),Rt("car-next").onclick=()=>st(1),Rt("car-menu").onchange=T=>Ut(T.target.value,F.state==="play"),Ut(d);let Ie=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);addEventListener("keydown",T=>{if(T.target.tagName!=="SELECT"&&(Ie.has(T.code)&&T.preventDefault(),!T.repeat)){if(T.code==="Escape"){T.preventDefault(),Rt("menu").open?J():F.state==="play"&&Y();return}if(T.code==="Enter"&&F.state==="intro"&&!F.paused){Et("free");return}if(F.state==="intro"&&!F.paused&&(T.code==="ArrowLeft"||T.code==="ArrowRight")){st(T.code==="ArrowLeft"?-1:1);return}if(T.code==="KeyT"&&!F.paused){x();return}if(!(F.state!=="play"||F.paused)){if(T.code==="KeyP")return Y();if(T.code==="KeyR")return U();if(T.code==="KeyC")return S();if(T.code==="KeyM")return R();if(q.expanded&&(T.code==="Equal"||T.code==="NumpadAdd"))return q.zoomAt(1.5);if(q.expanded&&(T.code==="Minus"||T.code==="NumpadSubtract"))return q.zoomAt(1/1.5);if(T.code==="KeyH"){it.horn(3);return}if(T.code==="KeyF"){ut(!At),xt(At?"FPS COUNTER ON":"FPS COUNTER OFF");return}if(T.code==="KeyQ"){rt(it.station+1>=Ri.length?-1:it.station+1);return}Z.keys.add(T.code)}}}),addEventListener("keyup",T=>Z.keys.delete(T.code)),addEventListener("blur",()=>{Z.clear(),F.state==="play"&&!F.paused&&Y()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(Z.clear(),F.state==="play"&&!F.paused&&Y())}),Z.onPadPress=T=>{if(T==="pause")return F.paused?J():F.state==="play"?Y():Et("free");F.state!=="play"||F.paused||(T==="camera"&&S(),T==="map"&&R(),T==="reset"&&U())};for(let T of document.querySelectorAll("[data-key]")){let Q=()=>{Z.keys.delete(T.dataset.key),T.classList.remove("pressed")};T.addEventListener("pointerdown",_t=>{_t.preventDefault(),!F.paused&&(T.setPointerCapture(_t.pointerId),Z.keys.add(T.dataset.key),T.classList.add("pressed"))}),T.addEventListener("pointerup",Q),T.addEventListener("pointercancel",Q),T.addEventListener("lostpointercapture",Q)}addEventListener("resize",()=>s.applySize()),Rt("touch-cam").onclick=()=>S(),Rt("touch-radio").onclick=()=>rt(it.station+1>=Ri.length?-1:it.station+1),Rt("touch-reset").onclick=()=>{F.state==="play"&&!F.paused&&U()},addEventListener("contextmenu",T=>{Cc&&T.preventDefault()}),document.addEventListener("gesturestart",T=>T.preventDefault()),addEventListener("touchmove",T=>{F.state==="play"&&!T.target.closest("dialog, .map-panel.expanded")&&T.preventDefault()},{passive:!1});function be(){if(!Cc)return;let T=document.documentElement,Q=T.requestFullscreen||T.webkitRequestFullscreen;Q&&!document.fullscreenElement&&Promise.resolve(Q.call(T,{navigationUI:"hide"})).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{}),innerHeight>innerWidth&&setTimeout(()=>xt("TURN YOUR PHONE SIDEWAYS"),2600)}let De=new D,ln=new D,$n=new D,Gn=0,Ji="",sr=Rt("world-clock"),rr=document.querySelector(".sun-icon"),Ci=new D,Qi=new Ht,bi=new Ht,ji=!1;function Ss(T,Q,_t,Pt,Ft,Dt,te){let oe=0,re=2e3;for(let jt=0;jt<3;jt++){let Jt=jt===0?T:jt===1?Q:_t,Te=jt===0?Pt:jt===1?Ft:Dt,xe=jt===0?te.x-te.w/2:jt===1?0:te.z-te.d/2,yn=jt===0?te.x+te.w/2:jt===1?te.h:te.z+te.d/2;if(Math.abs(Te)<1e-6){if(Jt<xe||Jt>yn)return!1;continue}let Ze=(xe-Jt)/Te,Ge=(yn-Jt)/Te;if(Ze>Ge){let ai=Ze;Ze=Ge,Ge=ai}if(oe=Math.max(oe,Ze),re=Math.min(re,Ge),oe>re)return!1}return!0}function or(){let T=r.sunDir,Q=n.position;if($n.copy(Q).addScaledVector(T,1e3).project(n),r.elevation<-.5||$n.z>1||T.y<.75&&o.topsGrid.segment(Q.x,Q.z,Q.x+T.x*900,Q.z+T.z*900,Pt=>Ss(Q.x,Q.y,Q.z,T.x,T.y,T.z,Pt)))return 0;for(let Pt=60;Pt<3200;Pt*=1.35)if(Q.y+T.y*Pt<yi(Q.x+T.x*Pt,Q.z+T.z*Pt))return 0;let _t=Math.max(Math.abs($n.x),Math.abs($n.y));return _e.clamp(1.25-_t,0,1)*_e.smoothstep(r.elevation,-.5,4)}function ar(T){let Q=Math.abs(u.speed)>3,_t=u.slip>3.2&&Q||u.wheelspin>.3,Pt=u.surface==="sand"&&u.y<.5;u.group.updateMatrixWorld();let Ft=new Lt().copy(r.hemi.color).multiplyScalar(r.hemi.intensity*.55).add(new Lt().copy(r.sun.color).multiplyScalar(r.elevation>0?r.sun.intensity*.22:0));_.smoke.uniforms.light.value.copy(Ft),_.dust.uniforms.light.value.copy(Ft),_.water.uniforms.light.value.copy(Ft).multiplyScalar(1.3);for(let re=zt.length-1;re>=0;re--){let jt=zt[re];if(jt.t-=T,jt.t<=0){zt.splice(re,1);continue}let Jt=Math.min(1,jt.t/3)*70*T;for(let Te=0;Te<Jt+(mt()<Jt%1?1:0);Te++)_.water.emit(jt.x+(mt()-.5)*.2,ne+.3,jt.z+(mt()-.5)*.2,(mt()-.5)*1.6,8.5+mt()*3.5,(mt()-.5)*1.6,.35+mt()*.25,1.5+mt()*.6,.5,.8,.88,.95)}u.wheels.forEach((re,jt)=>{if(re.front)return;De.set(re.x,.05,re.z).applyMatrix4(u.group.matrixWorld),M.add(jt,De.x,u.y,De.z,!Pt&&(_t||u.brake>0&&u.speed>14&&u.handbrake),.24);let Jt=Math.min(1,(u.slip-3)/9)+u.wheelspin;!Pt&&_t&&mt()<Jt*60*T&&_.smoke.emit(De.x,De.y+.3,De.z,u.vx*.15+(mt()-.5)*1.5,.6+mt(),u.vz*.15+(mt()-.5)*1.5,1.2+mt()*.8,2.2+mt()*1.2,.5*Math.min(1,Jt+.3),.85,.85,.86),Pt&&Q&&mt()<Math.min(1,Math.abs(u.speed)/25)*40*T&&_.dust.emit(De.x,De.y+.2,De.z,(mt()-.5)*2,.8+mt(),(mt()-.5)*2,.9+mt()*.6,1.4+mt(),.55,.78,.68,.52)});let Dt=Ci.set(Math.sin(u.heading),0,Math.cos(u.heading));for(let re of u.exhausts)if(De.copy(re).applyMatrix4(u.group.matrixWorld),u.boosting)for(let jt=0;jt<2;jt++){let Jt=mt(),Te=mt()<.35,xe=7+mt()*5;_.flames.emit(De.x,De.y,De.z,u.vx+Dt.x*xe,mt()*.4,u.vz+Dt.z*xe,.3+mt()*.25,.1+mt()*.08,1,Te?.6:1.4+Jt,Te?1.1:.8+Jt*1.4,Te?4.5:2.8)}else u.throttle===0&&u.rpm>u.def.redline*.6&&mt()<3*T&&(_.flames.emit(De.x,De.y,De.z,u.vx+Dt.x*3,0,u.vz+Dt.z*3,.35,.07,1,2.2,1.1,.4),it.backfire?.());let te=u.contact;if(te&&u.impact>3){let re=Math.min(46,Math.floor(u.impact*2.2));for(let jt=0;jt<re;jt++)_.sparks.emit(te.x,u.y+.35+mt()*.4,te.z,te.nx*4+(mt()-.5)*9,1+mt()*5,te.nz*4+(mt()-.5)*9,.12+mt()*.1,.4+mt()*.5,1,6,3.2,1);if(u.impact>4)for(let jt=0;jt<4;jt++)_.dust.emit(te.x,u.y+.5,te.z,(mt()-.5)*2,mt(),(mt()-.5)*2,.6,1.1,.35,.6,.58,.55);it.impact(u.impact),W.shake=Math.max(W.shake,Math.min(.55,u.impact*.035))}let oe=u.scrape;if(oe){let re=Math.min(6,1+Math.floor(oe.speed/8));for(let jt=0;jt<re;jt++)_.sparks.emit(oe.x,u.y+.3+mt()*.3,oe.z,-u.vx*.25+oe.nx*2+(mt()-.5)*3,.5+mt()*2.5,-u.vz*.25+oe.nz*2+(mt()-.5)*3,.1+mt()*.08,.25+mt()*.3,1,6,3,.9);it.scrape?.(oe.speed)}}function lr(T){if(F.mode!=="race"||F.checkpoint>=F.route.length||F.countdown>.6)return;F.raceTime+=T,F.topSpeed=Math.max(F.topSpeed,Math.abs(u.speed));let[Q,_t]=F.route[F.checkpoint],Pt=F.lastX,Ft=F.lastZ,Dt=u.x-Pt,te=u.z-Ft,oe=Dt*Dt+te*te,re=oe?_e.clamp(((Q-Pt)*Dt+(_t-Ft)*te)/oe,0,1):0;Math.hypot(Q-Pt-Dt*re,_t-Ft-te*re)<Jl&&(F.checkpoint++,F.splits.push(F.raceTime),F.checkpoint===F.route.length?j():(Ct(),it.chime(),xt(`CHECKPOINT ${F.checkpoint} / ${F.route.length}`),F.flash=1))}function ze(T,Q){u.contact=null,u.scrape=null,u.impact=0,p.update(T,F.time,u),m.peds=p.onRoad,m.update(T,F.time,u,Dt=>it.horn(Math.hypot(Dt.x-u.x,Dt.z-u.z)),n);for(let Dt of p.events)Dt.type==="hit"&&(it.impact(Math.min(Dt.speed,8)),W.shake=Math.max(W.shake,.08),F.state==="play"&&Tn("pedestrian",u.x,u.z,1));if(F.state!=="play")return;H(T)&&(Q={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},u.vx=u.vz=0);let _t=m.lastHit;_t&&_t.speed>4&&(F.crashes+=_t.speed>7?1:0,_t.police&&(_t.car.mode!=="chase"||k.level<2)?Tn("police",_t.x,_t.z,1,!1):(!_t.parked||_t.speed>8)&&Tn("crash",_t.x,_t.z,1));let Pt=u.impact,Ft=Math.ceil(T/(1/120));for(let Dt=0;Dt<Ft&&(F.lastX=u.x,F.lastZ=u.z,u.update(T/Ft,Q,B),Pt=Math.max(Pt,u.impact),lr(T/Ft),!F.paused);Dt++);h.collide(u,T,Dt=>kt(Dt)),h.update(T,u),u.impact=Math.max(Pt,u.impact),u.applyDamage(),C(),k.update(T,u,F.time,n,F.mode==="free"&&ot!=="off");for(let Dt of k.events)Dt.type==="up"&&xt(`WANTED  ${"\u2605".repeat(Dt.level)}`),Dt.type==="evaded"&&(xt("YOU LOST THEM"),it.chime()),Dt.type==="busted"&&tt()}function Tn(T,Q,_t,Pt,Ft=!0){F.mode!=="free"||ot==="off"||k.crime(T,Q,_t,Pt,F.time,Ft)}let oi=!1;function C(){let T=Yi(u.x),Q=ys(u.z),_t=Math.abs(u.x-T)<ee-1&&Math.abs(u.z-Q)<ee-1;if(_t&&!oi&&Math.abs(u.speed)>9){let Pt=Math.abs(u.vx)>Math.abs(u.vz)?1:0;bs(Pt,F.time)===0&&Tn("red light",u.x,u.z,1)}oi=_t}function tt(){xt("BUSTED"),F.flash=1.5,it.impact(4),u.safeRespawn(),F.lastX=u.x,F.lastZ=u.z,W.snap(u)}let lt=new Io,ct=[u.group],nt=1,It=0;t.info.autoReset=!1;function qt(){requestAnimationFrame(qt),t.info.reset();let T=lt.getDelta(),Q=Math.min(T,.05);F.time+=Q,F.frame++;let _t=Z.poll();F.paused||(ze(Q,_t),F.state==="play"?(ar(Q),W.update(u,Q)):W.orbit(u,F.time)),u.setLights(r.lampFactor,u.gear<0?u.throttle>0:u.brake>0&&u.speed>.5,u.gear<0&&F.state==="play",Q);let Pt=De.set(u.x-Math.sin(u.heading)*s.quality.shadowRange*.35,0,u.z-Math.cos(u.heading)*s.quality.shadowRange*.35);r.update(Q,F.time,Pt,n),ou.value.copy(r.sun.color).multiplyScalar(r.elevation>-1?r.sun.intensity:.1),o.update(r.lampFactor,F.time),It-=T,It<=0&&(It=.2,iu(n.position.x,n.position.z)),l.update(F.time,r.lampFactor),f.update(r.lampFactor),a.mirrorHide.length=0,W.mode===2&&a.mirrorHide.push(u.group),a.update(F.time,r),m.sync(r.lampFactor,u,F.time);for(let Ze of Object.values(_))Ze.update(F.paused?0:Q);y.visible&&(w.position.y=12+Math.sin(F.time*2)*.6,w.rotation.y=F.time*.8,b.uniforms.intensity.value=.55+Math.sin(F.time*3)*.12,I.opacity=.65+Math.sin(F.time*3)*.15),t.toneMappingExposure=r.exposure;let Ft=s.grade.uniforms;Ft.time.value=F.time,Gn=_e.damp(Gn,or(),10,Q),Ft.sunVisible.value=s.quality.grade?Gn*.8:0,Ft.sunPos.value.set($n.x*.5+.5,$n.y*.5+.5),Ft.sunColor.value.copy(Ne.fogSunColor.value),n.getWorldDirection(ln);let Dt=ln.dot(r.sunDir),te=_e.smoothstep(r.elevation,-1,2)*(1-_e.smoothstep(r.elevation,14,30)),oe=s.shafts.uniforms;oe.strength.value=$n.z<1?_e.smoothstep(Dt,.25,.85)*te*.9:0,oe.sunPos.value.copy(Ft.sunPos.value),oe.color.value.copy(r.sun.color).multiplyScalar(.9);let re=Nt==="wet"?.9:Nt==="dry"?0:_e.smoothstep(r.lampFactor,.15,.85)*.85;if(kn.wetness.value=re,B.wetness=re,n.updateMatrixWorld(),bi.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Ft.camBlur.value.set(0,0),ji&&F.state==="play"&&!F.paused&&s.quality.grade){De.copy(n.position).addScaledVector(ln,80).applyMatrix4(Qi);let Ze=De.x*.5,Ge=De.y*.5,ai=Math.hypot(Ze,Ge);if(ai<.12){let qe=ai>.035?.035/ai:1;Ft.camBlur.value.set(Ze*qe,Ge*qe)}}Qi.copy(bi),ji=!0;let jt=_e.clamp((Math.abs(u.speed)-30)/35,0,1);Ft.speedBlur.value=F.state==="play"&&s.quality.grade?jt*.6+(u.boosting?.45:0):0,F.flash=Math.max(0,F.flash-Q*3),Ft.flash.value=F.flash,Ft.night.value=r.nightFactor,Ft.warmth.value=_e.smoothstep(r.elevation,-6,1)*(1-_e.smoothstep(r.elevation,9,24));let Jt=F.state!=="play"?1:W.mode===3?.75:0;nt=_e.damp(nt,Jt,4,Q),Ft.dof.value=nt,Ft.focus.value=Math.max(2,n.position.distanceTo(u.group.position)-.6),s.bloom&&(s.bloom.strength=.36+r.lampFactor*.22),s.beginFrame(),n.getWorldDirection(ln),g.update(T,De.set(n.position.x+ln.x*330,0,n.position.z+ln.z*330),r.lightDir,Ze=>{let Ge=y.visible;a.mirror.paused=!0,r.sky.visible=a.ocean.visible=y.visible=!1,Ze(),y.visible=Ge,r.sky.visible=a.ocean.visible=!0,a.mirror.paused=!1}),v.size&&!F.paused&&v.update(u.group.position,ct,Math.min(1,e.environmentIntensity*1.9),Ze=>{let Ge=r.sky.material.uniforms.skyDisc;a.mirror.paused=!0,Ge.value=0,Ze(),Ge.value=1,a.mirror.paused=!1}),s.render(),F.state==="play"&&F.frame%2===0&&q.update(u,F,m,r,k),it.setSiren(F.state==="play"?k.sirenLevel(u):0);let Te=r.clockLabel;Te!==Ji&&(Ji=Te,sr.textContent=Te,rr.textContent=r.elevation>-1.5?"\u2600":"\u263E");let xe=Ql(u.x,u.z),yn=u.gear>0?u.def.gears[u.gear-1]*u.def.final:u.def.gears[0]*u.def.final;if(it.update({rpm:u.rpm,throttle:u.throttle,speed:u.speed,slip:u.slip+u.wheelspin*12,boosting:u.boosting,active:F.state==="play"&&!F.paused,shoreDistance:Math.abs(n.position.x-In),time:F.time,gear:u.gear,ratio:yn,night:r.nightFactor,city:xe[2],nearTrees:xe[3]>.5?.6:.2}),F.state==="play"&&!F.paused&&s.adapt(T),At&&(dt.frames++,dt.time+=T,dt.worst=Math.max(dt.worst,T),dt.time>=.5)){let Ze=dt.frames/dt.time,Ge=dt.time/dt.frames*1e3;vt.textContent=`${Math.round(Ze)} FPS \xB7 ${Ge.toFixed(1)} MS \xB7 WORST ${(dt.worst*1e3).toFixed(0)} \xB7 ${t.info.render.calls} DRAWS \xB7 ${(t.info.render.triangles/1e6).toFixed(1)}M TRIS \xB7 ${Math.round(s.scale*100)}% RES`,vt.classList.toggle("slow",Ze<50&&Ze>=30),vt.classList.toggle("bad",Ze<30),dt.frames=0,dt.time=0,dt.worst=0}}u.onShift=T=>it.shift(T>0),await i("Warming up the engine\u2026"),W.orbit(u,0),r.update(0,0,De.set(u.x,0,u.z),n),iu(u.x,u.z);try{await t.compileAsync(e,n)}catch{}qt(),requestAnimationFrame(()=>Rt("loading").classList.add("hidden")),window.__pacific={getState:()=>({state:F.state,mode:F.mode,paused:F.paused,speed:u.speed,heading:u.heading,nitro:u.nitro,position:{x:u.x,z:u.z,y:u.y},checkpoint:F.checkpoint,raceTime:F.raceTime,quality:Mt,time:r.hours,gear:u.gear,rpm:u.rpm,distanceTravelled:u.distance,renderScale:s.scale,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,wanted:k.level,countdown:F.countdown,car:d}),setTime:T=>{r.cycle=!1,r.setHours(T)},setQuality:Wt,teleport:(T,Q,_t=0)=>{u.reset(T,Q,_t),W.snap(u)},step:(T,Q={})=>{let _t={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1,...Q};for(let Pt=0;Pt<T&&!F.paused;Pt+=1/60)F.time+=1/60,ze(1/60,_t);return W.snap(u),window.__pacific.getState()},parked:()=>({total:m.parked.length,near:m.nearParked.length,sample:m.nearParked.slice(0,3).map(T=>[T.type,+T.x.toFixed(1),+T.z.toFixed(1),T.slot])}),traffic:()=>m.cars.map(T=>({x:+T.x.toFixed(1),z:+T.z.toFixed(1),speed:+T.speed.toFixed(1),axis:T.axis,turn:!!T.turn,hit:!!T.hit})),reset:U,camera:S,debug:{scene:e,atmosphere:r,pipeline:s,renderer:t,camera:n,rig:W,traffic:m,pedestrians:p,player:u,knock:h,world:B,audio:it,wanted:k,hud:q,game:F,input:Z,city:o,vegetation:c,lodStats:zd,farShadow:g,probe:v},selectCar:Ut}}V1().catch(vp);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
