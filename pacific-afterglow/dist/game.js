var Kf=0,Jh=1,Jf=2;var jh=1,Pl=2,Hi=3,Qi=0,Kn=1,Sn=2,os=0,ts=1,ai=2,Qh=3,tu=4,jf=5,bs=100,Qf=101,td=102,ed=103,nd=104,id=200,sd=201,rd=202,od=203,nl=204,il=205,ad=206,ld=207,cd=208,hd=209,ud=210,fd=211,dd=212,pd=213,md=214,Il=0,Dl=1,Ll=2,Ws=3,Fl=4,zl=5,Ul=6,Nl=7,eu=0,gd=1,xd=2,Ii=0,vd=1,yd=2,_d=3,Md=4,bd=5,wd=6,Ed=7;var nu=300,js=301,Qs=302,Ol=303,Bl=304,sa=306,ws=1e3,Ms=1001,sl=1002,Qn=1003,Sd=1004;var ra=1005;var ii=1006,kl=1007;var As=1008;var Di=1009,iu=1010,su=1011,qr=1012,Hl=1013,Rs=1014,Li=1015,kn=1016,Gl=1017,Vl=1018,Yr=1020,ru=35902,ou=35899,au=1021,lu=1022,bi=1023,Lr=1026,Zr=1027,Wl=1028,Xl=1029,cu=1030,ql=1031;var Yl=1033,oa=33776,aa=33777,la=33778,ca=33779,Zl=35840,$l=35841,Kl=35842,Jl=35843,jl=36196,Ql=37492,tc=37496,ec=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,hc=37817,uc=37818,fc=37819,dc=37820,pc=37821,mc=36492,gc=36494,xc=36495,vc=36283,yc=36284,_c=36285,Mc=36286;var To=2300,rl=2301,el=2302,Bh=2400,kh=2401,Hh=2402;var Td=3200,bc=3201;var hu=0,Ad=1,as="",$n="srgb",Xs="srgb-linear",Ao="linear",hn="srgb";var Gs=7680;var Gh=519,Rd=512,Cd=513,Pd=514,ha=515,Id=516,Dd=517,Ld=518,Fd=519,Vh=35044,wi=35048;var uu="300 es",Ci=2e3,Ro=2001;var es=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_f=1234567,bo=Math.PI/180,qs=180/Math.PI;function tr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jn[s&255]+Jn[s>>8&255]+Jn[s>>16&255]+Jn[s>>24&255]+"-"+Jn[t&255]+Jn[t>>8&255]+"-"+Jn[t>>16&15|64]+Jn[t>>24&255]+"-"+Jn[e&63|128]+Jn[e>>8&255]+"-"+Jn[e>>16&255]+Jn[e>>24&255]+Jn[n&255]+Jn[n>>8&255]+Jn[n>>16&255]+Jn[n>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function fu(s,t){return(s%t+t)%t}function S0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function T0(s,t,e){return s!==t?(e-s)/(t-s):0}function wo(s,t,e){return(1-e)*s+e*t}function A0(s,t,e,n){return wo(s,t,1-Math.exp(-e*n))}function R0(s,t=1){return t-Math.abs(fu(s,t*2)-t)}function C0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function P0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function I0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function D0(s,t){return s+Math.random()*(t-s)}function L0(s){return s*(.5-Math.random())}function F0(s){s!==void 0&&(_f=s);let t=_f+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function z0(s){return s*bo}function U0(s){return s*qs}function N0(s){return(s&s-1)===0&&s!==0}function O0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function B0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function k0(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*l,c*f,c*d,a*h);break;case"YZY":s.set(c*d,a*l,c*f,a*h);break;case"ZXZ":s.set(c*f,c*d,a*l,a*h);break;case"XZX":s.set(a*l,c*g,c*u,a*h);break;case"YXY":s.set(c*u,a*l,c*g,a*h);break;case"ZYZ":s.set(c*g,c*u,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ir(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ne={DEG2RAD:bo,RAD2DEG:qs,generateUUID:tr,clamp:We,euclideanModulo:fu,mapLinear:S0,inverseLerp:T0,lerp:wo,damp:A0,pingpong:R0,smoothstep:C0,smootherstep:P0,randInt:I0,randFloat:D0,randFloatSpread:L0,seededRandom:F0,degToRad:z0,radToDeg:U0,isPowerOfTwo:N0,ceilPowerOfTwo:O0,floorPowerOfTwo:B0,setQuaternionFromProperEuler:k0,normalize:ni,denormalize:Ir},St=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],h=n[i+1],l=n[i+2],f=n[i+3],d=r[o+0],u=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==d||h!==u||l!==g){let m=1-a,p=c*d+h*u+l*g+f*x,_=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let E=Math.sqrt(M),A=Math.atan2(E,p*_);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}let v=a*_;if(c=c*m+d*v,h=h*m+u*v,l=l*m+g*v,f=f*m+x*v,m===1-a){let E=1/Math.sqrt(c*c+h*h+l*l+f*f);c*=E,h*=E,l*=E,f*=E}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],h=n[i+2],l=n[i+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+l*f+c*u-h*d,t[e+1]=c*g+l*d+h*f-a*u,t[e+2]=h*g+l*u+a*d-c*f,t[e+3]=l*g-a*f-c*d-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(i/2),f=a(r/2),d=c(n/2),u=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"YXZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"ZXY":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"ZYX":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"YZX":this._x=d*l*f+h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f-d*u*g;break;case"XZY":this._x=d*l*f-h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(l-c)*u,this._y=(r-h)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(l-c)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+h)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-h)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(c+l)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+h)/u,this._y=(c+l)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+i*h-r*c,this._y=i*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-i*a,this._w=o*l-n*a-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,a),f=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*i-a*n),l=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+c*h+o*f-a*l,this.y=n+c*l+a*h-r*f,this.z=i+c*f+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this.z=We(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this.z=We(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dh.copy(this).projectOnVector(t),this.sub(dh)}reflect(t){return this.sub(dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dh=new P,Mf=new He,ze=class s{constructor(t,e,n,i,r,o,a,c,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h)}set(t,e,n,i,r,o,a,c,h){let l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],f=n[7],d=n[2],u=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],M=i[4],v=i[7],E=i[2],A=i[5],L=i[8];return r[0]=o*x+a*_+c*E,r[3]=o*m+a*M+c*A,r[6]=o*p+a*v+c*L,r[1]=h*x+l*_+f*E,r[4]=h*m+l*M+f*A,r[7]=h*p+l*v+f*L,r[2]=d*x+u*_+g*E,r[5]=d*m+u*M+g*A,r[8]=d*p+u*v+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+i*r*h-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=l*o-a*h,d=a*c-l*r,u=h*r-o*c,g=e*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(i*h-l*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(l*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=u*x,t[7]=(n*c-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-i*h,i*c,-i*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ph.makeScale(t,e)),this}rotate(t){return this.premultiply(ph.makeRotation(-t)),this}translate(t,e){return this.premultiply(ph.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ph=new ze;function du(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zd(){let s=Co("canvas");return s.style.display="block",s}var bf={};function Fr(s){s in bf||(bf[s]=!0,console.warn(s))}function Ud(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wf=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ef=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H0(){let s={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===hn&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===hn&&(i.r=Dr(i.r),i.g=Dr(i.g),i.b=Dr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===as?Ao:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Xs]:{primaries:t,whitePoint:n,transfer:Ao,toXYZ:wf,fromXYZ:Ef,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:t,whitePoint:n,transfer:hn,toXYZ:wf,fromXYZ:Ef,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),s}var nn=H0();function ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Dr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var vr,ol=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vr===void 0&&(vr=Co("canvas")),vr.width=t.width,vr.height=t.height;let i=vr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=vr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Co("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},G0=0,zr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=tr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(mh(i[o].image)):r.push(mh(i[o]))}else r=mh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function mh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ol.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var V0=0,gh=new P,si=class s extends es{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ms,i=Ms,r=ii,o=As,a=bi,c=Di,h=s.DEFAULT_ANISOTROPY,l=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=tr(),this.name="",this.source=new zr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ws:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ws:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=nu;si.DEFAULT_ANISOTROPY=1;var Ke=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,h=c[0],l=c[4],f=c[8],d=c[1],u=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(h+1)/2,v=(u+1)/2,E=(p+1)/2,A=(l+d)/4,L=(f+x)/4,I=(g+m)/4;return M>v&&M>E?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=L/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=I/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=L/r,i=I/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(d-l)/_,this.w=Math.acos((h+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this.z=We(this.z,t.z,e.z),this.w=We(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this.z=We(this.z,t,e),this.w=We(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends es{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new si(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new zr(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends al{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Po=class extends si{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends si{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ti):Ti.fromBufferAttribute(r,o),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(t.matrixWorld),this.union(Ia)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(po),Da.subVectors(this.max,po),yr.subVectors(t.a,po),_r.subVectors(t.b,po),Mr.subVectors(t.c,po),ps.subVectors(_r,yr),ms.subVectors(Mr,_r),Os.subVectors(yr,Mr);let e=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Os.z,Os.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Os.z,0,-Os.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Os.y,Os.x,0];return!xh(e,yr,_r,Mr,Da)||(e=[1,0,0,0,1,0,0,0,1],!xh(e,yr,_r,Mr,Da))?!1:(La.crossVectors(ps,ms),e=[La.x,La.y,La.z],xh(e,yr,_r,Mr,Da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yi=[new P,new P,new P,new P,new P,new P,new P,new P],Ti=new P,Ia=new _i,yr=new P,_r=new P,Mr=new P,ps=new P,ms=new P,Os=new P,po=new P,Da=new P,La=new P,Bs=new P;function xh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Bs.fromArray(s,r);let a=i.x*Math.abs(Bs.x)+i.y*Math.abs(Bs.y)+i.z*Math.abs(Bs.z),c=t.dot(Bs),h=e.dot(Bs),l=n.dot(Bs);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}var W0=new _i,mo=new P,vh=new P,Pi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):W0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mo.subVectors(t,this.center);let e=mo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(mo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mo.copy(t.center).add(vh)),this.expandByPoint(mo.copy(t.center).sub(vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zi=new P,yh=new P,Fa=new P,gs=new P,_h=new P,za=new P,Mh=new P,Io=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){yh.copy(t).add(e).multiplyScalar(.5),Fa.copy(e).sub(t).normalize(),gs.copy(this.origin).sub(yh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fa),a=gs.dot(this.direction),c=-gs.dot(Fa),h=gs.lengthSq(),l=Math.abs(1-o*o),f,d,u,g;if(l>0)if(f=o*c-a,d=o*a-c,g=r*l,f>=0)if(d>=-g)if(d<=g){let x=1/l;f*=x,d*=x,u=f*(f+o*d+2*a)+d*(o*f+d+2*c)+h}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+h):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(yh).addScaledVector(Fa,d),u}intersectSphere(t,e){Zi.subVectors(t.center,this.origin);let n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,h=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),l>=0?(r=(t.min.y-d.y)*l,o=(t.max.y-d.y)*l):(r=(t.max.y-d.y)*l,o=(t.min.y-d.y)*l),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,n,i,r){_h.subVectors(e,t),za.subVectors(n,t),Mh.crossVectors(_h,za);let o=this.direction.dot(Mh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gs.subVectors(this.origin,t);let c=a*this.direction.dot(za.crossVectors(gs,za));if(c<0)return null;let h=a*this.direction.dot(_h.cross(gs));if(h<0||c+h>o)return null;let l=-a*gs.dot(Mh);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class s{constructor(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m)}set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=l,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/br.setFromMatrixColumn(t,0).length(),r=1/br.setFromMatrixColumn(t,1).length(),o=1/br.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*l,u=o*f,g=a*l,x=a*f;e[0]=c*l,e[4]=-c*f,e[8]=h,e[1]=u+g*h,e[5]=d-x*h,e[9]=-a*c,e[2]=x-d*h,e[6]=g+u*h,e[10]=o*c}else if(t.order==="YXZ"){let d=c*l,u=c*f,g=h*l,x=h*f;e[0]=d+x*a,e[4]=g*a-u,e[8]=o*h,e[1]=o*f,e[5]=o*l,e[9]=-a,e[2]=u*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*l,u=c*f,g=h*l,x=h*f;e[0]=d-x*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*l,e[9]=x-d*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*l,u=o*f,g=a*l,x=a*f;e[0]=c*l,e[4]=g*h-u,e[8]=d*h+x,e[1]=c*f,e[5]=x*h+d,e[9]=u*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,u=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=x-d*f,e[8]=g*f+u,e[1]=f,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=u*f+g,e[10]=d-x*f}else if(t.order==="XZY"){let d=o*c,u=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=-f,e[8]=h*l,e[1]=d*f+x,e[5]=o*l,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*l,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(X0,t,q0)}lookAt(t,e,n){let i=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),xs.crossVectors(n,ui),xs.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),xs.crossVectors(n,ui)),xs.normalize(),Ua.crossVectors(ui,xs),i[0]=xs.x,i[4]=Ua.x,i[8]=ui.x,i[1]=xs.y,i[5]=Ua.y,i[9]=ui.y,i[2]=xs.z,i[6]=Ua.z,i[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],f=n[5],d=n[9],u=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],M=n[7],v=n[11],E=n[15],A=i[0],L=i[4],I=i[8],S=i[12],w=i[1],N=i[5],H=i[9],B=i[13],O=i[2],k=i[6],G=i[10],rt=i[14],et=i[3],z=i[7],Tt=i[11],Rt=i[15];return r[0]=o*A+a*w+c*O+h*et,r[4]=o*L+a*N+c*k+h*z,r[8]=o*I+a*H+c*G+h*Tt,r[12]=o*S+a*B+c*rt+h*Rt,r[1]=l*A+f*w+d*O+u*et,r[5]=l*L+f*N+d*k+u*z,r[9]=l*I+f*H+d*G+u*Tt,r[13]=l*S+f*B+d*rt+u*Rt,r[2]=g*A+x*w+m*O+p*et,r[6]=g*L+x*N+m*k+p*z,r[10]=g*I+x*H+m*G+p*Tt,r[14]=g*S+x*B+m*rt+p*Rt,r[3]=_*A+M*w+v*O+E*et,r[7]=_*L+M*N+v*k+E*z,r[11]=_*I+M*H+v*G+E*Tt,r[15]=_*S+M*B+v*rt+E*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],f=t[6],d=t[10],u=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*f-i*h*f-r*a*d+n*h*d+i*a*u-n*c*u)+x*(+e*c*u-e*h*d+r*o*d-i*o*u+i*h*l-r*c*l)+m*(+e*h*f-e*a*u-r*o*f+n*o*u+r*a*l-n*h*l)+p*(-i*a*l-e*c*f+e*a*d+i*o*f-n*o*d+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=t[9],d=t[10],u=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=f*m*h-x*d*h+x*c*u-a*m*u-f*c*p+a*d*p,M=g*d*h-l*m*h-g*c*u+o*m*u+l*c*p-o*d*p,v=l*x*h-g*f*h+g*a*u-o*x*u-l*a*p+o*f*p,E=g*f*c-l*x*c-g*a*d+o*x*d+l*a*m-o*f*m,A=e*_+n*M+i*v+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return t[0]=_*L,t[1]=(x*d*r-f*m*r-x*i*u+n*m*u+f*i*p-n*d*p)*L,t[2]=(a*m*r-x*c*r+x*i*h-n*m*h-a*i*p+n*c*p)*L,t[3]=(f*c*r-a*d*r-f*i*h+n*d*h+a*i*u-n*c*u)*L,t[4]=M*L,t[5]=(l*m*r-g*d*r+g*i*u-e*m*u-l*i*p+e*d*p)*L,t[6]=(g*c*r-o*m*r-g*i*h+e*m*h+o*i*p-e*c*p)*L,t[7]=(o*d*r-l*c*r+l*i*h-e*d*h-o*i*u+e*c*u)*L,t[8]=v*L,t[9]=(g*f*r-l*x*r-g*n*u+e*x*u+l*n*p-e*f*p)*L,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*p+e*a*p)*L,t[11]=(l*a*r-o*f*r-l*n*h+e*f*h+o*n*u-e*a*u)*L,t[12]=E*L,t[13]=(l*x*i-g*f*i+g*n*d-e*x*d-l*n*m+e*f*m)*L,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*m-e*a*m)*L,t[15]=(o*f*i-l*a*i+l*n*c-e*f*c-o*n*d+e*a*d)*L,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-i*c,h*c+i*a,0,h*a+i*c,l*a+n,l*c-i*o,0,h*c-i*a,l*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,f=a+a,d=r*h,u=r*l,g=r*f,x=o*l,m=o*f,p=a*f,_=c*h,M=c*l,v=c*f,E=n.x,A=n.y,L=n.z;return i[0]=(1-(x+p))*E,i[1]=(u+v)*E,i[2]=(g-M)*E,i[3]=0,i[4]=(u-v)*A,i[5]=(1-(d+p))*A,i[6]=(m+_)*A,i[7]=0,i[8]=(g+M)*L,i[9]=(m-_)*L,i[10]=(1-(d+x))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=br.set(i[0],i[1],i[2]).length(),o=br.set(i[4],i[5],i[6]).length(),a=br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ai.copy(this);let h=1/r,l=1/o,f=1/a;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=l,Ai.elements[5]*=l,Ai.elements[6]*=l,Ai.elements[8]*=f,Ai.elements[9]*=f,Ai.elements[10]*=f,e.setFromRotationMatrix(Ai),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Ci,c=!1){let h=this.elements,l=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Ci)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ro)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=f,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ci,c=!1){let h=this.elements,l=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Ci)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ro)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=f,h[9]=0,h[13]=u,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},br=new P,Ai=new ne,X0=new P(0,0,0),q0=new P(1,1,1),xs=new P,Ua=new P,ui=new P,Sf=new ne,Tf=new He,Ln=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],h=i[5],l=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-We(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tf.setFromEuler(this),this.setFromQuaternion(Tf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Do=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Y0=0,Af=new P,wr=new He,$i=new ne,Na=new P,go=new P,Z0=new P,$0=new He,Rf=new P(1,0,0),Cf=new P(0,1,0),Pf=new P(0,0,1),If={type:"added"},K0={type:"removed"},Er={type:"childadded",child:null},bh={type:"childremoved",child:null},Fn=class s extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new Ln,n=new He,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new ze}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(Rf,t)}rotateY(t){return this.rotateOnAxis(Cf,t)}rotateZ(t){return this.rotateOnAxis(Pf,t)}translateOnAxis(t,e){return Af.copy(t).applyQuaternion(this.quaternion),this.position.add(Af.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rf,t)}translateY(t){return this.translateOnAxis(Cf,t)}translateZ(t){return this.translateOnAxis(Pf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Na.copy(t):Na.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(go,Na,this.up):$i.lookAt(Na,go,this.up),this.quaternion.setFromRotationMatrix($i),i&&($i.extractRotation(i.matrixWorld),wr.setFromRotationMatrix($i),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(If),Er.child=t,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(K0),bh.child=t,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(If),Er.child=t,this.dispatchEvent(Er),Er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,t,Z0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,$0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let f=c[h];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let h in a){let l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Fn.DEFAULT_UP=new P(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=new P,Ki=new P,wh=new P,Ji=new P,Sr=new P,Tr=new P,Df=new P,Eh=new P,Sh=new P,Th=new P,Ah=new Ke,Rh=new Ke,Ch=new Ke,_s=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ri.subVectors(t,e),i.cross(Ri);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ri.subVectors(i,e),Ki.subVectors(n,e),wh.subVectors(t,e);let o=Ri.dot(Ri),a=Ri.dot(Ki),c=Ri.dot(wh),h=Ki.dot(Ki),l=Ki.dot(wh),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(h*c-a*l)*d,g=(o*l-a*c)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ji.x),c.addScaledVector(o,Ji.y),c.addScaledVector(a,Ji.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(t,e),Rh.fromBufferAttribute(t,n),Ch.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ah,r.x),o.addScaledVector(Rh,r.y),o.addScaledVector(Ch,r.z),o}static isFrontFacing(t,e,n,i){return Ri.subVectors(n,e),Ki.subVectors(t,e),Ri.cross(Ki).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Ri.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Sr.subVectors(i,n),Tr.subVectors(r,n),Eh.subVectors(t,n);let c=Sr.dot(Eh),h=Tr.dot(Eh);if(c<=0&&h<=0)return e.copy(n);Sh.subVectors(t,i);let l=Sr.dot(Sh),f=Tr.dot(Sh);if(l>=0&&f<=l)return e.copy(i);let d=c*f-l*h;if(d<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(Sr,o);Th.subVectors(t,r);let u=Sr.dot(Th),g=Tr.dot(Th);if(g>=0&&u<=g)return e.copy(r);let x=u*h-c*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(Tr,a);let m=l*g-u*f;if(m<=0&&f-l>=0&&u-g>=0)return Df.subVectors(r,i),a=(f-l)/(f-l+(u-g)),e.copy(i).addScaledVector(Df,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Sr,o).addScaledVector(Tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Ph(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,nn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=nn.workingColorSpace){return this.r=t,this.g=e,this.b=n,nn.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=nn.workingColorSpace){if(t=fu(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ph(o,r,t+1/3),this.g=Ph(o,r,t),this.b=Ph(o,r,t-1/3)}return nn.colorSpaceToWorking(this,i),this}setStyle(t,e=$n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$n){let n=Nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return nn.workingToColorSpace(jn.copy(this),t),Math.round(We(jn.r*255,0,255))*65536+Math.round(We(jn.g*255,0,255))*256+Math.round(We(jn.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=nn.workingColorSpace){nn.workingToColorSpace(jn.copy(this),e);let n=jn.r,i=jn.g,r=jn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,h,l=(a+o)/2;if(a===o)c=0,h=0;else{let f=o-a;switch(h=l<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=nn.workingColorSpace){return nn.workingToColorSpace(jn.copy(this),e),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=$n){nn.workingToColorSpace(jn.copy(this),t);let e=jn.r,n=jn.g,i=jn.b;return t!==$n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(vs),this.setHSL(vs.h+t,vs.s+e,vs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vs),t.getHSL(Oa);let n=wo(vs.h,Oa.h,e),i=wo(vs.s,Oa.s,e),r=wo(vs.l,Oa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new kt;kt.NAMES=Nd;var J0=0,ns=class extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=ts,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},En=class extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var zn=new P,Ba=new St,j0=0,yn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:j0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix3(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix4(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyNormalMatrix(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.transformDirection(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),n=ni(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),n=ni(n,this.array),i=ni(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),n=ni(n,this.array),i=ni(i,this.array),r=ni(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vh&&(t.usage=this.usage),t}};var Lo=class extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fo=class extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Q0=0,vi=new ne,Ih=new Fn,Ar=new P,fi=new _i,xo=new _i,Xn=new P,en=class s extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?Fo:Lo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,e,n){return vi.makeTranslation(t,e,n),this.applyMatrix4(vi),this}scale(t,e,n){return vi.makeScale(t,e,n),this.applyMatrix4(vi),this}lookAt(t){return Ih.lookAt(t),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Xn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Xn),Xn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Xn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Xn.addVectors(fi.min,xo.min),fi.expandByPoint(Xn),Xn.addVectors(fi.max,xo.max),fi.expandByPoint(Xn)):(fi.expandByPoint(xo.min),fi.expandByPoint(xo.max))}fi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Xn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Xn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)Xn.fromBufferAttribute(a,h),c&&(Ar.fromBufferAttribute(t,h),Xn.add(Ar)),i=Math.max(i,n.distanceToSquared(Xn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new P,c[I]=new P;let h=new P,l=new P,f=new P,d=new St,u=new St,g=new St,x=new P,m=new P;function p(I,S,w){h.fromBufferAttribute(n,I),l.fromBufferAttribute(n,S),f.fromBufferAttribute(n,w),d.fromBufferAttribute(r,I),u.fromBufferAttribute(r,S),g.fromBufferAttribute(r,w),l.sub(h),f.sub(h),u.sub(d),g.sub(d);let N=1/(u.x*g.y-g.x*u.y);isFinite(N)&&(x.copy(l).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(N),m.copy(f).multiplyScalar(u.x).addScaledVector(l,-g.x).multiplyScalar(N),a[I].add(x),a[S].add(x),a[w].add(x),c[I].add(m),c[S].add(m),c[w].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let I=0,S=_.length;I<S;++I){let w=_[I],N=w.start,H=w.count;for(let B=N,O=N+H;B<O;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new P,v=new P,E=new P,A=new P;function L(I){E.fromBufferAttribute(i,I),A.copy(E);let S=a[I];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(A,S);let N=v.dot(c[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,N)}for(let I=0,S=_.length;I<S;++I){let w=_[I],N=w.start,H=w.count;for(let B=N,O=N+H;B<O;B+=3)L(t.getX(B+0)),L(t.getX(B+1)),L(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,o=new P,a=new P,c=new P,h=new P,l=new P,f=new P;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xn.fromBufferAttribute(t,e),Xn.normalize(),t.setXYZ(e,Xn.x,Xn.y,Xn.z)}toNonIndexed(){function t(a,c){let h=a.array,l=a.itemSize,f=a.normalized,d=new h.constructor(c.length*l),u=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*l;for(let p=0;p<l;p++)d[g++]=h[u++]}return new yn(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let l=0,f=h.length;l<f;l++){let d=h[l],u=t(d,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let f=0,d=h.length;f<d;f++){let u=h[f];l.push(u.toJSON(t.data))}l.length>0&&(i[c]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let l=i[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],f=r[h];for(let d=0,u=f.length;d<u;d++)l.push(f[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,l=o.length;h<l;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lf=new ne,ks=new Io,ka=new Pi,Ff=new P,Ha=new P,Ga=new P,Va=new P,Dh=new P,Wa=new P,zf=new P,Xa=new P,$t=class extends Fn{constructor(t=new en,e=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Wa.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=a[c],f=r[c];l!==0&&(Dh.fromBufferAttribute(f,t),o?Wa.addScaledVector(Dh,l):Wa.addScaledVector(Dh.sub(e),l))}e.add(Wa)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),ks.copy(t.ray).recast(t.near),!(ka.containsPoint(ks.origin)===!1&&(ks.intersectSphere(ka,Ff)===null||ks.origin.distanceToSquared(Ff)>(t.far-t.near)**2))&&(Lf.copy(r).invert(),ks.copy(t.ray).applyMatrix4(Lf),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ks)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,u.start),M=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=_,E=M;v<E;v+=3){let A=a.getX(v),L=a.getX(v+1),I=a.getX(v+2);i=qa(this,p,t,n,h,l,f,A,L,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=qa(this,o,t,n,h,l,f,_,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,u.start),M=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let v=_,E=M;v<E;v+=3){let A=v,L=v+1,I=v+2;i=qa(this,p,t,n,h,l,f,A,L,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let _=m,M=m+1,v=m+2;i=qa(this,o,t,n,h,l,f,_,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function tm(s,t,e,n,i,r,o,a){let c;if(t.side===Kn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Qi,a),c===null)return null;Xa.copy(a),Xa.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Xa);return h<e.near||h>e.far?null:{distance:h,point:Xa.clone(),object:s}}function qa(s,t,e,n,i,r,o,a,c,h){s.getVertexPosition(a,Ha),s.getVertexPosition(c,Ga),s.getVertexPosition(h,Va);let l=tm(s,t,e,n,Ha,Ga,Va,zf);if(l){let f=new P;_s.getBarycoord(zf,Ha,Ga,Va,f),i&&(l.uv=_s.getInterpolatedAttribute(i,a,c,h,f,new St)),r&&(l.uv1=_s.getInterpolatedAttribute(r,a,c,h,f,new St)),o&&(l.normal=_s.getInterpolatedAttribute(o,a,c,h,f,new P),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let d={a,b:c,c:h,normal:new P,materialIndex:0};_s.getNormal(Ha,Ga,Va,d.normal),l.face=d,l.barycoord=f}return l}var xe=class s extends en{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],l=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(f,2));function g(x,m,p,_,M,v,E,A,L,I,S){let w=v/L,N=E/I,H=v/2,B=E/2,O=A/2,k=L+1,G=I+1,rt=0,et=0,z=new P;for(let Tt=0;Tt<G;Tt++){let Rt=Tt*N-B;for(let Wt=0;Wt<k;Wt++){let Kt=Wt*w-H;z[x]=Kt*_,z[m]=Rt*M,z[p]=O,h.push(z.x,z.y,z.z),z[x]=0,z[m]=0,z[p]=A>0?1:-1,l.push(z.x,z.y,z.z),f.push(Wt/L),f.push(1-Tt/I),rt+=1}}for(let Tt=0;Tt<I;Tt++)for(let Rt=0;Rt<L;Rt++){let Wt=d+Rt+k*Tt,Kt=d+Rt+k*(Tt+1),Nt=d+(Rt+1)+k*(Tt+1),ee=d+(Rt+1)+k*Tt;c.push(Wt,Kt,ee),c.push(Kt,Nt,ee),et+=6}a.addGroup(u,et,S),u+=et,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function er(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ti(s){let t={};for(let e=0;e<s.length;e++){let n=er(s[e]);for(let i in n)t[i]=n[i]}return t}function em(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function pu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:nn.workingColorSpace}var Fi={clone:er,merge:ti},nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=em(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zo=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ys=new P,Uf=new St,Nf=new St,Bn=class extends zo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,e){return this.getViewBounds(t,Uf,Nf),e.subVectors(Nf,Uf)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(bo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/h,i*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Rr=-90,Cr=1,Ur=class extends Fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Bn(Rr,Cr,t,e);i.layers=this.layers,this.add(i);let r=new Bn(Rr,Cr,t,e);r.layers=this.layers,this.add(r);let o=new Bn(Rr,Cr,t,e);o.layers=this.layers,this.add(o);let a=new Bn(Rr,Cr,t,e);a.layers=this.layers,this.add(a);let c=new Bn(Rr,Cr,t,e);c.layers=this.layers,this.add(c);let h=new Bn(Rr,Cr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,l]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Uo=class extends si{constructor(t=[],e=js,n,i,r,o,a,c,h,l){super(t,e,n,i,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Nr=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Uo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xe(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:os});r.uniforms.tEquirect.value=e;let o=new $t(i,r),a=e.minFilter;return e.minFilter===As&&(e.minFilter=ii),new Ur(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},fn=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},sm={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=l.position.distanceTo(f.position),u=.02,g=.005;h.inputState.pinching&&d>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},No=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ys=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Br=class extends si{constructor(t=null,e=1,n=1,i,r,o,a,c,h=Qn,l=Qn,f,d){super(null,o,a,c,h,l,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class extends yn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Pr=new ne,Of=new ne,Ya=[],Bf=new _i,rm=new ne,vo=new $t,yo=new Pi,Ue=class extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pr),Bf.copy(t.boundingBox).applyMatrix4(Pr),this.boundingBox.union(Bf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pr),yo.copy(t.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(yo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(n),t.ray.intersectsSphere(yo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Pr),Of.multiplyMatrices(n,Pr),vo.matrixWorld=Of,vo.raycast(t,Ya);for(let o=0,a=Ya.length;o<a;o++){let c=Ya[o];c.instanceId=r,c.object=this,e.push(c)}Ya.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Br(new Float32Array(i*this.count),i,this.count,Wl,Li));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Lh=new P,om=new P,am=new ze,yi=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Lh.subVectors(n,e).cross(om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Lh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||am.getNormalMatrix(t),i=this.coplanarPoint(Lh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hs=new Pi,lm=new St(.5,.5),Za=new P,Es=class{constructor(t=new yi,e=new yi,n=new yi,i=new yi,r=new yi,o=new yi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ci,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],h=r[3],l=r[4],f=r[5],d=r[6],u=r[7],g=r[8],x=r[9],m=r[10],p=r[11],_=r[12],M=r[13],v=r[14],E=r[15];if(i[0].setComponents(h-o,u-l,p-g,E-_).normalize(),i[1].setComponents(h+o,u+l,p+g,E+_).normalize(),i[2].setComponents(h+a,u+f,p+x,E+M).normalize(),i[3].setComponents(h-a,u-f,p-x,E-M).normalize(),n)i[4].setComponents(c,d,m,v).normalize(),i[5].setComponents(h-c,u-d,p-m,E-v).normalize();else if(i[4].setComponents(h-c,u-d,p-m,E-v).normalize(),e===Ci)i[5].setComponents(h+c,u+d,p+m,E+v).normalize();else if(e===Ro)i[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(t){Hs.center.set(0,0,0);let e=lm.distanceTo(t.center);return Hs.radius=.7071067811865476+e,Hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Za.x=i.normal.x>0?t.max.x:t.min.x,Za.y=i.normal.y>0?t.max.y:t.min.y,Za.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var kr=class extends ns{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},cl=new P,hl=new P,kf=new ne,_o=new Io,$a=new Pi,Fh=new P,Hf=new P,ul=class extends Fn{constructor(t=new en,e=new kr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)cl.fromBufferAttribute(e,i-1),hl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=cl.distanceTo(hl);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),$a.radius+=r,t.ray.intersectsSphere($a)===!1)return;kf.copy(i).invert(),_o.copy(t.ray).applyMatrix4(kf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let x=u,m=g-1;x<m;x+=h){let p=l.getX(x),_=l.getX(x+1),M=Ka(this,t,_o,c,p,_,x);M&&e.push(M)}if(this.isLineLoop){let x=l.getX(g-1),m=l.getX(u),p=Ka(this,t,_o,c,x,m,g-1);p&&e.push(p)}}else{let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=u,m=g-1;x<m;x+=h){let p=Ka(this,t,_o,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Ka(this,t,_o,c,g-1,u,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ka(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(cl.fromBufferAttribute(a,i),hl.fromBufferAttribute(a,r),e.distanceSqToSegment(cl,hl,Fh,Hf)>n)return;Fh.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(Fh);if(!(h<t.near||h>t.far))return{distance:h,point:Hf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Gf=new P,Vf=new P,Oo=class extends ul{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Gf.fromBufferAttribute(e,i),Vf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gf.distanceTo(Vf);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zs=class extends si{constructor(t,e,n,i,r,o,a,c,h){super(t,e,n,i,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},is=class extends si{constructor(t,e,n=Rs,i,r,o,a=Qn,c=Qn,h,l=Lr,f=1){if(l!==Lr&&l!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,i,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bo=class extends si{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ko=class s extends en{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],h=new P,l=new St;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),o.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(o[d]/t+1)/2,l.y=(o[d+1]/t+1)/2,c.push(l.x,l.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(a,3)),this.setAttribute("uv",new be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ce=class s extends en{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;i=Math.floor(i),r=Math.floor(r);let l=[],f=[],d=[],u=[],g=0,x=[],m=n/2,p=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(l),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(u,2));function _(){let v=new P,E=new P,A=0,L=(e-t)/n;for(let I=0;I<=r;I++){let S=[],w=I/r,N=w*(e-t)+t;for(let H=0;H<=i;H++){let B=H/i,O=B*c+a,k=Math.sin(O),G=Math.cos(O);E.x=N*k,E.y=-w*n+m,E.z=N*G,f.push(E.x,E.y,E.z),v.set(k,L,G).normalize(),d.push(v.x,v.y,v.z),u.push(B,1-w),S.push(g++)}x.push(S)}for(let I=0;I<i;I++)for(let S=0;S<r;S++){let w=x[S][I],N=x[S+1][I],H=x[S+1][I+1],B=x[S][I+1];(t>0||S!==0)&&(l.push(w,N,B),A+=3),(e>0||S!==r-1)&&(l.push(N,H,B),A+=3)}h.addGroup(p,A,0),p+=A}function M(v){let E=g,A=new St,L=new P,I=0,S=v===!0?t:e,w=v===!0?1:-1;for(let H=1;H<=i;H++)f.push(0,m*w,0),d.push(0,w,0),u.push(.5,.5),g++;let N=g;for(let H=0;H<=i;H++){let O=H/i*c+a,k=Math.cos(O),G=Math.sin(O);L.x=S*G,L.y=m*w,L.z=S*k,f.push(L.x,L.y,L.z),d.push(0,w,0),A.x=k*.5+.5,A.y=G*.5*w+.5,u.push(A.x,A.y),g++}for(let H=0;H<i;H++){let B=E+H,O=N+H;v===!0?l.push(O,O+1,B):l.push(O+1,O,B),I+=3}h.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mi=class s extends Ce{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let l=n[i],d=n[i+1]-l,u=(o-l)/d;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new St:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,i=[],r=[],o=[],a=new P,c=new ne;for(let u=0;u<=t;u++){let g=u/t;i[u]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let h=Number.MAX_VALUE,l=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);l<=h&&(h=l,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(We(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,g))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(We(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hr=class extends di{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new St){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=h-this.aY;c=d*l-u*f+this.aX,h=d*f+u*l+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fl=class extends Hr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){i(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,l,f){let d=(o-r)/h-(a-r)/(h+l)+(a-o)/l,u=(a-o)/l-(c-o)/(l+f)+(c-a)/f;d*=l,u*=l,i(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Ja=new P,zh=new mu,Uh=new mu,Nh=new mu,dl=class extends di{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,l;this.closed||a>0?h=i[(a-1)%r]:(Ja.subVectors(i[0],i[1]).add(i[0]),h=Ja);let f=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?l=i[(a+2)%r]:(Ja.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=Ja),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(l),u);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),zh.initNonuniformCatmullRom(h.x,f.x,d.x,l.x,g,x,m),Uh.initNonuniformCatmullRom(h.y,f.y,d.y,l.y,g,x,m),Nh.initNonuniformCatmullRom(h.z,f.z,d.z,l.z,g,x,m)}else this.curveType==="catmullrom"&&(zh.initCatmullRom(h.x,f.x,d.x,l.x,this.tension),Uh.initCatmullRom(h.y,f.y,d.y,l.y,this.tension),Nh.initCatmullRom(h.z,f.z,d.z,l.z,this.tension));return n.set(zh.calc(c),Uh.calc(c),Nh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Wf(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function cm(s,t){let e=1-s;return e*e*t}function hm(s,t){return 2*(1-s)*s*t}function um(s,t){return s*s*t}function Eo(s,t,e,n){return cm(s,t)+hm(s,e)+um(s,n)}function fm(s,t){let e=1-s;return e*e*e*t}function dm(s,t){let e=1-s;return 3*e*e*s*t}function pm(s,t){return 3*(1-s)*s*s*t}function mm(s,t){return s*s*s*t}function So(s,t,e,n,i){return fm(s,t)+dm(s,e)+pm(s,n)+mm(s,i)}var Ho=class extends di{constructor(t=new St,e=new St,n=new St,i=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new St){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(So(t,i.x,r.x,o.x,a.x),So(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pl=class extends di{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(So(t,i.x,r.x,o.x,a.x),So(t,i.y,r.y,o.y,a.y),So(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Go=class extends di{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ml=class extends di{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends di{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Eo(t,i.x,r.x,o.x),Eo(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gl=class extends di{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Eo(t,i.x,r.x,o.x),Eo(t,i.y,r.y,o.y),Eo(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wo=class extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],h=i[o],l=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Wf(a,c.x,h.x,l.x,f.x),Wf(a,c.y,h.y,l.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new St().fromArray(i))}return this}},Wh=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:dl,CubicBezierCurve:Ho,CubicBezierCurve3:pl,EllipseCurve:Hr,LineCurve:Go,LineCurve3:ml,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:gl,SplineCurve:Wo}),xl=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let h=0;h<c.length;h++){let l=c[h];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Wh[i.type]().fromJSON(i))}return this}},Xo=class extends xl{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Go(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Vo(this.currentPoint.clone(),new St(t,e),new St(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Ho(this.currentPoint.clone(),new St(t,e),new St(n,i),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let h=new Hr(t,e,n,i,r,o,a,c);if(this.curves.length>0){let f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);let l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Gr=class extends Xo{constructor(t){super(t),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Xo().fromJSON(i))}return this}};function gm(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Od(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,h;if(n&&(r=Mm(s,t,r,e)),s.length>80*e){a=1/0,c=1/0;let l=-1/0,f=-1/0;for(let d=e;d<i;d+=e){let u=s[d],g=s[d+1];u<a&&(a=u),g<c&&(c=g),u>l&&(l=u),g>f&&(f=g)}h=Math.max(l-a,f-c),h=h!==0?32767/h:0}return qo(r,o,e,a,c,h,0),o}function Od(s,t,e,n,i){let r;if(i===Dm(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Xf(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Xf(o/n|0,s[o],s[o+1],r);return r&&Vr(r,r.next)&&(Zo(r),r=r.next),r}function $s(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Vr(e,e.next)||wn(e.prev,e,e.next)===0)){if(Zo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Tm(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,h=s.next;if(r?vm(s,n,i,r):xm(s)){t.push(c.i,s.i,h.i),Zo(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=ym($s(s),t),qo(s,t,e,n,i,r,2)):o===2&&_m(s,t,e,n,i,r):qo($s(s),t,e,n,i,r,1);break}}}function xm(s){let t=s.prev,e=s,n=s.next;if(wn(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,h=n.y,l=Math.min(i,r,o),f=Math.min(a,c,h),d=Math.max(i,r,o),u=Math.max(a,c,h),g=n.next;for(;g!==t;){if(g.x>=l&&g.x<=d&&g.y>=f&&g.y<=u&&Mo(i,a,r,c,o,h,g.x,g.y)&&wn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vm(s,t,e,n){let i=s.prev,r=s,o=s.next;if(wn(i,r,o)>=0)return!1;let a=i.x,c=r.x,h=o.x,l=i.y,f=r.y,d=o.y,u=Math.min(a,c,h),g=Math.min(l,f,d),x=Math.max(a,c,h),m=Math.max(l,f,d),p=Xh(u,g,t,e,n),_=Xh(x,m,t,e,n),M=s.prevZ,v=s.nextZ;for(;M&&M.z>=p&&v&&v.z<=_;){if(M.x>=u&&M.x<=x&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Mo(a,l,c,f,h,d,M.x,M.y)&&wn(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=u&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Mo(a,l,c,f,h,d,v.x,v.y)&&wn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=u&&M.x<=x&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Mo(a,l,c,f,h,d,M.x,M.y)&&wn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=u&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Mo(a,l,c,f,h,d,v.x,v.y)&&wn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ym(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Vr(n,i)&&kd(n,e,e.next,i)&&Yo(n,i)&&Yo(i,n)&&(t.push(n.i,e.i,i.i),Zo(e),Zo(e.next),e=s=i),e=e.next}while(e!==s);return $s(e)}function _m(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cm(o,a)){let c=Hd(o,a);o=$s(o,o.next),c=$s(c,c.next),qo(o,t,e,n,i,r,0),qo(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Mm(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,h=Od(s,a,c,n,!1);h===h.next&&(h.steiner=!0),i.push(Rm(h))}i.sort(bm);for(let r=0;r<i.length;r++)e=wm(i[r],e);return e}function bm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function wm(s,t){let e=Em(s,t);if(!e)return t;let n=Hd(e,s);return $s(n,n.next),$s(e,e.next)}function Em(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(Vr(s,e))return e;do{if(Vr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,h=o.y,l=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Bd(i<h?n:r,i,c,h,i<h?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);Yo(e,s)&&(f<l||f===l&&(e.x>o.x||e.x===o.x&&Sm(o,e)))&&(o=e,l=f)}e=e.next}while(e!==a);return o}function Sm(s,t){return wn(s.prev,s,t.prev)<0&&wn(t.next,s,s.next)<0}function Tm(s,t,e,n){let i=s;do i.z===0&&(i.z=Xh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Am(i)}function Am(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Xh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Rm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Bd(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Mo(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Bd(s,t,e,n,i,r,o,a)}function Cm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Pm(s,t)&&(Yo(s,t)&&Yo(t,s)&&Im(s,t)&&(wn(s.prev,s,t.prev)||wn(s,t.prev,t))||Vr(s,t)&&wn(s.prev,s,s.next)>0&&wn(t.prev,t,t.next)>0)}function wn(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Vr(s,t){return s.x===t.x&&s.y===t.y}function kd(s,t,e,n){let i=Qa(wn(s,t,e)),r=Qa(wn(s,t,n)),o=Qa(wn(e,n,s)),a=Qa(wn(e,n,t));return!!(i!==r&&o!==a||i===0&&ja(s,e,t)||r===0&&ja(s,n,t)||o===0&&ja(e,s,n)||a===0&&ja(e,t,n))}function ja(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Qa(s){return s>0?1:s<0?-1:0}function Pm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&kd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Yo(s,t){return wn(s.prev,s,s.next)<0?wn(s,t,s.next)>=0&&wn(s,s.prev,t)>=0:wn(s,t,s.prev)<0||wn(s,s.next,t)<0}function Im(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Hd(s,t){let e=qh(s.i,s.x,s.y),n=qh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Xf(s,t,e,n){let i=qh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function qh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dm(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Yh=class{static triangulate(t,e,n=2){return gm(t,e,n)}},Vs=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];qf(t),Yf(n,t);let o=t.length;e.forEach(qf);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Yf(n,e[c]);let a=Yh.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function qf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Yf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var $o=class s extends en{constructor(t=new Gr([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let h=t[a];o(h)}this.setAttribute("position",new be(i,3)),this.setAttribute("uv",new be(r,2)),this.computeVertexNormals();function o(a){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Lm,M,v=!1,E,A,L,I;p&&(M=p.getSpacedPoints(l),v=!0,d=!1,E=p.computeFrenetFrames(l,!1),A=new P,L=new P,I=new P),d||(m=0,u=0,g=0,x=0);let S=a.extractPoints(h),w=S.shape,N=S.holes;if(!Vs.isClockWise(w)){w=w.reverse();for(let ct=0,ht=N.length;ct<ht;ct++){let lt=N[ct];Vs.isClockWise(lt)&&(N[ct]=lt.reverse())}}function B(ct){let lt=10000000000000001e-36,tt=ct[0];for(let F=1;F<=ct.length;F++){let U=F%ct.length,V=ct[U],q=V.x-tt.x,K=V.y-tt.y,b=q*q+K*K,y=Math.max(Math.abs(V.x),Math.abs(V.y),Math.abs(tt.x),Math.abs(tt.y)),Y=lt*y*y;if(b<=Y){ct.splice(U,1),F--;continue}tt=V}}B(w),N.forEach(B);let O=N.length,k=w;for(let ct=0;ct<O;ct++){let ht=N[ct];w=w.concat(ht)}function G(ct,ht,lt){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(ht,lt)}let rt=w.length;function et(ct,ht,lt){let tt,F,U,V=ct.x-ht.x,q=ct.y-ht.y,K=lt.x-ct.x,b=lt.y-ct.y,y=V*V+q*q,Y=V*b-q*K;if(Math.abs(Y)>Number.EPSILON){let nt=Math.sqrt(y),mt=Math.sqrt(K*K+b*b),ut=ht.x-q/nt,Qt=ht.y+V/nt,Et=lt.x-b/mt,Jt=lt.y+K/mt,re=((Et-ut)*b-(Jt-Qt)*K)/(V*b-q*K);tt=ut+V*re-ct.x,F=Qt+q*re-ct.y;let At=tt*tt+F*F;if(At<=2)return new St(tt,F);U=Math.sqrt(At/2)}else{let nt=!1;V>Number.EPSILON?K>Number.EPSILON&&(nt=!0):V<-Number.EPSILON?K<-Number.EPSILON&&(nt=!0):Math.sign(q)===Math.sign(b)&&(nt=!0),nt?(tt=-q,F=V,U=Math.sqrt(y)):(tt=V,F=q,U=Math.sqrt(y/2))}return new St(tt/U,F/U)}let z=[];for(let ct=0,ht=k.length,lt=ht-1,tt=ct+1;ct<ht;ct++,lt++,tt++)lt===ht&&(lt=0),tt===ht&&(tt=0),z[ct]=et(k[ct],k[lt],k[tt]);let Tt=[],Rt,Wt=z.concat();for(let ct=0,ht=O;ct<ht;ct++){let lt=N[ct];Rt=[];for(let tt=0,F=lt.length,U=F-1,V=tt+1;tt<F;tt++,U++,V++)U===F&&(U=0),V===F&&(V=0),Rt[tt]=et(lt[tt],lt[U],lt[V]);Tt.push(Rt),Wt=Wt.concat(Rt)}let Kt;if(m===0)Kt=Vs.triangulateShape(k,N);else{let ct=[],ht=[];for(let lt=0;lt<m;lt++){let tt=lt/m,F=u*Math.cos(tt*Math.PI/2),U=g*Math.sin(tt*Math.PI/2)+x;for(let V=0,q=k.length;V<q;V++){let K=G(k[V],z[V],U);Ht(K.x,K.y,-F),tt===0&&ct.push(K)}for(let V=0,q=O;V<q;V++){let K=N[V];Rt=Tt[V];let b=[];for(let y=0,Y=K.length;y<Y;y++){let nt=G(K[y],Rt[y],U);Ht(nt.x,nt.y,-F),tt===0&&b.push(nt)}tt===0&&ht.push(b)}}Kt=Vs.triangulateShape(ct,ht)}let Nt=Kt.length,ee=g+x;for(let ct=0;ct<rt;ct++){let ht=d?G(w[ct],Wt[ct],ee):w[ct];v?(L.copy(E.normals[0]).multiplyScalar(ht.x),A.copy(E.binormals[0]).multiplyScalar(ht.y),I.copy(M[0]).add(L).add(A),Ht(I.x,I.y,I.z)):Ht(ht.x,ht.y,0)}for(let ct=1;ct<=l;ct++)for(let ht=0;ht<rt;ht++){let lt=d?G(w[ht],Wt[ht],ee):w[ht];v?(L.copy(E.normals[ct]).multiplyScalar(lt.x),A.copy(E.binormals[ct]).multiplyScalar(lt.y),I.copy(M[ct]).add(L).add(A),Ht(I.x,I.y,I.z)):Ht(lt.x,lt.y,f/l*ct)}for(let ct=m-1;ct>=0;ct--){let ht=ct/m,lt=u*Math.cos(ht*Math.PI/2),tt=g*Math.sin(ht*Math.PI/2)+x;for(let F=0,U=k.length;F<U;F++){let V=G(k[F],z[F],tt);Ht(V.x,V.y,f+lt)}for(let F=0,U=N.length;F<U;F++){let V=N[F];Rt=Tt[F];for(let q=0,K=V.length;q<K;q++){let b=G(V[q],Rt[q],tt);v?Ht(b.x,b.y+M[l-1].y,M[l-1].x+lt):Ht(b.x,b.y,f+lt)}}}pt(),wt();function pt(){let ct=i.length/3;if(d){let ht=0,lt=rt*ht;for(let tt=0;tt<Nt;tt++){let F=Kt[tt];Vt(F[2]+lt,F[1]+lt,F[0]+lt)}ht=l+m*2,lt=rt*ht;for(let tt=0;tt<Nt;tt++){let F=Kt[tt];Vt(F[0]+lt,F[1]+lt,F[2]+lt)}}else{for(let ht=0;ht<Nt;ht++){let lt=Kt[ht];Vt(lt[2],lt[1],lt[0])}for(let ht=0;ht<Nt;ht++){let lt=Kt[ht];Vt(lt[0]+rt*l,lt[1]+rt*l,lt[2]+rt*l)}}n.addGroup(ct,i.length/3-ct,0)}function wt(){let ct=i.length/3,ht=0;Dt(k,ht),ht+=k.length;for(let lt=0,tt=N.length;lt<tt;lt++){let F=N[lt];Dt(F,ht),ht+=F.length}n.addGroup(ct,i.length/3-ct,1)}function Dt(ct,ht){let lt=ct.length;for(;--lt>=0;){let tt=lt,F=lt-1;F<0&&(F=ct.length-1);for(let U=0,V=l+m*2;U<V;U++){let q=rt*U,K=rt*(U+1),b=ht+tt+q,y=ht+F+q,Y=ht+F+K,nt=ht+tt+K;dt(b,y,Y,nt)}}}function Ht(ct,ht,lt){c.push(ct),c.push(ht),c.push(lt)}function Vt(ct,ht,lt){Ot(ct),Ot(ht),Ot(lt);let tt=i.length/3,F=_.generateTopUV(n,i,tt-3,tt-2,tt-1);D(F[0]),D(F[1]),D(F[2])}function dt(ct,ht,lt,tt){Ot(ct),Ot(ht),Ot(tt),Ot(ht),Ot(lt),Ot(tt);let F=i.length/3,U=_.generateSideWallUV(n,i,F-6,F-3,F-2,F-1);D(U[0]),D(U[1]),D(U[3]),D(U[1]),D(U[2]),D(U[3])}function Ot(ct){i.push(c[ct*3+0]),i.push(c[ct*3+1]),i.push(c[ct*3+2])}function D(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Fm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Wh[i.type]().fromJSON(i)),new s(n,t.options)}},Lm={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[i*3],l=t[i*3+1];return[new St(r,o),new St(a,c),new St(h,l)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],l=t[n*3+1],f=t[n*3+2],d=t[i*3],u=t[i*3+1],g=t[i*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-l)<Math.abs(o-h)?[new St(o,1-c),new St(h,1-f),new St(d,1-g),new St(x,1-p)]:[new St(a,1-c),new St(l,1-f),new St(u,1-g),new St(m,1-p)]}};function Fm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ko=class s extends en{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=We(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],l=1/e,f=new P,d=new St,u=new P,g=new P,x=new P,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,x.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),c.push(u.x,u.y,u.z),x.copy(g)}for(let _=0;_<=e;_++){let M=n+_*l*i,v=Math.sin(M),E=Math.cos(M);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*v,f.y=t[A].y,f.z=t[A].x*E,o.push(f.x,f.y,f.z),d.x=_/e,d.y=A/(t.length-1),a.push(d.x,d.y);let L=c[3*A+0]*v,I=c[3*A+1],S=c[3*A+0]*E;h.push(L,I,S)}}for(let _=0;_<e;_++)for(let M=0;M<t.length-1;M++){let v=M+_*t.length,E=v,A=v+t.length,L=v+t.length+1,I=v+1;r.push(E,A,I),r.push(L,I,A)}this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("uv",new be(a,2)),this.setAttribute("normal",new be(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var an=class s extends en{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),h=a+1,l=c+1,f=t/a,d=e/c,u=[],g=[],x=[],m=[];for(let p=0;p<l;p++){let _=p*d-o;for(let M=0;M<h;M++){let v=M*f-r;g.push(v,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let M=_+h*p,v=_+h*(p+1),E=_+1+h*(p+1),A=_+1+h*p;u.push(M,v,A),u.push(v,E,A)}this.setIndex(u),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(x,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Jo=class s extends en{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],h=[],l=[],f=t,d=(e-t)/i,u=new P,g=new St;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;u.x=f*Math.cos(p),u.y=f*Math.sin(p),c.push(u.x,u.y,u.z),h.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,l.push(g.x,g.y)}f+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,M=_,v=_+n+1,E=_+n+2,A=_+1;a.push(M,v,A),a.push(v,E,A)}}this.setIndex(a),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Un=class s extends en{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,l=[],f=new P,d=new P,u=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],M=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){let A=E/e;f.x=-t*Math.cos(i+A*r)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(i+A*r)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(A+v,1-M),_.push(h++)}l.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let M=l[p][_+1],v=l[p][_],E=l[p+1][_],A=l[p+1][_+1];(p!==0||o>0)&&u.push(M,v,A),(p!==n-1||c<Math.PI)&&u.push(v,E,A)}this.setIndex(u),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(x,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ss=class s extends en{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],h=[],l=new P,f=new P,d=new P;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){let x=g/i*r,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),d.subVectors(f,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){let x=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,_=(i+1)*u+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Zt=class extends ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ks=class extends Zt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Wr=class extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vl=class extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function tl(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function zm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Js=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yl=class extends Js{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case kh:r=t,a=2*e-n;break;case Hh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kh:o=t,c=2*n-e;break;case Hh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-u)*m+(1.5+u)*x+.5*g,v=u*m-u*x;for(let E=0;E!==a;++E)r[E]=p*o[l+E]+_*o[h+E]+M*o[c+E]+v*o[f+E];return r}},_l=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=(n-e)/(i-e),f=1-l;for(let d=0;d!==a;++d)r[d]=o[h+d]*f+o[c+d]*l;return r}},Ml=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tl(e,this.TimeBufferType),this.values=tl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tl(t.times,Array),values:tl(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case To:e=this.InterpolantFactoryMethodDiscrete;break;case rl:e=this.InterpolantFactoryMethodLinear;break;case el:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return To;case this.InterpolantFactoryMethodLinear:return rl;case this.InterpolantFactoryMethodSmooth:return el}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&zm(i))for(let a=0,c=i.length;a!==c;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===el,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],l=t[a+1];if(h!==l&&(a!==1||h!==t[0]))if(i)c=!0;else{let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[d+g]||x!==e[u+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=rl;var Ss=class extends pi{constructor(t,e,n){super(t,e,n)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=To;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};bl.prototype.ValueTypeName="color";var wl=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};wl.prototype.ValueTypeName="number";var El=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),h=t*a;for(let l=h+a;h!==l;h+=4)He.slerpFlat(r,0,o,h-a,o,h,c);return r}},jo=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}};jo.prototype.ValueTypeName="quaternion";jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends pi{constructor(t,e,n){super(t,e,n)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=To;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};Sl.prototype.ValueTypeName="vector";var Tl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,f){return h.push(l,f),this},this.removeHandler=function(l){let f=h.indexOf(l);return f!==-1&&h.splice(f,2),this},this.getHandler=function(l){for(let f=0,d=h.length;f<d;f+=2){let u=h[f],g=h[f+1];if(u.global&&(u.lastIndex=0),u.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Gd=new Tl,Al=class{constructor(t){this.manager=t!==void 0?t:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Al.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr=class extends Fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Qo=class extends Xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Oh=new ne,Zf=new P,$f=new P,Rl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Zf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zf),$f.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($f),e.updateMatrixWorld(),Oh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zh=class extends Rl{constructor(){super(new Bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=qs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ta=class extends Xr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var rs=class extends zo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$h=class extends Rl{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ea=class extends Xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var na=class extends en{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Cl=class extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ia=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var gu="\\[\\]\\.:\\/",Um=new RegExp("["+gu+"]","g"),xu="[^"+gu+"]",Nm="[^"+gu.replace("\\.","")+"]",Om=/((?:WC+[\/:])*)/.source.replace("WC",xu),Bm=/(WCOD+)?/.source.replace("WCOD",Nm),km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),Hm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),Gm=new RegExp("^"+Om+Bm+km+Hm+"$"),Vm=["material","materials","bones","map"],Kh=class{constructor(t,e,n){let i=n||gn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},gn=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Um,"")}static parseTrackName(t){let e=Gm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Vm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=Kh;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bM=new Float32Array(1);function vu(s,t,e,n){let i=Wm(n);switch(e){case au:return s*t;case Wl:return s*t/i.components*i.byteLength;case Xl:return s*t/i.components*i.byteLength;case cu:return s*t*2/i.components*i.byteLength;case ql:return s*t*2/i.components*i.byteLength;case lu:return s*t*3/i.components*i.byteLength;case bi:return s*t*4/i.components*i.byteLength;case Yl:return s*t*4/i.components*i.byteLength;case oa:case aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case la:case ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $l:case Jl:return Math.max(s,16)*Math.max(t,8)/4;case Zl:case Kl:return Math.max(s,8)*Math.max(t,8)/2;case jl:case Ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ic:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case sc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case rc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case oc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ac:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case pc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case mc:case gc:case xc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case vc:case yc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case _c:case Mc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wm(s){switch(s){case Di:case iu:return{byteLength:1,components:1};case qr:case su:case kn:return{byteLength:2,components:1};case Gl:case Vl:return{byteLength:2,components:4};case Rs:case Hl:case Li:return{byteLength:4,components:1};case ru:case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function fp(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Jm(s){let t=new WeakMap;function e(a,c){let h=a.array,l=a.usage,f=h.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,h,l),a.onUploadCallback();let u;if(h instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)u=s.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=s.SHORT;else if(h instanceof Uint32Array)u=s.UNSIGNED_INT;else if(h instanceof Int32Array)u=s.INT;else if(h instanceof Int8Array)u=s.BYTE;else if(h instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){let l=c.array,f=c.updateRanges;if(s.bindBuffer(h,a),f.length===0)s.bufferSubData(h,0,l);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],x=f[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let x=f[u];s.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:i,remove:r,update:o}}var jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
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
#endif`,tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sg=`#ifdef USE_AOMAP
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
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,og=`#ifdef USE_BATCHING
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
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,fg=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mg=`#define PI 3.141592653589793
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
} // validated`,bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wg=`vec3 transformedNormal = objectNormal;
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
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$g=`PhysicalMaterial material;
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
#endif`,Kg=`struct PhysicalMaterial {
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
}`,Jg=`
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
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
#endif`,px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_x=`#ifdef USE_NORMALMAP
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
#endif`,Mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ux=`float getShadowMask() {
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
}`,Nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
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
}`,sv=`#if DEPTH_PACKING == 3200
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
}`,rv=`#define DISTANCE
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
}`,ov=`#define DISTANCE
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`uniform float scale;
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
}`,hv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,fv=`uniform vec3 diffuse;
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
}`,dv=`#define LAMBERT
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
}`,pv=`#define LAMBERT
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
}`,mv=`#define MATCAP
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
}`,gv=`#define MATCAP
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
}`,xv=`#define NORMAL
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
}`,vv=`#define NORMAL
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
}`,yv=`#define PHONG
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
}`,_v=`#define PHONG
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
}`,Mv=`#define STANDARD
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
}`,bv=`#define STANDARD
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
}`,wv=`#define TOON
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
}`,Ev=`#define TOON
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
}`,Sv=`uniform float size;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Av=`#include <common>
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
}`,Rv=`uniform vec3 color;
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
}`,Cv=`uniform float rotation;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:jm,alphahash_pars_fragment:Qm,alphamap_fragment:tg,alphamap_pars_fragment:eg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:sg,aomap_pars_fragment:rg,batching_pars_vertex:og,batching_vertex:ag,begin_vertex:lg,beginnormal_vertex:cg,bsdfs:hg,iridescence_fragment:ug,bumpmap_pars_fragment:fg,clipping_planes_fragment:dg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:gg,color_fragment:xg,color_pars_fragment:vg,color_pars_vertex:yg,color_vertex:_g,common:Mg,cube_uv_reflection_fragment:bg,defaultnormal_vertex:wg,displacementmap_pars_vertex:Eg,displacementmap_vertex:Sg,emissivemap_fragment:Tg,emissivemap_pars_fragment:Ag,colorspace_fragment:Rg,colorspace_pars_fragment:Cg,envmap_fragment:Pg,envmap_common_pars_fragment:Ig,envmap_pars_fragment:Dg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Wg,envmap_vertex:Fg,fog_vertex:zg,fog_pars_vertex:Ug,fog_fragment:Ng,fog_pars_fragment:Og,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:kg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Vg,lights_toon_fragment:Xg,lights_toon_pars_fragment:qg,lights_phong_fragment:Yg,lights_phong_pars_fragment:Zg,lights_physical_fragment:$g,lights_physical_pars_fragment:Kg,lights_fragment_begin:Jg,lights_fragment_maps:jg,lights_fragment_end:Qg,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:nx,logdepthbuf_vertex:ix,map_fragment:sx,map_pars_fragment:rx,map_particle_fragment:ox,map_particle_pars_fragment:ax,metalnessmap_fragment:lx,metalnessmap_pars_fragment:cx,morphinstance_vertex:hx,morphcolor_vertex:ux,morphnormal_vertex:fx,morphtarget_pars_vertex:dx,morphtarget_vertex:px,normal_fragment_begin:mx,normal_fragment_maps:gx,normal_pars_fragment:xx,normal_pars_vertex:vx,normal_vertex:yx,normalmap_pars_fragment:_x,clearcoat_normal_fragment_begin:Mx,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:wx,iridescence_pars_fragment:Ex,opaque_fragment:Sx,packing:Tx,premultiplied_alpha_fragment:Ax,project_vertex:Rx,dithering_fragment:Cx,dithering_pars_fragment:Px,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Dx,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Fx,shadowmap_vertex:zx,shadowmask_pars_fragment:Ux,skinbase_vertex:Nx,skinning_pars_vertex:Ox,skinning_vertex:Bx,skinnormal_vertex:kx,specularmap_fragment:Hx,specularmap_pars_fragment:Gx,tonemapping_fragment:Vx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:qx,uv_pars_fragment:Yx,uv_pars_vertex:Zx,uv_vertex:$x,worldpos_vertex:Kx,background_vert:Jx,background_frag:jx,backgroundCube_vert:Qx,backgroundCube_frag:tv,cube_vert:ev,cube_frag:nv,depth_vert:iv,depth_frag:sv,distanceRGBA_vert:rv,distanceRGBA_frag:ov,equirect_vert:av,equirect_frag:lv,linedashed_vert:cv,linedashed_frag:hv,meshbasic_vert:uv,meshbasic_frag:fv,meshlambert_vert:dv,meshlambert_frag:pv,meshmatcap_vert:mv,meshmatcap_frag:gv,meshnormal_vert:xv,meshnormal_frag:vv,meshphong_vert:yv,meshphong_frag:_v,meshphysical_vert:Mv,meshphysical_frag:bv,meshtoon_vert:wv,meshtoon_frag:Ev,points_vert:Sv,points_frag:Tv,shadow_vert:Av,shadow_frag:Rv,sprite_vert:Cv,sprite_frag:Pv},oe={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Gi={basic:{uniforms:ti([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:ti([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new kt(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:ti([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:ti([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:ti([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new kt(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:ti([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:ti([oe.points,oe.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:ti([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:ti([oe.common,oe.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:ti([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:ti([oe.sprite,oe.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:ti([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:ti([oe.lights,oe.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Gi.physical={uniforms:ti([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var wc={r:0,b:0,g:0},nr=new Ln,Iv=new ne;function Dv(s,t,e,n,i,r,o){let a=new kt(0),c=r===!0?0:1,h,l,f=null,d=0,u=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1,E=g(M);E===null?p(a,c):E&&E.isColor&&(p(E,1),v=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){let E=g(v);E&&(E.isCubeTexture||E.mapping===sa)?(l===void 0&&(l=new $t(new xe(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:er(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),nr.copy(v.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(nr)),l.material.toneMapped=nn.getTransfer(E.colorSpace)!==hn,(f!==E||d!==E.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,f=E,d=E.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new $t(new an(2,2),new on({name:"BackgroundMaterial",uniforms:er(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=nn.getTransfer(E.colorSpace)!==hn,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=E,d=E.version,u=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,v){M.getRGB(wc,pu(s)),n.buffers.color.setClear(wc.r,wc.g,wc.b,v,o)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:x,addToRenderList:m,dispose:_}}function Lv(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(w,N,H,B,O){let k=!1,G=f(B,H,N);r!==G&&(r=G,h(r.object)),k=u(w,B,H,O),k&&g(w,B,H,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(w,N,H,B),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function h(w){return s.bindVertexArray(w)}function l(w){return s.deleteVertexArray(w)}function f(w,N,H){let B=H.wireframe===!0,O=n[w.id];O===void 0&&(O={},n[w.id]=O);let k=O[N.id];k===void 0&&(k={},O[N.id]=k);let G=k[B];return G===void 0&&(G=d(c()),k[B]=G),G}function d(w){let N=[],H=[],B=[];for(let O=0;O<e;O++)N[O]=0,H[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:B,object:w,attributes:{},index:null}}function u(w,N,H,B){let O=r.attributes,k=N.attributes,G=0,rt=H.getAttributes();for(let et in rt)if(rt[et].location>=0){let Tt=O[et],Rt=k[et];if(Rt===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(Rt=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(Rt=w.instanceColor)),Tt===void 0||Tt.attribute!==Rt||Rt&&Tt.data!==Rt.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(w,N,H,B){let O={},k=N.attributes,G=0,rt=H.getAttributes();for(let et in rt)if(rt[et].location>=0){let Tt=k[et];Tt===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor));let Rt={};Rt.attribute=Tt,Tt&&Tt.data&&(Rt.data=Tt.data),O[et]=Rt,G++}r.attributes=O,r.attributesNum=G,r.index=B}function x(){let w=r.newAttributes;for(let N=0,H=w.length;N<H;N++)w[N]=0}function m(w){p(w,0)}function p(w,N){let H=r.newAttributes,B=r.enabledAttributes,O=r.attributeDivisors;H[w]=1,B[w]===0&&(s.enableVertexAttribArray(w),B[w]=1),O[w]!==N&&(s.vertexAttribDivisor(w,N),O[w]=N)}function _(){let w=r.newAttributes,N=r.enabledAttributes;for(let H=0,B=N.length;H<B;H++)N[H]!==w[H]&&(s.disableVertexAttribArray(H),N[H]=0)}function M(w,N,H,B,O,k,G){G===!0?s.vertexAttribIPointer(w,N,H,O,k):s.vertexAttribPointer(w,N,H,B,O,k)}function v(w,N,H,B){x();let O=B.attributes,k=H.getAttributes(),G=N.defaultAttributeValues;for(let rt in k){let et=k[rt];if(et.location>=0){let z=O[rt];if(z===void 0&&(rt==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),rt==="instanceColor"&&w.instanceColor&&(z=w.instanceColor)),z!==void 0){let Tt=z.normalized,Rt=z.itemSize,Wt=t.get(z);if(Wt===void 0)continue;let Kt=Wt.buffer,Nt=Wt.type,ee=Wt.bytesPerElement,pt=Nt===s.INT||Nt===s.UNSIGNED_INT||z.gpuType===Hl;if(z.isInterleavedBufferAttribute){let wt=z.data,Dt=wt.stride,Ht=z.offset;if(wt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<et.locationSize;Vt++)p(et.location+Vt,wt.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Vt=0;Vt<et.locationSize;Vt++)m(et.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let Vt=0;Vt<et.locationSize;Vt++)M(et.location+Vt,Rt/et.locationSize,Nt,Tt,Dt*ee,(Ht+Rt/et.locationSize*Vt)*ee,pt)}else{if(z.isInstancedBufferAttribute){for(let wt=0;wt<et.locationSize;wt++)p(et.location+wt,z.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let wt=0;wt<et.locationSize;wt++)m(et.location+wt);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let wt=0;wt<et.locationSize;wt++)M(et.location+wt,Rt/et.locationSize,Nt,Tt,Rt*ee,Rt/et.locationSize*wt*ee,pt)}}else if(G!==void 0){let Tt=G[rt];if(Tt!==void 0)switch(Tt.length){case 2:s.vertexAttrib2fv(et.location,Tt);break;case 3:s.vertexAttrib3fv(et.location,Tt);break;case 4:s.vertexAttrib4fv(et.location,Tt);break;default:s.vertexAttrib1fv(et.location,Tt)}}}}_()}function E(){I();for(let w in n){let N=n[w];for(let H in N){let B=N[H];for(let O in B)l(B[O].object),delete B[O];delete N[H]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;let N=n[w.id];for(let H in N){let B=N[H];for(let O in B)l(B[O].object),delete B[O];delete N[H]}delete n[w.id]}function L(w){for(let N in n){let H=n[N];if(H[w.id]===void 0)continue;let B=H[w.id];for(let O in B)l(B[O].object),delete B[O];delete H[w.id]}}function I(){S(),o=!0,r!==i&&(r=i,h(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Fv(s,t,e){let n;function i(h){n=h}function r(h,l){s.drawArrays(n,h,l),e.update(l,n,1)}function o(h,l,f){f!==0&&(s.drawArraysInstanced(n,h,l,f),e.update(l,n,f))}function a(h,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,f);let u=0;for(let g=0;g<f;g++)u+=l[g];e.update(u,n,1)}function c(h,l,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<h.length;g++)o(h[g],l[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=l[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function zv(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==bi&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let I=L===kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Di&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Li&&!I)}function c(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:E,maxSamples:A}}function Uv(s){let t=this,e=null,n=0,i=!1,r=!1,o=new yi,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=l(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?l(null):h();else{let _=r?0:n,M=_*4,v=p.clippingState||null;c.value=v,v=l(g,d,M,u);for(let E=0;E!==M;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,d,u,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=u+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=u;M!==x;++M,v+=4)o.copy(f[M]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Nv(s){let t=new WeakMap;function e(o,a){return a===Ol?o.mapping=js:a===Bl&&(o.mapping=Qs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ol||a===Bl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new Nr(c.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Kr=4,Vd=[.125,.215,.35,.446,.526,.582],rr=20,yu=new rs,Wd=new kt,_u=null,Mu=0,bu=0,wu=!1,sr=(1+Math.sqrt(5))/2,$r=1/sr,Xd=[new P(-sr,$r,0),new P(sr,$r,0),new P(-$r,0,sr),new P($r,0,sr),new P(0,sr,-$r),new P(0,sr,$r),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Ov=new P,jr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Ov}=r;_u=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_u,Mu,bu),this._renderer.xr.enabled=wu,t.scissorTest=!1,Ec(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===js||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_u=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:kn,format:bi,colorSpace:Xs,depthBuffer:!1},i=qd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bv(r)),this._blurMaterial=kv(r,t,e)}return i}_compileMaterial(t){let e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,yu)}_sceneToCubeUV(t,e,n,i,r){let c=new Bn(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(Wd),f.toneMapping=Ii,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));let x=new En({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),m=new $t(new xe,x),p=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,p=!0):(x.color.copy(Wd),p=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(c.up.set(0,h[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[M],r.y,r.z)):v===1?(c.up.set(0,0,h[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[M],r.z)):(c.up.set(0,h[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[M]));let E=this._cubeSize;Ec(i,v*E,M>2?E:0,E,E),f.setRenderTarget(i),p&&f.render(m,c),f.render(t,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=d,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===js||t.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ec(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,yu)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xd[(i-r-1)%Xd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,f=new $t(this._lodPlanes[i],h),d=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*rr-1),x=r/g,m=isFinite(r)?1+Math.floor(l*x):rr;m>rr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);let p=[],_=0;for(let L=0;L<rr;++L){let I=L/x,S=Math.exp(-I*I/2);p.push(S),L===0?_+=S:L<m&&(_+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let v=this._sizeLods[i],E=3*v*(i>M-Kr?i-M+Kr:0),A=4*(this._cubeSize-v);Ec(e,E,A,3*v,2*v),c.setRenderTarget(e),c.render(f,yu)}};function Bv(s){let t=[],e=[],n=[],i=s,r=s-Kr+1+Vd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Kr?c=Vd[o-s+Kr-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),l=-h,f=1+h,d=[l,l,f,l,f,f,l,l,f,f,l,f],u=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*u),M=new Float32Array(m*g*u),v=new Float32Array(p*g*u);for(let A=0;A<u;A++){let L=A%3*2/3-1,I=A>2?0:-1,S=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];_.set(S,x*g*A),M.set(d,m*g*A);let w=[A,A,A,A,A,A];v.set(w,p*g*A)}let E=new en;E.setAttribute("position",new yn(_,x)),E.setAttribute("uv",new yn(M,m)),E.setAttribute("faceIndex",new yn(v,p)),t.push(E),i>Kr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qd(s,t,e){let n=new xn(s,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ec(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function kv(s,t,e){let n=new Float32Array(rr),i=new P(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function Yd(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function Zd(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function Hv(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===Ol||c===Bl,l=c===js||c===Qs;if(h||l){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new jr(s)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return h&&u&&u.height>0||l&&u&&i(u)?(e===null&&(e=new jr(s)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function i(a){let c=0,h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Gv(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vv(s,t,e,n){let i={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let u in d)t.update(d[u],s.ARRAY_BUFFER)}function h(f){let d=[],u=f.index,g=f.attributes.position,x=0;if(u!==null){let _=u.array;x=u.version;for(let M=0,v=_.length;M<v;M+=3){let E=_[M+0],A=_[M+1],L=_[M+2];d.push(E,A,A,L,L,E)}}else if(g!==void 0){let _=g.array;x=g.version;for(let M=0,v=_.length/3-1;M<v;M+=3){let E=M+0,A=M+1,L=M+2;d.push(E,A,A,L,L,E)}}else return;let m=new(du(d)?Fo:Lo)(d,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function l(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:l}}function Wv(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function h(d,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,d*o,g),e.update(u,n,g))}function l(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function f(d,u,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,u[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=u[_]*x[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function Xv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qv(s,t,e){let n=new WeakMap,i=new Ke;function r(o,a,c){let h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=l!==void 0?l.length:0,d=n.get(a);if(d===void 0||d.count!==f){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;u===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*E*4*f),L=new Po(A,v,E,f);L.type=Li,L.needsUpdate=!0;let I=M*4;for(let w=0;w<f;w++){let N=m[w],H=p[w],B=_[w],O=v*E*4*w;for(let k=0;k<N.count;k++){let G=k*I;u===!0&&(i.fromBufferAttribute(N,k),A[O+G+0]=i.x,A[O+G+1]=i.y,A[O+G+2]=i.z,A[O+G+3]=0),g===!0&&(i.fromBufferAttribute(H,k),A[O+G+4]=i.x,A[O+G+5]=i.y,A[O+G+6]=i.z,A[O+G+7]=0),x===!0&&(i.fromBufferAttribute(B,k),A[O+G+8]=i.x,A[O+G+9]=i.y,A[O+G+10]=i.z,A[O+G+11]=B.itemSize===4?i.w:1)}}d={count:f,texture:L,size:new St(v,E)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<h.length;x++)u+=h[x];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Yv(s,t,e,n){let i=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,f=t.get(c,l);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return f}function o(){i=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var dp=new si,$d=new is(1,1),pp=new Po,mp=new ll,gp=new Uo,Kd=[],Jd=[],jd=new Float32Array(16),Qd=new Float32Array(9),tp=new Float32Array(4);function Qr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Kd[i];if(r===void 0&&(r=new Float32Array(i),Kd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Hn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Gn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ac(s,t){let e=Jd[t];e===void 0&&(e=new Int32Array(t),Jd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Zv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function $v(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Hn(e,t))return;s.uniform2fv(this.addr,t),Gn(e,t)}}function Kv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Hn(e,t))return;s.uniform3fv(this.addr,t),Gn(e,t)}}function Jv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Hn(e,t))return;s.uniform4fv(this.addr,t),Gn(e,t)}}function jv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Hn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Gn(e,t)}else{if(Hn(e,n))return;tp.set(n),s.uniformMatrix2fv(this.addr,!1,tp),Gn(e,n)}}function Qv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Hn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Gn(e,t)}else{if(Hn(e,n))return;Qd.set(n),s.uniformMatrix3fv(this.addr,!1,Qd),Gn(e,n)}}function t1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Hn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Gn(e,t)}else{if(Hn(e,n))return;jd.set(n),s.uniformMatrix4fv(this.addr,!1,jd),Gn(e,n)}}function e1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function n1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Hn(e,t))return;s.uniform2iv(this.addr,t),Gn(e,t)}}function i1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Hn(e,t))return;s.uniform3iv(this.addr,t),Gn(e,t)}}function s1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Hn(e,t))return;s.uniform4iv(this.addr,t),Gn(e,t)}}function r1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function o1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Hn(e,t))return;s.uniform2uiv(this.addr,t),Gn(e,t)}}function a1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Hn(e,t))return;s.uniform3uiv(this.addr,t),Gn(e,t)}}function l1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Hn(e,t))return;s.uniform4uiv(this.addr,t),Gn(e,t)}}function c1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?($d.compareFunction=ha,r=$d):r=dp,e.setTexture2D(t||r,i)}function h1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mp,i)}function u1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gp,i)}function f1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pp,i)}function d1(s){switch(s){case 5126:return Zv;case 35664:return $v;case 35665:return Kv;case 35666:return Jv;case 35674:return jv;case 35675:return Qv;case 35676:return t1;case 5124:case 35670:return e1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return s1;case 5125:return r1;case 36294:return o1;case 36295:return a1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return f1}}function p1(s,t){s.uniform1fv(this.addr,t)}function m1(s,t){let e=Qr(t,this.size,2);s.uniform2fv(this.addr,e)}function g1(s,t){let e=Qr(t,this.size,3);s.uniform3fv(this.addr,e)}function x1(s,t){let e=Qr(t,this.size,4);s.uniform4fv(this.addr,e)}function v1(s,t){let e=Qr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function y1(s,t){let e=Qr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function _1(s,t){let e=Qr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function M1(s,t){s.uniform1iv(this.addr,t)}function b1(s,t){s.uniform2iv(this.addr,t)}function w1(s,t){s.uniform3iv(this.addr,t)}function E1(s,t){s.uniform4iv(this.addr,t)}function S1(s,t){s.uniform1uiv(this.addr,t)}function T1(s,t){s.uniform2uiv(this.addr,t)}function A1(s,t){s.uniform3uiv(this.addr,t)}function R1(s,t){s.uniform4uiv(this.addr,t)}function C1(s,t,e){let n=this.cache,i=t.length,r=Ac(e,i);Hn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||dp,r[o])}function P1(s,t,e){let n=this.cache,i=t.length,r=Ac(e,i);Hn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||mp,r[o])}function I1(s,t,e){let n=this.cache,i=t.length,r=Ac(e,i);Hn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||gp,r[o])}function D1(s,t,e){let n=this.cache,i=t.length,r=Ac(e,i);Hn(n,r)||(s.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||pp,r[o])}function L1(s){switch(s){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return x1;case 35674:return v1;case 35675:return y1;case 35676:return _1;case 5124:case 35670:return M1;case 35667:case 35671:return b1;case 35668:case 35672:return w1;case 35669:case 35673:return E1;case 5125:return S1;case 36294:return T1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return D1}}var Su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d1(e.type)}},Tu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L1(e.type)}},Au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Eu=/(\w+)(\])?(\[|\.)?/g;function ep(s,t){s.seq.push(t),s.map[t.id]=t}function F1(s,t,e){let n=s.name,i=n.length;for(Eu.lastIndex=0;;){let r=Eu.exec(n),o=Eu.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===i){ep(e,h===void 0?new Su(a,s,t):new Tu(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Au(a),ep(e,f)),e=f}}}var Jr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);F1(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function np(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var z1=37297,U1=0;function N1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ip=new ze;function O1(s){nn._getMatrix(ip,nn.workingColorSpace,s);let t=`mat3( ${ip.elements.map(e=>e.toFixed(4))} )`;switch(nn.getTransfer(s)){case Ao:return[t,"LinearTransferOETF"];case hn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function sp(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+N1(s.getShaderSource(t),a)}else return r}function B1(s,t){let e=O1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function k1(s,t){let e;switch(t){case vd:e="Linear";break;case yd:e="Reinhard";break;case _d:e="Cineon";break;case Md:e="ACESFilmic";break;case wd:e="AgX";break;case Ed:e="Neutral";break;case bd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sc=new P;function H1(){nn.getLuminanceCoefficients(Sc);let s=Sc.x.toFixed(4),t=Sc.y.toFixed(4),e=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function V1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ua(s){return s!==""}function rp(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function op(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(s){return s.replace(X1,Y1)}var q1=new Map;function Y1(s,t){let e=Pe[t];if(e===void 0){let n=q1.get(t);if(n!==void 0)e=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ru(e)}var Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ap(s){return s.replace(Z1,$1)}function $1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lp(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function K1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(t="SHADOWMAP_TYPE_VSM"),t}function J1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Qs:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function Q1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eu:t="ENVMAP_BLENDING_MULTIPLY";break;case gd:t="ENVMAP_BLENDING_MIX";break;case xd:t="ENVMAP_BLENDING_ADD";break}return t}function ty(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ey(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=K1(e),h=J1(e),l=j1(e),f=Q1(e),d=ty(e),u=G1(e),g=V1(r),x=i.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ua).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ua).join(`
`),p.length>0&&(p+=`
`)):(m=[lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),p=[lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?Pe.tonemapping_pars_fragment:"",e.toneMapping!==Ii?k1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,B1("linearToOutputTexel",e.outputColorSpace),H1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ua).join(`
`)),o=Ru(o),o=rp(o,e),o=op(o,e),a=Ru(a),a=rp(a,e),a=op(a,e),o=ap(o),a=ap(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+m+o,v=_+p+a,E=np(i,i.VERTEX_SHADER,M),A=np(i,i.FRAGMENT_SHADER,v);i.attachShader(x,E),i.attachShader(x,A),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function L(N){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(E)||"",O=i.getShaderInfoLog(A)||"",k=H.trim(),G=B.trim(),rt=O.trim(),et=!0,z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(et=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,E,A);else{let Tt=sp(i,E,"vertex"),Rt=sp(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+Tt+`
`+Rt)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(G===""||rt==="")&&(z=!1);z&&(N.diagnostics={runnable:et,programLog:k,vertexShader:{log:G,prefix:m},fragmentShader:{log:rt,prefix:p}})}i.deleteShader(E),i.deleteShader(A),I=new Jr(i,x),S=W1(i,x)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,z1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}var ny=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pu(t),e.set(t,n)),n}},Pu=class{constructor(t){this.id=ny++,this.code=t,this.usedTimes=0}};function iy(s,t,e,n,i,r,o){let a=new Do,c=new Cu,h=new Set,l=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return h.add(S),S===0?"uv":`uv${S}`}function m(S,w,N,H,B){let O=H.fog,k=B.geometry,G=S.isMeshStandardMaterial?H.environment:null,rt=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),et=rt&&rt.mapping===sa?rt.image.height:null,z=g[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let Tt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Rt=Tt!==void 0?Tt.length:0,Wt=0;k.morphAttributes.position!==void 0&&(Wt=1),k.morphAttributes.normal!==void 0&&(Wt=2),k.morphAttributes.color!==void 0&&(Wt=3);let Kt,Nt,ee,pt;if(z){let qe=Gi[z];Kt=qe.vertexShader,Nt=qe.fragmentShader}else Kt=S.vertexShader,Nt=S.fragmentShader,c.update(S),ee=c.getVertexShaderID(S),pt=c.getFragmentShaderID(S);let wt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),Ht=B.isInstancedMesh===!0,Vt=B.isBatchedMesh===!0,dt=!!S.map,Ot=!!S.matcap,D=!!rt,ct=!!S.aoMap,ht=!!S.lightMap,lt=!!S.bumpMap,tt=!!S.normalMap,F=!!S.displacementMap,U=!!S.emissiveMap,V=!!S.metalnessMap,q=!!S.roughnessMap,K=S.anisotropy>0,b=S.clearcoat>0,y=S.dispersion>0,Y=S.iridescence>0,nt=S.sheen>0,mt=S.transmission>0,ut=K&&!!S.anisotropyMap,Qt=b&&!!S.clearcoatMap,Et=b&&!!S.clearcoatNormalMap,Jt=b&&!!S.clearcoatRoughnessMap,re=Y&&!!S.iridescenceMap,At=Y&&!!S.iridescenceThicknessMap,Ut=nt&&!!S.sheenColorMap,me=nt&&!!S.sheenRoughnessMap,de=!!S.specularMap,Xt=!!S.specularColorMap,pe=!!S.specularIntensityMap,Z=mt&&!!S.transmissionMap,It=mt&&!!S.thicknessMap,Gt=!!S.gradientMap,te=!!S.alphaMap,Ct=S.alphaTest>0,vt=!!S.alphaHash,ue=!!S.extensions,Se=Ii;S.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Se=s.toneMapping);let Qe={shaderID:z,shaderType:S.type,shaderName:S.name,vertexShader:Kt,fragmentShader:Nt,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:pt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Vt,batchingColor:Vt&&B._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&B.instanceColor!==null,instancingMorph:Ht&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Xs,alphaToCoverage:!!S.alphaToCoverage,map:dt,matcap:Ot,envMap:D,envMapMode:D&&rt.mapping,envMapCubeUVHeight:et,aoMap:ct,lightMap:ht,bumpMap:lt,normalMap:tt,displacementMap:d&&F,emissiveMap:U,normalMapObjectSpace:tt&&S.normalMapType===Ad,normalMapTangentSpace:tt&&S.normalMapType===hu,metalnessMap:V,roughnessMap:q,anisotropy:K,anisotropyMap:ut,clearcoat:b,clearcoatMap:Qt,clearcoatNormalMap:Et,clearcoatRoughnessMap:Jt,dispersion:y,iridescence:Y,iridescenceMap:re,iridescenceThicknessMap:At,sheen:nt,sheenColorMap:Ut,sheenRoughnessMap:me,specularMap:de,specularColorMap:Xt,specularIntensityMap:pe,transmission:mt,transmissionMap:Z,thicknessMap:It,gradientMap:Gt,opaque:S.transparent===!1&&S.blending===ts&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:Ct,alphaHash:vt,combine:S.combine,mapUv:dt&&x(S.map.channel),aoMapUv:ct&&x(S.aoMap.channel),lightMapUv:ht&&x(S.lightMap.channel),bumpMapUv:lt&&x(S.bumpMap.channel),normalMapUv:tt&&x(S.normalMap.channel),displacementMapUv:F&&x(S.displacementMap.channel),emissiveMapUv:U&&x(S.emissiveMap.channel),metalnessMapUv:V&&x(S.metalnessMap.channel),roughnessMapUv:q&&x(S.roughnessMap.channel),anisotropyMapUv:ut&&x(S.anisotropyMap.channel),clearcoatMapUv:Qt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Et&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:At&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(S.sheenRoughnessMap.channel),specularMapUv:de&&x(S.specularMap.channel),specularColorMapUv:Xt&&x(S.specularColorMap.channel),specularIntensityMapUv:pe&&x(S.specularIntensityMap.channel),transmissionMapUv:Z&&x(S.transmissionMap.channel),thicknessMapUv:It&&x(S.thicknessMap.channel),alphaMapUv:te&&x(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(tt||K),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(dt||te),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Dt,skinning:B.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Wt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,decodeVideoTexture:dt&&S.map.isVideoTexture===!0&&nn.getTransfer(S.map.colorSpace)===hn,decodeVideoTextureEmissive:U&&S.emissiveMap.isVideoTexture===!0&&nn.getTransfer(S.emissiveMap.colorSpace)===hn,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Sn,flipSided:S.side===Kn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ue&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&S.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qe.vertexUv1s=h.has(1),Qe.vertexUv2s=h.has(2),Qe.vertexUv3s=h.has(3),h.clear(),Qe}function p(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)w.push(N),w.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(_(w,S),M(w,S),w.push(s.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function _(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function M(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let w=g[S.type],N;if(w){let H=Gi[w];N=Fi.clone(H.uniforms)}else N=S.uniforms;return N}function E(S,w){let N;for(let H=0,B=l.length;H<B;H++){let O=l[H];if(O.cacheKey===w){N=O,++N.usedTimes;break}}return N===void 0&&(N=new ey(s,w,S,r),l.push(N)),N}function A(S){if(--S.usedTimes===0){let w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),S.destroy()}}function L(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:L,programs:l,dispose:I}}function sy(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ry(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function cp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function hp(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,u,g,x,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,d,u,g,x,m){let p=o(f,d,u,g,x,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(f,d,u,g,x,m){let p=o(f,d,u,g,x,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function h(f,d){e.length>1&&e.sort(f||ry),n.length>1&&n.sort(d||cp),i.length>1&&i.sort(d||cp)}function l(){for(let f=t,d=s.length;f<d;f++){let u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:l,sort:h}}function oy(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new hp,s.set(n,[o])):i>=r.length?(o=new hp,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ay(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new kt};break;case"SpotLight":e={position:new P,direction:new P,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function ly(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var cy=0;function hy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function uy(s){let t=new ay,e=ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new P);let i=new P,r=new ne,o=new ne;function a(h){let l=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,g=0,x=0,m=0,p=0,_=0,M=0,v=0,E=0,A=0,L=0;h.sort(hy);for(let S=0,w=h.length;S<w;S++){let N=h[S],H=N.color,B=N.intensity,O=N.distance,k=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=H.r*B,f+=H.g*B,d+=H.b*B;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],B);L++}else if(N.isDirectionalLight){let G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let rt=N.shadow,et=e.get(N);et.shadowIntensity=rt.intensity,et.shadowBias=rt.bias,et.shadowNormalBias=rt.normalBias,et.shadowRadius=rt.radius,et.shadowMapSize=rt.mapSize,n.directionalShadow[u]=et,n.directionalShadowMap[u]=k,n.directionalShadowMatrix[u]=N.shadow.matrix,_++}n.directional[u]=G,u++}else if(N.isSpotLight){let G=t.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(H).multiplyScalar(B),G.distance=O,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[x]=G;let rt=N.shadow;if(N.map&&(n.spotLightMap[E]=N.map,E++,rt.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[x]=rt.matrix,N.castShadow){let et=e.get(N);et.shadowIntensity=rt.intensity,et.shadowBias=rt.bias,et.shadowNormalBias=rt.normalBias,et.shadowRadius=rt.radius,et.shadowMapSize=rt.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=k,v++}x++}else if(N.isRectAreaLight){let G=t.get(N);G.color.copy(H).multiplyScalar(B),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=G,m++}else if(N.isPointLight){let G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){let rt=N.shadow,et=e.get(N);et.shadowIntensity=rt.intensity,et.shadowBias=rt.bias,et.shadowNormalBias=rt.normalBias,et.shadowRadius=rt.radius,et.shadowMapSize=rt.mapSize,et.shadowCameraNear=rt.camera.near,et.shadowCameraFar=rt.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=N.shadow.matrix,M++}n.point[g]=G,g++}else if(N.isHemisphereLight){let G=t.get(N);G.skyColor.copy(N.color).multiplyScalar(B),G.groundColor.copy(N.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==u||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==_||I.numPointShadows!==M||I.numSpotShadows!==v||I.numSpotMaps!==E||I.numLightProbes!==L)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,I.directionalLength=u,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=_,I.numPointShadows=M,I.numSpotShadows=v,I.numSpotMaps=E,I.numLightProbes=L,n.version=cy++)}function c(h,l){let f=0,d=0,u=0,g=0,x=0,m=l.matrixWorldInverse;for(let p=0,_=h.length;p<_;p++){let M=h[p];if(M.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(M.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function up(s){let t=new uy(s),e=[],n=[];function i(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function fy(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new up(s),t.set(i,[a])):r>=o.length?(a=new up(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,py=`uniform sampler2D shadow_pass;
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
}`;function my(s,t,e){let n=new Es,i=new St,r=new St,o=new Ke,a=new Wr({depthPacking:bc}),c=new vl,h={},l=e.maxTextureSize,f={[Qi]:Kn,[Kn]:Qi,[Sn]:Sn},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:dy,fragmentShader:py}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new en;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let p=this.type;this.render=function(A,L,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=s.getRenderTarget(),w=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),H=s.state;H.setBlending(os),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=p!==Hi&&this.type===Hi,O=p===Hi&&this.type!==Hi;for(let k=0,G=A.length;k<G;k++){let rt=A[k],et=rt.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;i.copy(et.mapSize);let z=et.getFrameExtents();if(i.multiply(z),r.copy(et.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/z.x),i.x=r.x*z.x,et.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/z.y),i.y=r.y*z.y,et.mapSize.y=r.y)),et.map===null||B===!0||O===!0){let Rt=this.type!==Hi?{minFilter:Qn,magFilter:Qn}:{};et.map!==null&&et.map.dispose(),et.map=new xn(i.x,i.y,Rt),et.map.texture.name=rt.name+".shadowMap",et.camera.updateProjectionMatrix()}s.setRenderTarget(et.map),s.clear();let Tt=et.getViewportCount();for(let Rt=0;Rt<Tt;Rt++){let Wt=et.getViewport(Rt);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),H.viewport(o),et.updateMatrices(rt,Rt),n=et.getFrustum(),v(L,I,et.camera,rt,this.type)}et.isPointLightShadow!==!0&&this.type===Hi&&_(et,I),et.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,w,N)};function _(A,L){let I=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(L,null,I,d,x,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(L,null,I,u,x,null)}function M(A,L,I,S){let w=null,N=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)w=N;else if(w=I.isPointLight===!0?c:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let H=w.uuid,B=L.uuid,O=h[H];O===void 0&&(O={},h[H]=O);let k=O[B];k===void 0&&(k=w.clone(),O[B]=k,L.addEventListener("dispose",E)),w=k}if(w.visible=L.visible,w.wireframe=L.wireframe,S===Hi?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:f[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let H=s.properties.get(w);H.light=I}return w}function v(A,L,I,S,w){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Hi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let B=t.update(A),O=A.material;if(Array.isArray(O)){let k=B.groups;for(let G=0,rt=k.length;G<rt;G++){let et=k[G],z=O[et.materialIndex];if(z&&z.visible){let Tt=M(A,z,S,w);A.onBeforeShadow(s,A,L,I,B,Tt,et),s.renderBufferDirect(I,null,B,Tt,A,et),A.onAfterShadow(s,A,L,I,B,Tt,et)}}}else if(O.visible){let k=M(A,O,S,w);A.onBeforeShadow(s,A,L,I,B,k,null),s.renderBufferDirect(I,null,B,k,A,null),A.onAfterShadow(s,A,L,I,B,k,null)}}let H=A.children;for(let B=0,O=H.length;B<O;B++)v(H[B],L,I,S,w)}function E(A){A.target.removeEventListener("dispose",E);for(let I in h){let S=h[I],w=A.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}var gy={[Il]:Dl,[Ll]:Ul,[Fl]:Nl,[Ws]:zl,[Dl]:Il,[Ul]:Ll,[Nl]:Fl,[zl]:Ws};function xy(s,t){function e(){let Z=!1,It=new Ke,Gt=null,te=new Ke(0,0,0,0);return{setMask:function(Ct){Gt!==Ct&&!Z&&(s.colorMask(Ct,Ct,Ct,Ct),Gt=Ct)},setLocked:function(Ct){Z=Ct},setClear:function(Ct,vt,ue,Se,Qe){Qe===!0&&(Ct*=Se,vt*=Se,ue*=Se),It.set(Ct,vt,ue,Se),te.equals(It)===!1&&(s.clearColor(Ct,vt,ue,Se),te.copy(It))},reset:function(){Z=!1,Gt=null,te.set(-1,0,0,0)}}}function n(){let Z=!1,It=!1,Gt=null,te=null,Ct=null;return{setReversed:function(vt){if(It!==vt){let ue=t.get("EXT_clip_control");vt?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),It=vt;let Se=Ct;Ct=null,this.setClear(Se)}},getReversed:function(){return It},setTest:function(vt){vt?wt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(vt){Gt!==vt&&!Z&&(s.depthMask(vt),Gt=vt)},setFunc:function(vt){if(It&&(vt=gy[vt]),te!==vt){switch(vt){case Il:s.depthFunc(s.NEVER);break;case Dl:s.depthFunc(s.ALWAYS);break;case Ll:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case Fl:s.depthFunc(s.EQUAL);break;case zl:s.depthFunc(s.GEQUAL);break;case Ul:s.depthFunc(s.GREATER);break;case Nl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=vt}},setLocked:function(vt){Z=vt},setClear:function(vt){Ct!==vt&&(It&&(vt=1-vt),s.clearDepth(vt),Ct=vt)},reset:function(){Z=!1,Gt=null,te=null,Ct=null,It=!1}}}function i(){let Z=!1,It=null,Gt=null,te=null,Ct=null,vt=null,ue=null,Se=null,Qe=null;return{setTest:function(qe){Z||(qe?wt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(qe){It!==qe&&!Z&&(s.stencilMask(qe),It=qe)},setFunc:function(qe,C,W){(Gt!==qe||te!==C||Ct!==W)&&(s.stencilFunc(qe,C,W),Gt=qe,te=C,Ct=W)},setOp:function(qe,C,W){(vt!==qe||ue!==C||Se!==W)&&(s.stencilOp(qe,C,W),vt=qe,ue=C,Se=W)},setLocked:function(qe){Z=qe},setClear:function(qe){Qe!==qe&&(s.clearStencil(qe),Qe=qe)},reset:function(){Z=!1,It=null,Gt=null,te=null,Ct=null,vt=null,ue=null,Se=null,Qe=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,h=new WeakMap,l={},f={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,_=null,M=null,v=null,E=null,A=null,L=new kt(0,0,0),I=0,S=!1,w=null,N=null,H=null,B=null,O=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,rt=0,et=s.getParameter(s.VERSION);et.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(et)[1]),G=rt>=1):et.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),G=rt>=2);let z=null,Tt={},Rt=s.getParameter(s.SCISSOR_BOX),Wt=s.getParameter(s.VIEWPORT),Kt=new Ke().fromArray(Rt),Nt=new Ke().fromArray(Wt);function ee(Z,It,Gt,te){let Ct=new Uint8Array(4),vt=s.createTexture();s.bindTexture(Z,vt),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ue=0;ue<Gt;ue++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(It,0,s.RGBA,1,1,te,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(It+ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return vt}let pt={};pt[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),pt[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pt[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),wt(s.DEPTH_TEST),o.setFunc(Ws),lt(!1),tt(Jh),wt(s.CULL_FACE),ct(os);function wt(Z){l[Z]!==!0&&(s.enable(Z),l[Z]=!0)}function Dt(Z){l[Z]!==!1&&(s.disable(Z),l[Z]=!1)}function Ht(Z,It){return f[Z]!==It?(s.bindFramebuffer(Z,It),f[Z]=It,Z===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=It),Z===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=It),!0):!1}function Vt(Z,It){let Gt=u,te=!1;if(Z){Gt=d.get(It),Gt===void 0&&(Gt=[],d.set(It,Gt));let Ct=Z.textures;if(Gt.length!==Ct.length||Gt[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,ue=Ct.length;vt<ue;vt++)Gt[vt]=s.COLOR_ATTACHMENT0+vt;Gt.length=Ct.length,te=!0}}else Gt[0]!==s.BACK&&(Gt[0]=s.BACK,te=!0);te&&s.drawBuffers(Gt)}function dt(Z){return g!==Z?(s.useProgram(Z),g=Z,!0):!1}let Ot={[bs]:s.FUNC_ADD,[Qf]:s.FUNC_SUBTRACT,[td]:s.FUNC_REVERSE_SUBTRACT};Ot[ed]=s.MIN,Ot[nd]=s.MAX;let D={[id]:s.ZERO,[sd]:s.ONE,[rd]:s.SRC_COLOR,[nl]:s.SRC_ALPHA,[ud]:s.SRC_ALPHA_SATURATE,[cd]:s.DST_COLOR,[ad]:s.DST_ALPHA,[od]:s.ONE_MINUS_SRC_COLOR,[il]:s.ONE_MINUS_SRC_ALPHA,[hd]:s.ONE_MINUS_DST_COLOR,[ld]:s.ONE_MINUS_DST_ALPHA,[fd]:s.CONSTANT_COLOR,[dd]:s.ONE_MINUS_CONSTANT_COLOR,[pd]:s.CONSTANT_ALPHA,[md]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(Z,It,Gt,te,Ct,vt,ue,Se,Qe,qe){if(Z===os){x===!0&&(Dt(s.BLEND),x=!1);return}if(x===!1&&(wt(s.BLEND),x=!0),Z!==jf){if(Z!==m||qe!==S){if((p!==bs||v!==bs)&&(s.blendEquation(s.FUNC_ADD),p=bs,v=bs),qe)switch(Z){case ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ai:s.blendFunc(s.ONE,s.ONE);break;case Qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}_=null,M=null,E=null,A=null,L.set(0,0,0),I=0,m=Z,S=qe}return}Ct=Ct||It,vt=vt||Gt,ue=ue||te,(It!==p||Ct!==v)&&(s.blendEquationSeparate(Ot[It],Ot[Ct]),p=It,v=Ct),(Gt!==_||te!==M||vt!==E||ue!==A)&&(s.blendFuncSeparate(D[Gt],D[te],D[vt],D[ue]),_=Gt,M=te,E=vt,A=ue),(Se.equals(L)===!1||Qe!==I)&&(s.blendColor(Se.r,Se.g,Se.b,Qe),L.copy(Se),I=Qe),m=Z,S=!1}function ht(Z,It){Z.side===Sn?Dt(s.CULL_FACE):wt(s.CULL_FACE);let Gt=Z.side===Kn;It&&(Gt=!Gt),lt(Gt),Z.blending===ts&&Z.transparent===!1?ct(os):ct(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let te=Z.stencilWrite;a.setTest(te),te&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),U(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?wt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(Z){w!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),w=Z)}function tt(Z){Z!==Kf?(wt(s.CULL_FACE),Z!==N&&(Z===Jh?s.cullFace(s.BACK):Z===Jf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),N=Z}function F(Z){Z!==H&&(G&&s.lineWidth(Z),H=Z)}function U(Z,It,Gt){Z?(wt(s.POLYGON_OFFSET_FILL),(B!==It||O!==Gt)&&(s.polygonOffset(It,Gt),B=It,O=Gt)):Dt(s.POLYGON_OFFSET_FILL)}function V(Z){Z?wt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function q(Z){Z===void 0&&(Z=s.TEXTURE0+k-1),z!==Z&&(s.activeTexture(Z),z=Z)}function K(Z,It,Gt){Gt===void 0&&(z===null?Gt=s.TEXTURE0+k-1:Gt=z);let te=Tt[Gt];te===void 0&&(te={type:void 0,texture:void 0},Tt[Gt]=te),(te.type!==Z||te.texture!==It)&&(z!==Gt&&(s.activeTexture(Gt),z=Gt),s.bindTexture(Z,It||pt[Z]),te.type=Z,te.texture=It)}function b(){let Z=Tt[z];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function nt(){try{s.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function mt(){try{s.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Qt(){try{s.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Et(){try{s.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Jt(){try{s.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function re(){try{s.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function At(){try{s.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ut(Z){Kt.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),Kt.copy(Z))}function me(Z){Nt.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),Nt.copy(Z))}function de(Z,It){let Gt=h.get(It);Gt===void 0&&(Gt=new WeakMap,h.set(It,Gt));let te=Gt.get(Z);te===void 0&&(te=s.getUniformBlockIndex(It,Z.name),Gt.set(Z,te))}function Xt(Z,It){let te=h.get(It).get(Z);c.get(It)!==te&&(s.uniformBlockBinding(It,te,Z.__bindingPointIndex),c.set(It,te))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},z=null,Tt={},f={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,_=null,M=null,v=null,E=null,A=null,L=new kt(0,0,0),I=0,S=!1,w=null,N=null,H=null,B=null,O=null,Kt.set(0,0,s.canvas.width,s.canvas.height),Nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:wt,disable:Dt,bindFramebuffer:Ht,drawBuffers:Vt,useProgram:dt,setBlending:ct,setMaterial:ht,setFlipSided:lt,setCullFace:tt,setLineWidth:F,setPolygonOffset:U,setScissorTest:V,activeTexture:q,bindTexture:K,unbindTexture:b,compressedTexImage2D:y,compressedTexImage3D:Y,texImage2D:re,texImage3D:At,updateUBOMapping:de,uniformBlockBinding:Xt,texStorage2D:Et,texStorage3D:Jt,texSubImage2D:nt,texSubImage3D:mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Qt,scissor:Ut,viewport:me,reset:pe}}function vy(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new St,l=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return u?new OffscreenCanvas(b,y):Co("canvas")}function x(b,y,Y){let nt=1,mt=K(b);if((mt.width>Y||mt.height>Y)&&(nt=Y/Math.max(mt.width,mt.height)),nt<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let ut=Math.floor(nt*mt.width),Qt=Math.floor(nt*mt.height);f===void 0&&(f=g(ut,Qt));let Et=y?g(ut,Qt):f;return Et.width=ut,Et.height=Qt,Et.getContext("2d").drawImage(b,0,0,ut,Qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ut+"x"+Qt+")."),Et}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){s.generateMipmap(b)}function _(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(b,y,Y,nt,mt=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ut=y;if(y===s.RED&&(Y===s.FLOAT&&(ut=s.R32F),Y===s.HALF_FLOAT&&(ut=s.R16F),Y===s.UNSIGNED_BYTE&&(ut=s.R8)),y===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ut=s.R8UI),Y===s.UNSIGNED_SHORT&&(ut=s.R16UI),Y===s.UNSIGNED_INT&&(ut=s.R32UI),Y===s.BYTE&&(ut=s.R8I),Y===s.SHORT&&(ut=s.R16I),Y===s.INT&&(ut=s.R32I)),y===s.RG&&(Y===s.FLOAT&&(ut=s.RG32F),Y===s.HALF_FLOAT&&(ut=s.RG16F),Y===s.UNSIGNED_BYTE&&(ut=s.RG8)),y===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ut=s.RG8UI),Y===s.UNSIGNED_SHORT&&(ut=s.RG16UI),Y===s.UNSIGNED_INT&&(ut=s.RG32UI),Y===s.BYTE&&(ut=s.RG8I),Y===s.SHORT&&(ut=s.RG16I),Y===s.INT&&(ut=s.RG32I)),y===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),Y===s.UNSIGNED_INT&&(ut=s.RGB32UI),Y===s.BYTE&&(ut=s.RGB8I),Y===s.SHORT&&(ut=s.RGB16I),Y===s.INT&&(ut=s.RGB32I)),y===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),Y===s.UNSIGNED_INT&&(ut=s.RGBA32UI),Y===s.BYTE&&(ut=s.RGBA8I),Y===s.SHORT&&(ut=s.RGBA16I),Y===s.INT&&(ut=s.RGBA32I)),y===s.RGB&&(Y===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(ut=s.R11F_G11F_B10F)),y===s.RGBA){let Qt=mt?Ao:nn.getTransfer(nt);Y===s.FLOAT&&(ut=s.RGBA32F),Y===s.HALF_FLOAT&&(ut=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ut=Qt===hn?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function v(b,y){let Y;return b?y===null||y===Rs||y===Yr?Y=s.DEPTH24_STENCIL8:y===Li?Y=s.DEPTH32F_STENCIL8:y===qr&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Rs||y===Yr?Y=s.DEPTH_COMPONENT24:y===Li?Y=s.DEPTH_COMPONENT32F:y===qr&&(Y=s.DEPTH_COMPONENT16),Y}function E(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qn&&b.minFilter!==ii?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function A(b){let y=b.target;y.removeEventListener("dispose",A),I(y),y.isVideoTexture&&l.delete(y)}function L(b){let y=b.target;y.removeEventListener("dispose",L),w(y)}function I(b){let y=n.get(b);if(y.__webglInit===void 0)return;let Y=b.source,nt=d.get(Y);if(nt){let mt=nt[y.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&S(b),Object.keys(nt).length===0&&d.delete(Y)}n.remove(b)}function S(b){let y=n.get(b);s.deleteTexture(y.__webglTexture);let Y=b.source,nt=d.get(Y);delete nt[y.__cacheKey],o.memory.textures--}function w(b){let y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(y.__webglFramebuffer[nt]))for(let mt=0;mt<y.__webglFramebuffer[nt].length;mt++)s.deleteFramebuffer(y.__webglFramebuffer[nt][mt]);else s.deleteFramebuffer(y.__webglFramebuffer[nt]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[nt])}else{if(Array.isArray(y.__webglFramebuffer))for(let nt=0;nt<y.__webglFramebuffer.length;nt++)s.deleteFramebuffer(y.__webglFramebuffer[nt]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let nt=0;nt<y.__webglColorRenderbuffer.length;nt++)y.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[nt]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=b.textures;for(let nt=0,mt=Y.length;nt<mt;nt++){let ut=n.get(Y[nt]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(Y[nt])}n.remove(b)}let N=0;function H(){N=0}function B(){let b=N;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),N+=1,b}function O(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function k(b,y){let Y=n.get(b);if(b.isVideoTexture&&V(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&Y.__version!==b.version){let nt=b.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(Y,b,y);return}}else b.isExternalTexture&&(Y.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+y)}function G(b,y){let Y=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&Y.__version!==b.version){pt(Y,b,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+y)}function rt(b,y){let Y=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&Y.__version!==b.version){pt(Y,b,y);return}e.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+y)}function et(b,y){let Y=n.get(b);if(b.version>0&&Y.__version!==b.version){wt(Y,b,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+y)}let z={[ws]:s.REPEAT,[Ms]:s.CLAMP_TO_EDGE,[sl]:s.MIRRORED_REPEAT},Tt={[Qn]:s.NEAREST,[Sd]:s.NEAREST_MIPMAP_NEAREST,[ra]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[kl]:s.LINEAR_MIPMAP_NEAREST,[As]:s.LINEAR_MIPMAP_LINEAR},Rt={[Rd]:s.NEVER,[Fd]:s.ALWAYS,[Cd]:s.LESS,[ha]:s.LEQUAL,[Pd]:s.EQUAL,[Ld]:s.GEQUAL,[Id]:s.GREATER,[Dd]:s.NOTEQUAL};function Wt(b,y){if(y.type===Li&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ii||y.magFilter===kl||y.magFilter===ra||y.magFilter===As||y.minFilter===ii||y.minFilter===kl||y.minFilter===ra||y.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,z[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,z[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,z[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,Tt[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,Tt[y.minFilter]),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qn||y.minFilter!==ra&&y.minFilter!==As||y.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Kt(b,y){let Y=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));let nt=y.source,mt=d.get(nt);mt===void 0&&(mt={},d.set(nt,mt));let ut=O(y);if(ut!==b.__cacheKey){mt[ut]===void 0&&(mt[ut]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),mt[ut].usedTimes++;let Qt=mt[b.__cacheKey];Qt!==void 0&&(mt[b.__cacheKey].usedTimes--,Qt.usedTimes===0&&S(y)),b.__cacheKey=ut,b.__webglTexture=mt[ut].texture}return Y}function Nt(b,y,Y){return Math.floor(Math.floor(b/Y)/y)}function ee(b,y,Y,nt){let ut=b.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,Y,nt,y.data);else{ut.sort((At,Ut)=>At.start-Ut.start);let Qt=0;for(let At=1;At<ut.length;At++){let Ut=ut[Qt],me=ut[At],de=Ut.start+Ut.count,Xt=Nt(me.start,y.width,4),pe=Nt(Ut.start,y.width,4);me.start<=de+1&&Xt===pe&&Nt(me.start+me.count-1,y.width,4)===Xt?Ut.count=Math.max(Ut.count,me.start+me.count-Ut.start):(++Qt,ut[Qt]=me)}ut.length=Qt+1;let Et=s.getParameter(s.UNPACK_ROW_LENGTH),Jt=s.getParameter(s.UNPACK_SKIP_PIXELS),re=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let At=0,Ut=ut.length;At<Ut;At++){let me=ut[At],de=Math.floor(me.start/4),Xt=Math.ceil(me.count/4),pe=de%y.width,Z=Math.floor(de/y.width),It=Xt,Gt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Z),e.texSubImage2D(s.TEXTURE_2D,0,pe,Z,It,Gt,Y,nt,y.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Et),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),s.pixelStorei(s.UNPACK_SKIP_ROWS,re)}}function pt(b,y,Y){let nt=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=s.TEXTURE_3D);let mt=Kt(b,y),ut=y.source;e.bindTexture(nt,b.__webglTexture,s.TEXTURE0+Y);let Qt=n.get(ut);if(ut.version!==Qt.__version||mt===!0){e.activeTexture(s.TEXTURE0+Y);let Et=nn.getPrimaries(nn.workingColorSpace),Jt=y.colorSpace===as?null:nn.getPrimaries(y.colorSpace),re=y.colorSpace===as||Et===Jt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let At=x(y.image,!1,i.maxTextureSize);At=q(y,At);let Ut=r.convert(y.format,y.colorSpace),me=r.convert(y.type),de=M(y.internalFormat,Ut,me,y.colorSpace,y.isVideoTexture);Wt(nt,y);let Xt,pe=y.mipmaps,Z=y.isVideoTexture!==!0,It=Qt.__version===void 0||mt===!0,Gt=ut.dataReady,te=E(y,At);if(y.isDepthTexture)de=v(y.format===Zr,y.type),It&&(Z?e.texStorage2D(s.TEXTURE_2D,1,de,At.width,At.height):e.texImage2D(s.TEXTURE_2D,0,de,At.width,At.height,0,Ut,me,null));else if(y.isDataTexture)if(pe.length>0){Z&&It&&e.texStorage2D(s.TEXTURE_2D,te,de,pe[0].width,pe[0].height);for(let Ct=0,vt=pe.length;Ct<vt;Ct++)Xt=pe[Ct],Z?Gt&&e.texSubImage2D(s.TEXTURE_2D,Ct,0,0,Xt.width,Xt.height,Ut,me,Xt.data):e.texImage2D(s.TEXTURE_2D,Ct,de,Xt.width,Xt.height,0,Ut,me,Xt.data);y.generateMipmaps=!1}else Z?(It&&e.texStorage2D(s.TEXTURE_2D,te,de,At.width,At.height),Gt&&ee(y,At,Ut,me)):e.texImage2D(s.TEXTURE_2D,0,de,At.width,At.height,0,Ut,me,At.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Z&&It&&e.texStorage3D(s.TEXTURE_2D_ARRAY,te,de,pe[0].width,pe[0].height,At.depth);for(let Ct=0,vt=pe.length;Ct<vt;Ct++)if(Xt=pe[Ct],y.format!==bi)if(Ut!==null)if(Z){if(Gt)if(y.layerUpdates.size>0){let ue=vu(Xt.width,Xt.height,y.format,y.type);for(let Se of y.layerUpdates){let Qe=Xt.data.subarray(Se*ue/Xt.data.BYTES_PER_ELEMENT,(Se+1)*ue/Xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ct,0,0,Se,Xt.width,Xt.height,1,Ut,Qe)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ct,0,0,0,Xt.width,Xt.height,At.depth,Ut,Xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ct,de,Xt.width,Xt.height,At.depth,0,Xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Gt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Ct,0,0,0,Xt.width,Xt.height,At.depth,Ut,me,Xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Ct,de,Xt.width,Xt.height,At.depth,0,Ut,me,Xt.data)}else{Z&&It&&e.texStorage2D(s.TEXTURE_2D,te,de,pe[0].width,pe[0].height);for(let Ct=0,vt=pe.length;Ct<vt;Ct++)Xt=pe[Ct],y.format!==bi?Ut!==null?Z?Gt&&e.compressedTexSubImage2D(s.TEXTURE_2D,Ct,0,0,Xt.width,Xt.height,Ut,Xt.data):e.compressedTexImage2D(s.TEXTURE_2D,Ct,de,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Gt&&e.texSubImage2D(s.TEXTURE_2D,Ct,0,0,Xt.width,Xt.height,Ut,me,Xt.data):e.texImage2D(s.TEXTURE_2D,Ct,de,Xt.width,Xt.height,0,Ut,me,Xt.data)}else if(y.isDataArrayTexture)if(Z){if(It&&e.texStorage3D(s.TEXTURE_2D_ARRAY,te,de,At.width,At.height,At.depth),Gt)if(y.layerUpdates.size>0){let Ct=vu(At.width,At.height,y.format,y.type);for(let vt of y.layerUpdates){let ue=At.data.subarray(vt*Ct/At.data.BYTES_PER_ELEMENT,(vt+1)*Ct/At.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,Ut,me,ue)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ut,me,At.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,de,At.width,At.height,At.depth,0,Ut,me,At.data);else if(y.isData3DTexture)Z?(It&&e.texStorage3D(s.TEXTURE_3D,te,de,At.width,At.height,At.depth),Gt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ut,me,At.data)):e.texImage3D(s.TEXTURE_3D,0,de,At.width,At.height,At.depth,0,Ut,me,At.data);else if(y.isFramebufferTexture){if(It)if(Z)e.texStorage2D(s.TEXTURE_2D,te,de,At.width,At.height);else{let Ct=At.width,vt=At.height;for(let ue=0;ue<te;ue++)e.texImage2D(s.TEXTURE_2D,ue,de,Ct,vt,0,Ut,me,null),Ct>>=1,vt>>=1}}else if(pe.length>0){if(Z&&It){let Ct=K(pe[0]);e.texStorage2D(s.TEXTURE_2D,te,de,Ct.width,Ct.height)}for(let Ct=0,vt=pe.length;Ct<vt;Ct++)Xt=pe[Ct],Z?Gt&&e.texSubImage2D(s.TEXTURE_2D,Ct,0,0,Ut,me,Xt):e.texImage2D(s.TEXTURE_2D,Ct,de,Ut,me,Xt);y.generateMipmaps=!1}else if(Z){if(It){let Ct=K(At);e.texStorage2D(s.TEXTURE_2D,te,de,Ct.width,Ct.height)}Gt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ut,me,At)}else e.texImage2D(s.TEXTURE_2D,0,de,Ut,me,At);m(y)&&p(nt),Qt.__version=ut.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function wt(b,y,Y){if(y.image.length!==6)return;let nt=Kt(b,y),mt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Y);let ut=n.get(mt);if(mt.version!==ut.__version||nt===!0){e.activeTexture(s.TEXTURE0+Y);let Qt=nn.getPrimaries(nn.workingColorSpace),Et=y.colorSpace===as?null:nn.getPrimaries(y.colorSpace),Jt=y.colorSpace===as||Qt===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let re=y.isCompressedTexture||y.image[0].isCompressedTexture,At=y.image[0]&&y.image[0].isDataTexture,Ut=[];for(let vt=0;vt<6;vt++)!re&&!At?Ut[vt]=x(y.image[vt],!0,i.maxCubemapSize):Ut[vt]=At?y.image[vt].image:y.image[vt],Ut[vt]=q(y,Ut[vt]);let me=Ut[0],de=r.convert(y.format,y.colorSpace),Xt=r.convert(y.type),pe=M(y.internalFormat,de,Xt,y.colorSpace),Z=y.isVideoTexture!==!0,It=ut.__version===void 0||nt===!0,Gt=mt.dataReady,te=E(y,me);Wt(s.TEXTURE_CUBE_MAP,y);let Ct;if(re){Z&&It&&e.texStorage2D(s.TEXTURE_CUBE_MAP,te,pe,me.width,me.height);for(let vt=0;vt<6;vt++){Ct=Ut[vt].mipmaps;for(let ue=0;ue<Ct.length;ue++){let Se=Ct[ue];y.format!==bi?de!==null?Z?Gt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,0,0,Se.width,Se.height,de,Se.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,pe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,0,0,Se.width,Se.height,de,Xt,Se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,pe,Se.width,Se.height,0,de,Xt,Se.data)}}}else{if(Ct=y.mipmaps,Z&&It){Ct.length>0&&te++;let vt=K(Ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,te,pe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){Z?Gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ut[vt].width,Ut[vt].height,de,Xt,Ut[vt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pe,Ut[vt].width,Ut[vt].height,0,de,Xt,Ut[vt].data);for(let ue=0;ue<Ct.length;ue++){let Qe=Ct[ue].image[vt].image;Z?Gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,0,0,Qe.width,Qe.height,de,Xt,Qe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,pe,Qe.width,Qe.height,0,de,Xt,Qe.data)}}else{Z?Gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,de,Xt,Ut[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pe,de,Xt,Ut[vt]);for(let ue=0;ue<Ct.length;ue++){let Se=Ct[ue];Z?Gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,0,0,de,Xt,Se.image[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,pe,de,Xt,Se.image[vt])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),ut.__version=mt.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Dt(b,y,Y,nt,mt,ut){let Qt=r.convert(Y.format,Y.colorSpace),Et=r.convert(Y.type),Jt=M(Y.internalFormat,Qt,Et,Y.colorSpace),re=n.get(y),At=n.get(Y);if(At.__renderTarget=y,!re.__hasExternalTextures){let Ut=Math.max(1,y.width>>ut),me=Math.max(1,y.height>>ut);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?e.texImage3D(mt,ut,Jt,Ut,me,y.depth,0,Qt,Et,null):e.texImage2D(mt,ut,Jt,Ut,me,0,Qt,Et,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),U(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,mt,At.__webglTexture,0,F(y)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,mt,At.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(b,y,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer){let nt=y.depthTexture,mt=nt&&nt.isDepthTexture?nt.type:null,ut=v(y.stencilBuffer,mt),Qt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=F(y);U(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,ut,y.width,y.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,ut,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ut,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Qt,s.RENDERBUFFER,b)}else{let nt=y.textures;for(let mt=0;mt<nt.length;mt++){let ut=nt[mt],Qt=r.convert(ut.format,ut.colorSpace),Et=r.convert(ut.type),Jt=M(ut.internalFormat,Qt,Et,ut.colorSpace),re=F(y);Y&&U(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,Jt,y.width,y.height):U(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,Jt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Jt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(y.depthTexture);nt.__renderTarget=y,(!nt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);let mt=nt.__webglTexture,ut=F(y);if(y.depthTexture.format===Lr)U(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0);else if(y.depthTexture.format===Zr)U(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function dt(b){let y=n.get(b),Y=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){let nt=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){let mt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",mt)};nt.addEventListener("dispose",mt),y.__depthDisposeCallback=mt}y.__boundDepthTexture=nt}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let nt=b.texture.mipmaps;nt&&nt.length>0?Vt(y.__webglFramebuffer[0],b):Vt(y.__webglFramebuffer,b)}else if(Y){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=s.createRenderbuffer(),Ht(y.__webglDepthbuffer[nt],b,!1);else{let mt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,ut)}}else{let nt=b.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ht(y.__webglDepthbuffer,b,!1);else{let mt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,ut)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(b,y,Y){let nt=n.get(b);y!==void 0&&Dt(nt.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&dt(b)}function D(b){let y=b.texture,Y=n.get(b),nt=n.get(y);b.addEventListener("dispose",L);let mt=b.textures,ut=b.isWebGLCubeRenderTarget===!0,Qt=mt.length>1;if(Qt||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=y.version,o.memory.textures++),ut){Y.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[Et]=[];for(let Jt=0;Jt<y.mipmaps.length;Jt++)Y.__webglFramebuffer[Et][Jt]=s.createFramebuffer()}else Y.__webglFramebuffer[Et]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Et=0;Et<y.mipmaps.length;Et++)Y.__webglFramebuffer[Et]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Qt)for(let Et=0,Jt=mt.length;Et<Jt;Et++){let re=n.get(mt[Et]);re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture(),o.memory.textures++)}if(b.samples>0&&U(b)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Et=0;Et<mt.length;Et++){let Jt=mt[Et];Y.__webglColorRenderbuffer[Et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Et]);let re=r.convert(Jt.format,Jt.colorSpace),At=r.convert(Jt.type),Ut=M(Jt.internalFormat,re,At,Jt.colorSpace,b.isXRRenderTarget===!0),me=F(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,me,Ut,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Et])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Ht(Y.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,y);for(let Et=0;Et<6;Et++)if(y.mipmaps&&y.mipmaps.length>0)for(let Jt=0;Jt<y.mipmaps.length;Jt++)Dt(Y.__webglFramebuffer[Et][Jt],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt);else Dt(Y.__webglFramebuffer[Et],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Qt){for(let Et=0,Jt=mt.length;Et<Jt;Et++){let re=mt[Et],At=n.get(re),Ut=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ut=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Ut,At.__webglTexture),Wt(Ut,re),Dt(Y.__webglFramebuffer,b,re,s.COLOR_ATTACHMENT0+Et,Ut,0),m(re)&&p(Ut)}e.unbindTexture()}else{let Et=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Et=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Et,nt.__webglTexture),Wt(Et,y),y.mipmaps&&y.mipmaps.length>0)for(let Jt=0;Jt<y.mipmaps.length;Jt++)Dt(Y.__webglFramebuffer[Jt],b,y,s.COLOR_ATTACHMENT0,Et,Jt);else Dt(Y.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,Et,0);m(y)&&p(Et),e.unbindTexture()}b.depthBuffer&&dt(b)}function ct(b){let y=b.textures;for(let Y=0,nt=y.length;Y<nt;Y++){let mt=y[Y];if(m(mt)){let ut=_(b),Qt=n.get(mt).__webglTexture;e.bindTexture(ut,Qt),p(ut),e.unbindTexture()}}}let ht=[],lt=[];function tt(b){if(b.samples>0){if(U(b)===!1){let y=b.textures,Y=b.width,nt=b.height,mt=s.COLOR_BUFFER_BIT,ut=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Qt=n.get(b),Et=y.length>1;if(Et)for(let re=0;re<y.length;re++)e.bindFramebuffer(s.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Qt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);let Jt=b.texture.mipmaps;Jt&&Jt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let re=0;re<y.length;re++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),Et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Qt.__webglColorRenderbuffer[re]);let At=n.get(y[re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,Y,nt,0,0,Y,nt,mt,s.NEAREST),c===!0&&(ht.length=0,lt.length=0,ht.push(s.COLOR_ATTACHMENT0+re),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ht.push(ut),lt.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Et)for(let re=0;re<y.length;re++){e.bindFramebuffer(s.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,Qt.__webglColorRenderbuffer[re]);let At=n.get(y[re]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Qt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,At,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function F(b){return Math.min(i.maxSamples,b.samples)}function U(b){let y=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function V(b){let y=o.render.frame;l.get(b)!==y&&(l.set(b,y),b.update())}function q(b,y){let Y=b.colorSpace,nt=b.format,mt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Y!==Xs&&Y!==as&&(nn.getTransfer(Y)===hn?(nt!==bi||mt!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),y}function K(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=rt,this.setTextureCube=et,this.rebindTextures=Ot,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=U}function yy(s,t){function e(n,i=as){let r,o=nn.getTransfer(i);if(n===Di)return s.UNSIGNED_BYTE;if(n===Gl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===iu)return s.BYTE;if(n===su)return s.SHORT;if(n===qr)return s.UNSIGNED_SHORT;if(n===Hl)return s.INT;if(n===Rs)return s.UNSIGNED_INT;if(n===Li)return s.FLOAT;if(n===kn)return s.HALF_FLOAT;if(n===au)return s.ALPHA;if(n===lu)return s.RGB;if(n===bi)return s.RGBA;if(n===Lr)return s.DEPTH_COMPONENT;if(n===Zr)return s.DEPTH_STENCIL;if(n===Wl)return s.RED;if(n===Xl)return s.RED_INTEGER;if(n===cu)return s.RG;if(n===ql)return s.RG_INTEGER;if(n===Yl)return s.RGBA_INTEGER;if(n===oa||n===aa||n===la||n===ca)if(o===hn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zl||n===$l||n===Kl||n===Jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jl||n===Ql||n===tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jl||n===Ql)return o===hn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ec)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return o===hn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mc)return o===hn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===yc||n===_c||n===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var _y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
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

}`,Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Bo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:_y,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Du=class extends es{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,f=null,d=null,u=null,g=null,x=typeof XRWebGLBinding<"u",m=new Iu,p={},_=e.getContextAttributes(),M=null,v=null,E=[],A=[],L=new St,I=null,S=new Bn;S.viewport=new Ke;let w=new Bn;w.viewport=new Ke;let N=[S,w],H=new Cl,B=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let wt=E[pt];return wt===void 0&&(wt=new Or,E[pt]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(pt){let wt=E[pt];return wt===void 0&&(wt=new Or,E[pt]=wt),wt.getGripSpace()},this.getHand=function(pt){let wt=E[pt];return wt===void 0&&(wt=new Or,E[pt]=wt),wt.getHandSpace()};function k(pt){let wt=A.indexOf(pt.inputSource);if(wt===-1)return;let Dt=E[wt];Dt!==void 0&&(Dt.update(pt.inputSource,pt.frame,h||o),Dt.dispatchEvent({type:pt.type,data:pt.inputSource}))}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",rt);for(let pt=0;pt<E.length;pt++){let wt=A[pt];wt!==null&&(A[pt]=null,E[pt].disconnect(wt))}B=null,O=null,m.reset();for(let pt in p)delete p[pt];t.setRenderTarget(M),u=null,d=null,f=null,i=null,v=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){r=pt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){a=pt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(pt){h=pt},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(pt){if(i=pt,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",rt),_.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Ht=null,Vt=null;_.depth&&(Vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=_.stencil?Zr:Lr,Ht=_.stencil?Yr:Rs);let dt={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(dt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new xn(d.textureWidth,d.textureHeight,{format:bi,type:Di,depthTexture:new is(d.textureWidth,d.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Dt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,Dt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new xn(u.framebufferWidth,u.framebufferHeight,{format:bi,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await i.requestReferenceSpace(a),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(pt){for(let wt=0;wt<pt.removed.length;wt++){let Dt=pt.removed[wt],Ht=A.indexOf(Dt);Ht>=0&&(A[Ht]=null,E[Ht].disconnect(Dt))}for(let wt=0;wt<pt.added.length;wt++){let Dt=pt.added[wt],Ht=A.indexOf(Dt);if(Ht===-1){for(let dt=0;dt<E.length;dt++)if(dt>=A.length){A.push(Dt),Ht=dt;break}else if(A[dt]===null){A[dt]=Dt,Ht=dt;break}if(Ht===-1)break}let Vt=E[Ht];Vt&&Vt.connect(Dt)}}let et=new P,z=new P;function Tt(pt,wt,Dt){et.setFromMatrixPosition(wt.matrixWorld),z.setFromMatrixPosition(Dt.matrixWorld);let Ht=et.distanceTo(z),Vt=wt.projectionMatrix.elements,dt=Dt.projectionMatrix.elements,Ot=Vt[14]/(Vt[10]-1),D=Vt[14]/(Vt[10]+1),ct=(Vt[9]+1)/Vt[5],ht=(Vt[9]-1)/Vt[5],lt=(Vt[8]-1)/Vt[0],tt=(dt[8]+1)/dt[0],F=Ot*lt,U=Ot*tt,V=Ht/(-lt+tt),q=V*-lt;if(wt.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(q),pt.translateZ(V),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),Vt[10]===-1)pt.projectionMatrix.copy(wt.projectionMatrix),pt.projectionMatrixInverse.copy(wt.projectionMatrixInverse);else{let K=Ot+V,b=D+V,y=F-q,Y=U+(Ht-q),nt=ct*D/b*K,mt=ht*D/b*K;pt.projectionMatrix.makePerspective(y,Y,nt,mt,K,b),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function Rt(pt,wt){wt===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(wt.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(i===null)return;let wt=pt.near,Dt=pt.far;m.texture!==null&&(m.depthNear>0&&(wt=m.depthNear),m.depthFar>0&&(Dt=m.depthFar)),H.near=w.near=S.near=wt,H.far=w.far=S.far=Dt,(B!==H.near||O!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),B=H.near,O=H.far),H.layers.mask=pt.layers.mask|6,S.layers.mask=H.layers.mask&3,w.layers.mask=H.layers.mask&5;let Ht=pt.parent,Vt=H.cameras;Rt(H,Ht);for(let dt=0;dt<Vt.length;dt++)Rt(Vt[dt],Ht);Vt.length===2?Tt(H,S,w):H.projectionMatrix.copy(S.projectionMatrix),Wt(pt,H,Ht)};function Wt(pt,wt,Dt){Dt===null?pt.matrix.copy(wt.matrixWorld):(pt.matrix.copy(Dt.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(wt.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(wt.projectionMatrix),pt.projectionMatrixInverse.copy(wt.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=qs*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(pt){c=pt,d!==null&&(d.fixedFoveation=pt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=pt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(pt){return p[pt]};let Kt=null;function Nt(pt,wt){if(l=wt.getViewerPose(h||o),g=wt,l!==null){let Dt=l.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let Ht=!1;Dt.length!==H.cameras.length&&(H.cameras.length=0,Ht=!0);for(let D=0;D<Dt.length;D++){let ct=Dt[D],ht=null;if(u!==null)ht=u.getViewport(ct);else{let tt=f.getViewSubImage(d,ct);ht=tt.viewport,D===0&&(t.setRenderTargetTextures(v,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(v))}let lt=N[D];lt===void 0&&(lt=new Bn,lt.layers.enable(D),lt.viewport=new Ke,N[D]=lt),lt.matrix.fromArray(ct.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ct.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ht.x,ht.y,ht.width,ht.height),D===0&&(H.matrix.copy(lt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ht===!0&&H.cameras.push(lt)}let Vt=i.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let D=f.getDepthInformation(Dt[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(Vt&&Vt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let D=0;D<Dt.length;D++){let ct=Dt[D].camera;if(ct){let ht=p[ct];ht||(ht=new Bo,p[ct]=ht);let lt=f.getCameraImage(ct);ht.sourceTexture=lt}}}}for(let Dt=0;Dt<E.length;Dt++){let Ht=A[Dt],Vt=E[Dt];Ht!==null&&Vt!==void 0&&Vt.update(Ht,wt,h||o)}Kt&&Kt(pt,wt),wt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:wt}),g=null}let ee=new fp;ee.setAnimationLoop(Nt),this.setAnimationLoop=function(pt){Kt=pt},this.dispose=function(){}}},ir=new Ln,by=new ne;function wy(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,ir.copy(v),ir.x*=-1,ir.y*=-1,ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),m.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(ir)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ey(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){let v=M.program;n.uniformBlockBinding(_,v)}function h(_,M){let v=i[_.id];v===void 0&&(g(_),v=l(_),i[_.id]=v,_.addEventListener("dispose",m));let E=M.program;n.updateUBOMapping(_,E);let A=t.render.frame;r[_.id]!==A&&(d(_),r[_.id]=A)}function l(_){let M=f();_.__bindingPointIndex=M;let v=s.createBuffer(),E=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let M=i[_.id],v=_.uniforms,E=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,L=v.length;A<L;A++){let I=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,w=I.length;S<w;S++){let N=I[S];if(u(N,A,S,E)===!0){let H=N.__offset,B=Array.isArray(N.value)?N.value:[N.value],O=0;for(let k=0;k<B.length;k++){let G=B[k],rt=x(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,H+O,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,O),O+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(_,M,v,E){let A=_.value,L=M+"_"+v;if(E[L]===void 0)return typeof A=="number"||typeof A=="boolean"?E[L]=A:E[L]=A.clone(),!0;{let I=E[L];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return E[L]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(_){let M=_.uniforms,v=0,E=16;for(let L=0,I=M.length;L<I;L++){let S=Array.isArray(M[L])?M[L]:[M[L]];for(let w=0,N=S.length;w<N;w++){let H=S[w],B=Array.isArray(H.value)?H.value:[H.value];for(let O=0,k=B.length;O<k;O++){let G=B[O],rt=x(G),et=v%E,z=et%rt.boundary,Tt=et+z;v+=z,Tt!==0&&E-Tt<rt.storage&&(v+=E-Tt),H.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=rt.storage}}}let A=v%E;return A>0&&(v+=E-A),_.__size=v,_.__cache={},this}function x(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){let M=_.target;M.removeEventListener("dispose",m);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:h,dispose:p}}var Tc=class{constructor(t={}){let{canvas:e=zd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,E=!1;this._outputColorSpace=$n;let A=0,L=0,I=null,S=-1,w=null,N=new Ke,H=new Ke,B=null,O=new kt(0),k=0,G=e.width,rt=e.height,et=1,z=null,Tt=null,Rt=new Ke(0,0,G,rt),Wt=new Ke(0,0,G,rt),Kt=!1,Nt=new Es,ee=!1,pt=!1,wt=new ne,Dt=new P,Ht=new Ke,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function Ot(){return I===null?et:1}let D=n;function ct(T,$){return e.getContext(T,$)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),D===null){let $="webgl2";if(D=ct($,T),D===null)throw ct($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ht,lt,tt,F,U,V,q,K,b,y,Y,nt,mt,ut,Qt,Et,Jt,re,At,Ut,me,de,Xt,pe;function Z(){ht=new Gv(D),ht.init(),de=new yy(D,ht),lt=new zv(D,ht,t,de),tt=new xy(D,ht),lt.reversedDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),F=new Xv(D),U=new sy,V=new vy(D,ht,tt,U,lt,de,F),q=new Nv(v),K=new Hv(v),b=new Jm(D),Xt=new Lv(D,b),y=new Vv(D,b,F,Xt),Y=new Yv(D,y,b,F),At=new qv(D,lt,V),Et=new Uv(U),nt=new iy(v,q,K,ht,lt,Xt,Et),mt=new wy(v,U),ut=new oy,Qt=new fy(ht),re=new Dv(v,q,K,tt,Y,u,c),Jt=new my(v,Y,lt),pe=new Ey(D,F,lt,tt),Ut=new Fv(D,ht,F),me=new Wv(D,ht,F),F.programs=nt.programs,v.capabilities=lt,v.extensions=ht,v.properties=U,v.renderLists=ut,v.shadowMap=Jt,v.state=tt,v.info=F}Z();let It=new Du(v,D);this.xr=It,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(T){T!==void 0&&(et=T,this.setSize(G,rt,!1))},this.getSize=function(T){return T.set(G,rt)},this.setSize=function(T,$,X=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,rt=$,e.width=Math.floor(T*et),e.height=Math.floor($*et),X===!0&&(e.style.width=T+"px",e.style.height=$+"px"),this.setViewport(0,0,T,$)},this.getDrawingBufferSize=function(T){return T.set(G*et,rt*et).floor()},this.setDrawingBufferSize=function(T,$,X){G=T,rt=$,et=X,e.width=Math.floor(T*X),e.height=Math.floor($*X),this.setViewport(0,0,T,$)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(Rt)},this.setViewport=function(T,$,X,it){T.isVector4?Rt.set(T.x,T.y,T.z,T.w):Rt.set(T,$,X,it),tt.viewport(N.copy(Rt).multiplyScalar(et).round())},this.getScissor=function(T){return T.copy(Wt)},this.setScissor=function(T,$,X,it){T.isVector4?Wt.set(T.x,T.y,T.z,T.w):Wt.set(T,$,X,it),tt.scissor(H.copy(Wt).multiplyScalar(et).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(T){tt.setScissorTest(Kt=T)},this.setOpaqueSort=function(T){z=T},this.setTransparentSort=function(T){Tt=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(T=!0,$=!0,X=!0){let it=0;if(T){let Q=!1;if(I!==null){let Pt=I.texture.format;Q=Pt===Yl||Pt===ql||Pt===Xl}if(Q){let Pt=I.texture.type,jt=Pt===Di||Pt===Rs||Pt===qr||Pt===Yr||Pt===Gl||Pt===Vl,ge=re.getClearColor(),he=re.getClearAlpha(),Ee=ge.r,Ae=ge.g,_e=ge.b;jt?(g[0]=Ee,g[1]=Ae,g[2]=_e,g[3]=he,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Ee,x[1]=Ae,x[2]=_e,x[3]=he,D.clearBufferiv(D.COLOR,0,x))}else it|=D.COLOR_BUFFER_BIT}$&&(it|=D.DEPTH_BUFFER_BIT),X&&(it|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),re.dispose(),ut.dispose(),Qt.dispose(),U.dispose(),q.dispose(),K.dispose(),Y.dispose(),Xt.dispose(),pe.dispose(),nt.dispose(),It.dispose(),It.removeEventListener("sessionstart",W),It.removeEventListener("sessionend",st),J.stop()};function Gt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=F.autoReset,$=Jt.enabled,X=Jt.autoUpdate,it=Jt.needsUpdate,Q=Jt.type;Z(),F.autoReset=T,Jt.enabled=$,Jt.autoUpdate=X,Jt.needsUpdate=it,Jt.type=Q}function Ct(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function vt(T){let $=T.target;$.removeEventListener("dispose",vt),ue($)}function ue(T){Se(T),U.remove(T)}function Se(T){let $=U.get(T).programs;$!==void 0&&($.forEach(function(X){nt.releaseProgram(X)}),T.isShaderMaterial&&nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,$,X,it,Q,Pt){$===null&&($=Vt);let jt=Q.isMesh&&Q.matrixWorld.determinant()<0,ge=Bt(T,$,X,it,Q);tt.setMaterial(it,jt);let he=X.index,Ee=1;if(it.wireframe===!0){if(he=y.getWireframeAttribute(X),he===void 0)return;Ee=2}let Ae=X.drawRange,_e=X.attributes.position,ke=Ae.start*Ee,R=(Ae.start+Ae.count)*Ee;Pt!==null&&(ke=Math.max(ke,Pt.start*Ee),R=Math.min(R,(Pt.start+Pt.count)*Ee)),he!==null?(ke=Math.max(ke,0),R=Math.min(R,he.count)):_e!=null&&(ke=Math.max(ke,0),R=Math.min(R,_e.count));let xt=R-ke;if(xt<0||xt===1/0)return;Xt.setup(Q,it,ge,X,he);let qt,le=Ut;if(he!==null&&(qt=b.get(he),le=me,le.setIndex(qt)),Q.isMesh)it.wireframe===!0?(tt.setLineWidth(it.wireframeLinewidth*Ot()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(Q.isLine){let Yt=it.linewidth;Yt===void 0&&(Yt=1),tt.setLineWidth(Yt*Ot()),Q.isLineSegments?le.setMode(D.LINES):Q.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else Q.isPoints?le.setMode(D.POINTS):Q.isSprite&&le.setMode(D.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))le.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Yt=Q._multiDrawStarts,se=Q._multiDrawCounts,ve=Q._multiDrawCount,Ve=he?b.get(he).bytesPerElement:1,Je=U.get(it).currentProgram.getUniforms();for(let Re=0;Re<ve;Re++)Je.setValue(D,"_gl_DrawID",Re),le.render(Yt[Re]/Ve,se[Re])}else if(Q.isInstancedMesh)le.renderInstances(ke,xt,Q.count);else if(X.isInstancedBufferGeometry){let Yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,se=Math.min(X.instanceCount,Yt);le.renderInstances(ke,xt,se)}else le.render(ke,xt)};function Qe(T,$,X){T.transparent===!0&&T.side===Sn&&T.forceSinglePass===!1?(T.side=Kn,T.needsUpdate=!0,gt(T,$,X),T.side=Qi,T.needsUpdate=!0,gt(T,$,X),T.side=Sn):gt(T,$,X)}this.compile=function(T,$,X=null){X===null&&(X=T),p=Qt.get(X),p.init($),M.push(p),X.traverseVisible(function(Q){Q.isLight&&Q.layers.test($.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),T!==X&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test($.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights();let it=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Pt=Q.material;if(Pt)if(Array.isArray(Pt))for(let jt=0;jt<Pt.length;jt++){let ge=Pt[jt];Qe(ge,X,Q),it.add(ge)}else Qe(Pt,X,Q),it.add(Pt)}),p=M.pop(),it},this.compileAsync=function(T,$,X=null){let it=this.compile(T,$,X);return new Promise(Q=>{function Pt(){if(it.forEach(function(jt){U.get(jt).currentProgram.isReady()&&it.delete(jt)}),it.size===0){Q(T);return}setTimeout(Pt,10)}ht.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let qe=null;function C(T){qe&&qe(T)}function W(){J.stop()}function st(){J.start()}let J=new fp;J.setAnimationLoop(C),typeof self<"u"&&J.setContext(self),this.setAnimationLoop=function(T){qe=T,It.setAnimationLoop(T),T===null?J.stop():J.start()},It.addEventListener("sessionstart",W),It.addEventListener("sessionend",st),this.render=function(T,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera($),$=It.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,$,I),p=Qt.get(T,M.length),p.init($),M.push(p),wt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Nt.setFromProjectionMatrix(wt,Ci,$.reversedDepth),pt=this.localClippingEnabled,ee=Et.init(this.clippingPlanes,pt),m=ut.get(T,_.length),m.init(),_.push(m),It.enabled===!0&&It.isPresenting===!0){let Pt=v.xr.getDepthSensingMesh();Pt!==null&&j(Pt,$,-1/0,v.sortObjects)}j(T,$,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(z,Tt),dt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,dt&&re.addToRenderList(m,T),this.info.render.frame++,ee===!0&&Et.beginShadows();let X=p.state.shadowsArray;Jt.render(X,T,$),ee===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();let it=m.opaque,Q=m.transmissive;if(p.setupLights(),$.isArrayCamera){let Pt=$.cameras;if(Q.length>0)for(let jt=0,ge=Pt.length;jt<ge;jt++){let he=Pt[jt];_t(it,Q,T,he)}dt&&re.render(T);for(let jt=0,ge=Pt.length;jt<ge;jt++){let he=Pt[jt];ot(m,T,he,he.viewport)}}else Q.length>0&&_t(it,Q,T,$),dt&&re.render(T),ot(m,T,$);I!==null&&L===0&&(V.updateMultisampleRenderTarget(I),V.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(v,T,$),Xt.resetDefaultState(),S=-1,w=null,M.pop(),M.length>0?(p=M[M.length-1],ee===!0&&Et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function j(T,$,X,it){if(T.visible===!1)return;if(T.layers.test($.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update($);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Nt.intersectsSprite(T)){it&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(wt);let jt=Y.update(T),ge=T.material;ge.visible&&m.push(T,jt,ge,X,Ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Nt.intersectsObject(T))){let jt=Y.update(T),ge=T.material;if(it&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),Ht.copy(jt.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(wt)),Array.isArray(ge)){let he=jt.groups;for(let Ee=0,Ae=he.length;Ee<Ae;Ee++){let _e=he[Ee],ke=ge[_e.materialIndex];ke&&ke.visible&&m.push(T,jt,ke,X,Ht.z,_e)}}else ge.visible&&m.push(T,jt,ge,X,Ht.z,null)}}let Pt=T.children;for(let jt=0,ge=Pt.length;jt<ge;jt++)j(Pt[jt],$,X,it)}function ot(T,$,X,it){let Q=T.opaque,Pt=T.transmissive,jt=T.transparent;p.setupLightsView(X),ee===!0&&Et.setGlobalState(v.clippingPlanes,X),it&&tt.viewport(N.copy(it)),Q.length>0&&at(Q,$,X),Pt.length>0&&at(Pt,$,X),jt.length>0&&at(jt,$,X),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function _t(T,$,X,it){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[it.id]===void 0&&(p.state.transmissionRenderTarget[it.id]=new xn(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?kn:Di,minFilter:As,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nn.workingColorSpace}));let Pt=p.state.transmissionRenderTarget[it.id],jt=it.viewport||N;Pt.setSize(jt.z*v.transmissionResolutionScale,jt.w*v.transmissionResolutionScale);let ge=v.getRenderTarget(),he=v.getActiveCubeFace(),Ee=v.getActiveMipmapLevel();v.setRenderTarget(Pt),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),dt&&re.render(X);let Ae=v.toneMapping;v.toneMapping=Ii;let _e=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),p.setupLightsView(it),ee===!0&&Et.setGlobalState(v.clippingPlanes,it),at(T,X,it),V.updateMultisampleRenderTarget(Pt),V.updateRenderTargetMipmap(Pt),ht.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let R=0,xt=$.length;R<xt;R++){let qt=$[R],le=qt.object,Yt=qt.geometry,se=qt.material,ve=qt.group;if(se.side===Sn&&le.layers.test(it.layers)){let Ve=se.side;se.side=Kn,se.needsUpdate=!0,yt(le,X,it,Yt,se,ve),se.side=Ve,se.needsUpdate=!0,ke=!0}}ke===!0&&(V.updateMultisampleRenderTarget(Pt),V.updateRenderTargetMipmap(Pt))}v.setRenderTarget(ge,he,Ee),v.setClearColor(O,k),_e!==void 0&&(it.viewport=_e),v.toneMapping=Ae}function at(T,$,X){let it=$.isScene===!0?$.overrideMaterial:null;for(let Q=0,Pt=T.length;Q<Pt;Q++){let jt=T[Q],ge=jt.object,he=jt.geometry,Ee=jt.group,Ae=jt.material;Ae.allowOverride===!0&&it!==null&&(Ae=it),ge.layers.test(X.layers)&&yt(ge,$,X,he,Ae,Ee)}}function yt(T,$,X,it,Q,Pt){T.onBeforeRender(v,$,X,it,Q,Pt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(v,$,X,it,T,Pt),Q.transparent===!0&&Q.side===Sn&&Q.forceSinglePass===!1?(Q.side=Kn,Q.needsUpdate=!0,v.renderBufferDirect(X,$,it,Q,T,Pt),Q.side=Qi,Q.needsUpdate=!0,v.renderBufferDirect(X,$,it,Q,T,Pt),Q.side=Sn):v.renderBufferDirect(X,$,it,Q,T,Pt),T.onAfterRender(v,$,X,it,Q,Pt)}function gt(T,$,X){$.isScene!==!0&&($=Vt);let it=U.get(T),Q=p.state.lights,Pt=p.state.shadowsArray,jt=Q.state.version,ge=nt.getParameters(T,Q.state,Pt,$,X),he=nt.getProgramCacheKey(ge),Ee=it.programs;it.environment=T.isMeshStandardMaterial?$.environment:null,it.fog=$.fog,it.envMap=(T.isMeshStandardMaterial?K:q).get(T.envMap||it.environment),it.envMapRotation=it.environment!==null&&T.envMap===null?$.environmentRotation:T.envMapRotation,Ee===void 0&&(T.addEventListener("dispose",vt),Ee=new Map,it.programs=Ee);let Ae=Ee.get(he);if(Ae!==void 0){if(it.currentProgram===Ae&&it.lightsStateVersion===jt)return Ft(T,ge),Ae}else ge.uniforms=nt.getUniforms(T),T.onBeforeCompile(ge,v),Ae=nt.acquireProgram(ge,he),Ee.set(he,Ae),it.uniforms=ge.uniforms;let _e=it.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(_e.clippingPlanes=Et.uniform),Ft(T,ge),it.needsLights=Te(T),it.lightsStateVersion=jt,it.needsLights&&(_e.ambientLightColor.value=Q.state.ambient,_e.lightProbe.value=Q.state.probe,_e.directionalLights.value=Q.state.directional,_e.directionalLightShadows.value=Q.state.directionalShadow,_e.spotLights.value=Q.state.spot,_e.spotLightShadows.value=Q.state.spotShadow,_e.rectAreaLights.value=Q.state.rectArea,_e.ltc_1.value=Q.state.rectAreaLTC1,_e.ltc_2.value=Q.state.rectAreaLTC2,_e.pointLights.value=Q.state.point,_e.pointLightShadows.value=Q.state.pointShadow,_e.hemisphereLights.value=Q.state.hemi,_e.directionalShadowMap.value=Q.state.directionalShadowMap,_e.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,_e.spotShadowMap.value=Q.state.spotShadowMap,_e.spotLightMatrix.value=Q.state.spotLightMatrix,_e.spotLightMap.value=Q.state.spotLightMap,_e.pointShadowMap.value=Q.state.pointShadowMap,_e.pointShadowMatrix.value=Q.state.pointShadowMatrix),it.currentProgram=Ae,it.uniformsList=null,Ae}function ft(T){if(T.uniformsList===null){let $=T.currentProgram.getUniforms();T.uniformsList=Jr.seqWithValue($.seq,T.uniforms)}return T.uniformsList}function Ft(T,$){let X=U.get(T);X.outputColorSpace=$.outputColorSpace,X.batching=$.batching,X.batchingColor=$.batchingColor,X.instancing=$.instancing,X.instancingColor=$.instancingColor,X.instancingMorph=$.instancingMorph,X.skinning=$.skinning,X.morphTargets=$.morphTargets,X.morphNormals=$.morphNormals,X.morphColors=$.morphColors,X.morphTargetsCount=$.morphTargetsCount,X.numClippingPlanes=$.numClippingPlanes,X.numIntersection=$.numClipIntersection,X.vertexAlphas=$.vertexAlphas,X.vertexTangents=$.vertexTangents,X.toneMapping=$.toneMapping}function Bt(T,$,X,it,Q){$.isScene!==!0&&($=Vt),V.resetTextureUnits();let Pt=$.fog,jt=it.isMeshStandardMaterial?$.environment:null,ge=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Xs,he=(it.isMeshStandardMaterial?K:q).get(it.envMap||jt),Ee=it.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ae=!!X.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),_e=!!X.morphAttributes.position,ke=!!X.morphAttributes.normal,R=!!X.morphAttributes.color,xt=Ii;it.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xt=v.toneMapping);let qt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,le=qt!==void 0?qt.length:0,Yt=U.get(it),se=p.state.lights;if(ee===!0&&(pt===!0||T!==w)){let tn=T===w&&it.id===S;Et.setState(it,T,tn)}let ve=!1;it.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==se.state.version||Yt.outputColorSpace!==ge||Q.isBatchedMesh&&Yt.batching===!1||!Q.isBatchedMesh&&Yt.batching===!0||Q.isBatchedMesh&&Yt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Yt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Yt.instancing===!1||!Q.isInstancedMesh&&Yt.instancing===!0||Q.isSkinnedMesh&&Yt.skinning===!1||!Q.isSkinnedMesh&&Yt.skinning===!0||Q.isInstancedMesh&&Yt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Yt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Yt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Yt.instancingMorph===!1&&Q.morphTexture!==null||Yt.envMap!==he||it.fog===!0&&Yt.fog!==Pt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Et.numPlanes||Yt.numIntersection!==Et.numIntersection)||Yt.vertexAlphas!==Ee||Yt.vertexTangents!==Ae||Yt.morphTargets!==_e||Yt.morphNormals!==ke||Yt.morphColors!==R||Yt.toneMapping!==xt||Yt.morphTargetsCount!==le)&&(ve=!0):(ve=!0,Yt.__version=it.version);let Ve=Yt.currentProgram;ve===!0&&(Ve=gt(it,$,Q));let Je=!1,Re=!1,In=!1,$e=Ve.getUniforms(),Dn=Yt.uniforms;if(tt.useProgram(Ve.program)&&(Je=!0,Re=!0,In=!0),it.id!==S&&(S=it.id,Re=!0),Je||w!==T){tt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),$e.setValue(D,"projectionMatrix",T.projectionMatrix),$e.setValue(D,"viewMatrix",T.matrixWorldInverse);let cn=$e.map.cameraPosition;cn!==void 0&&cn.setValue(D,Dt.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&$e.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&$e.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Re=!0,In=!0)}if(Q.isSkinnedMesh){$e.setOptional(D,Q,"bindMatrix"),$e.setOptional(D,Q,"bindMatrixInverse");let tn=Q.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),$e.setValue(D,"boneTexture",tn.boneTexture,V))}Q.isBatchedMesh&&($e.setOptional(D,Q,"batchingTexture"),$e.setValue(D,"batchingTexture",Q._matricesTexture,V),$e.setOptional(D,Q,"batchingIdTexture"),$e.setValue(D,"batchingIdTexture",Q._indirectTexture,V),$e.setOptional(D,Q,"batchingColorTexture"),Q._colorsTexture!==null&&$e.setValue(D,"batchingColorTexture",Q._colorsTexture,V));let Zn=X.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&At.update(Q,X,Ve),(Re||Yt.receiveShadow!==Q.receiveShadow)&&(Yt.receiveShadow=Q.receiveShadow,$e.setValue(D,"receiveShadow",Q.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Dn.envMap.value=he,Dn.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&$.environment!==null&&(Dn.envMapIntensity.value=$.environmentIntensity),Re&&($e.setValue(D,"toneMappingExposure",v.toneMappingExposure),Yt.needsLights&&ie(Dn,In),Pt&&it.fog===!0&&mt.refreshFogUniforms(Dn,Pt),mt.refreshMaterialUniforms(Dn,it,et,rt,p.state.transmissionRenderTarget[T.id]),Jr.upload(D,ft(Yt),Dn,V)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Jr.upload(D,ft(Yt),Dn,V),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&$e.setValue(D,"center",Q.center),$e.setValue(D,"modelViewMatrix",Q.modelViewMatrix),$e.setValue(D,"normalMatrix",Q.normalMatrix),$e.setValue(D,"modelMatrix",Q.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let tn=it.uniformsGroups;for(let cn=0,qi=tn.length;cn<qi;cn++){let ki=tn[cn];pe.update(ki,Ve),pe.bind(ki,Ve)}}return Ve}function ie(T,$){T.ambientLightColor.needsUpdate=$,T.lightProbe.needsUpdate=$,T.directionalLights.needsUpdate=$,T.directionalLightShadows.needsUpdate=$,T.pointLights.needsUpdate=$,T.pointLightShadows.needsUpdate=$,T.spotLights.needsUpdate=$,T.spotLightShadows.needsUpdate=$,T.rectAreaLights.needsUpdate=$,T.hemisphereLights.needsUpdate=$}function Te(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,$,X){let it=U.get(T);it.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),U.get(T.texture).__webglTexture=$,U.get(T.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:X,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,$){let X=U.get(T);X.__webglFramebuffer=$,X.__useDefaultFramebuffer=$===void 0};let ae=D.createFramebuffer();this.setRenderTarget=function(T,$=0,X=0){I=T,A=$,L=X;let it=!0,Q=null,Pt=!1,jt=!1;if(T){let he=U.get(T);if(he.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(D.FRAMEBUFFER,null),it=!1;else if(he.__webglFramebuffer===void 0)V.setupRenderTarget(T);else if(he.__hasExternalTextures)V.rebindTextures(T,U.get(T.texture).__webglTexture,U.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let _e=T.depthTexture;if(he.__boundDepthTexture!==_e){if(_e!==null&&U.has(_e)&&(T.width!==_e.image.width||T.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(T)}}let Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(jt=!0);let Ae=U.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ae[$])?Q=Ae[$][X]:Q=Ae[$],Pt=!0):T.samples>0&&V.useMultisampledRTT(T)===!1?Q=U.get(T).__webglMultisampledFramebuffer:Array.isArray(Ae)?Q=Ae[X]:Q=Ae,N.copy(T.viewport),H.copy(T.scissor),B=T.scissorTest}else N.copy(Rt).multiplyScalar(et).floor(),H.copy(Wt).multiplyScalar(et).floor(),B=Kt;if(X!==0&&(Q=ae),tt.bindFramebuffer(D.FRAMEBUFFER,Q)&&it&&tt.drawBuffers(T,Q),tt.viewport(N),tt.scissor(H),tt.setScissorTest(B),Pt){let he=U.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+$,he.__webglTexture,X)}else if(jt){let he=$;for(let Ee=0;Ee<T.textures.length;Ee++){let Ae=U.get(T.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,X,he)}}else if(T!==null&&X!==0){let he=U.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,X)}S=-1},this.readRenderTargetPixels=function(T,$,X,it,Q,Pt,jt,ge=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&jt!==void 0&&(he=he[jt]),he){tt.bindFramebuffer(D.FRAMEBUFFER,he);try{let Ee=T.textures[ge],Ae=Ee.format,_e=Ee.type;if(!lt.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(_e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=T.width-it&&X>=0&&X<=T.height-Q&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),D.readPixels($,X,it,Q,de.convert(Ae),de.convert(_e),Pt))}finally{let Ee=I!==null?U.get(I).__webglFramebuffer:null;tt.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,$,X,it,Q,Pt,jt,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=U.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&jt!==void 0&&(he=he[jt]),he)if($>=0&&$<=T.width-it&&X>=0&&X<=T.height-Q){tt.bindFramebuffer(D.FRAMEBUFFER,he);let Ee=T.textures[ge],Ae=Ee.format,_e=Ee.type;if(!lt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.bufferData(D.PIXEL_PACK_BUFFER,Pt.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),D.readPixels($,X,it,Q,de.convert(Ae),de.convert(_e),0);let R=I!==null?U.get(I).__webglFramebuffer:null;tt.bindFramebuffer(D.FRAMEBUFFER,R);let xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ud(D,xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Pt),D.deleteBuffer(ke),D.deleteSync(xt),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,$=null,X=0){let it=Math.pow(2,-X),Q=Math.floor(T.image.width*it),Pt=Math.floor(T.image.height*it),jt=$!==null?$.x:0,ge=$!==null?$.y:0;V.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,jt,ge,Q,Pt),tt.unbindTexture()};let Be=D.createFramebuffer(),zt=D.createFramebuffer();this.copyTextureToTexture=function(T,$,X=null,it=null,Q=0,Pt=null){Pt===null&&(Q!==0?(Fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=Q,Q=0):Pt=0);let jt,ge,he,Ee,Ae,_e,ke,R,xt,qt=T.isCompressedTexture?T.mipmaps[Pt]:T.image;if(X!==null)jt=X.max.x-X.min.x,ge=X.max.y-X.min.y,he=X.isBox3?X.max.z-X.min.z:1,Ee=X.min.x,Ae=X.min.y,_e=X.isBox3?X.min.z:0;else{let Zn=Math.pow(2,-Q);jt=Math.floor(qt.width*Zn),ge=Math.floor(qt.height*Zn),T.isDataArrayTexture?he=qt.depth:T.isData3DTexture?he=Math.floor(qt.depth*Zn):he=1,Ee=0,Ae=0,_e=0}it!==null?(ke=it.x,R=it.y,xt=it.z):(ke=0,R=0,xt=0);let le=de.convert($.format),Yt=de.convert($.type),se;$.isData3DTexture?(V.setTexture3D($,0),se=D.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(V.setTexture2DArray($,0),se=D.TEXTURE_2D_ARRAY):(V.setTexture2D($,0),se=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,$.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,$.unpackAlignment);let ve=D.getParameter(D.UNPACK_ROW_LENGTH),Ve=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Je=D.getParameter(D.UNPACK_SKIP_PIXELS),Re=D.getParameter(D.UNPACK_SKIP_ROWS),In=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,qt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_e);let $e=T.isDataArrayTexture||T.isData3DTexture,Dn=$.isDataArrayTexture||$.isData3DTexture;if(T.isDepthTexture){let Zn=U.get(T),tn=U.get($),cn=U.get(Zn.__renderTarget),qi=U.get(tn.__renderTarget);tt.bindFramebuffer(D.READ_FRAMEBUFFER,cn.__webglFramebuffer),tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let ki=0;ki<he;ki++)$e&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,U.get(T).__webglTexture,Q,_e+ki),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,U.get($).__webglTexture,Pt,xt+ki)),D.blitFramebuffer(Ee,Ae,jt,ge,ke,R,jt,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||U.has(T)){let Zn=U.get(T),tn=U.get($);tt.bindFramebuffer(D.READ_FRAMEBUFFER,Be),tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,zt);for(let cn=0;cn<he;cn++)$e?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zn.__webglTexture,Q,_e+cn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zn.__webglTexture,Q),Dn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,Pt,xt+cn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,Pt),Q!==0?D.blitFramebuffer(Ee,Ae,jt,ge,ke,R,jt,ge,D.COLOR_BUFFER_BIT,D.NEAREST):Dn?D.copyTexSubImage3D(se,Pt,ke,R,xt+cn,Ee,Ae,jt,ge):D.copyTexSubImage2D(se,Pt,ke,R,Ee,Ae,jt,ge);tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Dn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(se,Pt,ke,R,xt,jt,ge,he,le,Yt,qt.data):$.isCompressedArrayTexture?D.compressedTexSubImage3D(se,Pt,ke,R,xt,jt,ge,he,le,qt.data):D.texSubImage3D(se,Pt,ke,R,xt,jt,ge,he,le,Yt,qt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Pt,ke,R,jt,ge,le,Yt,qt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Pt,ke,R,qt.width,qt.height,le,qt.data):D.texSubImage2D(D.TEXTURE_2D,Pt,ke,R,jt,ge,le,Yt,qt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ve),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Je),D.pixelStorei(D.UNPACK_SKIP_ROWS,Re),D.pixelStorei(D.UNPACK_SKIP_IMAGES,In),Pt===0&&$.generateMipmaps&&D.generateMipmap(se),tt.unbindTexture()},this.initRenderTarget=function(T){U.get(T).__webglFramebuffer===void 0&&V.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?V.setTextureCube(T,0):T.isData3DTexture?V.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?V.setTexture2DArray(T,0):V.setTexture2D(T,0),tt.unbindTexture()},this.resetState=function(){A=0,L=0,I=null,tt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=nn._getDrawingBufferColorSpace(t),e.unpackColorSpace=nn._getUnpackColorSpace()}};var Rc=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Sy=new rs(-1,1,1,-1,0,1),Fu=class extends en{constructor(){super(),this.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new be([0,2,0,0,2,0],2))}},Ty=new Fu,Cs=class{constructor(t){this._mesh=new $t(Ty,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Sy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Cc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var xp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var to=class s extends Rc{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new kt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new xn(r,o,{type:kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let f=new xn(r,o,{type:kn});f.texture.name="UnrealBloomPass.h"+l,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new xn(r,o,{type:kn});d.texture.name="UnrealBloomPass.v"+l,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=xp;this.highPassUniforms=Fi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new St(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fi.clone(Cc.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:Cc.vertexShader,fragmentShader:Cc.fragmentShader,blending:ai,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new kt,this._oldClearAlpha=1,this._basic=new En,this._fsQuad=new Cs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new St(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new on({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new on({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};to.BlurDirectionX=new St(1,0);to.BlurDirectionY=new St(0,1);var vp={ultra:{label:"Ultra",pixelRatio:2,msaa:4,shadow:4096,shadowRange:150,farShadow:2048,ao:16,reflections:.75,bloom:!0,grade:!0,shafts:!0,carProbe:256,sharpen:.55,lamps:!0,dof:!0,sky:[1024,36],facade:520},high:{label:"High",pixelRatio:1.5,msaa:4,shadow:2048,shadowRange:120,farShadow:2048,ao:10,reflections:.5,bloom:!0,grade:!0,shafts:!0,carProbe:128,sharpen:.55,lamps:!0,dof:!0,sky:[1024,28],facade:360},medium:{label:"Balanced",pixelRatio:1.2,msaa:2,shadow:2048,shadowRange:90,farShadow:1024,ao:6,reflections:0,bloom:!0,grade:!0,shafts:!0,carProbe:0,sharpen:.45,lamps:!0,dof:!1,sky:[768,20],facade:240},low:{label:"Performance",pixelRatio:1,msaa:0,shadow:1024,shadowRange:70,farShadow:0,ao:0,reflections:0,bloom:!1,grade:!1,shafts:!1,carProbe:0,sharpen:.3,lamps:!1,dof:!1,sky:[512,14],facade:130}},yp={auto:0,"720p":1280*720,"1080p":1920*1080,"1440p":2560*1440,native:1/0},zu={clean:{aberration:0,grain:0,blur:0,vignette:.14},subtle:{aberration:5e-4,grain:.015,blur:.55,vignette:.26},cinematic:{aberration:.0015,grain:.035,blur:1,vignette:.32}},Dc=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Uu=`
  uniform sampler2D tDepth;
  uniform vec2 uNearFar;
  uniform vec2 uInvProj; // 1 / projection[0][0], 1 / projection[1][1]
  float paViewZ(float d) { return (uNearFar.x * uNearFar.y) / ((uNearFar.y - uNearFar.x) * d - uNearFar.y); }
  vec3 paViewPos(vec2 uv) {
    float z = paViewZ(texture2D(tDepth, uv).x);
    return vec3((uv * 2.0 - 1.0) * uInvProj * -z, z);
  }`,Ay={uniforms:{tDepth:{value:null},uNearFar:{value:new St},uInvProj:{value:new St},uTexel:{value:new St},uRadius:{value:1.15},uStrength:{value:1}},vertexShader:Dc,fragmentShader:`
    ${Uu}
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
    }`},Ry={uniforms:{tAO:{value:null},tDepth:{value:null},uNearFar:{value:new St},uInvProj:{value:new St},uTexel:{value:new St},uDepthTexel:{value:new St}},vertexShader:Dc,fragmentShader:`
    ${Uu}
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
    }`},Cy={uniforms:{tScene:{value:null},tAO:{value:null},tDepth:{value:null},aoOn:{value:0},sunPos:{value:new St(.5,.5)},strength:{value:0},color:{value:new kt(1,.7,.4)},aspect:{value:1}},vertexShader:Dc,fragmentShader:`
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
    }`},Py={uniforms:{tHdr:{value:null},tDepth:{value:null},uNearFar:{value:new St},uInvProj:{value:new St},exposure:{value:1},time:{value:0},resolution:{value:new St(1,1)},speedBlur:{value:0},camBlur:{value:new St},aberration:{value:.0015},vignette:{value:.32},grain:{value:.035},sharpen:{value:0},sunPos:{value:new St(.5,.5)},sunVisible:{value:0},sunColor:{value:new kt(1,.7,.4)},flash:{value:0},night:{value:0},warmth:{value:0},dof:{value:0},focus:{value:10},grade:{value:1},debugView:{value:0},tDebug:{value:null}},vertexShader:Dc,fragmentShader:`
    ${Uu}
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
    }`};function Pc(s,t={}){return new on({uniforms:Fi.clone(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,defines:t,depthTest:!1,depthWrite:!1,toneMapped:!1})}var Ic=class{constructor(t){this.renderer=new Tc({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1});let e=this.renderer;e.toneMapping=Ii,e.toneMappingExposure=.85,e.shadowMap.enabled=!0,e.shadowMap.type=Pl,this.quality=null,this.scale=1,this.frameTimes=[],this.adaptTimer=0,this.quad=new Cs(null),this.resolution="1080p",this.filmName="subtle",this.film=zu.subtle,this.targets=null,this.size=new St}init(t,e){this.scene=t,this.camera=e}buildPasses(){let t=this.quality;for(let n of[this.aoMat,this.aoBlurMat,this.lightMat,this.lensMat])n?.dispose();this.bloomPass?.dispose(),this.aoMat=t.ao?Pc(Ay,{AO_SAMPLES:t.ao}):null,this.aoBlurMat=t.ao?Pc(Ry):null,this.lightMat=Pc(Cy),this.lensMat=Pc(Py),this.bloomPass=t.bloom?new to(new St(4,4),.34,.5,1):null,this.grade={uniforms:this.lensMat.uniforms},this.shafts={uniforms:this.lightMat.uniforms},this.bloom=this.bloomPass;let e=this.lensMat.uniforms;e.sharpen.value=t.sharpen,e.grade.value=t.grade?1:0,this.applyFilm(),this.disposeTargets(),this.applySize()}setFilm(t){this.filmName=t in zu?t:"subtle",this.film=zu[this.filmName],this.lensMat&&this.applyFilm()}applyFilm(){let t=this.lensMat.uniforms,e=this.film,n=this.quality.grade;t.aberration.value=n?e.aberration:0,t.grain.value=n?e.grain:0,t.vignette.value=e.vignette}setResolution(t){this.resolution=t in yp?t:"1080p",this.scale=1,this.quality&&this.applySize()}disposeTargets(){if(this.targets){for(let t of Object.values(this.targets))t.depthTexture?.dispose(),t.dispose();this.targets=null}}buildTargets(t,e){this.disposeTargets();let n=this.quality,i=new is(t,e);i.minFilter=i.magFilter=Qn;let r=new xn(t,e,{type:kn,samples:n.msaa,depthTexture:i}),o=new xn(t,e,{type:kn,depthBuffer:!1});if(this.targets={scene:r,hdr:o},n.ao){let a=Math.max(2,Math.round(t/2)),c=Math.max(2,Math.round(e/2));this.targets.ao=new xn(a,c,{depthBuffer:!1}),this.targets.aoBlur=new xn(a,c,{depthBuffer:!1})}this.bloomPass?.setSize(t,e)}setQuality(t){this.quality=vp[t]||vp.high,this.qualityName=t,this.scale=1,this.renderer.shadowMap.enabled=!0,this.buildPasses()}applySize(){let t=innerWidth,e=innerHeight,n=devicePixelRatio||1,i=yp[this.resolution],r=i?Math.min(n,Math.sqrt(i/(t*e))):Math.min(n,this.quality.pixelRatio)*this.scale;this.renderer.setPixelRatio(r),this.renderer.setSize(t,e);let o=Math.max(2,Math.round(t*r)),a=Math.max(2,Math.round(e*r));(!this.targets||this.size.x!==o||this.size.y!==a)&&(this.size.set(o,a),this.buildTargets(o,a)),this.lensMat.uniforms.resolution.value.set(o,a),this.lightMat.uniforms.aspect.value=t/e,this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.onResize?.()}adapt(t){if(this.resolution!=="auto"||(this.frameTimes.push(t),this.frameTimes.length>90&&this.frameTimes.shift(),this.adaptTimer+=t,this.adaptTimer<2||this.frameTimes.length<60))return;this.adaptTimer=0;let e=[...this.frameTimes].sort((r,o)=>r-o),n=e[Math.floor(e.length/2)],i=this.scale;n>1/45?i=Math.max(.6,this.scale-.1):n<1/58&&this.scale<1&&(i=Math.min(1,this.scale+.05)),Math.abs(i-this.scale)>.001&&(this.scale=i,this.applySize())}beginFrame(){this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0}blit(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.quad.render(this.renderer)}render(){let t=this.renderer,e=this.quality,n=this.targets,i=this.camera,r=1/i.projectionMatrix.elements[0],o=1/i.projectionMatrix.elements[5],a=f=>{f.tDepth.value=n.scene.depthTexture,f.uNearFar.value.set(i.near,i.far),f.uInvProj.value.set(r,o)};t.setRenderTarget(n.scene),t.render(this.scene,i);let c=n.scene,h=this.lightMat.uniforms;if(e.shafts||(h.strength.value=0),e.ao||h.strength.value>.002||this.bloomPass){if(e.ao){let f=this.aoMat.uniforms;a(f),f.uTexel.value.set(1/n.scene.width,1/n.scene.height),this.blit(this.aoMat,n.ao);let d=this.aoBlurMat.uniforms;a(d),d.tAO.value=n.ao.texture,d.uTexel.value.set(1/n.ao.width,1/n.ao.height),d.uDepthTexel.value.set(1/n.scene.width,1/n.scene.height),this.blit(this.aoBlurMat,n.aoBlur),h.tAO.value=n.aoBlur.texture}h.aoOn.value=e.ao?1:0,h.tScene.value=n.scene.texture,h.tDepth.value=n.scene.depthTexture,this.blit(this.lightMat,n.hdr),c=n.hdr,this.bloomPass&&this.bloomPass.render(t,null,n.hdr,0,!1)}let l=this.lensMat.uniforms;a(l),l.tHdr.value=c.texture,l.exposure.value=t.toneMappingExposure,e.dof||(l.dof.value=0),l.debugView.value=this.debugView==="ao"&&n.aoBlur?1:this.debugView==="depth"?2:0,l.tDebug.value=n.aoBlur?n.aoBlur.texture:null,this.blit(this.lensMat,null)}};var Ps=`
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
`,_p=`
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
`,Lc=`
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
`;var Mp=(s,t)=>{let e=[];for(let n=s;n<=t;n+=160)e.push(n);return e},Le=Mp(-320,1600),Fe=Mp(-1600,1600),sn=Le[0],Ye=Le[Le.length-1],Oe=Fe[0],je=Fe[Fe.length-1],Me=13,zi=6,fa=[3.4,9.2],fe=.16,ei=-418,Nu=-.62,pn={from:-333,to:-342},Nn=-357,De={minX:-412,maxX:Ye+32,minZ:Oe-76,maxZ:je+76},eo=Le.slice(0,-1).map(s=>s+160/2),Is=Fe.slice(0,-1).map(s=>s+160/2),Ei=160-Me*2,Vi={rampStart:-342,x0:-374,x1:-556,z:-160,halfWidth:9,deckY:2.6},qn=[Vi,{rampStart:-342,x0:-374,x1:-640,z:1120,halfWidth:7,deckY:2.6,plain:!0}];function or(s,t){for(let e of qn)if(Math.abs(t-e.z)<=e.halfWidth&&s<=e.rampStart&&s>=e.x1)return e;return null}function Ds(s,t){let e=or(s,t);return e?s>e.x0?fe+(e.deckY-fe)*(e.rampStart-s)/(e.rampStart-e.x0):e.deckY:null}var Yn={sunset:{name:"SUNSET RUN",blurb:"The classic loop round the old town.",route:[[-320,40],[-320,-300],[-170,-320],[-6,-320],[150,-320],[160,-10],[10,160],[-300,160]]},downtown:{name:"DOWNTOWN DASH",blurb:"A loop through the towers and back to the pier.",route:[[-320,-300],[10,-320],[330,-320],[630,-320],[640,-470],[640,-790],[950,-800],[960,-490],[960,-170],[650,-160],[330,-160],[10,-160],[-300,-160]],start:{x:-320+3.4,z:30,heading:0}},grand:{name:"GRAND TOUR",blurb:"The whole city, coast to foothills.",route:[[-320,40],[-320,-620],[-320,-1270],[-310,-1600],[470,-1600],[1270,-1600],[1600,-1590],[1600,-810],[1600,-10],[1600,790],[1600,1590],[810,1600],[10,1600],[-320,1590],[-320,970],[-320,420]]}},T2=Yn.sunset.route,Fc=15,cs=[{axis:"ns",road:-160,s:-240,side:1},{axis:"ns",road:0,s:-80,side:-1},{axis:"ns",road:160,s:80,side:1},{axis:"ns",road:0,s:400,side:1},{axis:"ns",road:-320,s:-400,side:1},{axis:"ns",road:320,s:-240,side:-1},{axis:"ew",road:-320,s:-80,side:1},{axis:"ew",road:0,s:80,side:-1},{axis:"ew",road:160,s:-240,side:1},{axis:"ew",road:320,s:240,side:-1},{axis:"ew",road:-160,s:240,side:1},{axis:"ew",road:480,s:-80,side:-1}];for(let s of[-320,0,640,960,1280,1600])for(let t=0,e=Oe+80+(s===0?160:0);e<je;e+=480,t++)Math.abs(e)<520&&s<=320||cs.push({axis:"ns",road:s,s:e,side:t%2?1:-1});for(let s of[-1280,-800,-480,800,1280])for(let t=0,e=sn+240;e<Ye;e+=480,t++)Math.abs(s)<520&&e<=320||cs.push({axis:"ew",road:s,s:e,side:t%2?-1:1});function ar(s,t=15.4){return s.axis==="ns"?[s.road+s.side*t,s.s]:[s.s,s.road+s.side*t]}var On={x:-320+fa[0],z:246,heading:0},bp=(s,t,e)=>Math.min(Math.max(Math.round((s-t)/160)*160+t,t),e),hs=s=>bp(s,sn,Ye),Ls=s=>bp(s,Oe,je);var lr=s=>Math.min(Math.max(Math.floor((s-sn)/160),0),eo.length-1)*160+sn+160/2,da=s=>Math.min(Math.max(Math.floor((s-Oe)/160),0),Is.length-1)*160+Oe+160/2;function pa(s,t){return s<Nn?"sand":s<pn.to?"grass":s<pn.from||s>Ye+Me||t<Oe-Me||t>je+Me?"curb":Math.abs(s-hs(s))<Me||Math.abs(t-Ls(t))<Me?"road":"curb"}function wp(s){return s>=Nn?0:Math.max(-.02-(Nn-s)*.0105,Nu-.3)}var ls={ocean:["OCEAN DRIVE","Vista Pac\xEDfica Beach",.3,.2],seaview:["SEAVIEW","Coastal Quarter",.5,.2],downtown:["DOWNTOWN","Financial District",1,.2],palm:["PALM DISTRICT","San Aurelio",.65,.6],southbank:["SOUTHBANK","Harbor Heights",.4,.6],northshore:["NORTHSHORE","Lighthouse Point",.35,.5],midtown:["MIDTOWN","Alta Vista",.8,.3],laurel:["LAUREL PARK","The Gardens",.35,.9],arts:["ARTS DISTRICT","Cannery Row",.6,.3],port:["PORT DISTRICT","Bayfront Docks",.55,.1],marina:["MARINA","South Beach",.4,.3],eastside:["EASTSIDE","Jacaranda Heights",.35,.8],foothills:["FOOTHILLS","Ridgeline",.25,.8]};function Ui(s,t){return s<=320&&Math.abs(t)<=480?s<-170?"seaview":s>0&&t<-20?"downtown":t>250?"southbank":"palm":s<-170?t<-480?"northshore":"marina":s>1440?"foothills":t<-1120?"northshore":t>1120?"port":s>1120?"eastside":t<=-800?"midtown":t<0&&s>0?"downtown":t>640?"arts":s>480?"laurel":t>160?"southbank":"palm"}function zc(s,t){return s<-330?ls.ocean:ls[Ui(lr(s),da(t))]}var Ou={"-320":"Ocean Drive","-160":"Seaview Ave",0:"Aurelio Blvd",160:"Grand Ave",320:"Hillcrest Ave",480:"Mission Ave",640:"Centro Blvd",800:"Laurel Ave",960:"Vista Ave",1120:"Jacaranda Ave",1280:"Canyon Ave",1440:"Foothill Blvd",1600:"Ridgeline Dr"},Bu={"-1600":"Northshore Rd","-1440":"Lighthouse St","-1280":"Coral St","-1120":"Mariposa St","-960":"Alta St","-800":"Dolores St","-640":"Cabrillo St","-480":"Marina St","-320":"Sunset Blvd","-160":"Pier Ave",0:"Palm St",160:"Harbor St",320:"Rosa St",480:"Southbank Rd",640:"Cannery St",800:"Dock St",960:"Foundry St",1120:"Depot St",1280:"Terminal St",1440:"Breakwater St",1600:"Bayfront Rd"};function Ep(s,t){let e=hs(s),n=Ls(t);return Math.abs(s-e)<Me+3?Ou[String(e)]:Math.abs(t-n)<Me+3?Bu[String(n)]:s<-330?"Beachfront":"Off road"}var li={paFarShadowMap:{value:null},paFarShadowMatrix:{value:new ne},paFarShadow:{value:new Ke(0,1/2048,.7,0)},paLamp:{value:new Ke(0,1,.71,.42)},paCloud:{value:new Ke(0,.42,0,0)},paSunDirW:{value:new P(0,1,0)}},Hu=`
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
`,Sp=(fe+8.7).toFixed(2),_n=s=>s.toFixed(1),Tp=De.minZ+16,Iy=qn.map(s=>`abs(pz - ${_n(s.z)}) > 12.0`).join(" && "),Ap=`
#ifdef USE_FOG
  uniform highp sampler2DShadow paFarShadowMap;
  uniform mat4 paFarShadowMatrix;
  uniform vec4 paFarShadow;
  uniform vec4 paLamp;
  uniform vec4 paCloud;
  uniform vec3 paSunDirW;
  ${Hu}

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

  float paRoadX(float x) { return clamp(floor((x - ${_n(sn)}) / ${_n(160)} + 0.5), 0.0, ${_n(Le.length-1)}) * ${_n(160)} + ${_n(sn)}; }
  float paRoadZ(float z) { return clamp(floor((z - ${_n(Oe)}) / ${_n(160)} + 0.5), 0.0, ${_n(Fe.length-1)}) * ${_n(160)} + ${_n(Oe)}; }

  // The street lamp nearest to wp on one side of its road (see the layout in props.js).
  // Returns its position, or y < 0 where no lamp stands.
  vec3 paLampNear(vec3 wp, float side, bool avenue) {
    float off = side > 0.0 ? 19.0 : 0.0;
    if (avenue) {
      float rx = paRoadX(wp.x);
      float z0 = ${_n(Oe-40)};
      float zb = z0 + floor((wp.z - z0 - off) / 38.0 + 0.5) * 38.0;
      bool ok = zb > z0 - 0.5 && zb < ${_n(je+40.5)} && abs(zb - paRoadZ(zb)) >= ${_n(Me+7)} && !(rx < ${_n(sn+1)} && side < 0.0);
      return vec3(rx + side * ${_n(Me-1.6)}, ok ? ${Sp} : -1.0, zb + off);
    }
    float rz = paRoadZ(wp.z);
    float x0 = ${_n(sn+20)};
    float xb = x0 + floor((wp.x - x0 - off) / 38.0 + 0.5) * 38.0;
    bool ok = xb > x0 - 0.5 && xb < ${_n(Ye+.5)} && abs(xb - paRoadX(xb)) >= ${_n(Me+7)};
    return vec3(xb + off, ok ? ${Sp} : -1.0, rz + side * ${_n(Me-1.6)});
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
`;function Rp(){let s=Pe.lights_fragment_begin,t=`directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
    float paProm = abs( vFogWorld.x - ${_n((pn.from+pn.to)/2)} );
    if ( paProm < 20.0 ) {
      float pz = ${_n(Tp)} + floor( ( vFogWorld.z - ${_n(Tp)} ) / 24.0 + 0.5 ) * 24.0;
      float paPatch = ( 1.0 - smoothstep( 7.0, 12.0, abs( pz - vFogWorld.z ) ) ) * ( 1.0 - smoothstep( 12.0, 20.0, paProm ) ) * paLampFade;
      if ( ${Iy} && paPatch > 0.001 ) {
        directLight.color = paLampLight( vFogWorld, vec3( ${_n((pn.from+pn.to)/2)}, ${(fe+4.4).toFixed(2)}, pz ), 0.0, paDir ) * paPatch * 0.5;
        directLight.direction = normalize( mat3( viewMatrix ) * paDir );
        directLight.visible = true;
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
      }
    }
  }
#endif
`,Pe.lights_fragment_begin=s}var Uc=new P,Nc=new P,ku=new P,Dy=new ne().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),Oc=class{constructor(t,e){this.renderer=t,this.scene=e,this.size=0,this.range=560,this.target=null,this.camera=new rs(-this.range,this.range,this.range,-this.range,1,2700),this.camera.layers.set(0),this.depthMaterial=new En({colorWrite:!1,side:Sn}),this.center=new P(1e9,0,0),this.dir=new P,this.timer=0,this.dirty=!0,this.blank=this.makeTarget(2);let n=t.getRenderTarget();t.setRenderTarget(this.blank),t.clear(),t.setRenderTarget(n),li.paFarShadowMap.value=this.blank.depthTexture}makeTarget(t){let e=new is(t,t);return e.compareFunction=ha,e.minFilter=e.magFilter=ii,new xn(t,t,{depthTexture:e})}setSize(t){t!==this.size&&(this.size=t,this.target?.depthTexture.dispose(),this.target?.dispose(),this.target=null,t>0&&(this.target=this.makeTarget(t),li.paFarShadow.value.y=1/t),li.paFarShadowMap.value=this.blank.depthTexture,li.paFarShadow.value.x=0,this.dirty=!0)}update(t,e,n,i){if(!this.target)return;this.timer-=t;let r=Math.hypot(e.x-this.center.x,e.z-this.center.z),o=this.dir.dot(n)<.99998;if(!this.dirty&&!o&&(r<30||this.timer>0)&&r<140)return;this.dirty=!1,this.timer=.4,this.dir.copy(n),this.center.copy(e);let a=this.range*2/this.size;Uc.crossVectors(Nc.set(0,1,0),n).normalize(),Nc.crossVectors(n,Uc),ku.copy(Uc).multiplyScalar(Math.round(e.dot(Uc)/a)*a).addScaledVector(Nc,Math.round(e.dot(Nc)/a)*a).addScaledVector(n,e.dot(n));let c=this.camera;c.position.copy(ku).addScaledVector(n,1500),c.up.set(0,1,0),c.lookAt(ku),c.updateMatrixWorld();let h=this.renderer,l=h.getRenderTarget(),f=this.scene.overrideMaterial;this.scene.overrideMaterial=this.depthMaterial,i(()=>{h.setRenderTarget(this.target),h.clear(),h.render(this.scene,c)}),this.scene.overrideMaterial=f,h.setRenderTarget(l),li.paFarShadowMatrix.value.copy(Dy).multiply(c.projectionMatrix).multiply(c.matrixWorldInverse),li.paFarShadowMap.value=this.target.depthTexture,li.paFarShadow.value.x=1}};var Ly=`
precision highp float;
varying vec2 vUv;
uniform vec4 uRect; // u0, v0, u1, v1 of the strip being painted
uniform vec2 uWind;
uniform vec3 uLightDir;
${Ps}
${Hu}
${_p}

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
}`,no=64,Bc=class{constructor(t,e){this.renderer=t,this.shared=e,this.width=0,this.steps=0,this.targets=[],this.a=0,this.b=0,this.work=1,this.progress=0,this.pending=!0,this.material=null,this.quad=new Cs(null),this.onComplete=null}setQuality(t,e){if(!(t===this.width&&e===this.steps)){this.width=t,this.steps=e;for(let n of this.targets)n.dispose();this.targets=[0,1,2].map(()=>{let n=new xn(t,t/2,{type:kn,depthBuffer:!1});return n.texture.wrapS=ws,n.texture.minFilter=n.texture.magFilter=ii,n.texture.generateMipmaps=!1,n}),this.material?.dispose(),this.frozen={skySunDir:{value:new P},skyMoonDir:{value:new P},skyTurbidity:{value:0},skyRayleigh:{value:0},skyMie:{value:0},skyMieG:{value:0},skyCloudCover:{value:0},skyNight:{value:0},skyCloudLit:{value:new kt},skyCloudShade:{value:new kt},uWind:{value:new St},uLightDir:{value:new P},uRect:{value:new Ke}},this.material=new on({uniforms:this.frozen,defines:{CLOUD_STEPS:e},depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:`varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:Ly}),this.quad.material=this.material,this.a=this.b=0,this.work=1,this.progress=0,this.pending=!0}}freeze(t,e){let n=this.frozen,i=this.shared;for(let r of["skySunDir","skyMoonDir","skyCloudLit","skyCloudShade"])n[r].value.copy(i[r].value);for(let r of["skyTurbidity","skyRayleigh","skyMie","skyMieG","skyCloudCover","skyNight"])n[r].value=i[r].value;n.uWind.value.copy(t),n.uLightDir.value.copy(e)}paint(t,e){let n=this.renderer,i=this.targets[this.work],r=n.getRenderTarget(),o=Math.round(t/no*this.width),a=Math.round(e/no*this.width);i.viewport.set(o,0,a-o,i.height),i.scissor.set(o,0,a-o,i.height),i.scissorTest=!0,this.frozen.uRect.value.set(o/this.width,0,a/this.width,1),n.setRenderTarget(i),this.quad.render(n),n.setRenderTarget(r)}publish(){let t=this.shared;t.skyPanoA.value=this.targets[this.a].texture,t.skyPanoB.value=this.targets[this.b].texture,t.skyPanoBlend.value=this.a===this.b?0:this.progress/no}update(t,e,n=1){if(!this.material)return;if(this.pending){this.pending=!1,this.freeze(t,e),this.paint(0,no),this.a=this.b=this.work,this.work=(this.work+1)%3,this.progress=0,this.publish(),this.onComplete?.(!0);return}this.progress===0&&this.freeze(t,e);let i=Math.min(no,this.progress+n);if(this.paint(this.progress,i),this.progress=i,this.progress>=no){let r=this.work;this.work=[0,1,2].find(o=>o!==this.b&&o!==r),this.a=this.b,this.b=r,this.progress=0,this.onComplete?.(!1)}this.publish()}};var Hc={golden:19.22,dusk:19.95,night:23.2,dawn:6.9,noon:13.2},Cp=6.4,Fy=19.7,rn={skySunDir:{value:new P(-.9,.12,-.3).normalize()},skyMoonDir:{value:new P(.6,.5,.4).normalize()},skyTurbidity:{value:6},skyRayleigh:{value:2.2},skyMie:{value:.006},skyMieG:{value:.82},skyIntensity:{value:.75},skyCloudCover:{value:.47},skyTime:{value:0},skyNight:{value:0},skyCloudLit:{value:new kt},skyCloudShade:{value:new kt},fogSunColor:{value:new kt},fogSunDir:{value:new P},fogHeightFalloff:{value:.012},nightFactor:{value:0},worldTime:{value:0},skyPanoA:{value:null},skyPanoB:{value:null},skyPanoBlend:{value:0},skySunColor:{value:new kt},fogPano:{value:1},mirrorPass:{value:0}};Pe.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorld;
#endif`;Pe.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorld = transpose(mat3(viewMatrix)) * (mvPosition.xyz - viewMatrix[3].xyz);
#endif`;Pe.fog_pars_fragment=`
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
${Ap}`;Rp();Pe.fog_fragment=`
#ifdef USE_FOG
  gl_FragColor.rgb = pa_applyFog(gl_FragColor.rgb, vFogWorld);
#endif`;var Gc={paFogPanoA:rn.skyPanoA,paFogPanoB:rn.skyPanoB,paFogPano:{value:new P(0,1,1)}};function Vu(s){if(s.userData.atmo)return s;s.userData.atmo=!0;let t=s.onBeforeCompile,e=s.customProgramCacheKey();return s.onBeforeCompile=function(n,i){t.call(this,n,i),n.uniforms.fogSunColor=rn.fogSunColor,n.uniforms.fogSunDir=rn.fogSunDir,n.uniforms.fogHeightFalloff=rn.fogHeightFalloff,Object.assign(n.uniforms,li,Gc)},s.customProgramCacheKey=()=>e+"|atmo",s}function Ip(s){s.traverse(t=>{if(t.material)for(let e of Array.isArray(t.material)?t.material:[t.material])e.isShaderMaterial||e.isRawShaderMaterial||Vu(e)})}var zy=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,Uy=`
${Ps}
${Lc}
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
}`;function Pp(s=!0,t=!0){return new on({uniforms:{...rn,skyClouds:{value:s?1:0},skyDisc:{value:t?1:0}},vertexShader:zy,fragmentShader:Uy,side:Kn,depthWrite:!1,depthTest:!0,fog:!1})}var Ny=new P(0,1,0),Oy=new P,By=new P,Gu=new P,Ze=(s,t,e)=>new kt(s,t,e),cr=(s,t,e)=>{if(e<=t[0][0])return s.copy(t[0][1]);for(let n=1;n<t.length;n++)if(e<=t[n][0]){let[i,r]=t[n-1],[o,a]=t[n];return s.copy(r).lerp(a,(e-i)/(o-i))}return s.copy(t[t.length-1][1])},us=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e];return i+(o-i)*(t-n)/(r-n)}return s[s.length-1][1]},ky=[[-6,Ze(.9,.35,.2)],[0,Ze(1,.34,.1)],[4,Ze(1,.47,.19)],[10,Ze(1,.66,.38)],[25,Ze(1,.88,.74)],[60,Ze(1,.97,.92)]],Hy=[[-4,0],[0,1.6],[4,4.6],[12,5],[40,5.2]],Gy=[[-15,Ze(.06,.09,.18)],[-4,Ze(.22,.24,.42)],[2,Ze(.62,.55,.62)],[12,Ze(.6,.7,.85)],[40,Ze(.62,.76,.95)]],Vy=[[-15,Ze(.05,.05,.06)],[0,Ze(.35,.24,.2)],[15,Ze(.42,.36,.3)],[40,Ze(.45,.42,.38)]],Wy=[[-15,.4],[-4,.42],[3,.32],[12,.45],[30,.6]],Xy=[[-15,Ze(.03,.04,.075)],[-5,Ze(.15,.15,.26)],[0,Ze(.42,.33,.38)],[6,Ze(.58,.45,.42)],[18,Ze(.55,.62,.72)],[50,Ze(.55,.66,.8)]],qy=[[-15,Ze(.05,.06,.1)],[-5,Ze(.4,.24,.22)],[0,Ze(1.15,.5,.22)],[6,Ze(1.2,.68,.38)],[20,Ze(.9,.84,.76)],[50,Ze(.75,.8,.86)]],Yy=[[-12,Ze(.04,.05,.08)],[-5,Ze(.45,.25,.32)],[0,Ze(1.8,.72,.42)],[5,Ze(1.9,1.1,.7)],[15,Ze(1.5,1.4,1.35)],[50,Ze(1.5,1.5,1.5)]],Zy=[[-12,Ze(.02,.025,.04)],[-5,Ze(.18,.13,.22)],[0,Ze(.42,.26,.34)],[5,Ze(.6,.45,.48)],[15,Ze(.74,.78,.86)],[50,Ze(.86,.9,.97)]],$y=[[-15,45e-5],[-3,55e-5],[3,6e-4],[15,4e-4],[50,28e-5]],Ky=[[-15,1.35],[-5,1.2],[0,1.05],[6,.92],[20,.76],[50,.68]],Jy=[[-15,.5],[-4,.45],[2,.36],[12,.45],[30,.6]],kc=class{constructor(t,e){this.renderer=t,this.scene=e,this.hours=Hc.golden,this.cycle=!1,this.cycleSpeed=24/2880,this.sky=new $t(new xe(1,1,1),Pp(!0)),this.sky.scale.setScalar(2e3),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.userData.noAO=!0,e.add(this.sky),this.probeScene=new Ys,this.probeSky=new $t(new xe(1,1,1),Pp(!0,!1)),this.probeSky.scale.setScalar(100),this.probeScene.add(this.probeSky);let n=new $t(new ko(60,24),new En({color:1776156}));n.rotation.x=-Math.PI/2,n.position.y=-2,this.probeGround=n,this.probeScene.add(n),this.pmrem=new jr(t),this.baker=new Bc(t,rn),this.baker.setQuality(1024,28),this.baker.onComplete=i=>{i&&(this.envDirty=!0)},this.envTarget=null,this.envDirty=!0,this.envTimer=0,this.lastEnvHours=-100,this.sun=new ea(16777215,3),this.sun.castShadow=!0,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.06,this.shadowRange=110,e.add(this.sun,this.sun.target),this.hemi=new Qo(16777215,4473924,1),e.add(this.hemi),e.fog=new No(12687759,.0016),this.sunDir=new P,this.moonDir=new P,this.lightDir=new P,this.wind=new St,this.realLamps=!0,this.cloudShadows=.5,this.nightFactor=0,this.elevation=0,this.exposure=.8,this.apply()}setHours(t){this.hours=(t%24+24)%24,this.envDirty=!0,this.baker.pending=!0,this.apply()}setSkyQuality(t,e,n){this.baker.setQuality(t,e),rn.fogPano.value=n?1:0,this.envDirty=!0}setShadowQuality(t,e){this.sun.shadow.mapSize.set(t,t),this.shadowRange=e,this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=n.bottom=-e,n.right=n.top=e,n.near=1,n.far=900,n.updateProjectionMatrix()}computeSun(t,e){let n=(t-Cp)/(Fy-Cp),i=Math.PI*n,r=Math.asin(Math.sin(i)*Math.sin(Ne.degToRad(64))),o=Math.cos(i),a=Math.sin(i)*.6-.32,c=Math.hypot(o,a)||1;return e.set(o/c*Math.cos(r),Math.sin(r),a/c*Math.cos(r)).normalize(),Ne.radToDeg(r)}apply(){let t=rn,e=this.computeSun(this.hours,this.sunDir);this.elevation=e,this.computeSun(this.hours+12.4,this.moonDir),this.moonDir.y=Math.max(this.moonDir.y,.25),this.moonDir.normalize(),t.skySunDir.value.copy(this.sunDir),t.skyMoonDir.value.copy(this.moonDir);let n=Ne.smoothstep(-e,-2,9),i=Ne.smoothstep(-e,-7,1.5);this.nightFactor=n,this.lampFactor=i,t.nightFactor.value=i,t.skyNight.value=n,t.skyTurbidity.value=us([[-5,3.5],[2,5.5],[10,4.5],[40,2.6]],e),t.skyRayleigh.value=us([[-5,1.6],[2,2.8],[10,2],[40,1.2]],e),t.skyMie.value=us([[0,.006],[10,.005],[40,.004]],e),t.skyIntensity.value=us([[-8,.6],[0,.72],[20,.62],[50,.55]],e),cr(t.skyCloudLit.value,Yy,e),cr(t.skyCloudShade.value,Zy,e);let r=e>-1.5;this.lightDir.copy(r?this.sunDir:this.moonDir),r?(cr(this.sun.color,ky,e),this.sun.intensity=us(Hy,e)):(this.sun.color.setRGB(.55,.65,.95),this.sun.intensity=.32*n),this.lightDir.y<.08&&(this.lightDir.y=.08,this.lightDir.normalize()),cr(this.hemi.color,Gy,e),cr(this.hemi.groundColor,Vy,e),this.hemi.intensity=us(Wy,e),cr(this.scene.fog.color,Xy,e),cr(t.fogSunColor.value,qy,e),t.fogSunDir.value.copy(this.sunDir),this.scene.fog.density=us($y,e),this.exposure=us(Ky,e),this.scene.environmentIntensity=us(Jy,e),this.probeGround.material.color.copy(this.hemi.groundColor).multiplyScalar(.25)}regenerateEnvironment(){let t=this.envTarget;this.envTarget=this.pmrem.fromScene(this.probeScene,0,.1,400),this.scene.environment=this.envTarget.texture,t&&t.dispose(),this.envDirty=!1,this.lastEnvHours=this.hours}update(t,e,n,i){rn.skyTime.value=e,rn.worldTime.value=e,this.cycle&&(this.hours=(this.hours+t*this.cycleSpeed)%24,this.apply(),Math.abs(this.hours-this.lastEnvHours)>.12&&(this.envDirty=!0)),this.sky.position.copy(i.position),this.wind.set(e*9,e*3.5),li.paSunDirW.value.copy(this.lightDir),li.paLamp.value.x=this.realLamps?this.lampFactor*60:0,li.paCloud.value.set(this.cloudShadows*Ne.smoothstep(this.elevation,1,9),rn.skyCloudCover.value,this.wind.x,this.wind.y),this.baker.update(this.wind,this.lightDir,1),Gc.paFogPano.value.set(rn.skyPanoBlend.value,rn.skyIntensity.value,rn.fogPano.value),rn.skySunColor.value.copy(this.sun.color).multiplyScalar(this.elevation>-1.5?26:0),this.envDirty&&this.regenerateEnvironment();let o=this.shadowRange*2/this.sun.shadow.mapSize.x,a=Oy.crossVectors(Ny,this.lightDir).normalize(),c=By.crossVectors(this.lightDir,a),h=Math.round(n.dot(a)/o)*o,l=Math.round(n.dot(c)/o)*o,f=n.dot(this.lightDir);Gu.copy(a).multiplyScalar(h).addScaledVector(c,l).addScaledVector(this.lightDir,f),this.sun.target.position.copy(Gu),this.sun.position.copy(Gu).addScaledVector(this.lightDir,450),this.sun.target.updateMatrixWorld()}get clockLabel(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};function ri(s,t,e){let n=t.isMaterial?t:new Zt(t);return n.onBeforeCompile=i=>{Object.assign(i.uniforms,e.uniforms||{}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
${Ps}
${e.fragmentPars||""}`).replace("#include <color_fragment>",`#include <color_fragment>
${e.color||""}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${e.roughness||""}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${e.metalness||""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${e.normal||""}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${e.emissive||""}`)},n.customProgramCacheKey=()=>"pa-"+s,n}function vn(s,t,e,n,{srgb:i=!0,repeat:r=!1}={}){let o=document.createElement("canvas");o.width=t,o.height=e,n(o.getContext("2d"),t,e);let a=new Zs(o);return i&&(a.colorSpace=$n),a.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),r&&(a.wrapS=a.wrapT=ws),a}var Wu=8294;function bt(){return Wu=Wu*1664525+1013904223>>>0,Wu/4294967296}var Mt=(s,t)=>s+bt()*(t-s),ye=s=>s[Math.floor(bt()*s.length)],we=s=>bt()<s;function hr(s,t){let e=Math.imul(Math.floor(s)|0,374761393)+Math.imul(Math.floor(t)|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}var Lp={"-240,-400":"parking","-240,-240":{stucco:3,motel:2,shops:2},"-240,-80":{hotel:3,shops:2,stucco:1},"-240,80":{stucco:3,shops:2,motel:1},"-240,240":{motel:2,stucco:3,shops:1},"-240,400":{stucco:3,shops:2},"-80,-400":{brick:3,shops:2,garage:1},"-80,-240":{office:2,garage:1,deco:1,shops:1},"-80,-80":{shops:2,condo:2,deco:1,brick:1},"-80,80":"park","-80,240":{brick:3,garage:1,shops:1},"-80,400":{warehouse:4,garage:1},"80,-400":{tower:3,office:2,deco:1},"80,-240":{tower:2,deco:2,office:1},"80,-80":"plaza","80,80":{hotel:2,shops:1,condo:2},"80,240":"parking","80,400":{warehouse:3,shops:1,brick:1},"240,-400":{office:2,tower:2,garage:1},"240,-240":"plaza-tall","240,-80":{deco:2,tower:2,hotel:1},"240,80":{condo:2,brick:2,shops:1},"240,240":{condo:3,shops:2},"240,400":"park"},jy={seaview:[{stucco:3,motel:2,shops:2,hotel:1},[.05,.06,0]],northshore:[{condo:3,hotel:2,stucco:2,shops:2,brick:1},[.12,.03,0]],marina:[{stucco:2,shops:2,warehouse:2,motel:1,condo:1},[.06,.1,0]],midtown:[{office:2,condo:2,brick:2,shops:2,deco:1,garage:1,hotel:1,civic:.7},[.06,.04,.05]],palm:[{shops:2,condo:2,brick:2,stucco:1,deco:1,civic:.5},[.1,.04,0]],southbank:[{brick:3,shops:2,garage:1,warehouse:1,condo:1},[.07,.06,0]],arts:[{brick:3,warehouse:2,shops:2,garage:1},[.05,.06,0]],port:[{warehouse:5,garage:1,shops:1},[.02,.14,0]],eastside:[{stucco:4,shops:2,brick:1,condo:1},[.16,.03,0]],foothills:[{stucco:5,shops:1,motel:1},[.18,.03,0]],laurel:[{condo:2,stucco:2,shops:2,brick:1,hotel:1,civic:.6},[.1,.03,.04]]},Qy=[[.75,{tower:4,office:2,deco:1}],[.45,{tower:2,deco:2,office:2,hotel:1,garage:1,civic:.6}],[0,{office:2,condo:2,deco:1,shops:1,garage:1,brick:1,civic:.6}]],Dp="720,-400";function t_(s,t){let e=Math.max(0,1-Math.hypot(s-150,t+200)/380),n=1.3*Math.max(0,1-Math.hypot(s-640,t+480)/640);return Math.max(e,n)}var Xu=new Map;function e_(s,t){let e=`${s},${t}`;if(Xu.has(e))return Xu.get(e);let n=Ui(s,t),i=Lp[e],r=i?Math.max(0,1-Math.hypot(s-150,t+200)/380):t_(s,t),o="mix",a=null;if(i)typeof i=="string"?o=i:a=i;else if(e===Dp)o="plaza-tall";else if(n==="laurel"&&s>560&&s<1040&&t>160&&t<480)o="park";else if(n==="downtown"){let h=hr(s*.37+11,t*.53+5);h<.1?o=r>.7?"plaza-tall":"plaza":h<.13?o="park":h<.16?o="parking":a=Qy.find(([l])=>r>=l)[1]}else{let[h,[l,f,d]]=jy[n],u=hr(s*.37+11,t*.53+5);u<l?o="park":u<l+f?o="parking":u<l+f+d?o="plaza":a=h}let c={kind:o,weights:a,district:n,dw:r,coastal:s<-170,landmark:e===Dp,lot:o==="park"?1:o==="parking"?2:o.startsWith("plaza")?4:0};return Xu.set(e,c),c}function Wi(){let s=eo.flatMap(e=>Is.map(n=>[e,n,e_(e,n)])),t=([e,n])=>`${e},${n}`in Lp;return[...s.filter(t),...s.filter(e=>!t(e))]}var Fp=()=>Wi().filter(([,,s])=>s.kind==="park");var zp=`${sn.toFixed(1)}, ${(Le.length-1).toFixed(1)}`,Up=`${Oe.toFixed(1)}, ${(Fe.length-1).toFixed(1)}`,n_=`
float paRoadNearest(float v, float start, float maxIndex) {
  return clamp(floor((v - start) / 160.0 + 0.5), 0.0, maxIndex) * 160.0 + start;
}
// Returns paint mask (rgb = color, a = coverage) and fills asphalt wear.
vec4 paRoadMarkings(vec2 p, out float wear, out float onRoad) {
  float dx = p.x - paRoadNearest(p.x, ${zp});
  float dz = p.y - paRoadNearest(p.y, ${Up});
  float adx = abs(dx), adz = abs(dz);
  bool inX = adx < ${Me.toFixed(1)};
  bool inZ = adz < ${Me.toFixed(1)};
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
    if (aa > ${Me.toFixed(1)} || ab < ${Me.toFixed(1)}) continue;
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
`,ci={wetness:{value:0},mirrorTex:{value:null},mirrorMatrix:{value:new ne},useMirror:{value:0},worldTime:{value:0}},i_=`
float paRoadDetail(vec2 p, float fw, out float manhole) {
  manhole = 0.0;
  float skid = 0.0;
  float dx = p.x - paRoadNearest(p.x, ${zp});
  float dz = p.y - paRoadNearest(p.y, ${Up});
  for (int axis = 0; axis < 2; axis++) {
    float a = axis == 0 ? dx : dz;
    float b = axis == 0 ? dz : dx;
    float along = axis == 0 ? p.y : p.x;
    float road = axis == 0 ? p.x - dx : p.y - dz;
    if (abs(a) > ${Me.toFixed(1)} || abs(b) < ${Me.toFixed(1)}) continue;
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
`,s_=`
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
`;function r_(){return ri("road",{color:16777215,roughness:.85,metalness:0},{uniforms:ci,fragmentPars:n_+i_+s_+`
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
      }`})}function o_(){return ri("slab",{color:16777215,roughness:.85,metalness:0},{uniforms:{wetness:ci.wetness},vertexPars:"attribute float aLot; flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf;",vertex:`
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
        float ring = ${zi.toFixed(1)};
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
      }`,roughness:"roughnessFactor = mix(paSlabRough, 0.42, wetness * (abs(vLot - 1.0) < 0.5 ? 0.0 : 1.0));"})}function a_(){return ri("sand",{color:16777215,roughness:.95},{fragmentPars:"float paWet;",color:`
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
      }`,roughness:"roughnessFactor = mix(0.95, 0.22, paWet);"})}function l_(){return ri("terrain",{color:16777215,roughness:.95},{color:`
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
      }`})}function Ni(s,t){let e=Math.max(0,s-(Ye+52)),n=Math.max(0,Oe-80-t),i=Math.max(0,t-(je+80)),r=Math.hypot(e,Math.max(n,i)*.9);if(s<-360)return-40;if(r<=0)return-.6;let o=Math.sin(s*.011+Math.sin(t*.006)*2)*.5+Math.sin(t*.013+s*.004)*.5,a=Math.sin(s*.031+t*.017)*5+Math.sin(t*.043-s*.012)*3.5;return-.6+(70*(1-Math.exp(-r/170))+r*.1)*(.8+o*.3)+a*Math.min(r/120,1)+Math.min(r/30,1)*1.5}function Np(s,t){let e=r_(),n=new $t(new an(1,1),e);n.rotation.x=-Math.PI/2;let i=Nn-1,r=Ye+80,o=Oe-140,a=je+140;n.scale.set(r-i,a-o,1),n.position.set((i+r)/2,0,(o+a)/2),n.receiveShadow=!0,s.add(n);let c=[];for(let[et,z,Tt]of Wi())c.push([et,z,Ei,Ei,Tt.lot]);let h=a-o,l=(o+a)/2;c.push([(pn.from+pn.to)/2,l,pn.from-pn.to,h,3]),c.push([(pn.to+Nn)/2,l,pn.to-Nn,h,1]);let f=Le[Le.length-1]+Me;c.push([f+zi/2,l,zi,h,0]),c.push([(f+zi+r)/2,l,r-f-zi,h,1]);let d=Fe[0]-Me,u=Fe[Fe.length-1]+Me;for(let[et,z]of[[d,-1],[u,1]]){let Tt=f-pn.from,Rt=(f+pn.from)/2;c.push([Rt,et+z*zi/2,Tt,zi,0]),c.push([Rt,et+z*(zi+35),Tt,70,1])}let g=new xe(1,1,1),x=new Ue(g,o_(),c.length),m=new Float32Array(c.length),p=new ne;c.forEach(([et,z,Tt,Rt,Wt],Kt)=>{p.compose(new P(et,fe/2-.05,z),new He,new P(Tt,fe+.1,Rt)),x.setMatrixAt(Kt,p),m[Kt]=Wt}),g.setAttribute("aLot",new dn(m,1)),x.receiveShadow=!0,x.layers.set(1),s.add(x);let _=new an(1,1,24,1),M=new $t(_,a_());M.rotation.x=-Math.PI/2;let v=-470,E=Nn;M.scale.set(E-v,h+320,1),M.position.set((v+E)/2,0,l),M.updateMatrixWorld();let A=_.attributes.position;for(let et=0;et<A.count;et++){let z=v+(A.getX(et)+.5)*(E-v);A.setZ(et,z>=Nn?0:-.02-(Nn-z)*.0105)}_.computeVertexNormals(),M.receiveShadow=!0,s.add(M);let L=-420,I=Ye+1500,S=Oe-1400,w=je+1400,N=new an(I-L,w-S,Math.round((I-L)/22),Math.round((w-S)/22));N.rotateX(-Math.PI/2);let H=N.attributes.position;for(let et=0;et<H.count;et++){let z=H.getX(et)+(L+I)/2,Tt=H.getZ(et)+(S+w)/2;H.setX(et,z),H.setZ(et,Tt),H.setY(et,Ni(z,Tt))}N.computeVertexNormals();let B=new $t(N,l_());B.receiveShadow=!0,s.add(B);let O=new xe(1,1,1),k=new Zt({color:10131084,roughness:.9}),G=[[De.maxX+1.5,0,1,1,De.maxZ-De.minZ+4],[(De.maxX+pn.from)/2,De.minZ-1.5,De.maxX-pn.from,1,1],[(De.maxX+pn.from)/2,De.maxZ+1.5,De.maxX-pn.from,1,1]],rt=new Ue(O,k,G.length);return G.forEach(([et,z,Tt,Rt,Wt],Kt)=>{p.compose(new P(et,Rt/2,z),new He,new P(Tt,Rt,Wt)),rt.setMatrixAt(Kt,p)}),rt.castShadow=rt.receiveShadow=!0,s.add(rt),{ground:n,slabMesh:x,terrain:B}}function ln(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new en,h=0;for(let l=0;l<s.length;++l){let f=s[l],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,u,l),h+=u}}if(e){let l=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+l);l+=s[d].attributes.position.count}c.setIndex(f)}for(let l in r){let f=Op(r[l]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,f)}for(let l in o){let f=o[l][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<o[l].length;++x)u.push(o[l][x][d]);let g=Op(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Op(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){let l=s[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}let o=new t(r),a=new yn(o,e,n),c=0;for(let h=0;h<s.length;++h){let l=s[h];if(l.isInterleavedBufferAttribute){let f=c/e;for(let d=0,u=l.count;d<u;d++)for(let g=0;g<e;g++){let x=l.getComponent(d,g);a.setComponent(d+f,g,x)}}else o.set(l.array,c);c+=l.count*e}return i!==void 0&&(a.gpuType=i),a}var c_=new ne;function fs(s,{exclude:t=[]}={}){s.updateMatrixWorld(!0);let e=new ne().copy(s.matrixWorld).invert(),n=new Set;for(let o of t)o.traverse(a=>n.add(a));let i=new Map;s.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||n.has(o)||Array.isArray(o.material)||o.geometry.isInstancedBufferGeometry||Object.keys(o.geometry.morphAttributes).length)return;let a=[o.material.uuid,o.castShadow,o.receiveShadow,o.layers.mask,o.renderOrder,!!o.userData.noAO,o.frustumCulled].join("|");i.has(a)||i.set(a,[]),i.get(a).push(o)});let r=0;for(let o of i.values()){if(o.length<2)continue;let a=o.map(d=>{let u=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();return u.applyMatrix4(c_.multiplyMatrices(e,d.matrixWorld)),u}),c=Object.keys(a[0].attributes).filter(d=>a.every(u=>u.attributes[d]&&u.attributes[d].itemSize===a[0].attributes[d].itemSize));for(let d of a)for(let u of Object.keys(d.attributes))c.includes(u)||d.deleteAttribute(u);let h=ln(a);if(!h)continue;let l=o[0],f=new $t(h,l.material);f.castShadow=l.castShadow,f.receiveShadow=l.receiveShadow,f.layers.mask=l.layers.mask,f.renderOrder=l.renderOrder,f.frustumCulled=l.frustumCulled,f.userData={...l.userData,batched:o.length},s.add(f);for(let d of o)d.removeFromParent();r+=o.length-1}return r}var ur=(s,t)=>(s+4096)*8192+(t+4096),fr=class{constructor(t=80,e=n=>[n.w,n.d]){this.cell=t,this.half=e,this.map=new Map,this.stamp=0,this.all=[]}add(t){let[e,n]=this.half(t),i=this.cell,r=Math.floor((t.x-e)/i),o=Math.floor((t.x+e)/i),a=Math.floor((t.z-n)/i),c=Math.floor((t.z+n)/i);for(let h=r;h<=o;h++)for(let l=a;l<=c;l++){let f=ur(h,l),d=this.map.get(f);d||this.map.set(f,d=[]),d.push(t)}return t._gs=0,this.all.push(t),t}addAll(t){for(let e of t)this.add(e);return this}near(t,e,n,i){let r=this.cell,o=++this.stamp,a=Math.floor((t-n)/r),c=Math.floor((t+n)/r),h=Math.floor((e-n)/r),l=Math.floor((e+n)/r);for(let f=a;f<=c;f++)for(let d=h;d<=l;d++){let u=this.map.get(ur(f,d));if(u)for(let g=0;g<u.length;g++){let x=u[g];if(x._gs!==o&&(x._gs=o,i(x)===!0))return!0}}return!1}segment(t,e,n,i,r){let o=this.cell,a=++this.stamp,c=Math.hypot(n-t,i-e),h=Math.max(1,Math.ceil(c/(o*.5))),l=NaN,f=NaN;for(let d=0;d<=h;d++){let u=d/h,g=Math.floor((t+(n-t)*u)/o),x=Math.floor((e+(i-e)*u)/o);if(!(g===l&&x===f)){l=g,f=x;for(let m=g-1;m<=g+1;m++)for(let p=x-1;p<=x+1;p++){let _=this.map.get(ur(m,p));if(_)for(let M=0;M<_.length;M++){let v=_[M];if(v._gs!==a&&(v._gs=a,r(v)===!0))return!0}}}}return!1}},gi=class{constructor(t=24){this.cell=t,this.map=new Map,this.count=0}add(t){let e=ur(Math.floor(t.x/this.cell),Math.floor(t.z/this.cell)),n=this.map.get(e);return n||this.map.set(e,n=[]),n.push(t),this.count++,t}addAll(t){for(let e of t)this.add(e);return this}near(t,e,n,i){let r=this.cell,o=Math.floor((t-n)/r),a=Math.floor((t+n)/r),c=Math.floor((e-n)/r),h=Math.floor((e+n)/r);for(let l=o;l<=a;l++)for(let f=c;f<=h;f++){let d=this.map.get(ur(l,f));if(d){for(let u=0;u<d.length;u++)if(i(d[u])===!0)return!0}}return!1}any(t,e,n){return this.near(t,e,n,i=>Math.abs(i.x-t)<n&&Math.abs(i.z-e)<n)}},Yu=320,Bp=(s,t)=>ur(Math.floor(s/Yu),Math.floor(t/Yu)),ma=[],io=new _i,qu=new Pi;function so(s,t,e=null){return s.updateMatrixWorld(!0),io.setFromObject(s),io.getBoundingSphere(qu),ma.push({object:s,far:t,x:qu.center.x,z:qu.center.z,r:Math.hypot(io.max.x-io.min.x,io.max.z-io.min.z)/2,onLod:e}),s}function Zu(s,t){for(let e=0;e<ma.length;e++){let n=ma[e],i=Math.hypot(n.x-s,n.z-t)-n.r;n.far>0&&(n.object.visible=i<n.far),n.onLod&&n.onLod(i,n.object)}}var kp=()=>({entries:ma.length,visible:ma.filter(s=>s.object.visible).length});function Rn(s,t,e,n,{at:i,set:r,far:o=0,setup:a=null,cloneGeometry:c=!1,chunk:h=Yu}){let l=new Map;t.forEach((u,g)=>{let[x,m]=i(u),p=ur(Math.floor(x/h),Math.floor(m/h)),_=l.get(p);_||l.set(p,_=[]),_.push(g)});let f=new Array(t.length),d=[];for(let u of l.values()){let g=new Ue(c?e.clone():e,n,u.length);u.forEach((x,m)=>{r(g,m,t[x],x),f[x]={mesh:g,index:m}}),g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0),a?.(g,u.map(x=>t[x])),g.computeBoundingSphere(),s.add(g),o>0&&so(g,o),d.push(g)}return{meshes:d,refs:f}}var ce={CURTAIN:0,PUNCHED:1,RIBBON:2,BRICK:3,STUCCO:4,PANEL:5,BLANK:6,DECO:7,GARAGE:8,METAL:9,MOTEL:10,CONDO:11,LOUVRE:12},Vc={PLINTH:0,SHOPS:1,LOBBY:2},Cn={MEMBRANE:0,HELIPAD:1,TERRACE:2,SKYLIGHTS:3,GRAVEL:4},Fs={NONE:0,BASE:1,CROWN:2,BOTH:3},ga={px:1,nx:2,pz:4,nz:8},Hp=({ground:s=0,round:t=!1,roof:e=0,light:n=0,doors:i=0})=>s+(t?4:0)+e*8+n*64+i*256,h_=`
varying vec3 vFacLocal;
flat varying vec4 vFacBox;    // size in metres, world height of the top
flat varying vec4 vFacStyle;  // style, storey height, bay width, seed
flat varying vec4 vFacGlass;  // glass tint, packed options
flat varying vec4 vFacAccent; // accent colour, variant 0..1
uniform float nightFactor;
uniform float worldTime;
uniform float mirrorPass;
uniform vec3 facSun;
float fGlass; float fRough; float fMetal; vec3 fEmit; vec3 fTilt;
#define FAC_IS(k) (1.0 - step(0.5, abs(style - k)))
// Edges are filtered with a straight ramp just over a pixel wide: the facade draws dozens of
// them per pixel, and this is both cheaper and crisper than the smoothstep the ground uses.
float fa_step(float edge, float x, float w) {
  return clamp((x - edge) / max(w * 1.2, 1e-5) + 0.5, 0.0, 1.0);
}
float fa_band(float x, float lo, float hi, float w) {
  float k = 1.0 / max(w * 1.2, 1e-5);
  return clamp((x - lo) * k + 0.5, 0.0, 1.0) - clamp((x - hi) * k + 0.5, 0.0, 1.0);
}

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

// The same trick at street level. A shop has a sales floor behind the glass, with shelves
// of goods on the walls, a tiled floor and strip lights overhead; a lobby has a stone
// floor, panelled walls, a reception desk and downlights. glow is how brightly the
// surface hit is lit when the lights are on.
vec3 paShop(vec2 cell, vec2 size, vec3 V, vec3 T, vec3 N, float seed, float lobby, out float glow) {
  vec3 r = vec3(dot(V, T), V.y, max(-dot(V, N), 0.03));
  float depth = mix(6.5, 10.0, lobby);
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
      float spot = 1.0 - smoothstep(0.1, 0.24, length(fract(hit.xz / 1.9) - 0.5));
      float lamp = mix(strip, spot, lobby);
      col = mix(vec3(0.62), vec3(1.0), lamp);
      glow = mix(0.5, 2.2, lamp);
    } else {
      float tileW = mix(0.6, 1.2, lobby);
      vec2 tile = floor(hit.xz / tileW);
      col = mix(vec3(0.44, 0.42, 0.38), vec3(0.6, 0.57, 0.52), lobby) * (0.84 + 0.16 * mod(tile.x + tile.y, 2.0));
    }
  } else if (lobby > 0.5) {
    // Panelled walls in timber or stone, and a lit reception desk against the back wall.
    vec2 w = t == tz ? hit.xy : hit.zy;
    vec3 panelCol = mix(vec3(0.4, 0.27, 0.17), vec3(0.6, 0.58, 0.54), step(0.5, fract(seed * 0.37)));
    col = panelCol * (0.86 + 0.14 * step(0.06, fract(w.x / 1.3)));
    // (One bay in three has the desk; the rest are seating and bare wall.)
    float desk = t == tz ? step(abs(w.x - size.x * 0.5), 1.7) * step(w.y, 1.1) * step(0.66, fract(seed * 0.618)) : 0.0;
    col = mix(col, vec3(0.8, 0.74, 0.62), desk);
    glow = mix(0.45, 1.1, desk);
    if (t == tx) col *= 0.8;
  } else {
    // Shelving: boards with rows of goods in assorted packaging, plain wall above.
    vec2 w = t == tz ? hit.xy : hit.zy;
    vec2 item = floor(w / vec2(0.24, 0.42)), f = fract(w / vec2(0.24, 0.42));
    vec3 goods = 0.3 + 0.5 * vec3(pa_hash12(item + seed), pa_hash12(item + seed + 7.7), pa_hash12(item + seed + 13.3));
    goods = mix(vec3(dot(goods, vec3(0.3333))), goods, 0.6); // packaging is mostly muted, with the odd bright one
    float onShelf = step(0.17, f.y) * step(0.1, f.x) * step(f.x, 0.9) * step(0.22, pa_hash12(item * 1.7 + seed));
    col = mix(mix(vec3(0.24, 0.21, 0.18), goods, onShelf), vec3(0.72, 0.68, 0.62), step(2.5, w.y));
    if (t == tx) col *= 0.78;
  }
  return col * (1.0 - 0.35 * hit.z / depth);
}
#endif

void paFacade(inout vec3 albedo) {
  fGlass = 0.0; fRough = 0.86; fMetal = 0.0; fEmit = vec3(0.0); fTilt = vec3(0.0);
  float style = vFacStyle.x, floorH = vFacStyle.y, cellW = vFacStyle.z, seed = vFacStyle.w;
  vec3 size = vFacBox.xyz;
  float top = vFacBox.w;
  float code = vFacGlass.w + 0.5;
  float ground = floor(mod(code, 4.0));
  bool isRound = mod(floor(code / 4.0), 2.0) > 0.5;
  float roofT = mod(floor(code / 8.0), 8.0);
  float lightT = mod(floor(code / 64.0), 4.0);
  float doorBits = floor(code / 256.0);
  vec3 tint = vFacGlass.rgb;
  vec3 accent = vFacAccent.rgb;
  float variant = vFacAccent.w;
  vec3 wall = albedo;
  vec3 an = abs(vPaNormalW);
  float y = vPaWorld.y;
  // Height above this part's own base, so the storeys of a setback start at the setback.
  float yb = y - (top - size.y) + 0.16;
  float onGround = step(top - size.y, 1.0);

  // The coordinate along the wall, the wall's width, and its tangent and normal.
  float u, faceW, faceId;
  vec3 Tw, Nw;
  if (isRound) {
    vec2 rd = normalize(vFacLocal.xz + vec2(1e-5, 0.0));
    float radius = size.x * 0.5;
    Nw = vec3(rd.x, 0.0, rd.y); Tw = vec3(-rd.y, 0.0, rd.x);
    u = atan(rd.y, rd.x) * radius; faceW = 6.2831853 * radius; faceId = 5.0;
  } else if (an.x > 0.5) {
    u = vFacLocal.z; faceW = size.z; faceId = vPaNormalW.x > 0.0 ? 1.0 : 2.0;
    Tw = vec3(0.0, 0.0, 1.0); Nw = vec3(sign(vPaNormalW.x), 0.0, 0.0);
  } else {
    u = vFacLocal.x; faceW = size.x; faceId = vPaNormalW.z > 0.0 ? 3.0 : 4.0;
    Tw = vec3(1.0, 0.0, 0.0); Nw = vec3(0.0, 0.0, sign(vPaNormalW.z));
  }
  // Screen-space derivatives are all taken here, before any branch or return:
  // GLSL leaves them undefined in non-uniform control flow, where they can come
  // back as zero and turn the anti-aliasing below into speckled garbage.
  // (Taken from the position, not from u, which jumps where a round wall wraps.)
  float du = max(length(dFdx(vFacLocal.xz)) + length(dFdy(vFacLocal.xz)), 1e-4);
  float dy = max(fwidth(y), 1e-4);
  float groundH = ground > 0.5 ? 4.8 : 0.9;
  float nCols = isRound ? max(floor(faceW / cellW), 3.0) : max(floor((faceW - 1.0) / cellW), 1.0);
  if (isRound) cellW = faceW / nCols;
  float wu = max(du / cellW, 0.0015), wv = max(dy / floorH, 0.0015);
  float hasDoor = mod(floor(doorBits / exp2(faceId - 1.0)), 2.0);
  #ifdef FACADE_LOW
    float grime = 0.5; // distant chunks skip the noise
    float fine = 0.0;
  #else
    float grime = pa_fbm3(vPaWorld.xz * 0.15 + vec2(0.0, y * 0.4));
    float fine = 1.0 - smoothstep(0.04, 0.16, max(du, dy)); // small detail fades before it can shimmer
  #endif

  if (an.y > 0.5) {
    // --- Roof -----------------------------------------------------------------
    float edge = isRound ? size.x * 0.5 - length(vFacLocal.xz) : min(size.x * 0.5 - abs(vFacLocal.x), size.z * 0.5 - abs(vFacLocal.z));
    vec2 rl = vFacLocal.xz;
    vec3 roof = vec3(0.36, 0.36, 0.35);
    fRough = 0.9;
    if (roofT > 3.5) {
      // Gravel ballast.
      roof = vec3(0.47, 0.44, 0.39);
      #ifndef FACADE_LOW
        roof *= 0.82 + 0.36 * pa_noise(vPaWorld.xz * 9.0) * fine + 0.18 * (1.0 - fine);
      #endif
    } else if (roofT > 2.5) {
      // Standing-seam metal with rows of skylights.
      bool longX = size.x > size.z;
      float along = longX ? rl.x : rl.y, across = longX ? rl.y : rl.x, halfW = (longX ? size.z : size.x) * 0.5;
      float rib = 1.0 - pa_band(fract(across / 0.6), 0.08, 0.92, du / 0.6);
      roof = vec3(0.5, 0.52, 0.53) * (1.0 - rib * 0.22 * fine);
      float sky = pa_band(fract(along / 9.0), 0.15, 0.85, du / 9.0) * pa_band(abs(across), halfW * 0.34, halfW * 0.34 + 1.7, du) * step(3.0, edge);
      roof = mix(roof, tint * 0.5, sky);
      fEmit = vec3(1.0, 0.9, 0.7) * sky * nightFactor * 0.5 * step(0.4, pa_hash12(vec2(seed, 1.0)));
      fRough = mix(0.5, 0.1, sky); fMetal = mix(0.6, 0.3, sky); fGlass = sky;
    } else if (roofT > 1.5) {
      // Terrace: pavers, with planting round the edge.
      vec2 ft = fract(rl / 0.8);
      float joint = 1.0 - pa_band(ft.x, 0.03, 0.97, du / 0.8) * pa_band(ft.y, 0.03, 0.97, du / 0.8);
      roof = vec3(0.56, 0.53, 0.48) * (1.0 - joint * 0.3 * fine);
      float planted = pa_band(edge, 1.0, 3.4, du) * step(0.42, pa_noise(vPaWorld.xz * 0.13 + seed));
      roof = mix(roof, vec3(0.16, 0.3, 0.12) * (0.6 + 0.8 * pa_noise(vPaWorld.xz * 1.9)), planted);
    } else {
      // Membrane, laid in strips.
      #ifndef FACADE_LOW
        roof *= 0.9 + pa_noise(vPaWorld.xz * 4.0) * 0.2;
      #endif
      float seam = 1.0 - pa_band(fract(rl.x / 3.0), 0.015, 0.985, du / 3.0);
      roof *= 1.0 - seam * 0.3 * fine;
      if (roofT > 0.5 && min(size.x, size.z) > 20.0) {
        // Helipad.
        float hr = length(rl);
        vec2 hp = abs(rl);
        float ring = pa_band(hr, 6.6, 7.2, du);
        float bars = pa_band(hp.x, 1.3, 1.9, du) * (1.0 - pa_aastep(2.6, hp.y, du));
        float cross = (1.0 - pa_aastep(1.9, hp.x, du)) * (1.0 - pa_aastep(0.3, hp.y, du));
        roof = mix(roof, vec3(0.2, 0.25, 0.24), (1.0 - pa_aastep(7.2, hr, du)) * 0.75);
        roof = mix(roof, vec3(0.86, 0.83, 0.7), clamp(ring + bars + cross, 0.0, 1.0));
      }
    }
    roof *= 0.8 + grime * 0.4;
    // The parapet throws a shadow on the roof inside it; its coping is the wall's stone.
    roof *= mix(0.6, 1.0, smoothstep(0.5, 1.8, edge));
    albedo = mix(wall * 0.9, roof, pa_aastep(0.5, edge, du));
    return;
  }

  // Base dirt and vertical rain streaks.
  #ifndef FACADE_LOW
    float streak = pa_noise(vec2(u * 1.3 + faceId * 31.0, y * 0.05)) * pa_noise(vec2(u * 0.4, y * 0.3 + seed));
    wall *= 1.0 - smoothstep(0.35, 0.8, streak) * 0.18;
  #endif
  wall *= 0.88 + grime * 0.24;
  wall *= mix(0.72, 1.0, smoothstep(0.0, 2.5, y));

  if (FAC_IS(6.0) > 0.5) { albedo = wall; return; }

  if (FAC_IS(12.0) > 0.5) {
    // Plant screen: louvre blades, each shading the one below.
    float blade = fract(yb / 0.24);
    float bladeFade = 1.0 - smoothstep(0.25, 0.7, dy / 0.24);
    albedo = wall * mix(0.74, 0.5 + 0.55 * smoothstep(0.0, 0.85, blade), bladeFade);
    fRough = 0.5; fMetal = 0.55;
    return;
  }

  float isBrick = FAC_IS(3.0), isDeco = FAC_IS(7.0);
  if (isBrick > 0.5) {
    // Brick: running bond, faded out with distance.
    vec2 b = vec2(u / 0.24, yb / 0.085);
    b.x += step(1.0, mod(floor(b.y), 2.0)) * 0.5;
    float fw = max(du / 0.24, dy / 0.085);
    vec2 f = fract(b);
    float mortar = (1.0 - pa_band(f.x, 0.06, 1.0, fw)) + (1.0 - pa_band(f.y, 0.12, 1.0, fw));
    mortar = clamp(mortar, 0.0, 1.0) * (1.0 - smoothstep(0.25, 0.6, fw));
    wall *= 0.88 + pa_hash12(floor(b)) * 0.22 * (1.0 - smoothstep(0.3, 0.8, fw));
    wall = mix(wall, vec3(0.52, 0.5, 0.46), mortar * 0.55);
  }
  #ifndef FACADE_LOW
    if (isDeco > 0.5) {
      // Dressed stone: coursed blocks with fine joints.
      vec2 b = vec2(u / 1.15, yb / 0.52);
      b.x += step(1.0, mod(floor(b.y), 2.0)) * 0.5;
      vec2 f = fract(b);
      float joint = 1.0 - pa_band(f.x, 0.012, 0.988, du / 1.15) * pa_band(f.y, 0.025, 0.975, dy / 0.52);
      wall *= 1.0 + (pa_hash12(floor(b) + seed) - 0.5) * 0.1 * fine;
      wall *= 1.0 - joint * 0.3 * fine;
    }
    if (style > 3.5 && style < 4.5 || style > 9.5 && style < 10.5) wall *= 0.95 + 0.1 * pa_noise(vec2(u, y) * 7.0) * fine + 0.05 * (1.0 - fine);
  #endif

  // --- Street level: shop fronts or a lobby -----------------------------------
  if (ground > 0.5 && yb < 4.8) {
    bool lobby = ground > 1.5;
    float nBay = max(floor(faceW / (lobby ? 4.6 : 6.0)), 1.0);
    float bayW = faceW / nBay;
    float su = (u + faceW * 0.5) / bayW;
    float sid = floor(su), sf = fract(su);
    float m = sf * bayW; // metres from the bay's left edge
    float h = pa_hash12(vec2(sid + faceId * 17.0, seed * 3.1));
    float hB = pa_hash12(vec2(sid * 2.3 + faceId * 5.0, seed * 1.7 + 4.0));
    float pierW = lobby ? 0.42 : 0.3;
    float pier = 1.0 - pa_band(m, pierW, bayW - pierW, du);
    float cornice = pa_aastep(4.5, yb, dy);
    vec3 pierCol = wall * 0.94;
    float glass, lit, glowAmt;
    vec3 warm;
    if (!lobby) {
      // Each bay is one shop: tiled stall riser, display window in panes, a glazed door
      // with a light over it, then the fascia that carries the sign.
      float span = bayW - 2.0 * pierW;
      float nPane = max(floor(span / 1.5), 2.0);
      float paneW = span / nPane;
      float pf = (m - pierW) / paneW;
      float mull = 1.0 - pa_band(fract(pf), 0.028, 0.972, du / paneW);
      float doorPane = step(0.5, fract(h * 7.0)) * (nPane - 1.0);
      float isDoor = (1.0 - pier) * (1.0 - step(0.5, abs(floor(pf) - doorPane)));
      float dm = abs(fract(pf) - 0.5) * paneW; // metres from the middle of the pane
      float leaf = 1.0 - pa_aastep(paneW * 0.5 - 0.1, dm, du);
      float riser = 1.0 - pa_aastep(0.55, yb, dy);
      float display = (1.0 - mull) * pa_band(yb, 0.55, 3.5, dy);
      float doorGlass = max(leaf * pa_band(yb, 0.42, 2.2, dy), (1.0 - mull) * pa_band(yb, 2.42, 3.5, dy));
      glass = (1.0 - pier) * mix(display, doorGlass, isDoor);
      vec3 frameCol = mix(vec3(0.07, 0.065, 0.06), vec3(0.8, 0.78, 0.73), step(0.7, h));
      frameCol = mix(frameCol, vec3(0.1, 0.2, 0.15), step(0.86, h));
      vec3 riserCol = mix(mix(vec3(0.1, 0.11, 0.12), vec3(0.3, 0.1, 0.08), step(0.3, hB)), mix(vec3(0.12, 0.25, 0.24), vec3(0.7, 0.66, 0.58), step(0.8, hB)), step(0.55, hB));
      float tile = (1.0 - pa_band(fract(m / 0.15), 0.07, 0.93, du / 0.15)) + (1.0 - pa_band(fract(yb / 0.15), 0.07, 0.93, dy / 0.15));
      riserCol *= 1.0 - clamp(tile, 0.0, 1.0) * 0.35 * fine;
      float fascia = pa_band(yb, 3.7, 4.5, dy) * (1.0 - pier);
      // Palette picks use step/mix rather than nested ternaries, which some
      // shader compilers evaluate inconsistently across a pixel quad.
      vec3 fasciaCol = mix(vec3(0.08, 0.09, 0.1), vec3(0.5, 0.12, 0.08), step(0.33, h));
      fasciaCol = mix(fasciaCol, vec3(0.12, 0.25, 0.3), step(0.55, h));
      fasciaCol = mix(fasciaCol, vec3(0.75, 0.68, 0.55), step(0.75, h));
      albedo = mix(frameCol, riserCol, riser * (1.0 - isDoor));
      albedo = mix(albedo, frameCol * 1.5 + 0.03, isDoor * leaf * (1.0 - pa_aastep(0.42, yb, dy))); // kick plate
      albedo = mix(albedo, wall * 0.86, pa_aastep(3.56, yb, dy));
      albedo = mix(albedo, fasciaCol, fascia);
      albedo = mix(albedo, pierCol * (0.8 + 0.2 * pa_aastep(0.5, yb, dy)), pier);
      float pull = isDoor * pa_band(dm, paneW * 0.5 - 0.24, paneW * 0.5 - 0.19, du) * pa_band(yb, 0.95, 1.45, dy);
      albedo = mix(albedo, vec3(0.7, 0.7, 0.68), pull * (1.0 - pier));
      glass *= 1.0 - pull;
      lit = step(0.15, pa_hash12(vec2(sid * 3.7, faceId + seed)));
      warm = mix(vec3(1.0, 0.75, 0.45), vec3(0.95, 0.95, 0.85), step(0.6, h));
      glowAmt = 0.25 + 0.75 * pa_hash12(vec2(sid * 1.3 + 7.0, faceId * 3.0 + seed));
      fEmit = fasciaCol * fascia * step(0.5, h) * nightFactor * 0.9;
      fRough = 0.75;
    } else {
      // Lobby: tall glazing between stone piers, with the doors in the middle bay of a
      // street front and a band of light under the stone above.
      float entry = hasDoor * (1.0 - step(0.5, abs(sid - floor(nBay * 0.5))));
      float em = abs(m - bayW * 0.5);
      float inDoor = entry * (1.0 - pa_aastep(2.62, yb, dy));
      float stiles = inDoor * (pa_band(em, 0.9, 0.98, du) + (1.0 - pa_aastep(0.03, em, du)));
      float bars = pa_band(yb, 2.62, 2.7, dy) + (1.0 - pa_aastep(0.035, em, du)) * (1.0 - entry) + stiles;
      float pull = inDoor * pa_band(em, 0.1, 0.14, du) * pa_band(yb, 0.85, 1.5, dy);
      glass = (1.0 - pier) * pa_band(yb, 0.14, 4.1, dy) * (1.0 - clamp(bars, 0.0, 1.0)) * (1.0 - pull);
      float steel = step(0.6, fract(seed * 5.3));
      vec3 frameCol = mix(vec3(0.075, 0.07, 0.065), vec3(0.6, 0.61, 0.62), steel);
      float dark = step(0.55, fract(seed * 3.7));
      pierCol = mix(wall * 0.96, vec3(0.13, 0.13, 0.14) * (0.8 + grime * 0.4), dark);
      float header = pa_aastep(4.1, yb, dy);
      albedo = frameCol;
      albedo = mix(albedo, mix(wall * 0.9, accent, 0.55), header);
      albedo = mix(albedo, pierCol, pier);
      albedo = mix(albedo, vec3(0.74, 0.74, 0.72), pull);
      // A line of light along the head of the glazing.
      float led = pa_band(yb, 4.1, 4.18, dy) * (1.0 - pier);
      fEmit = vec3(1.0, 0.86, 0.66) * led * nightFactor * 2.2;
      lit = 1.0;
      warm = mix(vec3(1.0, 0.8, 0.55), vec3(0.95, 0.93, 0.86), step(0.5, fract(seed * 0.37)));
      glowAmt = 0.36;
      fRough = mix(0.5, mix(0.55, 0.28, dark), pier);
      fMetal = (1.0 - pier) * (1.0 - header) * mix(0.3, 0.8, steel);
    }
    // Moulding over the ground floor, with the shadow it casts.
    albedo = mix(albedo, wall * 1.06, cornice);
    albedo *= 1.0 - pa_band(yb, 4.42, 4.52, dy) * 0.4;
    albedo = mix(albedo, vec3(0.03, 0.035, 0.04), glass);
    fGlass = glass;
    fRough = mix(fRough, 0.04, glass);
    fMetal = mix(fMetal, 0.2, glass);
    fEmit += warm * glass * lit * glowAmt * (0.45 + 0.55 * smoothstep(0.45, 3.5, yb)) * mix(0.05, 0.62, nightFactor);
    #ifndef FACADE_LOW
      // Up close the glass shows the room behind it.
      vec3 toShop = vPaWorld - cameraPosition;
      // (Not in the mirror: seen from under the street a shop is all ceiling lights.)
      float nearShop = (1.0 - smoothstep(55.0, 110.0, length(toShop))) * glass * (1.0 - mirrorPass);
      if (nearShop > 0.01) {
        float shopLight;
        vec3 shopRoom = paShop(vec2(m, yb), vec2(bayW, lobby ? 4.2 : 3.7), normalize(toShop), Tw, Nw, sid * 3.7 + seed, lobby ? 1.0 : 0.0, shopLight);
        albedo = mix(albedo, shopRoom * 0.26, nearShop * 0.6 * (1.0 - nightFactor * 0.7));
        fEmit = mix(fEmit, warm * shopRoom * shopLight * lit * (0.5 + 0.5 * glowAmt) * mix(0.04, lobby ? 0.5 : 0.85, nightFactor), nearShop);
      }
    #endif
    fTilt = vec3(h - 0.5, 0.0, 0.0) * 0.02 * glass;
    return;
  }

  if (FAC_IS(8.0) > 0.5) {
    // Parking garage: a concrete spandrel per deck, the open deck above it
    // dark inside, with parked cars and strip lights under each slab.
    float cv8 = (yb - 0.3) / floorH;
    float fv8 = fract(cv8), row8 = floor(cv8);
    float wv8 = max(dy / floorH, 0.0015);
    float pu = (u + faceW * 0.5) / 2.7;
    float wb = max(du / 2.7, 0.0015);
    float top8 = 1.0 - pa_aastep(top - 1.1, y, dy);
    float spand = 1.0 - pa_aastep(0.34, fv8, wv8);
    float column = pa_band(fract(pu / 3.0), 0.0, 0.06, wb / 3.0);
    float open = (1.0 - spand) * (1.0 - column) * top8 * step(0.0, cv8);
    float carId = floor(pu / 2.0);
    float ch = pa_hash12(vec2(carId + faceId * 41.0, row8 + seed));
    float cf = fract(pu / 2.0);
    // Only a parked car's roof and windows show over the wall of its deck.
    float lean = (fv8 - 0.34) * 1.1;
    float cabin = pa_band(cf, 0.24 + lean, 0.76 - lean, wb * 0.5) * pa_band(fv8, 0.34, 0.5, wv8);
    float carGlass = pa_band(cf, 0.28 + lean, 0.72 - lean, wb * 0.5) * pa_band(fv8, 0.345, 0.468, wv8) * (1.0 - pa_band(cf, 0.488, 0.512, wb * 0.5));
    float car = cabin * step(0.35, ch) * open;
    vec3 carCol = mix(mix(vec3(0.62), vec3(0.05), step(0.5, ch)), vec3(0.4, 0.08, 0.06), step(0.82, ch));
    carCol = mix(mix(carCol, vec3(0.16, 0.26, 0.4), step(0.92, ch)), vec3(0.03, 0.04, 0.05), carGlass);
    // Board marks on the concrete, and a painted band along each spandrel.
    float band8 = pa_band(fv8, 0.12, 0.22, wv8) * spand * step(0.5, variant);
    albedo = mix(wall, accent, band8 * 0.85);
    albedo = mix(albedo, vec3(0.025, 0.027, 0.03), open);
    albedo = mix(albedo, carCol, car);
    float strip = pa_band(fv8, 0.9, 0.95, wv8) * pa_band(cf, 0.3, 0.7, wb * 0.5) * open;
    fEmit = vec3(0.85, 0.95, 1.0) * strip * mix(0.35, 2.2, nightFactor) + vec3(0.6, 0.7, 0.8) * open * (1.0 - car) * nightFactor * 0.05;
    fRough = mix(0.9, 0.45, car);
    fMetal = car * 0.45;
    return;
  }

  if (FAC_IS(9.0) > 0.5) {
    // Warehouse: corrugated metal on a block base, clerestory windows and roll-up doors.
    float corrFade = 1.0 - smoothstep(0.08, 0.25, du / 0.2);
    float corr = 0.5 + 0.5 * sin(u * 6.2832 / 0.2);
    albedo = wall * (0.86 + 0.14 * mix(0.5, corr, corrFade));
    float base9 = 1.0 - pa_aastep(1.2, yb, dy);
    albedo = mix(albedo, vec3(0.5, 0.49, 0.46) * (0.85 + grime * 0.3), base9);
    float pu9 = (u + faceW * 0.5) / 3.0;
    float clere = pa_band(y, top - 3.2, top - 1.7, dy) * pa_band(fract(pu9), 0.08, 0.92, du / 3.0);
    float dp = (u + faceW * 0.5) / 6.0;
    float doorId = floor(dp);
    float hasRoll = step(0.45, pa_hash12(vec2(doorId + faceId * 13.0, seed)));
    float door = pa_band(fract(dp), 0.15, 0.85, du / 6.0) * pa_band(yb, 0.0, 4.6, dy) * hasRoll;
    float slatFade = 1.0 - smoothstep(0.05, 0.15, dy / 0.25);
    float slats = mix(0.92, 0.84 + 0.16 * step(0.5, fract(yb / 0.25)), slatFade);
    vec3 doorCol = mix(vec3(0.55, 0.56, 0.55), vec3(0.62, 0.36, 0.18), step(0.75, pa_hash12(vec2(doorId, seed * 2.0))));
    // A painted stripe along the eaves in the company colour.
    albedo = mix(albedo, accent, pa_band(y, top - 1.25, top - 0.55, dy) * 0.9);
    albedo = mix(albedo, doorCol * slats, door);
    albedo = mix(albedo, tint * 0.3, clere);
    fGlass = clere;
    fMetal = mix(mix(mix(0.55, 0.0, base9), 0.3, door), 0.2, clere);
    fRough = mix(mix(mix(0.5, 0.9, base9), 0.6, door), 0.08, clere);
    fEmit = vec3(1.0, 0.85, 0.6) * clere * nightFactor * 0.55 * step(0.5, pa_hash12(vec2(floor(pu9), seed)));
    return;
  }

  // --- Upper floors: the window grid ------------------------------------------
  float cu = u / cellW + nCols * 0.5;
  float cv = (yb - groundH) / floorH;
  float nRows = max(floor((size.y + 0.16 - 1.3 - groundH) / floorH + 0.02), 0.0);
  float colId = floor(cu), rowId = floor(cv);
  float fu = fract(cu), fv = fract(cv);
  float inU = isRound ? 1.0 : pa_band(cu, 0.0, nCols, wu);
  float inGrid = inU * pa_band(cv, 0.0, nRows, wv);
  float isCurtain = 1.0 - step(0.5, style);
  float isPunched = FAC_IS(1.0), isRibbon = FAC_IS(2.0), isStucco = FAC_IS(4.0), isPanel = FAC_IS(5.0);
  float isMotel = FAC_IS(10.0), isCondo = FAC_IS(11.0);

  // The opening in each bay (as fractions of the bay) and how far the glass sits back.
  float u0 = 0.2, u1 = 0.8, v0 = 0.26, v1 = 0.86, inset = 0.3;
  if (style < 0.5) { u0 = 0.03; u1 = 0.97; v0 = 0.24; v1 = 0.985; inset = 0.05; }
  else if (style < 1.5) { u0 = 0.2; u1 = 0.8; v0 = 0.26; v1 = 0.86; inset = 0.3; }
  else if (style < 2.5) { u0 = -0.5; u1 = 1.5; v0 = 0.34; v1 = 0.9; inset = 0.2; }
  else if (style < 3.5) { u0 = 0.24; u1 = 0.76; v0 = 0.24; v1 = 0.84; inset = 0.24; }
  else if (style < 4.5) { u0 = 0.32; u1 = 0.68; v0 = 0.24; v1 = 0.8; inset = 0.32; }
  else if (style < 5.5) { u0 = 0.14; u1 = 0.86; v0 = 0.07; v1 = 0.93; inset = 0.22; }
  else if (style < 7.5) { u0 = 0.3; u1 = 0.7; v0 = 0.1; v1 = 0.92; inset = 0.36; }
  else if (style < 10.5) { u0 = 0.52; u1 = 0.88; v0 = 0.3; v1 = 0.75; inset = 0.18; }
  else { u0 = 0.05; u1 = 0.95; v0 = 0.06; v1 = 0.96; inset = 0.12; }
  vec2 lo = vec2(u0, v0), hi = vec2(u1, v1);
  vec2 cellSz = vec2(cellW, floorH);
  vec2 pcell = vec2(fu, fv);
  vec2 ww = vec2(wu, wv);

  float h1 = pa_hash12(vec2(colId + faceId * 97.0 + seed * 13.0, rowId + seed * 7.0));
  float h2 = pa_hash12(vec2(rowId * 1.7 + seed, colId * 3.1 + faceId));
  float h3 = pa_hash12(vec2(colId * 5.3 + seed, rowId * 2.3));

  // Recess: the glass sits behind the wall face, so the ray is followed that far in. Where
  // it lands on glass you see the window; where it runs into the side of the opening you
  // see the reveal: the jamb on the far side, the head from below, the sill from above.
  vec2 pg = pcell;
  vec3 revealTone = vec3(0.55);
  float shade = 0.0;
  #ifndef FACADE_LOW
    vec3 toPix = vPaWorld - cameraPosition;
    float dist = length(toPix);
    vec3 Vw = toPix / dist;
    float day = 1.0 - nightFactor;
    float depth = inset * (1.0 - smoothstep(120.0, 300.0, dist));
    vec2 shift = clamp(vec2(dot(Vw, Tw), Vw.y) / max(-dot(Vw, Nw), 0.06) * depth, -cellSz * 0.9, cellSz * 0.9);
    pg = pcell + shift / cellSz;
    vec2 room = mix(pcell - lo, hi - pcell, step(0.0, shift)) * cellSz;
    vec2 tExit = room / max(abs(shift), 1e-5);
    float sideHit = step(tExit.x, tExit.y);
    vec3 sunF = vec3(dot(facSun, Tw), facSun.y, dot(facSun, Nw));
    float sunny = smoothstep(0.02, 0.2, sunF.z) * day;
    float jamb = mix(0.62, mix(0.5, 1.12, smoothstep(-0.05, 0.35, -sign(shift.x) * sunF.x)), sunny);
    float headSill = shift.y > 0.0 ? 0.42 : mix(0.8, 1.1, sunny);
    revealTone = vec3(mix(headSill, jamb, sideHit));
    // The head and jambs shade the top and one side of the glass when the sun is on the wall.
    vec2 sp = pg + sunF.xy / max(sunF.z, 0.08) * depth / cellSz;
    shade = sunny * (1.0 - pa_band(sp.x, u0, u1, wu) * pa_band(sp.y, v0, v1, wv));
  #endif

  float open = pa_band(fu, u0, u1, wu) * pa_band(fv, v0, v1, wv) * inGrid;
  float onGlass = pa_band(pg.x, u0, u1, wu) * pa_band(pg.y, v0, v1, wv);
  // Rainscreen cladding leaves about a third of its bays as solid panels.
  float solid = isPanel * step(h3, 0.34);
  open *= 1.0 - solid;
  #ifndef FACADE_LOW
    if (isStucco > 0.5 && fract(seed * 1.7) > 0.5) {
      // Round-headed windows.
      float rw = (u1 - u0) * cellW * 0.5;
      float springY = v1 * floorH - rw;
      vec2 a0 = vec2((fu - 0.5) * cellW, fv * floorH - springY);
      vec2 a1 = vec2((pg.x - 0.5) * cellW, pg.y * floorH - springY);
      float aw = max(du, dy);
      open *= a0.y > 0.0 ? 1.0 - pa_aastep(rw, length(a0), aw) : 1.0;
      onGlass *= a1.y > 0.0 ? 1.0 - pa_aastep(rw, length(a1), aw) : 1.0;
    }
  #endif
  // The front door: in the middle bay, replacing the window above the plinth.
  float doorCol = floor(nCols * 0.5);
  float isDoorFace = hasDoor * (1.0 - step(0.5, ground)) * onGround * (1.0 - isMotel);
  float dmx = (cu - doorCol - 0.5) * cellW;
  float doorCell = isDoorFace * (1.0 - step(0.5, abs(colId - doorCol))) * (1.0 - step(0.5, abs(rowId)));
  open *= 1.0 - doorCell;

  float win = open * onGlass;
  float reveal = open - win;

  // Glazing: the frame round the glass and the bars that divide it, drawn at the depth of
  // the glass so they move behind the opening as you pass.
  vec2 gs = (hi - lo) * cellSz;             // size of the glazing, metres
  vec2 g = (pg - lo) / (hi - lo);           // position across it, 0..1
  vec2 gw = ww / (hi - lo);
  float sashT = mix(0.055, 0.07, isBrick + isStucco);
  float sash = 1.0 - pa_band(g.y, sashT / gs.y, 1.0 - sashT / gs.y, gw.y) * mix(pa_band(g.x, sashT / gs.x, 1.0 - sashT / gs.x, gw.x), 1.0, isRibbon);
  float midBar = (isPunched + isCondo + isBrick * step(0.5, variant)) * (1.0 - pa_band(abs(g.x - 0.5), 0.022 / gs.x, 2.0, gw.x));
  float rail = (isBrick + isStucco + isMotel) * (1.0 - pa_band(abs(g.y - 0.5), 0.028 / gs.y, 2.0, gw.y));
  float bayBar = isRibbon * (1.0 - pa_band(fract(pg.x), 0.016, 0.984, wu));
  float bars = clamp(sash + midBar + rail + bayBar, 0.0, 1.0);
  #ifdef FACADE_LOW
    bars *= 0.5; // too fine to resolve at this distance: only their average tone is kept
  #endif
  float pane = win * (1.0 - bars);

  float painted = max(max(isStucco, isMotel), isBrick * step(0.4, fract(seed * 2.3)));
  vec3 frameCol = mix(vec3(0.07, 0.075, 0.08), vec3(0.93, 0.91, 0.85), painted);
  frameCol = mix(frameCol, wall, isCurtain);
  frameCol = mix(frameCol, vec3(0.32, 0.24, 0.15), isDeco);
  frameCol = mix(frameCol, vec3(0.78, 0.79, 0.8), isCondo);

  // Office floors tend to be lit in whole runs, homes window by window.
  float floorLit = pa_hash12(vec2(rowId + seed * 5.0, faceId));
  float office = max(max(1.0 - step(2.5, style), isDeco), isPanel);
  float litP = mix(mix(0.04, 0.48, nightFactor), mix(0.05, 0.62, nightFactor) * (0.6 + floorLit * 0.8), office);
  // Windows smaller than a pixel take the average, so a distant skyline holds still.
  float tiny = smoothstep(0.3, 0.75, max(wu, wv));
  float lit = mix(step(h1, litP), litP, tiny);

  // Glass by day: the tint, with blinds pulled to different heights and curtains at the sides.
  vec3 glassCol = tint * (mix(0.32, 0.42, isCurtain) + mix(h2, 0.5, tiny) * 0.3);
  float gy = clamp(g.y, 0.0, 1.0);
  float drop = step(0.48, h3) * (0.12 + 0.7 * fract(h3 * 9.7)) * (1.0 - isCurtain * 0.5);
  float blind = pa_aastep(1.0 - drop, gy, gw.y) * step(0.01, drop) * (1.0 - tiny);
  float slats = mix(1.0, 0.82 + 0.18 * step(0.5, fract(gy * gs.y / 0.06)), step(0.7, h2) * (1.0 - smoothstep(0.1, 0.3, dy / 0.06)));
  vec3 blindCol = mix(vec3(0.6, 0.58, 0.54), vec3(0.42, 0.4, 0.37), step(0.75, h2)) * slats;
  float drape = (1.0 - office) * step(0.55, fract(h3 * 3.3)) * (1.0 - pa_band(g.x, 0.08 + 0.2 * h2, 0.92 - 0.2 * h2, gw.x)) * (1.0 - tiny);
  vec3 drapeCol = mix(vec3(0.62, 0.58, 0.5), vec3(0.5, 0.42, 0.4), step(0.6, h1));
  glassCol = mix(glassCol, blindCol * (tint * 0.6 + 0.4), blind * 0.72);
  glassCol = mix(glassCol, drapeCol * (tint * 0.5 + 0.45), drape * (1.0 - blind) * 0.7);

  // Curtain wall: the band at each floor is opaque glass, a metal panel, or nothing at all.
  float spandrel = 0.0;
  vec3 spandrelCol = tint * 0.16;
  float metalBand = 0.0;
  if (style < 0.5) {
    spandrel = inU * (1.0 - pa_band(fv, v0, 1.0, wv)) * inGrid * pa_band(fu, u0, u1, wu);
    metalBand = step(0.4, variant) * (1.0 - step(0.7, variant));
    spandrelCol = mix(spandrelCol, accent, metalBand);
    spandrelCol = mix(spandrelCol, tint * 0.42, step(0.7, variant));
  }

  // The wall itself: panel joints on precast and metal cladding, tone from panel to panel.
  albedo = wall;
  #ifndef FACADE_LOW
    float clad = max(max(isPunched, isRibbon), max(isPanel, isCondo));
    if (clad > 0.5) {
      float joint = (1.0 - pa_band(fu, 0.012 / cellW, 1.0 - 0.012 / cellW, wu)) + (1.0 - pa_band(fv, 0.012 / floorH, 1.0 - 0.012 / floorH, wv));
      albedo *= 1.0 + (h2 - 0.5) * 0.07 * fine * inGrid;
      albedo *= 1.0 - clamp(joint, 0.0, 1.0) * 0.3 * fine * inGrid;
    }
  #endif
  albedo = mix(albedo, mix(wall * 0.55, accent, 0.75), solid * step(h3, 0.1) * inGrid);

  // Casings on the wall face: sills, lintels, shutters, piers and panels.
  vec3 stone = vec3(0.74, 0.7, 0.62) * (0.9 + grime * 0.2);
  if (isBrick + isStucco + isPunched > 0.5) {
    float across = pa_band(fu, u0 - 0.03, u1 + 0.03, wu) * inGrid * (1.0 - doorCell);
    float sill = across * pa_band(fv, v0 - 0.13 / floorH, v0, wv) * (1.0 - solid);
    float lintel = pa_band(fu, u0 - 0.045, u1 + 0.045, wu) * pa_band(fv, v1, v1 + 0.24 / floorH, wv) * inGrid * (1.0 - doorCell);
    albedo = mix(albedo, stone, sill * max(isBrick, max(isStucco, isPunched * 0.7)));
    albedo = mix(albedo, stone, lintel * isBrick);
    // The sill's shadow on the wall under it.
    albedo *= 1.0 - across * pa_band(fv, v0 - 0.2 / floorH, v0 - 0.13 / floorH, wv) * 0.3 * max(isBrick, isStucco);
  }
  if (isDeco > 0.5) {
    // Art deco: raised piers between windows, bronze spandrel panels with a chevron,
    // a cornice every six floors.
    float pier = (pa_band(fu, 0.0, 0.13, wu) + pa_band(fu, 0.87, 1.0, wu)) * inGrid;
    float panel = pa_band(fu, u0, u1, wu) * (1.0 - pa_band(fv, v0, v1, wv)) * inGrid;
    float corn = pa_band(fract(cv / 6.0), 0.0, 0.025, wv / 6.0) * inGrid;
    float pv = fract(fv + 1.0 - v1) / (1.0 - v1 + v0);
    float zig = abs(fract(pv * 2.5 + abs(fu - 0.5) * 5.0) - 0.5) * 2.0;
    float chevron = (1.0 - pa_aastep(0.32, zig, wv * 14.0 + 0.02)) * fine;
    albedo = mix(albedo, wall * 1.16, pier * (1.0 - open));
    albedo = mix(albedo, mix(wall * 0.42 + vec3(0.02), accent * 0.8, chevron * 0.85), panel);
    albedo = mix(albedo, wall * 1.25, corn);
  }
  if (isMotel > 0.5) {
    // Motel rooms: a painted door beside each window.
    float door = pa_band(fu, 0.1, 0.36, wu) * pa_band(fv, 0.0, 0.8, wv) * inGrid;
    vec3 doorPaint = mix(vec3(0.1, 0.42, 0.45), vec3(0.72, 0.28, 0.2), step(0.5, pa_hash12(vec2(seed, 3.0))));
    albedo = mix(albedo, doorPaint * (0.9 + 0.1 * h2), door);
    albedo = mix(albedo, vec3(0.85, 0.78, 0.5), door * pa_band(fu, 0.31, 0.33, wu) * pa_band(fv, 0.38, 0.42, wv));
  }
  if (isStucco > 0.5) {
    // Painted shutters beside stucco windows.
    float shutter = (pa_band(fu, u0 - 0.15, u0 - 0.035, wu) + pa_band(fu, u1 + 0.035, u1 + 0.15, wu)) * pa_band(fv, v0, v1, wv) * inGrid * (1.0 - doorCell) * step(fract(seed * 1.7), 0.5);
    vec3 shutterCol = mix(mix(vec3(0.12, 0.3, 0.26), vec3(0.15, 0.25, 0.42), step(0.33, h2)), vec3(0.45, 0.2, 0.12), step(0.66, h2));
    float louvre = 0.85 + 0.15 * step(0.5, fract(fv * floorH / 0.09)) * fine;
    albedo = mix(albedo, shutterCol * louvre, shutter);
  }
  if (isBrick > 0.5 && variant > 0.5) {
    // Stone quoins up the corners.
    float quoin = (1.0 - pa_aastep(faceW * 0.5 - 0.02, abs(u), du)) * pa_aastep(faceW * 0.5 - mix(0.42, 0.62, step(0.5, fract(yb / 0.7))), abs(u), du);
    albedo = mix(albedo, stone, quoin * step(groundH, yb) * (1.0 - smoothstep(0.2, 0.5, dy / 0.35)));
  }

  // Plinth: a darker base course, painted on stucco.
  float plinth = (1.0 - pa_aastep(0.9, yb, dy)) * (1.0 - step(0.5, ground)) * onGround;
  vec3 plinthCol = mix(wall * 0.74, mix(wall * 0.7, accent, 0.6), max(isStucco, isMotel));
  plinthCol = mix(plinthCol, vec3(0.46, 0.44, 0.41) * (0.8 + grime * 0.4), isBrick);
  albedo = mix(albedo, plinthCol, plinth);
  albedo *= 1.0 - pa_band(yb, 0.9, 0.96, dy) * 0.25 * plinth;
  // Coping along the top.
  float coping = pa_aastep(top - 0.24, y, dy);
  albedo = mix(albedo, mix(wall * 1.1, stone, isBrick), coping * (1.0 - isCurtain));

  if (isDoorFace > 0.5 && abs(dmx) < 3.2 && yb < 5.4) {
    // Steps, a painted door in its frame with a small light in it, and a lamp above.
    float dh = pa_hash12(vec2(seed * 2.9, faceId));
    float frame = pa_band(dmx, -0.66, 0.66, du) * pa_band(yb, 0.18, 2.52, dy);
    float leafD = pa_band(dmx, -0.54, 0.54, du) * pa_band(yb, 0.22, 2.4, dy);
    float lite = pa_band(dmx, -0.3, 0.3, du) * pa_band(yb, 1.55, 2.15, dy);
    float knob = (1.0 - pa_aastep(0.05, length(vec2(dmx - 0.4, yb - 1.15)), max(du, dy)));
    float steps = pa_band(dmx, -1.0, 1.0, du) * (1.0 - pa_aastep(0.2, yb, dy));
    vec3 paint = mix(mix(vec3(0.1, 0.3, 0.33), vec3(0.5, 0.12, 0.1), step(0.25, dh)), mix(vec3(0.12, 0.16, 0.3), vec3(0.2, 0.13, 0.08), step(0.75, dh)), step(0.5, dh));
    paint = mix(paint, vec3(0.06), step(0.9, dh));
    albedo = mix(albedo, vec3(0.6, 0.59, 0.56), steps);
    albedo = mix(albedo, mix(vec3(0.9, 0.88, 0.82), stone, isBrick), frame);
    albedo = mix(albedo, paint * (0.85 + 0.15 * pa_band(abs(dmx), 0.1, 0.44, du) * pa_band(yb, 0.4, 1.4, dy)), leafD);
    albedo = mix(albedo, tint * 0.3, lite);
    albedo = mix(albedo, vec3(0.8, 0.7, 0.4), knob * leafD);
    float lamp = 1.0 - smoothstep(0.06, 0.16, length(vec2(dmx, yb - 2.78)));
    albedo = mix(albedo, vec3(0.1), lamp);
    fEmit += vec3(1.0, 0.78, 0.5) * (lamp * 5.0 + lite * 0.35 * step(0.4, dh)) * nightFactor;
    // The lamp's pool of light on the wall and the door.
    fEmit += albedo * vec3(1.0, 0.75, 0.45) * exp(-length(vec2(dmx, (yb - 2.6) * 0.8)) * 1.3) * nightFactor * 0.55 * (1.0 - lamp);
    fRough = mix(fRough, 0.45, leafD);
  }

  // Reveal, frame and glass, in that order.
  albedo = mix(albedo, mix(wall, frameCol, isCurtain) * revealTone, reveal);
  vec3 glazing = mix(glassCol, frameCol, bars);
  albedo = mix(albedo, glazing * (1.0 - shade * 0.5), win);
  albedo = mix(albedo, spandrelCol, spandrel);
  // Above the last full storey a curtain wall carries on as a band of plant-room louvres.
  float crownBand = isCurtain * inU * pa_aastep(nRows, cv, wv) * (1.0 - coping);
  albedo = mix(albedo, mix(wall * 0.6, tint * 0.2, 0.5) * (0.8 + 0.2 * step(0.5, fract(yb / 0.3)) * fine), crownBand * pa_band(fu, u0, u1, wu));

  float glassAll = clamp(pane + spandrel * (1.0 - metalBand), 0.0, 1.0);
  fGlass = glassAll;
  float glassMetal = mix(mix(0.2, 0.45, max(1.0 - step(2.5, style), max(isCondo, isPanel))), 0.75, isCurtain);
  fMetal = mix(max(isCurtain * 0.35, isPanel * 0.3), glassMetal, glassAll);
  fMetal = mix(fMetal, 0.6, spandrel * metalBand);
  fMetal = mix(fMetal, 0.5, win * bars * (1.0 - painted));
  fRough = mix(style > 2.5 && style < 4.5 ? 0.92 : 0.78, 0.035 + h3 * 0.06, glassAll);
  fRough = mix(fRough, 0.4, max(win * bars, spandrel * metalBand));
  fRough = mix(fRough, 0.35, isCurtain * (1.0 - glassAll) * inGrid);
  fRough = mix(fRough, 0.5, glassAll * blind * 0.8);

  // Interior light: ceiling glow near the top of the window, softened by any blind.
  float interior = 0.55 + 0.45 * smoothstep(0.2, 1.0, gy);
  vec3 roomCol = vec3(interior);
  #ifndef FACADE_LOW
    // Close up, the flat glow gives way to a real room behind the glass.
    float roomFade = (1.0 - smoothstep(70.0, 150.0, dist)) * (1.0 - step(0.5, spandrel)) * (1.0 - mirrorPass);
    if (roomFade > 0.01) {
      float ceilGlow;
      vec3 roomIn = paRoom(pg * cellSz, cellSz, Vw, Tw, Nw, h1, office, ceilGlow);
      // Lit rooms glow from the ceiling fitting; dark ones only show by day.
      vec3 litRoom = roomIn * (0.55 + ceilGlow * 2.0) * 1.35;
      roomCol = mix(roomCol, litRoom, roomFade);
      albedo = mix(albedo, mix(glassCol, roomIn * 0.34, 0.6) * (1.0 - shade * 0.4), pane * roomFade * (1.0 - max(blind, drape) * 0.8) * (1.0 - nightFactor * 0.8));
    }
  #endif
  roomCol = mix(roomCol, vec3(0.5, 0.47, 0.42) * slats, blind * 0.85);
  roomCol = mix(roomCol, drapeCol * 1.1, drape * (1.0 - blind) * 0.8);
  vec3 lightCol = mix(mix(vec3(1.0, 0.7, 0.4), vec3(1.0, 0.88, 0.7), step(0.45, h2)), vec3(0.72, 0.85, 1.0), step(0.8, h2));
  // TVs flicker in a few homes late at night.
  float tv = step(0.94, h3) * step(2.5, style) * (1.0 - office) * (0.6 + 0.4 * sin(worldTime * 7.0 + h1 * 50.0));
  lightCol = mix(lightCol, vec3(0.55, 0.65, 1.0) * (0.6 + tv), step(0.94, h3) * step(2.5, style) * (1.0 - office) * (1.0 - tiny));
  fEmit += lightCol * roomCol * pane * lit * (0.5 + mix(h2, 0.5, tiny) * 0.9) * nightFactor * 0.68;

  // Floodlighting: washed up the wall from the ground floor, or down from the crown.
  if (lightT > 0.5) {
    float up = mod(lightT, 2.0) > 0.5 ? exp(-max(yb - groundH, 0.0) / 9.0) * step(groundH - 0.3, yb) : 0.0;
    float down = lightT > 1.5 ? smoothstep(top - 16.0, top - 0.5, y) : 0.0;
    fEmit += albedo * mix(vec3(1.0, 0.8, 0.55), accent + 0.25, 0.35) * (up + down) * (1.0 - glassAll) * nightFactor * 0.55;
  }
  fTilt = vec3(h1 - 0.5, 0.0, h2 - 0.5) * 0.045 * glassAll * (1.0 - tiny);
}
`,u_=h_.replaceAll("pa_band(","fa_band(").replaceAll("pa_aastep(","fa_step(");function $u(s=!1){let t=ri(s?"facade-low":"facade",{color:16777215,roughness:.85,metalness:0},{uniforms:{nightFactor:rn.nightFactor,worldTime:rn.worldTime,mirrorPass:rn.mirrorPass,facSun:li.paSunDirW},vertexPars:`
      attribute vec4 aStyle; attribute vec4 aGlass; attribute vec4 aAccent;
      varying vec3 vFacLocal; flat varying vec4 vFacBox; flat varying vec4 vFacStyle;
      flat varying vec4 vFacGlass; flat varying vec4 vFacAccent;`,vertex:`
      vec3 facScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
      vFacLocal = position * facScale;
      vFacBox = vec4(facScale, (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y);
      vFacStyle = aStyle;
      vFacGlass = aGlass;
      vFacAccent = aAccent;`,fragmentPars:u_,color:`
      {
        vec3 albedo = diffuseColor.rgb;
        paFacade(albedo);
        diffuseColor.rgb = albedo;
      }`,roughness:"roughnessFactor = fRough;",metalness:"metalnessFactor = fMetal;",normal:"normal = normalize(normal + (viewMatrix * vec4(fTilt, 0.0)).xyz);",emissive:"totalEmissiveRadiance += fEmit;"});return s&&(t.defines={...t.defines,FACADE_LOW:""}),t}function Ku(){return ri("tiles",{color:16777215,roughness:.7},{color:`
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
      }`})}function Xp(){let e=[-.54,0,-.54,.54,0,-.54,.54,0,.54,-.54,0,.54,-.22,1,0,.22,1,0],n=[0,4,5,0,5,1,1,5,2,2,5,4,2,4,3,3,4,0],i=new en;i.setAttribute("position",new be(e,3)),i.setIndex(n);let r=i.toNonIndexed();return r.computeVertexNormals(),r}var Pn={stucco:["#e8dcc4","#f0d6c0","#e6c9a8","#d9e2d6","#f2e8d8","#e7b9a3","#d6c7e0","#f4e4b8","#cfe0e3"],concrete:["#a9a59c","#b8b2a6","#8f8e88","#c9c3b5","#9a9690","#b0aba0"],brick:["#8a4f3c","#9c5a43","#7a4535","#a8735a","#6d4a3c","#a35b45"],tower:["#9fa6a8","#7c8589","#b5b8b4","#5f686d","#c8c3b8","#33383c","#d7d9d6","#7d6c57"],stone:["#d8cbb0","#c9b79a","#b8a88c","#d2c6ae","#bfae94"],condo:["#e9e8e4","#d9dcdc","#c4c9cb","#ece4d6","#d6d2ca"],metal:["#8a9196","#6d7a6f","#9a8f7a","#7d4a3a","#5f6b78","#a7a9a3"],cladding:["#d9d6cf","#3a3f44","#b9b3a6","#8c8f8a","#c7b299","#5a6268","#e6e2d8"],glass:[[.18,.32,.38],[.16,.27,.36],[.28,.3,.28],[.25,.22,.18],[.2,.34,.33],[.14,.2,.3],[.3,.24,.15],[.12,.26,.24],[.22,.27,.33],[.17,.2,.23]],accent:["#8c3b2e","#2f5d62","#c9a45c","#3b4a5a","#7a2e3a","#d9d4c8","#4a4f54","#b5673a","#2e4a35"],dado:["#b5673a","#2f5d62","#8c3b2e","#5a7a8c","#c9a45c","#6b7f5a"],brass:["#b08d4f","#9a7b45","#6f8f7a","#a8794a"],trimMetal:["#c9ccce","#3a3d40","#8a6a3c","#e8e6e0","#22262a"],crown:["#bfe3ff","#ffe2b0","#ffffff","#ffb9d8","#b6ffe6"]},Vn=(s,t)=>"#"+new kt(s).lerp(new kt(t>0?"#ffffff":"#000000"),Math.abs(t)).getHexString(),f_={tower:36,deco:32,office:28,hotel:28,civic:30,garage:28,condo:24,warehouse:24,motel:24,brick:18,stucco:14,shops:14};var d_=new Set(["brick","shops","stucco","deco","office","condo","garage"]),p_=["PACIFICA","AURELIO","VANTA","MERIDIAN","ONDA","NORTHSTAR","SOLANO","HALCYON","ALTAMAR","KITE & CO"],qp=["COFFEE","PIZZA","NAILS","DELI","BOOKS","PHARMACY","TACOS","SURF","RAMEN","BAR","DONUTS","LAUNDRY","VINYL","BANK","FLOWERS","GYM"],Gp=["#ff5a7a","#5fe8ff","#ffd25a","#ff8a3d","#a6ff6a","#ffffff","#ff6af0","#7ab8ff"],m_=["HOTEL MIRAMAR","THE PALMS","CASA DEL MAR","HOTEL AURELIO","THE SEABRIGHT"],Vp=["SURF DINER","GAS \xB7 24H","CAR WASH","DRIVE-IN","TIRE SHOP","TACO STAND","MINI MART","BURGERS"];function xa(s,t,e,n,i=0){let r=s.x1-s.x0,o=s.z1-s.z0;if(r<=e&&o<=e||i>5)return n.push(s),n;let a=r>=o,c=a?r:o;if(c<t*2)return n.push(s),n;let h=Ne.clamp(Mt(.36,.64)*c,t,c-t);return a?(xa({...s,x1:s.x0+h},t,e,n,i+1),xa({...s,x0:s.x0+h},t,e,n,i+1)):(xa({...s,z1:s.z0+h},t,e,n,i+1),xa({...s,z0:s.z0+h},t,e,n,i+1)),n}function ro(s){let t=Object.entries(s),e=t.reduce((i,[,r])=>i+r,0),n=bt()*e;for(let[i,r]of t)if((n-=r)<=0)return i;return t[0][0]}var Mn={px:{nx:1,nz:0,rot:Math.PI/2},nx:{nx:-1,nz:0,rot:-Math.PI/2},pz:{nx:0,nz:1,rot:0},nz:{nx:0,nz:-1,rot:Math.PI}};function hi(s,t){return t.nx?s.d:s.w}function Wn(s,t,e,n=0){return t.nx?[s.x+t.nx*(s.w/2+n),s.z+e]:[s.x+e,s.z+t.nz*(s.d/2+n)]}function oo(s){return ln(s.map(([t,e,n,i,r,o,a=0,c=0,h=0,l="box"])=>{let f=l==="cyl"?new Ce(t,t,e,12):l==="cone"?new Mi(t,e,12):new xe(t,e,n);return(a||c||h)&&f.applyMatrix4(new ne().makeRotationFromEuler(new Ln(a,c,h))),f.translate(i,r,o),f.index?f.toNonIndexed():f}))}function g_(){let s=oo([[1.6,1,1.2,0,.5,0],[.42,.08,0,0,1.04,0,0,0,0,"cyl"],[1.62,.06,1.22,0,.22,0]]),t=oo([[1.6,3,0,0,4.1,0,0,0,0,"cyl"],[1.75,1,0,0,6.1,0,0,0,0,"cone"],[.16,2.6,.16,1.1,1.3,1.1],[.16,2.6,.16,-1.1,1.3,1.1],[.16,2.6,.16,1.1,1.3,-1.1],[.16,2.6,.16,-1.1,1.3,-1.1],[2.6,.14,2.6,0,2.6,0]]),e=[[3.2,.06,1.1,0,0,.6],[3.2,.04,.04,0,.95,1.13],[.04,.04,1.1,-1.6,.95,.6],[.04,.04,1.1,1.6,.95,.6],[.04,.95,.04,-1.58,.47,1.13],[.04,.95,.04,0,.47,1.13],[.04,.95,.04,1.58,.47,1.13],[3.2,.03,.03,0,.5,1.13]],n=m=>oo([...e,[Math.hypot(2.4,m),.05,.55,0,-m/2,.55,0,0,Math.atan2(m,2.4)],[Math.hypot(2.4,m),.03,.03,0,-m/2+.85,.83,0,0,Math.atan2(m,2.4)]]),i=oo([[1,.16,1.35,0,0,.67]]),r=oo([[1,1,.04,0,.58,1.33],[.012,1,1.35,-.5,.58,.67],[.012,1,1.35,.5,.58,.67]]),o=(()=>{let m=[],p=[],_=(v,E,A,L,I,S)=>{m.push(...v,...E,...A,...v,...A,...L),p.push(I[0],I[1],S[0],I[1],S[0],S[1],I[0],I[1],S[0],S[1],I[0],S[1])};_([-.5,0,0],[.5,0,0],[.5,-.7,1.6],[-.5,-.7,1.6],[0,0],[1,1]),_([-.5,-.7,1.6],[.5,-.7,1.6],[.5,-1,1.6],[-.5,-1,1.6],[0,0],[1,.3]);let M=new en;return M.setAttribute("position",new be(m,3)),M.setAttribute("uv",new be(p,2)),M.computeVertexNormals(),M})(),a=new an(1,1),c=oo([[.08,1,0,0,.5,0,0,0,0,"cyl"]]),h=new Ce(.5,.5,1,24),l=new Ce(.5,.5,1,56,1),f=new Mi(Math.SQRT1_2,1,4,1,!1,Math.PI/4).toNonIndexed();f.translate(0,.5,0),f.computeVertexNormals();let d=new Mi(.5,1,32);d.translate(0,.5,0);let u=new Un(.5,28,10,0,Math.PI*2,0,Math.PI/2),g=new Gr;g.moveTo(-.5,0),g.lineTo(.5,0),g.lineTo(0,1),g.closePath();let x=new $o(g,{depth:1,bevelEnabled:!1});return x.translate(0,0,-.5),{acUnit:s,tank:t,fireEscape:n,balconySlab:i,balconyRail:r,awning:o,sign:a,antenna:c,drum:h,round:l,pyramid:f,cone:d,dome:u,prism:x}}function x_(s){return vn(s,1024,1024,t=>{qp.forEach((e,n)=>{let i=n%2*512,r=Math.floor(n/2)*128,o=Gp[n%Gp.length],a=n%3===0;t.fillStyle=a?"#121417":["#f4efe4","#1d3b4a","#5a1f1a"][n%3],t.fillRect(i+4,r+4,504,120),t.strokeStyle=o,t.lineWidth=6,t.strokeRect(i+10,r+10,492,108),t.font='800 78px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor=o,t.shadowBlur=16,t.fillStyle=n%3===0?o:n%3===1?"#ffffff":"#ffe9c2",t.fillText(e,i+256,r+68),t.shadowBlur=0})})}function v_(s){return vn(s,256,32,(t,e,n)=>{for(let i=0;i<8;i++)t.fillStyle=i%2?"#f4f1ea":"#ffffff",t.fillRect(i*e/8,0,e/8,n),i%2===0&&(t.fillStyle="rgba(0,0,0,0.42)",t.fillRect(i*e/8,0,e/8,n))},{repeat:!1})}var ao=[Mn.px,Mn.nx,Mn.pz,Mn.nz],Ju=.5,lo=s=>s.reduce((t,e)=>t|(e.nx>0?ga.px:e.nx<0?ga.nx:e.nz>0?ga.pz:ga.nz),0),Wp=s=>{let t=Math.max(Math.floor(s/4.6),1);return(Math.floor(t/2)+.5)*(s/t)-s/2};function Yp(s,t){let e=new Map,n=[],i=[],r=[],o=[],a=[],c=[],h=[],l=[],f=[],d=(C,W,st,J)=>{let j=`${C}|${Bp(W,st)}`;e.has(j)||e.set(j,[]),e.get(j).push(J)};function u(C,W,st,J,j,ot,_t,at,yt={}){return d(yt.round?"facadeRound":"facade",C,W,{x:C,z:W,w:st,d:J,y0:j,h:ot,style:_t,...at,...yt}),yt.top!==!1&&i.push({x:C,z:W,w:st,d:J,h:j+ot}),j<1&&yt.solid!==!1&&n.push({x:C,z:W,w:st/2,d:J/2}),{x:C,z:W,w:st,d:J,y0:j,h:ot,top:j+ot}}let g=(C,W,st={})=>({wall:W,glass:ye(Pn.glass),seed:bt()*100,shops:!1,lobby:!1,doors:0,accent:ye(Pn.accent),variant:bt(),roof:Cn.MEMBRANE,light:Fs.NONE,floorH:C===ce.CURTAIN?Mt(3.7,4.2):C===ce.STUCCO?3.4:C===ce.GARAGE?3:Mt(3.2,3.6),cellW:C===ce.CURTAIN?Mt(1.6,2.2):C===ce.RIBBON?Mt(2.4,3):C===ce.STUCCO?Mt(3.8,4.6):C===ce.DECO?Mt(2.2,2.6):C===ce.MOTEL?4.2:C===ce.CONDO?Mt(3.2,3.8):C===ce.PANEL?Mt(1.5,1.9):Mt(2.8,3.6),...st}),x=(C,W={})=>g(ce.BLANK,C,W),m=C=>C.shops||C.lobby?4.8:.9,p=(C,W)=>C*W.floorH+m(W)+1.3-fe,_=(C,W,st)=>{let J=hi(C,st),j=Math.max(Math.floor((J-1)/W.cellW),1),ot=m(W),_t=C.y0-fe,at=Math.max(0,Math.floor((C.h+fe-1.3-ot)/W.floorH+.02));return{faceW:J,nCols:j,groundH:ot,rows:at,colU:yt=>(yt+.5-j/2)*W.cellW,rowY:yt=>_t+ot+yt*W.floorH}},M=(C,W,st,J,j,ot,_t,at)=>d("trim",W,J,{pos:[W,st+ot/2,J],rot:0,scale:[j,ot,_t],color:at,metal:C==="trimMetal"?1:0}),v=(C,W,st,J,j,ot,_t)=>d("drum",W,J,{pos:[W,st+ot/2,J],rot:0,scale:[j,ot,j],color:_t,metal:C==="drumMetal"?1:0});function E(C,W,st,J,j,ot,_t,at,yt){let[gt,ft]=Wn(W,st,J,ot/2-.04);M(C,gt,_t,ft,st.nx?ot+.08:j,at,st.nx?j:ot+.08,yt)}let A=(C,W,st,J,j,ot)=>M(C,W.x,st,W.z,W.w+j*2,J,W.d+j*2,ot);function L(C,W,st,J,{every:j=1,depth:ot=.45,width:_t=.14,from:at=null,to:yt=null,color:gt}){let ft=_(W,st,J),Ft=at??ft.rowY(0),Bt=yt??W.top-.3;if(!(Bt-Ft<2))for(let ie=0;ie<=ft.nCols;ie+=j)E(C,W,J,(ie-ft.nCols/2)*st.cellW,_t,ot,Ft,Bt-Ft,gt)}function I(C,W,st,{every:J=1,depth:j=.5,thick:ot=.14,at:_t=0,from:at=0,color:yt}){let gt=_(W,st,Mn.pz);for(let ft=at;ft<=gt.rows;ft+=J){let Ft=gt.rowY(ft)+_t*st.floorH;Ft<W.top-.6&&A(C,W,Ft-ot/2,ot,j,yt)}}function S(C,W,st=1){A("trim",C,C.top-.55*st,.36*st,.3*st,Vn(W,-.1));let J=u(C.x,C.z,C.w+1.1*st,C.d+1.1*st,C.top-.19*st,.7*st,ce.BLANK,x(W),{top:!1});C.roofY=J.top}function w(C,W,st=1){let J=Math.min(3.4,Math.max(1.1,st-.3)),j=Wp(hi(C,W)),[ot,_t]=Wn(C,W,j,J/2),at=W.nx?J:6.2,yt=W.nx?6.2:J;if(M("trimMetal",ot,4.32,_t,at,.26,yt,"#2a2d30"),a.push({x:ot,y:4.3,z:_t,w:at-.5,h:.05,d:yt-.5,color:"#ffe2b0"}),J>2.2)for(let gt of[-1,1]){let[ft,Ft]=Wn(C,W,j+gt*2.8,J-.3);v("drumMetal",ft,fe,Ft,.16,4.32-fe,"#2a2d30"),c.push({x:ft,z:Ft,r:Ju})}}function N(C,W,st=4.6){return u(C.x,C.z,Math.max(4,C.w-5),Math.max(4,C.d-5),C.roofY??C.top,st,ce.LOUVRE,g(ce.LOUVRE,W),{top:!1})}function H(C,W,st=!1){let J=C.roofY??C.top;for(let j=0;j<W;j++){let ot=C.x+Mt(-C.w/2+2.5,C.w/2-2.5),_t=C.z+Mt(-C.d/2+2.5,C.d/2-2.5);d("ac",ot,_t,{pos:[ot,J,_t],rot:ye([0,Math.PI/2]),scale:[Mt(.8,1.6),Mt(.8,1.3),Mt(.8,1.5)],color:ye(["#b5b8b6","#9a9d9c","#c8c9c4"])})}if(st){let j=C.x+Mt(-C.w/4,C.w/4),ot=C.z+Mt(-C.d/4,C.d/4);d("tank",j,ot,{pos:[j,J,ot],rot:0,scale:[1,Mt(.9,1.15),1],color:ye(["#6b4f36","#5e4a3a","#7a5a3e"])})}}function B(C,W,st,J){d("antenna",C,st,{pos:[C,W,st],rot:0,scale:[1,J,1],color:"#9aa0a3"}),h.push([C,W+J+.3,st])}let O=(C,W,st=C.top-.6,J=.7)=>a.push({x:C.x,y:st,z:C.z,w:C.w+.5,h:J,d:C.d+.5,color:W,round:!!C.round});function k(C,W,st,J){for(let j of st){let ot=hi(C,j),_t=Math.max(Math.floor(ot/6),1),at=ot/_t,yt=ye(["#b8322a","#2b6e8f","#2f7a4f","#d08a2a","#6b3f8f","#20304a"]);for(let gt=0;gt<_t;gt++){let ft=-ot/2+(gt+.5)*at;if(we(.78)){let[Ft,Bt]=Wn(C,j,ft,.07);d("sign",Ft,Bt,{pos:[Ft,4.1,Bt],rot:j.rot,scale:[(at-.8)*.78,.7,1],sign:Math.floor(bt()*qp.length),color:"#ffffff"})}if(J&&we(.7)){let[Ft,Bt]=Wn(C,j,ft,.02);d("awning",Ft,Bt,{pos:[Ft,3.62,Bt],rot:j.rot,scale:[at*.86,1,1],color:we(.75)?yt:ye(["#b8322a","#2b6e8f","#2f7a4f"])})}}}}function G(C,W,st){let J=hi(C,W),j=Math.max(Math.floor(J/6),1),ot=J/j;for(let _t=0;_t<=j;_t++){let at=Ne.clamp(-J/2+_t*ot,-J/2+.3,J/2-.3);E("trim",C,W,at,.6,.2,fe,4.5-fe,st)}}function rt(C,W,st,J=2,j="glass",ot=!1){for(let _t of st){let at=_(C,W,_t);for(let yt=1;yt<at.rows;yt++)for(let gt=0;gt+J<=at.nCols;gt+=J){if(ot&&(yt+gt/J)%2)continue;let ft=(at.colU(gt)+at.colU(gt+J-1))/2,Ft=J*W.cellW-.5,[Bt,ie]=Wn(C,_t,ft,0),Te=at.rowY(yt)+.02;d("balconySlab",Bt,ie,{pos:[Bt,Te,ie],rot:_t.rot,scale:[Ft,1,1],color:"#d9d8d2"}),d(j==="glass"?"balconyGlass":"balconyRail",Bt,ie,{pos:[Bt,Te,ie],rot:_t.rot,scale:[Ft,1,1],color:j==="glass"?"#9fb6bf":"#2a2c2d"})}}}function et(C,W,st){for(let J of st){let j=_(C,W,J);for(let ot=1;ot<j.rows;ot++)for(let _t=0;_t<j.nCols;_t++){if(we(.35))continue;let[at,yt]=Wn(C,J,j.colU(_t),0),gt=j.rowY(ot)+.24*W.floorH-.12,ft=W.cellW*.5;d("balconySlab",at,yt,{pos:[at,gt,yt],rot:J.rot,scale:[ft,.7,.42],color:"#d9d2c4"}),d("balconyRail",at,yt,{pos:[at,gt,yt],rot:J.rot,scale:[ft,.95,.42],color:"#24262a"})}}}function z(C,W,st){let J=_(C,W,st);if(J.nCols<4||J.rows<3)return;let j=Math.floor(bt()*(J.nCols-2))+1,ot=(J.colU(j)+J.colU(j+1))/2,[_t,at]=Wn(C,st,ot,0);for(let yt=1;yt<J.rows;yt++)d("fireEscape",_t,at,{pos:[_t,J.rowY(yt),at],rot:st.rot,scale:[1,1,1],color:"#2b2e30",floorH:W.floorH})}function Tt(C,W){hi(C,W)<20||o.push({kind:"corp",b:C,f:W,name:ye(p_),color:ye(["#ffffff","#bfe9ff","#ffe2b0","#ffb3a0"])})}let Rt={tower(C,W,st){let J=C.w,j=C.d,ot=ye(Pn.concrete),_t=we(.6),at=ye([ce.RIBBON,ce.PUNCHED,ce.PANEL]),yt=g(at,ot,{..._t?{lobby:!0,doors:lo(W)}:{shops:!0},roof:Cn.TERRACE}),gt=u(C.x,C.z,J,j,fe,Mt(10,16),at,yt);if(_t)w(gt,W[0],C.setback??6);else{k(gt,null,W,!1);for(let T of W)G(gt,T,Vn(ot,.08))}A("trim",gt,4.5,.3,.2,Vn(ot,.1)),A("trim",gt,gt.top-.5,.34,.28,Vn(ot,.12)),H({...gt,x:C.x+J*.3,w:J*.3,d:j*.4},3);let ft=g(ce.CURTAIN,ye(Pn.tower)),Ft=70+st*Mt(70,150),Bt=Math.min(J-10,Mt(30,46)),ie=Math.min(j-10,Mt(30,46)),Te=ye(Pn.trimMetal),ae=ye(Pn.crown),Be=ro({stepped:3,round:1.7,twin:1.4,framed:1.5,crowned:1.7}),zt;if(Be==="round"){let T=Math.max(22,Math.min(Bt,ie)),$=Ft>120;zt=u(C.x,C.z,T,T,gt.top,$?Ft*.66:Ft,ce.CURTAIN,ft,{round:!0,roof:$?Cn.TERRACE:Cn.HELIPAD}),zt.round=!0,v("drumMetal",zt.x,zt.top-.7,zt.z,T+1.1,.5,Te),$&&(O(zt,ae,zt.top-.15,.3),zt=u(C.x,C.z,T*.78,T*.78,zt.top,Ft*.34,ce.CURTAIN,ft,{round:!0,roof:Cn.HELIPAD}),zt.round=!0,v("drumMetal",zt.x,zt.top-.7,zt.z,zt.w+1.1,.5,Te)),O(zt,ae),B(zt.x,zt.top,zt.z,Ft>140?30:14)}else if(Be==="twin"){let T=we(.5),$=T?Bt:Bt*.46,X=T?ie*.46:ie,it=(T?ie:Bt)*.27;zt=u(C.x-(T?0:it),C.z-(T?it:0),$,X,gt.top,Ft,ce.CURTAIN,ft,{roof:Cn.GRAVEL});let Q=u(C.x+(T?0:it),C.z+(T?it:0),$,X,gt.top,Ft*Mt(.66,.86),ce.CURTAIN,{...ft,seed:bt()*100},{roof:Cn.TERRACE}),Pt=u(C.x,C.z,T?Bt*.3:Bt*.2,T?ie*.2:ie*.3,gt.top,Ft+7,ce.BLANK,x(Vn(ft.wall,-.5)),{top:!1});O(zt,ae),O(Q,ae),B(Pt.x,Pt.top,Pt.z,18)}else if(Be==="framed"){zt=u(C.x,C.z,Bt,ie,gt.top,Ft,ce.CURTAIN,ft,{roof:Cn.GRAVEL});let T=x(ye(["#e4e2dc","#cfcac0","#3a3d41","#d9d2c2"]));for(let X of[-1,1])for(let it of[-1,1])u(zt.x+X*(Bt/2-.4),zt.z+it*(ie/2-.4),2.4,2.4,gt.top,Ft+5.5,ce.BLANK,T,{top:!1});let $=_(zt,ft,Mn.pz);for(let X=8;X<$.rows-3;X+=8)u(zt.x,zt.z,Bt+1.4,ie+1.4,$.rowY(X)-.1,1.15,ce.BLANK,T,{top:!1});for(let X of[-1,1])u(zt.x,zt.z+X*(ie/2-.4),Bt-.8,1.2,zt.top+4.15,1.2,ce.BLANK,T,{top:!1}),u(zt.x+X*(Bt/2-.4),zt.z,1.2,ie-.8,zt.top+4.15,1.2,ce.BLANK,T,{top:!1});O(zt,ae,zt.top+.2,.3),H(zt,4),h.push([zt.x+Bt/2-.4,zt.top+6,zt.z+ie/2-.4])}else if(Be==="crowned"){if(zt=u(C.x,C.z,Bt,ie,gt.top,Ft*.8,ce.CURTAIN,ft,{roof:Cn.TERRACE}),we(.5))for(let it of ao)L("trimMetal",zt,ft,it,{every:3,depth:.6,width:.16,color:Te});let T=Bt,$=ie;for(let it=0;it<3;it++)T*=.8,$*=.8,zt=u(C.x,C.z,T,$,zt.top,Ft*.2/3,ce.CURTAIN,ft,{roof:Cn.GRAVEL});let X=Math.min(T,$)*Mt(.8,1.3);d("pyramid",zt.x,zt.z,{pos:[zt.x,zt.top,zt.z],rot:0,scale:[T,X,$],color:ye(["#5f8f80","#3b4046","#8a8f93","#a8874a"])}),O(zt,ae),B(zt.x,zt.top+X-.5,zt.z,14)}else{let T=Bt,$=ie,X=gt.top,it=Ft>120?3:Ft>75?2:1,Q=we(.55),Pt=we(.5);for(let jt=0;jt<it;jt++){let ge=jt===it-1,he=ge?Math.max(Ft-(X-fe),12):Ft*Mt(.42,.58)/(jt+1);if(zt=u(C.x,C.z,T,$,X,he,ce.CURTAIN,ft,{roof:ge?Pt?Cn.GRAVEL:Cn.HELIPAD:Cn.TERRACE}),Q)for(let Ee of ao)L("trimMetal",zt,ft,Ee,{every:2,depth:.5,width:.12,color:Te});X+=he,T*=Mt(.72,.86),$*=Mt(.72,.86)}if(O(zt,ae),Pt){let jt=u(zt.x,zt.z,zt.w*.45,zt.d*.45,zt.top,6,ce.LOUVRE,g(ce.LOUVRE,"#7d8487"),{top:!1});B(zt.x,jt.top,zt.z,Ft>140?28:12)}else H(zt,4),h.push([zt.x+zt.w/2-1,zt.top+.8,zt.z+zt.d/2-1])}Ft>85&&Be!=="round"&&Be!=="crowned"&&we(.5)&&Tt(zt,W[0])},office(C,W,st){let J=Math.floor(Mt(9,18)+st*Mt(4,12)),j=Number(ro({[ce.RIBBON]:4,[ce.PUNCHED]:3,[ce.PANEL]:2.5})),ot=j===ce.PANEL?ye(Pn.cladding):ye(Pn.concrete),_t=we(.5),at=g(j,ot,_t?{lobby:!0,doors:lo(W)}:{shops:!0}),yt=we(.5)?Vn(ot,.22):ye(["#e6e3dc","#d2cec4","#3c4044"]),gt=j===ce.RIBBON?ro({eyebrow:5,piers:3,plain:2}):j===ce.PUNCHED?ro({grid:3.5,fins:2.5,piers:2.5,plain:1.5}):ro({plain:6,fins:4}),ft=Te=>{if(gt==="eyebrow"&&I("trim",Te,at,{depth:.6,thick:.13,at:.92,color:yt}),gt==="grid"&&I("trim",Te,at,{depth:.42,thick:.2,color:yt}),gt==="grid"||gt==="fins")for(let ae of ao)L("trim",Te,at,ae,{every:j===ce.PANEL?2:1,depth:.42,width:.2,color:yt});if(gt==="piers")for(let ae of ao)L("trim",Te,at,ae,{every:2,depth:.3,width:.6,color:yt})},Ft,Bt=Math.min(C.w,C.d)>=40&&we(.4);if(Bt){let Te=we(.5)?1:-1,ae=we(.5)?1:-1,Be=C.d*Mt(.42,.52),zt=C.w*Mt(.4,.52);Ft=u(C.x,C.z+ae*(C.d-Be)/2,C.w,Be,fe,p(J,at),j,at);let T=Math.max(3,Math.floor(J*Mt(.45,.7))),$=u(C.x+Te*(C.w-zt)/2,C.z-ae*Be/2,zt,C.d-Be,fe,p(T,at),j,{...at,seed:bt()*100,roof:Cn.TERRACE});ft($),at.shops&&k($,at,W,!1),A("trim",$,4.5,.3,.2,yt),H($,2)}else Ft=u(C.x,C.z,C.w,C.d,fe,p(J,at),j,at);ft(Ft),at.shops?k(Ft,at,W,!1):w(Ft,W[0],C.setback),A("trim",Ft,4.5,.3,.2,yt);let ie=Ft;if(!Bt&&we(.45)&&(ie=u(Ft.x+Mt(-2,2),Ft.z+Mt(-2,2),C.w*Mt(.6,.75),C.d*Mt(.6,.75),Ft.top,Mt(8,20),j,{...at,shops:!1,lobby:!1,doors:0}),ft(ie)),we(.5)){let Te=N(ie,Vn(ot,-.25));h.push([Te.x,Te.top+.3,Te.z])}else{let Te=u(ie.x,ie.z,ie.w*.35,ie.d*.35,ie.top,4.5,ce.BLANK,x("#8d8f8c"),{top:!1});H(ie,5),h.push([Te.x,Te.top+.3,Te.z])}J>14&&we(.3)&&Tt(ie,W[0])},deco(C,W,st){let J=ye(Pn.stone),j=g(ce.DECO,J,{shops:!0,accent:ye(Pn.brass),light:Fs.BASE}),ot=50+st*Mt(30,90),_t=C.w,at=C.d,yt=fe,gt,ft=3+(ot>100?1:0);for(let ae=0;ae<ft;ae++){let Be=ae===0?ot*.45:ot*.55/(ft-1);if(gt=u(C.x,C.z,_t,at,yt,Be,ce.DECO,ae===0?j:{...j,shops:!1,light:ae===ft-1?Fs.CROWN:Fs.NONE}),ae===0){k(gt,j,W,we(.4));for(let zt of W)G(gt,zt,Vn(J,.05))}for(let zt of ao)L("trim",gt,j,zt,{every:2,depth:.38,width:.72,color:Vn(J,.06),to:gt.top-.6});S(gt,"#e6dcc6"),yt+=Be,_t*=Mt(.7,.8),at*=Mt(.7,.8)}let Ft=Math.max(4,_t*.55),Bt=Math.max(4,at*.55),ie=u(gt.x,gt.z,Ft,Bt,gt.roofY??gt.top,7,ce.DECO,{...j,shops:!1,light:Fs.CROWN},{top:!1}),Te=Math.min(Ft,Bt)*1.5;d("pyramid",gt.x,gt.z,{pos:[gt.x,ie.top,gt.z],rot:0,scale:[Ft+.6,Te,Bt+.6],color:ye(["#5f8f80","#6f9a8a","#a8874a","#4a5560"])}),B(gt.x,ie.top+Te-.6,gt.z,14),O(ie,ye(["#ffe2b0","#bfe3ff"]),ie.top-.3,.5)},brick(C,W){let st=g(ce.BRICK,ye(Pn.brick),{shops:we(.75),floorH:Mt(3.1,3.4)});st.shops||(st.doors=lo(W));let J=Math.floor(Mt(4,8)),j=u(C.x,C.z,C.w,C.d,fe,p(J,st),ce.BRICK,st);if(st.shops){k(j,st,W,we(.5));for(let ot of W)G(j,ot,"#b8ab98");A("trim",j,4.5,.3,.18,"#b8ab98")}S(j,"#b8ab98");for(let ot of W.slice(0,2))we(.8)&&z(j,st,ot);H(j,2,we(.8))},condo(C,W,st){let J=ye(Pn.condo),j=we(.5),ot=g(ce.CONDO,J,{...j?{lobby:!0}:{shops:we(.6)},floorH:3.2,roof:Cn.TERRACE});ot.shops||(ot.doors=lo(j?[W[0]]:W));let _t=Math.floor(Mt(6,12)+st*8),at=u(C.x,C.z,C.w,C.d,fe,p(_t,ot),ce.CONDO,ot);ot.shops?k(at,ot,W,!1):j&&w(at,W[0],C.setback);let yt=ye(["grid","grid","stagger","plain"]),gt=Vn(J,.3);if(yt==="grid")for(let ft of W)L("trim",at,ot,ft,{every:2,depth:1.45,width:.24,color:gt,from:_(at,ot,ft).rowY(1)-.3});rt(at,ot,W,2,"glass",yt==="stagger"),(ot.shops||j)&&A("trim",at,4.5,.3,.2,gt),A("trim",at,at.top-.62,.36,.36,gt),u(at.x,at.z,at.w*.5,at.d*.5,at.top,5.4,ce.CONDO,{...ot,shops:!1,lobby:!1,doors:0,seed:bt()*100,roof:Cn.GRAVEL},{top:!1}),H(at,3)},hotel(C,W,st){let J=ye(["#efe6d4","#e2d3bd","#d8dfe2","#f2ddd0"]),j=W[0]||Mn.pz,ot=g(ce.CONDO,J,{lobby:!0,doors:lo([j]),floorH:3.3,light:Fs.BASE,roof:Cn.TERRACE}),_t=Math.min(C.w,Mt(26,38)),at=Math.min(C.d,Mt(18,26)),yt=Math.floor(Mt(10,16)+st*6),gt=u(C.x,C.z,_t,at,fe,p(yt,ot),ce.CONDO,ot);rt(gt,ot,W.length?W:[Mn.pz],1,"metal"),o.push({kind:"hotel",b:gt,f:j,name:ye(m_),t:Wp(hi(gt,j))}),A("trim",gt,4.5,.32,.25,Vn(J,.15)),A("trim",gt,gt.top-.62,.4,.4,Vn(J,.15)),O(gt,"#ffe2b0",gt.top-.12,.2),H(gt,3)},shops(C,W){let st=we(.5),J=we(.6)?ye(Pn.stucco):ye(Pn.concrete),j=g(ce.PUNCHED,J,{shops:!0}),ot=u(C.x,C.z,C.w,C.d,fe,st?p(1,j):6,ce.PUNCHED,j),_t=W.length?W:[Mn.pz];k(ot,j,_t,!0);for(let at of _t)if(G(ot,at,Vn(J,.12)),!st&&we(.55)){let yt=hi(ot,at)*Mt(.35,.6),[gt,ft]=Wn(ot,at,0,-.3);u(gt,ft,at.nx?.6:yt,at.nx?yt:.6,ot.top,Mt(1,1.9),ce.BLANK,x(J),{top:!1})}S(ot,"#cfc6b4"),H(ot,Math.floor(Mt(2,5)))},garage(C,W){let st=ye(["#b3ada2","#a7a49c","#c0b8aa"]),J=g(ce.GARAGE,st,{floorH:3,roof:Cn.GRAVEL}),j=Math.floor(Mt(4,7)),ot=u(C.x,C.z,C.w,C.d,fe,j*3+1.4,ce.GARAGE,J);o.push({kind:"garage",b:ot,f:W[0]||Mn.pz});for(let gt=0;gt<=j;gt++)A("trimMetal",ot,.3+gt*3+.92,.12,.1,"#8d9296");let _t=we(.5)?1:-1,at=we(.5)?1:-1,yt=u(ot.x+_t*(ot.w/2-2.3),ot.z+at*(ot.d/2-2.3),5.2,5.2,fe,ot.h+4,ce.PUNCHED,g(ce.PUNCHED,Vn(st,.1),{cellW:3.4,floorH:3}),{solid:!1,top:!1});O(yt,"#bfe3ff",yt.top-.5,.35);for(let[gt,ft]of[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]]){let Ft=ot.x+gt*ot.w,Bt=ot.z+ft*ot.d;v("drumMetal",Ft,ot.top,Bt,.14,5,"#5a5f63"),a.push({x:Ft,y:ot.top+5.05,z:Bt,w:.9,h:.14,d:.35,color:"#dcecff"})}H(ot,1)},stucco(C,W){let st=W.length>0&&we(.8),J=ye(Pn.stucco),j=g(ce.STUCCO,J,{shops:st,accent:ye(Pn.dado),doors:st?0:lo(W)}),ot=Math.floor(Mt(2,5)),_t=we(.8)?ce.STUCCO:ce.PUNCHED,at=u(C.x,C.z,C.w,C.d,fe,p(ot,j),_t,j);if(st){k(at,j,W,we(.6));for(let gt of W)G(at,gt,Vn(J,.1))}if(we(.8)){let gt=Math.min(at.w,at.d)*.22;if(d("tileRoof",at.x,at.z,{pos:[at.x,at.top,at.z],rot:0,scale:[at.w,gt,at.d]}),we(.6)){let ft=at.x+Mt(-.3,.3)*at.w,Ft=at.z+Mt(-.3,.3)*at.d;M("trim",ft,at.top,Ft,.9,gt+1,.9,Vn(J,-.06)),M("trim",ft,at.top+gt+1,Ft,1.15,.16,1.15,"#8a5a40")}}else H(at,2);_t===ce.STUCCO&&ot>2&&we(.5)&&et(at,j,W),W.find(gt=>gt.nx===-1)&&we(.6)&&l.push({x:at.x-at.w/2-.12,z:at.z,y:(st?4.8:1.2)+1.8,face:"west",text:ye(["MOTEL","TACOS","SURF SHOP","LIQUOR","PIZZA","COCKTAILS","ICE CREAM","BAIT & TACKLE"]),color:ye(["#ff4f7b","#5ff2ff","#ffd25a","#ff7a3d","#9dff6a"])})},motel(C,W){let st=W[0]||Mn.pz,J=g(ce.MOTEL,ye(Pn.stucco),{floorH:3,accent:ye(Pn.dado)}),j=hi(C,st),ot=st.nx?C.w:C.d,_t=Math.min(ot*.5,12),at=ot/2-_t/2,yt=C.x-st.nx*at,gt=C.z-st.nz*at,ft=st.nx?_t:j*.92,Ft=st.nx?j*.92:_t,Bt=u(yt,gt,ft,Ft,fe,p(2,J),ce.MOTEL,J),ie=hi(Bt,st),[Te,ae]=Wn(Bt,st,0,0);d("balconySlab",Te,ae,{pos:[Te,.9+3+.02,ae],rot:st.rot,scale:[ie-.4,1,1.15],color:"#e6e1d6"}),d("balconyRail",Te,ae,{pos:[Te,.9+3+.02,ae],rot:st.rot,scale:[ie-.4,1,1.15],color:"#e8e4da"});for(let T=-ie/2+.5;T<=ie/2-.4;T+=4.2){let[$,X]=Wn(Bt,st,T,1.4);v("drum",$,fe,X,.16,3.68,"#e8e4da"),c.push({x:$,z:X,r:Ju})}d("tileRoof",Bt.x,Bt.z,{pos:[Bt.x,Bt.top,Bt.z],rot:0,scale:[Bt.w,Math.min(Bt.w,Bt.d)*.28,Bt.d]});let[Be,zt]=Wn(C,st,-hi(C,st)/2+4,-2);o.push({kind:"motelSign",x:Be,z:zt,f:st,name:ye(["SEA BREEZE","SUNSET","PALM VIEW","BLUE WAVE"])}),r.push({x:C.x+st.nx*_t/2,z:C.z+st.nz*_t/2,w:st.nx?ot-_t:j,d:st.nx?j:ot-_t,parking:!0})},warehouse(C,W){let st=g(ce.METAL,ye(Pn.metal),{floorH:9,roof:Cn.SKYLIGHTS}),J=u(C.x,C.z,C.w,C.d,fe,Mt(8,11.5),ce.METAL,st),j=W[0];j&&E("trimMetal",J,j,0,hi(J,j)*.82,Math.min(2.4,(C.setback??1)+1.2),4.9,.16,"#5a5f63");let ot=J.w>J.d;M("trimMetal",J.x,J.top,J.z,ot?J.w*.7:2.6,1.1,ot?2.6:J.d*.7,"#7d8388"),H(J,Math.floor(Mt(1,4)))},civic(C,W){let st=ye(["#d9d2c0","#cfc8b8","#e0d8c8","#c9c2b2"]),J=W[0]||Mn.pz,j=g(ce.DECO,st,{floorH:5.4,cellW:3.6,accent:ye(Pn.brass),light:Fs.BASE}),ot=hi(C,J),_t=J.nx?C.w:C.d,at=Math.min(6.5,_t*.22),yt=u(C.x-J.nx*at/2,C.z-J.nz*at/2,J.nx?_t-at:ot,J.nx?ot:_t-at,fe,p(3,j),ce.DECO,j);S(yt,Vn(st,.08),1.3);let gt=Math.min(ot*.62,30),ft=1.1,Ft=yt.h*.6,Bt=Vn(st,.1);for(let X=0;X<3;X++)E("trim",yt,J,0,gt+2.6-X*.5,at-.3-X*.85,fe,(X+1)*ft/3,Vn(st,-.08));let ie=at-2.85,Te=Math.max(4,2*Math.round(gt/7)),ae=fe+ft;for(let X=0;X<Te;X++){let[it,Q]=Wn(yt,J,-gt/2+.8+X/(Te-1)*(gt-1.6),ie);M("trim",it,ae,Q,1.5,.3,1.5,Bt),v("drum",it,ae+.3,Q,1.12,Ft-.6,Bt),M("trim",it,ae+Ft-.3,Q,1.5,.3,1.5,Bt)}E("trim",yt,J,0,gt+1.4,ie+.85,ae+Ft,1.5,Bt);let[Be,zt]=Wn(yt,J,0,(ie+1)/2-.04);d("prism",Be,zt,{pos:[Be,ae+Ft+1.5,zt],rot:J.rot,scale:[gt+2.2,gt*.17,ie+1.08],color:Bt}),a.push({x:Be,y:ae+Ft-.05,z:zt,w:J.nx?ie-.6:gt-2,h:.06,d:J.nx?gt-2:ie-.6,color:"#ffe2b0"}),E("trimMetal",yt,J,0,3.4,.22,ae,5.4,"#5a4026");let[T,$]=Wn(yt,J,0,(at-.3)/2);if(n.push({x:T,z:$,w:(J.nx?at-.3:gt+2.6)/2,d:(J.nx?gt+2.6:at-.3)/2}),we(.4)){let X=Math.min(yt.w,yt.d)*.44,it=yt.roofY??yt.top,Q=ye(["#6f9a8a","#5f8f80","#a8874a"]);v("drum",yt.x,it,yt.z,X,3.4,Bt),d("dome",yt.x,yt.z,{pos:[yt.x,it+3.4,yt.z],rot:0,scale:[X*.97,X*.97,X*.97],color:Q}),v("drum",yt.x,it+3.4+X*.47,yt.z,X*.13,1.8,Bt),d("cone",yt.x,yt.z,{pos:[yt.x,it+5.2+X*.47,yt.z],rot:0,scale:[X*.17,1.6,X*.17],color:Q})}else H(yt,2)},landmark(C,W){let st="#c9ccce",J=g(ce.CURTAIN,"#d4d7d9",{glass:[.13,.25,.3],cellW:1.9,floorH:4,variant:.9,accent:st}),j=u(C,W,48,48,fe,14,ce.CURTAIN,{...J,lobby:!0,roof:Cn.TERRACE},{round:!0});v("drumMetal",C,j.top-.7,W,49.2,.5,st);let ot=u(C,W,30,30,j.top,236,ce.CURTAIN,J,{round:!0,roof:Cn.GRAVEL});for(let ft=j.top+40;ft<ot.top-20;ft+=40)v("drumMetal",C,ft,W,31,.6,st);let _t=ot.top,at=(ft,Ft)=>{let Bt=u(C,W,ft,ft,_t,Ft,ce.CURTAIN,{...J,seed:bt()*100},{round:!0,top:!1});return _t+=Ft,Bt};at(33,3.2),at(37,3.2);let yt=at(41,6.5);a.push({x:C,y:yt.y0+.2,z:W,w:41.7,h:.5,d:41.7,round:!0,pulse:!0}),a.push({x:C,y:yt.top-.3,z:W,w:41.7,h:.4,d:41.7,round:!0,pulse:!0}),at(35,4);let gt=at(27,8);a.push({x:C,y:gt.top-.3,z:W,w:27.6,h:.4,d:27.6,round:!0,pulse:!0}),d("cone",C,W,{pos:[C,_t,W],rot:0,scale:[27.4,26,27.4],color:"#8a9196"}),d("antenna",C,W,{pos:[C,_t+24,W],rot:0,scale:[5,60,5],color:"#b9bdc0"}),h.push([C,_t+84.5,W]),Wt={x:C,z:W,top:_t+84}}},Wt=null,Kt=[],Nt=Ei/2-zi;for(let[C,W,st]of Wi()){let J=`${C},${W}`,j=st.kind==="mix"?st.weights:st.kind,ot=st.dw;if(j==="park"){r.push({x:C,z:W,w:Nt*2,d:Nt*2,park:!0});continue}if(j==="parking"){let ft=u(C-Nt+14,W-Nt+11,24,18,fe,5.5,ce.STUCCO,g(ce.STUCCO,ye(Pn.stucco),{shops:!0}));k(ft,null,[Mn.nz],!0),G(ft,Mn.nz,"#d9d2c4");let Ft=J==="80,240"?"GAS \xB7 24H":J==="-240,-400"?"SURF DINER":Vp[Math.floor(hr(C+3,W+9)*Vp.length)];l.push({x:ft.x,z:ft.z-ft.d/2-.1,y:7.6,face:"north",text:Ft,color:"#ff6a5a"}),r.push({x:C+10,z:W+10,w:Nt*1.6,d:Nt*1.6,parking:!0});continue}if(j==="plaza"||j==="plaza-tall"){if(st.landmark)Rt.landmark(C,W);else{let ft=Mt(46,54);Rt.tower({x:C+Mt(-6,6),z:W+Mt(-6,6),w:ft,d:ft,setback:6},ao,j==="plaza-tall"?Math.max(1.25,ot*1.1):Math.max(.95,ot))}r.push({x:C,z:W,w:Nt*2,d:Nt*2,plaza:!0});continue}let at=st.coastal||st.district==="eastside"||st.district==="foothills",yt=xa({x0:C-Nt,x1:C+Nt,z0:W-Nt,z1:W+Nt},at?18:22,at?44:64,[]),gt=we(.6);for(let ft of yt){let Ft=ft.x1-ft.x0,Bt=ft.z1-ft.z0,ie=[];if(ft.x0<=C-Nt+.5&&ie.push(Mn.nx),ft.x1>=C+Nt-.5&&ie.push(Mn.px),ft.z0<=W-Nt+.5&&ie.push(Mn.nz),ft.z1>=W+Nt-.5&&ie.push(Mn.pz),we(.07)||!ie.length){r.push({x:(ft.x0+ft.x1)/2,z:(ft.z0+ft.z1)/2,w:Ft,d:Bt});continue}let Te=Object.fromEntries(Object.entries(j).filter(([Pt])=>Math.min(Ft,Bt)>=f_[Pt])),ae=Object.keys(Te).length?ro(Te):"shops",Be=ae==="tower"?Mt(2,6):ae==="shops"||ae==="brick"?Mt(.2,1):Mt(.5,3),zt=gt&&d_.has(ae)?0:Mt(1.5,4),T=ie.includes(Mn.nx)?Be:zt,$=ie.includes(Mn.px)?Be:zt,X=ie.includes(Mn.nz)?Be:zt,it=ie.includes(Mn.pz)?Be:zt,Q={x:(ft.x0+T+ft.x1-$)/2,z:(ft.z0+X+ft.z1-it)/2,w:Ft-T-$,d:Bt-X-it,setback:Be};Kt.push({type:ae,x:Q.x,z:Q.z,w:Q.w,d:Q.d,faces:ie.map(Pt=>[Pt.nx,Pt.nz])}),Rt[ae](Q,ie,ot)}}for(let C=0;C<620;C++){let W=bt(),st=W<.6?Mt(Ye+100,Ye+760):Mt(-300,Ye+400),J=W<.6?Mt(Oe-500,je+500):we(.5)?Mt(je+140,je+620):Mt(Oe-620,Oe-140);f.push([st,J])}let ee=g_(),pt=x_(t),wt=v_(t),Dt=new xe(1,1,1),Ht=$u(),Vt=new Zt({map:pt,emissive:16777215,emissiveMap:pt,emissiveIntensity:.4,roughness:.5});Vt.onBeforeCompile=C=>{C.vertexShader=C.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSign;`).replace("#include <uv_vertex>",`#include <uv_vertex>
        vec2 atlasUv = uv * vec2(0.5, 0.125) + aSign;
        #ifdef USE_MAP
          vMapUv = atlasUv;
        #endif
        #ifdef USE_EMISSIVEMAP
          vEmissiveMapUv = atlasUv;
        #endif`)},Vt.customProgramCacheKey=()=>"shop-sign-atlas";let dt=new Map,Ot=new Zt({color:16777215,roughness:.82}),D=new Zt({color:16777215,roughness:.82});D.onBeforeCompile=C=>{C.vertexShader=C.vertexShader.replace("#include <common>",`#include <common>
attribute float aMetal;
varying float vMetal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMetal = aMetal;`),C.fragmentShader=C.fragmentShader.replace("#include <common>",`#include <common>
varying float vMetal;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(0.82, 0.38, vMetal);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor = vMetal * 0.85;`)},D.customProgramCacheKey=()=>"trim";let ct=new Zt({color:16777215,roughness:.5,metalness:.45}),ht={facade:{geometry:Dt,material:Ht,shadow:!0,lod:0},facadeRound:{geometry:ee.round,material:Ht,shadow:!0,lod:0},tileRoof:{geometry:Xp(),material:Ku(),shadow:!0,lod:1100},ac:{geometry:ee.acUnit,material:new Zt({color:16777215,roughness:.55,metalness:.5}),shadow:!0,lod:320},tank:{geometry:ee.tank,material:new Zt({color:16777215,roughness:.9}),shadow:!0,lod:420},antenna:{geometry:ee.antenna,material:new Zt({color:16777215,roughness:.4,metalness:.8}),shadow:!0,lod:1400},fireEscape:{geometry:null,material:new Zt({color:16777215,roughness:.6,metalness:.6}),shadow:!0,lod:260},balconySlab:{geometry:ee.balconySlab,material:new Zt({color:16777215,roughness:.8}),shadow:!0,lod:340},balconyGlass:{geometry:ee.balconyRail,material:new Zt({color:16777215,roughness:.08,metalness:.7,transparent:!0,opacity:.55,depthWrite:!1}),shadow:!1,lod:300},balconyRail:{geometry:ee.balconyRail,material:new Zt({color:16777215,roughness:.5,metalness:.5}),shadow:!0,lod:300},awning:{geometry:ee.awning,material:new Zt({map:wt,side:Sn,roughness:.9}),shadow:!0,lod:300},sign:{geometry:ee.sign,material:Vt,shadow:!1,lod:520},trim:{geometry:Dt,material:D,shadow:!0,lod:640},drum:{geometry:ee.drum,material:D,shadow:!0,lod:900},prism:{geometry:ee.prism,material:Ot,shadow:!0,lod:1e3},pyramid:{geometry:ee.pyramid,material:ct,shadow:!0,lod:0},cone:{geometry:ee.cone,material:ct,shadow:!0,lod:0},dome:{geometry:ee.dome,material:ct,shadow:!0,lod:0}},lt=new Set(["tileRoof","ac","tank","antenna","fireEscape","balconyGlass","balconyRail","balconySlab","trim","drum","prism"]),tt=new Set(["facade","facadeRound"]),F=Vu($u(!0)),U={range:360},V=new ne,q=new He,K=new P,b=new P,y=new kt,Y=new P(0,1,0),nt={};for(let[C,W]of e){let[st]=C.split("|"),J=ht[st];if(nt[st]=(nt[st]||0)+W.length,st==="fireEscape"){let j=new Map;for(let ot of W){let _t=ot.floorH.toFixed(1);j.has(_t)||j.set(_t,[]),j.get(_t).push(ot)}for(let[ot,_t]of j)dt.has(ot)||dt.set(ot,ee.fireEscape(Number(ot))),mt(st,_t,dt.get(ot),J);continue}mt(st,W,J.geometry,J)}function mt(C,W,st,J){let j=st,ot=C==="trim"||C==="drum";(tt.has(C)||C==="sign"||ot)&&(j=st.clone());let _t=new Ue(j,J.material,W.length);if(tt.has(C)){let at=new Float32Array(W.length*4),yt=new Float32Array(W.length*4),gt=new Float32Array(W.length*4);W.forEach((ft,Ft)=>{V.compose(K.set(ft.x,ft.y0+ft.h/2,ft.z),q.identity(),b.set(ft.w,ft.h,ft.d)),_t.setMatrixAt(Ft,V),_t.setColorAt(Ft,y.set(ft.wall)),at.set([ft.style,ft.floorH,ft.cellW,ft.seed],Ft*4),yt.set([...ft.glass,Hp({ground:ft.lobby?Vc.LOBBY:ft.shops?Vc.SHOPS:Vc.PLINTH,round:!!ft.round,roof:ft.roof,light:ft.light,doors:ft.doors})],Ft*4),y.set(ft.accent),gt.set([y.r,y.g,y.b,ft.variant],Ft*4)}),j.setAttribute("aStyle",new dn(at,4)),j.setAttribute("aGlass",new dn(yt,4)),j.setAttribute("aAccent",new dn(gt,4))}else{let at=C==="sign"?new Float32Array(W.length*2):null;ot&&j.setAttribute("aMetal",new dn(new Float32Array(W.map(yt=>yt.metal||0)),1)),W.forEach((yt,gt)=>{q.setFromAxisAngle(Y,yt.rot||0),V.compose(K.set(...yt.pos),q,b.set(...yt.scale)),_t.setMatrixAt(gt,V),yt.color&&_t.setColorAt(gt,y.set(yt.color)),at&&at.set([yt.sign%2*.5,.875-Math.floor(yt.sign/2)*.125],gt*2)}),at&&j.setAttribute("aSign",new dn(at,2))}_t.name=C,_t.castShadow=J.shadow,_t.receiveShadow=!0,_t.userData.lod=J.lod,C==="balconyGlass"&&(_t.userData.noAO=!0),lt.has(C)&&_t.layers.set(1),_t.instanceMatrix.needsUpdate=!0,_t.computeBoundingSphere(),_t.computeBoundingBox(),s.add(_t),tt.has(C)?so(_t,0,(at,yt)=>{yt.material=at>U.range?F:Ht}):so(_t,J.lod)}let ut=[],Qt=new Map,Et=(C,W,st,J=null)=>{if(J&&Qt.has(J))return Qt.get(J);let j=vn(t,C,W,st);return J&&Qt.set(J,j),j},Jt=new Map,re=(C,W)=>(Jt.has(C)||Jt.set(C,W()),Jt.get(C)),At=(C,W={})=>new Zt({color:1118481,map:C,emissive:16777215,emissiveMap:C,emissiveIntensity:.4,roughness:.5,...W}),Ut=new Zt({color:1843235,roughness:.45,metalness:.6}),me=new Zt({color:3353120,emissive:16767392,emissiveIntensity:.3}),de=(C,W,st,J=!0,j=700)=>{C.traverse(ot=>{ot.isMesh&&(ot.castShadow=!0,ot.receiveShadow=!0)}),C.isGroup&&fs(C),C.userData.glow=J,s.add(C),so(C,j),ut.push({mesh:C})};for(let C of o)if(C.kind==="hotel"){let{b:W,f:st,name:J,t:j}=C,ot=hi(W,st),_t=new fn,at=ye(["#ffd27a","#ff7aa8","#7ad7ff"]),yt=st===Mn.px||st===Mn.nz?-j:j,gt=new $t(new xe(7,.35,3.4),Ut);gt.position.set(yt,4.25,1.7);let ft=new $t(new xe(6.6,.05,3),me);ft.position.set(yt,4.05,1.7),_t.add(gt,ft);for(let X of[-3.2,3.2]){let it=new $t(new Ce(.07,.07,4.1,8),Ut);it.position.set(yt+X,2.05,3.3),_t.add(it);let[Q,Pt]=Wn(W,st,j+X,3.3);c.push({x:Q,z:Pt,r:Ju})}let Ft=J.replace("HOTEL ","").replace("THE ",""),Bt=Et(128,1024,(X,it,Q)=>{X.fillStyle="#121519",X.fillRect(0,0,it,Q),X.strokeStyle=at,X.lineWidth=6,X.strokeRect(8,8,it-16,Q-16),X.fillStyle=at,X.textAlign="center",X.textBaseline="middle",X.shadowColor=at,X.shadowBlur=14;let Pt=Ft.split(""),jt=(Q-80)/Pt.length;X.font=`800 ${Math.min(100,jt*.95)}px "Barlow Condensed", Impact, sans-serif`,Pt.forEach((ge,he)=>X.fillText(ge,it/2,50+jt*(he+.5)))},"blade"+Ft+at),ie=re("blade"+Ft+at,()=>At(Bt)),Te=Math.min(14,W.top-9);if(Te>5){let X=new $t(new xe(.35,Te,2.2),[ie,ie,Ut,Ut,Ut,Ut]);X.position.set(ot/2-2.2,7+Te/2,1.2),_t.add(X)}let ae=Et(1024,128,(X,it,Q)=>{X.clearRect(0,0,it,Q),X.font='800 104px "Barlow Condensed", Impact, sans-serif',X.textAlign="center",X.textBaseline="middle",X.shadowColor=at,X.shadowBlur=18,X.fillStyle=at,X.fillText(J,it/2,Q/2+4),X.shadowBlur=0,X.fillStyle="#fff6e0",X.fillText(J,it/2,Q/2+4)},"roof"+J+at),Be=re("roof"+J+at,()=>{let X=At(ae,{transparent:!0,alphaTest:.05,color:0});return X.userData.boost=1.4,X}),zt=new $t(new an(Math.min(ot*.85,26),Math.min(ot*.85,26)/8),Be);zt.position.set(0,W.top-W.y0+1.9,-.6),_t.add(zt);let[T,$]=Wn(W,st,0,0);_t.position.set(T,fe,$),_t.rotation.y=st.rot,de(_t,T,$)}else if(C.kind==="corp"){let{b:W,f:st,name:J,color:j}=C,ot=Math.min(hi(W,st)*.62,24),_t=ot/6.4,at=Et(1024,160,(Bt,ie,Te)=>{Bt.clearRect(0,0,ie,Te),Bt.font='700 118px "Barlow Condensed", Impact, sans-serif',Bt.textAlign="center",Bt.textBaseline="middle",Bt.shadowColor=j,Bt.shadowBlur=16,Bt.fillStyle=j,Bt.fillText(J,ie/2,Te/2+6,ie-40),Bt.shadowBlur=0,Bt.fillStyle="#ffffff",Bt.fillText(J,ie/2,Te/2+6,ie-40)},"corp"+J+j),yt=re("corp"+J+j,()=>{let Bt=At(at,{transparent:!0,alphaTest:.05,color:0});return Bt.userData.boost=1.5,Bt}),gt=new $t(new an(ot,_t),yt),[ft,Ft]=Wn(W,st,0,.14);gt.position.set(ft,W.top-1.7-_t/2,Ft),gt.rotation.y=st.rot,de(gt,ft,Ft,!0,1700),gt.castShadow=!1}else if(C.kind==="garage"){let{b:W,f:st}=C,J=Et(128,128,(yt,gt,ft)=>{yt.fillStyle="#1d5fbf",yt.fillRect(0,0,gt,ft),yt.strokeStyle="#ffffff",yt.lineWidth=8,yt.strokeRect(8,8,gt-16,ft-16),yt.fillStyle="#ffffff",yt.font="800 100px Arial, sans-serif",yt.textAlign="center",yt.textBaseline="middle",yt.fillText("P",gt/2,ft/2+6)},"garageP"),j=re("garageP",()=>At(J,{color:16777215})),ot=new $t(new xe(1.8,1.8,.3),[Ut,Ut,Ut,Ut,j,j]),[_t,at]=Wn(W,st,0,.3);ot.position.set(_t,W.top-2,at),ot.rotation.y=st.rot,de(ot,_t,at)}else if(C.kind==="motelSign"){let{x:W,z:st,f:J,name:j}=C,ot=Et(512,256,(ft,Ft,Bt)=>{ft.fillStyle="#16303a",ft.fillRect(0,0,Ft,Bt),ft.strokeStyle="#ff5a6e",ft.lineWidth=10,ft.strokeRect(10,10,Ft-20,Bt-20),ft.textAlign="center",ft.textBaseline="middle",ft.shadowColor="#ff5a6e",ft.shadowBlur=20,ft.fillStyle="#ff7a8a",ft.font='800 110px "Barlow Condensed", Impact, sans-serif',ft.fillText("MOTEL",Ft/2,92),ft.shadowColor="#5fe8ff",ft.fillStyle="#9ff3ff",ft.font='700 54px "Barlow Condensed", Impact, sans-serif',ft.fillText(j,Ft/2,186),ft.shadowBlur=0,ft.fillStyle="#ffd25a",ft.font="700 30px Arial",ft.fillText("VACANCY",Ft/2,232)},"motel"+j),_t=re("motel"+j,()=>At(ot)),at=new fn,yt=new $t(new Ce(.22,.28,7.5,10),Ut);yt.position.y=3.75;let gt=new $t(new xe(5.4,2.7,.35),[Ut,Ut,Ut,Ut,_t,_t]);gt.position.y=8.6,at.add(yt,gt),at.position.set(W,fe,st),at.rotation.y=J.rot+Math.PI/2,de(at,W,st)}let Xt=()=>{let C=new Zt({color:2236962,emissive:16777215,emissiveIntensity:0,roughness:.4});return C.onBeforeCompile=W=>{W.fragmentShader=W.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},C.customProgramCacheKey=()=>"crown",C},pe=Xt(),Z=Xt(),It=(C,W,st)=>{if(!C.length)return;let J=new Ue(W,st,C.length);C.forEach((j,ot)=>{V.compose(K.set(j.x,j.y,j.z),q.identity(),b.set(j.w,j.h,j.d)),J.setMatrixAt(ot,V),J.setColorAt(ot,y.set(j.color||"#ffffff"))}),J.layers.set(1),s.add(J)};It(a.filter(C=>!C.round&&!C.pulse),Dt,pe),It(a.filter(C=>C.round&&!C.pulse),ee.drum,pe),It(a.filter(C=>C.pulse),ee.drum,Z);let Gt=new En({color:new kt(6,.3,.2)}),te=new Ue(new Un(.45,8,6),Gt,h.length);h.forEach(([C,W,st],J)=>{V.makeTranslation(C,W,st),te.setMatrixAt(J,V)}),s.add(te);let Ct=y_(s,f),vt=[];for(let C of l)vt.push(__(s,t,C));let ue=new Set(ut.flatMap(({mesh:C})=>{let W=[];return C.traverse(st=>{if(st.isMesh)for(let J of[].concat(st.material))(J.emissiveMap||J===me)&&W.push(J)}),W})),Se=new Set(vt.map(C=>C.material)),Qe=new fr(160,C=>[C.w/2,C.d/2]).addAll(i);return{colliders:n,posts:c,buildingTops:i,emptyLots:r,topsGrid:Qe,landmark:Wt,catalog:Kt,stats:{buildings:n.length,facadeBoxes:(nt.facade||0)+(nt.facadeRound||0),pieces:nt},setDetail(C){U.range=C},update(C,W){pe.emissiveIntensity=C*1.6,Z.emissive.setHSL((1.03+.07*Math.sin(W*.12))%1,.9,.56),Z.emissiveIntensity=C*(2+.4*Math.sin(W*.7)),Gt.color.setRGB(8*(.15+.85*C)*(Math.sin(W*3.2)>.2?1:.04),.25,.15),Vt.emissiveIntensity=.3+C*2;for(let J of ue)J.emissiveIntensity=(.3+C*2.2)*(J.userData.boost||1);let st=Math.sin(W*37)>.93?.3:1;for(let J of Se)J.emissiveIntensity=(.3+C*2.2)*(J.userData.flicker?st:1);Ct&&(Ct.material.userData.night.value=C)}}}function y_(s,t){let e={value:0},n=ri("hillhouse",{color:16777215,roughness:.85},{uniforms:{night:e},fragmentPars:"uniform float night; float paHouseGlow;",color:`
      {
        float h = pa_hash12(floor(vPaWorld.xz * 0.2));
        float win = step(0.5, fract(vPaWorld.y * 0.45)) * step(0.4, fract((vPaWorld.x + vPaWorld.z) * 0.35)) * step(0.3, abs(vPaNormalW.y - 1.0));
        paHouseGlow = win * step(h, 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05), win * 0.7);
      }`,emissive:"totalEmissiveRadiance += vec3(1.0, 0.7, 0.4) * paHouseGlow * night * 2.5;"}),i=t.filter(([d,u])=>Ni(d,u)>4),r=new Ue(new xe(1,1,1),n,i.length),o=new ne,a=new He,c=new kt;i.forEach(([d,u],g)=>{let x=Mt(8,16),m=Mt(8,14),p=Mt(4,8);a.setFromAxisAngle(new P(0,1,0),bt()*Math.PI),o.compose(new P(d,Ni(d,u)+p/2-1,u),a,new P(x,p,m)),r.setMatrixAt(g,o),r.setColorAt(g,c.set(ye(Pn.stucco)))}),n.userData.night=e,r.castShadow=!1,r.receiveShadow=!0,s.add(r);let h=new Ue(Xp(),Ku(),i.length),l=new P,f=new P;for(let d=0;d<i.length;d++)r.getMatrixAt(d,o),o.decompose(l,a,f),o.compose(l.set(l.x,l.y+f.y/2,l.z),a,f.set(f.x,Math.min(f.x,f.z)*.3,f.z)),h.setMatrixAt(d,o);return h.receiveShadow=!0,h.layers.set(1),s.add(h),r}var ju=new Map;function __(s,t,{x:e,y:n,z:i,face:r,text:o,color:a}){let c=o+a;if(!ju.has(c)){let f=vn(t,512,128,(u,g,x)=>{u.fillStyle="#0b0d10",u.fillRect(0,0,g,x),u.font='700 70px "Barlow Condensed", Impact, sans-serif',u.textAlign="center",u.textBaseline="middle",u.shadowColor=a,u.shadowBlur=18,u.fillStyle=a,u.fillText(o,g/2,x/2+3),u.shadowBlur=0,u.fillStyle="#ffffffcc",u.fillText(o,g/2,x/2+3),u.strokeStyle=a,u.lineWidth=5,u.strokeRect(8,8,g-16,x-16)}),d=new Zt({color:1118481,map:f,emissive:16777215,emissiveMap:f,emissiveIntensity:1,roughness:.5});d.userData.flicker=we(.25),ju.set(c,d)}let h=Math.min(12,3+o.length*.9),l=new $t(new an(h,h/4),ju.get(c));return l.position.set(e,n,i),l.rotation.y=r==="west"?-Math.PI/2:r==="east"?Math.PI/2:r==="north"?Math.PI:0,s.add(l),so(l,520),l}var va=class s extends $t{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Bn;let n=this,i=e.color!==void 0?new kt(e.color):new kt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||s.ReflectorShader,h=e.multisample!==void 0?e.multisample:4,l=new yi,f=new P,d=new P,u=new P,g=new ne,x=new P(0,0,-1),m=new Ke,p=new P,_=new P,M=new Ke,v=new ne,E=this.camera,A=new xn(r,o,{samples:h,type:kn}),L=new on({name:c.name!==void 0?c.name:"unspecified",uniforms:Fi.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});L.uniforms.tDiffuse.value=A.texture,L.uniforms.color.value=i,L.uniforms.textureMatrix.value=v,this.material=L,this.onBeforeRender=function(I,S,w){if(d.setFromMatrixPosition(n.matrixWorld),u.setFromMatrixPosition(w.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(d,u),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(d),g.extractRotation(w.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(u),_.subVectors(d,x),_.reflect(f).negate(),_.add(d),E.position.copy(p),E.up.set(0,1,0),E.up.applyMatrix4(g),E.up.reflect(f),E.lookAt(_),E.far=w.far,E.updateMatrixWorld(),E.projectionMatrix.copy(w.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(E.projectionMatrix),v.multiply(E.matrixWorldInverse),v.multiply(n.matrixWorld),l.setFromNormalAndCoplanarPoint(f,d),l.applyMatrix4(E.matrixWorldInverse),m.set(l.normal.x,l.normal.y,l.normal.z,l.constant);let H=E.projectionMatrix;M.x=(Math.sign(m.x)+H.elements[8])/H.elements[0],M.y=(Math.sign(m.y)+H.elements[9])/H.elements[5],M.z=-1,M.w=(1+H.elements[10])/H.elements[14],m.multiplyScalar(2/m.dot(M)),H.elements[2]=m.x,H.elements[6]=m.y,H.elements[10]=m.z+1-a,H.elements[14]=m.w,n.visible=!1;let B=I.getRenderTarget(),O=I.xr.enabled,k=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(A),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(S,E),I.xr.enabled=O,I.shadowMap.autoUpdate=k,I.setRenderTarget(B);let G=w.viewport;G!==void 0&&I.state.viewport(G),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()}}};va.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var M_=`
uniform mat4 textureMatrix;
uniform float time;
varying vec4 vMirror;
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  float offshore = smoothstep(${ei.toFixed(1)}, ${(ei-70).toFixed(1)}, wp.x);
  wp.y += (sin(wp.x * 0.045 + time * 0.9) * 0.22 + sin(wp.z * 0.031 - wp.x * 0.017 + time * 0.65) * 0.18) * offshore;
  vWorld = wp.xyz;
  vMirror = textureMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,b_=`
uniform sampler2D tDiffuse;
uniform float useMirror;
uniform float time;
uniform vec3 sunLight;
uniform vec3 ambient;
varying vec4 vMirror;
varying vec3 vWorld;
${Ps}
${Lc}
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

  float shoreDist = ${ei.toFixed(1)} - vWorld.x; // meters offshore
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
}`;function Zp(s,t){let n=De.maxZ-De.minZ+3e3,i=new an(3200,n,128,256),r=new va(i,{textureWidth:512,textureHeight:512,clipBias:.003,multisample:0}),o=r.material.uniforms,a={...Fi.clone(oe.fog),...rn,...Gc,fogSunColor:rn.fogSunColor,fogSunDir:rn.fogSunDir,fogHeightFalloff:rn.fogHeightFalloff,tDiffuse:o.tDiffuse,textureMatrix:o.textureMatrix,useMirror:{value:1},time:{value:0},sunLight:{value:new kt},ambient:{value:new kt}};r.material.dispose(),r.material=new on({uniforms:a,vertexShader:M_,fragmentShader:b_,fog:!0,transparent:!0}),r.rotation.x=-Math.PI/2,r.position.set(ei+8-3200/2,Nu,0),r.userData.noAO=!0,r.camera.layers.set(0),r.renderOrder=1,r.frustumCulled=!1,s.add(r);let c=new ne,h=new Br(new Uint8Array([0,0,0,255]),1,1);h.needsUpdate=!0;let l=r.onBeforeRender,f=[];r.updateMatrixWorld(),r.geometry.computeBoundingBox();let d=r.geometry.boundingBox.clone().applyMatrix4(r.matrixWorld);d.expandByVector(new P(0,2,0));let u=new Es,g=new ne,x={paused:!1},m=function(...v){let E=v[2];if(!x.paused&&!(E&&ci.wetness.value<.02&&(g.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),u.setFromProjectionMatrix(g),!u.intersectsBox(d)))){ci.mirrorTex.value=h,ci.useMirror.value=0;for(let A of f)A.visible=!1;rn.mirrorPass.value=1,l.apply(this,v),rn.mirrorPass.value=0;for(let A of f)A.visible=!0;c.copy(r.matrixWorld).invert(),ci.mirrorMatrix.value.copy(o.textureMatrix.value).multiply(c),ci.mirrorTex.value=r.getRenderTarget().texture,ci.useMirror.value=1}};r.onBeforeRender=m;let p=!0,_=w_(s,t);for(let v of qn)v.plain&&_.lamps.push(...E_(s,t,v));let M=S_(s);return{ocean:r,pier:_,mirror:x,mirrorHide:f,setReflections(v,E=.5){p=v,a.useMirror.value=v?1:0,r.onBeforeRender=v?m:()=>{},this.resize(E)},resize(v=.5){if(!p)return;let E=t.getDrawingBufferSize(new St);r.getRenderTarget().setSize(Math.max(256,Math.round(E.x*v)),Math.max(256,Math.round(E.y*v)))},update(v,E){a.time.value=v,p||(ci.mirrorTex.value=h,ci.useMirror.value=0),ci.worldTime.value=v,a.sunLight.value.copy(E.sun.color).multiplyScalar(E.elevation>-1?E.sun.intensity:0),a.ambient.value.copy(E.hemi.color).multiplyScalar(E.hemi.intensity*.6),_.update(v,E.lampFactor),M.update(E.lampFactor)}}}function $p(){return ri("wood",{color:16777215,roughness:.8},{color:`
      {
        vec2 p = vPaWorld.xz;
        float plank = (abs(vPaNormalW.y) > 0.5 ? p.y : p.x) / 0.3;
        float fw = max(fwidth(plank), 0.002);
        float gap = pa_band(fract(plank), 0.0, 0.07, fw);
        float id = pa_hash12(vec2(floor(plank), 3.0));
        vec3 col = mix(vec3(0.3, 0.22, 0.15), vec3(0.42, 0.33, 0.23), id) * (0.82 + pa_noise(vec2(p.x * 3.0, plank)) * 0.25);
        diffuseColor.rgb = col * (1.0 - gap * 0.55);
      }`})}function w_(s,t){let e=new fn,{x0:n,x1:i,z:r,halfWidth:o,deckY:a}=Vi,c=$p(),h=n-i,l=new $t(new xe(h,.6,o*2),c);l.position.set((n+i)/2,a-.3,r),l.castShadow=l.receiveShadow=!0,e.add(l);let f=Vi.rampStart-n,d=Math.atan2(a-.16,f),u=new xe(Math.hypot(f,a),.6,o*2),g=new $t(u,c);g.position.set((Vi.rampStart+n)/2,(a+.16)/2-.3,r),g.rotation.z=-d,g.castShadow=g.receiveShadow=!0,e.add(g);let x=[];for(let F=Vi.rampStart-8;F>=i;F-=9)for(let U of[-o+1,0,o-1])x.push([F,r+U]);let m=new Ce(.32,.38,1,8),p=new Ue(m,new Zt({color:4930349,roughness:.9}),x.length),_=new ne;x.forEach(([F,U],V)=>{let K=(Ds(F,r)??a)-.5;_.compose(new P(F,(-6+K)/2,U),new He,new P(1,K- -6,1)),p.setMatrixAt(V,_)}),p.castShadow=!0,e.add(p),Vi.piles=x.filter(([F])=>F>ei-4).map(([F,U])=>({x:F,z:U,r:.45}));let M=new Zt({color:15262938,roughness:.5,metalness:.3});for(let F of[-1,1])for(let U of[.55,1.05]){let V=new $t(new xe(h,.08,.08),M);V.position.set((n+i)/2,a+U,r+F*(o-.1)),e.add(V)}let v=Math.floor(h/3),E=new Ue(new xe(.1,1.1,.1),M,v*2);for(let F=0;F<v;F++)for(let[U,V]of[-1,1].entries())_.makeTranslation(n-F*3,a+.55,r+V*(o-.1)),E.setMatrixAt(F*2+U,_);e.add(E);let A=new Zt({color:15327695,roughness:.75}),L=new Zt({color:3108730,roughness:.5,metalness:.2});for(let[F,U,V,q,K]of[[i+14,r+4.5,18,7,6],[i+36,r-5,12,6,5]]){let b=new $t(new xe(V,K,q),A);b.position.set(F,a+K/2,U),b.castShadow=b.receiveShadow=!0,e.add(b);let y=new $t(new xe(V+1,.4,q+1),L);y.position.set(F,a+K+.2,U),e.add(y)}let I=new Zt({color:1780275,roughness:.4,metalness:.6});for(let F of[-1,1]){let U=new $t(new xe(.6,8,.6),I);U.position.set(Vi.rampStart-2,4.1,r+F*(o+.4)),U.castShadow=!0,e.add(U)}let S=vn(t,1024,160,(F,U,V)=>{F.fillStyle="#0d1418",F.fillRect(0,0,U,V),F.textAlign="center",F.textBaseline="middle",F.font='800 96px "Barlow Condensed", Impact, sans-serif',F.shadowColor="#ff8a3d",F.shadowBlur=24,F.fillStyle="#ffb36b",F.fillText("VISTA PAC\xCDFICA PIER",U/2,V/2+4),F.shadowBlur=0,F.fillStyle="#fff3e0",F.fillText("VISTA PAC\xCDFICA PIER",U/2,V/2+4)}),w=new Zt({color:1118481,map:S,emissive:16777215,emissiveMap:S,emissiveIntensity:1}),N=new $t(new xe(.4,2.6,o*2+1.4),I);N.position.set(Vi.rampStart-2,8.6,r),e.add(N);for(let F of[-1,1]){let U=new $t(new an(o*2+1.2,2.4),w);U.position.set(Vi.rampStart-2+F*.21,8.6,r),U.rotation.y=F*Math.PI/2,e.add(U)}let H=new fn,B=19,O=a+B+3.5,k=i+55,G=r+.5;H.position.set(k,O,G);let rt=new Zt({color:14278112,roughness:.35,metalness:.8}),et=new ss(B,.22,8,96);for(let F of[-1.3,1.3]){let U=new $t(et,rt);U.position.z=F,H.add(U);let V=new $t(new ss(B*.55,.14,6,64),rt);V.position.z=F,H.add(V)}let z=24,Tt=new Ce(.07,.07,B,4);Tt.translate(0,B/2,0);for(let F=0;F<z;F++)for(let U of[-1.3,1.3]){let V=new $t(Tt,rt);V.rotation.z=F/z*Math.PI*2,V.position.z=U,H.add(V)}let Rt=new $t(new Ce(1.1,1.1,3.6,16),rt);Rt.rotation.x=Math.PI/2,H.add(Rt),e.add(H);for(let F of[-3.5,3.5])for(let U of[-1,1]){let V=Math.hypot(9,O-a),q=new $t(new Ce(.28,.4,V,8),rt);q.position.set(k+U*4.5,(O+a)/2,G+F),q.rotation.z=U*Math.atan2(9,O-a),q.castShadow=!0,e.add(q)}let Wt=16,Kt=new Zt({color:16777215,roughness:.4,metalness:.3}),Nt=new Ue(new xe(1.8,2,1.8),Kt,Wt),ee=["#e2523a","#f2c14e","#3aa0c8","#f7f2e6"],pt=new kt;for(let F=0;F<Wt;F++)Nt.setColorAt(F,pt.set(ee[F%4]));Nt.castShadow=!0,e.add(Nt);let wt=9,Dt=z*wt+96,Ht=new En({color:16777215}),Vt=new Ue(new Un(.16,6,4),Ht,Dt),dt=[];for(let F=0;F<z;F++){let U=F/z*Math.PI*2;for(let V=1;V<=wt;V++){let q=V/wt*B;dt.push([-Math.sin(U)*q,Math.cos(U)*q,1.45,V/wt,F])}}for(let F=0;F<96;F++){let U=F/96*Math.PI*2;dt.push([Math.cos(U)*B,Math.sin(U)*B,1.5,1,F])}dt.forEach(([F,U,V],q)=>{_.makeTranslation(F,U,V),Vt.setMatrixAt(q,_)}),H.add(Vt),Vt.layers.set(1);let Ot=[];for(let F=n-6;F>i+4;F-=16)for(let U of[-1,1])Ot.push([F,r+U*(o-.4)]);let D=new Ue(new Ce(.06,.09,4.5,6),I,Ot.length),ct=new Zt({color:16773846,emissive:16765066,emissiveIntensity:0}),ht=new Ue(new Un(.28,10,8),ct,Ot.length);Ot.forEach(([F,U],V)=>{_.makeTranslation(F,a+2.25,U),D.setMatrixAt(V,_),_.makeTranslation(F,a+4.6,U),ht.setMatrixAt(V,_)}),e.add(D,ht),fs(H),fs(e,{exclude:[H]}),s.add(e);let lt=new kt,tt=new Fn;return{lamps:Ot.map(([F,U])=>[F,a+4.6,U]),update(F,U){let V=F*.06;H.rotation.z=V;for(let K=0;K<Wt;K++){let b=V+K/Wt*Math.PI*2;tt.position.set(k+Math.cos(b)*B,O+Math.sin(b)*B-1.4,G),tt.updateMatrix(),Nt.setMatrixAt(K,tt.matrix)}Nt.instanceMatrix.needsUpdate=!0;let q=.25+U*5.5;for(let K=0;K<dt.length;K++){let[,,,b,y]=dt[K],Y=(F*.08+b*.35+y*.013)%1,nt=.55+.45*Math.sin(F*4-b*8+y*.5);lt.setHSL(Y,.85,.55),lt.multiplyScalar(q*nt),Vt.setColorAt(K,lt)}Vt.instanceColor.needsUpdate=!0,ct.emissiveIntensity=U*3,Kp.emissiveIntensity=U*3,w.emissiveIntensity=.3+U*1.8}}}var Kp=new Zt({color:16773846,emissive:16765066,emissiveIntensity:0});function E_(s,t,e){let n=new fn,{x0:i,x1:r,z:o,halfWidth:a,deckY:c}=e,h=$p(),l=i-r,f=new ne,d=new $t(new xe(l,.6,a*2),h);d.position.set((i+r)/2,c-.3,o);let u=e.rampStart-i,g=new $t(new xe(Math.hypot(u,c),.6,a*2),h);g.position.set((e.rampStart+i)/2,(c+.16)/2-.3,o),g.rotation.z=-Math.atan2(c-.16,u);let x=new $t(new xe(13,.6,9),h);x.position.set(r+9,c-.31,o+a+4.5);for(let O of[d,g,x])O.castShadow=O.receiveShadow=!0,n.add(O);let m=[];for(let O=e.rampStart-8;O>=r;O-=9)for(let k of[-a+1,0,a-1])m.push([O,o+k]);let p=new Ue(new Ce(.32,.38,1,8),new Zt({color:4930349,roughness:.9}),m.length);m.forEach(([O,k],G)=>{let et=(Ds(O,o)??c)-.5;f.compose(new P(O,(-6+et)/2,k),new He,new P(1,et- -6,1)),p.setMatrixAt(G,f)}),p.castShadow=!0,n.add(p),e.piles=m.filter(([O])=>O>ei-4).map(([O,k])=>({x:O,z:k,r:.45}));let _=new Zt({color:7301728,roughness:.6,metalness:.3});for(let O of[-1,1])for(let k of[.55,1.05]){let G=new $t(new xe(l,.08,.08),_);G.position.set((i+r)/2,c+k,o+O*(a-.1)),n.add(G)}let M=Math.floor(l/3),v=new Ue(new xe(.1,1.1,.1),_,M*2);for(let O=0;O<M;O++)for(let[k,G]of[-1,1].entries())f.makeTranslation(i-O*3,c+.55,o+G*(a-.1)),v.setMatrixAt(O*2+k,f);n.add(v);let E=new Zt({color:8368296,roughness:.75}),A=new Zt({color:9059116,roughness:.6}),L=new $t(new xe(9,4.2,6),E);L.position.set(r+9,c+2.1,o+a+5),L.castShadow=L.receiveShadow=!0;let I=new $t(new xe(10.2,.35,7.2),A);I.position.set(r+9,c+4.35,o+a+5),n.add(L,I);let S=vn(t,512,128,(O,k,G)=>{O.fillStyle="#10222a",O.fillRect(0,0,k,G),O.textAlign="center",O.textBaseline="middle",O.font='800 76px "Barlow Condensed", Impact, sans-serif',O.fillStyle="#ffe9b8",O.fillText("BAIT & TACKLE",k/2,G/2+4)}),w=new $t(new an(7,1.75),new Zt({map:S,emissive:16777215,emissiveMap:S,emissiveIntensity:.5,roughness:.6}));w.position.set(r+9,c+3.4,o+a+1.98),w.rotation.y=Math.PI,n.add(w);let N=[];for(let O=i-6;O>r+4;O-=18)for(let k of[-1,1])N.push([O,o+k*(a-.4)]);let H=new Ue(new Ce(.06,.09,4.5,6),_,N.length),B=new Ue(new Un(.28,10,8),Kp,N.length);return N.forEach(([O,k],G)=>{f.makeTranslation(O,c+2.25,k),H.setMatrixAt(G,f),f.makeTranslation(O,c+4.6,k),B.setMatrixAt(G,f)}),n.add(H,B),fs(n),s.add(n),N.map(([O,k])=>[O,c+4.6,k])}function S_(s){let t=new fn,e=new ne,n=new Zt({color:6269385,roughness:.6}),i=new Zt({color:15854296,roughness:.6}),r=new Zt({color:14175290,roughness:.6});for(let u=De.minZ+36;u<=De.maxZ-30;u+=130){if(qn.some(E=>Math.abs(u-E.z)<40))continue;let g=new fn,x=new $t(new xe(3.2,2.4,3.2),n);x.position.y=3.2;let m=new $t(new Mi(2.7,1.1,4),r);m.position.y=4.95,m.rotation.y=Math.PI/4;let p=new $t(new xe(4.4,.18,4.4),i);p.position.y=1.95;let _=new $t(new xe(.1,.9,2.4),new Zt({color:1911347,roughness:.1,metalness:.6}));_.position.set(-1.62,3.5,0),g.add(x,m,p,_);for(let E of[-1.8,1.8])for(let A of[-1.8,1.8]){let L=new $t(new xe(.18,2.4,.18),i);L.position.set(E,.8,A),g.add(L)}let M=new $t(new xe(4.5,.12,1.4),i);M.position.set(3.6,1,0),M.rotation.z=-.42,g.add(M);let v=-388;g.position.set(v,-.02-(Nn-v)*.0105,u),g.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),t.add(g)}let o=["#e8553a","#f0c24b","#3b8fc2","#f3efe4","#45a37f"],a=130,c=new Ue(new Mi(1.4,.55,12,1,!0),new Zt({color:16777215,roughness:.8,side:Sn}),a),h=new Ue(new Ce(.03,.03,2.3,4),i,a),l=new Ue(new xe(.9,.02,1.9),new Zt({color:16777215,roughness:.9}),a),f=new kt,d=new He;for(let u=0;u<a;u++){let g=Mt(De.minZ+30,De.maxZ-30);qn.some(p=>Math.abs(g-p.z)<14)&&(g+=30);let x=Mt(-398,-366),m=-.02-(Nn-x)*.0105;d.setFromEuler(new Ln(Mt(-.12,.12),0,Mt(-.12,.12))),e.compose(new P(x,m+2.3,g),d,new P(1,1,1)),c.setMatrixAt(u,e),e.compose(new P(x,m+1.15,g),d,new P(1,1,1)),h.setMatrixAt(u,e),c.setColorAt(u,f.set(ye(o))),d.setFromAxisAngle(new P(0,1,0),Mt(0,Math.PI)),e.compose(new P(x+Mt(-1.5,1.5),m+.02,g+Mt(-1.5,1.5)),d,new P(1,1,1)),l.setMatrixAt(u,e),l.setColorAt(u,f.set(ye(o)))}c.castShadow=h.castShadow=!0,l.receiveShadow=!0,t.add(c,h,l);for(let u of[c,h,l])u.layers.set(1);return fs(t),s.add(t),{update(){}}}var tf={value:new kt};function T_(s){return vn(s,256,1024,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<150;i++){let r=i/150,o=n*(.04+r*.94),a=e*.47*Math.sin(Math.PI*Math.pow(r,.75))*(.85+bt()*.3),c=70+bt()*50,h=40+bt()*30,l=25+bt()*20;t.strokeStyle=`rgb(${h},${c},${l})`,t.lineWidth=3.2+bt()*2.2;for(let f of[-1,1])t.beginPath(),t.moveTo(e/2,o),t.quadraticCurveTo(e/2+f*a*.5,o-a*.25,e/2+f*a,o-a*.55+bt()*8),t.stroke()}t.strokeStyle="#5b5a34",t.lineWidth=6,t.beginPath(),t.moveTo(e/2,n*.02),t.lineTo(e/2,n),t.stroke()})}function A_(s){return vn(s,512,512,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<46;i++){let r=bt()*Math.PI*2,o=Math.sqrt(bt())*e*.36,a=e/2+Math.cos(r)*o,c=n/2+Math.sin(r)*o,h=r+(bt()-.5)*1.2,l=40+bt()*50,f=.55+.45*(o/(e*.36));t.strokeStyle=`rgba(60,48,30,${.8})`,t.lineWidth=2,t.beginPath(),t.moveTo(a,c),t.lineTo(a+Math.cos(h)*l,c+Math.sin(h)*l),t.stroke();for(let d=0;d<16;d++){let u=bt(),g=a+Math.cos(h)*l*u+(bt()-.5)*18,x=c+Math.sin(h)*l*u+(bt()-.5)*18,m=(70+bt()*70)*f,p=(28+bt()*32)*f,_=(18+bt()*26)*f;t.fillStyle=`rgb(${p|0},${m|0},${_|0})`,t.save(),t.translate(g,x),t.rotate(h+(bt()-.5)*2.2),t.beginPath(),t.ellipse(0,0,9+bt()*7,3.5+bt()*2.5,0,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(190,210,140,${.25*f})`,t.lineWidth=1,t.beginPath(),t.moveTo(-8,0),t.lineTo(8,0),t.stroke(),t.restore()}}})}function R_(s,t,e,n,i){let o=[],a=[],c=[],h=new P(Math.cos(s),0,Math.sin(s)),l=new P(-h.z,0,h.x),f=new P;for(let u=0;u<=7;u++){let g=u/7,x=t-i*g*g;u>0&&(f=f.clone().addScaledVector(h,Math.cos(x)*e/7).add(new P(0,Math.sin(x)*e/7,0)));let m=n*Math.sin(Math.PI*Math.min(1,.15+g*.95))*.5+.05,p=.18*m;for(let[_,M]of[[-1,0],[0,.5],[1,1]]){let v=f.clone().addScaledVector(l,_*m);v.y+=_===0?p:-p*.2,o.push(v.x,v.y,v.z),a.push(M,1-g)}if(u>0){let _=(u-1)*3,M=u*3;c.push(_,M,_+1,_+1,M,M+1,_+1,M+1,_+2,_+2,M+1,M+2)}}let d=new en;return d.setAttribute("position",new be(o,3)),d.setAttribute("uv",new be(a,2)),d.setIndex(c),d.computeVertexNormals(),d}function C_(s,t,e){let n=[];for(let i=0;i<s;i++){let r=i%3,o=i/s*Math.PI*2+bt()*.3,a=[.95,.45,.05][r]+bt()*.2,c=[1.3,1.6,1.4][r];n.push(R_(o,a,t*(r===0?.8:1)*Mt(.88,1.1),e,c))}return ln(n)}function P_(s){let t=new Ce(.62,1,1,9,12,!0);t.translate(0,.5,0);let e=t.attributes.position;for(let n=0;n<e.count;n++){let i=e.getY(n);e.setX(n,e.getX(n)+s*i*i)}return t.computeVertexNormals(),t}function Jp(s,t,e={}){let n=ri(t,{map:s,alphaTest:.42,side:Sn,roughness:.72,metalness:0,...e},{uniforms:{worldTime:rn.worldTime,leafSun:tf,skySunDir:rn.skySunDir},vertexPars:"uniform float worldTime;",vertex:"",fragmentPars:"uniform vec3 leafSun; uniform vec3 skySunDir;",color:"diffuseColor.rgb *= 0.8 + 0.4 * pa_noise(vPaWorld.xz * 0.7 + vPaWorld.y);",emissive:`
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
      }`)},n}function I_(){return ri("palmtrunk",{color:16777215,roughness:.9},{color:`
      {
        float rings = pa_band(fract(vPaWorld.y * 3.2 + pa_noise(vPaWorld.xz * 3.0) * 0.4), 0.0, 0.18, fwidth(vPaWorld.y * 3.2));
        vec3 bark = mix(vec3(0.33, 0.29, 0.24), vec3(0.45, 0.4, 0.33), pa_noise(vec2(atan(vPaNormalW.z, vPaNormalW.x) * 4.0, vPaWorld.y * 0.8)));
        diffuseColor.rgb = bark * (1.0 - rings * 0.3);
      }`})}function Qu({lobes:s,cards:t,spread:e,crownY:n,lobeR:i,trunkH:r,columnar:o=!1}){let a=[],c=[],h=new Ce(.2,.34,r+.4,7);h.translate(0,(r+.4)/2,0),c.push(h);let l=[];for(let g=0;g<s;g++){if(o){let p=g/Math.max(1,s-1);l.push([new P((bt()-.5)*.3,n+p*6.4,(bt()-.5)*.3),i*(1.05-p*.55)]);continue}if(g===s-1){l.push([new P(0,n+i*.75,0),i*1.05]);continue}let x=g/(s-1)*Math.PI*2+bt()*.6,m=e*Mt(.75,1.1);l.push([new P(Math.cos(x)*m,n+Mt(-.6,.5),Math.sin(x)*m),i*Mt(.85,1.1)])}let f=new P(0,r*.92,0),d=new P,u=new P;for(let[g,x]of l){if(!o){let m=g.clone().sub(f),p=m.length()*.85,_=new Ce(.07,.14,p,5);_.translate(0,p/2,0),_.applyQuaternion(new He().setFromUnitVectors(new P(0,1,0),m.normalize())),_.translate(f.x,f.y,f.z),c.push(_)}for(let m=0;m<t;m++){let p=new an(2.1,2.1);d.set(bt()-.5,bt()-.35,bt()-.5).normalize();let _=Math.cbrt(bt()),M=g.clone().addScaledVector(d,_*x*.85),v=d.clone().add(new P(bt()-.5,bt()-.5,bt()-.5).multiplyScalar(.9)).normalize();p.lookAt(v),p.rotateZ(bt()*6.28),p.translate(M.x,M.y,M.z);let E=p.attributes.normal,A=p.attributes.position,L=new Float32Array(A.count*3);for(let I=0;I<A.count;I++){u.set(A.getX(I),A.getY(I),A.getZ(I));let S=u.clone().sub(g).normalize(),w=u.clone().sub(new P(0,n,0)).normalize();S.multiplyScalar(.7).addScaledVector(w,.3).normalize(),E.setXYZ(I,S.x,S.y,S.z);let N=Ne.clamp(.5+_*.4+S.y*.15,.35,1);L[I*3]=L[I*3+1]=L[I*3+2]=N}p.setAttribute("color",new yn(L,3)),a.push(p)}}return{canopy:ln(a),wood:ln(c.map(g=>g.index?g.toNonIndexed():g))}}function jp(s,t){let e=[],n=T_(t),i=A_(t),r=Jp(n,"frond"),o=Jp(i,"canopy",{vertexColors:!0}),a=I_(),c=new Zt({color:6048309,roughness:1}),h=(B,O=6)=>Fe.some(k=>Math.abs(B-k)<Me+O),l=(B,O=6)=>Le.some(k=>Math.abs(B-k)<Me+O),f=new gi(32);for(let B of cs){let[O,k]=ar(B);f.add({x:O,z:k})}let d=(B,O)=>f.near(B,O,8,k=>Math.abs(k.x-B)<4&&Math.abs(k.z-O)<6),u=[],g=[],x=[];for(let B=De.minZ+11;B<=De.maxZ-11;B+=18)qn.some(O=>Math.abs(B-O.z)<14)||(u.push([(pn.to+Nn)/2+Mt(-1.5,1.5),B+Mt(-2,2)]),we(.3)&&g.push([Nn-Mt(6,14),B+Mt(-4,4)]));for(let[B,O]of[[-320,Ye+10],[0,Ye+10],[-1280,640],[1280,640]])for(let k=sn+20;k<O;k+=28)if(!l(k))for(let G of[-1,1])u.push([k+Mt(-1,1),B+G*(Me+1.6)]);for(let B=Oe+10;B<je;B+=32)h(B)||u.push([sn+Me+1.6,B+Mt(-1,1)]);let m=[-160,0,640];for(let B of m)for(let O=Oe-26;O<je+40;O+=34)if(!h(O,7))for(let k of[-1,1]){let G=B+k*(Me+2.7),rt=O+(k>0?17:0);d(G,rt)||h(rt,7)||u.push([G+Mt(-.3,.3),rt+Mt(-1,1)])}for(let[B,O,k]of Fp()){let G=Ei/2-10,rt=k.district==="laurel"&&B>560&&B<1040&&O>160&&O<480,et=rt?44:26;for(let z=0;z<et;z++){let Tt=B+Mt(-G,G),Rt=O+Mt(-G,G);Math.abs(Tt-B)<9&&Math.abs(Rt-O)<9||(we(rt?.15:.4)?g.push([Tt,Rt]):x.push([Tt,Rt,Mt(.8,1.3),0]))}}for(let B of Le)if(!(B===sn||m.includes(B)&&B!==0)){for(let O of Is)for(let k of[-1,1])if(!(B===Ye&&k>0)&&!(ls[Ui(lr(B+k*40),O)][3]<.5))for(let G=O-50;G<=O+50;G+=25){let rt=B+k*(Me+1.8);d(rt,G)||x.push([rt,G,Mt(.6,.85),0])}}for(let B=0;B<2600;B++){let O=bt(),k=O<.5?Mt(Ye+60,Ye+900):Mt(-300,Ye+500),G=O<.5?Mt(Oe-700,je+700):O<.75?Mt(Oe-640,Oe-95):Mt(je+95,je+640),rt=Ni(k,G);rt<2||x.push([k,G,Mt(.7,1.6),rt])}let p=new ne,_=new He,M=new P,v=new P,E=new P(0,1,0),A=B=>[B[0],B[1]],L=B=>{B.castShadow=!0,B.receiveShadow=!0};function I(B,{heightRange:O,thickness:k,bend:G,crown:rt,skirt:et}){let z=P_(G),Tt=C_(rt.count,rt.length,rt.width),Rt=B.map(([Kt,Nt])=>{let ee=Mt(...O),pt=new ne().compose(M.set(Kt,-.1,Nt),_.setFromAxisAngle(E,bt()*Math.PI*2),v.set(k,ee,k)),wt=new P(G,1,0).applyMatrix4(pt),Dt=Mt(.85,1.15),Ht=new He().setFromAxisAngle(E,bt()*Math.PI*2);return e.push({x:Kt,z:Nt,r:.45}),{x:Kt,z:Nt,base:pt,top:wt,cs:Dt,crownQ:Ht}}),Wt=Kt=>[Kt.x,Kt.z];Rn(s,Rt,z,a,{at:Wt,far:800,setup:L,set:(Kt,Nt,ee)=>Kt.setMatrixAt(Nt,ee.base)}),Rn(s,Rt,Tt,r,{at:Wt,far:1100,setup:L,set:(Kt,Nt,ee)=>Kt.setMatrixAt(Nt,p.compose(ee.top,ee.crownQ,v.set(ee.cs,ee.cs,ee.cs)))}),et&&Rn(s,Rt,new Ce(.9,.55,1,8),c,{at:Wt,far:600,setup:Kt=>{Kt.castShadow=!0},set:(Kt,Nt,ee)=>Kt.setMatrixAt(Nt,p.compose(M.copy(ee.top).add(v.set(0,-1.6,0)),ee.crownQ,v.set(1,2.6,1)))})}I(u,{heightRange:[17,26],thickness:.36,bend:4,crown:{count:15,length:4.2,width:1.5},skirt:!0}),I(g,{heightRange:[6,10],thickness:.75,bend:.8,crown:{count:24,length:6.2,width:2.2},skirt:!1});let S={broad:Qu({lobes:6,cards:22,spread:2.1,crownY:5.6,lobeR:1.85,trunkH:4.2}),cypress:Qu({lobes:5,cards:14,spread:.25,crownY:2.4,lobeR:1.05,trunkH:1.6,columnar:!0}),far:Qu({lobes:3,cards:14,spread:1.7,crownY:5.4,lobeR:2.1,trunkH:4.2})},w={broad:[],cypress:[],far:[]};for(let B of x)B[3]>0?w[we(.35)?"cypress":"far"].push(B):w.broad.push(B);let N=new Zt({color:4865328,roughness:.95}),H=new kt;for(let[B,O]of Object.entries(w)){let{canopy:k,wood:G}=S[B],rt=B!=="broad",et=O.map(([Wt,Kt,Nt,ee])=>{let pt=B==="cypress"?Mt(1.1,1.6):Mt(.85,1.2),wt=new ne().compose(M.set(Wt,ee-.1,Kt),_.setFromAxisAngle(E,bt()*Math.PI*2),v.set(Nt,Nt*pt,Nt));return B==="broad"&&we(.22)?H.setHSL(Mt(.72,.78),Mt(.35,.5),Mt(.62,.72)):B==="cypress"?H.setHSL(Mt(.26,.32),Mt(.3,.45),Mt(.32,.42)):H.setHSL(Mt(.2,.3),Mt(.35,.6),Mt(.45,.62)),ee===0&&e.push({x:Wt,z:Kt,r:.5}),{x:Wt,z:Kt,matrix:wt,tint:H.clone()}}),Rt={at:Wt=>[Wt.x,Wt.z],far:rt?2400:750,chunk:rt?640:320,setup:Wt=>{Wt.castShadow=B!=="far",Wt.receiveShadow=!0,rt&&Wt.layers.set(1)}};Rn(s,et,k,o,{...Rt,set:(Wt,Kt,Nt)=>{Wt.setMatrixAt(Kt,Nt.matrix),Wt.setColorAt(Kt,Nt.tint)}}),Rn(s,et,G,N,{...Rt,far:rt?900:600,set:(Wt,Kt,Nt)=>Wt.setMatrixAt(Kt,Nt.matrix)})}return{trunkColliders:e,counts:{tall:u.length,stout:g.length,trees:x.length}}}var Wc=28;function zs(s,t){let e=(t%Wc+Wc)%Wc,n=s===0?e:(e+14)%Wc;return n<10?2:n<13?1:0}function D_(s){return vn(s,128,128,(t,e,n)=>{let i=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(.7,"rgba(255,255,255,0.15)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,e,n)})}var L_=`
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
}`,F_=`
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
}`;function ya(s,t=0){return new on({uniforms:{color:{value:new kt(s)},intensity:{value:t}},vertexShader:L_,fragmentShader:F_,transparent:!0,depthWrite:!1,blending:ai,side:Sn})}function Qp(s,t,e=[],n=null){let i=new ne,r=new He,o=new P,a=new P(1,1,1),c=new P(1,1,1),h=new P(0,1,0),l=new Zt({color:4146760,roughness:.45,metalness:.7}),f=[],d=Me+7;for(let F of Le)for(let U=Oe-40;U<=je+40;U+=38)if(!Fe.some(V=>Math.abs(U-V)<d))for(let V of[-1,1])F===sn&&V<0||f.push([F+V*(Me+.9),U+(V>0?19:0),-V,0]);for(let F of Fe)for(let U=sn+20;U<=Ye;U+=38)if(!Le.some(V=>Math.abs(U-V)<d))for(let V of[-1,1])f.push([U+(V>0?19:0),F+V*(Me+.9),0,-V]);let u=[];for(let F=De.minZ+16;F<=De.maxZ-16;F+=24)qn.every(U=>Math.abs(F-U.z)>12)&&u.push([(pn.from+pn.to)/2,F]);let g=new Ce(.09,.14,9,8);g.translate(0,4.5,0);let x=new xe(.1,.1,2.6);x.translate(0,8.85,1.3);let m=ln([g,x]),p=new xe(.42,.16,.9),_=new Zt({color:7829367,emissive:16766624,emissiveIntensity:0,roughness:.3}),M=F=>[F[0],F[1]],v=([,,F,U])=>r.setFromAxisAngle(h,Math.atan2(F,U)),E=F=>{F.castShadow=!0},A=Rn(s,f,m,l,{at:M,far:650,setup:E,set:(F,U,V)=>F.setMatrixAt(U,i.compose(o.set(V[0],fe,V[1]),v(V),c))}),L=Rn(s,f,p,_,{at:M,far:1700,set:(F,U,V)=>F.setMatrixAt(U,i.compose(o.set(V[0]+V[2]*2.5,fe+8.78,V[1]+V[3]*2.5),v(V),c))}),I=new Zt({color:16774888,emissive:16764810,emissiveIntensity:0,roughness:.2}),S=Rn(s,u,new Ce(.07,.1,4.2,8),l,{at:M,far:500,set:(F,U,[V,q])=>F.setMatrixAt(U,i.makeTranslation(V,fe+2.1,q))}),w=Rn(s,u,new Un(.3,12,8),I,{at:M,far:1400,set:(F,U,[V,q])=>F.setMatrixAt(U,i.makeTranslation(V,fe+4.4,q))}),N=[...f.map(([F,U,V,q])=>[F+V*2.6,U+q*2.6,13,1,0]),...u.map(([F,U])=>[F,U,8,.8,0]),...e.map(([F,U,V])=>[F,V,7,.7,U-4.6])],H=new En({map:D_(t),color:16757866,transparent:!0,depthWrite:!1,blending:ai,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2,fog:!0}),B=new an(1,1);B.rotateX(-Math.PI/2);let O=F=>U=>{U.renderOrder=F,U.userData.noAO=!0,U.layers.set(1)},k=Rn(s,N,B,H,{at:M,far:800,setup:O(2),set:(F,U,[V,q,K,b,y])=>F.setMatrixAt(U,i.compose(o.set(V,y+.04+(b<1?fe:0),q),r.identity(),a.set(K,1,K)))}),G=new Ce(.25,3.6,8.6,18,1,!0);G.translate(0,-4.3,0);let rt=ya(16757866),et=Rn(s,f,G,rt,{at:M,far:380,setup:O(3),set:(F,U,[V,q,K,b])=>F.setMatrixAt(U,i.makeTranslation(V+K*2.5,fe+8.7,q+b*2.5))}),z=[],Tt=[];for(let F of Le)for(let U of Fe){let V=[[F+6,U-16,0,1,0],[F-6,U+16,0,-1,0],[F+16,U+6,-1,0,1],[F-16,U-6,1,0,1]];for(let[q,K,b,y,Y]of V){if(Y===0&&(y>0&&U===je||y<0&&U===Oe)||Y===1&&(b<0&&F===sn||b>0&&F===Ye))continue;z.push([q,K,b,y,Y]);let nt=Y===0?F+14.2*Math.sign(q-F):q,mt=Y===0?K:U+14.2*Math.sign(K-U);Tt.push([nt,mt,q,K])}}let Rt=new Ce(.16,.2,7,8);Rt.translate(0,3.5,0),Rn(s,Tt,Rt,l,{at:M,far:650,setup:E,set:(F,U,[V,q])=>F.setMatrixAt(U,i.makeTranslation(V,fe,q))}),Rn(s,Tt,new xe(1,.16,.16),l,{at:M,far:650,setup:E,set:(F,U,[V,q,K,b])=>{r.setFromAxisAngle(h,Math.atan2(-(b-q),K-V)),F.setMatrixAt(U,i.compose(o.set((V+K)/2,6.8,(q+b)/2),r,a.set(Math.hypot(K-V,b-q)+1,1,1)))}});let Wt=new Zt({color:1909284,roughness:.5,metalness:.4});Rn(s,z,new xe(.5,1.4,.36),Wt,{at:M,far:650,set:(F,U,[V,q,K,b])=>F.setMatrixAt(U,i.compose(o.set(V,6.1,q),r.setFromAxisAngle(h,Math.atan2(K,b)),c))});let Kt=new Ce(.14,.14,.06,12);Kt.rotateX(Math.PI/2);let Nt=new on({uniforms:{uState:{value:new St}},vertexShader:`
      attribute vec2 aSig;
      uniform vec2 uState;
      varying vec3 vCol;
      void main() {
        float st = aSig.x < 0.5 ? uState.x : uState.y;
        vec3 c = aSig.y < 0.5 ? vec3(7.0, 0.35, 0.2) : aSig.y < 1.5 ? vec3(7.0, 3.6, 0.3) : vec3(0.3, 6.0, 2.2);
        vCol = abs(st - aSig.y) < 0.5 ? c : vec3(0.05);
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:`varying vec3 vCol;
void main() { gl_FragColor = vec4(vCol, 1.0); }`}),ee=z.flatMap(([F,U,V,q,K])=>[0,1,2].map(b=>[F,U,V,q,K,b]));Rn(s,ee,Kt,Nt,{at:M,far:900,cloneGeometry:!0,set:(F,U,[V,q,K,b,,y])=>F.setMatrixAt(U,i.compose(o.set(V+K*.2,6.55-y*.43,q+b*.2),r.setFromAxisAngle(h,Math.atan2(K,b)),c)),setup:(F,U)=>F.geometry.setAttribute("aSig",new dn(new Float32Array(U.flatMap(V=>[V[4],V[5]])),2))}),n&&(f.forEach(([F,U],V)=>n.add([A.refs[V],L.refs[V]],[k.refs[V],et.refs[V]],{type:"lamp",x:F,z:U,y:fe,r:.18,mass:.22,solid:6,kind:"topple",sparks:!0})),u.forEach(([F,U],V)=>n.add([S.refs[V],w.refs[V]],[k.refs[f.length+V]],{type:"lamp",x:F,z:U,y:fe,r:.14,mass:.12,solid:4,kind:"topple",sparks:!0})));let pt=Tt.map(([F,U])=>({x:F,z:U,r:.3})),wt=[["SURF FIZZ","TASTE THE SWELL","#ff6b4a","#14303d"],["HORIZON AIR","FLY THE COAST","#ffd36b","#1a2a52"],["VISTA BANK","YOUR MONEY. YOUR VIEW.","#9fe3d3","#10302c"],["NEON NIGHTS","THE PIER \xB7 FRIDAYS","#ff63c3","#1d0f2e"],["CALDERA GT","BUILT FOR THE COAST ROAD","#ff7a3d","#141a20"],["SOLSTICE","SUNSCREEN \xB7 SPF 50","#ffe2a8","#c2542e"],["RADIO KZRO","88.1 \xB7 COAST FUNK ALL NIGHT","#8cf5c0","#12202b"],["LAUREL PARK","JAZZ UNDER THE JACARANDAS","#d6b8ff","#22183a"]],Dt=[[-215,-432,-Math.PI/2],[100,212,Math.PI],[-136,30,-Math.PI/2],[270,362,Math.PI]];for(let[F,U,V]of Wi())V.kind!=="parking"||F<=320&&Math.abs(U)<=480||Dt.push([F+46,U+52,hr(F,U)<.5?0:Math.PI/2]);for(let F=Oe+200,U=0;F<je;F+=450,U++)Dt.push([Ye+25,F+U%2*50,-Math.PI/2]);for(let F=sn+380;F<Ye;F+=520)Dt.push([F,Oe-30,0],[F+130,je+30,Math.PI]);let Ht=[],Vt=new fn,dt=wt.map(([F,U,V,q])=>{let K=vn(t,1024,384,(y,Y,nt)=>{let mt=y.createLinearGradient(0,0,Y,nt);mt.addColorStop(0,q),mt.addColorStop(1,"#000000"),y.fillStyle=mt,y.fillRect(0,0,Y,nt),y.fillStyle=V,y.beginPath(),y.arc(Y*.82,nt*.5,nt*.36,0,Math.PI*2),y.fill(),y.fillStyle="#fff6e6",y.font='800 120px "Barlow Condensed", Impact, sans-serif',y.fillText(F,48,170),y.fillStyle=V,y.font='600 46px "Barlow", Arial, sans-serif',y.fillText(U,52,250),y.fillStyle="#ffffff40",y.fillRect(52,290,300,6)}),b=new Zt({map:K,emissive:16777215,emissiveMap:K,emissiveIntensity:0,roughness:.55});return Ht.push(b),b});Dt.forEach(([F,U,V],q)=>{let K=new fn,b=new $t(new an(14,5.25),dt[q%dt.length]);b.position.y=14;let y=new $t(new xe(14.4,5.6,.3),l);y.position.set(0,14,-.2);let Y=new $t(new Ce(.35,.45,11.5,10),l);Y.position.y=5.75,K.add(b,y,Y),K.position.set(F,fe,U),K.rotation.y=V,pt.push({x:F,z:U,r:.5}),K.traverse(nt=>{nt.isMesh&&(nt.castShadow=!0)}),Vt.add(K)}),fs(Vt),s.add(Vt);let Ot="VISTA PAC\xCDFICA",D=new Zt({color:16052714,roughness:.7,side:Sn,alphaTest:.5}),ct=new Map,ht=new fn,lt=-520;for(let F of Ot){if(F===" "){lt+=38;continue}ct.has(F)||ct.set(F,vn(t,128,160,(K,b,y)=>{K.clearRect(0,0,b,y),K.fillStyle="#fff",K.font='800 168px "Barlow Condensed", Impact, sans-serif',K.textAlign="center",K.textBaseline="alphabetic",K.fillText(F,b/2,y-8)}));let U=D.clone();U.map=ct.get(F);let V=new $t(new an(26,33),U),q=Ye+330;V.position.set(q,Math.min(Ni(q,lt-10),Ni(q,lt+10))+15,lt),V.rotation.y=-Math.PI/2,V.castShadow=!0,ht.add(V),lt+=30}s.add(ht);let tt=.7;return{lamps:f,circles:pt,setRealLamps(F){tt=F?.3:.7},update(F,U){_.emissiveIntensity=U*4,I.emissiveIntensity=U*2.6,H.opacity=U*tt,rt.uniforms.intensity.value=U*.09;for(let V of Ht)V.emissiveIntensity=.05+U*1.1;Nt.uniforms.uState.value.set(zs(0,F),zs(1,F))}}}var Xc=class{constructor(t,e){this.renderer=t,this.scene=e,this.size=0,this.target=null,this.camera=null,this.face=0,this.ready=!1,this.materials=[]}attach(t){this.materials=t,this.apply()}setSize(t){if(t!==this.size){if(this.size=t,this.target?.dispose(),this.target=null,this.camera=null,this.ready=!1,this.face=0,t>0){this.target=new Nr(t,{type:kn,generateMipmaps:!1}),this.camera=new Ur(.6,1400,this.target),this.camera.coordinateSystem=this.renderer.coordinateSystem,this.camera.updateCoordinateSystem();for(let e of this.camera.children)e.layers.set(0)}this.apply()}}apply(){let t=this.ready&&this.target?this.target.texture:null;for(let e of this.materials)e.envMap!==t&&(e.envMap=t,e.needsUpdate=!0)}update(t,e,n,i){if(!this.target)return;let r=this.renderer;this.face===0&&this.camera.position.copy(t),this.camera.updateMatrixWorld();let o=this.camera.children[this.face],a=r.getRenderTarget(),c=r.getActiveCubeFace(),h=r.getActiveMipmapLevel(),l=r.xr.enabled;r.xr.enabled=!1;for(let f of e)f.visible=!1;i(()=>{r.setRenderTarget(this.target,this.face),r.render(this.scene,o)});for(let f of e)f.visible=!0;r.setRenderTarget(a,c,h),r.xr.enabled=l,this.face=(this.face+1)%6,this.face===0&&(this.target.texture.needsPMREMUpdate=!0,this.ready||(this.ready=!0,this.apply()));for(let f of this.materials)f.envMapIntensity=n*(f.userData.envBoost||1)}};var Xe=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e],a=(t-n)/(r-n);return a=a*a*(3-2*a),i+(o-i)*a}return s[s.length-1][1]},z_={coupe:{length:4.62,wheelR:.355,wheelW:.27,track:.83,wheels:[.185,.79],body:{top:[[0,.6],[.05,.7],[.18,.8],[.33,.9],[.78,.96],[.92,.95],[1,.82]],bottom:[[0,.33],[.06,.25],[.94,.26],[1,.38]],width:[[0,.76],[.07,.93],[.3,.97],[.74,1],[.93,.96],[1,.84]],exp:3.4,taper:.1},cabin:{from:.31,to:.9,top:[[0,.88],[.3,1.27],[.52,1.29],[.72,1.14],[1,.93]],width:[[0,.8],[.35,.79],[.75,.76],[1,.66]],taper:.3,exp:2.6,roof:[.33,.64]},spoiler:!0,exhaust:[-.42,.42],leather:"#5a3a26",shirt:"#2b3038"},muscle:{length:4.92,wheelR:.37,wheelW:.3,track:.86,wheels:[.17,.8],body:{top:[[0,.72],[.04,.84],[.12,.89],[.4,.93],[.86,.96],[.96,.95],[1,.84]],bottom:[[0,.32],[.05,.26],[.95,.27],[1,.36]],width:[[0,.88],[.05,.96],[.5,.98],[.95,.97],[1,.9]],exp:5.2,taper:.05},cabin:{from:.43,to:.87,top:[[0,.91],[.3,1.31],[.55,1.32],[.86,1.08],[1,.96]],width:[[0,.8],[.5,.8],[1,.73]],taper:.22,exp:3.2,roof:[.3,.6]},scoop:!0,roundLamps:!0,grille:3,plainTail:!0,leather:"#17181b",shirt:"#5b2a22",ducktail:!0,exhaust:[-.56,-.44,.44,.56]},super:{length:4.56,wheelR:.36,wheelW:.32,track:.88,wheels:[.2,.8],body:{top:[[0,.42],[.06,.55],[.2,.66],[.35,.73],[.7,.86],[.9,.88],[1,.8]],bottom:[[0,.16],[.05,.13],[.95,.15],[1,.26]],width:[[0,.8],[.08,.95],[.3,.97],[.7,1.03],[.9,1],[1,.9]],exp:3.6,taper:.14},cabin:{from:.27,to:.72,top:[[0,.62],[.35,1.13],[.55,1.14],[.8,1],[1,.86]],width:[[0,.78],[.4,.74],[1,.62]],taper:.32,exp:2.4,roof:[.38,.62]},wing:!0,leather:"#7a1c16",shirt:"#1d1f24",intakes:!0,exhaust:[-.13,.13]},sedan:{length:4.85,wheelR:.34,wheelW:.24,track:.81,wheels:[.2,.77],body:{top:[[0,.66],[.06,.76],[.25,.86],[.32,.92],[.8,.98],[.94,.96],[1,.86]],bottom:[[0,.36],[.07,.3],[.93,.3],[1,.4]],width:[[0,.78],[.07,.92],[.5,.95],[.93,.93],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.82,top:[[0,.92],[.27,1.43],[.68,1.43],[.88,1.2],[1,.97]],width:[[0,.8],[.4,.82],[1,.76]],taper:.24,exp:2.8,roof:[.28,.72]},grille:3,plainTail:!0},suv:{length:4.75,wheelR:.39,wheelW:.27,track:.85,wheels:[.18,.79],body:{top:[[0,.82],[.06,.97],[.26,1.06],[.33,1.08],[.95,1.1],[1,1.02]],bottom:[[0,.44],[.07,.36],[.93,.37],[1,.46]],width:[[0,.82],[.07,.95],[.5,.98],[.95,.96],[1,.9]],exp:4.5,taper:.06},cabin:{from:.28,to:.98,top:[[0,1.05],[.2,1.72],[.85,1.74],[.97,1.62],[1,1.1]],width:[[0,.86],[.5,.88],[1,.84]],taper:.15,exp:4,roof:[.2,.96]},rails:!0,grille:4,plainTail:!0,cPillar:.8},hatch:{length:4.05,wheelR:.32,wheelW:.22,track:.78,wheels:[.19,.8],body:{top:[[0,.66],[.07,.78],[.28,.88],[.34,.92],[.95,.98],[1,.9]],bottom:[[0,.36],[.08,.3],[.94,.31],[1,.42]],width:[[0,.76],[.08,.89],[.5,.92],[.94,.9],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.97,top:[[0,.92],[.3,1.46],[.82,1.45],[.96,1.32],[1,.98]],width:[[0,.79],[.5,.8],[1,.76]],taper:.2,exp:3.2,roof:[.3,.92]},plainTail:!0,cPillar:.82},pickup:{length:5.4,wheelR:.41,wheelW:.28,track:.88,wheels:[.17,.75],body:{top:[[0,.92],[.05,1.06],[.24,1.14],[.3,1.16],[1,1.16]],bottom:[[0,.5],[.06,.42],[.95,.44],[1,.52]],width:[[0,.86],[.06,.98],[.95,1],[1,.98]],exp:5,taper:.04},cabin:{from:.29,to:.58,top:[[0,1.12],[.3,1.86],[.92,1.88],[1,1.16]],width:[[0,.9],[1,.9]],taper:.12,exp:4.5,roof:[.28,.94]},bed:!0,grille:4,plainTail:!0}};function qc(s,t,e,n,i,r,o,a,c=null){let h=(t+e)/2,l=(e-t)/2,f=2/n;for(let d=0;d<r;d++){let u=c?c[0]+(c[1]-c[0])*(d/(r-1)):d/r*Math.PI*2,g=Math.cos(u),x=Math.sin(u),m=s*Math.sign(g)*Math.pow(Math.abs(g),f),p=h+l*Math.sign(x)*Math.pow(Math.abs(x),f);m*=1-i*Math.max(0,x),o.push(m,p,a)}}function ef(s,t,{closed:e=!0,caps:n=!0}={}){let i=[],r=[];for(let l of s)i.push(...l);let o=s.length,a=t,c=e?a:a-1;for(let l=0;l<o-1;l++)for(let f=0;f<c;f++){let d=(f+1)%a,u=l*a+f,g=l*a+d,x=(l+1)*a+f,m=(l+1)*a+d;r.push(u,g,x,g,m,x)}if(n&&e)for(let[l,f]of[[0,!0],[o-1,!1]]){let d=i.length/3,u=0,g=0,x=0;for(let p=0;p<a;p++){let _=(l*a+p)*3;u+=i[_],g+=i[_+1],x+=i[_+2]}for(let p=0;p<a;p++){let _=(l*a+p)*3;i.push(i[_],i[_+1],i[_+2])}i.push(u/a,g/a,x/a);let m=d+a;for(let p=0;p<a;p++){let _=(p+1)%a;f?r.push(m,d+_,d+p):r.push(m,d+p,d+_)}}let h=new en;return h.setAttribute("position",new be(i,3)),h.setIndex(r),h.computeVertexNormals(),h.setAttribute("uv",new be(new Float32Array(i.length/3*2),2)),h}function U_(s,t,e){let n=[];for(let c of s)n.push(...c);let i=[],r=[];for(let c=0;c<s.length-1;c++)for(let h=0;h<t;h++){let l=(h+1)%t,f=c*t+h,d=c*t+l,u=(c+1)*t+h,g=(c+1)*t+l,x=[f,d,u,d,g,u];i.push(...x);let m=e(c,(h<t/2,h));(r[m]||(r[m]=[])).push(...x)}let o=new en;o.setAttribute("position",new be(n,3)),o.setIndex(i),o.computeVertexNormals();let a=[];for(let c=0;c<3;c++){let h=new en;h.setAttribute("position",o.attributes.position),h.setAttribute("normal",o.attributes.normal),h.setIndex(r[c]||[]);let l=h.toNonIndexed();l.setAttribute("uv",new be(new Float32Array(l.attributes.position.count*2),2)),a.push(l)}return a}function Ge(s,t,e,n,i,r,o=0,a=0,c=0){let h=new xe(s,t,e);return(o||a||c)&&h.applyMatrix4(new ne().makeRotationFromEuler(new Ln(o,a,c))),h.translate(n,i,r),h}function nf(s,t,e,n,i,r,o,a="y"){let c=new Ce(s,t,e,n);return a==="x"&&c.rotateZ(Math.PI/2),a==="z"&&c.rotateX(Math.PI/2),c.translate(i,r,o),c}function N_(s,t,e){let n=new P().subVectors(t,s),i=n.length(),r=new Ce(e,e,i,6);return r.translate(0,i/2,0),r.applyQuaternion(new He().setFromUnitVectors(new P(0,1,0),n.normalize())),r.translate(s.x,s.y,s.z),r}var sf=new Map,O_=["coupe","muscle","super"];function Zc(s){if(sf.has(s))return sf.get(s);let t=z_[s],e=t.length,n=-e/2,i=q=>n+q*e,r=t.wheels.map(i),o=t.wheelR+.07,a=O_.includes(s),c=a?40:26,h=a?64:40,l=q=>{let K=Xe(t.body.width,q);for(let b of r)K*=1+.03*Math.exp(-(((i(q)-b)/.5)**2));return K},f=(q,K)=>{let b=Xe(t.body.bottom,q),y=Xe(t.body.top,q),Y=(b+y)/2,nt=(y-b)/2,mt=2/t.body.exp,ut=Math.sign(K-Y)*Math.min(1,Math.abs(K-Y)/nt)**(1/mt);return l(q)*Math.sqrt(Math.max(0,1-ut*ut))**mt*(1-t.body.taper*Math.max(0,ut))},d=q=>(q-n)/e,u=[];for(let q=0;q<=h;q++){let K=q/h,b=i(K),y=Xe(t.body.bottom,K);for(let mt of r){let ut=b-mt;Math.abs(ut)<o&&(y=Math.max(y,t.wheelR+Math.sqrt(o*o-ut*ut)*.98))}let Y=Xe(t.body.top,K),nt=[];qc(l(K),Math.min(y,Y-.08),Y,t.body.exp,t.body.taper,c,nt,b),u.push(nt)}let g=[ef(u,c)],x=t.cabin,m=[],p=q=>Xe(x.top,q),_=a?36:20;for(let q=0;q<=_;q++){let K=q/_,b=x.from+K*(x.to-x.from),y=i(b),Y=Xe(t.body.top,b)-.06,nt=Math.max(p(K),Y+.02),mt=Xe(x.width,K),ut=[];qc(mt,Y,nt,x.exp,x.taper,c,ut,y),m.push(ut)}let M=s==="sedan"||s==="suv"||s==="hatch",v=(x.roof[0]+x.roof[1])/2,E=Math.round(c*.1),A=c/2-E,L=(q,K)=>q>=E-K&&q<E||q>=A&&q<A+K,I=U_(m,c,(q,K)=>{let b=(q+.5)/_,y=b>=x.roof[0]&&b<=x.roof[1];return K>=E&&K<A?y?1:0:b<x.roof[0]?L(K,1)?1:0:b>x.roof[1]?L(K,a?2:1)?1:0:L(K,1)?1:Math.abs(b-v)<.62/_?2:t.cPillar&&Math.abs(b-t.cPillar)<.62/_?1:0}),S=[I[0]];g.push(I[1]);let w=(q,K)=>{let b=q.index?q.toNonIndexed():q,y=new kt(K),Y=b.attributes.position.count,nt=new Float32Array(Y*3);for(let mt=0;mt<Y;mt++)nt[mt*3]=y.r,nt[mt*3+1]=y.g,nt[mt*3+2]=y.b;return b.setAttribute("color",new yn(nt,3)),b.attributes.uv||b.setAttribute("uv",new be(new Float32Array(Y*2),2)),b},N=[];if(a){let q=[],K=[];for(let pe=0;pe<=_;pe++){let Z=pe/_,It=x.from+Z*(x.to-x.from),Gt=i(It),te=Xe(t.body.top,It),Ct=Xe(x.width,Z),vt=[];if(qc(Ct*.97,te-.03,Math.min(te+.035,Math.max(p(Z)-.01,te-.01)),4,0,16,vt,Gt),q.push(vt),Z>=x.roof[0]-.03&&Z<=x.roof[1]+.03){let ue=[];qc(Ct*.985,te-.06,Math.max(p(Z),te)-.004,x.exp,x.taper,12,ue,Gt,[.24*Math.PI,.76*Math.PI]),K.push(ue)}}N.push(w(ef(q,16),"#0c0d0f")),K.length>1&&N.push(w(ef(K,12,{closed:!1,caps:!1}),"#17181b"));let b=t.leather||"#1b1c20",y=x.roof[0]+.1,Y=x.from+y*(x.to-x.from),nt=i(Y),mt=Xe(t.body.top,Y),ut=p(y),Qt=Math.min(ut-.19,mt+.26),Et=Xe(x.width,y)*.47;for(let pe of[-1,1])N.push(w(Ge(.46,Qt-mt+.12,.13,pe*Et,(Qt+mt)/2-.06,nt+.2,-.12),b)),N.push(w(Ge(.24,.17,.09,pe*Et,Qt+.06,nt+.2),b));let Jt=x.from+.2*(x.to-x.from),re=i(Jt),At=Xe(t.body.top,Jt);N.push(w(Ge(Xe(x.width,.2)*1.7,.07,.24,0,At+.005,re+.04),"#101114")),N.push(w(Ge(.3,.05,.12,-Et,At+.05,re+.1,.25),"#0b0b0d"));let Ut=new ss(.17,.016,8,24);Ut.rotateX(-.42),Ut.translate(-Et,At+.07,re+.32),N.push(w(Ut,"#050506")),N.push(w(Ge(.3,.025,.03,-Et,At+.07,re+.32,-.42),"#0a0a0b")),N.push(w(Ge(.42,.3,.2,-Et,Qt-.3,nt+.08,-.1),t.shirt||"#23272e"));let me=new Ce(.05,.055,.1,8);me.translate(-Et,Qt-.12,nt+.07),N.push(w(me,"#b98562"));let de=new Un(.108,14,10);de.scale(.92,1.08,1),de.translate(-Et,Qt,nt+.06),N.push(w(de,"#c08a66"));let Xt=new Un(.114,14,8,0,Math.PI*2,0,Math.PI*.52);Xt.scale(.94,1.08,1.02),Xt.translate(-Et,Qt+.012,nt+.075),N.push(w(Xt,"#1a1410"));for(let pe of[-1,1]){let Z=new P(-Et+pe*.2,Qt-.22,nt+.04),It=new P(-Et+pe*.15,At+.1,re+.33);N.push(w(N_(Z,It,.045),t.shirt||"#23272e"))}}let H=[],B=[],O=[],k=[],G=[],rt=(q,K,b)=>{let y=x.from+q*(x.to-x.from),Y=Xe(t.body.top,y)-.02,nt=p(q),mt=Xe(x.width,q)*(1-x.taper*(b?.92:0))*.97;return new P(K*mt,b?nt-.02:Y,i(y))};H.push(I[2]);for(let q of[-1,1]){let K=rt(.1,q,!1);g.push(Ge(.16,.1,.12,K.x+q*.14,K.y+.06,K.z)),H.push(Ge(.1,.025,.04,K.x+q*.05,K.y+.03,K.z)),B.push(Ge(.13,.075,.008,K.x+q*.14,K.y+.06,K.z+.062))}{let q=x.from+.035*(x.to-x.from),K=Xe(t.body.top,q)+.012,b=i(q);for(let[y,Y,nt]of[[-.2,.52,.1],[.3,.46,.1]])G.push(Ge(Y,.012,.022,y,K,b,0,nt,0))}let et=(x.roof[0]+x.roof[1])/2,z=i(x.from+et*(x.to-x.from)),Tt=r[0]+o+.14,Rt=M?[Tt,z,r[1]-o-.04]:[Tt,Math.min(z+.42,r[1]-o-.05),99],Wt=Xe(t.body.bottom,.5)+.1,Kt=q=>{let K=d(q-.16),b=Xe(t.body.top,K)-.12;for(let y of[-1,1])B.push(Ge(.022,.028,.15,y*(f(K,b)+.006),b,q-.16))};Kt(Rt[1]),M&&Kt(Rt[2]);let Nt=i(x.from)-.07,ee=l(.15)*.78,pt=!M&&!t.bed&&!t.wing||s==="sedan"?i(x.to)+.07:99,wt={a:new Ke(Rt[0],Rt[1],Rt[2],Wt),b:new Ke(Nt,pt,ee,t.intakes?1:0)},Dt=q=>Xe(t.body.width,q),Ht=(Xe(t.body.bottom,.02)+Xe(t.body.top,.02))/2,Vt=Xe(t.body.top,.02),dt=[],Ot=[],D=(q,K,b,y,Y,nt=a?18:10)=>nf(q,q,K,nt,b,y,Y,"z");for(let q of[-1,1]){let K=q*Dt(.02)*.62,b=Ht+(Vt-Ht)*.45,y=q*.32;if(G.push(Ge(.46,.115,.06,K,b,n+.045,0,y,0)),t.roundLamps)for(let Y of[-.105,.105])B.push(D(.062,.03,K+Y,b,n+.022+Math.abs(Y-q*.1)*.12)),O.push(D(.05,.034,K+Y,b,n+.018+Math.abs(Y-q*.1)*.12));else{O.push(Ge(.38,.05,.05,K,b-.004,n+.03,0,y,0));for(let Y of[-.1,.07])O.push(D(.036,.03,K+Y,b-.004,n+.012+(q*Y>0?.035:0)));O.push(Ge(.34,.014,.03,K,b+.058,n+.04,0,y,0))}Ot.push(Ge(.07,.035,.05,q*Dt(.03)*.93,b-.01,n+.12,0,q*.9,0))}let ct=Xe(t.body.bottom,.02)+.17;if(G.push(Ge(Dt(.03)*1.05,.18,.12,0,ct,n+.06)),t.grille)for(let q=0;q<t.grille;q++)B.push(Ge(Dt(.03)*.98,.012,.02,0,ct-.06+q*.12/Math.max(t.grille-1,1),n-.002));H.push(Ge(Dt(.03)*1.7,.04,.22,0,Xe(t.body.bottom,.02)+.02,n+.1));let ht=Xe(t.body.top,.97);t.plainTail||k.push(Ge(Dt(.98)*1.72,.05,.06,0,ht-.08,-n-.02));for(let q of[-1,1]){let K=q*Dt(.98)*.68;k.push(Ge(.36,t.plainTail?.15:.11,.06,K,ht-.12,-n-.03)),dt.push(Ge(.09,.05,.06,K-q*.24,ht-(t.plainTail?.16:.13),-n-.026)),Ot.push(Ge(.08,.05,.06,K+q*.2,ht-(t.plainTail?.16:.13),-n-.034))}{let q=rt(Math.min(x.roof[1]+.02,.97),0,!0);k.push(Ge(.3,.018,.03,0,q.y-.02,q.z+.03))}G.push(Ge(Dt(.98)*1.5,.16,.1,0,Xe(t.body.bottom,.98)+.06,-n-.05));let lt=Xe(t.body.bottom,.98)+.03,tt=(t.exhaust||[-.42,.42]).map(q=>new P(q,lt,-n+.06));for(let q of tt)B.push(nf(.05,.05,.14,12,q.x,q.y,-n+.02,"z")),G.push(nf(.04,.04,.02,10,q.x,q.y,-n+.085,"z"));(M||s==="coupe")&&G.push(Ge(.035,.05,.16,0,p(x.roof[1]-.06)+.03,i(x.from+(x.roof[1]-.06)*(x.to-x.from)),-.25));for(let q of[-1,1]){let K=r[1]-r[0]-o*2;H.push(Ge(.06,.08,K,q*Dt(.5)*.99,Xe(t.body.bottom,.5)+.03,(r[0]+r[1])/2))}if(t.spoiler&&g.push(Ge(Dt(.96)*1.5,.022,.12,0,Xe(t.body.top,.96)+.012,i(.965),-.2)),t.ducktail&&g.push(Ge(Dt(.95)*1.78,.05,.2,0,Xe(t.body.top,.95)+.03,i(.955),.28)),t.scoop){let q=Xe(t.body.top,.22);g.push(Ge(.56,.09,.7,0,q+.035,i(.23),.04)),G.push(Ge(.46,.05,.03,0,q+.05,i(.23)-.35))}if(t.wing){let q=Xe(t.body.top,.93),K=i(.95);for(let b of[-1,1])H.push(Ge(.04,.3,.16,b*.42,q+.14,K,.25));H.push(Ge(Dt(.95)*1.86,.035,.34,0,q+.3,K+.02,-.12));for(let b of[-1,1])H.push(Ge(.03,.14,.38,b*Dt(.95)*.93,q+.29,K+.02))}if(t.intakes){for(let q of[-1,1]){let b=(Xe(t.body.bottom,.66)+Xe(t.body.top,.66))/2;G.push(Ge(.05,.2,.52,q*Dt(.66)*.985,b,i(.66),0,q*.14,0))}G.push(Ge(Dt(.03)*1.8,.03,.3,0,Xe(t.body.bottom,.02)+.01,n+.12))}if(t.rails)for(let q of[-1,1])H.push(Ge(.05,.05,e*.5,q*.62,Xe(x.top,.6)+.04,i(.62)));if(t.bed){let q=i(x.to+.01),K=-n-.05,b=Xe(t.body.top,.8);G.push(Ge(Dt(.8)*1.86,.04,K-q,0,b-.02,(q+K)/2));for(let y of[-1,1])g.push(Ge(.08,.4,K-q,y*Dt(.8)*.96,b+.2,(q+K)/2));g.push(Ge(Dt(.8)*1.9,.4,.08,0,b+.2,K))}let F=[Ge(.52,.12,.01,0,Xe(t.body.bottom,.99)+.24,-n+.005),Ge(.52,.12,.01,0,Xe(t.body.bottom,.01)+.28,n-.005)],U=q=>ln(q.map(K=>K.index?K.toNonIndexed():K).map(K=>(K.attributes.uv||K.setAttribute("uv",new be(new Float32Array(K.attributes.position.count*2),2)),K))),V={type:t,parts:{paint:U(g),glass:U(S),trim:U(H),dark:U(G),chrome:U(B),head:U(O),tail:U(k),plate:U(F),rev:U(dt),amber:U(Ot),...a?{interior:ln(N)}:{}},seams:wt,wheels:[],wheel:B_(t.wheelR,t.wheelW,!a),exhausts:tt};for(let q of r)for(let K of[-1,1])V.wheels.push({x:K*t.track,y:t.wheelR,z:q,side:K,front:q<0});return sf.set(s,V),V}function B_(s,t,e=!1){let n=s*.69,i=e?[[n,-t/2+.01],[s*.95,-t/2+.01],[s,-t/2+.06],[s,t/2-.06],[s*.95,t/2-.01],[n,t/2-.01]]:[[n,-t/2+.01],[s*.86,-t/2-.004],[s*.97,-t/2+.025],[s,-t/2+.06],[s,t/2-.06],[s*.97,t/2-.025],[s*.86,t/2+.004],[n,t/2-.01]],r=new Ko(i.map(([g,x])=>new St(g,x)),e?14:30);r.rotateZ(Math.PI/2);let o=[],a=new Ce(n,n,t-.03,e?10:24,1,!0);if(a.rotateZ(Math.PI/2),o.push(a),!e){let g=new ss(n-.008,.014,6,32);g.rotateY(Math.PI/2),g.translate(t/2-.03,0,0),o.push(g)}let c=t/2-.05,h=e?5:10;for(let g=0;g<h;g++){let x=g/h*Math.PI*2+(e?0:g%2*.12),m=new xe(.035,n-.05,.045);m.translate(0,(n-.05)/2+.05,0),m.rotateX(x),m.translate(c,0,0),o.push(m)}let l=new Ce(.07,.08,.05,e?6:12);if(l.rotateZ(Math.PI/2),l.translate(c+.01,0,0),o.push(l),!e){for(let x=0;x<5;x++){let m=x/5*Math.PI*2,p=new Ce(.011,.011,.02,6);p.rotateZ(Math.PI/2),p.translate(c+.04,Math.cos(m)*.048,Math.sin(m)*.048),o.push(p)}let g=new Ce(.028,.032,.02,12);g.rotateZ(Math.PI/2),g.translate(c+.042,0,0),o.push(g)}let f=ln(o.map(g=>g.index?g.toNonIndexed():g)),d=new Ce(n*.82,n*.82,.03,e?10:24);d.rotateZ(Math.PI/2),d.translate(c-.06,0,0);let u=new xe(.07,.16,.12);return u.translate(c-.03,n*.55,.07),{tire:r,rim:f,disc:d,caliper:u}}function k_(s,t="PCFC 7X"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.fillStyle="#e9e6da",n.fillRect(0,0,256,64),n.fillStyle="#1e3b78",n.font="700 14px Arial",n.textAlign="center",n.fillText("VISTA PAC\xCDFICA",128,16),n.fillStyle="#7a1f1f",n.font='700 34px "Barlow Condensed", Impact, monospace',n.fillText(t,128,52);let i=new Zs(e);return i.colorSpace=$n,i}function _a(s,t={}){let{seams:e=null,twoTone:n=null,...i}=t,r=new Ks({color:s,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.1,...i}),o={uSeamA:{value:e?e.a:new Ke(99,99,99,0)},uSeamB:{value:e?e.b:new Ke(99,99,0,0)}};return r.userData.seamUniforms=o,r.onBeforeCompile=a=>{Object.assign(a.uniforms,o),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)},r.customProgramCacheKey=()=>"car-paint"+(n?"-two":""),r}function t0(s){let t=new Zt({color:1316118,roughness:.92,metalness:0}),[e,n]=s?[.4,.6]:[3/7,4/7];return t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
roughnessFactor = mix(roughnessFactor, 1.0, paTread);`)},t.customProgramCacheKey=()=>"car-tyre"+(s?"-lite":""),t}var Yc=null;function co(s){if(Yc)return Yc;let t=k_(s);return Yc={glass:new Ks({color:791061,metalness:.1,roughness:.04,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4}),glassClear:new Ks({color:725782,metalness:0,roughness:.03,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.8,transparent:!0,opacity:.8}),interior:new Zt({vertexColors:!0,roughness:.82,metalness:0,side:Sn}),trim:new Zt({color:1316890,roughness:.45,metalness:.4}),dark:new Zt({color:461066,roughness:.6,metalness:.2}),chrome:new Zt({color:14212319,roughness:.12,metalness:1}),plate:new Zt({map:t,roughness:.5}),tire:t0(!1),tireLite:t0(!0),rim:new Zt({color:12172994,roughness:.22,metalness:1}),disc:new Zt({color:6053472,roughness:.4,metalness:.9}),caliper:new Zt({color:12728866,roughness:.4,metalness:.3})},Yc}var e0=Ne.damp,Tn=Ne.clamp,dr={coupe:{name:"CALDERA GT",model:"coupe",blurb:"Grand tourer \xB7 450 hp V8, rear drive, balanced",stats:{speed:.8,accel:.72,grip:.76},spec:"450 HP \xB7 1,580 KG \xB7 305 KM/H",mass:1580,front:.52,cgH:.47,drive:"rwd",torque:[[900,360],[2500,480],[4500,520],[6200,500],[6900,468],[7400,405]],idle:900,redline:7400,gears:[3.31,2.13,1.55,1.19,.97,.79],final:3.7,eff:.88,shift:.2,cdA:.7,clA:.3,aeroFront:.45,mu:1.1,rollFront:.57,brakeBias:.63,brakeG:1.3,steerLock:.6,roll:.0065,rollMax:.09,pitch:.0028,nitro:.45,engine:"v8"},muscle:{name:"VANTA SS",model:"muscle",blurb:"Muscle car \xB7 465 hp big-block, huge torque, loose tail",stats:{speed:.74,accel:.74,grip:.5},spec:"465 HP \xB7 1,760 KG \xB7 290 KM/H",mass:1760,front:.54,cgH:.53,drive:"rwd",torque:[[750,500],[2e3,610],[3800,650],[5e3,622],[5800,570],[6400,495]],idle:750,redline:6400,gears:[2.66,1.78,1.3,1,.74],final:3.73,eff:.85,shift:.28,cdA:.92,clA:.05,aeroFront:.5,mu:1.04,rollFront:.52,brakeBias:.66,brakeG:1.15,steerLock:.58,roll:.0095,rollMax:.12,pitch:.0042,nitro:.5,engine:"bigblock"},super:{name:"VENTUS R",model:"super",blurb:"Mid-engine supercar \xB7 640 hp V10, track grip",stats:{speed:.97,accel:.95,grip:.96},spec:"640 HP \xB7 1,420 KG \xB7 345 KM/H",mass:1420,front:.42,cgH:.41,drive:"rwd",torque:[[1100,370],[3e3,500],[5e3,580],[6800,600],[8200,555],[8800,495]],idle:1100,redline:8800,gears:[3.13,2.19,1.63,1.29,1.03,.84,.69],final:3.9,eff:.9,shift:.09,cdA:.78,clA:1.15,aeroFront:.4,mu:1.22,rollFront:.6,brakeBias:.58,brakeG:1.5,steerLock:.56,roll:.0035,rollMax:.05,pitch:.0018,nitro:.4,engine:"v10"}},ba=["coupe","muscle","super"],Ma={easy:{label:"EASY HANDLING",abs:!0,tc:1,esc:!0,grip:1.16,steerMargin:.06,counter:.85,align:!0,wet:.35},sport:{label:"SPORT HANDLING",abs:!0,tc:.55,esc:!1,grip:1,steerMargin:.1,counter:.55,align:!1,wet:1},sim:{label:"SIMULATION HANDLING",abs:!1,tc:0,esc:!1,grip:1,steerMargin:.15,counter:.25,align:!1,wet:1}},Us=9.81,H_=1.2,rf={road:[1,.013],curb:[.9,.02],grass:[.55,.09],sand:[.45,.24]};function G_(s,t){let e=s.torque;if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++)if(t<=e[n][0])return e[n-1][1]+(e[n][1]-e[n-1][1])*(t-e[n-1][0])/(e[n][0]-e[n-1][0]);return e[e.length-1][1]}function n0(s){let i=9.5*s;return Math.sin(1.45*Math.atan(i-.25*(i-Math.atan(i))))}function V_(s,t,e){let n=Math.sin(s*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function W_(s){let t=s.attributes.position.array,e=s.attributes.normal.array,n=[[[],[]],[[],[]]];for(let i=0;i<t.length;i+=9){let r=t[i]+t[i+3]+t[i+6]<0?0:1;for(let o=0;o<9;o++)n[r][0].push(t[i+o]),n[r][1].push(e[i+o])}return n.map(([i,r])=>{let o=new en;return o.setAttribute("position",new be(i,3)),o.setAttribute("normal",new be(r,3)),o})}var $c=class{constructor(t,e,n="coupe"){this.mode="easy",this.aids=Ma.easy,this.mats=co(e),this.paint=_a("#df6339"),this.group=new fn,this.body=new fn,this.group.add(this.body),this.lightMats={head:[],tail:[],amber:[]};for(let r=0;r<2;r++)this.lightMats.head.push(new Zt({color:16777215,emissive:16774364,emissiveIntensity:2,roughness:.2})),this.lightMats.tail.push(new Zt({color:4196358,emissive:16720914,emissiveIntensity:1.5,roughness:.3})),this.lightMats.amber.push(new Zt({color:7027208,emissive:16747028,emissiveIntensity:0,roughness:.3}));this.revMat=new Zt({color:12105906,emissive:16777215,emissiveIntensity:0,roughness:.25}),this.signal={side:0,hold:0,hazard:0,clock:0},this.spots=[];for(let r of[-1,1]){let o=new ta(16773592,0,70,.42,.55,1.4);this.group.add(o,o.target),this.spots.push(o)}let i=new Ce(.12,3.2,16,16,1,!0);i.translate(0,-8,0),i.rotateX(-Math.PI/2+.06),this.beamMat=ya(16773328),this.beams=[];for(let r=0;r<2;r++){let o=new Ue(i,this.beamMat,1);o.userData.noAO=!0,o.layers.set(1),o.frustumCulled=!1,this.group.add(o),this.beams.push(o)}t.add(this.group),this.setModel(n),this.reset(0,0,0)}setModel(t){dr[t]||(t="coupe"),this.key=t,this.def=dr[t];for(let c of[...this.body.children])this.body.remove(c),c.geometry.dispose();for(let c of this.wheels||[])this.group.remove(c.pivot);let e=Zc(this.def.model);this.dims=e.type;{let c=this.def,h=(e.type.wheels[1]-e.type.wheels[0])*e.type.length;this.chassis={L:h,a:h*(1-c.front),b:h*c.front,track:e.type.track*2,R:e.type.wheelR,Iz:c.mass*h*(1-c.front)*h*c.front*1.05,Fz0:c.mass*Us/4,peakTorque:Math.max(...c.torque.map(l=>l[1]))}}this.exhausts=e.exhausts.map(c=>c.clone());let n=this.mats,i={paint:this.paint,glass:n.glassClear,trim:n.trim,dark:n.dark,chrome:n.chrome,plate:n.plate,rev:this.revMat,interior:n.interior};this.paint.userData.seamUniforms.uSeamA.value=e.seams.a,this.paint.userData.seamUniforms.uSeamB.value=e.seams.b,this.deformables=[];let r=c=>{let h={geo:c,basePos:Float32Array.from(c.attributes.position.array),baseNormal:Float32Array.from(c.attributes.normal.array),weight:new Float32Array(c.attributes.position.count)};return this.deformables.push(h),h};for(let[c,h]of Object.entries(e.parts)){if(c==="head"||c==="tail"||c==="amber"){W_(h).forEach((d,u)=>{let g=new $t(d,this.lightMats[c][u]);g.userData.own=!0,this.body.add(g),r(d)});continue}let l=new $t(h.clone(),i[c]);l.userData.own=!0,l.castShadow=c!=="interior",l.receiveShadow=!0,c==="glass"&&(l.renderOrder=4),c==="interior"&&l.layers.set(1),this.body.add(l);let f=r(l.geometry);c==="paint"&&(this.shell=f.geo,this.basePos=f.basePos)}this.wheels=e.wheels.map(c=>{let h=new fn;h.position.set(c.x,c.y,c.z);let l=new fn;c.side<0&&(l.rotation.y=Math.PI),h.add(l);let f=new fn;l.add(f);for(let[d,u]of[["tire",n.tire],["rim",n.rim],["disc",n.disc]]){let g=new $t(e.wheel[d],u);g.castShadow=!0,f.add(g)}return l.add(new $t(e.wheel.caliper,n.caliper)),this.group.add(h),{...c,pivot:h,spin:f,mount:l,compress:0}});let o=-this.dims.length/2,a=this.key==="super"?.55:.72;this.spots.forEach((c,h)=>{let l=h?1:-1;c.position.set(l*.62,a,o+.15),c.target.position.set(l*1.6,-.6,o-20)}),this.beams.forEach((c,h)=>{c.setMatrixAt(0,new ne().makeTranslation((h?1:-1)*.62,a,o)),c.instanceMatrix.needsUpdate=!0}),this.repair()}get assist(){return this.mode==="easy"}set assist(t){this.setHandling(t?"easy":"sport")}setHandling(t){this.mode=Ma[t]?t:"easy",this.aids=Ma[this.mode]}setColor(t){this.paint.color.set(t)}reset(t,e,n){this.repair(),this.x=t,this.z=e,this.y=this.groundAt(t,e,0),this.heading=n,this.vx=0,this.vz=0,this.yawRate=0,this.steer=0,this.wheelAngle=0,this.ax=0,this.ay=0,this.lock=0,this.escActive=!1,this.handbrakeTimer=0,this.shiftHold=0,this.pedal=0,this.gear=1,this.rpm=this.def.idle,this.shiftTimer=0,this.nitro=100,this.boosting=!1,this.throttle=0,this.brake=0,this.handbrake=!1,this.slip=0,this.wheelspin=0,this.impact=0,this.contact=null,this.scrape=null,this.pendingHit=null,this.dentCooldown=0,this.pitch=0,this.roll=0,this.pitchVel=0,this.rollVel=0,this.heave=0,this.heaveVel=0,this.wheelAngle=0,this.surface="road",this.prevLong=0,this.distance=0,this.sync()}get speed(){return this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading)}get kmh(){return Math.abs(this.speed)*3.6}groundAt(t,e,n){let i=Ds(t,e),r=wp(t);if(i!==null&&(n>i-1.2||t>or(t,e).x0))return i;let o=pa(t,e);return o==="curb"||o==="grass"?r+fe:r}update(t,e,n){let i=this.def,r=this.chassis,o=this.aids,a=this.x,c=this.z;this.surface=pa(this.x,this.z);let h=Ds(this.x,this.z)!==null&&this.y>1,l=h?rf.curb:rf[this.surface]||rf.road,f=this.surface==="sand"&&!h?1:this.surface==="grass"?.5:0,d=this.surface==="road"?(n.wetness||0)*.22*o.wet:0,u=i.mu*l[0]*o.grip*(1-d);this.throttle=e.throttle,this.brake=e.brake,this.handbrake=e.handbrake;let g=-Math.sin(this.heading),x=-Math.cos(this.heading),m=this.vx*g+this.vz*x,p=Math.abs(m);this.gear===-1?m>-.6&&e.throttle>0&&e.brake===0&&(this.gear=1):m<.6&&e.brake>0&&e.throttle===0?this.gear=-1:m<-1.5&&(this.gear=-1);let _=this.gear===-1,M=_?e.brake:e.throttle;this.pedal+=Tn(M-this.pedal,-7*t,(this.pedal<.35?5:2.4)*t),this.pedal<.001&&(this.pedal=0);let v=this.pedal,E=_?e.throttle:e.brake;this.boosting=e.nitro&&e.throttle>0&&this.nitro>1&&m>3&&!_,this.nitro=Tn(this.nitro+(this.boosting?-22:9)*t,0,100);let A=i.gears,L=(_?A[0]*1.05:A[this.gear-1])*i.final,I=p/r.R*(30/Math.PI),S=I*L;if(this.shiftHold-=t,this.shiftTimer>0)this.shiftTimer-=t;else if(!_&&this.shiftHold<=0){let ct=i.redline*(.5+.47*v),ht=i.redline*(.2+.14*v),lt=this.gear>1?I*A[this.gear-2]*i.final:1/0;S>ct&&this.gear<A.length?(this.gear++,this.shiftTimer=i.shift,this.shiftHold=i.shift+.5,this.onShift?.(1)):this.gear>1&&(S<ht||v>.9&&lt<i.redline*.78)&&(this.gear--,this.shiftTimer=i.shift*.7,this.shiftHold=i.shift+.7,this.onShift?.(-1))}let w=i.idle+(i.redline*.44-i.idle)*v,N=S<w,H=Tn(Math.max(S,w),i.idle,i.redline);this.rpm=e0(this.rpm,this.shiftTimer>0?H*.84:H,N?7:16,t);let B=0;this.shiftTimer<=0&&(v>0&&this.rpm<i.redline-40?B=G_(i,this.rpm)*v*(this.boosting?1+i.nitro:1)*L*i.eff/r.R:v===0&&p>2&&(B=-r.peakTorque*.1*(this.rpm/i.redline)*L/r.R)),_&&(B=-B);let O=E*i.brakeG*i.mass*Us,k=-Math.cos(this.heading),G=Math.sin(this.heading),rt=m,et=this.vx*k+this.vz*G,z=Math.hypot(rt,et),Tt=Math.atan(r.L*u*Us/Math.max(z*z,1)),Rt=Math.min(i.steerLock,Tt+o.steerMargin+.085+.12*o.counter),Wt=rt>4?Tn(Math.atan2(et-r.b*this.yawRate,rt),-.55,.55)*o.counter:0,Kt=Tn(e.steer*Rt+Wt,-i.steerLock,i.steerLock),ee=(Math.abs(Kt)>Math.abs(this.wheelAngle)?1.5:2.6)*(.55+.45*Math.min(1,Math.abs(Kt-this.wheelAngle)/.12))+(rt>4?Math.abs(Wt)*3:0);this.wheelAngle+=Tn(Kt-this.wheelAngle,-ee*t,ee*t),this.steer=this.wheelAngle/i.steerLock,this.handbrake?this.handbrakeTimer=.7:this.handbrakeTimer-=t;let pt=t/2,wt=0,Dt=0,Ht=0;this.escActive=!1;for(let ct=0;ct<2;ct++){let ht=Math.sin(this.heading),lt=Math.cos(this.heading),tt=-this.vx*ht-this.vz*lt,F=-this.vx*lt+this.vz*ht,U=this.yawRate,V=this.wheelAngle,q=Math.cos(V),K=Math.sin(V),b=.5*H_*tt*tt,y=b*i.clA,Y=i.mass*this.ax*i.cgH/r.L,nt=Math.max(i.mass*Us*r.b/r.L+y*i.aeroFront-Y,0),mt=Math.max(i.mass*Us*r.a/r.L+y*(1-i.aeroFront)+Y,0),ut=i.mass*this.ay*i.cgH/r.track,Qt=(ae,Be)=>{let zt=Tn(ut*Be,-ae/2,ae/2),T=ae/2-zt,$=ae/2+zt;return u*(T*(1-.13*(T/r.Fz0-1))+$*(1-.13*($/r.Fz0-1)))},Et=Math.max(Qt(nt,i.rollFront),1),Jt=Math.max(Qt(mt,1-i.rollFront),1),re=F+r.a*U,At=F-r.b*U,Ut=tt*q+re*K,me=-tt*K+re*q,de=-Math.atan2(me,Math.max(Math.abs(Ut),1.5)),Xt=-Math.atan2(At,Math.max(Math.abs(tt),1.5)),pe=n0(de)*Et,Z=n0(Xt)*Jt,It=tt>.05?1:tt<-.05?-1:0,Gt=O*i.brakeBias,te=O*(1-i.brakeBias),Ct=0,vt=0,ue=!1,Se=this.handbrake,Qe=(ae,Be)=>ae*Math.sqrt(Math.max(.04,1-Math.min(1,(Be/ae)**2*.85)));o.abs?(Gt=Math.min(Gt,Qe(Et,pe)*.97),te=Math.min(te,Qe(Jt,Z)*.97)):(ue=Gt>Et*1.02,Se=Se||te>Jt*1.02);let qe=B,C=Math.max(0,Math.abs(qe)/Jt-1);if(o.tc){let ae=Jt*.95+(Qe(Jt,Z)-Jt*.95)*o.tc;qe=Tn(qe,-ae,ae)}if(Ct=-It*Gt,vt=Tn(qe-It*te,-Jt*.95,Jt*.95),ue){let ae=Math.hypot(Ut,me);ae>.3?(Ct=-Et*.82*Ut/ae,pe=-Et*.82*me/ae):(Ct=0,pe*=.3)}else pe=Math.sign(pe)*Math.min(Math.abs(pe),Et*Math.sqrt(Math.max(0,1-(Ct/Et)**2)));if(Se){let ae=Math.hypot(tt,At);ae>.3?(vt=-Jt*.8*tt/ae,Z=-Jt*.8*At/ae):(vt=0,Z*=.3)}else Z=Math.sign(Z)*Math.min(Math.abs(Z),Jt*Math.sqrt(Math.max(0,1-(vt/Jt)**2)));let W=0;if(o.esc&&this.handbrakeTimer<=0&&tt>7){let ae=Math.atan2(F,tt),Be=Tn(tt*Math.tan(V)/(r.L*(1+.0022*tt*tt)),-u*Us/tt,u*Us/tt),zt=U-Be;(Math.abs(zt)>.07||Math.abs(ae)>.09)&&(W=r.Iz*Tn(-zt*6.5+ae*5,-3.2,3.2),tt-=Math.min(Math.abs(zt)+Math.abs(ae),.6)*2.2*pt,this.escActive=!0)}let st=b*i.cdA*Math.sign(tt),J=i.mass*Math.abs(tt)/pt,j=Math.sign(tt)*Math.min(l[1]*i.mass*Us,J),ot=Ct*q-pe*K+vt-st-j,_t=Ct*K+pe*q+Z;W+=r.a*(Ct*K+pe*q)-r.b*Z;let at=ot/i.mass,yt=_t/i.mass,gt=tt;tt+=(at+F*U)*pt,F+=(yt-gt*U)*pt,U+=W/r.Iz*pt,(E>0||this.handbrake)&&v===0&&gt*tt<0&&(tt=0),v===0&&E===0&&Math.abs(tt)<.06&&Math.abs(F)<.06&&(tt=0,F=0);let ft=1-Ne.smoothstep(Math.hypot(tt,F),1.2,5);if(ft>0){let ae=tt*Math.tan(V)/r.L,Be=ft*(1-Math.exp(-pt*28));U+=(ae-U)*Be,F+=(r.b*ae-F)*Be}_&&(tt=Math.max(tt,-16));let Ft=1-Math.exp(-pt*11);this.ax+=(at-this.ax)*Ft,this.ay+=(yt-this.ay)*Ft,this.yawRate=U,this.heading+=U*pt;let Bt=Math.sin(this.heading),ie=Math.cos(this.heading);this.vx=-Bt*tt-ie*F,this.vz=-ie*tt+Bt*F,this.x+=this.vx*pt,this.z+=this.vz*pt,wt+=C,Dt+=(ue||Se)&&Math.abs(tt)>2?1:0;let Te=ae=>Ne.smoothstep(Math.abs(ae),.1,.22);Ht+=Math.max(Math.abs(At)*Te(Xt),Math.abs(me)*.7*Te(de))}if(this.wheelspin=Tn(wt*.5*(1.2-.6*o.tc),0,1)*(p<45?1:0),this.lock=Dt/2,this.slip=Ht/2,o.align&&Math.abs(e.steer)<.05&&Math.abs(this.wheelAngle)<.05&&p>5&&!this.handbrake&&this.surface==="road"){let ct=Math.PI/2,ht=this.heading-Math.round(this.heading/ct)*ct;if(Math.abs(ht)<.3){let lt=ht*Math.min(1,1.6*t);this.heading-=lt;let tt=Math.cos(-lt),F=Math.sin(-lt),U=this.vx*tt+this.vz*F,V=-this.vx*F+this.vz*tt;this.vx=U,this.vz=V}}this.impact=0,this.collide(n,a,c),this.distance+=Math.hypot(this.x-a,this.z-c),this.dentCooldown-=t;let Vt=this.groundAt(this.x,this.z,this.y);Vt-this.y>.08&&Vt-this.y<.3&&(this.heaveVel-=(Vt-this.y)*9),this.y-Vt>.08&&this.y-Vt<.3&&(this.heaveVel+=(this.y-Vt)*5),this.y=e0(this.y,Vt,Vt>this.y?22:9,t);let dt=this.slopeAt(),Ot=f*Math.min(p/12,1)*.012;this.spring("pitch",Tn(this.ax*i.pitch,-i.rollMax*.75,i.rollMax*.55)+dt+(Math.random()-.5)*Ot,70,9,t),this.spring("roll",Tn(this.ay*i.roll,-i.rollMax,i.rollMax)+(Math.random()-.5)*Ot,60,7,t),this.spring("heave",0,90,10,t),this.sync();let D=this.speed;for(let ct of this.wheels){let ht=ct.front?this.lock&&!this.handbrake?.15:1:this.handbrake||this.lock?.05:1+this.wheelspin*2.5,lt=ct.front||this.wheelspin<.05?D:Math.max(Math.abs(D),6*this.wheelspin)*(_?-1:1);ct.spin.rotation.x-=lt*ht*t/r.R*(ct.side<0?-1:1),ct.front&&(ct.pivot.rotation.y=this.wheelAngle)}}slopeAt(){let t=or(this.x,this.z);return t&&this.x>t.x0&&this.y>.2?Math.atan2(t.deckY-fe,t.rampStart-t.x0)*Math.sin(this.heading):0}spring(t,e,n,i,r){let o=t+"Vel",a=(e-this[t])*n-this[o]*i;this[o]+=a*r,this[t]+=this[o]*r}sync(){this.group.position.set(this.x,this.y+this.heave*.4,this.z),this.group.rotation.set(0,this.heading,0),this.body.rotation.set(this.pitch,0,-this.roll),this.body.position.y=this.heave*.3;for(let t of this.wheels){let e=-this.roll*t.side*this.dims.track*.35+this.pitch*t.z*.35;t.pivot.position.y=t.y+Tn(e,-.06,.06)*.5}}collide(t,e,n){let r=-Math.sin(this.heading),o=-Math.cos(this.heading);for(let f=0;f<2;f++)for(let d=0;d<2;d++){let u=d?1.35:-1.35,g=this.x+r*u,x=this.z+o*u;t.boxGrid.near(g,x,1.05,p=>{if(Math.abs(g-p.x)>p.w+1.05||Math.abs(x-p.z)>p.d+1.05)return;let _=Tn(g,p.x-p.w,p.x+p.w),M=Tn(x,p.z-p.d,p.z+p.d),v=g-_,E=x-M,A=Math.hypot(v,E);if(A<1e-4){let L=p.w-Math.abs(g-p.x),I=p.d-Math.abs(x-p.z);L<I?(v=Math.sign(g-p.x),E=0,A=-L):(v=0,E=Math.sign(x-p.z),A=-I)}else v/=A,E/=A;A<1.05&&this.resolve(v,E,1.05-A,.25,g-v*1.05,x-E*1.05)});let m=p=>{let _=g-p.x,M=x-p.z;if(Math.abs(_)>3||Math.abs(M)>3)return;let v=Math.hypot(_,M),E=1.05+p.r;v<E&&v>1e-4&&this.resolve(_/v,M/v,E-v,.2,p.x+_/v*p.r,p.z+M/v*p.r)};t.circleGrid.near(g,x,3,m),this.y<(Ds(g,x)??-9)-1&&t.pileGrid.near(g,x,3,m)}let a=or(e,n)||or(this.x,this.z);if(a&&this.y>1.2){let f=a.halfWidth-1.1;Math.abs(this.z-a.z)>f&&this.resolve(0,-Math.sign(this.z-a.z),Math.abs(this.z-a.z)-f,.15),this.x<a.x1+3&&this.resolve(1,0,a.x1+3-this.x,.15)}let c=Ds(this.x,this.z),h=or(this.x,this.z);if(h&&this.x>h.x0&&this.y<c-.9&&this.x<-345){let f=Math.sign(this.z-h.z)||1;this.resolve(0,f,h.halfWidth+.2-Math.abs(this.z-h.z),.2)}let l=a&&this.y>1.2?a.x1+3:De.minX;this.x<l&&this.resolve(1,0,l-this.x,.2),this.x>De.maxX&&this.resolve(-1,0,this.x-De.maxX,.3),this.z<De.minZ&&this.resolve(0,1,De.minZ-this.z,.3),this.z>De.maxZ&&this.resolve(0,-1,this.z-De.maxZ,.3)}resolve(t,e,n,i,r=this.x-t*2,o=this.z-e*2){this.x+=t*n,this.z+=e*n;let a=this.vx*t+this.vz*e;if(a<0){let c=this.vx-a*t,h=this.vz-a*e,l=Math.hypot(c,h);l>6&&(!this.scrape||l>this.scrape.speed)&&(this.scrape={x:r,z:o,speed:l,nx:t,nz:e});let f=this.assist&&l>-a*1.2,d=f?0:i;this.vx-=(1+d)*a*t,this.vz-=(1+d)*a*e;let u=f?.985:.9;if(this.vx*=u,this.vz*=u,f&&l>4){let x=Math.atan2(-c,-h)-this.heading;x=Math.atan2(Math.sin(x),Math.cos(x)),Math.abs(x)<1.2&&(this.heading+=x*.08)}if(this.impact=Math.max(this.impact,-a),(!this.contact||-a>this.contact.speed)&&(this.contact={x:r,z:o,speed:-a,nx:t,nz:e}),this.registerHit(r,o,-a),this.yawRate*=.6,!f){let g=-(1+d)*a,x=((o-this.z)*t-(r-this.x)*e)*g/2.6;this.yawRate+=Tn(x*(this.assist?.15:.45),-2.2,2.2)}}}registerHit(t,e,n){(!this.pendingHit||n>this.pendingHit.speed)&&(this.pendingHit={x:t,z:e,speed:n})}applyDamage(){let t=this.pendingHit;if(this.pendingHit=null,!t||t.speed<3.5||this.dentCooldown>0)return;this.dentCooldown=.18;let e=t.x-this.x,n=t.z-this.z,i=Math.cos(this.heading),r=Math.sin(this.heading),o=e*i-n*r,a=e*r+n*i,c=this.dims.length/2,h=this.dims.track+.1;o=Tn(o,-h,h),a=Tn(a,-c,c);let l=Tn((t.speed-3)/16,.05,1);this.dent(o,.62,a,l)}dent(t,e,n,i){let r=.5+i*.55,o=.035+i*.13,a=this.dims.length/2,c=Math.abs(n)/a>Math.abs(t)/this.dims.track,h=c?-t*.15:-Math.sign(t),l=c?-Math.sign(n):-n*.1,f=Math.hypot(h,l)||1;h/=f,l/=f;let d=new P,u=new P,g=new P;for(let x of this.deformables){let m=x.geo.attributes.position.array,p=x.geo.attributes.normal.array,_=x.basePos,M=x.weight,v=!1;for(let E=0,A=0;E<m.length;E+=3,A++){let L=_[E]-t,I=(_[E+1]-e)*1.3,S=_[E+2]-n,w=(L*L+I*I+S*S)/(r*r);if(w>3)continue;let N=Math.exp(-w*1.8)*(.65+.7*V_(_[E],_[E+1],_[E+2]));m[E]+=h*o*N,m[E+1]-=o*.3*N,m[E+2]+=l*o*N;let H=m[E]-_[E],B=m[E+1]-_[E+1],O=m[E+2]-_[E+2],k=Math.hypot(H,B,O);if(k>.26){let G=.26/k;m[E]=_[E]+H*G,m[E+1]=_[E+1]+B*G,m[E+2]=_[E+2]+O*G}M[A]=Math.min(1,M[A]+N),v=!0}if(v){for(let E=0;E<m.length;E+=9){let A=E/3;if(!(Math.max(M[A],M[A+1],M[A+2])<.02)){d.set(m[E+3]-m[E],m[E+4]-m[E+1],m[E+5]-m[E+2]),u.set(m[E+6]-m[E],m[E+7]-m[E+1],m[E+8]-m[E+2]),g.crossVectors(d,u).normalize();for(let L=0;L<3;L++){let I=E+L*3,S=Math.min(1,M[A+L]*1.6),w=x.baseNormal,N=w[I]*(1-S)+g.x*S,H=w[I+1]*(1-S)+g.y*S,B=w[I+2]*(1-S)+g.z*S,O=Math.hypot(N,H,B)||1;p[I]=N/O,p[I+1]=H/O,p[I+2]=B/O}}}x.geo.attributes.position.needsUpdate=!0,x.geo.attributes.normal.needsUpdate=!0}}if(this.damage=Math.min(1,this.damage+i*.18),i>.3){let x=t<0?0:1;n<-a+.9&&(this.broken.head[x]=!0),n>a-.9&&(this.broken.tail[x]=!0)}}repair(){for(let t of this.deformables||[])t.weight.some(e=>e>0)&&(t.geo.attributes.position.array.set(t.basePos),t.geo.attributes.normal.array.set(t.baseNormal),t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.normal.needsUpdate=!0,t.weight.fill(0));this.damage=0,this.broken={head:[!1,!1],tail:[!1,!1]}}setLights(t,e,n=!1,i=.016){let r=Math.max(t,.15);this.lightMats.head.forEach((h,l)=>{let f=!this.broken.head[l];h.emissiveIntensity=f?1.5+r*9:0,h.color.setScalar(f?1:.12),this.spots[l].intensity=f?t*220:0,this.beams[l].visible=f&&t>.05}),this.lightMats.tail.forEach((h,l)=>{h.emissiveIntensity=this.broken.tail[l]?.05:e?6:1.1+t*1.2}),this.revMat.emissiveIntensity=n?5:0;let o=this.signal;o.clock+=i;let a=Math.abs(this.steer)>.3&&this.kmh>4&&this.kmh<75?Math.sign(this.steer):0;o.hold=a?o.hold+i:Math.max(0,o.hold-i*2),o.hold>.35&&a?o.side=a:o.hold<=0&&(o.side=0),this.impact>9&&(o.hazard=5),o.hazard=Math.max(0,o.hazard-i);let c=o.clock*1.6%1<.5?7:0;this.lightMats.amber[0].emissiveIntensity=o.hazard>0||o.side>0?c:0,this.lightMats.amber[1].emissiveIntensity=o.hazard>0||o.side<0?c:0,this.beamMat.uniforms.intensity.value=t*.06}safeRespawn(){let t=hs(this.x),e=Ls(this.z);if(Math.abs(this.x-t)<Math.abs(this.z-e)){let n=Math.cos(this.heading)>0;this.reset(t+(n?3.4:-3.4),Tn(this.z,Oe+10,je-10),n?0:Math.PI)}else{let n=Math.sin(this.heading)<0;this.reset(Tn(this.x,sn+10,Ye-10),e+(n?3.4:-3.4),n?-Math.PI/2:Math.PI/2)}}};var Kc=16,of=new ne,Jc=new ne,i0=new He,af=new P,wa=new P,jc=new He,X_=new P(1,1,1),q_=new ne().makeScale(0,0,0),Qc=class{constructor(){this.items=[],this.grid=new Map,this.loose=new Set,this.dirty=new Set}add(t,e,n){let i={...n,parts:t.map(o=>{let a=new ne;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),hide:(e||[]).map(o=>{let a=new ne;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),pivot0:new P(n.x,n.y,n.z),pos:new P(n.x,n.y,n.z),vel:new P,quat:new He,spin:new P,state:0,timer:0};i.id=this.items.length,this.items.push(i);let r=this.key(n.x,n.z);return this.grid.has(r)||this.grid.set(r,[]),this.grid.get(r).push(i),i}key(t,e){return`${Math.floor(t/Kc)},${Math.floor(e/Kc)}`}collide(t,e,n){let i=-Math.sin(t.heading),r=-Math.cos(t.heading),o=t.x-i*1.35,a=t.z-r*1.35,c=t.x+i*1.35,h=t.z+r*1.35,l=Math.hypot(t.vx,t.vz),f=Math.floor(t.x/Kc),d=Math.floor(t.z/Kc);for(let u=-1;u<=1;u++)for(let g=-1;g<=1;g++){let x=this.grid.get(`${f+u},${d+g}`);if(x)for(let m of x){if(m.state!==0)continue;let p=c-o,_=h-a,M=Ne.clamp(((m.x-o)*p+(m.z-a)*_)/(p*p+_*_),0,1),v=o+p*M,E=a+_*M,A=m.x-v,L=m.z-E,I=Math.hypot(A,L),S=1.05+m.r;if(I>=S||t.y>m.y+3)continue;I>1e-4?(A/=I,L/=I):(A=i,L=r);let w=t.vx*A+t.vz*L;if(w<m.solid){w>0&&(t.vx-=w*A*1.2,t.vz-=w*L*1.2),t.x-=A*(S-I),t.z-=L*(S-I);continue}this.knock(m,t,A,L,w,l),n?.({item:m,x:m.x,z:m.z,speed:w,nx:A,nz:L})}}}knock(t,e,n,i,r,o){t.state=1,t.timer=0,this.loose.add(t);let a=1-t.mass*Math.min(1,6/Math.max(o,6));if(e.vx*=a,e.vz*=a,e.registerHit?.(t.x,t.z,r*t.mass*3),t.kind==="topple")wa.set(i,0,-n).normalize(),t.axis=wa.clone(),t.angle=0,t.angVel=.6+r*.08;else{let c=2.5+bt()*2.5+r*.12,h=.5+bt()*.25;t.vel.set(e.vx*h+n*r*.25,c,e.vz*h+i*r*.25),t.spin.set((bt()-.5)*2,(bt()-.5)*2,(bt()-.5)*2).normalize().multiplyScalar(5+r*.35),t.pos.copy(t.pivot0)}for(let c of t.hide)c.mesh.setMatrixAt(c.index,q_),c.mesh.instanceMatrix.needsUpdate=!0}groundY(t,e){return pa(t,e)==="road"?0:fe}update(t,e){for(let n of this.loose){if(n.timer+=t,n.state===1){if(n.kind==="topple")n.angVel+=Math.sin(Math.max(n.angle,.05))*6*t+.4*t,n.angle+=n.angVel*t,n.angle>=Math.PI/2-.04&&(n.angle=Math.PI/2-.04,n.angVel*=-.18,Math.abs(n.angVel)<.08&&(n.state=2)),n.quat.setFromAxisAngle(n.axis,n.angle);else{n.vel.y-=9.8*t,n.pos.addScaledVector(n.vel,t);let i=n.spin.length();i>.001&&(jc.setFromAxisAngle(wa.copy(n.spin).divideScalar(i),i*t),n.quat.premultiply(jc));let r=this.groundY(n.pos.x,n.pos.z)+n.lieH;n.pos.y<r&&(n.pos.y=r,n.vel.y<-1.2?(n.vel.y*=-.32,n.vel.x*=.5,n.vel.z*=.5,n.spin.multiplyScalar(.55)):(n.vel.y=0,n.vel.x*=Math.exp(-8*t),n.vel.z*=Math.exp(-8*t),n.spin.multiplyScalar(Math.exp(-6*t)),Math.hypot(n.vel.x,n.vel.z)<.3&&this.settle(n)))}this.dirty.add(n)}n.timer>25&&Math.hypot(e.x-n.x,e.z-n.z)>200&&this.restore(n)}for(let n of this.dirty)this.write(n);this.dirty.clear()}settle(t){t.state=2,af.set(0,1,0).applyQuaternion(t.quat);let e=Math.atan2(af.x,af.z);i0.setFromAxisAngle(wa.set(0,1,0),e),jc.setFromAxisAngle(wa.set(1,0,0),Math.PI/2),t.quat.copy(i0).multiply(jc),t.pos.y=this.groundY(t.pos.x,t.pos.z)+t.lieH,this.dirty.add(t)}restore(t){t.state=0,t.pos.copy(t.pivot0),t.quat.identity(),t.vel.set(0,0,0),t.spin.set(0,0,0),this.loose.delete(t);for(let e of[...t.parts,...t.hide])e.mesh.setMatrixAt(e.index,e.base),e.mesh.instanceMatrix.needsUpdate=!0}write(t){of.compose(t.pos,t.quat,X_),Jc.makeTranslation(-t.pivot0.x,-t.pivot0.y,-t.pivot0.z),of.multiply(Jc);for(let e of t.parts)Jc.multiplyMatrices(of,e.base),e.mesh.setMatrixAt(e.index,Jc),e.mesh.instanceMatrix.needsUpdate=!0}restoreAll(){for(let t of[...this.loose])this.restore(t)}};function eh(s,t){let e=s.index?s.toNonIndexed():s,n=new kt(t),i=e.attributes.position.count,r=new Float32Array(i*3);for(let o=0;o<i;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new yn(r,3)),e}function mn(s,t,e,n,i,r,o,a=0,c=0,h=0){let l=new xe(s,t,e);return(a||c||h)&&l.applyMatrix4(new ne().makeRotationFromEuler(new Ln(a,c,h))),l.translate(n,i,r),eh(l,o)}function bn(s,t,e,n,i,r,o,a,c="y"){let h=new Ce(s,t,e,n);return c==="x"&&h.rotateZ(Math.PI/2),c==="z"&&h.rotateX(Math.PI/2),h.translate(i,r,o),eh(h,a)}function l0(s,t,e,n,i,r,o=1){let a=new Un(s,t,Math.max(3,t/3),0,Math.PI*2,0,Math.PI/2);return a.scale(1,o,1),a.translate(e,n,i),eh(a,r)}var ho="#b0362a",lf="#d9d3c2",pr="#202427",s0="#7d5b3b",r0="#264a8a",th="#626a70";function Y_(){return ln([bn(.2,.21,.07,10,0,.035,0,ho),bn(.14,.15,.52,10,0,.33,0,ho),bn(.17,.17,.05,10,0,.6,0,ho),l0(.15,10,0,.62,0,ho,.9),bn(.035,.05,.07,6,0,.78,0,lf),...[-1,1].flatMap(s=>[bn(.055,.06,.14,8,s*.17,.46,0,ho,"x"),bn(.065,.065,.03,8,s*.245,.46,0,lf,"x")]),bn(.075,.08,.13,8,0,.42,.17,ho,"z"),bn(.085,.085,.035,8,0,.42,.245,lf,"z")])}function Z_(){let s=[bn(.3,.27,.9,14,0,.45,0,"#2c4a3b"),l0(.31,14,0,.9,0,"#1f2b27",.4),mn(.22,.12,.02,0,.78,.3,"#0d1110")];for(let t of[.18,.5,.82])s.push(bn(.305,.3,.03,14,0,t,0,"#22392e"));return ln(s)}function $_(){let s=[];for(let t of[-.14,0,.14])s.push(mn(2,.04,.11,0,.45,t,s0));for(let t=0;t<2;t++)s.push(mn(2,.1,.035,0,.64+t*.15,-.25-t*.03,s0,-.2));for(let t of[-.85,.85])s.push(mn(.06,.45,.06,t,.225,.16,pr),mn(.06,.85,.06,t,.42,-.24,pr,-.15)),s.push(mn(.06,.04,.5,t,.63,-.02,pr),mn(.06,.04,.42,t,.42,-.04,pr));return ln(s)}function K_(){let s=[];for(let t of[-.22,.22])for(let e of[-.18,.18])s.push(mn(.05,.22,.05,t,.11,e,pr));return s.push(mn(.52,.62,.46,0,.53,0,r0),bn(.23,.23,.52,14,0,.84,0,r0,"x")),s.push(mn(.32,.07,.04,0,.93,.225,"#16294d"),mn(.2,.14,.012,0,.6,.235,"#d8dde6")),ln(s)}function J_(){return ln([mn(.36,.03,.3,0,.015,0,pr),mn(.08,.36,.08,0,.18,0,pr),mn(.46,.55,.4,0,.63,0,"#ffffff"),mn(.48,.04,.42,0,.92,0,"#ffffff"),mn(.34,.24,.012,0,.71,.205,"#1c2226"),mn(.12,.03,.03,0,.53,.215,"#9aa0a4")])}function j_(){return ln([bn(.035,.04,1.05,8,0,.525,0,th),mn(.17,.28,.13,0,1.19,0,"#8a9095"),bn(.085,.085,.13,10,0,1.33,0,"#3a4044","z"),mn(.1,.07,.012,0,1.24,.067,"#c9e0a8")])}function Q_(){return ln([bn(.045,.05,3.3,8,0,1.65,0,th),bn(.06,.06,.06,8,0,3.32,0,th)])}function tM(s){let t=[bn(.13,.17,10.6,8,0,5.3,0,"#5a4330"),mn(2.5,.13,.13,0,9.7,0,"#4b3828"),mn(1.4,.1,.1,0,8.9,0,"#4b3828")];for(let e of[-1.1,0,1.1])t.push(bn(.05,.06,.2,6,e,9.86,0,"#cfd4d2"));for(let e of[-.6,.6])t.push(bn(.04,.05,.16,6,e,9.04,0,"#cfd4d2"));return s&&t.push(bn(.27,.27,.85,10,0,7.9,.32,"#7d8487"),bn(.29,.29,.05,10,0,8.35,.32,"#5f6669")),ln(t)}var c0=s=>s.toUpperCase().replace(" DRIVE"," DR").replace(" AVE"," AV").replace(" BLVD"," BL"),o0=Object.fromEntries(Object.entries(Ou).map(([s,t])=>[s,c0(t)])),a0=Object.fromEntries(Object.entries(Bu).map(([s,t])=>[s,c0(t)]));function eM(s,t){let e=t.length,n=vn(s,512,64*e,(r,o,a)=>{let c=a/e;t.forEach((h,l)=>{let f=l*c;r.fillStyle="#16603d",r.fillRect(0,f,o,c),r.strokeStyle="#e9f1ea",r.lineWidth=3,r.strokeRect(6,f+6,o-12,c-12),r.fillStyle="#f4f7f2",r.font='700 40px "Barlow Condensed", Arial Narrow, Arial, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(h,o/2,f+c/2+2)})}),i=new Zt({map:n,roughness:.45,metalness:.2});return i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aRow;`).replace("#include <uv_vertex>",`#include <uv_vertex>
  vMapUv.y = (vMapUv.y + aRow) / ${e.toFixed(1)};`)},i.customProgramCacheKey=()=>"pa-street-blade",i}function nM(s){return vn(s,256,384,(t,e,n)=>{let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#ff8a4c"),i.addColorStop(1,"#5a1c3c"),t.fillStyle=i,t.fillRect(0,0,e,n),t.fillStyle="#fff4dc",t.beginPath(),t.arc(e/2,n*.36,62,0,Math.PI*2),t.fill(),t.fillStyle="#1b1020",t.font='800 54px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.fillText("SURF",e/2,n*.7),t.fillText("FIZZ",e/2,n*.84),t.fillStyle="#fff4dc",t.font="600 18px Arial, sans-serif",t.fillText("TASTE THE SWELL",e/2,n*.94)})}function h0(s,t,e,n,i=[]){let r=new ne,o=new He,a=new P,c=new P(1,1,1),h=new P(0,1,0),l=new Zt({vertexColors:!0,roughness:.55,metalness:.15}),f=[],d=[],u=Me+5,g=new gi(16);for(let[dt,Ot]of n)g.add({x:dt,z:Ot});for(let dt of i)g.add({x:dt.x,z:dt.z});let x=(dt,Ot,D=2.4)=>g.any(dt,Ot,D),m=new gi(32);for(let dt of cs){let[Ot,D]=ar(dt);m.add({x:Ot,z:D})}let p=(dt,Ot)=>m.any(dt,Ot,7),_=new Set(["downtown","midtown"]),M={hydrant:[],bin:[],bench:[],mailbox:[],newsbox:[],meter:[]},v=(dt,Ot,D,ct)=>ht=>dt==="ns"?[Ot+D*(Me+ht),ct]:[ct,Ot+D*(Me+ht)];for(let dt of["ns","ew"]){let Ot=dt==="ns"?Le:Fe,D=dt==="ns"?Fe:Le,[ct,ht]=dt==="ns"?[Oe-45,je+45]:[sn+15,Ye+25];for(let lt of Ot)for(let tt of[-1,1])if(!(dt==="ns"&&lt===sn&&tt<0))for(let F=ct;F<=ht;F+=6.5){if(D.some(Y=>Math.abs(F-Y)<u))continue;let U=v(dt,lt,tt,F),[V,q]=U(1);if(x(V,q)||p(V,q))continue;let K=dt==="ns"?tt>0?-Math.PI/2:Math.PI/2:tt>0?Math.PI:0,b=_.has(Ui(lr(V+(dt==="ns"?tt*40:0)),da(q+(dt==="ew"?tt*40:0)))),y=bt();if(y<.055)M.hydrant.push([...U(.6),K]);else if(y<.12)M.bin.push([...U(.9),K]);else if(y<.165)M.bench.push([...U(3.4),K]);else if(y<.19)M.mailbox.push([...U(1.1),K]);else if(y<.23){let Y=2+Math.floor(bt()*2);for(let nt=0;nt<Y;nt++){let mt=(nt-(Y-1)/2)*.55,[ut,Qt]=U(1.1);M.newsbox.push([dt==="ns"?ut:ut+mt,dt==="ns"?Qt+mt:Qt,K])}}else b&&y<.42&&M.meter.push([...U(.45),K])}}let E={hydrant:{geo:Y_(),y:.4,r:.22,mass:.08,solid:1.5,lieH:.17,kind:"fly",sparks:!0},bin:{geo:Z_(),y:.5,r:.32,mass:.04,solid:1.2,lieH:.29,kind:"fly"},bench:{geo:$_(),y:.4,r:.75,mass:.07,solid:1.5,lieH:.3,kind:"fly"},mailbox:{geo:K_(),y:.5,r:.34,mass:.06,solid:1.5,lieH:.25,kind:"fly",sparks:!0},newsbox:{geo:J_(),y:.5,r:.28,mass:.04,solid:1.2,lieH:.22,kind:"fly"},meter:{geo:j_(),y:0,r:.12,mass:.04,solid:2,kind:"topple",sparks:!0}},A=["#c8342b","#2f5fa8","#e2b33a","#2e7d4f","#e8e4da","#d9662f"].map(dt=>new kt(dt)),L={},I=dt=>[dt[0],dt[1]],S=dt=>{dt.castShadow=!0,dt.receiveShadow=!0,dt.layers.set(1)};for(let[dt,Ot]of Object.entries(M)){let D=E[dt],ct=Rn(s,Ot,D.geo,l,{at:I,far:dt==="bench"?420:340,setup:ht=>{S(ht),ht.name=dt},set:(ht,lt,[tt,F,U])=>{o.setFromAxisAngle(h,U+(dt==="bin"||dt==="hydrant"?bt()*6.28:0)),ht.setMatrixAt(lt,r.compose(a.set(tt,fe,F),o,c)),dt==="newsbox"&&ht.setColorAt(lt,ye(A))}});L[dt]=ct.meshes,Ot.forEach(([ht,lt],tt)=>{e.add([ct.refs[tt]],null,{type:dt,x:ht,z:lt,y:fe+D.y,r:D.r,mass:D.mass,solid:D.solid,lieH:D.lieH??.2,kind:D.kind,sparks:!!D.sparks})})}let w=[...Object.values(o0),...Object.values(a0)],N=[];for(let dt of Le)for(let Ot of Fe)N.push([dt+Me+1.3,Ot-Me-1.3,dt,Ot]);let H=Rn(s,N,Q_(),l,{at:I,far:420,setup:S,set:(dt,Ot,[D,ct])=>dt.setMatrixAt(Ot,r.makeTranslation(D,fe,ct))}),B=N.flatMap(([dt,Ot,D,ct])=>[[dt,Ot,0,w.indexOf(o0[String(D)])],[dt,Ot,1,w.indexOf(a0[String(ct)])]]),O=Rn(s,B,new xe(1.7,.27,.03),eM(t,w),{at:I,far:420,cloneGeometry:!0,set:(dt,Ot,[D,ct,ht])=>{ht===0?o.setFromAxisAngle(h,Math.PI/2):o.identity(),dt.setMatrixAt(Ot,r.compose(a.set(D,fe+3+ht*.3,ct),o,c))},setup:(dt,Ot)=>{S(dt),dt.geometry.setAttribute("aRow",new dn(new Float32Array(Ot.map(D=>w.length-1-D[3])),1))}});N.forEach(([dt,Ot],D)=>{e.add([H.refs[D],O.refs[D*2],O.refs[D*2+1]],null,{type:"sign",x:dt,z:Ot,y:fe,r:.12,mass:.05,solid:2.5,kind:"topple",sparks:!0})});let k=[],G=[],rt=[];for(let dt of cs){let[Ot,D]=ar(dt),ct=dt.axis==="ns"?dt.side>0?-Math.PI/2:Math.PI/2:dt.side>0?Math.PI:0,ht=new ne().compose(a.set(Ot,fe,D),o.setFromAxisAngle(h,ct),c),lt=(V,q)=>V.push(q.applyMatrix4(ht));lt(k,mn(4.3,.08,1.8,0,2.55,0,"#3b4448",.04)),lt(k,mn(4.3,.18,.06,0,2.48,.88,"#2b3236"));for(let V of[-2.05,2.05])for(let q of[-.78,.7])lt(k,bn(.05,.05,2.5,8,V,1.25,q,"#2b3236"));lt(k,mn(2.4,.05,.42,-.2,.47,-.45,"#9aa3a8"));for(let V of[-1.2,.8])lt(k,mn(.05,.45,.35,V,.225,-.45,"#2b3236"));lt(k,bn(.04,.04,2.8,8,2.7,1.4,.9,th)),lt(k,bn(.27,.27,.03,18,2.7,2.65,.9,"#1d4f9a","z")),lt(k,bn(.2,.2,.035,18,2.7,2.65,.9,"#f2f4f6","z")),lt(G,mn(4,1.85,.02,0,1.3,-.8,"#ffffff")),lt(G,mn(.02,1.85,1.35,-2.05,1.3,-.1,"#ffffff"));let tt=new xe(.14,1.8,1.3);tt.translate(2.05,1.3,-.08),rt.push(eh(tt,"#ffffff").applyMatrix4(ht));let F=2.25,U=.95;f.push(dt.axis==="ns"?{x:Ot,z:D,w:U,d:F}:{x:Ot,z:D,w:F,d:U})}let et=new $t(ln(k),l);et.castShadow=et.receiveShadow=!0;let z=new Zt({color:10470612,roughness:.05,metalness:.1,transparent:!0,opacity:.22,depthWrite:!1}),Tt=new $t(ln(G),z);Tt.renderOrder=2;let Rt=nM(t),Wt=new Zt({map:Rt,emissive:16777215,emissiveMap:Rt,emissiveIntensity:.1,roughness:.3}),Kt=new $t(ln(rt),Wt);Kt.castShadow=!0,s.add(et,Tt,Kt);let Nt=[];for(let dt=Oe-30;dt<=je+45;dt+=38)Fe.some(Ot=>Math.abs(dt-Ot)<u)||Nt.push([Ye+Me+1.7,dt,"ns"]);for(let[dt,Ot]of[[je,1],[Oe,-1]])for(let D=sn+30;D<=Ye+10;D+=38)Le.some(ct=>Math.abs(D-ct)<u)||Nt.push([D,dt+Ot*(Me+1.7),"ew"]);let ee=Nt.filter((dt,Ot)=>Ot%4!==2),pt=Nt.filter((dt,Ot)=>Ot%4===2);for(let[dt,Ot]of[[ee,!1],[pt,!0]]){Rn(s,dt,tM(Ot),l,{at:I,far:900,setup:D=>{D.castShadow=!0},set:(D,ct,[ht,lt,tt])=>D.setMatrixAt(ct,r.compose(a.set(ht,fe,lt),o.setFromAxisAngle(h,tt==="ns"?0:Math.PI/2),c))});for(let[D,ct]of dt)d.push({x:D,z:ct,r:.22})}let wt=[],Dt=[Nt.filter(dt=>dt[2]==="ns"),Nt.filter(dt=>dt[2]==="ew"&&dt[1]>0),Nt.filter(dt=>dt[2]==="ew"&&dt[1]<0)];for(let dt of Dt)for(let Ot=0;Ot<dt.length-1;Ot++){let[D,ct,ht]=dt[Ot],[lt,tt]=dt[Ot+1];if(!(Math.hypot(lt-D,tt-ct)>80))for(let[F,U]of[[-1.1,9.92],[0,9.92],[1.1,9.92],[-.6,9.08],[.6,9.08]]){let V=ht==="ns"?F:0,q=ht==="ns"?0:F,K=.55+Math.abs(F)*.1,b=D+V,y=fe+U,Y=ct+q;for(let nt=1;nt<=12;nt++){let mt=nt/12,ut=D+(lt-D)*mt+V,Qt=ct+(tt-ct)*mt+q,Et=fe+U-K*4*mt*(1-mt);wt.push(b,y,Y,ut,Et,Qt),b=ut,y=Et,Y=Qt}}}let Ht=new en;Ht.setAttribute("position",new be(wt,3));let Vt=new Oo(Ht,new kr({color:723981,transparent:!0,opacity:.85}));return s.add(Vt),{solids:f,circles:d,meshes:L,update(dt){Wt.emissiveIntensity=.12+dt*1.4}}}function u0(s,t,e,n,i){let r=n-t,o=i-e;return s.segment(t,e,n,i,a=>{if(Math.max(t,n)<a.x-a.w||Math.min(t,n)>a.x+a.w||Math.max(e,i)<a.z-a.d||Math.min(e,i)>a.z+a.d)return!1;let c=0,h=1;for(let l=0;l<2;l++){let f=l?e:t,d=l?o:r,u=l?a.z-a.d:a.x-a.w,g=l?a.z+a.d:a.x+a.w;if(Math.abs(d)<1e-6){if(f<u||f>g)return!1;continue}let x=(u-f)/d,m=(g-f)/d;if(x>m){let p=x;x=m,m=p}if(c=Math.max(c,x),h=Math.min(h,m),c>h)return!1}return!0})}var nh=class{constructor(t,e){this.traffic=t,this.colliders=e,this.reset()}reset(){this.level=0,this.evade=0,this.speeding=0,this.bustTimer=0,this.lastCrime=-99,this.seen=!1,this.events=this.events||[];for(let t of this.traffic.police)this.traffic.endChase(t)}get evading(){return this.level>0&&!this.seen}get evadeTime(){return 7+this.level*3}sightRange(){return 70+this.level*25}witness(t,e,n){let i=null,r=n;for(let o of this.traffic.police){let a=Math.hypot(o.x-t,o.z-e);a>r||u0(this.colliders,o.x,o.z,t,e)||(i=o,r=a)}return i}crime(t,e,n,i,r,o=!0){if(r-this.lastCrime<2.5&&t!=="police")return!1;let a=o?this.witness(e,n,75+this.level*15):null;if(o&&!a&&this.level===0||o&&!a&&!this.seen)return!1;this.lastCrime=r;let c=this.level;return this.level=Math.min(5,Math.max(this.level+i,t==="police"?2:1)),this.evade=0,this.level>c&&this.events.push({type:"up",level:this.level,kind:t}),a&&this.traffic.startChase(a),!0}update(t,e,n,i,r){if(this.events.length=0,!r){this.level&&this.reset();return}if(e.kmh>125&&this.witness(e.x,e.z,55)?(this.speeding+=t,this.speeding>1.2&&(this.crime("speeding",e.x,e.z,1,n),this.speeding=0)):this.speeding=Math.max(0,this.speeding-t),!this.level){this.seen=!1;return}let a=Math.min(this.traffic.police.length,[0,1,2,3,4,5][this.level]),c=this.traffic.police.filter(f=>f.mode==="chase");if(c.length<a){let f=this.traffic.police.filter(d=>d.mode!=="chase").sort((d,u)=>Math.hypot(d.x-e.x,d.z-e.z)-Math.hypot(u.x-e.x,u.z-e.z))[0];f&&(Math.hypot(f.x-e.x,f.z-e.z)>260?this.traffic.dispatch(f,e,i):this.traffic.startChase(f))}let h=this.sightRange();if(this.seen=c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<h&&!u0(this.colliders,f.x,f.z,e.x,e.z)),this.seen)this.evade=0;else if(this.evade+=t,this.evade>this.evadeTime){this.events.push({type:"evaded"}),this.reset();return}c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<8)&&e.kmh<6?(this.bustTimer+=t,this.bustTimer>2.5&&(this.events.push({type:"busted"}),this.reset())):this.bustTimer=Math.max(0,this.bustTimer-t*2)}sirenLevel(t){let e=1/0;for(let n of this.traffic.police)n.mode==="chase"&&(e=Math.min(e,Math.hypot(n.x-t.x,n.z-t.z)));return Math.max(0,1-e/260)}};var iM=[["sedan",16],["suv",11],["hatch",11],["pickup",7],["taxi",9],["police",5]],cf={sedan:26,suv:20,hatch:22,pickup:12,taxi:0,police:0},sM=["sedan","sedan","suv","hatch","hatch","pickup"],f0=["#e9e9e6","#e9e9e6","#151719","#151719","#9ea3a6","#5d6265","#1f3a5f","#8e1c1c","#c9b99a","#2e4a3a","#6b7d8c","#3a2f2a","#7a8f9e","#b85c2a"],d0=11.85,rM=430,p0=210,Oi=new ne,Ns=new He,xi=new P,uo=new P(1,1,1),Ta=new P(0,1,0),oM=new P(1,0,0),ih=new ne,hf=new He,aM=new He().setFromAxisAngle(Ta,Math.PI),Ea=new ne().makeScale(0,0,0),Bi=new kt;function g0(s,t){return s==="ns"?-t:t}function uf(s,t){return s==="ns"?t<0?0:Math.PI:t>0?-Math.PI/2:Math.PI/2}function ff(s,t){return s==="ns"?[0,t]:[t,0]}function Sa(s,t,e,n,i){let r=g0(s,e)*fa[n];return s==="ns"?[t+r,i]:[i,t+r]}function m0(s){return Math.atan2(Math.sin(s),Math.cos(s))}function df(s,t){return s.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},s.customProgramCacheKey=()=>t,s}var pf=new Map;function lM(s){if(pf.has(s))return pf.get(s);let e=Object.entries({trim:"#14181a",dark:"#07090a",chrome:"#b9bec2",plate:"#d6d2c4",rev:"#c9c9c2",amber:"#c9741a"}).map(([i,r])=>{let o=s.parts[i].clone(),a=new kt(r),c=o.attributes.position.count,h=new Float32Array(c*3);for(let l=0;l<c;l++)h[l*3]=a.r,h[l*3+1]=a.g,h[l*3+2]=a.b;return o.setAttribute("color",new yn(h,3)),o}),n={paint:s.parts.paint,glass:s.parts.glass,body:ln(e),head:s.parts.head,tail:s.parts.tail};return pf.set(s,n),n}var cM=s=>_a(16777215,{metalness:.35,roughness:.32,seams:s,twoTone:["0.015","0.92","0.7"]}),sh=class{constructor(t,e){this.cars=[],this.meshes=[],this.types={},this.parked=[],this.police=[],this.world=null,this.peds=[],this.policePace=.6;let n=co(e);this.headMat=df(new Zt({color:16777215,emissive:16773846,emissiveIntensity:1,roughness:.2}),"head-inst"),this.tailMat=df(new Zt({color:3802885,emissive:16719888,emissiveIntensity:1,roughness:.3}),"tail-inst");let i=vn(e,128,32,(l,f)=>{l.fillStyle="#f7d046",l.fillRect(0,0,f,32),l.fillStyle="#1a1a1a",l.font='800 24px "Barlow Condensed", Impact, sans-serif',l.textAlign="center",l.fillText("TAXI",f/2,25)});this.taxiSignMat=new Zt({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.3}),this.barMat=df(new Zt({color:1118481,emissive:16777215,emissiveIntensity:1,roughness:.3}),"lightbar-inst"),this.bodyMat=new Zt({vertexColors:!0,roughness:.5,metalness:.4}),this.parked=this.layoutParking();for(let[l,f]of iM){let u=Zc(l==="taxi"||l==="police"?"sedan":l),g=f+(cf[l]||0),m={paint:l==="police"?cM(u.seams):_a(16777215,{metalness:.45,roughness:.38,seams:u.seams}),glass:n.glass,body:this.bodyMat,head:this.headMat,tail:this.tailMat},p={};for(let[I,S]of Object.entries(lM(u))){let w=new Ue(S,m[I],g);w.castShadow=I==="paint",(I==="glass"||I==="body")&&w.layers.set(1),w.receiveShadow=!0,w.frustumCulled=!1,w.instanceMatrix.setUsage(wi);for(let N=0;N<g;N++)w.setMatrixAt(N,Ea);t.add(w),p[I]=w,this.meshes.push(w)}for(let I=0;I<g;I++)p.paint.setColorAt(I,Bi.set(l==="taxi"?"#f2c230":ye(f0))),p.tail.setColorAt(I,Bi.setScalar(1)),p.head.setColorAt(I,Bi.setScalar(1));let _=new Ue(u.wheel.tire,n.tireLite,g*4),M=new Ue(u.wheel.rim,n.rim,g*4);for(let I of[_,M]){I.frustumCulled=!1,I.castShadow=!1,I.layers.set(1),I.instanceMatrix.setUsage(wi);for(let S=0;S<g*4;S++)I.setMatrixAt(S,Ea);t.add(I),this.meshes.push(I)}let v=null,E=null;if(l==="taxi"&&(v=new Ue(new xe(.62,.2,.26),this.taxiSignMat,f),v.frustumCulled=!1,t.add(v),this.meshes.push(v)),l==="police"){E=new Ue(new xe(.62,.16,.3),this.barMat,f*2),E.frustumCulled=!1;for(let I=0;I<f*2;I++)E.setColorAt(I,Bi.setScalar(0));t.add(E),this.meshes.push(E)}let A=Math.max(...u.type.cabin.top.map(I=>I[1])),L={name:l,geo:u,parts:p,tire:_,rim:M,sign:v,bar:E,roofY:A,moving:f,cap:g};this.types[l]=L;for(let I=0;I<f;I++){let S={type:L,slot:I,geo:u,police:l==="police",mode:"lane"};this.spawnLane(S,On.x,On.z,0,420),this.cars.push(S),S.police&&this.police.push(S)}}let r=vn(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d/2,4,f/2,d/2,d/2);u.addColorStop(0,"rgba(0,0,0,0.75)"),u.addColorStop(.55,"rgba(0,0,0,0.45)"),u.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),o=new an(2.6,5.6);o.rotateX(-Math.PI/2);let a=Object.values(cf).reduce((l,f)=>l+f,0);this.blobs=new Ue(o,new En({map:r,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),this.cars.length+a+1),this.blobs.frustumCulled=!1,this.blobs.renderOrder=1,this.blobs.userData.noAO=!0,t.add(this.blobs);let c=vn(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d*.75,2,f/2,d*.6,d*.6);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(.5,"rgba(255,255,255,0.3)"),u.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),h=new an(6,14);h.rotateX(-Math.PI/2),h.translate(0,0,-9.5),this.poolMat=new En({map:c,color:16773328,transparent:!0,depthWrite:!1,blending:ai,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2}),this.pools=new Ue(h,this.poolMat,this.cars.length),this.pools.frustumCulled=!1,this.pools.layers.set(1),this.pools.userData.noAO=!0,t.add(this.pools),this.parkTimer=0,this.nearParked=[],this.refreshParked(On.x,On.z)}layoutParking(){let t=[],e=new gi(48);for(let i of cs){let[r,o]=ar(i);e.add({x:r,z:o})}let n=i=>i.slice(0,-1).map((r,o)=>[r+27,i[o+1]-27]);for(let[i,r,o]of[["ns",Le,Fe],["ew",Fe,Le]])for(let a of r)for(let c of[-1,1])if(!(i==="ns"&&a===sn&&c<0))for(let[h,l]of n(o))for(let f=h+3.6;f<l-3;f+=7.2){if(!we(.42))continue;let d=f+Mt(-.6,.6),u=i==="ns"?a+c*d0:d,g=i==="ns"?d:a+c*d0;if(e.near(u,g,14,m=>Math.hypot(m.x-u,m.z-g)<14)||u<-300&&qn.some(m=>Math.abs(g-m.z)<20))continue;let x=i==="ns"?-c:c;t.push({parked:!0,type:ye(sM),x:u,z:g,heading:uf(i,x)+Mt(-.04,.04),color:ye(f0),hit:null,slot:-1})}return this.parkGrid=new gi(80).addAll(t),t}refreshParked(t,e){for(let r of Object.values(this.types))for(let o=r.moving;o<r.cap;o++){for(let a of Object.values(r.parts))a.setMatrixAt(o,Ea);for(let a=0;a<4;a++)r.tire.setMatrixAt(o*4+a,Ea),r.rim.setMatrixAt(o*4+a,Ea)}for(let r of this.nearParked)r.slot=-1;let n=[];this.parkGrid.near(t,e,p0,r=>{r.d=Math.hypot(r.x-t,r.z-e),r.slot=-1,r.d<p0&&n.push(r)}),n.sort((r,o)=>r.d-o.d);let i={};this.nearParked=[];for(let r of n){let o=this.types[r.type],a=i[r.type]||0;a>=cf[r.type]||(i[r.type]=a+1,r.slot=o.moving+a,o.parts.paint.setColorAt(r.slot,Bi.set(r.color)),o.parts.head.setColorAt(r.slot,Bi.setScalar(0)),o.parts.tail.setColorAt(r.slot,Bi.setScalar(.12)),this.writeCar(o,r.slot,r.x,r.z,r.heading,0),this.nearParked.push(r))}}writeCar(t,e,n,i,r,o){Ns.setFromAxisAngle(Ta,r),Oi.compose(xi.set(n,.02,i),Ns,uo);for(let a of Object.values(t.parts))a.setMatrixAt(e,Oi);return t.geo.wheels.forEach((a,c)=>{hf.setFromAxisAngle(oM,o*(a.side<0?-1:1)),a.side<0&&hf.premultiply(aM),ih.compose(xi.set(a.x,a.y,a.z),hf,uo),ih.premultiply(Oi),t.tire.setMatrixAt(e*4+c,ih),t.rim.setMatrixAt(e*4+c,ih)}),Oi}spawnLane(t,e,n,i,r,o=null){for(let a=0;a<40;a++){let c=bt()<.5?"ns":"ew",h=(c==="ns"?Le:Fe).filter(p=>Math.abs(p-(c==="ns"?e:n))<r);if(!h.length)continue;let l=ye(h),f=bt()<.5?1:-1,d=bt()<.5?0:1,u=c==="ns"?Ne.clamp(n+Mt(-r,r),Oe+10,je-10):Ne.clamp(e+Mt(-r,r),sn+10,Ye-10),[g,x]=Sa(c,l,f,d,u),m=Math.hypot(g-e,x-n);if(!(m<i||m>r)&&!(c==="ns"?Fe:Le).some(p=>Math.abs(p-u)<24)&&!this.cars.some(p=>p!==t&&p.mode==="lane"&&p.axis===c&&p.road===l&&p.dir===f&&p.lane===d&&Math.abs(p.s-u)<20)){if(o){let p=g-o.position.x,_=x-o.position.z,M=Math.hypot(p,_)||1;if((p*o.fx+_*o.fz)/M>.2&&M<300)continue}return Object.assign(t,{axis:c,road:l,dir:f,lane:d,s:u}),Object.assign(t,{mode:"lane",cruise:t.police?Mt(10.5,12.5):Mt(11,16.5),speed:9,turn:null,plan:null,decided:null,hit:null,offset:null,braking:!1,blockedTime:0,wheelSpin:0,vx:0,vz:0}),this.place(t),!0}}return t.axis===void 0&&Object.assign(t,{axis:"ns",road:Le[1],dir:1,lane:0,s:0}),Object.assign(t,{mode:"lane",cruise:12,speed:0,turn:null,plan:null,hit:null,offset:null,wheelSpin:0,vx:0,vz:0,blockedTime:0}),this.place(t),!1}place(t){if(t.turn){let e=t.turn,n=e.t*Math.PI/2,i=Math.cos(n),r=Math.sin(n);t.x=e.O[0]+e.u[0]*i+e.v[0]*r,t.z=e.O[1]+e.u[1]*i+e.v[1]*r;let o=-e.u[0]*r+e.v[0]*i,a=-e.u[1]*r+e.v[1]*i;t.heading=Math.atan2(-o,-a)}else[t.x,t.z]=Sa(t.axis,t.road,t.dir,t.lane,t.s),t.heading=uf(t.axis,t.dir)}nextCross(t){let e=t.axis==="ns"?Fe:Le,n=null;for(let i of e){let r=(i-t.s)*t.dir;r>-1&&(n===null||r<(n-t.s)*t.dir)&&(n=i)}return n}exitValid(t,e,n){let i=t==="ns"?Fe:Le;return e>0?n<i[i.length-1]:n>i[0]}planTurn(t,e){let n=t.axis==="ns"?t.dir<0?"N":"S":t.dir>0?"E":"W",i={N:"E",E:"S",S:"W",W:"N"}[n],r={N:"W",W:"S",S:"E",E:"N"}[n],o=I=>I==="N"?["ns",-1]:I==="S"?["ns",1]:I==="E"?["ew",1]:["ew",-1],a=I=>{let[S,w]=o(I);return S===t.axis?this.exitValid(S,w,e):this.exitValid(S,w,t.road)},c=[];a(n)&&c.push(["straight",t.lane===1?.6:.72]),a(i)&&c.push(["right",t.lane===1?.4:.08]),a(r)&&c.push(["left",t.lane===0?.28:.06]);let h=bt()*c.reduce((I,S)=>I+S[1],0),l=c[0][0];for(let[I,S]of c)if((h-=S)<=0){l=I;break}if(l==="straight")return null;let[f,d]=o(l==="right"?i:r),u=t.lane,g=e,x=Sa(t.axis,t.road,t.dir,t.lane,0),m=Sa(f,g,d,u,0),p=t.axis==="ns"?[x[0],m[1]]:[m[0],x[1]],_=ff(t.axis,t.dir),M=ff(f,d),v=l==="right"?6.5:10.5,E=[p[0]-_[0]*v,p[1]-_[1]*v],A=[p[0]+M[0]*v,p[1]+M[1]*v],L=[E[0]+M[0]*v,E[1]+M[1]*v];return{startS:t.axis==="ns"?E[1]:E[0],O:L,u:[E[0]-L[0],E[1]-L[1]],v:[A[0]-L[0],A[1]-L[1]],t:0,len:v*Math.PI/2,next:{axis:f,road:g,dir:d,lane:u,s:f==="ns"?A[1]:A[0]}}}rejoinLane(t){let e=-Math.sin(t.heading),n=-Math.cos(t.heading),i=Math.abs(n)>Math.abs(e)?"ns":"ew",r=i==="ns"?Math.sign(n)||1:Math.sign(e)||1,o=i==="ns"?t.x:t.z,a=i==="ns"?hs(o):Ls(o),c=(o-a)*g0(i,r),h=Math.abs(c-fa[0])<Math.abs(c-fa[1])?0:1,l=i==="ns"?t.z:t.x,[f,d]=Sa(i,a,r,h,l);Object.assign(t,{mode:"lane",axis:i,road:a,dir:r,lane:h,s:l,turn:null,plan:null,decided:null,hit:null}),t.offset={dx:t.x-f,dz:t.z-d,dh:m0(t.heading-uf(i,r)),t:1},Math.abs(o-a)>Me+6&&this.spawnLane(t,t.x,t.z,0,200)}update(t,e,n,i,r=null){if(this.frozen)return;let o=n.x,a=n.z,c=r?{position:r.position,fx:0,fz:0}:null;if(c){r.getWorldDirection(xi),c.fx=xi.x,c.fz=xi.z;let l=Math.hypot(c.fx,c.fz)||1;c.fx/=l,c.fz/=l}for(let l of this.cars){if(l.mode==="lane"&&Math.hypot(l.x-o,l.z-a)>rM){this.spawnLane(l,o,a,140,380,c);continue}if(l.mode==="chase"){this.chase(l,t,n);continue}if(l.hit){let m=l.hit;l.x+=m.vx*t,l.z+=m.vz*t;let p=Math.exp(-1.8*t);m.vx*=p,m.vz*=p,l.heading+=m.spin*t,m.spin*=Math.exp(-2.5*t),m.t-=t,l.speed=0,this.collideWorld(l),m.t<=0&&this.rejoinLane(l);continue}let f=l.cruise,[d,u]=l.turn?[-Math.sin(l.heading),-Math.cos(l.heading)]:ff(l.axis,l.dir);if(l.turn)f=Math.min(f,8);else{let m=this.nextCross(l);if(m!==null){let p=(m-l.s)*l.dir;p<34&&l.decided!==m&&(l.decided=m,l.plan=this.planTurn(l,m));let _=p-20.5,M=zs(l.axis==="ns"?0:1,e);_>-1&&(M===0||M===1&&_>9)&&(f=Math.min(f,Math.sqrt(Math.max(0,_-.5))*2.4)),l.plan&&(f=Math.min(f,l.plan.next.lane===0?9:7.5)),!l.plan&&!this.exitValid(l.axis,l.dir,m)&&(f=Math.min(f,Math.sqrt(Math.max(0,_))*2))}for(let p of this.cars){if(p===l||p.mode!=="lane"||p.turn||p.axis!==l.axis||p.road!==l.road||p.dir!==l.dir||p.lane!==l.lane)continue;let _=(p.s-l.s)*l.dir;_>0&&_<45&&(f=Math.min(f,Math.max(0,_-7.5)*.9))}}let g=(m,p,_,M)=>{let v=m-l.x,E=p-l.z,A=v*d+E*u,L=Math.abs(v*u-E*d);return A>0&&A<32&&L<M?(f=Math.min(f,Math.max(0,A-_)*.85),!0):!1};g(o,a,6.5,2.6)?l.speed<1&&n.kmh<5&&(l.blockedTime+=t,l.blockedTime>2.5&&(l.blockedTime=-4,i?.(l))):l.blockedTime=Math.max(0,l.blockedTime-t);for(let m of this.peds)g(m.x,m.z,5,2.4);for(let m of this.cars)(m.mode!=="lane"||m.hit)&&m!==l&&g(m.x,m.z,7,2.6);let x=f>l.speed?3.2:9;if(l.speed+=Math.sign(f-l.speed)*Math.min(Math.abs(f-l.speed),x*t),l.braking=f<l.speed-.3||l.speed<.5&&f<.5,l.turn?(l.turn.t+=l.speed*t/l.turn.len,l.turn.t>=1&&(Object.assign(l,l.turn.next),l.turn=null,l.decided=null)):(l.s+=l.speed*l.dir*t,l.plan&&(l.s-l.plan.startS)*l.dir>=0&&(l.turn=l.plan,l.plan=null)),this.place(l),l.offset){let m=l.offset;if(m.t-=t/1.6,m.t<=0)l.offset=null;else{let p=m.t*m.t;l.x+=m.dx*p,l.z+=m.dz*p,l.heading+=m.dh*p}}l.vx=d*l.speed,l.vz=u*l.speed,l.wheelSpin-=l.speed*t/l.geo.type.wheelR}this.updateParked(t),this.collidePlayer(n),this.parkTimer-=t;let h=Math.hypot(o-(this.lastParkX??o),a-(this.lastParkZ??a))>60;(this.parkTimer<=0||h)&&(this.parkTimer=.5,this.lastParkX=o,this.lastParkZ=a,this.refreshParked(o,a))}chase(t,e,n){let i=this.policePace,r=n.x-t.x,o=n.z-t.z,a=Math.hypot(r,o),c=Math.min(a/35,1.1)*i,h=n.x+n.vx*c,l=n.z+n.vz*c,f=Math.atan2(-(h-t.x),-(l-t.z)),d=10+t.speed*.6,u=this.world?.boxGrid,g=A=>{let L=t.x-Math.sin(A)*d,I=t.z-Math.cos(A)*d;return!!u&&u.near(L,I,2,S=>Math.abs(L-S.x)<S.w+1.8&&Math.abs(I-S.z)<S.d+1.8)};if(g(f)){for(let A of[.5,-.5,1,-1,1.6,-1.6])if(!g(f+A)){f+=A;break}}let x=m0(f-t.heading),m=1.9/(1+t.speed*.012);t.heading+=Ne.clamp(x,-m*e,m*e);let p=Math.hypot(n.vx,n.vz),_=50*i,M=a>60?_:Math.min(_+2,p+10*i);Math.abs(x)>.9&&(M=Math.min(M,14*Math.min(1,i+.2))),a<9&&p<3&&(M=Math.min(M,2)),t.speed+=Ne.clamp(M-t.speed,-14*e,9*i*e);let v=-Math.sin(t.heading),E=-Math.cos(t.heading);t.vx+=(v*t.speed-t.vx)*Math.min(1,e*5),t.vz+=(E*t.speed-t.vz)*Math.min(1,e*5),t.x+=t.vx*e,t.z+=t.vz*e,this.collideWorld(t),t.wheelSpin-=t.speed*e/t.geo.type.wheelR,t.braking=M<t.speed-1}collideWorld(t){let e=this.world?.boxGrid;e&&e.near(t.x,t.z,2,n=>{let i=n.w+1.1-Math.abs(t.x-n.x),r=n.d+1.1-Math.abs(t.z-n.z);i<=0||r<=0||(i<r?(t.x+=Math.sign(t.x-n.x)*i,t.vx*=-.2):(t.z+=Math.sign(t.z-n.z)*r,t.vz*=-.2),t.speed*=.6)}),t.x=Ne.clamp(t.x,De.minX+60,De.maxX),t.z=Ne.clamp(t.z,De.minZ,De.maxZ)}startChase(t){if(t.mode==="chase")return;t.mode="chase",t.turn=null,t.plan=null,t.hit=null,t.offset=null;let e=-Math.sin(t.heading),n=-Math.cos(t.heading);t.vx=e*t.speed,t.vz=n*t.speed}endChase(t){t.mode==="chase"&&(this.rejoinLane(t),t.speed=Math.min(t.speed,10))}dispatch(t,e,n){let i={position:n.position,fx:0,fz:0};n.getWorldDirection(xi);let r=Math.hypot(xi.x,xi.z)||1;i.fx=xi.x/r,i.fz=xi.z/r,this.spawnLane(t,e.x,e.z,110,240,i),this.startChase(t)}updateParked(t){for(let e of this.nearParked){if(!e.hit)continue;let n=e.hit;e.x+=n.vx*t,e.z+=n.vz*t,e.heading+=n.spin*t;let i=Math.exp(-2.4*t);n.vx*=i,n.vz*=i,n.spin*=i,Math.hypot(n.vx,n.vz)<.05&&Math.abs(n.spin)<.02&&(e.hit=null),this.writeCar(this.types[e.type],e.slot,e.x,e.z,e.heading,0)}}collidePlayer(t){let e=[-Math.sin(t.heading),-Math.cos(t.heading)],n=[...this.cars,...this.nearParked];this.lastHit=null;for(let i of n){let r=t.x-i.x,o=t.z-i.z;if(r*r+o*o>64)continue;let a=!!i.parked,c=[-Math.sin(i.heading),-Math.cos(i.heading)],l=(a?4.7:i.geo.type.length)/2-1.05;for(let f of[-1.3,1.3])for(let d of[-l,l]){let u=t.x+e[0]*f,g=t.z+e[1]*f,x=i.x+c[0]*d,m=i.z+c[1]*d,p=u-x,_=g-m,M=Math.hypot(p,_);if(M>2.15||M<1e-4)continue;p/=M,_/=M;let v=2.15-M;t.x+=p*v*.6,t.z+=_*v*.6;let E=a?i.hit?i.hit.vx:0:i.mode==="chase"?i.vx:i.hit?i.hit.vx:c[0]*i.speed,A=a?i.hit?i.hit.vz:0:i.mode==="chase"?i.vz:i.hit?i.hit.vz:c[1]*i.speed,L=(t.vx-E)*p+(t.vz-A)*_;if(L<0){let I=a?.55:.5,S=-1.3*L*I;t.vx+=S*p*(a?.8:1),t.vz+=S*_*(a?.8:1),t.impact=Math.max(t.impact,-L),this.lastHit={car:i,parked:a,police:!!i.police,speed:-L,x:(u+x)/2,z:(g+m)/2},t.registerHit?.(this.lastHit.x,this.lastHit.z,-L),(!t.contact||-L>t.contact.speed)&&(t.contact={x:this.lastHit.x,z:this.lastHit.z,speed:-L,nx:p,nz:_}),i.mode==="chase"?(i.vx-=S*p,i.vz-=S*_):(i.hit||(i.hit={vx:E,vz:A,spin:0,t:0}),i.hit.vx-=S*p,i.hit.vz-=S*_,i.hit.spin+=(bt()-.5)*Math.min(-L,20)*.25,i.hit.t=2.8,i.turn=null,i.plan=null)}else!i.hit&&!a&&i.mode!=="chase"&&(i.hit={vx:-p*1.5,vz:-_*1.5,spin:0,t:.6});i.x-=p*v*.4,i.z-=_*v*.4}}}sync(t,e,n=0){let i=0;this.cars.forEach((r,o)=>{let a=r.type,c=this.writeCar(a,r.slot,r.x,r.z,r.heading,r.wheelSpin);if(a.sign){let h=c.clone().multiply(new ne().makeTranslation(0,a.roofY+.1,.1));a.sign.setMatrixAt(r.slot,h)}if(a.bar)for(let h=0;h<2;h++){let l=c.clone().multiply(new ne().makeTranslation(h?.32:-.32,a.roofY+.09,.1));a.bar.setMatrixAt(r.slot*2+h,l);let f=r.mode==="chase"&&Math.sin(n*18+h*Math.PI)>0?1:0;a.bar.setColorAt(r.slot*2+h,f?h?Bi.setRGB(.3,.5,6):Bi.setRGB(6,.2,.15):Bi.setRGB(.04,.04,.05))}a.parts.tail.setColorAt(r.slot,Bi.setScalar(r.braking?4:1)),Ns.setFromAxisAngle(Ta,r.heading),Oi.compose(xi.set(r.x,.035,r.z),Ns,uo),this.blobs.setMatrixAt(i++,Oi),this.pools.setMatrixAt(o,Oi)});for(let r of this.nearParked)Ns.setFromAxisAngle(Ta,r.heading),Oi.compose(xi.set(r.x,.035,r.z),Ns,uo),this.blobs.setMatrixAt(i++,Oi);Ns.setFromAxisAngle(Ta,e.heading),Oi.compose(xi.set(e.x,e.y+.035,e.z),Ns,uo.set(1.05,1,1)),uo.set(1,1,1),this.blobs.setMatrixAt(i++,Oi),this.blobs.count=i,this.blobs.instanceMatrix.needsUpdate=!0,this.pools.instanceMatrix.needsUpdate=!0;for(let r of this.meshes)r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0);this.headMat.emissiveIntensity=1+t*8,this.tailMat.emissiveIntensity=.8+t*2.2,this.taxiSignMat.emissiveIntensity=.3+t*2.5,this.poolMat.opacity=t*.55}nearest(t,e){let n=1/0;for(let i of this.cars)n=Math.min(n,Math.hypot(i.x-t,i.z-e));return n}};var oi=62.5,fo=oi*2,gr=fo*4,mr=140,hM=["#f1c7a5","#e0ac85","#c68b62","#a26a45","#7a4b2f","#5a3824"],uM=["#e9e6dd","#20242a","#c23b2e","#2d5d8a","#f2c14e","#3f7a52","#7a4a8c","#e07a4a","#9fb3c4","#d4d0c4","#1f3b5c","#a83c62"],fM=["#26303d","#1b1d20","#5c6b7a","#c9b79a","#3b4652","#6f5b45","#2f3b2c","#e5e1d6"];function dM(){let s=[],t=(e,n,i,r,o,a)=>{e.translate(n,i,r);let c=e.index?e.toNonIndexed():e,h=c.attributes.position.count;c.setAttribute("aPart",new be(new Float32Array(h).fill(o),1)),c.setAttribute("aRegion",new be(new Float32Array(h).fill(a),1)),c.attributes.uv&&c.deleteAttribute("uv"),s.push(c)};for(let[e,n]of[[-1,1],[1,2]])t(new xe(.15,.82,.17),e*.1,.49,0,n,2),t(new xe(.16,.09,.28),e*.1,.045,-.05,n,3);t(new xe(.36,.2,.21),0,.96,0,0,2),t(new xe(.42,.56,.23),0,1.33,0,0,1),t(new Ce(.05,.055,.1,8),0,1.65,0,0,0),t(new Un(.115,12,10),0,1.79,-.01,0,0),t(new Un(.122,12,8,0,Math.PI*2,0,Math.PI*.55),0,1.81,.012,0,4);for(let[e,n]of[[-1,3],[1,4]])t(new xe(.1,.34,.12),e*.27,1.43,0,n,1),t(new xe(.085,.3,.1),e*.275,1.11,0,n,0);return ln(s)}var x0=`
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
}`;function pM(){let s=new Zt({color:16777215,roughness:.82});s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${x0}
attribute vec3 aShirt; attribute vec3 aPants; attribute vec4 aSkin; varying vec3 vPedCol;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
pedPose();
objectNormal = pedBody * (pedLimb * objectNormal);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed = pedTransform(transformed);
        vec3 hair = mix(vec3(0.05, 0.035, 0.02), vec3(0.55, 0.42, 0.22), aSkin.w);
        vPedCol = aRegion < 0.5 ? aSkin.rgb : aRegion < 1.5 ? aShirt : aRegion < 2.5 ? aPants : aRegion < 3.5 ? vec3(0.06) : hair;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPedCol;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = vPedCol;`)},s.customProgramCacheKey=()=>"pedestrian";let t=new Wr({depthPacking:bc});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${x0}`).replace("#include <begin_vertex>",`#include <begin_vertex>
pedPose();
transformed = pedTransform(transformed);`)},t.customProgramCacheKey=()=>"pedestrian-depth",{mat:s,depth:t}}function mf(s,t,e,n){let i=(e%gr+gr)%gr,r=Math.floor(i/fo),o=i-r*fo;return r===0?(n.x=s-oi+o,n.z=t-oi,n.dx=1,n.dz=0):r===1?(n.x=s+oi,n.z=t-oi+o,n.dx=0,n.dz=1):r===2?(n.x=s+oi-o,n.z=t+oi,n.dx=-1,n.dz=0):(n.x=s-oi,n.z=t+oi-o,n.dx=0,n.dz=-1),n}var rh=s=>s*fo,y0=[[-1,-1],[1,-1],[1,1],[-1,1]];function v0(s,t){return y0.findIndex(([e,n])=>e===s&&n===t)}var oh=class{constructor(t){let{mat:e,depth:n}=pM(),i=dM();this.aWalk=new dn(new Float32Array(mr*4),4).setUsage(wi);let r=new Float32Array(mr*3),o=new Float32Array(mr*3),a=new Float32Array(mr*4),c=new kt;for(let h=0;h<mr;h++)r.set(c.set(ye(uM)).toArray(),h*3),o.set(c.set(ye(fM)).toArray(),h*3),a.set([...c.set(ye(hM)).toArray(),bt()<.2?1:bt()*.4],h*4);i.setAttribute("aWalk",this.aWalk),i.setAttribute("aShirt",new dn(r,3)),i.setAttribute("aPants",new dn(o,3)),i.setAttribute("aSkin",new dn(a,4)),this.mesh=new Ue(i,e,mr),this.mesh.customDepthMaterial=n,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(wi),this.mesh.name="pedestrians",t.add(this.mesh),this.peds=[],this.events=[],this.onRoad=[],this.tmp={x:0,z:0,dx:0,dz:0},this.m=new ne,this.q=new He,this.e=new Ln(0,0,0,"YXZ");for(let h=0;h<mr;h++){let l={i:h,scale:Mt(.9,1.08)};this.place(l,On.x,On.z,!0),this.peds.push(l)}}place(t,e,n,i=!1){let r=[],o=lr(e),a=da(n),c=i?330:300;for(let f=o-320;f<=o+320;f+=160)for(let d=a-320;d<=a+320;d+=160){if(!eo.includes(f)||!Is.includes(d)||Math.hypot(f-e,d-n)>=c)continue;let u=1+Math.round(ls[Ui(f,d)][2]*3);for(let g=0;g<u;g++)r.push([f,d])}let[h,l]=r.length?ye(r):[o,a];Object.assign(t,{cx:h,cz:l,t:bt()*gr,dir:we(.5)?1:-1,speed:Mt(1.05,1.55),lateral:Mt(-.9,.9),state:we(.12)?"idle":"walk",timer:Mt(3,9),phase:bt()*6,amp:0,fall:0,lean:0,vx:0,vz:0,cross:null,x:0,z:0,heading:0}),this.pathPoint(t),t.x=t.px,t.z=t.pz}pathPoint(t){let e=mf(t.cx,t.cz,t.t,this.tmp),n=e.dz,i=-e.dx;t.px=e.x+n*t.lateral,t.pz=e.z+i*t.lateral,t.pdx=e.dx*t.dir,t.pdz=e.dz*t.dir}tryCross(t,e,n){let[i,r]=y0[e],o=[],a=t.cx+i*160,c=t.cz+r*160;if(eo.includes(a)&&o.push({axis:0,tx:a,tz:t.cz,corner:v0(-i,r)}),Is.includes(c)&&o.push({axis:1,tx:t.cx,tz:c,corner:v0(i,-r)}),!o.length||!we(.45))return!1;let h=ye(o),l=mf(t.cx,t.cz,rh(e),{}),f=mf(h.tx,h.tz,rh(h.corner),{});return t.cross={...h,ax:l.x,az:l.z,bx:f.x,bz:f.z,f:0,len:Math.hypot(f.x-l.x,f.z-l.z)},t.state="wait",t.timer=25,!0}update(t,e,n){let i=-Math.sin(n.heading),r=-Math.cos(n.heading),o=Math.cos(n.heading),a=-Math.sin(n.heading),c=Math.abs(n.speed);this.onRoad.length=0,this.events.length=0;let h=this.aWalk.array;for(let l of this.peds){Math.hypot(l.x-n.x,l.z-n.z)>330&&(l.state==="walk"||l.state==="idle")&&this.place(l,n.x,n.z);let f=0,d=l.x-n.x,u=l.z-n.z,g=d*i+u*r,x=d*o+u*a;if(c>4&&g>-1&&g<c*1.25+5&&Math.abs(x)<2.6&&Math.abs(n.y-fe)<2.5&&l.state!=="down"&&l.state!=="getup"&&l.state!=="dodge"){let v=Math.abs(x)>.2?Math.sign(x):we(.5)?1:-1;l.vx=o*v*5.2+i*.6,l.vz=a*v*5.2+r*.6,l.state="dodge",l.timer=.55,l.resume=l.cross?"cross":"return"}let p=Math.hypot(l.x-(n.x+i*1.3*Math.sign(g||1)),l.z-(n.z+r*1.3*Math.sign(g||1)));if(l.state!=="down"&&l.state!=="getup"&&Math.hypot(d,u)<3&&p<1.4)if(c>5)l.state="down",l.timer=2.6,l.vx=n.vx*.35+o*Math.sign(x||1)*1.5,l.vz=n.vz*.35+a*Math.sign(x||1)*1.5,l.heading=Math.atan2(-l.vx,-l.vz)+Math.PI,this.events.push({type:"hit",x:l.x,z:l.z,speed:c});else{let v=Math.max(p,.01);l.x+=(l.x-n.x)/Math.hypot(d,u)*(1.4-v)*.5,l.z+=(l.z-n.z)/Math.hypot(d,u)*(1.4-v)*.5}switch(l.state){case"idle":{l.timer-=t,l.timer<=0&&(l.state="walk",l.timer=Mt(6,20));break}case"walk":{f=l.speed;let v=l.t;l.t+=l.dir*l.speed*t;let E=Math.floor(v/fo),A=Math.floor(l.t/fo);if(E!==A){let L=((l.dir>0?A:E)%4+4)%4;this.tryCross(l,L,e)&&(l.t=rh(L))}l.t=(l.t%gr+gr)%gr,l.timer-=t,l.timer<=0&&!l.cross&&(we(.25)?(l.state="idle",l.timer=Mt(2,6)):(l.timer=Mt(5,20),we(.2)&&(l.dir*=-1))),this.pathPoint(l),l.x+=(l.px-l.x)*Math.min(1,t*6),l.z+=(l.pz-l.z)*Math.min(1,t*6),l.heading=Math.atan2(-l.pdx,-l.pdz);break}case"wait":{l.timer-=t;let v=l.cross;l.x+=(v.ax-l.x)*Math.min(1,t*3),l.z+=(v.az-l.z)*Math.min(1,t*3),l.heading=Math.atan2(-(v.bx-v.ax),-(v.bz-v.az));let E=zs(v.axis,e),A=(e%28+28)%28,L=v.axis===0?A:(A+14)%28;E===0&&L>=13&&L<17?l.state="cross":l.timer<=0&&(l.cross=null,l.state="walk");break}case"cross":{let v=l.cross;f=1.85,v.f=Math.min(1,v.f+f*t/v.len);let E=v.ax+(v.bx-v.ax)*v.f,A=v.az+(v.bz-v.az)*v.f;l.x+=(E-l.x)*Math.min(1,t*8),l.z+=(A-l.z)*Math.min(1,t*8),l.heading=Math.atan2(-(v.bx-v.ax),-(v.bz-v.az)),this.onRoad.push(l),v.f>=1&&(l.cx=v.tx,l.cz=v.tz,l.t=rh(v.corner),l.cross=null,l.state="walk",l.dir=we(.5)?1:-1);break}case"dodge":{f=5,l.x+=l.vx*t,l.z+=l.vz*t,l.vx*=Math.exp(-2.5*t),l.vz*=Math.exp(-2.5*t),l.heading=Math.atan2(-l.vx,-l.vz),l.timer-=t,l.timer<=0&&(l.state=l.resume==="cross"&&l.cross?"cross":"return");break}case"down":{l.x+=l.vx*t,l.z+=l.vz*t;let v=Math.exp(-3.5*t);l.vx*=v,l.vz*=v,l.fall=Math.min(1.5,l.fall+t*6),l.timer-=t,l.timer<=0&&(l.state="getup",l.timer=.9);break}case"getup":{l.fall=Math.max(0,l.fall-t*1.9),l.timer-=t,l.timer<=0&&(l.fall=0,l.state=l.cross?"cross":"return");break}case"return":{this.pathPoint(l);let v=l.px-l.x,E=l.pz-l.z,A=Math.hypot(v,E);if(f=2.2,A<.25){l.state="walk";break}l.x+=v/A*Math.min(A,f*t),l.z+=E/A*Math.min(A,f*t),l.heading=Math.atan2(-v,-E),Math.abs(l.x-l.cx)<oi+1&&Math.abs(l.z-l.cz)<oi+1;break}}(l.state==="dodge"||l.state==="return")&&(Math.abs(l.x-l.cx)>oi+3||Math.abs(l.z-l.cz)>oi+3)&&this.onRoad.push(l);let _=l.state==="down"||l.state==="getup"?0:f;l.amp+=((_>.1?Math.min(.45+_*.12,1.05):0)-l.amp)*Math.min(1,t*6),l.phase+=t*(_>.1?3.2+_*1.6:0),l.lean+=((_>3?.18:.02)-l.lean)*Math.min(1,t*5),h[l.i*4]=l.phase,h[l.i*4+1]=l.amp,h[l.i*4+2]=l.lean,h[l.i*4+3]=l.fall;let M=l.state==="cross"||l.state==="down"||l.state==="dodge"||l.state==="getup"?Math.abs(l.x-l.cx)<oi+4.5&&Math.abs(l.z-l.cz)<oi+4.5?fe:.02:fe;this.q.setFromEuler(this.e.set(0,l.heading,0)),this.m.compose(new P(l.x,M,l.z),this.q,new P(l.scale,l.scale,l.scale)),this.mesh.setMatrixAt(l.i,this.m)}this.mesh.instanceMatrix.needsUpdate=!0,this.aWalk.needsUpdate=!0}};var mM=`
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
}`,gM=`
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
}`,xM=`
uniform sampler2D map;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor * t.a * vAlpha, 1.0);
}`,xr=class{constructor(t,e,{texture:n,additive:i=!1,drag:r=1.5,gravity:o=0,grow:a=1.5}){this.max=e,this.drag=r,this.gravity=o,this.grow=a,this.count=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.rot=new Float32Array(e),this.spin=new Float32Array(e),this.col=new Float32Array(e*3);let c=new na,h=new an(1,1);c.index=h.index,c.setAttribute("position",h.attributes.position),c.setAttribute("uv",h.attributes.uv),this.aPos=new dn(new Float32Array(e*3),3).setUsage(wi),this.aData=new dn(new Float32Array(e*4),4).setUsage(wi),this.aColor=new dn(new Float32Array(e*3),3).setUsage(wi),c.setAttribute("aPos",this.aPos),c.setAttribute("aData",this.aData),c.setAttribute("aColor",this.aColor),c.instanceCount=0,this.uniforms={map:{value:n},light:{value:new kt(1,1,1)}};let l=new on({uniforms:this.uniforms,vertexShader:mM,fragmentShader:i?xM:gM,transparent:!0,depthWrite:!1,blending:i?ai:ts});this.mesh=new $t(c,l),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i?6:5,this.mesh.userData.noAO=!0,this.mesh.layers.set(1),this.geo=c,t.add(this.mesh)}emit(t,e,n,i,r,o,a,c,h,l=1,f=1,d=1){let u=this.count;if(u>=this.max){let g=0;for(let x=1;x<this.max;x++)this.life[x]<this.life[g]&&(g=x);u=g}else this.count++;this.p.set([t,e,n],u*3),this.v.set([i,r,o],u*3),this.col.set([l,f,d],u*3),this.life[u]=this.maxLife[u]=c,this.size[u]=a,this.alpha[u]=h,this.rot[u]=bt()*Math.PI*2,this.spin[u]=(bt()-.5)*1.2}update(t){let e=Math.exp(-this.drag*t),n=0;for(let i=0;i<this.count;i++){if(this.life[i]-=t,this.life[i]<=0)continue;if(n!==i){for(let[c,h]of[[this.p,3],[this.v,3],[this.col,3]])c.copyWithin(n*h,i*h,i*h+h);this.life[n]=this.life[i],this.maxLife[n]=this.maxLife[i],this.size[n]=this.size[i],this.alpha[n]=this.alpha[i],this.rot[n]=this.rot[i],this.spin[n]=this.spin[i]}let r=n*3;this.v[r]*=e,this.v[r+1]=this.v[r+1]*e+this.gravity*t,this.v[r+2]*=e,this.p[r]+=this.v[r]*t,this.p[r+1]+=this.v[r+1]*t,this.p[r+2]+=this.v[r+2]*t,this.rot[n]+=this.spin[n]*t;let o=1-this.life[n]/this.maxLife[n],a=Math.min(o*6,1)*(1-o)*(1-o);this.aPos.array.set([this.p[r],this.p[r+1],this.p[r+2]],r),this.aData.array.set([this.size[n]*(1+o*this.grow),this.alpha[n]*a,this.rot[n],o],n*4),this.aColor.array.set([this.col[r],this.col[r+1],this.col[r+2]],r),n++}this.count=n,this.geo.instanceCount=n,this.aPos.needsUpdate=this.aData.needsUpdate=this.aColor.needsUpdate=!0}};function _0(s,t){let e=vn(t,128,128,(i,r,o)=>{let a=i.createImageData(r,o);for(let c=0;c<o;c++)for(let h=0;h<r;h++){let l=(h-r/2)/(r/2),f=(c-o/2)/(o/2),d=Math.sqrt(l*l+f*f),u=.65+.35*Math.sin(h*.31+Math.sin(c*.23)*3)*Math.sin(c*.27+Math.cos(h*.19)*2),g=Math.max(0,1-d)**1.6*u,x=(c*r+h)*4;a.data[x]=a.data[x+1]=a.data[x+2]=200+u*55,a.data[x+3]=Math.min(255,g*255)}i.putImageData(a,0,0)},{srgb:!1}),n=vn(t,64,64,(i,r,o)=>{let a=i.createRadialGradient(r/2,o/2,0,r/2,o/2,r/2);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,255,255,0.6)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,r,o)},{srgb:!1});return{smoke:new xr(s,420,{texture:e,drag:1.1,gravity:.35,grow:2.6}),dust:new xr(s,200,{texture:e,drag:1.6,gravity:-.2,grow:2}),sparks:new xr(s,160,{texture:n,additive:!0,drag:.6,gravity:-9.8,grow:-.6}),flames:new xr(s,160,{texture:n,additive:!0,drag:3,gravity:.5,grow:-.4}),water:new xr(s,360,{texture:e,drag:.35,gravity:-9.8,grow:1.6})}}var ah=class{constructor(t,e=900){this.max=e,this.index=0;let n=new an(1,1);n.rotateX(-Math.PI/2),this.mat=new Zt({color:328965,transparent:!0,opacity:.55,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),this.mesh=new Ue(n,this.mat,e),this.mesh.instanceMatrix.setUsage(wi),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.renderOrder=1,this.mesh.userData.noAO=!0;let i=new ne().makeScale(0,0,0);for(let r=0;r<e;r++)this.mesh.setMatrixAt(r,i);this.last=new Map,t.add(this.mesh),this.m=new ne,this.q=new He,this.v=new P,this.s=new P,this.up=new P(0,1,0)}add(t,e,n,i,r,o=.26){let a=this.last.get(t);if(!r){this.last.delete(t);return}if(a){let c=e-a[0],h=i-a[2],l=Math.hypot(c,h);if(l<.35)return;l<4&&(this.q.setFromAxisAngle(this.up,Math.atan2(c,h)),this.m.compose(this.v.set((e+a[0])/2,n+.03,(i+a[2])/2),this.q,this.s.set(o,1,l+.05)),this.mesh.setMatrixAt(this.index,this.m),this.index=(this.index+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0)}this.last.set(t,[e,n,i])}};var Aa=Ne.damp,gf=["CHASE CAMERA","FAR CHASE CAMERA","HOOD CAMERA","CINEMATIC CAMERA"],lh=class{constructor(t){this.camera=t,this.mode=0,this.pos=new P,this.look=new P,this.desired=new P,this.target=new P,this.yaw=0,this.shake=0,this.cine=null,this.cineTimer=0,this.baseFov=55,this.rumble=0,this.clock=0}snap(t){this.yaw=t.heading,this.cine=null,this.compute(t,0),this.pos.copy(this.desired),this.look.copy(this.target),this.apply(0)}compute(t,e){let n=Math.min(Math.abs(t.speed)/55,1),i=Math.hypot(t.vx,t.vz)>4?Math.atan2(-t.vx,-t.vz):t.heading,r=t.heading+M0(i-t.heading)*.35;t.speed<-1&&(r=t.heading),this.yaw=e?this.yaw+M0(r-this.yaw)*(1-Math.exp(-4.5*e)):r;let o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=t.group.position;if(this.mode===2){let h=Math.sin(t.heading),l=Math.cos(t.heading);this.desired.set(c.x-h*.15,c.y+1.18,c.z-l*.15),this.target.set(c.x-h*30,c.y+.9,c.z-l*30)}else if(this.mode===3)this.cinematic(t,e);else{let h=this.mode===1,l=(h?11.5:7.4)+n*1.6,f=(h?4.6:2.45)+n*.25;this.desired.set(c.x+o*l,c.y+f,c.z+a*l),this.target.set(c.x-o*6,c.y+1.15,c.z-a*6)}}cinematic(t,e){let n=t.group.position;this.cineTimer-=e;let i=-Math.sin(t.heading),r=-Math.cos(t.heading);if(!this.cine||this.cine.distanceTo(n)>70||this.cineTimer<=0){let a=Math.random()<.5?-1:1,c=28+Math.abs(t.speed)*1.6;this.cine=new P(n.x+i*c+r*a*7,n.y+.7+Math.random()*2.5,n.z+r*c-i*a*7),this.cineTimer=7,this.pos.copy(this.cine)}this.desired.copy(this.cine),this.target.set(n.x,n.y+.8,n.z)}apply(t){let e=this.camera;if(e.position.copy(this.pos),this.shake>.001){let n=this.shake;e.position.x+=(Math.random()-.5)*n,e.position.y+=(Math.random()-.5)*n,e.position.z+=(Math.random()-.5)*n,this.shake=Aa(this.shake,0,6,t||.016)}if(this.rumble>5e-4){let n=this.clock,i=this.rumble;e.position.y+=(Math.sin(n*37)*.6+Math.sin(n*61.3)*.4)*i,e.position.x+=(Math.sin(n*29.1+1.3)*.5+Math.sin(n*53.7)*.3)*i*.6}e.lookAt(this.look)}update(t,e){this.compute(t,e),this.mode===2?(this.pos.copy(this.desired),this.look.copy(this.target)):this.mode===3?(this.pos.lerp(this.desired,1-Math.exp(-3*e)),this.look.lerp(this.target,1-Math.exp(-10*e))):(this.pos.x=Aa(this.pos.x,this.desired.x,9,e),this.pos.z=Aa(this.pos.z,this.desired.z,9,e),this.pos.y=Aa(this.pos.y,this.desired.y,6,e),this.look.lerp(this.target,1-Math.exp(-12*e)));let n=Math.min(Math.abs(t.speed)/60,1)*12,i=(this.mode===2?68:this.mode===3?40:this.baseFov)+(this.mode===3?0:n+(t.boosting?7:0));this.camera.fov=Aa(this.camera.fov,i,3,e),this.camera.updateProjectionMatrix(),this.clock+=e;let r=Ne.clamp((Math.abs(t.speed)-26)/40,0,1),o=t.surface==="road"?1:2.2;this.rumble=this.mode===3?0:(r*.02+(t.boosting?.014:0))*o*(this.mode===2?.6:1),t.boosting&&(this.shake=Math.max(this.shake,.02)),this.apply(e)}orbit(t,e){let n=t.group.position,i=2.25+Math.sin(e*.05)*.5;this.camera.position.set(n.x+Math.sin(i)*9.5,n.y+1.6+Math.sin(e*.11)*.25,n.z+Math.cos(i)*9.5),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.camera.lookAt(n.x-1.5,n.y+1.1,n.z-2)}};function M0(s){return Math.atan2(Math.sin(s),Math.cos(s))}var Si=[];for(let s=0;s<Le.length;s++)for(let t=0;t<Fe.length;t++)Si.push({x:Le[s],z:Fe[t],i:s,j:t});var Ra=(s,t)=>s>=0&&t>=0&&s<Le.length&&t<Fe.length?s*Fe.length+t:-1;function b0(s,t){let e=null;return Le.forEach((n,i)=>{let r=Math.min(Math.max(t,Fe[0]),Fe[Fe.length-1]),o=Math.hypot(s-n,t-r);if(!e||o<e.d){let a=Fe.findIndex(h=>h>=r);a<0&&(a=Fe.length-1);let c=Fe[a]===r?a:Math.max(0,a-1);e={d:o,x:n,z:r,ends:[Ra(i,c),Ra(i,a)]}}}),Fe.forEach((n,i)=>{let r=Math.min(Math.max(s,Le[0]),Le[Le.length-1]),o=Math.hypot(s-r,t-n);if(o<e.d){let a=Le.findIndex(h=>h>=r);a<0&&(a=Le.length-1);let c=Le[a]===r?a:Math.max(0,a-1);e={d:o,x:r,z:n,ends:[Ra(c,i),Ra(a,i)]}}}),e}function xf(s,t,e,n){let i=b0(s,t),r=b0(e,n),o=Si.length,a=o,c=o+1,h=m=>m===a?i:m===c?r:Si[m],l=m=>{if(m===a)return i.ends.map(_=>[_,Math.hypot(Si[_].x-i.x,Si[_].z-i.z)]);let p=[];if(m<o){let{i:_,j:M}=Si[m];for(let[v,E]of[[1,0],[-1,0],[0,1],[0,-1]]){let A=Ra(_+v,M+E);A>=0&&p.push([A,Math.hypot(Si[A].x-Si[m].x,Si[A].z-Si[m].z)])}r.ends.includes(m)&&p.push([c,Math.hypot(r.x-Si[m].x,r.z-Si[m].z)])}return p};if(i.ends[0]===r.ends[0]&&i.ends[1]===r.ends[1])return[[s,t],[i.x,i.z],[r.x,r.z],[e,n]];let d=new Float64Array(o+2).fill(1/0),u=new Int32Array(o+2).fill(-1),g=new Uint8Array(o+2);for(d[a]=0;;){let m=-1,p=1/0;for(let _=0;_<o+2;_++)!g[_]&&d[_]<p&&(m=_,p=d[_]);if(m<0||m===c)break;g[m]=1;for(let[_,M]of l(m)){let v=p+M;v<d[_]&&(d[_]=v,u[_]=m)}}let x=[];for(let m=c;m>=0;m=u[m]){let p=h(m);if(x.unshift([p.x,p.z]),m===a)break}return x.unshift([s,t]),x.push([e,n]),x}function w0(s){let t=0;for(let e=1;e<s.length;e++)t+=Math.hypot(s[e][0]-s[e-1][0],s[e][1]-s[e-1][1]);return t}var vf=s=>document.getElementById(s),Ie={x0:-760,x1:Ye+140,z0:De.minZ-90,z1:De.maxZ+90},ch=.6;function vM(s){let t=document.createElement("canvas");t.width=Math.round((Ie.x1-Ie.x0)*ch),t.height=Math.round((Ie.z1-Ie.z0)*ch);let e=t.getContext("2d");e.scale(ch,ch),e.translate(-Ie.x0,-Ie.z0);let n=Ie.x1-Ie.x0,i=Ie.z1-Ie.z0;e.fillStyle="#16343f",e.fillRect(Ie.x0,Ie.z0,n,i),e.fillStyle="#243229",e.fillRect(ei,Ie.z0,Ie.x1-ei,i),e.fillStyle="#1e2a2e",e.fillRect(ei,De.minZ,De.maxX-ei,De.maxZ-De.minZ),e.fillStyle="#6d6047",e.fillRect(ei,Ie.z0,Nn-ei,i),e.fillStyle="#2d4433",e.fillRect(Nn,Ie.z0,pn.to-Nn,i);for(let[r,o,a]of Wi())e.fillStyle="#29353a",e.fillRect(r-Ei/2,o-Ei/2,Ei,Ei),a.kind==="park"&&(e.fillStyle="#2f4a35",e.fillRect(r-55,o-55,110,110)),a.kind==="parking"&&(e.fillStyle="#323b40",e.fillRect(r-45,o-45,104,104));e.fillStyle="#3e4f56";for(let r of s)e.fillRect(r.x-r.w,r.z-r.d,r.w*2,r.d*2);e.fillStyle="#5b6b6e";for(let r of Le)e.fillRect(r-Me,Oe-Me,Me*2,je-Oe+Me*2);for(let r of Fe)e.fillRect(sn-Me,r-Me,Ye-sn+Me*2,Me*2);e.fillStyle="#7d6a52";for(let r of qn)e.fillRect(r.x1,r.z-r.halfWidth,r.rampStart-r.x1,r.halfWidth*2);return t}function yM(){let s={};for(let[n,i]of Wi()){let r=Ui(n,i),o=s[r]||(s[r]=[0,0,0]);o[0]+=n,o[1]+=i,o[2]++}let t={eastside:[-40,-420],foothills:[-60,380],seaview:[0,60],palm:[40,-40],marina:[60,0]},e=Object.entries(s).map(([n,[i,r,o]])=>[ls[n][0],i/o+(t[n]?.[0]||0),r/o+(t[n]?.[1]||0)]);return e.push([ls.ocean[0],-385,0]),e}var hh=class{constructor(t){this.canvas=vf("minimap"),this.ctx=this.canvas.getContext("2d"),this.mapImage=vM(t),this.expanded=!1,this.labels=yM(),this.view={zoom:1,x:(Ie.x0+Ie.x1)/2,z:(Ie.z0+Ie.z1)/2},this.raceKey="",this.route=null,this.routeKey="",this.routeAt=[0,0],this.raceRoute=null,this.els={};for(let e of["speed","gear","tach-fill","boost-fill","district","road-name","heading","race-time","checkpoint-distance","clock","rpm-readout"])this.els[e]=vf(e);this.last={}}set(t,e){this.last[t]!==e&&(this.last[t]=e,this.els[t]&&(this.els[t].textContent=e))}updateRoute(t,e){let n=null;if(e.mode==="race"&&e.checkpoint<e.route.length?n=e.route[e.checkpoint]:e.waypoint&&(n=e.waypoint),!n){this.route=null,this.routeKey="";return}let i=n.join(",")+(e.mode==="race"?":"+e.checkpoint:""),r=Math.hypot(t.x-this.routeAt[0],t.z-this.routeAt[1]);if(i!==this.routeKey||r>12){this.route=xf(t.x,t.z,n[0],n[1]),this.routeKey=i,this.routeAt=[t.x,t.z];let o=e.mode==="race"?`${e.raceId}:${e.checkpoint}`:"";if(o!==this.raceKey&&(this.raceKey=o,this.raceRoute=null,o)){this.raceRoute=[];for(let a=e.checkpoint;a<e.route.length-1;a++)this.raceRoute.push(xf(...e.route[a],...e.route[a+1]))}}}get routeDistance(){return this.route?w0(this.route):0}setWanted(t,e){let n=t+(e?"e":"");if(this.last.wanted===n)return;this.last.wanted=n;let i=vf("wanted");i.classList.toggle("hidden",t===0),i.classList.toggle("evading",e),i.querySelectorAll("i").forEach((r,o)=>r.classList.toggle("on",o<t))}update(t,e,n,i,r){let o=Math.round(t.kmh);this.set("speed",String(o).padStart(3,"0")),this.set("gear",t.gear<0?"R":o<1&&!t.throttle?"N":String(t.gear));let a=t.def?.redline??7400;this.els["tach-fill"].style.width=Math.min(100,t.rpm/a*100).toFixed(1)+"%",this.els["tach-fill"].classList.toggle("redline",t.rpm>a-800),this.els["boost-fill"].style.width=t.nitro.toFixed(1)+"%",this.els["boost-fill"].classList.toggle("active",t.boosting),this.set("rpm-readout",(t.rpm/1e3).toFixed(1));let[c]=zc(t.x,t.z);this.set("district",c),this.set("road-name",Ep(t.x,t.z));let h=["N","NW","W","SW","S","SE","E","NE"];this.set("heading",h[(Math.round(t.heading/(Math.PI/4))%8+8)%8]),this.set("clock",i.clockLabel),this.updateRoute(t,e),e.mode==="race"&&(this.set("race-time",Ca(e.raceTime)),e.route[e.checkpoint]&&this.set("checkpoint-distance",Math.round(this.routeDistance)+" M")),r&&this.setWanted(r.level,r.evading),this.drawMap(t,e,n,r)}mapScale(){return Math.min(this.canvas.width/(Ie.x1-Ie.x0),this.canvas.height/(Ie.z1-Ie.z0))*this.view.zoom}mapPoint(t,e){let n=this.canvas.getBoundingClientRect(),i=(t-n.left)/n.width*this.canvas.width,r=(e-n.top)/n.height*this.canvas.height,o=this.mapScale();return[(i-this.canvas.width/2)/o+this.view.x,(r-this.canvas.height/2)/o+this.view.z]}clampView(){let t=this.view;t.zoom=Math.min(Math.max(t.zoom,1),8);let e=(Ie.x1-Ie.x0)/2*(1-1/t.zoom),n=(Ie.z1-Ie.z0)/2*(1-1/t.zoom);t.x=Math.min(Math.max(t.x,(Ie.x0+Ie.x1)/2-e),(Ie.x0+Ie.x1)/2+e),t.z=Math.min(Math.max(t.z,(Ie.z0+Ie.z1)/2-n),(Ie.z0+Ie.z1)/2+n)}zoomAt(t,e,n){if(!this.expanded)return;let i=this.canvas.getBoundingClientRect(),[r,o]=this.mapPoint(e??i.left+i.width/2,n??i.top+i.height/2),a=this.view.zoom;this.view.zoom=Math.min(Math.max(a*t,1),8);let c=a/this.view.zoom;this.view.x=r+(this.view.x-r)*c,this.view.z=o+(this.view.z-o)*c,this.clampView()}panBy(t,e){if(!this.expanded)return;let n=this.canvas.getBoundingClientRect(),i=this.mapScale()*(n.width/this.canvas.width);this.view.x-=t/i,this.view.z-=e/i,this.clampView()}pick(t,e,n){if(!this.expanded)return;let[i,r]=this.mapPoint(t,e);n.waypoint&&Math.hypot(n.waypoint[0]-i,n.waypoint[1]-r)<40/this.view.zoom+12?n.waypoint=null:n.waypoint=[Math.min(Math.max(i,sn),Ye),Math.min(Math.max(r,Oe),je)],this.routeKey=""}polyline(t,e){t.beginPath(),e.forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke()}drawMap(t,e,n,i){let{canvas:r,ctx:o}=this;if(this.expanded){let u=r.getBoundingClientRect(),g=Math.min(devicePixelRatio||1,2),x=Math.round(u.width*g),m=Math.round(u.height*g);if(x>0&&m>0&&(r.width!==x||r.height!==m)&&(r.width=x,r.height=m),this.fitPending&&x>0){this.fitPending=!1;let p=Math.min(x/(Ie.x1-Ie.x0),m/(Ie.z1-Ie.z0));this.view.zoom=Math.min(Math.max(x/(De.maxX-Ie.x0-260)/p,1),8),this.clampView()}}let a=r.width,c=r.height;if(o.setTransform(1,0,0,1,0,0),o.fillStyle="#16343f",o.fillRect(0,0,a,c),o.save(),this.expanded){let u=this.mapScale();o.translate(a/2,c/2),o.scale(u,u),o.translate(-this.view.x,-this.view.z)}else o.translate(a/2,c*.62),o.scale(.85,.85),o.rotate(t.heading),o.translate(-t.x,-t.z);o.imageSmoothingQuality="high",o.drawImage(this.mapImage,Ie.x0,Ie.z0,Ie.x1-Ie.x0,Ie.z1-Ie.z0);let h=this.expanded?r.width/Math.max(r.getBoundingClientRect().width,1):1,l=this.expanded?.95*h/this.mapScale():1;if(this.expanded){o.fillStyle="#fff4dc88",o.font=`700 ${13*h/this.mapScale()}px "Barlow Condensed", Barlow, Arial`,o.textAlign="center",o.textBaseline="middle";for(let[u,g,x]of this.labels)u==="OCEAN DRIVE"?(o.save(),o.translate(g,x),o.rotate(-Math.PI/2),o.fillText(u,0,0),o.restore()):o.fillText(u,g,x)}if(o.lineJoin=o.lineCap="round",this.raceRoute){o.strokeStyle="#ffc68650",o.lineWidth=5*l;for(let u of this.raceRoute)this.polyline(o,u)}if(this.route){let u=e.mode==="race"?"#ffb46b":"#c690ff";o.strokeStyle="#0b141acc",o.lineWidth=11*l,this.polyline(o,this.route),o.strokeStyle=u,o.lineWidth=7*l,this.polyline(o,this.route)}o.fillStyle="#c9d3d6";for(let u of n.cars)u.police||o.fillRect(u.x-2.5*l,u.z-2.5*l,5*l,5*l);let f=Math.floor(performance.now()/180)%2;for(let u of n.police){let g=u.mode==="chase";g&&i&&(o.fillStyle=i.evading?"#3a6cff14":"#ff3a4a12",o.beginPath(),o.arc(u.x,u.z,i.sightRange(),0,Math.PI*2),o.fill()),o.fillStyle=g?f?"#ff4458":"#4a7dff":"#5f8dff",o.beginPath(),o.arc(u.x,u.z,(g?6:4)*l,0,Math.PI*2),o.fill()}if(e.mode==="race"&&e.checkpoint<e.route.length&&e.route.forEach(([u,g],x)=>{x<e.checkpoint||(o.beginPath(),o.arc(u,g,(x===e.checkpoint?11:6)*l,0,Math.PI*2),o.fillStyle=x===e.checkpoint?"#ffc686":"#ffc68677",o.fill(),this.expanded&&(o.fillStyle="#17212a",o.font=`700 ${9*l}px Barlow, Arial`,o.textAlign="center",o.textBaseline="middle",o.fillText(String(x+1),u,g+1)))}),e.waypoint&&e.mode!=="race"){let[u,g]=e.waypoint;o.fillStyle="#c690ff",o.beginPath(),o.arc(u,g-14*l,9*l,Math.PI,0),o.lineTo(u,g),o.closePath(),o.fill(),o.fillStyle="#ffffff",o.beginPath(),o.arc(u,g-14*l,3.5*l,0,Math.PI*2),o.fill()}o.translate(t.x,t.z),o.rotate(-t.heading);let d=this.expanded?1.7*l:1;if(o.shadowColor="#000",o.shadowBlur=8,o.fillStyle="#ff8a52",o.beginPath(),o.moveTo(0,-13*d),o.lineTo(8*d,9*d),o.lineTo(0,4*d),o.lineTo(-8*d,9*d),o.closePath(),o.fill(),o.restore(),this.expanded){let u=r.width/Math.max(r.getBoundingClientRect().width,1);o.fillStyle="#0b161ccc",o.fillRect(0,0,a,40*u),o.fillRect(0,c-36*u,250*u,36*u),o.fillStyle="#fff4dccc",o.font=`600 ${13*u}px Barlow, Arial`,o.textAlign="left",o.textBaseline="top",o.fillText(e.mode==="race"?`${e.raceName} \xB7 FOLLOW THE ORANGE LINE`:"CLICK TO SET A WAYPOINT \xB7 SCROLL OR PINCH TO ZOOM \xB7 DRAG TO MOVE",16*u,13*u),o.fillStyle="#5f8dff",o.fillRect(16*u,c-24*u,10*u,10*u),o.fillStyle="#c9d3d6",o.fillRect(110*u,c-24*u,10*u,10*u),o.fillStyle="#fff4dccc",o.fillText("POLICE",32*u,c-26*u),o.fillText("TRAFFIC",126*u,c-26*u)}if(!this.expanded){let u=t.heading,g=a/2+Math.sin(-u)*-(c*.42),x=c*.62-Math.cos(u)*(c*.42);o.fillStyle="#fff4dc",o.font="600 22px Barlow, Arial",o.textAlign="center",o.textBaseline="middle",o.fillText("N",Math.min(a-16,Math.max(16,g)),Math.min(c-16,Math.max(16,x)))}}setExpanded(t,e=null){this.expanded=t,this.view.zoom=1,this.fitPending=t,e&&(this.view.x=e.x,this.view.z=e.z),this.clampView(),this.canvas.width=t?1100:480,this.canvas.height=t?1100:360}};function Ca(s){let t=Math.floor(s/60),e=Math.floor(s%60),n=Math.floor(s*100%100);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`}var yf={v8:{pulses:4,lump:.32,tone:1,intake:.5,sub:.6,rasp:.35,redline:7400},bigblock:{pulses:4,lump:.55,tone:.72,intake:.35,sub:.9,rasp:.5,redline:6400},v10:{pulses:5,lump:.14,tone:1.45,intake:.85,sub:.35,rasp:.25,redline:8800}},Xi=[{id:"wave",name:"PACIFIC WAVE 101.4",genre:"Synthwave",bpm:100,swing:0,chords:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]},{id:"tide",name:"LOW TIDE 94.7",genre:"Lo-fi beats",bpm:82,swing:.16,chords:[[50,53,57,60,64],[55,59,62,65,69],[48,52,55,59,62],[57,61,64,67,70]]},{id:"funk",name:"KZRO 88.1 COAST FUNK",genre:"Funk",bpm:112,swing:.08,chords:[[52,55,59,62],[52,55,59,62],[57,61,64,67],[55,59,62,65]]}],ds=s=>440*Math.pow(2,(s-69)/12),uh=class{constructor(){this.ctx=null,this.enabled=!1,this.engineDef=yf.v8,this.station=-1,this.wasBoosting=!1,this.scrapeLevel=0,this.nextAmbient={horn:6,bird:2,gull:4,cricket:1,siren:30},this.sirenLevel=0}unlock(){this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.start()}start(){if(this.ctx){this.ctx.resume();return}let t;try{t=new(window.AudioContext||window.webkitAudioContext)}catch{return}this.ctx=t;let e=this.master=t.createGain();e.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,e.connect(n).connect(t.destination);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=t.createBuffer(1,i,t.sampleRate),a=r.getChannelData(0),c=o.getChannelData(0),h=0;for(let u=0;u<i;u++)a[u]=Math.random()*2-1,h=(h+.02*a[u])/1.02,c[u]=h*3.5;this.noiseBuffer=r;let l=(u=r)=>{let g=t.createBufferSource();return g.buffer=u,g.loop=!0,g.start(0,Math.random()*1.5),g};this.reverb=t.createConvolver();let f=Math.floor(t.sampleRate*1.8),d=t.createBuffer(2,f,t.sampleRate);for(let u=0;u<2;u++){let g=d.getChannelData(u);for(let x=0;x<f;x++)g[x]=(Math.random()*2-1)*Math.pow(1-x/f,3.2)}this.reverb.buffer=d,this.reverbOut=t.createGain(),this.reverbOut.gain.value=.32,this.reverb.connect(this.reverbOut).connect(e),this.buildEngine(l),this.buildTires(l),this.buildWorld(l,o),this.buildRadio()}buildEngine(t){let e=this.ctx;this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.Q.value=2.2,this.engineDrive=e.createWaveShaper();let n=new Float32Array(1024);for(let c=0;c<1024;c++)n[c]=Math.tanh((c/1023*2-1)*2.6);this.engineDrive.curve=n;let i=new Float32Array(24),r=new Float32Array(24);for(let c=1;c<24;c++)r[c]=1/c*(c%2?1:.6)*Math.exp(-c*.08);let o=e.createPeriodicWave(i,r);this.oscs=[],this.subGain=e.createGain();for(let[c,h,l]of[[1,.55,"wave"],[1.006,.3,"sawtooth"],[.5,1,"sine"]]){let f=e.createOscillator();l==="wave"?f.setPeriodicWave(o):f.type=l;let d=e.createGain();d.gain.value=h,f.connect(d).connect(c===.5?this.subGain:this.engineDrive),f.start(),this.oscs.push([f,c])}this.subGain.connect(this.engineDrive);let a=e.createGain();this.lumpOsc=e.createOscillator(),this.lumpOsc.type="triangle",this.lumpDepth=e.createGain(),this.lumpOsc.connect(this.lumpDepth).connect(a.gain),this.lumpOsc.start(),this.engineDrive.connect(a).connect(this.engineFilter).connect(this.engineGain).connect(this.master),this.raspFilter=e.createBiquadFilter(),this.raspFilter.type="bandpass",this.raspFilter.Q.value=1.4,this.raspGain=e.createGain(),this.raspGain.gain.value=0,t().connect(this.raspFilter).connect(this.raspGain).connect(a),this.intake=e.createOscillator(),this.intake.type="square",this.intakeFilter=e.createBiquadFilter(),this.intakeFilter.type="bandpass",this.intakeFilter.Q.value=3,this.intakeGain=e.createGain(),this.intakeGain.gain.value=0,this.intake.connect(this.intakeFilter).connect(this.intakeGain).connect(this.engineGain),this.intake.start(),this.whine=e.createOscillator(),this.whine.type="sine",this.whineGain=e.createGain(),this.whineGain.gain.value=0,this.whine.connect(this.whineGain).connect(this.master),this.whine.start(),this.turbo=e.createOscillator(),this.turbo.type="sine",this.turboGain=e.createGain(),this.turboGain.gain.value=0,this.turbo.connect(this.turboGain).connect(this.master),this.turbo.start(),this.applyEngine()}setEngine(t){this.engineDef=yf[t]||yf.v8,this.applyEngine()}applyEngine(){if(!this.ctx)return;let t=this.engineDef,e=this.ctx.currentTime;this.lumpDepth.gain.setTargetAtTime(t.lump,e,.05),this.subGain.gain.setTargetAtTime(t.sub,e,.05)}buildTires(t){let e=this.ctx;this.screechFilter=e.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.value=1350,this.screechFilter.Q.value=5,this.screechGain=e.createGain(),this.screechGain.gain.value=0,t().connect(this.screechFilter).connect(this.screechGain).connect(this.master),this.squeal=e.createOscillator(),this.squeal.type="sawtooth";let n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=1100,n.Q.value=8,this.squealGain=e.createGain(),this.squealGain.gain.value=0;let i=e.createOscillator();i.frequency.value=9;let r=e.createGain();r.gain.value=22,i.connect(r).connect(this.squeal.frequency),i.start(),this.squeal.connect(n).connect(this.squealGain).connect(this.master),this.squeal.start(),this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windGain=e.createGain(),this.windGain.gain.value=0,t().connect(this.windFilter).connect(this.windGain).connect(this.master);let o=e.createBiquadFilter();o.type="highpass",o.frequency.value=2200,this.nitroGain=e.createGain(),this.nitroGain.gain.value=0,t().connect(o).connect(this.nitroGain).connect(this.master);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=220,this.roarGain=e.createGain(),this.roarGain.gain.value=0,t().connect(a).connect(this.roarGain).connect(this.master),this.scrapeFilter=e.createBiquadFilter(),this.scrapeFilter.type="bandpass",this.scrapeFilter.frequency.value=2400,this.scrapeFilter.Q.value=2.5,this.scrapeGain=e.createGain(),this.scrapeGain.gain.value=0,t().connect(this.scrapeFilter).connect(this.scrapeGain).connect(this.master)}buildWorld(t,e){let n=this.ctx,i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=520,this.surfGain=n.createGain(),this.surfGain.gain.value=0,t().connect(i).connect(this.surfGain).connect(this.master);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=380,this.humGain=n.createGain(),this.humGain.gain.value=0,t(e).connect(r).connect(this.humGain).connect(this.master),this.siren=n.createOscillator(),this.siren.type="sawtooth",this.siren.frequency.value=900;let o=n.createOscillator();o.frequency.value=.32;let a=n.createGain();a.gain.value=380,o.connect(a).connect(this.siren.frequency),o.start();let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=1100,c.Q.value=1.2,this.sirenGain=n.createGain(),this.sirenGain.gain.value=0,this.siren.connect(c).connect(this.sirenGain).connect(this.master),this.siren.start(),this.ambientBus=n.createGain(),this.ambientBus.gain.value=0,this.ambientBus.connect(this.master),this.ambientBus.connect(this.reverb)}setEnabled(t){this.enabled=t,t&&this.start(),this.ctx&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.1)}update(t){if(!this.ctx)return;let e=this.ctx.currentTime,{rpm:n,throttle:i,speed:r,slip:o,boosting:a,active:c,shoreDistance:h,time:l,gear:f=1,ratio:d=3,city:u=.5,night:g=0,nearTrees:x=0}=t,m=c?1:0,p=this.engineDef,_=n/60*p.pulses;for(let[S,w]of this.oscs)S.frequency.setTargetAtTime(_*w*.5,e,.025);this.lumpOsc.frequency.setTargetAtTime(n/120,e,.05);let M=n/p.redline,v=i*(.75+Math.min(Math.max(f,1),6)*.05);this.engineFilter.frequency.setTargetAtTime((220+n*.14+v*n*.3)*p.tone,e,.04),this.engineGain.gain.setTargetAtTime(m*(.065+v*.085+M*.05),e,.04),this.raspFilter.frequency.setTargetAtTime(_*3,e,.05),this.raspGain.gain.setTargetAtTime(m*p.rasp*(.15+i*.6)*.5,e,.05),this.intake.frequency.setTargetAtTime(_*2,e,.03),this.intakeFilter.frequency.setTargetAtTime(900+n*.35,e,.05),this.intakeGain.gain.setTargetAtTime(m*p.intake*i*M*M*.035,e,.05);let E=Math.abs(r);this.whine.frequency.setTargetAtTime(Math.max(40,E*d*14),e,.05),this.whineGain.gain.setTargetAtTime(m*(f>0&&f<=2?1:.25)*Math.min(E/20,1)*.006,e,.1),this.turbo.frequency.setTargetAtTime(1400+n*.55,e,.1),this.turboGain.gain.setTargetAtTime(m*i*M*M*.01,e,.1);let A=m*Math.min(Math.max(o-3,0)/10,1);this.screechGain.gain.setTargetAtTime(A*.075,e,.06),this.screechFilter.frequency.setTargetAtTime(1100+Math.min(o,20)*25,e,.1),this.squeal.frequency.setTargetAtTime(820+Math.min(o,20)*18,e,.08),this.squealGain.gain.setTargetAtTime(A*A*.05,e,.05),this.windGain.gain.setTargetAtTime(m*Math.min((E/60)**2,1)*.1,e,.2),this.windFilter.frequency.setTargetAtTime(400+E*18,e,.2),a&&!this.wasBoosting&&m&&this.whoosh(),this.wasBoosting=a,this.nitroGain.gain.setTargetAtTime(m*(a?.045:0),e,.06),this.roarGain.gain.setTargetAtTime(m*(a?.12:0),e,.1),this.scrapeGain.gain.setTargetAtTime(m*this.scrapeLevel*.09,e,.04),this.scrapeLevel*=.6;let L=Math.max(0,1-h/140),I=.55+.45*Math.sin(l*.7)*Math.sin(l*.23+1);this.surfGain.gain.setTargetAtTime(L*I*.11,e,.3),this.humGain.gain.setTargetAtTime(m*(.025+u*.05)*(1-g*.55),e,.6),this.ambientBus.gain.setTargetAtTime(m,e,.4),this.sirenGain.gain.setTargetAtTime(m*this.sirenLevel*.05,e,.15),m&&this.ambient(l,{city:u,night:g,surfNear:L,nearTrees:x}),this.radioActive=c,this.radioTick(c)}ambient(t,{city:e,night:n,surfNear:i,nearTrees:r}){let o=this.nextAmbient;t>o.horn&&(o.horn=t+7+Math.random()*16/(.4+e),this.horn(60+Math.random()*140,!0)),n<.5&&t>o.bird&&(o.bird=t+2+Math.random()*6,(r>.2||Math.random()<.3)&&this.chirp()),n<.5&&i>.3&&t>o.gull&&(o.gull=t+5+Math.random()*9,this.gull()),n>.5&&t>o.cricket&&(o.cricket=t+.7+Math.random()*1.6,this.cricket(e)),t>o.siren&&(o.siren=t+40+Math.random()*60,e>.4&&this.distantSiren())}burst(t,e,n,i,r=1,o=this.master,a=0){if(!this.ctx||!this.enabled)return;let c=this.ctx,h=c.currentTime+a,l=c.createBufferSource();l.buffer=this.noiseBuffer;let f=c.createBiquadFilter();f.type=e,f.frequency.value=n,f.Q.value=r;let d=c.createGain();d.gain.setValueAtTime(i,h),d.gain.exponentialRampToValueAtTime(1e-4,h+t),l.connect(f).connect(d).connect(o),l.start(h,Math.random()),l.stop(h+t+.05)}tone(t,e,n,i,{dest:r=this.master,when:o=0,attack:a=.005,slideTo:c=0,q:h=0,filter:l=0}={}){if(!this.ctx||!this.enabled)return;let f=this.ctx,d=f.currentTime+o,u=f.createOscillator();u.type=t,u.frequency.setValueAtTime(e,d),c&&u.frequency.exponentialRampToValueAtTime(c,d+n);let g=f.createGain();g.gain.setValueAtTime(1e-4,d),g.gain.linearRampToValueAtTime(i,d+a),g.gain.exponentialRampToValueAtTime(1e-4,d+n);let x=u;if(l){let m=f.createBiquadFilter();m.type="bandpass",m.frequency.value=l,m.Q.value=h||2,x=u.connect(m)}x.connect(g).connect(r),u.start(d),u.stop(d+n+.05)}impact(t){if(!this.ctx||!this.enabled)return;let e=this.ctx.currentTime;if(e-(this.lastImpact||0)<.07)return;this.lastImpact=e;let n=Math.min(t/20,1);this.burst(.35+n*.3,"lowpass",300+n*900,.25+n*.6),this.tone("sine",70+n*30,.25,.25*n+.08,{slideTo:40});for(let i of[1,2.76,5.4])this.tone("triangle",420*i*(.9+Math.random()*.2),.18+n*.4,.04*n/i+.01,{filter:420*i,q:12});if(n>.4)for(let i=0;i<6;i++)this.tone("sine",3e3+Math.random()*4e3,.08+Math.random()*.1,.02*n,{when:.02+Math.random()*.2})}scrape(t){this.scrapeLevel=Math.max(this.scrapeLevel,Math.min(t/25,1)),this.ctx&&this.scrapeFilter.frequency.setTargetAtTime(1800+Math.random()*1600,this.ctx.currentTime,.02)}whoosh(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuffer;let i=t.createBiquadFilter();i.type="bandpass",i.Q.value=1.6,i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(3800,e+.45);let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.32,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+.9),n.connect(i).connect(r).connect(this.master),n.start(e,Math.random()),n.stop(e+1)}backfire(){!this.ctx||!this.enabled||(this.burst(.09,"lowpass",900,.35),this.tone("square",60,.08,.08))}shift(t){t&&this.burst(.18,"highpass",1800,.07)}horn(t,e=!1){if(!this.ctx||!this.enabled)return;let n=this.ctx,i=n.currentTime,r=Math.min(.12,6/Math.max(t,6)*.12)*(e?.6:1),o=e?.3+Math.random()*.5:.45,a=n.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(r,i+.02),a.gain.setValueAtTime(r,i+o),a.gain.linearRampToValueAtTime(0,i+o+.1);let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=e?900:1800;let h=e?300+Math.random()*120:349;for(let l of[h,h*1.26]){let f=n.createOscillator();f.type="square",f.frequency.value=l,f.connect(c),f.start(i),f.stop(i+o+.15)}c.connect(a).connect(e?this.ambientBus:this.master)}chirp(){let t=2600+Math.random()*2200,e=2+Math.floor(Math.random()*4);for(let n=0;n<e;n++)this.tone("sine",t*(1+Math.random()*.1),.07,.012,{dest:this.ambientBus,when:n*.11,slideTo:t*1.35})}gull(){for(let t=0;t<2+Math.floor(Math.random()*2);t++)this.tone("sawtooth",1500,.32,.01,{dest:this.ambientBus,when:t*.38,slideTo:900,filter:1400,q:3})}cricket(t){let e=4300+Math.random()*500,n=.006*(1.2-t*.8);for(let i=0;i<3;i++)this.tone("sine",e,.035,n,{dest:this.ambientBus,when:i*.06})}distantSiren(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle";let i=t.createOscillator();i.frequency.value=.35;let r=t.createGain();r.gain.value=220,n.frequency.value=780,i.connect(r).connect(n.frequency);let o=t.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.012,e+2),o.gain.linearRampToValueAtTime(0,e+8),n.connect(o).connect(this.ambientBus),n.start(e),i.start(e),n.stop(e+8.2),i.stop(e+8.2)}setSiren(t){this.sirenLevel=t}chime(t=!1){if(!this.ctx||!this.enabled)return;let e=this.ctx,n=e.currentTime;(t?[523.25,659.25,783.99,1046.5]:[659.25,987.77]).forEach((r,o)=>{let a=e.createOscillator();a.type="triangle",a.frequency.value=r;let c=e.createGain(),h=n+o*.09;c.gain.setValueAtTime(0,h),c.gain.linearRampToValueAtTime(.12,h+.01),c.gain.exponentialRampToValueAtTime(1e-4,h+.6),a.connect(c).connect(this.master),a.start(h),a.stop(h+.65)})}countBeep(t=!1){this.tone("square",t?880:440,t?.5:.18,.06,{filter:t?1800:900,q:1})}buildRadio(){let t=this.ctx;this.radioGain=t.createGain(),this.radioGain.gain.value=0;let e=t.createBiquadFilter();e.type="highpass",e.frequency.value=55;let n=t.createBiquadFilter();n.type="highshelf",n.frequency.value=7e3,n.gain.value=-5,this.radioIn=t.createGain(),this.radioIn.connect(e).connect(n).connect(this.radioGain).connect(this.master),this.radioSend=t.createGain(),this.radioSend.gain.value=.5,this.radioSend.connect(this.reverb),this.radioStep=0,this.radioNext=0,this.radioActive=!1,setInterval(()=>this.radioTick(this.radioActive),40)}get stationName(){return this.station<0?"RADIO OFF":Xi[this.station].name}setStation(t){this.station=t,this.ctx&&(this.radioStep=0,this.radioNext=this.ctx.currentTime+.25,this.burst(.28,"bandpass",2200,.08,.7))}nextStation(){return this.setStation(this.station+1>=Xi.length?-1:this.station+1),this.stationName}radioTick(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=t&&this.station>=0&&this.enabled;if(this.radioGain.gain.setTargetAtTime(n?.75:0,e,.15),!n){this.radioNext=0;return}let i=Xi[this.station],r=60/i.bpm/4;for(this.radioNext<e&&(this.radioNext=e+.05);this.radioNext<e+.3;){let o=this.radioStep,a=o%2?i.swing*r:0;this.playStep(i,o,this.radioNext+a,r),this.radioNext+=r,this.radioStep++}}playStep(t,e,n,i){let r=Math.max(0,n-this.ctx.currentTime),o=Math.floor(e/16),a=e%16,c=t.chords[o%t.chords.length],h=c[0],l=u=>{let g=Math.sin((e+u*31.7)*12.9898+this.station*7.1)*43758.5453;return g-Math.floor(g)},f=this.radioIn,d=this.radioSend;if(t.id==="wave"){a%4===0&&this.kick(r,.5),(a===4||a===12)&&this.snare(r,.28,!0),a%2===0&&this.hat(r,.05,!1),a%2===0&&this.synth("sawtooth",ds(h-24),i*1.8,.11,r,{cutoff:700,env:900});let u=[0,1,2,1,0,2,1,2];if(this.synth("square",ds(c[u[a%8]]+12),i*.9,.03,r,{cutoff:2400,env:1200,send:.6}),a===0)for(let g of c)this.synth("sawtooth",ds(g),i*15,.022,r,{cutoff:1300,attack:.4,detune:9,send:1});if(o%4>=2&&[0,3,6,10,12].includes(a)){let g=[0,3,5,7,10,12];this.synth("sawtooth",ds(h+12+g[Math.floor(l(1)*g.length)]),i*2.6,.035,r,{cutoff:3e3,env:0,send:.8,detune:6})}}else if(t.id==="tide"){if((a===0||a===7||a===10)&&this.kick(r,.42),(a===4||a===12)&&this.snare(r,.16,!1),a%2===0&&this.hat(r,.025+l(2)*.015,!1),a===0||a===6)for(let u of c)this.synth("sine",ds(u),i*7,.03,r+l(3)*.02,{cutoff:1800,attack:.01,trem:!0,send:.7});(a===0||a===10)&&this.synth("sine",ds(h-12),i*5,.16,r,{cutoff:400}),l(4)<.35&&this.burst(.01,"highpass",3e3,.02+l(5)*.03,1,f,r),a===0&&this.burst(i*16,"bandpass",1200,.004,.4,f,r)}else{(a===0||a===6||a===8||a===11)&&this.kick(r,.45),(a===4||a===12)&&this.snare(r,.24,!1),this.hat(r,a%4===2?.06:.03,a%4===2);let g=[0,null,12,0,null,0,10,null,0,null,12,7,null,0,10,12][a];if(g!==null&&this.synth("square",ds(h-24+g),i*.8,.09,r,{cutoff:500,env:1400}),[2,7,10,14].includes(a))for(let x of c.slice(1))this.synth("square",ds(x+12),i*.5,.018,r,{cutoff:2600,env:2e3,q:6});if(o%8===7&&(a===0||a===3))for(let x of c)this.synth("sawtooth",ds(x+12),i*2,.025,r,{cutoff:2200,send:.6,detune:12})}}synth(t,e,n,i,r,{cutoff:o=2e3,env:a=0,attack:c=.005,detune:h=0,send:l=0,trem:f=!1,q:d=1}={}){let u=this.ctx,g=u.currentTime+r,x=u.createBiquadFilter();x.type="lowpass",x.Q.value=d,x.frequency.setValueAtTime(o+a,g),a&&x.frequency.exponentialRampToValueAtTime(Math.max(o,60),g+Math.min(n,.3));let m=u.createGain();m.gain.setValueAtTime(1e-4,g),m.gain.linearRampToValueAtTime(i,g+c),m.gain.setValueAtTime(i,g+Math.max(c,n*.6)),m.gain.exponentialRampToValueAtTime(1e-4,g+n+.08);for(let _ of h?[-h,h]:[0]){let M=u.createOscillator();M.type=t,M.frequency.value=e,M.detune.value=_,M.connect(x),M.start(g),M.stop(g+n+.12)}let p=x.connect(m);if(f){let _=u.createGain(),M=u.createOscillator();M.frequency.value=4.5;let v=u.createGain();v.gain.value=.25,M.connect(v).connect(_.gain),M.start(g),M.stop(g+n+.12),p=p.connect(_)}if(p.connect(this.radioIn),l){let _=u.createGain();_.gain.value=l,p.connect(_).connect(this.radioSend)}}kick(t,e){let n=this.ctx,i=n.currentTime+t,r=n.createOscillator();r.frequency.setValueAtTime(140,i),r.frequency.exponentialRampToValueAtTime(42,i+.12);let o=n.createGain();o.gain.setValueAtTime(e,i),o.gain.exponentialRampToValueAtTime(1e-4,i+.38),r.connect(o).connect(this.radioIn),r.start(i),r.stop(i+.4)}snare(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=1400;let c=i.createGain(),h=n?.32:.16;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c),c.connect(this.radioIn),n&&c.connect(this.radioSend),o.start(r,Math.random()),o.stop(r+h+.05);let l=i.createOscillator();l.type="triangle",l.frequency.setValueAtTime(220,r),l.frequency.exponentialRampToValueAtTime(150,r+.08);let f=i.createGain();f.gain.setValueAtTime(e*.6,r),f.gain.exponentialRampToValueAtTime(1e-4,r+.1),l.connect(f).connect(this.radioIn),l.start(r),l.stop(r+.12)}hat(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=7500;let c=i.createGain(),h=n?.22:.045;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c).connect(this.radioIn),o.start(r,Math.random()),o.stop(r+h+.05)}};var fh=class{constructor(){this.keys=new Set,this.state={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},this.padButtons=new Set,this.onPadPress=null}clear(){this.keys.clear()}poll(){let t=this.keys,e=t.has("KeyW")||t.has("ArrowUp")?1:0,n=t.has("KeyS")||t.has("ArrowDown")?1:0,i=(t.has("KeyA")||t.has("ArrowLeft")?1:0)-(t.has("KeyD")||t.has("ArrowRight")?1:0),r=t.has("Space"),o=t.has("ShiftLeft")||t.has("ShiftRight"),a=navigator.getGamepads?navigator.getGamepads():[];for(let c of a){if(!c||!c.connected)continue;let h=c.axes[0]||0;Math.abs(h)>.12&&(i=-Math.sign(h)*((Math.abs(h)-.12)/.88)**1.4);let l=c.buttons[7]?.value||0,f=c.buttons[6]?.value||0;e=Math.max(e,l),n=Math.max(n,f),r=r||!!c.buttons[0]?.pressed,o=o||!!c.buttons[1]?.pressed||!!c.buttons[2]?.pressed;for(let[d,u]of[[3,"camera"],[9,"pause"],[8,"map"],[5,"reset"]]){let g=!!c.buttons[d]?.pressed,x=c.index+":"+d;g&&!this.padButtons.has(x)&&this.onPadPress?.(u),g?this.padButtons.add(x):this.padButtons.delete(x)}}return Object.assign(this.state,{throttle:e,brake:n,steer:i,handbrake:r,nitro:o}),this.state}};var Lt=s=>document.getElementById(s),Pa=matchMedia("(pointer:coarse)").matches,_M=Pa&&Math.min(screen.width,screen.height)<600,un={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{localStorage.setItem(s,t)}catch{}}};function E0(s){Lt("loading").classList.add("hidden"),Lt("error").classList.remove("hidden"),console.error(s)}async function MM(){let s;try{if(s=new Ic(Lt("world")),!s.renderer.capabilities.isWebGL2)throw new Error("WebGL 2 unavailable")}catch(R){E0(R);return}let t=s.renderer,e=new Ys,n=new Bn(55,innerWidth/innerHeight,.2,5600);n.layers.enable(1),s.init(e,n);let i=R=>(Lt("loading-step").textContent=R,new Promise(xt=>setTimeout(xt,0)));await i("Painting the sky\u2026");let r=new kc(t,e);await i("Paving the boulevards\u2026"),Np(e,t),await i("Raising the skyline\u2026");let o=Yp(e,t);await i("Rolling in the surf\u2026");let a=Zp(e,t);await i("Planting palms\u2026");let c=jp(e,t),h=new Qc,l=Qp(e,t,a.pier.lamps,h),f=h0(e,t,h,l.lamps,c.trunkColliders);await i("Fueling up\u2026");let d=un.get("pacific-car");dr[d]||(d="coupe");let u=new $c(e,t,d),g=new Oc(t,e),x=new Xc(t,e);{let R=co(t);R.glassClear.userData.envBoost=1.25,R.chrome.userData.envBoost=1.2,x.attach([u.paint,R.glassClear,R.chrome,R.rim])}let m=new sh(e,t),p=new oh(e),_=_0(e,t),M=new ah(e),v=new fn,E=ya(16761466,.9),A=new Ce(1.1,1.1,40,20,1,!0);A.translate(0,20,0);let L=[-1,1].map(R=>{let xt=new $t(A,E);return xt.userData.noAO=!0,xt.layers.set(1),v.add(xt),{mesh:xt,side:R}}),I=new En({color:new kt(3,1.8,.8),transparent:!0,opacity:.8,depthWrite:!1,blending:ai}),S=new $t(new Jo(Fc-.6,Fc,72),I);S.rotation.x=-Math.PI/2,S.position.y=.06,S.userData.noAO=!0,v.add(S);let w=new $t(new Mi(1.6,2.6,3),new En({color:new kt(4,2.4,1.1)}));w.rotation.z=Math.PI,w.userData.noAO=!0,v.add(w),v.visible=!1,e.add(v);let N=[...o.colliders,...f.solids],H=[...c.trunkColliders,...l.circles,...f.circles,...o.posts],B={colliders:o.colliders,boxes:N,circles:H,boxGrid:new fr(80).addAll(N),buildingGrid:new fr(80).addAll(o.colliders.map(R=>({...R}))),circleGrid:new gi(24).addAll(H),pileGrid:new gi(24).addAll(qn.flatMap(R=>R.piles||[])),piles:qn.flatMap(R=>R.piles||[])};m.world=B,Ip(e);let O=new nh(m,B.buildingGrid),k=new lh(n),G=new hh(o.colliders),rt=new uh,et=new fh,z={state:"intro",paused:!1,mode:"free",raceTime:0,checkpoint:0,countdown:0,raceId:"sunset",route:Yn.sunset.route,raceName:Yn.sunset.name,splits:[],topSpeed:0,crashes:0,waypoint:null,lastX:On.x,lastZ:On.z,time:0,frame:0,flash:0},Tt=un.get("pacific-quality")||(_M?"low":Pa?"medium":"high");["ultra","high","medium","low"].includes(Tt)||(Tt="high");let Rt=un.get("pacific-time")||"cycle",Wt=un.get("pacific-road")||"auto";!(Rt in Hc)&&Rt!=="cycle"&&(Rt="golden");function Kt(R){Tt=R,un.set("pacific-quality",R),s.setQuality(R);let xt=s.quality;r.setShadowQuality(xt.shadow,xt.shadowRange),a.setReflections(xt.reflections>0,xt.reflections),x.setSize(xt.carProbe),g.setSize(xt.farShadow),r.setSkyQuality(xt.sky[0],xt.sky[1],R!=="low"),r.realLamps=xt.lamps,l.setRealLamps(xt.lamps),o.setDetail(xt.facade),Lt("quality").value=R}let Nt={time:0,frames:0,told:!1};s.onResize=()=>{a.resize(s.quality.reflections);let R=Lt("res-note");R&&(R.textContent=`RENDERING ${s.size.x} \xD7 ${s.size.y}`)};let ee=!1;function pt(R){Rt=R,un.set("pacific-time",R),r.cycle=R==="cycle",R!=="cycle"?r.setHours(Hc[R]):ee||r.setHours(18.95),ee=ee||R==="cycle",r.envDirty=!0,Lt("time-select").value=R}u.reset(On.x,On.z,On.heading);let wt=un.get("pacific-color");wt&&Vt(wt),Kt(Tt),pt(Rt);let Dt;function Ht(R){let xt=Lt("toast");xt.textContent=R,xt.classList.add("show"),clearTimeout(Dt),Dt=setTimeout(()=>xt.classList.remove("show"),2400)}function Vt(R){u.setColor(R),un.set("pacific-color",R),document.querySelectorAll(".swatch").forEach(xt=>{let qt=xt.dataset.color===R;xt.classList.toggle("active",qt),xt.setAttribute("aria-pressed",String(qt))})}function dt(R,xt=!1){if(!dr[R])return;d=R,un.set("pacific-car",R);let qt=dr[R];if(u.key!==R){let{x:le,z:Yt,heading:se}=u;u.setModel(R),u.reset(le,Yt,se),k.snap?.(u)}Lt("car-name").textContent=qt.name,Lt("car-blurb").textContent=qt.blurb,Lt("car-spec").textContent=qt.spec,Lt("hud-car").textContent=qt.name,Lt("car-menu").value=R;for(let le of["speed","accel","grip"])Lt(`stat-${le}`).style.width=`${Math.round(qt.stats[le]*100)}%`;rt.setEngine?.(qt.engine),xt&&Ht(qt.name)}let Ot=R=>dt(ba[(ba.indexOf(d)+R+ba.length)%ba.length]),D=[],ct=0;function ht({item:R,x:xt,z:qt,speed:le,nx:Yt,nz:se}){z.time-ct>.08&&(rt.impact(Math.min(2+le*.35,R.type==="lamp"?9:6)),ct=z.time),k.shake=Math.max(k.shake,R.type==="lamp"?.22:.08);let ve=R.sparks?14:4;for(let Ve=0;Ve<ve;Ve++)R.sparks?_.sparks.emit(xt,fe+.4+bt()*.5,qt,Yt*3+(bt()-.5)*6,1+bt()*4,se*3+(bt()-.5)*6,.1+bt()*.08,.3+bt()*.4,1,6,3.2,1):_.dust.emit(xt,fe+.3,qt,(bt()-.5)*3,bt()*2,(bt()-.5)*3,.5,.9,.35,.55,.5,.42);R.type==="hydrant"&&D.push({x:xt,z:qt,t:16}),(R.type==="lamp"||R.type==="hydrant")&&X("vandalism",xt,qt,1)}function lt(){if(z.checkpoint>=z.route.length)return;let[R,xt]=z.route[z.checkpoint];v.position.set(R,0,xt);let qt=Math.abs(R-hs(R))<1;for(let le of L)le.mesh.position.set(qt?le.side*(Me+1):0,0,qt?0:le.side*(Me+1));Lt("checkpoint-count").textContent=`${z.checkpoint+1} / ${z.route.length}`}function tt(R){z.mode=R,z.state="play",z.paused=!1,et.clear();for(let qt of["intro","intro-location","intro-footer"])Lt(qt).classList.add("hidden");Lt("hud").classList.remove("hidden"),document.body.classList.add("playing"),document.body.classList.toggle("racing",R==="race"),Lt("race").classList.toggle("hidden",R!=="race"),Lt("start-trial").classList.toggle("hidden",R==="race"),Lt("mode-label").textContent=R==="race"?"TIME TRIAL":"FREE ROAM",Lt("mission-title").textContent=R==="race"?"Follow the afterglow.":"Take the long way home.",Lt("mission-subtitle").textContent=R==="race"?`Pass through all ${z.route.length} golden checkpoints.`:"Explore Vista Pac\xEDfica at your own pace.",z.raceTime=0,z.checkpoint=0,z.splits=[],z.topSpeed=0,z.crashes=0;let xt=R==="race"?Yn[z.raceId].start||On:On;u.reset(xt.x,xt.z,xt.heading),z.lastX=u.x,z.lastZ=u.z,v.visible=R==="race",h.restoreAll(),O.reset(),lt(),k.snap(u),rt.setEnabled(Et),z.countdown=R==="race"?3.6:0,U(R==="race"?"3":""),R!=="race"&&Ht("WELCOME TO VISTA PAC\xCDFICA")}let F="";function U(R){if(R===F)return;F=R;let xt=Lt("countdown");xt.textContent=R,xt.classList.toggle("hidden",!R),xt.classList.toggle("go",R==="GO"),xt.classList.remove("pop"),xt.offsetWidth,xt.classList.add("pop"),R&&rt.countBeep?.(R==="GO")}function V(R){return z.countdown<=0?!1:(z.countdown-=R,z.countdown>.6?U(String(Math.ceil(z.countdown-.6))):z.countdown>0?U("GO"):(U(""),z.countdown=0),z.countdown>.6)}function q(){z.paused=!0,et.clear(),rt.chime(!0),Lt("final-time").textContent=Ca(z.raceTime);let R=Number(un.get(pe(z.raceId)))||null;!R||z.raceTime<R?(un.set(pe(z.raceId),String(z.raceTime)),Lt("best-time").textContent="A new personal best. Make the coast remember it."):Lt("best-time").textContent="PERSONAL BEST  "+Ca(R);let xt=u.distance/Math.max(z.raceTime,.1)*3.6;Lt("result-stats").innerHTML=`<span><b>${Math.round(z.topSpeed*3.6)}</b> KM/H TOP</span><span><b>${Math.round(xt)}</b> KM/H AVG</span><span><b>${z.crashes}</b> ${z.crashes===1?"CRASH":"CRASHES"}</span><span><b>${dr[d].name}</b></span>`,Lt("result").showModal(),v.visible=!1,It(z.raceId)}function K(R=!1){Lt("result").open||(z.paused=!0,et.clear(),Lt("menu-title").textContent=R?"Make it your drive.":"Take a breather.",Lt("menu-description").textContent=R?"Tune the look of the coast to your machine.":"The coast will be right here.",Lt("resume").textContent=z.state==="intro"?"BACK TO THE COAST":"BACK TO THE DRIVE",Lt("back-title").classList.toggle("hidden",z.state==="intro"),Lt("restart-race").textContent=(z.mode==="race"&&z.state==="play"?"RESTART ":"START ")+z.raceName,Lt("menu").open||Lt("menu").showModal())}function b(){Lt("menu").close(),z.paused=!1,et.clear()}function y(R){k.mode=R??(k.mode+1)%gf.length,Lt("camera-select").value=k.mode,z.state==="play"&&(Ht(gf[k.mode]),k.snap(u))}function Y(){let R=["golden","dusk","night","dawn","noon","cycle"],xt=R[(R.indexOf(Rt)+1)%R.length];pt(xt),Ht({golden:"GOLDEN HOUR",dusk:"BLUE HOUR",night:"MIDNIGHT",dawn:"FIRST LIGHT",noon:"HIGH NOON",cycle:"LIVE DAY CYCLE"}[xt])}function nt(){z.state==="play"&&(G.setExpanded(!G.expanded,u),document.querySelector(".map-panel").classList.toggle("expanded",G.expanded),Lt("map-button").setAttribute("aria-label",G.expanded?"Close expanded map":"Expand map"))}function mt(){if(z.mode==="race"){z.raceTime=0,z.checkpoint=0;let R=Yn[z.raceId].start||On;u.reset(R.x,R.z,R.heading),lt(),Ht("RUN RESTARTED")}else u.safeRespawn(),Ht("BACK ON THE ROAD");z.lastX=u.x,z.lastZ=u.z,k.snap(u)}function ut(){b(),z.state="intro",v.visible=!1,document.body.classList.remove("playing","racing"),Lt("hud").classList.add("hidden"),G.expanded&&Qt(!1);for(let R of["intro","intro-location","intro-footer"])Lt(R).classList.remove("hidden");u.reset(On.x,On.z,On.heading)}function Qt(R){G.setExpanded(R),document.querySelector(".map-panel").classList.toggle("expanded",R)}let Et=un.get("pacific-sound")!=="off";function Jt(){Lt("sound").setAttribute("aria-label",Et?"Mute sound":"Enable sound"),Lt("sound").querySelector("span").style.display=Et?"none":"block"}Jt(),Lt("drive").onclick=()=>{J(),tt("free")},Lt("trial").onclick=()=>{J(),tt("race")},Lt("start-trial").onclick=()=>tt("race"),Lt("pause").onclick=()=>K(),Lt("settings").onclick=()=>K(!0),Lt("close-menu").onclick=b,Lt("resume").onclick=b,Lt("restart-race").onclick=()=>{b(),tt("race")},Lt("back-title").onclick=ut,Lt("menu").addEventListener("cancel",R=>{R.preventDefault(),b()}),Lt("result").addEventListener("cancel",R=>R.preventDefault()),Lt("race-again").onclick=()=>{Lt("result").close(),tt("race")},Lt("free-roam").onclick=()=>{Lt("result").close(),tt("free")},Lt("quality").onchange=R=>Kt(R.target.value),Lt("time-select").onchange=R=>pt(R.target.value),Lt("road-select").value=Wt,Lt("road-select").onchange=R=>{Wt=R.target.value,un.set("pacific-road",Wt)},Lt("camera-select").onchange=R=>y(Number(R.target.value)),Lt("sound").onclick=()=>{Et=!Et,un.set("pacific-sound",Et?"on":"off"),rt.setEnabled(Et&&z.state==="play"),Et&&rt.start(),Jt(),Ht(Et?"SOUND ON":"SOUND OFF")},Lt("map-button").onclick=nt;{let R=Lt("minimap"),xt=new Map,qt=0,le=0;R.addEventListener("wheel",se=>{G.expanded&&(se.preventDefault(),G.zoomAt(se.deltaY<0?1.25:.8,se.clientX,se.clientY))},{passive:!1}),R.addEventListener("pointerdown",se=>{G.expanded&&(R.setPointerCapture(se.pointerId),xt.set(se.pointerId,[se.clientX,se.clientY]),xt.size===1&&(qt=0),le=0)}),R.addEventListener("pointermove",se=>{let ve=xt.get(se.pointerId);if(!(!ve||!G.expanded)&&(xt.size===1&&(qt+=Math.abs(se.clientX-ve[0])+Math.abs(se.clientY-ve[1]),qt>6&&G.panBy(se.clientX-ve[0],se.clientY-ve[1])),xt.set(se.pointerId,[se.clientX,se.clientY]),xt.size===2)){let[Ve,Je]=[...xt.values()],Re=Math.hypot(Ve[0]-Je[0],Ve[1]-Je[1]);le>0&&Re>0&&G.zoomAt(Re/le,(Ve[0]+Je[0])/2,(Ve[1]+Je[1])/2),le=Re,qt=99}});let Yt=se=>{xt.delete(se.pointerId)&&G.expanded&&xt.size===0&&qt<=6&&se.type==="pointerup"&&G.pick(se.clientX,se.clientY,z),le=0};R.addEventListener("pointerup",Yt),R.addEventListener("pointercancel",Yt),Lt("map-zoom-in").onclick=()=>G.zoomAt(1.5),Lt("map-zoom-out").onclick=()=>G.zoomAt(1/1.5)}for(let R of document.querySelectorAll(".swatch"))R.onclick=()=>Vt(R.dataset.color);function re(R,xt=!0){rt.setStation(R),un.set("pacific-radio",String(R)),Lt("radio-select").value=String(R),Lt("radio-name").textContent=R<0?"OFF":Xi[R].name,Lt("radio-genre").textContent=R<0?"Q TO TUNE":Xi[R].genre.toUpperCase(),document.querySelector(".radio").classList.toggle("off",R<0),xt&&z.state==="play"&&Ht(R<0?"RADIO OFF":`\u266A ${Xi[R].name}`)}Lt("radio-select").onchange=R=>re(Number(R.target.value),!1);function At(R){u.setHandling(R),un.set("pacific-handling",u.mode),Lt("handling-select").value=u.mode}Lt("handling-select").onchange=R=>{At(R.target.value),z.state==="play"&&Ht(Ma[u.mode].label)},At(un.get("pacific-handling")||"easy");let Ut={slow:.6,standard:1,off:0},me="slow";function de(R){me=R in Ut?R:"slow",m.policePace=Ut[me]||.6,un.set("pacific-police",me),Lt("police-select").value=me,me==="off"&&O.reset()}Lt("police-select").onchange=R=>{de(R.target.value),z.state==="play"&&Ht({slow:"RELAXED POLICE",standard:"STANDARD POLICE",off:"POLICE OFF"}[me])},de(un.get("pacific-police")||"slow");let Xt=Object.keys(Yn),pe=R=>R==="sunset"?"pacific-best":"pacific-best-"+R,Z=R=>R.toLowerCase().replace(/\b\w/g,xt=>xt.toUpperCase());function It(R){Yn[R]||(R="sunset"),z.raceId=R,z.route=Yn[R].route,z.raceName=Yn[R].name,un.set("pacific-race",R),Lt("race-select").value=R,Lt("race-name").textContent=Yn[R].name;let xt=Number(un.get(pe(R)));Lt("race-info").textContent=`${Yn[R].route.length} CHECKPOINTS \xB7 ${xt?"BEST "+Ca(xt):Yn[R].blurb.toUpperCase()}`,Lt("trial").firstChild.textContent=Yn[R].name+" ",Lt("start-trial").firstChild.textContent=`Start ${Z(Yn[R].name)} `,Lt("start-trial").querySelector("span").textContent=`${Yn[R].route.length} CHECKPOINTS`,document.querySelector("#race > span").textContent=Yn[R].name,document.querySelector("#result .eyebrow").textContent=Yn[R].name+" COMPLETE"}let Gt=R=>It(Xt[(Xt.indexOf(z.raceId)+R+Xt.length)%Xt.length]);Lt("race-prev").onclick=()=>Gt(-1),Lt("race-next").onclick=()=>Gt(1),Lt("race-select").onchange=R=>It(R.target.value),It(un.get("pacific-race")||"sunset");let te=un.get("pacific-fps")!=="off",Ct=Lt("fps"),vt={frames:0,time:0,worst:0};function ue(R){te=R,un.set("pacific-fps",R?"on":"off"),Lt("fps-select").value=R?"on":"off",Ct.classList.toggle("hidden",!R)}Lt("fps-select").onchange=R=>ue(R.target.value==="on");let Se=()=>{Lt("res-note").textContent=`RENDERING ${s.size.x} \xD7 ${s.size.y}`};function Qe(R){s.setResolution(R),un.set("pacific-res",s.resolution),Lt("res-select").value=s.resolution,Nt.told=!1,Se()}Lt("res-select").onchange=R=>Qe(R.target.value),Qe(un.get("pacific-res")||"1080p");function qe(R){s.setFilm(R),un.set("pacific-film",s.filmName),Lt("film-select").value=s.filmName}Lt("film-select").onchange=R=>qe(R.target.value),qe(un.get("pacific-film")||"subtle"),ue(te);let C=Number(un.get("pacific-radio")??0);re(Number.isInteger(C)&&C<Xi.length?C:0,!1);let W=()=>rt.unlock();for(let R of["pointerdown","keydown","touchend","click"])addEventListener(R,W,{once:!0});Lt("car-prev").onclick=()=>Ot(-1),Lt("car-next").onclick=()=>Ot(1),Lt("car-menu").onchange=R=>dt(R.target.value,z.state==="play"),dt(d);let st=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);addEventListener("keydown",R=>{if(R.target.tagName!=="SELECT"&&(st.has(R.code)&&R.preventDefault(),!R.repeat)){if(R.code==="Escape"){R.preventDefault(),Lt("menu").open?b():z.state==="play"&&K();return}if(R.code==="Enter"&&z.state==="intro"&&!z.paused){tt("free");return}if(z.state==="intro"&&!z.paused&&(R.code==="ArrowLeft"||R.code==="ArrowRight")){Ot(R.code==="ArrowLeft"?-1:1);return}if(R.code==="KeyT"&&!z.paused){Y();return}if(!(z.state!=="play"||z.paused)){if(R.code==="KeyP")return K();if(R.code==="KeyR")return mt();if(R.code==="KeyC")return y();if(R.code==="KeyM")return nt();if(G.expanded&&(R.code==="Equal"||R.code==="NumpadAdd"))return G.zoomAt(1.5);if(G.expanded&&(R.code==="Minus"||R.code==="NumpadSubtract"))return G.zoomAt(1/1.5);if(R.code==="KeyH"){rt.horn(3);return}if(R.code==="KeyF"){ue(!te),Ht(te?"FPS COUNTER ON":"FPS COUNTER OFF");return}if(R.code==="KeyQ"){re(rt.station+1>=Xi.length?-1:rt.station+1);return}et.keys.add(R.code)}}}),addEventListener("keyup",R=>et.keys.delete(R.code)),addEventListener("blur",()=>{et.clear(),z.state==="play"&&!z.paused&&K()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(et.clear(),z.state==="play"&&!z.paused&&K())}),et.onPadPress=R=>{if(R==="pause")return z.paused?b():z.state==="play"?K():tt("free");z.state!=="play"||z.paused||(R==="camera"&&y(),R==="map"&&nt(),R==="reset"&&mt())};for(let R of document.querySelectorAll("[data-key]")){let xt=()=>{et.keys.delete(R.dataset.key),R.classList.remove("pressed")};R.addEventListener("pointerdown",qt=>{qt.preventDefault(),!z.paused&&(R.setPointerCapture(qt.pointerId),et.keys.add(R.dataset.key),R.classList.add("pressed"))}),R.addEventListener("pointerup",xt),R.addEventListener("pointercancel",xt),R.addEventListener("lostpointercapture",xt)}addEventListener("resize",()=>s.applySize()),Lt("touch-cam").onclick=()=>y(),Lt("touch-radio").onclick=()=>re(rt.station+1>=Xi.length?-1:rt.station+1),Lt("touch-reset").onclick=()=>{z.state==="play"&&!z.paused&&mt()},addEventListener("contextmenu",R=>{Pa&&R.preventDefault()}),document.addEventListener("gesturestart",R=>R.preventDefault()),addEventListener("touchmove",R=>{z.state==="play"&&!R.target.closest("dialog, .map-panel.expanded")&&R.preventDefault()},{passive:!1});function J(){if(!Pa)return;let R=document.documentElement,xt=R.requestFullscreen||R.webkitRequestFullscreen;xt&&!document.fullscreenElement&&Promise.resolve(xt.call(R,{navigationUI:"hide"})).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{}),innerHeight>innerWidth&&setTimeout(()=>Ht("TURN YOUR PHONE SIDEWAYS"),2600)}let j=new P,ot=new P,_t=new P,at=0,yt="",gt=Lt("world-clock"),ft=document.querySelector(".sun-icon"),Ft=new P,Bt=new ne,ie=new ne,Te=!1;function ae(R,xt,qt,le,Yt,se,ve){let Ve=0,Je=2e3;for(let Re=0;Re<3;Re++){let In=Re===0?R:Re===1?xt:qt,$e=Re===0?le:Re===1?Yt:se,Dn=Re===0?ve.x-ve.w/2:Re===1?0:ve.z-ve.d/2,Zn=Re===0?ve.x+ve.w/2:Re===1?ve.h:ve.z+ve.d/2;if(Math.abs($e)<1e-6){if(In<Dn||In>Zn)return!1;continue}let tn=(Dn-In)/$e,cn=(Zn-In)/$e;if(tn>cn){let qi=tn;tn=cn,cn=qi}if(Ve=Math.max(Ve,tn),Je=Math.min(Je,cn),Ve>Je)return!1}return!0}function Be(){let R=r.sunDir,xt=n.position;if(_t.copy(xt).addScaledVector(R,1e3).project(n),r.elevation<-.5||_t.z>1||R.y<.75&&o.topsGrid.segment(xt.x,xt.z,xt.x+R.x*900,xt.z+R.z*900,le=>ae(xt.x,xt.y,xt.z,R.x,R.y,R.z,le)))return 0;for(let le=60;le<3200;le*=1.35)if(xt.y+R.y*le<Ni(xt.x+R.x*le,xt.z+R.z*le))return 0;let qt=Math.max(Math.abs(_t.x),Math.abs(_t.y));return Ne.clamp(1.25-qt,0,1)*Ne.smoothstep(r.elevation,-.5,4)}function zt(R){let xt=Math.abs(u.speed)>3,qt=u.slip>3.2&&xt||u.wheelspin>.3,le=u.surface==="sand"&&u.y<.5;u.group.updateMatrixWorld();let Yt=new kt().copy(r.hemi.color).multiplyScalar(r.hemi.intensity*.55).add(new kt().copy(r.sun.color).multiplyScalar(r.elevation>0?r.sun.intensity*.22:0));_.smoke.uniforms.light.value.copy(Yt),_.dust.uniforms.light.value.copy(Yt),_.water.uniforms.light.value.copy(Yt).multiplyScalar(1.3);for(let Je=D.length-1;Je>=0;Je--){let Re=D[Je];if(Re.t-=R,Re.t<=0){D.splice(Je,1);continue}let In=Math.min(1,Re.t/3)*70*R;for(let $e=0;$e<In+(bt()<In%1?1:0);$e++)_.water.emit(Re.x+(bt()-.5)*.2,fe+.3,Re.z+(bt()-.5)*.2,(bt()-.5)*1.6,8.5+bt()*3.5,(bt()-.5)*1.6,.35+bt()*.25,1.5+bt()*.6,.5,.8,.88,.95)}u.wheels.forEach((Je,Re)=>{if(Je.front)return;j.set(Je.x,.05,Je.z).applyMatrix4(u.group.matrixWorld),M.add(Re,j.x,u.y,j.z,!le&&(qt||u.brake>0&&u.speed>14&&u.handbrake),.24);let In=Math.min(1,(u.slip-3)/9)+u.wheelspin;!le&&qt&&bt()<In*60*R&&_.smoke.emit(j.x,j.y+.3,j.z,u.vx*.15+(bt()-.5)*1.5,.6+bt(),u.vz*.15+(bt()-.5)*1.5,1.2+bt()*.8,2.2+bt()*1.2,.5*Math.min(1,In+.3),.85,.85,.86),le&&xt&&bt()<Math.min(1,Math.abs(u.speed)/25)*40*R&&_.dust.emit(j.x,j.y+.2,j.z,(bt()-.5)*2,.8+bt(),(bt()-.5)*2,.9+bt()*.6,1.4+bt(),.55,.78,.68,.52)});let se=Ft.set(Math.sin(u.heading),0,Math.cos(u.heading));for(let Je of u.exhausts)if(j.copy(Je).applyMatrix4(u.group.matrixWorld),u.boosting)for(let Re=0;Re<2;Re++){let In=bt(),$e=bt()<.35,Dn=7+bt()*5;_.flames.emit(j.x,j.y,j.z,u.vx+se.x*Dn,bt()*.4,u.vz+se.z*Dn,.3+bt()*.25,.1+bt()*.08,1,$e?.6:1.4+In,$e?1.1:.8+In*1.4,$e?4.5:2.8)}else u.throttle===0&&u.rpm>u.def.redline*.6&&bt()<3*R&&(_.flames.emit(j.x,j.y,j.z,u.vx+se.x*3,0,u.vz+se.z*3,.35,.07,1,2.2,1.1,.4),rt.backfire?.());let ve=u.contact;if(ve&&u.impact>3){let Je=Math.min(46,Math.floor(u.impact*2.2));for(let Re=0;Re<Je;Re++)_.sparks.emit(ve.x,u.y+.35+bt()*.4,ve.z,ve.nx*4+(bt()-.5)*9,1+bt()*5,ve.nz*4+(bt()-.5)*9,.12+bt()*.1,.4+bt()*.5,1,6,3.2,1);if(u.impact>4)for(let Re=0;Re<4;Re++)_.dust.emit(ve.x,u.y+.5,ve.z,(bt()-.5)*2,bt(),(bt()-.5)*2,.6,1.1,.35,.6,.58,.55);rt.impact(u.impact),k.shake=Math.max(k.shake,Math.min(.55,u.impact*.035))}let Ve=u.scrape;if(Ve){let Je=Math.min(6,1+Math.floor(Ve.speed/8));for(let Re=0;Re<Je;Re++)_.sparks.emit(Ve.x,u.y+.3+bt()*.3,Ve.z,-u.vx*.25+Ve.nx*2+(bt()-.5)*3,.5+bt()*2.5,-u.vz*.25+Ve.nz*2+(bt()-.5)*3,.1+bt()*.08,.25+bt()*.3,1,6,3,.9);rt.scrape?.(Ve.speed)}}function T(R){if(z.mode!=="race"||z.checkpoint>=z.route.length||z.countdown>.6)return;z.raceTime+=R,z.topSpeed=Math.max(z.topSpeed,Math.abs(u.speed));let[xt,qt]=z.route[z.checkpoint],le=z.lastX,Yt=z.lastZ,se=u.x-le,ve=u.z-Yt,Ve=se*se+ve*ve,Je=Ve?Ne.clamp(((xt-le)*se+(qt-Yt)*ve)/Ve,0,1):0;Math.hypot(xt-le-se*Je,qt-Yt-ve*Je)<Fc&&(z.checkpoint++,z.splits.push(z.raceTime),z.checkpoint===z.route.length?q():(lt(),rt.chime(),Ht(`CHECKPOINT ${z.checkpoint} / ${z.route.length}`),z.flash=1))}function $(R,xt){u.contact=null,u.scrape=null,u.impact=0,p.update(R,z.time,u),m.peds=p.onRoad,m.update(R,z.time,u,se=>rt.horn(Math.hypot(se.x-u.x,se.z-u.z)),n);for(let se of p.events)se.type==="hit"&&(rt.impact(Math.min(se.speed,8)),k.shake=Math.max(k.shake,.08),z.state==="play"&&X("pedestrian",u.x,u.z,1));if(z.state!=="play")return;V(R)&&(xt={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},u.vx=u.vz=0);let qt=m.lastHit;qt&&qt.speed>4&&(z.crashes+=qt.speed>7?1:0,qt.police&&(qt.car.mode!=="chase"||O.level<2)?X("police",qt.x,qt.z,1,!1):(!qt.parked||qt.speed>8)&&X("crash",qt.x,qt.z,1));let le=u.impact,Yt=Math.ceil(R/(1/120));for(let se=0;se<Yt&&(z.lastX=u.x,z.lastZ=u.z,u.update(R/Yt,xt,B),le=Math.max(le,u.impact),T(R/Yt),!z.paused);se++);h.collide(u,R,se=>ht(se)),h.update(R,u),u.impact=Math.max(le,u.impact),u.applyDamage(),Q(),O.update(R,u,z.time,n,z.mode==="free"&&me!=="off");for(let se of O.events)se.type==="up"&&Ht(`WANTED  ${"\u2605".repeat(se.level)}`),se.type==="evaded"&&(Ht("YOU LOST THEM"),rt.chime()),se.type==="busted"&&Pt()}function X(R,xt,qt,le,Yt=!0){z.mode!=="free"||me==="off"||O.crime(R,xt,qt,le,z.time,Yt)}let it=!1;function Q(){let R=hs(u.x),xt=Ls(u.z),qt=Math.abs(u.x-R)<Me-1&&Math.abs(u.z-xt)<Me-1;if(qt&&!it&&Math.abs(u.speed)>9){let le=Math.abs(u.vx)>Math.abs(u.vz)?1:0;zs(le,z.time)===0&&X("red light",u.x,u.z,1)}it=qt}function Pt(){Ht("BUSTED"),z.flash=1.5,rt.impact(4),u.safeRespawn(),z.lastX=u.x,z.lastZ=u.z,k.snap(u)}let jt=new ia,ge=[u.group],he=1,Ee=0;t.info.autoReset=!1;function Ae(){requestAnimationFrame(Ae),t.info.reset();let R=jt.getDelta(),xt=Math.min(R,.05);z.time+=xt,z.frame++;let qt=et.poll();z.paused||($(xt,qt),z.state==="play"?(zt(xt),k.update(u,xt)):k.orbit(u,z.time)),u.setLights(r.lampFactor,u.gear<0?u.throttle>0:u.brake>0&&u.speed>.5,u.gear<0&&z.state==="play",xt);let le=j.set(u.x-Math.sin(u.heading)*s.quality.shadowRange*.35,0,u.z-Math.cos(u.heading)*s.quality.shadowRange*.35);r.update(xt,z.time,le,n),tf.value.copy(r.sun.color).multiplyScalar(r.elevation>-1?r.sun.intensity:.1),o.update(r.lampFactor,z.time),Ee-=R,Ee<=0&&(Ee=.2,Zu(n.position.x,n.position.z)),l.update(z.time,r.lampFactor),f.update(r.lampFactor),a.mirrorHide.length=0,k.mode===2&&a.mirrorHide.push(u.group),a.update(z.time,r),m.sync(r.lampFactor,u,z.time);for(let tn of Object.values(_))tn.update(z.paused?0:xt);v.visible&&(w.position.y=12+Math.sin(z.time*2)*.6,w.rotation.y=z.time*.8,E.uniforms.intensity.value=.55+Math.sin(z.time*3)*.12,I.opacity=.65+Math.sin(z.time*3)*.15),t.toneMappingExposure=r.exposure;let Yt=s.grade.uniforms;Yt.time.value=z.time,at=Ne.damp(at,Be(),10,xt),Yt.sunVisible.value=s.quality.grade?at*.8:0,Yt.sunPos.value.set(_t.x*.5+.5,_t.y*.5+.5),Yt.sunColor.value.copy(rn.fogSunColor.value),n.getWorldDirection(ot);let se=ot.dot(r.sunDir),ve=Ne.smoothstep(r.elevation,-1,2)*(1-Ne.smoothstep(r.elevation,14,30)),Ve=s.shafts.uniforms;Ve.strength.value=_t.z<1?Ne.smoothstep(se,.25,.85)*ve*.9:0,Ve.sunPos.value.copy(Yt.sunPos.value),Ve.color.value.copy(r.sun.color).multiplyScalar(.9);let Je=Wt==="wet"?.9:Wt==="dry"?0:Ne.smoothstep(r.lampFactor,.15,.85)*.85;if(ci.wetness.value=Je,B.wetness=Je,n.updateMatrixWorld(),ie.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Yt.camBlur.value.set(0,0),Te&&z.state==="play"&&!z.paused&&s.quality.grade){j.copy(n.position).addScaledVector(ot,80).applyMatrix4(Bt);let tn=j.x*.5,cn=j.y*.5,qi=Math.hypot(tn,cn);if(qi<.12){let ki=(qi>.035?.035/qi:1)*s.film.blur;Yt.camBlur.value.set(tn*ki,cn*ki)}}Bt.copy(ie),Te=!0;let Re=Ne.clamp((Math.abs(u.speed)-30)/35,0,1);Yt.speedBlur.value=z.state==="play"&&s.quality.grade?(Re*.6+(u.boosting?.45:0))*s.film.blur:0,z.flash=Math.max(0,z.flash-xt*3),Yt.flash.value=z.flash,Yt.night.value=r.nightFactor,Yt.warmth.value=Ne.smoothstep(r.elevation,-6,1)*(1-Ne.smoothstep(r.elevation,9,24));let In=z.state!=="play"?.7:k.mode===3?.6:0;he=Ne.damp(he,In,4,xt),Yt.dof.value=he,Yt.focus.value=Math.max(2,n.position.distanceTo(u.group.position)-.6),s.bloom&&(s.bloom.strength=.28+r.lampFactor*.2),s.beginFrame(),n.getWorldDirection(ot),g.update(R,j.set(n.position.x+ot.x*330,0,n.position.z+ot.z*330),r.lightDir,tn=>{let cn=v.visible;a.mirror.paused=!0,r.sky.visible=a.ocean.visible=v.visible=!1,tn(),v.visible=cn,r.sky.visible=a.ocean.visible=!0,a.mirror.paused=!1}),x.size&&!z.paused&&x.update(u.group.position,ge,Math.min(1,e.environmentIntensity*1.9),tn=>{let cn=r.sky.material.uniforms.skyDisc;a.mirror.paused=!0,cn.value=0,tn(),cn.value=1,a.mirror.paused=!1}),s.render(),z.state==="play"&&z.frame%2===0&&G.update(u,z,m,r,O),rt.setSiren(z.state==="play"?O.sirenLevel(u):0);let $e=r.clockLabel;$e!==yt&&(yt=$e,gt.textContent=$e,ft.textContent=r.elevation>-1.5?"\u2600":"\u263E");let Dn=zc(u.x,u.z),Zn=u.gear>0?u.def.gears[u.gear-1]*u.def.final:u.def.gears[0]*u.def.final;if(rt.update({rpm:u.rpm,throttle:u.throttle,speed:u.speed,slip:u.slip+u.wheelspin*12,boosting:u.boosting,active:z.state==="play"&&!z.paused,shoreDistance:Math.abs(n.position.x-ei),time:z.time,gear:u.gear,ratio:Zn,night:r.nightFactor,city:Dn[2],nearTrees:Dn[3]>.5?.6:.2}),z.state==="play"&&!z.paused&&(s.adapt(R),s.resolution!=="auto"&&!Nt.told&&(Nt.time+=R,Nt.frames++,Nt.time>6&&(Nt.frames/Nt.time<24&&(Nt.told=!0,Ht("LOW FRAME RATE \xB7 TRY RESOLUTION: AUTO IN SETTINGS")),Nt.time=0,Nt.frames=0))),te&&(vt.frames++,vt.time+=R,vt.worst=Math.max(vt.worst,R),vt.time>=.5)){let tn=vt.frames/vt.time,cn=vt.time/vt.frames*1e3;Ct.textContent=`${Math.round(tn)} FPS \xB7 ${cn.toFixed(1)} MS \xB7 WORST ${(vt.worst*1e3).toFixed(0)} \xB7 ${t.info.render.calls} DRAWS \xB7 ${(t.info.render.triangles/1e6).toFixed(1)}M TRIS \xB7 ${s.size.x}\xD7${s.size.y}`,Ct.classList.toggle("slow",tn<50&&tn>=30),Ct.classList.toggle("bad",tn<30),vt.frames=0,vt.time=0,vt.worst=0}}u.onShift=R=>rt.shift(R>0),await i("Warming up the engine\u2026"),k.orbit(u,0),r.update(0,0,j.set(u.x,0,u.z),n),Zu(u.x,u.z);try{await t.compileAsync(e,n)}catch{}Ae();let _e=Lt("loading");_e.classList.add("ready"),_e.querySelector("b").textContent="THE COAST IS CLEAR",Lt("loading-step").textContent=Pa?"TAP TO START":"CLICK OR PRESS ANY KEY TO START";let ke=R=>{if(R.type==="keydown"){if(["Shift","Control","Alt","Meta"].includes(R.key)||R.key.startsWith("F"))return;R.stopImmediatePropagation(),rt.unlock()}removeEventListener("keydown",ke,!0),_e.removeEventListener("pointerdown",ke),_e.classList.add("hidden")};addEventListener("keydown",ke,!0),_e.addEventListener("pointerdown",ke),window.__pacific={getState:()=>({state:z.state,mode:z.mode,paused:z.paused,speed:u.speed,heading:u.heading,nitro:u.nitro,position:{x:u.x,z:u.z,y:u.y},checkpoint:z.checkpoint,raceTime:z.raceTime,quality:Tt,time:r.hours,gear:u.gear,rpm:u.rpm,distanceTravelled:u.distance,renderScale:s.scale,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,wanted:O.level,countdown:z.countdown,car:d}),setTime:R=>{r.cycle=!1,r.setHours(R)},setQuality:Kt,teleport:(R,xt,qt=0)=>{u.reset(R,xt,qt),k.snap(u)},step:(R,xt={})=>{let qt={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1,...xt};for(let le=0;le<R&&!z.paused;le+=1/60)z.time+=1/60,$(1/60,qt);return k.snap(u),window.__pacific.getState()},parked:()=>({total:m.parked.length,near:m.nearParked.length,sample:m.nearParked.slice(0,3).map(R=>[R.type,+R.x.toFixed(1),+R.z.toFixed(1),R.slot])}),traffic:()=>m.cars.map(R=>({x:+R.x.toFixed(1),z:+R.z.toFixed(1),speed:+R.speed.toFixed(1),axis:R.axis,turn:!!R.turn,hit:!!R.hit})),reset:mt,camera:y,debug:{scene:e,atmosphere:r,pipeline:s,renderer:t,camera:n,rig:k,traffic:m,pedestrians:p,player:u,knock:h,world:B,audio:rt,wanted:O,hud:G,game:z,input:et,city:o,vegetation:c,lodStats:kp,farShadow:g,probe:x},selectCar:dt}}MM().catch(E0);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
