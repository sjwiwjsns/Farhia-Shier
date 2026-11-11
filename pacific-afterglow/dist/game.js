var $f=0,Jh=1,Kf=2;var jh=1,Rl=2,ki=3,Ji=0,$n=1,wn=2,ss=0,ji=1,ai=2,Qh=3,tu=4,Jf=5,_s=100,jf=101,Qf=102,td=103,ed=104,nd=200,id=201,sd=202,rd=203,tl=204,el=205,od=206,ad=207,ld=208,cd=209,hd=210,ud=211,fd=212,dd=213,pd=214,Cl=0,Il=1,Pl=2,Vs=3,Dl=4,Ll=5,Fl=6,zl=7,eu=0,md=1,gd=2,Pi=0,xd=1,vd=2,yd=3,_d=4,Md=5,bd=6,wd=7;var nu=300,Js=301,js=302,Ul=303,Nl=304,ia=306,Ms=1e3,ys=1001,nl=1002,jn=1003,Ed=1004;var sa=1005;var ni=1006,Ol=1007;var Ss=1008;var Di=1009,iu=1010,su=1011,Xr=1012,Bl=1013,Ts=1014,Li=1015,Bn=1016,kl=1017,Hl=1018,qr=1020,ru=35902,ou=35899,au=1021,lu=1022,bi=1023,Dr=1026,Yr=1027,Gl=1028,Vl=1029,cu=1030,Wl=1031;var Xl=1033,ra=33776,oa=33777,aa=33778,la=33779,ql=35840,Yl=35841,Zl=35842,$l=35843,Kl=36196,Jl=37492,jl=37496,Ql=37808,tc=37809,ec=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,lc=37817,cc=37818,hc=37819,uc=37820,fc=37821,dc=36492,pc=36494,mc=36495,gc=36283,xc=36284,vc=36285,yc=36286;var So=2300,il=2301,Qa=2302,Bh=2400,kh=2401,Hh=2402;var Sd=3200,_c=3201;var hu=0,Td=1,rs="",Zn="srgb",Ws="srgb-linear",To="linear",on="srgb";var Hs=7680;var Gh=519,Ad=512,Rd=513,Cd=514,ca=515,Id=516,Pd=517,Dd=518,Ld=519,Vh=35044,wi=35048;var uu="300 es",Ci=2e3,Ao=2001;var Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yf=1234567,Mo=Math.PI/180,Xs=180/Math.PI;function Qs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kn[s&255]+Kn[s>>8&255]+Kn[s>>16&255]+Kn[s>>24&255]+"-"+Kn[t&255]+Kn[t>>8&255]+"-"+Kn[t>>16&15|64]+Kn[t>>24&255]+"-"+Kn[e&63|128]+Kn[e>>8&255]+"-"+Kn[e>>16&255]+Kn[e>>24&255]+Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function fu(s,t){return(s%t+t)%t}function E0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function S0(s,t,e){return s!==t?(e-s)/(t-s):0}function bo(s,t,e){return(1-e)*s+e*t}function T0(s,t,e,n){return bo(s,t,1-Math.exp(-e*n))}function A0(s,t=1){return t-Math.abs(fu(s,t*2)-t)}function R0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function C0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function I0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function P0(s,t){return s+Math.random()*(t-s)}function D0(s){return s*(.5-Math.random())}function L0(s){s!==void 0&&(yf=s);let t=yf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function F0(s){return s*Mo}function z0(s){return s*Xs}function U0(s){return(s&s-1)===0&&s!==0}function N0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function O0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function B0(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*l,c*f,c*d,a*h);break;case"YZY":s.set(c*d,a*l,c*f,a*h);break;case"ZXZ":s.set(c*f,c*d,a*l,a*h);break;case"XZX":s.set(a*l,c*g,c*u,a*h);break;case"YXY":s.set(c*u,a*l,c*g,a*h);break;case"ZYZ":s.set(c*g,c*u,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ir(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ei(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ke={DEG2RAD:Mo,RAD2DEG:Xs,generateUUID:Qs,clamp:We,euclideanModulo:fu,mapLinear:E0,inverseLerp:S0,lerp:bo,damp:T0,pingpong:A0,smoothstep:R0,smootherstep:C0,randInt:I0,randFloat:P0,randFloatSpread:D0,seededRandom:L0,degToRad:F0,radToDeg:z0,isPowerOfTwo:U0,ceilPowerOfTwo:N0,floorPowerOfTwo:O0,setQuaternionFromProperEuler:B0,normalize:ei,denormalize:Ir},Tt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],h=n[i+1],l=n[i+2],f=n[i+3],d=r[o+0],u=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==d||h!==u||l!==g){let m=1-a,p=c*d+h*u+l*g+f*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let b=Math.sqrt(M),C=Math.atan2(b,p*y);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}let v=a*y;if(c=c*m+d*v,h=h*m+u*v,l=l*m+g*v,f=f*m+x*v,m===1-a){let b=1/Math.sqrt(c*c+h*h+l*l+f*f);c*=b,h*=b,l*=b,f*=b}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],h=n[i+2],l=n[i+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+l*f+c*u-h*d,t[e+1]=c*g+l*d+h*f-a*u,t[e+2]=h*g+l*u+a*d-c*f,t[e+3]=l*g-a*f-c*d-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(i/2),f=a(r/2),d=c(n/2),u=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"YXZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"ZXY":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"ZYX":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"YZX":this._x=d*l*f+h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f-d*u*g;break;case"XZY":this._x=d*l*f-h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(l-c)*u,this._y=(r-h)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(l-c)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+h)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-h)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(c+l)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+h)/u,this._y=(c+l)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+i*h-r*c,this._y=i*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-i*a,this._w=o*l-n*a-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,a),f=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_f.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_f.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*i-a*n),l=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+c*h+o*f-a*l,this.y=n+c*l+a*h-r*f,this.z=i+c*f+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this.z=We(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this.z=We(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dh.copy(this).projectOnVector(t),this.sub(dh)}reflect(t){return this.sub(dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dh=new I,_f=new Ge,Oe=class s{constructor(t,e,n,i,r,o,a,c,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h)}set(t,e,n,i,r,o,a,c,h){let l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],f=n[7],d=n[2],u=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],M=i[4],v=i[7],b=i[2],C=i[5],L=i[8];return r[0]=o*x+a*y+c*b,r[3]=o*m+a*M+c*C,r[6]=o*p+a*v+c*L,r[1]=h*x+l*y+f*b,r[4]=h*m+l*M+f*C,r[7]=h*p+l*v+f*L,r[2]=d*x+u*y+g*b,r[5]=d*m+u*M+g*C,r[8]=d*p+u*v+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+i*r*h-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=l*o-a*h,d=a*c-l*r,u=h*r-o*c,g=e*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(i*h-l*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(l*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=u*x,t[7]=(n*c-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-i*h,i*c,-i*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ph.makeScale(t,e)),this}rotate(t){return this.premultiply(ph.makeRotation(-t)),this}translate(t,e){return this.premultiply(ph.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ph=new Oe;function du(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ro(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fd(){let s=Ro("canvas");return s.style.display="block",s}var Mf={};function Lr(s){s in Mf||(Mf[s]=!0,console.warn(s))}function zd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var bf=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wf=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k0(){let s={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===on&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===on&&(i.r=Pr(i.r),i.g=Pr(i.g),i.b=Pr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===rs?To:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ws]:{primaries:t,whitePoint:n,transfer:To,toXYZ:bf,fromXYZ:wf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:t,whitePoint:n,transfer:on,toXYZ:bf,fromXYZ:wf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),s}var je=k0();function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var xr,sl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xr===void 0&&(xr=Ro("canvas")),xr.width=t.width,xr.height=t.height;let i=xr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=xr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ro("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},H0=0,Fr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(mh(i[o].image)):r.push(mh(i[o]))}else r=mh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function mh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var G0=0,gh=new I,ii=class s extends Qi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ys,i=ys,r=ni,o=Ss,a=bi,c=Di,h=s.DEFAULT_ANISOTROPY,l=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Qs(),this.name="",this.source=new Fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case nl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case nl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=nu;ii.DEFAULT_ANISOTROPY=1;var Ze=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,h=c[0],l=c[4],f=c[8],d=c[1],u=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(h+1)/2,v=(u+1)/2,b=(p+1)/2,C=(l+d)/4,L=(f+x)/4,P=(g+m)/4;return M>v&&M>b?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=C/n,r=L/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=C/i,r=P/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=L/r,i=P/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-l)*(d-l));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-x)/y,this.z=(d-l)/y,this.w=Math.acos((h+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=We(this.x,t.x,e.x),this.y=We(this.y,t.y,e.y),this.z=We(this.z,t.z,e.z),this.w=We(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=We(this.x,t,e),this.y=We(this.y,t,e),this.z=We(this.z,t,e),this.w=We(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rl=class extends Qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new ii(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Fr(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Co=class extends ii{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ol=class extends ii{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ti):Ti.fromBufferAttribute(r,o),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(t.matrixWorld),this.union(Ca)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fo),Ia.subVectors(this.max,fo),vr.subVectors(t.a,fo),yr.subVectors(t.b,fo),_r.subVectors(t.c,fo),fs.subVectors(yr,vr),ds.subVectors(_r,yr),Ns.subVectors(vr,_r);let e=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Ns.z,Ns.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Ns.z,0,-Ns.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Ns.y,Ns.x,0];return!xh(e,vr,yr,_r,Ia)||(e=[1,0,0,0,1,0,0,0,1],!xh(e,vr,yr,_r,Ia))?!1:(Pa.crossVectors(fs,ds),e=[Pa.x,Pa.y,Pa.z],xh(e,vr,yr,_r,Ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xi=[new I,new I,new I,new I,new I,new I,new I,new I],Ti=new I,Ca=new _i,vr=new I,yr=new I,_r=new I,fs=new I,ds=new I,Ns=new I,fo=new I,Ia=new I,Pa=new I,Os=new I;function xh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Os.fromArray(s,r);let a=i.x*Math.abs(Os.x)+i.y*Math.abs(Os.y)+i.z*Math.abs(Os.z),c=t.dot(Os),h=e.dot(Os),l=n.dot(Os);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}var V0=new _i,po=new I,vh=new I,Ii=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):V0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;po.subVectors(t,this.center);let e=po.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(po,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(po.copy(t.center).add(vh)),this.expandByPoint(po.copy(t.center).sub(vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qi=new I,yh=new I,Da=new I,ps=new I,_h=new I,La=new I,Mh=new I,Io=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qi.copy(this.origin).addScaledVector(this.direction,e),qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){yh.copy(t).add(e).multiplyScalar(.5),Da.copy(e).sub(t).normalize(),ps.copy(this.origin).sub(yh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Da),a=ps.dot(this.direction),c=-ps.dot(Da),h=ps.lengthSq(),l=Math.abs(1-o*o),f,d,u,g;if(l>0)if(f=o*c-a,d=o*a-c,g=r*l,f>=0)if(d>=-g)if(d<=g){let x=1/l;f*=x,d*=x,u=f*(f+o*d+2*a)+d*(o*f+d+2*c)+h}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+h):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(yh).addScaledVector(Da,d),u}intersectSphere(t,e){qi.subVectors(t.center,this.origin);let n=qi.dot(this.direction),i=qi.dot(qi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,h=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),l>=0?(r=(t.min.y-d.y)*l,o=(t.max.y-d.y)*l):(r=(t.max.y-d.y)*l,o=(t.min.y-d.y)*l),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,qi)!==null}intersectTriangle(t,e,n,i,r){_h.subVectors(e,t),La.subVectors(n,t),Mh.crossVectors(_h,La);let o=this.direction.dot(Mh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ps.subVectors(this.origin,t);let c=a*this.direction.dot(La.crossVectors(ps,La));if(c<0)return null;let h=a*this.direction.dot(_h.cross(ps));if(h<0||c+h>o)return null;let l=-a*ps.dot(Mh);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class s{constructor(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m)}set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=l,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Mr.setFromMatrixColumn(t,0).length(),r=1/Mr.setFromMatrixColumn(t,1).length(),o=1/Mr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*l,u=o*f,g=a*l,x=a*f;e[0]=c*l,e[4]=-c*f,e[8]=h,e[1]=u+g*h,e[5]=d-x*h,e[9]=-a*c,e[2]=x-d*h,e[6]=g+u*h,e[10]=o*c}else if(t.order==="YXZ"){let d=c*l,u=c*f,g=h*l,x=h*f;e[0]=d+x*a,e[4]=g*a-u,e[8]=o*h,e[1]=o*f,e[5]=o*l,e[9]=-a,e[2]=u*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*l,u=c*f,g=h*l,x=h*f;e[0]=d-x*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*l,e[9]=x-d*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*l,u=o*f,g=a*l,x=a*f;e[0]=c*l,e[4]=g*h-u,e[8]=d*h+x,e[1]=c*f,e[5]=x*h+d,e[9]=u*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,u=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=x-d*f,e[8]=g*f+u,e[1]=f,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=u*f+g,e[10]=d-x*f}else if(t.order==="XZY"){let d=o*c,u=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=-f,e[8]=h*l,e[1]=d*f+x,e[5]=o*l,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*l,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(W0,t,X0)}lookAt(t,e,n){let i=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ms.crossVectors(n,ui),ms.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ms.crossVectors(n,ui)),ms.normalize(),Fa.crossVectors(ui,ms),i[0]=ms.x,i[4]=Fa.x,i[8]=ui.x,i[1]=ms.y,i[5]=Fa.y,i[9]=ui.y,i[2]=ms.z,i[6]=Fa.z,i[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],f=n[5],d=n[9],u=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],M=n[7],v=n[11],b=n[15],C=i[0],L=i[4],P=i[8],T=i[12],S=i[1],N=i[5],Y=i[9],B=i[13],O=i[2],k=i[6],V=i[10],rt=i[14],J=i[3],z=i[7],At=i[11],Ct=i[15];return r[0]=o*C+a*S+c*O+h*J,r[4]=o*L+a*N+c*k+h*z,r[8]=o*P+a*Y+c*V+h*At,r[12]=o*T+a*B+c*rt+h*Ct,r[1]=l*C+f*S+d*O+u*J,r[5]=l*L+f*N+d*k+u*z,r[9]=l*P+f*Y+d*V+u*At,r[13]=l*T+f*B+d*rt+u*Ct,r[2]=g*C+x*S+m*O+p*J,r[6]=g*L+x*N+m*k+p*z,r[10]=g*P+x*Y+m*V+p*At,r[14]=g*T+x*B+m*rt+p*Ct,r[3]=y*C+M*S+v*O+b*J,r[7]=y*L+M*N+v*k+b*z,r[11]=y*P+M*Y+v*V+b*At,r[15]=y*T+M*B+v*rt+b*Ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],f=t[6],d=t[10],u=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*f-i*h*f-r*a*d+n*h*d+i*a*u-n*c*u)+x*(+e*c*u-e*h*d+r*o*d-i*o*u+i*h*l-r*c*l)+m*(+e*h*f-e*a*u-r*o*f+n*o*u+r*a*l-n*h*l)+p*(-i*a*l-e*c*f+e*a*d+i*o*f-n*o*d+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=t[9],d=t[10],u=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=f*m*h-x*d*h+x*c*u-a*m*u-f*c*p+a*d*p,M=g*d*h-l*m*h-g*c*u+o*m*u+l*c*p-o*d*p,v=l*x*h-g*f*h+g*a*u-o*x*u-l*a*p+o*f*p,b=g*f*c-l*x*c-g*a*d+o*x*d+l*a*m-o*f*m,C=e*y+n*M+i*v+r*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return t[0]=y*L,t[1]=(x*d*r-f*m*r-x*i*u+n*m*u+f*i*p-n*d*p)*L,t[2]=(a*m*r-x*c*r+x*i*h-n*m*h-a*i*p+n*c*p)*L,t[3]=(f*c*r-a*d*r-f*i*h+n*d*h+a*i*u-n*c*u)*L,t[4]=M*L,t[5]=(l*m*r-g*d*r+g*i*u-e*m*u-l*i*p+e*d*p)*L,t[6]=(g*c*r-o*m*r-g*i*h+e*m*h+o*i*p-e*c*p)*L,t[7]=(o*d*r-l*c*r+l*i*h-e*d*h-o*i*u+e*c*u)*L,t[8]=v*L,t[9]=(g*f*r-l*x*r-g*n*u+e*x*u+l*n*p-e*f*p)*L,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*p+e*a*p)*L,t[11]=(l*a*r-o*f*r-l*n*h+e*f*h+o*n*u-e*a*u)*L,t[12]=b*L,t[13]=(l*x*i-g*f*i+g*n*d-e*x*d-l*n*m+e*f*m)*L,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*m-e*a*m)*L,t[15]=(o*f*i-l*a*i+l*n*c-e*f*c-o*n*d+e*a*d)*L,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-i*c,h*c+i*a,0,h*a+i*c,l*a+n,l*c-i*o,0,h*c-i*a,l*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,f=a+a,d=r*h,u=r*l,g=r*f,x=o*l,m=o*f,p=a*f,y=c*h,M=c*l,v=c*f,b=n.x,C=n.y,L=n.z;return i[0]=(1-(x+p))*b,i[1]=(u+v)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(u-v)*C,i[5]=(1-(d+p))*C,i[6]=(m+y)*C,i[7]=0,i[8]=(g+M)*L,i[9]=(m-y)*L,i[10]=(1-(d+x))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Mr.set(i[0],i[1],i[2]).length(),o=Mr.set(i[4],i[5],i[6]).length(),a=Mr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ai.copy(this);let h=1/r,l=1/o,f=1/a;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=l,Ai.elements[5]*=l,Ai.elements[6]*=l,Ai.elements[8]*=f,Ai.elements[9]*=f,Ai.elements[10]*=f,e.setFromRotationMatrix(Ai),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Ci,c=!1){let h=this.elements,l=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Ci)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ao)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=f,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ci,c=!1){let h=this.elements,l=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Ci)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ao)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=f,h[9]=0,h[13]=u,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Mr=new I,Ai=new ne,W0=new I(0,0,0),X0=new I(1,1,1),ms=new I,Fa=new I,ui=new I,Ef=new ne,Sf=new Ge,Dn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],h=i[5],l=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-We(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ef.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ef,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},q0=0,Tf=new I,br=new Ge,Yi=new ne,za=new I,mo=new I,Y0=new I,Z0=new Ge,Af=new I(1,0,0),Rf=new I(0,1,0),Cf=new I(0,0,1),If={type:"added"},$0={type:"removed"},wr={type:"childadded",child:null},bh={type:"childremoved",child:null},Ln=class s extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Dn,n=new Ge,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Oe}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(Af,t)}rotateY(t){return this.rotateOnAxis(Rf,t)}rotateZ(t){return this.rotateOnAxis(Cf,t)}translateOnAxis(t,e){return Tf.copy(t).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Af,t)}translateY(t){return this.translateOnAxis(Rf,t)}translateZ(t){return this.translateOnAxis(Cf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?za.copy(t):za.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(mo,za,this.up):Yi.lookAt(za,mo,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),br.setFromRotationMatrix(Yi),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(If),wr.child=t,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($0),bh.child=t,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(If),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,t,Y0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,Z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let f=c[h];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let h in a){let l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ln.DEFAULT_UP=new I(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=new I,Zi=new I,wh=new I,$i=new I,Er=new I,Sr=new I,Pf=new I,Eh=new I,Sh=new I,Th=new I,Ah=new Ze,Rh=new Ze,Ch=new Ze,vs=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ri.subVectors(t,e),i.cross(Ri);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ri.subVectors(i,e),Zi.subVectors(n,e),wh.subVectors(t,e);let o=Ri.dot(Ri),a=Ri.dot(Zi),c=Ri.dot(wh),h=Zi.dot(Zi),l=Zi.dot(wh),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(h*c-a*l)*d,g=(o*l-a*c)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,$i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$i.x),c.addScaledVector(o,$i.y),c.addScaledVector(a,$i.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(t,e),Rh.fromBufferAttribute(t,n),Ch.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ah,r.x),o.addScaledVector(Rh,r.y),o.addScaledVector(Ch,r.z),o}static isFrontFacing(t,e,n,i){return Ri.subVectors(n,e),Zi.subVectors(t,e),Ri.cross(Zi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Ri.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Er.subVectors(i,n),Sr.subVectors(r,n),Eh.subVectors(t,n);let c=Er.dot(Eh),h=Sr.dot(Eh);if(c<=0&&h<=0)return e.copy(n);Sh.subVectors(t,i);let l=Er.dot(Sh),f=Sr.dot(Sh);if(l>=0&&f<=l)return e.copy(i);let d=c*f-l*h;if(d<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(Er,o);Th.subVectors(t,r);let u=Er.dot(Th),g=Sr.dot(Th);if(g>=0&&u<=g)return e.copy(r);let x=u*h-c*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(Sr,a);let m=l*g-u*f;if(m<=0&&f-l>=0&&u-g>=0)return Pf.subVectors(r,i),a=(f-l)/(f-l+(u-g)),e.copy(i).addScaledVector(Pf,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Er,o).addScaledVector(Sr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Ih(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,je.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=je.workingColorSpace){return this.r=t,this.g=e,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=je.workingColorSpace){if(t=fu(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ih(o,r,t+1/3),this.g=Ih(o,r,t),this.b=Ih(o,r,t-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(t,e=Zn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zn){let n=Ud[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return je.workingToColorSpace(Jn.copy(this),t),Math.round(We(Jn.r*255,0,255))*65536+Math.round(We(Jn.g*255,0,255))*256+Math.round(We(Jn.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=je.workingColorSpace){je.workingToColorSpace(Jn.copy(this),e);let n=Jn.r,i=Jn.g,r=Jn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,h,l=(a+o)/2;if(a===o)c=0,h=0;else{let f=o-a;switch(h=l<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=je.workingColorSpace){return je.workingToColorSpace(Jn.copy(this),e),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=Zn){je.workingToColorSpace(Jn.copy(this),t);let e=Jn.r,n=Jn.g,i=Jn.b;return t!==Zn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+e,gs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gs),t.getHSL(Ua);let n=bo(gs.h,Ua.h,e),i=bo(gs.s,Ua.s,e),r=bo(gs.l,Ua.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jn=new Ht;Ht.NAMES=Ud;var K0=0,ts=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=ji,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tl&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},bn=class extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fn=new I,Na=new Tt,J0=0,vn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Na.fromBufferAttribute(this,e),Na.applyMatrix3(t),this.setXY(e,Na.x,Na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix3(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix4(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyNormalMatrix(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.transformDirection(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ei(e,this.array),n=ei(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ei(e,this.array),n=ei(n,this.array),i=ei(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ei(e,this.array),n=ei(n,this.array),i=ei(i,this.array),r=ei(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vh&&(t.usage=this.usage),t}};var Do=class extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Lo=class extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},j0=0,vi=new ne,Ph=new Ln,Tr=new I,fi=new _i,go=new _i,Vn=new I,Je=class s extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?Lo:Do)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,e,n){return vi.makeTranslation(t,e,n),this.applyMatrix4(vi),this}scale(t,e,n){return vi.makeScale(t,e,n),this.applyMatrix4(vi),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];go.setFromBufferAttribute(a),this.morphTargetsRelative?(Vn.addVectors(fi.min,go.min),fi.expandByPoint(Vn),Vn.addVectors(fi.max,go.max),fi.expandByPoint(Vn)):(fi.expandByPoint(go.min),fi.expandByPoint(go.max))}fi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Vn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Vn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)Vn.fromBufferAttribute(a,h),c&&(Tr.fromBufferAttribute(t,h),Vn.add(Tr)),i=Math.max(i,n.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;let h=new I,l=new I,f=new I,d=new Tt,u=new Tt,g=new Tt,x=new I,m=new I;function p(P,T,S){h.fromBufferAttribute(n,P),l.fromBufferAttribute(n,T),f.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),u.fromBufferAttribute(r,T),g.fromBufferAttribute(r,S),l.sub(h),f.sub(h),u.sub(d),g.sub(d);let N=1/(u.x*g.y-g.x*u.y);isFinite(N)&&(x.copy(l).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(N),m.copy(f).multiplyScalar(u.x).addScaledVector(l,-g.x).multiplyScalar(N),a[P].add(x),a[T].add(x),a[S].add(x),c[P].add(m),c[T].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,T=y.length;P<T;++P){let S=y[P],N=S.start,Y=S.count;for(let B=N,O=N+Y;B<O;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new I,v=new I,b=new I,C=new I;function L(P){b.fromBufferAttribute(i,P),C.copy(b);let T=a[P];M.copy(T),M.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(C,T);let N=v.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,N)}for(let P=0,T=y.length;P<T;++P){let S=y[P],N=S.start,Y=S.count;for(let B=N,O=N+Y;B<O;B+=3)L(t.getX(B+0)),L(t.getX(B+1)),L(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,o=new I,a=new I,c=new I,h=new I,l=new I,f=new I;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Vn.fromBufferAttribute(t,e),Vn.normalize(),t.setXYZ(e,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function t(a,c){let h=a.array,l=a.itemSize,f=a.normalized,d=new h.constructor(c.length*l),u=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*l;for(let p=0;p<l;p++)d[g++]=h[u++]}return new vn(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let l=0,f=h.length;l<f;l++){let d=h[l],u=t(d,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let f=0,d=h.length;f<d;f++){let u=h[f];l.push(u.toJSON(t.data))}l.length>0&&(i[c]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let l=i[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],f=r[h];for(let d=0,u=f.length;d<u;d++)l.push(f[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,l=o.length;h<l;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Df=new ne,Bs=new Io,Oa=new Ii,Lf=new I,Ba=new I,ka=new I,Ha=new I,Dh=new I,Ga=new I,Ff=new I,Va=new I,$t=class extends Ln{constructor(t=new Je,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ga.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=a[c],f=r[c];l!==0&&(Dh.fromBufferAttribute(f,t),o?Ga.addScaledVector(Dh,l):Ga.addScaledVector(Dh.sub(e),l))}e.add(Ga)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Bs.copy(t.ray).recast(t.near),!(Oa.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Oa,Lf)===null||Bs.origin.distanceToSquared(Lf)>(t.far-t.near)**2))&&(Df.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(Df),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bs)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,b=M;v<b;v+=3){let C=a.getX(v),L=a.getX(v+1),P=a.getX(v+2);i=Wa(this,p,t,n,h,l,f,C,L,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=Wa(this,o,t,n,h,l,f,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,b=M;v<b;v+=3){let C=v,L=v+1,P=v+2;i=Wa(this,p,t,n,h,l,f,C,L,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let y=m,M=m+1,v=m+2;i=Wa(this,o,t,n,h,l,f,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Q0(s,t,e,n,i,r,o,a){let c;if(t.side===$n?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Ji,a),c===null)return null;Va.copy(a),Va.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Va);return h<e.near||h>e.far?null:{distance:h,point:Va.clone(),object:s}}function Wa(s,t,e,n,i,r,o,a,c,h){s.getVertexPosition(a,Ba),s.getVertexPosition(c,ka),s.getVertexPosition(h,Ha);let l=Q0(s,t,e,n,Ba,ka,Ha,Ff);if(l){let f=new I;vs.getBarycoord(Ff,Ba,ka,Ha,f),i&&(l.uv=vs.getInterpolatedAttribute(i,a,c,h,f,new Tt)),r&&(l.uv1=vs.getInterpolatedAttribute(r,a,c,h,f,new Tt)),o&&(l.normal=vs.getInterpolatedAttribute(o,a,c,h,f,new I),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let d={a,b:c,c:h,normal:new I,materialIndex:0};vs.getNormal(Ba,ka,Ha,d.normal),l.face=d,l.barycoord=f}return l}var pe=class s extends Je{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],l=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(f,2));function g(x,m,p,y,M,v,b,C,L,P,T){let S=v/L,N=b/P,Y=v/2,B=b/2,O=C/2,k=L+1,V=P+1,rt=0,J=0,z=new I;for(let At=0;At<V;At++){let Ct=At*N-B;for(let Wt=0;Wt<k;Wt++){let zt=Wt*S-Y;z[x]=zt*y,z[m]=Ct*M,z[p]=O,h.push(z.x,z.y,z.z),z[x]=0,z[m]=0,z[p]=C>0?1:-1,l.push(z.x,z.y,z.z),f.push(Wt/L),f.push(1-At/P),rt+=1}}for(let At=0;At<P;At++)for(let Ct=0;Ct<L;Ct++){let Wt=d+Ct+k*At,zt=d+Ct+k*(At+1),Ot=d+(Ct+1)+k*(At+1),me=d+(Ct+1)+k*At;c.push(Wt,zt,me),c.push(zt,Ot,me),J+=6}a.addGroup(u,J,T),u+=J,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function tr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qn(s){let t={};for(let e=0;e<s.length;e++){let n=tr(s[e]);for(let i in n)t[i]=n[i]}return t}function tm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function pu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:je.workingColorSpace}var Fi={clone:tr,merge:Qn},em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=tm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Fo=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xs=new I,zf=new Tt,Uf=new Tt,On=class extends Fo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xs.x,xs.y).multiplyScalar(-t/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-t/xs.z)}getViewSize(t,e){return this.getViewBounds(t,zf,Uf),e.subVectors(Uf,zf)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/h,i*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ar=-90,Rr=1,zr=class extends Ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new On(Ar,Rr,t,e);i.layers=this.layers,this.add(i);let r=new On(Ar,Rr,t,e);r.layers=this.layers,this.add(r);let o=new On(Ar,Rr,t,e);o.layers=this.layers,this.add(o);let a=new On(Ar,Rr,t,e);a.layers=this.layers,this.add(a);let c=new On(Ar,Rr,t,e);c.layers=this.layers,this.add(c);let h=new On(Ar,Rr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,l]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},zo=class extends ii{constructor(t=[],e=Js,n,i,r,o,a,c,h,l){super(t,e,n,i,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ur=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new zo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pe(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$n,blending:ss});r.uniforms.tEquirect.value=e;let o=new $t(i,r),a=e.minFilter;return e.minFilter===Ss&&(e.minFilter=ni),new zr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},hn=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},im={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=l.position.distanceTo(f.position),u=.02,g=.005;h.inputState.pinching&&d>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(im)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Uo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qs=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Or=class extends ii{constructor(t=null,e=1,n=1,i,r,o,a,c,h=jn,l=jn,f,d){super(null,o,a,c,h,l,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class extends vn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cr=new ne,Nf=new ne,Xa=[],Of=new _i,sm=new ne,xo=new $t,vo=new Ii,Be=class extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cr),Of.copy(t.boundingBox).applyMatrix4(Cr),this.boundingBox.union(Of)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cr),vo.copy(t.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(vo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(xo.geometry=this.geometry,xo.material=this.material,xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),t.ray.intersectsSphere(vo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Cr),Nf.multiplyMatrices(n,Cr),xo.matrixWorld=Nf,xo.raycast(t,Xa);for(let o=0,a=Xa.length;o<a;o++){let c=Xa[o];c.instanceId=r,c.object=this,e.push(c)}Xa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(i*this.count),i,this.count,Gl,Li));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Lh=new I,rm=new I,om=new Oe,yi=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Lh.subVectors(n,e).cross(rm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Lh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||om.getNormalMatrix(t),i=this.coplanarPoint(Lh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ks=new Ii,am=new Tt(.5,.5),qa=new I,bs=class{constructor(t=new yi,e=new yi,n=new yi,i=new yi,r=new yi,o=new yi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ci,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],h=r[3],l=r[4],f=r[5],d=r[6],u=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],M=r[13],v=r[14],b=r[15];if(i[0].setComponents(h-o,u-l,p-g,b-y).normalize(),i[1].setComponents(h+o,u+l,p+g,b+y).normalize(),i[2].setComponents(h+a,u+f,p+x,b+M).normalize(),i[3].setComponents(h-a,u-f,p-x,b-M).normalize(),n)i[4].setComponents(c,d,m,v).normalize(),i[5].setComponents(h-c,u-d,p-m,b-v).normalize();else if(i[4].setComponents(h-c,u-d,p-m,b-v).normalize(),e===Ci)i[5].setComponents(h+c,u+d,p+m,b+v).normalize();else if(e===Ao)i[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);let e=am.distanceTo(t.center);return ks.radius=.7071067811865476+e,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(qa.x=i.normal.x>0?t.max.x:t.min.x,qa.y=i.normal.y>0?t.max.y:t.min.y,qa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(qa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Br=class extends ts{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},al=new I,ll=new I,Bf=new ne,yo=new Io,Ya=new Ii,Fh=new I,kf=new I,cl=class extends Ln{constructor(t=new Je,e=new Br){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)al.fromBufferAttribute(e,i-1),ll.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=al.distanceTo(ll);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(i),Ya.radius+=r,t.ray.intersectsSphere(Ya)===!1)return;Bf.copy(i).invert(),yo.copy(t.ray).applyMatrix4(Bf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let x=u,m=g-1;x<m;x+=h){let p=l.getX(x),y=l.getX(x+1),M=Za(this,t,yo,c,p,y,x);M&&e.push(M)}if(this.isLineLoop){let x=l.getX(g-1),m=l.getX(u),p=Za(this,t,yo,c,x,m,g-1);p&&e.push(p)}}else{let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=u,m=g-1;x<m;x+=h){let p=Za(this,t,yo,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Za(this,t,yo,c,g-1,u,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Za(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(al.fromBufferAttribute(a,i),ll.fromBufferAttribute(a,r),e.distanceSqToSegment(al,ll,Fh,kf)>n)return;Fh.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(Fh);if(!(h<t.near||h>t.far))return{distance:h,point:kf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Hf=new I,Gf=new I,No=class extends cl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Hf.fromBufferAttribute(e,i),Gf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hf.distanceTo(Gf);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ys=class extends ii{constructor(t,e,n,i,r,o,a,c,h){super(t,e,n,i,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},es=class extends ii{constructor(t,e,n=Ts,i,r,o,a=jn,c=jn,h,l=Dr,f=1){if(l!==Dr&&l!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,i,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Oo=class extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Bo=class s extends Je{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],h=new I,l=new Tt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),o.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(o[d]/t+1)/2,l.y=(o[d+1]/t+1)/2,c.push(l.x,l.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(a,3)),this.setAttribute("uv",new be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},De=class s extends Je{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;i=Math.floor(i),r=Math.floor(r);let l=[],f=[],d=[],u=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(l),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(u,2));function y(){let v=new I,b=new I,C=0,L=(e-t)/n;for(let P=0;P<=r;P++){let T=[],S=P/r,N=S*(e-t)+t;for(let Y=0;Y<=i;Y++){let B=Y/i,O=B*c+a,k=Math.sin(O),V=Math.cos(O);b.x=N*k,b.y=-S*n+m,b.z=N*V,f.push(b.x,b.y,b.z),v.set(k,L,V).normalize(),d.push(v.x,v.y,v.z),u.push(B,1-S),T.push(g++)}x.push(T)}for(let P=0;P<i;P++)for(let T=0;T<r;T++){let S=x[T][P],N=x[T+1][P],Y=x[T+1][P+1],B=x[T][P+1];(t>0||T!==0)&&(l.push(S,N,B),C+=3),(e>0||T!==r-1)&&(l.push(N,Y,B),C+=3)}h.addGroup(p,C,0),p+=C}function M(v){let b=g,C=new Tt,L=new I,P=0,T=v===!0?t:e,S=v===!0?1:-1;for(let Y=1;Y<=i;Y++)f.push(0,m*S,0),d.push(0,S,0),u.push(.5,.5),g++;let N=g;for(let Y=0;Y<=i;Y++){let O=Y/i*c+a,k=Math.cos(O),V=Math.sin(O);L.x=T*V,L.y=m*S,L.z=T*k,f.push(L.x,L.y,L.z),d.push(0,S,0),C.x=k*.5+.5,C.y=V*.5*S+.5,u.push(C.x,C.y),g++}for(let Y=0;Y<i;Y++){let B=b+Y,O=N+Y;v===!0?l.push(O,O+1,B):l.push(O+1,O,B),P+=3}h.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mi=class s extends De{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let l=n[i],d=n[i+1]-l,u=(o-l)/d;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new Tt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],r=[],o=[],a=new I,c=new ne;for(let u=0;u<=t;u++){let g=u/t;i[u]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let h=Number.MAX_VALUE,l=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);l<=h&&(h=l,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(We(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,g))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(We(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},kr=class extends di{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Tt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=h-this.aY;c=d*l-u*f+this.aX,h=d*f+u*l+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},hl=class extends kr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){i(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,l,f){let d=(o-r)/h-(a-r)/(h+l)+(a-o)/l,u=(a-o)/l-(c-o)/(l+f)+(c-a)/f;d*=l,u*=l,i(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var $a=new I,zh=new mu,Uh=new mu,Nh=new mu,ul=class extends di{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,l;this.closed||a>0?h=i[(a-1)%r]:($a.subVectors(i[0],i[1]).add(i[0]),h=$a);let f=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?l=i[(a+2)%r]:($a.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=$a),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(l),u);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),zh.initNonuniformCatmullRom(h.x,f.x,d.x,l.x,g,x,m),Uh.initNonuniformCatmullRom(h.y,f.y,d.y,l.y,g,x,m),Nh.initNonuniformCatmullRom(h.z,f.z,d.z,l.z,g,x,m)}else this.curveType==="catmullrom"&&(zh.initCatmullRom(h.x,f.x,d.x,l.x,this.tension),Uh.initCatmullRom(h.y,f.y,d.y,l.y,this.tension),Nh.initCatmullRom(h.z,f.z,d.z,l.z,this.tension));return n.set(zh.calc(c),Uh.calc(c),Nh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vf(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function lm(s,t){let e=1-s;return e*e*t}function cm(s,t){return 2*(1-s)*s*t}function hm(s,t){return s*s*t}function wo(s,t,e,n){return lm(s,t)+cm(s,e)+hm(s,n)}function um(s,t){let e=1-s;return e*e*e*t}function fm(s,t){let e=1-s;return 3*e*e*s*t}function dm(s,t){return 3*(1-s)*s*s*t}function pm(s,t){return s*s*s*t}function Eo(s,t,e,n,i){return um(s,t)+fm(s,e)+dm(s,n)+pm(s,i)}var ko=class extends di{constructor(t=new Tt,e=new Tt,n=new Tt,i=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Tt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Eo(t,i.x,r.x,o.x,a.x),Eo(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fl=class extends di{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Eo(t,i.x,r.x,o.x,a.x),Eo(t,i.y,r.y,o.y,a.y),Eo(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ho=class extends di{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dl=class extends di{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends di{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(wo(t,i.x,r.x,o.x),wo(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pl=class extends di{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(wo(t,i.x,r.x,o.x),wo(t,i.y,r.y,o.y),wo(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],h=i[o],l=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Vf(a,c.x,h.x,l.x,f.x),Vf(a,c.y,h.y,l.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Tt().fromArray(i))}return this}},Wh=Object.freeze({__proto__:null,ArcCurve:hl,CatmullRomCurve3:ul,CubicBezierCurve:ko,CubicBezierCurve3:fl,EllipseCurve:kr,LineCurve:Ho,LineCurve3:dl,QuadraticBezierCurve:Go,QuadraticBezierCurve3:pl,SplineCurve:Vo}),ml=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let h=0;h<c.length;h++){let l=c[h];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Wh[i.type]().fromJSON(i))}return this}},Wo=class extends ml{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ho(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Go(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new ko(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Vo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let h=new kr(t,e,n,i,r,o,a,c);if(this.curves.length>0){let f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);let l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Hr=class extends Wo{constructor(t){super(t),this.uuid=Qs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Wo().fromJSON(i))}return this}};function mm(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Nd(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,h;if(n&&(r=_m(s,t,r,e)),s.length>80*e){a=1/0,c=1/0;let l=-1/0,f=-1/0;for(let d=e;d<i;d+=e){let u=s[d],g=s[d+1];u<a&&(a=u),g<c&&(c=g),u>l&&(l=u),g>f&&(f=g)}h=Math.max(l-a,f-c),h=h!==0?32767/h:0}return Xo(r,o,e,a,c,h,0),o}function Nd(s,t,e,n,i){let r;if(i===Pm(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Wf(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Wf(o/n|0,s[o],s[o+1],r);return r&&Gr(r,r.next)&&(Yo(r),r=r.next),r}function Zs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Gr(e,e.next)||Mn(e.prev,e,e.next)===0)){if(Yo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Sm(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,h=s.next;if(r?xm(s,n,i,r):gm(s)){t.push(c.i,s.i,h.i),Yo(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=vm(Zs(s),t),Xo(s,t,e,n,i,r,2)):o===2&&ym(s,t,e,n,i,r):Xo(Zs(s),t,e,n,i,r,1);break}}}function gm(s){let t=s.prev,e=s,n=s.next;if(Mn(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,h=n.y,l=Math.min(i,r,o),f=Math.min(a,c,h),d=Math.max(i,r,o),u=Math.max(a,c,h),g=n.next;for(;g!==t;){if(g.x>=l&&g.x<=d&&g.y>=f&&g.y<=u&&_o(i,a,r,c,o,h,g.x,g.y)&&Mn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xm(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Mn(i,r,o)>=0)return!1;let a=i.x,c=r.x,h=o.x,l=i.y,f=r.y,d=o.y,u=Math.min(a,c,h),g=Math.min(l,f,d),x=Math.max(a,c,h),m=Math.max(l,f,d),p=Xh(u,g,t,e,n),y=Xh(x,m,t,e,n),M=s.prevZ,v=s.nextZ;for(;M&&M.z>=p&&v&&v.z<=y;){if(M.x>=u&&M.x<=x&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&_o(a,l,c,f,h,d,M.x,M.y)&&Mn(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=u&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&_o(a,l,c,f,h,d,v.x,v.y)&&Mn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=u&&M.x<=x&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&_o(a,l,c,f,h,d,M.x,M.y)&&Mn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=u&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&_o(a,l,c,f,h,d,v.x,v.y)&&Mn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function vm(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Gr(n,i)&&Bd(n,e,e.next,i)&&qo(n,i)&&qo(i,n)&&(t.push(n.i,e.i,i.i),Yo(e),Yo(e.next),e=s=i),e=e.next}while(e!==s);return Zs(e)}function ym(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rm(o,a)){let c=kd(o,a);o=Zs(o,o.next),c=Zs(c,c.next),Xo(o,t,e,n,i,r,0),Xo(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function _m(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,h=Nd(s,a,c,n,!1);h===h.next&&(h.steiner=!0),i.push(Am(h))}i.sort(Mm);for(let r=0;r<i.length;r++)e=bm(i[r],e);return e}function Mm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function bm(s,t){let e=wm(s,t);if(!e)return t;let n=kd(e,s);return Zs(n,n.next),Zs(e,e.next)}function wm(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(Gr(s,e))return e;do{if(Gr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,h=o.y,l=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Od(i<h?n:r,i,c,h,i<h?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);qo(e,s)&&(f<l||f===l&&(e.x>o.x||e.x===o.x&&Em(o,e)))&&(o=e,l=f)}e=e.next}while(e!==a);return o}function Em(s,t){return Mn(s.prev,s,t.prev)<0&&Mn(t.next,s,s.next)<0}function Sm(s,t,e,n){let i=s;do i.z===0&&(i.z=Xh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Tm(i)}function Tm(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Xh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Am(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Od(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function _o(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Od(s,t,e,n,i,r,o,a)}function Rm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Cm(s,t)&&(qo(s,t)&&qo(t,s)&&Im(s,t)&&(Mn(s.prev,s,t.prev)||Mn(s,t.prev,t))||Gr(s,t)&&Mn(s.prev,s,s.next)>0&&Mn(t.prev,t,t.next)>0)}function Mn(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Gr(s,t){return s.x===t.x&&s.y===t.y}function Bd(s,t,e,n){let i=Ja(Mn(s,t,e)),r=Ja(Mn(s,t,n)),o=Ja(Mn(e,n,s)),a=Ja(Mn(e,n,t));return!!(i!==r&&o!==a||i===0&&Ka(s,e,t)||r===0&&Ka(s,n,t)||o===0&&Ka(e,s,n)||a===0&&Ka(e,t,n))}function Ka(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ja(s){return s>0?1:s<0?-1:0}function Cm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Bd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function qo(s,t){return Mn(s.prev,s,s.next)<0?Mn(s,t,s.next)>=0&&Mn(s,s.prev,t)>=0:Mn(s,t,s.prev)<0||Mn(s,s.next,t)<0}function Im(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function kd(s,t){let e=qh(s.i,s.x,s.y),n=qh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wf(s,t,e,n){let i=qh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function qh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pm(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Yh=class{static triangulate(t,e,n=2){return mm(t,e,n)}},Gs=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Xf(t),qf(n,t);let o=t.length;e.forEach(Xf);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,qf(n,e[c]);let a=Yh.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Xf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function qf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Zo=class s extends Je{constructor(t=new Hr([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let h=t[a];o(h)}this.setAttribute("position",new be(i,3)),this.setAttribute("uv",new be(r,2)),this.computeVertexNormals();function o(a){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Dm,M,v=!1,b,C,L,P;p&&(M=p.getSpacedPoints(l),v=!0,d=!1,b=p.computeFrenetFrames(l,!1),C=new I,L=new I,P=new I),d||(m=0,u=0,g=0,x=0);let T=a.extractPoints(h),S=T.shape,N=T.holes;if(!Gs.isClockWise(S)){S=S.reverse();for(let ct=0,ht=N.length;ct<ht;ct++){let at=N[ct];Gs.isClockWise(at)&&(N[ct]=at.reverse())}}function B(ct){let at=10000000000000001e-36,j=ct[0];for(let F=1;F<=ct.length;F++){let U=F%ct.length,X=ct[U],q=X.x-j.x,$=X.y-j.y,w=q*q+$*$,_=Math.max(Math.abs(X.x),Math.abs(X.y),Math.abs(j.x),Math.abs(j.y)),G=at*_*_;if(w<=G){ct.splice(U,1),F--;continue}j=X}}B(S),N.forEach(B);let O=N.length,k=S;for(let ct=0;ct<O;ct++){let ht=N[ct];S=S.concat(ht)}function V(ct,ht,at){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(ht,at)}let rt=S.length;function J(ct,ht,at){let j,F,U,X=ct.x-ht.x,q=ct.y-ht.y,$=at.x-ct.x,w=at.y-ct.y,_=X*X+q*q,G=X*w-q*$;if(Math.abs(G)>Number.EPSILON){let Q=Math.sqrt(_),gt=Math.sqrt($*$+w*w),ft=ht.x-q/Q,Kt=ht.y+X/Q,Et=at.x-w/gt,Zt=at.y+$/gt,ie=((Et-ft)*w-(Zt-Kt)*$)/(X*w-q*$);j=ft+X*ie-ct.x,F=Kt+q*ie-ct.y;let St=j*j+F*F;if(St<=2)return new Tt(j,F);U=Math.sqrt(St/2)}else{let Q=!1;X>Number.EPSILON?$>Number.EPSILON&&(Q=!0):X<-Number.EPSILON?$<-Number.EPSILON&&(Q=!0):Math.sign(q)===Math.sign(w)&&(Q=!0),Q?(j=-q,F=X,U=Math.sqrt(_)):(j=X,F=q,U=Math.sqrt(_/2))}return new Tt(j/U,F/U)}let z=[];for(let ct=0,ht=k.length,at=ht-1,j=ct+1;ct<ht;ct++,at++,j++)at===ht&&(at=0),j===ht&&(j=0),z[ct]=J(k[ct],k[at],k[j]);let At=[],Ct,Wt=z.concat();for(let ct=0,ht=O;ct<ht;ct++){let at=N[ct];Ct=[];for(let j=0,F=at.length,U=F-1,X=j+1;j<F;j++,U++,X++)U===F&&(U=0),X===F&&(X=0),Ct[j]=J(at[j],at[U],at[X]);At.push(Ct),Wt=Wt.concat(Ct)}let zt;if(m===0)zt=Gs.triangulateShape(k,N);else{let ct=[],ht=[];for(let at=0;at<m;at++){let j=at/m,F=u*Math.cos(j*Math.PI/2),U=g*Math.sin(j*Math.PI/2)+x;for(let X=0,q=k.length;X<q;X++){let $=V(k[X],z[X],U);kt($.x,$.y,-F),j===0&&ct.push($)}for(let X=0,q=O;X<q;X++){let $=N[X];Ct=At[X];let w=[];for(let _=0,G=$.length;_<G;_++){let Q=V($[_],Ct[_],U);kt(Q.x,Q.y,-F),j===0&&w.push(Q)}j===0&&ht.push(w)}}zt=Gs.triangulateShape(ct,ht)}let Ot=zt.length,me=g+x;for(let ct=0;ct<rt;ct++){let ht=d?V(S[ct],Wt[ct],me):S[ct];v?(L.copy(b.normals[0]).multiplyScalar(ht.x),C.copy(b.binormals[0]).multiplyScalar(ht.y),P.copy(M[0]).add(L).add(C),kt(P.x,P.y,P.z)):kt(ht.x,ht.y,0)}for(let ct=1;ct<=l;ct++)for(let ht=0;ht<rt;ht++){let at=d?V(S[ht],Wt[ht],me):S[ht];v?(L.copy(b.normals[ct]).multiplyScalar(at.x),C.copy(b.binormals[ct]).multiplyScalar(at.y),P.copy(M[ct]).add(L).add(C),kt(P.x,P.y,P.z)):kt(at.x,at.y,f/l*ct)}for(let ct=m-1;ct>=0;ct--){let ht=ct/m,at=u*Math.cos(ht*Math.PI/2),j=g*Math.sin(ht*Math.PI/2)+x;for(let F=0,U=k.length;F<U;F++){let X=V(k[F],z[F],j);kt(X.x,X.y,f+at)}for(let F=0,U=N.length;F<U;F++){let X=N[F];Ct=At[F];for(let q=0,$=X.length;q<$;q++){let w=V(X[q],Ct[q],j);v?kt(w.x,w.y+M[l-1].y,M[l-1].x+at):kt(w.x,w.y,f+at)}}}mt(),wt();function mt(){let ct=i.length/3;if(d){let ht=0,at=rt*ht;for(let j=0;j<Ot;j++){let F=zt[j];Xt(F[2]+at,F[1]+at,F[0]+at)}ht=l+m*2,at=rt*ht;for(let j=0;j<Ot;j++){let F=zt[j];Xt(F[0]+at,F[1]+at,F[2]+at)}}else{for(let ht=0;ht<Ot;ht++){let at=zt[ht];Xt(at[2],at[1],at[0])}for(let ht=0;ht<Ot;ht++){let at=zt[ht];Xt(at[0]+rt*l,at[1]+rt*l,at[2]+rt*l)}}n.addGroup(ct,i.length/3-ct,0)}function wt(){let ct=i.length/3,ht=0;It(k,ht),ht+=k.length;for(let at=0,j=N.length;at<j;at++){let F=N[at];It(F,ht),ht+=F.length}n.addGroup(ct,i.length/3-ct,1)}function It(ct,ht){let at=ct.length;for(;--at>=0;){let j=at,F=at-1;F<0&&(F=ct.length-1);for(let U=0,X=l+m*2;U<X;U++){let q=rt*U,$=rt*(U+1),w=ht+j+q,_=ht+F+q,G=ht+F+$,Q=ht+j+$;pt(w,_,G,Q)}}}function kt(ct,ht,at){c.push(ct),c.push(ht),c.push(at)}function Xt(ct,ht,at){Ut(ct),Ut(ht),Ut(at);let j=i.length/3,F=y.generateTopUV(n,i,j-3,j-2,j-1);D(F[0]),D(F[1]),D(F[2])}function pt(ct,ht,at,j){Ut(ct),Ut(ht),Ut(j),Ut(ht),Ut(at),Ut(j);let F=i.length/3,U=y.generateSideWallUV(n,i,F-6,F-3,F-2,F-1);D(U[0]),D(U[1]),D(U[3]),D(U[1]),D(U[2]),D(U[3])}function Ut(ct){i.push(c[ct*3+0]),i.push(c[ct*3+1]),i.push(c[ct*3+2])}function D(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Lm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Wh[i.type]().fromJSON(i)),new s(n,t.options)}},Dm={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[i*3],l=t[i*3+1];return[new Tt(r,o),new Tt(a,c),new Tt(h,l)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],l=t[n*3+1],f=t[n*3+2],d=t[i*3],u=t[i*3+1],g=t[i*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-l)<Math.abs(o-h)?[new Tt(o,1-c),new Tt(h,1-f),new Tt(d,1-g),new Tt(x,1-p)]:[new Tt(a,1-c),new Tt(l,1-f),new Tt(u,1-g),new Tt(m,1-p)]}};function Lm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $o=class s extends Je{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=We(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],l=1/e,f=new I,d=new Tt,u=new I,g=new I,x=new I,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,u.x=p*1,u.y=-m,u.z=p*0,x.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),c.push(u.x,u.y,u.z),x.copy(g)}for(let y=0;y<=e;y++){let M=n+y*l*i,v=Math.sin(M),b=Math.cos(M);for(let C=0;C<=t.length-1;C++){f.x=t[C].x*v,f.y=t[C].y,f.z=t[C].x*b,o.push(f.x,f.y,f.z),d.x=y/e,d.y=C/(t.length-1),a.push(d.x,d.y);let L=c[3*C+0]*v,P=c[3*C+1],T=c[3*C+0]*b;h.push(L,P,T)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let v=M+y*t.length,b=v,C=v+t.length,L=v+t.length+1,P=v+1;r.push(b,C,P),r.push(L,P,C)}this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("uv",new be(a,2)),this.setAttribute("normal",new be(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var sn=class s extends Je{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),h=a+1,l=c+1,f=t/a,d=e/c,u=[],g=[],x=[],m=[];for(let p=0;p<l;p++){let y=p*d-o;for(let M=0;M<h;M++){let v=M*f-r;g.push(v,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let M=y+h*p,v=y+h*(p+1),b=y+1+h*(p+1),C=y+1+h*p;u.push(M,v,C),u.push(v,b,C)}this.setIndex(u),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(x,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Ko=class s extends Je{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],h=[],l=[],f=t,d=(e-t)/i,u=new I,g=new Tt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;u.x=f*Math.cos(p),u.y=f*Math.sin(p),c.push(u.x,u.y,u.z),h.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,l.push(g.x,g.y)}f+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,M=y,v=y+n+1,b=y+n+2,C=y+1;a.push(M,v,C),a.push(v,b,C)}}this.setIndex(a),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var zn=class s extends Je{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,l=[],f=new I,d=new I,u=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],M=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){let C=b/e;f.x=-t*Math.cos(i+C*r)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(i+C*r)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(C+v,1-M),y.push(h++)}l.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let M=l[p][y+1],v=l[p][y],b=l[p+1][y],C=l[p+1][y+1];(p!==0||o>0)&&u.push(M,v,C),(p!==n-1||c<Math.PI)&&u.push(v,b,C)}this.setIndex(u),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(x,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ns=class s extends Je{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],h=[],l=new I,f=new I,d=new I;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){let x=g/i*r,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),d.subVectors(f,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){let x=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,y=(i+1)*u+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Yt=class extends ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},$s=class extends Yt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Vr=class extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},gl=class extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ja(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Fm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ks=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xl=class extends Ks{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case kh:r=t,a=2*e-n;break;case Hh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kh:o=t,c=2*n-e;break;case Hh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-u)*m+(1.5+u)*x+.5*g,v=u*m-u*x;for(let b=0;b!==a;++b)r[b]=p*o[l+b]+y*o[h+b]+M*o[c+b]+v*o[f+b];return r}},vl=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=(n-e)/(i-e),f=1-l;for(let d=0;d!==a;++d)r[d]=o[h+d]*f+o[c+d]*l;return r}},yl=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ja(e,this.TimeBufferType),this.values=ja(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ja(t.times,Array),values:ja(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case So:e=this.InterpolantFactoryMethodDiscrete;break;case il:e=this.InterpolantFactoryMethodLinear;break;case Qa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Fm(i))for(let a=0,c=i.length;a!==c;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],l=t[a+1];if(h!==l&&(a!==1||h!==t[0]))if(i)c=!0;else{let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[d+g]||x!==e[u+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=il;var ws=class extends pi{constructor(t,e,n){super(t,e,n)}};ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=So;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};_l.prototype.ValueTypeName="color";var Ml=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};Ml.prototype.ValueTypeName="number";var bl=class extends Ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),h=t*a;for(let l=h+a;h!==l;h+=4)Ge.slerpFlat(r,0,o,h-a,o,h,c);return r}},Jo=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}};Jo.prototype.ValueTypeName="quaternion";Jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends pi{constructor(t,e,n){super(t,e,n)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=So;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};wl.prototype.ValueTypeName="vector";var El=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,f){return h.push(l,f),this},this.removeHandler=function(l){let f=h.indexOf(l);return f!==-1&&h.splice(f,2),this},this.getHandler=function(l){for(let f=0,d=h.length;f<d;f+=2){let u=h[f],g=h[f+1];if(u.global&&(u.lastIndex=0),u.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Hd=new El,Sl=class{constructor(t){this.manager=t!==void 0?t:Hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=class extends Ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},jo=class extends Wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Oh=new ne,Yf=new I,Zf=new I,Tl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yf),Zf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zf),e.updateMatrixWorld(),Oh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zh=class extends Tl{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Xs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Qo=class extends Wr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var is=class extends Fo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$h=class extends Tl{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ta=class extends Wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ea=class extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Al=class extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},na=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var gu="\\[\\]\\.:\\/",zm=new RegExp("["+gu+"]","g"),xu="[^"+gu+"]",Um="[^"+gu.replace("\\.","")+"]",Nm=/((?:WC+[\/:])*)/.source.replace("WC",xu),Om=/(WCOD+)?/.source.replace("WCOD",Um),Bm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),km=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),Hm=new RegExp("^"+Nm+Om+Bm+km+"$"),Gm=["material","materials","bones","map"],Kh=class{constructor(t,e,n){let i=n||mn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},mn=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zm,"")}static parseTrackName(t){let e=Hm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Gm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mn.Composite=Kh;mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mn.prototype.GetterByBindingType=[mn.prototype._getValue_direct,mn.prototype._getValue_array,mn.prototype._getValue_arrayElement,mn.prototype._getValue_toArray];mn.prototype.SetterByBindingTypeAndVersioning=[[mn.prototype._setValue_direct,mn.prototype._setValue_direct_setNeedsUpdate,mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_array,mn.prototype._setValue_array_setNeedsUpdate,mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_arrayElement,mn.prototype._setValue_arrayElement_setNeedsUpdate,mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_fromArray,mn.prototype._setValue_fromArray_setNeedsUpdate,mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MM=new Float32Array(1);function vu(s,t,e,n){let i=Vm(n);switch(e){case au:return s*t;case Gl:return s*t/i.components*i.byteLength;case Vl:return s*t/i.components*i.byteLength;case cu:return s*t*2/i.components*i.byteLength;case Wl:return s*t*2/i.components*i.byteLength;case lu:return s*t*3/i.components*i.byteLength;case bi:return s*t*4/i.components*i.byteLength;case Xl:return s*t*4/i.components*i.byteLength;case ra:case oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case aa:case la:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yl:case $l:return Math.max(s,16)*Math.max(t,8)/4;case ql:case Zl:return Math.max(s,8)*Math.max(t,8)/2;case Kl:case Jl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ec:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case nc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ic:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case sc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case hc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case dc:case pc:case mc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gc:case xc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case vc:case yc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vm(s){switch(s){case Di:case iu:return{byteLength:1,components:1};case Xr:case su:case Bn:return{byteLength:2,components:1};case kl:case Hl:return{byteLength:2,components:4};case Ts:case Bl:case Li:return{byteLength:4,components:1};case ru:case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function up(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Km(s){let t=new WeakMap;function e(a,c){let h=a.array,l=a.usage,f=h.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,h,l),a.onUploadCallback();let u;if(h instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)u=s.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=s.SHORT;else if(h instanceof Uint32Array)u=s.UNSIGNED_INT;else if(h instanceof Int32Array)u=s.INT;else if(h instanceof Int8Array)u=s.BYTE;else if(h instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){let l=c.array,f=c.updateRanges;if(s.bindBuffer(h,a),f.length===0)s.bufferSubData(h,0,l);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],x=f[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let x=f[u];s.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:i,remove:r,update:o}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jm=`#ifdef USE_ALPHAHASH
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
#endif`,Qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ig=`#ifdef USE_AOMAP
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
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
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
#endif`,og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hg=`#ifdef USE_IRIDESCENCE
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
#endif`,ug=`#ifdef USE_BUMPMAP
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_g=`#define PI 3.141592653589793
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
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bg=`vec3 transformedNormal = objectNormal;
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
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
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
	
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
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
}`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gg=`uniform bool receiveShadow;
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
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zg=`PhysicalMaterial material;
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
#endif`,$g=`struct PhysicalMaterial {
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
}`,Kg=`
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ox=`#if defined( USE_POINTS_UV )
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
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yx=`#ifdef USE_NORMALMAP
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
#endif`,_x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
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
#endif`,Px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zx=`float getShadowMask() {
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
}`,Ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wx=`#ifdef USE_TRANSMISSION
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
#endif`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`#include <common>
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
}`,iv=`#if DEPTH_PACKING == 3200
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
}`,sv=`#define DISTANCE
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
}`,rv=`#define DISTANCE
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
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`uniform float scale;
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
}`,cv=`uniform vec3 diffuse;
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
}`,hv=`#include <common>
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
}`,uv=`uniform vec3 diffuse;
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
}`,fv=`#define LAMBERT
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
}`,dv=`#define LAMBERT
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
}`,pv=`#define MATCAP
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
}`,mv=`#define MATCAP
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
}`,gv=`#define NORMAL
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
}`,xv=`#define NORMAL
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
}`,vv=`#define PHONG
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
}`,yv=`#define PHONG
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
}`,_v=`#define STANDARD
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
}`,Mv=`#define STANDARD
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
}`,bv=`#define TOON
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
}`,wv=`#define TOON
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
}`,Ev=`uniform float size;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,Tv=`#include <common>
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
}`,Av=`uniform vec3 color;
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
}`,Rv=`uniform float rotation;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:Jm,alphahash_pars_fragment:jm,alphamap_fragment:Qm,alphamap_pars_fragment:tg,alphatest_fragment:eg,alphatest_pars_fragment:ng,aomap_fragment:ig,aomap_pars_fragment:sg,batching_pars_vertex:rg,batching_vertex:og,begin_vertex:ag,beginnormal_vertex:lg,bsdfs:cg,iridescence_fragment:hg,bumpmap_pars_fragment:ug,clipping_planes_fragment:fg,clipping_planes_pars_fragment:dg,clipping_planes_pars_vertex:pg,clipping_planes_vertex:mg,color_fragment:gg,color_pars_fragment:xg,color_pars_vertex:vg,color_vertex:yg,common:_g,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:bg,displacementmap_pars_vertex:wg,displacementmap_vertex:Eg,emissivemap_fragment:Sg,emissivemap_pars_fragment:Tg,colorspace_fragment:Ag,colorspace_pars_fragment:Rg,envmap_fragment:Cg,envmap_common_pars_fragment:Ig,envmap_pars_fragment:Pg,envmap_pars_vertex:Dg,envmap_physical_pars_fragment:Vg,envmap_vertex:Lg,fog_vertex:Fg,fog_pars_vertex:zg,fog_fragment:Ug,fog_pars_fragment:Ng,gradientmap_pars_fragment:Og,lightmap_pars_fragment:Bg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Hg,lights_pars_begin:Gg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:qg,lights_phong_pars_fragment:Yg,lights_physical_fragment:Zg,lights_physical_pars_fragment:$g,lights_fragment_begin:Kg,lights_fragment_maps:Jg,lights_fragment_end:jg,logdepthbuf_fragment:Qg,logdepthbuf_pars_fragment:tx,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:nx,map_fragment:ix,map_pars_fragment:sx,map_particle_fragment:rx,map_particle_pars_fragment:ox,metalnessmap_fragment:ax,metalnessmap_pars_fragment:lx,morphinstance_vertex:cx,morphcolor_vertex:hx,morphnormal_vertex:ux,morphtarget_pars_vertex:fx,morphtarget_vertex:dx,normal_fragment_begin:px,normal_fragment_maps:mx,normal_pars_fragment:gx,normal_pars_vertex:xx,normal_vertex:vx,normalmap_pars_fragment:yx,clearcoat_normal_fragment_begin:_x,clearcoat_normal_fragment_maps:Mx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:wx,opaque_fragment:Ex,packing:Sx,premultiplied_alpha_fragment:Tx,project_vertex:Ax,dithering_fragment:Rx,dithering_pars_fragment:Cx,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Px,shadowmap_pars_fragment:Dx,shadowmap_pars_vertex:Lx,shadowmap_vertex:Fx,shadowmask_pars_fragment:zx,skinbase_vertex:Ux,skinning_pars_vertex:Nx,skinning_vertex:Ox,skinnormal_vertex:Bx,specularmap_fragment:kx,specularmap_pars_fragment:Hx,tonemapping_fragment:Gx,tonemapping_pars_fragment:Vx,transmission_fragment:Wx,transmission_pars_fragment:Xx,uv_pars_fragment:qx,uv_pars_vertex:Yx,uv_vertex:Zx,worldpos_vertex:$x,background_vert:Kx,background_frag:Jx,backgroundCube_vert:jx,backgroundCube_frag:Qx,cube_vert:tv,cube_frag:ev,depth_vert:nv,depth_frag:iv,distanceRGBA_vert:sv,distanceRGBA_frag:rv,equirect_vert:ov,equirect_frag:av,linedashed_vert:lv,linedashed_frag:cv,meshbasic_vert:hv,meshbasic_frag:uv,meshlambert_vert:fv,meshlambert_frag:dv,meshmatcap_vert:pv,meshmatcap_frag:mv,meshnormal_vert:gv,meshnormal_frag:xv,meshphong_vert:vv,meshphong_frag:yv,meshphysical_vert:_v,meshphysical_frag:Mv,meshtoon_vert:bv,meshtoon_frag:wv,points_vert:Ev,points_frag:Sv,shadow_vert:Tv,shadow_frag:Av,sprite_vert:Rv,sprite_frag:Cv},re={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Hi={basic:{uniforms:Qn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Qn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Qn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Qn([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Qn([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Qn([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Qn([re.points,re.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Qn([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Qn([re.common,re.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Qn([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Qn([re.sprite,re.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Qn([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Qn([re.lights,re.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Hi.physical={uniforms:Qn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var Mc={r:0,b:0,g:0},er=new Dn,Iv=new ne;function Pv(s,t,e,n,i,r,o){let a=new Ht(0),c=r===!0?0:1,h,l,f=null,d=0,u=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1,b=g(M);b===null?p(a,c):b&&b.isColor&&(p(b,1),v=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){let b=g(v);b&&(b.isCubeTexture||b.mapping===ia)?(l===void 0&&(l=new $t(new pe(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:tr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),er.copy(v.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(er)),l.material.toneMapped=je.getTransfer(b.colorSpace)!==on,(f!==b||d!==b.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,f=b,d=b.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new $t(new sn(2,2),new nn({name:"BackgroundMaterial",uniforms:tr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=je.getTransfer(b.colorSpace)!==on,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=b,d=b.version,u=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,v){M.getRGB(Mc,pu(s)),n.buffers.color.setClear(Mc.r,Mc.g,Mc.b,v,o)}function y(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:x,addToRenderList:m,dispose:y}}function Dv(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(S,N,Y,B,O){let k=!1,V=f(B,Y,N);r!==V&&(r=V,h(r.object)),k=u(S,B,Y,O),k&&g(S,B,Y,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(S,N,Y,B),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function h(S){return s.bindVertexArray(S)}function l(S){return s.deleteVertexArray(S)}function f(S,N,Y){let B=Y.wireframe===!0,O=n[S.id];O===void 0&&(O={},n[S.id]=O);let k=O[N.id];k===void 0&&(k={},O[N.id]=k);let V=k[B];return V===void 0&&(V=d(c()),k[B]=V),V}function d(S){let N=[],Y=[],B=[];for(let O=0;O<e;O++)N[O]=0,Y[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:B,object:S,attributes:{},index:null}}function u(S,N,Y,B){let O=r.attributes,k=N.attributes,V=0,rt=Y.getAttributes();for(let J in rt)if(rt[J].location>=0){let At=O[J],Ct=k[J];if(Ct===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(Ct=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(Ct=S.instanceColor)),At===void 0||At.attribute!==Ct||Ct&&At.data!==Ct.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function g(S,N,Y,B){let O={},k=N.attributes,V=0,rt=Y.getAttributes();for(let J in rt)if(rt[J].location>=0){let At=k[J];At===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(At=S.instanceColor));let Ct={};Ct.attribute=At,At&&At.data&&(Ct.data=At.data),O[J]=Ct,V++}r.attributes=O,r.attributesNum=V,r.index=B}function x(){let S=r.newAttributes;for(let N=0,Y=S.length;N<Y;N++)S[N]=0}function m(S){p(S,0)}function p(S,N){let Y=r.newAttributes,B=r.enabledAttributes,O=r.attributeDivisors;Y[S]=1,B[S]===0&&(s.enableVertexAttribArray(S),B[S]=1),O[S]!==N&&(s.vertexAttribDivisor(S,N),O[S]=N)}function y(){let S=r.newAttributes,N=r.enabledAttributes;for(let Y=0,B=N.length;Y<B;Y++)N[Y]!==S[Y]&&(s.disableVertexAttribArray(Y),N[Y]=0)}function M(S,N,Y,B,O,k,V){V===!0?s.vertexAttribIPointer(S,N,Y,O,k):s.vertexAttribPointer(S,N,Y,B,O,k)}function v(S,N,Y,B){x();let O=B.attributes,k=Y.getAttributes(),V=N.defaultAttributeValues;for(let rt in k){let J=k[rt];if(J.location>=0){let z=O[rt];if(z===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(z=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(z=S.instanceColor)),z!==void 0){let At=z.normalized,Ct=z.itemSize,Wt=t.get(z);if(Wt===void 0)continue;let zt=Wt.buffer,Ot=Wt.type,me=Wt.bytesPerElement,mt=Ot===s.INT||Ot===s.UNSIGNED_INT||z.gpuType===Bl;if(z.isInterleavedBufferAttribute){let wt=z.data,It=wt.stride,kt=z.offset;if(wt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<J.locationSize;Xt++)p(J.location+Xt,wt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Xt=0;Xt<J.locationSize;Xt++)m(J.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let Xt=0;Xt<J.locationSize;Xt++)M(J.location+Xt,Ct/J.locationSize,Ot,At,It*me,(kt+Ct/J.locationSize*Xt)*me,mt)}else{if(z.isInstancedBufferAttribute){for(let wt=0;wt<J.locationSize;wt++)p(J.location+wt,z.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let wt=0;wt<J.locationSize;wt++)m(J.location+wt);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let wt=0;wt<J.locationSize;wt++)M(J.location+wt,Ct/J.locationSize,Ot,At,Ct*me,Ct/J.locationSize*wt*me,mt)}}else if(V!==void 0){let At=V[rt];if(At!==void 0)switch(At.length){case 2:s.vertexAttrib2fv(J.location,At);break;case 3:s.vertexAttrib3fv(J.location,At);break;case 4:s.vertexAttrib4fv(J.location,At);break;default:s.vertexAttrib1fv(J.location,At)}}}}y()}function b(){P();for(let S in n){let N=n[S];for(let Y in N){let B=N[Y];for(let O in B)l(B[O].object),delete B[O];delete N[Y]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let N=n[S.id];for(let Y in N){let B=N[Y];for(let O in B)l(B[O].object),delete B[O];delete N[Y]}delete n[S.id]}function L(S){for(let N in n){let Y=n[N];if(Y[S.id]===void 0)continue;let B=Y[S.id];for(let O in B)l(B[O].object),delete B[O];delete Y[S.id]}}function P(){T(),o=!0,r!==i&&(r=i,h(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Lv(s,t,e){let n;function i(h){n=h}function r(h,l){s.drawArrays(n,h,l),e.update(l,n,1)}function o(h,l,f){f!==0&&(s.drawArraysInstanced(n,h,l,f),e.update(l,n,f))}function a(h,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,f);let u=0;for(let g=0;g<f;g++)u+=l[g];e.update(u,n,1)}function c(h,l,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<h.length;g++)o(h[g],l[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=l[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Fv(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==bi&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let P=L===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Di&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Li&&!P)}function c(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:b,maxSamples:C}}function zv(s){let t=this,e=null,n=0,i=!1,r=!1,o=new yi,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=l(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?l(null):h();else{let y=r?0:n,M=y*4,v=p.clippingState||null;c.value=v,v=l(g,d,M,u);for(let b=0;b!==M;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,d,u,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=u+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=u;M!==x;++M,v+=4)o.copy(f[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Uv(s){let t=new WeakMap;function e(o,a){return a===Ul?o.mapping=Js:a===Nl&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ul||a===Nl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new Ur(c.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var $r=4,Gd=[.125,.215,.35,.446,.526,.582],sr=20,yu=new is,Vd=new Ht,_u=null,Mu=0,bu=0,wu=!1,ir=(1+Math.sqrt(5))/2,Zr=1/ir,Wd=[new I(-ir,Zr,0),new I(ir,Zr,0),new I(-Zr,0,ir),new I(Zr,0,ir),new I(0,ir,-Zr),new I(0,ir,Zr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Nv=new I,Jr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Nv}=r;_u=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_u,Mu,bu),this._renderer.xr.enabled=wu,t.scissorTest=!1,bc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_u=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Bn,format:bi,colorSpace:Ws,depthBuffer:!1},i=Xd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ov(r)),this._blurMaterial=Bv(r,t,e)}return i}_compileMaterial(t){let e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,yu)}_sceneToCubeUV(t,e,n,i,r){let c=new On(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(Vd),f.toneMapping=Pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));let x=new bn({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),m=new $t(new pe,x),p=!1,y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,p=!0):(x.color.copy(Vd),p=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(c.up.set(0,h[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[M],r.y,r.z)):v===1?(c.up.set(0,0,h[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[M],r.z)):(c.up.set(0,h[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[M]));let b=this._cubeSize;bc(i,v*b,M>2?b:0,b,b),f.setRenderTarget(i),p&&f.render(m,c),f.render(t,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=d,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Js||t.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;bc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,yu)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wd[(i-r-1)%Wd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,f=new $t(this._lodPlanes[i],h),d=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*sr-1),x=r/g,m=isFinite(r)?1+Math.floor(l*x):sr;m>sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);let p=[],y=0;for(let L=0;L<sr;++L){let P=L/x,T=Math.exp(-P*P/2);p.push(T),L===0?y+=T:L<m&&(y+=2*T)}for(let L=0;L<p.length;L++)p[L]=p[L]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let v=this._sizeLods[i],b=3*v*(i>M-$r?i-M+$r:0),C=4*(this._cubeSize-v);bc(e,b,C,3*v,2*v),c.setRenderTarget(e),c.render(f,yu)}};function Ov(s){let t=[],e=[],n=[],i=s,r=s-$r+1+Gd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-$r?c=Gd[o-s+$r-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),l=-h,f=1+h,d=[l,l,f,l,f,f,l,l,f,f,l,f],u=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*u),M=new Float32Array(m*g*u),v=new Float32Array(p*g*u);for(let C=0;C<u;C++){let L=C%3*2/3-1,P=C>2?0:-1,T=[L,P,0,L+2/3,P,0,L+2/3,P+1,0,L,P,0,L+2/3,P+1,0,L,P+1,0];y.set(T,x*g*C),M.set(d,m*g*C);let S=[C,C,C,C,C,C];v.set(S,p*g*C)}let b=new Je;b.setAttribute("position",new vn(y,x)),b.setAttribute("uv",new vn(M,m)),b.setAttribute("faceIndex",new vn(v,p)),t.push(b),i>$r&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xd(s,t,e){let n=new gn(s,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bc(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Bv(s,t,e){let n=new Float32Array(sr),i=new I(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function qd(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Yd(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function kv(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===Ul||c===Nl,l=c===Js||c===js;if(h||l){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Jr(s)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return h&&u&&u.height>0||l&&u&&i(u)?(e===null&&(e=new Jr(s)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function i(a){let c=0,h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hv(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gv(s,t,e,n){let i={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let u in d)t.update(d[u],s.ARRAY_BUFFER)}function h(f){let d=[],u=f.index,g=f.attributes.position,x=0;if(u!==null){let y=u.array;x=u.version;for(let M=0,v=y.length;M<v;M+=3){let b=y[M+0],C=y[M+1],L=y[M+2];d.push(b,C,C,L,L,b)}}else if(g!==void 0){let y=g.array;x=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let b=M+0,C=M+1,L=M+2;d.push(b,C,C,L,L,b)}}else return;let m=new(du(d)?Lo:Do)(d,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function l(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:l}}function Vv(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function h(d,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,d*o,g),e.update(u,n,g))}function l(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function f(d,u,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,u[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=u[y]*x[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function Wv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Xv(s,t,e){let n=new WeakMap,i=new Ze;function r(o,a,c){let h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=l!==void 0?l.length:0,d=n.get(a);if(d===void 0||d.count!==f){let T=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;u===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let C=new Float32Array(v*b*4*f),L=new Co(C,v,b,f);L.type=Li,L.needsUpdate=!0;let P=M*4;for(let S=0;S<f;S++){let N=m[S],Y=p[S],B=y[S],O=v*b*4*S;for(let k=0;k<N.count;k++){let V=k*P;u===!0&&(i.fromBufferAttribute(N,k),C[O+V+0]=i.x,C[O+V+1]=i.y,C[O+V+2]=i.z,C[O+V+3]=0),g===!0&&(i.fromBufferAttribute(Y,k),C[O+V+4]=i.x,C[O+V+5]=i.y,C[O+V+6]=i.z,C[O+V+7]=0),x===!0&&(i.fromBufferAttribute(B,k),C[O+V+8]=i.x,C[O+V+9]=i.y,C[O+V+10]=i.z,C[O+V+11]=B.itemSize===4?i.w:1)}}d={count:f,texture:L,size:new Tt(v,b)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<h.length;x++)u+=h[x];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function qv(s,t,e,n){let i=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,f=t.get(c,l);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return f}function o(){i=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var fp=new ii,Zd=new es(1,1),dp=new Co,pp=new ol,mp=new zo,$d=[],Kd=[],Jd=new Float32Array(16),jd=new Float32Array(9),Qd=new Float32Array(4);function jr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=$d[i];if(r===void 0&&(r=new Float32Array(i),$d[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function kn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Hn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Sc(s,t){let e=Kd[t];e===void 0&&(e=new Int32Array(t),Kd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Yv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Zv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;s.uniform2fv(this.addr,t),Hn(e,t)}}function $v(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(kn(e,t))return;s.uniform3fv(this.addr,t),Hn(e,t)}}function Kv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;s.uniform4fv(this.addr,t),Hn(e,t)}}function Jv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(kn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Hn(e,t)}else{if(kn(e,n))return;Qd.set(n),s.uniformMatrix2fv(this.addr,!1,Qd),Hn(e,n)}}function jv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(kn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Hn(e,t)}else{if(kn(e,n))return;jd.set(n),s.uniformMatrix3fv(this.addr,!1,jd),Hn(e,n)}}function Qv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(kn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Hn(e,t)}else{if(kn(e,n))return;Jd.set(n),s.uniformMatrix4fv(this.addr,!1,Jd),Hn(e,n)}}function t1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function e1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;s.uniform2iv(this.addr,t),Hn(e,t)}}function n1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(kn(e,t))return;s.uniform3iv(this.addr,t),Hn(e,t)}}function i1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;s.uniform4iv(this.addr,t),Hn(e,t)}}function s1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function r1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;s.uniform2uiv(this.addr,t),Hn(e,t)}}function o1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(kn(e,t))return;s.uniform3uiv(this.addr,t),Hn(e,t)}}function a1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;s.uniform4uiv(this.addr,t),Hn(e,t)}}function l1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Zd.compareFunction=ca,r=Zd):r=fp,e.setTexture2D(t||r,i)}function c1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pp,i)}function h1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mp,i)}function u1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||dp,i)}function f1(s){switch(s){case 5126:return Yv;case 35664:return Zv;case 35665:return $v;case 35666:return Kv;case 35674:return Jv;case 35675:return jv;case 35676:return Qv;case 5124:case 35670:return t1;case 35667:case 35671:return e1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return s1;case 36294:return r1;case 36295:return o1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return u1}}function d1(s,t){s.uniform1fv(this.addr,t)}function p1(s,t){let e=jr(t,this.size,2);s.uniform2fv(this.addr,e)}function m1(s,t){let e=jr(t,this.size,3);s.uniform3fv(this.addr,e)}function g1(s,t){let e=jr(t,this.size,4);s.uniform4fv(this.addr,e)}function x1(s,t){let e=jr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function v1(s,t){let e=jr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function y1(s,t){let e=jr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function _1(s,t){s.uniform1iv(this.addr,t)}function M1(s,t){s.uniform2iv(this.addr,t)}function b1(s,t){s.uniform3iv(this.addr,t)}function w1(s,t){s.uniform4iv(this.addr,t)}function E1(s,t){s.uniform1uiv(this.addr,t)}function S1(s,t){s.uniform2uiv(this.addr,t)}function T1(s,t){s.uniform3uiv(this.addr,t)}function A1(s,t){s.uniform4uiv(this.addr,t)}function R1(s,t,e){let n=this.cache,i=t.length,r=Sc(e,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||fp,r[o])}function C1(s,t,e){let n=this.cache,i=t.length,r=Sc(e,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||pp,r[o])}function I1(s,t,e){let n=this.cache,i=t.length,r=Sc(e,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||mp,r[o])}function P1(s,t,e){let n=this.cache,i=t.length,r=Sc(e,i);kn(n,r)||(s.uniform1iv(this.addr,r),Hn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||dp,r[o])}function D1(s){switch(s){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return x1;case 35675:return v1;case 35676:return y1;case 5124:case 35670:return _1;case 35667:case 35671:return M1;case 35668:case 35672:return b1;case 35669:case 35673:return w1;case 5125:return E1;case 36294:return S1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return P1}}var Su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f1(e.type)}},Tu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D1(e.type)}},Au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Eu=/(\w+)(\])?(\[|\.)?/g;function tp(s,t){s.seq.push(t),s.map[t.id]=t}function L1(s,t,e){let n=s.name,i=n.length;for(Eu.lastIndex=0;;){let r=Eu.exec(n),o=Eu.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===i){tp(e,h===void 0?new Su(a,s,t):new Tu(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Au(a),tp(e,f)),e=f}}}var Kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);L1(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function ep(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var F1=37297,z1=0;function U1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var np=new Oe;function N1(s){je._getMatrix(np,je.workingColorSpace,s);let t=`mat3( ${np.elements.map(e=>e.toFixed(4))} )`;switch(je.getTransfer(s)){case To:return[t,"LinearTransferOETF"];case on:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ip(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+U1(s.getShaderSource(t),a)}else return r}function O1(s,t){let e=N1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function B1(s,t){let e;switch(t){case xd:e="Linear";break;case vd:e="Reinhard";break;case yd:e="Cineon";break;case _d:e="ACESFilmic";break;case bd:e="AgX";break;case wd:e="Neutral";break;case Md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wc=new I;function k1(){je.getLuminanceCoefficients(wc);let s=wc.x.toFixed(4),t=wc.y.toFixed(4),e=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function G1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ha(s){return s!==""}function sp(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(s){return s.replace(W1,q1)}var X1=new Map;function q1(s,t){let e=Le[t];if(e===void 0){let n=X1.get(t);if(n!==void 0)e=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ru(e)}var Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function op(s){return s.replace(Y1,Z1)}function Z1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ap(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function $1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(t="SHADOWMAP_TYPE_VSM"),t}function K1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case js:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function j1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eu:t="ENVMAP_BLENDING_MULTIPLY";break;case md:t="ENVMAP_BLENDING_MIX";break;case gd:t="ENVMAP_BLENDING_ADD";break}return t}function Q1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ty(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=$1(e),h=K1(e),l=J1(e),f=j1(e),d=Q1(e),u=H1(e),g=G1(r),x=i.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ha).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(m=[ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?Le.tonemapping_pars_fragment:"",e.toneMapping!==Pi?B1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,O1("linearToOutputTexel",e.outputColorSpace),k1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),o=Ru(o),o=sp(o,e),o=rp(o,e),a=Ru(a),a=sp(a,e),a=rp(a,e),o=op(o),a=op(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+m+o,v=y+p+a,b=ep(i,i.VERTEX_SHADER,M),C=ep(i,i.FRAGMENT_SHADER,v);i.attachShader(x,b),i.attachShader(x,C),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function L(N){if(s.debug.checkShaderErrors){let Y=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(b)||"",O=i.getShaderInfoLog(C)||"",k=Y.trim(),V=B.trim(),rt=O.trim(),J=!0,z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,C);else{let At=ip(i,b,"vertex"),Ct=ip(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+At+`
`+Ct)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||rt==="")&&(z=!1);z&&(N.diagnostics={runnable:J,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:rt,prefix:p}})}i.deleteShader(b),i.deleteShader(C),P=new Kr(i,x),T=V1(i,x)}let P;this.getUniforms=function(){return P===void 0&&L(this),P};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,F1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=C,this}var ey=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Iu(t),e.set(t,n)),n}},Iu=class{constructor(t){this.id=ey++,this.code=t,this.usedTimes=0}};function ny(s,t,e,n,i,r,o){let a=new Po,c=new Cu,h=new Set,l=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return h.add(T),T===0?"uv":`uv${T}`}function m(T,S,N,Y,B){let O=Y.fog,k=B.geometry,V=T.isMeshStandardMaterial?Y.environment:null,rt=(T.isMeshStandardMaterial?e:t).get(T.envMap||V),J=rt&&rt.mapping===ia?rt.image.height:null,z=g[T.type];T.precision!==null&&(u=i.getMaxPrecision(T.precision),u!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",u,"instead."));let At=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ct=At!==void 0?At.length:0,Wt=0;k.morphAttributes.position!==void 0&&(Wt=1),k.morphAttributes.normal!==void 0&&(Wt=2),k.morphAttributes.color!==void 0&&(Wt=3);let zt,Ot,me,mt;if(z){let R=Hi[z];zt=R.vertexShader,Ot=R.fragmentShader}else zt=T.vertexShader,Ot=T.fragmentShader,c.update(T),me=c.getVertexShaderID(T),mt=c.getFragmentShaderID(T);let wt=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),kt=B.isInstancedMesh===!0,Xt=B.isBatchedMesh===!0,pt=!!T.map,Ut=!!T.matcap,D=!!rt,ct=!!T.aoMap,ht=!!T.lightMap,at=!!T.bumpMap,j=!!T.normalMap,F=!!T.displacementMap,U=!!T.emissiveMap,X=!!T.metalnessMap,q=!!T.roughnessMap,$=T.anisotropy>0,w=T.clearcoat>0,_=T.dispersion>0,G=T.iridescence>0,Q=T.sheen>0,gt=T.transmission>0,ft=$&&!!T.anisotropyMap,Kt=w&&!!T.clearcoatMap,Et=w&&!!T.clearcoatNormalMap,Zt=w&&!!T.clearcoatRoughnessMap,ie=G&&!!T.iridescenceMap,St=G&&!!T.iridescenceThicknessMap,Jt=Q&&!!T.sheenColorMap,he=Q&&!!T.sheenRoughnessMap,ue=!!T.specularMap,qt=!!T.specularColorMap,de=!!T.specularIntensityMap,Z=gt&&!!T.transmissionMap,Pt=gt&&!!T.thicknessMap,Gt=!!T.gradientMap,te=!!T.alphaMap,Rt=T.alphaTest>0,yt=!!T.alphaHash,ae=!!T.extensions,Te=Pi;T.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Te=s.toneMapping);let Ke={shaderID:z,shaderType:T.type,shaderName:T.name,vertexShader:zt,fragmentShader:Ot,defines:T.defines,customVertexShaderID:me,customFragmentShaderID:mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:u,batching:Xt,batchingColor:Xt&&B._colorsTexture!==null,instancing:kt,instancingColor:kt&&B.instanceColor!==null,instancingMorph:kt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Ws,alphaToCoverage:!!T.alphaToCoverage,map:pt,matcap:Ut,envMap:D,envMapMode:D&&rt.mapping,envMapCubeUVHeight:J,aoMap:ct,lightMap:ht,bumpMap:at,normalMap:j,displacementMap:d&&F,emissiveMap:U,normalMapObjectSpace:j&&T.normalMapType===Td,normalMapTangentSpace:j&&T.normalMapType===hu,metalnessMap:X,roughnessMap:q,anisotropy:$,anisotropyMap:ft,clearcoat:w,clearcoatMap:Kt,clearcoatNormalMap:Et,clearcoatRoughnessMap:Zt,dispersion:_,iridescence:G,iridescenceMap:ie,iridescenceThicknessMap:St,sheen:Q,sheenColorMap:Jt,sheenRoughnessMap:he,specularMap:ue,specularColorMap:qt,specularIntensityMap:de,transmission:gt,transmissionMap:Z,thicknessMap:Pt,gradientMap:Gt,opaque:T.transparent===!1&&T.blending===ji&&T.alphaToCoverage===!1,alphaMap:te,alphaTest:Rt,alphaHash:yt,combine:T.combine,mapUv:pt&&x(T.map.channel),aoMapUv:ct&&x(T.aoMap.channel),lightMapUv:ht&&x(T.lightMap.channel),bumpMapUv:at&&x(T.bumpMap.channel),normalMapUv:j&&x(T.normalMap.channel),displacementMapUv:F&&x(T.displacementMap.channel),emissiveMapUv:U&&x(T.emissiveMap.channel),metalnessMapUv:X&&x(T.metalnessMap.channel),roughnessMapUv:q&&x(T.roughnessMap.channel),anisotropyMapUv:ft&&x(T.anisotropyMap.channel),clearcoatMapUv:Kt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Et&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:St&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:he&&x(T.sheenRoughnessMap.channel),specularMapUv:ue&&x(T.specularMap.channel),specularColorMapUv:qt&&x(T.specularColorMap.channel),specularIntensityMapUv:de&&x(T.specularIntensityMap.channel),transmissionMapUv:Z&&x(T.transmissionMap.channel),thicknessMapUv:Pt&&x(T.thicknessMap.channel),alphaMapUv:te&&x(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(j||$),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(pt||te),fog:!!O,useFog:T.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:It,skinning:B.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:pt&&T.map.isVideoTexture===!0&&je.getTransfer(T.map.colorSpace)===on,decodeVideoTextureEmissive:U&&T.emissiveMap.isVideoTexture===!0&&je.getTransfer(T.emissiveMap.colorSpace)===on,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wn,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ae&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&T.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=h.has(1),Ke.vertexUv2s=h.has(2),Ke.vertexUv3s=h.has(3),h.clear(),Ke}function p(T){let S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(let N in T.defines)S.push(N),S.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(y(S,T),M(S,T),S.push(s.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function y(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function M(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){let S=g[T.type],N;if(S){let Y=Hi[S];N=Fi.clone(Y.uniforms)}else N=T.uniforms;return N}function b(T,S){let N;for(let Y=0,B=l.length;Y<B;Y++){let O=l[Y];if(O.cacheKey===S){N=O,++N.usedTimes;break}}return N===void 0&&(N=new ty(s,S,T,r),l.push(N)),N}function C(T){if(--T.usedTimes===0){let S=l.indexOf(T);l[S]=l[l.length-1],l.pop(),T.destroy()}}function L(T){c.remove(T)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:C,releaseShaderCache:L,programs:l,dispose:P}}function iy(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function sy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function lp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function cp(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,u,g,x,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,d,u,g,x,m){let p=o(f,d,u,g,x,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(f,d,u,g,x,m){let p=o(f,d,u,g,x,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function h(f,d){e.length>1&&e.sort(f||sy),n.length>1&&n.sort(d||lp),i.length>1&&i.sort(d||lp)}function l(){for(let f=t,d=s.length;f<d;f++){let u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:l,sort:h}}function ry(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new cp,s.set(n,[o])):i>=r.length?(o=new cp,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function oy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ht};break;case"SpotLight":e={position:new I,direction:new I,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function ay(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ly=0;function cy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function hy(s){let t=new oy,e=ay(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);let i=new I,r=new ne,o=new ne;function a(h){let l=0,f=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let u=0,g=0,x=0,m=0,p=0,y=0,M=0,v=0,b=0,C=0,L=0;h.sort(cy);for(let T=0,S=h.length;T<S;T++){let N=h[T],Y=N.color,B=N.intensity,O=N.distance,k=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=Y.r*B,f+=Y.g*B,d+=Y.b*B;else if(N.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(N.sh.coefficients[V],B);L++}else if(N.isDirectionalLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let rt=N.shadow,J=e.get(N);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,n.directionalShadow[u]=J,n.directionalShadowMap[u]=k,n.directionalShadowMatrix[u]=N.shadow.matrix,y++}n.directional[u]=V,u++}else if(N.isSpotLight){let V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(Y).multiplyScalar(B),V.distance=O,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,n.spot[x]=V;let rt=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,rt.updateMatrices(N),N.castShadow&&C++),n.spotLightMatrix[x]=rt.matrix,N.castShadow){let J=e.get(N);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=k,v++}x++}else if(N.isRectAreaLight){let V=t.get(N);V.color.copy(Y).multiplyScalar(B),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=V,m++}else if(N.isPointLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let rt=N.shadow,J=e.get(N);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,J.shadowCameraNear=rt.camera.near,J.shadowCameraFar=rt.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=N.shadow.matrix,M++}n.point[g]=V,g++}else if(N.isHemisphereLight){let V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(B),V.groundColor.copy(N.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==u||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==b||P.numLightProbes!==L)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+b-C,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,P.directionalLength=u,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=b,P.numLightProbes=L,n.version=ly++)}function c(h,l){let f=0,d=0,u=0,g=0,x=0,m=l.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){let M=h[p];if(M.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(M.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function hp(s){let t=new hy(s),e=[],n=[];function i(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function uy(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new hp(s),t.set(i,[a])):r>=o.length?(a=new hp(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dy=`uniform sampler2D shadow_pass;
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
}`;function py(s,t,e){let n=new bs,i=new Tt,r=new Tt,o=new Ze,a=new Vr({depthPacking:_c}),c=new gl,h={},l=e.maxTextureSize,f={[Ji]:$n,[$n]:Ji,[wn]:wn},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:fy,fragmentShader:dy}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let p=this.type;this.render=function(C,L,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let T=s.getRenderTarget(),S=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(ss),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let B=p!==ki&&this.type===ki,O=p===ki&&this.type!==ki;for(let k=0,V=C.length;k<V;k++){let rt=C[k],J=rt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let z=J.getFrameExtents();if(i.multiply(z),r.copy(J.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/z.x),i.x=r.x*z.x,J.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/z.y),i.y=r.y*z.y,J.mapSize.y=r.y)),J.map===null||B===!0||O===!0){let Ct=this.type!==ki?{minFilter:jn,magFilter:jn}:{};J.map!==null&&J.map.dispose(),J.map=new gn(i.x,i.y,Ct),J.map.texture.name=rt.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();let At=J.getViewportCount();for(let Ct=0;Ct<At;Ct++){let Wt=J.getViewport(Ct);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),Y.viewport(o),J.updateMatrices(rt,Ct),n=J.getFrustum(),v(L,P,J.camera,rt,this.type)}J.isPointLightShadow!==!0&&this.type===ki&&y(J,P),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,S,N)};function y(C,L){let P=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(L,null,P,d,x,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(L,null,P,u,x,null)}function M(C,L,P,T){let S=null,N=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)S=N;else if(S=P.isPointLight===!0?c:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let Y=S.uuid,B=L.uuid,O=h[Y];O===void 0&&(O={},h[Y]=O);let k=O[B];k===void 0&&(k=S.clone(),O[B]=k,L.addEventListener("dispose",b)),S=k}if(S.visible=L.visible,S.wireframe=L.wireframe,T===ki?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:f[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Y=s.properties.get(S);Y.light=P}return S}function v(C,L,P,T,S){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ki)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);let B=t.update(C),O=C.material;if(Array.isArray(O)){let k=B.groups;for(let V=0,rt=k.length;V<rt;V++){let J=k[V],z=O[J.materialIndex];if(z&&z.visible){let At=M(C,z,T,S);C.onBeforeShadow(s,C,L,P,B,At,J),s.renderBufferDirect(P,null,B,At,C,J),C.onAfterShadow(s,C,L,P,B,At,J)}}}else if(O.visible){let k=M(C,O,T,S);C.onBeforeShadow(s,C,L,P,B,k,null),s.renderBufferDirect(P,null,B,k,C,null),C.onAfterShadow(s,C,L,P,B,k,null)}}let Y=C.children;for(let B=0,O=Y.length;B<O;B++)v(Y[B],L,P,T,S)}function b(C){C.target.removeEventListener("dispose",b);for(let P in h){let T=h[P],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}var my={[Cl]:Il,[Pl]:Fl,[Dl]:zl,[Vs]:Ll,[Il]:Cl,[Fl]:Pl,[zl]:Dl,[Ll]:Vs};function gy(s,t){function e(){let Z=!1,Pt=new Ze,Gt=null,te=new Ze(0,0,0,0);return{setMask:function(Rt){Gt!==Rt&&!Z&&(s.colorMask(Rt,Rt,Rt,Rt),Gt=Rt)},setLocked:function(Rt){Z=Rt},setClear:function(Rt,yt,ae,Te,Ke){Ke===!0&&(Rt*=Te,yt*=Te,ae*=Te),Pt.set(Rt,yt,ae,Te),te.equals(Pt)===!1&&(s.clearColor(Rt,yt,ae,Te),te.copy(Pt))},reset:function(){Z=!1,Gt=null,te.set(-1,0,0,0)}}}function n(){let Z=!1,Pt=!1,Gt=null,te=null,Rt=null;return{setReversed:function(yt){if(Pt!==yt){let ae=t.get("EXT_clip_control");yt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Pt=yt;let Te=Rt;Rt=null,this.setClear(Te)}},getReversed:function(){return Pt},setTest:function(yt){yt?wt(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(yt){Gt!==yt&&!Z&&(s.depthMask(yt),Gt=yt)},setFunc:function(yt){if(Pt&&(yt=my[yt]),te!==yt){switch(yt){case Cl:s.depthFunc(s.NEVER);break;case Il:s.depthFunc(s.ALWAYS);break;case Pl:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case Dl:s.depthFunc(s.EQUAL);break;case Ll:s.depthFunc(s.GEQUAL);break;case Fl:s.depthFunc(s.GREATER);break;case zl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=yt}},setLocked:function(yt){Z=yt},setClear:function(yt){Rt!==yt&&(Pt&&(yt=1-yt),s.clearDepth(yt),Rt=yt)},reset:function(){Z=!1,Gt=null,te=null,Rt=null,Pt=!1}}}function i(){let Z=!1,Pt=null,Gt=null,te=null,Rt=null,yt=null,ae=null,Te=null,Ke=null;return{setTest:function(R){Z||(R?wt(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(R){Pt!==R&&!Z&&(s.stencilMask(R),Pt=R)},setFunc:function(R,W,it){(Gt!==R||te!==W||Rt!==it)&&(s.stencilFunc(R,W,it),Gt=R,te=W,Rt=it)},setOp:function(R,W,it){(yt!==R||ae!==W||Te!==it)&&(s.stencilOp(R,W,it),yt=R,ae=W,Te=it)},setLocked:function(R){Z=R},setClear:function(R){Ke!==R&&(s.clearStencil(R),Ke=R)},reset:function(){Z=!1,Pt=null,Gt=null,te=null,Rt=null,yt=null,ae=null,Te=null,Ke=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,h=new WeakMap,l={},f={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,y=null,M=null,v=null,b=null,C=null,L=new Ht(0,0,0),P=0,T=!1,S=null,N=null,Y=null,B=null,O=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,rt=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=rt>=1):J.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=rt>=2);let z=null,At={},Ct=s.getParameter(s.SCISSOR_BOX),Wt=s.getParameter(s.VIEWPORT),zt=new Ze().fromArray(Ct),Ot=new Ze().fromArray(Wt);function me(Z,Pt,Gt,te){let Rt=new Uint8Array(4),yt=s.createTexture();s.bindTexture(Z,yt),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<Gt;ae++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(Pt,0,s.RGBA,1,1,te,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Pt+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return yt}let mt={};mt[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),wt(s.DEPTH_TEST),o.setFunc(Vs),at(!1),j(Jh),wt(s.CULL_FACE),ct(ss);function wt(Z){l[Z]!==!0&&(s.enable(Z),l[Z]=!0)}function It(Z){l[Z]!==!1&&(s.disable(Z),l[Z]=!1)}function kt(Z,Pt){return f[Z]!==Pt?(s.bindFramebuffer(Z,Pt),f[Z]=Pt,Z===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Pt),Z===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Xt(Z,Pt){let Gt=u,te=!1;if(Z){Gt=d.get(Pt),Gt===void 0&&(Gt=[],d.set(Pt,Gt));let Rt=Z.textures;if(Gt.length!==Rt.length||Gt[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,ae=Rt.length;yt<ae;yt++)Gt[yt]=s.COLOR_ATTACHMENT0+yt;Gt.length=Rt.length,te=!0}}else Gt[0]!==s.BACK&&(Gt[0]=s.BACK,te=!0);te&&s.drawBuffers(Gt)}function pt(Z){return g!==Z?(s.useProgram(Z),g=Z,!0):!1}let Ut={[_s]:s.FUNC_ADD,[jf]:s.FUNC_SUBTRACT,[Qf]:s.FUNC_REVERSE_SUBTRACT};Ut[td]=s.MIN,Ut[ed]=s.MAX;let D={[nd]:s.ZERO,[id]:s.ONE,[sd]:s.SRC_COLOR,[tl]:s.SRC_ALPHA,[hd]:s.SRC_ALPHA_SATURATE,[ld]:s.DST_COLOR,[od]:s.DST_ALPHA,[rd]:s.ONE_MINUS_SRC_COLOR,[el]:s.ONE_MINUS_SRC_ALPHA,[cd]:s.ONE_MINUS_DST_COLOR,[ad]:s.ONE_MINUS_DST_ALPHA,[ud]:s.CONSTANT_COLOR,[fd]:s.ONE_MINUS_CONSTANT_COLOR,[dd]:s.CONSTANT_ALPHA,[pd]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(Z,Pt,Gt,te,Rt,yt,ae,Te,Ke,R){if(Z===ss){x===!0&&(It(s.BLEND),x=!1);return}if(x===!1&&(wt(s.BLEND),x=!0),Z!==Jf){if(Z!==m||R!==T){if((p!==_s||v!==_s)&&(s.blendEquation(s.FUNC_ADD),p=_s,v=_s),R)switch(Z){case ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ai:s.blendFunc(s.ONE,s.ONE);break;case Qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}y=null,M=null,b=null,C=null,L.set(0,0,0),P=0,m=Z,T=R}return}Rt=Rt||Pt,yt=yt||Gt,ae=ae||te,(Pt!==p||Rt!==v)&&(s.blendEquationSeparate(Ut[Pt],Ut[Rt]),p=Pt,v=Rt),(Gt!==y||te!==M||yt!==b||ae!==C)&&(s.blendFuncSeparate(D[Gt],D[te],D[yt],D[ae]),y=Gt,M=te,b=yt,C=ae),(Te.equals(L)===!1||Ke!==P)&&(s.blendColor(Te.r,Te.g,Te.b,Ke),L.copy(Te),P=Ke),m=Z,T=!1}function ht(Z,Pt){Z.side===wn?It(s.CULL_FACE):wt(s.CULL_FACE);let Gt=Z.side===$n;Pt&&(Gt=!Gt),at(Gt),Z.blending===ji&&Z.transparent===!1?ct(ss):ct(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let te=Z.stencilWrite;a.setTest(te),te&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),U(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?wt(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(Z){S!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),S=Z)}function j(Z){Z!==$f?(wt(s.CULL_FACE),Z!==N&&(Z===Jh?s.cullFace(s.BACK):Z===Kf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),N=Z}function F(Z){Z!==Y&&(V&&s.lineWidth(Z),Y=Z)}function U(Z,Pt,Gt){Z?(wt(s.POLYGON_OFFSET_FILL),(B!==Pt||O!==Gt)&&(s.polygonOffset(Pt,Gt),B=Pt,O=Gt)):It(s.POLYGON_OFFSET_FILL)}function X(Z){Z?wt(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function q(Z){Z===void 0&&(Z=s.TEXTURE0+k-1),z!==Z&&(s.activeTexture(Z),z=Z)}function $(Z,Pt,Gt){Gt===void 0&&(z===null?Gt=s.TEXTURE0+k-1:Gt=z);let te=At[Gt];te===void 0&&(te={type:void 0,texture:void 0},At[Gt]=te),(te.type!==Z||te.texture!==Pt)&&(z!==Gt&&(s.activeTexture(Gt),z=Gt),s.bindTexture(Z,Pt||mt[Z]),te.type=Z,te.texture=Pt)}function w(){let Z=At[z];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Q(){try{s.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function gt(){try{s.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Kt(){try{s.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Et(){try{s.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Zt(){try{s.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ie(){try{s.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function St(){try{s.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Jt(Z){zt.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),zt.copy(Z))}function he(Z){Ot.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),Ot.copy(Z))}function ue(Z,Pt){let Gt=h.get(Pt);Gt===void 0&&(Gt=new WeakMap,h.set(Pt,Gt));let te=Gt.get(Z);te===void 0&&(te=s.getUniformBlockIndex(Pt,Z.name),Gt.set(Z,te))}function qt(Z,Pt){let te=h.get(Pt).get(Z);c.get(Pt)!==te&&(s.uniformBlockBinding(Pt,te,Z.__bindingPointIndex),c.set(Pt,te))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},z=null,At={},f={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,y=null,M=null,v=null,b=null,C=null,L=new Ht(0,0,0),P=0,T=!1,S=null,N=null,Y=null,B=null,O=null,zt.set(0,0,s.canvas.width,s.canvas.height),Ot.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:wt,disable:It,bindFramebuffer:kt,drawBuffers:Xt,useProgram:pt,setBlending:ct,setMaterial:ht,setFlipSided:at,setCullFace:j,setLineWidth:F,setPolygonOffset:U,setScissorTest:X,activeTexture:q,bindTexture:$,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:G,texImage2D:ie,texImage3D:St,updateUBOMapping:ue,uniformBlockBinding:qt,texStorage2D:Et,texStorage3D:Zt,texSubImage2D:Q,texSubImage3D:gt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Kt,scissor:Jt,viewport:he,reset:de}}function xy(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Tt,l=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return u?new OffscreenCanvas(w,_):Ro("canvas")}function x(w,_,G){let Q=1,gt=$(w);if((gt.width>G||gt.height>G)&&(Q=G/Math.max(gt.width,gt.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ft=Math.floor(Q*gt.width),Kt=Math.floor(Q*gt.height);f===void 0&&(f=g(ft,Kt));let Et=_?g(ft,Kt):f;return Et.width=ft,Et.height=Kt,Et.getContext("2d").drawImage(w,0,0,ft,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+ft+"x"+Kt+")."),Et}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(w,_,G,Q,gt=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ft=_;if(_===s.RED&&(G===s.FLOAT&&(ft=s.R32F),G===s.HALF_FLOAT&&(ft=s.R16F),G===s.UNSIGNED_BYTE&&(ft=s.R8)),_===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ft=s.R8UI),G===s.UNSIGNED_SHORT&&(ft=s.R16UI),G===s.UNSIGNED_INT&&(ft=s.R32UI),G===s.BYTE&&(ft=s.R8I),G===s.SHORT&&(ft=s.R16I),G===s.INT&&(ft=s.R32I)),_===s.RG&&(G===s.FLOAT&&(ft=s.RG32F),G===s.HALF_FLOAT&&(ft=s.RG16F),G===s.UNSIGNED_BYTE&&(ft=s.RG8)),_===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(ft=s.RG8UI),G===s.UNSIGNED_SHORT&&(ft=s.RG16UI),G===s.UNSIGNED_INT&&(ft=s.RG32UI),G===s.BYTE&&(ft=s.RG8I),G===s.SHORT&&(ft=s.RG16I),G===s.INT&&(ft=s.RG32I)),_===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),G===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),G===s.UNSIGNED_INT&&(ft=s.RGB32UI),G===s.BYTE&&(ft=s.RGB8I),G===s.SHORT&&(ft=s.RGB16I),G===s.INT&&(ft=s.RGB32I)),_===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),G===s.UNSIGNED_INT&&(ft=s.RGBA32UI),G===s.BYTE&&(ft=s.RGBA8I),G===s.SHORT&&(ft=s.RGBA16I),G===s.INT&&(ft=s.RGBA32I)),_===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(ft=s.R11F_G11F_B10F)),_===s.RGBA){let Kt=gt?To:je.getTransfer(Q);G===s.FLOAT&&(ft=s.RGBA32F),G===s.HALF_FLOAT&&(ft=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ft=Kt===on?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function v(w,_){let G;return w?_===null||_===Ts||_===qr?G=s.DEPTH24_STENCIL8:_===Li?G=s.DEPTH32F_STENCIL8:_===Xr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ts||_===qr?G=s.DEPTH_COMPONENT24:_===Li?G=s.DEPTH_COMPONENT32F:_===Xr&&(G=s.DEPTH_COMPONENT16),G}function b(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==jn&&w.minFilter!==ni?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){let _=w.target;_.removeEventListener("dispose",C),P(_),_.isVideoTexture&&l.delete(_)}function L(w){let _=w.target;_.removeEventListener("dispose",L),S(_)}function P(w){let _=n.get(w);if(_.__webglInit===void 0)return;let G=w.source,Q=d.get(G);if(Q){let gt=Q[_.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&T(w),Object.keys(Q).length===0&&d.delete(G)}n.remove(w)}function T(w){let _=n.get(w);s.deleteTexture(_.__webglTexture);let G=w.source,Q=d.get(G);delete Q[_.__cacheKey],o.memory.textures--}function S(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let gt=0;gt<_.__webglFramebuffer[Q].length;gt++)s.deleteFramebuffer(_.__webglFramebuffer[Q][gt]);else s.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)s.deleteFramebuffer(_.__webglFramebuffer[Q]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let G=w.textures;for(let Q=0,gt=G.length;Q<gt;Q++){let ft=n.get(G[Q]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(w)}let N=0;function Y(){N=0}function B(){let w=N;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),N+=1,w}function O(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function k(w,_){let G=n.get(w);if(w.isVideoTexture&&X(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&G.__version!==w.version){let Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(G,w,_);return}}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+_)}function V(w,_){let G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){mt(G,w,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+_)}function rt(w,_){let G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){mt(G,w,_);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+_)}function J(w,_){let G=n.get(w);if(w.version>0&&G.__version!==w.version){wt(G,w,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+_)}let z={[Ms]:s.REPEAT,[ys]:s.CLAMP_TO_EDGE,[nl]:s.MIRRORED_REPEAT},At={[jn]:s.NEAREST,[Ed]:s.NEAREST_MIPMAP_NEAREST,[sa]:s.NEAREST_MIPMAP_LINEAR,[ni]:s.LINEAR,[Ol]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},Ct={[Ad]:s.NEVER,[Ld]:s.ALWAYS,[Rd]:s.LESS,[ca]:s.LEQUAL,[Cd]:s.EQUAL,[Dd]:s.GEQUAL,[Id]:s.GREATER,[Pd]:s.NOTEQUAL};function Wt(w,_){if(_.type===Li&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ni||_.magFilter===Ol||_.magFilter===sa||_.magFilter===Ss||_.minFilter===ni||_.minFilter===Ol||_.minFilter===sa||_.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,z[_.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,z[_.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,z[_.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,At[_.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,At[_.minFilter]),_.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Ct[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jn||_.minFilter!==sa&&_.minFilter!==Ss||_.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function zt(w,_){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));let Q=_.source,gt=d.get(Q);gt===void 0&&(gt={},d.set(Q,gt));let ft=O(_);if(ft!==w.__cacheKey){gt[ft]===void 0&&(gt[ft]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),gt[ft].usedTimes++;let Kt=gt[w.__cacheKey];Kt!==void 0&&(gt[w.__cacheKey].usedTimes--,Kt.usedTimes===0&&T(_)),w.__cacheKey=ft,w.__webglTexture=gt[ft].texture}return G}function Ot(w,_,G){return Math.floor(Math.floor(w/G)/_)}function me(w,_,G,Q){let ft=w.updateRanges;if(ft.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,G,Q,_.data);else{ft.sort((St,Jt)=>St.start-Jt.start);let Kt=0;for(let St=1;St<ft.length;St++){let Jt=ft[Kt],he=ft[St],ue=Jt.start+Jt.count,qt=Ot(he.start,_.width,4),de=Ot(Jt.start,_.width,4);he.start<=ue+1&&qt===de&&Ot(he.start+he.count-1,_.width,4)===qt?Jt.count=Math.max(Jt.count,he.start+he.count-Jt.start):(++Kt,ft[Kt]=he)}ft.length=Kt+1;let Et=s.getParameter(s.UNPACK_ROW_LENGTH),Zt=s.getParameter(s.UNPACK_SKIP_PIXELS),ie=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let St=0,Jt=ft.length;St<Jt;St++){let he=ft[St],ue=Math.floor(he.start/4),qt=Math.ceil(he.count/4),de=ue%_.width,Z=Math.floor(ue/_.width),Pt=qt,Gt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,de),s.pixelStorei(s.UNPACK_SKIP_ROWS,Z),e.texSubImage2D(s.TEXTURE_2D,0,de,Z,Pt,Gt,G,Q,_.data)}w.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Et),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),s.pixelStorei(s.UNPACK_SKIP_ROWS,ie)}}function mt(w,_,G){let Q=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=s.TEXTURE_3D);let gt=zt(w,_),ft=_.source;e.bindTexture(Q,w.__webglTexture,s.TEXTURE0+G);let Kt=n.get(ft);if(ft.version!==Kt.__version||gt===!0){e.activeTexture(s.TEXTURE0+G);let Et=je.getPrimaries(je.workingColorSpace),Zt=_.colorSpace===rs?null:je.getPrimaries(_.colorSpace),ie=_.colorSpace===rs||Et===Zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let St=x(_.image,!1,i.maxTextureSize);St=q(_,St);let Jt=r.convert(_.format,_.colorSpace),he=r.convert(_.type),ue=M(_.internalFormat,Jt,he,_.colorSpace,_.isVideoTexture);Wt(Q,_);let qt,de=_.mipmaps,Z=_.isVideoTexture!==!0,Pt=Kt.__version===void 0||gt===!0,Gt=ft.dataReady,te=b(_,St);if(_.isDepthTexture)ue=v(_.format===Yr,_.type),Pt&&(Z?e.texStorage2D(s.TEXTURE_2D,1,ue,St.width,St.height):e.texImage2D(s.TEXTURE_2D,0,ue,St.width,St.height,0,Jt,he,null));else if(_.isDataTexture)if(de.length>0){Z&&Pt&&e.texStorage2D(s.TEXTURE_2D,te,ue,de[0].width,de[0].height);for(let Rt=0,yt=de.length;Rt<yt;Rt++)qt=de[Rt],Z?Gt&&e.texSubImage2D(s.TEXTURE_2D,Rt,0,0,qt.width,qt.height,Jt,he,qt.data):e.texImage2D(s.TEXTURE_2D,Rt,ue,qt.width,qt.height,0,Jt,he,qt.data);_.generateMipmaps=!1}else Z?(Pt&&e.texStorage2D(s.TEXTURE_2D,te,ue,St.width,St.height),Gt&&me(_,St,Jt,he)):e.texImage2D(s.TEXTURE_2D,0,ue,St.width,St.height,0,Jt,he,St.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Z&&Pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,te,ue,de[0].width,de[0].height,St.depth);for(let Rt=0,yt=de.length;Rt<yt;Rt++)if(qt=de[Rt],_.format!==bi)if(Jt!==null)if(Z){if(Gt)if(_.layerUpdates.size>0){let ae=vu(qt.width,qt.height,_.format,_.type);for(let Te of _.layerUpdates){let Ke=qt.data.subarray(Te*ae/qt.data.BYTES_PER_ELEMENT,(Te+1)*ae/qt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,Te,qt.width,qt.height,1,Jt,Ke)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,qt.width,qt.height,St.depth,Jt,qt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Rt,ue,qt.width,qt.height,St.depth,0,qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Gt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,qt.width,qt.height,St.depth,Jt,he,qt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Rt,ue,qt.width,qt.height,St.depth,0,Jt,he,qt.data)}else{Z&&Pt&&e.texStorage2D(s.TEXTURE_2D,te,ue,de[0].width,de[0].height);for(let Rt=0,yt=de.length;Rt<yt;Rt++)qt=de[Rt],_.format!==bi?Jt!==null?Z?Gt&&e.compressedTexSubImage2D(s.TEXTURE_2D,Rt,0,0,qt.width,qt.height,Jt,qt.data):e.compressedTexImage2D(s.TEXTURE_2D,Rt,ue,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Gt&&e.texSubImage2D(s.TEXTURE_2D,Rt,0,0,qt.width,qt.height,Jt,he,qt.data):e.texImage2D(s.TEXTURE_2D,Rt,ue,qt.width,qt.height,0,Jt,he,qt.data)}else if(_.isDataArrayTexture)if(Z){if(Pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,te,ue,St.width,St.height,St.depth),Gt)if(_.layerUpdates.size>0){let Rt=vu(St.width,St.height,_.format,_.type);for(let yt of _.layerUpdates){let ae=St.data.subarray(yt*Rt/St.data.BYTES_PER_ELEMENT,(yt+1)*Rt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,St.width,St.height,1,Jt,he,ae)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Jt,he,St.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,St.width,St.height,St.depth,0,Jt,he,St.data);else if(_.isData3DTexture)Z?(Pt&&e.texStorage3D(s.TEXTURE_3D,te,ue,St.width,St.height,St.depth),Gt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Jt,he,St.data)):e.texImage3D(s.TEXTURE_3D,0,ue,St.width,St.height,St.depth,0,Jt,he,St.data);else if(_.isFramebufferTexture){if(Pt)if(Z)e.texStorage2D(s.TEXTURE_2D,te,ue,St.width,St.height);else{let Rt=St.width,yt=St.height;for(let ae=0;ae<te;ae++)e.texImage2D(s.TEXTURE_2D,ae,ue,Rt,yt,0,Jt,he,null),Rt>>=1,yt>>=1}}else if(de.length>0){if(Z&&Pt){let Rt=$(de[0]);e.texStorage2D(s.TEXTURE_2D,te,ue,Rt.width,Rt.height)}for(let Rt=0,yt=de.length;Rt<yt;Rt++)qt=de[Rt],Z?Gt&&e.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Jt,he,qt):e.texImage2D(s.TEXTURE_2D,Rt,ue,Jt,he,qt);_.generateMipmaps=!1}else if(Z){if(Pt){let Rt=$(St);e.texStorage2D(s.TEXTURE_2D,te,ue,Rt.width,Rt.height)}Gt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Jt,he,St)}else e.texImage2D(s.TEXTURE_2D,0,ue,Jt,he,St);m(_)&&p(Q),Kt.__version=ft.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function wt(w,_,G){if(_.image.length!==6)return;let Q=zt(w,_),gt=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+G);let ft=n.get(gt);if(gt.version!==ft.__version||Q===!0){e.activeTexture(s.TEXTURE0+G);let Kt=je.getPrimaries(je.workingColorSpace),Et=_.colorSpace===rs?null:je.getPrimaries(_.colorSpace),Zt=_.colorSpace===rs||Kt===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let ie=_.isCompressedTexture||_.image[0].isCompressedTexture,St=_.image[0]&&_.image[0].isDataTexture,Jt=[];for(let yt=0;yt<6;yt++)!ie&&!St?Jt[yt]=x(_.image[yt],!0,i.maxCubemapSize):Jt[yt]=St?_.image[yt].image:_.image[yt],Jt[yt]=q(_,Jt[yt]);let he=Jt[0],ue=r.convert(_.format,_.colorSpace),qt=r.convert(_.type),de=M(_.internalFormat,ue,qt,_.colorSpace),Z=_.isVideoTexture!==!0,Pt=ft.__version===void 0||Q===!0,Gt=gt.dataReady,te=b(_,he);Wt(s.TEXTURE_CUBE_MAP,_);let Rt;if(ie){Z&&Pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,te,de,he.width,he.height);for(let yt=0;yt<6;yt++){Rt=Jt[yt].mipmaps;for(let ae=0;ae<Rt.length;ae++){let Te=Rt[ae];_.format!==bi?ue!==null?Z?Gt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ae,0,0,Te.width,Te.height,ue,Te.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ae,de,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ae,0,0,Te.width,Te.height,ue,qt,Te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ae,de,Te.width,Te.height,0,ue,qt,Te.data)}}}else{if(Rt=_.mipmaps,Z&&Pt){Rt.length>0&&te++;let yt=$(Jt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,te,de,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(St){Z?Gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Jt[yt].width,Jt[yt].height,ue,qt,Jt[yt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,de,Jt[yt].width,Jt[yt].height,0,ue,qt,Jt[yt].data);for(let ae=0;ae<Rt.length;ae++){let Ke=Rt[ae].image[yt].image;Z?Gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ae+1,0,0,Ke.width,Ke.height,ue,qt,Ke.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ae+1,de,Ke.width,Ke.height,0,ue,qt,Ke.data)}}else{Z?Gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ue,qt,Jt[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,de,ue,qt,Jt[yt]);for(let ae=0;ae<Rt.length;ae++){let Te=Rt[ae];Z?Gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ae+1,0,0,ue,qt,Te.image[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ae+1,de,ue,qt,Te.image[yt])}}}m(_)&&p(s.TEXTURE_CUBE_MAP),ft.__version=gt.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function It(w,_,G,Q,gt,ft){let Kt=r.convert(G.format,G.colorSpace),Et=r.convert(G.type),Zt=M(G.internalFormat,Kt,Et,G.colorSpace),ie=n.get(_),St=n.get(G);if(St.__renderTarget=_,!ie.__hasExternalTextures){let Jt=Math.max(1,_.width>>ft),he=Math.max(1,_.height>>ft);gt===s.TEXTURE_3D||gt===s.TEXTURE_2D_ARRAY?e.texImage3D(gt,ft,Zt,Jt,he,_.depth,0,Kt,Et,null):e.texImage2D(gt,ft,Zt,Jt,he,0,Kt,Et,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),U(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,gt,St.__webglTexture,0,F(_)):(gt===s.TEXTURE_2D||gt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,gt,St.__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(w,_,G){if(s.bindRenderbuffer(s.RENDERBUFFER,w),_.depthBuffer){let Q=_.depthTexture,gt=Q&&Q.isDepthTexture?Q.type:null,ft=v(_.stencilBuffer,gt),Kt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=F(_);U(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,ft,_.width,_.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,ft,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ft,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Kt,s.RENDERBUFFER,w)}else{let Q=_.textures;for(let gt=0;gt<Q.length;gt++){let ft=Q[gt],Kt=r.convert(ft.format,ft.colorSpace),Et=r.convert(ft.type),Zt=M(ft.internalFormat,Kt,Et,ft.colorSpace),ie=F(_);G&&U(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,Zt,_.width,_.height):U(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,Zt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Zt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(_.depthTexture);Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k(_.depthTexture,0);let gt=Q.__webglTexture,ft=F(_);if(_.depthTexture.format===Dr)U(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,gt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,gt,0);else if(_.depthTexture.format===Yr)U(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,gt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function pt(w){let _=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let Q=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){let gt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",gt)};Q.addEventListener("dispose",gt),_.__depthDisposeCallback=gt}_.__boundDepthTexture=Q}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let Q=w.texture.mipmaps;Q&&Q.length>0?Xt(_.__webglFramebuffer[0],w):Xt(_.__webglFramebuffer,w)}else if(G){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=s.createRenderbuffer(),kt(_.__webglDepthbuffer[Q],w,!1);else{let gt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=_.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,ft)}}else{let Q=w.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),kt(_.__webglDepthbuffer,w,!1);else{let gt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,ft)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(w,_,G){let Q=n.get(w);_!==void 0&&It(Q.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&pt(w)}function D(w){let _=w.texture,G=n.get(w),Q=n.get(_);w.addEventListener("dispose",L);let gt=w.textures,ft=w.isWebGLCubeRenderTarget===!0,Kt=gt.length>1;if(Kt||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=_.version,o.memory.textures++),ft){G.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[Et]=[];for(let Zt=0;Zt<_.mipmaps.length;Zt++)G.__webglFramebuffer[Et][Zt]=s.createFramebuffer()}else G.__webglFramebuffer[Et]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let Et=0;Et<_.mipmaps.length;Et++)G.__webglFramebuffer[Et]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Kt)for(let Et=0,Zt=gt.length;Et<Zt;Et++){let ie=n.get(gt[Et]);ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&U(w)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Et=0;Et<gt.length;Et++){let Zt=gt[Et];G.__webglColorRenderbuffer[Et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Et]);let ie=r.convert(Zt.format,Zt.colorSpace),St=r.convert(Zt.type),Jt=M(Zt.internalFormat,ie,St,Zt.colorSpace,w.isXRRenderTarget===!0),he=F(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,he,Jt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,G.__webglColorRenderbuffer[Et])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,_);for(let Et=0;Et<6;Et++)if(_.mipmaps&&_.mipmaps.length>0)for(let Zt=0;Zt<_.mipmaps.length;Zt++)It(G.__webglFramebuffer[Et][Zt],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Zt);else It(G.__webglFramebuffer[Et],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(_)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Kt){for(let Et=0,Zt=gt.length;Et<Zt;Et++){let ie=gt[Et],St=n.get(ie),Jt=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Jt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Jt,St.__webglTexture),Wt(Jt,ie),It(G.__webglFramebuffer,w,ie,s.COLOR_ATTACHMENT0+Et,Jt,0),m(ie)&&p(Jt)}e.unbindTexture()}else{let Et=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Et=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Et,Q.__webglTexture),Wt(Et,_),_.mipmaps&&_.mipmaps.length>0)for(let Zt=0;Zt<_.mipmaps.length;Zt++)It(G.__webglFramebuffer[Zt],w,_,s.COLOR_ATTACHMENT0,Et,Zt);else It(G.__webglFramebuffer,w,_,s.COLOR_ATTACHMENT0,Et,0);m(_)&&p(Et),e.unbindTexture()}w.depthBuffer&&pt(w)}function ct(w){let _=w.textures;for(let G=0,Q=_.length;G<Q;G++){let gt=_[G];if(m(gt)){let ft=y(w),Kt=n.get(gt).__webglTexture;e.bindTexture(ft,Kt),p(ft),e.unbindTexture()}}}let ht=[],at=[];function j(w){if(w.samples>0){if(U(w)===!1){let _=w.textures,G=w.width,Q=w.height,gt=s.COLOR_BUFFER_BIT,ft=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Kt=n.get(w),Et=_.length>1;if(Et)for(let ie=0;ie<_.length;ie++)e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);let Zt=w.texture.mipmaps;Zt&&Zt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let ie=0;ie<_.length;ie++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(gt|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(gt|=s.STENCIL_BUFFER_BIT)),Et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[ie]);let St=n.get(_[ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,St,0)}s.blitFramebuffer(0,0,G,Q,0,0,G,Q,gt,s.NEAREST),c===!0&&(ht.length=0,at.length=0,ht.push(s.COLOR_ATTACHMENT0+ie),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ht.push(ft),at.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,at)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Et)for(let ie=0;ie<_.length;ie++){e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[ie]);let St=n.get(_[ie]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.TEXTURE_2D,St,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let _=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function F(w){return Math.min(i.maxSamples,w.samples)}function U(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function X(w){let _=o.render.frame;l.get(w)!==_&&(l.set(w,_),w.update())}function q(w,_){let G=w.colorSpace,Q=w.format,gt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==Ws&&G!==rs&&(je.getTransfer(G)===on?(Q!==bi||gt!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),_}function $(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=Y,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=rt,this.setTextureCube=J,this.rebindTextures=Ut,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=U}function vy(s,t){function e(n,i=rs){let r,o=je.getTransfer(i);if(n===Di)return s.UNSIGNED_BYTE;if(n===kl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===iu)return s.BYTE;if(n===su)return s.SHORT;if(n===Xr)return s.UNSIGNED_SHORT;if(n===Bl)return s.INT;if(n===Ts)return s.UNSIGNED_INT;if(n===Li)return s.FLOAT;if(n===Bn)return s.HALF_FLOAT;if(n===au)return s.ALPHA;if(n===lu)return s.RGB;if(n===bi)return s.RGBA;if(n===Dr)return s.DEPTH_COMPONENT;if(n===Yr)return s.DEPTH_STENCIL;if(n===Gl)return s.RED;if(n===Vl)return s.RED_INTEGER;if(n===cu)return s.RG;if(n===Wl)return s.RG_INTEGER;if(n===Xl)return s.RGBA_INTEGER;if(n===ra||n===oa||n===aa||n===la)if(o===on)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===Yl||n===Zl||n===$l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===Jl||n===jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===Jl)return o===on?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jl)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===fc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ql)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===pc||n===mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dc)return o===on?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gc||n===xc||n===vc||n===yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var yy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_y=`
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

}`,Pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Oo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new nn({vertexShader:yy,fragmentShader:_y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Du=class extends Qi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,f=null,d=null,u=null,g=null,x=typeof XRWebGLBinding<"u",m=new Pu,p={},y=e.getContextAttributes(),M=null,v=null,b=[],C=[],L=new Tt,P=null,T=new On;T.viewport=new Ze;let S=new On;S.viewport=new Ze;let N=[T,S],Y=new Al,B=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(mt){let wt=b[mt];return wt===void 0&&(wt=new Nr,b[mt]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(mt){let wt=b[mt];return wt===void 0&&(wt=new Nr,b[mt]=wt),wt.getGripSpace()},this.getHand=function(mt){let wt=b[mt];return wt===void 0&&(wt=new Nr,b[mt]=wt),wt.getHandSpace()};function k(mt){let wt=C.indexOf(mt.inputSource);if(wt===-1)return;let It=b[wt];It!==void 0&&(It.update(mt.inputSource,mt.frame,h||o),It.dispatchEvent({type:mt.type,data:mt.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",rt);for(let mt=0;mt<b.length;mt++){let wt=C[mt];wt!==null&&(C[mt]=null,b[mt].disconnect(wt))}B=null,O=null,m.reset();for(let mt in p)delete p[mt];t.setRenderTarget(M),u=null,d=null,f=null,i=null,v=null,me.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(mt){r=mt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(mt){a=mt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(mt){h=mt},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(mt){if(i=mt,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",rt),y.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,kt=null,Xt=null;y.depth&&(Xt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=y.stencil?Yr:Dr,kt=y.stencil?qr:Ts);let pt={colorFormat:e.RGBA8,depthFormat:Xt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new gn(d.textureWidth,d.textureHeight,{format:bi,type:Di,depthTexture:new es(d.textureWidth,d.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let It={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,It),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new gn(u.framebufferWidth,u.framebufferHeight,{format:bi,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await i.requestReferenceSpace(a),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(mt){for(let wt=0;wt<mt.removed.length;wt++){let It=mt.removed[wt],kt=C.indexOf(It);kt>=0&&(C[kt]=null,b[kt].disconnect(It))}for(let wt=0;wt<mt.added.length;wt++){let It=mt.added[wt],kt=C.indexOf(It);if(kt===-1){for(let pt=0;pt<b.length;pt++)if(pt>=C.length){C.push(It),kt=pt;break}else if(C[pt]===null){C[pt]=It,kt=pt;break}if(kt===-1)break}let Xt=b[kt];Xt&&Xt.connect(It)}}let J=new I,z=new I;function At(mt,wt,It){J.setFromMatrixPosition(wt.matrixWorld),z.setFromMatrixPosition(It.matrixWorld);let kt=J.distanceTo(z),Xt=wt.projectionMatrix.elements,pt=It.projectionMatrix.elements,Ut=Xt[14]/(Xt[10]-1),D=Xt[14]/(Xt[10]+1),ct=(Xt[9]+1)/Xt[5],ht=(Xt[9]-1)/Xt[5],at=(Xt[8]-1)/Xt[0],j=(pt[8]+1)/pt[0],F=Ut*at,U=Ut*j,X=kt/(-at+j),q=X*-at;if(wt.matrixWorld.decompose(mt.position,mt.quaternion,mt.scale),mt.translateX(q),mt.translateZ(X),mt.matrixWorld.compose(mt.position,mt.quaternion,mt.scale),mt.matrixWorldInverse.copy(mt.matrixWorld).invert(),Xt[10]===-1)mt.projectionMatrix.copy(wt.projectionMatrix),mt.projectionMatrixInverse.copy(wt.projectionMatrixInverse);else{let $=Ut+X,w=D+X,_=F-q,G=U+(kt-q),Q=ct*D/w*$,gt=ht*D/w*$;mt.projectionMatrix.makePerspective(_,G,Q,gt,$,w),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert()}}function Ct(mt,wt){wt===null?mt.matrixWorld.copy(mt.matrix):mt.matrixWorld.multiplyMatrices(wt.matrixWorld,mt.matrix),mt.matrixWorldInverse.copy(mt.matrixWorld).invert()}this.updateCamera=function(mt){if(i===null)return;let wt=mt.near,It=mt.far;m.texture!==null&&(m.depthNear>0&&(wt=m.depthNear),m.depthFar>0&&(It=m.depthFar)),Y.near=S.near=T.near=wt,Y.far=S.far=T.far=It,(B!==Y.near||O!==Y.far)&&(i.updateRenderState({depthNear:Y.near,depthFar:Y.far}),B=Y.near,O=Y.far),Y.layers.mask=mt.layers.mask|6,T.layers.mask=Y.layers.mask&3,S.layers.mask=Y.layers.mask&5;let kt=mt.parent,Xt=Y.cameras;Ct(Y,kt);for(let pt=0;pt<Xt.length;pt++)Ct(Xt[pt],kt);Xt.length===2?At(Y,T,S):Y.projectionMatrix.copy(T.projectionMatrix),Wt(mt,Y,kt)};function Wt(mt,wt,It){It===null?mt.matrix.copy(wt.matrixWorld):(mt.matrix.copy(It.matrixWorld),mt.matrix.invert(),mt.matrix.multiply(wt.matrixWorld)),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.updateMatrixWorld(!0),mt.projectionMatrix.copy(wt.projectionMatrix),mt.projectionMatrixInverse.copy(wt.projectionMatrixInverse),mt.isPerspectiveCamera&&(mt.fov=Xs*2*Math.atan(1/mt.projectionMatrix.elements[5]),mt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(mt){c=mt,d!==null&&(d.fixedFoveation=mt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=mt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(mt){return p[mt]};let zt=null;function Ot(mt,wt){if(l=wt.getViewerPose(h||o),g=wt,l!==null){let It=l.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let kt=!1;It.length!==Y.cameras.length&&(Y.cameras.length=0,kt=!0);for(let D=0;D<It.length;D++){let ct=It[D],ht=null;if(u!==null)ht=u.getViewport(ct);else{let j=f.getViewSubImage(d,ct);ht=j.viewport,D===0&&(t.setRenderTargetTextures(v,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(v))}let at=N[D];at===void 0&&(at=new On,at.layers.enable(D),at.viewport=new Ze,N[D]=at),at.matrix.fromArray(ct.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ct.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ht.x,ht.y,ht.width,ht.height),D===0&&(Y.matrix.copy(at.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),kt===!0&&Y.cameras.push(at)}let Xt=i.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let D=f.getDepthInformation(It[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(Xt&&Xt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let D=0;D<It.length;D++){let ct=It[D].camera;if(ct){let ht=p[ct];ht||(ht=new Oo,p[ct]=ht);let at=f.getCameraImage(ct);ht.sourceTexture=at}}}}for(let It=0;It<b.length;It++){let kt=C[It],Xt=b[It];kt!==null&&Xt!==void 0&&Xt.update(kt,wt,h||o)}zt&&zt(mt,wt),wt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:wt}),g=null}let me=new up;me.setAnimationLoop(Ot),this.setAnimationLoop=function(mt){zt=mt},this.dispose=function(){}}},nr=new Dn,My=new ne;function by(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,nr.copy(v),nr.x*=-1,nr.y*=-1,nr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),m.envMapRotation.value.setFromMatrix4(My.makeRotationFromEuler(nr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wy(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let v=M.program;n.uniformBlockBinding(y,v)}function h(y,M){let v=i[y.id];v===void 0&&(g(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",m));let b=M.program;n.updateUBOMapping(y,b);let C=t.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function l(y){let M=f();y.__bindingPointIndex=M;let v=s.createBuffer(),b=y.__size,C=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=i[y.id],v=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let C=0,L=v.length;C<L;C++){let P=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,S=P.length;T<S;T++){let N=P[T];if(u(N,C,T,b)===!0){let Y=N.__offset,B=Array.isArray(N.value)?N.value:[N.value],O=0;for(let k=0;k<B.length;k++){let V=B[k],rt=x(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,Y+O,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,O),O+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(y,M,v,b){let C=y.value,L=M+"_"+v;if(b[L]===void 0)return typeof C=="number"||typeof C=="boolean"?b[L]=C:b[L]=C.clone(),!0;{let P=b[L];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return b[L]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(y){let M=y.uniforms,v=0,b=16;for(let L=0,P=M.length;L<P;L++){let T=Array.isArray(M[L])?M[L]:[M[L]];for(let S=0,N=T.length;S<N;S++){let Y=T[S],B=Array.isArray(Y.value)?Y.value:[Y.value];for(let O=0,k=B.length;O<k;O++){let V=B[O],rt=x(V),J=v%b,z=J%rt.boundary,At=J+z;v+=z,At!==0&&b-At<rt.storage&&(v+=b-At),Y.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=v,v+=rt.storage}}}let C=v%b;return C>0&&(v+=b-C),y.__size=v,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){let M=y.target;M.removeEventListener("dispose",m);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:h,dispose:p}}var Ec=class{constructor(t={}){let{canvas:e=Fd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,b=!1;this._outputColorSpace=Zn;let C=0,L=0,P=null,T=-1,S=null,N=new Ze,Y=new Ze,B=null,O=new Ht(0),k=0,V=e.width,rt=e.height,J=1,z=null,At=null,Ct=new Ze(0,0,V,rt),Wt=new Ze(0,0,V,rt),zt=!1,Ot=new bs,me=!1,mt=!1,wt=new ne,It=new I,kt=new Ze,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pt=!1;function Ut(){return P===null?J:1}let D=n;function ct(E,H){return e.getContext(E,H)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),D===null){let H="webgl2";if(D=ct(H,E),D===null)throw ct(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ht,at,j,F,U,X,q,$,w,_,G,Q,gt,ft,Kt,Et,Zt,ie,St,Jt,he,ue,qt,de;function Z(){ht=new Hv(D),ht.init(),ue=new vy(D,ht),at=new Fv(D,ht,t,ue),j=new gy(D,ht),at.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),F=new Wv(D),U=new iy,X=new xy(D,ht,j,U,at,ue,F),q=new Uv(v),$=new kv(v),w=new Km(D),qt=new Dv(D,w),_=new Gv(D,w,F,qt),G=new qv(D,_,w,F),St=new Xv(D,at,X),Et=new zv(U),Q=new ny(v,q,$,ht,at,qt,Et),gt=new by(v,U),ft=new ry,Kt=new uy(ht),ie=new Pv(v,q,$,j,G,u,c),Zt=new py(v,G,at),de=new wy(D,F,at,j),Jt=new Lv(D,ht,F),he=new Vv(D,ht,F),F.programs=Q.programs,v.capabilities=at,v.extensions=ht,v.properties=U,v.renderLists=ft,v.shadowMap=Zt,v.state=j,v.info=F}Z();let Pt=new Du(v,D);this.xr=Pt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(V,rt,!1))},this.getSize=function(E){return E.set(V,rt)},this.setSize=function(E,H,st=!0){if(Pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,rt=H,e.width=Math.floor(E*J),e.height=Math.floor(H*J),st===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(V*J,rt*J).floor()},this.setDrawingBufferSize=function(E,H,st){V=E,rt=H,J=st,e.width=Math.floor(E*st),e.height=Math.floor(H*st),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(Ct)},this.setViewport=function(E,H,st,lt){E.isVector4?Ct.set(E.x,E.y,E.z,E.w):Ct.set(E,H,st,lt),j.viewport(N.copy(Ct).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(Wt)},this.setScissor=function(E,H,st,lt){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,H,st,lt),j.scissor(Y.copy(Wt).multiplyScalar(J).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(E){j.setScissorTest(zt=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){At=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,st=!0){let lt=0;if(E){let et=!1;if(P!==null){let Ft=P.texture.format;et=Ft===Xl||Ft===Wl||Ft===Vl}if(et){let Ft=P.texture.type,se=Ft===Di||Ft===Ts||Ft===Xr||Ft===qr||Ft===kl||Ft===Hl,ge=ie.getClearColor(),ce=ie.getClearAlpha(),Se=ge.r,Ce=ge.g,A=ge.b;se?(g[0]=Se,g[1]=Ce,g[2]=A,g[3]=ce,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Se,x[1]=Ce,x[2]=A,x[3]=ce,D.clearBufferiv(D.COLOR,0,x))}else lt|=D.COLOR_BUFFER_BIT}H&&(lt|=D.DEPTH_BUFFER_BIT),st&&(lt|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),ie.dispose(),ft.dispose(),Kt.dispose(),U.dispose(),q.dispose(),$.dispose(),G.dispose(),qt.dispose(),de.dispose(),Q.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",it),Pt.removeEventListener("sessionend",K),nt.stop()};function Gt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let E=F.autoReset,H=Zt.enabled,st=Zt.autoUpdate,lt=Zt.needsUpdate,et=Zt.type;Z(),F.autoReset=E,Zt.enabled=H,Zt.autoUpdate=st,Zt.needsUpdate=lt,Zt.type=et}function Rt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function yt(E){let H=E.target;H.removeEventListener("dispose",yt),ae(H)}function ae(E){Te(E),U.remove(E)}function Te(E){let H=U.get(E).programs;H!==void 0&&(H.forEach(function(st){Q.releaseProgram(st)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,st,lt,et,Ft){H===null&&(H=Xt);let se=et.isMesh&&et.matrixWorld.determinant()<0,ge=ee(E,H,st,lt,et);j.setMaterial(lt,se);let ce=st.index,Se=1;if(lt.wireframe===!0){if(ce=_.getWireframeAttribute(st),ce===void 0)return;Se=2}let Ce=st.drawRange,A=st.attributes.position,ut=Ce.start*Se,Vt=(Ce.start+Ce.count)*Se;Ft!==null&&(ut=Math.max(ut,Ft.start*Se),Vt=Math.min(Vt,(Ft.start+Ft.count)*Se)),ce!==null?(ut=Math.max(ut,0),Vt=Math.min(Vt,ce.count)):A!=null&&(ut=Math.max(ut,0),Vt=Math.min(Vt,A.count));let fe=Vt-ut;if(fe<0||fe===1/0)return;qt.setup(et,lt,ge,st,ce);let xe,jt=Jt;if(ce!==null&&(xe=w.get(ce),jt=he,jt.setIndex(xe)),et.isMesh)lt.wireframe===!0?(j.setLineWidth(lt.wireframeLinewidth*Ut()),jt.setMode(D.LINES)):jt.setMode(D.TRIANGLES);else if(et.isLine){let Qt=lt.linewidth;Qt===void 0&&(Qt=1),j.setLineWidth(Qt*Ut()),et.isLineSegments?jt.setMode(D.LINES):et.isLineLoop?jt.setMode(D.LINE_LOOP):jt.setMode(D.LINE_STRIP)}else et.isPoints?jt.setMode(D.POINTS):et.isSprite&&jt.setMode(D.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),jt.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))jt.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let Qt=et._multiDrawStarts,Ie=et._multiDrawCounts,ve=et._multiDrawCount,Pe=ce?w.get(ce).bytesPerElement:1,Sn=U.get(lt).currentProgram.getUniforms();for(let ln=0;ln<ve;ln++)Sn.setValue(D,"_gl_DrawID",ln),jt.render(Qt[ln]/Pe,Ie[ln])}else if(et.isInstancedMesh)jt.renderInstances(ut,fe,et.count);else if(st.isInstancedBufferGeometry){let Qt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ie=Math.min(st.instanceCount,Qt);jt.renderInstances(ut,fe,Ie)}else jt.render(ut,fe)};function Ke(E,H,st){E.transparent===!0&&E.side===wn&&E.forceSinglePass===!1?(E.side=$n,E.needsUpdate=!0,dt(E,H,st),E.side=Ji,E.needsUpdate=!0,dt(E,H,st),E.side=wn):dt(E,H,st)}this.compile=function(E,H,st=null){st===null&&(st=E),p=Kt.get(st),p.init(H),M.push(p),st.traverseVisible(function(et){et.isLight&&et.layers.test(H.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),E!==st&&E.traverseVisible(function(et){et.isLight&&et.layers.test(H.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),p.setupLights();let lt=new Set;return E.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let Ft=et.material;if(Ft)if(Array.isArray(Ft))for(let se=0;se<Ft.length;se++){let ge=Ft[se];Ke(ge,st,et),lt.add(ge)}else Ke(Ft,st,et),lt.add(Ft)}),p=M.pop(),lt},this.compileAsync=function(E,H,st=null){let lt=this.compile(E,H,st);return new Promise(et=>{function Ft(){if(lt.forEach(function(se){U.get(se).currentProgram.isReady()&&lt.delete(se)}),lt.size===0){et(E);return}setTimeout(Ft,10)}ht.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let R=null;function W(E){R&&R(E)}function it(){nt.stop()}function K(){nt.start()}let nt=new up;nt.setAnimationLoop(W),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(E){R=E,Pt.setAnimationLoop(E),E===null?nt.stop():nt.start()},Pt.addEventListener("sessionstart",it),Pt.addEventListener("sessionend",K),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(H),H=Pt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,H,P),p=Kt.get(E,M.length),p.init(H),M.push(p),wt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ot.setFromProjectionMatrix(wt,Ci,H.reversedDepth),mt=this.localClippingEnabled,me=Et.init(this.clippingPlanes,mt),m=ft.get(E,y.length),m.init(),y.push(m),Pt.enabled===!0&&Pt.isPresenting===!0){let Ft=v.xr.getDepthSensingMesh();Ft!==null&&tt(Ft,H,-1/0,v.sortObjects)}tt(E,H,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(z,At),pt=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,pt&&ie.addToRenderList(m,E),this.info.render.frame++,me===!0&&Et.beginShadows();let st=p.state.shadowsArray;Zt.render(st,E,H),me===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();let lt=m.opaque,et=m.transmissive;if(p.setupLights(),H.isArrayCamera){let Ft=H.cameras;if(et.length>0)for(let se=0,ge=Ft.length;se<ge;se++){let ce=Ft[se];ot(lt,et,E,ce)}pt&&ie.render(E);for(let se=0,ge=Ft.length;se<ge;se++){let ce=Ft[se];_t(m,E,ce,ce.viewport)}}else et.length>0&&ot(lt,et,E,H),pt&&ie.render(E),_t(m,E,H);P!==null&&L===0&&(X.updateMultisampleRenderTarget(P),X.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,H),qt.resetDefaultState(),T=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],me===!0&&Et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function tt(E,H,st,lt){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)st=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ot.intersectsSprite(E)){lt&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(wt);let se=G.update(E),ge=E.material;ge.visible&&m.push(E,se,ge,st,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ot.intersectsObject(E))){let se=G.update(E),ge=E.material;if(lt&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),kt.copy(se.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(wt)),Array.isArray(ge)){let ce=se.groups;for(let Se=0,Ce=ce.length;Se<Ce;Se++){let A=ce[Se],ut=ge[A.materialIndex];ut&&ut.visible&&m.push(E,se,ut,st,kt.z,A)}}else ge.visible&&m.push(E,se,ge,st,kt.z,null)}}let Ft=E.children;for(let se=0,ge=Ft.length;se<ge;se++)tt(Ft[se],H,st,lt)}function _t(E,H,st,lt){let et=E.opaque,Ft=E.transmissive,se=E.transparent;p.setupLightsView(st),me===!0&&Et.setGlobalState(v.clippingPlanes,st),lt&&j.viewport(N.copy(lt)),et.length>0&&vt(et,H,st),Ft.length>0&&vt(Ft,H,st),se.length>0&&vt(se,H,st),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ot(E,H,st,lt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[lt.id]===void 0&&(p.state.transmissionRenderTarget[lt.id]=new gn(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Bn:Di,minFilter:Ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let Ft=p.state.transmissionRenderTarget[lt.id],se=lt.viewport||N;Ft.setSize(se.z*v.transmissionResolutionScale,se.w*v.transmissionResolutionScale);let ge=v.getRenderTarget(),ce=v.getActiveCubeFace(),Se=v.getActiveMipmapLevel();v.setRenderTarget(Ft),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),pt&&ie.render(st);let Ce=v.toneMapping;v.toneMapping=Pi;let A=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),p.setupLightsView(lt),me===!0&&Et.setGlobalState(v.clippingPlanes,lt),vt(E,st,lt),X.updateMultisampleRenderTarget(Ft),X.updateRenderTargetMipmap(Ft),ht.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Vt=0,fe=H.length;Vt<fe;Vt++){let xe=H[Vt],jt=xe.object,Qt=xe.geometry,Ie=xe.material,ve=xe.group;if(Ie.side===wn&&jt.layers.test(lt.layers)){let Pe=Ie.side;Ie.side=$n,Ie.needsUpdate=!0,xt(jt,st,lt,Qt,Ie,ve),Ie.side=Pe,Ie.needsUpdate=!0,ut=!0}}ut===!0&&(X.updateMultisampleRenderTarget(Ft),X.updateRenderTargetMipmap(Ft))}v.setRenderTarget(ge,ce,Se),v.setClearColor(O,k),A!==void 0&&(lt.viewport=A),v.toneMapping=Ce}function vt(E,H,st){let lt=H.isScene===!0?H.overrideMaterial:null;for(let et=0,Ft=E.length;et<Ft;et++){let se=E[et],ge=se.object,ce=se.geometry,Se=se.group,Ce=se.material;Ce.allowOverride===!0&&lt!==null&&(Ce=lt),ge.layers.test(st.layers)&&xt(ge,H,st,ce,Ce,Se)}}function xt(E,H,st,lt,et,Ft){E.onBeforeRender(v,H,st,lt,et,Ft),E.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),et.onBeforeRender(v,H,st,lt,E,Ft),et.transparent===!0&&et.side===wn&&et.forceSinglePass===!1?(et.side=$n,et.needsUpdate=!0,v.renderBufferDirect(st,H,lt,et,E,Ft),et.side=Ji,et.needsUpdate=!0,v.renderBufferDirect(st,H,lt,et,E,Ft),et.side=wn):v.renderBufferDirect(st,H,lt,et,E,Ft),E.onAfterRender(v,H,st,lt,et,Ft)}function dt(E,H,st){H.isScene!==!0&&(H=Xt);let lt=U.get(E),et=p.state.lights,Ft=p.state.shadowsArray,se=et.state.version,ge=Q.getParameters(E,et.state,Ft,H,st),ce=Q.getProgramCacheKey(ge),Se=lt.programs;lt.environment=E.isMeshStandardMaterial?H.environment:null,lt.fog=H.fog,lt.envMap=(E.isMeshStandardMaterial?$:q).get(E.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Se===void 0&&(E.addEventListener("dispose",yt),Se=new Map,lt.programs=Se);let Ce=Se.get(ce);if(Ce!==void 0){if(lt.currentProgram===Ce&&lt.lightsStateVersion===se)return Bt(E,ge),Ce}else ge.uniforms=Q.getUniforms(E),E.onBeforeCompile(ge,v),Ce=Q.acquireProgram(ge,ce),Se.set(ce,Ce),lt.uniforms=ge.uniforms;let A=lt.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(A.clippingPlanes=Et.uniform),Bt(E,ge),lt.needsLights=Ae(E),lt.lightsStateVersion=se,lt.needsLights&&(A.ambientLightColor.value=et.state.ambient,A.lightProbe.value=et.state.probe,A.directionalLights.value=et.state.directional,A.directionalLightShadows.value=et.state.directionalShadow,A.spotLights.value=et.state.spot,A.spotLightShadows.value=et.state.spotShadow,A.rectAreaLights.value=et.state.rectArea,A.ltc_1.value=et.state.rectAreaLTC1,A.ltc_2.value=et.state.rectAreaLTC2,A.pointLights.value=et.state.point,A.pointLightShadows.value=et.state.pointShadow,A.hemisphereLights.value=et.state.hemi,A.directionalShadowMap.value=et.state.directionalShadowMap,A.directionalShadowMatrix.value=et.state.directionalShadowMatrix,A.spotShadowMap.value=et.state.spotShadowMap,A.spotLightMatrix.value=et.state.spotLightMatrix,A.spotLightMap.value=et.state.spotLightMap,A.pointShadowMap.value=et.state.pointShadowMap,A.pointShadowMatrix.value=et.state.pointShadowMatrix),lt.currentProgram=Ce,lt.uniformsList=null,Ce}function Nt(E){if(E.uniformsList===null){let H=E.currentProgram.getUniforms();E.uniformsList=Kr.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Bt(E,H){let st=U.get(E);st.outputColorSpace=H.outputColorSpace,st.batching=H.batching,st.batchingColor=H.batchingColor,st.instancing=H.instancing,st.instancingColor=H.instancingColor,st.instancingMorph=H.instancingMorph,st.skinning=H.skinning,st.morphTargets=H.morphTargets,st.morphNormals=H.morphNormals,st.morphColors=H.morphColors,st.morphTargetsCount=H.morphTargetsCount,st.numClippingPlanes=H.numClippingPlanes,st.numIntersection=H.numClipIntersection,st.vertexAlphas=H.vertexAlphas,st.vertexTangents=H.vertexTangents,st.toneMapping=H.toneMapping}function ee(E,H,st,lt,et){H.isScene!==!0&&(H=Xt),X.resetTextureUnits();let Ft=H.fog,se=lt.isMeshStandardMaterial?H.environment:null,ge=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ws,ce=(lt.isMeshStandardMaterial?$:q).get(lt.envMap||se),Se=lt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Ce=!!st.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),A=!!st.morphAttributes.position,ut=!!st.morphAttributes.normal,Vt=!!st.morphAttributes.color,fe=Pi;lt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=v.toneMapping);let xe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,jt=xe!==void 0?xe.length:0,Qt=U.get(lt),Ie=p.state.lights;if(me===!0&&(mt===!0||E!==S)){let Pn=E===S&&lt.id===T;Et.setState(lt,E,Pn)}let ve=!1;lt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ie.state.version||Qt.outputColorSpace!==ge||et.isBatchedMesh&&Qt.batching===!1||!et.isBatchedMesh&&Qt.batching===!0||et.isBatchedMesh&&Qt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&Qt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&Qt.instancing===!1||!et.isInstancedMesh&&Qt.instancing===!0||et.isSkinnedMesh&&Qt.skinning===!1||!et.isSkinnedMesh&&Qt.skinning===!0||et.isInstancedMesh&&Qt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Qt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Qt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Qt.instancingMorph===!1&&et.morphTexture!==null||Qt.envMap!==ce||lt.fog===!0&&Qt.fog!==Ft||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Et.numPlanes||Qt.numIntersection!==Et.numIntersection)||Qt.vertexAlphas!==Se||Qt.vertexTangents!==Ce||Qt.morphTargets!==A||Qt.morphNormals!==ut||Qt.morphColors!==Vt||Qt.toneMapping!==fe||Qt.morphTargetsCount!==jt)&&(ve=!0):(ve=!0,Qt.__version=lt.version);let Pe=Qt.currentProgram;ve===!0&&(Pe=dt(lt,H,et));let Sn=!1,ln=!1,oi=!1,cn=Pe.getUniforms(),en=Qt.uniforms;if(j.useProgram(Pe.program)&&(Sn=!0,ln=!0,oi=!0),lt.id!==T&&(T=lt.id,ln=!0),Sn||S!==E){j.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),cn.setValue(D,"projectionMatrix",E.projectionMatrix),cn.setValue(D,"viewMatrix",E.matrixWorldInverse);let Yn=cn.map.cameraPosition;Yn!==void 0&&Yn.setValue(D,It.setFromMatrixPosition(E.matrixWorld)),at.logarithmicDepthBuffer&&cn.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&cn.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,ln=!0,oi=!0)}if(et.isSkinnedMesh){cn.setOptional(D,et,"bindMatrix"),cn.setOptional(D,et,"bindMatrixInverse");let Pn=et.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),cn.setValue(D,"boneTexture",Pn.boneTexture,X))}et.isBatchedMesh&&(cn.setOptional(D,et,"batchingTexture"),cn.setValue(D,"batchingTexture",et._matricesTexture,X),cn.setOptional(D,et,"batchingIdTexture"),cn.setValue(D,"batchingIdTexture",et._indirectTexture,X),cn.setOptional(D,et,"batchingColorTexture"),et._colorsTexture!==null&&cn.setValue(D,"batchingColorTexture",et._colorsTexture,X));let un=st.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&St.update(et,st,Pe),(ln||Qt.receiveShadow!==et.receiveShadow)&&(Qt.receiveShadow=et.receiveShadow,cn.setValue(D,"receiveShadow",et.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(en.envMap.value=ce,en.flipEnvMap.value=ce.isCubeTexture&&ce.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&H.environment!==null&&(en.envMapIntensity.value=H.environmentIntensity),ln&&(cn.setValue(D,"toneMappingExposure",v.toneMappingExposure),Qt.needsLights&&Re(en,oi),Ft&&lt.fog===!0&&gt.refreshFogUniforms(en,Ft),gt.refreshMaterialUniforms(en,lt,J,rt,p.state.transmissionRenderTarget[E.id]),Kr.upload(D,Nt(Qt),en,X)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Kr.upload(D,Nt(Qt),en,X),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&cn.setValue(D,"center",et.center),cn.setValue(D,"modelViewMatrix",et.modelViewMatrix),cn.setValue(D,"normalMatrix",et.normalMatrix),cn.setValue(D,"modelMatrix",et.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){let Pn=lt.uniformsGroups;for(let Yn=0,fh=Pn.length;Yn<fh;Yn++){let Us=Pn[Yn];de.update(Us,Pe),de.bind(Us,Pe)}}return Pe}function Re(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Ae(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,H,st){let lt=U.get(E);lt.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),U.get(E.texture).__webglTexture=H,U.get(E.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:st,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){let st=U.get(E);st.__webglFramebuffer=H,st.__useDefaultFramebuffer=H===void 0};let _e=D.createFramebuffer();this.setRenderTarget=function(E,H=0,st=0){P=E,C=H,L=st;let lt=!0,et=null,Ft=!1,se=!1;if(E){let ce=U.get(E);if(ce.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(D.FRAMEBUFFER,null),lt=!1;else if(ce.__webglFramebuffer===void 0)X.setupRenderTarget(E);else if(ce.__hasExternalTextures)X.rebindTextures(E,U.get(E.texture).__webglTexture,U.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let A=E.depthTexture;if(ce.__boundDepthTexture!==A){if(A!==null&&U.has(A)&&(E.width!==A.image.width||E.height!==A.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(E)}}let Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(se=!0);let Ce=U.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[H])?et=Ce[H][st]:et=Ce[H],Ft=!0):E.samples>0&&X.useMultisampledRTT(E)===!1?et=U.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?et=Ce[st]:et=Ce,N.copy(E.viewport),Y.copy(E.scissor),B=E.scissorTest}else N.copy(Ct).multiplyScalar(J).floor(),Y.copy(Wt).multiplyScalar(J).floor(),B=zt;if(st!==0&&(et=_e),j.bindFramebuffer(D.FRAMEBUFFER,et)&&lt&&j.drawBuffers(E,et),j.viewport(N),j.scissor(Y),j.setScissorTest(B),Ft){let ce=U.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,ce.__webglTexture,st)}else if(se){let ce=H;for(let Se=0;Se<E.textures.length;Se++){let Ce=U.get(E.textures[Se]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Se,Ce.__webglTexture,st,ce)}}else if(E!==null&&st!==0){let ce=U.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ce.__webglTexture,st)}T=-1},this.readRenderTargetPixels=function(E,H,st,lt,et,Ft,se,ge=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=U.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&se!==void 0&&(ce=ce[se]),ce){j.bindFramebuffer(D.FRAMEBUFFER,ce);try{let Se=E.textures[ge],Ce=Se.format,A=Se.type;if(!at.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(A)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-lt&&st>=0&&st<=E.height-et&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),D.readPixels(H,st,lt,et,ue.convert(Ce),ue.convert(A),Ft))}finally{let Se=P!==null?U.get(P).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(E,H,st,lt,et,Ft,se,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=U.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&se!==void 0&&(ce=ce[se]),ce)if(H>=0&&H<=E.width-lt&&st>=0&&st<=E.height-et){j.bindFramebuffer(D.FRAMEBUFFER,ce);let Se=E.textures[ge],Ce=Se.format,A=Se.type;if(!at.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(A))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.bufferData(D.PIXEL_PACK_BUFFER,Ft.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),D.readPixels(H,st,lt,et,ue.convert(Ce),ue.convert(A),0);let Vt=P!==null?U.get(P).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,Vt);let fe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await zd(D,fe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ft),D.deleteBuffer(ut),D.deleteSync(fe),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,st=0){let lt=Math.pow(2,-st),et=Math.floor(E.image.width*lt),Ft=Math.floor(E.image.height*lt),se=H!==null?H.x:0,ge=H!==null?H.y:0;X.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,st,0,0,se,ge,et,Ft),j.unbindTexture()};let Dt=D.createFramebuffer(),Ee=D.createFramebuffer();this.copyTextureToTexture=function(E,H,st=null,lt=null,et=0,Ft=null){Ft===null&&(et!==0?(Lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ft=et,et=0):Ft=0);let se,ge,ce,Se,Ce,A,ut,Vt,fe,xe=E.isCompressedTexture?E.mipmaps[Ft]:E.image;if(st!==null)se=st.max.x-st.min.x,ge=st.max.y-st.min.y,ce=st.isBox3?st.max.z-st.min.z:1,Se=st.min.x,Ce=st.min.y,A=st.isBox3?st.min.z:0;else{let un=Math.pow(2,-et);se=Math.floor(xe.width*un),ge=Math.floor(xe.height*un),E.isDataArrayTexture?ce=xe.depth:E.isData3DTexture?ce=Math.floor(xe.depth*un):ce=1,Se=0,Ce=0,A=0}lt!==null?(ut=lt.x,Vt=lt.y,fe=lt.z):(ut=0,Vt=0,fe=0);let jt=ue.convert(H.format),Qt=ue.convert(H.type),Ie;H.isData3DTexture?(X.setTexture3D(H,0),Ie=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(X.setTexture2DArray(H,0),Ie=D.TEXTURE_2D_ARRAY):(X.setTexture2D(H,0),Ie=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);let ve=D.getParameter(D.UNPACK_ROW_LENGTH),Pe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Sn=D.getParameter(D.UNPACK_SKIP_PIXELS),ln=D.getParameter(D.UNPACK_SKIP_ROWS),oi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,A);let cn=E.isDataArrayTexture||E.isData3DTexture,en=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){let un=U.get(E),Pn=U.get(H),Yn=U.get(un.__renderTarget),fh=U.get(Pn.__renderTarget);j.bindFramebuffer(D.READ_FRAMEBUFFER,Yn.__webglFramebuffer),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,fh.__webglFramebuffer);for(let Us=0;Us<ce;Us++)cn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,U.get(E).__webglTexture,et,A+Us),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,U.get(H).__webglTexture,Ft,fe+Us)),D.blitFramebuffer(Se,Ce,se,ge,ut,Vt,se,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(et!==0||E.isRenderTargetTexture||U.has(E)){let un=U.get(E),Pn=U.get(H);j.bindFramebuffer(D.READ_FRAMEBUFFER,Dt),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ee);for(let Yn=0;Yn<ce;Yn++)cn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,un.__webglTexture,et,A+Yn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,un.__webglTexture,et),en?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pn.__webglTexture,Ft,fe+Yn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pn.__webglTexture,Ft),et!==0?D.blitFramebuffer(Se,Ce,se,ge,ut,Vt,se,ge,D.COLOR_BUFFER_BIT,D.NEAREST):en?D.copyTexSubImage3D(Ie,Ft,ut,Vt,fe+Yn,Se,Ce,se,ge):D.copyTexSubImage2D(Ie,Ft,ut,Vt,Se,Ce,se,ge);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else en?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ie,Ft,ut,Vt,fe,se,ge,ce,jt,Qt,xe.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,Ft,ut,Vt,fe,se,ge,ce,jt,xe.data):D.texSubImage3D(Ie,Ft,ut,Vt,fe,se,ge,ce,jt,Qt,xe):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ft,ut,Vt,se,ge,jt,Qt,xe.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ft,ut,Vt,xe.width,xe.height,jt,xe.data):D.texSubImage2D(D.TEXTURE_2D,Ft,ut,Vt,se,ge,jt,Qt,xe);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Sn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ln),D.pixelStorei(D.UNPACK_SKIP_IMAGES,oi),Ft===0&&H.generateMipmaps&&D.generateMipmap(Ie),j.unbindTexture()},this.initRenderTarget=function(E){U.get(E).__webglFramebuffer===void 0&&X.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?X.setTextureCube(E,0):E.isData3DTexture?X.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?X.setTexture2DArray(E,0):X.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){C=0,L=0,P=null,j.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=je._getDrawingBufferColorSpace(t),e.unpackColorSpace=je._getUnpackColorSpace()}};var Tc=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ey=new is(-1,1,1,-1,0,1),Fu=class extends Je{constructor(){super(),this.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new be([0,2,0,0,2,0],2))}},Sy=new Fu,As=class{constructor(t){this._mesh=new $t(Sy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ey)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ac={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var gp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Qr=class s extends Tc{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Tt(t.x,t.y):new Tt(256,256),this.clearColor=new Ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(r,o,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let f=new gn(r,o,{type:Bn});f.texture.name="UnrealBloomPass.h"+l,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new gn(r,o,{type:Bn});d.texture.name="UnrealBloomPass.v"+l,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=gp;this.highPassUniforms=Fi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new Tt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fi.clone(Ac.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:Ac.vertexShader,fragmentShader:Ac.fragmentShader,blending:ai,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ht,this._oldClearAlpha=1,this._basic=new bn,this._fsQuad=new As(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Tt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new nn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Tt(.5,.5)},direction:{value:new Tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new nn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Qr.BlurDirectionX=new Tt(1,0);Qr.BlurDirectionY=new Tt(0,1);var xp={ultra:{label:"Ultra",pixelRatio:2,msaa:4,shadow:4096,shadowRange:150,farShadow:2048,ao:16,reflections:.75,bloom:!0,grade:!0,shafts:!0,carProbe:256,sharpen:.55,lamps:!0,dof:!0,sky:[1024,36],facade:520},high:{label:"High",pixelRatio:1.5,msaa:4,shadow:2048,shadowRange:120,farShadow:2048,ao:10,reflections:.5,bloom:!0,grade:!0,shafts:!0,carProbe:128,sharpen:.55,lamps:!0,dof:!0,sky:[1024,28],facade:360},medium:{label:"Balanced",pixelRatio:1.2,msaa:2,shadow:2048,shadowRange:90,farShadow:1024,ao:6,reflections:0,bloom:!0,grade:!0,shafts:!0,carProbe:0,sharpen:.45,lamps:!0,dof:!1,sky:[768,20],facade:240},low:{label:"Performance",pixelRatio:1,msaa:0,shadow:1024,shadowRange:70,farShadow:0,ao:0,reflections:0,bloom:!1,grade:!1,shafts:!1,carProbe:0,sharpen:.3,lamps:!1,dof:!1,sky:[512,14],facade:130}},vp={auto:0,"720p":1280*720,"1080p":1920*1080,"1440p":2560*1440,native:1/0},zu={clean:{aberration:0,grain:0,blur:0,vignette:.14},subtle:{aberration:5e-4,grain:.015,blur:.55,vignette:.26},cinematic:{aberration:.0015,grain:.035,blur:1,vignette:.32}},Ic=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Uu=`
  uniform sampler2D tDepth;
  uniform vec2 uNearFar;
  uniform vec2 uInvProj; // 1 / projection[0][0], 1 / projection[1][1]
  float paViewZ(float d) { return (uNearFar.x * uNearFar.y) / ((uNearFar.y - uNearFar.x) * d - uNearFar.y); }
  vec3 paViewPos(vec2 uv) {
    float z = paViewZ(texture2D(tDepth, uv).x);
    return vec3((uv * 2.0 - 1.0) * uInvProj * -z, z);
  }`,Ty={uniforms:{tDepth:{value:null},uNearFar:{value:new Tt},uInvProj:{value:new Tt},uTexel:{value:new Tt},uRadius:{value:1.15},uStrength:{value:1}},vertexShader:Ic,fragmentShader:`
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
    }`},Ay={uniforms:{tAO:{value:null},tDepth:{value:null},uNearFar:{value:new Tt},uInvProj:{value:new Tt},uTexel:{value:new Tt},uDepthTexel:{value:new Tt}},vertexShader:Ic,fragmentShader:`
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
    }`},Ry={uniforms:{tScene:{value:null},tAO:{value:null},tDepth:{value:null},aoOn:{value:0},sunPos:{value:new Tt(.5,.5)},strength:{value:0},color:{value:new Ht(1,.7,.4)},aspect:{value:1}},vertexShader:Ic,fragmentShader:`
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
    }`},Cy={uniforms:{tHdr:{value:null},tDepth:{value:null},uNearFar:{value:new Tt},uInvProj:{value:new Tt},exposure:{value:1},time:{value:0},resolution:{value:new Tt(1,1)},speedBlur:{value:0},camBlur:{value:new Tt},aberration:{value:.0015},vignette:{value:.32},grain:{value:.035},sharpen:{value:0},sunPos:{value:new Tt(.5,.5)},sunVisible:{value:0},sunColor:{value:new Ht(1,.7,.4)},flash:{value:0},night:{value:0},warmth:{value:0},dof:{value:0},focus:{value:10},grade:{value:1},debugView:{value:0},tDebug:{value:null}},vertexShader:Ic,fragmentShader:`
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
    }`};function Rc(s,t={}){return new nn({uniforms:Fi.clone(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,defines:t,depthTest:!1,depthWrite:!1,toneMapped:!1})}var Cc=class{constructor(t){this.renderer=new Ec({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1});let e=this.renderer;e.toneMapping=Pi,e.toneMappingExposure=.85,e.shadowMap.enabled=!0,e.shadowMap.type=Rl,this.quality=null,this.scale=1,this.frameTimes=[],this.adaptTimer=0,this.quad=new As(null),this.resolution="1080p",this.filmName="subtle",this.film=zu.subtle,this.targets=null,this.size=new Tt}init(t,e){this.scene=t,this.camera=e}buildPasses(){let t=this.quality;for(let n of[this.aoMat,this.aoBlurMat,this.lightMat,this.lensMat])n?.dispose();this.bloomPass?.dispose(),this.aoMat=t.ao?Rc(Ty,{AO_SAMPLES:t.ao}):null,this.aoBlurMat=t.ao?Rc(Ay):null,this.lightMat=Rc(Ry),this.lensMat=Rc(Cy),this.bloomPass=t.bloom?new Qr(new Tt(4,4),.34,.5,1):null,this.grade={uniforms:this.lensMat.uniforms},this.shafts={uniforms:this.lightMat.uniforms},this.bloom=this.bloomPass;let e=this.lensMat.uniforms;e.sharpen.value=t.sharpen,e.grade.value=t.grade?1:0,this.applyFilm(),this.disposeTargets(),this.applySize()}setFilm(t){this.filmName=t in zu?t:"subtle",this.film=zu[this.filmName],this.lensMat&&this.applyFilm()}applyFilm(){let t=this.lensMat.uniforms,e=this.film,n=this.quality.grade;t.aberration.value=n?e.aberration:0,t.grain.value=n?e.grain:0,t.vignette.value=e.vignette}setResolution(t){this.resolution=t in vp?t:"1080p",this.scale=1,this.quality&&this.applySize()}disposeTargets(){if(this.targets){for(let t of Object.values(this.targets))t.depthTexture?.dispose(),t.dispose();this.targets=null}}buildTargets(t,e){this.disposeTargets();let n=this.quality,i=new es(t,e);i.minFilter=i.magFilter=jn;let r=new gn(t,e,{type:Bn,samples:n.msaa,depthTexture:i}),o=new gn(t,e,{type:Bn,depthBuffer:!1});if(this.targets={scene:r,hdr:o},n.ao){let a=Math.max(2,Math.round(t/2)),c=Math.max(2,Math.round(e/2));this.targets.ao=new gn(a,c,{depthBuffer:!1}),this.targets.aoBlur=new gn(a,c,{depthBuffer:!1})}this.bloomPass?.setSize(t,e)}setQuality(t){this.quality=xp[t]||xp.high,this.qualityName=t,this.scale=1,this.renderer.shadowMap.enabled=!0,this.buildPasses()}applySize(){let t=innerWidth,e=innerHeight,n=devicePixelRatio||1,i=vp[this.resolution],r=i?Math.min(n,Math.sqrt(i/(t*e))):Math.min(n,this.quality.pixelRatio)*this.scale;this.renderer.setPixelRatio(r),this.renderer.setSize(t,e);let o=Math.max(2,Math.round(t*r)),a=Math.max(2,Math.round(e*r));(!this.targets||this.size.x!==o||this.size.y!==a)&&(this.size.set(o,a),this.buildTargets(o,a)),this.lensMat.uniforms.resolution.value.set(o,a),this.lightMat.uniforms.aspect.value=t/e,this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.onResize?.()}adapt(t){if(this.resolution!=="auto"||(this.frameTimes.push(t),this.frameTimes.length>90&&this.frameTimes.shift(),this.adaptTimer+=t,this.adaptTimer<2||this.frameTimes.length<60))return;this.adaptTimer=0;let e=[...this.frameTimes].sort((r,o)=>r-o),n=e[Math.floor(e.length/2)],i=this.scale;n>1/45?i=Math.max(.6,this.scale-.1):n<1/58&&this.scale<1&&(i=Math.min(1,this.scale+.05)),Math.abs(i-this.scale)>.001&&(this.scale=i,this.applySize())}beginFrame(){this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0}blit(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.quad.render(this.renderer)}render(){let t=this.renderer,e=this.quality,n=this.targets,i=this.camera,r=1/i.projectionMatrix.elements[0],o=1/i.projectionMatrix.elements[5],a=f=>{f.tDepth.value=n.scene.depthTexture,f.uNearFar.value.set(i.near,i.far),f.uInvProj.value.set(r,o)};t.setRenderTarget(n.scene),t.render(this.scene,i);let c=n.scene,h=this.lightMat.uniforms;if(e.shafts||(h.strength.value=0),e.ao||h.strength.value>.002||this.bloomPass){if(e.ao){let f=this.aoMat.uniforms;a(f),f.uTexel.value.set(1/n.scene.width,1/n.scene.height),this.blit(this.aoMat,n.ao);let d=this.aoBlurMat.uniforms;a(d),d.tAO.value=n.ao.texture,d.uTexel.value.set(1/n.ao.width,1/n.ao.height),d.uDepthTexel.value.set(1/n.scene.width,1/n.scene.height),this.blit(this.aoBlurMat,n.aoBlur),h.tAO.value=n.aoBlur.texture}h.aoOn.value=e.ao?1:0,h.tScene.value=n.scene.texture,h.tDepth.value=n.scene.depthTexture,this.blit(this.lightMat,n.hdr),c=n.hdr,this.bloomPass&&this.bloomPass.render(t,null,n.hdr,0,!1)}let l=this.lensMat.uniforms;a(l),l.tHdr.value=c.texture,l.exposure.value=t.toneMappingExposure,e.dof||(l.dof.value=0),l.debugView.value=this.debugView==="ao"&&n.aoBlur?1:this.debugView==="depth"?2:0,l.tDebug.value=n.aoBlur?n.aoBlur.texture:null,this.blit(this.lensMat,null)}};var Rs=`
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
`,yp=`
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
`,Pc=`
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
`;var _p=(s,t)=>{let e=[];for(let n=s;n<=t;n+=160)e.push(n);return e},Ue=_p(-320,1600),Ne=_p(-1600,1600),Qe=Ue[0],qe=Ue[Ue.length-1],He=Ne[0],$e=Ne[Ne.length-1],Me=13,zi=6,ua=[3.4,9.2],le=.16,ti=-418,Nu=-.62,dn={from:-333,to:-342},Un=-357,ze={minX:-412,maxX:qe+32,minZ:He-76,maxZ:$e+76},to=Ue.slice(0,-1).map(s=>s+160/2),Cs=Ne.slice(0,-1).map(s=>s+160/2),Ei=160-Me*2,Gi={rampStart:-342,x0:-374,x1:-556,z:-160,halfWidth:9,deckY:2.6},Wn=[Gi,{rampStart:-342,x0:-374,x1:-640,z:1120,halfWidth:7,deckY:2.6,plain:!0}];function rr(s,t){for(let e of Wn)if(Math.abs(t-e.z)<=e.halfWidth&&s<=e.rampStart&&s>=e.x1)return e;return null}function Is(s,t){let e=rr(s,t);return e?s>e.x0?le+(e.deckY-le)*(e.rampStart-s)/(e.rampStart-e.x0):e.deckY:null}var Xn={sunset:{name:"SUNSET RUN",blurb:"The classic loop round the old town.",route:[[-320,40],[-320,-300],[-170,-320],[-6,-320],[150,-320],[160,-10],[10,160],[-300,160]]},downtown:{name:"DOWNTOWN DASH",blurb:"A loop through the towers and back to the pier.",route:[[-320,-300],[10,-320],[330,-320],[630,-320],[640,-470],[640,-790],[950,-800],[960,-490],[960,-170],[650,-160],[330,-160],[10,-160],[-300,-160]],start:{x:-320+3.4,z:30,heading:0}},grand:{name:"GRAND TOUR",blurb:"The whole city, coast to foothills.",route:[[-320,40],[-320,-620],[-320,-1270],[-310,-1600],[470,-1600],[1270,-1600],[1600,-1590],[1600,-810],[1600,-10],[1600,790],[1600,1590],[810,1600],[10,1600],[-320,1590],[-320,970],[-320,420]]}},S2=Xn.sunset.route,Dc=15,as=[{axis:"ns",road:-160,s:-240,side:1},{axis:"ns",road:0,s:-80,side:-1},{axis:"ns",road:160,s:80,side:1},{axis:"ns",road:0,s:400,side:1},{axis:"ns",road:-320,s:-400,side:1},{axis:"ns",road:320,s:-240,side:-1},{axis:"ew",road:-320,s:-80,side:1},{axis:"ew",road:0,s:80,side:-1},{axis:"ew",road:160,s:-240,side:1},{axis:"ew",road:320,s:240,side:-1},{axis:"ew",road:-160,s:240,side:1},{axis:"ew",road:480,s:-80,side:-1}];for(let s of[-320,0,640,960,1280,1600])for(let t=0,e=He+80+(s===0?160:0);e<$e;e+=480,t++)Math.abs(e)<520&&s<=320||as.push({axis:"ns",road:s,s:e,side:t%2?1:-1});for(let s of[-1280,-800,-480,800,1280])for(let t=0,e=Qe+240;e<qe;e+=480,t++)Math.abs(s)<520&&e<=320||as.push({axis:"ew",road:s,s:e,side:t%2?-1:1});function or(s,t=15.4){return s.axis==="ns"?[s.road+s.side*t,s.s]:[s.s,s.road+s.side*t]}var Nn={x:-320+ua[0],z:246,heading:0},Mp=(s,t,e)=>Math.min(Math.max(Math.round((s-t)/160)*160+t,t),e),ls=s=>Mp(s,Qe,qe),Ps=s=>Mp(s,He,$e);var ar=s=>Math.min(Math.max(Math.floor((s-Qe)/160),0),to.length-1)*160+Qe+160/2,fa=s=>Math.min(Math.max(Math.floor((s-He)/160),0),Cs.length-1)*160+He+160/2;function da(s,t){return s<Un?"sand":s<dn.to?"grass":s<dn.from||s>qe+Me||t<He-Me||t>$e+Me?"curb":Math.abs(s-ls(s))<Me||Math.abs(t-Ps(t))<Me?"road":"curb"}function bp(s){return s>=Un?0:Math.max(-.02-(Un-s)*.0105,Nu-.3)}var os={ocean:["OCEAN DRIVE","Vista Pac\xEDfica Beach",.3,.2],seaview:["SEAVIEW","Coastal Quarter",.5,.2],downtown:["DOWNTOWN","Financial District",1,.2],palm:["PALM DISTRICT","San Aurelio",.65,.6],southbank:["SOUTHBANK","Harbor Heights",.4,.6],northshore:["NORTHSHORE","Lighthouse Point",.35,.5],midtown:["MIDTOWN","Alta Vista",.8,.3],laurel:["LAUREL PARK","The Gardens",.35,.9],arts:["ARTS DISTRICT","Cannery Row",.6,.3],port:["PORT DISTRICT","Bayfront Docks",.55,.1],marina:["MARINA","South Beach",.4,.3],eastside:["EASTSIDE","Jacaranda Heights",.35,.8],foothills:["FOOTHILLS","Ridgeline",.25,.8]};function Ui(s,t){return s<=320&&Math.abs(t)<=480?s<-170?"seaview":s>0&&t<-20?"downtown":t>250?"southbank":"palm":s<-170?t<-480?"northshore":"marina":s>1440?"foothills":t<-1120?"northshore":t>1120?"port":s>1120?"eastside":t<=-800?"midtown":t<0&&s>0?"downtown":t>640?"arts":s>480?"laurel":t>160?"southbank":"palm"}function Lc(s,t){return s<-330?os.ocean:os[Ui(ar(s),fa(t))]}var Ou={"-320":"Ocean Drive","-160":"Seaview Ave",0:"Aurelio Blvd",160:"Grand Ave",320:"Hillcrest Ave",480:"Mission Ave",640:"Centro Blvd",800:"Laurel Ave",960:"Vista Ave",1120:"Jacaranda Ave",1280:"Canyon Ave",1440:"Foothill Blvd",1600:"Ridgeline Dr"},Bu={"-1600":"Northshore Rd","-1440":"Lighthouse St","-1280":"Coral St","-1120":"Mariposa St","-960":"Alta St","-800":"Dolores St","-640":"Cabrillo St","-480":"Marina St","-320":"Sunset Blvd","-160":"Pier Ave",0:"Palm St",160:"Harbor St",320:"Rosa St",480:"Southbank Rd",640:"Cannery St",800:"Dock St",960:"Foundry St",1120:"Depot St",1280:"Terminal St",1440:"Breakwater St",1600:"Bayfront Rd"};function wp(s,t){let e=ls(s),n=Ps(t);return Math.abs(s-e)<Me+3?Ou[String(e)]:Math.abs(t-n)<Me+3?Bu[String(n)]:s<-330?"Beachfront":"Off road"}var li={paFarShadowMap:{value:null},paFarShadowMatrix:{value:new ne},paFarShadow:{value:new Ze(0,1/2048,.7,0)},paLamp:{value:new Ze(0,1,.71,.42)},paCloud:{value:new Ze(0,.42,0,0)},paSunDirW:{value:new I(0,1,0)}},Hu=`
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
`,Ep=(le+8.7).toFixed(2),yn=s=>s.toFixed(1),Sp=ze.minZ+16,Iy=Wn.map(s=>`abs(pz - ${yn(s.z)}) > 12.0`).join(" && "),Tp=`
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

  float paRoadX(float x) { return clamp(floor((x - ${yn(Qe)}) / ${yn(160)} + 0.5), 0.0, ${yn(Ue.length-1)}) * ${yn(160)} + ${yn(Qe)}; }
  float paRoadZ(float z) { return clamp(floor((z - ${yn(He)}) / ${yn(160)} + 0.5), 0.0, ${yn(Ne.length-1)}) * ${yn(160)} + ${yn(He)}; }

  // The street lamp nearest to wp on one side of its road (see the layout in props.js).
  // Returns its position, or y < 0 where no lamp stands.
  vec3 paLampNear(vec3 wp, float side, bool avenue) {
    float off = side > 0.0 ? 19.0 : 0.0;
    if (avenue) {
      float rx = paRoadX(wp.x);
      float z0 = ${yn(He-40)};
      float zb = z0 + floor((wp.z - z0 - off) / 38.0 + 0.5) * 38.0;
      bool ok = zb > z0 - 0.5 && zb < ${yn($e+40.5)} && abs(zb - paRoadZ(zb)) >= ${yn(Me+7)} && !(rx < ${yn(Qe+1)} && side < 0.0);
      return vec3(rx + side * ${yn(Me-1.6)}, ok ? ${Ep} : -1.0, zb + off);
    }
    float rz = paRoadZ(wp.z);
    float x0 = ${yn(Qe+20)};
    float xb = x0 + floor((wp.x - x0 - off) / 38.0 + 0.5) * 38.0;
    bool ok = xb > x0 - 0.5 && xb < ${yn(qe+.5)} && abs(xb - paRoadX(xb)) >= ${yn(Me+7)};
    return vec3(xb + off, ok ? ${Ep} : -1.0, rz + side * ${yn(Me-1.6)});
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
`;function Ap(){let s=Le.lights_fragment_begin,t=`directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
    float paProm = abs( vFogWorld.x - ${yn((dn.from+dn.to)/2)} );
    if ( paProm < 20.0 ) {
      float pz = ${yn(Sp)} + floor( ( vFogWorld.z - ${yn(Sp)} ) / 24.0 + 0.5 ) * 24.0;
      float paPatch = ( 1.0 - smoothstep( 7.0, 12.0, abs( pz - vFogWorld.z ) ) ) * ( 1.0 - smoothstep( 12.0, 20.0, paProm ) ) * paLampFade;
      if ( ${Iy} && paPatch > 0.001 ) {
        directLight.color = paLampLight( vFogWorld, vec3( ${yn((dn.from+dn.to)/2)}, ${(le+4.4).toFixed(2)}, pz ), 0.0, paDir ) * paPatch * 0.5;
        directLight.direction = normalize( mat3( viewMatrix ) * paDir );
        directLight.visible = true;
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
      }
    }
  }
#endif
`,Le.lights_fragment_begin=s}var Fc=new I,zc=new I,ku=new I,Py=new ne().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),Uc=class{constructor(t,e){this.renderer=t,this.scene=e,this.size=0,this.range=560,this.target=null,this.camera=new is(-this.range,this.range,this.range,-this.range,1,2700),this.camera.layers.set(0),this.depthMaterial=new bn({colorWrite:!1,side:wn}),this.center=new I(1e9,0,0),this.dir=new I,this.timer=0,this.dirty=!0,this.blank=this.makeTarget(2);let n=t.getRenderTarget();t.setRenderTarget(this.blank),t.clear(),t.setRenderTarget(n),li.paFarShadowMap.value=this.blank.depthTexture}makeTarget(t){let e=new es(t,t);return e.compareFunction=ca,e.minFilter=e.magFilter=ni,new gn(t,t,{depthTexture:e})}setSize(t){t!==this.size&&(this.size=t,this.target?.depthTexture.dispose(),this.target?.dispose(),this.target=null,t>0&&(this.target=this.makeTarget(t),li.paFarShadow.value.y=1/t),li.paFarShadowMap.value=this.blank.depthTexture,li.paFarShadow.value.x=0,this.dirty=!0)}update(t,e,n,i){if(!this.target)return;this.timer-=t;let r=Math.hypot(e.x-this.center.x,e.z-this.center.z),o=this.dir.dot(n)<.99998;if(!this.dirty&&!o&&(r<30||this.timer>0)&&r<140)return;this.dirty=!1,this.timer=.4,this.dir.copy(n),this.center.copy(e);let a=this.range*2/this.size;Fc.crossVectors(zc.set(0,1,0),n).normalize(),zc.crossVectors(n,Fc),ku.copy(Fc).multiplyScalar(Math.round(e.dot(Fc)/a)*a).addScaledVector(zc,Math.round(e.dot(zc)/a)*a).addScaledVector(n,e.dot(n));let c=this.camera;c.position.copy(ku).addScaledVector(n,1500),c.up.set(0,1,0),c.lookAt(ku),c.updateMatrixWorld();let h=this.renderer,l=h.getRenderTarget(),f=this.scene.overrideMaterial;this.scene.overrideMaterial=this.depthMaterial,i(()=>{h.setRenderTarget(this.target),h.clear(),h.render(this.scene,c)}),this.scene.overrideMaterial=f,h.setRenderTarget(l),li.paFarShadowMatrix.value.copy(Py).multiply(c.projectionMatrix).multiply(c.matrixWorldInverse),li.paFarShadowMap.value=this.target.depthTexture,li.paFarShadow.value.x=1}};var Dy=`
precision highp float;
varying vec2 vUv;
uniform vec4 uRect; // u0, v0, u1, v1 of the strip being painted
uniform vec2 uWind;
uniform vec3 uLightDir;
${Rs}
${Hu}
${yp}

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
}`,eo=64,Nc=class{constructor(t,e){this.renderer=t,this.shared=e,this.width=0,this.steps=0,this.targets=[],this.a=0,this.b=0,this.work=1,this.progress=0,this.pending=!0,this.material=null,this.quad=new As(null),this.onComplete=null}setQuality(t,e){if(!(t===this.width&&e===this.steps)){this.width=t,this.steps=e;for(let n of this.targets)n.dispose();this.targets=[0,1,2].map(()=>{let n=new gn(t,t/2,{type:Bn,depthBuffer:!1});return n.texture.wrapS=Ms,n.texture.minFilter=n.texture.magFilter=ni,n.texture.generateMipmaps=!1,n}),this.material?.dispose(),this.frozen={skySunDir:{value:new I},skyMoonDir:{value:new I},skyTurbidity:{value:0},skyRayleigh:{value:0},skyMie:{value:0},skyMieG:{value:0},skyCloudCover:{value:0},skyNight:{value:0},skyCloudLit:{value:new Ht},skyCloudShade:{value:new Ht},uWind:{value:new Tt},uLightDir:{value:new I},uRect:{value:new Ze}},this.material=new nn({uniforms:this.frozen,defines:{CLOUD_STEPS:e},depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:`varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:Dy}),this.quad.material=this.material,this.a=this.b=0,this.work=1,this.progress=0,this.pending=!0}}freeze(t,e){let n=this.frozen,i=this.shared;for(let r of["skySunDir","skyMoonDir","skyCloudLit","skyCloudShade"])n[r].value.copy(i[r].value);for(let r of["skyTurbidity","skyRayleigh","skyMie","skyMieG","skyCloudCover","skyNight"])n[r].value=i[r].value;n.uWind.value.copy(t),n.uLightDir.value.copy(e)}paint(t,e){let n=this.renderer,i=this.targets[this.work],r=n.getRenderTarget(),o=Math.round(t/eo*this.width),a=Math.round(e/eo*this.width);i.viewport.set(o,0,a-o,i.height),i.scissor.set(o,0,a-o,i.height),i.scissorTest=!0,this.frozen.uRect.value.set(o/this.width,0,a/this.width,1),n.setRenderTarget(i),this.quad.render(n),n.setRenderTarget(r)}publish(){let t=this.shared;t.skyPanoA.value=this.targets[this.a].texture,t.skyPanoB.value=this.targets[this.b].texture,t.skyPanoBlend.value=this.a===this.b?0:this.progress/eo}update(t,e,n=1){if(!this.material)return;if(this.pending){this.pending=!1,this.freeze(t,e),this.paint(0,eo),this.a=this.b=this.work,this.work=(this.work+1)%3,this.progress=0,this.publish(),this.onComplete?.(!0);return}this.progress===0&&this.freeze(t,e);let i=Math.min(eo,this.progress+n);if(this.paint(this.progress,i),this.progress=i,this.progress>=eo){let r=this.work;this.work=[0,1,2].find(o=>o!==this.b&&o!==r),this.a=this.b,this.b=r,this.progress=0,this.onComplete?.(!1)}this.publish()}};var Bc={golden:19.22,dusk:19.95,night:23.2,dawn:6.9,noon:13.2},Rp=6.4,Ly=19.7,tn={skySunDir:{value:new I(-.9,.12,-.3).normalize()},skyMoonDir:{value:new I(.6,.5,.4).normalize()},skyTurbidity:{value:6},skyRayleigh:{value:2.2},skyMie:{value:.006},skyMieG:{value:.82},skyIntensity:{value:.75},skyCloudCover:{value:.47},skyTime:{value:0},skyNight:{value:0},skyCloudLit:{value:new Ht},skyCloudShade:{value:new Ht},fogSunColor:{value:new Ht},fogSunDir:{value:new I},fogHeightFalloff:{value:.012},nightFactor:{value:0},worldTime:{value:0},skyPanoA:{value:null},skyPanoB:{value:null},skyPanoBlend:{value:0},skySunColor:{value:new Ht},fogPano:{value:1},mirrorPass:{value:0}};Le.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorld;
#endif`;Le.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorld = transpose(mat3(viewMatrix)) * (mvPosition.xyz - viewMatrix[3].xyz);
#endif`;Le.fog_pars_fragment=`
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
${Tp}`;Ap();Le.fog_fragment=`
#ifdef USE_FOG
  gl_FragColor.rgb = pa_applyFog(gl_FragColor.rgb, vFogWorld);
#endif`;var kc={paFogPanoA:tn.skyPanoA,paFogPanoB:tn.skyPanoB,paFogPano:{value:new I(0,1,1)}};function Vu(s){if(s.userData.atmo)return s;s.userData.atmo=!0;let t=s.onBeforeCompile,e=s.customProgramCacheKey();return s.onBeforeCompile=function(n,i){t.call(this,n,i),n.uniforms.fogSunColor=tn.fogSunColor,n.uniforms.fogSunDir=tn.fogSunDir,n.uniforms.fogHeightFalloff=tn.fogHeightFalloff,Object.assign(n.uniforms,li,kc)},s.customProgramCacheKey=()=>e+"|atmo",s}function Ip(s){s.traverse(t=>{if(t.material)for(let e of Array.isArray(t.material)?t.material:[t.material])e.isShaderMaterial||e.isRawShaderMaterial||Vu(e)})}var Fy=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,zy=`
${Rs}
${Pc}
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
}`;function Cp(s=!0,t=!0){return new nn({uniforms:{...tn,skyClouds:{value:s?1:0},skyDisc:{value:t?1:0}},vertexShader:Fy,fragmentShader:zy,side:$n,depthWrite:!1,depthTest:!0,fog:!1})}var Uy=new I(0,1,0),Ny=new I,Oy=new I,Gu=new I,Ye=(s,t,e)=>new Ht(s,t,e),lr=(s,t,e)=>{if(e<=t[0][0])return s.copy(t[0][1]);for(let n=1;n<t.length;n++)if(e<=t[n][0]){let[i,r]=t[n-1],[o,a]=t[n];return s.copy(r).lerp(a,(e-i)/(o-i))}return s.copy(t[t.length-1][1])},cs=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e];return i+(o-i)*(t-n)/(r-n)}return s[s.length-1][1]},By=[[-6,Ye(.9,.35,.2)],[0,Ye(1,.34,.1)],[4,Ye(1,.47,.19)],[10,Ye(1,.66,.38)],[25,Ye(1,.88,.74)],[60,Ye(1,.97,.92)]],ky=[[-4,0],[0,1.6],[4,4.6],[12,5],[40,5.2]],Hy=[[-15,Ye(.06,.09,.18)],[-4,Ye(.22,.24,.42)],[2,Ye(.62,.55,.62)],[12,Ye(.6,.7,.85)],[40,Ye(.62,.76,.95)]],Gy=[[-15,Ye(.05,.05,.06)],[0,Ye(.35,.24,.2)],[15,Ye(.42,.36,.3)],[40,Ye(.45,.42,.38)]],Vy=[[-15,.4],[-4,.42],[3,.32],[12,.45],[30,.6]],Wy=[[-15,Ye(.03,.04,.075)],[-5,Ye(.15,.15,.26)],[0,Ye(.42,.33,.38)],[6,Ye(.58,.45,.42)],[18,Ye(.55,.62,.72)],[50,Ye(.55,.66,.8)]],Xy=[[-15,Ye(.05,.06,.1)],[-5,Ye(.4,.24,.22)],[0,Ye(1.15,.5,.22)],[6,Ye(1.2,.68,.38)],[20,Ye(.9,.84,.76)],[50,Ye(.75,.8,.86)]],qy=[[-12,Ye(.04,.05,.08)],[-5,Ye(.45,.25,.32)],[0,Ye(1.8,.72,.42)],[5,Ye(1.9,1.1,.7)],[15,Ye(1.5,1.4,1.35)],[50,Ye(1.5,1.5,1.5)]],Yy=[[-12,Ye(.02,.025,.04)],[-5,Ye(.18,.13,.22)],[0,Ye(.42,.26,.34)],[5,Ye(.6,.45,.48)],[15,Ye(.74,.78,.86)],[50,Ye(.86,.9,.97)]],Zy=[[-15,45e-5],[-3,55e-5],[3,6e-4],[15,4e-4],[50,28e-5]],$y=[[-15,1.35],[-5,1.2],[0,1.05],[6,.92],[20,.76],[50,.68]],Ky=[[-15,.5],[-4,.45],[2,.36],[12,.45],[30,.6]],Oc=class{constructor(t,e){this.renderer=t,this.scene=e,this.hours=Bc.golden,this.cycle=!1,this.cycleSpeed=24/2880,this.sky=new $t(new pe(1,1,1),Cp(!0)),this.sky.scale.setScalar(2e3),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.userData.noAO=!0,e.add(this.sky),this.probeScene=new qs,this.probeSky=new $t(new pe(1,1,1),Cp(!0,!1)),this.probeSky.scale.setScalar(100),this.probeScene.add(this.probeSky);let n=new $t(new Bo(60,24),new bn({color:1776156}));n.rotation.x=-Math.PI/2,n.position.y=-2,this.probeGround=n,this.probeScene.add(n),this.pmrem=new Jr(t),this.baker=new Nc(t,tn),this.baker.setQuality(1024,28),this.baker.onComplete=i=>{i&&(this.envDirty=!0)},this.envTarget=null,this.envDirty=!0,this.envTimer=0,this.lastEnvHours=-100,this.sun=new ta(16777215,3),this.sun.castShadow=!0,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.06,this.shadowRange=110,e.add(this.sun,this.sun.target),this.hemi=new jo(16777215,4473924,1),e.add(this.hemi),e.fog=new Uo(12687759,.0016),this.sunDir=new I,this.moonDir=new I,this.lightDir=new I,this.wind=new Tt,this.realLamps=!0,this.cloudShadows=.5,this.nightFactor=0,this.elevation=0,this.exposure=.8,this.apply()}setHours(t){this.hours=(t%24+24)%24,this.envDirty=!0,this.baker.pending=!0,this.apply()}setSkyQuality(t,e,n){this.baker.setQuality(t,e),tn.fogPano.value=n?1:0,this.envDirty=!0}setShadowQuality(t,e){this.sun.shadow.mapSize.set(t,t),this.shadowRange=e,this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=n.bottom=-e,n.right=n.top=e,n.near=1,n.far=900,n.updateProjectionMatrix()}computeSun(t,e){let n=(t-Rp)/(Ly-Rp),i=Math.PI*n,r=Math.asin(Math.sin(i)*Math.sin(ke.degToRad(64))),o=Math.cos(i),a=Math.sin(i)*.6-.32,c=Math.hypot(o,a)||1;return e.set(o/c*Math.cos(r),Math.sin(r),a/c*Math.cos(r)).normalize(),ke.radToDeg(r)}apply(){let t=tn,e=this.computeSun(this.hours,this.sunDir);this.elevation=e,this.computeSun(this.hours+12.4,this.moonDir),this.moonDir.y=Math.max(this.moonDir.y,.25),this.moonDir.normalize(),t.skySunDir.value.copy(this.sunDir),t.skyMoonDir.value.copy(this.moonDir);let n=ke.smoothstep(-e,-2,9),i=ke.smoothstep(-e,-7,1.5);this.nightFactor=n,this.lampFactor=i,t.nightFactor.value=i,t.skyNight.value=n,t.skyTurbidity.value=cs([[-5,3.5],[2,5.5],[10,4.5],[40,2.6]],e),t.skyRayleigh.value=cs([[-5,1.6],[2,2.8],[10,2],[40,1.2]],e),t.skyMie.value=cs([[0,.006],[10,.005],[40,.004]],e),t.skyIntensity.value=cs([[-8,.6],[0,.72],[20,.62],[50,.55]],e),lr(t.skyCloudLit.value,qy,e),lr(t.skyCloudShade.value,Yy,e);let r=e>-1.5;this.lightDir.copy(r?this.sunDir:this.moonDir),r?(lr(this.sun.color,By,e),this.sun.intensity=cs(ky,e)):(this.sun.color.setRGB(.55,.65,.95),this.sun.intensity=.32*n),this.lightDir.y<.08&&(this.lightDir.y=.08,this.lightDir.normalize()),lr(this.hemi.color,Hy,e),lr(this.hemi.groundColor,Gy,e),this.hemi.intensity=cs(Vy,e),lr(this.scene.fog.color,Wy,e),lr(t.fogSunColor.value,Xy,e),t.fogSunDir.value.copy(this.sunDir),this.scene.fog.density=cs(Zy,e),this.exposure=cs($y,e),this.scene.environmentIntensity=cs(Ky,e),this.probeGround.material.color.copy(this.hemi.groundColor).multiplyScalar(.25)}regenerateEnvironment(){let t=this.envTarget;this.envTarget=this.pmrem.fromScene(this.probeScene,0,.1,400),this.scene.environment=this.envTarget.texture,t&&t.dispose(),this.envDirty=!1,this.lastEnvHours=this.hours}update(t,e,n,i){tn.skyTime.value=e,tn.worldTime.value=e,this.cycle&&(this.hours=(this.hours+t*this.cycleSpeed)%24,this.apply(),Math.abs(this.hours-this.lastEnvHours)>.12&&(this.envDirty=!0)),this.sky.position.copy(i.position),this.wind.set(e*9,e*3.5),li.paSunDirW.value.copy(this.lightDir),li.paLamp.value.x=this.realLamps?this.lampFactor*60:0,li.paCloud.value.set(this.cloudShadows*ke.smoothstep(this.elevation,1,9),tn.skyCloudCover.value,this.wind.x,this.wind.y),this.baker.update(this.wind,this.lightDir,1),kc.paFogPano.value.set(tn.skyPanoBlend.value,tn.skyIntensity.value,tn.fogPano.value),tn.skySunColor.value.copy(this.sun.color).multiplyScalar(this.elevation>-1.5?26:0),this.envDirty&&this.regenerateEnvironment();let o=this.shadowRange*2/this.sun.shadow.mapSize.x,a=Ny.crossVectors(Uy,this.lightDir).normalize(),c=Oy.crossVectors(this.lightDir,a),h=Math.round(n.dot(a)/o)*o,l=Math.round(n.dot(c)/o)*o,f=n.dot(this.lightDir);Gu.copy(a).multiplyScalar(h).addScaledVector(c,l).addScaledVector(this.lightDir,f),this.sun.target.position.copy(Gu),this.sun.position.copy(Gu).addScaledVector(this.lightDir,450),this.sun.target.updateMatrixWorld()}get clockLabel(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};function si(s,t,e){let n=t.isMaterial?t:new Yt(t);return n.onBeforeCompile=i=>{Object.assign(i.uniforms,e.uniforms||{}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
${Rs}
${e.fragmentPars||""}`).replace("#include <color_fragment>",`#include <color_fragment>
${e.color||""}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${e.roughness||""}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${e.metalness||""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${e.normal||""}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${e.emissive||""}`)},n.customProgramCacheKey=()=>"pa-"+s,n}function xn(s,t,e,n,{srgb:i=!0,repeat:r=!1}={}){let o=document.createElement("canvas");o.width=t,o.height=e,n(o.getContext("2d"),t,e);let a=new Ys(o);return i&&(a.colorSpace=Zn),a.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),r&&(a.wrapS=a.wrapT=Ms),a}var Wu=8294;function bt(){return Wu=Wu*1664525+1013904223>>>0,Wu/4294967296}var Mt=(s,t)=>s+bt()*(t-s),ye=s=>s[Math.floor(bt()*s.length)],we=s=>bt()<s;function cr(s,t){let e=Math.imul(Math.floor(s)|0,374761393)+Math.imul(Math.floor(t)|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}var Dp={"-240,-400":"parking","-240,-240":{stucco:3,motel:2,shops:2},"-240,-80":{hotel:3,shops:2,stucco:1},"-240,80":{stucco:3,shops:2,motel:1},"-240,240":{motel:2,stucco:3,shops:1},"-240,400":{stucco:3,shops:2},"-80,-400":{brick:3,shops:2,garage:1},"-80,-240":{office:2,garage:1,deco:1,shops:1},"-80,-80":{shops:2,condo:2,deco:1,brick:1},"-80,80":"park","-80,240":{brick:3,garage:1,shops:1},"-80,400":{warehouse:4,garage:1},"80,-400":{tower:3,office:2,deco:1},"80,-240":{tower:2,deco:2,office:1},"80,-80":"plaza","80,80":{hotel:2,shops:1,condo:2},"80,240":"parking","80,400":{warehouse:3,shops:1,brick:1},"240,-400":{office:2,tower:2,garage:1},"240,-240":"plaza-tall","240,-80":{deco:2,tower:2,hotel:1},"240,80":{condo:2,brick:2,shops:1},"240,240":{condo:3,shops:2},"240,400":"park"},Jy={seaview:[{stucco:3,motel:2,shops:2,hotel:1},[.05,.06,0]],northshore:[{condo:3,hotel:2,stucco:2,shops:2,brick:1},[.12,.03,0]],marina:[{stucco:2,shops:2,warehouse:2,motel:1,condo:1},[.06,.1,0]],midtown:[{office:2,condo:2,brick:2,shops:2,deco:1,garage:1,hotel:1,civic:.7},[.06,.04,.05]],palm:[{shops:2,condo:2,brick:2,stucco:1,deco:1,civic:.5},[.1,.04,0]],southbank:[{brick:3,shops:2,garage:1,warehouse:1,condo:1},[.07,.06,0]],arts:[{brick:3,warehouse:2,shops:2,garage:1},[.05,.06,0]],port:[{warehouse:5,garage:1,shops:1},[.02,.14,0]],eastside:[{stucco:4,shops:2,brick:1,condo:1},[.16,.03,0]],foothills:[{stucco:5,shops:1,motel:1},[.18,.03,0]],laurel:[{condo:2,stucco:2,shops:2,brick:1,hotel:1,civic:.6},[.1,.03,.04]]},jy=[[.75,{tower:4,office:2,deco:1}],[.45,{tower:2,deco:2,office:2,hotel:1,garage:1,civic:.6}],[0,{office:2,condo:2,deco:1,shops:1,garage:1,brick:1,civic:.6}]],Pp="720,-400";function Qy(s,t){let e=Math.max(0,1-Math.hypot(s-150,t+200)/380),n=1.3*Math.max(0,1-Math.hypot(s-640,t+480)/640);return Math.max(e,n)}var Xu=new Map;function t_(s,t){let e=`${s},${t}`;if(Xu.has(e))return Xu.get(e);let n=Ui(s,t),i=Dp[e],r=i?Math.max(0,1-Math.hypot(s-150,t+200)/380):Qy(s,t),o="mix",a=null;if(i)typeof i=="string"?o=i:a=i;else if(e===Pp)o="plaza-tall";else if(n==="laurel"&&s>560&&s<1040&&t>160&&t<480)o="park";else if(n==="downtown"){let h=cr(s*.37+11,t*.53+5);h<.1?o=r>.7?"plaza-tall":"plaza":h<.13?o="park":h<.16?o="parking":a=jy.find(([l])=>r>=l)[1]}else{let[h,[l,f,d]]=Jy[n],u=cr(s*.37+11,t*.53+5);u<l?o="park":u<l+f?o="parking":u<l+f+d?o="plaza":a=h}let c={kind:o,weights:a,district:n,dw:r,coastal:s<-170,landmark:e===Pp,lot:o==="park"?1:o==="parking"?2:o.startsWith("plaza")?4:0};return Xu.set(e,c),c}function Vi(){let s=to.flatMap(e=>Cs.map(n=>[e,n,t_(e,n)])),t=([e,n])=>`${e},${n}`in Dp;return[...s.filter(t),...s.filter(e=>!t(e))]}var Lp=()=>Vi().filter(([,,s])=>s.kind==="park");var Fp=`${Qe.toFixed(1)}, ${(Ue.length-1).toFixed(1)}`,zp=`${He.toFixed(1)}, ${(Ne.length-1).toFixed(1)}`,e_=`
float paRoadNearest(float v, float start, float maxIndex) {
  return clamp(floor((v - start) / 160.0 + 0.5), 0.0, maxIndex) * 160.0 + start;
}
// Returns paint mask (rgb = color, a = coverage) and fills asphalt wear.
vec4 paRoadMarkings(vec2 p, out float wear, out float onRoad) {
  float dx = p.x - paRoadNearest(p.x, ${Fp});
  float dz = p.y - paRoadNearest(p.y, ${zp});
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
`,ci={wetness:{value:0},mirrorTex:{value:null},mirrorMatrix:{value:new ne},useMirror:{value:0},worldTime:{value:0}},n_=`
float paRoadDetail(vec2 p, float fw, out float manhole) {
  manhole = 0.0;
  float skid = 0.0;
  float dx = p.x - paRoadNearest(p.x, ${Fp});
  float dz = p.y - paRoadNearest(p.y, ${zp});
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
`,i_=`
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
`;function s_(){return si("road",{color:16777215,roughness:.85,metalness:0},{uniforms:ci,fragmentPars:e_+n_+i_+`
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
      }`})}function r_(){return si("slab",{color:16777215,roughness:.85,metalness:0},{uniforms:{wetness:ci.wetness},vertexPars:"attribute float aLot; flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf;",vertex:`
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
      }`,roughness:"roughnessFactor = mix(paSlabRough, 0.42, wetness * (abs(vLot - 1.0) < 0.5 ? 0.0 : 1.0));"})}function o_(){return si("sand",{color:16777215,roughness:.95},{fragmentPars:"float paWet;",color:`
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
      }`,roughness:"roughnessFactor = mix(0.95, 0.22, paWet);"})}function a_(){return si("terrain",{color:16777215,roughness:.95},{color:`
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
      }`})}function Ni(s,t){let e=Math.max(0,s-(qe+52)),n=Math.max(0,He-80-t),i=Math.max(0,t-($e+80)),r=Math.hypot(e,Math.max(n,i)*.9);if(s<-360)return-40;if(r<=0)return-.6;let o=Math.sin(s*.011+Math.sin(t*.006)*2)*.5+Math.sin(t*.013+s*.004)*.5,a=Math.sin(s*.031+t*.017)*5+Math.sin(t*.043-s*.012)*3.5;return-.6+(70*(1-Math.exp(-r/170))+r*.1)*(.8+o*.3)+a*Math.min(r/120,1)+Math.min(r/30,1)*1.5}function Up(s,t){let e=s_(),n=new $t(new sn(1,1),e);n.rotation.x=-Math.PI/2;let i=Un-1,r=qe+80,o=He-140,a=$e+140;n.scale.set(r-i,a-o,1),n.position.set((i+r)/2,0,(o+a)/2),n.receiveShadow=!0,s.add(n);let c=[];for(let[J,z,At]of Vi())c.push([J,z,Ei,Ei,At.lot]);let h=a-o,l=(o+a)/2;c.push([(dn.from+dn.to)/2,l,dn.from-dn.to,h,3]),c.push([(dn.to+Un)/2,l,dn.to-Un,h,1]);let f=Ue[Ue.length-1]+Me;c.push([f+zi/2,l,zi,h,0]),c.push([(f+zi+r)/2,l,r-f-zi,h,1]);let d=Ne[0]-Me,u=Ne[Ne.length-1]+Me;for(let[J,z]of[[d,-1],[u,1]]){let At=f-dn.from,Ct=(f+dn.from)/2;c.push([Ct,J+z*zi/2,At,zi,0]),c.push([Ct,J+z*(zi+35),At,70,1])}let g=new pe(1,1,1),x=new Be(g,r_(),c.length),m=new Float32Array(c.length),p=new ne;c.forEach(([J,z,At,Ct,Wt],zt)=>{p.compose(new I(J,le/2-.05,z),new Ge,new I(At,le+.1,Ct)),x.setMatrixAt(zt,p),m[zt]=Wt}),g.setAttribute("aLot",new fn(m,1)),x.receiveShadow=!0,x.layers.set(1),s.add(x);let y=new sn(1,1,24,1),M=new $t(y,o_());M.rotation.x=-Math.PI/2;let v=-470,b=Un;M.scale.set(b-v,h+320,1),M.position.set((v+b)/2,0,l),M.updateMatrixWorld();let C=y.attributes.position;for(let J=0;J<C.count;J++){let z=v+(C.getX(J)+.5)*(b-v);C.setZ(J,z>=Un?0:-.02-(Un-z)*.0105)}y.computeVertexNormals(),M.receiveShadow=!0,s.add(M);let L=-420,P=qe+1500,T=He-1400,S=$e+1400,N=new sn(P-L,S-T,Math.round((P-L)/22),Math.round((S-T)/22));N.rotateX(-Math.PI/2);let Y=N.attributes.position;for(let J=0;J<Y.count;J++){let z=Y.getX(J)+(L+P)/2,At=Y.getZ(J)+(T+S)/2;Y.setX(J,z),Y.setZ(J,At),Y.setY(J,Ni(z,At))}N.computeVertexNormals();let B=new $t(N,a_());B.receiveShadow=!0,s.add(B);let O=new pe(1,1,1),k=new Yt({color:10131084,roughness:.9}),V=[[ze.maxX+1.5,0,1,1,ze.maxZ-ze.minZ+4],[(ze.maxX+dn.from)/2,ze.minZ-1.5,ze.maxX-dn.from,1,1],[(ze.maxX+dn.from)/2,ze.maxZ+1.5,ze.maxX-dn.from,1,1]],rt=new Be(O,k,V.length);return V.forEach(([J,z,At,Ct,Wt],zt)=>{p.compose(new I(J,Ct/2,z),new Ge,new I(At,Ct,Wt)),rt.setMatrixAt(zt,p)}),rt.castShadow=rt.receiveShadow=!0,s.add(rt),{ground:n,slabMesh:x,terrain:B}}function rn(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Je,h=0;for(let l=0;l<s.length;++l){let f=s[l],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,u,l),h+=u}}if(e){let l=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+l);l+=s[d].attributes.position.count}c.setIndex(f)}for(let l in r){let f=Np(r[l]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,f)}for(let l in o){let f=o[l][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<o[l].length;++x)u.push(o[l][x][d]);let g=Np(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Np(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){let l=s[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}let o=new t(r),a=new vn(o,e,n),c=0;for(let h=0;h<s.length;++h){let l=s[h];if(l.isInterleavedBufferAttribute){let f=c/e;for(let d=0,u=l.count;d<u;d++)for(let g=0;g<e;g++){let x=l.getComponent(d,g);a.setComponent(d+f,g,x)}}else o.set(l.array,c);c+=l.count*e}return i!==void 0&&(a.gpuType=i),a}var l_=new ne;function hs(s,{exclude:t=[]}={}){s.updateMatrixWorld(!0);let e=new ne().copy(s.matrixWorld).invert(),n=new Set;for(let o of t)o.traverse(a=>n.add(a));let i=new Map;s.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||n.has(o)||Array.isArray(o.material)||o.geometry.isInstancedBufferGeometry||Object.keys(o.geometry.morphAttributes).length)return;let a=[o.material.uuid,o.castShadow,o.receiveShadow,o.layers.mask,o.renderOrder,!!o.userData.noAO,o.frustumCulled].join("|");i.has(a)||i.set(a,[]),i.get(a).push(o)});let r=0;for(let o of i.values()){if(o.length<2)continue;let a=o.map(d=>{let u=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();return u.applyMatrix4(l_.multiplyMatrices(e,d.matrixWorld)),u}),c=Object.keys(a[0].attributes).filter(d=>a.every(u=>u.attributes[d]&&u.attributes[d].itemSize===a[0].attributes[d].itemSize));for(let d of a)for(let u of Object.keys(d.attributes))c.includes(u)||d.deleteAttribute(u);let h=rn(a);if(!h)continue;let l=o[0],f=new $t(h,l.material);f.castShadow=l.castShadow,f.receiveShadow=l.receiveShadow,f.layers.mask=l.layers.mask,f.renderOrder=l.renderOrder,f.frustumCulled=l.frustumCulled,f.userData={...l.userData,batched:o.length},s.add(f);for(let d of o)d.removeFromParent();r+=o.length-1}return r}var hr=(s,t)=>(s+4096)*8192+(t+4096),ur=class{constructor(t=80,e=n=>[n.w,n.d]){this.cell=t,this.half=e,this.map=new Map,this.stamp=0,this.all=[]}add(t){let[e,n]=this.half(t),i=this.cell,r=Math.floor((t.x-e)/i),o=Math.floor((t.x+e)/i),a=Math.floor((t.z-n)/i),c=Math.floor((t.z+n)/i);for(let h=r;h<=o;h++)for(let l=a;l<=c;l++){let f=hr(h,l),d=this.map.get(f);d||this.map.set(f,d=[]),d.push(t)}return t._gs=0,this.all.push(t),t}addAll(t){for(let e of t)this.add(e);return this}near(t,e,n,i){let r=this.cell,o=++this.stamp,a=Math.floor((t-n)/r),c=Math.floor((t+n)/r),h=Math.floor((e-n)/r),l=Math.floor((e+n)/r);for(let f=a;f<=c;f++)for(let d=h;d<=l;d++){let u=this.map.get(hr(f,d));if(u)for(let g=0;g<u.length;g++){let x=u[g];if(x._gs!==o&&(x._gs=o,i(x)===!0))return!0}}return!1}segment(t,e,n,i,r){let o=this.cell,a=++this.stamp,c=Math.hypot(n-t,i-e),h=Math.max(1,Math.ceil(c/(o*.5))),l=NaN,f=NaN;for(let d=0;d<=h;d++){let u=d/h,g=Math.floor((t+(n-t)*u)/o),x=Math.floor((e+(i-e)*u)/o);if(!(g===l&&x===f)){l=g,f=x;for(let m=g-1;m<=g+1;m++)for(let p=x-1;p<=x+1;p++){let y=this.map.get(hr(m,p));if(y)for(let M=0;M<y.length;M++){let v=y[M];if(v._gs!==a&&(v._gs=a,r(v)===!0))return!0}}}}return!1}},gi=class{constructor(t=24){this.cell=t,this.map=new Map,this.count=0}add(t){let e=hr(Math.floor(t.x/this.cell),Math.floor(t.z/this.cell)),n=this.map.get(e);return n||this.map.set(e,n=[]),n.push(t),this.count++,t}addAll(t){for(let e of t)this.add(e);return this}near(t,e,n,i){let r=this.cell,o=Math.floor((t-n)/r),a=Math.floor((t+n)/r),c=Math.floor((e-n)/r),h=Math.floor((e+n)/r);for(let l=o;l<=a;l++)for(let f=c;f<=h;f++){let d=this.map.get(hr(l,f));if(d){for(let u=0;u<d.length;u++)if(i(d[u])===!0)return!0}}return!1}any(t,e,n){return this.near(t,e,n,i=>Math.abs(i.x-t)<n&&Math.abs(i.z-e)<n)}},Yu=320,Op=(s,t)=>hr(Math.floor(s/Yu),Math.floor(t/Yu)),pa=[],no=new _i,qu=new Ii;function io(s,t,e=null){return s.updateMatrixWorld(!0),no.setFromObject(s),no.getBoundingSphere(qu),pa.push({object:s,far:t,x:qu.center.x,z:qu.center.z,r:Math.hypot(no.max.x-no.min.x,no.max.z-no.min.z)/2,onLod:e}),s}function Zu(s,t){for(let e=0;e<pa.length;e++){let n=pa[e],i=Math.hypot(n.x-s,n.z-t)-n.r;n.far>0&&(n.object.visible=i<n.far),n.onLod&&n.onLod(i,n.object)}}var Bp=()=>({entries:pa.length,visible:pa.filter(s=>s.object.visible).length});function An(s,t,e,n,{at:i,set:r,far:o=0,setup:a=null,cloneGeometry:c=!1,chunk:h=Yu}){let l=new Map;t.forEach((u,g)=>{let[x,m]=i(u),p=hr(Math.floor(x/h),Math.floor(m/h)),y=l.get(p);y||l.set(p,y=[]),y.push(g)});let f=new Array(t.length),d=[];for(let u of l.values()){let g=new Be(c?e.clone():e,n,u.length);u.forEach((x,m)=>{r(g,m,t[x],x),f[x]={mesh:g,index:m}}),g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0),a?.(g,u.map(x=>t[x])),g.computeBoundingSphere(),s.add(g),o>0&&io(g,o),d.push(g)}return{meshes:d,refs:f}}var oe={CURTAIN:0,PUNCHED:1,RIBBON:2,BRICK:3,STUCCO:4,PANEL:5,BLANK:6,DECO:7,GARAGE:8,METAL:9,MOTEL:10,CONDO:11,LOUVRE:12},Hc={PLINTH:0,SHOPS:1,LOBBY:2},Rn={MEMBRANE:0,HELIPAD:1,TERRACE:2,SKYLIGHTS:3,GRAVEL:4},Ds={NONE:0,BASE:1,CROWN:2,BOTH:3},ma={px:1,nx:2,pz:4,nz:8},kp=({ground:s=0,round:t=!1,roof:e=0,light:n=0,doors:i=0})=>s+(t?4:0)+e*8+n*64+i*256,c_=`
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
`,h_=c_.replaceAll("pa_band(","fa_band(").replaceAll("pa_aastep(","fa_step(");function $u(s=!1){let t=si(s?"facade-low":"facade",{color:16777215,roughness:.85,metalness:0},{uniforms:{nightFactor:tn.nightFactor,worldTime:tn.worldTime,mirrorPass:tn.mirrorPass,facSun:li.paSunDirW},vertexPars:`
      attribute vec4 aStyle; attribute vec4 aGlass; attribute vec4 aAccent;
      varying vec3 vFacLocal; flat varying vec4 vFacBox; flat varying vec4 vFacStyle;
      flat varying vec4 vFacGlass; flat varying vec4 vFacAccent;`,vertex:`
      vec3 facScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
      vFacLocal = position * facScale;
      vFacBox = vec4(facScale, (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y);
      vFacStyle = aStyle;
      vFacGlass = aGlass;
      vFacAccent = aAccent;`,fragmentPars:h_,color:`
      {
        vec3 albedo = diffuseColor.rgb;
        paFacade(albedo);
        diffuseColor.rgb = albedo;
      }`,roughness:"roughnessFactor = fRough;",metalness:"metalnessFactor = fMetal;",normal:"normal = normalize(normal + (viewMatrix * vec4(fTilt, 0.0)).xyz);",emissive:"totalEmissiveRadiance += fEmit;"});return s&&(t.defines={...t.defines,FACADE_LOW:""}),t}function Ku(){return si("tiles",{color:16777215,roughness:.7},{color:`
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
      }`})}function Wp(){let e=[-.54,0,-.54,.54,0,-.54,.54,0,.54,-.54,0,.54,-.22,1,0,.22,1,0],n=[0,4,5,0,5,1,1,5,2,2,5,4,2,4,3,3,4,0],i=new Je;i.setAttribute("position",new be(e,3)),i.setIndex(n);let r=i.toNonIndexed();return r.computeVertexNormals(),r}var Cn={stucco:["#e8dcc4","#f0d6c0","#e6c9a8","#d9e2d6","#f2e8d8","#e7b9a3","#d6c7e0","#f4e4b8","#cfe0e3"],concrete:["#a9a59c","#b8b2a6","#8f8e88","#c9c3b5","#9a9690","#b0aba0"],brick:["#8a4f3c","#9c5a43","#7a4535","#a8735a","#6d4a3c","#a35b45"],tower:["#9fa6a8","#7c8589","#b5b8b4","#5f686d","#c8c3b8","#33383c","#d7d9d6","#7d6c57"],stone:["#d8cbb0","#c9b79a","#b8a88c","#d2c6ae","#bfae94"],condo:["#e9e8e4","#d9dcdc","#c4c9cb","#ece4d6","#d6d2ca"],metal:["#8a9196","#6d7a6f","#9a8f7a","#7d4a3a","#5f6b78","#a7a9a3"],cladding:["#d9d6cf","#3a3f44","#b9b3a6","#8c8f8a","#c7b299","#5a6268","#e6e2d8"],glass:[[.18,.32,.38],[.16,.27,.36],[.28,.3,.28],[.25,.22,.18],[.2,.34,.33],[.14,.2,.3],[.3,.24,.15],[.12,.26,.24],[.22,.27,.33],[.17,.2,.23]],accent:["#8c3b2e","#2f5d62","#c9a45c","#3b4a5a","#7a2e3a","#d9d4c8","#4a4f54","#b5673a","#2e4a35"],dado:["#b5673a","#2f5d62","#8c3b2e","#5a7a8c","#c9a45c","#6b7f5a"],brass:["#b08d4f","#9a7b45","#6f8f7a","#a8794a"],trimMetal:["#c9ccce","#3a3d40","#8a6a3c","#e8e6e0","#22262a"],crown:["#bfe3ff","#ffe2b0","#ffffff","#ffb9d8","#b6ffe6"]},Gn=(s,t)=>"#"+new Ht(s).lerp(new Ht(t>0?"#ffffff":"#000000"),Math.abs(t)).getHexString(),u_={tower:36,deco:32,office:28,hotel:28,civic:30,garage:28,condo:24,warehouse:24,motel:24,brick:18,stucco:14,shops:14};var f_=new Set(["brick","shops","stucco","deco","office","condo","garage"]),d_=["PACIFICA","AURELIO","VANTA","MERIDIAN","ONDA","NORTHSTAR","SOLANO","HALCYON","ALTAMAR","KITE & CO"],Xp=["COFFEE","PIZZA","NAILS","DELI","BOOKS","PHARMACY","TACOS","SURF","RAMEN","BAR","DONUTS","LAUNDRY","VINYL","BANK","FLOWERS","GYM"],Hp=["#ff5a7a","#5fe8ff","#ffd25a","#ff8a3d","#a6ff6a","#ffffff","#ff6af0","#7ab8ff"],p_=["HOTEL MIRAMAR","THE PALMS","CASA DEL MAR","HOTEL AURELIO","THE SEABRIGHT"],Gp=["SURF DINER","GAS \xB7 24H","CAR WASH","DRIVE-IN","TIRE SHOP","TACO STAND","MINI MART","BURGERS"];function ga(s,t,e,n,i=0){let r=s.x1-s.x0,o=s.z1-s.z0;if(r<=e&&o<=e||i>5)return n.push(s),n;let a=r>=o,c=a?r:o;if(c<t*2)return n.push(s),n;let h=ke.clamp(Mt(.36,.64)*c,t,c-t);return a?(ga({...s,x1:s.x0+h},t,e,n,i+1),ga({...s,x0:s.x0+h},t,e,n,i+1)):(ga({...s,z1:s.z0+h},t,e,n,i+1),ga({...s,z0:s.z0+h},t,e,n,i+1)),n}function so(s){let t=Object.entries(s),e=t.reduce((i,[,r])=>i+r,0),n=bt()*e;for(let[i,r]of t)if((n-=r)<=0)return i;return t[0][0]}var In={px:{nx:1,nz:0,rot:Math.PI/2},nx:{nx:-1,nz:0,rot:-Math.PI/2},pz:{nx:0,nz:1,rot:0},nz:{nx:0,nz:-1,rot:Math.PI}};function hi(s,t){return t.nx?s.d:s.w}function qn(s,t,e,n=0){return t.nx?[s.x+t.nx*(s.w/2+n),s.z+e]:[s.x+e,s.z+t.nz*(s.d/2+n)]}function ro(s){return rn(s.map(([t,e,n,i,r,o,a=0,c=0,h=0,l="box"])=>{let f=l==="cyl"?new De(t,t,e,12):l==="cone"?new Mi(t,e,12):new pe(t,e,n);return(a||c||h)&&f.applyMatrix4(new ne().makeRotationFromEuler(new Dn(a,c,h))),f.translate(i,r,o),f.index?f.toNonIndexed():f}))}function m_(){let s=ro([[1.6,1,1.2,0,.5,0],[.42,.08,0,0,1.04,0,0,0,0,"cyl"],[1.62,.06,1.22,0,.22,0]]),t=ro([[1.6,3,0,0,4.1,0,0,0,0,"cyl"],[1.75,1,0,0,6.1,0,0,0,0,"cone"],[.16,2.6,.16,1.1,1.3,1.1],[.16,2.6,.16,-1.1,1.3,1.1],[.16,2.6,.16,1.1,1.3,-1.1],[.16,2.6,.16,-1.1,1.3,-1.1],[2.6,.14,2.6,0,2.6,0]]),e=[[3.2,.06,1.1,0,0,.6],[3.2,.04,.04,0,.95,1.13],[.04,.04,1.1,-1.6,.95,.6],[.04,.04,1.1,1.6,.95,.6],[.04,.95,.04,-1.58,.47,1.13],[.04,.95,.04,0,.47,1.13],[.04,.95,.04,1.58,.47,1.13],[3.2,.03,.03,0,.5,1.13]],n=m=>ro([...e,[Math.hypot(2.4,m),.05,.55,0,-m/2,.55,0,0,Math.atan2(m,2.4)],[Math.hypot(2.4,m),.03,.03,0,-m/2+.85,.83,0,0,Math.atan2(m,2.4)]]),i=ro([[1,.16,1.35,0,0,.67]]),r=ro([[1,1,.04,0,.58,1.33],[.012,1,1.35,-.5,.58,.67],[.012,1,1.35,.5,.58,.67]]),o=(()=>{let m=[],p=[],y=(v,b,C,L,P,T)=>{m.push(...v,...b,...C,...v,...C,...L),p.push(P[0],P[1],T[0],P[1],T[0],T[1],P[0],P[1],T[0],T[1],P[0],T[1])};y([-.5,0,0],[.5,0,0],[.5,-.7,1.6],[-.5,-.7,1.6],[0,0],[1,1]),y([-.5,-.7,1.6],[.5,-.7,1.6],[.5,-1,1.6],[-.5,-1,1.6],[0,0],[1,.3]);let M=new Je;return M.setAttribute("position",new be(m,3)),M.setAttribute("uv",new be(p,2)),M.computeVertexNormals(),M})(),a=new sn(1,1),c=ro([[.08,1,0,0,.5,0,0,0,0,"cyl"]]),h=new De(.5,.5,1,24),l=new De(.5,.5,1,56,1),f=new Mi(Math.SQRT1_2,1,4,1,!1,Math.PI/4).toNonIndexed();f.translate(0,.5,0),f.computeVertexNormals();let d=new Mi(.5,1,32);d.translate(0,.5,0);let u=new zn(.5,28,10,0,Math.PI*2,0,Math.PI/2),g=new Hr;g.moveTo(-.5,0),g.lineTo(.5,0),g.lineTo(0,1),g.closePath();let x=new Zo(g,{depth:1,bevelEnabled:!1});return x.translate(0,0,-.5),{acUnit:s,tank:t,fireEscape:n,balconySlab:i,balconyRail:r,awning:o,sign:a,antenna:c,drum:h,round:l,pyramid:f,cone:d,dome:u,prism:x}}function g_(s){return xn(s,1024,1024,t=>{Xp.forEach((e,n)=>{let i=n%2*512,r=Math.floor(n/2)*128,o=Hp[n%Hp.length],a=n%3===0;t.fillStyle=a?"#121417":["#f4efe4","#1d3b4a","#5a1f1a"][n%3],t.fillRect(i+4,r+4,504,120),t.strokeStyle=o,t.lineWidth=6,t.strokeRect(i+10,r+10,492,108),t.font='800 78px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor=o,t.shadowBlur=16,t.fillStyle=n%3===0?o:n%3===1?"#ffffff":"#ffe9c2",t.fillText(e,i+256,r+68),t.shadowBlur=0})})}function x_(s){return xn(s,256,32,(t,e,n)=>{for(let i=0;i<8;i++)t.fillStyle=i%2?"#f4f1ea":"#ffffff",t.fillRect(i*e/8,0,e/8,n),i%2===0&&(t.fillStyle="rgba(0,0,0,0.42)",t.fillRect(i*e/8,0,e/8,n))},{repeat:!1})}var oo=[In.px,In.nx,In.pz,In.nz],ao=s=>s.reduce((t,e)=>t|(e.nx>0?ma.px:e.nx<0?ma.nx:e.nz>0?ma.pz:ma.nz),0),Vp=s=>{let t=Math.max(Math.floor(s/4.6),1);return(Math.floor(t/2)+.5)*(s/t)-s/2};function qp(s,t){let e=new Map,n=[],i=[],r=[],o=[],a=[],c=[],h=[],l=[],f=(R,W,it,K)=>{let nt=`${R}|${Op(W,it)}`;e.has(nt)||e.set(nt,[]),e.get(nt).push(K)};function d(R,W,it,K,nt,tt,_t,ot,vt={}){return f(vt.round?"facadeRound":"facade",R,W,{x:R,z:W,w:it,d:K,y0:nt,h:tt,style:_t,...ot,...vt}),vt.top!==!1&&i.push({x:R,z:W,w:it,d:K,h:nt+tt}),nt<1&&vt.solid!==!1&&n.push({x:R,z:W,w:it/2,d:K/2}),{x:R,z:W,w:it,d:K,y0:nt,h:tt,top:nt+tt}}let u=(R,W,it={})=>({wall:W,glass:ye(Cn.glass),seed:bt()*100,shops:!1,lobby:!1,doors:0,accent:ye(Cn.accent),variant:bt(),roof:Rn.MEMBRANE,light:Ds.NONE,floorH:R===oe.CURTAIN?Mt(3.7,4.2):R===oe.STUCCO?3.4:R===oe.GARAGE?3:Mt(3.2,3.6),cellW:R===oe.CURTAIN?Mt(1.6,2.2):R===oe.RIBBON?Mt(2.4,3):R===oe.STUCCO?Mt(3.8,4.6):R===oe.DECO?Mt(2.2,2.6):R===oe.MOTEL?4.2:R===oe.CONDO?Mt(3.2,3.8):R===oe.PANEL?Mt(1.5,1.9):Mt(2.8,3.6),...it}),g=(R,W={})=>u(oe.BLANK,R,W),x=R=>R.shops||R.lobby?4.8:.9,m=(R,W)=>R*W.floorH+x(W)+1.3-le,p=(R,W,it)=>{let K=hi(R,it),nt=Math.max(Math.floor((K-1)/W.cellW),1),tt=x(W),_t=R.y0-le,ot=Math.max(0,Math.floor((R.h+le-1.3-tt)/W.floorH+.02));return{faceW:K,nCols:nt,groundH:tt,rows:ot,colU:vt=>(vt+.5-nt/2)*W.cellW,rowY:vt=>_t+tt+vt*W.floorH}},y=(R,W,it,K,nt,tt,_t,ot)=>f("trim",W,K,{pos:[W,it+tt/2,K],rot:0,scale:[nt,tt,_t],color:ot,metal:R==="trimMetal"?1:0}),M=(R,W,it,K,nt,tt,_t)=>f("drum",W,K,{pos:[W,it+tt/2,K],rot:0,scale:[nt,tt,nt],color:_t,metal:R==="drumMetal"?1:0});function v(R,W,it,K,nt,tt,_t,ot,vt){let[xt,dt]=qn(W,it,K,tt/2-.04);y(R,xt,_t,dt,it.nx?tt+.08:nt,ot,it.nx?nt:tt+.08,vt)}let b=(R,W,it,K,nt,tt)=>y(R,W.x,it,W.z,W.w+nt*2,K,W.d+nt*2,tt);function C(R,W,it,K,{every:nt=1,depth:tt=.45,width:_t=.14,from:ot=null,to:vt=null,color:xt}){let dt=p(W,it,K),Nt=ot??dt.rowY(0),Bt=vt??W.top-.3;if(!(Bt-Nt<2))for(let ee=0;ee<=dt.nCols;ee+=nt)v(R,W,K,(ee-dt.nCols/2)*it.cellW,_t,tt,Nt,Bt-Nt,xt)}function L(R,W,it,{every:K=1,depth:nt=.5,thick:tt=.14,at:_t=0,from:ot=0,color:vt}){let xt=p(W,it,In.pz);for(let dt=ot;dt<=xt.rows;dt+=K){let Nt=xt.rowY(dt)+_t*it.floorH;Nt<W.top-.6&&b(R,W,Nt-tt/2,tt,nt,vt)}}function P(R,W,it=1){b("trim",R,R.top-.55*it,.36*it,.3*it,Gn(W,-.1));let K=d(R.x,R.z,R.w+1.1*it,R.d+1.1*it,R.top-.19*it,.7*it,oe.BLANK,g(W),{top:!1});R.roofY=K.top}function T(R,W,it=1){let K=Math.min(3.4,Math.max(1.1,it-.3)),nt=Vp(hi(R,W)),[tt,_t]=qn(R,W,nt,K/2),ot=W.nx?K:6.2,vt=W.nx?6.2:K;if(y("trimMetal",tt,4.32,_t,ot,.26,vt,"#2a2d30"),a.push({x:tt,y:4.3,z:_t,w:ot-.5,h:.05,d:vt-.5,color:"#ffe2b0"}),K>2.2)for(let xt of[-1,1]){let[dt,Nt]=qn(R,W,nt+xt*2.8,K-.3);M("drumMetal",dt,le,Nt,.16,4.32-le,"#2a2d30")}}function S(R,W,it=4.6){return d(R.x,R.z,Math.max(4,R.w-5),Math.max(4,R.d-5),R.roofY??R.top,it,oe.LOUVRE,u(oe.LOUVRE,W),{top:!1})}function N(R,W,it=!1){let K=R.roofY??R.top;for(let nt=0;nt<W;nt++){let tt=R.x+Mt(-R.w/2+2.5,R.w/2-2.5),_t=R.z+Mt(-R.d/2+2.5,R.d/2-2.5);f("ac",tt,_t,{pos:[tt,K,_t],rot:ye([0,Math.PI/2]),scale:[Mt(.8,1.6),Mt(.8,1.3),Mt(.8,1.5)],color:ye(["#b5b8b6","#9a9d9c","#c8c9c4"])})}if(it){let nt=R.x+Mt(-R.w/4,R.w/4),tt=R.z+Mt(-R.d/4,R.d/4);f("tank",nt,tt,{pos:[nt,K,tt],rot:0,scale:[1,Mt(.9,1.15),1],color:ye(["#6b4f36","#5e4a3a","#7a5a3e"])})}}function Y(R,W,it,K){f("antenna",R,it,{pos:[R,W,it],rot:0,scale:[1,K,1],color:"#9aa0a3"}),c.push([R,W+K+.3,it])}let B=(R,W,it=R.top-.6,K=.7)=>a.push({x:R.x,y:it,z:R.z,w:R.w+.5,h:K,d:R.d+.5,color:W,round:!!R.round});function O(R,W,it,K){for(let nt of it){let tt=hi(R,nt),_t=Math.max(Math.floor(tt/6),1),ot=tt/_t,vt=ye(["#b8322a","#2b6e8f","#2f7a4f","#d08a2a","#6b3f8f","#20304a"]);for(let xt=0;xt<_t;xt++){let dt=-tt/2+(xt+.5)*ot;if(we(.78)){let[Nt,Bt]=qn(R,nt,dt,.07);f("sign",Nt,Bt,{pos:[Nt,4.1,Bt],rot:nt.rot,scale:[(ot-.8)*.78,.7,1],sign:Math.floor(bt()*Xp.length),color:"#ffffff"})}if(K&&we(.7)){let[Nt,Bt]=qn(R,nt,dt,.02);f("awning",Nt,Bt,{pos:[Nt,3.62,Bt],rot:nt.rot,scale:[ot*.86,1,1],color:we(.75)?vt:ye(["#b8322a","#2b6e8f","#2f7a4f"])})}}}}function k(R,W,it){let K=hi(R,W),nt=Math.max(Math.floor(K/6),1),tt=K/nt;for(let _t=0;_t<=nt;_t++){let ot=ke.clamp(-K/2+_t*tt,-K/2+.3,K/2-.3);v("trim",R,W,ot,.6,.2,le,4.5-le,it)}}function V(R,W,it,K=2,nt="glass",tt=!1){for(let _t of it){let ot=p(R,W,_t);for(let vt=1;vt<ot.rows;vt++)for(let xt=0;xt+K<=ot.nCols;xt+=K){if(tt&&(vt+xt/K)%2)continue;let dt=(ot.colU(xt)+ot.colU(xt+K-1))/2,Nt=K*W.cellW-.5,[Bt,ee]=qn(R,_t,dt,0),Re=ot.rowY(vt)+.02;f("balconySlab",Bt,ee,{pos:[Bt,Re,ee],rot:_t.rot,scale:[Nt,1,1],color:"#d9d8d2"}),f(nt==="glass"?"balconyGlass":"balconyRail",Bt,ee,{pos:[Bt,Re,ee],rot:_t.rot,scale:[Nt,1,1],color:nt==="glass"?"#9fb6bf":"#2a2c2d"})}}}function rt(R,W,it){for(let K of it){let nt=p(R,W,K);for(let tt=1;tt<nt.rows;tt++)for(let _t=0;_t<nt.nCols;_t++){if(we(.35))continue;let[ot,vt]=qn(R,K,nt.colU(_t),0),xt=nt.rowY(tt)+.24*W.floorH-.12,dt=W.cellW*.5;f("balconySlab",ot,vt,{pos:[ot,xt,vt],rot:K.rot,scale:[dt,.7,.42],color:"#d9d2c4"}),f("balconyRail",ot,vt,{pos:[ot,xt,vt],rot:K.rot,scale:[dt,.95,.42],color:"#24262a"})}}}function J(R,W,it){let K=p(R,W,it);if(K.nCols<4||K.rows<3)return;let nt=Math.floor(bt()*(K.nCols-2))+1,tt=(K.colU(nt)+K.colU(nt+1))/2,[_t,ot]=qn(R,it,tt,0);for(let vt=1;vt<K.rows;vt++)f("fireEscape",_t,ot,{pos:[_t,K.rowY(vt),ot],rot:it.rot,scale:[1,1,1],color:"#2b2e30",floorH:W.floorH})}function z(R,W){hi(R,W)<20||o.push({kind:"corp",b:R,f:W,name:ye(d_),color:ye(["#ffffff","#bfe9ff","#ffe2b0","#ffb3a0"])})}let At={tower(R,W,it){let K=R.w,nt=R.d,tt=ye(Cn.concrete),_t=we(.6),ot=ye([oe.RIBBON,oe.PUNCHED,oe.PANEL]),vt=u(ot,tt,{..._t?{lobby:!0,doors:ao(W)}:{shops:!0},roof:Rn.TERRACE}),xt=d(R.x,R.z,K,nt,le,Mt(10,16),ot,vt);if(_t)T(xt,W[0],R.setback??6);else{O(xt,null,W,!1);for(let Ee of W)k(xt,Ee,Gn(tt,.08))}b("trim",xt,4.5,.3,.2,Gn(tt,.1)),b("trim",xt,xt.top-.5,.34,.28,Gn(tt,.12)),N({...xt,x:R.x+K*.3,w:K*.3,d:nt*.4},3);let dt=u(oe.CURTAIN,ye(Cn.tower)),Nt=70+it*Mt(70,150),Bt=Math.min(K-10,Mt(30,46)),ee=Math.min(nt-10,Mt(30,46)),Re=ye(Cn.trimMetal),Ae=ye(Cn.crown),_e=so({stepped:3,round:1.7,twin:1.4,framed:1.5,crowned:1.7}),Dt;if(_e==="round"){let Ee=Math.max(22,Math.min(Bt,ee)),E=Nt>120;Dt=d(R.x,R.z,Ee,Ee,xt.top,E?Nt*.66:Nt,oe.CURTAIN,dt,{round:!0,roof:E?Rn.TERRACE:Rn.HELIPAD}),Dt.round=!0,M("drumMetal",Dt.x,Dt.top-.7,Dt.z,Ee+1.1,.5,Re),E&&(B(Dt,Ae,Dt.top-.15,.3),Dt=d(R.x,R.z,Ee*.78,Ee*.78,Dt.top,Nt*.34,oe.CURTAIN,dt,{round:!0,roof:Rn.HELIPAD}),Dt.round=!0,M("drumMetal",Dt.x,Dt.top-.7,Dt.z,Dt.w+1.1,.5,Re)),B(Dt,Ae),Y(Dt.x,Dt.top,Dt.z,Nt>140?30:14)}else if(_e==="twin"){let Ee=we(.5),E=Ee?Bt:Bt*.46,H=Ee?ee*.46:ee,st=(Ee?ee:Bt)*.27;Dt=d(R.x-(Ee?0:st),R.z-(Ee?st:0),E,H,xt.top,Nt,oe.CURTAIN,dt,{roof:Rn.GRAVEL});let lt=d(R.x+(Ee?0:st),R.z+(Ee?st:0),E,H,xt.top,Nt*Mt(.66,.86),oe.CURTAIN,{...dt,seed:bt()*100},{roof:Rn.TERRACE}),et=d(R.x,R.z,Ee?Bt*.3:Bt*.2,Ee?ee*.2:ee*.3,xt.top,Nt+7,oe.BLANK,g(Gn(dt.wall,-.5)),{top:!1});B(Dt,Ae),B(lt,Ae),Y(et.x,et.top,et.z,18)}else if(_e==="framed"){Dt=d(R.x,R.z,Bt,ee,xt.top,Nt,oe.CURTAIN,dt,{roof:Rn.GRAVEL});let Ee=g(ye(["#e4e2dc","#cfcac0","#3a3d41","#d9d2c2"]));for(let H of[-1,1])for(let st of[-1,1])d(Dt.x+H*(Bt/2-.4),Dt.z+st*(ee/2-.4),2.4,2.4,xt.top,Nt+5.5,oe.BLANK,Ee,{top:!1});let E=p(Dt,dt,In.pz);for(let H=8;H<E.rows-3;H+=8)d(Dt.x,Dt.z,Bt+1.4,ee+1.4,E.rowY(H)-.1,1.15,oe.BLANK,Ee,{top:!1});for(let H of[-1,1])d(Dt.x,Dt.z+H*(ee/2-.4),Bt-.8,1.2,Dt.top+4.15,1.2,oe.BLANK,Ee,{top:!1}),d(Dt.x+H*(Bt/2-.4),Dt.z,1.2,ee-.8,Dt.top+4.15,1.2,oe.BLANK,Ee,{top:!1});B(Dt,Ae,Dt.top+.2,.3),N(Dt,4),c.push([Dt.x+Bt/2-.4,Dt.top+6,Dt.z+ee/2-.4])}else if(_e==="crowned"){if(Dt=d(R.x,R.z,Bt,ee,xt.top,Nt*.8,oe.CURTAIN,dt,{roof:Rn.TERRACE}),we(.5))for(let st of oo)C("trimMetal",Dt,dt,st,{every:3,depth:.6,width:.16,color:Re});let Ee=Bt,E=ee;for(let st=0;st<3;st++)Ee*=.8,E*=.8,Dt=d(R.x,R.z,Ee,E,Dt.top,Nt*.2/3,oe.CURTAIN,dt,{roof:Rn.GRAVEL});let H=Math.min(Ee,E)*Mt(.8,1.3);f("pyramid",Dt.x,Dt.z,{pos:[Dt.x,Dt.top,Dt.z],rot:0,scale:[Ee,H,E],color:ye(["#5f8f80","#3b4046","#8a8f93","#a8874a"])}),B(Dt,Ae),Y(Dt.x,Dt.top+H-.5,Dt.z,14)}else{let Ee=Bt,E=ee,H=xt.top,st=Nt>120?3:Nt>75?2:1,lt=we(.55),et=we(.5);for(let Ft=0;Ft<st;Ft++){let se=Ft===st-1,ge=se?Math.max(Nt-(H-le),12):Nt*Mt(.42,.58)/(Ft+1);if(Dt=d(R.x,R.z,Ee,E,H,ge,oe.CURTAIN,dt,{roof:se?et?Rn.GRAVEL:Rn.HELIPAD:Rn.TERRACE}),lt)for(let ce of oo)C("trimMetal",Dt,dt,ce,{every:2,depth:.5,width:.12,color:Re});H+=ge,Ee*=Mt(.72,.86),E*=Mt(.72,.86)}if(B(Dt,Ae),et){let Ft=d(Dt.x,Dt.z,Dt.w*.45,Dt.d*.45,Dt.top,6,oe.LOUVRE,u(oe.LOUVRE,"#7d8487"),{top:!1});Y(Dt.x,Ft.top,Dt.z,Nt>140?28:12)}else N(Dt,4),c.push([Dt.x+Dt.w/2-1,Dt.top+.8,Dt.z+Dt.d/2-1])}Nt>85&&_e!=="round"&&_e!=="crowned"&&we(.5)&&z(Dt,W[0])},office(R,W,it){let K=Math.floor(Mt(9,18)+it*Mt(4,12)),nt=Number(so({[oe.RIBBON]:4,[oe.PUNCHED]:3,[oe.PANEL]:2.5})),tt=nt===oe.PANEL?ye(Cn.cladding):ye(Cn.concrete),_t=we(.5),ot=u(nt,tt,_t?{lobby:!0,doors:ao(W)}:{shops:!0}),vt=we(.5)?Gn(tt,.22):ye(["#e6e3dc","#d2cec4","#3c4044"]),xt=nt===oe.RIBBON?so({eyebrow:5,piers:3,plain:2}):nt===oe.PUNCHED?so({grid:3.5,fins:2.5,piers:2.5,plain:1.5}):so({plain:6,fins:4}),dt=Re=>{if(xt==="eyebrow"&&L("trim",Re,ot,{depth:.6,thick:.13,at:.92,color:vt}),xt==="grid"&&L("trim",Re,ot,{depth:.42,thick:.2,color:vt}),xt==="grid"||xt==="fins")for(let Ae of oo)C("trim",Re,ot,Ae,{every:nt===oe.PANEL?2:1,depth:.42,width:.2,color:vt});if(xt==="piers")for(let Ae of oo)C("trim",Re,ot,Ae,{every:2,depth:.3,width:.6,color:vt})},Nt,Bt=Math.min(R.w,R.d)>=40&&we(.4);if(Bt){let Re=we(.5)?1:-1,Ae=we(.5)?1:-1,_e=R.d*Mt(.42,.52),Dt=R.w*Mt(.4,.52);Nt=d(R.x,R.z+Ae*(R.d-_e)/2,R.w,_e,le,m(K,ot),nt,ot);let Ee=Math.max(3,Math.floor(K*Mt(.45,.7))),E=d(R.x+Re*(R.w-Dt)/2,R.z-Ae*_e/2,Dt,R.d-_e,le,m(Ee,ot),nt,{...ot,seed:bt()*100,roof:Rn.TERRACE});dt(E),ot.shops&&O(E,ot,W,!1),b("trim",E,4.5,.3,.2,vt),N(E,2)}else Nt=d(R.x,R.z,R.w,R.d,le,m(K,ot),nt,ot);dt(Nt),ot.shops?O(Nt,ot,W,!1):T(Nt,W[0],R.setback),b("trim",Nt,4.5,.3,.2,vt);let ee=Nt;if(!Bt&&we(.45)&&(ee=d(Nt.x+Mt(-2,2),Nt.z+Mt(-2,2),R.w*Mt(.6,.75),R.d*Mt(.6,.75),Nt.top,Mt(8,20),nt,{...ot,shops:!1,lobby:!1,doors:0}),dt(ee)),we(.5)){let Re=S(ee,Gn(tt,-.25));c.push([Re.x,Re.top+.3,Re.z])}else{let Re=d(ee.x,ee.z,ee.w*.35,ee.d*.35,ee.top,4.5,oe.BLANK,g("#8d8f8c"),{top:!1});N(ee,5),c.push([Re.x,Re.top+.3,Re.z])}K>14&&we(.3)&&z(ee,W[0])},deco(R,W,it){let K=ye(Cn.stone),nt=u(oe.DECO,K,{shops:!0,accent:ye(Cn.brass),light:Ds.BASE}),tt=50+it*Mt(30,90),_t=R.w,ot=R.d,vt=le,xt,dt=3+(tt>100?1:0);for(let Ae=0;Ae<dt;Ae++){let _e=Ae===0?tt*.45:tt*.55/(dt-1);if(xt=d(R.x,R.z,_t,ot,vt,_e,oe.DECO,Ae===0?nt:{...nt,shops:!1,light:Ae===dt-1?Ds.CROWN:Ds.NONE}),Ae===0){O(xt,nt,W,we(.4));for(let Dt of W)k(xt,Dt,Gn(K,.05))}for(let Dt of oo)C("trim",xt,nt,Dt,{every:2,depth:.38,width:.72,color:Gn(K,.06),to:xt.top-.6});P(xt,"#e6dcc6"),vt+=_e,_t*=Mt(.7,.8),ot*=Mt(.7,.8)}let Nt=Math.max(4,_t*.55),Bt=Math.max(4,ot*.55),ee=d(xt.x,xt.z,Nt,Bt,xt.roofY??xt.top,7,oe.DECO,{...nt,shops:!1,light:Ds.CROWN},{top:!1}),Re=Math.min(Nt,Bt)*1.5;f("pyramid",xt.x,xt.z,{pos:[xt.x,ee.top,xt.z],rot:0,scale:[Nt+.6,Re,Bt+.6],color:ye(["#5f8f80","#6f9a8a","#a8874a","#4a5560"])}),Y(xt.x,ee.top+Re-.6,xt.z,14),B(ee,ye(["#ffe2b0","#bfe3ff"]),ee.top-.3,.5)},brick(R,W){let it=u(oe.BRICK,ye(Cn.brick),{shops:we(.75),floorH:Mt(3.1,3.4)});it.shops||(it.doors=ao(W));let K=Math.floor(Mt(4,8)),nt=d(R.x,R.z,R.w,R.d,le,m(K,it),oe.BRICK,it);if(it.shops){O(nt,it,W,we(.5));for(let tt of W)k(nt,tt,"#b8ab98");b("trim",nt,4.5,.3,.18,"#b8ab98")}P(nt,"#b8ab98");for(let tt of W.slice(0,2))we(.8)&&J(nt,it,tt);N(nt,2,we(.8))},condo(R,W,it){let K=ye(Cn.condo),nt=we(.5),tt=u(oe.CONDO,K,{...nt?{lobby:!0}:{shops:we(.6)},floorH:3.2,roof:Rn.TERRACE});tt.shops||(tt.doors=ao(nt?[W[0]]:W));let _t=Math.floor(Mt(6,12)+it*8),ot=d(R.x,R.z,R.w,R.d,le,m(_t,tt),oe.CONDO,tt);tt.shops?O(ot,tt,W,!1):nt&&T(ot,W[0],R.setback);let vt=ye(["grid","grid","stagger","plain"]),xt=Gn(K,.3);if(vt==="grid")for(let dt of W)C("trim",ot,tt,dt,{every:2,depth:1.45,width:.24,color:xt,from:p(ot,tt,dt).rowY(1)-.3});V(ot,tt,W,2,"glass",vt==="stagger"),(tt.shops||nt)&&b("trim",ot,4.5,.3,.2,xt),b("trim",ot,ot.top-.62,.36,.36,xt),d(ot.x,ot.z,ot.w*.5,ot.d*.5,ot.top,5.4,oe.CONDO,{...tt,shops:!1,lobby:!1,doors:0,seed:bt()*100,roof:Rn.GRAVEL},{top:!1}),N(ot,3)},hotel(R,W,it){let K=ye(["#efe6d4","#e2d3bd","#d8dfe2","#f2ddd0"]),nt=W[0]||In.pz,tt=u(oe.CONDO,K,{lobby:!0,doors:ao([nt]),floorH:3.3,light:Ds.BASE,roof:Rn.TERRACE}),_t=Math.min(R.w,Mt(26,38)),ot=Math.min(R.d,Mt(18,26)),vt=Math.floor(Mt(10,16)+it*6),xt=d(R.x,R.z,_t,ot,le,m(vt,tt),oe.CONDO,tt);V(xt,tt,W.length?W:[In.pz],1,"metal"),o.push({kind:"hotel",b:xt,f:nt,name:ye(p_),t:Vp(hi(xt,nt))}),b("trim",xt,4.5,.32,.25,Gn(K,.15)),b("trim",xt,xt.top-.62,.4,.4,Gn(K,.15)),B(xt,"#ffe2b0",xt.top-.12,.2),N(xt,3)},shops(R,W){let it=we(.5),K=we(.6)?ye(Cn.stucco):ye(Cn.concrete),nt=u(oe.PUNCHED,K,{shops:!0}),tt=d(R.x,R.z,R.w,R.d,le,it?m(1,nt):6,oe.PUNCHED,nt),_t=W.length?W:[In.pz];O(tt,nt,_t,!0);for(let ot of _t)if(k(tt,ot,Gn(K,.12)),!it&&we(.55)){let vt=hi(tt,ot)*Mt(.35,.6),[xt,dt]=qn(tt,ot,0,-.3);d(xt,dt,ot.nx?.6:vt,ot.nx?vt:.6,tt.top,Mt(1,1.9),oe.BLANK,g(K),{top:!1})}P(tt,"#cfc6b4"),N(tt,Math.floor(Mt(2,5)))},garage(R,W){let it=ye(["#b3ada2","#a7a49c","#c0b8aa"]),K=u(oe.GARAGE,it,{floorH:3,roof:Rn.GRAVEL}),nt=Math.floor(Mt(4,7)),tt=d(R.x,R.z,R.w,R.d,le,nt*3+1.4,oe.GARAGE,K);o.push({kind:"garage",b:tt,f:W[0]||In.pz});for(let xt=0;xt<=nt;xt++)b("trimMetal",tt,.3+xt*3+.92,.12,.1,"#8d9296");let _t=we(.5)?1:-1,ot=we(.5)?1:-1,vt=d(tt.x+_t*(tt.w/2-2.3),tt.z+ot*(tt.d/2-2.3),5.2,5.2,le,tt.h+4,oe.PUNCHED,u(oe.PUNCHED,Gn(it,.1),{cellW:3.4,floorH:3}),{solid:!1,top:!1});B(vt,"#bfe3ff",vt.top-.5,.35);for(let[xt,dt]of[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]]){let Nt=tt.x+xt*tt.w,Bt=tt.z+dt*tt.d;M("drumMetal",Nt,tt.top,Bt,.14,5,"#5a5f63"),a.push({x:Nt,y:tt.top+5.05,z:Bt,w:.9,h:.14,d:.35,color:"#dcecff"})}N(tt,1)},stucco(R,W){let it=W.length>0&&we(.8),K=ye(Cn.stucco),nt=u(oe.STUCCO,K,{shops:it,accent:ye(Cn.dado),doors:it?0:ao(W)}),tt=Math.floor(Mt(2,5)),_t=we(.8)?oe.STUCCO:oe.PUNCHED,ot=d(R.x,R.z,R.w,R.d,le,m(tt,nt),_t,nt);if(it){O(ot,nt,W,we(.6));for(let xt of W)k(ot,xt,Gn(K,.1))}if(we(.8)){let xt=Math.min(ot.w,ot.d)*.22;if(f("tileRoof",ot.x,ot.z,{pos:[ot.x,ot.top,ot.z],rot:0,scale:[ot.w,xt,ot.d]}),we(.6)){let dt=ot.x+Mt(-.3,.3)*ot.w,Nt=ot.z+Mt(-.3,.3)*ot.d;y("trim",dt,ot.top,Nt,.9,xt+1,.9,Gn(K,-.06)),y("trim",dt,ot.top+xt+1,Nt,1.15,.16,1.15,"#8a5a40")}}else N(ot,2);_t===oe.STUCCO&&tt>2&&we(.5)&&rt(ot,nt,W),W.find(xt=>xt.nx===-1)&&we(.6)&&h.push({x:ot.x-ot.w/2-.12,z:ot.z,y:(it?4.8:1.2)+1.8,face:"west",text:ye(["MOTEL","TACOS","SURF SHOP","LIQUOR","PIZZA","COCKTAILS","ICE CREAM","BAIT & TACKLE"]),color:ye(["#ff4f7b","#5ff2ff","#ffd25a","#ff7a3d","#9dff6a"])})},motel(R,W){let it=W[0]||In.pz,K=u(oe.MOTEL,ye(Cn.stucco),{floorH:3,accent:ye(Cn.dado)}),nt=hi(R,it),tt=it.nx?R.w:R.d,_t=Math.min(tt*.5,12),ot=tt/2-_t/2,vt=R.x-it.nx*ot,xt=R.z-it.nz*ot,dt=it.nx?_t:nt*.92,Nt=it.nx?nt*.92:_t,Bt=d(vt,xt,dt,Nt,le,m(2,K),oe.MOTEL,K),ee=hi(Bt,it),[Re,Ae]=qn(Bt,it,0,0);f("balconySlab",Re,Ae,{pos:[Re,.9+3+.02,Ae],rot:it.rot,scale:[ee-.4,1,1.15],color:"#e6e1d6"}),f("balconyRail",Re,Ae,{pos:[Re,.9+3+.02,Ae],rot:it.rot,scale:[ee-.4,1,1.15],color:"#e8e4da"});for(let Ee=-ee/2+.5;Ee<=ee/2-.4;Ee+=4.2){let[E,H]=qn(Bt,it,Ee,1.4);M("drum",E,le,H,.16,3.68,"#e8e4da")}f("tileRoof",Bt.x,Bt.z,{pos:[Bt.x,Bt.top,Bt.z],rot:0,scale:[Bt.w,Math.min(Bt.w,Bt.d)*.28,Bt.d]});let[_e,Dt]=qn(R,it,-hi(R,it)/2+4,-2);o.push({kind:"motelSign",x:_e,z:Dt,f:it,name:ye(["SEA BREEZE","SUNSET","PALM VIEW","BLUE WAVE"])}),r.push({x:R.x+it.nx*_t/2,z:R.z+it.nz*_t/2,w:it.nx?tt-_t:nt,d:it.nx?nt:tt-_t,parking:!0})},warehouse(R,W){let it=u(oe.METAL,ye(Cn.metal),{floorH:9,roof:Rn.SKYLIGHTS}),K=d(R.x,R.z,R.w,R.d,le,Mt(8,11.5),oe.METAL,it),nt=W[0];nt&&v("trimMetal",K,nt,0,hi(K,nt)*.82,Math.min(2.4,(R.setback??1)+1.2),4.9,.16,"#5a5f63");let tt=K.w>K.d;y("trimMetal",K.x,K.top,K.z,tt?K.w*.7:2.6,1.1,tt?2.6:K.d*.7,"#7d8388"),N(K,Math.floor(Mt(1,4)))},civic(R,W){let it=ye(["#d9d2c0","#cfc8b8","#e0d8c8","#c9c2b2"]),K=W[0]||In.pz,nt=u(oe.DECO,it,{floorH:5.4,cellW:3.6,accent:ye(Cn.brass),light:Ds.BASE}),tt=hi(R,K),_t=K.nx?R.w:R.d,ot=Math.min(6.5,_t*.22),vt=d(R.x-K.nx*ot/2,R.z-K.nz*ot/2,K.nx?_t-ot:tt,K.nx?tt:_t-ot,le,m(3,nt),oe.DECO,nt);P(vt,Gn(it,.08),1.3);let xt=Math.min(tt*.62,30),dt=1.1,Nt=vt.h*.6,Bt=Gn(it,.1);for(let H=0;H<3;H++)v("trim",vt,K,0,xt+2.6-H*.5,ot-.3-H*.85,le,(H+1)*dt/3,Gn(it,-.08));let ee=ot-2.85,Re=Math.max(4,2*Math.round(xt/7)),Ae=le+dt;for(let H=0;H<Re;H++){let[st,lt]=qn(vt,K,-xt/2+.8+H/(Re-1)*(xt-1.6),ee);y("trim",st,Ae,lt,1.5,.3,1.5,Bt),M("drum",st,Ae+.3,lt,1.12,Nt-.6,Bt),y("trim",st,Ae+Nt-.3,lt,1.5,.3,1.5,Bt)}v("trim",vt,K,0,xt+1.4,ee+.85,Ae+Nt,1.5,Bt);let[_e,Dt]=qn(vt,K,0,(ee+1)/2-.04);f("prism",_e,Dt,{pos:[_e,Ae+Nt+1.5,Dt],rot:K.rot,scale:[xt+2.2,xt*.17,ee+1.08],color:Bt}),a.push({x:_e,y:Ae+Nt-.05,z:Dt,w:K.nx?ee-.6:xt-2,h:.06,d:K.nx?xt-2:ee-.6,color:"#ffe2b0"}),v("trimMetal",vt,K,0,3.4,.22,Ae,5.4,"#5a4026");let[Ee,E]=qn(vt,K,0,(ot-.3)/2);if(n.push({x:Ee,z:E,w:(K.nx?ot-.3:xt+2.6)/2,d:(K.nx?xt+2.6:ot-.3)/2}),we(.4)){let H=Math.min(vt.w,vt.d)*.44,st=vt.roofY??vt.top,lt=ye(["#6f9a8a","#5f8f80","#a8874a"]);M("drum",vt.x,st,vt.z,H,3.4,Bt),f("dome",vt.x,vt.z,{pos:[vt.x,st+3.4,vt.z],rot:0,scale:[H*.97,H*.97,H*.97],color:lt}),M("drum",vt.x,st+3.4+H*.47,vt.z,H*.13,1.8,Bt),f("cone",vt.x,vt.z,{pos:[vt.x,st+5.2+H*.47,vt.z],rot:0,scale:[H*.17,1.6,H*.17],color:lt})}else N(vt,2)},landmark(R,W){let it="#c9ccce",K=u(oe.CURTAIN,"#d4d7d9",{glass:[.13,.25,.3],cellW:1.9,floorH:4,variant:.9,accent:it}),nt=d(R,W,48,48,le,14,oe.CURTAIN,{...K,lobby:!0,roof:Rn.TERRACE},{round:!0});M("drumMetal",R,nt.top-.7,W,49.2,.5,it);let tt=d(R,W,30,30,nt.top,236,oe.CURTAIN,K,{round:!0,roof:Rn.GRAVEL});for(let dt=nt.top+40;dt<tt.top-20;dt+=40)M("drumMetal",R,dt,W,31,.6,it);let _t=tt.top,ot=(dt,Nt)=>{let Bt=d(R,W,dt,dt,_t,Nt,oe.CURTAIN,{...K,seed:bt()*100},{round:!0,top:!1});return _t+=Nt,Bt};ot(33,3.2),ot(37,3.2);let vt=ot(41,6.5);a.push({x:R,y:vt.y0+.2,z:W,w:41.7,h:.5,d:41.7,round:!0,pulse:!0}),a.push({x:R,y:vt.top-.3,z:W,w:41.7,h:.4,d:41.7,round:!0,pulse:!0}),ot(35,4);let xt=ot(27,8);a.push({x:R,y:xt.top-.3,z:W,w:27.6,h:.4,d:27.6,round:!0,pulse:!0}),f("cone",R,W,{pos:[R,_t,W],rot:0,scale:[27.4,26,27.4],color:"#8a9196"}),f("antenna",R,W,{pos:[R,_t+24,W],rot:0,scale:[5,60,5],color:"#b9bdc0"}),c.push([R,_t+84.5,W]),Ct={x:R,z:W,top:_t+84}}},Ct=null,Wt=[],zt=Ei/2-zi;for(let[R,W,it]of Vi()){let K=`${R},${W}`,nt=it.kind==="mix"?it.weights:it.kind,tt=it.dw;if(nt==="park"){r.push({x:R,z:W,w:zt*2,d:zt*2,park:!0});continue}if(nt==="parking"){let dt=d(R-zt+14,W-zt+11,24,18,le,5.5,oe.STUCCO,u(oe.STUCCO,ye(Cn.stucco),{shops:!0}));O(dt,null,[In.nz],!0),k(dt,In.nz,"#d9d2c4");let Nt=K==="80,240"?"GAS \xB7 24H":K==="-240,-400"?"SURF DINER":Gp[Math.floor(cr(R+3,W+9)*Gp.length)];h.push({x:dt.x,z:dt.z-dt.d/2-.1,y:7.6,face:"north",text:Nt,color:"#ff6a5a"}),r.push({x:R+10,z:W+10,w:zt*1.6,d:zt*1.6,parking:!0});continue}if(nt==="plaza"||nt==="plaza-tall"){if(it.landmark)At.landmark(R,W);else{let dt=Mt(46,54);At.tower({x:R+Mt(-6,6),z:W+Mt(-6,6),w:dt,d:dt,setback:6},oo,nt==="plaza-tall"?Math.max(1.25,tt*1.1):Math.max(.95,tt))}r.push({x:R,z:W,w:zt*2,d:zt*2,plaza:!0});continue}let ot=it.coastal||it.district==="eastside"||it.district==="foothills",vt=ga({x0:R-zt,x1:R+zt,z0:W-zt,z1:W+zt},ot?18:22,ot?44:64,[]),xt=we(.6);for(let dt of vt){let Nt=dt.x1-dt.x0,Bt=dt.z1-dt.z0,ee=[];if(dt.x0<=R-zt+.5&&ee.push(In.nx),dt.x1>=R+zt-.5&&ee.push(In.px),dt.z0<=W-zt+.5&&ee.push(In.nz),dt.z1>=W+zt-.5&&ee.push(In.pz),we(.07)||!ee.length){r.push({x:(dt.x0+dt.x1)/2,z:(dt.z0+dt.z1)/2,w:Nt,d:Bt});continue}let Re=Object.fromEntries(Object.entries(nt).filter(([et])=>Math.min(Nt,Bt)>=u_[et])),Ae=Object.keys(Re).length?so(Re):"shops",_e=Ae==="tower"?Mt(2,6):Ae==="shops"||Ae==="brick"?Mt(.2,1):Mt(.5,3),Dt=xt&&f_.has(Ae)?0:Mt(1.5,4),Ee=ee.includes(In.nx)?_e:Dt,E=ee.includes(In.px)?_e:Dt,H=ee.includes(In.nz)?_e:Dt,st=ee.includes(In.pz)?_e:Dt,lt={x:(dt.x0+Ee+dt.x1-E)/2,z:(dt.z0+H+dt.z1-st)/2,w:Nt-Ee-E,d:Bt-H-st,setback:_e};Wt.push({type:Ae,x:lt.x,z:lt.z,w:lt.w,d:lt.d,faces:ee.map(et=>[et.nx,et.nz])}),At[Ae](lt,ee,tt)}}for(let R=0;R<620;R++){let W=bt(),it=W<.6?Mt(qe+100,qe+760):Mt(-300,qe+400),K=W<.6?Mt(He-500,$e+500):we(.5)?Mt($e+140,$e+620):Mt(He-620,He-140);l.push([it,K])}let Ot=m_(),me=g_(t),mt=x_(t),wt=new pe(1,1,1),It=$u(),kt=new Yt({map:me,emissive:16777215,emissiveMap:me,emissiveIntensity:.4,roughness:.5});kt.onBeforeCompile=R=>{R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSign;`).replace("#include <uv_vertex>",`#include <uv_vertex>
        vec2 atlasUv = uv * vec2(0.5, 0.125) + aSign;
        #ifdef USE_MAP
          vMapUv = atlasUv;
        #endif
        #ifdef USE_EMISSIVEMAP
          vEmissiveMapUv = atlasUv;
        #endif`)},kt.customProgramCacheKey=()=>"shop-sign-atlas";let Xt=new Map,pt=new Yt({color:16777215,roughness:.82}),Ut=new Yt({color:16777215,roughness:.82});Ut.onBeforeCompile=R=>{R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
attribute float aMetal;
varying float vMetal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMetal = aMetal;`),R.fragmentShader=R.fragmentShader.replace("#include <common>",`#include <common>
varying float vMetal;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(0.82, 0.38, vMetal);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor = vMetal * 0.85;`)},Ut.customProgramCacheKey=()=>"trim";let D=new Yt({color:16777215,roughness:.5,metalness:.45}),ct={facade:{geometry:wt,material:It,shadow:!0,lod:0},facadeRound:{geometry:Ot.round,material:It,shadow:!0,lod:0},tileRoof:{geometry:Wp(),material:Ku(),shadow:!0,lod:1100},ac:{geometry:Ot.acUnit,material:new Yt({color:16777215,roughness:.55,metalness:.5}),shadow:!0,lod:320},tank:{geometry:Ot.tank,material:new Yt({color:16777215,roughness:.9}),shadow:!0,lod:420},antenna:{geometry:Ot.antenna,material:new Yt({color:16777215,roughness:.4,metalness:.8}),shadow:!0,lod:1400},fireEscape:{geometry:null,material:new Yt({color:16777215,roughness:.6,metalness:.6}),shadow:!0,lod:260},balconySlab:{geometry:Ot.balconySlab,material:new Yt({color:16777215,roughness:.8}),shadow:!0,lod:340},balconyGlass:{geometry:Ot.balconyRail,material:new Yt({color:16777215,roughness:.08,metalness:.7,transparent:!0,opacity:.55,depthWrite:!1}),shadow:!1,lod:300},balconyRail:{geometry:Ot.balconyRail,material:new Yt({color:16777215,roughness:.5,metalness:.5}),shadow:!0,lod:300},awning:{geometry:Ot.awning,material:new Yt({map:mt,side:wn,roughness:.9}),shadow:!0,lod:300},sign:{geometry:Ot.sign,material:kt,shadow:!1,lod:520},trim:{geometry:wt,material:Ut,shadow:!0,lod:640},drum:{geometry:Ot.drum,material:Ut,shadow:!0,lod:900},prism:{geometry:Ot.prism,material:pt,shadow:!0,lod:1e3},pyramid:{geometry:Ot.pyramid,material:D,shadow:!0,lod:0},cone:{geometry:Ot.cone,material:D,shadow:!0,lod:0},dome:{geometry:Ot.dome,material:D,shadow:!0,lod:0}},ht=new Set(["tileRoof","ac","tank","antenna","fireEscape","balconyGlass","balconyRail","balconySlab","trim","drum","prism"]),at=new Set(["facade","facadeRound"]),j=Vu($u(!0)),F={range:360},U=new ne,X=new Ge,q=new I,$=new I,w=new Ht,_=new I(0,1,0),G={};for(let[R,W]of e){let[it]=R.split("|"),K=ct[it];if(G[it]=(G[it]||0)+W.length,it==="fireEscape"){let nt=new Map;for(let tt of W){let _t=tt.floorH.toFixed(1);nt.has(_t)||nt.set(_t,[]),nt.get(_t).push(tt)}for(let[tt,_t]of nt)Xt.has(tt)||Xt.set(tt,Ot.fireEscape(Number(tt))),Q(it,_t,Xt.get(tt),K);continue}Q(it,W,K.geometry,K)}function Q(R,W,it,K){let nt=it,tt=R==="trim"||R==="drum";(at.has(R)||R==="sign"||tt)&&(nt=it.clone());let _t=new Be(nt,K.material,W.length);if(at.has(R)){let ot=new Float32Array(W.length*4),vt=new Float32Array(W.length*4),xt=new Float32Array(W.length*4);W.forEach((dt,Nt)=>{U.compose(q.set(dt.x,dt.y0+dt.h/2,dt.z),X.identity(),$.set(dt.w,dt.h,dt.d)),_t.setMatrixAt(Nt,U),_t.setColorAt(Nt,w.set(dt.wall)),ot.set([dt.style,dt.floorH,dt.cellW,dt.seed],Nt*4),vt.set([...dt.glass,kp({ground:dt.lobby?Hc.LOBBY:dt.shops?Hc.SHOPS:Hc.PLINTH,round:!!dt.round,roof:dt.roof,light:dt.light,doors:dt.doors})],Nt*4),w.set(dt.accent),xt.set([w.r,w.g,w.b,dt.variant],Nt*4)}),nt.setAttribute("aStyle",new fn(ot,4)),nt.setAttribute("aGlass",new fn(vt,4)),nt.setAttribute("aAccent",new fn(xt,4))}else{let ot=R==="sign"?new Float32Array(W.length*2):null;tt&&nt.setAttribute("aMetal",new fn(new Float32Array(W.map(vt=>vt.metal||0)),1)),W.forEach((vt,xt)=>{X.setFromAxisAngle(_,vt.rot||0),U.compose(q.set(...vt.pos),X,$.set(...vt.scale)),_t.setMatrixAt(xt,U),vt.color&&_t.setColorAt(xt,w.set(vt.color)),ot&&ot.set([vt.sign%2*.5,.875-Math.floor(vt.sign/2)*.125],xt*2)}),ot&&nt.setAttribute("aSign",new fn(ot,2))}_t.name=R,_t.castShadow=K.shadow,_t.receiveShadow=!0,_t.userData.lod=K.lod,R==="balconyGlass"&&(_t.userData.noAO=!0),ht.has(R)&&_t.layers.set(1),_t.instanceMatrix.needsUpdate=!0,_t.computeBoundingSphere(),_t.computeBoundingBox(),s.add(_t),at.has(R)?io(_t,0,(ot,vt)=>{vt.material=ot>F.range?j:It}):io(_t,K.lod)}let gt=[],ft=new Map,Kt=(R,W,it,K=null)=>{if(K&&ft.has(K))return ft.get(K);let nt=xn(t,R,W,it);return K&&ft.set(K,nt),nt},Et=new Map,Zt=(R,W)=>(Et.has(R)||Et.set(R,W()),Et.get(R)),ie=(R,W={})=>new Yt({color:1118481,map:R,emissive:16777215,emissiveMap:R,emissiveIntensity:.4,roughness:.5,...W}),St=new Yt({color:1843235,roughness:.45,metalness:.6}),Jt=new Yt({color:3353120,emissive:16767392,emissiveIntensity:.3}),he=(R,W,it,K=!0,nt=700)=>{R.traverse(tt=>{tt.isMesh&&(tt.castShadow=!0,tt.receiveShadow=!0)}),R.isGroup&&hs(R),R.userData.glow=K,s.add(R),io(R,nt),gt.push({mesh:R})};for(let R of o)if(R.kind==="hotel"){let{b:W,f:it,name:K,t:nt}=R,tt=hi(W,it),_t=new hn,ot=ye(["#ffd27a","#ff7aa8","#7ad7ff"]),vt=new $t(new pe(7,.35,3.4),St);vt.position.set(nt,4.25,1.7);let xt=new $t(new pe(6.6,.05,3),Jt);xt.position.set(nt,4.05,1.7),_t.add(vt,xt);for(let E of[-3.2,3.2]){let H=new $t(new De(.07,.07,4.1,8),St);H.position.set(nt+E,2.05,3.3),_t.add(H)}let dt=K.replace("HOTEL ","").replace("THE ",""),Nt=Kt(128,1024,(E,H,st)=>{E.fillStyle="#121519",E.fillRect(0,0,H,st),E.strokeStyle=ot,E.lineWidth=6,E.strokeRect(8,8,H-16,st-16),E.fillStyle=ot,E.textAlign="center",E.textBaseline="middle",E.shadowColor=ot,E.shadowBlur=14;let lt=dt.split(""),et=(st-80)/lt.length;E.font=`800 ${Math.min(100,et*.95)}px "Barlow Condensed", Impact, sans-serif`,lt.forEach((Ft,se)=>E.fillText(Ft,H/2,50+et*(se+.5)))},"blade"+dt+ot),Bt=Zt("blade"+dt+ot,()=>ie(Nt)),ee=Math.min(14,W.top-9);if(ee>5){let E=new $t(new pe(.35,ee,2.2),[Bt,Bt,St,St,St,St]);E.position.set(tt/2-2.2,7+ee/2,1.2),_t.add(E)}let Re=Kt(1024,128,(E,H,st)=>{E.clearRect(0,0,H,st),E.font='800 104px "Barlow Condensed", Impact, sans-serif',E.textAlign="center",E.textBaseline="middle",E.shadowColor=ot,E.shadowBlur=18,E.fillStyle=ot,E.fillText(K,H/2,st/2+4),E.shadowBlur=0,E.fillStyle="#fff6e0",E.fillText(K,H/2,st/2+4)},"roof"+K+ot),Ae=Zt("roof"+K+ot,()=>{let E=ie(Re,{transparent:!0,alphaTest:.05,color:0});return E.userData.boost=1.4,E}),_e=new $t(new sn(Math.min(tt*.85,26),Math.min(tt*.85,26)/8),Ae);_e.position.set(0,W.top-W.y0+1.9,-.6),_t.add(_e);let[Dt,Ee]=qn(W,it,0,0);_t.position.set(Dt,le,Ee),_t.rotation.y=it.rot,he(_t,Dt,Ee)}else if(R.kind==="corp"){let{b:W,f:it,name:K,color:nt}=R,tt=Math.min(hi(W,it)*.62,24),_t=tt/6.4,ot=Kt(1024,160,(Bt,ee,Re)=>{Bt.clearRect(0,0,ee,Re),Bt.font='700 118px "Barlow Condensed", Impact, sans-serif',Bt.textAlign="center",Bt.textBaseline="middle",Bt.shadowColor=nt,Bt.shadowBlur=16,Bt.fillStyle=nt,Bt.fillText(K,ee/2,Re/2+6,ee-40),Bt.shadowBlur=0,Bt.fillStyle="#ffffff",Bt.fillText(K,ee/2,Re/2+6,ee-40)},"corp"+K+nt),vt=Zt("corp"+K+nt,()=>{let Bt=ie(ot,{transparent:!0,alphaTest:.05,color:0});return Bt.userData.boost=1.5,Bt}),xt=new $t(new sn(tt,_t),vt),[dt,Nt]=qn(W,it,0,.14);xt.position.set(dt,W.top-1.7-_t/2,Nt),xt.rotation.y=it.rot,he(xt,dt,Nt,!0,1700),xt.castShadow=!1}else if(R.kind==="garage"){let{b:W,f:it}=R,K=Kt(128,128,(vt,xt,dt)=>{vt.fillStyle="#1d5fbf",vt.fillRect(0,0,xt,dt),vt.strokeStyle="#ffffff",vt.lineWidth=8,vt.strokeRect(8,8,xt-16,dt-16),vt.fillStyle="#ffffff",vt.font="800 100px Arial, sans-serif",vt.textAlign="center",vt.textBaseline="middle",vt.fillText("P",xt/2,dt/2+6)},"garageP"),nt=Zt("garageP",()=>ie(K,{color:16777215})),tt=new $t(new pe(1.8,1.8,.3),[St,St,St,St,nt,nt]),[_t,ot]=qn(W,it,0,.3);tt.position.set(_t,W.top-2,ot),tt.rotation.y=it.rot,he(tt,_t,ot)}else if(R.kind==="motelSign"){let{x:W,z:it,f:K,name:nt}=R,tt=Kt(512,256,(dt,Nt,Bt)=>{dt.fillStyle="#16303a",dt.fillRect(0,0,Nt,Bt),dt.strokeStyle="#ff5a6e",dt.lineWidth=10,dt.strokeRect(10,10,Nt-20,Bt-20),dt.textAlign="center",dt.textBaseline="middle",dt.shadowColor="#ff5a6e",dt.shadowBlur=20,dt.fillStyle="#ff7a8a",dt.font='800 110px "Barlow Condensed", Impact, sans-serif',dt.fillText("MOTEL",Nt/2,92),dt.shadowColor="#5fe8ff",dt.fillStyle="#9ff3ff",dt.font='700 54px "Barlow Condensed", Impact, sans-serif',dt.fillText(nt,Nt/2,186),dt.shadowBlur=0,dt.fillStyle="#ffd25a",dt.font="700 30px Arial",dt.fillText("VACANCY",Nt/2,232)},"motel"+nt),_t=Zt("motel"+nt,()=>ie(tt)),ot=new hn,vt=new $t(new De(.22,.28,7.5,10),St);vt.position.y=3.75;let xt=new $t(new pe(5.4,2.7,.35),[St,St,St,St,_t,_t]);xt.position.y=8.6,ot.add(vt,xt),ot.position.set(W,le,it),ot.rotation.y=K.rot+Math.PI/2,he(ot,W,it)}let ue=()=>{let R=new Yt({color:2236962,emissive:16777215,emissiveIntensity:0,roughness:.4});return R.onBeforeCompile=W=>{W.fragmentShader=W.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},R.customProgramCacheKey=()=>"crown",R},qt=ue(),de=ue(),Z=(R,W,it)=>{if(!R.length)return;let K=new Be(W,it,R.length);R.forEach((nt,tt)=>{U.compose(q.set(nt.x,nt.y,nt.z),X.identity(),$.set(nt.w,nt.h,nt.d)),K.setMatrixAt(tt,U),K.setColorAt(tt,w.set(nt.color||"#ffffff"))}),K.layers.set(1),s.add(K)};Z(a.filter(R=>!R.round&&!R.pulse),wt,qt),Z(a.filter(R=>R.round&&!R.pulse),Ot.drum,qt),Z(a.filter(R=>R.pulse),Ot.drum,de);let Pt=new bn({color:new Ht(6,.3,.2)}),Gt=new Be(new zn(.45,8,6),Pt,c.length);c.forEach(([R,W,it],K)=>{U.makeTranslation(R,W,it),Gt.setMatrixAt(K,U)}),s.add(Gt);let te=v_(s,l),Rt=[];for(let R of h)Rt.push(y_(s,t,R));let yt=new Set(gt.flatMap(({mesh:R})=>{let W=[];return R.traverse(it=>{if(it.isMesh)for(let K of[].concat(it.material))(K.emissiveMap||K===Jt)&&W.push(K)}),W})),ae=new Set(Rt.map(R=>R.material)),Te=new ur(160,R=>[R.w/2,R.d/2]).addAll(i);return{colliders:n,buildingTops:i,emptyLots:r,topsGrid:Te,landmark:Ct,catalog:Wt,stats:{buildings:n.length,facadeBoxes:(G.facade||0)+(G.facadeRound||0),pieces:G},setDetail(R){F.range=R},update(R,W){qt.emissiveIntensity=R*1.6,de.emissive.setHSL((1.03+.07*Math.sin(W*.12))%1,.9,.56),de.emissiveIntensity=R*(2+.4*Math.sin(W*.7)),Pt.color.setRGB(8*(.15+.85*R)*(Math.sin(W*3.2)>.2?1:.04),.25,.15),kt.emissiveIntensity=.3+R*2;for(let K of yt)K.emissiveIntensity=(.3+R*2.2)*(K.userData.boost||1);let it=Math.sin(W*37)>.93?.3:1;for(let K of ae)K.emissiveIntensity=(.3+R*2.2)*(K.userData.flicker?it:1);te&&(te.material.userData.night.value=R)}}}function v_(s,t){let e={value:0},n=si("hillhouse",{color:16777215,roughness:.85},{uniforms:{night:e},fragmentPars:"uniform float night; float paHouseGlow;",color:`
      {
        float h = pa_hash12(floor(vPaWorld.xz * 0.2));
        float win = step(0.5, fract(vPaWorld.y * 0.45)) * step(0.4, fract((vPaWorld.x + vPaWorld.z) * 0.35)) * step(0.3, abs(vPaNormalW.y - 1.0));
        paHouseGlow = win * step(h, 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05), win * 0.7);
      }`,emissive:"totalEmissiveRadiance += vec3(1.0, 0.7, 0.4) * paHouseGlow * night * 2.5;"}),i=t.filter(([d,u])=>Ni(d,u)>4),r=new Be(new pe(1,1,1),n,i.length),o=new ne,a=new Ge,c=new Ht;i.forEach(([d,u],g)=>{let x=Mt(8,16),m=Mt(8,14),p=Mt(4,8);a.setFromAxisAngle(new I(0,1,0),bt()*Math.PI),o.compose(new I(d,Ni(d,u)+p/2-1,u),a,new I(x,p,m)),r.setMatrixAt(g,o),r.setColorAt(g,c.set(ye(Cn.stucco)))}),n.userData.night=e,r.castShadow=!1,r.receiveShadow=!0,s.add(r);let h=new Be(Wp(),Ku(),i.length),l=new I,f=new I;for(let d=0;d<i.length;d++)r.getMatrixAt(d,o),o.decompose(l,a,f),o.compose(l.set(l.x,l.y+f.y/2,l.z),a,f.set(f.x,Math.min(f.x,f.z)*.3,f.z)),h.setMatrixAt(d,o);return h.receiveShadow=!0,h.layers.set(1),s.add(h),r}var Ju=new Map;function y_(s,t,{x:e,y:n,z:i,face:r,text:o,color:a}){let c=o+a;if(!Ju.has(c)){let f=xn(t,512,128,(u,g,x)=>{u.fillStyle="#0b0d10",u.fillRect(0,0,g,x),u.font='700 70px "Barlow Condensed", Impact, sans-serif',u.textAlign="center",u.textBaseline="middle",u.shadowColor=a,u.shadowBlur=18,u.fillStyle=a,u.fillText(o,g/2,x/2+3),u.shadowBlur=0,u.fillStyle="#ffffffcc",u.fillText(o,g/2,x/2+3),u.strokeStyle=a,u.lineWidth=5,u.strokeRect(8,8,g-16,x-16)}),d=new Yt({color:1118481,map:f,emissive:16777215,emissiveMap:f,emissiveIntensity:1,roughness:.5});d.userData.flicker=we(.25),Ju.set(c,d)}let h=Math.min(12,3+o.length*.9),l=new $t(new sn(h,h/4),Ju.get(c));return l.position.set(e,n,i),l.rotation.y=r==="west"?-Math.PI/2:r==="east"?Math.PI/2:r==="north"?Math.PI:0,s.add(l),io(l,520),l}var xa=class s extends $t{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new On;let n=this,i=e.color!==void 0?new Ht(e.color):new Ht(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||s.ReflectorShader,h=e.multisample!==void 0?e.multisample:4,l=new yi,f=new I,d=new I,u=new I,g=new ne,x=new I(0,0,-1),m=new Ze,p=new I,y=new I,M=new Ze,v=new ne,b=this.camera,C=new gn(r,o,{samples:h,type:Bn}),L=new nn({name:c.name!==void 0?c.name:"unspecified",uniforms:Fi.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});L.uniforms.tDiffuse.value=C.texture,L.uniforms.color.value=i,L.uniforms.textureMatrix.value=v,this.material=L,this.onBeforeRender=function(P,T,S){if(d.setFromMatrixPosition(n.matrixWorld),u.setFromMatrixPosition(S.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(d,u),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(d),g.extractRotation(S.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(u),y.subVectors(d,x),y.reflect(f).negate(),y.add(d),b.position.copy(p),b.up.set(0,1,0),b.up.applyMatrix4(g),b.up.reflect(f),b.lookAt(y),b.far=S.far,b.updateMatrixWorld(),b.projectionMatrix.copy(S.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(b.projectionMatrix),v.multiply(b.matrixWorldInverse),v.multiply(n.matrixWorld),l.setFromNormalAndCoplanarPoint(f,d),l.applyMatrix4(b.matrixWorldInverse),m.set(l.normal.x,l.normal.y,l.normal.z,l.constant);let Y=b.projectionMatrix;M.x=(Math.sign(m.x)+Y.elements[8])/Y.elements[0],M.y=(Math.sign(m.y)+Y.elements[9])/Y.elements[5],M.z=-1,M.w=(1+Y.elements[10])/Y.elements[14],m.multiplyScalar(2/m.dot(M)),Y.elements[2]=m.x,Y.elements[6]=m.y,Y.elements[10]=m.z+1-a,Y.elements[14]=m.w,n.visible=!1;let B=P.getRenderTarget(),O=P.xr.enabled,k=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(C),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(T,b),P.xr.enabled=O,P.shadowMap.autoUpdate=k,P.setRenderTarget(B);let V=S.viewport;V!==void 0&&P.state.viewport(V),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),n.material.dispose()}}};xa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var __=`
uniform mat4 textureMatrix;
uniform float time;
varying vec4 vMirror;
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  float offshore = smoothstep(${ti.toFixed(1)}, ${(ti-70).toFixed(1)}, wp.x);
  wp.y += (sin(wp.x * 0.045 + time * 0.9) * 0.22 + sin(wp.z * 0.031 - wp.x * 0.017 + time * 0.65) * 0.18) * offshore;
  vWorld = wp.xyz;
  vMirror = textureMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,M_=`
uniform sampler2D tDiffuse;
uniform float useMirror;
uniform float time;
uniform vec3 sunLight;
uniform vec3 ambient;
varying vec4 vMirror;
varying vec3 vWorld;
${Rs}
${Pc}
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

  float shoreDist = ${ti.toFixed(1)} - vWorld.x; // meters offshore
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
}`;function Yp(s,t){let n=ze.maxZ-ze.minZ+3e3,i=new sn(3200,n,128,256),r=new xa(i,{textureWidth:512,textureHeight:512,clipBias:.003,multisample:0}),o=r.material.uniforms,a={...Fi.clone(re.fog),...tn,...kc,fogSunColor:tn.fogSunColor,fogSunDir:tn.fogSunDir,fogHeightFalloff:tn.fogHeightFalloff,tDiffuse:o.tDiffuse,textureMatrix:o.textureMatrix,useMirror:{value:1},time:{value:0},sunLight:{value:new Ht},ambient:{value:new Ht}};r.material.dispose(),r.material=new nn({uniforms:a,vertexShader:__,fragmentShader:M_,fog:!0,transparent:!0}),r.rotation.x=-Math.PI/2,r.position.set(ti+8-3200/2,Nu,0),r.userData.noAO=!0,r.camera.layers.set(0),r.renderOrder=1,r.frustumCulled=!1,s.add(r);let c=new ne,h=new Or(new Uint8Array([0,0,0,255]),1,1);h.needsUpdate=!0;let l=r.onBeforeRender,f=[];r.updateMatrixWorld(),r.geometry.computeBoundingBox();let d=r.geometry.boundingBox.clone().applyMatrix4(r.matrixWorld);d.expandByVector(new I(0,2,0));let u=new bs,g=new ne,x={paused:!1},m=function(...v){let b=v[2];if(!x.paused&&!(b&&ci.wetness.value<.02&&(g.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),u.setFromProjectionMatrix(g),!u.intersectsBox(d)))){ci.mirrorTex.value=h,ci.useMirror.value=0;for(let C of f)C.visible=!1;tn.mirrorPass.value=1,l.apply(this,v),tn.mirrorPass.value=0;for(let C of f)C.visible=!0;c.copy(r.matrixWorld).invert(),ci.mirrorMatrix.value.copy(o.textureMatrix.value).multiply(c),ci.mirrorTex.value=r.getRenderTarget().texture,ci.useMirror.value=1}};r.onBeforeRender=m;let p=!0,y=b_(s,t);for(let v of Wn)v.plain&&y.lamps.push(...w_(s,t,v));let M=E_(s);return{ocean:r,pier:y,mirror:x,mirrorHide:f,setReflections(v,b=.5){p=v,a.useMirror.value=v?1:0,r.onBeforeRender=v?m:()=>{},this.resize(b)},resize(v=.5){if(!p)return;let b=t.getDrawingBufferSize(new Tt);r.getRenderTarget().setSize(Math.max(256,Math.round(b.x*v)),Math.max(256,Math.round(b.y*v)))},update(v,b){a.time.value=v,p||(ci.mirrorTex.value=h,ci.useMirror.value=0),ci.worldTime.value=v,a.sunLight.value.copy(b.sun.color).multiplyScalar(b.elevation>-1?b.sun.intensity:0),a.ambient.value.copy(b.hemi.color).multiplyScalar(b.hemi.intensity*.6),y.update(v,b.lampFactor),M.update(b.lampFactor)}}}function Zp(){return si("wood",{color:16777215,roughness:.8},{color:`
      {
        vec2 p = vPaWorld.xz;
        float plank = (abs(vPaNormalW.y) > 0.5 ? p.y : p.x) / 0.3;
        float fw = max(fwidth(plank), 0.002);
        float gap = pa_band(fract(plank), 0.0, 0.07, fw);
        float id = pa_hash12(vec2(floor(plank), 3.0));
        vec3 col = mix(vec3(0.3, 0.22, 0.15), vec3(0.42, 0.33, 0.23), id) * (0.82 + pa_noise(vec2(p.x * 3.0, plank)) * 0.25);
        diffuseColor.rgb = col * (1.0 - gap * 0.55);
      }`})}function b_(s,t){let e=new hn,{x0:n,x1:i,z:r,halfWidth:o,deckY:a}=Gi,c=Zp(),h=n-i,l=new $t(new pe(h,.6,o*2),c);l.position.set((n+i)/2,a-.3,r),l.castShadow=l.receiveShadow=!0,e.add(l);let f=Gi.rampStart-n,d=Math.atan2(a-.16,f),u=new pe(Math.hypot(f,a),.6,o*2),g=new $t(u,c);g.position.set((Gi.rampStart+n)/2,(a+.16)/2-.3,r),g.rotation.z=-d,g.castShadow=g.receiveShadow=!0,e.add(g);let x=[];for(let F=Gi.rampStart-8;F>=i;F-=9)for(let U of[-o+1,0,o-1])x.push([F,r+U]);let m=new De(.32,.38,1,8),p=new Be(m,new Yt({color:4930349,roughness:.9}),x.length),y=new ne;x.forEach(([F,U],X)=>{let $=(Is(F,r)??a)-.5;y.compose(new I(F,(-6+$)/2,U),new Ge,new I(1,$- -6,1)),p.setMatrixAt(X,y)}),p.castShadow=!0,e.add(p),Gi.piles=x.filter(([F])=>F>ti-4).map(([F,U])=>({x:F,z:U,r:.45}));let M=new Yt({color:15262938,roughness:.5,metalness:.3});for(let F of[-1,1])for(let U of[.55,1.05]){let X=new $t(new pe(h,.08,.08),M);X.position.set((n+i)/2,a+U,r+F*(o-.1)),e.add(X)}let v=Math.floor(h/3),b=new Be(new pe(.1,1.1,.1),M,v*2);for(let F=0;F<v;F++)for(let[U,X]of[-1,1].entries())y.makeTranslation(n-F*3,a+.55,r+X*(o-.1)),b.setMatrixAt(F*2+U,y);e.add(b);let C=new Yt({color:15327695,roughness:.75}),L=new Yt({color:3108730,roughness:.5,metalness:.2});for(let[F,U,X,q,$]of[[i+14,r+4.5,18,7,6],[i+36,r-5,12,6,5]]){let w=new $t(new pe(X,$,q),C);w.position.set(F,a+$/2,U),w.castShadow=w.receiveShadow=!0,e.add(w);let _=new $t(new pe(X+1,.4,q+1),L);_.position.set(F,a+$+.2,U),e.add(_)}let P=new Yt({color:1780275,roughness:.4,metalness:.6});for(let F of[-1,1]){let U=new $t(new pe(.6,8,.6),P);U.position.set(Gi.rampStart-2,4.1,r+F*(o+.4)),U.castShadow=!0,e.add(U)}let T=xn(t,1024,160,(F,U,X)=>{F.fillStyle="#0d1418",F.fillRect(0,0,U,X),F.textAlign="center",F.textBaseline="middle",F.font='800 96px "Barlow Condensed", Impact, sans-serif',F.shadowColor="#ff8a3d",F.shadowBlur=24,F.fillStyle="#ffb36b",F.fillText("VISTA PAC\xCDFICA PIER",U/2,X/2+4),F.shadowBlur=0,F.fillStyle="#fff3e0",F.fillText("VISTA PAC\xCDFICA PIER",U/2,X/2+4)}),S=new Yt({color:1118481,map:T,emissive:16777215,emissiveMap:T,emissiveIntensity:1}),N=new $t(new pe(.4,2.6,o*2+1.4),P);N.position.set(Gi.rampStart-2,8.6,r),e.add(N);for(let F of[-1,1]){let U=new $t(new sn(o*2+1.2,2.4),S);U.position.set(Gi.rampStart-2+F*.21,8.6,r),U.rotation.y=F*Math.PI/2,e.add(U)}let Y=new hn,B=19,O=a+B+3.5,k=i+55,V=r+.5;Y.position.set(k,O,V);let rt=new Yt({color:14278112,roughness:.35,metalness:.8}),J=new ns(B,.22,8,96);for(let F of[-1.3,1.3]){let U=new $t(J,rt);U.position.z=F,Y.add(U);let X=new $t(new ns(B*.55,.14,6,64),rt);X.position.z=F,Y.add(X)}let z=24,At=new De(.07,.07,B,4);At.translate(0,B/2,0);for(let F=0;F<z;F++)for(let U of[-1.3,1.3]){let X=new $t(At,rt);X.rotation.z=F/z*Math.PI*2,X.position.z=U,Y.add(X)}let Ct=new $t(new De(1.1,1.1,3.6,16),rt);Ct.rotation.x=Math.PI/2,Y.add(Ct),e.add(Y);for(let F of[-3.5,3.5])for(let U of[-1,1]){let X=Math.hypot(9,O-a),q=new $t(new De(.28,.4,X,8),rt);q.position.set(k+U*4.5,(O+a)/2,V+F),q.rotation.z=U*Math.atan2(9,O-a),q.castShadow=!0,e.add(q)}let Wt=16,zt=new Yt({color:16777215,roughness:.4,metalness:.3}),Ot=new Be(new pe(1.8,2,1.8),zt,Wt),me=["#e2523a","#f2c14e","#3aa0c8","#f7f2e6"],mt=new Ht;for(let F=0;F<Wt;F++)Ot.setColorAt(F,mt.set(me[F%4]));Ot.castShadow=!0,e.add(Ot);let wt=9,It=z*wt+96,kt=new bn({color:16777215}),Xt=new Be(new zn(.16,6,4),kt,It),pt=[];for(let F=0;F<z;F++){let U=F/z*Math.PI*2;for(let X=1;X<=wt;X++){let q=X/wt*B;pt.push([-Math.sin(U)*q,Math.cos(U)*q,1.45,X/wt,F])}}for(let F=0;F<96;F++){let U=F/96*Math.PI*2;pt.push([Math.cos(U)*B,Math.sin(U)*B,1.5,1,F])}pt.forEach(([F,U,X],q)=>{y.makeTranslation(F,U,X),Xt.setMatrixAt(q,y)}),Y.add(Xt),Xt.layers.set(1);let Ut=[];for(let F=n-6;F>i+4;F-=16)for(let U of[-1,1])Ut.push([F,r+U*(o-.4)]);let D=new Be(new De(.06,.09,4.5,6),P,Ut.length),ct=new Yt({color:16773846,emissive:16765066,emissiveIntensity:0}),ht=new Be(new zn(.28,10,8),ct,Ut.length);Ut.forEach(([F,U],X)=>{y.makeTranslation(F,a+2.25,U),D.setMatrixAt(X,y),y.makeTranslation(F,a+4.6,U),ht.setMatrixAt(X,y)}),e.add(D,ht),hs(Y),hs(e,{exclude:[Y]}),s.add(e);let at=new Ht,j=new Ln;return{lamps:Ut.map(([F,U])=>[F,a+4.6,U]),update(F,U){let X=F*.06;Y.rotation.z=X;for(let $=0;$<Wt;$++){let w=X+$/Wt*Math.PI*2;j.position.set(k+Math.cos(w)*B,O+Math.sin(w)*B-1.4,V),j.updateMatrix(),Ot.setMatrixAt($,j.matrix)}Ot.instanceMatrix.needsUpdate=!0;let q=.25+U*5.5;for(let $=0;$<pt.length;$++){let[,,,w,_]=pt[$],G=(F*.08+w*.35+_*.013)%1,Q=.55+.45*Math.sin(F*4-w*8+_*.5);at.setHSL(G,.85,.55),at.multiplyScalar(q*Q),Xt.setColorAt($,at)}Xt.instanceColor.needsUpdate=!0,ct.emissiveIntensity=U*3,$p.emissiveIntensity=U*3,S.emissiveIntensity=.3+U*1.8}}}var $p=new Yt({color:16773846,emissive:16765066,emissiveIntensity:0});function w_(s,t,e){let n=new hn,{x0:i,x1:r,z:o,halfWidth:a,deckY:c}=e,h=Zp(),l=i-r,f=new ne,d=new $t(new pe(l,.6,a*2),h);d.position.set((i+r)/2,c-.3,o);let u=e.rampStart-i,g=new $t(new pe(Math.hypot(u,c),.6,a*2),h);g.position.set((e.rampStart+i)/2,(c+.16)/2-.3,o),g.rotation.z=-Math.atan2(c-.16,u);let x=new $t(new pe(13,.6,9),h);x.position.set(r+9,c-.31,o+a+4.5);for(let O of[d,g,x])O.castShadow=O.receiveShadow=!0,n.add(O);let m=[];for(let O=e.rampStart-8;O>=r;O-=9)for(let k of[-a+1,0,a-1])m.push([O,o+k]);let p=new Be(new De(.32,.38,1,8),new Yt({color:4930349,roughness:.9}),m.length);m.forEach(([O,k],V)=>{let J=(Is(O,o)??c)-.5;f.compose(new I(O,(-6+J)/2,k),new Ge,new I(1,J- -6,1)),p.setMatrixAt(V,f)}),p.castShadow=!0,n.add(p),e.piles=m.filter(([O])=>O>ti-4).map(([O,k])=>({x:O,z:k,r:.45}));let y=new Yt({color:7301728,roughness:.6,metalness:.3});for(let O of[-1,1])for(let k of[.55,1.05]){let V=new $t(new pe(l,.08,.08),y);V.position.set((i+r)/2,c+k,o+O*(a-.1)),n.add(V)}let M=Math.floor(l/3),v=new Be(new pe(.1,1.1,.1),y,M*2);for(let O=0;O<M;O++)for(let[k,V]of[-1,1].entries())f.makeTranslation(i-O*3,c+.55,o+V*(a-.1)),v.setMatrixAt(O*2+k,f);n.add(v);let b=new Yt({color:8368296,roughness:.75}),C=new Yt({color:9059116,roughness:.6}),L=new $t(new pe(9,4.2,6),b);L.position.set(r+9,c+2.1,o+a+5),L.castShadow=L.receiveShadow=!0;let P=new $t(new pe(10.2,.35,7.2),C);P.position.set(r+9,c+4.35,o+a+5),n.add(L,P);let T=xn(t,512,128,(O,k,V)=>{O.fillStyle="#10222a",O.fillRect(0,0,k,V),O.textAlign="center",O.textBaseline="middle",O.font='800 76px "Barlow Condensed", Impact, sans-serif',O.fillStyle="#ffe9b8",O.fillText("BAIT & TACKLE",k/2,V/2+4)}),S=new $t(new sn(7,1.75),new Yt({map:T,emissive:16777215,emissiveMap:T,emissiveIntensity:.5,roughness:.6}));S.position.set(r+9,c+3.4,o+a+1.98),S.rotation.y=Math.PI,n.add(S);let N=[];for(let O=i-6;O>r+4;O-=18)for(let k of[-1,1])N.push([O,o+k*(a-.4)]);let Y=new Be(new De(.06,.09,4.5,6),y,N.length),B=new Be(new zn(.28,10,8),$p,N.length);return N.forEach(([O,k],V)=>{f.makeTranslation(O,c+2.25,k),Y.setMatrixAt(V,f),f.makeTranslation(O,c+4.6,k),B.setMatrixAt(V,f)}),n.add(Y,B),hs(n),s.add(n),N.map(([O,k])=>[O,c+4.6,k])}function E_(s){let t=new hn,e=new ne,n=new Yt({color:6269385,roughness:.6}),i=new Yt({color:15854296,roughness:.6}),r=new Yt({color:14175290,roughness:.6});for(let u=ze.minZ+36;u<=ze.maxZ-30;u+=130){if(Wn.some(b=>Math.abs(u-b.z)<40))continue;let g=new hn,x=new $t(new pe(3.2,2.4,3.2),n);x.position.y=3.2;let m=new $t(new Mi(2.7,1.1,4),r);m.position.y=4.95,m.rotation.y=Math.PI/4;let p=new $t(new pe(4.4,.18,4.4),i);p.position.y=1.95;let y=new $t(new pe(.1,.9,2.4),new Yt({color:1911347,roughness:.1,metalness:.6}));y.position.set(-1.62,3.5,0),g.add(x,m,p,y);for(let b of[-1.8,1.8])for(let C of[-1.8,1.8]){let L=new $t(new pe(.18,2.4,.18),i);L.position.set(b,.8,C),g.add(L)}let M=new $t(new pe(4.5,.12,1.4),i);M.position.set(3.6,1,0),M.rotation.z=-.42,g.add(M);let v=-388;g.position.set(v,-.02-(Un-v)*.0105,u),g.traverse(b=>{b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0)}),t.add(g)}let o=["#e8553a","#f0c24b","#3b8fc2","#f3efe4","#45a37f"],a=130,c=new Be(new Mi(1.4,.55,12,1,!0),new Yt({color:16777215,roughness:.8,side:wn}),a),h=new Be(new De(.03,.03,2.3,4),i,a),l=new Be(new pe(.9,.02,1.9),new Yt({color:16777215,roughness:.9}),a),f=new Ht,d=new Ge;for(let u=0;u<a;u++){let g=Mt(ze.minZ+30,ze.maxZ-30);Wn.some(p=>Math.abs(g-p.z)<14)&&(g+=30);let x=Mt(-398,-366),m=-.02-(Un-x)*.0105;d.setFromEuler(new Dn(Mt(-.12,.12),0,Mt(-.12,.12))),e.compose(new I(x,m+2.3,g),d,new I(1,1,1)),c.setMatrixAt(u,e),e.compose(new I(x,m+1.15,g),d,new I(1,1,1)),h.setMatrixAt(u,e),c.setColorAt(u,f.set(ye(o))),d.setFromAxisAngle(new I(0,1,0),Mt(0,Math.PI)),e.compose(new I(x+Mt(-1.5,1.5),m+.02,g+Mt(-1.5,1.5)),d,new I(1,1,1)),l.setMatrixAt(u,e),l.setColorAt(u,f.set(ye(o)))}c.castShadow=h.castShadow=!0,l.receiveShadow=!0,t.add(c,h,l);for(let u of[c,h,l])u.layers.set(1);return hs(t),s.add(t),{update(){}}}var Qu={value:new Ht};function S_(s){return xn(s,256,1024,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<150;i++){let r=i/150,o=n*(.04+r*.94),a=e*.47*Math.sin(Math.PI*Math.pow(r,.75))*(.85+bt()*.3),c=70+bt()*50,h=40+bt()*30,l=25+bt()*20;t.strokeStyle=`rgb(${h},${c},${l})`,t.lineWidth=3.2+bt()*2.2;for(let f of[-1,1])t.beginPath(),t.moveTo(e/2,o),t.quadraticCurveTo(e/2+f*a*.5,o-a*.25,e/2+f*a,o-a*.55+bt()*8),t.stroke()}t.strokeStyle="#5b5a34",t.lineWidth=6,t.beginPath(),t.moveTo(e/2,n*.02),t.lineTo(e/2,n),t.stroke()})}function T_(s){return xn(s,512,512,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<46;i++){let r=bt()*Math.PI*2,o=Math.sqrt(bt())*e*.36,a=e/2+Math.cos(r)*o,c=n/2+Math.sin(r)*o,h=r+(bt()-.5)*1.2,l=40+bt()*50,f=.55+.45*(o/(e*.36));t.strokeStyle=`rgba(60,48,30,${.8})`,t.lineWidth=2,t.beginPath(),t.moveTo(a,c),t.lineTo(a+Math.cos(h)*l,c+Math.sin(h)*l),t.stroke();for(let d=0;d<16;d++){let u=bt(),g=a+Math.cos(h)*l*u+(bt()-.5)*18,x=c+Math.sin(h)*l*u+(bt()-.5)*18,m=(70+bt()*70)*f,p=(28+bt()*32)*f,y=(18+bt()*26)*f;t.fillStyle=`rgb(${p|0},${m|0},${y|0})`,t.save(),t.translate(g,x),t.rotate(h+(bt()-.5)*2.2),t.beginPath(),t.ellipse(0,0,9+bt()*7,3.5+bt()*2.5,0,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(190,210,140,${.25*f})`,t.lineWidth=1,t.beginPath(),t.moveTo(-8,0),t.lineTo(8,0),t.stroke(),t.restore()}}})}function A_(s,t,e,n,i){let o=[],a=[],c=[],h=new I(Math.cos(s),0,Math.sin(s)),l=new I(-h.z,0,h.x),f=new I;for(let u=0;u<=7;u++){let g=u/7,x=t-i*g*g;u>0&&(f=f.clone().addScaledVector(h,Math.cos(x)*e/7).add(new I(0,Math.sin(x)*e/7,0)));let m=n*Math.sin(Math.PI*Math.min(1,.15+g*.95))*.5+.05,p=.18*m;for(let[y,M]of[[-1,0],[0,.5],[1,1]]){let v=f.clone().addScaledVector(l,y*m);v.y+=y===0?p:-p*.2,o.push(v.x,v.y,v.z),a.push(M,1-g)}if(u>0){let y=(u-1)*3,M=u*3;c.push(y,M,y+1,y+1,M,M+1,y+1,M+1,y+2,y+2,M+1,M+2)}}let d=new Je;return d.setAttribute("position",new be(o,3)),d.setAttribute("uv",new be(a,2)),d.setIndex(c),d.computeVertexNormals(),d}function R_(s,t,e){let n=[];for(let i=0;i<s;i++){let r=i%3,o=i/s*Math.PI*2+bt()*.3,a=[.95,.45,.05][r]+bt()*.2,c=[1.3,1.6,1.4][r];n.push(A_(o,a,t*(r===0?.8:1)*Mt(.88,1.1),e,c))}return rn(n)}function C_(s){let t=new De(.62,1,1,9,12,!0);t.translate(0,.5,0);let e=t.attributes.position;for(let n=0;n<e.count;n++){let i=e.getY(n);e.setX(n,e.getX(n)+s*i*i)}return t.computeVertexNormals(),t}function Kp(s,t,e={}){let n=si(t,{map:s,alphaTest:.42,side:wn,roughness:.72,metalness:0,...e},{uniforms:{worldTime:tn.worldTime,leafSun:Qu,skySunDir:tn.skySunDir},vertexPars:"uniform float worldTime;",vertex:"",fragmentPars:"uniform vec3 leafSun; uniform vec3 skySunDir;",color:"diffuseColor.rgb *= 0.8 + 0.4 * pa_noise(vPaWorld.xz * 0.7 + vPaWorld.y);",emissive:`
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
      }`)},n}function I_(){return si("palmtrunk",{color:16777215,roughness:.9},{color:`
      {
        float rings = pa_band(fract(vPaWorld.y * 3.2 + pa_noise(vPaWorld.xz * 3.0) * 0.4), 0.0, 0.18, fwidth(vPaWorld.y * 3.2));
        vec3 bark = mix(vec3(0.33, 0.29, 0.24), vec3(0.45, 0.4, 0.33), pa_noise(vec2(atan(vPaNormalW.z, vPaNormalW.x) * 4.0, vPaWorld.y * 0.8)));
        diffuseColor.rgb = bark * (1.0 - rings * 0.3);
      }`})}function ju({lobes:s,cards:t,spread:e,crownY:n,lobeR:i,trunkH:r,columnar:o=!1}){let a=[],c=[],h=new De(.2,.34,r+.4,7);h.translate(0,(r+.4)/2,0),c.push(h);let l=[];for(let g=0;g<s;g++){if(o){let p=g/Math.max(1,s-1);l.push([new I((bt()-.5)*.3,n+p*6.4,(bt()-.5)*.3),i*(1.05-p*.55)]);continue}if(g===s-1){l.push([new I(0,n+i*.75,0),i*1.05]);continue}let x=g/(s-1)*Math.PI*2+bt()*.6,m=e*Mt(.75,1.1);l.push([new I(Math.cos(x)*m,n+Mt(-.6,.5),Math.sin(x)*m),i*Mt(.85,1.1)])}let f=new I(0,r*.92,0),d=new I,u=new I;for(let[g,x]of l){if(!o){let m=g.clone().sub(f),p=m.length()*.85,y=new De(.07,.14,p,5);y.translate(0,p/2,0),y.applyQuaternion(new Ge().setFromUnitVectors(new I(0,1,0),m.normalize())),y.translate(f.x,f.y,f.z),c.push(y)}for(let m=0;m<t;m++){let p=new sn(2.1,2.1);d.set(bt()-.5,bt()-.35,bt()-.5).normalize();let y=Math.cbrt(bt()),M=g.clone().addScaledVector(d,y*x*.85),v=d.clone().add(new I(bt()-.5,bt()-.5,bt()-.5).multiplyScalar(.9)).normalize();p.lookAt(v),p.rotateZ(bt()*6.28),p.translate(M.x,M.y,M.z);let b=p.attributes.normal,C=p.attributes.position,L=new Float32Array(C.count*3);for(let P=0;P<C.count;P++){u.set(C.getX(P),C.getY(P),C.getZ(P));let T=u.clone().sub(g).normalize(),S=u.clone().sub(new I(0,n,0)).normalize();T.multiplyScalar(.7).addScaledVector(S,.3).normalize(),b.setXYZ(P,T.x,T.y,T.z);let N=ke.clamp(.5+y*.4+T.y*.15,.35,1);L[P*3]=L[P*3+1]=L[P*3+2]=N}p.setAttribute("color",new vn(L,3)),a.push(p)}}return{canopy:rn(a),wood:rn(c.map(g=>g.index?g.toNonIndexed():g))}}function Jp(s,t){let e=[],n=S_(t),i=T_(t),r=Kp(n,"frond"),o=Kp(i,"canopy",{vertexColors:!0}),a=I_(),c=new Yt({color:6048309,roughness:1}),h=(B,O=6)=>Ne.some(k=>Math.abs(B-k)<Me+O),l=(B,O=6)=>Ue.some(k=>Math.abs(B-k)<Me+O),f=new gi(32);for(let B of as){let[O,k]=or(B);f.add({x:O,z:k})}let d=(B,O)=>f.near(B,O,8,k=>Math.abs(k.x-B)<4&&Math.abs(k.z-O)<6),u=[],g=[],x=[];for(let B=ze.minZ+11;B<=ze.maxZ-11;B+=18)Wn.some(O=>Math.abs(B-O.z)<14)||(u.push([(dn.to+Un)/2+Mt(-1.5,1.5),B+Mt(-2,2)]),we(.3)&&g.push([Un-Mt(6,14),B+Mt(-4,4)]));for(let[B,O]of[[-320,qe+10],[0,qe+10],[-1280,640],[1280,640]])for(let k=Qe+20;k<O;k+=28)if(!l(k))for(let V of[-1,1])u.push([k+Mt(-1,1),B+V*(Me+1.6)]);for(let B=He+10;B<$e;B+=32)h(B)||u.push([Qe+Me+1.6,B+Mt(-1,1)]);let m=[-160,0,640];for(let B of m)for(let O=He-26;O<$e+40;O+=34)if(!h(O,7))for(let k of[-1,1]){let V=B+k*(Me+2.7),rt=O+(k>0?17:0);d(V,rt)||h(rt,7)||u.push([V+Mt(-.3,.3),rt+Mt(-1,1)])}for(let[B,O,k]of Lp()){let V=Ei/2-10,rt=k.district==="laurel"&&B>560&&B<1040&&O>160&&O<480,J=rt?44:26;for(let z=0;z<J;z++){let At=B+Mt(-V,V),Ct=O+Mt(-V,V);Math.abs(At-B)<9&&Math.abs(Ct-O)<9||(we(rt?.15:.4)?g.push([At,Ct]):x.push([At,Ct,Mt(.8,1.3),0]))}}for(let B of Ue)if(!(B===Qe||m.includes(B)&&B!==0)){for(let O of Cs)for(let k of[-1,1])if(!(B===qe&&k>0)&&!(os[Ui(ar(B+k*40),O)][3]<.5))for(let V=O-50;V<=O+50;V+=25){let rt=B+k*(Me+1.8);d(rt,V)||x.push([rt,V,Mt(.6,.85),0])}}for(let B=0;B<2600;B++){let O=bt(),k=O<.5?Mt(qe+60,qe+900):Mt(-300,qe+500),V=O<.5?Mt(He-700,$e+700):O<.75?Mt(He-640,He-95):Mt($e+95,$e+640),rt=Ni(k,V);rt<2||x.push([k,V,Mt(.7,1.6),rt])}let p=new ne,y=new Ge,M=new I,v=new I,b=new I(0,1,0),C=B=>[B[0],B[1]],L=B=>{B.castShadow=!0,B.receiveShadow=!0};function P(B,{heightRange:O,thickness:k,bend:V,crown:rt,skirt:J}){let z=C_(V),At=R_(rt.count,rt.length,rt.width),Ct=B.map(([zt,Ot])=>{let me=Mt(...O),mt=new ne().compose(M.set(zt,-.1,Ot),y.setFromAxisAngle(b,bt()*Math.PI*2),v.set(k,me,k)),wt=new I(V,1,0).applyMatrix4(mt),It=Mt(.85,1.15),kt=new Ge().setFromAxisAngle(b,bt()*Math.PI*2);return e.push({x:zt,z:Ot,r:.45}),{x:zt,z:Ot,base:mt,top:wt,cs:It,crownQ:kt}}),Wt=zt=>[zt.x,zt.z];An(s,Ct,z,a,{at:Wt,far:800,setup:L,set:(zt,Ot,me)=>zt.setMatrixAt(Ot,me.base)}),An(s,Ct,At,r,{at:Wt,far:1100,setup:L,set:(zt,Ot,me)=>zt.setMatrixAt(Ot,p.compose(me.top,me.crownQ,v.set(me.cs,me.cs,me.cs)))}),J&&An(s,Ct,new De(.9,.55,1,8),c,{at:Wt,far:600,setup:zt=>{zt.castShadow=!0},set:(zt,Ot,me)=>zt.setMatrixAt(Ot,p.compose(M.copy(me.top).add(v.set(0,-1.6,0)),me.crownQ,v.set(1,2.6,1)))})}P(u,{heightRange:[17,26],thickness:.36,bend:4,crown:{count:15,length:4.2,width:1.5},skirt:!0}),P(g,{heightRange:[6,10],thickness:.75,bend:.8,crown:{count:24,length:6.2,width:2.2},skirt:!1});let T={broad:ju({lobes:6,cards:22,spread:2.1,crownY:5.6,lobeR:1.85,trunkH:4.2}),cypress:ju({lobes:5,cards:14,spread:.25,crownY:2.4,lobeR:1.05,trunkH:1.6,columnar:!0}),far:ju({lobes:3,cards:14,spread:1.7,crownY:5.4,lobeR:2.1,trunkH:4.2})},S={broad:[],cypress:[],far:[]};for(let B of x)B[3]>0?S[we(.35)?"cypress":"far"].push(B):S.broad.push(B);let N=new Yt({color:4865328,roughness:.95}),Y=new Ht;for(let[B,O]of Object.entries(S)){let{canopy:k,wood:V}=T[B],rt=B!=="broad",J=O.map(([Wt,zt,Ot,me])=>{let mt=B==="cypress"?Mt(1.1,1.6):Mt(.85,1.2),wt=new ne().compose(M.set(Wt,me-.1,zt),y.setFromAxisAngle(b,bt()*Math.PI*2),v.set(Ot,Ot*mt,Ot));return B==="broad"&&we(.22)?Y.setHSL(Mt(.72,.78),Mt(.35,.5),Mt(.62,.72)):B==="cypress"?Y.setHSL(Mt(.26,.32),Mt(.3,.45),Mt(.32,.42)):Y.setHSL(Mt(.2,.3),Mt(.35,.6),Mt(.45,.62)),me===0&&e.push({x:Wt,z:zt,r:.5}),{x:Wt,z:zt,matrix:wt,tint:Y.clone()}}),Ct={at:Wt=>[Wt.x,Wt.z],far:rt?2400:750,chunk:rt?640:320,setup:Wt=>{Wt.castShadow=B!=="far",Wt.receiveShadow=!0,rt&&Wt.layers.set(1)}};An(s,J,k,o,{...Ct,set:(Wt,zt,Ot)=>{Wt.setMatrixAt(zt,Ot.matrix),Wt.setColorAt(zt,Ot.tint)}}),An(s,J,V,N,{...Ct,far:rt?900:600,set:(Wt,zt,Ot)=>Wt.setMatrixAt(zt,Ot.matrix)})}return{trunkColliders:e,counts:{tall:u.length,stout:g.length,trees:x.length}}}var Gc=28;function Ls(s,t){let e=(t%Gc+Gc)%Gc,n=s===0?e:(e+14)%Gc;return n<10?2:n<13?1:0}function P_(s){return xn(s,128,128,(t,e,n)=>{let i=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(.7,"rgba(255,255,255,0.15)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,e,n)})}var D_=`
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
}`,L_=`
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
}`;function va(s,t=0){return new nn({uniforms:{color:{value:new Ht(s)},intensity:{value:t}},vertexShader:D_,fragmentShader:L_,transparent:!0,depthWrite:!1,blending:ai,side:wn})}function jp(s,t,e=[],n=null){let i=new ne,r=new Ge,o=new I,a=new I(1,1,1),c=new I(1,1,1),h=new I(0,1,0),l=new Yt({color:4146760,roughness:.45,metalness:.7}),f=[],d=Me+7;for(let F of Ue)for(let U=He-40;U<=$e+40;U+=38)if(!Ne.some(X=>Math.abs(U-X)<d))for(let X of[-1,1])F===Qe&&X<0||f.push([F+X*(Me+.9),U+(X>0?19:0),-X,0]);for(let F of Ne)for(let U=Qe+20;U<=qe;U+=38)if(!Ue.some(X=>Math.abs(U-X)<d))for(let X of[-1,1])f.push([U+(X>0?19:0),F+X*(Me+.9),0,-X]);let u=[];for(let F=ze.minZ+16;F<=ze.maxZ-16;F+=24)Wn.every(U=>Math.abs(F-U.z)>12)&&u.push([(dn.from+dn.to)/2,F]);let g=new De(.09,.14,9,8);g.translate(0,4.5,0);let x=new pe(.1,.1,2.6);x.translate(0,8.85,1.3);let m=rn([g,x]),p=new pe(.42,.16,.9),y=new Yt({color:7829367,emissive:16766624,emissiveIntensity:0,roughness:.3}),M=F=>[F[0],F[1]],v=([,,F,U])=>r.setFromAxisAngle(h,Math.atan2(F,U)),b=F=>{F.castShadow=!0},C=An(s,f,m,l,{at:M,far:650,setup:b,set:(F,U,X)=>F.setMatrixAt(U,i.compose(o.set(X[0],le,X[1]),v(X),c))}),L=An(s,f,p,y,{at:M,far:1700,set:(F,U,X)=>F.setMatrixAt(U,i.compose(o.set(X[0]+X[2]*2.5,le+8.78,X[1]+X[3]*2.5),v(X),c))}),P=new Yt({color:16774888,emissive:16764810,emissiveIntensity:0,roughness:.2}),T=An(s,u,new De(.07,.1,4.2,8),l,{at:M,far:500,set:(F,U,[X,q])=>F.setMatrixAt(U,i.makeTranslation(X,le+2.1,q))}),S=An(s,u,new zn(.3,12,8),P,{at:M,far:1400,set:(F,U,[X,q])=>F.setMatrixAt(U,i.makeTranslation(X,le+4.4,q))}),N=[...f.map(([F,U,X,q])=>[F+X*2.6,U+q*2.6,13,1,0]),...u.map(([F,U])=>[F,U,8,.8,0]),...e.map(([F,U,X])=>[F,X,7,.7,U-4.6])],Y=new bn({map:P_(t),color:16757866,transparent:!0,depthWrite:!1,blending:ai,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2,fog:!0}),B=new sn(1,1);B.rotateX(-Math.PI/2);let O=F=>U=>{U.renderOrder=F,U.userData.noAO=!0,U.layers.set(1)},k=An(s,N,B,Y,{at:M,far:800,setup:O(2),set:(F,U,[X,q,$,w,_])=>F.setMatrixAt(U,i.compose(o.set(X,_+.04+(w<1?le:0),q),r.identity(),a.set($,1,$)))}),V=new De(.25,3.6,8.6,18,1,!0);V.translate(0,-4.3,0);let rt=va(16757866),J=An(s,f,V,rt,{at:M,far:380,setup:O(3),set:(F,U,[X,q,$,w])=>F.setMatrixAt(U,i.makeTranslation(X+$*2.5,le+8.7,q+w*2.5))}),z=[],At=[];for(let F of Ue)for(let U of Ne){let X=[[F+6,U-16,0,1,0],[F-6,U+16,0,-1,0],[F+16,U+6,-1,0,1],[F-16,U-6,1,0,1]];for(let[q,$,w,_,G]of X){if(G===0&&(_>0&&U===$e||_<0&&U===He)||G===1&&(w<0&&F===Qe||w>0&&F===qe))continue;z.push([q,$,w,_,G]);let Q=G===0?F+14.2*Math.sign(q-F):q,gt=G===0?$:U+14.2*Math.sign($-U);At.push([Q,gt,q,$])}}let Ct=new De(.16,.2,7,8);Ct.translate(0,3.5,0),An(s,At,Ct,l,{at:M,far:650,setup:b,set:(F,U,[X,q])=>F.setMatrixAt(U,i.makeTranslation(X,le,q))}),An(s,At,new pe(1,.16,.16),l,{at:M,far:650,setup:b,set:(F,U,[X,q,$,w])=>{r.setFromAxisAngle(h,Math.atan2(-(w-q),$-X)),F.setMatrixAt(U,i.compose(o.set((X+$)/2,6.8,(q+w)/2),r,a.set(Math.hypot($-X,w-q)+1,1,1)))}});let Wt=new Yt({color:1909284,roughness:.5,metalness:.4});An(s,z,new pe(.5,1.4,.36),Wt,{at:M,far:650,set:(F,U,[X,q,$,w])=>F.setMatrixAt(U,i.compose(o.set(X,6.1,q),r.setFromAxisAngle(h,Math.atan2($,w)),c))});let zt=new De(.14,.14,.06,12);zt.rotateX(Math.PI/2);let Ot=new nn({uniforms:{uState:{value:new Tt}},vertexShader:`
      attribute vec2 aSig;
      uniform vec2 uState;
      varying vec3 vCol;
      void main() {
        float st = aSig.x < 0.5 ? uState.x : uState.y;
        vec3 c = aSig.y < 0.5 ? vec3(7.0, 0.35, 0.2) : aSig.y < 1.5 ? vec3(7.0, 3.6, 0.3) : vec3(0.3, 6.0, 2.2);
        vCol = abs(st - aSig.y) < 0.5 ? c : vec3(0.05);
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:`varying vec3 vCol;
void main() { gl_FragColor = vec4(vCol, 1.0); }`}),me=z.flatMap(([F,U,X,q,$])=>[0,1,2].map(w=>[F,U,X,q,$,w]));An(s,me,zt,Ot,{at:M,far:900,cloneGeometry:!0,set:(F,U,[X,q,$,w,,_])=>F.setMatrixAt(U,i.compose(o.set(X+$*.2,6.55-_*.43,q+w*.2),r.setFromAxisAngle(h,Math.atan2($,w)),c)),setup:(F,U)=>F.geometry.setAttribute("aSig",new fn(new Float32Array(U.flatMap(X=>[X[4],X[5]])),2))}),n&&(f.forEach(([F,U],X)=>n.add([C.refs[X],L.refs[X]],[k.refs[X],J.refs[X]],{type:"lamp",x:F,z:U,y:le,r:.18,mass:.22,solid:6,kind:"topple",sparks:!0})),u.forEach(([F,U],X)=>n.add([T.refs[X],S.refs[X]],[k.refs[f.length+X]],{type:"lamp",x:F,z:U,y:le,r:.14,mass:.12,solid:4,kind:"topple",sparks:!0})));let mt=At.map(([F,U])=>({x:F,z:U,r:.3})),wt=[["SURF FIZZ","TASTE THE SWELL","#ff6b4a","#14303d"],["HORIZON AIR","FLY THE COAST","#ffd36b","#1a2a52"],["VISTA BANK","YOUR MONEY. YOUR VIEW.","#9fe3d3","#10302c"],["NEON NIGHTS","THE PIER \xB7 FRIDAYS","#ff63c3","#1d0f2e"],["CALDERA GT","BUILT FOR THE COAST ROAD","#ff7a3d","#141a20"],["SOLSTICE","SUNSCREEN \xB7 SPF 50","#ffe2a8","#c2542e"],["RADIO KZRO","88.1 \xB7 COAST FUNK ALL NIGHT","#8cf5c0","#12202b"],["LAUREL PARK","JAZZ UNDER THE JACARANDAS","#d6b8ff","#22183a"]],It=[[-215,-432,-Math.PI/2],[100,212,Math.PI],[-136,30,-Math.PI/2],[270,362,Math.PI]];for(let[F,U,X]of Vi())X.kind!=="parking"||F<=320&&Math.abs(U)<=480||It.push([F+46,U+52,cr(F,U)<.5?0:Math.PI/2]);for(let F=He+200,U=0;F<$e;F+=450,U++)It.push([qe+25,F+U%2*50,-Math.PI/2]);for(let F=Qe+380;F<qe;F+=520)It.push([F,He-30,0],[F+130,$e+30,Math.PI]);let kt=[],Xt=new hn,pt=wt.map(([F,U,X,q])=>{let $=xn(t,1024,384,(_,G,Q)=>{let gt=_.createLinearGradient(0,0,G,Q);gt.addColorStop(0,q),gt.addColorStop(1,"#000000"),_.fillStyle=gt,_.fillRect(0,0,G,Q),_.fillStyle=X,_.beginPath(),_.arc(G*.82,Q*.5,Q*.36,0,Math.PI*2),_.fill(),_.fillStyle="#fff6e6",_.font='800 120px "Barlow Condensed", Impact, sans-serif',_.fillText(F,48,170),_.fillStyle=X,_.font='600 46px "Barlow", Arial, sans-serif',_.fillText(U,52,250),_.fillStyle="#ffffff40",_.fillRect(52,290,300,6)}),w=new Yt({map:$,emissive:16777215,emissiveMap:$,emissiveIntensity:0,roughness:.55});return kt.push(w),w});It.forEach(([F,U,X],q)=>{let $=new hn,w=new $t(new sn(14,5.25),pt[q%pt.length]);w.position.y=14;let _=new $t(new pe(14.4,5.6,.3),l);_.position.set(0,14,-.2);let G=new $t(new De(.35,.45,11.5,10),l);G.position.y=5.75,$.add(w,_,G),$.position.set(F,le,U),$.rotation.y=X,mt.push({x:F,z:U,r:.5}),$.traverse(Q=>{Q.isMesh&&(Q.castShadow=!0)}),Xt.add($)}),hs(Xt),s.add(Xt);let Ut="VISTA PAC\xCDFICA",D=new Yt({color:16052714,roughness:.7,side:wn,alphaTest:.5}),ct=new Map,ht=new hn,at=-520;for(let F of Ut){if(F===" "){at+=38;continue}ct.has(F)||ct.set(F,xn(t,128,160,($,w,_)=>{$.clearRect(0,0,w,_),$.fillStyle="#fff",$.font='800 168px "Barlow Condensed", Impact, sans-serif',$.textAlign="center",$.textBaseline="alphabetic",$.fillText(F,w/2,_-8)}));let U=D.clone();U.map=ct.get(F);let X=new $t(new sn(26,33),U),q=qe+330;X.position.set(q,Math.min(Ni(q,at-10),Ni(q,at+10))+15,at),X.rotation.y=-Math.PI/2,X.castShadow=!0,ht.add(X),at+=30}s.add(ht);let j=.7;return{lamps:f,circles:mt,setRealLamps(F){j=F?.3:.7},update(F,U){y.emissiveIntensity=U*4,P.emissiveIntensity=U*2.6,Y.opacity=U*j,rt.uniforms.intensity.value=U*.09;for(let X of kt)X.emissiveIntensity=.05+U*1.1;Ot.uniforms.uState.value.set(Ls(0,F),Ls(1,F))}}}var Vc=class{constructor(t,e){this.renderer=t,this.scene=e,this.size=0,this.target=null,this.camera=null,this.face=0,this.ready=!1,this.materials=[]}attach(t){this.materials=t,this.apply()}setSize(t){if(t!==this.size){if(this.size=t,this.target?.dispose(),this.target=null,this.camera=null,this.ready=!1,this.face=0,t>0){this.target=new Ur(t,{type:Bn,generateMipmaps:!1}),this.camera=new zr(.6,1400,this.target),this.camera.coordinateSystem=this.renderer.coordinateSystem,this.camera.updateCoordinateSystem();for(let e of this.camera.children)e.layers.set(0)}this.apply()}}apply(){let t=this.ready&&this.target?this.target.texture:null;for(let e of this.materials)e.envMap!==t&&(e.envMap=t,e.needsUpdate=!0)}update(t,e,n,i){if(!this.target)return;let r=this.renderer;this.face===0&&this.camera.position.copy(t),this.camera.updateMatrixWorld();let o=this.camera.children[this.face],a=r.getRenderTarget(),c=r.getActiveCubeFace(),h=r.getActiveMipmapLevel(),l=r.xr.enabled;r.xr.enabled=!1;for(let f of e)f.visible=!1;i(()=>{r.setRenderTarget(this.target,this.face),r.render(this.scene,o)});for(let f of e)f.visible=!0;r.setRenderTarget(a,c,h),r.xr.enabled=l,this.face=(this.face+1)%6,this.face===0&&(this.target.texture.needsPMREMUpdate=!0,this.ready||(this.ready=!0,this.apply()));for(let f of this.materials)f.envMapIntensity=n*(f.userData.envBoost||1)}};var Xe=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e],a=(t-n)/(r-n);return a=a*a*(3-2*a),i+(o-i)*a}return s[s.length-1][1]},F_={coupe:{length:4.62,wheelR:.355,wheelW:.27,track:.83,wheels:[.185,.79],body:{top:[[0,.6],[.05,.7],[.18,.8],[.33,.9],[.78,.96],[.92,.95],[1,.82]],bottom:[[0,.33],[.06,.25],[.94,.26],[1,.38]],width:[[0,.76],[.07,.93],[.3,.97],[.74,1],[.93,.96],[1,.84]],exp:3.4,taper:.1},cabin:{from:.31,to:.9,top:[[0,.88],[.3,1.27],[.52,1.29],[.72,1.14],[1,.93]],width:[[0,.8],[.35,.79],[.75,.76],[1,.66]],taper:.3,exp:2.6,roof:[.33,.64]},spoiler:!0,exhaust:[-.42,.42],leather:"#5a3a26",shirt:"#2b3038"},muscle:{length:4.92,wheelR:.37,wheelW:.3,track:.86,wheels:[.17,.8],body:{top:[[0,.72],[.04,.84],[.12,.89],[.4,.93],[.86,.96],[.96,.95],[1,.84]],bottom:[[0,.32],[.05,.26],[.95,.27],[1,.36]],width:[[0,.88],[.05,.96],[.5,.98],[.95,.97],[1,.9]],exp:5.2,taper:.05},cabin:{from:.43,to:.87,top:[[0,.91],[.3,1.31],[.55,1.32],[.86,1.08],[1,.96]],width:[[0,.8],[.5,.8],[1,.73]],taper:.22,exp:3.2,roof:[.3,.6]},scoop:!0,roundLamps:!0,grille:3,plainTail:!0,leather:"#17181b",shirt:"#5b2a22",ducktail:!0,exhaust:[-.56,-.44,.44,.56]},super:{length:4.56,wheelR:.36,wheelW:.32,track:.88,wheels:[.2,.8],body:{top:[[0,.42],[.06,.55],[.2,.66],[.35,.73],[.7,.86],[.9,.88],[1,.8]],bottom:[[0,.16],[.05,.13],[.95,.15],[1,.26]],width:[[0,.8],[.08,.95],[.3,.97],[.7,1.03],[.9,1],[1,.9]],exp:3.6,taper:.14},cabin:{from:.27,to:.72,top:[[0,.62],[.35,1.13],[.55,1.14],[.8,1],[1,.86]],width:[[0,.78],[.4,.74],[1,.62]],taper:.32,exp:2.4,roof:[.38,.62]},wing:!0,leather:"#7a1c16",shirt:"#1d1f24",intakes:!0,exhaust:[-.13,.13]},sedan:{length:4.85,wheelR:.34,wheelW:.24,track:.81,wheels:[.2,.77],body:{top:[[0,.66],[.06,.76],[.25,.86],[.32,.92],[.8,.98],[.94,.96],[1,.86]],bottom:[[0,.36],[.07,.3],[.93,.3],[1,.4]],width:[[0,.78],[.07,.92],[.5,.95],[.93,.93],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.82,top:[[0,.92],[.27,1.43],[.68,1.43],[.88,1.2],[1,.97]],width:[[0,.8],[.4,.82],[1,.76]],taper:.24,exp:2.8,roof:[.28,.72]},grille:3,plainTail:!0},suv:{length:4.75,wheelR:.39,wheelW:.27,track:.85,wheels:[.18,.79],body:{top:[[0,.82],[.06,.97],[.26,1.06],[.33,1.08],[.95,1.1],[1,1.02]],bottom:[[0,.44],[.07,.36],[.93,.37],[1,.46]],width:[[0,.82],[.07,.95],[.5,.98],[.95,.96],[1,.9]],exp:4.5,taper:.06},cabin:{from:.28,to:.98,top:[[0,1.05],[.2,1.72],[.85,1.74],[.97,1.62],[1,1.1]],width:[[0,.86],[.5,.88],[1,.84]],taper:.15,exp:4,roof:[.2,.96]},rails:!0,grille:4,plainTail:!0,cPillar:.8},hatch:{length:4.05,wheelR:.32,wheelW:.22,track:.78,wheels:[.19,.8],body:{top:[[0,.66],[.07,.78],[.28,.88],[.34,.92],[.95,.98],[1,.9]],bottom:[[0,.36],[.08,.3],[.94,.31],[1,.42]],width:[[0,.76],[.08,.89],[.5,.92],[.94,.9],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.97,top:[[0,.92],[.3,1.46],[.82,1.45],[.96,1.32],[1,.98]],width:[[0,.79],[.5,.8],[1,.76]],taper:.2,exp:3.2,roof:[.3,.92]},plainTail:!0,cPillar:.82},pickup:{length:5.4,wheelR:.41,wheelW:.28,track:.88,wheels:[.17,.75],body:{top:[[0,.92],[.05,1.06],[.24,1.14],[.3,1.16],[1,1.16]],bottom:[[0,.5],[.06,.42],[.95,.44],[1,.52]],width:[[0,.86],[.06,.98],[.95,1],[1,.98]],exp:5,taper:.04},cabin:{from:.29,to:.58,top:[[0,1.12],[.3,1.86],[.92,1.88],[1,1.16]],width:[[0,.9],[1,.9]],taper:.12,exp:4.5,roof:[.28,.94]},bed:!0,grille:4,plainTail:!0}};function Wc(s,t,e,n,i,r,o,a,c=null){let h=(t+e)/2,l=(e-t)/2,f=2/n;for(let d=0;d<r;d++){let u=c?c[0]+(c[1]-c[0])*(d/(r-1)):d/r*Math.PI*2,g=Math.cos(u),x=Math.sin(u),m=s*Math.sign(g)*Math.pow(Math.abs(g),f),p=h+l*Math.sign(x)*Math.pow(Math.abs(x),f);m*=1-i*Math.max(0,x),o.push(m,p,a)}}function tf(s,t,{closed:e=!0,caps:n=!0}={}){let i=[],r=[];for(let l of s)i.push(...l);let o=s.length,a=t,c=e?a:a-1;for(let l=0;l<o-1;l++)for(let f=0;f<c;f++){let d=(f+1)%a,u=l*a+f,g=l*a+d,x=(l+1)*a+f,m=(l+1)*a+d;r.push(u,g,x,g,m,x)}if(n&&e)for(let[l,f]of[[0,!0],[o-1,!1]]){let d=i.length/3,u=0,g=0,x=0;for(let p=0;p<a;p++){let y=(l*a+p)*3;u+=i[y],g+=i[y+1],x+=i[y+2]}for(let p=0;p<a;p++){let y=(l*a+p)*3;i.push(i[y],i[y+1],i[y+2])}i.push(u/a,g/a,x/a);let m=d+a;for(let p=0;p<a;p++){let y=(p+1)%a;f?r.push(m,d+y,d+p):r.push(m,d+p,d+y)}}let h=new Je;return h.setAttribute("position",new be(i,3)),h.setIndex(r),h.computeVertexNormals(),h.setAttribute("uv",new be(new Float32Array(i.length/3*2),2)),h}function z_(s,t,e){let n=[];for(let c of s)n.push(...c);let i=[],r=[];for(let c=0;c<s.length-1;c++)for(let h=0;h<t;h++){let l=(h+1)%t,f=c*t+h,d=c*t+l,u=(c+1)*t+h,g=(c+1)*t+l,x=[f,d,u,d,g,u];i.push(...x);let m=e(c,(h<t/2,h));(r[m]||(r[m]=[])).push(...x)}let o=new Je;o.setAttribute("position",new be(n,3)),o.setIndex(i),o.computeVertexNormals();let a=[];for(let c=0;c<3;c++){let h=new Je;h.setAttribute("position",o.attributes.position),h.setAttribute("normal",o.attributes.normal),h.setIndex(r[c]||[]);let l=h.toNonIndexed();l.setAttribute("uv",new be(new Float32Array(l.attributes.position.count*2),2)),a.push(l)}return a}function Ve(s,t,e,n,i,r,o=0,a=0,c=0){let h=new pe(s,t,e);return(o||a||c)&&h.applyMatrix4(new ne().makeRotationFromEuler(new Dn(o,a,c))),h.translate(n,i,r),h}function ef(s,t,e,n,i,r,o,a="y"){let c=new De(s,t,e,n);return a==="x"&&c.rotateZ(Math.PI/2),a==="z"&&c.rotateX(Math.PI/2),c.translate(i,r,o),c}function U_(s,t,e){let n=new I().subVectors(t,s),i=n.length(),r=new De(e,e,i,6);return r.translate(0,i/2,0),r.applyQuaternion(new Ge().setFromUnitVectors(new I(0,1,0),n.normalize())),r.translate(s.x,s.y,s.z),r}var nf=new Map,N_=["coupe","muscle","super"];function qc(s){if(nf.has(s))return nf.get(s);let t=F_[s],e=t.length,n=-e/2,i=q=>n+q*e,r=t.wheels.map(i),o=t.wheelR+.07,a=N_.includes(s),c=a?40:26,h=a?64:40,l=q=>{let $=Xe(t.body.width,q);for(let w of r)$*=1+.03*Math.exp(-(((i(q)-w)/.5)**2));return $},f=(q,$)=>{let w=Xe(t.body.bottom,q),_=Xe(t.body.top,q),G=(w+_)/2,Q=(_-w)/2,gt=2/t.body.exp,ft=Math.sign($-G)*Math.min(1,Math.abs($-G)/Q)**(1/gt);return l(q)*Math.sqrt(Math.max(0,1-ft*ft))**gt*(1-t.body.taper*Math.max(0,ft))},d=q=>(q-n)/e,u=[];for(let q=0;q<=h;q++){let $=q/h,w=i($),_=Xe(t.body.bottom,$);for(let gt of r){let ft=w-gt;Math.abs(ft)<o&&(_=Math.max(_,t.wheelR+Math.sqrt(o*o-ft*ft)*.98))}let G=Xe(t.body.top,$),Q=[];Wc(l($),Math.min(_,G-.08),G,t.body.exp,t.body.taper,c,Q,w),u.push(Q)}let g=[tf(u,c)],x=t.cabin,m=[],p=q=>Xe(x.top,q),y=a?36:20;for(let q=0;q<=y;q++){let $=q/y,w=x.from+$*(x.to-x.from),_=i(w),G=Xe(t.body.top,w)-.06,Q=Math.max(p($),G+.02),gt=Xe(x.width,$),ft=[];Wc(gt,G,Q,x.exp,x.taper,c,ft,_),m.push(ft)}let M=s==="sedan"||s==="suv"||s==="hatch",v=(x.roof[0]+x.roof[1])/2,b=Math.round(c*.1),C=c/2-b,L=(q,$)=>q>=b-$&&q<b||q>=C&&q<C+$,P=z_(m,c,(q,$)=>{let w=(q+.5)/y,_=w>=x.roof[0]&&w<=x.roof[1];return $>=b&&$<C?_?1:0:w<x.roof[0]?L($,1)?1:0:w>x.roof[1]?L($,a?2:1)?1:0:L($,1)?1:Math.abs(w-v)<.62/y?2:t.cPillar&&Math.abs(w-t.cPillar)<.62/y?1:0}),T=[P[0]];g.push(P[1]);let S=(q,$)=>{let w=q.index?q.toNonIndexed():q,_=new Ht($),G=w.attributes.position.count,Q=new Float32Array(G*3);for(let gt=0;gt<G;gt++)Q[gt*3]=_.r,Q[gt*3+1]=_.g,Q[gt*3+2]=_.b;return w.setAttribute("color",new vn(Q,3)),w.attributes.uv||w.setAttribute("uv",new be(new Float32Array(G*2),2)),w},N=[];if(a){let q=[],$=[];for(let de=0;de<=y;de++){let Z=de/y,Pt=x.from+Z*(x.to-x.from),Gt=i(Pt),te=Xe(t.body.top,Pt),Rt=Xe(x.width,Z),yt=[];if(Wc(Rt*.97,te-.03,Math.min(te+.035,Math.max(p(Z)-.01,te-.01)),4,0,16,yt,Gt),q.push(yt),Z>=x.roof[0]-.03&&Z<=x.roof[1]+.03){let ae=[];Wc(Rt*.985,te-.06,Math.max(p(Z),te)-.004,x.exp,x.taper,12,ae,Gt,[.24*Math.PI,.76*Math.PI]),$.push(ae)}}N.push(S(tf(q,16),"#0c0d0f")),$.length>1&&N.push(S(tf($,12,{closed:!1,caps:!1}),"#17181b"));let w=t.leather||"#1b1c20",_=x.roof[0]+.1,G=x.from+_*(x.to-x.from),Q=i(G),gt=Xe(t.body.top,G),ft=p(_),Kt=Math.min(ft-.19,gt+.26),Et=Xe(x.width,_)*.47;for(let de of[-1,1])N.push(S(Ve(.46,Kt-gt+.12,.13,de*Et,(Kt+gt)/2-.06,Q+.2,-.12),w)),N.push(S(Ve(.24,.17,.09,de*Et,Kt+.06,Q+.2),w));let Zt=x.from+.2*(x.to-x.from),ie=i(Zt),St=Xe(t.body.top,Zt);N.push(S(Ve(Xe(x.width,.2)*1.7,.07,.24,0,St+.005,ie+.04),"#101114")),N.push(S(Ve(.3,.05,.12,-Et,St+.05,ie+.1,.25),"#0b0b0d"));let Jt=new ns(.17,.016,8,24);Jt.rotateX(-.42),Jt.translate(-Et,St+.07,ie+.32),N.push(S(Jt,"#050506")),N.push(S(Ve(.3,.025,.03,-Et,St+.07,ie+.32,-.42),"#0a0a0b")),N.push(S(Ve(.42,.3,.2,-Et,Kt-.3,Q+.08,-.1),t.shirt||"#23272e"));let he=new De(.05,.055,.1,8);he.translate(-Et,Kt-.12,Q+.07),N.push(S(he,"#b98562"));let ue=new zn(.108,14,10);ue.scale(.92,1.08,1),ue.translate(-Et,Kt,Q+.06),N.push(S(ue,"#c08a66"));let qt=new zn(.114,14,8,0,Math.PI*2,0,Math.PI*.52);qt.scale(.94,1.08,1.02),qt.translate(-Et,Kt+.012,Q+.075),N.push(S(qt,"#1a1410"));for(let de of[-1,1]){let Z=new I(-Et+de*.2,Kt-.22,Q+.04),Pt=new I(-Et+de*.15,St+.1,ie+.33);N.push(S(U_(Z,Pt,.045),t.shirt||"#23272e"))}}let Y=[],B=[],O=[],k=[],V=[],rt=(q,$,w)=>{let _=x.from+q*(x.to-x.from),G=Xe(t.body.top,_)-.02,Q=p(q),gt=Xe(x.width,q)*(1-x.taper*(w?.92:0))*.97;return new I($*gt,w?Q-.02:G,i(_))};Y.push(P[2]);for(let q of[-1,1]){let $=rt(.1,q,!1);g.push(Ve(.16,.1,.12,$.x+q*.14,$.y+.06,$.z)),Y.push(Ve(.1,.025,.04,$.x+q*.05,$.y+.03,$.z)),B.push(Ve(.13,.075,.008,$.x+q*.14,$.y+.06,$.z+.062))}{let q=x.from+.035*(x.to-x.from),$=Xe(t.body.top,q)+.012,w=i(q);for(let[_,G,Q]of[[-.2,.52,.1],[.3,.46,.1]])V.push(Ve(G,.012,.022,_,$,w,0,Q,0))}let J=(x.roof[0]+x.roof[1])/2,z=i(x.from+J*(x.to-x.from)),At=r[0]+o+.14,Ct=M?[At,z,r[1]-o-.04]:[At,Math.min(z+.42,r[1]-o-.05),99],Wt=Xe(t.body.bottom,.5)+.1,zt=q=>{let $=d(q-.16),w=Xe(t.body.top,$)-.12;for(let _ of[-1,1])B.push(Ve(.022,.028,.15,_*(f($,w)+.006),w,q-.16))};zt(Ct[1]),M&&zt(Ct[2]);let Ot=i(x.from)-.07,me=l(.15)*.78,mt=!M&&!t.bed&&!t.wing||s==="sedan"?i(x.to)+.07:99,wt={a:new Ze(Ct[0],Ct[1],Ct[2],Wt),b:new Ze(Ot,mt,me,t.intakes?1:0)},It=q=>Xe(t.body.width,q),kt=(Xe(t.body.bottom,.02)+Xe(t.body.top,.02))/2,Xt=Xe(t.body.top,.02),pt=[],Ut=[],D=(q,$,w,_,G,Q=a?18:10)=>ef(q,q,$,Q,w,_,G,"z");for(let q of[-1,1]){let $=q*It(.02)*.62,w=kt+(Xt-kt)*.45,_=q*.32;if(V.push(Ve(.46,.115,.06,$,w,n+.045,0,_,0)),t.roundLamps)for(let G of[-.105,.105])B.push(D(.062,.03,$+G,w,n+.022+Math.abs(G-q*.1)*.12)),O.push(D(.05,.034,$+G,w,n+.018+Math.abs(G-q*.1)*.12));else{O.push(Ve(.38,.05,.05,$,w-.004,n+.03,0,_,0));for(let G of[-.1,.07])O.push(D(.036,.03,$+G,w-.004,n+.012+(q*G>0?.035:0)));O.push(Ve(.34,.014,.03,$,w+.058,n+.04,0,_,0))}Ut.push(Ve(.07,.035,.05,q*It(.03)*.93,w-.01,n+.12,0,q*.9,0))}let ct=Xe(t.body.bottom,.02)+.17;if(V.push(Ve(It(.03)*1.05,.18,.12,0,ct,n+.06)),t.grille)for(let q=0;q<t.grille;q++)B.push(Ve(It(.03)*.98,.012,.02,0,ct-.06+q*.12/Math.max(t.grille-1,1),n-.002));Y.push(Ve(It(.03)*1.7,.04,.22,0,Xe(t.body.bottom,.02)+.02,n+.1));let ht=Xe(t.body.top,.97);t.plainTail||k.push(Ve(It(.98)*1.72,.05,.06,0,ht-.08,-n-.02));for(let q of[-1,1]){let $=q*It(.98)*.68;k.push(Ve(.36,t.plainTail?.15:.11,.06,$,ht-.12,-n-.03)),pt.push(Ve(.09,.05,.06,$-q*.24,ht-(t.plainTail?.16:.13),-n-.026)),Ut.push(Ve(.08,.05,.06,$+q*.2,ht-(t.plainTail?.16:.13),-n-.034))}{let q=rt(Math.min(x.roof[1]+.02,.97),0,!0);k.push(Ve(.3,.018,.03,0,q.y-.02,q.z+.03))}V.push(Ve(It(.98)*1.5,.16,.1,0,Xe(t.body.bottom,.98)+.06,-n-.05));let at=Xe(t.body.bottom,.98)+.03,j=(t.exhaust||[-.42,.42]).map(q=>new I(q,at,-n+.06));for(let q of j)B.push(ef(.05,.05,.14,12,q.x,q.y,-n+.02,"z")),V.push(ef(.04,.04,.02,10,q.x,q.y,-n+.085,"z"));(M||s==="coupe")&&V.push(Ve(.035,.05,.16,0,p(x.roof[1]-.06)+.03,i(x.from+(x.roof[1]-.06)*(x.to-x.from)),-.25));for(let q of[-1,1]){let $=r[1]-r[0]-o*2;Y.push(Ve(.06,.08,$,q*It(.5)*.99,Xe(t.body.bottom,.5)+.03,(r[0]+r[1])/2))}if(t.spoiler&&g.push(Ve(It(.96)*1.5,.022,.12,0,Xe(t.body.top,.96)+.012,i(.965),-.2)),t.ducktail&&g.push(Ve(It(.95)*1.78,.05,.2,0,Xe(t.body.top,.95)+.03,i(.955),.28)),t.scoop){let q=Xe(t.body.top,.22);g.push(Ve(.56,.09,.7,0,q+.035,i(.23),.04)),V.push(Ve(.46,.05,.03,0,q+.05,i(.23)-.35))}if(t.wing){let q=Xe(t.body.top,.93),$=i(.95);for(let w of[-1,1])Y.push(Ve(.04,.3,.16,w*.42,q+.14,$,.25));Y.push(Ve(It(.95)*1.86,.035,.34,0,q+.3,$+.02,-.12));for(let w of[-1,1])Y.push(Ve(.03,.14,.38,w*It(.95)*.93,q+.29,$+.02))}if(t.intakes){for(let q of[-1,1]){let w=(Xe(t.body.bottom,.66)+Xe(t.body.top,.66))/2;V.push(Ve(.05,.2,.52,q*It(.66)*.985,w,i(.66),0,q*.14,0))}V.push(Ve(It(.03)*1.8,.03,.3,0,Xe(t.body.bottom,.02)+.01,n+.12))}if(t.rails)for(let q of[-1,1])Y.push(Ve(.05,.05,e*.5,q*.62,Xe(x.top,.6)+.04,i(.62)));if(t.bed){let q=i(x.to+.01),$=-n-.05,w=Xe(t.body.top,.8);V.push(Ve(It(.8)*1.86,.04,$-q,0,w-.02,(q+$)/2));for(let _ of[-1,1])g.push(Ve(.08,.4,$-q,_*It(.8)*.96,w+.2,(q+$)/2));g.push(Ve(It(.8)*1.9,.4,.08,0,w+.2,$))}let F=[Ve(.52,.12,.01,0,Xe(t.body.bottom,.99)+.24,-n+.005),Ve(.52,.12,.01,0,Xe(t.body.bottom,.01)+.28,n-.005)],U=q=>rn(q.map($=>$.index?$.toNonIndexed():$).map($=>($.attributes.uv||$.setAttribute("uv",new be(new Float32Array($.attributes.position.count*2),2)),$))),X={type:t,parts:{paint:U(g),glass:U(T),trim:U(Y),dark:U(V),chrome:U(B),head:U(O),tail:U(k),plate:U(F),rev:U(pt),amber:U(Ut),...a?{interior:rn(N)}:{}},seams:wt,wheels:[],wheel:O_(t.wheelR,t.wheelW,!a),exhausts:j};for(let q of r)for(let $ of[-1,1])X.wheels.push({x:$*t.track,y:t.wheelR,z:q,side:$,front:q<0});return nf.set(s,X),X}function O_(s,t,e=!1){let n=s*.69,i=e?[[n,-t/2+.01],[s*.95,-t/2+.01],[s,-t/2+.06],[s,t/2-.06],[s*.95,t/2-.01],[n,t/2-.01]]:[[n,-t/2+.01],[s*.86,-t/2-.004],[s*.97,-t/2+.025],[s,-t/2+.06],[s,t/2-.06],[s*.97,t/2-.025],[s*.86,t/2+.004],[n,t/2-.01]],r=new $o(i.map(([g,x])=>new Tt(g,x)),e?14:30);r.rotateZ(Math.PI/2);let o=[],a=new De(n,n,t-.03,e?10:24,1,!0);if(a.rotateZ(Math.PI/2),o.push(a),!e){let g=new ns(n-.008,.014,6,32);g.rotateY(Math.PI/2),g.translate(t/2-.03,0,0),o.push(g)}let c=t/2-.05,h=e?5:10;for(let g=0;g<h;g++){let x=g/h*Math.PI*2+(e?0:g%2*.12),m=new pe(.035,n-.05,.045);m.translate(0,(n-.05)/2+.05,0),m.rotateX(x),m.translate(c,0,0),o.push(m)}let l=new De(.07,.08,.05,e?6:12);if(l.rotateZ(Math.PI/2),l.translate(c+.01,0,0),o.push(l),!e){for(let x=0;x<5;x++){let m=x/5*Math.PI*2,p=new De(.011,.011,.02,6);p.rotateZ(Math.PI/2),p.translate(c+.04,Math.cos(m)*.048,Math.sin(m)*.048),o.push(p)}let g=new De(.028,.032,.02,12);g.rotateZ(Math.PI/2),g.translate(c+.042,0,0),o.push(g)}let f=rn(o.map(g=>g.index?g.toNonIndexed():g)),d=new De(n*.82,n*.82,.03,e?10:24);d.rotateZ(Math.PI/2),d.translate(c-.06,0,0);let u=new pe(.07,.16,.12);return u.translate(c-.03,n*.55,.07),{tire:r,rim:f,disc:d,caliper:u}}function B_(s,t="PCFC 7X"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.fillStyle="#e9e6da",n.fillRect(0,0,256,64),n.fillStyle="#1e3b78",n.font="700 14px Arial",n.textAlign="center",n.fillText("VISTA PAC\xCDFICA",128,16),n.fillStyle="#7a1f1f",n.font='700 34px "Barlow Condensed", Impact, monospace',n.fillText(t,128,52);let i=new Ys(e);return i.colorSpace=Zn,i}function ya(s,t={}){let{seams:e=null,twoTone:n=null,...i}=t,r=new $s({color:s,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.1,...i}),o={uSeamA:{value:e?e.a:new Ze(99,99,99,0)},uSeamB:{value:e?e.b:new Ze(99,99,0,0)}};return r.userData.seamUniforms=o,r.onBeforeCompile=a=>{Object.assign(a.uniforms,o),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)},r.customProgramCacheKey=()=>"car-paint"+(n?"-two":""),r}function Qp(s){let t=new Yt({color:1316118,roughness:.92,metalness:0}),[e,n]=s?[.4,.6]:[3/7,4/7];return t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
roughnessFactor = mix(roughnessFactor, 1.0, paTread);`)},t.customProgramCacheKey=()=>"car-tyre"+(s?"-lite":""),t}var Xc=null;function lo(s){if(Xc)return Xc;let t=B_(s);return Xc={glass:new $s({color:791061,metalness:.1,roughness:.04,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4}),glassClear:new $s({color:725782,metalness:0,roughness:.03,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.8,transparent:!0,opacity:.8}),interior:new Yt({vertexColors:!0,roughness:.82,metalness:0,side:wn}),trim:new Yt({color:1316890,roughness:.45,metalness:.4}),dark:new Yt({color:461066,roughness:.6,metalness:.2}),chrome:new Yt({color:14212319,roughness:.12,metalness:1}),plate:new Yt({map:t,roughness:.5}),tire:Qp(!1),tireLite:Qp(!0),rim:new Yt({color:12172994,roughness:.22,metalness:1}),disc:new Yt({color:6053472,roughness:.4,metalness:.9}),caliper:new Yt({color:12728866,roughness:.4,metalness:.3})},Xc}var t0=ke.damp,En=ke.clamp,fr={coupe:{name:"CALDERA GT",model:"coupe",blurb:"Grand tourer \xB7 450 hp V8, rear drive, balanced",stats:{speed:.8,accel:.72,grip:.76},spec:"450 HP \xB7 1,580 KG \xB7 305 KM/H",mass:1580,front:.52,cgH:.47,drive:"rwd",torque:[[900,360],[2500,480],[4500,520],[6200,500],[6900,468],[7400,405]],idle:900,redline:7400,gears:[3.31,2.13,1.55,1.19,.97,.79],final:3.7,eff:.88,shift:.2,cdA:.7,clA:.3,aeroFront:.45,mu:1.1,rollFront:.57,brakeBias:.63,brakeG:1.3,steerLock:.6,roll:.0065,rollMax:.09,pitch:.0028,nitro:.45,engine:"v8"},muscle:{name:"VANTA SS",model:"muscle",blurb:"Muscle car \xB7 465 hp big-block, huge torque, loose tail",stats:{speed:.74,accel:.74,grip:.5},spec:"465 HP \xB7 1,760 KG \xB7 290 KM/H",mass:1760,front:.54,cgH:.53,drive:"rwd",torque:[[750,500],[2e3,610],[3800,650],[5e3,622],[5800,570],[6400,495]],idle:750,redline:6400,gears:[2.66,1.78,1.3,1,.74],final:3.73,eff:.85,shift:.28,cdA:.92,clA:.05,aeroFront:.5,mu:1.04,rollFront:.52,brakeBias:.66,brakeG:1.15,steerLock:.58,roll:.0095,rollMax:.12,pitch:.0042,nitro:.5,engine:"bigblock"},super:{name:"VENTUS R",model:"super",blurb:"Mid-engine supercar \xB7 640 hp V10, track grip",stats:{speed:.97,accel:.95,grip:.96},spec:"640 HP \xB7 1,420 KG \xB7 345 KM/H",mass:1420,front:.42,cgH:.41,drive:"rwd",torque:[[1100,370],[3e3,500],[5e3,580],[6800,600],[8200,555],[8800,495]],idle:1100,redline:8800,gears:[3.13,2.19,1.63,1.29,1.03,.84,.69],final:3.9,eff:.9,shift:.09,cdA:.78,clA:1.15,aeroFront:.4,mu:1.22,rollFront:.6,brakeBias:.58,brakeG:1.5,steerLock:.56,roll:.0035,rollMax:.05,pitch:.0018,nitro:.4,engine:"v10"}},Ma=["coupe","muscle","super"],_a={easy:{label:"EASY HANDLING",abs:!0,tc:1,esc:!0,grip:1.16,steerMargin:.06,counter:.85,align:!0,wet:.35},sport:{label:"SPORT HANDLING",abs:!0,tc:.55,esc:!1,grip:1,steerMargin:.1,counter:.55,align:!1,wet:1},sim:{label:"SIMULATION HANDLING",abs:!1,tc:0,esc:!1,grip:1,steerMargin:.15,counter:.25,align:!1,wet:1}},Fs=9.81,k_=1.2,sf={road:[1,.013],curb:[.9,.02],grass:[.55,.09],sand:[.45,.24]};function H_(s,t){let e=s.torque;if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++)if(t<=e[n][0])return e[n-1][1]+(e[n][1]-e[n-1][1])*(t-e[n-1][0])/(e[n][0]-e[n-1][0]);return e[e.length-1][1]}function e0(s){let i=9.5*s;return Math.sin(1.45*Math.atan(i-.25*(i-Math.atan(i))))}function G_(s,t,e){let n=Math.sin(s*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function V_(s){let t=s.attributes.position.array,e=s.attributes.normal.array,n=[[[],[]],[[],[]]];for(let i=0;i<t.length;i+=9){let r=t[i]+t[i+3]+t[i+6]<0?0:1;for(let o=0;o<9;o++)n[r][0].push(t[i+o]),n[r][1].push(e[i+o])}return n.map(([i,r])=>{let o=new Je;return o.setAttribute("position",new be(i,3)),o.setAttribute("normal",new be(r,3)),o})}var Yc=class{constructor(t,e,n="coupe"){this.mode="easy",this.aids=_a.easy,this.mats=lo(e),this.paint=ya("#df6339"),this.group=new hn,this.body=new hn,this.group.add(this.body),this.lightMats={head:[],tail:[],amber:[]};for(let r=0;r<2;r++)this.lightMats.head.push(new Yt({color:16777215,emissive:16774364,emissiveIntensity:2,roughness:.2})),this.lightMats.tail.push(new Yt({color:4196358,emissive:16720914,emissiveIntensity:1.5,roughness:.3})),this.lightMats.amber.push(new Yt({color:7027208,emissive:16747028,emissiveIntensity:0,roughness:.3}));this.revMat=new Yt({color:12105906,emissive:16777215,emissiveIntensity:0,roughness:.25}),this.signal={side:0,hold:0,hazard:0,clock:0},this.spots=[];for(let r of[-1,1]){let o=new Qo(16773592,0,70,.42,.55,1.4);this.group.add(o,o.target),this.spots.push(o)}let i=new De(.12,3.2,16,16,1,!0);i.translate(0,-8,0),i.rotateX(-Math.PI/2+.06),this.beamMat=va(16773328),this.beams=[];for(let r=0;r<2;r++){let o=new Be(i,this.beamMat,1);o.userData.noAO=!0,o.layers.set(1),o.frustumCulled=!1,this.group.add(o),this.beams.push(o)}t.add(this.group),this.setModel(n),this.reset(0,0,0)}setModel(t){fr[t]||(t="coupe"),this.key=t,this.def=fr[t];for(let c of[...this.body.children])this.body.remove(c),c.geometry.dispose();for(let c of this.wheels||[])this.group.remove(c.pivot);let e=qc(this.def.model);this.dims=e.type;{let c=this.def,h=(e.type.wheels[1]-e.type.wheels[0])*e.type.length;this.chassis={L:h,a:h*(1-c.front),b:h*c.front,track:e.type.track*2,R:e.type.wheelR,Iz:c.mass*h*(1-c.front)*h*c.front*1.05,Fz0:c.mass*Fs/4,peakTorque:Math.max(...c.torque.map(l=>l[1]))}}this.exhausts=e.exhausts.map(c=>c.clone());let n=this.mats,i={paint:this.paint,glass:n.glassClear,trim:n.trim,dark:n.dark,chrome:n.chrome,plate:n.plate,rev:this.revMat,interior:n.interior};this.paint.userData.seamUniforms.uSeamA.value=e.seams.a,this.paint.userData.seamUniforms.uSeamB.value=e.seams.b,this.deformables=[];let r=c=>{let h={geo:c,basePos:Float32Array.from(c.attributes.position.array),baseNormal:Float32Array.from(c.attributes.normal.array),weight:new Float32Array(c.attributes.position.count)};return this.deformables.push(h),h};for(let[c,h]of Object.entries(e.parts)){if(c==="head"||c==="tail"||c==="amber"){V_(h).forEach((d,u)=>{let g=new $t(d,this.lightMats[c][u]);g.userData.own=!0,this.body.add(g),r(d)});continue}let l=new $t(h.clone(),i[c]);l.userData.own=!0,l.castShadow=c!=="interior",l.receiveShadow=!0,c==="glass"&&(l.renderOrder=4),c==="interior"&&l.layers.set(1),this.body.add(l);let f=r(l.geometry);c==="paint"&&(this.shell=f.geo,this.basePos=f.basePos)}this.wheels=e.wheels.map(c=>{let h=new hn;h.position.set(c.x,c.y,c.z);let l=new hn;c.side<0&&(l.rotation.y=Math.PI),h.add(l);let f=new hn;l.add(f);for(let[d,u]of[["tire",n.tire],["rim",n.rim],["disc",n.disc]]){let g=new $t(e.wheel[d],u);g.castShadow=!0,f.add(g)}return l.add(new $t(e.wheel.caliper,n.caliper)),this.group.add(h),{...c,pivot:h,spin:f,mount:l,compress:0}});let o=-this.dims.length/2,a=this.key==="super"?.55:.72;this.spots.forEach((c,h)=>{let l=h?1:-1;c.position.set(l*.62,a,o+.15),c.target.position.set(l*1.6,-.6,o-20)}),this.beams.forEach((c,h)=>{c.setMatrixAt(0,new ne().makeTranslation((h?1:-1)*.62,a,o)),c.instanceMatrix.needsUpdate=!0}),this.repair()}get assist(){return this.mode==="easy"}set assist(t){this.setHandling(t?"easy":"sport")}setHandling(t){this.mode=_a[t]?t:"easy",this.aids=_a[this.mode]}setColor(t){this.paint.color.set(t)}reset(t,e,n){this.repair(),this.x=t,this.z=e,this.y=this.groundAt(t,e,0),this.heading=n,this.vx=0,this.vz=0,this.yawRate=0,this.steer=0,this.wheelAngle=0,this.ax=0,this.ay=0,this.lock=0,this.escActive=!1,this.handbrakeTimer=0,this.shiftHold=0,this.pedal=0,this.gear=1,this.rpm=this.def.idle,this.shiftTimer=0,this.nitro=100,this.boosting=!1,this.throttle=0,this.brake=0,this.handbrake=!1,this.slip=0,this.wheelspin=0,this.impact=0,this.contact=null,this.scrape=null,this.pendingHit=null,this.dentCooldown=0,this.pitch=0,this.roll=0,this.pitchVel=0,this.rollVel=0,this.heave=0,this.heaveVel=0,this.wheelAngle=0,this.surface="road",this.prevLong=0,this.distance=0,this.sync()}get speed(){return this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading)}get kmh(){return Math.abs(this.speed)*3.6}groundAt(t,e,n){let i=Is(t,e),r=bp(t);if(i!==null&&(n>i-1.2||t>rr(t,e).x0))return i;let o=da(t,e);return o==="curb"||o==="grass"?r+le:r}update(t,e,n){let i=this.def,r=this.chassis,o=this.aids,a=this.x,c=this.z;this.surface=da(this.x,this.z);let h=Is(this.x,this.z)!==null&&this.y>1,l=h?sf.curb:sf[this.surface]||sf.road,f=this.surface==="sand"&&!h?1:this.surface==="grass"?.5:0,d=this.surface==="road"?(n.wetness||0)*.22*o.wet:0,u=i.mu*l[0]*o.grip*(1-d);this.throttle=e.throttle,this.brake=e.brake,this.handbrake=e.handbrake;let g=-Math.sin(this.heading),x=-Math.cos(this.heading),m=this.vx*g+this.vz*x,p=Math.abs(m);this.gear===-1?m>-.6&&e.throttle>0&&e.brake===0&&(this.gear=1):m<.6&&e.brake>0&&e.throttle===0?this.gear=-1:m<-1.5&&(this.gear=-1);let y=this.gear===-1,M=y?e.brake:e.throttle;this.pedal+=En(M-this.pedal,-7*t,(this.pedal<.35?5:2.4)*t),this.pedal<.001&&(this.pedal=0);let v=this.pedal,b=y?e.throttle:e.brake;this.boosting=e.nitro&&e.throttle>0&&this.nitro>1&&m>3&&!y,this.nitro=En(this.nitro+(this.boosting?-22:9)*t,0,100);let C=i.gears,L=(y?C[0]*1.05:C[this.gear-1])*i.final,P=p/r.R*(30/Math.PI),T=P*L;if(this.shiftHold-=t,this.shiftTimer>0)this.shiftTimer-=t;else if(!y&&this.shiftHold<=0){let ct=i.redline*(.5+.47*v),ht=i.redline*(.2+.14*v),at=this.gear>1?P*C[this.gear-2]*i.final:1/0;T>ct&&this.gear<C.length?(this.gear++,this.shiftTimer=i.shift,this.shiftHold=i.shift+.5,this.onShift?.(1)):this.gear>1&&(T<ht||v>.9&&at<i.redline*.78)&&(this.gear--,this.shiftTimer=i.shift*.7,this.shiftHold=i.shift+.7,this.onShift?.(-1))}let S=i.idle+(i.redline*.44-i.idle)*v,N=T<S,Y=En(Math.max(T,S),i.idle,i.redline);this.rpm=t0(this.rpm,this.shiftTimer>0?Y*.84:Y,N?7:16,t);let B=0;this.shiftTimer<=0&&(v>0&&this.rpm<i.redline-40?B=H_(i,this.rpm)*v*(this.boosting?1+i.nitro:1)*L*i.eff/r.R:v===0&&p>2&&(B=-r.peakTorque*.1*(this.rpm/i.redline)*L/r.R)),y&&(B=-B);let O=b*i.brakeG*i.mass*Fs,k=-Math.cos(this.heading),V=Math.sin(this.heading),rt=m,J=this.vx*k+this.vz*V,z=Math.hypot(rt,J),At=Math.atan(r.L*u*Fs/Math.max(z*z,1)),Ct=Math.min(i.steerLock,At+o.steerMargin+.085+.12*o.counter),Wt=rt>4?En(Math.atan2(J-r.b*this.yawRate,rt),-.55,.55)*o.counter:0,zt=En(e.steer*Ct+Wt,-i.steerLock,i.steerLock),me=(Math.abs(zt)>Math.abs(this.wheelAngle)?1.5:2.6)*(.55+.45*Math.min(1,Math.abs(zt-this.wheelAngle)/.12))+(rt>4?Math.abs(Wt)*3:0);this.wheelAngle+=En(zt-this.wheelAngle,-me*t,me*t),this.steer=this.wheelAngle/i.steerLock,this.handbrake?this.handbrakeTimer=.7:this.handbrakeTimer-=t;let mt=t/2,wt=0,It=0,kt=0;this.escActive=!1;for(let ct=0;ct<2;ct++){let ht=Math.sin(this.heading),at=Math.cos(this.heading),j=-this.vx*ht-this.vz*at,F=-this.vx*at+this.vz*ht,U=this.yawRate,X=this.wheelAngle,q=Math.cos(X),$=Math.sin(X),w=.5*k_*j*j,_=w*i.clA,G=i.mass*this.ax*i.cgH/r.L,Q=Math.max(i.mass*Fs*r.b/r.L+_*i.aeroFront-G,0),gt=Math.max(i.mass*Fs*r.a/r.L+_*(1-i.aeroFront)+G,0),ft=i.mass*this.ay*i.cgH/r.track,Kt=(_e,Dt)=>{let Ee=En(ft*Dt,-_e/2,_e/2),E=_e/2-Ee,H=_e/2+Ee;return u*(E*(1-.13*(E/r.Fz0-1))+H*(1-.13*(H/r.Fz0-1)))},Et=Math.max(Kt(Q,i.rollFront),1),Zt=Math.max(Kt(gt,1-i.rollFront),1),ie=F+r.a*U,St=F-r.b*U,Jt=j*q+ie*$,he=-j*$+ie*q,ue=-Math.atan2(he,Math.max(Math.abs(Jt),1.5)),qt=-Math.atan2(St,Math.max(Math.abs(j),1.5)),de=e0(ue)*Et,Z=e0(qt)*Zt,Pt=j>.05?1:j<-.05?-1:0,Gt=O*i.brakeBias,te=O*(1-i.brakeBias),Rt=0,yt=0,ae=!1,Te=this.handbrake,Ke=(_e,Dt)=>_e*Math.sqrt(Math.max(.04,1-Math.min(1,(Dt/_e)**2*.85)));o.abs?(Gt=Math.min(Gt,Ke(Et,de)*.97),te=Math.min(te,Ke(Zt,Z)*.97)):(ae=Gt>Et*1.02,Te=Te||te>Zt*1.02);let R=B,W=Math.max(0,Math.abs(R)/Zt-1);if(o.tc){let _e=Zt*.95+(Ke(Zt,Z)-Zt*.95)*o.tc;R=En(R,-_e,_e)}if(Rt=-Pt*Gt,yt=En(R-Pt*te,-Zt*.95,Zt*.95),ae){let _e=Math.hypot(Jt,he);_e>.3?(Rt=-Et*.82*Jt/_e,de=-Et*.82*he/_e):(Rt=0,de*=.3)}else de=Math.sign(de)*Math.min(Math.abs(de),Et*Math.sqrt(Math.max(0,1-(Rt/Et)**2)));if(Te){let _e=Math.hypot(j,St);_e>.3?(yt=-Zt*.8*j/_e,Z=-Zt*.8*St/_e):(yt=0,Z*=.3)}else Z=Math.sign(Z)*Math.min(Math.abs(Z),Zt*Math.sqrt(Math.max(0,1-(yt/Zt)**2)));let it=0;if(o.esc&&this.handbrakeTimer<=0&&j>7){let _e=Math.atan2(F,j),Dt=En(j*Math.tan(X)/(r.L*(1+.0022*j*j)),-u*Fs/j,u*Fs/j),Ee=U-Dt;(Math.abs(Ee)>.07||Math.abs(_e)>.09)&&(it=r.Iz*En(-Ee*6.5+_e*5,-3.2,3.2),j-=Math.min(Math.abs(Ee)+Math.abs(_e),.6)*2.2*mt,this.escActive=!0)}let K=w*i.cdA*Math.sign(j),nt=i.mass*Math.abs(j)/mt,tt=Math.sign(j)*Math.min(l[1]*i.mass*Fs,nt),_t=Rt*q-de*$+yt-K-tt,ot=Rt*$+de*q+Z;it+=r.a*(Rt*$+de*q)-r.b*Z;let vt=_t/i.mass,xt=ot/i.mass,dt=j;j+=(vt+F*U)*mt,F+=(xt-dt*U)*mt,U+=it/r.Iz*mt,(b>0||this.handbrake)&&v===0&&dt*j<0&&(j=0),v===0&&b===0&&Math.abs(j)<.06&&Math.abs(F)<.06&&(j=0,F=0);let Nt=1-ke.smoothstep(Math.hypot(j,F),1.2,5);if(Nt>0){let _e=j*Math.tan(X)/r.L,Dt=Nt*(1-Math.exp(-mt*28));U+=(_e-U)*Dt,F+=(r.b*_e-F)*Dt}y&&(j=Math.max(j,-16));let Bt=1-Math.exp(-mt*11);this.ax+=(vt-this.ax)*Bt,this.ay+=(xt-this.ay)*Bt,this.yawRate=U,this.heading+=U*mt;let ee=Math.sin(this.heading),Re=Math.cos(this.heading);this.vx=-ee*j-Re*F,this.vz=-Re*j+ee*F,this.x+=this.vx*mt,this.z+=this.vz*mt,wt+=W,It+=(ae||Te)&&Math.abs(j)>2?1:0;let Ae=_e=>ke.smoothstep(Math.abs(_e),.1,.22);kt+=Math.max(Math.abs(St)*Ae(qt),Math.abs(he)*.7*Ae(ue))}if(this.wheelspin=En(wt*.5*(1.2-.6*o.tc),0,1)*(p<45?1:0),this.lock=It/2,this.slip=kt/2,o.align&&Math.abs(e.steer)<.05&&Math.abs(this.wheelAngle)<.05&&p>5&&!this.handbrake&&this.surface==="road"){let ct=Math.PI/2,ht=this.heading-Math.round(this.heading/ct)*ct;if(Math.abs(ht)<.3){let at=ht*Math.min(1,1.6*t);this.heading-=at;let j=Math.cos(-at),F=Math.sin(-at),U=this.vx*j+this.vz*F,X=-this.vx*F+this.vz*j;this.vx=U,this.vz=X}}this.impact=0,this.collide(n,a,c),this.distance+=Math.hypot(this.x-a,this.z-c),this.dentCooldown-=t;let Xt=this.groundAt(this.x,this.z,this.y);Xt-this.y>.08&&Xt-this.y<.3&&(this.heaveVel-=(Xt-this.y)*9),this.y-Xt>.08&&this.y-Xt<.3&&(this.heaveVel+=(this.y-Xt)*5),this.y=t0(this.y,Xt,Xt>this.y?22:9,t);let pt=this.slopeAt(),Ut=f*Math.min(p/12,1)*.012;this.spring("pitch",En(this.ax*i.pitch,-i.rollMax*.75,i.rollMax*.55)+pt+(Math.random()-.5)*Ut,70,9,t),this.spring("roll",En(this.ay*i.roll,-i.rollMax,i.rollMax)+(Math.random()-.5)*Ut,60,7,t),this.spring("heave",0,90,10,t),this.sync();let D=this.speed;for(let ct of this.wheels){let ht=ct.front?this.lock&&!this.handbrake?.15:1:this.handbrake||this.lock?.05:1+this.wheelspin*2.5,at=ct.front||this.wheelspin<.05?D:Math.max(Math.abs(D),6*this.wheelspin)*(y?-1:1);ct.spin.rotation.x-=at*ht*t/r.R*(ct.side<0?-1:1),ct.front&&(ct.pivot.rotation.y=this.wheelAngle)}}slopeAt(){let t=rr(this.x,this.z);return t&&this.x>t.x0&&this.y>.2?Math.atan2(t.deckY-le,t.rampStart-t.x0)*Math.sin(this.heading):0}spring(t,e,n,i,r){let o=t+"Vel",a=(e-this[t])*n-this[o]*i;this[o]+=a*r,this[t]+=this[o]*r}sync(){this.group.position.set(this.x,this.y+this.heave*.4,this.z),this.group.rotation.set(0,this.heading,0),this.body.rotation.set(this.pitch,0,-this.roll),this.body.position.y=this.heave*.3;for(let t of this.wheels){let e=-this.roll*t.side*this.dims.track*.35+this.pitch*t.z*.35;t.pivot.position.y=t.y+En(e,-.06,.06)*.5}}collide(t,e,n){let r=-Math.sin(this.heading),o=-Math.cos(this.heading);for(let f=0;f<2;f++)for(let d=0;d<2;d++){let u=d?1.35:-1.35,g=this.x+r*u,x=this.z+o*u;t.boxGrid.near(g,x,1.05,p=>{if(Math.abs(g-p.x)>p.w+1.05||Math.abs(x-p.z)>p.d+1.05)return;let y=En(g,p.x-p.w,p.x+p.w),M=En(x,p.z-p.d,p.z+p.d),v=g-y,b=x-M,C=Math.hypot(v,b);if(C<1e-4){let L=p.w-Math.abs(g-p.x),P=p.d-Math.abs(x-p.z);L<P?(v=Math.sign(g-p.x),b=0,C=-L):(v=0,b=Math.sign(x-p.z),C=-P)}else v/=C,b/=C;C<1.05&&this.resolve(v,b,1.05-C,.25,g-v*1.05,x-b*1.05)});let m=p=>{let y=g-p.x,M=x-p.z;if(Math.abs(y)>3||Math.abs(M)>3)return;let v=Math.hypot(y,M),b=1.05+p.r;v<b&&v>1e-4&&this.resolve(y/v,M/v,b-v,.2,p.x+y/v*p.r,p.z+M/v*p.r)};t.circleGrid.near(g,x,3,m),this.y<(Is(g,x)??-9)-1&&t.pileGrid.near(g,x,3,m)}let a=rr(e,n)||rr(this.x,this.z);if(a&&this.y>1.2){let f=a.halfWidth-1.1;Math.abs(this.z-a.z)>f&&this.resolve(0,-Math.sign(this.z-a.z),Math.abs(this.z-a.z)-f,.15),this.x<a.x1+3&&this.resolve(1,0,a.x1+3-this.x,.15)}let c=Is(this.x,this.z),h=rr(this.x,this.z);if(h&&this.x>h.x0&&this.y<c-.9&&this.x<-345){let f=Math.sign(this.z-h.z)||1;this.resolve(0,f,h.halfWidth+.2-Math.abs(this.z-h.z),.2)}let l=a&&this.y>1.2?a.x1+3:ze.minX;this.x<l&&this.resolve(1,0,l-this.x,.2),this.x>ze.maxX&&this.resolve(-1,0,this.x-ze.maxX,.3),this.z<ze.minZ&&this.resolve(0,1,ze.minZ-this.z,.3),this.z>ze.maxZ&&this.resolve(0,-1,this.z-ze.maxZ,.3)}resolve(t,e,n,i,r=this.x-t*2,o=this.z-e*2){this.x+=t*n,this.z+=e*n;let a=this.vx*t+this.vz*e;if(a<0){let c=this.vx-a*t,h=this.vz-a*e,l=Math.hypot(c,h);l>6&&(!this.scrape||l>this.scrape.speed)&&(this.scrape={x:r,z:o,speed:l,nx:t,nz:e});let f=this.assist&&l>-a*1.2,d=f?0:i;this.vx-=(1+d)*a*t,this.vz-=(1+d)*a*e;let u=f?.985:.9;if(this.vx*=u,this.vz*=u,f&&l>4){let x=Math.atan2(-c,-h)-this.heading;x=Math.atan2(Math.sin(x),Math.cos(x)),Math.abs(x)<1.2&&(this.heading+=x*.08)}if(this.impact=Math.max(this.impact,-a),(!this.contact||-a>this.contact.speed)&&(this.contact={x:r,z:o,speed:-a,nx:t,nz:e}),this.registerHit(r,o,-a),this.yawRate*=.6,!f){let g=-(1+d)*a,x=((o-this.z)*t-(r-this.x)*e)*g/2.6;this.yawRate+=En(x*(this.assist?.15:.45),-2.2,2.2)}}}registerHit(t,e,n){(!this.pendingHit||n>this.pendingHit.speed)&&(this.pendingHit={x:t,z:e,speed:n})}applyDamage(){let t=this.pendingHit;if(this.pendingHit=null,!t||t.speed<3.5||this.dentCooldown>0)return;this.dentCooldown=.18;let e=t.x-this.x,n=t.z-this.z,i=Math.cos(this.heading),r=Math.sin(this.heading),o=e*i-n*r,a=e*r+n*i,c=this.dims.length/2,h=this.dims.track+.1;o=En(o,-h,h),a=En(a,-c,c);let l=En((t.speed-3)/16,.05,1);this.dent(o,.62,a,l)}dent(t,e,n,i){let r=.5+i*.55,o=.035+i*.13,a=this.dims.length/2,c=Math.abs(n)/a>Math.abs(t)/this.dims.track,h=c?-t*.15:-Math.sign(t),l=c?-Math.sign(n):-n*.1,f=Math.hypot(h,l)||1;h/=f,l/=f;let d=new I,u=new I,g=new I;for(let x of this.deformables){let m=x.geo.attributes.position.array,p=x.geo.attributes.normal.array,y=x.basePos,M=x.weight,v=!1;for(let b=0,C=0;b<m.length;b+=3,C++){let L=y[b]-t,P=(y[b+1]-e)*1.3,T=y[b+2]-n,S=(L*L+P*P+T*T)/(r*r);if(S>3)continue;let N=Math.exp(-S*1.8)*(.65+.7*G_(y[b],y[b+1],y[b+2]));m[b]+=h*o*N,m[b+1]-=o*.3*N,m[b+2]+=l*o*N;let Y=m[b]-y[b],B=m[b+1]-y[b+1],O=m[b+2]-y[b+2],k=Math.hypot(Y,B,O);if(k>.26){let V=.26/k;m[b]=y[b]+Y*V,m[b+1]=y[b+1]+B*V,m[b+2]=y[b+2]+O*V}M[C]=Math.min(1,M[C]+N),v=!0}if(v){for(let b=0;b<m.length;b+=9){let C=b/3;if(!(Math.max(M[C],M[C+1],M[C+2])<.02)){d.set(m[b+3]-m[b],m[b+4]-m[b+1],m[b+5]-m[b+2]),u.set(m[b+6]-m[b],m[b+7]-m[b+1],m[b+8]-m[b+2]),g.crossVectors(d,u).normalize();for(let L=0;L<3;L++){let P=b+L*3,T=Math.min(1,M[C+L]*1.6),S=x.baseNormal,N=S[P]*(1-T)+g.x*T,Y=S[P+1]*(1-T)+g.y*T,B=S[P+2]*(1-T)+g.z*T,O=Math.hypot(N,Y,B)||1;p[P]=N/O,p[P+1]=Y/O,p[P+2]=B/O}}}x.geo.attributes.position.needsUpdate=!0,x.geo.attributes.normal.needsUpdate=!0}}if(this.damage=Math.min(1,this.damage+i*.18),i>.3){let x=t<0?0:1;n<-a+.9&&(this.broken.head[x]=!0),n>a-.9&&(this.broken.tail[x]=!0)}}repair(){for(let t of this.deformables||[])t.weight.some(e=>e>0)&&(t.geo.attributes.position.array.set(t.basePos),t.geo.attributes.normal.array.set(t.baseNormal),t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.normal.needsUpdate=!0,t.weight.fill(0));this.damage=0,this.broken={head:[!1,!1],tail:[!1,!1]}}setLights(t,e,n=!1,i=.016){let r=Math.max(t,.15);this.lightMats.head.forEach((h,l)=>{let f=!this.broken.head[l];h.emissiveIntensity=f?1.5+r*9:0,h.color.setScalar(f?1:.12),this.spots[l].intensity=f?t*220:0,this.beams[l].visible=f&&t>.05}),this.lightMats.tail.forEach((h,l)=>{h.emissiveIntensity=this.broken.tail[l]?.05:e?6:1.1+t*1.2}),this.revMat.emissiveIntensity=n?5:0;let o=this.signal;o.clock+=i;let a=Math.abs(this.steer)>.3&&this.kmh>4&&this.kmh<75?Math.sign(this.steer):0;o.hold=a?o.hold+i:Math.max(0,o.hold-i*2),o.hold>.35&&a?o.side=a:o.hold<=0&&(o.side=0),this.impact>9&&(o.hazard=5),o.hazard=Math.max(0,o.hazard-i);let c=o.clock*1.6%1<.5?7:0;this.lightMats.amber[0].emissiveIntensity=o.hazard>0||o.side>0?c:0,this.lightMats.amber[1].emissiveIntensity=o.hazard>0||o.side<0?c:0,this.beamMat.uniforms.intensity.value=t*.06}safeRespawn(){let t=ls(this.x),e=Ps(this.z);if(Math.abs(this.x-t)<Math.abs(this.z-e)){let n=Math.cos(this.heading)>0;this.reset(t+(n?3.4:-3.4),En(this.z,He+10,$e-10),n?0:Math.PI)}else{let n=Math.sin(this.heading)<0;this.reset(En(this.x,Qe+10,qe-10),e+(n?3.4:-3.4),n?-Math.PI/2:Math.PI/2)}}};var Zc=16,rf=new ne,$c=new ne,n0=new Ge,of=new I,ba=new I,Kc=new Ge,W_=new I(1,1,1),X_=new ne().makeScale(0,0,0),Jc=class{constructor(){this.items=[],this.grid=new Map,this.loose=new Set,this.dirty=new Set}add(t,e,n){let i={...n,parts:t.map(o=>{let a=new ne;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),hide:(e||[]).map(o=>{let a=new ne;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),pivot0:new I(n.x,n.y,n.z),pos:new I(n.x,n.y,n.z),vel:new I,quat:new Ge,spin:new I,state:0,timer:0};i.id=this.items.length,this.items.push(i);let r=this.key(n.x,n.z);return this.grid.has(r)||this.grid.set(r,[]),this.grid.get(r).push(i),i}key(t,e){return`${Math.floor(t/Zc)},${Math.floor(e/Zc)}`}collide(t,e,n){let i=-Math.sin(t.heading),r=-Math.cos(t.heading),o=t.x-i*1.35,a=t.z-r*1.35,c=t.x+i*1.35,h=t.z+r*1.35,l=Math.hypot(t.vx,t.vz),f=Math.floor(t.x/Zc),d=Math.floor(t.z/Zc);for(let u=-1;u<=1;u++)for(let g=-1;g<=1;g++){let x=this.grid.get(`${f+u},${d+g}`);if(x)for(let m of x){if(m.state!==0)continue;let p=c-o,y=h-a,M=ke.clamp(((m.x-o)*p+(m.z-a)*y)/(p*p+y*y),0,1),v=o+p*M,b=a+y*M,C=m.x-v,L=m.z-b,P=Math.hypot(C,L),T=1.05+m.r;if(P>=T||t.y>m.y+3)continue;P>1e-4?(C/=P,L/=P):(C=i,L=r);let S=t.vx*C+t.vz*L;if(S<m.solid){S>0&&(t.vx-=S*C*1.2,t.vz-=S*L*1.2),t.x-=C*(T-P),t.z-=L*(T-P);continue}this.knock(m,t,C,L,S,l),n?.({item:m,x:m.x,z:m.z,speed:S,nx:C,nz:L})}}}knock(t,e,n,i,r,o){t.state=1,t.timer=0,this.loose.add(t);let a=1-t.mass*Math.min(1,6/Math.max(o,6));if(e.vx*=a,e.vz*=a,e.registerHit?.(t.x,t.z,r*t.mass*3),t.kind==="topple")ba.set(i,0,-n).normalize(),t.axis=ba.clone(),t.angle=0,t.angVel=.6+r*.08;else{let c=2.5+bt()*2.5+r*.12,h=.5+bt()*.25;t.vel.set(e.vx*h+n*r*.25,c,e.vz*h+i*r*.25),t.spin.set((bt()-.5)*2,(bt()-.5)*2,(bt()-.5)*2).normalize().multiplyScalar(5+r*.35),t.pos.copy(t.pivot0)}for(let c of t.hide)c.mesh.setMatrixAt(c.index,X_),c.mesh.instanceMatrix.needsUpdate=!0}groundY(t,e){return da(t,e)==="road"?0:le}update(t,e){for(let n of this.loose){if(n.timer+=t,n.state===1){if(n.kind==="topple")n.angVel+=Math.sin(Math.max(n.angle,.05))*6*t+.4*t,n.angle+=n.angVel*t,n.angle>=Math.PI/2-.04&&(n.angle=Math.PI/2-.04,n.angVel*=-.18,Math.abs(n.angVel)<.08&&(n.state=2)),n.quat.setFromAxisAngle(n.axis,n.angle);else{n.vel.y-=9.8*t,n.pos.addScaledVector(n.vel,t);let i=n.spin.length();i>.001&&(Kc.setFromAxisAngle(ba.copy(n.spin).divideScalar(i),i*t),n.quat.premultiply(Kc));let r=this.groundY(n.pos.x,n.pos.z)+n.lieH;n.pos.y<r&&(n.pos.y=r,n.vel.y<-1.2?(n.vel.y*=-.32,n.vel.x*=.5,n.vel.z*=.5,n.spin.multiplyScalar(.55)):(n.vel.y=0,n.vel.x*=Math.exp(-8*t),n.vel.z*=Math.exp(-8*t),n.spin.multiplyScalar(Math.exp(-6*t)),Math.hypot(n.vel.x,n.vel.z)<.3&&this.settle(n)))}this.dirty.add(n)}n.timer>25&&Math.hypot(e.x-n.x,e.z-n.z)>200&&this.restore(n)}for(let n of this.dirty)this.write(n);this.dirty.clear()}settle(t){t.state=2,of.set(0,1,0).applyQuaternion(t.quat);let e=Math.atan2(of.x,of.z);n0.setFromAxisAngle(ba.set(0,1,0),e),Kc.setFromAxisAngle(ba.set(1,0,0),Math.PI/2),t.quat.copy(n0).multiply(Kc),t.pos.y=this.groundY(t.pos.x,t.pos.z)+t.lieH,this.dirty.add(t)}restore(t){t.state=0,t.pos.copy(t.pivot0),t.quat.identity(),t.vel.set(0,0,0),t.spin.set(0,0,0),this.loose.delete(t);for(let e of[...t.parts,...t.hide])e.mesh.setMatrixAt(e.index,e.base),e.mesh.instanceMatrix.needsUpdate=!0}write(t){rf.compose(t.pos,t.quat,W_),$c.makeTranslation(-t.pivot0.x,-t.pivot0.y,-t.pivot0.z),rf.multiply($c);for(let e of t.parts)$c.multiplyMatrices(rf,e.base),e.mesh.setMatrixAt(e.index,$c),e.mesh.instanceMatrix.needsUpdate=!0}restoreAll(){for(let t of[...this.loose])this.restore(t)}};function Qc(s,t){let e=s.index?s.toNonIndexed():s,n=new Ht(t),i=e.attributes.position.count,r=new Float32Array(i*3);for(let o=0;o<i;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new vn(r,3)),e}function pn(s,t,e,n,i,r,o,a=0,c=0,h=0){let l=new pe(s,t,e);return(a||c||h)&&l.applyMatrix4(new ne().makeRotationFromEuler(new Dn(a,c,h))),l.translate(n,i,r),Qc(l,o)}function _n(s,t,e,n,i,r,o,a,c="y"){let h=new De(s,t,e,n);return c==="x"&&h.rotateZ(Math.PI/2),c==="z"&&h.rotateX(Math.PI/2),h.translate(i,r,o),Qc(h,a)}function a0(s,t,e,n,i,r,o=1){let a=new zn(s,t,Math.max(3,t/3),0,Math.PI*2,0,Math.PI/2);return a.scale(1,o,1),a.translate(e,n,i),Qc(a,r)}var co="#b0362a",af="#d9d3c2",dr="#202427",i0="#7d5b3b",s0="#264a8a",jc="#626a70";function q_(){return rn([_n(.2,.21,.07,10,0,.035,0,co),_n(.14,.15,.52,10,0,.33,0,co),_n(.17,.17,.05,10,0,.6,0,co),a0(.15,10,0,.62,0,co,.9),_n(.035,.05,.07,6,0,.78,0,af),...[-1,1].flatMap(s=>[_n(.055,.06,.14,8,s*.17,.46,0,co,"x"),_n(.065,.065,.03,8,s*.245,.46,0,af,"x")]),_n(.075,.08,.13,8,0,.42,.17,co,"z"),_n(.085,.085,.035,8,0,.42,.245,af,"z")])}function Y_(){let s=[_n(.3,.27,.9,14,0,.45,0,"#2c4a3b"),a0(.31,14,0,.9,0,"#1f2b27",.4),pn(.22,.12,.02,0,.78,.3,"#0d1110")];for(let t of[.18,.5,.82])s.push(_n(.305,.3,.03,14,0,t,0,"#22392e"));return rn(s)}function Z_(){let s=[];for(let t of[-.14,0,.14])s.push(pn(2,.04,.11,0,.45,t,i0));for(let t=0;t<2;t++)s.push(pn(2,.1,.035,0,.64+t*.15,-.25-t*.03,i0,-.2));for(let t of[-.85,.85])s.push(pn(.06,.45,.06,t,.225,.16,dr),pn(.06,.85,.06,t,.42,-.24,dr,-.15)),s.push(pn(.06,.04,.5,t,.63,-.02,dr),pn(.06,.04,.42,t,.42,-.04,dr));return rn(s)}function $_(){let s=[];for(let t of[-.22,.22])for(let e of[-.18,.18])s.push(pn(.05,.22,.05,t,.11,e,dr));return s.push(pn(.52,.62,.46,0,.53,0,s0),_n(.23,.23,.52,14,0,.84,0,s0,"x")),s.push(pn(.32,.07,.04,0,.93,.225,"#16294d"),pn(.2,.14,.012,0,.6,.235,"#d8dde6")),rn(s)}function K_(){return rn([pn(.36,.03,.3,0,.015,0,dr),pn(.08,.36,.08,0,.18,0,dr),pn(.46,.55,.4,0,.63,0,"#ffffff"),pn(.48,.04,.42,0,.92,0,"#ffffff"),pn(.34,.24,.012,0,.71,.205,"#1c2226"),pn(.12,.03,.03,0,.53,.215,"#9aa0a4")])}function J_(){return rn([_n(.035,.04,1.05,8,0,.525,0,jc),pn(.17,.28,.13,0,1.19,0,"#8a9095"),_n(.085,.085,.13,10,0,1.33,0,"#3a4044","z"),pn(.1,.07,.012,0,1.24,.067,"#c9e0a8")])}function j_(){return rn([_n(.045,.05,3.3,8,0,1.65,0,jc),_n(.06,.06,.06,8,0,3.32,0,jc)])}function Q_(s){let t=[_n(.13,.17,10.6,8,0,5.3,0,"#5a4330"),pn(2.5,.13,.13,0,9.7,0,"#4b3828"),pn(1.4,.1,.1,0,8.9,0,"#4b3828")];for(let e of[-1.1,0,1.1])t.push(_n(.05,.06,.2,6,e,9.86,0,"#cfd4d2"));for(let e of[-.6,.6])t.push(_n(.04,.05,.16,6,e,9.04,0,"#cfd4d2"));return s&&t.push(_n(.27,.27,.85,10,0,7.9,.32,"#7d8487"),_n(.29,.29,.05,10,0,8.35,.32,"#5f6669")),rn(t)}var l0=s=>s.toUpperCase().replace(" DRIVE"," DR").replace(" AVE"," AV").replace(" BLVD"," BL"),r0=Object.fromEntries(Object.entries(Ou).map(([s,t])=>[s,l0(t)])),o0=Object.fromEntries(Object.entries(Bu).map(([s,t])=>[s,l0(t)]));function tM(s,t){let e=t.length,n=xn(s,512,64*e,(r,o,a)=>{let c=a/e;t.forEach((h,l)=>{let f=l*c;r.fillStyle="#16603d",r.fillRect(0,f,o,c),r.strokeStyle="#e9f1ea",r.lineWidth=3,r.strokeRect(6,f+6,o-12,c-12),r.fillStyle="#f4f7f2",r.font='700 40px "Barlow Condensed", Arial Narrow, Arial, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(h,o/2,f+c/2+2)})}),i=new Yt({map:n,roughness:.45,metalness:.2});return i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aRow;`).replace("#include <uv_vertex>",`#include <uv_vertex>
  vMapUv.y = (vMapUv.y + aRow) / ${e.toFixed(1)};`)},i.customProgramCacheKey=()=>"pa-street-blade",i}function eM(s){return xn(s,256,384,(t,e,n)=>{let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#ff8a4c"),i.addColorStop(1,"#5a1c3c"),t.fillStyle=i,t.fillRect(0,0,e,n),t.fillStyle="#fff4dc",t.beginPath(),t.arc(e/2,n*.36,62,0,Math.PI*2),t.fill(),t.fillStyle="#1b1020",t.font='800 54px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.fillText("SURF",e/2,n*.7),t.fillText("FIZZ",e/2,n*.84),t.fillStyle="#fff4dc",t.font="600 18px Arial, sans-serif",t.fillText("TASTE THE SWELL",e/2,n*.94)})}function c0(s,t,e,n,i=[]){let r=new ne,o=new Ge,a=new I,c=new I(1,1,1),h=new I(0,1,0),l=new Yt({vertexColors:!0,roughness:.55,metalness:.15}),f=[],d=[],u=Me+5,g=new gi(16);for(let[pt,Ut]of n)g.add({x:pt,z:Ut});for(let pt of i)g.add({x:pt.x,z:pt.z});let x=(pt,Ut,D=2.4)=>g.any(pt,Ut,D),m=new gi(32);for(let pt of as){let[Ut,D]=or(pt);m.add({x:Ut,z:D})}let p=(pt,Ut)=>m.any(pt,Ut,7),y=new Set(["downtown","midtown"]),M={hydrant:[],bin:[],bench:[],mailbox:[],newsbox:[],meter:[]},v=(pt,Ut,D,ct)=>ht=>pt==="ns"?[Ut+D*(Me+ht),ct]:[ct,Ut+D*(Me+ht)];for(let pt of["ns","ew"]){let Ut=pt==="ns"?Ue:Ne,D=pt==="ns"?Ne:Ue,[ct,ht]=pt==="ns"?[He-45,$e+45]:[Qe+15,qe+25];for(let at of Ut)for(let j of[-1,1])if(!(pt==="ns"&&at===Qe&&j<0))for(let F=ct;F<=ht;F+=6.5){if(D.some(G=>Math.abs(F-G)<u))continue;let U=v(pt,at,j,F),[X,q]=U(1);if(x(X,q)||p(X,q))continue;let $=pt==="ns"?j>0?-Math.PI/2:Math.PI/2:j>0?Math.PI:0,w=y.has(Ui(ar(X+(pt==="ns"?j*40:0)),fa(q+(pt==="ew"?j*40:0)))),_=bt();if(_<.055)M.hydrant.push([...U(.6),$]);else if(_<.12)M.bin.push([...U(.9),$]);else if(_<.165)M.bench.push([...U(3.4),$]);else if(_<.19)M.mailbox.push([...U(1.1),$]);else if(_<.23){let G=2+Math.floor(bt()*2);for(let Q=0;Q<G;Q++){let gt=(Q-(G-1)/2)*.55,[ft,Kt]=U(1.1);M.newsbox.push([pt==="ns"?ft:ft+gt,pt==="ns"?Kt+gt:Kt,$])}}else w&&_<.42&&M.meter.push([...U(.45),$])}}let b={hydrant:{geo:q_(),y:.4,r:.22,mass:.08,solid:1.5,lieH:.17,kind:"fly",sparks:!0},bin:{geo:Y_(),y:.5,r:.32,mass:.04,solid:1.2,lieH:.29,kind:"fly"},bench:{geo:Z_(),y:.4,r:.75,mass:.07,solid:1.5,lieH:.3,kind:"fly"},mailbox:{geo:$_(),y:.5,r:.34,mass:.06,solid:1.5,lieH:.25,kind:"fly",sparks:!0},newsbox:{geo:K_(),y:.5,r:.28,mass:.04,solid:1.2,lieH:.22,kind:"fly"},meter:{geo:J_(),y:0,r:.12,mass:.04,solid:2,kind:"topple",sparks:!0}},C=["#c8342b","#2f5fa8","#e2b33a","#2e7d4f","#e8e4da","#d9662f"].map(pt=>new Ht(pt)),L={},P=pt=>[pt[0],pt[1]],T=pt=>{pt.castShadow=!0,pt.receiveShadow=!0,pt.layers.set(1)};for(let[pt,Ut]of Object.entries(M)){let D=b[pt],ct=An(s,Ut,D.geo,l,{at:P,far:pt==="bench"?420:340,setup:ht=>{T(ht),ht.name=pt},set:(ht,at,[j,F,U])=>{o.setFromAxisAngle(h,U+(pt==="bin"||pt==="hydrant"?bt()*6.28:0)),ht.setMatrixAt(at,r.compose(a.set(j,le,F),o,c)),pt==="newsbox"&&ht.setColorAt(at,ye(C))}});L[pt]=ct.meshes,Ut.forEach(([ht,at],j)=>{e.add([ct.refs[j]],null,{type:pt,x:ht,z:at,y:le+D.y,r:D.r,mass:D.mass,solid:D.solid,lieH:D.lieH??.2,kind:D.kind,sparks:!!D.sparks})})}let S=[...Object.values(r0),...Object.values(o0)],N=[];for(let pt of Ue)for(let Ut of Ne)N.push([pt+Me+1.3,Ut-Me-1.3,pt,Ut]);let Y=An(s,N,j_(),l,{at:P,far:420,setup:T,set:(pt,Ut,[D,ct])=>pt.setMatrixAt(Ut,r.makeTranslation(D,le,ct))}),B=N.flatMap(([pt,Ut,D,ct])=>[[pt,Ut,0,S.indexOf(r0[String(D)])],[pt,Ut,1,S.indexOf(o0[String(ct)])]]),O=An(s,B,new pe(1.7,.27,.03),tM(t,S),{at:P,far:420,cloneGeometry:!0,set:(pt,Ut,[D,ct,ht])=>{ht===0?o.setFromAxisAngle(h,Math.PI/2):o.identity(),pt.setMatrixAt(Ut,r.compose(a.set(D,le+3+ht*.3,ct),o,c))},setup:(pt,Ut)=>{T(pt),pt.geometry.setAttribute("aRow",new fn(new Float32Array(Ut.map(D=>S.length-1-D[3])),1))}});N.forEach(([pt,Ut],D)=>{e.add([Y.refs[D],O.refs[D*2],O.refs[D*2+1]],null,{type:"sign",x:pt,z:Ut,y:le,r:.12,mass:.05,solid:2.5,kind:"topple",sparks:!0})});let k=[],V=[],rt=[];for(let pt of as){let[Ut,D]=or(pt),ct=pt.axis==="ns"?pt.side>0?-Math.PI/2:Math.PI/2:pt.side>0?Math.PI:0,ht=new ne().compose(a.set(Ut,le,D),o.setFromAxisAngle(h,ct),c),at=(X,q)=>X.push(q.applyMatrix4(ht));at(k,pn(4.3,.08,1.8,0,2.55,0,"#3b4448",.04)),at(k,pn(4.3,.18,.06,0,2.48,.88,"#2b3236"));for(let X of[-2.05,2.05])for(let q of[-.78,.7])at(k,_n(.05,.05,2.5,8,X,1.25,q,"#2b3236"));at(k,pn(2.4,.05,.42,-.2,.47,-.45,"#9aa3a8"));for(let X of[-1.2,.8])at(k,pn(.05,.45,.35,X,.225,-.45,"#2b3236"));at(k,_n(.04,.04,2.8,8,2.7,1.4,.9,jc)),at(k,_n(.27,.27,.03,18,2.7,2.65,.9,"#1d4f9a","z")),at(k,_n(.2,.2,.035,18,2.7,2.65,.9,"#f2f4f6","z")),at(V,pn(4,1.85,.02,0,1.3,-.8,"#ffffff")),at(V,pn(.02,1.85,1.35,-2.05,1.3,-.1,"#ffffff"));let j=new pe(.14,1.8,1.3);j.translate(2.05,1.3,-.08),rt.push(Qc(j,"#ffffff").applyMatrix4(ht));let F=2.25,U=.95;f.push(pt.axis==="ns"?{x:Ut,z:D,w:U,d:F}:{x:Ut,z:D,w:F,d:U})}let J=new $t(rn(k),l);J.castShadow=J.receiveShadow=!0;let z=new Yt({color:10470612,roughness:.05,metalness:.1,transparent:!0,opacity:.22,depthWrite:!1}),At=new $t(rn(V),z);At.renderOrder=2;let Ct=eM(t),Wt=new Yt({map:Ct,emissive:16777215,emissiveMap:Ct,emissiveIntensity:.1,roughness:.3}),zt=new $t(rn(rt),Wt);zt.castShadow=!0,s.add(J,At,zt);let Ot=[];for(let pt=He-30;pt<=$e+45;pt+=38)Ne.some(Ut=>Math.abs(pt-Ut)<u)||Ot.push([qe+Me+1.7,pt,"ns"]);for(let[pt,Ut]of[[$e,1],[He,-1]])for(let D=Qe+30;D<=qe+10;D+=38)Ue.some(ct=>Math.abs(D-ct)<u)||Ot.push([D,pt+Ut*(Me+1.7),"ew"]);let me=Ot.filter((pt,Ut)=>Ut%4!==2),mt=Ot.filter((pt,Ut)=>Ut%4===2);for(let[pt,Ut]of[[me,!1],[mt,!0]]){An(s,pt,Q_(Ut),l,{at:P,far:900,setup:D=>{D.castShadow=!0},set:(D,ct,[ht,at,j])=>D.setMatrixAt(ct,r.compose(a.set(ht,le,at),o.setFromAxisAngle(h,j==="ns"?0:Math.PI/2),c))});for(let[D,ct]of pt)d.push({x:D,z:ct,r:.22})}let wt=[],It=[Ot.filter(pt=>pt[2]==="ns"),Ot.filter(pt=>pt[2]==="ew"&&pt[1]>0),Ot.filter(pt=>pt[2]==="ew"&&pt[1]<0)];for(let pt of It)for(let Ut=0;Ut<pt.length-1;Ut++){let[D,ct,ht]=pt[Ut],[at,j]=pt[Ut+1];if(!(Math.hypot(at-D,j-ct)>80))for(let[F,U]of[[-1.1,9.92],[0,9.92],[1.1,9.92],[-.6,9.08],[.6,9.08]]){let X=ht==="ns"?F:0,q=ht==="ns"?0:F,$=.55+Math.abs(F)*.1,w=D+X,_=le+U,G=ct+q;for(let Q=1;Q<=12;Q++){let gt=Q/12,ft=D+(at-D)*gt+X,Kt=ct+(j-ct)*gt+q,Et=le+U-$*4*gt*(1-gt);wt.push(w,_,G,ft,Et,Kt),w=ft,_=Et,G=Kt}}}let kt=new Je;kt.setAttribute("position",new be(wt,3));let Xt=new No(kt,new Br({color:723981,transparent:!0,opacity:.85}));return s.add(Xt),{solids:f,circles:d,meshes:L,update(pt){Wt.emissiveIntensity=.12+pt*1.4}}}function h0(s,t,e,n,i){let r=n-t,o=i-e;return s.segment(t,e,n,i,a=>{if(Math.max(t,n)<a.x-a.w||Math.min(t,n)>a.x+a.w||Math.max(e,i)<a.z-a.d||Math.min(e,i)>a.z+a.d)return!1;let c=0,h=1;for(let l=0;l<2;l++){let f=l?e:t,d=l?o:r,u=l?a.z-a.d:a.x-a.w,g=l?a.z+a.d:a.x+a.w;if(Math.abs(d)<1e-6){if(f<u||f>g)return!1;continue}let x=(u-f)/d,m=(g-f)/d;if(x>m){let p=x;x=m,m=p}if(c=Math.max(c,x),h=Math.min(h,m),c>h)return!1}return!0})}var th=class{constructor(t,e){this.traffic=t,this.colliders=e,this.reset()}reset(){this.level=0,this.evade=0,this.speeding=0,this.bustTimer=0,this.lastCrime=-99,this.seen=!1,this.events=this.events||[];for(let t of this.traffic.police)this.traffic.endChase(t)}get evading(){return this.level>0&&!this.seen}get evadeTime(){return 7+this.level*3}sightRange(){return 70+this.level*25}witness(t,e,n){let i=null,r=n;for(let o of this.traffic.police){let a=Math.hypot(o.x-t,o.z-e);a>r||h0(this.colliders,o.x,o.z,t,e)||(i=o,r=a)}return i}crime(t,e,n,i,r,o=!0){if(r-this.lastCrime<2.5&&t!=="police")return!1;let a=o?this.witness(e,n,75+this.level*15):null;if(o&&!a&&this.level===0||o&&!a&&!this.seen)return!1;this.lastCrime=r;let c=this.level;return this.level=Math.min(5,Math.max(this.level+i,t==="police"?2:1)),this.evade=0,this.level>c&&this.events.push({type:"up",level:this.level,kind:t}),a&&this.traffic.startChase(a),!0}update(t,e,n,i,r){if(this.events.length=0,!r){this.level&&this.reset();return}if(e.kmh>125&&this.witness(e.x,e.z,55)?(this.speeding+=t,this.speeding>1.2&&(this.crime("speeding",e.x,e.z,1,n),this.speeding=0)):this.speeding=Math.max(0,this.speeding-t),!this.level){this.seen=!1;return}let a=Math.min(this.traffic.police.length,[0,1,2,3,4,5][this.level]),c=this.traffic.police.filter(f=>f.mode==="chase");if(c.length<a){let f=this.traffic.police.filter(d=>d.mode!=="chase").sort((d,u)=>Math.hypot(d.x-e.x,d.z-e.z)-Math.hypot(u.x-e.x,u.z-e.z))[0];f&&(Math.hypot(f.x-e.x,f.z-e.z)>260?this.traffic.dispatch(f,e,i):this.traffic.startChase(f))}let h=this.sightRange();if(this.seen=c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<h&&!h0(this.colliders,f.x,f.z,e.x,e.z)),this.seen)this.evade=0;else if(this.evade+=t,this.evade>this.evadeTime){this.events.push({type:"evaded"}),this.reset();return}c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<8)&&e.kmh<6?(this.bustTimer+=t,this.bustTimer>2.5&&(this.events.push({type:"busted"}),this.reset())):this.bustTimer=Math.max(0,this.bustTimer-t*2)}sirenLevel(t){let e=1/0;for(let n of this.traffic.police)n.mode==="chase"&&(e=Math.min(e,Math.hypot(n.x-t.x,n.z-t.z)));return Math.max(0,1-e/260)}};var nM=[["sedan",16],["suv",11],["hatch",11],["pickup",7],["taxi",9],["police",5]],lf={sedan:26,suv:20,hatch:22,pickup:12,taxi:0,police:0},iM=["sedan","sedan","suv","hatch","hatch","pickup"],u0=["#e9e9e6","#e9e9e6","#151719","#151719","#9ea3a6","#5d6265","#1f3a5f","#8e1c1c","#c9b99a","#2e4a3a","#6b7d8c","#3a2f2a","#7a8f9e","#b85c2a"],f0=11.85,sM=430,d0=210,Oi=new ne,zs=new Ge,xi=new I,ho=new I(1,1,1),Sa=new I(0,1,0),rM=new I(1,0,0),eh=new ne,cf=new Ge,oM=new Ge().setFromAxisAngle(Sa,Math.PI),wa=new ne().makeScale(0,0,0),Bi=new Ht;function m0(s,t){return s==="ns"?-t:t}function hf(s,t){return s==="ns"?t<0?0:Math.PI:t>0?-Math.PI/2:Math.PI/2}function uf(s,t){return s==="ns"?[0,t]:[t,0]}function Ea(s,t,e,n,i){let r=m0(s,e)*ua[n];return s==="ns"?[t+r,i]:[i,t+r]}function p0(s){return Math.atan2(Math.sin(s),Math.cos(s))}function ff(s,t){return s.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},s.customProgramCacheKey=()=>t,s}var df=new Map;function aM(s){if(df.has(s))return df.get(s);let e=Object.entries({trim:"#14181a",dark:"#07090a",chrome:"#b9bec2",plate:"#d6d2c4",rev:"#c9c9c2",amber:"#c9741a"}).map(([i,r])=>{let o=s.parts[i].clone(),a=new Ht(r),c=o.attributes.position.count,h=new Float32Array(c*3);for(let l=0;l<c;l++)h[l*3]=a.r,h[l*3+1]=a.g,h[l*3+2]=a.b;return o.setAttribute("color",new vn(h,3)),o}),n={paint:s.parts.paint,glass:s.parts.glass,body:rn(e),head:s.parts.head,tail:s.parts.tail};return df.set(s,n),n}var lM=s=>ya(16777215,{metalness:.35,roughness:.32,seams:s,twoTone:["0.015","0.92","0.7"]}),nh=class{constructor(t,e){this.cars=[],this.meshes=[],this.types={},this.parked=[],this.police=[],this.world=null,this.peds=[],this.policePace=.6;let n=lo(e);this.headMat=ff(new Yt({color:16777215,emissive:16773846,emissiveIntensity:1,roughness:.2}),"head-inst"),this.tailMat=ff(new Yt({color:3802885,emissive:16719888,emissiveIntensity:1,roughness:.3}),"tail-inst");let i=xn(e,128,32,(l,f)=>{l.fillStyle="#f7d046",l.fillRect(0,0,f,32),l.fillStyle="#1a1a1a",l.font='800 24px "Barlow Condensed", Impact, sans-serif',l.textAlign="center",l.fillText("TAXI",f/2,25)});this.taxiSignMat=new Yt({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.3}),this.barMat=ff(new Yt({color:1118481,emissive:16777215,emissiveIntensity:1,roughness:.3}),"lightbar-inst"),this.bodyMat=new Yt({vertexColors:!0,roughness:.5,metalness:.4}),this.parked=this.layoutParking();for(let[l,f]of nM){let u=qc(l==="taxi"||l==="police"?"sedan":l),g=f+(lf[l]||0),m={paint:l==="police"?lM(u.seams):ya(16777215,{metalness:.45,roughness:.38,seams:u.seams}),glass:n.glass,body:this.bodyMat,head:this.headMat,tail:this.tailMat},p={};for(let[P,T]of Object.entries(aM(u))){let S=new Be(T,m[P],g);S.castShadow=P==="paint",(P==="glass"||P==="body")&&S.layers.set(1),S.receiveShadow=!0,S.frustumCulled=!1,S.instanceMatrix.setUsage(wi);for(let N=0;N<g;N++)S.setMatrixAt(N,wa);t.add(S),p[P]=S,this.meshes.push(S)}for(let P=0;P<g;P++)p.paint.setColorAt(P,Bi.set(l==="taxi"?"#f2c230":ye(u0))),p.tail.setColorAt(P,Bi.setScalar(1)),p.head.setColorAt(P,Bi.setScalar(1));let y=new Be(u.wheel.tire,n.tireLite,g*4),M=new Be(u.wheel.rim,n.rim,g*4);for(let P of[y,M]){P.frustumCulled=!1,P.castShadow=!1,P.layers.set(1),P.instanceMatrix.setUsage(wi);for(let T=0;T<g*4;T++)P.setMatrixAt(T,wa);t.add(P),this.meshes.push(P)}let v=null,b=null;if(l==="taxi"&&(v=new Be(new pe(.62,.2,.26),this.taxiSignMat,f),v.frustumCulled=!1,t.add(v),this.meshes.push(v)),l==="police"){b=new Be(new pe(.62,.16,.3),this.barMat,f*2),b.frustumCulled=!1;for(let P=0;P<f*2;P++)b.setColorAt(P,Bi.setScalar(0));t.add(b),this.meshes.push(b)}let C=Math.max(...u.type.cabin.top.map(P=>P[1])),L={name:l,geo:u,parts:p,tire:y,rim:M,sign:v,bar:b,roofY:C,moving:f,cap:g};this.types[l]=L;for(let P=0;P<f;P++){let T={type:L,slot:P,geo:u,police:l==="police",mode:"lane"};this.spawnLane(T,Nn.x,Nn.z,0,420),this.cars.push(T),T.police&&this.police.push(T)}}let r=xn(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d/2,4,f/2,d/2,d/2);u.addColorStop(0,"rgba(0,0,0,0.75)"),u.addColorStop(.55,"rgba(0,0,0,0.45)"),u.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),o=new sn(2.6,5.6);o.rotateX(-Math.PI/2);let a=Object.values(lf).reduce((l,f)=>l+f,0);this.blobs=new Be(o,new bn({map:r,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),this.cars.length+a+1),this.blobs.frustumCulled=!1,this.blobs.renderOrder=1,this.blobs.userData.noAO=!0,t.add(this.blobs);let c=xn(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d*.75,2,f/2,d*.6,d*.6);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(.5,"rgba(255,255,255,0.3)"),u.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),h=new sn(6,14);h.rotateX(-Math.PI/2),h.translate(0,0,-9.5),this.poolMat=new bn({map:c,color:16773328,transparent:!0,depthWrite:!1,blending:ai,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2}),this.pools=new Be(h,this.poolMat,this.cars.length),this.pools.frustumCulled=!1,this.pools.layers.set(1),this.pools.userData.noAO=!0,t.add(this.pools),this.parkTimer=0,this.nearParked=[],this.refreshParked(Nn.x,Nn.z)}layoutParking(){let t=[],e=new gi(48);for(let i of as){let[r,o]=or(i);e.add({x:r,z:o})}let n=i=>i.slice(0,-1).map((r,o)=>[r+27,i[o+1]-27]);for(let[i,r,o]of[["ns",Ue,Ne],["ew",Ne,Ue]])for(let a of r)for(let c of[-1,1])if(!(i==="ns"&&a===Qe&&c<0))for(let[h,l]of n(o))for(let f=h+3.6;f<l-3;f+=7.2){if(!we(.42))continue;let d=f+Mt(-.6,.6),u=i==="ns"?a+c*f0:d,g=i==="ns"?d:a+c*f0;if(e.near(u,g,14,m=>Math.hypot(m.x-u,m.z-g)<14)||u<-300&&Wn.some(m=>Math.abs(g-m.z)<20))continue;let x=i==="ns"?-c:c;t.push({parked:!0,type:ye(iM),x:u,z:g,heading:hf(i,x)+Mt(-.04,.04),color:ye(u0),hit:null,slot:-1})}return this.parkGrid=new gi(80).addAll(t),t}refreshParked(t,e){for(let r of Object.values(this.types))for(let o=r.moving;o<r.cap;o++){for(let a of Object.values(r.parts))a.setMatrixAt(o,wa);for(let a=0;a<4;a++)r.tire.setMatrixAt(o*4+a,wa),r.rim.setMatrixAt(o*4+a,wa)}for(let r of this.nearParked)r.slot=-1;let n=[];this.parkGrid.near(t,e,d0,r=>{r.d=Math.hypot(r.x-t,r.z-e),r.slot=-1,r.d<d0&&n.push(r)}),n.sort((r,o)=>r.d-o.d);let i={};this.nearParked=[];for(let r of n){let o=this.types[r.type],a=i[r.type]||0;a>=lf[r.type]||(i[r.type]=a+1,r.slot=o.moving+a,o.parts.paint.setColorAt(r.slot,Bi.set(r.color)),o.parts.head.setColorAt(r.slot,Bi.setScalar(0)),o.parts.tail.setColorAt(r.slot,Bi.setScalar(.12)),this.writeCar(o,r.slot,r.x,r.z,r.heading,0),this.nearParked.push(r))}}writeCar(t,e,n,i,r,o){zs.setFromAxisAngle(Sa,r),Oi.compose(xi.set(n,.02,i),zs,ho);for(let a of Object.values(t.parts))a.setMatrixAt(e,Oi);return t.geo.wheels.forEach((a,c)=>{cf.setFromAxisAngle(rM,o*(a.side<0?-1:1)),a.side<0&&cf.premultiply(oM),eh.compose(xi.set(a.x,a.y,a.z),cf,ho),eh.premultiply(Oi),t.tire.setMatrixAt(e*4+c,eh),t.rim.setMatrixAt(e*4+c,eh)}),Oi}spawnLane(t,e,n,i,r,o=null){for(let a=0;a<40;a++){let c=bt()<.5?"ns":"ew",h=(c==="ns"?Ue:Ne).filter(p=>Math.abs(p-(c==="ns"?e:n))<r);if(!h.length)continue;let l=ye(h),f=bt()<.5?1:-1,d=bt()<.5?0:1,u=c==="ns"?ke.clamp(n+Mt(-r,r),He+10,$e-10):ke.clamp(e+Mt(-r,r),Qe+10,qe-10),[g,x]=Ea(c,l,f,d,u),m=Math.hypot(g-e,x-n);if(!(m<i||m>r)&&!(c==="ns"?Ne:Ue).some(p=>Math.abs(p-u)<24)&&!this.cars.some(p=>p!==t&&p.mode==="lane"&&p.axis===c&&p.road===l&&p.dir===f&&p.lane===d&&Math.abs(p.s-u)<20)){if(o){let p=g-o.position.x,y=x-o.position.z,M=Math.hypot(p,y)||1;if((p*o.fx+y*o.fz)/M>.2&&M<300)continue}return Object.assign(t,{axis:c,road:l,dir:f,lane:d,s:u}),Object.assign(t,{mode:"lane",cruise:t.police?Mt(10.5,12.5):Mt(11,16.5),speed:9,turn:null,plan:null,decided:null,hit:null,offset:null,braking:!1,blockedTime:0,wheelSpin:0,vx:0,vz:0}),this.place(t),!0}}return t.axis===void 0&&Object.assign(t,{axis:"ns",road:Ue[1],dir:1,lane:0,s:0}),Object.assign(t,{mode:"lane",cruise:12,speed:0,turn:null,plan:null,hit:null,offset:null,wheelSpin:0,vx:0,vz:0,blockedTime:0}),this.place(t),!1}place(t){if(t.turn){let e=t.turn,n=e.t*Math.PI/2,i=Math.cos(n),r=Math.sin(n);t.x=e.O[0]+e.u[0]*i+e.v[0]*r,t.z=e.O[1]+e.u[1]*i+e.v[1]*r;let o=-e.u[0]*r+e.v[0]*i,a=-e.u[1]*r+e.v[1]*i;t.heading=Math.atan2(-o,-a)}else[t.x,t.z]=Ea(t.axis,t.road,t.dir,t.lane,t.s),t.heading=hf(t.axis,t.dir)}nextCross(t){let e=t.axis==="ns"?Ne:Ue,n=null;for(let i of e){let r=(i-t.s)*t.dir;r>-1&&(n===null||r<(n-t.s)*t.dir)&&(n=i)}return n}exitValid(t,e,n){let i=t==="ns"?Ne:Ue;return e>0?n<i[i.length-1]:n>i[0]}planTurn(t,e){let n=t.axis==="ns"?t.dir<0?"N":"S":t.dir>0?"E":"W",i={N:"E",E:"S",S:"W",W:"N"}[n],r={N:"W",W:"S",S:"E",E:"N"}[n],o=P=>P==="N"?["ns",-1]:P==="S"?["ns",1]:P==="E"?["ew",1]:["ew",-1],a=P=>{let[T,S]=o(P);return T===t.axis?this.exitValid(T,S,e):this.exitValid(T,S,t.road)},c=[];a(n)&&c.push(["straight",t.lane===1?.6:.72]),a(i)&&c.push(["right",t.lane===1?.4:.08]),a(r)&&c.push(["left",t.lane===0?.28:.06]);let h=bt()*c.reduce((P,T)=>P+T[1],0),l=c[0][0];for(let[P,T]of c)if((h-=T)<=0){l=P;break}if(l==="straight")return null;let[f,d]=o(l==="right"?i:r),u=t.lane,g=e,x=Ea(t.axis,t.road,t.dir,t.lane,0),m=Ea(f,g,d,u,0),p=t.axis==="ns"?[x[0],m[1]]:[m[0],x[1]],y=uf(t.axis,t.dir),M=uf(f,d),v=l==="right"?6.5:10.5,b=[p[0]-y[0]*v,p[1]-y[1]*v],C=[p[0]+M[0]*v,p[1]+M[1]*v],L=[b[0]+M[0]*v,b[1]+M[1]*v];return{startS:t.axis==="ns"?b[1]:b[0],O:L,u:[b[0]-L[0],b[1]-L[1]],v:[C[0]-L[0],C[1]-L[1]],t:0,len:v*Math.PI/2,next:{axis:f,road:g,dir:d,lane:u,s:f==="ns"?C[1]:C[0]}}}rejoinLane(t){let e=-Math.sin(t.heading),n=-Math.cos(t.heading),i=Math.abs(n)>Math.abs(e)?"ns":"ew",r=i==="ns"?Math.sign(n)||1:Math.sign(e)||1,o=i==="ns"?t.x:t.z,a=i==="ns"?ls(o):Ps(o),c=(o-a)*m0(i,r),h=Math.abs(c-ua[0])<Math.abs(c-ua[1])?0:1,l=i==="ns"?t.z:t.x,[f,d]=Ea(i,a,r,h,l);Object.assign(t,{mode:"lane",axis:i,road:a,dir:r,lane:h,s:l,turn:null,plan:null,decided:null,hit:null}),t.offset={dx:t.x-f,dz:t.z-d,dh:p0(t.heading-hf(i,r)),t:1},Math.abs(o-a)>Me+6&&this.spawnLane(t,t.x,t.z,0,200)}update(t,e,n,i,r=null){if(this.frozen)return;let o=n.x,a=n.z,c=r?{position:r.position,fx:0,fz:0}:null;if(c){r.getWorldDirection(xi),c.fx=xi.x,c.fz=xi.z;let l=Math.hypot(c.fx,c.fz)||1;c.fx/=l,c.fz/=l}for(let l of this.cars){if(l.mode==="lane"&&Math.hypot(l.x-o,l.z-a)>sM){this.spawnLane(l,o,a,140,380,c);continue}if(l.mode==="chase"){this.chase(l,t,n);continue}if(l.hit){let m=l.hit;l.x+=m.vx*t,l.z+=m.vz*t;let p=Math.exp(-1.8*t);m.vx*=p,m.vz*=p,l.heading+=m.spin*t,m.spin*=Math.exp(-2.5*t),m.t-=t,l.speed=0,this.collideWorld(l),m.t<=0&&this.rejoinLane(l);continue}let f=l.cruise,[d,u]=l.turn?[-Math.sin(l.heading),-Math.cos(l.heading)]:uf(l.axis,l.dir);if(l.turn)f=Math.min(f,8);else{let m=this.nextCross(l);if(m!==null){let p=(m-l.s)*l.dir;p<34&&l.decided!==m&&(l.decided=m,l.plan=this.planTurn(l,m));let y=p-20.5,M=Ls(l.axis==="ns"?0:1,e);y>-1&&(M===0||M===1&&y>9)&&(f=Math.min(f,Math.sqrt(Math.max(0,y-.5))*2.4)),l.plan&&(f=Math.min(f,l.plan.next.lane===0?9:7.5)),!l.plan&&!this.exitValid(l.axis,l.dir,m)&&(f=Math.min(f,Math.sqrt(Math.max(0,y))*2))}for(let p of this.cars){if(p===l||p.mode!=="lane"||p.turn||p.axis!==l.axis||p.road!==l.road||p.dir!==l.dir||p.lane!==l.lane)continue;let y=(p.s-l.s)*l.dir;y>0&&y<45&&(f=Math.min(f,Math.max(0,y-7.5)*.9))}}let g=(m,p,y,M)=>{let v=m-l.x,b=p-l.z,C=v*d+b*u,L=Math.abs(v*u-b*d);return C>0&&C<32&&L<M?(f=Math.min(f,Math.max(0,C-y)*.85),!0):!1};g(o,a,6.5,2.6)?l.speed<1&&n.kmh<5&&(l.blockedTime+=t,l.blockedTime>2.5&&(l.blockedTime=-4,i?.(l))):l.blockedTime=Math.max(0,l.blockedTime-t);for(let m of this.peds)g(m.x,m.z,5,2.4);for(let m of this.cars)(m.mode!=="lane"||m.hit)&&m!==l&&g(m.x,m.z,7,2.6);let x=f>l.speed?3.2:9;if(l.speed+=Math.sign(f-l.speed)*Math.min(Math.abs(f-l.speed),x*t),l.braking=f<l.speed-.3||l.speed<.5&&f<.5,l.turn?(l.turn.t+=l.speed*t/l.turn.len,l.turn.t>=1&&(Object.assign(l,l.turn.next),l.turn=null,l.decided=null)):(l.s+=l.speed*l.dir*t,l.plan&&(l.s-l.plan.startS)*l.dir>=0&&(l.turn=l.plan,l.plan=null)),this.place(l),l.offset){let m=l.offset;if(m.t-=t/1.6,m.t<=0)l.offset=null;else{let p=m.t*m.t;l.x+=m.dx*p,l.z+=m.dz*p,l.heading+=m.dh*p}}l.vx=d*l.speed,l.vz=u*l.speed,l.wheelSpin-=l.speed*t/l.geo.type.wheelR}this.updateParked(t),this.collidePlayer(n),this.parkTimer-=t;let h=Math.hypot(o-(this.lastParkX??o),a-(this.lastParkZ??a))>60;(this.parkTimer<=0||h)&&(this.parkTimer=.5,this.lastParkX=o,this.lastParkZ=a,this.refreshParked(o,a))}chase(t,e,n){let i=this.policePace,r=n.x-t.x,o=n.z-t.z,a=Math.hypot(r,o),c=Math.min(a/35,1.1)*i,h=n.x+n.vx*c,l=n.z+n.vz*c,f=Math.atan2(-(h-t.x),-(l-t.z)),d=10+t.speed*.6,u=this.world?.boxGrid,g=C=>{let L=t.x-Math.sin(C)*d,P=t.z-Math.cos(C)*d;return!!u&&u.near(L,P,2,T=>Math.abs(L-T.x)<T.w+1.8&&Math.abs(P-T.z)<T.d+1.8)};if(g(f)){for(let C of[.5,-.5,1,-1,1.6,-1.6])if(!g(f+C)){f+=C;break}}let x=p0(f-t.heading),m=1.9/(1+t.speed*.012);t.heading+=ke.clamp(x,-m*e,m*e);let p=Math.hypot(n.vx,n.vz),y=50*i,M=a>60?y:Math.min(y+2,p+10*i);Math.abs(x)>.9&&(M=Math.min(M,14*Math.min(1,i+.2))),a<9&&p<3&&(M=Math.min(M,2)),t.speed+=ke.clamp(M-t.speed,-14*e,9*i*e);let v=-Math.sin(t.heading),b=-Math.cos(t.heading);t.vx+=(v*t.speed-t.vx)*Math.min(1,e*5),t.vz+=(b*t.speed-t.vz)*Math.min(1,e*5),t.x+=t.vx*e,t.z+=t.vz*e,this.collideWorld(t),t.wheelSpin-=t.speed*e/t.geo.type.wheelR,t.braking=M<t.speed-1}collideWorld(t){let e=this.world?.boxGrid;e&&e.near(t.x,t.z,2,n=>{let i=n.w+1.1-Math.abs(t.x-n.x),r=n.d+1.1-Math.abs(t.z-n.z);i<=0||r<=0||(i<r?(t.x+=Math.sign(t.x-n.x)*i,t.vx*=-.2):(t.z+=Math.sign(t.z-n.z)*r,t.vz*=-.2),t.speed*=.6)}),t.x=ke.clamp(t.x,ze.minX+60,ze.maxX),t.z=ke.clamp(t.z,ze.minZ,ze.maxZ)}startChase(t){if(t.mode==="chase")return;t.mode="chase",t.turn=null,t.plan=null,t.hit=null,t.offset=null;let e=-Math.sin(t.heading),n=-Math.cos(t.heading);t.vx=e*t.speed,t.vz=n*t.speed}endChase(t){t.mode==="chase"&&(this.rejoinLane(t),t.speed=Math.min(t.speed,10))}dispatch(t,e,n){let i={position:n.position,fx:0,fz:0};n.getWorldDirection(xi);let r=Math.hypot(xi.x,xi.z)||1;i.fx=xi.x/r,i.fz=xi.z/r,this.spawnLane(t,e.x,e.z,110,240,i),this.startChase(t)}updateParked(t){for(let e of this.nearParked){if(!e.hit)continue;let n=e.hit;e.x+=n.vx*t,e.z+=n.vz*t,e.heading+=n.spin*t;let i=Math.exp(-2.4*t);n.vx*=i,n.vz*=i,n.spin*=i,Math.hypot(n.vx,n.vz)<.05&&Math.abs(n.spin)<.02&&(e.hit=null),this.writeCar(this.types[e.type],e.slot,e.x,e.z,e.heading,0)}}collidePlayer(t){let e=[-Math.sin(t.heading),-Math.cos(t.heading)],n=[...this.cars,...this.nearParked];this.lastHit=null;for(let i of n){let r=t.x-i.x,o=t.z-i.z;if(r*r+o*o>64)continue;let a=!!i.parked,c=[-Math.sin(i.heading),-Math.cos(i.heading)],l=(a?4.7:i.geo.type.length)/2-1.05;for(let f of[-1.3,1.3])for(let d of[-l,l]){let u=t.x+e[0]*f,g=t.z+e[1]*f,x=i.x+c[0]*d,m=i.z+c[1]*d,p=u-x,y=g-m,M=Math.hypot(p,y);if(M>2.15||M<1e-4)continue;p/=M,y/=M;let v=2.15-M;t.x+=p*v*.6,t.z+=y*v*.6;let b=a?i.hit?i.hit.vx:0:i.mode==="chase"?i.vx:i.hit?i.hit.vx:c[0]*i.speed,C=a?i.hit?i.hit.vz:0:i.mode==="chase"?i.vz:i.hit?i.hit.vz:c[1]*i.speed,L=(t.vx-b)*p+(t.vz-C)*y;if(L<0){let P=a?.55:.5,T=-1.3*L*P;t.vx+=T*p*(a?.8:1),t.vz+=T*y*(a?.8:1),t.impact=Math.max(t.impact,-L),this.lastHit={car:i,parked:a,police:!!i.police,speed:-L,x:(u+x)/2,z:(g+m)/2},t.registerHit?.(this.lastHit.x,this.lastHit.z,-L),(!t.contact||-L>t.contact.speed)&&(t.contact={x:this.lastHit.x,z:this.lastHit.z,speed:-L,nx:p,nz:y}),i.mode==="chase"?(i.vx-=T*p,i.vz-=T*y):(i.hit||(i.hit={vx:b,vz:C,spin:0,t:0}),i.hit.vx-=T*p,i.hit.vz-=T*y,i.hit.spin+=(bt()-.5)*Math.min(-L,20)*.25,i.hit.t=2.8,i.turn=null,i.plan=null)}else!i.hit&&!a&&i.mode!=="chase"&&(i.hit={vx:-p*1.5,vz:-y*1.5,spin:0,t:.6});i.x-=p*v*.4,i.z-=y*v*.4}}}sync(t,e,n=0){let i=0;this.cars.forEach((r,o)=>{let a=r.type,c=this.writeCar(a,r.slot,r.x,r.z,r.heading,r.wheelSpin);if(a.sign){let h=c.clone().multiply(new ne().makeTranslation(0,a.roofY+.1,.1));a.sign.setMatrixAt(r.slot,h)}if(a.bar)for(let h=0;h<2;h++){let l=c.clone().multiply(new ne().makeTranslation(h?.32:-.32,a.roofY+.09,.1));a.bar.setMatrixAt(r.slot*2+h,l);let f=r.mode==="chase"&&Math.sin(n*18+h*Math.PI)>0?1:0;a.bar.setColorAt(r.slot*2+h,f?h?Bi.setRGB(.3,.5,6):Bi.setRGB(6,.2,.15):Bi.setRGB(.04,.04,.05))}a.parts.tail.setColorAt(r.slot,Bi.setScalar(r.braking?4:1)),zs.setFromAxisAngle(Sa,r.heading),Oi.compose(xi.set(r.x,.035,r.z),zs,ho),this.blobs.setMatrixAt(i++,Oi),this.pools.setMatrixAt(o,Oi)});for(let r of this.nearParked)zs.setFromAxisAngle(Sa,r.heading),Oi.compose(xi.set(r.x,.035,r.z),zs,ho),this.blobs.setMatrixAt(i++,Oi);zs.setFromAxisAngle(Sa,e.heading),Oi.compose(xi.set(e.x,e.y+.035,e.z),zs,ho.set(1.05,1,1)),ho.set(1,1,1),this.blobs.setMatrixAt(i++,Oi),this.blobs.count=i,this.blobs.instanceMatrix.needsUpdate=!0,this.pools.instanceMatrix.needsUpdate=!0;for(let r of this.meshes)r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0);this.headMat.emissiveIntensity=1+t*8,this.tailMat.emissiveIntensity=.8+t*2.2,this.taxiSignMat.emissiveIntensity=.3+t*2.5,this.poolMat.opacity=t*.55}nearest(t,e){let n=1/0;for(let i of this.cars)n=Math.min(n,Math.hypot(i.x-t,i.z-e));return n}};var ri=62.5,uo=ri*2,mr=uo*4,pr=140,cM=["#f1c7a5","#e0ac85","#c68b62","#a26a45","#7a4b2f","#5a3824"],hM=["#e9e6dd","#20242a","#c23b2e","#2d5d8a","#f2c14e","#3f7a52","#7a4a8c","#e07a4a","#9fb3c4","#d4d0c4","#1f3b5c","#a83c62"],uM=["#26303d","#1b1d20","#5c6b7a","#c9b79a","#3b4652","#6f5b45","#2f3b2c","#e5e1d6"];function fM(){let s=[],t=(e,n,i,r,o,a)=>{e.translate(n,i,r);let c=e.index?e.toNonIndexed():e,h=c.attributes.position.count;c.setAttribute("aPart",new be(new Float32Array(h).fill(o),1)),c.setAttribute("aRegion",new be(new Float32Array(h).fill(a),1)),c.attributes.uv&&c.deleteAttribute("uv"),s.push(c)};for(let[e,n]of[[-1,1],[1,2]])t(new pe(.15,.82,.17),e*.1,.49,0,n,2),t(new pe(.16,.09,.28),e*.1,.045,-.05,n,3);t(new pe(.36,.2,.21),0,.96,0,0,2),t(new pe(.42,.56,.23),0,1.33,0,0,1),t(new De(.05,.055,.1,8),0,1.65,0,0,0),t(new zn(.115,12,10),0,1.79,-.01,0,0),t(new zn(.122,12,8,0,Math.PI*2,0,Math.PI*.55),0,1.81,.012,0,4);for(let[e,n]of[[-1,3],[1,4]])t(new pe(.1,.34,.12),e*.27,1.43,0,n,1),t(new pe(.085,.3,.1),e*.275,1.11,0,n,0);return rn(s)}var g0=`
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
}`;function dM(){let s=new Yt({color:16777215,roughness:.82});s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${g0}
attribute vec3 aShirt; attribute vec3 aPants; attribute vec4 aSkin; varying vec3 vPedCol;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
pedPose();
objectNormal = pedBody * (pedLimb * objectNormal);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed = pedTransform(transformed);
        vec3 hair = mix(vec3(0.05, 0.035, 0.02), vec3(0.55, 0.42, 0.22), aSkin.w);
        vPedCol = aRegion < 0.5 ? aSkin.rgb : aRegion < 1.5 ? aShirt : aRegion < 2.5 ? aPants : aRegion < 3.5 ? vec3(0.06) : hair;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPedCol;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = vPedCol;`)},s.customProgramCacheKey=()=>"pedestrian";let t=new Vr({depthPacking:_c});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${g0}`).replace("#include <begin_vertex>",`#include <begin_vertex>
pedPose();
transformed = pedTransform(transformed);`)},t.customProgramCacheKey=()=>"pedestrian-depth",{mat:s,depth:t}}function pf(s,t,e,n){let i=(e%mr+mr)%mr,r=Math.floor(i/uo),o=i-r*uo;return r===0?(n.x=s-ri+o,n.z=t-ri,n.dx=1,n.dz=0):r===1?(n.x=s+ri,n.z=t-ri+o,n.dx=0,n.dz=1):r===2?(n.x=s+ri-o,n.z=t+ri,n.dx=-1,n.dz=0):(n.x=s-ri,n.z=t+ri-o,n.dx=0,n.dz=-1),n}var ih=s=>s*uo,v0=[[-1,-1],[1,-1],[1,1],[-1,1]];function x0(s,t){return v0.findIndex(([e,n])=>e===s&&n===t)}var sh=class{constructor(t){let{mat:e,depth:n}=dM(),i=fM();this.aWalk=new fn(new Float32Array(pr*4),4).setUsage(wi);let r=new Float32Array(pr*3),o=new Float32Array(pr*3),a=new Float32Array(pr*4),c=new Ht;for(let h=0;h<pr;h++)r.set(c.set(ye(hM)).toArray(),h*3),o.set(c.set(ye(uM)).toArray(),h*3),a.set([...c.set(ye(cM)).toArray(),bt()<.2?1:bt()*.4],h*4);i.setAttribute("aWalk",this.aWalk),i.setAttribute("aShirt",new fn(r,3)),i.setAttribute("aPants",new fn(o,3)),i.setAttribute("aSkin",new fn(a,4)),this.mesh=new Be(i,e,pr),this.mesh.customDepthMaterial=n,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(wi),this.mesh.name="pedestrians",t.add(this.mesh),this.peds=[],this.events=[],this.onRoad=[],this.tmp={x:0,z:0,dx:0,dz:0},this.m=new ne,this.q=new Ge,this.e=new Dn(0,0,0,"YXZ");for(let h=0;h<pr;h++){let l={i:h,scale:Mt(.9,1.08)};this.place(l,Nn.x,Nn.z,!0),this.peds.push(l)}}place(t,e,n,i=!1){let r=[],o=ar(e),a=fa(n),c=i?330:300;for(let f=o-320;f<=o+320;f+=160)for(let d=a-320;d<=a+320;d+=160){if(!to.includes(f)||!Cs.includes(d)||Math.hypot(f-e,d-n)>=c)continue;let u=1+Math.round(os[Ui(f,d)][2]*3);for(let g=0;g<u;g++)r.push([f,d])}let[h,l]=r.length?ye(r):[o,a];Object.assign(t,{cx:h,cz:l,t:bt()*mr,dir:we(.5)?1:-1,speed:Mt(1.05,1.55),lateral:Mt(-.9,.9),state:we(.12)?"idle":"walk",timer:Mt(3,9),phase:bt()*6,amp:0,fall:0,lean:0,vx:0,vz:0,cross:null,x:0,z:0,heading:0}),this.pathPoint(t),t.x=t.px,t.z=t.pz}pathPoint(t){let e=pf(t.cx,t.cz,t.t,this.tmp),n=e.dz,i=-e.dx;t.px=e.x+n*t.lateral,t.pz=e.z+i*t.lateral,t.pdx=e.dx*t.dir,t.pdz=e.dz*t.dir}tryCross(t,e,n){let[i,r]=v0[e],o=[],a=t.cx+i*160,c=t.cz+r*160;if(to.includes(a)&&o.push({axis:0,tx:a,tz:t.cz,corner:x0(-i,r)}),Cs.includes(c)&&o.push({axis:1,tx:t.cx,tz:c,corner:x0(i,-r)}),!o.length||!we(.45))return!1;let h=ye(o),l=pf(t.cx,t.cz,ih(e),{}),f=pf(h.tx,h.tz,ih(h.corner),{});return t.cross={...h,ax:l.x,az:l.z,bx:f.x,bz:f.z,f:0,len:Math.hypot(f.x-l.x,f.z-l.z)},t.state="wait",t.timer=25,!0}update(t,e,n){let i=-Math.sin(n.heading),r=-Math.cos(n.heading),o=Math.cos(n.heading),a=-Math.sin(n.heading),c=Math.abs(n.speed);this.onRoad.length=0,this.events.length=0;let h=this.aWalk.array;for(let l of this.peds){Math.hypot(l.x-n.x,l.z-n.z)>330&&(l.state==="walk"||l.state==="idle")&&this.place(l,n.x,n.z);let f=0,d=l.x-n.x,u=l.z-n.z,g=d*i+u*r,x=d*o+u*a;if(c>4&&g>-1&&g<c*1.25+5&&Math.abs(x)<2.6&&Math.abs(n.y-le)<2.5&&l.state!=="down"&&l.state!=="getup"&&l.state!=="dodge"){let v=Math.abs(x)>.2?Math.sign(x):we(.5)?1:-1;l.vx=o*v*5.2+i*.6,l.vz=a*v*5.2+r*.6,l.state="dodge",l.timer=.55,l.resume=l.cross?"cross":"return"}let p=Math.hypot(l.x-(n.x+i*1.3*Math.sign(g||1)),l.z-(n.z+r*1.3*Math.sign(g||1)));if(l.state!=="down"&&l.state!=="getup"&&Math.hypot(d,u)<3&&p<1.4)if(c>5)l.state="down",l.timer=2.6,l.vx=n.vx*.35+o*Math.sign(x||1)*1.5,l.vz=n.vz*.35+a*Math.sign(x||1)*1.5,l.heading=Math.atan2(-l.vx,-l.vz)+Math.PI,this.events.push({type:"hit",x:l.x,z:l.z,speed:c});else{let v=Math.max(p,.01);l.x+=(l.x-n.x)/Math.hypot(d,u)*(1.4-v)*.5,l.z+=(l.z-n.z)/Math.hypot(d,u)*(1.4-v)*.5}switch(l.state){case"idle":{l.timer-=t,l.timer<=0&&(l.state="walk",l.timer=Mt(6,20));break}case"walk":{f=l.speed;let v=l.t;l.t+=l.dir*l.speed*t;let b=Math.floor(v/uo),C=Math.floor(l.t/uo);if(b!==C){let L=((l.dir>0?C:b)%4+4)%4;this.tryCross(l,L,e)&&(l.t=ih(L))}l.t=(l.t%mr+mr)%mr,l.timer-=t,l.timer<=0&&!l.cross&&(we(.25)?(l.state="idle",l.timer=Mt(2,6)):(l.timer=Mt(5,20),we(.2)&&(l.dir*=-1))),this.pathPoint(l),l.x+=(l.px-l.x)*Math.min(1,t*6),l.z+=(l.pz-l.z)*Math.min(1,t*6),l.heading=Math.atan2(-l.pdx,-l.pdz);break}case"wait":{l.timer-=t;let v=l.cross;l.x+=(v.ax-l.x)*Math.min(1,t*3),l.z+=(v.az-l.z)*Math.min(1,t*3),l.heading=Math.atan2(-(v.bx-v.ax),-(v.bz-v.az));let b=Ls(v.axis,e),C=(e%28+28)%28,L=v.axis===0?C:(C+14)%28;b===0&&L>=13&&L<17?l.state="cross":l.timer<=0&&(l.cross=null,l.state="walk");break}case"cross":{let v=l.cross;f=1.85,v.f=Math.min(1,v.f+f*t/v.len);let b=v.ax+(v.bx-v.ax)*v.f,C=v.az+(v.bz-v.az)*v.f;l.x+=(b-l.x)*Math.min(1,t*8),l.z+=(C-l.z)*Math.min(1,t*8),l.heading=Math.atan2(-(v.bx-v.ax),-(v.bz-v.az)),this.onRoad.push(l),v.f>=1&&(l.cx=v.tx,l.cz=v.tz,l.t=ih(v.corner),l.cross=null,l.state="walk",l.dir=we(.5)?1:-1);break}case"dodge":{f=5,l.x+=l.vx*t,l.z+=l.vz*t,l.vx*=Math.exp(-2.5*t),l.vz*=Math.exp(-2.5*t),l.heading=Math.atan2(-l.vx,-l.vz),l.timer-=t,l.timer<=0&&(l.state=l.resume==="cross"&&l.cross?"cross":"return");break}case"down":{l.x+=l.vx*t,l.z+=l.vz*t;let v=Math.exp(-3.5*t);l.vx*=v,l.vz*=v,l.fall=Math.min(1.5,l.fall+t*6),l.timer-=t,l.timer<=0&&(l.state="getup",l.timer=.9);break}case"getup":{l.fall=Math.max(0,l.fall-t*1.9),l.timer-=t,l.timer<=0&&(l.fall=0,l.state=l.cross?"cross":"return");break}case"return":{this.pathPoint(l);let v=l.px-l.x,b=l.pz-l.z,C=Math.hypot(v,b);if(f=2.2,C<.25){l.state="walk";break}l.x+=v/C*Math.min(C,f*t),l.z+=b/C*Math.min(C,f*t),l.heading=Math.atan2(-v,-b),Math.abs(l.x-l.cx)<ri+1&&Math.abs(l.z-l.cz)<ri+1;break}}(l.state==="dodge"||l.state==="return")&&(Math.abs(l.x-l.cx)>ri+3||Math.abs(l.z-l.cz)>ri+3)&&this.onRoad.push(l);let y=l.state==="down"||l.state==="getup"?0:f;l.amp+=((y>.1?Math.min(.45+y*.12,1.05):0)-l.amp)*Math.min(1,t*6),l.phase+=t*(y>.1?3.2+y*1.6:0),l.lean+=((y>3?.18:.02)-l.lean)*Math.min(1,t*5),h[l.i*4]=l.phase,h[l.i*4+1]=l.amp,h[l.i*4+2]=l.lean,h[l.i*4+3]=l.fall;let M=l.state==="cross"||l.state==="down"||l.state==="dodge"||l.state==="getup"?Math.abs(l.x-l.cx)<ri+4.5&&Math.abs(l.z-l.cz)<ri+4.5?le:.02:le;this.q.setFromEuler(this.e.set(0,l.heading,0)),this.m.compose(new I(l.x,M,l.z),this.q,new I(l.scale,l.scale,l.scale)),this.mesh.setMatrixAt(l.i,this.m)}this.mesh.instanceMatrix.needsUpdate=!0,this.aWalk.needsUpdate=!0}};var pM=`
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
}`,mM=`
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
}`,gM=`
uniform sampler2D map;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor * t.a * vAlpha, 1.0);
}`,gr=class{constructor(t,e,{texture:n,additive:i=!1,drag:r=1.5,gravity:o=0,grow:a=1.5}){this.max=e,this.drag=r,this.gravity=o,this.grow=a,this.count=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.rot=new Float32Array(e),this.spin=new Float32Array(e),this.col=new Float32Array(e*3);let c=new ea,h=new sn(1,1);c.index=h.index,c.setAttribute("position",h.attributes.position),c.setAttribute("uv",h.attributes.uv),this.aPos=new fn(new Float32Array(e*3),3).setUsage(wi),this.aData=new fn(new Float32Array(e*4),4).setUsage(wi),this.aColor=new fn(new Float32Array(e*3),3).setUsage(wi),c.setAttribute("aPos",this.aPos),c.setAttribute("aData",this.aData),c.setAttribute("aColor",this.aColor),c.instanceCount=0,this.uniforms={map:{value:n},light:{value:new Ht(1,1,1)}};let l=new nn({uniforms:this.uniforms,vertexShader:pM,fragmentShader:i?gM:mM,transparent:!0,depthWrite:!1,blending:i?ai:ji});this.mesh=new $t(c,l),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i?6:5,this.mesh.userData.noAO=!0,this.mesh.layers.set(1),this.geo=c,t.add(this.mesh)}emit(t,e,n,i,r,o,a,c,h,l=1,f=1,d=1){let u=this.count;if(u>=this.max){let g=0;for(let x=1;x<this.max;x++)this.life[x]<this.life[g]&&(g=x);u=g}else this.count++;this.p.set([t,e,n],u*3),this.v.set([i,r,o],u*3),this.col.set([l,f,d],u*3),this.life[u]=this.maxLife[u]=c,this.size[u]=a,this.alpha[u]=h,this.rot[u]=bt()*Math.PI*2,this.spin[u]=(bt()-.5)*1.2}update(t){let e=Math.exp(-this.drag*t),n=0;for(let i=0;i<this.count;i++){if(this.life[i]-=t,this.life[i]<=0)continue;if(n!==i){for(let[c,h]of[[this.p,3],[this.v,3],[this.col,3]])c.copyWithin(n*h,i*h,i*h+h);this.life[n]=this.life[i],this.maxLife[n]=this.maxLife[i],this.size[n]=this.size[i],this.alpha[n]=this.alpha[i],this.rot[n]=this.rot[i],this.spin[n]=this.spin[i]}let r=n*3;this.v[r]*=e,this.v[r+1]=this.v[r+1]*e+this.gravity*t,this.v[r+2]*=e,this.p[r]+=this.v[r]*t,this.p[r+1]+=this.v[r+1]*t,this.p[r+2]+=this.v[r+2]*t,this.rot[n]+=this.spin[n]*t;let o=1-this.life[n]/this.maxLife[n],a=Math.min(o*6,1)*(1-o)*(1-o);this.aPos.array.set([this.p[r],this.p[r+1],this.p[r+2]],r),this.aData.array.set([this.size[n]*(1+o*this.grow),this.alpha[n]*a,this.rot[n],o],n*4),this.aColor.array.set([this.col[r],this.col[r+1],this.col[r+2]],r),n++}this.count=n,this.geo.instanceCount=n,this.aPos.needsUpdate=this.aData.needsUpdate=this.aColor.needsUpdate=!0}};function y0(s,t){let e=xn(t,128,128,(i,r,o)=>{let a=i.createImageData(r,o);for(let c=0;c<o;c++)for(let h=0;h<r;h++){let l=(h-r/2)/(r/2),f=(c-o/2)/(o/2),d=Math.sqrt(l*l+f*f),u=.65+.35*Math.sin(h*.31+Math.sin(c*.23)*3)*Math.sin(c*.27+Math.cos(h*.19)*2),g=Math.max(0,1-d)**1.6*u,x=(c*r+h)*4;a.data[x]=a.data[x+1]=a.data[x+2]=200+u*55,a.data[x+3]=Math.min(255,g*255)}i.putImageData(a,0,0)},{srgb:!1}),n=xn(t,64,64,(i,r,o)=>{let a=i.createRadialGradient(r/2,o/2,0,r/2,o/2,r/2);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,255,255,0.6)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,r,o)},{srgb:!1});return{smoke:new gr(s,420,{texture:e,drag:1.1,gravity:.35,grow:2.6}),dust:new gr(s,200,{texture:e,drag:1.6,gravity:-.2,grow:2}),sparks:new gr(s,160,{texture:n,additive:!0,drag:.6,gravity:-9.8,grow:-.6}),flames:new gr(s,160,{texture:n,additive:!0,drag:3,gravity:.5,grow:-.4}),water:new gr(s,360,{texture:e,drag:.35,gravity:-9.8,grow:1.6})}}var rh=class{constructor(t,e=900){this.max=e,this.index=0;let n=new sn(1,1);n.rotateX(-Math.PI/2),this.mat=new Yt({color:328965,transparent:!0,opacity:.55,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),this.mesh=new Be(n,this.mat,e),this.mesh.instanceMatrix.setUsage(wi),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.renderOrder=1,this.mesh.userData.noAO=!0;let i=new ne().makeScale(0,0,0);for(let r=0;r<e;r++)this.mesh.setMatrixAt(r,i);this.last=new Map,t.add(this.mesh),this.m=new ne,this.q=new Ge,this.v=new I,this.s=new I,this.up=new I(0,1,0)}add(t,e,n,i,r,o=.26){let a=this.last.get(t);if(!r){this.last.delete(t);return}if(a){let c=e-a[0],h=i-a[2],l=Math.hypot(c,h);if(l<.35)return;l<4&&(this.q.setFromAxisAngle(this.up,Math.atan2(c,h)),this.m.compose(this.v.set((e+a[0])/2,n+.03,(i+a[2])/2),this.q,this.s.set(o,1,l+.05)),this.mesh.setMatrixAt(this.index,this.m),this.index=(this.index+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0)}this.last.set(t,[e,n,i])}};var Ta=ke.damp,mf=["CHASE CAMERA","FAR CHASE CAMERA","HOOD CAMERA","CINEMATIC CAMERA"],oh=class{constructor(t){this.camera=t,this.mode=0,this.pos=new I,this.look=new I,this.desired=new I,this.target=new I,this.yaw=0,this.shake=0,this.cine=null,this.cineTimer=0,this.baseFov=55,this.rumble=0,this.clock=0}snap(t){this.yaw=t.heading,this.cine=null,this.compute(t,0),this.pos.copy(this.desired),this.look.copy(this.target),this.apply(0)}compute(t,e){let n=Math.min(Math.abs(t.speed)/55,1),i=Math.hypot(t.vx,t.vz)>4?Math.atan2(-t.vx,-t.vz):t.heading,r=t.heading+_0(i-t.heading)*.35;t.speed<-1&&(r=t.heading),this.yaw=e?this.yaw+_0(r-this.yaw)*(1-Math.exp(-4.5*e)):r;let o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=t.group.position;if(this.mode===2){let h=Math.sin(t.heading),l=Math.cos(t.heading);this.desired.set(c.x-h*.15,c.y+1.18,c.z-l*.15),this.target.set(c.x-h*30,c.y+.9,c.z-l*30)}else if(this.mode===3)this.cinematic(t,e);else{let h=this.mode===1,l=(h?11.5:7.4)+n*1.6,f=(h?4.6:2.45)+n*.25;this.desired.set(c.x+o*l,c.y+f,c.z+a*l),this.target.set(c.x-o*6,c.y+1.15,c.z-a*6)}}cinematic(t,e){let n=t.group.position;this.cineTimer-=e;let i=-Math.sin(t.heading),r=-Math.cos(t.heading);if(!this.cine||this.cine.distanceTo(n)>70||this.cineTimer<=0){let a=Math.random()<.5?-1:1,c=28+Math.abs(t.speed)*1.6;this.cine=new I(n.x+i*c+r*a*7,n.y+.7+Math.random()*2.5,n.z+r*c-i*a*7),this.cineTimer=7,this.pos.copy(this.cine)}this.desired.copy(this.cine),this.target.set(n.x,n.y+.8,n.z)}apply(t){let e=this.camera;if(e.position.copy(this.pos),this.shake>.001){let n=this.shake;e.position.x+=(Math.random()-.5)*n,e.position.y+=(Math.random()-.5)*n,e.position.z+=(Math.random()-.5)*n,this.shake=Ta(this.shake,0,6,t||.016)}if(this.rumble>5e-4){let n=this.clock,i=this.rumble;e.position.y+=(Math.sin(n*37)*.6+Math.sin(n*61.3)*.4)*i,e.position.x+=(Math.sin(n*29.1+1.3)*.5+Math.sin(n*53.7)*.3)*i*.6}e.lookAt(this.look)}update(t,e){this.compute(t,e),this.mode===2?(this.pos.copy(this.desired),this.look.copy(this.target)):this.mode===3?(this.pos.lerp(this.desired,1-Math.exp(-3*e)),this.look.lerp(this.target,1-Math.exp(-10*e))):(this.pos.x=Ta(this.pos.x,this.desired.x,9,e),this.pos.z=Ta(this.pos.z,this.desired.z,9,e),this.pos.y=Ta(this.pos.y,this.desired.y,6,e),this.look.lerp(this.target,1-Math.exp(-12*e)));let n=Math.min(Math.abs(t.speed)/60,1)*12,i=(this.mode===2?68:this.mode===3?40:this.baseFov)+(this.mode===3?0:n+(t.boosting?7:0));this.camera.fov=Ta(this.camera.fov,i,3,e),this.camera.updateProjectionMatrix(),this.clock+=e;let r=ke.clamp((Math.abs(t.speed)-26)/40,0,1),o=t.surface==="road"?1:2.2;this.rumble=this.mode===3?0:(r*.02+(t.boosting?.014:0))*o*(this.mode===2?.6:1),t.boosting&&(this.shake=Math.max(this.shake,.02)),this.apply(e)}orbit(t,e){let n=t.group.position,i=2.25+Math.sin(e*.05)*.5;this.camera.position.set(n.x+Math.sin(i)*9.5,n.y+1.6+Math.sin(e*.11)*.25,n.z+Math.cos(i)*9.5),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.camera.lookAt(n.x-1.5,n.y+1.1,n.z-2)}};function _0(s){return Math.atan2(Math.sin(s),Math.cos(s))}var Si=[];for(let s=0;s<Ue.length;s++)for(let t=0;t<Ne.length;t++)Si.push({x:Ue[s],z:Ne[t],i:s,j:t});var Aa=(s,t)=>s>=0&&t>=0&&s<Ue.length&&t<Ne.length?s*Ne.length+t:-1;function M0(s,t){let e=null;return Ue.forEach((n,i)=>{let r=Math.min(Math.max(t,Ne[0]),Ne[Ne.length-1]),o=Math.hypot(s-n,t-r);if(!e||o<e.d){let a=Ne.findIndex(h=>h>=r);a<0&&(a=Ne.length-1);let c=Ne[a]===r?a:Math.max(0,a-1);e={d:o,x:n,z:r,ends:[Aa(i,c),Aa(i,a)]}}}),Ne.forEach((n,i)=>{let r=Math.min(Math.max(s,Ue[0]),Ue[Ue.length-1]),o=Math.hypot(s-r,t-n);if(o<e.d){let a=Ue.findIndex(h=>h>=r);a<0&&(a=Ue.length-1);let c=Ue[a]===r?a:Math.max(0,a-1);e={d:o,x:r,z:n,ends:[Aa(c,i),Aa(a,i)]}}}),e}function gf(s,t,e,n){let i=M0(s,t),r=M0(e,n),o=Si.length,a=o,c=o+1,h=m=>m===a?i:m===c?r:Si[m],l=m=>{if(m===a)return i.ends.map(y=>[y,Math.hypot(Si[y].x-i.x,Si[y].z-i.z)]);let p=[];if(m<o){let{i:y,j:M}=Si[m];for(let[v,b]of[[1,0],[-1,0],[0,1],[0,-1]]){let C=Aa(y+v,M+b);C>=0&&p.push([C,Math.hypot(Si[C].x-Si[m].x,Si[C].z-Si[m].z)])}r.ends.includes(m)&&p.push([c,Math.hypot(r.x-Si[m].x,r.z-Si[m].z)])}return p};if(i.ends[0]===r.ends[0]&&i.ends[1]===r.ends[1])return[[s,t],[i.x,i.z],[r.x,r.z],[e,n]];let d=new Float64Array(o+2).fill(1/0),u=new Int32Array(o+2).fill(-1),g=new Uint8Array(o+2);for(d[a]=0;;){let m=-1,p=1/0;for(let y=0;y<o+2;y++)!g[y]&&d[y]<p&&(m=y,p=d[y]);if(m<0||m===c)break;g[m]=1;for(let[y,M]of l(m)){let v=p+M;v<d[y]&&(d[y]=v,u[y]=m)}}let x=[];for(let m=c;m>=0;m=u[m]){let p=h(m);if(x.unshift([p.x,p.z]),m===a)break}return x.unshift([s,t]),x.push([e,n]),x}function b0(s){let t=0;for(let e=1;e<s.length;e++)t+=Math.hypot(s[e][0]-s[e-1][0],s[e][1]-s[e-1][1]);return t}var xf=s=>document.getElementById(s),Fe={x0:-760,x1:qe+140,z0:ze.minZ-90,z1:ze.maxZ+90},ah=.6;function xM(s){let t=document.createElement("canvas");t.width=Math.round((Fe.x1-Fe.x0)*ah),t.height=Math.round((Fe.z1-Fe.z0)*ah);let e=t.getContext("2d");e.scale(ah,ah),e.translate(-Fe.x0,-Fe.z0);let n=Fe.x1-Fe.x0,i=Fe.z1-Fe.z0;e.fillStyle="#16343f",e.fillRect(Fe.x0,Fe.z0,n,i),e.fillStyle="#243229",e.fillRect(ti,Fe.z0,Fe.x1-ti,i),e.fillStyle="#1e2a2e",e.fillRect(ti,ze.minZ,ze.maxX-ti,ze.maxZ-ze.minZ),e.fillStyle="#6d6047",e.fillRect(ti,Fe.z0,Un-ti,i),e.fillStyle="#2d4433",e.fillRect(Un,Fe.z0,dn.to-Un,i);for(let[r,o,a]of Vi())e.fillStyle="#29353a",e.fillRect(r-Ei/2,o-Ei/2,Ei,Ei),a.kind==="park"&&(e.fillStyle="#2f4a35",e.fillRect(r-55,o-55,110,110)),a.kind==="parking"&&(e.fillStyle="#323b40",e.fillRect(r-45,o-45,104,104));e.fillStyle="#3e4f56";for(let r of s)e.fillRect(r.x-r.w,r.z-r.d,r.w*2,r.d*2);e.fillStyle="#5b6b6e";for(let r of Ue)e.fillRect(r-Me,He-Me,Me*2,$e-He+Me*2);for(let r of Ne)e.fillRect(Qe-Me,r-Me,qe-Qe+Me*2,Me*2);e.fillStyle="#7d6a52";for(let r of Wn)e.fillRect(r.x1,r.z-r.halfWidth,r.rampStart-r.x1,r.halfWidth*2);return t}function vM(){let s={};for(let[n,i]of Vi()){let r=Ui(n,i),o=s[r]||(s[r]=[0,0,0]);o[0]+=n,o[1]+=i,o[2]++}let t={eastside:[-40,-420],foothills:[-60,380],seaview:[0,60],palm:[40,-40],marina:[60,0]},e=Object.entries(s).map(([n,[i,r,o]])=>[os[n][0],i/o+(t[n]?.[0]||0),r/o+(t[n]?.[1]||0)]);return e.push([os.ocean[0],-385,0]),e}var lh=class{constructor(t){this.canvas=xf("minimap"),this.ctx=this.canvas.getContext("2d"),this.mapImage=xM(t),this.expanded=!1,this.labels=vM(),this.view={zoom:1,x:(Fe.x0+Fe.x1)/2,z:(Fe.z0+Fe.z1)/2},this.raceKey="",this.route=null,this.routeKey="",this.routeAt=[0,0],this.raceRoute=null,this.els={};for(let e of["speed","gear","tach-fill","boost-fill","district","road-name","heading","race-time","checkpoint-distance","clock","rpm-readout"])this.els[e]=xf(e);this.last={}}set(t,e){this.last[t]!==e&&(this.last[t]=e,this.els[t]&&(this.els[t].textContent=e))}updateRoute(t,e){let n=null;if(e.mode==="race"&&e.checkpoint<e.route.length?n=e.route[e.checkpoint]:e.waypoint&&(n=e.waypoint),!n){this.route=null,this.routeKey="";return}let i=n.join(",")+(e.mode==="race"?":"+e.checkpoint:""),r=Math.hypot(t.x-this.routeAt[0],t.z-this.routeAt[1]);if(i!==this.routeKey||r>12){this.route=gf(t.x,t.z,n[0],n[1]),this.routeKey=i,this.routeAt=[t.x,t.z];let o=e.mode==="race"?`${e.raceId}:${e.checkpoint}`:"";if(o!==this.raceKey&&(this.raceKey=o,this.raceRoute=null,o)){this.raceRoute=[];for(let a=e.checkpoint;a<e.route.length-1;a++)this.raceRoute.push(gf(...e.route[a],...e.route[a+1]))}}}get routeDistance(){return this.route?b0(this.route):0}setWanted(t,e){let n=t+(e?"e":"");if(this.last.wanted===n)return;this.last.wanted=n;let i=xf("wanted");i.classList.toggle("hidden",t===0),i.classList.toggle("evading",e),i.querySelectorAll("i").forEach((r,o)=>r.classList.toggle("on",o<t))}update(t,e,n,i,r){let o=Math.round(t.kmh);this.set("speed",String(o).padStart(3,"0")),this.set("gear",t.gear<0?"R":o<1&&!t.throttle?"N":String(t.gear));let a=t.def?.redline??7400;this.els["tach-fill"].style.width=Math.min(100,t.rpm/a*100).toFixed(1)+"%",this.els["tach-fill"].classList.toggle("redline",t.rpm>a-800),this.els["boost-fill"].style.width=t.nitro.toFixed(1)+"%",this.els["boost-fill"].classList.toggle("active",t.boosting),this.set("rpm-readout",(t.rpm/1e3).toFixed(1));let[c]=Lc(t.x,t.z);this.set("district",c),this.set("road-name",wp(t.x,t.z));let h=["N","NW","W","SW","S","SE","E","NE"];this.set("heading",h[(Math.round(t.heading/(Math.PI/4))%8+8)%8]),this.set("clock",i.clockLabel),this.updateRoute(t,e),e.mode==="race"&&(this.set("race-time",Ra(e.raceTime)),e.route[e.checkpoint]&&this.set("checkpoint-distance",Math.round(this.routeDistance)+" M")),r&&this.setWanted(r.level,r.evading),this.drawMap(t,e,n,r)}mapScale(){return Math.min(this.canvas.width/(Fe.x1-Fe.x0),this.canvas.height/(Fe.z1-Fe.z0))*this.view.zoom}mapPoint(t,e){let n=this.canvas.getBoundingClientRect(),i=(t-n.left)/n.width*this.canvas.width,r=(e-n.top)/n.height*this.canvas.height,o=this.mapScale();return[(i-this.canvas.width/2)/o+this.view.x,(r-this.canvas.height/2)/o+this.view.z]}clampView(){let t=this.view;t.zoom=Math.min(Math.max(t.zoom,1),8);let e=(Fe.x1-Fe.x0)/2*(1-1/t.zoom),n=(Fe.z1-Fe.z0)/2*(1-1/t.zoom);t.x=Math.min(Math.max(t.x,(Fe.x0+Fe.x1)/2-e),(Fe.x0+Fe.x1)/2+e),t.z=Math.min(Math.max(t.z,(Fe.z0+Fe.z1)/2-n),(Fe.z0+Fe.z1)/2+n)}zoomAt(t,e,n){if(!this.expanded)return;let i=this.canvas.getBoundingClientRect(),[r,o]=this.mapPoint(e??i.left+i.width/2,n??i.top+i.height/2),a=this.view.zoom;this.view.zoom=Math.min(Math.max(a*t,1),8);let c=a/this.view.zoom;this.view.x=r+(this.view.x-r)*c,this.view.z=o+(this.view.z-o)*c,this.clampView()}panBy(t,e){if(!this.expanded)return;let n=this.canvas.getBoundingClientRect(),i=this.mapScale()*(n.width/this.canvas.width);this.view.x-=t/i,this.view.z-=e/i,this.clampView()}pick(t,e,n){if(!this.expanded)return;let[i,r]=this.mapPoint(t,e);n.waypoint&&Math.hypot(n.waypoint[0]-i,n.waypoint[1]-r)<40/this.view.zoom+12?n.waypoint=null:n.waypoint=[Math.min(Math.max(i,Qe),qe),Math.min(Math.max(r,He),$e)],this.routeKey=""}polyline(t,e){t.beginPath(),e.forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke()}drawMap(t,e,n,i){let{canvas:r,ctx:o}=this;if(this.expanded){let u=r.getBoundingClientRect(),g=Math.min(devicePixelRatio||1,2),x=Math.round(u.width*g),m=Math.round(u.height*g);if(x>0&&m>0&&(r.width!==x||r.height!==m)&&(r.width=x,r.height=m),this.fitPending&&x>0){this.fitPending=!1;let p=Math.min(x/(Fe.x1-Fe.x0),m/(Fe.z1-Fe.z0));this.view.zoom=Math.min(Math.max(x/(ze.maxX-Fe.x0-260)/p,1),8),this.clampView()}}let a=r.width,c=r.height;if(o.setTransform(1,0,0,1,0,0),o.fillStyle="#16343f",o.fillRect(0,0,a,c),o.save(),this.expanded){let u=this.mapScale();o.translate(a/2,c/2),o.scale(u,u),o.translate(-this.view.x,-this.view.z)}else o.translate(a/2,c*.62),o.scale(.85,.85),o.rotate(t.heading),o.translate(-t.x,-t.z);o.imageSmoothingQuality="high",o.drawImage(this.mapImage,Fe.x0,Fe.z0,Fe.x1-Fe.x0,Fe.z1-Fe.z0);let h=this.expanded?r.width/Math.max(r.getBoundingClientRect().width,1):1,l=this.expanded?.95*h/this.mapScale():1;if(this.expanded){o.fillStyle="#fff4dc88",o.font=`700 ${13*h/this.mapScale()}px "Barlow Condensed", Barlow, Arial`,o.textAlign="center",o.textBaseline="middle";for(let[u,g,x]of this.labels)u==="OCEAN DRIVE"?(o.save(),o.translate(g,x),o.rotate(-Math.PI/2),o.fillText(u,0,0),o.restore()):o.fillText(u,g,x)}if(o.lineJoin=o.lineCap="round",this.raceRoute){o.strokeStyle="#ffc68650",o.lineWidth=5*l;for(let u of this.raceRoute)this.polyline(o,u)}if(this.route){let u=e.mode==="race"?"#ffb46b":"#c690ff";o.strokeStyle="#0b141acc",o.lineWidth=11*l,this.polyline(o,this.route),o.strokeStyle=u,o.lineWidth=7*l,this.polyline(o,this.route)}o.fillStyle="#c9d3d6";for(let u of n.cars)u.police||o.fillRect(u.x-2.5*l,u.z-2.5*l,5*l,5*l);let f=Math.floor(performance.now()/180)%2;for(let u of n.police){let g=u.mode==="chase";g&&i&&(o.fillStyle=i.evading?"#3a6cff14":"#ff3a4a12",o.beginPath(),o.arc(u.x,u.z,i.sightRange(),0,Math.PI*2),o.fill()),o.fillStyle=g?f?"#ff4458":"#4a7dff":"#5f8dff",o.beginPath(),o.arc(u.x,u.z,(g?6:4)*l,0,Math.PI*2),o.fill()}if(e.mode==="race"&&e.checkpoint<e.route.length&&e.route.forEach(([u,g],x)=>{x<e.checkpoint||(o.beginPath(),o.arc(u,g,(x===e.checkpoint?11:6)*l,0,Math.PI*2),o.fillStyle=x===e.checkpoint?"#ffc686":"#ffc68677",o.fill(),this.expanded&&(o.fillStyle="#17212a",o.font=`700 ${9*l}px Barlow, Arial`,o.textAlign="center",o.textBaseline="middle",o.fillText(String(x+1),u,g+1)))}),e.waypoint&&e.mode!=="race"){let[u,g]=e.waypoint;o.fillStyle="#c690ff",o.beginPath(),o.arc(u,g-14*l,9*l,Math.PI,0),o.lineTo(u,g),o.closePath(),o.fill(),o.fillStyle="#ffffff",o.beginPath(),o.arc(u,g-14*l,3.5*l,0,Math.PI*2),o.fill()}o.translate(t.x,t.z),o.rotate(-t.heading);let d=this.expanded?1.7*l:1;if(o.shadowColor="#000",o.shadowBlur=8,o.fillStyle="#ff8a52",o.beginPath(),o.moveTo(0,-13*d),o.lineTo(8*d,9*d),o.lineTo(0,4*d),o.lineTo(-8*d,9*d),o.closePath(),o.fill(),o.restore(),this.expanded){let u=r.width/Math.max(r.getBoundingClientRect().width,1);o.fillStyle="#0b161ccc",o.fillRect(0,0,a,40*u),o.fillRect(0,c-36*u,250*u,36*u),o.fillStyle="#fff4dccc",o.font=`600 ${13*u}px Barlow, Arial`,o.textAlign="left",o.textBaseline="top",o.fillText(e.mode==="race"?`${e.raceName} \xB7 FOLLOW THE ORANGE LINE`:"CLICK TO SET A WAYPOINT \xB7 SCROLL OR PINCH TO ZOOM \xB7 DRAG TO MOVE",16*u,13*u),o.fillStyle="#5f8dff",o.fillRect(16*u,c-24*u,10*u,10*u),o.fillStyle="#c9d3d6",o.fillRect(110*u,c-24*u,10*u,10*u),o.fillStyle="#fff4dccc",o.fillText("POLICE",32*u,c-26*u),o.fillText("TRAFFIC",126*u,c-26*u)}if(!this.expanded){let u=t.heading,g=a/2+Math.sin(-u)*-(c*.42),x=c*.62-Math.cos(u)*(c*.42);o.fillStyle="#fff4dc",o.font="600 22px Barlow, Arial",o.textAlign="center",o.textBaseline="middle",o.fillText("N",Math.min(a-16,Math.max(16,g)),Math.min(c-16,Math.max(16,x)))}}setExpanded(t,e=null){this.expanded=t,this.view.zoom=1,this.fitPending=t,e&&(this.view.x=e.x,this.view.z=e.z),this.clampView(),this.canvas.width=t?1100:480,this.canvas.height=t?1100:360}};function Ra(s){let t=Math.floor(s/60),e=Math.floor(s%60),n=Math.floor(s*100%100);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`}var vf={v8:{pulses:4,lump:.32,tone:1,intake:.5,sub:.6,rasp:.35,redline:7400},bigblock:{pulses:4,lump:.55,tone:.72,intake:.35,sub:.9,rasp:.5,redline:6400},v10:{pulses:5,lump:.14,tone:1.45,intake:.85,sub:.35,rasp:.25,redline:8800}},Wi=[{id:"wave",name:"PACIFIC WAVE 101.4",genre:"Synthwave",bpm:100,swing:0,chords:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]},{id:"tide",name:"LOW TIDE 94.7",genre:"Lo-fi beats",bpm:82,swing:.16,chords:[[50,53,57,60,64],[55,59,62,65,69],[48,52,55,59,62],[57,61,64,67,70]]},{id:"funk",name:"KZRO 88.1 COAST FUNK",genre:"Funk",bpm:112,swing:.08,chords:[[52,55,59,62],[52,55,59,62],[57,61,64,67],[55,59,62,65]]}],us=s=>440*Math.pow(2,(s-69)/12),ch=class{constructor(){this.ctx=null,this.enabled=!1,this.engineDef=vf.v8,this.station=-1,this.wasBoosting=!1,this.scrapeLevel=0,this.nextAmbient={horn:6,bird:2,gull:4,cricket:1,siren:30},this.sirenLevel=0}unlock(){this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.start()}start(){if(this.ctx){this.ctx.resume();return}let t;try{t=new(window.AudioContext||window.webkitAudioContext)}catch{return}this.ctx=t;let e=this.master=t.createGain();e.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,e.connect(n).connect(t.destination);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=t.createBuffer(1,i,t.sampleRate),a=r.getChannelData(0),c=o.getChannelData(0),h=0;for(let u=0;u<i;u++)a[u]=Math.random()*2-1,h=(h+.02*a[u])/1.02,c[u]=h*3.5;this.noiseBuffer=r;let l=(u=r)=>{let g=t.createBufferSource();return g.buffer=u,g.loop=!0,g.start(0,Math.random()*1.5),g};this.reverb=t.createConvolver();let f=Math.floor(t.sampleRate*1.8),d=t.createBuffer(2,f,t.sampleRate);for(let u=0;u<2;u++){let g=d.getChannelData(u);for(let x=0;x<f;x++)g[x]=(Math.random()*2-1)*Math.pow(1-x/f,3.2)}this.reverb.buffer=d,this.reverbOut=t.createGain(),this.reverbOut.gain.value=.32,this.reverb.connect(this.reverbOut).connect(e),this.buildEngine(l),this.buildTires(l),this.buildWorld(l,o),this.buildRadio()}buildEngine(t){let e=this.ctx;this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.Q.value=2.2,this.engineDrive=e.createWaveShaper();let n=new Float32Array(1024);for(let c=0;c<1024;c++)n[c]=Math.tanh((c/1023*2-1)*2.6);this.engineDrive.curve=n;let i=new Float32Array(24),r=new Float32Array(24);for(let c=1;c<24;c++)r[c]=1/c*(c%2?1:.6)*Math.exp(-c*.08);let o=e.createPeriodicWave(i,r);this.oscs=[],this.subGain=e.createGain();for(let[c,h,l]of[[1,.55,"wave"],[1.006,.3,"sawtooth"],[.5,1,"sine"]]){let f=e.createOscillator();l==="wave"?f.setPeriodicWave(o):f.type=l;let d=e.createGain();d.gain.value=h,f.connect(d).connect(c===.5?this.subGain:this.engineDrive),f.start(),this.oscs.push([f,c])}this.subGain.connect(this.engineDrive);let a=e.createGain();this.lumpOsc=e.createOscillator(),this.lumpOsc.type="triangle",this.lumpDepth=e.createGain(),this.lumpOsc.connect(this.lumpDepth).connect(a.gain),this.lumpOsc.start(),this.engineDrive.connect(a).connect(this.engineFilter).connect(this.engineGain).connect(this.master),this.raspFilter=e.createBiquadFilter(),this.raspFilter.type="bandpass",this.raspFilter.Q.value=1.4,this.raspGain=e.createGain(),this.raspGain.gain.value=0,t().connect(this.raspFilter).connect(this.raspGain).connect(a),this.intake=e.createOscillator(),this.intake.type="square",this.intakeFilter=e.createBiquadFilter(),this.intakeFilter.type="bandpass",this.intakeFilter.Q.value=3,this.intakeGain=e.createGain(),this.intakeGain.gain.value=0,this.intake.connect(this.intakeFilter).connect(this.intakeGain).connect(this.engineGain),this.intake.start(),this.whine=e.createOscillator(),this.whine.type="sine",this.whineGain=e.createGain(),this.whineGain.gain.value=0,this.whine.connect(this.whineGain).connect(this.master),this.whine.start(),this.turbo=e.createOscillator(),this.turbo.type="sine",this.turboGain=e.createGain(),this.turboGain.gain.value=0,this.turbo.connect(this.turboGain).connect(this.master),this.turbo.start(),this.applyEngine()}setEngine(t){this.engineDef=vf[t]||vf.v8,this.applyEngine()}applyEngine(){if(!this.ctx)return;let t=this.engineDef,e=this.ctx.currentTime;this.lumpDepth.gain.setTargetAtTime(t.lump,e,.05),this.subGain.gain.setTargetAtTime(t.sub,e,.05)}buildTires(t){let e=this.ctx;this.screechFilter=e.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.value=1350,this.screechFilter.Q.value=5,this.screechGain=e.createGain(),this.screechGain.gain.value=0,t().connect(this.screechFilter).connect(this.screechGain).connect(this.master),this.squeal=e.createOscillator(),this.squeal.type="sawtooth";let n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=1100,n.Q.value=8,this.squealGain=e.createGain(),this.squealGain.gain.value=0;let i=e.createOscillator();i.frequency.value=9;let r=e.createGain();r.gain.value=22,i.connect(r).connect(this.squeal.frequency),i.start(),this.squeal.connect(n).connect(this.squealGain).connect(this.master),this.squeal.start(),this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windGain=e.createGain(),this.windGain.gain.value=0,t().connect(this.windFilter).connect(this.windGain).connect(this.master);let o=e.createBiquadFilter();o.type="highpass",o.frequency.value=2200,this.nitroGain=e.createGain(),this.nitroGain.gain.value=0,t().connect(o).connect(this.nitroGain).connect(this.master);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=220,this.roarGain=e.createGain(),this.roarGain.gain.value=0,t().connect(a).connect(this.roarGain).connect(this.master),this.scrapeFilter=e.createBiquadFilter(),this.scrapeFilter.type="bandpass",this.scrapeFilter.frequency.value=2400,this.scrapeFilter.Q.value=2.5,this.scrapeGain=e.createGain(),this.scrapeGain.gain.value=0,t().connect(this.scrapeFilter).connect(this.scrapeGain).connect(this.master)}buildWorld(t,e){let n=this.ctx,i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=520,this.surfGain=n.createGain(),this.surfGain.gain.value=0,t().connect(i).connect(this.surfGain).connect(this.master);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=380,this.humGain=n.createGain(),this.humGain.gain.value=0,t(e).connect(r).connect(this.humGain).connect(this.master),this.siren=n.createOscillator(),this.siren.type="sawtooth",this.siren.frequency.value=900;let o=n.createOscillator();o.frequency.value=.32;let a=n.createGain();a.gain.value=380,o.connect(a).connect(this.siren.frequency),o.start();let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=1100,c.Q.value=1.2,this.sirenGain=n.createGain(),this.sirenGain.gain.value=0,this.siren.connect(c).connect(this.sirenGain).connect(this.master),this.siren.start(),this.ambientBus=n.createGain(),this.ambientBus.gain.value=0,this.ambientBus.connect(this.master),this.ambientBus.connect(this.reverb)}setEnabled(t){this.enabled=t,t&&this.start(),this.ctx&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.1)}update(t){if(!this.ctx)return;let e=this.ctx.currentTime,{rpm:n,throttle:i,speed:r,slip:o,boosting:a,active:c,shoreDistance:h,time:l,gear:f=1,ratio:d=3,city:u=.5,night:g=0,nearTrees:x=0}=t,m=c?1:0,p=this.engineDef,y=n/60*p.pulses;for(let[T,S]of this.oscs)T.frequency.setTargetAtTime(y*S*.5,e,.025);this.lumpOsc.frequency.setTargetAtTime(n/120,e,.05);let M=n/p.redline,v=i*(.75+Math.min(Math.max(f,1),6)*.05);this.engineFilter.frequency.setTargetAtTime((220+n*.14+v*n*.3)*p.tone,e,.04),this.engineGain.gain.setTargetAtTime(m*(.065+v*.085+M*.05),e,.04),this.raspFilter.frequency.setTargetAtTime(y*3,e,.05),this.raspGain.gain.setTargetAtTime(m*p.rasp*(.15+i*.6)*.5,e,.05),this.intake.frequency.setTargetAtTime(y*2,e,.03),this.intakeFilter.frequency.setTargetAtTime(900+n*.35,e,.05),this.intakeGain.gain.setTargetAtTime(m*p.intake*i*M*M*.035,e,.05);let b=Math.abs(r);this.whine.frequency.setTargetAtTime(Math.max(40,b*d*14),e,.05),this.whineGain.gain.setTargetAtTime(m*(f>0&&f<=2?1:.25)*Math.min(b/20,1)*.006,e,.1),this.turbo.frequency.setTargetAtTime(1400+n*.55,e,.1),this.turboGain.gain.setTargetAtTime(m*i*M*M*.01,e,.1);let C=m*Math.min(Math.max(o-3,0)/10,1);this.screechGain.gain.setTargetAtTime(C*.075,e,.06),this.screechFilter.frequency.setTargetAtTime(1100+Math.min(o,20)*25,e,.1),this.squeal.frequency.setTargetAtTime(820+Math.min(o,20)*18,e,.08),this.squealGain.gain.setTargetAtTime(C*C*.05,e,.05),this.windGain.gain.setTargetAtTime(m*Math.min((b/60)**2,1)*.1,e,.2),this.windFilter.frequency.setTargetAtTime(400+b*18,e,.2),a&&!this.wasBoosting&&m&&this.whoosh(),this.wasBoosting=a,this.nitroGain.gain.setTargetAtTime(m*(a?.045:0),e,.06),this.roarGain.gain.setTargetAtTime(m*(a?.12:0),e,.1),this.scrapeGain.gain.setTargetAtTime(m*this.scrapeLevel*.09,e,.04),this.scrapeLevel*=.6;let L=Math.max(0,1-h/140),P=.55+.45*Math.sin(l*.7)*Math.sin(l*.23+1);this.surfGain.gain.setTargetAtTime(L*P*.11,e,.3),this.humGain.gain.setTargetAtTime(m*(.025+u*.05)*(1-g*.55),e,.6),this.ambientBus.gain.setTargetAtTime(m,e,.4),this.sirenGain.gain.setTargetAtTime(m*this.sirenLevel*.05,e,.15),m&&this.ambient(l,{city:u,night:g,surfNear:L,nearTrees:x}),this.radioActive=c,this.radioTick(c)}ambient(t,{city:e,night:n,surfNear:i,nearTrees:r}){let o=this.nextAmbient;t>o.horn&&(o.horn=t+7+Math.random()*16/(.4+e),this.horn(60+Math.random()*140,!0)),n<.5&&t>o.bird&&(o.bird=t+2+Math.random()*6,(r>.2||Math.random()<.3)&&this.chirp()),n<.5&&i>.3&&t>o.gull&&(o.gull=t+5+Math.random()*9,this.gull()),n>.5&&t>o.cricket&&(o.cricket=t+.7+Math.random()*1.6,this.cricket(e)),t>o.siren&&(o.siren=t+40+Math.random()*60,e>.4&&this.distantSiren())}burst(t,e,n,i,r=1,o=this.master,a=0){if(!this.ctx||!this.enabled)return;let c=this.ctx,h=c.currentTime+a,l=c.createBufferSource();l.buffer=this.noiseBuffer;let f=c.createBiquadFilter();f.type=e,f.frequency.value=n,f.Q.value=r;let d=c.createGain();d.gain.setValueAtTime(i,h),d.gain.exponentialRampToValueAtTime(1e-4,h+t),l.connect(f).connect(d).connect(o),l.start(h,Math.random()),l.stop(h+t+.05)}tone(t,e,n,i,{dest:r=this.master,when:o=0,attack:a=.005,slideTo:c=0,q:h=0,filter:l=0}={}){if(!this.ctx||!this.enabled)return;let f=this.ctx,d=f.currentTime+o,u=f.createOscillator();u.type=t,u.frequency.setValueAtTime(e,d),c&&u.frequency.exponentialRampToValueAtTime(c,d+n);let g=f.createGain();g.gain.setValueAtTime(1e-4,d),g.gain.linearRampToValueAtTime(i,d+a),g.gain.exponentialRampToValueAtTime(1e-4,d+n);let x=u;if(l){let m=f.createBiquadFilter();m.type="bandpass",m.frequency.value=l,m.Q.value=h||2,x=u.connect(m)}x.connect(g).connect(r),u.start(d),u.stop(d+n+.05)}impact(t){if(!this.ctx||!this.enabled)return;let e=this.ctx.currentTime;if(e-(this.lastImpact||0)<.07)return;this.lastImpact=e;let n=Math.min(t/20,1);this.burst(.35+n*.3,"lowpass",300+n*900,.25+n*.6),this.tone("sine",70+n*30,.25,.25*n+.08,{slideTo:40});for(let i of[1,2.76,5.4])this.tone("triangle",420*i*(.9+Math.random()*.2),.18+n*.4,.04*n/i+.01,{filter:420*i,q:12});if(n>.4)for(let i=0;i<6;i++)this.tone("sine",3e3+Math.random()*4e3,.08+Math.random()*.1,.02*n,{when:.02+Math.random()*.2})}scrape(t){this.scrapeLevel=Math.max(this.scrapeLevel,Math.min(t/25,1)),this.ctx&&this.scrapeFilter.frequency.setTargetAtTime(1800+Math.random()*1600,this.ctx.currentTime,.02)}whoosh(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuffer;let i=t.createBiquadFilter();i.type="bandpass",i.Q.value=1.6,i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(3800,e+.45);let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.32,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+.9),n.connect(i).connect(r).connect(this.master),n.start(e,Math.random()),n.stop(e+1)}backfire(){!this.ctx||!this.enabled||(this.burst(.09,"lowpass",900,.35),this.tone("square",60,.08,.08))}shift(t){t&&this.burst(.18,"highpass",1800,.07)}horn(t,e=!1){if(!this.ctx||!this.enabled)return;let n=this.ctx,i=n.currentTime,r=Math.min(.12,6/Math.max(t,6)*.12)*(e?.6:1),o=e?.3+Math.random()*.5:.45,a=n.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(r,i+.02),a.gain.setValueAtTime(r,i+o),a.gain.linearRampToValueAtTime(0,i+o+.1);let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=e?900:1800;let h=e?300+Math.random()*120:349;for(let l of[h,h*1.26]){let f=n.createOscillator();f.type="square",f.frequency.value=l,f.connect(c),f.start(i),f.stop(i+o+.15)}c.connect(a).connect(e?this.ambientBus:this.master)}chirp(){let t=2600+Math.random()*2200,e=2+Math.floor(Math.random()*4);for(let n=0;n<e;n++)this.tone("sine",t*(1+Math.random()*.1),.07,.012,{dest:this.ambientBus,when:n*.11,slideTo:t*1.35})}gull(){for(let t=0;t<2+Math.floor(Math.random()*2);t++)this.tone("sawtooth",1500,.32,.01,{dest:this.ambientBus,when:t*.38,slideTo:900,filter:1400,q:3})}cricket(t){let e=4300+Math.random()*500,n=.006*(1.2-t*.8);for(let i=0;i<3;i++)this.tone("sine",e,.035,n,{dest:this.ambientBus,when:i*.06})}distantSiren(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle";let i=t.createOscillator();i.frequency.value=.35;let r=t.createGain();r.gain.value=220,n.frequency.value=780,i.connect(r).connect(n.frequency);let o=t.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.012,e+2),o.gain.linearRampToValueAtTime(0,e+8),n.connect(o).connect(this.ambientBus),n.start(e),i.start(e),n.stop(e+8.2),i.stop(e+8.2)}setSiren(t){this.sirenLevel=t}chime(t=!1){if(!this.ctx||!this.enabled)return;let e=this.ctx,n=e.currentTime;(t?[523.25,659.25,783.99,1046.5]:[659.25,987.77]).forEach((r,o)=>{let a=e.createOscillator();a.type="triangle",a.frequency.value=r;let c=e.createGain(),h=n+o*.09;c.gain.setValueAtTime(0,h),c.gain.linearRampToValueAtTime(.12,h+.01),c.gain.exponentialRampToValueAtTime(1e-4,h+.6),a.connect(c).connect(this.master),a.start(h),a.stop(h+.65)})}countBeep(t=!1){this.tone("square",t?880:440,t?.5:.18,.06,{filter:t?1800:900,q:1})}buildRadio(){let t=this.ctx;this.radioGain=t.createGain(),this.radioGain.gain.value=0;let e=t.createBiquadFilter();e.type="highpass",e.frequency.value=55;let n=t.createBiquadFilter();n.type="highshelf",n.frequency.value=7e3,n.gain.value=-5,this.radioIn=t.createGain(),this.radioIn.connect(e).connect(n).connect(this.radioGain).connect(this.master),this.radioSend=t.createGain(),this.radioSend.gain.value=.5,this.radioSend.connect(this.reverb),this.radioStep=0,this.radioNext=0,this.radioActive=!1,setInterval(()=>this.radioTick(this.radioActive),40)}get stationName(){return this.station<0?"RADIO OFF":Wi[this.station].name}setStation(t){this.station=t,this.ctx&&(this.radioStep=0,this.radioNext=this.ctx.currentTime+.25,this.burst(.28,"bandpass",2200,.08,.7))}nextStation(){return this.setStation(this.station+1>=Wi.length?-1:this.station+1),this.stationName}radioTick(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=t&&this.station>=0&&this.enabled;if(this.radioGain.gain.setTargetAtTime(n?.75:0,e,.15),!n){this.radioNext=0;return}let i=Wi[this.station],r=60/i.bpm/4;for(this.radioNext<e&&(this.radioNext=e+.05);this.radioNext<e+.3;){let o=this.radioStep,a=o%2?i.swing*r:0;this.playStep(i,o,this.radioNext+a,r),this.radioNext+=r,this.radioStep++}}playStep(t,e,n,i){let r=Math.max(0,n-this.ctx.currentTime),o=Math.floor(e/16),a=e%16,c=t.chords[o%t.chords.length],h=c[0],l=u=>{let g=Math.sin((e+u*31.7)*12.9898+this.station*7.1)*43758.5453;return g-Math.floor(g)},f=this.radioIn,d=this.radioSend;if(t.id==="wave"){a%4===0&&this.kick(r,.5),(a===4||a===12)&&this.snare(r,.28,!0),a%2===0&&this.hat(r,.05,!1),a%2===0&&this.synth("sawtooth",us(h-24),i*1.8,.11,r,{cutoff:700,env:900});let u=[0,1,2,1,0,2,1,2];if(this.synth("square",us(c[u[a%8]]+12),i*.9,.03,r,{cutoff:2400,env:1200,send:.6}),a===0)for(let g of c)this.synth("sawtooth",us(g),i*15,.022,r,{cutoff:1300,attack:.4,detune:9,send:1});if(o%4>=2&&[0,3,6,10,12].includes(a)){let g=[0,3,5,7,10,12];this.synth("sawtooth",us(h+12+g[Math.floor(l(1)*g.length)]),i*2.6,.035,r,{cutoff:3e3,env:0,send:.8,detune:6})}}else if(t.id==="tide"){if((a===0||a===7||a===10)&&this.kick(r,.42),(a===4||a===12)&&this.snare(r,.16,!1),a%2===0&&this.hat(r,.025+l(2)*.015,!1),a===0||a===6)for(let u of c)this.synth("sine",us(u),i*7,.03,r+l(3)*.02,{cutoff:1800,attack:.01,trem:!0,send:.7});(a===0||a===10)&&this.synth("sine",us(h-12),i*5,.16,r,{cutoff:400}),l(4)<.35&&this.burst(.01,"highpass",3e3,.02+l(5)*.03,1,f,r),a===0&&this.burst(i*16,"bandpass",1200,.004,.4,f,r)}else{(a===0||a===6||a===8||a===11)&&this.kick(r,.45),(a===4||a===12)&&this.snare(r,.24,!1),this.hat(r,a%4===2?.06:.03,a%4===2);let g=[0,null,12,0,null,0,10,null,0,null,12,7,null,0,10,12][a];if(g!==null&&this.synth("square",us(h-24+g),i*.8,.09,r,{cutoff:500,env:1400}),[2,7,10,14].includes(a))for(let x of c.slice(1))this.synth("square",us(x+12),i*.5,.018,r,{cutoff:2600,env:2e3,q:6});if(o%8===7&&(a===0||a===3))for(let x of c)this.synth("sawtooth",us(x+12),i*2,.025,r,{cutoff:2200,send:.6,detune:12})}}synth(t,e,n,i,r,{cutoff:o=2e3,env:a=0,attack:c=.005,detune:h=0,send:l=0,trem:f=!1,q:d=1}={}){let u=this.ctx,g=u.currentTime+r,x=u.createBiquadFilter();x.type="lowpass",x.Q.value=d,x.frequency.setValueAtTime(o+a,g),a&&x.frequency.exponentialRampToValueAtTime(Math.max(o,60),g+Math.min(n,.3));let m=u.createGain();m.gain.setValueAtTime(1e-4,g),m.gain.linearRampToValueAtTime(i,g+c),m.gain.setValueAtTime(i,g+Math.max(c,n*.6)),m.gain.exponentialRampToValueAtTime(1e-4,g+n+.08);for(let y of h?[-h,h]:[0]){let M=u.createOscillator();M.type=t,M.frequency.value=e,M.detune.value=y,M.connect(x),M.start(g),M.stop(g+n+.12)}let p=x.connect(m);if(f){let y=u.createGain(),M=u.createOscillator();M.frequency.value=4.5;let v=u.createGain();v.gain.value=.25,M.connect(v).connect(y.gain),M.start(g),M.stop(g+n+.12),p=p.connect(y)}if(p.connect(this.radioIn),l){let y=u.createGain();y.gain.value=l,p.connect(y).connect(this.radioSend)}}kick(t,e){let n=this.ctx,i=n.currentTime+t,r=n.createOscillator();r.frequency.setValueAtTime(140,i),r.frequency.exponentialRampToValueAtTime(42,i+.12);let o=n.createGain();o.gain.setValueAtTime(e,i),o.gain.exponentialRampToValueAtTime(1e-4,i+.38),r.connect(o).connect(this.radioIn),r.start(i),r.stop(i+.4)}snare(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=1400;let c=i.createGain(),h=n?.32:.16;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c),c.connect(this.radioIn),n&&c.connect(this.radioSend),o.start(r,Math.random()),o.stop(r+h+.05);let l=i.createOscillator();l.type="triangle",l.frequency.setValueAtTime(220,r),l.frequency.exponentialRampToValueAtTime(150,r+.08);let f=i.createGain();f.gain.setValueAtTime(e*.6,r),f.gain.exponentialRampToValueAtTime(1e-4,r+.1),l.connect(f).connect(this.radioIn),l.start(r),l.stop(r+.12)}hat(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=7500;let c=i.createGain(),h=n?.22:.045;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c).connect(this.radioIn),o.start(r,Math.random()),o.stop(r+h+.05)}};var hh=class{constructor(){this.keys=new Set,this.state={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},this.padButtons=new Set,this.onPadPress=null}clear(){this.keys.clear()}poll(){let t=this.keys,e=t.has("KeyW")||t.has("ArrowUp")?1:0,n=t.has("KeyS")||t.has("ArrowDown")?1:0,i=(t.has("KeyA")||t.has("ArrowLeft")?1:0)-(t.has("KeyD")||t.has("ArrowRight")?1:0),r=t.has("Space"),o=t.has("ShiftLeft")||t.has("ShiftRight"),a=navigator.getGamepads?navigator.getGamepads():[];for(let c of a){if(!c||!c.connected)continue;let h=c.axes[0]||0;Math.abs(h)>.12&&(i=-Math.sign(h)*((Math.abs(h)-.12)/.88)**1.4);let l=c.buttons[7]?.value||0,f=c.buttons[6]?.value||0;e=Math.max(e,l),n=Math.max(n,f),r=r||!!c.buttons[0]?.pressed,o=o||!!c.buttons[1]?.pressed||!!c.buttons[2]?.pressed;for(let[d,u]of[[3,"camera"],[9,"pause"],[8,"map"],[5,"reset"]]){let g=!!c.buttons[d]?.pressed,x=c.index+":"+d;g&&!this.padButtons.has(x)&&this.onPadPress?.(u),g?this.padButtons.add(x):this.padButtons.delete(x)}}return Object.assign(this.state,{throttle:e,brake:n,steer:i,handbrake:r,nitro:o}),this.state}};var Lt=s=>document.getElementById(s),uh=matchMedia("(pointer:coarse)").matches,yM=uh&&Math.min(screen.width,screen.height)<600,an={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{localStorage.setItem(s,t)}catch{}}};function w0(s){Lt("loading").classList.add("hidden"),Lt("error").classList.remove("hidden"),console.error(s)}async function _M(){let s;try{if(s=new Cc(Lt("world")),!s.renderer.capabilities.isWebGL2)throw new Error("WebGL 2 unavailable")}catch(A){w0(A);return}let t=s.renderer,e=new qs,n=new On(55,innerWidth/innerHeight,.2,5600);n.layers.enable(1),s.init(e,n);let i=A=>(Lt("loading-step").textContent=A,new Promise(ut=>setTimeout(ut,0)));await i("Painting the sky\u2026");let r=new Oc(t,e);await i("Paving the boulevards\u2026"),Up(e,t),await i("Raising the skyline\u2026");let o=qp(e,t);await i("Rolling in the surf\u2026");let a=Yp(e,t);await i("Planting palms\u2026");let c=Jp(e,t),h=new Jc,l=jp(e,t,a.pier.lamps,h),f=c0(e,t,h,l.lamps,c.trunkColliders);await i("Fueling up\u2026");let d=an.get("pacific-car");fr[d]||(d="coupe");let u=new Yc(e,t,d),g=new Uc(t,e),x=new Vc(t,e);{let A=lo(t);A.glassClear.userData.envBoost=1.25,A.chrome.userData.envBoost=1.2,x.attach([u.paint,A.glassClear,A.chrome,A.rim])}let m=new nh(e,t),p=new sh(e),y=y0(e,t),M=new rh(e),v=new hn,b=va(16761466,.9),C=new De(1.1,1.1,40,20,1,!0);C.translate(0,20,0);let L=[-1,1].map(A=>{let ut=new $t(C,b);return ut.userData.noAO=!0,ut.layers.set(1),v.add(ut),{mesh:ut,side:A}}),P=new bn({color:new Ht(3,1.8,.8),transparent:!0,opacity:.8,depthWrite:!1,blending:ai}),T=new $t(new Ko(Dc-.6,Dc,72),P);T.rotation.x=-Math.PI/2,T.position.y=.06,T.userData.noAO=!0,v.add(T);let S=new $t(new Mi(1.6,2.6,3),new bn({color:new Ht(4,2.4,1.1)}));S.rotation.z=Math.PI,S.userData.noAO=!0,v.add(S),v.visible=!1,e.add(v);let N=[...o.colliders,...f.solids],Y=[...c.trunkColliders,...l.circles,...f.circles],B={colliders:o.colliders,boxes:N,circles:Y,boxGrid:new ur(80).addAll(N),buildingGrid:new ur(80).addAll(o.colliders.map(A=>({...A}))),circleGrid:new gi(24).addAll(Y),pileGrid:new gi(24).addAll(Wn.flatMap(A=>A.piles||[])),piles:Wn.flatMap(A=>A.piles||[])};m.world=B,Ip(e);let O=new th(m,B.buildingGrid),k=new oh(n),V=new lh(o.colliders),rt=new ch,J=new hh,z={state:"intro",paused:!1,mode:"free",raceTime:0,checkpoint:0,countdown:0,raceId:"sunset",route:Xn.sunset.route,raceName:Xn.sunset.name,splits:[],topSpeed:0,crashes:0,waypoint:null,lastX:Nn.x,lastZ:Nn.z,time:0,frame:0,flash:0},At=an.get("pacific-quality")||(yM?"low":uh?"medium":"high");["ultra","high","medium","low"].includes(At)||(At="high");let Ct=an.get("pacific-time")||"cycle",Wt=an.get("pacific-road")||"auto";!(Ct in Bc)&&Ct!=="cycle"&&(Ct="golden");function zt(A){At=A,an.set("pacific-quality",A),s.setQuality(A);let ut=s.quality;r.setShadowQuality(ut.shadow,ut.shadowRange),a.setReflections(ut.reflections>0,ut.reflections),x.setSize(ut.carProbe),g.setSize(ut.farShadow),r.setSkyQuality(ut.sky[0],ut.sky[1],A!=="low"),r.realLamps=ut.lamps,l.setRealLamps(ut.lamps),o.setDetail(ut.facade),Lt("quality").value=A}let Ot={time:0,frames:0,told:!1};s.onResize=()=>{a.resize(s.quality.reflections);let A=Lt("res-note");A&&(A.textContent=`RENDERING ${s.size.x} \xD7 ${s.size.y}`)};let me=!1;function mt(A){Ct=A,an.set("pacific-time",A),r.cycle=A==="cycle",A!=="cycle"?r.setHours(Bc[A]):me||r.setHours(18.95),me=me||A==="cycle",r.envDirty=!0,Lt("time-select").value=A}u.reset(Nn.x,Nn.z,Nn.heading);let wt=an.get("pacific-color");wt&&Xt(wt),zt(At),mt(Ct);let It;function kt(A){let ut=Lt("toast");ut.textContent=A,ut.classList.add("show"),clearTimeout(It),It=setTimeout(()=>ut.classList.remove("show"),2400)}function Xt(A){u.setColor(A),an.set("pacific-color",A),document.querySelectorAll(".swatch").forEach(ut=>{let Vt=ut.dataset.color===A;ut.classList.toggle("active",Vt),ut.setAttribute("aria-pressed",String(Vt))})}function pt(A,ut=!1){if(!fr[A])return;d=A,an.set("pacific-car",A);let Vt=fr[A];if(u.key!==A){let{x:fe,z:xe,heading:jt}=u;u.setModel(A),u.reset(fe,xe,jt),k.snap?.(u)}Lt("car-name").textContent=Vt.name,Lt("car-blurb").textContent=Vt.blurb,Lt("car-spec").textContent=Vt.spec,Lt("hud-car").textContent=Vt.name,Lt("car-menu").value=A;for(let fe of["speed","accel","grip"])Lt(`stat-${fe}`).style.width=`${Math.round(Vt.stats[fe]*100)}%`;rt.setEngine?.(Vt.engine),ut&&kt(Vt.name)}let Ut=A=>pt(Ma[(Ma.indexOf(d)+A+Ma.length)%Ma.length]),D=[],ct=0;function ht({item:A,x:ut,z:Vt,speed:fe,nx:xe,nz:jt}){z.time-ct>.08&&(rt.impact(Math.min(2+fe*.35,A.type==="lamp"?9:6)),ct=z.time),k.shake=Math.max(k.shake,A.type==="lamp"?.22:.08);let Qt=A.sparks?14:4;for(let Ie=0;Ie<Qt;Ie++)A.sparks?y.sparks.emit(ut,le+.4+bt()*.5,Vt,xe*3+(bt()-.5)*6,1+bt()*4,jt*3+(bt()-.5)*6,.1+bt()*.08,.3+bt()*.4,1,6,3.2,1):y.dust.emit(ut,le+.3,Vt,(bt()-.5)*3,bt()*2,(bt()-.5)*3,.5,.9,.35,.55,.5,.42);A.type==="hydrant"&&D.push({x:ut,z:Vt,t:16}),(A.type==="lamp"||A.type==="hydrant")&&st("vandalism",ut,Vt,1)}function at(){if(z.checkpoint>=z.route.length)return;let[A,ut]=z.route[z.checkpoint];v.position.set(A,0,ut);let Vt=Math.abs(A-ls(A))<1;for(let fe of L)fe.mesh.position.set(Vt?fe.side*(Me+1):0,0,Vt?0:fe.side*(Me+1));Lt("checkpoint-count").textContent=`${z.checkpoint+1} / ${z.route.length}`}function j(A){z.mode=A,z.state="play",z.paused=!1,J.clear();for(let Vt of["intro","intro-location","intro-footer"])Lt(Vt).classList.add("hidden");Lt("hud").classList.remove("hidden"),document.body.classList.add("playing"),document.body.classList.toggle("racing",A==="race"),Lt("race").classList.toggle("hidden",A!=="race"),Lt("start-trial").classList.toggle("hidden",A==="race"),Lt("mode-label").textContent=A==="race"?"TIME TRIAL":"FREE ROAM",Lt("mission-title").textContent=A==="race"?"Follow the afterglow.":"Take the long way home.",Lt("mission-subtitle").textContent=A==="race"?`Pass through all ${z.route.length} golden checkpoints.`:"Explore Vista Pac\xEDfica at your own pace.",z.raceTime=0,z.checkpoint=0,z.splits=[],z.topSpeed=0,z.crashes=0;let ut=A==="race"?Xn[z.raceId].start||Nn:Nn;u.reset(ut.x,ut.z,ut.heading),z.lastX=u.x,z.lastZ=u.z,v.visible=A==="race",h.restoreAll(),O.reset(),at(),k.snap(u),rt.setEnabled(Et),z.countdown=A==="race"?3.6:0,U(A==="race"?"3":""),A!=="race"&&kt("WELCOME TO VISTA PAC\xCDFICA")}let F="";function U(A){if(A===F)return;F=A;let ut=Lt("countdown");ut.textContent=A,ut.classList.toggle("hidden",!A),ut.classList.toggle("go",A==="GO"),ut.classList.remove("pop"),ut.offsetWidth,ut.classList.add("pop"),A&&rt.countBeep?.(A==="GO")}function X(A){return z.countdown<=0?!1:(z.countdown-=A,z.countdown>.6?U(String(Math.ceil(z.countdown-.6))):z.countdown>0?U("GO"):(U(""),z.countdown=0),z.countdown>.6)}function q(){z.paused=!0,J.clear(),rt.chime(!0),Lt("final-time").textContent=Ra(z.raceTime);let A=Number(an.get(de(z.raceId)))||null;!A||z.raceTime<A?(an.set(de(z.raceId),String(z.raceTime)),Lt("best-time").textContent="A new personal best. Make the coast remember it."):Lt("best-time").textContent="PERSONAL BEST  "+Ra(A);let ut=u.distance/Math.max(z.raceTime,.1)*3.6;Lt("result-stats").innerHTML=`<span><b>${Math.round(z.topSpeed*3.6)}</b> KM/H TOP</span><span><b>${Math.round(ut)}</b> KM/H AVG</span><span><b>${z.crashes}</b> ${z.crashes===1?"CRASH":"CRASHES"}</span><span><b>${fr[d].name}</b></span>`,Lt("result").showModal(),v.visible=!1,Pt(z.raceId)}function $(A=!1){Lt("result").open||(z.paused=!0,J.clear(),Lt("menu-title").textContent=A?"Make it your drive.":"Take a breather.",Lt("menu-description").textContent=A?"Tune the look of the coast to your machine.":"The coast will be right here.",Lt("resume").textContent=z.state==="intro"?"BACK TO THE COAST":"BACK TO THE DRIVE",Lt("back-title").classList.toggle("hidden",z.state==="intro"),Lt("restart-race").textContent=(z.mode==="race"&&z.state==="play"?"RESTART ":"START ")+z.raceName,Lt("menu").open||Lt("menu").showModal())}function w(){Lt("menu").close(),z.paused=!1,J.clear()}function _(A){k.mode=A??(k.mode+1)%mf.length,Lt("camera-select").value=k.mode,z.state==="play"&&(kt(mf[k.mode]),k.snap(u))}function G(){let A=["golden","dusk","night","dawn","noon","cycle"],ut=A[(A.indexOf(Ct)+1)%A.length];mt(ut),kt({golden:"GOLDEN HOUR",dusk:"BLUE HOUR",night:"MIDNIGHT",dawn:"FIRST LIGHT",noon:"HIGH NOON",cycle:"LIVE DAY CYCLE"}[ut])}function Q(){z.state==="play"&&(V.setExpanded(!V.expanded,u),document.querySelector(".map-panel").classList.toggle("expanded",V.expanded),Lt("map-button").setAttribute("aria-label",V.expanded?"Close expanded map":"Expand map"))}function gt(){if(z.mode==="race"){z.raceTime=0,z.checkpoint=0;let A=Xn[z.raceId].start||Nn;u.reset(A.x,A.z,A.heading),at(),kt("RUN RESTARTED")}else u.safeRespawn(),kt("BACK ON THE ROAD");z.lastX=u.x,z.lastZ=u.z,k.snap(u)}function ft(){w(),z.state="intro",v.visible=!1,document.body.classList.remove("playing","racing"),Lt("hud").classList.add("hidden"),V.expanded&&Kt(!1);for(let A of["intro","intro-location","intro-footer"])Lt(A).classList.remove("hidden");u.reset(Nn.x,Nn.z,Nn.heading)}function Kt(A){V.setExpanded(A),document.querySelector(".map-panel").classList.toggle("expanded",A)}let Et=an.get("pacific-sound")!=="off";function Zt(){Lt("sound").setAttribute("aria-label",Et?"Mute sound":"Enable sound"),Lt("sound").querySelector("span").style.display=Et?"none":"block"}Zt(),Lt("drive").onclick=()=>{nt(),j("free")},Lt("trial").onclick=()=>{nt(),j("race")},Lt("start-trial").onclick=()=>j("race"),Lt("pause").onclick=()=>$(),Lt("settings").onclick=()=>$(!0),Lt("close-menu").onclick=w,Lt("resume").onclick=w,Lt("restart-race").onclick=()=>{w(),j("race")},Lt("back-title").onclick=ft,Lt("menu").addEventListener("cancel",A=>{A.preventDefault(),w()}),Lt("result").addEventListener("cancel",A=>A.preventDefault()),Lt("race-again").onclick=()=>{Lt("result").close(),j("race")},Lt("free-roam").onclick=()=>{Lt("result").close(),j("free")},Lt("quality").onchange=A=>zt(A.target.value),Lt("time-select").onchange=A=>mt(A.target.value),Lt("road-select").value=Wt,Lt("road-select").onchange=A=>{Wt=A.target.value,an.set("pacific-road",Wt)},Lt("camera-select").onchange=A=>_(Number(A.target.value)),Lt("sound").onclick=()=>{Et=!Et,an.set("pacific-sound",Et?"on":"off"),rt.setEnabled(Et&&z.state==="play"),Et&&rt.start(),Zt(),kt(Et?"SOUND ON":"SOUND OFF")},Lt("map-button").onclick=Q;{let A=Lt("minimap"),ut=new Map,Vt=0,fe=0;A.addEventListener("wheel",jt=>{V.expanded&&(jt.preventDefault(),V.zoomAt(jt.deltaY<0?1.25:.8,jt.clientX,jt.clientY))},{passive:!1}),A.addEventListener("pointerdown",jt=>{V.expanded&&(A.setPointerCapture(jt.pointerId),ut.set(jt.pointerId,[jt.clientX,jt.clientY]),ut.size===1&&(Vt=0),fe=0)}),A.addEventListener("pointermove",jt=>{let Qt=ut.get(jt.pointerId);if(!(!Qt||!V.expanded)&&(ut.size===1&&(Vt+=Math.abs(jt.clientX-Qt[0])+Math.abs(jt.clientY-Qt[1]),Vt>6&&V.panBy(jt.clientX-Qt[0],jt.clientY-Qt[1])),ut.set(jt.pointerId,[jt.clientX,jt.clientY]),ut.size===2)){let[Ie,ve]=[...ut.values()],Pe=Math.hypot(Ie[0]-ve[0],Ie[1]-ve[1]);fe>0&&Pe>0&&V.zoomAt(Pe/fe,(Ie[0]+ve[0])/2,(Ie[1]+ve[1])/2),fe=Pe,Vt=99}});let xe=jt=>{ut.delete(jt.pointerId)&&V.expanded&&ut.size===0&&Vt<=6&&jt.type==="pointerup"&&V.pick(jt.clientX,jt.clientY,z),fe=0};A.addEventListener("pointerup",xe),A.addEventListener("pointercancel",xe),Lt("map-zoom-in").onclick=()=>V.zoomAt(1.5),Lt("map-zoom-out").onclick=()=>V.zoomAt(1/1.5)}for(let A of document.querySelectorAll(".swatch"))A.onclick=()=>Xt(A.dataset.color);function ie(A,ut=!0){rt.setStation(A),an.set("pacific-radio",String(A)),Lt("radio-select").value=String(A),Lt("radio-name").textContent=A<0?"OFF":Wi[A].name,Lt("radio-genre").textContent=A<0?"Q TO TUNE":Wi[A].genre.toUpperCase(),document.querySelector(".radio").classList.toggle("off",A<0),ut&&z.state==="play"&&kt(A<0?"RADIO OFF":`\u266A ${Wi[A].name}`)}Lt("radio-select").onchange=A=>ie(Number(A.target.value),!1);function St(A){u.setHandling(A),an.set("pacific-handling",u.mode),Lt("handling-select").value=u.mode}Lt("handling-select").onchange=A=>{St(A.target.value),z.state==="play"&&kt(_a[u.mode].label)},St(an.get("pacific-handling")||"easy");let Jt={slow:.6,standard:1,off:0},he="slow";function ue(A){he=A in Jt?A:"slow",m.policePace=Jt[he]||.6,an.set("pacific-police",he),Lt("police-select").value=he,he==="off"&&O.reset()}Lt("police-select").onchange=A=>{ue(A.target.value),z.state==="play"&&kt({slow:"RELAXED POLICE",standard:"STANDARD POLICE",off:"POLICE OFF"}[he])},ue(an.get("pacific-police")||"slow");let qt=Object.keys(Xn),de=A=>A==="sunset"?"pacific-best":"pacific-best-"+A,Z=A=>A.toLowerCase().replace(/\b\w/g,ut=>ut.toUpperCase());function Pt(A){Xn[A]||(A="sunset"),z.raceId=A,z.route=Xn[A].route,z.raceName=Xn[A].name,an.set("pacific-race",A),Lt("race-select").value=A,Lt("race-name").textContent=Xn[A].name;let ut=Number(an.get(de(A)));Lt("race-info").textContent=`${Xn[A].route.length} CHECKPOINTS \xB7 ${ut?"BEST "+Ra(ut):Xn[A].blurb.toUpperCase()}`,Lt("trial").firstChild.textContent=Xn[A].name+" ",Lt("start-trial").firstChild.textContent=`Start ${Z(Xn[A].name)} `,Lt("start-trial").querySelector("span").textContent=`${Xn[A].route.length} CHECKPOINTS`,document.querySelector("#race > span").textContent=Xn[A].name,document.querySelector("#result .eyebrow").textContent=Xn[A].name+" COMPLETE"}let Gt=A=>Pt(qt[(qt.indexOf(z.raceId)+A+qt.length)%qt.length]);Lt("race-prev").onclick=()=>Gt(-1),Lt("race-next").onclick=()=>Gt(1),Lt("race-select").onchange=A=>Pt(A.target.value),Pt(an.get("pacific-race")||"sunset");let te=an.get("pacific-fps")!=="off",Rt=Lt("fps"),yt={frames:0,time:0,worst:0};function ae(A){te=A,an.set("pacific-fps",A?"on":"off"),Lt("fps-select").value=A?"on":"off",Rt.classList.toggle("hidden",!A)}Lt("fps-select").onchange=A=>ae(A.target.value==="on");let Te=()=>{Lt("res-note").textContent=`RENDERING ${s.size.x} \xD7 ${s.size.y}`};function Ke(A){s.setResolution(A),an.set("pacific-res",s.resolution),Lt("res-select").value=s.resolution,Ot.told=!1,Te()}Lt("res-select").onchange=A=>Ke(A.target.value),Ke(an.get("pacific-res")||"1080p");function R(A){s.setFilm(A),an.set("pacific-film",s.filmName),Lt("film-select").value=s.filmName}Lt("film-select").onchange=A=>R(A.target.value),R(an.get("pacific-film")||"subtle"),ae(te);let W=Number(an.get("pacific-radio")??0);ie(Number.isInteger(W)&&W<Wi.length?W:0,!1);let it=()=>rt.unlock();for(let A of["pointerdown","keydown","touchend","click"])addEventListener(A,it,{once:!0});Lt("car-prev").onclick=()=>Ut(-1),Lt("car-next").onclick=()=>Ut(1),Lt("car-menu").onchange=A=>pt(A.target.value,z.state==="play"),pt(d);let K=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);addEventListener("keydown",A=>{if(A.target.tagName!=="SELECT"&&(K.has(A.code)&&A.preventDefault(),!A.repeat)){if(A.code==="Escape"){A.preventDefault(),Lt("menu").open?w():z.state==="play"&&$();return}if(A.code==="Enter"&&z.state==="intro"&&!z.paused){j("free");return}if(z.state==="intro"&&!z.paused&&(A.code==="ArrowLeft"||A.code==="ArrowRight")){Ut(A.code==="ArrowLeft"?-1:1);return}if(A.code==="KeyT"&&!z.paused){G();return}if(!(z.state!=="play"||z.paused)){if(A.code==="KeyP")return $();if(A.code==="KeyR")return gt();if(A.code==="KeyC")return _();if(A.code==="KeyM")return Q();if(V.expanded&&(A.code==="Equal"||A.code==="NumpadAdd"))return V.zoomAt(1.5);if(V.expanded&&(A.code==="Minus"||A.code==="NumpadSubtract"))return V.zoomAt(1/1.5);if(A.code==="KeyH"){rt.horn(3);return}if(A.code==="KeyF"){ae(!te),kt(te?"FPS COUNTER ON":"FPS COUNTER OFF");return}if(A.code==="KeyQ"){ie(rt.station+1>=Wi.length?-1:rt.station+1);return}J.keys.add(A.code)}}}),addEventListener("keyup",A=>J.keys.delete(A.code)),addEventListener("blur",()=>{J.clear(),z.state==="play"&&!z.paused&&$()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(J.clear(),z.state==="play"&&!z.paused&&$())}),J.onPadPress=A=>{if(A==="pause")return z.paused?w():z.state==="play"?$():j("free");z.state!=="play"||z.paused||(A==="camera"&&_(),A==="map"&&Q(),A==="reset"&&gt())};for(let A of document.querySelectorAll("[data-key]")){let ut=()=>{J.keys.delete(A.dataset.key),A.classList.remove("pressed")};A.addEventListener("pointerdown",Vt=>{Vt.preventDefault(),!z.paused&&(A.setPointerCapture(Vt.pointerId),J.keys.add(A.dataset.key),A.classList.add("pressed"))}),A.addEventListener("pointerup",ut),A.addEventListener("pointercancel",ut),A.addEventListener("lostpointercapture",ut)}addEventListener("resize",()=>s.applySize()),Lt("touch-cam").onclick=()=>_(),Lt("touch-radio").onclick=()=>ie(rt.station+1>=Wi.length?-1:rt.station+1),Lt("touch-reset").onclick=()=>{z.state==="play"&&!z.paused&&gt()},addEventListener("contextmenu",A=>{uh&&A.preventDefault()}),document.addEventListener("gesturestart",A=>A.preventDefault()),addEventListener("touchmove",A=>{z.state==="play"&&!A.target.closest("dialog, .map-panel.expanded")&&A.preventDefault()},{passive:!1});function nt(){if(!uh)return;let A=document.documentElement,ut=A.requestFullscreen||A.webkitRequestFullscreen;ut&&!document.fullscreenElement&&Promise.resolve(ut.call(A,{navigationUI:"hide"})).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{}),innerHeight>innerWidth&&setTimeout(()=>kt("TURN YOUR PHONE SIDEWAYS"),2600)}let tt=new I,_t=new I,ot=new I,vt=0,xt="",dt=Lt("world-clock"),Nt=document.querySelector(".sun-icon"),Bt=new I,ee=new ne,Re=new ne,Ae=!1;function _e(A,ut,Vt,fe,xe,jt,Qt){let Ie=0,ve=2e3;for(let Pe=0;Pe<3;Pe++){let Sn=Pe===0?A:Pe===1?ut:Vt,ln=Pe===0?fe:Pe===1?xe:jt,oi=Pe===0?Qt.x-Qt.w/2:Pe===1?0:Qt.z-Qt.d/2,cn=Pe===0?Qt.x+Qt.w/2:Pe===1?Qt.h:Qt.z+Qt.d/2;if(Math.abs(ln)<1e-6){if(Sn<oi||Sn>cn)return!1;continue}let en=(oi-Sn)/ln,un=(cn-Sn)/ln;if(en>un){let Pn=en;en=un,un=Pn}if(Ie=Math.max(Ie,en),ve=Math.min(ve,un),Ie>ve)return!1}return!0}function Dt(){let A=r.sunDir,ut=n.position;if(ot.copy(ut).addScaledVector(A,1e3).project(n),r.elevation<-.5||ot.z>1||A.y<.75&&o.topsGrid.segment(ut.x,ut.z,ut.x+A.x*900,ut.z+A.z*900,fe=>_e(ut.x,ut.y,ut.z,A.x,A.y,A.z,fe)))return 0;for(let fe=60;fe<3200;fe*=1.35)if(ut.y+A.y*fe<Ni(ut.x+A.x*fe,ut.z+A.z*fe))return 0;let Vt=Math.max(Math.abs(ot.x),Math.abs(ot.y));return ke.clamp(1.25-Vt,0,1)*ke.smoothstep(r.elevation,-.5,4)}function Ee(A){let ut=Math.abs(u.speed)>3,Vt=u.slip>3.2&&ut||u.wheelspin>.3,fe=u.surface==="sand"&&u.y<.5;u.group.updateMatrixWorld();let xe=new Ht().copy(r.hemi.color).multiplyScalar(r.hemi.intensity*.55).add(new Ht().copy(r.sun.color).multiplyScalar(r.elevation>0?r.sun.intensity*.22:0));y.smoke.uniforms.light.value.copy(xe),y.dust.uniforms.light.value.copy(xe),y.water.uniforms.light.value.copy(xe).multiplyScalar(1.3);for(let ve=D.length-1;ve>=0;ve--){let Pe=D[ve];if(Pe.t-=A,Pe.t<=0){D.splice(ve,1);continue}let Sn=Math.min(1,Pe.t/3)*70*A;for(let ln=0;ln<Sn+(bt()<Sn%1?1:0);ln++)y.water.emit(Pe.x+(bt()-.5)*.2,le+.3,Pe.z+(bt()-.5)*.2,(bt()-.5)*1.6,8.5+bt()*3.5,(bt()-.5)*1.6,.35+bt()*.25,1.5+bt()*.6,.5,.8,.88,.95)}u.wheels.forEach((ve,Pe)=>{if(ve.front)return;tt.set(ve.x,.05,ve.z).applyMatrix4(u.group.matrixWorld),M.add(Pe,tt.x,u.y,tt.z,!fe&&(Vt||u.brake>0&&u.speed>14&&u.handbrake),.24);let Sn=Math.min(1,(u.slip-3)/9)+u.wheelspin;!fe&&Vt&&bt()<Sn*60*A&&y.smoke.emit(tt.x,tt.y+.3,tt.z,u.vx*.15+(bt()-.5)*1.5,.6+bt(),u.vz*.15+(bt()-.5)*1.5,1.2+bt()*.8,2.2+bt()*1.2,.5*Math.min(1,Sn+.3),.85,.85,.86),fe&&ut&&bt()<Math.min(1,Math.abs(u.speed)/25)*40*A&&y.dust.emit(tt.x,tt.y+.2,tt.z,(bt()-.5)*2,.8+bt(),(bt()-.5)*2,.9+bt()*.6,1.4+bt(),.55,.78,.68,.52)});let jt=Bt.set(Math.sin(u.heading),0,Math.cos(u.heading));for(let ve of u.exhausts)if(tt.copy(ve).applyMatrix4(u.group.matrixWorld),u.boosting)for(let Pe=0;Pe<2;Pe++){let Sn=bt(),ln=bt()<.35,oi=7+bt()*5;y.flames.emit(tt.x,tt.y,tt.z,u.vx+jt.x*oi,bt()*.4,u.vz+jt.z*oi,.3+bt()*.25,.1+bt()*.08,1,ln?.6:1.4+Sn,ln?1.1:.8+Sn*1.4,ln?4.5:2.8)}else u.throttle===0&&u.rpm>u.def.redline*.6&&bt()<3*A&&(y.flames.emit(tt.x,tt.y,tt.z,u.vx+jt.x*3,0,u.vz+jt.z*3,.35,.07,1,2.2,1.1,.4),rt.backfire?.());let Qt=u.contact;if(Qt&&u.impact>3){let ve=Math.min(46,Math.floor(u.impact*2.2));for(let Pe=0;Pe<ve;Pe++)y.sparks.emit(Qt.x,u.y+.35+bt()*.4,Qt.z,Qt.nx*4+(bt()-.5)*9,1+bt()*5,Qt.nz*4+(bt()-.5)*9,.12+bt()*.1,.4+bt()*.5,1,6,3.2,1);if(u.impact>4)for(let Pe=0;Pe<4;Pe++)y.dust.emit(Qt.x,u.y+.5,Qt.z,(bt()-.5)*2,bt(),(bt()-.5)*2,.6,1.1,.35,.6,.58,.55);rt.impact(u.impact),k.shake=Math.max(k.shake,Math.min(.55,u.impact*.035))}let Ie=u.scrape;if(Ie){let ve=Math.min(6,1+Math.floor(Ie.speed/8));for(let Pe=0;Pe<ve;Pe++)y.sparks.emit(Ie.x,u.y+.3+bt()*.3,Ie.z,-u.vx*.25+Ie.nx*2+(bt()-.5)*3,.5+bt()*2.5,-u.vz*.25+Ie.nz*2+(bt()-.5)*3,.1+bt()*.08,.25+bt()*.3,1,6,3,.9);rt.scrape?.(Ie.speed)}}function E(A){if(z.mode!=="race"||z.checkpoint>=z.route.length||z.countdown>.6)return;z.raceTime+=A,z.topSpeed=Math.max(z.topSpeed,Math.abs(u.speed));let[ut,Vt]=z.route[z.checkpoint],fe=z.lastX,xe=z.lastZ,jt=u.x-fe,Qt=u.z-xe,Ie=jt*jt+Qt*Qt,ve=Ie?ke.clamp(((ut-fe)*jt+(Vt-xe)*Qt)/Ie,0,1):0;Math.hypot(ut-fe-jt*ve,Vt-xe-Qt*ve)<Dc&&(z.checkpoint++,z.splits.push(z.raceTime),z.checkpoint===z.route.length?q():(at(),rt.chime(),kt(`CHECKPOINT ${z.checkpoint} / ${z.route.length}`),z.flash=1))}function H(A,ut){u.contact=null,u.scrape=null,u.impact=0,p.update(A,z.time,u),m.peds=p.onRoad,m.update(A,z.time,u,jt=>rt.horn(Math.hypot(jt.x-u.x,jt.z-u.z)),n);for(let jt of p.events)jt.type==="hit"&&(rt.impact(Math.min(jt.speed,8)),k.shake=Math.max(k.shake,.08),z.state==="play"&&st("pedestrian",u.x,u.z,1));if(z.state!=="play")return;X(A)&&(ut={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},u.vx=u.vz=0);let Vt=m.lastHit;Vt&&Vt.speed>4&&(z.crashes+=Vt.speed>7?1:0,Vt.police&&(Vt.car.mode!=="chase"||O.level<2)?st("police",Vt.x,Vt.z,1,!1):(!Vt.parked||Vt.speed>8)&&st("crash",Vt.x,Vt.z,1));let fe=u.impact,xe=Math.ceil(A/(1/120));for(let jt=0;jt<xe&&(z.lastX=u.x,z.lastZ=u.z,u.update(A/xe,ut,B),fe=Math.max(fe,u.impact),E(A/xe),!z.paused);jt++);h.collide(u,A,jt=>ht(jt)),h.update(A,u),u.impact=Math.max(fe,u.impact),u.applyDamage(),et(),O.update(A,u,z.time,n,z.mode==="free"&&he!=="off");for(let jt of O.events)jt.type==="up"&&kt(`WANTED  ${"\u2605".repeat(jt.level)}`),jt.type==="evaded"&&(kt("YOU LOST THEM"),rt.chime()),jt.type==="busted"&&Ft()}function st(A,ut,Vt,fe,xe=!0){z.mode!=="free"||he==="off"||O.crime(A,ut,Vt,fe,z.time,xe)}let lt=!1;function et(){let A=ls(u.x),ut=Ps(u.z),Vt=Math.abs(u.x-A)<Me-1&&Math.abs(u.z-ut)<Me-1;if(Vt&&!lt&&Math.abs(u.speed)>9){let fe=Math.abs(u.vx)>Math.abs(u.vz)?1:0;Ls(fe,z.time)===0&&st("red light",u.x,u.z,1)}lt=Vt}function Ft(){kt("BUSTED"),z.flash=1.5,rt.impact(4),u.safeRespawn(),z.lastX=u.x,z.lastZ=u.z,k.snap(u)}let se=new na,ge=[u.group],ce=1,Se=0;t.info.autoReset=!1;function Ce(){requestAnimationFrame(Ce),t.info.reset();let A=se.getDelta(),ut=Math.min(A,.05);z.time+=ut,z.frame++;let Vt=J.poll();z.paused||(H(ut,Vt),z.state==="play"?(Ee(ut),k.update(u,ut)):k.orbit(u,z.time)),u.setLights(r.lampFactor,u.gear<0?u.throttle>0:u.brake>0&&u.speed>.5,u.gear<0&&z.state==="play",ut);let fe=tt.set(u.x-Math.sin(u.heading)*s.quality.shadowRange*.35,0,u.z-Math.cos(u.heading)*s.quality.shadowRange*.35);r.update(ut,z.time,fe,n),Qu.value.copy(r.sun.color).multiplyScalar(r.elevation>-1?r.sun.intensity:.1),o.update(r.lampFactor,z.time),Se-=A,Se<=0&&(Se=.2,Zu(n.position.x,n.position.z)),l.update(z.time,r.lampFactor),f.update(r.lampFactor),a.mirrorHide.length=0,k.mode===2&&a.mirrorHide.push(u.group),a.update(z.time,r),m.sync(r.lampFactor,u,z.time);for(let en of Object.values(y))en.update(z.paused?0:ut);v.visible&&(S.position.y=12+Math.sin(z.time*2)*.6,S.rotation.y=z.time*.8,b.uniforms.intensity.value=.55+Math.sin(z.time*3)*.12,P.opacity=.65+Math.sin(z.time*3)*.15),t.toneMappingExposure=r.exposure;let xe=s.grade.uniforms;xe.time.value=z.time,vt=ke.damp(vt,Dt(),10,ut),xe.sunVisible.value=s.quality.grade?vt*.8:0,xe.sunPos.value.set(ot.x*.5+.5,ot.y*.5+.5),xe.sunColor.value.copy(tn.fogSunColor.value),n.getWorldDirection(_t);let jt=_t.dot(r.sunDir),Qt=ke.smoothstep(r.elevation,-1,2)*(1-ke.smoothstep(r.elevation,14,30)),Ie=s.shafts.uniforms;Ie.strength.value=ot.z<1?ke.smoothstep(jt,.25,.85)*Qt*.9:0,Ie.sunPos.value.copy(xe.sunPos.value),Ie.color.value.copy(r.sun.color).multiplyScalar(.9);let ve=Wt==="wet"?.9:Wt==="dry"?0:ke.smoothstep(r.lampFactor,.15,.85)*.85;if(ci.wetness.value=ve,B.wetness=ve,n.updateMatrixWorld(),Re.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),xe.camBlur.value.set(0,0),Ae&&z.state==="play"&&!z.paused&&s.quality.grade){tt.copy(n.position).addScaledVector(_t,80).applyMatrix4(ee);let en=tt.x*.5,un=tt.y*.5,Pn=Math.hypot(en,un);if(Pn<.12){let Yn=(Pn>.035?.035/Pn:1)*s.film.blur;xe.camBlur.value.set(en*Yn,un*Yn)}}ee.copy(Re),Ae=!0;let Pe=ke.clamp((Math.abs(u.speed)-30)/35,0,1);xe.speedBlur.value=z.state==="play"&&s.quality.grade?(Pe*.6+(u.boosting?.45:0))*s.film.blur:0,z.flash=Math.max(0,z.flash-ut*3),xe.flash.value=z.flash,xe.night.value=r.nightFactor,xe.warmth.value=ke.smoothstep(r.elevation,-6,1)*(1-ke.smoothstep(r.elevation,9,24));let Sn=z.state!=="play"?.7:k.mode===3?.6:0;ce=ke.damp(ce,Sn,4,ut),xe.dof.value=ce,xe.focus.value=Math.max(2,n.position.distanceTo(u.group.position)-.6),s.bloom&&(s.bloom.strength=.28+r.lampFactor*.2),s.beginFrame(),n.getWorldDirection(_t),g.update(A,tt.set(n.position.x+_t.x*330,0,n.position.z+_t.z*330),r.lightDir,en=>{let un=v.visible;a.mirror.paused=!0,r.sky.visible=a.ocean.visible=v.visible=!1,en(),v.visible=un,r.sky.visible=a.ocean.visible=!0,a.mirror.paused=!1}),x.size&&!z.paused&&x.update(u.group.position,ge,Math.min(1,e.environmentIntensity*1.9),en=>{let un=r.sky.material.uniforms.skyDisc;a.mirror.paused=!0,un.value=0,en(),un.value=1,a.mirror.paused=!1}),s.render(),z.state==="play"&&z.frame%2===0&&V.update(u,z,m,r,O),rt.setSiren(z.state==="play"?O.sirenLevel(u):0);let ln=r.clockLabel;ln!==xt&&(xt=ln,dt.textContent=ln,Nt.textContent=r.elevation>-1.5?"\u2600":"\u263E");let oi=Lc(u.x,u.z),cn=u.gear>0?u.def.gears[u.gear-1]*u.def.final:u.def.gears[0]*u.def.final;if(rt.update({rpm:u.rpm,throttle:u.throttle,speed:u.speed,slip:u.slip+u.wheelspin*12,boosting:u.boosting,active:z.state==="play"&&!z.paused,shoreDistance:Math.abs(n.position.x-ti),time:z.time,gear:u.gear,ratio:cn,night:r.nightFactor,city:oi[2],nearTrees:oi[3]>.5?.6:.2}),z.state==="play"&&!z.paused&&(s.adapt(A),s.resolution!=="auto"&&!Ot.told&&(Ot.time+=A,Ot.frames++,Ot.time>6&&(Ot.frames/Ot.time<24&&(Ot.told=!0,kt("LOW FRAME RATE \xB7 TRY RESOLUTION: AUTO IN SETTINGS")),Ot.time=0,Ot.frames=0))),te&&(yt.frames++,yt.time+=A,yt.worst=Math.max(yt.worst,A),yt.time>=.5)){let en=yt.frames/yt.time,un=yt.time/yt.frames*1e3;Rt.textContent=`${Math.round(en)} FPS \xB7 ${un.toFixed(1)} MS \xB7 WORST ${(yt.worst*1e3).toFixed(0)} \xB7 ${t.info.render.calls} DRAWS \xB7 ${(t.info.render.triangles/1e6).toFixed(1)}M TRIS \xB7 ${s.size.x}\xD7${s.size.y}`,Rt.classList.toggle("slow",en<50&&en>=30),Rt.classList.toggle("bad",en<30),yt.frames=0,yt.time=0,yt.worst=0}}u.onShift=A=>rt.shift(A>0),await i("Warming up the engine\u2026"),k.orbit(u,0),r.update(0,0,tt.set(u.x,0,u.z),n),Zu(u.x,u.z);try{await t.compileAsync(e,n)}catch{}Ce(),requestAnimationFrame(()=>Lt("loading").classList.add("hidden")),window.__pacific={getState:()=>({state:z.state,mode:z.mode,paused:z.paused,speed:u.speed,heading:u.heading,nitro:u.nitro,position:{x:u.x,z:u.z,y:u.y},checkpoint:z.checkpoint,raceTime:z.raceTime,quality:At,time:r.hours,gear:u.gear,rpm:u.rpm,distanceTravelled:u.distance,renderScale:s.scale,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,wanted:O.level,countdown:z.countdown,car:d}),setTime:A=>{r.cycle=!1,r.setHours(A)},setQuality:zt,teleport:(A,ut,Vt=0)=>{u.reset(A,ut,Vt),k.snap(u)},step:(A,ut={})=>{let Vt={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1,...ut};for(let fe=0;fe<A&&!z.paused;fe+=1/60)z.time+=1/60,H(1/60,Vt);return k.snap(u),window.__pacific.getState()},parked:()=>({total:m.parked.length,near:m.nearParked.length,sample:m.nearParked.slice(0,3).map(A=>[A.type,+A.x.toFixed(1),+A.z.toFixed(1),A.slot])}),traffic:()=>m.cars.map(A=>({x:+A.x.toFixed(1),z:+A.z.toFixed(1),speed:+A.speed.toFixed(1),axis:A.axis,turn:!!A.turn,hit:!!A.hit})),reset:gt,camera:_,debug:{scene:e,atmosphere:r,pipeline:s,renderer:t,camera:n,rig:k,traffic:m,pedestrians:p,player:u,knock:h,world:B,audio:rt,wanted:O,hud:V,game:z,input:J,city:o,vegetation:c,lodStats:Bp,farShadow:g,probe:x},selectCar:pt}}_M().catch(w0);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
