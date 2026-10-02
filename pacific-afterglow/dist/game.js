var Iu=0,Qc=1,Du=2;var jc=1,Ua=2,Mi=3,Ui=0,En=1,un=2,an=0,Ni=1,Nn=2,th=3,eh=4,Na=5,Xn=100,Lu=101,Uu=102,Nu=103,Fu=104,As=200,zu=201,Ou=202,Bu=203,ha=204,ua=205,fo=206,ku=207,po=208,Hu=209,Vu=210,Gu=211,Wu=212,Xu=213,qu=214,Fa=0,za=1,Oa=2,vs=3,Ba=4,ka=5,Ha=6,Va=7,nh=0,Yu=1,Zu=2,Oi=0,Ga=1,Wa=2,Xa=3,mr=4,qa=5,Ya=6,Za=7;var ih=300,Rs=301,Cs=302,$a=303,Ka=304,mo=306,ei=1e3,Qi=1001,fa=1002,Sn=1003,$u=1004;var go=1005;var hi=1006,Ja=1007;var is=1008;var Yn=1009,sh=1010,rh=1011,gr=1012,Qa=1013,ss=1014,ui=1015,fn=1016,ja=1017,tl=1018,rs=1020,oh=35902,ah=35899,lh=1021,ch=1022,Fn=1023,ar=1026,os=1027,el=1028,nl=1029,hh=1030,il=1031;var sl=1033,xo=33776,vo=33777,yo=33778,_o=33779,rl=35840,ol=35841,al=35842,ll=35843,cl=36196,hl=37492,ul=37496,fl=37808,dl=37809,pl=37810,ml=37811,gl=37812,xl=37813,vl=37814,yl=37815,_l=37816,Ml=37817,bl=37818,Sl=37819,El=37820,wl=37821,Tl=36492,Al=36494,Rl=36495,Cl=36283,Pl=36284,Il=36285,Dl=36286;var Vr=2300,da=2301,ca=2302,Wc=2400,Xc=2401,qc=2402;var Ku=3200,Ll=3201;var Ul=0,Ju=1,Bi="",bn="srgb",ys="srgb-linear",Gr="linear",Ae="srgb";var xs=7680;var Yc=519,Qu=512,ju=513,tf=514,uh=515,ef=516,nf=517,sf=518,rf=519,Zc=35044,ni=35048;var fh="300 es",ci=2e3,Wr=2001;var Fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=1234567,kr=Math.PI/180,_s=180/Math.PI;function xr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[e&63|128]+wn[e>>8&255]+"-"+wn[e>>16&255]+wn[e>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function xe(s,t,e){return Math.max(t,Math.min(e,s))}function dh(s,t){return(s%t+t)%t}function Ed(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function wd(s,t,e){return s!==t?(e-s)/(t-s):0}function Hr(s,t,e){return(1-e)*s+e*t}function Td(s,t,e,n){return Hr(s,t,1-Math.exp(-e*n))}function Ad(s,t=1){return t-Math.abs(dh(s,t*2)-t)}function Rd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Cd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Pd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Id(s,t){return s+Math.random()*(t-s)}function Dd(s){return s*(.5-Math.random())}function Ld(s){s!==void 0&&(ru=s);let t=ru+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ud(s){return s*kr}function Nd(s){return s*_s}function Fd(s){return(s&s-1)===0&&s!==0}function zd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Od(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Bd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*l,c*f,c*d,a*h);break;case"YZY":s.set(c*d,a*l,c*f,a*h);break;case"ZXZ":s.set(c*f,c*d,a*l,a*h);break;case"XZX":s.set(a*l,c*g,c*u,a*h);break;case"YXY":s.set(c*u,a*l,c*g,a*h);break;case"ZYZ":s.set(c*g,c*u,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Se={DEG2RAD:kr,RAD2DEG:_s,generateUUID:xr,clamp:xe,euclideanModulo:dh,mapLinear:Ed,inverseLerp:wd,lerp:Hr,damp:Td,pingpong:Ad,smoothstep:Rd,smootherstep:Cd,randInt:Pd,randFloat:Id,randFloatSpread:Dd,seededRandom:Ld,degToRad:Ud,radToDeg:Nd,isPowerOfTwo:Fd,ceilPowerOfTwo:zd,floorPowerOfTwo:Od,setQuaternionFromProperEuler:Bd,normalize:Cn,denormalize:rr},kt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},me=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],h=n[i+1],l=n[i+2],f=n[i+3],d=r[o+0],u=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==d||h!==u||l!==g){let m=1-a,p=c*d+h*u+l*g+f*x,_=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let w=Math.sqrt(S),R=Math.atan2(w,p*_);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}let M=a*_;if(c=c*m+d*M,h=h*m+u*M,l=l*m+g*M,f=f*m+x*M,m===1-a){let w=1/Math.sqrt(c*c+h*h+l*l+f*f);c*=w,h*=w,l*=w,f*=w}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],h=n[i+2],l=n[i+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+l*f+c*u-h*d,t[e+1]=c*g+l*d+h*f-a*u,t[e+2]=h*g+l*u+a*d-c*f,t[e+3]=l*g-a*f-c*d-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(i/2),f=a(r/2),d=c(n/2),u=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"YXZ":this._x=d*l*f+h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"ZXY":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f-d*u*g;break;case"ZYX":this._x=d*l*f-h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f+d*u*g;break;case"YZX":this._x=d*l*f+h*u*g,this._y=h*u*f+d*l*g,this._z=h*l*g-d*u*f,this._w=h*l*f-d*u*g;break;case"XZY":this._x=d*l*f-h*u*g,this._y=h*u*f-d*l*g,this._z=h*l*g+d*u*f,this._w=h*l*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(l-c)*u,this._y=(r-h)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(l-c)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+h)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-h)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(c+l)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+h)/u,this._y=(c+l)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+i*h-r*c,this._y=i*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-i*a,this._w=o*l-n*a-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,a),f=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ou.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*i-a*n),l=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+c*h+o*f-a*l,this.y=n+c*l+a*h-r*f,this.z=i+c*f+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mc.copy(this).projectOnVector(t),this.sub(Mc)}reflect(t){return this.sub(Mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mc=new L,ou=new me,de=class s{constructor(t,e,n,i,r,o,a,c,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h)}set(t,e,n,i,r,o,a,c,h){let l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],f=n[7],d=n[2],u=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],S=i[4],M=i[7],w=i[2],R=i[5],T=i[8];return r[0]=o*x+a*_+c*w,r[3]=o*m+a*S+c*R,r[6]=o*p+a*M+c*T,r[1]=h*x+l*_+f*w,r[4]=h*m+l*S+f*R,r[7]=h*p+l*M+f*T,r[2]=d*x+u*_+g*w,r[5]=d*m+u*S+g*R,r[8]=d*p+u*M+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+i*r*h-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=l*o-a*h,d=a*c-l*r,u=h*r-o*c,g=e*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(i*h-l*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(l*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=u*x,t[7]=(n*c-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-i*h,i*c,-i*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(bc.makeScale(t,e)),this}rotate(t){return this.premultiply(bc.makeRotation(-t)),this}translate(t,e){return this.premultiply(bc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bc=new de;function ph(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function of(){let s=Xr("canvas");return s.style.display="block",s}var au={};function lr(s){s in au||(au[s]=!0,console.warn(s))}function af(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lu=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kd(){let s={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ae&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?Gr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ys]:{primaries:t,whitePoint:n,transfer:Gr,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),s}var be=kd();function Li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function or(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var qs,pa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qs===void 0&&(qs=Xr("canvas")),qs.width=t.width,qs.height=t.height;let i=qs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=qs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hd=0,cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=xr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Sc(i[o].image)):r.push(Sc(i[o]))}else r=Sc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Sc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vd=0,Ec=new L,Pn=class s extends Fi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Qi,i=Qi,r=hi,o=is,a=Fn,c=Yn,h=s.DEFAULT_ANISOTROPY,l=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=xr(),this.name="",this.source=new cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ec).x}get height(){return this.source.getSize(Ec).y}get depth(){return this.source.getSize(Ec).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ei:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ei:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=ih;Pn.DEFAULT_ANISOTROPY=1;var ke=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,h=c[0],l=c[4],f=c[8],d=c[1],u=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(h+1)/2,M=(u+1)/2,w=(p+1)/2,R=(l+d)/4,T=(f+x)/4,A=(g+m)/4;return S>M&&S>w?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=R/n,r=T/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=R/i,r=A/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=A/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(d-l)/_,this.w=Math.acos((h+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ma=class extends Fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new Pn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new cr(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Je=class extends ma{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qr=class extends Pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ga=class extends Pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(t.matrixWorld),this.union(Vo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),Go.subVectors(this.max,Lr),Ys.subVectors(t.a,Lr),Zs.subVectors(t.b,Lr),$s.subVectors(t.c,Lr),Xi.subVectors(Zs,Ys),qi.subVectors($s,Zs),ds.subVectors(Ys,$s);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-ds.z,ds.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,ds.z,0,-ds.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-ds.y,ds.x,0];return!wc(e,Ys,Zs,$s,Go)||(e=[1,0,0,0,1,0,0,0,1],!wc(e,Ys,Zs,$s,Go))?!1:(Wo.crossVectors(Xi,qi),e=[Wo.x,Wo.y,Wo.z],wc(e,Ys,Zs,$s,Go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ri=[new L,new L,new L,new L,new L,new L,new L,new L],oi=new L,Vo=new xi,Ys=new L,Zs=new L,$s=new L,Xi=new L,qi=new L,ds=new L,Lr=new L,Go=new L,Wo=new L,ps=new L;function wc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ps.fromArray(s,r);let a=i.x*Math.abs(ps.x)+i.y*Math.abs(ps.y)+i.z*Math.abs(ps.z),c=t.dot(ps),h=e.dot(ps),l=n.dot(ps);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}var Gd=new xi,Ur=new L,Tc=new L,zi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(Tc)),this.expandByPoint(Ur.copy(t.center).sub(Tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ci=new L,Ac=new L,Xo=new L,Yi=new L,Rc=new L,qo=new L,Cc=new L,Yr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ac.copy(t).add(e).multiplyScalar(.5),Xo.copy(e).sub(t).normalize(),Yi.copy(this.origin).sub(Ac);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xo),a=Yi.dot(this.direction),c=-Yi.dot(Xo),h=Yi.lengthSq(),l=Math.abs(1-o*o),f,d,u,g;if(l>0)if(f=o*c-a,d=o*a-c,g=r*l,f>=0)if(d>=-g)if(d<=g){let x=1/l;f*=x,d*=x,u=f*(f+o*d+2*a)+d*(o*f+d+2*c)+h}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+h):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+h);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ac).addScaledVector(Xo,d),u}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);let n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,h=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),l>=0?(r=(t.min.y-d.y)*l,o=(t.max.y-d.y)*l):(r=(t.max.y-d.y)*l,o=(t.min.y-d.y)*l),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,i,r){Rc.subVectors(e,t),qo.subVectors(n,t),Cc.crossVectors(Rc,qo);let o=this.direction.dot(Cc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,t);let c=a*this.direction.dot(qo.crossVectors(Yi,qo));if(c<0)return null;let h=a*this.direction.dot(Rc.cross(Yi));if(h<0||c+h>o)return null;let l=-a*Yi.dot(Cc);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class s{constructor(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m)}set(t,e,n,i,r,o,a,c,h,l,f,d,u,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=l,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ks.setFromMatrixColumn(t,0).length(),r=1/Ks.setFromMatrixColumn(t,1).length(),o=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*l,u=o*f,g=a*l,x=a*f;e[0]=c*l,e[4]=-c*f,e[8]=h,e[1]=u+g*h,e[5]=d-x*h,e[9]=-a*c,e[2]=x-d*h,e[6]=g+u*h,e[10]=o*c}else if(t.order==="YXZ"){let d=c*l,u=c*f,g=h*l,x=h*f;e[0]=d+x*a,e[4]=g*a-u,e[8]=o*h,e[1]=o*f,e[5]=o*l,e[9]=-a,e[2]=u*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*l,u=c*f,g=h*l,x=h*f;e[0]=d-x*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*l,e[9]=x-d*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*l,u=o*f,g=a*l,x=a*f;e[0]=c*l,e[4]=g*h-u,e[8]=d*h+x,e[1]=c*f,e[5]=x*h+d,e[9]=u*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,u=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=x-d*f,e[8]=g*f+u,e[1]=f,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=u*f+g,e[10]=d-x*f}else if(t.order==="XZY"){let d=o*c,u=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=-f,e[8]=h*l,e[1]=d*f+x,e[5]=o*l,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*l,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wd,t,Xd)}lookAt(t,e,n){let i=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Zi.crossVectors(n,Gn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Zi.crossVectors(n,Gn)),Zi.normalize(),Yo.crossVectors(Gn,Zi),i[0]=Zi.x,i[4]=Yo.x,i[8]=Gn.x,i[1]=Zi.y,i[5]=Yo.y,i[9]=Gn.y,i[2]=Zi.z,i[6]=Yo.z,i[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],f=n[5],d=n[9],u=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],S=n[7],M=n[11],w=n[15],R=i[0],T=i[4],A=i[8],b=i[12],E=i[1],D=i[5],F=i[9],B=i[13],Z=i[2],I=i[6],X=i[10],V=i[14],k=i[3],j=i[7],xt=i[11],yt=i[15];return r[0]=o*R+a*E+c*Z+h*k,r[4]=o*T+a*D+c*I+h*j,r[8]=o*A+a*F+c*X+h*xt,r[12]=o*b+a*B+c*V+h*yt,r[1]=l*R+f*E+d*Z+u*k,r[5]=l*T+f*D+d*I+u*j,r[9]=l*A+f*F+d*X+u*xt,r[13]=l*b+f*B+d*V+u*yt,r[2]=g*R+x*E+m*Z+p*k,r[6]=g*T+x*D+m*I+p*j,r[10]=g*A+x*F+m*X+p*xt,r[14]=g*b+x*B+m*V+p*yt,r[3]=_*R+S*E+M*Z+w*k,r[7]=_*T+S*D+M*I+w*j,r[11]=_*A+S*F+M*X+w*xt,r[15]=_*b+S*B+M*V+w*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],f=t[6],d=t[10],u=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*f-i*h*f-r*a*d+n*h*d+i*a*u-n*c*u)+x*(+e*c*u-e*h*d+r*o*d-i*o*u+i*h*l-r*c*l)+m*(+e*h*f-e*a*u-r*o*f+n*o*u+r*a*l-n*h*l)+p*(-i*a*l-e*c*f+e*a*d+i*o*f-n*o*d+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],f=t[9],d=t[10],u=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=f*m*h-x*d*h+x*c*u-a*m*u-f*c*p+a*d*p,S=g*d*h-l*m*h-g*c*u+o*m*u+l*c*p-o*d*p,M=l*x*h-g*f*h+g*a*u-o*x*u-l*a*p+o*f*p,w=g*f*c-l*x*c-g*a*d+o*x*d+l*a*m-o*f*m,R=e*_+n*S+i*M+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return t[0]=_*T,t[1]=(x*d*r-f*m*r-x*i*u+n*m*u+f*i*p-n*d*p)*T,t[2]=(a*m*r-x*c*r+x*i*h-n*m*h-a*i*p+n*c*p)*T,t[3]=(f*c*r-a*d*r-f*i*h+n*d*h+a*i*u-n*c*u)*T,t[4]=S*T,t[5]=(l*m*r-g*d*r+g*i*u-e*m*u-l*i*p+e*d*p)*T,t[6]=(g*c*r-o*m*r-g*i*h+e*m*h+o*i*p-e*c*p)*T,t[7]=(o*d*r-l*c*r+l*i*h-e*d*h-o*i*u+e*c*u)*T,t[8]=M*T,t[9]=(g*f*r-l*x*r-g*n*u+e*x*u+l*n*p-e*f*p)*T,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*p+e*a*p)*T,t[11]=(l*a*r-o*f*r-l*n*h+e*f*h+o*n*u-e*a*u)*T,t[12]=w*T,t[13]=(l*x*i-g*f*i+g*n*d-e*x*d-l*n*m+e*f*m)*T,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*m-e*a*m)*T,t[15]=(o*f*i-l*a*i+l*n*c-e*f*c-o*n*d+e*a*d)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-i*c,h*c+i*a,0,h*a+i*c,l*a+n,l*c-i*o,0,h*c-i*a,l*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,f=a+a,d=r*h,u=r*l,g=r*f,x=o*l,m=o*f,p=a*f,_=c*h,S=c*l,M=c*f,w=n.x,R=n.y,T=n.z;return i[0]=(1-(x+p))*w,i[1]=(u+M)*w,i[2]=(g-S)*w,i[3]=0,i[4]=(u-M)*R,i[5]=(1-(d+p))*R,i[6]=(m+_)*R,i[7]=0,i[8]=(g+S)*T,i[9]=(m-_)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ks.set(i[0],i[1],i[2]).length(),o=Ks.set(i[4],i[5],i[6]).length(),a=Ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ai.copy(this);let h=1/r,l=1/o,f=1/a;return ai.elements[0]*=h,ai.elements[1]*=h,ai.elements[2]*=h,ai.elements[4]*=l,ai.elements[5]*=l,ai.elements[6]*=l,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,e.setFromRotationMatrix(ai),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ci,c=!1){let h=this.elements,l=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===ci)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Wr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=f,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ci,c=!1){let h=this.elements,l=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===ci)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Wr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=f,h[9]=0,h[13]=u,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ks=new L,ai=new Ct,Wd=new L(0,0,0),Xd=new L(1,1,1),Zi=new L,Yo=new L,Gn=new L,hu=new Ct,uu=new me,sn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],h=i[5],l=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uu.setFromEuler(this),this.setFromQuaternion(uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qd=0,fu=new L,Js=new me,Pi=new Ct,Zo=new L,Nr=new L,Yd=new L,Zd=new me,du=new L(1,0,0),pu=new L(0,1,0),mu=new L(0,0,1),gu={type:"added"},$d={type:"removed"},Qs={type:"childadded",child:null},Pc={type:"childremoved",child:null},rn=class s extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new sn,n=new me,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ct},normalMatrix:{value:new de}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(du,t)}rotateY(t){return this.rotateOnAxis(pu,t)}rotateZ(t){return this.rotateOnAxis(mu,t)}translateOnAxis(t,e){return fu.copy(t).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(du,t)}translateY(t){return this.translateOnAxis(pu,t)}translateZ(t){return this.translateOnAxis(mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zo.copy(t):Zo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Nr,Zo,this.up):Pi.lookAt(Zo,Nr,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(Pi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($d),Pc.child=t,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,Yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let f=c[h];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let h in a){let l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};rn.DEFAULT_UP=new L(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new L,Ii=new L,Ic=new L,Di=new L,js=new L,tr=new L,xu=new L,Dc=new L,Lc=new L,Uc=new L,Nc=new ke,Fc=new ke,zc=new ke,Ji=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),li.subVectors(t,e),i.cross(li);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){li.subVectors(i,e),Ii.subVectors(n,e),Ic.subVectors(t,e);let o=li.dot(li),a=li.dot(Ii),c=li.dot(Ic),h=Ii.dot(Ii),l=Ii.dot(Ic),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(h*c-a*l)*d,g=(o*l-a*c)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Nc.setScalar(0),Fc.setScalar(0),zc.setScalar(0),Nc.fromBufferAttribute(t,e),Fc.fromBufferAttribute(t,n),zc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Nc,r.x),o.addScaledVector(Fc,r.y),o.addScaledVector(zc,r.z),o}static isFrontFacing(t,e,n,i){return li.subVectors(n,e),Ii.subVectors(t,e),li.cross(Ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),li.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;js.subVectors(i,n),tr.subVectors(r,n),Dc.subVectors(t,n);let c=js.dot(Dc),h=tr.dot(Dc);if(c<=0&&h<=0)return e.copy(n);Lc.subVectors(t,i);let l=js.dot(Lc),f=tr.dot(Lc);if(l>=0&&f<=l)return e.copy(i);let d=c*f-l*h;if(d<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(js,o);Uc.subVectors(t,r);let u=js.dot(Uc),g=tr.dot(Uc);if(g>=0&&u<=g)return e.copy(r);let x=u*h-c*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(tr,a);let m=l*g-u*f;if(m<=0&&f-l>=0&&u-g>=0)return xu.subVectors(r,i),a=(f-l)/(f-l+(u-g)),e.copy(i).addScaledVector(xu,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(js,o).addScaledVector(tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Oc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=be.workingColorSpace){if(t=dh(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Oc(o,r,t+1/3),this.g=Oc(o,r,t),this.b=Oc(o,r,t-1/3)}return be.colorSpaceToWorking(this,i),this}setStyle(t,e=bn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){let n=lf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return be.workingToColorSpace(Tn.copy(this),t),Math.round(xe(Tn.r*255,0,255))*65536+Math.round(xe(Tn.g*255,0,255))*256+Math.round(xe(Tn.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(Tn.copy(this),e);let n=Tn.r,i=Tn.g,r=Tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,h,l=(a+o)/2;if(a===o)c=0,h=0;else{let f=o-a;switch(h=l<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=bn){be.workingToColorSpace(Tn.copy(this),t);let e=Tn.r,n=Tn.g,i=Tn.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL($o);let n=Hr($i.h,$o.h,e),i=Hr($i.s,$o.s,e),r=Hr($i.l,$o.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Et;Et.NAMES=lf;var Kd=0,vi=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=Ni,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},en=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var on=new L,Ko=new kt,Jd=0,tn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ko.fromBufferAttribute(this,e),Ko.applyMatrix3(t),this.setXY(e,Ko.x,Ko.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),i=Cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),i=Cn(i,this.array),r=Cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zc&&(t.usage=this.usage),t}};var $r=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Kr=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qd=0,jn=new Ct,Bc=new rn,er=new L,Wn=new xi,Fr=new xi,gn=new L,Re=class s extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ph(t)?Kr:$r)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return Bc.lookAt(t),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(Wn.min,Fr.min),Wn.expandByPoint(gn),gn.addVectors(Wn.max,Fr.max),Wn.expandByPoint(gn)):(Wn.expandByPoint(Fr.min),Wn.expandByPoint(Fr.max))}Wn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)gn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(gn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)gn.fromBufferAttribute(a,h),c&&(er.fromBufferAttribute(t,h),gn.add(er)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new L,c[A]=new L;let h=new L,l=new L,f=new L,d=new kt,u=new kt,g=new kt,x=new L,m=new L;function p(A,b,E){h.fromBufferAttribute(n,A),l.fromBufferAttribute(n,b),f.fromBufferAttribute(n,E),d.fromBufferAttribute(r,A),u.fromBufferAttribute(r,b),g.fromBufferAttribute(r,E),l.sub(h),f.sub(h),u.sub(d),g.sub(d);let D=1/(u.x*g.y-g.x*u.y);isFinite(D)&&(x.copy(l).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(D),m.copy(f).multiplyScalar(u.x).addScaledVector(l,-g.x).multiplyScalar(D),a[A].add(x),a[b].add(x),a[E].add(x),c[A].add(m),c[b].add(m),c[E].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let A=0,b=_.length;A<b;++A){let E=_[A],D=E.start,F=E.count;for(let B=D,Z=D+F;B<Z;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let S=new L,M=new L,w=new L,R=new L;function T(A){w.fromBufferAttribute(i,A),R.copy(w);let b=a[A];S.copy(b),S.sub(w.multiplyScalar(w.dot(b))).normalize(),M.crossVectors(R,b);let D=M.dot(c[A])<0?-1:1;o.setXYZW(A,S.x,S.y,S.z,D)}for(let A=0,b=_.length;A<b;++A){let E=_[A],D=E.start,F=E.count;for(let B=D,Z=D+F;B<Z;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,h=new L,l=new L,f=new L;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),l.subVectors(o,r),f.subVectors(i,r),l.cross(f),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(a,c){let h=a.array,l=a.itemSize,f=a.normalized,d=new h.constructor(c.length*l),u=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*l;for(let p=0;p<l;p++)d[g++]=h[u++]}return new tn(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let l=0,f=h.length;l<f;l++){let d=h[l],u=t(d,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let f=0,d=h.length;f<d;f++){let u=h[f];l.push(u.toJSON(t.data))}l.length>0&&(i[c]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let l=i[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],f=r[h];for(let d=0,u=f.length;d<u;d++)l.push(f[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,l=o.length;h<l;h++){let f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vu=new Ct,ms=new Yr,Jo=new zi,yu=new L,Qo=new L,jo=new L,ta=new L,kc=new L,ea=new L,_u=new L,na=new L,Pt=class extends rn{constructor(t=new Re,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=a[c],f=r[c];l!==0&&(kc.fromBufferAttribute(f,t),o?ea.addScaledVector(kc,l):ea.addScaledVector(kc.sub(e),l))}e.add(ea)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(Jo.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Jo,yu)===null||ms.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(vu.copy(r).invert(),ms.copy(t.ray).applyMatrix4(vu),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,u.start),S=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=_,w=S;M<w;M+=3){let R=a.getX(M),T=a.getX(M+1),A=a.getX(M+2);i=ia(this,p,t,n,h,l,f,R,T,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);i=ia(this,o,t,n,h,l,f,_,S,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,u.start),S=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let M=_,w=S;M<w;M+=3){let R=M,T=M+1,A=M+2;i=ia(this,p,t,n,h,l,f,R,T,A),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let _=m,S=m+1,M=m+2;i=ia(this,o,t,n,h,l,f,_,S,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function jd(s,t,e,n,i,r,o,a){let c;if(t.side===En?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Ui,a),c===null)return null;na.copy(a),na.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(na);return h<e.near||h>e.far?null:{distance:h,point:na.clone(),object:s}}function ia(s,t,e,n,i,r,o,a,c,h){s.getVertexPosition(a,Qo),s.getVertexPosition(c,jo),s.getVertexPosition(h,ta);let l=jd(s,t,e,n,Qo,jo,ta,_u);if(l){let f=new L;Ji.getBarycoord(_u,Qo,jo,ta,f),i&&(l.uv=Ji.getInterpolatedAttribute(i,a,c,h,f,new kt)),r&&(l.uv1=Ji.getInterpolatedAttribute(r,a,c,h,f,new kt)),o&&(l.normal=Ji.getInterpolatedAttribute(o,a,c,h,f,new L),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let d={a,b:c,c:h,normal:new L,materialIndex:0};Ji.getNormal(Qo,jo,ta,d.normal),l.face=d,l.barycoord=f}return l}var qt=class s extends Re{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],l=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(f,2));function g(x,m,p,_,S,M,w,R,T,A,b){let E=M/T,D=w/A,F=M/2,B=w/2,Z=R/2,I=T+1,X=A+1,V=0,k=0,j=new L;for(let xt=0;xt<X;xt++){let yt=xt*D-B;for(let Rt=0;Rt<I;Rt++){let te=Rt*E-F;j[x]=te*_,j[m]=yt*S,j[p]=Z,h.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[p]=R>0?1:-1,l.push(j.x,j.y,j.z),f.push(Rt/T),f.push(1-xt/A),V+=1}}for(let xt=0;xt<A;xt++)for(let yt=0;yt<T;yt++){let Rt=d+yt+I*xt,te=d+yt+I*(xt+1),Wt=d+(yt+1)+I*(xt+1),re=d+(yt+1)+I*xt;c.push(Rt,te,re),c.push(te,Wt,re),k+=6}a.addGroup(u,k,b),u+=k,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ps(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function An(s){let t={};for(let e=0;e<s.length;e++){let n=Ps(s[e]);for(let i in n)t[i]=n[i]}return t}function tp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function mh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var dn={clone:Ps,merge:An},ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_e=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ep,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Jr=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new L,Mu=new kt,bu=new kt,hn=class extends Jr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,Mu,bu),e.subVectors(bu,Mu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/h,i*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},nr=-90,ir=1,xa=class extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new hn(nr,ir,t,e);i.layers=this.layers,this.add(i);let r=new hn(nr,ir,t,e);r.layers=this.layers,this.add(r);let o=new hn(nr,ir,t,e);o.layers=this.layers,this.add(o);let a=new hn(nr,ir,t,e);a.layers=this.layers,this.add(a);let c=new hn(nr,ir,t,e);c.layers=this.layers,this.add(c);let h=new hn(nr,ir,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,l]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qr=class extends Pn{constructor(t=[],e=Rs,n,i,r,o,a,c,h,l){super(t,e,n,i,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},va=class extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Qr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qt(5,5,5),r=new _e({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:an});r.uniforms.tEquirect.value=e;let o=new Pt(i,r),a=e.minFilter;return e.minFilter===is&&(e.minFilter=hi),new xa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ze=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ip={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=l.position.distanceTo(f.position),u=.02,g=.005;h.inputState.pinching&&d>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ip)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},jr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ms=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var yi=class extends Pn{constructor(t=null,e=1,n=1,i,r,o,a,c,h=Sn,l=Sn,f,d){super(null,o,a,c,h,l,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xe=class extends tn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sr=new Ct,Su=new Ct,sa=[],Eu=new xi,sp=new Ct,zr=new Pt,Or=new zi,Kt=class extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xe(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),Eu.copy(t.boundingBox).applyMatrix4(sr),this.boundingBox.union(Eu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),Or.copy(t.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),t.ray.intersectsSphere(Or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,sr),Su.multiplyMatrices(n,sr),zr.matrixWorld=Su,zr.raycast(t,sa);for(let o=0,a=sa.length;o<a;o++){let c=sa[o];c.instanceId=r,c.object=this,e.push(c)}sa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xe(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new yi(new Float32Array(i*this.count),i,this.count,el,ui));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hc=new L,rp=new L,op=new de,ti=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Hc.subVectors(n,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Hc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||op.getNormalMatrix(t),i=this.coplanarPoint(Hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gs=new zi,ap=new kt(.5,.5),ra=new L,ji=class{constructor(t=new ti,e=new ti,n=new ti,i=new ti,r=new ti,o=new ti){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],h=r[3],l=r[4],f=r[5],d=r[6],u=r[7],g=r[8],x=r[9],m=r[10],p=r[11],_=r[12],S=r[13],M=r[14],w=r[15];if(i[0].setComponents(h-o,u-l,p-g,w-_).normalize(),i[1].setComponents(h+o,u+l,p+g,w+_).normalize(),i[2].setComponents(h+a,u+f,p+x,w+S).normalize(),i[3].setComponents(h-a,u-f,p-x,w-S).normalize(),n)i[4].setComponents(c,d,m,M).normalize(),i[5].setComponents(h-c,u-d,p-m,w-M).normalize();else if(i[4].setComponents(h-c,u-d,p-m,w-M).normalize(),e===ci)i[5].setComponents(h+c,u+d,p+m,w+M).normalize();else if(e===Wr)i[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);let e=ap.distanceTo(t.center);return gs.radius=.7071067811865476+e,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ra.x=i.normal.x>0?t.max.x:t.min.x,ra.y=i.normal.y>0?t.max.y:t.min.y,ra.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ur=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ya=new L,_a=new L,wu=new Ct,Br=new Yr,oa=new zi,Vc=new L,Tu=new L,Ma=class extends rn{constructor(t=new Re,e=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ya.fromBufferAttribute(e,i-1),_a.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ya.distanceTo(_a);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(i),oa.radius+=r,t.ray.intersectsSphere(oa)===!1)return;wu.copy(i).invert(),Br.copy(t.ray).applyMatrix4(wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let x=u,m=g-1;x<m;x+=h){let p=l.getX(x),_=l.getX(x+1),S=aa(this,t,Br,c,p,_,x);S&&e.push(S)}if(this.isLineLoop){let x=l.getX(g-1),m=l.getX(u),p=aa(this,t,Br,c,x,m,g-1);p&&e.push(p)}}else{let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=u,m=g-1;x<m;x+=h){let p=aa(this,t,Br,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=aa(this,t,Br,c,g-1,u,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function aa(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(ya.fromBufferAttribute(a,i),_a.fromBufferAttribute(a,r),e.distanceSqToSegment(ya,_a,Vc,Tu)>n)return;Vc.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(Vc);if(!(h<t.near||h>t.far))return{distance:h,point:Tu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Au=new L,Ru=new L,to=class extends Ma{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Au.fromBufferAttribute(e,i),Ru.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Au.distanceTo(Ru);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var bs=class extends Pn{constructor(t,e,n,i,r,o,a,c,h){super(t,e,n,i,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ss=class extends Pn{constructor(t,e,n=ss,i,r,o,a=Sn,c=Sn,h,l=ar,f=1){if(l!==ar&&l!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,i,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},eo=class extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var no=class s extends Re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],h=new L,l=new kt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),o.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(o[d]/t+1)/2,l.y=(o[d+1]/t+1)/2,c.push(l.x,l.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pe=class s extends Re{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;i=Math.floor(i),r=Math.floor(r);let l=[],f=[],d=[],u=[],g=0,x=[],m=n/2,p=0;_(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(l),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(u,2));function _(){let M=new L,w=new L,R=0,T=(e-t)/n;for(let A=0;A<=r;A++){let b=[],E=A/r,D=E*(e-t)+t;for(let F=0;F<=i;F++){let B=F/i,Z=B*c+a,I=Math.sin(Z),X=Math.cos(Z);w.x=D*I,w.y=-E*n+m,w.z=D*X,f.push(w.x,w.y,w.z),M.set(I,T,X).normalize(),d.push(M.x,M.y,M.z),u.push(B,1-E),b.push(g++)}x.push(b)}for(let A=0;A<i;A++)for(let b=0;b<r;b++){let E=x[b][A],D=x[b+1][A],F=x[b+1][A+1],B=x[b][A+1];(t>0||b!==0)&&(l.push(E,D,B),R+=3),(e>0||b!==r-1)&&(l.push(D,F,B),R+=3)}h.addGroup(p,R,0),p+=R}function S(M){let w=g,R=new kt,T=new L,A=0,b=M===!0?t:e,E=M===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,m*E,0),d.push(0,E,0),u.push(.5,.5),g++;let D=g;for(let F=0;F<=i;F++){let Z=F/i*c+a,I=Math.cos(Z),X=Math.sin(Z);T.x=b*X,T.y=m*E,T.z=b*I,f.push(T.x,T.y,T.z),d.push(0,E,0),R.x=I*.5+.5,R.y=X*.5*E+.5,u.push(R.x,R.y),g++}for(let F=0;F<i;F++){let B=w+F,Z=D+F;M===!0?l.push(Z,Z+1,B):l.push(Z+1,Z,B),A+=3}h.addGroup(p,A,M===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_i=class s extends pe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var io=class s extends Re{constructor(t=[new kt(0,-.5),new kt(.5,0),new kt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=xe(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],l=1/e,f=new L,d=new kt,u=new L,g=new L,x=new L,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,x.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),c.push(u.x,u.y,u.z),x.copy(g)}for(let _=0;_<=e;_++){let S=n+_*l*i,M=Math.sin(S),w=Math.cos(S);for(let R=0;R<=t.length-1;R++){f.x=t[R].x*M,f.y=t[R].y,f.z=t[R].x*w,o.push(f.x,f.y,f.z),d.x=_/e,d.y=R/(t.length-1),a.push(d.x,d.y);let T=c[3*R+0]*M,A=c[3*R+1],b=c[3*R+0]*w;h.push(T,A,b)}}for(let _=0;_<e;_++)for(let S=0;S<t.length-1;S++){let M=S+_*t.length,w=M,R=M+t.length,T=M+t.length+1,A=M+1;r.push(w,R,A),r.push(T,A,R)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Ne=class s extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),h=a+1,l=c+1,f=t/a,d=e/c,u=[],g=[],x=[],m=[];for(let p=0;p<l;p++){let _=p*d-o;for(let S=0;S<h;S++){let M=S*f-r;g.push(M,-_,0),x.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let S=_+h*p,M=_+h*(p+1),w=_+1+h*(p+1),R=_+1+h*p;u.push(S,M,R),u.push(M,w,R)}this.setIndex(u),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},so=class s extends Re{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],h=[],l=[],f=t,d=(e-t)/i,u=new L,g=new kt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;u.x=f*Math.cos(p),u.y=f*Math.sin(p),c.push(u.x,u.y,u.z),h.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,l.push(g.x,g.y)}f+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,S=_,M=_+n+1,w=_+n+2,R=_+1;a.push(S,M,R),a.push(M,w,R)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var In=class s extends Re{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,l=[],f=new L,d=new L,u=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],S=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let w=0;w<=e;w++){let R=w/e;f.x=-t*Math.cos(i+R*r)*Math.sin(o+S*a),f.y=t*Math.cos(o+S*a),f.z=t*Math.sin(i+R*r)*Math.sin(o+S*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(R+M,1-S),_.push(h++)}l.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let S=l[p][_+1],M=l[p][_],w=l[p+1][_],R=l[p+1][_+1];(p!==0||o>0)&&u.push(S,M,R),(p!==n-1||c<Math.PI)&&u.push(M,w,R)}this.setIndex(u),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ts=class s extends Re{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],h=[],l=new L,f=new L,d=new L;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){let x=g/i*r,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),d.subVectors(f,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){let x=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,_=(i+1)*u+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ro=class extends _e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ft=class extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fr=class extends Ft{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var oo=class extends vi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var dr=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ba=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function la(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function lp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Es=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sa=class extends Es{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wc,endingEnd:Wc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xc:r=t,a=2*e-n;break;case qc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xc:o=t,c=2*n-e;break;case qc:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-u)*m+(1.5+u)*x+.5*g,M=u*m-u*x;for(let w=0;w!==a;++w)r[w]=p*o[l+w]+_*o[h+w]+S*o[c+w]+M*o[f+w];return r}},Ea=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=(n-e)/(i-e),f=1-l;for(let d=0;d!==a;++d)r[d]=o[h+d]*f+o[c+d]*l;return r}},wa=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},qn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=la(e,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:la(t.times,Array),values:la(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Vr:e=this.InterpolantFactoryMethodDiscrete;break;case da:e=this.InterpolantFactoryMethodLinear;break;case ca:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return ca}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&lp(i))for(let a=0,c=i.length;a!==c;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ca,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],l=t[a+1];if(h!==l&&(a!==1||h!==t[0]))if(i)c=!0;else{let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[d+g]||x!==e[u+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=da;var es=class extends qn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Vr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends qn{constructor(t,e,n,i){super(t,e,n,i)}};Ta.prototype.ValueTypeName="color";var Aa=class extends qn{constructor(t,e,n,i){super(t,e,n,i)}};Aa.prototype.ValueTypeName="number";var Ra=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),h=t*a;for(let l=h+a;h!==l;h+=4)me.slerpFlat(r,0,o,h-a,o,h,c);return r}},ao=class extends qn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends qn{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Vr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends qn{constructor(t,e,n,i){super(t,e,n,i)}};Ca.prototype.ValueTypeName="vector";var Pa=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,f){return h.push(l,f),this},this.removeHandler=function(l){let f=h.indexOf(l);return f!==-1&&h.splice(f,2),this},this.getHandler=function(l){for(let f=0,d=h.length;f<d;f+=2){let u=h[f],g=h[f+1];if(u.global&&(u.lastIndex=0),u.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},cf=new Pa,Ia=class{constructor(t){this.manager=t!==void 0?t:cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var pr=class extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},lo=class extends pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Gc=new Ct,Cu=new L,Pu=new L,Da=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pu),e.updateMatrixWorld(),Gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$c=class extends Da{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=_s*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},co=class extends pr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $c}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ws=class extends Jr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kc=class extends Da{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ho=class extends pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Kc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var uo=class extends Re{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var La=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ts=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var gh="\\[\\]\\.:\\/",cp=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",hp="[^"+gh.replace("\\.","")+"]",up=/((?:WC+[\/:])*)/.source.replace("WC",xh),fp=/(WCOD+)?/.source.replace("WCOD",hp),dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),mp=new RegExp("^"+up+fp+dp+pp+"$"),gp=["material","materials","bones","map"],Jc=class{constructor(t,e,n){let i=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cp,"")}static parseTrackName(t){let e=mp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Jc;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wy=new Float32Array(1);function vh(s,t,e,n){let i=xp(n);switch(e){case lh:return s*t;case el:return s*t/i.components*i.byteLength;case nl:return s*t/i.components*i.byteLength;case hh:return s*t*2/i.components*i.byteLength;case il:return s*t*2/i.components*i.byteLength;case ch:return s*t*3/i.components*i.byteLength;case Fn:return s*t*4/i.components*i.byteLength;case sl:return s*t*4/i.components*i.byteLength;case xo:case vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yo:case _o:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ol:case ll:return Math.max(s,16)*Math.max(t,8)/4;case rl:case al:return Math.max(s,8)*Math.max(t,8)/2;case cl:case hl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case xl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case vl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _l:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Tl:case Al:case Rl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Cl:case Pl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Il:case Dl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xp(s){switch(s){case Yn:case sh:return{byteLength:1,components:1};case gr:case rh:case fn:return{byteLength:2,components:1};case ja:case tl:return{byteLength:2,components:4};case ss:case Qa:case ui:return{byteLength:4,components:1};case oh:case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Lf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ep(s){let t=new WeakMap;function e(a,c){let h=a.array,l=a.usage,f=h.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,h,l),a.onUploadCallback();let u;if(h instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)u=s.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=s.SHORT;else if(h instanceof Uint32Array)u=s.UNSIGNED_INT;else if(h instanceof Int32Array)u=s.INT;else if(h instanceof Int8Array)u=s.BYTE;else if(h instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){let l=c.array,f=c.updateRanges;if(s.bindBuffer(h,a),f.length===0)s.bufferSubData(h,0,l);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],x=f[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let x=f[u];s.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:i,remove:r,update:o}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Op=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
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
}`,d0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g0=`uniform bool receiveShadow;
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
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,v0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
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
#endif`,S0=`struct PhysicalMaterial {
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
}`,E0=`
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U0=`#if defined( USE_POINTS_UV )
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
#endif`,N0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,H0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y0=`#ifdef USE_NORMALMAP
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cm=`float getShadowMask() {
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
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wm=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
}`,Dm=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,km=`#define LAMBERT
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
}`,Hm=`#define LAMBERT
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
}`,Vm=`#define MATCAP
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
}`,Gm=`#define MATCAP
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define PHONG
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
}`,Ym=`#define PHONG
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
}`,Zm=`#define STANDARD
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
}`,$m=`#define STANDARD
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
}`,Km=`#define TOON
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
}`,Jm=`#define TOON
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
}`,Qm=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 color;
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
}`,ng=`uniform float rotation;
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
}`,ig=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:wp,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:Rp,alphatest_fragment:Cp,alphatest_pars_fragment:Pp,aomap_fragment:Ip,aomap_pars_fragment:Dp,batching_pars_vertex:Lp,batching_vertex:Up,begin_vertex:Np,beginnormal_vertex:Fp,bsdfs:zp,iridescence_fragment:Op,bumpmap_pars_fragment:Bp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Gp,color_fragment:Wp,color_pars_fragment:Xp,color_pars_vertex:qp,color_vertex:Yp,common:Zp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Qp,emissivemap_fragment:jp,emissivemap_pars_fragment:t0,colorspace_fragment:e0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:s0,envmap_pars_fragment:r0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:x0,envmap_vertex:a0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:f0,lightmap_pars_fragment:d0,lights_lambert_fragment:p0,lights_lambert_pars_fragment:m0,lights_pars_begin:g0,lights_toon_fragment:v0,lights_toon_pars_fragment:y0,lights_phong_fragment:_0,lights_phong_pars_fragment:M0,lights_physical_fragment:b0,lights_physical_pars_fragment:S0,lights_fragment_begin:E0,lights_fragment_maps:w0,lights_fragment_end:T0,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:P0,map_fragment:I0,map_pars_fragment:D0,map_particle_fragment:L0,map_particle_pars_fragment:U0,metalnessmap_fragment:N0,metalnessmap_pars_fragment:F0,morphinstance_vertex:z0,morphcolor_vertex:O0,morphnormal_vertex:B0,morphtarget_pars_vertex:k0,morphtarget_vertex:H0,normal_fragment_begin:V0,normal_fragment_maps:G0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:q0,normalmap_pars_fragment:Y0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:$0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:J0,opaque_fragment:Q0,packing:j0,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:am,shadowmap_vertex:lm,shadowmask_pars_fragment:cm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:fm,skinnormal_vertex:dm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:xm,transmission_fragment:vm,transmission_pars_fragment:ym,uv_pars_fragment:_m,uv_pars_vertex:Mm,uv_vertex:bm,worldpos_vertex:Sm,background_vert:Em,background_frag:wm,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:Rm,cube_frag:Cm,depth_vert:Pm,depth_frag:Im,distanceRGBA_vert:Dm,distanceRGBA_frag:Lm,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Fm,linedashed_frag:zm,meshbasic_vert:Om,meshbasic_frag:Bm,meshlambert_vert:km,meshlambert_frag:Hm,meshmatcap_vert:Vm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:Zm,meshphysical_frag:$m,meshtoon_vert:Km,meshtoon_frag:Jm,points_vert:Qm,points_frag:jm,shadow_vert:tg,shadow_frag:eg,sprite_vert:ng,sprite_frag:ig},Lt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},bi={basic:{uniforms:An([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:An([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Et(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:An([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:An([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:An([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Et(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:An([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:An([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:An([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:An([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:An([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:An([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:An([Lt.common,Lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:An([Lt.lights,Lt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};bi.physical={uniforms:An([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var Nl={r:0,b:0,g:0},Is=new sn,sg=new Ct;function rg(s,t,e,n,i,r,o){let a=new Et(0),c=r===!0?0:1,h,l,f=null,d=0,u=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function x(S){let M=!1,w=g(S);w===null?p(a,c):w&&w.isColor&&(p(w,1),M=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,M){let w=g(M);w&&(w.isCubeTexture||w.mapping===mo)?(l===void 0&&(l=new Pt(new qt(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:Ps(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Is.copy(M.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),l.material.uniforms.envMap.value=w,l.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(Is)),l.material.toneMapped=be.getTransfer(w.colorSpace)!==Ae,(f!==w||d!==w.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,f=w,d=w.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Pt(new Ne(2,2),new _e({name:"BackgroundMaterial",uniforms:Ps(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=be.getTransfer(w.colorSpace)!==Ae,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=w,d=w.version,u=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function p(S,M){S.getRGB(Nl,mh(s)),n.buffers.color.setClear(Nl.r,Nl.g,Nl.b,M,o)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:x,addToRenderList:m,dispose:_}}function og(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(E,D,F,B,Z){let I=!1,X=f(B,F,D);r!==X&&(r=X,h(r.object)),I=u(E,B,F,Z),I&&g(E,B,F,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,M(E,D,F,B),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return s.createVertexArray()}function h(E){return s.bindVertexArray(E)}function l(E){return s.deleteVertexArray(E)}function f(E,D,F){let B=F.wireframe===!0,Z=n[E.id];Z===void 0&&(Z={},n[E.id]=Z);let I=Z[D.id];I===void 0&&(I={},Z[D.id]=I);let X=I[B];return X===void 0&&(X=d(c()),I[B]=X),X}function d(E){let D=[],F=[],B=[];for(let Z=0;Z<e;Z++)D[Z]=0,F[Z]=0,B[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:B,object:E,attributes:{},index:null}}function u(E,D,F,B){let Z=r.attributes,I=D.attributes,X=0,V=F.getAttributes();for(let k in V)if(V[k].location>=0){let xt=Z[k],yt=I[k];if(yt===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(yt=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(yt=E.instanceColor)),xt===void 0||xt.attribute!==yt||yt&&xt.data!==yt.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(E,D,F,B){let Z={},I=D.attributes,X=0,V=F.getAttributes();for(let k in V)if(V[k].location>=0){let xt=I[k];xt===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(xt=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(xt=E.instanceColor));let yt={};yt.attribute=xt,xt&&xt.data&&(yt.data=xt.data),Z[k]=yt,X++}r.attributes=Z,r.attributesNum=X,r.index=B}function x(){let E=r.newAttributes;for(let D=0,F=E.length;D<F;D++)E[D]=0}function m(E){p(E,0)}function p(E,D){let F=r.newAttributes,B=r.enabledAttributes,Z=r.attributeDivisors;F[E]=1,B[E]===0&&(s.enableVertexAttribArray(E),B[E]=1),Z[E]!==D&&(s.vertexAttribDivisor(E,D),Z[E]=D)}function _(){let E=r.newAttributes,D=r.enabledAttributes;for(let F=0,B=D.length;F<B;F++)D[F]!==E[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function S(E,D,F,B,Z,I,X){X===!0?s.vertexAttribIPointer(E,D,F,Z,I):s.vertexAttribPointer(E,D,F,B,Z,I)}function M(E,D,F,B){x();let Z=B.attributes,I=F.getAttributes(),X=D.defaultAttributeValues;for(let V in I){let k=I[V];if(k.location>=0){let j=Z[V];if(j===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),j!==void 0){let xt=j.normalized,yt=j.itemSize,Rt=t.get(j);if(Rt===void 0)continue;let te=Rt.buffer,Wt=Rt.type,re=Rt.bytesPerElement,at=Wt===s.INT||Wt===s.UNSIGNED_INT||j.gpuType===Qa;if(j.isInterleavedBufferAttribute){let ct=j.data,At=ct.stride,tt=j.offset;if(ct.isInstancedInterleavedBuffer){for(let dt=0;dt<k.locationSize;dt++)p(k.location+dt,ct.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let dt=0;dt<k.locationSize;dt++)m(k.location+dt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let dt=0;dt<k.locationSize;dt++)S(k.location+dt,yt/k.locationSize,Wt,xt,At*re,(tt+yt/k.locationSize*dt)*re,at)}else{if(j.isInstancedBufferAttribute){for(let ct=0;ct<k.locationSize;ct++)p(k.location+ct,j.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ct=0;ct<k.locationSize;ct++)m(k.location+ct);s.bindBuffer(s.ARRAY_BUFFER,te);for(let ct=0;ct<k.locationSize;ct++)S(k.location+ct,yt/k.locationSize,Wt,xt,yt*re,yt/k.locationSize*ct*re,at)}}else if(X!==void 0){let xt=X[V];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(k.location,xt);break;case 3:s.vertexAttrib3fv(k.location,xt);break;case 4:s.vertexAttrib4fv(k.location,xt);break;default:s.vertexAttrib1fv(k.location,xt)}}}}_()}function w(){A();for(let E in n){let D=n[E];for(let F in D){let B=D[F];for(let Z in B)l(B[Z].object),delete B[Z];delete D[F]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;let D=n[E.id];for(let F in D){let B=D[F];for(let Z in B)l(B[Z].object),delete B[Z];delete D[F]}delete n[E.id]}function T(E){for(let D in n){let F=n[D];if(F[E.id]===void 0)continue;let B=F[E.id];for(let Z in B)l(B[Z].object),delete B[Z];delete F[E.id]}}function A(){b(),o=!0,r!==i&&(r=i,h(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function ag(s,t,e){let n;function i(h){n=h}function r(h,l){s.drawArrays(n,h,l),e.update(l,n,1)}function o(h,l,f){f!==0&&(s.drawArraysInstanced(n,h,l,f),e.update(l,n,f))}function a(h,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,f);let u=0;for(let g=0;g<f;g++)u+=l[g];e.update(u,n,1)}function c(h,l,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<h.length;g++)o(h[g],l[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=l[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Fn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let A=T===fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Yn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ui&&!A)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:w,maxSamples:R}}function cg(s){let t=this,e=null,n=0,i=!1,r=!1,o=new ti,a=new de,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=l(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?l(null):h();else{let _=r?0:n,S=_*4,M=p.clippingState||null;c.value=M,M=l(g,d,S,u);for(let w=0;w!==S;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,d,u,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=u+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=u;S!==x;++S,M+=4)o.copy(f[S]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function hg(s){let t=new WeakMap;function e(o,a){return a===$a?o.mapping=Rs:a===Ka&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$a||a===Ka)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new va(c.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var yr=4,hf=[.125,.215,.35,.446,.526,.582],Us=20,yh=new ws,uf=new Et,_h=null,Mh=0,bh=0,Sh=!1,Ls=(1+Math.sqrt(5))/2,vr=1/Ls,ff=[new L(-Ls,vr,0),new L(Ls,vr,0),new L(-vr,0,Ls),new L(vr,0,Ls),new L(0,Ls,-vr),new L(0,Ls,vr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ug=new L,Mr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=ug}=r;_h=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_h,Mh,bh),this._renderer.xr.enabled=Sh,t.scissorTest=!1,Fl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_h=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:fn,format:Fn,colorSpace:ys,depthBuffer:!1},i=df(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=dg(r,t,e)}return i}_compileMaterial(t){let e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,yh)}_sceneToCubeUV(t,e,n,i,r){let c=new hn(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(uf),f.toneMapping=Oi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));let x=new en({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),m=new Pt(new qt,x),p=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,p=!0):(x.color.copy(uf),p=!0);for(let S=0;S<6;S++){let M=S%3;M===0?(c.up.set(0,h[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[S],r.y,r.z)):M===1?(c.up.set(0,0,h[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[S],r.z)):(c.up.set(0,h[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[S]));let w=this._cubeSize;Fl(i,M*w,S>2?w:0,w,w),f.setRenderTarget(i),p&&f.render(m,c),f.render(t,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=d,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Rs||t.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Fl(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,yh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ff[(i-r-1)%ff.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,f=new Pt(this._lodPlanes[i],h),d=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Us-1),x=r/g,m=isFinite(r)?1+Math.floor(l*x):Us;m>Us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);let p=[],_=0;for(let T=0;T<Us;++T){let A=T/x,b=Math.exp(-A*A/2);p.push(b),T===0?_+=b:T<m&&(_+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let M=this._sizeLods[i],w=3*M*(i>S-yr?i-S+yr:0),R=4*(this._cubeSize-M);Fl(e,w,R,3*M,2*M),c.setRenderTarget(e),c.render(f,yh)}};function fg(s){let t=[],e=[],n=[],i=s,r=s-yr+1+hf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-yr?c=hf[o-s+yr-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),l=-h,f=1+h,d=[l,l,f,l,f,f,l,l,f,f,l,f],u=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*u),S=new Float32Array(m*g*u),M=new Float32Array(p*g*u);for(let R=0;R<u;R++){let T=R%3*2/3-1,A=R>2?0:-1,b=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];_.set(b,x*g*R),S.set(d,m*g*R);let E=[R,R,R,R,R,R];M.set(E,p*g*R)}let w=new Re;w.setAttribute("position",new tn(_,x)),w.setAttribute("uv",new tn(S,m)),w.setAttribute("faceIndex",new tn(M,p)),t.push(w),i>yr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function df(s,t,e){let n=new Je(s,t,e);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fl(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dg(s,t,e){let n=new Float32Array(Us),i=new L(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function pf(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function mf(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function pg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===$a||c===Ka,l=c===Rs||c===Cs;if(h||l){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Mr(s)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return h&&u&&u.height>0||l&&u&&i(u)?(e===null&&(e=new Mr(s)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function i(a){let c=0,h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function mg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gg(s,t,e,n){let i={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let u in d)t.update(d[u],s.ARRAY_BUFFER)}function h(f){let d=[],u=f.index,g=f.attributes.position,x=0;if(u!==null){let _=u.array;x=u.version;for(let S=0,M=_.length;S<M;S+=3){let w=_[S+0],R=_[S+1],T=_[S+2];d.push(w,R,R,T,T,w)}}else if(g!==void 0){let _=g.array;x=g.version;for(let S=0,M=_.length/3-1;S<M;S+=3){let w=S+0,R=S+1,T=S+2;d.push(w,R,R,T,T,w)}}else return;let m=new(ph(d)?Kr:$r)(d,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function l(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:l}}function xg(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function h(d,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,d*o,g),e.update(u,n,g))}function l(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function f(d,u,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,u[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=u[_]*x[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function vg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function yg(s,t,e){let n=new WeakMap,i=new ke;function r(o,a,c){let h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=l!==void 0?l.length:0,d=n.get(a);if(d===void 0||d.count!==f){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;u===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let M=a.attributes.position.count*S,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let R=new Float32Array(M*w*4*f),T=new qr(R,M,w,f);T.type=ui,T.needsUpdate=!0;let A=S*4;for(let E=0;E<f;E++){let D=m[E],F=p[E],B=_[E],Z=M*w*4*E;for(let I=0;I<D.count;I++){let X=I*A;u===!0&&(i.fromBufferAttribute(D,I),R[Z+X+0]=i.x,R[Z+X+1]=i.y,R[Z+X+2]=i.z,R[Z+X+3]=0),g===!0&&(i.fromBufferAttribute(F,I),R[Z+X+4]=i.x,R[Z+X+5]=i.y,R[Z+X+6]=i.z,R[Z+X+7]=0),x===!0&&(i.fromBufferAttribute(B,I),R[Z+X+8]=i.x,R[Z+X+9]=i.y,R[Z+X+10]=i.z,R[Z+X+11]=B.itemSize===4?i.w:1)}}d={count:f,texture:T,size:new kt(M,w)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<h.length;x++)u+=h[x];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function _g(s,t,e,n){let i=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,f=t.get(c,l);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return f}function o(){i=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var Uf=new Pn,gf=new Ss(1,1),Nf=new qr,Ff=new ga,zf=new Qr,xf=[],vf=[],yf=new Float32Array(16),_f=new Float32Array(9),Mf=new Float32Array(4);function br(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=xf[i];if(r===void 0&&(r=new Float32Array(i),xf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function pn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function mn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Bl(s,t){let e=vf[t];e===void 0&&(e=new Int32Array(t),vf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Mg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function bg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;s.uniform2fv(this.addr,t),mn(e,t)}}function Sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;s.uniform3fv(this.addr,t),mn(e,t)}}function Eg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;s.uniform4fv(this.addr,t),mn(e,t)}}function wg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;Mf.set(n),s.uniformMatrix2fv(this.addr,!1,Mf),mn(e,n)}}function Tg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;_f.set(n),s.uniformMatrix3fv(this.addr,!1,_f),mn(e,n)}}function Ag(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;yf.set(n),s.uniformMatrix4fv(this.addr,!1,yf),mn(e,n)}}function Rg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Cg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;s.uniform2iv(this.addr,t),mn(e,t)}}function Pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;s.uniform3iv(this.addr,t),mn(e,t)}}function Ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;s.uniform4iv(this.addr,t),mn(e,t)}}function Dg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;s.uniform2uiv(this.addr,t),mn(e,t)}}function Ug(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;s.uniform3uiv(this.addr,t),mn(e,t)}}function Ng(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;s.uniform4uiv(this.addr,t),mn(e,t)}}function Fg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(gf.compareFunction=uh,r=gf):r=Uf,e.setTexture2D(t||r,i)}function zg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ff,i)}function Og(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zf,i)}function Bg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nf,i)}function kg(s){switch(s){case 5126:return Mg;case 35664:return bg;case 35665:return Sg;case 35666:return Eg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Dg;case 36294:return Lg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}function Hg(s,t){s.uniform1fv(this.addr,t)}function Vg(s,t){let e=br(t,this.size,2);s.uniform2fv(this.addr,e)}function Gg(s,t){let e=br(t,this.size,3);s.uniform3fv(this.addr,e)}function Wg(s,t){let e=br(t,this.size,4);s.uniform4fv(this.addr,e)}function Xg(s,t){let e=br(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function qg(s,t){let e=br(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Yg(s,t){let e=br(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Zg(s,t){s.uniform1iv(this.addr,t)}function $g(s,t){s.uniform2iv(this.addr,t)}function Kg(s,t){s.uniform3iv(this.addr,t)}function Jg(s,t){s.uniform4iv(this.addr,t)}function Qg(s,t){s.uniform1uiv(this.addr,t)}function jg(s,t){s.uniform2uiv(this.addr,t)}function tx(s,t){s.uniform3uiv(this.addr,t)}function ex(s,t){s.uniform4uiv(this.addr,t)}function nx(s,t,e){let n=this.cache,i=t.length,r=Bl(e,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Uf,r[o])}function ix(s,t,e){let n=this.cache,i=t.length,r=Bl(e,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ff,r[o])}function sx(s,t,e){let n=this.cache,i=t.length,r=Bl(e,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||zf,r[o])}function rx(s,t,e){let n=this.cache,i=t.length,r=Bl(e,i);pn(n,r)||(s.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Nf,r[o])}function ox(s){switch(s){case 5126:return Hg;case 35664:return Vg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return jg;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}var wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kg(e.type)}},Th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ox(e.type)}},Ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Eh=/(\w+)(\])?(\[|\.)?/g;function bf(s,t){s.seq.push(t),s.map[t.id]=t}function ax(s,t,e){let n=s.name,i=n.length;for(Eh.lastIndex=0;;){let r=Eh.exec(n),o=Eh.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===i){bf(e,h===void 0?new wh(a,s,t):new Th(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Ah(a),bf(e,f)),e=f}}}var _r=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);ax(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Sf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var lx=37297,cx=0;function hx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ef=new de;function ux(s){be._getMatrix(Ef,be.workingColorSpace,s);let t=`mat3( ${Ef.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(s)){case Gr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+hx(s.getShaderSource(t),a)}else return r}function fx(s,t){let e=ux(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dx(s,t){let e;switch(t){case Ga:e="Linear";break;case Wa:e="Reinhard";break;case Xa:e="Cineon";break;case mr:e="ACESFilmic";break;case Ya:e="AgX";break;case Za:e="Neutral";break;case qa:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var zl=new L;function px(){be.getLuminanceCoefficients(zl);let s=zl.x.toFixed(4),t=zl.y.toFixed(4),e=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function gx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Mo(s){return s!==""}function Tf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Af(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(s){return s.replace(vx,_x)}var yx=new Map;function _x(s,t){let e=he[t];if(e===void 0){let n=yx.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rh(e)}var Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(s){return s.replace(Mx,bx)}function bx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Sx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ua?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Ex(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Tx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case nh:t="ENVMAP_BLENDING_MULTIPLY";break;case Yu:t="ENVMAP_BLENDING_MIX";break;case Zu:t="ENVMAP_BLENDING_ADD";break}return t}function Ax(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Rx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Sx(e),h=Ex(e),l=wx(e),f=Tx(e),d=Ax(e),u=mx(e),g=gx(r),x=i.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mo).join(`
`),p.length>0&&(p+=`
`)):(m=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),p=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?he.tonemapping_pars_fragment:"",e.toneMapping!==Oi?dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,fx("linearToOutputTexel",e.outputColorSpace),px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mo).join(`
`)),o=Rh(o),o=Tf(o,e),o=Af(o,e),a=Rh(a),a=Tf(a,e),a=Af(a,e),o=Rf(o),a=Rf(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=_+m+o,M=_+p+a,w=Sf(i,i.VERTEX_SHADER,S),R=Sf(i,i.FRAGMENT_SHADER,M);i.attachShader(x,w),i.attachShader(x,R),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(D){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(w)||"",Z=i.getShaderInfoLog(R)||"",I=F.trim(),X=B.trim(),V=Z.trim(),k=!0,j=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,R);else{let xt=wf(i,w,"vertex"),yt=wf(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+xt+`
`+yt)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(X===""||V==="")&&(j=!1);j&&(D.diagnostics={runnable:k,programLog:I,vertexShader:{log:X,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(w),i.deleteShader(R),A=new _r(i,x),b=xx(i,x)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(x,lx)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=R,this}var Cx=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ph(t),e.set(t,n)),n}},Ph=class{constructor(t){this.id=Cx++,this.code=t,this.usedTimes=0}};function Px(s,t,e,n,i,r,o){let a=new Zr,c=new Ch,h=new Set,l=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return h.add(b),b===0?"uv":`uv${b}`}function m(b,E,D,F,B){let Z=F.fog,I=B.geometry,X=b.isMeshStandardMaterial?F.environment:null,V=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),k=V&&V.mapping===mo?V.image.height:null,j=g[b.type];b.precision!==null&&(u=i.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let xt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,yt=xt!==void 0?xt.length:0,Rt=0;I.morphAttributes.position!==void 0&&(Rt=1),I.morphAttributes.normal!==void 0&&(Rt=2),I.morphAttributes.color!==void 0&&(Rt=3);let te,Wt,re,at;if(j){let Ee=bi[j];te=Ee.vertexShader,Wt=Ee.fragmentShader}else te=b.vertexShader,Wt=b.fragmentShader,c.update(b),re=c.getVertexShaderID(b),at=c.getFragmentShaderID(b);let ct=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),tt=B.isInstancedMesh===!0,dt=B.isBatchedMesh===!0,bt=!!b.map,Nt=!!b.matcap,U=!!V,Ht=!!b.aoMap,It=!!b.lightMap,rt=!!b.bumpMap,nt=!!b.normalMap,Y=!!b.displacementMap,J=!!b.emissiveMap,ht=!!b.metalnessMap,Bt=!!b.roughnessMap,Dt=b.anisotropy>0,y=b.clearcoat>0,v=b.dispersion>0,P=b.iridescence>0,N=b.sheen>0,H=b.transmission>0,z=Dt&&!!b.anisotropyMap,Q=y&&!!b.clearcoatMap,W=y&&!!b.clearcoatNormalMap,ot=y&&!!b.clearcoatRoughnessMap,ut=P&&!!b.iridescenceMap,K=P&&!!b.iridescenceThicknessMap,ft=N&&!!b.sheenColorMap,st=N&&!!b.sheenRoughnessMap,Tt=!!b.specularMap,vt=!!b.specularColorMap,Yt=!!b.specularIntensityMap,G=H&&!!b.transmissionMap,lt=H&&!!b.thicknessMap,_t=!!b.gradientMap,zt=!!b.alphaMap,Mt=b.alphaTest>0,gt=!!b.alphaHash,Vt=!!b.extensions,ae=Oi;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ae=s.toneMapping);let Ie={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:Wt,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:at,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:dt,batchingColor:dt&&B._colorsTexture!==null,instancing:tt,instancingColor:tt&&B.instanceColor!==null,instancingMorph:tt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ys,alphaToCoverage:!!b.alphaToCoverage,map:bt,matcap:Nt,envMap:U,envMapMode:U&&V.mapping,envMapCubeUVHeight:k,aoMap:Ht,lightMap:It,bumpMap:rt,normalMap:nt,displacementMap:d&&Y,emissiveMap:J,normalMapObjectSpace:nt&&b.normalMapType===Ju,normalMapTangentSpace:nt&&b.normalMapType===Ul,metalnessMap:ht,roughnessMap:Bt,anisotropy:Dt,anisotropyMap:z,clearcoat:y,clearcoatMap:Q,clearcoatNormalMap:W,clearcoatRoughnessMap:ot,dispersion:v,iridescence:P,iridescenceMap:ut,iridescenceThicknessMap:K,sheen:N,sheenColorMap:ft,sheenRoughnessMap:st,specularMap:Tt,specularColorMap:vt,specularIntensityMap:Yt,transmission:H,transmissionMap:G,thicknessMap:lt,gradientMap:_t,opaque:b.transparent===!1&&b.blending===Ni&&b.alphaToCoverage===!1,alphaMap:zt,alphaTest:Mt,alphaHash:gt,combine:b.combine,mapUv:bt&&x(b.map.channel),aoMapUv:Ht&&x(b.aoMap.channel),lightMapUv:It&&x(b.lightMap.channel),bumpMapUv:rt&&x(b.bumpMap.channel),normalMapUv:nt&&x(b.normalMap.channel),displacementMapUv:Y&&x(b.displacementMap.channel),emissiveMapUv:J&&x(b.emissiveMap.channel),metalnessMapUv:ht&&x(b.metalnessMap.channel),roughnessMapUv:Bt&&x(b.roughnessMap.channel),anisotropyMapUv:z&&x(b.anisotropyMap.channel),clearcoatMapUv:Q&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:W&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:K&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:st&&x(b.sheenRoughnessMap.channel),specularMapUv:Tt&&x(b.specularMap.channel),specularColorMapUv:vt&&x(b.specularColorMap.channel),specularIntensityMapUv:Yt&&x(b.specularIntensityMap.channel),transmissionMapUv:G&&x(b.transmissionMap.channel),thicknessMapUv:lt&&x(b.thicknessMap.channel),alphaMapUv:zt&&x(b.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(nt||Dt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!I.attributes.uv&&(bt||zt),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:At,skinning:B.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Rt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:bt&&b.map.isVideoTexture===!0&&be.getTransfer(b.map.colorSpace)===Ae,decodeVideoTextureEmissive:J&&b.emissiveMap.isVideoTexture===!0&&be.getTransfer(b.emissiveMap.colorSpace)===Ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===un,flipSided:b.side===En,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Vt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&b.extensions.multiDraw===!0||dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ie.vertexUv1s=h.has(1),Ie.vertexUv2s=h.has(2),Ie.vertexUv3s=h.has(3),h.clear(),Ie}function p(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)E.push(D),E.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(_(E,b),S(E,b),E.push(s.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function _(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function S(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){let E=g[b.type],D;if(E){let F=bi[E];D=dn.clone(F.uniforms)}else D=b.uniforms;return D}function w(b,E){let D;for(let F=0,B=l.length;F<B;F++){let Z=l[F];if(Z.cacheKey===E){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new Rx(s,E,b,r),l.push(D)),D}function R(b){if(--b.usedTimes===0){let E=l.indexOf(b);l[E]=l[l.length-1],l.pop(),b.destroy()}}function T(b){c.remove(b)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:A}}function Ix(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Dx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Pf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function If(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,u,g,x,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,d,u,g,x,m){let p=o(f,d,u,g,x,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(f,d,u,g,x,m){let p=o(f,d,u,g,x,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function h(f,d){e.length>1&&e.sort(f||Dx),n.length>1&&n.sort(d||Pf),i.length>1&&i.sort(d||Pf)}function l(){for(let f=t,d=s.length;f<d;f++){let u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:l,sort:h}}function Lx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new If,s.set(n,[o])):i>=r.length?(o=new If,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ux(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Et};break;case"SpotLight":e={position:new L,direction:new L,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Nx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Fx=0;function zx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ox(s){let t=new Ux,e=Nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);let i=new L,r=new Ct,o=new Ct;function a(h){let l=0,f=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let u=0,g=0,x=0,m=0,p=0,_=0,S=0,M=0,w=0,R=0,T=0;h.sort(zx);for(let b=0,E=h.length;b<E;b++){let D=h[b],F=D.color,B=D.intensity,Z=D.distance,I=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)l+=F.r*B,f+=F.g*B,d+=F.b*B;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],B);T++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,k=e.get(D);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.directionalShadow[u]=k,n.directionalShadowMap[u]=I,n.directionalShadowMatrix[u]=D.shadow.matrix,_++}n.directional[u]=X,u++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(B),X.distance=Z,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[x]=X;let V=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,V.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[x]=V.matrix,D.castShadow){let k=e.get(D);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=I,M++}x++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(F).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let V=D.shadow,k=e.get(D);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=X,g++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(B),X.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==u||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==_||A.numPointShadows!==S||A.numSpotShadows!==M||A.numSpotMaps!==w||A.numLightProbes!==T)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,A.directionalLength=u,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=_,A.numPointShadows=S,A.numSpotShadows=M,A.numSpotMaps=w,A.numLightProbes=T,n.version=Fx++)}function c(h,l){let f=0,d=0,u=0,g=0,x=0,m=l.matrixWorldInverse;for(let p=0,_=h.length;p<_;p++){let S=h[p];if(S.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(S.isSpotLight){let M=n.spot[u];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Df(s){let t=new Ox(s),e=[],n=[];function i(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Bx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Df(s),t.set(i,[a])):r>=o.length?(a=new Df(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`;function Vx(s,t,e){let n=new ji,i=new kt,r=new kt,o=new ke,a=new dr({depthPacking:Ll}),c=new ba,h={},l=e.maxTextureSize,f={[Ui]:En,[En]:Ui,[un]:un},d=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:kx,fragmentShader:Hx}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let p=this.type;this.render=function(R,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let b=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),F=s.state;F.setBlending(an),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=p!==Mi&&this.type===Mi,Z=p===Mi&&this.type!==Mi;for(let I=0,X=R.length;I<X;I++){let V=R[I],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let j=k.getFrameExtents();if(i.multiply(j),r.copy(k.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/j.x),i.x=r.x*j.x,k.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/j.y),i.y=r.y*j.y,k.mapSize.y=r.y)),k.map===null||B===!0||Z===!0){let yt=this.type!==Mi?{minFilter:Sn,magFilter:Sn}:{};k.map!==null&&k.map.dispose(),k.map=new Je(i.x,i.y,yt),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();let xt=k.getViewportCount();for(let yt=0;yt<xt;yt++){let Rt=k.getViewport(yt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),F.viewport(o),k.updateMatrices(V,yt),n=k.getFrustum(),M(T,A,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===Mi&&_(k,A),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,E,D)};function _(R,T){let A=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Je(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(T,null,A,d,x,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(T,null,A,u,x,null)}function S(R,T,A,b){let E=null,D=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)E=D;else if(E=A.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=E.uuid,B=T.uuid,Z=h[F];Z===void 0&&(Z={},h[F]=Z);let I=Z[B];I===void 0&&(I=E.clone(),Z[B]=I,T.addEventListener("dispose",w)),E=I}if(E.visible=T.visible,E.wireframe=T.wireframe,b===Mi?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:f[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=s.properties.get(E);F.light=A}return E}function M(R,T,A,b,E){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Mi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);let B=t.update(R),Z=R.material;if(Array.isArray(Z)){let I=B.groups;for(let X=0,V=I.length;X<V;X++){let k=I[X],j=Z[k.materialIndex];if(j&&j.visible){let xt=S(R,j,b,E);R.onBeforeShadow(s,R,T,A,B,xt,k),s.renderBufferDirect(A,null,B,xt,R,k),R.onAfterShadow(s,R,T,A,B,xt,k)}}}else if(Z.visible){let I=S(R,Z,b,E);R.onBeforeShadow(s,R,T,A,B,I,null),s.renderBufferDirect(A,null,B,I,R,null),R.onAfterShadow(s,R,T,A,B,I,null)}}let F=R.children;for(let B=0,Z=F.length;B<Z;B++)M(F[B],T,A,b,E)}function w(R){R.target.removeEventListener("dispose",w);for(let A in h){let b=h[A],E=R.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var Gx={[Fa]:za,[Oa]:Ha,[Ba]:Va,[vs]:ka,[za]:Fa,[Ha]:Oa,[Va]:Ba,[ka]:vs};function Wx(s,t){function e(){let G=!1,lt=new ke,_t=null,zt=new ke(0,0,0,0);return{setMask:function(Mt){_t!==Mt&&!G&&(s.colorMask(Mt,Mt,Mt,Mt),_t=Mt)},setLocked:function(Mt){G=Mt},setClear:function(Mt,gt,Vt,ae,Ie){Ie===!0&&(Mt*=ae,gt*=ae,Vt*=ae),lt.set(Mt,gt,Vt,ae),zt.equals(lt)===!1&&(s.clearColor(Mt,gt,Vt,ae),zt.copy(lt))},reset:function(){G=!1,_t=null,zt.set(-1,0,0,0)}}}function n(){let G=!1,lt=!1,_t=null,zt=null,Mt=null;return{setReversed:function(gt){if(lt!==gt){let Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),lt=gt;let ae=Mt;Mt=null,this.setClear(ae)}},getReversed:function(){return lt},setTest:function(gt){gt?ct(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(gt){_t!==gt&&!G&&(s.depthMask(gt),_t=gt)},setFunc:function(gt){if(lt&&(gt=Gx[gt]),zt!==gt){switch(gt){case Fa:s.depthFunc(s.NEVER);break;case za:s.depthFunc(s.ALWAYS);break;case Oa:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case Ba:s.depthFunc(s.EQUAL);break;case ka:s.depthFunc(s.GEQUAL);break;case Ha:s.depthFunc(s.GREATER);break;case Va:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}zt=gt}},setLocked:function(gt){G=gt},setClear:function(gt){Mt!==gt&&(lt&&(gt=1-gt),s.clearDepth(gt),Mt=gt)},reset:function(){G=!1,_t=null,zt=null,Mt=null,lt=!1}}}function i(){let G=!1,lt=null,_t=null,zt=null,Mt=null,gt=null,Vt=null,ae=null,Ie=null;return{setTest:function(Ee){G||(Ee?ct(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Ee){lt!==Ee&&!G&&(s.stencilMask(Ee),lt=Ee)},setFunc:function(Ee,ri,kn){(_t!==Ee||zt!==ri||Mt!==kn)&&(s.stencilFunc(Ee,ri,kn),_t=Ee,zt=ri,Mt=kn)},setOp:function(Ee,ri,kn){(gt!==Ee||Vt!==ri||ae!==kn)&&(s.stencilOp(Ee,ri,kn),gt=Ee,Vt=ri,ae=kn)},setLocked:function(Ee){G=Ee},setClear:function(Ee){Ie!==Ee&&(s.clearStencil(Ee),Ie=Ee)},reset:function(){G=!1,lt=null,_t=null,zt=null,Mt=null,gt=null,Vt=null,ae=null,Ie=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,h=new WeakMap,l={},f={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,_=null,S=null,M=null,w=null,R=null,T=new Et(0,0,0),A=0,b=!1,E=null,D=null,F=null,B=null,Z=null,I=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,V=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=V>=2);let j=null,xt={},yt=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),te=new ke().fromArray(yt),Wt=new ke().fromArray(Rt);function re(G,lt,_t,zt){let Mt=new Uint8Array(4),gt=s.createTexture();s.bindTexture(G,gt),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<_t;Vt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(lt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return gt}let at={};at[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(s.DEPTH_TEST),o.setFunc(vs),rt(!1),nt(Qc),ct(s.CULL_FACE),Ht(an);function ct(G){l[G]!==!0&&(s.enable(G),l[G]=!0)}function At(G){l[G]!==!1&&(s.disable(G),l[G]=!1)}function tt(G,lt){return f[G]!==lt?(s.bindFramebuffer(G,lt),f[G]=lt,G===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=lt),G===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function dt(G,lt){let _t=u,zt=!1;if(G){_t=d.get(lt),_t===void 0&&(_t=[],d.set(lt,_t));let Mt=G.textures;if(_t.length!==Mt.length||_t[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Vt=Mt.length;gt<Vt;gt++)_t[gt]=s.COLOR_ATTACHMENT0+gt;_t.length=Mt.length,zt=!0}}else _t[0]!==s.BACK&&(_t[0]=s.BACK,zt=!0);zt&&s.drawBuffers(_t)}function bt(G){return g!==G?(s.useProgram(G),g=G,!0):!1}let Nt={[Xn]:s.FUNC_ADD,[Lu]:s.FUNC_SUBTRACT,[Uu]:s.FUNC_REVERSE_SUBTRACT};Nt[Nu]=s.MIN,Nt[Fu]=s.MAX;let U={[As]:s.ZERO,[zu]:s.ONE,[Ou]:s.SRC_COLOR,[ha]:s.SRC_ALPHA,[Vu]:s.SRC_ALPHA_SATURATE,[po]:s.DST_COLOR,[fo]:s.DST_ALPHA,[Bu]:s.ONE_MINUS_SRC_COLOR,[ua]:s.ONE_MINUS_SRC_ALPHA,[Hu]:s.ONE_MINUS_DST_COLOR,[ku]:s.ONE_MINUS_DST_ALPHA,[Gu]:s.CONSTANT_COLOR,[Wu]:s.ONE_MINUS_CONSTANT_COLOR,[Xu]:s.CONSTANT_ALPHA,[qu]:s.ONE_MINUS_CONSTANT_ALPHA};function Ht(G,lt,_t,zt,Mt,gt,Vt,ae,Ie,Ee){if(G===an){x===!0&&(At(s.BLEND),x=!1);return}if(x===!1&&(ct(s.BLEND),x=!0),G!==Na){if(G!==m||Ee!==b){if((p!==Xn||M!==Xn)&&(s.blendEquation(s.FUNC_ADD),p=Xn,M=Xn),Ee)switch(G){case Ni:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFunc(s.ONE,s.ONE);break;case th:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case th:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,S=null,w=null,R=null,T.set(0,0,0),A=0,m=G,b=Ee}return}Mt=Mt||lt,gt=gt||_t,Vt=Vt||zt,(lt!==p||Mt!==M)&&(s.blendEquationSeparate(Nt[lt],Nt[Mt]),p=lt,M=Mt),(_t!==_||zt!==S||gt!==w||Vt!==R)&&(s.blendFuncSeparate(U[_t],U[zt],U[gt],U[Vt]),_=_t,S=zt,w=gt,R=Vt),(ae.equals(T)===!1||Ie!==A)&&(s.blendColor(ae.r,ae.g,ae.b,Ie),T.copy(ae),A=Ie),m=G,b=!1}function It(G,lt){G.side===un?At(s.CULL_FACE):ct(s.CULL_FACE);let _t=G.side===En;lt&&(_t=!_t),rt(_t),G.blending===Ni&&G.transparent===!1?Ht(an):Ht(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let zt=G.stencilWrite;a.setTest(zt),zt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),J(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(G){E!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),E=G)}function nt(G){G!==Iu?(ct(s.CULL_FACE),G!==D&&(G===Qc?s.cullFace(s.BACK):G===Du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),D=G}function Y(G){G!==F&&(X&&s.lineWidth(G),F=G)}function J(G,lt,_t){G?(ct(s.POLYGON_OFFSET_FILL),(B!==lt||Z!==_t)&&(s.polygonOffset(lt,_t),B=lt,Z=_t)):At(s.POLYGON_OFFSET_FILL)}function ht(G){G?ct(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function Bt(G){G===void 0&&(G=s.TEXTURE0+I-1),j!==G&&(s.activeTexture(G),j=G)}function Dt(G,lt,_t){_t===void 0&&(j===null?_t=s.TEXTURE0+I-1:_t=j);let zt=xt[_t];zt===void 0&&(zt={type:void 0,texture:void 0},xt[_t]=zt),(zt.type!==G||zt.texture!==lt)&&(j!==_t&&(s.activeTexture(_t),j=_t),s.bindTexture(G,lt||at[G]),zt.type=G,zt.texture=lt)}function y(){let G=xt[j];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function N(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function z(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function W(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ot(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function K(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(G){te.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),te.copy(G))}function st(G){Wt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Wt.copy(G))}function Tt(G,lt){let _t=h.get(lt);_t===void 0&&(_t=new WeakMap,h.set(lt,_t));let zt=_t.get(G);zt===void 0&&(zt=s.getUniformBlockIndex(lt,G.name),_t.set(G,zt))}function vt(G,lt){let zt=h.get(lt).get(G);c.get(lt)!==zt&&(s.uniformBlockBinding(lt,zt,G.__bindingPointIndex),c.set(lt,zt))}function Yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},j=null,xt={},f={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,_=null,S=null,M=null,w=null,R=null,T=new Et(0,0,0),A=0,b=!1,E=null,D=null,F=null,B=null,Z=null,te.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:At,bindFramebuffer:tt,drawBuffers:dt,useProgram:bt,setBlending:Ht,setMaterial:It,setFlipSided:rt,setCullFace:nt,setLineWidth:Y,setPolygonOffset:J,setScissorTest:ht,activeTexture:Bt,bindTexture:Dt,unbindTexture:y,compressedTexImage2D:v,compressedTexImage3D:P,texImage2D:ut,texImage3D:K,updateUBOMapping:Tt,uniformBlockBinding:vt,texStorage2D:W,texStorage3D:ot,texSubImage2D:N,texSubImage3D:H,compressedTexSubImage2D:z,compressedTexSubImage3D:Q,scissor:ft,viewport:st,reset:Yt}}function Xx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,l=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return u?new OffscreenCanvas(y,v):Xr("canvas")}function x(y,v,P){let N=1,H=Dt(y);if((H.width>P||H.height>P)&&(N=P/Math.max(H.width,H.height)),N<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let z=Math.floor(N*H.width),Q=Math.floor(N*H.height);f===void 0&&(f=g(z,Q));let W=v?g(z,Q):f;return W.width=z,W.height=Q,W.getContext("2d").drawImage(y,0,0,z,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+z+"x"+Q+")."),W}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){s.generateMipmap(y)}function _(y){return y.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?s.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(y,v,P,N,H=!1){if(y!==null){if(s[y]!==void 0)return s[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let z=v;if(v===s.RED&&(P===s.FLOAT&&(z=s.R32F),P===s.HALF_FLOAT&&(z=s.R16F),P===s.UNSIGNED_BYTE&&(z=s.R8)),v===s.RED_INTEGER&&(P===s.UNSIGNED_BYTE&&(z=s.R8UI),P===s.UNSIGNED_SHORT&&(z=s.R16UI),P===s.UNSIGNED_INT&&(z=s.R32UI),P===s.BYTE&&(z=s.R8I),P===s.SHORT&&(z=s.R16I),P===s.INT&&(z=s.R32I)),v===s.RG&&(P===s.FLOAT&&(z=s.RG32F),P===s.HALF_FLOAT&&(z=s.RG16F),P===s.UNSIGNED_BYTE&&(z=s.RG8)),v===s.RG_INTEGER&&(P===s.UNSIGNED_BYTE&&(z=s.RG8UI),P===s.UNSIGNED_SHORT&&(z=s.RG16UI),P===s.UNSIGNED_INT&&(z=s.RG32UI),P===s.BYTE&&(z=s.RG8I),P===s.SHORT&&(z=s.RG16I),P===s.INT&&(z=s.RG32I)),v===s.RGB_INTEGER&&(P===s.UNSIGNED_BYTE&&(z=s.RGB8UI),P===s.UNSIGNED_SHORT&&(z=s.RGB16UI),P===s.UNSIGNED_INT&&(z=s.RGB32UI),P===s.BYTE&&(z=s.RGB8I),P===s.SHORT&&(z=s.RGB16I),P===s.INT&&(z=s.RGB32I)),v===s.RGBA_INTEGER&&(P===s.UNSIGNED_BYTE&&(z=s.RGBA8UI),P===s.UNSIGNED_SHORT&&(z=s.RGBA16UI),P===s.UNSIGNED_INT&&(z=s.RGBA32UI),P===s.BYTE&&(z=s.RGBA8I),P===s.SHORT&&(z=s.RGBA16I),P===s.INT&&(z=s.RGBA32I)),v===s.RGB&&(P===s.UNSIGNED_INT_5_9_9_9_REV&&(z=s.RGB9_E5),P===s.UNSIGNED_INT_10F_11F_11F_REV&&(z=s.R11F_G11F_B10F)),v===s.RGBA){let Q=H?Gr:be.getTransfer(N);P===s.FLOAT&&(z=s.RGBA32F),P===s.HALF_FLOAT&&(z=s.RGBA16F),P===s.UNSIGNED_BYTE&&(z=Q===Ae?s.SRGB8_ALPHA8:s.RGBA8),P===s.UNSIGNED_SHORT_4_4_4_4&&(z=s.RGBA4),P===s.UNSIGNED_SHORT_5_5_5_1&&(z=s.RGB5_A1)}return(z===s.R16F||z===s.R32F||z===s.RG16F||z===s.RG32F||z===s.RGBA16F||z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function M(y,v){let P;return y?v===null||v===ss||v===rs?P=s.DEPTH24_STENCIL8:v===ui?P=s.DEPTH32F_STENCIL8:v===gr&&(P=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ss||v===rs?P=s.DEPTH_COMPONENT24:v===ui?P=s.DEPTH_COMPONENT32F:v===gr&&(P=s.DEPTH_COMPONENT16),P}function w(y,v){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Sn&&y.minFilter!==hi?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function R(y){let v=y.target;v.removeEventListener("dispose",R),A(v),v.isVideoTexture&&l.delete(v)}function T(y){let v=y.target;v.removeEventListener("dispose",T),E(v)}function A(y){let v=n.get(y);if(v.__webglInit===void 0)return;let P=y.source,N=d.get(P);if(N){let H=N[v.__cacheKey];H.usedTimes--,H.usedTimes===0&&b(y),Object.keys(N).length===0&&d.delete(P)}n.remove(y)}function b(y){let v=n.get(y);s.deleteTexture(v.__webglTexture);let P=y.source,N=d.get(P);delete N[v.__cacheKey],o.memory.textures--}function E(y){let v=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(v.__webglFramebuffer[N]))for(let H=0;H<v.__webglFramebuffer[N].length;H++)s.deleteFramebuffer(v.__webglFramebuffer[N][H]);else s.deleteFramebuffer(v.__webglFramebuffer[N]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[N])}else{if(Array.isArray(v.__webglFramebuffer))for(let N=0;N<v.__webglFramebuffer.length;N++)s.deleteFramebuffer(v.__webglFramebuffer[N]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let N=0;N<v.__webglColorRenderbuffer.length;N++)v.__webglColorRenderbuffer[N]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[N]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let P=y.textures;for(let N=0,H=P.length;N<H;N++){let z=n.get(P[N]);z.__webglTexture&&(s.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(P[N])}n.remove(y)}let D=0;function F(){D=0}function B(){let y=D;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),D+=1,y}function Z(y){let v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function I(y,v){let P=n.get(y);if(y.isVideoTexture&&ht(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&P.__version!==y.version){let N=y.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(P,y,v);return}}else y.isExternalTexture&&(P.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,P.__webglTexture,s.TEXTURE0+v)}function X(y,v){let P=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){at(P,y,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,P.__webglTexture,s.TEXTURE0+v)}function V(y,v){let P=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){at(P,y,v);return}e.bindTexture(s.TEXTURE_3D,P.__webglTexture,s.TEXTURE0+v)}function k(y,v){let P=n.get(y);if(y.version>0&&P.__version!==y.version){ct(P,y,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+v)}let j={[ei]:s.REPEAT,[Qi]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},xt={[Sn]:s.NEAREST,[$u]:s.NEAREST_MIPMAP_NEAREST,[go]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[Ja]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},yt={[Qu]:s.NEVER,[rf]:s.ALWAYS,[ju]:s.LESS,[uh]:s.LEQUAL,[tf]:s.EQUAL,[sf]:s.GEQUAL,[ef]:s.GREATER,[nf]:s.NOTEQUAL};function Rt(y,v){if(v.type===ui&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===hi||v.magFilter===Ja||v.magFilter===go||v.magFilter===is||v.minFilter===hi||v.minFilter===Ja||v.minFilter===go||v.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(y,s.TEXTURE_WRAP_S,j[v.wrapS]),s.texParameteri(y,s.TEXTURE_WRAP_T,j[v.wrapT]),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,j[v.wrapR]),s.texParameteri(y,s.TEXTURE_MAG_FILTER,xt[v.magFilter]),s.texParameteri(y,s.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(s.texParameteri(y,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(y,s.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Sn||v.minFilter!==go&&v.minFilter!==is||v.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");s.texParameterf(y,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function te(y,v){let P=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",R));let N=v.source,H=d.get(N);H===void 0&&(H={},d.set(N,H));let z=Z(v);if(z!==y.__cacheKey){H[z]===void 0&&(H[z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,P=!0),H[z].usedTimes++;let Q=H[y.__cacheKey];Q!==void 0&&(H[y.__cacheKey].usedTimes--,Q.usedTimes===0&&b(v)),y.__cacheKey=z,y.__webglTexture=H[z].texture}return P}function Wt(y,v,P){return Math.floor(Math.floor(y/P)/v)}function re(y,v,P,N){let z=y.updateRanges;if(z.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,P,N,v.data);else{z.sort((K,ft)=>K.start-ft.start);let Q=0;for(let K=1;K<z.length;K++){let ft=z[Q],st=z[K],Tt=ft.start+ft.count,vt=Wt(st.start,v.width,4),Yt=Wt(ft.start,v.width,4);st.start<=Tt+1&&vt===Yt&&Wt(st.start+st.count-1,v.width,4)===vt?ft.count=Math.max(ft.count,st.start+st.count-ft.start):(++Q,z[Q]=st)}z.length=Q+1;let W=s.getParameter(s.UNPACK_ROW_LENGTH),ot=s.getParameter(s.UNPACK_SKIP_PIXELS),ut=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let K=0,ft=z.length;K<ft;K++){let st=z[K],Tt=Math.floor(st.start/4),vt=Math.ceil(st.count/4),Yt=Tt%v.width,G=Math.floor(Tt/v.width),lt=vt,_t=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Yt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),e.texSubImage2D(s.TEXTURE_2D,0,Yt,G,lt,_t,P,N,v.data)}y.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,W),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),s.pixelStorei(s.UNPACK_SKIP_ROWS,ut)}}function at(y,v,P){let N=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(N=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(N=s.TEXTURE_3D);let H=te(y,v),z=v.source;e.bindTexture(N,y.__webglTexture,s.TEXTURE0+P);let Q=n.get(z);if(z.version!==Q.__version||H===!0){e.activeTexture(s.TEXTURE0+P);let W=be.getPrimaries(be.workingColorSpace),ot=v.colorSpace===Bi?null:be.getPrimaries(v.colorSpace),ut=v.colorSpace===Bi||W===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let K=x(v.image,!1,i.maxTextureSize);K=Bt(v,K);let ft=r.convert(v.format,v.colorSpace),st=r.convert(v.type),Tt=S(v.internalFormat,ft,st,v.colorSpace,v.isVideoTexture);Rt(N,v);let vt,Yt=v.mipmaps,G=v.isVideoTexture!==!0,lt=Q.__version===void 0||H===!0,_t=z.dataReady,zt=w(v,K);if(v.isDepthTexture)Tt=M(v.format===os,v.type),lt&&(G?e.texStorage2D(s.TEXTURE_2D,1,Tt,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,Tt,K.width,K.height,0,ft,st,null));else if(v.isDataTexture)if(Yt.length>0){G&&lt&&e.texStorage2D(s.TEXTURE_2D,zt,Tt,Yt[0].width,Yt[0].height);for(let Mt=0,gt=Yt.length;Mt<gt;Mt++)vt=Yt[Mt],G?_t&&e.texSubImage2D(s.TEXTURE_2D,Mt,0,0,vt.width,vt.height,ft,st,vt.data):e.texImage2D(s.TEXTURE_2D,Mt,Tt,vt.width,vt.height,0,ft,st,vt.data);v.generateMipmaps=!1}else G?(lt&&e.texStorage2D(s.TEXTURE_2D,zt,Tt,K.width,K.height),_t&&re(v,K,ft,st)):e.texImage2D(s.TEXTURE_2D,0,Tt,K.width,K.height,0,ft,st,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){G&&lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Tt,Yt[0].width,Yt[0].height,K.depth);for(let Mt=0,gt=Yt.length;Mt<gt;Mt++)if(vt=Yt[Mt],v.format!==Fn)if(ft!==null)if(G){if(_t)if(v.layerUpdates.size>0){let Vt=vh(vt.width,vt.height,v.format,v.type);for(let ae of v.layerUpdates){let Ie=vt.data.subarray(ae*Vt/vt.data.BYTES_PER_ELEMENT,(ae+1)*Vt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,ae,vt.width,vt.height,1,ft,Ie)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,vt.width,vt.height,K.depth,ft,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Mt,Tt,vt.width,vt.height,K.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?_t&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,vt.width,vt.height,K.depth,ft,st,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Mt,Tt,vt.width,vt.height,K.depth,0,ft,st,vt.data)}else{G&&lt&&e.texStorage2D(s.TEXTURE_2D,zt,Tt,Yt[0].width,Yt[0].height);for(let Mt=0,gt=Yt.length;Mt<gt;Mt++)vt=Yt[Mt],v.format!==Fn?ft!==null?G?_t&&e.compressedTexSubImage2D(s.TEXTURE_2D,Mt,0,0,vt.width,vt.height,ft,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,Mt,Tt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?_t&&e.texSubImage2D(s.TEXTURE_2D,Mt,0,0,vt.width,vt.height,ft,st,vt.data):e.texImage2D(s.TEXTURE_2D,Mt,Tt,vt.width,vt.height,0,ft,st,vt.data)}else if(v.isDataArrayTexture)if(G){if(lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Tt,K.width,K.height,K.depth),_t)if(v.layerUpdates.size>0){let Mt=vh(K.width,K.height,v.format,v.type);for(let gt of v.layerUpdates){let Vt=K.data.subarray(gt*Mt/K.data.BYTES_PER_ELEMENT,(gt+1)*Mt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,K.width,K.height,1,ft,st,Vt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ft,st,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,K.width,K.height,K.depth,0,ft,st,K.data);else if(v.isData3DTexture)G?(lt&&e.texStorage3D(s.TEXTURE_3D,zt,Tt,K.width,K.height,K.depth),_t&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ft,st,K.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,K.width,K.height,K.depth,0,ft,st,K.data);else if(v.isFramebufferTexture){if(lt)if(G)e.texStorage2D(s.TEXTURE_2D,zt,Tt,K.width,K.height);else{let Mt=K.width,gt=K.height;for(let Vt=0;Vt<zt;Vt++)e.texImage2D(s.TEXTURE_2D,Vt,Tt,Mt,gt,0,ft,st,null),Mt>>=1,gt>>=1}}else if(Yt.length>0){if(G&&lt){let Mt=Dt(Yt[0]);e.texStorage2D(s.TEXTURE_2D,zt,Tt,Mt.width,Mt.height)}for(let Mt=0,gt=Yt.length;Mt<gt;Mt++)vt=Yt[Mt],G?_t&&e.texSubImage2D(s.TEXTURE_2D,Mt,0,0,ft,st,vt):e.texImage2D(s.TEXTURE_2D,Mt,Tt,ft,st,vt);v.generateMipmaps=!1}else if(G){if(lt){let Mt=Dt(K);e.texStorage2D(s.TEXTURE_2D,zt,Tt,Mt.width,Mt.height)}_t&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,st,K)}else e.texImage2D(s.TEXTURE_2D,0,Tt,ft,st,K);m(v)&&p(N),Q.__version=z.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function ct(y,v,P){if(v.image.length!==6)return;let N=te(y,v),H=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,y.__webglTexture,s.TEXTURE0+P);let z=n.get(H);if(H.version!==z.__version||N===!0){e.activeTexture(s.TEXTURE0+P);let Q=be.getPrimaries(be.workingColorSpace),W=v.colorSpace===Bi?null:be.getPrimaries(v.colorSpace),ot=v.colorSpace===Bi||Q===W?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let ut=v.isCompressedTexture||v.image[0].isCompressedTexture,K=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let gt=0;gt<6;gt++)!ut&&!K?ft[gt]=x(v.image[gt],!0,i.maxCubemapSize):ft[gt]=K?v.image[gt].image:v.image[gt],ft[gt]=Bt(v,ft[gt]);let st=ft[0],Tt=r.convert(v.format,v.colorSpace),vt=r.convert(v.type),Yt=S(v.internalFormat,Tt,vt,v.colorSpace),G=v.isVideoTexture!==!0,lt=z.__version===void 0||N===!0,_t=H.dataReady,zt=w(v,st);Rt(s.TEXTURE_CUBE_MAP,v);let Mt;if(ut){G&&lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,zt,Yt,st.width,st.height);for(let gt=0;gt<6;gt++){Mt=ft[gt].mipmaps;for(let Vt=0;Vt<Mt.length;Vt++){let ae=Mt[Vt];v.format!==Fn?Tt!==null?G?_t&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,ae.width,ae.height,Tt,ae.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,Yt,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,ae.width,ae.height,Tt,vt,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,Yt,ae.width,ae.height,0,Tt,vt,ae.data)}}}else{if(Mt=v.mipmaps,G&&lt){Mt.length>0&&zt++;let gt=Dt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,zt,Yt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(K){G?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ft[gt].width,ft[gt].height,Tt,vt,ft[gt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Yt,ft[gt].width,ft[gt].height,0,Tt,vt,ft[gt].data);for(let Vt=0;Vt<Mt.length;Vt++){let Ie=Mt[Vt].image[gt].image;G?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,Ie.width,Ie.height,Tt,vt,Ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,Yt,Ie.width,Ie.height,0,Tt,vt,Ie.data)}}else{G?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Tt,vt,ft[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Yt,Tt,vt,ft[gt]);for(let Vt=0;Vt<Mt.length;Vt++){let ae=Mt[Vt];G?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,Tt,vt,ae.image[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,Yt,Tt,vt,ae.image[gt])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),z.__version=H.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function At(y,v,P,N,H,z){let Q=r.convert(P.format,P.colorSpace),W=r.convert(P.type),ot=S(P.internalFormat,Q,W,P.colorSpace),ut=n.get(v),K=n.get(P);if(K.__renderTarget=v,!ut.__hasExternalTextures){let ft=Math.max(1,v.width>>z),st=Math.max(1,v.height>>z);H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?e.texImage3D(H,z,ot,ft,st,v.depth,0,Q,W,null):e.texImage2D(H,z,ot,ft,st,0,Q,W,null)}e.bindFramebuffer(s.FRAMEBUFFER,y),J(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,N,H,K.__webglTexture,0,Y(v)):(H===s.TEXTURE_2D||H>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,N,H,K.__webglTexture,z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(y,v,P){if(s.bindRenderbuffer(s.RENDERBUFFER,y),v.depthBuffer){let N=v.depthTexture,H=N&&N.isDepthTexture?N.type:null,z=M(v.stencilBuffer,H),Q=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=Y(v);J(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,W,z,v.width,v.height):P?s.renderbufferStorageMultisample(s.RENDERBUFFER,W,z,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,z,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,y)}else{let N=v.textures;for(let H=0;H<N.length;H++){let z=N[H],Q=r.convert(z.format,z.colorSpace),W=r.convert(z.type),ot=S(z.internalFormat,Q,W,z.colorSpace),ut=Y(v);P&&J(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,ot,v.width,v.height):J(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,ot,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ot,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=n.get(v.depthTexture);N.__renderTarget=v,(!N.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),I(v.depthTexture,0);let H=N.__webglTexture,z=Y(v);if(v.depthTexture.format===ar)J(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,H,0,z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,H,0);else if(v.depthTexture.format===os)J(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,H,0,z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function bt(y){let v=n.get(y),P=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){let N=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),N){let H=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,N.removeEventListener("dispose",H)};N.addEventListener("dispose",H),v.__depthDisposeCallback=H}v.__boundDepthTexture=N}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let N=y.texture.mipmaps;N&&N.length>0?dt(v.__webglFramebuffer[0],y):dt(v.__webglFramebuffer,y)}else if(P){v.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[N]),v.__webglDepthbuffer[N]===void 0)v.__webglDepthbuffer[N]=s.createRenderbuffer(),tt(v.__webglDepthbuffer[N],y,!1);else{let H=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[N];s.bindRenderbuffer(s.RENDERBUFFER,z),s.framebufferRenderbuffer(s.FRAMEBUFFER,H,s.RENDERBUFFER,z)}}else{let N=y.texture.mipmaps;if(N&&N.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),tt(v.__webglDepthbuffer,y,!1);else{let H=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,z),s.framebufferRenderbuffer(s.FRAMEBUFFER,H,s.RENDERBUFFER,z)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(y,v,P){let N=n.get(y);v!==void 0&&At(N.__webglFramebuffer,y,y.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),P!==void 0&&bt(y)}function U(y){let v=y.texture,P=n.get(y),N=n.get(v);y.addEventListener("dispose",T);let H=y.textures,z=y.isWebGLCubeRenderTarget===!0,Q=H.length>1;if(Q||(N.__webglTexture===void 0&&(N.__webglTexture=s.createTexture()),N.__version=v.version,o.memory.textures++),z){P.__webglFramebuffer=[];for(let W=0;W<6;W++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[W]=[];for(let ot=0;ot<v.mipmaps.length;ot++)P.__webglFramebuffer[W][ot]=s.createFramebuffer()}else P.__webglFramebuffer[W]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let W=0;W<v.mipmaps.length;W++)P.__webglFramebuffer[W]=s.createFramebuffer()}else P.__webglFramebuffer=s.createFramebuffer();if(Q)for(let W=0,ot=H.length;W<ot;W++){let ut=n.get(H[W]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),o.memory.textures++)}if(y.samples>0&&J(y)===!1){P.__webglMultisampledFramebuffer=s.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let W=0;W<H.length;W++){let ot=H[W];P.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,P.__webglColorRenderbuffer[W]);let ut=r.convert(ot.format,ot.colorSpace),K=r.convert(ot.type),ft=S(ot.internalFormat,ut,K,ot.colorSpace,y.isXRRenderTarget===!0),st=Y(y);s.renderbufferStorageMultisample(s.RENDERBUFFER,st,ft,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,P.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),y.depthBuffer&&(P.__webglDepthRenderbuffer=s.createRenderbuffer(),tt(P.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(z){e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,v);for(let W=0;W<6;W++)if(v.mipmaps&&v.mipmaps.length>0)for(let ot=0;ot<v.mipmaps.length;ot++)At(P.__webglFramebuffer[W][ot],y,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ot);else At(P.__webglFramebuffer[W],y,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){for(let W=0,ot=H.length;W<ot;W++){let ut=H[W],K=n.get(ut),ft=s.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ft=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,K.__webglTexture),Rt(ft,ut),At(P.__webglFramebuffer,y,ut,s.COLOR_ATTACHMENT0+W,ft,0),m(ut)&&p(ft)}e.unbindTexture()}else{let W=s.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(W=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(W,N.__webglTexture),Rt(W,v),v.mipmaps&&v.mipmaps.length>0)for(let ot=0;ot<v.mipmaps.length;ot++)At(P.__webglFramebuffer[ot],y,v,s.COLOR_ATTACHMENT0,W,ot);else At(P.__webglFramebuffer,y,v,s.COLOR_ATTACHMENT0,W,0);m(v)&&p(W),e.unbindTexture()}y.depthBuffer&&bt(y)}function Ht(y){let v=y.textures;for(let P=0,N=v.length;P<N;P++){let H=v[P];if(m(H)){let z=_(y),Q=n.get(H).__webglTexture;e.bindTexture(z,Q),p(z),e.unbindTexture()}}}let It=[],rt=[];function nt(y){if(y.samples>0){if(J(y)===!1){let v=y.textures,P=y.width,N=y.height,H=s.COLOR_BUFFER_BIT,z=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=n.get(y),W=v.length>1;if(W)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);let ot=y.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(H|=s.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(H|=s.STENCIL_BUFFER_BIT)),W){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Q.__webglColorRenderbuffer[ut]);let K=n.get(v[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,P,N,0,0,P,N,H,s.NEAREST),c===!0&&(It.length=0,rt.length=0,It.push(s.COLOR_ATTACHMENT0+ut),y.depthBuffer&&y.resolveDepthBuffer===!1&&(It.push(z),rt.push(z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,rt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,Q.__webglColorRenderbuffer[ut]);let K=n.get(v[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,K,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){let v=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Y(y){return Math.min(i.maxSamples,y.samples)}function J(y){let v=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ht(y){let v=o.render.frame;l.get(y)!==v&&(l.set(y,v),y.update())}function Bt(y,v){let P=y.colorSpace,N=y.format,H=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||P!==ys&&P!==Bi&&(be.getTransfer(P)===Ae?(N!==Fn||H!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),v}function Dt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(h.width=y.naturalWidth||y.width,h.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(h.width=y.displayWidth,h.height=y.displayHeight):(h.width=y.width,h.height=y.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=I,this.setTexture2DArray=X,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=Nt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=J}function qx(s,t){function e(n,i=Bi){let r,o=be.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===ja)return s.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===sh)return s.BYTE;if(n===rh)return s.SHORT;if(n===gr)return s.UNSIGNED_SHORT;if(n===Qa)return s.INT;if(n===ss)return s.UNSIGNED_INT;if(n===ui)return s.FLOAT;if(n===fn)return s.HALF_FLOAT;if(n===lh)return s.ALPHA;if(n===ch)return s.RGB;if(n===Fn)return s.RGBA;if(n===ar)return s.DEPTH_COMPONENT;if(n===os)return s.DEPTH_STENCIL;if(n===el)return s.RED;if(n===nl)return s.RED_INTEGER;if(n===hh)return s.RG;if(n===il)return s.RG_INTEGER;if(n===sl)return s.RGBA_INTEGER;if(n===xo||n===vo||n===yo||n===_o)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===ol||n===al||n===ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===hl)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ul)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===vl||n===yl||n===_l||n===Ml||n===bl||n===Sl||n===El||n===wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_l)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===Al||n===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tl)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Pl||n===Il||n===Dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
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

}`,Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new eo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _e({vertexShader:Yx,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Ne(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends Fi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,f=null,d=null,u=null,g=null,x=typeof XRWebGLBinding<"u",m=new Ih,p={},_=e.getContextAttributes(),S=null,M=null,w=[],R=[],T=new kt,A=null,b=new hn;b.viewport=new ke;let E=new hn;E.viewport=new ke;let D=[b,E],F=new La,B=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ct=w[at];return ct===void 0&&(ct=new hr,w[at]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(at){let ct=w[at];return ct===void 0&&(ct=new hr,w[at]=ct),ct.getGripSpace()},this.getHand=function(at){let ct=w[at];return ct===void 0&&(ct=new hr,w[at]=ct),ct.getHandSpace()};function I(at){let ct=R.indexOf(at.inputSource);if(ct===-1)return;let At=w[ct];At!==void 0&&(At.update(at.inputSource,at.frame,h||o),At.dispatchEvent({type:at.type,data:at.inputSource}))}function X(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",V);for(let at=0;at<w.length;at++){let ct=R[at];ct!==null&&(R[at]=null,w[at].disconnect(ct))}B=null,Z=null,m.reset();for(let at in p)delete p[at];t.setRenderTarget(S),u=null,d=null,f=null,i=null,M=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(at){h=at},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(at){if(i=at,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",X),i.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,tt=null,dt=null;_.depth&&(dt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=_.stencil?os:ar,tt=_.stencil?rs:ss);let bt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Je(d.textureWidth,d.textureHeight,{format:Fn,type:Yn,depthTexture:new Ss(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let At={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,At),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Je(u.framebufferWidth,u.framebufferHeight,{format:Fn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(at){for(let ct=0;ct<at.removed.length;ct++){let At=at.removed[ct],tt=R.indexOf(At);tt>=0&&(R[tt]=null,w[tt].disconnect(At))}for(let ct=0;ct<at.added.length;ct++){let At=at.added[ct],tt=R.indexOf(At);if(tt===-1){for(let bt=0;bt<w.length;bt++)if(bt>=R.length){R.push(At),tt=bt;break}else if(R[bt]===null){R[bt]=At,tt=bt;break}if(tt===-1)break}let dt=w[tt];dt&&dt.connect(At)}}let k=new L,j=new L;function xt(at,ct,At){k.setFromMatrixPosition(ct.matrixWorld),j.setFromMatrixPosition(At.matrixWorld);let tt=k.distanceTo(j),dt=ct.projectionMatrix.elements,bt=At.projectionMatrix.elements,Nt=dt[14]/(dt[10]-1),U=dt[14]/(dt[10]+1),Ht=(dt[9]+1)/dt[5],It=(dt[9]-1)/dt[5],rt=(dt[8]-1)/dt[0],nt=(bt[8]+1)/bt[0],Y=Nt*rt,J=Nt*nt,ht=tt/(-rt+nt),Bt=ht*-rt;if(ct.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Bt),at.translateZ(ht),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),dt[10]===-1)at.projectionMatrix.copy(ct.projectionMatrix),at.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let Dt=Nt+ht,y=U+ht,v=Y-Bt,P=J+(tt-Bt),N=Ht*U/y*Dt,H=It*U/y*Dt;at.projectionMatrix.makePerspective(v,P,N,H,Dt,y),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function yt(at,ct){ct===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ct.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(i===null)return;let ct=at.near,At=at.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(At=m.depthFar)),F.near=E.near=b.near=ct,F.far=E.far=b.far=At,(B!==F.near||Z!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,Z=F.far),F.layers.mask=at.layers.mask|6,b.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;let tt=at.parent,dt=F.cameras;yt(F,tt);for(let bt=0;bt<dt.length;bt++)yt(dt[bt],tt);dt.length===2?xt(F,b,E):F.projectionMatrix.copy(b.projectionMatrix),Rt(at,F,tt)};function Rt(at,ct,At){At===null?at.matrix.copy(ct.matrixWorld):(at.matrix.copy(At.matrixWorld),at.matrix.invert(),at.matrix.multiply(ct.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ct.projectionMatrix),at.projectionMatrixInverse.copy(ct.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=_s*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(at){c=at,d!==null&&(d.fixedFoveation=at),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=at)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(at){return p[at]};let te=null;function Wt(at,ct){if(l=ct.getViewerPose(h||o),g=ct,l!==null){let At=l.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let tt=!1;At.length!==F.cameras.length&&(F.cameras.length=0,tt=!0);for(let U=0;U<At.length;U++){let Ht=At[U],It=null;if(u!==null)It=u.getViewport(Ht);else{let nt=f.getViewSubImage(d,Ht);It=nt.viewport,U===0&&(t.setRenderTargetTextures(M,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(M))}let rt=D[U];rt===void 0&&(rt=new hn,rt.layers.enable(U),rt.viewport=new ke,D[U]=rt),rt.matrix.fromArray(Ht.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Ht.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(It.x,It.y,It.width,It.height),U===0&&(F.matrix.copy(rt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),tt===!0&&F.cameras.push(rt)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let U=f.getDepthInformation(At[0]);U&&U.isValid&&U.texture&&m.init(U,i.renderState)}if(dt&&dt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let U=0;U<At.length;U++){let Ht=At[U].camera;if(Ht){let It=p[Ht];It||(It=new eo,p[Ht]=It);let rt=f.getCameraImage(Ht);It.sourceTexture=rt}}}}for(let At=0;At<w.length;At++){let tt=R[At],dt=w[At];tt!==null&&dt!==void 0&&dt.update(tt,ct,h||o)}te&&te(at,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}let re=new Lf;re.setAnimationLoop(Wt),this.setAnimationLoop=function(at){te=at},this.dispose=function(){}}},Ds=new sn,$x=new Ct;function Kx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,S):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),S=_.envMap,M=_.envMapRotation;S&&(m.envMap.value=S,Ds.copy(M),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),m.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(Ds)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,S){let M=S.program;n.uniformBlockBinding(_,M)}function h(_,S){let M=i[_.id];M===void 0&&(g(_),M=l(_),i[_.id]=M,_.addEventListener("dispose",m));let w=S.program;n.updateUBOMapping(_,w);let R=t.render.frame;r[_.id]!==R&&(d(_),r[_.id]=R)}function l(_){let S=f();_.__bindingPointIndex=S;let M=s.createBuffer(),w=_.__size,R=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,w,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let S=i[_.id],M=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let R=0,T=M.length;R<T;R++){let A=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,E=A.length;b<E;b++){let D=A[b];if(u(D,R,b,w)===!0){let F=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],Z=0;for(let I=0;I<B.length;I++){let X=B[I],V=x(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,F+Z,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,Z),Z+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(_,S,M,w){let R=_.value,T=S+"_"+M;if(w[T]===void 0)return typeof R=="number"||typeof R=="boolean"?w[T]=R:w[T]=R.clone(),!0;{let A=w[T];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return w[T]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function g(_){let S=_.uniforms,M=0,w=16;for(let T=0,A=S.length;T<A;T++){let b=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,D=b.length;E<D;E++){let F=b[E],B=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,I=B.length;Z<I;Z++){let X=B[Z],V=x(X),k=M%w,j=k%V.boundary,xt=k+j;M+=j,xt!==0&&w-xt<V.storage&&(M+=w-xt),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=V.storage}}}let R=M%w;return R>0&&(M+=w-R),_.__size=M,_.__cache={},this}function x(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function m(_){let S=_.target;S.removeEventListener("dispose",m);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:h,dispose:p}}var Ol=class{constructor(t={}){let{canvas:e=of(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,w=!1;this._outputColorSpace=bn;let R=0,T=0,A=null,b=-1,E=null,D=new ke,F=new ke,B=null,Z=new Et(0),I=0,X=e.width,V=e.height,k=1,j=null,xt=null,yt=new ke(0,0,X,V),Rt=new ke(0,0,X,V),te=!1,Wt=new ji,re=!1,at=!1,ct=new Ct,At=new L,tt=new ke,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function Nt(){return A===null?k:1}let U=n;function Ht(C,q){return e.getContext(C,q)}try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),U===null){let q="webgl2";if(U=Ht(q,C),U===null)throw Ht(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let It,rt,nt,Y,J,ht,Bt,Dt,y,v,P,N,H,z,Q,W,ot,ut,K,ft,st,Tt,vt,Yt;function G(){It=new mg(U),It.init(),Tt=new qx(U,It),rt=new lg(U,It,t,Tt),nt=new Wx(U,It),rt.reversedDepthBuffer&&d&&nt.buffers.depth.setReversed(!0),Y=new vg(U),J=new Ix,ht=new Xx(U,It,nt,J,rt,Tt,Y),Bt=new hg(M),Dt=new pg(M),y=new Ep(U),vt=new og(U,y),v=new gg(U,y,Y,vt),P=new _g(U,v,y,Y),K=new yg(U,rt,ht),W=new cg(J),N=new Px(M,Bt,Dt,It,rt,vt,W),H=new Kx(M,J),z=new Lx,Q=new Bx(It),ut=new rg(M,Bt,Dt,nt,P,u,c),ot=new Vx(M,P,rt),Yt=new Jx(U,Y,rt,nt),ft=new ag(U,It,Y),st=new xg(U,It,Y),Y.programs=N.programs,M.capabilities=rt,M.extensions=It,M.properties=J,M.renderLists=z,M.shadowMap=ot,M.state=nt,M.info=Y}G();let lt=new Dh(M,U);this.xr=lt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=It.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=It.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(X,V,!1))},this.getSize=function(C){return C.set(X,V)},this.setSize=function(C,q,it=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,V=q,e.width=Math.floor(C*k),e.height=Math.floor(q*k),it===!0&&(e.style.width=C+"px",e.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(X*k,V*k).floor()},this.setDrawingBufferSize=function(C,q,it){X=C,V=q,k=it,e.width=Math.floor(C*it),e.height=Math.floor(q*it),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(yt)},this.setViewport=function(C,q,it,et){C.isVector4?yt.set(C.x,C.y,C.z,C.w):yt.set(C,q,it,et),nt.viewport(D.copy(yt).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(Rt)},this.setScissor=function(C,q,it,et){C.isVector4?Rt.set(C.x,C.y,C.z,C.w):Rt.set(C,q,it,et),nt.scissor(F.copy(Rt).multiplyScalar(k).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(C){nt.setScissorTest(te=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){xt=C},this.getClearColor=function(C){return C.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,it=!0){let et=0;if(C){let $=!1;if(A!==null){let St=A.texture.format;$=St===sl||St===il||St===nl}if($){let St=A.texture.type,Ot=St===Yn||St===ss||St===gr||St===rs||St===ja||St===tl,Xt=ut.getClearColor(),Gt=ut.getClearAlpha(),oe=Xt.r,le=Xt.g,ne=Xt.b;Ot?(g[0]=oe,g[1]=le,g[2]=ne,g[3]=Gt,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=oe,x[1]=le,x[2]=ne,x[3]=Gt,U.clearBufferiv(U.COLOR,0,x))}else et|=U.COLOR_BUFFER_BIT}q&&(et|=U.DEPTH_BUFFER_BIT),it&&(et|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),ut.dispose(),z.dispose(),Q.dispose(),J.dispose(),Bt.dispose(),Dt.dispose(),P.dispose(),vt.dispose(),Yt.dispose(),N.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",kn),lt.removeEventListener("sessionend",Wi),gi.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let C=Y.autoReset,q=ot.enabled,it=ot.autoUpdate,et=ot.needsUpdate,$=ot.type;G(),Y.autoReset=C,ot.enabled=q,ot.autoUpdate=it,ot.needsUpdate=et,ot.type=$}function Mt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function gt(C){let q=C.target;q.removeEventListener("dispose",gt),Vt(q)}function Vt(C){ae(C),J.remove(C)}function ae(C){let q=J.get(C).programs;q!==void 0&&(q.forEach(function(it){N.releaseProgram(it)}),C.isShaderMaterial&&N.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,it,et,$,St){q===null&&(q=dt);let Ot=$.isMesh&&$.matrixWorld.determinant()<0,Xt=we(C,q,it,et,$);nt.setMaterial(et,Ot);let Gt=it.index,oe=1;if(et.wireframe===!0){if(Gt=v.getWireframeAttribute(it),Gt===void 0)return;oe=2}let le=it.drawRange,ne=it.attributes.position,ye=le.start*oe,Ue=(le.start+le.count)*oe;St!==null&&(ye=Math.max(ye,St.start*oe),Ue=Math.min(Ue,(St.start+St.count)*oe)),Gt!==null?(ye=Math.max(ye,0),Ue=Math.min(Ue,Gt.count)):ne!=null&&(ye=Math.max(ye,0),Ue=Math.min(Ue,ne.count));let je=Ue-ye;if(je<0||je===1/0)return;vt.setup($,et,Xt,it,Gt);let Ge,Fe=ft;if(Gt!==null&&(Ge=y.get(Gt),Fe=st,Fe.setIndex(Ge)),$.isMesh)et.wireframe===!0?(nt.setLineWidth(et.wireframeLinewidth*Nt()),Fe.setMode(U.LINES)):Fe.setMode(U.TRIANGLES);else if($.isLine){let se=et.linewidth;se===void 0&&(se=1),nt.setLineWidth(se*Nt()),$.isLineSegments?Fe.setMode(U.LINES):$.isLineLoop?Fe.setMode(U.LINE_LOOP):Fe.setMode(U.LINE_STRIP)}else $.isPoints?Fe.setMode(U.POINTS):$.isSprite&&Fe.setMode(U.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))Fe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let se=$._multiDrawStarts,$e=$._multiDrawCounts,Te=$._multiDrawCount,Hn=Gt?y.get(Gt).bytesPerElement:1,Xs=J.get(et).currentProgram.getUniforms();for(let Vn=0;Vn<Te;Vn++)Xs.setValue(U,"_gl_DrawID",Vn),Fe.render(se[Vn]/Hn,$e[Vn])}else if($.isInstancedMesh)Fe.renderInstances(ye,je,$.count);else if(it.isInstancedBufferGeometry){let se=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,$e=Math.min(it.instanceCount,se);Fe.renderInstances(ye,je,$e)}else Fe.render(ye,je)};function Ie(C,q,it){C.transparent===!0&&C.side===un&&C.forceSinglePass===!1?(C.side=En,C.needsUpdate=!0,wt(C,q,it),C.side=Ui,C.needsUpdate=!0,wt(C,q,it),C.side=un):wt(C,q,it)}this.compile=function(C,q,it=null){it===null&&(it=C),p=Q.get(it),p.init(q),S.push(p),it.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),C!==it&&C.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();let et=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let St=$.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){let Xt=St[Ot];Ie(Xt,it,$),et.add(Xt)}else Ie(St,it,$),et.add(St)}),p=S.pop(),et},this.compileAsync=function(C,q,it=null){let et=this.compile(C,q,it);return new Promise($=>{function St(){if(et.forEach(function(Ot){J.get(Ot).currentProgram.isReady()&&et.delete(Ot)}),et.size===0){$(C);return}setTimeout(St,10)}It.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ee=null;function ri(C){Ee&&Ee(C)}function kn(){gi.stop()}function Wi(){gi.start()}let gi=new Lf;gi.setAnimationLoop(ri),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(C){Ee=C,lt.setAnimationLoop(C),C===null?gi.stop():gi.start()},lt.addEventListener("sessionstart",kn),lt.addEventListener("sessionend",Wi),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(q),q=lt.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,q,A),p=Q.get(C,S.length),p.init(q),S.push(p),ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Wt.setFromProjectionMatrix(ct,ci,q.reversedDepth),at=this.localClippingEnabled,re=W.init(this.clippingPlanes,at),m=z.get(C,_.length),m.init(),_.push(m),lt.enabled===!0&&lt.isPresenting===!0){let St=M.xr.getDepthSensingMesh();St!==null&&Ir(St,q,-1/0,M.sortObjects)}Ir(C,q,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(j,xt),bt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,bt&&ut.addToRenderList(m,C),this.info.render.frame++,re===!0&&W.beginShadows();let it=p.state.shadowsArray;ot.render(it,C,q),re===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset();let et=m.opaque,$=m.transmissive;if(p.setupLights(),q.isArrayCamera){let St=q.cameras;if($.length>0)for(let Ot=0,Xt=St.length;Ot<Xt;Ot++){let Gt=St[Ot];Ho(et,$,C,Gt)}bt&&ut.render(C);for(let Ot=0,Xt=St.length;Ot<Xt;Ot++){let Gt=St[Ot];ko(m,C,Gt,Gt.viewport)}}else $.length>0&&Ho(et,$,C,q),bt&&ut.render(C),ko(m,C,q);A!==null&&T===0&&(ht.updateMultisampleRenderTarget(A),ht.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(M,C,q),vt.resetDefaultState(),b=-1,E=null,S.pop(),S.length>0?(p=S[S.length-1],re===!0&&W.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ir(C,q,it,et){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)it=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Wt.intersectsSprite(C)){et&&tt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);let Ot=P.update(C),Xt=C.material;Xt.visible&&m.push(C,Ot,Xt,it,tt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Wt.intersectsObject(C))){let Ot=P.update(C),Xt=C.material;if(et&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),tt.copy(C.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),tt.copy(Ot.boundingSphere.center)),tt.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(Xt)){let Gt=Ot.groups;for(let oe=0,le=Gt.length;oe<le;oe++){let ne=Gt[oe],ye=Xt[ne.materialIndex];ye&&ye.visible&&m.push(C,Ot,ye,it,tt.z,ne)}}else Xt.visible&&m.push(C,Ot,Xt,it,tt.z,null)}}let St=C.children;for(let Ot=0,Xt=St.length;Ot<Xt;Ot++)Ir(St[Ot],q,it,et)}function ko(C,q,it,et){let $=C.opaque,St=C.transmissive,Ot=C.transparent;p.setupLightsView(it),re===!0&&W.setGlobalState(M.clippingPlanes,it),et&&nt.viewport(D.copy(et)),$.length>0&&us($,q,it),St.length>0&&us(St,q,it),Ot.length>0&&us(Ot,q,it),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Ho(C,q,it,et){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new Je(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?fn:Yn,minFilter:is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));let St=p.state.transmissionRenderTarget[et.id],Ot=et.viewport||D;St.setSize(Ot.z*M.transmissionResolutionScale,Ot.w*M.transmissionResolutionScale);let Xt=M.getRenderTarget(),Gt=M.getActiveCubeFace(),oe=M.getActiveMipmapLevel();M.setRenderTarget(St),M.getClearColor(Z),I=M.getClearAlpha(),I<1&&M.setClearColor(16777215,.5),M.clear(),bt&&ut.render(it);let le=M.toneMapping;M.toneMapping=Oi;let ne=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),re===!0&&W.setGlobalState(M.clippingPlanes,et),us(C,it,et),ht.updateMultisampleRenderTarget(St),ht.updateRenderTargetMipmap(St),It.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ue=0,je=q.length;Ue<je;Ue++){let Ge=q[Ue],Fe=Ge.object,se=Ge.geometry,$e=Ge.material,Te=Ge.group;if($e.side===un&&Fe.layers.test(et.layers)){let Hn=$e.side;$e.side=En,$e.needsUpdate=!0,O(Fe,it,et,se,$e,Te),$e.side=Hn,$e.needsUpdate=!0,ye=!0}}ye===!0&&(ht.updateMultisampleRenderTarget(St),ht.updateRenderTargetMipmap(St))}M.setRenderTarget(Xt,Gt,oe),M.setClearColor(Z,I),ne!==void 0&&(et.viewport=ne),M.toneMapping=le}function us(C,q,it){let et=q.isScene===!0?q.overrideMaterial:null;for(let $=0,St=C.length;$<St;$++){let Ot=C[$],Xt=Ot.object,Gt=Ot.geometry,oe=Ot.group,le=Ot.material;le.allowOverride===!0&&et!==null&&(le=et),Xt.layers.test(it.layers)&&O(Xt,q,it,Gt,le,oe)}}function O(C,q,it,et,$,St){C.onBeforeRender(M,q,it,et,$,St),C.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(M,q,it,et,C,St),$.transparent===!0&&$.side===un&&$.forceSinglePass===!1?($.side=En,$.needsUpdate=!0,M.renderBufferDirect(it,q,et,$,C,St),$.side=Ui,$.needsUpdate=!0,M.renderBufferDirect(it,q,et,$,C,St),$.side=un):M.renderBufferDirect(it,q,et,$,C,St),C.onAfterRender(M,q,it,et,$,St)}function wt(C,q,it){q.isScene!==!0&&(q=dt);let et=J.get(C),$=p.state.lights,St=p.state.shadowsArray,Ot=$.state.version,Xt=N.getParameters(C,$.state,St,q,it),Gt=N.getProgramCacheKey(Xt),oe=et.programs;et.environment=C.isMeshStandardMaterial?q.environment:null,et.fog=q.fog,et.envMap=(C.isMeshStandardMaterial?Dt:Bt).get(C.envMap||et.environment),et.envMapRotation=et.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,oe===void 0&&(C.addEventListener("dispose",gt),oe=new Map,et.programs=oe);let le=oe.get(Gt);if(le!==void 0){if(et.currentProgram===le&&et.lightsStateVersion===Ot)return fe(C,Xt),le}else Xt.uniforms=N.getUniforms(C),C.onBeforeCompile(Xt,M),le=N.acquireProgram(Xt,Gt),oe.set(Gt,le),et.uniforms=Xt.uniforms;let ne=et.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ne.clippingPlanes=W.uniform),fe(C,Xt),et.needsLights=De(C),et.lightsStateVersion=Ot,et.needsLights&&(ne.ambientLightColor.value=$.state.ambient,ne.lightProbe.value=$.state.probe,ne.directionalLights.value=$.state.directional,ne.directionalLightShadows.value=$.state.directionalShadow,ne.spotLights.value=$.state.spot,ne.spotLightShadows.value=$.state.spotShadow,ne.rectAreaLights.value=$.state.rectArea,ne.ltc_1.value=$.state.rectAreaLTC1,ne.ltc_2.value=$.state.rectAreaLTC2,ne.pointLights.value=$.state.point,ne.pointLightShadows.value=$.state.pointShadow,ne.hemisphereLights.value=$.state.hemi,ne.directionalShadowMap.value=$.state.directionalShadowMap,ne.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ne.spotShadowMap.value=$.state.spotShadowMap,ne.spotLightMatrix.value=$.state.spotLightMatrix,ne.spotLightMap.value=$.state.spotLightMap,ne.pointShadowMap.value=$.state.pointShadowMap,ne.pointShadowMatrix.value=$.state.pointShadowMatrix),et.currentProgram=le,et.uniformsList=null,le}function Qt(C){if(C.uniformsList===null){let q=C.currentProgram.getUniforms();C.uniformsList=_r.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function fe(C,q){let it=J.get(C);it.outputColorSpace=q.outputColorSpace,it.batching=q.batching,it.batchingColor=q.batchingColor,it.instancing=q.instancing,it.instancingColor=q.instancingColor,it.instancingMorph=q.instancingMorph,it.skinning=q.skinning,it.morphTargets=q.morphTargets,it.morphNormals=q.morphNormals,it.morphColors=q.morphColors,it.morphTargetsCount=q.morphTargetsCount,it.numClippingPlanes=q.numClippingPlanes,it.numIntersection=q.numClipIntersection,it.vertexAlphas=q.vertexAlphas,it.vertexTangents=q.vertexTangents,it.toneMapping=q.toneMapping}function we(C,q,it,et,$){q.isScene!==!0&&(q=dt),ht.resetTextureUnits();let St=q.fog,Ot=et.isMeshStandardMaterial?q.environment:null,Xt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ys,Gt=(et.isMeshStandardMaterial?Dt:Bt).get(et.envMap||Ot),oe=et.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,le=!!it.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),ne=!!it.morphAttributes.position,ye=!!it.morphAttributes.normal,Ue=!!it.morphAttributes.color,je=Oi;et.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(je=M.toneMapping);let Ge=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Fe=Ge!==void 0?Ge.length:0,se=J.get(et),$e=p.state.lights;if(re===!0&&(at===!0||C!==E)){let Rn=C===E&&et.id===b;W.setState(et,C,Rn)}let Te=!1;et.version===se.__version?(se.needsLights&&se.lightsStateVersion!==$e.state.version||se.outputColorSpace!==Xt||$.isBatchedMesh&&se.batching===!1||!$.isBatchedMesh&&se.batching===!0||$.isBatchedMesh&&se.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&se.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&se.instancing===!1||!$.isInstancedMesh&&se.instancing===!0||$.isSkinnedMesh&&se.skinning===!1||!$.isSkinnedMesh&&se.skinning===!0||$.isInstancedMesh&&se.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&se.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&se.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&se.instancingMorph===!1&&$.morphTexture!==null||se.envMap!==Gt||et.fog===!0&&se.fog!==St||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==W.numPlanes||se.numIntersection!==W.numIntersection)||se.vertexAlphas!==oe||se.vertexTangents!==le||se.morphTargets!==ne||se.morphNormals!==ye||se.morphColors!==Ue||se.toneMapping!==je||se.morphTargetsCount!==Fe)&&(Te=!0):(Te=!0,se.__version=et.version);let Hn=se.currentProgram;Te===!0&&(Hn=wt(et,q,$));let Xs=!1,Vn=!1,Dr=!1,Ke=Hn.getUniforms(),Jn=se.uniforms;if(nt.useProgram(Hn.program)&&(Xs=!0,Vn=!0,Dr=!0),et.id!==b&&(b=et.id,Vn=!0),Xs||E!==C){nt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ke.setValue(U,"projectionMatrix",C.projectionMatrix),Ke.setValue(U,"viewMatrix",C.matrixWorldInverse);let Un=Ke.map.cameraPosition;Un!==void 0&&Un.setValue(U,At.setFromMatrixPosition(C.matrixWorld)),rt.logarithmicDepthBuffer&&Ke.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ke.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,Vn=!0,Dr=!0)}if($.isSkinnedMesh){Ke.setOptional(U,$,"bindMatrix"),Ke.setOptional(U,$,"bindMatrixInverse");let Rn=$.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ke.setValue(U,"boneTexture",Rn.boneTexture,ht))}$.isBatchedMesh&&(Ke.setOptional(U,$,"batchingTexture"),Ke.setValue(U,"batchingTexture",$._matricesTexture,ht),Ke.setOptional(U,$,"batchingIdTexture"),Ke.setValue(U,"batchingIdTexture",$._indirectTexture,ht),Ke.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&Ke.setValue(U,"batchingColorTexture",$._colorsTexture,ht));let Qn=it.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&K.update($,it,Hn),(Vn||se.receiveShadow!==$.receiveShadow)&&(se.receiveShadow=$.receiveShadow,Ke.setValue(U,"receiveShadow",$.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Jn.envMap.value=Gt,Jn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&q.environment!==null&&(Jn.envMapIntensity.value=q.environmentIntensity),Vn&&(Ke.setValue(U,"toneMappingExposure",M.toneMappingExposure),se.needsLights&&Me(Jn,Dr),St&&et.fog===!0&&H.refreshFogUniforms(Jn,St),H.refreshMaterialUniforms(Jn,et,k,V,p.state.transmissionRenderTarget[C.id]),_r.upload(U,Qt(se),Jn,ht)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(_r.upload(U,Qt(se),Jn,ht),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ke.setValue(U,"center",$.center),Ke.setValue(U,"modelViewMatrix",$.modelViewMatrix),Ke.setValue(U,"normalMatrix",$.normalMatrix),Ke.setValue(U,"modelMatrix",$.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let Rn=et.uniformsGroups;for(let Un=0,_c=Rn.length;Un<_c;Un++){let fs=Rn[Un];Yt.update(fs,Hn),Yt.bind(fs,Hn)}}return Hn}function Me(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function De(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,q,it){let et=J.get(C);et.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),J.get(C.texture).__webglTexture=q,J.get(C.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:it,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){let it=J.get(C);it.__webglFramebuffer=q,it.__useDefaultFramebuffer=q===void 0};let Ze=U.createFramebuffer();this.setRenderTarget=function(C,q=0,it=0){A=C,R=q,T=it;let et=!0,$=null,St=!1,Ot=!1;if(C){let Gt=J.get(C);if(Gt.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(U.FRAMEBUFFER,null),et=!1;else if(Gt.__webglFramebuffer===void 0)ht.setupRenderTarget(C);else if(Gt.__hasExternalTextures)ht.rebindTextures(C,J.get(C.texture).__webglTexture,J.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ne=C.depthTexture;if(Gt.__boundDepthTexture!==ne){if(ne!==null&&J.has(ne)&&(C.width!==ne.image.width||C.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(C)}}let oe=C.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Ot=!0);let le=J.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(le[q])?$=le[q][it]:$=le[q],St=!0):C.samples>0&&ht.useMultisampledRTT(C)===!1?$=J.get(C).__webglMultisampledFramebuffer:Array.isArray(le)?$=le[it]:$=le,D.copy(C.viewport),F.copy(C.scissor),B=C.scissorTest}else D.copy(yt).multiplyScalar(k).floor(),F.copy(Rt).multiplyScalar(k).floor(),B=te;if(it!==0&&($=Ze),nt.bindFramebuffer(U.FRAMEBUFFER,$)&&et&&nt.drawBuffers(C,$),nt.viewport(D),nt.scissor(F),nt.setScissorTest(B),St){let Gt=J.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,Gt.__webglTexture,it)}else if(Ot){let Gt=q;for(let oe=0;oe<C.textures.length;oe++){let le=J.get(C.textures[oe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+oe,le.__webglTexture,it,Gt)}}else if(C!==null&&it!==0){let Gt=J.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gt.__webglTexture,it)}b=-1},this.readRenderTargetPixels=function(C,q,it,et,$,St,Ot,Xt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ot!==void 0&&(Gt=Gt[Ot]),Gt){nt.bindFramebuffer(U.FRAMEBUFFER,Gt);try{let oe=C.textures[Xt],le=oe.format,ne=oe.type;if(!rt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-et&&it>=0&&it<=C.height-$&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Xt),U.readPixels(q,it,et,$,Tt.convert(le),Tt.convert(ne),St))}finally{let oe=A!==null?J.get(A).__webglFramebuffer:null;nt.bindFramebuffer(U.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(C,q,it,et,$,St,Ot,Xt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ot!==void 0&&(Gt=Gt[Ot]),Gt)if(q>=0&&q<=C.width-et&&it>=0&&it<=C.height-$){nt.bindFramebuffer(U.FRAMEBUFFER,Gt);let oe=C.textures[Xt],le=oe.format,ne=oe.type;if(!rt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.bufferData(U.PIXEL_PACK_BUFFER,St.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Xt),U.readPixels(q,it,et,$,Tt.convert(le),Tt.convert(ne),0);let Ue=A!==null?J.get(A).__webglFramebuffer:null;nt.bindFramebuffer(U.FRAMEBUFFER,Ue);let je=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await af(U,je,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,St),U.deleteBuffer(ye),U.deleteSync(je),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,it=0){let et=Math.pow(2,-it),$=Math.floor(C.image.width*et),St=Math.floor(C.image.height*et),Ot=q!==null?q.x:0,Xt=q!==null?q.y:0;ht.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,it,0,0,Ot,Xt,$,St),nt.unbindTexture()};let Ve=U.createFramebuffer(),Le=U.createFramebuffer();this.copyTextureToTexture=function(C,q,it=null,et=null,$=0,St=null){St===null&&($!==0?(lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=$,$=0):St=0);let Ot,Xt,Gt,oe,le,ne,ye,Ue,je,Ge=C.isCompressedTexture?C.mipmaps[St]:C.image;if(it!==null)Ot=it.max.x-it.min.x,Xt=it.max.y-it.min.y,Gt=it.isBox3?it.max.z-it.min.z:1,oe=it.min.x,le=it.min.y,ne=it.isBox3?it.min.z:0;else{let Qn=Math.pow(2,-$);Ot=Math.floor(Ge.width*Qn),Xt=Math.floor(Ge.height*Qn),C.isDataArrayTexture?Gt=Ge.depth:C.isData3DTexture?Gt=Math.floor(Ge.depth*Qn):Gt=1,oe=0,le=0,ne=0}et!==null?(ye=et.x,Ue=et.y,je=et.z):(ye=0,Ue=0,je=0);let Fe=Tt.convert(q.format),se=Tt.convert(q.type),$e;q.isData3DTexture?(ht.setTexture3D(q,0),$e=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ht.setTexture2DArray(q,0),$e=U.TEXTURE_2D_ARRAY):(ht.setTexture2D(q,0),$e=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);let Te=U.getParameter(U.UNPACK_ROW_LENGTH),Hn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xs=U.getParameter(U.UNPACK_SKIP_PIXELS),Vn=U.getParameter(U.UNPACK_SKIP_ROWS),Dr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ge.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ge.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,oe),U.pixelStorei(U.UNPACK_SKIP_ROWS,le),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ne);let Ke=C.isDataArrayTexture||C.isData3DTexture,Jn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){let Qn=J.get(C),Rn=J.get(q),Un=J.get(Qn.__renderTarget),_c=J.get(Rn.__renderTarget);nt.bindFramebuffer(U.READ_FRAMEBUFFER,Un.__webglFramebuffer),nt.bindFramebuffer(U.DRAW_FRAMEBUFFER,_c.__webglFramebuffer);for(let fs=0;fs<Gt;fs++)Ke&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(C).__webglTexture,$,ne+fs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(q).__webglTexture,St,je+fs)),U.blitFramebuffer(oe,le,Ot,Xt,ye,Ue,Ot,Xt,U.DEPTH_BUFFER_BIT,U.NEAREST);nt.bindFramebuffer(U.READ_FRAMEBUFFER,null),nt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||J.has(C)){let Qn=J.get(C),Rn=J.get(q);nt.bindFramebuffer(U.READ_FRAMEBUFFER,Ve),nt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Le);for(let Un=0;Un<Gt;Un++)Ke?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qn.__webglTexture,$,ne+Un):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qn.__webglTexture,$),Jn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rn.__webglTexture,St,je+Un):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rn.__webglTexture,St),$!==0?U.blitFramebuffer(oe,le,Ot,Xt,ye,Ue,Ot,Xt,U.COLOR_BUFFER_BIT,U.NEAREST):Jn?U.copyTexSubImage3D($e,St,ye,Ue,je+Un,oe,le,Ot,Xt):U.copyTexSubImage2D($e,St,ye,Ue,oe,le,Ot,Xt);nt.bindFramebuffer(U.READ_FRAMEBUFFER,null),nt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Jn?C.isDataTexture||C.isData3DTexture?U.texSubImage3D($e,St,ye,Ue,je,Ot,Xt,Gt,Fe,se,Ge.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D($e,St,ye,Ue,je,Ot,Xt,Gt,Fe,Ge.data):U.texSubImage3D($e,St,ye,Ue,je,Ot,Xt,Gt,Fe,se,Ge):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,St,ye,Ue,Ot,Xt,Fe,se,Ge.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,St,ye,Ue,Ge.width,Ge.height,Fe,Ge.data):U.texSubImage2D(U.TEXTURE_2D,St,ye,Ue,Ot,Xt,Fe,se,Ge);U.pixelStorei(U.UNPACK_ROW_LENGTH,Te),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Hn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xs),U.pixelStorei(U.UNPACK_SKIP_ROWS,Vn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Dr),St===0&&q.generateMipmaps&&U.generateMipmap($e),nt.unbindTexture()},this.initRenderTarget=function(C){J.get(C).__webglFramebuffer===void 0&&ht.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ht.setTextureCube(C,0):C.isData3DTexture?ht.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ht.setTexture2DArray(C,0):ht.setTexture2D(C,0),nt.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,nt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};var Si={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Qx=new ws(-1,1,1,-1,0,1),Uh=class extends Re{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},jx=new Uh,Ei=class{constructor(t){this._mesh=new Pt(jx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Qx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ns=class extends Dn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=dn.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ei(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var bo=class extends Dn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},kl=class extends Dn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Hl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new kt);this._width=n.width,this._height=n.height,e=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ns(Si),this.copyPass.material.blending=an,this.clock=new Ts}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bo!==void 0&&(o instanceof bo?n=!0:o instanceof kl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new kt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vl=class extends Dn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Et}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Of={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Sr=class s extends Dn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new kt(t.x,t.y):new kt(256,256),this.clearColor=new Et(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Je(r,o,{type:fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){let f=new Je(r,o,{type:fn});f.texture.name="UnrealBloomPass.h"+l,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Je(r,o,{type:fn});d.texture.name="UnrealBloomPass.v"+l,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Of;this.highPassUniforms=dn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new kt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=dn.clone(Si.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:Si.vertexShader,fragmentShader:Si.fragmentShader,blending:Nn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Et,this._oldClearAlpha=1,this._basic=new en,this._fsQuad=new Ei(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new kt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new _e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new kt(.5,.5)},direction:{value:new kt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new _e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Sr.BlurDirectionX=new kt(1,0);Sr.BlurDirectionY=new kt(0,1);var So={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Gl=class extends Dn{constructor(){super(),this.uniforms=dn.clone(So.uniforms),this.material=new ro({name:So.name,uniforms:this.uniforms,vertexShader:So.vertexShader,fragmentShader:So.fragmentShader}),this._fsQuad=new Ei(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},be.getTransfer(this._outputColorSpace)===Ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ga?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Za?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Eo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new kt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ct},cameraProjectionMatrixInverse:{value:new Ct},cameraWorldMatrix:{value:new Ct},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},wo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Wl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Bf(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=tv(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],c=2*Math.PI*a/n,h=new L(Math.cos(c),Math.sin(c),0).normalize();i[o*4]=(h.x*.5+.5)*255,i[o*4+1]=(h.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new yi(i,t,t);return r.wrapS=ei,r.wrapT=ei,r.needsUpdate=!0,r}function tv(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}var To={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Nh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new kt},cameraProjectionMatrixInverse:{value:new Ct},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Nh(s,t,e){let n=ev(s,t,e),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function ev(s,t,e){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new L(Math.cos(r),Math.sin(r),o))}return n}var Xl=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,c=Math.floor(t+a),h=Math.floor(e+a),l=(3-Math.sqrt(3))/6,f=(c+h)*l,d=c-f,u=h-f,g=t-d,x=e-u,m,p;g>x?(m=1,p=0):(m=0,p=1);let _=g-m+l,S=x-p+l,M=g-1+2*l,w=x-1+2*l,R=c&255,T=h&255,A=this.perm[R+this.perm[T]]%12,b=this.perm[R+m+this.perm[T+p]]%12,E=this.perm[R+1+this.perm[T+1]]%12,D=.5-g*g-x*x;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[A],g,x));let F=.5-_*_-S*S;F<0?i=0:(F*=F,i=F*F*this._dot(this.grad3[b],_,S));let B=.5-M*M-w*w;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[E],M,w)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a,h=(t+e+n)*.3333333333333333,l=Math.floor(t+h),f=Math.floor(e+h),d=Math.floor(n+h),u=1/6,g=(l+f+d)*u,x=l-g,m=f-g,p=d-g,_=t-x,S=e-m,M=n-p,w,R,T,A,b,E;_>=S?S>=M?(w=1,R=0,T=0,A=1,b=1,E=0):_>=M?(w=1,R=0,T=0,A=1,b=0,E=1):(w=0,R=0,T=1,A=1,b=0,E=1):S<M?(w=0,R=0,T=1,A=0,b=1,E=1):_<M?(w=0,R=1,T=0,A=0,b=1,E=1):(w=0,R=1,T=0,A=1,b=1,E=0);let D=_-w+u,F=S-R+u,B=M-T+u,Z=_-A+2*u,I=S-b+2*u,X=M-E+2*u,V=_-1+3*u,k=S-1+3*u,j=M-1+3*u,xt=l&255,yt=f&255,Rt=d&255,te=this.perm[xt+this.perm[yt+this.perm[Rt]]]%12,Wt=this.perm[xt+w+this.perm[yt+R+this.perm[Rt+T]]]%12,re=this.perm[xt+A+this.perm[yt+b+this.perm[Rt+E]]]%12,at=this.perm[xt+1+this.perm[yt+1+this.perm[Rt+1]]]%12,ct=.6-_*_-S*S-M*M;ct<0?i=0:(ct*=ct,i=ct*ct*this._dot3(this.grad3[te],_,S,M));let At=.6-D*D-F*F-B*B;At<0?r=0:(At*=At,r=At*At*this._dot3(this.grad3[Wt],D,F,B));let tt=.6-Z*Z-I*I-X*X;tt<0?o=0:(tt*=tt,o=tt*tt*this._dot3(this.grad3[re],Z,I,X));let dt=.6-V*V-k*k-j*j;return dt<0?a=0:(dt*=dt,a=dt*dt*this._dot3(this.grad3[at],V,k,j)),32*(i+r+o+a)}noise4d(t,e,n,i){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20,l,f,d,u,g,x=(t+e+n+i)*c,m=Math.floor(t+x),p=Math.floor(e+x),_=Math.floor(n+x),S=Math.floor(i+x),M=(m+p+_+S)*h,w=m-M,R=p-M,T=_-M,A=S-M,b=t-w,E=e-R,D=n-T,F=i-A,B=b>E?32:0,Z=b>D?16:0,I=E>D?8:0,X=b>F?4:0,V=E>F?2:0,k=D>F?1:0,j=B+Z+I+X+V+k,xt=o[j][0]>=3?1:0,yt=o[j][1]>=3?1:0,Rt=o[j][2]>=3?1:0,te=o[j][3]>=3?1:0,Wt=o[j][0]>=2?1:0,re=o[j][1]>=2?1:0,at=o[j][2]>=2?1:0,ct=o[j][3]>=2?1:0,At=o[j][0]>=1?1:0,tt=o[j][1]>=1?1:0,dt=o[j][2]>=1?1:0,bt=o[j][3]>=1?1:0,Nt=b-xt+h,U=E-yt+h,Ht=D-Rt+h,It=F-te+h,rt=b-Wt+2*h,nt=E-re+2*h,Y=D-at+2*h,J=F-ct+2*h,ht=b-At+3*h,Bt=E-tt+3*h,Dt=D-dt+3*h,y=F-bt+3*h,v=b-1+4*h,P=E-1+4*h,N=D-1+4*h,H=F-1+4*h,z=m&255,Q=p&255,W=_&255,ot=S&255,ut=a[z+a[Q+a[W+a[ot]]]]%32,K=a[z+xt+a[Q+yt+a[W+Rt+a[ot+te]]]]%32,ft=a[z+Wt+a[Q+re+a[W+at+a[ot+ct]]]]%32,st=a[z+At+a[Q+tt+a[W+dt+a[ot+bt]]]]%32,Tt=a[z+1+a[Q+1+a[W+1+a[ot+1]]]]%32,vt=.6-b*b-E*E-D*D-F*F;vt<0?l=0:(vt*=vt,l=vt*vt*this._dot4(r[ut],b,E,D,F));let Yt=.6-Nt*Nt-U*U-Ht*Ht-It*It;Yt<0?f=0:(Yt*=Yt,f=Yt*Yt*this._dot4(r[K],Nt,U,Ht,It));let G=.6-rt*rt-nt*nt-Y*Y-J*J;G<0?d=0:(G*=G,d=G*G*this._dot4(r[ft],rt,nt,Y,J));let lt=.6-ht*ht-Bt*Bt-Dt*Dt-y*y;lt<0?u=0:(lt*=lt,u=lt*lt*this._dot4(r[st],ht,Bt,Dt,y));let _t=.6-v*v-P*P-N*N-H*H;return _t<0?g=0:(_t*=_t,g=_t*_t*this._dot4(r[Tt],v,P,N,H)),27*(l+f+d+u+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}};var Er=class s extends Dn{constructor(t,e,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Bf(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Je(this.width,this.height,{type:fn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new _e({defines:Object.assign({},Eo.defines),uniforms:dn.clone(Eo.uniforms),vertexShader:Eo.vertexShader,fragmentShader:Eo.fragmentShader,blending:an,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new oo,this.normalMaterial.blending=an,this.pdMaterial=new _e({defines:Object.assign({},To.defines),uniforms:dn.clone(To.uniforms),vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new _e({defines:Object.assign({},wo.defines),uniforms:dn.clone(wo.uniforms),vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader,blending:an}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new _e({uniforms:dn.clone(Si.uniforms),vertexShader:Si.vertexShader,fragmentShader:Si.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:po,blendDst:As,blendEquation:Xn,blendSrcAlpha:fo,blendDstAlpha:As,blendEquationAlpha:Xn}),this.blendMaterial=new _e({uniforms:dn.clone(Wl.uniforms),vertexShader:Wl.vertexShader,fragmentShader:Wl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Na,blendSrc:po,blendDst:As,blendEquation:Xn,blendSrcAlpha:fo,blendDstAlpha:As,blendEquationAlpha:Xn}),this._fsQuad=new Ei(null),this._originalClearColor=new Et,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ss,this.depthTexture.format=os,this.depthTexture.type=rs,this.normalRenderTarget=new Je(this.width,this.height,{minFilter:Sn,magFilter:Sn,type:fn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Nh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=an,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=an,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=an,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=an,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=an,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Xl,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let c=o,h=a;i[(o*t+a)*4]=(e.noise(c,h)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(c+t,h)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(c,h+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(c+t,h+t)*.5+.5)*255}let r=new yi(i,t,t,Fn,Yn);return r.wrapS=ei,r.wrapT=ei,r.needsUpdate=!0,r}};Er.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var kf={ultra:{label:"Ultra",pixelRatio:2,msaa:4,shadow:4096,shadowRange:150,ao:!0,reflections:.75,bloom:!0,grade:!0,shafts:!0},high:{label:"High",pixelRatio:1.5,msaa:4,shadow:2048,shadowRange:120,ao:!1,reflections:.5,bloom:!0,grade:!0,shafts:!0},medium:{label:"Balanced",pixelRatio:1.2,msaa:2,shadow:2048,shadowRange:90,ao:!1,reflections:0,bloom:!0,grade:!0,shafts:!0},low:{label:"Performance",pixelRatio:1,msaa:0,shadow:1024,shadowRange:70,ao:!1,reflections:0,bloom:!1,grade:!1,shafts:!1}},Fh=class extends Er{_overrideVisibility(){super._overrideVisibility(),this.scene.traverseVisible(t=>{t.userData.noAO&&(t.visible=!1,this._visibilityCache.push(t))})}},nv={uniforms:{tDiffuse:{value:null},time:{value:0},resolution:{value:new kt(1,1)},speedBlur:{value:0},camBlur:{value:new kt},aberration:{value:.0015},vignette:{value:.32},grain:{value:.035},sunPos:{value:new kt(.5,.5)},sunVisible:{value:0},sunColor:{value:new Et(1,.7,.4)},flash:{value:0},night:{value:0}},vertexShader:`
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
    }`},iv={uniforms:{tDiffuse:{value:null},sunPos:{value:new kt(.5,.5)},strength:{value:0},color:{value:new Et(1,.7,.4)},aspect:{value:1}},vertexShader:`
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
    }`},ql=class{constructor(t){this.renderer=new Ol({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1});let e=this.renderer;e.toneMapping=mr,e.toneMappingExposure=.85,e.shadowMap.enabled=!0,e.shadowMap.type=Ua,this.quality=null,this.scale=1,this.frameTimes=[],this.adaptTimer=0}init(t,e){this.scene=t,this.camera=e}buildComposer(){let t=this.quality,e=this.renderer;if(this.composer){this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose();for(let r of this.composer.passes)r.dispose?.()}let n=e.getSize(new kt),i=new Je(n.x,n.y,{type:fn,samples:t.msaa});this.composer=new Hl(e,i),this.composer.addPass(new Vl(this.scene,this.camera)),this.ao=null,t.ao&&(this.ao=new Fh(this.scene,this.camera,n.x,n.y),this.ao.output=Er.OUTPUT.Default,this.ao.blendIntensity=.85,this.ao.updateGtaoMaterial({radius:1.6,distanceExponent:1.6,thickness:2.5,scale:1.4,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.composer.addPass(this.ao)),this.shafts=new Ns(iv),this.shafts.enabled=t.shafts,this.composer.addPass(this.shafts),this.bloom=new Sr(new kt(n.x,n.y),.42,.62,.92),this.bloom.enabled=t.bloom,this.composer.addPass(this.bloom),this.composer.addPass(new Gl),this.grade=new Ns(nv),this.grade.enabled=!0,t.grade||(this.grade.uniforms.grain.value=0,this.grade.uniforms.aberration.value=0),this.composer.addPass(this.grade),this.applySize()}setQuality(t){this.quality=kf[t]||kf.high,this.qualityName=t,this.scale=1,this.renderer.shadowMap.enabled=!0,this.buildComposer()}applySize(){let t=innerWidth,e=innerHeight,n=Math.min(devicePixelRatio||1,this.quality.pixelRatio)*this.scale;this.renderer.setPixelRatio(n),this.renderer.setSize(t,e),this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.grade.uniforms.resolution.value.set(t*n,e*n),this.shafts.uniforms.aspect.value=t/e,this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.onResize?.()}adapt(t){if(this.frameTimes.push(t),this.frameTimes.length>90&&this.frameTimes.shift(),this.adaptTimer+=t,this.adaptTimer<2||this.frameTimes.length<60)return;this.adaptTimer=0;let e=[...this.frameTimes].sort((r,o)=>r-o),n=e[Math.floor(e.length/2)],i=this.scale;n>1/45?i=Math.max(.6,this.scale-.1):n<1/58&&this.scale<1&&(i=Math.min(1,this.scale+.05)),Math.abs(i-this.scale)>.001&&(this.scale=i,this.applySize())}render(){this.composer.render()}};var wr=`
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
`,Yl=`
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
`;var $l={golden:19.22,dusk:19.95,night:23.2,dawn:6.9,noon:13.2},Hf=6.4,sv=19.7,ln={skySunDir:{value:new L(-.9,.12,-.3).normalize()},skyMoonDir:{value:new L(.6,.5,.4).normalize()},skyTurbidity:{value:6},skyRayleigh:{value:2.2},skyMie:{value:.006},skyMieG:{value:.82},skyIntensity:{value:.75},skyCloudCover:{value:.42},skyTime:{value:0},skyNight:{value:0},skyCloudLit:{value:new Et},skyCloudShade:{value:new Et},fogSunColor:{value:new Et},fogSunDir:{value:new L},fogHeightFalloff:{value:.012},nightFactor:{value:0},worldTime:{value:0}};he.fog_pars_vertex=`
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
#endif`;function rv(s){if(s.userData.atmo)return s;s.userData.atmo=!0;let t=s.onBeforeCompile,e=s.customProgramCacheKey();return s.onBeforeCompile=function(n,i){t.call(this,n,i),n.uniforms.fogSunColor=ln.fogSunColor,n.uniforms.fogSunDir=ln.fogSunDir,n.uniforms.fogHeightFalloff=ln.fogHeightFalloff},s.customProgramCacheKey=()=>e+"|atmo",s}function Gf(s){s.traverse(t=>{if(t.material)for(let e of Array.isArray(t.material)?t.material:[t.material])e.isShaderMaterial||e.isRawShaderMaterial||rv(e)})}var ov=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,av=`
${wr}
${Yl}
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
}`;function Vf(s=!0,t=!0){return new _e({uniforms:{...ln,skyClouds:{value:s?1:0},skyDisc:{value:t?1:0}},vertexShader:ov,fragmentShader:av,side:En,depthWrite:!1,depthTest:!0,fog:!1})}var lv=new L(0,1,0),cv=new L,hv=new L,zh=new L,ge=(s,t,e)=>new Et(s,t,e),Fs=(s,t,e)=>{if(e<=t[0][0])return s.copy(t[0][1]);for(let n=1;n<t.length;n++)if(e<=t[n][0]){let[i,r]=t[n-1],[o,a]=t[n];return s.copy(r).lerp(a,(e-i)/(o-i))}return s.copy(t[t.length-1][1])},ki=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e];return i+(o-i)*(t-n)/(r-n)}return s[s.length-1][1]},uv=[[-6,ge(.9,.35,.2)],[0,ge(1,.34,.1)],[4,ge(1,.47,.19)],[10,ge(1,.66,.38)],[25,ge(1,.88,.74)],[60,ge(1,.97,.92)]],fv=[[-4,0],[0,1.6],[4,4.6],[12,5],[40,5.2]],dv=[[-15,ge(.06,.09,.18)],[-4,ge(.22,.24,.42)],[2,ge(.62,.55,.62)],[12,ge(.6,.7,.85)],[40,ge(.62,.76,.95)]],pv=[[-15,ge(.05,.05,.06)],[0,ge(.35,.24,.2)],[15,ge(.42,.36,.3)],[40,ge(.45,.42,.38)]],mv=[[-15,.4],[-4,.42],[3,.32],[12,.45],[30,.6]],gv=[[-15,ge(.03,.04,.075)],[-5,ge(.15,.15,.26)],[0,ge(.42,.33,.38)],[6,ge(.58,.45,.42)],[18,ge(.55,.62,.72)],[50,ge(.55,.66,.8)]],xv=[[-15,ge(.05,.06,.1)],[-5,ge(.4,.24,.22)],[0,ge(1.15,.5,.22)],[6,ge(1.2,.68,.38)],[20,ge(.9,.84,.76)],[50,ge(.75,.8,.86)]],vv=[[-12,ge(.04,.05,.08)],[-5,ge(.45,.25,.32)],[0,ge(1.8,.72,.42)],[5,ge(1.9,1.1,.7)],[15,ge(1.5,1.4,1.35)],[50,ge(1.5,1.5,1.5)]],yv=[[-12,ge(.02,.025,.04)],[-5,ge(.18,.13,.22)],[0,ge(.42,.26,.34)],[5,ge(.6,.45,.48)],[15,ge(.62,.66,.74)],[50,ge(.7,.74,.8)]],_v=[[-15,7e-4],[-3,8e-4],[3,85e-5],[15,6e-4],[50,45e-5]],Mv=[[-15,1.35],[-5,1.2],[0,1.05],[6,.92],[20,.76],[50,.68]],bv=[[-15,.5],[-4,.45],[2,.36],[12,.45],[30,.6]],Zl=class{constructor(t,e){this.renderer=t,this.scene=e,this.hours=$l.golden,this.cycle=!1,this.cycleSpeed=24/2880,this.sky=new Pt(new qt(1,1,1),Vf(!0)),this.sky.scale.setScalar(2e3),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.sky.userData.noAO=!0,e.add(this.sky),this.probeScene=new Ms,this.probeSky=new Pt(new qt(1,1,1),Vf(!0,!1)),this.probeSky.scale.setScalar(100),this.probeScene.add(this.probeSky);let n=new Pt(new no(60,24),new en({color:1776156}));n.rotation.x=-Math.PI/2,n.position.y=-2,this.probeGround=n,this.probeScene.add(n),this.pmrem=new Mr(t),this.envTarget=null,this.envDirty=!0,this.envTimer=0,this.lastEnvHours=-100,this.sun=new ho(16777215,3),this.sun.castShadow=!0,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.06,this.shadowRange=110,e.add(this.sun,this.sun.target),this.hemi=new lo(16777215,4473924,1),e.add(this.hemi),e.fog=new jr(12687759,.0016),this.sunDir=new L,this.moonDir=new L,this.lightDir=new L,this.nightFactor=0,this.elevation=0,this.exposure=.8,this.apply()}setHours(t){this.hours=(t%24+24)%24,this.envDirty=!0,this.apply()}setShadowQuality(t,e){this.sun.shadow.mapSize.set(t,t),this.shadowRange=e,this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null);let n=this.sun.shadow.camera;n.left=n.bottom=-e,n.right=n.top=e,n.near=1,n.far=900,n.updateProjectionMatrix()}computeSun(t,e){let n=(t-Hf)/(sv-Hf),i=Math.PI*n,r=Math.asin(Math.sin(i)*Math.sin(Se.degToRad(64))),o=Math.cos(i),a=Math.sin(i)*.6-.32,c=Math.hypot(o,a)||1;return e.set(o/c*Math.cos(r),Math.sin(r),a/c*Math.cos(r)).normalize(),Se.radToDeg(r)}apply(){let t=ln,e=this.computeSun(this.hours,this.sunDir);this.elevation=e,this.computeSun(this.hours+12.4,this.moonDir),this.moonDir.y=Math.max(this.moonDir.y,.25),this.moonDir.normalize(),t.skySunDir.value.copy(this.sunDir),t.skyMoonDir.value.copy(this.moonDir);let n=Se.smoothstep(-e,-2,9),i=Se.smoothstep(-e,-7,1.5);this.nightFactor=n,this.lampFactor=i,t.nightFactor.value=i,t.skyNight.value=n,t.skyTurbidity.value=ki([[-5,3.5],[2,5.5],[10,4.5],[40,2.6]],e),t.skyRayleigh.value=ki([[-5,1.6],[2,2.8],[10,2],[40,1.2]],e),t.skyMie.value=ki([[0,.006],[10,.005],[40,.004]],e),t.skyIntensity.value=ki([[-8,.6],[0,.72],[20,.62],[50,.55]],e),Fs(t.skyCloudLit.value,vv,e),Fs(t.skyCloudShade.value,yv,e);let r=e>-1.5;this.lightDir.copy(r?this.sunDir:this.moonDir),r?(Fs(this.sun.color,uv,e),this.sun.intensity=ki(fv,e)):(this.sun.color.setRGB(.55,.65,.95),this.sun.intensity=.32*n),this.lightDir.y<.08&&(this.lightDir.y=.08,this.lightDir.normalize()),Fs(this.hemi.color,dv,e),Fs(this.hemi.groundColor,pv,e),this.hemi.intensity=ki(mv,e),Fs(this.scene.fog.color,gv,e),Fs(t.fogSunColor.value,xv,e),t.fogSunDir.value.copy(this.sunDir),this.scene.fog.density=ki(_v,e),this.exposure=ki(Mv,e),this.scene.environmentIntensity=ki(bv,e),this.probeGround.material.color.copy(this.hemi.groundColor).multiplyScalar(.25)}regenerateEnvironment(){let t=this.envTarget;this.envTarget=this.pmrem.fromScene(this.probeScene,0,.1,400),this.scene.environment=this.envTarget.texture,t&&t.dispose(),this.envDirty=!1,this.lastEnvHours=this.hours}update(t,e,n,i){ln.skyTime.value=e,ln.worldTime.value=e,this.cycle&&(this.hours=(this.hours+t*this.cycleSpeed)%24,this.apply(),Math.abs(this.hours-this.lastEnvHours)>.12&&(this.envDirty=!0)),this.envDirty&&this.regenerateEnvironment(),this.sky.position.copy(i.position);let o=this.shadowRange*2/this.sun.shadow.mapSize.x,a=cv.crossVectors(lv,this.lightDir).normalize(),c=hv.crossVectors(this.lightDir,a),h=Math.round(n.dot(a)/o)*o,l=Math.round(n.dot(c)/o)*o,f=n.dot(this.lightDir);zh.copy(a).multiplyScalar(h).addScaledVector(c,l).addScaledVector(this.lightDir,f),this.sun.target.position.copy(zh),this.sun.position.copy(zh).addScaledVector(this.lightDir,450),this.sun.target.updateMatrixWorld()}get clockLabel(){let t=Math.floor(this.hours),e=Math.floor((this.hours-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}};function zn(s,t,e){let n=t.isMaterial?t:new Ft(t);return n.onBeforeCompile=i=>{Object.assign(i.uniforms,e.uniforms||{}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
${wr}
${e.fragmentPars||""}`).replace("#include <color_fragment>",`#include <color_fragment>
${e.color||""}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${e.roughness||""}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${e.metalness||""}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${e.normal||""}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${e.emissive||""}`)},n.customProgramCacheKey=()=>"pa-"+s,n}function qe(s,t,e,n,{srgb:i=!0,repeat:r=!1}={}){let o=document.createElement("canvas");o.width=t,o.height=e,n(o.getContext("2d"),t,e);let a=new bs(o);return i&&(a.colorSpace=bn),a.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),r&&(a.wrapS=a.wrapT=ei),a}var Zt=[-320,-160,0,160,320],$t=[-480,-320,-160,0,160,320,480],jt=13,fi=6,Ao=[3.4,9.2],Jt=.16,$n=-418,Oh=-.62,nn={from:-333,to:-342},cn=-357,Qe={minX:-412,maxX:352,minZ:-556,maxZ:556},wi=[-240,-80,80,240],Ti=[-400,-240,-80,80,240,400],ii=160-jt*2,ee={rampStart:-342,x0:-374,x1:-556,z:-160,halfWidth:9,deckY:2.6};function Hi(s,t){return Math.abs(t-ee.z)>ee.halfWidth||s>ee.rampStart||s<ee.x1?null:s>ee.x0?Jt+(ee.deckY-Jt)*(ee.rampStart-s)/(ee.rampStart-ee.x0):ee.deckY}var Ai=[[-320,40],[-320,-300],[-170,-320],[-6,-320],[150,-320],[160,-10],[10,160],[-300,160]],Kl=15,zs=[{axis:"ns",road:-160,s:-240,side:1},{axis:"ns",road:0,s:-80,side:-1},{axis:"ns",road:160,s:80,side:1},{axis:"ns",road:0,s:400,side:1},{axis:"ns",road:-320,s:-400,side:1},{axis:"ns",road:320,s:-240,side:-1},{axis:"ew",road:-320,s:-80,side:1},{axis:"ew",road:0,s:80,side:-1},{axis:"ew",road:160,s:-240,side:1},{axis:"ew",road:320,s:240,side:-1},{axis:"ew",road:-160,s:240,side:1},{axis:"ew",road:480,s:-80,side:-1}];function Os(s,t=15.4){return s.axis==="ns"?[s.road+s.side*t,s.s]:[s.s,s.road+s.side*t]}var vn={x:-320+Ao[0],z:246,heading:0};function Zn(s,t){let e=s[0];for(let n of s)Math.abs(n-t)<Math.abs(e-t)&&(e=n);return e}function Ro(s,t){if(s<cn)return"sand";if(s<nn.to)return"grass";if(s<nn.from||s>Zt[Zt.length-1]+jt||Math.abs(t)>$t[$t.length-1]+jt)return"curb";let e=Math.abs(s-Zn(Zt,s))<jt,n=Math.abs(t-Zn($t,t))<jt;return e||n?"road":"curb"}function Wf(s){return s>=cn?0:Math.max(-.02-(cn-s)*.0105,Oh-.3)}function Jl(s,t){return s<-330?["OCEAN DRIVE","Vista Pac\xEDfica Beach"]:s<-170?["SEAVIEW","Coastal Quarter"]:s>0&&t<-20?["DOWNTOWN","Financial District"]:t>250?["SOUTHBANK","Harbor Heights"]:["PALM DISTRICT","San Aurelio"]}function Xf(s,t){let e=Math.abs(s-Zn(Zt,s))<jt+3,n=Math.abs(t-Zn($t,t))<jt+3,i={"-320":"Ocean Drive","-160":"Seaview Ave",0:"Aurelio Blvd",160:"Grand Ave",320:"Hillcrest Ave"},r={"-480":"Marina St","-320":"Sunset Blvd","-160":"Pier Ave",0:"Palm St",160:"Harbor St",320:"Rosa St",480:"Southbank Rd"};return e?i[String(Zn(Zt,s))]:n?r[String(Zn($t,t))]:s<-330?"Beachfront":"Off road"}var Sv=`
float paRoadNearest(float v, float start, float maxIndex) {
  return clamp(floor((v - start) / 160.0 + 0.5), 0.0, maxIndex) * 160.0 + start;
}
// Returns paint mask (rgb = color, a = coverage) and fills asphalt wear.
vec4 paRoadMarkings(vec2 p, out float wear, out float onRoad) {
  float dx = p.x - paRoadNearest(p.x, -320.0, 4.0);
  float dz = p.y - paRoadNearest(p.y, -480.0, 6.0);
  float adx = abs(dx), adz = abs(dz);
  bool inX = adx < ${jt.toFixed(1)};
  bool inZ = adz < ${jt.toFixed(1)};
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
    if (aa > ${jt.toFixed(1)} || ab < ${jt.toFixed(1)}) continue;
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
`,On={wetness:{value:0},mirrorTex:{value:null},mirrorMatrix:{value:new Ct},useMirror:{value:0},worldTime:{value:0}},Ev=`
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
    if (abs(a) > ${jt.toFixed(1)} || abs(b) < ${jt.toFixed(1)}) continue;
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
`,wv=`
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
`;function Tv(){return zn("road",{color:16777215,roughness:.85,metalness:0},{uniforms:On,fragmentPars:Sv+Ev+wv+`
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
      }`})}function Av(){return zn("slab",{color:16777215,roughness:.85,metalness:0},{uniforms:{wetness:On.wetness},vertexPars:"attribute float aLot; flat varying float vLot; flat varying vec3 vSlabCenter; flat varying vec2 vSlabHalf;",vertex:`
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
        float ring = ${fi.toFixed(1)};
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
      }`,roughness:"roughnessFactor = mix(paSlabRough, 0.42, wetness * (abs(vLot - 1.0) < 0.5 ? 0.0 : 1.0));"})}function Rv(){return zn("sand",{color:16777215,roughness:.95},{fragmentPars:"float paWet;",color:`
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
      }`,roughness:"roughnessFactor = mix(0.95, 0.22, paWet);"})}function Cv(){return zn("terrain",{color:16777215,roughness:.95},{color:`
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
      }`})}function di(s,t){let e=Math.max(0,s-372),n=Math.max(0,-t-560),i=Math.max(0,t-560),r=Math.hypot(e,Math.max(n,i)*.9);if(s<-360)return-40;if(r<=0)return-.6;let o=Math.sin(s*.011+Math.sin(t*.006)*2)*.5+Math.sin(t*.013+s*.004)*.5,a=Math.sin(s*.031+t*.017)*5+Math.sin(t*.043-s*.012)*3.5;return-.6+(70*(1-Math.exp(-r/170))+r*.1)*(.8+o*.3)+a*Math.min(r/120,1)+Math.min(r/30,1)*1.5}function qf(s,t){let e=Tv(),n=new Pt(new Ne(1,1),e);n.rotation.x=-Math.PI/2;let i=cn-1,r=400,o=-620,a=620;n.scale.set(r-i,a-o,1),n.position.set((i+r)/2,0,(o+a)/2),n.receiveShadow=!0,s.add(n);let c=[],h=new Set(["-80,80","240,400"]),l=new Set(["-240,-400","80,240"]),f=new Set(["80,-80","240,-240"]);for(let X of wi)for(let V of Ti){let k=`${X},${V}`,j=h.has(k)?1:l.has(k)?2:f.has(k)?4:0;c.push([X,V,ii,ii,j])}let d=a-o;c.push([(nn.from+nn.to)/2,0,nn.from-nn.to,d,3]),c.push([(nn.to+cn)/2,0,nn.to-cn,d,1]);let u=Zt[Zt.length-1]+jt;c.push([u+fi/2,0,fi,d,0]),c.push([(u+fi+400)/2,0,400-u-fi,d,1]);let g=$t[0]-jt,x=$t[$t.length-1]+jt;for(let[X,V]of[[g,-1],[x,1]]){let k=u-nn.from,j=(u+nn.from)/2;c.push([j,X+V*fi/2,k,fi,0]),c.push([j,X+V*(fi+35),k,70,1])}let m=new qt(1,1,1),p=new Kt(m,Av(),c.length),_=new Float32Array(c.length),S=new Ct;c.forEach(([X,V,k,j,xt],yt)=>{S.compose(new L(X,Jt/2-.05,V),new me,new L(k,Jt+.1,j)),p.setMatrixAt(yt,S),_[yt]=xt}),m.setAttribute("aLot",new Xe(_,1)),p.receiveShadow=!0,p.layers.set(1),s.add(p);let M=new Ne(1,1,24,1),w=new Pt(M,Rv());w.rotation.x=-Math.PI/2;let R=-470,T=cn;w.scale.set(T-R,1400,1),w.position.set((R+T)/2,0,0),w.updateMatrixWorld();let A=M.attributes.position;for(let X=0;X<A.count;X++){let V=R+(A.getX(X)+.5)*(T-R);A.setZ(X,V>=cn?0:-.02-(cn-V)*.0105)}M.computeVertexNormals(),w.receiveShadow=!0,s.add(w);let b=new Ne(2600,2600,220,220);b.rotateX(-Math.PI/2);let E=b.attributes.position;for(let X=0;X<E.count;X++){let V=E.getX(X)+500,k=E.getZ(X);E.setX(X,V),E.setY(X,di(V,k))}b.computeVertexNormals();let D=new Pt(b,Cv());D.receiveShadow=!0,s.add(D);let F=new qt(1,1,1),B=new Ft({color:10131084,roughness:.9}),Z=[[Qe.maxX+1.5,0,1,1,Qe.maxZ-Qe.minZ+4],[(Qe.maxX+nn.from)/2,Qe.minZ-1.5,Qe.maxX-nn.from,1,1],[(Qe.maxX+nn.from)/2,Qe.maxZ+1.5,Qe.maxX-nn.from,1,1]],I=new Kt(F,B,Z.length);return Z.forEach(([X,V,k,j,xt],yt)=>{S.compose(new L(X,j/2,V),new me,new L(k,j,xt)),I.setMatrixAt(yt,S)}),I.castShadow=I.receiveShadow=!0,s.add(I),{ground:n,slabMesh:p,terrain:D}}function Oe(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Re,h=0;for(let l=0;l<s.length;++l){let f=s[l],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,u,l),h+=u}}if(e){let l=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+l);l+=s[d].attributes.position.count}c.setIndex(f)}for(let l in r){let f=Yf(r[l]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,f)}for(let l in o){let f=o[l][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<o[l].length;++x)u.push(o[l][x][d]);let g=Yf(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Yf(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){let l=s[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}let o=new t(r),a=new tn(o,e,n),c=0;for(let h=0;h<s.length;++h){let l=s[h];if(l.isInterleavedBufferAttribute){let f=c/e;for(let d=0,u=l.count;d<u;d++)for(let g=0;g<e;g++){let x=l.getComponent(d,g);a.setComponent(d+f,g,x)}}else o.set(l.array,c);c+=l.count*e}return i!==void 0&&(a.gpuType=i),a}var Pv=new Ct;function Bs(s,{exclude:t=[]}={}){s.updateMatrixWorld(!0);let e=new Ct().copy(s.matrixWorld).invert(),n=new Set;for(let o of t)o.traverse(a=>n.add(a));let i=new Map;s.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||n.has(o)||Array.isArray(o.material)||o.geometry.isInstancedBufferGeometry||Object.keys(o.geometry.morphAttributes).length)return;let a=[o.material.uuid,o.castShadow,o.receiveShadow,o.layers.mask,o.renderOrder,!!o.userData.noAO,o.frustumCulled].join("|");i.has(a)||i.set(a,[]),i.get(a).push(o)});let r=0;for(let o of i.values()){if(o.length<2)continue;let a=o.map(d=>{let u=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();return u.applyMatrix4(Pv.multiplyMatrices(e,d.matrixWorld)),u}),c=Object.keys(a[0].attributes).filter(d=>a.every(u=>u.attributes[d]&&u.attributes[d].itemSize===a[0].attributes[d].itemSize));for(let d of a)for(let u of Object.keys(d.attributes))c.includes(u)||d.deleteAttribute(u);let h=Oe(a);if(!h)continue;let l=o[0],f=new Pt(h,l.material);f.castShadow=l.castShadow,f.receiveShadow=l.receiveShadow,f.layers.mask=l.layers.mask,f.renderOrder=l.renderOrder,f.frustumCulled=l.frustumCulled,f.userData={...l.userData,batched:o.length},s.add(f);for(let d of o)d.removeFromParent();r+=o.length-1}return r}var Bh=8294;function pt(){return Bh=Bh*1664525+1013904223>>>0,Bh/4294967296}var mt=(s,t)=>s+pt()*(t-s),ce=s=>s[Math.floor(pt()*s.length)],ve=s=>pt()<s;var ue={CURTAIN:0,PUNCHED:1,RIBBON:2,BRICK:3,STUCCO:4,BALCONY:5,BLANK:6,DECO:7,GARAGE:8,METAL:9,MOTEL:10,CONDO:11},Iv=`
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
`;function Zf(s=!1){let t=zn(s?"facade-low":"facade",{color:16777215,roughness:.85,metalness:0},{uniforms:{nightFactor:ln.nightFactor,worldTime:ln.worldTime},vertexPars:`
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
      vFacTop = (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y;`,fragmentPars:Iv,color:`
      {
        vec3 albedo = diffuseColor.rgb;
        paFacade(albedo);
        diffuseColor.rgb = albedo;
      }`,roughness:"roughnessFactor = fRough;",metalness:"metalnessFactor = fMetal;",normal:"normal = normalize(normal + (viewMatrix * vec4(fTilt, 0.0)).xyz);",emissive:"totalEmissiveRadiance += fEmit;"});return s&&(t.defines={...t.defines,FACADE_LOW:""}),t}function Dv(){return zn("tiles",{color:16777215,roughness:.7},{color:`
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
      }`})}function Lv(){let e=[-.54,0,-.54,.54,0,-.54,.54,0,.54,-.54,0,.54,-.22,1,0,.22,1,0],n=[0,4,5,0,5,1,1,5,2,2,5,4,2,4,3,3,4,0],i=new Re;i.setAttribute("position",new ie(e,3)),i.setIndex(n);let r=i.toNonIndexed();return r.computeVertexNormals(),r}var Bn={stucco:["#e8dcc4","#f0d6c0","#e6c9a8","#d9e2d6","#f2e8d8","#e7b9a3","#d6c7e0","#f4e4b8","#cfe0e3"],concrete:["#a9a59c","#b8b2a6","#8f8e88","#c9c3b5","#9a9690","#b0aba0"],brick:["#8a4f3c","#9c5a43","#7a4535","#a8735a","#6d4a3c","#a35b45"],tower:["#9fa6a8","#7c8589","#b5b8b4","#5f686d","#c8c3b8"],stone:["#d8cbb0","#c9b79a","#b8a88c","#d2c6ae","#bfae94"],condo:["#e9e8e4","#d9dcdc","#c4c9cb","#ece4d6","#d6d2ca"],metal:["#8a9196","#6d7a6f","#9a8f7a","#7d4a3a","#5f6b78","#a7a9a3"],glass:[[.18,.32,.38],[.16,.27,.36],[.28,.3,.28],[.25,.22,.18],[.2,.34,.33],[.14,.2,.3]]},Uv={"-240,-400":"parking","-240,-240":{stucco:3,motel:2,shops:2},"-240,-80":{hotel:3,shops:2,stucco:1},"-240,80":{stucco:3,shops:2,motel:1},"-240,240":{motel:2,stucco:3,shops:1},"-240,400":{stucco:3,shops:2},"-80,-400":{brick:3,shops:2,garage:1},"-80,-240":{office:2,garage:1,deco:1,shops:1},"-80,-80":{shops:2,condo:2,deco:1,brick:1},"-80,80":"park","-80,240":{brick:3,garage:1,shops:1},"-80,400":{warehouse:4,garage:1},"80,-400":{tower:3,office:2,deco:1},"80,-240":{tower:2,deco:2,office:1},"80,-80":"plaza","80,80":{hotel:2,shops:1,condo:2},"80,240":"parking","80,400":{warehouse:3,shops:1,brick:1},"240,-400":{office:2,tower:2,garage:1},"240,-240":"plaza-tall","240,-80":{deco:2,tower:2,hotel:1},"240,80":{condo:2,brick:2,shops:1},"240,240":{condo:3,shops:2},"240,400":"park"},Nv={tower:36,deco:32,office:28,hotel:28,garage:28,condo:24,warehouse:24,motel:24,brick:18,stucco:14,shops:14};var Jf=["COFFEE","PIZZA","NAILS","DELI","BOOKS","PHARMACY","TACOS","SURF","RAMEN","BAR","DONUTS","LAUNDRY","VINYL","BANK","FLOWERS","GYM"],$f=["#ff5a7a","#5fe8ff","#ffd25a","#ff8a3d","#a6ff6a","#ffffff","#ff6af0","#7ab8ff"],Fv=["HOTEL MIRAMAR","THE PALMS","CASA DEL MAR","HOTEL AURELIO","THE SEABRIGHT"],Ar=2,zv=3;function Kf(s,t){return(s<0?0:1)+Ar*(t<-160?0:t<160?1:2)}function Co(s,t,e,n,i=0){let r=s.x1-s.x0,o=s.z1-s.z0;if(r<=e&&o<=e||i>5)return n.push(s),n;let a=r>=o,c=a?r:o;if(c<t*2)return n.push(s),n;let h=Se.clamp(mt(.36,.64)*c,t,c-t);return a?(Co({...s,x1:s.x0+h},t,e,n,i+1),Co({...s,x0:s.x0+h},t,e,n,i+1)):(Co({...s,z1:s.z0+h},t,e,n,i+1),Co({...s,z0:s.z0+h},t,e,n,i+1)),n}function Ov(s){let t=Object.entries(s),e=t.reduce((i,[,r])=>i+r,0),n=pt()*e;for(let[i,r]of t)if((n-=r)<=0)return i;return t[0][0]}var yn={px:{nx:1,nz:0,rot:Math.PI/2},nx:{nx:-1,nz:0,rot:-Math.PI/2},pz:{nx:0,nz:1,rot:0},nz:{nx:0,nz:-1,rot:Math.PI}};function as(s,t){return t.nx?s.d:s.w}function ls(s,t,e,n=0){return t.nx?[s.x+t.nx*(s.w/2+n),s.z+e]:[s.x+e,s.z+t.nz*(s.d/2+n)]}function Tr(s){return Oe(s.map(([t,e,n,i,r,o,a=0,c=0,h=0,l="box"])=>{let f=l==="cyl"?new pe(t,t,e,12):l==="cone"?new _i(t,e,12):new qt(t,e,n);return(a||c||h)&&f.applyMatrix4(new Ct().makeRotationFromEuler(new sn(a,c,h))),f.translate(i,r,o),f.index?f.toNonIndexed():f}))}function Bv(){let s=Tr([[1.6,1,1.2,0,.5,0],[.42,.08,0,0,1.04,0,0,0,0,"cyl"],[1.62,.06,1.22,0,.22,0]]),t=Tr([[1.6,3,0,0,4.1,0,0,0,0,"cyl"],[1.75,1,0,0,6.1,0,0,0,0,"cone"],[.16,2.6,.16,1.1,1.3,1.1],[.16,2.6,.16,-1.1,1.3,1.1],[.16,2.6,.16,1.1,1.3,-1.1],[.16,2.6,.16,-1.1,1.3,-1.1],[2.6,.14,2.6,0,2.6,0]]),e=[[3.2,.06,1.1,0,0,.6],[3.2,.04,.04,0,.95,1.13],[.04,.04,1.1,-1.6,.95,.6],[.04,.04,1.1,1.6,.95,.6],[.04,.95,.04,-1.58,.47,1.13],[.04,.95,.04,0,.47,1.13],[.04,.95,.04,1.58,.47,1.13],[3.2,.03,.03,0,.5,1.13]],n=h=>Tr([...e,[Math.hypot(2.4,h),.05,.55,0,-h/2,.55,0,0,Math.atan2(h,2.4)],[Math.hypot(2.4,h),.03,.03,0,-h/2+.85,.83,0,0,Math.atan2(h,2.4)]]),i=Tr([[1,.16,1.35,0,0,.67]]),r=Tr([[1,1,.04,0,.58,1.33],[.012,1,1.35,-.5,.58,.67],[.012,1,1.35,.5,.58,.67]]),o=(()=>{let h=[],l=[],f=(u,g,x,m,p,_)=>{h.push(...u,...g,...x,...u,...x,...m),l.push(p[0],p[1],_[0],p[1],_[0],_[1],p[0],p[1],_[0],_[1],p[0],_[1])};f([-.5,0,0],[.5,0,0],[.5,-.7,1.6],[-.5,-.7,1.6],[0,0],[1,1]),f([-.5,-.7,1.6],[.5,-.7,1.6],[.5,-1,1.6],[-.5,-1,1.6],[0,0],[1,.3]);let d=new Re;return d.setAttribute("position",new ie(h,3)),d.setAttribute("uv",new ie(l,2)),d.computeVertexNormals(),d})(),a=new Ne(1,1),c=Tr([[.08,1,0,0,.5,0,0,0,0,"cyl"]]);return{acUnit:s,tank:t,fireEscape:n,balconySlab:i,balconyRail:r,awning:o,sign:a,antenna:c}}function kv(s){return qe(s,1024,1024,t=>{Jf.forEach((e,n)=>{let i=n%2*512,r=Math.floor(n/2)*128,o=$f[n%$f.length],a=n%3===0;t.fillStyle=a?"#121417":["#f4efe4","#1d3b4a","#5a1f1a"][n%3],t.fillRect(i+4,r+4,504,120),t.strokeStyle=o,t.lineWidth=6,t.strokeRect(i+10,r+10,492,108),t.font='800 78px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor=o,t.shadowBlur=16,t.fillStyle=n%3===0?o:n%3===1?"#ffffff":"#ffe9c2",t.fillText(e,i+256,r+68),t.shadowBlur=0})})}function Hv(s){return qe(s,256,32,(t,e,n)=>{for(let i=0;i<8;i++)t.fillStyle=i%2?"#f4f1ea":"#ffffff",t.fillRect(i*e/8,0,e/8,n),i%2===0&&(t.fillStyle="rgba(0,0,0,0.42)",t.fillRect(i*e/8,0,e/8,n))},{repeat:!1})}function Qf(s,t){let e=new Map,n=[],i=[],r=[],o=[],a=[],c=[],h=[],l=[],f=(y,v,P,N)=>{let H=`${y}|${Kf(v,P)}`;e.has(H)||e.set(H,[]),e.get(H).push(N)};function d(y,v,P,N,H,z,Q,W){return f("facade",y,v,{x:y,z:v,w:P,d:N,y0:H,h:z,style:Q,...W}),i.push({x:y,z:v,w:P,d:N,h:H+z}),H<1&&n.push({x:y,z:v,w:P/2,d:N/2}),{x:y,z:v,w:P,d:N,y0:H,h:z,top:H+z}}let u=(y,v,P={})=>({wall:v,glass:ce(Bn.glass),seed:pt()*100,shops:!1,floorH:y===ue.CURTAIN?mt(3.7,4.2):y===ue.STUCCO?3.4:y===ue.GARAGE?3:mt(3.2,3.6),cellW:y===ue.CURTAIN?mt(1.6,2.2):y===ue.RIBBON?mt(2.4,3):y===ue.STUCCO?mt(3.8,4.6):y===ue.DECO?mt(2.2,2.6):y===ue.MOTEL?4.2:y===ue.CONDO?mt(3.2,3.8):mt(2.8,3.6),...P}),g=(y,v)=>y*v.floorH+(v.shops?4.8:.9)+1.3-Jt,x=(y,v,P)=>{let N=as(y,P),H=Math.max(Math.floor((N-1)/v.cellW),1),z=v.shops?4.8:.9,Q=Math.max(0,Math.floor((y.top-1.3-z)/v.floorH));return{faceW:N,nCols:H,groundH:z,rows:Q,colU:W=>(W+.5-H/2)*v.cellW,rowY:W=>z+W*v.floorH}};function m(y,v,P=!1){for(let N=0;N<v;N++){let H=y.x+mt(-y.w/2+2.5,y.w/2-2.5),z=y.z+mt(-y.d/2+2.5,y.d/2-2.5);f("ac",H,z,{pos:[H,y.top,z],rot:ce([0,Math.PI/2]),scale:[mt(.8,1.6),mt(.8,1.3),mt(.8,1.5)],color:ce(["#b5b8b6","#9a9d9c","#c8c9c4"])})}if(P){let N=y.x+mt(-y.w/4,y.w/4),H=y.z+mt(-y.d/4,y.d/4);f("tank",N,H,{pos:[N,y.top,H],rot:0,scale:[1,mt(.9,1.15),1],color:ce(["#6b4f36","#5e4a3a","#7a5a3e"])})}}function p(y,v,P,N){f("antenna",y,P,{pos:[y,v,P],rot:0,scale:[1,N,1],color:"#9aa0a3"}),c.push([y,v+N+.3,P])}function _(y,v){d(y.x,y.z,y.w+.9,y.d+.9,y.top-.15,.75,ue.BLANK,u(ue.BLANK,v))}function S(y,v,P,N){for(let H of P){let z=as(y,H),Q=Math.max(Math.floor(z/6),1),W=z/Q,ot=ce(["#b8322a","#2b6e8f","#2f7a4f","#d08a2a","#6b3f8f","#20304a"]);for(let ut=0;ut<Q;ut++){let K=-z/2+(ut+.5)*W;if(ve(.78)){let[ft,st]=ls(y,H,K,.07);f("sign",ft,st,{pos:[ft,4.1,st],rot:H.rot,scale:[W*.72,.7,1],sign:Math.floor(pt()*Jf.length),color:"#ffffff"})}if(N&&ve(.7)){let[ft,st]=ls(y,H,K,.02);f("awning",ft,st,{pos:[ft,3.62,st],rot:H.rot,scale:[W*.9,1,1],color:ve(.75)?ot:ce(["#b8322a","#2b6e8f","#2f7a4f"])})}}}}function M(y,v,P,N=2,H="glass"){for(let z of P){let Q=x(y,v,z);for(let W=1;W<Q.rows;W++)for(let ot=0;ot+N<=Q.nCols;ot+=N){let ut=(Q.colU(ot)+Q.colU(ot+N-1))/2,K=N*v.cellW-.5,[ft,st]=ls(y,z,ut,0),Tt=Q.rowY(W)+.02;f("balconySlab",ft,st,{pos:[ft,Tt,st],rot:z.rot,scale:[K,1,1],color:"#d9d8d2"}),f(H==="glass"?"balconyGlass":"balconyRail",ft,st,{pos:[ft,Tt,st],rot:z.rot,scale:[K,1,1],color:H==="glass"?"#9fb6bf":"#2a2c2d"})}}}function w(y,v,P){let N=x(y,v,P);if(N.nCols<4||N.rows<3)return;let H=Math.floor(pt()*(N.nCols-2))+1,z=(N.colU(H)+N.colU(H+1))/2,[Q,W]=ls(y,P,z,0);for(let ot=1;ot<N.rows;ot++)f("fireEscape",Q,W,{pos:[Q,N.rowY(ot),W],rot:P.rot,scale:[1,1,1],color:"#2b2e30",floorH:v.floorH})}let R={tower(y,v,P){let N=y.w,H=y.d,z=d(y.x,y.z,N,H,Jt,mt(10,16),ce([ue.RIBBON,ue.PUNCHED]),u(ue.RIBBON,ce(Bn.concrete),{shops:!0}));S(z,null,v,!1),m({...z,x:y.x+N*.3,w:N*.3,d:H*.4},3);let Q=u(ue.CURTAIN,ce(Bn.tower)),W=70+P*mt(70,150),ot=Math.min(N-10,mt(30,46)),ut=Math.min(H-10,mt(30,46)),K=z.top,ft=W>120?3:W>75?2:1,st;for(let Tt=0;Tt<ft;Tt++){let vt=Tt===ft-1?Math.max(W-(K-Jt),12):W*mt(.42,.58)/(Tt+1);st=d(y.x,y.z,ot,ut,K,vt,ue.CURTAIN,Q),K+=vt,ot*=mt(.72,.86),ut*=mt(.72,.86)}if(a.push({x:st.x,z:st.z,w:st.w,d:st.d,y:st.top-.6,color:ce(["#bfe3ff","#ffe2b0","#ffffff","#ffb9d8"])}),ve(.5)){let Tt=d(st.x,st.z,st.w*.45,st.d*.45,st.top,6,ue.BLANK,u(ue.BLANK,"#7d8487"));p(st.x,Tt.top,st.z,W>140?28:12)}else m(st,4),c.push([st.x+st.w/2-1,st.top+.8,st.z+st.d/2-1])},office(y,v,P){let N=y.w,H=y.d,z=Math.floor(mt(9,18)+P*mt(4,12)),Q=ve(.6)?ue.RIBBON:ue.PUNCHED,W=u(Q,ce(Bn.concrete),{shops:!0}),ot=d(y.x,y.z,N,H,Jt,g(z,W),Q,W);S(ot,W,v,!1);let ut=ot;ve(.45)&&(ut=d(ot.x+mt(-2,2),ot.z+mt(-2,2),N*mt(.6,.75),H*mt(.6,.75),ot.top,mt(8,20),Q,{...W,shops:!1}));let K=d(ut.x,ut.z,ut.w*.35,ut.d*.35,ut.top,4.5,ue.BLANK,u(ue.BLANK,"#8d8f8c"));m(ut,5),c.push([K.x,K.top+.3,K.z])},deco(y,v,P){let N=ce(Bn.stone),H=u(ue.DECO,N,{shops:!0}),z=50+P*mt(30,90),Q=y.w,W=y.d,ot=Jt,ut,K=3+(z>100?1:0);for(let st=0;st<K;st++){let Tt=st===0?z*.45:z*.55/(K-1);ut=d(y.x,y.z,Q,W,ot,Tt,ue.DECO,st===0?H:{...H,shops:!1}),st===0&&S(ut,H,v,ve(.4)),_(ut,"#e6dcc6"),ot+=Tt,Q*=mt(.7,.8),W*=mt(.7,.8)}let ft=d(ut.x,ut.z,Math.max(3,Q*.4),Math.max(3,W*.4),ut.top,8,ue.BLANK,u(ue.BLANK,N));p(ft.x,ft.top,ft.z,18),a.push({x:ft.x,z:ft.z,w:ft.w,d:ft.d,y:ft.top-1.2,color:ce(["#ffe2b0","#bfe3ff"])})},brick(y,v){let P=u(ue.BRICK,ce(Bn.brick),{shops:ve(.75),floorH:mt(3.1,3.4)}),N=Math.floor(mt(4,8)),H=d(y.x,y.z,y.w,y.d,Jt,g(N,P),ue.BRICK,P);P.shops&&S(H,P,v,ve(.5)),_(H,"#b8ab98");for(let z of v.slice(0,2))ve(.8)&&w(H,P,z);m(H,2,ve(.8))},condo(y,v,P){let N=u(ue.CONDO,ce(Bn.condo),{shops:ve(.6),floorH:3.2}),H=Math.floor(mt(6,12)+P*8),z=d(y.x,y.z,y.w,y.d,Jt,g(H,N),ue.CONDO,N);N.shops&&S(z,N,v,!1),M(z,N,v,2,"glass"),m(z,3)},hotel(y,v,P){let N=u(ue.CONDO,ce(["#efe6d4","#e2d3bd","#d8dfe2","#f2ddd0"]),{shops:!0,floorH:3.3}),H=Math.min(y.w,mt(26,38)),z=Math.min(y.d,mt(18,26)),Q=Math.floor(mt(10,16)+P*6),W=d(y.x,y.z,H,z,Jt,g(Q,N),ue.CONDO,N);M(W,N,v.length?v:[yn.pz],1,"metal");let ot=v[0]||yn.pz,ut=ce(Fv);o.push({kind:"hotel",b:W,f:ot,name:ut}),m(W,3)},shops(y,v){let P=ve(.5),N=u(ue.PUNCHED,ve(.6)?ce(Bn.stucco):ce(Bn.concrete),{shops:!0}),H=d(y.x,y.z,y.w,y.d,Jt,P?g(1,N):6,ue.PUNCHED,N);S(H,N,v.length?v:[yn.pz],!0),_(H,"#cfc6b4"),m(H,Math.floor(mt(2,5)))},garage(y,v){let P=u(ue.GARAGE,ce(["#b3ada2","#a7a49c","#c0b8aa"]),{floorH:3}),N=Math.floor(mt(4,7)),H=d(y.x,y.z,y.w,y.d,Jt,N*3+1.4,ue.GARAGE,P);o.push({kind:"garage",b:H,f:v[0]||yn.pz}),m(H,1)},stucco(y,v){let P=v.length>0&&ve(.8),N=u(ue.STUCCO,ce(Bn.stucco),{shops:P}),H=Math.floor(mt(2,5)),z=d(y.x,y.z,y.w,y.d,Jt,g(H,N),ve(.8)?ue.STUCCO:ue.PUNCHED,N);P&&S(z,N,v,ve(.6)),ve(.8)?f("tileRoof",z.x,z.z,{pos:[z.x,z.top,z.z],rot:0,scale:[z.w,Math.min(z.w,z.d)*.22,z.d]}):m(z,2),v.find(W=>W.nx===-1)&&ve(.6)&&h.push({x:z.x-z.w/2-.12,z:z.z,y:(P?4.8:1.2)+1.8,face:"west",text:ce(["MOTEL","TACOS","SURF SHOP","LIQUOR","PIZZA","COCKTAILS","ICE CREAM","BAIT & TACKLE"]),color:ce(["#ff4f7b","#5ff2ff","#ffd25a","#ff7a3d","#9dff6a"])})},motel(y,v){let P=v[0]||yn.pz,N=u(ue.MOTEL,ce(Bn.stucco),{floorH:3}),H=as(y,P),z=P.nx?y.w:y.d,Q=Math.min(z*.5,12),W=z/2-Q/2,ot=y.x-P.nx*W,ut=y.z-P.nz*W,K=P.nx?Q:H*.92,ft=P.nx?H*.92:Q,st=d(ot,ut,K,ft,Jt,g(2,N),ue.MOTEL,N),[Tt,vt]=ls(st,P,0,0);f("balconySlab",Tt,vt,{pos:[Tt,.9+3+.02,vt],rot:P.rot,scale:[as(st,P)-.4,1,1.15],color:"#e6e1d6"}),f("balconyRail",Tt,vt,{pos:[Tt,.9+3+.02,vt],rot:P.rot,scale:[as(st,P)-.4,1,1.15],color:"#e8e4da"}),f("tileRoof",st.x,st.z,{pos:[st.x,st.top,st.z],rot:0,scale:[st.w,Math.min(st.w,st.d)*.28,st.d]});let[Yt,G]=ls(y,P,-as(y,P)/2+4,-2);o.push({kind:"motelSign",x:Yt,z:G,f:P,name:ce(["SEA BREEZE","SUNSET","PALM VIEW","BLUE WAVE"])}),r.push({x:y.x+P.nx*Q/2,z:y.z+P.nz*Q/2,w:P.nx?z-Q:H,d:P.nx?H:z-Q,parking:!0})},warehouse(y,v){let P=u(ue.METAL,ce(Bn.metal),{floorH:9}),N=mt(8,11.5),H=d(y.x,y.z,y.w,y.d,Jt,N,ue.METAL,P);m(H,Math.floor(mt(1,4)))}},T=ii/2-fi;for(let y of wi)for(let v of Ti){let P=`${y},${v}`,N=Uv[P],H=Math.max(0,1-Math.hypot(y-150,v+200)/380);if(N==="park"){r.push({x:y,z:v,w:T*2,d:T*2,park:!0});continue}if(N==="parking"){let W=d(y-T+14,v-T+11,24,18,Jt,5.5,ue.STUCCO,u(ue.STUCCO,ce(Bn.stucco),{shops:!0}));S(W,null,[yn.nz],!0),h.push({x:W.x,z:W.z-W.d/2-.1,y:7.6,face:"north",text:P==="80,240"?"GAS \xB7 24H":"SURF DINER",color:"#ff6a5a"}),r.push({x:y+10,z:v+10,w:T*1.6,d:T*1.6,parking:!0});continue}if(N==="plaza"||N==="plaza-tall"){let W=mt(46,54);R.tower({x:y+mt(-6,6),z:v+mt(-6,6),w:W,d:W},[yn.px,yn.nx,yn.pz,yn.nz],N==="plaza-tall"?1.25:.95),r.push({x:y,z:v,w:T*2,d:T*2,plaza:!0});continue}let z=y===-240,Q=Co({x0:y-T,x1:y+T,z0:v-T,z1:v+T},z?18:22,z?44:64,[]);for(let W of Q){let ot=W.x1-W.x0,ut=W.z1-W.z0,K=[];if(W.x0<=y-T+.5&&K.push(yn.nx),W.x1>=y+T-.5&&K.push(yn.px),W.z0<=v-T+.5&&K.push(yn.nz),W.z1>=v+T-.5&&K.push(yn.pz),ve(.07)||!K.length){r.push({x:(W.x0+W.x1)/2,z:(W.z0+W.z1)/2,w:ot,d:ut});continue}let ft=Object.fromEntries(Object.entries(N).filter(([Mt])=>Math.min(ot,ut)>=Nv[Mt])),st=Object.keys(ft).length?Ov(ft):"shops",Tt=st==="tower"?mt(2,6):st==="shops"||st==="brick"?mt(.2,1):mt(.5,3),vt=mt(1.5,4),Yt=K.includes(yn.nx)?Tt:vt,G=K.includes(yn.px)?Tt:vt,lt=K.includes(yn.nz)?Tt:vt,_t=K.includes(yn.pz)?Tt:vt,zt={x:(W.x0+Yt+W.x1-G)/2,z:(W.z0+lt+W.z1-_t)/2,w:ot-Yt-G,d:ut-lt-_t};R[st](zt,K,H)}}for(let y=0;y<160;y++){let v=pt(),P=v<.6?mt(420,980):mt(-300,700),N=v<.6?mt(-900,900):ve(.5)?mt(620,1e3):mt(-1e3,-620);l.push([P,N])}let A=Bv(),b=kv(t),E=Hv(t),D=new qt(1,1,1),F=Zf(),B=new Ft({map:b,emissive:16777215,emissiveMap:b,emissiveIntensity:.4,roughness:.5});B.onBeforeCompile=y=>{y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSign;`).replace("#include <uv_vertex>",`#include <uv_vertex>
        vec2 atlasUv = uv * vec2(0.5, 0.125) + aSign;
        #ifdef USE_MAP
          vMapUv = atlasUv;
        #endif
        #ifdef USE_EMISSIVEMAP
          vEmissiveMapUv = atlasUv;
        #endif`)},B.customProgramCacheKey=()=>"shop-sign-atlas";let Z=new Map,I={facade:{geometry:D,material:F,shadow:!0,lod:0},tileRoof:{geometry:Lv(),material:Dv(),shadow:!0,lod:0},ac:{geometry:A.acUnit,material:new Ft({color:16777215,roughness:.55,metalness:.5}),shadow:!0,lod:320},tank:{geometry:A.tank,material:new Ft({color:16777215,roughness:.9}),shadow:!0,lod:420},antenna:{geometry:A.antenna,material:new Ft({color:16777215,roughness:.4,metalness:.8}),shadow:!0,lod:0},fireEscape:{geometry:null,material:new Ft({color:16777215,roughness:.6,metalness:.6}),shadow:!0,lod:260},balconySlab:{geometry:A.balconySlab,material:new Ft({color:16777215,roughness:.8}),shadow:!0,lod:340},balconyGlass:{geometry:A.balconyRail,material:new Ft({color:16777215,roughness:.08,metalness:.7,transparent:!0,opacity:.55,depthWrite:!1}),shadow:!1,lod:300},balconyRail:{geometry:A.balconyRail,material:new Ft({color:16777215,roughness:.5,metalness:.5}),shadow:!0,lod:300},awning:{geometry:A.awning,material:new Ft({map:E,side:un,roughness:.9}),shadow:!0,lod:300},sign:{geometry:A.sign,material:B,shadow:!1,lod:520}},X=new Set(["tileRoof","ac","tank","antenna","fireEscape","balconyGlass","balconyRail","balconySlab"]),V=Array.from({length:Ar*zv},()=>[]),k=new Ct,j=new me,xt=new L,yt=new L,Rt=new Et,te=new L(0,1,0);for(let[y,v]of e){let[P,N]=y.split("|"),H=I[P];if(P==="fireEscape"){let z=new Map;for(let Q of v){let W=Q.floorH.toFixed(1);z.has(W)||z.set(W,[]),z.get(W).push(Q)}for(let[Q,W]of z)Z.has(Q)||Z.set(Q,A.fireEscape(Number(Q))),Wt(P,Number(N),W,Z.get(Q),H);continue}Wt(P,Number(N),v,H.geometry,H)}function Wt(y,v,P,N,H){let z=N;(y==="facade"||y==="sign")&&(z=N.clone());let Q=new Kt(z,H.material,P.length);if(y==="facade"){let W=new Float32Array(P.length*4),ot=new Float32Array(P.length*3),ut=new Float32Array(P.length*2);P.forEach((K,ft)=>{k.compose(xt.set(K.x,K.y0+K.h/2,K.z),j.identity(),yt.set(K.w,K.h,K.d)),Q.setMatrixAt(ft,k),Q.setColorAt(ft,Rt.set(K.wall)),W.set([K.style,K.floorH,K.cellW,K.seed],ft*4),ot.set(K.glass,ft*3),ut.set([K.shops?1:0,0],ft*2)}),z.setAttribute("aStyle",new Xe(W,4)),z.setAttribute("aGlass",new Xe(ot,3)),z.setAttribute("aExtra",new Xe(ut,2))}else{let W=y==="sign"?new Float32Array(P.length*2):null;P.forEach((ot,ut)=>{j.setFromAxisAngle(te,ot.rot||0),k.compose(xt.set(...ot.pos),j,yt.set(...ot.scale)),Q.setMatrixAt(ut,k),ot.color&&Q.setColorAt(ut,Rt.set(ot.color)),W&&W.set([ot.sign%2*.5,.875-Math.floor(ot.sign/2)*.125],ut*2)}),W&&z.setAttribute("aSign",new Xe(W,2))}Q.name=y,Q.castShadow=H.shadow,Q.receiveShadow=!0,Q.userData.lod=H.lod,y==="balconyGlass"&&(Q.userData.noAO=!0),X.has(y)&&Q.layers.set(1),Q.computeBoundingSphere(),s.add(Q),V[v].push(Q)}let re=V.map((y,v)=>new L(v%Ar?160:-200,0,[-320,0,320][Math.floor(v/Ar)])),at=[],ct=(y,v,P)=>qe(t,y,v,P),At=(y,v={})=>new Ft({color:1118481,map:y,emissive:16777215,emissiveMap:y,emissiveIntensity:.4,roughness:.5,...v}),tt=new Ft({color:1843235,roughness:.45,metalness:.6}),dt=new Ft({color:3353120,emissive:16767392,emissiveIntensity:.3}),bt=(y,v,P,N=!0)=>{y.traverse(H=>{H.isMesh&&(H.castShadow=!0,H.receiveShadow=!0)}),y.isGroup&&Bs(y),y.userData.glow=N,s.add(y),at.push({mesh:y,chunk:Kf(v,P)})};for(let y of o)if(y.kind==="hotel"){let{b:v,f:P,name:N}=y,H=as(v,P),z=new ze,Q=ce(["#ffd27a","#ff7aa8","#7ad7ff"]),W=new Pt(new qt(7,.35,3.4),tt);W.position.set(0,4.25,1.7);let ot=new Pt(new qt(6.6,.05,3),dt);ot.position.set(0,4.05,1.7),z.add(W,ot);for(let lt of[-3.2,3.2]){let _t=new Pt(new pe(.07,.07,4.1,8),tt);_t.position.set(lt,2.05,3.3),z.add(_t)}let ut=N.replace("HOTEL ","").replace("THE ",""),K=ct(128,1024,(lt,_t,zt)=>{lt.fillStyle="#121519",lt.fillRect(0,0,_t,zt),lt.strokeStyle=Q,lt.lineWidth=6,lt.strokeRect(8,8,_t-16,zt-16),lt.fillStyle=Q,lt.textAlign="center",lt.textBaseline="middle",lt.shadowColor=Q,lt.shadowBlur=14;let Mt=ut.split(""),gt=(zt-80)/Mt.length;lt.font=`800 ${Math.min(100,gt*.95)}px "Barlow Condensed", Impact, sans-serif`,Mt.forEach((Vt,ae)=>lt.fillText(Vt,_t/2,50+gt*(ae+.5)))}),ft=At(K),st=Math.min(14,v.top-9);if(st>5){let lt=new Pt(new qt(.35,st,2.2),[ft,ft,tt,tt,tt,tt]);lt.position.set(H/2-2.2,7+st/2,1.2),z.add(lt)}let Tt=ct(1024,128,(lt,_t,zt)=>{lt.clearRect(0,0,_t,zt),lt.font='800 104px "Barlow Condensed", Impact, sans-serif',lt.textAlign="center",lt.textBaseline="middle",lt.shadowColor=Q,lt.shadowBlur=18,lt.fillStyle=Q,lt.fillText(N,_t/2,zt/2+4),lt.shadowBlur=0,lt.fillStyle="#fff6e0",lt.fillText(N,_t/2,zt/2+4)}),vt=new Pt(new Ne(Math.min(H*.85,26),Math.min(H*.85,26)/8),At(Tt,{transparent:!0,alphaTest:.05,color:0}));vt.position.set(0,v.top-v.y0+1.9,-.6),vt.material.userData.boost=1.4,z.add(vt);let[Yt,G]=ls(v,P,0,0);z.position.set(Yt,Jt,G),z.rotation.y=P.rot,bt(z,Yt,G)}else if(y.kind==="garage"){let{b:v,f:P}=y,N=ct(128,128,(ut,K,ft)=>{ut.fillStyle="#1d5fbf",ut.fillRect(0,0,K,ft),ut.strokeStyle="#ffffff",ut.lineWidth=8,ut.strokeRect(8,8,K-16,ft-16),ut.fillStyle="#ffffff",ut.font="800 100px Arial, sans-serif",ut.textAlign="center",ut.textBaseline="middle",ut.fillText("P",K/2,ft/2+6)}),H=At(N,{color:16777215}),z=new Pt(new qt(1.8,1.8,.3),[tt,tt,tt,tt,H,H]),Q=as(v,P),[W,ot]=ls(v,P,Q/2-1.5,.3);z.position.set(W,v.top-2,ot),z.rotation.y=P.rot,bt(z,W,ot)}else if(y.kind==="motelSign"){let{x:v,z:P,f:N,name:H}=y,z=ct(512,256,(K,ft,st)=>{K.fillStyle="#16303a",K.fillRect(0,0,ft,st),K.strokeStyle="#ff5a6e",K.lineWidth=10,K.strokeRect(10,10,ft-20,st-20),K.textAlign="center",K.textBaseline="middle",K.shadowColor="#ff5a6e",K.shadowBlur=20,K.fillStyle="#ff7a8a",K.font='800 110px "Barlow Condensed", Impact, sans-serif',K.fillText("MOTEL",ft/2,92),K.shadowColor="#5fe8ff",K.fillStyle="#9ff3ff",K.font='700 54px "Barlow Condensed", Impact, sans-serif',K.fillText(H,ft/2,186),K.shadowBlur=0,K.fillStyle="#ffd25a",K.font="700 30px Arial",K.fillText("VACANCY",ft/2,232)}),Q=At(z),W=new ze,ot=new Pt(new pe(.22,.28,7.5,10),tt);ot.position.y=3.75;let ut=new Pt(new qt(5.4,2.7,.35),[tt,tt,tt,tt,Q,Q]);ut.position.y=8.6,W.add(ot,ut),W.position.set(v,Jt,P),W.rotation.y=N.rot+Math.PI/2,bt(W,v,P)}let Nt=new Ft({color:2236962,emissive:16777215,emissiveIntensity:0,roughness:.4}),U=new Kt(D,Nt,a.length);a.forEach((y,v)=>{k.compose(xt.set(y.x,y.y,y.z),j.identity(),yt.set(y.w+.5,.7,y.d+.5)),U.setMatrixAt(v,k),U.setColorAt(v,Rt.set(y.color))}),s.add(U),Nt.onBeforeCompile=y=>{y.fragmentShader=y.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},Nt.customProgramCacheKey=()=>"crown";let Ht=new en({color:new Et(6,.3,.2)}),It=new Kt(new In(.45,8,6),Ht,c.length);c.forEach(([y,v,P],N)=>{k.makeTranslation(y,v,P),It.setMatrixAt(N,k)}),s.add(It);let rt=Vv(s,l),nt=[];for(let y of h)nt.push(Gv(s,t,y));let Y=Zf(!0),J=V.map((y,v)=>{let P=v%Ar,N=Math.floor(v/Ar);return{x0:P?0:-360,x1:P?360:0,z0:[-570,-160,160][N],z1:[-160,160,570][N]}}),ht=0,Bt=at.flatMap(({mesh:y})=>{let v=[];return y.traverse(P=>{if(P.isMesh)for(let N of[].concat(P.material))(N.emissiveMap||N===dt)&&v.push(N)}),v}),Dt={colliders:n,buildingTops:i,emptyLots:r,stats:{buildings:n.length,facadeBoxes:[...e.keys()].filter(y=>y.startsWith("facade")).reduce((y,v)=>y+e.get(v).length,0)},update(y,v,P,N=.016){Nt.emissiveIntensity=y*1.6,Ht.color.setRGB(8*(.15+.85*y)*(Math.sin(v*3.2)>.2?1:.04),.25,.15),B.emissiveIntensity=.3+y*2;for(let H of new Set(Bt))H.emissiveIntensity=(.3+y*2.2)*(H.userData.boost||1);for(let H of nt){let z=H.userData.flicker&&Math.sin(v*37)>.93?.3:1;H.material.emissiveIntensity=(.3+y*2.2)*z}if(rt&&(rt.material.userData.night.value=y),ht-=N,P&&ht<=0){ht=.25;let H=P.position.x,z=P.position.z;V.forEach((Q,W)=>{let ot=J[W],ut=Math.max(ot.x0-H,0,H-ot.x1),K=Math.max(ot.z0-z,0,z-ot.z1),ft=Math.hypot(ut,K);for(let st of Q)st.userData.lod>0&&(st.visible=ft<st.userData.lod),(st.material===F||st.material===Y)&&(st.material=ft>360?Y:F)});for(let{mesh:Q,chunk:W}of at){let ot=J[W],ut=Math.max(ot.x0-H,0,H-ot.x1),K=Math.max(ot.z0-z,0,z-ot.z1);Q.visible=Math.hypot(ut,K)<700}}}};return Dt.update(0,0,{position:{x:-316,z:246}},1),Dt}function Vv(s,t){let e={value:0},n=zn("hillhouse",{color:16777215,roughness:.85},{uniforms:{night:e},fragmentPars:"uniform float night; float paHouseGlow;",color:`
      {
        float h = pa_hash12(floor(vPaWorld.xz * 0.2));
        float win = step(0.5, fract(vPaWorld.y * 0.45)) * step(0.4, fract((vPaWorld.x + vPaWorld.z) * 0.35)) * step(0.3, abs(vPaNormalW.y - 1.0));
        paHouseGlow = win * step(h, 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05), win * 0.7);
      }`,emissive:"totalEmissiveRadiance += vec3(1.0, 0.7, 0.4) * paHouseGlow * night * 2.5;"}),i=t.filter(([h,l])=>di(h,l)>4),r=new Kt(new qt(1,1,1),n,i.length),o=new Ct,a=new me,c=new Et;return i.forEach(([h,l],f)=>{let d=mt(8,16),u=mt(8,14),g=mt(4,8);a.setFromAxisAngle(new L(0,1,0),pt()*Math.PI),o.compose(new L(h,di(h,l)+g/2-1,l),a,new L(d,g,u)),r.setMatrixAt(f,o),r.setColorAt(f,c.set(ce(Bn.stucco)))}),n.userData.night=e,r.castShadow=!1,r.receiveShadow=!0,s.add(r),r}function Gv(s,t,{x:e,y:n,z:i,face:r,text:o,color:a}){let c=qe(t,512,128,(d,u,g)=>{d.fillStyle="#0b0d10",d.fillRect(0,0,u,g),d.font='700 70px "Barlow Condensed", Impact, sans-serif',d.textAlign="center",d.textBaseline="middle",d.shadowColor=a,d.shadowBlur=18,d.fillStyle=a,d.fillText(o,u/2,g/2+3),d.shadowBlur=0,d.fillStyle="#ffffffcc",d.fillText(o,u/2,g/2+3),d.strokeStyle=a,d.lineWidth=5,d.strokeRect(8,8,u-16,g-16)}),h=new Ft({color:1118481,map:c,emissive:16777215,emissiveMap:c,emissiveIntensity:1,roughness:.5}),l=Math.min(12,3+o.length*.9),f=new Pt(new Ne(l,l/4),h);return f.position.set(e,n,i),f.rotation.y=r==="west"?-Math.PI/2:r==="east"?Math.PI/2:r==="north"?Math.PI:0,f.userData.flicker=ve(.25),s.add(f),f}var Po=class s extends Pt{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new hn;let n=this,i=e.color!==void 0?new Et(e.color):new Et(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||s.ReflectorShader,h=e.multisample!==void 0?e.multisample:4,l=new ti,f=new L,d=new L,u=new L,g=new Ct,x=new L(0,0,-1),m=new ke,p=new L,_=new L,S=new ke,M=new Ct,w=this.camera,R=new Je(r,o,{samples:h,type:fn}),T=new _e({name:c.name!==void 0?c.name:"unspecified",uniforms:dn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});T.uniforms.tDiffuse.value=R.texture,T.uniforms.color.value=i,T.uniforms.textureMatrix.value=M,this.material=T,this.onBeforeRender=function(A,b,E){if(d.setFromMatrixPosition(n.matrixWorld),u.setFromMatrixPosition(E.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(d,u),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(d),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(u),_.subVectors(d,x),_.reflect(f).negate(),_.add(d),w.position.copy(p),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(f),w.lookAt(_),w.far=E.far,w.updateMatrixWorld(),w.projectionMatrix.copy(E.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(w.projectionMatrix),M.multiply(w.matrixWorldInverse),M.multiply(n.matrixWorld),l.setFromNormalAndCoplanarPoint(f,d),l.applyMatrix4(w.matrixWorldInverse),m.set(l.normal.x,l.normal.y,l.normal.z,l.constant);let F=w.projectionMatrix;S.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],S.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],S.z=-1,S.w=(1+F.elements[10])/F.elements[14],m.multiplyScalar(2/m.dot(S)),F.elements[2]=m.x,F.elements[6]=m.y,F.elements[10]=m.z+1-a,F.elements[14]=m.w,n.visible=!1;let B=A.getRenderTarget(),Z=A.xr.enabled,I=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(R),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(b,w),A.xr.enabled=Z,A.shadowMap.autoUpdate=I,A.setRenderTarget(B);let X=E.viewport;X!==void 0&&A.state.viewport(X),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return R},this.dispose=function(){R.dispose(),n.material.dispose()}}};Po.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Wv=`
uniform mat4 textureMatrix;
uniform float time;
varying vec4 vMirror;
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  float offshore = smoothstep(${$n.toFixed(1)}, ${($n-70).toFixed(1)}, wp.x);
  wp.y += (sin(wp.x * 0.045 + time * 0.9) * 0.22 + sin(wp.z * 0.031 - wp.x * 0.017 + time * 0.65) * 0.18) * offshore;
  vWorld = wp.xyz;
  vMirror = textureMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Xv=`
uniform sampler2D tDiffuse;
uniform float useMirror;
uniform float time;
uniform vec3 sunLight;
uniform vec3 ambient;
varying vec4 vMirror;
varying vec3 vWorld;
${wr}
${Yl}
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

  float shoreDist = ${$n.toFixed(1)} - vWorld.x; // meters offshore
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
}`;function jf(s,t){let i=new Ne(2400,3400,120,170),r=new Po(i,{textureWidth:512,textureHeight:512,clipBias:.003,multisample:0}),o=r.material.uniforms,a={...dn.clone(Lt.fog),...ln,fogSunColor:ln.fogSunColor,fogSunDir:ln.fogSunDir,fogHeightFalloff:ln.fogHeightFalloff,tDiffuse:o.tDiffuse,textureMatrix:o.textureMatrix,useMirror:{value:1},time:{value:0},sunLight:{value:new Et},ambient:{value:new Et}};r.material.dispose(),r.material=new _e({uniforms:a,vertexShader:Wv,fragmentShader:Xv,fog:!0,transparent:!0}),r.rotation.x=-Math.PI/2,r.position.set($n+8-2400/2,Oh,0),r.userData.noAO=!0,r.camera.layers.set(0),r.renderOrder=1,r.frustumCulled=!1,s.add(r);let c=new Ct,h=new yi(new Uint8Array([0,0,0,255]),1,1);h.needsUpdate=!0;let l=r.onBeforeRender,f=[];r.updateMatrixWorld(),r.geometry.computeBoundingBox();let d=r.geometry.boundingBox.clone().applyMatrix4(r.matrixWorld);d.expandByVector(new L(0,2,0));let u=new ji,g=new Ct,x=function(...S){let M=S[2];if(!(M&&On.wetness.value<.02&&(g.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),u.setFromProjectionMatrix(g),!u.intersectsBox(d)))){On.mirrorTex.value=h,On.useMirror.value=0;for(let w of f)w.visible=!1;l.apply(this,S);for(let w of f)w.visible=!0;c.copy(r.matrixWorld).invert(),On.mirrorMatrix.value.copy(o.textureMatrix.value).multiply(c),On.mirrorTex.value=r.getRenderTarget().texture,On.useMirror.value=1}};r.onBeforeRender=x;let m=!0,p=Yv(s,t),_=Zv(s);return{ocean:r,pier:p,mirrorHide:f,setReflections(S,M=.5){m=S,a.useMirror.value=S?1:0,r.onBeforeRender=S?x:()=>{},this.resize(M)},resize(S=.5){if(!m)return;let M=t.getDrawingBufferSize(new kt);r.getRenderTarget().setSize(Math.max(256,Math.round(M.x*S)),Math.max(256,Math.round(M.y*S)))},update(S,M){a.time.value=S,m||(On.mirrorTex.value=h,On.useMirror.value=0),On.worldTime.value=S,a.sunLight.value.copy(M.sun.color).multiplyScalar(M.elevation>-1?M.sun.intensity:0),a.ambient.value.copy(M.hemi.color).multiplyScalar(M.hemi.intensity*.6),p.update(S,M.lampFactor),_.update(M.lampFactor)}}}function qv(){return zn("wood",{color:16777215,roughness:.8},{color:`
      {
        vec2 p = vPaWorld.xz;
        float plank = (abs(vPaNormalW.y) > 0.5 ? p.y : p.x) / 0.3;
        float fw = max(fwidth(plank), 0.002);
        float gap = pa_band(fract(plank), 0.0, 0.07, fw);
        float id = pa_hash12(vec2(floor(plank), 3.0));
        vec3 col = mix(vec3(0.3, 0.22, 0.15), vec3(0.42, 0.33, 0.23), id) * (0.82 + pa_noise(vec2(p.x * 3.0, plank)) * 0.25);
        diffuseColor.rgb = col * (1.0 - gap * 0.55);
      }`})}function Yv(s,t){let e=new ze,{x0:n,x1:i,z:r,halfWidth:o,deckY:a}=ee,c=qv(),h=n-i,l=new Pt(new qt(h,.6,o*2),c);l.position.set((n+i)/2,a-.3,r),l.castShadow=l.receiveShadow=!0,e.add(l);let f=ee.rampStart-n,d=Math.atan2(a-.16,f),u=new qt(Math.hypot(f,a),.6,o*2),g=new Pt(u,c);g.position.set((ee.rampStart+n)/2,(a+.16)/2-.3,r),g.rotation.z=-d,g.castShadow=g.receiveShadow=!0,e.add(g);let x=[];for(let Y=ee.rampStart-8;Y>=i;Y-=9)for(let J of[-o+1,0,o-1])x.push([Y,r+J]);let m=new pe(.32,.38,1,8),p=new Kt(m,new Ft({color:4930349,roughness:.9}),x.length),_=new Ct;x.forEach(([Y,J],ht)=>{let Dt=(Hi(Y,r)??a)-.5;_.compose(new L(Y,(-6+Dt)/2,J),new me,new L(1,Dt- -6,1)),p.setMatrixAt(ht,_)}),p.castShadow=!0,e.add(p),ee.piles=x.filter(([Y])=>Y>$n-4);let S=new Ft({color:15262938,roughness:.5,metalness:.3});for(let Y of[-1,1])for(let J of[.55,1.05]){let ht=new Pt(new qt(h,.08,.08),S);ht.position.set((n+i)/2,a+J,r+Y*(o-.1)),e.add(ht)}let M=Math.floor(h/3),w=new Kt(new qt(.1,1.1,.1),S,M*2);for(let Y=0;Y<M;Y++)for(let[J,ht]of[-1,1].entries())_.makeTranslation(n-Y*3,a+.55,r+ht*(o-.1)),w.setMatrixAt(Y*2+J,_);e.add(w);let R=new Ft({color:15327695,roughness:.75}),T=new Ft({color:3108730,roughness:.5,metalness:.2});for(let[Y,J,ht,Bt,Dt]of[[i+14,r+4.5,18,7,6],[i+36,r-5,12,6,5]]){let y=new Pt(new qt(ht,Dt,Bt),R);y.position.set(Y,a+Dt/2,J),y.castShadow=y.receiveShadow=!0,e.add(y);let v=new Pt(new qt(ht+1,.4,Bt+1),T);v.position.set(Y,a+Dt+.2,J),e.add(v)}let A=new Ft({color:1780275,roughness:.4,metalness:.6});for(let Y of[-1,1]){let J=new Pt(new qt(.6,8,.6),A);J.position.set(ee.rampStart-2,4.1,r+Y*(o+.4)),J.castShadow=!0,e.add(J)}let b=qe(t,1024,160,(Y,J,ht)=>{Y.fillStyle="#0d1418",Y.fillRect(0,0,J,ht),Y.textAlign="center",Y.textBaseline="middle",Y.font='800 96px "Barlow Condensed", Impact, sans-serif',Y.shadowColor="#ff8a3d",Y.shadowBlur=24,Y.fillStyle="#ffb36b",Y.fillText("VISTA PAC\xCDFICA PIER",J/2,ht/2+4),Y.shadowBlur=0,Y.fillStyle="#fff3e0",Y.fillText("VISTA PAC\xCDFICA PIER",J/2,ht/2+4)}),E=new Ft({color:1118481,map:b,emissive:16777215,emissiveMap:b,emissiveIntensity:1}),D=new Pt(new qt(.4,2.6,o*2+1.4),A);D.position.set(ee.rampStart-2,8.6,r),e.add(D);for(let Y of[-1,1]){let J=new Pt(new Ne(o*2+1.2,2.4),E);J.position.set(ee.rampStart-2+Y*.21,8.6,r),J.rotation.y=Y*Math.PI/2,e.add(J)}let F=new ze,B=19,Z=a+B+3.5,I=i+55,X=r+.5;F.position.set(I,Z,X);let V=new Ft({color:14278112,roughness:.35,metalness:.8}),k=new ts(B,.22,8,96);for(let Y of[-1.3,1.3]){let J=new Pt(k,V);J.position.z=Y,F.add(J);let ht=new Pt(new ts(B*.55,.14,6,64),V);ht.position.z=Y,F.add(ht)}let j=24,xt=new pe(.07,.07,B,4);xt.translate(0,B/2,0);for(let Y=0;Y<j;Y++)for(let J of[-1.3,1.3]){let ht=new Pt(xt,V);ht.rotation.z=Y/j*Math.PI*2,ht.position.z=J,F.add(ht)}let yt=new Pt(new pe(1.1,1.1,3.6,16),V);yt.rotation.x=Math.PI/2,F.add(yt),e.add(F);for(let Y of[-3.5,3.5])for(let J of[-1,1]){let ht=Math.hypot(9,Z-a),Bt=new Pt(new pe(.28,.4,ht,8),V);Bt.position.set(I+J*4.5,(Z+a)/2,X+Y),Bt.rotation.z=J*Math.atan2(9,Z-a),Bt.castShadow=!0,e.add(Bt)}let Rt=16,te=new Ft({color:16777215,roughness:.4,metalness:.3}),Wt=new Kt(new qt(1.8,2,1.8),te,Rt),re=["#e2523a","#f2c14e","#3aa0c8","#f7f2e6"],at=new Et;for(let Y=0;Y<Rt;Y++)Wt.setColorAt(Y,at.set(re[Y%4]));Wt.castShadow=!0,e.add(Wt);let ct=9,At=j*ct+96,tt=new en({color:16777215}),dt=new Kt(new In(.16,6,4),tt,At),bt=[];for(let Y=0;Y<j;Y++){let J=Y/j*Math.PI*2;for(let ht=1;ht<=ct;ht++){let Bt=ht/ct*B;bt.push([-Math.sin(J)*Bt,Math.cos(J)*Bt,1.45,ht/ct,Y])}}for(let Y=0;Y<96;Y++){let J=Y/96*Math.PI*2;bt.push([Math.cos(J)*B,Math.sin(J)*B,1.5,1,Y])}bt.forEach(([Y,J,ht],Bt)=>{_.makeTranslation(Y,J,ht),dt.setMatrixAt(Bt,_)}),F.add(dt),dt.layers.set(1);let Nt=[];for(let Y=n-6;Y>i+4;Y-=16)for(let J of[-1,1])Nt.push([Y,r+J*(o-.4)]);let U=new Kt(new pe(.06,.09,4.5,6),A,Nt.length),Ht=new Ft({color:16773846,emissive:16765066,emissiveIntensity:0}),It=new Kt(new In(.28,10,8),Ht,Nt.length);Nt.forEach(([Y,J],ht)=>{_.makeTranslation(Y,a+2.25,J),U.setMatrixAt(ht,_),_.makeTranslation(Y,a+4.6,J),It.setMatrixAt(ht,_)}),e.add(U,It),Bs(e,{exclude:[F]}),s.add(e);let rt=new Et,nt=new rn;return{lamps:Nt.map(([Y,J])=>[Y,a+4.6,J]),update(Y,J){let ht=Y*.06;F.rotation.z=ht;for(let Dt=0;Dt<Rt;Dt++){let y=ht+Dt/Rt*Math.PI*2;nt.position.set(I+Math.cos(y)*B,Z+Math.sin(y)*B-1.4,X),nt.updateMatrix(),Wt.setMatrixAt(Dt,nt.matrix)}Wt.instanceMatrix.needsUpdate=!0;let Bt=.25+J*5.5;for(let Dt=0;Dt<bt.length;Dt++){let[,,,y,v]=bt[Dt],P=(Y*.08+y*.35+v*.013)%1,N=.55+.45*Math.sin(Y*4-y*8+v*.5);rt.setHSL(P,.85,.55),rt.multiplyScalar(Bt*N),dt.setColorAt(Dt,rt)}dt.instanceColor.needsUpdate=!0,Ht.emissiveIntensity=J*3,E.emissiveIntensity=.3+J*1.8}}}function Zv(s){let t=new ze,e=new Ct,n=new Ft({color:6269385,roughness:.6}),i=new Ft({color:15854296,roughness:.6}),r=new Ft({color:14175290,roughness:.6});for(let u=-520;u<=520;u+=130){if(Math.abs(u-ee.z)<40)continue;let g=new ze,x=new Pt(new qt(3.2,2.4,3.2),n);x.position.y=3.2;let m=new Pt(new _i(2.7,1.1,4),r);m.position.y=4.95,m.rotation.y=Math.PI/4;let p=new Pt(new qt(4.4,.18,4.4),i);p.position.y=1.95;let _=new Pt(new qt(.1,.9,2.4),new Ft({color:1911347,roughness:.1,metalness:.6}));_.position.set(-1.62,3.5,0),g.add(x,m,p,_);for(let w of[-1.8,1.8])for(let R of[-1.8,1.8]){let T=new Pt(new qt(.18,2.4,.18),i);T.position.set(w,.8,R),g.add(T)}let S=new Pt(new qt(4.5,.12,1.4),i);S.position.set(3.6,1,0),S.rotation.z=-.42,g.add(S);let M=-388;g.position.set(M,-.02-(cn-M)*.0105,u),g.traverse(w=>{w.isMesh&&(w.castShadow=!0,w.receiveShadow=!0)}),t.add(g)}let o=["#e8553a","#f0c24b","#3b8fc2","#f3efe4","#45a37f"],a=40,c=new Kt(new _i(1.4,.55,12,1,!0),new Ft({color:16777215,roughness:.8,side:un}),a),h=new Kt(new pe(.03,.03,2.3,4),i,a),l=new Kt(new qt(.9,.02,1.9),new Ft({color:16777215,roughness:.9}),a),f=new Et,d=new me;for(let u=0;u<a;u++){let g=mt(-520,520);Math.abs(g-ee.z)<14&&(g+=30);let x=mt(-398,-366),m=-.02-(cn-x)*.0105;d.setFromEuler(new sn(mt(-.12,.12),0,mt(-.12,.12))),e.compose(new L(x,m+2.3,g),d,new L(1,1,1)),c.setMatrixAt(u,e),e.compose(new L(x,m+1.15,g),d,new L(1,1,1)),h.setMatrixAt(u,e),c.setColorAt(u,f.set(ce(o))),d.setFromAxisAngle(new L(0,1,0),mt(0,Math.PI)),e.compose(new L(x+mt(-1.5,1.5),m+.02,g+mt(-1.5,1.5)),d,new L(1,1,1)),l.setMatrixAt(u,e),l.setColorAt(u,f.set(ce(o)))}c.castShadow=h.castShadow=!0,l.receiveShadow=!0,t.add(c,h,l);for(let u of[c,h,l])u.layers.set(1);return Bs(t),s.add(t),{update(){}}}var Hh={value:new Et};function $v(s){return qe(s,256,1024,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<150;i++){let r=i/150,o=n*(.04+r*.94),a=e*.47*Math.sin(Math.PI*Math.pow(r,.75))*(.85+pt()*.3),c=70+pt()*50,h=40+pt()*30,l=25+pt()*20;t.strokeStyle=`rgb(${h},${c},${l})`,t.lineWidth=3.2+pt()*2.2;for(let f of[-1,1])t.beginPath(),t.moveTo(e/2,o),t.quadraticCurveTo(e/2+f*a*.5,o-a*.25,e/2+f*a,o-a*.55+pt()*8),t.stroke()}t.strokeStyle="#5b5a34",t.lineWidth=6,t.beginPath(),t.moveTo(e/2,n*.02),t.lineTo(e/2,n),t.stroke()})}function Kv(s){return qe(s,512,512,(t,e,n)=>{t.clearRect(0,0,e,n);for(let i=0;i<46;i++){let r=pt()*Math.PI*2,o=Math.sqrt(pt())*e*.36,a=e/2+Math.cos(r)*o,c=n/2+Math.sin(r)*o,h=r+(pt()-.5)*1.2,l=40+pt()*50,f=.55+.45*(o/(e*.36));t.strokeStyle=`rgba(60,48,30,${.8})`,t.lineWidth=2,t.beginPath(),t.moveTo(a,c),t.lineTo(a+Math.cos(h)*l,c+Math.sin(h)*l),t.stroke();for(let d=0;d<16;d++){let u=pt(),g=a+Math.cos(h)*l*u+(pt()-.5)*18,x=c+Math.sin(h)*l*u+(pt()-.5)*18,m=(70+pt()*70)*f,p=(28+pt()*32)*f,_=(18+pt()*26)*f;t.fillStyle=`rgb(${p|0},${m|0},${_|0})`,t.save(),t.translate(g,x),t.rotate(h+(pt()-.5)*2.2),t.beginPath(),t.ellipse(0,0,9+pt()*7,3.5+pt()*2.5,0,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(190,210,140,${.25*f})`,t.lineWidth=1,t.beginPath(),t.moveTo(-8,0),t.lineTo(8,0),t.stroke(),t.restore()}}})}function Jv(s,t,e,n,i){let o=[],a=[],c=[],h=new L(Math.cos(s),0,Math.sin(s)),l=new L(-h.z,0,h.x),f=new L;for(let u=0;u<=7;u++){let g=u/7,x=t-i*g*g;u>0&&(f=f.clone().addScaledVector(h,Math.cos(x)*e/7).add(new L(0,Math.sin(x)*e/7,0)));let m=n*Math.sin(Math.PI*Math.min(1,.15+g*.95))*.5+.05,p=.18*m;for(let[_,S]of[[-1,0],[0,.5],[1,1]]){let M=f.clone().addScaledVector(l,_*m);M.y+=_===0?p:-p*.2,o.push(M.x,M.y,M.z),a.push(S,1-g)}if(u>0){let _=(u-1)*3,S=u*3;c.push(_,S,_+1,_+1,S,S+1,_+1,S+1,_+2,_+2,S+1,S+2)}}let d=new Re;return d.setAttribute("position",new ie(o,3)),d.setAttribute("uv",new ie(a,2)),d.setIndex(c),d.computeVertexNormals(),d}function Qv(s,t,e){let n=[];for(let i=0;i<s;i++){let r=i%3,o=i/s*Math.PI*2+pt()*.3,a=[.95,.45,.05][r]+pt()*.2,c=[1.3,1.6,1.4][r];n.push(Jv(o,a,t*(r===0?.8:1)*mt(.88,1.1),e,c))}return Oe(n)}function jv(s){let t=new pe(.62,1,1,9,12,!0);t.translate(0,.5,0);let e=t.attributes.position;for(let n=0;n<e.count;n++){let i=e.getY(n);e.setX(n,e.getX(n)+s*i*i)}return t.computeVertexNormals(),t}function td(s,t,e={}){let n=zn(t,{map:s,alphaTest:.42,side:un,roughness:.72,metalness:0,...e},{uniforms:{worldTime:ln.worldTime,leafSun:Hh,skySunDir:ln.skySunDir},vertexPars:"uniform float worldTime;",vertex:"",fragmentPars:"uniform vec3 leafSun; uniform vec3 skySunDir;",color:"diffuseColor.rgb *= 0.8 + 0.4 * pa_noise(vPaWorld.xz * 0.7 + vPaWorld.y);",emissive:`
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
      }`)},n}function ty(){return zn("palmtrunk",{color:16777215,roughness:.9},{color:`
      {
        float rings = pa_band(fract(vPaWorld.y * 3.2 + pa_noise(vPaWorld.xz * 3.0) * 0.4), 0.0, 0.18, fwidth(vPaWorld.y * 3.2));
        vec3 bark = mix(vec3(0.33, 0.29, 0.24), vec3(0.45, 0.4, 0.33), pa_noise(vec2(atan(vPaNormalW.z, vPaNormalW.x) * 4.0, vPaWorld.y * 0.8)));
        diffuseColor.rgb = bark * (1.0 - rings * 0.3);
      }`})}function kh({lobes:s,cards:t,spread:e,crownY:n,lobeR:i,trunkH:r,columnar:o=!1}){let a=[],c=[],h=new pe(.2,.34,r+.4,7);h.translate(0,(r+.4)/2,0),c.push(h);let l=[];for(let g=0;g<s;g++){if(o){let p=g/Math.max(1,s-1);l.push([new L((pt()-.5)*.3,n+p*6.4,(pt()-.5)*.3),i*(1.05-p*.55)]);continue}if(g===s-1){l.push([new L(0,n+i*.75,0),i*1.05]);continue}let x=g/(s-1)*Math.PI*2+pt()*.6,m=e*mt(.75,1.1);l.push([new L(Math.cos(x)*m,n+mt(-.6,.5),Math.sin(x)*m),i*mt(.85,1.1)])}let f=new L(0,r*.92,0),d=new L,u=new L;for(let[g,x]of l){if(!o){let m=g.clone().sub(f),p=m.length()*.85,_=new pe(.07,.14,p,5);_.translate(0,p/2,0),_.applyQuaternion(new me().setFromUnitVectors(new L(0,1,0),m.normalize())),_.translate(f.x,f.y,f.z),c.push(_)}for(let m=0;m<t;m++){let p=new Ne(2.1,2.1);d.set(pt()-.5,pt()-.35,pt()-.5).normalize();let _=Math.cbrt(pt()),S=g.clone().addScaledVector(d,_*x*.85),M=d.clone().add(new L(pt()-.5,pt()-.5,pt()-.5).multiplyScalar(.9)).normalize();p.lookAt(M),p.rotateZ(pt()*6.28),p.translate(S.x,S.y,S.z);let w=p.attributes.normal,R=p.attributes.position,T=new Float32Array(R.count*3);for(let A=0;A<R.count;A++){u.set(R.getX(A),R.getY(A),R.getZ(A));let b=u.clone().sub(g).normalize(),E=u.clone().sub(new L(0,n,0)).normalize();b.multiplyScalar(.7).addScaledVector(E,.3).normalize(),w.setXYZ(A,b.x,b.y,b.z);let D=Se.clamp(.5+_*.4+b.y*.15,.35,1);T[A*3]=T[A*3+1]=T[A*3+2]=D}p.setAttribute("color",new tn(T,3)),a.push(p)}}return{canopy:Oe(a),wood:Oe(c.map(g=>g.index?g.toNonIndexed():g))}}function ed(s,t){let e=[],n=$v(t),i=Kv(t),r=td(n,"frond"),o=td(i,"canopy",{vertexColors:!0}),a=ty(),c=new Ft({color:6048309,roughness:1}),h=[],l=[],f=[];for(let T=-545;T<=545;T+=18)Math.abs(T-ee.z)<14||(h.push([(nn.to+cn)/2+mt(-1.5,1.5),T+mt(-2,2)]),ve(.3)&&l.push([cn-mt(6,14),T+mt(-4,4)]));for(let T of[-320,0])for(let A=-300;A<330;A+=28)if(!Zt.some(b=>Math.abs(A-b)<jt+6))for(let b of[-1,1])h.push([A+mt(-1,1),T+b*(jt+1.6)]);for(let T=-470;T<480;T+=32)$t.some(A=>Math.abs(T-A)<jt+6)||h.push([-320+jt+1.6,T+mt(-1,1)]);let d=zs.map(T=>Os(T));for(let T of[-160,0])for(let A=-506;A<520;A+=34)if(!$t.some(b=>Math.abs(A-b)<jt+7))for(let b of[-1,1]){let E=T+b*(jt+2.7),D=A+(b>0?17:0);d.some(([F,B])=>Math.abs(F-E)<4&&Math.abs(B-D)<6)||$t.some(F=>Math.abs(D-F)<jt+7)||h.push([E+mt(-.3,.3),D+mt(-1,1)])}for(let[T,A]of[[-80,80],[240,400]]){let b=ii/2-10;for(let E=0;E<26;E++){let D=T+mt(-b,b),F=A+mt(-b,b);Math.abs(D-T)<9&&Math.abs(F-A)<9||(ve(.4)?l.push([D,F]):f.push([D,F,mt(.8,1.3),0]))}}for(let T of[0,160,320])for(let A=110;A<470;A+=24)if(!$t.some(b=>Math.abs(A-b)<jt+6))for(let b of[-1,1])T===320&&b>0||f.push([T+b*(jt+1.8),A,mt(.6,.85),0]);for(let T=0;T<520;T++){let A=pt(),b=A<.56?mt(380,1100):mt(-300,700),E=A<.56?mt(-1100,1100):A<.78?mt(-1e3,-575):mt(575,1e3),D=di(b,E);D<2||f.push([b,E,mt(.7,1.6),D])}let u=new Ct,g=new me,x=new L,m=new L,p=new L(0,1,0);function _(T,{heightRange:A,thickness:b,bend:E,crown:D,skirt:F}){let B=jv(E),Z=Qv(D.count,D.length,D.width),I=new Kt(B,a,T.length),X=new Kt(Z,r,T.length),V=F?new Kt(new pe(.9,.55,1,8),c,T.length):null;T.forEach(([k,j],xt)=>{let yt=mt(...A);g.setFromAxisAngle(p,pt()*Math.PI*2),m.set(b,yt,b),x.set(k,-.1,j),u.compose(x,g,m),I.setMatrixAt(xt,u);let Rt=new L(E,1,0).applyMatrix4(u),te=mt(.85,1.15);g.setFromAxisAngle(p,pt()*Math.PI*2),u.compose(Rt,g,m.set(te,te,te)),X.setMatrixAt(xt,u),V&&(u.compose(Rt.clone().add(new L(0,-1.6,0)),g,m.set(1,2.6,1)),V.setMatrixAt(xt,u)),e.push({x:k,z:j,r:.45})}),I.castShadow=X.castShadow=!0,I.receiveShadow=X.receiveShadow=!0,s.add(I,X),V&&(V.castShadow=!0,s.add(V))}_(h,{heightRange:[17,26],thickness:.36,bend:4,crown:{count:15,length:4.2,width:1.5},skirt:!0}),_(l,{heightRange:[6,10],thickness:.75,bend:.8,crown:{count:24,length:6.2,width:2.2},skirt:!1});let S={broad:kh({lobes:6,cards:22,spread:2.1,crownY:5.6,lobeR:1.85,trunkH:4.2}),cypress:kh({lobes:5,cards:14,spread:.25,crownY:2.4,lobeR:1.05,trunkH:1.6,columnar:!0}),far:kh({lobes:3,cards:14,spread:1.7,crownY:5.4,lobeR:2.1,trunkH:4.2})},M={broad:[],cypress:[],far:[]};for(let T of f){let[A,b,E,D]=T;D>0?M[ve(.35)?"cypress":"far"].push(T):M.broad.push(T)}let w=new Ft({color:4865328,roughness:.95}),R=new Et;for(let[T,A]of Object.entries(M)){let{canopy:b,wood:E}=S[T],D=new Kt(b,o,A.length),F=new Kt(E,w,A.length);A.forEach(([B,Z,I,X],V)=>{g.setFromAxisAngle(p,pt()*Math.PI*2);let k=T==="cypress"?mt(1.1,1.6):mt(.85,1.2);u.compose(x.set(B,X-.1,Z),g,m.set(I,I*k,I)),D.setMatrixAt(V,u),F.setMatrixAt(V,u),T==="broad"&&ve(.22)?R.setHSL(mt(.72,.78),mt(.35,.5),mt(.62,.72)):T==="cypress"?R.setHSL(mt(.26,.32),mt(.3,.45),mt(.32,.42)):R.setHSL(mt(.2,.3),mt(.35,.6),mt(.45,.62)),D.setColorAt(V,R),X===0&&e.push({x:B,z:Z,r:.5})}),D.castShadow=F.castShadow=T!=="far",D.receiveShadow=!0,T!=="broad"&&(D.layers.set(1),F.layers.set(1)),s.add(D,F)}return{trunkColliders:e}}var Ql=28;function cs(s,t){let e=(t%Ql+Ql)%Ql,n=s===0?e:(e+14)%Ql;return n<10?2:n<13?1:0}function ey(s){return qe(s,128,128,(t,e,n)=>{let i=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.55)"),i.addColorStop(.7,"rgba(255,255,255,0.15)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,e,n)})}var ny=`
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
}`,iy=`
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
}`;function Io(s,t=0){return new _e({uniforms:{color:{value:new Et(s)},intensity:{value:t}},vertexShader:ny,fragmentShader:iy,transparent:!0,depthWrite:!1,blending:Nn,side:un})}function nd(s,t,e=[],n=null){let i=new Ct,r=new me,o=new L,a=new L(1,1,1),c=new L(0,1,0),h=new Ft({color:4146760,roughness:.45,metalness:.7}),l=[],f=jt+7;for(let rt of Zt)for(let nt=-520;nt<=520;nt+=38)if(!$t.some(Y=>Math.abs(nt-Y)<f))for(let Y of[-1,1])rt===Zt[0]&&Y<0||l.push([rt+Y*(jt+.9),nt+(Y>0?19:0),-Y,0]);for(let rt of $t)for(let nt=-300;nt<=320;nt+=38)if(!Zt.some(Y=>Math.abs(nt-Y)<f))for(let Y of[-1,1])l.push([nt+(Y>0?19:0),rt+Y*(jt+.9),0,-Y]);let d=[];for(let rt=-540;rt<=540;rt+=24)Math.abs(rt-ee.z)>12&&d.push([(nn.from+nn.to)/2,rt]);let u=new pe(.09,.14,9,8);u.translate(0,4.5,0);let g=new qt(.1,.1,2.6);g.translate(0,0,1.3);let x=new qt(.42,.16,.9),m=new Kt(u,h,l.length),p=new Kt(g,h,l.length),_=new Ft({color:7829367,emissive:16766624,emissiveIntensity:0,roughness:.3}),S=new Kt(x,_,l.length),M=[];l.forEach(([rt,nt,Y,J],ht)=>{let Bt=Math.atan2(Y,J);r.setFromAxisAngle(c,Bt),i.compose(o.set(rt,Jt,nt),r,a),m.setMatrixAt(ht,i),i.compose(o.set(rt,Jt+8.85,nt),r,a),p.setMatrixAt(ht,i),i.compose(o.set(rt+Y*2.5,Jt+8.78,nt+J*2.5),r,a),S.setMatrixAt(ht,i),M.push([rt+Y*2.6,nt+J*2.6,13,1])}),m.castShadow=p.castShadow=!0;for(let rt of[m,p,S])s.add(rt);let w=new Kt(new pe(.07,.1,4.2,8),h,d.length),R=new Ft({color:16774888,emissive:16764810,emissiveIntensity:0,roughness:.2}),T=new Kt(new In(.3,12,8),R,d.length);d.forEach(([rt,nt],Y)=>{i.makeTranslation(rt,Jt+2.1,nt),w.setMatrixAt(Y,i),i.makeTranslation(rt,Jt+4.4,nt),T.setMatrixAt(Y,i),M.push([rt,nt,8,.8])});for(let[rt,nt,Y]of e)M.push([rt,Y,7,.7,nt-4.6]);s.add(w,T);let A=new en({map:ey(t),color:16757866,transparent:!0,depthWrite:!1,blending:Nn,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2,fog:!0}),b=new Ne(1,1);b.rotateX(-Math.PI/2);let E=new Kt(b,A,M.length);M.forEach(([rt,nt,Y,J,ht=0],Bt)=>{i.compose(o.set(rt,ht+.04+(J<1?Jt:0),nt),r.identity(),a.set(Y,1,Y)),E.setMatrixAt(Bt,i)}),E.renderOrder=2,E.userData.noAO=!0,E.layers.set(1),a.set(1,1,1),s.add(E);let D=new pe(.25,3.6,8.6,18,1,!0);D.translate(0,-4.3,0);let F=Io(16757866),B=new Kt(D,F,l.length);l.forEach(([rt,nt,Y,J],ht)=>{i.makeTranslation(rt+Y*2.5,Jt+8.7,nt+J*2.5),B.setMatrixAt(ht,i)}),B.userData.noAO=!0,B.layers.set(1),B.renderOrder=3,s.add(B);let Z=[],I=[];for(let rt of Zt)for(let nt of $t){let Y=[[rt+6,nt-16,0,1,0],[rt-6,nt+16,0,-1,0],[rt+16,nt+6,-1,0,1],[rt-16,nt-6,1,0,1]];for(let[J,ht,Bt,Dt,y]of Y){if(y===0&&(Dt>0&&nt===$t[$t.length-1]||Dt<0&&nt===$t[0])||y===1&&(Bt<0&&rt===Zt[0]||Bt>0&&rt===Zt[Zt.length-1]))continue;Z.push([J,ht,Bt,Dt,y]);let v=y===0?rt+14.2*Math.sign(J-rt):J,P=y===0?ht:nt+14.2*Math.sign(ht-nt);I.push([v,P,J,ht])}}let X=new pe(.16,.2,7,8);X.translate(0,3.5,0);let V=new Kt(X,h,I.length),k=new Kt(new qt(1,.16,.16),h,I.length);I.forEach(([rt,nt,Y,J],ht)=>{i.makeTranslation(rt,Jt,nt),V.setMatrixAt(ht,i);let Bt=Math.hypot(Y-rt,J-nt)+1;r.setFromAxisAngle(c,Math.atan2(-(J-nt),Y-rt)),i.compose(o.set((rt+Y)/2,6.8,(nt+J)/2),r,a.set(Bt,1,1)),k.setMatrixAt(ht,i),a.set(1,1,1)}),V.castShadow=k.castShadow=!0,s.add(V,k);let j=new Ft({color:1909284,roughness:.5,metalness:.4}),xt=new Kt(new qt(.5,1.4,.36),j,Z.length),yt=new pe(.14,.14,.06,12);yt.rotateX(Math.PI/2);let Rt=new Kt(yt,new en({color:16777215}),Z.length*3),te=[];Z.forEach(([rt,nt,Y,J,ht],Bt)=>{r.setFromAxisAngle(c,Math.atan2(Y,J)),i.compose(o.set(rt,6.1,nt),r,a),xt.setMatrixAt(Bt,i);for(let Dt=0;Dt<3;Dt++)i.compose(o.set(rt+Y*.2,6.55-Dt*.43,nt+J*.2),r,a),Rt.setMatrixAt(Bt*3+Dt,i),te.push([ht,Dt])}),s.add(xt,Rt);let Wt=[new Et(7,.35,.2),new Et(7,3.6,.3),new Et(.3,6,2.2)],re=new Et(.05,.05,.05);n&&(l.forEach(([rt,nt],Y)=>n.add([{mesh:m,index:Y},{mesh:p,index:Y},{mesh:S,index:Y}],[{mesh:E,index:Y},{mesh:B,index:Y}],{type:"lamp",x:rt,z:nt,y:Jt,r:.18,mass:.22,solid:6,kind:"topple",sparks:!0})),d.forEach(([rt,nt],Y)=>n.add([{mesh:w,index:Y},{mesh:T,index:Y}],[{mesh:E,index:l.length+Y}],{type:"lamp",x:rt,z:nt,y:Jt,r:.14,mass:.12,solid:4,kind:"topple",sparks:!0})));let at=I.map(([rt,nt])=>({x:rt,z:nt,r:.3})),ct=[["SURF FIZZ","TASTE THE SWELL","#ff6b4a","#14303d"],["HORIZON AIR","FLY THE COAST","#ffd36b","#1a2a52"],["VISTA BANK","YOUR MONEY. YOUR VIEW.","#9fe3d3","#10302c"],["NEON NIGHTS","THE PIER \xB7 FRIDAYS","#ff63c3","#1d0f2e"],["CALDERA GT","BUILT FOR THE COAST ROAD","#ff7a3d","#141a20"],["SOLSTICE","SUNSCREEN \xB7 SPF 50","#ffe2a8","#c2542e"]],At=[[-215,-432,-Math.PI/2],[100,212,Math.PI],[-136,30,-Math.PI/2],[270,362,Math.PI],[345,-200,-Math.PI/2],[345,250,-Math.PI/2]],tt=[],dt=new ze;At.forEach(([rt,nt,Y],J)=>{let[ht,Bt,Dt,y]=ct[J%ct.length],v=qe(t,1024,384,(Q,W,ot)=>{let ut=Q.createLinearGradient(0,0,W,ot);ut.addColorStop(0,y),ut.addColorStop(1,"#000000"),Q.fillStyle=ut,Q.fillRect(0,0,W,ot),Q.fillStyle=Dt,Q.beginPath(),Q.arc(W*.82,ot*.5,ot*.36,0,Math.PI*2),Q.fill(),Q.fillStyle="#fff6e6",Q.font='800 120px "Barlow Condensed", Impact, sans-serif',Q.fillText(ht,48,170),Q.fillStyle=Dt,Q.font='600 46px "Barlow", Arial, sans-serif',Q.fillText(Bt,52,250),Q.fillStyle="#ffffff40",Q.fillRect(52,290,300,6)}),P=new ze,N=new Pt(new Ne(14,5.25),new Ft({map:v,emissive:16777215,emissiveMap:v,emissiveIntensity:0,roughness:.55}));N.position.y=14;let H=new Pt(new qt(14.4,5.6,.3),h);H.position.set(0,14,-.2);let z=new Pt(new pe(.35,.45,11.5,10),h);z.position.y=5.75,P.add(N,H,z),P.position.set(rt,Jt,nt),P.rotation.y=Y,at.push({x:rt,z:nt,r:.5}),P.traverse(Q=>{Q.isMesh&&(Q.castShadow=!0)}),dt.add(P),tt.push(N.material)}),Bs(dt),s.add(dt);let bt="VISTA PAC\xCDFICA",Nt=new Ft({color:16052714,roughness:.7,side:un,alphaTest:.5}),U=new Map,Ht=new ze,It=-270;for(let rt of bt){if(rt===" "){It+=22;continue}U.has(rt)||U.set(rt,qe(t,128,160,(ht,Bt,Dt)=>{ht.clearRect(0,0,Bt,Dt),ht.fillStyle="#fff",ht.font='800 168px "Barlow Condensed", Impact, sans-serif',ht.textAlign="center",ht.textBaseline="alphabetic",ht.fillText(rt,Bt/2,Dt-8)}));let nt=Nt.clone();nt.map=U.get(rt);let Y=new Pt(new Ne(15,19),nt),J=600;Y.position.set(J,Math.min(di(J,It-6),di(J,It+6))+8.5,It),Y.rotation.y=-Math.PI/2,Y.castShadow=!0,Ht.add(Y),It+=17}return s.add(Ht),{lamps:l,circles:at,update(rt,nt){_.emissiveIntensity=nt*4,R.emissiveIntensity=nt*2.6,A.opacity=nt*.7,F.uniforms.intensity.value=nt*.09;for(let J of tt)J.emissiveIntensity=.05+nt*1.1;let Y=[cs(0,rt),cs(1,rt)];for(let J=0;J<te.length;J++){let[ht,Bt]=te[J],Dt=Bt===0&&Y[ht]===0||Bt===1&&Y[ht]===1||Bt===2&&Y[ht]===2;Rt.setColorAt(J,Dt?Wt[Bt]:re)}Rt.instanceColor.needsUpdate=!0}}}var Pe=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e],a=(t-n)/(r-n);return a=a*a*(3-2*a),i+(o-i)*a}return s[s.length-1][1]},sy={coupe:{length:4.62,wheelR:.355,wheelW:.27,track:.83,wheels:[.185,.79],body:{top:[[0,.6],[.05,.7],[.18,.8],[.33,.9],[.78,.96],[.92,.95],[1,.82]],bottom:[[0,.33],[.06,.25],[.94,.26],[1,.38]],width:[[0,.76],[.07,.93],[.3,.97],[.74,1],[.93,.96],[1,.84]],exp:3.4,taper:.1},cabin:{from:.31,to:.9,top:[[0,.88],[.3,1.27],[.52,1.29],[.72,1.14],[1,.93]],width:[[0,.8],[.35,.79],[.75,.76],[1,.66]],taper:.3,exp:2.6,roof:[.33,.64]},spoiler:!0,exhaust:[-.42,.42]},muscle:{length:4.92,wheelR:.37,wheelW:.3,track:.86,wheels:[.17,.8],body:{top:[[0,.72],[.04,.84],[.12,.89],[.4,.93],[.86,.96],[.96,.95],[1,.84]],bottom:[[0,.32],[.05,.26],[.95,.27],[1,.36]],width:[[0,.88],[.05,.96],[.5,.98],[.95,.97],[1,.9]],exp:5.2,taper:.05},cabin:{from:.43,to:.87,top:[[0,.91],[.3,1.31],[.55,1.32],[.86,1.08],[1,.96]],width:[[0,.8],[.5,.8],[1,.73]],taper:.22,exp:3.2,roof:[.3,.6]},scoop:!0,ducktail:!0,exhaust:[-.56,-.44,.44,.56]},super:{length:4.56,wheelR:.36,wheelW:.32,track:.88,wheels:[.2,.8],body:{top:[[0,.42],[.06,.55],[.2,.66],[.35,.73],[.7,.86],[.9,.88],[1,.8]],bottom:[[0,.16],[.05,.13],[.95,.15],[1,.26]],width:[[0,.8],[.08,.95],[.3,.97],[.7,1.03],[.9,1],[1,.9]],exp:3.6,taper:.14},cabin:{from:.27,to:.72,top:[[0,.62],[.35,1.13],[.55,1.14],[.8,1],[1,.86]],width:[[0,.78],[.4,.74],[1,.62]],taper:.32,exp:2.4,roof:[.38,.62]},wing:!0,intakes:!0,exhaust:[-.13,.13]},sedan:{length:4.85,wheelR:.34,wheelW:.24,track:.81,wheels:[.2,.77],body:{top:[[0,.66],[.06,.76],[.25,.86],[.32,.92],[.8,.98],[.94,.96],[1,.86]],bottom:[[0,.36],[.07,.3],[.93,.3],[1,.4]],width:[[0,.78],[.07,.92],[.5,.95],[.93,.93],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.82,top:[[0,.92],[.27,1.43],[.68,1.43],[.88,1.2],[1,.97]],width:[[0,.8],[.4,.82],[1,.76]],taper:.24,exp:2.8,roof:[.28,.72]}},suv:{length:4.75,wheelR:.39,wheelW:.27,track:.85,wheels:[.18,.79],body:{top:[[0,.82],[.06,.97],[.26,1.06],[.33,1.08],[.95,1.1],[1,1.02]],bottom:[[0,.44],[.07,.36],[.93,.37],[1,.46]],width:[[0,.82],[.07,.95],[.5,.98],[.95,.96],[1,.9]],exp:4.5,taper:.06},cabin:{from:.28,to:.98,top:[[0,1.05],[.2,1.72],[.85,1.74],[.97,1.62],[1,1.1]],width:[[0,.86],[.5,.88],[1,.84]],taper:.15,exp:4,roof:[.2,.96]},rails:!0},hatch:{length:4.05,wheelR:.32,wheelW:.22,track:.78,wheels:[.19,.8],body:{top:[[0,.66],[.07,.78],[.28,.88],[.34,.92],[.95,.98],[1,.9]],bottom:[[0,.36],[.08,.3],[.94,.31],[1,.42]],width:[[0,.76],[.08,.89],[.5,.92],[.94,.9],[1,.84]],exp:3.6,taper:.08},cabin:{from:.3,to:.97,top:[[0,.92],[.3,1.46],[.82,1.45],[.96,1.32],[1,.98]],width:[[0,.79],[.5,.8],[1,.76]],taper:.2,exp:3.2,roof:[.3,.92]}},pickup:{length:5.4,wheelR:.41,wheelW:.28,track:.88,wheels:[.17,.75],body:{top:[[0,.92],[.05,1.06],[.24,1.14],[.3,1.16],[1,1.16]],bottom:[[0,.5],[.06,.42],[.95,.44],[1,.52]],width:[[0,.86],[.06,.98],[.95,1],[1,.98]],exp:5,taper:.04},cabin:{from:.29,to:.58,top:[[0,1.12],[.3,1.86],[.92,1.88],[1,1.16]],width:[[0,.9],[1,.9]],taper:.12,exp:4.5,roof:[.28,.94]},bed:!0}};function Vh(s,t,e,n,i,r,o,a,c=null){let h=(t+e)/2,l=(e-t)/2,f=2/n;for(let d=0;d<r;d++){let u=c?c[0]+(c[1]-c[0])*(d/(r-1)):d/r*Math.PI*2,g=Math.cos(u),x=Math.sin(u),m=s*Math.sign(g)*Math.pow(Math.abs(g),f),p=h+l*Math.sign(x)*Math.pow(Math.abs(x),f);m*=1-i*Math.max(0,x),o.push(m,p,a)}}function Gh(s,t,{closed:e=!0,caps:n=!0}={}){let i=[],r=[];for(let l of s)i.push(...l);let o=s.length,a=t,c=e?a:a-1;for(let l=0;l<o-1;l++)for(let f=0;f<c;f++){let d=(f+1)%a,u=l*a+f,g=l*a+d,x=(l+1)*a+f,m=(l+1)*a+d;r.push(u,g,x,g,m,x)}if(n&&e)for(let[l,f]of[[0,!0],[o-1,!1]]){let d=i.length/3,u=0,g=0,x=0;for(let p=0;p<a;p++){let _=(l*a+p)*3;u+=i[_],g+=i[_+1],x+=i[_+2]}for(let p=0;p<a;p++){let _=(l*a+p)*3;i.push(i[_],i[_+1],i[_+2])}i.push(u/a,g/a,x/a);let m=d+a;for(let p=0;p<a;p++){let _=(p+1)%a;f?r.push(m,d+_,d+p):r.push(m,d+p,d+_)}}let h=new Re;return h.setAttribute("position",new ie(i,3)),h.setIndex(r),h.computeVertexNormals(),h.setAttribute("uv",new ie(new Float32Array(i.length/3*2),2)),h}function He(s,t,e,n,i,r,o=0,a=0,c=0){let h=new qt(s,t,e);return(o||a||c)&&h.applyMatrix4(new Ct().makeRotationFromEuler(new sn(o,a,c))),h.translate(n,i,r),h}function ry(s,t,e,n,i,r,o,a="y"){let c=new pe(s,t,e,n);return a==="x"&&c.rotateZ(Math.PI/2),a==="z"&&c.rotateX(Math.PI/2),c.translate(i,r,o),c}function id(s,t,e){let n=new L().subVectors(t,s),i=n.length(),r=new pe(e,e,i,6);return r.translate(0,i/2,0),r.applyQuaternion(new me().setFromUnitVectors(new L(0,1,0),n.normalize())),r.translate(s.x,s.y,s.z),r}var Wh=new Map,oy=["coupe","muscle","super"];function jl(s){if(Wh.has(s))return Wh.get(s);let t=sy[s],e=t.length,n=-e/2,i=V=>n+V*e,r=t.wheels.map(i),o=t.wheelR+.07,a=oy.includes(s),c=a?40:26,h=a?64:40,l=[];for(let V=0;V<=h;V++){let k=V/h,j=i(k),xt=Pe(t.body.bottom,k);for(let te of r){let Wt=j-te;Math.abs(Wt)<o&&(xt=Math.max(xt,t.wheelR+Math.sqrt(o*o-Wt*Wt)*.98))}let yt=Pe(t.body.top,k),Rt=[];Vh(Pe(t.body.width,k),Math.min(xt,yt-.08),yt,t.body.exp,t.body.taper,c,Rt,j),l.push(Rt)}let f=[Gh(l,c)],d=t.cabin,u=[],g=[],x=V=>Pe(d.top,V),m=a?36:20;for(let V=0;V<=m;V++){let k=V/m,j=d.from+k*(d.to-d.from),xt=i(j),yt=Pe(t.body.top,j)-.06,Rt=Math.max(x(k),yt+.02),te=Pe(d.width,k),Wt=[];if(Vh(te,yt,Rt,d.exp,d.taper,c,Wt,xt),u.push(Wt),k>=d.roof[0]&&k<=d.roof[1]){let re=[];Vh(te*1.01,yt,Rt+.012,d.exp,d.taper,14,re,xt,[.2*Math.PI,.8*Math.PI]),g.push(re)}}let p=[Gh(u,c)];g.length>1&&f.push(Gh(g,14,{closed:!1,caps:!1}));let _=[],S=[],M=[],w=[],R=[],T=(V,k,j)=>{let xt=d.from+V*(d.to-d.from),yt=Pe(t.body.top,xt)-.02,Rt=x(V),te=Pe(d.width,V)*(1-d.taper*(j?.92:0))*.97;return new L(k*te,j?Rt-.02:yt,i(xt))};for(let V of[-1,1]){f.push(id(T(.02,V,!1),T(d.roof[0]+.01,V,!0),.045));let k=(d.roof[0]+d.roof[1])/2;_.push(id(T(k,V,!1),T(k,V,!0),.05));let j=T(.1,V,!1);f.push(He(.16,.1,.12,j.x+V*.14,j.y+.06,j.z)),_.push(He(.1,.025,.04,j.x+V*.05,j.y+.03,j.z))}let A=V=>Pe(t.body.width,V),b=(Pe(t.body.bottom,.02)+Pe(t.body.top,.02))/2,E=Pe(t.body.top,.02);for(let V of[-1,1]){let k=V*A(.02)*.62,j=b+(E-b)*.45;R.push(He(.44,.1,.06,k,j,n+.045,0,V*.32,0)),M.push(He(.38,.055,.05,k,j+.005,n+.03,0,V*.32,0)),M.push(He(.34,.016,.03,k,j+.06,n+.04,0,V*.32,0))}R.push(He(A(.03)*1.05,.18,.12,0,Pe(t.body.bottom,.02)+.17,n+.06)),_.push(He(A(.03)*1.7,.04,.22,0,Pe(t.body.bottom,.02)+.02,n+.1));let D=Pe(t.body.top,.97);w.push(He(A(.98)*1.72,.05,.06,0,D-.08,-n-.02));for(let V of[-1,1])w.push(He(.36,.11,.06,V*A(.98)*.68,D-.12,-n-.03));R.push(He(A(.98)*1.5,.16,.1,0,Pe(t.body.bottom,.98)+.06,-n-.05));let F=Pe(t.body.bottom,.98)+.03,B=(t.exhaust||[-.42,.42]).map(V=>new L(V,F,-n+.06));for(let V of B)S.push(ry(.05,.05,.14,12,V.x,V.y,-n+.02,"z"));for(let V of[-1,1]){let k=r[1]-r[0]-o*2;_.push(He(.06,.08,k,V*A(.5)*.99,Pe(t.body.bottom,.5)+.03,(r[0]+r[1])/2))}if(t.spoiler&&f.push(He(A(.96)*1.5,.022,.12,0,Pe(t.body.top,.96)+.012,i(.965),-.2)),t.ducktail&&f.push(He(A(.95)*1.78,.05,.2,0,Pe(t.body.top,.95)+.03,i(.955),.28)),t.scoop){let V=Pe(t.body.top,.22);f.push(He(.56,.09,.7,0,V+.035,i(.23),.04)),R.push(He(.46,.05,.03,0,V+.05,i(.23)-.35))}if(t.wing){let V=Pe(t.body.top,.93),k=i(.95);for(let j of[-1,1])_.push(He(.04,.3,.16,j*.42,V+.14,k,.25));_.push(He(A(.95)*1.86,.035,.34,0,V+.3,k+.02,-.12));for(let j of[-1,1])_.push(He(.03,.14,.38,j*A(.95)*.93,V+.29,k+.02))}if(t.intakes){for(let V of[-1,1]){let j=(Pe(t.body.bottom,.66)+Pe(t.body.top,.66))/2;R.push(He(.05,.2,.52,V*A(.66)*.985,j,i(.66),0,V*.14,0))}R.push(He(A(.03)*1.8,.03,.3,0,Pe(t.body.bottom,.02)+.01,n+.12))}if(t.rails)for(let V of[-1,1])_.push(He(.05,.05,e*.5,V*.62,Pe(d.top,.6)+.04,i(.62)));if(t.bed){let V=i(d.to+.01),k=-n-.05,j=Pe(t.body.top,.8);R.push(He(A(.8)*1.86,.04,k-V,0,j-.02,(V+k)/2));for(let xt of[-1,1])f.push(He(.08,.4,k-V,xt*A(.8)*.96,j+.2,(V+k)/2));f.push(He(A(.8)*1.9,.4,.08,0,j+.2,k))}let Z=[He(.52,.12,.01,0,Pe(t.body.bottom,.99)+.24,-n+.005),He(.52,.12,.01,0,Pe(t.body.bottom,.01)+.28,n-.005)],I=V=>Oe(V.map(k=>k.index?k.toNonIndexed():k).map(k=>(k.attributes.uv||k.setAttribute("uv",new ie(new Float32Array(k.attributes.position.count*2),2)),k))),X={type:t,parts:{paint:I(f),glass:I(p),trim:I(_),dark:I(R),chrome:I(S),head:I(M),tail:I(w),plate:I(Z)},wheels:[],wheel:ay(t.wheelR,t.wheelW,!a),exhausts:B};for(let V of r)for(let k of[-1,1])X.wheels.push({x:k*t.track,y:t.wheelR,z:V,side:k,front:V<0});return Wh.set(s,X),X}function ay(s,t,e=!1){let n=s*.69,i=e?[[n,-t/2+.01],[s*.95,-t/2+.01],[s,-t/2+.06],[s,t/2-.06],[s*.95,t/2-.01],[n,t/2-.01]]:[[n,-t/2+.01],[s*.86,-t/2-.004],[s*.97,-t/2+.025],[s,-t/2+.06],[s,t/2-.06],[s*.97,t/2-.025],[s*.86,t/2+.004],[n,t/2-.01]],r=new io(i.map(([g,x])=>new kt(g,x)),e?14:30);r.rotateZ(Math.PI/2);let o=[],a=new pe(n,n,t-.03,e?10:24,1,!0);if(a.rotateZ(Math.PI/2),o.push(a),!e){let g=new ts(n-.008,.014,6,32);g.rotateY(Math.PI/2),g.translate(t/2-.03,0,0),o.push(g)}let c=t/2-.05,h=e?5:10;for(let g=0;g<h;g++){let x=g/h*Math.PI*2+(e?0:g%2*.12),m=new qt(.035,n-.05,.045);m.translate(0,(n-.05)/2+.05,0),m.rotateX(x),m.translate(c,0,0),o.push(m)}let l=new pe(.07,.08,.05,e?6:12);l.rotateZ(Math.PI/2),l.translate(c+.01,0,0),o.push(l);let f=Oe(o.map(g=>g.index?g.toNonIndexed():g)),d=new pe(n*.82,n*.82,.03,e?10:24);d.rotateZ(Math.PI/2),d.translate(c-.06,0,0);let u=new qt(.07,.16,.12);return u.translate(c-.03,n*.55,.07),{tire:r,rim:f,disc:d,caliper:u}}function ly(s,t="PCFC 7X"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.fillStyle="#e9e6da",n.fillRect(0,0,256,64),n.fillStyle="#1e3b78",n.font="700 14px Arial",n.textAlign="center",n.fillText("VISTA PAC\xCDFICA",128,16),n.fillStyle="#7a1f1f",n.font='700 34px "Barlow Condensed", Impact, monospace',n.fillText(t,128,52);let i=new bs(e);return i.colorSpace=bn,i}function Do(s,t={}){return new fr({color:s,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.1,...t})}function tc(s){let t=ly(s);return{glass:new fr({color:791061,metalness:.1,roughness:.04,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4}),trim:new Ft({color:1316890,roughness:.45,metalness:.4}),dark:new Ft({color:461066,roughness:.6,metalness:.2}),chrome:new Ft({color:14212319,roughness:.12,metalness:1}),plate:new Ft({map:t,roughness:.5}),tire:new Ft({color:1316118,roughness:.92,metalness:0}),rim:new Ft({color:12172994,roughness:.22,metalness:1}),disc:new Ft({color:6053472,roughness:.4,metalness:.9}),caliper:new Ft({color:12728866,roughness:.4,metalness:.3})}}var ec=Se.damp,_n=Se.clamp,ks={coupe:{name:"CALDERA GT",model:"coupe",blurb:"Grand tourer \xB7 balanced and forgiving",stats:{speed:.58,accel:.6,grip:.72},power:12.5,curve:[.55,1.15,.95],gears:[3.25,2.15,1.6,1.25,1.02,.86],final:3.55,idle:900,redline:7400,drag:.0029,brake:28,maxSpeed:64,grip:11,slideHold:.55,lat:15,latDrift:24,steer:.62,yawDamp:7.5,powerSlide:0,roll:.0065,rollMax:.09,pitch:.0028,nitro:9,engine:"v8"},muscle:{name:"VANTA SS",model:"muscle",blurb:"Muscle car \xB7 huge torque, loose tail",stats:{speed:.66,accel:.76,grip:.45},power:14.2,curve:[.86,.6,.72],gears:[2.9,1.9,1.4,1.1,.88],final:3.6,idle:750,redline:6400,drag:.0026,brake:24,maxSpeed:62,grip:8.4,slideHold:.45,lat:12.8,latDrift:27,steer:.56,yawDamp:6,powerSlide:.55,roll:.0095,rollMax:.12,pitch:.0042,nitro:10.5,engine:"bigblock"},super:{name:"VENTUS R",model:"super",blurb:"Mid-engine supercar \xB7 track grip, 220 km/h",stats:{speed:.95,accel:.94,grip:.95},power:16,curve:[.45,1.25,.88],gears:[3.4,2.3,1.75,1.4,1.15,.97],final:3.3,idle:1100,redline:8800,drag:.0016,brake:33,maxSpeed:80,grip:13.5,slideHold:.65,lat:19,latDrift:22,steer:.6,yawDamp:9,powerSlide:0,roll:.0035,rollMax:.05,pitch:.0018,nitro:9,engine:"v10"}},Lo=["coupe","muscle","super"];function cy(s,t){let e=t/s.redline,[n,i,r]=s.curve;return _n(n+i*e-r*e*e*e,.35,1)}function hy(s,t,e){let n=Math.sin(s*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function uy(s){let t=s.attributes.position.array,e=s.attributes.normal.array,n=[[[],[]],[[],[]]];for(let i=0;i<t.length;i+=9){let r=t[i]+t[i+3]+t[i+6]<0?0:1;for(let o=0;o<9;o++)n[r][0].push(t[i+o]),n[r][1].push(e[i+o])}return n.map(([i,r])=>{let o=new Re;return o.setAttribute("position",new ie(i,3)),o.setAttribute("normal",new ie(r,3)),o})}var nc=class{constructor(t,e,n="coupe"){this.mats=tc(e),this.paint=Do("#df6339"),this.group=new ze,this.body=new ze,this.group.add(this.body),this.lightMats={head:[],tail:[]};for(let r=0;r<2;r++)this.lightMats.head.push(new Ft({color:16777215,emissive:16774364,emissiveIntensity:2,roughness:.2})),this.lightMats.tail.push(new Ft({color:4196358,emissive:16720914,emissiveIntensity:1.5,roughness:.3}));this.spots=[];for(let r of[-1,1]){let o=new co(16773592,0,70,.42,.55,1.4);this.group.add(o,o.target),this.spots.push(o)}let i=new pe(.12,3.2,16,16,1,!0);i.translate(0,-8,0),i.rotateX(-Math.PI/2+.06),this.beamMat=Io(16773328),this.beams=[];for(let r=0;r<2;r++){let o=new Kt(i,this.beamMat,1);o.userData.noAO=!0,o.layers.set(1),o.frustumCulled=!1,this.group.add(o),this.beams.push(o)}t.add(this.group),this.setModel(n),this.reset(0,0,0)}setModel(t){ks[t]||(t="coupe"),this.key=t,this.def=ks[t];for(let c of[...this.body.children])this.body.remove(c),c.geometry.dispose();for(let c of this.wheels||[])this.group.remove(c.pivot);let e=jl(this.def.model);this.dims=e.type,this.exhausts=e.exhausts.map(c=>c.clone());let n=this.mats,i={paint:this.paint,glass:n.glass,trim:n.trim,dark:n.dark,chrome:n.chrome,plate:n.plate};this.deformables=[];let r=c=>{let h={geo:c,basePos:Float32Array.from(c.attributes.position.array),baseNormal:Float32Array.from(c.attributes.normal.array),weight:new Float32Array(c.attributes.position.count)};return this.deformables.push(h),h};for(let[c,h]of Object.entries(e.parts)){if(c==="head"||c==="tail"){uy(h).forEach((d,u)=>{let g=new Pt(d,this.lightMats[c][u]);g.userData.own=!0,this.body.add(g),r(d)});continue}let l=new Pt(h.clone(),i[c]);l.userData.own=!0,l.castShadow=!0,l.receiveShadow=!0,this.body.add(l);let f=r(l.geometry);c==="paint"&&(this.shell=f.geo,this.basePos=f.basePos)}this.wheels=e.wheels.map(c=>{let h=new ze;h.position.set(c.x,c.y,c.z);let l=new ze;c.side<0&&(l.rotation.y=Math.PI),h.add(l);let f=new ze;l.add(f);for(let[d,u]of[["tire",n.tire],["rim",n.rim],["disc",n.disc]]){let g=new Pt(e.wheel[d],u);g.castShadow=!0,f.add(g)}return l.add(new Pt(e.wheel.caliper,n.caliper)),this.group.add(h),{...c,pivot:h,spin:f,mount:l,compress:0}});let o=-this.dims.length/2,a=this.key==="super"?.55:.72;this.spots.forEach((c,h)=>{let l=h?1:-1;c.position.set(l*.62,a,o+.15),c.target.position.set(l*1.6,-.6,o-20)}),this.beams.forEach((c,h)=>{c.setMatrixAt(0,new Ct().makeTranslation((h?1:-1)*.62,a,o)),c.instanceMatrix.needsUpdate=!0}),this.repair()}setColor(t){this.paint.color.set(t)}reset(t,e,n){this.repair(),this.x=t,this.z=e,this.y=this.groundAt(t,e,0),this.heading=n,this.vx=0,this.vz=0,this.yawRate=0,this.steer=0,this.gear=1,this.rpm=this.def.idle,this.shiftTimer=0,this.nitro=100,this.boosting=!1,this.throttle=0,this.brake=0,this.handbrake=!1,this.slip=0,this.wheelspin=0,this.impact=0,this.contact=null,this.scrape=null,this.pendingHit=null,this.dentCooldown=0,this.pitch=0,this.roll=0,this.pitchVel=0,this.rollVel=0,this.heave=0,this.heaveVel=0,this.wheelAngle=0,this.surface="road",this.prevLong=0,this.distance=0,this.sync()}get speed(){return this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading)}get kmh(){return Math.abs(this.speed)*3.6}groundAt(t,e,n){let i=Hi(t,e),r=Wf(t);if(i!==null&&(n>i-1.2||t>ee.x0))return i;let o=Ro(t,e);return o==="curb"||o==="grass"?r+Jt:r}update(t,e,n){let i=this.def,r=-Math.sin(this.heading),o=-Math.cos(this.heading),a=Math.cos(this.heading),c=-Math.sin(this.heading),h=this.vx*r+this.vz*o,l=this.vx*a+this.vz*c,f=Math.abs(h);this.surface=Ro(this.x,this.z);let d=Hi(this.x,this.z)!==null&&this.y>1,u=this.surface==="sand"&&!d?1:this.surface==="grass"?.5:0;this.throttle=e.throttle,this.brake=e.brake,this.handbrake=e.handbrake;let g=e.steer,x=Math.abs(g)>Math.abs(this.steer)?5.5:8;this.steer=ec(this.steer,g,x,t),this.boosting=e.nitro&&e.throttle>0&&this.nitro>1&&h>3,this.nitro=_n(this.nitro+(this.boosting?-22:9)*t,0,100);let m=i.gears,p=f/(2*Math.PI*this.dims.wheelR)*60;h<-.5||this.brake>0&&f<1.2&&this.throttle===0?this.gear=-1:this.gear===-1&&(this.gear=1);let S=this.gear===-1?m[0]:m[this.gear-1],M=p*S*i.final;this.shiftTimer>0?this.shiftTimer-=t:this.gear>0&&(M>i.redline-300&&this.gear<m.length?(this.gear++,this.shiftTimer=.22,this.onShift?.(1)):this.gear>1&&M<i.redline*.36&&!(this.throttle&&M>i.redline*.27)&&(this.gear--,this.shiftTimer=.12,this.onShift?.(-1)));let w=this.throttle>0&&f<6&&this.gear===1,R=_n(Math.max(M,i.idle+(w?i.redline*.51:0)*this.throttle),i.idle,i.redline);this.rpm=ec(this.rpm,this.shiftTimer>0?R*.82:R,12,t);let T=0;this.throttle>0&&this.gear>0&&this.shiftTimer<=0&&(T+=i.power*cy(i,this.rpm)*(S/m[0])*this.throttle*(1-u*.35),this.boosting&&(T+=i.nitro)),this.brake>0&&(h>.6?T-=i.brake*this.brake:T-=7*this.brake),this.throttle>0&&h<-.6&&(T+=26),T-=h*Math.abs(h)*(i.drag+u*.006),T-=Math.sign(h)*Math.min(Math.abs(h)/t,.25+u*2.6),!this.throttle&&!this.brake&&(T-=Math.sign(h)*Math.min(Math.abs(h)/t,.9)),this.handbrake&&(T-=Math.sign(h)*Math.min(Math.abs(h)/t,5)),h+=T*t,h=_n(h,-14,i.maxSpeed+(this.boosting?10:0));let A=i.grip-u*6;this.handbrake&&(A=1.2);let b=Math.abs(l)/(f+4);b>.18&&!this.handbrake&&(A*=i.slideHold),i.powerSlide&&this.gear>0&&this.gear<=2&&(A*=1-i.powerSlide*this.throttle*Math.abs(this.steer)*_n(f/14,0,1)),l*=Math.exp(-A*t),this.slip=Math.abs(l);let E=(this.dims.wheels[1]-this.dims.wheels[0])*this.dims.length,D=i.steer/(1+f*.04);this.wheelAngle=this.steer*D;let F=h*Math.tan(this.wheelAngle)/E,Z=(this.handbrake?i.latDrift:i.lat)*(1-u*.4)/Math.max(f,4);F=_n(F,-Z,Z),this.handbrake&&f>6&&(F*=1.5),b>.18&&(F+=this.steer*.6*Math.min(f/20,1)),this.yawRate=ec(this.yawRate,F,i.yawDamp,t),this.heading+=this.yawRate*t,this.vx=r*h+a*l,this.vz=o*h+c*l;let I=this.x,X=this.z;this.x+=this.vx*t,this.z+=this.vz*t,this.wheelspin=w&&this.throttle>0?_n(1-f/8,0,1):0,i.powerSlide&&this.gear===1&&this.throttle>.8&&(this.wheelspin=Math.max(this.wheelspin,_n(1-f/16,0,1))),this.impact=0,this.collide(n,I,X),this.distance+=Math.hypot(this.x-I,this.z-X),this.dentCooldown-=t;let V=this.groundAt(this.x,this.z,this.y);V-this.y>.08&&V-this.y<.3&&(this.heaveVel-=(V-this.y)*9),this.y-V>.08&&this.y-V<.3&&(this.heaveVel+=(this.y-V)*5),this.y=ec(this.y,V,V>this.y?22:9,t);let k=(h-this.prevLong)/t;this.prevLong=h;let j=h*this.yawRate,xt=this.slopeAt();this.spring("pitch",_n(k*i.pitch,-i.rollMax*.75,i.rollMax*.55)+xt,70,9,t),this.spring("roll",_n(j*i.roll,-i.rollMax,i.rollMax),60,7,t),this.spring("heave",0,90,10,t),this.sync();for(let yt of this.wheels)yt.spin.rotation.x-=h*t/this.dims.wheelR*(yt.side<0?-1:1)*(yt.front?1:1+this.wheelspin*2.5),yt.front&&(yt.pivot.rotation.y=this.wheelAngle)}slopeAt(){return Hi(this.x,this.z)!==null&&this.x>ee.x0&&this.y>.2?Math.atan2(ee.deckY-Jt,ee.rampStart-ee.x0)*Math.sin(this.heading):0}spring(t,e,n,i,r){let o=t+"Vel",a=(e-this[t])*n-this[o]*i;this[o]+=a*r,this[t]+=this[o]*r}sync(){this.group.position.set(this.x,this.y+this.heave*.4,this.z),this.group.rotation.set(0,this.heading,0),this.body.rotation.set(this.pitch,0,-this.roll),this.body.position.y=this.heave*.3;for(let t of this.wheels){let e=-this.roll*t.side*this.dims.track*.35+this.pitch*t.z*.35;t.pivot.position.y=t.y+_n(e,-.06,.06)*.5}}collide(t,e,n){let r=-Math.sin(this.heading),o=-Math.cos(this.heading);for(let h=0;h<2;h++)for(let l of[-1.35,1.35]){let f=this.x+r*l,d=this.z+o*l;for(let g of t.boxes||t.colliders){if(Math.abs(f-g.x)>g.w+1.05||Math.abs(d-g.z)>g.d+1.05)continue;let x=_n(f,g.x-g.w,g.x+g.w),m=_n(d,g.z-g.d,g.z+g.d),p=f-x,_=d-m,S=Math.hypot(p,_);if(S<1e-4){let M=g.w-Math.abs(f-g.x),w=g.d-Math.abs(d-g.z);M<w?(p=Math.sign(f-g.x),_=0,S=-M):(p=0,_=Math.sign(d-g.z),S=-w)}else p/=S,_/=S;S<1.05&&this.resolve(p,_,1.05-S,.25,f-p*1.05,d-_*1.05)}let u=this.y<(Hi(f,d)??-9)-1;for(let g of u?[t.circles,t.piles]:[t.circles])for(let x of g){let m=f-x.x,p=d-x.z;if(Math.abs(m)>3||Math.abs(p)>3)continue;let _=Math.hypot(m,p),S=1.05+x.r;_<S&&_>1e-4&&this.resolve(m/_,p/_,S-_,.2,x.x+m/_*x.r,x.z+p/_*x.r)}}if(this.y>1.2&&Hi(e,n)!==null){let h=ee.halfWidth-1.1;Math.abs(this.z-ee.z)>h&&this.resolve(0,-Math.sign(this.z-ee.z),Math.abs(this.z-ee.z)-h,.15),this.x<ee.x1+3&&this.resolve(1,0,ee.x1+3-this.x,.15)}let a=Hi(this.x,this.z);if(a!==null&&this.x>ee.x0&&this.y<a-.9&&this.x<-345){let h=Math.sign(this.z-ee.z)||1;this.resolve(0,h,ee.halfWidth+.2-Math.abs(this.z-ee.z),.2)}let c=this.y>1.2&&Math.abs(this.z-ee.z)<ee.halfWidth?ee.x1+3:Qe.minX;this.x<c&&this.resolve(1,0,c-this.x,.2),this.x>Qe.maxX&&this.resolve(-1,0,this.x-Qe.maxX,.3),this.z<Qe.minZ&&this.resolve(0,1,Qe.minZ-this.z,.3),this.z>Qe.maxZ&&this.resolve(0,-1,this.z-Qe.maxZ,.3)}resolve(t,e,n,i,r=this.x-t*2,o=this.z-e*2){this.x+=t*n,this.z+=e*n;let a=this.vx*t+this.vz*e;if(a<0){let c=this.vx-a*t,h=this.vz-a*e,l=Math.hypot(c,h);l>6&&(!this.scrape||l>this.scrape.speed)&&(this.scrape={x:r,z:o,speed:l,nx:t,nz:e}),this.vx-=(1+i)*a*t,this.vz-=(1+i)*a*e,this.vx*=.9,this.vz*=.9,this.impact=Math.max(this.impact,-a),(!this.contact||-a>this.contact.speed)&&(this.contact={x:r,z:o,speed:-a,nx:t,nz:e}),this.registerHit(r,o,-a),this.yawRate*=.6}}registerHit(t,e,n){(!this.pendingHit||n>this.pendingHit.speed)&&(this.pendingHit={x:t,z:e,speed:n})}applyDamage(){let t=this.pendingHit;if(this.pendingHit=null,!t||t.speed<3.5||this.dentCooldown>0)return;this.dentCooldown=.18;let e=t.x-this.x,n=t.z-this.z,i=Math.cos(this.heading),r=Math.sin(this.heading),o=e*i-n*r,a=e*r+n*i,c=this.dims.length/2,h=this.dims.track+.1;o=_n(o,-h,h),a=_n(a,-c,c);let l=_n((t.speed-3)/16,.05,1);this.dent(o,.62,a,l)}dent(t,e,n,i){let r=.5+i*.55,o=.035+i*.13,a=this.dims.length/2,c=Math.abs(n)/a>Math.abs(t)/this.dims.track,h=c?-t*.15:-Math.sign(t),l=c?-Math.sign(n):-n*.1,f=Math.hypot(h,l)||1;h/=f,l/=f;let d=new L,u=new L,g=new L;for(let x of this.deformables){let m=x.geo.attributes.position.array,p=x.geo.attributes.normal.array,_=x.basePos,S=x.weight,M=!1;for(let w=0,R=0;w<m.length;w+=3,R++){let T=_[w]-t,A=(_[w+1]-e)*1.3,b=_[w+2]-n,E=(T*T+A*A+b*b)/(r*r);if(E>3)continue;let D=Math.exp(-E*1.8)*(.65+.7*hy(_[w],_[w+1],_[w+2]));m[w]+=h*o*D,m[w+1]-=o*.3*D,m[w+2]+=l*o*D;let F=m[w]-_[w],B=m[w+1]-_[w+1],Z=m[w+2]-_[w+2],I=Math.hypot(F,B,Z);if(I>.26){let X=.26/I;m[w]=_[w]+F*X,m[w+1]=_[w+1]+B*X,m[w+2]=_[w+2]+Z*X}S[R]=Math.min(1,S[R]+D),M=!0}if(M){for(let w=0;w<m.length;w+=9){let R=w/3;if(!(Math.max(S[R],S[R+1],S[R+2])<.02)){d.set(m[w+3]-m[w],m[w+4]-m[w+1],m[w+5]-m[w+2]),u.set(m[w+6]-m[w],m[w+7]-m[w+1],m[w+8]-m[w+2]),g.crossVectors(d,u).normalize();for(let T=0;T<3;T++){let A=w+T*3,b=Math.min(1,S[R+T]*1.6),E=x.baseNormal,D=E[A]*(1-b)+g.x*b,F=E[A+1]*(1-b)+g.y*b,B=E[A+2]*(1-b)+g.z*b,Z=Math.hypot(D,F,B)||1;p[A]=D/Z,p[A+1]=F/Z,p[A+2]=B/Z}}}x.geo.attributes.position.needsUpdate=!0,x.geo.attributes.normal.needsUpdate=!0}}if(this.damage=Math.min(1,this.damage+i*.18),i>.3){let x=t<0?0:1;n<-a+.9&&(this.broken.head[x]=!0),n>a-.9&&(this.broken.tail[x]=!0)}}repair(){for(let t of this.deformables||[])t.weight.some(e=>e>0)&&(t.geo.attributes.position.array.set(t.basePos),t.geo.attributes.normal.array.set(t.baseNormal),t.geo.attributes.position.needsUpdate=!0,t.geo.attributes.normal.needsUpdate=!0,t.weight.fill(0));this.damage=0,this.broken={head:[!1,!1],tail:[!1,!1]}}setLights(t,e){let n=Math.max(t,.15);this.lightMats.head.forEach((i,r)=>{let o=!this.broken.head[r];i.emissiveIntensity=o?1.5+n*9:0,i.color.setScalar(o?1:.12),this.spots[r].intensity=o?t*220:0,this.beams[r].visible=o&&t>.05}),this.lightMats.tail.forEach((i,r)=>{i.emissiveIntensity=this.broken.tail[r]?.05:e?6:1.1+t*1.2}),this.beamMat.uniforms.intensity.value=t*.06}safeRespawn(){let t=Zn(Zt,this.x),e=Zn($t,this.z);if(Math.abs(this.x-t)<Math.abs(this.z-e)){let n=Math.cos(this.heading)>0;this.reset(t+(n?3.4:-3.4),_n(this.z,-470,470),n?0:Math.PI)}else{let n=Math.sin(this.heading)<0;this.reset(_n(this.x,-310,310),e+(n?3.4:-3.4),n?-Math.PI/2:Math.PI/2)}}};var ic=16,Xh=new Ct,sc=new Ct,sd=new me,qh=new L,Uo=new L,rc=new me,fy=new L(1,1,1),dy=new Ct().makeScale(0,0,0),oc=class{constructor(){this.items=[],this.grid=new Map,this.loose=new Set,this.dirty=new Set}add(t,e,n){let i={...n,parts:t.map(o=>{let a=new Ct;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),hide:(e||[]).map(o=>{let a=new Ct;return o.mesh.getMatrixAt(o.index,a),{...o,base:a}}),pivot0:new L(n.x,n.y,n.z),pos:new L(n.x,n.y,n.z),vel:new L,quat:new me,spin:new L,state:0,timer:0};i.id=this.items.length,this.items.push(i);let r=this.key(n.x,n.z);return this.grid.has(r)||this.grid.set(r,[]),this.grid.get(r).push(i),i}key(t,e){return`${Math.floor(t/ic)},${Math.floor(e/ic)}`}collide(t,e,n){let i=-Math.sin(t.heading),r=-Math.cos(t.heading),o=t.x-i*1.35,a=t.z-r*1.35,c=t.x+i*1.35,h=t.z+r*1.35,l=Math.hypot(t.vx,t.vz),f=Math.floor(t.x/ic),d=Math.floor(t.z/ic);for(let u=-1;u<=1;u++)for(let g=-1;g<=1;g++){let x=this.grid.get(`${f+u},${d+g}`);if(x)for(let m of x){if(m.state!==0)continue;let p=c-o,_=h-a,S=Se.clamp(((m.x-o)*p+(m.z-a)*_)/(p*p+_*_),0,1),M=o+p*S,w=a+_*S,R=m.x-M,T=m.z-w,A=Math.hypot(R,T),b=1.05+m.r;if(A>=b||t.y>m.y+3)continue;A>1e-4?(R/=A,T/=A):(R=i,T=r);let E=t.vx*R+t.vz*T;if(E<m.solid){E>0&&(t.vx-=E*R*1.2,t.vz-=E*T*1.2),t.x-=R*(b-A),t.z-=T*(b-A);continue}this.knock(m,t,R,T,E,l),n?.({item:m,x:m.x,z:m.z,speed:E,nx:R,nz:T})}}}knock(t,e,n,i,r,o){t.state=1,t.timer=0,this.loose.add(t);let a=1-t.mass*Math.min(1,6/Math.max(o,6));if(e.vx*=a,e.vz*=a,e.registerHit?.(t.x,t.z,r*t.mass*3),t.kind==="topple")Uo.set(i,0,-n).normalize(),t.axis=Uo.clone(),t.angle=0,t.angVel=.6+r*.08;else{let c=2.5+pt()*2.5+r*.12,h=.5+pt()*.25;t.vel.set(e.vx*h+n*r*.25,c,e.vz*h+i*r*.25),t.spin.set((pt()-.5)*2,(pt()-.5)*2,(pt()-.5)*2).normalize().multiplyScalar(5+r*.35),t.pos.copy(t.pivot0)}for(let c of t.hide)c.mesh.setMatrixAt(c.index,dy),c.mesh.instanceMatrix.needsUpdate=!0}groundY(t,e){return Ro(t,e)==="road"?0:Jt}update(t,e){for(let n of this.loose){if(n.timer+=t,n.state===1){if(n.kind==="topple")n.angVel+=Math.sin(Math.max(n.angle,.05))*6*t+.4*t,n.angle+=n.angVel*t,n.angle>=Math.PI/2-.04&&(n.angle=Math.PI/2-.04,n.angVel*=-.18,Math.abs(n.angVel)<.08&&(n.state=2)),n.quat.setFromAxisAngle(n.axis,n.angle);else{n.vel.y-=9.8*t,n.pos.addScaledVector(n.vel,t);let i=n.spin.length();i>.001&&(rc.setFromAxisAngle(Uo.copy(n.spin).divideScalar(i),i*t),n.quat.premultiply(rc));let r=this.groundY(n.pos.x,n.pos.z)+n.lieH;n.pos.y<r&&(n.pos.y=r,n.vel.y<-1.2?(n.vel.y*=-.32,n.vel.x*=.5,n.vel.z*=.5,n.spin.multiplyScalar(.55)):(n.vel.y=0,n.vel.x*=Math.exp(-8*t),n.vel.z*=Math.exp(-8*t),n.spin.multiplyScalar(Math.exp(-6*t)),Math.hypot(n.vel.x,n.vel.z)<.3&&this.settle(n)))}this.dirty.add(n)}n.timer>25&&Math.hypot(e.x-n.x,e.z-n.z)>200&&this.restore(n)}for(let n of this.dirty)this.write(n);this.dirty.clear()}settle(t){t.state=2,qh.set(0,1,0).applyQuaternion(t.quat);let e=Math.atan2(qh.x,qh.z);sd.setFromAxisAngle(Uo.set(0,1,0),e),rc.setFromAxisAngle(Uo.set(1,0,0),Math.PI/2),t.quat.copy(sd).multiply(rc),t.pos.y=this.groundY(t.pos.x,t.pos.z)+t.lieH,this.dirty.add(t)}restore(t){t.state=0,t.pos.copy(t.pivot0),t.quat.identity(),t.vel.set(0,0,0),t.spin.set(0,0,0),this.loose.delete(t);for(let e of[...t.parts,...t.hide])e.mesh.setMatrixAt(e.index,e.base),e.mesh.instanceMatrix.needsUpdate=!0}write(t){Xh.compose(t.pos,t.quat,fy),sc.makeTranslation(-t.pivot0.x,-t.pivot0.y,-t.pivot0.z),Xh.multiply(sc);for(let e of t.parts)sc.multiplyMatrices(Xh,e.base),e.mesh.setMatrixAt(e.index,sc),e.mesh.instanceMatrix.needsUpdate=!0}restoreAll(){for(let t of[...this.loose])this.restore(t)}};function lc(s,t){let e=s.index?s.toNonIndexed():s,n=new Et(t),i=e.attributes.position.count,r=new Float32Array(i*3);for(let o=0;o<i;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new tn(r,3)),e}function Be(s,t,e,n,i,r,o,a=0,c=0,h=0){let l=new qt(s,t,e);return(a||c||h)&&l.applyMatrix4(new Ct().makeRotationFromEuler(new sn(a,c,h))),l.translate(n,i,r),lc(l,o)}function Ye(s,t,e,n,i,r,o,a,c="y"){let h=new pe(s,t,e,n);return c==="x"&&h.rotateZ(Math.PI/2),c==="z"&&h.rotateX(Math.PI/2),h.translate(i,r,o),lc(h,a)}function cd(s,t,e,n,i,r,o=1){let a=new In(s,t,Math.max(3,t/3),0,Math.PI*2,0,Math.PI/2);return a.scale(1,o,1),a.translate(e,n,i),lc(a,r)}var Rr="#b0362a",Yh="#d9d3c2",Hs="#202427",rd="#7d5b3b",od="#264a8a",ac="#626a70";function py(){return Oe([Ye(.2,.21,.07,10,0,.035,0,Rr),Ye(.14,.15,.52,10,0,.33,0,Rr),Ye(.17,.17,.05,10,0,.6,0,Rr),cd(.15,10,0,.62,0,Rr,.9),Ye(.035,.05,.07,6,0,.78,0,Yh),...[-1,1].flatMap(s=>[Ye(.055,.06,.14,8,s*.17,.46,0,Rr,"x"),Ye(.065,.065,.03,8,s*.245,.46,0,Yh,"x")]),Ye(.075,.08,.13,8,0,.42,.17,Rr,"z"),Ye(.085,.085,.035,8,0,.42,.245,Yh,"z")])}function my(){let s=[Ye(.3,.27,.9,14,0,.45,0,"#2c4a3b"),cd(.31,14,0,.9,0,"#1f2b27",.4),Be(.22,.12,.02,0,.78,.3,"#0d1110")];for(let t of[.18,.5,.82])s.push(Ye(.305,.3,.03,14,0,t,0,"#22392e"));return Oe(s)}function gy(){let s=[];for(let t of[-.14,0,.14])s.push(Be(2,.04,.11,0,.45,t,rd));for(let t=0;t<2;t++)s.push(Be(2,.1,.035,0,.64+t*.15,-.25-t*.03,rd,-.2));for(let t of[-.85,.85])s.push(Be(.06,.45,.06,t,.225,.16,Hs),Be(.06,.85,.06,t,.42,-.24,Hs,-.15)),s.push(Be(.06,.04,.5,t,.63,-.02,Hs),Be(.06,.04,.42,t,.42,-.04,Hs));return Oe(s)}function xy(){let s=[];for(let t of[-.22,.22])for(let e of[-.18,.18])s.push(Be(.05,.22,.05,t,.11,e,Hs));return s.push(Be(.52,.62,.46,0,.53,0,od),Ye(.23,.23,.52,14,0,.84,0,od,"x")),s.push(Be(.32,.07,.04,0,.93,.225,"#16294d"),Be(.2,.14,.012,0,.6,.235,"#d8dde6")),Oe(s)}function vy(){return Oe([Be(.36,.03,.3,0,.015,0,Hs),Be(.08,.36,.08,0,.18,0,Hs),Be(.46,.55,.4,0,.63,0,"#ffffff"),Be(.48,.04,.42,0,.92,0,"#ffffff"),Be(.34,.24,.012,0,.71,.205,"#1c2226"),Be(.12,.03,.03,0,.53,.215,"#9aa0a4")])}function yy(){return Oe([Ye(.035,.04,1.05,8,0,.525,0,ac),Be(.17,.28,.13,0,1.19,0,"#8a9095"),Ye(.085,.085,.13,10,0,1.33,0,"#3a4044","z"),Be(.1,.07,.012,0,1.24,.067,"#c9e0a8")])}function _y(){return Oe([Ye(.045,.05,3.3,8,0,1.65,0,ac),Ye(.06,.06,.06,8,0,3.32,0,ac)])}function My(s){let t=[Ye(.13,.17,10.6,8,0,5.3,0,"#5a4330"),Be(2.5,.13,.13,0,9.7,0,"#4b3828"),Be(1.4,.1,.1,0,8.9,0,"#4b3828")];for(let e of[-1.1,0,1.1])t.push(Ye(.05,.06,.2,6,e,9.86,0,"#cfd4d2"));for(let e of[-.6,.6])t.push(Ye(.04,.05,.16,6,e,9.04,0,"#cfd4d2"));return s&&t.push(Ye(.27,.27,.85,10,0,7.9,.32,"#7d8487"),Ye(.29,.29,.05,10,0,8.35,.32,"#5f6669")),Oe(t)}var ad={"-320":"OCEAN DR","-160":"SEAVIEW AV",0:"AURELIO BL",160:"GRAND AV",320:"HILLCREST AV"},ld={"-480":"MARINA ST","-320":"SUNSET BL","-160":"PIER AV",0:"PALM ST",160:"HARBOR ST",320:"ROSA ST",480:"SOUTHBANK RD"};function by(s,t){let e=t.length,n=qe(s,512,64*e,(r,o,a)=>{let c=a/e;t.forEach((h,l)=>{let f=l*c;r.fillStyle="#16603d",r.fillRect(0,f,o,c),r.strokeStyle="#e9f1ea",r.lineWidth=3,r.strokeRect(6,f+6,o-12,c-12),r.fillStyle="#f4f7f2",r.font='700 40px "Barlow Condensed", Arial Narrow, Arial, sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(h,o/2,f+c/2+2)})}),i=new Ft({map:n,roughness:.45,metalness:.2});return i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aRow;`).replace("#include <uv_vertex>",`#include <uv_vertex>
  vMapUv.y = (vMapUv.y + aRow) / ${e.toFixed(1)};`)},i.customProgramCacheKey=()=>"pa-street-blade",i}function Sy(s){return qe(s,256,384,(t,e,n)=>{let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#ff8a4c"),i.addColorStop(1,"#5a1c3c"),t.fillStyle=i,t.fillRect(0,0,e,n),t.fillStyle="#fff4dc",t.beginPath(),t.arc(e/2,n*.36,62,0,Math.PI*2),t.fill(),t.fillStyle="#1b1020",t.font='800 54px "Barlow Condensed", Impact, sans-serif',t.textAlign="center",t.fillText("SURF",e/2,n*.7),t.fillText("FIZZ",e/2,n*.84),t.fillStyle="#fff4dc",t.font="600 18px Arial, sans-serif",t.fillText("TASTE THE SWELL",e/2,n*.94)})}function hd(s,t,e,n,i=[]){let r=new Ct,o=new me,a=new L,c=new L(1,1,1),h=new L(0,1,0),l=new Ft({vertexColors:!0,roughness:.55,metalness:.15}),f=[],d=[],u=jt+5,g=n.map(([tt,dt])=>[tt,dt]);for(let tt of i)g.push([tt.x,tt.z]);let x=(tt,dt,bt=2.4)=>g.some(([Nt,U])=>Math.abs(Nt-tt)<bt&&Math.abs(U-dt)<bt),m=zs.map(tt=>Os(tt)),p=(tt,dt)=>m.some(([bt,Nt])=>Math.abs(bt-tt)<7&&Math.abs(Nt-dt)<7),_={hydrant:[],bin:[],bench:[],mailbox:[],newsbox:[],meter:[]},S=(tt,dt,bt,Nt)=>U=>tt==="ns"?[dt+bt*(jt+U),Nt]:[Nt,dt+bt*(jt+U)];for(let tt of["ns","ew"]){let dt=tt==="ns"?Zt:$t,bt=tt==="ns"?$t:Zt,[Nt,U]=tt==="ns"?[-525,525]:[-305,345];for(let Ht of dt)for(let It of[-1,1])if(!(tt==="ns"&&Ht===Zt[0]&&It<0))for(let rt=Nt;rt<=U;rt+=6.5){if(bt.some(y=>Math.abs(rt-y)<u))continue;let nt=S(tt,Ht,It,rt),[Y,J]=nt(1);if(x(Y,J)||p(Y,J))continue;let ht=tt==="ns"?It>0?-Math.PI/2:Math.PI/2:It>0?Math.PI:0,Bt=Ht>-200&&(tt==="ns"?rt<120:Ht<120),Dt=pt();if(Dt<.055)_.hydrant.push([...nt(.6),ht]);else if(Dt<.12)_.bin.push([...nt(.9),ht]);else if(Dt<.165)_.bench.push([...nt(3.4),ht]);else if(Dt<.19)_.mailbox.push([...nt(1.1),ht]);else if(Dt<.23){let y=2+Math.floor(pt()*2);for(let v=0;v<y;v++){let P=(v-(y-1)/2)*.55,[N,H]=nt(1.1);_.newsbox.push([tt==="ns"?N:N+P,tt==="ns"?H+P:H,ht])}}else Bt&&Dt<.42&&_.meter.push([...nt(.45),ht])}}let M={hydrant:{geo:py(),y:.4,r:.22,mass:.08,solid:1.5,lieH:.17,kind:"fly",sparks:!0},bin:{geo:my(),y:.5,r:.32,mass:.04,solid:1.2,lieH:.29,kind:"fly"},bench:{geo:gy(),y:.4,r:.75,mass:.07,solid:1.5,lieH:.3,kind:"fly"},mailbox:{geo:xy(),y:.5,r:.34,mass:.06,solid:1.5,lieH:.25,kind:"fly",sparks:!0},newsbox:{geo:vy(),y:.5,r:.28,mass:.04,solid:1.2,lieH:.22,kind:"fly"},meter:{geo:yy(),y:0,r:.12,mass:.04,solid:2,kind:"topple",sparks:!0}},w=["#c8342b","#2f5fa8","#e2b33a","#2e7d4f","#e8e4da","#d9662f"].map(tt=>new Et(tt)),R={};for(let[tt,dt]of Object.entries(_)){let bt=M[tt],Nt=new Kt(bt.geo,l,Math.max(1,dt.length));Nt.count=dt.length,dt.forEach(([U,Ht,It],rt)=>{o.setFromAxisAngle(h,It+(tt==="bin"||tt==="hydrant"?pt()*6.28:0)),r.compose(a.set(U,Jt,Ht),o,c),Nt.setMatrixAt(rt,r),tt==="newsbox"&&Nt.setColorAt(rt,ce(w))}),Nt.castShadow=!0,Nt.receiveShadow=!0,Nt.layers.set(1),Nt.name=tt,s.add(Nt),R[tt]=Nt,dt.forEach(([U,Ht],It)=>{e.add([{mesh:Nt,index:It}],null,{type:tt,x:U,z:Ht,y:Jt+bt.y,r:bt.r,mass:bt.mass,solid:bt.solid,lieH:bt.lieH??.2,kind:bt.kind,sparks:!!bt.sparks})})}let T=[...Object.values(ad),...Object.values(ld)],A=[];for(let tt of Zt)for(let dt of $t)A.push([tt+jt+1.3,dt-jt-1.3,tt,dt]);let b=new Kt(_y(),l,A.length),E=new qt(1.7,.27,.03),D=new Kt(E,by(t,T),A.length*2),F=new Float32Array(A.length*2);A.forEach(([tt,dt,bt,Nt],U)=>{r.makeTranslation(tt,Jt,dt),b.setMatrixAt(U,r),o.setFromAxisAngle(h,Math.PI/2),r.compose(a.set(tt,Jt+3,dt),o,c),D.setMatrixAt(U*2,r),o.identity(),r.compose(a.set(tt,Jt+3.3,dt),o,c),D.setMatrixAt(U*2+1,r),F[U*2]=T.length-1-T.indexOf(ad[String(bt)]),F[U*2+1]=T.length-1-T.indexOf(ld[String(Nt)])}),E.setAttribute("aRow",new Xe(F,1));for(let tt of[b,D])tt.castShadow=!0,tt.layers.set(1),s.add(tt);A.forEach(([tt,dt],bt)=>{e.add([{mesh:b,index:bt},{mesh:D,index:bt*2},{mesh:D,index:bt*2+1}],null,{type:"sign",x:tt,z:dt,y:Jt,r:.12,mass:.05,solid:2.5,kind:"topple",sparks:!0})});let B=[],Z=[],I=[];for(let tt of zs){let[dt,bt]=Os(tt),Nt=tt.axis==="ns"?tt.side>0?-Math.PI/2:Math.PI/2:tt.side>0?Math.PI:0,U=new Ct().compose(a.set(dt,Jt,bt),o.setFromAxisAngle(h,Nt),c),Ht=(Y,J)=>Y.push(J.applyMatrix4(U));Ht(B,Be(4.3,.08,1.8,0,2.55,0,"#3b4448",.04)),Ht(B,Be(4.3,.18,.06,0,2.48,.88,"#2b3236"));for(let Y of[-2.05,2.05])for(let J of[-.78,.7])Ht(B,Ye(.05,.05,2.5,8,Y,1.25,J,"#2b3236"));Ht(B,Be(2.4,.05,.42,-.2,.47,-.45,"#9aa3a8"));for(let Y of[-1.2,.8])Ht(B,Be(.05,.45,.35,Y,.225,-.45,"#2b3236"));Ht(B,Ye(.04,.04,2.8,8,2.7,1.4,.9,ac)),Ht(B,Ye(.27,.27,.03,18,2.7,2.65,.9,"#1d4f9a","z")),Ht(B,Ye(.2,.2,.035,18,2.7,2.65,.9,"#f2f4f6","z")),Ht(Z,Be(4,1.85,.02,0,1.3,-.8,"#ffffff")),Ht(Z,Be(.02,1.85,1.35,-2.05,1.3,-.1,"#ffffff"));let It=new qt(.14,1.8,1.3);It.translate(2.05,1.3,-.08),I.push(lc(It,"#ffffff").applyMatrix4(U));let rt=2.25,nt=.95;f.push(tt.axis==="ns"?{x:dt,z:bt,w:nt,d:rt}:{x:dt,z:bt,w:rt,d:nt})}let X=new Pt(Oe(B),l);X.castShadow=X.receiveShadow=!0;let V=new Ft({color:10470612,roughness:.05,metalness:.1,transparent:!0,opacity:.22,depthWrite:!1}),k=new Pt(Oe(Z),V);k.renderOrder=2;let j=Sy(t),xt=new Ft({map:j,emissive:16777215,emissiveMap:j,emissiveIntensity:.1,roughness:.3}),yt=new Pt(Oe(I),xt);yt.castShadow=!0,s.add(X,k,yt);let Rt=[];for(let tt=-510;tt<=525;tt+=38)$t.some(dt=>Math.abs(tt-dt)<u)||Rt.push([320+jt+1.7,tt,"ns"]);for(let[tt,dt]of[[480,1],[-480,-1]])for(let bt=-290;bt<=330;bt+=38)Zt.some(Nt=>Math.abs(bt-Nt)<u)||Rt.push([bt,tt+dt*(jt+1.7),"ew"]);let te=Rt.filter((tt,dt)=>dt%4!==2),Wt=Rt.filter((tt,dt)=>dt%4===2);for(let[tt,dt]of[[te,!1],[Wt,!0]]){let bt=new Kt(My(dt),l,tt.length);tt.forEach(([Nt,U,Ht],It)=>{o.setFromAxisAngle(h,Ht==="ns"?0:Math.PI/2),r.compose(a.set(Nt,Jt,U),o,c),bt.setMatrixAt(It,r),d.push({x:Nt,z:U,r:.22})}),bt.castShadow=!0,s.add(bt)}let re=[],at=[Rt.filter(tt=>tt[2]==="ns"),Rt.filter(tt=>tt[2]==="ew"&&tt[1]>0),Rt.filter(tt=>tt[2]==="ew"&&tt[1]<0)];for(let tt of at)for(let dt=0;dt<tt.length-1;dt++){let[bt,Nt,U]=tt[dt],[Ht,It]=tt[dt+1];if(!(Math.hypot(Ht-bt,It-Nt)>80))for(let[rt,nt]of[[-1.1,9.92],[0,9.92],[1.1,9.92],[-.6,9.08],[.6,9.08]]){let Y=U==="ns"?rt:0,J=U==="ns"?0:rt,ht=.55+Math.abs(rt)*.1,Bt=bt+Y,Dt=Jt+nt,y=Nt+J;for(let v=1;v<=12;v++){let P=v/12,N=bt+(Ht-bt)*P+Y,H=Nt+(It-Nt)*P+J,z=Jt+nt-ht*4*P*(1-P);re.push(Bt,Dt,y,N,z,H),Bt=N,Dt=z,y=H}}}let ct=new Re;ct.setAttribute("position",new ie(re,3));let At=new to(ct,new ur({color:723981,transparent:!0,opacity:.85}));return s.add(At),{solids:f,circles:d,meshes:R,update(tt){xt.emissiveIntensity=.12+tt*1.4}}}function ud(s,t,e,n,i){for(let r of s){if(Math.max(t,n)<r.x-r.w||Math.min(t,n)>r.x+r.w||Math.max(e,i)<r.z-r.d||Math.min(e,i)>r.z+r.d)continue;let o=0,a=1,c=n-t,h=i-e,l=!0;for(let[f,d,u,g]of[[t,c,r.x-r.w,r.x+r.w],[e,h,r.z-r.d,r.z+r.d]]){if(Math.abs(d)<1e-6){if(f<u||f>g){l=!1;break}continue}let x=(u-f)/d,m=(g-f)/d;if(x>m&&([x,m]=[m,x]),o=Math.max(o,x),a=Math.min(a,m),o>a){l=!1;break}}if(l)return!0}return!1}var cc=class{constructor(t,e){this.traffic=t,this.colliders=e,this.reset()}reset(){this.level=0,this.evade=0,this.speeding=0,this.bustTimer=0,this.lastCrime=-99,this.seen=!1,this.events=this.events||[];for(let t of this.traffic.police)this.traffic.endChase(t)}get evading(){return this.level>0&&!this.seen}get evadeTime(){return 7+this.level*3}sightRange(){return 70+this.level*25}witness(t,e,n){let i=null,r=n;for(let o of this.traffic.police){let a=Math.hypot(o.x-t,o.z-e);a>r||ud(this.colliders,o.x,o.z,t,e)||(i=o,r=a)}return i}crime(t,e,n,i,r,o=!0){if(r-this.lastCrime<2.5&&t!=="police")return!1;let a=o?this.witness(e,n,75+this.level*15):null;if(o&&!a&&this.level===0||o&&!a&&!this.seen)return!1;this.lastCrime=r;let c=this.level;return this.level=Math.min(5,Math.max(this.level+i,t==="police"?2:1)),this.evade=0,this.level>c&&this.events.push({type:"up",level:this.level,kind:t}),a&&this.traffic.startChase(a),!0}update(t,e,n,i,r){if(this.events.length=0,!r){this.level&&this.reset();return}if(e.kmh>125&&this.witness(e.x,e.z,55)?(this.speeding+=t,this.speeding>1.2&&(this.crime("speeding",e.x,e.z,1,n),this.speeding=0)):this.speeding=Math.max(0,this.speeding-t),!this.level){this.seen=!1;return}let a=Math.min(this.traffic.police.length,[0,1,2,3,4,5][this.level]),c=this.traffic.police.filter(f=>f.mode==="chase");if(c.length<a){let f=this.traffic.police.filter(d=>d.mode!=="chase").sort((d,u)=>Math.hypot(d.x-e.x,d.z-e.z)-Math.hypot(u.x-e.x,u.z-e.z))[0];f&&(Math.hypot(f.x-e.x,f.z-e.z)>260?this.traffic.dispatch(f,e,i):this.traffic.startChase(f))}let h=this.sightRange();if(this.seen=c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<h&&!ud(this.colliders,f.x,f.z,e.x,e.z)),this.seen)this.evade=0;else if(this.evade+=t,this.evade>this.evadeTime){this.events.push({type:"evaded"}),this.reset();return}c.some(f=>Math.hypot(f.x-e.x,f.z-e.z)<8)&&e.kmh<6?(this.bustTimer+=t,this.bustTimer>2.5&&(this.events.push({type:"busted"}),this.reset())):this.bustTimer=Math.max(0,this.bustTimer-t*2)}sirenLevel(t){let e=1/0;for(let n of this.traffic.police)n.mode==="chase"&&(e=Math.min(e,Math.hypot(n.x-t.x,n.z-t.z)));return Math.max(0,1-e/260)}};var Ey=[["sedan",16],["suv",11],["hatch",11],["pickup",7],["taxi",9],["police",5]],Zh={sedan:26,suv:20,hatch:22,pickup:12,taxi:0,police:0},wy=["sedan","sedan","suv","hatch","hatch","pickup"],fd=["#e9e9e6","#e9e9e6","#151719","#151719","#9ea3a6","#5d6265","#1f3a5f","#8e1c1c","#c9b99a","#2e4a3a","#6b7d8c","#3a2f2a","#7a8f9e","#b85c2a"],dd=11.85,Ty=430,Ay=210,pi=new Ct,hs=new me,Kn=new L,Cr=new L(1,1,1),zo=new L(0,1,0),Ry=new L(1,0,0),hc=new Ct,$h=new me,Cy=new me().setFromAxisAngle(zo,Math.PI),No=new Ct().makeScale(0,0,0),mi=new Et;function md(s,t){return s==="ns"?-t:t}function Kh(s,t){return s==="ns"?t<0?0:Math.PI:t>0?-Math.PI/2:Math.PI/2}function Jh(s,t){return s==="ns"?[0,t]:[t,0]}function Fo(s,t,e,n,i){let r=md(s,e)*Ao[n];return s==="ns"?[t+r,i]:[i,t+r]}function pd(s){return Math.atan2(Math.sin(s),Math.cos(s))}function Qh(s,t){return s.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_INSTANCING_COLOR
totalEmissiveRadiance *= vColor;
#endif`)},s.customProgramCacheKey=()=>t,s}var jh=new Map;function Py(s){if(jh.has(s))return jh.get(s);let e=Object.entries({trim:"#14181a",dark:"#07090a",chrome:"#b9bec2",plate:"#d6d2c4"}).map(([i,r])=>{let o=s.parts[i].clone(),a=new Et(r),c=o.attributes.position.count,h=new Float32Array(c*3);for(let l=0;l<c;l++)h[l*3]=a.r,h[l*3+1]=a.g,h[l*3+2]=a.b;return o.setAttribute("color",new tn(h,3)),o}),n={paint:s.parts.paint,glass:s.parts.glass,body:Oe(e),head:s.parts.head,tail:s.parts.tail};return jh.set(s,n),n}function Iy(){let s=Do(16777215,{metalness:.35,roughness:.32});return s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying float vBodyY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBodyY = position.y;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vBodyY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(vec3(0.015), vec3(0.92), smoothstep(0.7, 0.74, vBodyY));`)},s.customProgramCacheKey=()=>"police-paint",s}var uc=class{constructor(t,e){this.cars=[],this.meshes=[],this.types={},this.parked=[],this.police=[],this.world=null,this.peds=[];let n=tc(e);this.headMat=Qh(new Ft({color:16777215,emissive:16773846,emissiveIntensity:1,roughness:.2}),"head-inst"),this.tailMat=Qh(new Ft({color:3802885,emissive:16719888,emissiveIntensity:1,roughness:.3}),"tail-inst");let i=qe(e,128,32,(l,f)=>{l.fillStyle="#f7d046",l.fillRect(0,0,f,32),l.fillStyle="#1a1a1a",l.font='800 24px "Barlow Condensed", Impact, sans-serif',l.textAlign="center",l.fillText("TAXI",f/2,25)});this.taxiSignMat=new Ft({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.3}),this.barMat=Qh(new Ft({color:1118481,emissive:16777215,emissiveIntensity:1,roughness:.3}),"lightbar-inst"),this.bodyMat=new Ft({vertexColors:!0,roughness:.5,metalness:.4}),this.parked=this.layoutParking();for(let[l,f]of Ey){let u=jl(l==="taxi"||l==="police"?"sedan":l),g=f+(Zh[l]||0),m={paint:l==="police"?Iy():Do(16777215,{metalness:.45,roughness:.38}),glass:n.glass,body:this.bodyMat,head:this.headMat,tail:this.tailMat},p={};for(let[A,b]of Object.entries(Py(u))){let E=new Kt(b,m[A],g);E.castShadow=A==="paint",(A==="glass"||A==="body")&&E.layers.set(1),E.receiveShadow=!0,E.frustumCulled=!1,E.instanceMatrix.setUsage(ni);for(let D=0;D<g;D++)E.setMatrixAt(D,No);t.add(E),p[A]=E,this.meshes.push(E)}for(let A=0;A<g;A++)p.paint.setColorAt(A,mi.set(l==="taxi"?"#f2c230":ce(fd))),p.tail.setColorAt(A,mi.setScalar(1)),p.head.setColorAt(A,mi.setScalar(1));let _=new Kt(u.wheel.tire,n.tire,g*4),S=new Kt(u.wheel.rim,n.rim,g*4);for(let A of[_,S]){A.frustumCulled=!1,A.castShadow=!1,A.layers.set(1),A.instanceMatrix.setUsage(ni);for(let b=0;b<g*4;b++)A.setMatrixAt(b,No);t.add(A),this.meshes.push(A)}let M=null,w=null;if(l==="taxi"&&(M=new Kt(new qt(.62,.2,.26),this.taxiSignMat,f),M.frustumCulled=!1,t.add(M),this.meshes.push(M)),l==="police"){w=new Kt(new qt(.62,.16,.3),this.barMat,f*2),w.frustumCulled=!1;for(let A=0;A<f*2;A++)w.setColorAt(A,mi.setScalar(0));t.add(w),this.meshes.push(w)}let R=Math.max(...u.type.cabin.top.map(A=>A[1])),T={name:l,geo:u,parts:p,tire:_,rim:S,sign:M,bar:w,roofY:R,moving:f,cap:g};this.types[l]=T;for(let A=0;A<f;A++){let b={type:T,slot:A,geo:u,police:l==="police",mode:"lane"};this.spawnLane(b,-316,246,0,420),this.cars.push(b),b.police&&this.police.push(b)}}let r=qe(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d/2,4,f/2,d/2,d/2);u.addColorStop(0,"rgba(0,0,0,0.75)"),u.addColorStop(.55,"rgba(0,0,0,0.45)"),u.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),o=new Ne(2.6,5.6);o.rotateX(-Math.PI/2);let a=Object.values(Zh).reduce((l,f)=>l+f,0);this.blobs=new Kt(o,new en({map:r,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),this.cars.length+a+1),this.blobs.frustumCulled=!1,this.blobs.renderOrder=1,this.blobs.userData.noAO=!0,t.add(this.blobs);let c=qe(e,64,128,(l,f,d)=>{let u=l.createRadialGradient(f/2,d*.75,2,f/2,d*.6,d*.6);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(.5,"rgba(255,255,255,0.3)"),u.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=u,l.fillRect(0,0,f,d)}),h=new Ne(6,14);h.rotateX(-Math.PI/2),h.translate(0,0,-9.5),this.poolMat=new en({map:c,color:16773328,transparent:!0,depthWrite:!1,blending:Nn,opacity:0,polygonOffset:!0,polygonOffsetFactor:-2}),this.pools=new Kt(h,this.poolMat,this.cars.length),this.pools.frustumCulled=!1,this.pools.layers.set(1),this.pools.userData.noAO=!0,t.add(this.pools),this.parkTimer=0,this.nearParked=[],this.refreshParked(-316,246)}layoutParking(){let t=[],e=zs.map(i=>Os(i)),n=(i,r)=>{let o=[],a=[-r,...i,r];for(let c=0;c<a.length-1;c++)o.push([a[c]+27,a[c+1]-27]);return o.filter(([c,h])=>h-c>8)};for(let[i,r,o,a]of[["ns",Zt,$t,486],["ew",$t,Zt,326]])for(let c of r)for(let h of[-1,1])if(!(i==="ns"&&c===Zt[0]&&h<0))for(let[l,f]of n(o,a))for(let d=l+3.6;d<f-3;d+=7.2){if(!ve(.42))continue;let u=d+mt(-.6,.6),g=i==="ns"?c+h*dd:u,x=i==="ns"?u:c+h*dd;if(e.some(([p,_])=>Math.hypot(p-g,_-x)<14)||Math.abs(x-ee.z)<20&&g<-300)continue;let m=i==="ns"?-h:h;t.push({parked:!0,type:ce(wy),x:g,z:x,heading:Kh(i,m)+mt(-.04,.04),color:ce(fd),hit:null,slot:-1})}return t}refreshParked(t,e){for(let r of Object.values(this.types))for(let o=r.moving;o<r.cap;o++){for(let a of Object.values(r.parts))a.setMatrixAt(o,No);for(let a=0;a<4;a++)r.tire.setMatrixAt(o*4+a,No),r.rim.setMatrixAt(o*4+a,No)}for(let r of this.parked)r.d=Math.hypot(r.x-t,r.z-e),r.slot=-1;let n=this.parked.filter(r=>r.d<Ay).sort((r,o)=>r.d-o.d),i={};this.nearParked=[];for(let r of n){let o=this.types[r.type],a=i[r.type]||0;a>=Zh[r.type]||(i[r.type]=a+1,r.slot=o.moving+a,o.parts.paint.setColorAt(r.slot,mi.set(r.color)),o.parts.head.setColorAt(r.slot,mi.setScalar(0)),o.parts.tail.setColorAt(r.slot,mi.setScalar(.12)),this.writeCar(o,r.slot,r.x,r.z,r.heading,0),this.nearParked.push(r))}}writeCar(t,e,n,i,r,o){hs.setFromAxisAngle(zo,r),pi.compose(Kn.set(n,.02,i),hs,Cr);for(let a of Object.values(t.parts))a.setMatrixAt(e,pi);return t.geo.wheels.forEach((a,c)=>{$h.setFromAxisAngle(Ry,o*(a.side<0?-1:1)),a.side<0&&$h.premultiply(Cy),hc.compose(Kn.set(a.x,a.y,a.z),$h,Cr),hc.premultiply(pi),t.tire.setMatrixAt(e*4+c,hc),t.rim.setMatrixAt(e*4+c,hc)}),pi}spawnLane(t,e,n,i,r,o=null){for(let a=0;a<40;a++){let c=pt()<.5?"ns":"ew",h=(c==="ns"?Zt:$t).filter(_=>Math.abs(_-(c==="ns"?e:n))<r);if(!h.length)continue;let l=ce(h),f=pt()<.5?1:-1,d=pt()<.5?0:1,u=c==="ns"?470:310,g=Se.clamp((c==="ns"?n:e)+mt(-r,r),-u,u),[x,m]=Fo(c,l,f,d,g),p=Math.hypot(x-e,m-n);if(!(p<i||p>r)&&!(c==="ns"?$t:Zt).some(_=>Math.abs(_-g)<24)&&!this.cars.some(_=>_!==t&&_.mode==="lane"&&_.axis===c&&_.road===l&&_.dir===f&&_.lane===d&&Math.abs(_.s-g)<20)){if(o){let _=x-o.position.x,S=m-o.position.z,M=Math.hypot(_,S)||1;if((_*o.fx+S*o.fz)/M>.2&&M<300)continue}return Object.assign(t,{axis:c,road:l,dir:f,lane:d,s:g}),Object.assign(t,{mode:"lane",cruise:t.police?mt(13,16):mt(11,16.5),speed:9,turn:null,plan:null,decided:null,hit:null,offset:null,braking:!1,blockedTime:0,wheelSpin:0,vx:0,vz:0}),this.place(t),!0}}return t.axis===void 0&&Object.assign(t,{axis:"ns",road:Zt[1],dir:1,lane:0,s:0}),Object.assign(t,{mode:"lane",cruise:12,speed:0,turn:null,plan:null,hit:null,offset:null,wheelSpin:0,vx:0,vz:0,blockedTime:0}),this.place(t),!1}place(t){if(t.turn){let e=t.turn,n=e.t*Math.PI/2,i=Math.cos(n),r=Math.sin(n);t.x=e.O[0]+e.u[0]*i+e.v[0]*r,t.z=e.O[1]+e.u[1]*i+e.v[1]*r;let o=-e.u[0]*r+e.v[0]*i,a=-e.u[1]*r+e.v[1]*i;t.heading=Math.atan2(-o,-a)}else[t.x,t.z]=Fo(t.axis,t.road,t.dir,t.lane,t.s),t.heading=Kh(t.axis,t.dir)}nextCross(t){let e=t.axis==="ns"?$t:Zt,n=null;for(let i of e){let r=(i-t.s)*t.dir;r>-1&&(n===null||r<(n-t.s)*t.dir)&&(n=i)}return n}exitValid(t,e,n){let i=t==="ns"?$t:Zt;return e>0?n<i[i.length-1]:n>i[0]}planTurn(t,e){let n=t.axis==="ns"?t.dir<0?"N":"S":t.dir>0?"E":"W",i={N:"E",E:"S",S:"W",W:"N"}[n],r={N:"W",W:"S",S:"E",E:"N"}[n],o=A=>A==="N"?["ns",-1]:A==="S"?["ns",1]:A==="E"?["ew",1]:["ew",-1],a=A=>{let[b,E]=o(A);return b===t.axis?this.exitValid(b,E,e):this.exitValid(b,E,t.road)},c=[];a(n)&&c.push(["straight",t.lane===1?.6:.72]),a(i)&&c.push(["right",t.lane===1?.4:.08]),a(r)&&c.push(["left",t.lane===0?.28:.06]);let h=pt()*c.reduce((A,b)=>A+b[1],0),l=c[0][0];for(let[A,b]of c)if((h-=b)<=0){l=A;break}if(l==="straight")return null;let[f,d]=o(l==="right"?i:r),u=t.lane,g=e,x=Fo(t.axis,t.road,t.dir,t.lane,0),m=Fo(f,g,d,u,0),p=t.axis==="ns"?[x[0],m[1]]:[m[0],x[1]],_=Jh(t.axis,t.dir),S=Jh(f,d),M=l==="right"?6.5:10.5,w=[p[0]-_[0]*M,p[1]-_[1]*M],R=[p[0]+S[0]*M,p[1]+S[1]*M],T=[w[0]+S[0]*M,w[1]+S[1]*M];return{startS:t.axis==="ns"?w[1]:w[0],O:T,u:[w[0]-T[0],w[1]-T[1]],v:[R[0]-T[0],R[1]-T[1]],t:0,len:M*Math.PI/2,next:{axis:f,road:g,dir:d,lane:u,s:f==="ns"?R[1]:R[0]}}}rejoinLane(t){let e=-Math.sin(t.heading),n=-Math.cos(t.heading),i=Math.abs(n)>Math.abs(e)?"ns":"ew",r=i==="ns"?Math.sign(n)||1:Math.sign(e)||1,o=i==="ns"?Zt:$t,a=i==="ns"?t.x:t.z,c=o.reduce((g,x)=>Math.abs(x-a)<Math.abs(g-a)?x:g),h=(a-c)*md(i,r),l=Math.abs(h-Ao[0])<Math.abs(h-Ao[1])?0:1,f=i==="ns"?t.z:t.x,[d,u]=Fo(i,c,r,l,f);Object.assign(t,{mode:"lane",axis:i,road:c,dir:r,lane:l,s:f,turn:null,plan:null,decided:null,hit:null}),t.offset={dx:t.x-d,dz:t.z-u,dh:pd(t.heading-Kh(i,r)),t:1},Math.abs(a-c)>jt+6&&this.spawnLane(t,t.x,t.z,0,200)}update(t,e,n,i,r=null){if(this.frozen)return;let o=n.x,a=n.z,c=r?{position:r.position,fx:0,fz:0}:null;if(c){r.getWorldDirection(Kn),c.fx=Kn.x,c.fz=Kn.z;let l=Math.hypot(c.fx,c.fz)||1;c.fx/=l,c.fz/=l}for(let l of this.cars){if(l.mode==="lane"&&Math.hypot(l.x-o,l.z-a)>Ty){this.spawnLane(l,o,a,140,380,c);continue}if(l.mode==="chase"){this.chase(l,t,n);continue}if(l.hit){let m=l.hit;l.x+=m.vx*t,l.z+=m.vz*t;let p=Math.exp(-1.8*t);m.vx*=p,m.vz*=p,l.heading+=m.spin*t,m.spin*=Math.exp(-2.5*t),m.t-=t,l.speed=0,this.collideWorld(l),m.t<=0&&this.rejoinLane(l);continue}let f=l.cruise,[d,u]=l.turn?[-Math.sin(l.heading),-Math.cos(l.heading)]:Jh(l.axis,l.dir);if(l.turn)f=Math.min(f,8);else{let m=this.nextCross(l);if(m!==null){let p=(m-l.s)*l.dir;p<34&&l.decided!==m&&(l.decided=m,l.plan=this.planTurn(l,m));let _=p-20.5,S=cs(l.axis==="ns"?0:1,e);_>-1&&(S===0||S===1&&_>9)&&(f=Math.min(f,Math.sqrt(Math.max(0,_-.5))*2.4)),l.plan&&(f=Math.min(f,l.plan.next.lane===0?9:7.5)),!l.plan&&!this.exitValid(l.axis,l.dir,m)&&(f=Math.min(f,Math.sqrt(Math.max(0,_))*2))}for(let p of this.cars){if(p===l||p.mode!=="lane"||p.turn||p.axis!==l.axis||p.road!==l.road||p.dir!==l.dir||p.lane!==l.lane)continue;let _=(p.s-l.s)*l.dir;_>0&&_<45&&(f=Math.min(f,Math.max(0,_-7.5)*.9))}}let g=(m,p,_,S)=>{let M=m-l.x,w=p-l.z,R=M*d+w*u,T=Math.abs(M*u-w*d);return R>0&&R<32&&T<S?(f=Math.min(f,Math.max(0,R-_)*.85),!0):!1};g(o,a,6.5,2.6)?l.speed<1&&n.kmh<5&&(l.blockedTime+=t,l.blockedTime>2.5&&(l.blockedTime=-4,i?.(l))):l.blockedTime=Math.max(0,l.blockedTime-t);for(let m of this.peds)g(m.x,m.z,5,2.4);for(let m of this.cars)(m.mode!=="lane"||m.hit)&&m!==l&&g(m.x,m.z,7,2.6);let x=f>l.speed?3.2:9;if(l.speed+=Math.sign(f-l.speed)*Math.min(Math.abs(f-l.speed),x*t),l.braking=f<l.speed-.3||l.speed<.5&&f<.5,l.turn?(l.turn.t+=l.speed*t/l.turn.len,l.turn.t>=1&&(Object.assign(l,l.turn.next),l.turn=null,l.decided=null)):(l.s+=l.speed*l.dir*t,l.plan&&(l.s-l.plan.startS)*l.dir>=0&&(l.turn=l.plan,l.plan=null)),this.place(l),l.offset){let m=l.offset;if(m.t-=t/1.6,m.t<=0)l.offset=null;else{let p=m.t*m.t;l.x+=m.dx*p,l.z+=m.dz*p,l.heading+=m.dh*p}}l.vx=d*l.speed,l.vz=u*l.speed,l.wheelSpin-=l.speed*t/l.geo.type.wheelR}this.updateParked(t),this.collidePlayer(n),this.parkTimer-=t;let h=Math.hypot(o-(this.lastParkX??o),a-(this.lastParkZ??a))>60;(this.parkTimer<=0||h)&&(this.parkTimer=.5,this.lastParkX=o,this.lastParkZ=a,this.refreshParked(o,a))}chase(t,e,n){let i=n.x-t.x,r=n.z-t.z,o=Math.hypot(i,r),a=Math.min(o/35,1.1),c=n.x+n.vx*a,h=n.z+n.vz*a,l=Math.atan2(-(c-t.x),-(h-t.z)),f=10+t.speed*.6,d=S=>{let M=t.x-Math.sin(S)*f,w=t.z-Math.cos(S)*f;return(this.world?.colliders||[]).some(R=>Math.abs(M-R.x)<R.w+1.8&&Math.abs(w-R.z)<R.d+1.8)};if(d(l)){for(let S of[.5,-.5,1,-1,1.6,-1.6])if(!d(l+S)){l+=S;break}}let u=pd(l-t.heading),g=1.9/(1+t.speed*.012);t.heading+=Se.clamp(u,-g*e,g*e);let x=Math.hypot(n.vx,n.vz),m=o>60?50:Math.min(52,x+10);Math.abs(u)>.9&&(m=Math.min(m,14)),o<9&&x<3&&(m=Math.min(m,2)),t.speed+=Se.clamp(m-t.speed,-14*e,9*e);let p=-Math.sin(t.heading),_=-Math.cos(t.heading);t.vx+=(p*t.speed-t.vx)*Math.min(1,e*5),t.vz+=(_*t.speed-t.vz)*Math.min(1,e*5),t.x+=t.vx*e,t.z+=t.vz*e,this.collideWorld(t),t.wheelSpin-=t.speed*e/t.geo.type.wheelR,t.braking=m<t.speed-1}collideWorld(t){let e=this.world?.colliders;if(e){for(let n of e){let i=n.w+1.1-Math.abs(t.x-n.x),r=n.d+1.1-Math.abs(t.z-n.z);i<=0||r<=0||(i<r?(t.x+=Math.sign(t.x-n.x)*i,t.vx*=-.2):(t.z+=Math.sign(t.z-n.z)*r,t.vz*=-.2),t.speed*=.6)}t.x=Se.clamp(t.x,Qe.minX+60,Qe.maxX),t.z=Se.clamp(t.z,Qe.minZ,Qe.maxZ)}}startChase(t){if(t.mode==="chase")return;t.mode="chase",t.turn=null,t.plan=null,t.hit=null,t.offset=null;let e=-Math.sin(t.heading),n=-Math.cos(t.heading);t.vx=e*t.speed,t.vz=n*t.speed}endChase(t){t.mode==="chase"&&(this.rejoinLane(t),t.speed=Math.min(t.speed,10))}dispatch(t,e,n){let i={position:n.position,fx:0,fz:0};n.getWorldDirection(Kn);let r=Math.hypot(Kn.x,Kn.z)||1;i.fx=Kn.x/r,i.fz=Kn.z/r,this.spawnLane(t,e.x,e.z,110,240,i),this.startChase(t)}updateParked(t){for(let e of this.nearParked){if(!e.hit)continue;let n=e.hit;e.x+=n.vx*t,e.z+=n.vz*t,e.heading+=n.spin*t;let i=Math.exp(-2.4*t);n.vx*=i,n.vz*=i,n.spin*=i,Math.hypot(n.vx,n.vz)<.05&&Math.abs(n.spin)<.02&&(e.hit=null),this.writeCar(this.types[e.type],e.slot,e.x,e.z,e.heading,0)}}collidePlayer(t){let e=[-Math.sin(t.heading),-Math.cos(t.heading)],n=[...this.cars,...this.nearParked];this.lastHit=null;for(let i of n){let r=t.x-i.x,o=t.z-i.z;if(r*r+o*o>64)continue;let a=!!i.parked,c=[-Math.sin(i.heading),-Math.cos(i.heading)],l=(a?4.7:i.geo.type.length)/2-1.05;for(let f of[-1.3,1.3])for(let d of[-l,l]){let u=t.x+e[0]*f,g=t.z+e[1]*f,x=i.x+c[0]*d,m=i.z+c[1]*d,p=u-x,_=g-m,S=Math.hypot(p,_);if(S>2.15||S<1e-4)continue;p/=S,_/=S;let M=2.15-S;t.x+=p*M*.6,t.z+=_*M*.6;let w=a?i.hit?i.hit.vx:0:i.mode==="chase"?i.vx:i.hit?i.hit.vx:c[0]*i.speed,R=a?i.hit?i.hit.vz:0:i.mode==="chase"?i.vz:i.hit?i.hit.vz:c[1]*i.speed,T=(t.vx-w)*p+(t.vz-R)*_;if(T<0){let A=a?.55:.5,b=-1.3*T*A;t.vx+=b*p*(a?.8:1),t.vz+=b*_*(a?.8:1),t.impact=Math.max(t.impact,-T),this.lastHit={car:i,parked:a,police:!!i.police,speed:-T,x:(u+x)/2,z:(g+m)/2},t.registerHit?.(this.lastHit.x,this.lastHit.z,-T),(!t.contact||-T>t.contact.speed)&&(t.contact={x:this.lastHit.x,z:this.lastHit.z,speed:-T,nx:p,nz:_}),i.mode==="chase"?(i.vx-=b*p,i.vz-=b*_):(i.hit||(i.hit={vx:w,vz:R,spin:0,t:0}),i.hit.vx-=b*p,i.hit.vz-=b*_,i.hit.spin+=(pt()-.5)*Math.min(-T,20)*.25,i.hit.t=2.8,i.turn=null,i.plan=null)}else!i.hit&&!a&&i.mode!=="chase"&&(i.hit={vx:-p*1.5,vz:-_*1.5,spin:0,t:.6});i.x-=p*M*.4,i.z-=_*M*.4}}}sync(t,e,n=0){let i=0;this.cars.forEach((r,o)=>{let a=r.type,c=this.writeCar(a,r.slot,r.x,r.z,r.heading,r.wheelSpin);if(a.sign){let h=c.clone().multiply(new Ct().makeTranslation(0,a.roofY+.1,.1));a.sign.setMatrixAt(r.slot,h)}if(a.bar)for(let h=0;h<2;h++){let l=c.clone().multiply(new Ct().makeTranslation(h?.32:-.32,a.roofY+.09,.1));a.bar.setMatrixAt(r.slot*2+h,l);let f=r.mode==="chase"&&Math.sin(n*18+h*Math.PI)>0?1:0;a.bar.setColorAt(r.slot*2+h,f?h?mi.setRGB(.3,.5,6):mi.setRGB(6,.2,.15):mi.setRGB(.04,.04,.05))}a.parts.tail.setColorAt(r.slot,mi.setScalar(r.braking?4:1)),hs.setFromAxisAngle(zo,r.heading),pi.compose(Kn.set(r.x,.035,r.z),hs,Cr),this.blobs.setMatrixAt(i++,pi),this.pools.setMatrixAt(o,pi)});for(let r of this.nearParked)hs.setFromAxisAngle(zo,r.heading),pi.compose(Kn.set(r.x,.035,r.z),hs,Cr),this.blobs.setMatrixAt(i++,pi);hs.setFromAxisAngle(zo,e.heading),pi.compose(Kn.set(e.x,e.y+.035,e.z),hs,Cr.set(1.05,1,1)),Cr.set(1,1,1),this.blobs.setMatrixAt(i++,pi),this.blobs.count=i,this.blobs.instanceMatrix.needsUpdate=!0,this.pools.instanceMatrix.needsUpdate=!0;for(let r of this.meshes)r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0);this.headMat.emissiveIntensity=1+t*8,this.tailMat.emissiveIntensity=.8+t*2.2,this.taxiSignMat.emissiveIntensity=.3+t*2.5,this.poolMat.opacity=t*.55}nearest(t,e){let n=1/0;for(let i of this.cars)n=Math.min(n,Math.hypot(i.x-t,i.z-e));return n}};var Ln=62.5,Pr=Ln*2,Gs=Pr*4,Vs=140,Dy=["#f1c7a5","#e0ac85","#c68b62","#a26a45","#7a4b2f","#5a3824"],Ly=["#e9e6dd","#20242a","#c23b2e","#2d5d8a","#f2c14e","#3f7a52","#7a4a8c","#e07a4a","#9fb3c4","#d4d0c4","#1f3b5c","#a83c62"],Uy=["#26303d","#1b1d20","#5c6b7a","#c9b79a","#3b4652","#6f5b45","#2f3b2c","#e5e1d6"];function Ny(){let s=[],t=(e,n,i,r,o,a)=>{e.translate(n,i,r);let c=e.index?e.toNonIndexed():e,h=c.attributes.position.count;c.setAttribute("aPart",new ie(new Float32Array(h).fill(o),1)),c.setAttribute("aRegion",new ie(new Float32Array(h).fill(a),1)),c.attributes.uv&&c.deleteAttribute("uv"),s.push(c)};for(let[e,n]of[[-1,1],[1,2]])t(new qt(.15,.82,.17),e*.1,.49,0,n,2),t(new qt(.16,.09,.28),e*.1,.045,-.05,n,3);t(new qt(.36,.2,.21),0,.96,0,0,2),t(new qt(.42,.56,.23),0,1.33,0,0,1),t(new pe(.05,.055,.1,8),0,1.65,0,0,0),t(new In(.115,12,10),0,1.79,-.01,0,0),t(new In(.122,12,8,0,Math.PI*2,0,Math.PI*.55),0,1.81,.012,0,4);for(let[e,n]of[[-1,3],[1,4]])t(new qt(.1,.34,.12),e*.27,1.43,0,n,1),t(new qt(.085,.3,.1),e*.275,1.11,0,n,0);return Oe(s)}var gd=`
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
}`;function Fy(){let s=new Ft({color:16777215,roughness:.82});s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${gd}
attribute vec3 aShirt; attribute vec3 aPants; attribute vec4 aSkin; varying vec3 vPedCol;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
pedPose();
objectNormal = pedBody * (pedLimb * objectNormal);`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed = pedTransform(transformed);
        vec3 hair = mix(vec3(0.05, 0.035, 0.02), vec3(0.55, 0.42, 0.22), aSkin.w);
        vPedCol = aRegion < 0.5 ? aSkin.rgb : aRegion < 1.5 ? aShirt : aRegion < 2.5 ? aPants : aRegion < 3.5 ? vec3(0.06) : hair;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPedCol;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = vPedCol;`)},s.customProgramCacheKey=()=>"pedestrian";let t=new dr({depthPacking:Ll});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${gd}`).replace("#include <begin_vertex>",`#include <begin_vertex>
pedPose();
transformed = pedTransform(transformed);`)},t.customProgramCacheKey=()=>"pedestrian-depth",{mat:s,depth:t}}function tu(s,t,e,n){let i=(e%Gs+Gs)%Gs,r=Math.floor(i/Pr),o=i-r*Pr;return r===0?(n.x=s-Ln+o,n.z=t-Ln,n.dx=1,n.dz=0):r===1?(n.x=s+Ln,n.z=t-Ln+o,n.dx=0,n.dz=1):r===2?(n.x=s+Ln-o,n.z=t+Ln,n.dx=-1,n.dz=0):(n.x=s-Ln,n.z=t+Ln-o,n.dx=0,n.dz=-1),n}var fc=s=>s*Pr,vd=[[-1,-1],[1,-1],[1,1],[-1,1]];function xd(s,t){return vd.findIndex(([e,n])=>e===s&&n===t)}var dc=class{constructor(t){let{mat:e,depth:n}=Fy(),i=Ny();this.aWalk=new Xe(new Float32Array(Vs*4),4).setUsage(ni);let r=new Float32Array(Vs*3),o=new Float32Array(Vs*3),a=new Float32Array(Vs*4),c=new Et;for(let h=0;h<Vs;h++)r.set(c.set(ce(Ly)).toArray(),h*3),o.set(c.set(ce(Uy)).toArray(),h*3),a.set([...c.set(ce(Dy)).toArray(),pt()<.2?1:pt()*.4],h*4);i.setAttribute("aWalk",this.aWalk),i.setAttribute("aShirt",new Xe(r,3)),i.setAttribute("aPants",new Xe(o,3)),i.setAttribute("aSkin",new Xe(a,4)),this.mesh=new Kt(i,e,Vs),this.mesh.customDepthMaterial=n,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(ni),this.mesh.name="pedestrians",t.add(this.mesh),this.peds=[],this.events=[],this.onRoad=[],this.tmp={x:0,z:0,dx:0,dz:0},this.m=new Ct,this.q=new me,this.e=new sn(0,0,0,"YXZ");for(let h=0;h<Vs;h++){let l={i:h,scale:mt(.9,1.08)};this.place(l,-316,246,!0),this.peds.push(l)}}place(t,e,n,i=!1){let r=[];for(let c of wi)for(let h of Ti)Math.hypot(c-e,h-n)<(i?330:300)&&r.push([c,h]);let[o,a]=r.length?ce(r):[wi[0],Ti[3]];Object.assign(t,{cx:o,cz:a,t:pt()*Gs,dir:ve(.5)?1:-1,speed:mt(1.05,1.55),lateral:mt(-.9,.9),state:ve(.12)?"idle":"walk",timer:mt(3,9),phase:pt()*6,amp:0,fall:0,lean:0,vx:0,vz:0,cross:null,x:0,z:0,heading:0}),this.pathPoint(t),t.x=t.px,t.z=t.pz}pathPoint(t){let e=tu(t.cx,t.cz,t.t,this.tmp),n=e.dz,i=-e.dx;t.px=e.x+n*t.lateral,t.pz=e.z+i*t.lateral,t.pdx=e.dx*t.dir,t.pdz=e.dz*t.dir}tryCross(t,e,n){let[i,r]=vd[e],o=[],a=t.cx+i*160,c=t.cz+r*160;if(wi.includes(a)&&o.push({axis:0,tx:a,tz:t.cz,corner:xd(-i,r)}),Ti.includes(c)&&o.push({axis:1,tx:t.cx,tz:c,corner:xd(i,-r)}),!o.length||!ve(.45))return!1;let h=ce(o),l=tu(t.cx,t.cz,fc(e),{}),f=tu(h.tx,h.tz,fc(h.corner),{});return t.cross={...h,ax:l.x,az:l.z,bx:f.x,bz:f.z,f:0,len:Math.hypot(f.x-l.x,f.z-l.z)},t.state="wait",t.timer=25,!0}update(t,e,n){let i=-Math.sin(n.heading),r=-Math.cos(n.heading),o=Math.cos(n.heading),a=-Math.sin(n.heading),c=Math.abs(n.speed);this.onRoad.length=0,this.events.length=0;let h=this.aWalk.array;for(let l of this.peds){Math.hypot(l.x-n.x,l.z-n.z)>330&&(l.state==="walk"||l.state==="idle")&&this.place(l,n.x,n.z);let f=0,d=l.x-n.x,u=l.z-n.z,g=d*i+u*r,x=d*o+u*a;if(c>4&&g>-1&&g<c*1.25+5&&Math.abs(x)<2.6&&Math.abs(n.y-Jt)<2.5&&l.state!=="down"&&l.state!=="getup"&&l.state!=="dodge"){let M=Math.abs(x)>.2?Math.sign(x):ve(.5)?1:-1;l.vx=o*M*5.2+i*.6,l.vz=a*M*5.2+r*.6,l.state="dodge",l.timer=.55,l.resume=l.cross?"cross":"return"}let p=Math.hypot(l.x-(n.x+i*1.3*Math.sign(g||1)),l.z-(n.z+r*1.3*Math.sign(g||1)));if(l.state!=="down"&&l.state!=="getup"&&Math.hypot(d,u)<3&&p<1.4)if(c>5)l.state="down",l.timer=2.6,l.vx=n.vx*.35+o*Math.sign(x||1)*1.5,l.vz=n.vz*.35+a*Math.sign(x||1)*1.5,l.heading=Math.atan2(-l.vx,-l.vz)+Math.PI,this.events.push({type:"hit",x:l.x,z:l.z,speed:c});else{let M=Math.max(p,.01);l.x+=(l.x-n.x)/Math.hypot(d,u)*(1.4-M)*.5,l.z+=(l.z-n.z)/Math.hypot(d,u)*(1.4-M)*.5}switch(l.state){case"idle":{l.timer-=t,l.timer<=0&&(l.state="walk",l.timer=mt(6,20));break}case"walk":{f=l.speed;let M=l.t;l.t+=l.dir*l.speed*t;let w=Math.floor(M/Pr),R=Math.floor(l.t/Pr);if(w!==R){let T=((l.dir>0?R:w)%4+4)%4;this.tryCross(l,T,e)&&(l.t=fc(T))}l.t=(l.t%Gs+Gs)%Gs,l.timer-=t,l.timer<=0&&!l.cross&&(ve(.25)?(l.state="idle",l.timer=mt(2,6)):(l.timer=mt(5,20),ve(.2)&&(l.dir*=-1))),this.pathPoint(l),l.x+=(l.px-l.x)*Math.min(1,t*6),l.z+=(l.pz-l.z)*Math.min(1,t*6),l.heading=Math.atan2(-l.pdx,-l.pdz);break}case"wait":{l.timer-=t;let M=l.cross;l.x+=(M.ax-l.x)*Math.min(1,t*3),l.z+=(M.az-l.z)*Math.min(1,t*3),l.heading=Math.atan2(-(M.bx-M.ax),-(M.bz-M.az));let w=cs(M.axis,e),R=(e%28+28)%28,T=M.axis===0?R:(R+14)%28;w===0&&T>=13&&T<17?l.state="cross":l.timer<=0&&(l.cross=null,l.state="walk");break}case"cross":{let M=l.cross;f=1.85,M.f=Math.min(1,M.f+f*t/M.len);let w=M.ax+(M.bx-M.ax)*M.f,R=M.az+(M.bz-M.az)*M.f;l.x+=(w-l.x)*Math.min(1,t*8),l.z+=(R-l.z)*Math.min(1,t*8),l.heading=Math.atan2(-(M.bx-M.ax),-(M.bz-M.az)),this.onRoad.push(l),M.f>=1&&(l.cx=M.tx,l.cz=M.tz,l.t=fc(M.corner),l.cross=null,l.state="walk",l.dir=ve(.5)?1:-1);break}case"dodge":{f=5,l.x+=l.vx*t,l.z+=l.vz*t,l.vx*=Math.exp(-2.5*t),l.vz*=Math.exp(-2.5*t),l.heading=Math.atan2(-l.vx,-l.vz),l.timer-=t,l.timer<=0&&(l.state=l.resume==="cross"&&l.cross?"cross":"return");break}case"down":{l.x+=l.vx*t,l.z+=l.vz*t;let M=Math.exp(-3.5*t);l.vx*=M,l.vz*=M,l.fall=Math.min(1.5,l.fall+t*6),l.timer-=t,l.timer<=0&&(l.state="getup",l.timer=.9);break}case"getup":{l.fall=Math.max(0,l.fall-t*1.9),l.timer-=t,l.timer<=0&&(l.fall=0,l.state=l.cross?"cross":"return");break}case"return":{this.pathPoint(l);let M=l.px-l.x,w=l.pz-l.z,R=Math.hypot(M,w);if(f=2.2,R<.25){l.state="walk";break}l.x+=M/R*Math.min(R,f*t),l.z+=w/R*Math.min(R,f*t),l.heading=Math.atan2(-M,-w),Math.abs(l.x-l.cx)<Ln+1&&Math.abs(l.z-l.cz)<Ln+1;break}}(l.state==="dodge"||l.state==="return")&&(Math.abs(l.x-l.cx)>Ln+3||Math.abs(l.z-l.cz)>Ln+3)&&this.onRoad.push(l);let _=l.state==="down"||l.state==="getup"?0:f;l.amp+=((_>.1?Math.min(.45+_*.12,1.05):0)-l.amp)*Math.min(1,t*6),l.phase+=t*(_>.1?3.2+_*1.6:0),l.lean+=((_>3?.18:.02)-l.lean)*Math.min(1,t*5),h[l.i*4]=l.phase,h[l.i*4+1]=l.amp,h[l.i*4+2]=l.lean,h[l.i*4+3]=l.fall;let S=l.state==="cross"||l.state==="down"||l.state==="dodge"||l.state==="getup"?Math.abs(l.x-l.cx)<Ln+4.5&&Math.abs(l.z-l.cz)<Ln+4.5?Jt:.02:Jt;this.q.setFromEuler(this.e.set(0,l.heading,0)),this.m.compose(new L(l.x,S,l.z),this.q,new L(l.scale,l.scale,l.scale)),this.mesh.setMatrixAt(l.i,this.m)}this.mesh.instanceMatrix.needsUpdate=!0,this.aWalk.needsUpdate=!0}};var zy=`
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
}`,Oy=`
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
}`,By=`
uniform sampler2D map;
varying vec2 vUv;
varying float vAlpha;
varying float vAge;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor * t.a * vAlpha, 1.0);
}`,Ws=class{constructor(t,e,{texture:n,additive:i=!1,drag:r=1.5,gravity:o=0,grow:a=1.5}){this.max=e,this.drag=r,this.gravity=o,this.grow=a,this.count=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.rot=new Float32Array(e),this.spin=new Float32Array(e),this.col=new Float32Array(e*3);let c=new uo,h=new Ne(1,1);c.index=h.index,c.setAttribute("position",h.attributes.position),c.setAttribute("uv",h.attributes.uv),this.aPos=new Xe(new Float32Array(e*3),3).setUsage(ni),this.aData=new Xe(new Float32Array(e*4),4).setUsage(ni),this.aColor=new Xe(new Float32Array(e*3),3).setUsage(ni),c.setAttribute("aPos",this.aPos),c.setAttribute("aData",this.aData),c.setAttribute("aColor",this.aColor),c.instanceCount=0,this.uniforms={map:{value:n},light:{value:new Et(1,1,1)}};let l=new _e({uniforms:this.uniforms,vertexShader:zy,fragmentShader:i?By:Oy,transparent:!0,depthWrite:!1,blending:i?Nn:Ni});this.mesh=new Pt(c,l),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i?6:5,this.mesh.userData.noAO=!0,this.mesh.layers.set(1),this.geo=c,t.add(this.mesh)}emit(t,e,n,i,r,o,a,c,h,l=1,f=1,d=1){let u=this.count;if(u>=this.max){let g=0;for(let x=1;x<this.max;x++)this.life[x]<this.life[g]&&(g=x);u=g}else this.count++;this.p.set([t,e,n],u*3),this.v.set([i,r,o],u*3),this.col.set([l,f,d],u*3),this.life[u]=this.maxLife[u]=c,this.size[u]=a,this.alpha[u]=h,this.rot[u]=pt()*Math.PI*2,this.spin[u]=(pt()-.5)*1.2}update(t){let e=Math.exp(-this.drag*t),n=0;for(let i=0;i<this.count;i++){if(this.life[i]-=t,this.life[i]<=0)continue;if(n!==i){for(let[c,h]of[[this.p,3],[this.v,3],[this.col,3]])c.copyWithin(n*h,i*h,i*h+h);this.life[n]=this.life[i],this.maxLife[n]=this.maxLife[i],this.size[n]=this.size[i],this.alpha[n]=this.alpha[i],this.rot[n]=this.rot[i],this.spin[n]=this.spin[i]}let r=n*3;this.v[r]*=e,this.v[r+1]=this.v[r+1]*e+this.gravity*t,this.v[r+2]*=e,this.p[r]+=this.v[r]*t,this.p[r+1]+=this.v[r+1]*t,this.p[r+2]+=this.v[r+2]*t,this.rot[n]+=this.spin[n]*t;let o=1-this.life[n]/this.maxLife[n],a=Math.min(o*6,1)*(1-o)*(1-o);this.aPos.array.set([this.p[r],this.p[r+1],this.p[r+2]],r),this.aData.array.set([this.size[n]*(1+o*this.grow),this.alpha[n]*a,this.rot[n],o],n*4),this.aColor.array.set([this.col[r],this.col[r+1],this.col[r+2]],r),n++}this.count=n,this.geo.instanceCount=n,this.aPos.needsUpdate=this.aData.needsUpdate=this.aColor.needsUpdate=!0}};function yd(s,t){let e=qe(t,128,128,(i,r,o)=>{let a=i.createImageData(r,o);for(let c=0;c<o;c++)for(let h=0;h<r;h++){let l=(h-r/2)/(r/2),f=(c-o/2)/(o/2),d=Math.sqrt(l*l+f*f),u=.65+.35*Math.sin(h*.31+Math.sin(c*.23)*3)*Math.sin(c*.27+Math.cos(h*.19)*2),g=Math.max(0,1-d)**1.6*u,x=(c*r+h)*4;a.data[x]=a.data[x+1]=a.data[x+2]=200+u*55,a.data[x+3]=Math.min(255,g*255)}i.putImageData(a,0,0)},{srgb:!1}),n=qe(t,64,64,(i,r,o)=>{let a=i.createRadialGradient(r/2,o/2,0,r/2,o/2,r/2);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,255,255,0.6)"),a.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=a,i.fillRect(0,0,r,o)},{srgb:!1});return{smoke:new Ws(s,420,{texture:e,drag:1.1,gravity:.35,grow:2.6}),dust:new Ws(s,200,{texture:e,drag:1.6,gravity:-.2,grow:2}),sparks:new Ws(s,160,{texture:n,additive:!0,drag:.6,gravity:-9.8,grow:-.6}),flames:new Ws(s,160,{texture:n,additive:!0,drag:3,gravity:.5,grow:-.4}),water:new Ws(s,360,{texture:e,drag:.35,gravity:-9.8,grow:1.6})}}var pc=class{constructor(t,e=900){this.max=e,this.index=0;let n=new Ne(1,1);n.rotateX(-Math.PI/2),this.mat=new Ft({color:328965,transparent:!0,opacity:.55,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),this.mesh=new Kt(n,this.mat,e),this.mesh.instanceMatrix.setUsage(ni),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.renderOrder=1,this.mesh.userData.noAO=!0;let i=new Ct().makeScale(0,0,0);for(let r=0;r<e;r++)this.mesh.setMatrixAt(r,i);this.last=new Map,t.add(this.mesh),this.m=new Ct,this.q=new me,this.v=new L,this.s=new L,this.up=new L(0,1,0)}add(t,e,n,i,r,o=.26){let a=this.last.get(t);if(!r){this.last.delete(t);return}if(a){let c=e-a[0],h=i-a[2],l=Math.hypot(c,h);if(l<.35)return;l<4&&(this.q.setFromAxisAngle(this.up,Math.atan2(c,h)),this.m.compose(this.v.set((e+a[0])/2,n+.03,(i+a[2])/2),this.q,this.s.set(o,1,l+.05)),this.mesh.setMatrixAt(this.index,this.m),this.index=(this.index+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0)}this.last.set(t,[e,n,i])}};var Oo=Se.damp,eu=["CHASE CAMERA","FAR CHASE CAMERA","HOOD CAMERA","CINEMATIC CAMERA"],mc=class{constructor(t){this.camera=t,this.mode=0,this.pos=new L,this.look=new L,this.desired=new L,this.target=new L,this.yaw=0,this.shake=0,this.cine=null,this.cineTimer=0,this.baseFov=55,this.rumble=0,this.clock=0}snap(t){this.yaw=t.heading,this.cine=null,this.compute(t,0),this.pos.copy(this.desired),this.look.copy(this.target),this.apply(0)}compute(t,e){let n=Math.min(Math.abs(t.speed)/55,1),i=Math.hypot(t.vx,t.vz)>4?Math.atan2(-t.vx,-t.vz):t.heading,r=t.heading+_d(i-t.heading)*.35;t.speed<-1&&(r=t.heading),this.yaw=e?this.yaw+_d(r-this.yaw)*(1-Math.exp(-4.5*e)):r;let o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=t.group.position;if(this.mode===2){let h=Math.sin(t.heading),l=Math.cos(t.heading);this.desired.set(c.x-h*.15,c.y+1.18,c.z-l*.15),this.target.set(c.x-h*30,c.y+.9,c.z-l*30)}else if(this.mode===3)this.cinematic(t,e);else{let h=this.mode===1,l=(h?11.5:7.4)+n*1.6,f=(h?4.6:2.45)+n*.25;this.desired.set(c.x+o*l,c.y+f,c.z+a*l),this.target.set(c.x-o*6,c.y+1.15,c.z-a*6)}}cinematic(t,e){let n=t.group.position;this.cineTimer-=e;let i=-Math.sin(t.heading),r=-Math.cos(t.heading);if(!this.cine||this.cine.distanceTo(n)>70||this.cineTimer<=0){let a=Math.random()<.5?-1:1,c=28+Math.abs(t.speed)*1.6;this.cine=new L(n.x+i*c+r*a*7,n.y+.7+Math.random()*2.5,n.z+r*c-i*a*7),this.cineTimer=7,this.pos.copy(this.cine)}this.desired.copy(this.cine),this.target.set(n.x,n.y+.8,n.z)}apply(t){let e=this.camera;if(e.position.copy(this.pos),this.shake>.001){let n=this.shake;e.position.x+=(Math.random()-.5)*n,e.position.y+=(Math.random()-.5)*n,e.position.z+=(Math.random()-.5)*n,this.shake=Oo(this.shake,0,6,t||.016)}if(this.rumble>5e-4){let n=this.clock,i=this.rumble;e.position.y+=(Math.sin(n*37)*.6+Math.sin(n*61.3)*.4)*i,e.position.x+=(Math.sin(n*29.1+1.3)*.5+Math.sin(n*53.7)*.3)*i*.6}e.lookAt(this.look)}update(t,e){this.compute(t,e),this.mode===2?(this.pos.copy(this.desired),this.look.copy(this.target)):this.mode===3?(this.pos.lerp(this.desired,1-Math.exp(-3*e)),this.look.lerp(this.target,1-Math.exp(-10*e))):(this.pos.x=Oo(this.pos.x,this.desired.x,9,e),this.pos.z=Oo(this.pos.z,this.desired.z,9,e),this.pos.y=Oo(this.pos.y,this.desired.y,6,e),this.look.lerp(this.target,1-Math.exp(-12*e)));let n=Math.min(Math.abs(t.speed)/60,1)*12,i=(this.mode===2?68:this.mode===3?40:this.baseFov)+(this.mode===3?0:n+(t.boosting?7:0));this.camera.fov=Oo(this.camera.fov,i,3,e),this.camera.updateProjectionMatrix(),this.clock+=e;let r=Se.clamp((Math.abs(t.speed)-26)/40,0,1),o=t.surface==="road"?1:2.2;this.rumble=this.mode===3?0:(r*.02+(t.boosting?.014:0))*o*(this.mode===2?.6:1),t.boosting&&(this.shake=Math.max(this.shake,.02)),this.apply(e)}orbit(t,e){let n=t.group.position,i=2.25+Math.sin(e*.05)*.5;this.camera.position.set(n.x+Math.sin(i)*9.5,n.y+1.6+Math.sin(e*.11)*.25,n.z+Math.cos(i)*9.5),this.camera.fov=42,this.camera.updateProjectionMatrix(),this.camera.lookAt(n.x-1.5,n.y+1.1,n.z-2)}};function _d(s){return Math.atan2(Math.sin(s),Math.cos(s))}var si=[];for(let s=0;s<Zt.length;s++)for(let t=0;t<$t.length;t++)si.push({x:Zt[s],z:$t[t],i:s,j:t});var Bo=(s,t)=>s>=0&&t>=0&&s<Zt.length&&t<$t.length?s*$t.length+t:-1;function Md(s,t){let e=null;return Zt.forEach((n,i)=>{let r=Math.min(Math.max(t,$t[0]),$t[$t.length-1]),o=Math.hypot(s-n,t-r);if(!e||o<e.d){let a=$t.findIndex(h=>h>=r);a<0&&(a=$t.length-1);let c=$t[a]===r?a:Math.max(0,a-1);e={d:o,x:n,z:r,ends:[Bo(i,c),Bo(i,a)]}}}),$t.forEach((n,i)=>{let r=Math.min(Math.max(s,Zt[0]),Zt[Zt.length-1]),o=Math.hypot(s-r,t-n);if(o<e.d){let a=Zt.findIndex(h=>h>=r);a<0&&(a=Zt.length-1);let c=Zt[a]===r?a:Math.max(0,a-1);e={d:o,x:r,z:n,ends:[Bo(c,i),Bo(a,i)]}}}),e}function nu(s,t,e,n){let i=Md(s,t),r=Md(e,n),o=si.length,a=o,c=o+1,h=m=>m===a?i:m===c?r:si[m],l=m=>{if(m===a)return i.ends.map(_=>[_,Math.hypot(si[_].x-i.x,si[_].z-i.z)]);let p=[];if(m<o){let{i:_,j:S}=si[m];for(let[M,w]of[[1,0],[-1,0],[0,1],[0,-1]]){let R=Bo(_+M,S+w);R>=0&&p.push([R,Math.hypot(si[R].x-si[m].x,si[R].z-si[m].z)])}r.ends.includes(m)&&p.push([c,Math.hypot(r.x-si[m].x,r.z-si[m].z)])}return p};if(i.ends[0]===r.ends[0]&&i.ends[1]===r.ends[1])return[[s,t],[i.x,i.z],[r.x,r.z],[e,n]];let d=new Map([[a,0]]),u=new Map,g=new Set;for(;;){let m=-1,p=1/0;for(let[_,S]of d)!g.has(_)&&S<p&&(m=_,p=S);if(m<0||m===c)break;g.add(m);for(let[_,S]of l(m)){let M=p+S;M<(d.get(_)??1/0)&&(d.set(_,M),u.set(_,m))}}let x=[];for(let m=c;m!==void 0;m=u.get(m)){let p=h(m);if(x.unshift([p.x,p.z]),m===a)break}return x.unshift([s,t]),x.push([e,n]),x}function bd(s){let t=0;for(let e=1;e<s.length;e++)t+=Math.hypot(s[e][0]-s[e-1][0],s[e][1]-s[e-1][1]);return t}var iu=s=>document.getElementById(s),Ce={x0:-760,x1:420,z0:-640,z1:640};function ky(s){let t=document.createElement("canvas");t.width=Ce.x1-Ce.x0,t.height=Ce.z1-Ce.z0;let e=t.getContext("2d");e.translate(-Ce.x0,-Ce.z0),e.fillStyle="#16343f",e.fillRect(Ce.x0,Ce.z0,t.width,t.height),e.fillStyle="#1e2a2e",e.fillRect($n,Ce.z0,Ce.x1-$n,t.height),e.fillStyle="#6d6047",e.fillRect($n,Ce.z0,cn-$n,t.height),e.fillStyle="#2d4433",e.fillRect(cn,Ce.z0,nn.to-cn,t.height),e.fillStyle="#29353a";for(let n of wi)for(let i of Ti)e.fillRect(n-ii/2,i-ii/2,ii,ii);e.fillStyle="#2f4a35";for(let[n,i]of[[-80,80],[240,400]])e.fillRect(n-55,i-55,110,110);e.fillStyle="#3e4f56";for(let n of s)e.fillRect(n.x-n.w,n.z-n.d,n.w*2,n.d*2);e.fillStyle="#5b6b6e";for(let n of Zt)e.fillRect(n-jt,$t[0]-jt,jt*2,$t[$t.length-1]-$t[0]+jt*2);for(let n of $t)e.fillRect(Zt[0]-jt,n-jt,Zt[Zt.length-1]-Zt[0]+jt*2,jt*2);return e.fillStyle="#7d6a52",e.fillRect(ee.x1,ee.z-ee.halfWidth,ee.rampStart-ee.x1,ee.halfWidth*2),t}var gc=class{constructor(t){this.canvas=iu("minimap"),this.ctx=this.canvas.getContext("2d"),this.mapImage=ky(t),this.expanded=!1,this.route=null,this.routeKey="",this.routeAt=[0,0],this.raceRoute=null,this.els={};for(let e of["speed","gear","tach-fill","boost-fill","district","road-name","heading","race-time","checkpoint-distance","clock","rpm-readout"])this.els[e]=iu(e);this.last={}}set(t,e){this.last[t]!==e&&(this.last[t]=e,this.els[t]&&(this.els[t].textContent=e))}updateRoute(t,e){let n=null;if(e.mode==="race"&&e.checkpoint<e.route.length?n=e.route[e.checkpoint]:e.waypoint&&(n=e.waypoint),!n){this.route=null,this.routeKey="";return}let i=n.join(",")+(e.mode==="race"?":"+e.checkpoint:""),r=Math.hypot(t.x-this.routeAt[0],t.z-this.routeAt[1]);if(i!==this.routeKey||r>12)if(this.route=nu(t.x,t.z,n[0],n[1]),this.routeKey=i,this.routeAt=[t.x,t.z],e.mode==="race"){let o=[];for(let a=e.checkpoint;a<e.route.length-1;a++)o.push(nu(...e.route[a],...e.route[a+1]));this.raceRoute=o}else this.raceRoute=null}get routeDistance(){return this.route?bd(this.route):0}setWanted(t,e){let n=t+(e?"e":"");if(this.last.wanted===n)return;this.last.wanted=n;let i=iu("wanted");i.classList.toggle("hidden",t===0),i.classList.toggle("evading",e),i.querySelectorAll("i").forEach((r,o)=>r.classList.toggle("on",o<t))}update(t,e,n,i,r){let o=Math.round(t.kmh);this.set("speed",String(o).padStart(3,"0")),this.set("gear",t.gear<0?"R":o<1&&!t.throttle?"N":String(t.gear));let a=t.def?.redline??7400;this.els["tach-fill"].style.width=Math.min(100,t.rpm/a*100).toFixed(1)+"%",this.els["tach-fill"].classList.toggle("redline",t.rpm>a-800),this.els["boost-fill"].style.width=t.nitro.toFixed(1)+"%",this.els["boost-fill"].classList.toggle("active",t.boosting),this.set("rpm-readout",(t.rpm/1e3).toFixed(1));let[c]=Jl(t.x,t.z);this.set("district",c),this.set("road-name",Xf(t.x,t.z));let h=["N","NW","W","SW","S","SE","E","NE"];this.set("heading",h[(Math.round(t.heading/(Math.PI/4))%8+8)%8]),this.set("clock",i.clockLabel),this.updateRoute(t,e),e.mode==="race"&&(this.set("race-time",xc(e.raceTime)),e.route[e.checkpoint]&&this.set("checkpoint-distance",Math.round(this.routeDistance)+" M")),r&&this.setWanted(r.level,r.evading),this.drawMap(t,e,n,r)}pick(t,e,n){if(!this.expanded)return;let i=this.canvas.getBoundingClientRect(),r=(t-i.left)/i.width*this.canvas.width,o=(e-i.top)/i.height*this.canvas.height,a=Math.min(this.canvas.width/(Ce.x1-Ce.x0),this.canvas.height/(Ce.z1-Ce.z0)),c=(r-this.canvas.width/2)/a+(Ce.x0+Ce.x1)/2,h=(o-this.canvas.height/2)/a+(Ce.z0+Ce.z1)/2;n.waypoint&&Math.hypot(n.waypoint[0]-c,n.waypoint[1]-h)<30?n.waypoint=null:n.waypoint=[Math.min(Math.max(c,Zt[0]),Zt[Zt.length-1]),Math.min(Math.max(h,$t[0]),$t[$t.length-1])],this.routeKey=""}polyline(t,e){t.beginPath(),e.forEach(([n,i],r)=>r?t.lineTo(n,i):t.moveTo(n,i)),t.stroke()}drawMap(t,e,n,i){let{canvas:r,ctx:o}=this;if(this.expanded){let d=r.getBoundingClientRect(),u=Math.min(devicePixelRatio||1,2),g=Math.round(d.width*u),x=Math.round(d.height*u);g>0&&x>0&&(r.width!==g||r.height!==x)&&(r.width=g,r.height=x)}let a=r.width,c=r.height;if(o.setTransform(1,0,0,1,0,0),o.fillStyle="#16343f",o.fillRect(0,0,a,c),o.save(),this.expanded){let d=Math.min(a/(Ce.x1-Ce.x0),c/(Ce.z1-Ce.z0));o.translate(a/2,c/2),o.scale(d,d),o.translate(-(Ce.x0+Ce.x1)/2,-(Ce.z0+Ce.z1)/2)}else o.translate(a/2,c*.62),o.scale(.85,.85),o.rotate(t.heading),o.translate(-t.x,-t.z);o.drawImage(this.mapImage,Ce.x0,Ce.z0);let h=this.expanded?1.6:1;if(o.lineJoin=o.lineCap="round",this.raceRoute){o.strokeStyle="#ffc68650",o.lineWidth=5*h;for(let d of this.raceRoute)this.polyline(o,d)}if(this.route){let d=e.mode==="race"?"#ffb46b":"#c690ff";o.strokeStyle="#0b141acc",o.lineWidth=11*h,this.polyline(o,this.route),o.strokeStyle=d,o.lineWidth=7*h,this.polyline(o,this.route)}o.fillStyle="#c9d3d6";for(let d of n.cars)d.police||o.fillRect(d.x-2.5,d.z-2.5,5,5);let l=Math.floor(performance.now()/180)%2;for(let d of n.police){let u=d.mode==="chase";u&&i&&(o.fillStyle=i.evading?"#3a6cff14":"#ff3a4a12",o.beginPath(),o.arc(d.x,d.z,i.sightRange(),0,Math.PI*2),o.fill()),o.fillStyle=u?l?"#ff4458":"#4a7dff":"#5f8dff",o.beginPath(),o.arc(d.x,d.z,(u?6:4)*h,0,Math.PI*2),o.fill()}if(e.mode==="race"&&e.checkpoint<e.route.length&&e.route.forEach(([d,u],g)=>{g<e.checkpoint||(o.beginPath(),o.arc(d,u,(g===e.checkpoint?11:6)*h,0,Math.PI*2),o.fillStyle=g===e.checkpoint?"#ffc686":"#ffc68677",o.fill(),this.expanded&&(o.fillStyle="#17212a",o.font="700 22px Barlow, Arial",o.textAlign="center",o.textBaseline="middle",o.fillText(String(g+1),d,u+1)))}),e.waypoint&&e.mode!=="race"){let[d,u]=e.waypoint;o.fillStyle="#c690ff",o.beginPath(),o.arc(d,u-14*h,9*h,Math.PI,0),o.lineTo(d,u),o.closePath(),o.fill(),o.fillStyle="#ffffff",o.beginPath(),o.arc(d,u-14*h,3.5*h,0,Math.PI*2),o.fill()}o.translate(t.x,t.z),o.rotate(-t.heading);let f=this.expanded?2.4:1;if(o.shadowColor="#000",o.shadowBlur=8,o.fillStyle="#ff8a52",o.beginPath(),o.moveTo(0,-13*f),o.lineTo(8*f,9*f),o.lineTo(0,4*f),o.lineTo(-8*f,9*f),o.closePath(),o.fill(),o.restore(),this.expanded&&(o.fillStyle="#fff4dccc",o.font="600 20px Barlow, Arial",o.textAlign="left",o.textBaseline="top",o.fillText(e.mode==="race"?"SUNSET RUN \xB7 FOLLOW THE ORANGE LINE":"CLICK THE MAP TO SET A WAYPOINT \xB7 CLICK IT AGAIN TO CLEAR",24,22),o.fillStyle="#5f8dff",o.fillRect(24,c-44,14,14),o.fillStyle="#c9d3d6",o.fillRect(170,c-44,14,14),o.fillStyle="#fff4dccc",o.fillText("POLICE",46,c-46),o.fillText("TRAFFIC",192,c-46)),!this.expanded){let d=t.heading,u=a/2+Math.sin(-d)*-(c*.42),g=c*.62-Math.cos(d)*(c*.42);o.fillStyle="#fff4dc",o.font="600 22px Barlow, Arial",o.textAlign="center",o.textBaseline="middle",o.fillText("N",Math.min(a-16,Math.max(16,u)),Math.min(c-16,Math.max(16,g)))}}setExpanded(t){this.expanded=t,this.canvas.width=t?1100:480,this.canvas.height=t?1100:360}};function xc(s){let t=Math.floor(s/60),e=Math.floor(s%60),n=Math.floor(s*100%100);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`}var su={v8:{pulses:4,lump:.32,tone:1,intake:.5,sub:.6,rasp:.35,redline:7400},bigblock:{pulses:4,lump:.55,tone:.72,intake:.35,sub:.9,rasp:.5,redline:6400},v10:{pulses:5,lump:.14,tone:1.45,intake:.85,sub:.35,rasp:.25,redline:8800}},Gi=[{id:"wave",name:"PACIFIC WAVE 101.4",genre:"Synthwave",bpm:100,swing:0,chords:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]},{id:"tide",name:"LOW TIDE 94.7",genre:"Lo-fi beats",bpm:82,swing:.16,chords:[[50,53,57,60,64],[55,59,62,65,69],[48,52,55,59,62],[57,61,64,67,70]]},{id:"funk",name:"KZRO 88.1 COAST FUNK",genre:"Funk",bpm:112,swing:.08,chords:[[52,55,59,62],[52,55,59,62],[57,61,64,67],[55,59,62,65]]}],Vi=s=>440*Math.pow(2,(s-69)/12),vc=class{constructor(){this.ctx=null,this.enabled=!1,this.engineDef=su.v8,this.station=-1,this.wasBoosting=!1,this.scrapeLevel=0,this.nextAmbient={horn:6,bird:2,gull:4,cricket:1,siren:30},this.sirenLevel=0}unlock(){this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.start()}start(){if(this.ctx){this.ctx.resume();return}let t;try{t=new(window.AudioContext||window.webkitAudioContext)}catch{return}this.ctx=t;let e=this.master=t.createGain();e.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,e.connect(n).connect(t.destination);let i=t.sampleRate*2,r=t.createBuffer(1,i,t.sampleRate),o=t.createBuffer(1,i,t.sampleRate),a=r.getChannelData(0),c=o.getChannelData(0),h=0;for(let u=0;u<i;u++)a[u]=Math.random()*2-1,h=(h+.02*a[u])/1.02,c[u]=h*3.5;this.noiseBuffer=r;let l=(u=r)=>{let g=t.createBufferSource();return g.buffer=u,g.loop=!0,g.start(0,Math.random()*1.5),g};this.reverb=t.createConvolver();let f=Math.floor(t.sampleRate*1.8),d=t.createBuffer(2,f,t.sampleRate);for(let u=0;u<2;u++){let g=d.getChannelData(u);for(let x=0;x<f;x++)g[x]=(Math.random()*2-1)*Math.pow(1-x/f,3.2)}this.reverb.buffer=d,this.reverbOut=t.createGain(),this.reverbOut.gain.value=.32,this.reverb.connect(this.reverbOut).connect(e),this.buildEngine(l),this.buildTires(l),this.buildWorld(l,o),this.buildRadio()}buildEngine(t){let e=this.ctx;this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.Q.value=2.2,this.engineDrive=e.createWaveShaper();let n=new Float32Array(1024);for(let c=0;c<1024;c++)n[c]=Math.tanh((c/1023*2-1)*2.6);this.engineDrive.curve=n;let i=new Float32Array(24),r=new Float32Array(24);for(let c=1;c<24;c++)r[c]=1/c*(c%2?1:.6)*Math.exp(-c*.08);let o=e.createPeriodicWave(i,r);this.oscs=[],this.subGain=e.createGain();for(let[c,h,l]of[[1,.55,"wave"],[1.006,.3,"sawtooth"],[.5,1,"sine"]]){let f=e.createOscillator();l==="wave"?f.setPeriodicWave(o):f.type=l;let d=e.createGain();d.gain.value=h,f.connect(d).connect(c===.5?this.subGain:this.engineDrive),f.start(),this.oscs.push([f,c])}this.subGain.connect(this.engineDrive);let a=e.createGain();this.lumpOsc=e.createOscillator(),this.lumpOsc.type="triangle",this.lumpDepth=e.createGain(),this.lumpOsc.connect(this.lumpDepth).connect(a.gain),this.lumpOsc.start(),this.engineDrive.connect(a).connect(this.engineFilter).connect(this.engineGain).connect(this.master),this.raspFilter=e.createBiquadFilter(),this.raspFilter.type="bandpass",this.raspFilter.Q.value=1.4,this.raspGain=e.createGain(),this.raspGain.gain.value=0,t().connect(this.raspFilter).connect(this.raspGain).connect(a),this.intake=e.createOscillator(),this.intake.type="square",this.intakeFilter=e.createBiquadFilter(),this.intakeFilter.type="bandpass",this.intakeFilter.Q.value=3,this.intakeGain=e.createGain(),this.intakeGain.gain.value=0,this.intake.connect(this.intakeFilter).connect(this.intakeGain).connect(this.engineGain),this.intake.start(),this.whine=e.createOscillator(),this.whine.type="sine",this.whineGain=e.createGain(),this.whineGain.gain.value=0,this.whine.connect(this.whineGain).connect(this.master),this.whine.start(),this.turbo=e.createOscillator(),this.turbo.type="sine",this.turboGain=e.createGain(),this.turboGain.gain.value=0,this.turbo.connect(this.turboGain).connect(this.master),this.turbo.start(),this.applyEngine()}setEngine(t){this.engineDef=su[t]||su.v8,this.applyEngine()}applyEngine(){if(!this.ctx)return;let t=this.engineDef,e=this.ctx.currentTime;this.lumpDepth.gain.setTargetAtTime(t.lump,e,.05),this.subGain.gain.setTargetAtTime(t.sub,e,.05)}buildTires(t){let e=this.ctx;this.screechFilter=e.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.value=1350,this.screechFilter.Q.value=5,this.screechGain=e.createGain(),this.screechGain.gain.value=0,t().connect(this.screechFilter).connect(this.screechGain).connect(this.master),this.squeal=e.createOscillator(),this.squeal.type="sawtooth";let n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=1100,n.Q.value=8,this.squealGain=e.createGain(),this.squealGain.gain.value=0;let i=e.createOscillator();i.frequency.value=9;let r=e.createGain();r.gain.value=22,i.connect(r).connect(this.squeal.frequency),i.start(),this.squeal.connect(n).connect(this.squealGain).connect(this.master),this.squeal.start(),this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windGain=e.createGain(),this.windGain.gain.value=0,t().connect(this.windFilter).connect(this.windGain).connect(this.master);let o=e.createBiquadFilter();o.type="highpass",o.frequency.value=2200,this.nitroGain=e.createGain(),this.nitroGain.gain.value=0,t().connect(o).connect(this.nitroGain).connect(this.master);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=220,this.roarGain=e.createGain(),this.roarGain.gain.value=0,t().connect(a).connect(this.roarGain).connect(this.master),this.scrapeFilter=e.createBiquadFilter(),this.scrapeFilter.type="bandpass",this.scrapeFilter.frequency.value=2400,this.scrapeFilter.Q.value=2.5,this.scrapeGain=e.createGain(),this.scrapeGain.gain.value=0,t().connect(this.scrapeFilter).connect(this.scrapeGain).connect(this.master)}buildWorld(t,e){let n=this.ctx,i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=520,this.surfGain=n.createGain(),this.surfGain.gain.value=0,t().connect(i).connect(this.surfGain).connect(this.master);let r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=380,this.humGain=n.createGain(),this.humGain.gain.value=0,t(e).connect(r).connect(this.humGain).connect(this.master),this.siren=n.createOscillator(),this.siren.type="sawtooth",this.siren.frequency.value=900;let o=n.createOscillator();o.frequency.value=.32;let a=n.createGain();a.gain.value=380,o.connect(a).connect(this.siren.frequency),o.start();let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=1100,c.Q.value=1.2,this.sirenGain=n.createGain(),this.sirenGain.gain.value=0,this.siren.connect(c).connect(this.sirenGain).connect(this.master),this.siren.start(),this.ambientBus=n.createGain(),this.ambientBus.gain.value=0,this.ambientBus.connect(this.master),this.ambientBus.connect(this.reverb)}setEnabled(t){this.enabled=t,t&&this.start(),this.ctx&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.1)}update(t){if(!this.ctx)return;let e=this.ctx.currentTime,{rpm:n,throttle:i,speed:r,slip:o,boosting:a,active:c,shoreDistance:h,time:l,gear:f=1,ratio:d=3,city:u=.5,night:g=0,nearTrees:x=0}=t,m=c?1:0,p=this.engineDef,_=n/60*p.pulses;for(let[b,E]of this.oscs)b.frequency.setTargetAtTime(_*E*.5,e,.025);this.lumpOsc.frequency.setTargetAtTime(n/120,e,.05);let S=n/p.redline,M=i*(.75+Math.min(Math.max(f,1),6)*.05);this.engineFilter.frequency.setTargetAtTime((220+n*.14+M*n*.3)*p.tone,e,.04),this.engineGain.gain.setTargetAtTime(m*(.065+M*.085+S*.05),e,.04),this.raspFilter.frequency.setTargetAtTime(_*3,e,.05),this.raspGain.gain.setTargetAtTime(m*p.rasp*(.15+i*.6)*.5,e,.05),this.intake.frequency.setTargetAtTime(_*2,e,.03),this.intakeFilter.frequency.setTargetAtTime(900+n*.35,e,.05),this.intakeGain.gain.setTargetAtTime(m*p.intake*i*S*S*.035,e,.05);let w=Math.abs(r);this.whine.frequency.setTargetAtTime(Math.max(40,w*d*14),e,.05),this.whineGain.gain.setTargetAtTime(m*(f>0&&f<=2?1:.25)*Math.min(w/20,1)*.006,e,.1),this.turbo.frequency.setTargetAtTime(1400+n*.55,e,.1),this.turboGain.gain.setTargetAtTime(m*i*S*S*.01,e,.1);let R=m*Math.min(Math.max(o-3,0)/10,1);this.screechGain.gain.setTargetAtTime(R*.075,e,.06),this.screechFilter.frequency.setTargetAtTime(1100+Math.min(o,20)*25,e,.1),this.squeal.frequency.setTargetAtTime(820+Math.min(o,20)*18,e,.08),this.squealGain.gain.setTargetAtTime(R*R*.05,e,.05),this.windGain.gain.setTargetAtTime(m*Math.min((w/60)**2,1)*.1,e,.2),this.windFilter.frequency.setTargetAtTime(400+w*18,e,.2),a&&!this.wasBoosting&&m&&this.whoosh(),this.wasBoosting=a,this.nitroGain.gain.setTargetAtTime(m*(a?.045:0),e,.06),this.roarGain.gain.setTargetAtTime(m*(a?.12:0),e,.1),this.scrapeGain.gain.setTargetAtTime(m*this.scrapeLevel*.09,e,.04),this.scrapeLevel*=.6;let T=Math.max(0,1-h/140),A=.55+.45*Math.sin(l*.7)*Math.sin(l*.23+1);this.surfGain.gain.setTargetAtTime(T*A*.11,e,.3),this.humGain.gain.setTargetAtTime(m*(.025+u*.05)*(1-g*.55),e,.6),this.ambientBus.gain.setTargetAtTime(m,e,.4),this.sirenGain.gain.setTargetAtTime(m*this.sirenLevel*.05,e,.15),m&&this.ambient(l,{city:u,night:g,surfNear:T,nearTrees:x}),this.radioActive=c,this.radioTick(c)}ambient(t,{city:e,night:n,surfNear:i,nearTrees:r}){let o=this.nextAmbient;t>o.horn&&(o.horn=t+7+Math.random()*16/(.4+e),this.horn(60+Math.random()*140,!0)),n<.5&&t>o.bird&&(o.bird=t+2+Math.random()*6,(r>.2||Math.random()<.3)&&this.chirp()),n<.5&&i>.3&&t>o.gull&&(o.gull=t+5+Math.random()*9,this.gull()),n>.5&&t>o.cricket&&(o.cricket=t+.7+Math.random()*1.6,this.cricket(e)),t>o.siren&&(o.siren=t+40+Math.random()*60,e>.4&&this.distantSiren())}burst(t,e,n,i,r=1,o=this.master,a=0){if(!this.ctx||!this.enabled)return;let c=this.ctx,h=c.currentTime+a,l=c.createBufferSource();l.buffer=this.noiseBuffer;let f=c.createBiquadFilter();f.type=e,f.frequency.value=n,f.Q.value=r;let d=c.createGain();d.gain.setValueAtTime(i,h),d.gain.exponentialRampToValueAtTime(1e-4,h+t),l.connect(f).connect(d).connect(o),l.start(h,Math.random()),l.stop(h+t+.05)}tone(t,e,n,i,{dest:r=this.master,when:o=0,attack:a=.005,slideTo:c=0,q:h=0,filter:l=0}={}){if(!this.ctx||!this.enabled)return;let f=this.ctx,d=f.currentTime+o,u=f.createOscillator();u.type=t,u.frequency.setValueAtTime(e,d),c&&u.frequency.exponentialRampToValueAtTime(c,d+n);let g=f.createGain();g.gain.setValueAtTime(1e-4,d),g.gain.linearRampToValueAtTime(i,d+a),g.gain.exponentialRampToValueAtTime(1e-4,d+n);let x=u;if(l){let m=f.createBiquadFilter();m.type="bandpass",m.frequency.value=l,m.Q.value=h||2,x=u.connect(m)}x.connect(g).connect(r),u.start(d),u.stop(d+n+.05)}impact(t){if(!this.ctx||!this.enabled)return;let e=this.ctx.currentTime;if(e-(this.lastImpact||0)<.07)return;this.lastImpact=e;let n=Math.min(t/20,1);this.burst(.35+n*.3,"lowpass",300+n*900,.25+n*.6),this.tone("sine",70+n*30,.25,.25*n+.08,{slideTo:40});for(let i of[1,2.76,5.4])this.tone("triangle",420*i*(.9+Math.random()*.2),.18+n*.4,.04*n/i+.01,{filter:420*i,q:12});if(n>.4)for(let i=0;i<6;i++)this.tone("sine",3e3+Math.random()*4e3,.08+Math.random()*.1,.02*n,{when:.02+Math.random()*.2})}scrape(t){this.scrapeLevel=Math.max(this.scrapeLevel,Math.min(t/25,1)),this.ctx&&this.scrapeFilter.frequency.setTargetAtTime(1800+Math.random()*1600,this.ctx.currentTime,.02)}whoosh(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuffer;let i=t.createBiquadFilter();i.type="bandpass",i.Q.value=1.6,i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(3800,e+.45);let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.32,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+.9),n.connect(i).connect(r).connect(this.master),n.start(e,Math.random()),n.stop(e+1)}backfire(){!this.ctx||!this.enabled||(this.burst(.09,"lowpass",900,.35),this.tone("square",60,.08,.08))}shift(t){t&&this.burst(.18,"highpass",1800,.07)}horn(t,e=!1){if(!this.ctx||!this.enabled)return;let n=this.ctx,i=n.currentTime,r=Math.min(.12,6/Math.max(t,6)*.12)*(e?.6:1),o=e?.3+Math.random()*.5:.45,a=n.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(r,i+.02),a.gain.setValueAtTime(r,i+o),a.gain.linearRampToValueAtTime(0,i+o+.1);let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=e?900:1800;let h=e?300+Math.random()*120:349;for(let l of[h,h*1.26]){let f=n.createOscillator();f.type="square",f.frequency.value=l,f.connect(c),f.start(i),f.stop(i+o+.15)}c.connect(a).connect(e?this.ambientBus:this.master)}chirp(){let t=2600+Math.random()*2200,e=2+Math.floor(Math.random()*4);for(let n=0;n<e;n++)this.tone("sine",t*(1+Math.random()*.1),.07,.012,{dest:this.ambientBus,when:n*.11,slideTo:t*1.35})}gull(){for(let t=0;t<2+Math.floor(Math.random()*2);t++)this.tone("sawtooth",1500,.32,.01,{dest:this.ambientBus,when:t*.38,slideTo:900,filter:1400,q:3})}cricket(t){let e=4300+Math.random()*500,n=.006*(1.2-t*.8);for(let i=0;i<3;i++)this.tone("sine",e,.035,n,{dest:this.ambientBus,when:i*.06})}distantSiren(){if(!this.ctx||!this.enabled)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle";let i=t.createOscillator();i.frequency.value=.35;let r=t.createGain();r.gain.value=220,n.frequency.value=780,i.connect(r).connect(n.frequency);let o=t.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.012,e+2),o.gain.linearRampToValueAtTime(0,e+8),n.connect(o).connect(this.ambientBus),n.start(e),i.start(e),n.stop(e+8.2),i.stop(e+8.2)}setSiren(t){this.sirenLevel=t}chime(t=!1){if(!this.ctx||!this.enabled)return;let e=this.ctx,n=e.currentTime;(t?[523.25,659.25,783.99,1046.5]:[659.25,987.77]).forEach((r,o)=>{let a=e.createOscillator();a.type="triangle",a.frequency.value=r;let c=e.createGain(),h=n+o*.09;c.gain.setValueAtTime(0,h),c.gain.linearRampToValueAtTime(.12,h+.01),c.gain.exponentialRampToValueAtTime(1e-4,h+.6),a.connect(c).connect(this.master),a.start(h),a.stop(h+.65)})}countBeep(t=!1){this.tone("square",t?880:440,t?.5:.18,.06,{filter:t?1800:900,q:1})}buildRadio(){let t=this.ctx;this.radioGain=t.createGain(),this.radioGain.gain.value=0;let e=t.createBiquadFilter();e.type="highpass",e.frequency.value=55;let n=t.createBiquadFilter();n.type="highshelf",n.frequency.value=7e3,n.gain.value=-5,this.radioIn=t.createGain(),this.radioIn.connect(e).connect(n).connect(this.radioGain).connect(this.master),this.radioSend=t.createGain(),this.radioSend.gain.value=.5,this.radioSend.connect(this.reverb),this.radioStep=0,this.radioNext=0,this.radioActive=!1,setInterval(()=>this.radioTick(this.radioActive),40)}get stationName(){return this.station<0?"RADIO OFF":Gi[this.station].name}setStation(t){this.station=t,this.ctx&&(this.radioStep=0,this.radioNext=this.ctx.currentTime+.25,this.burst(.28,"bandpass",2200,.08,.7))}nextStation(){return this.setStation(this.station+1>=Gi.length?-1:this.station+1),this.stationName}radioTick(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=t&&this.station>=0&&this.enabled;if(this.radioGain.gain.setTargetAtTime(n?.75:0,e,.15),!n){this.radioNext=0;return}let i=Gi[this.station],r=60/i.bpm/4;for(this.radioNext<e&&(this.radioNext=e+.05);this.radioNext<e+.3;){let o=this.radioStep,a=o%2?i.swing*r:0;this.playStep(i,o,this.radioNext+a,r),this.radioNext+=r,this.radioStep++}}playStep(t,e,n,i){let r=Math.max(0,n-this.ctx.currentTime),o=Math.floor(e/16),a=e%16,c=t.chords[o%t.chords.length],h=c[0],l=u=>{let g=Math.sin((e+u*31.7)*12.9898+this.station*7.1)*43758.5453;return g-Math.floor(g)},f=this.radioIn,d=this.radioSend;if(t.id==="wave"){a%4===0&&this.kick(r,.5),(a===4||a===12)&&this.snare(r,.28,!0),a%2===0&&this.hat(r,.05,!1),a%2===0&&this.synth("sawtooth",Vi(h-24),i*1.8,.11,r,{cutoff:700,env:900});let u=[0,1,2,1,0,2,1,2];if(this.synth("square",Vi(c[u[a%8]]+12),i*.9,.03,r,{cutoff:2400,env:1200,send:.6}),a===0)for(let g of c)this.synth("sawtooth",Vi(g),i*15,.022,r,{cutoff:1300,attack:.4,detune:9,send:1});if(o%4>=2&&[0,3,6,10,12].includes(a)){let g=[0,3,5,7,10,12];this.synth("sawtooth",Vi(h+12+g[Math.floor(l(1)*g.length)]),i*2.6,.035,r,{cutoff:3e3,env:0,send:.8,detune:6})}}else if(t.id==="tide"){if((a===0||a===7||a===10)&&this.kick(r,.42),(a===4||a===12)&&this.snare(r,.16,!1),a%2===0&&this.hat(r,.025+l(2)*.015,!1),a===0||a===6)for(let u of c)this.synth("sine",Vi(u),i*7,.03,r+l(3)*.02,{cutoff:1800,attack:.01,trem:!0,send:.7});(a===0||a===10)&&this.synth("sine",Vi(h-12),i*5,.16,r,{cutoff:400}),l(4)<.35&&this.burst(.01,"highpass",3e3,.02+l(5)*.03,1,f,r),a===0&&this.burst(i*16,"bandpass",1200,.004,.4,f,r)}else{(a===0||a===6||a===8||a===11)&&this.kick(r,.45),(a===4||a===12)&&this.snare(r,.24,!1),this.hat(r,a%4===2?.06:.03,a%4===2);let g=[0,null,12,0,null,0,10,null,0,null,12,7,null,0,10,12][a];if(g!==null&&this.synth("square",Vi(h-24+g),i*.8,.09,r,{cutoff:500,env:1400}),[2,7,10,14].includes(a))for(let x of c.slice(1))this.synth("square",Vi(x+12),i*.5,.018,r,{cutoff:2600,env:2e3,q:6});if(o%8===7&&(a===0||a===3))for(let x of c)this.synth("sawtooth",Vi(x+12),i*2,.025,r,{cutoff:2200,send:.6,detune:12})}}synth(t,e,n,i,r,{cutoff:o=2e3,env:a=0,attack:c=.005,detune:h=0,send:l=0,trem:f=!1,q:d=1}={}){let u=this.ctx,g=u.currentTime+r,x=u.createBiquadFilter();x.type="lowpass",x.Q.value=d,x.frequency.setValueAtTime(o+a,g),a&&x.frequency.exponentialRampToValueAtTime(Math.max(o,60),g+Math.min(n,.3));let m=u.createGain();m.gain.setValueAtTime(1e-4,g),m.gain.linearRampToValueAtTime(i,g+c),m.gain.setValueAtTime(i,g+Math.max(c,n*.6)),m.gain.exponentialRampToValueAtTime(1e-4,g+n+.08);for(let _ of h?[-h,h]:[0]){let S=u.createOscillator();S.type=t,S.frequency.value=e,S.detune.value=_,S.connect(x),S.start(g),S.stop(g+n+.12)}let p=x.connect(m);if(f){let _=u.createGain(),S=u.createOscillator();S.frequency.value=4.5;let M=u.createGain();M.gain.value=.25,S.connect(M).connect(_.gain),S.start(g),S.stop(g+n+.12),p=p.connect(_)}if(p.connect(this.radioIn),l){let _=u.createGain();_.gain.value=l,p.connect(_).connect(this.radioSend)}}kick(t,e){let n=this.ctx,i=n.currentTime+t,r=n.createOscillator();r.frequency.setValueAtTime(140,i),r.frequency.exponentialRampToValueAtTime(42,i+.12);let o=n.createGain();o.gain.setValueAtTime(e,i),o.gain.exponentialRampToValueAtTime(1e-4,i+.38),r.connect(o).connect(this.radioIn),r.start(i),r.stop(i+.4)}snare(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=1400;let c=i.createGain(),h=n?.32:.16;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c),c.connect(this.radioIn),n&&c.connect(this.radioSend),o.start(r,Math.random()),o.stop(r+h+.05);let l=i.createOscillator();l.type="triangle",l.frequency.setValueAtTime(220,r),l.frequency.exponentialRampToValueAtTime(150,r+.08);let f=i.createGain();f.gain.setValueAtTime(e*.6,r),f.gain.exponentialRampToValueAtTime(1e-4,r+.1),l.connect(f).connect(this.radioIn),l.start(r),l.stop(r+.12)}hat(t,e,n){let i=this.ctx,r=i.currentTime+t,o=i.createBufferSource();o.buffer=this.noiseBuffer;let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=7500;let c=i.createGain(),h=n?.22:.045;c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+h),o.connect(a).connect(c).connect(this.radioIn),o.start(r,Math.random()),o.stop(r+h+.05)}};var yc=class{constructor(){this.keys=new Set,this.state={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},this.padButtons=new Set,this.onPadPress=null}clear(){this.keys.clear()}poll(){let t=this.keys,e=t.has("KeyW")||t.has("ArrowUp")?1:0,n=t.has("KeyS")||t.has("ArrowDown")?1:0,i=(t.has("KeyA")||t.has("ArrowLeft")?1:0)-(t.has("KeyD")||t.has("ArrowRight")?1:0),r=t.has("Space"),o=t.has("ShiftLeft")||t.has("ShiftRight"),a=navigator.getGamepads?navigator.getGamepads():[];for(let c of a){if(!c||!c.connected)continue;let h=c.axes[0]||0;Math.abs(h)>.12&&(i=-Math.sign(h)*((Math.abs(h)-.12)/.88)**1.4);let l=c.buttons[7]?.value||0,f=c.buttons[6]?.value||0;e=Math.max(e,l),n=Math.max(n,f),r=r||!!c.buttons[0]?.pressed,o=o||!!c.buttons[1]?.pressed||!!c.buttons[2]?.pressed;for(let[d,u]of[[3,"camera"],[9,"pause"],[8,"map"],[5,"reset"]]){let g=!!c.buttons[d]?.pressed,x=c.index+":"+d;g&&!this.padButtons.has(x)&&this.onPadPress?.(u),g?this.padButtons.add(x):this.padButtons.delete(x)}}return Object.assign(this.state,{throttle:e,brake:n,steer:i,handbrake:r,nitro:o}),this.state}};var Ut=s=>document.getElementById(s),Hy={DOWNTOWN:1,"PALM DISTRICT":.65,SEAVIEW:.5,SOUTHBANK:.4,"OCEAN DRIVE":.3},Vy=matchMedia("(pointer:coarse)").matches,Mn={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{localStorage.setItem(s,t)}catch{}}};function Sd(s){Ut("loading").classList.add("hidden"),Ut("error").classList.remove("hidden"),console.error(s)}async function Gy(){let s;try{if(s=new ql(Ut("world")),!s.renderer.capabilities.isWebGL2)throw new Error("WebGL 2 unavailable")}catch(O){Sd(O);return}let t=s.renderer,e=new Ms,n=new hn(55,innerWidth/innerHeight,.1,3200);n.layers.enable(1),s.init(e,n);let i=O=>(Ut("loading-step").textContent=O,new Promise(wt=>setTimeout(wt,0)));await i("Painting the sky\u2026");let r=new Zl(t,e);await i("Paving the boulevards\u2026"),qf(e,t),await i("Raising the skyline\u2026");let o=Qf(e,t);await i("Rolling in the surf\u2026");let a=jf(e,t);await i("Planting palms\u2026");let c=ed(e,t),h=new oc,l=nd(e,t,a.pier.lamps,h),f=hd(e,t,h,l.lamps,c.trunkColliders.filter(O=>Math.abs(O.z)<600&&O.x<360));await i("Fueling up\u2026");let d=Mn.get("pacific-car");ks[d]||(d="coupe");let u=new nc(e,t,d),g=new uc(e,t),x=new dc(e),m=yd(e,t),p=new pc(e),_=new ze,S=Io(16761466,.9),M=new pe(1.1,1.1,40,20,1,!0);M.translate(0,20,0);let w=[-1,1].map(O=>{let wt=new Pt(M,S);return wt.userData.noAO=!0,wt.layers.set(1),_.add(wt),{mesh:wt,side:O}}),R=new en({color:new Et(3,1.8,.8),transparent:!0,opacity:.8,depthWrite:!1,blending:Nn}),T=new Pt(new so(Kl-.6,Kl,72),R);T.rotation.x=-Math.PI/2,T.position.y=.06,T.userData.noAO=!0,_.add(T);let A=new Pt(new _i(1.6,2.6,3),new en({color:new Et(4,2.4,1.1)}));A.rotation.z=Math.PI,A.userData.noAO=!0,_.add(A),_.visible=!1,e.add(_);let b={colliders:o.colliders,boxes:[...o.colliders,...f.solids],circles:[...c.trunkColliders,...l.circles,...f.circles],piles:(ee.piles||[]).map(([O,wt])=>({x:O,z:wt,r:.45}))};g.world=b,Gf(e);let E=new cc(g,o.colliders),D=new mc(n),F=new gc(o.colliders),B=new vc,Z=new yc,I={state:"intro",paused:!1,mode:"free",raceTime:0,checkpoint:0,route:Ai,countdown:0,splits:[],topSpeed:0,crashes:0,waypoint:null,lastX:vn.x,lastZ:vn.z,time:0,frame:0,flash:0},X=Mn.get("pacific-quality")||(Vy?"medium":"high");["ultra","high","medium","low"].includes(X)||(X="high");let V=Mn.get("pacific-time")||"cycle",k=Mn.get("pacific-road")||"auto";!(V in $l)&&V!=="cycle"&&(V="golden");function j(O){X=O,Mn.set("pacific-quality",O),s.setQuality(O);let wt=s.quality;r.setShadowQuality(wt.shadow,wt.shadowRange),a.setReflections(wt.reflections>0,wt.reflections),Ut("quality").value=O}s.onResize=()=>a.resize(s.quality.reflections);let xt=!1;function yt(O){V=O,Mn.set("pacific-time",O),r.cycle=O==="cycle",O!=="cycle"?r.setHours($l[O]):xt||r.setHours(18.95),xt=xt||O==="cycle",r.envDirty=!0,Ut("time-select").value=O}u.reset(vn.x,vn.z,vn.heading);let Rt=Mn.get("pacific-color");Rt&&re(Rt),j(X),yt(V);let te;function Wt(O){let wt=Ut("toast");wt.textContent=O,wt.classList.add("show"),clearTimeout(te),te=setTimeout(()=>wt.classList.remove("show"),2400)}function re(O){u.setColor(O),Mn.set("pacific-color",O),document.querySelectorAll(".swatch").forEach(wt=>{let Qt=wt.dataset.color===O;wt.classList.toggle("active",Qt),wt.setAttribute("aria-pressed",String(Qt))})}function at(O,wt=!1){if(!ks[O])return;d=O,Mn.set("pacific-car",O);let Qt=ks[O];if(u.key!==O){let{x:fe,z:we,heading:Me}=u;u.setModel(O),u.reset(fe,we,Me),D.snap?.(u)}Ut("car-name").textContent=Qt.name,Ut("car-blurb").textContent=Qt.blurb,Ut("hud-car").textContent=Qt.name,Ut("car-menu").value=O;for(let fe of["speed","accel","grip"])Ut(`stat-${fe}`).style.width=`${Math.round(Qt.stats[fe]*100)}%`;B.setEngine?.(Qt.engine),wt&&Wt(Qt.name)}let ct=O=>at(Lo[(Lo.indexOf(d)+O+Lo.length)%Lo.length]),At=[],tt=0;function dt({item:O,x:wt,z:Qt,speed:fe,nx:we,nz:Me}){I.time-tt>.08&&(B.impact(Math.min(2+fe*.35,O.type==="lamp"?9:6)),tt=I.time),D.shake=Math.max(D.shake,O.type==="lamp"?.22:.08);let De=O.sparks?14:4;for(let Ze=0;Ze<De;Ze++)O.sparks?m.sparks.emit(wt,Jt+.4+pt()*.5,Qt,we*3+(pt()-.5)*6,1+pt()*4,Me*3+(pt()-.5)*6,.1+pt()*.08,.3+pt()*.4,1,6,3.2,1):m.dust.emit(wt,Jt+.3,Qt,(pt()-.5)*3,pt()*2,(pt()-.5)*3,.5,.9,.35,.55,.5,.42);O.type==="hydrant"&&At.push({x:wt,z:Qt,t:16}),(O.type==="lamp"||O.type==="hydrant")&&Wi("vandalism",wt,Qt,1)}function bt(){if(I.checkpoint>=Ai.length)return;let[O,wt]=Ai[I.checkpoint];_.position.set(O,0,wt);let Qt=Math.abs(O-Zn(Zt,O))<1;for(let fe of w)fe.mesh.position.set(Qt?fe.side*(jt+1):0,0,Qt?0:fe.side*(jt+1));Ut("checkpoint-count").textContent=`${I.checkpoint+1} / ${Ai.length}`}function Nt(O){I.mode=O,I.state="play",I.paused=!1,Z.clear();for(let wt of["intro","intro-location","intro-footer"])Ut(wt).classList.add("hidden");Ut("hud").classList.remove("hidden"),document.body.classList.add("playing"),document.body.classList.toggle("racing",O==="race"),Ut("race").classList.toggle("hidden",O!=="race"),Ut("start-trial").classList.toggle("hidden",O==="race"),Ut("mode-label").textContent=O==="race"?"TIME TRIAL":"FREE ROAM",Ut("mission-title").textContent=O==="race"?"Follow the afterglow.":"Take the long way home.",Ut("mission-subtitle").textContent=O==="race"?`Pass through all ${Ai.length} golden checkpoints.`:"Explore Vista Pac\xEDfica at your own pace.",I.raceTime=0,I.checkpoint=0,I.splits=[],I.topSpeed=0,I.crashes=0,u.reset(vn.x,vn.z,vn.heading),I.lastX=u.x,I.lastZ=u.z,_.visible=O==="race",h.restoreAll(),E.reset(),bt(),D.snap(u),B.setEnabled(P),I.countdown=O==="race"?3.6:0,Ht(O==="race"?"3":""),O!=="race"&&Wt("WELCOME TO VISTA PAC\xCDFICA")}let U="";function Ht(O){if(O===U)return;U=O;let wt=Ut("countdown");wt.textContent=O,wt.classList.toggle("hidden",!O),wt.classList.toggle("go",O==="GO"),wt.classList.remove("pop"),wt.offsetWidth,wt.classList.add("pop"),O&&B.countBeep?.(O==="GO")}function It(O){return I.countdown<=0?!1:(I.countdown-=O,I.countdown>.6?Ht(String(Math.ceil(I.countdown-.6))):I.countdown>0?Ht("GO"):(Ht(""),I.countdown=0),I.countdown>.6)}function rt(){I.paused=!0,Z.clear(),B.chime(!0),Ut("final-time").textContent=xc(I.raceTime);let O=Number(Mn.get("pacific-best"))||null;!O||I.raceTime<O?(Mn.set("pacific-best",String(I.raceTime)),Ut("best-time").textContent="A new personal best. Make the coast remember it."):Ut("best-time").textContent="PERSONAL BEST  "+xc(O);let wt=u.distance/Math.max(I.raceTime,.1)*3.6;Ut("result-stats").innerHTML=`<span><b>${Math.round(I.topSpeed*3.6)}</b> KM/H TOP</span><span><b>${Math.round(wt)}</b> KM/H AVG</span><span><b>${I.crashes}</b> ${I.crashes===1?"CRASH":"CRASHES"}</span><span><b>${ks[d].name}</b></span>`,Ut("result").showModal(),_.visible=!1}function nt(O=!1){Ut("result").open||(I.paused=!0,Z.clear(),Ut("menu-title").textContent=O?"Make it your drive.":"Take a breather.",Ut("menu-description").textContent=O?"Tune the look of the coast to your machine.":"The coast will be right here.",Ut("resume").textContent=I.state==="intro"?"BACK TO THE COAST":"BACK TO THE DRIVE",Ut("back-title").classList.toggle("hidden",I.state==="intro"),Ut("restart-race").textContent=I.mode==="race"&&I.state==="play"?"RESTART SUNSET RUN":"START SUNSET RUN",Ut("menu").open||Ut("menu").showModal())}function Y(){Ut("menu").close(),I.paused=!1,Z.clear()}function J(O){D.mode=O??(D.mode+1)%eu.length,Ut("camera-select").value=D.mode,I.state==="play"&&(Wt(eu[D.mode]),D.snap(u))}function ht(){let O=["golden","dusk","night","dawn","noon","cycle"],wt=O[(O.indexOf(V)+1)%O.length];yt(wt),Wt({golden:"GOLDEN HOUR",dusk:"BLUE HOUR",night:"MIDNIGHT",dawn:"FIRST LIGHT",noon:"HIGH NOON",cycle:"LIVE DAY CYCLE"}[wt])}function Bt(){I.state==="play"&&(F.setExpanded(!F.expanded),document.querySelector(".map-panel").classList.toggle("expanded",F.expanded),Ut("map-button").setAttribute("aria-label",F.expanded?"Close expanded map":"Expand map"))}function Dt(){I.mode==="race"?(I.raceTime=0,I.checkpoint=0,u.reset(vn.x,vn.z,vn.heading),bt(),Wt("RUN RESTARTED")):(u.safeRespawn(),Wt("BACK ON THE ROAD")),I.lastX=u.x,I.lastZ=u.z,D.snap(u)}function y(){Y(),I.state="intro",_.visible=!1,document.body.classList.remove("playing","racing"),Ut("hud").classList.add("hidden"),F.expanded&&v(!1);for(let O of["intro","intro-location","intro-footer"])Ut(O).classList.remove("hidden");u.reset(vn.x,vn.z,vn.heading)}function v(O){F.setExpanded(O),document.querySelector(".map-panel").classList.toggle("expanded",O)}let P=Mn.get("pacific-sound")!=="off";function N(){Ut("sound").setAttribute("aria-label",P?"Mute sound":"Enable sound"),Ut("sound").querySelector("span").style.display=P?"none":"block"}N(),Ut("drive").onclick=()=>Nt("free"),Ut("trial").onclick=()=>Nt("race"),Ut("start-trial").onclick=()=>Nt("race"),Ut("pause").onclick=()=>nt(),Ut("settings").onclick=()=>nt(!0),Ut("close-menu").onclick=Y,Ut("resume").onclick=Y,Ut("restart-race").onclick=()=>{Y(),Nt("race")},Ut("back-title").onclick=y,Ut("menu").addEventListener("cancel",O=>{O.preventDefault(),Y()}),Ut("result").addEventListener("cancel",O=>O.preventDefault()),Ut("race-again").onclick=()=>{Ut("result").close(),Nt("race")},Ut("free-roam").onclick=()=>{Ut("result").close(),Nt("free")},Ut("quality").onchange=O=>j(O.target.value),Ut("time-select").onchange=O=>yt(O.target.value),Ut("road-select").value=k,Ut("road-select").onchange=O=>{k=O.target.value,Mn.set("pacific-road",k)},Ut("camera-select").onchange=O=>J(Number(O.target.value)),Ut("sound").onclick=()=>{P=!P,Mn.set("pacific-sound",P?"on":"off"),B.setEnabled(P&&I.state==="play"),P&&B.start(),N(),Wt(P?"SOUND ON":"SOUND OFF")},Ut("map-button").onclick=Bt,Ut("minimap").addEventListener("click",O=>F.pick(O.clientX,O.clientY,I));for(let O of document.querySelectorAll(".swatch"))O.onclick=()=>re(O.dataset.color);function H(O,wt=!0){B.setStation(O),Mn.set("pacific-radio",String(O)),Ut("radio-select").value=String(O),Ut("radio-name").textContent=O<0?"OFF":Gi[O].name,Ut("radio-genre").textContent=O<0?"Q TO TUNE":Gi[O].genre.toUpperCase(),document.querySelector(".radio").classList.toggle("off",O<0),wt&&I.state==="play"&&Wt(O<0?"RADIO OFF":`\u266A ${Gi[O].name}`)}Ut("radio-select").onchange=O=>H(Number(O.target.value),!1);let z=Mn.get("pacific-fps")==="on",Q=Ut("fps"),W={frames:0,time:0,worst:0};function ot(O){z=O,Mn.set("pacific-fps",O?"on":"off"),Ut("fps-select").value=O?"on":"off",Q.classList.toggle("hidden",!O)}Ut("fps-select").onchange=O=>ot(O.target.value==="on"),ot(z);let ut=Number(Mn.get("pacific-radio")??0);H(Number.isInteger(ut)&&ut<Gi.length?ut:0,!1);let K=()=>B.unlock();addEventListener("pointerdown",K,{once:!0}),addEventListener("keydown",K,{once:!0}),Ut("car-prev").onclick=()=>ct(-1),Ut("car-next").onclick=()=>ct(1),Ut("car-menu").onchange=O=>at(O.target.value,I.state==="play"),at(d);let ft=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);addEventListener("keydown",O=>{if(O.target.tagName!=="SELECT"&&(ft.has(O.code)&&O.preventDefault(),!O.repeat)){if(O.code==="Escape"){O.preventDefault(),Ut("menu").open?Y():I.state==="play"&&nt();return}if(O.code==="Enter"&&I.state==="intro"&&!I.paused){Nt("free");return}if(I.state==="intro"&&!I.paused&&(O.code==="ArrowLeft"||O.code==="ArrowRight")){ct(O.code==="ArrowLeft"?-1:1);return}if(O.code==="KeyT"&&!I.paused){ht();return}if(!(I.state!=="play"||I.paused)){if(O.code==="KeyP")return nt();if(O.code==="KeyR")return Dt();if(O.code==="KeyC")return J();if(O.code==="KeyM")return Bt();if(O.code==="KeyH"){B.horn(3);return}if(O.code==="KeyQ"){H(B.station+1>=Gi.length?-1:B.station+1);return}Z.keys.add(O.code)}}}),addEventListener("keyup",O=>Z.keys.delete(O.code)),addEventListener("blur",()=>{Z.clear(),I.state==="play"&&!I.paused&&nt()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(Z.clear(),I.state==="play"&&!I.paused&&nt())}),Z.onPadPress=O=>{if(O==="pause")return I.paused?Y():I.state==="play"?nt():Nt("free");I.state!=="play"||I.paused||(O==="camera"&&J(),O==="map"&&Bt(),O==="reset"&&Dt())};for(let O of document.querySelectorAll("[data-key]")){let wt=()=>{Z.keys.delete(O.dataset.key),O.classList.remove("pressed")};O.addEventListener("pointerdown",Qt=>{Qt.preventDefault(),!I.paused&&(O.setPointerCapture(Qt.pointerId),Z.keys.add(O.dataset.key),O.classList.add("pressed"))}),O.addEventListener("pointerup",wt),O.addEventListener("pointercancel",wt),O.addEventListener("lostpointercapture",wt)}addEventListener("resize",()=>s.applySize());let st=new L,Tt=new L,vt=new L,Yt=0,G="",lt=Ut("world-clock"),_t=document.querySelector(".sun-icon"),zt=new L,Mt=new Ct,gt=new Ct,Vt=!1;function ae(O,wt,Qt,fe,we,Me,De){let Ze=0,Ve=2e3;for(let[Le,C,q,it]of[[O,fe,De.x-De.w/2,De.x+De.w/2],[wt,we,0,De.h],[Qt,Me,De.z-De.d/2,De.z+De.d/2]]){if(Math.abs(C)<1e-6){if(Le<q||Le>it)return!1;continue}let et=(q-Le)/C,$=(it-Le)/C;if(et>$&&([et,$]=[$,et]),Ze=Math.max(Ze,et),Ve=Math.min(Ve,$),Ze>Ve)return!1}return!0}function Ie(){let O=r.sunDir,wt=n.position;if(vt.copy(wt).addScaledVector(O,1e3).project(n),r.elevation<-.5||vt.z>1)return 0;for(let fe of o.buildingTops)if(ae(wt.x,wt.y,wt.z,O.x,O.y,O.z,fe))return 0;for(let fe=60;fe<1600;fe*=1.35)if(wt.y+O.y*fe<di(wt.x+O.x*fe,wt.z+O.z*fe))return 0;let Qt=Math.max(Math.abs(vt.x),Math.abs(vt.y));return Se.clamp(1.25-Qt,0,1)*Se.smoothstep(r.elevation,-.5,4)}function Ee(O){let wt=Math.abs(u.speed)>3,Qt=u.slip>3.2&&wt||u.wheelspin>.3,fe=u.surface==="sand"&&u.y<.5;u.group.updateMatrixWorld();let we=new Et().copy(r.hemi.color).multiplyScalar(r.hemi.intensity*.55).add(new Et().copy(r.sun.color).multiplyScalar(r.elevation>0?r.sun.intensity*.22:0));m.smoke.uniforms.light.value.copy(we),m.dust.uniforms.light.value.copy(we),m.water.uniforms.light.value.copy(we).multiplyScalar(1.3);for(let Ve=At.length-1;Ve>=0;Ve--){let Le=At[Ve];if(Le.t-=O,Le.t<=0){At.splice(Ve,1);continue}let C=Math.min(1,Le.t/3)*70*O;for(let q=0;q<C+(pt()<C%1?1:0);q++)m.water.emit(Le.x+(pt()-.5)*.2,Jt+.3,Le.z+(pt()-.5)*.2,(pt()-.5)*1.6,8.5+pt()*3.5,(pt()-.5)*1.6,.35+pt()*.25,1.5+pt()*.6,.5,.8,.88,.95)}u.wheels.forEach((Ve,Le)=>{if(Ve.front)return;st.set(Ve.x,.05,Ve.z).applyMatrix4(u.group.matrixWorld),p.add(Le,st.x,u.y,st.z,!fe&&(Qt||u.brake>0&&u.speed>14&&u.handbrake),.24);let C=Math.min(1,(u.slip-3)/9)+u.wheelspin;!fe&&Qt&&pt()<C*60*O&&m.smoke.emit(st.x,st.y+.3,st.z,u.vx*.15+(pt()-.5)*1.5,.6+pt(),u.vz*.15+(pt()-.5)*1.5,1.2+pt()*.8,2.2+pt()*1.2,.5*Math.min(1,C+.3),.85,.85,.86),fe&&wt&&pt()<Math.min(1,Math.abs(u.speed)/25)*40*O&&m.dust.emit(st.x,st.y+.2,st.z,(pt()-.5)*2,.8+pt(),(pt()-.5)*2,.9+pt()*.6,1.4+pt(),.55,.78,.68,.52)});let Me=zt.set(Math.sin(u.heading),0,Math.cos(u.heading));for(let Ve of u.exhausts)if(st.copy(Ve).applyMatrix4(u.group.matrixWorld),u.boosting)for(let Le=0;Le<2;Le++){let C=pt(),q=pt()<.35,it=7+pt()*5;m.flames.emit(st.x,st.y,st.z,u.vx+Me.x*it,pt()*.4,u.vz+Me.z*it,.3+pt()*.25,.1+pt()*.08,1,q?.6:1.4+C,q?1.1:.8+C*1.4,q?4.5:2.8)}else u.throttle===0&&u.rpm>u.def.redline*.6&&pt()<3*O&&(m.flames.emit(st.x,st.y,st.z,u.vx+Me.x*3,0,u.vz+Me.z*3,.35,.07,1,2.2,1.1,.4),B.backfire?.());let De=u.contact;if(De&&u.impact>3){let Ve=Math.min(46,Math.floor(u.impact*2.2));for(let Le=0;Le<Ve;Le++)m.sparks.emit(De.x,u.y+.35+pt()*.4,De.z,De.nx*4+(pt()-.5)*9,1+pt()*5,De.nz*4+(pt()-.5)*9,.12+pt()*.1,.4+pt()*.5,1,6,3.2,1);if(u.impact>4)for(let Le=0;Le<4;Le++)m.dust.emit(De.x,u.y+.5,De.z,(pt()-.5)*2,pt(),(pt()-.5)*2,.6,1.1,.35,.6,.58,.55);B.impact(u.impact),D.shake=Math.max(D.shake,Math.min(.55,u.impact*.035))}let Ze=u.scrape;if(Ze){let Ve=Math.min(6,1+Math.floor(Ze.speed/8));for(let Le=0;Le<Ve;Le++)m.sparks.emit(Ze.x,u.y+.3+pt()*.3,Ze.z,-u.vx*.25+Ze.nx*2+(pt()-.5)*3,.5+pt()*2.5,-u.vz*.25+Ze.nz*2+(pt()-.5)*3,.1+pt()*.08,.25+pt()*.3,1,6,3,.9);B.scrape?.(Ze.speed)}}function ri(O){if(I.mode!=="race"||I.checkpoint>=Ai.length||I.countdown>.6)return;I.raceTime+=O,I.topSpeed=Math.max(I.topSpeed,Math.abs(u.speed));let[wt,Qt]=Ai[I.checkpoint],fe=I.lastX,we=I.lastZ,Me=u.x-fe,De=u.z-we,Ze=Me*Me+De*De,Ve=Ze?Se.clamp(((wt-fe)*Me+(Qt-we)*De)/Ze,0,1):0;Math.hypot(wt-fe-Me*Ve,Qt-we-De*Ve)<Kl&&(I.checkpoint++,I.splits.push(I.raceTime),I.checkpoint===Ai.length?rt():(bt(),B.chime(),Wt(`CHECKPOINT ${I.checkpoint} / ${Ai.length}`),I.flash=1))}function kn(O,wt){u.contact=null,u.scrape=null,u.impact=0,x.update(O,I.time,u),g.peds=x.onRoad,g.update(O,I.time,u,Me=>B.horn(Math.hypot(Me.x-u.x,Me.z-u.z)),n);for(let Me of x.events)Me.type==="hit"&&(B.impact(Math.min(Me.speed,8)),D.shake=Math.max(D.shake,.08),I.state==="play"&&Wi("pedestrian",u.x,u.z,1));if(I.state!=="play")return;It(O)&&(wt={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},u.vx=u.vz=0);let Qt=g.lastHit;Qt&&Qt.speed>4&&(I.crashes+=Qt.speed>7?1:0,Qt.police&&(Qt.car.mode!=="chase"||E.level<2)?Wi("police",Qt.x,Qt.z,1,!1):(!Qt.parked||Qt.speed>8)&&Wi("crash",Qt.x,Qt.z,1));let fe=u.impact,we=Math.ceil(O/(1/120));for(let Me=0;Me<we&&(I.lastX=u.x,I.lastZ=u.z,u.update(O/we,wt,b),fe=Math.max(fe,u.impact),ri(O/we),!I.paused);Me++);h.collide(u,O,Me=>dt(Me)),h.update(O,u),u.impact=Math.max(fe,u.impact),u.applyDamage(),Ir(),E.update(O,u,I.time,n,I.mode==="free");for(let Me of E.events)Me.type==="up"&&Wt(`WANTED  ${"\u2605".repeat(Me.level)}`),Me.type==="evaded"&&(Wt("YOU LOST THEM"),B.chime()),Me.type==="busted"&&ko()}function Wi(O,wt,Qt,fe,we=!0){I.mode==="free"&&E.crime(O,wt,Qt,fe,I.time,we)}let gi=!1;function Ir(){let O=Zn(Zt,u.x),wt=Zn($t,u.z),Qt=Math.abs(u.x-O)<jt-1&&Math.abs(u.z-wt)<jt-1;if(Qt&&!gi&&Math.abs(u.speed)>9){let fe=Math.abs(u.vx)>Math.abs(u.vz)?1:0;cs(fe,I.time)===0&&Wi("red light",u.x,u.z,1)}gi=Qt}function ko(){Wt("BUSTED"),I.flash=1.5,B.impact(4),u.reset(vn.x,vn.z,vn.heading),I.lastX=u.x,I.lastZ=u.z,D.snap(u)}let Ho=new Ts;t.info.autoReset=!1;function us(){requestAnimationFrame(us),t.info.reset();let O=Ho.getDelta(),wt=Math.min(O,.05);I.time+=wt,I.frame++;let Qt=Z.poll();I.paused||(kn(wt,Qt),I.state==="play"?(Ee(wt),D.update(u,wt)):D.orbit(u,I.time)),u.setLights(r.lampFactor,u.brake>0&&u.speed>.5,u.gear<0);let fe=st.set(u.x-Math.sin(u.heading)*s.quality.shadowRange*.35,0,u.z-Math.cos(u.heading)*s.quality.shadowRange*.35);r.update(wt,I.time,fe,n),Hh.value.copy(r.sun.color).multiplyScalar(r.elevation>-1?r.sun.intensity:.1),o.update(r.lampFactor,I.time,n,wt),l.update(I.time,r.lampFactor),f.update(r.lampFactor),a.mirrorHide.length=0,D.mode===2&&a.mirrorHide.push(u.group),a.update(I.time,r),g.sync(r.lampFactor,u,I.time);for(let et of Object.values(m))et.update(I.paused?0:wt);_.visible&&(A.position.y=12+Math.sin(I.time*2)*.6,A.rotation.y=I.time*.8,S.uniforms.intensity.value=.55+Math.sin(I.time*3)*.12,R.opacity=.65+Math.sin(I.time*3)*.15),t.toneMappingExposure=r.exposure;let we=s.grade.uniforms;we.time.value=I.time,Yt=Se.damp(Yt,Ie(),10,wt),we.sunVisible.value=s.quality.grade?Yt*.8:0,we.sunPos.value.set(vt.x*.5+.5,vt.y*.5+.5),we.sunColor.value.copy(ln.fogSunColor.value),n.getWorldDirection(Tt);let Me=Tt.dot(r.sunDir),De=Se.smoothstep(r.elevation,-1,2)*(1-Se.smoothstep(r.elevation,14,30)),Ze=s.shafts.uniforms;Ze.strength.value=vt.z<1?Se.smoothstep(Me,.25,.85)*De*.9:0,Ze.sunPos.value.copy(we.sunPos.value),Ze.color.value.copy(r.sun.color).multiplyScalar(.9);let Ve=k==="wet"?.9:k==="dry"?0:Se.smoothstep(r.lampFactor,.15,.85)*.85;if(On.wetness.value=Ve,n.updateMatrixWorld(),gt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),we.camBlur.value.set(0,0),Vt&&I.state==="play"&&!I.paused&&s.quality.grade){st.copy(n.position).addScaledVector(Tt,80).applyMatrix4(Mt);let et=st.x*.5,$=st.y*.5,St=Math.hypot(et,$);if(St<.12){let Ot=St>.035?.035/St:1;we.camBlur.value.set(et*Ot,$*Ot)}}Mt.copy(gt),Vt=!0;let Le=Se.clamp((Math.abs(u.speed)-30)/35,0,1);we.speedBlur.value=I.state==="play"&&s.quality.grade?Le*.6+(u.boosting?.45:0):0,I.flash=Math.max(0,I.flash-wt*3),we.flash.value=I.flash,we.night.value=r.nightFactor,s.bloom&&(s.bloom.strength=.36+r.lampFactor*.22),s.render(),I.state==="play"&&I.frame%2===0&&F.update(u,I,g,r,E),B.setSiren(I.state==="play"?E.sirenLevel(u):0);let C=r.clockLabel;C!==G&&(G=C,lt.textContent=C,_t.textContent=r.elevation>-1.5?"\u2600":"\u263E");let q=Jl(u.x,u.z)[0],it=u.gear>0?u.def.gears[u.gear-1]*u.def.final:u.def.gears[0]*u.def.final;if(B.update({rpm:u.rpm,throttle:u.throttle,speed:u.speed,slip:u.slip+u.wheelspin*12,boosting:u.boosting,active:I.state==="play"&&!I.paused,shoreDistance:Math.abs(n.position.x-$n),time:I.time,gear:u.gear,ratio:it,night:r.nightFactor,city:Hy[q]??.5,nearTrees:q==="SOUTHBANK"||q==="PALM DISTRICT"?.6:.2}),I.state==="play"&&!I.paused&&s.adapt(O),z&&(W.frames++,W.time+=O,W.worst=Math.max(W.worst,O),W.time>=.5)){let et=W.frames/W.time,$=W.time/W.frames*1e3;Q.textContent=`${Math.round(et)} FPS \xB7 ${$.toFixed(1)} MS \xB7 WORST ${(W.worst*1e3).toFixed(0)} \xB7 ${t.info.render.calls} DRAWS \xB7 ${(t.info.render.triangles/1e6).toFixed(1)}M TRIS \xB7 ${Math.round(s.scale*100)}% RES`,Q.classList.toggle("slow",et<50&&et>=30),Q.classList.toggle("bad",et<30),W.frames=0,W.time=0,W.worst=0}}u.onShift=O=>B.shift(O>0),await i("Warming up the engine\u2026"),D.orbit(u,0),r.update(0,0,st.set(u.x,0,u.z),n);try{await t.compileAsync(e,n)}catch{}us(),requestAnimationFrame(()=>Ut("loading").classList.add("hidden")),window.__pacific={getState:()=>({state:I.state,mode:I.mode,paused:I.paused,speed:u.speed,heading:u.heading,nitro:u.nitro,position:{x:u.x,z:u.z,y:u.y},checkpoint:I.checkpoint,raceTime:I.raceTime,quality:X,time:r.hours,gear:u.gear,rpm:u.rpm,distanceTravelled:u.distance,renderScale:s.scale,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,wanted:E.level,countdown:I.countdown,car:d}),setTime:O=>{r.cycle=!1,r.setHours(O)},setQuality:j,teleport:(O,wt,Qt=0)=>{u.reset(O,wt,Qt),D.snap(u)},step:(O,wt={})=>{let Qt={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1,...wt};for(let fe=0;fe<O&&!I.paused;fe+=1/60)I.time+=1/60,kn(1/60,Qt);return D.snap(u),window.__pacific.getState()},parked:()=>({total:g.parked.length,near:g.nearParked.length,sample:g.nearParked.slice(0,3).map(O=>[O.type,+O.x.toFixed(1),+O.z.toFixed(1),O.slot])}),traffic:()=>g.cars.map(O=>({x:+O.x.toFixed(1),z:+O.z.toFixed(1),speed:+O.speed.toFixed(1),axis:O.axis,turn:!!O.turn,hit:!!O.hit})),reset:Dt,camera:J,debug:{scene:e,atmosphere:r,pipeline:s,renderer:t,camera:n,rig:D,traffic:g,pedestrians:x,player:u,knock:h,world:b,audio:B,wanted:E,hud:F,game:I},selectCar:at}}Gy().catch(Sd);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
