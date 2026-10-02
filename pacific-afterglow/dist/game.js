var Du=0,jc=1,Lu=2;var th=1,Ia=2,fi=3,Ti=0,mn=1,nn=2,Je=0,Ai=1,Tn=2,eh=3,nh=4,Da=5,Nn=100,Uu=101,Nu=102,Fu=103,zu=104,xs=200,Ou=201,Bu=202,ku=203,aa=204,la=205,oo=206,Hu=207,ao=208,Vu=209,Gu=210,Wu=211,Xu=212,qu=213,Yu=214,La=0,Ua=1,Na=2,ls=3,Fa=4,za=5,Oa=6,Ba=7,ih=0,Zu=1,$u=2,Pi=0,ka=1,Ha=2,Va=3,lr=4,Ga=5,Wa=6,Xa=7;var sh=300,vs=301,ys=302,qa=303,Ya=304,lo=306,qn=1e3,Gi=1001,ca=1002,pn=1003,Ku=1004;var co=1005;var ei=1006,Za=1007;var Zi=1008;var zn=1009,rh=1010,oh=1011,cr=1012,$a=1013,$i=1014,ni=1015,sn=1016,Ka=1017,Ja=1018,Ki=1020,ah=35902,lh=35899,ch=1021,hh=1022,An=1023,tr=1026,Ji=1027,Qa=1028,ja=1029,uh=1030,tl=1031;var el=1033,ho=33776,uo=33777,fo=33778,po=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,ll=37496,cl=37808,hl=37809,ul=37810,fl=37811,dl=37812,pl=37813,ml=37814,gl=37815,xl=37816,vl=37817,yl=37818,_l=37819,Ml=37820,bl=37821,Sl=36492,El=36494,wl=36495,Tl=36283,Al=36284,Rl=36285,Cl=36286;var Fr=2300,ha=2301,oa=2302,Xc=2400,qc=2401,Yc=2402;var Ju=3200,Pl=3201;var Il=0,Qu=1,Ii="",dn="srgb",cs="srgb-linear",zr="linear",Se="srgb";var as=7680;var Zc=519,ju=512,tf=513,ef=514,fh=515,nf=516,sf=517,rf=518,of=519,$c=35044,Yn=35048;var dh="300 es",ti=2e3,Or=2001;var Ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ou=1234567,Ur=Math.PI/180,hs=180/Math.PI;function hr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ge(s,t,e){return Math.max(t,Math.min(e,s))}function ph(s,t){return(s%t+t)%t}function wd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Td(s,t,e){return s!==t?(e-s)/(t-s):0}function Nr(s,t,e){return(1-e)*s+e*t}function Ad(s,t,e,n){return Nr(s,t,1-Math.exp(-e*n))}function Rd(s,t=1){return t-Math.abs(ph(s,t*2)-t)}function Cd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Pd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Id(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Dd(s,t){return s+Math.random()*(t-s)}function Ld(s){return s*(.5-Math.random())}function Ud(s){s!==void 0&&(ou=s);let t=ou+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(s){return s*Ur}function Fd(s){return s*hs}function zd(s){return(s&s-1)===0&&s!==0}function Od(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*l,c*f,c*d,a*h);break;case"YZY":s.set(c*d,a*l,c*f,a*h);break;case"ZXZ":s.set(c*f,c*d,a*l,a*h);break;case"XZX":s.set(a*l,c*g,c*u,a*h);break;case"YXY":s.set(c*u,a*l,c*g,a*h);break;case"ZYZ":s.set(c*g,c*u,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _n(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var _e={DEG2RAD:Ur,RAD2DEG:hs,generateUUID:hr,clamp:ge,euclideanModulo:ph,mapLinear:wd,inverseLerp:Td,lerp:Nr,damp:Ad,pingpong:Rd,smoothstep:Cd,smootherstep:Pd,randInt:Id,randFloat:Dd,randFloatSpread:Ld,seededRandom:Ud,degToRad:Nd,radToDeg:Fd,isPowerOfTwo:zd,ceilPowerOfTwo:Od,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:kd,normalize:_n,denormalize:Qs},Ht=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},de=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],h=n[i+1],l=n[i+2],f=n[i+3],d=r[o+0],u=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==d||h!==u||l!==g){let m=1-a,p=c*d+h*u+l*g+f*x,_=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let T=Math.sqrt(w),C=Math.atan2(T,p*_);m=Math.sin(m*C)/T,a=Math.sin(a*C)/T}let M=a*_;if(c=c*m+d*M,h=h*m+u*M,l=l*m+g*M,f=f*m+x*M,m===1-a){let T=1/Math.sqrt(c*c+h*h+l*l+f*f);c*=T,h*=T,l*=T,f*=T}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],h=n[i+2],l=n[i+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+l*f+c*u-h*d,t[e+1]=c*g+l*d+h*f-a*u,t[e+2]=h*g+l*u+a*d-c*f,t[e+3]=l*g-a*f-c*d-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(i/2),f=a(r/2),d=c(n/2),u=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"YXZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"ZXY":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"ZYX":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"YZX":this._x=d*l*f+h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f-d*u*g;break;case"XZY":this._x=d*l*f-h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(l-c)*u,this._y=(r-h)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(l-c)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+h)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-h)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(c+l)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+h)/u,this._y=(c+l)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+i*h-r*c,this._y=i*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-i*a,this._w=o*l-n*a-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,a),f=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(au.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*i-a*n),l=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+c*h+o*f-a*l,this.y=n+c*l+a*h-r*f,this.z=i+c*f+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bc.copy(this).projectOnVector(t),this.sub(bc)}reflect(t){return this.sub(bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new L,au=new de,ue=class s{constructor(t,e,n,i,r,o,a,c,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h)}set(t,e,n,i,r,o,a,c,h){let l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],f=n[7],d=n[2],u=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],w=i[4],M=i[7],T=i[2],C=i[5],R=i[8];return r[0]=o*x+a*_+c*T,r[3]=o*m+a*w+c*C,r[6]=o*p+a*M+c*R,r[1]=h*x+l*_+f*T,r[4]=h*m+l*w+f*C,r[7]=h*p+l*M+f*R,r[2]=d*x+u*_+g*T,r[5]=d*m+u*w+g*C,r[8]=d*p+u*M+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+i*r*h-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=l*o-a*h,d=a*c-l*r,u=h*r-o*c,g=e*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(i*h-l*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(l*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=u*x,t[7]=(n*c-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-i*h,i*c,-i*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Sc.makeScale(t,e)),this}rotate(t){return this.premultiply(Sc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sc=new ue;function mh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function af(){let s=Br("canvas");return s.style.display="block",s}var lu={};function er(s){s in lu||(lu[s]=!0,console.warn(s))}function lf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var cu=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hd(){let s={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?zr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[cs]:{primaries:t,whitePoint:n,transfer:zr,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),s}var ye=Hd();function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Bs,ua=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bs===void 0&&(Bs=Br("canvas")),Bs.width=t.width,Bs.height=t.height;let i=Bs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vd=0,nr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=hr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ec(i[o].image)):r.push(Ec(i[o]))}else r=Ec(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ec(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ua.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gd=0,wc=new L,Mn=class s extends Ri{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Gi,i=Gi,r=ei,o=Zi,a=An,c=zn,h=s.DEFAULT_ANISOTROPY,l=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=hr(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qn:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qn:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=sh;Mn.DEFAULT_ANISOTROPY=1;var Ne=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,h=c[0],l=c[4],f=c[8],d=c[1],u=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(h+1)/2,M=(u+1)/2,T=(p+1)/2,C=(l+d)/4,R=(f+x)/4,A=(g+m)/4;return w>M&&w>T?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=C/n,r=R/n):M>T?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=C/i,r=A/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=R/r,i=A/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(d-l)/_,this.w=Math.acos((h+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fa=class extends Ri{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new Mn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new nr(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends fa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},kr=class extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var da=class extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pn,this.minFilter=pn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(t.matrixWorld),this.union(Bo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),ko.subVectors(this.max,Ar),ks.subVectors(t.a,Ar),Hs.subVectors(t.b,Ar),Vs.subVectors(t.c,Ar),Fi.subVectors(Hs,ks),zi.subVectors(Vs,Hs),is.subVectors(ks,Vs);let e=[0,-Fi.z,Fi.y,0,-zi.z,zi.y,0,-is.z,is.y,Fi.z,0,-Fi.x,zi.z,0,-zi.x,is.z,0,-is.x,-Fi.y,Fi.x,0,-zi.y,zi.x,0,-is.y,is.x,0];return!Tc(e,ks,Hs,Vs,ko)||(e=[1,0,0,0,1,0,0,0,1],!Tc(e,ks,Hs,Vs,ko))?!1:(Ho.crossVectors(Fi,zi),e=[Ho.x,Ho.y,Ho.z],Tc(e,ks,Hs,Vs,ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_i=[new L,new L,new L,new L,new L,new L,new L,new L],Jn=new L,Bo=new li,ks=new L,Hs=new L,Vs=new L,Fi=new L,zi=new L,is=new L,Ar=new L,ko=new L,Ho=new L,ss=new L;function Tc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ss.fromArray(s,r);let a=i.x*Math.abs(ss.x)+i.y*Math.abs(ss.y)+i.z*Math.abs(ss.z),c=t.dot(ss),h=e.dot(ss),l=n.dot(ss);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}var Wd=new li,Rr=new L,Ac=new L,Ci=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);let e=Rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(Ac)),this.expandByPoint(Rr.copy(t.center).sub(Ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mi=new L,Rc=new L,Vo=new L,Oi=new L,Cc=new L,Go=new L,Pc=new L,Hr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Rc.copy(t).add(e).multiplyScalar(.5),Vo.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(Rc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Vo),a=Oi.dot(this.direction),c=-Oi.dot(Vo),h=Oi.lengthSq(),l=Math.abs(1-o*o),f,d,u,g;if(l>0)if(f=o*c-a,d=o*a-c,g=r*l,f>=0)if(d>=-g)if(d<=g){let x=1/l;f*=x,d*=x,u=f*(f+o*d+2*a)+d*(o*f+d+2*c)+h}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+h):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Rc).addScaledVector(Vo,d),u}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,h=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),l>=0?(r=(t.min.y-d.y)*l,o=(t.max.y-d.y)*l):(r=(t.max.y-d.y)*l,o=(t.min.y-d.y)*l),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,i,r){Cc.subVectors(e,t),Go.subVectors(n,t),Pc.crossVectors(Cc,Go);let o=this.direction.dot(Pc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);let c=a*this.direction.dot(Go.crossVectors(Oi,Go));if(c<0)return null;let h=a*this.direction.dot(Cc.cross(Oi));if(h<0||c+h>o)return null;let l=-a*Oi.dot(Pc);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class s{constructor(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m)}set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=l,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),o=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*l,u=o*f,g=a*l,x=a*f;e[0]=c*l,e[4]=-c*f,e[8]=h,e[1]=u+g*h,e[5]=d-x*h,e[9]=-a*c,e[2]=x-d*h,e[6]=g+u*h,e[10]=o*c}else if(t.order==="YXZ"){let d=c*l,u=c*f,g=h*l,x=h*f;e[0]=d+x*a,e[4]=g*a-u,e[8]=o*h,e[1]=o*f,e[5]=o*l,e[9]=-a,e[2]=u*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*l,u=c*f,g=h*l,x=h*f;e[0]=d-x*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*l,e[9]=x-d*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*l,u=o*f,g=a*l,x=a*f;e[0]=c*l,e[4]=g*h-u,e[8]=d*h+x,e[1]=c*f,e[5]=x*h+d,e[9]=u*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,u=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=x-d*f,e[8]=g*f+u,e[1]=f,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=u*f+g,e[10]=d-x*f}else if(t.order==="XZY"){let d=o*c,u=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=-f,e[8]=h*l,e[1]=d*f+x,e[5]=o*l,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*l,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xd,t,qd)}lookAt(t,e,n){let i=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Bi.crossVectors(n,Ln),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Bi.crossVectors(n,Ln)),Bi.normalize(),Wo.crossVectors(Ln,Bi),i[0]=Bi.x,i[4]=Wo.x,i[8]=Ln.x,i[1]=Bi.y,i[5]=Wo.y,i[9]=Ln.y,i[2]=Bi.z,i[6]=Wo.z,i[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],f=n[5],d=n[9],u=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],w=n[7],M=n[11],T=n[15],C=i[0],R=i[4],A=i[8],S=i[12],E=i[1],D=i[5],z=i[9],k=i[13],Z=i[2],P=i[6],Y=i[10],W=i[14],H=i[3],et=i[7],vt=i[11],bt=i[15];return r[0]=o*C+a*E+c*Z+h*H,r[4]=o*R+a*D+c*P+h*et,r[8]=o*A+a*z+c*Y+h*vt,r[12]=o*S+a*k+c*W+h*bt,r[1]=l*C+f*E+d*Z+u*H,r[5]=l*R+f*D+d*P+u*et,r[9]=l*A+f*z+d*Y+u*vt,r[13]=l*S+f*k+d*W+u*bt,r[2]=g*C+x*E+m*Z+p*H,r[6]=g*R+x*D+m*P+p*et,r[10]=g*A+x*z+m*Y+p*vt,r[14]=g*S+x*k+m*W+p*bt,r[3]=_*C+w*E+M*Z+T*H,r[7]=_*R+w*D+M*P+T*et,r[11]=_*A+w*z+M*Y+T*vt,r[15]=_*S+w*k+M*W+T*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],f=t[6],d=t[10],u=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*f-i*h*f-r*a*d+n*h*d+i*a*u-n*c*u)+x*(+e*c*u-e*h*d+r*o*d-i*o*u+i*h*l-r*c*l)+m*(+e*h*f-e*a*u-r*o*f+n*o*u+r*a*l-n*h*l)+p*(-i*a*l-e*c*f+e*a*d+i*o*f-n*o*d+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=t[9],d=t[10],u=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=f*m*h-x*d*h+x*c*u-a*m*u-f*c*p+a*d*p,w=g*d*h-l*m*h-g*c*u+o*m*u+l*c*p-o*d*p,M=l*x*h-g*f*h+g*a*u-o*x*u-l*a*p+o*f*p,T=g*f*c-l*x*c-g*a*d+o*x*d+l*a*m-o*f*m,C=e*_+n*w+i*M+r*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=_*R,t[1]=(x*d*r-f*m*r-x*i*u+n*m*u+f*i*p-n*d*p)*R,t[2]=(a*m*r-x*c*r+x*i*h-n*m*h-a*i*p+n*c*p)*R,t[3]=(f*c*r-a*d*r-f*i*h+n*d*h+a*i*u-n*c*u)*R,t[4]=w*R,t[5]=(l*m*r-g*d*r+g*i*u-e*m*u-l*i*p+e*d*p)*R,t[6]=(g*c*r-o*m*r-g*i*h+e*m*h+o*i*p-e*c*p)*R,t[7]=(o*d*r-l*c*r+l*i*h-e*d*h-o*i*u+e*c*u)*R,t[8]=M*R,t[9]=(g*f*r-l*x*r-g*n*u+e*x*u+l*n*p-e*f*p)*R,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*p+e*a*p)*R,t[11]=(l*a*r-o*f*r-l*n*h+e*f*h+o*n*u-e*a*u)*R,t[12]=T*R,t[13]=(l*x*i-g*f*i+g*n*d-e*x*d-l*n*m+e*f*m)*R,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*m-e*a*m)*R,t[15]=(o*f*i-l*a*i+l*n*c-e*f*c-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-i*c,h*c+i*a,0,h*a+i*c,l*a+n,l*c-i*o,0,h*c-i*a,l*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,f=a+a,d=r*h,u=r*l,g=r*f,x=o*l,m=o*f,p=a*f,_=c*h,w=c*l,M=c*f,T=n.x,C=n.y,R=n.z;return i[0]=(1-(x+p))*T,i[1]=(u+M)*T,i[2]=(g-w)*T,i[3]=0,i[4]=(u-M)*C,i[5]=(1-(d+p))*C,i[6]=(m+_)*C,i[7]=0,i[8]=(g+w)*R,i[9]=(m-_)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Gs.set(i[0],i[1],i[2]).length(),o=Gs.set(i[4],i[5],i[6]).length(),a=Gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qn.copy(this);let h=1/r,l=1/o,f=1/a;return Qn.elements[0]*=h,Qn.elements[1]*=h,Qn.elements[2]*=h,Qn.elements[4]*=l,Qn.elements[5]*=l,Qn.elements[6]*=l,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,e.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ti,c=!1){let h=this.elements,l=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===ti)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Or)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=f,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ti,c=!1){let h=this.elements,l=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===ti)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Or)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=f,h[9]=0,h[13]=u,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gs=new L,Qn=new Dt,Xd=new L(0,0,0),qd=new L(1,1,1),Bi=new L,Wo=new L,Ln=new L,uu=new Dt,fu=new de,Ze=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],h=i[5],l=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fu.setFromEuler(this),this.setFromQuaternion(fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ze.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yd=0,du=new L,Ws=new de,bi=new Dt,Xo=new L,Cr=new L,Zd=new L,$d=new de,pu=new L(1,0,0),mu=new L(0,1,0),gu=new L(0,0,1),xu={type:"added"},Kd={type:"removed"},Xs={type:"childadded",child:null},Ic={type:"childremoved",child:null},$e=class s extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Ze,n=new de,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new ue}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(pu,t)}rotateY(t){return this.rotateOnAxis(mu,t)}rotateZ(t){return this.rotateOnAxis(gu,t)}translateOnAxis(t,e){return du.copy(t).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pu,t)}translateY(t){return this.translateOnAxis(mu,t)}translateZ(t){return this.translateOnAxis(gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xo.copy(t):Xo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Cr,Xo,this.up):bi.lookAt(Xo,Cr,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),Ws.setFromRotationMatrix(bi),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xu),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kd),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xu),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,Zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,$d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let f=c[h];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let h in a){let l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};$e.DEFAULT_UP=new L(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new L,Si=new L,Dc=new L,Ei=new L,qs=new L,Ys=new L,vu=new L,Lc=new L,Uc=new L,Nc=new L,Fc=new Ne,zc=new Ne,Oc=new Ne,Vi=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),jn.subVectors(t,e),i.cross(jn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){jn.subVectors(i,e),Si.subVectors(n,e),Dc.subVectors(t,e);let o=jn.dot(jn),a=jn.dot(Si),c=jn.dot(Dc),h=Si.dot(Si),l=Si.dot(Dc),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(h*c-a*l)*d,g=(o*l-a*c)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(o,Ei.y),c.addScaledVector(a,Ei.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Fc.setScalar(0),zc.setScalar(0),Oc.setScalar(0),Fc.fromBufferAttribute(t,e),zc.fromBufferAttribute(t,n),Oc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Fc,r.x),o.addScaledVector(zc,r.y),o.addScaledVector(Oc,r.z),o}static isFrontFacing(t,e,n,i){return jn.subVectors(n,e),Si.subVectors(t,e),jn.cross(Si).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),jn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;qs.subVectors(i,n),Ys.subVectors(r,n),Lc.subVectors(t,n);let c=qs.dot(Lc),h=Ys.dot(Lc);if(c<=0&&h<=0)return e.copy(n);Uc.subVectors(t,i);let l=qs.dot(Uc),f=Ys.dot(Uc);if(l>=0&&f<=l)return e.copy(i);let d=c*f-l*h;if(d<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(qs,o);Nc.subVectors(t,r);let u=qs.dot(Nc),g=Ys.dot(Nc);if(g>=0&&u<=g)return e.copy(r);let x=u*h-c*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(Ys,a);let m=l*g-u*f;if(m<=0&&f-l>=0&&u-g>=0)return vu.subVectors(r,i),a=(f-l)/(f-l+(u-g)),e.copy(i).addScaledVector(vu,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Bc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ye.workingColorSpace){if(t=ph(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Bc(o,r,t+1/3),this.g=Bc(o,r,t),this.b=Bc(o,r,t-1/3)}return ye.colorSpaceToWorking(this,i),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){let n=cf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return ye.workingToColorSpace(xn.copy(this),t),Math.round(ge(xn.r*255,0,255))*65536+Math.round(ge(xn.g*255,0,255))*256+Math.round(ge(xn.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(xn.copy(this),e);let n=xn.r,i=xn.g,r=xn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,h,l=(a+o)/2;if(a===o)c=0,h=0;else{let f=o-a;switch(h=l<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=dn){ye.workingToColorSpace(xn.copy(this),t);let e=xn.r,n=xn.g,i=xn.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(qo);let n=Nr(ki.h,qo.h,e),i=Nr(ki.s,qo.s,e),r=Nr(ki.l,qo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Tt;Tt.NAMES=cf;var Jd=0,ci=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Ai,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qe=class extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ke=new L,Yo=new Ht,Qd=0,Xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$c,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$c&&(t.usage=this.usage),t}};var Gr=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wr=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},jd=0,Wn=new Dt,kc=new $e,Zs=new L,Un=new li,Pr=new li,ln=new L,Ee=class s extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mh(t)?Wr:Gr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Un.min,Pr.min),Un.expandByPoint(ln),ln.addVectors(Un.max,Pr.max),Un.expandByPoint(ln)):(Un.expandByPoint(Pr.min),Un.expandByPoint(Pr.max))}Un.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ln.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ln));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)ln.fromBufferAttribute(a,h),c&&(Zs.fromBufferAttribute(t,h),ln.add(Zs)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new L,c[A]=new L;let h=new L,l=new L,f=new L,d=new Ht,u=new Ht,g=new Ht,x=new L,m=new L;function p(A,S,E){h.fromBufferAttribute(n,A),l.fromBufferAttribute(n,S),f.fromBufferAttribute(n,E),d.fromBufferAttribute(r,A),u.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),l.sub(h),f.sub(h),u.sub(d),g.sub(d);let D=1/(u.x*g.y-g.x*u.y);isFinite(D)&&(x.copy(l).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(D),m.copy(f).multiplyScalar(u.x).addScaledVector(l,-g.x).multiplyScalar(D),a[A].add(x),a[S].add(x),a[E].add(x),c[A].add(m),c[S].add(m),c[E].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let A=0,S=_.length;A<S;++A){let E=_[A],D=E.start,z=E.count;for(let k=D,Z=D+z;k<Z;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let w=new L,M=new L,T=new L,C=new L;function R(A){T.fromBufferAttribute(i,A),C.copy(T);let S=a[A];w.copy(S),w.sub(T.multiplyScalar(T.dot(S))).normalize(),M.crossVectors(C,S);let D=M.dot(c[A])<0?-1:1;o.setXYZW(A,w.x,w.y,w.z,D)}for(let A=0,S=_.length;A<S;++A){let E=_[A],D=E.start,z=E.count;for(let k=D,Z=D+z;k<Z;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,h=new L,l=new L,f=new L;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(a,c){let h=a.array,l=a.itemSize,f=a.normalized,d=new h.constructor(c.length*l),u=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*l;for(let p=0;p<l;p++)d[g++]=h[u++]}return new Xe(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let l=0,f=h.length;l<f;l++){let d=h[l],u=t(d,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let f=0,d=h.length;f<d;f++){let u=h[f];l.push(u.toJSON(t.data))}l.length>0&&(i[c]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let l=i[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],f=r[h];for(let d=0,u=f.length;d<u;d++)l.push(f[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,l=o.length;h<l;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yu=new Dt,rs=new Hr,Zo=new Ci,_u=new L,$o=new L,Ko=new L,Jo=new L,Hc=new L,Qo=new L,Mu=new L,jo=new L,Ut=class extends $e{constructor(t=new Ee,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=a[c],f=r[c];l!==0&&(Hc.fromBufferAttribute(f,t),o?Qo.addScaledVector(Hc,l):Qo.addScaledVector(Hc.sub(e),l))}e.add(Qo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(Zo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Zo,_u)===null||rs.origin.distanceToSquared(_u)>(t.far-t.near)**2))&&(yu.copy(r).invert(),rs.copy(t.ray).applyMatrix4(yu),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,u.start),w=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=_,T=w;M<T;M+=3){let C=a.getX(M),R=a.getX(M+1),A=a.getX(M+2);i=ta(this,p,t,n,h,l,f,C,R,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);i=ta(this,o,t,n,h,l,f,_,w,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,u.start),w=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let M=_,T=w;M<T;M+=3){let C=M,R=M+1,A=M+2;i=ta(this,p,t,n,h,l,f,C,R,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let _=m,w=m+1,M=m+2;i=ta(this,o,t,n,h,l,f,_,w,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function tp(s,t,e,n,i,r,o,a){let c;if(t.side===mn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Ti,a),c===null)return null;jo.copy(a),jo.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(jo);return h<e.near||h>e.far?null:{distance:h,point:jo.clone(),object:s}}function ta(s,t,e,n,i,r,o,a,c,h){s.getVertexPosition(a,$o),s.getVertexPosition(c,Ko),s.getVertexPosition(h,Jo);let l=tp(s,t,e,n,$o,Ko,Jo,Mu);if(l){let f=new L;Vi.getBarycoord(Mu,$o,Ko,Jo,f),i&&(l.uv=Vi.getInterpolatedAttribute(i,a,c,h,f,new Ht)),r&&(l.uv1=Vi.getInterpolatedAttribute(r,a,c,h,f,new Ht)),o&&(l.normal=Vi.getInterpolatedAttribute(o,a,c,h,f,new L),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let d={a,b:c,c:h,normal:new L,materialIndex:0};Vi.getNormal($o,Ko,Jo,d.normal),l.face=d,l.barycoord=f}return l}var $t=class s extends Ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],l=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(f,2));function g(x,m,p,_,w,M,T,C,R,A,S){let E=M/R,D=T/A,z=M/2,k=T/2,Z=C/2,P=R+1,Y=A+1,W=0,H=0,et=new L;for(let vt=0;vt<Y;vt++){let bt=vt*D-k;for(let Rt=0;Rt<P;Rt++){let te=Rt*E-z;et[x]=te*_,et[m]=bt*w,et[p]=Z,h.push(et.x,et.y,et.z),et[x]=0,et[m]=0,et[p]=C>0?1:-1,l.push(et.x,et.y,et.z),f.push(Rt/R),f.push(1-vt/A),W+=1}}for(let vt=0;vt<A;vt++)for(let bt=0;bt<R;bt++){let Rt=d+bt+P*vt,te=d+bt+P*(vt+1),Vt=d+(bt+1)+P*(vt+1),ae=d+(bt+1)+P*vt;c.push(Rt,te,ae),c.push(te,Vt,ae),H+=6}a.addGroup(u,H,S),u+=H,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function vn(s){let t={};for(let e=0;e<s.length;e++){let n=_s(s[e]);for(let i in n)t[i]=n[i]}return t}function ep(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var rn={clone:_s,merge:vn},np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xr=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new L,bu=new Ht,Su=new Ht,en=class extends Xr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,bu,Su),e.subVectors(Su,bu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/h,i*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$s=-90,Ks=1,pa=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new en($s,Ks,t,e);i.layers=this.layers,this.add(i);let r=new en($s,Ks,t,e);r.layers=this.layers,this.add(r);let o=new en($s,Ks,t,e);o.layers=this.layers,this.add(o);let a=new en($s,Ks,t,e);a.layers=this.layers,this.add(a);let c=new en($s,Ks,t,e);c.layers=this.layers,this.add(c);let h=new en($s,Ks,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,l]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qr=class extends Mn{constructor(t=[],e=vs,n,i,r,o,a,c,h,l){super(t,e,n,i,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ma=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $t(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Je});r.uniforms.tEquirect.value=e;let o=new Ut(i,r),a=e.minFilter;return e.minFilter===Zi&&(e.minFilter=ei),new pa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ie=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},sp={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=l.position.distanceTo(f.position),u=.02,g=.005;h.inputState.pinching&&d>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var us=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var hi=class extends Mn{constructor(t=null,e=1,n=1,i,r,o,a,c,h=pn,l=pn,f,d){super(null,o,a,c,h,l,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oe=class extends Xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Js=new Dt,Eu=new Dt,ea=[],wu=new li,rp=new Dt,Ir=new Ut,Dr=new Ci,Qt=class extends Ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oe(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),wu.copy(t.boundingBox).applyMatrix4(Js),this.boundingBox.union(wu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),Dr.copy(t.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Js),Eu.multiplyMatrices(n,Js),Ir.matrixWorld=Eu,Ir.raycast(t,ea);for(let o=0,a=ea.length;o<a;o++){let c=ea[o];c.instanceId=r,c.object=this,e.push(c)}ea.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Oe(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new hi(new Float32Array(i*this.count),i,this.count,Qa,ni));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vc=new L,op=new L,ap=new ue,Xn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Vc.subVectors(n,e).cross(op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Vc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ap.getNormalMatrix(t),i=this.coplanarPoint(Vc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new Ci,lp=new Ht(.5,.5),na=new L,Wi=class{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],h=r[3],l=r[4],f=r[5],d=r[6],u=r[7],g=r[8],x=r[9],m=r[10],p=r[11],_=r[12],w=r[13],M=r[14],T=r[15];if(i[0].setComponents(h-o,u-l,p-g,T-_).normalize(),i[1].setComponents(h+o,u+l,p+g,T+_).normalize(),i[2].setComponents(h+a,u+f,p+x,T+w).normalize(),i[3].setComponents(h-a,u-f,p-x,T-w).normalize(),n)i[4].setComponents(c,d,m,M).normalize(),i[5].setComponents(h-c,u-d,p-m,T-M).normalize();else if(i[4].setComponents(h-c,u-d,p-m,T-M).normalize(),e===ti)i[5].setComponents(h+c,u+d,p+m,T+M).normalize();else if(e===Or)i[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){os.center.set(0,0,0);let e=lp.distanceTo(t.center);return os.radius=.7071067811865476+e,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(na.x=i.normal.x>0?t.max.x:t.min.x,na.y=i.normal.y>0?t.max.y:t.min.y,na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sr=class extends ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ga=new L,xa=new L,Tu=new Dt,Lr=new Hr,ia=new Ci,Gc=new L,Au=new L,va=class extends $e{constructor(t=new Ee,e=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ga.fromBufferAttribute(e,i-1),xa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ga.distanceTo(xa);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;Tu.copy(i).invert(),Lr.copy(t.ray).applyMatrix4(Tu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let x=u,m=g-1;x<m;x+=h){let p=l.getX(x),_=l.getX(x+1),w=sa(this,t,Lr,c,p,_,x);w&&e.push(w)}if(this.isLineLoop){let x=l.getX(g-1),m=l.getX(u),p=sa(this,t,Lr,c,x,m,g-1);p&&e.push(p)}}else{let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=u,m=g-1;x<m;x+=h){let p=sa(this,t,Lr,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=sa(this,t,Lr,c,g-1,u,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sa(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(ga.fromBufferAttribute(a,i),xa.fromBufferAttribute(a,r),e.distanceSqToSegment(ga,xa,Gc,Au)>n)return;Gc.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(Gc);if(!(h<t.near||h>t.far))return{distance:h,point:Au.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Ru=new L,Cu=new L,Zr=class extends va{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ru.fromBufferAttribute(e,i),Cu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ru.distanceTo(Cu);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fs=class extends Mn{constructor(t,e,n,i,r,o,a,c,h){super(t,e,n,i,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},ds=class extends Mn{constructor(t,e,n=$i,i,r,o,a=pn,c=pn,h,l=tr,f=1){if(l!==tr&&l!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,i,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$r=class extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Kr=class s extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],h=new L,l=new Ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),o.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(o[d]/t+1)/2,l.y=(o[d+1]/t+1)/2,c.push(l.x,l.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fe=class s extends Ee{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;i=Math.floor(i),r=Math.floor(r);let l=[],f=[],d=[],u=[],g=0,x=[],m=n/2,p=0;_(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(l),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(u,2));function _(){let M=new L,T=new L,C=0,R=(e-t)/n;for(let A=0;A<=r;A++){let S=[],E=A/r,D=E*(e-t)+t;for(let z=0;z<=i;z++){let k=z/i,Z=k*c+a,P=Math.sin(Z),Y=Math.cos(Z);T.x=D*P,T.y=-E*n+m,T.z=D*Y,f.push(T.x,T.y,T.z),M.set(P,R,Y).normalize(),d.push(M.x,M.y,M.z),u.push(k,1-E),S.push(g++)}x.push(S)}for(let A=0;A<i;A++)for(let S=0;S<r;S++){let E=x[S][A],D=x[S+1][A],z=x[S+1][A+1],k=x[S][A+1];(t>0||S!==0)&&(l.push(E,D,k),C+=3),(e>0||S!==r-1)&&(l.push(D,z,k),C+=3)}h.addGroup(p,C,0),p+=C}function w(M){let T=g,C=new Ht,R=new L,A=0,S=M===!0?t:e,E=M===!0?1:-1;for(let z=1;z<=i;z++)f.push(0,m*E,0),d.push(0,E,0),u.push(.5,.5),g++;let D=g;for(let z=0;z<=i;z++){let Z=z/i*c+a,P=Math.cos(Z),Y=Math.sin(Z);R.x=S*Y,R.y=m*E,R.z=S*P,f.push(R.x,R.y,R.z),d.push(0,E,0),C.x=P*.5+.5,C.y=Y*.5*E+.5,u.push(C.x,C.y),g++}for(let z=0;z<i;z++){let k=T+z,Z=D+z;M===!0?l.push(Z,Z+1,k):l.push(Z+1,Z,k),A+=3}h.addGroup(p,A,M===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ui=class s extends fe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Jr=class s extends Ee{constructor(t=[new Ht(0,-.5),new Ht(.5,0),new Ht(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ge(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],l=1/e,f=new L,d=new Ht,u=new L,g=new L,x=new L,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,x.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),c.push(u.x,u.y,u.z),x.copy(g)}for(let _=0;_<=e;_++){let w=n+_*l*i,M=Math.sin(w),T=Math.cos(w);for(let C=0;C<=t.length-1;C++){f.x=t[C].x*M,f.y=t[C].y,f.z=t[C].x*T,o.push(f.x,f.y,f.z),d.x=_/e,d.y=C/(t.length-1),a.push(d.x,d.y);let R=c[3*C+0]*M,A=c[3*C+1],S=c[3*C+0]*T;h.push(R,A,S)}}for(let _=0;_<e;_++)for(let w=0;w<t.length-1;w++){let M=w+_*t.length,T=M,C=M+t.length,R=M+t.length+1,A=M+1;r.push(T,C,A),r.push(R,A,C)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Ce=class s extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),h=a+1,l=c+1,f=t/a,d=e/c,u=[],g=[],x=[],m=[];for(let p=0;p<l;p++){let _=p*d-o;for(let w=0;w<h;w++){let M=w*f-r;g.push(M,-_,0),x.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let w=_+h*p,M=_+h*(p+1),T=_+1+h*(p+1),C=_+1+h*p;u.push(w,M,C),u.push(M,T,C)}this.setIndex(u),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Qr=class s extends Ee{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],h=[],l=[],f=t,d=(e-t)/i,u=new L,g=new Ht;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;u.x=f*Math.cos(p),u.y=f*Math.sin(p),c.push(u.x,u.y,u.z),h.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,l.push(g.x,g.y)}f+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,w=_,M=_+n+1,T=_+n+2,C=_+1;a.push(w,M,C),a.push(M,T,C)}}this.setIndex(a),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var bn=class s extends Ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,l=[],f=new L,d=new L,u=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],w=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){let C=T/e;f.x=-t*Math.cos(i+C*r)*Math.sin(o+w*a),f.y=t*Math.cos(o+w*a),f.z=t*Math.sin(i+C*r)*Math.sin(o+w*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(C+M,1-w),_.push(h++)}l.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let w=l[p][_+1],M=l[p][_],T=l[p+1][_],C=l[p+1][_+1];(p!==0||o>0)&&u.push(w,M,C),(p!==n-1||c<Math.PI)&&u.push(M,T,C)}this.setIndex(u),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xi=class s extends Ee{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],h=[],l=new L,f=new L,d=new L;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){let x=g/i*r,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),d.subVectors(f,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){let x=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,_=(i+1)*u+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var jr=class extends ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ot=class extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},rr=class extends Ot{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var to=class extends ci{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var or=class extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ya=class extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ra(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function cp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ps=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_a=class extends ps{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qc:r=t,a=2*e-n;break;case Yc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qc:o=t,c=2*n-e;break;case Yc:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,w=(-1-u)*m+(1.5+u)*x+.5*g,M=u*m-u*x;for(let T=0;T!==a;++T)r[T]=p*o[l+T]+_*o[h+T]+w*o[c+T]+M*o[f+T];return r}},Ma=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=(n-e)/(i-e),f=1-l;for(let d=0;d!==a;++d)r[d]=o[h+d]*f+o[c+d]*l;return r}},ba=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ra(e,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ra(t.times,Array),values:ra(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _a(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fr:e=this.InterpolantFactoryMethodDiscrete;break;case ha:e=this.InterpolantFactoryMethodLinear;break;case oa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&cp(i))for(let a=0,c=i.length;a!==c;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],l=t[a+1];if(h!==l&&(a!==1||h!==t[0]))if(i)c=!0;else{let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[d+g]||x!==e[u+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=ha;var qi=class extends Fn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Fr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends Fn{constructor(t,e,n,i){super(t,e,n,i)}};Sa.prototype.ValueTypeName="color";var Ea=class extends Fn{constructor(t,e,n,i){super(t,e,n,i)}};Ea.prototype.ValueTypeName="number";var wa=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),h=t*a;for(let l=h+a;h!==l;h+=4)de.slerpFlat(r,0,o,h-a,o,h,c);return r}},eo=class extends Fn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}};eo.prototype.ValueTypeName="quaternion";eo.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends Fn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Fr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends Fn{constructor(t,e,n,i){super(t,e,n,i)}};Ta.prototype.ValueTypeName="vector";var Aa=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,f){return h.push(l,f),this},this.removeHandler=function(l){let f=h.indexOf(l);return f!==-1&&h.splice(f,2),this},this.getHandler=function(l){for(let f=0,d=h.length;f<d;f+=2){let u=h[f],g=h[f+1];if(u.global&&(u.lastIndex=0),u.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},hf=new Aa,Ra=class{constructor(t){this.manager=t!==void 0?t:hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},no=class extends ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Wc=new Dt,Pu=new L,Iu=new L,Ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pu),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),Wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Kc=class extends Ca{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=hs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},io=class extends ar{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Kc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ms=class extends Xr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jc=class extends Ca{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},so=class extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ro=class extends Ee{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Pa=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},gs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var xh="\\[\\]\\.:\\/",hp=new RegExp("["+xh+"]","g"),vh="[^"+xh+"]",up="[^"+xh.replace("\\.","")+"]",fp=/((?:WC+[\/:])*)/.source.replace("WC",vh),dp=/(WCOD+)?/.source.replace("WCOD",up),pp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),gp=new RegExp("^"+fp+dp+pp+mp+"$"),xp=["material","materials","bones","map"],Qc=class{constructor(t,e,n){let i=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hp,"")}static parseTrackName(t){let e=gp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);xp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Qc;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xy=new Float32Array(1);function yh(s,t,e,n){let i=vp(n);switch(e){case ch:return s*t;case Qa:return s*t/i.components*i.byteLength;case ja:return s*t/i.components*i.byteLength;case uh:return s*t*2/i.components*i.byteLength;case tl:return s*t*2/i.components*i.byteLength;case hh:return s*t*3/i.components*i.byteLength;case An:return s*t*4/i.components*i.byteLength;case el:return s*t*4/i.components*i.byteLength;case ho:case uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case il:case rl:return Math.max(s,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(s,8)*Math.max(t,8)/2;case ol:case al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ul:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case pl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ml:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case gl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case xl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Sl:case El:case wl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Tl:case Al:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Rl:case Cl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vp(s){switch(s){case zn:case rh:return{byteLength:1,components:1};case cr:case oh:case sn:return{byteLength:2,components:1};case Ka:case Ja:return{byteLength:2,components:4};case $i:case $a:case ni:return{byteLength:4,components:1};case ah:case lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Uf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function wp(s){let t=new WeakMap;function e(a,c){let h=a.array,l=a.usage,f=h.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,h,l),a.onUploadCallback();let u;if(h instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)u=s.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=s.SHORT;else if(h instanceof Uint32Array)u=s.UNSIGNED_INT;else if(h instanceof Int32Array)u=s.INT;else if(h instanceof Int8Array)u=s.BYTE;else if(h instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){let l=c.array,f=c.updateRanges;if(s.bindBuffer(h,a),f.length===0)s.bufferSubData(h,0,l);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],x=f[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let x=f[u];s.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:i,remove:r,update:o}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
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
#endif`,kp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$p=`#define PI 3.141592653589793
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
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n0="gl_FragColor = linearToOutputTexel( gl_FragColor );",i0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
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
}`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x0=`uniform bool receiveShadow;
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
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S0=`PhysicalMaterial material;
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
#endif`,E0=`struct PhysicalMaterial {
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
}`,w0=`
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
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
#endif`,V0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z0=`#ifdef USE_NORMALMAP
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
#endif`,$0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hm=`float getShadowMask() {
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Dm=`#if DEPTH_PACKING == 3200
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
}`,Lm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,km=`uniform vec3 diffuse;
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
}`,Hm=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,Gm=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define PHONG
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
}`,Zm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,Km=`#define STANDARD
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
}`,Jm=`#define TOON
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
}`,Qm=`#define TOON
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
}`,jm=`uniform float size;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Ip,aomap_fragment:Dp,aomap_pars_fragment:Lp,batching_pars_vertex:Up,batching_vertex:Np,begin_vertex:Fp,beginnormal_vertex:zp,bsdfs:Op,iridescence_fragment:Bp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:Zp,common:$p,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:jp,emissivemap_fragment:t0,emissivemap_pars_fragment:e0,colorspace_fragment:n0,colorspace_pars_fragment:i0,envmap_fragment:s0,envmap_common_pars_fragment:r0,envmap_pars_fragment:o0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:v0,envmap_vertex:l0,fog_vertex:c0,fog_pars_vertex:h0,fog_fragment:u0,fog_pars_fragment:f0,gradientmap_pars_fragment:d0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:x0,lights_toon_fragment:y0,lights_toon_pars_fragment:_0,lights_phong_fragment:M0,lights_phong_pars_fragment:b0,lights_physical_fragment:S0,lights_physical_pars_fragment:E0,lights_fragment_begin:w0,lights_fragment_maps:T0,lights_fragment_end:A0,logdepthbuf_fragment:R0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:I0,map_fragment:D0,map_pars_fragment:L0,map_particle_fragment:U0,map_particle_pars_fragment:N0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:z0,morphinstance_vertex:O0,morphcolor_vertex:B0,morphnormal_vertex:k0,morphtarget_pars_vertex:H0,morphtarget_vertex:V0,normal_fragment_begin:G0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:q0,normal_vertex:Y0,normalmap_pars_fragment:Z0,clearcoat_normal_fragment_begin:$0,clearcoat_normal_fragment_maps:K0,clearcoat_pars_fragment:J0,iridescence_pars_fragment:Q0,opaque_fragment:j0,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:am,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:fm,skinning_vertex:dm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:xm,tonemapping_pars_fragment:vm,transmission_fragment:ym,transmission_pars_fragment:_m,uv_pars_fragment:Mm,uv_pars_vertex:bm,uv_vertex:Sm,worldpos_vertex:Em,background_vert:wm,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Pm,depth_vert:Im,depth_frag:Dm,distanceRGBA_vert:Lm,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:Fm,linedashed_vert:zm,linedashed_frag:Om,meshbasic_vert:Bm,meshbasic_frag:km,meshlambert_vert:Hm,meshlambert_frag:Vm,meshmatcap_vert:Gm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:Zm,meshphysical_vert:$m,meshphysical_frag:Km,meshtoon_vert:Jm,meshtoon_frag:Qm,points_vert:jm,points_frag:tg,shadow_vert:eg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},Ft={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},di={basic:{uniforms:vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:vn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:vn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:vn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:vn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:vn([Ft.points,Ft.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:vn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:vn([Ft.common,Ft.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:vn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:vn([Ft.sprite,Ft.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:vn([Ft.common,Ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:vn([Ft.lights,Ft.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};di.physical={uniforms:vn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Dl={r:0,b:0,g:0},Ms=new Ze,rg=new Dt;function og(s,t,e,n,i,r,o){let a=new Tt(0),c=r===!0?0:1,h,l,f=null,d=0,u=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?e:t).get(M)),M}function x(w){let M=!1,T=g(w);T===null?p(a,c):T&&T.isColor&&(p(T,1),M=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,M){let T=g(M);T&&(T.isCubeTexture||T.mapping===lo)?(l===void 0&&(l=new Ut(new $t(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:_s(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Ms.copy(M.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),l.material.uniforms.envMap.value=T,l.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Ms)),l.material.toneMapped=ye.getTransfer(T.colorSpace)!==Se,(f!==T||d!==T.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,f=T,d=T.version,u=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Ut(new Ce(2,2),new ve({name:"BackgroundMaterial",uniforms:_s(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=ye.getTransfer(T.colorSpace)!==Se,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=T,d=T.version,u=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function p(w,M){w.getRGB(Dl,gh(s)),n.buffers.color.setClear(Dl.r,Dl.g,Dl.b,M,o)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:x,addToRenderList:m,dispose:_}}function ag(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(E,D,z,k,Z){let P=!1,Y=f(k,z,D);r!==Y&&(r=Y,h(r.object)),P=u(E,k,z,Z),P&&g(E,k,z,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(P||o)&&(o=!1,M(E,D,z,k),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return s.createVertexArray()}function h(E){return s.bindVertexArray(E)}function l(E){return s.deleteVertexArray(E)}function f(E,D,z){let k=z.wireframe===!0,Z=n[E.id];Z===void 0&&(Z={},n[E.id]=Z);let P=Z[D.id];P===void 0&&(P={},Z[D.id]=P);let Y=P[k];return Y===void 0&&(Y=d(c()),P[k]=Y),Y}function d(E){let D=[],z=[],k=[];for(let Z=0;Z<e;Z++)D[Z]=0,z[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:k,object:E,attributes:{},index:null}}function u(E,D,z,k){let Z=r.attributes,P=D.attributes,Y=0,W=z.getAttributes();for(let H in W)if(W[H].location>=0){let vt=Z[H],bt=P[H];if(bt===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(bt=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(bt=E.instanceColor)),vt===void 0||vt.attribute!==bt||bt&&vt.data!==bt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function g(E,D,z,k){let Z={},P=D.attributes,Y=0,W=z.getAttributes();for(let H in W)if(W[H].location>=0){let vt=P[H];vt===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(vt=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(vt=E.instanceColor));let bt={};bt.attribute=vt,vt&&vt.data&&(bt.data=vt.data),Z[H]=bt,Y++}r.attributes=Z,r.attributesNum=Y,r.index=k}function x(){let E=r.newAttributes;for(let D=0,z=E.length;D<z;D++)E[D]=0}function m(E){p(E,0)}function p(E,D){let z=r.newAttributes,k=r.enabledAttributes,Z=r.attributeDivisors;z[E]=1,k[E]===0&&(s.enableVertexAttribArray(E),k[E]=1),Z[E]!==D&&(s.vertexAttribDivisor(E,D),Z[E]=D)}function _(){let E=r.newAttributes,D=r.enabledAttributes;for(let z=0,k=D.length;z<k;z++)D[z]!==E[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function w(E,D,z,k,Z,P,Y){Y===!0?s.vertexAttribIPointer(E,D,z,Z,P):s.vertexAttribPointer(E,D,z,k,Z,P)}function M(E,D,z,k){x();let Z=k.attributes,P=z.getAttributes(),Y=D.defaultAttributeValues;for(let W in P){let H=P[W];if(H.location>=0){let et=Z[W];if(et===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(et=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(et=E.instanceColor)),et!==void 0){let vt=et.normalized,bt=et.itemSize,Rt=t.get(et);if(Rt===void 0)continue;let te=Rt.buffer,Vt=Rt.type,ae=Rt.bytesPerElement,at=Vt===s.INT||Vt===s.UNSIGNED_INT||et.gpuType===$a;if(et.isInterleavedBufferAttribute){let ct=et.data,Ct=ct.stride,nt=et.offset;if(ct.isInstancedInterleavedBuffer){for(let dt=0;dt<H.locationSize;dt++)p(H.location+dt,ct.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let dt=0;dt<H.locationSize;dt++)m(H.location+dt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let dt=0;dt<H.locationSize;dt++)w(H.location+dt,bt/H.locationSize,Vt,vt,Ct*ae,(nt+bt/H.locationSize*dt)*ae,at)}else{if(et.isInstancedBufferAttribute){for(let ct=0;ct<H.locationSize;ct++)p(H.location+ct,et.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ct=0;ct<H.locationSize;ct++)m(H.location+ct);s.bindBuffer(s.ARRAY_BUFFER,te);for(let ct=0;ct<H.locationSize;ct++)w(H.location+ct,bt/H.locationSize,Vt,vt,bt*ae,bt/H.locationSize*ct*ae,at)}}else if(Y!==void 0){let vt=Y[W];if(vt!==void 0)switch(vt.length){case 2:s.vertexAttrib2fv(H.location,vt);break;case 3:s.vertexAttrib3fv(H.location,vt);break;case 4:s.vertexAttrib4fv(H.location,vt);break;default:s.vertexAttrib1fv(H.location,vt)}}}}_()}function T(){A();for(let E in n){let D=n[E];for(let z in D){let k=D[z];for(let Z in k)l(k[Z].object),delete k[Z];delete D[z]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;let D=n[E.id];for(let z in D){let k=D[z];for(let Z in k)l(k[Z].object),delete k[Z];delete D[z]}delete n[E.id]}function R(E){for(let D in n){let z=n[D];if(z[E.id]===void 0)continue;let k=z[E.id];for(let Z in k)l(k[Z].object),delete k[Z];delete z[E.id]}}function A(){S(),o=!0,r!==i&&(r=i,h(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function lg(s,t,e){let n;function i(h){n=h}function r(h,l){s.drawArrays(n,h,l),e.update(l,n,1)}function o(h,l,f){f!==0&&(s.drawArraysInstanced(n,h,l,f),e.update(l,n,f))}function a(h,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,f);let u=0;for(let g=0;g<f;g++)u+=l[g];e.update(u,n,1)}function c(h,l,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<h.length;g++)o(h[g],l[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=l[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function cg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==An&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let A=R===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==zn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ni&&!A)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:T,maxSamples:C}}function hg(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Xn,a=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=l(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?l(null):h();else{let _=r?0:n,w=_*4,M=p.clippingState||null;c.value=M,M=l(g,d,w,u);for(let T=0;T!==w;++T)M[T]=e[T];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,d,u,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=u+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,M=u;w!==x;++w,M+=4)o.copy(f[w]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ug(s){let t=new WeakMap;function e(o,a){return a===qa?o.mapping=vs:a===Ya&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qa||a===Ya)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new ma(c.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fr=4,uf=[.125,.215,.35,.446,.526,.582],Es=20,_h=new ms,ff=new Tt,Mh=null,bh=0,Sh=0,Eh=!1,Ss=(1+Math.sqrt(5))/2,ur=1/Ss,df=[new L(-Ss,ur,0),new L(Ss,ur,0),new L(-ur,0,Ss),new L(ur,0,Ss),new L(0,Ss,-ur),new L(0,Ss,ur),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],fg=new L,pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=fg}=r;Mh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mh,bh,Sh),this._renderer.xr.enabled=Eh,t.scissorTest=!1,Ll(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:sn,format:An,colorSpace:cs,depthBuffer:!1},i=pf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=pg(r,t,e)}return i}_compileMaterial(t){let e=new Ut(this._lodPlanes[0],t);this._renderer.compile(e,_h)}_sceneToCubeUV(t,e,n,i,r){let c=new en(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(ff),f.toneMapping=Pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));let x=new qe({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),m=new Ut(new $t,x),p=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,p=!0):(x.color.copy(ff),p=!0);for(let w=0;w<6;w++){let M=w%3;M===0?(c.up.set(0,h[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[w],r.y,r.z)):M===1?(c.up.set(0,0,h[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[w],r.z)):(c.up.set(0,h[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[w]));let T=this._cubeSize;Ll(i,M*T,w>2?T:0,T,T),f.setRenderTarget(i),p&&f.render(m,c),f.render(t,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=d,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===vs||t.mapping===ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ll(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,_h)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=df[(i-r-1)%df.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,f=new Ut(this._lodPlanes[i],h),d=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Es-1),x=r/g,m=isFinite(r)?1+Math.floor(l*x):Es;m>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);let p=[],_=0;for(let R=0;R<Es;++R){let A=R/x,S=Math.exp(-A*A/2);p.push(S),R===0?_+=S:R<m&&(_+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let M=this._sizeLods[i],T=3*M*(i>w-fr?i-w+fr:0),C=4*(this._cubeSize-M);Ll(e,T,C,3*M,2*M),c.setRenderTarget(e),c.render(f,_h)}};function dg(s){let t=[],e=[],n=[],i=s,r=s-fr+1+uf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-fr?c=uf[o-s+fr-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),l=-h,f=1+h,d=[l,l,f,l,f,f,l,l,f,f,l,f],u=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*u),w=new Float32Array(m*g*u),M=new Float32Array(p*g*u);for(let C=0;C<u;C++){let R=C%3*2/3-1,A=C>2?0:-1,S=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];_.set(S,x*g*C),w.set(d,m*g*C);let E=[C,C,C,C,C,C];M.set(E,p*g*C)}let T=new Ee;T.setAttribute("position",new Xe(_,x)),T.setAttribute("uv",new Xe(w,m)),T.setAttribute("faceIndex",new Xe(M,p)),t.push(T),i>fr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pf(s,t,e){let n=new Ge(s,t,e);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ll(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function pg(s,t,e){let n=new Float32Array(Es),i=new L(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function mf(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function gf(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Je,depthTest:!1,depthWrite:!1})}function Uh(){return`

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
	`}function mg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===qa||c===Ya,l=c===vs||c===ys;if(h||l){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new pr(s)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return h&&u&&u.height>0||l&&u&&i(u)?(e===null&&(e=new pr(s)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function i(a){let c=0,h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xg(s,t,e,n){let i={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let u in d)t.update(d[u],s.ARRAY_BUFFER)}function h(f){let d=[],u=f.index,g=f.attributes.position,x=0;if(u!==null){let _=u.array;x=u.version;for(let w=0,M=_.length;w<M;w+=3){let T=_[w+0],C=_[w+1],R=_[w+2];d.push(T,C,C,R,R,T)}}else if(g!==void 0){let _=g.array;x=g.version;for(let w=0,M=_.length/3-1;w<M;w+=3){let T=w+0,C=w+1,R=w+2;d.push(T,C,C,R,R,T)}}else return;let m=new(mh(d)?Wr:Gr)(d,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function l(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:l}}function vg(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function h(d,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,d*o,g),e.update(u,n,g))}function l(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function f(d,u,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,u[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=u[_]*x[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function yg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function _g(s,t,e){let n=new WeakMap,i=new Ne;function r(o,a,c){let h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=l!==void 0?l.length:0,d=n.get(a);if(d===void 0||d.count!==f){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],w=0;u===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let M=a.attributes.position.count*w,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let C=new Float32Array(M*T*4*f),R=new kr(C,M,T,f);R.type=ni,R.needsUpdate=!0;let A=w*4;for(let E=0;E<f;E++){let D=m[E],z=p[E],k=_[E],Z=M*T*4*E;for(let P=0;P<D.count;P++){let Y=P*A;u===!0&&(i.fromBufferAttribute(D,P),C[Z+Y+0]=i.x,C[Z+Y+1]=i.y,C[Z+Y+2]=i.z,C[Z+Y+3]=0),g===!0&&(i.fromBufferAttribute(z,P),C[Z+Y+4]=i.x,C[Z+Y+5]=i.y,C[Z+Y+6]=i.z,C[Z+Y+7]=0),x===!0&&(i.fromBufferAttribute(k,P),C[Z+Y+8]=i.x,C[Z+Y+9]=i.y,C[Z+Y+10]=i.z,C[Z+Y+11]=k.itemSize===4?i.w:1)}}d={count:f,texture:R,size:new Ht(M,T)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<h.length;x++)u+=h[x];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Mg(s,t,e,n){let i=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,f=t.get(c,l);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return f}function o(){i=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var Nf=new Mn,xf=new ds(1,1),Ff=new kr,zf=new da,Of=new qr,vf=[],yf=[],_f=new Float32Array(16),Mf=new Float32Array(9),bf=new Float32Array(4);function mr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=vf[i];if(r===void 0&&(r=new Float32Array(i),vf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function on(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function an(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Fl(s,t){let e=yf[t];e===void 0&&(e=new Int32Array(t),yf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function bg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;s.uniform2fv(this.addr,t),an(e,t)}}function Eg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;s.uniform3fv(this.addr,t),an(e,t)}}function wg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;s.uniform4fv(this.addr,t),an(e,t)}}function Tg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;bf.set(n),s.uniformMatrix2fv(this.addr,!1,bf),an(e,n)}}function Ag(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;Mf.set(n),s.uniformMatrix3fv(this.addr,!1,Mf),an(e,n)}}function Rg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;_f.set(n),s.uniformMatrix4fv(this.addr,!1,_f),an(e,n)}}function Cg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;s.uniform2iv(this.addr,t),an(e,t)}}function Ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;s.uniform3iv(this.addr,t),an(e,t)}}function Dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;s.uniform4iv(this.addr,t),an(e,t)}}function Lg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ug(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;s.uniform2uiv(this.addr,t),an(e,t)}}function Ng(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;s.uniform3uiv(this.addr,t),an(e,t)}}function Fg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;s.uniform4uiv(this.addr,t),an(e,t)}}function zg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(xf.compareFunction=fh,r=xf):r=Nf,e.setTexture2D(t||r,i)}function Og(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zf,i)}function Bg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Of,i)}function kg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ff,i)}function Hg(s){switch(s){case 5126:return bg;case 35664:return Sg;case 35665:return Eg;case 35666:return wg;case 35674:return Tg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ig;case 35669:case 35673:return Dg;case 5125:return Lg;case 36294:return Ug;case 36295:return Ng;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}function Vg(s,t){s.uniform1fv(this.addr,t)}function Gg(s,t){let e=mr(t,this.size,2);s.uniform2fv(this.addr,e)}function Wg(s,t){let e=mr(t,this.size,3);s.uniform3fv(this.addr,e)}function Xg(s,t){let e=mr(t,this.size,4);s.uniform4fv(this.addr,e)}function qg(s,t){let e=mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Yg(s,t){let e=mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Zg(s,t){let e=mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function $g(s,t){s.uniform1iv(this.addr,t)}function Kg(s,t){s.uniform2iv(this.addr,t)}function Jg(s,t){s.uniform3iv(this.addr,t)}function Qg(s,t){s.uniform4iv(this.addr,t)}function jg(s,t){s.uniform1uiv(this.addr,t)}function tx(s,t){s.uniform2uiv(this.addr,t)}function ex(s,t){s.uniform3uiv(this.addr,t)}function nx(s,t){s.uniform4uiv(this.addr,t)}function ix(s,t,e){let n=this.cache,i=t.length,r=Fl(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Nf,r[o])}function sx(s,t,e){let n=this.cache,i=t.length,r=Fl(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||zf,r[o])}function rx(s,t,e){let n=this.cache,i=t.length,r=Fl(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Of,r[o])}function ox(s,t,e){let n=this.cache,i=t.length,r=Fl(e,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ff,r[o])}function ax(s){switch(s){case 5126:return Vg;case 35664:return Gg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return Kg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return jg;case 36294:return tx;case 36295:return ex;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}var Th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hg(e.type)}},Ah=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ax(e.type)}},Rh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},wh=/(\w+)(\])?(\[|\.)?/g;function Sf(s,t){s.seq.push(t),s.map[t.id]=t}function lx(s,t,e){let n=s.name,i=n.length;for(wh.lastIndex=0;;){let r=wh.exec(n),o=wh.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===i){Sf(e,h===void 0?new Th(a,s,t):new Ah(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Rh(a),Sf(e,f)),e=f}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);lx(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Ef(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var cx=37297,hx=0;function ux(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var wf=new ue;function fx(s){ye._getMatrix(wf,ye.workingColorSpace,s);let t=`mat3( ${wf.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(s)){case zr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Tf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ux(s.getShaderSource(t),a)}else return r}function dx(s,t){let e=fx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function px(s,t){let e;switch(t){case ka:e="Linear";break;case Ha:e="Reinhard";break;case Va:e="Cineon";break;case lr:e="ACESFilmic";break;case Wa:e="AgX";break;case Xa:e="Neutral";break;case Ga:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ul=new L;function mx(){ye.getLuminanceCoefficients(Ul);let s=Ul.x.toFixed(4),t=Ul.y.toFixed(4),e=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function xx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function mo(s){return s!==""}function Af(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(s){return s.replace(yx,Mx)}var _x=new Map;function Mx(s,t){let e=ce[t];if(e===void 0){let n=_x.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ch(e)}var bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(s){return s.replace(bx,Sx)}function Sx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Ex(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===th?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ia?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function wx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vs:case ys:t="ENVMAP_TYPE_CUBE";break;case lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Ax(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ih:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function Rx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Ex(e),h=wx(e),l=Tx(e),f=Ax(e),d=Rx(e),u=gx(e),g=xx(r),x=i.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mo).join(`
`),p.length>0&&(p+=`
`)):(m=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),p=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?ce.tonemapping_pars_fragment:"",e.toneMapping!==Pi?px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,dx("linearToOutputTexel",e.outputColorSpace),mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mo).join(`
`)),o=Ch(o),o=Af(o,e),o=Rf(o,e),a=Ch(a),a=Af(a,e),a=Rf(a,e),o=Cf(o),a=Cf(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=_+m+o,M=_+p+a,T=Ef(i,i.VERTEX_SHADER,w),C=Ef(i,i.FRAGMENT_SHADER,M);i.attachShader(x,T),i.attachShader(x,C),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(D){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(x)||"",k=i.getShaderInfoLog(T)||"",Z=i.getShaderInfoLog(C)||"",P=z.trim(),Y=k.trim(),W=Z.trim(),H=!0,et=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,C);else{let vt=Tf(i,T,"vertex"),bt=Tf(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+vt+`
`+bt)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(Y===""||W==="")&&(et=!1);et&&(D.diagnostics={runnable:H,programLog:P,vertexShader:{log:Y,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(T),i.deleteShader(C),A=new dr(i,x),S=vx(i,x)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(x,cx)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=C,this}var Px=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ih(t),e.set(t,n)),n}},Ih=class{constructor(t){this.id=Px++,this.code=t,this.usedTimes=0}};function Ix(s,t,e,n,i,r,o){let a=new Vr,c=new Ph,h=new Set,l=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return h.add(S),S===0?"uv":`uv${S}`}function m(S,E,D,z,k){let Z=z.fog,P=k.geometry,Y=S.isMeshStandardMaterial?z.environment:null,W=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),H=W&&W.mapping===lo?W.image.height:null,et=g[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let vt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,bt=vt!==void 0?vt.length:0,Rt=0;P.morphAttributes.position!==void 0&&(Rt=1),P.morphAttributes.normal!==void 0&&(Rt=2),P.morphAttributes.color!==void 0&&(Rt=3);let te,Vt,ae,at;if(et){let Me=di[et];te=Me.vertexShader,Vt=Me.fragmentShader}else te=S.vertexShader,Vt=S.fragmentShader,c.update(S),ae=c.getVertexShaderID(S),at=c.getFragmentShaderID(S);let ct=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),nt=k.isInstancedMesh===!0,dt=k.isBatchedMesh===!0,St=!!S.map,zt=!!S.matcap,U=!!W,Gt=!!S.aoMap,Nt=!!S.lightMap,rt=!!S.bumpMap,it=!!S.normalMap,$=!!S.displacementMap,j=!!S.emissiveMap,ht=!!S.metalnessMap,kt=!!S.roughnessMap,Lt=S.anisotropy>0,y=S.clearcoat>0,v=S.dispersion>0,I=S.iridescence>0,F=S.sheen>0,V=S.transmission>0,O=Lt&&!!S.anisotropyMap,tt=y&&!!S.clearcoatMap,q=y&&!!S.clearcoatNormalMap,st=y&&!!S.clearcoatRoughnessMap,ut=I&&!!S.iridescenceMap,J=I&&!!S.iridescenceThicknessMap,ft=F&&!!S.sheenColorMap,mt=F&&!!S.sheenRoughnessMap,Et=!!S.specularMap,_t=!!S.specularColorMap,qt=!!S.specularIntensityMap,G=V&&!!S.transmissionMap,lt=V&&!!S.thicknessMap,yt=!!S.gradientMap,Bt=!!S.alphaMap,Mt=S.alphaTest>0,ot=!!S.alphaHash,Wt=!!S.extensions,ie=Pi;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ie=s.toneMapping);let we={shaderID:et,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:Vt,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:at,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:dt,batchingColor:dt&&k._colorsTexture!==null,instancing:nt,instancingColor:nt&&k.instanceColor!==null,instancingMorph:nt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:cs,alphaToCoverage:!!S.alphaToCoverage,map:St,matcap:zt,envMap:U,envMapMode:U&&W.mapping,envMapCubeUVHeight:H,aoMap:Gt,lightMap:Nt,bumpMap:rt,normalMap:it,displacementMap:d&&$,emissiveMap:j,normalMapObjectSpace:it&&S.normalMapType===Qu,normalMapTangentSpace:it&&S.normalMapType===Il,metalnessMap:ht,roughnessMap:kt,anisotropy:Lt,anisotropyMap:O,clearcoat:y,clearcoatMap:tt,clearcoatNormalMap:q,clearcoatRoughnessMap:st,dispersion:v,iridescence:I,iridescenceMap:ut,iridescenceThicknessMap:J,sheen:F,sheenColorMap:ft,sheenRoughnessMap:mt,specularMap:Et,specularColorMap:_t,specularIntensityMap:qt,transmission:V,transmissionMap:G,thicknessMap:lt,gradientMap:yt,opaque:S.transparent===!1&&S.blending===Ai&&S.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:ot,combine:S.combine,mapUv:St&&x(S.map.channel),aoMapUv:Gt&&x(S.aoMap.channel),lightMapUv:Nt&&x(S.lightMap.channel),bumpMapUv:rt&&x(S.bumpMap.channel),normalMapUv:it&&x(S.normalMap.channel),displacementMapUv:$&&x(S.displacementMap.channel),emissiveMapUv:j&&x(S.emissiveMap.channel),metalnessMapUv:ht&&x(S.metalnessMap.channel),roughnessMapUv:kt&&x(S.roughnessMap.channel),anisotropyMapUv:O&&x(S.anisotropyMap.channel),clearcoatMapUv:tt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:q&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(S.sheenRoughnessMap.channel),specularMapUv:Et&&x(S.specularMap.channel),specularColorMapUv:_t&&x(S.specularColorMap.channel),specularIntensityMapUv:qt&&x(S.specularIntensityMap.channel),transmissionMapUv:G&&x(S.transmissionMap.channel),thicknessMapUv:lt&&x(S.thicknessMap.channel),alphaMapUv:Bt&&x(S.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(it||Lt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!P.attributes.uv&&(St||Bt),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ct,skinning:k.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Rt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:St&&S.map.isVideoTexture===!0&&ye.getTransfer(S.map.colorSpace)===Se,decodeVideoTextureEmissive:j&&S.emissiveMap.isVideoTexture===!0&&ye.getTransfer(S.emissiveMap.colorSpace)===Se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Wt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&S.extensions.multiDraw===!0||dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return we.vertexUv1s=h.has(1),we.vertexUv2s=h.has(2),we.vertexUv3s=h.has(3),h.clear(),we}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)E.push(D),E.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(_(E,S),w(E,S),E.push(s.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function _(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function w(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){let E=g[S.type],D;if(E){let z=di[E];D=rn.clone(z.uniforms)}else D=S.uniforms;return D}function T(S,E){let D;for(let z=0,k=l.length;z<k;z++){let Z=l[z];if(Z.cacheKey===E){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new Cx(s,E,S,r),l.push(D)),D}function C(S){if(--S.usedTimes===0){let E=l.indexOf(S);l[E]=l[l.length-1],l.pop(),S.destroy()}}function R(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:T,releaseProgram:C,releaseShaderCache:R,programs:l,dispose:A}}function Dx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Lx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function If(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Df(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,u,g,x,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,d,u,g,x,m){let p=o(f,d,u,g,x,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(f,d,u,g,x,m){let p=o(f,d,u,g,x,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function h(f,d){e.length>1&&e.sort(f||Lx),n.length>1&&n.sort(d||If),i.length>1&&i.sort(d||If)}function l(){for(let f=t,d=s.length;f<d;f++){let u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:l,sort:h}}function Ux(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Df,s.set(n,[o])):i>=r.length?(o=new Df,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Nx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Tt};break;case"SpotLight":e={position:new L,direction:new L,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Fx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var zx=0;function Ox(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Bx(s){let t=new Nx,e=Fx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);let i=new L,r=new Dt,o=new Dt;function a(h){let l=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,g=0,x=0,m=0,p=0,_=0,w=0,M=0,T=0,C=0,R=0;h.sort(Ox);for(let S=0,E=h.length;S<E;S++){let D=h[S],z=D.color,k=D.intensity,Z=D.distance,P=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)l+=z.r*k,f+=z.g*k,d+=z.b*k;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],k);R++}else if(D.isDirectionalLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let W=D.shadow,H=e.get(D);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[u]=H,n.directionalShadowMap[u]=P,n.directionalShadowMatrix[u]=D.shadow.matrix,_++}n.directional[u]=Y,u++}else if(D.isSpotLight){let Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(z).multiplyScalar(k),Y.distance=Z,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[x]=Y;let W=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,W.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[x]=W.matrix,D.castShadow){let H=e.get(D);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=P,M++}x++}else if(D.isRectAreaLight){let Y=t.get(D);Y.color.copy(z).multiplyScalar(k),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Y,m++}else if(D.isPointLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let W=D.shadow,H=e.get(D);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=P,n.pointShadowMatrix[g]=D.shadow.matrix,w++}n.point[g]=Y,g++}else if(D.isHemisphereLight){let Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(k),Y.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[p]=Y,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==u||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==_||A.numPointShadows!==w||A.numSpotShadows!==M||A.numSpotMaps!==T||A.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+T-C,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,A.directionalLength=u,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=_,A.numPointShadows=w,A.numSpotShadows=M,A.numSpotMaps=T,A.numLightProbes=R,n.version=zx++)}function c(h,l){let f=0,d=0,u=0,g=0,x=0,m=l.matrixWorldInverse;for(let p=0,_=h.length;p<_;p++){let w=h[p];if(w.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(w.isSpotLight){let M=n.spot[u];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(w.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Lf(s){let t=new Bx(s),e=[],n=[];function i(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function kx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Lf(s),t.set(i,[a])):r>=o.length?(a=new Lf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
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
}`;function Gx(s,t,e){let n=new Wi,i=new Ht,r=new Ht,o=new Ne,a=new or({depthPacking:Pl}),c=new ya,h={},l=e.maxTextureSize,f={[Ti]:mn,[mn]:Ti,[nn]:nn},d=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Hx,fragmentShader:Vx}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th;let p=this.type;this.render=function(C,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Je),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=p!==fi&&this.type===fi,Z=p===fi&&this.type!==fi;for(let P=0,Y=C.length;P<Y;P++){let W=C[P],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let et=H.getFrameExtents();if(i.multiply(et),r.copy(H.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/et.x),i.x=r.x*et.x,H.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/et.y),i.y=r.y*et.y,H.mapSize.y=r.y)),H.map===null||k===!0||Z===!0){let bt=this.type!==fi?{minFilter:pn,magFilter:pn}:{};H.map!==null&&H.map.dispose(),H.map=new Ge(i.x,i.y,bt),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let vt=H.getViewportCount();for(let bt=0;bt<vt;bt++){let Rt=H.getViewport(bt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),z.viewport(o),H.updateMatrices(W,bt),n=H.getFrustum(),M(R,A,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===fi&&_(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,E,D)};function _(C,R){let A=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ge(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(R,null,A,d,x,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(R,null,A,u,x,null)}function w(C,R,A,S){let E=null,D=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)E=D;else if(E=A.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=E.uuid,k=R.uuid,Z=h[z];Z===void 0&&(Z={},h[z]=Z);let P=Z[k];P===void 0&&(P=E.clone(),Z[k]=P,R.addEventListener("dispose",T)),E=P}if(E.visible=R.visible,E.wireframe=R.wireframe,S===fi?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:f[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let z=s.properties.get(E);z.light=A}return E}function M(C,R,A,S,E){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===fi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);let k=t.update(C),Z=C.material;if(Array.isArray(Z)){let P=k.groups;for(let Y=0,W=P.length;Y<W;Y++){let H=P[Y],et=Z[H.materialIndex];if(et&&et.visible){let vt=w(C,et,S,E);C.onBeforeShadow(s,C,R,A,k,vt,H),s.renderBufferDirect(A,null,k,vt,C,H),C.onAfterShadow(s,C,R,A,k,vt,H)}}}else if(Z.visible){let P=w(C,Z,S,E);C.onBeforeShadow(s,C,R,A,k,P,null),s.renderBufferDirect(A,null,k,P,C,null),C.onAfterShadow(s,C,R,A,k,P,null)}}let z=C.children;for(let k=0,Z=z.length;k<Z;k++)M(z[k],R,A,S,E)}function T(C){C.target.removeEventListener("dispose",T);for(let A in h){let S=h[A],E=C.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var Wx={[La]:Ua,[Na]:Oa,[Fa]:Ba,[ls]:za,[Ua]:La,[Oa]:Na,[Ba]:Fa,[za]:ls};function Xx(s,t){function e(){let G=!1,lt=new Ne,yt=null,Bt=new Ne(0,0,0,0);return{setMask:function(Mt){yt!==Mt&&!G&&(s.colorMask(Mt,Mt,Mt,Mt),yt=Mt)},setLocked:function(Mt){G=Mt},setClear:function(Mt,ot,Wt,ie,we){we===!0&&(Mt*=ie,ot*=ie,Wt*=ie),lt.set(Mt,ot,Wt,ie),Bt.equals(lt)===!1&&(s.clearColor(Mt,ot,Wt,ie),Bt.copy(lt))},reset:function(){G=!1,yt=null,Bt.set(-1,0,0,0)}}}function n(){let G=!1,lt=!1,yt=null,Bt=null,Mt=null;return{setReversed:function(ot){if(lt!==ot){let Wt=t.get("EXT_clip_control");ot?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),lt=ot;let ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return lt},setTest:function(ot){ot?ct(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(ot){yt!==ot&&!G&&(s.depthMask(ot),yt=ot)},setFunc:function(ot){if(lt&&(ot=Wx[ot]),Bt!==ot){switch(ot){case La:s.depthFunc(s.NEVER);break;case Ua:s.depthFunc(s.ALWAYS);break;case Na:s.depthFunc(s.LESS);break;case ls:s.depthFunc(s.LEQUAL);break;case Fa:s.depthFunc(s.EQUAL);break;case za:s.depthFunc(s.GEQUAL);break;case Oa:s.depthFunc(s.GREATER);break;case Ba:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Bt=ot}},setLocked:function(ot){G=ot},setClear:function(ot){Mt!==ot&&(lt&&(ot=1-ot),s.clearDepth(ot),Mt=ot)},reset:function(){G=!1,yt=null,Bt=null,Mt=null,lt=!1}}}function i(){let G=!1,lt=null,yt=null,Bt=null,Mt=null,ot=null,Wt=null,ie=null,we=null;return{setTest:function(Me){G||(Me?ct(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(Me){lt!==Me&&!G&&(s.stencilMask(Me),lt=Me)},setFunc:function(Me,Kn,Hn){(yt!==Me||Bt!==Kn||Mt!==Hn)&&(s.stencilFunc(Me,Kn,Hn),yt=Me,Bt=Kn,Mt=Hn)},setOp:function(Me,Kn,Hn){(ot!==Me||Wt!==Kn||ie!==Hn)&&(s.stencilOp(Me,Kn,Hn),ot=Me,Wt=Kn,ie=Hn)},setLocked:function(Me){G=Me},setClear:function(Me){we!==Me&&(s.clearStencil(Me),we=Me)},reset:function(){G=!1,lt=null,yt=null,Bt=null,Mt=null,ot=null,Wt=null,ie=null,we=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,h=new WeakMap,l={},f={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,_=null,w=null,M=null,T=null,C=null,R=new Tt(0,0,0),A=0,S=!1,E=null,D=null,z=null,k=null,Z=null,P=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,W=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=W>=2);let et=null,vt={},bt=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),te=new Ne().fromArray(bt),Vt=new Ne().fromArray(Rt);function ae(G,lt,yt,Bt){let Mt=new Uint8Array(4),ot=s.createTexture();s.bindTexture(G,ot),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<yt;Wt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,Bt,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(lt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return ot}let at={};at[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(s.DEPTH_TEST),o.setFunc(ls),rt(!1),it(jc),ct(s.CULL_FACE),Gt(Je);function ct(G){l[G]!==!0&&(s.enable(G),l[G]=!0)}function Ct(G){l[G]!==!1&&(s.disable(G),l[G]=!1)}function nt(G,lt){return f[G]!==lt?(s.bindFramebuffer(G,lt),f[G]=lt,G===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=lt),G===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function dt(G,lt){let yt=u,Bt=!1;if(G){yt=d.get(lt),yt===void 0&&(yt=[],d.set(lt,yt));let Mt=G.textures;if(yt.length!==Mt.length||yt[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Wt=Mt.length;ot<Wt;ot++)yt[ot]=s.COLOR_ATTACHMENT0+ot;yt.length=Mt.length,Bt=!0}}else yt[0]!==s.BACK&&(yt[0]=s.BACK,Bt=!0);Bt&&s.drawBuffers(yt)}function St(G){return g!==G?(s.useProgram(G),g=G,!0):!1}let zt={[Nn]:s.FUNC_ADD,[Uu]:s.FUNC_SUBTRACT,[Nu]:s.FUNC_REVERSE_SUBTRACT};zt[Fu]=s.MIN,zt[zu]=s.MAX;let U={[xs]:s.ZERO,[Ou]:s.ONE,[Bu]:s.SRC_COLOR,[aa]:s.SRC_ALPHA,[Gu]:s.SRC_ALPHA_SATURATE,[ao]:s.DST_COLOR,[oo]:s.DST_ALPHA,[ku]:s.ONE_MINUS_SRC_COLOR,[la]:s.ONE_MINUS_SRC_ALPHA,[Vu]:s.ONE_MINUS_DST_COLOR,[Hu]:s.ONE_MINUS_DST_ALPHA,[Wu]:s.CONSTANT_COLOR,[Xu]:s.ONE_MINUS_CONSTANT_COLOR,[qu]:s.CONSTANT_ALPHA,[Yu]:s.ONE_MINUS_CONSTANT_ALPHA};function Gt(G,lt,yt,Bt,Mt,ot,Wt,ie,we,Me){if(G===Je){x===!0&&(Ct(s.BLEND),x=!1);return}if(x===!1&&(ct(s.BLEND),x=!0),G!==Da){if(G!==m||Me!==S){if((p!==Nn||M!==Nn)&&(s.blendEquation(s.FUNC_ADD),p=Nn,M=Nn),Me)switch(G){case Ai:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tn:s.blendFunc(s.ONE,s.ONE);break;case eh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case eh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,w=null,T=null,C=null,R.set(0,0,0),A=0,m=G,S=Me}return}Mt=Mt||lt,ot=ot||yt,Wt=Wt||Bt,(lt!==p||Mt!==M)&&(s.blendEquationSeparate(zt[lt],zt[Mt]),p=lt,M=Mt),(yt!==_||Bt!==w||ot!==T||Wt!==C)&&(s.blendFuncSeparate(U[yt],U[Bt],U[ot],U[Wt]),_=yt,w=Bt,T=ot,C=Wt),(ie.equals(R)===!1||we!==A)&&(s.blendColor(ie.r,ie.g,ie.b,we),R.copy(ie),A=we),m=G,S=!1}function Nt(G,lt){G.side===nn?Ct(s.CULL_FACE):ct(s.CULL_FACE);let yt=G.side===mn;lt&&(yt=!yt),rt(yt),G.blending===Ai&&G.transparent===!1?Gt(Je):Gt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Bt=G.stencilWrite;a.setTest(Bt),Bt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),j(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(G){E!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),E=G)}function it(G){G!==Du?(ct(s.CULL_FACE),G!==D&&(G===jc?s.cullFace(s.BACK):G===Lu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),D=G}function $(G){G!==z&&(Y&&s.lineWidth(G),z=G)}function j(G,lt,yt){G?(ct(s.POLYGON_OFFSET_FILL),(k!==lt||Z!==yt)&&(s.polygonOffset(lt,yt),k=lt,Z=yt)):Ct(s.POLYGON_OFFSET_FILL)}function ht(G){G?ct(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function kt(G){G===void 0&&(G=s.TEXTURE0+P-1),et!==G&&(s.activeTexture(G),et=G)}function Lt(G,lt,yt){yt===void 0&&(et===null?yt=s.TEXTURE0+P-1:yt=et);let Bt=vt[yt];Bt===void 0&&(Bt={type:void 0,texture:void 0},vt[yt]=Bt),(Bt.type!==G||Bt.texture!==lt)&&(et!==yt&&(s.activeTexture(yt),et=yt),s.bindTexture(G,lt||at[G]),Bt.type=G,Bt.texture=lt)}function y(){let G=vt[et];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function F(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function V(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function O(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(G){te.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),te.copy(G))}function mt(G){Vt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Vt.copy(G))}function Et(G,lt){let yt=h.get(lt);yt===void 0&&(yt=new WeakMap,h.set(lt,yt));let Bt=yt.get(G);Bt===void 0&&(Bt=s.getUniformBlockIndex(lt,G.name),yt.set(G,Bt))}function _t(G,lt){let Bt=h.get(lt).get(G);c.get(lt)!==Bt&&(s.uniformBlockBinding(lt,Bt,G.__bindingPointIndex),c.set(lt,Bt))}function qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},et=null,vt={},f={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,_=null,w=null,M=null,T=null,C=null,R=new Tt(0,0,0),A=0,S=!1,E=null,D=null,z=null,k=null,Z=null,te.set(0,0,s.canvas.width,s.canvas.height),Vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Ct,bindFramebuffer:nt,drawBuffers:dt,useProgram:St,setBlending:Gt,setMaterial:Nt,setFlipSided:rt,setCullFace:it,setLineWidth:$,setPolygonOffset:j,setScissorTest:ht,activeTexture:kt,bindTexture:Lt,unbindTexture:y,compressedTexImage2D:v,compressedTexImage3D:I,texImage2D:ut,texImage3D:J,updateUBOMapping:Et,uniformBlockBinding:_t,texStorage2D:q,texStorage3D:st,texSubImage2D:F,texSubImage3D:V,compressedTexSubImage2D:O,compressedTexSubImage3D:tt,scissor:ft,viewport:mt,reset:qt}}function qx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ht,l=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return u?new OffscreenCanvas(y,v):Br("canvas")}function x(y,v,I){let F=1,V=Lt(y);if((V.width>I||V.height>I)&&(F=I/Math.max(V.width,V.height)),F<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let O=Math.floor(F*V.width),tt=Math.floor(F*V.height);f===void 0&&(f=g(O,tt));let q=v?g(O,tt):f;return q.width=O,q.height=tt,q.getContext("2d").drawImage(y,0,0,O,tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+O+"x"+tt+")."),q}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){s.generateMipmap(y)}function _(y){return y.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?s.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(y,v,I,F,V=!1){if(y!==null){if(s[y]!==void 0)return s[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let O=v;if(v===s.RED&&(I===s.FLOAT&&(O=s.R32F),I===s.HALF_FLOAT&&(O=s.R16F),I===s.UNSIGNED_BYTE&&(O=s.R8)),v===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(O=s.R8UI),I===s.UNSIGNED_SHORT&&(O=s.R16UI),I===s.UNSIGNED_INT&&(O=s.R32UI),I===s.BYTE&&(O=s.R8I),I===s.SHORT&&(O=s.R16I),I===s.INT&&(O=s.R32I)),v===s.RG&&(I===s.FLOAT&&(O=s.RG32F),I===s.HALF_FLOAT&&(O=s.RG16F),I===s.UNSIGNED_BYTE&&(O=s.RG8)),v===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&(O=s.RG8UI),I===s.UNSIGNED_SHORT&&(O=s.RG16UI),I===s.UNSIGNED_INT&&(O=s.RG32UI),I===s.BYTE&&(O=s.RG8I),I===s.SHORT&&(O=s.RG16I),I===s.INT&&(O=s.RG32I)),v===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&(O=s.RGB8UI),I===s.UNSIGNED_SHORT&&(O=s.RGB16UI),I===s.UNSIGNED_INT&&(O=s.RGB32UI),I===s.BYTE&&(O=s.RGB8I),I===s.SHORT&&(O=s.RGB16I),I===s.INT&&(O=s.RGB32I)),v===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&(O=s.RGBA8UI),I===s.UNSIGNED_SHORT&&(O=s.RGBA16UI),I===s.UNSIGNED_INT&&(O=s.RGBA32UI),I===s.BYTE&&(O=s.RGBA8I),I===s.SHORT&&(O=s.RGBA16I),I===s.INT&&(O=s.RGBA32I)),v===s.RGB&&(I===s.UNSIGNED_INT_5_9_9_9_REV&&(O=s.RGB9_E5),I===s.UNSIGNED_INT_10F_11F_11F_REV&&(O=s.R11F_G11F_B10F)),v===s.RGBA){let tt=V?zr:ye.getTransfer(F);I===s.FLOAT&&(O=s.RGBA32F),I===s.HALF_FLOAT&&(O=s.RGBA16F),I===s.UNSIGNED_BYTE&&(O=tt===Se?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(O=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(O=s.RGB5_A1)}return(O===s.R16F||O===s.R32F||O===s.RG16F||O===s.RG32F||O===s.RGBA16F||O===s.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function M(y,v){let I;return y?v===null||v===$i||v===Ki?I=s.DEPTH24_STENCIL8:v===ni?I=s.DEPTH32F_STENCIL8:v===cr&&(I=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$i||v===Ki?I=s.DEPTH_COMPONENT24:v===ni?I=s.DEPTH_COMPONENT32F:v===cr&&(I=s.DEPTH_COMPONENT16),I}function T(y,v){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==pn&&y.minFilter!==ei?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function C(y){let v=y.target;v.removeEventListener("dispose",C),A(v),v.isVideoTexture&&l.delete(v)}function R(y){let v=y.target;v.removeEventListener("dispose",R),E(v)}function A(y){let v=n.get(y);if(v.__webglInit===void 0)return;let I=y.source,F=d.get(I);if(F){let V=F[v.__cacheKey];V.usedTimes--,V.usedTimes===0&&S(y),Object.keys(F).length===0&&d.delete(I)}n.remove(y)}function S(y){let v=n.get(y);s.deleteTexture(v.__webglTexture);let I=y.source,F=d.get(I);delete F[v.__cacheKey],o.memory.textures--}function E(y){let v=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(v.__webglFramebuffer[F]))for(let V=0;V<v.__webglFramebuffer[F].length;V++)s.deleteFramebuffer(v.__webglFramebuffer[F][V]);else s.deleteFramebuffer(v.__webglFramebuffer[F]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[F])}else{if(Array.isArray(v.__webglFramebuffer))for(let F=0;F<v.__webglFramebuffer.length;F++)s.deleteFramebuffer(v.__webglFramebuffer[F]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let F=0;F<v.__webglColorRenderbuffer.length;F++)v.__webglColorRenderbuffer[F]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[F]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let I=y.textures;for(let F=0,V=I.length;F<V;F++){let O=n.get(I[F]);O.__webglTexture&&(s.deleteTexture(O.__webglTexture),o.memory.textures--),n.remove(I[F])}n.remove(y)}let D=0;function z(){D=0}function k(){let y=D;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),D+=1,y}function Z(y){let v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function P(y,v){let I=n.get(y);if(y.isVideoTexture&&ht(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&I.__version!==y.version){let F=y.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(I,y,v);return}}else y.isExternalTexture&&(I.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+v)}function Y(y,v){let I=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){at(I,y,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+v)}function W(y,v){let I=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){at(I,y,v);return}e.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+v)}function H(y,v){let I=n.get(y);if(y.version>0&&I.__version!==y.version){ct(I,y,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+v)}let et={[qn]:s.REPEAT,[Gi]:s.CLAMP_TO_EDGE,[ca]:s.MIRRORED_REPEAT},vt={[pn]:s.NEAREST,[Ku]:s.NEAREST_MIPMAP_NEAREST,[co]:s.NEAREST_MIPMAP_LINEAR,[ei]:s.LINEAR,[Za]:s.LINEAR_MIPMAP_NEAREST,[Zi]:s.LINEAR_MIPMAP_LINEAR},bt={[ju]:s.NEVER,[of]:s.ALWAYS,[tf]:s.LESS,[fh]:s.LEQUAL,[ef]:s.EQUAL,[rf]:s.GEQUAL,[nf]:s.GREATER,[sf]:s.NOTEQUAL};function Rt(y,v){if(v.type===ni&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ei||v.magFilter===Za||v.magFilter===co||v.magFilter===Zi||v.minFilter===ei||v.minFilter===Za||v.minFilter===co||v.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(y,s.TEXTURE_WRAP_S,et[v.wrapS]),s.texParameteri(y,s.TEXTURE_WRAP_T,et[v.wrapT]),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,et[v.wrapR]),s.texParameteri(y,s.TEXTURE_MAG_FILTER,vt[v.magFilter]),s.texParameteri(y,s.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(s.texParameteri(y,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(y,s.TEXTURE_COMPARE_FUNC,bt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===pn||v.minFilter!==co&&v.minFilter!==Zi||v.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");s.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function te(y,v){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",C));let F=v.source,V=d.get(F);V===void 0&&(V={},d.set(F,V));let O=Z(v);if(O!==y.__cacheKey){V[O]===void 0&&(V[O]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,I=!0),V[O].usedTimes++;let tt=V[y.__cacheKey];tt!==void 0&&(V[y.__cacheKey].usedTimes--,tt.usedTimes===0&&S(v)),y.__cacheKey=O,y.__webglTexture=V[O].texture}return I}function Vt(y,v,I){return Math.floor(Math.floor(y/I)/v)}function ae(y,v,I,F){let O=y.updateRanges;if(O.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,I,F,v.data);else{O.sort((J,ft)=>J.start-ft.start);let tt=0;for(let J=1;J<O.length;J++){let ft=O[tt],mt=O[J],Et=ft.start+ft.count,_t=Vt(mt.start,v.width,4),qt=Vt(ft.start,v.width,4);mt.start<=Et+1&&_t===qt&&Vt(mt.start+mt.count-1,v.width,4)===_t?ft.count=Math.max(ft.count,mt.start+mt.count-ft.start):(++tt,O[tt]=mt)}O.length=tt+1;let q=s.getParameter(s.UNPACK_ROW_LENGTH),st=s.getParameter(s.UNPACK_SKIP_PIXELS),ut=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let J=0,ft=O.length;J<ft;J++){let mt=O[J],Et=Math.floor(mt.start/4),_t=Math.ceil(mt.count/4),qt=Et%v.width,G=Math.floor(Et/v.width),lt=_t,yt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),e.texSubImage2D(s.TEXTURE_2D,0,qt,G,lt,yt,I,F,v.data)}y.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,q),s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,ut)}}function at(y,v,I){let F=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(F=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(F=s.TEXTURE_3D);let V=te(y,v),O=v.source;e.bindTexture(F,y.__webglTexture,s.TEXTURE0+I);let tt=n.get(O);if(O.version!==tt.__version||V===!0){e.activeTexture(s.TEXTURE0+I);let q=ye.getPrimaries(ye.workingColorSpace),st=v.colorSpace===Ii?null:ye.getPrimaries(v.colorSpace),ut=v.colorSpace===Ii||q===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let J=x(v.image,!1,i.maxTextureSize);J=kt(v,J);let ft=r.convert(v.format,v.colorSpace),mt=r.convert(v.type),Et=w(v.internalFormat,ft,mt,v.colorSpace,v.isVideoTexture);Rt(F,v);let _t,qt=v.mipmaps,G=v.isVideoTexture!==!0,lt=tt.__version===void 0||V===!0,yt=O.dataReady,Bt=T(v,J);if(v.isDepthTexture)Et=M(v.format===Ji,v.type),lt&&(G?e.texStorage2D(s.TEXTURE_2D,1,Et,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,Et,J.width,J.height,0,ft,mt,null));else if(v.isDataTexture)if(qt.length>0){G&&lt&&e.texStorage2D(s.TEXTURE_2D,Bt,Et,qt[0].width,qt[0].height);for(let Mt=0,ot=qt.length;Mt<ot;Mt++)_t=qt[Mt],G?yt&&e.texSubImage2D(s.TEXTURE_2D,Mt,0,0,_t.width,_t.height,ft,mt,_t.data):e.texImage2D(s.TEXTURE_2D,Mt,Et,_t.width,_t.height,0,ft,mt,_t.data);v.generateMipmaps=!1}else G?(lt&&e.texStorage2D(s.TEXTURE_2D,Bt,Et,J.width,J.height),yt&&ae(v,J,ft,mt)):e.texImage2D(s.TEXTURE_2D,0,Et,J.width,J.height,0,ft,mt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){G&&lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Et,qt[0].width,qt[0].height,J.depth);for(let Mt=0,ot=qt.length;Mt<ot;Mt++)if(_t=qt[Mt],v.format!==An)if(ft!==null)if(G){if(yt)if(v.layerUpdates.size>0){let Wt=yh(_t.width,_t.height,v.format,v.type);for(let ie of v.layerUpdates){let we=_t.data.subarray(ie*Wt/_t.data.BYTES_PER_ELEMENT,(ie+1)*Wt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,ie,_t.width,_t.height,1,ft,we)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,_t.width,_t.height,J.depth,ft,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Mt,Et,_t.width,_t.height,J.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?yt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,_t.width,_t.height,J.depth,ft,mt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Mt,Et,_t.width,_t.height,J.depth,0,ft,mt,_t.data)}else{G&&lt&&e.texStorage2D(s.TEXTURE_2D,Bt,Et,qt[0].width,qt[0].height);for(let Mt=0,ot=qt.length;Mt<ot;Mt++)_t=qt[Mt],v.format!==An?ft!==null?G?yt&&e.compressedTexSubImage2D(s.TEXTURE_2D,Mt,0,0,_t.width,_t.height,ft,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,Mt,Et,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?yt&&e.texSubImage2D(s.TEXTURE_2D,Mt,0,0,_t.width,_t.height,ft,mt,_t.data):e.texImage2D(s.TEXTURE_2D,Mt,Et,_t.width,_t.height,0,ft,mt,_t.data)}else if(v.isDataArrayTexture)if(G){if(lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Et,J.width,J.height,J.depth),yt)if(v.layerUpdates.size>0){let Mt=yh(J.width,J.height,v.format,v.type);for(let ot of v.layerUpdates){let Wt=J.data.subarray(ot*Mt/J.data.BYTES_PER_ELEMENT,(ot+1)*Mt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ot,J.width,J.height,1,ft,mt,Wt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,mt,J.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Et,J.width,J.height,J.depth,0,ft,mt,J.data);else if(v.isData3DTexture)G?(lt&&e.texStorage3D(s.TEXTURE_3D,Bt,Et,J.width,J.height,J.depth),yt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,mt,J.data)):e.texImage3D(s.TEXTURE_3D,0,Et,J.width,J.height,J.depth,0,ft,mt,J.data);else if(v.isFramebufferTexture){if(lt)if(G)e.texStorage2D(s.TEXTURE_2D,Bt,Et,J.width,J.height);else{let Mt=J.width,ot=J.height;for(let Wt=0;Wt<Bt;Wt++)e.texImage2D(s.TEXTURE_2D,Wt,Et,Mt,ot,0,ft,mt,null),Mt>>=1,ot>>=1}}else if(qt.length>0){if(G&&lt){let Mt=Lt(qt[0]);e.texStorage2D(s.TEXTURE_2D,Bt,Et,Mt.width,Mt.height)}for(let Mt=0,ot=qt.length;Mt<ot;Mt++)_t=qt[Mt],G?yt&&e.texSubImage2D(s.TEXTURE_2D,Mt,0,0,ft,mt,_t):e.texImage2D(s.TEXTURE_2D,Mt,Et,ft,mt,_t);v.generateMipmaps=!1}else if(G){if(lt){let Mt=Lt(J);e.texStorage2D(s.TEXTURE_2D,Bt,Et,Mt.width,Mt.height)}yt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,mt,J)}else e.texImage2D(s.TEXTURE_2D,0,Et,ft,mt,J);m(v)&&p(F),tt.__version=O.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function ct(y,v,I){if(v.image.length!==6)return;let F=te(y,v),V=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,y.__webglTexture,s.TEXTURE0+I);let O=n.get(V);if(V.version!==O.__version||F===!0){e.activeTexture(s.TEXTURE0+I);let tt=ye.getPrimaries(ye.workingColorSpace),q=v.colorSpace===Ii?null:ye.getPrimaries(v.colorSpace),st=v.colorSpace===Ii||tt===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ut=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let ot=0;ot<6;ot++)!ut&&!J?ft[ot]=x(v.image[ot],!0,i.maxCubemapSize):ft[ot]=J?v.image[ot].image:v.image[ot],ft[ot]=kt(v,ft[ot]);let mt=ft[0],Et=r.convert(v.format,v.colorSpace),_t=r.convert(v.type),qt=w(v.internalFormat,Et,_t,v.colorSpace),G=v.isVideoTexture!==!0,lt=O.__version===void 0||F===!0,yt=V.dataReady,Bt=T(v,mt);Rt(s.TEXTURE_CUBE_MAP,v);let Mt;if(ut){G&&lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,qt,mt.width,mt.height);for(let ot=0;ot<6;ot++){Mt=ft[ot].mipmaps;for(let Wt=0;Wt<Mt.length;Wt++){let ie=Mt[Wt];v.format!==An?Et!==null?G?yt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt,0,0,ie.width,ie.height,Et,ie.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt,qt,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt,0,0,ie.width,ie.height,Et,_t,ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt,qt,ie.width,ie.height,0,Et,_t,ie.data)}}}else{if(Mt=v.mipmaps,G&&lt){Mt.length>0&&Bt++;let ot=Lt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,qt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(J){G?yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,ft[ot].width,ft[ot].height,Et,_t,ft[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,qt,ft[ot].width,ft[ot].height,0,Et,_t,ft[ot].data);for(let Wt=0;Wt<Mt.length;Wt++){let we=Mt[Wt].image[ot].image;G?yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt+1,0,0,we.width,we.height,Et,_t,we.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt+1,qt,we.width,we.height,0,Et,_t,we.data)}}else{G?yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Et,_t,ft[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,qt,Et,_t,ft[ot]);for(let Wt=0;Wt<Mt.length;Wt++){let ie=Mt[Wt];G?yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt+1,0,0,Et,_t,ie.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Wt+1,qt,Et,_t,ie.image[ot])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),O.__version=V.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Ct(y,v,I,F,V,O){let tt=r.convert(I.format,I.colorSpace),q=r.convert(I.type),st=w(I.internalFormat,tt,q,I.colorSpace),ut=n.get(v),J=n.get(I);if(J.__renderTarget=v,!ut.__hasExternalTextures){let ft=Math.max(1,v.width>>O),mt=Math.max(1,v.height>>O);V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?e.texImage3D(V,O,st,ft,mt,v.depth,0,tt,q,null):e.texImage2D(V,O,st,ft,mt,0,tt,q,null)}e.bindFramebuffer(s.FRAMEBUFFER,y),j(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,F,V,J.__webglTexture,0,$(v)):(V===s.TEXTURE_2D||V>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,F,V,J.__webglTexture,O),e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(y,v,I){if(s.bindRenderbuffer(s.RENDERBUFFER,y),v.depthBuffer){let F=v.depthTexture,V=F&&F.isDepthTexture?F.type:null,O=M(v.stencilBuffer,V),tt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=$(v);j(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,q,O,v.width,v.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,q,O,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,O,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,y)}else{let F=v.textures;for(let V=0;V<F.length;V++){let O=F[V],tt=r.convert(O.format,O.colorSpace),q=r.convert(O.type),st=w(O.internalFormat,tt,q,O.colorSpace),ut=$(v);I&&j(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,st,v.width,v.height):j(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,st,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,st,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=n.get(v.depthTexture);F.__renderTarget=v,(!F.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),P(v.depthTexture,0);let V=F.__webglTexture,O=$(v);if(v.depthTexture.format===tr)j(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,V,0,O):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,V,0);else if(v.depthTexture.format===Ji)j(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,V,0,O):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function St(y){let v=n.get(y),I=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){let F=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),F){let V=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,F.removeEventListener("dispose",V)};F.addEventListener("dispose",V),v.__depthDisposeCallback=V}v.__boundDepthTexture=F}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let F=y.texture.mipmaps;F&&F.length>0?dt(v.__webglFramebuffer[0],y):dt(v.__webglFramebuffer,y)}else if(I){v.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[F]),v.__webglDepthbuffer[F]===void 0)v.__webglDepthbuffer[F]=s.createRenderbuffer(),nt(v.__webglDepthbuffer[F],y,!1);else{let V=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,O=v.__webglDepthbuffer[F];s.bindRenderbuffer(s.RENDERBUFFER,O),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,O)}}else{let F=y.texture.mipmaps;if(F&&F.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),nt(v.__webglDepthbuffer,y,!1);else{let V=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,O=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,O),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,O)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(y,v,I){let F=n.get(y);v!==void 0&&Ct(F.__webglFramebuffer,y,y.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&St(y)}function U(y){let v=y.texture,I=n.get(y),F=n.get(v);y.addEventListener("dispose",R);let V=y.textures,O=y.isWebGLCubeRenderTarget===!0,tt=V.length>1;if(tt||(F.__webglTexture===void 0&&(F.__webglTexture=s.createTexture()),F.__version=v.version,o.memory.textures++),O){I.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[q]=[];for(let st=0;st<v.mipmaps.length;st++)I.__webglFramebuffer[q][st]=s.createFramebuffer()}else I.__webglFramebuffer[q]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)I.__webglFramebuffer[q]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(tt)for(let q=0,st=V.length;q<st;q++){let ut=n.get(V[q]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),o.memory.textures++)}if(y.samples>0&&j(y)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let q=0;q<V.length;q++){let st=V[q];I.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[q]);let ut=r.convert(st.format,st.colorSpace),J=r.convert(st.type),ft=w(st.internalFormat,ut,J,st.colorSpace,y.isXRRenderTarget===!0),mt=$(y);s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,ft,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,I.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(I.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(O){e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)Ct(I.__webglFramebuffer[q][st],y,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,st);else Ct(I.__webglFramebuffer[q],y,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){for(let q=0,st=V.length;q<st;q++){let ut=V[q],J=n.get(ut),ft=s.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ft=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,J.__webglTexture),Rt(ft,ut),Ct(I.__webglFramebuffer,y,ut,s.COLOR_ATTACHMENT0+q,ft,0),m(ut)&&p(ft)}e.unbindTexture()}else{let q=s.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(q=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(q,F.__webglTexture),Rt(q,v),v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)Ct(I.__webglFramebuffer[st],y,v,s.COLOR_ATTACHMENT0,q,st);else Ct(I.__webglFramebuffer,y,v,s.COLOR_ATTACHMENT0,q,0);m(v)&&p(q),e.unbindTexture()}y.depthBuffer&&St(y)}function Gt(y){let v=y.textures;for(let I=0,F=v.length;I<F;I++){let V=v[I];if(m(V)){let O=_(y),tt=n.get(V).__webglTexture;e.bindTexture(O,tt),p(O),e.unbindTexture()}}}let Nt=[],rt=[];function it(y){if(y.samples>0){if(j(y)===!1){let v=y.textures,I=y.width,F=y.height,V=s.COLOR_BUFFER_BIT,O=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=n.get(y),q=v.length>1;if(q)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer);let st=y.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(V|=s.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(V|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,tt.__webglColorRenderbuffer[ut]);let J=n.get(v[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,I,F,0,0,I,F,V,s.NEAREST),c===!0&&(Nt.length=0,rt.length=0,Nt.push(s.COLOR_ATTACHMENT0+ut),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Nt.push(O),rt.push(O),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,rt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,tt.__webglColorRenderbuffer[ut]);let J=n.get(v[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,J,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){let v=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function $(y){return Math.min(i.maxSamples,y.samples)}function j(y){let v=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ht(y){let v=o.render.frame;l.get(y)!==v&&(l.set(y,v),y.update())}function kt(y,v){let I=y.colorSpace,F=y.format,V=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==cs&&I!==Ii&&(ye.getTransfer(I)===Se?(F!==An||V!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function Lt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(h.width=y.naturalWidth||y.width,h.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(h.width=y.displayWidth,h.height=y.displayHeight):(h.width=y.width,h.height=y.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=P,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=zt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=j}function Yx(s,t){function e(n,i=Ii){let r,o=ye.getTransfer(i);if(n===zn)return s.UNSIGNED_BYTE;if(n===Ka)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===lh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===rh)return s.BYTE;if(n===oh)return s.SHORT;if(n===cr)return s.UNSIGNED_SHORT;if(n===$a)return s.INT;if(n===$i)return s.UNSIGNED_INT;if(n===ni)return s.FLOAT;if(n===sn)return s.HALF_FLOAT;if(n===ch)return s.ALPHA;if(n===hh)return s.RGB;if(n===An)return s.RGBA;if(n===tr)return s.DEPTH_COMPONENT;if(n===Ji)return s.DEPTH_STENCIL;if(n===Qa)return s.RED;if(n===ja)return s.RED_INTEGER;if(n===uh)return s.RG;if(n===tl)return s.RG_INTEGER;if(n===el)return s.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===sl||n===rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===al||n===ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ol||n===al)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ll)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cl||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===vl||n===yl||n===_l||n===Ml||n===bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ml)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===El||n===wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===Al||n===Rl||n===Cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$x=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $r(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ve({vertexShader:Zx,fragmentShader:$x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new Ce(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends Ri{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,f=null,d=null,u=null,g=null,x=typeof XRWebGLBinding<"u",m=new Dh,p={},_=e.getContextAttributes(),w=null,M=null,T=[],C=[],R=new Ht,A=null,S=new en;S.viewport=new Ne;let E=new en;E.viewport=new Ne;let D=[S,E],z=new Pa,k=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ct=T[at];return ct===void 0&&(ct=new ir,T[at]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(at){let ct=T[at];return ct===void 0&&(ct=new ir,T[at]=ct),ct.getGripSpace()},this.getHand=function(at){let ct=T[at];return ct===void 0&&(ct=new ir,T[at]=ct),ct.getHandSpace()};function P(at){let ct=C.indexOf(at.inputSource);if(ct===-1)return;let Ct=T[ct];Ct!==void 0&&(Ct.update(at.inputSource,at.frame,h||o),Ct.dispatchEvent({type:at.type,data:at.inputSource}))}function Y(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",W);for(let at=0;at<T.length;at++){let ct=C[at];ct!==null&&(C[at]=null,T[at].disconnect(ct))}k=null,Z=null,m.reset();for(let at in p)delete p[at];t.setRenderTarget(w),u=null,d=null,f=null,i=null,M=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(at){h=at},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(at){if(i=at,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,nt=null,dt=null;_.depth&&(dt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=_.stencil?Ji:tr,nt=_.stencil?Ki:$i);let St={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(St),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ge(d.textureWidth,d.textureHeight,{format:An,type:zn,depthTexture:new ds(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Ct={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,Ct),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Ge(u.framebufferWidth,u.framebufferHeight,{format:An,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(at){for(let ct=0;ct<at.removed.length;ct++){let Ct=at.removed[ct],nt=C.indexOf(Ct);nt>=0&&(C[nt]=null,T[nt].disconnect(Ct))}for(let ct=0;ct<at.added.length;ct++){let Ct=at.added[ct],nt=C.indexOf(Ct);if(nt===-1){for(let St=0;St<T.length;St++)if(St>=C.length){C.push(Ct),nt=St;break}else if(C[St]===null){C[St]=Ct,nt=St;break}if(nt===-1)break}let dt=T[nt];dt&&dt.connect(Ct)}}let H=new L,et=new L;function vt(at,ct,Ct){H.setFromMatrixPosition(ct.matrixWorld),et.setFromMatrixPosition(Ct.matrixWorld);let nt=H.distanceTo(et),dt=ct.projectionMatrix.elements,St=Ct.projectionMatrix.elements,zt=dt[14]/(dt[10]-1),U=dt[14]/(dt[10]+1),Gt=(dt[9]+1)/dt[5],Nt=(dt[9]-1)/dt[5],rt=(dt[8]-1)/dt[0],it=(St[8]+1)/St[0],$=zt*rt,j=zt*it,ht=nt/(-rt+it),kt=ht*-rt;if(ct.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(kt),at.translateZ(ht),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),dt[10]===-1)at.projectionMatrix.copy(ct.projectionMatrix),at.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let Lt=zt+ht,y=U+ht,v=$-kt,I=j+(nt-kt),F=Gt*U/y*Lt,V=Nt*U/y*Lt;at.projectionMatrix.makePerspective(v,I,F,V,Lt,y),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function bt(at,ct){ct===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ct.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(i===null)return;let ct=at.near,Ct=at.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),z.near=E.near=S.near=ct,z.far=E.far=S.far=Ct,(k!==z.near||Z!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),k=z.near,Z=z.far),z.layers.mask=at.layers.mask|6,S.layers.mask=z.layers.mask&3,E.layers.mask=z.layers.mask&5;let nt=at.parent,dt=z.cameras;bt(z,nt);for(let St=0;St<dt.length;St++)bt(dt[St],nt);dt.length===2?vt(z,S,E):z.projectionMatrix.copy(S.projectionMatrix),Rt(at,z,nt)};function Rt(at,ct,Ct){Ct===null?at.matrix.copy(ct.matrixWorld):(at.matrix.copy(Ct.matrixWorld),at.matrix.invert(),at.matrix.multiply(ct.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ct.projectionMatrix),at.projectionMatrixInverse.copy(ct.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=hs*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(at){c=at,d!==null&&(d.fixedFoveation=at),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=at)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(at){return p[at]};let te=null;function Vt(at,ct){if(l=ct.getViewerPose(h||o),g=ct,l!==null){let Ct=l.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let nt=!1;Ct.length!==z.cameras.length&&(z.cameras.length=0,nt=!0);for(let U=0;U<Ct.length;U++){let Gt=Ct[U],Nt=null;if(u!==null)Nt=u.getViewport(Gt);else{let it=f.getViewSubImage(d,Gt);Nt=it.viewport,U===0&&(t.setRenderTargetTextures(M,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(M))}let rt=D[U];rt===void 0&&(rt=new en,rt.layers.enable(U),rt.viewport=new Ne,D[U]=rt),rt.matrix.fromArray(Gt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Gt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),U===0&&(z.matrix.copy(rt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),nt===!0&&z.cameras.push(rt)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let U=f.getDepthInformation(Ct[0]);U&&U.isValid&&U.texture&&m.init(U,i.renderState)}if(dt&&dt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let U=0;U<Ct.length;U++){let Gt=Ct[U].camera;if(Gt){let Nt=p[Gt];Nt||(Nt=new $r,p[Gt]=Nt);let rt=f.getCameraImage(Gt);Nt.sourceTexture=rt}}}}for(let Ct=0;Ct<T.length;Ct++){let nt=C[Ct],dt=T[Ct];nt!==null&&dt!==void 0&&dt.update(nt,ct,h||o)}te&&te(at,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}let ae=new Uf;ae.setAnimationLoop(Vt),this.setAnimationLoop=function(at){te=at},this.dispose=function(){}}},bs=new Ze,Kx=new Dt;function Jx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,w,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,w):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),w=_.envMap,M=_.envMapRotation;w&&(m.envMap.value=w,bs.copy(M),bs.x*=-1,bs.y*=-1,bs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),m.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(bs)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Qx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){let M=w.program;n.uniformBlockBinding(_,M)}function h(_,w){let M=i[_.id];M===void 0&&(g(_),M=l(_),i[_.id]=M,_.addEventListener("dispose",m));let T=w.program;n.updateUBOMapping(_,T);let C=t.render.frame;r[_.id]!==C&&(d(_),r[_.id]=C)}function l(_){let w=f();_.__bindingPointIndex=w;let M=s.createBuffer(),T=_.__size,C=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,T,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,M),M}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let w=i[_.id],M=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let C=0,R=M.length;C<R;C++){let A=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,E=A.length;S<E;S++){let D=A[S];if(u(D,C,S,T)===!0){let z=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],Z=0;for(let P=0;P<k.length;P++){let Y=k[P],W=x(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,z+Z,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,Z),Z+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(_,w,M,T){let C=_.value,R=w+"_"+M;if(T[R]===void 0)return typeof C=="number"||typeof C=="boolean"?T[R]=C:T[R]=C.clone(),!0;{let A=T[R];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return T[R]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function g(_){let w=_.uniforms,M=0,T=16;for(let R=0,A=w.length;R<A;R++){let S=Array.isArray(w[R])?w[R]:[w[R]];for(let E=0,D=S.length;E<D;E++){let z=S[E],k=Array.isArray(z.value)?z.value:[z.value];for(let Z=0,P=k.length;Z<P;Z++){let Y=k[Z],W=x(Y),H=M%T,et=H%W.boundary,vt=H+et;M+=et,vt!==0&&T-vt<W.storage&&(M+=T-vt),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=W.storage}}}let C=M%T;return C>0&&(M+=T-C),_.__size=M,_.__cache={},this}function x(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function m(_){let w=_.target;w.removeEventListener("dispose",m);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:h,dispose:p}}var Nl=class{constructor(t={}){let{canvas:e=af(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,T=!1;this._outputColorSpace=dn;let C=0,R=0,A=null,S=-1,E=null,D=new Ne,z=new Ne,k=null,Z=new Tt(0),P=0,Y=e.width,W=e.height,H=1,et=null,vt=null,bt=new Ne(0,0,Y,W),Rt=new Ne(0,0,Y,W),te=!1,Vt=new Wi,ae=!1,at=!1,ct=new Dt,Ct=new L,nt=new Ne,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function zt(){return A===null?H:1}let U=n;function Gt(b,B){return e.getContext(b,B)}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),U===null){let B="webgl2";if(U=Gt(B,b),U===null)throw Gt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Nt,rt,it,$,j,ht,kt,Lt,y,v,I,F,V,O,tt,q,st,ut,J,ft,mt,Et,_t,qt;function G(){Nt=new gg(U),Nt.init(),Et=new Yx(U,Nt),rt=new cg(U,Nt,t,Et),it=new Xx(U,Nt),rt.reversedDepthBuffer&&d&&it.buffers.depth.setReversed(!0),$=new yg(U),j=new Dx,ht=new qx(U,Nt,it,j,rt,Et,$),kt=new ug(M),Lt=new mg(M),y=new wp(U),_t=new ag(U,y),v=new xg(U,y,$,_t),I=new Mg(U,v,y,$),J=new _g(U,rt,ht),q=new hg(j),F=new Ix(M,kt,Lt,Nt,rt,_t,q),V=new Jx(M,j),O=new Ux,tt=new kx(Nt),ut=new og(M,kt,Lt,it,I,u,c),st=new Gx(M,I,rt),qt=new Qx(U,$,rt,it),ft=new lg(U,Nt,$),mt=new vg(U,Nt,$),$.programs=F.programs,M.capabilities=rt,M.extensions=Nt,M.properties=j,M.renderLists=O,M.shadowMap=st,M.state=it,M.info=$}G();let lt=new Lh(M,U);this.xr=lt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=Nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(Y,W,!1))},this.getSize=function(b){return b.set(Y,W)},this.setSize=function(b,B,K=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,W=B,e.width=Math.floor(b*H),e.height=Math.floor(B*H),K===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(Y*H,W*H).floor()},this.setDrawingBufferSize=function(b,B,K){Y=b,W=B,H=K,e.width=Math.floor(b*K),e.height=Math.floor(B*K),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(bt)},this.setViewport=function(b,B,K,Q){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,B,K,Q),it.viewport(D.copy(bt).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,B,K,Q){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,B,K,Q),it.scissor(z.copy(Rt).multiplyScalar(H).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(b){it.setScissorTest(te=b)},this.setOpaqueSort=function(b){et=b},this.setTransparentSort=function(b){vt=b},this.getClearColor=function(b){return b.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,K=!0){let Q=0;if(b){let X=!1;if(A!==null){let xt=A.texture.format;X=xt===el||xt===tl||xt===ja}if(X){let xt=A.texture.type,wt=xt===zn||xt===$i||xt===cr||xt===Ki||xt===Ka||xt===Ja,Pt=ut.getClearColor(),At=ut.getClearAlpha(),Xt=Pt.r,Yt=Pt.g,Zt=Pt.b;wt?(g[0]=Xt,g[1]=Yt,g[2]=Zt,g[3]=At,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Xt,x[1]=Yt,x[2]=Zt,x[3]=At,U.clearBufferiv(U.COLOR,0,x))}else Q|=U.COLOR_BUFFER_BIT}B&&(Q|=U.DEPTH_BUFFER_BIT),K&&(Q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),ut.dispose(),O.dispose(),tt.dispose(),j.dispose(),kt.dispose(),Lt.dispose(),I.dispose(),_t.dispose(),qt.dispose(),F.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Hn),lt.removeEventListener("sessionend",Uo),ai.stop()};function yt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=$.autoReset,B=st.enabled,K=st.autoUpdate,Q=st.needsUpdate,X=st.type;G(),$.autoReset=b,st.enabled=B,st.autoUpdate=K,st.needsUpdate=Q,st.type=X}function Mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ot(b){let B=b.target;B.removeEventListener("dispose",ot),Wt(B)}function Wt(b){ie(b),j.remove(b)}function ie(b){let B=j.get(b).programs;B!==void 0&&(B.forEach(function(K){F.releaseProgram(K)}),b.isShaderMaterial&&F.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,K,Q,X,xt){B===null&&(B=dt);let wt=X.isMesh&&X.matrixWorld.determinant()<0,Pt=zo(b,B,K,Q,X);it.setMaterial(Q,wt);let At=K.index,Xt=1;if(Q.wireframe===!0){if(At=v.getWireframeAttribute(K),At===void 0)return;Xt=2}let Yt=K.drawRange,Zt=K.attributes.position,re=Yt.start*Xt,me=(Yt.start+Yt.count)*Xt;xt!==null&&(re=Math.max(re,xt.start*Xt),me=Math.min(me,(xt.start+xt.count)*Xt)),At!==null?(re=Math.max(re,0),me=Math.min(me,At.count)):Zt!=null&&(re=Math.max(re,0),me=Math.min(me,Zt.count));let Ue=me-re;if(Ue<0||Ue===1/0)return;_t.setup(X,Q,Pt,K,At);let Re,Pe=ft;if(At!==null&&(Re=y.get(At),Pe=mt,Pe.setIndex(Re)),X.isMesh)Q.wireframe===!0?(it.setLineWidth(Q.wireframeLinewidth*zt()),Pe.setMode(U.LINES)):Pe.setMode(U.TRIANGLES);else if(X.isLine){let oe=Q.linewidth;oe===void 0&&(oe=1),it.setLineWidth(oe*zt()),X.isLineSegments?Pe.setMode(U.LINES):X.isLineLoop?Pe.setMode(U.LINE_LOOP):Pe.setMode(U.LINE_STRIP)}else X.isPoints?Pe.setMode(U.POINTS):X.isSprite&&Pe.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Pe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let oe=X._multiDrawStarts,He=X._multiDrawCounts,be=X._multiDrawCount,In=At?y.get(At).bytesPerElement:1,Os=j.get(Q).currentProgram.getUniforms();for(let Dn=0;Dn<be;Dn++)Os.setValue(U,"_gl_DrawID",Dn),Pe.render(oe[Dn]/In,He[Dn])}else if(X.isInstancedMesh)Pe.renderInstances(re,Ue,X.count);else if(K.isInstancedBufferGeometry){let oe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,He=Math.min(K.instanceCount,oe);Pe.renderInstances(re,Ue,He)}else Pe.render(re,Ue)};function we(b,B,K){b.transparent===!0&&b.side===nn&&b.forceSinglePass===!1?(b.side=mn,b.needsUpdate=!0,zs(b,B,K),b.side=Ti,b.needsUpdate=!0,zs(b,B,K),b.side=nn):zs(b,B,K)}this.compile=function(b,B,K=null){K===null&&(K=b),p=tt.get(K),p.init(B),w.push(p),K.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),b!==K&&b.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let Q=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xt=X.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){let Pt=xt[wt];we(Pt,K,X),Q.add(Pt)}else we(xt,K,X),Q.add(xt)}),p=w.pop(),Q},this.compileAsync=function(b,B,K=null){let Q=this.compile(b,B,K);return new Promise(X=>{function xt(){if(Q.forEach(function(wt){j.get(wt).currentProgram.isReady()&&Q.delete(wt)}),Q.size===0){X(b);return}setTimeout(xt,10)}Nt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Me=null;function Kn(b){Me&&Me(b)}function Hn(){ai.stop()}function Uo(){ai.start()}let ai=new Uf;ai.setAnimationLoop(Kn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(b){Me=b,lt.setAnimationLoop(b),b===null?ai.stop():ai.start()},lt.addEventListener("sessionstart",Hn),lt.addEventListener("sessionend",Uo),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(B),B=lt.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,B,A),p=tt.get(b,w.length),p.init(B),w.push(p),ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Vt.setFromProjectionMatrix(ct,ti,B.reversedDepth),at=this.localClippingEnabled,ae=q.init(this.clippingPlanes,at),m=O.get(b,_.length),m.init(),_.push(m),lt.enabled===!0&&lt.isPresenting===!0){let xt=M.xr.getDepthSensingMesh();xt!==null&&Ns(xt,B,-1/0,M.sortObjects)}Ns(b,B,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(et,vt),St=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,St&&ut.addToRenderList(m,b),this.info.render.frame++,ae===!0&&q.beginShadows();let K=p.state.shadowsArray;st.render(K,b,B),ae===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,X=m.transmissive;if(p.setupLights(),B.isArrayCamera){let xt=B.cameras;if(X.length>0)for(let wt=0,Pt=xt.length;wt<Pt;wt++){let At=xt[wt];No(Q,X,b,At)}St&&ut.render(b);for(let wt=0,Pt=xt.length;wt<Pt;wt++){let At=xt[wt];Er(m,b,At,At.viewport)}}else X.length>0&&No(Q,X,b,B),St&&ut.render(b),Er(m,b,B);A!==null&&R===0&&(ht.updateMultisampleRenderTarget(A),ht.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(M,b,B),_t.resetDefaultState(),S=-1,E=null,w.pop(),w.length>0?(p=w[w.length-1],ae===!0&&q.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ns(b,B,K,Q){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Vt.intersectsSprite(b)){Q&&nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ct);let wt=I.update(b),Pt=b.material;Pt.visible&&m.push(b,wt,Pt,K,nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Vt.intersectsObject(b))){let wt=I.update(b),Pt=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),nt.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),nt.copy(wt.boundingSphere.center)),nt.applyMatrix4(b.matrixWorld).applyMatrix4(ct)),Array.isArray(Pt)){let At=wt.groups;for(let Xt=0,Yt=At.length;Xt<Yt;Xt++){let Zt=At[Xt],re=Pt[Zt.materialIndex];re&&re.visible&&m.push(b,wt,re,K,nt.z,Zt)}}else Pt.visible&&m.push(b,wt,Pt,K,nt.z,null)}}let xt=b.children;for(let wt=0,Pt=xt.length;wt<Pt;wt++)Ns(xt[wt],B,K,Q)}function Er(b,B,K,Q){let X=b.opaque,xt=b.transmissive,wt=b.transparent;p.setupLightsView(K),ae===!0&&q.setGlobalState(M.clippingPlanes,K),Q&&it.viewport(D.copy(Q)),X.length>0&&Fs(X,B,K),xt.length>0&&Fs(xt,B,K),wt.length>0&&Fs(wt,B,K),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function No(b,B,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ge(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?sn:zn,minFilter:Zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));let xt=p.state.transmissionRenderTarget[Q.id],wt=Q.viewport||D;xt.setSize(wt.z*M.transmissionResolutionScale,wt.w*M.transmissionResolutionScale);let Pt=M.getRenderTarget(),At=M.getActiveCubeFace(),Xt=M.getActiveMipmapLevel();M.setRenderTarget(xt),M.getClearColor(Z),P=M.getClearAlpha(),P<1&&M.setClearColor(16777215,.5),M.clear(),St&&ut.render(K);let Yt=M.toneMapping;M.toneMapping=Pi;let Zt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),ae===!0&&q.setGlobalState(M.clippingPlanes,Q),Fs(b,K,Q),ht.updateMultisampleRenderTarget(xt),ht.updateRenderTargetMipmap(xt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let me=0,Ue=B.length;me<Ue;me++){let Re=B[me],Pe=Re.object,oe=Re.geometry,He=Re.material,be=Re.group;if(He.side===nn&&Pe.layers.test(Q.layers)){let In=He.side;He.side=mn,He.needsUpdate=!0,Fo(Pe,K,Q,oe,He,be),He.side=In,He.needsUpdate=!0,re=!0}}re===!0&&(ht.updateMultisampleRenderTarget(xt),ht.updateRenderTargetMipmap(xt))}M.setRenderTarget(Pt,At,Xt),M.setClearColor(Z,P),Zt!==void 0&&(Q.viewport=Zt),M.toneMapping=Yt}function Fs(b,B,K){let Q=B.isScene===!0?B.overrideMaterial:null;for(let X=0,xt=b.length;X<xt;X++){let wt=b[X],Pt=wt.object,At=wt.geometry,Xt=wt.group,Yt=wt.material;Yt.allowOverride===!0&&Q!==null&&(Yt=Q),Pt.layers.test(K.layers)&&Fo(Pt,B,K,At,Yt,Xt)}}function Fo(b,B,K,Q,X,xt){b.onBeforeRender(M,B,K,Q,X,xt),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(M,B,K,Q,b,xt),X.transparent===!0&&X.side===nn&&X.forceSinglePass===!1?(X.side=mn,X.needsUpdate=!0,M.renderBufferDirect(K,B,Q,X,b,xt),X.side=Ti,X.needsUpdate=!0,M.renderBufferDirect(K,B,Q,X,b,xt),X.side=nn):M.renderBufferDirect(K,B,Q,X,b,xt),b.onAfterRender(M,B,K,Q,X,xt)}function zs(b,B,K){B.isScene!==!0&&(B=dt);let Q=j.get(b),X=p.state.lights,xt=p.state.shadowsArray,wt=X.state.version,Pt=F.getParameters(b,X.state,xt,B,K),At=F.getProgramCacheKey(Pt),Xt=Q.programs;Q.environment=b.isMeshStandardMaterial?B.environment:null,Q.fog=B.fog,Q.envMap=(b.isMeshStandardMaterial?Lt:kt).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Xt===void 0&&(b.addEventListener("dispose",ot),Xt=new Map,Q.programs=Xt);let Yt=Xt.get(At);if(Yt!==void 0){if(Q.currentProgram===Yt&&Q.lightsStateVersion===wt)return Ni(b,Pt),Yt}else Pt.uniforms=F.getUniforms(b),b.onBeforeCompile(Pt,M),Yt=F.acquireProgram(Pt,At),Xt.set(At,Yt),Q.uniforms=Pt.uniforms;let Zt=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Zt.clippingPlanes=q.uniform),Ni(b,Pt),Q.needsLights=yc(b),Q.lightsStateVersion=wt,Q.needsLights&&(Zt.ambientLightColor.value=X.state.ambient,Zt.lightProbe.value=X.state.probe,Zt.directionalLights.value=X.state.directional,Zt.directionalLightShadows.value=X.state.directionalShadow,Zt.spotLights.value=X.state.spot,Zt.spotLightShadows.value=X.state.spotShadow,Zt.rectAreaLights.value=X.state.rectArea,Zt.ltc_1.value=X.state.rectAreaLTC1,Zt.ltc_2.value=X.state.rectAreaLTC2,Zt.pointLights.value=X.state.point,Zt.pointLightShadows.value=X.state.pointShadow,Zt.hemisphereLights.value=X.state.hemi,Zt.directionalShadowMap.value=X.state.directionalShadowMap,Zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Zt.spotShadowMap.value=X.state.spotShadowMap,Zt.spotLightMatrix.value=X.state.spotLightMatrix,Zt.spotLightMap.value=X.state.spotLightMap,Zt.pointShadowMap.value=X.state.pointShadowMap,Zt.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Yt,Q.uniformsList=null,Yt}function wr(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=dr.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Ni(b,B){let K=j.get(b);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function zo(b,B,K,Q,X){B.isScene!==!0&&(B=dt),ht.resetTextureUnits();let xt=B.fog,wt=Q.isMeshStandardMaterial?B.environment:null,Pt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:cs,At=(Q.isMeshStandardMaterial?Lt:kt).get(Q.envMap||wt),Xt=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Yt=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Zt=!!K.morphAttributes.position,re=!!K.morphAttributes.normal,me=!!K.morphAttributes.color,Ue=Pi;Q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ue=M.toneMapping);let Re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Pe=Re!==void 0?Re.length:0,oe=j.get(Q),He=p.state.lights;if(ae===!0&&(at===!0||b!==E)){let yn=b===E&&Q.id===S;q.setState(Q,b,yn)}let be=!1;Q.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==He.state.version||oe.outputColorSpace!==Pt||X.isBatchedMesh&&oe.batching===!1||!X.isBatchedMesh&&oe.batching===!0||X.isBatchedMesh&&oe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&oe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&oe.instancing===!1||!X.isInstancedMesh&&oe.instancing===!0||X.isSkinnedMesh&&oe.skinning===!1||!X.isSkinnedMesh&&oe.skinning===!0||X.isInstancedMesh&&oe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&oe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&oe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&oe.instancingMorph===!1&&X.morphTexture!==null||oe.envMap!==At||Q.fog===!0&&oe.fog!==xt||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==q.numPlanes||oe.numIntersection!==q.numIntersection)||oe.vertexAlphas!==Xt||oe.vertexTangents!==Yt||oe.morphTargets!==Zt||oe.morphNormals!==re||oe.morphColors!==me||oe.toneMapping!==Ue||oe.morphTargetsCount!==Pe)&&(be=!0):(be=!0,oe.__version=Q.version);let In=oe.currentProgram;be===!0&&(In=zs(Q,B,X));let Os=!1,Dn=!1,Tr=!1,Ve=In.getUniforms(),Vn=oe.uniforms;if(it.useProgram(In.program)&&(Os=!0,Dn=!0,Tr=!0),Q.id!==S&&(S=Q.id,Dn=!0),Os||E!==b){it.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ve.setValue(U,"projectionMatrix",b.projectionMatrix),Ve.setValue(U,"viewMatrix",b.matrixWorldInverse);let wn=Ve.map.cameraPosition;wn!==void 0&&wn.setValue(U,Ct.setFromMatrixPosition(b.matrixWorld)),rt.logarithmicDepthBuffer&&Ve.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ve.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Dn=!0,Tr=!0)}if(X.isSkinnedMesh){Ve.setOptional(U,X,"bindMatrix"),Ve.setOptional(U,X,"bindMatrixInverse");let yn=X.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ve.setValue(U,"boneTexture",yn.boneTexture,ht))}X.isBatchedMesh&&(Ve.setOptional(U,X,"batchingTexture"),Ve.setValue(U,"batchingTexture",X._matricesTexture,ht),Ve.setOptional(U,X,"batchingIdTexture"),Ve.setValue(U,"batchingIdTexture",X._indirectTexture,ht),Ve.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&Ve.setValue(U,"batchingColorTexture",X._colorsTexture,ht));let Gn=K.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&J.update(X,K,In),(Dn||oe.receiveShadow!==X.receiveShadow)&&(oe.receiveShadow=X.receiveShadow,Ve.setValue(U,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Vn.envMap.value=At,Vn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&B.environment!==null&&(Vn.envMapIntensity.value=B.environmentIntensity),Dn&&(Ve.setValue(U,"toneMappingExposure",M.toneMappingExposure),oe.needsLights&&vc(Vn,Tr),xt&&Q.fog===!0&&V.refreshFogUniforms(Vn,xt),V.refreshMaterialUniforms(Vn,Q,H,W,p.state.transmissionRenderTarget[b.id]),dr.upload(U,wr(oe),Vn,ht)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(dr.upload(U,wr(oe),Vn,ht),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ve.setValue(U,"center",X.center),Ve.setValue(U,"modelViewMatrix",X.modelViewMatrix),Ve.setValue(U,"normalMatrix",X.normalMatrix),Ve.setValue(U,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let yn=Q.uniformsGroups;for(let wn=0,Mc=yn.length;wn<Mc;wn++){let ns=yn[wn];qt.update(ns,In),qt.bind(ns,In)}}return In}function vc(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function yc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,B,K){let Q=j.get(b);Q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),j.get(b.texture).__webglTexture=B,j.get(b.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:K,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let K=j.get(b);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0};let _c=U.createFramebuffer();this.setRenderTarget=function(b,B=0,K=0){A=b,C=B,R=K;let Q=!0,X=null,xt=!1,wt=!1;if(b){let At=j.get(b);if(At.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(U.FRAMEBUFFER,null),Q=!1;else if(At.__webglFramebuffer===void 0)ht.setupRenderTarget(b);else if(At.__hasExternalTextures)ht.rebindTextures(b,j.get(b.texture).__webglTexture,j.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Zt=b.depthTexture;if(At.__boundDepthTexture!==Zt){if(Zt!==null&&j.has(Zt)&&(b.width!==Zt.image.width||b.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(b)}}let Xt=b.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(wt=!0);let Yt=j.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Yt[B])?X=Yt[B][K]:X=Yt[B],xt=!0):b.samples>0&&ht.useMultisampledRTT(b)===!1?X=j.get(b).__webglMultisampledFramebuffer:Array.isArray(Yt)?X=Yt[K]:X=Yt,D.copy(b.viewport),z.copy(b.scissor),k=b.scissorTest}else D.copy(bt).multiplyScalar(H).floor(),z.copy(Rt).multiplyScalar(H).floor(),k=te;if(K!==0&&(X=_c),it.bindFramebuffer(U.FRAMEBUFFER,X)&&Q&&it.drawBuffers(b,X),it.viewport(D),it.scissor(z),it.setScissorTest(k),xt){let At=j.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,K)}else if(wt){let At=B;for(let Xt=0;Xt<b.textures.length;Xt++){let Yt=j.get(b.textures[Xt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Xt,Yt.__webglTexture,K,At)}}else if(b!==null&&K!==0){let At=j.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,At.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(b,B,K,Q,X,xt,wt,Pt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){it.bindFramebuffer(U.FRAMEBUFFER,At);try{let Xt=b.textures[Pt],Yt=Xt.format,Zt=Xt.type;if(!rt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-Q&&K>=0&&K<=b.height-X&&(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt),U.readPixels(B,K,Q,X,Et.convert(Yt),Et.convert(Zt),xt))}finally{let Xt=A!==null?j.get(A).__webglFramebuffer:null;it.bindFramebuffer(U.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(b,B,K,Q,X,xt,wt,Pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At)if(B>=0&&B<=b.width-Q&&K>=0&&K<=b.height-X){it.bindFramebuffer(U.FRAMEBUFFER,At);let Xt=b.textures[Pt],Yt=Xt.format,Zt=Xt.type;if(!rt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,re),U.bufferData(U.PIXEL_PACK_BUFFER,xt.byteLength,U.STREAM_READ),b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt),U.readPixels(B,K,Q,X,Et.convert(Yt),Et.convert(Zt),0);let me=A!==null?j.get(A).__webglFramebuffer:null;it.bindFramebuffer(U.FRAMEBUFFER,me);let Ue=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await lf(U,Ue,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,re),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xt),U.deleteBuffer(re),U.deleteSync(Ue),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,K=0){let Q=Math.pow(2,-K),X=Math.floor(b.image.width*Q),xt=Math.floor(b.image.height*Q),wt=B!==null?B.x:0,Pt=B!==null?B.y:0;ht.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,wt,Pt,X,xt),it.unbindTexture()};let Oo=U.createFramebuffer(),N=U.createFramebuffer();this.copyTextureToTexture=function(b,B,K=null,Q=null,X=0,xt=null){xt===null&&(X!==0?(er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=X,X=0):xt=0);let wt,Pt,At,Xt,Yt,Zt,re,me,Ue,Re=b.isCompressedTexture?b.mipmaps[xt]:b.image;if(K!==null)wt=K.max.x-K.min.x,Pt=K.max.y-K.min.y,At=K.isBox3?K.max.z-K.min.z:1,Xt=K.min.x,Yt=K.min.y,Zt=K.isBox3?K.min.z:0;else{let Gn=Math.pow(2,-X);wt=Math.floor(Re.width*Gn),Pt=Math.floor(Re.height*Gn),b.isDataArrayTexture?At=Re.depth:b.isData3DTexture?At=Math.floor(Re.depth*Gn):At=1,Xt=0,Yt=0,Zt=0}Q!==null?(re=Q.x,me=Q.y,Ue=Q.z):(re=0,me=0,Ue=0);let Pe=Et.convert(B.format),oe=Et.convert(B.type),He;B.isData3DTexture?(ht.setTexture3D(B,0),He=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ht.setTexture2DArray(B,0),He=U.TEXTURE_2D_ARRAY):(ht.setTexture2D(B,0),He=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let be=U.getParameter(U.UNPACK_ROW_LENGTH),In=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Os=U.getParameter(U.UNPACK_SKIP_PIXELS),Dn=U.getParameter(U.UNPACK_SKIP_ROWS),Tr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Re.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Re.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Yt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zt);let Ve=b.isDataArrayTexture||b.isData3DTexture,Vn=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let Gn=j.get(b),yn=j.get(B),wn=j.get(Gn.__renderTarget),Mc=j.get(yn.__renderTarget);it.bindFramebuffer(U.READ_FRAMEBUFFER,wn.__webglFramebuffer),it.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mc.__webglFramebuffer);for(let ns=0;ns<At;ns++)Ve&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,j.get(b).__webglTexture,X,Zt+ns),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,j.get(B).__webglTexture,xt,Ue+ns)),U.blitFramebuffer(Xt,Yt,wt,Pt,re,me,wt,Pt,U.DEPTH_BUFFER_BIT,U.NEAREST);it.bindFramebuffer(U.READ_FRAMEBUFFER,null),it.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||j.has(b)){let Gn=j.get(b),yn=j.get(B);it.bindFramebuffer(U.READ_FRAMEBUFFER,Oo),it.bindFramebuffer(U.DRAW_FRAMEBUFFER,N);for(let wn=0;wn<At;wn++)Ve?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gn.__webglTexture,X,Zt+wn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gn.__webglTexture,X),Vn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yn.__webglTexture,xt,Ue+wn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yn.__webglTexture,xt),X!==0?U.blitFramebuffer(Xt,Yt,wt,Pt,re,me,wt,Pt,U.COLOR_BUFFER_BIT,U.NEAREST):Vn?U.copyTexSubImage3D(He,xt,re,me,Ue+wn,Xt,Yt,wt,Pt):U.copyTexSubImage2D(He,xt,re,me,Xt,Yt,wt,Pt);it.bindFramebuffer(U.READ_FRAMEBUFFER,null),it.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Vn?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(He,xt,re,me,Ue,wt,Pt,At,Pe,oe,Re.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(He,xt,re,me,Ue,wt,Pt,At,Pe,Re.data):U.texSubImage3D(He,xt,re,me,Ue,wt,Pt,At,Pe,oe,Re):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,xt,re,me,wt,Pt,Pe,oe,Re.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,xt,re,me,Re.width,Re.height,Pe,Re.data):U.texSubImage2D(U.TEXTURE_2D,xt,re,me,wt,Pt,Pe,oe,Re);U.pixelStorei(U.UNPACK_ROW_LENGTH,be),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,In),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Os),U.pixelStorei(U.UNPACK_SKIP_ROWS,Dn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Tr),xt===0&&B.generateMipmaps&&U.generateMipmap(He),it.unbindTexture()},this.initRenderTarget=function(b){j.get(b).__webglFramebuffer===void 0&&ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ht.setTextureCube(b,0):b.isData3DTexture?ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ht.setTexture2DArray(b,0):ht.setTexture2D(b,0),it.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,it.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var pi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},jx=new ms(-1,1,1,-1,0,1),Nh=class extends Ee{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}},tv=new Nh,mi=class{constructor(t){this._mesh=new Ut(tv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,jx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ws=class extends Sn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=rn.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new mi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var go=class extends Sn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},zl=class extends Sn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ol=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ht);this._width=n.width,this._height=n.height,e=new Ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ws(pi),this.copyPass.material.blending=Je,this.clock=new gs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}go!==void 0&&(o instanceof go?n=!0:o instanceof zl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bl=class extends Sn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Tt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Bf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var gr=class s extends Sn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Ht(t.x,t.y):new Ht(256,256),this.clearColor=new Tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ge(r,o,{type:sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let f=new Ge(r,o,{type:sn});f.texture.name="UnrealBloomPass.h"+l,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ge(r,o,{type:sn});d.texture.name="UnrealBloomPass.v"+l,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Bf;this.highPassUniforms=rn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new Ht(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=rn.clone(pi.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:pi.vertexShader,fragmentShader:pi.fragmentShader,blending:Tn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Tt,this._oldClearAlpha=1,this._basic=new qe,this._fsQuad=new mi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ht(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ht(.5,.5)},direction:{value:new Ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};gr.BlurDirectionX=new Ht(1,0);gr.BlurDirectionY=new Ht(0,1);var xo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var kl=class extends Sn{constructor(){super(),this.uniforms=rn.clone(xo.uniforms),this.material=new jr({name:xo.name,uniforms:this.uniforms,vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader}),this._fsQuad=new mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ye.getTransfer(this._outputColorSpace)===Se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ka?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===lr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ga&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var vo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ht},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Dt},cameraProjectionMatrixInverse:{value:new Dt},cameraWorldMatrix:{value:new Dt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},yo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Hl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function kf(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=ev(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],c=2*Math.PI*a/n,h=new L(Math.cos(c),Math.sin(c),0).normalize();i[o*4]=(h.x*.5+.5)*255,i[o*4+1]=(h.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new hi(i,t,t);return r.wrapS=qn,r.wrapT=qn,r.needsUpdate=!0,r}function ev(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}var _o={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Fh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ht},cameraProjectionMatrixInverse:{value:new Dt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Fh(s,t,e){let n=nv(s,t,e),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function nv(s,t,e){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new L(Math.cos(r),Math.sin(r),o))}return n}var Vl=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,c=Math.floor(t+a),h=Math.floor(e+a),l=(3-Math.sqrt(3))/6,f=(c+h)*l,d=c-f,u=h-f,g=t-d,x=e-u,m,p;g>x?(m=1,p=0):(m=0,p=1);let _=g-m+l,w=x-p+l,M=g-1+2*l,T=x-1+2*l,C=c&255,R=h&255,A=this.perm[C+this.perm[R]]%12,S=this.perm[C+m+this.perm[R+p]]%12,E=this.perm[C+1+this.perm[R+1]]%12,D=.5-g*g-x*x;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[A],g,x));let z=.5-_*_-w*w;z<0?i=0:(z*=z,i=z*z*this._dot(this.grad3[S],_,w));let k=.5-M*M-T*T;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[E],M,T)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a,h=(t+e+n)*.3333333333333333,l=Math.floor(t+h),f=Math.floor(e+h),d=Math.floor(n+h),u=1/6,g=(l+f+d)*u,x=l-g,m=f-g,p=d-g,_=t-x,w=e-m,M=n-p,T,C,R,A,S,E;_>=w?w>=M?(T=1,C=0,R=0,A=1,S=1,E=0):_>=M?(T=1,C=0,R=0,A=1,S=0,E=1):(T=0,C=0,R=1,A=1,S=0,E=1):w<M?(T=0,C=0,R=1,A=0,S=1,E=1):_<M?(T=0,C=1,R=0,A=0,S=1,E=1):(T=0,C=1,R=0,A=1,S=1,E=0);let D=_-T+u,z=w-C+u,k=M-R+u,Z=_-A+2*u,P=w-S+2*u,Y=M-E+2*u,W=_-1+3*u,H=w-1+3*u,et=M-1+3*u,vt=l&255,bt=f&255,Rt=d&255,te=this.perm[vt+this.perm[bt+this.perm[Rt]]]%12,Vt=this.perm[vt+T+this.perm[bt+C+this.perm[Rt+R]]]%12,ae=this.perm[vt+A+this.perm[bt+S+this.perm[Rt+E]]]%12,at=this.perm[vt+1+this.perm[bt+1+this.perm[Rt+1]]]%12,ct=.6-_*_-w*w-M*M;ct<0?i=0:(ct*=ct,i=ct*ct*this._dot3(this.grad3[te],_,w,M));let Ct=.6-D*D-z*z-k*k;Ct<0?r=0:(Ct*=Ct,r=Ct*Ct*this._dot3(this.grad3[Vt],D,z,k));let nt=.6-Z*Z-P*P-Y*Y;nt<0?o=0:(nt*=nt,o=nt*nt*this._dot3(this.grad3[ae],Z,P,Y));let dt=.6-W*W-H*H-et*et;return dt<0?a=0:(dt*=dt,a=dt*dt*this._dot3(this.grad3[at],W,H,et)),32*(i+r+o+a)}noise4d(t,e,n,i){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20,l,f,d,u,g,x=(t+e+n+i)*c,m=Math.floor(t+x),p=Math.floor(e+x),_=Math.floor(n+x),w=Math.floor(i+x),M=(m+p+_+w)*h,T=m-M,C=p-M,R=_-M,A=w-M,S=t-T,E=e-C,D=n-R,z=i-A,k=S>E?32:0,Z=S>D?16:0,P=E>D?8:0,Y=S>z?4:0,W=E>z?2:0,H=D>z?1:0,et=k+Z+P+Y+W+H,vt=o[et][0]>=3?1:0,bt=o[et][1]>=3?1:0,Rt=o[et][2]>=3?1:0,te=o[et][3]>=3?1:0,Vt=o[et][0]>=2?1:0,ae=o[et][1]>=2?1:0,at=o[et][2]>=2?1:0,ct=o[et][3]>=2?1:0,Ct=o[et][0]>=1?1:0,nt=o[et][1]>=1?1:0,dt=o[et][2]>=1?1:0,St=o[et][3]>=1?1:0,zt=S-vt+h,U=E-bt+h,Gt=D-Rt+h,Nt=z-te+h,rt=S-Vt+2*h,it=E-ae+2*h,$=D-at+2*h,j=z-ct+2*h,ht=S-Ct+3*h,kt=E-nt+3*h,Lt=D-dt+3*h,y=z-St+3*h,v=S-1+4*h,I=E-1+4*h,F=D-1+4*h,V=z-1+4*h,O=m&255,tt=p&255,q=_&255,st=w&255,ut=a[O+a[tt+a[q+a[st]]]]%32,J=a[O+vt+a[tt+bt+a[q+Rt+a[st+te]]]]%32,ft=a[O+Vt+a[tt+ae+a[q+at+a[st+ct]]]]%32,mt=a[O+Ct+a[tt+nt+a[q+dt+a[st+St]]]]%32,Et=a[O+1+a[tt+1+a[q+1+a[st+1]]]]%32,_t=.6-S*S-E*E-D*D-z*z;_t<0?l=0:(_t*=_t,l=_t*_t*this._dot4(r[ut],S,E,D,z));let qt=.6-zt*zt-U*U-Gt*Gt-Nt*Nt;qt<0?f=0:(qt*=qt,f=qt*qt*this._dot4(r[J],zt,U,Gt,Nt));let G=.6-rt*rt-it*it-$*$-j*j;G<0?d=0:(G*=G,d=G*G*this._dot4(r[ft],rt,it,$,j));let lt=.6-ht*ht-kt*kt-Lt*Lt-y*y;lt<0?u=0:(lt*=lt,u=lt*lt*this._dot4(r[mt],ht,kt,Lt,y));let yt=.6-v*v-I*I-F*F-V*V;return yt<0?g=0:(yt*=yt,g=yt*yt*this._dot4(r[Et],v,I,F,V)),27*(l+f+d+u+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}};var xr=class s extends Sn{constructor(t,e,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=kf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ge(this.width,this.height,{type:sn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ve({defines:Object.assign({},vo.defines),uniforms:rn.clone(vo.uniforms),vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,blending:Je,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new to,this.normalMaterial.blending=Je,this.pdMaterial=new ve({defines:Object.assign({},_o.defines),uniforms:rn.clone(_o.uniforms),vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ve({defines:Object.assign({},yo.defines),uniforms:rn.clone(yo.uniforms),vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader,blending:Je}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ve({uniforms:rn.clone(pi.uniforms),vertexShader:pi.vertexShader,fragmentShader:pi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ao,blendDst:xs,blendEquation:Nn,blendSrcAlpha:oo,blendDstAlpha:xs,blendEquationAlpha:Nn}),this.blendMaterial=new ve({uniforms:rn.clone(Hl.uniforms),vertexShader:Hl.vertexShader,fragmentShader:Hl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Da,blendSrc:ao,blendDst:xs,blendEquation:Nn,blendSrcAlpha:oo,blendDstAlpha:xs,blendEquationAlpha:Nn}),this._fsQuad=new mi(null),this._originalClearColor=new Tt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ds,this.depthTexture.format=Ji,this.depthTexture.type=Ki,this.normalRenderTarget=new Ge(this.width,this.height,{minFilter:pn,magFilter:pn,type:sn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Fh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Vl,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let c=o,h=a;i[(o*t+a)*4]=(e.noise(c,h)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(c+t,h)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(c,h+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(c+t,h+t)*.5+.5)*255}let r=new hi(i,t,t,An,zn);return r.wrapS=qn,r.wrapT=qn,r.needsUpdate=!0,r}};xr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Hf={ultra:{label:"Ultra",pixelRatio:2,msaa:4,shadow:4096,shadowRange:150,ao:!0,reflections:.75,bloom:!0,grade:!0,shafts:!0},high:{label:"High",pixelRatio:1.5,msaa:4,shadow:2048,shadowRange:120,ao:!1,reflections:.5,bloom:!0,grade:!0,shafts:!0},medium:{label:"Balanced",pixelRatio:1.2,msaa:2,shadow:2048,shadowRange:90,ao:!1,reflections:0,bloom:!0,grade:!0,shafts:!0},low:{label:"Performance",pixelRatio:1,msaa:0,shadow:1024,shadowRange:70,ao:!1,reflections:0,bloom:!1,grade:!1,shafts:!1}},zh=class extends xr{_overrideVisibility(){super._overrideVisibility(),this.scene.traverseVisible(t=>{t.userData.noAO&&(t.visible=!1,this._visibilityCache.push(t))})}},iv={uniforms:{tDiffuse:{value:null},time:{value:0},resolution:{value:new Ht(1,1)},speedBlur:{value:0},camBlur:{value:new Ht},aberration:{value:.0015},vignette:{value:.32},grain:{value:.035},sunPos:{value:new Ht(.5,.5)},sunVisible:{value:0},sunColor:{value:new Tt(1,.7,.4)},flash:{value:0},night:{value:0}},vertexShader:`
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
    }`},sv={uniforms:{tDiffuse:{value:null},sunPos:{value:new Ht(.5,.5)},strength:{value:0},color:{value:new Tt(1,.7,.4)},aspect:{value:1}},vertexShader:`
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
    }`},Gl=class{constructor(t){this.renderer=new Nl({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1});let e=this.renderer;e.toneMapping=lr,e.toneMappingExposure=.85,e.shadowMap.enabled=!0,e.shadowMap.type=Ia,this.quality=null,this.scale=1,this.frameTimes=[],this.adaptTimer=0}init(t,e){this.scene=t,this.camera=e}buildComposer(){let t=this.quality,e=this.renderer;if(this.composer){this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose();for(let r of this.composer.passes)r.dispose?.()}let n=e.getSize(new Ht),i=new Ge(n.x,n.y,{type:sn,samples:t.msaa});this.composer=new Ol(e,i),this.composer.addPass(new Bl(this.scene,this.camera)),this.ao=null,t.ao&&(this.ao=new zh(this.scene,this.camera,n.x,n.y),this.ao.output=xr.OUTPUT.Default,this.ao.blendIntensity=.85,this.ao.updateGtaoMaterial({radius:1.6,distanceExponent:1.6,thickness:2.5,scale:1.4,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.composer.addPass(this.ao)),this.shafts=new ws(sv),this.shafts.enabled=t.shafts,this.composer.addPass(this.shafts),this.bloom=new gr(new Ht(n.x,n.y),.42,.62,.92),this.bloom.enabled=t.bloom,this.composer.addPass(this.bloom),this.composer.addPass(new kl),this.grade=new ws(iv),this.grade.enabled=!0,t.grade||(this.grade.uniforms.grain.value=0,this.grade.uniforms.aberration.value=0),this.composer.addPass(this.grade),this.applySize()}setQuality(t){this.quality=Hf[t]||Hf.high,this.qualityName=t,this.scale=1,this.renderer.shadowMap.enabled=!0,this.buildComposer()}applySize(){let t=innerWidth,e=innerHeight,n=Math.min(devicePixelRatio||1,this.quality.pixelRatio)*this.scale;this.renderer.setPixelRatio(n),this.renderer.setSize(t,e),this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.grade.uniforms.resolution.value.set(t*n,e*n),this.shafts.uniforms.aspect.value=t/e,this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.onResize?.()}adapt(t){if(this.frameTimes.push(t),this.frameTimes.length>90&&this.frameTimes.shift(),this.adaptTimer+=t,this.adaptTimer<2||this.frameTimes.length<60)return;this.adaptTimer=0;let e=[...this.frameTimes].sort((r,o)=>r-o),n=e[Math.floor(e.length/2)],i=this.scale;n>1/45?i=Math.max(.6,this.scale-.1):n<1/58&&this.scale<1&&(i=Math.min(1,this.scale+.05)),Math.abs(i-this.scale)>.001&&(this.scale=i,this.applySize())}render(){this.composer.render()}};var vr=`
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
`,Wl=`
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
`;var ql={golden:19.22,dusk:19.95,night:23.2,dawn:6.9,noon:13.2},Vf=6.4,rv=19.7,Qe={skySunDir:{value:new L(-.9,.12,-.3).normalize()},skyMoonDir:{value:new L(.6,.5,.4).normalize()},skyTurbidity:{value:6},skyRayleigh:{value:2.2},skyMie:{value:.006},skyMieG:{value:.82},skyIntensity:{value:.75},skyCloudCover:{value:.42},skyTime:{value:0},skyNight:{value:0},skyCloudLit:{value:new Tt},skyCloudShade:{value:new Tt},fogSunColor:{value:new Tt},fogSunDir:{value:new L},fogHeightFalloff:{value:.012},nightFactor:{value:0},worldTime:{value:0}};ce.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorld;
#endif`;ce.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorld = transpose(mat3(viewMatrix)) * (mvPosition.xyz - viewMatrix[3].xyz);
#endif`;ce.fog_pars_fragment=`
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
#endif`;ce.fog_fragment=`
#ifdef USE_FOG
  gl_FragColor.rgb = pa_applyFog(gl_FragColor.rgb, vFogWorld);
#endif`;function ov(s){if(s.userData.atmo)return s;s.userData.atmo=!0;let t=s.onBeforeCompile,e=s.customProgramCacheKey();return s.onBeforeCompile=function(n,i){t.call(this,n,i),n.uniforms.fogSunColor=Qe.fogSunColor,n.uniforms.fogSunDir=Qe.fogSunDir,n.uniforms.fogHeightFalloff=Qe.fogHeightFalloff},s.customProgramCacheKey=()=>e+"|atmo",s}function Wf(s){s.traverse(t=>{if(t.material)for(let e of Array.isArray(t.material)?t.material:[t.material])e.isShaderMaterial||e.isRawShaderMaterial||ov(e)})}var av=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,lv=`
${vr}
${Wl}
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
}`;function Gf(s=!0,t=!0){return new ve({uniforms:{...Qe,skyClouds:{value:s?1:0},skyDisc:{value:t?1:0}},vertexShader:av,fragmentShader:lv,side:mn,depthWrite:!1,depthTest:!0,fog:!1})}var cv=new L(0,1,0),hv=new L,uv=new L,Oh=new L,pe=(s,t,e)=>new Tt(s,t,e),Ts=(s,t,e)=>{if(e<=t[0][0])return s.copy(t[0][1]);for(let n=1;n<t.length;n++)if(e<=t[n][0]){let[i,r]=t[n-1],[o,a]=t[n];return s.copy(r).lerp(a,(e-i)/(o-i))}return s.copy(t[t.length-1][1])},Di=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e];return i+(o-i)*(t-n)/(r-n)}return s[s.length-1][1]},fv=[[-6,pe(.9,.35,.2)],[0,pe(1,.34,.1)],[4,pe(1,.47,.19)],[10,pe(1,.66,.38)],[25,pe(1,.88,.74)],[60,pe(1,.97,.92)]],dv=[[-4,0],[0,1.6],[4,4.6],[12,5],[40,5.2]],pv=[[-15,pe(.06,.09,.18)],[-4,pe(.22,.24,.42)],[2,pe(.62,.55,.62)],[12,pe(.6,.7,.85)],[40,pe(.62,.76,.95)]],mv=[[-15,pe(.05,.05,.06)],[0,pe(.35,.24,.2)],[15,pe(.42,.36,.3)],[40,pe(.45,.42,.38)]],gv=[[-15,.4],[-4,.42],[3,.32],[12,.45],[30,.6]],xv=[[-15,pe(.03,.04,.075)],[-5,pe(.15,.15,.26)],[0,pe(.42,.33,.38)],[6,pe(.58,.45,.42)],[18,pe(.55,.62,.72)],[50,pe(.55,.66,.8)]],vv=[[-15,pe(.05,.06,.1)],[-5,pe(.4,.24,.22)],[0,pe(1.15,.5,.22)],[6,pe(1.2,.68,.38)],[20,pe(.9,.84,.76)],[50,pe(.75,.8,.86)]],yv=[[-12,pe(.04,.05,.08)],[-5,pe(.45,.25,.32)],[0,pe(1.8,.72,.42)],[5,pe(1.9,1.1,.7)],[15,pe(1.5,1.4,1.35)],[50,pe(1.5,1.5,1.5)]],_v=[[-12,pe(.02,.025,.04)],[-5,pe(.18,.13,.22)],[0,pe(.42,.26,.34)],[5,pe(.6,.45,.48)],[15,pe(.62,.66,.74)],[50,pe(.7,.74,.8)]],Mv=[[-15,7e-4],[-3,8e-4],[3,85e-5],[15,6e-4],[50,45e-5]],bv=[[-15,1.35],[-5,1.2],[0,1.05],[6,.92],[20,.76],[50,.68]],Sv=[[-15,.5],[-4,.45],[2,.36],[12,.45],[30,.6]],Xl=class{constructor(t,e){this.renderer=t,this.scene=e,this.hours=ql.golden,this.cycle=!1,this.cycleSpeed=24/2880,this.sky=new Ut(new $t(1,1,1),Gf(!0)),this.sky.scale.setScalar(2e3),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.userData.noAO=!0,e.add(this.sky),this.probeScene=new us,this.probeSky=new Ut(new $t(1,1,1),Gf(!0,!1)),this.probeSky.scale.setScalar(100),this.probeScene.add(this.probeSky);let n=new Ut(new Kr(60,24),new qe({color:1776156}));n.rotation.x=-Math.PI/2,n.position.y=-2,this.probeGround=n,this.probeScene.add(n),this.pmrem=new pr(t),this.envTarget=null,this.envDirty=!0,this.envTimer=0,this.lastEnvHours=-100,this.sun=new so(16777215,3),this.sun.castShadow=!0,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.06,this.shadowRange=110,e.add(this.sun,this.sun.target),this.hemi=new no(16777215,4473924,1),e.add(this.hemi),e.fog=new Yr(12687759,.0016),this.sunDir=new L,this.moonDir=new L,this.lightDir=new L,this.nightFactor=0,this.elevation=0,this.exposure=.8,this.apply()}setHours(t){this.hours=(t%24+24)%24,this.envDirty=!0,this.apply()}setShadowQuality(t,e){this.sun.shadow.mapSize.set(t,t),this.shadowRange=e,this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=n.bottom=-e,n.right=n.top=e,n.near=1,n.far=900,n.updateProjectionMatrix()}computeSun(t,e){let n=(t-Vf)/(rv-Vf),i=Math.PI*n,r=Math.asin(Math.sin(i)*Math.sin(_e.degToRad(64))),o=Math.cos(i),a=Math.sin(i)*.6-.32,c=Math.hypot(o,a)||1;return e.set(o/c*Math.cos(r),Math.sin(r),a/c*Math.cos(r)).normalize(),_e.radToDeg(r)}apply(){let t=Qe,e=this.computeSun(this.hours,this.sunDir);this.elevation=e,this.computeSun(this.hours+12.4,this.moonDir),this.moonDir.y=Math.max(this.moonDir.y,.25),this.moonDir.normalize(),t.skySunDir.value.copy(this.sunDir),t.skyMoonDir.value.copy(this.moonDir);let n=_e.smoothstep(-e,-2,9),i=_e.smoothstep(-e,-7,1.5);this.nightFactor=n,this.lampFactor=i,t.nightFactor.value=i,t.skyNight.value=n,t.skyTurbidity.value=Di([[-5,3.5],[2,5.5],[10,4.5],[40,2.6]],e),t.skyRayleigh.value=Di([[-5,1.6],[2,2.8],[10,2],[40,1.2]],e),t.skyMie.value=Di([[0,.006],[10,.005],[40,.004]],e),t.skyIntensity.value=Di([[-8,.6],[0,.72],[20,.62],[50,.55]],e),Ts(t.skyCloudLit.value,yv,e),Ts(t.skyCloudShade.value,_v,e);let r=e>-1.5;this.lightDir.copy(r?this.sunDir:this.moonDir),r?(Ts(this.sun.color,fv,e),this.sun.intensity=Di(dv,e)):(this.sun.color.setRGB(.55,.65,.95),this.sun.intensity=.32*n),this.lightDir.y<.08&&(this.lightDir.y=.08,this.lightDir.normalize()),Ts(this.hemi.color,pv,e),Ts(this.hemi.groundColor,mv,e),this.hemi.intensity=Di(gv,e),Ts(this.scene.fog.color,xv,e),Ts(t.fogSunColor.value,vv,e),t.fogSunDir.value.copy(this.sunDir),this.scene.fog.density=Di(Mv,e),this.exposure=Di(bv,e),this.scene.environmentIntensity=Di(Sv,e),this.probeGround.material.color.copy(this.hemi.groundColor).multiplyScalar(.25)}regenerateEnvironment(){let t=this.envTarget;this.envTarget=this.pmrem.fromScene(this.probeScene,0,.1,400),this.scene.environment=this.envTarget.texture,t&&t.dispose(),this.envDirty=!1,this.lastEnvHours=this.hours}update(t,e,n,i){Qe.skyTime.value=e,Qe.worldTime.value=e,this.cycle&&(this.hours=(this.hours+t*this.cycleSpeed)%24,this.apply(),Math.abs(this.hours-this.lastEnvHours)>.12&&(this.envDirty=!0)),this.envDirty&&this.regenerateEnvironment(),this.sky.position.copy(i.position);let o=this.shadowRange*2/this.sun.shadow.mapSize.x,a=hv.crossVectors(cv,this.lightDir).normalize(),c=uv.crossVectors(this.lightDir,a),h=Math.round(n.dot(a)/o)*o,l=Math.round(n.dot(c)/o)*o,f=n.dot(this.lightDir);Oh.copy(a).multiplyScalar(h).addScaledVector(c,l).addScaledVector(this.lightDir,f),this.sun.target.position.copy(Oh),this.sun.position.copy(Oh).addScaledVector(this.lightDir,450),this.sun.target.updateMatrixWorld()}get clockLabel(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};function Rn(s,t,e){let n=t.isMaterial?t:new Ot(t);return n.onBeforeCompile=i=>{Object.assign(i.uniforms,e.uniforms||{}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
${vr}
${e.fragmentPars||""}`).replace("#include <color_fragment>",`#include <color_fragment>
${e.color||""}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${e.roughness||""}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${e.metalness||""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${e.normal||""}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${e.emissive||""}`)},n.customProgramCacheKey=()=>"pa-"+s,n}function Be(s,t,e,n,{srgb:i=!0,repeat:r=!1}={}){let o=document.createElement("canvas");o.width=t,o.height=e,n(o.getContext("2d"),t,e);let a=new fs(o);return i&&(a.colorSpace=dn),a.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),r&&(a.wrapS=a.wrapT=qn),a}var Kt=[-320,-160,0,160,320],Jt=[-480,-320,-160,0,160,320,480],ee=13,ii=6,Mo=[3.4,9.2],jt=.16,Bn=-418,Bh=-.62,Ye={from:-333,to:-342},je=-357,We={minX:-412,maxX:352,minZ:-556,maxZ:556},gi=[-240,-80,80,240],xi=[-400,-240,-80,80,240,400],Zn=160-ee*2,ne={rampStart:-342,x0:-374,x1:-556,z:-160,halfWidth:9,deckY:2.6};function Li(s,t){return Math.abs(t-ne.z)>ne.halfWidth||s>ne.rampStart||s<ne.x1?null:s>ne.x0?jt+(ne.deckY-jt)*(ne.rampStart-s)/(ne.rampStart-ne.x0):ne.deckY}var vi=[[-320,40],[-320,-300],[-170,-320],[-6,-320],[150,-320],[160,-10],[10,160],[-300,160]],Yl=15,As=[{axis:"ns",road:-160,s:-240,side:1},{axis:"ns",road:0,s:-80,side:-1},{axis:"ns",road:160,s:80,side:1},{axis:"ns",road:0,s:400,side:1},{axis:"ns",road:-320,s:-400,side:1},{axis:"ns",road:320,s:-240,side:-1},{axis:"ew",road:-320,s:-80,side:1},{axis:"ew",road:0,s:80,side:-1},{axis:"ew",road:160,s:-240,side:1},{axis:"ew",road:320,s:240,side:-1},{axis:"ew",road:-160,s:240,side:1},{axis:"ew",road:480,s:-80,side:-1}];function Rs(s,t=15.4){return s.axis==="ns"?[s.road+s.side*t,s.s]:[s.s,s.road+s.side*t]}var hn={x:-320+Mo[0],z:246,heading:0};function On(s,t){let e=s[0];for(let n of s)Math.abs(n-t)<Math.abs(e-t)&&(e=n);return e}function bo(s,t){if(s<je)return"sand";if(s<Ye.to)return"grass";if(s<Ye.from||s>Kt[Kt.length-1]+ee||Math.abs(t)>Jt[Jt.length-1]+ee)return"curb";let e=Math.abs(s-On(Kt,s))<ee,n=Math.abs(t-On(Jt,t))<ee;return e||n?"road":"curb"}function Xf(s){return s>=je?0:Math.max(-.02-(je-s)*.0105,Bh-.3)}function Zl(s,t){return s<-330?["OCEAN DRIVE","Vista Pac\xEDfica Beach"]:s<-170?["SEAVIEW","Coastal Quarter"]:s>0&&t<-20?["DOWNTOWN","Financial District"]:t>250?["SOUTHBANK","Harbor Heights"]:["PALM DISTRICT","San Aurelio"]}function qf(s,t){let e=Math.abs(s-On(Kt,s))<ee+3,n=Math.abs(t-On(Jt,t))<ee+3,i={"-320":"Ocean Drive","-160":"Seaview Ave",0:"Aurelio Blvd",160:"Grand Ave",320:"Hillcrest Ave"},r={"-480":"Marina St","-320":"Sunset Blvd","-160":"Pier Ave",0:"Palm St",160:"Harbor St",320:"Rosa St",480:"Southbank Rd"};return e?i[String(On(Kt,s))]:n?r[String(On(Jt,t))]:s<-330?"Beachfront":"Off road"}var Ev=`
float paRoadNearest(float v, float start, float maxIndex) {
  return clamp(floor((v - start) / 160.0 + 0.5), 0.0, maxIndex) * 160.0 + start;
}
// Returns paint mask (rgb = color, a = coverage) and fills asphalt wear.
vec4 paRoadMarkings(vec2 p, out float wear, out float onRoad) {
  float dx = p.x - paRoadNearest(p.x, -320.0, 4.0);
  float dz = p.y - paRoadNearest(p.y, -480.0, 6.0);
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
`,Cn={wetness:{value:0},mirrorTex:{value:null},mirrorMatrix:{value:new Dt},useMirror:{value:0},worldTime:{value:0}},wv=`
float paRoadDetail(vec2 p, float fw, out float manhole) {
  manhole = 0.0;
  float skid = 0.0;
  float dx = p.x - paRoadNearest(p.x, -320.0, 4.0);
  float dz = p.y - paRoadNearest(p.y, -480.0, 6.0);
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
`,Tv=`
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
`;function Av(){return Rn("road",{color:16777215,roughness:.85,metalness:0},{uniforms:Cn,fragmentPars:Ev+wv+Tv+`
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
      }`})}function Rv(){return Rn("slab",{color:16777215,roughness:.85,metalness:0},{uniforms:{wetness:Cn.wetness},vertexPars:"attribute float aLot; flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf;",vertex:`
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
        float ring = ${ii.toFixed(1)};
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
      }`,roughness:"roughnessFactor = mix(paSlabRough, 0.42, wetness * (abs(vLot - 1.0) < 0.5 ? 0.0 : 1.0));"})}function Cv(){return Rn("sand",{color:16777215,roughness:.95},{fragmentPars:"float paWet;",color:`
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
      }`,roughness:"roughnessFactor = mix(0.95, 0.22, paWet);"})}function Pv(){return Rn("terrain",{color:16777215,roughness:.95},{color:`
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
      }`})}function si(s,t){let e=Math.max(0,s-372),n=Math.max(0,-t-560),i=Math.max(0,t-560),r=Math.hypot(e,Math.max(n,i)*.9);if(s<-360)return-40;if(r<=0)return-.6;let o=Math.sin(s*.011+Math.sin(t*.006)*2)*.5+Math.sin(t*.013+s*.004)*.5,a=Math.sin(s*.031+t*.017)*5+Math.sin(t*.043-s*.012)*3.5;return-.6+(70*(1-Math.exp(-r/170))+r*.1)*(.8+o*.3)+a*Math.min(r/120,1)+Math.min(r/30,1)*1.5}function Yf(s,t){let e=Av(),n=new Ut(new Ce(1,1),e);n.rotation.x=-Math.PI/2;let i=je-1,r=400,o=-620,a=620;n.scale.set(r-i,a-o,1),n.position.set((i+r)/2,0,(o+a)/2),n.receiveShadow=!0,s.add(n);let c=[],h=new Set(["-80,80","240,400"]),l=new Set(["-240,-400","80,240"]),f=new Set(["80,-80","240,-240"]);for(let Y of gi)for(let W of xi){let H=`${Y},${W}`,et=h.has(H)?1:l.has(H)?2:f.has(H)?4:0;c.push([Y,W,Zn,Zn,et])}let d=a-o;c.push([(Ye.from+Ye.to)/2,0,Ye.from-Ye.to,d,3]),c.push([(Ye.to+je)/2,0,Ye.to-je,d,1]);let u=Kt[Kt.length-1]+ee;c.push([u+ii/2,0,ii,d,0]),c.push([(u+ii+400)/2,0,400-u-ii,d,1]);let g=Jt[0]-ee,x=Jt[Jt.length-1]+ee;for(let[Y,W]of[[g,-1],[x,1]]){let H=u-Ye.from,et=(u+Ye.from)/2;c.push([et,Y+W*ii/2,H,ii,0]),c.push([et,Y+W*(ii+35),H,70,1])}let m=new $t(1,1,1),p=new Qt(m,Rv(),c.length),_=new Float32Array(c.length),w=new Dt;c.forEach(([Y,W,H,et,vt],bt)=>{w.compose(new L(Y,jt/2-.05,W),new de,new L(H,jt+.1,et)),p.setMatrixAt(bt,w),_[bt]=vt}),m.setAttribute("aLot",new Oe(_,1)),p.receiveShadow=!0,p.layers.set(1),s.add(p);let M=new Ce(1,1,24,1),T=new Ut(M,Cv());T.rotation.x=-Math.PI/2;let C=-470,R=je;T.scale.set(R-C,1400,1),T.position.set((C+R)/2,0,0),T.updateMatrixWorld();let A=M.attributes.position;for(let Y=0;Y<A.count;Y++){let W=C+(A.getX(Y)+.5)*(R-C);A.setZ(Y,W>=je?0:-.02-(je-W)*.0105)}M.computeVertexNormals(),T.receiveShadow=!0,s.add(T);let S=new Ce(2600,2600,220,220);S.rotateX(-Math.PI/2);let E=S.attributes.position;for(let Y=0;Y<E.count;Y++){let W=E.getX(Y)+500,H=E.getZ(Y);E.setX(Y,W),E.setY(Y,si(W,H))}S.computeVertexNormals();let D=new Ut(S,Pv());D.receiveShadow=!0,s.add(D);let z=new $t(1,1,1),k=new Ot({color:10131084,roughness:.9}),Z=[[We.maxX+1.5,0,1,1,We.maxZ-We.minZ+4],[(We.maxX+Ye.from)/2,We.minZ-1.5,We.maxX-Ye.from,1,1],[(We.maxX+Ye.from)/2,We.maxZ+1.5,We.maxX-Ye.from,1,1]],P=new Qt(z,k,Z.length);return Z.forEach(([Y,W,H,et,vt],bt)=>{w.compose(new L(Y,et/2,W),new de,new L(H,et,vt)),P.setMatrixAt(bt,w)}),P.castShadow=P.receiveShadow=!0,s.add(P),{ground:n,slabMesh:p,terrain:D}}function De(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Ee,h=0;for(let l=0;l<s.length;++l){let f=s[l],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,u,l),h+=u}}if(e){let l=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+l);l+=s[d].attributes.position.count}c.setIndex(f)}for(let l in r){let f=Zf(r[l]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,f)}for(let l in o){let f=o[l][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<o[l].length;++x)u.push(o[l][x][d]);let g=Zf(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Zf(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){let l=s[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}let o=new t(r),a=new Xe(o,e,n),c=0;for(let h=0;h<s.length;++h){let l=s[h];if(l.isInterleavedBufferAttribute){let f=c/e;for(let d=0,u=l.count;d<u;d++)for(let g=0;g<e;g++){let x=l.getComponent(d,g);a.setComponent(d+f,g,x)}}else o.set(l.array,c);c+=l.count*e}return i!==void 0&&(a.gpuType=i),a}var Iv=new Dt;function Cs(s,{exclude:t=[]}={}){s.updateMatrixWorld(!0);let e=new Dt().copy(s.matrixWorld).invert(),n=new Set;for(let o of t)o.traverse(a=>n.add(a));let i=new Map;s.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||n.has(o)||Array.isArray(o.material)||o.geometry.isInstancedBufferGeometry||Object.keys(o.geometry.morphAttributes).length)return;let a=[o.material.uuid,o.castShadow,o.receiveShadow,o.layers.mask,o.renderOrder,!!o.userData.noAO,o.frustumCulled].join("|");i.has(a)||i.set(a,[]),i.get(a).push(o)});let r=0;for(let o of i.values()){if(o.length<2)continue;let a=o.map(d=>{let u=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();return u.applyMatrix4(Iv.multiplyMatrices(e,d.matrixWorld)),u}),c=Object.keys(a[0].attributes).filter(d=>a.every(u=>u.attributes[d]&&u.attributes[d].itemSize===a[0].attributes[d].itemSize));for(let d of a)for(let u of Object.keys(d.attributes))c.includes(u)||d.deleteAttribute(u);let h=De(a);if(!h)continue;let l=o[0],f=new Ut(h,l.material);f.castShadow=l.castShadow,f.receiveShadow=l.receiveShadow,f.layers.mask=l.layers.mask,f.renderOrder=l.renderOrder,f.frustumCulled=l.frustumCulled,f.userData={...l.userData,batched:o.length},s.add(f);for(let d of o)d.removeFromParent();r+=o.length-1}return r}var kh=8294;function pt(){return kh=kh*1664525+1013904223>>>0,kh/4294967296}var gt=(s,t)=>s+pt()*(t-s),le=s=>s[Math.floor(pt()*s.length)],xe=s=>pt()<s;var he={CURTAIN:0,PUNCHED:1,RIBBON:2,BRICK:3,STUCCO:4,BALCONY:5,BLANK:6,DECO:7,GARAGE:8,METAL:9,MOTEL:10,CONDO:11},Dv=`
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
`;function $f(s=!1){let t=Rn(s?"facade-low":"facade",{color:16777215,roughness:.85,metalness:0},{uniforms:{nightFactor:Qe.nightFactor,worldTime:Qe.worldTime},vertexPars:`
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
      vFacTop = (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y;`,fragmentPars:Dv,color:`
      {
        vec3 albedo = diffuseColor.rgb;
        paFacade(albedo);
        diffuseColor.rgb = albedo;
      }`,roughness:"roughnessFactor = fRough;",metalness:"metalnessFactor = fMetal;",normal:"normal = normalize(normal + (viewMatrix * vec4(fTilt, 0.0)).xyz);",emissive:"totalEmissiveRadiance += fEmit;"});return s&&(t.defines={...t.defines,FACADE_LOW:""}),t}function Lv(){return Rn("tiles",{color:16777215,roughness:.7},{color:`
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
      }`})}function Uv(){let e=[-.54,0,-.54,.54,0,-.54,.54,0,.54,-.54,0,.54,-.22,1,0,.22,1,0],n=[0,4,5,0,5,1,1,5,2,2,5,4,2,4,3,3,4,0],i=new Ee;i.setAttribute("position",new se(e,3)),i.setIndex(n);let r=i.toNonIndexed();return r.computeVertexNormals(),r}var Pn={stucco:["#e8dcc4","#f0d6c0","#e6c9a8","#d9e2d6","#f2e8d8","#e7b9a3","#d6c7e0","#f4e4b8","#cfe0e3"],concrete:["#a9a59c","#b8b2a6","#8f8e88","#c9c3b5","#9a9690","#b0aba0"],brick:["#8a4f3c","#9c5a43","#7a4535","#a8735a","#6d4a3c","#a35b45"],tower:["#9fa6a8","#7c8589","#b5b8b4","#5f686d","#c8c3b8"],stone:["#d8cbb0","#c9b79a","#b8a88c","#d2c6ae","#bfae94"],condo:["#e9e8e4","#d9dcdc","#c4c9cb","#ece4d6","#d6d2ca"],metal:["#8a9196","#6d7a6f","#9a8f7a","#7d4a3a","#5f6b78","#a7a9a3"],glass:[[.18,.32,.38],[.16,.27,.36],[.28,.3,.28],[.25,.22,.18],[.2,.34,.33],[.14,.2,.3]]},Nv={"-240,-400":"parking","-240,-240":{stucco:3,motel:2,shops:2},"-240,-80":{hotel:3,shops:2,stucco:1},"-240,80":{stucco:3,shops:2,motel:1},"-240,240":{motel:2,stucco:3,shops:1},"-240,400":{stucco:3,shops:2},"-80,-400":{brick:3,shops:2,garage:1},"-80,-240":{office:2,garage:1,deco:1,shops:1},"-80,-80":{shops:2,condo:2,deco:1,brick:1},"-80,80":"park","-80,240":{brick:3,garage:1,shops:1},"-80,400":{warehouse:4,garage:1},"80,-400":{tower:3,office:2,deco:1},"80,-240":{tower:2,deco:2,office:1},"80,-80":"plaza","80,80":{hotel:2,shops:1,condo:2},"80,240":"parking","80,400":{warehouse:3,shops:1,brick:1},"240,-400":{office:2,tower:2,garage:1},"240,-240":"plaza-tall","240,-80":{deco:2,tower:2,hotel:1},"240,80":{condo:2,brick:2,shops:1},"240,240":{condo:3,shops:2},"240,400":"park"},Fv={tower:36,deco:32,office:28,hotel:28,garage:28,condo:24,warehouse:24,motel:24,brick:18,stucco:14,shops:14};var Qf=["COFFEE","PIZZA","NAILS","DELI","BOOKS","PHARMACY","TACOS","SURF","RAMEN","BAR","DONUTS","LAUNDRY","VINYL","BANK","FLOWERS","GYM"],Kf=["#ff5a7a","#5fe8ff","#ffd25a","#ff8a3d","#a6ff6a","#ffffff","#ff6af0","#7ab8ff"],zv=["HOTEL MIRAMAR","THE PALMS","CASA DEL MAR","HOTEL AURELIO","THE SEABRIGHT"],_r=2,Ov=3;function Jf(s,t){return(s<0?0:1)+_r*(t<-160?0:t<160?1:2)}function So(s,t,e,n,i=0){let r=s.x1-s.x0,o=s.z1-s.z0;if(r<=e&&o<=e||i>5)return n.push(s),n;let a=r>=o,c=a?r:o;if(c<t*2)return n.push(s),n;let h=_e.clamp(gt(.36,.64)*c,t,c-t);return a?(So({...s,x1:s.x0+h},t,e,n,i+1),So({...s,x0:s.x0+h},t,e,n,i+1)):(So({...s,z1:s.z0+h},t,e,n,i+1),So({...s,z0:s.z0+h},t,e,n,i+1)),n}function Bv(s){let t=Object.entries(s),e=t.reduce((i,[,r])=>i+r,0),n=pt()*e;for(let[i,r]of t)if((n-=r)<=0)return i;return t[0][0]}var un={px:{nx:1,nz:0,rot:Math.PI/2},nx:{nx:-1,nz:0,rot:-Math.PI/2},pz:{nx:0,nz:1,rot:0},nz:{nx:0,nz:-1,rot:Math.PI}};function Qi(s,t){return t.nx?s.d:s.w}function ji(s,t,e,n=0){return t.nx?[s.x+t.nx*(s.w/2+n),s.z+e]:[s.x+e,s.z+t.nz*(s.d/2+n)]}function yr(s){return De(s.map(([t,e,n,i,r,o,a=0,c=0,h=0,l="box"])=>{let f=l==="cyl"?new fe(t,t,e,12):l==="cone"?new ui(t,e,12):new $t(t,e,n);return(a||c||h)&&f.applyMatrix4(new Dt().makeRotationFromEuler(new Ze(a,c,h))),f.translate(i,r,o),f.index?f.toNonIndexed():f}))}function kv(){let s=yr([[1.6,1,1.2,0,.5,0],[.42,.08,0,0,1.04,0,0,0,0,"cyl"],[1.62,.06,1.22,0,.22,0]]),t=yr([[1.6,3,0,0,4.1,0,0,0,0,"cyl"],[1.75,1,0,0,6.1,0,0,0,0,"cone"],[.16,2.6,.16,1.1,1.3,1.1],[.16,2.6,.16,-1.1,1.3,1.1],[.16,2.6,.16,1.1,1.3,-1.1],[.16,2.6,.16,-1.1,1.3,-1.1],[2.6,.14,2.6,0,2.6,0]]),e=[[3.2,.06,1.1,0,0,.6],[3.2,.04,.04,0,.95,1.13],[.04,.04,1.1,-1.6,.95,.6],[.04,.04,1.1,1.6,.95,.6],[.04,.95,.04,-1.58,.47,1.13],[.04,.95,.04,0,.47,1.13],[.04,.95,.04,1.58,.47,1.13],[3.2,.03,.03,0,.5,1.13]],n=h=>yr([...e,[Math.hypot(2.4,h),.05,.55,0,-h/2,.55,0,0,Math.atan2(h,2.4)],[Math.hypot(2.4,h),.03,.03,0,-h/2+.85,.83,0,0,Math.atan2(h,2.4)]]),i=yr([[1,.16,1.35,0,0,.67]]),r=yr([[1,1,.04,0,.58,1.33],[.012,1,1.35,-.5,.58,.67],[.012,1,1.35,.5,.58,.67]]),o=(()=>{let h=[],l=[],f=(u,g,x,m,p,_)=>{h.push(...u,...g,...x,...u,...x,...m),l.push(p[0],p[1],_[0],p[1],_[0],_[1],p[0],p[1],_[0],_[1],p[0],_[1])};f([-.5,0,0],[.5,0,0],[.5,-.7,1.6],[-.5,-.7,1.6],[0,0],[1,1]),f([-.5,-.7,1.6],[.5,-.7,1.6],[.5,-1,1.6],[-.5,-1,1.6],[0,0],[1,.3]);let d=new Ee;return d.setAttribute("position",new se(h,3)),d.setAttribute("uv",new se(l,2)),d.computeVertexNormals(),d})(),a=new Ce(1,1),c=yr([[.08,1,0,0,.5,0,0,0,0,"cyl"]]);return{acUnit:s,tank:t,fireEscape:n,balconySlab:i,balconyRail:r,awning:o,sign:a,antenna:c}}function Hv(s){return Be(s,1024,1024,t=>{Qf.forEach((e,n)=>{let i=n%2*512,r=Math.floor(n/2)*128,o=Kf[n%Kf.length],a=n%3===0;t.fillStyle=a?"#121417":["#f4efe4","#1d3b4a","#5a1f1a"][n%3],t.fillRect(i+4,r+4,504,120),t.strokeStyle=o,t.lineWidth=6,t.strokeRect(i+10,r+10,492,108),t.font='800 78px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor=o,t.shadowBlur=16,t.fillStyle=n%3===0?o:n%3===1?"#ffffff":"#ffe9c2",t.fillText(e,i+256,r+68),t.shadowBlur=0})})}function Vv(s){return Be(s,256,32,(t,e,n)=>{for(let i=0;i<8;i++)t.fillStyle=i%2?"#f4f1ea":"#ffffff",t.fillRect(i*e/8,0,e/8,n),i%2===0&&(t.fillStyle="rgba(0,0,0,0.42)",t.fillRect(i*e/8,0,e/8,n))},{repeat:!1})}function jf(s,t){let e=new Map,n=[],i=[],r=[],o=[],a=[],c=[],h=[],l=[],f=(y,v,I,F)=>{let V=`${y}|${Jf(v,I)}`;e.has(V)||e.set(V,[]),e.get(V).push(F)};function d(y,v,I,F,V,O,tt,q){return f("facade",y,v,{x:y,z:v,w:I,d:F,y0:V,h:O,style:tt,...q}),i.push({x:y,z:v,w:I,d:F,h:V+O}),V<1&&n.push({x:y,z:v,w:I/2,d:F/2}),{x:y,z:v,w:I,d:F,y0:V,h:O,top:V+O}}let u=(y,v,I={})=>({wall:v,glass:le(Pn.glass),seed:pt()*100,shops:!1,floorH:y===he.CURTAIN?gt(3.7,4.2):y===he.STUCCO?3.4:y===he.GARAGE?3:gt(3.2,3.6),cellW:y===he.CURTAIN?gt(1.6,2.2):y===he.RIBBON?gt(2.4,3):y===he.STUCCO?gt(3.8,4.6):y===he.DECO?gt(2.2,2.6):y===he.MOTEL?4.2:y===he.CONDO?gt(3.2,3.8):gt(2.8,3.6),...I}),g=(y,v)=>y*v.floorH+(v.shops?4.8:.9)+1.3-jt,x=(y,v,I)=>{let F=Qi(y,I),V=Math.max(Math.floor((F-1)/v.cellW),1),O=v.shops?4.8:.9,tt=Math.max(0,Math.floor((y.top-1.3-O)/v.floorH));return{faceW:F,nCols:V,groundH:O,rows:tt,colU:q=>(q+.5-V/2)*v.cellW,rowY:q=>O+q*v.floorH}};function m(y,v,I=!1){for(let F=0;F<v;F++){let V=y.x+gt(-y.w/2+2.5,y.w/2-2.5),O=y.z+gt(-y.d/2+2.5,y.d/2-2.5);f("ac",V,O,{pos:[V,y.top,O],rot:le([0,Math.PI/2]),scale:[gt(.8,1.6),gt(.8,1.3),gt(.8,1.5)],color:le(["#b5b8b6","#9a9d9c","#c8c9c4"])})}if(I){let F=y.x+gt(-y.w/4,y.w/4),V=y.z+gt(-y.d/4,y.d/4);f("tank",F,V,{pos:[F,y.top,V],rot:0,scale:[1,gt(.9,1.15),1],color:le(["#6b4f36","#5e4a3a","#7a5a3e"])})}}function p(y,v,I,F){f("antenna",y,I,{pos:[y,v,I],rot:0,scale:[1,F,1],color:"#9aa0a3"}),c.push([y,v+F+.3,I])}function _(y,v){d(y.x,y.z,y.w+.9,y.d+.9,y.top-.15,.75,he.BLANK,u(he.BLANK,v))}function w(y,v,I,F){for(let V of I){let O=Qi(y,V),tt=Math.max(Math.floor(O/6),1),q=O/tt,st=le(["#b8322a","#2b6e8f","#2f7a4f","#d08a2a","#6b3f8f","#20304a"]);for(let ut=0;ut<tt;ut++){let J=-O/2+(ut+.5)*q;if(xe(.78)){let[ft,mt]=ji(y,V,J,.07);f("sign",ft,mt,{pos:[ft,4.1,mt],rot:V.rot,scale:[q*.72,.7,1],sign:Math.floor(pt()*Qf.length),color:"#ffffff"})}if(F&&xe(.7)){let[ft,mt]=ji(y,V,J,.02);f("awning",ft,mt,{pos:[ft,3.62,mt],rot:V.rot,scale:[q*.9,1,1],color:xe(.75)?st:le(["#b8322a","#2b6e8f","#2f7a4f"])})}}}}function M(y,v,I,F=2,V="glass"){for(let O of I){let tt=x(y,v,O);for(let q=1;q<tt.rows;q++)for(let st=0;st+F<=tt.nCols;st+=F){let ut=(tt.colU(st)+tt.colU(st+F-1))/2,J=F*v.cellW-.5,[ft,mt]=ji(y,O,ut,0),Et=tt.rowY(q)+.02;f("balconySlab",ft,mt,{pos:[ft,Et,mt],rot:O.rot,scale:[J,1,1],color:"#d9d8d2"}),f(V==="glass"?"balconyGlass":"balconyRail",ft,mt,{pos:[ft,Et,mt],rot:O.rot,scale:[J,1,1],color:V==="glass"?"#9fb6bf":"#2a2c2d"})}}}function T(y,v,I){let F=x(y,v,I);if(F.nCols<4||F.rows<3)return;let V=Math.floor(pt()*(F.nCols-2))+1,O=(F.colU(V)+F.colU(V+1))/2,[tt,q]=ji(y,I,O,0);for(let st=1;st<F.rows;st++)f("fireEscape",tt,q,{pos:[tt,F.rowY(st),q],rot:I.rot,scale:[1,1,1],color:"#2b2e30",floorH:v.floorH})}let C={tower(y,v,I){let F=y.w,V=y.d,O=d(y.x,y.z,F,V,jt,gt(10,16),le([he.RIBBON,he.PUNCHED]),u(he.RIBBON,le(Pn.concrete),{shops:!0}));w(O,null,v,!1),m({...O,x:y.x+F*.3,w:F*.3,d:V*.4},3);let tt=u(he.CURTAIN,le(Pn.tower)),q=70+I*gt(70,150),st=Math.min(F-10,gt(30,46)),ut=Math.min(V-10,gt(30,46)),J=O.top,ft=q>120?3:q>75?2:1,mt;for(let Et=0;Et<ft;Et++){let _t=Et===ft-1?Math.max(q-(J-jt),12):q*gt(.42,.58)/(Et+1);mt=d(y.x,y.z,st,ut,J,_t,he.CURTAIN,tt),J+=_t,st*=gt(.72,.86),ut*=gt(.72,.86)}if(a.push({x:mt.x,z:mt.z,w:mt.w,d:mt.d,y:mt.top-.6,color:le(["#bfe3ff","#ffe2b0","#ffffff","#ffb9d8"])}),xe(.5)){let Et=d(mt.x,mt.z,mt.w*.45,mt.d*.45,mt.top,6,he.BLANK,u(he.BLANK,"#7d8487"));p(mt.x,Et.top,mt.z,q>140?28:12)}else m(mt,4),c.push([mt.x+mt.w/2-1,mt.top+.8,mt.z+mt.d/2-1])},office(y,v,I){let F=y.w,V=y.d,O=Math.floor(gt(9,18)+I*gt(4,12)),tt=xe(.6)?he.RIBBON:he.PUNCHED,q=u(tt,le(Pn.concrete),{shops:!0}),st=d(y.x,y.z,F,V,jt,g(O,q),tt,q);w(st,q,v,!1);let ut=st;xe(.45)&&(ut=d(st.x+gt(-2,2),st.z+gt(-2,2),F*gt(.6,.75),V*gt(.6,.75),st.top,gt(8,20),tt,{...q,shops:!1}));let J=d(ut.x,ut.z,ut.w*.35,ut.d*.35,ut.top,4.5,he.BLANK,u(he.BLANK,"#8d8f8c"));m(ut,5),c.push([J.x,J.top+.3,J.z])},deco(y,v,I){let F=le(Pn.stone),V=u(he.DECO,F,{shops:!0}),O=50+I*gt(30,90),tt=y.w,q=y.d,st=jt,ut,J=3+(O>100?1:0);for(let mt=0;mt<J;mt++){let Et=mt===0?O*.45:O*.55/(J-1);ut=d(y.x,y.z,tt,q,st,Et,he.DECO,mt===0?V:{...V,shops:!1}),mt===0&&w(ut,V,v,xe(.4)),_(ut,"#e6dcc6"),st+=Et,tt*=gt(.7,.8),q*=gt(.7,.8)}let ft=d(ut.x,ut.z,Math.max(3,tt*.4),Math.max(3,q*.4),ut.top,8,he.BLANK,u(he.BLANK,F));p(ft.x,ft.top,ft.z,18),a.push({x:ft.x,z:ft.z,w:ft.w,d:ft.d,y:ft.top-1.2,color:le(["#ffe2b0","#bfe3ff"])})},brick(y,v){let I=u(he.BRICK,le(Pn.brick),{shops:xe(.75),floorH:gt(3.1,3.4)}),F=Math.floor(gt(4,8)),V=d(y.x,y.z,y.w,y.d,jt,g(F,I),he.BRICK,I);I.shops&&w(V,I,v,xe(.5)),_(V,"#b8ab98");for(let O of v.slice(0,2))xe(.8)&&T(V,I,O);m(V,2,xe(.8))},condo(y,v,I){let F=u(he.CONDO,le(Pn.condo),{shops:xe(.6),floorH:3.2}),V=Math.floor(gt(6,12)+I*8),O=d(y.x,y.z,y.w,y.d,jt,g(V,F),he.CONDO,F);F.shops&&w(O,F,v,!1),M(O,F,v,2,"glass"),m(O,3)},hotel(y,v,I){let F=u(he.CONDO,le(["#efe6d4","#e2d3bd","#d8dfe2","#f2ddd0"]),{shops:!0,floorH:3.3}),V=Math.min(y.w,gt(26,38)),O=Math.min(y.d,gt(18,26)),tt=Math.floor(gt(10,16)+I*6),q=d(y.x,y.z,V,O,jt,g(tt,F),he.CONDO,F);M(q,F,v.length?v:[un.pz],1,"metal");let st=v[0]||un.pz,ut=le(zv);o.push({kind:"hotel",b:q,f:st,name:ut}),m(q,3)},shops(y,v){let I=xe(.5),F=u(he.PUNCHED,xe(.6)?le(Pn.stucco):le(Pn.concrete),{shops:!0}),V=d(y.x,y.z,y.w,y.d,jt,I?g(1,F):6,he.PUNCHED,F);w(V,F,v.length?v:[un.pz],!0),_(V,"#cfc6b4"),m(V,Math.floor(gt(2,5)))},garage(y,v){let I=u(he.GARAGE,le(["#b3ada2","#a7a49c","#c0b8aa"]),{floorH:3}),F=Math.floor(gt(4,7)),V=d(y.x,y.z,y.w,y.d,jt,F*3+1.4,he.GARAGE,I);o.push({kind:"garage",b:V,f:v[0]||un.pz}),m(V,1)},stucco(y,v){let I=v.length>0&&xe(.8),F=u(he.STUCCO,le(Pn.stucco),{shops:I}),V=Math.floor(gt(2,5)),O=d(y.x,y.z,y.w,y.d,jt,g(V,F),xe(.8)?he.STUCCO:he.PUNCHED,F);I&&w(O,F,v,xe(.6)),xe(.8)?f("tileRoof",O.x,O.z,{pos:[O.x,O.top,O.z],rot:0,scale:[O.w,Math.min(O.w,O.d)*.22,O.d]}):m(O,2),v.find(q=>q.nx===-1)&&xe(.6)&&h.push({x:O.x-O.w/2-.12,z:O.z,y:(I?4.8:1.2)+1.8,face:"west",text:le(["MOTEL","TACOS","SURF SHOP","LIQUOR","PIZZA","COCKTAILS","ICE CREAM","BAIT & TACKLE"]),color:le(["#ff4f7b","#5ff2ff","#ffd25a","#ff7a3d","#9dff6a"])})},motel(y,v){let I=v[0]||un.pz,F=u(he.MOTEL,le(Pn.stucco),{floorH:3}),V=Qi(y,I),O=I.nx?y.w:y.d,tt=Math.min(O*.5,12),q=O/2-tt/2,st=y.x-I.nx*q,ut=y.z-I.nz*q,J=I.nx?tt:V*.92,ft=I.nx?V*.92:tt,mt=d(st,ut,J,ft,jt,g(2,F),he.MOTEL,F),[Et,_t]=ji(mt,I,0,0);f("balconySlab",Et,_t,{pos:[Et,.9+3+.02,_t],rot:I.rot,scale:[Qi(mt,I)-.4,1,1.15],color:"#e6e1d6"}),f("balconyRail",Et,_t,{pos:[Et,.9+3+.02,_t],rot:I.rot,scale:[Qi(mt,I)-.4,1,1.15],color:"#e8e4da"}),f("tileRoof",mt.x,mt.z,{pos:[mt.x,mt.top,mt.z],rot:0,scale:[mt.w,Math.min(mt.w,mt.d)*.28,mt.d]});let[qt,G]=ji(y,I,-Qi(y,I)/2+4,-2);o.push({kind:"motelSign",x:qt,z:G,f:I,name:le(["SEA BREEZE","SUNSET","PALM VIEW","BLUE WAVE"])}),r.push({x:y.x+I.nx*tt/2,z:y.z+I.nz*tt/2,w:I.nx?O-tt:V,d:I.nx?V:O-tt,parking:!0})},warehouse(y,v){let I=u(he.METAL,le(Pn.metal),{floorH:9}),F=gt(8,11.5),V=d(y.x,y.z,y.w,y.d,jt,F,he.METAL,I);m(V,Math.floor(gt(1,4)))}},R=Zn/2-ii;for(let y of gi)for(let v of xi){let I=`${y},${v}`,F=Nv[I],V=Math.max(0,1-Math.hypot(y-150,v+200)/380);if(F==="park"){r.push({x:y,z:v,w:R*2,d:R*2,park:!0});continue}if(F==="parking"){let q=d(y-R+14,v-R+11,24,18,jt,5.5,he.STUCCO,u(he.STUCCO,le(Pn.stucco),{shops:!0}));w(q,null,[un.nz],!0),h.push({x:q.x,z:q.z-q.d/2-.1,y:7.6,face:"north",text:I==="80,240"?"GAS \xB7 24H":"SURF DINER",color:"#ff6a5a"}),r.push({x:y+10,z:v+10,w:R*1.6,d:R*1.6,parking:!0});continue}if(F==="plaza"||F==="plaza-tall"){let q=gt(46,54);C.tower({x:y+gt(-6,6),z:v+gt(-6,6),w:q,d:q},[un.px,un.nx,un.pz,un.nz],F==="plaza-tall"?1.25:.95),r.push({x:y,z:v,w:R*2,d:R*2,plaza:!0});continue}let O=y===-240,tt=So({x0:y-R,x1:y+R,z0:v-R,z1:v+R},O?18:22,O?44:64,[]);for(let q of tt){let st=q.x1-q.x0,ut=q.z1-q.z0,J=[];if(q.x0<=y-R+.5&&J.push(un.nx),q.x1>=y+R-.5&&J.push(un.px),q.z0<=v-R+.5&&J.push(un.nz),q.z1>=v+R-.5&&J.push(un.pz),xe(.07)||!J.length){r.push({x:(q.x0+q.x1)/2,z:(q.z0+q.z1)/2,w:st,d:ut});continue}let ft=Object.fromEntries(Object.entries(F).filter(([Mt])=>Math.min(st,ut)>=Fv[Mt])),mt=Object.keys(ft).length?Bv(ft):"shops",Et=mt==="tower"?gt(2,6):mt==="shops"||mt==="brick"?gt(.2,1):gt(.5,3),_t=gt(1.5,4),qt=J.includes(un.nx)?Et:_t,G=J.includes(un.px)?Et:_t,lt=J.includes(un.nz)?Et:_t,yt=J.includes(un.pz)?Et:_t,Bt={x:(q.x0+qt+q.x1-G)/2,z:(q.z0+lt+q.z1-yt)/2,w:st-qt-G,d:ut-lt-yt};C[mt](Bt,J,V)}}for(let y=0;y<160;y++){let v=pt(),I=v<.6?gt(420,980):gt(-300,700),F=v<.6?gt(-900,900):xe(.5)?gt(620,1e3):gt(-1e3,-620);l.push([I,F])}let A=kv(),S=Hv(t),E=Vv(t),D=new $t(1,1,1),z=$f(),k=new Ot({map:S,emissive:16777215,emissiveMap:S,emissiveIntensity:.4,roughness:.5});k.onBeforeCompile=y=>{y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSign;`).replace("#include <uv_vertex>",`#include <uv_vertex>
        vec2 atlasUv = uv * vec2(0.5, 0.125) + aSign;
        #ifdef USE_MAP
          vMapUv = atlasUv;
        #endif
        #ifdef USE_EMISSIVEMAP
          vEmissiveMapUv = atlasUv;
        #endif`)},k.customProgramCacheKey=()=>"shop-sign-atlas";let Z=new Map,P={facade:{geometry:D,material:z,shadow:!0,lod:0},tileRoof:{geometry:Uv(),material:Lv(),shadow:!0,lod:0},ac:{geometry:A.acUnit,material:new Ot({color:16777215,roughness:.55,metalness:.5}),shadow:!0,lod:320},tank:{geometry:A.tank,material:new Ot({color:16777215,roughness:.9}),shadow:!0,lod:420},antenna:{geometry:A.antenna,material:new Ot({color:16777215,roughness:.4,metalness:.8}),shadow:!0,lod:0},fireEscape:{geometry:null,material:new Ot({color:16777215,roughness:.6,metalness:.6}),shadow:!0,lod:260},balconySlab:{geometry:A.balconySlab,material:new Ot({color:16777215,roughness:.8}),shadow:!0,lod:340},balconyGlass:{geometry:A.balconyRail,material:new Ot({color:16777215,roughness:.08,metalness:.7,transparent:!0,opacity:.55,depthWrite:!1}),shadow:!1,lod:300},balconyRail:{geometry:A.balconyRail,material:new Ot({color:16777215,roughness:.5,metalness:.5}),shadow:!0,lod:300},awning:{geometry:A.awning,material:new Ot({map:E,side:nn,roughness:.9}),shadow:!0,lod:300},sign:{geometry:A.sign,material:k,shadow:!1,lod:520}},Y=new Set(["tileRoof","ac","tank","antenna","fireEscape","balconyGlass","balconyRail","balconySlab"]),W=Array.from({length:_r*Ov},()=>[]),H=new Dt,et=new de,vt=new L,bt=new L,Rt=new Tt,te=new L(0,1,0);for(let[y,v]of e){let[I,F]=y.split("|"),V=P[I];if(I==="fireEscape"){let O=new Map;for(let tt of v){let q=tt.floorH.toFixed(1);O.has(q)||O.set(q,[]),O.get(q).push(tt)}for(let[tt,q]of O)Z.has(tt)||Z.set(tt,A.fireEscape(Number(tt))),Vt(I,Number(F),q,Z.get(tt),V);continue}Vt(I,Number(F),v,V.geometry,V)}function Vt(y,v,I,F,V){let O=F;(y==="facade"||y==="sign")&&(O=F.clone());let tt=new Qt(O,V.material,I.length);if(y==="facade"){let q=new Float32Array(I.length*4),st=new Float32Array(I.length*3),ut=new Float32Array(I.length*2);I.forEach((J,ft)=>{H.compose(vt.set(J.x,J.y0+J.h/2,J.z),et.identity(),bt.set(J.w,J.h,J.d)),tt.setMatrixAt(ft,H),tt.setColorAt(ft,Rt.set(J.wall)),q.set([J.style,J.floorH,J.cellW,J.seed],ft*4),st.set(J.glass,ft*3),ut.set([J.shops?1:0,0],ft*2)}),O.setAttribute("aStyle",new Oe(q,4)),O.setAttribute("aGlass",new Oe(st,3)),O.setAttribute("aExtra",new Oe(ut,2))}else{let q=y==="sign"?new Float32Array(I.length*2):null;I.forEach((st,ut)=>{et.setFromAxisAngle(te,st.rot||0),H.compose(vt.set(...st.pos),et,bt.set(...st.scale)),tt.setMatrixAt(ut,H),st.color&&tt.setColorAt(ut,Rt.set(st.color)),q&&q.set([st.sign%2*.5,.875-Math.floor(st.sign/2)*.125],ut*2)}),q&&O.setAttribute("aSign",new Oe(q,2))}tt.name=y,tt.castShadow=V.shadow,tt.receiveShadow=!0,tt.userData.lod=V.lod,y==="balconyGlass"&&(tt.userData.noAO=!0),Y.has(y)&&tt.layers.set(1),tt.computeBoundingSphere(),s.add(tt),W[v].push(tt)}let ae=W.map((y,v)=>new L(v%_r?160:-200,0,[-320,0,320][Math.floor(v/_r)])),at=[],ct=(y,v,I)=>Be(t,y,v,I),Ct=(y,v={})=>new Ot({color:1118481,map:y,emissive:16777215,emissiveMap:y,emissiveIntensity:.4,roughness:.5,...v}),nt=new Ot({color:1843235,roughness:.45,metalness:.6}),dt=new Ot({color:3353120,emissive:16767392,emissiveIntensity:.3}),St=(y,v,I,F=!0)=>{y.traverse(V=>{V.isMesh&&(V.castShadow=!0,V.receiveShadow=!0)}),y.isGroup&&Cs(y),y.userData.glow=F,s.add(y),at.push({mesh:y,chunk:Jf(v,I)})};for(let y of o)if(y.kind==="hotel"){let{b:v,f:I,name:F}=y,V=Qi(v,I),O=new Ie,tt=le(["#ffd27a","#ff7aa8","#7ad7ff"]),q=new Ut(new $t(7,.35,3.4),nt);q.position.set(0,4.25,1.7);let st=new Ut(new $t(6.6,.05,3),dt);st.position.set(0,4.05,1.7),O.add(q,st);for(let lt of[-3.2,3.2]){let yt=new Ut(new fe(.07,.07,4.1,8),nt);yt.position.set(lt,2.05,3.3),O.add(yt)}let ut=F.replace("HOTEL ","").replace("THE ",""),J=ct(128,1024,(lt,yt,Bt)=>{lt.fillStyle="#121519",lt.fillRect(0,0,yt,Bt),lt.strokeStyle=tt,lt.lineWidth=6,lt.strokeRect(8,8,yt-16,Bt-16),lt.fillStyle=tt,lt.textAlign="center",lt.textBaseline="middle",lt.shadowColor=tt,lt.shadowBlur=14;let Mt=ut.split(""),ot=(Bt-80)/Mt.length;lt.font=`800 ${Math.min(100,ot*.95)}px "Barlow Condensed", Impact, sans-serif`,Mt.forEach((Wt,ie)=>lt.fillText(Wt,yt/2,50+ot*(ie+.5)))}),ft=Ct(J),mt=Math.min(14,v.top-9);if(mt>5){let lt=new Ut(new $t(.35,mt,2.2),[ft,ft,nt,nt,nt,nt]);lt.position.set(V/2-2.2,7+mt/2,1.2),O.add(lt)}let Et=ct(1024,128,(lt,yt,Bt)=>{lt.clearRect(0,0,yt,Bt),lt.font='800 104px "Barlow Condensed", Impact, sans-serif',lt.textAlign="center",lt.textBaseline="middle",lt.shadowColor=tt,lt.shadowBlur=18,lt.fillStyle=tt,lt.fillText(F,yt/2,Bt/2+4),lt.shadowBlur=0,lt.fillStyle="#fff6e0",lt.fillText(F,yt/2,Bt/2+4)}),_t=new Ut(new Ce(Math.min(V*.85,26),Math.min(V*.85,26)/8),Ct(Et,{transparent:!0,alphaTest:.05,color:0}));_t.position.set(0,v.top-v.y0+1.9,-.6),_t.material.userData.boost=1.4,O.add(_t);let[qt,G]=ji(v,I,0,0);O.position.set(qt,jt,G),O.rotation.y=I.rot,St(O,qt,G)}else if(y.kind==="garage"){let{b:v,f:I}=y,F=ct(128,128,(ut,J,ft)=>{ut.fillStyle="#1d5fbf",ut.fillRect(0,0,J,ft),ut.strokeStyle="#ffffff",ut.lineWidth=8,ut.strokeRect(8,8,J-16,ft-16),ut.fillStyle="#ffffff",ut.font="800 100px Arial, sans-serif",ut.textAlign="center",ut.textBaseline="middle",ut.fillText("P",J/2,ft/2+6)}),V=Ct(F,{color:16777215}),O=new Ut(new $t(1.8,1.8,.3),[nt,nt,nt,nt,V,V]),tt=Qi(v,I),[q,st]=ji(v,I,tt/2-1.5,.3);O.position.set(q,v.top-2,st),O.rotation.y=I.rot,St(O,q,st)}else if(y.kind==="motelSign"){let{x:v,z:I,f:F,name:V}=y,O=ct(512,256,(J,ft,mt)=>{J.fillStyle="#16303a",J.fillRect(0,0,ft,mt),J.strokeStyle="#ff5a6e",J.lineWidth=10,J.strokeRect(10,10,ft-20,mt-20),J.textAlign="center",J.textBaseline="middle",J.shadowColor="#ff5a6e",J.shadowBlur=20,J.fillStyle="#ff7a8a",J.font='800 110px "Barlow Condensed", Impact, sans-serif',J.fillText("MOTEL",ft/2,92),J.shadowColor="#5fe8ff",J.fillStyle="#9ff3ff",J.font='700 54px "Barlow Condensed", Impact, sans-serif',J.fillText(V,ft/2,186),J.shadowBlur=0,J.fillStyle="#ffd25a",J.font="700 30px Arial",J.fillText("VACANCY",ft/2,232)}),tt=Ct(O),q=new Ie,st=new Ut(new fe(.22,.28,7.5,10),nt);st.position.y=3.75;let ut=new Ut(new $t(5.4,2.7,.35),[nt,nt,nt,nt,tt,tt]);ut.position.y=8.6,q.add(st,ut),q.position.set(v,jt,I),q.rotation.y=F.rot+Math.PI/2,St(q,v,I)}let zt=new Ot({color:2236962,emissive:16777215,emissiveIntensity:0,roughness:.4}),U=new Qt(D,zt,a.length);a.forEach((y,v)=>{H.compose(vt.set(y.x,y.y,y.z),et.identity(),bt.set(y.w+.5,.7,y.d+.5)),U.setMatrixAt(v,H),U.setColorAt(v,Rt.set(y.color))}),s.add(U),zt.onBeforeCompile=y=>{y.fragmentShader=y.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},zt.customProgramCacheKey=()=>"crown";let Gt=new qe({color:new Tt(6,.3,.2)}),Nt=new Qt(new bn(.45,8,6),Gt,c.length);c.forEach(([y,v,I],F)=>{H.makeTranslation(y,v,I),Nt.setMatrixAt(F,H)}),s.add(Nt);let rt=Gv(s,l),it=[];for(let y of h)it.push(Wv(s,t,y));let $=$f(!0),j=W.map((y,v)=>{let I=v%_r,F=Math.floor(v/_r);return{x0:I?0:-360,x1:I?360:0,z0:[-570,-160,160][F],z1:[-160,160,570][F]}}),ht=0,kt=at.flatMap(({mesh:y})=>{let v=[];return y.traverse(I=>{if(I.isMesh)for(let F of[].concat(I.material))(F.emissiveMap||F===dt)&&v.push(F)}),v}),Lt={colliders:n,buildingTops:i,emptyLots:r,stats:{buildings:n.length,facadeBoxes:[...e.keys()].filter(y=>y.startsWith("facade")).reduce((y,v)=>y+e.get(v).length,0)},update(y,v,I,F=.016){zt.emissiveIntensity=y*1.6,Gt.color.setRGB(8*(.15+.85*y)*(Math.sin(v*3.2)>.2?1:.04),.25,.15),k.emissiveIntensity=.3+y*2;for(let V of new Set(kt))V.emissiveIntensity=(.3+y*2.2)*(V.userData.boost||1);for(let V of it){let O=V.userData.flicker&&Math.sin(v*37)>.93?.3:1;V.material.emissiveIntensity=(.3+y*2.2)*O}if(rt&&(rt.material.userData.night.value=y),ht-=F,I&&ht<=0){ht=.25;let V=I.position.x,O=I.position.z;W.forEach((tt,q)=>{let st=j[q],ut=Math.max(st.x0-V,0,V-st.x1),J=Math.max(st.z0-O,0,O-st.z1),ft=Math.hypot(ut,J);for(let mt of tt)mt.userData.lod>0&&(mt.visible=ft<mt.userData.lod),(mt.material===z||mt.material===$)&&(mt.material=ft>360?$:z)});for(let{mesh:tt,chunk:q}of at){let st=j[q],ut=Math.max(st.x0-V,0,V-st.x1),J=Math.max(st.z0-O,0,O-st.z1);tt.visible=Math.hypot(ut,J)<700}}}};return Lt.update(0,0,{position:{x:-316,z:246}},1),Lt}function Gv(s,t){let e={value:0},n=Rn("hillhouse",{color:16777215,roughness:.85},{uniforms:{night:e},fragmentPars:"uniform float night; float paHouseGlow;",color:`
      {
        float h = pa_hash12(floor(vPaWorld.xz * 0.2));
        float win = step(0.5, fract(vPaWorld.y * 0.45)) * step(0.4, fract((vPaWorld.x + vPaWorld.z) * 0.35)) * step(0.3, abs(vPaNormalW.y - 1.0));
        paHouseGlow = win * step(h, 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05), win * 0.7);
      }`,emissive:"totalEmissiveRadiance += vec3(1.0, 0.7, 0.4) * paHouseGlow * night * 2.5;"}),i=t.filter(([h,l])=>si(h,l)>4),r=new Qt(new $t(1,1,1),n,i.length),o=new Dt,a=new de,c=new Tt;return i.forEach(([h,l],f)=>{let d=gt(8,16),u=gt(8,14),g=gt(4,8);a.setFromAxisAngle(new L(0,1,0),pt()*Math.PI),o.compose(new L(h,si(h,l)+g/2-1,l),a,new L(d,g,u)),r.setMatrixAt(f,o),r.setColorAt(f,c.set(le(Pn.stucco)))}),n.userData.night=e,r.castShadow=!1,r.receiveShadow=!0,s.add(r),r}function Wv(s,t,{x:e,y:n,z:i,face:r,text:o,color:a}){let c=Be(t,512,128,(d,u,g)=>{d.fillStyle="#0b0d10",d.fillRect(0,0,u,g),d.font='700 70px "Barlow Condensed", Impact, sans-serif',d.textAlign="center",d.textBaseline="middle",d.shadowColor=a,d.shadowBlur=18,d.fillStyle=a,d.fillText(o,u/2,g/2+3),d.shadowBlur=0,d.fillStyle="#ffffffcc",d.fillText(o,u/2,g/2+3),d.strokeStyle=a,d.lineWidth=5,d.strokeRect(8,8,u-16,g-16)}),h=new Ot({color:1118481,map:c,emissive:16777215,emissiveMap:c,emissiveIntensity:1,roughness:.5}),l=Math.min(12,3+o.length*.9),f=new Ut(new Ce(l,l/4),h);return f.position.set(e,n,i),f.rotation.y=r==="west"?-Math.PI/2:r==="east"?Math.PI/2:r==="north"?Math.PI:0,f.userData.flicker=xe(.25),s.add(f),f}var Eo=class s extends Ut{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new en;let n=this,i=e.color!==void 0?new Tt(e.color):new Tt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||s.ReflectorShader,h=e.multisample!==void 0?e.multisample:4,l=new Xn,f=new L,d=new L,u=new L,g=new Dt,x=new L(0,0,-1),m=new Ne,p=new L,_=new L,w=new Ne,M=new Dt,T=this.camera,C=new Ge(r,o,{samples:h,type:sn}),R=new ve({name:c.name!==void 0?c.name:"unspecified",uniforms:rn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});R.uniforms.tDiffuse.value=C.texture,R.uniforms.color.value=i,R.uniforms.textureMatrix.value=M,this.material=R,this.onBeforeRender=function(A,S,E){if(d.setFromMatrixPosition(n.matrixWorld),u.setFromMatrixPosition(E.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(d,u),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(d),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(u),_.subVectors(d,x),_.reflect(f).negate(),_.add(d),T.position.copy(p),T.up.set(0,1,0),T.up.applyMatrix4(g),T.up.reflect(f),T.lookAt(_),T.far=E.far,T.updateMatrixWorld(),T.projectionMatrix.copy(E.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(T.projectionMatrix),M.multiply(T.matrixWorldInverse),M.multiply(n.matrixWorld),l.setFromNormalAndCoplanarPoint(f,d),l.applyMatrix4(T.matrixWorldInverse),m.set(l.normal.x,l.normal.y,l.normal.z,l.constant);let z=T.projectionMatrix;w.x=(Math.sign(m.x)+z.elements[8])/z.elements[0],w.y=(Math.sign(m.y)+z.elements[9])/z.elements[5],w.z=-1,w.w=(1+z.elements[10])/z.elements[14],m.multiplyScalar(2/m.dot(w)),z.elements[2]=m.x,z.elements[6]=m.y,z.elements[10]=m.z+1-a,z.elements[14]=m.w,n.visible=!1;let k=A.getRenderTarget(),Z=A.xr.enabled,P=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(C),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(S,T),A.xr.enabled=Z,A.shadowMap.autoUpdate=P,A.setRenderTarget(k);let Y=E.viewport;Y!==void 0&&A.state.viewport(Y),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),n.material.dispose()}}};Eo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Xv=`
uniform mat4 textureMatrix;
uniform float time;
varying vec4 vMirror;
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  float offshore = smoothstep(${Bn.toFixed(1)}, ${(Bn-70).toFixed(1)}, wp.x);
  wp.y += (sin(wp.x * 0.045 + time * 0.9) * 0.22 + sin(wp.z * 0.031 - wp.x * 0.017 + time * 0.65) * 0.18) * offshore;
  vWorld = wp.xyz;
  vMirror = textureMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,qv=`
uniform sampler2D tDiffuse;
uniform float useMirror;
uniform float time;
uniform vec3 sunLight;
uniform vec3 ambient;
varying vec4 vMirror;
varying vec3 vWorld;
${vr}
${Wl}
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

  float shoreDist = ${Bn.toFixed(1)} - vWorld.x; // meters offshore
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
}`;function td(s,t){let i=new Ce(2400,3400,120,170),r=new Eo(i,{textureWidth:512,textureHeight:512,clipBias:.003,multisample:0}),o=r.material.uniforms,a={...rn.clone(Ft.fog),...Qe,fogSunColor:Qe.fogSunColor,fogSunDir:Qe.fogSunDir,fogHeightFalloff:Qe.fogHeightFalloff,tDiffuse:o.tDiffuse,textureMatrix:o.textureMatrix,useMirror:{value:1},time:{value:0},sunLight:{value:new Tt},ambient:{value:new Tt}};r.material.dispose(),r.material=new ve({uniforms:a,vertexShader:Xv,fragmentShader:qv,fog:!0,transparent:!0}),r.rotation.x=-Math.PI/2,r.position.set(Bn+8-2400/2,Bh,0),r.userData.noAO=!0,r.camera.layers.set(0),r.renderOrder=1,r.frustumCulled=!1,s.add(r);let c=new Dt,h=new hi(new Uint8Array([0,0,0,255]),1,1);h.needsUpdate=!0;let l=r.onBeforeRender,f=[];r.updateMatrixWorld(),r.geometry.computeBoundingBox();let d=r.geometry.boundingBox.clone().applyMatrix4(r.matrixWorld);d.expandByVector(new L(0,2,0));let u=new Wi,g=new Dt,x=function(...w){let M=w[2];if(!(M&&Cn.wetness.value<.02&&(g.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),u.setFromProjectionMatrix(g),!u.intersectsBox(d)))){Cn.mirrorTex.value=h,Cn.useMirror.value=0;for(let T of f)T.visible=!1;l.apply(this,w);for(let T of f)T.visible=!0;c.copy(r.matrixWorld).invert(),Cn.mirrorMatrix.value.copy(o.textureMatrix.value).multiply(c),Cn.mirrorTex.value=r.getRenderTarget().texture,Cn.useMirror.value=1}};r.onBeforeRender=x;let m=!0,p=Zv(s,t),_=$v(s);return{ocean:r,pier:p,mirrorHide:f,setReflections(w,M=.5){m=w,a.useMirror.value=w?1:0,r.onBeforeRender=w?x:()=>{},this.resize(M)},resize(w=.5){if(!m)return;let M=t.getDrawingBufferSize(new Ht);r.getRenderTarget().setSize(Math.max(256,Math.round(M.x*w)),Math.max(256,Math.round(M.y*w)))},update(w,M){a.time.value=w,m||(Cn.mirrorTex.value=h,Cn.useMirror.value=0),Cn.worldTime.value=w,a.sunLight.value.copy(M.sun.color).multiplyScalar(M.elevation>-1?M.sun.intensity:0),a.ambient.value.copy(M.hemi.color).multiplyScalar(M.hemi.intensity*.6),p.update(w,M.lampFactor),_.update(M.lampFactor)}}}function Yv(){return Rn("wood",{color:16777215,roughness:.8},{color:`
      {
        vec2 p = vPaWorld.xz;
        float plank = (abs(vPaNormalW.y) > 0.5 ? p.y : p.x) / 0.3;
        float fw = max(fwidth(plank), 0.002);
        float gap = pa_band(fract(plank), 0.0, 0.07, fw);
        float id = pa_hash12(vec2(floor(plank), 3.0));
        vec3 col = mix(vec3(0.3, 0.22, 0.15), vec3(0.42, 0.33, 0.23), id) * (0.82 + pa_noise(vec2(p.x * 3.0, plank)) * 0.25);
        diffuseColor.rgb = col * (1.0 - gap * 0.55);
      }`})}function Zv(s,t){let e=new Ie,{x0:n,x1:i,z:r,halfWidth:o,deckY:a}=ne,c=Yv(),h=n-i,l=new Ut(new $t(h,.6,o*2),c);l.position.set((n+i)/2,a-.3,r),l.castShadow=l.receiveShadow=!0,e.add(l);let f=ne.rampStart-n,d=Math.atan2(a-.16,f),u=new $t(Math.hypot(f,a),.6,o*2),g=new Ut(u,c);g.position.set((ne.rampStart+n)/2,(a+.16)/2-.3,r),g.rotation.z=-d,g.castShadow=g.receiveShadow=!0,e.add(g);let x=[];for(let $=ne.rampStart-8;$>=i;$-=9)for(let j of[-o+1,0,o-1])x.push([$,r+j]);let m=new fe(.32,.38,1,8),p=new Qt(m,new Ot({color:4930349,roughness:.9}),x.length),_=new Dt;x.forEach(([$,j],ht)=>{let Lt=(Li($,r)??a)-.5;_.compose(new L($,(-6+Lt)/2,j),new de,new L(1,Lt- -6,1)),p.setMatrixAt(ht,_)}),p.castShadow=!0,e.add(p),ne.piles=x.filter(([$])=>$>Bn-4);let w=new Ot({color:15262938,roughness:.5,metalness:.3});for(let $ of[-1,1])for(let j of[.55,1.05]){let ht=new Ut(new $t(h,.08,.08),w);ht.position.set((n+i)/2,a+j,r+$*(o-.1)),e.add(ht)}let M=Math.floor(h/3),T=new Qt(new $t(.1,1.1,.1),w,M*2);for(let $=0;$<M;$++)for(let[j,ht]of[-1,1].entries())_.makeTranslation(n-$*3,a+.55,r+ht*(o-.1)),T.setMatrixAt($*2+j,_);e.add(T);let C=new Ot({color:15327695,roughness:.75}),R=new Ot({color:3108730,roughness:.5,metalness:.2});for(let[$,j,ht,kt,Lt]of[[i+14,r+4.5,18,7,6],[i+36,r-5,12,6,5]]){let y=new Ut(new $t(ht,Lt,kt),C);y.position.set($,a+Lt/2,j),y.castShadow=y.receiveShadow=!0,e.add(y);let v=new Ut(new $t(ht+1,.4,kt+1),R);v.position.set($,a+Lt+.2,j),e.add(v)}let A=new Ot({color:1780275,roughness:.4,metalness:.6});for(let $ of[-1,1]){let j=new Ut(new $t(.6,8,.6),A);j.position.set(ne.rampStart-2,4.1,r+$*(o+.4)),j.castShadow=!0,e.add(j)}let S=Be(t,1024,160,($,j,ht)=>{$.fillStyle="#0d1418",$.fillRect(0,0,j,ht),$.textAlign="center",$.textBaseline="middle",$.font='800 96px "Barlow Condensed", Impact, sans-serif',$.shadowColor="#ff8a3d",$.shadowBlur=24,$.fillStyle="#ffb36b",$.fillText("VISTA PAC\xCDFICA PIER",j/2,ht/2+4),$.shadowBlur=0,$.fillStyle="#fff3e0",$.fillText("VISTA PAC\xCDFICA PIER",j/2,ht/2+4)}),E=new Ot({color:1118481,map:S,emissive:16777215,emissiveMap:S,emissiveIntensity:1}),D=new Ut(new $t(.4,2.6,o*2+1.4),A);D.position.set(ne.rampStart-2,8.6,r),e.add(D);for(let $ of[-1,1]){let j=new Ut(new Ce(o*2+1.2,2.4),E);j.position.set(ne.rampStart-2+$*.21,8.6,r),j.rotation.y=$*Math.PI/2,e.add(j)}let z=new Ie,k=19,Z=a+k+3.5,P=i+55,Y=r+.5;z.position.set(P,Z,Y);let W=new Ot({color:14278112,roughness:.35,metalness:.8}),H=new Xi(k,.22,8,96);for(let $ of[-1.3,1.3]){let j=new Ut(H,W);j.position.z=$,z.add(j);let ht=new Ut(new Xi(k*.55,.14,6,64),W);ht.position.z=$,z.add(ht)}let et=24,vt=new fe(.07,.07,k,4);vt.translate(0,k/2,0);for(let $=0;$<et;$++)for(let j of[-1.3,1.3]){let ht=new Ut(vt,W);ht.rotation.z=$/et*Math.PI*2,ht.position.z=j,z.add(ht)}let bt=new Ut(new fe(1.1,1.1,3.6,16),W);bt.rotation.x=Math.PI/2,z.add(bt),e.add(z);for(let $ of[-3.5,3.5])for(let j of[-1,1]){let ht=Math.hypot(9,Z-a),kt=new Ut(new fe(.28,.4,ht,8),W);kt.position.set(P+j*4.5,(Z+a)/2,Y+$),kt.rotation.z=j*Math.atan2(9,Z-a),kt.castShadow=!0,e.add(kt)}let Rt=16,te=new Ot({color:16777215,roughness:.4,metalness:.3}),Vt=new Qt(new $t(1.8,2,1.8),te,Rt),ae=["#e2523a","#f2c14e","#3aa0c8","#f7f2e6"],at=new Tt;for(let $=0;$<Rt;$++)Vt.setColorAt($,at.set(ae[$%4]));Vt.castShadow=!0,e.add(Vt);let ct=9,Ct=et*ct+96,nt=new qe({color:16777215}),dt=new Qt(new bn(.16,6,4),nt,Ct),St=[];for(let $=0;$<et;$++){let j=$/et*Math.PI*2;for(let ht=1;ht<=ct;ht++){let kt=ht/ct*k;St.push([-Math.sin(j)*kt,Math.cos(j)*kt,1.45,ht/ct,$])}}for(let $=0;$<96;$++){let j=$/96*Math.PI*2;St.push([Math.cos(j)*k,Math.sin(j)*k,1.5,1,$])}St.forEach(([$,j,ht],kt)=>{_.makeTranslation($,j,ht),dt.setMatrixAt(kt,_)}),z.add(dt),dt.layers.set(1);let zt=[];for(let $=n-6;$>i+4;$-=16)for(let j of[-1,1])zt.push([$,r+j*(o-.4)]);let U=new Qt(new fe(.06,.09,4.5,6),A,zt.length),Gt=new Ot({color:16773846,emissive:16765066,emissiveIntensity:0}),Nt=new Qt(new bn(.28,10,8),Gt,zt.length);zt.forEach(([$,j],ht)=>{_.makeTranslation($,a+2.25,j),U.setMatrixAt(ht,_),_.makeTranslation($,a+4.6,j),Nt.setMatrixAt(ht,_)}),e.add(U,Nt),Cs(e,{exclude:[z]}),s.add(e);let rt=new Tt,it=new $e;return{lamps:zt.map(([$,j])=>[$,a+4.6,j]),update($,j){let ht=$*.06;z.rotation.z=ht;for(let Lt=0;Lt<Rt;Lt++){let y=ht+Lt/Rt*Math.PI*2;it.position.set(P+Math.cos(y)*k,Z+Math.sin(y)*k-1.4,Y),it.updateMatrix(),Vt.setMatrixAt(Lt,it.matrix)}Vt.instanceMatrix.needsUpdate=!0;let kt=.25+j*5.5;for(let Lt=0;Lt<St.length;Lt++){let[,,,y,v]=St[Lt],I=($*.08+y*.35+v*.013)%1,F=.55+.45*Math.sin($*4-y*8+v*.5);rt.setHSL(I,.85,.55),rt.multiplyScalar(kt*F),dt.setColorAt(Lt,rt)}dt.instanceColor.needsUpdate=!0,Gt.emissiveIntensity=j*3,E.emissiveIntensity=.3+j*1.8}}}function $v(s){let t=new Ie,e=new Dt,n=new Ot({color:6269385,roughness:.6}),i=new Ot({color:15854296,roughness:.6}),r=new Ot({color:14175290,roughness:.6});for(let u=-520;u<=520;u+=130){if(Math.abs(u-ne.z)<40)continue;let g=new Ie,x=new Ut(new $t(3.2,2.4,3.2),n);x.position.y=3.2;let m=new Ut(new ui(2.7,1.1,4),r);m.position.y=4.95,m.rotation.y=Math.PI/4;let p=new Ut(new $t(4.4,.18,4.4),i);p.position.y=1.95;let _=new Ut(new $t(.1,.9,2.4),new Ot({color:1911347,roughness:.1,metalness:.6}));_.position.set(-1.62,3.5,0),g.add(x,m,p,_);for(let T of[-1.8,1.8])for(let C of[-1.8,1.8]){let R=new Ut(new $t(.18,2.4,.18),i);R.position.set(T,.8,C),g.add(R)}let w=new Ut(new $t(4.5,.12,1.4),i);w.position.set(3.6,1,0),w.rotation.z=-.42,g.add(w);let M=-388;g.position.set(M,-.02-(je-M)*.0105,u),g.traverse(T=>{T.isMesh&&(T.castShadow=!0,T.receiveShadow=!0)}),t.add(g)}let o=["#e8553a","#f0c24b","#3b8fc2","#f3efe4","#45a37f"],a=40,c=new Qt(new ui(1.4,.55,12,1,!0),new Ot({color:16777215,roughness:.8,side:nn}),a),h=new Qt(new fe(.03,.03,2.3,4),i,a),l=new Qt(new $t(.9,.02,1.9),new Ot({color:16777215,roughness:.9}),a),f=new Tt,d=new de;for(let u=0;u<a;u++){let g=gt(-520,520);Math.abs(g-ne.z)<14&&(g+=30);let x=gt(-398,-366),m=-.02-(je-x)*.0105;d.setFromEuler(new Ze(gt(-.12,.12),0,gt(-.12,.12))),e.compose(new L(x,m+2.3,g),d,new L(1,1,1)),c.setMatrixAt(u,e),e.compose(new L(x,m+1.15,g),d,new L(1,1,1)),h.setMatrixAt(u,e),c.setColorAt(u,f.set(le(o))),d.setFromAxisAngle(new L(0,1,0),gt(0,Math.PI)),e.compose(new L(x+gt(-1.5,1.5),m+.02,g+gt(-1.5,1.5)),d,new L(1,1,1)),l.setMatrixAt(u,e),l.setColorAt(u,f.set(le(o)))}c.castShadow=h.castShadow=!0,l.receiveShadow=!0,t.add(c,h,l);for(let u of[c,h,l])u.layers.set(1);return Cs(t),s.add(t),{update(){}}}var Vh={value:new Tt};function Kv(s){return Be(s,256,1024,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<150;i++){let r=i/150,o=n*(.04+r*.94),a=e*.47*Math.sin(Math.PI*Math.pow(r,.75))*(.85+pt()*.3),c=70+pt()*50,h=40+pt()*30,l=25+pt()*20;t.strokeStyle=`rgb(${h},${c},${l})`,t.lineWidth=3.2+pt()*2.2;for(let f of[-1,1])t.beginPath(),t.moveTo(e/2,o),t.quadraticCurveTo(e/2+f*a*.5,o-a*.25,e/2+f*a,o-a*.55+pt()*8),t.stroke()}t.strokeStyle="#5b5a34",t.lineWidth=6,t.beginPath(),t.moveTo(e/2,n*.02),t.lineTo(e/2,n),t.stroke()})}function Jv(s){return Be(s,512,512,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<46;i++){let r=pt()*Math.PI*2,o=Math.sqrt(pt())*e*.36,a=e/2+Math.cos(r)*o,c=n/2+Math.sin(r)*o,h=r+(pt()-.5)*1.2,l=40+pt()*50,f=.55+.45*(o/(e*.36));t.strokeStyle=`rgba(60,48,30,${.8})`,t.lineWidth=2,t.beginPath(),t.moveTo(a,c),t.lineTo(a+Math.cos(h)*l,c+Math.sin(h)*l),t.stroke();for(let d=0;d<16;d++){let u=pt(),g=a+Math.cos(h)*l*u+(pt()-.5)*18,x=c+Math.sin(h)*l*u+(pt()-.5)*18,m=(70+pt()*70)*f,p=(28+pt()*32)*f,_=(18+pt()*26)*f;t.fillStyle=`rgb(${p|0},${m|0},${_|0})`,t.save(),t.translate(g,x),t.rotate(h+(pt()-.5)*2.2),t.beginPath(),t.ellipse(0,0,9+pt()*7,3.5+pt()*2.5,0,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(190,210,140,${.25*f})`,t.lineWidth=1,t.beginPath(),t.moveTo(-8,0),t.lineTo(8,0),t.stroke(),t.restore()}}})}function Qv(s,t,e,n,i){let o=[],a=[],c=[],h=new L(Math.cos(s),0,Math.sin(s)),l=new L(-h.z,0,h.x),f=new L;for(let u=0;u<=7;u++){let g=u/7,x=t-i*g*g;u>0&&(f=f.clone().addScaledVector(h,Math.cos(x)*e/7).add(new L(0,Math.sin(x)*e/7,0)));let m=n*Math.sin(Math.PI*Math.min(1,.15+g*.95))*.5+.05,p=.18*m;for(let[_,w]of[[-1,0],[0,.5],[1,1]]){let M=f.clone().addScaledVector(l,_*m);M.y+=_===0?p:-p*.2,o.push(M.x,M.y,M.z),a.push(w,1-g)}if(u>0){let _=(u-1)*3,w=u*3;c.push(_,w,_+1,_+1,w,w+1,_+1,w+1,_+2,_+2,w+1,w+2)}}let d=new Ee;return d.setAttribute("position",new se(o,3)),d.setAttribute("uv",new se(a,2)),d.setIndex(c),d.computeVertexNormals(),d}function jv(s,t,e){let n=[];for(let i=0;i<s;i++){let r=i%3,o=i/s*Math.PI*2+pt()*.3,a=[.95,.45,.05][r]+pt()*.2,c=[1.3,1.6,1.4][r];n.push(Qv(o,a,t*(r===0?.8:1)*gt(.88,1.1),e,c))}return De(n)}function ty(s){let t=new fe(.62,1,1,9,12,!0);t.translate(0,.5,0);let e=t.attributes.position;for(let n=0;n<e.count;n++){let i=e.getY(n);e.setX(n,e.getX(n)+s*i*i)}return t.computeVertexNormals(),t}function ed(s,t,e={}){let n=Rn(t,{map:s,alphaTest:.42,side:nn,roughness:.72,metalness:0,...e},{uniforms:{worldTime:Qe.worldTime,leafSun:Vh,skySunDir:Qe.skySunDir},vertexPars:"uniform float worldTime;",vertex:"",fragmentPars:"uniform vec3 leafSun; uniform vec3 skySunDir;",color:"diffuseColor.rgb *= 0.8 + 0.4 * pa_noise(vPaWorld.xz * 0.7 + vPaWorld.y);",emissive:`
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
      }`)},n}function ey(){return Rn("palmtrunk",{color:16777215,roughness:.9},{color:`
      {
        float rings = pa_band(fract(vPaWorld.y * 3.2 + pa_noise(vPaWorld.xz * 3.0) * 0.4), 0.0, 0.18, fwidth(vPaWorld.y * 3.2));
        vec3 bark = mix(vec3(0.33, 0.29, 0.24), vec3(0.45, 0.4, 0.33), pa_noise(vec2(atan(vPaNormalW.z, vPaNormalW.x) * 4.0, vPaWorld.y * 0.8)));
        diffuseColor.rgb = bark * (1.0 - rings * 0.3);
      }`})}function Hh({lobes:s,cards:t,spread:e,crownY:n,lobeR:i,trunkH:r,columnar:o=!1}){let a=[],c=[],h=new fe(.2,.34,r+.4,7);h.translate(0,(r+.4)/2,0),c.push(h);let l=[];for(let g=0;g<s;g++){if(o){let p=g/Math.max(1,s-1);l.push([new L((pt()-.5)*.3,n+p*6.4,(pt()-.5)*.3),i*(1.05-p*.55)]);continue}if(g===s-1){l.push([new L(0,n+i*.75,0),i*1.05]);continue}let x=g/(s-1)*Math.PI*2+pt()*.6,m=e*gt(.75,1.1);l.push([new L(Math.cos(x)*m,n+gt(-.6,.5),Math.sin(x)*m),i*gt(.85,1.1)])}let f=new L(0,r*.92,0),d=new L,u=new L;for(let[g,x]of l){if(!o){let m=g.clone().sub(f),p=m.length()*.85,_=new fe(.07,.14,p,5);_.translate(0,p/2,0),_.applyQuaternion(new de().setFromUnitVectors(new L(0,1,0),m.normalize())),_.translate(f.x,f.y,f.z),c.push(_)}for(let m=0;m<t;m++){let p=new Ce(2.1,2.1);d.set(pt()-.5,pt()-.35,pt()-.5).normalize();let _=Math.cbrt(pt()),w=g.clone().addScaledVector(d,_*x*.85),M=d.clone().add(new L(pt()-.5,pt()-.5,pt()-.5).multiplyScalar(.9)).normalize();p.lookAt(M),p.rotateZ(pt()*6.28),p.translate(w.x,w.y,w.z);let T=p.attributes.normal,C=p.attributes.position,R=new Float32Array(C.count*3);for(let A=0;A<C.count;A++){u.set(C.getX(A),C.getY(A),C.getZ(A));let S=u.clone().sub(g).normalize(),E=u.clone().sub(new L(0,n,0)).normalize();S.multiplyScalar(.7).addScaledVector(E,.3).normalize(),T.setXYZ(A,S.x,S.y,S.z);let D=_e.clamp(.5+_*.4+S.y*.15,.35,1);R[A*3]=R[A*3+1]=R[A*3+2]=D}p.setAttribute("color",new Xe(R,3)),a.push(p)}}return{canopy:De(a),wood:De(c.map(g=>g.index?g.toNonIndexed():g))}}function nd(s,t){let e=[],n=Kv(t),i=Jv(t),r=ed(n,"frond"),o=ed(i,"canopy",{vertexColors:!0}),a=ey(),c=new Ot({color:6048309,roughness:1}),h=[],l=[],f=[];for(let R=-545;R<=545;R+=18)Math.abs(R-ne.z)<14||(h.push([(Ye.to+je)/2+gt(-1.5,1.5),R+gt(-2,2)]),xe(.3)&&l.push([je-gt(6,14),R+gt(-4,4)]));for(let R of[-320,0])for(let A=-300;A<330;A+=28)if(!Kt.some(S=>Math.abs(A-S)<ee+6))for(let S of[-1,1])h.push([A+gt(-1,1),R+S*(ee+1.6)]);for(let R=-470;R<480;R+=32)Jt.some(A=>Math.abs(R-A)<ee+6)||h.push([-320+ee+1.6,R+gt(-1,1)]);let d=As.map(R=>Rs(R));for(let R of[-160,0])for(let A=-506;A<520;A+=34)if(!Jt.some(S=>Math.abs(A-S)<ee+7))for(let S of[-1,1]){let E=R+S*(ee+2.7),D=A+(S>0?17:0);d.some(([z,k])=>Math.abs(z-E)<4&&Math.abs(k-D)<6)||Jt.some(z=>Math.abs(D-z)<ee+7)||h.push([E+gt(-.3,.3),D+gt(-1,1)])}for(let[R,A]of[[-80,80],[240,400]]){let S=Zn/2-10;for(let E=0;E<26;E++){let D=R+gt(-S,S),z=A+gt(-S,S);Math.abs(D-R)<9&&Math.abs(z-A)<9||(xe(.4)?l.push([D,z]):f.push([D,z,gt(.8,1.3),0]))}}for(let R of[0,160,320])for(let A=110;A<470;A+=24)if(!Jt.some(S=>Math.abs(A-S)<ee+6))for(let S of[-1,1])R===320&&S>0||f.push([R+S*(ee+1.8),A,gt(.6,.85),0]);for(let R=0;R<520;R++){let A=pt(),S=A<.56?gt(380,1100):gt(-300,700),E=A<.56?gt(-1100,1100):A<.78?gt(-1e3,-575):gt(575,1e3),D=si(S,E);D<2||f.push([S,E,gt(.7,1.6),D])}let u=new Dt,g=new de,x=new L,m=new L,p=new L(0,1,0);function _(R,{heightRange:A,thickness:S,bend:E,crown:D,skirt:z}){let k=ty(E),Z=jv(D.count,D.length,D.width),P=new Qt(k,a,R.length),Y=new Qt(Z,r,R.length),W=z?new Qt(new fe(.9,.55,1,8),c,R.length):null;R.forEach(([H,et],vt)=>{let bt=gt(...A);g.setFromAxisAngle(p,pt()*Math.PI*2),m.set(S,bt,S),x.set(H,-.1,et),u.compose(x,g,m),P.setMatrixAt(vt,u);let Rt=new L(E,1,0).applyMatrix4(u),te=gt(.85,1.15);g.setFromAxisAngle(p,pt()*Math.PI*2),u.compose(Rt,g,m.set(te,te,te)),Y.setMatrixAt(vt,u),W&&(u.compose(Rt.clone().add(new L(0,-1.6,0)),g,m.set(1,2.6,1)),W.setMatrixAt(vt,u)),e.push({x:H,z:et,r:.45})}),P.castShadow=Y.castShadow=!0,P.receiveShadow=Y.receiveShadow=!0,s.add(P,Y),W&&(W.castShadow=!0,s.add(W))}_(h,{heightRange:[17,26],thickness:.36,bend:4,crown:{count:15,length:4.2,width:1.5},skirt:!0}),_(l,{heightRange:[6,10],thickness:.75,bend:.8,crown:{count:24,length:6.2,width:2.2},skirt:!1});let w={broad:Hh({lobes:6,cards:22,spread:2.1,crownY:5.6,lobeR:1.85,trunkH:4.2}),cypress:Hh({lobes:5,cards:14,spread:.25,crownY:2.4,lobeR:1.05,trunkH:1.6,columnar:!0}),far:Hh({lobes:3,cards:14,spread:1.7,crownY:5.4,lobeR:2.1,trunkH:4.2})},M={broad:[],cypress:[],far:[]};for(let R of f){let[A,S,E,D]=R;D>0?M[xe(.35)?"cypress":"far"].push(R):M.broad.push(R)}let T=new Ot({color:4865328,roughness:.95}),C=new Tt;for(let[R,A]of Object.entries(M)){let{canopy:S,wood:E}=w[R],D=new Qt(S,o,A.length),z=new Qt(E,T,A.length);A.forEach(([k,Z,P,Y],W)=>{g.setFromAxisAngle(p,pt()*Math.PI*2);let H=R==="cypress"?gt(1.1,1.6):gt(.85,1.2);u.compose(x.set(k,Y-.1,Z),g,m.set(P,P*H,P)),D.setMatrixAt(W,u),z.setMatrixAt(W,u),R==="broad"&&xe(.22)?C.setHSL(gt(.72,.78),gt(.35,.5),gt(.62,.72)):R==="cypress"?C.setHSL(gt(.26,.32),gt(.3,.45),gt(.32,.42)):C.setHSL(gt(.2,.3),gt(.35,.6),gt(.45,.62)),D.setColorAt(W,C),Y===0&&e.push({x:k,z:Z,r:.5})}),D.castShadow=z.castShadow=R!=="far",D.receiveShadow=!0,R!=="broad"&&(D.layers.set(1),z.layers.set(1)),s.add(D,z)}return{trunkColliders:e}}var $l=28;function ts(s,t){let e=(t%$l+$l)%$l,n=s===0?e:(e+14)%$l;return n<10?2:n<13?1:0}function ny(s){return Be(s,128,128,(t,e,n)=>{let i=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(.7,"rgba(255,255,255,0.15)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,e,n)})}var iy=`
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
}`,sy=`
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
}`;function wo(s,t=0){return new ve({uniforms:{color:{value:new Tt(s)},intensity:{value:t}},vertexShader:iy,fragmentShader:sy,transparent:!0,depthWrite:!1,blending:Tn,side:nn})}function id(s,t,e=[],n=null){let i=new Dt,r=new de,o=new L,a=new L(1,1,1),c=new L(0,1,0),h=new Ot({color:4146760,roughness:.45,metalness:.7}),l=[],f=ee+7;for(let rt of Kt)for(let it=-520;it<=520;it+=38)if(!Jt.some($=>Math.abs(it-$)<f))for(let $ of[-1,1])rt===Kt[0]&&$<0||l.push([rt+$*(ee+.9),it+($>0?19:0),-$,0]);for(let rt of Jt)for(let it=-300;it<=320;it+=38)if(!Kt.some($=>Math.abs(it-$)<f))for(let $ of[-1,1])l.push([it+($>0?19:0),rt+$*(ee+.9),0,-$]);let d=[];for(let rt=-540;rt<=540;rt+=24)Math.abs(rt-ne.z)>12&&d.push([(Ye.from+Ye.to)/2,rt]);let u=new fe(.09,.14,9,8);u.translate(0,4.5,0);let g=new $t(.1,.1,2.6);g.translate(0,0,1.3);let x=new $t(.42,.16,.9),m=new Qt(u,h,l.length),p=new Qt(g,h,l.length),_=new Ot({color:7829367,emissive:16766624,emissiveIntensity:0,roughness:.3}),w=new Qt(x,_,l.length),M=[];l.forEach(([rt,it,$,j],ht)=>{let kt=Math.atan2($,j);r.setFromAxisAngle(c,kt),i.compose(o.set(rt,jt,it),r,a),m.setMatrixAt(ht,i),i.compose(o.set(rt,jt+8.85,it),r,a),p.setMatrixAt(ht,i),i.compose(o.set(rt+$*2.5,jt+8.78,it+j*2.5),r,a),w.setMatrixAt(ht,i),M.push([rt+$*2.6,it+j*2.6,13,1])}),m.castShadow=p.castShadow=!0;for(let rt of[m,p,w])s.add(rt);let T=new Qt(new fe(.07,.1,4.2,8),h,d.length),C=new Ot({color:16774888,emissive:16764810,emissiveIntensity:0,roughness:.2}),R=new Qt(new bn(.3,12,8),C,d.length);d.forEach(([rt,it],$)=>{i.makeTranslation(rt,jt+2.1,it),T.setMatrixAt($,i),i.makeTranslation(rt,jt+4.4,it),R.setMatrixAt($,i),M.push([rt,it,8,.8])});for(let[rt,it,$]of e)M.push([rt,$,7,.7,it-4.6]);s.add(T,R);let A=new qe({map:ny(t),color:16757866,transparent:!0,depthWrite:!1,blending:Tn,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2,fog:!0}),S=new Ce(1,1);S.rotateX(-Math.PI/2);let E=new Qt(S,A,M.length);M.forEach(([rt,it,$,j,ht=0],kt)=>{i.compose(o.set(rt,ht+.04+(j<1?jt:0),it),r.identity(),a.set($,1,$)),E.setMatrixAt(kt,i)}),E.renderOrder=2,E.userData.noAO=!0,E.layers.set(1),a.set(1,1,1),s.add(E);let D=new fe(.25,3.6,8.6,18,1,!0);D.translate(0,-4.3,0);let z=wo(16757866),k=new Qt(D,z,l.length);l.forEach(([rt,it,$,j],ht)=>{i.makeTranslation(rt+$*2.5,jt+8.7,it+j*2.5),k.setMatrixAt(ht,i)}),k.userData.noAO=!0,k.layers.set(1),k.renderOrder=3,s.add(k);let Z=[],P=[];for(let rt of Kt)for(let it of Jt){let $=[[rt+6,it-16,0,1,0],[rt-6,it+16,0,-1,0],[rt+16,it+6,-1,0,1],[rt-16,it-6,1,0,1]];for(let[j,ht,kt,Lt,y]of $){if(y===0&&(Lt>0&&it===Jt[Jt.length-1]||Lt<0&&it===Jt[0])||y===1&&(kt<0&&rt===Kt[0]||kt>0&&rt===Kt[Kt.length-1]))continue;Z.push([j,ht,kt,Lt,y]);let v=y===0?rt+14.2*Math.sign(j-rt):j,I=y===0?ht:it+14.2*Math.sign(ht-it);P.push([v,I,j,ht])}}let Y=new fe(.16,.2,7,8);Y.translate(0,3.5,0);let W=new Qt(Y,h,P.length),H=new Qt(new $t(1,.16,.16),h,P.length);P.forEach(([rt,it,$,j],ht)=>{i.makeTranslation(rt,jt,it),W.setMatrixAt(ht,i);let kt=Math.hypot($-rt,j-it)+1;r.setFromAxisAngle(c,Math.atan2(-(j-it),$-rt)),i.compose(o.set((rt+$)/2,6.8,(it+j)/2),r,a.set(kt,1,1)),H.setMatrixAt(ht,i),a.set(1,1,1)}),W.castShadow=H.castShadow=!0,s.add(W,H);let et=new Ot({color:1909284,roughness:.5,metalness:.4}),vt=new Qt(new $t(.5,1.4,.36),et,Z.length),bt=new fe(.14,.14,.06,12);bt.rotateX(Math.PI/2);let Rt=new Qt(bt,new qe({color:16777215}),Z.length*3),te=[];Z.forEach(([rt,it,$,j,ht],kt)=>{r.setFromAxisAngle(c,Math.atan2($,j)),i.compose(o.set(rt,6.1,it),r,a),vt.setMatrixAt(kt,i);for(let Lt=0;Lt<3;Lt++)i.compose(o.set(rt+$*.2,6.55-Lt*.43,it+j*.2),r,a),Rt.setMatrixAt(kt*3+Lt,i),te.push([ht,Lt])}),s.add(vt,Rt);let Vt=[new Tt(7,.35,.2),new Tt(7,3.6,.3),new Tt(.3,6,2.2)],ae=new Tt(.05,.05,.05);n&&(l.forEach(([rt,it],$)=>n.add([{mesh:m,index:$},{mesh:p,index:$},{mesh:w,index:$}],[{mesh:E,index:$},{mesh:k,index:$}],{type:"lamp",x:rt,z:it,y:jt,r:.18,mass:.22,solid:6,kind:"topple",sparks:!0})),d.forEach(([rt,it],$)=>n.add([{mesh:T,index:$},{mesh:R,index:$}],[{mesh:E,index:l.length+$}],{type:"lamp",x:rt,z:it,y:jt,r:.14,mass:.12,solid:4,kind:"topple",sparks:!0})));let at=P.map(([rt,it])=>({x:rt,z:it,r:.3})),ct=[["SURF FIZZ","TASTE THE SWELL","#ff6b4a","#14303d"],["HORIZON AIR","FLY THE COAST","#ffd36b","#1a2a52"],["VISTA BANK","YOUR MONEY. YOUR VIEW.","#9fe3d3","#10302c"],["NEON NIGHTS","THE PIER \xB7 FRIDAYS","#ff63c3","#1d0f2e"],["CALDERA GT","BUILT FOR THE COAST ROAD","#ff7a3d","#141a20"],["SOLSTICE","SUNSCREEN \xB7 SPF 50","#ffe2a8","#c2542e"]],Ct=[[-215,-432,-Math.PI/2],[100,212,Math.PI],[-136,30,-Math.PI/2],[270,362,Math.PI],[345,-200,-Math.PI/2],[345,250,-Math.PI/2]],nt=[],dt=new Ie;Ct.forEach(([rt,it,$],j)=>{let[ht,kt,Lt,y]=ct[j%ct.length],v=Be(t,1024,384,(tt,q,st)=>{let ut=tt.createLinearGradient(0,0,q,st);ut.addColorStop(0,y),ut.addColorStop(1,"#000000"),tt.fillStyle=ut,tt.fillRect(0,0,q,st),tt.fillStyle=Lt,tt.beginPath(),tt.arc(q*.82,st*.5,st*.36,0,Math.PI*2),tt.fill(),tt.fillStyle="#fff6e6",tt.font='800 120px "Barlow Condensed", Impact, sans-serif',tt.fillText(ht,48,170),tt.fillStyle=Lt,tt.font='600 46px "Barlow", Arial, sans-serif',tt.fillText(kt,52,250),tt.fillStyle="#ffffff40",tt.fillRect(52,290,300,6)}),I=new Ie,F=new Ut(new Ce(14,5.25),new Ot({map:v,emissive:16777215,emissiveMap:v,emissiveIntensity:0,roughness:.55}));F.position.y=14;let V=new Ut(new $t(14.4,5.6,.3),h);V.position.set(0,14,-.2);let O=new Ut(new fe(.35,.45,11.5,10),h);O.position.y=5.75,I.add(F,V,O),I.position.set(rt,jt,it),I.rotation.y=$,at.push({x:rt,z:it,r:.5}),I.traverse(tt=>{tt.isMesh&&(tt.castShadow=!0)}),dt.add(I),nt.push(F.material)}),Cs(dt),s.add(dt);let St="VISTA PAC\xCDFICA",zt=new Ot({color:16052714,roughness:.7,side:nn,alphaTest:.5}),U=new Map,Gt=new Ie,Nt=-270;for(let rt of St){if(rt===" "){Nt+=22;continue}U.has(rt)||U.set(rt,Be(t,128,160,(ht,kt,Lt)=>{ht.clearRect(0,0,kt,Lt),ht.fillStyle="#fff",ht.font='800 168px "Barlow Condensed", Impact, sans-serif',ht.textAlign="center",ht.textBaseline="alphabetic",ht.fillText(rt,kt/2,Lt-8)}));let it=zt.clone();it.map=U.get(rt);let $=new Ut(new Ce(15,19),it),j=600;$.position.set(j,Math.min(si(j,Nt-6),si(j,Nt+6))+8.5,Nt),$.rotation.y=-Math.PI/2,$.castShadow=!0,Gt.add($),Nt+=17}return s.add(Gt),{lamps:l,circles:at,update(rt,it){_.emissiveIntensity=it*4,C.emissiveIntensity=it*2.6,A.opacity=it*.7,z.uniforms.intensity.value=it*.09;for(let j of nt)j.emissiveIntensity=.05+it*1.1;let $=[ts(0,rt),ts(1,rt)];for(let j=0;j<te.length;j++){let[ht,kt]=te[j],Lt=kt===0&&$[ht]===0||kt===1&&$[ht]===1||kt===2&&$[ht]===2;Rt.setColorAt(j,Lt?Vt[kt]:ae)}Rt.instanceColor.needsUpdate=!0}}}var Ae=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e],a=(t-n)/(r-n);return a=a*a*(3-2*a),i+(o-i)*a}return s[s.length-1][1]},ry={coupe:{length:4.62,wheelR:.355,wheelW:.27,track:.83,wheels:[.185,.79],body:{top:[[0,.6],[.05,.7],[.18,.8],[.33,.9],[.78,.96],[.92,.95],[1,.82]],bottom:[[0,.33],[.06,.25],[.94,.26],[1,.38]],width:[[0,.76],[.07,.93],[.3,.97],[.74,1],[.93,.96],[1,.84]],exp:3.4,taper:.1},cabin:{from:.31,to:.9,top:[[0,.88],[.3,1.27],[.52,1.29],[.72,1.14],[1,.93]],width:[[0,.8],[.35,.79],[.75,.76],[1,.66]],taper:.3,exp:2.6,roof:[.33,.64]},spoiler:!0,exhaust:[-.42,.42]},muscle:{length:4.92,wheelR:.37,wheelW:.3,track:.86,wheels:[.17,.8],body:{top:[[0,.72],[.04,.84],[.12,.89],[.4,.93],[.86,.96],[.96,.95],[1,.84]],bottom:[[0,.32],[.05,.26],[.95,.27],[1,.36]],width:[[0,.88],[.05,.96],[.5,.98],[.95,.97],[1,.9]],exp:5.2,taper:.05},cabin:{from:.43,to:.87,top:[[0,.91],[.3,1.31],[.55,1.32],[.86,1.08],[1,.96]],width:[[0,.8],[.5,.8],[1,.73]],taper:.22,exp:3.2,roof:[.3,.6]},scoop:!0,ducktail:!0,exhaust:[-.56,-.44,.44,.56]},super:{length:4.56,wheelR:.36,wheelW:.32,track:.88,wheels:[.2,.8],body:{top:[[0,.42],[.06,.55],[.2,.66],[.35,.73],[.7,.86],[.9,.88],[1,.8]],bottom:[[0,.16],[.05,.13],[.95,.15],[1,.26]],width:[[0,.8],[.08,.95],[.3,.97],[.7,1.03],[.9,1],[1,.9]],exp:3.6,taper:.14},cabin:{from:.27,to:.72,top:[[0,.62],[.35,1.13],[.55,1.14],[.8,1],[1,.86]],width:[[0,.78],[.4,.74],[1,.62]],taper:.32,exp:2.4,roof:[.38,.62]},wing:!0,intakes:!0,exhaust:[-.13,.13]},sedan:{length:4.85,wheelR:.34,wheelW:.24,track:.81,wheels:[.2,.77],body:{top:[[0,.66],[.06,.76],[.25,.86],[.32,.92],[.8,.98],[.94,.96],[1,.86]],bottom:[[0,.36],[.07,.3],[.93,.3],[1,.4]],width:[[0,.78],[.07,.92],[.5,.95],[.93,.93],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.82,top:[[0,.92],[.27,1.43],[.68,1.43],[.88,1.2],[1,.97]],width:[[0,.8],[.4,.82],[1,.76]],taper:.24,exp:2.8,roof:[.28,.72]}},suv:{length:4.75,wheelR:.39,wheelW:.27,track:.85,wheels:[.18,.79],body:{top:[[0,.82],[.06,.97],[.26,1.06],[.33,1.08],[.95,1.1],[1,1.02]],bottom:[[0,.44],[.07,.36],[.93,.37],[1,.46]],width:[[0,.82],[.07,.95],[.5,.98],[.95,.96],[1,.9]],exp:4.5,taper:.06},cabin:{from:.28,to:.98,top:[[0,1.05],[.2,1.72],[.85,1.74],[.97,1.62],[1,1.1]],width:[[0,.86],[.5,.88],[1,.84]],taper:.15,exp:4,roof:[.2,.96]},rails:!0},hatch:{length:4.05,wheelR:.32,wheelW:.22,track:.78,wheels:[.19,.8],body:{top:[[0,.66],[.07,.78],[.28,.88],[.34,.92],[.95,.98],[1,.9]],bottom:[[0,.36],[.08,.3],[.94,.31],[1,.42]],width:[[0,.76],[.08,.89],[.5,.92],[.94,.9],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.97,top:[[0,.92],[.3,1.46],[.82,1.45],[.96,1.32],[1,.98]],width:[[0,.79],[.5,.8],[1,.76]],taper:.2,exp:3.2,roof:[.3,.92]}},pickup:{length:5.4,wheelR:.41,wheelW:.28,track:.88,wheels:[.17,.75],body:{top:[[0,.92],[.05,1.06],[.24,1.14],[.3,1.16],[1,1.16]],bottom:[[0,.5],[.06,.42],[.95,.44],[1,.52]],width:[[0,.86],[.06,.98],[.95,1],[1,.98]],exp:5,taper:.04},cabin:{from:.29,to:.58,top:[[0,1.12],[.3,1.86],[.92,1.88],[1,1.16]],width:[[0,.9],[1,.9]],taper:.12,exp:4.5,roof:[.28,.94]},bed:!0}};function Gh(s,t,e,n,i,r,o,a,c=null){let h=(t+e)/2,l=(e-t)/2,f=2/n;for(let d=0;d<r;d++){let u=c?c[0]+(c[1]-c[0])*(d/(r-1)):d/r*Math.PI*2,g=Math.cos(u),x=Math.sin(u),m=s*Math.sign(g)*Math.pow(Math.abs(g),f),p=h+l*Math.sign(x)*Math.pow(Math.abs(x),f);m*=1-i*Math.max(0,x),o.push(m,p,a)}}function Wh(s,t,{closed:e=!0,caps:n=!0}={}){let i=[],r=[];for(let l of s)i.push(...l);let o=s.length,a=t,c=e?a:a-1;for(let l=0;l<o-1;l++)for(let f=0;f<c;f++){let d=(f+1)%a,u=l*a+f,g=l*a+d,x=(l+1)*a+f,m=(l+1)*a+d;r.push(u,g,x,g,m,x)}if(n&&e)for(let[l,f]of[[0,!0],[o-1,!1]]){let d=i.length/3,u=0,g=0,x=0;for(let p=0;p<a;p++){let _=(l*a+p)*3;u+=i[_],g+=i[_+1],x+=i[_+2]}for(let p=0;p<a;p++){let _=(l*a+p)*3;i.push(i[_],i[_+1],i[_+2])}i.push(u/a,g/a,x/a);let m=d+a;for(let p=0;p<a;p++){let _=(p+1)%a;f?r.push(m,d+_,d+p):r.push(m,d+p,d+_)}}let h=new Ee;return h.setAttribute("position",new se(i,3)),h.setIndex(r),h.computeVertexNormals(),h.setAttribute("uv",new se(new Float32Array(i.length/3*2),2)),h}function Fe(s,t,e,n,i,r,o=0,a=0,c=0){let h=new $t(s,t,e);return(o||a||c)&&h.applyMatrix4(new Dt().makeRotationFromEuler(new Ze(o,a,c))),h.translate(n,i,r),h}function oy(s,t,e,n,i,r,o,a="y"){let c=new fe(s,t,e,n);return a==="x"&&c.rotateZ(Math.PI/2),a==="z"&&c.rotateX(Math.PI/2),c.translate(i,r,o),c}function sd(s,t,e){let n=new L().subVectors(t,s),i=n.length(),r=new fe(e,e,i,6);return r.translate(0,i/2,0),r.applyQuaternion(new de().setFromUnitVectors(new L(0,1,0),n.normalize())),r.translate(s.x,s.y,s.z),r}var Xh=new Map,ay=["coupe","muscle","super"];function Kl(s){if(Xh.has(s))return Xh.get(s);let t=ry[s],e=t.length,n=-e/2,i=W=>n+W*e,r=t.wheels.map(i),o=t.wheelR+.07,a=ay.includes(s),c=a?40:26,h=a?64:40,l=[];for(let W=0;W<=h;W++){let H=W/h,et=i(H),vt=Ae(t.body.bottom,H);for(let te of r){let Vt=et-te;Math.abs(Vt)<o&&(vt=Math.max(vt,t.wheelR+Math.sqrt(o*o-Vt*Vt)*.98))}let bt=Ae(t.body.top,H),Rt=[];Gh(Ae(t.body.width,H),Math.min(vt,bt-.08),bt,t.body.exp,t.body.taper,c,Rt,et),l.push(Rt)}let f=[Wh(l,c)],d=t.cabin,u=[],g=[],x=W=>Ae(d.top,W),m=a?36:20;for(let W=0;W<=m;W++){let H=W/m,et=d.from+H*(d.to-d.from),vt=i(et),bt=Ae(t.body.top,et)-.06,Rt=Math.max(x(H),bt+.02),te=Ae(d.width,H),Vt=[];if(Gh(te,bt,Rt,d.exp,d.taper,c,Vt,vt),u.push(Vt),H>=d.roof[0]&&H<=d.roof[1]){let ae=[];Gh(te*1.01,bt,Rt+.012,d.exp,d.taper,14,ae,vt,[.2*Math.PI,.8*Math.PI]),g.push(ae)}}let p=[Wh(u,c)];g.length>1&&f.push(Wh(g,14,{closed:!1,caps:!1}));let _=[],w=[],M=[],T=[],C=[],R=(W,H,et)=>{let vt=d.from+W*(d.to-d.from),bt=Ae(t.body.top,vt)-.02,Rt=x(W),te=Ae(d.width,W)*(1-d.taper*(et?.92:0))*.97;return new L(H*te,et?Rt-.02:bt,i(vt))};for(let W of[-1,1]){f.push(sd(R(.02,W,!1),R(d.roof[0]+.01,W,!0),.045));let H=(d.roof[0]+d.roof[1])/2;_.push(sd(R(H,W,!1),R(H,W,!0),.05));let et=R(.1,W,!1);f.push(Fe(.16,.1,.12,et.x+W*.14,et.y+.06,et.z)),_.push(Fe(.1,.025,.04,et.x+W*.05,et.y+.03,et.z))}let A=W=>Ae(t.body.width,W),S=(Ae(t.body.bottom,.02)+Ae(t.body.top,.02))/2,E=Ae(t.body.top,.02);for(let W of[-1,1]){let H=W*A(.02)*.62,et=S+(E-S)*.45;C.push(Fe(.44,.1,.06,H,et,n+.045,0,W*.32,0)),M.push(Fe(.38,.055,.05,H,et+.005,n+.03,0,W*.32,0)),M.push(Fe(.34,.016,.03,H,et+.06,n+.04,0,W*.32,0))}C.push(Fe(A(.03)*1.05,.18,.12,0,Ae(t.body.bottom,.02)+.17,n+.06)),_.push(Fe(A(.03)*1.7,.04,.22,0,Ae(t.body.bottom,.02)+.02,n+.1));let D=Ae(t.body.top,.97);T.push(Fe(A(.98)*1.72,.05,.06,0,D-.08,-n-.02));for(let W of[-1,1])T.push(Fe(.36,.11,.06,W*A(.98)*.68,D-.12,-n-.03));C.push(Fe(A(.98)*1.5,.16,.1,0,Ae(t.body.bottom,.98)+.06,-n-.05));let z=Ae(t.body.bottom,.98)+.03,k=(t.exhaust||[-.42,.42]).map(W=>new L(W,z,-n+.06));for(let W of k)w.push(oy(.05,.05,.14,12,W.x,W.y,-n+.02,"z"));for(let W of[-1,1]){let H=r[1]-r[0]-o*2;_.push(Fe(.06,.08,H,W*A(.5)*.99,Ae(t.body.bottom,.5)+.03,(r[0]+r[1])/2))}if(t.spoiler&&f.push(Fe(A(.96)*1.5,.022,.12,0,Ae(t.body.top,.96)+.012,i(.965),-.2)),t.ducktail&&f.push(Fe(A(.95)*1.78,.05,.2,0,Ae(t.body.top,.95)+.03,i(.955),.28)),t.scoop){let W=Ae(t.body.top,.22);f.push(Fe(.56,.09,.7,0,W+.035,i(.23),.04)),C.push(Fe(.46,.05,.03,0,W+.05,i(.23)-.35))}if(t.wing){let W=Ae(t.body.top,.93),H=i(.95);for(let et of[-1,1])_.push(Fe(.04,.3,.16,et*.42,W+.14,H,.25));_.push(Fe(A(.95)*1.86,.035,.34,0,W+.3,H+.02,-.12));for(let et of[-1,1])_.push(Fe(.03,.14,.38,et*A(.95)*.93,W+.29,H+.02))}if(t.intakes){for(let W of[-1,1]){let et=(Ae(t.body.bottom,.66)+Ae(t.body.top,.66))/2;C.push(Fe(.05,.2,.52,W*A(.66)*.985,et,i(.66),0,W*.14,0))}C.push(Fe(A(.03)*1.8,.03,.3,0,Ae(t.body.bottom,.02)+.01,n+.12))}if(t.rails)for(let W of[-1,1])_.push(Fe(.05,.05,e*.5,W*.62,Ae(d.top,.6)+.04,i(.62)));if(t.bed){let W=i(d.to+.01),H=-n-.05,et=Ae(t.body.top,.8);C.push(Fe(A(.8)*1.86,.04,H-W,0,et-.02,(W+H)/2));for(let vt of[-1,1])f.push(Fe(.08,.4,H-W,vt*A(.8)*.96,et+.2,(W+H)/2));f.push(Fe(A(.8)*1.9,.4,.08,0,et+.2,H))}let Z=[Fe(.52,.12,.01,0,Ae(t.body.bottom,.99)+.24,-n+.005),Fe(.52,.12,.01,0,Ae(t.body.bottom,.01)+.28,n-.005)],P=W=>De(W.map(H=>H.index?H.toNonIndexed():H).map(H=>(H.attributes.uv||H.setAttribute("uv",new se(new Float32Array(H.attributes.position.count*2),2)),H))),Y={type:t,parts:{paint:P(f),glass:P(p),trim:P(_),dark:P(C),chrome:P(w),head:P(M),tail:P(T),plate:P(Z)},wheels:[],wheel:ly(t.wheelR,t.wheelW,!a),exhausts:k};for(let W of r)for(let H of[-1,1])Y.wheels.push({x:H*t.track,y:t.wheelR,z:W,side:H,front:W<0});return Xh.set(s,Y),Y}function ly(s,t,e=!1){let n=s*.69,i=e?[[n,-t/2+.01],[s*.95,-t/2+.01],[s,-t/2+.06],[s,t/2-.06],[s*.95,t/2-.01],[n,t/2-.01]]:[[n,-t/2+.01],[s*.86,-t/2-.004],[s*.97,-t/2+.025],[s,-t/2+.06],[s,t/2-.06],[s*.97,t/2-.025],[s*.86,t/2+.004],[n,t/2-.01]],r=new Jr(i.map(([g,x])=>new Ht(g,x)),e?14:30);r.rotateZ(Math.PI/2);let o=[],a=new fe(n,n,t-.03,e?10:24,1,!0);if(a.rotateZ(Math.PI/2),o.push(a),!e){let g=new Xi(n-.008,.014,6,32);g.rotateY(Math.PI/2),g.translate(t/2-.03,0,0),o.push(g)}let c=t/2-.05,h=e?5:10;for(let g=0;g<h;g++){let x=g/h*Math.PI*2+(e?0:g%2*.12),m=new $t(.035,n-.05,.045);m.translate(0,(n-.05)/2+.05,0),m.rotateX(x),m.translate(c,0,0),o.push(m)}let l=new fe(.07,.08,.05,e?6:12);l.rotateZ(Math.PI/2),l.translate(c+.01,0,0),o.push(l);let f=De(o.map(g=>g.index?g.toNonIndexed():g)),d=new fe(n*.82,n*.82,.03,e?10:24);d.rotateZ(Math.PI/2),d.translate(c-.06,0,0);let u=new $t(.07,.16,.12);return u.translate(c-.03,n*.55,.07),{tire:r,rim:f,disc:d,caliper:u}}function cy(s,t="PCFC 7X"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.fillStyle="#e9e6da",n.fillRect(0,0,256,64),n.fillStyle="#1e3b78",n.font="700 14px Arial",n.textAlign="center",n.fillText("VISTA PAC\xCDFICA",128,16),n.fillStyle="#7a1f1f",n.font='700 34px "Barlow Condensed", Impact, monospace',n.fillText(t,128,52);let i=new fs(e);return i.colorSpace=dn,i}function To(s,t={}){return new rr({color:s,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.1,...t})}function Jl(s){let t=cy(s);return{glass:new rr({color:791061,metalness:.1,roughness:.04,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4}),trim:new Ot({color:1316890,roughness:.45,metalness:.4}),dark:new Ot({color:461066,roughness:.6,metalness:.2}),chrome:new Ot({color:14212319,roughness:.12,metalness:1}),plate:new Ot({map:t,roughness:.5}),tire:new Ot({color:1316118,roughness:.92,metalness:0}),rim:new Ot({color:12172994,roughness:.22,metalness:1}),disc:new Ot({color:6053472,roughness:.4,metalness:.9}),caliper:new Ot({color:12728866,roughness:.4,metalness:.3})}}var Ql=_e.damp,fn=_e.clamp,Ps={coupe:{name:"CALDERA GT",model:"coupe",blurb:"Grand tourer \xB7 balanced and forgiving",stats:{speed:.58,accel:.6,grip:.72},power:12.5,curve:[.55,1.15,.95],gears:[3.25,2.15,1.6,1.25,1.02,.86],final:3.55,idle:900,redline:7400,drag:.0029,brake:28,maxSpeed:64,grip:11,slideHold:.55,lat:15,latDrift:24,steer:.62,yawDamp:7.5,powerSlide:0,roll:.0065,rollMax:.09,pitch:.0028,nitro:9,engine:"v8"},muscle:{name:"VANTA SS",model:"muscle",blurb:"Muscle car \xB7 huge torque, loose tail",stats:{speed:.66,accel:.76,grip:.45},power:14.2,curve:[.86,.6,.72],gears:[2.9,1.9,1.4,1.1,.88],final:3.6,idle:750,redline:6400,drag:.0026,brake:24,maxSpeed:62,grip:8.4,slideHold:.45,lat:12.8,latDrift:27,steer:.56,yawDamp:6,powerSlide:.55,roll:.0095,rollMax:.12,pitch:.0042,nitro:10.5,engine:"bigblock"},super:{name:"VENTUS R",model:"super",blurb:"Mid-engine supercar \xB7 track grip, 220 km/h",stats:{speed:.95,accel:.94,grip:.95},power:16,curve:[.45,1.25,.88],gears:[3.4,2.3,1.75,1.4,1.15,.97],final:3.3,idle:1100,redline:8800,drag:.0016,brake:33,maxSpeed:80,grip:13.5,slideHold:.65,lat:19,latDrift:22,steer:.6,yawDamp:9,powerSlide:0,roll:.0035,rollMax:.05,pitch:.0018,nitro:9,engine:"v10"}},Ao=["coupe","muscle","super"];function hy(s,t){let e=t/s.redline,[n,i,r]=s.curve;return fn(n+i*e-r*e*e*e,.35,1)}function uy(s,t,e){let n=Math.sin(s*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function fy(s){let t=s.attributes.position.array,e=s.attributes.normal.array,n=[[[],[]],[[],[]]];for(let i=0;i<t.length;i+=9){let r=t[i]+t[i+3]+t[i+6]<0?0:1;for(let o=0;o<9;o++)n[r][0].push(t[i+o]),n[r][1].push(e[i+o])}return n.map(([i,r])=>{let o=new Ee;return o.setAttribute("position",new se(i,3)),o.setAttribute("normal",new se(r,3)),o})}var jl=class{constructor(t,e,n="coupe"){this.assist=!0,this.mats=Jl(e),this.paint=To("#df6339"),this.group=new Ie,this.body=new Ie,this.group.add(this.body),this.lightMats={head:[],tail:[]};for(let r=0;r<2;r++)this.lightMats.head.push(new Ot({color:16777215,emissive:16774364,emissiveIntensity:2,roughness:.2})),this.lightMats.tail.push(new Ot({color:4196358,emissive:16720914,emissiveIntensity:1.5,roughness:.3}));this.spots=[];for(let r of[-1,1]){let o=new io(16773592,0,70,.42,.55,1.4);this.group.add(o,o.target),this.spots.push(o)}let i=new fe(.12,3.2,16,16,1,!0);i.translate(0,-8,0),i.rotateX(-Math.PI/2+.06),this.beamMat=wo(16773328),this.beams=[];for(let r=0;r<2;r++){let o=new Qt(i,this.beamMat,1);o.userData.noAO=!0,o.layers.set(1),o.frustumCulled=!1,this.group.add(o),this.beams.push(o)}t.add(this.group),this.setModel(n),this.reset(0,0,0)}setModel(t){Ps[t]||(t="coupe"),this.key=t,this.def=Ps[t];for(let c of[...this.body.children])this.body.remove(c),c.geometry.dispose();for(let c of this.wheels||[])this.group.remove(c.pivot);let e=Kl(this.def.model);this.dims=e.type,this.exhausts=e.exhausts.map(c=>c.clone());let n=this.mats,i={paint:this.paint,glass:n.glass,trim:n.trim,dark:n.dark,chrome:n.chrome,plate:n.plate};this.deformables=[];let r=c=>{let h={geo:c,basePos:Float32Array.from(c.attributes.position.array),baseNormal:Float32Array.from(c.attributes.normal.array),weight:new Float32Array(c.attributes.position.count)};return this.deformables.push(h),h};for(let[c,h]of Object.entries(e.parts)){if(c==="head"||c==="tail"){fy(h).forEach((d,u)=>{let g=new Ut(d,this.lightMats[c][u]);g.userData.own=!0,this.body.add(g),r(d)});continue}let l=new Ut(h.clone(),i[c]);l.userData.own=!0,l.castShadow=!0,l.receiveShadow=!0,this.body.add(l);let f=r(l.geometry);c==="paint"&&(this.shell=f.geo,this.basePos=f.basePos)}this.wheels=e.wheels.map(c=>{let h=new Ie;h.position.set(c.x,c.y,c.z);let l=new Ie;c.side<0&&(l.rotation.y=Math.PI),h.add(l);let f=new Ie;l.add(f);for(let[d,u]of[["tire",n.tire],["rim",n.rim],["disc",n.disc]]){let g=new Ut(e.wheel[d],u);g.castShadow=!0,f.add(g)}return l.add(new Ut(e.wheel.caliper,n.caliper)),this.group.add(h),{...c,pivot:h,spin:f,mount:l,compress:0}});let o=-this.dims.length/2,a=this.key==="super"?.55:.72;this.spots.forEach((c,h)=>{let l=h?1:-1;c.position.set(l*.62,a,o+.15),c.target.position.set(l*1.6,-.6,o-20)}),this.beams.forEach((c,h)=>{c.setMatrixAt(0,new Dt().makeTranslation((h?1:-1)*.62,a,o)),c.instanceMatrix.needsUpdate=!0}),this.repair()}setColor(t){this.paint.color.set(t)}reset(t,e,n){this.repair(),this.x=t,this.z=e,this.y=this.groundAt(t,e,0),this.heading=n,this.vx=0,this.vz=0,this.yawRate=0,this.steer=0,this.gear=1,this.rpm=this.def.idle,this.shiftTimer=0,this.nitro=100,this.boosting=!1,this.throttle=0,this.brake=0,this.handbrake=!1,this.slip=0,this.wheelspin=0,this.impact=0,this.contact=null,this.scrape=null,this.pendingHit=null,this.dentCooldown=0,this.pitch=0,this.roll=0,this.pitchVel=0,this.rollVel=0,this.heave=0,this.heaveVel=0,this.wheelAngle=0,this.surface="road",this.prevLong=0,this.distance=0,this.sync()}get speed(){return this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading)}get kmh(){return Math.abs(this.speed)*3.6}groundAt(t,e,n){let i=Li(t,e),r=Xf(t);if(i!==null&&(n>i-1.2||t>ne.x0))return i;let o=bo(t,e);return o==="curb"||o==="grass"?r+jt:r}update(t,e,n){let i=this.def,r=-Math.sin(this.heading),o=-Math.cos(this.heading),a=Math.cos(this.heading),c=-Math.sin(this.heading),h=this.vx*r+this.vz*o,l=this.vx*a+this.vz*c,f=Math.abs(h);this.surface=bo(this.x,this.z);let d=Li(this.x,this.z)!==null&&this.y>1,u=this.surface==="sand"&&!d?1:this.surface==="grass"?.5:0;this.throttle=e.throttle,this.brake=e.brake,this.handbrake=e.handbrake;let g=e.steer,x=this.assist,m=Math.abs(g)>Math.abs(this.steer)?x?4.2:5.5:x?10:8;this.steer=Ql(this.steer,g,m,t),this.boosting=e.nitro&&e.throttle>0&&this.nitro>1&&h>3,this.nitro=fn(this.nitro+(this.boosting?-22:9)*t,0,100);let p=i.gears,_=f/(2*Math.PI*this.dims.wheelR)*60;h<-.5||this.brake>0&&f<1.2&&this.throttle===0?this.gear=-1:this.gear===-1&&(this.gear=1);let M=this.gear===-1?p[0]:p[this.gear-1],T=_*M*i.final;this.shiftTimer>0?this.shiftTimer-=t:this.gear>0&&(T>i.redline-300&&this.gear<p.length?(this.gear++,this.shiftTimer=.22,this.onShift?.(1)):this.gear>1&&T<i.redline*.36&&!(this.throttle&&T>i.redline*.27)&&(this.gear--,this.shiftTimer=.12,this.onShift?.(-1)));let C=this.throttle>0&&f<6&&this.gear===1,R=fn(Math.max(T,i.idle+(C?i.redline*.51:0)*this.throttle),i.idle,i.redline);this.rpm=Ql(this.rpm,this.shiftTimer>0?R*.82:R,12,t);let A=0;this.throttle>0&&this.gear>0&&this.shiftTimer<=0&&(A+=i.power*hy(i,this.rpm)*(M/p[0])*this.throttle*(1-u*.35),this.boosting&&(A+=i.nitro)),this.brake>0&&(h>.6?A-=i.brake*this.brake:A-=7*this.brake),this.throttle>0&&h<-.6&&(A+=26),A-=h*Math.abs(h)*(i.drag+u*.006),A-=Math.sign(h)*Math.min(Math.abs(h)/t,.25+u*2.6),!this.throttle&&!this.brake&&(A-=Math.sign(h)*Math.min(Math.abs(h)/t,.9)),this.handbrake&&(A-=Math.sign(h)*Math.min(Math.abs(h)/t,5)),h+=A*t,h=fn(h,-14,i.maxSpeed+(this.boosting?10:0));let S=i.grip*(x?1.5:1)-u*(x?3:6);this.handbrake&&(S=x?1.8:1.2);let E=Math.abs(l)/(f+4);E>.18&&!this.handbrake&&(S*=x?.9:i.slideHold),i.powerSlide&&!x&&this.gear>0&&this.gear<=2&&(S*=1-i.powerSlide*this.throttle*Math.abs(this.steer)*fn(f/14,0,1)),l*=Math.exp(-S*t),x&&!this.handbrake&&(l*=Math.exp(-(E>.08?7:2)*t)),this.slip=Math.abs(l);let D=(this.dims.wheels[1]-this.dims.wheels[0])*this.dims.length,z=i.steer/(1+f*(x?.05:.04));this.wheelAngle=this.steer*z;let k=h*Math.tan(this.wheelAngle)/D,P=(this.handbrake?i.latDrift:i.lat)*(x?1.3:1)*(1-u*.4)/Math.max(f,4);if(k=fn(k,-P,P),this.handbrake&&f>6&&(k*=1.5),E>.18&&(k+=this.steer*.6*Math.min(f/20,1)),this.yawRate=Ql(this.yawRate,k,x?Math.max(i.yawDamp,9.5):i.yawDamp,t),this.heading+=this.yawRate*t,x&&Math.abs(e.steer)<.05&&Math.abs(this.steer)<.15&&f>5&&!this.handbrake&&this.surface==="road"){let Rt=Math.PI/2,te=Math.round(this.heading/Rt)*Rt,Vt=this.heading-te;Math.abs(Vt)<.4&&(this.heading-=Vt*Math.min(1,2.2*t),this.yawRate*=Math.exp(-4*t))}this.vx=r*h+a*l,this.vz=o*h+c*l;let Y=this.x,W=this.z;this.x+=this.vx*t,this.z+=this.vz*t,this.wheelspin=C&&this.throttle>0?fn(1-f/8,0,1):0,i.powerSlide&&this.gear===1&&this.throttle>.8&&(this.wheelspin=Math.max(this.wheelspin,fn(1-f/16,0,1))),this.impact=0,this.collide(n,Y,W),this.distance+=Math.hypot(this.x-Y,this.z-W),this.dentCooldown-=t;let H=this.groundAt(this.x,this.z,this.y);H-this.y>.08&&H-this.y<.3&&(this.heaveVel-=(H-this.y)*9),this.y-H>.08&&this.y-H<.3&&(this.heaveVel+=(this.y-H)*5),this.y=Ql(this.y,H,H>this.y?22:9,t);let et=(h-this.prevLong)/t;this.prevLong=h;let vt=h*this.yawRate,bt=this.slopeAt();this.spring("pitch",fn(et*i.pitch,-i.rollMax*.75,i.rollMax*.55)+bt,70,9,t),this.spring("roll",fn(vt*i.roll,-i.rollMax,i.rollMax),60,7,t),this.spring("heave",0,90,10,t),this.sync();for(let Rt of this.wheels)Rt.spin.rotation.x-=h*t/this.dims.wheelR*(Rt.side<0?-1:1)*(Rt.front?1:1+this.wheelspin*2.5),Rt.front&&(Rt.pivot.rotation.y=this.wheelAngle)}slopeAt(){return Li(this.x,this.z)!==null&&this.x>ne.x0&&this.y>.2?Math.atan2(ne.deckY-jt,ne.rampStart-ne.x0)*Math.sin(this.heading):0}spring(t,e,n,i,r){let o=t+"Vel",a=(e-this[t])*n-this[o]*i;this[o]+=a*r,this[t]+=this[o]*r}sync(){this.group.position.set(this.x,this.y+this.heave*.4,this.z),this.group.rotation.set(0,this.heading,0),this.body.rotation.set(this.pitch,0,-this.roll),this.body.position.y=this.heave*.3;for(let t of this.wheels){let e=-this.roll*t.side*this.dims.track*.35+this.pitch*t.z*.35;t.pivot.position.y=t.y+fn(e,-.06,.06)*.5}}collide(t,e,n){let r=-Math.sin(this.heading),o=-Math.cos(this.heading);for(let h=0;h<2;h++)for(let l of[-1.35,1.35]){let f=this.x+r*l,d=this.z+o*l;for(let g of t.boxes||t.colliders){if(Math.abs(f-g.x)>g.w+1.05||Math.abs(d-g.z)>g.d+1.05)continue;let x=fn(f,g.x-g.w,g.x+g.w),m=fn(d,g.z-g.d,g.z+g.d),p=f-x,_=d-m,w=Math.hypot(p,_);if(w<1e-4){let M=g.w-Math.abs(f-g.x),T=g.d-Math.abs(d-g.z);M<T?(p=Math.sign(f-g.x),_=0,w=-M):(p=0,_=Math.sign(d-g.z),w=-T)}else p/=w,_/=w;w<1.05&&this.resolve(p,_,1.05-w,.25,f-p*1.05,d-_*1.05)}let u=this.y<(Li(f,d)??-9)-1;for(let g of u?[t.circles,t.piles]:[t.circles])for(let x of g){let m=f-x.x,p=d-x.z;if(Math.abs(m)>3||Math.abs(p)>3)continue;let _=Math.hypot(m,p),w=1.05+x.r;_<w&&_>1e-4&&this.resolve(m/_,p/_,w-_,.2,x.x+m/_*x.r,x.z+p/_*x.r)}}if(this.y>1.2&&Li(e,n)!==null){let h=ne.halfWidth-1.1;Math.abs(this.z-ne.z)>h&&this.resolve(0,-Math.sign(this.z-ne.z),Math.abs(this.z-ne.z)-h,.15),this.x<ne.x1+3&&this.resolve(1,0,ne.x1+3-this.x,.15)}let a=Li(this.x,this.z);if(a!==null&&this.x>ne.x0&&this.y<a-.9&&this.x<-345){let h=Math.sign(this.z-ne.z)||1;this.resolve(0,h,ne.halfWidth+.2-Math.abs(this.z-ne.z),.2)}let c=this.y>1.2&&Math.abs(this.z-ne.z)<ne.halfWidth?ne.x1+3:We.minX;this.x<c&&this.resolve(1,0,c-this.x,.2),this.x>We.maxX&&this.resolve(-1,0,this.x-We.maxX,.3),this.z<We.minZ&&this.resolve(0,1,We.minZ-this.z,.3),this.z>We.maxZ&&this.resolve(0,-1,this.z-We.maxZ,.3)}resolve(t,e,n,i,r=this.x-t*2,o=this.z-e*2){this.x+=t*n,this.z+=e*n;let a=this.vx*t+this.vz*e;if(a<0){let c=this.vx-a*t,h=this.vz-a*e,l=Math.hypot(c,h);l>6&&(!this.scrape||l>this.scrape.speed)&&(this.scrape={x:r,z:o,speed:l,nx:t,nz:e});let f=this.assist&&l>-a*1.2,d=f?0:i;this.vx-=(1+d)*a*t,this.vz-=(1+d)*a*e;let u=f?.985:.9;if(this.vx*=u,this.vz*=u,f&&l>4){let x=Math.atan2(-c,-h)-this.heading;x=Math.atan2(Math.sin(x),Math.cos(x)),Math.abs(x)<1.2&&(this.heading+=x*.08)}this.impact=Math.max(this.impact,-a),(!this.contact||-a>this.contact.speed)&&(this.contact={x:r,z:o,speed:-a,nx:t,nz:e}),this.registerHit(r,o,-a),this.yawRate*=.6}}registerHit(t,e,n){(!this.pendingHit||n>this.pendingHit.speed)&&(this.pendingHit={x:t,z:e,speed:n})}applyDamage(){let t=this.pendingHit;if(this.pendingHit=null,!t||t.speed<3.5||this.dentCooldown>0)return;this.dentCooldown=.18;let e=t.x-this.x,n=t.z-this.z,i=Math.cos(this.heading),r=Math.sin(this.heading),o=e*i-n*r,a=e*r+n*i,c=this.dims.length/2,h=this.dims.track+.1;o=fn(o,-h,h),a=fn(a,-c,c);let l=fn((t.speed-3)/16,.05,1);this.dent(o,.62,a,l)}dent(t,e,n,i){let r=.5+i*.55,o=.035+i*.13,a=this.dims.length/2,c=Math.abs(n)/a>Math.abs(t)/this.dims.track,h=c?-t*.15:-Math.sign(t),l=c?-Math.sign(n):-n*.1,f=Math.hypot(h,l)||1;h/=f,l/=f;let d=new L,u=new L,g=new L;for(let x of this.deformables){let m=x.geo.attributes.position.array,p=x.geo.attributes.normal.array,_=x.basePos,w=x.weight,M=!1;for(let T=0,C=0;T<m.length;T+=3,C++){let R=_[T]-t,A=(_[T+1]-e)*1.3,S=_[T+2]-n,E=(R*R+A*A+S*S)/(r*r);if(E>3)continue;let D=Math.exp(-E*1.8)*(.65+.7*uy(_[T],_[T+1],_[T+2]));m[T]+=h*o*D,m[T+1]-=o*.3*D,m[T+2]+=l*o*D;let z=m[T]-_[T],k=m[T+1]-_[T+1],Z=m[T+2]-_[T+2],P=Math.hypot(z,k,Z);if(P>.26){let Y=.26/P;m[T]=_[T]+z*Y,m[T+1]=_[T+1]+k*Y,m[T+2]=_[T+2]+Z*Y}w[C]=Math.min(1,w[C]+D),M=!0}if(M){for(let T=0;T<m.length;T+=9){let C=T/3;if(!(Math.max(w[C],w[C+1],w[C+2])<.02)){d.set(m[T+3]-m[T],m[T+4]-m[T+1],m[T+5]-m[T+2]),u.set(m[T+6]-m[T],m[T+7]-m[T+1],m[T+8]-m[T+2]),g.crossVectors(d,u).normalize();for(let R=0;R<3;R++){let A=T+R*3,S=Math.min(1,w[C+R]*1.6),E=x.baseNormal,D=E[A]*(1-S)+g.x*S,z=E[A+1]*(1-S)+g.y*S,k=E[A+2]*(1-S)+g.z*S,Z=Math.hypot(D,z,k)||1;p[A]=D/Z,p[A+1]=z/Z,p[A+2]=k/Z}}}x.geo.attributes.position.needsUpdate=!0,x.geo.attributes.normal.needsUpdate=!0}}if(this.damage=Math.min(1,this.damage+i*.18),i>.3){let x=t<0?0:1;n<-a+.9&&(this.broken.head[x]=!0),n>a-.9&&(this.broken.tail[x]=!0)}}repair(){for(let t of this.deformables||[])t.weight.some(e=>e>0)&&(t.geo.attributes.position.array.set(t.basePos),t.geo.attributes.normal.array.set(t.baseNormal),t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.normal.needsUpdate=!0,t.weight.fill(0));this.damage=0,this.broken={head:[!1,!1],tail:[!1,!1]}}setLights(t,e){let n=Math.max(t,.15);this.lightMats.head.forEach((i,r)=>{let o=!this.broken.head[r];i.emissiveIntensity=o?1.5+n*9:0,i.color.setScalar(o?1:.12),this.spots[r].intensity=o?t*220:0,this.beams[r].visible=o&&t>.05}),this.lightMats.tail.forEach((i,r)=>{i.emissiveIntensity=this.broken.tail[r]?.05:e?6:1.1+t*1.2}),this.beamMat.uniforms.intensity.value=t*.06}safeRespawn(){let t=On(Kt,this.x),e=On(Jt,this.z);if(Math.abs(this.x-t)<Math.abs(this.z-e)){let n=Math.cos(this.heading)>0;this.reset(t+(n?3.4:-3.4),fn(this.z,-470,470),n?0:Math.PI)}else{let n=Math.sin(this.heading)<0;this.reset(fn(this.x,-310,310),e+(n?3.4:-3.4),n?-Math.PI/2:Math.PI/2)}}};var tc=16,qh=new Dt,ec=new Dt,rd=new de,Yh=new L,Ro=new L,nc=new de,dy=new L(1,1,1),py=new Dt().makeScale(0,0,0),ic=class{constructor(){this.items=[],this.grid=new Map,this.loose=new Set,this.dirty=new Set}add(t,e,n){let i={...n,parts:t.map(o=>{let a=new Dt;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),hide:(e||[]).map(o=>{let a=new Dt;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),pivot0:new L(n.x,n.y,n.z),pos:new L(n.x,n.y,n.z),vel:new L,quat:new de,spin:new L,state:0,timer:0};i.id=this.items.length,this.items.push(i);let r=this.key(n.x,n.z);return this.grid.has(r)||this.grid.set(r,[]),this.grid.get(r).push(i),i}key(t,e){return`${Math.floor(t/tc)},${Math.floor(e/tc)}`}collide(t,e,n){let i=-Math.sin(t.heading),r=-Math.cos(t.heading),o=t.x-i*1.35,a=t.z-r*1.35,c=t.x+i*1.35,h=t.z+r*1.35,l=Math.hypot(t.vx,t.vz),f=Math.floor(t.x/tc),d=Math.floor(t.z/tc);for(let u=-1;u<=1;u++)for(let g=-1;g<=1;g++){let x=this.grid.get(`${f+u},${d+g}`);if(x)for(let m of x){if(m.state!==0)continue;let p=c-o,_=h-a,w=_e.clamp(((m.x-o)*p+(m.z-a)*_)/(p*p+_*_),0,1),M=o+p*w,T=a+_*w,C=m.x-M,R=m.z-T,A=Math.hypot(C,R),S=1.05+m.r;if(A>=S||t.y>m.y+3)continue;A>1e-4?(C/=A,R/=A):(C=i,R=r);let E=t.vx*C+t.vz*R;if(E<m.solid){E>0&&(t.vx-=E*C*1.2,t.vz-=E*R*1.2),t.x-=C*(S-A),t.z-=R*(S-A);continue}this.knock(m,t,C,R,E,l),n?.({item:m,x:m.x,z:m.z,speed:E,nx:C,nz:R})}}}knock(t,e,n,i,r,o){t.state=1,t.timer=0,this.loose.add(t);let a=1-t.mass*Math.min(1,6/Math.max(o,6));if(e.vx*=a,e.vz*=a,e.registerHit?.(t.x,t.z,r*t.mass*3),t.kind==="topple")Ro.set(i,0,-n).normalize(),t.axis=Ro.clone(),t.angle=0,t.angVel=.6+r*.08;else{let c=2.5+pt()*2.5+r*.12,h=.5+pt()*.25;t.vel.set(e.vx*h+n*r*.25,c,e.vz*h+i*r*.25),t.spin.set((pt()-.5)*2,(pt()-.5)*2,(pt()-.5)*2).normalize().multiplyScalar(5+r*.35),t.pos.copy(t.pivot0)}for(let c of t.hide)c.mesh.setMatrixAt(c.index,py),c.mesh.instanceMatrix.needsUpdate=!0}groundY(t,e){return bo(t,e)==="road"?0:jt}update(t,e){for(let n of this.loose){if(n.timer+=t,n.state===1){if(n.kind==="topple")n.angVel+=Math.sin(Math.max(n.angle,.05))*6*t+.4*t,n.angle+=n.angVel*t,n.angle>=Math.PI/2-.04&&(n.angle=Math.PI/2-.04,n.angVel*=-.18,Math.abs(n.angVel)<.08&&(n.state=2)),n.quat.setFromAxisAngle(n.axis,n.angle);else{n.vel.y-=9.8*t,n.pos.addScaledVector(n.vel,t);let i=n.spin.length();i>.001&&(nc.setFromAxisAngle(Ro.copy(n.spin).divideScalar(i),i*t),n.quat.premultiply(nc));let r=this.groundY(n.pos.x,n.pos.z)+n.lieH;n.pos.y<r&&(n.pos.y=r,n.vel.y<-1.2?(n.vel.y*=-.32,n.vel.x*=.5,n.vel.z*=.5,n.spin.multiplyScalar(.55)):(n.vel.y=0,n.vel.x*=Math.exp(-8*t),n.vel.z*=Math.exp(-8*t),n.spin.multiplyScalar(Math.exp(-6*t)),Math.hypot(n.vel.x,n.vel.z)<.3&&this.settle(n)))}this.dirty.add(n)}n.timer>25&&Math.hypot(e.x-n.x,e.z-n.z)>200&&this.restore(n)}for(let n of this.dirty)this.write(n);this.dirty.clear()}settle(t){t.state=2,Yh.set(0,1,0).applyQuaternion(t.quat);let e=Math.atan2(Yh.x,Yh.z);rd.setFromAxisAngle(Ro.set(0,1,0),e),nc.setFromAxisAngle(Ro.set(1,0,0),Math.PI/2),t.quat.copy(rd).multiply(nc),t.pos.y=this.groundY(t.pos.x,t.pos.z)+t.lieH,this.dirty.add(t)}restore(t){t.state=0,t.pos.copy(t.pivot0),t.quat.identity(),t.vel.set(0,0,0),t.spin.set(0,0,0),this.loose.delete(t);for(let e of[...t.parts,...t.hide])e.mesh.setMatrixAt(e.index,e.base),e.mesh.instanceMatrix.needsUpdate=!0}write(t){qh.compose(t.pos,t.quat,dy),ec.makeTranslation(-t.pivot0.x,-t.pivot0.y,-t.pivot0.z),qh.multiply(ec);for(let e of t.parts)ec.multiplyMatrices(qh,e.base),e.mesh.setMatrixAt(e.index,ec),e.mesh.instanceMatrix.needsUpdate=!0}restoreAll(){for(let t of[...this.loose])this.restore(t)}};function rc(s,t){let e=s.index?s.toNonIndexed():s,n=new Tt(t),i=e.attributes.position.count,r=new Float32Array(i*3);for(let o=0;o<i;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new Xe(r,3)),e}function Le(s,t,e,n,i,r,o,a=0,c=0,h=0){let l=new $t(s,t,e);return(a||c||h)&&l.applyMatrix4(new Dt().makeRotationFromEuler(new Ze(a,c,h))),l.translate(n,i,r),rc(l,o)}function ke(s,t,e,n,i,r,o,a,c="y"){let h=new fe(s,t,e,n);return c==="x"&&h.rotateZ(Math.PI/2),c==="z"&&h.rotateX(Math.PI/2),h.translate(i,r,o),rc(h,a)}function hd(s,t,e,n,i,r,o=1){let a=new bn(s,t,Math.max(3,t/3),0,Math.PI*2,0,Math.PI/2);return a.scale(1,o,1),a.translate(e,n,i),rc(a,r)}var Mr="#b0362a",Zh="#d9d3c2",Is="#202427",od="#7d5b3b",ad="#264a8a",sc="#626a70";function my(){return De([ke(.2,.21,.07,10,0,.035,0,Mr),ke(.14,.15,.52,10,0,.33,0,Mr),ke(.17,.17,.05,10,0,.6,0,Mr),hd(.15,10,0,.62,0,Mr,.9),ke(.035,.05,.07,6,0,.78,0,Zh),...[-1,1].flatMap(s=>[ke(.055,.06,.14,8,s*.17,.46,0,Mr,"x"),ke(.065,.065,.03,8,s*.245,.46,0,Zh,"x")]),ke(.075,.08,.13,8,0,.42,.17,Mr,"z"),ke(.085,.085,.035,8,0,.42,.245,Zh,"z")])}function gy(){let s=[ke(.3,.27,.9,14,0,.45,0,"#2c4a3b"),hd(.31,14,0,.9,0,"#1f2b27",.4),Le(.22,.12,.02,0,.78,.3,"#0d1110")];for(let t of[.18,.5,.82])s.push(ke(.305,.3,.03,14,0,t,0,"#22392e"));return De(s)}function xy(){let s=[];for(let t of[-.14,0,.14])s.push(Le(2,.04,.11,0,.45,t,od));for(let t=0;t<2;t++)s.push(Le(2,.1,.035,0,.64+t*.15,-.25-t*.03,od,-.2));for(let t of[-.85,.85])s.push(Le(.06,.45,.06,t,.225,.16,Is),Le(.06,.85,.06,t,.42,-.24,Is,-.15)),s.push(Le(.06,.04,.5,t,.63,-.02,Is),Le(.06,.04,.42,t,.42,-.04,Is));return De(s)}function vy(){let s=[];for(let t of[-.22,.22])for(let e of[-.18,.18])s.push(Le(.05,.22,.05,t,.11,e,Is));return s.push(Le(.52,.62,.46,0,.53,0,ad),ke(.23,.23,.52,14,0,.84,0,ad,"x")),s.push(Le(.32,.07,.04,0,.93,.225,"#16294d"),Le(.2,.14,.012,0,.6,.235,"#d8dde6")),De(s)}function yy(){return De([Le(.36,.03,.3,0,.015,0,Is),Le(.08,.36,.08,0,.18,0,Is),Le(.46,.55,.4,0,.63,0,"#ffffff"),Le(.48,.04,.42,0,.92,0,"#ffffff"),Le(.34,.24,.012,0,.71,.205,"#1c2226"),Le(.12,.03,.03,0,.53,.215,"#9aa0a4")])}function _y(){return De([ke(.035,.04,1.05,8,0,.525,0,sc),Le(.17,.28,.13,0,1.19,0,"#8a9095"),ke(.085,.085,.13,10,0,1.33,0,"#3a4044","z"),Le(.1,.07,.012,0,1.24,.067,"#c9e0a8")])}function My(){return De([ke(.045,.05,3.3,8,0,1.65,0,sc),ke(.06,.06,.06,8,0,3.32,0,sc)])}function by(s){let t=[ke(.13,.17,10.6,8,0,5.3,0,"#5a4330"),Le(2.5,.13,.13,0,9.7,0,"#4b3828"),Le(1.4,.1,.1,0,8.9,0,"#4b3828")];for(let e of[-1.1,0,1.1])t.push(ke(.05,.06,.2,6,e,9.86,0,"#cfd4d2"));for(let e of[-.6,.6])t.push(ke(.04,.05,.16,6,e,9.04,0,"#cfd4d2"));return s&&t.push(ke(.27,.27,.85,10,0,7.9,.32,"#7d8487"),ke(.29,.29,.05,10,0,8.35,.32,"#5f6669")),De(t)}var ld={"-320":"OCEAN DR","-160":"SEAVIEW AV",0:"AURELIO BL",160:"GRAND AV",320:"HILLCREST AV"},cd={"-480":"MARINA ST","-320":"SUNSET BL","-160":"PIER AV",0:"PALM ST",160:"HARBOR ST",320:"ROSA ST",480:"SOUTHBANK RD"};function Sy(s,t){let e=t.length,n=Be(s,512,64*e,(r,o,a)=>{let c=a/e;t.forEach((h,l)=>{let f=l*c;r.fillStyle="#16603d",r.fillRect(0,f,o,c),r.strokeStyle="#e9f1ea",r.lineWidth=3,r.strokeRect(6,f+6,o-12,c-12),r.fillStyle="#f4f7f2",r.font='700 40px "Barlow Condensed", Arial Narrow, Arial, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(h,o/2,f+c/2+2)})}),i=new Ot({map:n,roughness:.45,metalness:.2});return i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aRow;`).replace("#include <uv_vertex>",`#include <uv_vertex>
  vMapUv.y = (vMapUv.y + aRow) / ${e.toFixed(1)};`)},i.customProgramCacheKey=()=>"pa-street-blade",i}function Ey(s){return Be(s,256,384,(t,e,n)=>{let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#ff8a4c"),i.addColorStop(1,"#5a1c3c"),t.fillStyle=i,t.fillRect(0,0,e,n),t.fillStyle="#fff4dc",t.beginPath(),t.arc(e/2,n*.36,62,0,Math.PI*2),t.fill(),t.fillStyle="#1b1020",t.font='800 54px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.fillText("SURF",e/2,n*.7),t.fillText("FIZZ",e/2,n*.84),t.fillStyle="#fff4dc",t.font="600 18px Arial, sans-serif",t.fillText("TASTE THE SWELL",e/2,n*.94)})}function ud(s,t,e,n,i=[]){let r=new Dt,o=new de,a=new L,c=new L(1,1,1),h=new L(0,1,0),l=new Ot({vertexColors:!0,roughness:.55,metalness:.15}),f=[],d=[],u=ee+5,g=n.map(([nt,dt])=>[nt,dt]);for(let nt of i)g.push([nt.x,nt.z]);let x=(nt,dt,St=2.4)=>g.some(([zt,U])=>Math.abs(zt-nt)<St&&Math.abs(U-dt)<St),m=As.map(nt=>Rs(nt)),p=(nt,dt)=>m.some(([St,zt])=>Math.abs(St-nt)<7&&Math.abs(zt-dt)<7),_={hydrant:[],bin:[],bench:[],mailbox:[],newsbox:[],meter:[]},w=(nt,dt,St,zt)=>U=>nt==="ns"?[dt+St*(ee+U),zt]:[zt,dt+St*(ee+U)];for(let nt of["ns","ew"]){let dt=nt==="ns"?Kt:Jt,St=nt==="ns"?Jt:Kt,[zt,U]=nt==="ns"?[-525,525]:[-305,345];for(let Gt of dt)for(let Nt of[-1,1])if(!(nt==="ns"&&Gt===Kt[0]&&Nt<0))for(let rt=zt;rt<=U;rt+=6.5){if(St.some(y=>Math.abs(rt-y)<u))continue;let it=w(nt,Gt,Nt,rt),[$,j]=it(1);if(x($,j)||p($,j))continue;let ht=nt==="ns"?Nt>0?-Math.PI/2:Math.PI/2:Nt>0?Math.PI:0,kt=Gt>-200&&(nt==="ns"?rt<120:Gt<120),Lt=pt();if(Lt<.055)_.hydrant.push([...it(.6),ht]);else if(Lt<.12)_.bin.push([...it(.9),ht]);else if(Lt<.165)_.bench.push([...it(3.4),ht]);else if(Lt<.19)_.mailbox.push([...it(1.1),ht]);else if(Lt<.23){let y=2+Math.floor(pt()*2);for(let v=0;v<y;v++){let I=(v-(y-1)/2)*.55,[F,V]=it(1.1);_.newsbox.push([nt==="ns"?F:F+I,nt==="ns"?V+I:V,ht])}}else kt&&Lt<.42&&_.meter.push([...it(.45),ht])}}let M={hydrant:{geo:my(),y:.4,r:.22,mass:.08,solid:1.5,lieH:.17,kind:"fly",sparks:!0},bin:{geo:gy(),y:.5,r:.32,mass:.04,solid:1.2,lieH:.29,kind:"fly"},bench:{geo:xy(),y:.4,r:.75,mass:.07,solid:1.5,lieH:.3,kind:"fly"},mailbox:{geo:vy(),y:.5,r:.34,mass:.06,solid:1.5,lieH:.25,kind:"fly",sparks:!0},newsbox:{geo:yy(),y:.5,r:.28,mass:.04,solid:1.2,lieH:.22,kind:"fly"},meter:{geo:_y(),y:0,r:.12,mass:.04,solid:2,kind:"topple",sparks:!0}},T=["#c8342b","#2f5fa8","#e2b33a","#2e7d4f","#e8e4da","#d9662f"].map(nt=>new Tt(nt)),C={};for(let[nt,dt]of Object.entries(_)){let St=M[nt],zt=new Qt(St.geo,l,Math.max(1,dt.length));zt.count=dt.length,dt.forEach(([U,Gt,Nt],rt)=>{o.setFromAxisAngle(h,Nt+(nt==="bin"||nt==="hydrant"?pt()*6.28:0)),r.compose(a.set(U,jt,Gt),o,c),zt.setMatrixAt(rt,r),nt==="newsbox"&&zt.setColorAt(rt,le(T))}),zt.castShadow=!0,zt.receiveShadow=!0,zt.layers.set(1),zt.name=nt,s.add(zt),C[nt]=zt,dt.forEach(([U,Gt],Nt)=>{e.add([{mesh:zt,index:Nt}],null,{type:nt,x:U,z:Gt,y:jt+St.y,r:St.r,mass:St.mass,solid:St.solid,lieH:St.lieH??.2,kind:St.kind,sparks:!!St.sparks})})}let R=[...Object.values(ld),...Object.values(cd)],A=[];for(let nt of Kt)for(let dt of Jt)A.push([nt+ee+1.3,dt-ee-1.3,nt,dt]);let S=new Qt(My(),l,A.length),E=new $t(1.7,.27,.03),D=new Qt(E,Sy(t,R),A.length*2),z=new Float32Array(A.length*2);A.forEach(([nt,dt,St,zt],U)=>{r.makeTranslation(nt,jt,dt),S.setMatrixAt(U,r),o.setFromAxisAngle(h,Math.PI/2),r.compose(a.set(nt,jt+3,dt),o,c),D.setMatrixAt(U*2,r),o.identity(),r.compose(a.set(nt,jt+3.3,dt),o,c),D.setMatrixAt(U*2+1,r),z[U*2]=R.length-1-R.indexOf(ld[String(St)]),z[U*2+1]=R.length-1-R.indexOf(cd[String(zt)])}),E.setAttribute("aRow",new Oe(z,1));for(let nt of[S,D])nt.castShadow=!0,nt.layers.set(1),s.add(nt);A.forEach(([nt,dt],St)=>{e.add([{mesh:S,index:St},{mesh:D,index:St*2},{mesh:D,index:St*2+1}],null,{type:"sign",x:nt,z:dt,y:jt,r:.12,mass:.05,solid:2.5,kind:"topple",sparks:!0})});let k=[],Z=[],P=[];for(let nt of As){let[dt,St]=Rs(nt),zt=nt.axis==="ns"?nt.side>0?-Math.PI/2:Math.PI/2:nt.side>0?Math.PI:0,U=new Dt().compose(a.set(dt,jt,St),o.setFromAxisAngle(h,zt),c),Gt=($,j)=>$.push(j.applyMatrix4(U));Gt(k,Le(4.3,.08,1.8,0,2.55,0,"#3b4448",.04)),Gt(k,Le(4.3,.18,.06,0,2.48,.88,"#2b3236"));for(let $ of[-2.05,2.05])for(let j of[-.78,.7])Gt(k,ke(.05,.05,2.5,8,$,1.25,j,"#2b3236"));Gt(k,Le(2.4,.05,.42,-.2,.47,-.45,"#9aa3a8"));for(let $ of[-1.2,.8])Gt(k,Le(.05,.45,.35,$,.225,-.45,"#2b3236"));Gt(k,ke(.04,.04,2.8,8,2.7,1.4,.9,sc)),Gt(k,ke(.27,.27,.03,18,2.7,2.65,.9,"#1d4f9a","z")),Gt(k,ke(.2,.2,.035,18,2.7,2.65,.9,"#f2f4f6","z")),Gt(Z,Le(4,1.85,.02,0,1.3,-.8,"#ffffff")),Gt(Z,Le(.02,1.85,1.35,-2.05,1.3,-.1,"#ffffff"));let Nt=new $t(.14,1.8,1.3);Nt.translate(2.05,1.3,-.08),P.push(rc(Nt,"#ffffff").applyMatrix4(U));let rt=2.25,it=.95;f.push(nt.axis==="ns"?{x:dt,z:St,w:it,d:rt}:{x:dt,z:St,w:rt,d:it})}let Y=new Ut(De(k),l);Y.castShadow=Y.receiveShadow=!0;let W=new Ot({color:10470612,roughness:.05,metalness:.1,transparent:!0,opacity:.22,depthWrite:!1}),H=new Ut(De(Z),W);H.renderOrder=2;let et=Ey(t),vt=new Ot({map:et,emissive:16777215,emissiveMap:et,emissiveIntensity:.1,roughness:.3}),bt=new Ut(De(P),vt);bt.castShadow=!0,s.add(Y,H,bt);let Rt=[];for(let nt=-510;nt<=525;nt+=38)Jt.some(dt=>Math.abs(nt-dt)<u)||Rt.push([320+ee+1.7,nt,"ns"]);for(let[nt,dt]of[[480,1],[-480,-1]])for(let St=-290;St<=330;St+=38)Kt.some(zt=>Math.abs(St-zt)<u)||Rt.push([St,nt+dt*(ee+1.7),"ew"]);let te=Rt.filter((nt,dt)=>dt%4!==2),Vt=Rt.filter((nt,dt)=>dt%4===2);for(let[nt,dt]of[[te,!1],[Vt,!0]]){let St=new Qt(by(dt),l,nt.length);nt.forEach(([zt,U,Gt],Nt)=>{o.setFromAxisAngle(h,Gt==="ns"?0:Math.PI/2),r.compose(a.set(zt,jt,U),o,c),St.setMatrixAt(Nt,r),d.push({x:zt,z:U,r:.22})}),St.castShadow=!0,s.add(St)}let ae=[],at=[Rt.filter(nt=>nt[2]==="ns"),Rt.filter(nt=>nt[2]==="ew"&&nt[1]>0),Rt.filter(nt=>nt[2]==="ew"&&nt[1]<0)];for(let nt of at)for(let dt=0;dt<nt.length-1;dt++){let[St,zt,U]=nt[dt],[Gt,Nt]=nt[dt+1];if(!(Math.hypot(Gt-St,Nt-zt)>80))for(let[rt,it]of[[-1.1,9.92],[0,9.92],[1.1,9.92],[-.6,9.08],[.6,9.08]]){let $=U==="ns"?rt:0,j=U==="ns"?0:rt,ht=.55+Math.abs(rt)*.1,kt=St+$,Lt=jt+it,y=zt+j;for(let v=1;v<=12;v++){let I=v/12,F=St+(Gt-St)*I+$,V=zt+(Nt-zt)*I+j,O=jt+it-ht*4*I*(1-I);ae.push(kt,Lt,y,F,O,V),kt=F,Lt=O,y=V}}}let ct=new Ee;ct.setAttribute("position",new se(ae,3));let Ct=new Zr(ct,new sr({color:723981,transparent:!0,opacity:.85}));return s.add(Ct),{solids:f,circles:d,meshes:C,update(nt){vt.emissiveIntensity=.12+nt*1.4}}}function fd(s,t,e,n,i){for(let r of s){if(Math.max(t,n)<r.x-r.w||Math.min(t,n)>r.x+r.w||Math.max(e,i)<r.z-r.d||Math.min(e,i)>r.z+r.d)continue;let o=0,a=1,c=n-t,h=i-e,l=!0;for(let[f,d,u,g]of[[t,c,r.x-r.w,r.x+r.w],[e,h,r.z-r.d,r.z+r.d]]){if(Math.abs(d)<1e-6){if(f<u||f>g){l=!1;break}continue}let x=(u-f)/d,m=(g-f)/d;if(x>m&&([x,m]=[m,x]),o=Math.max(o,x),a=Math.min(a,m),o>a){l=!1;break}}if(l)return!0}return!1}var oc=class{constructor(t,e){this.traffic=t,this.colliders=e,this.reset()}reset(){this.level=0,this.evade=0,this.speeding=0,this.bustTimer=0,this.lastCrime=-99,this.seen=!1,this.events=this.events||[];for(let t of this.traffic.police)this.traffic.endChase(t)}get evading(){return this.level>0&&!this.seen}get evadeTime(){return 7+this.level*3}sightRange(){return 70+this.level*25}witness(t,e,n){let i=null,r=n;for(let o of this.traffic.police){let a=Math.hypot(o.x-t,o.z-e);a>r||fd(this.colliders,o.x,o.z,t,e)||(i=o,r=a)}return i}crime(t,e,n,i,r,o=!0){if(r-this.lastCrime<2.5&&t!=="police")return!1;let a=o?this.witness(e,n,75+this.level*15):null;if(o&&!a&&this.level===0||o&&!a&&!this.seen)return!1;this.lastCrime=r;let c=this.level;return this.level=Math.min(5,Math.max(this.level+i,t==="police"?2:1)),this.evade=0,this.level>c&&this.events.push({type:"up",level:this.level,kind:t}),a&&this.traffic.startChase(a),!0}update(t,e,n,i,r){if(this.events.length=0,!r){this.level&&this.reset();return}if(e.kmh>125&&this.witness(e.x,e.z,55)?(this.speeding+=t,this.speeding>1.2&&(this.crime("speeding",e.x,e.z,1,n),this.speeding=0)):this.speeding=Math.max(0,this.speeding-t),!this.level){this.seen=!1;return}let a=Math.min(this.traffic.police.length,[0,1,2,3,4,5][this.level]),c=this.traffic.police.filter(f=>f.mode==="chase");if(c.length<a){let f=this.traffic.police.filter(d=>d.mode!=="chase").sort((d,u)=>Math.hypot(d.x-e.x,d.z-e.z)-Math.hypot(u.x-e.x,u.z-e.z))[0];f&&(Math.hypot(f.x-e.x,f.z-e.z)>260?this.traffic.dispatch(f,e,i):this.traffic.startChase(f))}let h=this.sightRange();if(this.seen=c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<h&&!fd(this.colliders,f.x,f.z,e.x,e.z)),this.seen)this.evade=0;else if(this.evade+=t,this.evade>this.evadeTime){this.events.push({type:"evaded"}),this.reset();return}c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<8)&&e.kmh<6?(this.bustTimer+=t,this.bustTimer>2.5&&(this.events.push({type:"busted"}),this.reset())):this.bustTimer=Math.max(0,this.bustTimer-t*2)}sirenLevel(t){let e=1/0;for(let n of this.traffic.police)n.mode==="chase"&&(e=Math.min(e,Math.hypot(n.x-t.x,n.z-t.z)));return Math.max(0,1-e/260)}};var wy=[["sedan",16],["suv",11],["hatch",11],["pickup",7],["taxi",9],["police",5]],$h={sedan:26,suv:20,hatch:22,pickup:12,taxi:0,police:0},Ty=["sedan","sedan","suv","hatch","hatch","pickup"],dd=["#e9e9e6","#e9e9e6","#151719","#151719","#9ea3a6","#5d6265","#1f3a5f","#8e1c1c","#c9b99a","#2e4a3a","#6b7d8c","#3a2f2a","#7a8f9e","#b85c2a"],pd=11.85,Ay=430,Ry=210,ri=new Dt,es=new de,kn=new L,br=new L(1,1,1),Io=new L(0,1,0),Cy=new L(1,0,0),ac=new Dt,Kh=new de,Py=new de().setFromAxisAngle(Io,Math.PI),Co=new Dt().makeScale(0,0,0),oi=new Tt;function gd(s,t){return s==="ns"?-t:t}function Jh(s,t){return s==="ns"?t<0?0:Math.PI:t>0?-Math.PI/2:Math.PI/2}function Qh(s,t){return s==="ns"?[0,t]:[t,0]}function Po(s,t,e,n,i){let r=gd(s,e)*Mo[n];return s==="ns"?[t+r,i]:[i,t+r]}function md(s){return Math.atan2(Math.sin(s),Math.cos(s))}function jh(s,t){return s.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},s.customProgramCacheKey=()=>t,s}var tu=new Map;function Iy(s){if(tu.has(s))return tu.get(s);let e=Object.entries({trim:"#14181a",dark:"#07090a",chrome:"#b9bec2",plate:"#d6d2c4"}).map(([i,r])=>{let o=s.parts[i].clone(),a=new Tt(r),c=o.attributes.position.count,h=new Float32Array(c*3);for(let l=0;l<c;l++)h[l*3]=a.r,h[l*3+1]=a.g,h[l*3+2]=a.b;return o.setAttribute("color",new Xe(h,3)),o}),n={paint:s.parts.paint,glass:s.parts.glass,body:De(e),head:s.parts.head,tail:s.parts.tail};return tu.set(s,n),n}function Dy(){let s=To(16777215,{metalness:.35,roughness:.32});return s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying float vBodyY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBodyY = position.y;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vBodyY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(vec3(0.015), vec3(0.92), smoothstep(0.7, 0.74, vBodyY));`)},s.customProgramCacheKey=()=>"police-paint",s}var lc=class{constructor(t,e){this.cars=[],this.meshes=[],this.types={},this.parked=[],this.police=[],this.world=null,this.peds=[];let n=Jl(e);this.headMat=jh(new Ot({color:16777215,emissive:16773846,emissiveIntensity:1,roughness:.2}),"head-inst"),this.tailMat=jh(new Ot({color:3802885,emissive:16719888,emissiveIntensity:1,roughness:.3}),"tail-inst");let i=Be(e,128,32,(l,f)=>{l.fillStyle="#f7d046",l.fillRect(0,0,f,32),l.fillStyle="#1a1a1a",l.font='800 24px "Barlow Condensed", Impact, sans-serif',l.textAlign="center",l.fillText("TAXI",f/2,25)});this.taxiSignMat=new Ot({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.3}),this.barMat=jh(new Ot({color:1118481,emissive:16777215,emissiveIntensity:1,roughness:.3}),"lightbar-inst"),this.bodyMat=new Ot({vertexColors:!0,roughness:.5,metalness:.4}),this.parked=this.layoutParking();for(let[l,f]of wy){let u=Kl(l==="taxi"||l==="police"?"sedan":l),g=f+($h[l]||0),m={paint:l==="police"?Dy():To(16777215,{metalness:.45,roughness:.38}),glass:n.glass,body:this.bodyMat,head:this.headMat,tail:this.tailMat},p={};for(let[A,S]of Object.entries(Iy(u))){let E=new Qt(S,m[A],g);E.castShadow=A==="paint",(A==="glass"||A==="body")&&E.layers.set(1),E.receiveShadow=!0,E.frustumCulled=!1,E.instanceMatrix.setUsage(Yn);for(let D=0;D<g;D++)E.setMatrixAt(D,Co);t.add(E),p[A]=E,this.meshes.push(E)}for(let A=0;A<g;A++)p.paint.setColorAt(A,oi.set(l==="taxi"?"#f2c230":le(dd))),p.tail.setColorAt(A,oi.setScalar(1)),p.head.setColorAt(A,oi.setScalar(1));let _=new Qt(u.wheel.tire,n.tire,g*4),w=new Qt(u.wheel.rim,n.rim,g*4);for(let A of[_,w]){A.frustumCulled=!1,A.castShadow=!1,A.layers.set(1),A.instanceMatrix.setUsage(Yn);for(let S=0;S<g*4;S++)A.setMatrixAt(S,Co);t.add(A),this.meshes.push(A)}let M=null,T=null;if(l==="taxi"&&(M=new Qt(new $t(.62,.2,.26),this.taxiSignMat,f),M.frustumCulled=!1,t.add(M),this.meshes.push(M)),l==="police"){T=new Qt(new $t(.62,.16,.3),this.barMat,f*2),T.frustumCulled=!1;for(let A=0;A<f*2;A++)T.setColorAt(A,oi.setScalar(0));t.add(T),this.meshes.push(T)}let C=Math.max(...u.type.cabin.top.map(A=>A[1])),R={name:l,geo:u,parts:p,tire:_,rim:w,sign:M,bar:T,roofY:C,moving:f,cap:g};this.types[l]=R;for(let A=0;A<f;A++){let S={type:R,slot:A,geo:u,police:l==="police",mode:"lane"};this.spawnLane(S,-316,246,0,420),this.cars.push(S),S.police&&this.police.push(S)}}let r=Be(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d/2,4,f/2,d/2,d/2);u.addColorStop(0,"rgba(0,0,0,0.75)"),u.addColorStop(.55,"rgba(0,0,0,0.45)"),u.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),o=new Ce(2.6,5.6);o.rotateX(-Math.PI/2);let a=Object.values($h).reduce((l,f)=>l+f,0);this.blobs=new Qt(o,new qe({map:r,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),this.cars.length+a+1),this.blobs.frustumCulled=!1,this.blobs.renderOrder=1,this.blobs.userData.noAO=!0,t.add(this.blobs);let c=Be(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d*.75,2,f/2,d*.6,d*.6);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(.5,"rgba(255,255,255,0.3)"),u.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),h=new Ce(6,14);h.rotateX(-Math.PI/2),h.translate(0,0,-9.5),this.poolMat=new qe({map:c,color:16773328,transparent:!0,depthWrite:!1,blending:Tn,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2}),this.pools=new Qt(h,this.poolMat,this.cars.length),this.pools.frustumCulled=!1,this.pools.layers.set(1),this.pools.userData.noAO=!0,t.add(this.pools),this.parkTimer=0,this.nearParked=[],this.refreshParked(-316,246)}layoutParking(){let t=[],e=As.map(i=>Rs(i)),n=(i,r)=>{let o=[],a=[-r,...i,r];for(let c=0;c<a.length-1;c++)o.push([a[c]+27,a[c+1]-27]);return o.filter(([c,h])=>h-c>8)};for(let[i,r,o,a]of[["ns",Kt,Jt,486],["ew",Jt,Kt,326]])for(let c of r)for(let h of[-1,1])if(!(i==="ns"&&c===Kt[0]&&h<0))for(let[l,f]of n(o,a))for(let d=l+3.6;d<f-3;d+=7.2){if(!xe(.42))continue;let u=d+gt(-.6,.6),g=i==="ns"?c+h*pd:u,x=i==="ns"?u:c+h*pd;if(e.some(([p,_])=>Math.hypot(p-g,_-x)<14)||Math.abs(x-ne.z)<20&&g<-300)continue;let m=i==="ns"?-h:h;t.push({parked:!0,type:le(Ty),x:g,z:x,heading:Jh(i,m)+gt(-.04,.04),color:le(dd),hit:null,slot:-1})}return t}refreshParked(t,e){for(let r of Object.values(this.types))for(let o=r.moving;o<r.cap;o++){for(let a of Object.values(r.parts))a.setMatrixAt(o,Co);for(let a=0;a<4;a++)r.tire.setMatrixAt(o*4+a,Co),r.rim.setMatrixAt(o*4+a,Co)}for(let r of this.parked)r.d=Math.hypot(r.x-t,r.z-e),r.slot=-1;let n=this.parked.filter(r=>r.d<Ry).sort((r,o)=>r.d-o.d),i={};this.nearParked=[];for(let r of n){let o=this.types[r.type],a=i[r.type]||0;a>=$h[r.type]||(i[r.type]=a+1,r.slot=o.moving+a,o.parts.paint.setColorAt(r.slot,oi.set(r.color)),o.parts.head.setColorAt(r.slot,oi.setScalar(0)),o.parts.tail.setColorAt(r.slot,oi.setScalar(.12)),this.writeCar(o,r.slot,r.x,r.z,r.heading,0),this.nearParked.push(r))}}writeCar(t,e,n,i,r,o){es.setFromAxisAngle(Io,r),ri.compose(kn.set(n,.02,i),es,br);for(let a of Object.values(t.parts))a.setMatrixAt(e,ri);return t.geo.wheels.forEach((a,c)=>{Kh.setFromAxisAngle(Cy,o*(a.side<0?-1:1)),a.side<0&&Kh.premultiply(Py),ac.compose(kn.set(a.x,a.y,a.z),Kh,br),ac.premultiply(ri),t.tire.setMatrixAt(e*4+c,ac),t.rim.setMatrixAt(e*4+c,ac)}),ri}spawnLane(t,e,n,i,r,o=null){for(let a=0;a<40;a++){let c=pt()<.5?"ns":"ew",h=(c==="ns"?Kt:Jt).filter(_=>Math.abs(_-(c==="ns"?e:n))<r);if(!h.length)continue;let l=le(h),f=pt()<.5?1:-1,d=pt()<.5?0:1,u=c==="ns"?470:310,g=_e.clamp((c==="ns"?n:e)+gt(-r,r),-u,u),[x,m]=Po(c,l,f,d,g),p=Math.hypot(x-e,m-n);if(!(p<i||p>r)&&!(c==="ns"?Jt:Kt).some(_=>Math.abs(_-g)<24)&&!this.cars.some(_=>_!==t&&_.mode==="lane"&&_.axis===c&&_.road===l&&_.dir===f&&_.lane===d&&Math.abs(_.s-g)<20)){if(o){let _=x-o.position.x,w=m-o.position.z,M=Math.hypot(_,w)||1;if((_*o.fx+w*o.fz)/M>.2&&M<300)continue}return Object.assign(t,{axis:c,road:l,dir:f,lane:d,s:g}),Object.assign(t,{mode:"lane",cruise:t.police?gt(13,16):gt(11,16.5),speed:9,turn:null,plan:null,decided:null,hit:null,offset:null,braking:!1,blockedTime:0,wheelSpin:0,vx:0,vz:0}),this.place(t),!0}}return t.axis===void 0&&Object.assign(t,{axis:"ns",road:Kt[1],dir:1,lane:0,s:0}),Object.assign(t,{mode:"lane",cruise:12,speed:0,turn:null,plan:null,hit:null,offset:null,wheelSpin:0,vx:0,vz:0,blockedTime:0}),this.place(t),!1}place(t){if(t.turn){let e=t.turn,n=e.t*Math.PI/2,i=Math.cos(n),r=Math.sin(n);t.x=e.O[0]+e.u[0]*i+e.v[0]*r,t.z=e.O[1]+e.u[1]*i+e.v[1]*r;let o=-e.u[0]*r+e.v[0]*i,a=-e.u[1]*r+e.v[1]*i;t.heading=Math.atan2(-o,-a)}else[t.x,t.z]=Po(t.axis,t.road,t.dir,t.lane,t.s),t.heading=Jh(t.axis,t.dir)}nextCross(t){let e=t.axis==="ns"?Jt:Kt,n=null;for(let i of e){let r=(i-t.s)*t.dir;r>-1&&(n===null||r<(n-t.s)*t.dir)&&(n=i)}return n}exitValid(t,e,n){let i=t==="ns"?Jt:Kt;return e>0?n<i[i.length-1]:n>i[0]}planTurn(t,e){let n=t.axis==="ns"?t.dir<0?"N":"S":t.dir>0?"E":"W",i={N:"E",E:"S",S:"W",W:"N"}[n],r={N:"W",W:"S",S:"E",E:"N"}[n],o=A=>A==="N"?["ns",-1]:A==="S"?["ns",1]:A==="E"?["ew",1]:["ew",-1],a=A=>{let[S,E]=o(A);return S===t.axis?this.exitValid(S,E,e):this.exitValid(S,E,t.road)},c=[];a(n)&&c.push(["straight",t.lane===1?.6:.72]),a(i)&&c.push(["right",t.lane===1?.4:.08]),a(r)&&c.push(["left",t.lane===0?.28:.06]);let h=pt()*c.reduce((A,S)=>A+S[1],0),l=c[0][0];for(let[A,S]of c)if((h-=S)<=0){l=A;break}if(l==="straight")return null;let[f,d]=o(l==="right"?i:r),u=t.lane,g=e,x=Po(t.axis,t.road,t.dir,t.lane,0),m=Po(f,g,d,u,0),p=t.axis==="ns"?[x[0],m[1]]:[m[0],x[1]],_=Qh(t.axis,t.dir),w=Qh(f,d),M=l==="right"?6.5:10.5,T=[p[0]-_[0]*M,p[1]-_[1]*M],C=[p[0]+w[0]*M,p[1]+w[1]*M],R=[T[0]+w[0]*M,T[1]+w[1]*M];return{startS:t.axis==="ns"?T[1]:T[0],O:R,u:[T[0]-R[0],T[1]-R[1]],v:[C[0]-R[0],C[1]-R[1]],t:0,len:M*Math.PI/2,next:{axis:f,road:g,dir:d,lane:u,s:f==="ns"?C[1]:C[0]}}}rejoinLane(t){let e=-Math.sin(t.heading),n=-Math.cos(t.heading),i=Math.abs(n)>Math.abs(e)?"ns":"ew",r=i==="ns"?Math.sign(n)||1:Math.sign(e)||1,o=i==="ns"?Kt:Jt,a=i==="ns"?t.x:t.z,c=o.reduce((g,x)=>Math.abs(x-a)<Math.abs(g-a)?x:g),h=(a-c)*gd(i,r),l=Math.abs(h-Mo[0])<Math.abs(h-Mo[1])?0:1,f=i==="ns"?t.z:t.x,[d,u]=Po(i,c,r,l,f);Object.assign(t,{mode:"lane",axis:i,road:c,dir:r,lane:l,s:f,turn:null,plan:null,decided:null,hit:null}),t.offset={dx:t.x-d,dz:t.z-u,dh:md(t.heading-Jh(i,r)),t:1},Math.abs(a-c)>ee+6&&this.spawnLane(t,t.x,t.z,0,200)}update(t,e,n,i,r=null){if(this.frozen)return;let o=n.x,a=n.z,c=r?{position:r.position,fx:0,fz:0}:null;if(c){r.getWorldDirection(kn),c.fx=kn.x,c.fz=kn.z;let l=Math.hypot(c.fx,c.fz)||1;c.fx/=l,c.fz/=l}for(let l of this.cars){if(l.mode==="lane"&&Math.hypot(l.x-o,l.z-a)>Ay){this.spawnLane(l,o,a,140,380,c);continue}if(l.mode==="chase"){this.chase(l,t,n);continue}if(l.hit){let m=l.hit;l.x+=m.vx*t,l.z+=m.vz*t;let p=Math.exp(-1.8*t);m.vx*=p,m.vz*=p,l.heading+=m.spin*t,m.spin*=Math.exp(-2.5*t),m.t-=t,l.speed=0,this.collideWorld(l),m.t<=0&&this.rejoinLane(l);continue}let f=l.cruise,[d,u]=l.turn?[-Math.sin(l.heading),-Math.cos(l.heading)]:Qh(l.axis,l.dir);if(l.turn)f=Math.min(f,8);else{let m=this.nextCross(l);if(m!==null){let p=(m-l.s)*l.dir;p<34&&l.decided!==m&&(l.decided=m,l.plan=this.planTurn(l,m));let _=p-20.5,w=ts(l.axis==="ns"?0:1,e);_>-1&&(w===0||w===1&&_>9)&&(f=Math.min(f,Math.sqrt(Math.max(0,_-.5))*2.4)),l.plan&&(f=Math.min(f,l.plan.next.lane===0?9:7.5)),!l.plan&&!this.exitValid(l.axis,l.dir,m)&&(f=Math.min(f,Math.sqrt(Math.max(0,_))*2))}for(let p of this.cars){if(p===l||p.mode!=="lane"||p.turn||p.axis!==l.axis||p.road!==l.road||p.dir!==l.dir||p.lane!==l.lane)continue;let _=(p.s-l.s)*l.dir;_>0&&_<45&&(f=Math.min(f,Math.max(0,_-7.5)*.9))}}let g=(m,p,_,w)=>{let M=m-l.x,T=p-l.z,C=M*d+T*u,R=Math.abs(M*u-T*d);return C>0&&C<32&&R<w?(f=Math.min(f,Math.max(0,C-_)*.85),!0):!1};g(o,a,6.5,2.6)?l.speed<1&&n.kmh<5&&(l.blockedTime+=t,l.blockedTime>2.5&&(l.blockedTime=-4,i?.(l))):l.blockedTime=Math.max(0,l.blockedTime-t);for(let m of this.peds)g(m.x,m.z,5,2.4);for(let m of this.cars)(m.mode!=="lane"||m.hit)&&m!==l&&g(m.x,m.z,7,2.6);let x=f>l.speed?3.2:9;if(l.speed+=Math.sign(f-l.speed)*Math.min(Math.abs(f-l.speed),x*t),l.braking=f<l.speed-.3||l.speed<.5&&f<.5,l.turn?(l.turn.t+=l.speed*t/l.turn.len,l.turn.t>=1&&(Object.assign(l,l.turn.next),l.turn=null,l.decided=null)):(l.s+=l.speed*l.dir*t,l.plan&&(l.s-l.plan.startS)*l.dir>=0&&(l.turn=l.plan,l.plan=null)),this.place(l),l.offset){let m=l.offset;if(m.t-=t/1.6,m.t<=0)l.offset=null;else{let p=m.t*m.t;l.x+=m.dx*p,l.z+=m.dz*p,l.heading+=m.dh*p}}l.vx=d*l.speed,l.vz=u*l.speed,l.wheelSpin-=l.speed*t/l.geo.type.wheelR}this.updateParked(t),this.collidePlayer(n),this.parkTimer-=t;let h=Math.hypot(o-(this.lastParkX??o),a-(this.lastParkZ??a))>60;(this.parkTimer<=0||h)&&(this.parkTimer=.5,this.lastParkX=o,this.lastParkZ=a,this.refreshParked(o,a))}chase(t,e,n){let i=n.x-t.x,r=n.z-t.z,o=Math.hypot(i,r),a=Math.min(o/35,1.1),c=n.x+n.vx*a,h=n.z+n.vz*a,l=Math.atan2(-(c-t.x),-(h-t.z)),f=10+t.speed*.6,d=w=>{let M=t.x-Math.sin(w)*f,T=t.z-Math.cos(w)*f;return(this.world?.colliders||[]).some(C=>Math.abs(M-C.x)<C.w+1.8&&Math.abs(T-C.z)<C.d+1.8)};if(d(l)){for(let w of[.5,-.5,1,-1,1.6,-1.6])if(!d(l+w)){l+=w;break}}let u=md(l-t.heading),g=1.9/(1+t.speed*.012);t.heading+=_e.clamp(u,-g*e,g*e);let x=Math.hypot(n.vx,n.vz),m=o>60?50:Math.min(52,x+10);Math.abs(u)>.9&&(m=Math.min(m,14)),o<9&&x<3&&(m=Math.min(m,2)),t.speed+=_e.clamp(m-t.speed,-14*e,9*e);let p=-Math.sin(t.heading),_=-Math.cos(t.heading);t.vx+=(p*t.speed-t.vx)*Math.min(1,e*5),t.vz+=(_*t.speed-t.vz)*Math.min(1,e*5),t.x+=t.vx*e,t.z+=t.vz*e,this.collideWorld(t),t.wheelSpin-=t.speed*e/t.geo.type.wheelR,t.braking=m<t.speed-1}collideWorld(t){let e=this.world?.colliders;if(e){for(let n of e){let i=n.w+1.1-Math.abs(t.x-n.x),r=n.d+1.1-Math.abs(t.z-n.z);i<=0||r<=0||(i<r?(t.x+=Math.sign(t.x-n.x)*i,t.vx*=-.2):(t.z+=Math.sign(t.z-n.z)*r,t.vz*=-.2),t.speed*=.6)}t.x=_e.clamp(t.x,We.minX+60,We.maxX),t.z=_e.clamp(t.z,We.minZ,We.maxZ)}}startChase(t){if(t.mode==="chase")return;t.mode="chase",t.turn=null,t.plan=null,t.hit=null,t.offset=null;let e=-Math.sin(t.heading),n=-Math.cos(t.heading);t.vx=e*t.speed,t.vz=n*t.speed}endChase(t){t.mode==="chase"&&(this.rejoinLane(t),t.speed=Math.min(t.speed,10))}dispatch(t,e,n){let i={position:n.position,fx:0,fz:0};n.getWorldDirection(kn);let r=Math.hypot(kn.x,kn.z)||1;i.fx=kn.x/r,i.fz=kn.z/r,this.spawnLane(t,e.x,e.z,110,240,i),this.startChase(t)}updateParked(t){for(let e of this.nearParked){if(!e.hit)continue;let n=e.hit;e.x+=n.vx*t,e.z+=n.vz*t,e.heading+=n.spin*t;let i=Math.exp(-2.4*t);n.vx*=i,n.vz*=i,n.spin*=i,Math.hypot(n.vx,n.vz)<.05&&Math.abs(n.spin)<.02&&(e.hit=null),this.writeCar(this.types[e.type],e.slot,e.x,e.z,e.heading,0)}}collidePlayer(t){let e=[-Math.sin(t.heading),-Math.cos(t.heading)],n=[...this.cars,...this.nearParked];this.lastHit=null;for(let i of n){let r=t.x-i.x,o=t.z-i.z;if(r*r+o*o>64)continue;let a=!!i.parked,c=[-Math.sin(i.heading),-Math.cos(i.heading)],l=(a?4.7:i.geo.type.length)/2-1.05;for(let f of[-1.3,1.3])for(let d of[-l,l]){let u=t.x+e[0]*f,g=t.z+e[1]*f,x=i.x+c[0]*d,m=i.z+c[1]*d,p=u-x,_=g-m,w=Math.hypot(p,_);if(w>2.15||w<1e-4)continue;p/=w,_/=w;let M=2.15-w;t.x+=p*M*.6,t.z+=_*M*.6;let T=a?i.hit?i.hit.vx:0:i.mode==="chase"?i.vx:i.hit?i.hit.vx:c[0]*i.speed,C=a?i.hit?i.hit.vz:0:i.mode==="chase"?i.vz:i.hit?i.hit.vz:c[1]*i.speed,R=(t.vx-T)*p+(t.vz-C)*_;if(R<0){let A=a?.55:.5,S=-1.3*R*A;t.vx+=S*p*(a?.8:1),t.vz+=S*_*(a?.8:1),t.impact=Math.max(t.impact,-R),this.lastHit={car:i,parked:a,police:!!i.police,speed:-R,x:(u+x)/2,z:(g+m)/2},t.registerHit?.(this.lastHit.x,this.lastHit.z,-R),(!t.contact||-R>t.contact.speed)&&(t.contact={x:this.lastHit.x,z:this.lastHit.z,speed:-R,nx:p,nz:_}),i.mode==="chase"?(i.vx-=S*p,i.vz-=S*_):(i.hit||(i.hit={vx:T,vz:C,spin:0,t:0}),i.hit.vx-=S*p,i.hit.vz-=S*_,i.hit.spin+=(pt()-.5)*Math.min(-R,20)*.25,i.hit.t=2.8,i.turn=null,i.plan=null)}else!i.hit&&!a&&i.mode!=="chase"&&(i.hit={vx:-p*1.5,vz:-_*1.5,spin:0,t:.6});i.x-=p*M*.4,i.z-=_*M*.4}}}sync(t,e,n=0){let i=0;this.cars.forEach((r,o)=>{let a=r.type,c=this.writeCar(a,r.slot,r.x,r.z,r.heading,r.wheelSpin);if(a.sign){let h=c.clone().multiply(new Dt().makeTranslation(0,a.roofY+.1,.1));a.sign.setMatrixAt(r.slot,h)}if(a.bar)for(let h=0;h<2;h++){let l=c.clone().multiply(new Dt().makeTranslation(h?.32:-.32,a.roofY+.09,.1));a.bar.setMatrixAt(r.slot*2+h,l);let f=r.mode==="chase"&&Math.sin(n*18+h*Math.PI)>0?1:0;a.bar.setColorAt(r.slot*2+h,f?h?oi.setRGB(.3,.5,6):oi.setRGB(6,.2,.15):oi.setRGB(.04,.04,.05))}a.parts.tail.setColorAt(r.slot,oi.setScalar(r.braking?4:1)),es.setFromAxisAngle(Io,r.heading),ri.compose(kn.set(r.x,.035,r.z),es,br),this.blobs.setMatrixAt(i++,ri),this.pools.setMatrixAt(o,ri)});for(let r of this.nearParked)es.setFromAxisAngle(Io,r.heading),ri.compose(kn.set(r.x,.035,r.z),es,br),this.blobs.setMatrixAt(i++,ri);es.setFromAxisAngle(Io,e.heading),ri.compose(kn.set(e.x,e.y+.035,e.z),es,br.set(1.05,1,1)),br.set(1,1,1),this.blobs.setMatrixAt(i++,ri),this.blobs.count=i,this.blobs.instanceMatrix.needsUpdate=!0,this.pools.instanceMatrix.needsUpdate=!0;for(let r of this.meshes)r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0);this.headMat.emissiveIntensity=1+t*8,this.tailMat.emissiveIntensity=.8+t*2.2,this.taxiSignMat.emissiveIntensity=.3+t*2.5,this.poolMat.opacity=t*.55}nearest(t,e){let n=1/0;for(let i of this.cars)n=Math.min(n,Math.hypot(i.x-t,i.z-e));return n}};var En=62.5,Sr=En*2,Ls=Sr*4,Ds=140,Ly=["#f1c7a5","#e0ac85","#c68b62","#a26a45","#7a4b2f","#5a3824"],Uy=["#e9e6dd","#20242a","#c23b2e","#2d5d8a","#f2c14e","#3f7a52","#7a4a8c","#e07a4a","#9fb3c4","#d4d0c4","#1f3b5c","#a83c62"],Ny=["#26303d","#1b1d20","#5c6b7a","#c9b79a","#3b4652","#6f5b45","#2f3b2c","#e5e1d6"];function Fy(){let s=[],t=(e,n,i,r,o,a)=>{e.translate(n,i,r);let c=e.index?e.toNonIndexed():e,h=c.attributes.position.count;c.setAttribute("aPart",new se(new Float32Array(h).fill(o),1)),c.setAttribute("aRegion",new se(new Float32Array(h).fill(a),1)),c.attributes.uv&&c.deleteAttribute("uv"),s.push(c)};for(let[e,n]of[[-1,1],[1,2]])t(new $t(.15,.82,.17),e*.1,.49,0,n,2),t(new $t(.16,.09,.28),e*.1,.045,-.05,n,3);t(new $t(.36,.2,.21),0,.96,0,0,2),t(new $t(.42,.56,.23),0,1.33,0,0,1),t(new fe(.05,.055,.1,8),0,1.65,0,0,0),t(new bn(.115,12,10),0,1.79,-.01,0,0),t(new bn(.122,12,8,0,Math.PI*2,0,Math.PI*.55),0,1.81,.012,0,4);for(let[e,n]of[[-1,3],[1,4]])t(new $t(.1,.34,.12),e*.27,1.43,0,n,1),t(new $t(.085,.3,.1),e*.275,1.11,0,n,0);return De(s)}var xd=`
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
}`;function zy(){let s=new Ot({color:16777215,roughness:.82});s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${xd}
attribute vec3 aShirt; attribute vec3 aPants; attribute vec4 aSkin; varying vec3 vPedCol;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
pedPose();
objectNormal = pedBody * (pedLimb * objectNormal);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed = pedTransform(transformed);
        vec3 hair = mix(vec3(0.05, 0.035, 0.02), vec3(0.55, 0.42, 0.22), aSkin.w);
        vPedCol = aRegion < 0.5 ? aSkin.rgb : aRegion < 1.5 ? aShirt : aRegion < 2.5 ? aPants : aRegion < 3.5 ? vec3(0.06) : hair;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPedCol;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = vPedCol;`)},s.customProgramCacheKey=()=>"pedestrian";let t=new or({depthPacking:Pl});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${xd}`).replace("#include <begin_vertex>",`#include <begin_vertex>
pedPose();
transformed = pedTransform(transformed);`)},t.customProgramCacheKey=()=>"pedestrian-depth",{mat:s,depth:t}}function eu(s,t,e,n){let i=(e%Ls+Ls)%Ls,r=Math.floor(i/Sr),o=i-r*Sr;return r===0?(n.x=s-En+o,n.z=t-En,n.dx=1,n.dz=0):r===1?(n.x=s+En,n.z=t-En+o,n.dx=0,n.dz=1):r===2?(n.x=s+En-o,n.z=t+En,n.dx=-1,n.dz=0):(n.x=s-En,n.z=t+En-o,n.dx=0,n.dz=-1),n}var cc=s=>s*Sr,yd=[[-1,-1],[1,-1],[1,1],[-1,1]];function vd(s,t){return yd.findIndex(([e,n])=>e===s&&n===t)}var hc=class{constructor(t){let{mat:e,depth:n}=zy(),i=Fy();this.aWalk=new Oe(new Float32Array(Ds*4),4).setUsage(Yn);let r=new Float32Array(Ds*3),o=new Float32Array(Ds*3),a=new Float32Array(Ds*4),c=new Tt;for(let h=0;h<Ds;h++)r.set(c.set(le(Uy)).toArray(),h*3),o.set(c.set(le(Ny)).toArray(),h*3),a.set([...c.set(le(Ly)).toArray(),pt()<.2?1:pt()*.4],h*4);i.setAttribute("aWalk",this.aWalk),i.setAttribute("aShirt",new Oe(r,3)),i.setAttribute("aPants",new Oe(o,3)),i.setAttribute("aSkin",new Oe(a,4)),this.mesh=new Qt(i,e,Ds),this.mesh.customDepthMaterial=n,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(Yn),this.mesh.name="pedestrians",t.add(this.mesh),this.peds=[],this.events=[],this.onRoad=[],this.tmp={x:0,z:0,dx:0,dz:0},this.m=new Dt,this.q=new de,this.e=new Ze(0,0,0,"YXZ");for(let h=0;h<Ds;h++){let l={i:h,scale:gt(.9,1.08)};this.place(l,-316,246,!0),this.peds.push(l)}}place(t,e,n,i=!1){let r=[];for(let c of gi)for(let h of xi)Math.hypot(c-e,h-n)<(i?330:300)&&r.push([c,h]);let[o,a]=r.length?le(r):[gi[0],xi[3]];Object.assign(t,{cx:o,cz:a,t:pt()*Ls,dir:xe(.5)?1:-1,speed:gt(1.05,1.55),lateral:gt(-.9,.9),state:xe(.12)?"idle":"walk",timer:gt(3,9),phase:pt()*6,amp:0,fall:0,lean:0,vx:0,vz:0,cross:null,x:0,z:0,heading:0}),this.pathPoint(t),t.x=t.px,t.z=t.pz}pathPoint(t){let e=eu(t.cx,t.cz,t.t,this.tmp),n=e.dz,i=-e.dx;t.px=e.x+n*t.lateral,t.pz=e.z+i*t.lateral,t.pdx=e.dx*t.dir,t.pdz=e.dz*t.dir}tryCross(t,e,n){let[i,r]=yd[e],o=[],a=t.cx+i*160,c=t.cz+r*160;if(gi.includes(a)&&o.push({axis:0,tx:a,tz:t.cz,corner:vd(-i,r)}),xi.includes(c)&&o.push({axis:1,tx:t.cx,tz:c,corner:vd(i,-r)}),!o.length||!xe(.45))return!1;let h=le(o),l=eu(t.cx,t.cz,cc(e),{}),f=eu(h.tx,h.tz,cc(h.corner),{});return t.cross={...h,ax:l.x,az:l.z,bx:f.x,bz:f.z,f:0,len:Math.hypot(f.x-l.x,f.z-l.z)},t.state="wait",t.timer=25,!0}update(t,e,n){let i=-Math.sin(n.heading),r=-Math.cos(n.heading),o=Math.cos(n.heading),a=-Math.sin(n.heading),c=Math.abs(n.speed);this.onRoad.length=0,this.events.length=0;let h=this.aWalk.array;for(let l of this.peds){Math.hypot(l.x-n.x,l.z-n.z)>330&&(l.state==="walk"||l.state==="idle")&&this.place(l,n.x,n.z);let f=0,d=l.x-n.x,u=l.z-n.z,g=d*i+u*r,x=d*o+u*a;if(c>4&&g>-1&&g<c*1.25+5&&Math.abs(x)<2.6&&Math.abs(n.y-jt)<2.5&&l.state!=="down"&&l.state!=="getup"&&l.state!=="dodge"){let M=Math.abs(x)>.2?Math.sign(x):xe(.5)?1:-1;l.vx=o*M*5.2+i*.6,l.vz=a*M*5.2+r*.6,l.state="dodge",l.timer=.55,l.resume=l.cross?"cross":"return"}let p=Math.hypot(l.x-(n.x+i*1.3*Math.sign(g||1)),l.z-(n.z+r*1.3*Math.sign(g||1)));if(l.state!=="down"&&l.state!=="getup"&&Math.hypot(d,u)<3&&p<1.4)if(c>5)l.state="down",l.timer=2.6,l.vx=n.vx*.35+o*Math.sign(x||1)*1.5,l.vz=n.vz*.35+a*Math.sign(x||1)*1.5,l.heading=Math.atan2(-l.vx,-l.vz)+Math.PI,this.events.push({type:"hit",x:l.x,z:l.z,speed:c});else{let M=Math.max(p,.01);l.x+=(l.x-n.x)/Math.hypot(d,u)*(1.4-M)*.5,l.z+=(l.z-n.z)/Math.hypot(d,u)*(1.4-M)*.5}switch(l.state){case"idle":{l.timer-=t,l.timer<=0&&(l.state="walk",l.timer=gt(6,20));break}case"walk":{f=l.speed;let M=l.t;l.t+=l.dir*l.speed*t;let T=Math.floor(M/Sr),C=Math.floor(l.t/Sr);if(T!==C){let R=((l.dir>0?C:T)%4+4)%4;this.tryCross(l,R,e)&&(l.t=cc(R))}l.t=(l.t%Ls+Ls)%Ls,l.timer-=t,l.timer<=0&&!l.cross&&(xe(.25)?(l.state="idle",l.timer=gt(2,6)):(l.timer=gt(5,20),xe(.2)&&(l.dir*=-1))),this.pathPoint(l),l.x+=(l.px-l.x)*Math.min(1,t*6),l.z+=(l.pz-l.z)*Math.min(1,t*6),l.heading=Math.atan2(-l.pdx,-l.pdz);break}case"wait":{l.timer-=t;let M=l.cross;l.x+=(M.ax-l.x)*Math.min(1,t*3),l.z+=(M.az-l.z)*Math.min(1,t*3),l.heading=Math.atan2(-(M.bx-M.ax),-(M.bz-M.az));let T=ts(M.axis,e),C=(e%28+28)%28,R=M.axis===0?C:(C+14)%28;T===0&&R>=13&&R<17?l.state="cross":l.timer<=0&&(l.cross=null,l.state="walk");break}case"cross":{let M=l.cross;f=1.85,M.f=Math.min(1,M.f+f*t/M.len);let T=M.ax+(M.bx-M.ax)*M.f,C=M.az+(M.bz-M.az)*M.f;l.x+=(T-l.x)*Math.min(1,t*8),l.z+=(C-l.z)*Math.min(1,t*8),l.heading=Math.atan2(-(M.bx-M.ax),-(M.bz-M.az)),this.onRoad.push(l),M.f>=1&&(l.cx=M.tx,l.cz=M.tz,l.t=cc(M.corner),l.cross=null,l.state="walk",l.dir=xe(.5)?1:-1);break}case"dodge":{f=5,l.x+=l.vx*t,l.z+=l.vz*t,l.vx*=Math.exp(-2.5*t),l.vz*=Math.exp(-2.5*t),l.heading=Math.atan2(-l.vx,-l.vz),l.timer-=t,l.timer<=0&&(l.state=l.resume==="cross"&&l.cross?"cross":"return");break}case"down":{l.x+=l.vx*t,l.z+=l.vz*t;let M=Math.exp(-3.5*t);l.vx*=M,l.vz*=M,l.fall=Math.min(1.5,l.fall+t*6),l.timer-=t,l.timer<=0&&(l.state="getup",l.timer=.9);break}case"getup":{l.fall=Math.max(0,l.fall-t*1.9),l.timer-=t,l.timer<=0&&(l.fall=0,l.state=l.cross?"cross":"return");break}case"return":{this.pathPoint(l);let M=l.px-l.x,T=l.pz-l.z,C=Math.hypot(M,T);if(f=2.2,C<.25){l.state="walk";break}l.x+=M/C*Math.min(C,f*t),l.z+=T/C*Math.min(C,f*t),l.heading=Math.atan2(-M,-T),Math.abs(l.x-l.cx)<En+1&&Math.abs(l.z-l.cz)<En+1;break}}(l.state==="dodge"||l.state==="return")&&(Math.abs(l.x-l.cx)>En+3||Math.abs(l.z-l.cz)>En+3)&&this.onRoad.push(l);let _=l.state==="down"||l.state==="getup"?0:f;l.amp+=((_>.1?Math.min(.45+_*.12,1.05):0)-l.amp)*Math.min(1,t*6),l.phase+=t*(_>.1?3.2+_*1.6:0),l.lean+=((_>3?.18:.02)-l.lean)*Math.min(1,t*5),h[l.i*4]=l.phase,h[l.i*4+1]=l.amp,h[l.i*4+2]=l.lean,h[l.i*4+3]=l.fall;let w=l.state==="cross"||l.state==="down"||l.state==="dodge"||l.state==="getup"?Math.abs(l.x-l.cx)<En+4.5&&Math.abs(l.z-l.cz)<En+4.5?jt:.02:jt;this.q.setFromEuler(this.e.set(0,l.heading,0)),this.m.compose(new L(l.x,w,l.z),this.q,new L(l.scale,l.scale,l.scale)),this.mesh.setMatrixAt(l.i,this.m)}this.mesh.instanceMatrix.needsUpdate=!0,this.aWalk.needsUpdate=!0}};var Oy=`
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
}`,By=`
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
}`,ky=`
uniform sampler2D map;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor * t.a * vAlpha, 1.0);
}`,Us=class{constructor(t,e,{texture:n,additive:i=!1,drag:r=1.5,gravity:o=0,grow:a=1.5}){this.max=e,this.drag=r,this.gravity=o,this.grow=a,this.count=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.rot=new Float32Array(e),this.spin=new Float32Array(e),this.col=new Float32Array(e*3);let c=new ro,h=new Ce(1,1);c.index=h.index,c.setAttribute("position",h.attributes.position),c.setAttribute("uv",h.attributes.uv),this.aPos=new Oe(new Float32Array(e*3),3).setUsage(Yn),this.aData=new Oe(new Float32Array(e*4),4).setUsage(Yn),this.aColor=new Oe(new Float32Array(e*3),3).setUsage(Yn),c.setAttribute("aPos",this.aPos),c.setAttribute("aData",this.aData),c.setAttribute("aColor",this.aColor),c.instanceCount=0,this.uniforms={map:{value:n},light:{value:new Tt(1,1,1)}};let l=new ve({uniforms:this.uniforms,vertexShader:Oy,fragmentShader:i?ky:By,transparent:!0,depthWrite:!1,blending:i?Tn:Ai});this.mesh=new Ut(c,l),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i?6:5,this.mesh.userData.noAO=!0,this.mesh.layers.set(1),this.geo=c,t.add(this.mesh)}emit(t,e,n,i,r,o,a,c,h,l=1,f=1,d=1){let u=this.count;if(u>=this.max){let g=0;for(let x=1;x<this.max;x++)this.life[x]<this.life[g]&&(g=x);u=g}else this.count++;this.p.set([t,e,n],u*3),this.v.set([i,r,o],u*3),this.col.set([l,f,d],u*3),this.life[u]=this.maxLife[u]=c,this.size[u]=a,this.alpha[u]=h,this.rot[u]=pt()*Math.PI*2,this.spin[u]=(pt()-.5)*1.2}update(t){let e=Math.exp(-this.drag*t),n=0;for(let i=0;i<this.count;i++){if(this.life[i]-=t,this.life[i]<=0)continue;if(n!==i){for(let[c,h]of[[this.p,3],[this.v,3],[this.col,3]])c.copyWithin(n*h,i*h,i*h+h);this.life[n]=this.life[i],this.maxLife[n]=this.maxLife[i],this.size[n]=this.size[i],this.alpha[n]=this.alpha[i],this.rot[n]=this.rot[i],this.spin[n]=this.spin[i]}let r=n*3;this.v[r]*=e,this.v[r+1]=this.v[r+1]*e+this.gravity*t,this.v[r+2]*=e,this.p[r]+=this.v[r]*t,this.p[r+1]+=this.v[r+1]*t,this.p[r+2]+=this.v[r+2]*t,this.rot[n]+=this.spin[n]*t;let o=1-this.life[n]/this.maxLife[n],a=Math.min(o*6,1)*(1-o)*(1-o);this.aPos.array.set([this.p[r],this.p[r+1],this.p[r+2]],r),this.aData.array.set([this.size[n]*(1+o*this.grow),this.alpha[n]*a,this.rot[n],o],n*4),this.aColor.array.set([this.col[r],this.col[r+1],this.col[r+2]],r),n++}this.count=n,this.geo.instanceCount=n,this.aPos.needsUpdate=this.aData.needsUpdate=this.aColor.needsUpdate=!0}};function _d(s,t){let e=Be(t,128,128,(i,r,o)=>{let a=i.createImageData(r,o);for(let c=0;c<o;c++)for(let h=0;h<r;h++){let l=(h-r/2)/(r/2),f=(c-o/2)/(o/2),d=Math.sqrt(l*l+f*f),u=.65+.35*Math.sin(h*.31+Math.sin(c*.23)*3)*Math.sin(c*.27+Math.cos(h*.19)*2),g=Math.max(0,1-d)**1.6*u,x=(c*r+h)*4;a.data[x]=a.data[x+1]=a.data[x+2]=200+u*55,a.data[x+3]=Math.min(255,g*255)}i.putImageData(a,0,0)},{srgb:!1}),n=Be(t,64,64,(i,r,o)=>{let a=i.createRadialGradient(r/2,o/2,0,r/2,o/2,r/2);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,255,255,0.6)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,r,o)},{srgb:!1});return{smoke:new Us(s,420,{texture:e,drag:1.1,gravity:.35,grow:2.6}),dust:new Us(s,200,{texture:e,drag:1.6,gravity:-.2,grow:2}),sparks:new Us(s,160,{texture:n,additive:!0,drag:.6,gravity:-9.8,grow:-.6}),flames:new Us(s,160,{texture:n,additive:!0,drag:3,gravity:.5,grow:-.4}),water:new Us(s,360,{texture:e,drag:.35,gravity:-9.8,grow:1.6})}}var uc=class{constructor(t,e=900){this.max=e,this.index=0;let n=new Ce(1,1);n.rotateX(-Math.PI/2),this.mat=new Ot({color:328965,transparent:!0,opacity:.55,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),this.mesh=new Qt(n,this.mat,e),this.mesh.instanceMatrix.setUsage(Yn),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.renderOrder=1,this.mesh.userData.noAO=!0;let i=new Dt().makeScale(0,0,0);for(let r=0;r<e;r++)this.mesh.setMatrixAt(r,i);this.last=new Map,t.add(this.mesh),this.m=new Dt,this.q=new de,this.v=new L,this.s=new L,this.up=new L(0,1,0)}add(t,e,n,i,r,o=.26){let a=this.last.get(t);if(!r){this.last.delete(t);return}if(a){let c=e-a[0],h=i-a[2],l=Math.hypot(c,h);if(l<.35)return;l<4&&(this.q.setFromAxisAngle(this.up,Math.atan2(c,h)),this.m.compose(this.v.set((e+a[0])/2,n+.03,(i+a[2])/2),this.q,this.s.set(o,1,l+.05)),this.mesh.setMatrixAt(this.index,this.m),this.index=(this.index+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0)}this.last.set(t,[e,n,i])}};var Do=_e.damp,nu=["CHASE CAMERA","FAR CHASE CAMERA","HOOD CAMERA","CINEMATIC CAMERA"],fc=class{constructor(t){this.camera=t,this.mode=0,this.pos=new L,this.look=new L,this.desired=new L,this.target=new L,this.yaw=0,this.shake=0,this.cine=null,this.cineTimer=0,this.baseFov=55,this.rumble=0,this.clock=0}snap(t){this.yaw=t.heading,this.cine=null,this.compute(t,0),this.pos.copy(this.desired),this.look.copy(this.target),this.apply(0)}compute(t,e){let n=Math.min(Math.abs(t.speed)/55,1),i=Math.hypot(t.vx,t.vz)>4?Math.atan2(-t.vx,-t.vz):t.heading,r=t.heading+Md(i-t.heading)*.35;t.speed<-1&&(r=t.heading),this.yaw=e?this.yaw+Md(r-this.yaw)*(1-Math.exp(-4.5*e)):r;let o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=t.group.position;if(this.mode===2){let h=Math.sin(t.heading),l=Math.cos(t.heading);this.desired.set(c.x-h*.15,c.y+1.18,c.z-l*.15),this.target.set(c.x-h*30,c.y+.9,c.z-l*30)}else if(this.mode===3)this.cinematic(t,e);else{let h=this.mode===1,l=(h?11.5:7.4)+n*1.6,f=(h?4.6:2.45)+n*.25;this.desired.set(c.x+o*l,c.y+f,c.z+a*l),this.target.set(c.x-o*6,c.y+1.15,c.z-a*6)}}cinematic(t,e){let n=t.group.position;this.cineTimer-=e;let i=-Math.sin(t.heading),r=-Math.cos(t.heading);if(!this.cine||this.cine.distanceTo(n)>70||this.cineTimer<=0){let a=Math.random()<.5?-1:1,c=28+Math.abs(t.speed)*1.6;this.cine=new L(n.x+i*c+r*a*7,n.y+.7+Math.random()*2.5,n.z+r*c-i*a*7),this.cineTimer=7,this.pos.copy(this.cine)}this.desired.copy(this.cine),this.target.set(n.x,n.y+.8,n.z)}apply(t){let e=this.camera;if(e.position.copy(this.pos),this.shake>.001){let n=this.shake;e.position.x+=(Math.random()-.5)*n,e.position.y+=(Math.random()-.5)*n,e.position.z+=(Math.random()-.5)*n,this.shake=Do(this.shake,0,6,t||.016)}if(this.rumble>5e-4){let n=this.clock,i=this.rumble;e.position.y+=(Math.sin(n*37)*.6+Math.sin(n*61.3)*.4)*i,e.position.x+=(Math.sin(n*29.1+1.3)*.5+Math.sin(n*53.7)*.3)*i*.6}e.lookAt(this.look)}update(t,e){this.compute(t,e),this.mode===2?(this.pos.copy(this.desired),this.look.copy(this.target)):this.mode===3?(this.pos.lerp(this.desired,1-Math.exp(-3*e)),this.look.lerp(this.target,1-Math.exp(-10*e))):(this.pos.x=Do(this.pos.x,this.desired.x,9,e),this.pos.z=Do(this.pos.z,this.desired.z,9,e),this.pos.y=Do(this.pos.y,this.desired.y,6,e),this.look.lerp(this.target,1-Math.exp(-12*e)));let n=Math.min(Math.abs(t.speed)/60,1)*12,i=(this.mode===2?68:this.mode===3?40:this.baseFov)+(this.mode===3?0:n+(t.boosting?7:0));this.camera.fov=Do(this.camera.fov,i,3,e),this.camera.updateProjectionMatrix(),this.clock+=e;let r=_e.clamp((Math.abs(t.speed)-26)/40,0,1),o=t.surface==="road"?1:2.2;this.rumble=this.mode===3?0:(r*.02+(t.boosting?.014:0))*o*(this.mode===2?.6:1),t.boosting&&(this.shake=Math.max(this.shake,.02)),this.apply(e)}orbit(t,e){let n=t.group.position,i=2.25+Math.sin(e*.05)*.5;this.camera.position.set(n.x+Math.sin(i)*9.5,n.y+1.6+Math.sin(e*.11)*.25,n.z+Math.cos(i)*9.5),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.camera.lookAt(n.x-1.5,n.y+1.1,n.z-2)}};function Md(s){return Math.atan2(Math.sin(s),Math.cos(s))}var $n=[];for(let s=0;s<Kt.length;s++)for(let t=0;t<Jt.length;t++)$n.push({x:Kt[s],z:Jt[t],i:s,j:t});var Lo=(s,t)=>s>=0&&t>=0&&s<Kt.length&&t<Jt.length?s*Jt.length+t:-1;function bd(s,t){let e=null;return Kt.forEach((n,i)=>{let r=Math.min(Math.max(t,Jt[0]),Jt[Jt.length-1]),o=Math.hypot(s-n,t-r);if(!e||o<e.d){let a=Jt.findIndex(h=>h>=r);a<0&&(a=Jt.length-1);let c=Jt[a]===r?a:Math.max(0,a-1);e={d:o,x:n,z:r,ends:[Lo(i,c),Lo(i,a)]}}}),Jt.forEach((n,i)=>{let r=Math.min(Math.max(s,Kt[0]),Kt[Kt.length-1]),o=Math.hypot(s-r,t-n);if(o<e.d){let a=Kt.findIndex(h=>h>=r);a<0&&(a=Kt.length-1);let c=Kt[a]===r?a:Math.max(0,a-1);e={d:o,x:r,z:n,ends:[Lo(c,i),Lo(a,i)]}}}),e}function iu(s,t,e,n){let i=bd(s,t),r=bd(e,n),o=$n.length,a=o,c=o+1,h=m=>m===a?i:m===c?r:$n[m],l=m=>{if(m===a)return i.ends.map(_=>[_,Math.hypot($n[_].x-i.x,$n[_].z-i.z)]);let p=[];if(m<o){let{i:_,j:w}=$n[m];for(let[M,T]of[[1,0],[-1,0],[0,1],[0,-1]]){let C=Lo(_+M,w+T);C>=0&&p.push([C,Math.hypot($n[C].x-$n[m].x,$n[C].z-$n[m].z)])}r.ends.includes(m)&&p.push([c,Math.hypot(r.x-$n[m].x,r.z-$n[m].z)])}return p};if(i.ends[0]===r.ends[0]&&i.ends[1]===r.ends[1])return[[s,t],[i.x,i.z],[r.x,r.z],[e,n]];let d=new Map([[a,0]]),u=new Map,g=new Set;for(;;){let m=-1,p=1/0;for(let[_,w]of d)!g.has(_)&&w<p&&(m=_,p=w);if(m<0||m===c)break;g.add(m);for(let[_,w]of l(m)){let M=p+w;M<(d.get(_)??1/0)&&(d.set(_,M),u.set(_,m))}}let x=[];for(let m=c;m!==void 0;m=u.get(m)){let p=h(m);if(x.unshift([p.x,p.z]),m===a)break}return x.unshift([s,t]),x.push([e,n]),x}function Sd(s){let t=0;for(let e=1;e<s.length;e++)t+=Math.hypot(s[e][0]-s[e-1][0],s[e][1]-s[e-1][1]);return t}var su=s=>document.getElementById(s),Te={x0:-760,x1:420,z0:-640,z1:640};function Hy(s){let t=document.createElement("canvas");t.width=Te.x1-Te.x0,t.height=Te.z1-Te.z0;let e=t.getContext("2d");e.translate(-Te.x0,-Te.z0),e.fillStyle="#16343f",e.fillRect(Te.x0,Te.z0,t.width,t.height),e.fillStyle="#1e2a2e",e.fillRect(Bn,Te.z0,Te.x1-Bn,t.height),e.fillStyle="#6d6047",e.fillRect(Bn,Te.z0,je-Bn,t.height),e.fillStyle="#2d4433",e.fillRect(je,Te.z0,Ye.to-je,t.height),e.fillStyle="#29353a";for(let n of gi)for(let i of xi)e.fillRect(n-Zn/2,i-Zn/2,Zn,Zn);e.fillStyle="#2f4a35";for(let[n,i]of[[-80,80],[240,400]])e.fillRect(n-55,i-55,110,110);e.fillStyle="#3e4f56";for(let n of s)e.fillRect(n.x-n.w,n.z-n.d,n.w*2,n.d*2);e.fillStyle="#5b6b6e";for(let n of Kt)e.fillRect(n-ee,Jt[0]-ee,ee*2,Jt[Jt.length-1]-Jt[0]+ee*2);for(let n of Jt)e.fillRect(Kt[0]-ee,n-ee,Kt[Kt.length-1]-Kt[0]+ee*2,ee*2);return e.fillStyle="#7d6a52",e.fillRect(ne.x1,ne.z-ne.halfWidth,ne.rampStart-ne.x1,ne.halfWidth*2),t}var dc=class{constructor(t){this.canvas=su("minimap"),this.ctx=this.canvas.getContext("2d"),this.mapImage=Hy(t),this.expanded=!1,this.route=null,this.routeKey="",this.routeAt=[0,0],this.raceRoute=null,this.els={};for(let e of["speed","gear","tach-fill","boost-fill","district","road-name","heading","race-time","checkpoint-distance","clock","rpm-readout"])this.els[e]=su(e);this.last={}}set(t,e){this.last[t]!==e&&(this.last[t]=e,this.els[t]&&(this.els[t].textContent=e))}updateRoute(t,e){let n=null;if(e.mode==="race"&&e.checkpoint<e.route.length?n=e.route[e.checkpoint]:e.waypoint&&(n=e.waypoint),!n){this.route=null,this.routeKey="";return}let i=n.join(",")+(e.mode==="race"?":"+e.checkpoint:""),r=Math.hypot(t.x-this.routeAt[0],t.z-this.routeAt[1]);if(i!==this.routeKey||r>12)if(this.route=iu(t.x,t.z,n[0],n[1]),this.routeKey=i,this.routeAt=[t.x,t.z],e.mode==="race"){let o=[];for(let a=e.checkpoint;a<e.route.length-1;a++)o.push(iu(...e.route[a],...e.route[a+1]));this.raceRoute=o}else this.raceRoute=null}get routeDistance(){return this.route?Sd(this.route):0}setWanted(t,e){let n=t+(e?"e":"");if(this.last.wanted===n)return;this.last.wanted=n;let i=su("wanted");i.classList.toggle("hidden",t===0),i.classList.toggle("evading",e),i.querySelectorAll("i").forEach((r,o)=>r.classList.toggle("on",o<t))}update(t,e,n,i,r){let o=Math.round(t.kmh);this.set("speed",String(o).padStart(3,"0")),this.set("gear",t.gear<0?"R":o<1&&!t.throttle?"N":String(t.gear));let a=t.def?.redline??7400;this.els["tach-fill"].style.width=Math.min(100,t.rpm/a*100).toFixed(1)+"%",this.els["tach-fill"].classList.toggle("redline",t.rpm>a-800),this.els["boost-fill"].style.width=t.nitro.toFixed(1)+"%",this.els["boost-fill"].classList.toggle("active",t.boosting),this.set("rpm-readout",(t.rpm/1e3).toFixed(1));let[c]=Zl(t.x,t.z);this.set("district",c),this.set("road-name",qf(t.x,t.z));let h=["N","NW","W","SW","S","SE","E","NE"];this.set("heading",h[(Math.round(t.heading/(Math.PI/4))%8+8)%8]),this.set("clock",i.clockLabel),this.updateRoute(t,e),e.mode==="race"&&(this.set("race-time",pc(e.raceTime)),e.route[e.checkpoint]&&this.set("checkpoint-distance",Math.round(this.routeDistance)+" M")),r&&this.setWanted(r.level,r.evading),this.drawMap(t,e,n,r)}pick(t,e,n){if(!this.expanded)return;let i=this.canvas.getBoundingClientRect(),r=(t-i.left)/i.width*this.canvas.width,o=(e-i.top)/i.height*this.canvas.height,a=Math.min(this.canvas.width/(Te.x1-Te.x0),this.canvas.height/(Te.z1-Te.z0)),c=(r-this.canvas.width/2)/a+(Te.x0+Te.x1)/2,h=(o-this.canvas.height/2)/a+(Te.z0+Te.z1)/2;n.waypoint&&Math.hypot(n.waypoint[0]-c,n.waypoint[1]-h)<30?n.waypoint=null:n.waypoint=[Math.min(Math.max(c,Kt[0]),Kt[Kt.length-1]),Math.min(Math.max(h,Jt[0]),Jt[Jt.length-1])],this.routeKey=""}polyline(t,e){t.beginPath(),e.forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke()}drawMap(t,e,n,i){let{canvas:r,ctx:o}=this;if(this.expanded){let d=r.getBoundingClientRect(),u=Math.min(devicePixelRatio||1,2),g=Math.round(d.width*u),x=Math.round(d.height*u);g>0&&x>0&&(r.width!==g||r.height!==x)&&(r.width=g,r.height=x)}let a=r.width,c=r.height;if(o.setTransform(1,0,0,1,0,0),o.fillStyle="#16343f",o.fillRect(0,0,a,c),o.save(),this.expanded){let d=Math.min(a/(Te.x1-Te.x0),c/(Te.z1-Te.z0));o.translate(a/2,c/2),o.scale(d,d),o.translate(-(Te.x0+Te.x1)/2,-(Te.z0+Te.z1)/2)}else o.translate(a/2,c*.62),o.scale(.85,.85),o.rotate(t.heading),o.translate(-t.x,-t.z);o.drawImage(this.mapImage,Te.x0,Te.z0);let h=this.expanded?1.6:1;if(o.lineJoin=o.lineCap="round",this.raceRoute){o.strokeStyle="#ffc68650",o.lineWidth=5*h;for(let d of this.raceRoute)this.polyline(o,d)}if(this.route){let d=e.mode==="race"?"#ffb46b":"#c690ff";o.strokeStyle="#0b141acc",o.lineWidth=11*h,this.polyline(o,this.route),o.strokeStyle=d,o.lineWidth=7*h,this.polyline(o,this.route)}o.fillStyle="#c9d3d6";for(let d of n.cars)d.police||o.fillRect(d.x-2.5,d.z-2.5,5,5);let l=Math.floor(performance.now()/180)%2;for(let d of n.police){let u=d.mode==="chase";u&&i&&(o.fillStyle=i.evading?"#3a6cff14":"#ff3a4a12",o.beginPath(),o.arc(d.x,d.z,i.sightRange(),0,Math.PI*2),o.fill()),o.fillStyle=u?l?"#ff4458":"#4a7dff":"#5f8dff",o.beginPath(),o.arc(d.x,d.z,(u?6:4)*h,0,Math.PI*2),o.fill()}if(e.mode==="race"&&e.checkpoint<e.route.length&&e.route.forEach(([d,u],g)=>{g<e.checkpoint||(o.beginPath(),o.arc(d,u,(g===e.checkpoint?11:6)*h,0,Math.PI*2),o.fillStyle=g===e.checkpoint?"#ffc686":"#ffc68677",o.fill(),this.expanded&&(o.fillStyle="#17212a",o.font="700 22px Barlow, Arial",o.textAlign="center",o.textBaseline="middle",o.fillText(String(g+1),d,u+1)))}),e.waypoint&&e.mode!=="race"){let[d,u]=e.waypoint;o.fillStyle="#c690ff",o.beginPath(),o.arc(d,u-14*h,9*h,Math.PI,0),o.lineTo(d,u),o.closePath(),o.fill(),o.fillStyle="#ffffff",o.beginPath(),o.arc(d,u-14*h,3.5*h,0,Math.PI*2),o.fill()}o.translate(t.x,t.z),o.rotate(-t.heading);let f=this.expanded?2.4:1;if(o.shadowColor="#000",o.shadowBlur=8,o.fillStyle="#ff8a52",o.beginPath(),o.moveTo(0,-13*f),o.lineTo(8*f,9*f),o.lineTo(0,4*f),o.lineTo(-8*f,9*f),o.closePath(),o.fill(),o.restore(),this.expanded&&(o.fillStyle="#fff4dccc",o.font="600 20px Barlow, Arial",o.textAlign="left",o.textBaseline="top",o.fillText(e.mode==="race"?"SUNSET RUN \xB7 FOLLOW THE ORANGE LINE":"CLICK THE MAP TO SET A WAYPOINT \xB7 CLICK IT AGAIN TO CLEAR",24,22),o.fillStyle="#5f8dff",o.fillRect(24,c-44,14,14),o.fillStyle="#c9d3d6",o.fillRect(170,c-44,14,14),o.fillStyle="#fff4dccc",o.fillText("POLICE",46,c-46),o.fillText("TRAFFIC",192,c-46)),!this.expanded){let d=t.heading,u=a/2+Math.sin(-d)*-(c*.42),g=c*.62-Math.cos(d)*(c*.42);o.fillStyle="#fff4dc",o.font="600 22px Barlow, Arial",o.textAlign="center",o.textBaseline="middle",o.fillText("N",Math.min(a-16,Math.max(16,u)),Math.min(c-16,Math.max(16,g)))}}setExpanded(t){this.expanded=t,this.canvas.width=t?1100:480,this.canvas.height=t?1100:360}};function pc(s){let t=Math.floor(s/60),e=Math.floor(s%60),n=Math.floor(s*100%100);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`}var ru={v8:{pulses:4,lump:.32,tone:1,intake:.5,sub:.6,rasp:.35,redline:7400},bigblock:{pulses:4,lump:.55,tone:.72,intake:.35,sub:.9,rasp:.5,redline:6400},v10:{pulses:5,lump:.14,tone:1.45,intake:.85,sub:.35,rasp:.25,redline:8800}},yi=[{id:"wave",name:"PACIFIC WAVE 101.4",genre:"Synthwave",bpm:100,swing:0,chords:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]},{id:"tide",name:"LOW TIDE 94.7",genre:"Lo-fi beats",bpm:82,swing:.16,chords:[[50,53,57,60,64],[55,59,62,65,69],[48,52,55,59,62],[57,61,64,67,70]]},{id:"funk",name:"KZRO 88.1 COAST FUNK",genre:"Funk",bpm:112,swing:.08,chords:[[52,55,59,62],[52,55,59,62],[57,61,64,67],[55,59,62,65]]}],Ui=s=>440*Math.pow(2,(s-69)/12),mc=class{constructor(){this.ctx=null,this.enabled=!1,this.engineDef=ru.v8,this.station=-1,this.wasBoosting=!1,this.scrapeLevel=0,this.nextAmbient={horn:6,bird:2,gull:4,cricket:1,siren:30},this.sirenLevel=0}unlock(){this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.start()}start(){if(this.ctx){this.ctx.resume();return}let t;try{t=new(window.AudioContext||window.webkitAudioContext)}catch{return}this.ctx=t;let e=this.master=t.createGain();e.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,e.connect(n).connect(t.destination);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=t.createBuffer(1,i,t.sampleRate),a=r.getChannelData(0),c=o.getChannelData(0),h=0;for(let u=0;u<i;u++)a[u]=Math.random()*2-1,h=(h+.02*a[u])/1.02,c[u]=h*3.5;this.noiseBuffer=r;let l=(u=r)=>{let g=t.createBufferSource();return g.buffer=u,g.loop=!0,g.start(0,Math.random()*1.5),g};this.reverb=t.createConvolver();let f=Math.floor(t.sampleRate*1.8),d=t.createBuffer(2,f,t.sampleRate);for(let u=0;u<2;u++){let g=d.getChannelData(u);for(let x=0;x<f;x++)g[x]=(Math.random()*2-1)*Math.pow(1-x/f,3.2)}this.reverb.buffer=d,this.reverbOut=t.createGain(),this.reverbOut.gain.value=.32,this.reverb.connect(this.reverbOut).connect(e),this.buildEngine(l),this.buildTires(l),this.buildWorld(l,o),this.buildRadio()}buildEngine(t){let e=this.ctx;this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.Q.value=2.2,this.engineDrive=e.createWaveShaper();let n=new Float32Array(1024);for(let c=0;c<1024;c++)n[c]=Math.tanh((c/1023*2-1)*2.6);this.engineDrive.curve=n;let i=new Float32Array(24),r=new Float32Array(24);for(let c=1;c<24;c++)r[c]=1/c*(c%2?1:.6)*Math.exp(-c*.08);let o=e.createPeriodicWave(i,r);this.oscs=[],this.subGain=e.createGain();for(let[c,h,l]of[[1,.55,"wave"],[1.006,.3,"sawtooth"],[.5,1,"sine"]]){let f=e.createOscillator();l==="wave"?f.setPeriodicWave(o):f.type=l;let d=e.createGain();d.gain.value=h,f.connect(d).connect(c===.5?this.subGain:this.engineDrive),f.start(),this.oscs.push([f,c])}this.subGain.connect(this.engineDrive);let a=e.createGain();this.lumpOsc=e.createOscillator(),this.lumpOsc.type="triangle",this.lumpDepth=e.createGain(),this.lumpOsc.connect(this.lumpDepth).connect(a.gain),this.lumpOsc.start(),this.engineDrive.connect(a).connect(this.engineFilter).connect(this.engineGain).connect(this.master),this.raspFilter=e.createBiquadFilter(),this.raspFilter.type="bandpass",this.raspFilter.Q.value=1.4,this.raspGain=e.createGain(),this.raspGain.gain.value=0,t().connect(this.raspFilter).connect(this.raspGain).connect(a),this.intake=e.createOscillator(),this.intake.type="square",this.intakeFilter=e.createBiquadFilter(),this.intakeFilter.type="bandpass",this.intakeFilter.Q.value=3,this.intakeGain=e.createGain(),this.intakeGain.gain.value=0,this.intake.connect(this.intakeFilter).connect(this.intakeGain).connect(this.engineGain),this.intake.start(),this.whine=e.createOscillator(),this.whine.type="sine",this.whineGain=e.createGain(),this.whineGain.gain.value=0,this.whine.connect(this.whineGain).connect(this.master),this.whine.start(),this.turbo=e.createOscillator(),this.turbo.type="sine",this.turboGain=e.createGain(),this.turboGain.gain.value=0,this.turbo.connect(this.turboGain).connect(this.master),this.turbo.start(),this.applyEngine()}setEngine(t){this.engineDef=ru[t]||ru.v8,this.applyEngine()}applyEngine(){if(!this.ctx)return;let t=this.engineDef,e=this.ctx.currentTime;this.lumpDepth.gain.setTargetAtTime(t.lump,e,.05),this.subGain.gain.setTargetAtTime(t.sub,e,.05)}buildTires(t){let e=this.ctx;this.screechFilter=e.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.value=1350,this.screechFilter.Q.value=5,this.screechGain=e.createGain(),this.screechGain.gain.value=0,t().connect(this.screechFilter).connect(this.screechGain).connect(this.master),this.squeal=e.createOscillator(),this.squeal.type="sawtooth";let n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=1100,n.Q.value=8,this.squealGain=e.createGain(),this.squealGain.gain.value=0;let i=e.createOscillator();i.frequency.value=9;let r=e.createGain();r.gain.value=22,i.connect(r).connect(this.squeal.frequency),i.start(),this.squeal.connect(n).connect(this.squealGain).connect(this.master),this.squeal.start(),this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windGain=e.createGain(),this.windGain.gain.value=0,t().connect(this.windFilter).connect(this.windGain).connect(this.master);let o=e.createBiquadFilter();o.type="highpass",o.frequency.value=2200,this.nitroGain=e.createGain(),this.nitroGain.gain.value=0,t().connect(o).connect(this.nitroGain).connect(this.master);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=220,this.roarGain=e.createGain(),this.roarGain.gain.value=0,t().connect(a).connect(this.roarGain).connect(this.master),this.scrapeFilter=e.createBiquadFilter(),this.scrapeFilter.type="bandpass",this.scrapeFilter.frequency.value=2400,this.scrapeFilter.Q.value=2.5,this.scrapeGain=e.createGain(),this.scrapeGain.gain.value=0,t().connect(this.scrapeFilter).connect(this.scrapeGain).connect(this.master)}buildWorld(t,e){let n=this.ctx,i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=520,this.surfGain=n.createGain(),this.surfGain.gain.value=0,t().connect(i).connect(this.surfGain).connect(this.master);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=380,this.humGain=n.createGain(),this.humGain.gain.value=0,t(e).connect(r).connect(this.humGain).connect(this.master),this.siren=n.createOscillator(),this.siren.type="sawtooth",this.siren.frequency.value=900;let o=n.createOscillator();o.frequency.value=.32;let a=n.createGain();a.gain.value=380,o.connect(a).connect(this.siren.frequency),o.start();let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=1100,c.Q.value=1.2,this.sirenGain=n.createGain(),this.sirenGain.gain.value=0,this.siren.connect(c).connect(this.sirenGain).connect(this.master),this.siren.start(),this.ambientBus=n.createGain(),this.ambientBus.gain.value=0,this.ambientBus.connect(this.master),this.ambientBus.connect(this.reverb)}setEnabled(t){this.enabled=t,t&&this.start(),this.ctx&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.1)}update(t){if(!this.ctx)return;let e=this.ctx.currentTime,{rpm:n,throttle:i,speed:r,slip:o,boosting:a,active:c,shoreDistance:h,time:l,gear:f=1,ratio:d=3,city:u=.5,night:g=0,nearTrees:x=0}=t,m=c?1:0,p=this.engineDef,_=n/60*p.pulses;for(let[S,E]of this.oscs)S.frequency.setTargetAtTime(_*E*.5,e,.025);this.lumpOsc.frequency.setTargetAtTime(n/120,e,.05);let w=n/p.redline,M=i*(.75+Math.min(Math.max(f,1),6)*.05);this.engineFilter.frequency.setTargetAtTime((220+n*.14+M*n*.3)*p.tone,e,.04),this.engineGain.gain.setTargetAtTime(m*(.065+M*.085+w*.05),e,.04),this.raspFilter.frequency.setTargetAtTime(_*3,e,.05),this.raspGain.gain.setTargetAtTime(m*p.rasp*(.15+i*.6)*.5,e,.05),this.intake.frequency.setTargetAtTime(_*2,e,.03),this.intakeFilter.frequency.setTargetAtTime(900+n*.35,e,.05),this.intakeGain.gain.setTargetAtTime(m*p.intake*i*w*w*.035,e,.05);let T=Math.abs(r);this.whine.frequency.setTargetAtTime(Math.max(40,T*d*14),e,.05),this.whineGain.gain.setTargetAtTime(m*(f>0&&f<=2?1:.25)*Math.min(T/20,1)*.006,e,.1),this.turbo.frequency.setTargetAtTime(1400+n*.55,e,.1),this.turboGain.gain.setTargetAtTime(m*i*w*w*.01,e,.1);let C=m*Math.min(Math.max(o-3,0)/10,1);this.screechGain.gain.setTargetAtTime(C*.075,e,.06),this.screechFilter.frequency.setTargetAtTime(1100+Math.min(o,20)*25,e,.1),this.squeal.frequency.setTargetAtTime(820+Math.min(o,20)*18,e,.08),this.squealGain.gain.setTargetAtTime(C*C*.05,e,.05),this.windGain.gain.setTargetAtTime(m*Math.min((T/60)**2,1)*.1,e,.2),this.windFilter.frequency.setTargetAtTime(400+T*18,e,.2),a&&!this.wasBoosting&&m&&this.whoosh(),this.wasBoosting=a,this.nitroGain.gain.setTargetAtTime(m*(a?.045:0),e,.06),this.roarGain.gain.setTargetAtTime(m*(a?.12:0),e,.1),this.scrapeGain.gain.setTargetAtTime(m*this.scrapeLevel*.09,e,.04),this.scrapeLevel*=.6;let R=Math.max(0,1-h/140),A=.55+.45*Math.sin(l*.7)*Math.sin(l*.23+1);this.surfGain.gain.setTargetAtTime(R*A*.11,e,.3),this.humGain.gain.setTargetAtTime(m*(.025+u*.05)*(1-g*.55),e,.6),this.ambientBus.gain.setTargetAtTime(m,e,.4),this.sirenGain.gain.setTargetAtTime(m*this.sirenLevel*.05,e,.15),m&&this.ambient(l,{city:u,night:g,surfNear:R,nearTrees:x}),this.radioActive=c,this.radioTick(c)}ambient(t,{city:e,night:n,surfNear:i,nearTrees:r}){let o=this.nextAmbient;t>o.horn&&(o.horn=t+7+Math.random()*16/(.4+e),this.horn(60+Math.random()*140,!0)),n<.5&&t>o.bird&&(o.bird=t+2+Math.random()*6,(r>.2||Math.random()<.3)&&this.chirp()),n<.5&&i>.3&&t>o.gull&&(o.gull=t+5+Math.random()*9,this.gull()),n>.5&&t>o.cricket&&(o.cricket=t+.7+Math.random()*1.6,this.cricket(e)),t>o.siren&&(o.siren=t+40+Math.random()*60,e>.4&&this.distantSiren())}burst(t,e,n,i,r=1,o=this.master,a=0){if(!this.ctx||!this.enabled)return;let c=this.ctx,h=c.currentTime+a,l=c.createBufferSource();l.buffer=this.noiseBuffer;let f=c.createBiquadFilter();f.type=e,f.frequency.value=n,f.Q.value=r;let d=c.createGain();d.gain.setValueAtTime(i,h),d.gain.exponentialRampToValueAtTime(1e-4,h+t),l.connect(f).connect(d).connect(o),l.start(h,Math.random()),l.stop(h+t+.05)}tone(t,e,n,i,{dest:r=this.master,when:o=0,attack:a=.005,slideTo:c=0,q:h=0,filter:l=0}={}){if(!this.ctx||!this.enabled)return;let f=this.ctx,d=f.currentTime+o,u=f.createOscillator();u.type=t,u.frequency.setValueAtTime(e,d),c&&u.frequency.exponentialRampToValueAtTime(c,d+n);let g=f.createGain();g.gain.setValueAtTime(1e-4,d),g.gain.linearRampToValueAtTime(i,d+a),g.gain.exponentialRampToValueAtTime(1e-4,d+n);let x=u;if(l){let m=f.createBiquadFilter();m.type="bandpass",m.frequency.value=l,m.Q.value=h||2,x=u.connect(m)}x.connect(g).connect(r),u.start(d),u.stop(d+n+.05)}impact(t){if(!this.ctx||!this.enabled)return;let e=this.ctx.currentTime;if(e-(this.lastImpact||0)<.07)return;this.lastImpact=e;let n=Math.min(t/20,1);this.burst(.35+n*.3,"lowpass",300+n*900,.25+n*.6),this.tone("sine",70+n*30,.25,.25*n+.08,{slideTo:40});for(let i of[1,2.76,5.4])this.tone("triangle",420*i*(.9+Math.random()*.2),.18+n*.4,.04*n/i+.01,{filter:420*i,q:12});if(n>.4)for(let i=0;i<6;i++)this.tone("sine",3e3+Math.random()*4e3,.08+Math.random()*.1,.02*n,{when:.02+Math.random()*.2})}scrape(t){this.scrapeLevel=Math.max(this.scrapeLevel,Math.min(t/25,1)),this.ctx&&this.scrapeFilter.frequency.setTargetAtTime(1800+Math.random()*1600,this.ctx.currentTime,.02)}whoosh(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuffer;let i=t.createBiquadFilter();i.type="bandpass",i.Q.value=1.6,i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(3800,e+.45);let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.32,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+.9),n.connect(i).connect(r).connect(this.master),n.start(e,Math.random()),n.stop(e+1)}backfire(){!this.ctx||!this.enabled||(this.burst(.09,"lowpass",900,.35),this.tone("square",60,.08,.08))}shift(t){t&&this.burst(.18,"highpass",1800,.07)}horn(t,e=!1){if(!this.ctx||!this.enabled)return;let n=this.ctx,i=n.currentTime,r=Math.min(.12,6/Math.max(t,6)*.12)*(e?.6:1),o=e?.3+Math.random()*.5:.45,a=n.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(r,i+.02),a.gain.setValueAtTime(r,i+o),a.gain.linearRampToValueAtTime(0,i+o+.1);let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=e?900:1800;let h=e?300+Math.random()*120:349;for(let l of[h,h*1.26]){let f=n.createOscillator();f.type="square",f.frequency.value=l,f.connect(c),f.start(i),f.stop(i+o+.15)}c.connect(a).connect(e?this.ambientBus:this.master)}chirp(){let t=2600+Math.random()*2200,e=2+Math.floor(Math.random()*4);for(let n=0;n<e;n++)this.tone("sine",t*(1+Math.random()*.1),.07,.012,{dest:this.ambientBus,when:n*.11,slideTo:t*1.35})}gull(){for(let t=0;t<2+Math.floor(Math.random()*2);t++)this.tone("sawtooth",1500,.32,.01,{dest:this.ambientBus,when:t*.38,slideTo:900,filter:1400,q:3})}cricket(t){let e=4300+Math.random()*500,n=.006*(1.2-t*.8);for(let i=0;i<3;i++)this.tone("sine",e,.035,n,{dest:this.ambientBus,when:i*.06})}distantSiren(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle";let i=t.createOscillator();i.frequency.value=.35;let r=t.createGain();r.gain.value=220,n.frequency.value=780,i.connect(r).connect(n.frequency);let o=t.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.012,e+2),o.gain.linearRampToValueAtTime(0,e+8),n.connect(o).connect(this.ambientBus),n.start(e),i.start(e),n.stop(e+8.2),i.stop(e+8.2)}setSiren(t){this.sirenLevel=t}chime(t=!1){if(!this.ctx||!this.enabled)return;let e=this.ctx,n=e.currentTime;(t?[523.25,659.25,783.99,1046.5]:[659.25,987.77]).forEach((r,o)=>{let a=e.createOscillator();a.type="triangle",a.frequency.value=r;let c=e.createGain(),h=n+o*.09;c.gain.setValueAtTime(0,h),c.gain.linearRampToValueAtTime(.12,h+.01),c.gain.exponentialRampToValueAtTime(1e-4,h+.6),a.connect(c).connect(this.master),a.start(h),a.stop(h+.65)})}countBeep(t=!1){this.tone("square",t?880:440,t?.5:.18,.06,{filter:t?1800:900,q:1})}buildRadio(){let t=this.ctx;this.radioGain=t.createGain(),this.radioGain.gain.value=0;let e=t.createBiquadFilter();e.type="highpass",e.frequency.value=55;let n=t.createBiquadFilter();n.type="highshelf",n.frequency.value=7e3,n.gain.value=-5,this.radioIn=t.createGain(),this.radioIn.connect(e).connect(n).connect(this.radioGain).connect(this.master),this.radioSend=t.createGain(),this.radioSend.gain.value=.5,this.radioSend.connect(this.reverb),this.radioStep=0,this.radioNext=0,this.radioActive=!1,setInterval(()=>this.radioTick(this.radioActive),40)}get stationName(){return this.station<0?"RADIO OFF":yi[this.station].name}setStation(t){this.station=t,this.ctx&&(this.radioStep=0,this.radioNext=this.ctx.currentTime+.25,this.burst(.28,"bandpass",2200,.08,.7))}nextStation(){return this.setStation(this.station+1>=yi.length?-1:this.station+1),this.stationName}radioTick(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=t&&this.station>=0&&this.enabled;if(this.radioGain.gain.setTargetAtTime(n?.75:0,e,.15),!n){this.radioNext=0;return}let i=yi[this.station],r=60/i.bpm/4;for(this.radioNext<e&&(this.radioNext=e+.05);this.radioNext<e+.3;){let o=this.radioStep,a=o%2?i.swing*r:0;this.playStep(i,o,this.radioNext+a,r),this.radioNext+=r,this.radioStep++}}playStep(t,e,n,i){let r=Math.max(0,n-this.ctx.currentTime),o=Math.floor(e/16),a=e%16,c=t.chords[o%t.chords.length],h=c[0],l=u=>{let g=Math.sin((e+u*31.7)*12.9898+this.station*7.1)*43758.5453;return g-Math.floor(g)},f=this.radioIn,d=this.radioSend;if(t.id==="wave"){a%4===0&&this.kick(r,.5),(a===4||a===12)&&this.snare(r,.28,!0),a%2===0&&this.hat(r,.05,!1),a%2===0&&this.synth("sawtooth",Ui(h-24),i*1.8,.11,r,{cutoff:700,env:900});let u=[0,1,2,1,0,2,1,2];if(this.synth("square",Ui(c[u[a%8]]+12),i*.9,.03,r,{cutoff:2400,env:1200,send:.6}),a===0)for(let g of c)this.synth("sawtooth",Ui(g),i*15,.022,r,{cutoff:1300,attack:.4,detune:9,send:1});if(o%4>=2&&[0,3,6,10,12].includes(a)){let g=[0,3,5,7,10,12];this.synth("sawtooth",Ui(h+12+g[Math.floor(l(1)*g.length)]),i*2.6,.035,r,{cutoff:3e3,env:0,send:.8,detune:6})}}else if(t.id==="tide"){if((a===0||a===7||a===10)&&this.kick(r,.42),(a===4||a===12)&&this.snare(r,.16,!1),a%2===0&&this.hat(r,.025+l(2)*.015,!1),a===0||a===6)for(let u of c)this.synth("sine",Ui(u),i*7,.03,r+l(3)*.02,{cutoff:1800,attack:.01,trem:!0,send:.7});(a===0||a===10)&&this.synth("sine",Ui(h-12),i*5,.16,r,{cutoff:400}),l(4)<.35&&this.burst(.01,"highpass",3e3,.02+l(5)*.03,1,f,r),a===0&&this.burst(i*16,"bandpass",1200,.004,.4,f,r)}else{(a===0||a===6||a===8||a===11)&&this.kick(r,.45),(a===4||a===12)&&this.snare(r,.24,!1),this.hat(r,a%4===2?.06:.03,a%4===2);let g=[0,null,12,0,null,0,10,null,0,null,12,7,null,0,10,12][a];if(g!==null&&this.synth("square",Ui(h-24+g),i*.8,.09,r,{cutoff:500,env:1400}),[2,7,10,14].includes(a))for(let x of c.slice(1))this.synth("square",Ui(x+12),i*.5,.018,r,{cutoff:2600,env:2e3,q:6});if(o%8===7&&(a===0||a===3))for(let x of c)this.synth("sawtooth",Ui(x+12),i*2,.025,r,{cutoff:2200,send:.6,detune:12})}}synth(t,e,n,i,r,{cutoff:o=2e3,env:a=0,attack:c=.005,detune:h=0,send:l=0,trem:f=!1,q:d=1}={}){let u=this.ctx,g=u.currentTime+r,x=u.createBiquadFilter();x.type="lowpass",x.Q.value=d,x.frequency.setValueAtTime(o+a,g),a&&x.frequency.exponentialRampToValueAtTime(Math.max(o,60),g+Math.min(n,.3));let m=u.createGain();m.gain.setValueAtTime(1e-4,g),m.gain.linearRampToValueAtTime(i,g+c),m.gain.setValueAtTime(i,g+Math.max(c,n*.6)),m.gain.exponentialRampToValueAtTime(1e-4,g+n+.08);for(let _ of h?[-h,h]:[0]){let w=u.createOscillator();w.type=t,w.frequency.value=e,w.detune.value=_,w.connect(x),w.start(g),w.stop(g+n+.12)}let p=x.connect(m);if(f){let _=u.createGain(),w=u.createOscillator();w.frequency.value=4.5;let M=u.createGain();M.gain.value=.25,w.connect(M).connect(_.gain),w.start(g),w.stop(g+n+.12),p=p.connect(_)}if(p.connect(this.radioIn),l){let _=u.createGain();_.gain.value=l,p.connect(_).connect(this.radioSend)}}kick(t,e){let n=this.ctx,i=n.currentTime+t,r=n.createOscillator();r.frequency.setValueAtTime(140,i),r.frequency.exponentialRampToValueAtTime(42,i+.12);let o=n.createGain();o.gain.setValueAtTime(e,i),o.gain.exponentialRampToValueAtTime(1e-4,i+.38),r.connect(o).connect(this.radioIn),r.start(i),r.stop(i+.4)}snare(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=1400;let c=i.createGain(),h=n?.32:.16;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c),c.connect(this.radioIn),n&&c.connect(this.radioSend),o.start(r,Math.random()),o.stop(r+h+.05);let l=i.createOscillator();l.type="triangle",l.frequency.setValueAtTime(220,r),l.frequency.exponentialRampToValueAtTime(150,r+.08);let f=i.createGain();f.gain.setValueAtTime(e*.6,r),f.gain.exponentialRampToValueAtTime(1e-4,r+.1),l.connect(f).connect(this.radioIn),l.start(r),l.stop(r+.12)}hat(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=7500;let c=i.createGain(),h=n?.22:.045;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c).connect(this.radioIn),o.start(r,Math.random()),o.stop(r+h+.05)}};var gc=class{constructor(){this.keys=new Set,this.state={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},this.padButtons=new Set,this.onPadPress=null,this.touchSteer=null}clear(){this.keys.clear(),this.touchSteer=null}poll(){let t=this.keys,e=t.has("KeyW")||t.has("ArrowUp")?1:0,n=t.has("KeyS")||t.has("ArrowDown")?1:0,i=(t.has("KeyA")||t.has("ArrowLeft")?1:0)-(t.has("KeyD")||t.has("ArrowRight")?1:0),r=t.has("Space"),o=t.has("ShiftLeft")||t.has("ShiftRight");this.touchSteer!==null&&(i=this.touchSteer);let a=navigator.getGamepads?navigator.getGamepads():[];for(let c of a){if(!c||!c.connected)continue;let h=c.axes[0]||0;Math.abs(h)>.12&&(i=-Math.sign(h)*((Math.abs(h)-.12)/.88)**1.4);let l=c.buttons[7]?.value||0,f=c.buttons[6]?.value||0;e=Math.max(e,l),n=Math.max(n,f),r=r||!!c.buttons[0]?.pressed,o=o||!!c.buttons[1]?.pressed||!!c.buttons[2]?.pressed;for(let[d,u]of[[3,"camera"],[9,"pause"],[8,"map"],[5,"reset"]]){let g=!!c.buttons[d]?.pressed,x=c.index+":"+d;g&&!this.padButtons.has(x)&&this.onPadPress?.(u),g?this.padButtons.add(x):this.padButtons.delete(x)}}return Object.assign(this.state,{throttle:e,brake:n,steer:i,handbrake:r,nitro:o}),this.state}};var It=s=>document.getElementById(s),Vy={DOWNTOWN:1,"PALM DISTRICT":.65,SEAVIEW:.5,SOUTHBANK:.4,"OCEAN DRIVE":.3},xc=matchMedia("(pointer:coarse)").matches,Gy=xc&&Math.min(screen.width,screen.height)<600,tn={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{localStorage.setItem(s,t)}catch{}}};function Ed(s){It("loading").classList.add("hidden"),It("error").classList.remove("hidden"),console.error(s)}async function Wy(){let s;try{if(s=new Gl(It("world")),!s.renderer.capabilities.isWebGL2)throw new Error("WebGL 2 unavailable")}catch(N){Ed(N);return}let t=s.renderer,e=new us,n=new en(55,innerWidth/innerHeight,.1,3200);n.layers.enable(1),s.init(e,n);let i=N=>(It("loading-step").textContent=N,new Promise(b=>setTimeout(b,0)));await i("Painting the sky\u2026");let r=new Xl(t,e);await i("Paving the boulevards\u2026"),Yf(e,t),await i("Raising the skyline\u2026");let o=jf(e,t);await i("Rolling in the surf\u2026");let a=td(e,t);await i("Planting palms\u2026");let c=nd(e,t),h=new ic,l=id(e,t,a.pier.lamps,h),f=ud(e,t,h,l.lamps,c.trunkColliders.filter(N=>Math.abs(N.z)<600&&N.x<360));await i("Fueling up\u2026");let d=tn.get("pacific-car");Ps[d]||(d="coupe");let u=new jl(e,t,d),g=new lc(e,t),x=new hc(e),m=_d(e,t),p=new uc(e),_=new Ie,w=wo(16761466,.9),M=new fe(1.1,1.1,40,20,1,!0);M.translate(0,20,0);let T=[-1,1].map(N=>{let b=new Ut(M,w);return b.userData.noAO=!0,b.layers.set(1),_.add(b),{mesh:b,side:N}}),C=new qe({color:new Tt(3,1.8,.8),transparent:!0,opacity:.8,depthWrite:!1,blending:Tn}),R=new Ut(new Qr(Yl-.6,Yl,72),C);R.rotation.x=-Math.PI/2,R.position.y=.06,R.userData.noAO=!0,_.add(R);let A=new Ut(new ui(1.6,2.6,3),new qe({color:new Tt(4,2.4,1.1)}));A.rotation.z=Math.PI,A.userData.noAO=!0,_.add(A),_.visible=!1,e.add(_);let S={colliders:o.colliders,boxes:[...o.colliders,...f.solids],circles:[...c.trunkColliders,...l.circles,...f.circles],piles:(ne.piles||[]).map(([N,b])=>({x:N,z:b,r:.45}))};g.world=S,Wf(e);let E=new oc(g,o.colliders),D=new fc(n),z=new dc(o.colliders),k=new mc,Z=new gc,P={state:"intro",paused:!1,mode:"free",raceTime:0,checkpoint:0,route:vi,countdown:0,splits:[],topSpeed:0,crashes:0,waypoint:null,lastX:hn.x,lastZ:hn.z,time:0,frame:0,flash:0},Y=tn.get("pacific-quality")||(Gy?"low":xc?"medium":"high");["ultra","high","medium","low"].includes(Y)||(Y="high");let W=tn.get("pacific-time")||"cycle",H=tn.get("pacific-road")||"auto";!(W in ql)&&W!=="cycle"&&(W="golden");function et(N){Y=N,tn.set("pacific-quality",N),s.setQuality(N);let b=s.quality;r.setShadowQuality(b.shadow,b.shadowRange),a.setReflections(b.reflections>0,b.reflections),It("quality").value=N}s.onResize=()=>a.resize(s.quality.reflections);let vt=!1;function bt(N){W=N,tn.set("pacific-time",N),r.cycle=N==="cycle",N!=="cycle"?r.setHours(ql[N]):vt||r.setHours(18.95),vt=vt||N==="cycle",r.envDirty=!0,It("time-select").value=N}u.reset(hn.x,hn.z,hn.heading);let Rt=tn.get("pacific-color");Rt&&ae(Rt),et(Y),bt(W);let te;function Vt(N){let b=It("toast");b.textContent=N,b.classList.add("show"),clearTimeout(te),te=setTimeout(()=>b.classList.remove("show"),2400)}function ae(N){u.setColor(N),tn.set("pacific-color",N),document.querySelectorAll(".swatch").forEach(b=>{let B=b.dataset.color===N;b.classList.toggle("active",B),b.setAttribute("aria-pressed",String(B))})}function at(N,b=!1){if(!Ps[N])return;d=N,tn.set("pacific-car",N);let B=Ps[N];if(u.key!==N){let{x:K,z:Q,heading:X}=u;u.setModel(N),u.reset(K,Q,X),D.snap?.(u)}It("car-name").textContent=B.name,It("car-blurb").textContent=B.blurb,It("hud-car").textContent=B.name,It("car-menu").value=N;for(let K of["speed","accel","grip"])It(`stat-${K}`).style.width=`${Math.round(B.stats[K]*100)}%`;k.setEngine?.(B.engine),b&&Vt(B.name)}let ct=N=>at(Ao[(Ao.indexOf(d)+N+Ao.length)%Ao.length]),Ct=[],nt=0;function dt({item:N,x:b,z:B,speed:K,nx:Q,nz:X}){P.time-nt>.08&&(k.impact(Math.min(2+K*.35,N.type==="lamp"?9:6)),nt=P.time),D.shake=Math.max(D.shake,N.type==="lamp"?.22:.08);let xt=N.sparks?14:4;for(let wt=0;wt<xt;wt++)N.sparks?m.sparks.emit(b,jt+.4+pt()*.5,B,Q*3+(pt()-.5)*6,1+pt()*4,X*3+(pt()-.5)*6,.1+pt()*.08,.3+pt()*.4,1,6,3.2,1):m.dust.emit(b,jt+.3,B,(pt()-.5)*3,pt()*2,(pt()-.5)*3,.5,.9,.35,.55,.5,.42);N.type==="hydrant"&&Ct.push({x:b,z:B,t:16}),(N.type==="lamp"||N.type==="hydrant")&&Ni("vandalism",b,B,1)}function St(){if(P.checkpoint>=vi.length)return;let[N,b]=vi[P.checkpoint];_.position.set(N,0,b);let B=Math.abs(N-On(Kt,N))<1;for(let K of T)K.mesh.position.set(B?K.side*(ee+1):0,0,B?0:K.side*(ee+1));It("checkpoint-count").textContent=`${P.checkpoint+1} / ${vi.length}`}function zt(N){P.mode=N,P.state="play",P.paused=!1,Z.clear();for(let b of["intro","intro-location","intro-footer"])It(b).classList.add("hidden");It("hud").classList.remove("hidden"),document.body.classList.add("playing"),document.body.classList.toggle("racing",N==="race"),It("race").classList.toggle("hidden",N!=="race"),It("start-trial").classList.toggle("hidden",N==="race"),It("mode-label").textContent=N==="race"?"TIME TRIAL":"FREE ROAM",It("mission-title").textContent=N==="race"?"Follow the afterglow.":"Take the long way home.",It("mission-subtitle").textContent=N==="race"?`Pass through all ${vi.length} golden checkpoints.`:"Explore Vista Pac\xEDfica at your own pace.",P.raceTime=0,P.checkpoint=0,P.splits=[],P.topSpeed=0,P.crashes=0,u.reset(hn.x,hn.z,hn.heading),P.lastX=u.x,P.lastZ=u.z,_.visible=N==="race",h.restoreAll(),E.reset(),St(),D.snap(u),k.setEnabled(I),P.countdown=N==="race"?3.6:0,Gt(N==="race"?"3":""),N!=="race"&&Vt("WELCOME TO VISTA PAC\xCDFICA")}let U="";function Gt(N){if(N===U)return;U=N;let b=It("countdown");b.textContent=N,b.classList.toggle("hidden",!N),b.classList.toggle("go",N==="GO"),b.classList.remove("pop"),b.offsetWidth,b.classList.add("pop"),N&&k.countBeep?.(N==="GO")}function Nt(N){return P.countdown<=0?!1:(P.countdown-=N,P.countdown>.6?Gt(String(Math.ceil(P.countdown-.6))):P.countdown>0?Gt("GO"):(Gt(""),P.countdown=0),P.countdown>.6)}function rt(){P.paused=!0,Z.clear(),k.chime(!0),It("final-time").textContent=pc(P.raceTime);let N=Number(tn.get("pacific-best"))||null;!N||P.raceTime<N?(tn.set("pacific-best",String(P.raceTime)),It("best-time").textContent="A new personal best. Make the coast remember it."):It("best-time").textContent="PERSONAL BEST  "+pc(N);let b=u.distance/Math.max(P.raceTime,.1)*3.6;It("result-stats").innerHTML=`<span><b>${Math.round(P.topSpeed*3.6)}</b> KM/H TOP</span><span><b>${Math.round(b)}</b> KM/H AVG</span><span><b>${P.crashes}</b> ${P.crashes===1?"CRASH":"CRASHES"}</span><span><b>${Ps[d].name}</b></span>`,It("result").showModal(),_.visible=!1}function it(N=!1){It("result").open||(P.paused=!0,Z.clear(),It("menu-title").textContent=N?"Make it your drive.":"Take a breather.",It("menu-description").textContent=N?"Tune the look of the coast to your machine.":"The coast will be right here.",It("resume").textContent=P.state==="intro"?"BACK TO THE COAST":"BACK TO THE DRIVE",It("back-title").classList.toggle("hidden",P.state==="intro"),It("restart-race").textContent=P.mode==="race"&&P.state==="play"?"RESTART SUNSET RUN":"START SUNSET RUN",It("menu").open||It("menu").showModal())}function $(){It("menu").close(),P.paused=!1,Z.clear()}function j(N){D.mode=N??(D.mode+1)%nu.length,It("camera-select").value=D.mode,P.state==="play"&&(Vt(nu[D.mode]),D.snap(u))}function ht(){let N=["golden","dusk","night","dawn","noon","cycle"],b=N[(N.indexOf(W)+1)%N.length];bt(b),Vt({golden:"GOLDEN HOUR",dusk:"BLUE HOUR",night:"MIDNIGHT",dawn:"FIRST LIGHT",noon:"HIGH NOON",cycle:"LIVE DAY CYCLE"}[b])}function kt(){P.state==="play"&&(z.setExpanded(!z.expanded),document.querySelector(".map-panel").classList.toggle("expanded",z.expanded),It("map-button").setAttribute("aria-label",z.expanded?"Close expanded map":"Expand map"))}function Lt(){P.mode==="race"?(P.raceTime=0,P.checkpoint=0,u.reset(hn.x,hn.z,hn.heading),St(),Vt("RUN RESTARTED")):(u.safeRespawn(),Vt("BACK ON THE ROAD")),P.lastX=u.x,P.lastZ=u.z,D.snap(u)}function y(){$(),P.state="intro",_.visible=!1,document.body.classList.remove("playing","racing"),It("hud").classList.add("hidden"),z.expanded&&v(!1);for(let N of["intro","intro-location","intro-footer"])It(N).classList.remove("hidden");u.reset(hn.x,hn.z,hn.heading)}function v(N){z.setExpanded(N),document.querySelector(".map-panel").classList.toggle("expanded",N)}let I=tn.get("pacific-sound")!=="off";function F(){It("sound").setAttribute("aria-label",I?"Mute sound":"Enable sound"),It("sound").querySelector("span").style.display=I?"none":"block"}F(),It("drive").onclick=()=>{Mt(),zt("free")},It("trial").onclick=()=>{Mt(),zt("race")},It("start-trial").onclick=()=>zt("race"),It("pause").onclick=()=>it(),It("settings").onclick=()=>it(!0),It("close-menu").onclick=$,It("resume").onclick=$,It("restart-race").onclick=()=>{$(),zt("race")},It("back-title").onclick=y,It("menu").addEventListener("cancel",N=>{N.preventDefault(),$()}),It("result").addEventListener("cancel",N=>N.preventDefault()),It("race-again").onclick=()=>{It("result").close(),zt("race")},It("free-roam").onclick=()=>{It("result").close(),zt("free")},It("quality").onchange=N=>et(N.target.value),It("time-select").onchange=N=>bt(N.target.value),It("road-select").value=H,It("road-select").onchange=N=>{H=N.target.value,tn.set("pacific-road",H)},It("camera-select").onchange=N=>j(Number(N.target.value)),It("sound").onclick=()=>{I=!I,tn.set("pacific-sound",I?"on":"off"),k.setEnabled(I&&P.state==="play"),I&&k.start(),F(),Vt(I?"SOUND ON":"SOUND OFF")},It("map-button").onclick=kt,It("minimap").addEventListener("click",N=>z.pick(N.clientX,N.clientY,P));for(let N of document.querySelectorAll(".swatch"))N.onclick=()=>ae(N.dataset.color);function V(N,b=!0){k.setStation(N),tn.set("pacific-radio",String(N)),It("radio-select").value=String(N),It("radio-name").textContent=N<0?"OFF":yi[N].name,It("radio-genre").textContent=N<0?"Q TO TUNE":yi[N].genre.toUpperCase(),document.querySelector(".radio").classList.toggle("off",N<0),b&&P.state==="play"&&Vt(N<0?"RADIO OFF":`\u266A ${yi[N].name}`)}It("radio-select").onchange=N=>V(Number(N.target.value),!1);function O(N){u.assist=N!=="sport",tn.set("pacific-handling",u.assist?"easy":"sport"),It("handling-select").value=u.assist?"easy":"sport"}It("handling-select").onchange=N=>{O(N.target.value),P.state==="play"&&Vt(u.assist?"EASY HANDLING":"SPORT HANDLING")},O(tn.get("pacific-handling")||"easy");let tt=tn.get("pacific-fps")==="on",q=It("fps"),st={frames:0,time:0,worst:0};function ut(N){tt=N,tn.set("pacific-fps",N?"on":"off"),It("fps-select").value=N?"on":"off",q.classList.toggle("hidden",!N)}It("fps-select").onchange=N=>ut(N.target.value==="on"),ut(tt);let J=Number(tn.get("pacific-radio")??0);V(Number.isInteger(J)&&J<yi.length?J:0,!1);let ft=()=>k.unlock();for(let N of["pointerdown","keydown","touchend","click"])addEventListener(N,ft,{once:!0});It("car-prev").onclick=()=>ct(-1),It("car-next").onclick=()=>ct(1),It("car-menu").onchange=N=>at(N.target.value,P.state==="play"),at(d);let mt=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);addEventListener("keydown",N=>{if(N.target.tagName!=="SELECT"&&(mt.has(N.code)&&N.preventDefault(),!N.repeat)){if(N.code==="Escape"){N.preventDefault(),It("menu").open?$():P.state==="play"&&it();return}if(N.code==="Enter"&&P.state==="intro"&&!P.paused){zt("free");return}if(P.state==="intro"&&!P.paused&&(N.code==="ArrowLeft"||N.code==="ArrowRight")){ct(N.code==="ArrowLeft"?-1:1);return}if(N.code==="KeyT"&&!P.paused){ht();return}if(!(P.state!=="play"||P.paused)){if(N.code==="KeyP")return it();if(N.code==="KeyR")return Lt();if(N.code==="KeyC")return j();if(N.code==="KeyM")return kt();if(N.code==="KeyH"){k.horn(3);return}if(N.code==="KeyQ"){V(k.station+1>=yi.length?-1:k.station+1);return}Z.keys.add(N.code)}}}),addEventListener("keyup",N=>Z.keys.delete(N.code)),addEventListener("blur",()=>{Z.clear(),P.state==="play"&&!P.paused&&it()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(Z.clear(),P.state==="play"&&!P.paused&&it())}),Z.onPadPress=N=>{if(N==="pause")return P.paused?$():P.state==="play"?it():zt("free");P.state!=="play"||P.paused||(N==="camera"&&j(),N==="map"&&kt(),N==="reset"&&Lt())};for(let N of document.querySelectorAll("[data-key]")){let b=()=>{Z.keys.delete(N.dataset.key),N.classList.remove("pressed")};N.addEventListener("pointerdown",B=>{B.preventDefault(),!P.paused&&(N.setPointerCapture(B.pointerId),Z.keys.add(N.dataset.key),N.classList.add("pressed"))}),N.addEventListener("pointerup",b),N.addEventListener("pointercancel",b),N.addEventListener("lostpointercapture",b)}addEventListener("resize",()=>s.applySize());let Et=It("steer-zone"),_t=It("steer-knob"),qt=null,G=0,lt=0,yt=62;Et.addEventListener("pointerdown",N=>{if(N.preventDefault(),P.paused||qt!==null)return;qt=N.pointerId,Et.setPointerCapture(N.pointerId);let b=Et.getBoundingClientRect();G=N.clientX,lt=N.clientY,Et.classList.add("active"),Et.style.setProperty("--sx",`${N.clientX-b.left}px`),Et.style.setProperty("--sy",`${N.clientY-b.top}px`),_t.style.transform="translate(-50%, -50%)",Z.touchSteer=0}),Et.addEventListener("pointermove",N=>{if(N.pointerId!==qt)return;let b=_e.clamp(N.clientX-G,-yt,yt),B=Math.max(0,Math.abs(b)/yt-.08)/.92;Z.touchSteer=-Math.sign(b)*Math.pow(B,1.3),_t.style.transform=`translate(calc(-50% + ${b}px), -50%)`});let Bt=N=>{N.pointerId===qt&&(qt=null,Z.touchSteer=null,Et.classList.remove("active"))};for(let N of["pointerup","pointercancel","lostpointercapture"])Et.addEventListener(N,Bt);It("touch-cam").onclick=()=>j(),It("touch-radio").onclick=()=>V(k.station+1>=yi.length?-1:k.station+1),It("touch-reset").onclick=()=>{P.state==="play"&&!P.paused&&Lt()},addEventListener("contextmenu",N=>{xc&&N.preventDefault()}),document.addEventListener("gesturestart",N=>N.preventDefault()),addEventListener("touchmove",N=>{P.state==="play"&&!N.target.closest("dialog, .map-panel.expanded")&&N.preventDefault()},{passive:!1});function Mt(){if(!xc)return;let N=document.documentElement,b=N.requestFullscreen||N.webkitRequestFullscreen;b&&!document.fullscreenElement&&Promise.resolve(b.call(N,{navigationUI:"hide"})).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{}),innerHeight>innerWidth&&setTimeout(()=>Vt("TURN YOUR PHONE SIDEWAYS"),2600)}let ot=new L,Wt=new L,ie=new L,we=0,Me="",Kn=It("world-clock"),Hn=document.querySelector(".sun-icon"),Uo=new L,ai=new Dt,Ns=new Dt,Er=!1;function No(N,b,B,K,Q,X,xt){let wt=0,Pt=2e3;for(let[At,Xt,Yt,Zt]of[[N,K,xt.x-xt.w/2,xt.x+xt.w/2],[b,Q,0,xt.h],[B,X,xt.z-xt.d/2,xt.z+xt.d/2]]){if(Math.abs(Xt)<1e-6){if(At<Yt||At>Zt)return!1;continue}let re=(Yt-At)/Xt,me=(Zt-At)/Xt;if(re>me&&([re,me]=[me,re]),wt=Math.max(wt,re),Pt=Math.min(Pt,me),wt>Pt)return!1}return!0}function Fs(){let N=r.sunDir,b=n.position;if(ie.copy(b).addScaledVector(N,1e3).project(n),r.elevation<-.5||ie.z>1)return 0;for(let K of o.buildingTops)if(No(b.x,b.y,b.z,N.x,N.y,N.z,K))return 0;for(let K=60;K<1600;K*=1.35)if(b.y+N.y*K<si(b.x+N.x*K,b.z+N.z*K))return 0;let B=Math.max(Math.abs(ie.x),Math.abs(ie.y));return _e.clamp(1.25-B,0,1)*_e.smoothstep(r.elevation,-.5,4)}function Fo(N){let b=Math.abs(u.speed)>3,B=u.slip>3.2&&b||u.wheelspin>.3,K=u.surface==="sand"&&u.y<.5;u.group.updateMatrixWorld();let Q=new Tt().copy(r.hemi.color).multiplyScalar(r.hemi.intensity*.55).add(new Tt().copy(r.sun.color).multiplyScalar(r.elevation>0?r.sun.intensity*.22:0));m.smoke.uniforms.light.value.copy(Q),m.dust.uniforms.light.value.copy(Q),m.water.uniforms.light.value.copy(Q).multiplyScalar(1.3);for(let Pt=Ct.length-1;Pt>=0;Pt--){let At=Ct[Pt];if(At.t-=N,At.t<=0){Ct.splice(Pt,1);continue}let Xt=Math.min(1,At.t/3)*70*N;for(let Yt=0;Yt<Xt+(pt()<Xt%1?1:0);Yt++)m.water.emit(At.x+(pt()-.5)*.2,jt+.3,At.z+(pt()-.5)*.2,(pt()-.5)*1.6,8.5+pt()*3.5,(pt()-.5)*1.6,.35+pt()*.25,1.5+pt()*.6,.5,.8,.88,.95)}u.wheels.forEach((Pt,At)=>{if(Pt.front)return;ot.set(Pt.x,.05,Pt.z).applyMatrix4(u.group.matrixWorld),p.add(At,ot.x,u.y,ot.z,!K&&(B||u.brake>0&&u.speed>14&&u.handbrake),.24);let Xt=Math.min(1,(u.slip-3)/9)+u.wheelspin;!K&&B&&pt()<Xt*60*N&&m.smoke.emit(ot.x,ot.y+.3,ot.z,u.vx*.15+(pt()-.5)*1.5,.6+pt(),u.vz*.15+(pt()-.5)*1.5,1.2+pt()*.8,2.2+pt()*1.2,.5*Math.min(1,Xt+.3),.85,.85,.86),K&&b&&pt()<Math.min(1,Math.abs(u.speed)/25)*40*N&&m.dust.emit(ot.x,ot.y+.2,ot.z,(pt()-.5)*2,.8+pt(),(pt()-.5)*2,.9+pt()*.6,1.4+pt(),.55,.78,.68,.52)});let X=Uo.set(Math.sin(u.heading),0,Math.cos(u.heading));for(let Pt of u.exhausts)if(ot.copy(Pt).applyMatrix4(u.group.matrixWorld),u.boosting)for(let At=0;At<2;At++){let Xt=pt(),Yt=pt()<.35,Zt=7+pt()*5;m.flames.emit(ot.x,ot.y,ot.z,u.vx+X.x*Zt,pt()*.4,u.vz+X.z*Zt,.3+pt()*.25,.1+pt()*.08,1,Yt?.6:1.4+Xt,Yt?1.1:.8+Xt*1.4,Yt?4.5:2.8)}else u.throttle===0&&u.rpm>u.def.redline*.6&&pt()<3*N&&(m.flames.emit(ot.x,ot.y,ot.z,u.vx+X.x*3,0,u.vz+X.z*3,.35,.07,1,2.2,1.1,.4),k.backfire?.());let xt=u.contact;if(xt&&u.impact>3){let Pt=Math.min(46,Math.floor(u.impact*2.2));for(let At=0;At<Pt;At++)m.sparks.emit(xt.x,u.y+.35+pt()*.4,xt.z,xt.nx*4+(pt()-.5)*9,1+pt()*5,xt.nz*4+(pt()-.5)*9,.12+pt()*.1,.4+pt()*.5,1,6,3.2,1);if(u.impact>4)for(let At=0;At<4;At++)m.dust.emit(xt.x,u.y+.5,xt.z,(pt()-.5)*2,pt(),(pt()-.5)*2,.6,1.1,.35,.6,.58,.55);k.impact(u.impact),D.shake=Math.max(D.shake,Math.min(.55,u.impact*.035))}let wt=u.scrape;if(wt){let Pt=Math.min(6,1+Math.floor(wt.speed/8));for(let At=0;At<Pt;At++)m.sparks.emit(wt.x,u.y+.3+pt()*.3,wt.z,-u.vx*.25+wt.nx*2+(pt()-.5)*3,.5+pt()*2.5,-u.vz*.25+wt.nz*2+(pt()-.5)*3,.1+pt()*.08,.25+pt()*.3,1,6,3,.9);k.scrape?.(wt.speed)}}function zs(N){if(P.mode!=="race"||P.checkpoint>=vi.length||P.countdown>.6)return;P.raceTime+=N,P.topSpeed=Math.max(P.topSpeed,Math.abs(u.speed));let[b,B]=vi[P.checkpoint],K=P.lastX,Q=P.lastZ,X=u.x-K,xt=u.z-Q,wt=X*X+xt*xt,Pt=wt?_e.clamp(((b-K)*X+(B-Q)*xt)/wt,0,1):0;Math.hypot(b-K-X*Pt,B-Q-xt*Pt)<Yl&&(P.checkpoint++,P.splits.push(P.raceTime),P.checkpoint===vi.length?rt():(St(),k.chime(),Vt(`CHECKPOINT ${P.checkpoint} / ${vi.length}`),P.flash=1))}function wr(N,b){u.contact=null,u.scrape=null,u.impact=0,x.update(N,P.time,u),g.peds=x.onRoad,g.update(N,P.time,u,X=>k.horn(Math.hypot(X.x-u.x,X.z-u.z)),n);for(let X of x.events)X.type==="hit"&&(k.impact(Math.min(X.speed,8)),D.shake=Math.max(D.shake,.08),P.state==="play"&&Ni("pedestrian",u.x,u.z,1));if(P.state!=="play")return;Nt(N)&&(b={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},u.vx=u.vz=0);let B=g.lastHit;B&&B.speed>4&&(P.crashes+=B.speed>7?1:0,B.police&&(B.car.mode!=="chase"||E.level<2)?Ni("police",B.x,B.z,1,!1):(!B.parked||B.speed>8)&&Ni("crash",B.x,B.z,1));let K=u.impact,Q=Math.ceil(N/(1/120));for(let X=0;X<Q&&(P.lastX=u.x,P.lastZ=u.z,u.update(N/Q,b,S),K=Math.max(K,u.impact),zs(N/Q),!P.paused);X++);h.collide(u,N,X=>dt(X)),h.update(N,u),u.impact=Math.max(K,u.impact),u.applyDamage(),vc(),E.update(N,u,P.time,n,P.mode==="free");for(let X of E.events)X.type==="up"&&Vt(`WANTED  ${"\u2605".repeat(X.level)}`),X.type==="evaded"&&(Vt("YOU LOST THEM"),k.chime()),X.type==="busted"&&yc()}function Ni(N,b,B,K,Q=!0){P.mode==="free"&&E.crime(N,b,B,K,P.time,Q)}let zo=!1;function vc(){let N=On(Kt,u.x),b=On(Jt,u.z),B=Math.abs(u.x-N)<ee-1&&Math.abs(u.z-b)<ee-1;if(B&&!zo&&Math.abs(u.speed)>9){let K=Math.abs(u.vx)>Math.abs(u.vz)?1:0;ts(K,P.time)===0&&Ni("red light",u.x,u.z,1)}zo=B}function yc(){Vt("BUSTED"),P.flash=1.5,k.impact(4),u.reset(hn.x,hn.z,hn.heading),P.lastX=u.x,P.lastZ=u.z,D.snap(u)}let _c=new gs;t.info.autoReset=!1;function Oo(){requestAnimationFrame(Oo),t.info.reset();let N=_c.getDelta(),b=Math.min(N,.05);P.time+=b,P.frame++;let B=Z.poll();P.paused||(wr(b,B),P.state==="play"?(Fo(b),D.update(u,b)):D.orbit(u,P.time)),u.setLights(r.lampFactor,u.brake>0&&u.speed>.5,u.gear<0);let K=ot.set(u.x-Math.sin(u.heading)*s.quality.shadowRange*.35,0,u.z-Math.cos(u.heading)*s.quality.shadowRange*.35);r.update(b,P.time,K,n),Vh.value.copy(r.sun.color).multiplyScalar(r.elevation>-1?r.sun.intensity:.1),o.update(r.lampFactor,P.time,n,b),l.update(P.time,r.lampFactor),f.update(r.lampFactor),a.mirrorHide.length=0,D.mode===2&&a.mirrorHide.push(u.group),a.update(P.time,r),g.sync(r.lampFactor,u,P.time);for(let re of Object.values(m))re.update(P.paused?0:b);_.visible&&(A.position.y=12+Math.sin(P.time*2)*.6,A.rotation.y=P.time*.8,w.uniforms.intensity.value=.55+Math.sin(P.time*3)*.12,C.opacity=.65+Math.sin(P.time*3)*.15),t.toneMappingExposure=r.exposure;let Q=s.grade.uniforms;Q.time.value=P.time,we=_e.damp(we,Fs(),10,b),Q.sunVisible.value=s.quality.grade?we*.8:0,Q.sunPos.value.set(ie.x*.5+.5,ie.y*.5+.5),Q.sunColor.value.copy(Qe.fogSunColor.value),n.getWorldDirection(Wt);let X=Wt.dot(r.sunDir),xt=_e.smoothstep(r.elevation,-1,2)*(1-_e.smoothstep(r.elevation,14,30)),wt=s.shafts.uniforms;wt.strength.value=ie.z<1?_e.smoothstep(X,.25,.85)*xt*.9:0,wt.sunPos.value.copy(Q.sunPos.value),wt.color.value.copy(r.sun.color).multiplyScalar(.9);let Pt=H==="wet"?.9:H==="dry"?0:_e.smoothstep(r.lampFactor,.15,.85)*.85;if(Cn.wetness.value=Pt,n.updateMatrixWorld(),Ns.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Q.camBlur.value.set(0,0),Er&&P.state==="play"&&!P.paused&&s.quality.grade){ot.copy(n.position).addScaledVector(Wt,80).applyMatrix4(ai);let re=ot.x*.5,me=ot.y*.5,Ue=Math.hypot(re,me);if(Ue<.12){let Re=Ue>.035?.035/Ue:1;Q.camBlur.value.set(re*Re,me*Re)}}ai.copy(Ns),Er=!0;let At=_e.clamp((Math.abs(u.speed)-30)/35,0,1);Q.speedBlur.value=P.state==="play"&&s.quality.grade?At*.6+(u.boosting?.45:0):0,P.flash=Math.max(0,P.flash-b*3),Q.flash.value=P.flash,Q.night.value=r.nightFactor,s.bloom&&(s.bloom.strength=.36+r.lampFactor*.22),s.render(),P.state==="play"&&P.frame%2===0&&z.update(u,P,g,r,E),k.setSiren(P.state==="play"?E.sirenLevel(u):0);let Xt=r.clockLabel;Xt!==Me&&(Me=Xt,Kn.textContent=Xt,Hn.textContent=r.elevation>-1.5?"\u2600":"\u263E");let Yt=Zl(u.x,u.z)[0],Zt=u.gear>0?u.def.gears[u.gear-1]*u.def.final:u.def.gears[0]*u.def.final;if(k.update({rpm:u.rpm,throttle:u.throttle,speed:u.speed,slip:u.slip+u.wheelspin*12,boosting:u.boosting,active:P.state==="play"&&!P.paused,shoreDistance:Math.abs(n.position.x-Bn),time:P.time,gear:u.gear,ratio:Zt,night:r.nightFactor,city:Vy[Yt]??.5,nearTrees:Yt==="SOUTHBANK"||Yt==="PALM DISTRICT"?.6:.2}),P.state==="play"&&!P.paused&&s.adapt(N),tt&&(st.frames++,st.time+=N,st.worst=Math.max(st.worst,N),st.time>=.5)){let re=st.frames/st.time,me=st.time/st.frames*1e3;q.textContent=`${Math.round(re)} FPS \xB7 ${me.toFixed(1)} MS \xB7 WORST ${(st.worst*1e3).toFixed(0)} \xB7 ${t.info.render.calls} DRAWS \xB7 ${(t.info.render.triangles/1e6).toFixed(1)}M TRIS \xB7 ${Math.round(s.scale*100)}% RES`,q.classList.toggle("slow",re<50&&re>=30),q.classList.toggle("bad",re<30),st.frames=0,st.time=0,st.worst=0}}u.onShift=N=>k.shift(N>0),await i("Warming up the engine\u2026"),D.orbit(u,0),r.update(0,0,ot.set(u.x,0,u.z),n);try{await t.compileAsync(e,n)}catch{}Oo(),requestAnimationFrame(()=>It("loading").classList.add("hidden")),window.__pacific={getState:()=>({state:P.state,mode:P.mode,paused:P.paused,speed:u.speed,heading:u.heading,nitro:u.nitro,position:{x:u.x,z:u.z,y:u.y},checkpoint:P.checkpoint,raceTime:P.raceTime,quality:Y,time:r.hours,gear:u.gear,rpm:u.rpm,distanceTravelled:u.distance,renderScale:s.scale,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,wanted:E.level,countdown:P.countdown,car:d}),setTime:N=>{r.cycle=!1,r.setHours(N)},setQuality:et,teleport:(N,b,B=0)=>{u.reset(N,b,B),D.snap(u)},step:(N,b={})=>{let B={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1,...b};for(let K=0;K<N&&!P.paused;K+=1/60)P.time+=1/60,wr(1/60,B);return D.snap(u),window.__pacific.getState()},parked:()=>({total:g.parked.length,near:g.nearParked.length,sample:g.nearParked.slice(0,3).map(N=>[N.type,+N.x.toFixed(1),+N.z.toFixed(1),N.slot])}),traffic:()=>g.cars.map(N=>({x:+N.x.toFixed(1),z:+N.z.toFixed(1),speed:+N.speed.toFixed(1),axis:N.axis,turn:!!N.turn,hit:!!N.hit})),reset:Lt,camera:j,debug:{scene:e,atmosphere:r,pipeline:s,renderer:t,camera:n,rig:D,traffic:g,pedestrians:x,player:u,knock:h,world:S,audio:k,wanted:E,hud:z,game:P,input:Z},selectCar:at}}Wy().catch(Ed);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
